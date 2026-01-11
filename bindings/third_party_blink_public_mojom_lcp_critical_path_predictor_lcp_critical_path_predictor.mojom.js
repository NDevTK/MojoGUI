// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/lcp_critical_path_predictor/lcp_critical_path_predictor.mojom
// Module: blink.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var mojo_base = mojo_base || {};
var network = network || {};
var url = url || {};

blink.mojom.LcpElementSpec = { $: {} };
blink.mojom.LCPCriticalPathPredictorNavigationTimeHintSpec = { $: {} };
blink.mojom.LCPCriticalPathPredictorHost = {};
blink.mojom.LCPCriticalPathPredictorHost.$interfaceName = 'blink.mojom.LCPCriticalPathPredictorHost';
blink.mojom.LCPCriticalPathPredictorHost_OnLcpUpdated_ParamsSpec = { $: {} };
blink.mojom.LCPCriticalPathPredictorHost_OnLcpTimingPredictedForTesting_ParamsSpec = { $: {} };
blink.mojom.LCPCriticalPathPredictorHost_SetLcpInfluencerScriptUrls_ParamsSpec = { $: {} };
blink.mojom.LCPCriticalPathPredictorHost_AddPreconnectOrigin_ParamsSpec = { $: {} };
blink.mojom.LCPCriticalPathPredictorHost_NotifyFetchedFont_ParamsSpec = { $: {} };
blink.mojom.LCPCriticalPathPredictorHost_NotifyFetchedSubresource_ParamsSpec = { $: {} };
blink.mojom.LCPCriticalPathPredictorHost_SetUnusedPreloads_ParamsSpec = { $: {} };

// Struct: LcpElement
mojo.internal.Struct(
    blink.mojom.LcpElementSpec, 'blink.mojom.LcpElement', [
      mojo.internal.StructField('locator', 0, 0, mojo_base.mojom.ByteStringSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('predicted_index_$value', 8, 0, mojo.internal.Uint32, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'predicted_index_$flag', originalFieldName: 'predicted_index' }),
      mojo.internal.StructField('is_image', 12, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('predicted_index_$flag', 12, 1, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'predicted_index_$value', originalFieldName: 'predicted_index' }),
    ],
    [[0, 24]]);

