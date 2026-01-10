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
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      console.log('[GeneratedReceiver] Args received:', args);
      const message = args[0];
      if (args.length > 1) { console.log('[GeneratedReceiver] 2nd Arg:', args[1]); }
      const header = message && message.header;
      if (!header) { console.warn('[GeneratedReceiver] No header in arg0'); }
      if (header) {
      console.log('[GeneratedReceiver] Header ordinal:', header.ordinal);
      switch (header.ordinal) {
        case 0: {
          const params = chromecast.mojom.GeneralAudienceBrowsingAPIKeyObserver_OnGeneralAudienceBrowsingAPIKeyChanged_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onGeneralAudienceBrowsingAPIKeyChanged(params.api_key);
          break;
        }
      }
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
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      console.log('[GeneratedReceiver] Args received:', args);
      const message = args[0];
      if (args.length > 1) { console.log('[GeneratedReceiver] 2nd Arg:', args[1]); }
      const header = message && message.header;
      if (!header) { console.warn('[GeneratedReceiver] No header in arg0'); }
      if (header) {
      console.log('[GeneratedReceiver] Header ordinal:', header.ordinal);
      switch (header.ordinal) {
        case 0: {
          const params = chromecast.mojom.GeneralAudienceBrowsingAPIKeySubject_AddGeneralAudienceBrowsingAPIKeyObserver_ParamsSpec.$.decode(message.payload);
          const result = this.impl.addGeneralAudienceBrowsingAPIKeyObserver(params.observer);
          break;
        }
      }
      }
    }});
  }
};

chromecast.mojom.GeneralAudienceBrowsingAPIKeySubjectReceiver = chromecast.mojom.GeneralAudienceBrowsingAPIKeySubjectReceiver;

chromecast.mojom.GeneralAudienceBrowsingAPIKeySubjectPtr = chromecast.mojom.GeneralAudienceBrowsingAPIKeySubjectRemote;
chromecast.mojom.GeneralAudienceBrowsingAPIKeySubjectRequest = chromecast.mojom.GeneralAudienceBrowsingAPIKeySubjectPendingReceiver;

