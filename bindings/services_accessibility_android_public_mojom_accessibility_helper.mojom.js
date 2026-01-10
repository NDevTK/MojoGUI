// Auto-generated MojoJS binding
// Source: chromium_src/services/accessibility/android/public/mojom/accessibility_helper.mojom
// Module: ax.android.mojom

'use strict';

// Module namespace
var ax = ax || {};
ax.android = ax.android || {};
ax.android.android.mojom = ax.android.android.mojom || {};


// Enum: AccessibilityEventType
ax.android.android.mojom.mojom.AccessibilityEventType = {
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
ax.android.android.mojom.mojom.AccessibilityEventTypeSpec = { $: mojo.internal.Enum() };

// Enum: ContentChangeType
ax.android.android.mojom.mojom.ContentChangeType = {
  CONTENT_DESCRIPTION: 0,
  STATE_DESCRIPTION: 1,
  SUBTREE: 2,
  TEXT: 3,
  PANE_TITLE: 4,
  UNDEFINED: 5,
  PANE_APPEARED: 6,
  PANE_DISAPPEARED: 7,
};
ax.android.android.mojom.mojom.ContentChangeTypeSpec = { $: mojo.internal.Enum() };

// Enum: AccessibilityActionType
ax.android.android.mojom.mojom.AccessibilityActionType = {
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
};
ax.android.android.mojom.mojom.AccessibilityActionTypeSpec = { $: mojo.internal.Enum() };

// Enum: AccessibilityBooleanProperty
ax.android.android.mojom.mojom.AccessibilityBooleanProperty = {
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
ax.android.android.mojom.mojom.AccessibilityBooleanPropertySpec = { $: mojo.internal.Enum() };

// Enum: AccessibilityStringProperty
ax.android.android.mojom.mojom.AccessibilityStringProperty = {
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
};
ax.android.android.mojom.mojom.AccessibilityStringPropertySpec = { $: mojo.internal.Enum() };

// Enum: AccessibilityIntProperty
ax.android.android.mojom.mojom.AccessibilityIntProperty = {
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
ax.android.android.mojom.mojom.AccessibilityIntPropertySpec = { $: mojo.internal.Enum() };

// Enum: AccessibilityIntListProperty
ax.android.android.mojom.mojom.AccessibilityIntListProperty = {
  CHILD_NODE_IDS: 0,
  CUSTOM_ACTION_IDS_DEPRECATED: 1,
  STANDARD_ACTION_IDS_DEPRECATED: 2,
};
ax.android.android.mojom.mojom.AccessibilityIntListPropertySpec = { $: mojo.internal.Enum() };

// Enum: AccessibilityStringListProperty
ax.android.android.mojom.mojom.AccessibilityStringListProperty = {
  CUSTOM_ACTION_DESCRIPTIONS: 0,
};
ax.android.android.mojom.mojom.AccessibilityStringListPropertySpec = { $: mojo.internal.Enum() };

// Enum: AccessibilityWindowBooleanProperty
ax.android.android.mojom.mojom.AccessibilityWindowBooleanProperty = {
  ACCESSIBILITY_FOCUSED: 0,
  FOCUSED: 1,
  IN_PICTURE_IN_PICTURE_MODE: 2,
  WINDOW_ACTIVE: 3,
};
ax.android.android.mojom.mojom.AccessibilityWindowBooleanPropertySpec = { $: mojo.internal.Enum() };

// Enum: AccessibilityWindowIntProperty
ax.android.android.mojom.mojom.AccessibilityWindowIntProperty = {
  ANCHOR_NODE_ID: 0,
  LAYER_ORDER: 1,
  PARENT_WINDOW_ID: 2,
};
ax.android.android.mojom.mojom.AccessibilityWindowIntPropertySpec = { $: mojo.internal.Enum() };

// Enum: AccessibilityWindowStringProperty
ax.android.android.mojom.mojom.AccessibilityWindowStringProperty = {
  TITLE: 0,
};
ax.android.android.mojom.mojom.AccessibilityWindowStringPropertySpec = { $: mojo.internal.Enum() };

// Enum: AccessibilityWindowIntListProperty
ax.android.android.mojom.mojom.AccessibilityWindowIntListProperty = {
  CHILD_WINDOW_IDS: 0,
};
ax.android.android.mojom.mojom.AccessibilityWindowIntListPropertySpec = { $: mojo.internal.Enum() };

// Enum: SpanType
ax.android.android.mojom.mojom.SpanType = {
  URL: 0,
  CLICKABLE: 1,
};
ax.android.android.mojom.mojom.SpanTypeSpec = { $: mojo.internal.Enum() };

// Enum: AccessibilitySelectionMode
ax.android.android.mojom.mojom.AccessibilitySelectionMode = {
  NONE: 0,
  SINGLE: 1,
  MULTIPLE: 2,
};
ax.android.android.mojom.mojom.AccessibilitySelectionModeSpec = { $: mojo.internal.Enum() };

// Enum: AccessibilityRangeType
ax.android.android.mojom.mojom.AccessibilityRangeType = {
  INT: 0,
  FLOAT: 1,
  PERCENT: 2,
};
ax.android.android.mojom.mojom.AccessibilityRangeTypeSpec = { $: mojo.internal.Enum() };

// Enum: AccessibilityLiveRegionType
ax.android.android.mojom.mojom.AccessibilityLiveRegionType = {
  NONE: 0,
  POLITE: 1,
  ASSERTIVE: 2,
};
ax.android.android.mojom.mojom.AccessibilityLiveRegionTypeSpec = { $: mojo.internal.Enum() };

// Enum: AccessibilityWindowType
ax.android.android.mojom.mojom.AccessibilityWindowType = {
  TYPE_ACCESSIBILITY_OVERLAY: 0,
  TYPE_APPLICATION: 1,
  TYPE_INPUT_METHOD: 2,
  TYPE_SPLIT_SCREEN_DIVIDER: 3,
  TYPE_SYSTEM: 4,
};
ax.android.android.mojom.mojom.AccessibilityWindowTypeSpec = { $: mojo.internal.Enum() };

// Enum: AccessibilityFilterType
ax.android.android.mojom.mojom.AccessibilityFilterType = {
  OFF: 0,
  FOCUS: 1,
  ALL: 2,
};
ax.android.android.mojom.mojom.AccessibilityFilterTypeSpec = { $: mojo.internal.Enum() };

// Enum: AccessibilityNotificationStateType
ax.android.android.mojom.mojom.AccessibilityNotificationStateType = {
  SURFACE_CREATED: 0,
  SURFACE_REMOVED: 1,
};
ax.android.android.mojom.mojom.AccessibilityNotificationStateTypeSpec = { $: mojo.internal.Enum() };

// Enum: AccessibilityEventIntProperty
ax.android.android.mojom.mojom.AccessibilityEventIntProperty = {
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
ax.android.android.mojom.mojom.AccessibilityEventIntPropertySpec = { $: mojo.internal.Enum() };

// Enum: AccessibilityEventStringProperty
ax.android.android.mojom.mojom.AccessibilityEventStringProperty = {
  CLASS_NAME: 0,
  PACKAGE_NAME: 1,
  CONTENT_DESCRIPTION: 2,
};
ax.android.android.mojom.mojom.AccessibilityEventStringPropertySpec = { $: mojo.internal.Enum() };

// Enum: AccessibilityEventIntListProperty
ax.android.android.mojom.mojom.AccessibilityEventIntListProperty = {
  CONTENT_CHANGE_TYPES: 0,
};
ax.android.android.mojom.mojom.AccessibilityEventIntListPropertySpec = { $: mojo.internal.Enum() };

// Enum: ActionFloatArgumentType
ax.android.android.mojom.mojom.ActionFloatArgumentType = {
  PROGRESS_VALUE: 0,
};
ax.android.android.mojom.mojom.ActionFloatArgumentTypeSpec = { $: mojo.internal.Enum() };

// Enum: ActionIntArgumentType
ax.android.android.mojom.mojom.ActionIntArgumentType = {
  MOVEMENT_GRANULARITY_INT: 0,
  SELECTION_START_INT: 1,
  SELECTION_END_INT: 2,
  ROW_INT: 3,
  COLUMN_INT: 4,
  MOVE_WINDOW_X: 5,
  MOVE_WINDOW_Y: 6,
  PRESS_AND_HOLD_DURATION_MILLIS_INT: 7,
};
ax.android.android.mojom.mojom.ActionIntArgumentTypeSpec = { $: mojo.internal.Enum() };

// Enum: ActionStringArgumentType
ax.android.android.mojom.mojom.ActionStringArgumentType = {
  HTML_ELEMENT_STRING: 0,
  SET_TEXT_CHARSEQUENCE: 1,
};
ax.android.android.mojom.mojom.ActionStringArgumentTypeSpec = { $: mojo.internal.Enum() };

// Enum: ActionComplexArgumentType
ax.android.android.mojom.mojom.ActionComplexArgumentType = {
  ACCESSIBLE_CLICKABLE_SPAN: 0,
};
ax.android.android.mojom.mojom.ActionComplexArgumentTypeSpec = { $: mojo.internal.Enum() };

// Enum: SetNativeChromeVoxResponse
ax.android.android.mojom.mojom.SetNativeChromeVoxResponse = {
  SUCCESS: 0,
  WINDOW_NOT_FOUND: 1,
  TALKBACK_NOT_INSTALLED: 2,
  FAILURE: 3,
  NEED_DEPRECATION_CONFIRMATION: 4,
};
ax.android.android.mojom.mojom.SetNativeChromeVoxResponseSpec = { $: mojo.internal.Enum() };

// Union: AccessibilityWindowKey
ax.android.android.mojom.mojom.AccessibilityWindowKeySpec = { $: mojo.internal.Union(
    'ax.android.mojom.AccessibilityWindowKey', {
      'window_id': {
        'ordinal': 0,
        'type': mojo.internal.Uint32,
      }},
      'task_id': {
        'ordinal': 1,
        'type': mojo.internal.Uint32,
      }},
    })
};

// Struct: Rect
ax.android.android.mojom.mojom.RectSpec = {
  $: {
    structSpec: {
      name: 'ax.android.mojom.Rect',
      packedSize: 24,
      fields: [
        { name: 'left', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'top', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'right', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'bottom', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: SpanEntry
ax.android.android.mojom.mojom.SpanEntrySpec = {
  $: {
    structSpec: {
      name: 'ax.android.mojom.SpanEntry',
      packedSize: 24,
      fields: [
        { name: 'start', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'end', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'span_type', packedOffset: 8, packedBitOffset: 0, type: ax.android.mojom.SpanTypeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: AccessibilityCollectionInfoData
ax.android.android.mojom.mojom.AccessibilityCollectionInfoDataSpec = {
  $: {
    structSpec: {
      name: 'ax.android.mojom.AccessibilityCollectionInfoData',
      packedSize: 24,
      fields: [
        { name: 'row_count', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'column_count', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'is_hierarchical', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'selection_mode', packedOffset: 8, packedBitOffset: 0, type: ax.android.mojom.AccessibilitySelectionModeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: AccessibilityCollectionItemInfoData
ax.android.android.mojom.mojom.AccessibilityCollectionItemInfoDataSpec = {
  $: {
    structSpec: {
      name: 'ax.android.mojom.AccessibilityCollectionItemInfoData',
      packedSize: 32,
      fields: [
        { name: 'row_index', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'column_index', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'row_span', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'column_span', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'is_heading', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'is_selected', packedOffset: 16, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: AccessibilityRangeInfoData
ax.android.android.mojom.mojom.AccessibilityRangeInfoDataSpec = {
  $: {
    structSpec: {
      name: 'ax.android.mojom.AccessibilityRangeInfoData',
      packedSize: 24,
      fields: [
        { name: 'range_type', packedOffset: 0, packedBitOffset: 0, type: ax.android.mojom.AccessibilityRangeTypeSpec, nullable: false, minVersion: 0 },
        { name: 'min', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
        { name: 'max', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
        { name: 'current', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: AccessibilityActionInAndroid
ax.android.android.mojom.mojom.AccessibilityActionInAndroidSpec = {
  $: {
    structSpec: {
      name: 'ax.android.mojom.AccessibilityActionInAndroid',
      packedSize: 24,
      fields: [
        { name: 'id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'label', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: AccessibilityNodeInfoData
ax.android.android.mojom.mojom.AccessibilityNodeInfoDataSpec = {
  $: {
    structSpec: {
      name: 'ax.android.mojom.AccessibilityNodeInfoData',
      packedSize: 120,
      fields: [
        { name: 'bounds_in_screen', packedOffset: 0, packedBitOffset: 0, type: ax.android.mojom.RectSpec, nullable: false, minVersion: 0 },
        { name: 'id', packedOffset: 96, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 1 },
        { name: 'boolean_properties', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Map(ax.android.mojom.AccessibilityBooleanPropertySpec, mojo.internal.Bool, false), nullable: true, minVersion: 1 },
        { name: 'string_properties', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Map(ax.android.mojom.AccessibilityStringPropertySpec, mojo.internal.String, false), nullable: true, minVersion: 1 },
        { name: 'int_properties', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Map(ax.android.mojom.AccessibilityIntPropertySpec, mojo.internal.Int32, false), nullable: true, minVersion: 1 },
        { name: 'int_list_properties', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Map(ax.android.mojom.AccessibilityIntListPropertySpec, mojo.internal.Array(mojo.internal.Int32, false), false), nullable: true, minVersion: 1 },
        { name: 'string_list_properties', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Map(ax.android.mojom.AccessibilityStringListPropertySpec, mojo.internal.Array(mojo.internal.String, false), false), nullable: true, minVersion: 3 },
        { name: 'spannable_string_properties', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Map(ax.android.mojom.AccessibilityStringPropertySpec, mojo.internal.Array(ax.android.mojom.SpanEntrySpec, false), false), nullable: true, minVersion: 5 },
        { name: 'collection_info', packedOffset: 56, packedBitOffset: 0, type: ax.android.mojom.AccessibilityCollectionInfoDataSpec, nullable: true, minVersion: 5 },
        { name: 'collection_item_info', packedOffset: 64, packedBitOffset: 0, type: ax.android.mojom.AccessibilityCollectionItemInfoDataSpec, nullable: true, minVersion: 5 },
        { name: 'range_info', packedOffset: 72, packedBitOffset: 0, type: ax.android.mojom.AccessibilityRangeInfoDataSpec, nullable: true, minVersion: 5 },
        { name: 'window_id', packedOffset: 100, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 12 },
        { name: 'is_virtual_node', packedOffset: 104, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 20 },
        { name: 'standard_actions', packedOffset: 80, packedBitOffset: 0, type: mojo.internal.Array(ax.android.mojom.AccessibilityActionInAndroidSpec, false), nullable: true, minVersion: 24 },
        { name: 'custom_actions', packedOffset: 88, packedBitOffset: 0, type: mojo.internal.Array(ax.android.mojom.AccessibilityActionInAndroidSpec, false), nullable: true, minVersion: 24 },
      ],
      versions: [{version: 0, packedSize: 16}, {version: 1, packedSize: 112}, {version: 3, packedSize: 112}, {version: 5, packedSize: 112}, {version: 12, packedSize: 112}, {version: 20, packedSize: 120}, {version: 24, packedSize: 120}]
    }
  }
};

// Struct: AccessibilityWindowInfoData
ax.android.android.mojom.mojom.AccessibilityWindowInfoDataSpec = {
  $: {
    structSpec: {
      name: 'ax.android.mojom.AccessibilityWindowInfoData',
      packedSize: 64,
      fields: [
        { name: 'window_id', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'root_node_id', packedOffset: 44, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'bounds_in_screen', packedOffset: 0, packedBitOffset: 0, type: ax.android.mojom.RectSpec, nullable: false, minVersion: 0 },
        { name: 'window_type', packedOffset: 48, packedBitOffset: 0, type: ax.android.mojom.AccessibilityWindowTypeSpec, nullable: false, minVersion: 0 },
        { name: 'boolean_properties', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Map(ax.android.mojom.AccessibilityWindowBooleanPropertySpec, mojo.internal.Bool, false), nullable: true, minVersion: 0 },
        { name: 'string_properties', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Map(ax.android.mojom.AccessibilityWindowStringPropertySpec, mojo.internal.String, false), nullable: true, minVersion: 0 },
        { name: 'int_properties', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Map(ax.android.mojom.AccessibilityWindowIntPropertySpec, mojo.internal.Int32, false), nullable: true, minVersion: 0 },
        { name: 'int_list_properties', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Map(ax.android.mojom.AccessibilityWindowIntListPropertySpec, mojo.internal.Array(mojo.internal.Int32, false), false), nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 64}]
    }
  }
};

// Struct: AccessibilityEventData
ax.android.android.mojom.mojom.AccessibilityEventDataSpec = {
  $: {
    structSpec: {
      name: 'ax.android.mojom.AccessibilityEventData',
      packedSize: 88,
      fields: [
        { name: 'event_type', packedOffset: 56, packedBitOffset: 0, type: ax.android.mojom.AccessibilityEventTypeSpec, nullable: false, minVersion: 0 },
        { name: 'source_id', packedOffset: 60, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'node_data', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(ax.android.mojom.AccessibilityNodeInfoDataSpec, false), nullable: false, minVersion: 0 },
        { name: 'notification_key', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 6 },
        { name: 'window_id', packedOffset: 64, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 6 },
        { name: 'task_id', packedOffset: 68, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 8 },
        { name: 'window_data', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array(ax.android.mojom.AccessibilityWindowInfoDataSpec, false), nullable: true, minVersion: 12 },
        { name: 'is_input_method_window', packedOffset: 72, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 14 },
        { name: 'event_text', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.String, false), nullable: true, minVersion: 15 },
        { name: 'int_properties', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Map(ax.android.mojom.AccessibilityEventIntPropertySpec, mojo.internal.Int32, false), nullable: true, minVersion: 21 },
        { name: 'string_properties', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Map(ax.android.mojom.AccessibilityEventStringPropertySpec, mojo.internal.String, false), nullable: true, minVersion: 21 },
        { name: 'int_list_properties', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Map(ax.android.mojom.AccessibilityEventIntListPropertySpec, mojo.internal.Array(mojo.internal.Int32, false), false), nullable: true, minVersion: 23 },
      ],
      versions: [{version: 0, packedSize: 72}, {version: 6, packedSize: 80}, {version: 8, packedSize: 80}, {version: 12, packedSize: 80}, {version: 14, packedSize: 88}, {version: 15, packedSize: 88}, {version: 21, packedSize: 88}, {version: 23, packedSize: 88}]
    }
  }
};

// Struct: AccessibilityActionData
ax.android.android.mojom.mojom.AccessibilityActionDataSpec = {
  $: {
    structSpec: {
      name: 'ax.android.mojom.AccessibilityActionData',
      packedSize: 56,
      fields: [
        { name: 'node_id', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'action_type', packedOffset: 28, packedBitOffset: 0, type: ax.android.mojom.AccessibilityActionTypeSpec, nullable: false, minVersion: 0 },
        { name: 'custom_action_id', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'window_id', packedOffset: 36, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 6 },
        { name: 'start_index', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 13 },
        { name: 'end_index', packedOffset: 44, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 13 },
        { name: 'int_parameters', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Map(ax.android.mojom.ActionIntArgumentTypeSpec, mojo.internal.Int32, false), nullable: true, minVersion: 25 },
        { name: 'string_parameters', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Map(ax.android.mojom.ActionStringArgumentTypeSpec, mojo.internal.String, false), nullable: true, minVersion: 25 },
        { name: 'float_parameters', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Map(ax.android.mojom.ActionFloatArgumentTypeSpec, mojo.internal.Float, false), nullable: true, minVersion: 25 },
      ],
      versions: [{version: 0, packedSize: 48}, {version: 6, packedSize: 48}, {version: 13, packedSize: 56}, {version: 25, packedSize: 56}]
    }
  }
};

// Interface: AccessibilityHelperHost
ax.android.android.mojom.mojom.AccessibilityHelperHost = {};

ax.android.android.mojom.mojom.AccessibilityHelperHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ax.android.android.mojom.mojom.AccessibilityHelperHostRemote = class {
  static get $interfaceName() {
    return 'ax.android.mojom.AccessibilityHelperHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ax.android.android.mojom.mojom.AccessibilityHelperHostPendingReceiver,
      handle);
    this.$ = new ax.android.android.mojom.mojom.AccessibilityHelperHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ax.android.android.mojom.mojom.AccessibilityHelperHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onAccessibilityEvent(event_data) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ax.android.android.mojom.mojom.AccessibilityHelperHost_OnAccessibilityEvent_ParamsSpec,
      null,
      [event_data]);
  }

  onNotificationStateChanged(notification_key, state) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ax.android.android.mojom.mojom.AccessibilityHelperHost_OnNotificationStateChanged_ParamsSpec,
      null,
      [notification_key, state]);
  }

  onToggleNativeChromeVoxArcSupport(enabled) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      ax.android.android.mojom.mojom.AccessibilityHelperHost_OnToggleNativeChromeVoxArcSupport_ParamsSpec,
      null,
      [enabled]);
  }

};

ax.android.android.mojom.mojom.AccessibilityHelperHost.getRemote = function() {
  let remote = new ax.android.android.mojom.mojom.AccessibilityHelperHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ax.android.mojom.AccessibilityHelperHost',
    'context');
  return remote.$;
};

// ParamsSpec for OnAccessibilityEvent
ax.android.android.mojom.mojom.AccessibilityHelperHost_OnAccessibilityEvent_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ax.android.mojom.AccessibilityHelperHost.OnAccessibilityEvent_Params',
      packedSize: 16,
      fields: [
        { name: 'event_data', packedOffset: 0, packedBitOffset: 0, type: ax.android.mojom.AccessibilityEventDataSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnNotificationStateChanged
ax.android.android.mojom.mojom.AccessibilityHelperHost_OnNotificationStateChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ax.android.mojom.AccessibilityHelperHost.OnNotificationStateChanged_Params',
      packedSize: 24,
      fields: [
        { name: 'notification_key', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'state', packedOffset: 8, packedBitOffset: 0, type: ax.android.mojom.AccessibilityNotificationStateTypeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for OnToggleNativeChromeVoxArcSupport
ax.android.android.mojom.mojom.AccessibilityHelperHost_OnToggleNativeChromeVoxArcSupport_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ax.android.mojom.AccessibilityHelperHost.OnToggleNativeChromeVoxArcSupport_Params',
      packedSize: 16,
      fields: [
        { name: 'enabled', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
ax.android.android.mojom.mojom.AccessibilityHelperHostPtr = ax.android.android.mojom.mojom.AccessibilityHelperHostRemote;
ax.android.android.mojom.mojom.AccessibilityHelperHostRequest = ax.android.android.mojom.mojom.AccessibilityHelperHostPendingReceiver;


// Interface: AccessibilityHelperInstance
ax.android.android.mojom.mojom.AccessibilityHelperInstance = {};

ax.android.android.mojom.mojom.AccessibilityHelperInstancePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ax.android.android.mojom.mojom.AccessibilityHelperInstanceRemote = class {
  static get $interfaceName() {
    return 'ax.android.mojom.AccessibilityHelperInstance';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ax.android.android.mojom.mojom.AccessibilityHelperInstancePendingReceiver,
      handle);
    this.$ = new ax.android.android.mojom.mojom.AccessibilityHelperInstanceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ax.android.android.mojom.mojom.AccessibilityHelperInstanceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  init(host_remote) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      ax.android.android.mojom.mojom.AccessibilityHelperInstance_Init_ParamsSpec,
      null,
      [host_remote]);
  }

  setFilter(filter_type) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ax.android.android.mojom.mojom.AccessibilityHelperInstance_SetFilter_ParamsSpec,
      null,
      [filter_type]);
  }

  performAction(action_data) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      ax.android.android.mojom.mojom.AccessibilityHelperInstance_PerformAction_ParamsSpec,
      ax.android.android.mojom.mojom.AccessibilityHelperInstance_PerformAction_ResponseParamsSpec,
      [action_data]);
  }

  setExploreByTouchEnabled(enabled) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      ax.android.android.mojom.mojom.AccessibilityHelperInstance_SetExploreByTouchEnabled_ParamsSpec,
      null,
      [enabled]);
  }

  refreshWithExtraData(refresh_data) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      ax.android.android.mojom.mojom.AccessibilityHelperInstance_RefreshWithExtraData_ParamsSpec,
      ax.android.android.mojom.mojom.AccessibilityHelperInstance_RefreshWithExtraData_ResponseParamsSpec,
      [refresh_data]);
  }

  requestSendAccessibilityTree(window) {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      ax.android.android.mojom.mojom.AccessibilityHelperInstance_RequestSendAccessibilityTree_ParamsSpec,
      null,
      [window]);
  }

  setNativeChromeVoxArcSupportForFocusedWindow(enabled) {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      ax.android.android.mojom.mojom.AccessibilityHelperInstance_SetNativeChromeVoxArcSupportForFocusedWindow_ParamsSpec,
      ax.android.android.mojom.mojom.AccessibilityHelperInstance_SetNativeChromeVoxArcSupportForFocusedWindow_ResponseParamsSpec,
      [enabled]);
  }

};

ax.android.android.mojom.mojom.AccessibilityHelperInstance.getRemote = function() {
  let remote = new ax.android.android.mojom.mojom.AccessibilityHelperInstanceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ax.android.mojom.AccessibilityHelperInstance',
    'context');
  return remote.$;
};

// ParamsSpec for Init
ax.android.android.mojom.mojom.AccessibilityHelperInstance_Init_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ax.android.mojom.AccessibilityHelperInstance.Init_Params',
      packedSize: 16,
      fields: [
        { name: 'host_remote', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetFilter
ax.android.android.mojom.mojom.AccessibilityHelperInstance_SetFilter_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ax.android.mojom.AccessibilityHelperInstance.SetFilter_Params',
      packedSize: 16,
      fields: [
        { name: 'filter_type', packedOffset: 0, packedBitOffset: 0, type: ax.android.mojom.AccessibilityFilterTypeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for PerformAction
ax.android.android.mojom.mojom.AccessibilityHelperInstance_PerformAction_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ax.android.mojom.AccessibilityHelperInstance.PerformAction_Params',
      packedSize: 16,
      fields: [
        { name: 'action_data', packedOffset: 0, packedBitOffset: 0, type: ax.android.mojom.AccessibilityActionDataSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

ax.android.android.mojom.mojom.AccessibilityHelperInstance_PerformAction_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ax.android.mojom.AccessibilityHelperInstance.PerformAction_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetExploreByTouchEnabled
ax.android.android.mojom.mojom.AccessibilityHelperInstance_SetExploreByTouchEnabled_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ax.android.mojom.AccessibilityHelperInstance.SetExploreByTouchEnabled_Params',
      packedSize: 16,
      fields: [
        { name: 'enabled', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for RefreshWithExtraData
ax.android.android.mojom.mojom.AccessibilityHelperInstance_RefreshWithExtraData_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ax.android.mojom.AccessibilityHelperInstance.RefreshWithExtraData_Params',
      packedSize: 16,
      fields: [
        { name: 'refresh_data', packedOffset: 0, packedBitOffset: 0, type: ax.android.mojom.AccessibilityActionDataSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

ax.android.android.mojom.mojom.AccessibilityHelperInstance_RefreshWithExtraData_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ax.android.mojom.AccessibilityHelperInstance.RefreshWithExtraData_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'text_location', packedOffset: 0, packedBitOffset: 0, type: ax.android.mojom.RectSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for RequestSendAccessibilityTree
ax.android.android.mojom.mojom.AccessibilityHelperInstance_RequestSendAccessibilityTree_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ax.android.mojom.AccessibilityHelperInstance.RequestSendAccessibilityTree_Params',
      packedSize: 24,
      fields: [
        { name: 'window', packedOffset: 0, packedBitOffset: 0, type: ax.android.mojom.AccessibilityWindowKeySpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for SetNativeChromeVoxArcSupportForFocusedWindow
ax.android.android.mojom.mojom.AccessibilityHelperInstance_SetNativeChromeVoxArcSupportForFocusedWindow_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ax.android.mojom.AccessibilityHelperInstance.SetNativeChromeVoxArcSupportForFocusedWindow_Params',
      packedSize: 16,
      fields: [
        { name: 'enabled', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

ax.android.android.mojom.mojom.AccessibilityHelperInstance_SetNativeChromeVoxArcSupportForFocusedWindow_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ax.android.mojom.AccessibilityHelperInstance.SetNativeChromeVoxArcSupportForFocusedWindow_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'response', packedOffset: 0, packedBitOffset: 0, type: ax.android.mojom.SetNativeChromeVoxResponseSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
ax.android.android.mojom.mojom.AccessibilityHelperInstancePtr = ax.android.android.mojom.mojom.AccessibilityHelperInstanceRemote;
ax.android.android.mojom.mojom.AccessibilityHelperInstanceRequest = ax.android.android.mojom.mojom.AccessibilityHelperInstancePendingReceiver;

