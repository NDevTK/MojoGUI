// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/service_worker/service_worker_fetch_response_callback.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Struct: ServiceWorkerFetchEventTiming
blink.mojom.ServiceWorkerFetchEventTiming = class {
  constructor(values = {}) {
    this.dispatch_event_time = values.dispatch_event_time !== undefined ? values.dispatch_event_time : null;
    this.respond_with_settled_time = values.respond_with_settled_time !== undefined ? values.respond_with_settled_time : null;
  }
};

// Interface: ServiceWorkerFetchResponseCallback
blink.mojom.ServiceWorkerFetchResponseCallbackPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.ServiceWorkerFetchResponseCallback';
  }

  onResponse(response, timing) {
    // Method: OnResponse
    // Call: OnResponse(response, timing)
  }

  onResponseStream(response, body_as_stream, timing) {
    // Method: OnResponseStream
    // Call: OnResponseStream(response, body_as_stream, timing)
  }

  onFallback(request_body, timing) {
    // Method: OnFallback
    // Call: OnFallback(request_body, timing)
  }

};

blink.mojom.ServiceWorkerFetchResponseCallbackRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
