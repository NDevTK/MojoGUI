// Auto-generated MojoJS binding
// Source: chromium_src/content/browser/private_aggregation/private_aggregation_internals.mojom
// Module: private_aggregation_internals.mojom

'use strict';

// Module namespace
var private_aggregation_internals = private_aggregation_internals || {};
private_aggregation_internals.mojom = private_aggregation_internals.mojom || {};


// Enum: ReportStatus
private_aggregation_internals.mojom.ReportStatus = {
  kPending: 0,
  kSent: 1,
  kFailedToAssemble: 2,
  kFailedToSend: 3,
};

// Interface: Observer
private_aggregation_internals.mojom.Observer = {};

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
      []);
  }

  onReportHandled(report) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      private_aggregation_internals.mojom.Observer_OnReportHandled_ParamsSpec,
      null,
      [report]);
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

// ParamsSpec for OnRequestStorageModified
private_aggregation_internals.mojom.Observer_OnRequestStorageModified_ParamsSpec = {
  $: {
    structSpec: {
      name: 'private_aggregation_internals.mojom.Observer.OnRequestStorageModified_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnReportHandled
private_aggregation_internals.mojom.Observer_OnReportHandled_ParamsSpec = {
  $: {
    structSpec: {
      name: 'private_aggregation_internals.mojom.Observer.OnReportHandled_Params',
      packedSize: 16,
      fields: [
        { name: 'report', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
private_aggregation_internals.mojom.ObserverPtr = private_aggregation_internals.mojom.ObserverRemote;
private_aggregation_internals.mojom.ObserverRequest = private_aggregation_internals.mojom.ObserverPendingReceiver;


// Interface: Handler
private_aggregation_internals.mojom.Handler = {};

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
      []);
  }

  sendReports(ids) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      private_aggregation_internals.mojom.Handler_SendReports_ParamsSpec,
      null,
      [ids]);
  }

  clearStorage() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      private_aggregation_internals.mojom.Handler_ClearStorage_ParamsSpec,
      null,
      []);
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

// ParamsSpec for GetReports
private_aggregation_internals.mojom.Handler_GetReports_ParamsSpec = {
  $: {
    structSpec: {
      name: 'private_aggregation_internals.mojom.Handler.GetReports_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

private_aggregation_internals.mojom.Handler_GetReports_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'private_aggregation_internals.mojom.Handler.GetReports_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'reports', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SendReports
private_aggregation_internals.mojom.Handler_SendReports_ParamsSpec = {
  $: {
    structSpec: {
      name: 'private_aggregation_internals.mojom.Handler.SendReports_Params',
      packedSize: 16,
      fields: [
        { name: 'ids', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ClearStorage
private_aggregation_internals.mojom.Handler_ClearStorage_ParamsSpec = {
  $: {
    structSpec: {
      name: 'private_aggregation_internals.mojom.Handler.ClearStorage_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
private_aggregation_internals.mojom.HandlerPtr = private_aggregation_internals.mojom.HandlerRemote;
private_aggregation_internals.mojom.HandlerRequest = private_aggregation_internals.mojom.HandlerPendingReceiver;


// Interface: Factory
private_aggregation_internals.mojom.Factory = {};

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
      [observer, handler]);
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

// ParamsSpec for Create
private_aggregation_internals.mojom.Factory_Create_ParamsSpec = {
  $: {
    structSpec: {
      name: 'private_aggregation_internals.mojom.Factory.Create_Params',
      packedSize: 24,
      fields: [
        { name: 'observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
        { name: 'handler', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
private_aggregation_internals.mojom.FactoryPtr = private_aggregation_internals.mojom.FactoryRemote;
private_aggregation_internals.mojom.FactoryRequest = private_aggregation_internals.mojom.FactoryPendingReceiver;

