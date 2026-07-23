import { downloadImg2Base64, replaceSpacesOutsideHTMLTags, parse, stringify, generateUUID } from '../../utils/utils.mjs';
import { px2unit, unit2px } from '../../utils/devicePixelRatio.mjs';
import { nextTick, reactive } from 'vue-demi';
import { element2PreviewWrapper, formatter } from '../../utils/elementUtil.mjs';
import MathCalc from '../../utils/numberUtil.mjs';
import { lastHeadList, previewTableStatisticsList, previewRowStatisticsList, statisticsData } from '../../utils/table/dataTable.mjs';
import { isEmpty } from 'lodash';

async function autoPage(previewEl, pageList, panel, previewDataList) {
  if (previewDataList == null) {
    previewDataList = [{}];
  }
  const variable = {
    pageIndex: 0,
    pageSize: 0,
    nowDate: /* @__PURE__ */ new Date()
  };
  let offsetLastElementTop = 0;
  const fixedPreviewElementList = [];
  const previewElementList = [];
  let previewContext = {
    currentPreview: void 0,
    autoPageIs: false,
    previewData: {},
    panel,
    pageList: [],
    currentPage: void 0,
    top: 0,
    bottom: panel.height,
    // 单位 mm
    pagingRepetition: true
  };
  for (let myElement of previewContext.panel.elementList) {
    handleElement(myElement);
  }
  if (previewContext.panel.pageHeader) {
    handleElement(previewContext.panel.pageHeader);
  }
  if (previewContext.panel.pageFooter) {
    handleElement(previewContext.panel.pageFooter);
  }
  function handleElement(myElement) {
    const previewElement = element2PreviewWrapper(myElement);
    if (previewElement.previewWrapperList != null && previewElement.previewWrapperList.length > 0) {
      for (let i = previewElement.previewWrapperList.length - 1; i >= 0; i--) {
        const pageNumPreviewElement = previewElement.previewWrapperList[i];
        if (pageNumPreviewElement.option.fixed) {
          pageNumPreviewElement.x = pageNumPreviewElement.x + previewElement.x;
          pageNumPreviewElement.y = pageNumPreviewElement.y + previewElement.y;
          fixedPreviewElementList.push(pageNumPreviewElement);
          previewElement.previewWrapperList.splice(i, 1);
        }
      }
    }
    if (previewElement.option.fixed) {
      fixedPreviewElementList.push(previewElement);
    } else {
      previewElementList.push(previewElement);
    }
  }
  previewElementList.sort((o1, o2) => {
    return o1.y - o2.y;
  });
  for (let previewWrapper of previewElementList) {
    previewWrapper.offsetLastElementTop = MathCalc.subScale(previewWrapper.y, offsetLastElementTop);
    offsetLastElementTop = MathCalc.sumScale(previewWrapper.y, previewWrapper.height);
  }
  for (let previewData of previewDataList) {
    previewContext.previewData = previewData;
    while (previewContext.pagingRepetition) {
      previewContext.pagingRepetition = false;
      previewContext.currentPreview = void 0;
      await newPage();
      await installPreviewElement(previewElementList);
    }
    previewContext.pagingRepetition = true;
  }
  previewContext.autoPageIs = false;
  variable.pageSize = pageList.length;
  for (let i = 0; i < pageList.length; i++) {
    previewContext.currentPage = pageList[i];
    variable.pageIndex = i + 1;
    await installPreviewElement(fixedPreviewElementList);
  }
  if (panel.pageSize == "AutoHeight") {
    await nextTick();
    const lastElementChild = previewEl.value[0].lastElementChild;
    if (lastElementChild) {
      const rect = lastElementChild.getBoundingClientRect();
      pageList[0].height = px2unit(rect.bottom, panel);
      panel.runtimeOption.printRealHeight = pageList[0].height;
    }
  }
  async function installPreviewElement(previewElementList2) {
    for (let i = 0; i < previewElementList2.length; i++) {
      const oldPreviewWrapper = previewElementList2[i];
      let previewWrapper = element2PreviewWrapper(previewElementList2[i]);
      if (!previewWrapper.option.fixed) {
        if (previewContext.currentPage.offsetTop > 0 && previewContext.currentPreview) {
          if (previewContext.currentPreview.heightIs) {
            previewWrapper.y = previewContext.currentPreview.y + previewContext.currentPreview.height + previewWrapper.offsetLastElementTop;
          } else {
            previewWrapper.y = MathCalc.sumScale(previewContext.currentPage.offsetTop, previewWrapper.offsetLastElementTop);
          }
        }
        if (previewWrapper.type != "PageFooter" && previewContext.currentPage.previewWrapperList.length > 0 && (await isNeedNewPage(previewWrapper.y, previewContext.bottom) || await isNeedNewPage(previewWrapper.y + previewWrapper.height, previewContext.bottom))) {
          previewWrapper.y = 1;
          previewContext.currentPage.offsetTop = 1;
        }
      }
      if (previewWrapper.option.fixed && previewWrapper.option.displayStrategy != void 0) {
        switch (previewWrapper.option.displayStrategy) {
          case "firstPage":
            if (variable.pageIndex != 1) {
              continue;
            }
            break;
          case "lastPage":
            if (variable.pageIndex != variable.pageSize) {
              continue;
            }
            break;
          case "none":
            continue;
          case "oddPage":
            if (variable.pageIndex % 2 != 1) {
              continue;
            }
            break;
          case "evenPage":
            if (variable.pageIndex % 2 != 0) {
              continue;
            }
            break;
        }
      }
      previewContext.currentPreview = previewWrapper;
      let previewDataTmp;
      if (previewWrapper.field) {
        previewDataTmp = previewContext.previewData[previewWrapper.field];
      }
      if (!previewDataTmp) {
        previewDataTmp = formatter(previewWrapper, variable);
      }
      if (!previewDataTmp) {
        previewDataTmp = previewWrapper.data;
      }
      if (previewWrapper.type == "Image") {
        previewWrapper.data = previewDataTmp;
        if (!isEmpty(previewWrapper.data) && previewWrapper.data.startsWith("http")) {
          try {
            previewWrapper.data = await downloadImg2Base64(previewWrapper.data);
          } catch (e) {
            previewWrapper.data = "\u56FE\u7247\u52A0\u8F7D\u9519\u8BEF";
          }
        }
        previewContext.currentPage.previewWrapperList.push(previewWrapper);
        await nextTick();
      } else if (previewWrapper.type == "Text" || previewWrapper.type == "PageNum" || previewWrapper.type == "TextTime") {
        if (previewWrapper.type == "PageNum") {
          previewWrapper = element2PreviewWrapper(previewWrapper);
          previewContext.currentPreview = previewWrapper;
          previewElementList2[i] = previewWrapper;
        }
        if (previewWrapper.contentType == "Text") {
          if (previewDataTmp) {
            previewDataTmp = replaceSpacesOutsideHTMLTags(previewDataTmp);
          }
          await autoTextElement(previewDataTmp, true);
        }
        previewWrapper.data = previewDataTmp;
        if (previewWrapper.contentType == "QrCode") {
          previewContext.currentPage.previewWrapperList.push(previewWrapper);
          await nextTick();
        }
        if (previewWrapper.contentType == "Barcode") {
          previewContext.currentPage.previewWrapperList.push(previewWrapper);
          await nextTick();
        }
      } else if (previewWrapper.type == "DataTable") {
        let tableRowIndex = 0;
        await autoTableRow(previewContext, previewDataTmp, tableRowIndex);
      } else if (previewWrapper.type == "Container") {
        previewContext.currentPage.previewWrapperList.push(previewWrapper);
        const tmpPage = previewContext.currentPage;
        previewContext.currentPage = previewWrapper;
        previewWrapper.previewWrapperList = [];
        await installPreviewElement(oldPreviewWrapper.previewWrapperList);
        previewContext.currentPage = tmpPage;
      } else if (previewWrapper.type == "PageHeader") {
        previewContext.currentPage.previewWrapperList.push(previewWrapper);
        const tmpPage = previewContext.currentPage;
        previewContext.currentPage = previewWrapper;
        previewWrapper.previewWrapperList = [];
        await installPreviewElement(oldPreviewWrapper.previewWrapperList);
        previewContext.currentPage = tmpPage;
      } else if (previewWrapper.type == "PageFooter") {
        previewContext.currentPage.previewWrapperList.push(previewWrapper);
        const tmpPage = previewContext.currentPage;
        previewContext.currentPage = previewWrapper;
        previewWrapper.previewWrapperList = [];
        await installPreviewElement(oldPreviewWrapper.previewWrapperList);
        previewContext.currentPage = tmpPage;
      } else {
        previewContext.currentPage.previewWrapperList.push(previewWrapper);
      }
      if (!previewContext.currentPreview.heightIs) {
        previewContext.currentPage.offsetTop = await computeBottom(previewContext.currentPreview);
      }
      previewContext.currentPreview = previewWrapper;
    }
  }
  async function autoTextElement(previewData, first) {
    let previewWrapper = previewContext.currentPreview;
    previewWrapper.data = previewData;
    previewWrapper.heightIs = false;
    previewContext.currentPage.previewWrapperList.push(previewWrapper);
    await nextTick();
    const height = previewWrapper.target.clientHeight;
    if (previewWrapper.option.autoTextHeight == null || !previewWrapper.option.autoTextHeight) {
      previewWrapper.heightIs = true;
      return false;
    }
    if (first && height < previewWrapper.runtimeOption.height) {
      previewWrapper.heightIs = true;
      return false;
    } else {
    }
    if (previewWrapper.y + px2unit(height, panel) < previewContext.bottom) {
      return false;
    } else {
    }
    let mid = await binary_search(previewWrapper, previewData, 1, previewData.length);
    if (mid > 0 && mid < previewData.length) {
      if (previewContext.autoPageIs) {
        await newPage();
        previewContext.currentPreview = element2PreviewWrapper(previewWrapper);
        previewContext.currentPreview.y = previewContext.top;
        await autoTextElement(previewData.substring(mid + 1, previewData.length), false);
        return true;
      }
    }
    return false;
  }
  async function autoTableRow(previewContext2, previewDataList2, index) {
    if (previewDataList2 == null) {
      previewDataList2 = [];
    }
    let previewWrapper = previewContext2.currentPreview;
    if (previewWrapper.option.tableHeightType == "AUTO") {
      previewWrapper.heightIs = false;
    }
    previewContext2.currentPage.previewWrapperList.push(previewWrapper);
    await nextTick();
    const table = previewWrapper.target;
    if (!table) {
      return false;
    }
    const tableHeadList = [...previewWrapper.tableHeadList];
    const headList = lastHeadList(tableHeadList);
    const bodyList = previewWrapper.tableBodyList[0];
    if (previewWrapper.statisticsList == null) {
      previewWrapper.statisticsList = [];
    }
    const tableStatisticsList = [...previewWrapper.statisticsList];
    const tableStatisticsSize = tableStatisticsList.length;
    let statisticsListWrapper = {};
    let tableStaticsListWrapper = {};
    if (previewWrapper.tableHeadHiddenIs) {
      previewWrapper.tableHeadList.length = 0;
      for (let j = 0; j < bodyList.length; j++) {
        bodyList[j].runtimeOption.width = headList[j].runtimeOption.width;
      }
    }
    previewWrapper.tableBodyList.length = 0;
    previewWrapper.statisticsList.length = 0;
    if (index < previewDataList2.length) {
      previewTableStatisticsList(tableStatisticsList, previewWrapper.statisticsList, statisticsListWrapper, headList);
    }
    const previewDataTmpList = [];
    let i = index;
    for (; i < previewDataList2.length + tableStatisticsSize; i++) {
      const rowList = [];
      if (i < previewDataList2.length) {
        const previewData = previewDataList2[i];
        previewDataTmpList.push(previewData);
        if (!previewData["autoIncrement"]) {
          previewData["autoIncrement"] = i + 1;
        }
        for (let j = 0; j < headList.length; j++) {
          const head = headList[j];
          bodyList[j].data = previewData[head.field];
          rowList.push(element2PreviewWrapper(bodyList[j]));
        }
        previewWrapper.tableBodyList.push(rowList);
      } else {
        const tableStatisticsIndex = i - previewDataList2.length;
        const rowList2 = [...tableStatisticsList[tableStatisticsIndex]];
        let hasCell = previewRowStatisticsList(rowList2, tableStaticsListWrapper, headList, "tableStatisticsIs");
        if (hasCell) {
          previewWrapper.statisticsList.push(rowList2);
        }
      }
      await nextTick();
      if (previewWrapper.option.tableHeightType == "FIXED") {
        if (table.childNodes[1].clientHeight > unit2px(previewWrapper.height, panel)) {
          if (i == index) {
            previewWrapper.previewTableRowIndex = i + 1;
            previewContext2.pagingRepetition = true;
          } else {
            previewWrapper.tableBodyList.pop();
            previewDataTmpList.pop();
            previewWrapper.previewTableRowIndex = i;
            previewContext2.pagingRepetition = true;
          }
          statisticsData(previewDataTmpList, statisticsListWrapper);
          if (i >= previewDataList2.length) {
            statisticsData(previewDataList2, tableStaticsListWrapper);
          }
          previewDataTmpList.pop();
          break;
        }
      }
      if (await isNeedNewPage(unit2px(previewWrapper.y, panel) + table.clientHeight, unit2px(previewContext2.bottom, panel))) {
        previewWrapper.tableBodyList.pop();
        previewDataTmpList.pop();
        statisticsData(previewDataTmpList, statisticsListWrapper);
        previewContext2.currentPreview = element2PreviewWrapper(previewWrapper);
        previewWrapper = previewContext2.currentPreview;
        if (!previewWrapper.option.tablePageHeadIs) {
          previewWrapper.tableHeadHiddenIs = true;
        }
        previewWrapper.tableHeadList = [...tableHeadList];
        previewWrapper.statisticsList = [...tableStatisticsList];
        previewWrapper.runtimeOption = parse(stringify(previewWrapper.runtimeOption, "parent"), {});
        previewWrapper.tableBodyList = [bodyList];
        previewWrapper.y = previewContext2.top + 1;
        await autoTableRow(previewContext2, previewDataList2, i);
        break;
      }
    }
    if (i >= previewDataList2.length) {
      statisticsData(previewDataTmpList, statisticsListWrapper);
    }
    statisticsData(previewDataList2, tableStaticsListWrapper);
  }
  async function isNeedNewPage(y, bottom, callback) {
    if (!previewContext.autoPageIs) {
      return false;
    }
    if (previewContext.panel.pageSize == "AutoHeight") {
      return false;
    }
    if (y > bottom + 1) {
      if (callback) {
        callback();
      }
      await newPage();
      return true;
    }
    return false;
  }
  async function newPage() {
    previewContext.currentPage = reactive({
      id: generateUUID(),
      width: previewContext.panel.width,
      height: previewContext.panel.height,
      offsetTop: 0,
      previewWrapperList: []
    });
    previewContext.pageList.push(previewContext.currentPage);
    previewContext.autoPageIs = true;
    pageList.push(previewContext.currentPage);
    await nextTick();
    if (previewContext.panel.pageHeader) {
      let preview = previewContext.panel.pageHeader;
      previewContext.currentPage.previewWrapperList.push(preview);
      previewContext.top = await computeBottom(preview);
    }
    if (previewContext.panel.pageFooter) {
      let preview = previewContext.panel.pageFooter;
      previewContext.currentPage.previewWrapperList.push(preview);
      previewContext.bottom = await computeTop(preview);
    }
  }
  async function computeBottom(previewWrapper) {
    await nextTick();
    if (!previewWrapper.target) {
      return;
    }
    const div = previewWrapper.target;
    return MathCalc.toFixed(px2unit(MathCalc.sumScale(div.offsetTop, div.offsetHeight), panel));
  }
  async function computeTop(previewWrapper) {
    await nextTick();
    if (!previewWrapper.target) {
      return;
    }
    const div = previewWrapper.target;
    return MathCalc.toFixed(px2unit(div.offsetTop, panel));
  }
  async function computeTextHeight(previewWrapper, previewDataTmp) {
    previewWrapper.data = previewDataTmp;
    await nextTick();
    const itemRef = previewWrapper.target;
    if (!itemRef) {
      return;
    }
    const height = previewWrapper.target.clientHeight;
    return previewWrapper.y + px2unit(height, panel) < previewContext.bottom;
  }
  async function binary_search(previewWrapper, previewData, low, height) {
    if (low > height) {
      return -1;
    }
    const mid = Math.floor((height + low) / 2);
    let isH = await computeTextHeight(previewWrapper, previewData.substring(0, mid + 2));
    let isL = await computeTextHeight(previewWrapper, previewData.substring(0, mid + 1));
    if (isL && !isH) {
      return mid;
    } else if (!isH) {
      height = mid - 1;
      return binary_search(previewWrapper, previewData, low, height);
    } else if (isL) {
      low = mid + 1;
      return binary_search(previewWrapper, previewData, low, height);
    } else {
      return -1;
    }
  }
}

export { autoPage };
//# sourceMappingURL=autoPage.mjs.map
