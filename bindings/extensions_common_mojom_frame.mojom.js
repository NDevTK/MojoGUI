// Auto-generated MojoJS binding
 // Source: chromium_src/extensions/common/mojom/frame.mojom
 // Module: extensions.mojom

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
 

 mojo.internal.bindings.extensions = mojo.internal.bindings.extensions || {};
mojo.internal.bindings.extensions.mojom = mojo.internal.bindings.extensions.mojom || {};
mojo.internal.bindings.mojo_base = mojo.internal.bindings.mojo_base || {};
mojo.internal.bindings.gfx = mojo.internal.bindings.gfx || {};
mojo.internal.bindings.url = mojo.internal.bindings.url || {};
mojo.internal.bindings.blink = mojo.internal.bindings.blink || {};

mojo.internal.bindings.extensions.mojom.ExecuteCodeParamsSpec = { $: {} };
mojo.internal.bindings.extensions.mojom.RequestParamsSpec = { $: {} };
mojo.internal.bindings.extensions.mojom.LocalFrame = {};
mojo.internal.bindings.extensions.mojom.LocalFrame.$interfaceName = 'extensions.mojom.LocalFrame';
mojo.internal.bindings.extensions.mojom.LocalFrame_SetFrameName_ParamsSpec = { $: {} };
mojo.internal.bindings.extensions.mojom.LocalFrame_SetSpatialNavigationEnabled_ParamsSpec = { $: {} };
mojo.internal.bindings.extensions.mojom.LocalFrame_SetTabId_ParamsSpec = { $: {} };
mojo.internal.bindings.extensions.mojom.LocalFrame_AppWindowClosed_ParamsSpec = { $: {} };
mojo.internal.bindings.extensions.mojom.LocalFrame_NotifyRenderViewType_ParamsSpec = { $: {} };
mojo.internal.bindings.extensions.mojom.LocalFrame_MessageInvoke_ParamsSpec = { $: {} };
mojo.internal.bindings.extensions.mojom.LocalFrame_ExecuteCode_ParamsSpec = { $: {} };
mojo.internal.bindings.extensions.mojom.LocalFrame_ExecuteCode_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.extensions.mojom.LocalFrame_ExecuteDeclarativeScript_ParamsSpec = { $: {} };
mojo.internal.bindings.extensions.mojom.LocalFrame_UpdateBrowserWindowId_ParamsSpec = { $: {} };
mojo.internal.bindings.extensions.mojom.LocalFrame_DispatchOnConnect_ParamsSpec = { $: {} };
mojo.internal.bindings.extensions.mojom.LocalFrame_DispatchOnConnect_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.extensions.mojom.LocalFrameHost = {};
mojo.internal.bindings.extensions.mojom.LocalFrameHost.$interfaceName = 'extensions.mojom.LocalFrameHost';
mojo.internal.bindings.extensions.mojom.LocalFrameHost_RequestScriptInjectionPermission_ParamsSpec = { $: {} };
mojo.internal.bindings.extensions.mojom.LocalFrameHost_RequestScriptInjectionPermission_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.extensions.mojom.LocalFrameHost_GetAppInstallState_ParamsSpec = { $: {} };
mojo.internal.bindings.extensions.mojom.LocalFrameHost_GetAppInstallState_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.extensions.mojom.LocalFrameHost_Request_ParamsSpec = { $: {} };
mojo.internal.bindings.extensions.mojom.LocalFrameHost_Request_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.extensions.mojom.LocalFrameHost_ResponseAck_ParamsSpec = { $: {} };
mojo.internal.bindings.extensions.mojom.LocalFrameHost_WatchedPageChange_ParamsSpec = { $: {} };
mojo.internal.bindings.extensions.mojom.LocalFrameHost_DetailedConsoleMessageAdded_ParamsSpec = { $: {} };
mojo.internal.bindings.extensions.mojom.LocalFrameHost_ContentScriptsExecuting_ParamsSpec = { $: {} };
mojo.internal.bindings.extensions.mojom.LocalFrameHost_IncrementLazyKeepaliveCount_ParamsSpec = { $: {} };
mojo.internal.bindings.extensions.mojom.LocalFrameHost_DecrementLazyKeepaliveCount_ParamsSpec = { $: {} };
mojo.internal.bindings.extensions.mojom.LocalFrameHost_AppWindowReady_ParamsSpec = { $: {} };
mojo.internal.bindings.extensions.mojom.LocalFrameHost_OpenChannelToExtension_ParamsSpec = { $: {} };
mojo.internal.bindings.extensions.mojom.LocalFrameHost_OpenChannelToNativeApp_ParamsSpec = { $: {} };
mojo.internal.bindings.extensions.mojom.LocalFrameHost_OpenChannelToTab_ParamsSpec = { $: {} };

