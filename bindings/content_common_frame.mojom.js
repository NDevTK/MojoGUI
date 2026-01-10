// Auto-generated MojoJS binding
// Source: chromium_src/content/common/frame.mojom
// Module: content.mojom

'use strict';

// Module namespace
var content = content || {};
content.mojom = content.mojom || {};
var content = content || {};
var content = content || {};
var content = content || {};
var content = content || {};
var content = content || {};
var skia = skia || {};
var blink = blink || {};
var blink = blink || {};
var blink = blink || {};
var blink = blink || {};
var blink = blink || {};
var blink = blink || {};
var blink = blink || {};
var blink = blink || {};
var blink = blink || {};
var blink = blink || {};
var blink = blink || {};
var blink = blink || {};
var blink = blink || {};
var blink = blink || {};
var blink = blink || {};
var blink = blink || {};
var blink = blink || {};
var blink = blink || {};
var blink = blink || {};
var blink = blink || {};
var blink = blink || {};
var blink = blink || {};
var blink = blink || {};
var blink = blink || {};
var blink = blink || {};
var blink = blink || {};
var blink = blink || {};
var blink = blink || {};
var blink = blink || {};
var blink = blink || {};
var blink = blink || {};
var blink = blink || {};
var blink = blink || {};
var blink = blink || {};
var ui = ui || {};
var ui = ui || {};
var ui = ui || {};
var gfx = gfx || {};
var url = url || {};
var url = url || {};
var url = url || {};


// Enum: ViewWidgetType
content.mojom.mojom.ViewWidgetType = {
  kTopLevel: 0,
  kGuestView: 1,
  kFencedFrame: 2,
};
content.mojom.mojom.ViewWidgetTypeSpec = { $: mojo.internal.Enum() };

// Enum: ChildFrameOwnerElementType
content.mojom.mojom.ChildFrameOwnerElementType = {
  kIframe: 0,
  kObject: 1,
  kEmbed: 2,
  kFrame: 3,
};
content.mojom.mojom.ChildFrameOwnerElementTypeSpec = { $: mojo.internal.Enum() };

// Enum: FrameDeleteIntention
content.mojom.mojom.FrameDeleteIntention = {
  kNotMainFrame: 0,
  kSpeculativeMainFrameForShutdown: 1,
  kSpeculativeMainFrameForNavigationCancelled: 2,
};
content.mojom.mojom.FrameDeleteIntentionSpec = { $: mojo.internal.Enum() };

// Enum: CreateNewWindowStatus
content.mojom.mojom.CreateNewWindowStatus = {
  kBlocked: 0,
  kIgnore: 1,
  kReuse: 2,
  kSuccess: 3,
};
content.mojom.mojom.CreateNewWindowStatusSpec = { $: mojo.internal.Enum() };

// Union: CreateMainFrameUnion
content.mojom.mojom.CreateMainFrameUnionSpec = { $: mojo.internal.Union(
    'content.mojom.CreateMainFrameUnion', {
      'local_params': {
        'ordinal': 0,
        'type': content.mojom.CreateLocalMainFrameParamsSpec,
      }},
      'provisional_local_params': {
        'ordinal': 1,
        'type': content.mojom.CreateProvisionalLocalMainFrameParamsSpec,
      }},
      'remote_params': {
        'ordinal': 2,
        'type': content.mojom.CreateRemoteMainFrameParamsSpec,
      }},
    })
};

// Struct: CreateViewParams
content.mojom.mojom.CreateViewParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.CreateViewParams',
      packedSize: 160,
      fields: [
        { name: 'renderer_preferences', packedOffset: 32, packedBitOffset: 0, type: blink.mojom.RendererPreferencesSpec, nullable: false, minVersion: 0 },
        { name: 'web_preferences', packedOffset: 40, packedBitOffset: 0, type: blink.mojom.WebPreferencesSpec, nullable: false, minVersion: 0 },
        { name: 'session_storage_namespace_id', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'opener_frame_token', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.FrameTokenSpec, nullable: true, minVersion: 0 },
        { name: 'replication_state', packedOffset: 56, packedBitOffset: 0, type: blink.mojom.FrameReplicationStateSpec, nullable: false, minVersion: 0 },
        { name: 'devtools_main_frame_token', packedOffset: 64, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: false, minVersion: 0 },
        { name: 'main_frame', packedOffset: 16, packedBitOffset: 0, type: content.mojom.CreateMainFrameUnionSpec, nullable: false, minVersion: 0 },
        { name: 'hidden', packedOffset: 148, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'prerender_param', packedOffset: 72, packedBitOffset: 0, type: blink.mojom.PrerenderParamSpec, nullable: true, minVersion: 0 },
        { name: 'never_composited', packedOffset: 148, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'window_was_opened_by_another_window', packedOffset: 148, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'type', packedOffset: 128, packedBitOffset: 0, type: content.mojom.ViewWidgetTypeSpec, nullable: false, minVersion: 0 },
        { name: 'fenced_frame_mode', packedOffset: 132, packedBitOffset: 0, type: blink.mojom.DeprecatedFencedFrameModeSpec, nullable: false, minVersion: 0 },
        { name: 'outermost_origin', packedOffset: 80, packedBitOffset: 0, type: url.mojom.OriginSpec, nullable: true, minVersion: 0 },
        { name: 'blink_page_broadcast', packedOffset: 88, packedBitOffset: 0, type: mojo.internal.AssociatedInterfaceRequest(blink.mojom.PageBroadcastRemote), nullable: false, minVersion: 0 },
        { name: 'base_background_color', packedOffset: 96, packedBitOffset: 0, type: skia.mojom.SkColorSpec, nullable: true, minVersion: 0 },
        { name: 'color_provider_colors', packedOffset: 104, packedBitOffset: 0, type: blink.mojom.ColorProviderColorMapsSpec, nullable: false, minVersion: 0 },
        { name: 'browsing_context_group_token', packedOffset: 112, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: false, minVersion: 0 },
        { name: 'attribution_support', packedOffset: 136, packedBitOffset: 0, type: network.mojom.AttributionSupportSpec, nullable: false, minVersion: 0 },
        { name: 'navigation_metrics_token', packedOffset: 120, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: true, minVersion: 0 },
        { name: 'history_index', packedOffset: 140, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'history_length', packedOffset: 144, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 160}]
    }
  }
};

