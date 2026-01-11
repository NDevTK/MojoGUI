// Auto-generated MojoJS binding
// Source: chromium_src/components/visitedlink/common/visitedlink.mojom
// Module: visitedlink.mojom

// Module namespace
var visitedlink = visitedlink || {};
visitedlink.mojom = visitedlink.mojom || {};
var mojo_base = mojo_base || {};
var url = url || {};

visitedlink.mojom.VisitedLinkNotificationSink = {};
visitedlink.mojom.VisitedLinkNotificationSink.$interfaceName = 'visitedlink.mojom.VisitedLinkNotificationSink';
visitedlink.mojom.VisitedLinkNotificationSink_UpdateVisitedLinks_ParamsSpec = { $: {} };
visitedlink.mojom.VisitedLinkNotificationSink_AddVisitedLinks_ParamsSpec = { $: {} };
visitedlink.mojom.VisitedLinkNotificationSink_ResetVisitedLinks_ParamsSpec = { $: {} };
visitedlink.mojom.VisitedLinkNotificationSink_UpdateOriginSalts_ParamsSpec = { $: {} };

// Interface: VisitedLinkNotificationSink
mojo.internal.Struct(
    visitedlink.mojom.VisitedLinkNotificationSink_UpdateVisitedLinks_ParamsSpec, 'visitedlink.mojom.VisitedLinkNotificationSink_UpdateVisitedLinks_Params', [
      mojo.internal.StructField('table_region', 0, 0, mojo_base.mojom.ReadOnlySharedMemoryRegionSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    visitedlink.mojom.VisitedLinkNotificationSink_AddVisitedLinks_ParamsSpec, 'visitedlink.mojom.VisitedLinkNotificationSink_AddVisitedLinks_Params', [
      mojo.internal.StructField('link_hashes', 0, 0, mojo.internal.Array(mojo.internal.Uint64, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    visitedlink.mojom.VisitedLinkNotificationSink_ResetVisitedLinks_ParamsSpec, 'visitedlink.mojom.VisitedLinkNotificationSink_ResetVisitedLinks_Params', [
      mojo.internal.StructField('invalidate_cached_hashes', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    visitedlink.mojom.VisitedLinkNotificationSink_UpdateOriginSalts_ParamsSpec, 'visitedlink.mojom.VisitedLinkNotificationSink_UpdateOriginSalts_Params', [
      mojo.internal.StructField('origin_salts', 0, 0, mojo.internal.Map(url.mojom.OriginSpec.$, mojo.internal.Uint64, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

visitedlink.mojom.VisitedLinkNotificationSinkPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

visitedlink.mojom.VisitedLinkNotificationSinkRemote = class {
  static get $interfaceName() {
    return 'visitedlink.mojom.VisitedLinkNotificationSink';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      visitedlink.mojom.VisitedLinkNotificationSinkPendingReceiver,
      handle);
    this.$ = new visitedlink.mojom.VisitedLinkNotificationSinkRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  updateVisitedLinks(table_region) {
    return this.$.updateVisitedLinks(table_region);
  }
  addVisitedLinks(link_hashes) {
    return this.$.addVisitedLinks(link_hashes);
  }
  resetVisitedLinks(invalidate_cached_hashes) {
    return this.$.resetVisitedLinks(invalidate_cached_hashes);
  }
  updateOriginSalts(origin_salts) {
    return this.$.updateOriginSalts(origin_salts);
  }
};

visitedlink.mojom.VisitedLinkNotificationSinkRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('VisitedLinkNotificationSink', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  updateVisitedLinks(table_region) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      visitedlink.mojom.VisitedLinkNotificationSink_UpdateVisitedLinks_ParamsSpec,
      null,
      [table_region],
      false);
  }

  addVisitedLinks(link_hashes) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      visitedlink.mojom.VisitedLinkNotificationSink_AddVisitedLinks_ParamsSpec,
      null,
      [link_hashes],
      false);
  }

  resetVisitedLinks(invalidate_cached_hashes) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      visitedlink.mojom.VisitedLinkNotificationSink_ResetVisitedLinks_ParamsSpec,
      null,
      [invalidate_cached_hashes],
      false);
  }

  updateOriginSalts(origin_salts) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      visitedlink.mojom.VisitedLinkNotificationSink_UpdateOriginSalts_ParamsSpec,
      null,
      [origin_salts],
      false);
  }

};

visitedlink.mojom.VisitedLinkNotificationSink.getRemote = function() {
  let remote = new visitedlink.mojom.VisitedLinkNotificationSinkRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'visitedlink.mojom.VisitedLinkNotificationSink',
    'context');
  return remote.$;
};

visitedlink.mojom.VisitedLinkNotificationSinkReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('VisitedLinkNotificationSink', [
      { explicit: null },
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
             decoder.decodeStructInline(visitedlink.mojom.VisitedLinkNotificationSink_UpdateVisitedLinks_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(visitedlink.mojom.VisitedLinkNotificationSink_AddVisitedLinks_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(visitedlink.mojom.VisitedLinkNotificationSink_ResetVisitedLinks_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(visitedlink.mojom.VisitedLinkNotificationSink_UpdateOriginSalts_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(visitedlink.mojom.VisitedLinkNotificationSink_UpdateVisitedLinks_ParamsSpec.$.structSpec);
          const result = this.impl.updateVisitedLinks(params.table_region);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(visitedlink.mojom.VisitedLinkNotificationSink_AddVisitedLinks_ParamsSpec.$.structSpec);
          const result = this.impl.addVisitedLinks(params.link_hashes);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(visitedlink.mojom.VisitedLinkNotificationSink_ResetVisitedLinks_ParamsSpec.$.structSpec);
          const result = this.impl.resetVisitedLinks(params.invalidate_cached_hashes);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(visitedlink.mojom.VisitedLinkNotificationSink_UpdateOriginSalts_ParamsSpec.$.structSpec);
          const result = this.impl.updateOriginSalts(params.origin_salts);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

visitedlink.mojom.VisitedLinkNotificationSinkReceiver = visitedlink.mojom.VisitedLinkNotificationSinkReceiver;

visitedlink.mojom.VisitedLinkNotificationSinkPtr = visitedlink.mojom.VisitedLinkNotificationSinkRemote;
visitedlink.mojom.VisitedLinkNotificationSinkRequest = visitedlink.mojom.VisitedLinkNotificationSinkPendingReceiver;

