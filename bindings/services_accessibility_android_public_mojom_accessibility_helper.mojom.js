// Auto-generated MojoJS binding
// Source: chromium_src/services/accessibility/android/public/mojom/accessibility_helper.mojom
// Module: ax.android.mojom

'use strict';

// Module namespace
var ax = ax || {};
ax.android = ax.android || {};
ax.android.mojom = ax.android.mojom || {};


// Enum: AccessibilityEventType
ax.android.mojom.AccessibilityEventType = {
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
};

// Enum: ContentChangeType
ax.android.mojom.ContentChangeType = {
  CONTENT_DESCRIPTION: 0,
  STATE_DESCRIPTION: 1,
  SUBTREE: 2,
  TEXT: 3,
  PANE_TITLE: 4,
  UNDEFINED: 5,
  PANE_APPEARED: 6,
  PANE_DISAPPEARED: 7,
};

// Enum: AccessibilityActionType
ax.android.mojom.AccessibilityActionType = {
  FOCUS: 0,
  CLEAR_FOCUS: 1,
  SELECT: 2,
  CLEAR_SELECTION: 3,
  CLICK: 4,
  LONG_CLICK: 5,
  ACCESSIBILITY_FOCUS: 6,
  CLEAR_ACCESSIBILITY_FOCUS: 7,
  NEXT_AT_MOVEMENT_GRANULARITY: 8,
  SCROLL_BACKWARD: 9,
  COPY: 10,
  PASTE: 11,
  CUT: 12,
  SET_SELECTION: 13,
  EXPAND: 14,
  COLLAPSE: 15,
  DISMISS: 16,
  SET_TEXT: 17,
  CONTEXT_CLICK: 18,
  SCROLL_DOWN: 19,
  SCROLL_LEFT: 20,
  SCROLL_RIGHT: 21,
  SCROLL_TO_POSITION: 22,
  SCROLL_UP: 23,
  SET_PROGRESS: 24,
  SHOW_ON_SCREEN: 25,
  CUSTOM_ACTION: 26,
  HIDE_TOOLTIP: 27,
};

// Enum: AccessibilityBooleanProperty
ax.android.mojom.AccessibilityBooleanProperty = {
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
};

// Enum: AccessibilityStringProperty
ax.android.mojom.AccessibilityStringProperty = {
  PACKAGE_NAME: 0,
  CLASS_NAME: 1,
  TEXT: 2,
  CONTENT_DESCRIPTION: 3,
  VIEW_ID_RESOURCE_NAME: 4,
  CHROME_ROLE: 5,
  PANE_TITLE: 6,
  HINT_TEXT: 7,
  STATE_DESCRIPTION: 8,
};

// Enum: AccessibilityIntProperty
ax.android.mojom.AccessibilityIntProperty = {
  LABEL_FOR: 0,
  LABELED_BY: 1,
  TRAVERSAL_BEFORE: 2,
  TRAVERSAL_AFTER: 3,
  MAX_TEXT_LENGTH: 4,
  TEXT_SELECTION_START: 5,
  TEXT_SELECTION_END: 6,
  INPUT_TYPE: 7,
  LIVE_REGION: 8,
};

// Enum: AccessibilityIntListProperty
ax.android.mojom.AccessibilityIntListProperty = {
  CHILD_NODE_IDS: 0,
  CUSTOM_ACTION_IDS_DEPRECATED: 1,
  STANDARD_ACTION_IDS_DEPRECATED: 2,
};

// Enum: AccessibilityStringListProperty
ax.android.mojom.AccessibilityStringListProperty = {
  CUSTOM_ACTION_DESCRIPTIONS: 0,
};

// Enum: AccessibilityWindowBooleanProperty
ax.android.mojom.AccessibilityWindowBooleanProperty = {
  ACCESSIBILITY_FOCUSED: 0,
  FOCUSED: 1,
  IN_PICTURE_IN_PICTURE_MODE: 2,
  WINDOW_ACTIVE: 3,
};

// Enum: AccessibilityWindowIntProperty
ax.android.mojom.AccessibilityWindowIntProperty = {
  ANCHOR_NODE_ID: 0,
  LAYER_ORDER: 1,
  PARENT_WINDOW_ID: 2,
};

// Enum: AccessibilityWindowStringProperty
ax.android.mojom.AccessibilityWindowStringProperty = {
  TITLE: 0,
};

// Enum: AccessibilityWindowIntListProperty
ax.android.mojom.AccessibilityWindowIntListProperty = {
  CHILD_WINDOW_IDS: 0,
};

// Enum: SpanType
ax.android.mojom.SpanType = {
  URL: 0,
  CLICKABLE: 1,
};

// Enum: AccessibilitySelectionMode
ax.android.mojom.AccessibilitySelectionMode = {
  NONE: 0,
  SINGLE: 1,
  MULTIPLE: 2,
};

// Enum: AccessibilityRangeType
ax.android.mojom.AccessibilityRangeType = {
  INT: 0,
  FLOAT: 1,
  PERCENT: 2,
};