// Struct: CreateLocalMainFrameParams
content.mojom.mojom.CreateLocalMainFrameParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.CreateLocalMainFrameParams',
      packedSize: 80,
      fields: [
        { name: 'frame_token', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.LocalFrameTokenSpec, nullable: false, minVersion: 0 },
        { name: 'routing_id', packedOffset: 64, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'frame', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.AssociatedInterfaceRequest(content.mojom.FrameRemote), nullable: false, minVersion: 0 },
        { name: 'interface_broker', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(blink.mojom.BrowserInterfaceBrokerRemote), nullable: false, minVersion: 0 },
        { name: 'associated_interface_provider_remote', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.AssociatedInterfaceProxy(blink.mojom.AssociatedInterfaceProviderRemote), nullable: false, minVersion: 0 },
        { name: 'is_on_initial_empty_document', packedOffset: 68, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'document_token', packedOffset: 32, packedBitOffset: 0, type: blink.mojom.DocumentTokenSpec, nullable: false, minVersion: 0 },
        { name: 'policy_container', packedOffset: 40, packedBitOffset: 0, type: blink.mojom.PolicyContainerSpec, nullable: true, minVersion: 0 },
        { name: 'widget_params', packedOffset: 48, packedBitOffset: 0, type: content.mojom.CreateFrameWidgetParamsSpec, nullable: false, minVersion: 0 },
        { name: 'subresource_loader_factories', packedOffset: 56, packedBitOffset: 0, type: blink.mojom.URLLoaderFactoryBundleSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 80}]
    }
  }
};

// Struct: CreateProvisionalLocalMainFrameParams
content.mojom.mojom.CreateProvisionalLocalMainFrameParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.CreateProvisionalLocalMainFrameParams',
      packedSize: 32,
      fields: [
        { name: 'local_params', packedOffset: 16, packedBitOffset: 0, type: content.mojom.CreateLocalMainFrameParamsSpec, nullable: false, minVersion: 0 },
        { name: 'previous_frame_token', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.FrameTokenSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: CreateRemoteMainFrameParams
content.mojom.mojom.CreateRemoteMainFrameParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.CreateRemoteMainFrameParams',
      packedSize: 32,
      fields: [
        { name: 'token', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.RemoteFrameTokenSpec, nullable: false, minVersion: 0 },
        { name: 'frame_interfaces', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.RemoteFrameInterfacesFromBrowserSpec, nullable: false, minVersion: 0 },
        { name: 'main_frame_interfaces', packedOffset: 16, packedBitOffset: 0, type: blink.mojom.RemoteMainFrameInterfacesSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: CreateFrameWidgetParams
content.mojom.mojom.CreateFrameWidgetParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.CreateFrameWidgetParams',
      packedSize: 56,
      fields: [
        { name: 'routing_id', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'frame_widget_host', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.AssociatedInterfaceProxy(blink.mojom.FrameWidgetHostRemote), nullable: false, minVersion: 0 },
        { name: 'frame_widget', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.AssociatedInterfaceRequest(blink.mojom.FrameWidgetRemote), nullable: false, minVersion: 0 },
        { name: 'widget_host', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.AssociatedInterfaceProxy(blink.mojom.WidgetHostRemote), nullable: false, minVersion: 0 },
        { name: 'widget', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.AssociatedInterfaceRequest(blink.mojom.WidgetRemote), nullable: false, minVersion: 0 },
        { name: 'visual_properties', packedOffset: 32, packedBitOffset: 0, type: blink.mojom.VisualPropertiesSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 56}]
    }
  }
};

// Struct: CreateFrameParams
content.mojom.mojom.CreateFrameParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.CreateFrameParams',
      packedSize: 176,
      fields: [
        { name: 'frame_token', packedOffset: 64, packedBitOffset: 0, type: blink.mojom.LocalFrameTokenSpec, nullable: false, minVersion: 0 },
        { name: 'routing_id', packedOffset: 152, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'previous_frame_token', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.FrameTokenSpec, nullable: true, minVersion: 0 },
        { name: 'opener_frame_token', packedOffset: 16, packedBitOffset: 0, type: blink.mojom.FrameTokenSpec, nullable: true, minVersion: 0 },
        { name: 'parent_frame_token', packedOffset: 32, packedBitOffset: 0, type: blink.mojom.FrameTokenSpec, nullable: true, minVersion: 0 },
        { name: 'previous_sibling_frame_token', packedOffset: 48, packedBitOffset: 0, type: blink.mojom.FrameTokenSpec, nullable: true, minVersion: 0 },
        { name: 'interface_broker', packedOffset: 72, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(blink.mojom.BrowserInterfaceBrokerRemote), nullable: false, minVersion: 0 },
        { name: 'tree_scope_type', packedOffset: 156, packedBitOffset: 0, type: blink.mojom.TreeScopeTypeSpec, nullable: false, minVersion: 0 },
        { name: 'replication_state', packedOffset: 80, packedBitOffset: 0, type: blink.mojom.FrameReplicationStateSpec, nullable: false, minVersion: 0 },
        { name: 'devtools_frame_token', packedOffset: 88, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: false, minVersion: 0 },
        { name: 'frame_owner_properties', packedOffset: 96, packedBitOffset: 0, type: blink.mojom.FrameOwnerPropertiesSpec, nullable: false, minVersion: 0 },
        { name: 'widget_params', packedOffset: 104, packedBitOffset: 0, type: content.mojom.CreateFrameWidgetParamsSpec, nullable: true, minVersion: 0 },
        { name: 'is_on_initial_empty_document', packedOffset: 160, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'document_token', packedOffset: 112, packedBitOffset: 0, type: blink.mojom.DocumentTokenSpec, nullable: false, minVersion: 0 },
        { name: 'policy_container', packedOffset: 120, packedBitOffset: 0, type: blink.mojom.PolicyContainerSpec, nullable: true, minVersion: 0 },
        { name: 'frame', packedOffset: 128, packedBitOffset: 0, type: mojo.internal.AssociatedInterfaceRequest(content.mojom.FrameRemote), nullable: false, minVersion: 0 },
        { name: 'associated_interface_provider_remote', packedOffset: 136, packedBitOffset: 0, type: mojo.internal.AssociatedInterfaceProxy(blink.mojom.AssociatedInterfaceProviderRemote), nullable: false, minVersion: 0 },
        { name: 'is_for_nested_main_frame', packedOffset: 160, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'navigation_metrics_token', packedOffset: 144, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 176}]
    }
  }
};

