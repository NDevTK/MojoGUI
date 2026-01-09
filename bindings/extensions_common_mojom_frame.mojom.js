// Auto-generated MojoJS binding
// Source: chromium_src/extensions/common/mojom/frame.mojom
// Module: extensions.mojom

'use strict';

// Module namespace
var extensions = extensions || {};
extensions.mojom = extensions.mojom || {};


// Struct: ExecuteCodeParams
extensions.mojom.ExecuteCodeParamsSpec = {
  $: {
    structSpec: {
      name: 'extensions.mojom.ExecuteCodeParams',
      packedSize: 56,
      fields: [
        { name: 'host_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'injection', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'webview_src', packedOffset: 16, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false },
        { name: 'match_origin_as_fallback_behavior', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'run_at', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'is_web_view', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: RequestParams
extensions.mojom.RequestParamsSpec = {
  $: {
    structSpec: {
      name: 'extensions.mojom.RequestParams',
      packedSize: 80,
      fields: [
        { name: 'name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'arguments', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.ListValueSpec, nullable: false },
        { name: 'extension_id', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'source_url', packedOffset: 24, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false },
        { name: 'context_type', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'service_worker_version_id', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false },
        { name: 'js_callstack', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Array, nullable: true },
        { name: 'request_id', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'worker_thread_id', packedOffset: 60, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'has_callback', packedOffset: 64, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'user_gesture', packedOffset: 64, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Interface: LocalFrame
extensions.mojom.LocalFrame = {};

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
      [frame_name]);
  }

  setSpatialNavigationEnabled(spatial_nav_enabled) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      extensions.mojom.LocalFrame_SetSpatialNavigationEnabled_ParamsSpec,
      null,
      [spatial_nav_enabled]);
  }

  setTabId(tab_id) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      extensions.mojom.LocalFrame_SetTabId_ParamsSpec,
      null,
      [tab_id]);
  }

  appWindowClosed(send_onclosed) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      extensions.mojom.LocalFrame_AppWindowClosed_ParamsSpec,
      null,
      [send_onclosed]);
  }

  notifyRenderViewType(view_type) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      extensions.mojom.LocalFrame_NotifyRenderViewType_ParamsSpec,
      null,
      [view_type]);
  }

  messageInvoke(extension_id, module_name, function_name, args) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      extensions.mojom.LocalFrame_MessageInvoke_ParamsSpec,
      null,
      [extension_id, module_name, function_name, args]);
  }

  executeCode(param) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      extensions.mojom.LocalFrame_ExecuteCode_ParamsSpec,
      extensions.mojom.LocalFrame_ExecuteCode_ResponseParamsSpec,
      [param]);
  }

  executeDeclarativeScript(tab_id, extension_id, script_id, url) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      extensions.mojom.LocalFrame_ExecuteDeclarativeScript_ParamsSpec,
      null,
      [tab_id, extension_id, script_id, url]);
  }

  updateBrowserWindowId(window_id) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      extensions.mojom.LocalFrame_UpdateBrowserWindowId_ParamsSpec,
      null,
      [window_id]);
  }

  dispatchOnConnect(port_id, channel_type, channel_name, tab_info, external_connection_info, port, port_host) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      extensions.mojom.LocalFrame_DispatchOnConnect_ParamsSpec,
      extensions.mojom.LocalFrame_DispatchOnConnect_ResponseParamsSpec,
      [port_id, channel_type, channel_name, tab_info, external_connection_info, port, port_host]);
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

