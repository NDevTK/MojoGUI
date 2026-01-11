// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/error_notification.mojom
// Module: arc.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

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
      mojo.internal.StructField('action_handler', 8, 0, mojo.internal.InterfaceProxy(arc.mojom.ErrorNotificationActionHandlerRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    arc.mojom.ErrorNotificationHost_SendErrorDetails_ResponseParamsSpec, 'arc.mojom.ErrorNotificationHost_SendErrorDetails_ResponseParams', [
      mojo.internal.StructField('item', 0, 0, mojo.internal.InterfaceProxy(arc.mojom.ErrorNotificationItemRemote), null, true, 0, undefined),
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
  sendErrorDetails(details, action_handler) {
    return this.$.sendErrorDetails(details, action_handler);
  }
};

arc.mojom.ErrorNotificationHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ErrorNotificationHost', [
      { explicit: 0 },
    ]);
  }

  sendErrorDetails(details, action_handler) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
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
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ErrorNotificationHost', [
      { explicit: 0 },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.ErrorNotificationHost_SendErrorDetails_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.ErrorNotificationHost_SendErrorDetails_ParamsSpec.$.structSpec);
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
      } catch (err) {}
    });
  }
};

arc.mojom.ErrorNotificationHostReceiver = arc.mojom.ErrorNotificationHostReceiver;

arc.mojom.ErrorNotificationHostPtr = arc.mojom.ErrorNotificationHostRemote;
arc.mojom.ErrorNotificationHostRequest = arc.mojom.ErrorNotificationHostPendingReceiver;


// Interface: ErrorNotificationInstance
mojo.internal.Struct(
    arc.mojom.ErrorNotificationInstance_Init_ParamsSpec, 'arc.mojom.ErrorNotificationInstance_Init_Params', [
      mojo.internal.StructField('host_remote', 0, 0, mojo.internal.InterfaceProxy(arc.mojom.ErrorNotificationHostRemote), null, false, 0, undefined),
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
  init(host_remote) {
    return this.$.init(host_remote);
  }
};

arc.mojom.ErrorNotificationInstanceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ErrorNotificationInstance', [
      { explicit: 0 },
    ]);
  }

  init(host_remote) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
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
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ErrorNotificationInstance', [
      { explicit: 0 },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.ErrorNotificationInstance_Init_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.ErrorNotificationInstance_Init_ParamsSpec.$.structSpec);
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
      } catch (err) {}
    });
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
  closeErrorNotification() {
    return this.$.closeErrorNotification();
  }
};

arc.mojom.ErrorNotificationItemRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ErrorNotificationItem', [
      { explicit: 0 },
    ]);
  }

  closeErrorNotification() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
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
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ErrorNotificationItem', [
      { explicit: 0 },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.ErrorNotificationItem_CloseErrorNotification_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.ErrorNotificationItem_CloseErrorNotification_ParamsSpec.$.structSpec);
          const result = this.impl.closeErrorNotification();
          break;
        }
      }
      } catch (err) {}
    });
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
  onNotificationButtonClicked(buttonIndex) {
    return this.$.onNotificationButtonClicked(buttonIndex);
  }
  onNotificationClosed() {
    return this.$.onNotificationClosed();
  }
};

arc.mojom.ErrorNotificationActionHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ErrorNotificationActionHandler', [
      { explicit: 0 },
      { explicit: 1 },
    ]);
  }

  onNotificationButtonClicked(buttonIndex) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      arc.mojom.ErrorNotificationActionHandler_OnNotificationButtonClicked_ParamsSpec,
      null,
      [buttonIndex],
      false);
  }

  onNotificationClosed() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
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
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ErrorNotificationActionHandler', [
      { explicit: 0 },
      { explicit: 1 },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.ErrorNotificationActionHandler_OnNotificationButtonClicked_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.ErrorNotificationActionHandler_OnNotificationClosed_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.ErrorNotificationActionHandler_OnNotificationButtonClicked_ParamsSpec.$.structSpec);
          const result = this.impl.onNotificationButtonClicked(params.buttonIndex);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.ErrorNotificationActionHandler_OnNotificationClosed_ParamsSpec.$.structSpec);
          const result = this.impl.onNotificationClosed();
          break;
        }
      }
      } catch (err) {}
    });
  }
};

arc.mojom.ErrorNotificationActionHandlerReceiver = arc.mojom.ErrorNotificationActionHandlerReceiver;

arc.mojom.ErrorNotificationActionHandlerPtr = arc.mojom.ErrorNotificationActionHandlerRemote;
arc.mojom.ErrorNotificationActionHandlerRequest = arc.mojom.ErrorNotificationActionHandlerPendingReceiver;

