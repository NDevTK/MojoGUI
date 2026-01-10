// Auto-generated MojoJS binding
// Source: chromium_src/media/mojo/mojom/cdm_service.mojom
// Module: media.mojom

'use strict';

// Module namespace
var media = media || {};
media.mojom = media.mojom || {};
var services = services || {};

media.mojom.CdmService = {};
media.mojom.CdmService.$interfaceName = 'media.mojom.CdmService';
media.mojom.CdmService_CreateCdmFactory_ParamsSpec = { $: {} };
media.mojom.SeatbeltExtensionTokenProvider = {};
media.mojom.SeatbeltExtensionTokenProvider.$interfaceName = 'media.mojom.SeatbeltExtensionTokenProvider';
media.mojom.SeatbeltExtensionTokenProvider_GetTokens_ParamsSpec = { $: {} };
media.mojom.SeatbeltExtensionTokenProvider_GetTokens_ResponseParamsSpec = { $: {} };
media.mojom.CdmServiceBroker = {};
media.mojom.CdmServiceBroker.$interfaceName = 'media.mojom.CdmServiceBroker';
media.mojom.CdmServiceBroker_GetService_ParamsSpec = { $: {} };

// Interface: CdmService
mojo.internal.Struct(
    media.mojom.CdmService_CreateCdmFactory_ParamsSpec, 'media.mojom.CdmService_CreateCdmFactory_Params', [
      mojo.internal.StructField('factory', 0, 0, mojo.internal.InterfaceRequest(media.mojom.CdmFactoryRemote), null, false, 0, undefined),
      mojo.internal.StructField('frame_interfaces', 8, 0, mojo.internal.InterfaceProxy(media.mojom.FrameInterfaceFactoryRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

media.mojom.CdmServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media.mojom.CdmServiceRemote = class {
  static get $interfaceName() {
    return 'media.mojom.CdmService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media.mojom.CdmServicePendingReceiver,
      handle);
    this.$ = new media.mojom.CdmServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

media.mojom.CdmServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createCdmFactory(factory, frame_interfaces) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      media.mojom.CdmService_CreateCdmFactory_ParamsSpec,
      null,
      [factory, frame_interfaces],
      false);
  }

};

media.mojom.CdmService.getRemote = function() {
  let remote = new media.mojom.CdmServiceRemote();
  remote.bindNewPipeAndPassReceiver();
  remote.proxy.endpoint_.bindInBrowser(
    'media.mojom.CdmService',
    'context');
  return remote.$;
};

media.mojom.CdmServicePtr = media.mojom.CdmServiceRemote;
media.mojom.CdmServiceRequest = media.mojom.CdmServicePendingReceiver;


// Interface: SeatbeltExtensionTokenProvider
mojo.internal.Struct(
    media.mojom.SeatbeltExtensionTokenProvider_GetTokens_ParamsSpec, 'media.mojom.SeatbeltExtensionTokenProvider_GetTokens_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    media.mojom.SeatbeltExtensionTokenProvider_GetTokens_ResponseParamsSpec, 'media.mojom.SeatbeltExtensionTokenProvider_GetTokens_ResponseParams', [
      mojo.internal.StructField('tokens', 0, 0, mojo.internal.Array(sandbox.mac.mojom.SeatbeltExtensionTokenSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

media.mojom.SeatbeltExtensionTokenProviderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media.mojom.SeatbeltExtensionTokenProviderRemote = class {
  static get $interfaceName() {
    return 'media.mojom.SeatbeltExtensionTokenProvider';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media.mojom.SeatbeltExtensionTokenProviderPendingReceiver,
      handle);
    this.$ = new media.mojom.SeatbeltExtensionTokenProviderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

media.mojom.SeatbeltExtensionTokenProviderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getTokens() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      media.mojom.SeatbeltExtensionTokenProvider_GetTokens_ParamsSpec,
      media.mojom.SeatbeltExtensionTokenProvider_GetTokens_ResponseParamsSpec,
      [],
      false);
  }

};

media.mojom.SeatbeltExtensionTokenProvider.getRemote = function() {
  let remote = new media.mojom.SeatbeltExtensionTokenProviderRemote();
  remote.bindNewPipeAndPassReceiver();
  remote.proxy.endpoint_.bindInBrowser(
    'media.mojom.SeatbeltExtensionTokenProvider',
    'context');
  return remote.$;
};

media.mojom.SeatbeltExtensionTokenProviderPtr = media.mojom.SeatbeltExtensionTokenProviderRemote;
media.mojom.SeatbeltExtensionTokenProviderRequest = media.mojom.SeatbeltExtensionTokenProviderPendingReceiver;


// Interface: CdmServiceBroker
mojo.internal.Struct(
    media.mojom.CdmServiceBroker_GetService_ParamsSpec, 'media.mojom.CdmServiceBroker_GetService_Params', [
      mojo.internal.StructField('cdm_path', 0, 0, mojo_base.mojom.FilePathSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('token_provider', 8, 0, mojo.internal.InterfaceProxy(media.mojom.SeatbeltExtensionTokenProviderRemote), null, true, 0, undefined),
      mojo.internal.StructField('receiver', 16, 0, mojo.internal.InterfaceRequest(media.mojom.CdmServiceRemote), null, false, 0, undefined),
    ],
    [[0, 32]]);

media.mojom.CdmServiceBrokerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media.mojom.CdmServiceBrokerRemote = class {
  static get $interfaceName() {
    return 'media.mojom.CdmServiceBroker';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media.mojom.CdmServiceBrokerPendingReceiver,
      handle);
    this.$ = new media.mojom.CdmServiceBrokerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

media.mojom.CdmServiceBrokerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getService(cdm_path, token_provider, receiver) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      media.mojom.CdmServiceBroker_GetService_ParamsSpec,
      null,
      [cdm_path, token_provider, receiver],
      false);
  }

};

media.mojom.CdmServiceBroker.getRemote = function() {
  let remote = new media.mojom.CdmServiceBrokerRemote();
  remote.bindNewPipeAndPassReceiver();
  remote.proxy.endpoint_.bindInBrowser(
    'media.mojom.CdmServiceBroker',
    'context');
  return remote.$;
};

media.mojom.CdmServiceBrokerPtr = media.mojom.CdmServiceBrokerRemote;
media.mojom.CdmServiceBrokerRequest = media.mojom.CdmServiceBrokerPendingReceiver;

