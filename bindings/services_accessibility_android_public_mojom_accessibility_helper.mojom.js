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
  ROLE_DESCRIPTION: 6,
  TOOLTIP: 7,
  PANE_TITLE: 8,
  HINT_TEXT: 9,
  STATE_DESCRIPTION: 10,
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
  OFF: 0,
  FOCUS: 1,
  ALL: 2,
};

// Enum: AccessibilityNotificationStateType
ax.android.mojom.AccessibilityNotificationStateType = {
  SURFACE_CREATED: 0,
  SURFACE_REMOVED: 1,
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
  NEED_DEPRECATION_CONFIRMATION: 4,
};

// Struct: Rect
ax.android.mojom.RectSpec = {
  $: {
    structSpec: {
      name: 'ax.android.mojom.Rect',
      packedSize: 16,
      fields: [
        { name: 'bottom', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: SpanEntry
ax.android.mojom.SpanEntrySpec = {
  $: {
    structSpec: {
      name: 'ax.android.mojom.SpanEntry',
      packedSize: 16,
      fields: [
        { name: 'span_type', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: AccessibilityCollectionInfoData
ax.android.mojom.AccessibilityCollectionInfoDataSpec = {
  $: {
    structSpec: {
      name: 'ax.android.mojom.AccessibilityCollectionInfoData',
      packedSize: 16,
      fields: [
        { name: 'selection_mode', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: AccessibilityCollectionItemInfoData
ax.android.mojom.AccessibilityCollectionItemInfoDataSpec = {
  $: {
    structSpec: {
      name: 'ax.android.mojom.AccessibilityCollectionItemInfoData',
      packedSize: 16,
      fields: [
        { name: 'is_selected', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: AccessibilityRangeInfoData
ax.android.mojom.AccessibilityRangeInfoDataSpec = {
  $: {
    structSpec: {
      name: 'ax.android.mojom.AccessibilityRangeInfoData',
      packedSize: 16,
      fields: [
        { name: 'current', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: AccessibilityActionInAndroid
ax.android.mojom.AccessibilityActionInAndroidSpec = {
  $: {
    structSpec: {
      name: 'ax.android.mojom.AccessibilityActionInAndroid',
      packedSize: 16,
      fields: [
        { name: 'label', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: AccessibilityNodeInfoData
ax.android.mojom.AccessibilityNodeInfoDataSpec = {
  $: {
    structSpec: {
      name: 'ax.android.mojom.AccessibilityNodeInfoData',
      packedSize: 16,
      fields: [
        { name: 'custom_actions', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: AccessibilityWindowInfoData
ax.android.mojom.AccessibilityWindowInfoDataSpec = {
  $: {
    structSpec: {
      name: 'ax.android.mojom.AccessibilityWindowInfoData',
      packedSize: 16,
      fields: [
        { name: 'int_list_properties', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: AccessibilityEventData
ax.android.mojom.AccessibilityEventDataSpec = {
  $: {
    structSpec: {
      name: 'ax.android.mojom.AccessibilityEventData',
      packedSize: 16,
      fields: [
        { name: 'int_list_properties', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: AccessibilityActionData
ax.android.mojom.AccessibilityActionDataSpec = {
  $: {
    structSpec: {
      name: 'ax.android.mojom.AccessibilityActionData',
      packedSize: 16,
      fields: [
        { name: 'float_parameters', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Interface: AccessibilityHelperHost
ax.android.mojom.AccessibilityHelperHost = {};

ax.android.mojom.AccessibilityHelperHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ax.android.mojom.AccessibilityHelperHostRemote = class {
  static get $interfaceName() {
    return 'ax.android.mojom.AccessibilityHelperHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ax.android.mojom.AccessibilityHelperHostPendingReceiver,
      handle);
    this.$ = new ax.android.mojom.AccessibilityHelperHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ax.android.mojom.AccessibilityHelperHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

ax.android.mojom.AccessibilityHelperHost.getRemote = function() {
  let remote = new ax.android.mojom.AccessibilityHelperHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ax.android.mojom.AccessibilityHelperHost',
    'context');
  return remote.$;
};

// Legacy compatibility
ax.android.mojom.AccessibilityHelperHostPtr = ax.android.mojom.AccessibilityHelperHostRemote;
ax.android.mojom.AccessibilityHelperHostRequest = ax.android.mojom.AccessibilityHelperHostPendingReceiver;


// Interface: AccessibilityHelperInstance
ax.android.mojom.AccessibilityHelperInstance = {};

ax.android.mojom.AccessibilityHelperInstancePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ax.android.mojom.AccessibilityHelperInstanceRemote = class {
  static get $interfaceName() {
    return 'ax.android.mojom.AccessibilityHelperInstance';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ax.android.mojom.AccessibilityHelperInstancePendingReceiver,
      handle);
    this.$ = new ax.android.mojom.AccessibilityHelperInstanceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ax.android.mojom.AccessibilityHelperInstanceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

ax.android.mojom.AccessibilityHelperInstance.getRemote = function() {
  let remote = new ax.android.mojom.AccessibilityHelperInstanceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ax.android.mojom.AccessibilityHelperInstance',
    'context');
  return remote.$;
};

// Legacy compatibility
ax.android.mojom.AccessibilityHelperInstancePtr = ax.android.mojom.AccessibilityHelperInstanceRemote;
ax.android.mojom.AccessibilityHelperInstanceRequest = ax.android.mojom.AccessibilityHelperInstancePendingReceiver;

