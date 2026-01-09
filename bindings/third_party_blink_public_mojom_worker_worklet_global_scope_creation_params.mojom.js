// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/worker/worklet_global_scope_creation_params.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Struct: WorkletGlobalScopeCreationParams
blink.mojom.WorkletGlobalScopeCreationParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.WorkletGlobalScopeCreationParams',
      packedSize: 16,
      fields: [
        { name: 'wait_for_debugger', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Interface: WorkletDevToolsHost
blink.mojom.WorkletDevToolsHost = {};

blink.mojom.WorkletDevToolsHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.WorkletDevToolsHostRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.WorkletDevToolsHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.WorkletDevToolsHostPendingReceiver,
      handle);
    this.$ = new blink.mojom.WorkletDevToolsHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.WorkletDevToolsHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onReadyForInspection(agent, agent_host) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.WorkletDevToolsHost_OnReadyForInspection_ParamsSpec,
      null,
      [agent, agent_host]);
  }

};

blink.mojom.WorkletDevToolsHost.getRemote = function() {
  let remote = new blink.mojom.WorkletDevToolsHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.WorkletDevToolsHost',
    'context');
  return remote.$;
};

// ParamsSpec for OnReadyForInspection
blink.mojom.WorkletDevToolsHost_OnReadyForInspection_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.WorkletDevToolsHost.OnReadyForInspection_Params',
      packedSize: 16,
      fields: [
        { name: 'agent', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
        { name: 'agent_host', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
blink.mojom.WorkletDevToolsHostPtr = blink.mojom.WorkletDevToolsHostRemote;
blink.mojom.WorkletDevToolsHostRequest = blink.mojom.WorkletDevToolsHostPendingReceiver;

