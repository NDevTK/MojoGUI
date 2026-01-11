// Auto-generated MojoJS binding
 // Source: chromium_src/third_party/blink/public/mojom/content_extraction/ai_page_content.mojom
 // Module: blink.mojom

 'use strict';
 (function() {
   const SHA256 = (s) => {
     const K = [0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5, 0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174, 0xe49b69c1, 0xefbe4786, 0x0fc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da, 0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xD5A79147, 0x06CA6351, 0x14292967, 0x27B70A85, 0x2E1B2138, 0x4D2C6DFC, 0x53380D13, 0x650A7354, 0x766A0ABB, 0x81C2C92E, 0x92722C85, 0xA2BFE8A1, 0xA81A664B, 0xC24B8B70, 0xC76C51A3, 0xD192E819, 0xD6990624, 0xF40E3585,0x106AA070, 0x19A4C116, 0x1E376C08, 0x2748774C, 0x34B0BCB5, 0x391C0CB3, 0x4ED8AA4A, 0x5B9CCA4F, 0x682E6FF3, 0x748F82EE, 0x78A5636F, 0x84C87814, 0x8CC70208, 0x90BEFFFA, 0xA4506CEB, 0xBEF9A3F7, 0xC67178F2];
     const h = [0x6a09e667, 0xbb67ae85, 0x3c6ef372, 0xa54ff53a, 0x510e527f, 0x9b05688c, 0x1f83d9ab, 0x5be0cd19];
     const m = new TextEncoder().encode(s);
     const l = m.length;
     const b = new Uint32Array(((l + 8) >> 6) + 1 << 4);
     for (let i = 0; i < l; i++) b[i >> 2] |= m[i] << (24 - (i & 3) * 8);
     b[l >> 2] |= 0x80 << (24 - (l & 3) * 8);
     b[b.length - 1] = l * 8;
     for (let i = 0; i < b.length; i += 16) {
       let [a1, b1, c1, d1, e1, f1, g1, h1] = h;
       const w = new Uint32Array(64);
       for (let j = 0; j < 64; j++) {
         if (j < 16) w[j] = b[i + j];
         else {
           const s0 = ((w[j-15]>>>7)|(w[j-15]<<25))^((w[j-15]>>>18)|(w[j-15]<<14))^(w[j-15]>>>3);
           const s1 = ((w[j-2]>>>17)|(w[j-2]<<15))^((w[j-2]>>>19)|(w[j-2]<<13))^(w[j-2]>>>10);
           w[j] = (w[j-16]+s0+w[j-7]+s1)|0;
         }
         const t1 = (h1 + (((e1>>>6)|(e1<<26))^((e1>>>11)|(e1<<21))^((e1>>>25)|(e1<<7))) + ((e1&f1)^((~e1)&g1)) + K[j] + w[j])|0;
         const t2 = ((((a1>>>2)|(a1<<30))^((a1>>>13)|(a1<<19))^((a1>>>22)|(a1<<10))) + ((a1&b1)^(a1&c1)^(b1&c1)))|0;
         h1 = g1; g1 = f1; f1 = e1; e1 = (d1 + t1) | 0; d1 = c1; c1 = b1; b1 = a1; a1 = (t1 + t2) | 0;
       }
       h[0] = (h[0] + a1) | 0; h[1] = (h[1] + b1) | 0; h[2] = (h[2] + c1) | 0; h[3] = (h[3] + d1) | 0;
       h[4] = (h[4] + e1) | 0; h[5] = (h[5] + f1) | 0; h[6] = (h[6] + g1) | 0; h[7] = (h[7] + h1) | 0;
     }
     return h[0];
   };
   window.mojoScrambler = window.mojoScrambler || {
     getOrdinals: (ifaceName, methodSpecs) => {
       const params = new URLSearchParams(window.location.search);
       const forceNoScramble = params.get('scramble') === '0' || window.mojoNoScramble;
       
       const seen = new Set();
       methodSpecs.forEach(ms => { if (ms.explicit !== null) seen.add(ms.explicit); });
       let i = 0;
       return methodSpecs.map((ms, idx) => {
         if (ms.explicit !== null) return ms.explicit;
         if (forceNoScramble) return idx;

         const p = window.mojoVersion.split('.');
         const salt = 'MAJOR=' + p[0] + '\n' + 'MINOR=' + (p[1]||0) + '\n' + 'BUILD=' + (p[2]||0) + '\n' + 'PATCH=' + (p[3]||0) + '\n';
         console.log('[MojoScrambler] Derived Salt:', JSON.stringify(salt));
         
         while (true) {
           i++;
           const h0 = SHA256(salt + ifaceName.split('.').pop() + i);
           const ord = (((h0 & 0xFF) << 24) | ((h0 & 0xFF00) << 8) | ((h0 & 0xFF0000) >> 8) | (h0 >>> 24)) & 0x7fffffff;
           if (!seen.has(ord)) {
             seen.add(ord);
             return ord;
           }
         }
       });
     }
   };
 })();

 // Module namespace
 var mojo = mojo || {};
 mojo.internal = mojo.internal || {};
 mojo.internal.bindings = mojo.internal.bindings || {};
 

 mojo.internal.bindings.blink = mojo.internal.bindings.blink || {};
