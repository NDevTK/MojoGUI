// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/glic/fre/glic_fre.mojom
// Module: glic.mojom

'use strict';

// Module namespace
var glic = glic || {};
glic.mojom = glic.mojom || {};
var url = url || {};


// Enum: FreWebUiState
glic.mojom.FreWebUiState = {
  kUninitialized: 0,
  kBeginLoading: 1,
  kShowLoading: 2,
  kHoldLoading: 3,
  kFinishLoading: 4,
  kError: 5,
  kOffline: 6,
  kReady: 7,
  kDisabledByAdmin: 8,
};
glic.mojom.FreWebUiStateSpec = { $: mojo.internal.Enum() };

// Interface: FrePageHandlerFactory
glic.mojom.FrePageHandlerFactory = {};

glic.mojom.FrePageHandlerFactory_CreatePageHandler_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.FrePageHandlerFactory_CreatePageHandler_Params',
      packedSize: 16,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(glic.mojom.FrePageHandlerRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

glic.mojom.FrePageHandlerFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

glic.mojom.FrePageHandlerFactoryRemote = class {
  static get $interfaceName() {
    return 'glic.mojom.FrePageHandlerFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      glic.mojom.FrePageHandlerFactoryPendingReceiver,
      handle);
    this.$ = new glic.mojom.FrePageHandlerFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

glic.mojom.FrePageHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createPageHandler(receiver) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      glic.mojom.FrePageHandlerFactory_CreatePageHandler_ParamsSpec,
      null,
      [receiver]);
  }

};

glic.mojom.FrePageHandlerFactory.getRemote = function() {
  let remote = new glic.mojom.FrePageHandlerFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'glic.mojom.FrePageHandlerFactory',
    'context');
  return remote.$;
};

// ParamsSpec for CreatePageHandler
glic.mojom.FrePageHandlerFactory_CreatePageHandler_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.FrePageHandlerFactory.CreatePageHandler_Params',
      packedSize: 16,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(glic.mojom.FrePageHandlerRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
glic.mojom.FrePageHandlerFactoryPtr = glic.mojom.FrePageHandlerFactoryRemote;
glic.mojom.FrePageHandlerFactoryRequest = glic.mojom.FrePageHandlerFactoryPendingReceiver;


// Interface: FrePageHandler
glic.mojom.FrePageHandler = {};

glic.mojom.FrePageHandler_AcceptFre_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.FrePageHandler_AcceptFre_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

glic.mojom.FrePageHandler_RejectFre_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.FrePageHandler_RejectFre_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

glic.mojom.FrePageHandler_DismissFre_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.FrePageHandler_DismissFre_Params',
      packedSize: 16,
      fields: [
        { name: 'panel', packedOffset: 0, packedBitOffset: 0, type: glic.mojom.FreWebUiStateSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

glic.mojom.FrePageHandler_FreReloaded_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.FrePageHandler_FreReloaded_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

glic.mojom.FrePageHandler_PrepareForClient_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.FrePageHandler_PrepareForClient_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

glic.mojom.FrePageHandler_ValidateAndOpenLinkInNewTab_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.FrePageHandler_ValidateAndOpenLinkInNewTab_Params',
      packedSize: 16,
      fields: [
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

glic.mojom.FrePageHandler_WebUiStateChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.FrePageHandler_WebUiStateChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'new_state', packedOffset: 0, packedBitOffset: 0, type: glic.mojom.FreWebUiStateSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

glic.mojom.FrePageHandler_ExceededTimeoutError_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.FrePageHandler_ExceededTimeoutError_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

glic.mojom.FrePageHandler_LogWebUiLoadComplete_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.FrePageHandler_LogWebUiLoadComplete_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

glic.mojom.FrePageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

glic.mojom.FrePageHandlerRemote = class {
  static get $interfaceName() {
    return 'glic.mojom.FrePageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      glic.mojom.FrePageHandlerPendingReceiver,
      handle);
    this.$ = new glic.mojom.FrePageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

glic.mojom.FrePageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  acceptFre() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      glic.mojom.FrePageHandler_AcceptFre_ParamsSpec,
      null,
      []);
  }

  rejectFre() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      glic.mojom.FrePageHandler_RejectFre_ParamsSpec,
      null,
      []);
  }

  dismissFre(panel) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      glic.mojom.FrePageHandler_DismissFre_ParamsSpec,
      null,
      [panel]);
  }

  freReloaded() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      glic.mojom.FrePageHandler_FreReloaded_ParamsSpec,
      null,
      []);
  }

  prepareForClient() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      glic.mojom.FrePageHandler_PrepareForClient_ParamsSpec,
      glic.mojom.FrePageHandler_PrepareForClient_ResponseParamsSpec,
      []);
  }

  validateAndOpenLinkInNewTab(url) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      glic.mojom.FrePageHandler_ValidateAndOpenLinkInNewTab_ParamsSpec,
      null,
      [url]);
  }

  webUiStateChanged(new_state) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      glic.mojom.FrePageHandler_WebUiStateChanged_ParamsSpec,
      null,
      [new_state]);
  }

  exceededTimeoutError() {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      glic.mojom.FrePageHandler_ExceededTimeoutError_ParamsSpec,
      null,
      []);
  }

  logWebUiLoadComplete() {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      glic.mojom.FrePageHandler_LogWebUiLoadComplete_ParamsSpec,
      null,
      []);
  }

};

glic.mojom.FrePageHandler.getRemote = function() {
  let remote = new glic.mojom.FrePageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'glic.mojom.FrePageHandler',
    'context');
  return remote.$;
};

// ParamsSpec for AcceptFre
glic.mojom.FrePageHandler_AcceptFre_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.FrePageHandler.AcceptFre_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for RejectFre
glic.mojom.FrePageHandler_RejectFre_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.FrePageHandler.RejectFre_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for DismissFre
glic.mojom.FrePageHandler_DismissFre_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.FrePageHandler.DismissFre_Params',
      packedSize: 16,
      fields: [
        { name: 'panel', packedOffset: 0, packedBitOffset: 0, type: glic.mojom.FreWebUiStateSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for FreReloaded
glic.mojom.FrePageHandler_FreReloaded_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.FrePageHandler.FreReloaded_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for PrepareForClient
glic.mojom.FrePageHandler_PrepareForClient_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.FrePageHandler.PrepareForClient_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

glic.mojom.FrePageHandler_PrepareForClient_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.FrePageHandler.PrepareForClient_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ValidateAndOpenLinkInNewTab
glic.mojom.FrePageHandler_ValidateAndOpenLinkInNewTab_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.FrePageHandler.ValidateAndOpenLinkInNewTab_Params',
      packedSize: 16,
      fields: [
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for WebUiStateChanged
glic.mojom.FrePageHandler_WebUiStateChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.FrePageHandler.WebUiStateChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'new_state', packedOffset: 0, packedBitOffset: 0, type: glic.mojom.FreWebUiStateSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ExceededTimeoutError
glic.mojom.FrePageHandler_ExceededTimeoutError_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.FrePageHandler.ExceededTimeoutError_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for LogWebUiLoadComplete
glic.mojom.FrePageHandler_LogWebUiLoadComplete_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.FrePageHandler.LogWebUiLoadComplete_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Legacy compatibility
glic.mojom.FrePageHandlerPtr = glic.mojom.FrePageHandlerRemote;
glic.mojom.FrePageHandlerRequest = glic.mojom.FrePageHandlerPendingReceiver;

