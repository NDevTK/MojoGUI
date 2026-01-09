// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/crosapi/mojom/structured_metrics_service.mojom
// Module: crosapi.mojom

'use strict';

// Module namespace
var crosapi = crosapi || {};
crosapi.mojom = crosapi.mojom || {};


// Interface: StructuredMetricsService
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

};

crosapi.mojom.StructuredMetricsService.getRemote = function() {
  let remote = new crosapi.mojom.StructuredMetricsServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'crosapi.mojom.StructuredMetricsService',
    'context');
  return remote.$;
};

// Legacy compatibility
crosapi.mojom.StructuredMetricsServicePtr = crosapi.mojom.StructuredMetricsServiceRemote;
crosapi.mojom.StructuredMetricsServiceRequest = crosapi.mojom.StructuredMetricsServicePendingReceiver;

