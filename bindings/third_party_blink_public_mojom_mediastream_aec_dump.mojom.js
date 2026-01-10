// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/mediastream/aec_dump.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Interface: AecDumpAgent
blink.mojom.mojom.AecDumpAgent = {};

blink.mojom.mojom.AecDumpAgentPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.mojom.AecDumpAgentRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.AecDumpAgent';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.mojom.AecDumpAgentPendingReceiver,
      handle);
    this.$ = new blink.mojom.mojom.AecDumpAgentRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.mojom.AecDumpAgentRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  start(file) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.mojom.AecDumpAgent_Start_ParamsSpec,
      null,
      [file]);
  }

  stop() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.mojom.AecDumpAgent_Stop_ParamsSpec,
      null,
      []);
  }

};

blink.mojom.mojom.AecDumpAgent.getRemote = function() {
  let remote = new blink.mojom.mojom.AecDumpAgentRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.AecDumpAgent',
    'context');
  return remote.$;
};

// ParamsSpec for Start
blink.mojom.mojom.AecDumpAgent_Start_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AecDumpAgent.Start_Params',
      packedSize: 16,
      fields: [
        { name: 'file', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.FileSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for Stop
blink.mojom.mojom.AecDumpAgent_Stop_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AecDumpAgent.Stop_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Legacy compatibility
blink.mojom.mojom.AecDumpAgentPtr = blink.mojom.mojom.AecDumpAgentRemote;
blink.mojom.mojom.AecDumpAgentRequest = blink.mojom.mojom.AecDumpAgentPendingReceiver;


// Interface: AecDumpManager
blink.mojom.mojom.AecDumpManager = {};

blink.mojom.mojom.AecDumpManagerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.mojom.AecDumpManagerRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.AecDumpManager';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.mojom.AecDumpManagerPendingReceiver,
      handle);
    this.$ = new blink.mojom.mojom.AecDumpManagerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.mojom.AecDumpManagerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  add(agent) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.mojom.AecDumpManager_Add_ParamsSpec,
      null,
      [agent]);
  }

};

blink.mojom.mojom.AecDumpManager.getRemote = function() {
  let remote = new blink.mojom.mojom.AecDumpManagerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.AecDumpManager',
    'context');
  return remote.$;
};

// ParamsSpec for Add
blink.mojom.mojom.AecDumpManager_Add_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AecDumpManager.Add_Params',
      packedSize: 16,
      fields: [
        { name: 'agent', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
blink.mojom.mojom.AecDumpManagerPtr = blink.mojom.mojom.AecDumpManagerRemote;
blink.mojom.mojom.AecDumpManagerRequest = blink.mojom.mojom.AecDumpManagerPendingReceiver;

