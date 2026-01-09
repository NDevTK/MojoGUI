// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/service_worker/embedded_worker.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Struct: EmbeddedWorkerStartParams
blink.mojom.EmbeddedWorkerStartParams = class {
  constructor(values = {}) {
    this.devtools_worker_token = values.devtools_worker_token !== undefined ? values.devtools_worker_token : 0;
    this.and = values.and !== undefined ? values.and : null;
    this.worker = values.worker !== undefined ? values.worker : null;
    this.incumbent = values.incumbent !== undefined ? values.incumbent : null;
    this.the = values.the !== undefined ? values.the : null;
    this.renderer_preferences = values.renderer_preferences !== undefined ? values.renderer_preferences : false;
    this.instance_host = values.instance_host !== undefined ? values.instance_host : 0;
    this.dip_reporting_observer = values.dip_reporting_observer !== undefined ? values.dip_reporting_observer : 0;
  }
};

// Struct: EmbeddedWorkerStartTiming
blink.mojom.EmbeddedWorkerStartTiming = class {
  constructor(values = {}) {
    this.script_evaluation_end_time = values.script_evaluation_end_time !== undefined ? values.script_evaluation_end_time : null;
  }
};

// Interface: EmbeddedWorkerInstanceClient
blink.mojom.EmbeddedWorkerInstanceClientPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.EmbeddedWorkerInstanceClient';
  }

  startWorker(params) {
    // Method: StartWorker
    // Call: StartWorker(params)
  }

  stopWorker() {
    // Method: StopWorker
    // Call: StopWorker()
  }

};

blink.mojom.EmbeddedWorkerInstanceClientRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: EmbeddedWorkerInstanceHost
blink.mojom.EmbeddedWorkerInstanceHostPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.EmbeddedWorkerInstanceHost';
  }

  requestTermination() {
    // Method: RequestTermination
    return new Promise((resolve) => {
      // Call: RequestTermination()
      resolve({});
    });
  }

  countFeature(feature) {
    // Method: CountFeature
    // Call: CountFeature(feature)
  }

  onReadyForInspection(agent, agent_host) {
    // Method: OnReadyForInspection
    // Call: OnReadyForInspection(agent, agent_host)
  }

  onScriptLoaded() {
    // Method: OnScriptLoaded
    // Call: OnScriptLoaded()
  }

  onScriptEvaluationStart() {
    // Method: OnScriptEvaluationStart
    // Call: OnScriptEvaluationStart()
  }

  onStarted(status, fetch_handler_type, has_hid_event_handlers, has_usb_event_handlers, thread_id, start_timing) {
    // Method: OnStarted
    // Call: OnStarted(status, fetch_handler_type, has_hid_event_handlers, has_usb_event_handlers, thread_id, start_timing)
  }

  onReportException(error_message, line_number, column_number, source_url) {
    // Method: OnReportException
    // Call: OnReportException(error_message, line_number, column_number, source_url)
  }

  onReportConsoleMessage(source, message_level, message, line_number, source_url) {
    // Method: OnReportConsoleMessage
    // Call: OnReportConsoleMessage(source, message_level, message, line_number, source_url)
  }

  onStopped() {
    // Method: OnStopped
    // Call: OnStopped()
  }

};

blink.mojom.EmbeddedWorkerInstanceHostRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
