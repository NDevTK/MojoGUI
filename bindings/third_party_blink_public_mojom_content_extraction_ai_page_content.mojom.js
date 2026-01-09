// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/content_extraction/ai_page_content.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Enum: AIPageContentAttributeType
blink.mojom.AIPageContentAttributeType = {
  kRoot: 0,
  kIframe: 1,
  kContainer: 2,
  kText: 3,
  kAnchor: 4,
  kParagraph: 5,
  kHeading: 6,
  kImage: 7,
  kSvgRoot: 8,
  kCanvas: 9,
  kVideo: 10,
  kForm: 11,
  kFormControl: 12,
  kTable: 13,
  kTableRow: 14,
  kTableCell: 15,
  kOrderedList: 16,
  kUnorderedList: 17,
  kListItem: 18,
};

// Enum: AIPageContentAnnotatedRole
blink.mojom.AIPageContentAnnotatedRole = {
  kHeader: 0,
  kNav: 1,
  kSearch: 2,
  kMain: 3,
  kArticle: 4,
  kSection: 5,
  kAside: 6,
  kFooter: 7,
  kContentHidden: 8,
  kPaidContent: 9,
};

// Enum: AIPageContentClickabilityReason
blink.mojom.AIPageContentClickabilityReason = {
  kClickableControl: 0,
  kClickEvents: 1,
  kMouseClick: 2,
  kMouseHover: 3,
  kKeyEvents: 4,
  kEditable: 5,
  kCursorPointer: 6,
  kAriaRole: 7,
  kAriaHasPopup: 8,
  kAriaExpandedTrue: 9,
  kAriaExpandedFalse: 10,
  kTabIndex: 11,
  kAutocomplete: 12,
  kHoverPseudoClass: 13,
};

// Enum: AIPageContentInteractionDisabledReason
blink.mojom.AIPageContentInteractionDisabledReason = {
  kDisabled: 0,
  kAriaDisabled: 1,
  kCursorNotAllowed: 2,
};

// Enum: AIPageContentTextSize
blink.mojom.AIPageContentTextSize = {
  kXS: 0,
  kS: 1,
  kM: 2,
  kL: 3,
  kXL: 4,
};

// Enum: AIPageContentAnchorRel
blink.mojom.AIPageContentAnchorRel = {
  kRelationUnknown: 0,
  kRelationNoReferrer: 1,
  kRelationNoOpener: 2,
  kRelationOpener: 3,
  kRelationPrivacyPolicy: 4,
  kRelationTermsOfService: 5,
};

// Enum: Reason
blink.mojom.Reason = {
  kCrossSite: 0,
  kCrossOrigin: 1,
};

// Enum: AIPageContentTableRowType
blink.mojom.AIPageContentTableRowType = {
  kHeader: 0,
  kBody: 1,
  kFooter: 2,
};

// Enum: AIPageContentRedactionDecision
blink.mojom.AIPageContentRedactionDecision = {
  kNoRedactionNecessary: 0,
  kUnredacted_EmptyPassword: 1,
  kRedacted_HasBeenPassword: 2,
};

// Enum: AIPageContentMode
blink.mojom.AIPageContentMode = {
  kDefault: 0,
  kActionableElements: 1,
};

