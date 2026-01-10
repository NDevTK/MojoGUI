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
  }
  bind(handle) {
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(handle);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = attribution_reporting.mojom.DataHost_SourceDataAvailable_ParamsSpec.$.decode(message.payload);
          const result = this.impl.sourceDataAvailable(params.reporting_origin, params.data, params.was_fetched_via_service_worker);
          break;
        }
        case 1: {
          const params = attribution_reporting.mojom.DataHost_TriggerDataAvailable_ParamsSpec.$.decode(message.payload);
          const result = this.impl.triggerDataAvailable(params.reporting_origin, params.data, params.was_fetched_via_service_worker);
          break;
        }
        case 2: {
          const params = attribution_reporting.mojom.DataHost_OsSourceDataAvailable_ParamsSpec.$.decode(message.payload);
          const result = this.impl.osSourceDataAvailable(params.registration, params.was_fetched_via_service_worker);
          break;
        }
        case 3: {
          const params = attribution_reporting.mojom.DataHost_OsTriggerDataAvailable_ParamsSpec.$.decode(message.payload);
          const result = this.impl.osTriggerDataAvailable(params.registration, params.was_fetched_via_service_worker);
          break;
        }
        case 4: {
          const params = attribution_reporting.mojom.DataHost_ReportRegistrationHeaderError_ParamsSpec.$.decode(message.payload);
          const result = this.impl.reportRegistrationHeaderError(params.reporting_origin, params.error);
          break;
        }
      }
    });
  }
};

attribution_reporting.mojom.DataHostReceiver = attribution_reporting.mojom.DataHostReceiver;

attribution_reporting.mojom.DataHostPtr = attribution_reporting.mojom.DataHostRemote;
attribution_reporting.mojom.DataHostRequest = attribution_reporting.mojom.DataHostPendingReceiver;