// Struct: SnapshotAccessibilityTreeParams
content.mojom.mojom.SnapshotAccessibilityTreeParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.SnapshotAccessibilityTreeParams',
      packedSize: 32,
      fields: [
        { name: 'ax_mode', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'max_nodes', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
        { name: 'timeout', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: CreateNewWindowParams
content.mojom.mojom.CreateNewWindowParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.CreateNewWindowParams',
      packedSize: 176,
      fields: [
        { name: 'allow_popup', packedOffset: 164, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'window_container_type', packedOffset: 152, packedBitOffset: 0, type: content.mojom.WindowContainerTypeSpec, nullable: false, minVersion: 0 },
        { name: 'session_storage_namespace_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'clone_from_session_storage_namespace_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'frame_name', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'opener_suppressed', packedOffset: 164, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'is_form_submission', packedOffset: 164, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'consumes_user_activation', packedOffset: 164, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'form_submission_post_data', packedOffset: 24, packedBitOffset: 0, type: network.mojom.URLRequestBodySpec, nullable: true, minVersion: 0 },
        { name: 'form_submission_post_content_type', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'disposition', packedOffset: 156, packedBitOffset: 0, type: ui.mojom.WindowOpenDispositionSpec, nullable: false, minVersion: 0 },
        { name: 'target_url', packedOffset: 40, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'referrer', packedOffset: 48, packedBitOffset: 0, type: blink.mojom.ReferrerSpec, nullable: false, minVersion: 0 },
        { name: 'features', packedOffset: 56, packedBitOffset: 0, type: blink.mojom.WindowFeaturesSpec, nullable: false, minVersion: 0 },
        { name: 'impression', packedOffset: 64, packedBitOffset: 0, type: blink.mojom.ImpressionSpec, nullable: true, minVersion: 0 },
        { name: 'download_policy', packedOffset: 72, packedBitOffset: 0, type: blink.mojom.NavigationDownloadPolicySpec, nullable: false, minVersion: 0 },
        { name: 'pip_options', packedOffset: 80, packedBitOffset: 0, type: blink.mojom.PictureInPictureWindowOptionsSpec, nullable: true, minVersion: 0 },
        { name: 'initiator_activation_and_ad_status', packedOffset: 160, packedBitOffset: 0, type: blink.mojom.NavigationInitiatorActivationAndAdStatusSpec, nullable: false, minVersion: 0 },
        { name: 'frame_remote', packedOffset: 88, packedBitOffset: 0, type: mojo.internal.AssociatedInterfaceProxy(content.mojom.FrameRemote), nullable: false, minVersion: 0 },
        { name: 'page_broadcast_remote', packedOffset: 96, packedBitOffset: 0, type: mojo.internal.AssociatedInterfaceProxy(blink.mojom.PageBroadcastRemote), nullable: false, minVersion: 0 },
        { name: 'main_frame_interface_broker', packedOffset: 104, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(blink.mojom.BrowserInterfaceBrokerRemote), nullable: false, minVersion: 0 },
        { name: 'associated_interface_provider', packedOffset: 112, packedBitOffset: 0, type: mojo.internal.AssociatedInterfaceRequest(blink.mojom.AssociatedInterfaceProviderRemote), nullable: false, minVersion: 0 },
        { name: 'widget_host', packedOffset: 120, packedBitOffset: 0, type: mojo.internal.AssociatedInterfaceRequest(blink.mojom.WidgetHostRemote), nullable: false, minVersion: 0 },
        { name: 'widget', packedOffset: 128, packedBitOffset: 0, type: mojo.internal.AssociatedInterfaceProxy(blink.mojom.WidgetRemote), nullable: false, minVersion: 0 },
        { name: 'frame_widget_host', packedOffset: 136, packedBitOffset: 0, type: mojo.internal.AssociatedInterfaceRequest(blink.mojom.FrameWidgetHostRemote), nullable: false, minVersion: 0 },
        { name: 'frame_widget', packedOffset: 144, packedBitOffset: 0, type: mojo.internal.AssociatedInterfaceProxy(blink.mojom.FrameWidgetRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 176}]
    }
  }
};

// Struct: CreateNewWindowReply
content.mojom.mojom.CreateNewWindowReplySpec = {
  $: {
    structSpec: {
      name: 'content.mojom.CreateNewWindowReply',
      packedSize: 104,
      fields: [
        { name: 'main_frame_token', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.LocalFrameTokenSpec, nullable: false, minVersion: 0 },
        { name: 'main_frame_route_id', packedOffset: 80, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'widget_routing_id', packedOffset: 84, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'visual_properties', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.VisualPropertiesSpec, nullable: false, minVersion: 0 },
        { name: 'cloned_session_storage_namespace_id', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'devtools_main_frame_token', packedOffset: 24, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: false, minVersion: 0 },
        { name: 'wait_for_debugger', packedOffset: 88, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'document_token', packedOffset: 32, packedBitOffset: 0, type: blink.mojom.DocumentTokenSpec, nullable: false, minVersion: 0 },
        { name: 'policy_container', packedOffset: 40, packedBitOffset: 0, type: blink.mojom.PolicyContainerSpec, nullable: false, minVersion: 0 },
        { name: 'browsing_context_group_token', packedOffset: 48, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: false, minVersion: 0 },
        { name: 'color_provider_colors', packedOffset: 56, packedBitOffset: 0, type: blink.mojom.ColorProviderColorMapsSpec, nullable: false, minVersion: 0 },
        { name: 'widget_screen_rect', packedOffset: 64, packedBitOffset: 0, type: gfx.mojom.RectSpec, nullable: true, minVersion: 0 },
        { name: 'window_screen_rect', packedOffset: 72, packedBitOffset: 0, type: gfx.mojom.RectSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 104}]
    }
  }
};

// Interface: FrameHTMLSerializerHandler
content.mojom.mojom.FrameHTMLSerializerHandler = {};

content.mojom.mojom.FrameHTMLSerializerHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

content.mojom.mojom.FrameHTMLSerializerHandlerRemote = class {
  static get $interfaceName() {
    return 'content.mojom.FrameHTMLSerializerHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      content.mojom.mojom.FrameHTMLSerializerHandlerPendingReceiver,
      handle);
    this.$ = new content.mojom.mojom.FrameHTMLSerializerHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

content.mojom.mojom.FrameHTMLSerializerHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  didReceiveData(data_buffer) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      content.mojom.mojom.FrameHTMLSerializerHandler_DidReceiveData_ParamsSpec,
      null,
      [data_buffer]);
  }

  done() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      content.mojom.mojom.FrameHTMLSerializerHandler_Done_ParamsSpec,
      null,
      []);
  }

};

