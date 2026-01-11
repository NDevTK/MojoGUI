// Auto-generated MojoJS binding
// Source: chromium_src/services/media_session/public/mojom/media_session_service.mojom
// Module: media_session.mojom

// Module namespace
var media_session = media_session || {};
media_session.mojom = media_session.mojom || {};

media_session.mojom.MediaSessionService = {};
media_session.mojom.MediaSessionService.$interfaceName = 'media_session.mojom.MediaSessionService';
media_session.mojom.MediaSessionService_BindAudioFocusManager_ParamsSpec = { $: {} };
media_session.mojom.MediaSessionService_BindAudioFocusManagerDebug_ParamsSpec = { $: {} };
media_session.mojom.MediaSessionService_BindMediaControllerManager_ParamsSpec = { $: {} };
media_session.mojom.MediaSessionService_Bind_ParamsSpec = { $: {} };

// Interface: MediaSessionService
mojo.internal.Struct(
    media_session.mojom.MediaSessionService_BindAudioFocusManager_ParamsSpec, 'media_session.mojom.MediaSessionService_BindAudioFocusManager_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(media_session.mojom.AudioFocusManagerRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media_session.mojom.MediaSessionService_BindAudioFocusManagerDebug_ParamsSpec, 'media_session.mojom.MediaSessionService_BindAudioFocusManagerDebug_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(media_session.mojom.AudioFocusManagerDebugRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media_session.mojom.MediaSessionService_BindMediaControllerManager_ParamsSpec, 'media_session.mojom.MediaSessionService_BindMediaControllerManager_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(media_session.mojom.MediaControllerManagerRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media_session.mojom.MediaSessionService_Bind_ParamsSpec, 'media_session.mojom.MediaSessionService_Bind_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(media_session.mojom.MediaSessionServiceRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

media_session.mojom.MediaSessionServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media_session.mojom.MediaSessionServiceRemote = class {
  static get $interfaceName() {
    return 'media_session.mojom.MediaSessionService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media_session.mojom.MediaSessionServicePendingReceiver,
      handle);
    this.$ = new media_session.mojom.MediaSessionServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  bindAudioFocusManager(receiver) {
    return this.$.bindAudioFocusManager(receiver);
  }
  bindAudioFocusManagerDebug(receiver) {
    return this.$.bindAudioFocusManagerDebug(receiver);
  }
  bindMediaControllerManager(receiver) {
    return this.$.bindMediaControllerManager(receiver);
  }
  bind(receiver) {
    return this.$.bind(receiver);
  }
};

media_session.mojom.MediaSessionServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('MediaSessionService', [
      { explicit: 0 },
      { explicit: 1 },
      { explicit: 2 },
      { explicit: 3 },
    ]);
  }

  bindAudioFocusManager(receiver) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      media_session.mojom.MediaSessionService_BindAudioFocusManager_ParamsSpec,
      null,
      [receiver],
      false);
  }

  bindAudioFocusManagerDebug(receiver) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      media_session.mojom.MediaSessionService_BindAudioFocusManagerDebug_ParamsSpec,
      null,
      [receiver],
      false);
  }

  bindMediaControllerManager(receiver) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      media_session.mojom.MediaSessionService_BindMediaControllerManager_ParamsSpec,
      null,
      [receiver],
      false);
  }

  bind(receiver) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      media_session.mojom.MediaSessionService_Bind_ParamsSpec,
      null,
      [receiver],
      false);
  }

};

media_session.mojom.MediaSessionService.getRemote = function() {
  let remote = new media_session.mojom.MediaSessionServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media_session.mojom.MediaSessionService',
    'context');
  return remote.$;
};

media_session.mojom.MediaSessionServiceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('MediaSessionService', [
      { explicit: 0 },
      { explicit: 1 },
      { explicit: 2 },
      { explicit: 3 },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.router_.onConnectionError.addListener(() => {
       console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
    });
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
             decoder.decodeStructInline(media_session.mojom.MediaSessionService_BindAudioFocusManager_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media_session.mojom.MediaSessionService_BindAudioFocusManagerDebug_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media_session.mojom.MediaSessionService_BindMediaControllerManager_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media_session.mojom.MediaSessionService_Bind_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media_session.mojom.MediaSessionService_BindAudioFocusManager_ParamsSpec.$.structSpec);
          const result = this.impl.bindAudioFocusManager(params.receiver);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media_session.mojom.MediaSessionService_BindAudioFocusManagerDebug_ParamsSpec.$.structSpec);
          const result = this.impl.bindAudioFocusManagerDebug(params.receiver);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media_session.mojom.MediaSessionService_BindMediaControllerManager_ParamsSpec.$.structSpec);
          const result = this.impl.bindMediaControllerManager(params.receiver);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media_session.mojom.MediaSessionService_Bind_ParamsSpec.$.structSpec);
          const result = this.impl.bind(params.receiver);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

media_session.mojom.MediaSessionServiceReceiver = media_session.mojom.MediaSessionServiceReceiver;

media_session.mojom.MediaSessionServicePtr = media_session.mojom.MediaSessionServiceRemote;
media_session.mojom.MediaSessionServiceRequest = media_session.mojom.MediaSessionServicePendingReceiver;

