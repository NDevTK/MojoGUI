// Auto-generated MojoJS binding
// Source: chromium_src/components/guest_contents/common/guest_contents.mojom
// Module: guest_contents.mojom

// Module namespace
var guest_contents = guest_contents || {};
guest_contents.mojom = guest_contents.mojom || {};
var mojo_base = mojo_base || {};
var blink = blink || {};

guest_contents.mojom.GuestContentsHost = {};
guest_contents.mojom.GuestContentsHost.$interfaceName = 'guest_contents.mojom.GuestContentsHost';
guest_contents.mojom.GuestContentsHost_Attach_ParamsSpec = { $: {} };
guest_contents.mojom.GuestContentsHost_Attach_ResponseParamsSpec = { $: {} };

// Interface: GuestContentsHost
mojo.internal.Struct(
    guest_contents.mojom.GuestContentsHost_Attach_ParamsSpec, 'guest_contents.mojom.GuestContentsHost_Attach_Params', [
      mojo.internal.StructField('frame_to_swap', 0, 0, blink.mojom.LocalFrameTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('guest_contents_id', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    guest_contents.mojom.GuestContentsHost_Attach_ResponseParamsSpec, 'guest_contents.mojom.GuestContentsHost_Attach_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

guest_contents.mojom.GuestContentsHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

guest_contents.mojom.GuestContentsHostRemote = class {
  static get $interfaceName() {
    return 'guest_contents.mojom.GuestContentsHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      guest_contents.mojom.GuestContentsHostPendingReceiver,
      handle);
    this.$ = new guest_contents.mojom.GuestContentsHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  attach(frame_to_swap, guest_contents_id) {
    return this.$.attach(frame_to_swap, guest_contents_id);
  }
};

guest_contents.mojom.GuestContentsHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('GuestContentsHost', [
      { explicit: null },
    ]);
  }

  attach(frame_to_swap, guest_contents_id) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      guest_contents.mojom.GuestContentsHost_Attach_ParamsSpec,
      guest_contents.mojom.GuestContentsHost_Attach_ResponseParamsSpec,
      [frame_to_swap, guest_contents_id],
      false);
  }

};

guest_contents.mojom.GuestContentsHost.getRemote = function() {
  let remote = new guest_contents.mojom.GuestContentsHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'guest_contents.mojom.GuestContentsHost',
    'context');
  return remote.$;
};

guest_contents.mojom.GuestContentsHostReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('GuestContentsHost', [
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
             decoder.decodeStructInline(guest_contents.mojom.GuestContentsHost_Attach_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(guest_contents.mojom.GuestContentsHost_Attach_ParamsSpec.$.structSpec);
          const result = this.impl.attach(params.frame_to_swap, params.guest_contents_id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, guest_contents.mojom.GuestContentsHost_Attach_ResponseParamsSpec);
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

guest_contents.mojom.GuestContentsHostReceiver = guest_contents.mojom.GuestContentsHostReceiver;

guest_contents.mojom.GuestContentsHostPtr = guest_contents.mojom.GuestContentsHostRemote;
guest_contents.mojom.GuestContentsHostRequest = guest_contents.mojom.GuestContentsHostPendingReceiver;

