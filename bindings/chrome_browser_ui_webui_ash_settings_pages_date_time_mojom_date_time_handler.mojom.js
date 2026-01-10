// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/ash/settings/pages/date_time/mojom/date_time_handler.mojom
// Module: ash.settings.date_time.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.settings = ash.settings || {};
ash.settings.settings.date_time = ash.settings.settings.date_time || {};
ash.settings.settings.date_time.date_time.mojom = ash.settings.settings.date_time.date_time.mojom || {};


// Interface: PageHandlerFactory
ash.settings.settings.date_time.date_time.mojom.mojom.PageHandlerFactory = {};

ash.settings.settings.date_time.date_time.mojom.mojom.PageHandlerFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.settings.settings.date_time.date_time.mojom.mojom.PageHandlerFactoryRemote = class {
  static get $interfaceName() {
    return 'ash.settings.date_time.mojom.PageHandlerFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.settings.settings.date_time.date_time.mojom.mojom.PageHandlerFactoryPendingReceiver,
      handle);
    this.$ = new ash.settings.settings.date_time.date_time.mojom.mojom.PageHandlerFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.settings.settings.date_time.date_time.mojom.mojom.PageHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createPageHandler(page, handler) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.settings.settings.date_time.date_time.mojom.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec,
      null,
      [page, handler]);
  }

};

ash.settings.settings.date_time.date_time.mojom.mojom.PageHandlerFactory.getRemote = function() {
  let remote = new ash.settings.settings.date_time.date_time.mojom.mojom.PageHandlerFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.settings.date_time.mojom.PageHandlerFactory',
    'context');
  return remote.$;
};

// ParamsSpec for CreatePageHandler
ash.settings.settings.date_time.date_time.mojom.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.date_time.mojom.PageHandlerFactory.CreatePageHandler_Params',
      packedSize: 24,
      fields: [
        { name: 'page', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(ash.settings.date_time.mojom.PageRemote), nullable: false, minVersion: 0 },
        { name: 'handler', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(ash.settings.date_time.mojom.PageHandlerRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
ash.settings.settings.date_time.date_time.mojom.mojom.PageHandlerFactoryPtr = ash.settings.settings.date_time.date_time.mojom.mojom.PageHandlerFactoryRemote;
ash.settings.settings.date_time.date_time.mojom.mojom.PageHandlerFactoryRequest = ash.settings.settings.date_time.date_time.mojom.mojom.PageHandlerFactoryPendingReceiver;


// Interface: PageHandler
ash.settings.settings.date_time.date_time.mojom.mojom.PageHandler = {};

ash.settings.settings.date_time.date_time.mojom.mojom.PageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.settings.settings.date_time.date_time.mojom.mojom.PageHandlerRemote = class {
  static get $interfaceName() {
    return 'ash.settings.date_time.mojom.PageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.settings.settings.date_time.date_time.mojom.mojom.PageHandlerPendingReceiver,
      handle);
    this.$ = new ash.settings.settings.date_time.date_time.mojom.mojom.PageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.settings.settings.date_time.date_time.mojom.mojom.PageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  showParentAccessForTimezone() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.settings.settings.date_time.date_time.mojom.mojom.PageHandler_ShowParentAccessForTimezone_ParamsSpec,
      null,
      []);
  }

  getTimezones() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.settings.settings.date_time.date_time.mojom.mojom.PageHandler_GetTimezones_ParamsSpec,
      ash.settings.settings.date_time.date_time.mojom.mojom.PageHandler_GetTimezones_ResponseParamsSpec,
      []);
  }

  showSetDateTimeUI() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.settings.settings.date_time.date_time.mojom.mojom.PageHandler_ShowSetDateTimeUI_ParamsSpec,
      null,
      []);
  }

};

ash.settings.settings.date_time.date_time.mojom.mojom.PageHandler.getRemote = function() {
  let remote = new ash.settings.settings.date_time.date_time.mojom.mojom.PageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.settings.date_time.mojom.PageHandler',
    'context');
  return remote.$;
};

// ParamsSpec for ShowParentAccessForTimezone
ash.settings.settings.date_time.date_time.mojom.mojom.PageHandler_ShowParentAccessForTimezone_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.date_time.mojom.PageHandler.ShowParentAccessForTimezone_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for GetTimezones
ash.settings.settings.date_time.date_time.mojom.mojom.PageHandler_GetTimezones_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.date_time.mojom.PageHandler.GetTimezones_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.settings.settings.date_time.date_time.mojom.mojom.PageHandler_GetTimezones_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.date_time.mojom.PageHandler.GetTimezones_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'timezones', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Array(mojo.internal.Pointer, false), false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ShowSetDateTimeUI
ash.settings.settings.date_time.date_time.mojom.mojom.PageHandler_ShowSetDateTimeUI_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.date_time.mojom.PageHandler.ShowSetDateTimeUI_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Legacy compatibility
ash.settings.settings.date_time.date_time.mojom.mojom.PageHandlerPtr = ash.settings.settings.date_time.date_time.mojom.mojom.PageHandlerRemote;
ash.settings.settings.date_time.date_time.mojom.mojom.PageHandlerRequest = ash.settings.settings.date_time.date_time.mojom.mojom.PageHandlerPendingReceiver;


// Interface: Page
ash.settings.settings.date_time.date_time.mojom.mojom.Page = {};

ash.settings.settings.date_time.date_time.mojom.mojom.PagePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.settings.settings.date_time.date_time.mojom.mojom.PageRemote = class {
  static get $interfaceName() {
    return 'ash.settings.date_time.mojom.Page';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.settings.settings.date_time.date_time.mojom.mojom.PagePendingReceiver,
      handle);
    this.$ = new ash.settings.settings.date_time.date_time.mojom.mojom.PageRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.settings.settings.date_time.date_time.mojom.mojom.PageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onSystemClockCanSetTimeChanged(is_allowed) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.settings.settings.date_time.date_time.mojom.mojom.Page_OnSystemClockCanSetTimeChanged_ParamsSpec,
      null,
      [is_allowed]);
  }

  onParentAccessValidationComplete(success) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.settings.settings.date_time.date_time.mojom.mojom.Page_OnParentAccessValidationComplete_ParamsSpec,
      null,
      [success]);
  }

};

ash.settings.settings.date_time.date_time.mojom.mojom.Page.getRemote = function() {
  let remote = new ash.settings.settings.date_time.date_time.mojom.mojom.PageRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.settings.date_time.mojom.Page',
    'context');
  return remote.$;
};

// ParamsSpec for OnSystemClockCanSetTimeChanged
ash.settings.settings.date_time.date_time.mojom.mojom.Page_OnSystemClockCanSetTimeChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.date_time.mojom.Page.OnSystemClockCanSetTimeChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'is_allowed', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnParentAccessValidationComplete
ash.settings.settings.date_time.date_time.mojom.mojom.Page_OnParentAccessValidationComplete_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.date_time.mojom.Page.OnParentAccessValidationComplete_Params',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
ash.settings.settings.date_time.date_time.mojom.mojom.PagePtr = ash.settings.settings.date_time.date_time.mojom.mojom.PageRemote;
ash.settings.settings.date_time.date_time.mojom.mojom.PageRequest = ash.settings.settings.date_time.date_time.mojom.mojom.PagePendingReceiver;

