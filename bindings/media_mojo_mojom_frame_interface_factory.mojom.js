// Auto-generated MojoJS binding
// Source: chromium_src/media/mojo/mojom/frame_interface_factory.mojom
// Module: media.mojom

'use strict';

// Module namespace
var media = media || {};
media.mojom = media.mojom || {};


// Interface: MuteStateObserver
media.mojom.MuteStateObserver = {};

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
      null,
      [muted],
      undefined,
      undefined
    );
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

// ParamsSpec for OnMuteStateChange
media.mojom.MuteStateObserver_OnMuteStateChange_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.MuteStateObserver.OnMuteStateChange_Params',
      packedSize: 16,
      fields: [
        { name: 'muted', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
media.mojom.MuteStateObserverPtr = media.mojom.MuteStateObserverRemote;
media.mojom.MuteStateObserverRequest = media.mojom.MuteStateObserverPendingReceiver;


// Interface: FrameInterfaceFactory
media.mojom.FrameInterfaceFactory = {};

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
      null,
      [provision_fetcher],
      undefined,
      undefined
    );
  }

  createCdmStorage(cdm_storage) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      media.mojom.FrameInterfaceFactory_CreateCdmStorage_ParamsSpec,
      null,
      null,
      [cdm_storage],
      undefined,
      undefined
    );
  }

  registerMuteStateObserver(site_mute_observer) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      media.mojom.FrameInterfaceFactory_RegisterMuteStateObserver_ParamsSpec,
      null,
      null,
      [site_mute_observer],
      undefined,
      undefined
    );
  }

  createDCOMPSurfaceRegistry(registry) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      media.mojom.FrameInterfaceFactory_CreateDCOMPSurfaceRegistry_ParamsSpec,
      null,
      null,
      [registry],
      undefined,
      undefined
    );
  }

  getCdmOrigin() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      media.mojom.FrameInterfaceFactory_GetCdmOrigin_ParamsSpec,
      media.mojom.FrameInterfaceFactory_GetCdmOrigin_ResponseParamsSpec,
      media.mojom.FrameInterfaceFactory_GetCdmOrigin_ResponseParamsSpec,
      [],
      undefined,
      mojo.internal.kMessageFlagIsSync
    );
  }

  bindEmbedderReceiver(receiver) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      media.mojom.FrameInterfaceFactory_BindEmbedderReceiver_ParamsSpec,
      null,
      null,
      [receiver],
      undefined,
      undefined
    );
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

// ParamsSpec for CreateProvisionFetcher
media.mojom.FrameInterfaceFactory_CreateProvisionFetcher_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.FrameInterfaceFactory.CreateProvisionFetcher_Params',
      packedSize: 16,
      fields: [
        { name: 'provision_fetcher', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for CreateCdmStorage
media.mojom.FrameInterfaceFactory_CreateCdmStorage_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.FrameInterfaceFactory.CreateCdmStorage_Params',
      packedSize: 16,
      fields: [
        { name: 'cdm_storage', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for RegisterMuteStateObserver
media.mojom.FrameInterfaceFactory_RegisterMuteStateObserver_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.FrameInterfaceFactory.RegisterMuteStateObserver_Params',
      packedSize: 16,
      fields: [
        { name: 'site_mute_observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for CreateDCOMPSurfaceRegistry
media.mojom.FrameInterfaceFactory_CreateDCOMPSurfaceRegistry_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.FrameInterfaceFactory.CreateDCOMPSurfaceRegistry_Params',
      packedSize: 16,
      fields: [
        { name: 'registry', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetCdmOrigin
media.mojom.FrameInterfaceFactory_GetCdmOrigin_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.FrameInterfaceFactory.GetCdmOrigin_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

media.mojom.FrameInterfaceFactory_GetCdmOrigin_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.FrameInterfaceFactory.GetCdmOrigin_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'cdm_origin', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for BindEmbedderReceiver
media.mojom.FrameInterfaceFactory_BindEmbedderReceiver_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.FrameInterfaceFactory.BindEmbedderReceiver_Params',
      packedSize: 16,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
media.mojom.FrameInterfaceFactoryPtr = media.mojom.FrameInterfaceFactoryRemote;
media.mojom.FrameInterfaceFactoryRequest = media.mojom.FrameInterfaceFactoryPendingReceiver;

