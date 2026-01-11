// Auto-generated MojoJS binding
// Source: chromium_src/chromecast/browser/general_audience_browsing/mojom/general_audience_browsing.mojom
// Module: chromecast.mojom

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
  onGeneralAudienceBrowsingAPIKeyChanged(api_key) {
    return this.$.onGeneralAudienceBrowsingAPIKeyChanged(api_key);
  }
};

chromecast.mojom.GeneralAudienceBrowsingAPIKeyObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('GeneralAudienceBrowsingAPIKeyObserver', [
      { explicit: null },
    ]);
  }

  onGeneralAudienceBrowsingAPIKeyChanged(api_key) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
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
    const ordinals = window.mojoScrambler.getOrdinals('GeneralAudienceBrowsingAPIKeyObserver', [
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
    this.router_.onConnectionError.addListener(() => {
       console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
    });
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
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromecast.mojom.GeneralAudienceBrowsingAPIKeyObserver_OnGeneralAudienceBrowsingAPIKeyChanged_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromecast.mojom.GeneralAudienceBrowsingAPIKeyObserver_OnGeneralAudienceBrowsingAPIKeyChanged_ParamsSpec.$.structSpec);
          const result = this.impl.onGeneralAudienceBrowsingAPIKeyChanged(params.api_key);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

chromecast.mojom.GeneralAudienceBrowsingAPIKeyObserverReceiver = chromecast.mojom.GeneralAudienceBrowsingAPIKeyObserverReceiver;

chromecast.mojom.GeneralAudienceBrowsingAPIKeyObserverPtr = chromecast.mojom.GeneralAudienceBrowsingAPIKeyObserverRemote;
chromecast.mojom.GeneralAudienceBrowsingAPIKeyObserverRequest = chromecast.mojom.GeneralAudienceBrowsingAPIKeyObserverPendingReceiver;


// Interface: GeneralAudienceBrowsingAPIKeySubject
mojo.internal.Struct(
    chromecast.mojom.GeneralAudienceBrowsingAPIKeySubject_AddGeneralAudienceBrowsingAPIKeyObserver_ParamsSpec, 'chromecast.mojom.GeneralAudienceBrowsingAPIKeySubject_AddGeneralAudienceBrowsingAPIKeyObserver_Params', [
      mojo.internal.StructField('observer', 0, 0, mojo.internal.InterfaceProxy(chromecast.mojom.GeneralAudienceBrowsingAPIKeyObserverRemote), null, false, 0, undefined),
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
  addGeneralAudienceBrowsingAPIKeyObserver(observer) {
    return this.$.addGeneralAudienceBrowsingAPIKeyObserver(observer);
  }
};

chromecast.mojom.GeneralAudienceBrowsingAPIKeySubjectRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('GeneralAudienceBrowsingAPIKeySubject', [
      { explicit: null },
    ]);
  }

  addGeneralAudienceBrowsingAPIKeyObserver(observer) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
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
    const ordinals = window.mojoScrambler.getOrdinals('GeneralAudienceBrowsingAPIKeySubject', [
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
    this.router_.onConnectionError.addListener(() => {
       console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
    });
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
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromecast.mojom.GeneralAudienceBrowsingAPIKeySubject_AddGeneralAudienceBrowsingAPIKeyObserver_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromecast.mojom.GeneralAudienceBrowsingAPIKeySubject_AddGeneralAudienceBrowsingAPIKeyObserver_ParamsSpec.$.structSpec);
          const result = this.impl.addGeneralAudienceBrowsingAPIKeyObserver(params.observer);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

chromecast.mojom.GeneralAudienceBrowsingAPIKeySubjectReceiver = chromecast.mojom.GeneralAudienceBrowsingAPIKeySubjectReceiver;

chromecast.mojom.GeneralAudienceBrowsingAPIKeySubjectPtr = chromecast.mojom.GeneralAudienceBrowsingAPIKeySubjectRemote;
chromecast.mojom.GeneralAudienceBrowsingAPIKeySubjectRequest = chromecast.mojom.GeneralAudienceBrowsingAPIKeySubjectPendingReceiver;

