// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/choosers/color_chooser.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Struct: ColorSuggestion
blink.mojom.ColorSuggestionSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ColorSuggestion',
      packedSize: 24,
      fields: [
        { name: 'color', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'label', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Interface: ColorChooserFactory
blink.mojom.ColorChooserFactory = {};

blink.mojom.ColorChooserFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.ColorChooserFactoryRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.ColorChooserFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.ColorChooserFactoryPendingReceiver,
      handle);
    this.$ = new blink.mojom.ColorChooserFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.ColorChooserFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  openColorChooser(chooser, client, color, suggestions) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.ColorChooserFactory_OpenColorChooser_ParamsSpec,
      null,
      [chooser, client, color, suggestions]);
  }

};

blink.mojom.ColorChooserFactory.getRemote = function() {
  let remote = new blink.mojom.ColorChooserFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.ColorChooserFactory',
    'context');
  return remote.$;
};

// ParamsSpec for OpenColorChooser
blink.mojom.ColorChooserFactory_OpenColorChooser_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ColorChooserFactory.OpenColorChooser_Params',
      packedSize: 32,
      fields: [
        { name: 'chooser', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false, minVersion: 0 },
        { name: 'client', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
        { name: 'color', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'suggestions', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array(blink.mojom.ColorSuggestionSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Legacy compatibility
blink.mojom.ColorChooserFactoryPtr = blink.mojom.ColorChooserFactoryRemote;
blink.mojom.ColorChooserFactoryRequest = blink.mojom.ColorChooserFactoryPendingReceiver;


// Interface: ColorChooser
blink.mojom.ColorChooser = {};

blink.mojom.ColorChooserPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.ColorChooserRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.ColorChooser';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.ColorChooserPendingReceiver,
      handle);
    this.$ = new blink.mojom.ColorChooserRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.ColorChooserRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  setSelectedColor(color) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.ColorChooser_SetSelectedColor_ParamsSpec,
      null,
      [color]);
  }

};

blink.mojom.ColorChooser.getRemote = function() {
  let remote = new blink.mojom.ColorChooserRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.ColorChooser',
    'context');
  return remote.$;
};

// ParamsSpec for SetSelectedColor
blink.mojom.ColorChooser_SetSelectedColor_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ColorChooser.SetSelectedColor_Params',
      packedSize: 16,
      fields: [
        { name: 'color', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
blink.mojom.ColorChooserPtr = blink.mojom.ColorChooserRemote;
blink.mojom.ColorChooserRequest = blink.mojom.ColorChooserPendingReceiver;


// Interface: ColorChooserClient
blink.mojom.ColorChooserClient = {};

blink.mojom.ColorChooserClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.ColorChooserClientRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.ColorChooserClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.ColorChooserClientPendingReceiver,
      handle);
    this.$ = new blink.mojom.ColorChooserClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.ColorChooserClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  didChooseColor(color) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.ColorChooserClient_DidChooseColor_ParamsSpec,
      null,
      [color]);
  }

};

blink.mojom.ColorChooserClient.getRemote = function() {
  let remote = new blink.mojom.ColorChooserClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.ColorChooserClient',
    'context');
  return remote.$;
};

// ParamsSpec for DidChooseColor
blink.mojom.ColorChooserClient_DidChooseColor_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ColorChooserClient.DidChooseColor_Params',
      packedSize: 16,
      fields: [
        { name: 'color', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
blink.mojom.ColorChooserClientPtr = blink.mojom.ColorChooserClientRemote;
blink.mojom.ColorChooserClientRequest = blink.mojom.ColorChooserClientPendingReceiver;


// Interface: EyeDropperChooser
blink.mojom.EyeDropperChooser = {};

blink.mojom.EyeDropperChooserPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.EyeDropperChooserRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.EyeDropperChooser';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.EyeDropperChooserPendingReceiver,
      handle);
    this.$ = new blink.mojom.EyeDropperChooserRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.EyeDropperChooserRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  choose() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.EyeDropperChooser_Choose_ParamsSpec,
      blink.mojom.EyeDropperChooser_Choose_ResponseParamsSpec,
      []);
  }

};

blink.mojom.EyeDropperChooser.getRemote = function() {
  let remote = new blink.mojom.EyeDropperChooserRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.EyeDropperChooser',
    'context');
  return remote.$;
};

// ParamsSpec for Choose
blink.mojom.EyeDropperChooser_Choose_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.EyeDropperChooser.Choose_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

blink.mojom.EyeDropperChooser_Choose_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'color', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
blink.mojom.EyeDropperChooserPtr = blink.mojom.EyeDropperChooserRemote;
blink.mojom.EyeDropperChooserRequest = blink.mojom.EyeDropperChooserPendingReceiver;

