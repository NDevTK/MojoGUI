// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/service_worker/service_worker_installed_scripts_manager.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Struct: ServiceWorkerInstalledScriptsInfo
blink.mojom.ServiceWorkerInstalledScriptsInfoSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ServiceWorkerInstalledScriptsInfo',
      packedSize: 24,
      fields: [
        { name: 'manager_receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false, minVersion: 0 },
        { name: 'manager_host_remote', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
        { name: 'installed_urls', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(url.mojom.UrlSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: ServiceWorkerScriptInfo
blink.mojom.ServiceWorkerScriptInfoSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ServiceWorkerScriptInfo',
      packedSize: 64,
      fields: [
        { name: 'script_url', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'encoding', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'headers', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Map(mojo.internal.String, mojo.internal.String, false), nullable: false, minVersion: 0 },
        { name: 'body', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false, minVersion: 0 },
        { name: 'body_size', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
        { name: 'meta_data', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true, minVersion: 0 },
        { name: 'meta_data_size', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 64}]
    }
  }
};

// Interface: ServiceWorkerInstalledScriptsManagerHost
blink.mojom.ServiceWorkerInstalledScriptsManagerHost = {};

blink.mojom.ServiceWorkerInstalledScriptsManagerHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.ServiceWorkerInstalledScriptsManagerHostRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.ServiceWorkerInstalledScriptsManagerHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.ServiceWorkerInstalledScriptsManagerHostPendingReceiver,
      handle);
    this.$ = new blink.mojom.ServiceWorkerInstalledScriptsManagerHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.ServiceWorkerInstalledScriptsManagerHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  requestInstalledScript(script_url) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.ServiceWorkerInstalledScriptsManagerHost_RequestInstalledScript_ParamsSpec,
      null,
      [script_url]);
  }

};

blink.mojom.ServiceWorkerInstalledScriptsManagerHost.getRemote = function() {
  let remote = new blink.mojom.ServiceWorkerInstalledScriptsManagerHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.ServiceWorkerInstalledScriptsManagerHost',
    'context');
  return remote.$;
};

// ParamsSpec for RequestInstalledScript
blink.mojom.ServiceWorkerInstalledScriptsManagerHost_RequestInstalledScript_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ServiceWorkerInstalledScriptsManagerHost.RequestInstalledScript_Params',
      packedSize: 16,
      fields: [
        { name: 'script_url', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
blink.mojom.ServiceWorkerInstalledScriptsManagerHostPtr = blink.mojom.ServiceWorkerInstalledScriptsManagerHostRemote;
blink.mojom.ServiceWorkerInstalledScriptsManagerHostRequest = blink.mojom.ServiceWorkerInstalledScriptsManagerHostPendingReceiver;


// Interface: ServiceWorkerInstalledScriptsManager
blink.mojom.ServiceWorkerInstalledScriptsManager = {};

blink.mojom.ServiceWorkerInstalledScriptsManagerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.ServiceWorkerInstalledScriptsManagerRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.ServiceWorkerInstalledScriptsManager';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.ServiceWorkerInstalledScriptsManagerPendingReceiver,
      handle);
    this.$ = new blink.mojom.ServiceWorkerInstalledScriptsManagerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.ServiceWorkerInstalledScriptsManagerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  transferInstalledScript(script_info) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.ServiceWorkerInstalledScriptsManager_TransferInstalledScript_ParamsSpec,
      null,
      [script_info]);
  }

};

blink.mojom.ServiceWorkerInstalledScriptsManager.getRemote = function() {
  let remote = new blink.mojom.ServiceWorkerInstalledScriptsManagerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.ServiceWorkerInstalledScriptsManager',
    'context');
  return remote.$;
};

// ParamsSpec for TransferInstalledScript
blink.mojom.ServiceWorkerInstalledScriptsManager_TransferInstalledScript_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ServiceWorkerInstalledScriptsManager.TransferInstalledScript_Params',
      packedSize: 16,
      fields: [
        { name: 'script_info', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.ServiceWorkerScriptInfoSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
blink.mojom.ServiceWorkerInstalledScriptsManagerPtr = blink.mojom.ServiceWorkerInstalledScriptsManagerRemote;
blink.mojom.ServiceWorkerInstalledScriptsManagerRequest = blink.mojom.ServiceWorkerInstalledScriptsManagerPendingReceiver;