content.mojom.mojom.FrameHTMLSerializerHandler.getRemote = function() {
  let remote = new content.mojom.mojom.FrameHTMLSerializerHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'content.mojom.FrameHTMLSerializerHandler',
    'context');
  return remote.$;
};

// ParamsSpec for DidReceiveData
content.mojom.mojom.FrameHTMLSerializerHandler_DidReceiveData_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.FrameHTMLSerializerHandler.DidReceiveData_Params',
      packedSize: 16,
      fields: [
        { name: 'data_buffer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for Done
content.mojom.mojom.FrameHTMLSerializerHandler_Done_ParamsSpec = {
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
content.mojom.mojom.FrameHTMLSerializerHandlerPtr = content.mojom.mojom.FrameHTMLSerializerHandlerRemote;
content.mojom.mojom.FrameHTMLSerializerHandlerRequest = content.mojom.mojom.FrameHTMLSerializerHandlerPendingReceiver;


// Interface: Frame
content.mojom.mojom.Frame = {};

content.mojom.mojom.FramePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

content.mojom.mojom.FrameRemote = class {
  static get $interfaceName() {
    return 'content.mojom.Frame';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      content.mojom.mojom.FramePendingReceiver,
      handle);
    this.$ = new content.mojom.mojom.FrameRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

content.mojom.mojom.FrameRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  commitSameDocumentNavigation(common_params, request_params) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      content.mojom.mojom.Frame_CommitSameDocumentNavigation_ParamsSpec,
      content.mojom.mojom.Frame_CommitSameDocumentNavigation_ResponseParamsSpec,
      [common_params, request_params]);
  }

  updateSubresourceLoaderFactories(subresource_loader_factories) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      content.mojom.mojom.Frame_UpdateSubresourceLoaderFactories_ParamsSpec,
      null,
      [subresource_loader_factories]);
  }

  setWantErrorMessageStackTrace() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      content.mojom.mojom.Frame_SetWantErrorMessageStackTrace_ParamsSpec,
      null,
      []);
  }

  unload(is_loading, new_remote_frame_replication_state, new_remote_frame_token, new_remote_frame_interfaces, new_remote_main_frame_interfaces, devtools_frame_token) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      content.mojom.mojom.Frame_Unload_ParamsSpec,
      null,
      [is_loading, new_remote_frame_replication_state, new_remote_frame_token, new_remote_frame_interfaces, new_remote_main_frame_interfaces, devtools_frame_token]);
  }

  delete(intention) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      content.mojom.mojom.Frame_Delete_ParamsSpec,
      null,
      [intention]);
  }

  undoCommitNavigation(is_loading, new_remote_frame_replication_state, new_remote_frame_token, new_remote_frame_interfaces, new_remote_main_frame_interfaces) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      content.mojom.mojom.Frame_UndoCommitNavigation_ParamsSpec,
      null,
      [is_loading, new_remote_frame_replication_state, new_remote_frame_token, new_remote_frame_interfaces, new_remote_main_frame_interfaces]);
  }

  getInterfaceProvider(interfaces) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      content.mojom.mojom.Frame_GetInterfaceProvider_ParamsSpec,
      null,
      [interfaces]);
  }

  snapshotAccessibilityTree(params) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      content.mojom.mojom.Frame_SnapshotAccessibilityTree_ParamsSpec,
      content.mojom.mojom.Frame_SnapshotAccessibilityTree_ResponseParamsSpec,
      [params]);
  }

  getSerializedHtmlWithLocalLinks(url_map, frame_token_map, save_with_empty_url, handler_remote) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      content.mojom.mojom.Frame_GetSerializedHtmlWithLocalLinks_ParamsSpec,
      null,
      [url_map, frame_token_map, save_with_empty_url, handler_remote]);
  }

};

