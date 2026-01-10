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
  remote.bindNewPipeAndPassReceiver();
  remote.proxy.endpoint_.bindInBrowser(
    'audio.mojom.TestingApi',
    'context');
  return remote.$;
};

audio.mojom.TestingApiPtr = audio.mojom.TestingApiRemote;
audio.mojom.TestingApiRequest = audio.mojom.TestingApiPendingReceiver;

