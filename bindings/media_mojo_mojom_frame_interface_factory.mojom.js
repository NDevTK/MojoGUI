// Auto-generated MojoJS binding
// Source: chromium_src/media/mojo/mojom/frame_interface_factory.mojom
// Module: media.mojom

// Module namespace
var media = media || {};
media.mojom = media.mojom || {};
var mojo_base = mojo_base || {};
var url = url || {};

media.mojom.MuteStateObserver = {};
media.mojom.MuteStateObserver.$interfaceName = 'media.mojom.MuteStateObserver';
media.mojom.MuteStateObserver_OnMuteStateChange_ParamsSpec = { $: {} };
media.mojom.FrameInterfaceFactory = {};
media.mojom.FrameInterfaceFactory.$interfaceName = 'media.mojom.FrameInterfaceFactory';
media.mojom.FrameInterfaceFactory_CreateProvisionFetcher_ParamsSpec = { $: {} };
media.mojom.FrameInterfaceFactory_CreateCdmStorage_ParamsSpec = { $: {} };
media.mojom.FrameInterfaceFactory_RegisterMuteStateObserver_ParamsSpec = { $: {} };
media.mojom.FrameInterfaceFactory_CreateDCOMPSurfaceRegistry_ParamsSpec = { $: {} };
media.mojom.FrameInterfaceFactory_GetCdmOrigin_ParamsSpec = { $: {} };
media.mojom.FrameInterfaceFactory_GetCdmOrigin_ResponseParamsSpec = { $: {} };
media.mojom.FrameInterfaceFactory_BindEmbedderReceiver_ParamsSpec = { $: {} };

// Interface: MuteStateObserver
mojo.internal.Struct(
    media.mojom.MuteStateObserver_OnMuteStateChange_ParamsSpec, 'media.mojom.MuteStateObserver_OnMuteStateChange_Params', [
      mojo.internal.StructField('muted', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

media.mojom.MuteStateObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media.mojom.MuteStateObserverRemote = class {
  static get $interfaceName() {
    return 'media.mojom.MuteStateObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media.mojom.MuteStateObserverPendingReceiver,
      handle);
    this.$ = new media.mojom.MuteStateObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onMuteStateChange(muted) {
    return this.$.onMuteStateChange(muted);
  }
};

media.mojom.MuteStateObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('MuteStateObserver', [
      { explicit: null },
    ]);
  }

  onMuteStateChange(muted) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      media.mojom.MuteStateObserver_OnMuteStateChange_ParamsSpec,
      null,
      [muted],
      false);
  }

};

media.mojom.MuteStateObserver.getRemote = function() {
  let remote = new media.mojom.MuteStateObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.MuteStateObserver',
    'context');
  return remote.$;
};

