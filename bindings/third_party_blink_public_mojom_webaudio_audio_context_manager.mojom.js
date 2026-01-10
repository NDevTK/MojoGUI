// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/webaudio/audio_context_manager.mojom
// Module: blink.mojom

'use strict';

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
};

blink.mojom.AudioContextManagerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  audioContextAudiblePlaybackStarted(id) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.AudioContextManager_AudioContextAudiblePlaybackStarted_ParamsSpec,
      null,
      [id],
      false);
  }

  audioContextAudiblePlaybackStopped(id) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.AudioContextManager_AudioContextAudiblePlaybackStopped_ParamsSpec,
      null,
      [id],
      false);
  }

  audioContextCreated(id) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.AudioContextManager_AudioContextCreated_ParamsSpec,
      null,
      [id],
      false);
  }

  audioContextClosed(id) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
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
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
    this.ordinalMap.set(3, 3); // Default ordinal 3 -> Index 3
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) dispatchId = header.ordinal; // Fallback to raw ordinal
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.AudioContextManager_AudioContextAudiblePlaybackStarted_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.audioContextAudiblePlaybackStarted');
          const result = this.impl.audioContextAudiblePlaybackStarted(params.id);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.AudioContextManager_AudioContextAudiblePlaybackStopped_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.audioContextAudiblePlaybackStopped');
          const result = this.impl.audioContextAudiblePlaybackStopped(params.id);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.AudioContextManager_AudioContextCreated_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.audioContextCreated');
          const result = this.impl.audioContextCreated(params.id);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.AudioContextManager_AudioContextClosed_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.audioContextClosed');
          const result = this.impl.audioContextClosed(params.id);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

blink.mojom.AudioContextManagerReceiver = blink.mojom.AudioContextManagerReceiver;

blink.mojom.AudioContextManagerPtr = blink.mojom.AudioContextManagerRemote;
blink.mojom.AudioContextManagerRequest = blink.mojom.AudioContextManagerPendingReceiver;

