// Auto-generated MojoJS binding
// Source: chromium_src/ui/webui/resources/cr_components/customize_color_scheme_mode/customize_color_scheme_mode.mojom
// Module: customize_color_scheme_mode.mojom

'use strict';

// Module namespace
var customize_color_scheme_mode = customize_color_scheme_mode || {};
customize_color_scheme_mode.mojom = customize_color_scheme_mode.mojom || {};


// Enum: ColorSchemeMode
customize_color_scheme_mode.mojom.mojom.ColorSchemeMode = {
  kSystem: 0,
  kLight: 1,
  kDark: 2,
};
customize_color_scheme_mode.mojom.mojom.ColorSchemeModeSpec = { $: mojo.internal.Enum() };

// Interface: CustomizeColorSchemeModeHandlerFactory
customize_color_scheme_mode.mojom.mojom.CustomizeColorSchemeModeHandlerFactory = {};

customize_color_scheme_mode.mojom.mojom.CustomizeColorSchemeModeHandlerFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

customize_color_scheme_mode.mojom.mojom.CustomizeColorSchemeModeHandlerFactoryRemote = class {
  static get $interfaceName() {
    return 'customize_color_scheme_mode.mojom.CustomizeColorSchemeModeHandlerFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      customize_color_scheme_mode.mojom.mojom.CustomizeColorSchemeModeHandlerFactoryPendingReceiver,
      handle);
    this.$ = new customize_color_scheme_mode.mojom.mojom.CustomizeColorSchemeModeHandlerFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

customize_color_scheme_mode.mojom.mojom.CustomizeColorSchemeModeHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createCustomizeColorSchemeModeHandler(pending_client, pending_handler) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      customize_color_scheme_mode.mojom.mojom.CustomizeColorSchemeModeHandlerFactory_CreateCustomizeColorSchemeModeHandler_ParamsSpec,
      null,
      [pending_client, pending_handler]);
  }

};

customize_color_scheme_mode.mojom.mojom.CustomizeColorSchemeModeHandlerFactory.getRemote = function() {
  let remote = new customize_color_scheme_mode.mojom.mojom.CustomizeColorSchemeModeHandlerFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'customize_color_scheme_mode.mojom.CustomizeColorSchemeModeHandlerFactory',
    'context');
  return remote.$;
};

