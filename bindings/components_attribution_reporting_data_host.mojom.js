// Auto-generated MojoJS binding
// Source: chromium_src/components/attribution_reporting/data_host.mojom
// Module: attribution_reporting.mojom

// Module namespace
var attribution_reporting = attribution_reporting || {};
attribution_reporting.mojom = attribution_reporting.mojom || {};

attribution_reporting.mojom.DataAvailableCallsiteSpec = { $: mojo.internal.Enum() };
attribution_reporting.mojom.DataHost = {};
attribution_reporting.mojom.DataHost.$interfaceName = 'attribution_reporting.mojom.DataHost';
attribution_reporting.mojom.DataHost_SourceDataAvailable_ParamsSpec = { $: {} };
attribution_reporting.mojom.DataHost_TriggerDataAvailable_ParamsSpec = { $: {} };
attribution_reporting.mojom.DataHost_OsSourceDataAvailable_ParamsSpec = { $: {} };
attribution_reporting.mojom.DataHost_OsTriggerDataAvailable_ParamsSpec = { $: {} };
attribution_reporting.mojom.DataHost_ReportRegistrationHeaderError_ParamsSpec = { $: {} };

// Enum: DataAvailableCallsite
attribution_reporting.mojom.DataAvailableCallsite = {
  kBlink: 0,
  kBrowser: 1,
};

