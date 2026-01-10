// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/new_tab_page/modules/v2/calendar/google_calendar.mojom
// Module: ntp.calendar.mojom

'use strict';

// Module namespace
var ntp = ntp || {};
ntp.calendar = ntp.calendar || {};
ntp.calendar.calendar.mojom = ntp.calendar.calendar.mojom || {};


// Interface: GoogleCalendarPageHandler
ntp.calendar.calendar.mojom.mojom.GoogleCalendarPageHandler = {};

ntp.calendar.calendar.mojom.mojom.GoogleCalendarPageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ntp.calendar.calendar.mojom.mojom.GoogleCalendarPageHandlerRemote = class {
  static get $interfaceName() {
    return 'ntp.calendar.mojom.GoogleCalendarPageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ntp.calendar.calendar.mojom.mojom.GoogleCalendarPageHandlerPendingReceiver,
      handle);
    this.$ = new ntp.calendar.calendar.mojom.mojom.GoogleCalendarPageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ntp.calendar.calendar.mojom.mojom.GoogleCalendarPageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getEvents() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ntp.calendar.calendar.mojom.mojom.GoogleCalendarPageHandler_GetEvents_ParamsSpec,
      ntp.calendar.calendar.mojom.mojom.GoogleCalendarPageHandler_GetEvents_ResponseParamsSpec,
      []);
  }

  dismissModule() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ntp.calendar.calendar.mojom.mojom.GoogleCalendarPageHandler_DismissModule_ParamsSpec,
      null,
      []);
  }

  restoreModule() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ntp.calendar.calendar.mojom.mojom.GoogleCalendarPageHandler_RestoreModule_ParamsSpec,
      null,
      []);
  }

};

ntp.calendar.calendar.mojom.mojom.GoogleCalendarPageHandler.getRemote = function() {
  let remote = new ntp.calendar.calendar.mojom.mojom.GoogleCalendarPageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ntp.calendar.mojom.GoogleCalendarPageHandler',
    'context');
  return remote.$;
};

// ParamsSpec for GetEvents
ntp.calendar.calendar.mojom.mojom.GoogleCalendarPageHandler_GetEvents_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ntp.calendar.mojom.GoogleCalendarPageHandler.GetEvents_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ntp.calendar.calendar.mojom.mojom.GoogleCalendarPageHandler_GetEvents_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ntp.calendar.mojom.GoogleCalendarPageHandler.GetEvents_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'events', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(ntp.calendar.mojom.CalendarEventSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for DismissModule
ntp.calendar.calendar.mojom.mojom.GoogleCalendarPageHandler_DismissModule_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ntp.calendar.mojom.GoogleCalendarPageHandler.DismissModule_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for RestoreModule
ntp.calendar.calendar.mojom.mojom.GoogleCalendarPageHandler_RestoreModule_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ntp.calendar.mojom.GoogleCalendarPageHandler.RestoreModule_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Legacy compatibility
ntp.calendar.calendar.mojom.mojom.GoogleCalendarPageHandlerPtr = ntp.calendar.calendar.mojom.mojom.GoogleCalendarPageHandlerRemote;
ntp.calendar.calendar.mojom.mojom.GoogleCalendarPageHandlerRequest = ntp.calendar.calendar.mojom.mojom.GoogleCalendarPageHandlerPendingReceiver;

