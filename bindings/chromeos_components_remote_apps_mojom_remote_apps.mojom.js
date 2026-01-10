// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/components/remote_apps/mojom/remote_apps.mojom
// Module: chromeos.remote_apps.mojom

'use strict';

// Module namespace
var chromeos = chromeos || {};
chromeos.remote_apps = chromeos.remote_apps || {};
chromeos.remote_apps.remote_apps.mojom = chromeos.remote_apps.remote_apps.mojom || {};
var url = url || {};


// Union: AddFolderResult
chromeos.remote_apps.remote_apps.mojom.mojom.AddFolderResultSpec = { $: mojo.internal.Union(
    'chromeos.remote_apps.mojom.AddFolderResult', {
      'folder_id': {
        'ordinal': 0,
        'type': mojo.internal.String,
      }},
      'error': {
        'ordinal': 1,
        'type': mojo.internal.String,
      }},
    })
};

// Union: AddAppResult
chromeos.remote_apps.remote_apps.mojom.mojom.AddAppResultSpec = { $: mojo.internal.Union(
    'chromeos.remote_apps.mojom.AddAppResult', {
      'app_id': {
        'ordinal': 0,
        'type': mojo.internal.String,
      }},
      'error': {
        'ordinal': 1,
        'type': mojo.internal.String,
      }},
    })
};

// Interface: RemoteApps
chromeos.remote_apps.remote_apps.mojom.mojom.RemoteApps = {};

chromeos.remote_apps.remote_apps.mojom.mojom.RemoteAppsPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chromeos.remote_apps.remote_apps.mojom.mojom.RemoteAppsRemote = class {
  static get $interfaceName() {
    return 'chromeos.remote_apps.mojom.RemoteApps';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chromeos.remote_apps.remote_apps.mojom.mojom.RemoteAppsPendingReceiver,
      handle);
    this.$ = new chromeos.remote_apps.remote_apps.mojom.mojom.RemoteAppsRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chromeos.remote_apps.remote_apps.mojom.mojom.RemoteAppsRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  addFolder(name, add_to_front) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      chromeos.remote_apps.remote_apps.mojom.mojom.RemoteApps_AddFolder_ParamsSpec,
      chromeos.remote_apps.remote_apps.mojom.mojom.RemoteApps_AddFolder_ResponseParamsSpec,
      [name, add_to_front]);
  }

  addApp(source_id, name, folder_id, icon_url, add_to_front) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      chromeos.remote_apps.remote_apps.mojom.mojom.RemoteApps_AddApp_ParamsSpec,
      chromeos.remote_apps.remote_apps.mojom.mojom.RemoteApps_AddApp_ResponseParamsSpec,
      [source_id, name, folder_id, icon_url, add_to_front]);
  }

  deleteApp(app_id) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      chromeos.remote_apps.remote_apps.mojom.mojom.RemoteApps_DeleteApp_ParamsSpec,
      chromeos.remote_apps.remote_apps.mojom.mojom.RemoteApps_DeleteApp_ResponseParamsSpec,
      [app_id]);
  }

  sortLauncherWithRemoteAppsFirst() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      chromeos.remote_apps.remote_apps.mojom.mojom.RemoteApps_SortLauncherWithRemoteAppsFirst_ParamsSpec,
      chromeos.remote_apps.remote_apps.mojom.mojom.RemoteApps_SortLauncherWithRemoteAppsFirst_ResponseParamsSpec,
      []);
  }

  setPinnedApps(app_ids) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      chromeos.remote_apps.remote_apps.mojom.mojom.RemoteApps_SetPinnedApps_ParamsSpec,
      chromeos.remote_apps.remote_apps.mojom.mojom.RemoteApps_SetPinnedApps_ResponseParamsSpec,
      [app_ids]);
  }

};

