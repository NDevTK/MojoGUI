// Auto-generated MojoJS binding
// Source: chromium_src/components/dom_distiller/content/common/mojom/distillability_service.mojom
// Module: dom_distiller.mojom

'use strict';

// Module namespace
var dom_distiller = dom_distiller || {};
dom_distiller.mojom = dom_distiller.mojom || {};

dom_distiller.mojom.DistillabilityService = {};
dom_distiller.mojom.DistillabilityService.$interfaceName = 'dom_distiller.mojom.DistillabilityService';
dom_distiller.mojom.DistillabilityService_NotifyIsDistillable_ParamsSpec = { $: {} };

// Interface: DistillabilityService
mojo.internal.Struct(
    dom_distiller.mojom.DistillabilityService_NotifyIsDistillable_ParamsSpec, 'dom_distiller.mojom.DistillabilityService_NotifyIsDistillable_Params', [
      mojo.internal.StructField('page_is_distillable', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_last_update', 0, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_long_article', 0, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_mobile_friendly', 0, 3, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

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
      dom_distiller.mojom.DistillabilityService_NotifyIsDistillable_ParamsSpec,
      null,
      [page_is_distillable, is_last_update, is_long_article, is_mobile_friendly],
      false);
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

dom_distiller.mojom.DistillabilityServiceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (message) => {
      const header = message.header;
      if (!header) return;
      switch (header.ordinal) {
        case 0: {
          const params = dom_distiller.mojom.DistillabilityService_NotifyIsDistillable_ParamsSpec.$.decode(message.payload);
          const result = this.impl.notifyIsDistillable(params.page_is_distillable, params.is_last_update, params.is_long_article, params.is_mobile_friendly);
          break;
        }
      }
    }});
  }
};

dom_distiller.mojom.DistillabilityServiceReceiver = dom_distiller.mojom.DistillabilityServiceReceiver;

dom_distiller.mojom.DistillabilityServicePtr = dom_distiller.mojom.DistillabilityServiceRemote;
dom_distiller.mojom.DistillabilityServiceRequest = dom_distiller.mojom.DistillabilityServicePendingReceiver;

