// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/signin/history_sync_optin/history_sync_optin.mojom
// Module: history_sync_optin.mojom

// Module namespace
var history_sync_optin = history_sync_optin || {};
history_sync_optin.mojom = history_sync_optin.mojom || {};
var url = url || {};

history_sync_optin.mojom.LaunchContextSpec = { $: mojo.internal.Enum() };
history_sync_optin.mojom.ScreenModeSpec = { $: mojo.internal.Enum() };
history_sync_optin.mojom.AccountInfoSpec = { $: {} };
history_sync_optin.mojom.PageHandlerFactory = {};
history_sync_optin.mojom.PageHandlerFactory.$interfaceName = 'history_sync_optin.mojom.PageHandlerFactory';
history_sync_optin.mojom.PageHandlerFactory_CreateHistorySyncOptinHandler_ParamsSpec = { $: {} };
history_sync_optin.mojom.PageHandler = {};
history_sync_optin.mojom.PageHandler.$interfaceName = 'history_sync_optin.mojom.PageHandler';
history_sync_optin.mojom.PageHandler_Accept_ParamsSpec = { $: {} };
history_sync_optin.mojom.PageHandler_Reject_ParamsSpec = { $: {} };
history_sync_optin.mojom.PageHandler_RequestAccountInfo_ParamsSpec = { $: {} };
history_sync_optin.mojom.PageHandler_UpdateDialogHeight_ParamsSpec = { $: {} };
history_sync_optin.mojom.Page = {};
history_sync_optin.mojom.Page.$interfaceName = 'history_sync_optin.mojom.Page';
history_sync_optin.mojom.Page_SendAccountInfo_ParamsSpec = { $: {} };
history_sync_optin.mojom.Page_SendScreenMode_ParamsSpec = { $: {} };

// Enum: LaunchContext
history_sync_optin.mojom.LaunchContext = {
  kWindow: 0,
  kModal: 1,
};

// Enum: ScreenMode
history_sync_optin.mojom.ScreenMode = {
  kPending: 0,
  kRestricted: 1,
  kUnrestricted: 2,
  kDeadlined: 3,
};

// Struct: AccountInfo
mojo.internal.Struct(
    history_sync_optin.mojom.AccountInfoSpec, 'history_sync_optin.mojom.AccountInfo', [
      mojo.internal.StructField('account_image_src', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Interface: PageHandlerFactory
mojo.internal.Struct(
    history_sync_optin.mojom.PageHandlerFactory_CreateHistorySyncOptinHandler_ParamsSpec, 'history_sync_optin.mojom.PageHandlerFactory_CreateHistorySyncOptinHandler_Params', [
      mojo.internal.StructField('page', 0, 0, mojo.internal.InterfaceProxy(history_sync_optin.mojom.PageRemote), null, false, 0, undefined),
      mojo.internal.StructField('handler', 8, 0, mojo.internal.InterfaceRequest(history_sync_optin.mojom.PageHandlerRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

history_sync_optin.mojom.PageHandlerFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

history_sync_optin.mojom.PageHandlerFactoryRemote = class {
  static get $interfaceName() {
    return 'history_sync_optin.mojom.PageHandlerFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      history_sync_optin.mojom.PageHandlerFactoryPendingReceiver,
      handle);
    this.$ = new history_sync_optin.mojom.PageHandlerFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  createHistorySyncOptinHandler(page, handler) {
    return this.$.createHistorySyncOptinHandler(page, handler);
  }
};

history_sync_optin.mojom.PageHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('PageHandlerFactory', [
      { explicit: null },
    ]);
  }

  createHistorySyncOptinHandler(page, handler) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      history_sync_optin.mojom.PageHandlerFactory_CreateHistorySyncOptinHandler_ParamsSpec,
      null,
      [page, handler],
      false);
  }

};

history_sync_optin.mojom.PageHandlerFactory.getRemote = function() {
  let remote = new history_sync_optin.mojom.PageHandlerFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'history_sync_optin.mojom.PageHandlerFactory',
    'context');
  return remote.$;
};

history_sync_optin.mojom.PageHandlerFactoryReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('PageHandlerFactory', [
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    if (this.router_.onConnectionError) {
      this.router_.onConnectionError.addListener(() => {
         console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
      });
    }
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
             decoder.decodeStructInline(history_sync_optin.mojom.PageHandlerFactory_CreateHistorySyncOptinHandler_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(history_sync_optin.mojom.PageHandlerFactory_CreateHistorySyncOptinHandler_ParamsSpec.$.structSpec);
          const result = this.impl.createHistorySyncOptinHandler(params.page, params.handler);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

history_sync_optin.mojom.PageHandlerFactoryReceiver = history_sync_optin.mojom.PageHandlerFactoryReceiver;

history_sync_optin.mojom.PageHandlerFactoryPtr = history_sync_optin.mojom.PageHandlerFactoryRemote;
history_sync_optin.mojom.PageHandlerFactoryRequest = history_sync_optin.mojom.PageHandlerFactoryPendingReceiver;


// Interface: PageHandler
mojo.internal.Struct(
    history_sync_optin.mojom.PageHandler_Accept_ParamsSpec, 'history_sync_optin.mojom.PageHandler_Accept_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    history_sync_optin.mojom.PageHandler_Reject_ParamsSpec, 'history_sync_optin.mojom.PageHandler_Reject_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    history_sync_optin.mojom.PageHandler_RequestAccountInfo_ParamsSpec, 'history_sync_optin.mojom.PageHandler_RequestAccountInfo_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    history_sync_optin.mojom.PageHandler_UpdateDialogHeight_ParamsSpec, 'history_sync_optin.mojom.PageHandler_UpdateDialogHeight_Params', [
      mojo.internal.StructField('height', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

history_sync_optin.mojom.PageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

history_sync_optin.mojom.PageHandlerRemote = class {
  static get $interfaceName() {
    return 'history_sync_optin.mojom.PageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      history_sync_optin.mojom.PageHandlerPendingReceiver,
      handle);
    this.$ = new history_sync_optin.mojom.PageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  accept() {
    return this.$.accept();
  }
  reject() {
    return this.$.reject();
  }
  requestAccountInfo() {
    return this.$.requestAccountInfo();
  }
  updateDialogHeight(height) {
    return this.$.updateDialogHeight(height);
  }
};

history_sync_optin.mojom.PageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('PageHandler', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  accept() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      history_sync_optin.mojom.PageHandler_Accept_ParamsSpec,
      null,
      [],
      false);
  }

  reject() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      history_sync_optin.mojom.PageHandler_Reject_ParamsSpec,
      null,
      [],
      false);
  }

  requestAccountInfo() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      history_sync_optin.mojom.PageHandler_RequestAccountInfo_ParamsSpec,
      null,
      [],
      false);
  }

  updateDialogHeight(height) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      history_sync_optin.mojom.PageHandler_UpdateDialogHeight_ParamsSpec,
      null,
      [height],
      false);
  }

};

