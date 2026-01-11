// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/crosapi/mojom/telemetry_management_service.mojom
// Module: crosapi.mojom

// Module namespace
var crosapi = crosapi || {};
crosapi.mojom = crosapi.mojom || {};

crosapi.mojom.TelemetryManagementService = {};
crosapi.mojom.TelemetryManagementService.$interfaceName = 'crosapi.mojom.TelemetryManagementService';
crosapi.mojom.TelemetryManagementService_SetAudioGain_ParamsSpec = { $: {} };
crosapi.mojom.TelemetryManagementService_SetAudioGain_ResponseParamsSpec = { $: {} };
crosapi.mojom.TelemetryManagementService_SetAudioVolume_ParamsSpec = { $: {} };
crosapi.mojom.TelemetryManagementService_SetAudioVolume_ResponseParamsSpec = { $: {} };

// Interface: TelemetryManagementService
mojo.internal.Struct(
    crosapi.mojom.TelemetryManagementService_SetAudioGain_ParamsSpec, 'crosapi.mojom.TelemetryManagementService_SetAudioGain_Params', [
      mojo.internal.StructField('node_id', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('gain', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    crosapi.mojom.TelemetryManagementService_SetAudioGain_ResponseParamsSpec, 'crosapi.mojom.TelemetryManagementService_SetAudioGain_ResponseParams', [
      mojo.internal.StructField('is_success', 0, 0, mojo.internal.Bool, false, false, 2, undefined),
    ],
    [[0, 8], [2, 16]]);

mojo.internal.Struct(
    crosapi.mojom.TelemetryManagementService_SetAudioVolume_ParamsSpec, 'crosapi.mojom.TelemetryManagementService_SetAudioVolume_Params', [
      mojo.internal.StructField('node_id', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('volume', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('is_muted', 12, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    crosapi.mojom.TelemetryManagementService_SetAudioVolume_ResponseParamsSpec, 'crosapi.mojom.TelemetryManagementService_SetAudioVolume_ResponseParams', [
      mojo.internal.StructField('is_success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

crosapi.mojom.TelemetryManagementServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

crosapi.mojom.TelemetryManagementServiceRemote = class {
  static get $interfaceName() {
    return 'crosapi.mojom.TelemetryManagementService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      crosapi.mojom.TelemetryManagementServicePendingReceiver,
      handle);
    this.$ = new crosapi.mojom.TelemetryManagementServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  setAudioGain(node_id, gain) {
    return this.$.setAudioGain(node_id, gain);
  }
  setAudioVolume(node_id, volume, is_muted) {
    return this.$.setAudioVolume(node_id, volume, is_muted);
  }
};

crosapi.mojom.TelemetryManagementServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('TelemetryManagementService', [
      { explicit: 0 },
      { explicit: 1 },
    ]);
  }

  setAudioGain(node_id, gain) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      crosapi.mojom.TelemetryManagementService_SetAudioGain_ParamsSpec,
      crosapi.mojom.TelemetryManagementService_SetAudioGain_ResponseParamsSpec,
      [node_id, gain],
      false);
  }

  setAudioVolume(node_id, volume, is_muted) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      crosapi.mojom.TelemetryManagementService_SetAudioVolume_ParamsSpec,
      crosapi.mojom.TelemetryManagementService_SetAudioVolume_ResponseParamsSpec,
      [node_id, volume, is_muted],
      false);
  }

};

crosapi.mojom.TelemetryManagementService.getRemote = function() {
  let remote = new crosapi.mojom.TelemetryManagementServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'crosapi.mojom.TelemetryManagementService',
    'context');
  return remote.$;
};

crosapi.mojom.TelemetryManagementServiceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('TelemetryManagementService', [
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
    if (this.router_.onConnectionError) {
      this.router_.onConnectionError.addListener(() => {
         console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
      });
    }
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
             decoder.decodeStructInline(crosapi.mojom.TelemetryManagementService_SetAudioGain_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(crosapi.mojom.TelemetryManagementService_SetAudioVolume_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(crosapi.mojom.TelemetryManagementService_SetAudioGain_ParamsSpec.$.structSpec);
          const result = this.impl.setAudioGain(params.node_id, params.gain);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, crosapi.mojom.TelemetryManagementService_SetAudioGain_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(crosapi.mojom.TelemetryManagementService_SetAudioVolume_ParamsSpec.$.structSpec);
          const result = this.impl.setAudioVolume(params.node_id, params.volume, params.is_muted);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, crosapi.mojom.TelemetryManagementService_SetAudioVolume_ResponseParamsSpec);
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

crosapi.mojom.TelemetryManagementServiceReceiver = crosapi.mojom.TelemetryManagementServiceReceiver;

crosapi.mojom.TelemetryManagementServicePtr = crosapi.mojom.TelemetryManagementServiceRemote;
crosapi.mojom.TelemetryManagementServiceRequest = crosapi.mojom.TelemetryManagementServicePendingReceiver;

