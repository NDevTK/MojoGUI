// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/services/nearby/public/mojom/mdns.mojom
// Module: sharing.mojom

'use strict';

// Module namespace
var sharing = sharing || {};
sharing.mojom = sharing.mojom || {};


// Struct: NsdServiceInfo
sharing.mojom.NsdServiceInfoSpec = {
  $: {
    structSpec: {
      name: 'sharing.mojom.NsdServiceInfo',
      packedSize: 16,
      fields: [
        { name: 'port', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Interface: MdnsObserver
sharing.mojom.MdnsObserver = {};

sharing.mojom.MdnsObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

sharing.mojom.MdnsObserverRemote = class {
  static get $interfaceName() {
    return 'sharing.mojom.MdnsObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      sharing.mojom.MdnsObserverPendingReceiver,
      handle);
    this.$ = new sharing.mojom.MdnsObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

sharing.mojom.MdnsObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  serviceFound(service_info) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      sharing.mojom.MdnsObserver_ServiceFound_ParamsSpec,
      null,
      [service_info]);
  }

  serviceLost(service_info) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      sharing.mojom.MdnsObserver_ServiceLost_ParamsSpec,
      null,
      [service_info]);
  }

};

sharing.mojom.MdnsObserver.getRemote = function() {
  let remote = new sharing.mojom.MdnsObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'sharing.mojom.MdnsObserver',
    'context');
  return remote.$;
};

// ParamsSpec for ServiceFound
sharing.mojom.MdnsObserver_ServiceFound_ParamsSpec = {
  $: {
    structSpec: {
      name: 'sharing.mojom.MdnsObserver.ServiceFound_Params',
      packedSize: 16,
      fields: [
        { name: 'service_info', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ServiceLost
sharing.mojom.MdnsObserver_ServiceLost_ParamsSpec = {
  $: {
    structSpec: {
      name: 'sharing.mojom.MdnsObserver.ServiceLost_Params',
      packedSize: 16,
      fields: [
        { name: 'service_info', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
sharing.mojom.MdnsObserverPtr = sharing.mojom.MdnsObserverRemote;
sharing.mojom.MdnsObserverRequest = sharing.mojom.MdnsObserverPendingReceiver;


// Interface: MdnsManager
sharing.mojom.MdnsManager = {};

sharing.mojom.MdnsManagerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

sharing.mojom.MdnsManagerRemote = class {
  static get $interfaceName() {
    return 'sharing.mojom.MdnsManager';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      sharing.mojom.MdnsManagerPendingReceiver,
      handle);
    this.$ = new sharing.mojom.MdnsManagerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

sharing.mojom.MdnsManagerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  addObserver(observer) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      sharing.mojom.MdnsManager_AddObserver_ParamsSpec,
      null,
      [observer]);
  }

  startDiscoverySession(service_type) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      sharing.mojom.MdnsManager_StartDiscoverySession_ParamsSpec,
      sharing.mojom.MdnsManager_StartDiscoverySession_ResponseParamsSpec,
      [service_type]);
  }

  stopDiscoverySession(service_type) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      sharing.mojom.MdnsManager_StopDiscoverySession_ParamsSpec,
      sharing.mojom.MdnsManager_StopDiscoverySession_ResponseParamsSpec,
      [service_type]);
  }

};

sharing.mojom.MdnsManager.getRemote = function() {
  let remote = new sharing.mojom.MdnsManagerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'sharing.mojom.MdnsManager',
    'context');
  return remote.$;
};

// ParamsSpec for AddObserver
sharing.mojom.MdnsManager_AddObserver_ParamsSpec = {
  $: {
    structSpec: {
      name: 'sharing.mojom.MdnsManager.AddObserver_Params',
      packedSize: 16,
      fields: [
        { name: 'observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for StartDiscoverySession
sharing.mojom.MdnsManager_StartDiscoverySession_ParamsSpec = {
  $: {
    structSpec: {
      name: 'sharing.mojom.MdnsManager.StartDiscoverySession_Params',
      packedSize: 16,
      fields: [
        { name: 'service_type', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

sharing.mojom.MdnsManager_StartDiscoverySession_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'sharing.mojom.MdnsManager.StartDiscoverySession_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for StopDiscoverySession
sharing.mojom.MdnsManager_StopDiscoverySession_ParamsSpec = {
  $: {
    structSpec: {
      name: 'sharing.mojom.MdnsManager.StopDiscoverySession_Params',
      packedSize: 16,
      fields: [
        { name: 'service_type', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

sharing.mojom.MdnsManager_StopDiscoverySession_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'sharing.mojom.MdnsManager.StopDiscoverySession_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
sharing.mojom.MdnsManagerPtr = sharing.mojom.MdnsManagerRemote;
sharing.mojom.MdnsManagerRequest = sharing.mojom.MdnsManagerPendingReceiver;