mojo.internal.bindings.blink.mojom = mojo.internal.bindings.blink.mojom || {};
mojo.internal.bindings.ax = mojo.internal.bindings.ax || {};
mojo.internal.bindings.gfx = mojo.internal.bindings.gfx || {};
mojo.internal.bindings.url = mojo.internal.bindings.url || {};

mojo.internal.bindings.blink.mojom.AIPageContentAttributeTypeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.blink.mojom.AIPageContentAnnotatedRoleSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.blink.mojom.AIPageContentClickabilityReasonSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.blink.mojom.AIPageContentInteractionDisabledReasonSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.blink.mojom.AIPageContentTextSizeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.blink.mojom.AIPageContentAnchorRelSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.blink.mojom.ReasonSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.blink.mojom.AIPageContentTableRowTypeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.blink.mojom.AIPageContentRedactionDecisionSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.blink.mojom.AIPageContentModeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.blink.mojom.AIPageContentIframeContentSpec = { $: {} };
mojo.internal.bindings.blink.mojom.AIPageContentGeometrySpec = { $: {} };
mojo.internal.bindings.blink.mojom.AIPageContentSelectionSpec = { $: {} };
mojo.internal.bindings.blink.mojom.AIPageContentPageInteractionInfoSpec = { $: {} };
mojo.internal.bindings.blink.mojom.AIPageContentFrameInteractionInfoSpec = { $: {} };
mojo.internal.bindings.blink.mojom.AIPageContentNodeInteractionInfoSpec = { $: {} };
mojo.internal.bindings.blink.mojom.AIPageContentScrollerInfoSpec = { $: {} };
mojo.internal.bindings.blink.mojom.AIPageContentTextStyleSpec = { $: {} };
mojo.internal.bindings.blink.mojom.AIPageContentTextInfoSpec = { $: {} };
mojo.internal.bindings.blink.mojom.AIPageContentAnchorDataSpec = { $: {} };
mojo.internal.bindings.blink.mojom.AIPageContentImageInfoSpec = { $: {} };
mojo.internal.bindings.blink.mojom.AIPageContentSvgRootDataSpec = { $: {} };
mojo.internal.bindings.blink.mojom.AIPageContentCanvasDataSpec = { $: {} };
mojo.internal.bindings.blink.mojom.AIPageContentVideoDataSpec = { $: {} };
mojo.internal.bindings.blink.mojom.AIPageContentMetaSpec = { $: {} };
mojo.internal.bindings.blink.mojom.AIPageContentFrameDataSpec = { $: {} };
mojo.internal.bindings.blink.mojom.RedactedFrameMetadataSpec = { $: {} };
mojo.internal.bindings.blink.mojom.AIPageContentIframeDataSpec = { $: {} };
mojo.internal.bindings.blink.mojom.AIPageContentTableDataSpec = { $: {} };
mojo.internal.bindings.blink.mojom.AIPageContentTableRowDataSpec = { $: {} };
mojo.internal.bindings.blink.mojom.AIPageContentFormDataSpec = { $: {} };
mojo.internal.bindings.blink.mojom.AIPageContentSelectOptionSpec = { $: {} };
mojo.internal.bindings.blink.mojom.AIPageContentFormControlDataSpec = { $: {} };
mojo.internal.bindings.blink.mojom.AIPageContentAttributesSpec = { $: {} };
mojo.internal.bindings.blink.mojom.AIPageContentNodeSpec = { $: {} };
mojo.internal.bindings.blink.mojom.AIPageContentPopupSpec = { $: {} };
mojo.internal.bindings.blink.mojom.AIPageContentSpec = { $: {} };
mojo.internal.bindings.blink.mojom.AIPageContentOptionsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.AIPageContentAgent = {};
mojo.internal.bindings.blink.mojom.AIPageContentAgent.$interfaceName = 'blink.mojom.AIPageContentAgent';
mojo.internal.bindings.blink.mojom.AIPageContentAgent_GetAIPageContent_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.AIPageContentAgent_GetAIPageContent_ResponseParamsSpec = { $: {} };

