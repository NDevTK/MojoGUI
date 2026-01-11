// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/signin/signout_confirmation/signout_confirmation.mojom
// Module: signout_confirmation.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

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
  createSignoutConfirmationHandler(page, handler) {
    return this.$.createSignoutConfirmationHandler(page, handler);
  }
};

signout_confirmation.mojom.PageHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('PageHandlerFactory', [
      { explicit: null },
    ]);
  }

  createSignoutConfirmationHandler(page, handler) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
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
             decoder.decodeStructInline(signout_confirmation.mojom.PageHandlerFactory_CreateSignoutConfirmationHandler_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(signout_confirmation.mojom.PageHandlerFactory_CreateSignoutConfirmationHandler_ParamsSpec.$.structSpec);
          const result = this.impl.createSignoutConfirmationHandler(params.page, params.handler);
          break;
        }
      }
      } catch (err) {}
    }});
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
  updateViewHeight(height) {
    return this.$.updateViewHeight(height);
  }
  accept(uninstall_account_extensions) {
    return this.$.accept(uninstall_account_extensions);
  }
  cancel(uninstall_account_extensions) {
    return this.$.cancel(uninstall_account_extensions);
  }
  performReauth() {
    return this.$.performReauth();
  }
  close() {
    return this.$.close();
  }
};

signout_confirmation.mojom.PageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('PageHandler', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  updateViewHeight(height) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      signout_confirmation.mojom.PageHandler_UpdateViewHeight_ParamsSpec,
      null,
      [height],
      false);
  }

  accept(uninstall_account_extensions) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      signout_confirmation.mojom.PageHandler_Accept_ParamsSpec,
      null,
      [uninstall_account_extensions],
      false);
  }

  cancel(uninstall_account_extensions) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      signout_confirmation.mojom.PageHandler_Cancel_ParamsSpec,
      null,
      [uninstall_account_extensions],
      false);
  }

  performReauth() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      signout_confirmation.mojom.PageHandler_PerformReauth_ParamsSpec,
      null,
      [],
      false);
  }

  close() {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
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
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('PageHandler', [
      { explicit: null },
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
             decoder.decodeStructInline(signout_confirmation.mojom.PageHandler_UpdateViewHeight_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(signout_confirmation.mojom.PageHandler_Accept_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(signout_confirmation.mojom.PageHandler_Cancel_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(signout_confirmation.mojom.PageHandler_PerformReauth_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(signout_confirmation.mojom.PageHandler_Close_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(signout_confirmation.mojom.PageHandler_UpdateViewHeight_ParamsSpec.$.structSpec);
          const result = this.impl.updateViewHeight(params.height);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(signout_confirmation.mojom.PageHandler_Accept_ParamsSpec.$.structSpec);
          const result = this.impl.accept(params.uninstall_account_extensions);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(signout_confirmation.mojom.PageHandler_Cancel_ParamsSpec.$.structSpec);
          const result = this.impl.cancel(params.uninstall_account_extensions);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(signout_confirmation.mojom.PageHandler_PerformReauth_ParamsSpec.$.structSpec);
          const result = this.impl.performReauth();
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(signout_confirmation.mojom.PageHandler_Close_ParamsSpec.$.structSpec);
          const result = this.impl.close();
          break;
        }
      }
      } catch (err) {}
    }});
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
  sendSignoutConfirmationData(data) {
    return this.$.sendSignoutConfirmationData(data);
  }
};

signout_confirmation.mojom.PageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('Page', [
      { explicit: null },
    ]);
  }

  sendSignoutConfirmationData(data) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
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
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('Page', [
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
             decoder.decodeStructInline(signout_confirmation.mojom.Page_SendSignoutConfirmationData_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(signout_confirmation.mojom.Page_SendSignoutConfirmationData_ParamsSpec.$.structSpec);
          const result = this.impl.sendSignoutConfirmationData(params.data);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

signout_confirmation.mojom.PageReceiver = signout_confirmation.mojom.PageReceiver;

signout_confirmation.mojom.PagePtr = signout_confirmation.mojom.PageRemote;
signout_confirmation.mojom.PageRequest = signout_confirmation.mojom.PagePendingReceiver;

