// Auto-generated MojoJS binding
// Source: chromium_src/media/mojo/mojom/media_foundation_service.mojom
// Module: media.mojom

// Module namespace
var media = media || {};
media.mojom = media.mojom || {};
var gpu = gpu || {};
var mojo_base = mojo_base || {};
var sandbox = sandbox || {};

media.mojom.GpuInfoObserver = {};
media.mojom.GpuInfoObserver.$interfaceName = 'media.mojom.GpuInfoObserver';
media.mojom.GpuInfoObserver_OnGpuInfoUpdate_ParamsSpec = { $: {} };
media.mojom.MediaFoundationService = {};
media.mojom.MediaFoundationService.$interfaceName = 'media.mojom.MediaFoundationService';
media.mojom.MediaFoundationService_IsKeySystemSupported_ParamsSpec = { $: {} };
media.mojom.MediaFoundationService_IsKeySystemSupported_ResponseParamsSpec = { $: {} };
media.mojom.MediaFoundationService_CreateInterfaceFactory_ParamsSpec = { $: {} };
media.mojom.MediaFoundationServiceBroker = {};
media.mojom.MediaFoundationServiceBroker.$interfaceName = 'media.mojom.MediaFoundationServiceBroker';
media.mojom.MediaFoundationServiceBroker_UpdateGpuInfo_ParamsSpec = { $: {} };
media.mojom.MediaFoundationServiceBroker_UpdateGpuInfo_ResponseParamsSpec = { $: {} };
media.mojom.MediaFoundationServiceBroker_GetService_ParamsSpec = { $: {} };

// Interface: GpuInfoObserver
mojo.internal.Struct(
    media.mojom.GpuInfoObserver_OnGpuInfoUpdate_ParamsSpec, 'media.mojom.GpuInfoObserver_OnGpuInfoUpdate_Params', [
      mojo.internal.StructField('gpu_info', 0, 0, gpu.mojom.GpuInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

media.mojom.GpuInfoObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media.mojom.GpuInfoObserverRemote = class {
  static get $interfaceName() {
    return 'media.mojom.GpuInfoObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media.mojom.GpuInfoObserverPendingReceiver,
      handle);
    this.$ = new media.mojom.GpuInfoObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onGpuInfoUpdate(gpu_info) {
    return this.$.onGpuInfoUpdate(gpu_info);
  }
};

media.mojom.GpuInfoObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('GpuInfoObserver', [
      { explicit: null },
    ]);
  }

  onGpuInfoUpdate(gpu_info) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      media.mojom.GpuInfoObserver_OnGpuInfoUpdate_ParamsSpec,
      null,
      [gpu_info],
      false);
  }

};

media.mojom.GpuInfoObserver.getRemote = function() {
  let remote = new media.mojom.GpuInfoObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.GpuInfoObserver',
    'context');
  return remote.$;
};

