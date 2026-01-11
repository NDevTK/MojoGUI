// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/ash/settings/pages/files/mojom/one_drive_handler.mojom
// Module: ash.settings.one_drive.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var ash = ash || {};
ash.settings = ash.settings || {};
ash.settings.one_drive = ash.settings.one_drive || {};
ash.settings.one_drive.mojom = ash.settings.one_drive.mojom || {};

ash.settings.one_drive.mojom.PageHandlerFactory = {};
ash.settings.one_drive.mojom.PageHandlerFactory.$interfaceName = 'ash.settings.one_drive.mojom.PageHandlerFactory';
ash.settings.one_drive.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec = { $: {} };
ash.settings.one_drive.mojom.PageHandler = {};
ash.settings.one_drive.mojom.PageHandler.$interfaceName = 'ash.settings.one_drive.mojom.PageHandler';
ash.settings.one_drive.mojom.PageHandler_GetUserEmailAddress_ParamsSpec = { $: {} };
ash.settings.one_drive.mojom.PageHandler_GetUserEmailAddress_ResponseParamsSpec = { $: {} };
ash.settings.one_drive.mojom.PageHandler_ConnectToOneDrive_ParamsSpec = { $: {} };
ash.settings.one_drive.mojom.PageHandler_ConnectToOneDrive_ResponseParamsSpec = { $: {} };
ash.settings.one_drive.mojom.PageHandler_DisconnectFromOneDrive_ParamsSpec = { $: {} };
ash.settings.one_drive.mojom.PageHandler_DisconnectFromOneDrive_ResponseParamsSpec = { $: {} };
ash.settings.one_drive.mojom.PageHandler_OpenOneDriveFolder_ParamsSpec = { $: {} };
ash.settings.one_drive.mojom.PageHandler_OpenOneDriveFolder_ResponseParamsSpec = { $: {} };
ash.settings.one_drive.mojom.Page = {};
ash.settings.one_drive.mojom.Page.$interfaceName = 'ash.settings.one_drive.mojom.Page';
ash.settings.one_drive.mojom.Page_OnODFSMountOrUnmount_ParamsSpec = { $: {} };
ash.settings.one_drive.mojom.Page_OnAllowUserToRemoveODFSChanged_ParamsSpec = { $: {} };

// Interface: PageHandlerFactory
mojo.internal.Struct(
    ash.settings.one_drive.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec, 'ash.settings.one_drive.mojom.PageHandlerFactory_CreatePageHandler_Params', [
      mojo.internal.StructField('page', 0, 0, mojo.internal.InterfaceProxy(ash.settings.one_drive.mojom.PageRemote), null, false, 0, undefined),
      mojo.internal.StructField('handler', 8, 0, mojo.internal.InterfaceRequest(ash.settings.one_drive.mojom.PageHandlerRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

ash.settings.one_drive.mojom.PageHandlerFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.settings.one_drive.mojom.PageHandlerFactoryRemote = class {
  static get $interfaceName() {
    return 'ash.settings.one_drive.mojom.PageHandlerFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.settings.one_drive.mojom.PageHandlerFactoryPendingReceiver,
      handle);
    this.$ = new ash.settings.one_drive.mojom.PageHandlerFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  createPageHandler(page, handler) {
    return this.$.createPageHandler(page, handler);
  }
};

ash.settings.one_drive.mojom.PageHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('PageHandlerFactory', [
      { explicit: null },
    ]);
  }

  createPageHandler(page, handler) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      ash.settings.one_drive.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec,
      null,
      [page, handler],
      false);
  }

};

ash.settings.one_drive.mojom.PageHandlerFactory.getRemote = function() {
  let remote = new ash.settings.one_drive.mojom.PageHandlerFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.settings.one_drive.mojom.PageHandlerFactory',
    'context');
  return remote.$;
};

ash.settings.one_drive.mojom.PageHandlerFactoryReceiver = class {
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
        message = {{ header: args[1], payload: payload, handles: args[3] || [] }};
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.settings.one_drive.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.settings.one_drive.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec.$.structSpec);
          const result = this.impl.createPageHandler(params.page, params.handler);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

ash.settings.one_drive.mojom.PageHandlerFactoryReceiver = ash.settings.one_drive.mojom.PageHandlerFactoryReceiver;

