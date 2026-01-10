// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/worker/dedicated_worker_host_factory.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var blink = blink || {};
var blink = blink || {};
var blink = blink || {};
var blink = blink || {};
var blink = blink || {};
var blink = blink || {};
var blink = blink || {};
var blink = blink || {};
var blink = blink || {};
var blink = blink || {};
var blink = blink || {};
var blink = blink || {};
var url = url || {};
var url = url || {};


blink.mojom.mojom.kNavigation_DedicatedWorkerSpec = "navigation:dedicated_worker";

// Interface: DedicatedWorkerHostFactoryClient
blink.mojom.mojom.DedicatedWorkerHostFactoryClient = {};

blink.mojom.mojom.DedicatedWorkerHostFactoryClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.mojom.DedicatedWorkerHostFactoryClientRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.DedicatedWorkerHostFactoryClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.mojom.DedicatedWorkerHostFactoryClientPendingReceiver,
      handle);
    this.$ = new blink.mojom.mojom.DedicatedWorkerHostFactoryClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.mojom.DedicatedWorkerHostFactoryClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onWorkerHostCreated(browser_interface_broker, host, origin) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.mojom.DedicatedWorkerHostFactoryClient_OnWorkerHostCreated_ParamsSpec,
      null,
      [browser_interface_broker, host, origin]);
  }

  onScriptLoadStarted(service_worker_container_info, main_script_load_params, subresource_loader_factories, subresource_loader_updater, controller_info, back_forward_cache_controller_host, coep_reporting_observer_receiver, dip_reporting_observer_receiver) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.mojom.DedicatedWorkerHostFactoryClient_OnScriptLoadStarted_ParamsSpec,
      null,
      [service_worker_container_info, main_script_load_params, subresource_loader_factories, subresource_loader_updater, controller_info, back_forward_cache_controller_host, coep_reporting_observer_receiver, dip_reporting_observer_receiver]);
  }

  onScriptLoadStartFailed() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.mojom.DedicatedWorkerHostFactoryClient_OnScriptLoadStartFailed_ParamsSpec,
      null,
      []);
  }

};

blink.mojom.mojom.DedicatedWorkerHostFactoryClient.getRemote = function() {
  let remote = new blink.mojom.mojom.DedicatedWorkerHostFactoryClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.DedicatedWorkerHostFactoryClient',
    'context');
  return remote.$;
};

// ParamsSpec for OnWorkerHostCreated
blink.mojom.mojom.DedicatedWorkerHostFactoryClient_OnWorkerHostCreated_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.DedicatedWorkerHostFactoryClient.OnWorkerHostCreated_Params',
      packedSize: 32,
      fields: [
        { name: 'browser_interface_broker', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(blink.mojom.BrowserInterfaceBrokerRemote), nullable: false, minVersion: 0 },
        { name: 'host', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(blink.mojom.DedicatedWorkerHostRemote), nullable: false, minVersion: 0 },
        { name: 'origin', packedOffset: 16, packedBitOffset: 0, type: url.mojom.OriginSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// ParamsSpec for OnScriptLoadStarted
blink.mojom.mojom.DedicatedWorkerHostFactoryClient_OnScriptLoadStarted_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.DedicatedWorkerHostFactoryClient.OnScriptLoadStarted_Params',
      packedSize: 72,
      fields: [
        { name: 'service_worker_container_info', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.ServiceWorkerContainerInfoForClientSpec, nullable: true, minVersion: 0 },
        { name: 'main_script_load_params', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.WorkerMainScriptLoadParamsSpec, nullable: false, minVersion: 0 },
        { name: 'subresource_loader_factories', packedOffset: 16, packedBitOffset: 0, type: blink.mojom.URLLoaderFactoryBundleSpec, nullable: false, minVersion: 0 },
        { name: 'subresource_loader_updater', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(blink.mojom.SubresourceLoaderUpdaterRemote), nullable: false, minVersion: 0 },
        { name: 'controller_info', packedOffset: 32, packedBitOffset: 0, type: blink.mojom.ControllerServiceWorkerInfoSpec, nullable: true, minVersion: 0 },
        { name: 'back_forward_cache_controller_host', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(blink.mojom.BackForwardCacheControllerHostRemote), nullable: false, minVersion: 0 },
        { name: 'coep_reporting_observer_receiver', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(blink.mojom.ReportingObserverRemote), nullable: true, minVersion: 0 },
        { name: 'dip_reporting_observer_receiver', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(blink.mojom.ReportingObserverRemote), nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 72}]
    }
  }
};

