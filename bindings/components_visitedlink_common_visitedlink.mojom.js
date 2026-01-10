// Auto-generated MojoJS binding
// Source: chromium_src/components/visitedlink/common/visitedlink.mojom
// Module: visitedlink.mojom

'use strict';

// Module namespace
var visitedlink = visitedlink || {};
visitedlink.mojom = visitedlink.mojom || {};
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
      [table_region],
      false);
  }

  addVisitedLinks(link_hashes) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      visitedlink.mojom.VisitedLinkNotificationSink_AddVisitedLinks_ParamsSpec,
      null,
      [link_hashes],
      false);
  }

  resetVisitedLinks(invalidate_cached_hashes) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      visitedlink.mojom.VisitedLinkNotificationSink_ResetVisitedLinks_ParamsSpec,
      null,
      [invalidate_cached_hashes],
      false);
  }

  updateOriginSalts(origin_salts) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
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

visitedlink.mojom.VisitedLinkNotificationSinkPtr = visitedlink.mojom.VisitedLinkNotificationSinkRemote;
visitedlink.mojom.VisitedLinkNotificationSinkRequest = visitedlink.mojom.VisitedLinkNotificationSinkPendingReceiver;

