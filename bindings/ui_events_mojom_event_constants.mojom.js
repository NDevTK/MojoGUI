// Auto-generated MojoJS binding
// Source: chromium_src/ui/events/mojom/event_constants.mojom
// Module: ui.mojom

'use strict';

// Module namespace
var ui = ui || {};
ui.mojom = ui.mojom || {};


ui.mojom.kEventFlagNone = 0x00000;

ui.mojom.kEventFlagIsSynthesized = 0x00001;

ui.mojom.kEventFlagShiftDown = 0x00002;

ui.mojom.kEventFlagControlDown = 0x00004;

ui.mojom.kEventFlagAltDown = 0x00008;

ui.mojom.kEventFlagCommandDown = 0x00010;

ui.mojom.kEventFlagFunctionDown = 0x00020;

ui.mojom.kEventFlagAltgrDown = 0x00040;

ui.mojom.kEventFlagMod3Down = 0x00080;

ui.mojom.kEventFlagNumLockOn = 0x00100;

ui.mojom.kEventFlagCapsLockOn = 0x00200;

ui.mojom.kEventFlagScrollLockOn = 0x00400;

ui.mojom.kEventFlagLeftMouseButton = 0x00800;

ui.mojom.kEventFlagMiddleMouseButton = 0x01000;

ui.mojom.kEventFlagRightMouseButton = 0x02000;

ui.mojom.kEventFlagBackMouseButton = 0x04000;

ui.mojom.kEventFlagForwardMouseButton = 0x08000;

ui.mojom.kMouseEventFlagIsDoubleClick = 0x10000;

ui.mojom.kMouseEventFlagIsTripleClick = 0x20000;

ui.mojom.kMouseEventFlagIsNonClient = 0x40000;

ui.mojom.kKeyEventFlagIMEFabricatedKey = 0x10000;

ui.mojom.kKeyEventFlagIsRepeat = 0x20000;

// Enum: AcceleratorPhase
ui.mojom.AcceleratorPhase = {
  PRE_TARGET: 0,
  POST_TARGET: 1,
};
ui.mojom.AcceleratorPhaseSpec = { $: mojo.internal.Enum() };

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
ui.mojom.EventTypeSpec = { $: mojo.internal.Enum() };

// Enum: ScrollEventPhase
ui.mojom.ScrollEventPhase = {
  kNone: 0,
  kBegan: 1,
  kUpdate: 2,
  kEnd: 3,
};
ui.mojom.ScrollEventPhaseSpec = { $: mojo.internal.Enum() };

// Enum: EventMomentumPhase
ui.mojom.EventMomentumPhase = {
  NONE: 0,
  BEGAN: 1,
  MAY_BEGIN: 2,
  INERTIAL_UPDATE: 3,
  END: 4,
  BLOCKED: 5,
};
ui.mojom.EventMomentumPhaseSpec = { $: mojo.internal.Enum() };

// Enum: GestureDeviceType
ui.mojom.GestureDeviceType = {
  DEVICE_UNKNOWN: 0,
  DEVICE_TOUCHPAD: 1,
  DEVICE_TOUCHSCREEN: 2,
};
ui.mojom.GestureDeviceTypeSpec = { $: mojo.internal.Enum() };