content.mojom.mojom.Frame.getRemote = function() {
  let remote = new content.mojom.mojom.FrameRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'content.mojom.Frame',
    'context');
  return remote.$;
};

// ParamsSpec for CommitSameDocumentNavigation
content.mojom.mojom.Frame_CommitSameDocumentNavigation_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.Frame.CommitSameDocumentNavigation_Params',
      packedSize: 24,
      fields: [
        { name: 'common_params', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.CommonNavigationParamsSpec, nullable: false, minVersion: 0 },
        { name: 'request_params', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.CommitNavigationParamsSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

content.mojom.mojom.Frame_CommitSameDocumentNavigation_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.Frame.CommitSameDocumentNavigation_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'commit_result', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.CommitResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for UpdateSubresourceLoaderFactories
content.mojom.mojom.Frame_UpdateSubresourceLoaderFactories_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.Frame.UpdateSubresourceLoaderFactories_Params',
      packedSize: 16,
      fields: [
        { name: 'subresource_loader_factories', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.URLLoaderFactoryBundleSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetWantErrorMessageStackTrace
content.mojom.mojom.Frame_SetWantErrorMessageStackTrace_ParamsSpec = {
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
content.mojom.mojom.Frame_Unload_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.Frame.Unload_Params',
      packedSize: 56,
      fields: [
        { name: 'is_loading', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'new_remote_frame_replication_state', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.FrameReplicationStateSpec, nullable: false, minVersion: 0 },
        { name: 'new_remote_frame_token', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.RemoteFrameTokenSpec, nullable: false, minVersion: 0 },
        { name: 'new_remote_frame_interfaces', packedOffset: 16, packedBitOffset: 0, type: blink.mojom.RemoteFrameInterfacesFromBrowserSpec, nullable: false, minVersion: 0 },
        { name: 'new_remote_main_frame_interfaces', packedOffset: 24, packedBitOffset: 0, type: blink.mojom.RemoteMainFrameInterfacesSpec, nullable: false, minVersion: 0 },
        { name: 'devtools_frame_token', packedOffset: 32, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 56}]
    }
  }
};

// ParamsSpec for Delete
content.mojom.mojom.Frame_Delete_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.Frame.Delete_Params',
      packedSize: 16,
      fields: [
        { name: 'intention', packedOffset: 0, packedBitOffset: 0, type: content.mojom.FrameDeleteIntentionSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for UndoCommitNavigation
content.mojom.mojom.Frame_UndoCommitNavigation_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.Frame.UndoCommitNavigation_Params',
      packedSize: 48,
      fields: [
        { name: 'is_loading', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'new_remote_frame_replication_state', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.FrameReplicationStateSpec, nullable: false, minVersion: 0 },
        { name: 'new_remote_frame_token', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.RemoteFrameTokenSpec, nullable: false, minVersion: 0 },
        { name: 'new_remote_frame_interfaces', packedOffset: 16, packedBitOffset: 0, type: blink.mojom.RemoteFrameInterfacesFromBrowserSpec, nullable: false, minVersion: 0 },
        { name: 'new_remote_main_frame_interfaces', packedOffset: 24, packedBitOffset: 0, type: blink.mojom.RemoteMainFrameInterfacesSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 48}]
    }
  }
};

// ParamsSpec for GetInterfaceProvider
content.mojom.mojom.Frame_GetInterfaceProvider_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.Frame.GetInterfaceProvider_Params',
      packedSize: 16,
      fields: [
        { name: 'interfaces', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(service_manager.mojom.InterfaceProviderRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SnapshotAccessibilityTree
content.mojom.mojom.Frame_SnapshotAccessibilityTree_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.Frame.SnapshotAccessibilityTree_Params',
      packedSize: 16,
      fields: [
        { name: 'params', packedOffset: 0, packedBitOffset: 0, type: content.mojom.SnapshotAccessibilityTreeParamsSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

content.mojom.mojom.Frame_SnapshotAccessibilityTree_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.Frame.SnapshotAccessibilityTree_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'snapshot', packedOffset: 0, packedBitOffset: 0, type: ax.mojom.AXTreeUpdateSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetSerializedHtmlWithLocalLinks
content.mojom.mojom.Frame_GetSerializedHtmlWithLocalLinks_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.Frame.GetSerializedHtmlWithLocalLinks_Params',
      packedSize: 40,
      fields: [
        { name: 'url_map', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Map(url.mojom.UrlSpec, mojo_base.mojom.FilePathSpec, false), nullable: false, minVersion: 0 },
        { name: 'frame_token_map', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Map(blink.mojom.FrameTokenSpec, mojo_base.mojom.FilePathSpec, false), nullable: false, minVersion: 0 },
        { name: 'save_with_empty_url', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'handler_remote', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(content.mojom.FrameHTMLSerializerHandlerRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Legacy compatibility
content.mojom.mojom.FramePtr = content.mojom.mojom.FrameRemote;
content.mojom.mojom.FrameRequest = content.mojom.mojom.FramePendingReceiver;


// Interface: FrameBindingsControl
content.mojom.mojom.FrameBindingsControl = {};

content.mojom.mojom.FrameBindingsControlPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

content.mojom.mojom.FrameBindingsControlRemote = class {
  static get $interfaceName() {
    return 'content.mojom.FrameBindingsControl';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      content.mojom.mojom.FrameBindingsControlPendingReceiver,
      handle);
    this.$ = new content.mojom.mojom.FrameBindingsControlRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

content.mojom.mojom.FrameBindingsControlRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  allowBindings(enabled_bindings_flags) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      content.mojom.mojom.FrameBindingsControl_AllowBindings_ParamsSpec,
      null,
      [enabled_bindings_flags]);
  }

  enableMojoJsBindings(features) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      content.mojom.mojom.FrameBindingsControl_EnableMojoJsBindings_ParamsSpec,
      null,
      [features]);
  }

  enableMojoJsBindingsWithBroker(broker) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      content.mojom.mojom.FrameBindingsControl_EnableMojoJsBindingsWithBroker_ParamsSpec,
      null,
      [broker]);
  }

  bindWebUI(receiver, remote) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      content.mojom.mojom.FrameBindingsControl_BindWebUI_ParamsSpec,
      null,
      [receiver, remote]);
  }

};

content.mojom.mojom.FrameBindingsControl.getRemote = function() {
  let remote = new content.mojom.mojom.FrameBindingsControlRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'content.mojom.FrameBindingsControl',
    'context');
  return remote.$;
};

