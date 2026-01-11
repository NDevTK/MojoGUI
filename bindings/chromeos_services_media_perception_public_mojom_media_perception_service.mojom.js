// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/services/media_perception/public/mojom/media_perception_service.mojom
// Module: chromeos.media_perception.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var chromeos = chromeos || {};
chromeos.media_perception = chromeos.media_perception || {};
chromeos.media_perception.mojom = chromeos.media_perception.mojom || {};
var video_capture = video_capture || {};

chromeos.media_perception.mojom.MediaPerceptionService = {};
chromeos.media_perception.mojom.MediaPerceptionService.$interfaceName = 'chromeos.media_perception.mojom.MediaPerceptionService';
chromeos.media_perception.mojom.MediaPerceptionService_GetController_ParamsSpec = { $: {} };
chromeos.media_perception.mojom.MediaPerceptionController = {};
chromeos.media_perception.mojom.MediaPerceptionController.$interfaceName = 'chromeos.media_perception.mojom.MediaPerceptionController';
chromeos.media_perception.mojom.MediaPerceptionController_ActivateMediaPerception_ParamsSpec = { $: {} };
chromeos.media_perception.mojom.MediaPerceptionControllerClient = {};
chromeos.media_perception.mojom.MediaPerceptionControllerClient.$interfaceName = 'chromeos.media_perception.mojom.MediaPerceptionControllerClient';
chromeos.media_perception.mojom.MediaPerceptionControllerClient_ConnectToVideoCaptureService_ParamsSpec = { $: {} };

// Interface: MediaPerceptionService
mojo.internal.Struct(
    chromeos.media_perception.mojom.MediaPerceptionService_GetController_ParamsSpec, 'chromeos.media_perception.mojom.MediaPerceptionService_GetController_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(chromeos.media_perception.mojom.MediaPerceptionControllerRemote), null, false, 0, undefined),
      mojo.internal.StructField('client', 8, 0, mojo.internal.InterfaceProxy(chromeos.media_perception.mojom.MediaPerceptionControllerClientRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

chromeos.media_perception.mojom.MediaPerceptionServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chromeos.media_perception.mojom.MediaPerceptionServiceRemote = class {
  static get $interfaceName() {
    return 'chromeos.media_perception.mojom.MediaPerceptionService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chromeos.media_perception.mojom.MediaPerceptionServicePendingReceiver,
      handle);
    this.$ = new chromeos.media_perception.mojom.MediaPerceptionServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  getController(receiver, client) {
    return this.$.getController(receiver, client);
  }
};

chromeos.media_perception.mojom.MediaPerceptionServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('MediaPerceptionService', [
      { explicit: 0 },
    ]);
  }

  getController(receiver, client) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      chromeos.media_perception.mojom.MediaPerceptionService_GetController_ParamsSpec,
      null,
      [receiver, client],
      false);
  }

};

chromeos.media_perception.mojom.MediaPerceptionService.getRemote = function() {
  let remote = new chromeos.media_perception.mojom.MediaPerceptionServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromeos.media_perception.mojom.MediaPerceptionService',
    'context');
  return remote.$;
};

chromeos.media_perception.mojom.MediaPerceptionServiceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('MediaPerceptionService', [
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
        message = {{ header: args[1], payload: payload, handles: args[3] || [] }};
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromeos.media_perception.mojom.MediaPerceptionService_GetController_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromeos.media_perception.mojom.MediaPerceptionService_GetController_ParamsSpec.$.structSpec);
          const result = this.impl.getController(params.receiver, params.client);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

chromeos.media_perception.mojom.MediaPerceptionServiceReceiver = chromeos.media_perception.mojom.MediaPerceptionServiceReceiver;

chromeos.media_perception.mojom.MediaPerceptionServicePtr = chromeos.media_perception.mojom.MediaPerceptionServiceRemote;
chromeos.media_perception.mojom.MediaPerceptionServiceRequest = chromeos.media_perception.mojom.MediaPerceptionServicePendingReceiver;


// Interface: MediaPerceptionController
mojo.internal.Struct(
    chromeos.media_perception.mojom.MediaPerceptionController_ActivateMediaPerception_ParamsSpec, 'chromeos.media_perception.mojom.MediaPerceptionController_ActivateMediaPerception_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(chromeos.media_perception.mojom.MediaPerceptionRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

chromeos.media_perception.mojom.MediaPerceptionControllerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chromeos.media_perception.mojom.MediaPerceptionControllerRemote = class {
  static get $interfaceName() {
    return 'chromeos.media_perception.mojom.MediaPerceptionController';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chromeos.media_perception.mojom.MediaPerceptionControllerPendingReceiver,
      handle);
    this.$ = new chromeos.media_perception.mojom.MediaPerceptionControllerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  activateMediaPerception(receiver) {
    return this.$.activateMediaPerception(receiver);
  }
};

chromeos.media_perception.mojom.MediaPerceptionControllerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('MediaPerceptionController', [
      { explicit: 0 },
    ]);
  }

  activateMediaPerception(receiver) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      chromeos.media_perception.mojom.MediaPerceptionController_ActivateMediaPerception_ParamsSpec,
      null,
      [receiver],
      false);
  }

};

