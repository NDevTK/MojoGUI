// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/services/cellular_setup/public/mojom/cellular_setup.mojom
// Module: ash.cellular_setup.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var ash = ash || {};
ash.cellular_setup = ash.cellular_setup || {};
ash.cellular_setup.mojom = ash.cellular_setup.mojom || {};
var url = url || {};

ash.cellular_setup.mojom.CarrierPortalStatusSpec = { $: mojo.internal.Enum() };
ash.cellular_setup.mojom.ActivationResultSpec = { $: mojo.internal.Enum() };
ash.cellular_setup.mojom.CellularMetadataSpec = { $: {} };
ash.cellular_setup.mojom.CarrierPortalHandler = {};
ash.cellular_setup.mojom.CarrierPortalHandler.$interfaceName = 'ash.cellular_setup.mojom.CarrierPortalHandler';
ash.cellular_setup.mojom.CarrierPortalHandler_OnCarrierPortalStatusChange_ParamsSpec = { $: {} };
ash.cellular_setup.mojom.ActivationDelegate = {};
ash.cellular_setup.mojom.ActivationDelegate.$interfaceName = 'ash.cellular_setup.mojom.ActivationDelegate';
ash.cellular_setup.mojom.ActivationDelegate_OnActivationStarted_ParamsSpec = { $: {} };
ash.cellular_setup.mojom.ActivationDelegate_OnActivationFinished_ParamsSpec = { $: {} };
ash.cellular_setup.mojom.CellularSetup = {};
ash.cellular_setup.mojom.CellularSetup.$interfaceName = 'ash.cellular_setup.mojom.CellularSetup';
ash.cellular_setup.mojom.CellularSetup_StartActivation_ParamsSpec = { $: {} };
ash.cellular_setup.mojom.CellularSetup_StartActivation_ResponseParamsSpec = { $: {} };

// Enum: CarrierPortalStatus
ash.cellular_setup.mojom.CarrierPortalStatus = {
  kPortalFailedToLoad: 0,
  kPortalLoadedWithoutPaidUser: 1,
  kPortalLoadedButErrorOccurredDuringPayment: 2,
  kPortalLoadedAndUserCompletedPayment: 3,
};

// Enum: ActivationResult
ash.cellular_setup.mojom.ActivationResult = {
  kSuccessfullyStartedActivation: 0,
  kAlreadyActivated: 1,
  kFailedToActivate: 2,
};

// Struct: CellularMetadata
mojo.internal.Struct(
    ash.cellular_setup.mojom.CellularMetadataSpec, 'ash.cellular_setup.mojom.CellularMetadata', [
      mojo.internal.StructField('payment_url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('payment_post_data', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('carrier', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('meid', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('imei', 32, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('mdn', 40, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 56]]);

// Interface: CarrierPortalHandler
mojo.internal.Struct(
    ash.cellular_setup.mojom.CarrierPortalHandler_OnCarrierPortalStatusChange_ParamsSpec, 'ash.cellular_setup.mojom.CarrierPortalHandler_OnCarrierPortalStatusChange_Params', [
      mojo.internal.StructField('status', 0, 0, ash.cellular_setup.mojom.CarrierPortalStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

ash.cellular_setup.mojom.CarrierPortalHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.cellular_setup.mojom.CarrierPortalHandlerRemote = class {
  static get $interfaceName() {
    return 'ash.cellular_setup.mojom.CarrierPortalHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.cellular_setup.mojom.CarrierPortalHandlerPendingReceiver,
      handle);
    this.$ = new ash.cellular_setup.mojom.CarrierPortalHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onCarrierPortalStatusChange(status) {
    return this.$.onCarrierPortalStatusChange(status);
  }
};

ash.cellular_setup.mojom.CarrierPortalHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('CarrierPortalHandler', [
      { explicit: null },
    ]);
  }

  onCarrierPortalStatusChange(status) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      ash.cellular_setup.mojom.CarrierPortalHandler_OnCarrierPortalStatusChange_ParamsSpec,
      null,
      [status],
      false);
  }

};

ash.cellular_setup.mojom.CarrierPortalHandler.getRemote = function() {
  let remote = new ash.cellular_setup.mojom.CarrierPortalHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.cellular_setup.mojom.CarrierPortalHandler',
    'context');
  return remote.$;
};

ash.cellular_setup.mojom.CarrierPortalHandlerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('CarrierPortalHandler', [
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
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.cellular_setup.mojom.CarrierPortalHandler_OnCarrierPortalStatusChange_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.cellular_setup.mojom.CarrierPortalHandler_OnCarrierPortalStatusChange_ParamsSpec.$.structSpec);
          const result = this.impl.onCarrierPortalStatusChange(params.status);
          break;
        }
      }
      } catch (err) {}
    });
  }
};

ash.cellular_setup.mojom.CarrierPortalHandlerReceiver = ash.cellular_setup.mojom.CarrierPortalHandlerReceiver;

ash.cellular_setup.mojom.CarrierPortalHandlerPtr = ash.cellular_setup.mojom.CarrierPortalHandlerRemote;
ash.cellular_setup.mojom.CarrierPortalHandlerRequest = ash.cellular_setup.mojom.CarrierPortalHandlerPendingReceiver;


