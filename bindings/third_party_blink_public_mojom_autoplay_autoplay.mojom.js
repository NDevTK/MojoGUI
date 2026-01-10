// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/autoplay/autoplay.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var url = url || {};


blink.mojom.mojom.kAutoplayFlagNone = 0x00000;

blink.mojom.mojom.kAutoplayFlagHighMediaEngagement = 0x00001;

blink.mojom.mojom.kAutoplayFlagForceAllow = 0x00002;

blink.mojom.mojom.kAutoplayFlagUserException = 0x00004;

// Interface: AutoplayConfigurationClient
blink.mojom.mojom.AutoplayConfigurationClient = {};

blink.mojom.mojom.AutoplayConfigurationClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.mojom.AutoplayConfigurationClientRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.AutoplayConfigurationClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.mojom.AutoplayConfigurationClientPendingReceiver,
      handle);
    this.$ = new blink.mojom.mojom.AutoplayConfigurationClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.mojom.AutoplayConfigurationClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  addAutoplayFlags(origin, flags) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.mojom.AutoplayConfigurationClient_AddAutoplayFlags_ParamsSpec,
      null,
      [origin, flags]);
  }

};

blink.mojom.mojom.AutoplayConfigurationClient.getRemote = function() {
  let remote = new blink.mojom.mojom.AutoplayConfigurationClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.AutoplayConfigurationClient',
    'context');
  return remote.$;
};

// ParamsSpec for AddAutoplayFlags
blink.mojom.mojom.AutoplayConfigurationClient_AddAutoplayFlags_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AutoplayConfigurationClient.AddAutoplayFlags_Params',
      packedSize: 24,
      fields: [
        { name: 'origin', packedOffset: 0, packedBitOffset: 0, type: url.mojom.OriginSpec, nullable: false, minVersion: 0 },
        { name: 'flags', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
blink.mojom.mojom.AutoplayConfigurationClientPtr = blink.mojom.mojom.AutoplayConfigurationClientRemote;
blink.mojom.mojom.AutoplayConfigurationClientRequest = blink.mojom.mojom.AutoplayConfigurationClientPendingReceiver;

