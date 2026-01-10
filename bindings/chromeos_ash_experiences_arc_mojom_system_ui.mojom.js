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
      mojo.internal.StructField('source_color', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('theme_style', 8, 0, arc.mojom.ThemeStyleTypeSpec.$, null, false, 0, undefined),
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
  remote.bindNewPipeAndPassReceiver();
  remote.proxy.endpoint_.bindInBrowser(
    'arc.mojom.SystemUiInstance',
    'context');
  return remote.$;
};

arc.mojom.SystemUiInstancePtr = arc.mojom.SystemUiInstanceRemote;
arc.mojom.SystemUiInstanceRequest = arc.mojom.SystemUiInstancePendingReceiver;

