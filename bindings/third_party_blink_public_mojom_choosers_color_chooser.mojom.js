// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/choosers/color_chooser.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};

blink.mojom.ColorSuggestionSpec = { $: {} };
blink.mojom.ColorChooserFactory = {};
blink.mojom.ColorChooserFactory.$interfaceName = 'blink.mojom.ColorChooserFactory';
blink.mojom.ColorChooserFactory_OpenColorChooser_ParamsSpec = { $: {} };
blink.mojom.ColorChooser = {};
blink.mojom.ColorChooser.$interfaceName = 'blink.mojom.ColorChooser';
blink.mojom.ColorChooser_SetSelectedColor_ParamsSpec = { $: {} };
blink.mojom.ColorChooserClient = {};
blink.mojom.ColorChooserClient.$interfaceName = 'blink.mojom.ColorChooserClient';
blink.mojom.ColorChooserClient_DidChooseColor_ParamsSpec = { $: {} };
blink.mojom.EyeDropperChooser = {};
blink.mojom.EyeDropperChooser.$interfaceName = 'blink.mojom.EyeDropperChooser';
blink.mojom.EyeDropperChooser_Choose_ParamsSpec = { $: {} };
blink.mojom.EyeDropperChooser_Choose_ResponseParamsSpec = { $: {} };

// Struct: ColorSuggestion
mojo.internal.Struct(
    blink.mojom.ColorSuggestionSpec, 'blink.mojom.ColorSuggestion', [
      mojo.internal.StructField('color', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('label', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: ColorChooserFactory
mojo.internal.Struct(
    blink.mojom.ColorChooserFactory_OpenColorChooser_ParamsSpec, 'blink.mojom.ColorChooserFactory_OpenColorChooser_Params', [
      mojo.internal.StructField('chooser', 0, 0, mojo.internal.InterfaceRequest(blink.mojom.ColorChooserRemote), null, false, 0, undefined),
      mojo.internal.StructField('client', 8, 0, mojo.internal.InterfaceProxy(blink.mojom.ColorChooserClientRemote), null, false, 0, undefined),
      mojo.internal.StructField('color', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('suggestions', 24, 0, mojo.internal.Array(blink.mojom.ColorSuggestionSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 40]]);

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
      [chooser, client, color, suggestions],
      false);
  }

};

blink.mojom.ColorChooserFactory.getRemote = function() {
  let remote = new blink.mojom.ColorChooserFactoryRemote();
  remote.bindNewPipeAndPassReceiver();
  remote.proxy.endpoint_.bindInBrowser(
    'blink.mojom.ColorChooserFactory',
    'context');
  return remote.$;
};

blink.mojom.ColorChooserFactoryPtr = blink.mojom.ColorChooserFactoryRemote;
blink.mojom.ColorChooserFactoryRequest = blink.mojom.ColorChooserFactoryPendingReceiver;


// Interface: ColorChooser
mojo.internal.Struct(
    blink.mojom.ColorChooser_SetSelectedColor_ParamsSpec, 'blink.mojom.ColorChooser_SetSelectedColor_Params', [
      mojo.internal.StructField('color', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

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
      [color],
      false);
  }

};

blink.mojom.ColorChooser.getRemote = function() {
  let remote = new blink.mojom.ColorChooserRemote();
  remote.bindNewPipeAndPassReceiver();
  remote.proxy.endpoint_.bindInBrowser(
    'blink.mojom.ColorChooser',
    'context');
  return remote.$;
};

blink.mojom.ColorChooserPtr = blink.mojom.ColorChooserRemote;
blink.mojom.ColorChooserRequest = blink.mojom.ColorChooserPendingReceiver;


// Interface: ColorChooserClient
mojo.internal.Struct(
    blink.mojom.ColorChooserClient_DidChooseColor_ParamsSpec, 'blink.mojom.ColorChooserClient_DidChooseColor_Params', [
      mojo.internal.StructField('color', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

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
      [color],
      false);
  }

};

blink.mojom.ColorChooserClient.getRemote = function() {
  let remote = new blink.mojom.ColorChooserClientRemote();
  remote.bindNewPipeAndPassReceiver();
  remote.proxy.endpoint_.bindInBrowser(
    'blink.mojom.ColorChooserClient',
    'context');
  return remote.$;
};

blink.mojom.ColorChooserClientPtr = blink.mojom.ColorChooserClientRemote;
blink.mojom.ColorChooserClientRequest = blink.mojom.ColorChooserClientPendingReceiver;


// Interface: EyeDropperChooser
mojo.internal.Struct(
    blink.mojom.EyeDropperChooser_Choose_ParamsSpec, 'blink.mojom.EyeDropperChooser_Choose_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.EyeDropperChooser_Choose_ResponseParamsSpec, 'blink.mojom.EyeDropperChooser_Choose_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('color', 4, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

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
      [],
      false);
  }

};

blink.mojom.EyeDropperChooser.getRemote = function() {
  let remote = new blink.mojom.EyeDropperChooserRemote();
  remote.bindNewPipeAndPassReceiver();
  remote.proxy.endpoint_.bindInBrowser(
    'blink.mojom.EyeDropperChooser',
    'context');
  return remote.$;
};

blink.mojom.EyeDropperChooserPtr = blink.mojom.EyeDropperChooserRemote;
blink.mojom.EyeDropperChooserRequest = blink.mojom.EyeDropperChooserPendingReceiver;

