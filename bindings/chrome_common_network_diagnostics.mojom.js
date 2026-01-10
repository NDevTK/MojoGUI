// Auto-generated MojoJS binding
// Source: chromium_src/chrome/common/network_diagnostics.mojom
// Module: chrome.mojom

'use strict';

// Module namespace
var chrome = chrome || {};
chrome.mojom = chrome.mojom || {};
var url = url || {};


// Interface: NetworkDiagnostics
chrome.mojom.NetworkDiagnostics = {};

chrome.mojom.NetworkDiagnostics_RunNetworkDiagnostics_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.NetworkDiagnostics_RunNetworkDiagnostics_Params',
      packedSize: 16,
      fields: [
        { name: 'failed_url', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

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
      [failed_url]);
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

// ParamsSpec for RunNetworkDiagnostics
chrome.mojom.NetworkDiagnostics_RunNetworkDiagnostics_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.NetworkDiagnostics.RunNetworkDiagnostics_Params',
      packedSize: 16,
      fields: [
        { name: 'failed_url', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
chrome.mojom.NetworkDiagnosticsPtr = chrome.mojom.NetworkDiagnosticsRemote;
chrome.mojom.NetworkDiagnosticsRequest = chrome.mojom.NetworkDiagnosticsPendingReceiver;


// Interface: NetworkDiagnosticsClient
chrome.mojom.NetworkDiagnosticsClient = {};

chrome.mojom.NetworkDiagnosticsClient_SetCanShowNetworkDiagnosticsDialog_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.NetworkDiagnosticsClient_SetCanShowNetworkDiagnosticsDialog_Params',
      packedSize: 16,
      fields: [
        { name: 'can_show', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

chrome.mojom.NetworkDiagnosticsClient_DNSProbeStatus_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.NetworkDiagnosticsClient_DNSProbeStatus_Params',
      packedSize: 16,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

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
      [can_show]);
  }

  dNSProbeStatus(status) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      chrome.mojom.NetworkDiagnosticsClient_DNSProbeStatus_ParamsSpec,
      null,
      [status]);
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

// ParamsSpec for SetCanShowNetworkDiagnosticsDialog
chrome.mojom.NetworkDiagnosticsClient_SetCanShowNetworkDiagnosticsDialog_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.NetworkDiagnosticsClient.SetCanShowNetworkDiagnosticsDialog_Params',
      packedSize: 16,
      fields: [
        { name: 'can_show', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for DNSProbeStatus
chrome.mojom.NetworkDiagnosticsClient_DNSProbeStatus_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.NetworkDiagnosticsClient.DNSProbeStatus_Params',
      packedSize: 16,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
chrome.mojom.NetworkDiagnosticsClientPtr = chrome.mojom.NetworkDiagnosticsClientRemote;
chrome.mojom.NetworkDiagnosticsClientRequest = chrome.mojom.NetworkDiagnosticsClientPendingReceiver;