// ParamsSpec for AllowBindings
content.mojom.mojom.FrameBindingsControl_AllowBindings_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.FrameBindingsControl.AllowBindings_Params',
      packedSize: 16,
      fields: [
        { name: 'enabled_bindings_flags', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for EnableMojoJsBindings
content.mojom.mojom.FrameBindingsControl_EnableMojoJsBindings_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.FrameBindingsControl.EnableMojoJsBindings_Params',
      packedSize: 16,
      fields: [
        { name: 'features', packedOffset: 0, packedBitOffset: 0, type: content.mojom.ExtraMojoJsFeaturesSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for EnableMojoJsBindingsWithBroker
content.mojom.mojom.FrameBindingsControl_EnableMojoJsBindingsWithBroker_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.FrameBindingsControl.EnableMojoJsBindingsWithBroker_Params',
      packedSize: 16,
      fields: [
        { name: 'broker', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(blink.mojom.BrowserInterfaceBrokerRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for BindWebUI
content.mojom.mojom.FrameBindingsControl_BindWebUI_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.FrameBindingsControl.BindWebUI_Params',
      packedSize: 24,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.AssociatedInterfaceRequest(content.mojom.WebUIRemote), nullable: false, minVersion: 0 },
        { name: 'remote', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.AssociatedInterfaceProxy(content.mojom.WebUIHostRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
content.mojom.mojom.FrameBindingsControlPtr = content.mojom.mojom.FrameBindingsControlRemote;
content.mojom.mojom.FrameBindingsControlRequest = content.mojom.mojom.FrameBindingsControlPendingReceiver;


// Interface: NavigationRendererCancellationListener
content.mojom.mojom.NavigationRendererCancellationListener = {};

content.mojom.mojom.NavigationRendererCancellationListenerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

content.mojom.mojom.NavigationRendererCancellationListenerRemote = class {
  static get $interfaceName() {
    return 'content.mojom.NavigationRendererCancellationListener';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      content.mojom.mojom.NavigationRendererCancellationListenerPendingReceiver,
      handle);
    this.$ = new content.mojom.mojom.NavigationRendererCancellationListenerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

content.mojom.mojom.NavigationRendererCancellationListenerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  rendererCancellationWindowEnded() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      content.mojom.mojom.NavigationRendererCancellationListener_RendererCancellationWindowEnded_ParamsSpec,
      null,
      []);
  }

};

content.mojom.mojom.NavigationRendererCancellationListener.getRemote = function() {
  let remote = new content.mojom.mojom.NavigationRendererCancellationListenerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'content.mojom.NavigationRendererCancellationListener',
    'context');
  return remote.$;
};

// ParamsSpec for RendererCancellationWindowEnded
content.mojom.mojom.NavigationRendererCancellationListener_RendererCancellationWindowEnded_ParamsSpec = {
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
content.mojom.mojom.NavigationRendererCancellationListenerPtr = content.mojom.mojom.NavigationRendererCancellationListenerRemote;
content.mojom.mojom.NavigationRendererCancellationListenerRequest = content.mojom.mojom.NavigationRendererCancellationListenerPendingReceiver;


// Interface: FrameHost
content.mojom.mojom.FrameHost = {};

content.mojom.mojom.FrameHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

content.mojom.mojom.FrameHostRemote = class {
  static get $interfaceName() {
    return 'content.mojom.FrameHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      content.mojom.mojom.FrameHostPendingReceiver,
      handle);
    this.$ = new content.mojom.mojom.FrameHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

content.mojom.mojom.FrameHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createNewWindow(params) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      content.mojom.mojom.FrameHost_CreateNewWindow_ParamsSpec,
      content.mojom.mojom.FrameHost_CreateNewWindow_ResponseParamsSpec,
      [params]);
  }

  createChildFrame(child_frame_token, frame, browser_interface_broker, policy_container_bind_params, associated_interface_provider, scope, frame_name, frame_unique_name, is_created_by_script, frame_policy, frame_owner_properties, child_frame_owner_element_type, document_ukm_source_id) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      content.mojom.mojom.FrameHost_CreateChildFrame_ParamsSpec,
      null,
      [child_frame_token, frame, browser_interface_broker, policy_container_bind_params, associated_interface_provider, scope, frame_name, frame_unique_name, is_created_by_script, frame_policy, frame_owner_properties, child_frame_owner_element_type, document_ukm_source_id]);
  }

  didCommitProvisionalLoad(params, interface_params) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      content.mojom.mojom.FrameHost_DidCommitProvisionalLoad_ParamsSpec,
      null,
      [params, interface_params]);
  }

  didCommitSameDocumentNavigation(params, same_document_params) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      content.mojom.mojom.FrameHost_DidCommitSameDocumentNavigation_ParamsSpec,
      null,
      [params, same_document_params]);
  }

  didOpenDocumentInputStream(url) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      content.mojom.mojom.FrameHost_DidOpenDocumentInputStream_ParamsSpec,
      null,
      [url]);
  }

  beginNavigation(common_params, begin_params, blob_url_token, navigation_client, initiator_navigation_state_keep_alive_handle, renderer_cancellation_listener) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      content.mojom.mojom.FrameHost_BeginNavigation_ParamsSpec,
      null,
      [common_params, begin_params, blob_url_token, navigation_client, initiator_navigation_state_keep_alive_handle, renderer_cancellation_listener]);
  }

  subresourceResponseStarted(final_response_url, cert_status) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      content.mojom.mojom.FrameHost_SubresourceResponseStarted_ParamsSpec,
      null,
      [final_response_url, cert_status]);
  }

  resourceLoadComplete(url_load_info) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      content.mojom.mojom.FrameHost_ResourceLoadComplete_ParamsSpec,
      null,
      [url_load_info]);
  }

  didChangeName(name, unique_name) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      content.mojom.mojom.FrameHost_DidChangeName_ParamsSpec,
      null,
      [name, unique_name]);
  }

  cancelInitialHistoryLoad() {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      content.mojom.mojom.FrameHost_CancelInitialHistoryLoad_ParamsSpec,
      null,
      []);
  }

  updateEncoding(encoding_name) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      content.mojom.mojom.FrameHost_UpdateEncoding_ParamsSpec,
      null,
      [encoding_name]);
  }

  updateUserGestureCarryoverInfo() {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      content.mojom.mojom.FrameHost_UpdateUserGestureCarryoverInfo_ParamsSpec,
      null,
      []);
  }

  updateState(state) {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      content.mojom.mojom.FrameHost_UpdateState_ParamsSpec,
      null,
      [state]);
  }

  openURL(params) {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
      content.mojom.mojom.FrameHost_OpenURL_ParamsSpec,
      null,
      [params]);
  }

  didStopLoading() {
    // Ordinal: 14
    return this.proxy.sendMessage(
      14,  // ordinal
      content.mojom.mojom.FrameHost_DidStopLoading_ParamsSpec,
      null,
      []);
  }

};

