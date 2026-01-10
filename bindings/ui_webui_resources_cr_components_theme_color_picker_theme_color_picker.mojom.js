// Auto-generated MojoJS binding
// Source: chromium_src/ui/webui/resources/cr_components/theme_color_picker/theme_color_picker.mojom
// Module: theme_color_picker.mojom

'use strict';

// Module namespace
var theme_color_picker = theme_color_picker || {};
theme_color_picker.mojom = theme_color_picker.mojom || {};
var skia = skia || {};
var ui = ui || {};


// Struct: Theme
theme_color_picker.mojom.mojom.ThemeSpec = {
  $: {
    structSpec: {
      name: 'theme_color_picker.mojom.Theme',
      packedSize: 64,
      fields: [
        { name: 'has_background_image', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'has_third_party_theme', packedOffset: 48, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'background_image_main_color', packedOffset: 0, packedBitOffset: 0, type: skia.mojom.SkColorSpec, nullable: true, minVersion: 0 },
        { name: 'is_dark_mode', packedOffset: 48, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'seed_color', packedOffset: 8, packedBitOffset: 0, type: skia.mojom.SkColorSpec, nullable: false, minVersion: 0 },
        { name: 'seed_color_hue', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
        { name: 'background_color', packedOffset: 16, packedBitOffset: 0, type: skia.mojom.SkColorSpec, nullable: false, minVersion: 0 },
        { name: 'foreground_color', packedOffset: 24, packedBitOffset: 0, type: skia.mojom.SkColorSpec, nullable: true, minVersion: 0 },
        { name: 'color_picker_icon_color', packedOffset: 32, packedBitOffset: 0, type: skia.mojom.SkColorSpec, nullable: false, minVersion: 0 },
        { name: 'colors_managed_by_policy', packedOffset: 48, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'is_grey_baseline', packedOffset: 48, packedBitOffset: 4, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'browser_color_variant', packedOffset: 44, packedBitOffset: 0, type: ui.mojom.BrowserColorVariantSpec, nullable: false, minVersion: 0 },
        { name: 'follow_device_theme', packedOffset: 48, packedBitOffset: 5, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 64}]
    }
  }
};

// Struct: ChromeColor
theme_color_picker.mojom.mojom.ChromeColorSpec = {
  $: {
    structSpec: {
      name: 'theme_color_picker.mojom.ChromeColor',
      packedSize: 56,
      fields: [
        { name: 'name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'seed', packedOffset: 8, packedBitOffset: 0, type: skia.mojom.SkColorSpec, nullable: false, minVersion: 0 },
        { name: 'background', packedOffset: 16, packedBitOffset: 0, type: skia.mojom.SkColorSpec, nullable: false, minVersion: 0 },
        { name: 'foreground', packedOffset: 24, packedBitOffset: 0, type: skia.mojom.SkColorSpec, nullable: false, minVersion: 0 },
        { name: 'base', packedOffset: 32, packedBitOffset: 0, type: skia.mojom.SkColorSpec, nullable: false, minVersion: 0 },
        { name: 'variant', packedOffset: 40, packedBitOffset: 0, type: ui.mojom.BrowserColorVariantSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 56}]
    }
  }
};

// Interface: ThemeColorPickerHandlerFactory
theme_color_picker.mojom.mojom.ThemeColorPickerHandlerFactory = {};

theme_color_picker.mojom.mojom.ThemeColorPickerHandlerFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

theme_color_picker.mojom.mojom.ThemeColorPickerHandlerFactoryRemote = class {
  static get $interfaceName() {
    return 'theme_color_picker.mojom.ThemeColorPickerHandlerFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      theme_color_picker.mojom.mojom.ThemeColorPickerHandlerFactoryPendingReceiver,
      handle);
    this.$ = new theme_color_picker.mojom.mojom.ThemeColorPickerHandlerFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

theme_color_picker.mojom.mojom.ThemeColorPickerHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createThemeColorPickerHandler(handler, client) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      theme_color_picker.mojom.mojom.ThemeColorPickerHandlerFactory_CreateThemeColorPickerHandler_ParamsSpec,
      null,
      [handler, client]);
  }

};

