// Auto-generated MojoJS binding
// Source: chromium_src/content/common/frame.mojom
// Module: content.mojom

'use strict';

// Module namespace
var content = content || {};
content.mojom = content.mojom || {};


// Enum: ViewWidgetType
content.mojom.ViewWidgetType = {
  kTopLevel: 0,
  kGuestView: 1,
  kFencedFrame: 2,
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
  kNotMainFrame: 0,
  kSpeculativeMainFrameForShutdown: 1,
  kSpeculativeMainFrameForNavigationCancelled: 2,
};

// Enum: CreateNewWindowStatus
content.mojom.CreateNewWindowStatus = {
  kBlocked: 0,
  kIgnore: 1,
  kReuse: 2,
  kSuccess: 3,
};

// Interface: FrameHTMLSerializerHandler
content.mojom.FrameHTMLSerializerHandler = {};

content.mojom.FrameHTMLSerializerHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

content.mojom.FrameHTMLSerializerHandlerRemote = class {
  static get $interfaceName() {
    return 'content.mojom.FrameHTMLSerializerHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      content.mojom.FrameHTMLSerializerHandlerPendingReceiver,
      handle);
    this.$ = new content.mojom.FrameHTMLSerializerHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

content.mojom.FrameHTMLSerializerHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  didReceiveData(data_buffer) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      content.mojom.FrameHTMLSerializerHandler_DidReceiveData_ParamsSpec.$,
      null,
      [data_buffer]);
  }

  done() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      content.mojom.FrameHTMLSerializerHandler_Done_ParamsSpec.$,
      null,
      []);
  }

};

content.mojom.FrameHTMLSerializerHandler.getRemote = function() {
  let remote = new content.mojom.FrameHTMLSerializerHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'content.mojom.FrameHTMLSerializerHandler',
    'context');
  return remote.$;
};

// ParamsSpec for DidReceiveData
content.mojom.FrameHTMLSerializerHandler_DidReceiveData_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.FrameHTMLSerializerHandler.DidReceiveData_Params',
      packedSize: 16,
      fields: [
        { name: 'data_buffer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for Done
content.mojom.FrameHTMLSerializerHandler_Done_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.FrameHTMLSerializerHandler.Done_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
content.mojom.FrameHTMLSerializerHandlerPtr = content.mojom.FrameHTMLSerializerHandlerRemote;
content.mojom.FrameHTMLSerializerHandlerRequest = content.mojom.FrameHTMLSerializerHandlerPendingReceiver;


// Interface: Frame
content.mojom.Frame = {};

content.mojom.FramePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

content.mojom.FrameRemote = class {
  static get $interfaceName() {
    return 'content.mojom.Frame';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      content.mojom.FramePendingReceiver,
      handle);
    this.$ = new content.mojom.FrameRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

content.mojom.FrameRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  commitSameDocumentNavigation(common_params, request_params) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      content.mojom.Frame_CommitSameDocumentNavigation_ParamsSpec.$,
      content.mojom.Frame_CommitSameDocumentNavigation_ResponseParamsSpec.$,
      [common_params, request_params]);
  }

  updateSubresourceLoaderFactories(subresource_loader_factories) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      content.mojom.Frame_UpdateSubresourceLoaderFactories_ParamsSpec.$,
      null,
      [subresource_loader_factories]);
  }

  setWantErrorMessageStackTrace() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      content.mojom.Frame_SetWantErrorMessageStackTrace_ParamsSpec.$,
      null,
      []);
  }

  unload(is_loading, new_remote_frame_replication_state, new_remote_frame_token, new_remote_frame_interfaces, new_remote_main_frame_interfaces, devtools_frame_token) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      content.mojom.Frame_Unload_ParamsSpec.$,
      null,
      [is_loading, new_remote_frame_replication_state, new_remote_frame_token, new_remote_frame_interfaces, new_remote_main_frame_interfaces, devtools_frame_token]);
  }

  delete(intention) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      content.mojom.Frame_Delete_ParamsSpec.$,
      null,
      [intention]);
  }

  undoCommitNavigation(is_loading, new_remote_frame_replication_state, new_remote_frame_token, new_remote_frame_interfaces, new_remote_main_frame_interfaces) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      content.mojom.Frame_UndoCommitNavigation_ParamsSpec.$,
      null,
      [is_loading, new_remote_frame_replication_state, new_remote_frame_token, new_remote_frame_interfaces, new_remote_main_frame_interfaces]);
  }

  getInterfaceProvider(interfaces) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      content.mojom.Frame_GetInterfaceProvider_ParamsSpec.$,
      null,
      [interfaces]);
  }

  snapshotAccessibilityTree(params) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      content.mojom.Frame_SnapshotAccessibilityTree_ParamsSpec.$,
      content.mojom.Frame_SnapshotAccessibilityTree_ResponseParamsSpec.$,
      [params]);
  }

  getSerializedHtmlWithLocalLinks(url_map, frame_token_map, save_with_empty_url, handler_remote) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      content.mojom.Frame_GetSerializedHtmlWithLocalLinks_ParamsSpec.$,
      null,
      [url_map, frame_token_map, save_with_empty_url, handler_remote]);
  }

};

