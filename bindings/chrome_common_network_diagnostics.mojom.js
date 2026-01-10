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
  remote.bindNewPipeAndPassReceiver();
  remote.proxy.endpoint_.bindInBrowser(
    'chrome.mojom.NetworkDiagnostics',
    'context');
  return remote.$;
};

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
  remote.bindNewPipeAndPassReceiver();
  remote.proxy.endpoint_.bindInBrowser(
    'chrome.mojom.NetworkDiagnosticsClient',
    'context');
  return remote.$;
};

chrome.mojom.NetworkDiagnosticsClientPtr = chrome.mojom.NetworkDiagnosticsClientRemote;
chrome.mojom.NetworkDiagnosticsClientRequest = chrome.mojom.NetworkDiagnosticsClientPendingReceiver;