history_sync_optin.mojom.PageHandler.getRemote = function() {
  let remote = new history_sync_optin.mojom.PageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'history_sync_optin.mojom.PageHandler',
    'context');
  return remote.$;
};

history_sync_optin.mojom.PageHandlerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('PageHandler', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    if (this.router_.onConnectionError) {
      this.router_.onConnectionError.addListener(() => {
         console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
      });
    }
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
             decoder.decodeStructInline(history_sync_optin.mojom.PageHandler_Accept_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(history_sync_optin.mojom.PageHandler_Reject_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(history_sync_optin.mojom.PageHandler_RequestAccountInfo_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(history_sync_optin.mojom.PageHandler_UpdateDialogHeight_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(history_sync_optin.mojom.PageHandler_Accept_ParamsSpec.$.structSpec);
          const result = this.impl.accept();
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(history_sync_optin.mojom.PageHandler_Reject_ParamsSpec.$.structSpec);
          const result = this.impl.reject();
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(history_sync_optin.mojom.PageHandler_RequestAccountInfo_ParamsSpec.$.structSpec);
          const result = this.impl.requestAccountInfo();
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(history_sync_optin.mojom.PageHandler_UpdateDialogHeight_ParamsSpec.$.structSpec);
          const result = this.impl.updateDialogHeight(params.height);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

history_sync_optin.mojom.PageHandlerReceiver = history_sync_optin.mojom.PageHandlerReceiver;

history_sync_optin.mojom.PageHandlerPtr = history_sync_optin.mojom.PageHandlerRemote;
history_sync_optin.mojom.PageHandlerRequest = history_sync_optin.mojom.PageHandlerPendingReceiver;


// Interface: Page
mojo.internal.Struct(
    history_sync_optin.mojom.Page_SendAccountInfo_ParamsSpec, 'history_sync_optin.mojom.Page_SendAccountInfo_Params', [
      mojo.internal.StructField('account_info', 0, 0, history_sync_optin.mojom.AccountInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    history_sync_optin.mojom.Page_SendScreenMode_ParamsSpec, 'history_sync_optin.mojom.Page_SendScreenMode_Params', [
      mojo.internal.StructField('screen_mode', 0, 0, history_sync_optin.mojom.ScreenModeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

history_sync_optin.mojom.PagePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

history_sync_optin.mojom.PageRemote = class {
  static get $interfaceName() {
    return 'history_sync_optin.mojom.Page';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      history_sync_optin.mojom.PagePendingReceiver,
      handle);
    this.$ = new history_sync_optin.mojom.PageRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  sendAccountInfo(account_info) {
    return this.$.sendAccountInfo(account_info);
  }
  sendScreenMode(screen_mode) {
    return this.$.sendScreenMode(screen_mode);
  }
};

history_sync_optin.mojom.PageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('Page', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  sendAccountInfo(account_info) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      history_sync_optin.mojom.Page_SendAccountInfo_ParamsSpec,
      null,
      [account_info],
      false);
  }

  sendScreenMode(screen_mode) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      history_sync_optin.mojom.Page_SendScreenMode_ParamsSpec,
      null,
      [screen_mode],
      false);
  }

};

history_sync_optin.mojom.Page.getRemote = function() {
  let remote = new history_sync_optin.mojom.PageRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'history_sync_optin.mojom.Page',
    'context');
  return remote.$;
};

history_sync_optin.mojom.PageReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('Page', [
      { explicit: null },
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    if (this.router_.onConnectionError) {
      this.router_.onConnectionError.addListener(() => {
         console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
      });
    }
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
             decoder.decodeStructInline(history_sync_optin.mojom.Page_SendAccountInfo_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(history_sync_optin.mojom.Page_SendScreenMode_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(history_sync_optin.mojom.Page_SendAccountInfo_ParamsSpec.$.structSpec);
          const result = this.impl.sendAccountInfo(params.account_info);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(history_sync_optin.mojom.Page_SendScreenMode_ParamsSpec.$.structSpec);
          const result = this.impl.sendScreenMode(params.screen_mode);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

history_sync_optin.mojom.PageReceiver = history_sync_optin.mojom.PageReceiver;

history_sync_optin.mojom.PagePtr = history_sync_optin.mojom.PageRemote;
history_sync_optin.mojom.PageRequest = history_sync_optin.mojom.PagePendingReceiver;

