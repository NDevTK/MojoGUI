// Auto-generated MojoJS binding
// Source: chromium_src/content/browser/private_aggregation/private_aggregation_internals.mojom
// Module: private_aggregation_internals.mojom

'use strict';

// Module namespace
var private_aggregation_internals = private_aggregation_internals || {};
private_aggregation_internals.mojom = private_aggregation_internals.mojom || {};
var url = url || {};
var mojo_base = mojo_base || {};

private_aggregation_internals.mojom.ReportStatusSpec = { $: mojo.internal.Enum() };
private_aggregation_internals.mojom.AggregatableReportRequestIDSpec = { $: {} };
private_aggregation_internals.mojom.AggregatableHistogramContributionSpec = { $: {} };
private_aggregation_internals.mojom.WebUIAggregatableReportSpec = { $: {} };
private_aggregation_internals.mojom.Observer = {};
private_aggregation_internals.mojom.Observer.$interfaceName = 'private_aggregation_internals.mojom.Observer';
private_aggregation_internals.mojom.Observer_OnRequestStorageModified_ParamsSpec = { $: {} };
private_aggregation_internals.mojom.Observer_OnReportHandled_ParamsSpec = { $: {} };
private_aggregation_internals.mojom.Handler = {};
private_aggregation_internals.mojom.Handler.$interfaceName = 'private_aggregation_internals.mojom.Handler';
private_aggregation_internals.mojom.Handler_GetReports_ParamsSpec = { $: {} };
private_aggregation_internals.mojom.Handler_GetReports_ResponseParamsSpec = { $: {} };
private_aggregation_internals.mojom.Handler_SendReports_ParamsSpec = { $: {} };
private_aggregation_internals.mojom.Handler_SendReports_ResponseParamsSpec = { $: {} };
private_aggregation_internals.mojom.Handler_ClearStorage_ParamsSpec = { $: {} };
private_aggregation_internals.mojom.Handler_ClearStorage_ResponseParamsSpec = { $: {} };
private_aggregation_internals.mojom.Factory = {};
private_aggregation_internals.mojom.Factory.$interfaceName = 'private_aggregation_internals.mojom.Factory';
private_aggregation_internals.mojom.Factory_Create_ParamsSpec = { $: {} };

// Enum: ReportStatus
private_aggregation_internals.mojom.ReportStatus = {
  kPending: 0,
  kSent: 1,
  kFailedToAssemble: 2,
  kFailedToSend: 3,
};

