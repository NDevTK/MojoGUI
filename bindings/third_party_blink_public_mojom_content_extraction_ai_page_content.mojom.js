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
  kAnchor: 3,
  kParagraph: 4,
  kHeading: 5,
  kCanvas: 6,
  kVideo: 7,
  kFormControl: 8,
  kTable: 9,
  kTableRow: 10,
  kTableCell: 11,
  kOrderedList: 12,
  kUnorderedList: 13,
  kListItem: 14,
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
  keypress: 0,
  keyup: 1,
  as: 2,
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
};

// Enum: AIPageContentMode
blink.mojom.AIPageContentMode = {
};

// Struct: AIPageContentGeometry
blink.mojom.AIPageContentGeometry = class {
  constructor(values = {}) {
    this.visible_bounding_box = values.visible_bounding_box !== undefined ? values.visible_bounding_box : null;
    this.lines = values.lines !== undefined ? values.lines : null;
    this.layout = values.layout !== undefined ? values.layout : null;
    this.fragment_visible_bounding_boxes = values.fragment_visible_bounding_boxes !== undefined ? values.fragment_visible_bounding_boxes : [];
  }
};

// Struct: AIPageContentSelection
blink.mojom.AIPageContentSelection = class {
  constructor(values = {}) {
    this.selected_text = values.selected_text !== undefined ? values.selected_text : 0;
  }
};

// Struct: AIPageContentPageInteractionInfo
blink.mojom.AIPageContentPageInteractionInfo = class {
  constructor(values = {}) {
    this.accessibility_focused_dom_node_id = values.accessibility_focused_dom_node_id !== undefined ? values.accessibility_focused_dom_node_id : 0;
    this.mouse_position = values.mouse_position !== undefined ? values.mouse_position : 0;
  }
};

// Struct: AIPageContentFrameInteractionInfo
blink.mojom.AIPageContentFrameInteractionInfo = class {
  constructor(values = {}) {
    this.selection = values.selection !== undefined ? values.selection : null;
  }
};

// Struct: AIPageContentNodeInteractionInfo
blink.mojom.AIPageContentNodeInteractionInfo = class {
  constructor(values = {}) {
    this.is_focusable = values.is_focusable !== undefined ? values.is_focusable : false;
    this.clickability_reasons = values.clickability_reasons !== undefined ? values.clickability_reasons : 0;
    this.interaction_disabled_reasons = values.interaction_disabled_reasons !== undefined ? values.interaction_disabled_reasons : 0;
  }
};

// Struct: AIPageContentScrollerInfo
blink.mojom.AIPageContentScrollerInfo = class {
  constructor(values = {}) {
    this.user_scrollable_vertical = values.user_scrollable_vertical !== undefined ? values.user_scrollable_vertical : false;
  }
};

// Struct: AIPageContentTextStyle
blink.mojom.AIPageContentTextStyle = class {
  constructor(values = {}) {
    this.color = values.color !== undefined ? values.color : 0;
  }
};

// Struct: AIPageContentTextInfo
blink.mojom.AIPageContentTextInfo = class {
  constructor(values = {}) {
    this.text_style = values.text_style !== undefined ? values.text_style : "";
  }
};

// Struct: AIPageContentAnchorData
blink.mojom.AIPageContentAnchorData = class {
  constructor(values = {}) {
    this.rel = values.rel !== undefined ? values.rel : [];
    this.type = values.type !== undefined ? values.type : null;
  }
};

// Struct: AIPageContentImageInfo
blink.mojom.AIPageContentImageInfo = class {
  constructor(values = {}) {
    this.image_caption = values.image_caption !== undefined ? values.image_caption : "";
    this.source_origin = values.source_origin !== undefined ? values.source_origin : null;
  }
};

// Struct: AIPageContentSvgRootData
blink.mojom.AIPageContentSvgRootData = class {
  constructor(values = {}) {
    this.inner_text = values.inner_text !== undefined ? values.inner_text : "";
  }
};

// Struct: AIPageContentCanvasData
blink.mojom.AIPageContentCanvasData = class {
  constructor(values = {}) {
    this.layout_size = values.layout_size !== undefined ? values.layout_size : null;
  }
};

