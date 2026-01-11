// Auto-generated MojoJS binding
// Source: chromium_src/chrome/common/network_diagnostics.mojom
// Module: chrome.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var chrome = chrome || {};
chrome.mojom = chrome.mojom || {};
var url = url || {};

chrome.mojom.NetworkDiagnostics = {};
chrome.mojom.NetworkDiagnostics.$interfaceName = 'chrome.mojom.NetworkDiagnostics';
chrome.mojom.NetworkDiagnostics_RunNetworkDiagnostics_ParamsSpec = { $: {} };
chrome.mojom.NetworkDiagnosticsClient = {};
chrome.mojom.NetworkDiagnosticsClient.$interfaceName = 'chrome.mojom.NetworkDiagnosticsClient';
chrome.mojom.NetworkDiagnosticsClient_SetCanShowNetworkDiagnosticsDialog_ParamsSpec = { $: {} };
chrome.mojom.NetworkDiagnosticsClient_DNSProbeStatus_ParamsSpec = { $: {} };

// Interface: NetworkDiagnostics
mojo.internal.Struct(
    chrome.mojom.NetworkDiagnostics_RunNetworkDiagnostics_ParamsSpec, 'chrome.mojom.NetworkDiagnostics_RunNetworkDiagnostics_Params', [
      mojo.internal.StructField('failed_url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

chrome.mojom.NetworkDiagnosticsPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chrome.mojom.NetworkDiagnosticsRemote = class {
  static get $interfaceName() {
    return 'chrome.mojom.NetworkDiagnostics';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chrome.mojom.NetworkDiagnosticsPendingReceiver,
      handle);
    this.$ = new chrome.mojom.NetworkDiagnosticsRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  runNetworkDiagnostics(failed_url) {
    return this.$.runNetworkDiagnostics(failed_url);
  }
};

chrome.mojom.NetworkDiagnosticsRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('NetworkDiagnostics', [
      { explicit: null },
    ]);
  }

  runNetworkDiagnostics(failed_url) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      chrome.mojom.NetworkDiagnostics_RunNetworkDiagnostics_ParamsSpec,
      null,
      [failed_url],
      false);
  }

};

chrome.mojom.NetworkDiagnostics.getRemote = function() {
  let remote = new chrome.mojom.NetworkDiagnosticsRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chrome.mojom.NetworkDiagnostics',
    'context');
  return remote.$;
};

chrome.mojom.NetworkDiagnosticsReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('NetworkDiagnostics', [
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
             decoder.decodeStructInline(chrome.mojom.NetworkDiagnostics_RunNetworkDiagnostics_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chrome.mojom.NetworkDiagnostics_RunNetworkDiagnostics_ParamsSpec.$.structSpec);
          const result = this.impl.runNetworkDiagnostics(params.failed_url);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

chrome.mojom.NetworkDiagnosticsReceiver = chrome.mojom.NetworkDiagnosticsReceiver;

chrome.mojom.NetworkDiagnosticsPtr = chrome.mojom.NetworkDiagnosticsRemote;
chrome.mojom.NetworkDiagnosticsRequest = chrome.mojom.NetworkDiagnosticsPendingReceiver;


// Interface: NetworkDiagnosticsClient
mojo.internal.Struct(
    chrome.mojom.NetworkDiagnosticsClient_SetCanShowNetworkDiagnosticsDialog_ParamsSpec, 'chrome.mojom.NetworkDiagnosticsClient_SetCanShowNetworkDiagnosticsDialog_Params', [
      mojo.internal.StructField('can_show', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chrome.mojom.NetworkDiagnosticsClient_DNSProbeStatus_ParamsSpec, 'chrome.mojom.NetworkDiagnosticsClient_DNSProbeStatus_Params', [
      mojo.internal.StructField('status', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

chrome.mojom.NetworkDiagnosticsClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chrome.mojom.NetworkDiagnosticsClientRemote = class {
  static get $interfaceName() {
    return 'chrome.mojom.NetworkDiagnosticsClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chrome.mojom.NetworkDiagnosticsClientPendingReceiver,
      handle);
    this.$ = new chrome.mojom.NetworkDiagnosticsClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  setCanShowNetworkDiagnosticsDialog(can_show) {
    return this.$.setCanShowNetworkDiagnosticsDialog(can_show);
  }
  dNSProbeStatus(status) {
    return this.$.dNSProbeStatus(status);
  }
};

chrome.mojom.NetworkDiagnosticsClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('NetworkDiagnosticsClient', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  setCanShowNetworkDiagnosticsDialog(can_show) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      chrome.mojom.NetworkDiagnosticsClient_SetCanShowNetworkDiagnosticsDialog_ParamsSpec,
      null,
      [can_show],
      false);
  }

  dNSProbeStatus(status) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      chrome.mojom.NetworkDiagnosticsClient_DNSProbeStatus_ParamsSpec,
      null,
      [status],
      false);
  }

};

chrome.mojom.NetworkDiagnosticsClient.getRemote = function() {
  let remote = new chrome.mojom.NetworkDiagnosticsClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chrome.mojom.NetworkDiagnosticsClient',
    'context');
  return remote.$;
};

chrome.mojom.NetworkDiagnosticsClientReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('NetworkDiagnosticsClient', [
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
        message = {{ header: args[1], payload: payload, handles: args[3] || [] }};
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chrome.mojom.NetworkDiagnosticsClient_SetCanShowNetworkDiagnosticsDialog_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chrome.mojom.NetworkDiagnosticsClient_DNSProbeStatus_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chrome.mojom.NetworkDiagnosticsClient_SetCanShowNetworkDiagnosticsDialog_ParamsSpec.$.structSpec);
          const result = this.impl.setCanShowNetworkDiagnosticsDialog(params.can_show);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chrome.mojom.NetworkDiagnosticsClient_DNSProbeStatus_ParamsSpec.$.structSpec);
          const result = this.impl.dNSProbeStatus(params.status);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

chrome.mojom.NetworkDiagnosticsClientReceiver = chrome.mojom.NetworkDiagnosticsClientReceiver;

chrome.mojom.NetworkDiagnosticsClientPtr = chrome.mojom.NetworkDiagnosticsClientRemote;
chrome.mojom.NetworkDiagnosticsClientRequest = chrome.mojom.NetworkDiagnosticsClientPendingReceiver;

