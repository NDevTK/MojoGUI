// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/services/chromebox_for_meetings/public/mojom/meet_devices_diagnostics.mojom
// Module: chromeos.cfm.mojom

'use strict';

// Module namespace
var chromeos = chromeos || {};
chromeos.cfm = chromeos.cfm || {};
chromeos.cfm.mojom = chromeos.cfm.mojom || {};


// Interface: MeetDevicesDiagnostics
chromeos.cfm.mojom.MeetDevicesDiagnosticsPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chromeos.cfm.mojom.MeetDevicesDiagnosticsRemote = class {
  static get $interfaceName() {
    return 'chromeos.cfm.mojom.MeetDevicesDiagnostics';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chromeos.cfm.mojom.MeetDevicesDiagnosticsPendingReceiver,
      handle);
    this.$ = new chromeos.cfm.mojom.MeetDevicesDiagnosticsRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chromeos.cfm.mojom.MeetDevicesDiagnosticsRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

chromeos.cfm.mojom.MeetDevicesDiagnostics.getRemote = function() {
  let remote = new chromeos.cfm.mojom.MeetDevicesDiagnosticsRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromeos.cfm.mojom.MeetDevicesDiagnostics',
    'context');
  return remote.$;
}};

// Legacy compatibility
chromeos.cfm.mojom.MeetDevicesDiagnosticsPtr = chromeos.cfm.mojom.MeetDevicesDiagnosticsRemote;
chromeos.cfm.mojom.MeetDevicesDiagnosticsRequest = chromeos.cfm.mojom.MeetDevicesDiagnosticsPendingReceiver;

