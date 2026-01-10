// Auto-generated MojoJS binding
// Source: chromium_src/services/viz/public/mojom/compositing/video_detector_observer.mojom
// Module: viz.mojom

'use strict';

// Module namespace
var viz = viz || {};
viz.mojom = viz.mojom || {};

viz.mojom.VideoDetectorObserver = {};
viz.mojom.VideoDetectorObserver.$interfaceName = 'viz.mojom.VideoDetectorObserver';
viz.mojom.VideoDetectorObserver_OnVideoActivityStarted_ParamsSpec = { $: {} };
viz.mojom.VideoDetectorObserver_OnVideoActivityEnded_ParamsSpec = { $: {} };

// Interface: VideoDetectorObserver
mojo.internal.Struct(
    viz.mojom.VideoDetectorObserver_OnVideoActivityStarted_ParamsSpec, 'viz.mojom.VideoDetectorObserver_OnVideoActivityStarted_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    viz.mojom.VideoDetectorObserver_OnVideoActivityEnded_ParamsSpec, 'viz.mojom.VideoDetectorObserver_OnVideoActivityEnded_Params', [
    ],
    [[0, 8]]);

viz.mojom.VideoDetectorObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

viz.mojom.VideoDetectorObserverRemote = class {
  static get $interfaceName() {
    return 'viz.mojom.VideoDetectorObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      viz.mojom.VideoDetectorObserverPendingReceiver,
      handle);
    this.$ = new viz.mojom.VideoDetectorObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

viz.mojom.VideoDetectorObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onVideoActivityStarted() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      viz.mojom.VideoDetectorObserver_OnVideoActivityStarted_ParamsSpec,
      null,
      [],
      false);
  }

  onVideoActivityEnded() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      viz.mojom.VideoDetectorObserver_OnVideoActivityEnded_ParamsSpec,
      null,
      [],
      false);
  }

};

viz.mojom.VideoDetectorObserver.getRemote = function() {
  let remote = new viz.mojom.VideoDetectorObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'viz.mojom.VideoDetectorObserver',
    'context');
  return remote.$;
};

viz.mojom.VideoDetectorObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        message = {
          header: args[1],
          payload: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      switch (header.ordinal) {
        case 0: {
          const params = viz.mojom.VideoDetectorObserver_OnVideoActivityStarted_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onVideoActivityStarted();
          break;
        }
        case 1: {
          const params = viz.mojom.VideoDetectorObserver_OnVideoActivityEnded_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onVideoActivityEnded();
          break;
        }
      }
    }});
  }
};

viz.mojom.VideoDetectorObserverReceiver = viz.mojom.VideoDetectorObserverReceiver;

viz.mojom.VideoDetectorObserverPtr = viz.mojom.VideoDetectorObserverRemote;
viz.mojom.VideoDetectorObserverRequest = viz.mojom.VideoDetectorObserverPendingReceiver;

