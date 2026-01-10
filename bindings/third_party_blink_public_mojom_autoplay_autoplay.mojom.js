// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/autoplay/autoplay.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var url = url || {};

blink.mojom.AutoplayConfigurationClient = {};
blink.mojom.AutoplayConfigurationClient.$interfaceName = 'blink.mojom.AutoplayConfigurationClient';
blink.mojom.AutoplayConfigurationClient_AddAutoplayFlags_ParamsSpec = { $: {} };

blink.mojom.kAutoplayFlagNone = 0x00000;

blink.mojom.kAutoplayFlagHighMediaEngagement = 0x00001;

blink.mojom.kAutoplayFlagForceAllow = 0x00002;

blink.mojom.kAutoplayFlagUserException = 0x00004;

// Interface: AutoplayConfigurationClient
mojo.internal.Struct(
    blink.mojom.AutoplayConfigurationClient_AddAutoplayFlags_ParamsSpec, 'blink.mojom.AutoplayConfigurationClient_AddAutoplayFlags_Params', [
      mojo.internal.StructField('origin', 0, 0, url.mojom.OriginSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('flags', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

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
      [origin, flags],
      false);
  }

};

blink.mojom.AutoplayConfigurationClient.getRemote = function() {
  let remote = new blink.mojom.AutoplayConfigurationClientRemote();
  remote.bindNewPipeAndPassReceiver();
  remote.proxy.endpoint_.bindInBrowser(
    'blink.mojom.AutoplayConfigurationClient',
    'context');
  return remote.$;
};

blink.mojom.AutoplayConfigurationClientPtr = blink.mojom.AutoplayConfigurationClientRemote;
blink.mojom.AutoplayConfigurationClientRequest = blink.mojom.AutoplayConfigurationClientPendingReceiver;

