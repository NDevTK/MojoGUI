// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/media_session.mojom
// Module: arc.mojom

'use strict';

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};
var media_session = media_session || {};

arc.mojom.MediaSessionInstance = {};
arc.mojom.MediaSessionInstance.$interfaceName = 'arc.mojom.MediaSessionInstance';
arc.mojom.MediaSessionInstance_EnableAudioFocus_ParamsSpec = { $: {} };
arc.mojom.MediaSessionInstance_DisableAudioFocus_ParamsSpec = { $: {} };

// Interface: MediaSessionInstance
mojo.internal.Struct(
    arc.mojom.MediaSessionInstance_EnableAudioFocus_ParamsSpec, 'arc.mojom.MediaSessionInstance_EnableAudioFocus_Params', [
      mojo.internal.StructField('service', 0, 0, mojo.internal.InterfaceProxy(media_session.mojom.AudioFocusManagerRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.MediaSessionInstance_DisableAudioFocus_ParamsSpec, 'arc.mojom.MediaSessionInstance_DisableAudioFocus_Params', [
    ],
    [[0, 8]]);

arc.mojom.MediaSessionInstancePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.MediaSessionInstanceRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.MediaSessionInstance';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.MediaSessionInstancePendingReceiver,
      handle);
    this.$ = new arc.mojom.MediaSessionInstanceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.MediaSessionInstanceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  enableAudioFocus(service) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      arc.mojom.MediaSessionInstance_EnableAudioFocus_ParamsSpec,
      null,
      [service],
      false);
  }

  disableAudioFocus() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      arc.mojom.MediaSessionInstance_DisableAudioFocus_ParamsSpec,
      null,
      [],
      false);
  }

};

arc.mojom.MediaSessionInstance.getRemote = function() {
  let remote = new arc.mojom.MediaSessionInstanceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.MediaSessionInstance',
    'context');
  return remote.$;
};

arc.mojom.MediaSessionInstanceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(1, 0); // Default ordinal 1 -> Index 0
    this.ordinalMap.set(2, 1); // Default ordinal 2 -> Index 1
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
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: EnableAudioFocus
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.MediaSessionInstance_EnableAudioFocus_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> EnableAudioFocus (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: DisableAudioFocus
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.MediaSessionInstance_DisableAudioFocus_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DisableAudioFocus (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
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
          const params = decoder.decodeStruct(arc.mojom.MediaSessionInstance_EnableAudioFocus_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.enableAudioFocus');
          const result = this.impl.enableAudioFocus(params.service);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.MediaSessionInstance_DisableAudioFocus_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.disableAudioFocus');
          const result = this.impl.disableAudioFocus();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

arc.mojom.MediaSessionInstanceReceiver = arc.mojom.MediaSessionInstanceReceiver;

arc.mojom.MediaSessionInstancePtr = arc.mojom.MediaSessionInstanceRemote;
arc.mojom.MediaSessionInstanceRequest = arc.mojom.MediaSessionInstancePendingReceiver;

