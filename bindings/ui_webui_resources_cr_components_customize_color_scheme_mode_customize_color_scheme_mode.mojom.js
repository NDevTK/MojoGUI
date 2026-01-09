// Auto-generated MojoJS binding
// Source: chromium_src/ui/webui/resources/cr_components/customize_color_scheme_mode/customize_color_scheme_mode.mojom
// Module: customize_color_scheme_mode.mojom

'use strict';

// Module namespace
var customize_color_scheme_mode = customize_color_scheme_mode || {};
customize_color_scheme_mode.mojom = customize_color_scheme_mode.mojom || {};


// Enum: ColorSchemeMode
customize_color_scheme_mode.mojom.ColorSchemeMode = {
  kSystem: 0,
  kLight: 1,
  kDark: 2,
};

// Interface: CustomizeColorSchemeModeHandlerFactory
customize_color_scheme_mode.mojom.CustomizeColorSchemeModeHandlerFactory = {};

customize_color_scheme_mode.mojom.CustomizeColorSchemeModeHandlerFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

customize_color_scheme_mode.mojom.CustomizeColorSchemeModeHandlerFactoryRemote = class {
  static get $interfaceName() {
    return 'customize_color_scheme_mode.mojom.CustomizeColorSchemeModeHandlerFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      customize_color_scheme_mode.mojom.CustomizeColorSchemeModeHandlerFactoryPendingReceiver,
      handle);
    this.$ = new customize_color_scheme_mode.mojom.CustomizeColorSchemeModeHandlerFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

customize_color_scheme_mode.mojom.CustomizeColorSchemeModeHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createCustomizeColorSchemeModeHandler(pending_client, pending_handler) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      customize_color_scheme_mode.mojom.CustomizeColorSchemeModeHandlerFactory_CreateCustomizeColorSchemeModeHandler_ParamsSpec,
      null,
      [pending_client, pending_handler]);
  }

};

customize_color_scheme_mode.mojom.CustomizeColorSchemeModeHandlerFactory.getRemote = function() {
  let remote = new customize_color_scheme_mode.mojom.CustomizeColorSchemeModeHandlerFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'customize_color_scheme_mode.mojom.CustomizeColorSchemeModeHandlerFactory',
    'context');
  return remote.$;
};

// ParamsSpec for CreateCustomizeColorSchemeModeHandler
customize_color_scheme_mode.mojom.CustomizeColorSchemeModeHandlerFactory_CreateCustomizeColorSchemeModeHandler_ParamsSpec = {
  $: {
    structSpec: {
      name: 'customize_color_scheme_mode.mojom.CustomizeColorSchemeModeHandlerFactory.CreateCustomizeColorSchemeModeHandler_Params',
      packedSize: 24,
      fields: [
        { name: 'pending_client', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'pending_handler', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
customize_color_scheme_mode.mojom.CustomizeColorSchemeModeHandlerFactoryPtr = customize_color_scheme_mode.mojom.CustomizeColorSchemeModeHandlerFactoryRemote;
customize_color_scheme_mode.mojom.CustomizeColorSchemeModeHandlerFactoryRequest = customize_color_scheme_mode.mojom.CustomizeColorSchemeModeHandlerFactoryPendingReceiver;


// Interface: CustomizeColorSchemeModeHandler
customize_color_scheme_mode.mojom.CustomizeColorSchemeModeHandler = {};

customize_color_scheme_mode.mojom.CustomizeColorSchemeModeHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

customize_color_scheme_mode.mojom.CustomizeColorSchemeModeHandlerRemote = class {
  static get $interfaceName() {
    return 'customize_color_scheme_mode.mojom.CustomizeColorSchemeModeHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      customize_color_scheme_mode.mojom.CustomizeColorSchemeModeHandlerPendingReceiver,
      handle);
    this.$ = new customize_color_scheme_mode.mojom.CustomizeColorSchemeModeHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

customize_color_scheme_mode.mojom.CustomizeColorSchemeModeHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  setColorSchemeMode(colorSchemeMode) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      customize_color_scheme_mode.mojom.CustomizeColorSchemeModeHandler_SetColorSchemeMode_ParamsSpec,
      null,
      [colorSchemeMode]);
  }

  initializeColorSchemeMode() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      customize_color_scheme_mode.mojom.CustomizeColorSchemeModeHandler_InitializeColorSchemeMode_ParamsSpec,
      null,
      []);
  }

};

customize_color_scheme_mode.mojom.CustomizeColorSchemeModeHandler.getRemote = function() {
  let remote = new customize_color_scheme_mode.mojom.CustomizeColorSchemeModeHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'customize_color_scheme_mode.mojom.CustomizeColorSchemeModeHandler',
    'context');
  return remote.$;
};

