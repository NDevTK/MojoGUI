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
      content.mojom.FrameHTMLSerializerHandler_DidReceiveData_ParamsSpec,
      null,
      null,
      [data_buffer],
      undefined,
      undefined
    );
  }

  done() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      content.mojom.FrameHTMLSerializerHandler_Done_ParamsSpec,
      null,
      null,
      [],
      undefined,
      undefined
    );
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
        { name: 'data_buffer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
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
      versions: [{version: 0, packedSize: 8}]
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
      content.mojom.Frame_CommitSameDocumentNavigation_ParamsSpec,
      content.mojom.Frame_CommitSameDocumentNavigation_ResponseParamsSpec,
      content.mojom.Frame_CommitSameDocumentNavigation_ResponseParamsSpec,
      [common_params, request_params],
      undefined,
      undefined
    );
  }

  updateSubresourceLoaderFactories(subresource_loader_factories) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      content.mojom.Frame_UpdateSubresourceLoaderFactories_ParamsSpec,
      null,
      null,
      [subresource_loader_factories],
      undefined,
      undefined
    );
  }

  setWantErrorMessageStackTrace() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      content.mojom.Frame_SetWantErrorMessageStackTrace_ParamsSpec,
      null,
      null,
      [],
      undefined,
      undefined
    );
  }

  unload(is_loading, new_remote_frame_replication_state, new_remote_frame_token, new_remote_frame_interfaces, new_remote_main_frame_interfaces, devtools_frame_token) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      content.mojom.Frame_Unload_ParamsSpec,
      null,
      null,
      [is_loading, new_remote_frame_replication_state, new_remote_frame_token, new_remote_frame_interfaces, new_remote_main_frame_interfaces, devtools_frame_token],
      undefined,
      undefined
    );
  }

  delete(intention) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      content.mojom.Frame_Delete_ParamsSpec,
      null,
      null,
      [intention],
      undefined,
      undefined
    );
  }

  undoCommitNavigation(is_loading, new_remote_frame_replication_state, new_remote_frame_token, new_remote_frame_interfaces, new_remote_main_frame_interfaces) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      content.mojom.Frame_UndoCommitNavigation_ParamsSpec,
      null,
      null,
      [is_loading, new_remote_frame_replication_state, new_remote_frame_token, new_remote_frame_interfaces, new_remote_main_frame_interfaces],
      undefined,
      undefined
    );
  }

  getInterfaceProvider(interfaces) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      content.mojom.Frame_GetInterfaceProvider_ParamsSpec,
      null,
      null,
      [interfaces],
      undefined,
      undefined
    );
  }

  snapshotAccessibilityTree(params) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      content.mojom.Frame_SnapshotAccessibilityTree_ParamsSpec,
      content.mojom.Frame_SnapshotAccessibilityTree_ResponseParamsSpec,
      content.mojom.Frame_SnapshotAccessibilityTree_ResponseParamsSpec,
      [params],
      undefined,
      undefined
    );
  }

  getSerializedHtmlWithLocalLinks(url_map, frame_token_map, save_with_empty_url, handler_remote) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      content.mojom.Frame_GetSerializedHtmlWithLocalLinks_ParamsSpec,
      null,
      null,
      [url_map, frame_token_map, save_with_empty_url, handler_remote],
      undefined,
      undefined
    );
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
        { name: 'common_params', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'request_params', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

content.mojom.Frame_CommitSameDocumentNavigation_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.Frame.CommitSameDocumentNavigation_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'commit_result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
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
        { name: 'subresource_loader_factories', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
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
      versions: [{version: 0, packedSize: 8}]
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
        { name: 'is_loading', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'new_remote_frame_replication_state', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'new_remote_frame_token', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'new_remote_frame_interfaces', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'new_remote_main_frame_interfaces', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'devtools_frame_token', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0, packedSize: 56}]
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
        { name: 'intention', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
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
        { name: 'is_loading', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'new_remote_frame_replication_state', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'new_remote_frame_token', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'new_remote_frame_interfaces', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'new_remote_main_frame_interfaces', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 48}]
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
        { name: 'interfaces', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
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
        { name: 'params', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

content.mojom.Frame_SnapshotAccessibilityTree_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.Frame.SnapshotAccessibilityTree_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'snapshot', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
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
        { name: 'url_map', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Map, nullable: false },
        { name: 'frame_token_map', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Map, nullable: false },
        { name: 'save_with_empty_url', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'handler_remote', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
      ],
      versions: [{version: 0, packedSize: 40}]
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
      content.mojom.FrameBindingsControl_AllowBindings_ParamsSpec,
      null,
      null,
      [enabled_bindings_flags],
      undefined,
      undefined
    );
  }

  enableMojoJsBindings(features) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      content.mojom.FrameBindingsControl_EnableMojoJsBindings_ParamsSpec,
      null,
      null,
      [features],
      undefined,
      undefined
    );
  }

  enableMojoJsBindingsWithBroker(broker) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      content.mojom.FrameBindingsControl_EnableMojoJsBindingsWithBroker_ParamsSpec,
      null,
      null,
      [broker],
      undefined,
      undefined
    );
  }

  bindWebUI(receiver, remote) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      content.mojom.FrameBindingsControl_BindWebUI_ParamsSpec,
      null,
      null,
      [receiver, remote],
      undefined,
      undefined
    );
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
        { name: 'enabled_bindings_flags', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
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
        { name: 'features', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0, packedSize: 16}]
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
        { name: 'broker', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
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
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.AssociatedInterfaceRequest, nullable: false },
        { name: 'remote', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.AssociatedInterfaceProxy, nullable: false },
      ],
      versions: [{version: 0, packedSize: 24}]
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
      content.mojom.NavigationRendererCancellationListener_RendererCancellationWindowEnded_ParamsSpec,
      null,
      null,
      [],
      undefined,
      undefined
    );
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
      versions: [{version: 0, packedSize: 8}]
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
      content.mojom.FrameHost_CreateNewWindow_ParamsSpec,
      content.mojom.FrameHost_CreateNewWindow_ResponseParamsSpec,
      content.mojom.FrameHost_CreateNewWindow_ResponseParamsSpec,
      [params],
      undefined,
      mojo.internal.kMessageFlagIsSync
    );
  }

  createChildFrame(child_frame_token, frame, browser_interface_broker, policy_container_bind_params, associated_interface_provider, scope, frame_name, frame_unique_name, is_created_by_script, frame_policy, frame_owner_properties, child_frame_owner_element_type, document_ukm_source_id) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      content.mojom.FrameHost_CreateChildFrame_ParamsSpec,
      null,
      null,
      [child_frame_token, frame, browser_interface_broker, policy_container_bind_params, associated_interface_provider, scope, frame_name, frame_unique_name, is_created_by_script, frame_policy, frame_owner_properties, child_frame_owner_element_type, document_ukm_source_id],
      undefined,
      undefined
    );
  }

  didCommitProvisionalLoad(params, interface_params) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      content.mojom.FrameHost_DidCommitProvisionalLoad_ParamsSpec,
      null,
      null,
      [params, interface_params],
      undefined,
      undefined
    );
  }

  didCommitSameDocumentNavigation(params, same_document_params) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      content.mojom.FrameHost_DidCommitSameDocumentNavigation_ParamsSpec,
      null,
      null,
      [params, same_document_params],
      undefined,
      undefined
    );
  }

  didOpenDocumentInputStream(url) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      content.mojom.FrameHost_DidOpenDocumentInputStream_ParamsSpec,
      null,
      null,
      [url],
      undefined,
      undefined
    );
  }

  beginNavigation(common_params, begin_params, blob_url_token, navigation_client, initiator_navigation_state_keep_alive_handle, renderer_cancellation_listener) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      content.mojom.FrameHost_BeginNavigation_ParamsSpec,
      null,
      null,
      [common_params, begin_params, blob_url_token, navigation_client, initiator_navigation_state_keep_alive_handle, renderer_cancellation_listener],
      undefined,
      undefined
    );
  }

  subresourceResponseStarted(final_response_url, cert_status) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      content.mojom.FrameHost_SubresourceResponseStarted_ParamsSpec,
      null,
      null,
      [final_response_url, cert_status],
      undefined,
      undefined
    );
  }

  resourceLoadComplete(url_load_info) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      content.mojom.FrameHost_ResourceLoadComplete_ParamsSpec,
      null,
      null,
      [url_load_info],
      undefined,
      undefined
    );
  }

  didChangeName(name, unique_name) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      content.mojom.FrameHost_DidChangeName_ParamsSpec,
      null,
      null,
      [name, unique_name],
      undefined,
      undefined
    );
  }

  cancelInitialHistoryLoad() {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      content.mojom.FrameHost_CancelInitialHistoryLoad_ParamsSpec,
      null,
      null,
      [],
      undefined,
      undefined
    );
  }

  updateEncoding(encoding_name) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      content.mojom.FrameHost_UpdateEncoding_ParamsSpec,
      null,
      null,
      [encoding_name],
      undefined,
      undefined
    );
  }

  updateUserGestureCarryoverInfo() {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      content.mojom.FrameHost_UpdateUserGestureCarryoverInfo_ParamsSpec,
      null,
      null,
      [],
      undefined,
      undefined
    );
  }

  updateState(state) {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      content.mojom.FrameHost_UpdateState_ParamsSpec,
      null,
      null,
      [state],
      undefined,
      undefined
    );
  }

  openURL(params) {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
      content.mojom.FrameHost_OpenURL_ParamsSpec,
      null,
      null,
      [params],
      undefined,
      undefined
    );
  }

  didStopLoading() {
    // Ordinal: 14
    return this.proxy.sendMessage(
      14,  // ordinal
      content.mojom.FrameHost_DidStopLoading_ParamsSpec,
      null,
      null,
      [],
      undefined,
      undefined
    );
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
        { name: 'params', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

content.mojom.FrameHost_CreateNewWindow_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.FrameHost.CreateNewWindow_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'reply', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0, packedSize: 24}]
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
        { name: 'child_frame_token', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'frame', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.AssociatedInterfaceProxy, nullable: false },
        { name: 'browser_interface_broker', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
        { name: 'policy_container_bind_params', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'associated_interface_provider', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.AssociatedInterfaceRequest, nullable: false },
        { name: 'scope', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'frame_name', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'frame_unique_name', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'is_created_by_script', packedOffset: 64, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'frame_policy', packedOffset: 72, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'frame_owner_properties', packedOffset: 80, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'child_frame_owner_element_type', packedOffset: 88, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'document_ukm_source_id', packedOffset: 96, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false },
      ],
      versions: [{version: 0, packedSize: 112}]
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
        { name: 'params', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'interface_params', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0, packedSize: 24}]
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
        { name: 'params', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'same_document_params', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 24}]
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
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
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
        { name: 'common_params', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'begin_params', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'blob_url_token', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: true },
        { name: 'navigation_client', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.AssociatedInterfaceProxy, nullable: true },
        { name: 'initiator_navigation_state_keep_alive_handle', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: true },
        { name: 'renderer_cancellation_listener', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
      ],
      versions: [{version: 0, packedSize: 56}]
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
        { name: 'final_response_url', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'cert_status', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
      ],
      versions: [{version: 0, packedSize: 24}]
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
        { name: 'url_load_info', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
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
        { name: 'name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'unique_name', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0, packedSize: 24}]
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
      versions: [{version: 0, packedSize: 8}]
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
        { name: 'encoding_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
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
      versions: [{version: 0, packedSize: 8}]
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
        { name: 'state', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
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
        { name: 'params', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
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
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Legacy compatibility
content.mojom.FrameHostPtr = content.mojom.FrameHostRemote;
content.mojom.FrameHostRequest = content.mojom.FrameHostPendingReceiver;

