// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/components/cdm_factory_daemon/mojom/output_protection.mojom
// Module: chromeos.cdm.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var chromeos = chromeos || {};
chromeos.cdm = chromeos.cdm || {};
chromeos.cdm.mojom = chromeos.cdm.mojom || {};

chromeos.cdm.mojom.ProtectionTypeSpec = { $: mojo.internal.Enum() };
chromeos.cdm.mojom.LinkTypeSpec = { $: mojo.internal.Enum() };
chromeos.cdm.mojom.OutputProtection = {};
chromeos.cdm.mojom.OutputProtection.$interfaceName = 'chromeos.cdm.mojom.OutputProtection';
chromeos.cdm.mojom.OutputProtection_QueryStatus_ParamsSpec = { $: {} };
chromeos.cdm.mojom.OutputProtection_QueryStatus_ResponseParamsSpec = { $: {} };
chromeos.cdm.mojom.OutputProtection_EnableProtection_ParamsSpec = { $: {} };
chromeos.cdm.mojom.OutputProtection_EnableProtection_ResponseParamsSpec = { $: {} };

// Enum: ProtectionType
chromeos.cdm.mojom.ProtectionType = {
  NONE: 0,
  HDCP_TYPE_0: 1,
  HDCP_TYPE_1: 2,
};

// Enum: LinkType
chromeos.cdm.mojom.LinkType = {
  NONE: 0,
  UNKNOWN: 1,
  INTERNAL: 2,
  VGA: 4,
  HDMI: 8,
  DVI: 16,
  DISPLAYPORT: 32,
  NETWORK: 64,
};

// Interface: OutputProtection
mojo.internal.Struct(
    chromeos.cdm.mojom.OutputProtection_QueryStatus_ParamsSpec, 'chromeos.cdm.mojom.OutputProtection_QueryStatus_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    chromeos.cdm.mojom.OutputProtection_QueryStatus_ResponseParamsSpec, 'chromeos.cdm.mojom.OutputProtection_QueryStatus_ResponseParams', [
      mojo.internal.StructField('protection', 0, 0, chromeos.cdm.mojom.ProtectionTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('link_mask', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('success', 12, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    chromeos.cdm.mojom.OutputProtection_EnableProtection_ParamsSpec, 'chromeos.cdm.mojom.OutputProtection_EnableProtection_Params', [
      mojo.internal.StructField('desired_protection', 0, 0, chromeos.cdm.mojom.ProtectionTypeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromeos.cdm.mojom.OutputProtection_EnableProtection_ResponseParamsSpec, 'chromeos.cdm.mojom.OutputProtection_EnableProtection_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

chromeos.cdm.mojom.OutputProtectionPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chromeos.cdm.mojom.OutputProtectionRemote = class {
  static get $interfaceName() {
    return 'chromeos.cdm.mojom.OutputProtection';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chromeos.cdm.mojom.OutputProtectionPendingReceiver,
      handle);
    this.$ = new chromeos.cdm.mojom.OutputProtectionRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  queryStatus() {
    return this.$.queryStatus();
  }
  enableProtection(desired_protection) {
    return this.$.enableProtection(desired_protection);
  }
};

chromeos.cdm.mojom.OutputProtectionRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('OutputProtection', [
      { explicit: 0 },
      { explicit: 1 },
    ]);
  }

  queryStatus() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      chromeos.cdm.mojom.OutputProtection_QueryStatus_ParamsSpec,
      chromeos.cdm.mojom.OutputProtection_QueryStatus_ResponseParamsSpec,
      [],
      false);
  }

  enableProtection(desired_protection) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      chromeos.cdm.mojom.OutputProtection_EnableProtection_ParamsSpec,
      chromeos.cdm.mojom.OutputProtection_EnableProtection_ResponseParamsSpec,
      [desired_protection],
      false);
  }

};

chromeos.cdm.mojom.OutputProtection.getRemote = function() {
  let remote = new chromeos.cdm.mojom.OutputProtectionRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromeos.cdm.mojom.OutputProtection',
    'context');
  return remote.$;
};

chromeos.cdm.mojom.OutputProtectionReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('OutputProtection', [
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
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromeos.cdm.mojom.OutputProtection_QueryStatus_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromeos.cdm.mojom.OutputProtection_EnableProtection_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromeos.cdm.mojom.OutputProtection_QueryStatus_ParamsSpec.$.structSpec);
          const result = this.impl.queryStatus();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, chromeos.cdm.mojom.OutputProtection_QueryStatus_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromeos.cdm.mojom.OutputProtection_EnableProtection_ParamsSpec.$.structSpec);
          const result = this.impl.enableProtection(params.desired_protection);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, chromeos.cdm.mojom.OutputProtection_EnableProtection_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
      } catch (err) {}
    });
  }
};

chromeos.cdm.mojom.OutputProtectionReceiver = chromeos.cdm.mojom.OutputProtectionReceiver;

chromeos.cdm.mojom.OutputProtectionPtr = chromeos.cdm.mojom.OutputProtectionRemote;
chromeos.cdm.mojom.OutputProtectionRequest = chromeos.cdm.mojom.OutputProtectionPendingReceiver;

