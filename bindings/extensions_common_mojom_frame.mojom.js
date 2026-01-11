// Auto-generated MojoJS binding
// Source: chromium_src/extensions/common/mojom/frame.mojom
// Module: extensions.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var extensions = extensions || {};
extensions.mojom = extensions.mojom || {};
var mojo_base = mojo_base || {};
var gfx = gfx || {};
var url = url || {};
var blink = blink || {};

extensions.mojom.ExecuteCodeParamsSpec = { $: {} };
extensions.mojom.RequestParamsSpec = { $: {} };
extensions.mojom.LocalFrame = {};
extensions.mojom.LocalFrame.$interfaceName = 'extensions.mojom.LocalFrame';
extensions.mojom.LocalFrame_SetFrameName_ParamsSpec = { $: {} };
extensions.mojom.LocalFrame_SetSpatialNavigationEnabled_ParamsSpec = { $: {} };
extensions.mojom.LocalFrame_SetTabId_ParamsSpec = { $: {} };
extensions.mojom.LocalFrame_AppWindowClosed_ParamsSpec = { $: {} };
extensions.mojom.LocalFrame_NotifyRenderViewType_ParamsSpec = { $: {} };
extensions.mojom.LocalFrame_MessageInvoke_ParamsSpec = { $: {} };
extensions.mojom.LocalFrame_ExecuteCode_ParamsSpec = { $: {} };
extensions.mojom.LocalFrame_ExecuteCode_ResponseParamsSpec = { $: {} };
extensions.mojom.LocalFrame_ExecuteDeclarativeScript_ParamsSpec = { $: {} };
extensions.mojom.LocalFrame_UpdateBrowserWindowId_ParamsSpec = { $: {} };
extensions.mojom.LocalFrame_DispatchOnConnect_ParamsSpec = { $: {} };
extensions.mojom.LocalFrame_DispatchOnConnect_ResponseParamsSpec = { $: {} };
extensions.mojom.LocalFrameHost = {};
extensions.mojom.LocalFrameHost.$interfaceName = 'extensions.mojom.LocalFrameHost';
extensions.mojom.LocalFrameHost_RequestScriptInjectionPermission_ParamsSpec = { $: {} };
extensions.mojom.LocalFrameHost_RequestScriptInjectionPermission_ResponseParamsSpec = { $: {} };
extensions.mojom.LocalFrameHost_GetAppInstallState_ParamsSpec = { $: {} };
extensions.mojom.LocalFrameHost_GetAppInstallState_ResponseParamsSpec = { $: {} };
extensions.mojom.LocalFrameHost_Request_ParamsSpec = { $: {} };
extensions.mojom.LocalFrameHost_Request_ResponseParamsSpec = { $: {} };
extensions.mojom.LocalFrameHost_ResponseAck_ParamsSpec = { $: {} };
extensions.mojom.LocalFrameHost_WatchedPageChange_ParamsSpec = { $: {} };
extensions.mojom.LocalFrameHost_DetailedConsoleMessageAdded_ParamsSpec = { $: {} };
extensions.mojom.LocalFrameHost_ContentScriptsExecuting_ParamsSpec = { $: {} };
extensions.mojom.LocalFrameHost_IncrementLazyKeepaliveCount_ParamsSpec = { $: {} };
extensions.mojom.LocalFrameHost_DecrementLazyKeepaliveCount_ParamsSpec = { $: {} };
extensions.mojom.LocalFrameHost_AppWindowReady_ParamsSpec = { $: {} };
extensions.mojom.LocalFrameHost_OpenChannelToExtension_ParamsSpec = { $: {} };
extensions.mojom.LocalFrameHost_OpenChannelToNativeApp_ParamsSpec = { $: {} };
extensions.mojom.LocalFrameHost_OpenChannelToTab_ParamsSpec = { $: {} };

