import Vue from 'vue';

import Page from "./src/structure/Page.vue";
import Columns from "./src/structure/Columns.vue";
import Block from "./src/structure/Block.vue";

import SimpleLayout from "./src/ui/layouts/SimpleLayout.vue";
import SidebarLayout from "./src/ui/layouts/SideBarLayout.vue";

import SimpleHeader from "./src/ui/basic/SimpleHeader.vue";
import SimpleFooter from "./src/ui/basic/SimpleFooter.vue";


Vue.component("Page", Page);
Vue.component("Column", Columns);
Vue.component("Columns", Columns);
Vue.component("Block", Block);
Vue.component("SimpleLayout", SimpleLayout);
Vue.component("SidebarLayout", SidebarLayout);
Vue.component("SimpleHeader", SimpleHeader);
Vue.component("SimpleFooter", SimpleFooter);