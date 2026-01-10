// Auto-generated MojoJS binding
// Source: chromium_src/chromecast/common/mojom/audio_socket.mojom
// Module: chromecast.mojom

'use strict';

// Module namespace
var chromecast = chromecast || {};
chromecast.mojom = chromecast.mojom || {};


// Interface: AudioSocketBroker
chromecast.mojom.mojom.AudioSocketBroker = {};

chromecast.mojom.mojom.AudioSocketBrokerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chromecast.mojom.mojom.AudioSocketBrokerRemote = class {
  static get $interfaceName() {
    return 'chromecast.mojom.AudioSocketBroker';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chromecast.mojom.mojom.AudioSocketBrokerPendingReceiver,
      handle);
    this.$ = new chromecast.mojom.mojom.AudioSocketBrokerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chromecast.mojom.mojom.AudioSocketBrokerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getSocketDescriptor() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      chromecast.mojom.mojom.AudioSocketBroker_GetSocketDescriptor_ParamsSpec,
      chromecast.mojom.mojom.AudioSocketBroker_GetSocketDescriptor_ResponseParamsSpec,
      []);
  }

};

chromecast.mojom.mojom.AudioSocketBroker.getRemote = function() {
  let remote = new chromecast.mojom.mojom.AudioSocketBrokerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromecast.mojom.AudioSocketBroker',
    'context');
  return remote.$;
};

// ParamsSpec for GetSocketDescriptor
chromecast.mojom.mojom.AudioSocketBroker_GetSocketDescriptor_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromecast.mojom.AudioSocketBroker.GetSocketDescriptor_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

chromecast.mojom.mojom.AudioSocketBroker_GetSocketDescriptor_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'chromecast.mojom.AudioSocketBroker.GetSocketDescriptor_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'fd', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
chromecast.mojom.mojom.AudioSocketBrokerPtr = chromecast.mojom.mojom.AudioSocketBrokerRemote;
chromecast.mojom.mojom.AudioSocketBrokerRequest = chromecast.mojom.mojom.AudioSocketBrokerPendingReceiver;

