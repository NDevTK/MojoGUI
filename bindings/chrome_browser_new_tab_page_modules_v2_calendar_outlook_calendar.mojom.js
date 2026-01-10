// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/new_tab_page/modules/v2/calendar/outlook_calendar.mojom
// Module: ntp.calendar.mojom

'use strict';

// Module namespace
var ntp = ntp || {};
ntp.calendar = ntp.calendar || {};
ntp.calendar.calendar.mojom = ntp.calendar.calendar.mojom || {};


// Interface: OutlookCalendarPageHandler
ntp.calendar.calendar.mojom.mojom.OutlookCalendarPageHandler = {};

ntp.calendar.calendar.mojom.mojom.OutlookCalendarPageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ntp.calendar.calendar.mojom.mojom.OutlookCalendarPageHandlerRemote = class {
  static get $interfaceName() {
    return 'ntp.calendar.mojom.OutlookCalendarPageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ntp.calendar.calendar.mojom.mojom.OutlookCalendarPageHandlerPendingReceiver,
      handle);
    this.$ = new ntp.calendar.calendar.mojom.mojom.OutlookCalendarPageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ntp.calendar.calendar.mojom.mojom.OutlookCalendarPageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getEvents() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ntp.calendar.calendar.mojom.mojom.OutlookCalendarPageHandler_GetEvents_ParamsSpec,
      ntp.calendar.calendar.mojom.mojom.OutlookCalendarPageHandler_GetEvents_ResponseParamsSpec,
      []);
  }

  dismissModule() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ntp.calendar.calendar.mojom.mojom.OutlookCalendarPageHandler_DismissModule_ParamsSpec,
      null,
      []);
  }

  restoreModule() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ntp.calendar.calendar.mojom.mojom.OutlookCalendarPageHandler_RestoreModule_ParamsSpec,
      null,
      []);
  }

};

ntp.calendar.calendar.mojom.mojom.OutlookCalendarPageHandler.getRemote = function() {
  let remote = new ntp.calendar.calendar.mojom.mojom.OutlookCalendarPageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ntp.calendar.mojom.OutlookCalendarPageHandler',
    'context');
  return remote.$;
};

// ParamsSpec for GetEvents
ntp.calendar.calendar.mojom.mojom.OutlookCalendarPageHandler_GetEvents_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ntp.calendar.mojom.OutlookCalendarPageHandler.GetEvents_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ntp.calendar.calendar.mojom.mojom.OutlookCalendarPageHandler_GetEvents_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ntp.calendar.mojom.OutlookCalendarPageHandler.GetEvents_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'events', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(ntp.calendar.mojom.CalendarEventSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for DismissModule
ntp.calendar.calendar.mojom.mojom.OutlookCalendarPageHandler_DismissModule_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ntp.calendar.mojom.OutlookCalendarPageHandler.DismissModule_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for RestoreModule
ntp.calendar.calendar.mojom.mojom.OutlookCalendarPageHandler_RestoreModule_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ntp.calendar.mojom.OutlookCalendarPageHandler.RestoreModule_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Legacy compatibility
ntp.calendar.calendar.mojom.mojom.OutlookCalendarPageHandlerPtr = ntp.calendar.calendar.mojom.mojom.OutlookCalendarPageHandlerRemote;
ntp.calendar.calendar.mojom.mojom.OutlookCalendarPageHandlerRequest = ntp.calendar.calendar.mojom.mojom.OutlookCalendarPageHandlerPendingReceiver;

