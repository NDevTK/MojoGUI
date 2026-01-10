// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/crosapi/mojom/structured_metrics_service.mojom
// Module: crosapi.mojom

'use strict';

// Module namespace
var crosapi = crosapi || {};
crosapi.mojom = crosapi.mojom || {};


// Interface: StructuredMetricsService
crosapi.mojom.mojom.StructuredMetricsService = {};

crosapi.mojom.mojom.StructuredMetricsServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

crosapi.mojom.mojom.StructuredMetricsServiceRemote = class {
  static get $interfaceName() {
    return 'crosapi.mojom.StructuredMetricsService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      crosapi.mojom.mojom.StructuredMetricsServicePendingReceiver,
      handle);
    this.$ = new crosapi.mojom.mojom.StructuredMetricsServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

crosapi.mojom.mojom.StructuredMetricsServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  record(events) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      crosapi.mojom.mojom.StructuredMetricsService_Record_ParamsSpec,
      null,
      [events]);
  }

};

crosapi.mojom.mojom.StructuredMetricsService.getRemote = function() {
  let remote = new crosapi.mojom.mojom.StructuredMetricsServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'crosapi.mojom.StructuredMetricsService',
    'context');
  return remote.$;
};

// ParamsSpec for Record
crosapi.mojom.mojom.StructuredMetricsService_Record_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.StructuredMetricsService.Record_Params',
      packedSize: 16,
      fields: [
        { name: 'events', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(metrics.structured.mojom.EventSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
crosapi.mojom.mojom.StructuredMetricsServicePtr = crosapi.mojom.mojom.StructuredMetricsServiceRemote;
crosapi.mojom.mojom.StructuredMetricsServiceRequest = crosapi.mojom.mojom.StructuredMetricsServicePendingReceiver;

