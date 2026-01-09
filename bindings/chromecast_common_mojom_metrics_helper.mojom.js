// Auto-generated MojoJS binding
// Source: chromium_src/chromecast/common/mojom/metrics_helper.mojom
// Module: chromecast.metrics.mojom

'use strict';

// Module namespace
var chromecast = chromecast || {};
chromecast.metrics = chromecast.metrics || {};
chromecast.metrics.mojom = chromecast.metrics.mojom || {};


// Interface: MetricsHelper
chromecast.metrics.mojom.MetricsHelperPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'chromecast.metrics.mojom.MetricsHelper';
  }

  recordApplicationEvent(app_id, session_id, sdk_version, event) {
    // Method: RecordApplicationEvent
    // Call: RecordApplicationEvent(app_id, session_id, sdk_version, event)
  }

};

chromecast.metrics.mojom.MetricsHelperRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
