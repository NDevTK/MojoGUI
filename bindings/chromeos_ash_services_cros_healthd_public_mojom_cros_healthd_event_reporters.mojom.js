// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/services/cros_healthd/public/mojom/cros_healthd_event_reporters.mojom
// Module: ash.cros_healthd.mojom

// Module namespace
var ash = ash || {};
ash.cros_healthd = ash.cros_healthd || {};
ash.cros_healthd.mojom = ash.cros_healthd.mojom || {};

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
  sendKeyboardDiagnosticEvent(info) {
    return this.$.sendKeyboardDiagnosticEvent(info);
  }
};

ash.cros_healthd.mojom.AshEventReporterRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('AshEventReporter', [
      { explicit: 0 },
    ]);
  }

  sendKeyboardDiagnosticEvent(info) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      ash.cros_healthd.mojom.AshEventReporter_SendKeyboardDiagnosticEvent_ParamsSpec,
      null,
      [info],
      false);
  }

};

ash.cros_healthd.mojom.AshEventReporter.getRemote = function() {
  let remote = new ash.cros_healthd.mojom.AshEventReporterRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.cros_healthd.mojom.AshEventReporter',
    'context');
  return remote.$;
};

ash.cros_healthd.mojom.AshEventReporterReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('AshEventReporter', [
      { explicit: 0 },
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
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.cros_healthd.mojom.AshEventReporter_SendKeyboardDiagnosticEvent_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.cros_healthd.mojom.AshEventReporter_SendKeyboardDiagnosticEvent_ParamsSpec.$.structSpec);
          const result = this.impl.sendKeyboardDiagnosticEvent(params.info);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

ash.cros_healthd.mojom.AshEventReporterReceiver = ash.cros_healthd.mojom.AshEventReporterReceiver;

ash.cros_healthd.mojom.AshEventReporterPtr = ash.cros_healthd.mojom.AshEventReporterRemote;
ash.cros_healthd.mojom.AshEventReporterRequest = ash.cros_healthd.mojom.AshEventReporterPendingReceiver;

