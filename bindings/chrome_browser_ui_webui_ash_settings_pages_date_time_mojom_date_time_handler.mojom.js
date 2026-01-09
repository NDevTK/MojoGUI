// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/ash/settings/pages/date_time/mojom/date_time_handler.mojom
// Module: ash.settings.date_time.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.settings = ash.settings || {};
ash.settings.date_time = ash.settings.date_time || {};
ash.settings.date_time.mojom = ash.settings.date_time.mojom || {};


// Interface: PageHandlerFactory
ash.settings.date_time.mojom.PageHandlerFactory = {};

ash.settings.date_time.mojom.PageHandlerFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.settings.date_time.mojom.PageHandlerFactoryRemote = class {
  static get $interfaceName() {
    return 'ash.settings.date_time.mojom.PageHandlerFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.settings.date_time.mojom.PageHandlerFactoryPendingReceiver,
      handle);
    this.$ = new ash.settings.date_time.mojom.PageHandlerFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.settings.date_time.mojom.PageHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createPageHandler(page, handler) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.settings.date_time.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec,
      null,
      [page, handler]);
  }

};

ash.settings.date_time.mojom.PageHandlerFactory.getRemote = function() {
  let remote = new ash.settings.date_time.mojom.PageHandlerFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.settings.date_time.mojom.PageHandlerFactory',
    'context');
  return remote.$;
};

// ParamsSpec for CreatePageHandler
ash.settings.date_time.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.date_time.mojom.PageHandlerFactory.CreatePageHandler_Params',
      packedSize: 16,
      fields: [
        { name: 'page', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
        { name: 'handler', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
ash.settings.date_time.mojom.PageHandlerFactoryPtr = ash.settings.date_time.mojom.PageHandlerFactoryRemote;
ash.settings.date_time.mojom.PageHandlerFactoryRequest = ash.settings.date_time.mojom.PageHandlerFactoryPendingReceiver;


// Interface: PageHandler
ash.settings.date_time.mojom.PageHandler = {};

ash.settings.date_time.mojom.PageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.settings.date_time.mojom.PageHandlerRemote = class {
  static get $interfaceName() {
    return 'ash.settings.date_time.mojom.PageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.settings.date_time.mojom.PageHandlerPendingReceiver,
      handle);
    this.$ = new ash.settings.date_time.mojom.PageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.settings.date_time.mojom.PageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  showParentAccessForTimezone() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.settings.date_time.mojom.PageHandler_ShowParentAccessForTimezone_ParamsSpec,
      null,
      []);
  }

  getTimezones() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.settings.date_time.mojom.PageHandler_GetTimezones_ParamsSpec,
      ash.settings.date_time.mojom.PageHandler_GetTimezones_ResponseParamsSpec,
      []);
  }

  showSetDateTimeUI() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.settings.date_time.mojom.PageHandler_ShowSetDateTimeUI_ParamsSpec,
      null,
      []);
  }

};

ash.settings.date_time.mojom.PageHandler.getRemote = function() {
  let remote = new ash.settings.date_time.mojom.PageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.settings.date_time.mojom.PageHandler',
    'context');
  return remote.$;
};

// ParamsSpec for ShowParentAccessForTimezone
ash.settings.date_time.mojom.PageHandler_ShowParentAccessForTimezone_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.date_time.mojom.PageHandler.ShowParentAccessForTimezone_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetTimezones
ash.settings.date_time.mojom.PageHandler_GetTimezones_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.date_time.mojom.PageHandler.GetTimezones_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

ash.settings.date_time.mojom.PageHandler_GetTimezones_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.date_time.mojom.PageHandler.GetTimezones_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'timezones', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ShowSetDateTimeUI
ash.settings.date_time.mojom.PageHandler_ShowSetDateTimeUI_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.date_time.mojom.PageHandler.ShowSetDateTimeUI_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
ash.settings.date_time.mojom.PageHandlerPtr = ash.settings.date_time.mojom.PageHandlerRemote;
ash.settings.date_time.mojom.PageHandlerRequest = ash.settings.date_time.mojom.PageHandlerPendingReceiver;


// Interface: Page
ash.settings.date_time.mojom.Page = {};

ash.settings.date_time.mojom.PagePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.settings.date_time.mojom.PageRemote = class {
  static get $interfaceName() {
    return 'ash.settings.date_time.mojom.Page';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.settings.date_time.mojom.PagePendingReceiver,
      handle);
    this.$ = new ash.settings.date_time.mojom.PageRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.settings.date_time.mojom.PageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onSystemClockCanSetTimeChanged(is_allowed) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.settings.date_time.mojom.Page_OnSystemClockCanSetTimeChanged_ParamsSpec,
      null,
      [is_allowed]);
  }

  onParentAccessValidationComplete(success) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.settings.date_time.mojom.Page_OnParentAccessValidationComplete_ParamsSpec,
      null,
      [success]);
  }

};

ash.settings.date_time.mojom.Page.getRemote = function() {
  let remote = new ash.settings.date_time.mojom.PageRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.settings.date_time.mojom.Page',
    'context');
  return remote.$;
};

// ParamsSpec for OnSystemClockCanSetTimeChanged
ash.settings.date_time.mojom.Page_OnSystemClockCanSetTimeChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.date_time.mojom.Page.OnSystemClockCanSetTimeChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'is_allowed', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnParentAccessValidationComplete
ash.settings.date_time.mojom.Page_OnParentAccessValidationComplete_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.date_time.mojom.Page.OnParentAccessValidationComplete_Params',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
ash.settings.date_time.mojom.PagePtr = ash.settings.date_time.mojom.PageRemote;
ash.settings.date_time.mojom.PageRequest = ash.settings.date_time.mojom.PagePendingReceiver;

