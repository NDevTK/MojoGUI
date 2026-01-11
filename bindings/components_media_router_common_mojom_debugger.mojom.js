// Auto-generated MojoJS binding
// Source: chromium_src/components/media_router/common/mojom/debugger.mojom
// Module: media_router.mojom

// Module namespace
var media_router = media_router || {};
media_router.mojom = media_router.mojom || {};
var mojo_base = mojo_base || {};

media_router.mojom.Debugger = {};
media_router.mojom.Debugger.$interfaceName = 'media_router.mojom.Debugger';
media_router.mojom.Debugger_ShouldFetchMirroringStats_ParamsSpec = { $: {} };
media_router.mojom.Debugger_ShouldFetchMirroringStats_ResponseParamsSpec = { $: {} };
media_router.mojom.Debugger_OnMirroringStats_ParamsSpec = { $: {} };
media_router.mojom.Debugger_BindReceiver_ParamsSpec = { $: {} };

// Interface: Debugger
mojo.internal.Struct(
    media_router.mojom.Debugger_ShouldFetchMirroringStats_ParamsSpec, 'media_router.mojom.Debugger_ShouldFetchMirroringStats_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    media_router.mojom.Debugger_ShouldFetchMirroringStats_ResponseParamsSpec, 'media_router.mojom.Debugger_ShouldFetchMirroringStats_ResponseParams', [
      mojo.internal.StructField('should_fetch', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media_router.mojom.Debugger_OnMirroringStats_ParamsSpec, 'media_router.mojom.Debugger_OnMirroringStats_Params', [
      mojo.internal.StructField('json_stats', 0, 0, mojo_base.mojom.ValueSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media_router.mojom.Debugger_BindReceiver_ParamsSpec, 'media_router.mojom.Debugger_BindReceiver_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(media_router.mojom.DebuggerRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

media_router.mojom.DebuggerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media_router.mojom.DebuggerRemote = class {
  static get $interfaceName() {
    return 'media_router.mojom.Debugger';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media_router.mojom.DebuggerPendingReceiver,
      handle);
    this.$ = new media_router.mojom.DebuggerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  shouldFetchMirroringStats() {
    return this.$.shouldFetchMirroringStats();
  }
  onMirroringStats(json_stats) {
    return this.$.onMirroringStats(json_stats);
  }
  bindReceiver(receiver) {
    return this.$.bindReceiver(receiver);
  }
};

media_router.mojom.DebuggerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('Debugger', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  shouldFetchMirroringStats() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      media_router.mojom.Debugger_ShouldFetchMirroringStats_ParamsSpec,
      media_router.mojom.Debugger_ShouldFetchMirroringStats_ResponseParamsSpec,
      [],
      false);
  }

  onMirroringStats(json_stats) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      media_router.mojom.Debugger_OnMirroringStats_ParamsSpec,
      null,
      [json_stats],
      false);
  }

  bindReceiver(receiver) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      media_router.mojom.Debugger_BindReceiver_ParamsSpec,
      null,
      [receiver],
      false);
  }

};

media_router.mojom.Debugger.getRemote = function() {
  let remote = new media_router.mojom.DebuggerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media_router.mojom.Debugger',
    'context');
  return remote.$;
};

media_router.mojom.DebuggerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('Debugger', [
      { explicit: null },
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
             decoder.decodeStructInline(media_router.mojom.Debugger_ShouldFetchMirroringStats_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media_router.mojom.Debugger_OnMirroringStats_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media_router.mojom.Debugger_BindReceiver_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media_router.mojom.Debugger_ShouldFetchMirroringStats_ParamsSpec.$.structSpec);
          const result = this.impl.shouldFetchMirroringStats();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, media_router.mojom.Debugger_ShouldFetchMirroringStats_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media_router.mojom.Debugger_OnMirroringStats_ParamsSpec.$.structSpec);
          const result = this.impl.onMirroringStats(params.json_stats);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media_router.mojom.Debugger_BindReceiver_ParamsSpec.$.structSpec);
          const result = this.impl.bindReceiver(params.receiver);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

media_router.mojom.DebuggerReceiver = media_router.mojom.DebuggerReceiver;

media_router.mojom.DebuggerPtr = media_router.mojom.DebuggerRemote;
media_router.mojom.DebuggerRequest = media_router.mojom.DebuggerPendingReceiver;

