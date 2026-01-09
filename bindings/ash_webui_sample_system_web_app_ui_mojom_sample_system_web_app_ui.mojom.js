// Auto-generated MojoJS binding
// Source: chromium_src/ash/webui/sample_system_web_app_ui/mojom/sample_system_web_app_ui.mojom
// Module: ash.mojom.sample_swa

'use strict';

// Module namespace
var ash = ash || {};
ash.mojom = ash.mojom || {};
ash.mojom.sample_swa = ash.mojom.sample_swa || {};


// Interface: PageHandlerFactory
ash.mojom.sample_swa.PageHandlerFactory = {};

ash.mojom.sample_swa.PageHandlerFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.mojom.sample_swa.PageHandlerFactoryRemote = class {
  static get $interfaceName() {
    return 'ash.mojom.sample_swa.PageHandlerFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.mojom.sample_swa.PageHandlerFactoryPendingReceiver,
      handle);
    this.$ = new ash.mojom.sample_swa.PageHandlerFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.mojom.sample_swa.PageHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createPageHandler(handler, page) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.mojom.sample_swa.PageHandlerFactory_CreatePageHandler_ParamsSpec.$,
      null,
      [handler, page]);
  }

};

ash.mojom.sample_swa.PageHandlerFactory.getRemote = function() {
  let remote = new ash.mojom.sample_swa.PageHandlerFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.mojom.sample_swa.PageHandlerFactory',
    'context');
  return remote.$;
};

// ParamsSpec for CreatePageHandler
ash.mojom.sample_swa.PageHandlerFactory_CreatePageHandler_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.mojom.sample_swa.PageHandlerFactory.CreatePageHandler_Params',
      packedSize: 24,
      fields: [
        { name: 'handler', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'page', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
ash.mojom.sample_swa.PageHandlerFactoryPtr = ash.mojom.sample_swa.PageHandlerFactoryRemote;
ash.mojom.sample_swa.PageHandlerFactoryRequest = ash.mojom.sample_swa.PageHandlerFactoryPendingReceiver;


// Interface: PageHandler
ash.mojom.sample_swa.PageHandler = {};

ash.mojom.sample_swa.PageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.mojom.sample_swa.PageHandlerRemote = class {
  static get $interfaceName() {
    return 'ash.mojom.sample_swa.PageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.mojom.sample_swa.PageHandlerPendingReceiver,
      handle);
    this.$ = new ash.mojom.sample_swa.PageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.mojom.sample_swa.PageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getPreferences() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.mojom.sample_swa.PageHandler_GetPreferences_ParamsSpec.$,
      ash.mojom.sample_swa.PageHandler_GetPreferences_ResponseParamsSpec.$,
      []);
  }

  send(message) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.mojom.sample_swa.PageHandler_Send_ParamsSpec.$,
      null,
      [message]);
  }

  doSomething() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.mojom.sample_swa.PageHandler_DoSomething_ParamsSpec.$,
      null,
      []);
  }

};

ash.mojom.sample_swa.PageHandler.getRemote = function() {
  let remote = new ash.mojom.sample_swa.PageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.mojom.sample_swa.PageHandler',
    'context');
  return remote.$;
};

// ParamsSpec for GetPreferences
ash.mojom.sample_swa.PageHandler_GetPreferences_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.mojom.sample_swa.PageHandler.GetPreferences_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

ash.mojom.sample_swa.PageHandler_GetPreferences_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.mojom.sample_swa.PageHandler.GetPreferences_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'preferences', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for Send
ash.mojom.sample_swa.PageHandler_Send_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.mojom.sample_swa.PageHandler.Send_Params',
      packedSize: 16,
      fields: [
        { name: 'message', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for DoSomething
ash.mojom.sample_swa.PageHandler_DoSomething_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.mojom.sample_swa.PageHandler.DoSomething_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
ash.mojom.sample_swa.PageHandlerPtr = ash.mojom.sample_swa.PageHandlerRemote;
ash.mojom.sample_swa.PageHandlerRequest = ash.mojom.sample_swa.PageHandlerPendingReceiver;


// Interface: Page
ash.mojom.sample_swa.Page = {};

ash.mojom.sample_swa.PagePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.mojom.sample_swa.PageRemote = class {
  static get $interfaceName() {
    return 'ash.mojom.sample_swa.Page';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.mojom.sample_swa.PagePendingReceiver,
      handle);
    this.$ = new ash.mojom.sample_swa.PageRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.mojom.sample_swa.PageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onEventOccurred(name) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.mojom.sample_swa.Page_OnEventOccurred_ParamsSpec.$,
      null,
      [name]);
  }

  createParentPage(child_untrusted_page, parent_trusted_page) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.mojom.sample_swa.Page_CreateParentPage_ParamsSpec.$,
      null,
      [child_untrusted_page, parent_trusted_page]);
  }

};

ash.mojom.sample_swa.Page.getRemote = function() {
  let remote = new ash.mojom.sample_swa.PageRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.mojom.sample_swa.Page',
    'context');
  return remote.$;
};

// ParamsSpec for OnEventOccurred
ash.mojom.sample_swa.Page_OnEventOccurred_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.mojom.sample_swa.Page.OnEventOccurred_Params',
      packedSize: 16,
      fields: [
        { name: 'name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for CreateParentPage
ash.mojom.sample_swa.Page_CreateParentPage_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.mojom.sample_swa.Page.CreateParentPage_Params',
      packedSize: 24,
      fields: [
        { name: 'child_untrusted_page', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'parent_trusted_page', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
ash.mojom.sample_swa.PagePtr = ash.mojom.sample_swa.PageRemote;
ash.mojom.sample_swa.PageRequest = ash.mojom.sample_swa.PagePendingReceiver;

