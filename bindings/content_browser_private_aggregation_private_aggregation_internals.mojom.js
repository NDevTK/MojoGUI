// Auto-generated MojoJS binding
// Source: chromium_src/content/browser/private_aggregation/private_aggregation_internals.mojom
// Module: private_aggregation_internals.mojom

'use strict';

// Module namespace
var private_aggregation_internals = private_aggregation_internals || {};
private_aggregation_internals.mojom = private_aggregation_internals.mojom || {};
var url = url || {};


// Enum: ReportStatus
private_aggregation_internals.mojom.mojom.ReportStatus = {
  kPending: 0,
  kSent: 1,
  kFailedToAssemble: 2,
  kFailedToSend: 3,
};
private_aggregation_internals.mojom.mojom.ReportStatusSpec = { $: mojo.internal.Enum() };

// Struct: AggregatableReportRequestID
private_aggregation_internals.mojom.mojom.AggregatableReportRequestIDSpec = {
  $: {
    structSpec: {
      name: 'private_aggregation_internals.mojom.AggregatableReportRequestID',
      packedSize: 16,
      fields: [
        { name: 'value', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: AggregatableHistogramContribution
private_aggregation_internals.mojom.mojom.AggregatableHistogramContributionSpec = {
  $: {
    structSpec: {
      name: 'private_aggregation_internals.mojom.AggregatableHistogramContribution',
      packedSize: 24,
      fields: [
        { name: 'bucket', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.Uint128Spec, nullable: false, minVersion: 0 },
        { name: 'value', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: WebUIAggregatableReport
private_aggregation_internals.mojom.mojom.WebUIAggregatableReportSpec = {
  $: {
    structSpec: {
      name: 'private_aggregation_internals.mojom.WebUIAggregatableReport',
      packedSize: 72,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: private_aggregation_internals.mojom.AggregatableReportRequestIDSpec, nullable: true, minVersion: 0 },
        { name: 'report_time', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Double, nullable: false, minVersion: 0 },
        { name: 'api_identifier', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'api_version', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'report_url', packedOffset: 32, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'contributions', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Array(private_aggregation_internals.mojom.AggregatableHistogramContributionSpec, false), nullable: false, minVersion: 0 },
        { name: 'status', packedOffset: 56, packedBitOffset: 0, type: private_aggregation_internals.mojom.ReportStatusSpec, nullable: false, minVersion: 0 },
        { name: 'report_body', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 72}]
    }
  }
};

// Interface: Observer
private_aggregation_internals.mojom.mojom.Observer = {};

private_aggregation_internals.mojom.mojom.ObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

private_aggregation_internals.mojom.mojom.ObserverRemote = class {
  static get $interfaceName() {
    return 'private_aggregation_internals.mojom.Observer';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      private_aggregation_internals.mojom.mojom.ObserverPendingReceiver,
      handle);
    this.$ = new private_aggregation_internals.mojom.mojom.ObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

private_aggregation_internals.mojom.mojom.ObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onRequestStorageModified() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      private_aggregation_internals.mojom.mojom.Observer_OnRequestStorageModified_ParamsSpec,
      null,
      []);
  }

  onReportHandled(report) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      private_aggregation_internals.mojom.mojom.Observer_OnReportHandled_ParamsSpec,
      null,
      [report]);
  }

};

private_aggregation_internals.mojom.mojom.Observer.getRemote = function() {
  let remote = new private_aggregation_internals.mojom.mojom.ObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'private_aggregation_internals.mojom.Observer',
    'context');
  return remote.$;
};

// ParamsSpec for OnRequestStorageModified
private_aggregation_internals.mojom.mojom.Observer_OnRequestStorageModified_ParamsSpec = {
  $: {
    structSpec: {
      name: 'private_aggregation_internals.mojom.Observer.OnRequestStorageModified_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for OnReportHandled
private_aggregation_internals.mojom.mojom.Observer_OnReportHandled_ParamsSpec = {
  $: {
    structSpec: {
      name: 'private_aggregation_internals.mojom.Observer.OnReportHandled_Params',
      packedSize: 16,
      fields: [
        { name: 'report', packedOffset: 0, packedBitOffset: 0, type: private_aggregation_internals.mojom.WebUIAggregatableReportSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
private_aggregation_internals.mojom.mojom.ObserverPtr = private_aggregation_internals.mojom.mojom.ObserverRemote;
private_aggregation_internals.mojom.mojom.ObserverRequest = private_aggregation_internals.mojom.mojom.ObserverPendingReceiver;


// Interface: Handler
private_aggregation_internals.mojom.mojom.Handler = {};

private_aggregation_internals.mojom.mojom.HandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

private_aggregation_internals.mojom.mojom.HandlerRemote = class {
  static get $interfaceName() {
    return 'private_aggregation_internals.mojom.Handler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      private_aggregation_internals.mojom.mojom.HandlerPendingReceiver,
      handle);
    this.$ = new private_aggregation_internals.mojom.mojom.HandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

private_aggregation_internals.mojom.mojom.HandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getReports() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      private_aggregation_internals.mojom.mojom.Handler_GetReports_ParamsSpec,
      private_aggregation_internals.mojom.mojom.Handler_GetReports_ResponseParamsSpec,
      []);
  }

  sendReports(ids) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      private_aggregation_internals.mojom.mojom.Handler_SendReports_ParamsSpec,
      null,
      [ids]);
  }

  clearStorage() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      private_aggregation_internals.mojom.mojom.Handler_ClearStorage_ParamsSpec,
      null,
      []);
  }

};

private_aggregation_internals.mojom.mojom.Handler.getRemote = function() {
  let remote = new private_aggregation_internals.mojom.mojom.HandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'private_aggregation_internals.mojom.Handler',
    'context');
  return remote.$;
};

// ParamsSpec for GetReports
private_aggregation_internals.mojom.mojom.Handler_GetReports_ParamsSpec = {
  $: {
    structSpec: {
      name: 'private_aggregation_internals.mojom.Handler.GetReports_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

private_aggregation_internals.mojom.mojom.Handler_GetReports_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'private_aggregation_internals.mojom.Handler.GetReports_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'reports', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(private_aggregation_internals.mojom.WebUIAggregatableReportSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SendReports
private_aggregation_internals.mojom.mojom.Handler_SendReports_ParamsSpec = {
  $: {
    structSpec: {
      name: 'private_aggregation_internals.mojom.Handler.SendReports_Params',
      packedSize: 16,
      fields: [
        { name: 'ids', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(private_aggregation_internals.mojom.AggregatableReportRequestIDSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ClearStorage
private_aggregation_internals.mojom.mojom.Handler_ClearStorage_ParamsSpec = {
  $: {
    structSpec: {
      name: 'private_aggregation_internals.mojom.Handler.ClearStorage_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Legacy compatibility
private_aggregation_internals.mojom.mojom.HandlerPtr = private_aggregation_internals.mojom.mojom.HandlerRemote;
private_aggregation_internals.mojom.mojom.HandlerRequest = private_aggregation_internals.mojom.mojom.HandlerPendingReceiver;


// Interface: Factory
private_aggregation_internals.mojom.mojom.Factory = {};

private_aggregation_internals.mojom.mojom.FactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

private_aggregation_internals.mojom.mojom.FactoryRemote = class {
  static get $interfaceName() {
    return 'private_aggregation_internals.mojom.Factory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      private_aggregation_internals.mojom.mojom.FactoryPendingReceiver,
      handle);
    this.$ = new private_aggregation_internals.mojom.mojom.FactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

private_aggregation_internals.mojom.mojom.FactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  create(observer, handler) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      private_aggregation_internals.mojom.mojom.Factory_Create_ParamsSpec,
      null,
      [observer, handler]);
  }

};

private_aggregation_internals.mojom.mojom.Factory.getRemote = function() {
  let remote = new private_aggregation_internals.mojom.mojom.FactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'private_aggregation_internals.mojom.Factory',
    'context');
  return remote.$;
};

// ParamsSpec for Create
private_aggregation_internals.mojom.mojom.Factory_Create_ParamsSpec = {
  $: {
    structSpec: {
      name: 'private_aggregation_internals.mojom.Factory.Create_Params',
      packedSize: 16,
      fields: [
        { name: 'observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
        { name: 'handler', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
private_aggregation_internals.mojom.mojom.FactoryPtr = private_aggregation_internals.mojom.mojom.FactoryRemote;
private_aggregation_internals.mojom.mojom.FactoryRequest = private_aggregation_internals.mojom.mojom.FactoryPendingReceiver;

