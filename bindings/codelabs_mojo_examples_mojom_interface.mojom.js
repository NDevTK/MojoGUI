// Auto-generated MojoJS binding
// Source: chromium_src/codelabs/mojo_examples/mojom/interface.mojom
// Module: codelabs.mojom

'use strict';

// Module namespace
var codelabs = codelabs || {};
codelabs.mojom = codelabs.mojom || {};


// Interface: ObjectA
codelabs.mojom.ObjectA = {};

codelabs.mojom.ObjectAPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

codelabs.mojom.ObjectARemote = class {
  static get $interfaceName() {
    return 'codelabs.mojom.ObjectA';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      codelabs.mojom.ObjectAPendingReceiver,
      handle);
    this.$ = new codelabs.mojom.ObjectARemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

codelabs.mojom.ObjectARemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  doA() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      codelabs.mojom.ObjectA_DoA_ParamsSpec,
      null,
      []);
  }

};

codelabs.mojom.ObjectA.getRemote = function() {
  let remote = new codelabs.mojom.ObjectARemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'codelabs.mojom.ObjectA',
    'context');
  return remote.$;
};

// ParamsSpec for DoA
codelabs.mojom.ObjectA_DoA_ParamsSpec = {
  $: {
    structSpec: {
      name: 'codelabs.mojom.ObjectA.DoA_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
codelabs.mojom.ObjectAPtr = codelabs.mojom.ObjectARemote;
codelabs.mojom.ObjectARequest = codelabs.mojom.ObjectAPendingReceiver;


// Interface: ObjectB
codelabs.mojom.ObjectB = {};

codelabs.mojom.ObjectBPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

codelabs.mojom.ObjectBRemote = class {
  static get $interfaceName() {
    return 'codelabs.mojom.ObjectB';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      codelabs.mojom.ObjectBPendingReceiver,
      handle);
    this.$ = new codelabs.mojom.ObjectBRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

codelabs.mojom.ObjectBRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  doB() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      codelabs.mojom.ObjectB_DoB_ParamsSpec,
      null,
      []);
  }

};

codelabs.mojom.ObjectB.getRemote = function() {
  let remote = new codelabs.mojom.ObjectBRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'codelabs.mojom.ObjectB',
    'context');
  return remote.$;
};

// ParamsSpec for DoB
codelabs.mojom.ObjectB_DoB_ParamsSpec = {
  $: {
    structSpec: {
      name: 'codelabs.mojom.ObjectB.DoB_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
codelabs.mojom.ObjectBPtr = codelabs.mojom.ObjectBRemote;
codelabs.mojom.ObjectBRequest = codelabs.mojom.ObjectBPendingReceiver;


// Interface: AssociatedProcess
codelabs.mojom.AssociatedProcess = {};

codelabs.mojom.AssociatedProcessPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

codelabs.mojom.AssociatedProcessRemote = class {
  static get $interfaceName() {
    return 'codelabs.mojom.AssociatedProcess';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      codelabs.mojom.AssociatedProcessPendingReceiver,
      handle);
    this.$ = new codelabs.mojom.AssociatedProcessRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

codelabs.mojom.AssociatedProcessRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  setProcess(process) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      codelabs.mojom.AssociatedProcess_SetProcess_ParamsSpec,
      null,
      [process]);
  }

};

codelabs.mojom.AssociatedProcess.getRemote = function() {
  let remote = new codelabs.mojom.AssociatedProcessRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'codelabs.mojom.AssociatedProcess',
    'context');
  return remote.$;
};

// ParamsSpec for SetProcess
codelabs.mojom.AssociatedProcess_SetProcess_ParamsSpec = {
  $: {
    structSpec: {
      name: 'codelabs.mojom.AssociatedProcess.SetProcess_Params',
      packedSize: 16,
      fields: [
        { name: 'process', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
codelabs.mojom.AssociatedProcessPtr = codelabs.mojom.AssociatedProcessRemote;
codelabs.mojom.AssociatedProcessRequest = codelabs.mojom.AssociatedProcessPendingReceiver;


// Interface: GenericInterface
codelabs.mojom.GenericInterface = {};

codelabs.mojom.GenericInterfacePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

codelabs.mojom.GenericInterfaceRemote = class {
  static get $interfaceName() {
    return 'codelabs.mojom.GenericInterface';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      codelabs.mojom.GenericInterfacePendingReceiver,
      handle);
    this.$ = new codelabs.mojom.GenericInterfaceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

codelabs.mojom.GenericInterfaceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

codelabs.mojom.GenericInterface.getRemote = function() {
  let remote = new codelabs.mojom.GenericInterfaceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'codelabs.mojom.GenericInterface',
    'context');
  return remote.$;
};

// Legacy compatibility
codelabs.mojom.GenericInterfacePtr = codelabs.mojom.GenericInterfaceRemote;
codelabs.mojom.GenericInterfaceRequest = codelabs.mojom.GenericInterfacePendingReceiver;


// Interface: Process
codelabs.mojom.Process = {};

codelabs.mojom.ProcessPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

codelabs.mojom.ProcessRemote = class {
  static get $interfaceName() {
    return 'codelabs.mojom.Process';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      codelabs.mojom.ProcessPendingReceiver,
      handle);
    this.$ = new codelabs.mojom.ProcessRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

codelabs.mojom.ProcessRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  sayHello() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      codelabs.mojom.Process_SayHello_ParamsSpec,
      null,
      []);
  }

  getAssociatedInterface(name, receiver) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      codelabs.mojom.Process_GetAssociatedInterface_ParamsSpec,
      null,
      [name, receiver]);
  }

};

codelabs.mojom.Process.getRemote = function() {
  let remote = new codelabs.mojom.ProcessRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'codelabs.mojom.Process',
    'context');
  return remote.$;
};

// ParamsSpec for SayHello
codelabs.mojom.Process_SayHello_ParamsSpec = {
  $: {
    structSpec: {
      name: 'codelabs.mojom.Process.SayHello_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetAssociatedInterface
codelabs.mojom.Process_GetAssociatedInterface_ParamsSpec = {
  $: {
    structSpec: {
      name: 'codelabs.mojom.Process.GetAssociatedInterface_Params',
      packedSize: 24,
      fields: [
        { name: 'name', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'receiver', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.AssociatedInterfaceRequest, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
codelabs.mojom.ProcessPtr = codelabs.mojom.ProcessRemote;
codelabs.mojom.ProcessRequest = codelabs.mojom.ProcessPendingReceiver;

