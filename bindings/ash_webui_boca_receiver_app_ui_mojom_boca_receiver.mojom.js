// Auto-generated MojoJS binding
// Source: chromium_src/ash/webui/boca_receiver_app_ui/mojom/boca_receiver.mojom
// Module: ash.boca_receiver.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.boca_receiver = ash.boca_receiver || {};
ash.boca_receiver.mojom = ash.boca_receiver.mojom || {};


// Enum: ConnectionClosedReason
ash.boca_receiver.mojom.ConnectionClosedReason = {
  kInitiatorClosed: 0,
  kPresenterConnectionLost: 1,
  kError: 2,
  kTakeOver: 3,
};

// Struct: ReceiverInfo
ash.boca_receiver.mojom.ReceiverInfoSpec = {
  $: {
    structSpec: {
      name: 'ash.boca_receiver.mojom.ReceiverInfo',
      packedSize: 16,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: UserInfo
ash.boca_receiver.mojom.UserInfoSpec = {
  $: {
    structSpec: {
      name: 'ash.boca_receiver.mojom.UserInfo',
      packedSize: 16,
      fields: [
        { name: 'name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: DecodedAudioPacket
ash.boca_receiver.mojom.DecodedAudioPacketSpec = {
  $: {
    structSpec: {
      name: 'ash.boca_receiver.mojom.DecodedAudioPacket',
      packedSize: 24,
      fields: [
        { name: 'data', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'sample_rate', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'channels', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Interface: UntrustedPage
ash.boca_receiver.mojom.UntrustedPage = {};

ash.boca_receiver.mojom.UntrustedPagePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.boca_receiver.mojom.UntrustedPageRemote = class {
  static get $interfaceName() {
    return 'ash.boca_receiver.mojom.UntrustedPage';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.boca_receiver.mojom.UntrustedPagePendingReceiver,
      handle);
    this.$ = new ash.boca_receiver.mojom.UntrustedPageRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.boca_receiver.mojom.UntrustedPageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onInitReceiverInfo(receiver_info) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.boca_receiver.mojom.UntrustedPage_OnInitReceiverInfo_ParamsSpec,
      null,
      [receiver_info]);
  }

  onInitReceiverError() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.boca_receiver.mojom.UntrustedPage_OnInitReceiverError_ParamsSpec,
      null,
      []);
  }

  onFrameReceived(frame_data) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.boca_receiver.mojom.UntrustedPage_OnFrameReceived_ParamsSpec,
      null,
      [frame_data]);
  }

  onAudioPacket(audio_packet) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      ash.boca_receiver.mojom.UntrustedPage_OnAudioPacket_ParamsSpec,
      null,
      [audio_packet]);
  }

  onConnecting(initiator, presenter) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      ash.boca_receiver.mojom.UntrustedPage_OnConnecting_ParamsSpec,
      null,
      [initiator, presenter]);
  }

  onConnectionClosed(reason) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      ash.boca_receiver.mojom.UntrustedPage_OnConnectionClosed_ParamsSpec,
      null,
      [reason]);
  }

};

ash.boca_receiver.mojom.UntrustedPage.getRemote = function() {
  let remote = new ash.boca_receiver.mojom.UntrustedPageRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.boca_receiver.mojom.UntrustedPage',
    'context');
  return remote.$;
};

// ParamsSpec for OnInitReceiverInfo
ash.boca_receiver.mojom.UntrustedPage_OnInitReceiverInfo_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.boca_receiver.mojom.UntrustedPage.OnInitReceiverInfo_Params',
      packedSize: 16,
      fields: [
        { name: 'receiver_info', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnInitReceiverError
ash.boca_receiver.mojom.UntrustedPage_OnInitReceiverError_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.boca_receiver.mojom.UntrustedPage.OnInitReceiverError_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnFrameReceived
ash.boca_receiver.mojom.UntrustedPage_OnFrameReceived_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.boca_receiver.mojom.UntrustedPage.OnFrameReceived_Params',
      packedSize: 16,
      fields: [
        { name: 'frame_data', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnAudioPacket
ash.boca_receiver.mojom.UntrustedPage_OnAudioPacket_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.boca_receiver.mojom.UntrustedPage.OnAudioPacket_Params',
      packedSize: 16,
      fields: [
        { name: 'audio_packet', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnConnecting
ash.boca_receiver.mojom.UntrustedPage_OnConnecting_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.boca_receiver.mojom.UntrustedPage.OnConnecting_Params',
      packedSize: 24,
      fields: [
        { name: 'initiator', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'presenter', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnConnectionClosed
ash.boca_receiver.mojom.UntrustedPage_OnConnectionClosed_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.boca_receiver.mojom.UntrustedPage.OnConnectionClosed_Params',
      packedSize: 16,
      fields: [
        { name: 'reason', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
ash.boca_receiver.mojom.UntrustedPagePtr = ash.boca_receiver.mojom.UntrustedPageRemote;
ash.boca_receiver.mojom.UntrustedPageRequest = ash.boca_receiver.mojom.UntrustedPagePendingReceiver;


// Interface: UntrustedPageHandlerFactory
ash.boca_receiver.mojom.UntrustedPageHandlerFactory = {};

ash.boca_receiver.mojom.UntrustedPageHandlerFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.boca_receiver.mojom.UntrustedPageHandlerFactoryRemote = class {
  static get $interfaceName() {
    return 'ash.boca_receiver.mojom.UntrustedPageHandlerFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.boca_receiver.mojom.UntrustedPageHandlerFactoryPendingReceiver,
      handle);
    this.$ = new ash.boca_receiver.mojom.UntrustedPageHandlerFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.boca_receiver.mojom.UntrustedPageHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createUntrustedPageHandler(page) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.boca_receiver.mojom.UntrustedPageHandlerFactory_CreateUntrustedPageHandler_ParamsSpec,
      null,
      [page]);
  }

};

ash.boca_receiver.mojom.UntrustedPageHandlerFactory.getRemote = function() {
  let remote = new ash.boca_receiver.mojom.UntrustedPageHandlerFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.boca_receiver.mojom.UntrustedPageHandlerFactory',
    'context');
  return remote.$;
};

// ParamsSpec for CreateUntrustedPageHandler
ash.boca_receiver.mojom.UntrustedPageHandlerFactory_CreateUntrustedPageHandler_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.boca_receiver.mojom.UntrustedPageHandlerFactory.CreateUntrustedPageHandler_Params',
      packedSize: 16,
      fields: [
        { name: 'page', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
ash.boca_receiver.mojom.UntrustedPageHandlerFactoryPtr = ash.boca_receiver.mojom.UntrustedPageHandlerFactoryRemote;
ash.boca_receiver.mojom.UntrustedPageHandlerFactoryRequest = ash.boca_receiver.mojom.UntrustedPageHandlerFactoryPendingReceiver;

