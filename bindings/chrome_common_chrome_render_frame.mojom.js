// Auto-generated MojoJS binding
 // Source: chromium_src/chrome/common/chrome_render_frame.mojom
 // Module: chrome.mojom

 'use strict';
 (function() {
   const SHA256 = (s) => {
     const K = [0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5, 0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174, 0xe49b69c1, 0xefbe4786, 0x0fc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da, 0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xD5A79147, 0x06CA6351, 0x14292967, 0x27B70A85, 0x2E1B2138, 0x4D2C6DFC, 0x53380D13, 0x650A7354, 0x766A0ABB, 0x81C2C92E, 0x92722C85, 0xA2BFE8A1, 0xA81A664B, 0xC24B8B70, 0xC76C51A3, 0xD192E819, 0xD6990624, 0xF40E3585,0x106AA070, 0x19A4C116, 0x1E376C08, 0x2748774C, 0x34B0BCB5, 0x391C0CB3, 0x4ED8AA4A, 0x5B9CCA4F, 0x682E6FF3, 0x748F82EE, 0x78A5636F, 0x84C87814, 0x8CC70208, 0x90BEFFFA, 0xA4506CEB, 0xBEF9A3F7, 0xC67178F2];
     const h = [0x6a09e667, 0xbb67ae85, 0x3c6ef372, 0xa54ff53a, 0x510e527f, 0x9b05688c, 0x1f83d9ab, 0x5be0cd19];
     const m = new TextEncoder().encode(s);
     const l = m.length;
     const b = new Uint32Array(((l + 8) >> 6) + 1 << 4);
     for (let i = 0; i < l; i++) b[i >> 2] |= m[i] << (24 - (i & 3) * 8);
     b[l >> 2] |= 0x80 << (24 - (l & 3) * 8);
     b[b.length - 1] = l * 8;
     for (let i = 0; i < b.length; i += 16) {
       let [a1, b1, c1, d1, e1, f1, g1, h1] = h;
       const w = new Uint32Array(64);
       for (let j = 0; j < 64; j++) {
         if (j < 16) w[j] = b[i + j];
         else {
           const s0 = ((w[j-15]>>>7)|(w[j-15]<<25))^((w[j-15]>>>18)|(w[j-15]<<14))^(w[j-15]>>>3);
           const s1 = ((w[j-2]>>>17)|(w[j-2]<<15))^((w[j-2]>>>19)|(w[j-2]<<13))^(w[j-2]>>>10);
           w[j] = (w[j-16]+s0+w[j-7]+s1)|0;
         }
         const t1 = (h1 + (((e1>>>6)|(e1<<26))^((e1>>>11)|(e1<<21))^((e1>>>25)|(e1<<7))) + ((e1&f1)^((~e1)&g1)) + K[j] + w[j])|0;
         const t2 = ((((a1>>>2)|(a1<<30))^((a1>>>13)|(a1<<19))^((a1>>>22)|(a1<<10))) + ((a1&b1)^(a1&c1)^(b1&c1)))|0;
         h1 = g1; g1 = f1; f1 = e1; e1 = (d1 + t1) | 0; d1 = c1; c1 = b1; b1 = a1; a1 = (t1 + t2) | 0;
       }
       h[0] = (h[0] + a1) | 0; h[1] = (h[1] + b1) | 0; h[2] = (h[2] + c1) | 0; h[3] = (h[3] + d1) | 0;
       h[4] = (h[4] + e1) | 0; h[5] = (h[5] + f1) | 0; h[6] = (h[6] + g1) | 0; h[7] = (h[7] + h1) | 0;
     }
     return h[0];
   };
   window.mojoScrambler = window.mojoScrambler || {
     getOrdinals: (ifaceName, methodSpecs) => {
       const params = new URLSearchParams(window.location.search);
       const forceNoScramble = params.get('scramble') === '0' || window.mojoNoScramble;
       
       const seen = new Set();
       methodSpecs.forEach(ms => { if (ms.explicit !== null) seen.add(ms.explicit); });
       let i = 0;
       return methodSpecs.map((ms, idx) => {
         if (ms.explicit !== null) return ms.explicit;
         if (forceNoScramble) return idx;

         const p = window.mojoVersion.split('.');
         const salt = 'MAJOR=' + p[0] + '\n' + 'MINOR=' + (p[1]||0) + '\n' + 'BUILD=' + (p[2]||0) + '\n' + 'PATCH=' + (p[3]||0) + '\n';
         console.log('[MojoScrambler] Derived Salt:', JSON.stringify(salt));
         
         while (true) {
           i++;
           const h0 = SHA256(salt + ifaceName.split('.').pop() + i);
           const ord = (((h0 & 0xFF) << 24) | ((h0 & 0xFF00) << 8) | ((h0 & 0xFF0000) >> 8) | (h0 >>> 24)) & 0x7fffffff;
           if (!seen.has(ord)) {
             seen.add(ord);
             return ord;
           }
         }
       });
     }
   };
 })();

 // Module namespace
 var mojo = mojo || {};
 mojo.internal = mojo.internal || {};
 mojo.internal.bindings = mojo.internal.bindings || {};
 

 mojo.internal.bindings.chrome = mojo.internal.bindings.chrome || {};
