// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/frame/reporting_observer.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var url = url || {};


// Struct: ReportBodyElement
blink.mojom.mojom.ReportBodyElementSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ReportBodyElement',
      packedSize: 24,
      fields: [
        { name: 'name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'value', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: ReportBody
blink.mojom.mojom.ReportBodySpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ReportBody',
      packedSize: 16,
      fields: [
        { name: 'body', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(blink.mojom.ReportBodyElementSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: Report
blink.mojom.mojom.ReportSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.Report',
      packedSize: 32,
      fields: [
        { name: 'type', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'url', packedOffset: 8, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'body', packedOffset: 16, packedBitOffset: 0, type: blink.mojom.ReportBodySpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Interface: ReportingObserver
blink.mojom.mojom.ReportingObserver = {};

blink.mojom.mojom.ReportingObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.mojom.ReportingObserverRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.ReportingObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.mojom.ReportingObserverPendingReceiver,
      handle);
    this.$ = new blink.mojom.mojom.ReportingObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.mojom.ReportingObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  notify(report) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.mojom.ReportingObserver_Notify_ParamsSpec,
      null,
      [report]);
  }

};

blink.mojom.mojom.ReportingObserver.getRemote = function() {
  let remote = new blink.mojom.mojom.ReportingObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.ReportingObserver',
    'context');
  return remote.$;
};

// ParamsSpec for Notify
blink.mojom.mojom.ReportingObserver_Notify_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ReportingObserver.Notify_Params',
      packedSize: 16,
      fields: [
        { name: 'report', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.ReportSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
blink.mojom.mojom.ReportingObserverPtr = blink.mojom.mojom.ReportingObserverRemote;
blink.mojom.mojom.ReportingObserverRequest = blink.mojom.mojom.ReportingObserverPendingReceiver;

