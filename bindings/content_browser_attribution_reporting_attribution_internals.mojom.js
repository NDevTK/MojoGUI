// Auto-generated MojoJS binding
// Source: chromium_src/content/browser/attribution_reporting/attribution_internals.mojom
// Module: attribution_internals.mojom

'use strict';

// Module namespace
var attribution_internals = attribution_internals || {};
attribution_internals.mojom = attribution_internals.mojom || {};


// Enum: Attributability
attribution_internals.mojom.Attributability = {
  kAttributable: 0,
  kNoisedNever: 1,
  kNoisedFalsely: 2,
  kReachedEventLevelAttributionLimit: 3,
};

// Interface: Observer
attribution_internals.mojom.Observer = {};

attribution_internals.mojom.ObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

attribution_internals.mojom.ObserverRemote = class {
  static get $interfaceName() {
    return 'attribution_internals.mojom.Observer';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      attribution_internals.mojom.ObserverPendingReceiver,
      handle);
    this.$ = new attribution_internals.mojom.ObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

attribution_internals.mojom.ObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onSourcesChanged(sources) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      attribution_internals.mojom.Observer_OnSourcesChanged_ParamsSpec,
      null,
      null,
      [sources],
      undefined,
      undefined
    );
  }

  onReportsChanged(reports) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      attribution_internals.mojom.Observer_OnReportsChanged_ParamsSpec,
      null,
      null,
      [reports],
      undefined,
      undefined
    );
  }

  onSourceHandled(source) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      attribution_internals.mojom.Observer_OnSourceHandled_ParamsSpec,
      null,
      null,
      [source],
      undefined,
      undefined
    );
  }

  onReportHandled(report) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      attribution_internals.mojom.Observer_OnReportHandled_ParamsSpec,
      null,
      null,
      [report],
      undefined,
      undefined
    );
  }

  onDebugReportSent(report) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      attribution_internals.mojom.Observer_OnDebugReportSent_ParamsSpec,
      null,
      null,
      [report],
      undefined,
      undefined
    );
  }

  onAggregatableDebugReportSent(report) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      attribution_internals.mojom.Observer_OnAggregatableDebugReportSent_ParamsSpec,
      null,
      null,
      [report],
      undefined,
      undefined
    );
  }

  onTriggerHandled(trigger) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      attribution_internals.mojom.Observer_OnTriggerHandled_ParamsSpec,
      null,
      null,
      [trigger],
      undefined,
      undefined
    );
  }

  onOsRegistration(registration) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      attribution_internals.mojom.Observer_OnOsRegistration_ParamsSpec,
      null,
      null,
      [registration],
      undefined,
      undefined
    );
  }

  onDebugModeChanged(debug_mode) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      attribution_internals.mojom.Observer_OnDebugModeChanged_ParamsSpec,
      null,
      null,
      [debug_mode],
      undefined,
      undefined
    );
  }

};

attribution_internals.mojom.Observer.getRemote = function() {
  let remote = new attribution_internals.mojom.ObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'attribution_internals.mojom.Observer',
    'context');
  return remote.$;
};

