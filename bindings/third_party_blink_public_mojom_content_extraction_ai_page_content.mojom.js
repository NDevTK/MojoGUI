// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/content_extraction/ai_page_content.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var blink = blink || {};
var blink = blink || {};
var ui = ui || {};
var ui = ui || {};
var gfx = gfx || {};
var url = url || {};
var url = url || {};
var blink = blink || {};


// Enum: AIPageContentAttributeType
blink.mojom.mojom.AIPageContentAttributeType = {
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
blink.mojom.mojom.AIPageContentAttributeTypeSpec = { $: mojo.internal.Enum() };

// Enum: AIPageContentAnnotatedRole
blink.mojom.mojom.AIPageContentAnnotatedRole = {
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
blink.mojom.mojom.AIPageContentAnnotatedRoleSpec = { $: mojo.internal.Enum() };

// Enum: AIPageContentClickabilityReason
blink.mojom.mojom.AIPageContentClickabilityReason = {
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
blink.mojom.mojom.AIPageContentClickabilityReasonSpec = { $: mojo.internal.Enum() };

// Enum: AIPageContentInteractionDisabledReason
blink.mojom.mojom.AIPageContentInteractionDisabledReason = {
  kDisabled: 0,
  kAriaDisabled: 1,
  kCursorNotAllowed: 2,
};
blink.mojom.mojom.AIPageContentInteractionDisabledReasonSpec = { $: mojo.internal.Enum() };

// Enum: AIPageContentTextSize
blink.mojom.mojom.AIPageContentTextSize = {
  kXS: 0,
  kS: 1,
  kM: 2,
  kL: 3,
  kXL: 4,
};
blink.mojom.mojom.AIPageContentTextSizeSpec = { $: mojo.internal.Enum() };

// Enum: AIPageContentAnchorRel
blink.mojom.mojom.AIPageContentAnchorRel = {
  kRelationUnknown: 0,
  kRelationNoReferrer: 1,
  kRelationNoOpener: 2,
  kRelationOpener: 3,
  kRelationPrivacyPolicy: 4,
  kRelationTermsOfService: 5,
};
blink.mojom.mojom.AIPageContentAnchorRelSpec = { $: mojo.internal.Enum() };

// Enum: Reason
blink.mojom.mojom.Reason = {
  kCrossSite: 0,
  kCrossOrigin: 1,
};
blink.mojom.mojom.ReasonSpec = { $: mojo.internal.Enum() };

// Enum: AIPageContentTableRowType
blink.mojom.mojom.AIPageContentTableRowType = {
  kHeader: 0,
  kBody: 1,
  kFooter: 2,
};
blink.mojom.mojom.AIPageContentTableRowTypeSpec = { $: mojo.internal.Enum() };

// Enum: AIPageContentRedactionDecision
blink.mojom.mojom.AIPageContentRedactionDecision = {
  kNoRedactionNecessary: 0,
  kUnredacted_EmptyPassword: 1,
  kRedacted_HasBeenPassword: 2,
};
blink.mojom.mojom.AIPageContentRedactionDecisionSpec = { $: mojo.internal.Enum() };

// Enum: AIPageContentMode
blink.mojom.mojom.AIPageContentMode = {
  kDefault: 0,
  kActionableElements: 1,
};
blink.mojom.mojom.AIPageContentModeSpec = { $: mojo.internal.Enum() };

// Union: AIPageContentIframeContent
blink.mojom.mojom.AIPageContentIframeContentSpec = { $: mojo.internal.Union(
    'blink.mojom.AIPageContentIframeContent', {
      'local_frame_data': {
        'ordinal': 0,
        'type': blink.mojom.AIPageContentFrameDataSpec,
      }},
      'redacted_frame_metadata': {
        'ordinal': 1,
        'type': blink.mojom.RedactedFrameMetadataSpec,
      }},
    })
};

// Struct: AIPageContentGeometry
blink.mojom.mojom.AIPageContentGeometrySpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AIPageContentGeometry',
      packedSize: 32,
      fields: [
        { name: 'outer_bounding_box', packedOffset: 0, packedBitOffset: 0, type: gfx.mojom.RectSpec, nullable: false, minVersion: 0 },
        { name: 'visible_bounding_box', packedOffset: 8, packedBitOffset: 0, type: gfx.mojom.RectSpec, nullable: false, minVersion: 0 },
        { name: 'fragment_visible_bounding_boxes', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array(gfx.mojom.RectSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: AIPageContentSelection
blink.mojom.mojom.AIPageContentSelectionSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AIPageContentSelection',
      packedSize: 32,
      fields: [
        { name: 'start_dom_node_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'start_offset', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'end_dom_node_id', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'end_offset', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'selected_text', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: AIPageContentPageInteractionInfo
blink.mojom.mojom.AIPageContentPageInteractionInfoSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AIPageContentPageInteractionInfo',
      packedSize: 32,
      fields: [
        { name: 'focused_dom_node_id_$flag', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'focused_dom_node_id_$value', originalFieldName: 'focused_dom_node_id' } },
        { name: 'focused_dom_node_id_$value', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'focused_dom_node_id_$flag', originalFieldName: 'focused_dom_node_id' } },
        { name: 'accessibility_focused_dom_node_id_$flag', packedOffset: 16, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'accessibility_focused_dom_node_id_$value', originalFieldName: 'accessibility_focused_dom_node_id' } },
        { name: 'accessibility_focused_dom_node_id_$value', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'accessibility_focused_dom_node_id_$flag', originalFieldName: 'accessibility_focused_dom_node_id' } },
        { name: 'mouse_position', packedOffset: 0, packedBitOffset: 0, type: gfx.mojom.PointSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: AIPageContentFrameInteractionInfo
blink.mojom.mojom.AIPageContentFrameInteractionInfoSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AIPageContentFrameInteractionInfo',
      packedSize: 16,
      fields: [
        { name: 'selection', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.AIPageContentSelectionSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: AIPageContentNodeInteractionInfo
blink.mojom.mojom.AIPageContentNodeInteractionInfoSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AIPageContentNodeInteractionInfo',
      packedSize: 40,
      fields: [
        { name: 'scroller_info', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.AIPageContentScrollerInfoSpec, nullable: true, minVersion: 0 },
        { name: 'is_focusable', packedOffset: 28, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'document_scoped_z_order_$flag', packedOffset: 28, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'document_scoped_z_order_$value', originalFieldName: 'document_scoped_z_order' } },
        { name: 'document_scoped_z_order_$value', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'document_scoped_z_order_$flag', originalFieldName: 'document_scoped_z_order' } },
        { name: 'clickability_reasons', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(blink.mojom.AIPageContentClickabilityReasonSpec, false), nullable: false, minVersion: 0 },
        { name: 'is_disabled', packedOffset: 28, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'interaction_disabled_reasons', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array(blink.mojom.AIPageContentInteractionDisabledReasonSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Struct: AIPageContentScrollerInfo
blink.mojom.mojom.AIPageContentScrollerInfoSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AIPageContentScrollerInfo',
      packedSize: 32,
      fields: [
        { name: 'scrolling_bounds', packedOffset: 0, packedBitOffset: 0, type: gfx.mojom.SizeSpec, nullable: false, minVersion: 0 },
        { name: 'visible_area', packedOffset: 8, packedBitOffset: 0, type: gfx.mojom.RectSpec, nullable: false, minVersion: 0 },
        { name: 'user_scrollable_horizontal', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'user_scrollable_vertical', packedOffset: 16, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: AIPageContentTextStyle
blink.mojom.mojom.AIPageContentTextStyleSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AIPageContentTextStyle',
      packedSize: 24,
      fields: [
        { name: 'text_size', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.AIPageContentTextSizeSpec, nullable: false, minVersion: 0 },
        { name: 'has_emphasis', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'color', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: AIPageContentTextInfo
blink.mojom.mojom.AIPageContentTextInfoSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AIPageContentTextInfo',
      packedSize: 24,
      fields: [
        { name: 'text_content', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'text_style', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.AIPageContentTextStyleSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: AIPageContentAnchorData
blink.mojom.mojom.AIPageContentAnchorDataSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AIPageContentAnchorData',
      packedSize: 24,
      fields: [
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'rel', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(blink.mojom.AIPageContentAnchorRelSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: AIPageContentImageInfo
blink.mojom.mojom.AIPageContentImageInfoSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AIPageContentImageInfo',
      packedSize: 24,
      fields: [
        { name: 'image_caption', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'source_origin', packedOffset: 8, packedBitOffset: 0, type: url.mojom.OriginSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: AIPageContentSvgRootData
blink.mojom.mojom.AIPageContentSvgRootDataSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AIPageContentSvgRootData',
      packedSize: 16,
      fields: [
        { name: 'inner_text', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: AIPageContentCanvasData
blink.mojom.mojom.AIPageContentCanvasDataSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AIPageContentCanvasData',
      packedSize: 16,
      fields: [
        { name: 'layout_size', packedOffset: 0, packedBitOffset: 0, type: gfx.mojom.SizeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: AIPageContentVideoData
blink.mojom.mojom.AIPageContentVideoDataSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AIPageContentVideoData',
      packedSize: 24,
      fields: [
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'source_origin', packedOffset: 8, packedBitOffset: 0, type: url.mojom.OriginSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: AIPageContentMeta
blink.mojom.mojom.AIPageContentMetaSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AIPageContentMeta',
      packedSize: 24,
      fields: [
        { name: 'name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'content', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: AIPageContentFrameData
blink.mojom.mojom.AIPageContentFrameDataSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AIPageContentFrameData',
      packedSize: 56,
      fields: [
        { name: 'frame_interaction_info', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.AIPageContentFrameInteractionInfoSpec, nullable: false, minVersion: 0 },
        { name: 'meta_data', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(blink.mojom.AIPageContentMetaSpec, false), nullable: false, minVersion: 0 },
        { name: 'title', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'contains_paid_content_$flag', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'contains_paid_content_$value', originalFieldName: 'contains_paid_content' } },
        { name: 'contains_paid_content_$value', packedOffset: 40, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'contains_paid_content_$flag', originalFieldName: 'contains_paid_content' } },
        { name: 'script_tools', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Array(blink.mojom.ScriptToolSpec, false), nullable: false, minVersion: 0 },
        { name: 'popup', packedOffset: 32, packedBitOffset: 0, type: blink.mojom.AIPageContentPopupSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 56}]
    }
  }
};

// Struct: RedactedFrameMetadata
blink.mojom.mojom.RedactedFrameMetadataSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.RedactedFrameMetadata',
      packedSize: 16,
      fields: [
        { name: 'kCrossSite', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: AIPageContentIframeData
blink.mojom.mojom.AIPageContentIframeDataSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AIPageContentIframeData',
      packedSize: 40,
      fields: [
        { name: 'frame_token', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.FrameTokenSpec, nullable: false, minVersion: 0 },
        { name: 'content', packedOffset: 16, packedBitOffset: 0, type: blink.mojom.AIPageContentIframeContentSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Struct: AIPageContentTableData
blink.mojom.mojom.AIPageContentTableDataSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AIPageContentTableData',
      packedSize: 16,
      fields: [
        { name: 'table_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: AIPageContentTableRowData
blink.mojom.mojom.AIPageContentTableRowDataSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AIPageContentTableRowData',
      packedSize: 16,
      fields: [
        { name: 'row_type', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.AIPageContentTableRowTypeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: AIPageContentFormData
blink.mojom.mojom.AIPageContentFormDataSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AIPageContentFormData',
      packedSize: 24,
      fields: [
        { name: 'form_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'action_url', packedOffset: 8, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: AIPageContentSelectOption
blink.mojom.mojom.AIPageContentSelectOptionSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AIPageContentSelectOption',
      packedSize: 32,
      fields: [
        { name: 'value', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'text', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'is_selected', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'disabled', packedOffset: 16, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: AIPageContentFormControlData
blink.mojom.mojom.AIPageContentFormControlDataSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AIPageContentFormControlData',
      packedSize: 56,
      fields: [
        { name: 'form_control_type', packedOffset: 32, packedBitOffset: 0, type: blink.mojom.FormControlTypeSpec, nullable: false, minVersion: 0 },
        { name: 'field_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'field_value', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'select_options', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array(blink.mojom.AIPageContentSelectOptionSpec, false), nullable: false, minVersion: 0 },
        { name: 'placeholder', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'is_checked', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'is_required', packedOffset: 40, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'redaction_decision', packedOffset: 36, packedBitOffset: 0, type: blink.mojom.AIPageContentRedactionDecisionSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 56}]
    }
  }
};

// Struct: AIPageContentAttributes
blink.mojom.mojom.AIPageContentAttributesSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AIPageContentAttributes',
      packedSize: 152,
      fields: [
        { name: 'dom_node_id_$flag', packedOffset: 136, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'dom_node_id_$value', originalFieldName: 'dom_node_id' } },
        { name: 'dom_node_id_$value', packedOffset: 120, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'dom_node_id_$flag', originalFieldName: 'dom_node_id' } },
        { name: 'attribute_type', packedOffset: 124, packedBitOffset: 0, type: blink.mojom.AIPageContentAttributeTypeSpec, nullable: false, minVersion: 0 },
        { name: 'geometry', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.AIPageContentGeometrySpec, nullable: true, minVersion: 0 },
        { name: 'node_interaction_info', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.AIPageContentNodeInteractionInfoSpec, nullable: true, minVersion: 0 },
        { name: 'text_info', packedOffset: 16, packedBitOffset: 0, type: blink.mojom.AIPageContentTextInfoSpec, nullable: true, minVersion: 0 },
        { name: 'image_info', packedOffset: 24, packedBitOffset: 0, type: blink.mojom.AIPageContentImageInfoSpec, nullable: true, minVersion: 0 },
        { name: 'svg_root_data', packedOffset: 32, packedBitOffset: 0, type: blink.mojom.AIPageContentSvgRootDataSpec, nullable: true, minVersion: 0 },
        { name: 'canvas_data', packedOffset: 40, packedBitOffset: 0, type: blink.mojom.AIPageContentCanvasDataSpec, nullable: true, minVersion: 0 },
        { name: 'video_data', packedOffset: 48, packedBitOffset: 0, type: blink.mojom.AIPageContentVideoDataSpec, nullable: true, minVersion: 0 },
        { name: 'anchor_data', packedOffset: 56, packedBitOffset: 0, type: blink.mojom.AIPageContentAnchorDataSpec, nullable: true, minVersion: 0 },
        { name: 'form_data', packedOffset: 64, packedBitOffset: 0, type: blink.mojom.AIPageContentFormDataSpec, nullable: true, minVersion: 0 },
        { name: 'form_control_data', packedOffset: 72, packedBitOffset: 0, type: blink.mojom.AIPageContentFormControlDataSpec, nullable: true, minVersion: 0 },
        { name: 'table_data', packedOffset: 80, packedBitOffset: 0, type: blink.mojom.AIPageContentTableDataSpec, nullable: true, minVersion: 0 },
        { name: 'iframe_data', packedOffset: 88, packedBitOffset: 0, type: blink.mojom.AIPageContentIframeDataSpec, nullable: true, minVersion: 0 },
        { name: 'table_row_data', packedOffset: 96, packedBitOffset: 0, type: blink.mojom.AIPageContentTableRowDataSpec, nullable: true, minVersion: 0 },
        { name: 'annotated_roles', packedOffset: 104, packedBitOffset: 0, type: mojo.internal.Array(blink.mojom.AIPageContentAnnotatedRoleSpec, false), nullable: false, minVersion: 0 },
        { name: 'label', packedOffset: 112, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'aria_role', packedOffset: 128, packedBitOffset: 0, type: ax.mojom.RoleSpec, nullable: true, minVersion: 0 },
        { name: 'label_for_dom_node_id_$flag', packedOffset: 136, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'label_for_dom_node_id_$value', originalFieldName: 'label_for_dom_node_id' } },
        { name: 'label_for_dom_node_id_$value', packedOffset: 132, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'label_for_dom_node_id_$flag', originalFieldName: 'label_for_dom_node_id' } },
        { name: 'is_ad_related', packedOffset: 136, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 152}]
    }
  }
};

// Struct: AIPageContentNode
blink.mojom.mojom.AIPageContentNodeSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AIPageContentNode',
      packedSize: 24,
      fields: [
        { name: 'children_nodes', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(blink.mojom.AIPageContentNodeSpec, false), nullable: false, minVersion: 0 },
        { name: 'content_attributes', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.AIPageContentAttributesSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: AIPageContentPopup
blink.mojom.mojom.AIPageContentPopupSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AIPageContentPopup',
      packedSize: 32,
      fields: [
        { name: 'root_node', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.AIPageContentNodeSpec, nullable: false, minVersion: 0 },
        { name: 'opener_dom_node_id', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'visible_bounding_box', packedOffset: 8, packedBitOffset: 0, type: gfx.mojom.RectSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: AIPageContent
blink.mojom.mojom.AIPageContentSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AIPageContent',
      packedSize: 40,
      fields: [
        { name: 'root_node', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.AIPageContentNodeSpec, nullable: false, minVersion: 0 },
        { name: 'page_interaction_info', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.AIPageContentPageInteractionInfoSpec, nullable: true, minVersion: 0 },
        { name: 'frame_data', packedOffset: 16, packedBitOffset: 0, type: blink.mojom.AIPageContentFrameDataSpec, nullable: false, minVersion: 0 },
        { name: 'visible_bounding_boxes_for_password_redaction', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Array(gfx.mojom.RectSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Struct: AIPageContentOptions
blink.mojom.mojom.AIPageContentOptionsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AIPageContentOptions',
      packedSize: 32,
      fields: [
        { name: 'mode', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.AIPageContentModeSpec, nullable: false, minVersion: 0 },
        { name: 'on_critical_path', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'max_meta_elements', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'include_same_site_only', packedOffset: 16, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'main_frame_view_rect_in_dips', packedOffset: 0, packedBitOffset: 0, type: gfx.mojom.RectSpec, nullable: false, minVersion: 0 },
        { name: 'include_passwords_for_redaction', packedOffset: 16, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Interface: AIPageContentAgent
blink.mojom.mojom.AIPageContentAgent = {};

blink.mojom.mojom.AIPageContentAgentPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.mojom.AIPageContentAgentRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.AIPageContentAgent';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.mojom.AIPageContentAgentPendingReceiver,
      handle);
    this.$ = new blink.mojom.mojom.AIPageContentAgentRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.mojom.AIPageContentAgentRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getAIPageContent(request) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.mojom.AIPageContentAgent_GetAIPageContent_ParamsSpec,
      blink.mojom.mojom.AIPageContentAgent_GetAIPageContent_ResponseParamsSpec,
      [request]);
  }

};

blink.mojom.mojom.AIPageContentAgent.getRemote = function() {
  let remote = new blink.mojom.mojom.AIPageContentAgentRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.AIPageContentAgent',
    'context');
  return remote.$;
};

// ParamsSpec for GetAIPageContent
blink.mojom.mojom.AIPageContentAgent_GetAIPageContent_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AIPageContentAgent.GetAIPageContent_Params',
      packedSize: 16,
      fields: [
        { name: 'request', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.AIPageContentOptionsSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

blink.mojom.mojom.AIPageContentAgent_GetAIPageContent_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AIPageContentAgent.GetAIPageContent_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'page_content', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.AIPageContentSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
blink.mojom.mojom.AIPageContentAgentPtr = blink.mojom.mojom.AIPageContentAgentRemote;
blink.mojom.mojom.AIPageContentAgentRequest = blink.mojom.mojom.AIPageContentAgentPendingReceiver;

