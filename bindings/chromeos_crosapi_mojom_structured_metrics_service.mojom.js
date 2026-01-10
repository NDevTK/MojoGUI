// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/crosapi/mojom/structured_metrics_service.mojom
// Module: crosapi.mojom

'use strict';

// Module namespace
var crosapi = crosapi || {};
crosapi.mojom = crosapi.mojom || {};
var components = components || {};

crosapi.mojom.StructuredMetricsService = {};
crosapi.mojom.StructuredMetricsService.$interfaceName = 'crosapi.mojom.StructuredMetricsService';
crosapi.mojom.StructuredMetricsService_Record_ParamsSpec = { $: {} };

// Interface: StructuredMetricsService
mojo.internal.Struct(
    crosapi.mojom.StructuredMetricsService_Record_ParamsSpec, 'crosapi.mojom.StructuredMetricsService_Record_Params', [
      mojo.internal.StructField('events', 0, 0, mojo.internal.Array(metrics.structured.mojom.EventSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

crosapi.mojom.StructuredMetricsServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

crosapi.mojom.StructuredMetricsServiceRemote = class {
  static get $interfaceName() {
    return 'crosapi.mojom.StructuredMetricsService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      crosapi.mojom.StructuredMetricsServicePendingReceiver,
      handle);
    this.$ = new crosapi.mojom.StructuredMetricsServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

crosapi.mojom.StructuredMetricsServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  record(events) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      crosapi.mojom.StructuredMetricsService_Record_ParamsSpec,
      null,
      [events],
      false);
  }

};

crosapi.mojom.StructuredMetricsService.getRemote = function() {
  let remote = new crosapi.mojom.StructuredMetricsServiceRemote();
  remote.bindNewPipeAndPassReceiver();
  remote.proxy.endpoint_.bindInBrowser(
    'crosapi.mojom.StructuredMetricsService',
    'context');
  return remote.$;
};

crosapi.mojom.StructuredMetricsServicePtr = crosapi.mojom.StructuredMetricsServiceRemote;
crosapi.mojom.StructuredMetricsServiceRequest = crosapi.mojom.StructuredMetricsServicePendingReceiver;

