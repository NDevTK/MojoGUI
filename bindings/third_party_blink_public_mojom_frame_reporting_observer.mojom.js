// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/frame/reporting_observer.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Struct: ReportBodyElement
blink.mojom.ReportBodyElement = class {
  constructor(values = {}) {
    this.value = values.value !== undefined ? values.value : "";
  }
};

// Struct: ReportBody
blink.mojom.ReportBody = class {
  constructor(values = {}) {
    this.body = values.body !== undefined ? values.body : [];
  }
};

// Struct: Report
blink.mojom.Report = class {
  constructor(values = {}) {
    this.body = values.body !== undefined ? values.body : "";
  }
};

// Interface: ReportingObserver
blink.mojom.ReportingObserverPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.ReportingObserver';
  }

  notify(report) {
    // Method: Notify
    // Call: Notify(report)
  }

};

blink.mojom.ReportingObserverRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
