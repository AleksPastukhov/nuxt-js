import { useSSRContext, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrInterpolate } from 'vue/server-renderer';

const _sfc_main = {
  __name: "error",
  __ssrInlineRender: true,
  props: ["error"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "mt-7 max-w-sm mx-auto text-center card" }, _attrs))}><p class="mt-7 text-7xl fony-bold">${ssrInterpolate(__props.error.statusCode)}</p><p class="mt-7 text-6xl">Ooooops.</p><p class="mt-7">${ssrInterpolate(__props.error.message)}</p><button class="btn my-7">Go Hone...</button></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("error.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _sfc_main$1 = _sfc_main;

export { _sfc_main$1 as default };
//# sourceMappingURL=error-component-5210b81f.mjs.map
