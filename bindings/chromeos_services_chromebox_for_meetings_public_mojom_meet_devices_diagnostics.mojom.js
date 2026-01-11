// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/services/chromebox_for_meetings/public/mojom/meet_devices_diagnostics.mojom
// Module: chromeos.cfm.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var chromeos = chromeos || {};
chromeos.cfm = chromeos.cfm || {};
chromeos.cfm.mojom = chromeos.cfm.mojom || {};
var ash = ash || {};

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
      mojo.internal.StructField('telemetry', 0, 0, ash.cros_healthd.mojom.TelemetryInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromeos.cfm.mojom.MeetDevicesDiagnostics_GetCrosHealthdProcessInfo_ParamsSpec, 'chromeos.cfm.mojom.MeetDevicesDiagnostics_GetCrosHealthdProcessInfo_Params', [
      mojo.internal.StructField('pid', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromeos.cfm.mojom.MeetDevicesDiagnostics_GetCrosHealthdProcessInfo_ResponseParamsSpec, 'chromeos.cfm.mojom.MeetDevicesDiagnostics_GetCrosHealthdProcessInfo_ResponseParams', [
      mojo.internal.StructField('process_info', 0, 0, ash.cros_healthd.mojom.ProcessResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

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
  getCrosHealthdTelemetry() {
    return this.$.getCrosHealthdTelemetry();
  }
  getCrosHealthdProcessInfo(pid) {
    return this.$.getCrosHealthdProcessInfo(pid);
  }
};

chromeos.cfm.mojom.MeetDevicesDiagnosticsRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('MeetDevicesDiagnostics', [
      { explicit: 0 },
      { explicit: 1 },
    ]);
  }

  getCrosHealthdTelemetry() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      chromeos.cfm.mojom.MeetDevicesDiagnostics_GetCrosHealthdTelemetry_ParamsSpec,
      chromeos.cfm.mojom.MeetDevicesDiagnostics_GetCrosHealthdTelemetry_ResponseParamsSpec,
      [],
      false);
  }

  getCrosHealthdProcessInfo(pid) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      chromeos.cfm.mojom.MeetDevicesDiagnostics_GetCrosHealthdProcessInfo_ParamsSpec,
      chromeos.cfm.mojom.MeetDevicesDiagnostics_GetCrosHealthdProcessInfo_ResponseParamsSpec,
      [pid],
      false);
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

chromeos.cfm.mojom.MeetDevicesDiagnosticsReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('MeetDevicesDiagnostics', [
      { explicit: 0 },
      { explicit: 1 },
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
        message = {{ header: args[1], payload: payload, handles: args[3] || [] }};
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromeos.cfm.mojom.MeetDevicesDiagnostics_GetCrosHealthdTelemetry_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromeos.cfm.mojom.MeetDevicesDiagnostics_GetCrosHealthdProcessInfo_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromeos.cfm.mojom.MeetDevicesDiagnostics_GetCrosHealthdTelemetry_ParamsSpec.$.structSpec);
          const result = this.impl.getCrosHealthdTelemetry();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, chromeos.cfm.mojom.MeetDevicesDiagnostics_GetCrosHealthdTelemetry_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromeos.cfm.mojom.MeetDevicesDiagnostics_GetCrosHealthdProcessInfo_ParamsSpec.$.structSpec);
          const result = this.impl.getCrosHealthdProcessInfo(params.pid);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, chromeos.cfm.mojom.MeetDevicesDiagnostics_GetCrosHealthdProcessInfo_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

chromeos.cfm.mojom.MeetDevicesDiagnosticsReceiver = chromeos.cfm.mojom.MeetDevicesDiagnosticsReceiver;

chromeos.cfm.mojom.MeetDevicesDiagnosticsPtr = chromeos.cfm.mojom.MeetDevicesDiagnosticsRemote;
chromeos.cfm.mojom.MeetDevicesDiagnosticsRequest = chromeos.cfm.mojom.MeetDevicesDiagnosticsPendingReceiver;

