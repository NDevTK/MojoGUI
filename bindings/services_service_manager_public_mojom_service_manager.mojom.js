// Auto-generated MojoJS binding
// Source: chromium_src/services/service_manager/public/mojom/service_manager.mojom
// Module: service_manager.mojom

'use strict';

// Module namespace
var service_manager = service_manager || {};
service_manager.mojom = service_manager.mojom || {};


// Enum: InstanceState
service_manager.mojom.InstanceState = {
  kCreated: 0,
  kStarted: 1,
  kUnreachable: 2,
};

// Struct: RunningServiceInfo
service_manager.mojom.RunningServiceInfoSpec = {
  $: {
    structSpec: {
      name: 'service_manager.mojom.RunningServiceInfo',
      packedSize: 16,
      fields: [
        { name: 'state', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Interface: ServiceManagerListener
service_manager.mojom.ServiceManagerListener = {};

service_manager.mojom.ServiceManagerListenerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

service_manager.mojom.ServiceManagerListenerRemote = class {
  static get $interfaceName() {
    return 'service_manager.mojom.ServiceManagerListener';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      service_manager.mojom.ServiceManagerListenerPendingReceiver,
      handle);
    this.$ = new service_manager.mojom.ServiceManagerListenerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

service_manager.mojom.ServiceManagerListenerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onInit(running_services) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      service_manager.mojom.ServiceManagerListener_OnInit_ParamsSpec,
      null,
      [running_services]);
  }

  onServiceCreated(service) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      service_manager.mojom.ServiceManagerListener_OnServiceCreated_ParamsSpec,
      null,
      [service]);
  }

  onServiceStarted(identity, pid_deprecated) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      service_manager.mojom.ServiceManagerListener_OnServiceStarted_ParamsSpec,
      null,
      [identity, pid_deprecated]);
  }

  onServicePIDReceived(identity, pid) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      service_manager.mojom.ServiceManagerListener_OnServicePIDReceived_ParamsSpec,
      null,
      [identity, pid]);
  }

  onServiceFailedToStart(identity) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      service_manager.mojom.ServiceManagerListener_OnServiceFailedToStart_ParamsSpec,
      null,
      [identity]);
  }

  onServiceStopped(identity) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      service_manager.mojom.ServiceManagerListener_OnServiceStopped_ParamsSpec,
      null,
      [identity]);
  }

};

service_manager.mojom.ServiceManagerListener.getRemote = function() {
  let remote = new service_manager.mojom.ServiceManagerListenerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'service_manager.mojom.ServiceManagerListener',
    'context');
  return remote.$;
};

// ParamsSpec for OnInit
service_manager.mojom.ServiceManagerListener_OnInit_ParamsSpec = {
  $: {
    structSpec: {
      name: 'service_manager.mojom.ServiceManagerListener.OnInit_Params',
      packedSize: 16,
      fields: [
        { name: 'running_services', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnServiceCreated
service_manager.mojom.ServiceManagerListener_OnServiceCreated_ParamsSpec = {
  $: {
    structSpec: {
      name: 'service_manager.mojom.ServiceManagerListener.OnServiceCreated_Params',
      packedSize: 16,
      fields: [
        { name: 'service', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnServiceStarted
service_manager.mojom.ServiceManagerListener_OnServiceStarted_ParamsSpec = {
  $: {
    structSpec: {
      name: 'service_manager.mojom.ServiceManagerListener.OnServiceStarted_Params',
      packedSize: 24,
      fields: [
        { name: 'identity', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'pid_deprecated', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnServicePIDReceived
service_manager.mojom.ServiceManagerListener_OnServicePIDReceived_ParamsSpec = {
  $: {
    structSpec: {
      name: 'service_manager.mojom.ServiceManagerListener.OnServicePIDReceived_Params',
      packedSize: 24,
      fields: [
        { name: 'identity', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'pid', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnServiceFailedToStart
service_manager.mojom.ServiceManagerListener_OnServiceFailedToStart_ParamsSpec = {
  $: {
    structSpec: {
      name: 'service_manager.mojom.ServiceManagerListener.OnServiceFailedToStart_Params',
      packedSize: 16,
      fields: [
        { name: 'identity', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnServiceStopped
service_manager.mojom.ServiceManagerListener_OnServiceStopped_ParamsSpec = {
  $: {
    structSpec: {
      name: 'service_manager.mojom.ServiceManagerListener.OnServiceStopped_Params',
      packedSize: 16,
      fields: [
        { name: 'identity', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
service_manager.mojom.ServiceManagerListenerPtr = service_manager.mojom.ServiceManagerListenerRemote;
service_manager.mojom.ServiceManagerListenerRequest = service_manager.mojom.ServiceManagerListenerPendingReceiver;


// Interface: ServiceManager
service_manager.mojom.ServiceManager = {};

service_manager.mojom.ServiceManagerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

service_manager.mojom.ServiceManagerRemote = class {
  static get $interfaceName() {
    return 'service_manager.mojom.ServiceManager';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      service_manager.mojom.ServiceManagerPendingReceiver,
      handle);
    this.$ = new service_manager.mojom.ServiceManagerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

service_manager.mojom.ServiceManagerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  addListener(listener) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      service_manager.mojom.ServiceManager_AddListener_ParamsSpec,
      null,
      [listener]);
  }

};

service_manager.mojom.ServiceManager.getRemote = function() {
  let remote = new service_manager.mojom.ServiceManagerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'service_manager.mojom.ServiceManager',
    'context');
  return remote.$;
};

// ParamsSpec for AddListener
service_manager.mojom.ServiceManager_AddListener_ParamsSpec = {
  $: {
    structSpec: {
      name: 'service_manager.mojom.ServiceManager.AddListener_Params',
      packedSize: 16,
      fields: [
        { name: 'listener', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
service_manager.mojom.ServiceManagerPtr = service_manager.mojom.ServiceManagerRemote;
service_manager.mojom.ServiceManagerRequest = service_manager.mojom.ServiceManagerPendingReceiver;

