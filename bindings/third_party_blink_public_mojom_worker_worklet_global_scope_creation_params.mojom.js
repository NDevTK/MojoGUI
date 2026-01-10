// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/worker/worklet_global_scope_creation_params.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var blink = blink || {};
var blink = blink || {};
var blink = blink || {};
var blink = blink || {};
var url = url || {};
var url = url || {};


// Struct: WorkletGlobalScopeCreationParams
blink.mojom.WorkletGlobalScopeCreationParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.WorkletGlobalScopeCreationParams',
      packedSize: 72,
      fields: [
        { name: 'script_url', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'starter_origin', packedOffset: 8, packedBitOffset: 0, type: url.mojom.OriginSpec, nullable: false, minVersion: 0 },
        { name: 'origin_trial_features', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array(blink.mojom.OriginTrialFeatureSpec, false), nullable: false, minVersion: 0 },
        { name: 'devtools_token', packedOffset: 24, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: false, minVersion: 0 },
        { name: 'devtools_host', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(blink.mojom.WorkletDevToolsHostRemote), nullable: false, minVersion: 0 },
        { name: 'code_cache_host', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(blink.mojom.CodeCacheHostRemote), nullable: true, minVersion: 0 },
        { name: 'browser_interface_broker', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(blink.mojom.BrowserInterfaceBrokerRemote), nullable: false, minVersion: 0 },
        { name: 'wait_for_debugger', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 72}]
    }
  }
};

// Interface: WorkletDevToolsHost
blink.mojom.WorkletDevToolsHost = {};

blink.mojom.WorkletDevToolsHost_OnReadyForInspection_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.WorkletDevToolsHost_OnReadyForInspection_Params',
      packedSize: 24,
      fields: [
        { name: 'agent', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(blink.mojom.DevToolsAgentRemote), nullable: false, minVersion: 0 },
        { name: 'agent_host', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(blink.mojom.DevToolsAgentHostRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

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
      packedSize: 24,
      fields: [
        { name: 'agent', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(blink.mojom.DevToolsAgentRemote), nullable: false, minVersion: 0 },
        { name: 'agent_host', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(blink.mojom.DevToolsAgentHostRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
blink.mojom.WorkletDevToolsHostPtr = blink.mojom.WorkletDevToolsHostRemote;
blink.mojom.WorkletDevToolsHostRequest = blink.mojom.WorkletDevToolsHostPendingReceiver;

