// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/error_notification.mojom
// Module: arc.mojom

'use strict';

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};

arc.mojom.ErrorTypeSpec = { $: mojo.internal.Enum() };
arc.mojom.ErrorDetailsSpec = { $: {} };
arc.mojom.ErrorNotificationHost = {};
arc.mojom.ErrorNotificationHost.$interfaceName = 'arc.mojom.ErrorNotificationHost';
arc.mojom.ErrorNotificationHost_SendErrorDetails_ParamsSpec = { $: {} };
arc.mojom.ErrorNotificationHost_SendErrorDetails_ResponseParamsSpec = { $: {} };
arc.mojom.ErrorNotificationInstance = {};
arc.mojom.ErrorNotificationInstance.$interfaceName = 'arc.mojom.ErrorNotificationInstance';
arc.mojom.ErrorNotificationInstance_Init_ParamsSpec = { $: {} };
arc.mojom.ErrorNotificationInstance_Init_ResponseParamsSpec = { $: {} };
arc.mojom.ErrorNotificationItem = {};
arc.mojom.ErrorNotificationItem.$interfaceName = 'arc.mojom.ErrorNotificationItem';
arc.mojom.ErrorNotificationItem_CloseErrorNotification_ParamsSpec = { $: {} };
arc.mojom.ErrorNotificationActionHandler = {};
arc.mojom.ErrorNotificationActionHandler.$interfaceName = 'arc.mojom.ErrorNotificationActionHandler';
arc.mojom.ErrorNotificationActionHandler_OnNotificationButtonClicked_ParamsSpec = { $: {} };
arc.mojom.ErrorNotificationActionHandler_OnNotificationClosed_ParamsSpec = { $: {} };

// Enum: ErrorType
arc.mojom.ErrorType = {
  CRASH: 0,
  ANR: 1,
};

// Struct: ErrorDetails
mojo.internal.Struct(
    arc.mojom.ErrorDetailsSpec, 'arc.mojom.ErrorDetails', [
      mojo.internal.StructField('name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('title', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('type', 16, 0, arc.mojom.ErrorTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('buttonLabels', 24, 0, mojo.internal.Array(mojo.internal.String, false), null, true, 0, undefined),
    ],
    [[0, 40]]);

// Interface: ErrorNotificationHost
mojo.internal.Struct(
    arc.mojom.ErrorNotificationHost_SendErrorDetails_ParamsSpec, 'arc.mojom.ErrorNotificationHost_SendErrorDetails_Params', [
      mojo.internal.StructField('details', 0, 0, arc.mojom.ErrorDetailsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('action_handler', 8, 0, mojo.internal.InterfaceProxy(arc.mojom.ErrorNotificationActionHandlerSpec), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    arc.mojom.ErrorNotificationHost_SendErrorDetails_ResponseParamsSpec, 'arc.mojom.ErrorNotificationHost_SendErrorDetails_ResponseParams', [
      mojo.internal.StructField('item', 0, 0, mojo.internal.InterfaceProxy(arc.mojom.ErrorNotificationItemSpec), null, true, 0, undefined),
    ],
    [[0, 16]]);

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
      [details, action_handler],
      false);
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

arc.mojom.ErrorNotificationHostReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (message) => {
      const header = message.header;
      if (!header) return;
      switch (header.ordinal) {
        case 0: {
          const params = arc.mojom.ErrorNotificationHost_SendErrorDetails_ParamsSpec.$.decode(message.payload);
          const result = this.impl.sendErrorDetails(params.details, params.action_handler);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.ErrorNotificationHost_SendErrorDetails_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
    }});
  }
};

arc.mojom.ErrorNotificationHostReceiver = arc.mojom.ErrorNotificationHostReceiver;

arc.mojom.ErrorNotificationHostPtr = arc.mojom.ErrorNotificationHostRemote;
arc.mojom.ErrorNotificationHostRequest = arc.mojom.ErrorNotificationHostPendingReceiver;


// Interface: ErrorNotificationInstance
mojo.internal.Struct(
    arc.mojom.ErrorNotificationInstance_Init_ParamsSpec, 'arc.mojom.ErrorNotificationInstance_Init_Params', [
      mojo.internal.StructField('host_remote', 0, 0, mojo.internal.InterfaceProxy(arc.mojom.ErrorNotificationHostSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.ErrorNotificationInstance_Init_ResponseParamsSpec, 'arc.mojom.ErrorNotificationInstance_Init_ResponseParams', [
    ],
    [[0, 8]]);

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
      arc.mojom.ErrorNotificationInstance_Init_ResponseParamsSpec,
      [host_remote],
      false);
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

arc.mojom.ErrorNotificationInstanceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (message) => {
      const header = message.header;
      if (!header) return;
      switch (header.ordinal) {
        case 0: {
          const params = arc.mojom.ErrorNotificationInstance_Init_ParamsSpec.$.decode(message.payload);
          const result = this.impl.init(params.host_remote);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.ErrorNotificationInstance_Init_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
    }});
  }
};

arc.mojom.ErrorNotificationInstanceReceiver = arc.mojom.ErrorNotificationInstanceReceiver;

arc.mojom.ErrorNotificationInstancePtr = arc.mojom.ErrorNotificationInstanceRemote;
arc.mojom.ErrorNotificationInstanceRequest = arc.mojom.ErrorNotificationInstancePendingReceiver;


// Interface: ErrorNotificationItem
mojo.internal.Struct(
    arc.mojom.ErrorNotificationItem_CloseErrorNotification_ParamsSpec, 'arc.mojom.ErrorNotificationItem_CloseErrorNotification_Params', [
    ],
    [[0, 8]]);

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
      [],
      false);
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

