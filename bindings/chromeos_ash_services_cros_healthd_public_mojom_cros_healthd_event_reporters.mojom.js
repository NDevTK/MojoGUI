// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/services/cros_healthd/public/mojom/cros_healthd_event_reporters.mojom
// Module: ash.cros_healthd.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.cros_healthd = ash.cros_healthd || {};
ash.cros_healthd.mojom = ash.cros_healthd.mojom || {};
var ash = ash || {};

ash.cros_healthd.mojom.AshEventReporter = {};
ash.cros_healthd.mojom.AshEventReporter.$interfaceName = 'ash.cros_healthd.mojom.AshEventReporter';
ash.cros_healthd.mojom.AshEventReporter_SendKeyboardDiagnosticEvent_ParamsSpec = { $: {} };

// Interface: AshEventReporter
mojo.internal.Struct(
    ash.cros_healthd.mojom.AshEventReporter_SendKeyboardDiagnosticEvent_ParamsSpec, 'ash.cros_healthd.mojom.AshEventReporter_SendKeyboardDiagnosticEvent_Params', [
      mojo.internal.StructField('info', 0, 0, ash.diagnostics.mojom.KeyboardDiagnosticEventInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

ash.cros_healthd.mojom.AshEventReporterPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.cros_healthd.mojom.AshEventReporterRemote = class {
  static get $interfaceName() {
    return 'ash.cros_healthd.mojom.AshEventReporter';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.cros_healthd.mojom.AshEventReporterPendingReceiver,
      handle);
    this.$ = new ash.cros_healthd.mojom.AshEventReporterRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.cros_healthd.mojom.AshEventReporterRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  sendKeyboardDiagnosticEvent(info) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.cros_healthd.mojom.AshEventReporter_SendKeyboardDiagnosticEvent_ParamsSpec,
      null,
      [info],
      false);
  }

};

ash.cros_healthd.mojom.AshEventReporter.getRemote = function() {
  let remote = new ash.cros_healthd.mojom.AshEventReporterRemote();
  remote.bindNewPipeAndPassReceiver();
  remote.proxy.endpoint_.bindInBrowser(
    'ash.cros_healthd.mojom.AshEventReporter',
    'context');
  return remote.$;
};

ash.cros_healthd.mojom.AshEventReporterPtr = ash.cros_healthd.mojom.AshEventReporterRemote;
ash.cros_healthd.mojom.AshEventReporterRequest = ash.cros_healthd.mojom.AshEventReporterPendingReceiver;