media.mojom.GpuInfoObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('GpuInfoObserver', [
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
             decoder.decodeStructInline(media.mojom.GpuInfoObserver_OnGpuInfoUpdate_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.GpuInfoObserver_OnGpuInfoUpdate_ParamsSpec.$.structSpec);
          const result = this.impl.onGpuInfoUpdate(params.gpu_info);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

media.mojom.GpuInfoObserverReceiver = media.mojom.GpuInfoObserverReceiver;

media.mojom.GpuInfoObserverPtr = media.mojom.GpuInfoObserverRemote;
media.mojom.GpuInfoObserverRequest = media.mojom.GpuInfoObserverPendingReceiver;


// Interface: MediaFoundationService
mojo.internal.Struct(
    media.mojom.MediaFoundationService_IsKeySystemSupported_ParamsSpec, 'media.mojom.MediaFoundationService_IsKeySystemSupported_Params', [
      mojo.internal.StructField('key_system', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media.mojom.MediaFoundationService_IsKeySystemSupported_ResponseParamsSpec, 'media.mojom.MediaFoundationService_IsKeySystemSupported_ResponseParams', [
      mojo.internal.StructField('key_system_capability', 0, 0, media.mojom.KeySystemCapabilitySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('is_supported', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    media.mojom.MediaFoundationService_CreateInterfaceFactory_ParamsSpec, 'media.mojom.MediaFoundationService_CreateInterfaceFactory_Params', [
      mojo.internal.StructField('factory', 0, 0, mojo.internal.InterfaceRequest(media.mojom.InterfaceFactoryRemote), null, false, 0, undefined),
      mojo.internal.StructField('frame_interfaces', 8, 0, mojo.internal.InterfaceProxy(media.mojom.FrameInterfaceFactoryRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

media.mojom.MediaFoundationServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media.mojom.MediaFoundationServiceRemote = class {
  static get $interfaceName() {
    return 'media.mojom.MediaFoundationService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media.mojom.MediaFoundationServicePendingReceiver,
      handle);
    this.$ = new media.mojom.MediaFoundationServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  isKeySystemSupported(key_system) {
    return this.$.isKeySystemSupported(key_system);
  }
  createInterfaceFactory(factory, frame_interfaces) {
    return this.$.createInterfaceFactory(factory, frame_interfaces);
  }
};

media.mojom.MediaFoundationServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('MediaFoundationService', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  isKeySystemSupported(key_system) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      media.mojom.MediaFoundationService_IsKeySystemSupported_ParamsSpec,
      media.mojom.MediaFoundationService_IsKeySystemSupported_ResponseParamsSpec,
      [key_system],
      false);
  }

  createInterfaceFactory(factory, frame_interfaces) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      media.mojom.MediaFoundationService_CreateInterfaceFactory_ParamsSpec,
      null,
      [factory, frame_interfaces],
      false);
  }

};

media.mojom.MediaFoundationService.getRemote = function() {
  let remote = new media.mojom.MediaFoundationServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.MediaFoundationService',
    'context');
  return remote.$;
};

media.mojom.MediaFoundationServiceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('MediaFoundationService', [
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
             decoder.decodeStructInline(media.mojom.MediaFoundationService_IsKeySystemSupported_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.MediaFoundationService_CreateInterfaceFactory_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.MediaFoundationService_IsKeySystemSupported_ParamsSpec.$.structSpec);
          const result = this.impl.isKeySystemSupported(params.key_system);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, media.mojom.MediaFoundationService_IsKeySystemSupported_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.MediaFoundationService_CreateInterfaceFactory_ParamsSpec.$.structSpec);
          const result = this.impl.createInterfaceFactory(params.factory, params.frame_interfaces);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

media.mojom.MediaFoundationServiceReceiver = media.mojom.MediaFoundationServiceReceiver;

media.mojom.MediaFoundationServicePtr = media.mojom.MediaFoundationServiceRemote;
media.mojom.MediaFoundationServiceRequest = media.mojom.MediaFoundationServicePendingReceiver;


// Interface: MediaFoundationServiceBroker
mojo.internal.Struct(
    media.mojom.MediaFoundationServiceBroker_UpdateGpuInfo_ParamsSpec, 'media.mojom.MediaFoundationServiceBroker_UpdateGpuInfo_Params', [
      mojo.internal.StructField('gpu_info', 0, 0, gpu.mojom.GpuInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media.mojom.MediaFoundationServiceBroker_UpdateGpuInfo_ResponseParamsSpec, 'media.mojom.MediaFoundationServiceBroker_UpdateGpuInfo_ResponseParams', [
      mojo.internal.StructField('gpu_info_observer', 0, 0, mojo.internal.InterfaceProxy(media.mojom.GpuInfoObserverRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media.mojom.MediaFoundationServiceBroker_GetService_ParamsSpec, 'media.mojom.MediaFoundationServiceBroker_GetService_Params', [
      mojo.internal.StructField('cdm_path', 0, 0, mojo_base.mojom.FilePathSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('receiver', 8, 0, mojo.internal.InterfaceRequest(media.mojom.MediaFoundationServiceRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

media.mojom.MediaFoundationServiceBrokerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media.mojom.MediaFoundationServiceBrokerRemote = class {
  static get $interfaceName() {
    return 'media.mojom.MediaFoundationServiceBroker';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media.mojom.MediaFoundationServiceBrokerPendingReceiver,
      handle);
    this.$ = new media.mojom.MediaFoundationServiceBrokerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  updateGpuInfo(gpu_info) {
    return this.$.updateGpuInfo(gpu_info);
  }
  getService(cdm_path, receiver) {
    return this.$.getService(cdm_path, receiver);
  }
};

media.mojom.MediaFoundationServiceBrokerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('MediaFoundationServiceBroker', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  updateGpuInfo(gpu_info) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      media.mojom.MediaFoundationServiceBroker_UpdateGpuInfo_ParamsSpec,
      media.mojom.MediaFoundationServiceBroker_UpdateGpuInfo_ResponseParamsSpec,
      [gpu_info],
      false);
  }

  getService(cdm_path, receiver) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      media.mojom.MediaFoundationServiceBroker_GetService_ParamsSpec,
      null,
      [cdm_path, receiver],
      false);
  }

};

media.mojom.MediaFoundationServiceBroker.getRemote = function() {
  let remote = new media.mojom.MediaFoundationServiceBrokerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.MediaFoundationServiceBroker',
    'context');
  return remote.$;
};

media.mojom.MediaFoundationServiceBrokerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('MediaFoundationServiceBroker', [
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
             decoder.decodeStructInline(media.mojom.MediaFoundationServiceBroker_UpdateGpuInfo_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.MediaFoundationServiceBroker_GetService_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.MediaFoundationServiceBroker_UpdateGpuInfo_ParamsSpec.$.structSpec);
          const result = this.impl.updateGpuInfo(params.gpu_info);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, media.mojom.MediaFoundationServiceBroker_UpdateGpuInfo_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.MediaFoundationServiceBroker_GetService_ParamsSpec.$.structSpec);
          const result = this.impl.getService(params.cdm_path, params.receiver);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

media.mojom.MediaFoundationServiceBrokerReceiver = media.mojom.MediaFoundationServiceBrokerReceiver;

media.mojom.MediaFoundationServiceBrokerPtr = media.mojom.MediaFoundationServiceBrokerRemote;
media.mojom.MediaFoundationServiceBrokerRequest = media.mojom.MediaFoundationServiceBrokerPendingReceiver;

