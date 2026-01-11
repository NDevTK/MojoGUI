// Auto-generated MojoJS binding
 // Source: chromium_src/services/accessibility/android/public/mojom/accessibility_helper.mojom
 // Module: ax.android.mojom

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

         const versionStr = window.mojoVersion || '120.0.0.0';
         const p = versionStr.split('.');
         const salt = 'MAJOR=' + p[0] + '\n' + 'MINOR=' + (p[1]||0) + '\n' + 'BUILD=' + (p[2]||0) + '\n' + 'PATCH=' + (p[3]||0) + '\n';
         
         const shortName = ifaceName.split('.').pop();
         while (true) {
           i++;
           const h0 = SHA256(salt + shortName + i);
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
 

 mojo.internal.bindings.ax = mojo.internal.bindings.ax || {};
mojo.internal.bindings.ax.android = mojo.internal.bindings.ax.android || {};
mojo.internal.bindings.ax.android.mojom = mojo.internal.bindings.ax.android.mojom || {};

mojo.internal.bindings.ax.android.mojom.AccessibilityEventTypeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.ax.android.mojom.ContentChangeTypeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.ax.android.mojom.AccessibilityActionTypeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.ax.android.mojom.AccessibilityBooleanPropertySpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.ax.android.mojom.AccessibilityStringPropertySpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.ax.android.mojom.AccessibilityIntPropertySpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.ax.android.mojom.AccessibilityIntListPropertySpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.ax.android.mojom.AccessibilityStringListPropertySpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.ax.android.mojom.AccessibilityWindowBooleanPropertySpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.ax.android.mojom.AccessibilityWindowIntPropertySpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.ax.android.mojom.AccessibilityWindowStringPropertySpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.ax.android.mojom.AccessibilityWindowIntListPropertySpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.ax.android.mojom.SpanTypeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.ax.android.mojom.AccessibilitySelectionModeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.ax.android.mojom.AccessibilityRangeTypeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.ax.android.mojom.AccessibilityLiveRegionTypeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.ax.android.mojom.AccessibilityWindowTypeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.ax.android.mojom.AccessibilityFilterTypeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.ax.android.mojom.AccessibilityNotificationStateTypeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.ax.android.mojom.AccessibilityEventIntPropertySpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.ax.android.mojom.AccessibilityEventStringPropertySpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.ax.android.mojom.AccessibilityEventIntListPropertySpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.ax.android.mojom.ActionFloatArgumentTypeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.ax.android.mojom.ActionIntArgumentTypeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.ax.android.mojom.ActionStringArgumentTypeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.ax.android.mojom.ActionComplexArgumentTypeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.ax.android.mojom.SetNativeChromeVoxResponseSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.ax.android.mojom.AccessibilityWindowKeySpec = { $: {} };
mojo.internal.bindings.ax.android.mojom.RectSpec = { $: {} };
mojo.internal.bindings.ax.android.mojom.SpanEntrySpec = { $: {} };
mojo.internal.bindings.ax.android.mojom.AccessibilityCollectionInfoDataSpec = { $: {} };
mojo.internal.bindings.ax.android.mojom.AccessibilityCollectionItemInfoDataSpec = { $: {} };
mojo.internal.bindings.ax.android.mojom.AccessibilityRangeInfoDataSpec = { $: {} };
mojo.internal.bindings.ax.android.mojom.AccessibilityActionInAndroidSpec = { $: {} };
mojo.internal.bindings.ax.android.mojom.AccessibilityNodeInfoDataSpec = { $: {} };
mojo.internal.bindings.ax.android.mojom.AccessibilityWindowInfoDataSpec = { $: {} };
mojo.internal.bindings.ax.android.mojom.AccessibilityEventDataSpec = { $: {} };
mojo.internal.bindings.ax.android.mojom.AccessibilityActionDataSpec = { $: {} };
mojo.internal.bindings.ax.android.mojom.AccessibilityHelperHost = {};
mojo.internal.bindings.ax.android.mojom.AccessibilityHelperHostSpec = { $ : {} };
mojo.internal.bindings.ax.android.mojom.AccessibilityHelperHost.$interfaceName = 'ax.android.mojom.AccessibilityHelperHost';
mojo.internal.bindings.ax.android.mojom.AccessibilityHelperHost_OnAccessibilityEvent_ParamsSpec = { $: {} };
mojo.internal.bindings.ax.android.mojom.AccessibilityHelperHost_OnNotificationStateChanged_ParamsSpec = { $: {} };
mojo.internal.bindings.ax.android.mojom.AccessibilityHelperHost_OnToggleNativeChromeVoxArcSupport_ParamsSpec = { $: {} };
mojo.internal.bindings.ax.android.mojom.AccessibilityHelperInstance = {};
mojo.internal.bindings.ax.android.mojom.AccessibilityHelperInstanceSpec = { $ : {} };
mojo.internal.bindings.ax.android.mojom.AccessibilityHelperInstance.$interfaceName = 'ax.android.mojom.AccessibilityHelperInstance';
mojo.internal.bindings.ax.android.mojom.AccessibilityHelperInstance_Init_ParamsSpec = { $: {} };
mojo.internal.bindings.ax.android.mojom.AccessibilityHelperInstance_Init_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ax.android.mojom.AccessibilityHelperInstance_SetFilter_ParamsSpec = { $: {} };
mojo.internal.bindings.ax.android.mojom.AccessibilityHelperInstance_PerformAction_ParamsSpec = { $: {} };
mojo.internal.bindings.ax.android.mojom.AccessibilityHelperInstance_PerformAction_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ax.android.mojom.AccessibilityHelperInstance_SetExploreByTouchEnabled_ParamsSpec = { $: {} };
mojo.internal.bindings.ax.android.mojom.AccessibilityHelperInstance_RefreshWithExtraData_ParamsSpec = { $: {} };
mojo.internal.bindings.ax.android.mojom.AccessibilityHelperInstance_RefreshWithExtraData_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ax.android.mojom.AccessibilityHelperInstance_RequestSendAccessibilityTree_ParamsSpec = { $: {} };
mojo.internal.bindings.ax.android.mojom.AccessibilityHelperInstance_SetNativeChromeVoxArcSupportForFocusedWindow_ParamsSpec = { $: {} };
mojo.internal.bindings.ax.android.mojom.AccessibilityHelperInstance_SetNativeChromeVoxArcSupportForFocusedWindow_ResponseParamsSpec = { $: {} };

// Enum: AccessibilityEventType
mojo.internal.bindings.ax.android.mojom.AccessibilityEventType = {
  VIEW_FOCUSED: 0,
  VIEW_CLICKED: 1,
  VIEW_LONG_CLICKED: 2,
  VIEW_SELECTED: 3,
  VIEW_TEXT_CHANGED: 4,
  WINDOW_STATE_CHANGED: 5,
  NOTIFICATION_STATE_CHANGED: 6,
  VIEW_HOVER_ENTER: 7,
  VIEW_HOVER_EXIT: 8,
  TOUCH_EXPLORATION_GESTURE_START: 9,
  TOUCH_EXPLORATION_GESTURE_END: 10,
  WINDOW_CONTENT_CHANGED: 11,
  VIEW_SCROLLED: 12,
  VIEW_TEXT_SELECTION_CHANGED: 13,
  ANNOUNCEMENT: 14,
  VIEW_ACCESSIBILITY_FOCUSED: 15,
  VIEW_ACCESSIBILITY_FOCUS_CLEARED: 16,
  VIEW_TEXT_TRAVERSED_AT_MOVEMENT_GRANULARITY: 17,
  GESTURE_DETECTION_START: 18,
  GESTURE_DETECTION_END: 19,
  TOUCH_INTERACTION_START: 20,
  TOUCH_INTERACTION_END: 21,
  WINDOWS_CHANGED: 22,
  VIEW_CONTEXT_CLICKED: 23,
  ASSIST_READING_CONTEXT: 24,
  INVALID_ENUM_VALUE: 25,
};

// Enum: ContentChangeType
mojo.internal.bindings.ax.android.mojom.ContentChangeType = {
  CONTENT_DESCRIPTION: 0,
  STATE_DESCRIPTION: 1,
  SUBTREE: 2,
  TEXT: 3,
  PANE_TITLE: 4,
  UNDEFINED: 5,
  PANE_APPEARED: 6,
  PANE_DISAPPEARED: 7,
  INVALID_ENUM_VALUE: 8,
};

// Enum: AccessibilityActionType
mojo.internal.bindings.ax.android.mojom.AccessibilityActionType = {
  FOCUS: 0,
  CLEAR_FOCUS: 1,
  SELECT: 2,
  CLEAR_SELECTION: 3,
  CLICK: 4,
  LONG_CLICK: 5,
  ACCESSIBILITY_FOCUS: 6,
  CLEAR_ACCESSIBILITY_FOCUS: 7,
  NEXT_AT_MOVEMENT_GRANULARITY: 8,
  PREVIOUS_AT_MOVEMENT_GRANULARITY: 9,
  NEXT_HTML_ELEMENT: 10,
  PREVIOUS_HTML_ELEMENT: 11,
  SCROLL_FORWARD: 12,
  SCROLL_BACKWARD: 13,
  COPY: 14,
  PASTE: 15,
  CUT: 16,
  SET_SELECTION: 17,
  EXPAND: 18,
  COLLAPSE: 19,
  DISMISS: 20,
  SET_TEXT: 21,
  CONTEXT_CLICK: 22,
  SCROLL_DOWN: 23,
  SCROLL_LEFT: 24,
  SCROLL_RIGHT: 25,
  SCROLL_TO_POSITION: 26,
  SCROLL_UP: 27,
  SET_PROGRESS: 28,
  SHOW_ON_SCREEN: 29,
  CUSTOM_ACTION: 30,
  GET_TEXT_LOCATION: 31,
  SHOW_TOOLTIP: 32,
  HIDE_TOOLTIP: 33,
  INVALID_ENUM_VALUE: 34,
};

// Enum: AccessibilityBooleanProperty
mojo.internal.bindings.ax.android.mojom.AccessibilityBooleanProperty = {
  CHECKABLE: 0,
  CHECKED: 1,
  FOCUSABLE: 2,
  FOCUSED: 3,
  SELECTED: 4,
  CLICKABLE: 5,
  LONG_CLICKABLE: 6,
  ENABLED: 7,
  PASSWORD: 8,
  SCROLLABLE: 9,
  ACCESSIBILITY_FOCUSED: 10,
  VISIBLE_TO_USER: 11,
  EDITABLE: 12,
  OPENS_POPUP: 13,
  DISMISSABLE: 14,
  MULTI_LINE: 15,
  CONTENT_INVALID: 16,
  CONTEXT_CLICKABLE: 17,
  IMPORTANCE: 18,
  SCREEN_READER_FOCUSABLE: 19,
  SHOWING_HINT_TEXT: 20,
  HEADING: 21,
  SUPPORTS_TEXT_LOCATION: 22,
  INVALID_ENUM_VALUE: 23,
};

// Enum: AccessibilityStringProperty
mojo.internal.bindings.ax.android.mojom.AccessibilityStringProperty = {
  PACKAGE_NAME: 0,
  CLASS_NAME: 1,
  TEXT: 2,
  CONTENT_DESCRIPTION: 3,
  VIEW_ID_RESOURCE_NAME: 4,
  CHROME_ROLE: 5,
  ROLE_DESCRIPTION: 6,
  TOOLTIP: 7,
  PANE_TITLE: 8,
  HINT_TEXT: 9,
  STATE_DESCRIPTION: 10,
  INVALID_ENUM_VALUE: 11,
};

// Enum: AccessibilityIntProperty
mojo.internal.bindings.ax.android.mojom.AccessibilityIntProperty = {
  LABEL_FOR: 0,
  LABELED_BY: 1,
  TRAVERSAL_BEFORE: 2,
  TRAVERSAL_AFTER: 3,
  MAX_TEXT_LENGTH: 4,
  TEXT_SELECTION_START: 5,
  TEXT_SELECTION_END: 6,
  INPUT_TYPE: 7,
  LIVE_REGION: 8,
  INVALID_ENUM_VALUE: 9,
};

// Enum: AccessibilityIntListProperty
mojo.internal.bindings.ax.android.mojom.AccessibilityIntListProperty = {
  CHILD_NODE_IDS: 0,
  CUSTOM_ACTION_IDS_DEPRECATED: 1,
  STANDARD_ACTION_IDS_DEPRECATED: 2,
  INVALID_ENUM_VALUE: 3,
};

// Enum: AccessibilityStringListProperty
mojo.internal.bindings.ax.android.mojom.AccessibilityStringListProperty = {
  CUSTOM_ACTION_DESCRIPTIONS: 0,
  INVALID_ENUM_VALUE: 1,
};

// Enum: AccessibilityWindowBooleanProperty
mojo.internal.bindings.ax.android.mojom.AccessibilityWindowBooleanProperty = {
  ACCESSIBILITY_FOCUSED: 0,
  FOCUSED: 1,
  IN_PICTURE_IN_PICTURE_MODE: 2,
  WINDOW_ACTIVE: 3,
  INVALID_ENUM_VALUE: 4,
};

// Enum: AccessibilityWindowIntProperty
mojo.internal.bindings.ax.android.mojom.AccessibilityWindowIntProperty = {
  ANCHOR_NODE_ID: 0,
  LAYER_ORDER: 1,
  PARENT_WINDOW_ID: 2,
  INVALID_ENUM_VALUE: 3,
};

// Enum: AccessibilityWindowStringProperty
mojo.internal.bindings.ax.android.mojom.AccessibilityWindowStringProperty = {
  TITLE: 0,
  INVALID_ENUM_VALUE: 1,
};

// Enum: AccessibilityWindowIntListProperty
mojo.internal.bindings.ax.android.mojom.AccessibilityWindowIntListProperty = {
  CHILD_WINDOW_IDS: 0,
  INVALID_ENUM_VALUE: 1,
};

// Enum: SpanType
mojo.internal.bindings.ax.android.mojom.SpanType = {
  URL: 0,
  CLICKABLE: 1,
  INVALID_ENUM_VALUE: 2,
};

// Enum: AccessibilitySelectionMode
mojo.internal.bindings.ax.android.mojom.AccessibilitySelectionMode = {
  NONE: 0,
  SINGLE: 1,
  MULTIPLE: 2,
  INVALID_ENUM_VALUE: 3,
};

// Enum: AccessibilityRangeType
mojo.internal.bindings.ax.android.mojom.AccessibilityRangeType = {
  INT: 0,
  FLOAT: 1,
  PERCENT: 2,
  INVALID_ENUM_VALUE: 3,
};

// Enum: AccessibilityLiveRegionType
mojo.internal.bindings.ax.android.mojom.AccessibilityLiveRegionType = {
  NONE: 0,
  POLITE: 1,
  ASSERTIVE: 2,
  INVALID_ENUM_VALUE: 3,
};

// Enum: AccessibilityWindowType
mojo.internal.bindings.ax.android.mojom.AccessibilityWindowType = {
  TYPE_ACCESSIBILITY_OVERLAY: 0,
  TYPE_APPLICATION: 1,
  TYPE_INPUT_METHOD: 2,
  TYPE_SPLIT_SCREEN_DIVIDER: 3,
  TYPE_SYSTEM: 4,
  INVALID_ENUM_VALUE: 5,
};

// Enum: AccessibilityFilterType
mojo.internal.bindings.ax.android.mojom.AccessibilityFilterType = {
  OFF: 0,
  FOCUS: 1,
  ALL: 2,
  INVALID_ENUM_VALUE: 3,
};

// Enum: AccessibilityNotificationStateType
mojo.internal.bindings.ax.android.mojom.AccessibilityNotificationStateType = {
  SURFACE_CREATED: 0,
  SURFACE_REMOVED: 1,
  INVALID_ENUM_VALUE: 2,
};

// Enum: AccessibilityEventIntProperty
mojo.internal.bindings.ax.android.mojom.AccessibilityEventIntProperty = {
  ACTION: 0,
  FROM_INDEX: 1,
  TO_INDEX: 2,
  ITEM_COUNT: 3,
  CURRENT_ITEM_INDEX: 4,
  SCROLL_X: 5,
  SCROLL_Y: 6,
  MAX_SCROLL_X: 7,
  MAX_SCROLL_Y: 8,
  SCROLL_DELTA_X: 9,
  SCROLL_DELTA_Y: 10,
  INVALID_ENUM_VALUE: 11,
};

// Enum: AccessibilityEventStringProperty
mojo.internal.bindings.ax.android.mojom.AccessibilityEventStringProperty = {
  CLASS_NAME: 0,
  PACKAGE_NAME: 1,
  CONTENT_DESCRIPTION: 2,
  INVALID_ENUM_VALUE: 3,
};

// Enum: AccessibilityEventIntListProperty
mojo.internal.bindings.ax.android.mojom.AccessibilityEventIntListProperty = {
  CONTENT_CHANGE_TYPES: 0,
  INVALID_ENUM_VALUE: 1,
};

// Enum: ActionFloatArgumentType
mojo.internal.bindings.ax.android.mojom.ActionFloatArgumentType = {
  PROGRESS_VALUE: 0,
};

// Enum: ActionIntArgumentType
mojo.internal.bindings.ax.android.mojom.ActionIntArgumentType = {
  MOVEMENT_GRANULARITY_INT: 0,
  SELECTION_START_INT: 1,
  SELECTION_END_INT: 2,
  ROW_INT: 3,
  COLUMN_INT: 4,
  MOVE_WINDOW_X: 5,
  MOVE_WINDOW_Y: 6,
  PRESS_AND_HOLD_DURATION_MILLIS_INT: 7,
};

// Enum: ActionStringArgumentType
mojo.internal.bindings.ax.android.mojom.ActionStringArgumentType = {
  HTML_ELEMENT_STRING: 0,
  SET_TEXT_CHARSEQUENCE: 1,
};

// Enum: ActionComplexArgumentType
mojo.internal.bindings.ax.android.mojom.ActionComplexArgumentType = {
  ACCESSIBLE_CLICKABLE_SPAN: 0,
};

// Enum: SetNativeChromeVoxResponse
mojo.internal.bindings.ax.android.mojom.SetNativeChromeVoxResponse = {
  SUCCESS: 0,
  WINDOW_NOT_FOUND: 1,
  TALKBACK_NOT_INSTALLED: 2,
  FAILURE: 3,
  NEED_DEPRECATION_CONFIRMATION: 4,
  INVALID_ENUM_VALUE: 5,
};

// Union: AccessibilityWindowKey
mojo.internal.Union(
    mojo.internal.bindings.ax.android.mojom.AccessibilityWindowKeySpec, 'ax.android.mojom.AccessibilityWindowKey', {
      'arg_window_id': {
        'ordinal': 0,
        'type': mojo.internal.Uint32,
        'nullable': false,
      },
      'arg_task_id': {
        'ordinal': 1,
        'type': mojo.internal.Uint32,
        'nullable': false,
      },
    });

// Struct: Rect
mojo.internal.Struct(
    mojo.internal.bindings.ax.android.mojom.RectSpec, 'ax.android.mojom.Rect', [
      mojo.internal.StructField('arg_left', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_top', 4, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_right', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_bottom', 12, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: SpanEntry
mojo.internal.Struct(
    mojo.internal.bindings.ax.android.mojom.SpanEntrySpec, 'ax.android.mojom.SpanEntry', [
      mojo.internal.StructField('arg_span_type', 0, 0, mojo.internal.bindings.ax.android.mojom.SpanTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_start', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_end', 12, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: AccessibilityCollectionInfoData
mojo.internal.Struct(
    mojo.internal.bindings.ax.android.mojom.AccessibilityCollectionInfoDataSpec, 'ax.android.mojom.AccessibilityCollectionInfoData', [
      mojo.internal.StructField('arg_selection_mode', 0, 0, mojo.internal.bindings.ax.android.mojom.AccessibilitySelectionModeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_row_count', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_column_count', 12, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_is_hierarchical', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: AccessibilityCollectionItemInfoData
mojo.internal.Struct(
    mojo.internal.bindings.ax.android.mojom.AccessibilityCollectionItemInfoDataSpec, 'ax.android.mojom.AccessibilityCollectionItemInfoData', [
      mojo.internal.StructField('arg_row_index', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_column_index', 4, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_row_span', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_column_span', 12, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_is_heading', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_is_selected', 16, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: AccessibilityRangeInfoData
mojo.internal.Struct(
    mojo.internal.bindings.ax.android.mojom.AccessibilityRangeInfoDataSpec, 'ax.android.mojom.AccessibilityRangeInfoData', [
      mojo.internal.StructField('arg_range_type', 0, 0, mojo.internal.bindings.ax.android.mojom.AccessibilityRangeTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_min', 8, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('arg_max', 12, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('arg_current', 16, 0, mojo.internal.Float, 0, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: AccessibilityActionInAndroid
mojo.internal.Struct(
    mojo.internal.bindings.ax.android.mojom.AccessibilityActionInAndroidSpec, 'ax.android.mojom.AccessibilityActionInAndroid', [
      mojo.internal.StructField('arg_label', 0, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_id', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: AccessibilityNodeInfoData
mojo.internal.Struct(
    mojo.internal.bindings.ax.android.mojom.AccessibilityNodeInfoDataSpec, 'ax.android.mojom.AccessibilityNodeInfoData', [
      mojo.internal.StructField('arg_bounds_in_screen', 0, 0, mojo.internal.bindings.ax.android.mojom.RectSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_boolean_properties', 8, 0, mojo.internal.Map(mojo.internal.bindings.ax.android.mojom.AccessibilityBooleanPropertySpec.$, mojo.internal.Bool, false), null, true, 1, undefined),
      mojo.internal.StructField('arg_string_properties', 16, 0, mojo.internal.Map(mojo.internal.bindings.ax.android.mojom.AccessibilityStringPropertySpec.$, mojo.internal.String, false), null, true, 1, undefined),
      mojo.internal.StructField('arg_int_properties', 24, 0, mojo.internal.Map(mojo.internal.bindings.ax.android.mojom.AccessibilityIntPropertySpec.$, mojo.internal.Int32, false), null, true, 1, undefined),
      mojo.internal.StructField('arg_int_list_properties', 32, 0, mojo.internal.Map(mojo.internal.bindings.ax.android.mojom.AccessibilityIntListPropertySpec.$, mojo.internal.Array(mojo.internal.Int32, false), false), null, true, 1, undefined),
      mojo.internal.StructField('arg_id', 40, 0, mojo.internal.Int32, 0, false, 1, undefined),
      mojo.internal.StructField('arg_string_list_properties', 48, 0, mojo.internal.Map(mojo.internal.bindings.ax.android.mojom.AccessibilityStringListPropertySpec.$, mojo.internal.Array(mojo.internal.String, false), false), null, true, 3, undefined),
      mojo.internal.StructField('arg_spannable_string_properties', 56, 0, mojo.internal.Map(mojo.internal.bindings.ax.android.mojom.AccessibilityStringPropertySpec.$, mojo.internal.Array(mojo.internal.bindings.ax.android.mojom.SpanEntrySpec.$, false), false), null, true, 5, undefined),
      mojo.internal.StructField('arg_collection_info', 64, 0, mojo.internal.bindings.ax.android.mojom.AccessibilityCollectionInfoDataSpec.$, null, true, 5, undefined),
      mojo.internal.StructField('arg_collection_item_info', 72, 0, mojo.internal.bindings.ax.android.mojom.AccessibilityCollectionItemInfoDataSpec.$, null, true, 5, undefined),
      mojo.internal.StructField('arg_range_info', 80, 0, mojo.internal.bindings.ax.android.mojom.AccessibilityRangeInfoDataSpec.$, null, true, 5, undefined),
      mojo.internal.StructField('arg_window_id', 88, 0, mojo.internal.Int32, 0, false, 12, undefined),
      mojo.internal.StructField('arg_is_virtual_node', 92, 0, mojo.internal.Bool, false, false, 20, undefined),
      mojo.internal.StructField('arg_standard_actions', 96, 0, mojo.internal.Array(mojo.internal.bindings.ax.android.mojom.AccessibilityActionInAndroidSpec.$, false), null, true, 24, undefined),
      mojo.internal.StructField('arg_custom_actions', 104, 0, mojo.internal.Array(mojo.internal.bindings.ax.android.mojom.AccessibilityActionInAndroidSpec.$, false), null, true, 24, undefined),
    ],
    [[0, 16], [1, 56], [3, 64], [5, 96], [12, 104], [20, 104], [24, 120]]);

// Struct: AccessibilityWindowInfoData
mojo.internal.Struct(
    mojo.internal.bindings.ax.android.mojom.AccessibilityWindowInfoDataSpec, 'ax.android.mojom.AccessibilityWindowInfoData', [
      mojo.internal.StructField('arg_bounds_in_screen', 0, 0, mojo.internal.bindings.ax.android.mojom.RectSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_window_type', 8, 0, mojo.internal.bindings.ax.android.mojom.AccessibilityWindowTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_boolean_properties', 16, 0, mojo.internal.Map(mojo.internal.bindings.ax.android.mojom.AccessibilityWindowBooleanPropertySpec.$, mojo.internal.Bool, false), null, true, 0, undefined),
      mojo.internal.StructField('arg_string_properties', 24, 0, mojo.internal.Map(mojo.internal.bindings.ax.android.mojom.AccessibilityWindowStringPropertySpec.$, mojo.internal.String, false), null, true, 0, undefined),
      mojo.internal.StructField('arg_int_properties', 32, 0, mojo.internal.Map(mojo.internal.bindings.ax.android.mojom.AccessibilityWindowIntPropertySpec.$, mojo.internal.Int32, false), null, true, 0, undefined),
      mojo.internal.StructField('arg_int_list_properties', 40, 0, mojo.internal.Map(mojo.internal.bindings.ax.android.mojom.AccessibilityWindowIntListPropertySpec.$, mojo.internal.Array(mojo.internal.Int32, false), false), null, true, 0, undefined),
      mojo.internal.StructField('arg_window_id', 48, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_root_node_id', 52, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 64]]);

// Struct: AccessibilityEventData
mojo.internal.Struct(
    mojo.internal.bindings.ax.android.mojom.AccessibilityEventDataSpec, 'ax.android.mojom.AccessibilityEventData', [
      mojo.internal.StructField('arg_event_type', 0, 0, mojo.internal.bindings.ax.android.mojom.AccessibilityEventTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_node_data', 8, 0, mojo.internal.Array(mojo.internal.bindings.ax.android.mojom.AccessibilityNodeInfoDataSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_source_id', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_notification_key', 24, 0, mojo.internal.String, null, true, 6, undefined),
      mojo.internal.StructField('arg_window_id', 32, 0, mojo.internal.Int32, 0, false, 6, undefined),
      mojo.internal.StructField('arg_task_id', 36, 0, mojo.internal.Int32, 0, false, 8, undefined),
      mojo.internal.StructField('arg_window_data', 40, 0, mojo.internal.Array(mojo.internal.bindings.ax.android.mojom.AccessibilityWindowInfoDataSpec.$, false), null, true, 12, undefined),
      mojo.internal.StructField('arg_is_input_method_window', 48, 0, mojo.internal.Bool, false, false, 14, undefined),
      mojo.internal.StructField('arg_event_text', 56, 0, mojo.internal.Array(mojo.internal.String, false), null, true, 15, undefined),
      mojo.internal.StructField('arg_int_properties', 64, 0, mojo.internal.Map(mojo.internal.bindings.ax.android.mojom.AccessibilityEventIntPropertySpec.$, mojo.internal.Int32, false), null, true, 21, undefined),
      mojo.internal.StructField('arg_string_properties', 72, 0, mojo.internal.Map(mojo.internal.bindings.ax.android.mojom.AccessibilityEventStringPropertySpec.$, mojo.internal.String, false), null, true, 21, undefined),
      mojo.internal.StructField('arg_int_list_properties', 80, 0, mojo.internal.Map(mojo.internal.bindings.ax.android.mojom.AccessibilityEventIntListPropertySpec.$, mojo.internal.Array(mojo.internal.Int32, false), false), null, true, 23, undefined),
    ],
    [[0, 32], [6, 48], [8, 48], [12, 56], [14, 64], [15, 72], [21, 88], [23, 96]]);

// Struct: AccessibilityActionData
mojo.internal.Struct(
    mojo.internal.bindings.ax.android.mojom.AccessibilityActionDataSpec, 'ax.android.mojom.AccessibilityActionData', [
      mojo.internal.StructField('arg_action_type', 0, 0, mojo.internal.bindings.ax.android.mojom.AccessibilityActionTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_node_id', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_custom_action_id', 12, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_window_id', 16, 0, mojo.internal.Int32, 0, false, 6, undefined),
      mojo.internal.StructField('arg_start_index', 20, 0, mojo.internal.Int32, 0, false, 13, undefined),
      mojo.internal.StructField('arg_end_index', 24, 0, mojo.internal.Int32, 0, false, 13, undefined),
      mojo.internal.StructField('arg_int_parameters', 32, 0, mojo.internal.Map(mojo.internal.bindings.ax.android.mojom.ActionIntArgumentTypeSpec.$, mojo.internal.Int32, false), null, true, 25, undefined),
      mojo.internal.StructField('arg_string_parameters', 40, 0, mojo.internal.Map(mojo.internal.bindings.ax.android.mojom.ActionStringArgumentTypeSpec.$, mojo.internal.String, false), null, true, 25, undefined),
      mojo.internal.StructField('arg_float_parameters', 48, 0, mojo.internal.Map(mojo.internal.bindings.ax.android.mojom.ActionFloatArgumentTypeSpec.$, mojo.internal.Float, false), null, true, 25, undefined),
    ],
    [[0, 24], [6, 32], [13, 40], [25, 64]]);

// Interface: AccessibilityHelperHost
mojo.internal.Struct(
    mojo.internal.bindings.ax.android.mojom.AccessibilityHelperHost_OnAccessibilityEvent_ParamsSpec, 'ax.android.mojom.AccessibilityHelperHost_OnAccessibilityEvent_Params', [
      mojo.internal.StructField('arg_event_data', 0, 0, mojo.internal.bindings.ax.android.mojom.AccessibilityEventDataSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ax.android.mojom.AccessibilityHelperHost_OnNotificationStateChanged_ParamsSpec, 'ax.android.mojom.AccessibilityHelperHost_OnNotificationStateChanged_Params', [
      mojo.internal.StructField('arg_notification_key', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_state', 8, 0, mojo.internal.bindings.ax.android.mojom.AccessibilityNotificationStateTypeSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.ax.android.mojom.AccessibilityHelperHost_OnToggleNativeChromeVoxArcSupport_ParamsSpec, 'ax.android.mojom.AccessibilityHelperHost_OnToggleNativeChromeVoxArcSupport_Params', [
      mojo.internal.StructField('arg_enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.ax.android.mojom.AccessibilityHelperHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.ax.android.mojom.AccessibilityHelperHostRemote = class {
  static get $interfaceName() {
    return 'ax.android.mojom.AccessibilityHelperHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.ax.android.mojom.AccessibilityHelperHostPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.ax.android.mojom.AccessibilityHelperHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onAccessibilityEvent(arg_event_data) {
    return this.$.onAccessibilityEvent(arg_event_data);
  }
  onNotificationStateChanged(arg_notification_key, arg_state) {
    return this.$.onNotificationStateChanged(arg_notification_key, arg_state);
  }
  onToggleNativeChromeVoxArcSupport(arg_enabled) {
    return this.$.onToggleNativeChromeVoxArcSupport(arg_enabled);
  }
};

mojo.internal.bindings.ax.android.mojom.AccessibilityHelperHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ax.android.mojom.AccessibilityHelperHost', [
      { explicit: 1 },
      { explicit: 2 },
      { explicit: 3 },
    ]);
  }

  onAccessibilityEvent(arg_event_data) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.ax.android.mojom.AccessibilityHelperHost_OnAccessibilityEvent_ParamsSpec,
      null,
      [arg_event_data],
      false);
  }

  onNotificationStateChanged(arg_notification_key, arg_state) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.ax.android.mojom.AccessibilityHelperHost_OnNotificationStateChanged_ParamsSpec,
      null,
      [arg_notification_key, arg_state],
      false);
  }

  onToggleNativeChromeVoxArcSupport(arg_enabled) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.ax.android.mojom.AccessibilityHelperHost_OnToggleNativeChromeVoxArcSupport_ParamsSpec,
      null,
      [arg_enabled],
      false);
  }

};

mojo.internal.bindings.ax.android.mojom.AccessibilityHelperHost.getRemote = function() {
  let remote = new mojo.internal.bindings.ax.android.mojom.AccessibilityHelperHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ax.android.mojom.AccessibilityHelperHost',
    'context');
  return remote.$;
};

mojo.internal.bindings.ax.android.mojom.AccessibilityHelperHostReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ax.android.mojom.AccessibilityHelperHost', [
      { explicit: 1 },
      { explicit: 2 },
      { explicit: 3 },
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
        
        // Try Method 0: OnAccessibilityEvent
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ax.android.mojom.AccessibilityHelperHost_OnAccessibilityEvent_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnAccessibilityEvent (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: OnNotificationStateChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ax.android.mojom.AccessibilityHelperHost_OnNotificationStateChanged_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnNotificationStateChanged (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: OnToggleNativeChromeVoxArcSupport
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ax.android.mojom.AccessibilityHelperHost_OnToggleNativeChromeVoxArcSupport_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnToggleNativeChromeVoxArcSupport (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.ax.android.mojom.AccessibilityHelperHost_OnAccessibilityEvent_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onAccessibilityEvent');
          const result = this.impl.onAccessibilityEvent(params.arg_event_data);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ax.android.mojom.AccessibilityHelperHost_OnNotificationStateChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onNotificationStateChanged');
          const result = this.impl.onNotificationStateChanged(params.arg_notification_key, params.arg_state);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ax.android.mojom.AccessibilityHelperHost_OnToggleNativeChromeVoxArcSupport_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onToggleNativeChromeVoxArcSupport');
          const result = this.impl.onToggleNativeChromeVoxArcSupport(params.arg_enabled);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.ax.android.mojom.AccessibilityHelperHostReceiver = mojo.internal.bindings.ax.android.mojom.AccessibilityHelperHostReceiver;

mojo.internal.bindings.ax.android.mojom.AccessibilityHelperHostPtr = mojo.internal.bindings.ax.android.mojom.AccessibilityHelperHostRemote;
mojo.internal.bindings.ax.android.mojom.AccessibilityHelperHostRequest = mojo.internal.bindings.ax.android.mojom.AccessibilityHelperHostPendingReceiver;


// Interface: AccessibilityHelperInstance
mojo.internal.Struct(
    mojo.internal.bindings.ax.android.mojom.AccessibilityHelperInstance_Init_ParamsSpec, 'ax.android.mojom.AccessibilityHelperInstance_Init_Params', [
      mojo.internal.StructField('arg_host_remote', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.ax.android.mojom.AccessibilityHelperHostRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ax.android.mojom.AccessibilityHelperInstance_Init_ResponseParamsSpec, 'ax.android.mojom.AccessibilityHelperInstance_Init_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ax.android.mojom.AccessibilityHelperInstance_SetFilter_ParamsSpec, 'ax.android.mojom.AccessibilityHelperInstance_SetFilter_Params', [
      mojo.internal.StructField('arg_filter_type', 0, 0, mojo.internal.bindings.ax.android.mojom.AccessibilityFilterTypeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ax.android.mojom.AccessibilityHelperInstance_PerformAction_ParamsSpec, 'ax.android.mojom.AccessibilityHelperInstance_PerformAction_Params', [
      mojo.internal.StructField('arg_action_data', 0, 0, mojo.internal.bindings.ax.android.mojom.AccessibilityActionDataSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ax.android.mojom.AccessibilityHelperInstance_PerformAction_ResponseParamsSpec, 'ax.android.mojom.AccessibilityHelperInstance_PerformAction_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ax.android.mojom.AccessibilityHelperInstance_SetExploreByTouchEnabled_ParamsSpec, 'ax.android.mojom.AccessibilityHelperInstance_SetExploreByTouchEnabled_Params', [
      mojo.internal.StructField('arg_enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ax.android.mojom.AccessibilityHelperInstance_RefreshWithExtraData_ParamsSpec, 'ax.android.mojom.AccessibilityHelperInstance_RefreshWithExtraData_Params', [
      mojo.internal.StructField('arg_refresh_data', 0, 0, mojo.internal.bindings.ax.android.mojom.AccessibilityActionDataSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ax.android.mojom.AccessibilityHelperInstance_RefreshWithExtraData_ResponseParamsSpec, 'ax.android.mojom.AccessibilityHelperInstance_RefreshWithExtraData_ResponseParams', [
      mojo.internal.StructField('arg_text_location', 0, 0, mojo.internal.bindings.ax.android.mojom.RectSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ax.android.mojom.AccessibilityHelperInstance_RequestSendAccessibilityTree_ParamsSpec, 'ax.android.mojom.AccessibilityHelperInstance_RequestSendAccessibilityTree_Params', [
      mojo.internal.StructField('arg_window', 0, 0, mojo.internal.bindings.ax.android.mojom.AccessibilityWindowKeySpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ax.android.mojom.AccessibilityHelperInstance_SetNativeChromeVoxArcSupportForFocusedWindow_ParamsSpec, 'ax.android.mojom.AccessibilityHelperInstance_SetNativeChromeVoxArcSupportForFocusedWindow_Params', [
      mojo.internal.StructField('arg_enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ax.android.mojom.AccessibilityHelperInstance_SetNativeChromeVoxArcSupportForFocusedWindow_ResponseParamsSpec, 'ax.android.mojom.AccessibilityHelperInstance_SetNativeChromeVoxArcSupportForFocusedWindow_ResponseParams', [
      mojo.internal.StructField('arg_response', 0, 0, mojo.internal.bindings.ax.android.mojom.SetNativeChromeVoxResponseSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.ax.android.mojom.AccessibilityHelperInstancePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.ax.android.mojom.AccessibilityHelperInstanceRemote = class {
  static get $interfaceName() {
    return 'ax.android.mojom.AccessibilityHelperInstance';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.ax.android.mojom.AccessibilityHelperInstancePendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.ax.android.mojom.AccessibilityHelperInstanceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  init(arg_host_remote) {
    return this.$.init(arg_host_remote);
  }
  setFilter(arg_filter_type) {
    return this.$.setFilter(arg_filter_type);
  }
  performAction(arg_action_data) {
    return this.$.performAction(arg_action_data);
  }
  setExploreByTouchEnabled(arg_enabled) {
    return this.$.setExploreByTouchEnabled(arg_enabled);
  }
  refreshWithExtraData(arg_refresh_data) {
    return this.$.refreshWithExtraData(arg_refresh_data);
  }
  requestSendAccessibilityTree(arg_window) {
    return this.$.requestSendAccessibilityTree(arg_window);
  }
  setNativeChromeVoxArcSupportForFocusedWindow(arg_enabled) {
    return this.$.setNativeChromeVoxArcSupportForFocusedWindow(arg_enabled);
  }
};

mojo.internal.bindings.ax.android.mojom.AccessibilityHelperInstanceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ax.android.mojom.AccessibilityHelperInstance', [
      { explicit: 7 },
      { explicit: 2 },
      { explicit: 4 },
      { explicit: 8 },
      { explicit: 9 },
      { explicit: 11 },
      { explicit: 12 },
    ]);
  }

  init(arg_host_remote) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.ax.android.mojom.AccessibilityHelperInstance_Init_ParamsSpec,
      mojo.internal.bindings.ax.android.mojom.AccessibilityHelperInstance_Init_ResponseParamsSpec,
      [arg_host_remote],
      false);
  }

  setFilter(arg_filter_type) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.ax.android.mojom.AccessibilityHelperInstance_SetFilter_ParamsSpec,
      null,
      [arg_filter_type],
      false);
  }

  performAction(arg_action_data) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.ax.android.mojom.AccessibilityHelperInstance_PerformAction_ParamsSpec,
      mojo.internal.bindings.ax.android.mojom.AccessibilityHelperInstance_PerformAction_ResponseParamsSpec,
      [arg_action_data],
      false);
  }

  setExploreByTouchEnabled(arg_enabled) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.ax.android.mojom.AccessibilityHelperInstance_SetExploreByTouchEnabled_ParamsSpec,
      null,
      [arg_enabled],
      false);
  }

  refreshWithExtraData(arg_refresh_data) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.ax.android.mojom.AccessibilityHelperInstance_RefreshWithExtraData_ParamsSpec,
      mojo.internal.bindings.ax.android.mojom.AccessibilityHelperInstance_RefreshWithExtraData_ResponseParamsSpec,
      [arg_refresh_data],
      false);
  }

  requestSendAccessibilityTree(arg_window) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojo.internal.bindings.ax.android.mojom.AccessibilityHelperInstance_RequestSendAccessibilityTree_ParamsSpec,
      null,
      [arg_window],
      false);
  }

  setNativeChromeVoxArcSupportForFocusedWindow(arg_enabled) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      mojo.internal.bindings.ax.android.mojom.AccessibilityHelperInstance_SetNativeChromeVoxArcSupportForFocusedWindow_ParamsSpec,
      mojo.internal.bindings.ax.android.mojom.AccessibilityHelperInstance_SetNativeChromeVoxArcSupportForFocusedWindow_ResponseParamsSpec,
      [arg_enabled],
      false);
  }

};

mojo.internal.bindings.ax.android.mojom.AccessibilityHelperInstance.getRemote = function() {
  let remote = new mojo.internal.bindings.ax.android.mojom.AccessibilityHelperInstanceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ax.android.mojom.AccessibilityHelperInstance',
    'context');
  return remote.$;
};

mojo.internal.bindings.ax.android.mojom.AccessibilityHelperInstanceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ax.android.mojom.AccessibilityHelperInstance', [
      { explicit: 7 },
      { explicit: 2 },
      { explicit: 4 },
      { explicit: 8 },
      { explicit: 9 },
      { explicit: 11 },
      { explicit: 12 },
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
        
        // Try Method 0: Init
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ax.android.mojom.AccessibilityHelperInstance_Init_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Init (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: SetFilter
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ax.android.mojom.AccessibilityHelperInstance_SetFilter_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetFilter (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: PerformAction
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ax.android.mojom.AccessibilityHelperInstance_PerformAction_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> PerformAction (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: SetExploreByTouchEnabled
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ax.android.mojom.AccessibilityHelperInstance_SetExploreByTouchEnabled_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetExploreByTouchEnabled (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: RefreshWithExtraData
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ax.android.mojom.AccessibilityHelperInstance_RefreshWithExtraData_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RefreshWithExtraData (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: RequestSendAccessibilityTree
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ax.android.mojom.AccessibilityHelperInstance_RequestSendAccessibilityTree_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RequestSendAccessibilityTree (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: SetNativeChromeVoxArcSupportForFocusedWindow
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ax.android.mojom.AccessibilityHelperInstance_SetNativeChromeVoxArcSupportForFocusedWindow_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetNativeChromeVoxArcSupportForFocusedWindow (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.ax.android.mojom.AccessibilityHelperInstance_Init_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.init');
          const result = this.impl.init(params.arg_host_remote);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ax.android.mojom.AccessibilityHelperInstance_Init_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] Init FAILED:', e));
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ax.android.mojom.AccessibilityHelperInstance_SetFilter_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setFilter');
          const result = this.impl.setFilter(params.arg_filter_type);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ax.android.mojom.AccessibilityHelperInstance_PerformAction_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.performAction');
          const result = this.impl.performAction(params.arg_action_data);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ax.android.mojom.AccessibilityHelperInstance_PerformAction_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] PerformAction FAILED:', e));
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ax.android.mojom.AccessibilityHelperInstance_SetExploreByTouchEnabled_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setExploreByTouchEnabled');
          const result = this.impl.setExploreByTouchEnabled(params.arg_enabled);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ax.android.mojom.AccessibilityHelperInstance_RefreshWithExtraData_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.refreshWithExtraData');
          const result = this.impl.refreshWithExtraData(params.arg_refresh_data);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ax.android.mojom.AccessibilityHelperInstance_RefreshWithExtraData_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] RefreshWithExtraData FAILED:', e));
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ax.android.mojom.AccessibilityHelperInstance_RequestSendAccessibilityTree_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.requestSendAccessibilityTree');
          const result = this.impl.requestSendAccessibilityTree(params.arg_window);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ax.android.mojom.AccessibilityHelperInstance_SetNativeChromeVoxArcSupportForFocusedWindow_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setNativeChromeVoxArcSupportForFocusedWindow');
          const result = this.impl.setNativeChromeVoxArcSupportForFocusedWindow(params.arg_enabled);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ax.android.mojom.AccessibilityHelperInstance_SetNativeChromeVoxArcSupportForFocusedWindow_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] SetNativeChromeVoxArcSupportForFocusedWindow FAILED:', e));
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

mojo.internal.bindings.ax.android.mojom.AccessibilityHelperInstanceReceiver = mojo.internal.bindings.ax.android.mojom.AccessibilityHelperInstanceReceiver;

mojo.internal.bindings.ax.android.mojom.AccessibilityHelperInstancePtr = mojo.internal.bindings.ax.android.mojom.AccessibilityHelperInstanceRemote;
mojo.internal.bindings.ax.android.mojom.AccessibilityHelperInstanceRequest = mojo.internal.bindings.ax.android.mojom.AccessibilityHelperInstancePendingReceiver;

