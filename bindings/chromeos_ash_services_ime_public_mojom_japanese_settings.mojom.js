// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/services/ime/public/mojom/japanese_settings.mojom
// Module: ash.ime.mojom

// Module namespace
var ash = ash || {};
ash.ime = ash.ime || {};
ash.ime.mojom = ash.ime.mojom || {};

ash.ime.mojom.JpUnusedEnum0Spec = { $: mojo.internal.Enum() };
ash.ime.mojom.JpUnusedEnum1Spec = { $: mojo.internal.Enum() };
ash.ime.mojom.JpUnusedEnum2Spec = { $: mojo.internal.Enum() };
ash.ime.mojom.JpUnusedEnum3Spec = { $: mojo.internal.Enum() };
ash.ime.mojom.JpUnusedEnum4Spec = { $: mojo.internal.Enum() };
ash.ime.mojom.JpUnusedEnum5Spec = { $: mojo.internal.Enum() };
ash.ime.mojom.JpUnusedEnum6Spec = { $: mojo.internal.Enum() };
ash.ime.mojom.JpUnusedStructSpec = { $: {} };
ash.ime.mojom.JpUnused = {};
ash.ime.mojom.JpUnused.$interfaceName = 'ash.ime.mojom.JpUnused';
ash.ime.mojom.JpUnused_Unused_ParamsSpec = { $: {} };
ash.ime.mojom.JpUnused_Unused_ResponseParamsSpec = { $: {} };

// Enum: JpUnusedEnum0
ash.ime.mojom.JpUnusedEnum0 = {
  kValue0: 0,
  kValue1: 1,
};

// Enum: JpUnusedEnum1
ash.ime.mojom.JpUnusedEnum1 = {
  kValue0: 0,
  kValue1: 1,
  kValue2: 2,
  kValue3: 3,
};

// Enum: JpUnusedEnum2
ash.ime.mojom.JpUnusedEnum2 = {
  kValue0: 0,
  kValue1: 1,
  kValue2: 2,
  kValue3: 3,
};

// Enum: JpUnusedEnum3
ash.ime.mojom.JpUnusedEnum3 = {
  kValue0: 0,
  kValue1: 1,
  kValue2: 2,
};

// Enum: JpUnusedEnum4
ash.ime.mojom.JpUnusedEnum4 = {
  kValue0: 0,
  kValue1: 1,
  kValue2: 2,
};

// Enum: JpUnusedEnum5
ash.ime.mojom.JpUnusedEnum5 = {
  kValue0: 0,
  kValue1: 1,
  kValue2: 2,
  kValue3: 3,
  kValue4: 4,
  kValue5: 5,
  MinVersion: 5,
};

// Enum: JpUnusedEnum6
ash.ime.mojom.JpUnusedEnum6 = {
  kValue0: 0,
  kValue1: 1,
  kValue2: 2,
};

// Struct: JpUnusedStruct
mojo.internal.Struct(
    ash.ime.mojom.JpUnusedStructSpec, 'ash.ime.mojom.JpUnusedStruct', [
      mojo.internal.StructField('unused0', 0, 0, ash.ime.mojom.JpUnusedEnum0Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('unused1', 8, 0, ash.ime.mojom.JpUnusedEnum1Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('unused2', 16, 0, ash.ime.mojom.JpUnusedEnum2Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('unused3', 24, 0, ash.ime.mojom.JpUnusedEnum3Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('unused4', 32, 0, ash.ime.mojom.JpUnusedEnum4Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('unused5', 40, 0, ash.ime.mojom.JpUnusedEnum5Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('unused7', 48, 0, ash.ime.mojom.JpUnusedEnum6Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('unused10', 56, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('unused6', 64, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('unused8', 64, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('unused9', 64, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('unused11', 64, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('unused12', 64, 4, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 80]]);

// Interface: JpUnused
mojo.internal.Struct(
    ash.ime.mojom.JpUnused_Unused_ParamsSpec, 'ash.ime.mojom.JpUnused_Unused_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.ime.mojom.JpUnused_Unused_ResponseParamsSpec, 'ash.ime.mojom.JpUnused_Unused_ResponseParams', [
      mojo.internal.StructField('unused', 0, 0, ash.ime.mojom.JpUnusedStructSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

ash.ime.mojom.JpUnusedPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.ime.mojom.JpUnusedRemote = class {
  static get $interfaceName() {
    return 'ash.ime.mojom.JpUnused';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.ime.mojom.JpUnusedPendingReceiver,
      handle);
    this.$ = new ash.ime.mojom.JpUnusedRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  unused() {
    return this.$.unused();
  }
};

ash.ime.mojom.JpUnusedRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('JpUnused', [
      { explicit: 0 },
    ]);
  }

  unused() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      ash.ime.mojom.JpUnused_Unused_ParamsSpec,
      ash.ime.mojom.JpUnused_Unused_ResponseParamsSpec,
      [],
      false);
  }

};

ash.ime.mojom.JpUnused.getRemote = function() {
  let remote = new ash.ime.mojom.JpUnusedRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.ime.mojom.JpUnused',
    'context');
  return remote.$;
};

ash.ime.mojom.JpUnusedReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('JpUnused', [
      { explicit: 0 },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    if (this.router_.onConnectionError) {
      this.router_.onConnectionError.addListener(() => {
         console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
      });
    }
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
             decoder.decodeStructInline(ash.ime.mojom.JpUnused_Unused_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.ime.mojom.JpUnused_Unused_ParamsSpec.$.structSpec);
          const result = this.impl.unused();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.ime.mojom.JpUnused_Unused_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

ash.ime.mojom.JpUnusedReceiver = ash.ime.mojom.JpUnusedReceiver;

ash.ime.mojom.JpUnusedPtr = ash.ime.mojom.JpUnusedRemote;
ash.ime.mojom.JpUnusedRequest = ash.ime.mojom.JpUnusedPendingReceiver;

