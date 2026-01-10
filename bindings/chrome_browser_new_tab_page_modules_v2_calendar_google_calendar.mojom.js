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
      mojo.internal.StructField('events', 0, 0, mojo.internal.Array(ntp.calendar.mojom.CalendarEventSpec.$, false), null, false, 0, undefined),
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
      [],
      false);
  }

  dismissModule() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ntp.calendar.mojom.GoogleCalendarPageHandler_DismissModule_ParamsSpec,
      null,
      [],
      false);
  }

  restoreModule() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ntp.calendar.mojom.GoogleCalendarPageHandler_RestoreModule_ParamsSpec,
      null,
      [],
      false);
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

ntp.calendar.mojom.GoogleCalendarPageHandlerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        message = {
          header: args[1],
          payload: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: GetEvents
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ntp.calendar.mojom.GoogleCalendarPageHandler_GetEvents_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetEvents (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 1: DismissModule
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ntp.calendar.mojom.GoogleCalendarPageHandler_DismissModule_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DismissModule (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 2: RestoreModule
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ntp.calendar.mojom.GoogleCalendarPageHandler_RestoreModule_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RestoreModule (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) { /* Ignore mismatch */ }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ntp.calendar.mojom.GoogleCalendarPageHandler_GetEvents_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getEvents');
          const result = this.impl.getEvents();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ntp.calendar.mojom.GoogleCalendarPageHandler_GetEvents_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ntp.calendar.mojom.GoogleCalendarPageHandler_DismissModule_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.dismissModule');
          const result = this.impl.dismissModule();
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ntp.calendar.mojom.GoogleCalendarPageHandler_RestoreModule_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.restoreModule');
          const result = this.impl.restoreModule();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

ntp.calendar.mojom.GoogleCalendarPageHandlerReceiver = ntp.calendar.mojom.GoogleCalendarPageHandlerReceiver;

ntp.calendar.mojom.GoogleCalendarPageHandlerPtr = ntp.calendar.mojom.GoogleCalendarPageHandlerRemote;
ntp.calendar.mojom.GoogleCalendarPageHandlerRequest = ntp.calendar.mojom.GoogleCalendarPageHandlerPendingReceiver;