arc.mojom.ErrorNotificationItemReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (message) => {
      const header = message.header;
      if (!header) return;
      switch (header.ordinal) {
        case 0: {
          const params = arc.mojom.ErrorNotificationItem_CloseErrorNotification_ParamsSpec.$.decode(message.payload);
          const result = this.impl.closeErrorNotification();
          break;
        }
      }
    }});
  }
};

arc.mojom.ErrorNotificationItemReceiver = arc.mojom.ErrorNotificationItemReceiver;

arc.mojom.ErrorNotificationItemPtr = arc.mojom.ErrorNotificationItemRemote;
arc.mojom.ErrorNotificationItemRequest = arc.mojom.ErrorNotificationItemPendingReceiver;


// Interface: ErrorNotificationActionHandler
mojo.internal.Struct(
    arc.mojom.ErrorNotificationActionHandler_OnNotificationButtonClicked_ParamsSpec, 'arc.mojom.ErrorNotificationActionHandler_OnNotificationButtonClicked_Params', [
      mojo.internal.StructField('buttonIndex', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.ErrorNotificationActionHandler_OnNotificationClosed_ParamsSpec, 'arc.mojom.ErrorNotificationActionHandler_OnNotificationClosed_Params', [
    ],
    [[0, 8]]);

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
      [buttonIndex],
      false);
  }

  onNotificationClosed() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      arc.mojom.ErrorNotificationActionHandler_OnNotificationClosed_ParamsSpec,
      null,
      [],
      false);
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

arc.mojom.ErrorNotificationActionHandlerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (message) => {
      const header = message.header;
      if (!header) return;
      switch (header.ordinal) {
        case 0: {
          const params = arc.mojom.ErrorNotificationActionHandler_OnNotificationButtonClicked_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onNotificationButtonClicked(params.buttonIndex);
          break;
        }
        case 1: {
          const params = arc.mojom.ErrorNotificationActionHandler_OnNotificationClosed_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onNotificationClosed();
          break;
        }
      }
    }});
  }
};

arc.mojom.ErrorNotificationActionHandlerReceiver = arc.mojom.ErrorNotificationActionHandlerReceiver;

arc.mojom.ErrorNotificationActionHandlerPtr = arc.mojom.ErrorNotificationActionHandlerRemote;
arc.mojom.ErrorNotificationActionHandlerRequest = arc.mojom.ErrorNotificationActionHandlerPendingReceiver;