// ParamsSpec for SetFrameName
extensions.mojom.LocalFrame_SetFrameName_ParamsSpec = {
  $: {
    structSpec: {
      name: 'extensions.mojom.LocalFrame.SetFrameName_Params',
      packedSize: 16,
      fields: [
        { name: 'frame_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetSpatialNavigationEnabled
extensions.mojom.LocalFrame_SetSpatialNavigationEnabled_ParamsSpec = {
  $: {
    structSpec: {
      name: 'extensions.mojom.LocalFrame.SetSpatialNavigationEnabled_Params',
      packedSize: 16,
      fields: [
        { name: 'spatial_nav_enabled', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetTabId
extensions.mojom.LocalFrame_SetTabId_ParamsSpec = {
  $: {
    structSpec: {
      name: 'extensions.mojom.LocalFrame.SetTabId_Params',
      packedSize: 16,
      fields: [
        { name: 'tab_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for AppWindowClosed
extensions.mojom.LocalFrame_AppWindowClosed_ParamsSpec = {
  $: {
    structSpec: {
      name: 'extensions.mojom.LocalFrame.AppWindowClosed_Params',
      packedSize: 16,
      fields: [
        { name: 'send_onclosed', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for NotifyRenderViewType
extensions.mojom.LocalFrame_NotifyRenderViewType_ParamsSpec = {
  $: {
    structSpec: {
      name: 'extensions.mojom.LocalFrame.NotifyRenderViewType_Params',
      packedSize: 16,
      fields: [
        { name: 'view_type', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for MessageInvoke
extensions.mojom.LocalFrame_MessageInvoke_ParamsSpec = {
  $: {
    structSpec: {
      name: 'extensions.mojom.LocalFrame.MessageInvoke_Params',
      packedSize: 40,
      fields: [
        { name: 'extension_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'module_name', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'function_name', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'args', packedOffset: 24, packedBitOffset: 0, type: mojo_base.mojom.ListValueSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ExecuteCode
extensions.mojom.LocalFrame_ExecuteCode_ParamsSpec = {
  $: {
    structSpec: {
      name: 'extensions.mojom.LocalFrame.ExecuteCode_Params',
      packedSize: 16,
      fields: [
        { name: 'param', packedOffset: 0, packedBitOffset: 0, type: extensions.mojom.ExecuteCodeParamsSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

extensions.mojom.LocalFrame_ExecuteCode_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'extensions.mojom.LocalFrame.ExecuteCode_ResponseParams',
      packedSize: 32,
      fields: [
        { name: 'error', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'url', packedOffset: 8, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false },
        { name: 'result', packedOffset: 16, packedBitOffset: 0, type: mojo_base.mojom.ValueSpec, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ExecuteDeclarativeScript
extensions.mojom.LocalFrame_ExecuteDeclarativeScript_ParamsSpec = {
  $: {
    structSpec: {
      name: 'extensions.mojom.LocalFrame.ExecuteDeclarativeScript_Params',
      packedSize: 40,
      fields: [
        { name: 'extension_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'script_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'url', packedOffset: 16, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false },
        { name: 'tab_id', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for UpdateBrowserWindowId
extensions.mojom.LocalFrame_UpdateBrowserWindowId_ParamsSpec = {
  $: {
    structSpec: {
      name: 'extensions.mojom.LocalFrame.UpdateBrowserWindowId_Params',
      packedSize: 16,
      fields: [
        { name: 'window_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for DispatchOnConnect
extensions.mojom.LocalFrame_DispatchOnConnect_ParamsSpec = {
  $: {
    structSpec: {
      name: 'extensions.mojom.LocalFrame.DispatchOnConnect_Params',
      packedSize: 56,
      fields: [
        { name: 'port_id', packedOffset: 0, packedBitOffset: 0, type: extensions.mojom.PortIdSpec, nullable: false },
        { name: 'channel_type', packedOffset: 8, packedBitOffset: 0, type: extensions.mojom.ChannelTypeSpec, nullable: false },
        { name: 'channel_name', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'tab_info', packedOffset: 24, packedBitOffset: 0, type: extensions.mojom.TabConnectionInfoSpec, nullable: false },
        { name: 'external_connection_info', packedOffset: 32, packedBitOffset: 0, type: extensions.mojom.ExternalConnectionInfoSpec, nullable: false },
        { name: 'port', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.AssociatedInterfaceRequest, nullable: false },
        { name: 'port_host', packedOffset: 44, packedBitOffset: 0, type: mojo.internal.AssociatedInterfaceProxy, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

extensions.mojom.LocalFrame_DispatchOnConnect_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'extensions.mojom.LocalFrame.DispatchOnConnect_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
extensions.mojom.LocalFramePtr = extensions.mojom.LocalFrameRemote;
extensions.mojom.LocalFrameRequest = extensions.mojom.LocalFramePendingReceiver;


// Interface: LocalFrameHost
extensions.mojom.LocalFrameHost = {};

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
      [extension_id, script_type, run_location]);
  }

  getAppInstallState(url) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      extensions.mojom.LocalFrameHost_GetAppInstallState_ParamsSpec,
      extensions.mojom.LocalFrameHost_GetAppInstallState_ResponseParamsSpec,
      [url]);
  }

  request(params) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      extensions.mojom.LocalFrameHost_Request_ParamsSpec,
      extensions.mojom.LocalFrameHost_Request_ResponseParamsSpec,
      [params]);
  }

  responseAck(request_uuid) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      extensions.mojom.LocalFrameHost_ResponseAck_ParamsSpec,
      null,
      [request_uuid]);
  }

  watchedPageChange(css_selectors) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      extensions.mojom.LocalFrameHost_WatchedPageChange_ParamsSpec,
      null,
      [css_selectors]);
  }

  detailedConsoleMessageAdded(message, source, stack_trace, level) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      extensions.mojom.LocalFrameHost_DetailedConsoleMessageAdded_ParamsSpec,
      null,
      [message, source, stack_trace, level]);
  }

  contentScriptsExecuting(extension_id_to_scripts, frame_url) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      extensions.mojom.LocalFrameHost_ContentScriptsExecuting_ParamsSpec,
      null,
      [extension_id_to_scripts, frame_url]);
  }

  incrementLazyKeepaliveCount() {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      extensions.mojom.LocalFrameHost_IncrementLazyKeepaliveCount_ParamsSpec,
      null,
      []);
  }

  decrementLazyKeepaliveCount() {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      extensions.mojom.LocalFrameHost_DecrementLazyKeepaliveCount_ParamsSpec,
      null,
      []);
  }

  appWindowReady() {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      extensions.mojom.LocalFrameHost_AppWindowReady_ParamsSpec,
      null,
      []);
  }

  openChannelToExtension(info, channel_type, channel_name, port_id, port, port_host) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      extensions.mojom.LocalFrameHost_OpenChannelToExtension_ParamsSpec,
      null,
      [info, channel_type, channel_name, port_id, port, port_host]);
  }

  openChannelToNativeApp(native_app_name, port_id, port, port_host) {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      extensions.mojom.LocalFrameHost_OpenChannelToNativeApp_ParamsSpec,
      null,
      [native_app_name, port_id, port, port_host]);
  }

  openChannelToTab(tab_id, frame_id, document_id, channel_type, channel_name, port_id, port, port_host) {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      extensions.mojom.LocalFrameHost_OpenChannelToTab_ParamsSpec,
      null,
      [tab_id, frame_id, document_id, channel_type, channel_name, port_id, port, port_host]);
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

// ParamsSpec for RequestScriptInjectionPermission
extensions.mojom.LocalFrameHost_RequestScriptInjectionPermission_ParamsSpec = {
  $: {
    structSpec: {
      name: 'extensions.mojom.LocalFrameHost.RequestScriptInjectionPermission_Params',
      packedSize: 32,
      fields: [
        { name: 'extension_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'script_type', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'run_location', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

extensions.mojom.LocalFrameHost_RequestScriptInjectionPermission_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'extensions.mojom.LocalFrameHost.RequestScriptInjectionPermission_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'granted', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetAppInstallState
extensions.mojom.LocalFrameHost_GetAppInstallState_ParamsSpec = {
  $: {
    structSpec: {
      name: 'extensions.mojom.LocalFrameHost.GetAppInstallState_Params',
      packedSize: 16,
      fields: [
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

extensions.mojom.LocalFrameHost_GetAppInstallState_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'extensions.mojom.LocalFrameHost.GetAppInstallState_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'state', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for Request
extensions.mojom.LocalFrameHost_Request_ParamsSpec = {
  $: {
    structSpec: {
      name: 'extensions.mojom.LocalFrameHost.Request_Params',
      packedSize: 16,
      fields: [
        { name: 'params', packedOffset: 0, packedBitOffset: 0, type: extensions.mojom.RequestParamsSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

extensions.mojom.LocalFrameHost_Request_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'extensions.mojom.LocalFrameHost.Request_ResponseParams',
      packedSize: 40,
      fields: [
        { name: 'response_wrapper', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.ListValueSpec, nullable: false },
        { name: 'error', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'extra_data', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
        { name: 'success', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ResponseAck
extensions.mojom.LocalFrameHost_ResponseAck_ParamsSpec = {
  $: {
    structSpec: {
      name: 'extensions.mojom.LocalFrameHost.ResponseAck_Params',
      packedSize: 16,
      fields: [
        { name: 'request_uuid', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.UuidSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for WatchedPageChange
extensions.mojom.LocalFrameHost_WatchedPageChange_ParamsSpec = {
  $: {
    structSpec: {
      name: 'extensions.mojom.LocalFrameHost.WatchedPageChange_Params',
      packedSize: 16,
      fields: [
        { name: 'css_selectors', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for DetailedConsoleMessageAdded
extensions.mojom.LocalFrameHost_DetailedConsoleMessageAdded_ParamsSpec = {
  $: {
    structSpec: {
      name: 'extensions.mojom.LocalFrameHost.DetailedConsoleMessageAdded_Params',
      packedSize: 40,
      fields: [
        { name: 'message', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false },
        { name: 'source', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false },
        { name: 'stack_trace', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'level', packedOffset: 24, packedBitOffset: 0, type: blink.mojom.ConsoleMessageLevelSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ContentScriptsExecuting
extensions.mojom.LocalFrameHost_ContentScriptsExecuting_ParamsSpec = {
  $: {
    structSpec: {
      name: 'extensions.mojom.LocalFrameHost.ContentScriptsExecuting_Params',
      packedSize: 24,
      fields: [
        { name: 'extension_id_to_scripts', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Map, nullable: false },
        { name: 'frame_url', packedOffset: 8, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for IncrementLazyKeepaliveCount
extensions.mojom.LocalFrameHost_IncrementLazyKeepaliveCount_ParamsSpec = {
  $: {
    structSpec: {
      name: 'extensions.mojom.LocalFrameHost.IncrementLazyKeepaliveCount_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for DecrementLazyKeepaliveCount
extensions.mojom.LocalFrameHost_DecrementLazyKeepaliveCount_ParamsSpec = {
  $: {
    structSpec: {
      name: 'extensions.mojom.LocalFrameHost.DecrementLazyKeepaliveCount_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for AppWindowReady
extensions.mojom.LocalFrameHost_AppWindowReady_ParamsSpec = {
  $: {
    structSpec: {
      name: 'extensions.mojom.LocalFrameHost.AppWindowReady_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OpenChannelToExtension
extensions.mojom.LocalFrameHost_OpenChannelToExtension_ParamsSpec = {
  $: {
    structSpec: {
      name: 'extensions.mojom.LocalFrameHost.OpenChannelToExtension_Params',
      packedSize: 48,
      fields: [
        { name: 'info', packedOffset: 0, packedBitOffset: 0, type: extensions.mojom.ExternalConnectionInfoSpec, nullable: false },
        { name: 'channel_type', packedOffset: 8, packedBitOffset: 0, type: extensions.mojom.ChannelTypeSpec, nullable: false },
        { name: 'channel_name', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'port_id', packedOffset: 24, packedBitOffset: 0, type: extensions.mojom.PortIdSpec, nullable: false },
        { name: 'port', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.AssociatedInterfaceProxy, nullable: false },
        { name: 'port_host', packedOffset: 36, packedBitOffset: 0, type: mojo.internal.AssociatedInterfaceRequest, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OpenChannelToNativeApp
extensions.mojom.LocalFrameHost_OpenChannelToNativeApp_ParamsSpec = {
  $: {
    structSpec: {
      name: 'extensions.mojom.LocalFrameHost.OpenChannelToNativeApp_Params',
      packedSize: 32,
      fields: [
        { name: 'native_app_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'port_id', packedOffset: 8, packedBitOffset: 0, type: extensions.mojom.PortIdSpec, nullable: false },
        { name: 'port', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.AssociatedInterfaceProxy, nullable: false },
        { name: 'port_host', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.AssociatedInterfaceRequest, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OpenChannelToTab
extensions.mojom.LocalFrameHost_OpenChannelToTab_ParamsSpec = {
  $: {
    structSpec: {
      name: 'extensions.mojom.LocalFrameHost.OpenChannelToTab_Params',
      packedSize: 56,
      fields: [
        { name: 'document_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'channel_type', packedOffset: 8, packedBitOffset: 0, type: extensions.mojom.ChannelTypeSpec, nullable: false },
        { name: 'channel_name', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'port_id', packedOffset: 24, packedBitOffset: 0, type: extensions.mojom.PortIdSpec, nullable: false },
        { name: 'tab_id', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'frame_id', packedOffset: 36, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'port', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.AssociatedInterfaceProxy, nullable: false },
        { name: 'port_host', packedOffset: 44, packedBitOffset: 0, type: mojo.internal.AssociatedInterfaceRequest, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
extensions.mojom.LocalFrameHostPtr = extensions.mojom.LocalFrameHostRemote;
extensions.mojom.LocalFrameHostRequest = extensions.mojom.LocalFrameHostPendingReceiver;

