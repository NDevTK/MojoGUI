// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/signin/signout_confirmation/signout_confirmation.mojom
// Module: signout_confirmation.mojom

'use strict';

// Module namespace
var signout_confirmation = signout_confirmation || {};
signout_confirmation.mojom = signout_confirmation.mojom || {};

signout_confirmation.mojom.ExtensionInfoSpec = { $: {} };
signout_confirmation.mojom.SignoutConfirmationDataSpec = { $: {} };
signout_confirmation.mojom.PageHandlerFactory = {};
signout_confirmation.mojom.PageHandlerFactory.$interfaceName = 'signout_confirmation.mojom.PageHandlerFactory';
signout_confirmation.mojom.PageHandlerFactory_CreateSignoutConfirmationHandler_ParamsSpec = { $: {} };
signout_confirmation.mojom.PageHandler = {};
signout_confirmation.mojom.PageHandler.$interfaceName = 'signout_confirmation.mojom.PageHandler';
signout_confirmation.mojom.PageHandler_UpdateViewHeight_ParamsSpec = { $: {} };
signout_confirmation.mojom.PageHandler_Accept_ParamsSpec = { $: {} };
signout_confirmation.mojom.PageHandler_Cancel_ParamsSpec = { $: {} };
signout_confirmation.mojom.PageHandler_PerformReauth_ParamsSpec = { $: {} };
signout_confirmation.mojom.PageHandler_Close_ParamsSpec = { $: {} };
signout_confirmation.mojom.Page = {};
signout_confirmation.mojom.Page.$interfaceName = 'signout_confirmation.mojom.Page';
signout_confirmation.mojom.Page_SendSignoutConfirmationData_ParamsSpec = { $: {} };

// Struct: ExtensionInfo
mojo.internal.Struct(
    signout_confirmation.mojom.ExtensionInfoSpec, 'signout_confirmation.mojom.ExtensionInfo', [
      mojo.internal.StructField('name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('icon_url', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: SignoutConfirmationData
mojo.internal.Struct(
    signout_confirmation.mojom.SignoutConfirmationDataSpec, 'signout_confirmation.mojom.SignoutConfirmationData', [
      mojo.internal.StructField('dialog_title', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('dialog_subtitle', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('accept_button_label', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('cancel_button_label', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('verify_button_label', 32, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('account_extensions', 40, 0, mojo.internal.Array(signout_confirmation.mojom.ExtensionInfoSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('has_unsynced_data', 48, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 64]]);

// Interface: PageHandlerFactory
mojo.internal.Struct(
    signout_confirmation.mojom.PageHandlerFactory_CreateSignoutConfirmationHandler_ParamsSpec, 'signout_confirmation.mojom.PageHandlerFactory_CreateSignoutConfirmationHandler_Params', [
      mojo.internal.StructField('page', 0, 0, mojo.internal.InterfaceProxy(signout_confirmation.mojom.PageRemote), null, false, 0, undefined),
      mojo.internal.StructField('handler', 8, 0, mojo.internal.InterfaceRequest(signout_confirmation.mojom.PageHandlerRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

signout_confirmation.mojom.PageHandlerFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

signout_confirmation.mojom.PageHandlerFactoryRemote = class {
  static get $interfaceName() {
    return 'signout_confirmation.mojom.PageHandlerFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      signout_confirmation.mojom.PageHandlerFactoryPendingReceiver,
      handle);
    this.$ = new signout_confirmation.mojom.PageHandlerFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

signout_confirmation.mojom.PageHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createSignoutConfirmationHandler(page, handler) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      signout_confirmation.mojom.PageHandlerFactory_CreateSignoutConfirmationHandler_ParamsSpec,
      null,
      [page, handler],
      false);
  }

};

signout_confirmation.mojom.PageHandlerFactory.getRemote = function() {
  let remote = new signout_confirmation.mojom.PageHandlerFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'signout_confirmation.mojom.PageHandlerFactory',
    'context');
  return remote.$;
};

signout_confirmation.mojom.PageHandlerFactoryReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(handle);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = signout_confirmation.mojom.PageHandlerFactory_CreateSignoutConfirmationHandler_ParamsSpec.$.decode(message.payload);
          const result = this.impl.createSignoutConfirmationHandler(params.page, params.handler);
          break;
        }
      }
    });
  }
};

signout_confirmation.mojom.PageHandlerFactoryReceiver = signout_confirmation.mojom.PageHandlerFactoryReceiver;

signout_confirmation.mojom.PageHandlerFactoryPtr = signout_confirmation.mojom.PageHandlerFactoryRemote;
signout_confirmation.mojom.PageHandlerFactoryRequest = signout_confirmation.mojom.PageHandlerFactoryPendingReceiver;


// Interface: PageHandler
mojo.internal.Struct(
    signout_confirmation.mojom.PageHandler_UpdateViewHeight_ParamsSpec, 'signout_confirmation.mojom.PageHandler_UpdateViewHeight_Params', [
      mojo.internal.StructField('height', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    signout_confirmation.mojom.PageHandler_Accept_ParamsSpec, 'signout_confirmation.mojom.PageHandler_Accept_Params', [
      mojo.internal.StructField('uninstall_account_extensions', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    signout_confirmation.mojom.PageHandler_Cancel_ParamsSpec, 'signout_confirmation.mojom.PageHandler_Cancel_Params', [
      mojo.internal.StructField('uninstall_account_extensions', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    signout_confirmation.mojom.PageHandler_PerformReauth_ParamsSpec, 'signout_confirmation.mojom.PageHandler_PerformReauth_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    signout_confirmation.mojom.PageHandler_Close_ParamsSpec, 'signout_confirmation.mojom.PageHandler_Close_Params', [
    ],
    [[0, 8]]);

signout_confirmation.mojom.PageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

signout_confirmation.mojom.PageHandlerRemote = class {
  static get $interfaceName() {
    return 'signout_confirmation.mojom.PageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      signout_confirmation.mojom.PageHandlerPendingReceiver,
      handle);
    this.$ = new signout_confirmation.mojom.PageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

signout_confirmation.mojom.PageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  updateViewHeight(height) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      signout_confirmation.mojom.PageHandler_UpdateViewHeight_ParamsSpec,
      null,
      [height],
      false);
  }

  accept(uninstall_account_extensions) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      signout_confirmation.mojom.PageHandler_Accept_ParamsSpec,
      null,
      [uninstall_account_extensions],
      false);
  }

  cancel(uninstall_account_extensions) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      signout_confirmation.mojom.PageHandler_Cancel_ParamsSpec,
      null,
      [uninstall_account_extensions],
      false);
  }

  performReauth() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      signout_confirmation.mojom.PageHandler_PerformReauth_ParamsSpec,
      null,
      [],
      false);
  }

  close() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      signout_confirmation.mojom.PageHandler_Close_ParamsSpec,
      null,
      [],
      false);
  }

};

