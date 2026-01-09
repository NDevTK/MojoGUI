// Auto-generated MojoJS binding
// Source: chromium_src/chromecast/common/mojom/gesture.mojom
// Module: chromecast.mojom

'use strict';

// Module namespace
var chromecast = chromecast || {};
chromecast.mojom = chromecast.mojom || {};


// Interface: GestureHandler
chromecast.mojom.GestureHandlerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'chromecast.mojom.GestureHandler';
  }

  onBackGesture() {
    // Method: OnBackGesture
    return new Promise((resolve) => {
      // Call: OnBackGesture()
      resolve({});
    });
  }

  onBackGestureProgress(touch_location) {
    // Method: OnBackGestureProgress
    // Call: OnBackGestureProgress(touch_location)
  }

  onTopDragGestureProgress(touch_location) {
    // Method: OnTopDragGestureProgress
    // Call: OnTopDragGestureProgress(touch_location)
  }

  onTopDragGestureDone() {
    // Method: OnTopDragGestureDone
    // Call: OnTopDragGestureDone()
  }

  onRightDragGestureProgress(touch_location) {
    // Method: OnRightDragGestureProgress
    // Call: OnRightDragGestureProgress(touch_location)
  }

  onRightDragGestureDone() {
    // Method: OnRightDragGestureDone
    // Call: OnRightDragGestureDone()
  }

  onBackGestureCancel() {
    // Method: OnBackGestureCancel
    // Call: OnBackGestureCancel()
  }

  onTapGesture() {
    // Method: OnTapGesture
    // Call: OnTapGesture()
  }

  onTapDownGesture() {
    // Method: OnTapDownGesture
    // Call: OnTapDownGesture()
  }

};

chromecast.mojom.GestureHandlerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: GestureSource
chromecast.mojom.GestureSourcePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'chromecast.mojom.GestureSource';
  }

  subscribe(handler) {
    // Method: Subscribe
    // Call: Subscribe(handler)
  }

  setCanGoBack(can_go_back) {
    // Method: SetCanGoBack
    // Call: SetCanGoBack(can_go_back)
  }

  setCanTopDrag(can_top_drag) {
    // Method: SetCanTopDrag
    // Call: SetCanTopDrag(can_top_drag)
  }

  setCanRightDrag(can_top_drag) {
    // Method: SetCanRightDrag
    // Call: SetCanRightDrag(can_top_drag)
  }

};

chromecast.mojom.GestureSourceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
