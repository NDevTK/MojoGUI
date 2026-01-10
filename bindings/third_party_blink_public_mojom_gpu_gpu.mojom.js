// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/gpu/gpu.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var url = url || {};


// Interface: GpuDataManager
blink.mojom.GpuDataManager = {};

blink.mojom.GpuDataManager_Are3DAPIsBlockedForUrl_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.GpuDataManager_Are3DAPIsBlockedForUrl_Params',
      packedSize: 16,
      fields: [
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

blink.mojom.GpuDataManagerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.GpuDataManagerRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.GpuDataManager';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.GpuDataManagerPendingReceiver,
      handle);
    this.$ = new blink.mojom.GpuDataManagerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.GpuDataManagerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  are3DAPIsBlockedForUrl(url) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.GpuDataManager_Are3DAPIsBlockedForUrl_ParamsSpec,
      blink.mojom.GpuDataManager_Are3DAPIsBlockedForUrl_ResponseParamsSpec,
      [url]);
  }

};

blink.mojom.GpuDataManager.getRemote = function() {
  let remote = new blink.mojom.GpuDataManagerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.GpuDataManager',
    'context');
  return remote.$;
};

// ParamsSpec for Are3DAPIsBlockedForUrl
blink.mojom.GpuDataManager_Are3DAPIsBlockedForUrl_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.GpuDataManager.Are3DAPIsBlockedForUrl_Params',
      packedSize: 16,
      fields: [
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

blink.mojom.GpuDataManager_Are3DAPIsBlockedForUrl_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.GpuDataManager.Are3DAPIsBlockedForUrl_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'blocked', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
blink.mojom.GpuDataManagerPtr = blink.mojom.GpuDataManagerRemote;
blink.mojom.GpuDataManagerRequest = blink.mojom.GpuDataManagerPendingReceiver;

