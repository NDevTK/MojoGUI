// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/crosapi/mojom/telemetry_management_service.mojom
// Module: crosapi.mojom

'use strict';

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
};

crosapi.mojom.TelemetryManagementServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  setAudioGain(node_id, gain) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      crosapi.mojom.TelemetryManagementService_SetAudioGain_ParamsSpec,
      crosapi.mojom.TelemetryManagementService_SetAudioGain_ResponseParamsSpec,
      [node_id, gain],
      false);
  }

  setAudioVolume(node_id, volume, is_muted) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
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
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      console.log('[GeneratedReceiver] Args received:', args);
      const message = args[0];
      if (args.length > 1) { console.log('[GeneratedReceiver] 2nd Arg:', args[1]); }
      const header = message && message.header;
      if (!header) { console.warn('[GeneratedReceiver] No header in arg0'); }
      if (header) {
      console.log('[GeneratedReceiver] Header ordinal:', header.ordinal);
      switch (header.ordinal) {
        case 0: {
          const params = crosapi.mojom.TelemetryManagementService_SetAudioGain_ParamsSpec.$.decode(message.payload);
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
          const params = crosapi.mojom.TelemetryManagementService_SetAudioVolume_ParamsSpec.$.decode(message.payload);
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
      }
    }});
  }
};

crosapi.mojom.TelemetryManagementServiceReceiver = crosapi.mojom.TelemetryManagementServiceReceiver;

crosapi.mojom.TelemetryManagementServicePtr = crosapi.mojom.TelemetryManagementServiceRemote;
crosapi.mojom.TelemetryManagementServiceRequest = crosapi.mojom.TelemetryManagementServicePendingReceiver;

