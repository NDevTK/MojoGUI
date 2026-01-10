// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/services/chromebox_for_meetings/public/mojom/meet_devices_diagnostics.mojom
// Module: chromeos.cfm.mojom

'use strict';

// Module namespace
var chromeos = chromeos || {};
chromeos.cfm = chromeos.cfm || {};
chromeos.cfm.cfm.mojom = chromeos.cfm.cfm.mojom || {};


// Interface: MeetDevicesDiagnostics
chromeos.cfm.cfm.mojom.mojom.MeetDevicesDiagnostics = {};

chromeos.cfm.cfm.mojom.mojom.MeetDevicesDiagnosticsPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chromeos.cfm.cfm.mojom.mojom.MeetDevicesDiagnosticsRemote = class {
  static get $interfaceName() {
    return 'chromeos.cfm.mojom.MeetDevicesDiagnostics';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chromeos.cfm.cfm.mojom.mojom.MeetDevicesDiagnosticsPendingReceiver,
      handle);
    this.$ = new chromeos.cfm.cfm.mojom.mojom.MeetDevicesDiagnosticsRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chromeos.cfm.cfm.mojom.mojom.MeetDevicesDiagnosticsRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getCrosHealthdTelemetry() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      chromeos.cfm.cfm.mojom.mojom.MeetDevicesDiagnostics_GetCrosHealthdTelemetry_ParamsSpec,
      chromeos.cfm.cfm.mojom.mojom.MeetDevicesDiagnostics_GetCrosHealthdTelemetry_ResponseParamsSpec,
      []);
  }

  getCrosHealthdProcessInfo(pid) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      chromeos.cfm.cfm.mojom.mojom.MeetDevicesDiagnostics_GetCrosHealthdProcessInfo_ParamsSpec,
      chromeos.cfm.cfm.mojom.mojom.MeetDevicesDiagnostics_GetCrosHealthdProcessInfo_ResponseParamsSpec,
      [pid]);
  }

};

chromeos.cfm.cfm.mojom.mojom.MeetDevicesDiagnostics.getRemote = function() {
  let remote = new chromeos.cfm.cfm.mojom.mojom.MeetDevicesDiagnosticsRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromeos.cfm.mojom.MeetDevicesDiagnostics',
    'context');
  return remote.$;
};

// ParamsSpec for GetCrosHealthdTelemetry
chromeos.cfm.cfm.mojom.mojom.MeetDevicesDiagnostics_GetCrosHealthdTelemetry_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.cfm.mojom.MeetDevicesDiagnostics.GetCrosHealthdTelemetry_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

chromeos.cfm.cfm.mojom.mojom.MeetDevicesDiagnostics_GetCrosHealthdTelemetry_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.cfm.mojom.MeetDevicesDiagnostics.GetCrosHealthdTelemetry_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'telemetry', packedOffset: 0, packedBitOffset: 0, type: ash.cros_healthd.mojom.TelemetryInfoSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetCrosHealthdProcessInfo
chromeos.cfm.cfm.mojom.mojom.MeetDevicesDiagnostics_GetCrosHealthdProcessInfo_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.cfm.mojom.MeetDevicesDiagnostics.GetCrosHealthdProcessInfo_Params',
      packedSize: 16,
      fields: [
        { name: 'pid', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

chromeos.cfm.cfm.mojom.mojom.MeetDevicesDiagnostics_GetCrosHealthdProcessInfo_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.cfm.mojom.MeetDevicesDiagnostics.GetCrosHealthdProcessInfo_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'process_info', packedOffset: 0, packedBitOffset: 0, type: ash.cros_healthd.mojom.ProcessResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
chromeos.cfm.cfm.mojom.mojom.MeetDevicesDiagnosticsPtr = chromeos.cfm.cfm.mojom.mojom.MeetDevicesDiagnosticsRemote;
chromeos.cfm.cfm.mojom.mojom.MeetDevicesDiagnosticsRequest = chromeos.cfm.cfm.mojom.mojom.MeetDevicesDiagnosticsPendingReceiver;

