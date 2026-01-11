// Auto-generated MojoJS binding
// Source: chromium_src/ui/webui/resources/cr_components/theme_color_picker/theme_color_picker.mojom
// Module: theme_color_picker.mojom

// Module namespace
var theme_color_picker = theme_color_picker || {};
theme_color_picker.mojom = theme_color_picker.mojom || {};
var skia = skia || {};
var ui = ui || {};

theme_color_picker.mojom.ThemeSpec = { $: {} };
theme_color_picker.mojom.ChromeColorSpec = { $: {} };
theme_color_picker.mojom.ThemeColorPickerHandlerFactory = {};
theme_color_picker.mojom.ThemeColorPickerHandlerFactory.$interfaceName = 'theme_color_picker.mojom.ThemeColorPickerHandlerFactory';
theme_color_picker.mojom.ThemeColorPickerHandlerFactory_CreateThemeColorPickerHandler_ParamsSpec = { $: {} };
theme_color_picker.mojom.ThemeColorPickerHandler = {};
theme_color_picker.mojom.ThemeColorPickerHandler.$interfaceName = 'theme_color_picker.mojom.ThemeColorPickerHandler';
theme_color_picker.mojom.ThemeColorPickerHandler_GetChromeColors_ParamsSpec = { $: {} };
theme_color_picker.mojom.ThemeColorPickerHandler_GetChromeColors_ResponseParamsSpec = { $: {} };
theme_color_picker.mojom.ThemeColorPickerHandler_UpdateTheme_ParamsSpec = { $: {} };
theme_color_picker.mojom.ThemeColorPickerHandler_SetDefaultColor_ParamsSpec = { $: {} };
theme_color_picker.mojom.ThemeColorPickerHandler_SetGreyDefaultColor_ParamsSpec = { $: {} };
theme_color_picker.mojom.ThemeColorPickerHandler_SetSeedColor_ParamsSpec = { $: {} };
theme_color_picker.mojom.ThemeColorPickerHandler_SetSeedColorFromHue_ParamsSpec = { $: {} };
theme_color_picker.mojom.ThemeColorPickerHandler_RemoveBackgroundImage_ParamsSpec = { $: {} };
theme_color_picker.mojom.ThemeColorPickerClient = {};
theme_color_picker.mojom.ThemeColorPickerClient.$interfaceName = 'theme_color_picker.mojom.ThemeColorPickerClient';
theme_color_picker.mojom.ThemeColorPickerClient_SetTheme_ParamsSpec = { $: {} };

