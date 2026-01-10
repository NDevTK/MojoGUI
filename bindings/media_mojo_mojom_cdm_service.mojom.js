// Auto-generated MojoJS binding
// Source: chromium_src/media/mojo/mojom/cdm_service.mojom
// Module: media.mojom

'use strict';

// Module namespace
var media = media || {};
media.mojom = media.mojom || {};


// Interface: CdmService
media.mojom.mojom.CdmService = {};

media.mojom.mojom.CdmServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media.mojom.mojom.CdmServiceRemote = class {
  static get $interfaceName() {
    return 'media.mojom.CdmService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media.mojom.mojom.CdmServicePendingReceiver,
      handle);
    this.$ = new media.mojom.mojom.CdmServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

media.mojom.mojom.CdmServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createCdmFactory(factory, frame_interfaces) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      media.mojom.mojom.CdmService_CreateCdmFactory_ParamsSpec,
      null,
      [factory, frame_interfaces]);
  }

};

media.mojom.mojom.CdmService.getRemote = function() {
  let remote = new media.mojom.mojom.CdmServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.CdmService',
    'context');
  return remote.$;
};

// ParamsSpec for CreateCdmFactory
media.mojom.mojom.CdmService_CreateCdmFactory_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.CdmService.CreateCdmFactory_Params',
      packedSize: 24,
      fields: [
        { name: 'factory', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(media.mojom.CdmFactoryRemote), nullable: false, minVersion: 0 },
        { name: 'frame_interfaces', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(media.mojom.FrameInterfaceFactoryRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
media.mojom.mojom.CdmServicePtr = media.mojom.mojom.CdmServiceRemote;
media.mojom.mojom.CdmServiceRequest = media.mojom.mojom.CdmServicePendingReceiver;


// Interface: SeatbeltExtensionTokenProvider
media.mojom.mojom.SeatbeltExtensionTokenProvider = {};

media.mojom.mojom.SeatbeltExtensionTokenProviderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media.mojom.mojom.SeatbeltExtensionTokenProviderRemote = class {
  static get $interfaceName() {
    return 'media.mojom.SeatbeltExtensionTokenProvider';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media.mojom.mojom.SeatbeltExtensionTokenProviderPendingReceiver,
      handle);
    this.$ = new media.mojom.mojom.SeatbeltExtensionTokenProviderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

media.mojom.mojom.SeatbeltExtensionTokenProviderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getTokens() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      media.mojom.mojom.SeatbeltExtensionTokenProvider_GetTokens_ParamsSpec,
      media.mojom.mojom.SeatbeltExtensionTokenProvider_GetTokens_ResponseParamsSpec,
      []);
  }

};

media.mojom.mojom.SeatbeltExtensionTokenProvider.getRemote = function() {
  let remote = new media.mojom.mojom.SeatbeltExtensionTokenProviderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.SeatbeltExtensionTokenProvider',
    'context');
  return remote.$;
};

// ParamsSpec for GetTokens
media.mojom.mojom.SeatbeltExtensionTokenProvider_GetTokens_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.SeatbeltExtensionTokenProvider.GetTokens_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

media.mojom.mojom.SeatbeltExtensionTokenProvider_GetTokens_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.SeatbeltExtensionTokenProvider.GetTokens_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'tokens', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(sandbox.mac.mojom.SeatbeltExtensionTokenSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
media.mojom.mojom.SeatbeltExtensionTokenProviderPtr = media.mojom.mojom.SeatbeltExtensionTokenProviderRemote;
media.mojom.mojom.SeatbeltExtensionTokenProviderRequest = media.mojom.mojom.SeatbeltExtensionTokenProviderPendingReceiver;


// Interface: CdmServiceBroker
media.mojom.mojom.CdmServiceBroker = {};

media.mojom.mojom.CdmServiceBrokerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media.mojom.mojom.CdmServiceBrokerRemote = class {
  static get $interfaceName() {
    return 'media.mojom.CdmServiceBroker';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media.mojom.mojom.CdmServiceBrokerPendingReceiver,
      handle);
    this.$ = new media.mojom.mojom.CdmServiceBrokerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

media.mojom.mojom.CdmServiceBrokerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getService(cdm_path, token_provider, receiver) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      media.mojom.mojom.CdmServiceBroker_GetService_ParamsSpec,
      null,
      [cdm_path, token_provider, receiver]);
  }

};

media.mojom.mojom.CdmServiceBroker.getRemote = function() {
  let remote = new media.mojom.mojom.CdmServiceBrokerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.CdmServiceBroker',
    'context');
  return remote.$;
};

// ParamsSpec for GetService
media.mojom.mojom.CdmServiceBroker_GetService_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.CdmServiceBroker.GetService_Params',
      packedSize: 32,
      fields: [
        { name: 'cdm_path', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.FilePathSpec, nullable: false, minVersion: 0 },
        { name: 'token_provider', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(media.mojom.SeatbeltExtensionTokenProviderRemote), nullable: true, minVersion: 0 },
        { name: 'receiver', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(media.mojom.CdmServiceRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Legacy compatibility
media.mojom.mojom.CdmServiceBrokerPtr = media.mojom.mojom.CdmServiceBrokerRemote;
media.mojom.mojom.CdmServiceBrokerRequest = media.mojom.mojom.CdmServiceBrokerPendingReceiver;

