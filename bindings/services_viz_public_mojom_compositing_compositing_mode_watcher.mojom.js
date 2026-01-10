// Auto-generated MojoJS binding
// Source: chromium_src/services/viz/public/mojom/compositing/compositing_mode_watcher.mojom
// Module: viz.mojom

'use strict';

// Module namespace
var viz = viz || {};
viz.mojom = viz.mojom || {};

viz.mojom.CompositingModeWatcher = {};
viz.mojom.CompositingModeWatcher.$interfaceName = 'viz.mojom.CompositingModeWatcher';
viz.mojom.CompositingModeWatcher_CompositingModeFallbackToSoftware_ParamsSpec = { $: {} };
viz.mojom.CompositingModeReporter = {};
viz.mojom.CompositingModeReporter.$interfaceName = 'viz.mojom.CompositingModeReporter';
viz.mojom.CompositingModeReporter_AddCompositingModeWatcher_ParamsSpec = { $: {} };

// Interface: CompositingModeWatcher
mojo.internal.Struct(
    viz.mojom.CompositingModeWatcher_CompositingModeFallbackToSoftware_ParamsSpec, 'viz.mojom.CompositingModeWatcher_CompositingModeFallbackToSoftware_Params', [
    ],
    [{version: 0, packedSize: 8}]);

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

viz.mojom.CompositingModeWatcherPtr = viz.mojom.CompositingModeWatcherRemote;
viz.mojom.CompositingModeWatcherRequest = viz.mojom.CompositingModeWatcherPendingReceiver;


// Interface: CompositingModeReporter
mojo.internal.Struct(
    viz.mojom.CompositingModeReporter_AddCompositingModeWatcher_ParamsSpec, 'viz.mojom.CompositingModeReporter_AddCompositingModeWatcher_Params', [
      mojo.internal.StructField('watcher', 0, 0, mojo.internal.InterfaceProxy(viz.mojom.CompositingModeWatcherRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

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

viz.mojom.CompositingModeReporterPtr = viz.mojom.CompositingModeReporterRemote;
viz.mojom.CompositingModeReporterRequest = viz.mojom.CompositingModeReporterPendingReceiver;

