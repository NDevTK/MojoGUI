// Auto-generated MojoJS binding
// Source: chromium_src/codelabs/mojo_examples/mojom/interface.mojom
// Module: codelabs.mojom

'use strict';

// Module namespace
var codelabs = codelabs || {};
codelabs.mojom = codelabs.mojom || {};


// Interface: ObjectA
codelabs.mojom.mojom.ObjectA = {};

codelabs.mojom.mojom.ObjectAPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

codelabs.mojom.mojom.ObjectARemote = class {
  static get $interfaceName() {
    return 'codelabs.mojom.ObjectA';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      codelabs.mojom.mojom.ObjectAPendingReceiver,
      handle);
    this.$ = new codelabs.mojom.mojom.ObjectARemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

codelabs.mojom.mojom.ObjectARemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  doA() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      codelabs.mojom.mojom.ObjectA_DoA_ParamsSpec,
      null,
      []);
  }

};

codelabs.mojom.mojom.ObjectA.getRemote = function() {
  let remote = new codelabs.mojom.mojom.ObjectARemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'codelabs.mojom.ObjectA',
    'context');
  return remote.$;
};

// ParamsSpec for DoA
codelabs.mojom.mojom.ObjectA_DoA_ParamsSpec = {
  $: {
    structSpec: {
      name: 'codelabs.mojom.ObjectA.DoA_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Legacy compatibility
codelabs.mojom.mojom.ObjectAPtr = codelabs.mojom.mojom.ObjectARemote;
codelabs.mojom.mojom.ObjectARequest = codelabs.mojom.mojom.ObjectAPendingReceiver;


// Interface: ObjectB
codelabs.mojom.mojom.ObjectB = {};

codelabs.mojom.mojom.ObjectBPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

codelabs.mojom.mojom.ObjectBRemote = class {
  static get $interfaceName() {
    return 'codelabs.mojom.ObjectB';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      codelabs.mojom.mojom.ObjectBPendingReceiver,
      handle);
    this.$ = new codelabs.mojom.mojom.ObjectBRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

codelabs.mojom.mojom.ObjectBRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  doB() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      codelabs.mojom.mojom.ObjectB_DoB_ParamsSpec,
      null,
      []);
  }

};

codelabs.mojom.mojom.ObjectB.getRemote = function() {
  let remote = new codelabs.mojom.mojom.ObjectBRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'codelabs.mojom.ObjectB',
    'context');
  return remote.$;
};

// ParamsSpec for DoB
codelabs.mojom.mojom.ObjectB_DoB_ParamsSpec = {
  $: {
    structSpec: {
      name: 'codelabs.mojom.ObjectB.DoB_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Legacy compatibility
codelabs.mojom.mojom.ObjectBPtr = codelabs.mojom.mojom.ObjectBRemote;
codelabs.mojom.mojom.ObjectBRequest = codelabs.mojom.mojom.ObjectBPendingReceiver;


// Interface: AssociatedProcess
codelabs.mojom.mojom.AssociatedProcess = {};

codelabs.mojom.mojom.AssociatedProcessPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

codelabs.mojom.mojom.AssociatedProcessRemote = class {
  static get $interfaceName() {
    return 'codelabs.mojom.AssociatedProcess';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      codelabs.mojom.mojom.AssociatedProcessPendingReceiver,
      handle);
    this.$ = new codelabs.mojom.mojom.AssociatedProcessRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

codelabs.mojom.mojom.AssociatedProcessRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  setProcess(process) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      codelabs.mojom.mojom.AssociatedProcess_SetProcess_ParamsSpec,
      null,
      [process]);
  }

};

codelabs.mojom.mojom.AssociatedProcess.getRemote = function() {
  let remote = new codelabs.mojom.mojom.AssociatedProcessRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'codelabs.mojom.AssociatedProcess',
    'context');
  return remote.$;
};

// ParamsSpec for SetProcess
codelabs.mojom.mojom.AssociatedProcess_SetProcess_ParamsSpec = {
  $: {
    structSpec: {
      name: 'codelabs.mojom.AssociatedProcess.SetProcess_Params',
      packedSize: 16,
      fields: [
        { name: 'process', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
codelabs.mojom.mojom.AssociatedProcessPtr = codelabs.mojom.mojom.AssociatedProcessRemote;
codelabs.mojom.mojom.AssociatedProcessRequest = codelabs.mojom.mojom.AssociatedProcessPendingReceiver;


// Interface: GenericInterface
codelabs.mojom.mojom.GenericInterface = {};

codelabs.mojom.mojom.GenericInterfacePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

codelabs.mojom.mojom.GenericInterfaceRemote = class {
  static get $interfaceName() {
    return 'codelabs.mojom.GenericInterface';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      codelabs.mojom.mojom.GenericInterfacePendingReceiver,
      handle);
    this.$ = new codelabs.mojom.mojom.GenericInterfaceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

codelabs.mojom.mojom.GenericInterfaceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

codelabs.mojom.mojom.GenericInterface.getRemote = function() {
  let remote = new codelabs.mojom.mojom.GenericInterfaceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'codelabs.mojom.GenericInterface',
    'context');
  return remote.$;
};

// Legacy compatibility
codelabs.mojom.mojom.GenericInterfacePtr = codelabs.mojom.mojom.GenericInterfaceRemote;
codelabs.mojom.mojom.GenericInterfaceRequest = codelabs.mojom.mojom.GenericInterfacePendingReceiver;


// Interface: Process
codelabs.mojom.mojom.Process = {};

codelabs.mojom.mojom.ProcessPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

codelabs.mojom.mojom.ProcessRemote = class {
  static get $interfaceName() {
    return 'codelabs.mojom.Process';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      codelabs.mojom.mojom.ProcessPendingReceiver,
      handle);
    this.$ = new codelabs.mojom.mojom.ProcessRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

codelabs.mojom.mojom.ProcessRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  sayHello() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      codelabs.mojom.mojom.Process_SayHello_ParamsSpec,
      null,
      []);
  }

  getAssociatedInterface(name, receiver) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      codelabs.mojom.mojom.Process_GetAssociatedInterface_ParamsSpec,
      null,
      [name, receiver]);
  }

};

codelabs.mojom.mojom.Process.getRemote = function() {
  let remote = new codelabs.mojom.mojom.ProcessRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'codelabs.mojom.Process',
    'context');
  return remote.$;
};

// ParamsSpec for SayHello
codelabs.mojom.mojom.Process_SayHello_ParamsSpec = {
  $: {
    structSpec: {
      name: 'codelabs.mojom.Process.SayHello_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for GetAssociatedInterface
codelabs.mojom.mojom.Process_GetAssociatedInterface_ParamsSpec = {
  $: {
    structSpec: {
      name: 'codelabs.mojom.Process.GetAssociatedInterface_Params',
      packedSize: 24,
      fields: [
        { name: 'name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'receiver', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.AssociatedInterfaceRequest, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
codelabs.mojom.mojom.ProcessPtr = codelabs.mojom.mojom.ProcessRemote;
codelabs.mojom.mojom.ProcessRequest = codelabs.mojom.mojom.ProcessPendingReceiver;

