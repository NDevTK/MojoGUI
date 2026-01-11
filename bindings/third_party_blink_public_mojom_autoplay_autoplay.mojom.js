// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/autoplay/autoplay.mojom
// Module: blink.mojom

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
  addAutoplayFlags(origin, flags) {
    return this.$.addAutoplayFlags(origin, flags);
  }
};

blink.mojom.AutoplayConfigurationClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('AutoplayConfigurationClient', [
      { explicit: null },
    ]);
  }

  addAutoplayFlags(origin, flags) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      blink.mojom.AutoplayConfigurationClient_AddAutoplayFlags_ParamsSpec,
      null,
      [origin, flags],
      false);
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

blink.mojom.AutoplayConfigurationClientReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('AutoplayConfigurationClient', [
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.router_.onConnectionError.addListener(() => {
       console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
    });
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.AutoplayConfigurationClient_AddAutoplayFlags_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.AutoplayConfigurationClient_AddAutoplayFlags_ParamsSpec.$.structSpec);
          const result = this.impl.addAutoplayFlags(params.origin, params.flags);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

blink.mojom.AutoplayConfigurationClientReceiver = blink.mojom.AutoplayConfigurationClientReceiver;

blink.mojom.AutoplayConfigurationClientPtr = blink.mojom.AutoplayConfigurationClientRemote;
blink.mojom.AutoplayConfigurationClientRequest = blink.mojom.AutoplayConfigurationClientPendingReceiver;