// Struct: ExecuteCodeParams
mojo.internal.Struct(
    mojo.internal.bindings.extensions.mojom.ExecuteCodeParamsSpec, 'extensions.mojom.ExecuteCodeParams', [
      mojo.internal.StructField('arg_host_id', 0, 0, mojo.internal.bindings.extensions.mojom.HostIDSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_injection', 8, 0, mojo.internal.bindings.extensions.mojom.CodeInjectionSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_webview_src', 16, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_match_origin_as_fallback_behavior', 24, 0, mojo.internal.bindings.extensions.mojom.MatchOriginAsFallbackBehaviorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_run_at', 32, 0, mojo.internal.bindings.extensions.mojom.RunLocationSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_is_web_view', 40, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 56]]);

// Struct: RequestParams
mojo.internal.Struct(
    mojo.internal.bindings.extensions.mojom.RequestParamsSpec, 'extensions.mojom.RequestParams', [
      mojo.internal.StructField('arg_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_arguments', 8, 0, mojo.internal.bindings.mojo_base.mojom.ListValueSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_extension_id', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_source_url', 24, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_context_type', 32, 0, mojo.internal.bindings.extensions.mojom.ContextTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_service_worker_version_id', 40, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_js_callstack', 48, 0, mojo.internal.Array(mojo.internal.bindings.extensions.mojom.StackFrameSpec.$, false), null, true, 0, undefined),
      mojo.internal.StructField('arg_request_id', 56, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_worker_thread_id', 60, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_has_callback', 64, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_user_gesture', 64, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 80]]);

// Interface: LocalFrame
mojo.internal.Struct(
    mojo.internal.bindings.extensions.mojom.LocalFrame_SetFrameName_ParamsSpec, 'extensions.mojom.LocalFrame_SetFrameName_Params', [
      mojo.internal.StructField('arg_frame_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.extensions.mojom.LocalFrame_SetSpatialNavigationEnabled_ParamsSpec, 'extensions.mojom.LocalFrame_SetSpatialNavigationEnabled_Params', [
      mojo.internal.StructField('arg_spatial_nav_enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.extensions.mojom.LocalFrame_SetTabId_ParamsSpec, 'extensions.mojom.LocalFrame_SetTabId_Params', [
      mojo.internal.StructField('arg_tab_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.extensions.mojom.LocalFrame_AppWindowClosed_ParamsSpec, 'extensions.mojom.LocalFrame_AppWindowClosed_Params', [
      mojo.internal.StructField('arg_send_onclosed', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.extensions.mojom.LocalFrame_NotifyRenderViewType_ParamsSpec, 'extensions.mojom.LocalFrame_NotifyRenderViewType_Params', [
      mojo.internal.StructField('arg_view_type', 0, 0, mojo.internal.bindings.extensions.mojom.ViewTypeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.extensions.mojom.LocalFrame_MessageInvoke_ParamsSpec, 'extensions.mojom.LocalFrame_MessageInvoke_Params', [
      mojo.internal.StructField('arg_extension_id', 0, 0, mojo.internal.bindings.extensions.mojom.ExtensionIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_module_name', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_function_name', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_args', 24, 0, mojo.internal.bindings.mojo_base.mojom.ListValueSpec.$, null, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    mojo.internal.bindings.extensions.mojom.LocalFrame_ExecuteCode_ParamsSpec, 'extensions.mojom.LocalFrame_ExecuteCode_Params', [
      mojo.internal.StructField('arg_param', 0, 0, mojo.internal.bindings.extensions.mojom.ExecuteCodeParamsSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.extensions.mojom.LocalFrame_ExecuteCode_ResponseParamsSpec, 'extensions.mojom.LocalFrame_ExecuteCode_ResponseParams', [
      mojo.internal.StructField('arg_error', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_url', 8, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_result', 16, 0, mojo.internal.bindings.mojo_base.mojom.ValueSpec.$, null, true, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.extensions.mojom.LocalFrame_ExecuteDeclarativeScript_ParamsSpec, 'extensions.mojom.LocalFrame_ExecuteDeclarativeScript_Params', [
      mojo.internal.StructField('arg_extension_id', 0, 0, mojo.internal.bindings.extensions.mojom.ExtensionIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_script_id', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_url', 16, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_tab_id', 24, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    mojo.internal.bindings.extensions.mojom.LocalFrame_UpdateBrowserWindowId_ParamsSpec, 'extensions.mojom.LocalFrame_UpdateBrowserWindowId_Params', [
      mojo.internal.StructField('arg_window_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.extensions.mojom.LocalFrame_DispatchOnConnect_ParamsSpec, 'extensions.mojom.LocalFrame_DispatchOnConnect_Params', [
      mojo.internal.StructField('arg_port_id', 0, 0, mojo.internal.bindings.extensions.mojom.PortIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_channel_type', 8, 0, mojo.internal.bindings.extensions.mojom.ChannelTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_channel_name', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_tab_info', 24, 0, mojo.internal.bindings.extensions.mojom.TabConnectionInfoSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_external_connection_info', 32, 0, mojo.internal.bindings.extensions.mojom.ExternalConnectionInfoSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_port', 40, 0, mojo.internal.AssociatedInterfaceRequest(mojo.internal.bindings.extensions.mojom.MessagePortRemote), null, false, 0, undefined),
      mojo.internal.StructField('arg_port_host', 48, 0, mojo.internal.AssociatedInterfaceProxy(mojo.internal.bindings.extensions.mojom.MessagePortHostRemote), null, false, 0, undefined),
    ],
    [[0, 64]]);

mojo.internal.Struct(
    mojo.internal.bindings.extensions.mojom.LocalFrame_DispatchOnConnect_ResponseParamsSpec, 'extensions.mojom.LocalFrame_DispatchOnConnect_ResponseParams', [
      mojo.internal.StructField('arg_success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.extensions.mojom.LocalFramePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.extensions.mojom.LocalFrameRemote = class {
  static get $interfaceName() {
    return 'extensions.mojom.LocalFrame';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.extensions.mojom.LocalFramePendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.extensions.mojom.LocalFrameRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  setFrameName(arg_frame_name) {
    return this.$.setFrameName(arg_frame_name);
  }
  setSpatialNavigationEnabled(arg_spatial_nav_enabled) {
    return this.$.setSpatialNavigationEnabled(arg_spatial_nav_enabled);
  }
  setTabId(arg_tab_id) {
    return this.$.setTabId(arg_tab_id);
  }
  appWindowClosed(arg_send_onclosed) {
    return this.$.appWindowClosed(arg_send_onclosed);
  }
  notifyRenderViewType(arg_view_type) {
    return this.$.notifyRenderViewType(arg_view_type);
  }
  messageInvoke(arg_extension_id, arg_module_name, arg_function_name, arg_args) {
    return this.$.messageInvoke(arg_extension_id, arg_module_name, arg_function_name, arg_args);
  }
  executeCode(arg_param) {
    return this.$.executeCode(arg_param);
  }
  executeDeclarativeScript(arg_tab_id, arg_extension_id, arg_script_id, arg_url) {
    return this.$.executeDeclarativeScript(arg_tab_id, arg_extension_id, arg_script_id, arg_url);
  }
  updateBrowserWindowId(arg_window_id) {
    return this.$.updateBrowserWindowId(arg_window_id);
  }
  dispatchOnConnect(arg_port_id, arg_channel_type, arg_channel_name, arg_tab_info, arg_external_connection_info, arg_port, arg_port_host) {
    return this.$.dispatchOnConnect(arg_port_id, arg_channel_type, arg_channel_name, arg_tab_info, arg_external_connection_info, arg_port, arg_port_host);
  }
};

mojo.internal.bindings.extensions.mojom.LocalFrameRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('LocalFrame', [
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

  setFrameName(arg_frame_name) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.extensions.mojom.LocalFrame_SetFrameName_ParamsSpec,
      null,
      [arg_frame_name],
      false);
  }

  setSpatialNavigationEnabled(arg_spatial_nav_enabled) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.extensions.mojom.LocalFrame_SetSpatialNavigationEnabled_ParamsSpec,
      null,
      [arg_spatial_nav_enabled],
      false);
  }

  setTabId(arg_tab_id) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.extensions.mojom.LocalFrame_SetTabId_ParamsSpec,
      null,
      [arg_tab_id],
      false);
  }

  appWindowClosed(arg_send_onclosed) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.extensions.mojom.LocalFrame_AppWindowClosed_ParamsSpec,
      null,
      [arg_send_onclosed],
      false);
  }

  notifyRenderViewType(arg_view_type) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.extensions.mojom.LocalFrame_NotifyRenderViewType_ParamsSpec,
      null,
      [arg_view_type],
      false);
  }

  messageInvoke(arg_extension_id, arg_module_name, arg_function_name, arg_args) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojo.internal.bindings.extensions.mojom.LocalFrame_MessageInvoke_ParamsSpec,
      null,
      [arg_extension_id, arg_module_name, arg_function_name, arg_args],
      false);
  }

  executeCode(arg_param) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      mojo.internal.bindings.extensions.mojom.LocalFrame_ExecuteCode_ParamsSpec,
      mojo.internal.bindings.extensions.mojom.LocalFrame_ExecuteCode_ResponseParamsSpec,
      [arg_param],
      false);
  }

  executeDeclarativeScript(arg_tab_id, arg_extension_id, arg_script_id, arg_url) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      mojo.internal.bindings.extensions.mojom.LocalFrame_ExecuteDeclarativeScript_ParamsSpec,
      null,
      [arg_tab_id, arg_extension_id, arg_script_id, arg_url],
      false);
  }

  updateBrowserWindowId(arg_window_id) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      mojo.internal.bindings.extensions.mojom.LocalFrame_UpdateBrowserWindowId_ParamsSpec,
      null,
      [arg_window_id],
      false);
  }

  dispatchOnConnect(arg_port_id, arg_channel_type, arg_channel_name, arg_tab_info, arg_external_connection_info, arg_port, arg_port_host) {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      mojo.internal.bindings.extensions.mojom.LocalFrame_DispatchOnConnect_ParamsSpec,
      mojo.internal.bindings.extensions.mojom.LocalFrame_DispatchOnConnect_ResponseParamsSpec,
      [arg_port_id, arg_channel_type, arg_channel_name, arg_tab_info, arg_external_connection_info, arg_port, arg_port_host],
      false);
  }

};

mojo.internal.bindings.extensions.mojom.LocalFrame.getRemote = function() {
  let remote = new mojo.internal.bindings.extensions.mojom.LocalFrameRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'extensions.mojom.LocalFrame',
    'context');
  return remote.$;
};

mojo.internal.bindings.extensions.mojom.LocalFrameReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('LocalFrame', [
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
        
        // Try Method 0: SetFrameName
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.extensions.mojom.LocalFrame_SetFrameName_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetFrameName (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: SetSpatialNavigationEnabled
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.extensions.mojom.LocalFrame_SetSpatialNavigationEnabled_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetSpatialNavigationEnabled (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: SetTabId
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.extensions.mojom.LocalFrame_SetTabId_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetTabId (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: AppWindowClosed
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.extensions.mojom.LocalFrame_AppWindowClosed_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AppWindowClosed (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: NotifyRenderViewType
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.extensions.mojom.LocalFrame_NotifyRenderViewType_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> NotifyRenderViewType (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: MessageInvoke
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.extensions.mojom.LocalFrame_MessageInvoke_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> MessageInvoke (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: ExecuteCode
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.extensions.mojom.LocalFrame_ExecuteCode_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ExecuteCode (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: ExecuteDeclarativeScript
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.extensions.mojom.LocalFrame_ExecuteDeclarativeScript_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ExecuteDeclarativeScript (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: UpdateBrowserWindowId
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.extensions.mojom.LocalFrame_UpdateBrowserWindowId_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UpdateBrowserWindowId (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
           }
        }
        // Try Method 9: DispatchOnConnect
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.extensions.mojom.LocalFrame_DispatchOnConnect_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DispatchOnConnect (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 9 failed:', e);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.extensions.mojom.LocalFrame_SetFrameName_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setFrameName');
          const result = this.impl.setFrameName(params.arg_frame_name);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.extensions.mojom.LocalFrame_SetSpatialNavigationEnabled_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setSpatialNavigationEnabled');
          const result = this.impl.setSpatialNavigationEnabled(params.arg_spatial_nav_enabled);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.extensions.mojom.LocalFrame_SetTabId_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setTabId');
          const result = this.impl.setTabId(params.arg_tab_id);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.extensions.mojom.LocalFrame_AppWindowClosed_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.appWindowClosed');
          const result = this.impl.appWindowClosed(params.arg_send_onclosed);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.extensions.mojom.LocalFrame_NotifyRenderViewType_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.notifyRenderViewType');
          const result = this.impl.notifyRenderViewType(params.arg_view_type);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.extensions.mojom.LocalFrame_MessageInvoke_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.messageInvoke');
          const result = this.impl.messageInvoke(params.arg_extension_id, params.arg_module_name, params.arg_function_name, params.arg_args);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.extensions.mojom.LocalFrame_ExecuteCode_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.executeCode');
          const result = this.impl.executeCode(params.arg_param);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.extensions.mojom.LocalFrame_ExecuteCode_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] ExecuteCode FAILED:', e));
          }
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.extensions.mojom.LocalFrame_ExecuteDeclarativeScript_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.executeDeclarativeScript');
          const result = this.impl.executeDeclarativeScript(params.arg_tab_id, params.arg_extension_id, params.arg_script_id, params.arg_url);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.extensions.mojom.LocalFrame_UpdateBrowserWindowId_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.updateBrowserWindowId');
          const result = this.impl.updateBrowserWindowId(params.arg_window_id);
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.extensions.mojom.LocalFrame_DispatchOnConnect_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.dispatchOnConnect');
          const result = this.impl.dispatchOnConnect(params.arg_port_id, params.arg_channel_type, params.arg_channel_name, params.arg_tab_info, params.arg_external_connection_info, params.arg_port, params.arg_port_host);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.extensions.mojom.LocalFrame_DispatchOnConnect_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] DispatchOnConnect FAILED:', e));
          }
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.extensions.mojom.LocalFrameReceiver = mojo.internal.bindings.extensions.mojom.LocalFrameReceiver;

mojo.internal.bindings.extensions.mojom.LocalFramePtr = mojo.internal.bindings.extensions.mojom.LocalFrameRemote;
mojo.internal.bindings.extensions.mojom.LocalFrameRequest = mojo.internal.bindings.extensions.mojom.LocalFramePendingReceiver;


// Interface: LocalFrameHost
mojo.internal.Struct(
    mojo.internal.bindings.extensions.mojom.LocalFrameHost_RequestScriptInjectionPermission_ParamsSpec, 'extensions.mojom.LocalFrameHost_RequestScriptInjectionPermission_Params', [
      mojo.internal.StructField('arg_extension_id', 0, 0, mojo.internal.bindings.extensions.mojom.ExtensionIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_script_type', 8, 0, mojo.internal.bindings.extensions.mojom.InjectionTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_run_location', 16, 0, mojo.internal.bindings.extensions.mojom.RunLocationSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.extensions.mojom.LocalFrameHost_RequestScriptInjectionPermission_ResponseParamsSpec, 'extensions.mojom.LocalFrameHost_RequestScriptInjectionPermission_ResponseParams', [
      mojo.internal.StructField('arg_granted', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.extensions.mojom.LocalFrameHost_GetAppInstallState_ParamsSpec, 'extensions.mojom.LocalFrameHost_GetAppInstallState_Params', [
      mojo.internal.StructField('arg_url', 0, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.extensions.mojom.LocalFrameHost_GetAppInstallState_ResponseParamsSpec, 'extensions.mojom.LocalFrameHost_GetAppInstallState_ResponseParams', [
      mojo.internal.StructField('arg_state', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.extensions.mojom.LocalFrameHost_Request_ParamsSpec, 'extensions.mojom.LocalFrameHost_Request_Params', [
      mojo.internal.StructField('arg_params', 0, 0, mojo.internal.bindings.extensions.mojom.RequestParamsSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.extensions.mojom.LocalFrameHost_Request_ResponseParamsSpec, 'extensions.mojom.LocalFrameHost_Request_ResponseParams', [
      mojo.internal.StructField('arg_response_wrapper', 0, 0, mojo.internal.bindings.mojo_base.mojom.ListValueSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_error', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_extra_data', 16, 0, mojo.internal.bindings.extensions.mojom.ExtraResponseDataSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_success', 24, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    mojo.internal.bindings.extensions.mojom.LocalFrameHost_ResponseAck_ParamsSpec, 'extensions.mojom.LocalFrameHost_ResponseAck_Params', [
      mojo.internal.StructField('arg_request_uuid', 0, 0, mojo.internal.bindings.mojo_base.mojom.UuidSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.extensions.mojom.LocalFrameHost_WatchedPageChange_ParamsSpec, 'extensions.mojom.LocalFrameHost_WatchedPageChange_Params', [
      mojo.internal.StructField('arg_css_selectors', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.extensions.mojom.LocalFrameHost_DetailedConsoleMessageAdded_ParamsSpec, 'extensions.mojom.LocalFrameHost_DetailedConsoleMessageAdded_Params', [
      mojo.internal.StructField('arg_message', 0, 0, mojo.internal.bindings.mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_source', 8, 0, mojo.internal.bindings.mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_stack_trace', 16, 0, mojo.internal.Array(mojo.internal.bindings.extensions.mojom.StackFrameSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_level', 24, 0, mojo.internal.bindings.blink.mojom.ConsoleMessageLevelSpec.$, null, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    mojo.internal.bindings.extensions.mojom.LocalFrameHost_ContentScriptsExecuting_ParamsSpec, 'extensions.mojom.LocalFrameHost_ContentScriptsExecuting_Params', [
      mojo.internal.StructField('arg_extension_id_to_scripts', 0, 0, mojo.internal.Map(mojo.internal.String, mojo.internal.Array(mojo.internal.String, false), false), null, false, 0, undefined),
      mojo.internal.StructField('arg_frame_url', 8, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.extensions.mojom.LocalFrameHost_IncrementLazyKeepaliveCount_ParamsSpec, 'extensions.mojom.LocalFrameHost_IncrementLazyKeepaliveCount_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.extensions.mojom.LocalFrameHost_DecrementLazyKeepaliveCount_ParamsSpec, 'extensions.mojom.LocalFrameHost_DecrementLazyKeepaliveCount_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.extensions.mojom.LocalFrameHost_AppWindowReady_ParamsSpec, 'extensions.mojom.LocalFrameHost_AppWindowReady_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.extensions.mojom.LocalFrameHost_OpenChannelToExtension_ParamsSpec, 'extensions.mojom.LocalFrameHost_OpenChannelToExtension_Params', [
      mojo.internal.StructField('arg_info', 0, 0, mojo.internal.bindings.extensions.mojom.ExternalConnectionInfoSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_channel_type', 8, 0, mojo.internal.bindings.extensions.mojom.ChannelTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_channel_name', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_port_id', 24, 0, mojo.internal.bindings.extensions.mojom.PortIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_port', 32, 0, mojo.internal.AssociatedInterfaceProxy(mojo.internal.bindings.extensions.mojom.MessagePortRemote), null, false, 0, undefined),
      mojo.internal.StructField('arg_port_host', 40, 0, mojo.internal.AssociatedInterfaceRequest(mojo.internal.bindings.extensions.mojom.MessagePortHostRemote), null, false, 0, undefined),
    ],
    [[0, 56]]);

mojo.internal.Struct(
    mojo.internal.bindings.extensions.mojom.LocalFrameHost_OpenChannelToNativeApp_ParamsSpec, 'extensions.mojom.LocalFrameHost_OpenChannelToNativeApp_Params', [
      mojo.internal.StructField('arg_native_app_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_port_id', 8, 0, mojo.internal.bindings.extensions.mojom.PortIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_port', 16, 0, mojo.internal.AssociatedInterfaceProxy(mojo.internal.bindings.extensions.mojom.MessagePortRemote), null, false, 0, undefined),
      mojo.internal.StructField('arg_port_host', 24, 0, mojo.internal.AssociatedInterfaceRequest(mojo.internal.bindings.extensions.mojom.MessagePortHostRemote), null, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    mojo.internal.bindings.extensions.mojom.LocalFrameHost_OpenChannelToTab_ParamsSpec, 'extensions.mojom.LocalFrameHost_OpenChannelToTab_Params', [
      mojo.internal.StructField('arg_document_id', 0, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_channel_type', 8, 0, mojo.internal.bindings.extensions.mojom.ChannelTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_channel_name', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_port_id', 24, 0, mojo.internal.bindings.extensions.mojom.PortIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_port', 32, 0, mojo.internal.AssociatedInterfaceProxy(mojo.internal.bindings.extensions.mojom.MessagePortRemote), null, false, 0, undefined),
      mojo.internal.StructField('arg_port_host', 40, 0, mojo.internal.AssociatedInterfaceRequest(mojo.internal.bindings.extensions.mojom.MessagePortHostRemote), null, false, 0, undefined),
      mojo.internal.StructField('arg_tab_id', 48, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_frame_id', 52, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 64]]);

mojo.internal.bindings.extensions.mojom.LocalFrameHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.extensions.mojom.LocalFrameHostRemote = class {
  static get $interfaceName() {
    return 'extensions.mojom.LocalFrameHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.extensions.mojom.LocalFrameHostPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.extensions.mojom.LocalFrameHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  requestScriptInjectionPermission(arg_extension_id, arg_script_type, arg_run_location) {
    return this.$.requestScriptInjectionPermission(arg_extension_id, arg_script_type, arg_run_location);
  }
  getAppInstallState(arg_url) {
    return this.$.getAppInstallState(arg_url);
  }
  request(arg_params) {
    return this.$.request(arg_params);
  }
  responseAck(arg_request_uuid) {
    return this.$.responseAck(arg_request_uuid);
  }
  watchedPageChange(arg_css_selectors) {
    return this.$.watchedPageChange(arg_css_selectors);
  }
  detailedConsoleMessageAdded(arg_message, arg_source, arg_stack_trace, arg_level) {
    return this.$.detailedConsoleMessageAdded(arg_message, arg_source, arg_stack_trace, arg_level);
  }
  contentScriptsExecuting(arg_extension_id_to_scripts, arg_frame_url) {
    return this.$.contentScriptsExecuting(arg_extension_id_to_scripts, arg_frame_url);
  }
  incrementLazyKeepaliveCount() {
    return this.$.incrementLazyKeepaliveCount();
  }
  decrementLazyKeepaliveCount() {
    return this.$.decrementLazyKeepaliveCount();
  }
  appWindowReady() {
    return this.$.appWindowReady();
  }
  openChannelToExtension(arg_info, arg_channel_type, arg_channel_name, arg_port_id, arg_port, arg_port_host) {
    return this.$.openChannelToExtension(arg_info, arg_channel_type, arg_channel_name, arg_port_id, arg_port, arg_port_host);
  }
  openChannelToNativeApp(arg_native_app_name, arg_port_id, arg_port, arg_port_host) {
    return this.$.openChannelToNativeApp(arg_native_app_name, arg_port_id, arg_port, arg_port_host);
  }
  openChannelToTab(arg_tab_id, arg_frame_id, arg_document_id, arg_channel_type, arg_channel_name, arg_port_id, arg_port, arg_port_host) {
    return this.$.openChannelToTab(arg_tab_id, arg_frame_id, arg_document_id, arg_channel_type, arg_channel_name, arg_port_id, arg_port, arg_port_host);
  }
};

mojo.internal.bindings.extensions.mojom.LocalFrameHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('LocalFrameHost', [
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

  requestScriptInjectionPermission(arg_extension_id, arg_script_type, arg_run_location) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.extensions.mojom.LocalFrameHost_RequestScriptInjectionPermission_ParamsSpec,
      mojo.internal.bindings.extensions.mojom.LocalFrameHost_RequestScriptInjectionPermission_ResponseParamsSpec,
      [arg_extension_id, arg_script_type, arg_run_location],
      false);
  }

  getAppInstallState(arg_url) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.extensions.mojom.LocalFrameHost_GetAppInstallState_ParamsSpec,
      mojo.internal.bindings.extensions.mojom.LocalFrameHost_GetAppInstallState_ResponseParamsSpec,
      [arg_url],
      false);
  }

  request(arg_params) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.extensions.mojom.LocalFrameHost_Request_ParamsSpec,
      mojo.internal.bindings.extensions.mojom.LocalFrameHost_Request_ResponseParamsSpec,
      [arg_params],
      false);
  }

  responseAck(arg_request_uuid) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.extensions.mojom.LocalFrameHost_ResponseAck_ParamsSpec,
      null,
      [arg_request_uuid],
      false);
  }

  watchedPageChange(arg_css_selectors) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.extensions.mojom.LocalFrameHost_WatchedPageChange_ParamsSpec,
      null,
      [arg_css_selectors],
      false);
  }

  detailedConsoleMessageAdded(arg_message, arg_source, arg_stack_trace, arg_level) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojo.internal.bindings.extensions.mojom.LocalFrameHost_DetailedConsoleMessageAdded_ParamsSpec,
      null,
      [arg_message, arg_source, arg_stack_trace, arg_level],
      false);
  }

  contentScriptsExecuting(arg_extension_id_to_scripts, arg_frame_url) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      mojo.internal.bindings.extensions.mojom.LocalFrameHost_ContentScriptsExecuting_ParamsSpec,
      null,
      [arg_extension_id_to_scripts, arg_frame_url],
      false);
  }

  incrementLazyKeepaliveCount() {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      mojo.internal.bindings.extensions.mojom.LocalFrameHost_IncrementLazyKeepaliveCount_ParamsSpec,
      null,
      [],
      false);
  }

  decrementLazyKeepaliveCount() {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      mojo.internal.bindings.extensions.mojom.LocalFrameHost_DecrementLazyKeepaliveCount_ParamsSpec,
      null,
      [],
      false);
  }

  appWindowReady() {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      mojo.internal.bindings.extensions.mojom.LocalFrameHost_AppWindowReady_ParamsSpec,
      null,
      [],
      false);
  }

  openChannelToExtension(arg_info, arg_channel_type, arg_channel_name, arg_port_id, arg_port, arg_port_host) {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      mojo.internal.bindings.extensions.mojom.LocalFrameHost_OpenChannelToExtension_ParamsSpec,
      null,
      [arg_info, arg_channel_type, arg_channel_name, arg_port_id, arg_port, arg_port_host],
      false);
  }

  openChannelToNativeApp(arg_native_app_name, arg_port_id, arg_port, arg_port_host) {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      mojo.internal.bindings.extensions.mojom.LocalFrameHost_OpenChannelToNativeApp_ParamsSpec,
      null,
      [arg_native_app_name, arg_port_id, arg_port, arg_port_host],
      false);
  }

  openChannelToTab(arg_tab_id, arg_frame_id, arg_document_id, arg_channel_type, arg_channel_name, arg_port_id, arg_port, arg_port_host) {
    return this.proxy.sendMessage(
      this.ordinals[12],  // ordinal
      mojo.internal.bindings.extensions.mojom.LocalFrameHost_OpenChannelToTab_ParamsSpec,
      null,
      [arg_tab_id, arg_frame_id, arg_document_id, arg_channel_type, arg_channel_name, arg_port_id, arg_port, arg_port_host],
      false);
  }

};

mojo.internal.bindings.extensions.mojom.LocalFrameHost.getRemote = function() {
  let remote = new mojo.internal.bindings.extensions.mojom.LocalFrameHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'extensions.mojom.LocalFrameHost',
    'context');
  return remote.$;
};

mojo.internal.bindings.extensions.mojom.LocalFrameHostReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('LocalFrameHost', [
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
        
        // Try Method 0: RequestScriptInjectionPermission
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.extensions.mojom.LocalFrameHost_RequestScriptInjectionPermission_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RequestScriptInjectionPermission (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: GetAppInstallState
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.extensions.mojom.LocalFrameHost_GetAppInstallState_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetAppInstallState (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: Request
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.extensions.mojom.LocalFrameHost_Request_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Request (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: ResponseAck
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.extensions.mojom.LocalFrameHost_ResponseAck_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ResponseAck (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: WatchedPageChange
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.extensions.mojom.LocalFrameHost_WatchedPageChange_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> WatchedPageChange (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: DetailedConsoleMessageAdded
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.extensions.mojom.LocalFrameHost_DetailedConsoleMessageAdded_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DetailedConsoleMessageAdded (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: ContentScriptsExecuting
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.extensions.mojom.LocalFrameHost_ContentScriptsExecuting_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ContentScriptsExecuting (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: IncrementLazyKeepaliveCount
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.extensions.mojom.LocalFrameHost_IncrementLazyKeepaliveCount_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> IncrementLazyKeepaliveCount (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: DecrementLazyKeepaliveCount
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.extensions.mojom.LocalFrameHost_DecrementLazyKeepaliveCount_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DecrementLazyKeepaliveCount (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
           }
        }
        // Try Method 9: AppWindowReady
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.extensions.mojom.LocalFrameHost_AppWindowReady_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AppWindowReady (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 9 failed:', e);
           }
        }
        // Try Method 10: OpenChannelToExtension
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.extensions.mojom.LocalFrameHost_OpenChannelToExtension_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OpenChannelToExtension (10)');
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 10 failed:', e);
           }
        }
        // Try Method 11: OpenChannelToNativeApp
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.extensions.mojom.LocalFrameHost_OpenChannelToNativeApp_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OpenChannelToNativeApp (11)');
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 11 failed:', e);
           }
        }
        // Try Method 12: OpenChannelToTab
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.extensions.mojom.LocalFrameHost_OpenChannelToTab_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OpenChannelToTab (12)');
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 12 failed:', e);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.extensions.mojom.LocalFrameHost_RequestScriptInjectionPermission_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.requestScriptInjectionPermission');
          const result = this.impl.requestScriptInjectionPermission(params.arg_extension_id, params.arg_script_type, params.arg_run_location);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.extensions.mojom.LocalFrameHost_RequestScriptInjectionPermission_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] RequestScriptInjectionPermission FAILED:', e));
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.extensions.mojom.LocalFrameHost_GetAppInstallState_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getAppInstallState');
          const result = this.impl.getAppInstallState(params.arg_url);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.extensions.mojom.LocalFrameHost_GetAppInstallState_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetAppInstallState FAILED:', e));
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.extensions.mojom.LocalFrameHost_Request_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.request');
          const result = this.impl.request(params.arg_params);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.extensions.mojom.LocalFrameHost_Request_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] Request FAILED:', e));
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.extensions.mojom.LocalFrameHost_ResponseAck_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.responseAck');
          const result = this.impl.responseAck(params.arg_request_uuid);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.extensions.mojom.LocalFrameHost_WatchedPageChange_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.watchedPageChange');
          const result = this.impl.watchedPageChange(params.arg_css_selectors);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.extensions.mojom.LocalFrameHost_DetailedConsoleMessageAdded_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.detailedConsoleMessageAdded');
          const result = this.impl.detailedConsoleMessageAdded(params.arg_message, params.arg_source, params.arg_stack_trace, params.arg_level);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.extensions.mojom.LocalFrameHost_ContentScriptsExecuting_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.contentScriptsExecuting');
          const result = this.impl.contentScriptsExecuting(params.arg_extension_id_to_scripts, params.arg_frame_url);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.extensions.mojom.LocalFrameHost_IncrementLazyKeepaliveCount_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.incrementLazyKeepaliveCount');
          const result = this.impl.incrementLazyKeepaliveCount();
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.extensions.mojom.LocalFrameHost_DecrementLazyKeepaliveCount_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.decrementLazyKeepaliveCount');
          const result = this.impl.decrementLazyKeepaliveCount();
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.extensions.mojom.LocalFrameHost_AppWindowReady_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.appWindowReady');
          const result = this.impl.appWindowReady();
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.extensions.mojom.LocalFrameHost_OpenChannelToExtension_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.openChannelToExtension');
          const result = this.impl.openChannelToExtension(params.arg_info, params.arg_channel_type, params.arg_channel_name, params.arg_port_id, params.arg_port, params.arg_port_host);
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.extensions.mojom.LocalFrameHost_OpenChannelToNativeApp_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.openChannelToNativeApp');
          const result = this.impl.openChannelToNativeApp(params.arg_native_app_name, params.arg_port_id, params.arg_port, params.arg_port_host);
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.extensions.mojom.LocalFrameHost_OpenChannelToTab_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.openChannelToTab');
          const result = this.impl.openChannelToTab(params.arg_tab_id, params.arg_frame_id, params.arg_document_id, params.arg_channel_type, params.arg_channel_name, params.arg_port_id, params.arg_port, params.arg_port_host);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.extensions.mojom.LocalFrameHostReceiver = mojo.internal.bindings.extensions.mojom.LocalFrameHostReceiver;

mojo.internal.bindings.extensions.mojom.LocalFrameHostPtr = mojo.internal.bindings.extensions.mojom.LocalFrameHostRemote;
mojo.internal.bindings.extensions.mojom.LocalFrameHostRequest = mojo.internal.bindings.extensions.mojom.LocalFrameHostPendingReceiver;

