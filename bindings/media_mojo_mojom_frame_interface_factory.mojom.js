// Auto-generated MojoJS binding
// Source: chromium_src/media/mojo/mojom/frame_interface_factory.mojom
// Module: media.mojom

'use strict';

// Module namespace
var media = media || {};
media.mojom = media.mojom || {};
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
      mojo.internal.StructField('cdm_origin', 0, 0, url.mojom.OriginSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media.mojom.FrameInterfaceFactory_BindEmbedderReceiver_ParamsSpec, 'media.mojom.FrameInterfaceFactory_BindEmbedderReceiver_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo_base.mojom.GenericPendingReceiverSpec, null, false, 0, undefined),
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

media.mojom.FrameInterfaceFactoryPtr = media.mojom.FrameInterfaceFactoryRemote;
media.mojom.FrameInterfaceFactoryRequest = media.mojom.FrameInterfaceFactoryPendingReceiver;

