// Auto-generated MojoJS binding
// Source: chromium_src/services/viz/public/mojom/compositing/compositing_mode_watcher.mojom
// Module: viz.mojom

'use strict';

// Module namespace
var viz = viz || {};
viz.mojom = viz.mojom || {};


// Interface: CompositingModeWatcher
viz.mojom.CompositingModeWatcher = {};

viz.mojom.CompositingModeWatcherPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

viz.mojom.CompositingModeWatcherRemote = class {
  static get $interfaceName() {
    return 'viz.mojom.CompositingModeWatcher';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      viz.mojom.CompositingModeWatcherPendingReceiver,
      handle);
    this.$ = new viz.mojom.CompositingModeWatcherRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

viz.mojom.CompositingModeWatcherRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  compositingModeFallbackToSoftware() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      viz.mojom.CompositingModeWatcher_CompositingModeFallbackToSoftware_ParamsSpec,
      null,
      []);
  }

};

viz.mojom.CompositingModeWatcher.getRemote = function() {
  let remote = new viz.mojom.CompositingModeWatcherRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'viz.mojom.CompositingModeWatcher',
    'context');
  return remote.$;
};

// ParamsSpec for CompositingModeFallbackToSoftware
viz.mojom.CompositingModeWatcher_CompositingModeFallbackToSoftware_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.CompositingModeWatcher.CompositingModeFallbackToSoftware_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Legacy compatibility
viz.mojom.CompositingModeWatcherPtr = viz.mojom.CompositingModeWatcherRemote;
viz.mojom.CompositingModeWatcherRequest = viz.mojom.CompositingModeWatcherPendingReceiver;


// Interface: CompositingModeReporter
viz.mojom.CompositingModeReporter = {};

viz.mojom.CompositingModeReporterPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

viz.mojom.CompositingModeReporterRemote = class {
  static get $interfaceName() {
    return 'viz.mojom.CompositingModeReporter';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      viz.mojom.CompositingModeReporterPendingReceiver,
      handle);
    this.$ = new viz.mojom.CompositingModeReporterRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

viz.mojom.CompositingModeReporterRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  addCompositingModeWatcher(watcher) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      viz.mojom.CompositingModeReporter_AddCompositingModeWatcher_ParamsSpec,
      null,
      [watcher]);
  }

};

viz.mojom.CompositingModeReporter.getRemote = function() {
  let remote = new viz.mojom.CompositingModeReporterRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'viz.mojom.CompositingModeReporter',
    'context');
  return remote.$;
};

// ParamsSpec for AddCompositingModeWatcher
viz.mojom.CompositingModeReporter_AddCompositingModeWatcher_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.CompositingModeReporter.AddCompositingModeWatcher_Params',
      packedSize: 16,
      fields: [
        { name: 'watcher', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
viz.mojom.CompositingModeReporterPtr = viz.mojom.CompositingModeReporterRemote;
viz.mojom.CompositingModeReporterRequest = viz.mojom.CompositingModeReporterPendingReceiver;

