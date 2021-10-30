import { _ as _export_sfc, g as defineComponent, h as useData, i as computed, u as unref, o as openBlock, c as createElementBlock, a as createBaseVNode, j as withBase, d as createCommentVNode, t as toDisplayString, k as createBlock, N as NavLink, F as Fragment, l as renderList, r as resolveComponent, b as createVNode, m as renderSlot } from "./app.16d6ae43.js";
var HomeHero_vue_vue_type_style_index_0_scoped_true_lang = "";
const _hoisted_1$3 = {
  key: 0,
  class: "home-hero"
};
const _hoisted_2$3 = {
  key: 0,
  class: "figure"
};
const _hoisted_3$2 = ["src", "alt"];
const _hoisted_4$1 = {
  key: 1,
  id: "main-title",
  class: "title"
};
const _hoisted_5$1 = {
  key: 2,
  class: "tagline"
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const { site, frontmatter } = useData();
    const showHero = computed(() => {
      const { heroImage, heroText: heroText2, tagline: tagline2, actionLink, actionText } = frontmatter.value;
      return heroImage || heroText2 || tagline2 || actionLink && actionText;
    });
    const heroText = computed(() => frontmatter.value.heroText || site.value.title);
    const tagline = computed(() => frontmatter.value.tagline || site.value.description);
    return (_ctx, _cache) => {
      return unref(showHero) ? (openBlock(), createElementBlock("header", _hoisted_1$3, [
        unref(frontmatter).heroImage ? (openBlock(), createElementBlock("figure", _hoisted_2$3, [
          createBaseVNode("img", {
            class: "image",
            src: unref(withBase)(unref(frontmatter).heroImage),
            alt: unref(frontmatter).heroAlt
          }, null, 8, _hoisted_3$2)
        ])) : createCommentVNode("v-if", true),
        unref(heroText) ? (openBlock(), createElementBlock("h1", _hoisted_4$1, toDisplayString(unref(heroText)), 1)) : createCommentVNode("v-if", true),
        unref(tagline) ? (openBlock(), createElementBlock("p", _hoisted_5$1, toDisplayString(unref(tagline)), 1)) : createCommentVNode("v-if", true),
        unref(frontmatter).actionLink && unref(frontmatter).actionText ? (openBlock(), createBlock(NavLink, {
          key: 3,
          item: { link: unref(frontmatter).actionLink, text: unref(frontmatter).actionText },
          class: "action"
        }, null, 8, ["item"])) : createCommentVNode("v-if", true),
        unref(frontmatter).altActionLink && unref(frontmatter).altActionText ? (openBlock(), createBlock(NavLink, {
          key: 4,
          item: {
            link: unref(frontmatter).altActionLink,
            text: unref(frontmatter).altActionText
          },
          class: "action alt"
        }, null, 8, ["item"])) : createCommentVNode("v-if", true)
      ])) : createCommentVNode("v-if", true);
    };
  }
});
var HomeHero = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-d52f5e5c"]]);
var HomeFeatures_vue_vue_type_style_index_0_scoped_true_lang = "";
const _hoisted_1$2 = {
  key: 0,
  class: "home-features"
};
const _hoisted_2$2 = { class: "wrapper" };
const _hoisted_3$1 = { class: "container" };
const _hoisted_4 = { class: "features" };
const _hoisted_5 = {
  key: 0,
  class: "title"
};
const _hoisted_6 = {
  key: 1,
  class: "details"
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const { frontmatter } = useData();
    const hasFeatures = computed(() => {
      return frontmatter.value.features && frontmatter.value.features.length > 0;
    });
    const features = computed(() => {
      return frontmatter.value.features ? frontmatter.value.features : [];
    });
    return (_ctx, _cache) => {
      return unref(hasFeatures) ? (openBlock(), createElementBlock("div", _hoisted_1$2, [
        createBaseVNode("div", _hoisted_2$2, [
          createBaseVNode("div", _hoisted_3$1, [
            createBaseVNode("div", _hoisted_4, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(unref(features), (feature, index) => {
                return openBlock(), createElementBlock("section", {
                  key: index,
                  class: "feature"
                }, [
                  feature.title ? (openBlock(), createElementBlock("h2", _hoisted_5, toDisplayString(feature.title), 1)) : createCommentVNode("v-if", true),
                  feature.details ? (openBlock(), createElementBlock("p", _hoisted_6, toDisplayString(feature.details), 1)) : createCommentVNode("v-if", true)
                ]);
              }), 128))
            ])
          ])
        ])
      ])) : createCommentVNode("v-if", true);
    };
  }
});
var HomeFeatures = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-0905aaa2"]]);
var HomeFooter_vue_vue_type_style_index_0_scoped_true_lang = "";
const _hoisted_1$1 = {
  key: 0,
  class: "footer"
};
const _hoisted_2$1 = { class: "container" };
const _hoisted_3 = { class: "text" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const { frontmatter } = useData();
    return (_ctx, _cache) => {
      return unref(frontmatter).footer ? (openBlock(), createElementBlock("footer", _hoisted_1$1, [
        createBaseVNode("div", _hoisted_2$1, [
          createBaseVNode("p", _hoisted_3, toDisplayString(unref(frontmatter).footer), 1)
        ])
      ])) : createCommentVNode("v-if", true);
    };
  }
});
var HomeFooter = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-280bc46c"]]);
var Home_vue_vue_type_style_index_0_scoped_true_lang = "";
const _hoisted_1 = {
  class: "home",
  "aria-labelledby": "main-title"
};
const _hoisted_2 = { class: "home-content" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    return (_ctx, _cache) => {
      const _component_Content = resolveComponent("Content");
      return openBlock(), createElementBlock("main", _hoisted_1, [
        createVNode(HomeHero),
        renderSlot(_ctx.$slots, "hero", {}, void 0, true),
        createVNode(HomeFeatures),
        createBaseVNode("div", _hoisted_2, [
          createVNode(_component_Content)
        ]),
        renderSlot(_ctx.$slots, "features", {}, void 0, true),
        createVNode(HomeFooter),
        renderSlot(_ctx.$slots, "footer", {}, void 0, true)
      ]);
    };
  }
});
var Home = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-7a7f3d6e"]]);
export { Home as default };
