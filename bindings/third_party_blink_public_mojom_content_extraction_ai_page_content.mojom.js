// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/content_extraction/ai_page_content.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var ax = ax || {};
var gfx = gfx || {};
var url = url || {};

blink.mojom.AIPageContentAttributeTypeSpec = { $: mojo.internal.Enum() };
blink.mojom.AIPageContentAnnotatedRoleSpec = { $: mojo.internal.Enum() };
blink.mojom.AIPageContentClickabilityReasonSpec = { $: mojo.internal.Enum() };
blink.mojom.AIPageContentInteractionDisabledReasonSpec = { $: mojo.internal.Enum() };
blink.mojom.AIPageContentTextSizeSpec = { $: mojo.internal.Enum() };
blink.mojom.AIPageContentAnchorRelSpec = { $: mojo.internal.Enum() };
blink.mojom.ReasonSpec = { $: mojo.internal.Enum() };
blink.mojom.AIPageContentTableRowTypeSpec = { $: mojo.internal.Enum() };
blink.mojom.AIPageContentRedactionDecisionSpec = { $: mojo.internal.Enum() };
blink.mojom.AIPageContentModeSpec = { $: mojo.internal.Enum() };
blink.mojom.AIPageContentIframeContentSpec = { $: {} };
blink.mojom.AIPageContentGeometrySpec = { $: {} };
blink.mojom.AIPageContentSelectionSpec = { $: {} };
blink.mojom.AIPageContentPageInteractionInfoSpec = { $: {} };
blink.mojom.AIPageContentFrameInteractionInfoSpec = { $: {} };
blink.mojom.AIPageContentNodeInteractionInfoSpec = { $: {} };
blink.mojom.AIPageContentScrollerInfoSpec = { $: {} };
blink.mojom.AIPageContentTextStyleSpec = { $: {} };
blink.mojom.AIPageContentTextInfoSpec = { $: {} };
blink.mojom.AIPageContentAnchorDataSpec = { $: {} };
blink.mojom.AIPageContentImageInfoSpec = { $: {} };
blink.mojom.AIPageContentSvgRootDataSpec = { $: {} };
blink.mojom.AIPageContentCanvasDataSpec = { $: {} };
blink.mojom.AIPageContentVideoDataSpec = { $: {} };
blink.mojom.AIPageContentMetaSpec = { $: {} };
blink.mojom.AIPageContentFrameDataSpec = { $: {} };
blink.mojom.RedactedFrameMetadataSpec = { $: {} };
blink.mojom.AIPageContentIframeDataSpec = { $: {} };
blink.mojom.AIPageContentTableDataSpec = { $: {} };
blink.mojom.AIPageContentTableRowDataSpec = { $: {} };
blink.mojom.AIPageContentFormDataSpec = { $: {} };
blink.mojom.AIPageContentSelectOptionSpec = { $: {} };
blink.mojom.AIPageContentFormControlDataSpec = { $: {} };
blink.mojom.AIPageContentAttributesSpec = { $: {} };
blink.mojom.AIPageContentNodeSpec = { $: {} };
blink.mojom.AIPageContentPopupSpec = { $: {} };
blink.mojom.AIPageContentSpec = { $: {} };
blink.mojom.AIPageContentOptionsSpec = { $: {} };
blink.mojom.AIPageContentAgent = {};
blink.mojom.AIPageContentAgent.$interfaceName = 'blink.mojom.AIPageContentAgent';
blink.mojom.AIPageContentAgent_GetAIPageContent_ParamsSpec = { $: {} };
blink.mojom.AIPageContentAgent_GetAIPageContent_ResponseParamsSpec = { $: {} };

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

// Union: AIPageContentIframeContent
mojo.internal.Union(
    blink.mojom.AIPageContentIframeContentSpec, 'blink.mojom.AIPageContentIframeContent', {
      'local_frame_data': {
        'ordinal': 0,
        'type': blink.mojom.AIPageContentFrameDataSpec.$,
        'nullable': false,
      },
      'redacted_frame_metadata': {
        'ordinal': 1,
        'type': blink.mojom.RedactedFrameMetadataSpec.$,
        'nullable': false,
      },
    });