// Struct: ExecuteCodeParams
mojo.internal.Struct(
    extensions.mojom.ExecuteCodeParamsSpec, 'extensions.mojom.ExecuteCodeParams', [
      mojo.internal.StructField('host_id', 0, 0, extensions.mojom.HostIDSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('injection', 8, 0, extensions.mojom.CodeInjectionSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('webview_src', 16, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('match_origin_as_fallback_behavior', 24, 0, extensions.mojom.MatchOriginAsFallbackBehaviorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('run_at', 32, 0, extensions.mojom.RunLocationSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('is_web_view', 40, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 56]]);

// Struct: RequestParams
mojo.internal.Struct(
    extensions.mojom.RequestParamsSpec, 'extensions.mojom.RequestParams', [
      mojo.internal.StructField('name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arguments', 8, 0, mojo_base.mojom.ListValueSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('extension_id', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('source_url', 24, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('context_type', 32, 0, extensions.mojom.ContextTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('service_worker_version_id', 40, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('js_callstack', 48, 0, mojo.internal.Array(extensions.mojom.StackFrameSpec.$, false), null, true, 0, undefined),
      mojo.internal.StructField('request_id', 56, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('worker_thread_id', 60, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('has_callback', 64, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('user_gesture', 64, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 80]]);

// Interface: LocalFrame
mojo.internal.Struct(
    extensions.mojom.LocalFrame_SetFrameName_ParamsSpec, 'extensions.mojom.LocalFrame_SetFrameName_Params', [
      mojo.internal.StructField('frame_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    extensions.mojom.LocalFrame_SetSpatialNavigationEnabled_ParamsSpec, 'extensions.mojom.LocalFrame_SetSpatialNavigationEnabled_Params', [
      mojo.internal.StructField('spatial_nav_enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    extensions.mojom.LocalFrame_SetTabId_ParamsSpec, 'extensions.mojom.LocalFrame_SetTabId_Params', [
      mojo.internal.StructField('tab_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    extensions.mojom.LocalFrame_AppWindowClosed_ParamsSpec, 'extensions.mojom.LocalFrame_AppWindowClosed_Params', [
      mojo.internal.StructField('send_onclosed', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    extensions.mojom.LocalFrame_NotifyRenderViewType_ParamsSpec, 'extensions.mojom.LocalFrame_NotifyRenderViewType_Params', [
      mojo.internal.StructField('view_type', 0, 0, extensions.mojom.ViewTypeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    extensions.mojom.LocalFrame_MessageInvoke_ParamsSpec, 'extensions.mojom.LocalFrame_MessageInvoke_Params', [
      mojo.internal.StructField('extension_id', 0, 0, extensions.mojom.ExtensionIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('module_name', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('function_name', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('args', 24, 0, mojo_base.mojom.ListValueSpec.$, null, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    extensions.mojom.LocalFrame_ExecuteCode_ParamsSpec, 'extensions.mojom.LocalFrame_ExecuteCode_Params', [
      mojo.internal.StructField('param', 0, 0, extensions.mojom.ExecuteCodeParamsSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    extensions.mojom.LocalFrame_ExecuteCode_ResponseParamsSpec, 'extensions.mojom.LocalFrame_ExecuteCode_ResponseParams', [
      mojo.internal.StructField('error', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('url', 8, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('result', 16, 0, mojo_base.mojom.ValueSpec.$, null, true, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    extensions.mojom.LocalFrame_ExecuteDeclarativeScript_ParamsSpec, 'extensions.mojom.LocalFrame_ExecuteDeclarativeScript_Params', [
      mojo.internal.StructField('extension_id', 0, 0, extensions.mojom.ExtensionIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('script_id', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('url', 16, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('tab_id', 24, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    extensions.mojom.LocalFrame_UpdateBrowserWindowId_ParamsSpec, 'extensions.mojom.LocalFrame_UpdateBrowserWindowId_Params', [
      mojo.internal.StructField('window_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    extensions.mojom.LocalFrame_DispatchOnConnect_ParamsSpec, 'extensions.mojom.LocalFrame_DispatchOnConnect_Params', [
      mojo.internal.StructField('port_id', 0, 0, extensions.mojom.PortIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('channel_type', 8, 0, extensions.mojom.ChannelTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('channel_name', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('tab_info', 24, 0, extensions.mojom.TabConnectionInfoSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('external_connection_info', 32, 0, extensions.mojom.ExternalConnectionInfoSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('port', 40, 0, pending_associated_receiver<extensions.mojom.MessagePort>Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('port_host', 48, 0, pending_associated_remote<extensions.mojom.MessagePortHost>Spec.$, null, false, 0, undefined),
    ],
    [[0, 64]]);

mojo.internal.Struct(
    extensions.mojom.LocalFrame_DispatchOnConnect_ResponseParamsSpec, 'extensions.mojom.LocalFrame_DispatchOnConnect_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

extensions.mojom.LocalFramePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

extensions.mojom.LocalFrameRemote = class {
  static get $interfaceName() {
    return 'extensions.mojom.LocalFrame';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      extensions.mojom.LocalFramePendingReceiver,
      handle);
    this.$ = new extensions.mojom.LocalFrameRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  setFrameName(frame_name) {
    return this.$.setFrameName(frame_name);
  }
  setSpatialNavigationEnabled(spatial_nav_enabled) {
    return this.$.setSpatialNavigationEnabled(spatial_nav_enabled);
  }
  setTabId(tab_id) {
    return this.$.setTabId(tab_id);
  }
  appWindowClosed(send_onclosed) {
    return this.$.appWindowClosed(send_onclosed);
  }
  notifyRenderViewType(view_type) {
    return this.$.notifyRenderViewType(view_type);
  }
  messageInvoke(extension_id, module_name, function_name, args) {
    return this.$.messageInvoke(extension_id, module_name, function_name, args);
  }
  executeCode(param) {
    return this.$.executeCode(param);
  }
  executeDeclarativeScript(tab_id, extension_id, script_id, url) {
    return this.$.executeDeclarativeScript(tab_id, extension_id, script_id, url);
  }
  updateBrowserWindowId(window_id) {
    return this.$.updateBrowserWindowId(window_id);
  }
  dispatchOnConnect(port_id, channel_type, channel_name, tab_info, external_connection_info, port, port_host) {
    return this.$.dispatchOnConnect(port_id, channel_type, channel_name, tab_info, external_connection_info, port, port_host);
  }
};

extensions.mojom.LocalFrameRemoteCallHandler = class {
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

  setFrameName(frame_name) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      extensions.mojom.LocalFrame_SetFrameName_ParamsSpec,
      null,
      [frame_name],
      false);
  }

  setSpatialNavigationEnabled(spatial_nav_enabled) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      extensions.mojom.LocalFrame_SetSpatialNavigationEnabled_ParamsSpec,
      null,
      [spatial_nav_enabled],
      false);
  }

  setTabId(tab_id) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      extensions.mojom.LocalFrame_SetTabId_ParamsSpec,
      null,
      [tab_id],
      false);
  }

  appWindowClosed(send_onclosed) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      extensions.mojom.LocalFrame_AppWindowClosed_ParamsSpec,
      null,
      [send_onclosed],
      false);
  }

  notifyRenderViewType(view_type) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      extensions.mojom.LocalFrame_NotifyRenderViewType_ParamsSpec,
      null,
      [view_type],
      false);
  }

  messageInvoke(extension_id, module_name, function_name, args) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      extensions.mojom.LocalFrame_MessageInvoke_ParamsSpec,
      null,
      [extension_id, module_name, function_name, args],
      false);
  }

  executeCode(param) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      extensions.mojom.LocalFrame_ExecuteCode_ParamsSpec,
      extensions.mojom.LocalFrame_ExecuteCode_ResponseParamsSpec,
      [param],
      false);
  }

  executeDeclarativeScript(tab_id, extension_id, script_id, url) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      extensions.mojom.LocalFrame_ExecuteDeclarativeScript_ParamsSpec,
      null,
      [tab_id, extension_id, script_id, url],
      false);
  }

  updateBrowserWindowId(window_id) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      extensions.mojom.LocalFrame_UpdateBrowserWindowId_ParamsSpec,
      null,
      [window_id],
      false);
  }

  dispatchOnConnect(port_id, channel_type, channel_name, tab_info, external_connection_info, port, port_host) {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      extensions.mojom.LocalFrame_DispatchOnConnect_ParamsSpec,
      extensions.mojom.LocalFrame_DispatchOnConnect_ResponseParamsSpec,
      [port_id, channel_type, channel_name, tab_info, external_connection_info, port, port_host],
      false);
  }

};

extensions.mojom.LocalFrame.getRemote = function() {
  let remote = new extensions.mojom.LocalFrameRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'extensions.mojom.LocalFrame',
    'context');
  return remote.$;
};

extensions.mojom.LocalFrameReceiver = class {
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
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = {{ header: args[1], payload: payload, handles: args[3] || [] }};
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(extensions.mojom.LocalFrame_SetFrameName_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(extensions.mojom.LocalFrame_SetSpatialNavigationEnabled_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(extensions.mojom.LocalFrame_SetTabId_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(extensions.mojom.LocalFrame_AppWindowClosed_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(extensions.mojom.LocalFrame_NotifyRenderViewType_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(extensions.mojom.LocalFrame_MessageInvoke_ParamsSpec);
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(extensions.mojom.LocalFrame_ExecuteCode_ParamsSpec);
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(extensions.mojom.LocalFrame_ExecuteDeclarativeScript_ParamsSpec);
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(extensions.mojom.LocalFrame_UpdateBrowserWindowId_ParamsSpec);
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(extensions.mojom.LocalFrame_DispatchOnConnect_ParamsSpec);
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(extensions.mojom.LocalFrame_SetFrameName_ParamsSpec.$.structSpec);
          const result = this.impl.setFrameName(params.frame_name);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(extensions.mojom.LocalFrame_SetSpatialNavigationEnabled_ParamsSpec.$.structSpec);
          const result = this.impl.setSpatialNavigationEnabled(params.spatial_nav_enabled);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(extensions.mojom.LocalFrame_SetTabId_ParamsSpec.$.structSpec);
          const result = this.impl.setTabId(params.tab_id);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(extensions.mojom.LocalFrame_AppWindowClosed_ParamsSpec.$.structSpec);
          const result = this.impl.appWindowClosed(params.send_onclosed);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(extensions.mojom.LocalFrame_NotifyRenderViewType_ParamsSpec.$.structSpec);
          const result = this.impl.notifyRenderViewType(params.view_type);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(extensions.mojom.LocalFrame_MessageInvoke_ParamsSpec.$.structSpec);
          const result = this.impl.messageInvoke(params.extension_id, params.module_name, params.function_name, params.args);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(extensions.mojom.LocalFrame_ExecuteCode_ParamsSpec.$.structSpec);
          const result = this.impl.executeCode(params.param);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, extensions.mojom.LocalFrame_ExecuteCode_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(extensions.mojom.LocalFrame_ExecuteDeclarativeScript_ParamsSpec.$.structSpec);
          const result = this.impl.executeDeclarativeScript(params.tab_id, params.extension_id, params.script_id, params.url);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(extensions.mojom.LocalFrame_UpdateBrowserWindowId_ParamsSpec.$.structSpec);
          const result = this.impl.updateBrowserWindowId(params.window_id);
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(extensions.mojom.LocalFrame_DispatchOnConnect_ParamsSpec.$.structSpec);
          const result = this.impl.dispatchOnConnect(params.port_id, params.channel_type, params.channel_name, params.tab_info, params.external_connection_info, params.port, params.port_host);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, extensions.mojom.LocalFrame_DispatchOnConnect_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

extensions.mojom.LocalFrameReceiver = extensions.mojom.LocalFrameReceiver;

extensions.mojom.LocalFramePtr = extensions.mojom.LocalFrameRemote;
extensions.mojom.LocalFrameRequest = extensions.mojom.LocalFramePendingReceiver;


// Interface: LocalFrameHost
mojo.internal.Struct(
    extensions.mojom.LocalFrameHost_RequestScriptInjectionPermission_ParamsSpec, 'extensions.mojom.LocalFrameHost_RequestScriptInjectionPermission_Params', [
      mojo.internal.StructField('extension_id', 0, 0, extensions.mojom.ExtensionIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('script_type', 8, 0, extensions.mojom.InjectionTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('run_location', 16, 0, extensions.mojom.RunLocationSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    extensions.mojom.LocalFrameHost_RequestScriptInjectionPermission_ResponseParamsSpec, 'extensions.mojom.LocalFrameHost_RequestScriptInjectionPermission_ResponseParams', [
      mojo.internal.StructField('granted', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    extensions.mojom.LocalFrameHost_GetAppInstallState_ParamsSpec, 'extensions.mojom.LocalFrameHost_GetAppInstallState_Params', [
      mojo.internal.StructField('url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    extensions.mojom.LocalFrameHost_GetAppInstallState_ResponseParamsSpec, 'extensions.mojom.LocalFrameHost_GetAppInstallState_ResponseParams', [
      mojo.internal.StructField('state', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    extensions.mojom.LocalFrameHost_Request_ParamsSpec, 'extensions.mojom.LocalFrameHost_Request_Params', [
      mojo.internal.StructField('params', 0, 0, extensions.mojom.RequestParamsSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    extensions.mojom.LocalFrameHost_Request_ResponseParamsSpec, 'extensions.mojom.LocalFrameHost_Request_ResponseParams', [
      mojo.internal.StructField('response_wrapper', 0, 0, mojo_base.mojom.ListValueSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('error', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('extra_data', 16, 0, extensions.mojom.ExtraResponseDataSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('success', 24, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    extensions.mojom.LocalFrameHost_ResponseAck_ParamsSpec, 'extensions.mojom.LocalFrameHost_ResponseAck_Params', [
      mojo.internal.StructField('request_uuid', 0, 0, mojo_base.mojom.UuidSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    extensions.mojom.LocalFrameHost_WatchedPageChange_ParamsSpec, 'extensions.mojom.LocalFrameHost_WatchedPageChange_Params', [
      mojo.internal.StructField('css_selectors', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    extensions.mojom.LocalFrameHost_DetailedConsoleMessageAdded_ParamsSpec, 'extensions.mojom.LocalFrameHost_DetailedConsoleMessageAdded_Params', [
      mojo.internal.StructField('message', 0, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('source', 8, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('stack_trace', 16, 0, mojo.internal.Array(extensions.mojom.StackFrameSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('level', 24, 0, blink.mojom.ConsoleMessageLevelSpec.$, null, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    extensions.mojom.LocalFrameHost_ContentScriptsExecuting_ParamsSpec, 'extensions.mojom.LocalFrameHost_ContentScriptsExecuting_Params', [
      mojo.internal.StructField('extension_id_to_scripts', 0, 0, mojo.internal.Map(mojo.internal.String, mojo.internal.Array(mojo.internal.String, false), false), null, false, 0, undefined),
      mojo.internal.StructField('frame_url', 8, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    extensions.mojom.LocalFrameHost_IncrementLazyKeepaliveCount_ParamsSpec, 'extensions.mojom.LocalFrameHost_IncrementLazyKeepaliveCount_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    extensions.mojom.LocalFrameHost_DecrementLazyKeepaliveCount_ParamsSpec, 'extensions.mojom.LocalFrameHost_DecrementLazyKeepaliveCount_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    extensions.mojom.LocalFrameHost_AppWindowReady_ParamsSpec, 'extensions.mojom.LocalFrameHost_AppWindowReady_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    extensions.mojom.LocalFrameHost_OpenChannelToExtension_ParamsSpec, 'extensions.mojom.LocalFrameHost_OpenChannelToExtension_Params', [
      mojo.internal.StructField('info', 0, 0, extensions.mojom.ExternalConnectionInfoSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('channel_type', 8, 0, extensions.mojom.ChannelTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('channel_name', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('port_id', 24, 0, extensions.mojom.PortIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('port', 32, 0, pending_associated_remote<extensions.mojom.MessagePort>Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('port_host', 40, 0, pending_associated_receiver<extensions.mojom.MessagePortHost>Spec.$, null, false, 0, undefined),
    ],
    [[0, 56]]);

mojo.internal.Struct(
    extensions.mojom.LocalFrameHost_OpenChannelToNativeApp_ParamsSpec, 'extensions.mojom.LocalFrameHost_OpenChannelToNativeApp_Params', [
      mojo.internal.StructField('native_app_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('port_id', 8, 0, extensions.mojom.PortIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('port', 16, 0, pending_associated_remote<extensions.mojom.MessagePort>Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('port_host', 24, 0, pending_associated_receiver<extensions.mojom.MessagePortHost>Spec.$, null, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    extensions.mojom.LocalFrameHost_OpenChannelToTab_ParamsSpec, 'extensions.mojom.LocalFrameHost_OpenChannelToTab_Params', [
      mojo.internal.StructField('document_id', 0, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('channel_type', 8, 0, extensions.mojom.ChannelTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('channel_name', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('port_id', 24, 0, extensions.mojom.PortIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('port', 32, 0, pending_associated_remote<extensions.mojom.MessagePort>Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('port_host', 40, 0, pending_associated_receiver<extensions.mojom.MessagePortHost>Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('tab_id', 48, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('frame_id', 52, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 64]]);

extensions.mojom.LocalFrameHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

extensions.mojom.LocalFrameHostRemote = class {
  static get $interfaceName() {
    return 'extensions.mojom.LocalFrameHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      extensions.mojom.LocalFrameHostPendingReceiver,
      handle);
    this.$ = new extensions.mojom.LocalFrameHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  requestScriptInjectionPermission(extension_id, script_type, run_location) {
    return this.$.requestScriptInjectionPermission(extension_id, script_type, run_location);
  }
  getAppInstallState(url) {
    return this.$.getAppInstallState(url);
  }
  request(params) {
    return this.$.request(params);
  }
  responseAck(request_uuid) {
    return this.$.responseAck(request_uuid);
  }
  watchedPageChange(css_selectors) {
    return this.$.watchedPageChange(css_selectors);
  }
  detailedConsoleMessageAdded(message, source, stack_trace, level) {
    return this.$.detailedConsoleMessageAdded(message, source, stack_trace, level);
  }
  contentScriptsExecuting(extension_id_to_scripts, frame_url) {
    return this.$.contentScriptsExecuting(extension_id_to_scripts, frame_url);
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
  openChannelToExtension(info, channel_type, channel_name, port_id, port, port_host) {
    return this.$.openChannelToExtension(info, channel_type, channel_name, port_id, port, port_host);
  }
  openChannelToNativeApp(native_app_name, port_id, port, port_host) {
    return this.$.openChannelToNativeApp(native_app_name, port_id, port, port_host);
  }
  openChannelToTab(tab_id, frame_id, document_id, channel_type, channel_name, port_id, port, port_host) {
    return this.$.openChannelToTab(tab_id, frame_id, document_id, channel_type, channel_name, port_id, port, port_host);
  }
};

extensions.mojom.LocalFrameHostRemoteCallHandler = class {
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

  requestScriptInjectionPermission(extension_id, script_type, run_location) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      extensions.mojom.LocalFrameHost_RequestScriptInjectionPermission_ParamsSpec,
      extensions.mojom.LocalFrameHost_RequestScriptInjectionPermission_ResponseParamsSpec,
      [extension_id, script_type, run_location],
      false);
  }

  getAppInstallState(url) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      extensions.mojom.LocalFrameHost_GetAppInstallState_ParamsSpec,
      extensions.mojom.LocalFrameHost_GetAppInstallState_ResponseParamsSpec,
      [url],
      false);
  }

  request(params) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      extensions.mojom.LocalFrameHost_Request_ParamsSpec,
      extensions.mojom.LocalFrameHost_Request_ResponseParamsSpec,
      [params],
      false);
  }

  responseAck(request_uuid) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      extensions.mojom.LocalFrameHost_ResponseAck_ParamsSpec,
      null,
      [request_uuid],
      false);
  }

  watchedPageChange(css_selectors) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      extensions.mojom.LocalFrameHost_WatchedPageChange_ParamsSpec,
      null,
      [css_selectors],
      false);
  }

  detailedConsoleMessageAdded(message, source, stack_trace, level) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      extensions.mojom.LocalFrameHost_DetailedConsoleMessageAdded_ParamsSpec,
      null,
      [message, source, stack_trace, level],
      false);
  }

  contentScriptsExecuting(extension_id_to_scripts, frame_url) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      extensions.mojom.LocalFrameHost_ContentScriptsExecuting_ParamsSpec,
      null,
      [extension_id_to_scripts, frame_url],
      false);
  }

  incrementLazyKeepaliveCount() {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      extensions.mojom.LocalFrameHost_IncrementLazyKeepaliveCount_ParamsSpec,
      null,
      [],
      false);
  }

  decrementLazyKeepaliveCount() {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      extensions.mojom.LocalFrameHost_DecrementLazyKeepaliveCount_ParamsSpec,
      null,
      [],
      false);
  }

  appWindowReady() {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      extensions.mojom.LocalFrameHost_AppWindowReady_ParamsSpec,
      null,
      [],
      false);
  }

  openChannelToExtension(info, channel_type, channel_name, port_id, port, port_host) {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      extensions.mojom.LocalFrameHost_OpenChannelToExtension_ParamsSpec,
      null,
      [info, channel_type, channel_name, port_id, port, port_host],
      false);
  }

  openChannelToNativeApp(native_app_name, port_id, port, port_host) {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      extensions.mojom.LocalFrameHost_OpenChannelToNativeApp_ParamsSpec,
      null,
      [native_app_name, port_id, port, port_host],
      false);
  }

  openChannelToTab(tab_id, frame_id, document_id, channel_type, channel_name, port_id, port, port_host) {
    return this.proxy.sendMessage(
      this.ordinals[12],  // ordinal
      extensions.mojom.LocalFrameHost_OpenChannelToTab_ParamsSpec,
      null,
      [tab_id, frame_id, document_id, channel_type, channel_name, port_id, port, port_host],
      false);
  }

};

extensions.mojom.LocalFrameHost.getRemote = function() {
  let remote = new extensions.mojom.LocalFrameHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'extensions.mojom.LocalFrameHost',
    'context');
  return remote.$;
};

extensions.mojom.LocalFrameHostReceiver = class {
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
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = {{ header: args[1], payload: payload, handles: args[3] || [] }};
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(extensions.mojom.LocalFrameHost_RequestScriptInjectionPermission_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(extensions.mojom.LocalFrameHost_GetAppInstallState_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(extensions.mojom.LocalFrameHost_Request_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(extensions.mojom.LocalFrameHost_ResponseAck_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(extensions.mojom.LocalFrameHost_WatchedPageChange_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(extensions.mojom.LocalFrameHost_DetailedConsoleMessageAdded_ParamsSpec);
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(extensions.mojom.LocalFrameHost_ContentScriptsExecuting_ParamsSpec);
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(extensions.mojom.LocalFrameHost_IncrementLazyKeepaliveCount_ParamsSpec);
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(extensions.mojom.LocalFrameHost_DecrementLazyKeepaliveCount_ParamsSpec);
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(extensions.mojom.LocalFrameHost_AppWindowReady_ParamsSpec);
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(extensions.mojom.LocalFrameHost_OpenChannelToExtension_ParamsSpec);
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(extensions.mojom.LocalFrameHost_OpenChannelToNativeApp_ParamsSpec);
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(extensions.mojom.LocalFrameHost_OpenChannelToTab_ParamsSpec);
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(extensions.mojom.LocalFrameHost_RequestScriptInjectionPermission_ParamsSpec.$.structSpec);
          const result = this.impl.requestScriptInjectionPermission(params.extension_id, params.script_type, params.run_location);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, extensions.mojom.LocalFrameHost_RequestScriptInjectionPermission_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(extensions.mojom.LocalFrameHost_GetAppInstallState_ParamsSpec.$.structSpec);
          const result = this.impl.getAppInstallState(params.url);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, extensions.mojom.LocalFrameHost_GetAppInstallState_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(extensions.mojom.LocalFrameHost_Request_ParamsSpec.$.structSpec);
          const result = this.impl.request(params.params);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, extensions.mojom.LocalFrameHost_Request_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(extensions.mojom.LocalFrameHost_ResponseAck_ParamsSpec.$.structSpec);
          const result = this.impl.responseAck(params.request_uuid);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(extensions.mojom.LocalFrameHost_WatchedPageChange_ParamsSpec.$.structSpec);
          const result = this.impl.watchedPageChange(params.css_selectors);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(extensions.mojom.LocalFrameHost_DetailedConsoleMessageAdded_ParamsSpec.$.structSpec);
          const result = this.impl.detailedConsoleMessageAdded(params.message, params.source, params.stack_trace, params.level);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(extensions.mojom.LocalFrameHost_ContentScriptsExecuting_ParamsSpec.$.structSpec);
          const result = this.impl.contentScriptsExecuting(params.extension_id_to_scripts, params.frame_url);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(extensions.mojom.LocalFrameHost_IncrementLazyKeepaliveCount_ParamsSpec.$.structSpec);
          const result = this.impl.incrementLazyKeepaliveCount();
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(extensions.mojom.LocalFrameHost_DecrementLazyKeepaliveCount_ParamsSpec.$.structSpec);
          const result = this.impl.decrementLazyKeepaliveCount();
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(extensions.mojom.LocalFrameHost_AppWindowReady_ParamsSpec.$.structSpec);
          const result = this.impl.appWindowReady();
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(extensions.mojom.LocalFrameHost_OpenChannelToExtension_ParamsSpec.$.structSpec);
          const result = this.impl.openChannelToExtension(params.info, params.channel_type, params.channel_name, params.port_id, params.port, params.port_host);
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(extensions.mojom.LocalFrameHost_OpenChannelToNativeApp_ParamsSpec.$.structSpec);
          const result = this.impl.openChannelToNativeApp(params.native_app_name, params.port_id, params.port, params.port_host);
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(extensions.mojom.LocalFrameHost_OpenChannelToTab_ParamsSpec.$.structSpec);
          const result = this.impl.openChannelToTab(params.tab_id, params.frame_id, params.document_id, params.channel_type, params.channel_name, params.port_id, params.port, params.port_host);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

extensions.mojom.LocalFrameHostReceiver = extensions.mojom.LocalFrameHostReceiver;

extensions.mojom.LocalFrameHostPtr = extensions.mojom.LocalFrameHostRemote;
extensions.mojom.LocalFrameHostRequest = extensions.mojom.LocalFrameHostPendingReceiver;

