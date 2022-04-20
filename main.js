import Page from "./src/structure/Page.vue";
import Columns from "./src/structure/Columns.vue";
import Block from "./src/structure/Block.vue";

import SimpleLayout from "./src/ui/layouts/SimpleLayout.vue";
import SidebarLayout from "./src/ui/layouts/SideBarLayout.vue";

import SimpleHeader from "./src/ui/basic/SimpleHeader.vue";
import SimpleFooter from "./src/ui/basic/SimpleFooter.vue";


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
