import '@lkmx/flare';

import Page from "./structure/Page.vue";
import Columns from "./structure/Columns.vue";
import Block from "./structure/Block.vue";

import SimpleLayout from "./ui/layouts/SimpleLayout.vue";
import SidebarLayout from "./ui/layouts/SideBarLayout.vue";

import SimpleHeader from "./ui/basic/SimpleHeader.vue";
import SimpleFooter from "./ui/basic/SimpleFooter.vue";


const components = {
  Page, 
  "Column": Columns, 
  Columns, 
  Block, 
  SimpleLayout, 
  SidebarLayout,
  SimpleHeader, 
  SimpleFooter,
};

export default {
  install(Vue) {
    for (const name in components) {
      Vue.component(name, components[name]);
    }
  },
};
