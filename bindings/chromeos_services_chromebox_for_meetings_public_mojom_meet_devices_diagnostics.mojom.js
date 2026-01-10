// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/services/chromebox_for_meetings/public/mojom/meet_devices_diagnostics.mojom
// Module: chromeos.cfm.mojom

'use strict';

// Module namespace
var chromeos = chromeos || {};
chromeos.cfm = chromeos.cfm || {};
chromeos.cfm.mojom = chromeos.cfm.mojom || {};
var ash = ash || {};
var chromeos = chromeos || {};
var services = services || {};

chromeos.cfm.mojom.MeetDevicesDiagnostics = {};
chromeos.cfm.mojom.MeetDevicesDiagnostics.$interfaceName = 'chromeos.cfm.mojom.MeetDevicesDiagnostics';
chromeos.cfm.mojom.MeetDevicesDiagnostics_GetCrosHealthdTelemetry_ParamsSpec = { $: {} };
chromeos.cfm.mojom.MeetDevicesDiagnostics_GetCrosHealthdTelemetry_ResponseParamsSpec = { $: {} };
chromeos.cfm.mojom.MeetDevicesDiagnostics_GetCrosHealthdProcessInfo_ParamsSpec = { $: {} };
chromeos.cfm.mojom.MeetDevicesDiagnostics_GetCrosHealthdProcessInfo_ResponseParamsSpec = { $: {} };

// Interface: MeetDevicesDiagnostics
mojo.internal.Struct(
    chromeos.cfm.mojom.MeetDevicesDiagnostics_GetCrosHealthdTelemetry_ParamsSpec, 'chromeos.cfm.mojom.MeetDevicesDiagnostics_GetCrosHealthdTelemetry_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    chromeos.cfm.mojom.MeetDevicesDiagnostics_GetCrosHealthdTelemetry_ResponseParamsSpec, 'chromeos.cfm.mojom.MeetDevicesDiagnostics_GetCrosHealthdTelemetry_ResponseParams', [
      mojo.internal.StructField('telemetry', 0, 0, ash.cros_healthd.mojom.TelemetryInfoSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromeos.cfm.mojom.MeetDevicesDiagnostics_GetCrosHealthdProcessInfo_ParamsSpec, 'chromeos.cfm.mojom.MeetDevicesDiagnostics_GetCrosHealthdProcessInfo_Params', [
      mojo.internal.StructField('pid', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromeos.cfm.mojom.MeetDevicesDiagnostics_GetCrosHealthdProcessInfo_ResponseParamsSpec, 'chromeos.cfm.mojom.MeetDevicesDiagnostics_GetCrosHealthdProcessInfo_ResponseParams', [
      mojo.internal.StructField('process_info', 0, 0, ash.cros_healthd.mojom.ProcessResultSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

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

  getCrosHealthdTelemetry() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      chromeos.cfm.mojom.MeetDevicesDiagnostics_GetCrosHealthdTelemetry_ParamsSpec,
      chromeos.cfm.mojom.MeetDevicesDiagnostics_GetCrosHealthdTelemetry_ResponseParamsSpec,
      []);
  }

  getCrosHealthdProcessInfo(pid) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      chromeos.cfm.mojom.MeetDevicesDiagnostics_GetCrosHealthdProcessInfo_ParamsSpec,
      chromeos.cfm.mojom.MeetDevicesDiagnostics_GetCrosHealthdProcessInfo_ResponseParamsSpec,
      [pid]);
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
};

chromeos.cfm.mojom.MeetDevicesDiagnosticsPtr = chromeos.cfm.mojom.MeetDevicesDiagnosticsRemote;
chromeos.cfm.mojom.MeetDevicesDiagnosticsRequest = chromeos.cfm.mojom.MeetDevicesDiagnosticsPendingReceiver;

