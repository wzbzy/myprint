<template>
    <my-popover
        trigger="click"
        ref="popoverRef"
        :disabled="disabled"
        placement="bottom">
        <template #reference>
            <div class="display-flex my-select" :class="[{'my-icon-disabled': disabled,
            'my-select-middle': size== 'middle'
            }, 'my-color-icon']"
                 @click="wrapperClick">
                <div class="my-select-input" :class="{
                    'my-select-input_placeholder': isEmpty(modelValue)
                }">
                    {{ isEmpty(modelValue) ? placeholder : data.label }}
                </div>
                <i v-if="!isEmpty(modelValue) && !disabled"
                   class="my-select-clear"
                   role="button"
                   :aria-label="i18n('common.clear')"
                   :title="i18n('common.clear')" />
                <my-icon class="my-select-arrow my-style-font_arrow icon-jt-x iconfont my-icon-downList-arrow"
                         :focusBk="false"
                         :class="[{
                             'my-select-arrow-middle': size== 'middle'
                         }]"
                         :size="8"
                         :disabled="disabled">
                </my-icon>
            </div>
        </template>
        <my-scrollbar :height="height">
            <element-align :model-value="modelValue"
                           showSelectedStatus
                           :elementAlignList="dataList"
                           @change="change" />
        </my-scrollbar>
    </my-popover>

</template>

<script setup lang="ts">
import ElementAlign from '@myprint/design/components/content/toolbar/toolbar-style/element-align.vue';
import MyScrollbar from '@myprint/design/components/my/scrollbar/my-scrollbar.vue';
import MyPopover from '@myprint/design/components/my/popover/my-popover.vue';
import MyIcon from '@myprint/design/components/my/icon/my-icon.vue';
import { isEmpty } from 'lodash';
import { reactive, ref, watch } from 'vue-demi';
import { i18n } from '@myprint/design/locales';

const emit = defineEmits(['update:modelValue', 'change']);

const props = withDefaults(defineProps<{
        disabled?: boolean,
        showSelectedStatus?: boolean,
        modelValue: string | number | null | undefined,
        dataList: any[],
        height?: string,
        size?: 'small' | 'middle',
        placeholder?: string,
    }>(),
    {
        disabled: false,
        showSelectedStatus: false,
        height: '270px',
        size: 'small',
        placeholder: i18n('common.place.select')
    });

const data = reactive({
    label: ''
});
const popoverRef = ref<InstanceType<typeof MyPopover>>();
watch(() => props.modelValue, (newVal, _oldVal) => {
    if (isEmpty(newVal)) {
        data.label = '';
        return;
    }
    for (let itemList of props.dataList) {
        if (itemList instanceof Array) {
            for (let item of itemList) {
                if (props.modelValue == item.value) {
                    data.label = item.label;
                }
            }
        } else {
            if (props.modelValue == itemList.value) {
                data.label = itemList.label;
            }
        }
    }
}, { immediate: true });

function change(val: any) {
    emit('update:modelValue', val.value);
    emit('change', val.value);
    data.label = val.label;
    popoverRef.value!.close();
}

function clear() {
    data.label = '';
    popoverRef.value!.close();
    emit('update:modelValue', null);
    emit('change', null);
}

// 清除图标是 v-if 条件渲染节点，个别环境下监听器不会 patch 上去；
// 委托给稳定挂载的包裹层处理，target 命中 .my-select-clear 即视为清空
function wrapperClick(e: MouseEvent) {
    if (!props.disabled && (e.target as HTMLElement)?.classList?.contains('my-select-clear')) {
        e.stopPropagation();
        clear();
    }
}
</script>
