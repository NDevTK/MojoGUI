// Auto-generated MojoJS binding
// Source: chromium_src/services/viz/privileged/mojom/compositing/begin_frame_observer.mojom
// Module: viz.mojom

'use strict';

// Module namespace
var viz = viz || {};
viz.mojom = viz.mojom || {};
var services = services || {};

viz.mojom.BeginFrameObserver = {};
viz.mojom.BeginFrameObserver.$interfaceName = 'viz.mojom.BeginFrameObserver';
viz.mojom.BeginFrameObserver_OnStandaloneBeginFrame_ParamsSpec = { $: {} };

// Interface: BeginFrameObserver
mojo.internal.Struct(
    viz.mojom.BeginFrameObserver_OnStandaloneBeginFrame_ParamsSpec, 'viz.mojom.BeginFrameObserver_OnStandaloneBeginFrame_Params', [
      mojo.internal.StructField('args', 0, 0, viz.mojom.BeginFrameArgsSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

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
      [args],
      false);
  }

};

viz.mojom.BeginFrameObserver.getRemote = function() {
  let remote = new viz.mojom.BeginFrameObserverRemote();
  remote.bindNewPipeAndPassReceiver();
  remote.proxy.endpoint_.bindInBrowser(
    'viz.mojom.BeginFrameObserver',
    'context');
  return remote.$;
};

viz.mojom.BeginFrameObserverPtr = viz.mojom.BeginFrameObserverRemote;
viz.mojom.BeginFrameObserverRequest = viz.mojom.BeginFrameObserverPendingReceiver;