content.mojom.mojom.FrameHost.getRemote = function() {
  let remote = new content.mojom.mojom.FrameHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'content.mojom.FrameHost',
    'context');
  return remote.$;
};

// ParamsSpec for CreateNewWindow
content.mojom.mojom.FrameHost_CreateNewWindow_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.FrameHost.CreateNewWindow_Params',
      packedSize: 16,
      fields: [
        { name: 'params', packedOffset: 0, packedBitOffset: 0, type: content.mojom.CreateNewWindowParamsSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

content.mojom.mojom.FrameHost_CreateNewWindow_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.FrameHost.CreateNewWindow_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'status', packedOffset: 8, packedBitOffset: 0, type: content.mojom.CreateNewWindowStatusSpec, nullable: false, minVersion: 0 },
        { name: 'reply', packedOffset: 0, packedBitOffset: 0, type: content.mojom.CreateNewWindowReplySpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for CreateChildFrame
content.mojom.mojom.FrameHost_CreateChildFrame_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.FrameHost.CreateChildFrame_Params',
      packedSize: 104,
      fields: [
        { name: 'child_frame_token', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.LocalFrameTokenSpec, nullable: false, minVersion: 0 },
        { name: 'frame', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.AssociatedInterfaceProxy(content.mojom.FrameRemote), nullable: false, minVersion: 0 },
        { name: 'browser_interface_broker', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(blink.mojom.BrowserInterfaceBrokerRemote), nullable: false, minVersion: 0 },
        { name: 'policy_container_bind_params', packedOffset: 24, packedBitOffset: 0, type: blink.mojom.PolicyContainerBindParamsSpec, nullable: false, minVersion: 0 },
        { name: 'associated_interface_provider', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.AssociatedInterfaceRequest(blink.mojom.AssociatedInterfaceProviderRemote), nullable: false, minVersion: 0 },
        { name: 'scope', packedOffset: 80, packedBitOffset: 0, type: blink.mojom.TreeScopeTypeSpec, nullable: false, minVersion: 0 },
        { name: 'frame_name', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'frame_unique_name', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'is_created_by_script', packedOffset: 88, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'frame_policy', packedOffset: 56, packedBitOffset: 0, type: blink.mojom.FramePolicySpec, nullable: false, minVersion: 0 },
        { name: 'frame_owner_properties', packedOffset: 64, packedBitOffset: 0, type: blink.mojom.FrameOwnerPropertiesSpec, nullable: false, minVersion: 0 },
        { name: 'child_frame_owner_element_type', packedOffset: 84, packedBitOffset: 0, type: content.mojom.ChildFrameOwnerElementTypeSpec, nullable: false, minVersion: 0 },
        { name: 'document_ukm_source_id', packedOffset: 72, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 104}]
    }
  }
};

