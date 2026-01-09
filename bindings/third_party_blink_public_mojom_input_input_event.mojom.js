// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/input/input_event.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Enum: Button
blink.mojom.Button = {
  kNoButton: 0,
  kLeft: 1,
  kMiddle: 2,
  kRight: 3,
  kBarrel: 4,
  kBack: 5,
  kForward: 6,
  kEraser: 7,
};

// Enum: DispatchType
blink.mojom.DispatchType = {
  kBlocking: 0,
  kEventNonBlocking: 1,
  kListenersNonBlockingPassive: 2,
  kListenersForcedNonBlockingDueToFling: 3,
};

// Enum: EventType
blink.mojom.EventType = {
  kUndefined: 0,
  kTypeFirst: 1,
  kMouseDown: 2,
  kMouseTypeFirst: 3,
  kMouseUp: 4,
  kMouseMove: 5,
  kMouseEnter: 6,
  kMouseLeave: 7,
  kContextMenu: 8,
  kMouseTypeLast: 9,
  kMouseWheel: 10,
  kRawKeyDown: 11,
  kKeyboardTypeFirst: 12,
  kKeyDown: 13,
  kKeyUp: 14,
  kChar: 15,
  kKeyboardTypeLast: 16,
  kGestureScrollBegin: 17,
  kGestureTypeFirst: 18,
  kGestureScrollEnd: 19,
  kGestureScrollUpdate: 20,
  kGestureFlingStart: 21,
  kGestureFlingCancel: 22,
  kGesturePinchBegin: 23,
  kGesturePinchTypeFirst: 24,
  kGesturePinchEnd: 25,
  kGesturePinchUpdate: 26,
  kGesturePinchTypeLast: 27,
  kGestureBegin: 28,
  kGestureTapDown: 29,
  kGestureShowPress: 30,
  kGestureTap: 31,
  kGestureTapCancel: 32,
  kGestureShortPress: 33,
  kGestureLongPress: 34,
  kGestureLongTap: 35,
  kGestureTwoFingerTap: 36,
  kGestureTapUnconfirmed: 37,
  kGestureDoubleTap: 38,
  kGestureEnd: 39,
  kGestureTypeLast: 40,
  kTouchStart: 41,
  kTouchTypeFirst: 42,
  kTouchMove: 43,
  kTouchEnd: 44,
  kTouchCancel: 45,
  kTouchScrollStarted: 46,
  kTouchTypeLast: 47,
  kPointerDown: 48,
  kPointerTypeFirst: 49,
  kPointerUp: 50,
  kPointerMove: 51,
  kPointerRawUpdate: 52,
  kPointerCancel: 53,
  kPointerCausedUaAction: 54,
  kPointerTypeLast: 55,
  kTypeLast: 56,
};
