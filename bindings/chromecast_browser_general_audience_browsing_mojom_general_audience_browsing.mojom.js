// Auto-generated MojoJS binding
// Source: chromium_src/chromecast/browser/general_audience_browsing/mojom/general_audience_browsing.mojom
// Module: chromecast.mojom

'use strict';

// Module namespace
var chromecast = chromecast || {};
chromecast.mojom = chromecast.mojom || {};

chromecast.mojom.GeneralAudienceBrowsingAPIKeyObserver = {};
chromecast.mojom.GeneralAudienceBrowsingAPIKeyObserver.$interfaceName = 'chromecast.mojom.GeneralAudienceBrowsingAPIKeyObserver';
chromecast.mojom.GeneralAudienceBrowsingAPIKeyObserver_OnGeneralAudienceBrowsingAPIKeyChanged_ParamsSpec = { $: {} };
chromecast.mojom.GeneralAudienceBrowsingAPIKeySubject = {};
chromecast.mojom.GeneralAudienceBrowsingAPIKeySubject.$interfaceName = 'chromecast.mojom.GeneralAudienceBrowsingAPIKeySubject';
chromecast.mojom.GeneralAudienceBrowsingAPIKeySubject_AddGeneralAudienceBrowsingAPIKeyObserver_ParamsSpec = { $: {} };

// Interface: GeneralAudienceBrowsingAPIKeyObserver
mojo.internal.Struct(
    chromecast.mojom.GeneralAudienceBrowsingAPIKeyObserver_OnGeneralAudienceBrowsingAPIKeyChanged_ParamsSpec, 'chromecast.mojom.GeneralAudienceBrowsingAPIKeyObserver_OnGeneralAudienceBrowsingAPIKeyChanged_Params', [
      mojo.internal.StructField('api_key', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

chromecast.mojom.GeneralAudienceBrowsingAPIKeyObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chromecast.mojom.GeneralAudienceBrowsingAPIKeyObserverRemote = class {
  static get $interfaceName() {
    return 'chromecast.mojom.GeneralAudienceBrowsingAPIKeyObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chromecast.mojom.GeneralAudienceBrowsingAPIKeyObserverPendingReceiver,
      handle);
    this.$ = new chromecast.mojom.GeneralAudienceBrowsingAPIKeyObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chromecast.mojom.GeneralAudienceBrowsingAPIKeyObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onGeneralAudienceBrowsingAPIKeyChanged(api_key) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      chromecast.mojom.GeneralAudienceBrowsingAPIKeyObserver_OnGeneralAudienceBrowsingAPIKeyChanged_ParamsSpec,
      null,
      [api_key],
      false);
  }

};

chromecast.mojom.GeneralAudienceBrowsingAPIKeyObserver.getRemote = function() {
  let remote = new chromecast.mojom.GeneralAudienceBrowsingAPIKeyObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromecast.mojom.GeneralAudienceBrowsingAPIKeyObserver',
    'context');
  return remote.$;
};

chromecast.mojom.GeneralAudienceBrowsingAPIKeyObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
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
        
        // Try Method 0: OnGeneralAudienceBrowsingAPIKeyChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(chromecast.mojom.GeneralAudienceBrowsingAPIKeyObserver_OnGeneralAudienceBrowsingAPIKeyChanged_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnGeneralAudienceBrowsingAPIKeyChanged (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
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
          const params = decoder.decodeStruct(chromecast.mojom.GeneralAudienceBrowsingAPIKeyObserver_OnGeneralAudienceBrowsingAPIKeyChanged_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onGeneralAudienceBrowsingAPIKeyChanged');
          const result = this.impl.onGeneralAudienceBrowsingAPIKeyChanged(params.api_key);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

chromecast.mojom.GeneralAudienceBrowsingAPIKeyObserverReceiver = chromecast.mojom.GeneralAudienceBrowsingAPIKeyObserverReceiver;

chromecast.mojom.GeneralAudienceBrowsingAPIKeyObserverPtr = chromecast.mojom.GeneralAudienceBrowsingAPIKeyObserverRemote;
chromecast.mojom.GeneralAudienceBrowsingAPIKeyObserverRequest = chromecast.mojom.GeneralAudienceBrowsingAPIKeyObserverPendingReceiver;


// Interface: GeneralAudienceBrowsingAPIKeySubject
mojo.internal.Struct(
    chromecast.mojom.GeneralAudienceBrowsingAPIKeySubject_AddGeneralAudienceBrowsingAPIKeyObserver_ParamsSpec, 'chromecast.mojom.GeneralAudienceBrowsingAPIKeySubject_AddGeneralAudienceBrowsingAPIKeyObserver_Params', [
      mojo.internal.StructField('observer', 0, 0, mojo.internal.InterfaceProxy(chromecast.mojom.GeneralAudienceBrowsingAPIKeyObserverSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

chromecast.mojom.GeneralAudienceBrowsingAPIKeySubjectPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chromecast.mojom.GeneralAudienceBrowsingAPIKeySubjectRemote = class {
  static get $interfaceName() {
    return 'chromecast.mojom.GeneralAudienceBrowsingAPIKeySubject';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chromecast.mojom.GeneralAudienceBrowsingAPIKeySubjectPendingReceiver,
      handle);
    this.$ = new chromecast.mojom.GeneralAudienceBrowsingAPIKeySubjectRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chromecast.mojom.GeneralAudienceBrowsingAPIKeySubjectRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  addGeneralAudienceBrowsingAPIKeyObserver(observer) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      chromecast.mojom.GeneralAudienceBrowsingAPIKeySubject_AddGeneralAudienceBrowsingAPIKeyObserver_ParamsSpec,
      null,
      [observer],
      false);
  }

};

chromecast.mojom.GeneralAudienceBrowsingAPIKeySubject.getRemote = function() {
  let remote = new chromecast.mojom.GeneralAudienceBrowsingAPIKeySubjectRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromecast.mojom.GeneralAudienceBrowsingAPIKeySubject',
    'context');
  return remote.$;
};

chromecast.mojom.GeneralAudienceBrowsingAPIKeySubjectReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
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
        
        // Try Method 0: AddGeneralAudienceBrowsingAPIKeyObserver
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(chromecast.mojom.GeneralAudienceBrowsingAPIKeySubject_AddGeneralAudienceBrowsingAPIKeyObserver_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AddGeneralAudienceBrowsingAPIKeyObserver (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
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
          const params = decoder.decodeStruct(chromecast.mojom.GeneralAudienceBrowsingAPIKeySubject_AddGeneralAudienceBrowsingAPIKeyObserver_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.addGeneralAudienceBrowsingAPIKeyObserver');
          const result = this.impl.addGeneralAudienceBrowsingAPIKeyObserver(params.observer);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

chromecast.mojom.GeneralAudienceBrowsingAPIKeySubjectReceiver = chromecast.mojom.GeneralAudienceBrowsingAPIKeySubjectReceiver;

chromecast.mojom.GeneralAudienceBrowsingAPIKeySubjectPtr = chromecast.mojom.GeneralAudienceBrowsingAPIKeySubjectRemote;
chromecast.mojom.GeneralAudienceBrowsingAPIKeySubjectRequest = chromecast.mojom.GeneralAudienceBrowsingAPIKeySubjectPendingReceiver;

