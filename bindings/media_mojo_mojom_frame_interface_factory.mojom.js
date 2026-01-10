// Auto-generated MojoJS binding
// Source: chromium_src/media/mojo/mojom/frame_interface_factory.mojom
// Module: media.mojom

'use strict';

// Module namespace
var media = media || {};
media.mojom = media.mojom || {};
var url = url || {};


// Interface: MuteStateObserver
media.mojom.mojom.MuteStateObserver = {};

media.mojom.mojom.MuteStateObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media.mojom.mojom.MuteStateObserverRemote = class {
  static get $interfaceName() {
    return 'media.mojom.MuteStateObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media.mojom.mojom.MuteStateObserverPendingReceiver,
      handle);
    this.$ = new media.mojom.mojom.MuteStateObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

media.mojom.mojom.MuteStateObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onMuteStateChange(muted) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      media.mojom.mojom.MuteStateObserver_OnMuteStateChange_ParamsSpec,
      null,
      [muted]);
  }

};

media.mojom.mojom.MuteStateObserver.getRemote = function() {
  let remote = new media.mojom.mojom.MuteStateObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.MuteStateObserver',
    'context');
  return remote.$;
};

// ParamsSpec for OnMuteStateChange
media.mojom.mojom.MuteStateObserver_OnMuteStateChange_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.MuteStateObserver.OnMuteStateChange_Params',
      packedSize: 16,
      fields: [
        { name: 'muted', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
media.mojom.mojom.MuteStateObserverPtr = media.mojom.mojom.MuteStateObserverRemote;
media.mojom.mojom.MuteStateObserverRequest = media.mojom.mojom.MuteStateObserverPendingReceiver;


// Interface: FrameInterfaceFactory
media.mojom.mojom.FrameInterfaceFactory = {};

media.mojom.mojom.FrameInterfaceFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media.mojom.mojom.FrameInterfaceFactoryRemote = class {
  static get $interfaceName() {
    return 'media.mojom.FrameInterfaceFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media.mojom.mojom.FrameInterfaceFactoryPendingReceiver,
      handle);
    this.$ = new media.mojom.mojom.FrameInterfaceFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

media.mojom.mojom.FrameInterfaceFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createProvisionFetcher(provision_fetcher) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      media.mojom.mojom.FrameInterfaceFactory_CreateProvisionFetcher_ParamsSpec,
      null,
      [provision_fetcher]);
  }

  createCdmStorage(cdm_storage) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      media.mojom.mojom.FrameInterfaceFactory_CreateCdmStorage_ParamsSpec,
      null,
      [cdm_storage]);
  }

  registerMuteStateObserver(site_mute_observer) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      media.mojom.mojom.FrameInterfaceFactory_RegisterMuteStateObserver_ParamsSpec,
      null,
      [site_mute_observer]);
  }

  createDCOMPSurfaceRegistry(registry) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      media.mojom.mojom.FrameInterfaceFactory_CreateDCOMPSurfaceRegistry_ParamsSpec,
      null,
      [registry]);
  }

  getCdmOrigin() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      media.mojom.mojom.FrameInterfaceFactory_GetCdmOrigin_ParamsSpec,
      media.mojom.mojom.FrameInterfaceFactory_GetCdmOrigin_ResponseParamsSpec,
      []);
  }

  bindEmbedderReceiver(receiver) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      media.mojom.mojom.FrameInterfaceFactory_BindEmbedderReceiver_ParamsSpec,
      null,
      [receiver]);
  }

};

media.mojom.mojom.FrameInterfaceFactory.getRemote = function() {
  let remote = new media.mojom.mojom.FrameInterfaceFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.FrameInterfaceFactory',
    'context');
  return remote.$;
};

// ParamsSpec for CreateProvisionFetcher
media.mojom.mojom.FrameInterfaceFactory_CreateProvisionFetcher_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.FrameInterfaceFactory.CreateProvisionFetcher_Params',
      packedSize: 16,
      fields: [
        { name: 'provision_fetcher', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for CreateCdmStorage
media.mojom.mojom.FrameInterfaceFactory_CreateCdmStorage_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.FrameInterfaceFactory.CreateCdmStorage_Params',
      packedSize: 16,
      fields: [
        { name: 'cdm_storage', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for RegisterMuteStateObserver
media.mojom.mojom.FrameInterfaceFactory_RegisterMuteStateObserver_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.FrameInterfaceFactory.RegisterMuteStateObserver_Params',
      packedSize: 16,
      fields: [
        { name: 'site_mute_observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for CreateDCOMPSurfaceRegistry
media.mojom.mojom.FrameInterfaceFactory_CreateDCOMPSurfaceRegistry_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.FrameInterfaceFactory.CreateDCOMPSurfaceRegistry_Params',
      packedSize: 16,
      fields: [
        { name: 'registry', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetCdmOrigin
media.mojom.mojom.FrameInterfaceFactory_GetCdmOrigin_ParamsSpec = {
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

media.mojom.mojom.FrameInterfaceFactory_GetCdmOrigin_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.FrameInterfaceFactory.GetCdmOrigin_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'cdm_origin', packedOffset: 0, packedBitOffset: 0, type: url.mojom.OriginSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for BindEmbedderReceiver
media.mojom.mojom.FrameInterfaceFactory_BindEmbedderReceiver_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.FrameInterfaceFactory.BindEmbedderReceiver_Params',
      packedSize: 16,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.GenericPendingReceiverSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
media.mojom.mojom.FrameInterfaceFactoryPtr = media.mojom.mojom.FrameInterfaceFactoryRemote;
media.mojom.mojom.FrameInterfaceFactoryRequest = media.mojom.mojom.FrameInterfaceFactoryPendingReceiver;

