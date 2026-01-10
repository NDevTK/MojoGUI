// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/new_tab_page/modules/v2/calendar/google_calendar.mojom
// Module: ntp.calendar.mojom

'use strict';

// Module namespace
var ntp = ntp || {};
ntp.calendar = ntp.calendar || {};
ntp.calendar.mojom = ntp.calendar.mojom || {};

ntp.calendar.mojom.GoogleCalendarPageHandler = {};
ntp.calendar.mojom.GoogleCalendarPageHandler.$interfaceName = 'ntp.calendar.mojom.GoogleCalendarPageHandler';
ntp.calendar.mojom.GoogleCalendarPageHandler_GetEvents_ParamsSpec = { $: {} };
ntp.calendar.mojom.GoogleCalendarPageHandler_GetEvents_ResponseParamsSpec = { $: {} };
ntp.calendar.mojom.GoogleCalendarPageHandler_DismissModule_ParamsSpec = { $: {} };
ntp.calendar.mojom.GoogleCalendarPageHandler_RestoreModule_ParamsSpec = { $: {} };

// Interface: GoogleCalendarPageHandler
mojo.internal.Struct(
    ntp.calendar.mojom.GoogleCalendarPageHandler_GetEvents_ParamsSpec, 'ntp.calendar.mojom.GoogleCalendarPageHandler_GetEvents_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ntp.calendar.mojom.GoogleCalendarPageHandler_GetEvents_ResponseParamsSpec, 'ntp.calendar.mojom.GoogleCalendarPageHandler_GetEvents_ResponseParams', [
      mojo.internal.StructField('events', 0, 0, mojo.internal.Array(ntp.calendar.mojom.CalendarEventSpec, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ntp.calendar.mojom.GoogleCalendarPageHandler_DismissModule_ParamsSpec, 'ntp.calendar.mojom.GoogleCalendarPageHandler_DismissModule_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ntp.calendar.mojom.GoogleCalendarPageHandler_RestoreModule_ParamsSpec, 'ntp.calendar.mojom.GoogleCalendarPageHandler_RestoreModule_Params', [
    ],
    [[0, 8]]);

ntp.calendar.mojom.GoogleCalendarPageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ntp.calendar.mojom.GoogleCalendarPageHandlerRemote = class {
  static get $interfaceName() {
    return 'ntp.calendar.mojom.GoogleCalendarPageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ntp.calendar.mojom.GoogleCalendarPageHandlerPendingReceiver,
      handle);
    this.$ = new ntp.calendar.mojom.GoogleCalendarPageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ntp.calendar.mojom.GoogleCalendarPageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getEvents() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ntp.calendar.mojom.GoogleCalendarPageHandler_GetEvents_ParamsSpec,
      ntp.calendar.mojom.GoogleCalendarPageHandler_GetEvents_ResponseParamsSpec,
      []);
  }

  dismissModule() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ntp.calendar.mojom.GoogleCalendarPageHandler_DismissModule_ParamsSpec,
      null,
      []);
  }

  restoreModule() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ntp.calendar.mojom.GoogleCalendarPageHandler_RestoreModule_ParamsSpec,
      null,
      []);
  }

};

ntp.calendar.mojom.GoogleCalendarPageHandler.getRemote = function() {
  let remote = new ntp.calendar.mojom.GoogleCalendarPageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ntp.calendar.mojom.GoogleCalendarPageHandler',
    'context');
  return remote.$;
};

ntp.calendar.mojom.GoogleCalendarPageHandlerPtr = ntp.calendar.mojom.GoogleCalendarPageHandlerRemote;
ntp.calendar.mojom.GoogleCalendarPageHandlerRequest = ntp.calendar.mojom.GoogleCalendarPageHandlerPendingReceiver;

