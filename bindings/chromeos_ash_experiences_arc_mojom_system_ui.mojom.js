// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/system_ui.mojom
// Module: arc.mojom

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
  setDarkThemeStatus(active) {
    return this.$.setDarkThemeStatus(active);
  }
  setOverlayColor(source_color, theme_style) {
    return this.$.setOverlayColor(source_color, theme_style);
  }
};

arc.mojom.SystemUiInstanceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('SystemUiInstance', [
      { explicit: 0 },
      { explicit: 1 },
    ]);
  }

  setDarkThemeStatus(active) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      arc.mojom.SystemUiInstance_SetDarkThemeStatus_ParamsSpec,
      null,
      [active],
      false);
  }

  setOverlayColor(source_color, theme_style) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
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
    const ordinals = window.mojoScrambler.getOrdinals('SystemUiInstance', [
      { explicit: 0 },
      { explicit: 1 },
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
             decoder.decodeStructInline(arc.mojom.SystemUiInstance_SetDarkThemeStatus_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.SystemUiInstance_SetOverlayColor_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.SystemUiInstance_SetDarkThemeStatus_ParamsSpec.$.structSpec);
          const result = this.impl.setDarkThemeStatus(params.active);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.SystemUiInstance_SetOverlayColor_ParamsSpec.$.structSpec);
          const result = this.impl.setOverlayColor(params.source_color, params.theme_style);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

arc.mojom.SystemUiInstanceReceiver = arc.mojom.SystemUiInstanceReceiver;

arc.mojom.SystemUiInstancePtr = arc.mojom.SystemUiInstanceRemote;
arc.mojom.SystemUiInstanceRequest = arc.mojom.SystemUiInstancePendingReceiver;

