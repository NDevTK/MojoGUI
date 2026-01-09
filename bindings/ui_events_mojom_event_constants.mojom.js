// Auto-generated MojoJS binding
// Source: chromium_src/ui/events/mojom/event_constants.mojom
// Module: ui.mojom

'use strict';

// Module namespace
var ui = ui || {};
ui.mojom = ui.mojom || {};


// Enum: AcceleratorPhase
ui.mojom.AcceleratorPhase = {
  PRE_TARGET: 0,
  POST_TARGET: 1,
};

// Enum: EventType
ui.mojom.EventType = {
  UNKNOWN: 0,
  KEY_PRESSED: 1,
  KEY_RELEASED: 2,
  GESTURE_TAP: 3,
  GESTURE_SWIPE: 4,
  GESTURE_PINCH_BEGIN: 5,
  GESTURE_PINCH_END: 6,
  GESTURE_PINCH_UPDATE: 7,
  SCROLL: 8,
  SCROLL_FLING_START: 9,
  SCROLL_FLING_CANCEL: 10,
  CANCEL_MODE: 11,
  MOUSE_PRESSED_EVENT: 12,
  MOUSE_DRAGGED_EVENT: 13,
  MOUSE_RELEASED_EVENT: 14,
  MOUSE_MOVED_EVENT: 15,
  MOUSE_ENTERED_EVENT: 16,
  MOUSE_EXITED_EVENT: 17,
  MOUSE_WHEEL_EVENT: 18,
  MOUSE_CAPTURE_CHANGED_EVENT: 19,
  TOUCH_RELEASED: 20,
  TOUCH_PRESSED: 21,
  TOUCH_MOVED: 22,
  TOUCH_CANCELLED: 23,
};

// Enum: ScrollEventPhase
ui.mojom.ScrollEventPhase = {
  kNone: 0,
  kBegan: 1,
  kUpdate: 2,
  kEnd: 3,
};

// Enum: EventMomentumPhase
ui.mojom.EventMomentumPhase = {
  NONE: 0,
  BEGAN: 1,
  MAY_BEGIN: 2,
  INERTIAL_UPDATE: 3,
  END: 4,
  BLOCKED: 5,
};

// Enum: GestureDeviceType
ui.mojom.GestureDeviceType = {
  DEVICE_UNKNOWN: 0,
  DEVICE_TOUCHPAD: 1,
  DEVICE_TOUCHSCREEN: 2,
};
