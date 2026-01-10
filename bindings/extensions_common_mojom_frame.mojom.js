// Auto-generated MojoJS binding
// Source: chromium_src/extensions/common/mojom/frame.mojom
// Module: extensions.mojom

'use strict';

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
};

extensions.mojom.LocalFrameRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  setFrameName(frame_name) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      extensions.mojom.LocalFrame_SetFrameName_ParamsSpec,
      null,
      [frame_name],
      false);
  }

  setSpatialNavigationEnabled(spatial_nav_enabled) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      extensions.mojom.LocalFrame_SetSpatialNavigationEnabled_ParamsSpec,
      null,
      [spatial_nav_enabled],
      false);
  }

  setTabId(tab_id) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      extensions.mojom.LocalFrame_SetTabId_ParamsSpec,
      null,
      [tab_id],
      false);
  }

  appWindowClosed(send_onclosed) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      extensions.mojom.LocalFrame_AppWindowClosed_ParamsSpec,
      null,
      [send_onclosed],
      false);
  }

  notifyRenderViewType(view_type) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      extensions.mojom.LocalFrame_NotifyRenderViewType_ParamsSpec,
      null,
      [view_type],
      false);
  }

  messageInvoke(extension_id, module_name, function_name, args) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      extensions.mojom.LocalFrame_MessageInvoke_ParamsSpec,
      null,
      [extension_id, module_name, function_name, args],
      false);
  }

  executeCode(param) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      extensions.mojom.LocalFrame_ExecuteCode_ParamsSpec,
      extensions.mojom.LocalFrame_ExecuteCode_ResponseParamsSpec,
      [param],
      false);
  }

  executeDeclarativeScript(tab_id, extension_id, script_id, url) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      extensions.mojom.LocalFrame_ExecuteDeclarativeScript_ParamsSpec,
      null,
      [tab_id, extension_id, script_id, url],
      false);
  }

  updateBrowserWindowId(window_id) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      extensions.mojom.LocalFrame_UpdateBrowserWindowId_ParamsSpec,
      null,
      [window_id],
      false);
  }

  dispatchOnConnect(port_id, channel_type, channel_name, tab_info, external_connection_info, port, port_host) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
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
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
    this.ordinalMap.set(3, 3); // Default ordinal 3 -> Index 3
    this.ordinalMap.set(4, 4); // Default ordinal 4 -> Index 4
    this.ordinalMap.set(5, 5); // Default ordinal 5 -> Index 5
    this.ordinalMap.set(6, 6); // Default ordinal 6 -> Index 6
    this.ordinalMap.set(7, 7); // Default ordinal 7 -> Index 7
    this.ordinalMap.set(8, 8); // Default ordinal 8 -> Index 8
    this.ordinalMap.set(9, 9); // Default ordinal 9 -> Index 9
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
        message = {
          header: args[1],
          payload: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: SetFrameName
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(extensions.mojom.LocalFrame_SetFrameName_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetFrameName (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 1: SetSpatialNavigationEnabled
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(extensions.mojom.LocalFrame_SetSpatialNavigationEnabled_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetSpatialNavigationEnabled (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 2: SetTabId
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(extensions.mojom.LocalFrame_SetTabId_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetTabId (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 3: AppWindowClosed
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(extensions.mojom.LocalFrame_AppWindowClosed_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AppWindowClosed (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 4: NotifyRenderViewType
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(extensions.mojom.LocalFrame_NotifyRenderViewType_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> NotifyRenderViewType (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 5: MessageInvoke
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(extensions.mojom.LocalFrame_MessageInvoke_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> MessageInvoke (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 6: ExecuteCode
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(extensions.mojom.LocalFrame_ExecuteCode_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ExecuteCode (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 7: ExecuteDeclarativeScript
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(extensions.mojom.LocalFrame_ExecuteDeclarativeScript_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ExecuteDeclarativeScript (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 8: UpdateBrowserWindowId
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(extensions.mojom.LocalFrame_UpdateBrowserWindowId_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UpdateBrowserWindowId (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 9: DispatchOnConnect
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(extensions.mojom.LocalFrame_DispatchOnConnect_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DispatchOnConnect (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) { /* Ignore mismatch */ }
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
          const params = decoder.decodeStruct(extensions.mojom.LocalFrame_SetFrameName_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setFrameName');
          const result = this.impl.setFrameName(params.frame_name);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(extensions.mojom.LocalFrame_SetSpatialNavigationEnabled_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setSpatialNavigationEnabled');
          const result = this.impl.setSpatialNavigationEnabled(params.spatial_nav_enabled);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(extensions.mojom.LocalFrame_SetTabId_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setTabId');
          const result = this.impl.setTabId(params.tab_id);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(extensions.mojom.LocalFrame_AppWindowClosed_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.appWindowClosed');
          const result = this.impl.appWindowClosed(params.send_onclosed);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(extensions.mojom.LocalFrame_NotifyRenderViewType_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.notifyRenderViewType');
          const result = this.impl.notifyRenderViewType(params.view_type);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(extensions.mojom.LocalFrame_MessageInvoke_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.messageInvoke');
          const result = this.impl.messageInvoke(params.extension_id, params.module_name, params.function_name, params.args);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(extensions.mojom.LocalFrame_ExecuteCode_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.executeCode');
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
          const params = decoder.decodeStruct(extensions.mojom.LocalFrame_ExecuteDeclarativeScript_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.executeDeclarativeScript');
          const result = this.impl.executeDeclarativeScript(params.tab_id, params.extension_id, params.script_id, params.url);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(extensions.mojom.LocalFrame_UpdateBrowserWindowId_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.updateBrowserWindowId');
          const result = this.impl.updateBrowserWindowId(params.window_id);
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(extensions.mojom.LocalFrame_DispatchOnConnect_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.dispatchOnConnect');
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
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
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
};

extensions.mojom.LocalFrameHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  requestScriptInjectionPermission(extension_id, script_type, run_location) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      extensions.mojom.LocalFrameHost_RequestScriptInjectionPermission_ParamsSpec,
      extensions.mojom.LocalFrameHost_RequestScriptInjectionPermission_ResponseParamsSpec,
      [extension_id, script_type, run_location],
      false);
  }

  getAppInstallState(url) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      extensions.mojom.LocalFrameHost_GetAppInstallState_ParamsSpec,
      extensions.mojom.LocalFrameHost_GetAppInstallState_ResponseParamsSpec,
      [url],
      false);
  }

  request(params) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      extensions.mojom.LocalFrameHost_Request_ParamsSpec,
      extensions.mojom.LocalFrameHost_Request_ResponseParamsSpec,
      [params],
      false);
  }

  responseAck(request_uuid) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      extensions.mojom.LocalFrameHost_ResponseAck_ParamsSpec,
      null,
      [request_uuid],
      false);
  }

  watchedPageChange(css_selectors) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      extensions.mojom.LocalFrameHost_WatchedPageChange_ParamsSpec,
      null,
      [css_selectors],
      false);
  }

  detailedConsoleMessageAdded(message, source, stack_trace, level) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      extensions.mojom.LocalFrameHost_DetailedConsoleMessageAdded_ParamsSpec,
      null,
      [message, source, stack_trace, level],
      false);
  }

  contentScriptsExecuting(extension_id_to_scripts, frame_url) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      extensions.mojom.LocalFrameHost_ContentScriptsExecuting_ParamsSpec,
      null,
      [extension_id_to_scripts, frame_url],
      false);
  }

  incrementLazyKeepaliveCount() {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      extensions.mojom.LocalFrameHost_IncrementLazyKeepaliveCount_ParamsSpec,
      null,
      [],
      false);
  }

  decrementLazyKeepaliveCount() {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      extensions.mojom.LocalFrameHost_DecrementLazyKeepaliveCount_ParamsSpec,
      null,
      [],
      false);
  }

  appWindowReady() {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      extensions.mojom.LocalFrameHost_AppWindowReady_ParamsSpec,
      null,
      [],
      false);
  }

  openChannelToExtension(info, channel_type, channel_name, port_id, port, port_host) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      extensions.mojom.LocalFrameHost_OpenChannelToExtension_ParamsSpec,
      null,
      [info, channel_type, channel_name, port_id, port, port_host],
      false);
  }

  openChannelToNativeApp(native_app_name, port_id, port, port_host) {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      extensions.mojom.LocalFrameHost_OpenChannelToNativeApp_ParamsSpec,
      null,
      [native_app_name, port_id, port, port_host],
      false);
  }

  openChannelToTab(tab_id, frame_id, document_id, channel_type, channel_name, port_id, port, port_host) {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
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
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
    this.ordinalMap.set(3, 3); // Default ordinal 3 -> Index 3
    this.ordinalMap.set(4, 4); // Default ordinal 4 -> Index 4
    this.ordinalMap.set(5, 5); // Default ordinal 5 -> Index 5
    this.ordinalMap.set(6, 6); // Default ordinal 6 -> Index 6
    this.ordinalMap.set(7, 7); // Default ordinal 7 -> Index 7
    this.ordinalMap.set(8, 8); // Default ordinal 8 -> Index 8
    this.ordinalMap.set(9, 9); // Default ordinal 9 -> Index 9
    this.ordinalMap.set(10, 10); // Default ordinal 10 -> Index 10
    this.ordinalMap.set(11, 11); // Default ordinal 11 -> Index 11
    this.ordinalMap.set(12, 12); // Default ordinal 12 -> Index 12
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
        message = {
          header: args[1],
          payload: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: RequestScriptInjectionPermission
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(extensions.mojom.LocalFrameHost_RequestScriptInjectionPermission_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RequestScriptInjectionPermission (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 1: GetAppInstallState
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(extensions.mojom.LocalFrameHost_GetAppInstallState_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetAppInstallState (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 2: Request
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(extensions.mojom.LocalFrameHost_Request_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Request (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 3: ResponseAck
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(extensions.mojom.LocalFrameHost_ResponseAck_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ResponseAck (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 4: WatchedPageChange
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(extensions.mojom.LocalFrameHost_WatchedPageChange_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> WatchedPageChange (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 5: DetailedConsoleMessageAdded
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(extensions.mojom.LocalFrameHost_DetailedConsoleMessageAdded_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DetailedConsoleMessageAdded (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 6: ContentScriptsExecuting
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(extensions.mojom.LocalFrameHost_ContentScriptsExecuting_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ContentScriptsExecuting (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 7: IncrementLazyKeepaliveCount
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(extensions.mojom.LocalFrameHost_IncrementLazyKeepaliveCount_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> IncrementLazyKeepaliveCount (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 8: DecrementLazyKeepaliveCount
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(extensions.mojom.LocalFrameHost_DecrementLazyKeepaliveCount_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DecrementLazyKeepaliveCount (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 9: AppWindowReady
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(extensions.mojom.LocalFrameHost_AppWindowReady_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AppWindowReady (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 10: OpenChannelToExtension
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(extensions.mojom.LocalFrameHost_OpenChannelToExtension_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OpenChannelToExtension (10)');
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 11: OpenChannelToNativeApp
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(extensions.mojom.LocalFrameHost_OpenChannelToNativeApp_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OpenChannelToNativeApp (11)');
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 12: OpenChannelToTab
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(extensions.mojom.LocalFrameHost_OpenChannelToTab_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OpenChannelToTab (12)');
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
           } catch (e) { /* Ignore mismatch */ }
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
          const params = decoder.decodeStruct(extensions.mojom.LocalFrameHost_RequestScriptInjectionPermission_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.requestScriptInjectionPermission');
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
          const params = decoder.decodeStruct(extensions.mojom.LocalFrameHost_GetAppInstallState_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getAppInstallState');
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
          const params = decoder.decodeStruct(extensions.mojom.LocalFrameHost_Request_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.request');
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
          const params = decoder.decodeStruct(extensions.mojom.LocalFrameHost_ResponseAck_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.responseAck');
          const result = this.impl.responseAck(params.request_uuid);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(extensions.mojom.LocalFrameHost_WatchedPageChange_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.watchedPageChange');
          const result = this.impl.watchedPageChange(params.css_selectors);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(extensions.mojom.LocalFrameHost_DetailedConsoleMessageAdded_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.detailedConsoleMessageAdded');
          const result = this.impl.detailedConsoleMessageAdded(params.message, params.source, params.stack_trace, params.level);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(extensions.mojom.LocalFrameHost_ContentScriptsExecuting_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.contentScriptsExecuting');
          const result = this.impl.contentScriptsExecuting(params.extension_id_to_scripts, params.frame_url);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(extensions.mojom.LocalFrameHost_IncrementLazyKeepaliveCount_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.incrementLazyKeepaliveCount');
          const result = this.impl.incrementLazyKeepaliveCount();
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(extensions.mojom.LocalFrameHost_DecrementLazyKeepaliveCount_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.decrementLazyKeepaliveCount');
          const result = this.impl.decrementLazyKeepaliveCount();
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(extensions.mojom.LocalFrameHost_AppWindowReady_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.appWindowReady');
          const result = this.impl.appWindowReady();
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(extensions.mojom.LocalFrameHost_OpenChannelToExtension_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.openChannelToExtension');
          const result = this.impl.openChannelToExtension(params.info, params.channel_type, params.channel_name, params.port_id, params.port, params.port_host);
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(extensions.mojom.LocalFrameHost_OpenChannelToNativeApp_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.openChannelToNativeApp');
          const result = this.impl.openChannelToNativeApp(params.native_app_name, params.port_id, params.port, params.port_host);
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(extensions.mojom.LocalFrameHost_OpenChannelToTab_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.openChannelToTab');
          const result = this.impl.openChannelToTab(params.tab_id, params.frame_id, params.document_id, params.channel_type, params.channel_name, params.port_id, params.port, params.port_host);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

extensions.mojom.LocalFrameHostReceiver = extensions.mojom.LocalFrameHostReceiver;

extensions.mojom.LocalFrameHostPtr = extensions.mojom.LocalFrameHostRemote;
extensions.mojom.LocalFrameHostRequest = extensions.mojom.LocalFrameHostPendingReceiver;

