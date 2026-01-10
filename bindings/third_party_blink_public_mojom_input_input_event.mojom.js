// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/input/input_event.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};

blink.mojom.ButtonSpec = { $: mojo.internal.Enum() };
blink.mojom.DispatchTypeSpec = { $: mojo.internal.Enum() };
blink.mojom.EventTypeSpec = { $: mojo.internal.Enum() };

// Enum: Button
blink.mojom.Button = {
  kNoButton: -1,
  kLeft: 0,
  kMiddle: 1,
  kRight: 2,
  kBarrel: 2,
  kBack: 3,
  kForward: 4,
  kEraser: 5,
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
  kUndefined: -1,
  kTypeFirst: -1,
  kMouseDown: 0,
  kMouseTypeFirst: 0,
  kMouseUp: 1,
  kMouseMove: 2,
  kMouseEnter: 3,
  kMouseLeave: 4,
  kContextMenu: 5,
  kMouseTypeLast: 5,
  kMouseWheel: 6,
  kRawKeyDown: 7,
  kKeyboardTypeFirst: 7,
  kKeyDown: 8,
  kKeyUp: 9,
  kChar: 10,
  kKeyboardTypeLast: 10,
  kGestureScrollBegin: 11,
  kGestureTypeFirst: 11,
  kGestureScrollEnd: 12,
  kGestureScrollUpdate: 13,
  kGestureFlingStart: 14,
  kGestureFlingCancel: 15,
  kGesturePinchBegin: 16,
  kGesturePinchTypeFirst: 16,
  kGesturePinchEnd: 17,
  kGesturePinchUpdate: 18,
  kGesturePinchTypeLast: 18,
  kGestureBegin: 19,
  kGestureTapDown: 20,
  kGestureShowPress: 21,
  kGestureTap: 22,
  kGestureTapCancel: 23,
  kGestureShortPress: 24,
  kGestureLongPress: 25,
  kGestureLongTap: 26,
  kGestureTwoFingerTap: 27,
  kGestureTapUnconfirmed: 28,
  kGestureDoubleTap: 29,
  kGestureEnd: 30,
  kGestureTypeLast: 30,
  kTouchStart: 31,
  kTouchTypeFirst: 31,
  kTouchMove: 32,
  kTouchEnd: 33,
  kTouchCancel: 34,
  kTouchScrollStarted: 35,
  kTouchTypeLast: 35,
  kPointerDown: 36,
  kPointerTypeFirst: 36,
  kPointerUp: 37,
  kPointerMove: 38,
  kPointerRawUpdate: 39,
  kPointerCancel: 40,
  kPointerCausedUaAction: 41,
  kPointerTypeLast: 41,
  kTypeLast: 41,
};