content.mojom.Frame.getRemote = function() {
  let remote = new content.mojom.FrameRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'content.mojom.Frame',
    'context');
  return remote.$;
};

// ParamsSpec for CommitSameDocumentNavigation
content.mojom.Frame_CommitSameDocumentNavigation_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.Frame.CommitSameDocumentNavigation_Params',
      packedSize: 24,
      fields: [
        { name: 'common_params', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'request_params', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

content.mojom.Frame_CommitSameDocumentNavigation_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.Frame.CommitSameDocumentNavigation_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'commit_result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for UpdateSubresourceLoaderFactories
content.mojom.Frame_UpdateSubresourceLoaderFactories_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.Frame.UpdateSubresourceLoaderFactories_Params',
      packedSize: 16,
      fields: [
        { name: 'subresource_loader_factories', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetWantErrorMessageStackTrace
content.mojom.Frame_SetWantErrorMessageStackTrace_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.Frame.SetWantErrorMessageStackTrace_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for Unload
content.mojom.Frame_Unload_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.Frame.Unload_Params',
      packedSize: 56,
      fields: [
        { name: 'is_loading', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'new_remote_frame_replication_state', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'new_remote_frame_token', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'new_remote_frame_interfaces', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'new_remote_main_frame_interfaces', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'devtools_frame_token', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for Delete
content.mojom.Frame_Delete_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.Frame.Delete_Params',
      packedSize: 16,
      fields: [
        { name: 'intention', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for UndoCommitNavigation
content.mojom.Frame_UndoCommitNavigation_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.Frame.UndoCommitNavigation_Params',
      packedSize: 48,
      fields: [
        { name: 'is_loading', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'new_remote_frame_replication_state', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'new_remote_frame_token', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'new_remote_frame_interfaces', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'new_remote_main_frame_interfaces', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetInterfaceProvider
content.mojom.Frame_GetInterfaceProvider_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.Frame.GetInterfaceProvider_Params',
      packedSize: 16,
      fields: [
        { name: 'interfaces', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SnapshotAccessibilityTree
content.mojom.Frame_SnapshotAccessibilityTree_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.Frame.SnapshotAccessibilityTree_Params',
      packedSize: 16,
      fields: [
        { name: 'params', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

content.mojom.Frame_SnapshotAccessibilityTree_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.Frame.SnapshotAccessibilityTree_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'snapshot', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetSerializedHtmlWithLocalLinks
content.mojom.Frame_GetSerializedHtmlWithLocalLinks_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.Frame.GetSerializedHtmlWithLocalLinks_Params',
      packedSize: 40,
      fields: [
        { name: 'url_map', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'frame_token_map', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'save_with_empty_url', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'handler_remote', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
content.mojom.FramePtr = content.mojom.FrameRemote;
content.mojom.FrameRequest = content.mojom.FramePendingReceiver;


// Interface: FrameBindingsControl
content.mojom.FrameBindingsControl = {};

content.mojom.FrameBindingsControlPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

content.mojom.FrameBindingsControlRemote = class {
  static get $interfaceName() {
    return 'content.mojom.FrameBindingsControl';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      content.mojom.FrameBindingsControlPendingReceiver,
      handle);
    this.$ = new content.mojom.FrameBindingsControlRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

content.mojom.FrameBindingsControlRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  allowBindings(enabled_bindings_flags) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      content.mojom.FrameBindingsControl_AllowBindings_ParamsSpec.$,
      null,
      [enabled_bindings_flags]);
  }

  enableMojoJsBindings(features) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      content.mojom.FrameBindingsControl_EnableMojoJsBindings_ParamsSpec.$,
      null,
      [features]);
  }

  enableMojoJsBindingsWithBroker(broker) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      content.mojom.FrameBindingsControl_EnableMojoJsBindingsWithBroker_ParamsSpec.$,
      null,
      [broker]);
  }

  bindWebUI(receiver, remote) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      content.mojom.FrameBindingsControl_BindWebUI_ParamsSpec.$,
      null,
      [receiver, remote]);
  }

};

content.mojom.FrameBindingsControl.getRemote = function() {
  let remote = new content.mojom.FrameBindingsControlRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'content.mojom.FrameBindingsControl',
    'context');
  return remote.$;
};

// ParamsSpec for AllowBindings
content.mojom.FrameBindingsControl_AllowBindings_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.FrameBindingsControl.AllowBindings_Params',
      packedSize: 16,
      fields: [
        { name: 'enabled_bindings_flags', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for EnableMojoJsBindings
content.mojom.FrameBindingsControl_EnableMojoJsBindings_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.FrameBindingsControl.EnableMojoJsBindings_Params',
      packedSize: 16,
      fields: [
        { name: 'features', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for EnableMojoJsBindingsWithBroker
content.mojom.FrameBindingsControl_EnableMojoJsBindingsWithBroker_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.FrameBindingsControl.EnableMojoJsBindingsWithBroker_Params',
      packedSize: 16,
      fields: [
        { name: 'broker', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for BindWebUI
content.mojom.FrameBindingsControl_BindWebUI_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.FrameBindingsControl.BindWebUI_Params',
      packedSize: 24,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'remote', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
content.mojom.FrameBindingsControlPtr = content.mojom.FrameBindingsControlRemote;
content.mojom.FrameBindingsControlRequest = content.mojom.FrameBindingsControlPendingReceiver;


// Interface: NavigationRendererCancellationListener
content.mojom.NavigationRendererCancellationListener = {};

content.mojom.NavigationRendererCancellationListenerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

content.mojom.NavigationRendererCancellationListenerRemote = class {
  static get $interfaceName() {
    return 'content.mojom.NavigationRendererCancellationListener';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      content.mojom.NavigationRendererCancellationListenerPendingReceiver,
      handle);
    this.$ = new content.mojom.NavigationRendererCancellationListenerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

content.mojom.NavigationRendererCancellationListenerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  rendererCancellationWindowEnded() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      content.mojom.NavigationRendererCancellationListener_RendererCancellationWindowEnded_ParamsSpec.$,
      null,
      []);
  }

};

content.mojom.NavigationRendererCancellationListener.getRemote = function() {
  let remote = new content.mojom.NavigationRendererCancellationListenerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'content.mojom.NavigationRendererCancellationListener',
    'context');
  return remote.$;
};

// ParamsSpec for RendererCancellationWindowEnded
content.mojom.NavigationRendererCancellationListener_RendererCancellationWindowEnded_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.NavigationRendererCancellationListener.RendererCancellationWindowEnded_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
content.mojom.NavigationRendererCancellationListenerPtr = content.mojom.NavigationRendererCancellationListenerRemote;
content.mojom.NavigationRendererCancellationListenerRequest = content.mojom.NavigationRendererCancellationListenerPendingReceiver;


// Interface: FrameHost
content.mojom.FrameHost = {};

content.mojom.FrameHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

content.mojom.FrameHostRemote = class {
  static get $interfaceName() {
    return 'content.mojom.FrameHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      content.mojom.FrameHostPendingReceiver,
      handle);
    this.$ = new content.mojom.FrameHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

content.mojom.FrameHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createNewWindow(params) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      content.mojom.FrameHost_CreateNewWindow_ParamsSpec.$,
      content.mojom.FrameHost_CreateNewWindow_ResponseParamsSpec.$,
      [params]);
  }

  createChildFrame(child_frame_token, frame, browser_interface_broker, policy_container_bind_params, associated_interface_provider, scope, frame_name, frame_unique_name, is_created_by_script, frame_policy, frame_owner_properties, child_frame_owner_element_type, document_ukm_source_id) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      content.mojom.FrameHost_CreateChildFrame_ParamsSpec.$,
      null,
      [child_frame_token, frame, browser_interface_broker, policy_container_bind_params, associated_interface_provider, scope, frame_name, frame_unique_name, is_created_by_script, frame_policy, frame_owner_properties, child_frame_owner_element_type, document_ukm_source_id]);
  }

  didCommitProvisionalLoad(params, interface_params) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      content.mojom.FrameHost_DidCommitProvisionalLoad_ParamsSpec.$,
      null,
      [params, interface_params]);
  }

  didCommitSameDocumentNavigation(params, same_document_params) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      content.mojom.FrameHost_DidCommitSameDocumentNavigation_ParamsSpec.$,
      null,
      [params, same_document_params]);
  }

  didOpenDocumentInputStream(url) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      content.mojom.FrameHost_DidOpenDocumentInputStream_ParamsSpec.$,
      null,
      [url]);
  }

  beginNavigation(common_params, begin_params, blob_url_token, navigation_client, initiator_navigation_state_keep_alive_handle, renderer_cancellation_listener) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      content.mojom.FrameHost_BeginNavigation_ParamsSpec.$,
      null,
      [common_params, begin_params, blob_url_token, navigation_client, initiator_navigation_state_keep_alive_handle, renderer_cancellation_listener]);
  }

  subresourceResponseStarted(final_response_url, cert_status) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      content.mojom.FrameHost_SubresourceResponseStarted_ParamsSpec.$,
      null,
      [final_response_url, cert_status]);
  }

  resourceLoadComplete(url_load_info) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      content.mojom.FrameHost_ResourceLoadComplete_ParamsSpec.$,
      null,
      [url_load_info]);
  }

  didChangeName(name, unique_name) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      content.mojom.FrameHost_DidChangeName_ParamsSpec.$,
      null,
      [name, unique_name]);
  }

  cancelInitialHistoryLoad() {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      content.mojom.FrameHost_CancelInitialHistoryLoad_ParamsSpec.$,
      null,
      []);
  }

  updateEncoding(encoding_name) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      content.mojom.FrameHost_UpdateEncoding_ParamsSpec.$,
      null,
      [encoding_name]);
  }

  updateUserGestureCarryoverInfo() {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      content.mojom.FrameHost_UpdateUserGestureCarryoverInfo_ParamsSpec.$,
      null,
      []);
  }

  updateState(state) {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      content.mojom.FrameHost_UpdateState_ParamsSpec.$,
      null,
      [state]);
  }

  openURL(params) {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
      content.mojom.FrameHost_OpenURL_ParamsSpec.$,
      null,
      [params]);
  }

  didStopLoading() {
    // Ordinal: 14
    return this.proxy.sendMessage(
      14,  // ordinal
      content.mojom.FrameHost_DidStopLoading_ParamsSpec.$,
      null,
      []);
  }

};