chromeos.remote_apps.remote_apps.mojom.mojom.RemoteApps.getRemote = function() {
  let remote = new chromeos.remote_apps.remote_apps.mojom.mojom.RemoteAppsRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromeos.remote_apps.mojom.RemoteApps',
    'context');
  return remote.$;
};

// ParamsSpec for AddFolder
chromeos.remote_apps.remote_apps.mojom.mojom.RemoteApps_AddFolder_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.remote_apps.mojom.RemoteApps.AddFolder_Params',
      packedSize: 24,
      fields: [
        { name: 'name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'add_to_front', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

chromeos.remote_apps.remote_apps.mojom.mojom.RemoteApps_AddFolder_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.remote_apps.mojom.RemoteApps.AddFolder_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: chromeos.remote_apps.mojom.AddFolderResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for AddApp
chromeos.remote_apps.remote_apps.mojom.mojom.RemoteApps_AddApp_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.remote_apps.mojom.RemoteApps.AddApp_Params',
      packedSize: 48,
      fields: [
        { name: 'source_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'name', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'folder_id', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'icon_url', packedOffset: 24, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'add_to_front', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 48}]
    }
  }
};

chromeos.remote_apps.remote_apps.mojom.mojom.RemoteApps_AddApp_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.remote_apps.mojom.RemoteApps.AddApp_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: chromeos.remote_apps.mojom.AddAppResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for DeleteApp
chromeos.remote_apps.remote_apps.mojom.mojom.RemoteApps_DeleteApp_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.remote_apps.mojom.RemoteApps.DeleteApp_Params',
      packedSize: 16,
      fields: [
        { name: 'app_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

chromeos.remote_apps.remote_apps.mojom.mojom.RemoteApps_DeleteApp_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.remote_apps.mojom.RemoteApps.DeleteApp_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'error', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SortLauncherWithRemoteAppsFirst
chromeos.remote_apps.remote_apps.mojom.mojom.RemoteApps_SortLauncherWithRemoteAppsFirst_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.remote_apps.mojom.RemoteApps.SortLauncherWithRemoteAppsFirst_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

chromeos.remote_apps.remote_apps.mojom.mojom.RemoteApps_SortLauncherWithRemoteAppsFirst_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.remote_apps.mojom.RemoteApps.SortLauncherWithRemoteAppsFirst_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'error', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetPinnedApps
chromeos.remote_apps.remote_apps.mojom.mojom.RemoteApps_SetPinnedApps_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.remote_apps.mojom.RemoteApps.SetPinnedApps_Params',
      packedSize: 16,
      fields: [
        { name: 'app_ids', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.String, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

chromeos.remote_apps.remote_apps.mojom.mojom.RemoteApps_SetPinnedApps_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.remote_apps.mojom.RemoteApps.SetPinnedApps_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'error', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
chromeos.remote_apps.remote_apps.mojom.mojom.RemoteAppsPtr = chromeos.remote_apps.remote_apps.mojom.mojom.RemoteAppsRemote;
chromeos.remote_apps.remote_apps.mojom.mojom.RemoteAppsRequest = chromeos.remote_apps.remote_apps.mojom.mojom.RemoteAppsPendingReceiver;


// Interface: RemoteAppsFactory
chromeos.remote_apps.remote_apps.mojom.mojom.RemoteAppsFactory = {};

chromeos.remote_apps.remote_apps.mojom.mojom.RemoteAppsFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chromeos.remote_apps.remote_apps.mojom.mojom.RemoteAppsFactoryRemote = class {
  static get $interfaceName() {
    return 'chromeos.remote_apps.mojom.RemoteAppsFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chromeos.remote_apps.remote_apps.mojom.mojom.RemoteAppsFactoryPendingReceiver,
      handle);
    this.$ = new chromeos.remote_apps.remote_apps.mojom.mojom.RemoteAppsFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chromeos.remote_apps.remote_apps.mojom.mojom.RemoteAppsFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  bindRemoteAppsAndAppLaunchObserver(source_id, remote_apps, observer) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      chromeos.remote_apps.remote_apps.mojom.mojom.RemoteAppsFactory_BindRemoteAppsAndAppLaunchObserver_ParamsSpec,
      null,
      [source_id, remote_apps, observer]);
  }

};

chromeos.remote_apps.remote_apps.mojom.mojom.RemoteAppsFactory.getRemote = function() {
  let remote = new chromeos.remote_apps.remote_apps.mojom.mojom.RemoteAppsFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromeos.remote_apps.mojom.RemoteAppsFactory',
    'context');
  return remote.$;
};

// ParamsSpec for BindRemoteAppsAndAppLaunchObserver
chromeos.remote_apps.remote_apps.mojom.mojom.RemoteAppsFactory_BindRemoteAppsAndAppLaunchObserver_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.remote_apps.mojom.RemoteAppsFactory.BindRemoteAppsAndAppLaunchObserver_Params',
      packedSize: 32,
      fields: [
        { name: 'source_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'remote_apps', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(chromeos.remote_apps.mojom.RemoteAppsRemote), nullable: false, minVersion: 0 },
        { name: 'observer', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(chromeos.remote_apps.mojom.RemoteAppLaunchObserverRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Legacy compatibility
chromeos.remote_apps.remote_apps.mojom.mojom.RemoteAppsFactoryPtr = chromeos.remote_apps.remote_apps.mojom.mojom.RemoteAppsFactoryRemote;
chromeos.remote_apps.remote_apps.mojom.mojom.RemoteAppsFactoryRequest = chromeos.remote_apps.remote_apps.mojom.mojom.RemoteAppsFactoryPendingReceiver;


// Interface: RemoteAppLaunchObserver
chromeos.remote_apps.remote_apps.mojom.mojom.RemoteAppLaunchObserver = {};

chromeos.remote_apps.remote_apps.mojom.mojom.RemoteAppLaunchObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chromeos.remote_apps.remote_apps.mojom.mojom.RemoteAppLaunchObserverRemote = class {
  static get $interfaceName() {
    return 'chromeos.remote_apps.mojom.RemoteAppLaunchObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chromeos.remote_apps.remote_apps.mojom.mojom.RemoteAppLaunchObserverPendingReceiver,
      handle);
    this.$ = new chromeos.remote_apps.remote_apps.mojom.mojom.RemoteAppLaunchObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chromeos.remote_apps.remote_apps.mojom.mojom.RemoteAppLaunchObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onRemoteAppLaunched(app_id, source_id) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      chromeos.remote_apps.remote_apps.mojom.mojom.RemoteAppLaunchObserver_OnRemoteAppLaunched_ParamsSpec,
      null,
      [app_id, source_id]);
  }

};

chromeos.remote_apps.remote_apps.mojom.mojom.RemoteAppLaunchObserver.getRemote = function() {
  let remote = new chromeos.remote_apps.remote_apps.mojom.mojom.RemoteAppLaunchObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromeos.remote_apps.mojom.RemoteAppLaunchObserver',
    'context');
  return remote.$;
};

// ParamsSpec for OnRemoteAppLaunched
chromeos.remote_apps.remote_apps.mojom.mojom.RemoteAppLaunchObserver_OnRemoteAppLaunched_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.remote_apps.mojom.RemoteAppLaunchObserver.OnRemoteAppLaunched_Params',
      packedSize: 24,
      fields: [
        { name: 'app_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'source_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
chromeos.remote_apps.remote_apps.mojom.mojom.RemoteAppLaunchObserverPtr = chromeos.remote_apps.remote_apps.mojom.mojom.RemoteAppLaunchObserverRemote;
chromeos.remote_apps.remote_apps.mojom.mojom.RemoteAppLaunchObserverRequest = chromeos.remote_apps.remote_apps.mojom.mojom.RemoteAppLaunchObserverPendingReceiver;

