// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/error_notification.mojom
// Module: arc.mojom

'use strict';

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};


// Enum: ErrorType
arc.mojom.ErrorType = {
  ANR: 0,
};

// Struct: ErrorDetails
arc.mojom.ErrorDetailsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.ErrorDetails',
      packedSize: 16,
      fields: [
        { name: 'buttonLabels', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Interface: ErrorNotificationHost
arc.mojom.ErrorNotificationHost = {};

arc.mojom.ErrorNotificationHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.ErrorNotificationHostRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.ErrorNotificationHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.ErrorNotificationHostPendingReceiver,
      handle);
    this.$ = new arc.mojom.ErrorNotificationHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.ErrorNotificationHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

arc.mojom.ErrorNotificationHost.getRemote = function() {
  let remote = new arc.mojom.ErrorNotificationHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.ErrorNotificationHost',
    'context');
  return remote.$;
};

// Legacy compatibility
arc.mojom.ErrorNotificationHostPtr = arc.mojom.ErrorNotificationHostRemote;
arc.mojom.ErrorNotificationHostRequest = arc.mojom.ErrorNotificationHostPendingReceiver;


// Interface: ErrorNotificationInstance
arc.mojom.ErrorNotificationInstance = {};

arc.mojom.ErrorNotificationInstancePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.ErrorNotificationInstanceRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.ErrorNotificationInstance';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.ErrorNotificationInstancePendingReceiver,
      handle);
    this.$ = new arc.mojom.ErrorNotificationInstanceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.ErrorNotificationInstanceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

arc.mojom.ErrorNotificationInstance.getRemote = function() {
  let remote = new arc.mojom.ErrorNotificationInstanceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.ErrorNotificationInstance',
    'context');
  return remote.$;
};

// Legacy compatibility
arc.mojom.ErrorNotificationInstancePtr = arc.mojom.ErrorNotificationInstanceRemote;
arc.mojom.ErrorNotificationInstanceRequest = arc.mojom.ErrorNotificationInstancePendingReceiver;


// Interface: ErrorNotificationItem
arc.mojom.ErrorNotificationItem = {};

arc.mojom.ErrorNotificationItemPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.ErrorNotificationItemRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.ErrorNotificationItem';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.ErrorNotificationItemPendingReceiver,
      handle);
    this.$ = new arc.mojom.ErrorNotificationItemRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.ErrorNotificationItemRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

arc.mojom.ErrorNotificationItem.getRemote = function() {
  let remote = new arc.mojom.ErrorNotificationItemRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.ErrorNotificationItem',
    'context');
  return remote.$;
};

// Legacy compatibility
arc.mojom.ErrorNotificationItemPtr = arc.mojom.ErrorNotificationItemRemote;
arc.mojom.ErrorNotificationItemRequest = arc.mojom.ErrorNotificationItemPendingReceiver;


// Interface: ErrorNotificationActionHandler
arc.mojom.ErrorNotificationActionHandler = {};

arc.mojom.ErrorNotificationActionHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.ErrorNotificationActionHandlerRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.ErrorNotificationActionHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.ErrorNotificationActionHandlerPendingReceiver,
      handle);
    this.$ = new arc.mojom.ErrorNotificationActionHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.ErrorNotificationActionHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

arc.mojom.ErrorNotificationActionHandler.getRemote = function() {
  let remote = new arc.mojom.ErrorNotificationActionHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.ErrorNotificationActionHandler',
    'context');
  return remote.$;
};

// Legacy compatibility
arc.mojom.ErrorNotificationActionHandlerPtr = arc.mojom.ErrorNotificationActionHandlerRemote;
arc.mojom.ErrorNotificationActionHandlerRequest = arc.mojom.ErrorNotificationActionHandlerPendingReceiver;

