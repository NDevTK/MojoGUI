// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/ash/settings/pages/files/mojom/one_drive_handler.mojom
// Module: ash.settings.one_drive.mojom

'use strict';

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
      mojo.internal.StructField('page', 0, 0, mojo.internal.InterfaceProxy(ash.settings.one_drive.mojom.PageSpec), null, false, 0, undefined),
      mojo.internal.StructField('handler', 8, 0, mojo.internal.InterfaceRequest(ash.settings.one_drive.mojom.PageHandlerSpec), null, false, 0, undefined),
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
};

ash.settings.one_drive.mojom.PageHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createPageHandler(page, handler) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
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
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      switch (header.ordinal) {
        case 0: {
          const params = ash.settings.one_drive.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec.$.decode(message.payload);
          console.log('[GeneratedReceiver] Calling impl.createPageHandler');
          const result = this.impl.createPageHandler(params.page, params.handler);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
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
};

ash.settings.one_drive.mojom.PageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getUserEmailAddress() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.settings.one_drive.mojom.PageHandler_GetUserEmailAddress_ParamsSpec,
      ash.settings.one_drive.mojom.PageHandler_GetUserEmailAddress_ResponseParamsSpec,
      [],
      false);
  }

  connectToOneDrive() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.settings.one_drive.mojom.PageHandler_ConnectToOneDrive_ParamsSpec,
      ash.settings.one_drive.mojom.PageHandler_ConnectToOneDrive_ResponseParamsSpec,
      [],
      false);
  }

  disconnectFromOneDrive() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.settings.one_drive.mojom.PageHandler_DisconnectFromOneDrive_ParamsSpec,
      ash.settings.one_drive.mojom.PageHandler_DisconnectFromOneDrive_ResponseParamsSpec,
      [],
      false);
  }

  openOneDriveFolder() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
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
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      switch (header.ordinal) {
        case 0: {
          const params = ash.settings.one_drive.mojom.PageHandler_GetUserEmailAddress_ParamsSpec.$.decode(message.payload);
          console.log('[GeneratedReceiver] Calling impl.getUserEmailAddress');
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
          const params = ash.settings.one_drive.mojom.PageHandler_ConnectToOneDrive_ParamsSpec.$.decode(message.payload);
          console.log('[GeneratedReceiver] Calling impl.connectToOneDrive');
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
          const params = ash.settings.one_drive.mojom.PageHandler_DisconnectFromOneDrive_ParamsSpec.$.decode(message.payload);
          console.log('[GeneratedReceiver] Calling impl.disconnectFromOneDrive');
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
          const params = ash.settings.one_drive.mojom.PageHandler_OpenOneDriveFolder_ParamsSpec.$.decode(message.payload);
          console.log('[GeneratedReceiver] Calling impl.openOneDriveFolder');
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
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
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
};

ash.settings.one_drive.mojom.PageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onODFSMountOrUnmount() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.settings.one_drive.mojom.Page_OnODFSMountOrUnmount_ParamsSpec,
      null,
      [],
      false);
  }

  onAllowUserToRemoveODFSChanged(is_allowed) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
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
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      switch (header.ordinal) {
        case 0: {
          const params = ash.settings.one_drive.mojom.Page_OnODFSMountOrUnmount_ParamsSpec.$.decode(message.payload);
          console.log('[GeneratedReceiver] Calling impl.onODFSMountOrUnmount');
          const result = this.impl.onODFSMountOrUnmount();
          break;
        }
        case 1: {
          const params = ash.settings.one_drive.mojom.Page_OnAllowUserToRemoveODFSChanged_ParamsSpec.$.decode(message.payload);
          console.log('[GeneratedReceiver] Calling impl.onAllowUserToRemoveODFSChanged');
          const result = this.impl.onAllowUserToRemoveODFSChanged(params.is_allowed);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

ash.settings.one_drive.mojom.PageReceiver = ash.settings.one_drive.mojom.PageReceiver;

ash.settings.one_drive.mojom.PagePtr = ash.settings.one_drive.mojom.PageRemote;
ash.settings.one_drive.mojom.PageRequest = ash.settings.one_drive.mojom.PagePendingReceiver;

