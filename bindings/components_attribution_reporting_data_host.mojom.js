// Auto-generated MojoJS binding
// Source: chromium_src/components/attribution_reporting/data_host.mojom
// Module: attribution_reporting.mojom

'use strict';

// Module namespace
var attribution_reporting = attribution_reporting || {};
attribution_reporting.mojom = attribution_reporting.mojom || {};


// Enum: DataAvailableCallsite
attribution_reporting.mojom.DataAvailableCallsite = {
  kBlink: 0,
  kBrowser: 1,
};

// Interface: DataHost
attribution_reporting.mojom.DataHost = {};

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
      [reporting_origin, data, was_fetched_via_service_worker]);
  }

  triggerDataAvailable(reporting_origin, data, was_fetched_via_service_worker) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      attribution_reporting.mojom.DataHost_TriggerDataAvailable_ParamsSpec,
      null,
      [reporting_origin, data, was_fetched_via_service_worker]);
  }

  osSourceDataAvailable(registration, was_fetched_via_service_worker) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      attribution_reporting.mojom.DataHost_OsSourceDataAvailable_ParamsSpec,
      null,
      [registration, was_fetched_via_service_worker]);
  }

  osTriggerDataAvailable(registration, was_fetched_via_service_worker) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      attribution_reporting.mojom.DataHost_OsTriggerDataAvailable_ParamsSpec,
      null,
      [registration, was_fetched_via_service_worker]);
  }

  reportRegistrationHeaderError(reporting_origin, error) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      attribution_reporting.mojom.DataHost_ReportRegistrationHeaderError_ParamsSpec,
      null,
      [reporting_origin, error]);
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

// ParamsSpec for SourceDataAvailable
attribution_reporting.mojom.DataHost_SourceDataAvailable_ParamsSpec = {
  $: {
    structSpec: {
      name: 'attribution_reporting.mojom.DataHost.SourceDataAvailable_Params',
      packedSize: 32,
      fields: [
        { name: 'reporting_origin', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'data', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'was_fetched_via_service_worker', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for TriggerDataAvailable
attribution_reporting.mojom.DataHost_TriggerDataAvailable_ParamsSpec = {
  $: {
    structSpec: {
      name: 'attribution_reporting.mojom.DataHost.TriggerDataAvailable_Params',
      packedSize: 32,
      fields: [
        { name: 'reporting_origin', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'data', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'was_fetched_via_service_worker', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OsSourceDataAvailable
attribution_reporting.mojom.DataHost_OsSourceDataAvailable_ParamsSpec = {
  $: {
    structSpec: {
      name: 'attribution_reporting.mojom.DataHost.OsSourceDataAvailable_Params',
      packedSize: 24,
      fields: [
        { name: 'registration', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'was_fetched_via_service_worker', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OsTriggerDataAvailable
attribution_reporting.mojom.DataHost_OsTriggerDataAvailable_ParamsSpec = {
  $: {
    structSpec: {
      name: 'attribution_reporting.mojom.DataHost.OsTriggerDataAvailable_Params',
      packedSize: 24,
      fields: [
        { name: 'registration', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'was_fetched_via_service_worker', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ReportRegistrationHeaderError
attribution_reporting.mojom.DataHost_ReportRegistrationHeaderError_ParamsSpec = {
  $: {
    structSpec: {
      name: 'attribution_reporting.mojom.DataHost.ReportRegistrationHeaderError_Params',
      packedSize: 24,
      fields: [
        { name: 'reporting_origin', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'error', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
attribution_reporting.mojom.DataHostPtr = attribution_reporting.mojom.DataHostRemote;
attribution_reporting.mojom.DataHostRequest = attribution_reporting.mojom.DataHostPendingReceiver;

