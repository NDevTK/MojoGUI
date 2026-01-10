// Auto-generated MojoJS binding
// Source: chromium_src/components/metrics/dwa/mojom/dwa_interface.mojom
// Module: metrics.dwa.mojom

'use strict';

// Module namespace
var metrics = metrics || {};
metrics.dwa = metrics.dwa || {};
metrics.dwa.dwa.mojom = metrics.dwa.dwa.mojom || {};


// Struct: DwaEntry
metrics.dwa.dwa.mojom.mojom.DwaEntrySpec = {
  $: {
    structSpec: {
      name: 'metrics.dwa.mojom.DwaEntry',
      packedSize: 40,
      fields: [
        { name: 'event_hash', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
        { name: 'content_hash', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
        { name: 'studies_of_interest', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Map(mojo.internal.String, mojo.internal.Bool, false), nullable: false, minVersion: 0 },
        { name: 'metrics', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Map(mojo.internal.Uint64, mojo.internal.Int64, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Interface: DwaRecorderClientInterface
metrics.dwa.dwa.mojom.mojom.DwaRecorderClientInterface = {};

metrics.dwa.dwa.mojom.mojom.DwaRecorderClientInterfacePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

metrics.dwa.dwa.mojom.mojom.DwaRecorderClientInterfaceRemote = class {
  static get $interfaceName() {
    return 'metrics.dwa.mojom.DwaRecorderClientInterface';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      metrics.dwa.dwa.mojom.mojom.DwaRecorderClientInterfacePendingReceiver,
      handle);
    this.$ = new metrics.dwa.dwa.mojom.mojom.DwaRecorderClientInterfaceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

metrics.dwa.dwa.mojom.mojom.DwaRecorderClientInterfaceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

metrics.dwa.dwa.mojom.mojom.DwaRecorderClientInterface.getRemote = function() {
  let remote = new metrics.dwa.dwa.mojom.mojom.DwaRecorderClientInterfaceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'metrics.dwa.mojom.DwaRecorderClientInterface',
    'context');
  return remote.$;
};

// Legacy compatibility
metrics.dwa.dwa.mojom.mojom.DwaRecorderClientInterfacePtr = metrics.dwa.dwa.mojom.mojom.DwaRecorderClientInterfaceRemote;
metrics.dwa.dwa.mojom.mojom.DwaRecorderClientInterfaceRequest = metrics.dwa.dwa.mojom.mojom.DwaRecorderClientInterfacePendingReceiver;


// Interface: DwaRecorderInterface
metrics.dwa.dwa.mojom.mojom.DwaRecorderInterface = {};

metrics.dwa.dwa.mojom.mojom.DwaRecorderInterfacePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

metrics.dwa.dwa.mojom.mojom.DwaRecorderInterfaceRemote = class {
  static get $interfaceName() {
    return 'metrics.dwa.mojom.DwaRecorderInterface';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      metrics.dwa.dwa.mojom.mojom.DwaRecorderInterfacePendingReceiver,
      handle);
    this.$ = new metrics.dwa.dwa.mojom.mojom.DwaRecorderInterfaceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

metrics.dwa.dwa.mojom.mojom.DwaRecorderInterfaceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  addEntry(entry) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      metrics.dwa.dwa.mojom.mojom.DwaRecorderInterface_AddEntry_ParamsSpec,
      null,
      [entry]);
  }

};

metrics.dwa.dwa.mojom.mojom.DwaRecorderInterface.getRemote = function() {
  let remote = new metrics.dwa.dwa.mojom.mojom.DwaRecorderInterfaceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'metrics.dwa.mojom.DwaRecorderInterface',
    'context');
  return remote.$;
};

// ParamsSpec for AddEntry
metrics.dwa.dwa.mojom.mojom.DwaRecorderInterface_AddEntry_ParamsSpec = {
  $: {
    structSpec: {
      name: 'metrics.dwa.mojom.DwaRecorderInterface.AddEntry_Params',
      packedSize: 16,
      fields: [
        { name: 'entry', packedOffset: 0, packedBitOffset: 0, type: metrics.dwa.mojom.DwaEntrySpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
metrics.dwa.dwa.mojom.mojom.DwaRecorderInterfacePtr = metrics.dwa.dwa.mojom.mojom.DwaRecorderInterfaceRemote;
metrics.dwa.dwa.mojom.mojom.DwaRecorderInterfaceRequest = metrics.dwa.dwa.mojom.mojom.DwaRecorderInterfacePendingReceiver;


// Interface: DwaRecorderFactory
metrics.dwa.dwa.mojom.mojom.DwaRecorderFactory = {};

metrics.dwa.dwa.mojom.mojom.DwaRecorderFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

metrics.dwa.dwa.mojom.mojom.DwaRecorderFactoryRemote = class {
  static get $interfaceName() {
    return 'metrics.dwa.mojom.DwaRecorderFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      metrics.dwa.dwa.mojom.mojom.DwaRecorderFactoryPendingReceiver,
      handle);
    this.$ = new metrics.dwa.dwa.mojom.mojom.DwaRecorderFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

metrics.dwa.dwa.mojom.mojom.DwaRecorderFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createDwaRecorder(receiver, client_remote) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      metrics.dwa.dwa.mojom.mojom.DwaRecorderFactory_CreateDwaRecorder_ParamsSpec,
      null,
      [receiver, client_remote]);
  }

};

metrics.dwa.dwa.mojom.mojom.DwaRecorderFactory.getRemote = function() {
  let remote = new metrics.dwa.dwa.mojom.mojom.DwaRecorderFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'metrics.dwa.mojom.DwaRecorderFactory',
    'context');
  return remote.$;
};

// ParamsSpec for CreateDwaRecorder
metrics.dwa.dwa.mojom.mojom.DwaRecorderFactory_CreateDwaRecorder_ParamsSpec = {
  $: {
    structSpec: {
      name: 'metrics.dwa.mojom.DwaRecorderFactory.CreateDwaRecorder_Params',
      packedSize: 16,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false, minVersion: 0 },
        { name: 'client_remote', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
metrics.dwa.dwa.mojom.mojom.DwaRecorderFactoryPtr = metrics.dwa.dwa.mojom.mojom.DwaRecorderFactoryRemote;
metrics.dwa.dwa.mojom.mojom.DwaRecorderFactoryRequest = metrics.dwa.dwa.mojom.mojom.DwaRecorderFactoryPendingReceiver;

