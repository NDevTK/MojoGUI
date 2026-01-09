// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/lcp_critical_path_predictor/lcp_critical_path_predictor.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Interface: LCPCriticalPathPredictorHost
blink.mojom.LCPCriticalPathPredictorHost = {};

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
      null,
      [lcp_element],
      undefined,
      undefined
    );
  }

  onLcpTimingPredictedForTesting(element_locator) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.LCPCriticalPathPredictorHost_OnLcpTimingPredictedForTesting_ParamsSpec,
      null,
      null,
      [element_locator],
      undefined,
      undefined
    );
  }

  setLcpInfluencerScriptUrls(lcp_influencer_scripts) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.LCPCriticalPathPredictorHost_SetLcpInfluencerScriptUrls_ParamsSpec,
      null,
      null,
      [lcp_influencer_scripts],
      undefined,
      undefined
    );
  }

  addPreconnectOrigin(origin) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      blink.mojom.LCPCriticalPathPredictorHost_AddPreconnectOrigin_ParamsSpec,
      null,
      null,
      [origin],
      undefined,
      undefined
    );
  }

  notifyFetchedFont(font_url, hit) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      blink.mojom.LCPCriticalPathPredictorHost_NotifyFetchedFont_ParamsSpec,
      null,
      null,
      [font_url, hit],
      undefined,
      undefined
    );
  }

  notifyFetchedSubresource(subresource_url, subresource_load_start, request_destination) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      blink.mojom.LCPCriticalPathPredictorHost_NotifyFetchedSubresource_ParamsSpec,
      null,
      null,
      [subresource_url, subresource_load_start, request_destination],
      undefined,
      undefined
    );
  }

  setUnusedPreloads(unused_preloads) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      blink.mojom.LCPCriticalPathPredictorHost_SetUnusedPreloads_ParamsSpec,
      null,
      null,
      [unused_preloads],
      undefined,
      undefined
    );
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

// ParamsSpec for OnLcpUpdated
blink.mojom.LCPCriticalPathPredictorHost_OnLcpUpdated_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.LCPCriticalPathPredictorHost.OnLcpUpdated_Params',
      packedSize: 16,
      fields: [
        { name: 'lcp_element', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnLcpTimingPredictedForTesting
blink.mojom.LCPCriticalPathPredictorHost_OnLcpTimingPredictedForTesting_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.LCPCriticalPathPredictorHost.OnLcpTimingPredictedForTesting_Params',
      packedSize: 16,
      fields: [
        { name: 'element_locator', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetLcpInfluencerScriptUrls
blink.mojom.LCPCriticalPathPredictorHost_SetLcpInfluencerScriptUrls_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.LCPCriticalPathPredictorHost.SetLcpInfluencerScriptUrls_Params',
      packedSize: 16,
      fields: [
        { name: 'lcp_influencer_scripts', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for AddPreconnectOrigin
blink.mojom.LCPCriticalPathPredictorHost_AddPreconnectOrigin_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.LCPCriticalPathPredictorHost.AddPreconnectOrigin_Params',
      packedSize: 16,
      fields: [
        { name: 'origin', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for NotifyFetchedFont
blink.mojom.LCPCriticalPathPredictorHost_NotifyFetchedFont_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.LCPCriticalPathPredictorHost.NotifyFetchedFont_Params',
      packedSize: 24,
      fields: [
        { name: 'font_url', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'hit', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for NotifyFetchedSubresource
blink.mojom.LCPCriticalPathPredictorHost_NotifyFetchedSubresource_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.LCPCriticalPathPredictorHost.NotifyFetchedSubresource_Params',
      packedSize: 32,
      fields: [
        { name: 'subresource_url', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'subresource_load_start', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'request_destination', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// ParamsSpec for SetUnusedPreloads
blink.mojom.LCPCriticalPathPredictorHost_SetUnusedPreloads_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.LCPCriticalPathPredictorHost.SetUnusedPreloads_Params',
      packedSize: 16,
      fields: [
        { name: 'unused_preloads', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
blink.mojom.LCPCriticalPathPredictorHostPtr = blink.mojom.LCPCriticalPathPredictorHostRemote;
blink.mojom.LCPCriticalPathPredictorHostRequest = blink.mojom.LCPCriticalPathPredictorHostPendingReceiver;

