// Auto-generated MojoJS binding
// Source: chromium_src/chrome/common/network_diagnostics.mojom
// Module: chrome.mojom

'use strict';

// Module namespace
var chrome = chrome || {};
chrome.mojom = chrome.mojom || {};


// Interface: NetworkDiagnostics
chrome.mojom.NetworkDiagnosticsPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'chrome.mojom.NetworkDiagnostics';
  }

  runNetworkDiagnostics(failed_url) {
    // Method: RunNetworkDiagnostics
    // Call: RunNetworkDiagnostics(failed_url)
  }

};

chrome.mojom.NetworkDiagnosticsRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: NetworkDiagnosticsClient
chrome.mojom.NetworkDiagnosticsClientPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'chrome.mojom.NetworkDiagnosticsClient';
  }

  setCanShowNetworkDiagnosticsDialog(can_show) {
    // Method: SetCanShowNetworkDiagnosticsDialog
    // Call: SetCanShowNetworkDiagnosticsDialog(can_show)
  }

  dNSProbeStatus(status) {
    // Method: DNSProbeStatus
    // Call: DNSProbeStatus(status)
  }

};

chrome.mojom.NetworkDiagnosticsClientRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
