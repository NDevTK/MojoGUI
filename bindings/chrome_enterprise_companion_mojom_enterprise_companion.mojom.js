// Auto-generated MojoJS binding
// Source: chromium_src/chrome/enterprise_companion/mojom/enterprise_companion.mojom
// Module: enterprise_companion.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var enterprise_companion = enterprise_companion || {};
enterprise_companion.mojom = enterprise_companion.mojom || {};

enterprise_companion.mojom.StatusSpec = { $: {} };
enterprise_companion.mojom.EnterpriseCompanion = {};
enterprise_companion.mojom.EnterpriseCompanion.$interfaceName = 'enterprise_companion.mojom.EnterpriseCompanion';
enterprise_companion.mojom.EnterpriseCompanion_Shutdown_ParamsSpec = { $: {} };
enterprise_companion.mojom.EnterpriseCompanion_Shutdown_ResponseParamsSpec = { $: {} };
enterprise_companion.mojom.EnterpriseCompanion_FetchPolicies_ParamsSpec = { $: {} };
enterprise_companion.mojom.EnterpriseCompanion_FetchPolicies_ResponseParamsSpec = { $: {} };

// Struct: Status
mojo.internal.Struct(
    enterprise_companion.mojom.StatusSpec, 'enterprise_companion.mojom.Status', [
      mojo.internal.StructField('description', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('space', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('code', 12, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: EnterpriseCompanion
mojo.internal.Struct(
    enterprise_companion.mojom.EnterpriseCompanion_Shutdown_ParamsSpec, 'enterprise_companion.mojom.EnterpriseCompanion_Shutdown_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    enterprise_companion.mojom.EnterpriseCompanion_Shutdown_ResponseParamsSpec, 'enterprise_companion.mojom.EnterpriseCompanion_Shutdown_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, enterprise_companion.mojom.StatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    enterprise_companion.mojom.EnterpriseCompanion_FetchPolicies_ParamsSpec, 'enterprise_companion.mojom.EnterpriseCompanion_FetchPolicies_Params', [
      mojo.internal.StructField('reason', 0, 0, enterprise_companion.mojom.PolicyFetchReasonSpec.$, null, false, 1, undefined),
    ],
    [[0, 8], [1, 16]]);

mojo.internal.Struct(
    enterprise_companion.mojom.EnterpriseCompanion_FetchPolicies_ResponseParamsSpec, 'enterprise_companion.mojom.EnterpriseCompanion_FetchPolicies_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, enterprise_companion.mojom.StatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

enterprise_companion.mojom.EnterpriseCompanionPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

enterprise_companion.mojom.EnterpriseCompanionRemote = class {
  static get $interfaceName() {
    return 'enterprise_companion.mojom.EnterpriseCompanion';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      enterprise_companion.mojom.EnterpriseCompanionPendingReceiver,
      handle);
    this.$ = new enterprise_companion.mojom.EnterpriseCompanionRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  shutdown() {
    return this.$.shutdown();
  }
  fetchPolicies(reason) {
    return this.$.fetchPolicies(reason);
  }
};

enterprise_companion.mojom.EnterpriseCompanionRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('EnterpriseCompanion', [
      { explicit: 0 },
      { explicit: 1 },
    ]);
  }

  shutdown() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      enterprise_companion.mojom.EnterpriseCompanion_Shutdown_ParamsSpec,
      enterprise_companion.mojom.EnterpriseCompanion_Shutdown_ResponseParamsSpec,
      [],
      false);
  }

  fetchPolicies(reason) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      enterprise_companion.mojom.EnterpriseCompanion_FetchPolicies_ParamsSpec,
      enterprise_companion.mojom.EnterpriseCompanion_FetchPolicies_ResponseParamsSpec,
      [reason],
      false);
  }

};

enterprise_companion.mojom.EnterpriseCompanion.getRemote = function() {
  let remote = new enterprise_companion.mojom.EnterpriseCompanionRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'enterprise_companion.mojom.EnterpriseCompanion',
    'context');
  return remote.$;
};

enterprise_companion.mojom.EnterpriseCompanionReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('EnterpriseCompanion', [
      { explicit: 0 },
      { explicit: 1 },
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
             decoder.decodeStructInline(enterprise_companion.mojom.EnterpriseCompanion_Shutdown_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(enterprise_companion.mojom.EnterpriseCompanion_FetchPolicies_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(enterprise_companion.mojom.EnterpriseCompanion_Shutdown_ParamsSpec.$.structSpec);
          const result = this.impl.shutdown();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, enterprise_companion.mojom.EnterpriseCompanion_Shutdown_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(enterprise_companion.mojom.EnterpriseCompanion_FetchPolicies_ParamsSpec.$.structSpec);
          const result = this.impl.fetchPolicies(params.reason);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, enterprise_companion.mojom.EnterpriseCompanion_FetchPolicies_ResponseParamsSpec);
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

enterprise_companion.mojom.EnterpriseCompanionReceiver = enterprise_companion.mojom.EnterpriseCompanionReceiver;

enterprise_companion.mojom.EnterpriseCompanionPtr = enterprise_companion.mojom.EnterpriseCompanionRemote;
enterprise_companion.mojom.EnterpriseCompanionRequest = enterprise_companion.mojom.EnterpriseCompanionPendingReceiver;

