// Auto-generated MojoJS binding
// Source: chromium_src/ios/chrome/browser/optimization_guide/mojom/tab_organization_service.mojom
// Module: ai.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var ai = ai || {};
ai.mojom = ai.mojom || {};
var mojo_base = mojo_base || {};

ai.mojom.TabOrganizationService = {};
ai.mojom.TabOrganizationService.$interfaceName = 'ai.mojom.TabOrganizationService';
ai.mojom.TabOrganizationService_ExecuteGroupTabs_ParamsSpec = { $: {} };
ai.mojom.TabOrganizationService_ExecuteGroupTabs_ResponseParamsSpec = { $: {} };

// Interface: TabOrganizationService
mojo.internal.Struct(
    ai.mojom.TabOrganizationService_ExecuteGroupTabs_ParamsSpec, 'ai.mojom.TabOrganizationService_ExecuteGroupTabs_Params', [
      mojo.internal.StructField('request', 0, 0, mojo_base.mojom.ProtoWrapperSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ai.mojom.TabOrganizationService_ExecuteGroupTabs_ResponseParamsSpec, 'ai.mojom.TabOrganizationService_ExecuteGroupTabs_ResponseParams', [
      mojo.internal.StructField('output', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

ai.mojom.TabOrganizationServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ai.mojom.TabOrganizationServiceRemote = class {
  static get $interfaceName() {
    return 'ai.mojom.TabOrganizationService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ai.mojom.TabOrganizationServicePendingReceiver,
      handle);
    this.$ = new ai.mojom.TabOrganizationServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  executeGroupTabs(request) {
    return this.$.executeGroupTabs(request);
  }
};

ai.mojom.TabOrganizationServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('TabOrganizationService', [
      { explicit: null },
    ]);
  }

  executeGroupTabs(request) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      ai.mojom.TabOrganizationService_ExecuteGroupTabs_ParamsSpec,
      ai.mojom.TabOrganizationService_ExecuteGroupTabs_ResponseParamsSpec,
      [request],
      false);
  }

};

ai.mojom.TabOrganizationService.getRemote = function() {
  let remote = new ai.mojom.TabOrganizationServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ai.mojom.TabOrganizationService',
    'context');
  return remote.$;
};

ai.mojom.TabOrganizationServiceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('TabOrganizationService', [
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = {{ header: args[1], payload: payload, handles: args[3] || [] }};
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ai.mojom.TabOrganizationService_ExecuteGroupTabs_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ai.mojom.TabOrganizationService_ExecuteGroupTabs_ParamsSpec.$.structSpec);
          const result = this.impl.executeGroupTabs(params.request);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ai.mojom.TabOrganizationService_ExecuteGroupTabs_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

ai.mojom.TabOrganizationServiceReceiver = ai.mojom.TabOrganizationServiceReceiver;

ai.mojom.TabOrganizationServicePtr = ai.mojom.TabOrganizationServiceRemote;
ai.mojom.TabOrganizationServiceRequest = ai.mojom.TabOrganizationServicePendingReceiver;

