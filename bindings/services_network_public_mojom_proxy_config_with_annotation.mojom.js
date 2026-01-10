// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/proxy_config_with_annotation.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};

network.mojom.ProxyConfigWithAnnotationSpec = { $: {} };
network.mojom.ProxyConfigClient = {};
network.mojom.ProxyConfigClient.$interfaceName = 'network.mojom.ProxyConfigClient';
network.mojom.ProxyConfigClient_OnProxyConfigUpdated_ParamsSpec = { $: {} };
network.mojom.ProxyConfigClient_FlushProxyConfig_ParamsSpec = { $: {} };
network.mojom.ProxyConfigClient_FlushProxyConfig_ResponseParamsSpec = { $: {} };
network.mojom.ProxyConfigPollerClient = {};
network.mojom.ProxyConfigPollerClient.$interfaceName = 'network.mojom.ProxyConfigPollerClient';
network.mojom.ProxyConfigPollerClient_OnLazyProxyConfigPoll_ParamsSpec = { $: {} };
network.mojom.ProxyErrorClient = {};
network.mojom.ProxyErrorClient.$interfaceName = 'network.mojom.ProxyErrorClient';
network.mojom.ProxyErrorClient_OnPACScriptError_ParamsSpec = { $: {} };
network.mojom.ProxyErrorClient_OnRequestMaybeFailedDueToProxySettings_ParamsSpec = { $: {} };

// Struct: ProxyConfigWithAnnotation
mojo.internal.Struct(
    network.mojom.ProxyConfigWithAnnotationSpec, 'network.mojom.ProxyConfigWithAnnotation', [
      mojo.internal.StructField('value', 0, 0, network.mojom.ProxyConfigSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('traffic_annotation', 8, 0, network.mojom.MutableNetworkTrafficAnnotationTagSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: ProxyConfigClient
mojo.internal.Struct(
    network.mojom.ProxyConfigClient_OnProxyConfigUpdated_ParamsSpec, 'network.mojom.ProxyConfigClient_OnProxyConfigUpdated_Params', [
      mojo.internal.StructField('proxy_config', 0, 0, network.mojom.ProxyConfigWithAnnotationSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.ProxyConfigClient_FlushProxyConfig_ParamsSpec, 'network.mojom.ProxyConfigClient_FlushProxyConfig_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    network.mojom.ProxyConfigClient_FlushProxyConfig_ResponseParamsSpec, 'network.mojom.ProxyConfigClient_FlushProxyConfig_ResponseParams', [
    ],
    [[0, 8]]);

network.mojom.ProxyConfigClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

network.mojom.ProxyConfigClientRemote = class {
  static get $interfaceName() {
    return 'network.mojom.ProxyConfigClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      network.mojom.ProxyConfigClientPendingReceiver,
      handle);
    this.$ = new network.mojom.ProxyConfigClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

network.mojom.ProxyConfigClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onProxyConfigUpdated(proxy_config) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      network.mojom.ProxyConfigClient_OnProxyConfigUpdated_ParamsSpec,
      null,
      [proxy_config],
      false);
  }

  flushProxyConfig() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      network.mojom.ProxyConfigClient_FlushProxyConfig_ParamsSpec,
      network.mojom.ProxyConfigClient_FlushProxyConfig_ResponseParamsSpec,
      [],
      false);
  }

};

network.mojom.ProxyConfigClient.getRemote = function() {
  let remote = new network.mojom.ProxyConfigClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'network.mojom.ProxyConfigClient',
    'context');
  return remote.$;
};