ash.settings.one_drive.mojom.PageHandlerFactoryPtr = ash.settings.one_drive.mojom.PageHandlerFactoryRemote;
ash.settings.one_drive.mojom.PageHandlerFactoryRequest = ash.settings.one_drive.mojom.PageHandlerFactoryPendingReceiver;


// Interface: PageHandler
mojo.internal.Struct(
    ash.settings.one_drive.mojom.PageHandler_GetUserEmailAddress_ParamsSpec, 'ash.settings.one_drive.mojom.PageHandler_GetUserEmailAddress_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.settings.one_drive.mojom.PageHandler_GetUserEmailAddress_ResponseParamsSpec, 'ash.settings.one_drive.mojom.PageHandler_GetUserEmailAddress_ResponseParams', [
      mojo.internal.StructField('email', 0, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.settings.one_drive.mojom.PageHandler_ConnectToOneDrive_ParamsSpec, 'ash.settings.one_drive.mojom.PageHandler_ConnectToOneDrive_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.settings.one_drive.mojom.PageHandler_ConnectToOneDrive_ResponseParamsSpec, 'ash.settings.one_drive.mojom.PageHandler_ConnectToOneDrive_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.settings.one_drive.mojom.PageHandler_DisconnectFromOneDrive_ParamsSpec, 'ash.settings.one_drive.mojom.PageHandler_DisconnectFromOneDrive_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.settings.one_drive.mojom.PageHandler_DisconnectFromOneDrive_ResponseParamsSpec, 'ash.settings.one_drive.mojom.PageHandler_DisconnectFromOneDrive_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.settings.one_drive.mojom.PageHandler_OpenOneDriveFolder_ParamsSpec, 'ash.settings.one_drive.mojom.PageHandler_OpenOneDriveFolder_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.settings.one_drive.mojom.PageHandler_OpenOneDriveFolder_ResponseParamsSpec, 'ash.settings.one_drive.mojom.PageHandler_OpenOneDriveFolder_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

ash.settings.one_drive.mojom.PageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.settings.one_drive.mojom.PageHandlerRemote = class {
  static get $interfaceName() {
    return 'ash.settings.one_drive.mojom.PageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.settings.one_drive.mojom.PageHandlerPendingReceiver,
      handle);
    this.$ = new ash.settings.one_drive.mojom.PageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  getUserEmailAddress() {
    return this.$.getUserEmailAddress();
  }
  connectToOneDrive() {
    return this.$.connectToOneDrive();
  }
  disconnectFromOneDrive() {
    return this.$.disconnectFromOneDrive();
  }
  openOneDriveFolder() {
    return this.$.openOneDriveFolder();
  }
};

ash.settings.one_drive.mojom.PageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('PageHandler', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  getUserEmailAddress() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      ash.settings.one_drive.mojom.PageHandler_GetUserEmailAddress_ParamsSpec,
      ash.settings.one_drive.mojom.PageHandler_GetUserEmailAddress_ResponseParamsSpec,
      [],
      false);
  }

  connectToOneDrive() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      ash.settings.one_drive.mojom.PageHandler_ConnectToOneDrive_ParamsSpec,
      ash.settings.one_drive.mojom.PageHandler_ConnectToOneDrive_ResponseParamsSpec,
      [],
      false);
  }

  disconnectFromOneDrive() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      ash.settings.one_drive.mojom.PageHandler_DisconnectFromOneDrive_ParamsSpec,
      ash.settings.one_drive.mojom.PageHandler_DisconnectFromOneDrive_ResponseParamsSpec,
      [],
      false);
  }

  openOneDriveFolder() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      ash.settings.one_drive.mojom.PageHandler_OpenOneDriveFolder_ParamsSpec,
      ash.settings.one_drive.mojom.PageHandler_OpenOneDriveFolder_ResponseParamsSpec,
      [],
      false);
  }

};

ash.settings.one_drive.mojom.PageHandler.getRemote = function() {
  let remote = new ash.settings.one_drive.mojom.PageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.settings.one_drive.mojom.PageHandler',
    'context');
  return remote.$;
};

