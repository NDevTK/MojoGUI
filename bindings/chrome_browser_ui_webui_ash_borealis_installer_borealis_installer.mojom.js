// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/ash/borealis_installer/borealis_installer.mojom
// Module: ash.borealis_installer.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var ash = ash || {};
ash.borealis_installer = ash.borealis_installer || {};
ash.borealis_installer.mojom = ash.borealis_installer.mojom || {};
var borealis = borealis || {};

ash.borealis_installer.mojom.PageHandlerFactory = {};
ash.borealis_installer.mojom.PageHandlerFactory.$interfaceName = 'ash.borealis_installer.mojom.PageHandlerFactory';
ash.borealis_installer.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec = { $: {} };
ash.borealis_installer.mojom.PageHandler = {};
ash.borealis_installer.mojom.PageHandler.$interfaceName = 'ash.borealis_installer.mojom.PageHandler';
ash.borealis_installer.mojom.PageHandler_Install_ParamsSpec = { $: {} };
ash.borealis_installer.mojom.PageHandler_ShutDown_ParamsSpec = { $: {} };
ash.borealis_installer.mojom.PageHandler_Launch_ParamsSpec = { $: {} };
ash.borealis_installer.mojom.PageHandler_CancelInstall_ParamsSpec = { $: {} };
ash.borealis_installer.mojom.PageHandler_OnPageClosed_ParamsSpec = { $: {} };
ash.borealis_installer.mojom.PageHandler_OpenStoragePage_ParamsSpec = { $: {} };
ash.borealis_installer.mojom.Page = {};
ash.borealis_installer.mojom.Page.$interfaceName = 'ash.borealis_installer.mojom.Page';
ash.borealis_installer.mojom.Page_OnProgressUpdate_ParamsSpec = { $: {} };
ash.borealis_installer.mojom.Page_OnInstallFinished_ParamsSpec = { $: {} };
ash.borealis_installer.mojom.Page_RequestClose_ParamsSpec = { $: {} };

// Interface: PageHandlerFactory
mojo.internal.Struct(
    ash.borealis_installer.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec, 'ash.borealis_installer.mojom.PageHandlerFactory_CreatePageHandler_Params', [
      mojo.internal.StructField('page', 0, 0, mojo.internal.InterfaceProxy(ash.borealis_installer.mojom.PageRemote), null, false, 0, undefined),
      mojo.internal.StructField('handler', 8, 0, mojo.internal.InterfaceRequest(ash.borealis_installer.mojom.PageHandlerRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

ash.borealis_installer.mojom.PageHandlerFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.borealis_installer.mojom.PageHandlerFactoryRemote = class {
  static get $interfaceName() {
    return 'ash.borealis_installer.mojom.PageHandlerFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.borealis_installer.mojom.PageHandlerFactoryPendingReceiver,
      handle);
    this.$ = new ash.borealis_installer.mojom.PageHandlerFactoryRemoteCallHandler(this.proxy);
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

ash.borealis_installer.mojom.PageHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('PageHandlerFactory', [
      { explicit: null },
    ]);
  }

  createPageHandler(page, handler) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      ash.borealis_installer.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec,
      null,
      [page, handler],
      false);
  }

};

ash.borealis_installer.mojom.PageHandlerFactory.getRemote = function() {
  let remote = new ash.borealis_installer.mojom.PageHandlerFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.borealis_installer.mojom.PageHandlerFactory',
    'context');
  return remote.$;
};

