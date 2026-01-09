// Auto-generated MojoJS binding
// Source: chromium_src/components/metrics/dwa/mojom/dwa_interface.mojom
// Module: metrics.dwa.mojom

'use strict';

// Module namespace
var metrics = metrics || {};
metrics.dwa = metrics.dwa || {};
metrics.dwa.mojom = metrics.dwa.mojom || {};


// Struct: DwaEntry
metrics.dwa.mojom.DwaEntrySpec = {
  $: {
    structSpec: {
      name: 'metrics.dwa.mojom.DwaEntry',
      packedSize: 40,
      fields: [
        { name: 'event_hash', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false },
        { name: 'content_hash', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false },
        { name: 'studies_of_interest', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Map, nullable: false },
        { name: 'metrics', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Map, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Interface: DwaRecorderClientInterface
metrics.dwa.mojom.DwaRecorderClientInterface = {};

metrics.dwa.mojom.DwaRecorderClientInterfacePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

metrics.dwa.mojom.DwaRecorderClientInterfaceRemote = class {
  static get $interfaceName() {
    return 'metrics.dwa.mojom.DwaRecorderClientInterface';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      metrics.dwa.mojom.DwaRecorderClientInterfacePendingReceiver,
      handle);
    this.$ = new metrics.dwa.mojom.DwaRecorderClientInterfaceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

metrics.dwa.mojom.DwaRecorderClientInterfaceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

metrics.dwa.mojom.DwaRecorderClientInterface.getRemote = function() {
  let remote = new metrics.dwa.mojom.DwaRecorderClientInterfaceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'metrics.dwa.mojom.DwaRecorderClientInterface',
    'context');
  return remote.$;
};

// Legacy compatibility
metrics.dwa.mojom.DwaRecorderClientInterfacePtr = metrics.dwa.mojom.DwaRecorderClientInterfaceRemote;
metrics.dwa.mojom.DwaRecorderClientInterfaceRequest = metrics.dwa.mojom.DwaRecorderClientInterfacePendingReceiver;


// Interface: DwaRecorderInterface
metrics.dwa.mojom.DwaRecorderInterface = {};

metrics.dwa.mojom.DwaRecorderInterfacePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

metrics.dwa.mojom.DwaRecorderInterfaceRemote = class {
  static get $interfaceName() {
    return 'metrics.dwa.mojom.DwaRecorderInterface';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      metrics.dwa.mojom.DwaRecorderInterfacePendingReceiver,
      handle);
    this.$ = new metrics.dwa.mojom.DwaRecorderInterfaceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

metrics.dwa.mojom.DwaRecorderInterfaceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  addEntry(entry) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      metrics.dwa.mojom.DwaRecorderInterface_AddEntry_ParamsSpec,
      null,
      [entry]);
  }

};

metrics.dwa.mojom.DwaRecorderInterface.getRemote = function() {
  let remote = new metrics.dwa.mojom.DwaRecorderInterfaceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'metrics.dwa.mojom.DwaRecorderInterface',
    'context');
  return remote.$;
};

// ParamsSpec for AddEntry
metrics.dwa.mojom.DwaRecorderInterface_AddEntry_ParamsSpec = {
  $: {
    structSpec: {
      name: 'metrics.dwa.mojom.DwaRecorderInterface.AddEntry_Params',
      packedSize: 16,
      fields: [
        { name: 'entry', packedOffset: 8, packedBitOffset: 0, type: metrics.dwa.mojom.DwaEntrySpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
metrics.dwa.mojom.DwaRecorderInterfacePtr = metrics.dwa.mojom.DwaRecorderInterfaceRemote;
metrics.dwa.mojom.DwaRecorderInterfaceRequest = metrics.dwa.mojom.DwaRecorderInterfacePendingReceiver;


// Interface: DwaRecorderFactory
metrics.dwa.mojom.DwaRecorderFactory = {};

metrics.dwa.mojom.DwaRecorderFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

metrics.dwa.mojom.DwaRecorderFactoryRemote = class {
  static get $interfaceName() {
    return 'metrics.dwa.mojom.DwaRecorderFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      metrics.dwa.mojom.DwaRecorderFactoryPendingReceiver,
      handle);
    this.$ = new metrics.dwa.mojom.DwaRecorderFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

metrics.dwa.mojom.DwaRecorderFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createDwaRecorder(receiver, client_remote) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      metrics.dwa.mojom.DwaRecorderFactory_CreateDwaRecorder_ParamsSpec,
      null,
      [receiver, client_remote]);
  }

};

metrics.dwa.mojom.DwaRecorderFactory.getRemote = function() {
  let remote = new metrics.dwa.mojom.DwaRecorderFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'metrics.dwa.mojom.DwaRecorderFactory',
    'context');
  return remote.$;
};

// ParamsSpec for CreateDwaRecorder
metrics.dwa.mojom.DwaRecorderFactory_CreateDwaRecorder_ParamsSpec = {
  $: {
    structSpec: {
      name: 'metrics.dwa.mojom.DwaRecorderFactory.CreateDwaRecorder_Params',
      packedSize: 16,
      fields: [
        { name: 'receiver', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
        { name: 'client_remote', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
metrics.dwa.mojom.DwaRecorderFactoryPtr = metrics.dwa.mojom.DwaRecorderFactoryRemote;
metrics.dwa.mojom.DwaRecorderFactoryRequest = metrics.dwa.mojom.DwaRecorderFactoryPendingReceiver;

