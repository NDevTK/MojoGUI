// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/choosers/color_chooser.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Struct: ColorSuggestion
blink.mojom.mojom.ColorSuggestionSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ColorSuggestion',
      packedSize: 24,
      fields: [
        { name: 'color', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'label', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Interface: ColorChooserFactory
blink.mojom.mojom.ColorChooserFactory = {};

blink.mojom.mojom.ColorChooserFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.mojom.ColorChooserFactoryRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.ColorChooserFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.mojom.ColorChooserFactoryPendingReceiver,
      handle);
    this.$ = new blink.mojom.mojom.ColorChooserFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.mojom.ColorChooserFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  openColorChooser(chooser, client, color, suggestions) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.mojom.ColorChooserFactory_OpenColorChooser_ParamsSpec,
      null,
      [chooser, client, color, suggestions]);
  }

};

blink.mojom.mojom.ColorChooserFactory.getRemote = function() {
  let remote = new blink.mojom.mojom.ColorChooserFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.ColorChooserFactory',
    'context');
  return remote.$;
};

// ParamsSpec for OpenColorChooser
blink.mojom.mojom.ColorChooserFactory_OpenColorChooser_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ColorChooserFactory.OpenColorChooser_Params',
      packedSize: 40,
      fields: [
        { name: 'chooser', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(blink.mojom.ColorChooserRemote), nullable: false, minVersion: 0 },
        { name: 'client', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(blink.mojom.ColorChooserClientRemote), nullable: false, minVersion: 0 },
        { name: 'color', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'suggestions', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array(blink.mojom.ColorSuggestionSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Legacy compatibility
blink.mojom.mojom.ColorChooserFactoryPtr = blink.mojom.mojom.ColorChooserFactoryRemote;
blink.mojom.mojom.ColorChooserFactoryRequest = blink.mojom.mojom.ColorChooserFactoryPendingReceiver;


// Interface: ColorChooser
blink.mojom.mojom.ColorChooser = {};

blink.mojom.mojom.ColorChooserPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.mojom.ColorChooserRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.ColorChooser';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.mojom.ColorChooserPendingReceiver,
      handle);
    this.$ = new blink.mojom.mojom.ColorChooserRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.mojom.ColorChooserRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  setSelectedColor(color) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.mojom.ColorChooser_SetSelectedColor_ParamsSpec,
      null,
      [color]);
  }

};

blink.mojom.mojom.ColorChooser.getRemote = function() {
  let remote = new blink.mojom.mojom.ColorChooserRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.ColorChooser',
    'context');
  return remote.$;
};

// ParamsSpec for SetSelectedColor
blink.mojom.mojom.ColorChooser_SetSelectedColor_ParamsSpec = {
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
blink.mojom.mojom.ColorChooserPtr = blink.mojom.mojom.ColorChooserRemote;
blink.mojom.mojom.ColorChooserRequest = blink.mojom.mojom.ColorChooserPendingReceiver;


// Interface: ColorChooserClient
blink.mojom.mojom.ColorChooserClient = {};

blink.mojom.mojom.ColorChooserClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.mojom.ColorChooserClientRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.ColorChooserClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.mojom.ColorChooserClientPendingReceiver,
      handle);
    this.$ = new blink.mojom.mojom.ColorChooserClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.mojom.ColorChooserClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  didChooseColor(color) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.mojom.ColorChooserClient_DidChooseColor_ParamsSpec,
      null,
      [color]);
  }

};

blink.mojom.mojom.ColorChooserClient.getRemote = function() {
  let remote = new blink.mojom.mojom.ColorChooserClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.ColorChooserClient',
    'context');
  return remote.$;
};

// ParamsSpec for DidChooseColor
blink.mojom.mojom.ColorChooserClient_DidChooseColor_ParamsSpec = {
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
blink.mojom.mojom.ColorChooserClientPtr = blink.mojom.mojom.ColorChooserClientRemote;
blink.mojom.mojom.ColorChooserClientRequest = blink.mojom.mojom.ColorChooserClientPendingReceiver;


// Interface: EyeDropperChooser
blink.mojom.mojom.EyeDropperChooser = {};

blink.mojom.mojom.EyeDropperChooserPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.mojom.EyeDropperChooserRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.EyeDropperChooser';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.mojom.EyeDropperChooserPendingReceiver,
      handle);
    this.$ = new blink.mojom.mojom.EyeDropperChooserRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.mojom.EyeDropperChooserRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  choose() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.mojom.EyeDropperChooser_Choose_ParamsSpec,
      blink.mojom.mojom.EyeDropperChooser_Choose_ResponseParamsSpec,
      []);
  }

};

blink.mojom.mojom.EyeDropperChooser.getRemote = function() {
  let remote = new blink.mojom.mojom.EyeDropperChooserRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.EyeDropperChooser',
    'context');
  return remote.$;
};

// ParamsSpec for Choose
blink.mojom.mojom.EyeDropperChooser_Choose_ParamsSpec = {
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

blink.mojom.mojom.EyeDropperChooser_Choose_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.EyeDropperChooser.Choose_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'color', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
blink.mojom.mojom.EyeDropperChooserPtr = blink.mojom.mojom.EyeDropperChooserRemote;
blink.mojom.mojom.EyeDropperChooserRequest = blink.mojom.mojom.EyeDropperChooserPendingReceiver;