content.mojom.FrameHost.getRemote = function() {
  let remote = new content.mojom.FrameHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'content.mojom.FrameHost',
    'context');
  return remote.$;
};

// ParamsSpec for CreateNewWindow
content.mojom.FrameHost_CreateNewWindow_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.FrameHost.CreateNewWindow_Params',
      packedSize: 16,
      fields: [
        { name: 'params', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

content.mojom.FrameHost_CreateNewWindow_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.FrameHost.CreateNewWindow_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'reply', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for CreateChildFrame
content.mojom.FrameHost_CreateChildFrame_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.FrameHost.CreateChildFrame_Params',
      packedSize: 112,
      fields: [
        { name: 'child_frame_token', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'frame', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'browser_interface_broker', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'policy_container_bind_params', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'associated_interface_provider', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'scope', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'frame_name', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'frame_unique_name', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'is_created_by_script', packedOffset: 64, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'frame_policy', packedOffset: 72, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'frame_owner_properties', packedOffset: 80, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'child_frame_owner_element_type', packedOffset: 88, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'document_ukm_source_id', packedOffset: 96, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for DidCommitProvisionalLoad
content.mojom.FrameHost_DidCommitProvisionalLoad_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.FrameHost.DidCommitProvisionalLoad_Params',
      packedSize: 24,
      fields: [
        { name: 'params', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'interface_params', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for DidCommitSameDocumentNavigation
content.mojom.FrameHost_DidCommitSameDocumentNavigation_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.FrameHost.DidCommitSameDocumentNavigation_Params',
      packedSize: 24,
      fields: [
        { name: 'params', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'same_document_params', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for DidOpenDocumentInputStream
content.mojom.FrameHost_DidOpenDocumentInputStream_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.FrameHost.DidOpenDocumentInputStream_Params',
      packedSize: 16,
      fields: [
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for BeginNavigation
content.mojom.FrameHost_BeginNavigation_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.FrameHost.BeginNavigation_Params',
      packedSize: 56,
      fields: [
        { name: 'common_params', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'begin_params', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'blob_url_token', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'navigation_client', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'initiator_navigation_state_keep_alive_handle', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'renderer_cancellation_listener', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SubresourceResponseStarted
content.mojom.FrameHost_SubresourceResponseStarted_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.FrameHost.SubresourceResponseStarted_Params',
      packedSize: 24,
      fields: [
        { name: 'final_response_url', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'cert_status', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ResourceLoadComplete
content.mojom.FrameHost_ResourceLoadComplete_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.FrameHost.ResourceLoadComplete_Params',
      packedSize: 16,
      fields: [
        { name: 'url_load_info', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for DidChangeName
content.mojom.FrameHost_DidChangeName_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.FrameHost.DidChangeName_Params',
      packedSize: 24,
      fields: [
        { name: 'name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'unique_name', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for CancelInitialHistoryLoad
content.mojom.FrameHost_CancelInitialHistoryLoad_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.FrameHost.CancelInitialHistoryLoad_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for UpdateEncoding
content.mojom.FrameHost_UpdateEncoding_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.FrameHost.UpdateEncoding_Params',
      packedSize: 16,
      fields: [
        { name: 'encoding_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for UpdateUserGestureCarryoverInfo
content.mojom.FrameHost_UpdateUserGestureCarryoverInfo_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.FrameHost.UpdateUserGestureCarryoverInfo_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for UpdateState
content.mojom.FrameHost_UpdateState_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.FrameHost.UpdateState_Params',
      packedSize: 16,
      fields: [
        { name: 'state', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OpenURL
content.mojom.FrameHost_OpenURL_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.FrameHost.OpenURL_Params',
      packedSize: 16,
      fields: [
        { name: 'params', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for DidStopLoading
content.mojom.FrameHost_DidStopLoading_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.FrameHost.DidStopLoading_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
content.mojom.FrameHostPtr = content.mojom.FrameHostRemote;
content.mojom.FrameHostRequest = content.mojom.FrameHostPendingReceiver;

