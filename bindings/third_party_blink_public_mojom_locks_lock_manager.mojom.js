// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/locks/lock_manager.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Enum: LockMode
blink.mojom.LockMode = {
  SHARED: 0,
  EXCLUSIVE: 1,
};

// Enum: WaitMode
blink.mojom.WaitMode = {
  WAIT: 0,
  NO_WAIT: 1,
  PREEMPT: 2,
};

// Interface: LockHandle
blink.mojom.LockHandle = {};

blink.mojom.LockHandlePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.LockHandleRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.LockHandle';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.LockHandlePendingReceiver,
      handle);
    this.$ = new blink.mojom.LockHandleRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.LockHandleRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

blink.mojom.LockHandle.getRemote = function() {
  let remote = new blink.mojom.LockHandleRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.LockHandle',
    'context');
  return remote.$;
};

// Legacy compatibility
blink.mojom.LockHandlePtr = blink.mojom.LockHandleRemote;
blink.mojom.LockHandleRequest = blink.mojom.LockHandlePendingReceiver;


// Interface: LockRequest
blink.mojom.LockRequest = {};

blink.mojom.LockRequestPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.LockRequestRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.LockRequest';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.LockRequestPendingReceiver,
      handle);
    this.$ = new blink.mojom.LockRequestRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.LockRequestRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  granted(lock_handle) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.LockRequest_Granted_ParamsSpec.$,
      null,
      [lock_handle]);
  }

  failed() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.LockRequest_Failed_ParamsSpec.$,
      null,
      []);
  }

};

blink.mojom.LockRequest.getRemote = function() {
  let remote = new blink.mojom.LockRequestRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.LockRequest',
    'context');
  return remote.$;
};

// ParamsSpec for Granted
blink.mojom.LockRequest_Granted_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.LockRequest.Granted_Params',
      packedSize: 16,
      fields: [
        { name: 'lock_handle', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for Failed
blink.mojom.LockRequest_Failed_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.LockRequest.Failed_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
blink.mojom.LockRequestPtr = blink.mojom.LockRequestRemote;
blink.mojom.LockRequestRequest = blink.mojom.LockRequestPendingReceiver;


// Interface: LockManager
blink.mojom.LockManager = {};

blink.mojom.LockManagerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.LockManagerRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.LockManager';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.LockManagerPendingReceiver,
      handle);
    this.$ = new blink.mojom.LockManagerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.LockManagerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  requestLock(name, mode, wait, request) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.LockManager_RequestLock_ParamsSpec.$,
      null,
      [name, mode, wait, request]);
  }

  queryState() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.LockManager_QueryState_ParamsSpec.$,
      blink.mojom.LockManager_QueryState_ResponseParamsSpec.$,
      []);
  }

};

blink.mojom.LockManager.getRemote = function() {
  let remote = new blink.mojom.LockManagerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.LockManager',
    'context');
  return remote.$;
};

// ParamsSpec for RequestLock
blink.mojom.LockManager_RequestLock_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.LockManager.RequestLock_Params',
      packedSize: 40,
      fields: [
        { name: 'name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'mode', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'wait', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'request', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for QueryState
blink.mojom.LockManager_QueryState_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.LockManager.QueryState_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.LockManager_QueryState_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.LockManager.QueryState_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'requested', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'held', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
blink.mojom.LockManagerPtr = blink.mojom.LockManagerRemote;
blink.mojom.LockManagerRequest = blink.mojom.LockManagerPendingReceiver;

