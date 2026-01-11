// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/worker/worklet_global_scope_creation_params.mojom
// Module: blink.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

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
      mojo.internal.StructField('devtools_host', 32, 0, mojo.internal.InterfaceProxy(blink.mojom.WorkletDevToolsHostRemote), null, false, 0, undefined),
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
  onReadyForInspection(agent, agent_host) {
    return this.$.onReadyForInspection(agent, agent_host);
  }
};

blink.mojom.WorkletDevToolsHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('WorkletDevToolsHost', [
      { explicit: null },
    ]);
  }

  onReadyForInspection(agent, agent_host) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
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
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('WorkletDevToolsHost', [
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
        message = {{ header: args[1], payload: payload, handles: args[3] || [] }};
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.WorkletDevToolsHost_OnReadyForInspection_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.WorkletDevToolsHost_OnReadyForInspection_ParamsSpec.$.structSpec);
          const result = this.impl.onReadyForInspection(params.agent, params.agent_host);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

blink.mojom.WorkletDevToolsHostReceiver = blink.mojom.WorkletDevToolsHostReceiver;

blink.mojom.WorkletDevToolsHostPtr = blink.mojom.WorkletDevToolsHostRemote;
blink.mojom.WorkletDevToolsHostRequest = blink.mojom.WorkletDevToolsHostPendingReceiver;

