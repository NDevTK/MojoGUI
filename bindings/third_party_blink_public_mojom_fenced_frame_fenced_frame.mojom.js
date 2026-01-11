// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/fenced_frame/fenced_frame.mojom
// Module: blink.mojom

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var mojo_base = mojo_base || {};
var url = url || {};

blink.mojom.FencedFrameOwnerHost = {};
blink.mojom.FencedFrameOwnerHost.$interfaceName = 'blink.mojom.FencedFrameOwnerHost';
blink.mojom.FencedFrameOwnerHost_Navigate_ParamsSpec = { $: {} };
blink.mojom.FencedFrameOwnerHost_DidChangeFramePolicy_ParamsSpec = { $: {} };

// Interface: FencedFrameOwnerHost
mojo.internal.Struct(
    blink.mojom.FencedFrameOwnerHost_Navigate_ParamsSpec, 'blink.mojom.FencedFrameOwnerHost_Navigate_Params', [
      mojo.internal.StructField('url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('navigation_start_time', 8, 0, mojo_base.mojom.TimeTicksSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('embedder_shared_storage_context', 16, 0, mojo_base.mojom.String16Spec.$, null, true, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    blink.mojom.FencedFrameOwnerHost_DidChangeFramePolicy_ParamsSpec, 'blink.mojom.FencedFrameOwnerHost_DidChangeFramePolicy_Params', [
      mojo.internal.StructField('frame_policy', 0, 0, blink.mojom.FramePolicySpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

blink.mojom.FencedFrameOwnerHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.FencedFrameOwnerHostRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.FencedFrameOwnerHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.FencedFrameOwnerHostPendingReceiver,
      handle);
    this.$ = new blink.mojom.FencedFrameOwnerHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  navigate(url, navigation_start_time, embedder_shared_storage_context) {
    return this.$.navigate(url, navigation_start_time, embedder_shared_storage_context);
  }
  didChangeFramePolicy(frame_policy) {
    return this.$.didChangeFramePolicy(frame_policy);
  }
};

blink.mojom.FencedFrameOwnerHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('FencedFrameOwnerHost', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  navigate(url, navigation_start_time, embedder_shared_storage_context) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      blink.mojom.FencedFrameOwnerHost_Navigate_ParamsSpec,
      null,
      [url, navigation_start_time, embedder_shared_storage_context],
      false);
  }

  didChangeFramePolicy(frame_policy) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      blink.mojom.FencedFrameOwnerHost_DidChangeFramePolicy_ParamsSpec,
      null,
      [frame_policy],
      false);
  }

};

blink.mojom.FencedFrameOwnerHost.getRemote = function() {
  let remote = new blink.mojom.FencedFrameOwnerHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.FencedFrameOwnerHost',
    'context');
  return remote.$;
};

blink.mojom.FencedFrameOwnerHostReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('FencedFrameOwnerHost', [
      { explicit: null },
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
             decoder.decodeStructInline(blink.mojom.FencedFrameOwnerHost_Navigate_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.FencedFrameOwnerHost_DidChangeFramePolicy_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.FencedFrameOwnerHost_Navigate_ParamsSpec.$.structSpec);
          const result = this.impl.navigate(params.url, params.navigation_start_time, params.embedder_shared_storage_context);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.FencedFrameOwnerHost_DidChangeFramePolicy_ParamsSpec.$.structSpec);
          const result = this.impl.didChangeFramePolicy(params.frame_policy);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

blink.mojom.FencedFrameOwnerHostReceiver = blink.mojom.FencedFrameOwnerHostReceiver;

blink.mojom.FencedFrameOwnerHostPtr = blink.mojom.FencedFrameOwnerHostRemote;
blink.mojom.FencedFrameOwnerHostRequest = blink.mojom.FencedFrameOwnerHostPendingReceiver;