signout_confirmation.mojom.PageHandler.getRemote = function() {
  let remote = new signout_confirmation.mojom.PageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'signout_confirmation.mojom.PageHandler',
    'context');
  return remote.$;
};

signout_confirmation.mojom.PageHandlerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(handle);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = signout_confirmation.mojom.PageHandler_UpdateViewHeight_ParamsSpec.$.decode(message.payload);
          const result = this.impl.updateViewHeight(params.height);
          break;
        }
        case 1: {
          const params = signout_confirmation.mojom.PageHandler_Accept_ParamsSpec.$.decode(message.payload);
          const result = this.impl.accept(params.uninstall_account_extensions);
          break;
        }
        case 2: {
          const params = signout_confirmation.mojom.PageHandler_Cancel_ParamsSpec.$.decode(message.payload);
          const result = this.impl.cancel(params.uninstall_account_extensions);
          break;
        }
        case 3: {
          const params = signout_confirmation.mojom.PageHandler_PerformReauth_ParamsSpec.$.decode(message.payload);
          const result = this.impl.performReauth();
          break;
        }
        case 4: {
          const params = signout_confirmation.mojom.PageHandler_Close_ParamsSpec.$.decode(message.payload);
          const result = this.impl.close();
          break;
        }
      }
    });
  }
};

signout_confirmation.mojom.PageHandlerReceiver = signout_confirmation.mojom.PageHandlerReceiver;

signout_confirmation.mojom.PageHandlerPtr = signout_confirmation.mojom.PageHandlerRemote;
signout_confirmation.mojom.PageHandlerRequest = signout_confirmation.mojom.PageHandlerPendingReceiver;


// Interface: Page
mojo.internal.Struct(
    signout_confirmation.mojom.Page_SendSignoutConfirmationData_ParamsSpec, 'signout_confirmation.mojom.Page_SendSignoutConfirmationData_Params', [
      mojo.internal.StructField('data', 0, 0, signout_confirmation.mojom.SignoutConfirmationDataSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

signout_confirmation.mojom.PagePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

signout_confirmation.mojom.PageRemote = class {
  static get $interfaceName() {
    return 'signout_confirmation.mojom.Page';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      signout_confirmation.mojom.PagePendingReceiver,
      handle);
    this.$ = new signout_confirmation.mojom.PageRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

signout_confirmation.mojom.PageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  sendSignoutConfirmationData(data) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      signout_confirmation.mojom.Page_SendSignoutConfirmationData_ParamsSpec,
      null,
      [data],
      false);
  }

};

signout_confirmation.mojom.Page.getRemote = function() {
  let remote = new signout_confirmation.mojom.PageRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'signout_confirmation.mojom.Page',
    'context');
  return remote.$;
};

signout_confirmation.mojom.PageReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(handle);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = signout_confirmation.mojom.Page_SendSignoutConfirmationData_ParamsSpec.$.decode(message.payload);
          const result = this.impl.sendSignoutConfirmationData(params.data);
          break;
        }
      }
    });
  }
};

signout_confirmation.mojom.PageReceiver = signout_confirmation.mojom.PageReceiver;

signout_confirmation.mojom.PagePtr = signout_confirmation.mojom.PageRemote;
signout_confirmation.mojom.PageRequest = signout_confirmation.mojom.PagePendingReceiver;

