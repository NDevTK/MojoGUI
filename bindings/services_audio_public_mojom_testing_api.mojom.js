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
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      switch (header.ordinal) {
        case 0: {
          const params = audio.mojom.TestingApi_Crash_ParamsSpec.$.decode(message.payload);
          console.log('[GeneratedReceiver] Calling impl.crash');
          const result = this.impl.crash();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

audio.mojom.TestingApiReceiver = audio.mojom.TestingApiReceiver;

audio.mojom.TestingApiPtr = audio.mojom.TestingApiRemote;
audio.mojom.TestingApiRequest = audio.mojom.TestingApiPendingReceiver;