mojo.internal.bindings.chrome.mojom = mojo.internal.bindings.chrome.mojom || {};
mojo.internal.bindings.actor = mojo.internal.bindings.actor || {};
mojo.internal.bindings.lens = mojo.internal.bindings.lens || {};
mojo.internal.bindings.mojo_base = mojo.internal.bindings.mojo_base || {};
mojo.internal.bindings.skia = mojo.internal.bindings.skia || {};
mojo.internal.bindings.blink = mojo.internal.bindings.blink || {};
mojo.internal.bindings.gfx = mojo.internal.bindings.gfx || {};
mojo.internal.bindings.url = mojo.internal.bindings.url || {};

mojo.internal.bindings.chrome.mojom.ImageFormatSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.chrome.mojom.ChromeRenderFrame = {};
mojo.internal.bindings.chrome.mojom.ChromeRenderFrame.$interfaceName = 'chrome.mojom.ChromeRenderFrame';
mojo.internal.bindings.chrome.mojom.ChromeRenderFrame_SetWindowFeatures_ParamsSpec = { $: {} };
mojo.internal.bindings.chrome.mojom.ChromeRenderFrame_RequestReloadImageForContextNode_ParamsSpec = { $: {} };
mojo.internal.bindings.chrome.mojom.ChromeRenderFrame_RequestBitmapForContextNode_ParamsSpec = { $: {} };
mojo.internal.bindings.chrome.mojom.ChromeRenderFrame_RequestBitmapForContextNode_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.chrome.mojom.ChromeRenderFrame_RequestBitmapForContextNodeWithBoundsHint_ParamsSpec = { $: {} };
mojo.internal.bindings.chrome.mojom.ChromeRenderFrame_RequestBitmapForContextNodeWithBoundsHint_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.chrome.mojom.ChromeRenderFrame_RequestBoundsHintForAllImages_ParamsSpec = { $: {} };
mojo.internal.bindings.chrome.mojom.ChromeRenderFrame_RequestBoundsHintForAllImages_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.chrome.mojom.ChromeRenderFrame_RequestImageForContextNode_ParamsSpec = { $: {} };
mojo.internal.bindings.chrome.mojom.ChromeRenderFrame_RequestImageForContextNode_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.chrome.mojom.ChromeRenderFrame_ExecuteWebUIJavaScript_ParamsSpec = { $: {} };
mojo.internal.bindings.chrome.mojom.ChromeRenderFrame_SetCCTClientHeader_ParamsSpec = { $: {} };
mojo.internal.bindings.chrome.mojom.ChromeRenderFrame_GetMediaFeedURL_ParamsSpec = { $: {} };
mojo.internal.bindings.chrome.mojom.ChromeRenderFrame_GetMediaFeedURL_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.chrome.mojom.ChromeRenderFrame_LoadBlockedPlugins_ParamsSpec = { $: {} };
mojo.internal.bindings.chrome.mojom.ChromeRenderFrame_SetShouldDeferMediaLoad_ParamsSpec = { $: {} };
mojo.internal.bindings.chrome.mojom.ChromeRenderFrame_InvokeTool_ParamsSpec = { $: {} };
mojo.internal.bindings.chrome.mojom.ChromeRenderFrame_InvokeTool_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.chrome.mojom.ChromeRenderFrame_CancelTool_ParamsSpec = { $: {} };
mojo.internal.bindings.chrome.mojom.ChromeRenderFrame_StartActorJournal_ParamsSpec = { $: {} };
mojo.internal.bindings.chrome.mojom.ChromeRenderFrame_CreatePageStabilityMonitor_ParamsSpec = { $: {} };

