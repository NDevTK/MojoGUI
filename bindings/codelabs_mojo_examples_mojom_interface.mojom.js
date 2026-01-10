// Auto-generated MojoJS binding
// Source: chromium_src/codelabs/mojo_examples/mojom/interface.mojom
// Module: codelabs.mojom

'use strict';

// Module namespace
var codelabs = codelabs || {};
codelabs.mojom = codelabs.mojom || {};

codelabs.mojom.ObjectA = {};
codelabs.mojom.ObjectA.$interfaceName = 'codelabs.mojom.ObjectA';
codelabs.mojom.ObjectA_DoA_ParamsSpec = { $: {} };
codelabs.mojom.ObjectB = {};
codelabs.mojom.ObjectB.$interfaceName = 'codelabs.mojom.ObjectB';
codelabs.mojom.ObjectB_DoB_ParamsSpec = { $: {} };
codelabs.mojom.AssociatedProcess = {};
codelabs.mojom.AssociatedProcess.$interfaceName = 'codelabs.mojom.AssociatedProcess';
codelabs.mojom.AssociatedProcess_SetProcess_ParamsSpec = { $: {} };
codelabs.mojom.GenericInterface = {};
codelabs.mojom.GenericInterface.$interfaceName = 'codelabs.mojom.GenericInterface';
codelabs.mojom.Process = {};
codelabs.mojom.Process.$interfaceName = 'codelabs.mojom.Process';
codelabs.mojom.Process_SayHello_ParamsSpec = { $: {} };
codelabs.mojom.Process_GetAssociatedInterface_ParamsSpec = { $: {} };

// Interface: ObjectA
mojo.internal.Struct(
    codelabs.mojom.ObjectA_DoA_ParamsSpec, 'codelabs.mojom.ObjectA_DoA_Params', [
    ],
    [[0, 8]]);

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
      [],
      false);
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

codelabs.mojom.ObjectAReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = codelabs.mojom.ObjectA_DoA_ParamsSpec.$.decode(message.payload);
          const result = this.impl.doA();
          break;
        }
      }
    });
  }
};

codelabs.mojom.ObjectAReceiver = codelabs.mojom.ObjectAReceiver;

codelabs.mojom.ObjectAPtr = codelabs.mojom.ObjectARemote;
codelabs.mojom.ObjectARequest = codelabs.mojom.ObjectAPendingReceiver;


// Interface: ObjectB
mojo.internal.Struct(
    codelabs.mojom.ObjectB_DoB_ParamsSpec, 'codelabs.mojom.ObjectB_DoB_Params', [
    ],
    [[0, 8]]);

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
      [],
      false);
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

codelabs.mojom.ObjectBReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = codelabs.mojom.ObjectB_DoB_ParamsSpec.$.decode(message.payload);
          const result = this.impl.doB();
          break;
        }
      }
    });
  }
};

codelabs.mojom.ObjectBReceiver = codelabs.mojom.ObjectBReceiver;

codelabs.mojom.ObjectBPtr = codelabs.mojom.ObjectBRemote;
codelabs.mojom.ObjectBRequest = codelabs.mojom.ObjectBPendingReceiver;


// Interface: AssociatedProcess
mojo.internal.Struct(
    codelabs.mojom.AssociatedProcess_SetProcess_ParamsSpec, 'codelabs.mojom.AssociatedProcess_SetProcess_Params', [
      mojo.internal.StructField('process', 0, 0, mojo.internal.InterfaceRequest(codelabs.mojom.ProcessSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

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
      [process],
      false);
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

codelabs.mojom.AssociatedProcessReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = codelabs.mojom.AssociatedProcess_SetProcess_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setProcess(params.process);
          break;
        }
      }
    });
  }
};

codelabs.mojom.AssociatedProcessReceiver = codelabs.mojom.AssociatedProcessReceiver;

codelabs.mojom.AssociatedProcessPtr = codelabs.mojom.AssociatedProcessRemote;
codelabs.mojom.AssociatedProcessRequest = codelabs.mojom.AssociatedProcessPendingReceiver;


// Interface: GenericInterface
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

codelabs.mojom.GenericInterfaceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
      }
    });
  }
};

codelabs.mojom.GenericInterfaceReceiver = codelabs.mojom.GenericInterfaceReceiver;

codelabs.mojom.GenericInterfacePtr = codelabs.mojom.GenericInterfaceRemote;
codelabs.mojom.GenericInterfaceRequest = codelabs.mojom.GenericInterfacePendingReceiver;


// Interface: Process
mojo.internal.Struct(
    codelabs.mojom.Process_SayHello_ParamsSpec, 'codelabs.mojom.Process_SayHello_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    codelabs.mojom.Process_GetAssociatedInterface_ParamsSpec, 'codelabs.mojom.Process_GetAssociatedInterface_Params', [
      mojo.internal.StructField('name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('receiver', 8, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 24]]);

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
      [],
      false);
  }

  getAssociatedInterface(name, receiver) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      codelabs.mojom.Process_GetAssociatedInterface_ParamsSpec,
      null,
      [name, receiver],
      false);
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

codelabs.mojom.ProcessReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = codelabs.mojom.Process_SayHello_ParamsSpec.$.decode(message.payload);
          const result = this.impl.sayHello();
          break;
        }
        case 1: {
          const params = codelabs.mojom.Process_GetAssociatedInterface_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getAssociatedInterface(params.name, params.receiver);
          break;
        }
      }
    });
  }
};

codelabs.mojom.ProcessReceiver = codelabs.mojom.ProcessReceiver;

codelabs.mojom.ProcessPtr = codelabs.mojom.ProcessRemote;
codelabs.mojom.ProcessRequest = codelabs.mojom.ProcessPendingReceiver;