// Struct: LCPCriticalPathPredictorNavigationTimeHint
mojo.internal.Struct(
    blink.mojom.LCPCriticalPathPredictorNavigationTimeHintSpec, 'blink.mojom.LCPCriticalPathPredictorNavigationTimeHint', [
      mojo.internal.StructField('lcp_element_locators', 0, 0, mojo.internal.Array(mojo_base.mojom.ByteStringSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('lcp_element_locators_all', 8, 0, mojo.internal.Array(mojo_base.mojom.ByteStringSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('lcp_influencer_scripts', 16, 0, mojo.internal.Array(url.mojom.UrlSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('fetched_fonts', 24, 0, mojo.internal.Array(url.mojom.UrlSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('preconnect_origins', 32, 0, mojo.internal.Array(url.mojom.OriginSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('unused_preloads', 40, 0, mojo.internal.Array(url.mojom.UrlSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('for_testing', 48, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 64]]);

// Interface: LCPCriticalPathPredictorHost
mojo.internal.Struct(
    blink.mojom.LCPCriticalPathPredictorHost_OnLcpUpdated_ParamsSpec, 'blink.mojom.LCPCriticalPathPredictorHost_OnLcpUpdated_Params', [
      mojo.internal.StructField('lcp_element', 0, 0, blink.mojom.LcpElementSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.LCPCriticalPathPredictorHost_OnLcpTimingPredictedForTesting_ParamsSpec, 'blink.mojom.LCPCriticalPathPredictorHost_OnLcpTimingPredictedForTesting_Params', [
      mojo.internal.StructField('element_locator', 0, 0, mojo_base.mojom.ByteStringSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.LCPCriticalPathPredictorHost_SetLcpInfluencerScriptUrls_ParamsSpec, 'blink.mojom.LCPCriticalPathPredictorHost_SetLcpInfluencerScriptUrls_Params', [
      mojo.internal.StructField('lcp_influencer_scripts', 0, 0, mojo.internal.Array(url.mojom.UrlSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.LCPCriticalPathPredictorHost_AddPreconnectOrigin_ParamsSpec, 'blink.mojom.LCPCriticalPathPredictorHost_AddPreconnectOrigin_Params', [
      mojo.internal.StructField('origin', 0, 0, url.mojom.OriginSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.LCPCriticalPathPredictorHost_NotifyFetchedFont_ParamsSpec, 'blink.mojom.LCPCriticalPathPredictorHost_NotifyFetchedFont_Params', [
      mojo.internal.StructField('font_url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('hit', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.LCPCriticalPathPredictorHost_NotifyFetchedSubresource_ParamsSpec, 'blink.mojom.LCPCriticalPathPredictorHost_NotifyFetchedSubresource_Params', [
      mojo.internal.StructField('subresource_url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('subresource_load_start', 8, 0, mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('request_destination', 16, 0, network.mojom.RequestDestinationSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    blink.mojom.LCPCriticalPathPredictorHost_SetUnusedPreloads_ParamsSpec, 'blink.mojom.LCPCriticalPathPredictorHost_SetUnusedPreloads_Params', [
      mojo.internal.StructField('unused_preloads', 0, 0, mojo.internal.Array(url.mojom.UrlSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

blink.mojom.LCPCriticalPathPredictorHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.LCPCriticalPathPredictorHostRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.LCPCriticalPathPredictorHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.LCPCriticalPathPredictorHostPendingReceiver,
      handle);
    this.$ = new blink.mojom.LCPCriticalPathPredictorHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onLcpUpdated(lcp_element) {
    return this.$.onLcpUpdated(lcp_element);
  }
  onLcpTimingPredictedForTesting(element_locator) {
    return this.$.onLcpTimingPredictedForTesting(element_locator);
  }
  setLcpInfluencerScriptUrls(lcp_influencer_scripts) {
    return this.$.setLcpInfluencerScriptUrls(lcp_influencer_scripts);
  }
  addPreconnectOrigin(origin) {
    return this.$.addPreconnectOrigin(origin);
  }
  notifyFetchedFont(font_url, hit) {
    return this.$.notifyFetchedFont(font_url, hit);
  }
  notifyFetchedSubresource(subresource_url, subresource_load_start, request_destination) {
    return this.$.notifyFetchedSubresource(subresource_url, subresource_load_start, request_destination);
  }
  setUnusedPreloads(unused_preloads) {
    return this.$.setUnusedPreloads(unused_preloads);
  }
};

blink.mojom.LCPCriticalPathPredictorHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('LCPCriticalPathPredictorHost', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  onLcpUpdated(lcp_element) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      blink.mojom.LCPCriticalPathPredictorHost_OnLcpUpdated_ParamsSpec,
      null,
      [lcp_element],
      false);
  }

  onLcpTimingPredictedForTesting(element_locator) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      blink.mojom.LCPCriticalPathPredictorHost_OnLcpTimingPredictedForTesting_ParamsSpec,
      null,
      [element_locator],
      false);
  }

  setLcpInfluencerScriptUrls(lcp_influencer_scripts) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      blink.mojom.LCPCriticalPathPredictorHost_SetLcpInfluencerScriptUrls_ParamsSpec,
      null,
      [lcp_influencer_scripts],
      false);
  }

  addPreconnectOrigin(origin) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      blink.mojom.LCPCriticalPathPredictorHost_AddPreconnectOrigin_ParamsSpec,
      null,
      [origin],
      false);
  }

  notifyFetchedFont(font_url, hit) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      blink.mojom.LCPCriticalPathPredictorHost_NotifyFetchedFont_ParamsSpec,
      null,
      [font_url, hit],
      false);
  }

  notifyFetchedSubresource(subresource_url, subresource_load_start, request_destination) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      blink.mojom.LCPCriticalPathPredictorHost_NotifyFetchedSubresource_ParamsSpec,
      null,
      [subresource_url, subresource_load_start, request_destination],
      false);
  }

  setUnusedPreloads(unused_preloads) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      blink.mojom.LCPCriticalPathPredictorHost_SetUnusedPreloads_ParamsSpec,
      null,
      [unused_preloads],
      false);
  }

};

blink.mojom.LCPCriticalPathPredictorHost.getRemote = function() {
  let remote = new blink.mojom.LCPCriticalPathPredictorHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.LCPCriticalPathPredictorHost',
    'context');
  return remote.$;
};

blink.mojom.LCPCriticalPathPredictorHostReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('LCPCriticalPathPredictorHost', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
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
             decoder.decodeStructInline(blink.mojom.LCPCriticalPathPredictorHost_OnLcpUpdated_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.LCPCriticalPathPredictorHost_OnLcpTimingPredictedForTesting_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.LCPCriticalPathPredictorHost_SetLcpInfluencerScriptUrls_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.LCPCriticalPathPredictorHost_AddPreconnectOrigin_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.LCPCriticalPathPredictorHost_NotifyFetchedFont_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.LCPCriticalPathPredictorHost_NotifyFetchedSubresource_ParamsSpec);
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.LCPCriticalPathPredictorHost_SetUnusedPreloads_ParamsSpec);
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.LCPCriticalPathPredictorHost_OnLcpUpdated_ParamsSpec.$.structSpec);
          const result = this.impl.onLcpUpdated(params.lcp_element);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.LCPCriticalPathPredictorHost_OnLcpTimingPredictedForTesting_ParamsSpec.$.structSpec);
          const result = this.impl.onLcpTimingPredictedForTesting(params.element_locator);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.LCPCriticalPathPredictorHost_SetLcpInfluencerScriptUrls_ParamsSpec.$.structSpec);
          const result = this.impl.setLcpInfluencerScriptUrls(params.lcp_influencer_scripts);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.LCPCriticalPathPredictorHost_AddPreconnectOrigin_ParamsSpec.$.structSpec);
          const result = this.impl.addPreconnectOrigin(params.origin);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.LCPCriticalPathPredictorHost_NotifyFetchedFont_ParamsSpec.$.structSpec);
          const result = this.impl.notifyFetchedFont(params.font_url, params.hit);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.LCPCriticalPathPredictorHost_NotifyFetchedSubresource_ParamsSpec.$.structSpec);
          const result = this.impl.notifyFetchedSubresource(params.subresource_url, params.subresource_load_start, params.request_destination);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.LCPCriticalPathPredictorHost_SetUnusedPreloads_ParamsSpec.$.structSpec);
          const result = this.impl.setUnusedPreloads(params.unused_preloads);
          break;
        }
      }
      } catch (err) {}
    });
  }
};

blink.mojom.LCPCriticalPathPredictorHostReceiver = blink.mojom.LCPCriticalPathPredictorHostReceiver;

blink.mojom.LCPCriticalPathPredictorHostPtr = blink.mojom.LCPCriticalPathPredictorHostRemote;
blink.mojom.LCPCriticalPathPredictorHostRequest = blink.mojom.LCPCriticalPathPredictorHostPendingReceiver;