mojo.internal.bindings.chrome.mojom.kDefaultQuality = 90;

// Enum: ImageFormat
mojo.internal.bindings.chrome.mojom.ImageFormat = {
  JPEG: 0,
  PNG: 1,
  WEBP: 2,
  ORIGINAL: 3,
};

// Interface: ChromeRenderFrame
mojo.internal.Struct(
    mojo.internal.bindings.chrome.mojom.ChromeRenderFrame_SetWindowFeatures_ParamsSpec, 'chrome.mojom.ChromeRenderFrame_SetWindowFeatures_Params', [
      mojo.internal.StructField('arg_window_features', 0, 0, mojo.internal.bindings.blink.mojom.WindowFeaturesSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.chrome.mojom.ChromeRenderFrame_RequestReloadImageForContextNode_ParamsSpec, 'chrome.mojom.ChromeRenderFrame_RequestReloadImageForContextNode_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.chrome.mojom.ChromeRenderFrame_RequestBitmapForContextNode_ParamsSpec, 'chrome.mojom.ChromeRenderFrame_RequestBitmapForContextNode_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.chrome.mojom.ChromeRenderFrame_RequestBitmapForContextNode_ResponseParamsSpec, 'chrome.mojom.ChromeRenderFrame_RequestBitmapForContextNode_ResponseParams', [
      mojo.internal.StructField('arg_bitmap', 0, 0, mojo.internal.bindings.skia.mojom.BitmapN32Spec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.chrome.mojom.ChromeRenderFrame_RequestBitmapForContextNodeWithBoundsHint_ParamsSpec, 'chrome.mojom.ChromeRenderFrame_RequestBitmapForContextNodeWithBoundsHint_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.chrome.mojom.ChromeRenderFrame_RequestBitmapForContextNodeWithBoundsHint_ResponseParamsSpec, 'chrome.mojom.ChromeRenderFrame_RequestBitmapForContextNodeWithBoundsHint_ResponseParams', [
      mojo.internal.StructField('arg_bitmap', 0, 0, mojo.internal.bindings.skia.mojom.BitmapN32Spec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_bounds', 8, 0, mojo.internal.bindings.gfx.mojom.RectSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.chrome.mojom.ChromeRenderFrame_RequestBoundsHintForAllImages_ParamsSpec, 'chrome.mojom.ChromeRenderFrame_RequestBoundsHintForAllImages_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.chrome.mojom.ChromeRenderFrame_RequestBoundsHintForAllImages_ResponseParamsSpec, 'chrome.mojom.ChromeRenderFrame_RequestBoundsHintForAllImages_ResponseParams', [
      mojo.internal.StructField('arg_all_bounds', 0, 0, mojo.internal.Array(mojo.internal.bindings.gfx.mojom.RectSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.chrome.mojom.ChromeRenderFrame_RequestImageForContextNode_ParamsSpec, 'chrome.mojom.ChromeRenderFrame_RequestImageForContextNode_Params', [
      mojo.internal.StructField('arg_image_max_size_pixels', 0, 0, mojo.internal.bindings.gfx.mojom.SizeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_image_format', 8, 0, mojo.internal.bindings.chrome.mojom.ImageFormatSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_image_min_area_pixels', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_quality', 20, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.chrome.mojom.ChromeRenderFrame_RequestImageForContextNode_ResponseParamsSpec, 'chrome.mojom.ChromeRenderFrame_RequestImageForContextNode_ResponseParams', [
      mojo.internal.StructField('arg_image_data', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_original_size', 8, 0, mojo.internal.bindings.gfx.mojom.SizeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_downscaled_size', 16, 0, mojo.internal.bindings.gfx.mojom.SizeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_mime_type', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_log_data', 32, 0, mojo.internal.Array(mojo.internal.bindings.lens.mojom.LatencyLogSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 48]]);

mojo.internal.Struct(
    mojo.internal.bindings.chrome.mojom.ChromeRenderFrame_ExecuteWebUIJavaScript_ParamsSpec, 'chrome.mojom.ChromeRenderFrame_ExecuteWebUIJavaScript_Params', [
      mojo.internal.StructField('arg_javascript', 0, 0, mojo.internal.bindings.mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.chrome.mojom.ChromeRenderFrame_SetCCTClientHeader_ParamsSpec, 'chrome.mojom.ChromeRenderFrame_SetCCTClientHeader_Params', [
      mojo.internal.StructField('arg_header', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.chrome.mojom.ChromeRenderFrame_GetMediaFeedURL_ParamsSpec, 'chrome.mojom.ChromeRenderFrame_GetMediaFeedURL_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.chrome.mojom.ChromeRenderFrame_GetMediaFeedURL_ResponseParamsSpec, 'chrome.mojom.ChromeRenderFrame_GetMediaFeedURL_ResponseParams', [
      mojo.internal.StructField('arg_url', 0, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.chrome.mojom.ChromeRenderFrame_LoadBlockedPlugins_ParamsSpec, 'chrome.mojom.ChromeRenderFrame_LoadBlockedPlugins_Params', [
      mojo.internal.StructField('arg_identifier', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.chrome.mojom.ChromeRenderFrame_SetShouldDeferMediaLoad_ParamsSpec, 'chrome.mojom.ChromeRenderFrame_SetShouldDeferMediaLoad_Params', [
      mojo.internal.StructField('arg_should_defer', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.chrome.mojom.ChromeRenderFrame_InvokeTool_ParamsSpec, 'chrome.mojom.ChromeRenderFrame_InvokeTool_Params', [
      mojo.internal.StructField('arg_request', 0, 0, mojo.internal.bindings.actor.mojom.ToolInvocationSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.chrome.mojom.ChromeRenderFrame_InvokeTool_ResponseParamsSpec, 'chrome.mojom.ChromeRenderFrame_InvokeTool_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.actor.mojom.ActionResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.chrome.mojom.ChromeRenderFrame_CancelTool_ParamsSpec, 'chrome.mojom.ChromeRenderFrame_CancelTool_Params', [
      mojo.internal.StructField('arg_task_id', 0, 0, mojo.internal.bindings.actor.mojom.TaskIdSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.chrome.mojom.ChromeRenderFrame_StartActorJournal_ParamsSpec, 'chrome.mojom.ChromeRenderFrame_StartActorJournal_Params', [
      mojo.internal.StructField('arg_client', 0, 0, mojo.internal.AssociatedInterfaceProxy(mojo.internal.bindings.actor.mojom.JournalClientRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.chrome.mojom.ChromeRenderFrame_CreatePageStabilityMonitor_ParamsSpec, 'chrome.mojom.ChromeRenderFrame_CreatePageStabilityMonitor_Params', [
      mojo.internal.StructField('arg_monitor', 0, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.actor.mojom.PageStabilityMonitorRemote), null, false, 0, undefined),
      mojo.internal.StructField('arg_task_id', 8, 0, mojo.internal.bindings.actor.mojom.TaskIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_supports_paint_stability', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.bindings.chrome.mojom.ChromeRenderFramePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.chrome.mojom.ChromeRenderFrameRemote = class {
  static get $interfaceName() {
    return 'chrome.mojom.ChromeRenderFrame';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.chrome.mojom.ChromeRenderFramePendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.chrome.mojom.ChromeRenderFrameRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  setWindowFeatures(arg_window_features) {
    return this.$.setWindowFeatures(arg_window_features);
  }
  requestReloadImageForContextNode() {
    return this.$.requestReloadImageForContextNode();
  }
  requestBitmapForContextNode() {
    return this.$.requestBitmapForContextNode();
  }
  requestBitmapForContextNodeWithBoundsHint() {
    return this.$.requestBitmapForContextNodeWithBoundsHint();
  }
  requestBoundsHintForAllImages() {
    return this.$.requestBoundsHintForAllImages();
  }
  requestImageForContextNode(arg_image_min_area_pixels, arg_image_max_size_pixels, arg_image_format, arg_quality) {
    return this.$.requestImageForContextNode(arg_image_min_area_pixels, arg_image_max_size_pixels, arg_image_format, arg_quality);
  }
  executeWebUIJavaScript(arg_javascript) {
    return this.$.executeWebUIJavaScript(arg_javascript);
  }
  setCCTClientHeader(arg_header) {
    return this.$.setCCTClientHeader(arg_header);
  }
  getMediaFeedURL() {
    return this.$.getMediaFeedURL();
  }
  loadBlockedPlugins(arg_identifier) {
    return this.$.loadBlockedPlugins(arg_identifier);
  }
  setShouldDeferMediaLoad(arg_should_defer) {
    return this.$.setShouldDeferMediaLoad(arg_should_defer);
  }
  invokeTool(arg_request) {
    return this.$.invokeTool(arg_request);
  }
  cancelTool(arg_task_id) {
    return this.$.cancelTool(arg_task_id);
  }
  startActorJournal(arg_client) {
    return this.$.startActorJournal(arg_client);
  }
  createPageStabilityMonitor(arg_monitor, arg_task_id, arg_supports_paint_stability) {
    return this.$.createPageStabilityMonitor(arg_monitor, arg_task_id, arg_supports_paint_stability);
  }
};

mojo.internal.bindings.chrome.mojom.ChromeRenderFrameRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ChromeRenderFrame', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  setWindowFeatures(arg_window_features) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.chrome.mojom.ChromeRenderFrame_SetWindowFeatures_ParamsSpec,
      null,
      [arg_window_features],
      false);
  }

  requestReloadImageForContextNode() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.chrome.mojom.ChromeRenderFrame_RequestReloadImageForContextNode_ParamsSpec,
      null,
      [],
      false);
  }

  requestBitmapForContextNode() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.chrome.mojom.ChromeRenderFrame_RequestBitmapForContextNode_ParamsSpec,
      mojo.internal.bindings.chrome.mojom.ChromeRenderFrame_RequestBitmapForContextNode_ResponseParamsSpec,
      [],
      false);
  }

  requestBitmapForContextNodeWithBoundsHint() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.chrome.mojom.ChromeRenderFrame_RequestBitmapForContextNodeWithBoundsHint_ParamsSpec,
      mojo.internal.bindings.chrome.mojom.ChromeRenderFrame_RequestBitmapForContextNodeWithBoundsHint_ResponseParamsSpec,
      [],
      false);
  }

  requestBoundsHintForAllImages() {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.chrome.mojom.ChromeRenderFrame_RequestBoundsHintForAllImages_ParamsSpec,
      mojo.internal.bindings.chrome.mojom.ChromeRenderFrame_RequestBoundsHintForAllImages_ResponseParamsSpec,
      [],
      false);
  }

  requestImageForContextNode(arg_image_min_area_pixels, arg_image_max_size_pixels, arg_image_format, arg_quality) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojo.internal.bindings.chrome.mojom.ChromeRenderFrame_RequestImageForContextNode_ParamsSpec,
      mojo.internal.bindings.chrome.mojom.ChromeRenderFrame_RequestImageForContextNode_ResponseParamsSpec,
      [arg_image_min_area_pixels, arg_image_max_size_pixels, arg_image_format, arg_quality],
      false);
  }

  executeWebUIJavaScript(arg_javascript) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      mojo.internal.bindings.chrome.mojom.ChromeRenderFrame_ExecuteWebUIJavaScript_ParamsSpec,
      null,
      [arg_javascript],
      false);
  }

  setCCTClientHeader(arg_header) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      mojo.internal.bindings.chrome.mojom.ChromeRenderFrame_SetCCTClientHeader_ParamsSpec,
      null,
      [arg_header],
      false);
  }

  getMediaFeedURL() {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      mojo.internal.bindings.chrome.mojom.ChromeRenderFrame_GetMediaFeedURL_ParamsSpec,
      mojo.internal.bindings.chrome.mojom.ChromeRenderFrame_GetMediaFeedURL_ResponseParamsSpec,
      [],
      false);
  }

  loadBlockedPlugins(arg_identifier) {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      mojo.internal.bindings.chrome.mojom.ChromeRenderFrame_LoadBlockedPlugins_ParamsSpec,
      null,
      [arg_identifier],
      false);
  }

  setShouldDeferMediaLoad(arg_should_defer) {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      mojo.internal.bindings.chrome.mojom.ChromeRenderFrame_SetShouldDeferMediaLoad_ParamsSpec,
      null,
      [arg_should_defer],
      false);
  }

  invokeTool(arg_request) {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      mojo.internal.bindings.chrome.mojom.ChromeRenderFrame_InvokeTool_ParamsSpec,
      mojo.internal.bindings.chrome.mojom.ChromeRenderFrame_InvokeTool_ResponseParamsSpec,
      [arg_request],
      false);
  }

  cancelTool(arg_task_id) {
    return this.proxy.sendMessage(
      this.ordinals[12],  // ordinal
      mojo.internal.bindings.chrome.mojom.ChromeRenderFrame_CancelTool_ParamsSpec,
      null,
      [arg_task_id],
      false);
  }

  startActorJournal(arg_client) {
    return this.proxy.sendMessage(
      this.ordinals[13],  // ordinal
      mojo.internal.bindings.chrome.mojom.ChromeRenderFrame_StartActorJournal_ParamsSpec,
      null,
      [arg_client],
      false);
  }

  createPageStabilityMonitor(arg_monitor, arg_task_id, arg_supports_paint_stability) {
    return this.proxy.sendMessage(
      this.ordinals[14],  // ordinal
      mojo.internal.bindings.chrome.mojom.ChromeRenderFrame_CreatePageStabilityMonitor_ParamsSpec,
      null,
      [arg_monitor, arg_task_id, arg_supports_paint_stability],
      false);
  }

};

mojo.internal.bindings.chrome.mojom.ChromeRenderFrame.getRemote = function() {
  let remote = new mojo.internal.bindings.chrome.mojom.ChromeRenderFrameRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chrome.mojom.ChromeRenderFrame',
    'context');
  return remote.$;
};

mojo.internal.bindings.chrome.mojom.ChromeRenderFrameReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ChromeRenderFrame', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx); // Scrambled/Explicit
      this.ordinalMap.set(idx, idx); // Sequential Fallback (Non-scrambled builds)
    });
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        // Create a view of ONLY the payload (skipping the header)
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        // Decoder uses payload view starting at 0
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: SetWindowFeatures
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.chrome.mojom.ChromeRenderFrame_SetWindowFeatures_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetWindowFeatures (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: RequestReloadImageForContextNode
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.chrome.mojom.ChromeRenderFrame_RequestReloadImageForContextNode_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RequestReloadImageForContextNode (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: RequestBitmapForContextNode
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.chrome.mojom.ChromeRenderFrame_RequestBitmapForContextNode_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RequestBitmapForContextNode (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: RequestBitmapForContextNodeWithBoundsHint
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.chrome.mojom.ChromeRenderFrame_RequestBitmapForContextNodeWithBoundsHint_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RequestBitmapForContextNodeWithBoundsHint (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: RequestBoundsHintForAllImages
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.chrome.mojom.ChromeRenderFrame_RequestBoundsHintForAllImages_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RequestBoundsHintForAllImages (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: RequestImageForContextNode
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.chrome.mojom.ChromeRenderFrame_RequestImageForContextNode_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RequestImageForContextNode (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: ExecuteWebUIJavaScript
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.chrome.mojom.ChromeRenderFrame_ExecuteWebUIJavaScript_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ExecuteWebUIJavaScript (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: SetCCTClientHeader
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.chrome.mojom.ChromeRenderFrame_SetCCTClientHeader_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetCCTClientHeader (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: GetMediaFeedURL
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.chrome.mojom.ChromeRenderFrame_GetMediaFeedURL_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetMediaFeedURL (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
           }
        }
        // Try Method 9: LoadBlockedPlugins
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.chrome.mojom.ChromeRenderFrame_LoadBlockedPlugins_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> LoadBlockedPlugins (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 9 failed:', e);
           }
        }
        // Try Method 10: SetShouldDeferMediaLoad
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.chrome.mojom.ChromeRenderFrame_SetShouldDeferMediaLoad_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetShouldDeferMediaLoad (10)');
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 10 failed:', e);
           }
        }
        // Try Method 11: InvokeTool
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.chrome.mojom.ChromeRenderFrame_InvokeTool_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> InvokeTool (11)');
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 11 failed:', e);
           }
        }
        // Try Method 12: CancelTool
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.chrome.mojom.ChromeRenderFrame_CancelTool_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CancelTool (12)');
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 12 failed:', e);
           }
        }
        // Try Method 13: StartActorJournal
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.chrome.mojom.ChromeRenderFrame_StartActorJournal_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> StartActorJournal (13)');
             this.mapOrdinal(header.ordinal, 13);
             dispatchId = 13;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 13 failed:', e);
           }
        }
        // Try Method 14: CreatePageStabilityMonitor
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.chrome.mojom.ChromeRenderFrame_CreatePageStabilityMonitor_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreatePageStabilityMonitor (14)');
             this.mapOrdinal(header.ordinal, 14);
             dispatchId = 14;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 14 failed:', e);
           }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.chrome.mojom.ChromeRenderFrame_SetWindowFeatures_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setWindowFeatures');
          const result = this.impl.setWindowFeatures(params.arg_window_features);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.chrome.mojom.ChromeRenderFrame_RequestReloadImageForContextNode_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.requestReloadImageForContextNode');
          const result = this.impl.requestReloadImageForContextNode();
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.chrome.mojom.ChromeRenderFrame_RequestBitmapForContextNode_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.requestBitmapForContextNode');
          const result = this.impl.requestBitmapForContextNode();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.chrome.mojom.ChromeRenderFrame_RequestBitmapForContextNode_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] RequestBitmapForContextNode FAILED:', e));
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.chrome.mojom.ChromeRenderFrame_RequestBitmapForContextNodeWithBoundsHint_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.requestBitmapForContextNodeWithBoundsHint');
          const result = this.impl.requestBitmapForContextNodeWithBoundsHint();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.chrome.mojom.ChromeRenderFrame_RequestBitmapForContextNodeWithBoundsHint_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] RequestBitmapForContextNodeWithBoundsHint FAILED:', e));
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.chrome.mojom.ChromeRenderFrame_RequestBoundsHintForAllImages_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.requestBoundsHintForAllImages');
          const result = this.impl.requestBoundsHintForAllImages();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.chrome.mojom.ChromeRenderFrame_RequestBoundsHintForAllImages_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] RequestBoundsHintForAllImages FAILED:', e));
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.chrome.mojom.ChromeRenderFrame_RequestImageForContextNode_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.requestImageForContextNode');
          const result = this.impl.requestImageForContextNode(params.arg_image_min_area_pixels, params.arg_image_max_size_pixels, params.arg_image_format, params.arg_quality);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.chrome.mojom.ChromeRenderFrame_RequestImageForContextNode_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] RequestImageForContextNode FAILED:', e));
          }
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.chrome.mojom.ChromeRenderFrame_ExecuteWebUIJavaScript_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.executeWebUIJavaScript');
          const result = this.impl.executeWebUIJavaScript(params.arg_javascript);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.chrome.mojom.ChromeRenderFrame_SetCCTClientHeader_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setCCTClientHeader');
          const result = this.impl.setCCTClientHeader(params.arg_header);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.chrome.mojom.ChromeRenderFrame_GetMediaFeedURL_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getMediaFeedURL');
          const result = this.impl.getMediaFeedURL();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.chrome.mojom.ChromeRenderFrame_GetMediaFeedURL_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetMediaFeedURL FAILED:', e));
          }
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.chrome.mojom.ChromeRenderFrame_LoadBlockedPlugins_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.loadBlockedPlugins');
          const result = this.impl.loadBlockedPlugins(params.arg_identifier);
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.chrome.mojom.ChromeRenderFrame_SetShouldDeferMediaLoad_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setShouldDeferMediaLoad');
          const result = this.impl.setShouldDeferMediaLoad(params.arg_should_defer);
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.chrome.mojom.ChromeRenderFrame_InvokeTool_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.invokeTool');
          const result = this.impl.invokeTool(params.arg_request);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.chrome.mojom.ChromeRenderFrame_InvokeTool_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] InvokeTool FAILED:', e));
          }
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.chrome.mojom.ChromeRenderFrame_CancelTool_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.cancelTool');
          const result = this.impl.cancelTool(params.arg_task_id);
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.chrome.mojom.ChromeRenderFrame_StartActorJournal_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.startActorJournal');
          const result = this.impl.startActorJournal(params.arg_client);
          break;
        }
        case 14: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.chrome.mojom.ChromeRenderFrame_CreatePageStabilityMonitor_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.createPageStabilityMonitor');
          const result = this.impl.createPageStabilityMonitor(params.arg_monitor, params.arg_task_id, params.arg_supports_paint_stability);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.chrome.mojom.ChromeRenderFrameReceiver = mojo.internal.bindings.chrome.mojom.ChromeRenderFrameReceiver;

mojo.internal.bindings.chrome.mojom.ChromeRenderFramePtr = mojo.internal.bindings.chrome.mojom.ChromeRenderFrameRemote;
mojo.internal.bindings.chrome.mojom.ChromeRenderFrameRequest = mojo.internal.bindings.chrome.mojom.ChromeRenderFramePendingReceiver;

