// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/ash/office_fallback/office_fallback.mojom
// Module: ash.office_fallback.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.office_fallback = ash.office_fallback || {};
ash.office_fallback.mojom = ash.office_fallback.mojom || {};


// Enum: DialogChoice
ash.office_fallback.mojom.DialogChoice = {
  kCancel: 0,
  kOk: 1,
  kQuickOffice: 2,
  kTryAgain: 3,
};
ash.office_fallback.mojom.DialogChoiceSpec = { $: mojo.internal.Enum() };

// Interface: PageHandlerFactory
ash.office_fallback.mojom.PageHandlerFactory = {};

ash.office_fallback.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.office_fallback.mojom.PageHandlerFactory_CreatePageHandler_Params',
      packedSize: 16,
      fields: [
        { name: 'handler', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(ash.office_fallback.mojom.PageHandlerRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

ash.office_fallback.mojom.PageHandlerFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.office_fallback.mojom.PageHandlerFactoryRemote = class {
  static get $interfaceName() {
    return 'ash.office_fallback.mojom.PageHandlerFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.office_fallback.mojom.PageHandlerFactoryPendingReceiver,
      handle);
    this.$ = new ash.office_fallback.mojom.PageHandlerFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.office_fallback.mojom.PageHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createPageHandler(handler) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.office_fallback.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec,
      null,
      [handler]);
  }

};

ash.office_fallback.mojom.PageHandlerFactory.getRemote = function() {
  let remote = new ash.office_fallback.mojom.PageHandlerFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.office_fallback.mojom.PageHandlerFactory',
    'context');
  return remote.$;
};

// ParamsSpec for CreatePageHandler
ash.office_fallback.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.office_fallback.mojom.PageHandlerFactory.CreatePageHandler_Params',
      packedSize: 16,
      fields: [
        { name: 'handler', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(ash.office_fallback.mojom.PageHandlerRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
ash.office_fallback.mojom.PageHandlerFactoryPtr = ash.office_fallback.mojom.PageHandlerFactoryRemote;
ash.office_fallback.mojom.PageHandlerFactoryRequest = ash.office_fallback.mojom.PageHandlerFactoryPendingReceiver;


// Interface: PageHandler
ash.office_fallback.mojom.PageHandler = {};

ash.office_fallback.mojom.PageHandler_Close_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.office_fallback.mojom.PageHandler_Close_Params',
      packedSize: 16,
      fields: [
        { name: 'choice', packedOffset: 0, packedBitOffset: 0, type: ash.office_fallback.mojom.DialogChoiceSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

ash.office_fallback.mojom.PageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.office_fallback.mojom.PageHandlerRemote = class {
  static get $interfaceName() {
    return 'ash.office_fallback.mojom.PageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.office_fallback.mojom.PageHandlerPendingReceiver,
      handle);
    this.$ = new ash.office_fallback.mojom.PageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.office_fallback.mojom.PageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  close(choice) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.office_fallback.mojom.PageHandler_Close_ParamsSpec,
      null,
      [choice]);
  }

};

ash.office_fallback.mojom.PageHandler.getRemote = function() {
  let remote = new ash.office_fallback.mojom.PageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.office_fallback.mojom.PageHandler',
    'context');
  return remote.$;
};

// ParamsSpec for Close
ash.office_fallback.mojom.PageHandler_Close_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.office_fallback.mojom.PageHandler.Close_Params',
      packedSize: 16,
      fields: [
        { name: 'choice', packedOffset: 0, packedBitOffset: 0, type: ash.office_fallback.mojom.DialogChoiceSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
ash.office_fallback.mojom.PageHandlerPtr = ash.office_fallback.mojom.PageHandlerRemote;
ash.office_fallback.mojom.PageHandlerRequest = ash.office_fallback.mojom.PageHandlerPendingReceiver;

