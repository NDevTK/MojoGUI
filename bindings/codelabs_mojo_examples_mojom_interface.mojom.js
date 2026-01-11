// Auto-generated MojoJS binding
// Source: chromium_src/codelabs/mojo_examples/mojom/interface.mojom
// Module: codelabs.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

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
  doA() {
    return this.$.doA();
  }
};

codelabs.mojom.ObjectARemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ObjectA', [
      { explicit: null },
    ]);
  }

  doA() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
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
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ObjectA', [
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(codelabs.mojom.ObjectA_DoA_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(codelabs.mojom.ObjectA_DoA_ParamsSpec.$.structSpec);
          const result = this.impl.doA();
          break;
        }
      }
      } catch (err) {}
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
  doB() {
    return this.$.doB();
  }
};

codelabs.mojom.ObjectBRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ObjectB', [
      { explicit: null },
    ]);
  }

  doB() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
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
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ObjectB', [
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(codelabs.mojom.ObjectB_DoB_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(codelabs.mojom.ObjectB_DoB_ParamsSpec.$.structSpec);
          const result = this.impl.doB();
          break;
        }
      }
      } catch (err) {}
    });
  }
};

codelabs.mojom.ObjectBReceiver = codelabs.mojom.ObjectBReceiver;

codelabs.mojom.ObjectBPtr = codelabs.mojom.ObjectBRemote;
codelabs.mojom.ObjectBRequest = codelabs.mojom.ObjectBPendingReceiver;


// Interface: AssociatedProcess
mojo.internal.Struct(
    codelabs.mojom.AssociatedProcess_SetProcess_ParamsSpec, 'codelabs.mojom.AssociatedProcess_SetProcess_Params', [
      mojo.internal.StructField('process', 0, 0, mojo.internal.InterfaceRequest(codelabs.mojom.ProcessRemote), null, false, 0, undefined),
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
  setProcess(process) {
    return this.$.setProcess(process);
  }
};

codelabs.mojom.AssociatedProcessRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('AssociatedProcess', [
      { explicit: null },
    ]);
  }

  setProcess(process) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
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
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('AssociatedProcess', [
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(codelabs.mojom.AssociatedProcess_SetProcess_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(codelabs.mojom.AssociatedProcess_SetProcess_ParamsSpec.$.structSpec);
          const result = this.impl.setProcess(params.process);
          break;
        }
      }
      } catch (err) {}
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
    this.ordinals = window.mojoScrambler.getOrdinals('GenericInterface', [
    ]);
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
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('GenericInterface', [
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
      }
      } catch (err) {}
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
  sayHello() {
    return this.$.sayHello();
  }
  getAssociatedInterface(name, receiver) {
    return this.$.getAssociatedInterface(name, receiver);
  }
};

codelabs.mojom.ProcessRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('Process', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  sayHello() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      codelabs.mojom.Process_SayHello_ParamsSpec,
      null,
      [],
      false);
  }

  getAssociatedInterface(name, receiver) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
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
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('Process', [
      { explicit: null },
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(codelabs.mojom.Process_SayHello_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(codelabs.mojom.Process_GetAssociatedInterface_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(codelabs.mojom.Process_SayHello_ParamsSpec.$.structSpec);
          const result = this.impl.sayHello();
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(codelabs.mojom.Process_GetAssociatedInterface_ParamsSpec.$.structSpec);
          const result = this.impl.getAssociatedInterface(params.name, params.receiver);
          break;
        }
      }
      } catch (err) {}
    });
  }
};

codelabs.mojom.ProcessReceiver = codelabs.mojom.ProcessReceiver;

codelabs.mojom.ProcessPtr = codelabs.mojom.ProcessRemote;
codelabs.mojom.ProcessRequest = codelabs.mojom.ProcessPendingReceiver;

