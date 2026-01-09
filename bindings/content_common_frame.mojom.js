// Auto-generated MojoJS binding
// Source: chromium_src/content/common/frame.mojom
// Module: content.mojom

'use strict';

// Module namespace
var content = content || {};
content.mojom = content.mojom || {};


// Enum: ViewWidgetType
content.mojom.ViewWidgetType = {
};

// Enum: ChildFrameOwnerElementType
content.mojom.ChildFrameOwnerElementType = {
  kIframe: 0,
  kObject: 1,
  kEmbed: 2,
  kFrame: 3,
};

// Enum: FrameDeleteIntention
content.mojom.FrameDeleteIntention = {
  and: 0,
  and: 1,
};

// Enum: CreateNewWindowStatus
content.mojom.CreateNewWindowStatus = {
  e: 0,
  e: 1,
};

// Struct: CreateViewParams
content.mojom.CreateViewParams = class {
  constructor(values = {}) {
    this.session_storage_namespace_id = values.session_storage_namespace_id !== undefined ? values.session_storage_namespace_id : "";
    this.opener_frame_token = values.opener_frame_token !== undefined ? values.opener_frame_token : null;
    this.replication_state = values.replication_state !== undefined ? values.replication_state : null;
    this.for = values.for !== undefined ? values.for : null;
    this.context = values.context !== undefined ? values.context : null;
    this.shared = values.shared !== undefined ? values.shared : null;
    this.prerender_param = values.prerender_param !== undefined ? values.prerender_param : false;
    this.be = values.be !== undefined ? values.be : null;
    this.composited = values.composited !== undefined ? values.composited : null;
    this.type = values.type !== undefined ? values.type : false;
    this.fenced = values.fenced !== undefined ? values.fenced : null;
    this.fenced_frame_mode = values.fenced_frame_mode !== undefined ? values.fenced_frame_mode : null;
    this.outermost = values.outermost !== undefined ? values.outermost : null;
    this.attribution_support = values.attribution_support !== undefined ? values.attribution_support : {};
    this.0 = values.0 !== undefined ? values.0 : 0;
  }
};

// Struct: CreateLocalMainFrameParams
content.mojom.CreateLocalMainFrameParams = class {
  constructor(values = {}) {
    this.true = values.true !== undefined ? values.true : 0;
    this.document_token = values.document_token !== undefined ? values.document_token : null;
    this.subresource_loader_factories = values.subresource_loader_factories !== undefined ? values.subresource_loader_factories : null;
  }
};

// Struct: CreateProvisionalLocalMainFrameParams
content.mojom.CreateProvisionalLocalMainFrameParams = class {
  constructor(values = {}) {
    this.local_params = values.local_params !== undefined ? values.local_params : null;
    this.previous_frame_token = values.previous_frame_token !== undefined ? values.previous_frame_token : null;
  }
};

// Struct: CreateRemoteMainFrameParams
content.mojom.CreateRemoteMainFrameParams = class {
  constructor(values = {}) {
    this.main_frame_interfaces = values.main_frame_interfaces !== undefined ? values.main_frame_interfaces : 0;
  }
};

// Struct: CreateFrameWidgetParams
content.mojom.CreateFrameWidgetParams = class {
  constructor(values = {}) {
    this.visual_properties = values.visual_properties !== undefined ? values.visual_properties : 0;
  }
};

// Struct: CreateFrameParams
content.mojom.CreateFrameParams = class {
  constructor(values = {}) {
    this.routing_id = values.routing_id !== undefined ? values.routing_id : 0;
    this.parent_frame_token = values.parent_frame_token !== undefined ? values.parent_frame_token : null;
    this.is = values.is !== undefined ? values.is : null;
    this.tree_scope_type = values.tree_scope_type !== undefined ? values.tree_scope_type : 0;
    this.frame's = values.frame's !== undefined ? values.frame's : null;
    this.devtools_frame_token = values.devtools_frame_token !== undefined ? values.devtools_frame_token : null;
    this.the = values.the !== undefined ? values.the : null;
    this.true = values.true !== undefined ? values.true : false;
    this.document_token = values.document_token !== undefined ? values.document_token : null;
    this.a = values.a !== undefined ? values.a : null;
    this.is_for_nested_main_frame = values.is_for_nested_main_frame !== undefined ? values.is_for_nested_main_frame : 0;
    this.navigation_metrics_token = values.navigation_metrics_token !== undefined ? values.navigation_metrics_token : null;
  }
};

// Struct: SnapshotAccessibilityTreeParams
content.mojom.SnapshotAccessibilityTreeParams = class {
  constructor(values = {}) {
    this.max_nodes = values.max_nodes !== undefined ? values.max_nodes : 0;
    this.limit = values.limit !== undefined ? values.limit : null;
    this.timeout = values.timeout !== undefined ? values.timeout : null;
  }
};

