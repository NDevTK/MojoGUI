// Auto-generated MojoJS binding
// Source: chromium_src/media/mojo/mojom/frame_interface_factory.mojom
// Module: media.mojom

'use strict';

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
};

media.mojom.MuteStateObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onMuteStateChange(muted) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
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
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      switch (header.ordinal) {
        case 0: {
          const params = media.mojom.MuteStateObserver_OnMuteStateChange_ParamsSpec.$.decode(message.payload);
          console.log('[GeneratedReceiver] Calling impl.onMuteStateChange');
          const result = this.impl.onMuteStateChange(params.muted);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
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
      mojo.internal.StructField('site_mute_observer', 0, 0, mojo.internal.InterfaceProxy(media.mojom.MuteStateObserverSpec), null, false, 0, undefined),
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
};

media.mojom.FrameInterfaceFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createProvisionFetcher(provision_fetcher) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      media.mojom.FrameInterfaceFactory_CreateProvisionFetcher_ParamsSpec,
      null,
      [provision_fetcher],
      false);
  }

  createCdmStorage(cdm_storage) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      media.mojom.FrameInterfaceFactory_CreateCdmStorage_ParamsSpec,
      null,
      [cdm_storage],
      false);
  }

  registerMuteStateObserver(site_mute_observer) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      media.mojom.FrameInterfaceFactory_RegisterMuteStateObserver_ParamsSpec,
      null,
      [site_mute_observer],
      false);
  }

  createDCOMPSurfaceRegistry(registry) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      media.mojom.FrameInterfaceFactory_CreateDCOMPSurfaceRegistry_ParamsSpec,
      null,
      [registry],
      false);
  }

  getCdmOrigin() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      media.mojom.FrameInterfaceFactory_GetCdmOrigin_ParamsSpec,
      media.mojom.FrameInterfaceFactory_GetCdmOrigin_ResponseParamsSpec,
      [],
      false);
  }

  bindEmbedderReceiver(receiver) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
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
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      switch (header.ordinal) {
        case 0: {
          const params = media.mojom.FrameInterfaceFactory_CreateProvisionFetcher_ParamsSpec.$.decode(message.payload);
          console.log('[GeneratedReceiver] Calling impl.createProvisionFetcher');
          const result = this.impl.createProvisionFetcher(params.provision_fetcher);
          break;
        }
        case 1: {
          const params = media.mojom.FrameInterfaceFactory_CreateCdmStorage_ParamsSpec.$.decode(message.payload);
          console.log('[GeneratedReceiver] Calling impl.createCdmStorage');
          const result = this.impl.createCdmStorage(params.cdm_storage);
          break;
        }
        case 2: {
          const params = media.mojom.FrameInterfaceFactory_RegisterMuteStateObserver_ParamsSpec.$.decode(message.payload);
          console.log('[GeneratedReceiver] Calling impl.registerMuteStateObserver');
          const result = this.impl.registerMuteStateObserver(params.site_mute_observer);
          break;
        }
        case 3: {
          const params = media.mojom.FrameInterfaceFactory_CreateDCOMPSurfaceRegistry_ParamsSpec.$.decode(message.payload);
          console.log('[GeneratedReceiver] Calling impl.createDCOMPSurfaceRegistry');
          const result = this.impl.createDCOMPSurfaceRegistry(params.registry);
          break;
        }
        case 4: {
          const params = media.mojom.FrameInterfaceFactory_GetCdmOrigin_ParamsSpec.$.decode(message.payload);
          console.log('[GeneratedReceiver] Calling impl.getCdmOrigin');
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
          const params = media.mojom.FrameInterfaceFactory_BindEmbedderReceiver_ParamsSpec.$.decode(message.payload);
          console.log('[GeneratedReceiver] Calling impl.bindEmbedderReceiver');
          const result = this.impl.bindEmbedderReceiver(params.receiver);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

media.mojom.FrameInterfaceFactoryReceiver = media.mojom.FrameInterfaceFactoryReceiver;

media.mojom.FrameInterfaceFactoryPtr = media.mojom.FrameInterfaceFactoryRemote;
media.mojom.FrameInterfaceFactoryRequest = media.mojom.FrameInterfaceFactoryPendingReceiver;

