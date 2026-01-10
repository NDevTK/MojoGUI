// Auto-generated MojoJS binding
// Source: chromium_src/services/viz/public/mojom/compositing/compositing_mode_watcher.mojom
// Module: viz.mojom

'use strict';

// Module namespace
var viz = viz || {};
viz.mojom = viz.mojom || {};


// Interface: CompositingModeWatcher
viz.mojom.mojom.CompositingModeWatcher = {};

viz.mojom.mojom.CompositingModeWatcherPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

viz.mojom.mojom.CompositingModeWatcherRemote = class {
  static get $interfaceName() {
    return 'viz.mojom.CompositingModeWatcher';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      viz.mojom.mojom.CompositingModeWatcherPendingReceiver,
      handle);
    this.$ = new viz.mojom.mojom.CompositingModeWatcherRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

viz.mojom.mojom.CompositingModeWatcherRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  compositingModeFallbackToSoftware() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      viz.mojom.mojom.CompositingModeWatcher_CompositingModeFallbackToSoftware_ParamsSpec,
      null,
      []);
  }

};

viz.mojom.mojom.CompositingModeWatcher.getRemote = function() {
  let remote = new viz.mojom.mojom.CompositingModeWatcherRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'viz.mojom.CompositingModeWatcher',
    'context');
  return remote.$;
};

// ParamsSpec for CompositingModeFallbackToSoftware
viz.mojom.mojom.CompositingModeWatcher_CompositingModeFallbackToSoftware_ParamsSpec = {
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
viz.mojom.mojom.CompositingModeWatcherPtr = viz.mojom.mojom.CompositingModeWatcherRemote;
viz.mojom.mojom.CompositingModeWatcherRequest = viz.mojom.mojom.CompositingModeWatcherPendingReceiver;


// Interface: CompositingModeReporter
viz.mojom.mojom.CompositingModeReporter = {};

viz.mojom.mojom.CompositingModeReporterPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

viz.mojom.mojom.CompositingModeReporterRemote = class {
  static get $interfaceName() {
    return 'viz.mojom.CompositingModeReporter';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      viz.mojom.mojom.CompositingModeReporterPendingReceiver,
      handle);
    this.$ = new viz.mojom.mojom.CompositingModeReporterRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

viz.mojom.mojom.CompositingModeReporterRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  addCompositingModeWatcher(watcher) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      viz.mojom.mojom.CompositingModeReporter_AddCompositingModeWatcher_ParamsSpec,
      null,
      [watcher]);
  }

};

viz.mojom.mojom.CompositingModeReporter.getRemote = function() {
  let remote = new viz.mojom.mojom.CompositingModeReporterRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'viz.mojom.CompositingModeReporter',
    'context');
  return remote.$;
};

// ParamsSpec for AddCompositingModeWatcher
viz.mojom.mojom.CompositingModeReporter_AddCompositingModeWatcher_ParamsSpec = {
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
viz.mojom.mojom.CompositingModeReporterPtr = viz.mojom.mojom.CompositingModeReporterRemote;
viz.mojom.mojom.CompositingModeReporterRequest = viz.mojom.mojom.CompositingModeReporterPendingReceiver;

