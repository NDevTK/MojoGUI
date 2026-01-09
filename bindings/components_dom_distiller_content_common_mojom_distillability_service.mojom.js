// Auto-generated MojoJS binding
// Source: chromium_src/components/dom_distiller/content/common/mojom/distillability_service.mojom
// Module: dom_distiller.mojom

'use strict';

// Module namespace
var dom_distiller = dom_distiller || {};
dom_distiller.mojom = dom_distiller.mojom || {};


// Interface: DistillabilityService
dom_distiller.mojom.DistillabilityServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

dom_distiller.mojom.DistillabilityServiceRemote = class {
  static get $interfaceName() {
    return 'dom_distiller.mojom.DistillabilityService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      dom_distiller.mojom.DistillabilityServicePendingReceiver,
      handle);
    this.$ = new dom_distiller.mojom.DistillabilityServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

dom_distiller.mojom.DistillabilityServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  notifyIsDistillable(page_is_distillable, is_last_update, is_long_article, is_mobile_friendly) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      dom_distiller.mojom.DistillabilityService_NotifyIsDistillable_ParamsSpec.$,
      null,
      [page_is_distillable, is_last_update, is_long_article, is_mobile_friendly]);
  }

};

dom_distiller.mojom.DistillabilityService.getRemote = function() {
  let remote = new dom_distiller.mojom.DistillabilityServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'dom_distiller.mojom.DistillabilityService',
    'context');
  return remote.$;
};

// ParamsSpec for NotifyIsDistillable
dom_distiller.mojom.DistillabilityService_NotifyIsDistillable_ParamsSpec = {
  $: {
    structSpec: {
      name: 'dom_distiller.mojom.DistillabilityService.NotifyIsDistillable_Params',
      packedSize: 40,
      fields: [
        { name: 'page_is_distillable', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'is_last_update', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'is_long_article', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'is_mobile_friendly', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
dom_distiller.mojom.DistillabilityServicePtr = dom_distiller.mojom.DistillabilityServiceRemote;
dom_distiller.mojom.DistillabilityServiceRequest = dom_distiller.mojom.DistillabilityServicePendingReceiver;