theme_color_picker.mojom.mojom.ThemeColorPickerHandlerFactory.getRemote = function() {
  let remote = new theme_color_picker.mojom.mojom.ThemeColorPickerHandlerFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'theme_color_picker.mojom.ThemeColorPickerHandlerFactory',
    'context');
  return remote.$;
};

// ParamsSpec for CreateThemeColorPickerHandler
theme_color_picker.mojom.mojom.ThemeColorPickerHandlerFactory_CreateThemeColorPickerHandler_ParamsSpec = {
  $: {
    structSpec: {
      name: 'theme_color_picker.mojom.ThemeColorPickerHandlerFactory.CreateThemeColorPickerHandler_Params',
      packedSize: 24,
      fields: [
        { name: 'handler', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(theme_color_picker.mojom.ThemeColorPickerHandlerRemote), nullable: false, minVersion: 0 },
        { name: 'client', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(theme_color_picker.mojom.ThemeColorPickerClientRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
theme_color_picker.mojom.mojom.ThemeColorPickerHandlerFactoryPtr = theme_color_picker.mojom.mojom.ThemeColorPickerHandlerFactoryRemote;
theme_color_picker.mojom.mojom.ThemeColorPickerHandlerFactoryRequest = theme_color_picker.mojom.mojom.ThemeColorPickerHandlerFactoryPendingReceiver;


// Interface: ThemeColorPickerHandler
theme_color_picker.mojom.mojom.ThemeColorPickerHandler = {};

theme_color_picker.mojom.mojom.ThemeColorPickerHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

theme_color_picker.mojom.mojom.ThemeColorPickerHandlerRemote = class {
  static get $interfaceName() {
    return 'theme_color_picker.mojom.ThemeColorPickerHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      theme_color_picker.mojom.mojom.ThemeColorPickerHandlerPendingReceiver,
      handle);
    this.$ = new theme_color_picker.mojom.mojom.ThemeColorPickerHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

theme_color_picker.mojom.mojom.ThemeColorPickerHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getChromeColors(is_dark_mode) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      theme_color_picker.mojom.mojom.ThemeColorPickerHandler_GetChromeColors_ParamsSpec,
      theme_color_picker.mojom.mojom.ThemeColorPickerHandler_GetChromeColors_ResponseParamsSpec,
      [is_dark_mode]);
  }

  updateTheme() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      theme_color_picker.mojom.mojom.ThemeColorPickerHandler_UpdateTheme_ParamsSpec,
      null,
      []);
  }

  setDefaultColor() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      theme_color_picker.mojom.mojom.ThemeColorPickerHandler_SetDefaultColor_ParamsSpec,
      null,
      []);
  }

  setGreyDefaultColor() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      theme_color_picker.mojom.mojom.ThemeColorPickerHandler_SetGreyDefaultColor_ParamsSpec,
      null,
      []);
  }

  setSeedColor(seed_color, variant) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      theme_color_picker.mojom.mojom.ThemeColorPickerHandler_SetSeedColor_ParamsSpec,
      null,
      [seed_color, variant]);
  }

  setSeedColorFromHue(hue) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      theme_color_picker.mojom.mojom.ThemeColorPickerHandler_SetSeedColorFromHue_ParamsSpec,
      null,
      [hue]);
  }

  removeBackgroundImage() {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      theme_color_picker.mojom.mojom.ThemeColorPickerHandler_RemoveBackgroundImage_ParamsSpec,
      null,
      []);
  }

};

theme_color_picker.mojom.mojom.ThemeColorPickerHandler.getRemote = function() {
  let remote = new theme_color_picker.mojom.mojom.ThemeColorPickerHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'theme_color_picker.mojom.ThemeColorPickerHandler',
    'context');
  return remote.$;
};

