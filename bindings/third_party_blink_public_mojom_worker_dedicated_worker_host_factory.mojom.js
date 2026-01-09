// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/worker/dedicated_worker_host_factory.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Interface: DedicatedWorkerHostFactoryClient
blink.mojom.DedicatedWorkerHostFactoryClient = {};

blink.mojom.DedicatedWorkerHostFactoryClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.DedicatedWorkerHostFactoryClientRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.DedicatedWorkerHostFactoryClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.DedicatedWorkerHostFactoryClientPendingReceiver,
      handle);
    this.$ = new blink.mojom.DedicatedWorkerHostFactoryClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.DedicatedWorkerHostFactoryClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onWorkerHostCreated(browser_interface_broker, host, origin) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.DedicatedWorkerHostFactoryClient_OnWorkerHostCreated_ParamsSpec,
      null,
      [browser_interface_broker, host, origin]);
  }

  onScriptLoadStarted(service_worker_container_info, main_script_load_params, subresource_loader_factories, subresource_loader_updater, controller_info, back_forward_cache_controller_host, coep_reporting_observer_receiver, dip_reporting_observer_receiver) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.DedicatedWorkerHostFactoryClient_OnScriptLoadStarted_ParamsSpec,
      null,
      [service_worker_container_info, main_script_load_params, subresource_loader_factories, subresource_loader_updater, controller_info, back_forward_cache_controller_host, coep_reporting_observer_receiver, dip_reporting_observer_receiver]);
  }

  onScriptLoadStartFailed() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.DedicatedWorkerHostFactoryClient_OnScriptLoadStartFailed_ParamsSpec,
      null,
      []);
  }

};

blink.mojom.DedicatedWorkerHostFactoryClient.getRemote = function() {
  let remote = new blink.mojom.DedicatedWorkerHostFactoryClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.DedicatedWorkerHostFactoryClient',
    'context');
  return remote.$;
};

// ParamsSpec for OnWorkerHostCreated
blink.mojom.DedicatedWorkerHostFactoryClient_OnWorkerHostCreated_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.DedicatedWorkerHostFactoryClient.OnWorkerHostCreated_Params',
      packedSize: 32,
      fields: [
        { name: 'browser_interface_broker', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
        { name: 'host', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
        { name: 'origin', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnScriptLoadStarted
blink.mojom.DedicatedWorkerHostFactoryClient_OnScriptLoadStarted_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.DedicatedWorkerHostFactoryClient.OnScriptLoadStarted_Params',
      packedSize: 72,
      fields: [
        { name: 'service_worker_container_info', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
        { name: 'main_script_load_params', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'subresource_loader_factories', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'subresource_loader_updater', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
        { name: 'controller_info', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
        { name: 'back_forward_cache_controller_host', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
        { name: 'coep_reporting_observer_receiver', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: true },
        { name: 'dip_reporting_observer_receiver', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnScriptLoadStartFailed
blink.mojom.DedicatedWorkerHostFactoryClient_OnScriptLoadStartFailed_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.DedicatedWorkerHostFactoryClient.OnScriptLoadStartFailed_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
blink.mojom.DedicatedWorkerHostFactoryClientPtr = blink.mojom.DedicatedWorkerHostFactoryClientRemote;
blink.mojom.DedicatedWorkerHostFactoryClientRequest = blink.mojom.DedicatedWorkerHostFactoryClientPendingReceiver;


// Interface: DedicatedWorkerHostFactory
blink.mojom.DedicatedWorkerHostFactory = {};

blink.mojom.DedicatedWorkerHostFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.DedicatedWorkerHostFactoryRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.DedicatedWorkerHostFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.DedicatedWorkerHostFactoryPendingReceiver,
      handle);
    this.$ = new blink.mojom.DedicatedWorkerHostFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.DedicatedWorkerHostFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createWorkerHostAndStartScriptLoad(token, script_url, credentials_mode, outside_fetch_client_settings_object, blob_url_token, client, storage_access_api_status) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.DedicatedWorkerHostFactory_CreateWorkerHostAndStartScriptLoad_ParamsSpec,
      null,
      [token, script_url, credentials_mode, outside_fetch_client_settings_object, blob_url_token, client, storage_access_api_status]);
  }

};

blink.mojom.DedicatedWorkerHostFactory.getRemote = function() {
  let remote = new blink.mojom.DedicatedWorkerHostFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.DedicatedWorkerHostFactory',
    'context');
  return remote.$;
};

// ParamsSpec for CreateWorkerHostAndStartScriptLoad
blink.mojom.DedicatedWorkerHostFactory_CreateWorkerHostAndStartScriptLoad_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.DedicatedWorkerHostFactory.CreateWorkerHostAndStartScriptLoad_Params',
      packedSize: 64,
      fields: [
        { name: 'token', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'script_url', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'credentials_mode', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'outside_fetch_client_settings_object', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'blob_url_token', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: true },
        { name: 'client', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
        { name: 'storage_access_api_status', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
blink.mojom.DedicatedWorkerHostFactoryPtr = blink.mojom.DedicatedWorkerHostFactoryRemote;
blink.mojom.DedicatedWorkerHostFactoryRequest = blink.mojom.DedicatedWorkerHostFactoryPendingReceiver;

