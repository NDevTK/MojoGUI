// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/error_notification.mojom
// Module: arc.mojom

'use strict';

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};


// Enum: ErrorType
arc.mojom.mojom.ErrorType = {
  ANR: 0,
};
arc.mojom.mojom.ErrorTypeSpec = { $: mojo.internal.Enum() };

// Struct: ErrorDetails
arc.mojom.mojom.ErrorDetailsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.ErrorDetails',
      packedSize: 40,
      fields: [
        { name: 'name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'title', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'type', packedOffset: 24, packedBitOffset: 0, type: arc.mojom.ErrorTypeSpec, nullable: false, minVersion: 0 },
        { name: 'buttonLabels', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.String, false), nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Interface: ErrorNotificationHost
arc.mojom.mojom.ErrorNotificationHost = {};

arc.mojom.mojom.ErrorNotificationHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.mojom.ErrorNotificationHostRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.ErrorNotificationHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.mojom.ErrorNotificationHostPendingReceiver,
      handle);
    this.$ = new arc.mojom.mojom.ErrorNotificationHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.mojom.ErrorNotificationHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  sendErrorDetails(details, action_handler) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      arc.mojom.mojom.ErrorNotificationHost_SendErrorDetails_ParamsSpec,
      arc.mojom.mojom.ErrorNotificationHost_SendErrorDetails_ResponseParamsSpec,
      [details, action_handler]);
  }

};

arc.mojom.mojom.ErrorNotificationHost.getRemote = function() {
  let remote = new arc.mojom.mojom.ErrorNotificationHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.ErrorNotificationHost',
    'context');
  return remote.$;
};

// ParamsSpec for SendErrorDetails
arc.mojom.mojom.ErrorNotificationHost_SendErrorDetails_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.ErrorNotificationHost.SendErrorDetails_Params',
      packedSize: 24,
      fields: [
        { name: 'details', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.ErrorDetailsSpec, nullable: false, minVersion: 0 },
        { name: 'action_handler', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(arc.mojom.ErrorNotificationActionHandlerRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

arc.mojom.mojom.ErrorNotificationHost_SendErrorDetails_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.ErrorNotificationHost.SendErrorDetails_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'item', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(arc.mojom.ErrorNotificationItemRemote), nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
arc.mojom.mojom.ErrorNotificationHostPtr = arc.mojom.mojom.ErrorNotificationHostRemote;
arc.mojom.mojom.ErrorNotificationHostRequest = arc.mojom.mojom.ErrorNotificationHostPendingReceiver;


// Interface: ErrorNotificationInstance
arc.mojom.mojom.ErrorNotificationInstance = {};

arc.mojom.mojom.ErrorNotificationInstancePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.mojom.ErrorNotificationInstanceRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.ErrorNotificationInstance';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.mojom.ErrorNotificationInstancePendingReceiver,
      handle);
    this.$ = new arc.mojom.mojom.ErrorNotificationInstanceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.mojom.ErrorNotificationInstanceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  init(host_remote) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      arc.mojom.mojom.ErrorNotificationInstance_Init_ParamsSpec,
      null,
      [host_remote]);
  }

};

arc.mojom.mojom.ErrorNotificationInstance.getRemote = function() {
  let remote = new arc.mojom.mojom.ErrorNotificationInstanceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.ErrorNotificationInstance',
    'context');
  return remote.$;
};

// ParamsSpec for Init
arc.mojom.mojom.ErrorNotificationInstance_Init_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.ErrorNotificationInstance.Init_Params',
      packedSize: 16,
      fields: [
        { name: 'host_remote', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(arc.mojom.ErrorNotificationHostRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
arc.mojom.mojom.ErrorNotificationInstancePtr = arc.mojom.mojom.ErrorNotificationInstanceRemote;
arc.mojom.mojom.ErrorNotificationInstanceRequest = arc.mojom.mojom.ErrorNotificationInstancePendingReceiver;


// Interface: ErrorNotificationItem
arc.mojom.mojom.ErrorNotificationItem = {};

arc.mojom.mojom.ErrorNotificationItemPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.mojom.ErrorNotificationItemRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.ErrorNotificationItem';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.mojom.ErrorNotificationItemPendingReceiver,
      handle);
    this.$ = new arc.mojom.mojom.ErrorNotificationItemRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.mojom.ErrorNotificationItemRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  closeErrorNotification() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      arc.mojom.mojom.ErrorNotificationItem_CloseErrorNotification_ParamsSpec,
      null,
      []);
  }

};

arc.mojom.mojom.ErrorNotificationItem.getRemote = function() {
  let remote = new arc.mojom.mojom.ErrorNotificationItemRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.ErrorNotificationItem',
    'context');
  return remote.$;
};

// ParamsSpec for CloseErrorNotification
arc.mojom.mojom.ErrorNotificationItem_CloseErrorNotification_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.ErrorNotificationItem.CloseErrorNotification_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Legacy compatibility
arc.mojom.mojom.ErrorNotificationItemPtr = arc.mojom.mojom.ErrorNotificationItemRemote;
arc.mojom.mojom.ErrorNotificationItemRequest = arc.mojom.mojom.ErrorNotificationItemPendingReceiver;


// Interface: ErrorNotificationActionHandler
arc.mojom.mojom.ErrorNotificationActionHandler = {};

arc.mojom.mojom.ErrorNotificationActionHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.mojom.ErrorNotificationActionHandlerRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.ErrorNotificationActionHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.mojom.ErrorNotificationActionHandlerPendingReceiver,
      handle);
    this.$ = new arc.mojom.mojom.ErrorNotificationActionHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.mojom.ErrorNotificationActionHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onNotificationButtonClicked(buttonIndex) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      arc.mojom.mojom.ErrorNotificationActionHandler_OnNotificationButtonClicked_ParamsSpec,
      null,
      [buttonIndex]);
  }

  onNotificationClosed() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      arc.mojom.mojom.ErrorNotificationActionHandler_OnNotificationClosed_ParamsSpec,
      null,
      []);
  }

};

arc.mojom.mojom.ErrorNotificationActionHandler.getRemote = function() {
  let remote = new arc.mojom.mojom.ErrorNotificationActionHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.ErrorNotificationActionHandler',
    'context');
  return remote.$;
};

// ParamsSpec for OnNotificationButtonClicked
arc.mojom.mojom.ErrorNotificationActionHandler_OnNotificationButtonClicked_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.ErrorNotificationActionHandler.OnNotificationButtonClicked_Params',
      packedSize: 16,
      fields: [
        { name: 'buttonIndex', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnNotificationClosed
arc.mojom.mojom.ErrorNotificationActionHandler_OnNotificationClosed_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.ErrorNotificationActionHandler.OnNotificationClosed_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Legacy compatibility
arc.mojom.mojom.ErrorNotificationActionHandlerPtr = arc.mojom.mojom.ErrorNotificationActionHandlerRemote;
arc.mojom.mojom.ErrorNotificationActionHandlerRequest = arc.mojom.mojom.ErrorNotificationActionHandlerPendingReceiver;

