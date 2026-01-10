// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/ash/settings/pages/date_time/mojom/date_time_handler.mojom
// Module: ash.settings.date_time.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.settings = ash.settings || {};
ash.settings.date_time = ash.settings.date_time || {};
ash.settings.date_time.mojom = ash.settings.date_time.mojom || {};

ash.settings.date_time.mojom.PageHandlerFactory = {};
ash.settings.date_time.mojom.PageHandlerFactory.$interfaceName = 'ash.settings.date_time.mojom.PageHandlerFactory';
ash.settings.date_time.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec = { $: {} };
ash.settings.date_time.mojom.PageHandler = {};
ash.settings.date_time.mojom.PageHandler.$interfaceName = 'ash.settings.date_time.mojom.PageHandler';
ash.settings.date_time.mojom.PageHandler_ShowParentAccessForTimezone_ParamsSpec = { $: {} };
ash.settings.date_time.mojom.PageHandler_GetTimezones_ParamsSpec = { $: {} };
ash.settings.date_time.mojom.PageHandler_GetTimezones_ResponseParamsSpec = { $: {} };
ash.settings.date_time.mojom.PageHandler_ShowSetDateTimeUI_ParamsSpec = { $: {} };
ash.settings.date_time.mojom.Page = {};
ash.settings.date_time.mojom.Page.$interfaceName = 'ash.settings.date_time.mojom.Page';
ash.settings.date_time.mojom.Page_OnSystemClockCanSetTimeChanged_ParamsSpec = { $: {} };
ash.settings.date_time.mojom.Page_OnParentAccessValidationComplete_ParamsSpec = { $: {} };

// Interface: PageHandlerFactory
mojo.internal.Struct(
    ash.settings.date_time.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec, 'ash.settings.date_time.mojom.PageHandlerFactory_CreatePageHandler_Params', [
      mojo.internal.StructField('page', 0, 0, mojo.internal.InterfaceProxy(ash.settings.date_time.mojom.PageRemote), null, false, 0, undefined),
      mojo.internal.StructField('handler', 8, 0, mojo.internal.InterfaceRequest(ash.settings.date_time.mojom.PageHandlerRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

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
      [page, handler],
      false);
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

ash.settings.date_time.mojom.PageHandlerFactoryReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(handle);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = ash.settings.date_time.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec.$.decode(message.payload);
          const result = this.impl.createPageHandler(params.page, params.handler);
          break;
        }
      }
    });
  }
};

ash.settings.date_time.mojom.PageHandlerFactoryReceiver = ash.settings.date_time.mojom.PageHandlerFactoryReceiver;

ash.settings.date_time.mojom.PageHandlerFactoryPtr = ash.settings.date_time.mojom.PageHandlerFactoryRemote;
ash.settings.date_time.mojom.PageHandlerFactoryRequest = ash.settings.date_time.mojom.PageHandlerFactoryPendingReceiver;


// Interface: PageHandler
mojo.internal.Struct(
    ash.settings.date_time.mojom.PageHandler_ShowParentAccessForTimezone_ParamsSpec, 'ash.settings.date_time.mojom.PageHandler_ShowParentAccessForTimezone_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.settings.date_time.mojom.PageHandler_GetTimezones_ParamsSpec, 'ash.settings.date_time.mojom.PageHandler_GetTimezones_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.settings.date_time.mojom.PageHandler_GetTimezones_ResponseParamsSpec, 'ash.settings.date_time.mojom.PageHandler_GetTimezones_ResponseParams', [
      mojo.internal.StructField('timezones', 0, 0, mojo.internal.Array(mojo.internal.Array(mojo.internal.String, false), false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.settings.date_time.mojom.PageHandler_ShowSetDateTimeUI_ParamsSpec, 'ash.settings.date_time.mojom.PageHandler_ShowSetDateTimeUI_Params', [
    ],
    [[0, 8]]);

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
      [],
      false);
  }

  getTimezones() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.settings.date_time.mojom.PageHandler_GetTimezones_ParamsSpec,
      ash.settings.date_time.mojom.PageHandler_GetTimezones_ResponseParamsSpec,
      [],
      false);
  }

  showSetDateTimeUI() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.settings.date_time.mojom.PageHandler_ShowSetDateTimeUI_ParamsSpec,
      null,
      [],
      false);
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

ash.settings.date_time.mojom.PageHandlerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(handle);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = ash.settings.date_time.mojom.PageHandler_ShowParentAccessForTimezone_ParamsSpec.$.decode(message.payload);
          const result = this.impl.showParentAccessForTimezone();
          break;
        }
        case 1: {
          const params = ash.settings.date_time.mojom.PageHandler_GetTimezones_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getTimezones();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(
                this.endpoint, header.requestId, ash.settings.date_time.mojom.PageHandler_GetTimezones_ResponseParamsSpec);
               responder(response);
            }});
          }
          break;
        }
        case 2: {
          const params = ash.settings.date_time.mojom.PageHandler_ShowSetDateTimeUI_ParamsSpec.$.decode(message.payload);
          const result = this.impl.showSetDateTimeUI();
          break;
        }
      }
    });
  }
};

ash.settings.date_time.mojom.PageHandlerReceiver = ash.settings.date_time.mojom.PageHandlerReceiver;

ash.settings.date_time.mojom.PageHandlerPtr = ash.settings.date_time.mojom.PageHandlerRemote;
ash.settings.date_time.mojom.PageHandlerRequest = ash.settings.date_time.mojom.PageHandlerPendingReceiver;


// Interface: Page
mojo.internal.Struct(
    ash.settings.date_time.mojom.Page_OnSystemClockCanSetTimeChanged_ParamsSpec, 'ash.settings.date_time.mojom.Page_OnSystemClockCanSetTimeChanged_Params', [
      mojo.internal.StructField('is_allowed', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.settings.date_time.mojom.Page_OnParentAccessValidationComplete_ParamsSpec, 'ash.settings.date_time.mojom.Page_OnParentAccessValidationComplete_Params', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

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
      [is_allowed],
      false);
  }

  onParentAccessValidationComplete(success) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.settings.date_time.mojom.Page_OnParentAccessValidationComplete_ParamsSpec,
      null,
      [success],
      false);
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

ash.settings.date_time.mojom.PageReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(handle);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = ash.settings.date_time.mojom.Page_OnSystemClockCanSetTimeChanged_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onSystemClockCanSetTimeChanged(params.is_allowed);
          break;
        }
        case 1: {
          const params = ash.settings.date_time.mojom.Page_OnParentAccessValidationComplete_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onParentAccessValidationComplete(params.success);
          break;
        }
      }
    });
  }
};

ash.settings.date_time.mojom.PageReceiver = ash.settings.date_time.mojom.PageReceiver;

ash.settings.date_time.mojom.PagePtr = ash.settings.date_time.mojom.PageRemote;
ash.settings.date_time.mojom.PageRequest = ash.settings.date_time.mojom.PagePendingReceiver;