// ParamsSpec for CreateCustomizeColorSchemeModeHandler
customize_color_scheme_mode.mojom.mojom.CustomizeColorSchemeModeHandlerFactory_CreateCustomizeColorSchemeModeHandler_ParamsSpec = {
  $: {
    structSpec: {
      name: 'customize_color_scheme_mode.mojom.CustomizeColorSchemeModeHandlerFactory.CreateCustomizeColorSchemeModeHandler_Params',
      packedSize: 24,
      fields: [
        { name: 'pending_client', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(customize_color_scheme_mode.mojom.CustomizeColorSchemeModeClientRemote), nullable: false, minVersion: 0 },
        { name: 'pending_handler', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(customize_color_scheme_mode.mojom.CustomizeColorSchemeModeHandlerRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
customize_color_scheme_mode.mojom.mojom.CustomizeColorSchemeModeHandlerFactoryPtr = customize_color_scheme_mode.mojom.mojom.CustomizeColorSchemeModeHandlerFactoryRemote;
customize_color_scheme_mode.mojom.mojom.CustomizeColorSchemeModeHandlerFactoryRequest = customize_color_scheme_mode.mojom.mojom.CustomizeColorSchemeModeHandlerFactoryPendingReceiver;


// Interface: CustomizeColorSchemeModeHandler
customize_color_scheme_mode.mojom.mojom.CustomizeColorSchemeModeHandler = {};

customize_color_scheme_mode.mojom.mojom.CustomizeColorSchemeModeHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

customize_color_scheme_mode.mojom.mojom.CustomizeColorSchemeModeHandlerRemote = class {
  static get $interfaceName() {
    return 'customize_color_scheme_mode.mojom.CustomizeColorSchemeModeHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      customize_color_scheme_mode.mojom.mojom.CustomizeColorSchemeModeHandlerPendingReceiver,
      handle);
    this.$ = new customize_color_scheme_mode.mojom.mojom.CustomizeColorSchemeModeHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

customize_color_scheme_mode.mojom.mojom.CustomizeColorSchemeModeHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  setColorSchemeMode(colorSchemeMode) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      customize_color_scheme_mode.mojom.mojom.CustomizeColorSchemeModeHandler_SetColorSchemeMode_ParamsSpec,
      null,
      [colorSchemeMode]);
  }

  initializeColorSchemeMode() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      customize_color_scheme_mode.mojom.mojom.CustomizeColorSchemeModeHandler_InitializeColorSchemeMode_ParamsSpec,
      null,
      []);
  }

};

customize_color_scheme_mode.mojom.mojom.CustomizeColorSchemeModeHandler.getRemote = function() {
  let remote = new customize_color_scheme_mode.mojom.mojom.CustomizeColorSchemeModeHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'customize_color_scheme_mode.mojom.CustomizeColorSchemeModeHandler',
    'context');
  return remote.$;
};

// ParamsSpec for SetColorSchemeMode
customize_color_scheme_mode.mojom.mojom.CustomizeColorSchemeModeHandler_SetColorSchemeMode_ParamsSpec = {
  $: {
    structSpec: {
      name: 'customize_color_scheme_mode.mojom.CustomizeColorSchemeModeHandler.SetColorSchemeMode_Params',
      packedSize: 16,
      fields: [
        { name: 'colorSchemeMode', packedOffset: 0, packedBitOffset: 0, type: customize_color_scheme_mode.mojom.ColorSchemeModeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for InitializeColorSchemeMode
customize_color_scheme_mode.mojom.mojom.CustomizeColorSchemeModeHandler_InitializeColorSchemeMode_ParamsSpec = {
  $: {
    structSpec: {
      name: 'customize_color_scheme_mode.mojom.CustomizeColorSchemeModeHandler.InitializeColorSchemeMode_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Legacy compatibility
customize_color_scheme_mode.mojom.mojom.CustomizeColorSchemeModeHandlerPtr = customize_color_scheme_mode.mojom.mojom.CustomizeColorSchemeModeHandlerRemote;
customize_color_scheme_mode.mojom.mojom.CustomizeColorSchemeModeHandlerRequest = customize_color_scheme_mode.mojom.mojom.CustomizeColorSchemeModeHandlerPendingReceiver;


// Interface: CustomizeColorSchemeModeClient
customize_color_scheme_mode.mojom.mojom.CustomizeColorSchemeModeClient = {};

customize_color_scheme_mode.mojom.mojom.CustomizeColorSchemeModeClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

customize_color_scheme_mode.mojom.mojom.CustomizeColorSchemeModeClientRemote = class {
  static get $interfaceName() {
    return 'customize_color_scheme_mode.mojom.CustomizeColorSchemeModeClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      customize_color_scheme_mode.mojom.mojom.CustomizeColorSchemeModeClientPendingReceiver,
      handle);
    this.$ = new customize_color_scheme_mode.mojom.mojom.CustomizeColorSchemeModeClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

customize_color_scheme_mode.mojom.mojom.CustomizeColorSchemeModeClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  setColorSchemeMode(colorSchemeMode) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      customize_color_scheme_mode.mojom.mojom.CustomizeColorSchemeModeClient_SetColorSchemeMode_ParamsSpec,
      null,
      [colorSchemeMode]);
  }

};

customize_color_scheme_mode.mojom.mojom.CustomizeColorSchemeModeClient.getRemote = function() {
  let remote = new customize_color_scheme_mode.mojom.mojom.CustomizeColorSchemeModeClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'customize_color_scheme_mode.mojom.CustomizeColorSchemeModeClient',
    'context');
  return remote.$;
};

// ParamsSpec for SetColorSchemeMode
customize_color_scheme_mode.mojom.mojom.CustomizeColorSchemeModeClient_SetColorSchemeMode_ParamsSpec = {
  $: {
    structSpec: {
      name: 'customize_color_scheme_mode.mojom.CustomizeColorSchemeModeClient.SetColorSchemeMode_Params',
      packedSize: 16,
      fields: [
        { name: 'colorSchemeMode', packedOffset: 0, packedBitOffset: 0, type: customize_color_scheme_mode.mojom.ColorSchemeModeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
customize_color_scheme_mode.mojom.mojom.CustomizeColorSchemeModeClientPtr = customize_color_scheme_mode.mojom.mojom.CustomizeColorSchemeModeClientRemote;
customize_color_scheme_mode.mojom.mojom.CustomizeColorSchemeModeClientRequest = customize_color_scheme_mode.mojom.mojom.CustomizeColorSchemeModeClientPendingReceiver;

