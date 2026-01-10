// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/components/remote_apps/mojom/remote_apps.mojom
// Module: chromeos.remote_apps.mojom

'use strict';

// Module namespace
var chromeos = chromeos || {};
chromeos.remote_apps = chromeos.remote_apps || {};
chromeos.remote_apps.mojom = chromeos.remote_apps.mojom || {};
var url = url || {};

chromeos.remote_apps.mojom.AddFolderResultSpec = { $: {} };
chromeos.remote_apps.mojom.AddAppResultSpec = { $: {} };
chromeos.remote_apps.mojom.RemoteApps = {};
chromeos.remote_apps.mojom.RemoteApps.$interfaceName = 'chromeos.remote_apps.mojom.RemoteApps';
chromeos.remote_apps.mojom.RemoteApps_AddFolder_ParamsSpec = { $: {} };
chromeos.remote_apps.mojom.RemoteApps_AddFolder_ResponseParamsSpec = { $: {} };
chromeos.remote_apps.mojom.RemoteApps_AddApp_ParamsSpec = { $: {} };
chromeos.remote_apps.mojom.RemoteApps_AddApp_ResponseParamsSpec = { $: {} };
chromeos.remote_apps.mojom.RemoteApps_DeleteApp_ParamsSpec = { $: {} };
chromeos.remote_apps.mojom.RemoteApps_DeleteApp_ResponseParamsSpec = { $: {} };
chromeos.remote_apps.mojom.RemoteApps_SortLauncherWithRemoteAppsFirst_ParamsSpec = { $: {} };
chromeos.remote_apps.mojom.RemoteApps_SortLauncherWithRemoteAppsFirst_ResponseParamsSpec = { $: {} };
chromeos.remote_apps.mojom.RemoteApps_SetPinnedApps_ParamsSpec = { $: {} };
chromeos.remote_apps.mojom.RemoteApps_SetPinnedApps_ResponseParamsSpec = { $: {} };
chromeos.remote_apps.mojom.RemoteAppsFactory = {};
chromeos.remote_apps.mojom.RemoteAppsFactory.$interfaceName = 'chromeos.remote_apps.mojom.RemoteAppsFactory';
chromeos.remote_apps.mojom.RemoteAppsFactory_BindRemoteAppsAndAppLaunchObserver_ParamsSpec = { $: {} };
chromeos.remote_apps.mojom.RemoteAppLaunchObserver = {};
chromeos.remote_apps.mojom.RemoteAppLaunchObserver.$interfaceName = 'chromeos.remote_apps.mojom.RemoteAppLaunchObserver';
chromeos.remote_apps.mojom.RemoteAppLaunchObserver_OnRemoteAppLaunched_ParamsSpec = { $: {} };

// Union: AddFolderResult
mojo.internal.Union(
    chromeos.remote_apps.mojom.AddFolderResultSpec, 'chromeos.remote_apps.mojom.AddFolderResult', {
      'folder_id': {
        'ordinal': 0,
        'type': mojo.internal.String,
        'nullable': false,
      },
      'error': {
        'ordinal': 1,
        'type': mojo.internal.String,
        'nullable': false,
      },
    });

// Union: AddAppResult
mojo.internal.Union(
    chromeos.remote_apps.mojom.AddAppResultSpec, 'chromeos.remote_apps.mojom.AddAppResult', {
      'app_id': {
        'ordinal': 0,
        'type': mojo.internal.String,
        'nullable': false,
      },
      'error': {
        'ordinal': 1,
        'type': mojo.internal.String,
        'nullable': false,
      },
    });

