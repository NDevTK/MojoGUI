// Auto-generated MojoJS binding
// Source: chromium_src/content/common/frame.mojom
// Module: content.mojom

'use strict';

// Module namespace
var content = content || {};
content.mojom = content.mojom || {};
var cc = cc || {};
var IPC = IPC || {};
var mojo_base = mojo_base || {};
var skia = skia || {};
var network = network || {};
var service_manager = service_manager || {};
var viz = viz || {};
var blink = blink || {};
var ax = ax || {};
var ui = ui || {};
var gfx = gfx || {};
var url = url || {};

content.mojom.ViewWidgetTypeSpec = { $: mojo.internal.Enum() };
content.mojom.ChildFrameOwnerElementTypeSpec = { $: mojo.internal.Enum() };
content.mojom.FrameDeleteIntentionSpec = { $: mojo.internal.Enum() };
content.mojom.CreateNewWindowStatusSpec = { $: mojo.internal.Enum() };
content.mojom.CreateMainFrameUnionSpec = { $: {} };
content.mojom.CreateViewParamsSpec = { $: {} };
content.mojom.CreateLocalMainFrameParamsSpec = { $: {} };
content.mojom.CreateProvisionalLocalMainFrameParamsSpec = { $: {} };
content.mojom.CreateRemoteMainFrameParamsSpec = { $: {} };
content.mojom.CreateFrameWidgetParamsSpec = { $: {} };
content.mojom.CreateFrameParamsSpec = { $: {} };
content.mojom.SnapshotAccessibilityTreeParamsSpec = { $: {} };
content.mojom.CreateNewWindowParamsSpec = { $: {} };
content.mojom.CreateNewWindowReplySpec = { $: {} };
content.mojom.FrameHTMLSerializerHandler = {};
content.mojom.FrameHTMLSerializerHandler.$interfaceName = 'content.mojom.FrameHTMLSerializerHandler';
content.mojom.FrameHTMLSerializerHandler_DidReceiveData_ParamsSpec = { $: {} };
content.mojom.FrameHTMLSerializerHandler_Done_ParamsSpec = { $: {} };
content.mojom.Frame = {};
content.mojom.Frame.$interfaceName = 'content.mojom.Frame';
content.mojom.Frame_CommitSameDocumentNavigation_ParamsSpec = { $: {} };
content.mojom.Frame_CommitSameDocumentNavigation_ResponseParamsSpec = { $: {} };
content.mojom.Frame_UpdateSubresourceLoaderFactories_ParamsSpec = { $: {} };
content.mojom.Frame_SetWantErrorMessageStackTrace_ParamsSpec = { $: {} };
content.mojom.Frame_Unload_ParamsSpec = { $: {} };
content.mojom.Frame_Delete_ParamsSpec = { $: {} };
content.mojom.Frame_UndoCommitNavigation_ParamsSpec = { $: {} };
content.mojom.Frame_GetInterfaceProvider_ParamsSpec = { $: {} };
content.mojom.Frame_SnapshotAccessibilityTree_ParamsSpec = { $: {} };
content.mojom.Frame_SnapshotAccessibilityTree_ResponseParamsSpec = { $: {} };
content.mojom.Frame_GetSerializedHtmlWithLocalLinks_ParamsSpec = { $: {} };
content.mojom.FrameBindingsControl = {};
content.mojom.FrameBindingsControl.$interfaceName = 'content.mojom.FrameBindingsControl';
content.mojom.FrameBindingsControl_AllowBindings_ParamsSpec = { $: {} };
content.mojom.FrameBindingsControl_EnableMojoJsBindings_ParamsSpec = { $: {} };
content.mojom.FrameBindingsControl_EnableMojoJsBindingsWithBroker_ParamsSpec = { $: {} };
content.mojom.FrameBindingsControl_BindWebUI_ParamsSpec = { $: {} };
content.mojom.NavigationRendererCancellationListener = {};
content.mojom.NavigationRendererCancellationListener.$interfaceName = 'content.mojom.NavigationRendererCancellationListener';
content.mojom.NavigationRendererCancellationListener_RendererCancellationWindowEnded_ParamsSpec = { $: {} };
content.mojom.FrameHost = {};
content.mojom.FrameHost.$interfaceName = 'content.mojom.FrameHost';
content.mojom.FrameHost_CreateNewWindow_ParamsSpec = { $: {} };
content.mojom.FrameHost_CreateNewWindow_ResponseParamsSpec = { $: {} };
content.mojom.FrameHost_CreateChildFrame_ParamsSpec = { $: {} };
content.mojom.FrameHost_DidCommitProvisionalLoad_ParamsSpec = { $: {} };
content.mojom.FrameHost_DidCommitSameDocumentNavigation_ParamsSpec = { $: {} };
content.mojom.FrameHost_DidOpenDocumentInputStream_ParamsSpec = { $: {} };
content.mojom.FrameHost_BeginNavigation_ParamsSpec = { $: {} };
content.mojom.FrameHost_SubresourceResponseStarted_ParamsSpec = { $: {} };
content.mojom.FrameHost_ResourceLoadComplete_ParamsSpec = { $: {} };
content.mojom.FrameHost_DidChangeName_ParamsSpec = { $: {} };
content.mojom.FrameHost_CancelInitialHistoryLoad_ParamsSpec = { $: {} };
content.mojom.FrameHost_UpdateEncoding_ParamsSpec = { $: {} };
content.mojom.FrameHost_UpdateUserGestureCarryoverInfo_ParamsSpec = { $: {} };
content.mojom.FrameHost_UpdateState_ParamsSpec = { $: {} };
content.mojom.FrameHost_OpenURL_ParamsSpec = { $: {} };
content.mojom.FrameHost_DidStopLoading_ParamsSpec = { $: {} };

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

