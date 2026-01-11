// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/ash/crostini_installer/crostini_installer.mojom
// Module: ash.crostini_installer.mojom

// Module namespace
var ash = ash || {};
ash.crostini_installer = ash.crostini_installer || {};
ash.crostini_installer.mojom = ash.crostini_installer.mojom || {};
var crostini = crostini || {};

ash.crostini_installer.mojom.PageHandlerFactory = {};
ash.crostini_installer.mojom.PageHandlerFactory.$interfaceName = 'ash.crostini_installer.mojom.PageHandlerFactory';
ash.crostini_installer.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec = { $: {} };
ash.crostini_installer.mojom.PageHandler = {};
ash.crostini_installer.mojom.PageHandler.$interfaceName = 'ash.crostini_installer.mojom.PageHandler';
ash.crostini_installer.mojom.PageHandler_Install_ParamsSpec = { $: {} };
ash.crostini_installer.mojom.PageHandler_Cancel_ParamsSpec = { $: {} };
ash.crostini_installer.mojom.PageHandler_CancelBeforeStart_ParamsSpec = { $: {} };
ash.crostini_installer.mojom.PageHandler_OnPageClosed_ParamsSpec = { $: {} };
ash.crostini_installer.mojom.PageHandler_RequestAmountOfFreeDiskSpace_ParamsSpec = { $: {} };
ash.crostini_installer.mojom.PageHandler_RequestAmountOfFreeDiskSpace_ResponseParamsSpec = { $: {} };
ash.crostini_installer.mojom.Page = {};
ash.crostini_installer.mojom.Page.$interfaceName = 'ash.crostini_installer.mojom.Page';
ash.crostini_installer.mojom.Page_OnProgressUpdate_ParamsSpec = { $: {} };
ash.crostini_installer.mojom.Page_OnInstallFinished_ParamsSpec = { $: {} };
ash.crostini_installer.mojom.Page_OnCanceled_ParamsSpec = { $: {} };
ash.crostini_installer.mojom.Page_RequestClose_ParamsSpec = { $: {} };

// Interface: PageHandlerFactory
mojo.internal.Struct(
    ash.crostini_installer.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec, 'ash.crostini_installer.mojom.PageHandlerFactory_CreatePageHandler_Params', [
      mojo.internal.StructField('page', 0, 0, mojo.internal.InterfaceProxy(ash.crostini_installer.mojom.PageRemote), null, false, 0, undefined),
      mojo.internal.StructField('handler', 8, 0, mojo.internal.InterfaceRequest(ash.crostini_installer.mojom.PageHandlerRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

ash.crostini_installer.mojom.PageHandlerFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.crostini_installer.mojom.PageHandlerFactoryRemote = class {
  static get $interfaceName() {
    return 'ash.crostini_installer.mojom.PageHandlerFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.crostini_installer.mojom.PageHandlerFactoryPendingReceiver,
      handle);
    this.$ = new ash.crostini_installer.mojom.PageHandlerFactoryRemoteCallHandler(this.proxy);
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

ash.crostini_installer.mojom.PageHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('PageHandlerFactory', [
      { explicit: null },
    ]);
  }

  createPageHandler(page, handler) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      ash.crostini_installer.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec,
      null,
      [page, handler],
      false);
  }

};

ash.crostini_installer.mojom.PageHandlerFactory.getRemote = function() {
  let remote = new ash.crostini_installer.mojom.PageHandlerFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.crostini_installer.mojom.PageHandlerFactory',
    'context');
  return remote.$;
};

ash.crostini_installer.mojom.PageHandlerFactoryReceiver = class {
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
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.crostini_installer.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.crostini_installer.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec.$.structSpec);
          const result = this.impl.createPageHandler(params.page, params.handler);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

ash.crostini_installer.mojom.PageHandlerFactoryReceiver = ash.crostini_installer.mojom.PageHandlerFactoryReceiver;

ash.crostini_installer.mojom.PageHandlerFactoryPtr = ash.crostini_installer.mojom.PageHandlerFactoryRemote;
ash.crostini_installer.mojom.PageHandlerFactoryRequest = ash.crostini_installer.mojom.PageHandlerFactoryPendingReceiver;