// Struct: AIPageContentGeometry
blink.mojom.AIPageContentGeometrySpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AIPageContentGeometry',
      packedSize: 32,
      fields: [
        { name: 'outer_bounding_box', packedOffset: 0, packedBitOffset: 0, type: gfx.mojom.RectSpec, nullable: false },
        { name: 'visible_bounding_box', packedOffset: 8, packedBitOffset: 0, type: gfx.mojom.RectSpec, nullable: false },
        { name: 'fragment_visible_bounding_boxes', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: AIPageContentSelection
blink.mojom.AIPageContentSelectionSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AIPageContentSelection',
      packedSize: 32,
      fields: [
        { name: 'start_dom_node_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'start_offset', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'end_dom_node_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'end_offset', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'selected_text', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: AIPageContentPageInteractionInfo
blink.mojom.AIPageContentPageInteractionInfoSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AIPageContentPageInteractionInfo',
      packedSize: 24,
      fields: [
        { name: 'focused_dom_node_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: true },
        { name: 'accessibility_focused_dom_node_id', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Int32, nullable: true },
        { name: 'mouse_position', packedOffset: 8, packedBitOffset: 0, type: gfx.mojom.PointSpec, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: AIPageContentFrameInteractionInfo
blink.mojom.AIPageContentFrameInteractionInfoSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AIPageContentFrameInteractionInfo',
      packedSize: 16,
      fields: [
        { name: 'selection', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.AIPageContentSelectionSpec, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: AIPageContentNodeInteractionInfo
blink.mojom.AIPageContentNodeInteractionInfoSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AIPageContentNodeInteractionInfo',
      packedSize: 56,
      fields: [
        { name: 'scroller_info', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.AIPageContentScrollerInfoSpec, nullable: true },
        { name: 'is_focusable', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'document_scoped_z_order', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Int32, nullable: true },
        { name: 'clickability_reasons', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'is_disabled', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'interaction_disabled_reasons', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: AIPageContentScrollerInfo
blink.mojom.AIPageContentScrollerInfoSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AIPageContentScrollerInfo',
      packedSize: 32,
      fields: [
        { name: 'scrolling_bounds', packedOffset: 0, packedBitOffset: 0, type: gfx.mojom.SizeSpec, nullable: false },
        { name: 'visible_area', packedOffset: 8, packedBitOffset: 0, type: gfx.mojom.RectSpec, nullable: false },
        { name: 'user_scrollable_horizontal', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'user_scrollable_vertical', packedOffset: 16, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: AIPageContentTextStyle
blink.mojom.AIPageContentTextStyleSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AIPageContentTextStyle',
      packedSize: 32,
      fields: [
        { name: 'text_size', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.AIPageContentTextSizeSpec, nullable: false },
        { name: 'has_emphasis', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'color', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: AIPageContentTextInfo
blink.mojom.AIPageContentTextInfoSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AIPageContentTextInfo',
      packedSize: 24,
      fields: [
        { name: 'text_content', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'text_style', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.AIPageContentTextStyleSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: AIPageContentAnchorData
blink.mojom.AIPageContentAnchorDataSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AIPageContentAnchorData',
      packedSize: 24,
      fields: [
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false },
        { name: 'rel', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: AIPageContentImageInfo
blink.mojom.AIPageContentImageInfoSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AIPageContentImageInfo',
      packedSize: 24,
      fields: [
        { name: 'image_caption', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'source_origin', packedOffset: 8, packedBitOffset: 0, type: url.mojom.OriginSpec, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: AIPageContentSvgRootData
blink.mojom.AIPageContentSvgRootDataSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AIPageContentSvgRootData',
      packedSize: 16,
      fields: [
        { name: 'inner_text', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: AIPageContentCanvasData
blink.mojom.AIPageContentCanvasDataSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AIPageContentCanvasData',
      packedSize: 16,
      fields: [
        { name: 'layout_size', packedOffset: 0, packedBitOffset: 0, type: gfx.mojom.SizeSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: AIPageContentVideoData
blink.mojom.AIPageContentVideoDataSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AIPageContentVideoData',
      packedSize: 24,
      fields: [
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false },
        { name: 'source_origin', packedOffset: 8, packedBitOffset: 0, type: url.mojom.OriginSpec, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: AIPageContentMeta
blink.mojom.AIPageContentMetaSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AIPageContentMeta',
      packedSize: 24,
      fields: [
        { name: 'name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'content', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: AIPageContentFrameData
blink.mojom.AIPageContentFrameDataSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AIPageContentFrameData',
      packedSize: 56,
      fields: [
        { name: 'frame_interaction_info', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.AIPageContentFrameInteractionInfoSpec, nullable: false },
        { name: 'meta_data', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'title', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'contains_paid_content', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Bool, nullable: true },
        { name: 'script_tools', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'popup', packedOffset: 40, packedBitOffset: 0, type: blink.mojom.AIPageContentPopupSpec, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: RedactedFrameMetadata
blink.mojom.RedactedFrameMetadataSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.RedactedFrameMetadata',
      packedSize: 16,
      fields: [
        { name: 'kCrossSite', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: AIPageContentIframeData
blink.mojom.AIPageContentIframeDataSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AIPageContentIframeData',
      packedSize: 24,
      fields: [
        { name: 'frame_token', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.FrameTokenSpec, nullable: false },
        { name: 'content', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.AIPageContentIframeContentSpec, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: AIPageContentTableData
blink.mojom.AIPageContentTableDataSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AIPageContentTableData',
      packedSize: 16,
      fields: [
        { name: 'table_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: AIPageContentTableRowData
blink.mojom.AIPageContentTableRowDataSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AIPageContentTableRowData',
      packedSize: 16,
      fields: [
        { name: 'row_type', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.AIPageContentTableRowTypeSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: AIPageContentFormData
blink.mojom.AIPageContentFormDataSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AIPageContentFormData',
      packedSize: 24,
      fields: [
        { name: 'form_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'action_url', packedOffset: 8, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: AIPageContentSelectOption
blink.mojom.AIPageContentSelectOptionSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AIPageContentSelectOption',
      packedSize: 32,
      fields: [
        { name: 'value', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'text', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'is_selected', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'disabled', packedOffset: 16, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: AIPageContentFormControlData
blink.mojom.AIPageContentFormControlDataSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AIPageContentFormControlData',
      packedSize: 64,
      fields: [
        { name: 'form_control_type', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.FormControlTypeSpec, nullable: false },
        { name: 'field_name', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'field_value', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'select_options', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'placeholder', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'is_checked', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'is_required', packedOffset: 40, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
        { name: 'redaction_decision', packedOffset: 48, packedBitOffset: 0, type: blink.mojom.AIPageContentRedactionDecisionSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: AIPageContentAttributes
blink.mojom.AIPageContentAttributesSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AIPageContentAttributes',
      packedSize: 168,
      fields: [
        { name: 'dom_node_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: true },
        { name: 'attribute_type', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.AIPageContentAttributeTypeSpec, nullable: false },
        { name: 'geometry', packedOffset: 16, packedBitOffset: 0, type: blink.mojom.AIPageContentGeometrySpec, nullable: true },
        { name: 'node_interaction_info', packedOffset: 24, packedBitOffset: 0, type: blink.mojom.AIPageContentNodeInteractionInfoSpec, nullable: true },
        { name: 'text_info', packedOffset: 32, packedBitOffset: 0, type: blink.mojom.AIPageContentTextInfoSpec, nullable: true },
        { name: 'image_info', packedOffset: 40, packedBitOffset: 0, type: blink.mojom.AIPageContentImageInfoSpec, nullable: true },
        { name: 'svg_root_data', packedOffset: 48, packedBitOffset: 0, type: blink.mojom.AIPageContentSvgRootDataSpec, nullable: true },
        { name: 'canvas_data', packedOffset: 56, packedBitOffset: 0, type: blink.mojom.AIPageContentCanvasDataSpec, nullable: true },
        { name: 'video_data', packedOffset: 64, packedBitOffset: 0, type: blink.mojom.AIPageContentVideoDataSpec, nullable: true },
        { name: 'anchor_data', packedOffset: 72, packedBitOffset: 0, type: blink.mojom.AIPageContentAnchorDataSpec, nullable: true },
        { name: 'form_data', packedOffset: 80, packedBitOffset: 0, type: blink.mojom.AIPageContentFormDataSpec, nullable: true },
        { name: 'form_control_data', packedOffset: 88, packedBitOffset: 0, type: blink.mojom.AIPageContentFormControlDataSpec, nullable: true },
        { name: 'table_data', packedOffset: 96, packedBitOffset: 0, type: blink.mojom.AIPageContentTableDataSpec, nullable: true },
        { name: 'iframe_data', packedOffset: 104, packedBitOffset: 0, type: blink.mojom.AIPageContentIframeDataSpec, nullable: true },
        { name: 'table_row_data', packedOffset: 112, packedBitOffset: 0, type: blink.mojom.AIPageContentTableRowDataSpec, nullable: true },
        { name: 'annotated_roles', packedOffset: 120, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'label', packedOffset: 128, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'aria_role', packedOffset: 136, packedBitOffset: 0, type: ax.mojom.RoleSpec, nullable: true },
        { name: 'label_for_dom_node_id', packedOffset: 144, packedBitOffset: 0, type: mojo.internal.Int32, nullable: true },
        { name: 'is_ad_related', packedOffset: 148, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: AIPageContentNode
blink.mojom.AIPageContentNodeSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AIPageContentNode',
      packedSize: 24,
      fields: [
        { name: 'children_nodes', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'content_attributes', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.AIPageContentAttributesSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: AIPageContentPopup
blink.mojom.AIPageContentPopupSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AIPageContentPopup',
      packedSize: 32,
      fields: [
        { name: 'root_node', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.AIPageContentNodeSpec, nullable: false },
        { name: 'opener_dom_node_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'visible_bounding_box', packedOffset: 16, packedBitOffset: 0, type: gfx.mojom.RectSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: AIPageContent
blink.mojom.AIPageContentSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AIPageContent',
      packedSize: 40,
      fields: [
        { name: 'root_node', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.AIPageContentNodeSpec, nullable: false },
        { name: 'page_interaction_info', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.AIPageContentPageInteractionInfoSpec, nullable: true },
        { name: 'frame_data', packedOffset: 16, packedBitOffset: 0, type: blink.mojom.AIPageContentFrameDataSpec, nullable: false },
        { name: 'visible_bounding_boxes_for_password_redaction', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: AIPageContentOptions
blink.mojom.AIPageContentOptionsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AIPageContentOptions',
      packedSize: 56,
      fields: [
        { name: 'mode', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.AIPageContentModeSpec, nullable: false },
        { name: 'on_critical_path', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'max_meta_elements', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'include_same_site_only', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'main_frame_view_rect_in_dips', packedOffset: 32, packedBitOffset: 0, type: gfx.mojom.RectSpec, nullable: false },
        { name: 'include_passwords_for_redaction', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Interface: AIPageContentAgent
blink.mojom.AIPageContentAgent = {};

blink.mojom.AIPageContentAgentPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.AIPageContentAgentRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.AIPageContentAgent';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.AIPageContentAgentPendingReceiver,
      handle);
    this.$ = new blink.mojom.AIPageContentAgentRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.AIPageContentAgentRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getAIPageContent(request) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.AIPageContentAgent_GetAIPageContent_ParamsSpec,
      blink.mojom.AIPageContentAgent_GetAIPageContent_ResponseParamsSpec,
      [request]);
  }

};

blink.mojom.AIPageContentAgent.getRemote = function() {
  let remote = new blink.mojom.AIPageContentAgentRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.AIPageContentAgent',
    'context');
  return remote.$;
};

// ParamsSpec for GetAIPageContent
blink.mojom.AIPageContentAgent_GetAIPageContent_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AIPageContentAgent.GetAIPageContent_Params',
      packedSize: 16,
      fields: [
        { name: 'request', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.AIPageContentOptionsSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.AIPageContentAgent_GetAIPageContent_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AIPageContentAgent.GetAIPageContent_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'page_content', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.AIPageContentSpec, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
blink.mojom.AIPageContentAgentPtr = blink.mojom.AIPageContentAgentRemote;
blink.mojom.AIPageContentAgentRequest = blink.mojom.AIPageContentAgentPendingReceiver;

