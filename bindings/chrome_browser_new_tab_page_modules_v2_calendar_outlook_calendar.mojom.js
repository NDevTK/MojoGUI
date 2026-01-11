// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/new_tab_page/modules/v2/calendar/outlook_calendar.mojom
// Module: ntp.calendar.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

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
  getEvents() {
    return this.$.getEvents();
  }
  dismissModule() {
    return this.$.dismissModule();
  }
  restoreModule() {
    return this.$.restoreModule();
  }
};

ntp.calendar.mojom.OutlookCalendarPageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('OutlookCalendarPageHandler', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  getEvents() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      ntp.calendar.mojom.OutlookCalendarPageHandler_GetEvents_ParamsSpec,
      ntp.calendar.mojom.OutlookCalendarPageHandler_GetEvents_ResponseParamsSpec,
      [],
      false);
  }

  dismissModule() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      ntp.calendar.mojom.OutlookCalendarPageHandler_DismissModule_ParamsSpec,
      null,
      [],
      false);
  }

  restoreModule() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
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
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('OutlookCalendarPageHandler', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = {{ header: args[1], payload: payload, handles: args[3] || [] }};
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ntp.calendar.mojom.OutlookCalendarPageHandler_GetEvents_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ntp.calendar.mojom.OutlookCalendarPageHandler_DismissModule_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ntp.calendar.mojom.OutlookCalendarPageHandler_RestoreModule_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ntp.calendar.mojom.OutlookCalendarPageHandler_GetEvents_ParamsSpec.$.structSpec);
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
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ntp.calendar.mojom.OutlookCalendarPageHandler_DismissModule_ParamsSpec.$.structSpec);
          const result = this.impl.dismissModule();
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ntp.calendar.mojom.OutlookCalendarPageHandler_RestoreModule_ParamsSpec.$.structSpec);
          const result = this.impl.restoreModule();
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

ntp.calendar.mojom.OutlookCalendarPageHandlerReceiver = ntp.calendar.mojom.OutlookCalendarPageHandlerReceiver;

ntp.calendar.mojom.OutlookCalendarPageHandlerPtr = ntp.calendar.mojom.OutlookCalendarPageHandlerRemote;
ntp.calendar.mojom.OutlookCalendarPageHandlerRequest = ntp.calendar.mojom.OutlookCalendarPageHandlerPendingReceiver;