// Interface: PageHandler
mojo.internal.Struct(
    ash.crostini_installer.mojom.PageHandler_Install_ParamsSpec, 'ash.crostini_installer.mojom.PageHandler_Install_Params', [
      mojo.internal.StructField('disk_size', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('username', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    ash.crostini_installer.mojom.PageHandler_Cancel_ParamsSpec, 'ash.crostini_installer.mojom.PageHandler_Cancel_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.crostini_installer.mojom.PageHandler_CancelBeforeStart_ParamsSpec, 'ash.crostini_installer.mojom.PageHandler_CancelBeforeStart_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.crostini_installer.mojom.PageHandler_OnPageClosed_ParamsSpec, 'ash.crostini_installer.mojom.PageHandler_OnPageClosed_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.crostini_installer.mojom.PageHandler_RequestAmountOfFreeDiskSpace_ParamsSpec, 'ash.crostini_installer.mojom.PageHandler_RequestAmountOfFreeDiskSpace_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.crostini_installer.mojom.PageHandler_RequestAmountOfFreeDiskSpace_ResponseParamsSpec, 'ash.crostini_installer.mojom.PageHandler_RequestAmountOfFreeDiskSpace_ResponseParams', [
      mojo.internal.StructField('ticks', 0, 0, mojo.internal.Array(crostini.mojom.DiskSliderTickSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('default_index', 8, 0, mojo.internal.Int8, 0, false, 0, undefined),
      mojo.internal.StructField('is_low_space_available', 9, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

ash.crostini_installer.mojom.PageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.crostini_installer.mojom.PageHandlerRemote = class {
  static get $interfaceName() {
    return 'ash.crostini_installer.mojom.PageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.crostini_installer.mojom.PageHandlerPendingReceiver,
      handle);
    this.$ = new ash.crostini_installer.mojom.PageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  install(disk_size, username) {
    return this.$.install(disk_size, username);
  }
  cancel() {
    return this.$.cancel();
  }
  cancelBeforeStart() {
    return this.$.cancelBeforeStart();
  }
  onPageClosed() {
    return this.$.onPageClosed();
  }
  requestAmountOfFreeDiskSpace() {
    return this.$.requestAmountOfFreeDiskSpace();
  }
};

ash.crostini_installer.mojom.PageHandlerRemoteCallHandler = class {
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

  install(disk_size, username) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      ash.crostini_installer.mojom.PageHandler_Install_ParamsSpec,
      null,
      [disk_size, username],
      false);
  }

  cancel() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      ash.crostini_installer.mojom.PageHandler_Cancel_ParamsSpec,
      null,
      [],
      false);
  }

  cancelBeforeStart() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      ash.crostini_installer.mojom.PageHandler_CancelBeforeStart_ParamsSpec,
      null,
      [],
      false);
  }

  onPageClosed() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      ash.crostini_installer.mojom.PageHandler_OnPageClosed_ParamsSpec,
      null,
      [],
      false);
  }

  requestAmountOfFreeDiskSpace() {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      ash.crostini_installer.mojom.PageHandler_RequestAmountOfFreeDiskSpace_ParamsSpec,
      ash.crostini_installer.mojom.PageHandler_RequestAmountOfFreeDiskSpace_ResponseParamsSpec,
      [],
      false);
  }

};

ash.crostini_installer.mojom.PageHandler.getRemote = function() {
  let remote = new ash.crostini_installer.mojom.PageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.crostini_installer.mojom.PageHandler',
    'context');
  return remote.$;
};

ash.crostini_installer.mojom.PageHandlerReceiver = class {
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
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.crostini_installer.mojom.PageHandler_Install_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.crostini_installer.mojom.PageHandler_Cancel_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.crostini_installer.mojom.PageHandler_CancelBeforeStart_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.crostini_installer.mojom.PageHandler_OnPageClosed_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.crostini_installer.mojom.PageHandler_RequestAmountOfFreeDiskSpace_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.crostini_installer.mojom.PageHandler_Install_ParamsSpec.$.structSpec);
          const result = this.impl.install(params.disk_size, params.username);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.crostini_installer.mojom.PageHandler_Cancel_ParamsSpec.$.structSpec);
          const result = this.impl.cancel();
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.crostini_installer.mojom.PageHandler_CancelBeforeStart_ParamsSpec.$.structSpec);
          const result = this.impl.cancelBeforeStart();
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.crostini_installer.mojom.PageHandler_OnPageClosed_ParamsSpec.$.structSpec);
          const result = this.impl.onPageClosed();
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.crostini_installer.mojom.PageHandler_RequestAmountOfFreeDiskSpace_ParamsSpec.$.structSpec);
          const result = this.impl.requestAmountOfFreeDiskSpace();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.crostini_installer.mojom.PageHandler_RequestAmountOfFreeDiskSpace_ResponseParamsSpec);
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

