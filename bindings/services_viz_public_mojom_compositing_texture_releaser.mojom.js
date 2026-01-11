// Auto-generated MojoJS binding
// Source: chromium_src/services/viz/public/mojom/compositing/texture_releaser.mojom
// Module: viz.mojom

// Module namespace
var viz = viz || {};
viz.mojom = viz.mojom || {};
var gpu = gpu || {};

viz.mojom.TextureReleaser = {};
viz.mojom.TextureReleaser.$interfaceName = 'viz.mojom.TextureReleaser';
viz.mojom.TextureReleaser_Release_ParamsSpec = { $: {} };

// Interface: TextureReleaser
mojo.internal.Struct(
    viz.mojom.TextureReleaser_Release_ParamsSpec, 'viz.mojom.TextureReleaser_Release_Params', [
      mojo.internal.StructField('sync_token', 0, 0, gpu.mojom.SyncTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('is_lost', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

viz.mojom.TextureReleaserPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

viz.mojom.TextureReleaserRemote = class {
  static get $interfaceName() {
    return 'viz.mojom.TextureReleaser';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      viz.mojom.TextureReleaserPendingReceiver,
      handle);
    this.$ = new viz.mojom.TextureReleaserRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  release(sync_token, is_lost) {
    return this.$.release(sync_token, is_lost);
  }
};

viz.mojom.TextureReleaserRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('TextureReleaser', [
      { explicit: null },
    ]);
  }

  release(sync_token, is_lost) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      viz.mojom.TextureReleaser_Release_ParamsSpec,
      null,
      [sync_token, is_lost],
      false);
  }

};

viz.mojom.TextureReleaser.getRemote = function() {
  let remote = new viz.mojom.TextureReleaserRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'viz.mojom.TextureReleaser',
    'context');
  return remote.$;
};

viz.mojom.TextureReleaserReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('TextureReleaser', [
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
             decoder.decodeStructInline(viz.mojom.TextureReleaser_Release_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(viz.mojom.TextureReleaser_Release_ParamsSpec.$.structSpec);
          const result = this.impl.release(params.sync_token, params.is_lost);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

viz.mojom.TextureReleaserReceiver = viz.mojom.TextureReleaserReceiver;

viz.mojom.TextureReleaserPtr = viz.mojom.TextureReleaserRemote;
viz.mojom.TextureReleaserRequest = viz.mojom.TextureReleaserPendingReceiver;