// Interface: ActivationDelegate
mojo.internal.Struct(
    ash.cellular_setup.mojom.ActivationDelegate_OnActivationStarted_ParamsSpec, 'ash.cellular_setup.mojom.ActivationDelegate_OnActivationStarted_Params', [
      mojo.internal.StructField('metadata', 0, 0, ash.cellular_setup.mojom.CellularMetadataSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.cellular_setup.mojom.ActivationDelegate_OnActivationFinished_ParamsSpec, 'ash.cellular_setup.mojom.ActivationDelegate_OnActivationFinished_Params', [
      mojo.internal.StructField('result', 0, 0, ash.cellular_setup.mojom.ActivationResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

ash.cellular_setup.mojom.ActivationDelegatePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.cellular_setup.mojom.ActivationDelegateRemote = class {
  static get $interfaceName() {
    return 'ash.cellular_setup.mojom.ActivationDelegate';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.cellular_setup.mojom.ActivationDelegatePendingReceiver,
      handle);
    this.$ = new ash.cellular_setup.mojom.ActivationDelegateRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onActivationStarted(metadata) {
    return this.$.onActivationStarted(metadata);
  }
  onActivationFinished(result) {
    return this.$.onActivationFinished(result);
  }
};

ash.cellular_setup.mojom.ActivationDelegateRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ActivationDelegate', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  onActivationStarted(metadata) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      ash.cellular_setup.mojom.ActivationDelegate_OnActivationStarted_ParamsSpec,
      null,
      [metadata],
      false);
  }

  onActivationFinished(result) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      ash.cellular_setup.mojom.ActivationDelegate_OnActivationFinished_ParamsSpec,
      null,
      [result],
      false);
  }

};

ash.cellular_setup.mojom.ActivationDelegate.getRemote = function() {
  let remote = new ash.cellular_setup.mojom.ActivationDelegateRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.cellular_setup.mojom.ActivationDelegate',
    'context');
  return remote.$;
};

ash.cellular_setup.mojom.ActivationDelegateReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ActivationDelegate', [
      { explicit: null },
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
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.cellular_setup.mojom.ActivationDelegate_OnActivationStarted_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.cellular_setup.mojom.ActivationDelegate_OnActivationFinished_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.cellular_setup.mojom.ActivationDelegate_OnActivationStarted_ParamsSpec.$.structSpec);
          const result = this.impl.onActivationStarted(params.metadata);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.cellular_setup.mojom.ActivationDelegate_OnActivationFinished_ParamsSpec.$.structSpec);
          const result = this.impl.onActivationFinished(params.result);
          break;
        }
      }
      } catch (err) {}
    });
  }
};

ash.cellular_setup.mojom.ActivationDelegateReceiver = ash.cellular_setup.mojom.ActivationDelegateReceiver;

ash.cellular_setup.mojom.ActivationDelegatePtr = ash.cellular_setup.mojom.ActivationDelegateRemote;
ash.cellular_setup.mojom.ActivationDelegateRequest = ash.cellular_setup.mojom.ActivationDelegatePendingReceiver;


// Interface: CellularSetup
mojo.internal.Struct(
    ash.cellular_setup.mojom.CellularSetup_StartActivation_ParamsSpec, 'ash.cellular_setup.mojom.CellularSetup_StartActivation_Params', [
      mojo.internal.StructField('delegate', 0, 0, mojo.internal.InterfaceProxy(ash.cellular_setup.mojom.ActivationDelegateRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.cellular_setup.mojom.CellularSetup_StartActivation_ResponseParamsSpec, 'ash.cellular_setup.mojom.CellularSetup_StartActivation_ResponseParams', [
      mojo.internal.StructField('observer', 0, 0, mojo.internal.InterfaceProxy(ash.cellular_setup.mojom.CarrierPortalHandlerRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

ash.cellular_setup.mojom.CellularSetupPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.cellular_setup.mojom.CellularSetupRemote = class {
  static get $interfaceName() {
    return 'ash.cellular_setup.mojom.CellularSetup';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.cellular_setup.mojom.CellularSetupPendingReceiver,
      handle);
    this.$ = new ash.cellular_setup.mojom.CellularSetupRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  startActivation(delegate) {
    return this.$.startActivation(delegate);
  }
};

ash.cellular_setup.mojom.CellularSetupRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('CellularSetup', [
      { explicit: null },
    ]);
  }

  startActivation(delegate) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      ash.cellular_setup.mojom.CellularSetup_StartActivation_ParamsSpec,
      ash.cellular_setup.mojom.CellularSetup_StartActivation_ResponseParamsSpec,
      [delegate],
      false);
  }

};

ash.cellular_setup.mojom.CellularSetup.getRemote = function() {
  let remote = new ash.cellular_setup.mojom.CellularSetupRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.cellular_setup.mojom.CellularSetup',
    'context');
  return remote.$;
};

ash.cellular_setup.mojom.CellularSetupReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('CellularSetup', [
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
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.cellular_setup.mojom.CellularSetup_StartActivation_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.cellular_setup.mojom.CellularSetup_StartActivation_ParamsSpec.$.structSpec);
          const result = this.impl.startActivation(params.delegate);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.cellular_setup.mojom.CellularSetup_StartActivation_ResponseParamsSpec);
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

ash.cellular_setup.mojom.CellularSetupReceiver = ash.cellular_setup.mojom.CellularSetupReceiver;

ash.cellular_setup.mojom.CellularSetupPtr = ash.cellular_setup.mojom.CellularSetupRemote;
ash.cellular_setup.mojom.CellularSetupRequest = ash.cellular_setup.mojom.CellularSetupPendingReceiver;

