// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/locks/lock_manager.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Enum: LockMode
blink.mojom.mojom.LockMode = {
  SHARED: 0,
  EXCLUSIVE: 1,
};
blink.mojom.mojom.LockModeSpec = { $: mojo.internal.Enum() };

// Enum: WaitMode
blink.mojom.mojom.WaitMode = {
  WAIT: 0,
  NO_WAIT: 1,
  PREEMPT: 2,
};
blink.mojom.mojom.WaitModeSpec = { $: mojo.internal.Enum() };

// Struct: LockInfo
blink.mojom.mojom.LockInfoSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.LockInfo',
      packedSize: 32,
      fields: [
        { name: 'name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'mode', packedOffset: 16, packedBitOffset: 0, type: blink.mojom.LockModeSpec, nullable: false, minVersion: 0 },
        { name: 'client_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Interface: LockHandle
blink.mojom.mojom.LockHandle = {};

blink.mojom.mojom.LockHandlePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.mojom.LockHandleRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.LockHandle';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.mojom.LockHandlePendingReceiver,
      handle);
    this.$ = new blink.mojom.mojom.LockHandleRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.mojom.LockHandleRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

blink.mojom.mojom.LockHandle.getRemote = function() {
  let remote = new blink.mojom.mojom.LockHandleRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.LockHandle',
    'context');
  return remote.$;
};

// Legacy compatibility
blink.mojom.mojom.LockHandlePtr = blink.mojom.mojom.LockHandleRemote;
blink.mojom.mojom.LockHandleRequest = blink.mojom.mojom.LockHandlePendingReceiver;


// Interface: LockRequest
blink.mojom.mojom.LockRequest = {};

blink.mojom.mojom.LockRequestPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.mojom.LockRequestRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.LockRequest';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.mojom.LockRequestPendingReceiver,
      handle);
    this.$ = new blink.mojom.mojom.LockRequestRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.mojom.LockRequestRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  granted(lock_handle) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.mojom.LockRequest_Granted_ParamsSpec,
      null,
      [lock_handle]);
  }

  failed() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.mojom.LockRequest_Failed_ParamsSpec,
      null,
      []);
  }

};

blink.mojom.mojom.LockRequest.getRemote = function() {
  let remote = new blink.mojom.mojom.LockRequestRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.LockRequest',
    'context');
  return remote.$;
};

// ParamsSpec for Granted
blink.mojom.mojom.LockRequest_Granted_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.LockRequest.Granted_Params',
      packedSize: 16,
      fields: [
        { name: 'lock_handle', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.AssociatedInterfaceProxy(blink.mojom.LockHandleRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for Failed
blink.mojom.mojom.LockRequest_Failed_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.LockRequest.Failed_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Legacy compatibility
blink.mojom.mojom.LockRequestPtr = blink.mojom.mojom.LockRequestRemote;
blink.mojom.mojom.LockRequestRequest = blink.mojom.mojom.LockRequestPendingReceiver;


// Interface: LockManager
blink.mojom.mojom.LockManager = {};

blink.mojom.mojom.LockManagerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.mojom.LockManagerRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.LockManager';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.mojom.LockManagerPendingReceiver,
      handle);
    this.$ = new blink.mojom.mojom.LockManagerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.mojom.LockManagerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  requestLock(name, mode, wait, request) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.mojom.LockManager_RequestLock_ParamsSpec,
      null,
      [name, mode, wait, request]);
  }

  queryState() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.mojom.LockManager_QueryState_ParamsSpec,
      blink.mojom.mojom.LockManager_QueryState_ResponseParamsSpec,
      []);
  }

};

blink.mojom.mojom.LockManager.getRemote = function() {
  let remote = new blink.mojom.mojom.LockManagerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.LockManager',
    'context');
  return remote.$;
};

// ParamsSpec for RequestLock
blink.mojom.mojom.LockManager_RequestLock_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.LockManager.RequestLock_Params',
      packedSize: 32,
      fields: [
        { name: 'name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'mode', packedOffset: 16, packedBitOffset: 0, type: blink.mojom.LockModeSpec, nullable: false, minVersion: 0 },
        { name: 'wait', packedOffset: 20, packedBitOffset: 0, type: blink.mojom.WaitModeSpec, nullable: false, minVersion: 0 },
        { name: 'request', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.AssociatedInterfaceProxy(blink.mojom.LockRequestRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// ParamsSpec for QueryState
blink.mojom.mojom.LockManager_QueryState_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.LockManager.QueryState_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

blink.mojom.mojom.LockManager_QueryState_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.LockManager.QueryState_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'requested', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(blink.mojom.LockInfoSpec, false), nullable: false, minVersion: 0 },
        { name: 'held', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(blink.mojom.LockInfoSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
blink.mojom.mojom.LockManagerPtr = blink.mojom.mojom.LockManagerRemote;
blink.mojom.mojom.LockManagerRequest = blink.mojom.mojom.LockManagerPendingReceiver;

