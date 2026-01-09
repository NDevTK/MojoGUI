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
      packedSize: 16,
      fields: [
        { name: 'fragment_visible_bounding_boxes', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
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
      packedSize: 16,
      fields: [
        { name: 'selected_text', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
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
      packedSize: 16,
      fields: [
        { name: 'mouse_position', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
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
        { name: 'selection', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
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
      packedSize: 16,
      fields: [
        { name: 'interaction_disabled_reasons', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
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
      packedSize: 16,
      fields: [
        { name: 'user_scrollable_vertical', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
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
      packedSize: 16,
      fields: [
        { name: 'color', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
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
      packedSize: 16,
      fields: [
        { name: 'text_style', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
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
      packedSize: 16,
      fields: [
        { name: 'rel', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
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
      packedSize: 16,
      fields: [
        { name: 'source_origin', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
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
        { name: 'layout_size', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
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
      packedSize: 16,
      fields: [
        { name: 'source_origin', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
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
      packedSize: 16,
      fields: [
        { name: 'content', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
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
      packedSize: 16,
      fields: [
        { name: 'popup', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
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
      packedSize: 16,
      fields: [
        { name: 'content', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
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
        { name: 'row_type', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
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
      packedSize: 16,
      fields: [
        { name: 'action_url', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
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
      packedSize: 16,
      fields: [
        { name: 'disabled', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
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
      packedSize: 16,
      fields: [
        { name: 'redaction_decision', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
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
      packedSize: 16,
      fields: [
        { name: 'is_ad_related', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
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
      packedSize: 16,
      fields: [
        { name: 'content_attributes', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
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
      packedSize: 16,
      fields: [
        { name: 'visible_bounding_box', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
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
      packedSize: 16,
      fields: [
        { name: 'visible_bounding_boxes_for_password_redaction', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
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
      packedSize: 16,
      fields: [
        { name: 'false', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
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
        { name: 'request', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
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
        { name: 'page_content', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
blink.mojom.AIPageContentAgentPtr = blink.mojom.AIPageContentAgentRemote;
blink.mojom.AIPageContentAgentRequest = blink.mojom.AIPageContentAgentPendingReceiver;

