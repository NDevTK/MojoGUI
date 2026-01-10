// Auto-generated MojoJS binding
// Source: chromium_src/extensions/common/mojom/frame.mojom
// Module: extensions.mojom

'use strict';

// Module namespace
var extensions = extensions || {};
extensions.mojom = extensions.mojom || {};
var ui = ui || {};
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
      mojo.internal.StructField('host_id', 16, 0, extensions.mojom.HostIDSpec, null, false, 0, undefined),
      mojo.internal.StructField('injection', 0, 0, extensions.mojom.CodeInjectionSpec, null, false, 0, undefined),
      mojo.internal.StructField('webview_src', 24, 0, url.mojom.UrlSpec, null, false, 0, undefined),
      mojo.internal.StructField('match_origin_as_fallback_behavior', 32, 0, extensions.mojom.MatchOriginAsFallbackBehaviorSpec, null, false, 0, undefined),
      mojo.internal.StructField('run_at', 36, 0, extensions.mojom.RunLocationSpec, null, false, 0, undefined),
      mojo.internal.StructField('is_web_view', 40, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 56]]);

// Struct: RequestParams
mojo.internal.Struct(
    extensions.mojom.RequestParamsSpec, 'extensions.mojom.RequestParams', [
      mojo.internal.StructField('name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arguments', 8, 0, mojo_base.mojom.ListValueSpec, null, false, 0, undefined),
      mojo.internal.StructField('extension_id', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('source_url', 24, 0, url.mojom.UrlSpec, null, false, 0, undefined),
      mojo.internal.StructField('context_type', 48, 0, extensions.mojom.ContextTypeSpec, null, false, 0, undefined),
      mojo.internal.StructField('request_id', 52, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('has_callback', 60, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('user_gesture', 60, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('worker_thread_id', 56, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('service_worker_version_id', 32, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('js_callstack', 40, 0, mojo.internal.Array(extensions.mojom.StackFrameSpec, false), null, true, 0, undefined),
    ],
    [[0, 72]]);

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
      mojo.internal.StructField('view_type', 0, 0, extensions.mojom.ViewTypeSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    extensions.mojom.LocalFrame_MessageInvoke_ParamsSpec, 'extensions.mojom.LocalFrame_MessageInvoke_Params', [
      mojo.internal.StructField('extension_id', 0, 0, extensions.mojom.ExtensionIdSpec, null, false, 0, undefined),
      mojo.internal.StructField('module_name', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('function_name', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('args', 24, 0, mojo_base.mojom.ListValueSpec, null, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    extensions.mojom.LocalFrame_ExecuteCode_ParamsSpec, 'extensions.mojom.LocalFrame_ExecuteCode_Params', [
      mojo.internal.StructField('param', 0, 0, extensions.mojom.ExecuteCodeParamsSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    extensions.mojom.LocalFrame_ExecuteCode_ResponseParamsSpec, 'extensions.mojom.LocalFrame_ExecuteCode_ResponseParams', [
      mojo.internal.StructField('error', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('url', 24, 0, url.mojom.UrlSpec, null, false, 0, undefined),
      mojo.internal.StructField('result', 0, 0, mojo_base.mojom.ValueSpec, null, true, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    extensions.mojom.LocalFrame_ExecuteDeclarativeScript_ParamsSpec, 'extensions.mojom.LocalFrame_ExecuteDeclarativeScript_Params', [
      mojo.internal.StructField('tab_id', 24, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('extension_id', 0, 0, extensions.mojom.ExtensionIdSpec, null, false, 0, undefined),
      mojo.internal.StructField('script_id', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('url', 16, 0, url.mojom.UrlSpec, null, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    extensions.mojom.LocalFrame_UpdateBrowserWindowId_ParamsSpec, 'extensions.mojom.LocalFrame_UpdateBrowserWindowId_Params', [
      mojo.internal.StructField('window_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    extensions.mojom.LocalFrame_DispatchOnConnect_ParamsSpec, 'extensions.mojom.LocalFrame_DispatchOnConnect_Params', [
      mojo.internal.StructField('port_id', 0, 0, extensions.mojom.PortIdSpec, null, false, 0, undefined),
      mojo.internal.StructField('channel_type', 48, 0, extensions.mojom.ChannelTypeSpec, null, false, 0, undefined),
      mojo.internal.StructField('channel_name', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('tab_info', 16, 0, extensions.mojom.TabConnectionInfoSpec, null, false, 0, undefined),
      mojo.internal.StructField('external_connection_info', 24, 0, extensions.mojom.ExternalConnectionInfoSpec, null, false, 0, undefined),
      mojo.internal.StructField('port', 32, 0, mojo.internal.AssociatedInterfaceRequest(extensions.mojom.MessagePortRemote), null, false, 0, undefined),
      mojo.internal.StructField('port_host', 40, 0, mojo.internal.AssociatedInterfaceProxy(extensions.mojom.MessagePortHostRemote), null, false, 0, undefined),
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

extensions.mojom.LocalFramePtr = extensions.mojom.LocalFrameRemote;
extensions.mojom.LocalFrameRequest = extensions.mojom.LocalFramePendingReceiver;


// Interface: LocalFrameHost
mojo.internal.Struct(
    extensions.mojom.LocalFrameHost_RequestScriptInjectionPermission_ParamsSpec, 'extensions.mojom.LocalFrameHost_RequestScriptInjectionPermission_Params', [
      mojo.internal.StructField('extension_id', 0, 0, extensions.mojom.ExtensionIdSpec, null, false, 0, undefined),
      mojo.internal.StructField('script_type', 8, 0, extensions.mojom.InjectionTypeSpec, null, false, 0, undefined),
      mojo.internal.StructField('run_location', 12, 0, extensions.mojom.RunLocationSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    extensions.mojom.LocalFrameHost_RequestScriptInjectionPermission_ResponseParamsSpec, 'extensions.mojom.LocalFrameHost_RequestScriptInjectionPermission_ResponseParams', [
      mojo.internal.StructField('granted', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    extensions.mojom.LocalFrameHost_GetAppInstallState_ParamsSpec, 'extensions.mojom.LocalFrameHost_GetAppInstallState_Params', [
      mojo.internal.StructField('url', 0, 0, url.mojom.UrlSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    extensions.mojom.LocalFrameHost_GetAppInstallState_ResponseParamsSpec, 'extensions.mojom.LocalFrameHost_GetAppInstallState_ResponseParams', [
      mojo.internal.StructField('state', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    extensions.mojom.LocalFrameHost_Request_ParamsSpec, 'extensions.mojom.LocalFrameHost_Request_Params', [
      mojo.internal.StructField('params', 0, 0, extensions.mojom.RequestParamsSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    extensions.mojom.LocalFrameHost_Request_ResponseParamsSpec, 'extensions.mojom.LocalFrameHost_Request_ResponseParams', [
      mojo.internal.StructField('success', 24, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('response_wrapper', 0, 0, mojo_base.mojom.ListValueSpec, null, false, 0, undefined),
      mojo.internal.StructField('error', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('extra_data', 16, 0, extensions.mojom.ExtraResponseDataSpec, null, true, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    extensions.mojom.LocalFrameHost_ResponseAck_ParamsSpec, 'extensions.mojom.LocalFrameHost_ResponseAck_Params', [
      mojo.internal.StructField('request_uuid', 0, 0, mojo_base.mojom.UuidSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    extensions.mojom.LocalFrameHost_WatchedPageChange_ParamsSpec, 'extensions.mojom.LocalFrameHost_WatchedPageChange_Params', [
      mojo.internal.StructField('css_selectors', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    extensions.mojom.LocalFrameHost_DetailedConsoleMessageAdded_ParamsSpec, 'extensions.mojom.LocalFrameHost_DetailedConsoleMessageAdded_Params', [
      mojo.internal.StructField('message', 0, 0, mojo_base.mojom.String16Spec, null, false, 0, undefined),
      mojo.internal.StructField('source', 8, 0, mojo_base.mojom.String16Spec, null, false, 0, undefined),
      mojo.internal.StructField('stack_trace', 16, 0, mojo.internal.Array(extensions.mojom.StackFrameSpec, false), null, false, 0, undefined),
      mojo.internal.StructField('level', 24, 0, blink.mojom.ConsoleMessageLevelSpec, null, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    extensions.mojom.LocalFrameHost_ContentScriptsExecuting_ParamsSpec, 'extensions.mojom.LocalFrameHost_ContentScriptsExecuting_Params', [
      mojo.internal.StructField('extension_id_to_scripts', 0, 0, mojo.internal.Map(mojo.internal.String, mojo.internal.Array(mojo.internal.String, false), false), null, false, 0, undefined),
      mojo.internal.StructField('frame_url', 8, 0, url.mojom.UrlSpec, null, false, 0, undefined),
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
      mojo.internal.StructField('info', 0, 0, extensions.mojom.ExternalConnectionInfoSpec, null, false, 0, undefined),
      mojo.internal.StructField('channel_type', 40, 0, extensions.mojom.ChannelTypeSpec, null, false, 0, undefined),
      mojo.internal.StructField('channel_name', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('port_id', 16, 0, extensions.mojom.PortIdSpec, null, false, 0, undefined),
      mojo.internal.StructField('port', 24, 0, mojo.internal.AssociatedInterfaceProxy(extensions.mojom.MessagePortRemote), null, false, 0, undefined),
      mojo.internal.StructField('port_host', 32, 0, mojo.internal.AssociatedInterfaceRequest(extensions.mojom.MessagePortHostRemote), null, false, 0, undefined),
    ],
    [[0, 56]]);

mojo.internal.Struct(
    extensions.mojom.LocalFrameHost_OpenChannelToNativeApp_ParamsSpec, 'extensions.mojom.LocalFrameHost_OpenChannelToNativeApp_Params', [
      mojo.internal.StructField('native_app_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('port_id', 8, 0, extensions.mojom.PortIdSpec, null, false, 0, undefined),
      mojo.internal.StructField('port', 16, 0, mojo.internal.AssociatedInterfaceProxy(extensions.mojom.MessagePortRemote), null, false, 0, undefined),
      mojo.internal.StructField('port_host', 24, 0, mojo.internal.AssociatedInterfaceRequest(extensions.mojom.MessagePortHostRemote), null, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    extensions.mojom.LocalFrameHost_OpenChannelToTab_ParamsSpec, 'extensions.mojom.LocalFrameHost_OpenChannelToTab_Params', [
      mojo.internal.StructField('tab_id', 40, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('frame_id', 44, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('document_id', 0, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('channel_type', 48, 0, extensions.mojom.ChannelTypeSpec, null, false, 0, undefined),
      mojo.internal.StructField('channel_name', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('port_id', 16, 0, extensions.mojom.PortIdSpec, null, false, 0, undefined),
      mojo.internal.StructField('port', 24, 0, mojo.internal.AssociatedInterfaceProxy(extensions.mojom.MessagePortRemote), null, false, 0, undefined),
      mojo.internal.StructField('port_host', 32, 0, mojo.internal.AssociatedInterfaceRequest(extensions.mojom.MessagePortHostRemote), null, false, 0, undefined),
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

extensions.mojom.LocalFrameHostPtr = extensions.mojom.LocalFrameHostRemote;
extensions.mojom.LocalFrameHostRequest = extensions.mojom.LocalFrameHostPendingReceiver;

