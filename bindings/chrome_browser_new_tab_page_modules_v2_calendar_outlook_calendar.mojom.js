// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/new_tab_page/modules/v2/calendar/outlook_calendar.mojom
// Module: ntp.calendar.mojom

'use strict';

// Module namespace
var ntp = ntp || {};
ntp.calendar = ntp.calendar || {};
ntp.calendar.mojom = ntp.calendar.mojom || {};

ntp.calendar.mojom.OutlookCalendarPageHandler = {};
ntp.calendar.mojom.OutlookCalendarPageHandler.$interfaceName = 'ntp.calendar.mojom.OutlookCalendarPageHandler';
ntp.calendar.mojom.OutlookCalendarPageHandler_GetEvents_ParamsSpec = { $: {} };
ntp.calendar.mojom.OutlookCalendarPageHandler_GetEvents_ResponseParamsSpec = { $: {} };
ntp.calendar.mojom.OutlookCalendarPageHandler_DismissModule_ParamsSpec = { $: {} };
ntp.calendar.mojom.OutlookCalendarPageHandler_RestoreModule_ParamsSpec = { $: {} };

// Interface: OutlookCalendarPageHandler
mojo.internal.Struct(
    ntp.calendar.mojom.OutlookCalendarPageHandler_GetEvents_ParamsSpec, 'ntp.calendar.mojom.OutlookCalendarPageHandler_GetEvents_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ntp.calendar.mojom.OutlookCalendarPageHandler_GetEvents_ResponseParamsSpec, 'ntp.calendar.mojom.OutlookCalendarPageHandler_GetEvents_ResponseParams', [
      mojo.internal.StructField('events', 0, 0, mojo.internal.Array(ntp.calendar.mojom.CalendarEventSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ntp.calendar.mojom.OutlookCalendarPageHandler_DismissModule_ParamsSpec, 'ntp.calendar.mojom.OutlookCalendarPageHandler_DismissModule_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ntp.calendar.mojom.OutlookCalendarPageHandler_RestoreModule_ParamsSpec, 'ntp.calendar.mojom.OutlookCalendarPageHandler_RestoreModule_Params', [
    ],
    [[0, 8]]);

ntp.calendar.mojom.OutlookCalendarPageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ntp.calendar.mojom.OutlookCalendarPageHandlerRemote = class {
  static get $interfaceName() {
    return 'ntp.calendar.mojom.OutlookCalendarPageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ntp.calendar.mojom.OutlookCalendarPageHandlerPendingReceiver,
      handle);
    this.$ = new ntp.calendar.mojom.OutlookCalendarPageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ntp.calendar.mojom.OutlookCalendarPageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getEvents() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ntp.calendar.mojom.OutlookCalendarPageHandler_GetEvents_ParamsSpec,
      ntp.calendar.mojom.OutlookCalendarPageHandler_GetEvents_ResponseParamsSpec,
      [],
      false);
  }

  dismissModule() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ntp.calendar.mojom.OutlookCalendarPageHandler_DismissModule_ParamsSpec,
      null,
      [],
      false);
  }

  restoreModule() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ntp.calendar.mojom.OutlookCalendarPageHandler_RestoreModule_ParamsSpec,
      null,
      [],
      false);
  }

};

ntp.calendar.mojom.OutlookCalendarPageHandler.getRemote = function() {
  let remote = new ntp.calendar.mojom.OutlookCalendarPageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ntp.calendar.mojom.OutlookCalendarPageHandler',
    'context');
  return remote.$;
};

ntp.calendar.mojom.OutlookCalendarPageHandlerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (message) => {
      const header = message.header;
      if (!header) return;
      switch (header.ordinal) {
        case 0: {
          const params = ntp.calendar.mojom.OutlookCalendarPageHandler_GetEvents_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getEvents();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ntp.calendar.mojom.OutlookCalendarPageHandler_GetEvents_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const params = ntp.calendar.mojom.OutlookCalendarPageHandler_DismissModule_ParamsSpec.$.decode(message.payload);
          const result = this.impl.dismissModule();
          break;
        }
        case 2: {
          const params = ntp.calendar.mojom.OutlookCalendarPageHandler_RestoreModule_ParamsSpec.$.decode(message.payload);
          const result = this.impl.restoreModule();
          break;
        }
      }
    }});
  }
};

ntp.calendar.mojom.OutlookCalendarPageHandlerReceiver = ntp.calendar.mojom.OutlookCalendarPageHandlerReceiver;

ntp.calendar.mojom.OutlookCalendarPageHandlerPtr = ntp.calendar.mojom.OutlookCalendarPageHandlerRemote;
ntp.calendar.mojom.OutlookCalendarPageHandlerRequest = ntp.calendar.mojom.OutlookCalendarPageHandlerPendingReceiver;

