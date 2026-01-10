// Auto-generated MojoJS binding
// Source: chromium_src/chrome/common/network_diagnostics.mojom
// Module: chrome.mojom

'use strict';

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
};

chrome.mojom.NetworkDiagnosticsRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  runNetworkDiagnostics(failed_url) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
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
        let payload = args[2];
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload);
        }
        message = {
          header: args[1],
          payload: payload,
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
        
        // Try Method 0: RunNetworkDiagnostics
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(chrome.mojom.NetworkDiagnostics_RunNetworkDiagnostics_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RunNetworkDiagnostics (0)');
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
          const params = decoder.decodeStruct(chrome.mojom.NetworkDiagnostics_RunNetworkDiagnostics_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.runNetworkDiagnostics');
          const result = this.impl.runNetworkDiagnostics(params.failed_url);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
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
};

chrome.mojom.NetworkDiagnosticsClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  setCanShowNetworkDiagnosticsDialog(can_show) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      chrome.mojom.NetworkDiagnosticsClient_SetCanShowNetworkDiagnosticsDialog_ParamsSpec,
      null,
      [can_show],
      false);
  }

  dNSProbeStatus(status) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
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
        let payload = args[2];
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload);
        }
        message = {
          header: args[1],
          payload: payload,
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
        
        // Try Method 0: SetCanShowNetworkDiagnosticsDialog
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(chrome.mojom.NetworkDiagnosticsClient_SetCanShowNetworkDiagnosticsDialog_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetCanShowNetworkDiagnosticsDialog (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: DNSProbeStatus
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(chrome.mojom.NetworkDiagnosticsClient_DNSProbeStatus_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DNSProbeStatus (1)');
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
          const params = decoder.decodeStruct(chrome.mojom.NetworkDiagnosticsClient_SetCanShowNetworkDiagnosticsDialog_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setCanShowNetworkDiagnosticsDialog');
          const result = this.impl.setCanShowNetworkDiagnosticsDialog(params.can_show);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(chrome.mojom.NetworkDiagnosticsClient_DNSProbeStatus_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.dNSProbeStatus');
          const result = this.impl.dNSProbeStatus(params.status);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

chrome.mojom.NetworkDiagnosticsClientReceiver = chrome.mojom.NetworkDiagnosticsClientReceiver;

chrome.mojom.NetworkDiagnosticsClientPtr = chrome.mojom.NetworkDiagnosticsClientRemote;
chrome.mojom.NetworkDiagnosticsClientRequest = chrome.mojom.NetworkDiagnosticsClientPendingReceiver;

