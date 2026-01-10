// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/worker/worker_content_settings_proxy.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Interface: WorkerContentSettingsProxy
blink.mojom.WorkerContentSettingsProxy = {};

blink.mojom.WorkerContentSettingsProxyPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.WorkerContentSettingsProxyRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.WorkerContentSettingsProxy';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.WorkerContentSettingsProxyPendingReceiver,
      handle);
    this.$ = new blink.mojom.WorkerContentSettingsProxyRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.WorkerContentSettingsProxyRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  allowIndexedDB() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.WorkerContentSettingsProxy_AllowIndexedDB_ParamsSpec,
      blink.mojom.WorkerContentSettingsProxy_AllowIndexedDB_ResponseParamsSpec,
      []);
  }

  allowCacheStorage() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.WorkerContentSettingsProxy_AllowCacheStorage_ParamsSpec,
      blink.mojom.WorkerContentSettingsProxy_AllowCacheStorage_ResponseParamsSpec,
      []);
  }

  allowWebLocks() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.WorkerContentSettingsProxy_AllowWebLocks_ParamsSpec,
      blink.mojom.WorkerContentSettingsProxy_AllowWebLocks_ResponseParamsSpec,
      []);
  }

  requestFileSystemAccessSync() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      blink.mojom.WorkerContentSettingsProxy_RequestFileSystemAccessSync_ParamsSpec,
      blink.mojom.WorkerContentSettingsProxy_RequestFileSystemAccessSync_ResponseParamsSpec,
      []);
  }

};

blink.mojom.WorkerContentSettingsProxy.getRemote = function() {
  let remote = new blink.mojom.WorkerContentSettingsProxyRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.WorkerContentSettingsProxy',
    'context');
  return remote.$;
};

// ParamsSpec for AllowIndexedDB
blink.mojom.WorkerContentSettingsProxy_AllowIndexedDB_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.WorkerContentSettingsProxy.AllowIndexedDB_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

blink.mojom.WorkerContentSettingsProxy_AllowIndexedDB_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for AllowCacheStorage
blink.mojom.WorkerContentSettingsProxy_AllowCacheStorage_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.WorkerContentSettingsProxy.AllowCacheStorage_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

blink.mojom.WorkerContentSettingsProxy_AllowCacheStorage_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for AllowWebLocks
blink.mojom.WorkerContentSettingsProxy_AllowWebLocks_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.WorkerContentSettingsProxy.AllowWebLocks_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

blink.mojom.WorkerContentSettingsProxy_AllowWebLocks_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for RequestFileSystemAccessSync
blink.mojom.WorkerContentSettingsProxy_RequestFileSystemAccessSync_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.WorkerContentSettingsProxy.RequestFileSystemAccessSync_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

blink.mojom.WorkerContentSettingsProxy_RequestFileSystemAccessSync_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
blink.mojom.WorkerContentSettingsProxyPtr = blink.mojom.WorkerContentSettingsProxyRemote;
blink.mojom.WorkerContentSettingsProxyRequest = blink.mojom.WorkerContentSettingsProxyPendingReceiver;

