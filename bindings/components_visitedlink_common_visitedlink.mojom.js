// Auto-generated MojoJS binding
// Source: chromium_src/components/visitedlink/common/visitedlink.mojom
// Module: visitedlink.mojom

'use strict';

// Module namespace
var visitedlink = visitedlink || {};
visitedlink.mojom = visitedlink.mojom || {};


// Interface: VisitedLinkNotificationSink
visitedlink.mojom.VisitedLinkNotificationSink = {};

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
};

visitedlink.mojom.VisitedLinkNotificationSinkRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  updateVisitedLinks(table_region) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      visitedlink.mojom.VisitedLinkNotificationSink_UpdateVisitedLinks_ParamsSpec,
      null,
      [table_region]);
  }

  addVisitedLinks(link_hashes) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      visitedlink.mojom.VisitedLinkNotificationSink_AddVisitedLinks_ParamsSpec,
      null,
      [link_hashes]);
  }

  resetVisitedLinks(invalidate_cached_hashes) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      visitedlink.mojom.VisitedLinkNotificationSink_ResetVisitedLinks_ParamsSpec,
      null,
      [invalidate_cached_hashes]);
  }

  updateOriginSalts(origin_salts) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      visitedlink.mojom.VisitedLinkNotificationSink_UpdateOriginSalts_ParamsSpec,
      null,
      [origin_salts]);
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

// ParamsSpec for UpdateVisitedLinks
visitedlink.mojom.VisitedLinkNotificationSink_UpdateVisitedLinks_ParamsSpec = {
  $: {
    structSpec: {
      name: 'visitedlink.mojom.VisitedLinkNotificationSink.UpdateVisitedLinks_Params',
      packedSize: 16,
      fields: [
        { name: 'table_region', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.ReadOnlySharedMemoryRegionSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for AddVisitedLinks
visitedlink.mojom.VisitedLinkNotificationSink_AddVisitedLinks_ParamsSpec = {
  $: {
    structSpec: {
      name: 'visitedlink.mojom.VisitedLinkNotificationSink.AddVisitedLinks_Params',
      packedSize: 16,
      fields: [
        { name: 'link_hashes', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint64, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ResetVisitedLinks
visitedlink.mojom.VisitedLinkNotificationSink_ResetVisitedLinks_ParamsSpec = {
  $: {
    structSpec: {
      name: 'visitedlink.mojom.VisitedLinkNotificationSink.ResetVisitedLinks_Params',
      packedSize: 16,
      fields: [
        { name: 'invalidate_cached_hashes', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for UpdateOriginSalts
visitedlink.mojom.VisitedLinkNotificationSink_UpdateOriginSalts_ParamsSpec = {
  $: {
    structSpec: {
      name: 'visitedlink.mojom.VisitedLinkNotificationSink.UpdateOriginSalts_Params',
      packedSize: 16,
      fields: [
        { name: 'origin_salts', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Map(url.mojom.OriginSpec, mojo.internal.Uint64, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
visitedlink.mojom.VisitedLinkNotificationSinkPtr = visitedlink.mojom.VisitedLinkNotificationSinkRemote;
visitedlink.mojom.VisitedLinkNotificationSinkRequest = visitedlink.mojom.VisitedLinkNotificationSinkPendingReceiver;

