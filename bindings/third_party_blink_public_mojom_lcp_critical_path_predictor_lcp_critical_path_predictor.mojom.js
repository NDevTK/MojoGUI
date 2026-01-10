// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/lcp_critical_path_predictor/lcp_critical_path_predictor.mojom
// Module: blink.mojom

'use strict';

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
};

blink.mojom.LCPCriticalPathPredictorHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onLcpUpdated(lcp_element) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.LCPCriticalPathPredictorHost_OnLcpUpdated_ParamsSpec,
      null,
      [lcp_element],
      false);
  }

  onLcpTimingPredictedForTesting(element_locator) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.LCPCriticalPathPredictorHost_OnLcpTimingPredictedForTesting_ParamsSpec,
      null,
      [element_locator],
      false);
  }

  setLcpInfluencerScriptUrls(lcp_influencer_scripts) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.LCPCriticalPathPredictorHost_SetLcpInfluencerScriptUrls_ParamsSpec,
      null,
      [lcp_influencer_scripts],
      false);
  }

  addPreconnectOrigin(origin) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      blink.mojom.LCPCriticalPathPredictorHost_AddPreconnectOrigin_ParamsSpec,
      null,
      [origin],
      false);
  }

  notifyFetchedFont(font_url, hit) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      blink.mojom.LCPCriticalPathPredictorHost_NotifyFetchedFont_ParamsSpec,
      null,
      [font_url, hit],
      false);
  }

  notifyFetchedSubresource(subresource_url, subresource_load_start, request_destination) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      blink.mojom.LCPCriticalPathPredictorHost_NotifyFetchedSubresource_ParamsSpec,
      null,
      [subresource_url, subresource_load_start, request_destination],
      false);
  }

  setUnusedPreloads(unused_preloads) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
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
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (message) => {
      console.log('[GeneratedReceiver] Message received', message);
      const header = message.header;
      if (!header) { console.warn('[GeneratedReceiver] No header'); return; }
      console.log('[GeneratedReceiver] Header ordinal:', header.ordinal);
      switch (header.ordinal) {
        case 0: {
          const params = blink.mojom.LCPCriticalPathPredictorHost_OnLcpUpdated_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onLcpUpdated(params.lcp_element);
          break;
        }
        case 1: {
          const params = blink.mojom.LCPCriticalPathPredictorHost_OnLcpTimingPredictedForTesting_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onLcpTimingPredictedForTesting(params.element_locator);
          break;
        }
        case 2: {
          const params = blink.mojom.LCPCriticalPathPredictorHost_SetLcpInfluencerScriptUrls_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setLcpInfluencerScriptUrls(params.lcp_influencer_scripts);
          break;
        }
        case 3: {
          const params = blink.mojom.LCPCriticalPathPredictorHost_AddPreconnectOrigin_ParamsSpec.$.decode(message.payload);
          const result = this.impl.addPreconnectOrigin(params.origin);
          break;
        }
        case 4: {
          const params = blink.mojom.LCPCriticalPathPredictorHost_NotifyFetchedFont_ParamsSpec.$.decode(message.payload);
          const result = this.impl.notifyFetchedFont(params.font_url, params.hit);
          break;
        }
        case 5: {
          const params = blink.mojom.LCPCriticalPathPredictorHost_NotifyFetchedSubresource_ParamsSpec.$.decode(message.payload);
          const result = this.impl.notifyFetchedSubresource(params.subresource_url, params.subresource_load_start, params.request_destination);
          break;
        }
        case 6: {
          const params = blink.mojom.LCPCriticalPathPredictorHost_SetUnusedPreloads_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setUnusedPreloads(params.unused_preloads);
          break;
        }
      }
    }});
  }
};

blink.mojom.LCPCriticalPathPredictorHostReceiver = blink.mojom.LCPCriticalPathPredictorHostReceiver;

blink.mojom.LCPCriticalPathPredictorHostPtr = blink.mojom.LCPCriticalPathPredictorHostRemote;
blink.mojom.LCPCriticalPathPredictorHostRequest = blink.mojom.LCPCriticalPathPredictorHostPendingReceiver;

