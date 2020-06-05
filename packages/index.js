import Vue from 'vue';

import CZ_Button from './components/CZ-Button';

const components = {
  CZ_Button,
};

const install = function (Vue) {
  // 判断是否可以安装
  if (install.installed) return
  // 遍历注册全局组件
  for (const key in components) {
    components[key].install(Vue)
  }
}

// 判断是否是直接引入文件
if (typeof window !== undefined && window.Vue) {
  install(window.Vue)
}

export default Object.assign({
  install
}, components)