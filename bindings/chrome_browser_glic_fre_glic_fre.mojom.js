// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/glic/fre/glic_fre.mojom
// Module: glic.mojom

'use strict';

// Module namespace
var glic = glic || {};
glic.mojom = glic.mojom || {};
var url = url || {};

glic.mojom.FreWebUiStateSpec = { $: mojo.internal.Enum() };
glic.mojom.FrePageHandlerFactory = {};
glic.mojom.FrePageHandlerFactory.$interfaceName = 'glic.mojom.FrePageHandlerFactory';
glic.mojom.FrePageHandlerFactory_CreatePageHandler_ParamsSpec = { $: {} };
glic.mojom.FrePageHandler = {};
glic.mojom.FrePageHandler.$interfaceName = 'glic.mojom.FrePageHandler';
glic.mojom.FrePageHandler_AcceptFre_ParamsSpec = { $: {} };
glic.mojom.FrePageHandler_RejectFre_ParamsSpec = { $: {} };
glic.mojom.FrePageHandler_DismissFre_ParamsSpec = { $: {} };
glic.mojom.FrePageHandler_FreReloaded_ParamsSpec = { $: {} };
glic.mojom.FrePageHandler_PrepareForClient_ParamsSpec = { $: {} };
glic.mojom.FrePageHandler_PrepareForClient_ResponseParamsSpec = { $: {} };
glic.mojom.FrePageHandler_ValidateAndOpenLinkInNewTab_ParamsSpec = { $: {} };
glic.mojom.FrePageHandler_WebUiStateChanged_ParamsSpec = { $: {} };
glic.mojom.FrePageHandler_ExceededTimeoutError_ParamsSpec = { $: {} };
glic.mojom.FrePageHandler_LogWebUiLoadComplete_ParamsSpec = { $: {} };

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

// Interface: FrePageHandlerFactory
mojo.internal.Struct(
    glic.mojom.FrePageHandlerFactory_CreatePageHandler_ParamsSpec, 'glic.mojom.FrePageHandlerFactory_CreatePageHandler_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(glic.mojom.FrePageHandlerRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

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

glic.mojom.FrePageHandlerFactoryPtr = glic.mojom.FrePageHandlerFactoryRemote;
glic.mojom.FrePageHandlerFactoryRequest = glic.mojom.FrePageHandlerFactoryPendingReceiver;


// Interface: FrePageHandler
mojo.internal.Struct(
    glic.mojom.FrePageHandler_AcceptFre_ParamsSpec, 'glic.mojom.FrePageHandler_AcceptFre_Params', [
    ],
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    glic.mojom.FrePageHandler_RejectFre_ParamsSpec, 'glic.mojom.FrePageHandler_RejectFre_Params', [
    ],
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    glic.mojom.FrePageHandler_DismissFre_ParamsSpec, 'glic.mojom.FrePageHandler_DismissFre_Params', [
      mojo.internal.StructField('panel', 0, 0, glic.mojom.FreWebUiStateSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    glic.mojom.FrePageHandler_FreReloaded_ParamsSpec, 'glic.mojom.FrePageHandler_FreReloaded_Params', [
    ],
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    glic.mojom.FrePageHandler_PrepareForClient_ParamsSpec, 'glic.mojom.FrePageHandler_PrepareForClient_Params', [
    ],
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    glic.mojom.FrePageHandler_PrepareForClient_ResponseParamsSpec, 'glic.mojom.FrePageHandler_PrepareForClient_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    glic.mojom.FrePageHandler_ValidateAndOpenLinkInNewTab_ParamsSpec, 'glic.mojom.FrePageHandler_ValidateAndOpenLinkInNewTab_Params', [
      mojo.internal.StructField('url', 0, 0, url.mojom.UrlSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    glic.mojom.FrePageHandler_WebUiStateChanged_ParamsSpec, 'glic.mojom.FrePageHandler_WebUiStateChanged_Params', [
      mojo.internal.StructField('new_state', 0, 0, glic.mojom.FreWebUiStateSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    glic.mojom.FrePageHandler_ExceededTimeoutError_ParamsSpec, 'glic.mojom.FrePageHandler_ExceededTimeoutError_Params', [
    ],
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    glic.mojom.FrePageHandler_LogWebUiLoadComplete_ParamsSpec, 'glic.mojom.FrePageHandler_LogWebUiLoadComplete_Params', [
    ],
    [{version: 0, packedSize: 8}]);

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

glic.mojom.FrePageHandlerPtr = glic.mojom.FrePageHandlerRemote;
glic.mojom.FrePageHandlerRequest = glic.mojom.FrePageHandlerPendingReceiver;

