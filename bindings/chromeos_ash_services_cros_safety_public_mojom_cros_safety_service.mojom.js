// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/services/cros_safety/public/mojom/cros_safety_service.mojom
// Module: ash.cros_safety.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var ash = ash || {};
ash.cros_safety = ash.cros_safety || {};
ash.cros_safety.mojom = ash.cros_safety.mojom || {};

ash.cros_safety.mojom.GetCloudSafetySessionResultSpec = { $: mojo.internal.Enum() };
ash.cros_safety.mojom.GetOnDeviceSafetySessionResultSpec = { $: mojo.internal.Enum() };
ash.cros_safety.mojom.CrosSafetyService = {};
ash.cros_safety.mojom.CrosSafetyService.$interfaceName = 'ash.cros_safety.mojom.CrosSafetyService';
ash.cros_safety.mojom.CrosSafetyService_CreateOnDeviceSafetySession_ParamsSpec = { $: {} };
ash.cros_safety.mojom.CrosSafetyService_CreateOnDeviceSafetySession_ResponseParamsSpec = { $: {} };
ash.cros_safety.mojom.CrosSafetyService_CreateCloudSafetySession_ParamsSpec = { $: {} };
ash.cros_safety.mojom.CrosSafetyService_CreateCloudSafetySession_ResponseParamsSpec = { $: {} };

// Enum: GetCloudSafetySessionResult
ash.cros_safety.mojom.GetCloudSafetySessionResult = {
  kOk: 0,
  kGenericError: 1,
  MinVersion: 1,
};

// Enum: GetOnDeviceSafetySessionResult
ash.cros_safety.mojom.GetOnDeviceSafetySessionResult = {
  kOk: 0,
  kGenericError: 1,
  MinVersion: 1,
  MinVersion: 1,
  MinVersion: 1,
  MinVersion: 1,
  MinVersion: 1,
  MinVersion: 1,
  MinVersion: 1,
  MinVersion: 1,
};

// Interface: CrosSafetyService
mojo.internal.Struct(
    ash.cros_safety.mojom.CrosSafetyService_CreateOnDeviceSafetySession_ParamsSpec, 'ash.cros_safety.mojom.CrosSafetyService_CreateOnDeviceSafetySession_Params', [
      mojo.internal.StructField('session', 0, 0, mojo.internal.InterfaceRequest(ash.cros_safety.mojom.OnDeviceSafetySessionRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.cros_safety.mojom.CrosSafetyService_CreateOnDeviceSafetySession_ResponseParamsSpec, 'ash.cros_safety.mojom.CrosSafetyService_CreateOnDeviceSafetySession_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, ash.cros_safety.mojom.GetOnDeviceSafetySessionResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.cros_safety.mojom.CrosSafetyService_CreateCloudSafetySession_ParamsSpec, 'ash.cros_safety.mojom.CrosSafetyService_CreateCloudSafetySession_Params', [
      mojo.internal.StructField('session', 0, 0, mojo.internal.InterfaceRequest(ash.cros_safety.mojom.CloudSafetySessionRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.cros_safety.mojom.CrosSafetyService_CreateCloudSafetySession_ResponseParamsSpec, 'ash.cros_safety.mojom.CrosSafetyService_CreateCloudSafetySession_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, ash.cros_safety.mojom.GetCloudSafetySessionResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

ash.cros_safety.mojom.CrosSafetyServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.cros_safety.mojom.CrosSafetyServiceRemote = class {
  static get $interfaceName() {
    return 'ash.cros_safety.mojom.CrosSafetyService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.cros_safety.mojom.CrosSafetyServicePendingReceiver,
      handle);
    this.$ = new ash.cros_safety.mojom.CrosSafetyServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  createOnDeviceSafetySession(session) {
    return this.$.createOnDeviceSafetySession(session);
  }
  createCloudSafetySession(session) {
    return this.$.createCloudSafetySession(session);
  }
};

ash.cros_safety.mojom.CrosSafetyServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('CrosSafetyService', [
      { explicit: 0 },
      { explicit: 1 },
    ]);
  }

  createOnDeviceSafetySession(session) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      ash.cros_safety.mojom.CrosSafetyService_CreateOnDeviceSafetySession_ParamsSpec,
      ash.cros_safety.mojom.CrosSafetyService_CreateOnDeviceSafetySession_ResponseParamsSpec,
      [session],
      false);
  }

  createCloudSafetySession(session) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      ash.cros_safety.mojom.CrosSafetyService_CreateCloudSafetySession_ParamsSpec,
      ash.cros_safety.mojom.CrosSafetyService_CreateCloudSafetySession_ResponseParamsSpec,
      [session],
      false);
  }

};

ash.cros_safety.mojom.CrosSafetyService.getRemote = function() {
  let remote = new ash.cros_safety.mojom.CrosSafetyServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.cros_safety.mojom.CrosSafetyService',
    'context');
  return remote.$;
};

ash.cros_safety.mojom.CrosSafetyServiceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('CrosSafetyService', [
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
             decoder.decodeStructInline(ash.cros_safety.mojom.CrosSafetyService_CreateOnDeviceSafetySession_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.cros_safety.mojom.CrosSafetyService_CreateCloudSafetySession_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.cros_safety.mojom.CrosSafetyService_CreateOnDeviceSafetySession_ParamsSpec.$.structSpec);
          const result = this.impl.createOnDeviceSafetySession(params.session);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.cros_safety.mojom.CrosSafetyService_CreateOnDeviceSafetySession_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.cros_safety.mojom.CrosSafetyService_CreateCloudSafetySession_ParamsSpec.$.structSpec);
          const result = this.impl.createCloudSafetySession(params.session);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.cros_safety.mojom.CrosSafetyService_CreateCloudSafetySession_ResponseParamsSpec);
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

ash.cros_safety.mojom.CrosSafetyServiceReceiver = ash.cros_safety.mojom.CrosSafetyServiceReceiver;

ash.cros_safety.mojom.CrosSafetyServicePtr = ash.cros_safety.mojom.CrosSafetyServiceRemote;
ash.cros_safety.mojom.CrosSafetyServiceRequest = ash.cros_safety.mojom.CrosSafetyServicePendingReceiver;

