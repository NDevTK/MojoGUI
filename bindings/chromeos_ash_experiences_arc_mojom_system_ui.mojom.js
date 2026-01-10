// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/system_ui.mojom
// Module: arc.mojom

'use strict';

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};


// Enum: ThemeStyleType
arc.mojom.ThemeStyleType = {
  VIBRANT: 0,
  EXPRESSIVE: 1,
  SPRITZ: 2,
  RAINBOW: 3,
  FRUIT_SALAD: 4,
};
arc.mojom.ThemeStyleTypeSpec = { $: mojo.internal.Enum() };

// Interface: SystemUiInstance
arc.mojom.SystemUiInstance = {};

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
      [active]);
  }

  setOverlayColor(source_color, theme_style) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      arc.mojom.SystemUiInstance_SetOverlayColor_ParamsSpec,
      null,
      [source_color, theme_style]);
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

// ParamsSpec for SetDarkThemeStatus
arc.mojom.SystemUiInstance_SetDarkThemeStatus_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.SystemUiInstance.SetDarkThemeStatus_Params',
      packedSize: 16,
      fields: [
        { name: 'active', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetOverlayColor
arc.mojom.SystemUiInstance_SetOverlayColor_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.SystemUiInstance.SetOverlayColor_Params',
      packedSize: 16,
      fields: [
        { name: 'source_color', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'theme_style', packedOffset: 4, packedBitOffset: 0, type: arc.mojom.ThemeStyleTypeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
arc.mojom.SystemUiInstancePtr = arc.mojom.SystemUiInstanceRemote;
arc.mojom.SystemUiInstanceRequest = arc.mojom.SystemUiInstancePendingReceiver;