network.mojom.ProxyConfigClientReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        message = {
          header: args[1],
          payload: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: OnProxyConfigUpdated
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(network.mojom.ProxyConfigClient_OnProxyConfigUpdated_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnProxyConfigUpdated (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: FlushProxyConfig
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(network.mojom.ProxyConfigClient_FlushProxyConfig_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> FlushProxyConfig (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(network.mojom.ProxyConfigClient_OnProxyConfigUpdated_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onProxyConfigUpdated');
          const result = this.impl.onProxyConfigUpdated(params.proxy_config);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(network.mojom.ProxyConfigClient_FlushProxyConfig_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.flushProxyConfig');
          const result = this.impl.flushProxyConfig();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, network.mojom.ProxyConfigClient_FlushProxyConfig_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

network.mojom.ProxyConfigClientReceiver = network.mojom.ProxyConfigClientReceiver;

network.mojom.ProxyConfigClientPtr = network.mojom.ProxyConfigClientRemote;
network.mojom.ProxyConfigClientRequest = network.mojom.ProxyConfigClientPendingReceiver;


// Interface: ProxyConfigPollerClient
mojo.internal.Struct(
    network.mojom.ProxyConfigPollerClient_OnLazyProxyConfigPoll_ParamsSpec, 'network.mojom.ProxyConfigPollerClient_OnLazyProxyConfigPoll_Params', [
    ],
    [[0, 8]]);

network.mojom.ProxyConfigPollerClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

network.mojom.ProxyConfigPollerClientRemote = class {
  static get $interfaceName() {
    return 'network.mojom.ProxyConfigPollerClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      network.mojom.ProxyConfigPollerClientPendingReceiver,
      handle);
    this.$ = new network.mojom.ProxyConfigPollerClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

network.mojom.ProxyConfigPollerClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onLazyProxyConfigPoll() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      network.mojom.ProxyConfigPollerClient_OnLazyProxyConfigPoll_ParamsSpec,
      null,
      [],
      false);
  }

};

network.mojom.ProxyConfigPollerClient.getRemote = function() {
  let remote = new network.mojom.ProxyConfigPollerClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'network.mojom.ProxyConfigPollerClient',
    'context');
  return remote.$;
};

network.mojom.ProxyConfigPollerClientReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        message = {
          header: args[1],
          payload: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: OnLazyProxyConfigPoll
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(network.mojom.ProxyConfigPollerClient_OnLazyProxyConfigPoll_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnLazyProxyConfigPoll (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(network.mojom.ProxyConfigPollerClient_OnLazyProxyConfigPoll_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onLazyProxyConfigPoll');
          const result = this.impl.onLazyProxyConfigPoll();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

network.mojom.ProxyConfigPollerClientReceiver = network.mojom.ProxyConfigPollerClientReceiver;

network.mojom.ProxyConfigPollerClientPtr = network.mojom.ProxyConfigPollerClientRemote;
network.mojom.ProxyConfigPollerClientRequest = network.mojom.ProxyConfigPollerClientPendingReceiver;


// Interface: ProxyErrorClient
mojo.internal.Struct(
    network.mojom.ProxyErrorClient_OnPACScriptError_ParamsSpec, 'network.mojom.ProxyErrorClient_OnPACScriptError_Params', [
      mojo.internal.StructField('details', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('line_number', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    network.mojom.ProxyErrorClient_OnRequestMaybeFailedDueToProxySettings_ParamsSpec, 'network.mojom.ProxyErrorClient_OnRequestMaybeFailedDueToProxySettings_Params', [
      mojo.internal.StructField('net_error', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

network.mojom.ProxyErrorClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

network.mojom.ProxyErrorClientRemote = class {
  static get $interfaceName() {
    return 'network.mojom.ProxyErrorClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      network.mojom.ProxyErrorClientPendingReceiver,
      handle);
    this.$ = new network.mojom.ProxyErrorClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

network.mojom.ProxyErrorClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onPACScriptError(line_number, details) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      network.mojom.ProxyErrorClient_OnPACScriptError_ParamsSpec,
      null,
      [line_number, details],
      false);
  }

  onRequestMaybeFailedDueToProxySettings(net_error) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      network.mojom.ProxyErrorClient_OnRequestMaybeFailedDueToProxySettings_ParamsSpec,
      null,
      [net_error],
      false);
  }

};

network.mojom.ProxyErrorClient.getRemote = function() {
  let remote = new network.mojom.ProxyErrorClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'network.mojom.ProxyErrorClient',
    'context');
  return remote.$;
};

network.mojom.ProxyErrorClientReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        message = {
          header: args[1],
          payload: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: OnPACScriptError
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(network.mojom.ProxyErrorClient_OnPACScriptError_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnPACScriptError (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: OnRequestMaybeFailedDueToProxySettings
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(network.mojom.ProxyErrorClient_OnRequestMaybeFailedDueToProxySettings_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnRequestMaybeFailedDueToProxySettings (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(network.mojom.ProxyErrorClient_OnPACScriptError_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onPACScriptError');
          const result = this.impl.onPACScriptError(params.line_number, params.details);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(network.mojom.ProxyErrorClient_OnRequestMaybeFailedDueToProxySettings_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onRequestMaybeFailedDueToProxySettings');
          const result = this.impl.onRequestMaybeFailedDueToProxySettings(params.net_error);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

network.mojom.ProxyErrorClientReceiver = network.mojom.ProxyErrorClientReceiver;

network.mojom.ProxyErrorClientPtr = network.mojom.ProxyErrorClientRemote;
network.mojom.ProxyErrorClientRequest = network.mojom.ProxyErrorClientPendingReceiver;

