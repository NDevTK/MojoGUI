// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/proxy_config_with_annotation.mojom
// Module: network.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

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
  onProxyConfigUpdated(proxy_config) {
    return this.$.onProxyConfigUpdated(proxy_config);
  }
  flushProxyConfig() {
    return this.$.flushProxyConfig();
  }
};

network.mojom.ProxyConfigClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ProxyConfigClient', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  onProxyConfigUpdated(proxy_config) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      network.mojom.ProxyConfigClient_OnProxyConfigUpdated_ParamsSpec,
      null,
      [proxy_config],
      false);
  }

  flushProxyConfig() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
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
    const ordinals = window.mojoScrambler.getOrdinals('ProxyConfigClient', [
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
             decoder.decodeStructInline(network.mojom.ProxyConfigClient_OnProxyConfigUpdated_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(network.mojom.ProxyConfigClient_FlushProxyConfig_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.ProxyConfigClient_OnProxyConfigUpdated_ParamsSpec.$.structSpec);
          const result = this.impl.onProxyConfigUpdated(params.proxy_config);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.ProxyConfigClient_FlushProxyConfig_ParamsSpec.$.structSpec);
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
      } catch (err) {}
    });
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
  onLazyProxyConfigPoll() {
    return this.$.onLazyProxyConfigPoll();
  }
};

network.mojom.ProxyConfigPollerClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ProxyConfigPollerClient', [
      { explicit: null },
    ]);
  }

  onLazyProxyConfigPoll() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
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
    const ordinals = window.mojoScrambler.getOrdinals('ProxyConfigPollerClient', [
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
             decoder.decodeStructInline(network.mojom.ProxyConfigPollerClient_OnLazyProxyConfigPoll_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.ProxyConfigPollerClient_OnLazyProxyConfigPoll_ParamsSpec.$.structSpec);
          const result = this.impl.onLazyProxyConfigPoll();
          break;
        }
      }
      } catch (err) {}
    });
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
  onPACScriptError(line_number, details) {
    return this.$.onPACScriptError(line_number, details);
  }
  onRequestMaybeFailedDueToProxySettings(net_error) {
    return this.$.onRequestMaybeFailedDueToProxySettings(net_error);
  }
};

network.mojom.ProxyErrorClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ProxyErrorClient', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  onPACScriptError(line_number, details) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      network.mojom.ProxyErrorClient_OnPACScriptError_ParamsSpec,
      null,
      [line_number, details],
      false);
  }

  onRequestMaybeFailedDueToProxySettings(net_error) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
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
    const ordinals = window.mojoScrambler.getOrdinals('ProxyErrorClient', [
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
             decoder.decodeStructInline(network.mojom.ProxyErrorClient_OnPACScriptError_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(network.mojom.ProxyErrorClient_OnRequestMaybeFailedDueToProxySettings_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.ProxyErrorClient_OnPACScriptError_ParamsSpec.$.structSpec);
          const result = this.impl.onPACScriptError(params.line_number, params.details);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.ProxyErrorClient_OnRequestMaybeFailedDueToProxySettings_ParamsSpec.$.structSpec);
          const result = this.impl.onRequestMaybeFailedDueToProxySettings(params.net_error);
          break;
        }
      }
      } catch (err) {}
    });
  }
};

network.mojom.ProxyErrorClientReceiver = network.mojom.ProxyErrorClientReceiver;

network.mojom.ProxyErrorClientPtr = network.mojom.ProxyErrorClientRemote;
network.mojom.ProxyErrorClientRequest = network.mojom.ProxyErrorClientPendingReceiver;