// Struct: CreateNewWindowParams
content.mojom.CreateNewWindowParams = class {
  constructor(values = {}) {
    this.session_storage_namespace_id = values.session_storage_namespace_id !== undefined ? values.session_storage_namespace_id : false;
    this.frame_name = values.frame_name !== undefined ? values.frame_name : "";
    this.form_submission_post_content_type = values.form_submission_post_content_type !== undefined ? values.form_submission_post_content_type : false;
    this.features = values.features !== undefined ? values.features : null;
    this.frame_widget = values.frame_widget !== undefined ? values.frame_widget : 0;
  }
};

// Struct: CreateNewWindowReply
content.mojom.CreateNewWindowReply = class {
  constructor(values = {}) {
    this.cloned_session_storage_namespace_id = values.cloned_session_storage_namespace_id !== undefined ? values.cloned_session_storage_namespace_id : 0;
    this.for = values.for !== undefined ? values.for : null;
    this.context = values.context !== undefined ? values.context : null;
    this.shared = values.shared !== undefined ? values.shared : null;
    this.window_screen_rect = values.window_screen_rect !== undefined ? values.window_screen_rect : false;
  }
};

// Interface: FrameHTMLSerializerHandler
content.mojom.FrameHTMLSerializerHandlerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'content.mojom.FrameHTMLSerializerHandler';
  }

  getSerializedHtmlWithLocalLinks() {
    // Method: GetSerializedHtmlWithLocalLinks
    // Call: GetSerializedHtmlWithLocalLinks()
  }

  didReceiveData(data_buffer) {
    // Method: DidReceiveData
    // Call: DidReceiveData(data_buffer)
  }

  didReceiveData() {
    // Method: DidReceiveData
    // Call: DidReceiveData()
  }

  done() {
    // Method: Done
    // Call: Done()
  }

};

content.mojom.FrameHTMLSerializerHandlerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: Frame
content.mojom.FramePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'content.mojom.Frame';
  }

  commitSameDocumentNavigation(common_params, request_params) {
    // Method: CommitSameDocumentNavigation
    return new Promise((resolve) => {
      // Call: CommitSameDocumentNavigation(common_params, request_params)
      resolve({});
    });
  }

  updateSubresourceLoaderFactories(subresource_loader_factories) {
    // Method: UpdateSubresourceLoaderFactories
    // Call: UpdateSubresourceLoaderFactories(subresource_loader_factories)
  }

  host() {
    // Method: host
    // Call: host()
  }

  didAddMessageToConsole() {
    // Method: DidAddMessageToConsole
    // Call: DidAddMessageToConsole()
  }

  setWantErrorMessageStackTrace() {
    // Method: SetWantErrorMessageStackTrace
    // Call: SetWantErrorMessageStackTrace()
  }

  detached(the) {
    // Method: detached
    // Call: detached(the)
  }

  postMessage() {
    // Method: postMessage
    // Call: postMessage()
  }

  guest(main) {
    // Method: guest
    // Call: guest(main)
  }

  unload(is_loading, new_remote_frame_replication_state, new_remote_frame_token, new_remote_frame_interfaces, new_remote_main_frame_interfaces, devtools_frame_token) {
    // Method: Unload
    // Call: Unload(is_loading, new_remote_frame_replication_state, new_remote_frame_token, new_remote_frame_interfaces, new_remote_main_frame_interfaces, devtools_frame_token)
  }

  delete(intention) {
    // Method: Delete
    // Call: Delete(intention)
  }

  commitNavigation() {
    // Method: CommitNavigation
    // Call: CommitNavigation()
  }

  commitNavigation() {
    // Method: CommitNavigation
    // Call: CommitNavigation()
  }

  commitNavigation() {
    // Method: CommitNavigation
    // Call: CommitNavigation()
  }

  didCommitNavigation() {
    // Method: DidCommitNavigation
    // Call: DidCommitNavigation()
  }

  unload() {
    // Method: Unload
    // Call: Unload()
  }

  postMessage() {
    // Method: postMessage
    // Call: postMessage()
  }

  tODO() {
    // Method: TODO
    // Call: TODO()
  }

  undoCommitNavigation(is_loading, new_remote_frame_replication_state, new_remote_frame_token, new_remote_frame_interfaces, new_remote_main_frame_interfaces) {
    // Method: UndoCommitNavigation
    // Call: UndoCommitNavigation(is_loading, new_remote_frame_replication_state, new_remote_frame_token, new_remote_frame_interfaces, new_remote_main_frame_interfaces)
  }

  getInterfaceProvider(interfaces) {
    // Method: GetInterfaceProvider
    // Call: GetInterfaceProvider(interfaces)
  }

  snapshotAccessibilityTree(params) {
    // Method: SnapshotAccessibilityTree
    return new Promise((resolve) => {
      // Call: SnapshotAccessibilityTree(params)
      resolve({});
    });
  }

  getSerializedHtmlWithLocalLinks(url_map, frame_token_map, save_with_empty_url, handler_remote) {
    // Method: GetSerializedHtmlWithLocalLinks
    // Call: GetSerializedHtmlWithLocalLinks(url_map, frame_token_map, save_with_empty_url, handler_remote)
  }

};

