// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/frame/reporting_observer.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Interface: ReportingObserver
blink.mojom.ReportingObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.ReportingObserverRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.ReportingObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.ReportingObserverPendingReceiver,
      handle);
    this.$ = new blink.mojom.ReportingObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.ReportingObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  notify(report) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.ReportingObserver_Notify_ParamsSpec.$,
      null,
      [report]);
  }

};

blink.mojom.ReportingObserver.getRemote = function() {
  let remote = new blink.mojom.ReportingObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.ReportingObserver',
    'context');
  return remote.$;
}};

// ParamsSpec for Notify
blink.mojom.ReportingObserver_Notify_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ReportingObserver.Notify_Params',
      packedSize: 16,
      fields: [
        { name: 'report', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// Legacy compatibility
blink.mojom.ReportingObserverPtr = blink.mojom.ReportingObserverRemote;
blink.mojom.ReportingObserverRequest = blink.mojom.ReportingObserverPendingReceiver;