// Union: CreateMainFrameUnion
mojo.internal.Union(
    content.mojom.CreateMainFrameUnionSpec, 'content.mojom.CreateMainFrameUnion', {
      'local_params': {
        'ordinal': 0,
        'type': content.mojom.CreateLocalMainFrameParamsSpec.$,
        'nullable': false,
      },
      'provisional_local_params': {
        'ordinal': 1,
        'type': content.mojom.CreateProvisionalLocalMainFrameParamsSpec.$,
        'nullable': false,
      },
      'remote_params': {
        'ordinal': 2,
        'type': content.mojom.CreateRemoteMainFrameParamsSpec.$,
        'nullable': false,
      },
    });

// Struct: CreateViewParams
mojo.internal.Struct(
    content.mojom.CreateViewParamsSpec, 'content.mojom.CreateViewParams', [
      mojo.internal.StructField('renderer_preferences', 0, 0, blink.mojom.RendererPreferencesSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('web_preferences', 8, 0, blink.mojom.WebPreferencesSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('session_storage_namespace_id', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('opener_frame_token', 24, 0, blink.mojom.FrameTokenSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('replication_state', 32, 0, blink.mojom.FrameReplicationStateSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('devtools_main_frame_token', 40, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('main_frame', 48, 0, content.mojom.CreateMainFrameUnionSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('prerender_param', 56, 0, blink.mojom.PrerenderParamSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('type', 64, 0, content.mojom.ViewWidgetTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('fenced_frame_mode', 72, 0, blink.mojom.DeprecatedFencedFrameModeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('outermost_origin', 80, 0, url.mojom.OriginSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('blink_page_broadcast', 88, 0, pending_associated_receiver<blink.mojom.PageBroadcast>Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('base_background_color', 96, 0, skia.mojom.SkColorSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('color_provider_colors', 104, 0, blink.mojom.ColorProviderColorMapsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('browsing_context_group_token', 112, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('attribution_support', 120, 0, network.mojom.AttributionSupportSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('navigation_metrics_token', 128, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('history_index', 136, 0, mojo.internal.Int32, -1, false, 0, undefined),
      mojo.internal.StructField('history_length', 140, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('hidden', 144, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('never_composited', 144, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('window_was_opened_by_another_window', 144, 2, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 160]]);

// Struct: CreateLocalMainFrameParams
mojo.internal.Struct(
    content.mojom.CreateLocalMainFrameParamsSpec, 'content.mojom.CreateLocalMainFrameParams', [
      mojo.internal.StructField('frame_token', 0, 0, blink.mojom.LocalFrameTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('frame', 8, 0, pending_associated_receiver<content.mojom.Frame>Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('interface_broker', 16, 0, mojo.internal.InterfaceProxy(blink.mojom.BrowserInterfaceBrokerRemote), null, false, 0, undefined),
      mojo.internal.StructField('associated_interface_provider_remote', 24, 0, pending_associated_remote<blink.mojom.AssociatedInterfaceProvider>Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('document_token', 32, 0, blink.mojom.DocumentTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('policy_container', 40, 0, blink.mojom.PolicyContainerSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('widget_params', 48, 0, content.mojom.CreateFrameWidgetParamsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('subresource_loader_factories', 56, 0, blink.mojom.URLLoaderFactoryBundleSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('routing_id', 64, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('is_on_initial_empty_document', 68, 0, mojo.internal.Bool, true, false, 0, undefined),
    ],
    [[0, 80]]);

// Struct: CreateProvisionalLocalMainFrameParams
mojo.internal.Struct(
    content.mojom.CreateProvisionalLocalMainFrameParamsSpec, 'content.mojom.CreateProvisionalLocalMainFrameParams', [
      mojo.internal.StructField('local_params', 0, 0, content.mojom.CreateLocalMainFrameParamsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('previous_frame_token', 8, 0, blink.mojom.FrameTokenSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

// Struct: CreateRemoteMainFrameParams
mojo.internal.Struct(
    content.mojom.CreateRemoteMainFrameParamsSpec, 'content.mojom.CreateRemoteMainFrameParams', [
      mojo.internal.StructField('token', 0, 0, blink.mojom.RemoteFrameTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('frame_interfaces', 8, 0, blink.mojom.RemoteFrameInterfacesFromBrowserSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('main_frame_interfaces', 16, 0, blink.mojom.RemoteMainFrameInterfacesSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: CreateFrameWidgetParams
mojo.internal.Struct(
    content.mojom.CreateFrameWidgetParamsSpec, 'content.mojom.CreateFrameWidgetParams', [
      mojo.internal.StructField('frame_widget_host', 0, 0, pending_associated_remote<blink.mojom.FrameWidgetHost>Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('frame_widget', 8, 0, pending_associated_receiver<blink.mojom.FrameWidget>Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('widget_host', 16, 0, pending_associated_remote<blink.mojom.WidgetHost>Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('widget', 24, 0, pending_associated_receiver<blink.mojom.Widget>Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('visual_properties', 32, 0, blink.mojom.VisualPropertiesSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('routing_id', 40, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 56]]);

// Struct: CreateFrameParams
mojo.internal.Struct(
    content.mojom.CreateFrameParamsSpec, 'content.mojom.CreateFrameParams', [
      mojo.internal.StructField('frame_token', 0, 0, blink.mojom.LocalFrameTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('previous_frame_token', 8, 0, blink.mojom.FrameTokenSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('opener_frame_token', 16, 0, blink.mojom.FrameTokenSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('parent_frame_token', 24, 0, blink.mojom.FrameTokenSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('previous_sibling_frame_token', 32, 0, blink.mojom.FrameTokenSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('interface_broker', 40, 0, mojo.internal.InterfaceProxy(blink.mojom.BrowserInterfaceBrokerRemote), null, false, 0, undefined),
      mojo.internal.StructField('tree_scope_type', 48, 0, blink.mojom.TreeScopeTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('replication_state', 56, 0, blink.mojom.FrameReplicationStateSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('devtools_frame_token', 64, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('frame_owner_properties', 72, 0, blink.mojom.FrameOwnerPropertiesSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('widget_params', 80, 0, content.mojom.CreateFrameWidgetParamsSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('document_token', 88, 0, blink.mojom.DocumentTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('policy_container', 96, 0, blink.mojom.PolicyContainerSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('frame', 104, 0, pending_associated_receiver<content.mojom.Frame>Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('associated_interface_provider_remote', 112, 0, pending_associated_remote<blink.mojom.AssociatedInterfaceProvider>Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('navigation_metrics_token', 120, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('routing_id', 128, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('is_on_initial_empty_document', 132, 0, mojo.internal.Bool, true, false, 0, undefined),
      mojo.internal.StructField('is_for_nested_main_frame', 132, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 144]]);

// Struct: SnapshotAccessibilityTreeParams
mojo.internal.Struct(
    content.mojom.SnapshotAccessibilityTreeParamsSpec, 'content.mojom.SnapshotAccessibilityTreeParams', [
      mojo.internal.StructField('max_nodes', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('timeout', 8, 0, mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('ax_mode', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: CreateNewWindowParams
mojo.internal.Struct(
    content.mojom.CreateNewWindowParamsSpec, 'content.mojom.CreateNewWindowParams', [
      mojo.internal.StructField('window_container_type', 0, 0, content.mojom.WindowContainerTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('session_storage_namespace_id', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('clone_from_session_storage_namespace_id', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('frame_name', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('form_submission_post_data', 32, 0, network.mojom.URLRequestBodySpec.$, null, true, 0, undefined),
      mojo.internal.StructField('form_submission_post_content_type', 40, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('disposition', 48, 0, ui.mojom.WindowOpenDispositionSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('target_url', 56, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('referrer', 64, 0, blink.mojom.ReferrerSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('features', 72, 0, blink.mojom.WindowFeaturesSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('impression', 80, 0, blink.mojom.ImpressionSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('download_policy', 88, 0, blink.mojom.NavigationDownloadPolicySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('pip_options', 96, 0, blink.mojom.PictureInPictureWindowOptionsSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('initiator_activation_and_ad_status', 104, 0, blink.mojom.NavigationInitiatorActivationAndAdStatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('frame_remote', 112, 0, pending_associated_remote<content.mojom.Frame>Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('page_broadcast_remote', 120, 0, pending_associated_remote<blink.mojom.PageBroadcast>Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('main_frame_interface_broker', 128, 0, mojo.internal.InterfaceRequest(blink.mojom.BrowserInterfaceBrokerRemote), null, false, 0, undefined),
      mojo.internal.StructField('associated_interface_provider', 136, 0, pending_associated_receiver<blink.mojom.AssociatedInterfaceProvider>Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('widget_host', 144, 0, pending_associated_receiver<blink.mojom.WidgetHost>Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('widget', 152, 0, pending_associated_remote<blink.mojom.Widget>Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('frame_widget_host', 160, 0, pending_associated_receiver<blink.mojom.FrameWidgetHost>Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('frame_widget', 168, 0, pending_associated_remote<blink.mojom.FrameWidget>Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('allow_popup', 176, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('opener_suppressed', 176, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_form_submission', 176, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('consumes_user_activation', 176, 3, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 192]]);

// Struct: CreateNewWindowReply
mojo.internal.Struct(
    content.mojom.CreateNewWindowReplySpec, 'content.mojom.CreateNewWindowReply', [
      mojo.internal.StructField('main_frame_token', 0, 0, blink.mojom.LocalFrameTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('visual_properties', 8, 0, blink.mojom.VisualPropertiesSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('cloned_session_storage_namespace_id', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('devtools_main_frame_token', 24, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('document_token', 32, 0, blink.mojom.DocumentTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('policy_container', 40, 0, blink.mojom.PolicyContainerSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('browsing_context_group_token', 48, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('color_provider_colors', 56, 0, blink.mojom.ColorProviderColorMapsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('widget_screen_rect', 64, 0, gfx.mojom.RectSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('window_screen_rect', 72, 0, gfx.mojom.RectSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('main_frame_route_id', 80, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('widget_routing_id', 84, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('wait_for_debugger', 88, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 104]]);

// Interface: FrameHTMLSerializerHandler
mojo.internal.Struct(
    content.mojom.FrameHTMLSerializerHandler_DidReceiveData_ParamsSpec, 'content.mojom.FrameHTMLSerializerHandler_DidReceiveData_Params', [
      mojo.internal.StructField('data_buffer', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.mojom.FrameHTMLSerializerHandler_Done_ParamsSpec, 'content.mojom.FrameHTMLSerializerHandler_Done_Params', [
    ],
    [[0, 8]]);

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
      [data_buffer],
      false);
  }

  done() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      content.mojom.FrameHTMLSerializerHandler_Done_ParamsSpec,
      null,
      [],
      false);
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

content.mojom.FrameHTMLSerializerHandlerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
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
        
        // Try Method 0: DidReceiveData
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.mojom.FrameHTMLSerializerHandler_DidReceiveData_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DidReceiveData (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: Done
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.mojom.FrameHTMLSerializerHandler_Done_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Done (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
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
          const params = decoder.decodeStructInline(content.mojom.FrameHTMLSerializerHandler_DidReceiveData_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.didReceiveData');
          const result = this.impl.didReceiveData(params.data_buffer);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.mojom.FrameHTMLSerializerHandler_Done_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.done');
          const result = this.impl.done();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

content.mojom.FrameHTMLSerializerHandlerReceiver = content.mojom.FrameHTMLSerializerHandlerReceiver;

content.mojom.FrameHTMLSerializerHandlerPtr = content.mojom.FrameHTMLSerializerHandlerRemote;
content.mojom.FrameHTMLSerializerHandlerRequest = content.mojom.FrameHTMLSerializerHandlerPendingReceiver;


// Interface: Frame
mojo.internal.Struct(
    content.mojom.Frame_CommitSameDocumentNavigation_ParamsSpec, 'content.mojom.Frame_CommitSameDocumentNavigation_Params', [
      mojo.internal.StructField('common_params', 0, 0, blink.mojom.CommonNavigationParamsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('request_params', 8, 0, blink.mojom.CommitNavigationParamsSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    content.mojom.Frame_CommitSameDocumentNavigation_ResponseParamsSpec, 'content.mojom.Frame_CommitSameDocumentNavigation_ResponseParams', [
      mojo.internal.StructField('commit_result', 0, 0, blink.mojom.CommitResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.mojom.Frame_UpdateSubresourceLoaderFactories_ParamsSpec, 'content.mojom.Frame_UpdateSubresourceLoaderFactories_Params', [
      mojo.internal.StructField('subresource_loader_factories', 0, 0, blink.mojom.URLLoaderFactoryBundleSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.mojom.Frame_SetWantErrorMessageStackTrace_ParamsSpec, 'content.mojom.Frame_SetWantErrorMessageStackTrace_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    content.mojom.Frame_Unload_ParamsSpec, 'content.mojom.Frame_Unload_Params', [
      mojo.internal.StructField('new_remote_frame_replication_state', 0, 0, blink.mojom.FrameReplicationStateSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('new_remote_frame_token', 8, 0, blink.mojom.RemoteFrameTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('new_remote_frame_interfaces', 16, 0, blink.mojom.RemoteFrameInterfacesFromBrowserSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('new_remote_main_frame_interfaces', 24, 0, blink.mojom.RemoteMainFrameInterfacesSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('devtools_frame_token', 32, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('is_loading', 40, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 56]]);

mojo.internal.Struct(
    content.mojom.Frame_Delete_ParamsSpec, 'content.mojom.Frame_Delete_Params', [
      mojo.internal.StructField('intention', 0, 0, content.mojom.FrameDeleteIntentionSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.mojom.Frame_UndoCommitNavigation_ParamsSpec, 'content.mojom.Frame_UndoCommitNavigation_Params', [
      mojo.internal.StructField('new_remote_frame_replication_state', 0, 0, blink.mojom.FrameReplicationStateSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('new_remote_frame_token', 8, 0, blink.mojom.RemoteFrameTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('new_remote_frame_interfaces', 16, 0, blink.mojom.RemoteFrameInterfacesFromBrowserSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('new_remote_main_frame_interfaces', 24, 0, blink.mojom.RemoteMainFrameInterfacesSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('is_loading', 32, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 48]]);

mojo.internal.Struct(
    content.mojom.Frame_GetInterfaceProvider_ParamsSpec, 'content.mojom.Frame_GetInterfaceProvider_Params', [
      mojo.internal.StructField('interfaces', 0, 0, mojo.internal.InterfaceRequest(service_manager.mojom.InterfaceProviderRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.mojom.Frame_SnapshotAccessibilityTree_ParamsSpec, 'content.mojom.Frame_SnapshotAccessibilityTree_Params', [
      mojo.internal.StructField('params', 0, 0, content.mojom.SnapshotAccessibilityTreeParamsSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.mojom.Frame_SnapshotAccessibilityTree_ResponseParamsSpec, 'content.mojom.Frame_SnapshotAccessibilityTree_ResponseParams', [
      mojo.internal.StructField('snapshot', 0, 0, ax.mojom.AXTreeUpdateSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.mojom.Frame_GetSerializedHtmlWithLocalLinks_ParamsSpec, 'content.mojom.Frame_GetSerializedHtmlWithLocalLinks_Params', [
      mojo.internal.StructField('url_map', 0, 0, mojo.internal.Map(url.mojom.UrlSpec.$, mojo_base.mojom.FilePathSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('frame_token_map', 8, 0, mojo.internal.Map(blink.mojom.FrameTokenSpec.$, mojo_base.mojom.FilePathSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('handler_remote', 16, 0, mojo.internal.InterfaceProxy(content.mojom.FrameHTMLSerializerHandlerSpec), null, false, 0, undefined),
      mojo.internal.StructField('save_with_empty_url', 24, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 40]]);

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
      [common_params, request_params],
      false);
  }

  updateSubresourceLoaderFactories(subresource_loader_factories) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      content.mojom.Frame_UpdateSubresourceLoaderFactories_ParamsSpec,
      null,
      [subresource_loader_factories],
      false);
  }

  setWantErrorMessageStackTrace() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      content.mojom.Frame_SetWantErrorMessageStackTrace_ParamsSpec,
      null,
      [],
      false);
  }

  unload(is_loading, new_remote_frame_replication_state, new_remote_frame_token, new_remote_frame_interfaces, new_remote_main_frame_interfaces, devtools_frame_token) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      content.mojom.Frame_Unload_ParamsSpec,
      null,
      [is_loading, new_remote_frame_replication_state, new_remote_frame_token, new_remote_frame_interfaces, new_remote_main_frame_interfaces, devtools_frame_token],
      false);
  }

  delete(intention) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      content.mojom.Frame_Delete_ParamsSpec,
      null,
      [intention],
      false);
  }

  undoCommitNavigation(is_loading, new_remote_frame_replication_state, new_remote_frame_token, new_remote_frame_interfaces, new_remote_main_frame_interfaces) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      content.mojom.Frame_UndoCommitNavigation_ParamsSpec,
      null,
      [is_loading, new_remote_frame_replication_state, new_remote_frame_token, new_remote_frame_interfaces, new_remote_main_frame_interfaces],
      false);
  }

  getInterfaceProvider(interfaces) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      content.mojom.Frame_GetInterfaceProvider_ParamsSpec,
      null,
      [interfaces],
      false);
  }

  snapshotAccessibilityTree(params) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      content.mojom.Frame_SnapshotAccessibilityTree_ParamsSpec,
      content.mojom.Frame_SnapshotAccessibilityTree_ResponseParamsSpec,
      [params],
      false);
  }

  getSerializedHtmlWithLocalLinks(url_map, frame_token_map, save_with_empty_url, handler_remote) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      content.mojom.Frame_GetSerializedHtmlWithLocalLinks_ParamsSpec,
      null,
      [url_map, frame_token_map, save_with_empty_url, handler_remote],
      false);
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

content.mojom.FrameReceiver = class {
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
        
        // Try Method 0: CommitSameDocumentNavigation
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.mojom.Frame_CommitSameDocumentNavigation_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CommitSameDocumentNavigation (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: UpdateSubresourceLoaderFactories
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.mojom.Frame_UpdateSubresourceLoaderFactories_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UpdateSubresourceLoaderFactories (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: SetWantErrorMessageStackTrace
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.mojom.Frame_SetWantErrorMessageStackTrace_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetWantErrorMessageStackTrace (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: Unload
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.mojom.Frame_Unload_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Unload (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: Delete
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.mojom.Frame_Delete_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Delete (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: UndoCommitNavigation
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.mojom.Frame_UndoCommitNavigation_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UndoCommitNavigation (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: GetInterfaceProvider
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.mojom.Frame_GetInterfaceProvider_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetInterfaceProvider (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: SnapshotAccessibilityTree
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.mojom.Frame_SnapshotAccessibilityTree_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SnapshotAccessibilityTree (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: GetSerializedHtmlWithLocalLinks
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.mojom.Frame_GetSerializedHtmlWithLocalLinks_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetSerializedHtmlWithLocalLinks (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
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
          const params = decoder.decodeStructInline(content.mojom.Frame_CommitSameDocumentNavigation_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.commitSameDocumentNavigation');
          const result = this.impl.commitSameDocumentNavigation(params.common_params, params.request_params);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, content.mojom.Frame_CommitSameDocumentNavigation_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.mojom.Frame_UpdateSubresourceLoaderFactories_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.updateSubresourceLoaderFactories');
          const result = this.impl.updateSubresourceLoaderFactories(params.subresource_loader_factories);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.mojom.Frame_SetWantErrorMessageStackTrace_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.setWantErrorMessageStackTrace');
          const result = this.impl.setWantErrorMessageStackTrace();
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.mojom.Frame_Unload_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.unload');
          const result = this.impl.unload(params.is_loading, params.new_remote_frame_replication_state, params.new_remote_frame_token, params.new_remote_frame_interfaces, params.new_remote_main_frame_interfaces, params.devtools_frame_token);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.mojom.Frame_Delete_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.delete');
          const result = this.impl.delete(params.intention);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.mojom.Frame_UndoCommitNavigation_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.undoCommitNavigation');
          const result = this.impl.undoCommitNavigation(params.is_loading, params.new_remote_frame_replication_state, params.new_remote_frame_token, params.new_remote_frame_interfaces, params.new_remote_main_frame_interfaces);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.mojom.Frame_GetInterfaceProvider_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.getInterfaceProvider');
          const result = this.impl.getInterfaceProvider(params.interfaces);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.mojom.Frame_SnapshotAccessibilityTree_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.snapshotAccessibilityTree');
          const result = this.impl.snapshotAccessibilityTree(params.params);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, content.mojom.Frame_SnapshotAccessibilityTree_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.mojom.Frame_GetSerializedHtmlWithLocalLinks_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.getSerializedHtmlWithLocalLinks');
          const result = this.impl.getSerializedHtmlWithLocalLinks(params.url_map, params.frame_token_map, params.save_with_empty_url, params.handler_remote);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

content.mojom.FrameReceiver = content.mojom.FrameReceiver;

content.mojom.FramePtr = content.mojom.FrameRemote;
content.mojom.FrameRequest = content.mojom.FramePendingReceiver;


// Interface: FrameBindingsControl
mojo.internal.Struct(
    content.mojom.FrameBindingsControl_AllowBindings_ParamsSpec, 'content.mojom.FrameBindingsControl_AllowBindings_Params', [
      mojo.internal.StructField('enabled_bindings_flags', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.mojom.FrameBindingsControl_EnableMojoJsBindings_ParamsSpec, 'content.mojom.FrameBindingsControl_EnableMojoJsBindings_Params', [
      mojo.internal.StructField('features', 0, 0, content.mojom.ExtraMojoJsFeaturesSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.mojom.FrameBindingsControl_EnableMojoJsBindingsWithBroker_ParamsSpec, 'content.mojom.FrameBindingsControl_EnableMojoJsBindingsWithBroker_Params', [
      mojo.internal.StructField('broker', 0, 0, mojo.internal.InterfaceProxy(blink.mojom.BrowserInterfaceBrokerRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.mojom.FrameBindingsControl_BindWebUI_ParamsSpec, 'content.mojom.FrameBindingsControl_BindWebUI_Params', [
      mojo.internal.StructField('receiver', 0, 0, pending_associated_receiver<content.mojom.WebUI>Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('remote', 8, 0, pending_associated_remote<content.mojom.WebUIHost>Spec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

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
      [enabled_bindings_flags],
      false);
  }

  enableMojoJsBindings(features) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      content.mojom.FrameBindingsControl_EnableMojoJsBindings_ParamsSpec,
      null,
      [features],
      false);
  }

  enableMojoJsBindingsWithBroker(broker) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      content.mojom.FrameBindingsControl_EnableMojoJsBindingsWithBroker_ParamsSpec,
      null,
      [broker],
      false);
  }

  bindWebUI(receiver, remote) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      content.mojom.FrameBindingsControl_BindWebUI_ParamsSpec,
      null,
      [receiver, remote],
      false);
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

content.mojom.FrameBindingsControlReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
    this.ordinalMap.set(3, 3); // Default ordinal 3 -> Index 3
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
        
        // Try Method 0: AllowBindings
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.mojom.FrameBindingsControl_AllowBindings_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AllowBindings (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: EnableMojoJsBindings
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.mojom.FrameBindingsControl_EnableMojoJsBindings_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> EnableMojoJsBindings (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: EnableMojoJsBindingsWithBroker
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.mojom.FrameBindingsControl_EnableMojoJsBindingsWithBroker_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> EnableMojoJsBindingsWithBroker (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: BindWebUI
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.mojom.FrameBindingsControl_BindWebUI_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> BindWebUI (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
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
          const params = decoder.decodeStructInline(content.mojom.FrameBindingsControl_AllowBindings_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.allowBindings');
          const result = this.impl.allowBindings(params.enabled_bindings_flags);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.mojom.FrameBindingsControl_EnableMojoJsBindings_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.enableMojoJsBindings');
          const result = this.impl.enableMojoJsBindings(params.features);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.mojom.FrameBindingsControl_EnableMojoJsBindingsWithBroker_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.enableMojoJsBindingsWithBroker');
          const result = this.impl.enableMojoJsBindingsWithBroker(params.broker);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.mojom.FrameBindingsControl_BindWebUI_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.bindWebUI');
          const result = this.impl.bindWebUI(params.receiver, params.remote);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

content.mojom.FrameBindingsControlReceiver = content.mojom.FrameBindingsControlReceiver;

content.mojom.FrameBindingsControlPtr = content.mojom.FrameBindingsControlRemote;
content.mojom.FrameBindingsControlRequest = content.mojom.FrameBindingsControlPendingReceiver;


// Interface: NavigationRendererCancellationListener
mojo.internal.Struct(
    content.mojom.NavigationRendererCancellationListener_RendererCancellationWindowEnded_ParamsSpec, 'content.mojom.NavigationRendererCancellationListener_RendererCancellationWindowEnded_Params', [
    ],
    [[0, 8]]);

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
      [],
      false);
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

content.mojom.NavigationRendererCancellationListenerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
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
        
        // Try Method 0: RendererCancellationWindowEnded
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.mojom.NavigationRendererCancellationListener_RendererCancellationWindowEnded_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RendererCancellationWindowEnded (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
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
          const params = decoder.decodeStructInline(content.mojom.NavigationRendererCancellationListener_RendererCancellationWindowEnded_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.rendererCancellationWindowEnded');
          const result = this.impl.rendererCancellationWindowEnded();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

content.mojom.NavigationRendererCancellationListenerReceiver = content.mojom.NavigationRendererCancellationListenerReceiver;

content.mojom.NavigationRendererCancellationListenerPtr = content.mojom.NavigationRendererCancellationListenerRemote;
content.mojom.NavigationRendererCancellationListenerRequest = content.mojom.NavigationRendererCancellationListenerPendingReceiver;


// Interface: FrameHost
mojo.internal.Struct(
    content.mojom.FrameHost_CreateNewWindow_ParamsSpec, 'content.mojom.FrameHost_CreateNewWindow_Params', [
      mojo.internal.StructField('params', 0, 0, content.mojom.CreateNewWindowParamsSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.mojom.FrameHost_CreateNewWindow_ResponseParamsSpec, 'content.mojom.FrameHost_CreateNewWindow_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, content.mojom.CreateNewWindowStatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('reply', 8, 0, content.mojom.CreateNewWindowReplySpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    content.mojom.FrameHost_CreateChildFrame_ParamsSpec, 'content.mojom.FrameHost_CreateChildFrame_Params', [
      mojo.internal.StructField('child_frame_token', 0, 0, blink.mojom.LocalFrameTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('frame', 8, 0, pending_associated_remote<content.mojom.Frame>Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('browser_interface_broker', 16, 0, mojo.internal.InterfaceRequest(blink.mojom.BrowserInterfaceBrokerRemote), null, false, 0, undefined),
      mojo.internal.StructField('policy_container_bind_params', 24, 0, blink.mojom.PolicyContainerBindParamsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('associated_interface_provider', 32, 0, pending_associated_receiver<blink.mojom.AssociatedInterfaceProvider>Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('scope', 40, 0, blink.mojom.TreeScopeTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('frame_name', 48, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('frame_unique_name', 56, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('frame_policy', 64, 0, blink.mojom.FramePolicySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('frame_owner_properties', 72, 0, blink.mojom.FrameOwnerPropertiesSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('child_frame_owner_element_type', 80, 0, content.mojom.ChildFrameOwnerElementTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('document_ukm_source_id', 88, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('is_created_by_script', 96, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 112]]);

mojo.internal.Struct(
    content.mojom.FrameHost_DidCommitProvisionalLoad_ParamsSpec, 'content.mojom.FrameHost_DidCommitProvisionalLoad_Params', [
      mojo.internal.StructField('params', 0, 0, content.mojom.DidCommitProvisionalLoadParamsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('interface_params', 8, 0, content.mojom.DidCommitProvisionalLoadInterfaceParamsSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    content.mojom.FrameHost_DidCommitSameDocumentNavigation_ParamsSpec, 'content.mojom.FrameHost_DidCommitSameDocumentNavigation_Params', [
      mojo.internal.StructField('params', 0, 0, content.mojom.DidCommitProvisionalLoadParamsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('same_document_params', 8, 0, content.mojom.DidCommitSameDocumentNavigationParamsSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    content.mojom.FrameHost_DidOpenDocumentInputStream_ParamsSpec, 'content.mojom.FrameHost_DidOpenDocumentInputStream_Params', [
      mojo.internal.StructField('url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.mojom.FrameHost_BeginNavigation_ParamsSpec, 'content.mojom.FrameHost_BeginNavigation_Params', [
      mojo.internal.StructField('common_params', 0, 0, blink.mojom.CommonNavigationParamsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('begin_params', 8, 0, blink.mojom.BeginNavigationParamsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('blob_url_token', 16, 0, mojo.internal.InterfaceProxy(blink.mojom.BlobURLTokenRemote), null, true, 0, undefined),
      mojo.internal.StructField('navigation_client', 24, 0, mojo.internal.Pointer, null, true, 0, undefined),
      mojo.internal.StructField('initiator_navigation_state_keep_alive_handle', 32, 0, mojo.internal.InterfaceProxy(blink.mojom.NavigationStateKeepAliveHandleRemote), null, true, 0, undefined),
      mojo.internal.StructField('renderer_cancellation_listener', 40, 0, mojo.internal.InterfaceRequest(content.mojom.NavigationRendererCancellationListenerSpec), null, false, 0, undefined),
    ],
    [[0, 56]]);

mojo.internal.Struct(
    content.mojom.FrameHost_SubresourceResponseStarted_ParamsSpec, 'content.mojom.FrameHost_SubresourceResponseStarted_Params', [
      mojo.internal.StructField('final_response_url', 0, 0, url.mojom.SchemeHostPortSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('cert_status', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    content.mojom.FrameHost_ResourceLoadComplete_ParamsSpec, 'content.mojom.FrameHost_ResourceLoadComplete_Params', [
      mojo.internal.StructField('url_load_info', 0, 0, blink.mojom.ResourceLoadInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.mojom.FrameHost_DidChangeName_ParamsSpec, 'content.mojom.FrameHost_DidChangeName_Params', [
      mojo.internal.StructField('name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('unique_name', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    content.mojom.FrameHost_CancelInitialHistoryLoad_ParamsSpec, 'content.mojom.FrameHost_CancelInitialHistoryLoad_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    content.mojom.FrameHost_UpdateEncoding_ParamsSpec, 'content.mojom.FrameHost_UpdateEncoding_Params', [
      mojo.internal.StructField('encoding_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.mojom.FrameHost_UpdateUserGestureCarryoverInfo_ParamsSpec, 'content.mojom.FrameHost_UpdateUserGestureCarryoverInfo_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    content.mojom.FrameHost_UpdateState_ParamsSpec, 'content.mojom.FrameHost_UpdateState_Params', [
      mojo.internal.StructField('state', 0, 0, blink.mojom.PageStateSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.mojom.FrameHost_OpenURL_ParamsSpec, 'content.mojom.FrameHost_OpenURL_Params', [
      mojo.internal.StructField('params', 0, 0, blink.mojom.OpenURLParamsSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.mojom.FrameHost_DidStopLoading_ParamsSpec, 'content.mojom.FrameHost_DidStopLoading_Params', [
    ],
    [[0, 8]]);

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
      [params],
      false);
  }

  createChildFrame(child_frame_token, frame, browser_interface_broker, policy_container_bind_params, associated_interface_provider, scope, frame_name, frame_unique_name, is_created_by_script, frame_policy, frame_owner_properties, child_frame_owner_element_type, document_ukm_source_id) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      content.mojom.FrameHost_CreateChildFrame_ParamsSpec,
      null,
      [child_frame_token, frame, browser_interface_broker, policy_container_bind_params, associated_interface_provider, scope, frame_name, frame_unique_name, is_created_by_script, frame_policy, frame_owner_properties, child_frame_owner_element_type, document_ukm_source_id],
      false);
  }

  didCommitProvisionalLoad(params, interface_params) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      content.mojom.FrameHost_DidCommitProvisionalLoad_ParamsSpec,
      null,
      [params, interface_params],
      false);
  }

  didCommitSameDocumentNavigation(params, same_document_params) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      content.mojom.FrameHost_DidCommitSameDocumentNavigation_ParamsSpec,
      null,
      [params, same_document_params],
      false);
  }

  didOpenDocumentInputStream(url) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      content.mojom.FrameHost_DidOpenDocumentInputStream_ParamsSpec,
      null,
      [url],
      false);
  }

  beginNavigation(common_params, begin_params, blob_url_token, navigation_client, initiator_navigation_state_keep_alive_handle, renderer_cancellation_listener) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      content.mojom.FrameHost_BeginNavigation_ParamsSpec,
      null,
      [common_params, begin_params, blob_url_token, navigation_client, initiator_navigation_state_keep_alive_handle, renderer_cancellation_listener],
      false);
  }

  subresourceResponseStarted(final_response_url, cert_status) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      content.mojom.FrameHost_SubresourceResponseStarted_ParamsSpec,
      null,
      [final_response_url, cert_status],
      false);
  }

  resourceLoadComplete(url_load_info) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      content.mojom.FrameHost_ResourceLoadComplete_ParamsSpec,
      null,
      [url_load_info],
      false);
  }

  didChangeName(name, unique_name) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      content.mojom.FrameHost_DidChangeName_ParamsSpec,
      null,
      [name, unique_name],
      false);
  }

  cancelInitialHistoryLoad() {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      content.mojom.FrameHost_CancelInitialHistoryLoad_ParamsSpec,
      null,
      [],
      false);
  }

  updateEncoding(encoding_name) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      content.mojom.FrameHost_UpdateEncoding_ParamsSpec,
      null,
      [encoding_name],
      false);
  }

  updateUserGestureCarryoverInfo() {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      content.mojom.FrameHost_UpdateUserGestureCarryoverInfo_ParamsSpec,
      null,
      [],
      false);
  }

  updateState(state) {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      content.mojom.FrameHost_UpdateState_ParamsSpec,
      null,
      [state],
      false);
  }

  openURL(params) {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
      content.mojom.FrameHost_OpenURL_ParamsSpec,
      null,
      [params],
      false);
  }

  didStopLoading() {
    // Ordinal: 14
    return this.proxy.sendMessage(
      14,  // ordinal
      content.mojom.FrameHost_DidStopLoading_ParamsSpec,
      null,
      [],
      false);
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

content.mojom.FrameHostReceiver = class {
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
    this.ordinalMap.set(13, 13); // Default ordinal 13 -> Index 13
    this.ordinalMap.set(14, 14); // Default ordinal 14 -> Index 14
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
        
        // Try Method 0: CreateNewWindow
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.mojom.FrameHost_CreateNewWindow_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreateNewWindow (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: CreateChildFrame
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.mojom.FrameHost_CreateChildFrame_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreateChildFrame (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: DidCommitProvisionalLoad
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.mojom.FrameHost_DidCommitProvisionalLoad_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DidCommitProvisionalLoad (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: DidCommitSameDocumentNavigation
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.mojom.FrameHost_DidCommitSameDocumentNavigation_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DidCommitSameDocumentNavigation (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: DidOpenDocumentInputStream
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.mojom.FrameHost_DidOpenDocumentInputStream_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DidOpenDocumentInputStream (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: BeginNavigation
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.mojom.FrameHost_BeginNavigation_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> BeginNavigation (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: SubresourceResponseStarted
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.mojom.FrameHost_SubresourceResponseStarted_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SubresourceResponseStarted (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: ResourceLoadComplete
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.mojom.FrameHost_ResourceLoadComplete_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ResourceLoadComplete (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: DidChangeName
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.mojom.FrameHost_DidChangeName_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DidChangeName (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
           }
        }
        // Try Method 9: CancelInitialHistoryLoad
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.mojom.FrameHost_CancelInitialHistoryLoad_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CancelInitialHistoryLoad (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 9 failed:', e);
           }
        }
        // Try Method 10: UpdateEncoding
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.mojom.FrameHost_UpdateEncoding_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UpdateEncoding (10)');
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 10 failed:', e);
           }
        }
        // Try Method 11: UpdateUserGestureCarryoverInfo
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.mojom.FrameHost_UpdateUserGestureCarryoverInfo_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UpdateUserGestureCarryoverInfo (11)');
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 11 failed:', e);
           }
        }
        // Try Method 12: UpdateState
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.mojom.FrameHost_UpdateState_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UpdateState (12)');
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 12 failed:', e);
           }
        }
        // Try Method 13: OpenURL
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.mojom.FrameHost_OpenURL_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OpenURL (13)');
             this.mapOrdinal(header.ordinal, 13);
             dispatchId = 13;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 13 failed:', e);
           }
        }
        // Try Method 14: DidStopLoading
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.mojom.FrameHost_DidStopLoading_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DidStopLoading (14)');
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
          const params = decoder.decodeStructInline(content.mojom.FrameHost_CreateNewWindow_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.createNewWindow');
          const result = this.impl.createNewWindow(params.params);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, content.mojom.FrameHost_CreateNewWindow_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.mojom.FrameHost_CreateChildFrame_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.createChildFrame');
          const result = this.impl.createChildFrame(params.child_frame_token, params.frame, params.browser_interface_broker, params.policy_container_bind_params, params.associated_interface_provider, params.scope, params.frame_name, params.frame_unique_name, params.is_created_by_script, params.frame_policy, params.frame_owner_properties, params.child_frame_owner_element_type, params.document_ukm_source_id);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.mojom.FrameHost_DidCommitProvisionalLoad_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.didCommitProvisionalLoad');
          const result = this.impl.didCommitProvisionalLoad(params.params, params.interface_params);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.mojom.FrameHost_DidCommitSameDocumentNavigation_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.didCommitSameDocumentNavigation');
          const result = this.impl.didCommitSameDocumentNavigation(params.params, params.same_document_params);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.mojom.FrameHost_DidOpenDocumentInputStream_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.didOpenDocumentInputStream');
          const result = this.impl.didOpenDocumentInputStream(params.url);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.mojom.FrameHost_BeginNavigation_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.beginNavigation');
          const result = this.impl.beginNavigation(params.common_params, params.begin_params, params.blob_url_token, params.navigation_client, params.initiator_navigation_state_keep_alive_handle, params.renderer_cancellation_listener);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.mojom.FrameHost_SubresourceResponseStarted_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.subresourceResponseStarted');
          const result = this.impl.subresourceResponseStarted(params.final_response_url, params.cert_status);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.mojom.FrameHost_ResourceLoadComplete_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.resourceLoadComplete');
          const result = this.impl.resourceLoadComplete(params.url_load_info);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.mojom.FrameHost_DidChangeName_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.didChangeName');
          const result = this.impl.didChangeName(params.name, params.unique_name);
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.mojom.FrameHost_CancelInitialHistoryLoad_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.cancelInitialHistoryLoad');
          const result = this.impl.cancelInitialHistoryLoad();
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.mojom.FrameHost_UpdateEncoding_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.updateEncoding');
          const result = this.impl.updateEncoding(params.encoding_name);
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.mojom.FrameHost_UpdateUserGestureCarryoverInfo_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.updateUserGestureCarryoverInfo');
          const result = this.impl.updateUserGestureCarryoverInfo();
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.mojom.FrameHost_UpdateState_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.updateState');
          const result = this.impl.updateState(params.state);
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.mojom.FrameHost_OpenURL_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.openURL');
          const result = this.impl.openURL(params.params);
          break;
        }
        case 14: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.mojom.FrameHost_DidStopLoading_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.didStopLoading');
          const result = this.impl.didStopLoading();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

content.mojom.FrameHostReceiver = content.mojom.FrameHostReceiver;

content.mojom.FrameHostPtr = content.mojom.FrameHostRemote;
content.mojom.FrameHostRequest = content.mojom.FrameHostPendingReceiver;

