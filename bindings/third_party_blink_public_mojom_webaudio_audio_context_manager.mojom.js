// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/webaudio/audio_context_manager.mojom
// Module: blink.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};

blink.mojom.AudioContextManager = {};
blink.mojom.AudioContextManager.$interfaceName = 'blink.mojom.AudioContextManager';
blink.mojom.AudioContextManager_AudioContextAudiblePlaybackStarted_ParamsSpec = { $: {} };
blink.mojom.AudioContextManager_AudioContextAudiblePlaybackStopped_ParamsSpec = { $: {} };
blink.mojom.AudioContextManager_AudioContextCreated_ParamsSpec = { $: {} };
blink.mojom.AudioContextManager_AudioContextClosed_ParamsSpec = { $: {} };

// Interface: AudioContextManager
mojo.internal.Struct(
    blink.mojom.AudioContextManager_AudioContextAudiblePlaybackStarted_ParamsSpec, 'blink.mojom.AudioContextManager_AudioContextAudiblePlaybackStarted_Params', [
      mojo.internal.StructField('id', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.AudioContextManager_AudioContextAudiblePlaybackStopped_ParamsSpec, 'blink.mojom.AudioContextManager_AudioContextAudiblePlaybackStopped_Params', [
      mojo.internal.StructField('id', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.AudioContextManager_AudioContextCreated_ParamsSpec, 'blink.mojom.AudioContextManager_AudioContextCreated_Params', [
      mojo.internal.StructField('id', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.AudioContextManager_AudioContextClosed_ParamsSpec, 'blink.mojom.AudioContextManager_AudioContextClosed_Params', [
      mojo.internal.StructField('id', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

blink.mojom.AudioContextManagerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.AudioContextManagerRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.AudioContextManager';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.AudioContextManagerPendingReceiver,
      handle);
    this.$ = new blink.mojom.AudioContextManagerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  audioContextAudiblePlaybackStarted(id) {
    return this.$.audioContextAudiblePlaybackStarted(id);
  }
  audioContextAudiblePlaybackStopped(id) {
    return this.$.audioContextAudiblePlaybackStopped(id);
  }
  audioContextCreated(id) {
    return this.$.audioContextCreated(id);
  }
  audioContextClosed(id) {
    return this.$.audioContextClosed(id);
  }
};

blink.mojom.AudioContextManagerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('AudioContextManager', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  audioContextAudiblePlaybackStarted(id) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      blink.mojom.AudioContextManager_AudioContextAudiblePlaybackStarted_ParamsSpec,
      null,
      [id],
      false);
  }

  audioContextAudiblePlaybackStopped(id) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      blink.mojom.AudioContextManager_AudioContextAudiblePlaybackStopped_ParamsSpec,
      null,
      [id],
      false);
  }

  audioContextCreated(id) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      blink.mojom.AudioContextManager_AudioContextCreated_ParamsSpec,
      null,
      [id],
      false);
  }

  audioContextClosed(id) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      blink.mojom.AudioContextManager_AudioContextClosed_ParamsSpec,
      null,
      [id],
      false);
  }

};

blink.mojom.AudioContextManager.getRemote = function() {
  let remote = new blink.mojom.AudioContextManagerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.AudioContextManager',
    'context');
  return remote.$;
};

blink.mojom.AudioContextManagerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('AudioContextManager', [
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
             decoder.decodeStructInline(blink.mojom.AudioContextManager_AudioContextAudiblePlaybackStarted_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.AudioContextManager_AudioContextAudiblePlaybackStopped_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.AudioContextManager_AudioContextCreated_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.AudioContextManager_AudioContextClosed_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.AudioContextManager_AudioContextAudiblePlaybackStarted_ParamsSpec.$.structSpec);
          const result = this.impl.audioContextAudiblePlaybackStarted(params.id);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.AudioContextManager_AudioContextAudiblePlaybackStopped_ParamsSpec.$.structSpec);
          const result = this.impl.audioContextAudiblePlaybackStopped(params.id);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.AudioContextManager_AudioContextCreated_ParamsSpec.$.structSpec);
          const result = this.impl.audioContextCreated(params.id);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.AudioContextManager_AudioContextClosed_ParamsSpec.$.structSpec);
          const result = this.impl.audioContextClosed(params.id);
          break;
        }
      }
      } catch (err) {}
    });
  }
};

blink.mojom.AudioContextManagerReceiver = blink.mojom.AudioContextManagerReceiver;

blink.mojom.AudioContextManagerPtr = blink.mojom.AudioContextManagerRemote;
blink.mojom.AudioContextManagerRequest = blink.mojom.AudioContextManagerPendingReceiver;