// ParamsSpec for OnScriptLoadStartFailed
blink.mojom.mojom.DedicatedWorkerHostFactoryClient_OnScriptLoadStartFailed_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.DedicatedWorkerHostFactoryClient.OnScriptLoadStartFailed_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Legacy compatibility
blink.mojom.mojom.DedicatedWorkerHostFactoryClientPtr = blink.mojom.mojom.DedicatedWorkerHostFactoryClientRemote;
blink.mojom.mojom.DedicatedWorkerHostFactoryClientRequest = blink.mojom.mojom.DedicatedWorkerHostFactoryClientPendingReceiver;


// Interface: DedicatedWorkerHostFactory
blink.mojom.mojom.DedicatedWorkerHostFactory = {};

blink.mojom.mojom.DedicatedWorkerHostFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.mojom.DedicatedWorkerHostFactoryRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.DedicatedWorkerHostFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.mojom.DedicatedWorkerHostFactoryPendingReceiver,
      handle);
    this.$ = new blink.mojom.mojom.DedicatedWorkerHostFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.mojom.DedicatedWorkerHostFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createWorkerHostAndStartScriptLoad(token, script_url, credentials_mode, outside_fetch_client_settings_object, blob_url_token, client, storage_access_api_status) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.mojom.DedicatedWorkerHostFactory_CreateWorkerHostAndStartScriptLoad_ParamsSpec,
      null,
      [token, script_url, credentials_mode, outside_fetch_client_settings_object, blob_url_token, client, storage_access_api_status]);
  }

};

blink.mojom.mojom.DedicatedWorkerHostFactory.getRemote = function() {
  let remote = new blink.mojom.mojom.DedicatedWorkerHostFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.DedicatedWorkerHostFactory',
    'context');
  return remote.$;
};

// ParamsSpec for CreateWorkerHostAndStartScriptLoad
blink.mojom.mojom.DedicatedWorkerHostFactory_CreateWorkerHostAndStartScriptLoad_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.DedicatedWorkerHostFactory.CreateWorkerHostAndStartScriptLoad_Params',
      packedSize: 56,
      fields: [
        { name: 'token', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.DedicatedWorkerTokenSpec, nullable: false, minVersion: 0 },
        { name: 'script_url', packedOffset: 8, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'credentials_mode', packedOffset: 40, packedBitOffset: 0, type: network.mojom.CredentialsModeSpec, nullable: false, minVersion: 0 },
        { name: 'outside_fetch_client_settings_object', packedOffset: 16, packedBitOffset: 0, type: blink.mojom.FetchClientSettingsObjectSpec, nullable: false, minVersion: 0 },
        { name: 'blob_url_token', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(blink.mojom.BlobURLTokenRemote), nullable: true, minVersion: 0 },
        { name: 'client', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(blink.mojom.DedicatedWorkerHostFactoryClientRemote), nullable: false, minVersion: 0 },
        { name: 'storage_access_api_status', packedOffset: 44, packedBitOffset: 0, type: network.mojom.StorageAccessApiStatusSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 56}]
    }
  }
};

// Legacy compatibility
blink.mojom.mojom.DedicatedWorkerHostFactoryPtr = blink.mojom.mojom.DedicatedWorkerHostFactoryRemote;
blink.mojom.mojom.DedicatedWorkerHostFactoryRequest = blink.mojom.mojom.DedicatedWorkerHostFactoryPendingReceiver;