ash.borealis_installer.mojom.PageHandlerFactoryReceiver = class {
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
             decoder.decodeStructInline(ash.borealis_installer.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.borealis_installer.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec.$.structSpec);
          const result = this.impl.createPageHandler(params.page, params.handler);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

ash.borealis_installer.mojom.PageHandlerFactoryReceiver = ash.borealis_installer.mojom.PageHandlerFactoryReceiver;

ash.borealis_installer.mojom.PageHandlerFactoryPtr = ash.borealis_installer.mojom.PageHandlerFactoryRemote;
ash.borealis_installer.mojom.PageHandlerFactoryRequest = ash.borealis_installer.mojom.PageHandlerFactoryPendingReceiver;


// Interface: PageHandler
mojo.internal.Struct(
    ash.borealis_installer.mojom.PageHandler_Install_ParamsSpec, 'ash.borealis_installer.mojom.PageHandler_Install_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.borealis_installer.mojom.PageHandler_ShutDown_ParamsSpec, 'ash.borealis_installer.mojom.PageHandler_ShutDown_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.borealis_installer.mojom.PageHandler_Launch_ParamsSpec, 'ash.borealis_installer.mojom.PageHandler_Launch_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.borealis_installer.mojom.PageHandler_CancelInstall_ParamsSpec, 'ash.borealis_installer.mojom.PageHandler_CancelInstall_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.borealis_installer.mojom.PageHandler_OnPageClosed_ParamsSpec, 'ash.borealis_installer.mojom.PageHandler_OnPageClosed_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.borealis_installer.mojom.PageHandler_OpenStoragePage_ParamsSpec, 'ash.borealis_installer.mojom.PageHandler_OpenStoragePage_Params', [
    ],
    [[0, 8]]);

ash.borealis_installer.mojom.PageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.borealis_installer.mojom.PageHandlerRemote = class {
  static get $interfaceName() {
    return 'ash.borealis_installer.mojom.PageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.borealis_installer.mojom.PageHandlerPendingReceiver,
      handle);
    this.$ = new ash.borealis_installer.mojom.PageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  install() {
    return this.$.install();
  }
  shutDown() {
    return this.$.shutDown();
  }
  launch() {
    return this.$.launch();
  }
  cancelInstall() {
    return this.$.cancelInstall();
  }
  onPageClosed() {
    return this.$.onPageClosed();
  }
  openStoragePage() {
    return this.$.openStoragePage();
  }
};

ash.borealis_installer.mojom.PageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('PageHandler', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  install() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      ash.borealis_installer.mojom.PageHandler_Install_ParamsSpec,
      null,
      [],
      false);
  }

  shutDown() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      ash.borealis_installer.mojom.PageHandler_ShutDown_ParamsSpec,
      null,
      [],
      false);
  }

  launch() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      ash.borealis_installer.mojom.PageHandler_Launch_ParamsSpec,
      null,
      [],
      false);
  }

  cancelInstall() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      ash.borealis_installer.mojom.PageHandler_CancelInstall_ParamsSpec,
      null,
      [],
      false);
  }

  onPageClosed() {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      ash.borealis_installer.mojom.PageHandler_OnPageClosed_ParamsSpec,
      null,
      [],
      false);
  }

  openStoragePage() {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      ash.borealis_installer.mojom.PageHandler_OpenStoragePage_ParamsSpec,
      null,
      [],
      false);
  }

};

ash.borealis_installer.mojom.PageHandler.getRemote = function() {
  let remote = new ash.borealis_installer.mojom.PageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.borealis_installer.mojom.PageHandler',
    'context');
  return remote.$;
};

ash.borealis_installer.mojom.PageHandlerReceiver = class {
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
             decoder.decodeStructInline(ash.borealis_installer.mojom.PageHandler_Install_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.borealis_installer.mojom.PageHandler_ShutDown_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.borealis_installer.mojom.PageHandler_Launch_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.borealis_installer.mojom.PageHandler_CancelInstall_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.borealis_installer.mojom.PageHandler_OnPageClosed_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.borealis_installer.mojom.PageHandler_OpenStoragePage_ParamsSpec);
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.borealis_installer.mojom.PageHandler_Install_ParamsSpec.$.structSpec);
          const result = this.impl.install();
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.borealis_installer.mojom.PageHandler_ShutDown_ParamsSpec.$.structSpec);
          const result = this.impl.shutDown();
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.borealis_installer.mojom.PageHandler_Launch_ParamsSpec.$.structSpec);
          const result = this.impl.launch();
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.borealis_installer.mojom.PageHandler_CancelInstall_ParamsSpec.$.structSpec);
          const result = this.impl.cancelInstall();
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.borealis_installer.mojom.PageHandler_OnPageClosed_ParamsSpec.$.structSpec);
          const result = this.impl.onPageClosed();
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.borealis_installer.mojom.PageHandler_OpenStoragePage_ParamsSpec.$.structSpec);
          const result = this.impl.openStoragePage();
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

