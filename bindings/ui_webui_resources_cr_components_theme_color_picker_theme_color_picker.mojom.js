// Auto-generated MojoJS binding
// Source: chromium_src/ui/webui/resources/cr_components/theme_color_picker/theme_color_picker.mojom
// Module: theme_color_picker.mojom

'use strict';

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
      mojo.internal.StructField('has_background_image', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('has_third_party_theme', 0, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('background_image_main_color', 8, 0, skia.mojom.SkColorSpec, null, true, 0, undefined),
      mojo.internal.StructField('is_dark_mode', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('seed_color', 24, 0, skia.mojom.SkColorSpec, null, false, 0, undefined),
      mojo.internal.StructField('seed_color_hue', 32, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('background_color', 40, 0, skia.mojom.SkColorSpec, null, false, 0, undefined),
      mojo.internal.StructField('foreground_color', 48, 0, skia.mojom.SkColorSpec, null, true, 0, undefined),
      mojo.internal.StructField('color_picker_icon_color', 56, 0, skia.mojom.SkColorSpec, null, false, 0, undefined),
      mojo.internal.StructField('colors_managed_by_policy', 64, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_grey_baseline', 64, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('browser_color_variant', 68, 0, ui.mojom.BrowserColorVariantSpec, null, false, 0, undefined),
      mojo.internal.StructField('follow_device_theme', 72, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 88]]);

// Struct: ChromeColor
mojo.internal.Struct(
    theme_color_picker.mojom.ChromeColorSpec, 'theme_color_picker.mojom.ChromeColor', [
      mojo.internal.StructField('name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('seed', 8, 0, skia.mojom.SkColorSpec, null, false, 0, undefined),
      mojo.internal.StructField('background', 16, 0, skia.mojom.SkColorSpec, null, false, 0, undefined),
      mojo.internal.StructField('foreground', 24, 0, skia.mojom.SkColorSpec, null, false, 0, undefined),
      mojo.internal.StructField('base', 32, 0, skia.mojom.SkColorSpec, null, false, 0, undefined),
      mojo.internal.StructField('variant', 40, 0, ui.mojom.BrowserColorVariantSpec, null, false, 0, undefined),
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
      mojo.internal.StructField('colors', 0, 0, mojo.internal.Array(theme_color_picker.mojom.ChromeColorSpec, false), null, false, 0, undefined),
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
      mojo.internal.StructField('seed_color', 0, 0, skia.mojom.SkColorSpec, null, false, 0, undefined),
      mojo.internal.StructField('variant', 8, 0, ui.mojom.BrowserColorVariantSpec, null, false, 0, undefined),
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

theme_color_picker.mojom.ThemeColorPickerHandlerPtr = theme_color_picker.mojom.ThemeColorPickerHandlerRemote;
theme_color_picker.mojom.ThemeColorPickerHandlerRequest = theme_color_picker.mojom.ThemeColorPickerHandlerPendingReceiver;


// Interface: ThemeColorPickerClient
mojo.internal.Struct(
    theme_color_picker.mojom.ThemeColorPickerClient_SetTheme_ParamsSpec, 'theme_color_picker.mojom.ThemeColorPickerClient_SetTheme_Params', [
      mojo.internal.StructField('theme', 0, 0, theme_color_picker.mojom.ThemeSpec, null, false, 0, undefined),
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

theme_color_picker.mojom.ThemeColorPickerClientPtr = theme_color_picker.mojom.ThemeColorPickerClientRemote;
theme_color_picker.mojom.ThemeColorPickerClientRequest = theme_color_picker.mojom.ThemeColorPickerClientPendingReceiver;

