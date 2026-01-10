// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/quota/quota_manager_host.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var blink = blink || {};

blink.mojom.QuotaManagerHost = {};
blink.mojom.QuotaManagerHost.$interfaceName = 'blink.mojom.QuotaManagerHost';
blink.mojom.QuotaManagerHost_QueryStorageUsageAndQuota_ParamsSpec = { $: {} };
blink.mojom.QuotaManagerHost_QueryStorageUsageAndQuota_ResponseParamsSpec = { $: {} };

// Interface: QuotaManagerHost
mojo.internal.Struct(
    blink.mojom.QuotaManagerHost_QueryStorageUsageAndQuota_ParamsSpec, 'blink.mojom.QuotaManagerHost_QueryStorageUsageAndQuota_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.QuotaManagerHost_QueryStorageUsageAndQuota_ResponseParamsSpec, 'blink.mojom.QuotaManagerHost_QueryStorageUsageAndQuota_ResponseParams', [
      mojo.internal.StructField('error', 24, 0, blink.mojom.QuotaStatusCodeSpec, null, false, 0, undefined),
      mojo.internal.StructField('current_usage', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('current_quota', 8, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('usage_breakdown', 16, 0, blink.mojom.UsageBreakdownSpec, null, false, 0, undefined),
    ],
    [[0, 40]]);

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
      []);
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

blink.mojom.QuotaManagerHostPtr = blink.mojom.QuotaManagerHostRemote;
blink.mojom.QuotaManagerHostRequest = blink.mojom.QuotaManagerHostPendingReceiver;

