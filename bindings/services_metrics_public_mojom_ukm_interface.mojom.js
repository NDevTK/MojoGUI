// Auto-generated MojoJS binding
// Source: chromium_src/services/metrics/public/mojom/ukm_interface.mojom
// Module: ukm.mojom

'use strict';

// Module namespace
var ukm = ukm || {};
ukm.mojom = ukm.mojom || {};


// Struct: UkmEntry
ukm.mojom.mojom.UkmEntrySpec = {
  $: {
    structSpec: {
      name: 'ukm.mojom.UkmEntry',
      packedSize: 32,
      fields: [
        { name: 'source_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
        { name: 'event_hash', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
        { name: 'metrics', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Map(mojo.internal.Uint64, mojo.internal.Int64, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: UkmRecorderParameters
ukm.mojom.mojom.UkmRecorderParametersSpec = {
  $: {
    structSpec: {
      name: 'ukm.mojom.UkmRecorderParameters',
      packedSize: 24,
      fields: [
        { name: 'is_enabled', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'event_hash_bypass_list', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint64, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Interface: SingularUkmInterface
ukm.mojom.mojom.SingularUkmInterface = {};

ukm.mojom.mojom.SingularUkmInterfacePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ukm.mojom.mojom.SingularUkmInterfaceRemote = class {
  static get $interfaceName() {
    return 'ukm.mojom.SingularUkmInterface';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ukm.mojom.mojom.SingularUkmInterfacePendingReceiver,
      handle);
    this.$ = new ukm.mojom.mojom.SingularUkmInterfaceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ukm.mojom.mojom.SingularUkmInterfaceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  submit(entry) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ukm.mojom.mojom.SingularUkmInterface_Submit_ParamsSpec,
      null,
      [entry]);
  }

};

ukm.mojom.mojom.SingularUkmInterface.getRemote = function() {
  let remote = new ukm.mojom.mojom.SingularUkmInterfaceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ukm.mojom.SingularUkmInterface',
    'context');
  return remote.$;
};

// ParamsSpec for Submit
ukm.mojom.mojom.SingularUkmInterface_Submit_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ukm.mojom.SingularUkmInterface.Submit_Params',
      packedSize: 16,
      fields: [
        { name: 'entry', packedOffset: 0, packedBitOffset: 0, type: ukm.mojom.UkmEntrySpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
ukm.mojom.mojom.SingularUkmInterfacePtr = ukm.mojom.mojom.SingularUkmInterfaceRemote;
ukm.mojom.mojom.SingularUkmInterfaceRequest = ukm.mojom.mojom.SingularUkmInterfacePendingReceiver;


// Interface: UkmRecorderClientInterface
ukm.mojom.mojom.UkmRecorderClientInterface = {};

ukm.mojom.mojom.UkmRecorderClientInterfacePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ukm.mojom.mojom.UkmRecorderClientInterfaceRemote = class {
  static get $interfaceName() {
    return 'ukm.mojom.UkmRecorderClientInterface';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ukm.mojom.mojom.UkmRecorderClientInterfacePendingReceiver,
      handle);
    this.$ = new ukm.mojom.mojom.UkmRecorderClientInterfaceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ukm.mojom.mojom.UkmRecorderClientInterfaceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  setParameters(params) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ukm.mojom.mojom.UkmRecorderClientInterface_SetParameters_ParamsSpec,
      null,
      [params]);
  }

};

ukm.mojom.mojom.UkmRecorderClientInterface.getRemote = function() {
  let remote = new ukm.mojom.mojom.UkmRecorderClientInterfaceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ukm.mojom.UkmRecorderClientInterface',
    'context');
  return remote.$;
};

// ParamsSpec for SetParameters
ukm.mojom.mojom.UkmRecorderClientInterface_SetParameters_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ukm.mojom.UkmRecorderClientInterface.SetParameters_Params',
      packedSize: 16,
      fields: [
        { name: 'params', packedOffset: 0, packedBitOffset: 0, type: ukm.mojom.UkmRecorderParametersSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
ukm.mojom.mojom.UkmRecorderClientInterfacePtr = ukm.mojom.mojom.UkmRecorderClientInterfaceRemote;
ukm.mojom.mojom.UkmRecorderClientInterfaceRequest = ukm.mojom.mojom.UkmRecorderClientInterfacePendingReceiver;


// Interface: UkmRecorderInterface
ukm.mojom.mojom.UkmRecorderInterface = {};

ukm.mojom.mojom.UkmRecorderInterfacePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ukm.mojom.mojom.UkmRecorderInterfaceRemote = class {
  static get $interfaceName() {
    return 'ukm.mojom.UkmRecorderInterface';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ukm.mojom.mojom.UkmRecorderInterfacePendingReceiver,
      handle);
    this.$ = new ukm.mojom.mojom.UkmRecorderInterfaceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ukm.mojom.mojom.UkmRecorderInterfaceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  addEntry(entry) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ukm.mojom.mojom.UkmRecorderInterface_AddEntry_ParamsSpec,
      null,
      [entry]);
  }

  updateSourceURL(source_id, url) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ukm.mojom.mojom.UkmRecorderInterface_UpdateSourceURL_ParamsSpec,
      null,
      [source_id, url]);
  }

};

ukm.mojom.mojom.UkmRecorderInterface.getRemote = function() {
  let remote = new ukm.mojom.mojom.UkmRecorderInterfaceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ukm.mojom.UkmRecorderInterface',
    'context');
  return remote.$;
};

// ParamsSpec for AddEntry
ukm.mojom.mojom.UkmRecorderInterface_AddEntry_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ukm.mojom.UkmRecorderInterface.AddEntry_Params',
      packedSize: 16,
      fields: [
        { name: 'entry', packedOffset: 0, packedBitOffset: 0, type: ukm.mojom.UkmEntrySpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for UpdateSourceURL
ukm.mojom.mojom.UkmRecorderInterface_UpdateSourceURL_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ukm.mojom.UkmRecorderInterface.UpdateSourceURL_Params',
      packedSize: 24,
      fields: [
        { name: 'source_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
        { name: 'url', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
ukm.mojom.mojom.UkmRecorderInterfacePtr = ukm.mojom.mojom.UkmRecorderInterfaceRemote;
ukm.mojom.mojom.UkmRecorderInterfaceRequest = ukm.mojom.mojom.UkmRecorderInterfacePendingReceiver;


// Interface: UkmRecorderFactory
ukm.mojom.mojom.UkmRecorderFactory = {};

ukm.mojom.mojom.UkmRecorderFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ukm.mojom.mojom.UkmRecorderFactoryRemote = class {
  static get $interfaceName() {
    return 'ukm.mojom.UkmRecorderFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ukm.mojom.mojom.UkmRecorderFactoryPendingReceiver,
      handle);
    this.$ = new ukm.mojom.mojom.UkmRecorderFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ukm.mojom.mojom.UkmRecorderFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createUkmRecorder(receiver, client_remote) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ukm.mojom.mojom.UkmRecorderFactory_CreateUkmRecorder_ParamsSpec,
      null,
      [receiver, client_remote]);
  }

};

ukm.mojom.mojom.UkmRecorderFactory.getRemote = function() {
  let remote = new ukm.mojom.mojom.UkmRecorderFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ukm.mojom.UkmRecorderFactory',
    'context');
  return remote.$;
};

// ParamsSpec for CreateUkmRecorder
ukm.mojom.mojom.UkmRecorderFactory_CreateUkmRecorder_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ukm.mojom.UkmRecorderFactory.CreateUkmRecorder_Params',
      packedSize: 24,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(ukm.mojom.UkmRecorderInterfaceRemote), nullable: false, minVersion: 0 },
        { name: 'client_remote', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(ukm.mojom.UkmRecorderClientInterfaceRemote), nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
ukm.mojom.mojom.UkmRecorderFactoryPtr = ukm.mojom.mojom.UkmRecorderFactoryRemote;
ukm.mojom.mojom.UkmRecorderFactoryRequest = ukm.mojom.mojom.UkmRecorderFactoryPendingReceiver;

