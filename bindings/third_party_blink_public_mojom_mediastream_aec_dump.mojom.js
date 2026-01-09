// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/mediastream/aec_dump.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Interface: AecDumpAgent
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
      blink.mojom.AecDumpAgent_Start_ParamsSpec.$,
      null,
      [file]);
  }

  stop() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.AecDumpAgent_Stop_ParamsSpec.$,
      null,
      []);
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
}};

// ParamsSpec for Start
blink.mojom.AecDumpAgent_Start_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AecDumpAgent.Start_Params',
      packedSize: 16,
      fields: [
        { name: 'file', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for Stop
blink.mojom.AecDumpAgent_Stop_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AecDumpAgent.Stop_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
}};

// Legacy compatibility
blink.mojom.AecDumpAgentPtr = blink.mojom.AecDumpAgentRemote;
blink.mojom.AecDumpAgentRequest = blink.mojom.AecDumpAgentPendingReceiver;


// Interface: AecDumpManager
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
      blink.mojom.AecDumpManager_Add_ParamsSpec.$,
      null,
      [agent]);
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
}};

// ParamsSpec for Add
blink.mojom.AecDumpManager_Add_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AecDumpManager.Add_Params',
      packedSize: 16,
      fields: [
        { name: 'agent', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// Legacy compatibility
blink.mojom.AecDumpManagerPtr = blink.mojom.AecDumpManagerRemote;
blink.mojom.AecDumpManagerRequest = blink.mojom.AecDumpManagerPendingReceiver;

