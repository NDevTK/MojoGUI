// Auto-generated MojoJS binding
// Source: chromium_src/components/media_control/mojom/media_playback_options.mojom
// Module: components.media_control.mojom

'use strict';

// Module namespace
var components = components || {};
components.media_control = components.media_control || {};
components.media_control.mojom = components.media_control.mojom || {};
var content = content || {};

components.media_control.mojom.MediaPlaybackOptions = {};
components.media_control.mojom.MediaPlaybackOptions.$interfaceName = 'components.media_control.mojom.MediaPlaybackOptions';
components.media_control.mojom.MediaPlaybackOptions_SetMediaLoadingBlocked_ParamsSpec = { $: {} };
components.media_control.mojom.MediaPlaybackOptions_SetBackgroundVideoPlaybackEnabled_ParamsSpec = { $: {} };
components.media_control.mojom.MediaPlaybackOptions_SetRendererType_ParamsSpec = { $: {} };

// Interface: MediaPlaybackOptions
mojo.internal.Struct(
    components.media_control.mojom.MediaPlaybackOptions_SetMediaLoadingBlocked_ParamsSpec, 'components.media_control.mojom.MediaPlaybackOptions_SetMediaLoadingBlocked_Params', [
      mojo.internal.StructField('blocked', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    components.media_control.mojom.MediaPlaybackOptions_SetBackgroundVideoPlaybackEnabled_ParamsSpec, 'components.media_control.mojom.MediaPlaybackOptions_SetBackgroundVideoPlaybackEnabled_Params', [
      mojo.internal.StructField('enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    components.media_control.mojom.MediaPlaybackOptions_SetRendererType_ParamsSpec, 'components.media_control.mojom.MediaPlaybackOptions_SetRendererType_Params', [
      mojo.internal.StructField('type', 0, 0, content.mojom.RendererTypeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

components.media_control.mojom.MediaPlaybackOptionsPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

components.media_control.mojom.MediaPlaybackOptionsRemote = class {
  static get $interfaceName() {
    return 'components.media_control.mojom.MediaPlaybackOptions';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      components.media_control.mojom.MediaPlaybackOptionsPendingReceiver,
      handle);
    this.$ = new components.media_control.mojom.MediaPlaybackOptionsRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

components.media_control.mojom.MediaPlaybackOptionsRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  setMediaLoadingBlocked(blocked) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      components.media_control.mojom.MediaPlaybackOptions_SetMediaLoadingBlocked_ParamsSpec,
      null,
      [blocked],
      false);
  }

  setBackgroundVideoPlaybackEnabled(enabled) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      components.media_control.mojom.MediaPlaybackOptions_SetBackgroundVideoPlaybackEnabled_ParamsSpec,
      null,
      [enabled],
      false);
  }

  setRendererType(type) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      components.media_control.mojom.MediaPlaybackOptions_SetRendererType_ParamsSpec,
      null,
      [type],
      false);
  }

};

components.media_control.mojom.MediaPlaybackOptions.getRemote = function() {
  let remote = new components.media_control.mojom.MediaPlaybackOptionsRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'components.media_control.mojom.MediaPlaybackOptions',
    'context');
  return remote.$;
};

components.media_control.mojom.MediaPlaybackOptionsReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
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
        
        // Try Method 0: SetMediaLoadingBlocked
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(components.media_control.mojom.MediaPlaybackOptions_SetMediaLoadingBlocked_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetMediaLoadingBlocked (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: SetBackgroundVideoPlaybackEnabled
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(components.media_control.mojom.MediaPlaybackOptions_SetBackgroundVideoPlaybackEnabled_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetBackgroundVideoPlaybackEnabled (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: SetRendererType
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(components.media_control.mojom.MediaPlaybackOptions_SetRendererType_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetRendererType (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
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
          const params = decoder.decodeStruct(components.media_control.mojom.MediaPlaybackOptions_SetMediaLoadingBlocked_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setMediaLoadingBlocked');
          const result = this.impl.setMediaLoadingBlocked(params.blocked);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(components.media_control.mojom.MediaPlaybackOptions_SetBackgroundVideoPlaybackEnabled_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setBackgroundVideoPlaybackEnabled');
          const result = this.impl.setBackgroundVideoPlaybackEnabled(params.enabled);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(components.media_control.mojom.MediaPlaybackOptions_SetRendererType_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setRendererType');
          const result = this.impl.setRendererType(params.type);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

components.media_control.mojom.MediaPlaybackOptionsReceiver = components.media_control.mojom.MediaPlaybackOptionsReceiver;

components.media_control.mojom.MediaPlaybackOptionsPtr = components.media_control.mojom.MediaPlaybackOptionsRemote;
components.media_control.mojom.MediaPlaybackOptionsRequest = components.media_control.mojom.MediaPlaybackOptionsPendingReceiver;