// ParamsSpec for OnSourcesChanged
attribution_internals.mojom.Observer_OnSourcesChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'attribution_internals.mojom.Observer.OnSourcesChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'sources', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnReportsChanged
attribution_internals.mojom.Observer_OnReportsChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'attribution_internals.mojom.Observer.OnReportsChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'reports', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnSourceHandled
attribution_internals.mojom.Observer_OnSourceHandled_ParamsSpec = {
  $: {
    structSpec: {
      name: 'attribution_internals.mojom.Observer.OnSourceHandled_Params',
      packedSize: 16,
      fields: [
        { name: 'source', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnReportHandled
attribution_internals.mojom.Observer_OnReportHandled_ParamsSpec = {
  $: {
    structSpec: {
      name: 'attribution_internals.mojom.Observer.OnReportHandled_Params',
      packedSize: 16,
      fields: [
        { name: 'report', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnDebugReportSent
attribution_internals.mojom.Observer_OnDebugReportSent_ParamsSpec = {
  $: {
    structSpec: {
      name: 'attribution_internals.mojom.Observer.OnDebugReportSent_Params',
      packedSize: 16,
      fields: [
        { name: 'report', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnAggregatableDebugReportSent
attribution_internals.mojom.Observer_OnAggregatableDebugReportSent_ParamsSpec = {
  $: {
    structSpec: {
      name: 'attribution_internals.mojom.Observer.OnAggregatableDebugReportSent_Params',
      packedSize: 16,
      fields: [
        { name: 'report', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnTriggerHandled
attribution_internals.mojom.Observer_OnTriggerHandled_ParamsSpec = {
  $: {
    structSpec: {
      name: 'attribution_internals.mojom.Observer.OnTriggerHandled_Params',
      packedSize: 16,
      fields: [
        { name: 'trigger', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnOsRegistration
attribution_internals.mojom.Observer_OnOsRegistration_ParamsSpec = {
  $: {
    structSpec: {
      name: 'attribution_internals.mojom.Observer.OnOsRegistration_Params',
      packedSize: 16,
      fields: [
        { name: 'registration', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnDebugModeChanged
attribution_internals.mojom.Observer_OnDebugModeChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'attribution_internals.mojom.Observer.OnDebugModeChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'debug_mode', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
attribution_internals.mojom.ObserverPtr = attribution_internals.mojom.ObserverRemote;
attribution_internals.mojom.ObserverRequest = attribution_internals.mojom.ObserverPendingReceiver;


// Interface: Handler
attribution_internals.mojom.Handler = {};

attribution_internals.mojom.HandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

attribution_internals.mojom.HandlerRemote = class {
  static get $interfaceName() {
    return 'attribution_internals.mojom.Handler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      attribution_internals.mojom.HandlerPendingReceiver,
      handle);
    this.$ = new attribution_internals.mojom.HandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

attribution_internals.mojom.HandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  isAttributionReportingEnabled() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      attribution_internals.mojom.Handler_IsAttributionReportingEnabled_ParamsSpec,
      attribution_internals.mojom.Handler_IsAttributionReportingEnabled_ResponseParamsSpec,
      attribution_internals.mojom.Handler_IsAttributionReportingEnabled_ResponseParamsSpec,
      [],
      undefined,
      undefined
    );
  }

  sendReport(id) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      attribution_internals.mojom.Handler_SendReport_ParamsSpec,
      null,
      null,
      [id],
      undefined,
      undefined
    );
  }

  clearStorage() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      attribution_internals.mojom.Handler_ClearStorage_ParamsSpec,
      null,
      null,
      [],
      undefined,
      undefined
    );
  }

};

attribution_internals.mojom.Handler.getRemote = function() {
  let remote = new attribution_internals.mojom.HandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'attribution_internals.mojom.Handler',
    'context');
  return remote.$;
};

// ParamsSpec for IsAttributionReportingEnabled
attribution_internals.mojom.Handler_IsAttributionReportingEnabled_ParamsSpec = {
  $: {
    structSpec: {
      name: 'attribution_internals.mojom.Handler.IsAttributionReportingEnabled_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

attribution_internals.mojom.Handler_IsAttributionReportingEnabled_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'attribution_internals.mojom.Handler.IsAttributionReportingEnabled_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'enabled', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'attribution_support', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for SendReport
attribution_internals.mojom.Handler_SendReport_ParamsSpec = {
  $: {
    structSpec: {
      name: 'attribution_internals.mojom.Handler.SendReport_Params',
      packedSize: 16,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ClearStorage
attribution_internals.mojom.Handler_ClearStorage_ParamsSpec = {
  $: {
    structSpec: {
      name: 'attribution_internals.mojom.Handler.ClearStorage_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Legacy compatibility
attribution_internals.mojom.HandlerPtr = attribution_internals.mojom.HandlerRemote;
attribution_internals.mojom.HandlerRequest = attribution_internals.mojom.HandlerPendingReceiver;


// Interface: Factory
attribution_internals.mojom.Factory = {};

attribution_internals.mojom.FactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

attribution_internals.mojom.FactoryRemote = class {
  static get $interfaceName() {
    return 'attribution_internals.mojom.Factory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      attribution_internals.mojom.FactoryPendingReceiver,
      handle);
    this.$ = new attribution_internals.mojom.FactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

attribution_internals.mojom.FactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  create(observer, handler) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      attribution_internals.mojom.Factory_Create_ParamsSpec,
      null,
      null,
      [observer, handler],
      undefined,
      undefined
    );
  }

};

attribution_internals.mojom.Factory.getRemote = function() {
  let remote = new attribution_internals.mojom.FactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'attribution_internals.mojom.Factory',
    'context');
  return remote.$;
};

// ParamsSpec for Create
attribution_internals.mojom.Factory_Create_ParamsSpec = {
  $: {
    structSpec: {
      name: 'attribution_internals.mojom.Factory.Create_Params',
      packedSize: 24,
      fields: [
        { name: 'observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
        { name: 'handler', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
attribution_internals.mojom.FactoryPtr = attribution_internals.mojom.FactoryRemote;
attribution_internals.mojom.FactoryRequest = attribution_internals.mojom.FactoryPendingReceiver;

