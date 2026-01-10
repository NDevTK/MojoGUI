// Auto-generated MojoJS binding
// Source: chromium_src/services/video_capture/public/mojom/testing_controls.mojom
// Module: video_capture.mojom

'use strict';

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
};

video_capture.mojom.TestingControlsRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  crash() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
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
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = video_capture.mojom.TestingControls_Crash_ParamsSpec.$.decode(message.payload);
          const result = this.impl.crash();
          break;
        }
      }
    });
  }
};

video_capture.mojom.TestingControlsReceiver = video_capture.mojom.TestingControlsReceiver;

video_capture.mojom.TestingControlsPtr = video_capture.mojom.TestingControlsRemote;
video_capture.mojom.TestingControlsRequest = video_capture.mojom.TestingControlsPendingReceiver;