ash.crostini_installer.mojom.PageHandlerReceiver = ash.crostini_installer.mojom.PageHandlerReceiver;

ash.crostini_installer.mojom.PageHandlerPtr = ash.crostini_installer.mojom.PageHandlerRemote;
ash.crostini_installer.mojom.PageHandlerRequest = ash.crostini_installer.mojom.PageHandlerPendingReceiver;


// Interface: Page
mojo.internal.Struct(
    ash.crostini_installer.mojom.Page_OnProgressUpdate_ParamsSpec, 'ash.crostini_installer.mojom.Page_OnProgressUpdate_Params', [
      mojo.internal.StructField('install_state', 0, 0, crostini.mojom.InstallerStateSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('progress_fraction', 8, 0, mojo.internal.Double, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    ash.crostini_installer.mojom.Page_OnInstallFinished_ParamsSpec, 'ash.crostini_installer.mojom.Page_OnInstallFinished_Params', [
      mojo.internal.StructField('error', 0, 0, crostini.mojom.InstallerErrorSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.crostini_installer.mojom.Page_OnCanceled_ParamsSpec, 'ash.crostini_installer.mojom.Page_OnCanceled_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.crostini_installer.mojom.Page_RequestClose_ParamsSpec, 'ash.crostini_installer.mojom.Page_RequestClose_Params', [
    ],
    [[0, 8]]);

ash.crostini_installer.mojom.PagePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.crostini_installer.mojom.PageRemote = class {
  static get $interfaceName() {
    return 'ash.crostini_installer.mojom.Page';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.crostini_installer.mojom.PagePendingReceiver,
      handle);
    this.$ = new ash.crostini_installer.mojom.PageRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onProgressUpdate(install_state, progress_fraction) {
    return this.$.onProgressUpdate(install_state, progress_fraction);
  }
  onInstallFinished(error) {
    return this.$.onInstallFinished(error);
  }
  onCanceled() {
    return this.$.onCanceled();
  }
  requestClose() {
    return this.$.requestClose();
  }
};

ash.crostini_installer.mojom.PageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('Page', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  onProgressUpdate(install_state, progress_fraction) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      ash.crostini_installer.mojom.Page_OnProgressUpdate_ParamsSpec,
      null,
      [install_state, progress_fraction],
      false);
  }

  onInstallFinished(error) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      ash.crostini_installer.mojom.Page_OnInstallFinished_ParamsSpec,
      null,
      [error],
      false);
  }

  onCanceled() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      ash.crostini_installer.mojom.Page_OnCanceled_ParamsSpec,
      null,
      [],
      false);
  }

  requestClose() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      ash.crostini_installer.mojom.Page_RequestClose_ParamsSpec,
      null,
      [],
      false);
  }

};

ash.crostini_installer.mojom.Page.getRemote = function() {
  let remote = new ash.crostini_installer.mojom.PageRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.crostini_installer.mojom.Page',
    'context');
  return remote.$;
};

ash.crostini_installer.mojom.PageReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('Page', [
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
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.crostini_installer.mojom.Page_OnProgressUpdate_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.crostini_installer.mojom.Page_OnInstallFinished_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.crostini_installer.mojom.Page_OnCanceled_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.crostini_installer.mojom.Page_RequestClose_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.crostini_installer.mojom.Page_OnProgressUpdate_ParamsSpec.$.structSpec);
          const result = this.impl.onProgressUpdate(params.install_state, params.progress_fraction);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.crostini_installer.mojom.Page_OnInstallFinished_ParamsSpec.$.structSpec);
          const result = this.impl.onInstallFinished(params.error);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.crostini_installer.mojom.Page_OnCanceled_ParamsSpec.$.structSpec);
          const result = this.impl.onCanceled();
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.crostini_installer.mojom.Page_RequestClose_ParamsSpec.$.structSpec);
          const result = this.impl.requestClose();
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

ash.crostini_installer.mojom.PageReceiver = ash.crostini_installer.mojom.PageReceiver;

ash.crostini_installer.mojom.PagePtr = ash.crostini_installer.mojom.PageRemote;
ash.crostini_installer.mojom.PageRequest = ash.crostini_installer.mojom.PagePendingReceiver;