// Struct: Theme
mojo.internal.Struct(
    theme_color_picker.mojom.ThemeSpec, 'theme_color_picker.mojom.Theme', [
      mojo.internal.StructField('background_image_main_color', 0, 0, skia.mojom.SkColorSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('seed_color', 8, 0, skia.mojom.SkColorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('background_color', 16, 0, skia.mojom.SkColorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('foreground_color', 24, 0, skia.mojom.SkColorSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('color_picker_icon_color', 32, 0, skia.mojom.SkColorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('browser_color_variant', 40, 0, ui.mojom.BrowserColorVariantSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('seed_color_hue', 48, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('has_background_image', 52, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('has_third_party_theme', 52, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_dark_mode', 52, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('colors_managed_by_policy', 52, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_grey_baseline', 52, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('follow_device_theme', 52, 5, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 64]]);

// Struct: ChromeColor
mojo.internal.Struct(
    theme_color_picker.mojom.ChromeColorSpec, 'theme_color_picker.mojom.ChromeColor', [
      mojo.internal.StructField('name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('seed', 8, 0, skia.mojom.SkColorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('background', 16, 0, skia.mojom.SkColorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('foreground', 24, 0, skia.mojom.SkColorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('base', 32, 0, skia.mojom.SkColorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('variant', 40, 0, ui.mojom.BrowserColorVariantSpec.$, null, false, 0, undefined),
    ],
    [[0, 56]]);

// Interface: ThemeColorPickerHandlerFactory
mojo.internal.Struct(
    theme_color_picker.mojom.ThemeColorPickerHandlerFactory_CreateThemeColorPickerHandler_ParamsSpec, 'theme_color_picker.mojom.ThemeColorPickerHandlerFactory_CreateThemeColorPickerHandler_Params', [
      mojo.internal.StructField('handler', 0, 0, mojo.internal.InterfaceRequest(theme_color_picker.mojom.ThemeColorPickerHandlerRemote), null, false, 0, undefined),
      mojo.internal.StructField('client', 8, 0, mojo.internal.InterfaceProxy(theme_color_picker.mojom.ThemeColorPickerClientRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

theme_color_picker.mojom.ThemeColorPickerHandlerFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

theme_color_picker.mojom.ThemeColorPickerHandlerFactoryRemote = class {
  static get $interfaceName() {
    return 'theme_color_picker.mojom.ThemeColorPickerHandlerFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      theme_color_picker.mojom.ThemeColorPickerHandlerFactoryPendingReceiver,
      handle);
    this.$ = new theme_color_picker.mojom.ThemeColorPickerHandlerFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  createThemeColorPickerHandler(handler, client) {
    return this.$.createThemeColorPickerHandler(handler, client);
  }
};

theme_color_picker.mojom.ThemeColorPickerHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ThemeColorPickerHandlerFactory', [
      { explicit: null },
    ]);
  }

  createThemeColorPickerHandler(handler, client) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      theme_color_picker.mojom.ThemeColorPickerHandlerFactory_CreateThemeColorPickerHandler_ParamsSpec,
      null,
      [handler, client],
      false);
  }

};

theme_color_picker.mojom.ThemeColorPickerHandlerFactory.getRemote = function() {
  let remote = new theme_color_picker.mojom.ThemeColorPickerHandlerFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'theme_color_picker.mojom.ThemeColorPickerHandlerFactory',
    'context');
  return remote.$;
};

theme_color_picker.mojom.ThemeColorPickerHandlerFactoryReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ThemeColorPickerHandlerFactory', [
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
             decoder.decodeStructInline(theme_color_picker.mojom.ThemeColorPickerHandlerFactory_CreateThemeColorPickerHandler_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(theme_color_picker.mojom.ThemeColorPickerHandlerFactory_CreateThemeColorPickerHandler_ParamsSpec.$.structSpec);
          const result = this.impl.createThemeColorPickerHandler(params.handler, params.client);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

theme_color_picker.mojom.ThemeColorPickerHandlerFactoryReceiver = theme_color_picker.mojom.ThemeColorPickerHandlerFactoryReceiver;

theme_color_picker.mojom.ThemeColorPickerHandlerFactoryPtr = theme_color_picker.mojom.ThemeColorPickerHandlerFactoryRemote;
theme_color_picker.mojom.ThemeColorPickerHandlerFactoryRequest = theme_color_picker.mojom.ThemeColorPickerHandlerFactoryPendingReceiver;


// Interface: ThemeColorPickerHandler
mojo.internal.Struct(
    theme_color_picker.mojom.ThemeColorPickerHandler_GetChromeColors_ParamsSpec, 'theme_color_picker.mojom.ThemeColorPickerHandler_GetChromeColors_Params', [
      mojo.internal.StructField('is_dark_mode', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    theme_color_picker.mojom.ThemeColorPickerHandler_GetChromeColors_ResponseParamsSpec, 'theme_color_picker.mojom.ThemeColorPickerHandler_GetChromeColors_ResponseParams', [
      mojo.internal.StructField('colors', 0, 0, mojo.internal.Array(theme_color_picker.mojom.ChromeColorSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    theme_color_picker.mojom.ThemeColorPickerHandler_UpdateTheme_ParamsSpec, 'theme_color_picker.mojom.ThemeColorPickerHandler_UpdateTheme_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    theme_color_picker.mojom.ThemeColorPickerHandler_SetDefaultColor_ParamsSpec, 'theme_color_picker.mojom.ThemeColorPickerHandler_SetDefaultColor_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    theme_color_picker.mojom.ThemeColorPickerHandler_SetGreyDefaultColor_ParamsSpec, 'theme_color_picker.mojom.ThemeColorPickerHandler_SetGreyDefaultColor_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    theme_color_picker.mojom.ThemeColorPickerHandler_SetSeedColor_ParamsSpec, 'theme_color_picker.mojom.ThemeColorPickerHandler_SetSeedColor_Params', [
      mojo.internal.StructField('seed_color', 0, 0, skia.mojom.SkColorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('variant', 8, 0, ui.mojom.BrowserColorVariantSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    theme_color_picker.mojom.ThemeColorPickerHandler_SetSeedColorFromHue_ParamsSpec, 'theme_color_picker.mojom.ThemeColorPickerHandler_SetSeedColorFromHue_Params', [
      mojo.internal.StructField('hue', 0, 0, mojo.internal.Float, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    theme_color_picker.mojom.ThemeColorPickerHandler_RemoveBackgroundImage_ParamsSpec, 'theme_color_picker.mojom.ThemeColorPickerHandler_RemoveBackgroundImage_Params', [
    ],
    [[0, 8]]);

theme_color_picker.mojom.ThemeColorPickerHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

theme_color_picker.mojom.ThemeColorPickerHandlerRemote = class {
  static get $interfaceName() {
    return 'theme_color_picker.mojom.ThemeColorPickerHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      theme_color_picker.mojom.ThemeColorPickerHandlerPendingReceiver,
      handle);
    this.$ = new theme_color_picker.mojom.ThemeColorPickerHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  getChromeColors(is_dark_mode) {
    return this.$.getChromeColors(is_dark_mode);
  }
  updateTheme() {
    return this.$.updateTheme();
  }
  setDefaultColor() {
    return this.$.setDefaultColor();
  }
  setGreyDefaultColor() {
    return this.$.setGreyDefaultColor();
  }
  setSeedColor(seed_color, variant) {
    return this.$.setSeedColor(seed_color, variant);
  }
  setSeedColorFromHue(hue) {
    return this.$.setSeedColorFromHue(hue);
  }
  removeBackgroundImage() {
    return this.$.removeBackgroundImage();
  }
};

theme_color_picker.mojom.ThemeColorPickerHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ThemeColorPickerHandler', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  getChromeColors(is_dark_mode) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      theme_color_picker.mojom.ThemeColorPickerHandler_GetChromeColors_ParamsSpec,
      theme_color_picker.mojom.ThemeColorPickerHandler_GetChromeColors_ResponseParamsSpec,
      [is_dark_mode],
      false);
  }

  updateTheme() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      theme_color_picker.mojom.ThemeColorPickerHandler_UpdateTheme_ParamsSpec,
      null,
      [],
      false);
  }

  setDefaultColor() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      theme_color_picker.mojom.ThemeColorPickerHandler_SetDefaultColor_ParamsSpec,
      null,
      [],
      false);
  }

  setGreyDefaultColor() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      theme_color_picker.mojom.ThemeColorPickerHandler_SetGreyDefaultColor_ParamsSpec,
      null,
      [],
      false);
  }

  setSeedColor(seed_color, variant) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      theme_color_picker.mojom.ThemeColorPickerHandler_SetSeedColor_ParamsSpec,
      null,
      [seed_color, variant],
      false);
  }

  setSeedColorFromHue(hue) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      theme_color_picker.mojom.ThemeColorPickerHandler_SetSeedColorFromHue_ParamsSpec,
      null,
      [hue],
      false);
  }

  removeBackgroundImage() {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      theme_color_picker.mojom.ThemeColorPickerHandler_RemoveBackgroundImage_ParamsSpec,
      null,
      [],
      false);
  }

};

theme_color_picker.mojom.ThemeColorPickerHandler.getRemote = function() {
  let remote = new theme_color_picker.mojom.ThemeColorPickerHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'theme_color_picker.mojom.ThemeColorPickerHandler',
    'context');
  return remote.$;
};

theme_color_picker.mojom.ThemeColorPickerHandlerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ThemeColorPickerHandler', [
      { explicit: null },
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
             decoder.decodeStructInline(theme_color_picker.mojom.ThemeColorPickerHandler_GetChromeColors_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(theme_color_picker.mojom.ThemeColorPickerHandler_UpdateTheme_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(theme_color_picker.mojom.ThemeColorPickerHandler_SetDefaultColor_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(theme_color_picker.mojom.ThemeColorPickerHandler_SetGreyDefaultColor_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(theme_color_picker.mojom.ThemeColorPickerHandler_SetSeedColor_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(theme_color_picker.mojom.ThemeColorPickerHandler_SetSeedColorFromHue_ParamsSpec);
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(theme_color_picker.mojom.ThemeColorPickerHandler_RemoveBackgroundImage_ParamsSpec);
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(theme_color_picker.mojom.ThemeColorPickerHandler_GetChromeColors_ParamsSpec.$.structSpec);
          const result = this.impl.getChromeColors(params.is_dark_mode);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, theme_color_picker.mojom.ThemeColorPickerHandler_GetChromeColors_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(theme_color_picker.mojom.ThemeColorPickerHandler_UpdateTheme_ParamsSpec.$.structSpec);
          const result = this.impl.updateTheme();
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(theme_color_picker.mojom.ThemeColorPickerHandler_SetDefaultColor_ParamsSpec.$.structSpec);
          const result = this.impl.setDefaultColor();
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(theme_color_picker.mojom.ThemeColorPickerHandler_SetGreyDefaultColor_ParamsSpec.$.structSpec);
          const result = this.impl.setGreyDefaultColor();
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(theme_color_picker.mojom.ThemeColorPickerHandler_SetSeedColor_ParamsSpec.$.structSpec);
          const result = this.impl.setSeedColor(params.seed_color, params.variant);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(theme_color_picker.mojom.ThemeColorPickerHandler_SetSeedColorFromHue_ParamsSpec.$.structSpec);
          const result = this.impl.setSeedColorFromHue(params.hue);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(theme_color_picker.mojom.ThemeColorPickerHandler_RemoveBackgroundImage_ParamsSpec.$.structSpec);
          const result = this.impl.removeBackgroundImage();
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

theme_color_picker.mojom.ThemeColorPickerHandlerReceiver = theme_color_picker.mojom.ThemeColorPickerHandlerReceiver;

theme_color_picker.mojom.ThemeColorPickerHandlerPtr = theme_color_picker.mojom.ThemeColorPickerHandlerRemote;
theme_color_picker.mojom.ThemeColorPickerHandlerRequest = theme_color_picker.mojom.ThemeColorPickerHandlerPendingReceiver;


// Interface: ThemeColorPickerClient
mojo.internal.Struct(
    theme_color_picker.mojom.ThemeColorPickerClient_SetTheme_ParamsSpec, 'theme_color_picker.mojom.ThemeColorPickerClient_SetTheme_Params', [
      mojo.internal.StructField('theme', 0, 0, theme_color_picker.mojom.ThemeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

theme_color_picker.mojom.ThemeColorPickerClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

theme_color_picker.mojom.ThemeColorPickerClientRemote = class {
  static get $interfaceName() {
    return 'theme_color_picker.mojom.ThemeColorPickerClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      theme_color_picker.mojom.ThemeColorPickerClientPendingReceiver,
      handle);
    this.$ = new theme_color_picker.mojom.ThemeColorPickerClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  setTheme(theme) {
    return this.$.setTheme(theme);
  }
};

theme_color_picker.mojom.ThemeColorPickerClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ThemeColorPickerClient', [
      { explicit: null },
    ]);
  }

  setTheme(theme) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      theme_color_picker.mojom.ThemeColorPickerClient_SetTheme_ParamsSpec,
      null,
      [theme],
      false);
  }

};

theme_color_picker.mojom.ThemeColorPickerClient.getRemote = function() {
  let remote = new theme_color_picker.mojom.ThemeColorPickerClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'theme_color_picker.mojom.ThemeColorPickerClient',
    'context');
  return remote.$;
};

theme_color_picker.mojom.ThemeColorPickerClientReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ThemeColorPickerClient', [
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
             decoder.decodeStructInline(theme_color_picker.mojom.ThemeColorPickerClient_SetTheme_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(theme_color_picker.mojom.ThemeColorPickerClient_SetTheme_ParamsSpec.$.structSpec);
          const result = this.impl.setTheme(params.theme);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

theme_color_picker.mojom.ThemeColorPickerClientReceiver = theme_color_picker.mojom.ThemeColorPickerClientReceiver;

theme_color_picker.mojom.ThemeColorPickerClientPtr = theme_color_picker.mojom.ThemeColorPickerClientRemote;
theme_color_picker.mojom.ThemeColorPickerClientRequest = theme_color_picker.mojom.ThemeColorPickerClientPendingReceiver;