chromeos.media_perception.mojom.MediaPerceptionController.getRemote = function() {
  let remote = new chromeos.media_perception.mojom.MediaPerceptionControllerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromeos.media_perception.mojom.MediaPerceptionController',
    'context');
  return remote.$;
};

chromeos.media_perception.mojom.MediaPerceptionControllerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('MediaPerceptionController', [
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
        message = {{ header: args[1], payload: payload, handles: args[3] || [] }};
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromeos.media_perception.mojom.MediaPerceptionController_ActivateMediaPerception_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromeos.media_perception.mojom.MediaPerceptionController_ActivateMediaPerception_ParamsSpec.$.structSpec);
          const result = this.impl.activateMediaPerception(params.receiver);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

chromeos.media_perception.mojom.MediaPerceptionControllerReceiver = chromeos.media_perception.mojom.MediaPerceptionControllerReceiver;

chromeos.media_perception.mojom.MediaPerceptionControllerPtr = chromeos.media_perception.mojom.MediaPerceptionControllerRemote;
chromeos.media_perception.mojom.MediaPerceptionControllerRequest = chromeos.media_perception.mojom.MediaPerceptionControllerPendingReceiver;


// Interface: MediaPerceptionControllerClient
mojo.internal.Struct(
    chromeos.media_perception.mojom.MediaPerceptionControllerClient_ConnectToVideoCaptureService_ParamsSpec, 'chromeos.media_perception.mojom.MediaPerceptionControllerClient_ConnectToVideoCaptureService_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(video_capture.mojom.VideoSourceProviderRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

chromeos.media_perception.mojom.MediaPerceptionControllerClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chromeos.media_perception.mojom.MediaPerceptionControllerClientRemote = class {
  static get $interfaceName() {
    return 'chromeos.media_perception.mojom.MediaPerceptionControllerClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chromeos.media_perception.mojom.MediaPerceptionControllerClientPendingReceiver,
      handle);
    this.$ = new chromeos.media_perception.mojom.MediaPerceptionControllerClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  connectToVideoCaptureService(receiver) {
    return this.$.connectToVideoCaptureService(receiver);
  }
};

chromeos.media_perception.mojom.MediaPerceptionControllerClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('MediaPerceptionControllerClient', [
      { explicit: 0 },
    ]);
  }

  connectToVideoCaptureService(receiver) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      chromeos.media_perception.mojom.MediaPerceptionControllerClient_ConnectToVideoCaptureService_ParamsSpec,
      null,
      [receiver],
      false);
  }

};

chromeos.media_perception.mojom.MediaPerceptionControllerClient.getRemote = function() {
  let remote = new chromeos.media_perception.mojom.MediaPerceptionControllerClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromeos.media_perception.mojom.MediaPerceptionControllerClient',
    'context');
  return remote.$;
};

chromeos.media_perception.mojom.MediaPerceptionControllerClientReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('MediaPerceptionControllerClient', [
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
        message = {{ header: args[1], payload: payload, handles: args[3] || [] }};
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromeos.media_perception.mojom.MediaPerceptionControllerClient_ConnectToVideoCaptureService_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromeos.media_perception.mojom.MediaPerceptionControllerClient_ConnectToVideoCaptureService_ParamsSpec.$.structSpec);
          const result = this.impl.connectToVideoCaptureService(params.receiver);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

chromeos.media_perception.mojom.MediaPerceptionControllerClientReceiver = chromeos.media_perception.mojom.MediaPerceptionControllerClientReceiver;

chromeos.media_perception.mojom.MediaPerceptionControllerClientPtr = chromeos.media_perception.mojom.MediaPerceptionControllerClientRemote;
chromeos.media_perception.mojom.MediaPerceptionControllerClientRequest = chromeos.media_perception.mojom.MediaPerceptionControllerClientPendingReceiver;

