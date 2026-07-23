import type { Plugin } from 'rollup';

/**
 * 修复：?vue&type=style 虚拟模块泄漏绝对路径到构建产物
 * CSS 已由 build:css 单独编译，此处解析为空模块即可
 */
export function ignoreVueStylePlugin(): Plugin {
  return {
    name: 'ignore-vue-style-imports',
    resolveId(id) {
      if (id.includes('?vue&type=style')) {
        return '\0virtual:empty-style';
      }
      return null;
    },
    load(id) {
      if (id === '\0virtual:empty-style') {
        return '';
      }
      return null;
    },
  };
}
