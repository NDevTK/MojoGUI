// Auto-generated MojoJS binding
// Source: chromium_src/chromecast/browser/general_audience_browsing/mojom/general_audience_browsing.mojom
// Module: chromecast.mojom

'use strict';

// Module namespace
var chromecast = chromecast || {};
chromecast.mojom = chromecast.mojom || {};


// Interface: GeneralAudienceBrowsingAPIKeyObserver
chromecast.mojom.GeneralAudienceBrowsingAPIKeyObserver = {};

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
      [api_key]);
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

// ParamsSpec for OnGeneralAudienceBrowsingAPIKeyChanged
chromecast.mojom.GeneralAudienceBrowsingAPIKeyObserver_OnGeneralAudienceBrowsingAPIKeyChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromecast.mojom.GeneralAudienceBrowsingAPIKeyObserver.OnGeneralAudienceBrowsingAPIKeyChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'api_key', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
chromecast.mojom.GeneralAudienceBrowsingAPIKeyObserverPtr = chromecast.mojom.GeneralAudienceBrowsingAPIKeyObserverRemote;
chromecast.mojom.GeneralAudienceBrowsingAPIKeyObserverRequest = chromecast.mojom.GeneralAudienceBrowsingAPIKeyObserverPendingReceiver;


// Interface: GeneralAudienceBrowsingAPIKeySubject
chromecast.mojom.GeneralAudienceBrowsingAPIKeySubject = {};

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
      [observer]);
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

// ParamsSpec for AddGeneralAudienceBrowsingAPIKeyObserver
chromecast.mojom.GeneralAudienceBrowsingAPIKeySubject_AddGeneralAudienceBrowsingAPIKeyObserver_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromecast.mojom.GeneralAudienceBrowsingAPIKeySubject.AddGeneralAudienceBrowsingAPIKeyObserver_Params',
      packedSize: 16,
      fields: [
        { name: 'observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
chromecast.mojom.GeneralAudienceBrowsingAPIKeySubjectPtr = chromecast.mojom.GeneralAudienceBrowsingAPIKeySubjectRemote;
chromecast.mojom.GeneralAudienceBrowsingAPIKeySubjectRequest = chromecast.mojom.GeneralAudienceBrowsingAPIKeySubjectPendingReceiver;

