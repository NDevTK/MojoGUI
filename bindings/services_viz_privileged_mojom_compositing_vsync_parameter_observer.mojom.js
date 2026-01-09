// Auto-generated MojoJS binding
// Source: chromium_src/services/viz/privileged/mojom/compositing/vsync_parameter_observer.mojom
// Module: viz.mojom

'use strict';

// Module namespace
var viz = viz || {};
viz.mojom = viz.mojom || {};


// Interface: VSyncParameterObserver
viz.mojom.VSyncParameterObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

viz.mojom.VSyncParameterObserverRemote = class {
  static get $interfaceName() {
    return 'viz.mojom.VSyncParameterObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      viz.mojom.VSyncParameterObserverPendingReceiver,
      handle);
    this.$ = new viz.mojom.VSyncParameterObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

viz.mojom.VSyncParameterObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onUpdateVSyncParameters(timebase, interval) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      viz.mojom.VSyncParameterObserver_OnUpdateVSyncParameters_ParamsSpec.$,
      null,
      [timebase, interval]);
  }

};

viz.mojom.VSyncParameterObserver.getRemote = function() {
  let remote = new viz.mojom.VSyncParameterObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'viz.mojom.VSyncParameterObserver',
    'context');
  return remote.$;
}};

// ParamsSpec for OnUpdateVSyncParameters
viz.mojom.VSyncParameterObserver_OnUpdateVSyncParameters_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.VSyncParameterObserver.OnUpdateVSyncParameters_Params',
      packedSize: 24,
      fields: [
        { name: 'timebase', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'interval', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// Legacy compatibility
viz.mojom.VSyncParameterObserverPtr = viz.mojom.VSyncParameterObserverRemote;
viz.mojom.VSyncParameterObserverRequest = viz.mojom.VSyncParameterObserverPendingReceiver;

