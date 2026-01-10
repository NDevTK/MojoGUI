// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/worker/worklet_global_scope_creation_params.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var mojo_base = mojo_base || {};
var url = url || {};

blink.mojom.WorkletGlobalScopeCreationParamsSpec = { $: {} };
blink.mojom.WorkletDevToolsHost = {};
blink.mojom.WorkletDevToolsHost.$interfaceName = 'blink.mojom.WorkletDevToolsHost';
blink.mojom.WorkletDevToolsHost_OnReadyForInspection_ParamsSpec = { $: {} };

// Struct: WorkletGlobalScopeCreationParams
mojo.internal.Struct(
    blink.mojom.WorkletGlobalScopeCreationParamsSpec, 'blink.mojom.WorkletGlobalScopeCreationParams', [
      mojo.internal.StructField('script_url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('starter_origin', 8, 0, url.mojom.OriginSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('origin_trial_features', 16, 0, mojo.internal.Array(blink.mojom.OriginTrialFeatureSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('devtools_token', 24, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('devtools_host', 32, 0, mojo.internal.InterfaceProxy(blink.mojom.WorkletDevToolsHostSpec), null, false, 0, undefined),
      mojo.internal.StructField('code_cache_host', 40, 0, mojo.internal.InterfaceProxy(blink.mojom.CodeCacheHostRemote), null, true, 0, undefined),
      mojo.internal.StructField('browser_interface_broker', 48, 0, mojo.internal.InterfaceProxy(blink.mojom.BrowserInterfaceBrokerRemote), null, false, 0, undefined),
      mojo.internal.StructField('wait_for_debugger', 56, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 72]]);

// Interface: WorkletDevToolsHost
mojo.internal.Struct(
    blink.mojom.WorkletDevToolsHost_OnReadyForInspection_ParamsSpec, 'blink.mojom.WorkletDevToolsHost_OnReadyForInspection_Params', [
      mojo.internal.StructField('agent', 0, 0, mojo.internal.InterfaceProxy(blink.mojom.DevToolsAgentRemote), null, false, 0, undefined),
      mojo.internal.StructField('agent_host', 8, 0, mojo.internal.InterfaceRequest(blink.mojom.DevToolsAgentHostRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

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
      [agent, agent_host],
      false);
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

blink.mojom.WorkletDevToolsHostReceiver = class {
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
          const params = blink.mojom.WorkletDevToolsHost_OnReadyForInspection_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onReadyForInspection(params.agent, params.agent_host);
          break;
        }
      }
    });
  }
};

blink.mojom.WorkletDevToolsHostReceiver = blink.mojom.WorkletDevToolsHostReceiver;

blink.mojom.WorkletDevToolsHostPtr = blink.mojom.WorkletDevToolsHostRemote;
blink.mojom.WorkletDevToolsHostRequest = blink.mojom.WorkletDevToolsHostPendingReceiver;

