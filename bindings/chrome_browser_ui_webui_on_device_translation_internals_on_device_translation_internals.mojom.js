// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/on_device_translation_internals/on_device_translation_internals.mojom
// Module: on_device_translation_internals.mojom

'use strict';

// Module namespace
var on_device_translation_internals = on_device_translation_internals || {};
on_device_translation_internals.mojom = on_device_translation_internals.mojom || {};


// Enum: LanguagePackStatus
on_device_translation_internals.mojom.mojom.LanguagePackStatus = {
  kNotInstalled: 0,
  kInstalling: 1,
  kInstalled: 2,
};
on_device_translation_internals.mojom.mojom.LanguagePackStatusSpec = { $: mojo.internal.Enum() };

// Struct: LanguagePackInfo
on_device_translation_internals.mojom.mojom.LanguagePackInfoSpec = {
  $: {
    structSpec: {
      name: 'on_device_translation_internals.mojom.LanguagePackInfo',
      packedSize: 24,
      fields: [
        { name: 'name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'status', packedOffset: 8, packedBitOffset: 0, type: on_device_translation_internals.mojom.LanguagePackStatusSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Interface: PageHandlerFactory
on_device_translation_internals.mojom.mojom.PageHandlerFactory = {};

on_device_translation_internals.mojom.mojom.PageHandlerFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

on_device_translation_internals.mojom.mojom.PageHandlerFactoryRemote = class {
  static get $interfaceName() {
    return 'on_device_translation_internals.mojom.PageHandlerFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      on_device_translation_internals.mojom.mojom.PageHandlerFactoryPendingReceiver,
      handle);
    this.$ = new on_device_translation_internals.mojom.mojom.PageHandlerFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

on_device_translation_internals.mojom.mojom.PageHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createPageHandler(page, handler) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      on_device_translation_internals.mojom.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec,
      null,
      [page, handler]);
  }

};

on_device_translation_internals.mojom.mojom.PageHandlerFactory.getRemote = function() {
  let remote = new on_device_translation_internals.mojom.mojom.PageHandlerFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'on_device_translation_internals.mojom.PageHandlerFactory',
    'context');
  return remote.$;
};

// ParamsSpec for CreatePageHandler
on_device_translation_internals.mojom.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec = {
  $: {
    structSpec: {
      name: 'on_device_translation_internals.mojom.PageHandlerFactory.CreatePageHandler_Params',
      packedSize: 24,
      fields: [
        { name: 'page', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(on_device_translation_internals.mojom.PageRemote), nullable: false, minVersion: 0 },
        { name: 'handler', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(on_device_translation_internals.mojom.PageHandlerRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
on_device_translation_internals.mojom.mojom.PageHandlerFactoryPtr = on_device_translation_internals.mojom.mojom.PageHandlerFactoryRemote;
on_device_translation_internals.mojom.mojom.PageHandlerFactoryRequest = on_device_translation_internals.mojom.mojom.PageHandlerFactoryPendingReceiver;


// Interface: PageHandler
on_device_translation_internals.mojom.mojom.PageHandler = {};

on_device_translation_internals.mojom.mojom.PageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

on_device_translation_internals.mojom.mojom.PageHandlerRemote = class {
  static get $interfaceName() {
    return 'on_device_translation_internals.mojom.PageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      on_device_translation_internals.mojom.mojom.PageHandlerPendingReceiver,
      handle);
    this.$ = new on_device_translation_internals.mojom.mojom.PageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

on_device_translation_internals.mojom.mojom.PageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  installLanguagePackage(package_index) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      on_device_translation_internals.mojom.mojom.PageHandler_InstallLanguagePackage_ParamsSpec,
      null,
      [package_index]);
  }

  uninstallLanguagePackage(package_index) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      on_device_translation_internals.mojom.mojom.PageHandler_UninstallLanguagePackage_ParamsSpec,
      null,
      [package_index]);
  }

};

on_device_translation_internals.mojom.mojom.PageHandler.getRemote = function() {
  let remote = new on_device_translation_internals.mojom.mojom.PageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'on_device_translation_internals.mojom.PageHandler',
    'context');
  return remote.$;
};

// ParamsSpec for InstallLanguagePackage
on_device_translation_internals.mojom.mojom.PageHandler_InstallLanguagePackage_ParamsSpec = {
  $: {
    structSpec: {
      name: 'on_device_translation_internals.mojom.PageHandler.InstallLanguagePackage_Params',
      packedSize: 16,
      fields: [
        { name: 'package_index', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for UninstallLanguagePackage
on_device_translation_internals.mojom.mojom.PageHandler_UninstallLanguagePackage_ParamsSpec = {
  $: {
    structSpec: {
      name: 'on_device_translation_internals.mojom.PageHandler.UninstallLanguagePackage_Params',
      packedSize: 16,
      fields: [
        { name: 'package_index', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
on_device_translation_internals.mojom.mojom.PageHandlerPtr = on_device_translation_internals.mojom.mojom.PageHandlerRemote;
on_device_translation_internals.mojom.mojom.PageHandlerRequest = on_device_translation_internals.mojom.mojom.PageHandlerPendingReceiver;


// Interface: Page
on_device_translation_internals.mojom.mojom.Page = {};

on_device_translation_internals.mojom.mojom.PagePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

on_device_translation_internals.mojom.mojom.PageRemote = class {
  static get $interfaceName() {
    return 'on_device_translation_internals.mojom.Page';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      on_device_translation_internals.mojom.mojom.PagePendingReceiver,
      handle);
    this.$ = new on_device_translation_internals.mojom.mojom.PageRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

on_device_translation_internals.mojom.mojom.PageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onLanguagePackStatus(status) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      on_device_translation_internals.mojom.mojom.Page_OnLanguagePackStatus_ParamsSpec,
      null,
      [status]);
  }

};

on_device_translation_internals.mojom.mojom.Page.getRemote = function() {
  let remote = new on_device_translation_internals.mojom.mojom.PageRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'on_device_translation_internals.mojom.Page',
    'context');
  return remote.$;
};

// ParamsSpec for OnLanguagePackStatus
on_device_translation_internals.mojom.mojom.Page_OnLanguagePackStatus_ParamsSpec = {
  $: {
    structSpec: {
      name: 'on_device_translation_internals.mojom.Page.OnLanguagePackStatus_Params',
      packedSize: 16,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(on_device_translation_internals.mojom.LanguagePackInfoSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
on_device_translation_internals.mojom.mojom.PagePtr = on_device_translation_internals.mojom.mojom.PageRemote;
on_device_translation_internals.mojom.mojom.PageRequest = on_device_translation_internals.mojom.mojom.PagePendingReceiver;

