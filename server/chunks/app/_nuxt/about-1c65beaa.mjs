import { withAsyncContext, unref, useSSRContext } from 'vue';
import { u as useFetch } from './fetch-eb3b22f8.mjs';
import { ssrRenderAttrs, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from '../server.mjs';
import 'ohash';
import 'ofetch';
import 'hookable';
import 'unctx';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'h3';
import 'ufo';
import 'defu';
import '../../nitro/node-server.mjs';
import 'node-fetch-native/polyfill';
import 'node:http';
import 'node:https';
import 'destr';
import 'unenv/runtime/fetch/index';
import 'scule';
import 'unstorage';
import 'radix3';
import 'node:fs';
import 'node:url';
import 'pathe';

const _sfc_main = {
  __name: "about",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { data: message } = ([__temp, __restore] = withAsyncContext(() => useFetch("/api/ninja?name=Mario", {
      method: "post",
      body: { age: "30" }
    }, "$c6wy8KmN8o")), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-2de024b5><h2 data-v-2de024b5>About</h2><p data-v-2de024b5> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci, consectetur assumenda quisquam qui veritatis numquam dolorem in minima deserunt perferendis. </p><p data-v-2de024b5> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci, consectetur assumenda quisquam qui veritatis numquam dolorem in minima deserunt perferendis. </p><div data-v-2de024b5>${ssrInterpolate(unref(message).message)}</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const about = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-2de024b5"]]);

export { about as default };
//# sourceMappingURL=about-1c65beaa.mjs.map
