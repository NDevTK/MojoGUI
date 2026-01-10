// Auto-generated MojoJS binding
// Source: chromium_src/services/viz/privileged/mojom/compositing/begin_frame_observer.mojom
// Module: viz.mojom

'use strict';

// Module namespace
var viz = viz || {};
viz.mojom = viz.mojom || {};

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
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'viz.mojom.BeginFrameObserver',
    'context');
  return remote.$;
};

viz.mojom.BeginFrameObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      console.log('[GeneratedReceiver] Args received:', args);
      const message = args[0];
      if (args.length > 1) { console.log('[GeneratedReceiver] 2nd Arg:', args[1]); }
      const header = message && message.header;
      if (!header) { console.warn('[GeneratedReceiver] No header in arg0'); }
      if (header) {
      console.log('[GeneratedReceiver] Header ordinal:', header.ordinal);
      switch (header.ordinal) {
        case 0: {
          const params = viz.mojom.BeginFrameObserver_OnStandaloneBeginFrame_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onStandaloneBeginFrame(params.args);
          break;
        }
      }
      }
    }});
  }
};

viz.mojom.BeginFrameObserverReceiver = viz.mojom.BeginFrameObserverReceiver;

viz.mojom.BeginFrameObserverPtr = viz.mojom.BeginFrameObserverRemote;
viz.mojom.BeginFrameObserverRequest = viz.mojom.BeginFrameObserverPendingReceiver;

