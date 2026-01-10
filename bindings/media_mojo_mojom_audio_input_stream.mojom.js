// Auto-generated MojoJS binding
// Source: chromium_src/media/mojo/mojom/audio_input_stream.mojom
// Module: media.mojom

'use strict';

// Module namespace
var media = media || {};
media.mojom = media.mojom || {};

media.mojom.DisconnectReasonSpec = { $: mojo.internal.Enum() };
media.mojom.AudioInputStream = {};
media.mojom.AudioInputStream.$interfaceName = 'media.mojom.AudioInputStream';
media.mojom.AudioInputStream_Record_ParamsSpec = { $: {} };
media.mojom.AudioInputStream_SetVolume_ParamsSpec = { $: {} };
media.mojom.AudioInputStreamClient = {};
media.mojom.AudioInputStreamClient.$interfaceName = 'media.mojom.AudioInputStreamClient';
media.mojom.AudioInputStreamClient_OnError_ParamsSpec = { $: {} };
media.mojom.AudioInputStreamClient_OnMutedStateChanged_ParamsSpec = { $: {} };
media.mojom.AudioInputStreamObserver = {};
media.mojom.AudioInputStreamObserver.$interfaceName = 'media.mojom.AudioInputStreamObserver';
media.mojom.AudioInputStreamObserver_DidStartRecording_ParamsSpec = { $: {} };

// Enum: DisconnectReason
media.mojom.DisconnectReason = {
  kDefault: 0,
  kPlatformError: 1,
  kTerminatedByClient: 2,
  kStreamCreationFailed: 3,
  kDocumentDestroyed: 4,
  kSystemPermissions: 5,
  kDeviceInUse: 6,
};

// Interface: AudioInputStream
mojo.internal.Struct(
    media.mojom.AudioInputStream_Record_ParamsSpec, 'media.mojom.AudioInputStream_Record_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    media.mojom.AudioInputStream_SetVolume_ParamsSpec, 'media.mojom.AudioInputStream_SetVolume_Params', [
      mojo.internal.StructField('volume', 0, 0, mojo.internal.Double, 0, false, 0, undefined),
    ],
    [[0, 16]]);

media.mojom.AudioInputStreamPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media.mojom.AudioInputStreamRemote = class {
  static get $interfaceName() {
    return 'media.mojom.AudioInputStream';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media.mojom.AudioInputStreamPendingReceiver,
      handle);
    this.$ = new media.mojom.AudioInputStreamRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

media.mojom.AudioInputStreamRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  record() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      media.mojom.AudioInputStream_Record_ParamsSpec,
      null,
      [],
      false);
  }

  setVolume(volume) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      media.mojom.AudioInputStream_SetVolume_ParamsSpec,
      null,
      [volume],
      false);
  }

};

media.mojom.AudioInputStream.getRemote = function() {
  let remote = new media.mojom.AudioInputStreamRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.AudioInputStream',
    'context');
  return remote.$;
};