// Struct: AggregatableReportRequestID
mojo.internal.Struct(
    private_aggregation_internals.mojom.AggregatableReportRequestIDSpec, 'private_aggregation_internals.mojom.AggregatableReportRequestID', [
      mojo.internal.StructField('value', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: AggregatableHistogramContribution
mojo.internal.Struct(
    private_aggregation_internals.mojom.AggregatableHistogramContributionSpec, 'private_aggregation_internals.mojom.AggregatableHistogramContribution', [
      mojo.internal.StructField('bucket', 0, 0, mojo_base.mojom.Uint128Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('value', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: WebUIAggregatableReport
mojo.internal.Struct(
    private_aggregation_internals.mojom.WebUIAggregatableReportSpec, 'private_aggregation_internals.mojom.WebUIAggregatableReport', [
      mojo.internal.StructField('id', 0, 0, private_aggregation_internals.mojom.AggregatableReportRequestIDSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('report_time', 8, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('api_identifier', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('api_version', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('report_url', 32, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('contributions', 40, 0, mojo.internal.Array(private_aggregation_internals.mojom.AggregatableHistogramContributionSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('status', 48, 0, private_aggregation_internals.mojom.ReportStatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('report_body', 56, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 72]]);

// Interface: Observer
mojo.internal.Struct(
    private_aggregation_internals.mojom.Observer_OnRequestStorageModified_ParamsSpec, 'private_aggregation_internals.mojom.Observer_OnRequestStorageModified_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    private_aggregation_internals.mojom.Observer_OnReportHandled_ParamsSpec, 'private_aggregation_internals.mojom.Observer_OnReportHandled_Params', [
      mojo.internal.StructField('report', 0, 0, private_aggregation_internals.mojom.WebUIAggregatableReportSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

private_aggregation_internals.mojom.ObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

private_aggregation_internals.mojom.ObserverRemote = class {
  static get $interfaceName() {
    return 'private_aggregation_internals.mojom.Observer';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      private_aggregation_internals.mojom.ObserverPendingReceiver,
      handle);
    this.$ = new private_aggregation_internals.mojom.ObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

private_aggregation_internals.mojom.ObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onRequestStorageModified() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      private_aggregation_internals.mojom.Observer_OnRequestStorageModified_ParamsSpec,
      null,
      [],
      false);
  }

  onReportHandled(report) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      private_aggregation_internals.mojom.Observer_OnReportHandled_ParamsSpec,
      null,
      [report],
      false);
  }

};

private_aggregation_internals.mojom.Observer.getRemote = function() {
  let remote = new private_aggregation_internals.mojom.ObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'private_aggregation_internals.mojom.Observer',
    'context');
  return remote.$;
};

private_aggregation_internals.mojom.ObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = private_aggregation_internals.mojom.Observer_OnRequestStorageModified_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onRequestStorageModified();
          break;
        }
        case 1: {
          const params = private_aggregation_internals.mojom.Observer_OnReportHandled_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onReportHandled(params.report);
          break;
        }
      }
    });
  }
};

private_aggregation_internals.mojom.ObserverReceiver = private_aggregation_internals.mojom.ObserverReceiver;

private_aggregation_internals.mojom.ObserverPtr = private_aggregation_internals.mojom.ObserverRemote;
private_aggregation_internals.mojom.ObserverRequest = private_aggregation_internals.mojom.ObserverPendingReceiver;


// Interface: Handler
mojo.internal.Struct(
    private_aggregation_internals.mojom.Handler_GetReports_ParamsSpec, 'private_aggregation_internals.mojom.Handler_GetReports_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    private_aggregation_internals.mojom.Handler_GetReports_ResponseParamsSpec, 'private_aggregation_internals.mojom.Handler_GetReports_ResponseParams', [
      mojo.internal.StructField('reports', 0, 0, mojo.internal.Array(private_aggregation_internals.mojom.WebUIAggregatableReportSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    private_aggregation_internals.mojom.Handler_SendReports_ParamsSpec, 'private_aggregation_internals.mojom.Handler_SendReports_Params', [
      mojo.internal.StructField('ids', 0, 0, mojo.internal.Array(private_aggregation_internals.mojom.AggregatableReportRequestIDSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    private_aggregation_internals.mojom.Handler_SendReports_ResponseParamsSpec, 'private_aggregation_internals.mojom.Handler_SendReports_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    private_aggregation_internals.mojom.Handler_ClearStorage_ParamsSpec, 'private_aggregation_internals.mojom.Handler_ClearStorage_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    private_aggregation_internals.mojom.Handler_ClearStorage_ResponseParamsSpec, 'private_aggregation_internals.mojom.Handler_ClearStorage_ResponseParams', [
    ],
    [[0, 8]]);

private_aggregation_internals.mojom.HandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

private_aggregation_internals.mojom.HandlerRemote = class {
  static get $interfaceName() {
    return 'private_aggregation_internals.mojom.Handler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      private_aggregation_internals.mojom.HandlerPendingReceiver,
      handle);
    this.$ = new private_aggregation_internals.mojom.HandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

private_aggregation_internals.mojom.HandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getReports() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      private_aggregation_internals.mojom.Handler_GetReports_ParamsSpec,
      private_aggregation_internals.mojom.Handler_GetReports_ResponseParamsSpec,
      [],
      false);
  }

  sendReports(ids) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      private_aggregation_internals.mojom.Handler_SendReports_ParamsSpec,
      private_aggregation_internals.mojom.Handler_SendReports_ResponseParamsSpec,
      [ids],
      false);
  }

  clearStorage() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      private_aggregation_internals.mojom.Handler_ClearStorage_ParamsSpec,
      private_aggregation_internals.mojom.Handler_ClearStorage_ResponseParamsSpec,
      [],
      false);
  }

};

private_aggregation_internals.mojom.Handler.getRemote = function() {
  let remote = new private_aggregation_internals.mojom.HandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'private_aggregation_internals.mojom.Handler',
    'context');
  return remote.$;
};

private_aggregation_internals.mojom.HandlerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = private_aggregation_internals.mojom.Handler_GetReports_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getReports();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, private_aggregation_internals.mojom.Handler_GetReports_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const params = private_aggregation_internals.mojom.Handler_SendReports_ParamsSpec.$.decode(message.payload);
          const result = this.impl.sendReports(params.ids);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, private_aggregation_internals.mojom.Handler_SendReports_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const params = private_aggregation_internals.mojom.Handler_ClearStorage_ParamsSpec.$.decode(message.payload);
          const result = this.impl.clearStorage();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, private_aggregation_internals.mojom.Handler_ClearStorage_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
    });
  }
};

private_aggregation_internals.mojom.HandlerReceiver = private_aggregation_internals.mojom.HandlerReceiver;

private_aggregation_internals.mojom.HandlerPtr = private_aggregation_internals.mojom.HandlerRemote;
private_aggregation_internals.mojom.HandlerRequest = private_aggregation_internals.mojom.HandlerPendingReceiver;


// Interface: Factory
mojo.internal.Struct(
    private_aggregation_internals.mojom.Factory_Create_ParamsSpec, 'private_aggregation_internals.mojom.Factory_Create_Params', [
      mojo.internal.StructField('observer', 0, 0, mojo.internal.InterfaceProxy(private_aggregation_internals.mojom.ObserverSpec), null, false, 0, undefined),
      mojo.internal.StructField('handler', 8, 0, mojo.internal.InterfaceRequest(private_aggregation_internals.mojom.HandlerSpec), null, false, 0, undefined),
    ],
    [[0, 24]]);

private_aggregation_internals.mojom.FactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

private_aggregation_internals.mojom.FactoryRemote = class {
  static get $interfaceName() {
    return 'private_aggregation_internals.mojom.Factory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      private_aggregation_internals.mojom.FactoryPendingReceiver,
      handle);
    this.$ = new private_aggregation_internals.mojom.FactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

private_aggregation_internals.mojom.FactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  create(observer, handler) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      private_aggregation_internals.mojom.Factory_Create_ParamsSpec,
      null,
      [observer, handler],
      false);
  }

};

private_aggregation_internals.mojom.Factory.getRemote = function() {
  let remote = new private_aggregation_internals.mojom.FactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'private_aggregation_internals.mojom.Factory',
    'context');
  return remote.$;
};

private_aggregation_internals.mojom.FactoryReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = private_aggregation_internals.mojom.Factory_Create_ParamsSpec.$.decode(message.payload);
          const result = this.impl.create(params.observer, params.handler);
          break;
        }
      }
    });
  }
};

private_aggregation_internals.mojom.FactoryReceiver = private_aggregation_internals.mojom.FactoryReceiver;

private_aggregation_internals.mojom.FactoryPtr = private_aggregation_internals.mojom.FactoryRemote;
private_aggregation_internals.mojom.FactoryRequest = private_aggregation_internals.mojom.FactoryPendingReceiver;

