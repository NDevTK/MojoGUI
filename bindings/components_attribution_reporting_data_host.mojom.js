// Auto-generated MojoJS binding
// Source: chromium_src/components/attribution_reporting/data_host.mojom
// Module: attribution_reporting.mojom

'use strict';

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
};

attribution_reporting.mojom.DataHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  sourceDataAvailable(reporting_origin, data, was_fetched_via_service_worker) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      attribution_reporting.mojom.DataHost_SourceDataAvailable_ParamsSpec,
      null,
      [reporting_origin, data, was_fetched_via_service_worker],
      false);
  }

  triggerDataAvailable(reporting_origin, data, was_fetched_via_service_worker) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      attribution_reporting.mojom.DataHost_TriggerDataAvailable_ParamsSpec,
      null,
      [reporting_origin, data, was_fetched_via_service_worker],
      false);
  }

  osSourceDataAvailable(registration, was_fetched_via_service_worker) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      attribution_reporting.mojom.DataHost_OsSourceDataAvailable_ParamsSpec,
      null,
      [registration, was_fetched_via_service_worker],
      false);
  }

  osTriggerDataAvailable(registration, was_fetched_via_service_worker) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      attribution_reporting.mojom.DataHost_OsTriggerDataAvailable_ParamsSpec,
      null,
      [registration, was_fetched_via_service_worker],
      false);
  }

  reportRegistrationHeaderError(reporting_origin, error) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
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
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
    this.ordinalMap.set(3, 3); // Default ordinal 3 -> Index 3
    this.ordinalMap.set(4, 4); // Default ordinal 4 -> Index 4
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        message = {
          header: args[1],
          payload: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: SourceDataAvailable
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(attribution_reporting.mojom.DataHost_SourceDataAvailable_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SourceDataAvailable (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 1: TriggerDataAvailable
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(attribution_reporting.mojom.DataHost_TriggerDataAvailable_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> TriggerDataAvailable (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 2: OsSourceDataAvailable
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(attribution_reporting.mojom.DataHost_OsSourceDataAvailable_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OsSourceDataAvailable (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 3: OsTriggerDataAvailable
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(attribution_reporting.mojom.DataHost_OsTriggerDataAvailable_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OsTriggerDataAvailable (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 4: ReportRegistrationHeaderError
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(attribution_reporting.mojom.DataHost_ReportRegistrationHeaderError_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ReportRegistrationHeaderError (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) { /* Ignore mismatch */ }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(attribution_reporting.mojom.DataHost_SourceDataAvailable_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.sourceDataAvailable');
          const result = this.impl.sourceDataAvailable(params.reporting_origin, params.data, params.was_fetched_via_service_worker);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(attribution_reporting.mojom.DataHost_TriggerDataAvailable_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.triggerDataAvailable');
          const result = this.impl.triggerDataAvailable(params.reporting_origin, params.data, params.was_fetched_via_service_worker);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(attribution_reporting.mojom.DataHost_OsSourceDataAvailable_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.osSourceDataAvailable');
          const result = this.impl.osSourceDataAvailable(params.registration, params.was_fetched_via_service_worker);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(attribution_reporting.mojom.DataHost_OsTriggerDataAvailable_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.osTriggerDataAvailable');
          const result = this.impl.osTriggerDataAvailable(params.registration, params.was_fetched_via_service_worker);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(attribution_reporting.mojom.DataHost_ReportRegistrationHeaderError_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.reportRegistrationHeaderError');
          const result = this.impl.reportRegistrationHeaderError(params.reporting_origin, params.error);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

attribution_reporting.mojom.DataHostReceiver = attribution_reporting.mojom.DataHostReceiver;

attribution_reporting.mojom.DataHostPtr = attribution_reporting.mojom.DataHostRemote;
attribution_reporting.mojom.DataHostRequest = attribution_reporting.mojom.DataHostPendingReceiver;