// Interface: DataHost
mojo.internal.Struct(
    attribution_reporting.mojom.DataHost_SourceDataAvailable_ParamsSpec, 'attribution_reporting.mojom.DataHost_SourceDataAvailable_Params', [
      mojo.internal.StructField('reporting_origin', 0, 0, attribution_reporting.mojom.SuitableOriginSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('data', 8, 0, attribution_reporting.mojom.SourceRegistrationSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('was_fetched_via_service_worker', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    attribution_reporting.mojom.DataHost_TriggerDataAvailable_ParamsSpec, 'attribution_reporting.mojom.DataHost_TriggerDataAvailable_Params', [
      mojo.internal.StructField('reporting_origin', 0, 0, attribution_reporting.mojom.SuitableOriginSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('data', 8, 0, attribution_reporting.mojom.TriggerRegistrationSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('was_fetched_via_service_worker', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    attribution_reporting.mojom.DataHost_OsSourceDataAvailable_ParamsSpec, 'attribution_reporting.mojom.DataHost_OsSourceDataAvailable_Params', [
      mojo.internal.StructField('registration', 0, 0, attribution_reporting.mojom.OsRegistrationSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('was_fetched_via_service_worker', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    attribution_reporting.mojom.DataHost_OsTriggerDataAvailable_ParamsSpec, 'attribution_reporting.mojom.DataHost_OsTriggerDataAvailable_Params', [
      mojo.internal.StructField('registration', 0, 0, attribution_reporting.mojom.OsRegistrationSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('was_fetched_via_service_worker', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    attribution_reporting.mojom.DataHost_ReportRegistrationHeaderError_ParamsSpec, 'attribution_reporting.mojom.DataHost_ReportRegistrationHeaderError_Params', [
      mojo.internal.StructField('reporting_origin', 0, 0, attribution_reporting.mojom.SuitableOriginSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('error', 8, 0, attribution_reporting.mojom.RegistrationHeaderErrorSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

attribution_reporting.mojom.DataHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

attribution_reporting.mojom.DataHostRemote = class {
  static get $interfaceName() {
    return 'attribution_reporting.mojom.DataHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      attribution_reporting.mojom.DataHostPendingReceiver,
      handle);
    this.$ = new attribution_reporting.mojom.DataHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  sourceDataAvailable(reporting_origin, data, was_fetched_via_service_worker) {
    return this.$.sourceDataAvailable(reporting_origin, data, was_fetched_via_service_worker);
  }
  triggerDataAvailable(reporting_origin, data, was_fetched_via_service_worker) {
    return this.$.triggerDataAvailable(reporting_origin, data, was_fetched_via_service_worker);
  }
  osSourceDataAvailable(registration, was_fetched_via_service_worker) {
    return this.$.osSourceDataAvailable(registration, was_fetched_via_service_worker);
  }
  osTriggerDataAvailable(registration, was_fetched_via_service_worker) {
    return this.$.osTriggerDataAvailable(registration, was_fetched_via_service_worker);
  }
  reportRegistrationHeaderError(reporting_origin, error) {
    return this.$.reportRegistrationHeaderError(reporting_origin, error);
  }
};

attribution_reporting.mojom.DataHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('DataHost', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  sourceDataAvailable(reporting_origin, data, was_fetched_via_service_worker) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      attribution_reporting.mojom.DataHost_SourceDataAvailable_ParamsSpec,
      null,
      [reporting_origin, data, was_fetched_via_service_worker],
      false);
  }

  triggerDataAvailable(reporting_origin, data, was_fetched_via_service_worker) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      attribution_reporting.mojom.DataHost_TriggerDataAvailable_ParamsSpec,
      null,
      [reporting_origin, data, was_fetched_via_service_worker],
      false);
  }

  osSourceDataAvailable(registration, was_fetched_via_service_worker) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      attribution_reporting.mojom.DataHost_OsSourceDataAvailable_ParamsSpec,
      null,
      [registration, was_fetched_via_service_worker],
      false);
  }

  osTriggerDataAvailable(registration, was_fetched_via_service_worker) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      attribution_reporting.mojom.DataHost_OsTriggerDataAvailable_ParamsSpec,
      null,
      [registration, was_fetched_via_service_worker],
      false);
  }

  reportRegistrationHeaderError(reporting_origin, error) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      attribution_reporting.mojom.DataHost_ReportRegistrationHeaderError_ParamsSpec,
      null,
      [reporting_origin, error],
      false);
  }

};

attribution_reporting.mojom.DataHost.getRemote = function() {
  let remote = new attribution_reporting.mojom.DataHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'attribution_reporting.mojom.DataHost',
    'context');
  return remote.$;
};

attribution_reporting.mojom.DataHostReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('DataHost', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
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
             decoder.decodeStructInline(attribution_reporting.mojom.DataHost_SourceDataAvailable_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(attribution_reporting.mojom.DataHost_TriggerDataAvailable_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(attribution_reporting.mojom.DataHost_OsSourceDataAvailable_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(attribution_reporting.mojom.DataHost_OsTriggerDataAvailable_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(attribution_reporting.mojom.DataHost_ReportRegistrationHeaderError_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(attribution_reporting.mojom.DataHost_SourceDataAvailable_ParamsSpec.$.structSpec);
          const result = this.impl.sourceDataAvailable(params.reporting_origin, params.data, params.was_fetched_via_service_worker);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(attribution_reporting.mojom.DataHost_TriggerDataAvailable_ParamsSpec.$.structSpec);
          const result = this.impl.triggerDataAvailable(params.reporting_origin, params.data, params.was_fetched_via_service_worker);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(attribution_reporting.mojom.DataHost_OsSourceDataAvailable_ParamsSpec.$.structSpec);
          const result = this.impl.osSourceDataAvailable(params.registration, params.was_fetched_via_service_worker);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(attribution_reporting.mojom.DataHost_OsTriggerDataAvailable_ParamsSpec.$.structSpec);
          const result = this.impl.osTriggerDataAvailable(params.registration, params.was_fetched_via_service_worker);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(attribution_reporting.mojom.DataHost_ReportRegistrationHeaderError_ParamsSpec.$.structSpec);
          const result = this.impl.reportRegistrationHeaderError(params.reporting_origin, params.error);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

attribution_reporting.mojom.DataHostReceiver = attribution_reporting.mojom.DataHostReceiver;

attribution_reporting.mojom.DataHostPtr = attribution_reporting.mojom.DataHostRemote;
attribution_reporting.mojom.DataHostRequest = attribution_reporting.mojom.DataHostPendingReceiver;