// Interface: RemoteApps
mojo.internal.Struct(
    chromeos.remote_apps.mojom.RemoteApps_AddFolder_ParamsSpec, 'chromeos.remote_apps.mojom.RemoteApps_AddFolder_Params', [
      mojo.internal.StructField('name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('add_to_front', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    chromeos.remote_apps.mojom.RemoteApps_AddFolder_ResponseParamsSpec, 'chromeos.remote_apps.mojom.RemoteApps_AddFolder_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, chromeos.remote_apps.mojom.AddFolderResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromeos.remote_apps.mojom.RemoteApps_AddApp_ParamsSpec, 'chromeos.remote_apps.mojom.RemoteApps_AddApp_Params', [
      mojo.internal.StructField('source_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('name', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('folder_id', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('icon_url', 24, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('add_to_front', 32, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 48]]);

mojo.internal.Struct(
    chromeos.remote_apps.mojom.RemoteApps_AddApp_ResponseParamsSpec, 'chromeos.remote_apps.mojom.RemoteApps_AddApp_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, chromeos.remote_apps.mojom.AddAppResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromeos.remote_apps.mojom.RemoteApps_DeleteApp_ParamsSpec, 'chromeos.remote_apps.mojom.RemoteApps_DeleteApp_Params', [
      mojo.internal.StructField('app_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromeos.remote_apps.mojom.RemoteApps_DeleteApp_ResponseParamsSpec, 'chromeos.remote_apps.mojom.RemoteApps_DeleteApp_ResponseParams', [
      mojo.internal.StructField('error', 0, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromeos.remote_apps.mojom.RemoteApps_SortLauncherWithRemoteAppsFirst_ParamsSpec, 'chromeos.remote_apps.mojom.RemoteApps_SortLauncherWithRemoteAppsFirst_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    chromeos.remote_apps.mojom.RemoteApps_SortLauncherWithRemoteAppsFirst_ResponseParamsSpec, 'chromeos.remote_apps.mojom.RemoteApps_SortLauncherWithRemoteAppsFirst_ResponseParams', [
      mojo.internal.StructField('error', 0, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromeos.remote_apps.mojom.RemoteApps_SetPinnedApps_ParamsSpec, 'chromeos.remote_apps.mojom.RemoteApps_SetPinnedApps_Params', [
      mojo.internal.StructField('app_ids', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromeos.remote_apps.mojom.RemoteApps_SetPinnedApps_ResponseParamsSpec, 'chromeos.remote_apps.mojom.RemoteApps_SetPinnedApps_ResponseParams', [
      mojo.internal.StructField('error', 0, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 16]]);

chromeos.remote_apps.mojom.RemoteAppsPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chromeos.remote_apps.mojom.RemoteAppsRemote = class {
  static get $interfaceName() {
    return 'chromeos.remote_apps.mojom.RemoteApps';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chromeos.remote_apps.mojom.RemoteAppsPendingReceiver,
      handle);
    this.$ = new chromeos.remote_apps.mojom.RemoteAppsRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chromeos.remote_apps.mojom.RemoteAppsRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  addFolder(name, add_to_front) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      chromeos.remote_apps.mojom.RemoteApps_AddFolder_ParamsSpec,
      chromeos.remote_apps.mojom.RemoteApps_AddFolder_ResponseParamsSpec,
      [name, add_to_front],
      false);
  }

  addApp(source_id, name, folder_id, icon_url, add_to_front) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      chromeos.remote_apps.mojom.RemoteApps_AddApp_ParamsSpec,
      chromeos.remote_apps.mojom.RemoteApps_AddApp_ResponseParamsSpec,
      [source_id, name, folder_id, icon_url, add_to_front],
      false);
  }

  deleteApp(app_id) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      chromeos.remote_apps.mojom.RemoteApps_DeleteApp_ParamsSpec,
      chromeos.remote_apps.mojom.RemoteApps_DeleteApp_ResponseParamsSpec,
      [app_id],
      false);
  }

  sortLauncherWithRemoteAppsFirst() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      chromeos.remote_apps.mojom.RemoteApps_SortLauncherWithRemoteAppsFirst_ParamsSpec,
      chromeos.remote_apps.mojom.RemoteApps_SortLauncherWithRemoteAppsFirst_ResponseParamsSpec,
      [],
      false);
  }

  setPinnedApps(app_ids) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      chromeos.remote_apps.mojom.RemoteApps_SetPinnedApps_ParamsSpec,
      chromeos.remote_apps.mojom.RemoteApps_SetPinnedApps_ResponseParamsSpec,
      [app_ids],
      false);
  }

};

