// Auto-generated MojoJS binding
// Source: chromium_src/ui/webui/resources/cr_components/theme_color_picker/theme_color_picker.mojom
// Module: theme_color_picker.mojom

'use strict';

// Module namespace
var theme_color_picker = theme_color_picker || {};
theme_color_picker.mojom = theme_color_picker.mojom || {};


// Struct: Theme
theme_color_picker.mojom.ThemeSpec = {
  $: {
    structSpec: {
      name: 'theme_color_picker.mojom.Theme',
      packedSize: 96,
      fields: [
        { name: 'has_background_image', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'has_third_party_theme', packedOffset: 0, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
        { name: 'background_image_main_color', packedOffset: 8, packedBitOffset: 0, type: skia.mojom.SkColorSpec, nullable: true },
        { name: 'is_dark_mode', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'seed_color', packedOffset: 24, packedBitOffset: 0, type: skia.mojom.SkColorSpec, nullable: false },
        { name: 'seed_color_hue', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
        { name: 'background_color', packedOffset: 40, packedBitOffset: 0, type: skia.mojom.SkColorSpec, nullable: false },
        { name: 'foreground_color', packedOffset: 48, packedBitOffset: 0, type: skia.mojom.SkColorSpec, nullable: true },
        { name: 'color_picker_icon_color', packedOffset: 56, packedBitOffset: 0, type: skia.mojom.SkColorSpec, nullable: false },
        { name: 'colors_managed_by_policy', packedOffset: 64, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'is_grey_baseline', packedOffset: 64, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
        { name: 'browser_color_variant', packedOffset: 72, packedBitOffset: 0, type: ui.mojom.BrowserColorVariantSpec, nullable: false },
        { name: 'follow_device_theme', packedOffset: 80, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: ChromeColor
theme_color_picker.mojom.ChromeColorSpec = {
  $: {
    structSpec: {
      name: 'theme_color_picker.mojom.ChromeColor',
      packedSize: 56,
      fields: [
        { name: 'name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'seed', packedOffset: 8, packedBitOffset: 0, type: skia.mojom.SkColorSpec, nullable: false },
        { name: 'background', packedOffset: 16, packedBitOffset: 0, type: skia.mojom.SkColorSpec, nullable: false },
        { name: 'foreground', packedOffset: 24, packedBitOffset: 0, type: skia.mojom.SkColorSpec, nullable: false },
        { name: 'base', packedOffset: 32, packedBitOffset: 0, type: skia.mojom.SkColorSpec, nullable: false },
        { name: 'variant', packedOffset: 40, packedBitOffset: 0, type: ui.mojom.BrowserColorVariantSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Interface: ThemeColorPickerHandlerFactory
theme_color_picker.mojom.ThemeColorPickerHandlerFactory = {};

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
};

theme_color_picker.mojom.ThemeColorPickerHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createThemeColorPickerHandler(handler, client) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      theme_color_picker.mojom.ThemeColorPickerHandlerFactory_CreateThemeColorPickerHandler_ParamsSpec,
      null,
      [handler, client]);
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

// ParamsSpec for CreateThemeColorPickerHandler
theme_color_picker.mojom.ThemeColorPickerHandlerFactory_CreateThemeColorPickerHandler_ParamsSpec = {
  $: {
    structSpec: {
      name: 'theme_color_picker.mojom.ThemeColorPickerHandlerFactory.CreateThemeColorPickerHandler_Params',
      packedSize: 16,
      fields: [
        { name: 'handler', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
        { name: 'client', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
theme_color_picker.mojom.ThemeColorPickerHandlerFactoryPtr = theme_color_picker.mojom.ThemeColorPickerHandlerFactoryRemote;
theme_color_picker.mojom.ThemeColorPickerHandlerFactoryRequest = theme_color_picker.mojom.ThemeColorPickerHandlerFactoryPendingReceiver;


// Interface: ThemeColorPickerHandler
theme_color_picker.mojom.ThemeColorPickerHandler = {};

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
};

theme_color_picker.mojom.ThemeColorPickerHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getChromeColors(is_dark_mode) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      theme_color_picker.mojom.ThemeColorPickerHandler_GetChromeColors_ParamsSpec,
      theme_color_picker.mojom.ThemeColorPickerHandler_GetChromeColors_ResponseParamsSpec,
      [is_dark_mode]);
  }

  updateTheme() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      theme_color_picker.mojom.ThemeColorPickerHandler_UpdateTheme_ParamsSpec,
      null,
      []);
  }

  setDefaultColor() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      theme_color_picker.mojom.ThemeColorPickerHandler_SetDefaultColor_ParamsSpec,
      null,
      []);
  }

  setGreyDefaultColor() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      theme_color_picker.mojom.ThemeColorPickerHandler_SetGreyDefaultColor_ParamsSpec,
      null,
      []);
  }

  setSeedColor(seed_color, variant) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      theme_color_picker.mojom.ThemeColorPickerHandler_SetSeedColor_ParamsSpec,
      null,
      [seed_color, variant]);
  }

  setSeedColorFromHue(hue) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      theme_color_picker.mojom.ThemeColorPickerHandler_SetSeedColorFromHue_ParamsSpec,
      null,
      [hue]);
  }

  removeBackgroundImage() {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      theme_color_picker.mojom.ThemeColorPickerHandler_RemoveBackgroundImage_ParamsSpec,
      null,
      []);
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

// ParamsSpec for GetChromeColors
theme_color_picker.mojom.ThemeColorPickerHandler_GetChromeColors_ParamsSpec = {
  $: {
    structSpec: {
      name: 'theme_color_picker.mojom.ThemeColorPickerHandler.GetChromeColors_Params',
      packedSize: 16,
      fields: [
        { name: 'is_dark_mode', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

theme_color_picker.mojom.ThemeColorPickerHandler_GetChromeColors_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'theme_color_picker.mojom.ThemeColorPickerHandler.GetChromeColors_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'colors', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for UpdateTheme
theme_color_picker.mojom.ThemeColorPickerHandler_UpdateTheme_ParamsSpec = {
  $: {
    structSpec: {
      name: 'theme_color_picker.mojom.ThemeColorPickerHandler.UpdateTheme_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetDefaultColor
theme_color_picker.mojom.ThemeColorPickerHandler_SetDefaultColor_ParamsSpec = {
  $: {
    structSpec: {
      name: 'theme_color_picker.mojom.ThemeColorPickerHandler.SetDefaultColor_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetGreyDefaultColor
theme_color_picker.mojom.ThemeColorPickerHandler_SetGreyDefaultColor_ParamsSpec = {
  $: {
    structSpec: {
      name: 'theme_color_picker.mojom.ThemeColorPickerHandler.SetGreyDefaultColor_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetSeedColor
theme_color_picker.mojom.ThemeColorPickerHandler_SetSeedColor_ParamsSpec = {
  $: {
    structSpec: {
      name: 'theme_color_picker.mojom.ThemeColorPickerHandler.SetSeedColor_Params',
      packedSize: 24,
      fields: [
        { name: 'seed_color', packedOffset: 0, packedBitOffset: 0, type: skia.mojom.SkColorSpec, nullable: false },
        { name: 'variant', packedOffset: 8, packedBitOffset: 0, type: ui.mojom.BrowserColorVariantSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetSeedColorFromHue
theme_color_picker.mojom.ThemeColorPickerHandler_SetSeedColorFromHue_ParamsSpec = {
  $: {
    structSpec: {
      name: 'theme_color_picker.mojom.ThemeColorPickerHandler.SetSeedColorFromHue_Params',
      packedSize: 16,
      fields: [
        { name: 'hue', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for RemoveBackgroundImage
theme_color_picker.mojom.ThemeColorPickerHandler_RemoveBackgroundImage_ParamsSpec = {
  $: {
    structSpec: {
      name: 'theme_color_picker.mojom.ThemeColorPickerHandler.RemoveBackgroundImage_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
theme_color_picker.mojom.ThemeColorPickerHandlerPtr = theme_color_picker.mojom.ThemeColorPickerHandlerRemote;
theme_color_picker.mojom.ThemeColorPickerHandlerRequest = theme_color_picker.mojom.ThemeColorPickerHandlerPendingReceiver;


// Interface: ThemeColorPickerClient
theme_color_picker.mojom.ThemeColorPickerClient = {};

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
};

theme_color_picker.mojom.ThemeColorPickerClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  setTheme(theme) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      theme_color_picker.mojom.ThemeColorPickerClient_SetTheme_ParamsSpec,
      null,
      [theme]);
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

// ParamsSpec for SetTheme
theme_color_picker.mojom.ThemeColorPickerClient_SetTheme_ParamsSpec = {
  $: {
    structSpec: {
      name: 'theme_color_picker.mojom.ThemeColorPickerClient.SetTheme_Params',
      packedSize: 16,
      fields: [
        { name: 'theme', packedOffset: 0, packedBitOffset: 0, type: theme_color_picker.mojom.ThemeSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
theme_color_picker.mojom.ThemeColorPickerClientPtr = theme_color_picker.mojom.ThemeColorPickerClientRemote;
theme_color_picker.mojom.ThemeColorPickerClientRequest = theme_color_picker.mojom.ThemeColorPickerClientPendingReceiver;

