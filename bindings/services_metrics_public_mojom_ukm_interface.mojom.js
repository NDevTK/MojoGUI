// Auto-generated MojoJS binding
// Source: chromium_src/services/metrics/public/mojom/ukm_interface.mojom
// Module: ukm.mojom

'use strict';

// Module namespace
var ukm = ukm || {};
ukm.mojom = ukm.mojom || {};


// Interface: SingularUkmInterface
ukm.mojom.SingularUkmInterfacePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ukm.mojom.SingularUkmInterfaceRemote = class {
  static get $interfaceName() {
    return 'ukm.mojom.SingularUkmInterface';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ukm.mojom.SingularUkmInterfacePendingReceiver,
      handle);
    this.$ = new ukm.mojom.SingularUkmInterfaceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ukm.mojom.SingularUkmInterfaceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  submit(entry) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ukm.mojom.SingularUkmInterface_Submit_ParamsSpec.$,
      null,
      [entry]);
  }

};

ukm.mojom.SingularUkmInterface.getRemote = function() {
  let remote = new ukm.mojom.SingularUkmInterfaceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ukm.mojom.SingularUkmInterface',
    'context');
  return remote.$;
}};

// ParamsSpec for Submit
ukm.mojom.SingularUkmInterface_Submit_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ukm.mojom.SingularUkmInterface.Submit_Params',
      packedSize: 16,
      fields: [
        { name: 'entry', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// Legacy compatibility
ukm.mojom.SingularUkmInterfacePtr = ukm.mojom.SingularUkmInterfaceRemote;
ukm.mojom.SingularUkmInterfaceRequest = ukm.mojom.SingularUkmInterfacePendingReceiver;


// Interface: UkmRecorderClientInterface
ukm.mojom.UkmRecorderClientInterfacePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ukm.mojom.UkmRecorderClientInterfaceRemote = class {
  static get $interfaceName() {
    return 'ukm.mojom.UkmRecorderClientInterface';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ukm.mojom.UkmRecorderClientInterfacePendingReceiver,
      handle);
    this.$ = new ukm.mojom.UkmRecorderClientInterfaceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ukm.mojom.UkmRecorderClientInterfaceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  setParameters(params) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ukm.mojom.UkmRecorderClientInterface_SetParameters_ParamsSpec.$,
      null,
      [params]);
  }

};

ukm.mojom.UkmRecorderClientInterface.getRemote = function() {
  let remote = new ukm.mojom.UkmRecorderClientInterfaceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ukm.mojom.UkmRecorderClientInterface',
    'context');
  return remote.$;
}};

// ParamsSpec for SetParameters
ukm.mojom.UkmRecorderClientInterface_SetParameters_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ukm.mojom.UkmRecorderClientInterface.SetParameters_Params',
      packedSize: 16,
      fields: [
        { name: 'params', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// Legacy compatibility
ukm.mojom.UkmRecorderClientInterfacePtr = ukm.mojom.UkmRecorderClientInterfaceRemote;
ukm.mojom.UkmRecorderClientInterfaceRequest = ukm.mojom.UkmRecorderClientInterfacePendingReceiver;


// Interface: UkmRecorderInterface
ukm.mojom.UkmRecorderInterfacePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ukm.mojom.UkmRecorderInterfaceRemote = class {
  static get $interfaceName() {
    return 'ukm.mojom.UkmRecorderInterface';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ukm.mojom.UkmRecorderInterfacePendingReceiver,
      handle);
    this.$ = new ukm.mojom.UkmRecorderInterfaceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ukm.mojom.UkmRecorderInterfaceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  addEntry(entry) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ukm.mojom.UkmRecorderInterface_AddEntry_ParamsSpec.$,
      null,
      [entry]);
  }

  updateSourceURL(source_id, url) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ukm.mojom.UkmRecorderInterface_UpdateSourceURL_ParamsSpec.$,
      null,
      [source_id, url]);
  }

};

ukm.mojom.UkmRecorderInterface.getRemote = function() {
  let remote = new ukm.mojom.UkmRecorderInterfaceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ukm.mojom.UkmRecorderInterface',
    'context');
  return remote.$;
}};

// ParamsSpec for AddEntry
ukm.mojom.UkmRecorderInterface_AddEntry_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ukm.mojom.UkmRecorderInterface.AddEntry_Params',
      packedSize: 16,
      fields: [
        { name: 'entry', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for UpdateSourceURL
ukm.mojom.UkmRecorderInterface_UpdateSourceURL_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ukm.mojom.UkmRecorderInterface.UpdateSourceURL_Params',
      packedSize: 24,
      fields: [
        { name: 'source_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'url', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// Legacy compatibility
ukm.mojom.UkmRecorderInterfacePtr = ukm.mojom.UkmRecorderInterfaceRemote;
ukm.mojom.UkmRecorderInterfaceRequest = ukm.mojom.UkmRecorderInterfacePendingReceiver;


// Interface: UkmRecorderFactory
ukm.mojom.UkmRecorderFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ukm.mojom.UkmRecorderFactoryRemote = class {
  static get $interfaceName() {
    return 'ukm.mojom.UkmRecorderFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ukm.mojom.UkmRecorderFactoryPendingReceiver,
      handle);
    this.$ = new ukm.mojom.UkmRecorderFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ukm.mojom.UkmRecorderFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createUkmRecorder(receiver, client_remote) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ukm.mojom.UkmRecorderFactory_CreateUkmRecorder_ParamsSpec.$,
      null,
      [receiver, client_remote]);
  }

};

ukm.mojom.UkmRecorderFactory.getRemote = function() {
  let remote = new ukm.mojom.UkmRecorderFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ukm.mojom.UkmRecorderFactory',
    'context');
  return remote.$;
}};

// ParamsSpec for CreateUkmRecorder
ukm.mojom.UkmRecorderFactory_CreateUkmRecorder_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ukm.mojom.UkmRecorderFactory.CreateUkmRecorder_Params',
      packedSize: 24,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'client_remote', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// Legacy compatibility
ukm.mojom.UkmRecorderFactoryPtr = ukm.mojom.UkmRecorderFactoryRemote;
ukm.mojom.UkmRecorderFactoryRequest = ukm.mojom.UkmRecorderFactoryPendingReceiver;