// ParamsSpec for SetColorSchemeMode
customize_color_scheme_mode.mojom.CustomizeColorSchemeModeHandler_SetColorSchemeMode_ParamsSpec = {
  $: {
    structSpec: {
      name: 'customize_color_scheme_mode.mojom.CustomizeColorSchemeModeHandler.SetColorSchemeMode_Params',
      packedSize: 16,
      fields: [
        { name: 'colorSchemeMode', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for InitializeColorSchemeMode
customize_color_scheme_mode.mojom.CustomizeColorSchemeModeHandler_InitializeColorSchemeMode_ParamsSpec = {
  $: {
    structSpec: {
      name: 'customize_color_scheme_mode.mojom.CustomizeColorSchemeModeHandler.InitializeColorSchemeMode_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
customize_color_scheme_mode.mojom.CustomizeColorSchemeModeHandlerPtr = customize_color_scheme_mode.mojom.CustomizeColorSchemeModeHandlerRemote;
customize_color_scheme_mode.mojom.CustomizeColorSchemeModeHandlerRequest = customize_color_scheme_mode.mojom.CustomizeColorSchemeModeHandlerPendingReceiver;


// Interface: CustomizeColorSchemeModeClient
customize_color_scheme_mode.mojom.CustomizeColorSchemeModeClient = {};

customize_color_scheme_mode.mojom.CustomizeColorSchemeModeClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

customize_color_scheme_mode.mojom.CustomizeColorSchemeModeClientRemote = class {
  static get $interfaceName() {
    return 'customize_color_scheme_mode.mojom.CustomizeColorSchemeModeClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      customize_color_scheme_mode.mojom.CustomizeColorSchemeModeClientPendingReceiver,
      handle);
    this.$ = new customize_color_scheme_mode.mojom.CustomizeColorSchemeModeClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

customize_color_scheme_mode.mojom.CustomizeColorSchemeModeClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  setColorSchemeMode(colorSchemeMode) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      customize_color_scheme_mode.mojom.CustomizeColorSchemeModeClient_SetColorSchemeMode_ParamsSpec,
      null,
      [colorSchemeMode]);
  }

};

customize_color_scheme_mode.mojom.CustomizeColorSchemeModeClient.getRemote = function() {
  let remote = new customize_color_scheme_mode.mojom.CustomizeColorSchemeModeClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'customize_color_scheme_mode.mojom.CustomizeColorSchemeModeClient',
    'context');
  return remote.$;
};

// ParamsSpec for SetColorSchemeMode
customize_color_scheme_mode.mojom.CustomizeColorSchemeModeClient_SetColorSchemeMode_ParamsSpec = {
  $: {
    structSpec: {
      name: 'customize_color_scheme_mode.mojom.CustomizeColorSchemeModeClient.SetColorSchemeMode_Params',
      packedSize: 16,
      fields: [
        { name: 'colorSchemeMode', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
customize_color_scheme_mode.mojom.CustomizeColorSchemeModeClientPtr = customize_color_scheme_mode.mojom.CustomizeColorSchemeModeClientRemote;
customize_color_scheme_mode.mojom.CustomizeColorSchemeModeClientRequest = customize_color_scheme_mode.mojom.CustomizeColorSchemeModeClientPendingReceiver;