ash.borealis_installer.mojom.PageHandlerReceiver = ash.borealis_installer.mojom.PageHandlerReceiver;

ash.borealis_installer.mojom.PageHandlerPtr = ash.borealis_installer.mojom.PageHandlerRemote;
ash.borealis_installer.mojom.PageHandlerRequest = ash.borealis_installer.mojom.PageHandlerPendingReceiver;


// Interface: Page
mojo.internal.Struct(
    ash.borealis_installer.mojom.Page_OnProgressUpdate_ParamsSpec, 'ash.borealis_installer.mojom.Page_OnProgressUpdate_Params', [
      mojo.internal.StructField('progress_fraction', 0, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('label', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    ash.borealis_installer.mojom.Page_OnInstallFinished_ParamsSpec, 'ash.borealis_installer.mojom.Page_OnInstallFinished_Params', [
      mojo.internal.StructField('error', 0, 0, borealis.mojom.InstallResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.borealis_installer.mojom.Page_RequestClose_ParamsSpec, 'ash.borealis_installer.mojom.Page_RequestClose_Params', [
    ],
    [[0, 8]]);

ash.borealis_installer.mojom.PagePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.borealis_installer.mojom.PageRemote = class {
  static get $interfaceName() {
    return 'ash.borealis_installer.mojom.Page';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.borealis_installer.mojom.PagePendingReceiver,
      handle);
    this.$ = new ash.borealis_installer.mojom.PageRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onProgressUpdate(progress_fraction, label) {
    return this.$.onProgressUpdate(progress_fraction, label);
  }
  onInstallFinished(error) {
    return this.$.onInstallFinished(error);
  }
  requestClose() {
    return this.$.requestClose();
  }
};

ash.borealis_installer.mojom.PageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('Page', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  onProgressUpdate(progress_fraction, label) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      ash.borealis_installer.mojom.Page_OnProgressUpdate_ParamsSpec,
      null,
      [progress_fraction, label],
      false);
  }

  onInstallFinished(error) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      ash.borealis_installer.mojom.Page_OnInstallFinished_ParamsSpec,
      null,
      [error],
      false);
  }

  requestClose() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      ash.borealis_installer.mojom.Page_RequestClose_ParamsSpec,
      null,
      [],
      false);
  }

};

ash.borealis_installer.mojom.Page.getRemote = function() {
  let remote = new ash.borealis_installer.mojom.PageRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.borealis_installer.mojom.Page',
    'context');
  return remote.$;
};

ash.borealis_installer.mojom.PageReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('Page', [
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
             decoder.decodeStructInline(ash.borealis_installer.mojom.Page_OnProgressUpdate_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.borealis_installer.mojom.Page_OnInstallFinished_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.borealis_installer.mojom.Page_RequestClose_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.borealis_installer.mojom.Page_OnProgressUpdate_ParamsSpec.$.structSpec);
          const result = this.impl.onProgressUpdate(params.progress_fraction, params.label);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.borealis_installer.mojom.Page_OnInstallFinished_ParamsSpec.$.structSpec);
          const result = this.impl.onInstallFinished(params.error);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.borealis_installer.mojom.Page_RequestClose_ParamsSpec.$.structSpec);
          const result = this.impl.requestClose();
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

ash.borealis_installer.mojom.PageReceiver = ash.borealis_installer.mojom.PageReceiver;

ash.borealis_installer.mojom.PagePtr = ash.borealis_installer.mojom.PageRemote;
ash.borealis_installer.mojom.PageRequest = ash.borealis_installer.mojom.PagePendingReceiver;

