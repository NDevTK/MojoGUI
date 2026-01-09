// Auto-generated MojoJS binding
// Source: chromium_src/services/viz/public/mojom/compositing/video_detector_observer.mojom
// Module: viz.mojom

'use strict';

// Module namespace
var viz = viz || {};
viz.mojom = viz.mojom || {};


// Interface: VideoDetectorObserver
viz.mojom.VideoDetectorObserver = {};

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
      []);
  }

  onVideoActivityEnded() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      viz.mojom.VideoDetectorObserver_OnVideoActivityEnded_ParamsSpec,
      null,
      []);
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

// ParamsSpec for OnVideoActivityStarted
viz.mojom.VideoDetectorObserver_OnVideoActivityStarted_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.VideoDetectorObserver.OnVideoActivityStarted_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for OnVideoActivityEnded
viz.mojom.VideoDetectorObserver_OnVideoActivityEnded_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.VideoDetectorObserver.OnVideoActivityEnded_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Legacy compatibility
viz.mojom.VideoDetectorObserverPtr = viz.mojom.VideoDetectorObserverRemote;
viz.mojom.VideoDetectorObserverRequest = viz.mojom.VideoDetectorObserverPendingReceiver;