content.mojom.FrameRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: FrameBindingsControl
content.mojom.FrameBindingsControlPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'content.mojom.FrameBindingsControl';
  }

  allowBindings(enabled_bindings_flags) {
    // Method: AllowBindings
    // Call: AllowBindings(enabled_bindings_flags)
  }

  enableMojoJsBindings(features) {
    // Method: EnableMojoJsBindings
    // Call: EnableMojoJsBindings(features)
  }

  enableMojoJsBindingsWithBroker(broker) {
    // Method: EnableMojoJsBindingsWithBroker
    // Call: EnableMojoJsBindingsWithBroker(broker)
  }

  bindWebUI(receiver, remote) {
    // Method: BindWebUI
    // Call: BindWebUI(receiver, remote)
  }

};

content.mojom.FrameBindingsControlRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: NavigationRendererCancellationListener
content.mojom.NavigationRendererCancellationListenerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'content.mojom.NavigationRendererCancellationListener';
  }

  script(window.stop() {
    // Method: script
    // Call: script(window.stop()
  }

  open() {
    // Method: open
    // Call: open()
  }

  rendererCancellationWindowEnded() {
    // Method: RendererCancellationWindowEnded
    // Call: RendererCancellationWindowEnded()
  }

};

content.mojom.NavigationRendererCancellationListenerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: FrameHost
content.mojom.FrameHostPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'content.mojom.FrameHost';
  }

  createNewWindow(params) {
    // Method: CreateNewWindow
    return new Promise((resolve) => {
      // Call: CreateNewWindow(params)
      resolve({});
    });
  }

  createChildFrame(child_frame_token, frame, browser_interface_broker, policy_container_bind_params, associated_interface_provider, scope, frame_name, frame_unique_name, is_created_by_script, frame_policy, frame_owner_properties, child_frame_owner_element_type, document_ukm_source_id) {
    // Method: CreateChildFrame
    // Call: CreateChildFrame(child_frame_token, frame, browser_interface_broker, policy_container_bind_params, associated_interface_provider, scope, frame_name, frame_unique_name, is_created_by_script, frame_policy, frame_owner_properties, child_frame_owner_element_type, document_ukm_source_id)
  }

  from(BrowserInterfaceBroker) {
    // Method: from
    // Call: from(BrowserInterfaceBroker)
  }

  didCommitProvisionalLoad(params, interface_params) {
    // Method: DidCommitProvisionalLoad
    // Call: DidCommitProvisionalLoad(params, interface_params)
  }

  didCommitSameDocumentNavigation(params, same_document_params) {
    // Method: DidCommitSameDocumentNavigation
    // Call: DidCommitSameDocumentNavigation(params, same_document_params)
  }

  open() {
    // Method: open
    // Call: open()
  }

  didOpenDocumentInputStream(url) {
    // Method: DidOpenDocumentInputStream
    // Call: DidOpenDocumentInputStream(url)
  }

  tODO() {
    // Method: TODO
    // Call: TODO()
  }

  beginNavigation(common_params, begin_params, blob_url_token, navigation_client, initiator_navigation_state_keep_alive_handle, renderer_cancellation_listener) {
    // Method: BeginNavigation
    // Call: BeginNavigation(common_params, begin_params, blob_url_token, navigation_client, initiator_navigation_state_keep_alive_handle, renderer_cancellation_listener)
  }

  final(redirects) {
    // Method: final
    // Call: final(redirects)
  }

  subresourceResponseStarted(final_response_url, cert_status) {
    // Method: SubresourceResponseStarted
    // Call: SubresourceResponseStarted(final_response_url, cert_status)
  }

  resourceLoadComplete(url_load_info) {
    // Method: ResourceLoadComplete
    // Call: ResourceLoadComplete(url_load_info)
  }

  didChangeName(name, unique_name) {
    // Method: DidChangeName
    // Call: DidChangeName(name, unique_name)
  }

  cancelInitialHistoryLoad() {
    // Method: CancelInitialHistoryLoad
    // Call: CancelInitialHistoryLoad()
  }

  updateEncoding(encoding_name) {
    // Method: UpdateEncoding
    // Call: UpdateEncoding(encoding_name)
  }

  updateUserGestureCarryoverInfo() {
    // Method: UpdateUserGestureCarryoverInfo
    // Call: UpdateUserGestureCarryoverInfo()
  }

  updateState(state) {
    // Method: UpdateState
    // Call: UpdateState(state)
  }

  openURL(params) {
    // Method: OpenURL
    // Call: OpenURL(params)
  }

  didStopLoading() {
    // Method: DidStopLoading
    // Call: DidStopLoading()
  }

};

content.mojom.FrameHostRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
