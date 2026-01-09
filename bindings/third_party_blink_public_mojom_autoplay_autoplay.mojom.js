// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/autoplay/autoplay.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Interface: AutoplayConfigurationClient
blink.mojom.AutoplayConfigurationClient = {};

blink.mojom.AutoplayConfigurationClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.AutoplayConfigurationClientRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.AutoplayConfigurationClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.AutoplayConfigurationClientPendingReceiver,
      handle);
    this.$ = new blink.mojom.AutoplayConfigurationClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.AutoplayConfigurationClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  addAutoplayFlags(origin, flags) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.AutoplayConfigurationClient_AddAutoplayFlags_ParamsSpec,
      null,
      [origin, flags]);
  }

};

blink.mojom.AutoplayConfigurationClient.getRemote = function() {
  let remote = new blink.mojom.AutoplayConfigurationClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.AutoplayConfigurationClient',
    'context');
  return remote.$;
};

// ParamsSpec for AddAutoplayFlags
blink.mojom.AutoplayConfigurationClient_AddAutoplayFlags_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AutoplayConfigurationClient.AddAutoplayFlags_Params',
      packedSize: 24,
      fields: [
        { name: 'origin', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'flags', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
blink.mojom.AutoplayConfigurationClientPtr = blink.mojom.AutoplayConfigurationClientRemote;
blink.mojom.AutoplayConfigurationClientRequest = blink.mojom.AutoplayConfigurationClientPendingReceiver;