// Struct: AIPageContentVideoData
blink.mojom.AIPageContentVideoData = class {
  constructor(values = {}) {
    this.source_origin = values.source_origin !== undefined ? values.source_origin : null;
  }
};

// Struct: AIPageContentMeta
blink.mojom.AIPageContentMeta = class {
  constructor(values = {}) {
    this.content = values.content !== undefined ? values.content : "";
  }
};

// Struct: AIPageContentFrameData
blink.mojom.AIPageContentFrameData = class {
  constructor(values = {}) {
    this.frame_interaction_info = values.frame_interaction_info !== undefined ? values.frame_interaction_info : 0;
    this.script_tools = values.script_tools !== undefined ? values.script_tools : false;
    this.popup = values.popup !== undefined ? values.popup : null;
  }
};

// Struct: RedactedFrameMetadata
blink.mojom.RedactedFrameMetadata = class {
  constructor(values = {}) {
    this.kCrossSite = values.kCrossSite !== undefined ? values.kCrossSite : null;
  }
};

// Struct: AIPageContentIframeData
blink.mojom.AIPageContentIframeData = class {
  constructor(values = {}) {
    this.frame_token = values.frame_token !== undefined ? values.frame_token : null;
    this.content = values.content !== undefined ? values.content : null;
  }
};

// Struct: AIPageContentTableData
blink.mojom.AIPageContentTableData = class {
  constructor(values = {}) {
    this.table_name = values.table_name !== undefined ? values.table_name : "";
  }
};

// Struct: AIPageContentTableRowData
blink.mojom.AIPageContentTableRowData = class {
  constructor(values = {}) {
    this.row_type = values.row_type !== undefined ? values.row_type : null;
  }
};

// Struct: AIPageContentFormData
blink.mojom.AIPageContentFormData = class {
  constructor(values = {}) {
    this.form_name = values.form_name !== undefined ? values.form_name : "";
    this.action_url = values.action_url !== undefined ? values.action_url : null;
  }
};

// Struct: AIPageContentSelectOption
blink.mojom.AIPageContentSelectOption = class {
  constructor(values = {}) {
    this.disabled = values.disabled !== undefined ? values.disabled : false;
  }
};

// Struct: AIPageContentFormControlData
blink.mojom.AIPageContentFormControlData = class {
  constructor(values = {}) {
    this.field_value = values.field_value !== undefined ? values.field_value : "";
    this.redaction_decision = values.redaction_decision !== undefined ? values.redaction_decision : false;
  }
};

// Struct: AIPageContentAttributes
blink.mojom.AIPageContentAttributes = class {
  constructor(values = {}) {
    this.aria_role = values.aria_role !== undefined ? values.aria_role : 0;
    this.is_ad_related = values.is_ad_related !== undefined ? values.is_ad_related : 0;
  }
};

// Struct: AIPageContentNode
blink.mojom.AIPageContentNode = class {
  constructor(values = {}) {
    this.content_attributes = values.content_attributes !== undefined ? values.content_attributes : [];
  }
};

// Struct: AIPageContentPopup
blink.mojom.AIPageContentPopup = class {
  constructor(values = {}) {
    this.visible_bounding_box = values.visible_bounding_box !== undefined ? values.visible_bounding_box : 0;
  }
};

// Struct: AIPageContent
blink.mojom.AIPageContent = class {
  constructor(values = {}) {
    this.root_node = values.root_node !== undefined ? values.root_node : null;
    this.mouse = values.mouse !== undefined ? values.mouse : null;
    this.visible_bounding_boxes_for_password_redaction = values.visible_bounding_boxes_for_password_redaction !== undefined ? values.visible_bounding_boxes_for_password_redaction : 0;
  }
};

// Struct: AIPageContentOptions
blink.mojom.AIPageContentOptions = class {
  constructor(values = {}) {
    this.mode = values.mode !== undefined ? values.mode : null;
    this.false = values.false !== undefined ? values.false : false;
  }
};

// Interface: AIPageContentAgent
blink.mojom.AIPageContentAgentPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.AIPageContentAgent';
  }

  getAIPageContent(request) {
    // Method: GetAIPageContent
    return new Promise((resolve) => {
      // Call: GetAIPageContent(request)
      resolve({});
    });
  }

};

blink.mojom.AIPageContentAgentRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
