// Auto-generated MojoJS binding
// Source: chromium_src/ash/webui/boca_receiver_app_ui/mojom/boca_receiver.mojom
// Module: ash.boca_receiver.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.boca_receiver = ash.boca_receiver || {};
ash.boca_receiver.mojom = ash.boca_receiver.mojom || {};
var skia = skia || {};

ash.boca_receiver.mojom.ConnectionClosedReasonSpec = { $: mojo.internal.Enum() };
ash.boca_receiver.mojom.ReceiverInfoSpec = { $: {} };
ash.boca_receiver.mojom.UserInfoSpec = { $: {} };
ash.boca_receiver.mojom.DecodedAudioPacketSpec = { $: {} };
ash.boca_receiver.mojom.UntrustedPage = {};
ash.boca_receiver.mojom.UntrustedPage.$interfaceName = 'ash.boca_receiver.mojom.UntrustedPage';
ash.boca_receiver.mojom.UntrustedPage_OnInitReceiverInfo_ParamsSpec = { $: {} };
ash.boca_receiver.mojom.UntrustedPage_OnInitReceiverError_ParamsSpec = { $: {} };
ash.boca_receiver.mojom.UntrustedPage_OnFrameReceived_ParamsSpec = { $: {} };
ash.boca_receiver.mojom.UntrustedPage_OnAudioPacket_ParamsSpec = { $: {} };
ash.boca_receiver.mojom.UntrustedPage_OnConnecting_ParamsSpec = { $: {} };
ash.boca_receiver.mojom.UntrustedPage_OnConnectionClosed_ParamsSpec = { $: {} };
ash.boca_receiver.mojom.UntrustedPageHandlerFactory = {};
ash.boca_receiver.mojom.UntrustedPageHandlerFactory.$interfaceName = 'ash.boca_receiver.mojom.UntrustedPageHandlerFactory';
ash.boca_receiver.mojom.UntrustedPageHandlerFactory_CreateUntrustedPageHandler_ParamsSpec = { $: {} };

// Enum: ConnectionClosedReason
ash.boca_receiver.mojom.ConnectionClosedReason = {
  kInitiatorClosed: 0,
  kPresenterConnectionLost: 1,
  kError: 2,
  kTakeOver: 3,
};

// Struct: ReceiverInfo
mojo.internal.Struct(
    ash.boca_receiver.mojom.ReceiverInfoSpec, 'ash.boca_receiver.mojom.ReceiverInfo', [
      mojo.internal.StructField('id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: UserInfo
mojo.internal.Struct(
    ash.boca_receiver.mojom.UserInfoSpec, 'ash.boca_receiver.mojom.UserInfo', [
      mojo.internal.StructField('name', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: DecodedAudioPacket
mojo.internal.Struct(
    ash.boca_receiver.mojom.DecodedAudioPacketSpec, 'ash.boca_receiver.mojom.DecodedAudioPacket', [
      mojo.internal.StructField('sample_rate', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('channels', 4, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('data', 8, 0, mojo.internal.Array(mojo.internal.Int16, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: UntrustedPage
mojo.internal.Struct(
    ash.boca_receiver.mojom.UntrustedPage_OnInitReceiverInfo_ParamsSpec, 'ash.boca_receiver.mojom.UntrustedPage_OnInitReceiverInfo_Params', [
      mojo.internal.StructField('receiver_info', 0, 0, ash.boca_receiver.mojom.ReceiverInfoSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.boca_receiver.mojom.UntrustedPage_OnInitReceiverError_ParamsSpec, 'ash.boca_receiver.mojom.UntrustedPage_OnInitReceiverError_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.boca_receiver.mojom.UntrustedPage_OnFrameReceived_ParamsSpec, 'ash.boca_receiver.mojom.UntrustedPage_OnFrameReceived_Params', [
      mojo.internal.StructField('frame_data', 0, 0, skia.mojom.BitmapN32Spec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.boca_receiver.mojom.UntrustedPage_OnAudioPacket_ParamsSpec, 'ash.boca_receiver.mojom.UntrustedPage_OnAudioPacket_Params', [
      mojo.internal.StructField('audio_packet', 0, 0, ash.boca_receiver.mojom.DecodedAudioPacketSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.boca_receiver.mojom.UntrustedPage_OnConnecting_ParamsSpec, 'ash.boca_receiver.mojom.UntrustedPage_OnConnecting_Params', [
      mojo.internal.StructField('initiator', 0, 0, ash.boca_receiver.mojom.UserInfoSpec, null, false, 0, undefined),
      mojo.internal.StructField('presenter', 8, 0, ash.boca_receiver.mojom.UserInfoSpec, null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    ash.boca_receiver.mojom.UntrustedPage_OnConnectionClosed_ParamsSpec, 'ash.boca_receiver.mojom.UntrustedPage_OnConnectionClosed_Params', [
      mojo.internal.StructField('reason', 0, 0, ash.boca_receiver.mojom.ConnectionClosedReasonSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

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

ash.boca_receiver.mojom.UntrustedPagePtr = ash.boca_receiver.mojom.UntrustedPageRemote;
ash.boca_receiver.mojom.UntrustedPageRequest = ash.boca_receiver.mojom.UntrustedPagePendingReceiver;


// Interface: UntrustedPageHandlerFactory
mojo.internal.Struct(
    ash.boca_receiver.mojom.UntrustedPageHandlerFactory_CreateUntrustedPageHandler_ParamsSpec, 'ash.boca_receiver.mojom.UntrustedPageHandlerFactory_CreateUntrustedPageHandler_Params', [
      mojo.internal.StructField('page', 0, 0, mojo.internal.InterfaceProxy(ash.boca_receiver.mojom.UntrustedPageRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

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

ash.boca_receiver.mojom.UntrustedPageHandlerFactoryPtr = ash.boca_receiver.mojom.UntrustedPageHandlerFactoryRemote;
ash.boca_receiver.mojom.UntrustedPageHandlerFactoryRequest = ash.boca_receiver.mojom.UntrustedPageHandlerFactoryPendingReceiver;

