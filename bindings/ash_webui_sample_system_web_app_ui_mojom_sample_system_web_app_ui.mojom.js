// Auto-generated MojoJS binding
// Source: chromium_src/ash/webui/sample_system_web_app_ui/mojom/sample_system_web_app_ui.mojom
// Module: ash.mojom.sample_swa

'use strict';

// Module namespace
var ash = ash || {};
ash.mojom = ash.mojom || {};
ash.mojom.sample_swa = ash.mojom.sample_swa || {};
var ash = ash || {};

ash.mojom.sample_swa.PreferencesSpec = { $: {} };
ash.mojom.sample_swa.PageHandlerFactory = {};
ash.mojom.sample_swa.PageHandlerFactory.$interfaceName = 'ash.mojom.sample_swa.PageHandlerFactory';
ash.mojom.sample_swa.PageHandlerFactory_CreatePageHandler_ParamsSpec = { $: {} };
ash.mojom.sample_swa.PageHandler = {};
ash.mojom.sample_swa.PageHandler.$interfaceName = 'ash.mojom.sample_swa.PageHandler';
ash.mojom.sample_swa.PageHandler_GetPreferences_ParamsSpec = { $: {} };
ash.mojom.sample_swa.PageHandler_GetPreferences_ResponseParamsSpec = { $: {} };
ash.mojom.sample_swa.PageHandler_Send_ParamsSpec = { $: {} };
ash.mojom.sample_swa.PageHandler_DoSomething_ParamsSpec = { $: {} };
ash.mojom.sample_swa.Page = {};
ash.mojom.sample_swa.Page.$interfaceName = 'ash.mojom.sample_swa.Page';
ash.mojom.sample_swa.Page_OnEventOccurred_ParamsSpec = { $: {} };
ash.mojom.sample_swa.Page_CreateParentPage_ParamsSpec = { $: {} };

// Struct: Preferences
mojo.internal.Struct(
    ash.mojom.sample_swa.PreferencesSpec, 'ash.mojom.sample_swa.Preferences', [
      mojo.internal.StructField('background', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('foreground', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: PageHandlerFactory
mojo.internal.Struct(
    ash.mojom.sample_swa.PageHandlerFactory_CreatePageHandler_ParamsSpec, 'ash.mojom.sample_swa.PageHandlerFactory_CreatePageHandler_Params', [
      mojo.internal.StructField('handler', 0, 0, mojo.internal.InterfaceRequest(ash.mojom.sample_swa.PageHandlerRemote), null, false, 0, undefined),
      mojo.internal.StructField('page', 8, 0, mojo.internal.InterfaceProxy(ash.mojom.sample_swa.PageRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

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
      ash.mojom.sample_swa.PageHandlerFactory_CreatePageHandler_ParamsSpec,
      null,
      [handler, page],
      false);
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

ash.mojom.sample_swa.PageHandlerFactoryPtr = ash.mojom.sample_swa.PageHandlerFactoryRemote;
ash.mojom.sample_swa.PageHandlerFactoryRequest = ash.mojom.sample_swa.PageHandlerFactoryPendingReceiver;


// Interface: PageHandler
mojo.internal.Struct(
    ash.mojom.sample_swa.PageHandler_GetPreferences_ParamsSpec, 'ash.mojom.sample_swa.PageHandler_GetPreferences_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.mojom.sample_swa.PageHandler_GetPreferences_ResponseParamsSpec, 'ash.mojom.sample_swa.PageHandler_GetPreferences_ResponseParams', [
      mojo.internal.StructField('preferences', 0, 0, ash.mojom.sample_swa.PreferencesSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.mojom.sample_swa.PageHandler_Send_ParamsSpec, 'ash.mojom.sample_swa.PageHandler_Send_Params', [
      mojo.internal.StructField('message', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.mojom.sample_swa.PageHandler_DoSomething_ParamsSpec, 'ash.mojom.sample_swa.PageHandler_DoSomething_Params', [
    ],
    [[0, 8]]);

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
      ash.mojom.sample_swa.PageHandler_GetPreferences_ParamsSpec,
      ash.mojom.sample_swa.PageHandler_GetPreferences_ResponseParamsSpec,
      [],
      false);
  }

  send(message) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.mojom.sample_swa.PageHandler_Send_ParamsSpec,
      null,
      [message],
      false);
  }

  doSomething() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.mojom.sample_swa.PageHandler_DoSomething_ParamsSpec,
      null,
      [],
      false);
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

ash.mojom.sample_swa.PageHandlerPtr = ash.mojom.sample_swa.PageHandlerRemote;
ash.mojom.sample_swa.PageHandlerRequest = ash.mojom.sample_swa.PageHandlerPendingReceiver;


// Interface: Page
mojo.internal.Struct(
    ash.mojom.sample_swa.Page_OnEventOccurred_ParamsSpec, 'ash.mojom.sample_swa.Page_OnEventOccurred_Params', [
      mojo.internal.StructField('name', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.mojom.sample_swa.Page_CreateParentPage_ParamsSpec, 'ash.mojom.sample_swa.Page_CreateParentPage_Params', [
      mojo.internal.StructField('child_untrusted_page', 0, 0, mojo.internal.InterfaceProxy(ash.mojom.sample_swa.ChildUntrustedPageRemote), null, false, 0, undefined),
      mojo.internal.StructField('parent_trusted_page', 8, 0, mojo.internal.InterfaceRequest(ash.mojom.sample_swa.ParentTrustedPageRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

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
      ash.mojom.sample_swa.Page_OnEventOccurred_ParamsSpec,
      null,
      [name],
      false);
  }

  createParentPage(child_untrusted_page, parent_trusted_page) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.mojom.sample_swa.Page_CreateParentPage_ParamsSpec,
      null,
      [child_untrusted_page, parent_trusted_page],
      false);
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

ash.mojom.sample_swa.PagePtr = ash.mojom.sample_swa.PageRemote;
ash.mojom.sample_swa.PageRequest = ash.mojom.sample_swa.PagePendingReceiver;

