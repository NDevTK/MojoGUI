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
arc.mojom.ErrorTypeSpec = { $: mojo.internal.Enum() };

// Struct: ErrorDetails
arc.mojom.ErrorDetailsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.ErrorDetails',
      packedSize: 40,
      fields: [
        { name: 'name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'title', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'type', packedOffset: 16, packedBitOffset: 0, type: arc.mojom.ErrorTypeSpec, nullable: false, minVersion: 0 },
        { name: 'buttonLabels', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.String, false), nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
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

  sendErrorDetails(details, action_handler) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      arc.mojom.ErrorNotificationHost_SendErrorDetails_ParamsSpec,
      arc.mojom.ErrorNotificationHost_SendErrorDetails_ResponseParamsSpec,
      [details, action_handler]);
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

// ParamsSpec for SendErrorDetails
arc.mojom.ErrorNotificationHost_SendErrorDetails_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.ErrorNotificationHost.SendErrorDetails_Params',
      packedSize: 24,
      fields: [
        { name: 'details', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.ErrorDetailsSpec, nullable: false, minVersion: 0 },
        { name: 'action_handler', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

arc.mojom.ErrorNotificationHost_SendErrorDetails_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.ErrorNotificationHost.SendErrorDetails_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'item', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
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

  init(host_remote) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      arc.mojom.ErrorNotificationInstance_Init_ParamsSpec,
      null,
      [host_remote]);
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

// ParamsSpec for Init
arc.mojom.ErrorNotificationInstance_Init_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.ErrorNotificationInstance.Init_Params',
      packedSize: 16,
      fields: [
        { name: 'host_remote', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
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

  closeErrorNotification() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      arc.mojom.ErrorNotificationItem_CloseErrorNotification_ParamsSpec,
      null,
      []);
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

// ParamsSpec for CloseErrorNotification
arc.mojom.ErrorNotificationItem_CloseErrorNotification_ParamsSpec = {
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

  onNotificationButtonClicked(buttonIndex) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      arc.mojom.ErrorNotificationActionHandler_OnNotificationButtonClicked_ParamsSpec,
      null,
      [buttonIndex]);
  }

  onNotificationClosed() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      arc.mojom.ErrorNotificationActionHandler_OnNotificationClosed_ParamsSpec,
      null,
      []);
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

// ParamsSpec for OnNotificationButtonClicked
arc.mojom.ErrorNotificationActionHandler_OnNotificationButtonClicked_ParamsSpec = {
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
arc.mojom.ErrorNotificationActionHandler_OnNotificationClosed_ParamsSpec = {
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
arc.mojom.ErrorNotificationActionHandlerPtr = arc.mojom.ErrorNotificationActionHandlerRemote;
arc.mojom.ErrorNotificationActionHandlerRequest = arc.mojom.ErrorNotificationActionHandlerPendingReceiver;

