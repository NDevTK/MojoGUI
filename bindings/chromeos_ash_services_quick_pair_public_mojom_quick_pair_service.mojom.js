// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/services/quick_pair/public/mojom/quick_pair_service.mojom
// Module: ash.quick_pair.mojom

// Module namespace
var ash = ash || {};
ash.quick_pair = ash.quick_pair || {};
ash.quick_pair.mojom = ash.quick_pair.mojom || {};
var sandbox = sandbox || {};

ash.quick_pair.mojom.QuickPairService = {};
ash.quick_pair.mojom.QuickPairService.$interfaceName = 'ash.quick_pair.mojom.QuickPairService';
ash.quick_pair.mojom.QuickPairService_Connect_ParamsSpec = { $: {} };

// Interface: QuickPairService
mojo.internal.Struct(
    ash.quick_pair.mojom.QuickPairService_Connect_ParamsSpec, 'ash.quick_pair.mojom.QuickPairService_Connect_Params', [
      mojo.internal.StructField('fast_pair_data_parser', 0, 0, mojo.internal.InterfaceRequest(ash.quick_pair.mojom.FastPairDataParserRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

ash.quick_pair.mojom.QuickPairServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.quick_pair.mojom.QuickPairServiceRemote = class {
  static get $interfaceName() {
    return 'ash.quick_pair.mojom.QuickPairService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.quick_pair.mojom.QuickPairServicePendingReceiver,
      handle);
    this.$ = new ash.quick_pair.mojom.QuickPairServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  connect(fast_pair_data_parser) {
    return this.$.connect(fast_pair_data_parser);
  }
};

ash.quick_pair.mojom.QuickPairServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('QuickPairService', [
      { explicit: null },
    ]);
  }

  connect(fast_pair_data_parser) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      ash.quick_pair.mojom.QuickPairService_Connect_ParamsSpec,
      null,
      [fast_pair_data_parser],
      false);
  }

};

ash.quick_pair.mojom.QuickPairService.getRemote = function() {
  let remote = new ash.quick_pair.mojom.QuickPairServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.quick_pair.mojom.QuickPairService',
    'context');
  return remote.$;
};

ash.quick_pair.mojom.QuickPairServiceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('QuickPairService', [
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
             decoder.decodeStructInline(ash.quick_pair.mojom.QuickPairService_Connect_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.quick_pair.mojom.QuickPairService_Connect_ParamsSpec.$.structSpec);
          const result = this.impl.connect(params.fast_pair_data_parser);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

ash.quick_pair.mojom.QuickPairServiceReceiver = ash.quick_pair.mojom.QuickPairServiceReceiver;

ash.quick_pair.mojom.QuickPairServicePtr = ash.quick_pair.mojom.QuickPairServiceRemote;
ash.quick_pair.mojom.QuickPairServiceRequest = ash.quick_pair.mojom.QuickPairServicePendingReceiver;

