// Auto-generated MojoJS binding
// Source: chromium_src/media/mojo/mojom/cdm_service.mojom
// Module: media.mojom

'use strict';

// Module namespace
var media = media || {};
media.mojom = media.mojom || {};


// Interface: CdmService
media.mojom.CdmService = {};

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
      [factory, frame_interfaces]);
  }

};

media.mojom.CdmService.getRemote = function() {
  let remote = new media.mojom.CdmServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.CdmService',
    'context');
  return remote.$;
};

// ParamsSpec for CreateCdmFactory
media.mojom.CdmService_CreateCdmFactory_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.CdmService.CreateCdmFactory_Params',
      packedSize: 24,
      fields: [
        { name: 'factory', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'frame_interfaces', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
media.mojom.CdmServicePtr = media.mojom.CdmServiceRemote;
media.mojom.CdmServiceRequest = media.mojom.CdmServicePendingReceiver;


// Interface: SeatbeltExtensionTokenProvider
media.mojom.SeatbeltExtensionTokenProvider = {};

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
      []);
  }

};

media.mojom.SeatbeltExtensionTokenProvider.getRemote = function() {
  let remote = new media.mojom.SeatbeltExtensionTokenProviderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.SeatbeltExtensionTokenProvider',
    'context');
  return remote.$;
};

// ParamsSpec for GetTokens
media.mojom.SeatbeltExtensionTokenProvider_GetTokens_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.SeatbeltExtensionTokenProvider.GetTokens_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

media.mojom.SeatbeltExtensionTokenProvider_GetTokens_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.SeatbeltExtensionTokenProvider.GetTokens_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'tokens', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
media.mojom.SeatbeltExtensionTokenProviderPtr = media.mojom.SeatbeltExtensionTokenProviderRemote;
media.mojom.SeatbeltExtensionTokenProviderRequest = media.mojom.SeatbeltExtensionTokenProviderPendingReceiver;


// Interface: CdmServiceBroker
media.mojom.CdmServiceBroker = {};

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
      [cdm_path, token_provider, receiver]);
  }

};

media.mojom.CdmServiceBroker.getRemote = function() {
  let remote = new media.mojom.CdmServiceBrokerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.CdmServiceBroker',
    'context');
  return remote.$;
};

// ParamsSpec for GetService
media.mojom.CdmServiceBroker_GetService_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.CdmServiceBroker.GetService_Params',
      packedSize: 32,
      fields: [
        { name: 'cdm_path', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'token_provider', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'receiver', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
media.mojom.CdmServiceBrokerPtr = media.mojom.CdmServiceBrokerRemote;
media.mojom.CdmServiceBrokerRequest = media.mojom.CdmServiceBrokerPendingReceiver;

