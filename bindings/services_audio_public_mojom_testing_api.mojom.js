// Auto-generated MojoJS binding
// Source: chromium_src/services/audio/public/mojom/testing_api.mojom
// Module: audio.mojom

'use strict';

// Module namespace
var audio = audio || {};
audio.mojom = audio.mojom || {};

audio.mojom.TestingApi = {};
audio.mojom.TestingApi.$interfaceName = 'audio.mojom.TestingApi';
audio.mojom.TestingApi_Crash_ParamsSpec = { $: {} };

// Interface: TestingApi
mojo.internal.Struct(
    audio.mojom.TestingApi_Crash_ParamsSpec, 'audio.mojom.TestingApi_Crash_Params', [
    ],
    [[0, 8]]);

audio.mojom.TestingApiPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

audio.mojom.TestingApiRemote = class {
  static get $interfaceName() {
    return 'audio.mojom.TestingApi';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      audio.mojom.TestingApiPendingReceiver,
      handle);
    this.$ = new audio.mojom.TestingApiRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

audio.mojom.TestingApiRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  crash() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      audio.mojom.TestingApi_Crash_ParamsSpec,
      null,
      [],
      false);
  }

};

audio.mojom.TestingApi.getRemote = function() {
  let remote = new audio.mojom.TestingApiRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'audio.mojom.TestingApi',
    'context');
  return remote.$;
};

audio.mojom.TestingApiReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (message) => {
      console.log('[GeneratedReceiver] Message received', message);
      const header = message.header;
      if (!header) { console.warn('[GeneratedReceiver] No header'); return; }
      console.log('[GeneratedReceiver] Header ordinal:', header.ordinal);
      switch (header.ordinal) {
        case 0: {
          const params = audio.mojom.TestingApi_Crash_ParamsSpec.$.decode(message.payload);
          const result = this.impl.crash();
          break;
        }
      }
    }});
  }
};

audio.mojom.TestingApiReceiver = audio.mojom.TestingApiReceiver;

audio.mojom.TestingApiPtr = audio.mojom.TestingApiRemote;
audio.mojom.TestingApiRequest = audio.mojom.TestingApiPendingReceiver;