chromeos.remote_apps.mojom.RemoteApps.getRemote = function() {
  let remote = new chromeos.remote_apps.mojom.RemoteAppsRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromeos.remote_apps.mojom.RemoteApps',
    'context');
  return remote.$;
};

chromeos.remote_apps.mojom.RemoteAppsReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
    this.ordinalMap.set(3, 3); // Default ordinal 3 -> Index 3
    this.ordinalMap.set(4, 4); // Default ordinal 4 -> Index 4
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) dispatchId = header.ordinal; // Fallback to raw ordinal
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(chromeos.remote_apps.mojom.RemoteApps_AddFolder_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.addFolder');
          const result = this.impl.addFolder(params.name, params.add_to_front);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, chromeos.remote_apps.mojom.RemoteApps_AddFolder_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(chromeos.remote_apps.mojom.RemoteApps_AddApp_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.addApp');
          const result = this.impl.addApp(params.source_id, params.name, params.folder_id, params.icon_url, params.add_to_front);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, chromeos.remote_apps.mojom.RemoteApps_AddApp_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(chromeos.remote_apps.mojom.RemoteApps_DeleteApp_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.deleteApp');
          const result = this.impl.deleteApp(params.app_id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, chromeos.remote_apps.mojom.RemoteApps_DeleteApp_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(chromeos.remote_apps.mojom.RemoteApps_SortLauncherWithRemoteAppsFirst_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.sortLauncherWithRemoteAppsFirst');
          const result = this.impl.sortLauncherWithRemoteAppsFirst();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, chromeos.remote_apps.mojom.RemoteApps_SortLauncherWithRemoteAppsFirst_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(chromeos.remote_apps.mojom.RemoteApps_SetPinnedApps_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.setPinnedApps');
          const result = this.impl.setPinnedApps(params.app_ids);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, chromeos.remote_apps.mojom.RemoteApps_SetPinnedApps_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

chromeos.remote_apps.mojom.RemoteAppsReceiver = chromeos.remote_apps.mojom.RemoteAppsReceiver;

chromeos.remote_apps.mojom.RemoteAppsPtr = chromeos.remote_apps.mojom.RemoteAppsRemote;
chromeos.remote_apps.mojom.RemoteAppsRequest = chromeos.remote_apps.mojom.RemoteAppsPendingReceiver;


// Interface: RemoteAppsFactory
mojo.internal.Struct(
    chromeos.remote_apps.mojom.RemoteAppsFactory_BindRemoteAppsAndAppLaunchObserver_ParamsSpec, 'chromeos.remote_apps.mojom.RemoteAppsFactory_BindRemoteAppsAndAppLaunchObserver_Params', [
      mojo.internal.StructField('source_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('remote_apps', 8, 0, mojo.internal.InterfaceRequest(chromeos.remote_apps.mojom.RemoteAppsSpec), null, false, 0, undefined),
      mojo.internal.StructField('observer', 16, 0, mojo.internal.InterfaceProxy(chromeos.remote_apps.mojom.RemoteAppLaunchObserverSpec), null, false, 0, undefined),
    ],
    [[0, 32]]);

chromeos.remote_apps.mojom.RemoteAppsFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chromeos.remote_apps.mojom.RemoteAppsFactoryRemote = class {
  static get $interfaceName() {
    return 'chromeos.remote_apps.mojom.RemoteAppsFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chromeos.remote_apps.mojom.RemoteAppsFactoryPendingReceiver,
      handle);
    this.$ = new chromeos.remote_apps.mojom.RemoteAppsFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chromeos.remote_apps.mojom.RemoteAppsFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  bindRemoteAppsAndAppLaunchObserver(source_id, remote_apps, observer) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      chromeos.remote_apps.mojom.RemoteAppsFactory_BindRemoteAppsAndAppLaunchObserver_ParamsSpec,
      null,
      [source_id, remote_apps, observer],
      false);
  }

};

chromeos.remote_apps.mojom.RemoteAppsFactory.getRemote = function() {
  let remote = new chromeos.remote_apps.mojom.RemoteAppsFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromeos.remote_apps.mojom.RemoteAppsFactory',
    'context');
  return remote.$;
};

chromeos.remote_apps.mojom.RemoteAppsFactoryReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) dispatchId = header.ordinal; // Fallback to raw ordinal
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(chromeos.remote_apps.mojom.RemoteAppsFactory_BindRemoteAppsAndAppLaunchObserver_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.bindRemoteAppsAndAppLaunchObserver');
          const result = this.impl.bindRemoteAppsAndAppLaunchObserver(params.source_id, params.remote_apps, params.observer);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

chromeos.remote_apps.mojom.RemoteAppsFactoryReceiver = chromeos.remote_apps.mojom.RemoteAppsFactoryReceiver;

chromeos.remote_apps.mojom.RemoteAppsFactoryPtr = chromeos.remote_apps.mojom.RemoteAppsFactoryRemote;
chromeos.remote_apps.mojom.RemoteAppsFactoryRequest = chromeos.remote_apps.mojom.RemoteAppsFactoryPendingReceiver;


// Interface: RemoteAppLaunchObserver
mojo.internal.Struct(
    chromeos.remote_apps.mojom.RemoteAppLaunchObserver_OnRemoteAppLaunched_ParamsSpec, 'chromeos.remote_apps.mojom.RemoteAppLaunchObserver_OnRemoteAppLaunched_Params', [
      mojo.internal.StructField('app_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('source_id', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

chromeos.remote_apps.mojom.RemoteAppLaunchObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chromeos.remote_apps.mojom.RemoteAppLaunchObserverRemote = class {
  static get $interfaceName() {
    return 'chromeos.remote_apps.mojom.RemoteAppLaunchObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chromeos.remote_apps.mojom.RemoteAppLaunchObserverPendingReceiver,
      handle);
    this.$ = new chromeos.remote_apps.mojom.RemoteAppLaunchObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chromeos.remote_apps.mojom.RemoteAppLaunchObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onRemoteAppLaunched(app_id, source_id) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      chromeos.remote_apps.mojom.RemoteAppLaunchObserver_OnRemoteAppLaunched_ParamsSpec,
      null,
      [app_id, source_id],
      false);
  }

};

chromeos.remote_apps.mojom.RemoteAppLaunchObserver.getRemote = function() {
  let remote = new chromeos.remote_apps.mojom.RemoteAppLaunchObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromeos.remote_apps.mojom.RemoteAppLaunchObserver',
    'context');
  return remote.$;
};

chromeos.remote_apps.mojom.RemoteAppLaunchObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) dispatchId = header.ordinal; // Fallback to raw ordinal
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(chromeos.remote_apps.mojom.RemoteAppLaunchObserver_OnRemoteAppLaunched_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.onRemoteAppLaunched');
          const result = this.impl.onRemoteAppLaunched(params.app_id, params.source_id);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

chromeos.remote_apps.mojom.RemoteAppLaunchObserverReceiver = chromeos.remote_apps.mojom.RemoteAppLaunchObserverReceiver;

chromeos.remote_apps.mojom.RemoteAppLaunchObserverPtr = chromeos.remote_apps.mojom.RemoteAppLaunchObserverRemote;
chromeos.remote_apps.mojom.RemoteAppLaunchObserverRequest = chromeos.remote_apps.mojom.RemoteAppLaunchObserverPendingReceiver;

