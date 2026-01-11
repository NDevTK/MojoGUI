// Auto-generated MojoJS binding
// Source: chromium_src/ash/webui/boca_receiver_app_ui/mojom/boca_receiver.mojom
// Module: ash.boca_receiver.mojom

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
      mojo.internal.StructField('data', 0, 0, mojo.internal.Array(mojo.internal.Int16, false), null, false, 0, undefined),
      mojo.internal.StructField('sample_rate', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('channels', 12, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: UntrustedPage
mojo.internal.Struct(
    ash.boca_receiver.mojom.UntrustedPage_OnInitReceiverInfo_ParamsSpec, 'ash.boca_receiver.mojom.UntrustedPage_OnInitReceiverInfo_Params', [
      mojo.internal.StructField('receiver_info', 0, 0, ash.boca_receiver.mojom.ReceiverInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.boca_receiver.mojom.UntrustedPage_OnInitReceiverError_ParamsSpec, 'ash.boca_receiver.mojom.UntrustedPage_OnInitReceiverError_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.boca_receiver.mojom.UntrustedPage_OnFrameReceived_ParamsSpec, 'ash.boca_receiver.mojom.UntrustedPage_OnFrameReceived_Params', [
      mojo.internal.StructField('frame_data', 0, 0, skia.mojom.BitmapN32Spec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.boca_receiver.mojom.UntrustedPage_OnAudioPacket_ParamsSpec, 'ash.boca_receiver.mojom.UntrustedPage_OnAudioPacket_Params', [
      mojo.internal.StructField('audio_packet', 0, 0, ash.boca_receiver.mojom.DecodedAudioPacketSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.boca_receiver.mojom.UntrustedPage_OnConnecting_ParamsSpec, 'ash.boca_receiver.mojom.UntrustedPage_OnConnecting_Params', [
      mojo.internal.StructField('initiator', 0, 0, ash.boca_receiver.mojom.UserInfoSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('presenter', 8, 0, ash.boca_receiver.mojom.UserInfoSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    ash.boca_receiver.mojom.UntrustedPage_OnConnectionClosed_ParamsSpec, 'ash.boca_receiver.mojom.UntrustedPage_OnConnectionClosed_Params', [
      mojo.internal.StructField('reason', 0, 0, ash.boca_receiver.mojom.ConnectionClosedReasonSpec.$, null, false, 0, undefined),
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
  onInitReceiverInfo(receiver_info) {
    return this.$.onInitReceiverInfo(receiver_info);
  }
  onInitReceiverError() {
    return this.$.onInitReceiverError();
  }
  onFrameReceived(frame_data) {
    return this.$.onFrameReceived(frame_data);
  }
  onAudioPacket(audio_packet) {
    return this.$.onAudioPacket(audio_packet);
  }
  onConnecting(initiator, presenter) {
    return this.$.onConnecting(initiator, presenter);
  }
  onConnectionClosed(reason) {
    return this.$.onConnectionClosed(reason);
  }
};

ash.boca_receiver.mojom.UntrustedPageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('UntrustedPage', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  onInitReceiverInfo(receiver_info) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      ash.boca_receiver.mojom.UntrustedPage_OnInitReceiverInfo_ParamsSpec,
      null,
      [receiver_info],
      false);
  }

  onInitReceiverError() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      ash.boca_receiver.mojom.UntrustedPage_OnInitReceiverError_ParamsSpec,
      null,
      [],
      false);
  }

  onFrameReceived(frame_data) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      ash.boca_receiver.mojom.UntrustedPage_OnFrameReceived_ParamsSpec,
      null,
      [frame_data],
      false);
  }

  onAudioPacket(audio_packet) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      ash.boca_receiver.mojom.UntrustedPage_OnAudioPacket_ParamsSpec,
      null,
      [audio_packet],
      false);
  }

  onConnecting(initiator, presenter) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      ash.boca_receiver.mojom.UntrustedPage_OnConnecting_ParamsSpec,
      null,
      [initiator, presenter],
      false);
  }

  onConnectionClosed(reason) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      ash.boca_receiver.mojom.UntrustedPage_OnConnectionClosed_ParamsSpec,
      null,
      [reason],
      false);
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

ash.boca_receiver.mojom.UntrustedPageReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('UntrustedPage', [
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
             decoder.decodeStructInline(ash.boca_receiver.mojom.UntrustedPage_OnInitReceiverInfo_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.boca_receiver.mojom.UntrustedPage_OnInitReceiverError_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.boca_receiver.mojom.UntrustedPage_OnFrameReceived_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.boca_receiver.mojom.UntrustedPage_OnAudioPacket_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.boca_receiver.mojom.UntrustedPage_OnConnecting_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.boca_receiver.mojom.UntrustedPage_OnConnectionClosed_ParamsSpec);
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.boca_receiver.mojom.UntrustedPage_OnInitReceiverInfo_ParamsSpec.$.structSpec);
          const result = this.impl.onInitReceiverInfo(params.receiver_info);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.boca_receiver.mojom.UntrustedPage_OnInitReceiverError_ParamsSpec.$.structSpec);
          const result = this.impl.onInitReceiverError();
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.boca_receiver.mojom.UntrustedPage_OnFrameReceived_ParamsSpec.$.structSpec);
          const result = this.impl.onFrameReceived(params.frame_data);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.boca_receiver.mojom.UntrustedPage_OnAudioPacket_ParamsSpec.$.structSpec);
          const result = this.impl.onAudioPacket(params.audio_packet);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.boca_receiver.mojom.UntrustedPage_OnConnecting_ParamsSpec.$.structSpec);
          const result = this.impl.onConnecting(params.initiator, params.presenter);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.boca_receiver.mojom.UntrustedPage_OnConnectionClosed_ParamsSpec.$.structSpec);
          const result = this.impl.onConnectionClosed(params.reason);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

ash.boca_receiver.mojom.UntrustedPageReceiver = ash.boca_receiver.mojom.UntrustedPageReceiver;

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
  createUntrustedPageHandler(page) {
    return this.$.createUntrustedPageHandler(page);
  }
};

ash.boca_receiver.mojom.UntrustedPageHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('UntrustedPageHandlerFactory', [
      { explicit: null },
    ]);
  }

  createUntrustedPageHandler(page) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      ash.boca_receiver.mojom.UntrustedPageHandlerFactory_CreateUntrustedPageHandler_ParamsSpec,
      null,
      [page],
      false);
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

ash.boca_receiver.mojom.UntrustedPageHandlerFactoryReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('UntrustedPageHandlerFactory', [
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
             decoder.decodeStructInline(ash.boca_receiver.mojom.UntrustedPageHandlerFactory_CreateUntrustedPageHandler_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.boca_receiver.mojom.UntrustedPageHandlerFactory_CreateUntrustedPageHandler_ParamsSpec.$.structSpec);
          const result = this.impl.createUntrustedPageHandler(params.page);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

ash.boca_receiver.mojom.UntrustedPageHandlerFactoryReceiver = ash.boca_receiver.mojom.UntrustedPageHandlerFactoryReceiver;

ash.boca_receiver.mojom.UntrustedPageHandlerFactoryPtr = ash.boca_receiver.mojom.UntrustedPageHandlerFactoryRemote;
ash.boca_receiver.mojom.UntrustedPageHandlerFactoryRequest = ash.boca_receiver.mojom.UntrustedPageHandlerFactoryPendingReceiver;