// Enum: AccessibilityLiveRegionType
ax.android.mojom.AccessibilityLiveRegionType = {
  NONE: 0,
  POLITE: 1,
  ASSERTIVE: 2,
};

// Enum: AccessibilityWindowType
ax.android.mojom.AccessibilityWindowType = {
  TYPE_ACCESSIBILITY_OVERLAY: 0,
  TYPE_APPLICATION: 1,
  TYPE_INPUT_METHOD: 2,
  TYPE_SPLIT_SCREEN_DIVIDER: 3,
  TYPE_SYSTEM: 4,
};

// Enum: AccessibilityFilterType
ax.android.mojom.AccessibilityFilterType = {
};

// Enum: AccessibilityNotificationStateType
ax.android.mojom.AccessibilityNotificationStateType = {
};

// Enum: AccessibilityEventIntProperty
ax.android.mojom.AccessibilityEventIntProperty = {
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
};

// Enum: AccessibilityEventStringProperty
ax.android.mojom.AccessibilityEventStringProperty = {
  CLASS_NAME: 0,
  PACKAGE_NAME: 1,
  CONTENT_DESCRIPTION: 2,
};

// Enum: AccessibilityEventIntListProperty
ax.android.mojom.AccessibilityEventIntListProperty = {
  CONTENT_CHANGE_TYPES: 0,
};

// Enum: ActionFloatArgumentType
ax.android.mojom.ActionFloatArgumentType = {
  PROGRESS_VALUE: 0,
};

// Enum: ActionIntArgumentType
ax.android.mojom.ActionIntArgumentType = {
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
ax.android.mojom.ActionStringArgumentType = {
  HTML_ELEMENT_STRING: 0,
  SET_TEXT_CHARSEQUENCE: 1,
};

// Enum: ActionComplexArgumentType
ax.android.mojom.ActionComplexArgumentType = {
  ACCESSIBLE_CLICKABLE_SPAN: 0,
};

// Enum: SetNativeChromeVoxResponse
ax.android.mojom.SetNativeChromeVoxResponse = {
  SUCCESS: 0,
  WINDOW_NOT_FOUND: 1,
  TALKBACK_NOT_INSTALLED: 2,
  FAILURE: 3,
};

// Struct: Rect
ax.android.mojom.Rect = class {
  constructor(values = {}) {
    this.bottom = values.bottom !== undefined ? values.bottom : 0;
  }
};

// Struct: SpanEntry
ax.android.mojom.SpanEntry = class {
  constructor(values = {}) {
    this.span_type = values.span_type !== undefined ? values.span_type : 0;
  }
};

// Struct: AccessibilityCollectionInfoData
ax.android.mojom.AccessibilityCollectionInfoData = class {
  constructor(values = {}) {
    this.selection_mode = values.selection_mode !== undefined ? values.selection_mode : 0;
  }
};

// Struct: AccessibilityCollectionItemInfoData
ax.android.mojom.AccessibilityCollectionItemInfoData = class {
  constructor(values = {}) {
    this.is_selected = values.is_selected !== undefined ? values.is_selected : 0;
  }
};

// Struct: AccessibilityRangeInfoData
ax.android.mojom.AccessibilityRangeInfoData = class {
  constructor(values = {}) {
    this.current = values.current !== undefined ? values.current : 0;
  }
};

// Struct: AccessibilityActionInAndroid
ax.android.mojom.AccessibilityActionInAndroid = class {
  constructor(values = {}) {
    this.label = values.label !== undefined ? values.label : 0;
  }
};

// Struct: AccessibilityNodeInfoData
ax.android.mojom.AccessibilityNodeInfoData = class {
  constructor(values = {}) {
    this.custom_actions = values.custom_actions !== undefined ? values.custom_actions : 0;
  }
};

// Struct: AccessibilityWindowInfoData
ax.android.mojom.AccessibilityWindowInfoData = class {
  constructor(values = {}) {
    this.int_list_properties = values.int_list_properties !== undefined ? values.int_list_properties : 0;
  }
};

// Struct: AccessibilityEventData
ax.android.mojom.AccessibilityEventData = class {
  constructor(values = {}) {
    this.notification_key = values.notification_key !== undefined ? values.notification_key : 0;
    this.task_id = values.task_id !== undefined ? values.task_id : 0;
    this.int_list_properties = values.int_list_properties !== undefined ? values.int_list_properties : 0;
  }
};

// Struct: AccessibilityActionData
ax.android.mojom.AccessibilityActionData = class {
  constructor(values = {}) {
    this.float_parameters = values.float_parameters !== undefined ? values.float_parameters : 0;
  }
};

// Interface: AccessibilityHelperHost
ax.android.mojom.AccessibilityHelperHostPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ax.android.mojom.AccessibilityHelperHost';
  }

};

ax.android.mojom.AccessibilityHelperHostRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: AccessibilityHelperInstance
ax.android.mojom.AccessibilityHelperInstancePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ax.android.mojom.AccessibilityHelperInstance';
  }

};

ax.android.mojom.AccessibilityHelperInstanceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