// ParamsSpec for GetChromeColors
theme_color_picker.mojom.mojom.ThemeColorPickerHandler_GetChromeColors_ParamsSpec = {
  $: {
    structSpec: {
      name: 'theme_color_picker.mojom.ThemeColorPickerHandler.GetChromeColors_Params',
      packedSize: 16,
      fields: [
        { name: 'is_dark_mode', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

theme_color_picker.mojom.mojom.ThemeColorPickerHandler_GetChromeColors_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'theme_color_picker.mojom.ThemeColorPickerHandler.GetChromeColors_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'colors', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(theme_color_picker.mojom.ChromeColorSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for UpdateTheme
theme_color_picker.mojom.mojom.ThemeColorPickerHandler_UpdateTheme_ParamsSpec = {
  $: {
    structSpec: {
      name: 'theme_color_picker.mojom.ThemeColorPickerHandler.UpdateTheme_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for SetDefaultColor
theme_color_picker.mojom.mojom.ThemeColorPickerHandler_SetDefaultColor_ParamsSpec = {
  $: {
    structSpec: {
      name: 'theme_color_picker.mojom.ThemeColorPickerHandler.SetDefaultColor_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for SetGreyDefaultColor
theme_color_picker.mojom.mojom.ThemeColorPickerHandler_SetGreyDefaultColor_ParamsSpec = {
  $: {
    structSpec: {
      name: 'theme_color_picker.mojom.ThemeColorPickerHandler.SetGreyDefaultColor_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for SetSeedColor
theme_color_picker.mojom.mojom.ThemeColorPickerHandler_SetSeedColor_ParamsSpec = {
  $: {
    structSpec: {
      name: 'theme_color_picker.mojom.ThemeColorPickerHandler.SetSeedColor_Params',
      packedSize: 24,
      fields: [
        { name: 'seed_color', packedOffset: 0, packedBitOffset: 0, type: skia.mojom.SkColorSpec, nullable: false, minVersion: 0 },
        { name: 'variant', packedOffset: 8, packedBitOffset: 0, type: ui.mojom.BrowserColorVariantSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for SetSeedColorFromHue
theme_color_picker.mojom.mojom.ThemeColorPickerHandler_SetSeedColorFromHue_ParamsSpec = {
  $: {
    structSpec: {
      name: 'theme_color_picker.mojom.ThemeColorPickerHandler.SetSeedColorFromHue_Params',
      packedSize: 16,
      fields: [
        { name: 'hue', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for RemoveBackgroundImage
theme_color_picker.mojom.mojom.ThemeColorPickerHandler_RemoveBackgroundImage_ParamsSpec = {
  $: {
    structSpec: {
      name: 'theme_color_picker.mojom.ThemeColorPickerHandler.RemoveBackgroundImage_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Legacy compatibility
theme_color_picker.mojom.mojom.ThemeColorPickerHandlerPtr = theme_color_picker.mojom.mojom.ThemeColorPickerHandlerRemote;
theme_color_picker.mojom.mojom.ThemeColorPickerHandlerRequest = theme_color_picker.mojom.mojom.ThemeColorPickerHandlerPendingReceiver;


// Interface: ThemeColorPickerClient
theme_color_picker.mojom.mojom.ThemeColorPickerClient = {};

theme_color_picker.mojom.mojom.ThemeColorPickerClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

theme_color_picker.mojom.mojom.ThemeColorPickerClientRemote = class {
  static get $interfaceName() {
    return 'theme_color_picker.mojom.ThemeColorPickerClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      theme_color_picker.mojom.mojom.ThemeColorPickerClientPendingReceiver,
      handle);
    this.$ = new theme_color_picker.mojom.mojom.ThemeColorPickerClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

theme_color_picker.mojom.mojom.ThemeColorPickerClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  setTheme(theme) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      theme_color_picker.mojom.mojom.ThemeColorPickerClient_SetTheme_ParamsSpec,
      null,
      [theme]);
  }

};

theme_color_picker.mojom.mojom.ThemeColorPickerClient.getRemote = function() {
  let remote = new theme_color_picker.mojom.mojom.ThemeColorPickerClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'theme_color_picker.mojom.ThemeColorPickerClient',
    'context');
  return remote.$;
};

// ParamsSpec for SetTheme
theme_color_picker.mojom.mojom.ThemeColorPickerClient_SetTheme_ParamsSpec = {
  $: {
    structSpec: {
      name: 'theme_color_picker.mojom.ThemeColorPickerClient.SetTheme_Params',
      packedSize: 16,
      fields: [
        { name: 'theme', packedOffset: 0, packedBitOffset: 0, type: theme_color_picker.mojom.ThemeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
theme_color_picker.mojom.mojom.ThemeColorPickerClientPtr = theme_color_picker.mojom.mojom.ThemeColorPickerClientRemote;
theme_color_picker.mojom.mojom.ThemeColorPickerClientRequest = theme_color_picker.mojom.mojom.ThemeColorPickerClientPendingReceiver;

