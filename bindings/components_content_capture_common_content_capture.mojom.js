// Auto-generated MojoJS binding
// Source: chromium_src/components/content_capture/common/content_capture.mojom
// Module: content_capture.mojom

'use strict';

// Module namespace
var content_capture = content_capture || {};
content_capture.mojom = content_capture.mojom || {};


// Interface: ContentCaptureReceiver
content_capture.mojom.ContentCaptureReceiverPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'content_capture.mojom.ContentCaptureReceiver';
  }

  didCompleteBatchCaptureContent() {
    // Method: DidCompleteBatchCaptureContent
    // Call: DidCompleteBatchCaptureContent()
  }

  didCaptureContent(data, first_data) {
    // Method: DidCaptureContent
    // Call: DidCaptureContent(data, first_data)
  }

  didUpdateContent(data) {
    // Method: DidUpdateContent
    // Call: DidUpdateContent(data)
  }

  didRemoveContent(ids) {
    // Method: DidRemoveContent
    // Call: DidRemoveContent(ids)
  }

};

content_capture.mojom.ContentCaptureReceiverRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: ContentCaptureSender
content_capture.mojom.ContentCaptureSenderPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'content_capture.mojom.ContentCaptureSender';
  }

  startCapture() {
    // Method: StartCapture
    // Call: StartCapture()
  }

  stopCapture() {
    // Method: StopCapture
    // Call: StopCapture()
  }

};

content_capture.mojom.ContentCaptureSenderRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
