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
blink.mojom.mojom.WorkletGlobalScopeCreationParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.WorkletGlobalScopeCreationParams',
      packedSize: 56,
      fields: [
        { name: 'script_url', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'starter_origin', packedOffset: 8, packedBitOffset: 0, type: url.mojom.OriginSpec, nullable: false, minVersion: 0 },
        { name: 'origin_trial_features', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array(blink.mojom.OriginTrialFeatureSpec, false), nullable: false, minVersion: 0 },
        { name: 'devtools_token', packedOffset: 24, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: false, minVersion: 0 },
        { name: 'devtools_host', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
        { name: 'code_cache_host', packedOffset: 36, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: true, minVersion: 0 },
        { name: 'browser_interface_broker', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
        { name: 'wait_for_debugger', packedOffset: 44, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 56}]
    }
  }
};

// Interface: WorkletDevToolsHost
blink.mojom.mojom.WorkletDevToolsHost = {};

blink.mojom.mojom.WorkletDevToolsHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.mojom.WorkletDevToolsHostRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.WorkletDevToolsHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.mojom.WorkletDevToolsHostPendingReceiver,
      handle);
    this.$ = new blink.mojom.mojom.WorkletDevToolsHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.mojom.WorkletDevToolsHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onReadyForInspection(agent, agent_host) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.mojom.WorkletDevToolsHost_OnReadyForInspection_ParamsSpec,
      null,
      [agent, agent_host]);
  }

};

blink.mojom.mojom.WorkletDevToolsHost.getRemote = function() {
  let remote = new blink.mojom.mojom.WorkletDevToolsHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.WorkletDevToolsHost',
    'context');
  return remote.$;
};

// ParamsSpec for OnReadyForInspection
blink.mojom.mojom.WorkletDevToolsHost_OnReadyForInspection_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.WorkletDevToolsHost.OnReadyForInspection_Params',
      packedSize: 16,
      fields: [
        { name: 'agent', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
        { name: 'agent_host', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
blink.mojom.mojom.WorkletDevToolsHostPtr = blink.mojom.mojom.WorkletDevToolsHostRemote;
blink.mojom.mojom.WorkletDevToolsHostRequest = blink.mojom.mojom.WorkletDevToolsHostPendingReceiver;