// Struct: AIPageContentGeometry
mojo.internal.Struct(
    blink.mojom.AIPageContentGeometrySpec, 'blink.mojom.AIPageContentGeometry', [
      mojo.internal.StructField('outer_bounding_box', 0, 0, gfx.mojom.RectSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('visible_bounding_box', 8, 0, gfx.mojom.RectSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('fragment_visible_bounding_boxes', 16, 0, mojo.internal.Array(gfx.mojom.RectSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: AIPageContentSelection
mojo.internal.Struct(
    blink.mojom.AIPageContentSelectionSpec, 'blink.mojom.AIPageContentSelection', [
      mojo.internal.StructField('selected_text', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('start_dom_node_id', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('start_offset', 12, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('end_dom_node_id', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('end_offset', 20, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: AIPageContentPageInteractionInfo
mojo.internal.Struct(
    blink.mojom.AIPageContentPageInteractionInfoSpec, 'blink.mojom.AIPageContentPageInteractionInfo', [
      mojo.internal.StructField('mouse_position', 0, 0, gfx.mojom.PointSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('focused_dom_node_id_$value', 8, 0, mojo.internal.Int32, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'focused_dom_node_id_$flag', originalFieldName: 'focused_dom_node_id' }),
      mojo.internal.StructField('accessibility_focused_dom_node_id_$value', 12, 0, mojo.internal.Int32, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'accessibility_focused_dom_node_id_$flag', originalFieldName: 'accessibility_focused_dom_node_id' }),
      mojo.internal.StructField('focused_dom_node_id_$flag', 16, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'focused_dom_node_id_$value', originalFieldName: 'focused_dom_node_id' }),
      mojo.internal.StructField('accessibility_focused_dom_node_id_$flag', 16, 1, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'accessibility_focused_dom_node_id_$value', originalFieldName: 'accessibility_focused_dom_node_id' }),
    ],
    [[0, 32]]);

// Struct: AIPageContentFrameInteractionInfo
mojo.internal.Struct(
    blink.mojom.AIPageContentFrameInteractionInfoSpec, 'blink.mojom.AIPageContentFrameInteractionInfo', [
      mojo.internal.StructField('selection', 0, 0, blink.mojom.AIPageContentSelectionSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

// Struct: AIPageContentNodeInteractionInfo
mojo.internal.Struct(
    blink.mojom.AIPageContentNodeInteractionInfoSpec, 'blink.mojom.AIPageContentNodeInteractionInfo', [
      mojo.internal.StructField('scroller_info', 0, 0, blink.mojom.AIPageContentScrollerInfoSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('clickability_reasons', 8, 0, mojo.internal.Array(blink.mojom.AIPageContentClickabilityReasonSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('interaction_disabled_reasons', 16, 0, mojo.internal.Array(blink.mojom.AIPageContentInteractionDisabledReasonSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('document_scoped_z_order_$value', 24, 0, mojo.internal.Int32, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'document_scoped_z_order_$flag', originalFieldName: 'document_scoped_z_order' }),
      mojo.internal.StructField('is_focusable', 28, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('document_scoped_z_order_$flag', 28, 1, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'document_scoped_z_order_$value', originalFieldName: 'document_scoped_z_order' }),
      mojo.internal.StructField('is_disabled', 28, 2, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: AIPageContentScrollerInfo
mojo.internal.Struct(
    blink.mojom.AIPageContentScrollerInfoSpec, 'blink.mojom.AIPageContentScrollerInfo', [
      mojo.internal.StructField('scrolling_bounds', 0, 0, gfx.mojom.SizeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('visible_area', 8, 0, gfx.mojom.RectSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('user_scrollable_horizontal', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('user_scrollable_vertical', 16, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: AIPageContentTextStyle
mojo.internal.Struct(
    blink.mojom.AIPageContentTextStyleSpec, 'blink.mojom.AIPageContentTextStyle', [
      mojo.internal.StructField('text_size', 0, 0, blink.mojom.AIPageContentTextSizeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('color', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('has_emphasis', 12, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: AIPageContentTextInfo
mojo.internal.Struct(
    blink.mojom.AIPageContentTextInfoSpec, 'blink.mojom.AIPageContentTextInfo', [
      mojo.internal.StructField('text_content', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('text_style', 8, 0, blink.mojom.AIPageContentTextStyleSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: AIPageContentAnchorData
mojo.internal.Struct(
    blink.mojom.AIPageContentAnchorDataSpec, 'blink.mojom.AIPageContentAnchorData', [
      mojo.internal.StructField('url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('rel', 8, 0, mojo.internal.Array(blink.mojom.AIPageContentAnchorRelSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: AIPageContentImageInfo
mojo.internal.Struct(
    blink.mojom.AIPageContentImageInfoSpec, 'blink.mojom.AIPageContentImageInfo', [
      mojo.internal.StructField('image_caption', 0, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('source_origin', 8, 0, url.mojom.OriginSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

// Struct: AIPageContentSvgRootData
mojo.internal.Struct(
    blink.mojom.AIPageContentSvgRootDataSpec, 'blink.mojom.AIPageContentSvgRootData', [
      mojo.internal.StructField('inner_text', 0, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 16]]);

// Struct: AIPageContentCanvasData
mojo.internal.Struct(
    blink.mojom.AIPageContentCanvasDataSpec, 'blink.mojom.AIPageContentCanvasData', [
      mojo.internal.StructField('layout_size', 0, 0, gfx.mojom.SizeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: AIPageContentVideoData
mojo.internal.Struct(
    blink.mojom.AIPageContentVideoDataSpec, 'blink.mojom.AIPageContentVideoData', [
      mojo.internal.StructField('url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('source_origin', 8, 0, url.mojom.OriginSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

// Struct: AIPageContentMeta
mojo.internal.Struct(
    blink.mojom.AIPageContentMetaSpec, 'blink.mojom.AIPageContentMeta', [
      mojo.internal.StructField('name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('content', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: AIPageContentFrameData
mojo.internal.Struct(
    blink.mojom.AIPageContentFrameDataSpec, 'blink.mojom.AIPageContentFrameData', [
      mojo.internal.StructField('frame_interaction_info', 0, 0, blink.mojom.AIPageContentFrameInteractionInfoSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('meta_data', 8, 0, mojo.internal.Array(blink.mojom.AIPageContentMetaSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('title', 16, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('script_tools', 24, 0, mojo.internal.Array(blink.mojom.ScriptToolSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('popup', 32, 0, blink.mojom.AIPageContentPopupSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('contains_paid_content_$flag', 40, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'contains_paid_content_$value', originalFieldName: 'contains_paid_content' }),
      mojo.internal.StructField('contains_paid_content_$value', 40, 1, mojo.internal.Bool, false, false, 0, { isPrimary: false, linkedValueFieldName: 'contains_paid_content_$flag', originalFieldName: 'contains_paid_content' }),
    ],
    [[0, 56]]);

// Struct: RedactedFrameMetadata
mojo.internal.Struct(
    blink.mojom.RedactedFrameMetadataSpec, 'blink.mojom.RedactedFrameMetadata', [
      mojo.internal.StructField('kCrossSite', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: AIPageContentIframeData
mojo.internal.Struct(
    blink.mojom.AIPageContentIframeDataSpec, 'blink.mojom.AIPageContentIframeData', [
      mojo.internal.StructField('frame_token', 0, 0, blink.mojom.FrameTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('content', 8, 0, blink.mojom.AIPageContentIframeContentSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

// Struct: AIPageContentTableData
mojo.internal.Struct(
    blink.mojom.AIPageContentTableDataSpec, 'blink.mojom.AIPageContentTableData', [
      mojo.internal.StructField('table_name', 0, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 16]]);

// Struct: AIPageContentTableRowData
mojo.internal.Struct(
    blink.mojom.AIPageContentTableRowDataSpec, 'blink.mojom.AIPageContentTableRowData', [
      mojo.internal.StructField('row_type', 0, 0, blink.mojom.AIPageContentTableRowTypeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: AIPageContentFormData
mojo.internal.Struct(
    blink.mojom.AIPageContentFormDataSpec, 'blink.mojom.AIPageContentFormData', [
      mojo.internal.StructField('form_name', 0, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('action_url', 8, 0, url.mojom.UrlSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

// Struct: AIPageContentSelectOption
mojo.internal.Struct(
    blink.mojom.AIPageContentSelectOptionSpec, 'blink.mojom.AIPageContentSelectOption', [
      mojo.internal.StructField('value', 0, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('text', 8, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('is_selected', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('disabled', 16, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: AIPageContentFormControlData
mojo.internal.Struct(
    blink.mojom.AIPageContentFormControlDataSpec, 'blink.mojom.AIPageContentFormControlData', [
      mojo.internal.StructField('form_control_type', 0, 0, blink.mojom.FormControlTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('field_name', 8, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('field_value', 16, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('select_options', 24, 0, mojo.internal.Array(blink.mojom.AIPageContentSelectOptionSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('placeholder', 32, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('redaction_decision', 40, 0, blink.mojom.AIPageContentRedactionDecisionSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('is_checked', 48, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_required', 48, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 64]]);

// Struct: AIPageContentAttributes
mojo.internal.Struct(
    blink.mojom.AIPageContentAttributesSpec, 'blink.mojom.AIPageContentAttributes', [
      mojo.internal.StructField('attribute_type', 0, 0, blink.mojom.AIPageContentAttributeTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('geometry', 8, 0, blink.mojom.AIPageContentGeometrySpec.$, null, true, 0, undefined),
      mojo.internal.StructField('node_interaction_info', 16, 0, blink.mojom.AIPageContentNodeInteractionInfoSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('text_info', 24, 0, blink.mojom.AIPageContentTextInfoSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('image_info', 32, 0, blink.mojom.AIPageContentImageInfoSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('svg_root_data', 40, 0, blink.mojom.AIPageContentSvgRootDataSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('canvas_data', 48, 0, blink.mojom.AIPageContentCanvasDataSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('video_data', 56, 0, blink.mojom.AIPageContentVideoDataSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('anchor_data', 64, 0, blink.mojom.AIPageContentAnchorDataSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('form_data', 72, 0, blink.mojom.AIPageContentFormDataSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('form_control_data', 80, 0, blink.mojom.AIPageContentFormControlDataSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('table_data', 88, 0, blink.mojom.AIPageContentTableDataSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('iframe_data', 96, 0, blink.mojom.AIPageContentIframeDataSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('table_row_data', 104, 0, blink.mojom.AIPageContentTableRowDataSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('annotated_roles', 112, 0, mojo.internal.Array(blink.mojom.AIPageContentAnnotatedRoleSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('label', 120, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('aria_role', 128, 0, ax.mojom.RoleSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('dom_node_id_$value', 136, 0, mojo.internal.Int32, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'dom_node_id_$flag', originalFieldName: 'dom_node_id' }),
      mojo.internal.StructField('label_for_dom_node_id_$value', 140, 0, mojo.internal.Int32, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'label_for_dom_node_id_$flag', originalFieldName: 'label_for_dom_node_id' }),
      mojo.internal.StructField('dom_node_id_$flag', 144, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'dom_node_id_$value', originalFieldName: 'dom_node_id' }),
      mojo.internal.StructField('label_for_dom_node_id_$flag', 144, 1, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'label_for_dom_node_id_$value', originalFieldName: 'label_for_dom_node_id' }),
      mojo.internal.StructField('is_ad_related', 144, 2, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 160]]);

// Struct: AIPageContentNode
mojo.internal.Struct(
    blink.mojom.AIPageContentNodeSpec, 'blink.mojom.AIPageContentNode', [
      mojo.internal.StructField('children_nodes', 0, 0, mojo.internal.Array(blink.mojom.AIPageContentNodeSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('content_attributes', 8, 0, blink.mojom.AIPageContentAttributesSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: AIPageContentPopup
mojo.internal.Struct(
    blink.mojom.AIPageContentPopupSpec, 'blink.mojom.AIPageContentPopup', [
      mojo.internal.StructField('root_node', 0, 0, blink.mojom.AIPageContentNodeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('visible_bounding_box', 8, 0, gfx.mojom.RectSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('opener_dom_node_id', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: AIPageContent
mojo.internal.Struct(
    blink.mojom.AIPageContentSpec, 'blink.mojom.AIPageContent', [
      mojo.internal.StructField('root_node', 0, 0, blink.mojom.AIPageContentNodeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('page_interaction_info', 8, 0, blink.mojom.AIPageContentPageInteractionInfoSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('frame_data', 16, 0, blink.mojom.AIPageContentFrameDataSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('visible_bounding_boxes_for_password_redaction', 24, 0, mojo.internal.Array(gfx.mojom.RectSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: AIPageContentOptions
mojo.internal.Struct(
    blink.mojom.AIPageContentOptionsSpec, 'blink.mojom.AIPageContentOptions', [
      mojo.internal.StructField('mode', 0, 0, blink.mojom.AIPageContentModeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('main_frame_view_rect_in_dips', 8, 0, gfx.mojom.RectSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('max_meta_elements', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('on_critical_path', 20, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('include_same_site_only', 20, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('include_passwords_for_redaction', 20, 2, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

// Interface: AIPageContentAgent
mojo.internal.Struct(
    blink.mojom.AIPageContentAgent_GetAIPageContent_ParamsSpec, 'blink.mojom.AIPageContentAgent_GetAIPageContent_Params', [
      mojo.internal.StructField('request', 0, 0, blink.mojom.AIPageContentOptionsSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.AIPageContentAgent_GetAIPageContent_ResponseParamsSpec, 'blink.mojom.AIPageContentAgent_GetAIPageContent_ResponseParams', [
      mojo.internal.StructField('page_content', 0, 0, blink.mojom.AIPageContentSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

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
      [request],
      false);
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

blink.mojom.AIPageContentAgentReceiver = class {
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
        
        // Try Method 0: GetAIPageContent
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.AIPageContentAgent_GetAIPageContent_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetAIPageContent (0)');
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
          const params = decoder.decodeStructInline(blink.mojom.AIPageContentAgent_GetAIPageContent_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.getAIPageContent');
          const result = this.impl.getAIPageContent(params.request);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.AIPageContentAgent_GetAIPageContent_ResponseParamsSpec);
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

blink.mojom.AIPageContentAgentReceiver = blink.mojom.AIPageContentAgentReceiver;

blink.mojom.AIPageContentAgentPtr = blink.mojom.AIPageContentAgentRemote;
blink.mojom.AIPageContentAgentRequest = blink.mojom.AIPageContentAgentPendingReceiver;

