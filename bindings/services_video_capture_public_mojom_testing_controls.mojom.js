// Auto-generated MojoJS binding
// Source: chromium_src/services/video_capture/public/mojom/testing_controls.mojom
// Module: video_capture.mojom

// Module namespace
var video_capture = video_capture || {};
video_capture.mojom = video_capture.mojom || {};

video_capture.mojom.TestingControls = {};
video_capture.mojom.TestingControls.$interfaceName = 'video_capture.mojom.TestingControls';
video_capture.mojom.TestingControls_Crash_ParamsSpec = { $: {} };

// Interface: TestingControls
mojo.internal.Struct(
    video_capture.mojom.TestingControls_Crash_ParamsSpec, 'video_capture.mojom.TestingControls_Crash_Params', [
    ],
    [[0, 8]]);

video_capture.mojom.TestingControlsPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

video_capture.mojom.TestingControlsRemote = class {
  static get $interfaceName() {
    return 'video_capture.mojom.TestingControls';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      video_capture.mojom.TestingControlsPendingReceiver,
      handle);
    this.$ = new video_capture.mojom.TestingControlsRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  crash() {
    return this.$.crash();
  }
};

video_capture.mojom.TestingControlsRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('TestingControls', [
      { explicit: null },
    ]);
  }

  crash() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      video_capture.mojom.TestingControls_Crash_ParamsSpec,
      null,
      [],
      false);
  }

};

video_capture.mojom.TestingControls.getRemote = function() {
  let remote = new video_capture.mojom.TestingControlsRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'video_capture.mojom.TestingControls',
    'context');
  return remote.$;
};

video_capture.mojom.TestingControlsReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('TestingControls', [
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(video_capture.mojom.TestingControls_Crash_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(video_capture.mojom.TestingControls_Crash_ParamsSpec.$.structSpec);
          const result = this.impl.crash();
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

video_capture.mojom.TestingControlsReceiver = video_capture.mojom.TestingControlsReceiver;

video_capture.mojom.TestingControlsPtr = video_capture.mojom.TestingControlsRemote;
video_capture.mojom.TestingControlsRequest = video_capture.mojom.TestingControlsPendingReceiver;

