// Auto-generated MojoJS binding
// Source: chromium_src/extensions/common/mojom/frame.mojom
// Module: extensions.mojom

'use strict';

// Module namespace
var extensions = extensions || {};
extensions.mojom = extensions.mojom || {};


// Struct: ExecuteCodeParams
extensions.mojom.ExecuteCodeParams = class {
  constructor(values = {}) {
    this.is_web_view = values.is_web_view !== undefined ? values.is_web_view : false;
  }
};

// Struct: RequestParams
extensions.mojom.RequestParams = class {
  constructor(values = {}) {
    this.arguments = values.arguments !== undefined ? values.arguments : "";
    this.extension_id = values.extension_id !== undefined ? values.extension_id : "";
    this.source_url = values.source_url !== undefined ? values.source_url : null;
    this.user_gesture = values.user_gesture !== undefined ? values.user_gesture : 0;
    this.thread = values.thread !== undefined ? values.thread : null;
    this.worker_thread_id = values.worker_thread_id !== undefined ? values.worker_thread_id : 0;
    this.service = values.service !== undefined ? values.service : null;
    this.service_worker_version_id = values.service_worker_version_id !== undefined ? values.service_worker_version_id : 0;
    this.js_callstack = values.js_callstack !== undefined ? values.js_callstack : [];
  }
};

// Interface: LocalFrame
extensions.mojom.LocalFramePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'extensions.mojom.LocalFrame';
  }

  setFrameName(frame_name) {
    // Method: SetFrameName
    // Call: SetFrameName(frame_name)
  }

  setSpatialNavigationEnabled(spatial_nav_enabled) {
    // Method: SetSpatialNavigationEnabled
    // Call: SetSpatialNavigationEnabled(spatial_nav_enabled)
  }

  setTabId(tab_id) {
    // Method: SetTabId
    // Call: SetTabId(tab_id)
  }

  appWindowClosed(send_onclosed) {
    // Method: AppWindowClosed
    // Call: AppWindowClosed(send_onclosed)
  }

  notifyRenderViewType(view_type) {
    // Method: NotifyRenderViewType
    // Call: NotifyRenderViewType(view_type)
  }

  messageInvoke(extension_id, module_name, function_name, args) {
    // Method: MessageInvoke
    // Call: MessageInvoke(extension_id, module_name, function_name, args)
  }

  result(error) {
    // Method: result
    // Call: result(error)
  }

  executeCode(param) {
    // Method: ExecuteCode
    return new Promise((resolve) => {
      // Call: ExecuteCode(param)
      resolve({});
    });
  }

  executeDeclarativeScript(tab_id, extension_id, script_id, url) {
    // Method: ExecuteDeclarativeScript
    // Call: ExecuteDeclarativeScript(tab_id, extension_id, script_id, url)
  }

  updateBrowserWindowId(window_id) {
    // Method: UpdateBrowserWindowId
    // Call: UpdateBrowserWindowId(window_id)
  }

  dispatchOnConnect(port_id, channel_type, channel_name, tab_info, external_connection_info, port, port_host) {
    // Method: DispatchOnConnect
    return new Promise((resolve) => {
      // Call: DispatchOnConnect(port_id, channel_type, channel_name, tab_info, external_connection_info, port, port_host)
      resolve({});
    });
  }

};

extensions.mojom.LocalFrameRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: LocalFrameHost
extensions.mojom.LocalFrameHostPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'extensions.mojom.LocalFrameHost';
  }

  requestScriptInjectionPermission(extension_id, script_type, run_location) {
    // Method: RequestScriptInjectionPermission
    return new Promise((resolve) => {
      // Call: RequestScriptInjectionPermission(extension_id, script_type, run_location)
      resolve({});
    });
  }

  getAppInstallState(url) {
    // Method: GetAppInstallState
    return new Promise((resolve) => {
      // Call: GetAppInstallState(url)
      resolve({});
    });
  }

  data(any) {
    // Method: data
    // Call: data(any)
  }

  request(params) {
    // Method: Request
    return new Promise((resolve) => {
      // Call: Request(params)
      resolve({});
    });
  }

  functions(to) {
    // Method: functions
    // Call: functions(to)
  }

  responseAck(request_uuid) {
    // Method: ResponseAck
    // Call: ResponseAck(request_uuid)
  }

  watchedPageChange(css_selectors) {
    // Method: WatchedPageChange
    // Call: WatchedPageChange(css_selectors)
  }

  detailedConsoleMessageAdded(message, source, stack_trace, level) {
    // Method: DetailedConsoleMessageAdded
    // Call: DetailedConsoleMessageAdded(message, source, stack_trace, level)
  }

  contentScriptsExecuting(extension_id_to_scripts, frame_url) {
    // Method: ContentScriptsExecuting
    // Call: ContentScriptsExecuting(extension_id_to_scripts, frame_url)
  }

  incrementLazyKeepaliveCount() {
    // Method: IncrementLazyKeepaliveCount
    // Call: IncrementLazyKeepaliveCount()
  }

  decrementLazyKeepaliveCount() {
    // Method: DecrementLazyKeepaliveCount
    // Call: DecrementLazyKeepaliveCount()
  }

  appWindowReady() {
    // Method: AppWindowReady
    // Call: AppWindowReady()
  }

  openChannelToExtension(info, channel_type, channel_name, port_id, port, port_host) {
    // Method: OpenChannelToExtension
    // Call: OpenChannelToExtension(info, channel_type, channel_name, port_id, port, port_host)
  }

  openChannelToNativeApp(native_app_name, port_id, port, port_host) {
    // Method: OpenChannelToNativeApp
    // Call: OpenChannelToNativeApp(native_app_name, port_id, port, port_host)
  }

  openChannelToTab(tab_id, frame_id, document_id, channel_type, channel_name, port_id, port, port_host) {
    // Method: OpenChannelToTab
    // Call: OpenChannelToTab(tab_id, frame_id, document_id, channel_type, channel_name, port_id, port, port_host)
  }

};

extensions.mojom.LocalFrameHostRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