media.mojom.AudioInputStreamReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
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
        message = {
          header: args[1],
          payload: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: Record
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(media.mojom.AudioInputStream_Record_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Record (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 1: SetVolume
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(media.mojom.AudioInputStream_SetVolume_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetVolume (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) { /* Ignore mismatch */ }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(media.mojom.AudioInputStream_Record_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.record');
          const result = this.impl.record();
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(media.mojom.AudioInputStream_SetVolume_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setVolume');
          const result = this.impl.setVolume(params.volume);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

media.mojom.AudioInputStreamReceiver = media.mojom.AudioInputStreamReceiver;

media.mojom.AudioInputStreamPtr = media.mojom.AudioInputStreamRemote;
media.mojom.AudioInputStreamRequest = media.mojom.AudioInputStreamPendingReceiver;


// Interface: AudioInputStreamClient
mojo.internal.Struct(
    media.mojom.AudioInputStreamClient_OnError_ParamsSpec, 'media.mojom.AudioInputStreamClient_OnError_Params', [
      mojo.internal.StructField('code', 0, 0, media.mojom.InputStreamErrorCodeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media.mojom.AudioInputStreamClient_OnMutedStateChanged_ParamsSpec, 'media.mojom.AudioInputStreamClient_OnMutedStateChanged_Params', [
      mojo.internal.StructField('is_muted', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

media.mojom.AudioInputStreamClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media.mojom.AudioInputStreamClientRemote = class {
  static get $interfaceName() {
    return 'media.mojom.AudioInputStreamClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media.mojom.AudioInputStreamClientPendingReceiver,
      handle);
    this.$ = new media.mojom.AudioInputStreamClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

media.mojom.AudioInputStreamClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onError(code) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      media.mojom.AudioInputStreamClient_OnError_ParamsSpec,
      null,
      [code],
      false);
  }

  onMutedStateChanged(is_muted) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      media.mojom.AudioInputStreamClient_OnMutedStateChanged_ParamsSpec,
      null,
      [is_muted],
      false);
  }

};

media.mojom.AudioInputStreamClient.getRemote = function() {
  let remote = new media.mojom.AudioInputStreamClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.AudioInputStreamClient',
    'context');
  return remote.$;
};

media.mojom.AudioInputStreamClientReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
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
        message = {
          header: args[1],
          payload: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: OnError
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(media.mojom.AudioInputStreamClient_OnError_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnError (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 1: OnMutedStateChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(media.mojom.AudioInputStreamClient_OnMutedStateChanged_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnMutedStateChanged (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) { /* Ignore mismatch */ }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(media.mojom.AudioInputStreamClient_OnError_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onError');
          const result = this.impl.onError(params.code);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(media.mojom.AudioInputStreamClient_OnMutedStateChanged_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onMutedStateChanged');
          const result = this.impl.onMutedStateChanged(params.is_muted);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

media.mojom.AudioInputStreamClientReceiver = media.mojom.AudioInputStreamClientReceiver;

media.mojom.AudioInputStreamClientPtr = media.mojom.AudioInputStreamClientRemote;
media.mojom.AudioInputStreamClientRequest = media.mojom.AudioInputStreamClientPendingReceiver;


// Interface: AudioInputStreamObserver
mojo.internal.Struct(
    media.mojom.AudioInputStreamObserver_DidStartRecording_ParamsSpec, 'media.mojom.AudioInputStreamObserver_DidStartRecording_Params', [
    ],
    [[0, 8]]);

media.mojom.AudioInputStreamObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media.mojom.AudioInputStreamObserverRemote = class {
  static get $interfaceName() {
    return 'media.mojom.AudioInputStreamObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media.mojom.AudioInputStreamObserverPendingReceiver,
      handle);
    this.$ = new media.mojom.AudioInputStreamObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

media.mojom.AudioInputStreamObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  didStartRecording() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      media.mojom.AudioInputStreamObserver_DidStartRecording_ParamsSpec,
      null,
      [],
      false);
  }

};

media.mojom.AudioInputStreamObserver.getRemote = function() {
  let remote = new media.mojom.AudioInputStreamObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.AudioInputStreamObserver',
    'context');
  return remote.$;
};

media.mojom.AudioInputStreamObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
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
        message = {
          header: args[1],
          payload: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: DidStartRecording
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(media.mojom.AudioInputStreamObserver_DidStartRecording_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DidStartRecording (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) { /* Ignore mismatch */ }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(media.mojom.AudioInputStreamObserver_DidStartRecording_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.didStartRecording');
          const result = this.impl.didStartRecording();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

media.mojom.AudioInputStreamObserverReceiver = media.mojom.AudioInputStreamObserverReceiver;

media.mojom.AudioInputStreamObserverPtr = media.mojom.AudioInputStreamObserverRemote;
media.mojom.AudioInputStreamObserverRequest = media.mojom.AudioInputStreamObserverPendingReceiver;

