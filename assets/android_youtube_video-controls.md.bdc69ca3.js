import { o as openBlock, c as createElementBlock, a as createBaseVNode, r as resolveComponent, b as createVNode, w as withCtx, e as createTextVNode, f as createStaticVNode, u as unref } from "./app.16d6ae43.js";
var vidPlayPause = "/sop/assets/youtube-video-play-pause.beaf6714.mp4";
var vidFullscreen = "/sop/assets/youtube-video-fullscreen.629deb3a.mp4";
var vidSeeking = "/sop/assets/youtube-video-seeking.9f7ff3af.mp4";
const _hoisted_1$4 = {
  width: "1.2em",
  height: "1.2em",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 24 24"
};
const _hoisted_2$4 = /* @__PURE__ */ createBaseVNode("path", {
  d: "M8 5.14v14l11-7l-11-7z",
  fill: "currentColor"
}, null, -1);
const _hoisted_3$4 = [
  _hoisted_2$4
];
function render$3(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$4, _hoisted_3$4);
}
var IconPlay = { name: "mdi-play", render: render$3 };
const _hoisted_1$3 = {
  width: "1.2em",
  height: "1.2em",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 24 24"
};
const _hoisted_2$3 = /* @__PURE__ */ createBaseVNode("path", {
  d: "M14 19h4V5h-4M6 19h4V5H6v14z",
  fill: "currentColor"
}, null, -1);
const _hoisted_3$3 = [
  _hoisted_2$3
];
function render$2(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$3, _hoisted_3$3);
}
var IconPause = { name: "mdi-pause", render: render$2 };
const _hoisted_1$2 = {
  width: "1.2em",
  height: "1.2em",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 24 24"
};
const _hoisted_2$2 = /* @__PURE__ */ createBaseVNode("path", {
  d: "M5 5h5v2H7v3H5V5m9 0h5v5h-2V7h-3V5m3 9h2v5h-5v-2h3v-3m-7 3v2H5v-5h2v3h3z",
  fill: "currentColor"
}, null, -1);
const _hoisted_3$2 = [
  _hoisted_2$2
];
function render$1(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$2, _hoisted_3$2);
}
var IconFs = { name: "mdi-fullscreen", render: render$1 };
const _hoisted_1$1 = {
  width: "1.2em",
  height: "1.2em",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 24 24"
};
const _hoisted_2$1 = /* @__PURE__ */ createBaseVNode("path", {
  d: "M14 14h5v2h-3v3h-2v-5m-9 0h5v5H8v-3H5v-2m3-9h2v5H5V8h3V5m11 3v2h-5V5h2v3h3z",
  fill: "currentColor"
}, null, -1);
const _hoisted_3$1 = [
  _hoisted_2$1
];
function render(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$1, _hoisted_3$1);
}
var IconFsExit = { name: "mdi-fullscreen-exit", render };
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h1", {
  id: "\u0443\u043F\u0440\u0430\u0432n\u0435\u043D\u0438\u0435-\u0432\u0438\u0434\u0435\u043E",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createTextVNode("\u0423\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u0432\u0438\u0434\u0435\u043E "),
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#\u0443\u043F\u0440\u0430\u0432n\u0435\u043D\u0438\u0435-\u0432\u0438\u0434\u0435\u043E",
    "aria-hidden": "true"
  }, "#")
], -1);
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("h2", {
  id: "play-pause",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createTextVNode("Play/Pause "),
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#play-pause",
    "aria-hidden": "true"
  }, "#")
], -1);
const _hoisted_3 = /* @__PURE__ */ createTextVNode("\u0427\u0442\u043E\u0431\u044B \u043E\u0441\u0442\u0430\u0432\u0438\u0442\u044C (\u0438\u043B\u0438 \u043F\u0440\u043E\u0434\u043E\u043B\u0436\u0438\u0442\u044C) \u043F\u0440\u043E\u0438\u0433\u0440\u044B\u0432\u0430\u043D\u0438\u0435 \u0432\u0438\u0434\u0435\u043E, \u043D\u0430\u0434\u043E \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C \u0438\u043A\u043E\u043D\u043A\u0438 ");
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("strong", null, "play", -1);
const _hoisted_5 = /* @__PURE__ */ createTextVNode();
const _hoisted_6 = /* @__PURE__ */ createTextVNode(" \u0438\u043B\u0438 ");
const _hoisted_7 = /* @__PURE__ */ createBaseVNode("strong", null, "pause", -1);
const _hoisted_8 = /* @__PURE__ */ createTextVNode();
const _hoisted_9 = /* @__PURE__ */ createTextVNode(". \u0415\u0441\u043B\u0438 \u0438\u0445 \u043D\u0435 \u0432\u0438\u0434\u043D\u043E, \u0442\u043E \u043D\u0430\u0434\u043E \u043D\u0430\u0436\u0430\u0442\u044C \u043D\u0430 \u0441\u0430\u043C\u043E \u0432\u0438\u0434\u0435\u043E \u0438 \u043E\u043D\u0438 \u043F\u043E\u044F\u0432\u044F\u0442\u0441\u044F. \u0421\u043C\u043E\u0442\u0440\u0438, \u043A\u0430\u043A \u044D\u0442\u043E \u0432\u044B\u0433\u043B\u044F\u0434\u0438\u0442:");
const _hoisted_10 = /* @__PURE__ */ createBaseVNode("h2", {
  id: "\u043F\u043En\u043D\u043E\u044D\u043A\u0440\u0430\u043D\u043D\u044B\u0439-\u0440\u0435\u0436\u0438\u043C",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createTextVNode("\u041F\u043E\u043B\u043D\u043E\u044D\u043A\u0440\u0430\u043D\u043D\u044B\u0439 \u0440\u0435\u0436\u0438\u043C "),
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#\u043F\u043En\u043D\u043E\u044D\u043A\u0440\u0430\u043D\u043D\u044B\u0439-\u0440\u0435\u0436\u0438\u043C",
    "aria-hidden": "true"
  }, "#")
], -1);
const _hoisted_11 = /* @__PURE__ */ createTextVNode("\u0414\u043B\u044F \u0432\u0445\u043E\u0434\u0430 \u0432 \u043F\u043E\u043B\u043D\u043E\u044D\u043A\u0440\u0430\u043D\u043D\u044B\u0439 \u0440\u0435\u0436\u0438\u043C \u0435\u0441\u0442\u044C \u043A\u043D\u043E\u043F\u043A\u0430 ");
const _hoisted_12 = /* @__PURE__ */ createBaseVNode("strong", null, "\u043F\u043E\u043B\u043D\u044B\u0439 \u044D\u043A\u0440\u0430\u043D", -1);
const _hoisted_13 = /* @__PURE__ */ createTextVNode();
const _hoisted_14 = /* @__PURE__ */ createTextVNode(". \u0414\u043B\u044F \u0432\u044B\u0445\u043E\u0434\u0430 \u0438\u0437 \u043D\u0435\u0433\u043E - ");
const _hoisted_15 = /* @__PURE__ */ createBaseVNode("strong", null, "\u0432\u044B\u0445\u043E\u0434 \u0438\u0437 \u043F\u043E\u043B\u043D\u043E\u0433\u043E \u044D\u043A\u0440\u0430\u043D\u0430", -1);
const _hoisted_16 = /* @__PURE__ */ createTextVNode();
const _hoisted_17 = /* @__PURE__ */ createTextVNode(".");
const _hoisted_18 = /* @__PURE__ */ createStaticVNode('<blockquote><p>\u041A\u0430\u043A \u0442\u044B \u043C\u043E\u0436\u0435\u0448\u044C \u0437\u0430\u043C\u0435\u0442\u0438\u0442\u044C, \u0432 \u043F\u043E\u043B\u043D\u043E\u044D\u043A\u0440\u0430\u043D\u043D\u043E\u043C \u0440\u0435\u0436\u0438\u043C\u0435 \u0442\u043E\u0436\u0435 \u043C\u043E\u0436\u043D\u043E \u0443\u043F\u0440\u0430\u0432\u043B\u044F\u0442\u044C \u0432\u0438\u0434\u0435\u043E - \u043D\u0430\u043F\u0440\u0438\u043C\u0435\u0440, \u043F\u043E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u043D\u0430 \u043F\u0430\u0443\u0437\u0443.</p></blockquote><h2 id="\u043F\u0435\u0440\u0435\u043C\u043E\u0442\u043A\u0430" tabindex="-1">\u041F\u0435\u0440\u0435\u043C\u043E\u0442\u043A\u0430 <a class="header-anchor" href="#\u043F\u0435\u0440\u0435\u043C\u043E\u0442\u043A\u0430" aria-hidden="true">#</a></h2><p>\u041C\u043E\u0436\u043D\u043E \u043F\u0435\u0440\u0435\u043C\u0430\u0442\u044B\u0432\u0430\u0442\u044C \u0432\u0438\u0434\u0435\u043E \u0432\u043F\u0435\u0440\u0451\u0434/\u043D\u0430\u0437\u0430\u0434 \u0441 \u043F\u043E\u043C\u043E\u0449\u044C\u044E <strong><span class="text-[#c4302b]">\u043A\u0440\u0430\u0441\u043D\u043E\u0433\u043E</span> \u043F\u043E\u043B\u0437\u0443\u043D\u043A\u0430</strong>. \u0415\u0441\u043B\u0438 \u0435\u0433\u043E \u043D\u0435 \u0432\u0438\u0434\u043D\u043E, \u043D\u043E \u043D\u0430\u0434\u043E \u043D\u0430\u0436\u0430\u0442\u044C \u043D\u0430 \u0432\u0438\u0434\u0435\u043E, \u0447\u0442\u043E\u0431\u044B \u043F\u043E\u044F\u0432\u0438\u043B\u0438\u0441\u044C \u0432\u0441\u0435 \u0435\u0433\u043E \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u044B \u0443\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F, \u0432 \u0442\u043E\u043C \u0447\u0438\u0441\u043B\u0435 \u0438 \u044D\u0442\u043E\u0442 \u043F\u043E\u043B\u0437\u0443\u043D\u043E\u043A <strong>\u043D\u0430 \u043D\u0438\u0436\u043D\u0435\u0439 <span class="text-[#c4302b]">\u043A\u0440\u0430\u0441\u043D\u043E\u0439</span> \u043F\u043E\u043B\u043E\u0441\u043A\u0435</strong>.</p>', 3);
const _hoisted_21 = /* @__PURE__ */ createBaseVNode("h2", {
  id: "\u0437\u0430\u043A\u0440\u044B\u0442\u0438\u0435",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createTextVNode("\u0417\u0430\u043A\u0440\u044B\u0442\u0438\u0435 "),
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#\u0437\u0430\u043A\u0440\u044B\u0442\u0438\u0435",
    "aria-hidden": "true"
  }, "#")
], -1);
const _hoisted_22 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createTextVNode("\u0421\u043C. "),
  /* @__PURE__ */ createBaseVNode("a", { href: "./close-video.html" }, "\u0417\u0430\u043A\u0440\u044B\u0442\u0438\u0435 \u0432\u0438\u0434\u0435\u043E")
], -1);
const __pageData = '{"title":"\u0423\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u0432\u0438\u0434\u0435\u043E","description":"","frontmatter":{},"headers":[{"level":2,"title":"Play/Pause","slug":"play-pause"},{"level":2,"title":"\u041F\u043E\u043B\u043D\u043E\u044D\u043A\u0440\u0430\u043D\u043D\u044B\u0439 \u0440\u0435\u0436\u0438\u043C","slug":"\u043F\u043En\u043D\u043E\u044D\u043A\u0440\u0430\u043D\u043D\u044B\u0439-\u0440\u0435\u0436\u0438\u043C"},{"level":2,"title":"\u041F\u0435\u0440\u0435\u043C\u043E\u0442\u043A\u0430","slug":"\u043F\u0435\u0440\u0435\u043C\u043E\u0442\u043A\u0430"},{"level":2,"title":"\u0417\u0430\u043A\u0440\u044B\u0442\u0438\u0435","slug":"\u0437\u0430\u043A\u0440\u044B\u0442\u0438\u0435"}],"relativePath":"android/youtube/video-controls.md","lastUpdated":1635572812813}';
const __default__ = {};
function setup(__props) {
  return (_ctx, _cache) => {
    const _component_InlineIcon = resolveComponent("InlineIcon");
    const _component_Demo = resolveComponent("Demo");
    const _component_HorCenter = resolveComponent("HorCenter");
    return openBlock(), createElementBlock("div", null, [
      _hoisted_1,
      _hoisted_2,
      createBaseVNode("p", null, [
        _hoisted_3,
        _hoisted_4,
        _hoisted_5,
        createVNode(_component_InlineIcon, null, {
          default: withCtx(() => [
            createVNode(unref(IconPlay))
          ]),
          _: 1
        }),
        _hoisted_6,
        _hoisted_7,
        _hoisted_8,
        createVNode(_component_InlineIcon, null, {
          default: withCtx(() => [
            createVNode(unref(IconPause))
          ]),
          _: 1
        }),
        _hoisted_9
      ]),
      createVNode(_component_HorCenter, null, {
        default: withCtx(() => [
          createVNode(_component_Demo, {
            src: unref(vidPlayPause),
            video: "",
            width: "320",
            height: "640",
            description: "\u041D\u0430\u0436\u0438\u043C\u0430\u0435\u043C \u043D\u0430 \u0432\u0438\u0434\u0435\u043E, \u043F\u043E\u044F\u0432\u043B\u044F\u044E\u0442\u0441\u044F \u043A\u043D\u043E\u043F\u043A\u0438 play/pause, \u0436\u043C\u0451\u043C \u043A\u043D\u043E\u043F\u043A\u0438"
          }, null, 8, ["src"])
        ]),
        _: 1
      }),
      _hoisted_10,
      createBaseVNode("p", null, [
        _hoisted_11,
        _hoisted_12,
        _hoisted_13,
        createVNode(_component_InlineIcon, null, {
          default: withCtx(() => [
            createVNode(unref(IconFs))
          ]),
          _: 1
        }),
        _hoisted_14,
        _hoisted_15,
        _hoisted_16,
        createVNode(_component_InlineIcon, null, {
          default: withCtx(() => [
            createVNode(unref(IconFsExit))
          ]),
          _: 1
        }),
        _hoisted_17
      ]),
      createVNode(_component_HorCenter, null, {
        default: withCtx(() => [
          createVNode(_component_Demo, {
            src: unref(vidFullscreen),
            video: "",
            width: "320",
            height: "640"
          }, null, 8, ["src"])
        ]),
        _: 1
      }),
      _hoisted_18,
      createVNode(_component_HorCenter, null, {
        default: withCtx(() => [
          createVNode(_component_Demo, {
            src: unref(vidSeeking),
            video: "",
            width: "320",
            height: "640"
          }, null, 8, ["src"])
        ]),
        _: 1
      }),
      _hoisted_21,
      _hoisted_22
    ]);
  };
}
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  setup
});
export { __pageData, _sfc_main as default };
