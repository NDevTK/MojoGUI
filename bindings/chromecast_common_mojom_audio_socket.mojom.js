// Auto-generated MojoJS binding
// Source: chromium_src/chromecast/common/mojom/audio_socket.mojom
// Module: chromecast.mojom

'use strict';

// Module namespace
var chromecast = chromecast || {};
chromecast.mojom = chromecast.mojom || {};

chromecast.mojom.AudioSocketBroker = {};
chromecast.mojom.AudioSocketBroker.$interfaceName = 'chromecast.mojom.AudioSocketBroker';
chromecast.mojom.AudioSocketBroker_GetSocketDescriptor_ParamsSpec = { $: {} };
chromecast.mojom.AudioSocketBroker_GetSocketDescriptor_ResponseParamsSpec = { $: {} };

// Interface: AudioSocketBroker
mojo.internal.Struct(
    chromecast.mojom.AudioSocketBroker_GetSocketDescriptor_ParamsSpec, 'chromecast.mojom.AudioSocketBroker_GetSocketDescriptor_Params', [
    ],
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    chromecast.mojom.AudioSocketBroker_GetSocketDescriptor_ResponseParamsSpec, 'chromecast.mojom.AudioSocketBroker_GetSocketDescriptor_ResponseParams', [
      mojo.internal.StructField('fd', 0, 0, mojo.internal.Pointer, null, true, 0, undefined),
    ],
    [[0, 16]]);

chromecast.mojom.AudioSocketBrokerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chromecast.mojom.AudioSocketBrokerRemote = class {
  static get $interfaceName() {
    return 'chromecast.mojom.AudioSocketBroker';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chromecast.mojom.AudioSocketBrokerPendingReceiver,
      handle);
    this.$ = new chromecast.mojom.AudioSocketBrokerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chromecast.mojom.AudioSocketBrokerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getSocketDescriptor() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      chromecast.mojom.AudioSocketBroker_GetSocketDescriptor_ParamsSpec,
      chromecast.mojom.AudioSocketBroker_GetSocketDescriptor_ResponseParamsSpec,
      []);
  }

};

chromecast.mojom.AudioSocketBroker.getRemote = function() {
  let remote = new chromecast.mojom.AudioSocketBrokerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromecast.mojom.AudioSocketBroker',
    'context');
  return remote.$;
};

chromecast.mojom.AudioSocketBrokerPtr = chromecast.mojom.AudioSocketBrokerRemote;
chromecast.mojom.AudioSocketBrokerRequest = chromecast.mojom.AudioSocketBrokerPendingReceiver;

