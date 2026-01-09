// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/quota/quota_manager_host.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Interface: QuotaManagerHost
blink.mojom.QuotaManagerHost = {};

blink.mojom.QuotaManagerHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.QuotaManagerHostRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.QuotaManagerHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.QuotaManagerHostPendingReceiver,
      handle);
    this.$ = new blink.mojom.QuotaManagerHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.QuotaManagerHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  queryStorageUsageAndQuota() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.QuotaManagerHost_QueryStorageUsageAndQuota_ParamsSpec,
      blink.mojom.QuotaManagerHost_QueryStorageUsageAndQuota_ResponseParamsSpec,
      blink.mojom.QuotaManagerHost_QueryStorageUsageAndQuota_ResponseParamsSpec,
      [],
      undefined,
      undefined
    );
  }

};

blink.mojom.QuotaManagerHost.getRemote = function() {
  let remote = new blink.mojom.QuotaManagerHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.QuotaManagerHost',
    'context');
  return remote.$;
};

// ParamsSpec for QueryStorageUsageAndQuota
blink.mojom.QuotaManagerHost_QueryStorageUsageAndQuota_ParamsSpec = {
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

blink.mojom.QuotaManagerHost_QueryStorageUsageAndQuota_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.QuotaManagerHost.QueryStorageUsageAndQuota_ResponseParams',
      packedSize: 40,
      fields: [
        { name: 'error', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'current_usage', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false },
        { name: 'current_quota', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false },
        { name: 'usage_breakdown', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Legacy compatibility
blink.mojom.QuotaManagerHostPtr = blink.mojom.QuotaManagerHostRemote;
blink.mojom.QuotaManagerHostRequest = blink.mojom.QuotaManagerHostPendingReceiver;

