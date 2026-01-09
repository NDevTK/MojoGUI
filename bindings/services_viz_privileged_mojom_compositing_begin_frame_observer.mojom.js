// Auto-generated MojoJS binding
// Source: chromium_src/services/viz/privileged/mojom/compositing/begin_frame_observer.mojom
// Module: viz.mojom

'use strict';

// Module namespace
var viz = viz || {};
viz.mojom = viz.mojom || {};


// Interface: BeginFrameObserver
viz.mojom.BeginFrameObserver = {};

viz.mojom.BeginFrameObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

viz.mojom.BeginFrameObserverRemote = class {
  static get $interfaceName() {
    return 'viz.mojom.BeginFrameObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      viz.mojom.BeginFrameObserverPendingReceiver,
      handle);
    this.$ = new viz.mojom.BeginFrameObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

viz.mojom.BeginFrameObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onStandaloneBeginFrame(args) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      viz.mojom.BeginFrameObserver_OnStandaloneBeginFrame_ParamsSpec,
      null,
      null,
      [args],
      undefined,
      undefined
    );
  }

};

viz.mojom.BeginFrameObserver.getRemote = function() {
  let remote = new viz.mojom.BeginFrameObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'viz.mojom.BeginFrameObserver',
    'context');
  return remote.$;
};

// ParamsSpec for OnStandaloneBeginFrame
viz.mojom.BeginFrameObserver_OnStandaloneBeginFrame_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.BeginFrameObserver.OnStandaloneBeginFrame_Params',
      packedSize: 16,
      fields: [
        { name: 'args', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
viz.mojom.BeginFrameObserverPtr = viz.mojom.BeginFrameObserverRemote;
viz.mojom.BeginFrameObserverRequest = viz.mojom.BeginFrameObserverPendingReceiver;

