// Auto-generated MojoJS binding
// Source: chromium_src/chrome/common/network_diagnostics.mojom
// Module: chrome.mojom

'use strict';

// Module namespace
var chrome = chrome || {};
chrome.mojom = chrome.mojom || {};
var url = url || {};


// Interface: NetworkDiagnostics
chrome.mojom.mojom.NetworkDiagnostics = {};

chrome.mojom.mojom.NetworkDiagnosticsPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chrome.mojom.mojom.NetworkDiagnosticsRemote = class {
  static get $interfaceName() {
    return 'chrome.mojom.NetworkDiagnostics';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chrome.mojom.mojom.NetworkDiagnosticsPendingReceiver,
      handle);
    this.$ = new chrome.mojom.mojom.NetworkDiagnosticsRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chrome.mojom.mojom.NetworkDiagnosticsRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  runNetworkDiagnostics(failed_url) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      chrome.mojom.mojom.NetworkDiagnostics_RunNetworkDiagnostics_ParamsSpec,
      null,
      [failed_url]);
  }

};

chrome.mojom.mojom.NetworkDiagnostics.getRemote = function() {
  let remote = new chrome.mojom.mojom.NetworkDiagnosticsRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chrome.mojom.NetworkDiagnostics',
    'context');
  return remote.$;
};

// ParamsSpec for RunNetworkDiagnostics
chrome.mojom.mojom.NetworkDiagnostics_RunNetworkDiagnostics_ParamsSpec = {
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
chrome.mojom.mojom.NetworkDiagnosticsPtr = chrome.mojom.mojom.NetworkDiagnosticsRemote;
chrome.mojom.mojom.NetworkDiagnosticsRequest = chrome.mojom.mojom.NetworkDiagnosticsPendingReceiver;


// Interface: NetworkDiagnosticsClient
chrome.mojom.mojom.NetworkDiagnosticsClient = {};

chrome.mojom.mojom.NetworkDiagnosticsClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chrome.mojom.mojom.NetworkDiagnosticsClientRemote = class {
  static get $interfaceName() {
    return 'chrome.mojom.NetworkDiagnosticsClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chrome.mojom.mojom.NetworkDiagnosticsClientPendingReceiver,
      handle);
    this.$ = new chrome.mojom.mojom.NetworkDiagnosticsClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chrome.mojom.mojom.NetworkDiagnosticsClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  setCanShowNetworkDiagnosticsDialog(can_show) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      chrome.mojom.mojom.NetworkDiagnosticsClient_SetCanShowNetworkDiagnosticsDialog_ParamsSpec,
      null,
      [can_show]);
  }

  dNSProbeStatus(status) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      chrome.mojom.mojom.NetworkDiagnosticsClient_DNSProbeStatus_ParamsSpec,
      null,
      [status]);
  }

};

chrome.mojom.mojom.NetworkDiagnosticsClient.getRemote = function() {
  let remote = new chrome.mojom.mojom.NetworkDiagnosticsClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chrome.mojom.NetworkDiagnosticsClient',
    'context');
  return remote.$;
};

// ParamsSpec for SetCanShowNetworkDiagnosticsDialog
chrome.mojom.mojom.NetworkDiagnosticsClient_SetCanShowNetworkDiagnosticsDialog_ParamsSpec = {
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
chrome.mojom.mojom.NetworkDiagnosticsClient_DNSProbeStatus_ParamsSpec = {
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
chrome.mojom.mojom.NetworkDiagnosticsClientPtr = chrome.mojom.mojom.NetworkDiagnosticsClientRemote;
chrome.mojom.mojom.NetworkDiagnosticsClientRequest = chrome.mojom.mojom.NetworkDiagnosticsClientPendingReceiver;