media.mojom.MuteStateObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('MuteStateObserver', [
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
             decoder.decodeStructInline(media.mojom.MuteStateObserver_OnMuteStateChange_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.MuteStateObserver_OnMuteStateChange_ParamsSpec.$.structSpec);
          const result = this.impl.onMuteStateChange(params.muted);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

media.mojom.MuteStateObserverReceiver = media.mojom.MuteStateObserverReceiver;

media.mojom.MuteStateObserverPtr = media.mojom.MuteStateObserverRemote;
media.mojom.MuteStateObserverRequest = media.mojom.MuteStateObserverPendingReceiver;


// Interface: FrameInterfaceFactory
mojo.internal.Struct(
    media.mojom.FrameInterfaceFactory_CreateProvisionFetcher_ParamsSpec, 'media.mojom.FrameInterfaceFactory_CreateProvisionFetcher_Params', [
      mojo.internal.StructField('provision_fetcher', 0, 0, mojo.internal.InterfaceRequest(media.mojom.ProvisionFetcherRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media.mojom.FrameInterfaceFactory_CreateCdmStorage_ParamsSpec, 'media.mojom.FrameInterfaceFactory_CreateCdmStorage_Params', [
      mojo.internal.StructField('cdm_storage', 0, 0, mojo.internal.InterfaceRequest(media.mojom.CdmStorageRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media.mojom.FrameInterfaceFactory_RegisterMuteStateObserver_ParamsSpec, 'media.mojom.FrameInterfaceFactory_RegisterMuteStateObserver_Params', [
      mojo.internal.StructField('site_mute_observer', 0, 0, mojo.internal.InterfaceProxy(media.mojom.MuteStateObserverRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media.mojom.FrameInterfaceFactory_CreateDCOMPSurfaceRegistry_ParamsSpec, 'media.mojom.FrameInterfaceFactory_CreateDCOMPSurfaceRegistry_Params', [
      mojo.internal.StructField('registry', 0, 0, mojo.internal.InterfaceRequest(media.mojom.DCOMPSurfaceRegistryRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media.mojom.FrameInterfaceFactory_GetCdmOrigin_ParamsSpec, 'media.mojom.FrameInterfaceFactory_GetCdmOrigin_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    media.mojom.FrameInterfaceFactory_GetCdmOrigin_ResponseParamsSpec, 'media.mojom.FrameInterfaceFactory_GetCdmOrigin_ResponseParams', [
      mojo.internal.StructField('cdm_origin', 0, 0, url.mojom.OriginSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media.mojom.FrameInterfaceFactory_BindEmbedderReceiver_ParamsSpec, 'media.mojom.FrameInterfaceFactory_BindEmbedderReceiver_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo_base.mojom.GenericPendingReceiverSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

media.mojom.FrameInterfaceFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media.mojom.FrameInterfaceFactoryRemote = class {
  static get $interfaceName() {
    return 'media.mojom.FrameInterfaceFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media.mojom.FrameInterfaceFactoryPendingReceiver,
      handle);
    this.$ = new media.mojom.FrameInterfaceFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  createProvisionFetcher(provision_fetcher) {
    return this.$.createProvisionFetcher(provision_fetcher);
  }
  createCdmStorage(cdm_storage) {
    return this.$.createCdmStorage(cdm_storage);
  }
  registerMuteStateObserver(site_mute_observer) {
    return this.$.registerMuteStateObserver(site_mute_observer);
  }
  createDCOMPSurfaceRegistry(registry) {
    return this.$.createDCOMPSurfaceRegistry(registry);
  }
  getCdmOrigin() {
    return this.$.getCdmOrigin();
  }
  bindEmbedderReceiver(receiver) {
    return this.$.bindEmbedderReceiver(receiver);
  }
};

media.mojom.FrameInterfaceFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('FrameInterfaceFactory', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  createProvisionFetcher(provision_fetcher) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      media.mojom.FrameInterfaceFactory_CreateProvisionFetcher_ParamsSpec,
      null,
      [provision_fetcher],
      false);
  }

  createCdmStorage(cdm_storage) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      media.mojom.FrameInterfaceFactory_CreateCdmStorage_ParamsSpec,
      null,
      [cdm_storage],
      false);
  }

  registerMuteStateObserver(site_mute_observer) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      media.mojom.FrameInterfaceFactory_RegisterMuteStateObserver_ParamsSpec,
      null,
      [site_mute_observer],
      false);
  }

  createDCOMPSurfaceRegistry(registry) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      media.mojom.FrameInterfaceFactory_CreateDCOMPSurfaceRegistry_ParamsSpec,
      null,
      [registry],
      false);
  }

  getCdmOrigin() {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      media.mojom.FrameInterfaceFactory_GetCdmOrigin_ParamsSpec,
      media.mojom.FrameInterfaceFactory_GetCdmOrigin_ResponseParamsSpec,
      [],
      false);
  }

  bindEmbedderReceiver(receiver) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      media.mojom.FrameInterfaceFactory_BindEmbedderReceiver_ParamsSpec,
      null,
      [receiver],
      false);
  }

};

media.mojom.FrameInterfaceFactory.getRemote = function() {
  let remote = new media.mojom.FrameInterfaceFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.FrameInterfaceFactory',
    'context');
  return remote.$;
};

media.mojom.FrameInterfaceFactoryReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('FrameInterfaceFactory', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
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
             decoder.decodeStructInline(media.mojom.FrameInterfaceFactory_CreateProvisionFetcher_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.FrameInterfaceFactory_CreateCdmStorage_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.FrameInterfaceFactory_RegisterMuteStateObserver_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.FrameInterfaceFactory_CreateDCOMPSurfaceRegistry_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.FrameInterfaceFactory_GetCdmOrigin_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.FrameInterfaceFactory_BindEmbedderReceiver_ParamsSpec);
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.FrameInterfaceFactory_CreateProvisionFetcher_ParamsSpec.$.structSpec);
          const result = this.impl.createProvisionFetcher(params.provision_fetcher);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.FrameInterfaceFactory_CreateCdmStorage_ParamsSpec.$.structSpec);
          const result = this.impl.createCdmStorage(params.cdm_storage);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.FrameInterfaceFactory_RegisterMuteStateObserver_ParamsSpec.$.structSpec);
          const result = this.impl.registerMuteStateObserver(params.site_mute_observer);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.FrameInterfaceFactory_CreateDCOMPSurfaceRegistry_ParamsSpec.$.structSpec);
          const result = this.impl.createDCOMPSurfaceRegistry(params.registry);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.FrameInterfaceFactory_GetCdmOrigin_ParamsSpec.$.structSpec);
          const result = this.impl.getCdmOrigin();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, media.mojom.FrameInterfaceFactory_GetCdmOrigin_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.FrameInterfaceFactory_BindEmbedderReceiver_ParamsSpec.$.structSpec);
          const result = this.impl.bindEmbedderReceiver(params.receiver);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

media.mojom.FrameInterfaceFactoryReceiver = media.mojom.FrameInterfaceFactoryReceiver;

media.mojom.FrameInterfaceFactoryPtr = media.mojom.FrameInterfaceFactoryRemote;
media.mojom.FrameInterfaceFactoryRequest = media.mojom.FrameInterfaceFactoryPendingReceiver;

