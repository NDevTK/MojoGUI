// Auto-generated MojoJS binding
// Source: chromium_src/media/capture/video/chromeos/mojom/cros_camera_client.mojom
// Module: cros.mojom

// Module namespace
var cros = cros || {};
cros.mojom = cros.mojom || {};

cros.mojom.CameraHalClient = {};
cros.mojom.CameraHalClient.$interfaceName = 'cros.mojom.CameraHalClient';
cros.mojom.CameraHalClient_SetUpChannel_ParamsSpec = { $: {} };

// Interface: CameraHalClient
mojo.internal.Struct(
    cros.mojom.CameraHalClient_SetUpChannel_ParamsSpec, 'cros.mojom.CameraHalClient_SetUpChannel_Params', [
      mojo.internal.StructField('camera_module', 0, 0, mojo.internal.InterfaceProxy(cros.mojom.CameraModuleRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

cros.mojom.CameraHalClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

cros.mojom.CameraHalClientRemote = class {
  static get $interfaceName() {
    return 'cros.mojom.CameraHalClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      cros.mojom.CameraHalClientPendingReceiver,
      handle);
    this.$ = new cros.mojom.CameraHalClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  setUpChannel(camera_module) {
    return this.$.setUpChannel(camera_module);
  }
};

cros.mojom.CameraHalClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('CameraHalClient', [
      { explicit: 0 },
    ]);
  }

  setUpChannel(camera_module) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      cros.mojom.CameraHalClient_SetUpChannel_ParamsSpec,
      null,
      [camera_module],
      false);
  }

};

cros.mojom.CameraHalClient.getRemote = function() {
  let remote = new cros.mojom.CameraHalClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'cros.mojom.CameraHalClient',
    'context');
  return remote.$;
};

cros.mojom.CameraHalClientReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('CameraHalClient', [
      { explicit: 0 },
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
             decoder.decodeStructInline(cros.mojom.CameraHalClient_SetUpChannel_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(cros.mojom.CameraHalClient_SetUpChannel_ParamsSpec.$.structSpec);
          const result = this.impl.setUpChannel(params.camera_module);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

cros.mojom.CameraHalClientReceiver = cros.mojom.CameraHalClientReceiver;

cros.mojom.CameraHalClientPtr = cros.mojom.CameraHalClientRemote;
cros.mojom.CameraHalClientRequest = cros.mojom.CameraHalClientPendingReceiver;