ash.settings.one_drive.mojom.PageHandlerReceiver = class {
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
        message = {{ header: args[1], payload: payload, handles: args[3] || [] }};
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.settings.one_drive.mojom.PageHandler_GetUserEmailAddress_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.settings.one_drive.mojom.PageHandler_ConnectToOneDrive_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.settings.one_drive.mojom.PageHandler_DisconnectFromOneDrive_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.settings.one_drive.mojom.PageHandler_OpenOneDriveFolder_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.settings.one_drive.mojom.PageHandler_GetUserEmailAddress_ParamsSpec.$.structSpec);
          const result = this.impl.getUserEmailAddress();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.settings.one_drive.mojom.PageHandler_GetUserEmailAddress_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.settings.one_drive.mojom.PageHandler_ConnectToOneDrive_ParamsSpec.$.structSpec);
          const result = this.impl.connectToOneDrive();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.settings.one_drive.mojom.PageHandler_ConnectToOneDrive_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.settings.one_drive.mojom.PageHandler_DisconnectFromOneDrive_ParamsSpec.$.structSpec);
          const result = this.impl.disconnectFromOneDrive();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.settings.one_drive.mojom.PageHandler_DisconnectFromOneDrive_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.settings.one_drive.mojom.PageHandler_OpenOneDriveFolder_ParamsSpec.$.structSpec);
          const result = this.impl.openOneDriveFolder();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.settings.one_drive.mojom.PageHandler_OpenOneDriveFolder_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

ash.settings.one_drive.mojom.PageHandlerReceiver = ash.settings.one_drive.mojom.PageHandlerReceiver;

ash.settings.one_drive.mojom.PageHandlerPtr = ash.settings.one_drive.mojom.PageHandlerRemote;
ash.settings.one_drive.mojom.PageHandlerRequest = ash.settings.one_drive.mojom.PageHandlerPendingReceiver;


// Interface: Page
mojo.internal.Struct(
    ash.settings.one_drive.mojom.Page_OnODFSMountOrUnmount_ParamsSpec, 'ash.settings.one_drive.mojom.Page_OnODFSMountOrUnmount_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.settings.one_drive.mojom.Page_OnAllowUserToRemoveODFSChanged_ParamsSpec, 'ash.settings.one_drive.mojom.Page_OnAllowUserToRemoveODFSChanged_Params', [
      mojo.internal.StructField('is_allowed', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

ash.settings.one_drive.mojom.PagePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.settings.one_drive.mojom.PageRemote = class {
  static get $interfaceName() {
    return 'ash.settings.one_drive.mojom.Page';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.settings.one_drive.mojom.PagePendingReceiver,
      handle);
    this.$ = new ash.settings.one_drive.mojom.PageRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onODFSMountOrUnmount() {
    return this.$.onODFSMountOrUnmount();
  }
  onAllowUserToRemoveODFSChanged(is_allowed) {
    return this.$.onAllowUserToRemoveODFSChanged(is_allowed);
  }
};

ash.settings.one_drive.mojom.PageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('Page', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  onODFSMountOrUnmount() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      ash.settings.one_drive.mojom.Page_OnODFSMountOrUnmount_ParamsSpec,
      null,
      [],
      false);
  }

  onAllowUserToRemoveODFSChanged(is_allowed) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      ash.settings.one_drive.mojom.Page_OnAllowUserToRemoveODFSChanged_ParamsSpec,
      null,
      [is_allowed],
      false);
  }

};

ash.settings.one_drive.mojom.Page.getRemote = function() {
  let remote = new ash.settings.one_drive.mojom.PageRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.settings.one_drive.mojom.Page',
    'context');
  return remote.$;
};

ash.settings.one_drive.mojom.PageReceiver = class {
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
        message = {{ header: args[1], payload: payload, handles: args[3] || [] }};
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.settings.one_drive.mojom.Page_OnODFSMountOrUnmount_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.settings.one_drive.mojom.Page_OnAllowUserToRemoveODFSChanged_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.settings.one_drive.mojom.Page_OnODFSMountOrUnmount_ParamsSpec.$.structSpec);
          const result = this.impl.onODFSMountOrUnmount();
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.settings.one_drive.mojom.Page_OnAllowUserToRemoveODFSChanged_ParamsSpec.$.structSpec);
          const result = this.impl.onAllowUserToRemoveODFSChanged(params.is_allowed);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

ash.settings.one_drive.mojom.PageReceiver = ash.settings.one_drive.mojom.PageReceiver;

ash.settings.one_drive.mojom.PagePtr = ash.settings.one_drive.mojom.PageRemote;
ash.settings.one_drive.mojom.PageRequest = ash.settings.one_drive.mojom.PagePendingReceiver;

