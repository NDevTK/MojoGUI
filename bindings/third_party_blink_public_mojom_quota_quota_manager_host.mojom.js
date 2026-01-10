// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/quota/quota_manager_host.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var blink = blink || {};


// Interface: QuotaManagerHost
blink.mojom.mojom.QuotaManagerHost = {};

blink.mojom.mojom.QuotaManagerHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.mojom.QuotaManagerHostRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.QuotaManagerHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.mojom.QuotaManagerHostPendingReceiver,
      handle);
    this.$ = new blink.mojom.mojom.QuotaManagerHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.mojom.QuotaManagerHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  queryStorageUsageAndQuota() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.mojom.QuotaManagerHost_QueryStorageUsageAndQuota_ParamsSpec,
      blink.mojom.mojom.QuotaManagerHost_QueryStorageUsageAndQuota_ResponseParamsSpec,
      []);
  }

};

blink.mojom.mojom.QuotaManagerHost.getRemote = function() {
  let remote = new blink.mojom.mojom.QuotaManagerHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.QuotaManagerHost',
    'context');
  return remote.$;
};

// ParamsSpec for QueryStorageUsageAndQuota
blink.mojom.mojom.QuotaManagerHost_QueryStorageUsageAndQuota_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.QuotaManagerHost.QueryStorageUsageAndQuota_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

blink.mojom.mojom.QuotaManagerHost_QueryStorageUsageAndQuota_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.QuotaManagerHost.QueryStorageUsageAndQuota_ResponseParams',
      packedSize: 40,
      fields: [
        { name: 'error', packedOffset: 24, packedBitOffset: 0, type: blink.mojom.QuotaStatusCodeSpec, nullable: false, minVersion: 0 },
        { name: 'current_usage', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
        { name: 'current_quota', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
        { name: 'usage_breakdown', packedOffset: 16, packedBitOffset: 0, type: blink.mojom.UsageBreakdownSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Legacy compatibility
blink.mojom.mojom.QuotaManagerHostPtr = blink.mojom.mojom.QuotaManagerHostRemote;
blink.mojom.mojom.QuotaManagerHostRequest = blink.mojom.mojom.QuotaManagerHostPendingReceiver;

