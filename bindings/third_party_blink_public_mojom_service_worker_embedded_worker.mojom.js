// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/service_worker/embedded_worker.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Interface: EmbeddedWorkerInstanceClient
blink.mojom.EmbeddedWorkerInstanceClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.EmbeddedWorkerInstanceClientRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.EmbeddedWorkerInstanceClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.EmbeddedWorkerInstanceClientPendingReceiver,
      handle);
    this.$ = new blink.mojom.EmbeddedWorkerInstanceClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.EmbeddedWorkerInstanceClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  startWorker(params) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.EmbeddedWorkerInstanceClient_StartWorker_ParamsSpec.$,
      null,
      [params]);
  }

  stopWorker() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.EmbeddedWorkerInstanceClient_StopWorker_ParamsSpec.$,
      null,
      []);
  }

};

blink.mojom.EmbeddedWorkerInstanceClient.getRemote = function() {
  let remote = new blink.mojom.EmbeddedWorkerInstanceClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.EmbeddedWorkerInstanceClient',
    'context');
  return remote.$;
};

// ParamsSpec for StartWorker
blink.mojom.EmbeddedWorkerInstanceClient_StartWorker_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.EmbeddedWorkerInstanceClient.StartWorker_Params',
      packedSize: 16,
      fields: [
        { name: 'params', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for StopWorker
blink.mojom.EmbeddedWorkerInstanceClient_StopWorker_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.EmbeddedWorkerInstanceClient.StopWorker_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
blink.mojom.EmbeddedWorkerInstanceClientPtr = blink.mojom.EmbeddedWorkerInstanceClientRemote;
blink.mojom.EmbeddedWorkerInstanceClientRequest = blink.mojom.EmbeddedWorkerInstanceClientPendingReceiver;


// Interface: EmbeddedWorkerInstanceHost
blink.mojom.EmbeddedWorkerInstanceHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.EmbeddedWorkerInstanceHostRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.EmbeddedWorkerInstanceHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.EmbeddedWorkerInstanceHostPendingReceiver,
      handle);
    this.$ = new blink.mojom.EmbeddedWorkerInstanceHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.EmbeddedWorkerInstanceHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  requestTermination() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.EmbeddedWorkerInstanceHost_RequestTermination_ParamsSpec.$,
      blink.mojom.EmbeddedWorkerInstanceHost_RequestTermination_ResponseParamsSpec.$,
      []);
  }

  countFeature(feature) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.EmbeddedWorkerInstanceHost_CountFeature_ParamsSpec.$,
      null,
      [feature]);
  }

  onReadyForInspection(agent, agent_host) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.EmbeddedWorkerInstanceHost_OnReadyForInspection_ParamsSpec.$,
      null,
      [agent, agent_host]);
  }

  onScriptLoaded() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      blink.mojom.EmbeddedWorkerInstanceHost_OnScriptLoaded_ParamsSpec.$,
      null,
      []);
  }

  onScriptEvaluationStart() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      blink.mojom.EmbeddedWorkerInstanceHost_OnScriptEvaluationStart_ParamsSpec.$,
      null,
      []);
  }

  onStarted(status, fetch_handler_type, has_hid_event_handlers, has_usb_event_handlers, thread_id, start_timing) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      blink.mojom.EmbeddedWorkerInstanceHost_OnStarted_ParamsSpec.$,
      null,
      [status, fetch_handler_type, has_hid_event_handlers, has_usb_event_handlers, thread_id, start_timing]);
  }

  onReportException(error_message, line_number, column_number, source_url) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      blink.mojom.EmbeddedWorkerInstanceHost_OnReportException_ParamsSpec.$,
      null,
      [error_message, line_number, column_number, source_url]);
  }

  onReportConsoleMessage(source, message_level, message, line_number, source_url) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      blink.mojom.EmbeddedWorkerInstanceHost_OnReportConsoleMessage_ParamsSpec.$,
      null,
      [source, message_level, message, line_number, source_url]);
  }

  onStopped() {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      blink.mojom.EmbeddedWorkerInstanceHost_OnStopped_ParamsSpec.$,
      null,
      []);
  }

};

blink.mojom.EmbeddedWorkerInstanceHost.getRemote = function() {
  let remote = new blink.mojom.EmbeddedWorkerInstanceHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.EmbeddedWorkerInstanceHost',
    'context');
  return remote.$;
};

// ParamsSpec for RequestTermination
blink.mojom.EmbeddedWorkerInstanceHost_RequestTermination_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.EmbeddedWorkerInstanceHost.RequestTermination_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.EmbeddedWorkerInstanceHost_RequestTermination_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.EmbeddedWorkerInstanceHost.RequestTermination_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'will_be_terminated', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for CountFeature
blink.mojom.EmbeddedWorkerInstanceHost_CountFeature_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.EmbeddedWorkerInstanceHost.CountFeature_Params',
      packedSize: 16,
      fields: [
        { name: 'feature', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnReadyForInspection
blink.mojom.EmbeddedWorkerInstanceHost_OnReadyForInspection_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.EmbeddedWorkerInstanceHost.OnReadyForInspection_Params',
      packedSize: 24,
      fields: [
        { name: 'agent', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'agent_host', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnScriptLoaded
blink.mojom.EmbeddedWorkerInstanceHost_OnScriptLoaded_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.EmbeddedWorkerInstanceHost.OnScriptLoaded_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnScriptEvaluationStart
blink.mojom.EmbeddedWorkerInstanceHost_OnScriptEvaluationStart_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.EmbeddedWorkerInstanceHost.OnScriptEvaluationStart_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnStarted
blink.mojom.EmbeddedWorkerInstanceHost_OnStarted_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.EmbeddedWorkerInstanceHost.OnStarted_Params',
      packedSize: 56,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'fetch_handler_type', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'has_hid_event_handlers', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'has_usb_event_handlers', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'thread_id', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'start_timing', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnReportException
blink.mojom.EmbeddedWorkerInstanceHost_OnReportException_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.EmbeddedWorkerInstanceHost.OnReportException_Params',
      packedSize: 40,
      fields: [
        { name: 'error_message', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'line_number', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'column_number', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'source_url', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnReportConsoleMessage
blink.mojom.EmbeddedWorkerInstanceHost_OnReportConsoleMessage_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.EmbeddedWorkerInstanceHost.OnReportConsoleMessage_Params',
      packedSize: 48,
      fields: [
        { name: 'source', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'message_level', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'message', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'line_number', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'source_url', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnStopped
blink.mojom.EmbeddedWorkerInstanceHost_OnStopped_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.EmbeddedWorkerInstanceHost.OnStopped_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
blink.mojom.EmbeddedWorkerInstanceHostPtr = blink.mojom.EmbeddedWorkerInstanceHostRemote;
blink.mojom.EmbeddedWorkerInstanceHostRequest = blink.mojom.EmbeddedWorkerInstanceHostPendingReceiver;

