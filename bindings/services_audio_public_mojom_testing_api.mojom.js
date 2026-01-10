// Auto-generated MojoJS binding
// Source: chromium_src/services/audio/public/mojom/testing_api.mojom
// Module: audio.mojom

'use strict';

// Module namespace
var audio = audio || {};
audio.mojom = audio.mojom || {};


// Interface: TestingApi
audio.mojom.mojom.TestingApi = {};

audio.mojom.mojom.TestingApiPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

audio.mojom.mojom.TestingApiRemote = class {
  static get $interfaceName() {
    return 'audio.mojom.TestingApi';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      audio.mojom.mojom.TestingApiPendingReceiver,
      handle);
    this.$ = new audio.mojom.mojom.TestingApiRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

audio.mojom.mojom.TestingApiRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  crash() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      audio.mojom.mojom.TestingApi_Crash_ParamsSpec,
      null,
      []);
  }

};

audio.mojom.mojom.TestingApi.getRemote = function() {
  let remote = new audio.mojom.mojom.TestingApiRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'audio.mojom.TestingApi',
    'context');
  return remote.$;
};

// ParamsSpec for Crash
audio.mojom.mojom.TestingApi_Crash_ParamsSpec = {
  $: {
    structSpec: {
      name: 'audio.mojom.TestingApi.Crash_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Legacy compatibility
audio.mojom.mojom.TestingApiPtr = audio.mojom.mojom.TestingApiRemote;
audio.mojom.mojom.TestingApiRequest = audio.mojom.mojom.TestingApiPendingReceiver;

