// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/font_access/font_access.mojom
// Module: blink.mojom

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var mojo_base = mojo_base || {};

blink.mojom.FontEnumerationStatusSpec = { $: mojo.internal.Enum() };
blink.mojom.FontDataSpec = { $: {} };
blink.mojom.FontAccessManager = {};
blink.mojom.FontAccessManager.$interfaceName = 'blink.mojom.FontAccessManager';
blink.mojom.FontAccessManager_EnumerateLocalFonts_ParamsSpec = { $: {} };
blink.mojom.FontAccessManager_EnumerateLocalFonts_ResponseParamsSpec = { $: {} };

// Enum: FontEnumerationStatus
blink.mojom.FontEnumerationStatus = {
  kOk: 0,
  kUnimplemented: 1,
  kUnexpectedError: 2,
  kNeedsUserActivation: 3,
  kNotVisible: 4,
  kPermissionDenied: 5,
};

// Struct: FontData
mojo.internal.Struct(
    blink.mojom.FontDataSpec, 'blink.mojom.FontData', [
      mojo.internal.StructField('postscript_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('full_name', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('family', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('style', 24, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 40]]);

// Interface: FontAccessManager
mojo.internal.Struct(
    blink.mojom.FontAccessManager_EnumerateLocalFonts_ParamsSpec, 'blink.mojom.FontAccessManager_EnumerateLocalFonts_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.FontAccessManager_EnumerateLocalFonts_ResponseParamsSpec, 'blink.mojom.FontAccessManager_EnumerateLocalFonts_ResponseParams', [
      mojo.internal.StructField('enumeration_status', 0, 0, blink.mojom.FontEnumerationStatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('enumeration_table', 8, 0, mojo_base.mojom.ReadOnlySharedMemoryRegionSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

blink.mojom.FontAccessManagerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.FontAccessManagerRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.FontAccessManager';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.FontAccessManagerPendingReceiver,
      handle);
    this.$ = new blink.mojom.FontAccessManagerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  enumerateLocalFonts() {
    return this.$.enumerateLocalFonts();
  }
};

blink.mojom.FontAccessManagerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('FontAccessManager', [
      { explicit: null },
    ]);
  }

  enumerateLocalFonts() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      blink.mojom.FontAccessManager_EnumerateLocalFonts_ParamsSpec,
      blink.mojom.FontAccessManager_EnumerateLocalFonts_ResponseParamsSpec,
      [],
      false);
  }

};

blink.mojom.FontAccessManager.getRemote = function() {
  let remote = new blink.mojom.FontAccessManagerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.FontAccessManager',
    'context');
  return remote.$;
};

blink.mojom.FontAccessManagerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('FontAccessManager', [
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
             decoder.decodeStructInline(blink.mojom.FontAccessManager_EnumerateLocalFonts_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.FontAccessManager_EnumerateLocalFonts_ParamsSpec.$.structSpec);
          const result = this.impl.enumerateLocalFonts();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.FontAccessManager_EnumerateLocalFonts_ResponseParamsSpec);
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

blink.mojom.FontAccessManagerReceiver = blink.mojom.FontAccessManagerReceiver;

blink.mojom.FontAccessManagerPtr = blink.mojom.FontAccessManagerRemote;
blink.mojom.FontAccessManagerRequest = blink.mojom.FontAccessManagerPendingReceiver;

