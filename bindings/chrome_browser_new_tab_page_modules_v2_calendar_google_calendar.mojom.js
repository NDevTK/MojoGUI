// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/new_tab_page/modules/v2/calendar/google_calendar.mojom
// Module: ntp.calendar.mojom

'use strict';

// Module namespace
var ntp = ntp || {};
ntp.calendar = ntp.calendar || {};
ntp.calendar.mojom = ntp.calendar.mojom || {};


// Interface: GoogleCalendarPageHandler
ntp.calendar.mojom.GoogleCalendarPageHandler = {};

ntp.calendar.mojom.GoogleCalendarPageHandler_GetEvents_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ntp.calendar.mojom.GoogleCalendarPageHandler_GetEvents_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ntp.calendar.mojom.GoogleCalendarPageHandler_DismissModule_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ntp.calendar.mojom.GoogleCalendarPageHandler_DismissModule_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ntp.calendar.mojom.GoogleCalendarPageHandler_RestoreModule_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ntp.calendar.mojom.GoogleCalendarPageHandler_RestoreModule_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

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

// ParamsSpec for GetEvents
ntp.calendar.mojom.GoogleCalendarPageHandler_GetEvents_ParamsSpec = {
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

ntp.calendar.mojom.GoogleCalendarPageHandler_GetEvents_ResponseParamsSpec = {
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
ntp.calendar.mojom.GoogleCalendarPageHandler_DismissModule_ParamsSpec = {
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
ntp.calendar.mojom.GoogleCalendarPageHandler_RestoreModule_ParamsSpec = {
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
ntp.calendar.mojom.GoogleCalendarPageHandlerPtr = ntp.calendar.mojom.GoogleCalendarPageHandlerRemote;
ntp.calendar.mojom.GoogleCalendarPageHandlerRequest = ntp.calendar.mojom.GoogleCalendarPageHandlerPendingReceiver;

