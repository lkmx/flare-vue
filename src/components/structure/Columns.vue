<template>
  <section class="--flare --flare-frame --flare-columns" :class="classes" :style="style">
    <slot></slot>
  </section>
</template>

<script>

export default {
  // This method processes the mark up passed to the component
  // and adds the anonymous blocks wherever is necessary
  created() {
    this.process();
  },
  mounted() {
    this.process();
  },
  updated() {
    this.process();
  },
  methods: {
    process() {
      this.tagBlocks();
    },
    tagBlocks() {
      if(this.$el) {
        for (let i = 0; i < this.$el.children.length; i++) {
          const node = this.$el.children[i];
          for (let breakpoint in this.numbers) {
            const colNumber = this.numbers[breakpoint];
            if(colNumber == 2 && (this.weight == "left" || this.weight == "right")) {
              //console.log(i, this.weight, breakpoint);
            }
            if(colNumber == 3 && this.weight == "middle") {
              //console.log(i, this.weight, breakpoint);
            }
            if ((i % colNumber) < colNumber / 2) {
              node.classList.add(`--flare-block--${breakpoint}-left`);
            }
           if ((i % colNumber) >=  colNumber / 2) {
              node.classList.add(`--flare-block--${breakpoint}-right`);
            }
            if (colNumber % 2 > 0 && i == Math.floor(colNumber / 2)) {
              node.classList.remove(`--flare-block--${breakpoint}-left`);
              node.classList.remove(`--flare-block--${breakpoint}-right`);
              node.classList.add(`--flare-block--${breakpoint}-middle`);
            }
            if (colNumber == 1) {
              node.classList.remove(`--flare-block--${breakpoint}-left`);
              node.classList.remove(`--flare-block--${breakpoint}-right`);
              node.classList.remove(`--flare-block--${breakpoint}-middle`);
              node.classList.add(`--flare-block--${breakpoint}-single`);
            } else {
              node.classList.remove(`--flare-block--${breakpoint}-single`);
            }
          }
        }
      }
    },
  },
  computed: {
    classes() {
      return [
        // This could be done itearating the array but
        // explicit mode here is preferred 
        "--flare-columns--xxs-mode-" + this.modes["xxs"],
        "--flare-columns--xs-mode-" + this.modes["xs"],
        "--flare-columns--s-mode-" + this.modes["s"],
        "--flare-columns--m-mode-" + this.modes["m"],
        "--flare-columns--l-mode-" + this.modes["l"],
        "--flare-columns--xl-mode-" + this.modes["xl"],
        "--flare-columns--xxl-mode-" + this.modes["xxl"],
        "--flare-columns--xxxl-mode-" + this.modes["xxxl"],
        "--flare-columns--xxs-" + this.numbers["xxs"],
        "--flare-columns--xs-" + this.numbers["xs"],
        "--flare-columns--s-" + this.numbers["s"],
        "--flare-columns--m-" + this.numbers["m"],
        "--flare-columns--l-" + this.numbers["l"],
        "--flare-columns--xl-" + this.numbers["xl"],
        "--flare-columns--xxl-" + this.numbers["xxl"],
        "--flare-columns--xxxl-" + this.numbers["xxxl"],
        "--flare-weight--xxs-" + this.weights["xxs"],
        "--flare-weight--xs-" + this.weights["xs"],
        "--flare-weight--s-" + this.weights["s"],
        "--flare-weight--m-" + this.weights["m"],
        "--flare-weight--l-" + this.weights["l"],
        "--flare-weight--xl-" + this.weights["xl"],
        "--flare-weight--xxl-" + this.weights["xxl"],
        "--flare-weight--xxxl-" + this.weights["xxxl"],
      ]
    },
    style() {
      return {
        "--f-columns-number-xxs": this.numbers["xxs"],
        "--f-columns-number-xs": this.numbers["xs"],
        "--f-columns-number-s": this.numbers["s"],
        "--f-columns-number-m": this.numbers["m"],
        "--f-columns-number-l": this.numbers["l"],
        "--f-columns-number-xl": this.numbers["xl"],
        "--f-columns-number-xxl": this.numbers["xxl"],
        "--f-columns-number-xxxl": this.numbers["xxxl"],
      };
    },
    modes() {
      return {
        "xxs": this.modeXxs || this.modeXs || this.modeS || this.mode,
        "xs": this.modeXs || this.modeS || this.mode,
        "s": this.modeS || this.mode,
        "m": this.modeM || this.mode,
        "l": this.modeL || this.mode,
        "xl": this.modeXl || this.modeL || this.mode,
        "xxl": this.modeXxl || this.modeXl || this.modeL || this.mode,
        "xxxl": this.modeXxxl || this.modeXxl || this.modeXl || this.modeL || this.mode,
      }
    },
    numbers() {
      return {
        "xxs": this.numberXxs || this.numberXs || this.numberS || this.number,
        "xs": this.numberXs || this.numberS || this.number,
        "s": this.numberS || this.number,
        "m": this.numberM || this.number,
        "l": this.numberL || this.number,
        "xl": this.numberXl || this.numberL || this.number,
        "xxl": this.numberXxl || this.numberXl || this.numberL || this.number,
        "xxxl": this.numberXxxl || this.numberXxl || this.numberXl || this.numberL || this.number,
      }
    },
    weights() {
      return {
        "xxs": this.weightXxs || this.weightXs || this.weightS || this.weight,
        "xs": this.weightXs || this.weightS || this.weight,
        "s": this.weightS || this.weight,
        "m": this.weightM || this.weight,
        "l": this.weightL || this.weight,
        "xl": this.weightXl || this.weightL || this.weight,
        "xxl": this.weightXxl || this.weightXl || this.weightL || this.weight,
        "xxxl": this.weightXxxl || this.weightXxl || this.weightXl || this.weightL || this.weight,
      }
    },
  },
  name: "Columns",
  props: {
    mode: {
      type: String,
      default: "normal",
      required: false,
    },
    modeXxs: {
      type: String,
      default: null,
      required: false,
    },
    modeXs: {
      type: String,
      default: null,
      required: false,
    },
    modeS: {
      type: String,
      default: null,
      required: false,
    },
    modeM: {
      type: String,
      default: null,
      required: false,
    },
    modeL: {
      type: String,
      default: null,
      required: false,
    },
    modeXl: {
      type: String,
      default: null,
      required: false,
    },
    modeXxl: {
      type: String,
      default: null,
      required: false,
    },
    modeXxxl: {
      type: String,
      default: null,
      required: false,
    },
    number: {
      type: String,
      default: "1",
      required: false,
    },
    numberXxs: {
      type: String,
      default: null,
      required: false,
    },
    numberXs: {
      type: String,
      default: null,
      required: false,
    },
    numberS: {
      type: String,
      default: null,
      required: false,
    },
    numberM: {
      type: String,
      default: null,
      required: false,
    },
    numberL: {
      type: String,
      default: null,
      required: false,
    },
    numberXl: {
      type: String,
      default: null,
      required: false,
    },
    numberXxl: {
      type: String,
      default: null,
      required: false,
    },
    numberXxxl: {
      type: String,
      default: null,
      required: false,
    },
    // Weights
    weight: {
      type: String,
      default: "normal",
      required: false,
    },
    weightXxs: {
      type: String,
      default: null,
      required: false,
    },
    weightXs: {
      type: String,
      default: null,
      required: false,
    },
    weightS: {
      type: String,
      default: null,
      required: false,
    },
    weightM: {
      type: String,
      default: null,
      required: false,
    },
    weightL: {
      type: String,
      default: null,
      required: false,
    },
    weightXl: {
      type: String,
      default: null,
      required: false,
    },
    weightXxl: {
      type: String,
      default: null,
      required: false,
    },
    weightXxxl: {
      type: String,
      default: null,
      required: false,
    },
  },
};


</script>