// Enum: AIPageContentAttributeType
mojo.internal.bindings.blink.mojom.AIPageContentAttributeType = {
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
mojo.internal.bindings.blink.mojom.AIPageContentAnnotatedRole = {
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
mojo.internal.bindings.blink.mojom.AIPageContentClickabilityReason = {
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
mojo.internal.bindings.blink.mojom.AIPageContentInteractionDisabledReason = {
  kDisabled: 0,
  kAriaDisabled: 1,
  kCursorNotAllowed: 2,
};

// Enum: AIPageContentTextSize
mojo.internal.bindings.blink.mojom.AIPageContentTextSize = {
  kXS: 0,
  kS: 1,
  kM: 2,
  kL: 3,
  kXL: 4,
};

// Enum: AIPageContentAnchorRel
mojo.internal.bindings.blink.mojom.AIPageContentAnchorRel = {
  kRelationUnknown: 0,
  kRelationNoReferrer: 1,
  kRelationNoOpener: 2,
  kRelationOpener: 3,
  kRelationPrivacyPolicy: 4,
  kRelationTermsOfService: 5,
};

// Enum: Reason
mojo.internal.bindings.blink.mojom.Reason = {
  kCrossSite: 0,
  kCrossOrigin: 1,
};

// Enum: AIPageContentTableRowType
mojo.internal.bindings.blink.mojom.AIPageContentTableRowType = {
  kHeader: 0,
  kBody: 1,
  kFooter: 2,
};

// Enum: AIPageContentRedactionDecision
mojo.internal.bindings.blink.mojom.AIPageContentRedactionDecision = {
  kNoRedactionNecessary: 0,
  kUnredacted_EmptyPassword: 1,
  kRedacted_HasBeenPassword: 2,
};

// Enum: AIPageContentMode
mojo.internal.bindings.blink.mojom.AIPageContentMode = {
  kDefault: 0,
  kActionableElements: 1,
};

// Union: AIPageContentIframeContent
mojo.internal.Union(
    mojo.internal.bindings.blink.mojom.AIPageContentIframeContentSpec, 'blink.mojom.AIPageContentIframeContent', {
      'arg_local_frame_data': {
        'ordinal': 0,
        'type': mojo.internal.bindings.mojo.internal.bindings.blink.mojom.AIPageContentFrameDataSpec.$,
        'nullable': false,
      },
      'arg_redacted_frame_metadata': {
        'ordinal': 1,
        'type': mojo.internal.bindings.mojo.internal.bindings.blink.mojom.RedactedFrameMetadataSpec.$,
        'nullable': false,
      },
    });

// Struct: AIPageContentGeometry
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.AIPageContentGeometrySpec, 'blink.mojom.AIPageContentGeometry', [
      mojo.internal.StructField('arg_outer_bounding_box', 0, 0, mojo.internal.bindings.gfx.mojom.RectSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_visible_bounding_box', 8, 0, mojo.internal.bindings.gfx.mojom.RectSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_fragment_visible_bounding_boxes', 16, 0, mojo.internal.Array(mojo.internal.bindings.gfx.mojom.RectSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: AIPageContentSelection
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.AIPageContentSelectionSpec, 'blink.mojom.AIPageContentSelection', [
      mojo.internal.StructField('arg_selected_text', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_start_dom_node_id', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_start_offset', 12, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_end_dom_node_id', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_end_offset', 20, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: AIPageContentPageInteractionInfo
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.AIPageContentPageInteractionInfoSpec, 'blink.mojom.AIPageContentPageInteractionInfo', [
      mojo.internal.StructField('arg_mouse_position', 0, 0, mojo.internal.bindings.gfx.mojom.PointSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_focused_dom_node_id_$value', 8, 0, mojo.internal.Int32, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'arg_focused_dom_node_id_$flag', originalFieldName: 'arg_focused_dom_node_id' }),
      mojo.internal.StructField('arg_accessibility_focused_dom_node_id_$value', 12, 0, mojo.internal.Int32, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'arg_accessibility_focused_dom_node_id_$flag', originalFieldName: 'arg_accessibility_focused_dom_node_id' }),
      mojo.internal.StructField('arg_focused_dom_node_id_$flag', 16, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'arg_focused_dom_node_id_$value', originalFieldName: 'arg_focused_dom_node_id' }),
      mojo.internal.StructField('arg_accessibility_focused_dom_node_id_$flag', 16, 1, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'arg_accessibility_focused_dom_node_id_$value', originalFieldName: 'arg_accessibility_focused_dom_node_id' }),
    ],
    [[0, 32]]);

// Struct: AIPageContentFrameInteractionInfo
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.AIPageContentFrameInteractionInfoSpec, 'blink.mojom.AIPageContentFrameInteractionInfo', [
      mojo.internal.StructField('arg_selection', 0, 0, mojo.internal.bindings.mojo.internal.bindings.blink.mojom.AIPageContentSelectionSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

// Struct: AIPageContentNodeInteractionInfo
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.AIPageContentNodeInteractionInfoSpec, 'blink.mojom.AIPageContentNodeInteractionInfo', [
      mojo.internal.StructField('arg_scroller_info', 0, 0, mojo.internal.bindings.mojo.internal.bindings.blink.mojom.AIPageContentScrollerInfoSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_clickability_reasons', 8, 0, mojo.internal.Array(mojo.internal.bindings.mojo.internal.bindings.blink.mojom.AIPageContentClickabilityReasonSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_interaction_disabled_reasons', 16, 0, mojo.internal.Array(mojo.internal.bindings.mojo.internal.bindings.blink.mojom.AIPageContentInteractionDisabledReasonSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_document_scoped_z_order_$value', 24, 0, mojo.internal.Int32, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'arg_document_scoped_z_order_$flag', originalFieldName: 'arg_document_scoped_z_order' }),
      mojo.internal.StructField('arg_is_focusable', 28, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_document_scoped_z_order_$flag', 28, 1, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'arg_document_scoped_z_order_$value', originalFieldName: 'arg_document_scoped_z_order' }),
      mojo.internal.StructField('arg_is_disabled', 28, 2, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: AIPageContentScrollerInfo
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.AIPageContentScrollerInfoSpec, 'blink.mojom.AIPageContentScrollerInfo', [
      mojo.internal.StructField('arg_scrolling_bounds', 0, 0, mojo.internal.bindings.gfx.mojom.SizeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_visible_area', 8, 0, mojo.internal.bindings.gfx.mojom.RectSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_user_scrollable_horizontal', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_user_scrollable_vertical', 16, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: AIPageContentTextStyle
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.AIPageContentTextStyleSpec, 'blink.mojom.AIPageContentTextStyle', [
      mojo.internal.StructField('arg_text_size', 0, 0, mojo.internal.bindings.mojo.internal.bindings.blink.mojom.AIPageContentTextSizeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_color', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_has_emphasis', 12, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: AIPageContentTextInfo
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.AIPageContentTextInfoSpec, 'blink.mojom.AIPageContentTextInfo', [
      mojo.internal.StructField('arg_text_content', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_text_style', 8, 0, mojo.internal.bindings.mojo.internal.bindings.blink.mojom.AIPageContentTextStyleSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: AIPageContentAnchorData
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.AIPageContentAnchorDataSpec, 'blink.mojom.AIPageContentAnchorData', [
      mojo.internal.StructField('arg_url', 0, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_rel', 8, 0, mojo.internal.Array(mojo.internal.bindings.mojo.internal.bindings.blink.mojom.AIPageContentAnchorRelSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: AIPageContentImageInfo
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.AIPageContentImageInfoSpec, 'blink.mojom.AIPageContentImageInfo', [
      mojo.internal.StructField('arg_image_caption', 0, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_source_origin', 8, 0, mojo.internal.bindings.url.mojom.OriginSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

// Struct: AIPageContentSvgRootData
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.AIPageContentSvgRootDataSpec, 'blink.mojom.AIPageContentSvgRootData', [
      mojo.internal.StructField('arg_inner_text', 0, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 16]]);

// Struct: AIPageContentCanvasData
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.AIPageContentCanvasDataSpec, 'blink.mojom.AIPageContentCanvasData', [
      mojo.internal.StructField('arg_layout_size', 0, 0, mojo.internal.bindings.gfx.mojom.SizeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: AIPageContentVideoData
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.AIPageContentVideoDataSpec, 'blink.mojom.AIPageContentVideoData', [
      mojo.internal.StructField('arg_url', 0, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_source_origin', 8, 0, mojo.internal.bindings.url.mojom.OriginSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

// Struct: AIPageContentMeta
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.AIPageContentMetaSpec, 'blink.mojom.AIPageContentMeta', [
      mojo.internal.StructField('arg_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_content', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: AIPageContentFrameData
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.AIPageContentFrameDataSpec, 'blink.mojom.AIPageContentFrameData', [
      mojo.internal.StructField('arg_frame_interaction_info', 0, 0, mojo.internal.bindings.mojo.internal.bindings.blink.mojom.AIPageContentFrameInteractionInfoSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_meta_data', 8, 0, mojo.internal.Array(mojo.internal.bindings.mojo.internal.bindings.blink.mojom.AIPageContentMetaSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_title', 16, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_script_tools', 24, 0, mojo.internal.Array(mojo.internal.bindings.blink.mojom.ScriptToolSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_popup', 32, 0, mojo.internal.bindings.mojo.internal.bindings.blink.mojom.AIPageContentPopupSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_contains_paid_content_$flag', 40, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'arg_contains_paid_content_$value', originalFieldName: 'arg_contains_paid_content' }),
      mojo.internal.StructField('arg_contains_paid_content_$value', 40, 1, mojo.internal.Bool, false, false, 0, { isPrimary: false, linkedValueFieldName: 'arg_contains_paid_content_$flag', originalFieldName: 'arg_contains_paid_content' }),
    ],
    [[0, 56]]);

// Struct: RedactedFrameMetadata
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.RedactedFrameMetadataSpec, 'blink.mojom.RedactedFrameMetadata', [
      mojo.internal.StructField('arg_kCrossSite', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('arg_val', 8, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: AIPageContentIframeData
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.AIPageContentIframeDataSpec, 'blink.mojom.AIPageContentIframeData', [
      mojo.internal.StructField('arg_frame_token', 0, 0, mojo.internal.bindings.blink.mojom.FrameTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_content', 8, 0, mojo.internal.bindings.blink.mojom.AIPageContentIframeContentSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

// Struct: AIPageContentTableData
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.AIPageContentTableDataSpec, 'blink.mojom.AIPageContentTableData', [
      mojo.internal.StructField('arg_table_name', 0, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 16]]);

// Struct: AIPageContentTableRowData
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.AIPageContentTableRowDataSpec, 'blink.mojom.AIPageContentTableRowData', [
      mojo.internal.StructField('arg_row_type', 0, 0, mojo.internal.bindings.mojo.internal.bindings.blink.mojom.AIPageContentTableRowTypeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: AIPageContentFormData
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.AIPageContentFormDataSpec, 'blink.mojom.AIPageContentFormData', [
      mojo.internal.StructField('arg_form_name', 0, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_action_url', 8, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

// Struct: AIPageContentSelectOption
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.AIPageContentSelectOptionSpec, 'blink.mojom.AIPageContentSelectOption', [
      mojo.internal.StructField('arg_value', 0, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_text', 8, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_is_selected', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_disabled', 16, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: AIPageContentFormControlData
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.AIPageContentFormControlDataSpec, 'blink.mojom.AIPageContentFormControlData', [
      mojo.internal.StructField('arg_form_control_type', 0, 0, mojo.internal.bindings.blink.mojom.FormControlTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_field_name', 8, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_field_value', 16, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_select_options', 24, 0, mojo.internal.Array(mojo.internal.bindings.mojo.internal.bindings.blink.mojom.AIPageContentSelectOptionSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_placeholder', 32, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_redaction_decision', 40, 0, mojo.internal.bindings.mojo.internal.bindings.blink.mojom.AIPageContentRedactionDecisionSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_is_checked', 48, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_is_required', 48, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 64]]);

// Struct: AIPageContentAttributes
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.AIPageContentAttributesSpec, 'blink.mojom.AIPageContentAttributes', [
      mojo.internal.StructField('arg_attribute_type', 0, 0, mojo.internal.bindings.mojo.internal.bindings.blink.mojom.AIPageContentAttributeTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_geometry', 8, 0, mojo.internal.bindings.mojo.internal.bindings.blink.mojom.AIPageContentGeometrySpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_node_interaction_info', 16, 0, mojo.internal.bindings.mojo.internal.bindings.blink.mojom.AIPageContentNodeInteractionInfoSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_text_info', 24, 0, mojo.internal.bindings.mojo.internal.bindings.blink.mojom.AIPageContentTextInfoSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_image_info', 32, 0, mojo.internal.bindings.mojo.internal.bindings.blink.mojom.AIPageContentImageInfoSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_svg_root_data', 40, 0, mojo.internal.bindings.mojo.internal.bindings.blink.mojom.AIPageContentSvgRootDataSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_canvas_data', 48, 0, mojo.internal.bindings.mojo.internal.bindings.blink.mojom.AIPageContentCanvasDataSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_video_data', 56, 0, mojo.internal.bindings.mojo.internal.bindings.blink.mojom.AIPageContentVideoDataSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_anchor_data', 64, 0, mojo.internal.bindings.mojo.internal.bindings.blink.mojom.AIPageContentAnchorDataSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_form_data', 72, 0, mojo.internal.bindings.mojo.internal.bindings.blink.mojom.AIPageContentFormDataSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_form_control_data', 80, 0, mojo.internal.bindings.mojo.internal.bindings.blink.mojom.AIPageContentFormControlDataSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_table_data', 88, 0, mojo.internal.bindings.mojo.internal.bindings.blink.mojom.AIPageContentTableDataSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_iframe_data', 96, 0, mojo.internal.bindings.mojo.internal.bindings.blink.mojom.AIPageContentIframeDataSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_table_row_data', 104, 0, mojo.internal.bindings.mojo.internal.bindings.blink.mojom.AIPageContentTableRowDataSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_annotated_roles', 112, 0, mojo.internal.Array(mojo.internal.bindings.mojo.internal.bindings.blink.mojom.AIPageContentAnnotatedRoleSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_label', 120, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_aria_role', 128, 0, mojo.internal.bindings.ax.mojom.RoleSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_dom_node_id_$value', 136, 0, mojo.internal.Int32, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'arg_dom_node_id_$flag', originalFieldName: 'arg_dom_node_id' }),
      mojo.internal.StructField('arg_label_for_dom_node_id_$value', 140, 0, mojo.internal.Int32, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'arg_label_for_dom_node_id_$flag', originalFieldName: 'arg_label_for_dom_node_id' }),
      mojo.internal.StructField('arg_dom_node_id_$flag', 144, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'arg_dom_node_id_$value', originalFieldName: 'arg_dom_node_id' }),
      mojo.internal.StructField('arg_label_for_dom_node_id_$flag', 144, 1, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'arg_label_for_dom_node_id_$value', originalFieldName: 'arg_label_for_dom_node_id' }),
      mojo.internal.StructField('arg_is_ad_related', 144, 2, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 160]]);

// Struct: AIPageContentNode
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.AIPageContentNodeSpec, 'blink.mojom.AIPageContentNode', [
      mojo.internal.StructField('arg_children_nodes', 0, 0, mojo.internal.Array(mojo.internal.bindings.mojo.internal.bindings.blink.mojom.AIPageContentNodeSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_content_attributes', 8, 0, mojo.internal.bindings.mojo.internal.bindings.blink.mojom.AIPageContentAttributesSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: AIPageContentPopup
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.AIPageContentPopupSpec, 'blink.mojom.AIPageContentPopup', [
      mojo.internal.StructField('arg_root_node', 0, 0, mojo.internal.bindings.mojo.internal.bindings.blink.mojom.AIPageContentNodeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_visible_bounding_box', 8, 0, mojo.internal.bindings.gfx.mojom.RectSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_opener_dom_node_id', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: AIPageContent
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.AIPageContentSpec, 'blink.mojom.AIPageContent', [
      mojo.internal.StructField('arg_root_node', 0, 0, mojo.internal.bindings.mojo.internal.bindings.blink.mojom.AIPageContentNodeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_page_interaction_info', 8, 0, mojo.internal.bindings.mojo.internal.bindings.blink.mojom.AIPageContentPageInteractionInfoSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_frame_data', 16, 0, mojo.internal.bindings.mojo.internal.bindings.blink.mojom.AIPageContentFrameDataSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_visible_bounding_boxes_for_password_redaction', 24, 0, mojo.internal.Array(mojo.internal.bindings.gfx.mojom.RectSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: AIPageContentOptions
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.AIPageContentOptionsSpec, 'blink.mojom.AIPageContentOptions', [
      mojo.internal.StructField('arg_mode', 0, 0, mojo.internal.bindings.mojo.internal.bindings.blink.mojom.AIPageContentModeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_main_frame_view_rect_in_dips', 8, 0, mojo.internal.bindings.gfx.mojom.RectSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_max_meta_elements', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_on_critical_path', 20, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_include_same_site_only', 20, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_include_passwords_for_redaction', 20, 2, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

// Interface: AIPageContentAgent
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.AIPageContentAgent_GetAIPageContent_ParamsSpec, 'blink.mojom.AIPageContentAgent_GetAIPageContent_Params', [
      mojo.internal.StructField('arg_request', 0, 0, mojo.internal.bindings.mojo.internal.bindings.blink.mojom.AIPageContentOptionsSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.AIPageContentAgent_GetAIPageContent_ResponseParamsSpec, 'blink.mojom.AIPageContentAgent_GetAIPageContent_ResponseParams', [
      mojo.internal.StructField('arg_page_content', 0, 0, mojo.internal.bindings.mojo.internal.bindings.blink.mojom.AIPageContentSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.blink.mojom.AIPageContentAgentPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.blink.mojom.AIPageContentAgentRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.AIPageContentAgent';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.blink.mojom.AIPageContentAgentPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.blink.mojom.AIPageContentAgentRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  getAIPageContent(arg_request) {
    return this.$.getAIPageContent(arg_request);
  }
};

mojo.internal.bindings.blink.mojom.AIPageContentAgentRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('AIPageContentAgent', [
      { explicit: null },
    ]);
  }

  getAIPageContent(arg_request) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.blink.mojom.AIPageContentAgent_GetAIPageContent_ParamsSpec,
      mojo.internal.bindings.blink.mojom.AIPageContentAgent_GetAIPageContent_ResponseParamsSpec,
      [arg_request],
      false);
  }

};

mojo.internal.bindings.blink.mojom.AIPageContentAgent.getRemote = function() {
  let remote = new mojo.internal.bindings.blink.mojom.AIPageContentAgentRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.AIPageContentAgent',
    'context');
  return remote.$;
};

mojo.internal.bindings.blink.mojom.AIPageContentAgentReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('AIPageContentAgent', [
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx); // Scrambled/Explicit
      this.ordinalMap.set(idx, idx); // Sequential Fallback (Non-scrambled builds)
    });
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
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.AIPageContentAgent_GetAIPageContent_ParamsSpec);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.AIPageContentAgent_GetAIPageContent_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getAIPageContent');
          const result = this.impl.getAIPageContent(params.arg_request);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.blink.mojom.AIPageContentAgent_GetAIPageContent_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetAIPageContent FAILED:', e));
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

mojo.internal.bindings.blink.mojom.AIPageContentAgentReceiver = mojo.internal.bindings.blink.mojom.AIPageContentAgentReceiver;

mojo.internal.bindings.blink.mojom.AIPageContentAgentPtr = mojo.internal.bindings.blink.mojom.AIPageContentAgentRemote;
mojo.internal.bindings.blink.mojom.AIPageContentAgentRequest = mojo.internal.bindings.blink.mojom.AIPageContentAgentPendingReceiver;

