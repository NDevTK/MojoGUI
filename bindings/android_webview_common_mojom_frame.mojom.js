// Auto-generated MojoJS binding
// Source: chromium_src/android_webview/common/mojom/frame.mojom
// Module: android_webview.mojom

'use strict';

// Module namespace
var android_webview = android_webview || {};
android_webview.mojom = android_webview.mojom || {};


// Enum: HitTestDataType
android_webview.mojom.HitTestDataType = {
  and: 0,
  kGeo: 1,
  kEmail: 2,
  then: 3,
  but: 4,
  such: 5,
  but: 6,
};

// Struct: HitTestData
android_webview.mojom.HitTestData = class {
  constructor(values = {}) {
    this.img_src = values.img_src !== undefined ? values.img_src : "";
  }
};

// Interface: LocalMainFrame
android_webview.mojom.LocalMainFramePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'android_webview.mojom.LocalMainFrame';
  }

  setInitialPageScale(page_scale_factor) {
    // Method: SetInitialPageScale
    // Call: SetInitialPageScale(page_scale_factor)
  }

  setTextZoomFactor(zoom_factor) {
    // Method: SetTextZoomFactor
    // Call: SetTextZoomFactor(zoom_factor)
  }

  documentHasImage() {
    // Method: DocumentHasImage
    return new Promise((resolve) => {
      // Call: DocumentHasImage()
      resolve({});
    });
  }

  resetScrollAndScaleState() {
    // Method: ResetScrollAndScaleState
    // Call: ResetScrollAndScaleState()
  }

  smoothScroll(target_x, target_y, duration) {
    // Method: SmoothScroll
    // Call: SmoothScroll(target_x, target_y, duration)
  }

};

android_webview.mojom.LocalMainFrameRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: FrameHost
android_webview.mojom.FrameHostPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'android_webview.mojom.FrameHost';
  }

  updateHitTestData(data) {
    // Method: UpdateHitTestData
    // Call: UpdateHitTestData(data)
  }

  contentsSizeChanged(contents_size) {
    // Method: ContentsSizeChanged
    // Call: ContentsSizeChanged(contents_size)
  }

  shouldOverrideUrlLoading(url, has_user_gesture, is_redirect, is_outermost_main_frame) {
    // Method: ShouldOverrideUrlLoading
    return new Promise((resolve) => {
      // Call: ShouldOverrideUrlLoading(url, has_user_gesture, is_redirect, is_outermost_main_frame)
      resolve({});
    });
  }

};

android_webview.mojom.FrameHostRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
