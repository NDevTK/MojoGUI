// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/system_ui.mojom
// Module: arc.mojom

'use strict';

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};

arc.mojom.ThemeStyleTypeSpec = { $: mojo.internal.Enum() };
arc.mojom.SystemUiInstance = {};
arc.mojom.SystemUiInstance.$interfaceName = 'arc.mojom.SystemUiInstance';
arc.mojom.SystemUiInstance_SetDarkThemeStatus_ParamsSpec = { $: {} };
arc.mojom.SystemUiInstance_SetOverlayColor_ParamsSpec = { $: {} };

// Enum: ThemeStyleType
arc.mojom.ThemeStyleType = {
  TONAL_SPOT: 0,
  VIBRANT: 1,
  EXPRESSIVE: 2,
  SPRITZ: 3,
  RAINBOW: 4,
  FRUIT_SALAD: 5,
};

// Interface: SystemUiInstance
mojo.internal.Struct(
    arc.mojom.SystemUiInstance_SetDarkThemeStatus_ParamsSpec, 'arc.mojom.SystemUiInstance_SetDarkThemeStatus_Params', [
      mojo.internal.StructField('active', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.SystemUiInstance_SetOverlayColor_ParamsSpec, 'arc.mojom.SystemUiInstance_SetOverlayColor_Params', [
      mojo.internal.StructField('theme_style', 0, 0, arc.mojom.ThemeStyleTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('source_color', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

arc.mojom.SystemUiInstancePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.SystemUiInstanceRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.SystemUiInstance';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.SystemUiInstancePendingReceiver,
      handle);
    this.$ = new arc.mojom.SystemUiInstanceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.SystemUiInstanceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  setDarkThemeStatus(active) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      arc.mojom.SystemUiInstance_SetDarkThemeStatus_ParamsSpec,
      null,
      [active],
      false);
  }

  setOverlayColor(source_color, theme_style) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      arc.mojom.SystemUiInstance_SetOverlayColor_ParamsSpec,
      null,
      [source_color, theme_style],
      false);
  }

};

arc.mojom.SystemUiInstance.getRemote = function() {
  let remote = new arc.mojom.SystemUiInstanceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.SystemUiInstance',
    'context');
  return remote.$;
};

arc.mojom.SystemUiInstanceReceiver = class {
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
        
        // Try Method 0: SetDarkThemeStatus
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.SystemUiInstance_SetDarkThemeStatus_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetDarkThemeStatus (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: SetOverlayColor
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.SystemUiInstance_SetOverlayColor_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetOverlayColor (1)');
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
          const params = decoder.decodeStruct(arc.mojom.SystemUiInstance_SetDarkThemeStatus_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setDarkThemeStatus');
          const result = this.impl.setDarkThemeStatus(params.active);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.SystemUiInstance_SetOverlayColor_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setOverlayColor');
          const result = this.impl.setOverlayColor(params.source_color, params.theme_style);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

arc.mojom.SystemUiInstanceReceiver = arc.mojom.SystemUiInstanceReceiver;

arc.mojom.SystemUiInstancePtr = arc.mojom.SystemUiInstanceRemote;
arc.mojom.SystemUiInstanceRequest = arc.mojom.SystemUiInstancePendingReceiver;