// ParamsSpec for DidCommitProvisionalLoad
content.mojom.mojom.FrameHost_DidCommitProvisionalLoad_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.FrameHost.DidCommitProvisionalLoad_Params',
      packedSize: 24,
      fields: [
        { name: 'params', packedOffset: 0, packedBitOffset: 0, type: content.mojom.DidCommitProvisionalLoadParamsSpec, nullable: false, minVersion: 0 },
        { name: 'interface_params', packedOffset: 8, packedBitOffset: 0, type: content.mojom.DidCommitProvisionalLoadInterfaceParamsSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for DidCommitSameDocumentNavigation
content.mojom.mojom.FrameHost_DidCommitSameDocumentNavigation_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.FrameHost.DidCommitSameDocumentNavigation_Params',
      packedSize: 24,
      fields: [
        { name: 'params', packedOffset: 0, packedBitOffset: 0, type: content.mojom.DidCommitProvisionalLoadParamsSpec, nullable: false, minVersion: 0 },
        { name: 'same_document_params', packedOffset: 8, packedBitOffset: 0, type: content.mojom.DidCommitSameDocumentNavigationParamsSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for DidOpenDocumentInputStream
content.mojom.mojom.FrameHost_DidOpenDocumentInputStream_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.FrameHost.DidOpenDocumentInputStream_Params',
      packedSize: 16,
      fields: [
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for BeginNavigation
content.mojom.mojom.FrameHost_BeginNavigation_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.FrameHost.BeginNavigation_Params',
      packedSize: 56,
      fields: [
        { name: 'common_params', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.CommonNavigationParamsSpec, nullable: false, minVersion: 0 },
        { name: 'begin_params', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.BeginNavigationParamsSpec, nullable: false, minVersion: 0 },
        { name: 'blob_url_token', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(blink.mojom.BlobURLTokenRemote), nullable: true, minVersion: 0 },
        { name: 'navigation_client', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.AssociatedInterfaceProxy(content.mojom.NavigationClientRemote), nullable: true, minVersion: 0 },
        { name: 'initiator_navigation_state_keep_alive_handle', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(blink.mojom.NavigationStateKeepAliveHandleRemote), nullable: true, minVersion: 0 },
        { name: 'renderer_cancellation_listener', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(content.mojom.NavigationRendererCancellationListenerRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 56}]
    }
  }
};

// ParamsSpec for SubresourceResponseStarted
content.mojom.mojom.FrameHost_SubresourceResponseStarted_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.FrameHost.SubresourceResponseStarted_Params',
      packedSize: 24,
      fields: [
        { name: 'final_response_url', packedOffset: 0, packedBitOffset: 0, type: url.mojom.SchemeHostPortSpec, nullable: false, minVersion: 0 },
        { name: 'cert_status', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for ResourceLoadComplete
content.mojom.mojom.FrameHost_ResourceLoadComplete_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.FrameHost.ResourceLoadComplete_Params',
      packedSize: 16,
      fields: [
        { name: 'url_load_info', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.ResourceLoadInfoSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for DidChangeName
content.mojom.mojom.FrameHost_DidChangeName_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.FrameHost.DidChangeName_Params',
      packedSize: 24,
      fields: [
        { name: 'name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'unique_name', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for CancelInitialHistoryLoad
content.mojom.mojom.FrameHost_CancelInitialHistoryLoad_ParamsSpec = {
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
content.mojom.mojom.FrameHost_UpdateEncoding_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.FrameHost.UpdateEncoding_Params',
      packedSize: 16,
      fields: [
        { name: 'encoding_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for UpdateUserGestureCarryoverInfo
content.mojom.mojom.FrameHost_UpdateUserGestureCarryoverInfo_ParamsSpec = {
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
content.mojom.mojom.FrameHost_UpdateState_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.FrameHost.UpdateState_Params',
      packedSize: 16,
      fields: [
        { name: 'state', packedOffset: 0, packedBitOffset: 0, type: content.mojom.PageStateSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OpenURL
content.mojom.mojom.FrameHost_OpenURL_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.FrameHost.OpenURL_Params',
      packedSize: 16,
      fields: [
        { name: 'params', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.OpenURLParamsSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for DidStopLoading
content.mojom.mojom.FrameHost_DidStopLoading_ParamsSpec = {
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
content.mojom.mojom.FrameHostPtr = content.mojom.mojom.FrameHostRemote;
content.mojom.mojom.FrameHostRequest = content.mojom.mojom.FrameHostPendingReceiver;

