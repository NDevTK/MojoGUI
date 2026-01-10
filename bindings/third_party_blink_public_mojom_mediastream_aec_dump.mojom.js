// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/mediastream/aec_dump.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var mojo_base = mojo_base || {};

blink.mojom.AecDumpAgent = {};
blink.mojom.AecDumpAgent.$interfaceName = 'blink.mojom.AecDumpAgent';
blink.mojom.AecDumpAgent_Start_ParamsSpec = { $: {} };
blink.mojom.AecDumpAgent_Stop_ParamsSpec = { $: {} };
blink.mojom.AecDumpManager = {};
blink.mojom.AecDumpManager.$interfaceName = 'blink.mojom.AecDumpManager';
blink.mojom.AecDumpManager_Add_ParamsSpec = { $: {} };

// Interface: AecDumpAgent
mojo.internal.Struct(
    blink.mojom.AecDumpAgent_Start_ParamsSpec, 'blink.mojom.AecDumpAgent_Start_Params', [
      mojo.internal.StructField('file', 0, 0, mojo_base.mojom.FileSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.AecDumpAgent_Stop_ParamsSpec, 'blink.mojom.AecDumpAgent_Stop_Params', [
    ],
    [[0, 8]]);

blink.mojom.AecDumpAgentPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.AecDumpAgentRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.AecDumpAgent';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.AecDumpAgentPendingReceiver,
      handle);
    this.$ = new blink.mojom.AecDumpAgentRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.AecDumpAgentRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  start(file) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.AecDumpAgent_Start_ParamsSpec,
      null,
      [file],
      false);
  }

  stop() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.AecDumpAgent_Stop_ParamsSpec,
      null,
      [],
      false);
  }

};

blink.mojom.AecDumpAgent.getRemote = function() {
  let remote = new blink.mojom.AecDumpAgentRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.AecDumpAgent',
    'context');
  return remote.$;
};

blink.mojom.AecDumpAgentReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(handle);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = blink.mojom.AecDumpAgent_Start_ParamsSpec.$.decode(message.payload);
          const result = this.impl.start(params.file);
          break;
        }
        case 1: {
          const params = blink.mojom.AecDumpAgent_Stop_ParamsSpec.$.decode(message.payload);
          const result = this.impl.stop();
          break;
        }
      }
    });
  }
};

blink.mojom.AecDumpAgentReceiver = blink.mojom.AecDumpAgentReceiver;

blink.mojom.AecDumpAgentPtr = blink.mojom.AecDumpAgentRemote;
blink.mojom.AecDumpAgentRequest = blink.mojom.AecDumpAgentPendingReceiver;


// Interface: AecDumpManager
mojo.internal.Struct(
    blink.mojom.AecDumpManager_Add_ParamsSpec, 'blink.mojom.AecDumpManager_Add_Params', [
      mojo.internal.StructField('agent', 0, 0, mojo.internal.InterfaceProxy(blink.mojom.AecDumpAgentSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

blink.mojom.AecDumpManagerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.AecDumpManagerRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.AecDumpManager';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.AecDumpManagerPendingReceiver,
      handle);
    this.$ = new blink.mojom.AecDumpManagerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.AecDumpManagerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  add(agent) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.AecDumpManager_Add_ParamsSpec,
      null,
      [agent],
      false);
  }

};

blink.mojom.AecDumpManager.getRemote = function() {
  let remote = new blink.mojom.AecDumpManagerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.AecDumpManager',
    'context');
  return remote.$;
};

blink.mojom.AecDumpManagerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(handle);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = blink.mojom.AecDumpManager_Add_ParamsSpec.$.decode(message.payload);
          const result = this.impl.add(params.agent);
          break;
        }
      }
    });
  }
};

blink.mojom.AecDumpManagerReceiver = blink.mojom.AecDumpManagerReceiver;

blink.mojom.AecDumpManagerPtr = blink.mojom.AecDumpManagerRemote;
blink.mojom.AecDumpManagerRequest = blink.mojom.AecDumpManagerPendingReceiver;

