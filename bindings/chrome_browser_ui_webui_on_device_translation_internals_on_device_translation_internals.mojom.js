// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/on_device_translation_internals/on_device_translation_internals.mojom
// Module: on_device_translation_internals.mojom

// Module namespace
var on_device_translation_internals = on_device_translation_internals || {};
on_device_translation_internals.mojom = on_device_translation_internals.mojom || {};

on_device_translation_internals.mojom.LanguagePackStatusSpec = { $: mojo.internal.Enum() };
on_device_translation_internals.mojom.LanguagePackInfoSpec = { $: {} };
on_device_translation_internals.mojom.PageHandlerFactory = {};
on_device_translation_internals.mojom.PageHandlerFactory.$interfaceName = 'on_device_translation_internals.mojom.PageHandlerFactory';
on_device_translation_internals.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec = { $: {} };
on_device_translation_internals.mojom.PageHandler = {};
on_device_translation_internals.mojom.PageHandler.$interfaceName = 'on_device_translation_internals.mojom.PageHandler';
on_device_translation_internals.mojom.PageHandler_InstallLanguagePackage_ParamsSpec = { $: {} };
on_device_translation_internals.mojom.PageHandler_UninstallLanguagePackage_ParamsSpec = { $: {} };
on_device_translation_internals.mojom.Page = {};
on_device_translation_internals.mojom.Page.$interfaceName = 'on_device_translation_internals.mojom.Page';
on_device_translation_internals.mojom.Page_OnLanguagePackStatus_ParamsSpec = { $: {} };

// Enum: LanguagePackStatus
on_device_translation_internals.mojom.LanguagePackStatus = {
  kNotInstalled: 0,
  kInstalling: 1,
  kInstalled: 2,
};

// Struct: LanguagePackInfo
mojo.internal.Struct(
    on_device_translation_internals.mojom.LanguagePackInfoSpec, 'on_device_translation_internals.mojom.LanguagePackInfo', [
      mojo.internal.StructField('name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('status', 8, 0, on_device_translation_internals.mojom.LanguagePackStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: PageHandlerFactory
mojo.internal.Struct(
    on_device_translation_internals.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec, 'on_device_translation_internals.mojom.PageHandlerFactory_CreatePageHandler_Params', [
      mojo.internal.StructField('page', 0, 0, mojo.internal.InterfaceProxy(on_device_translation_internals.mojom.PageRemote), null, false, 0, undefined),
      mojo.internal.StructField('handler', 8, 0, mojo.internal.InterfaceRequest(on_device_translation_internals.mojom.PageHandlerRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

on_device_translation_internals.mojom.PageHandlerFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

on_device_translation_internals.mojom.PageHandlerFactoryRemote = class {
  static get $interfaceName() {
    return 'on_device_translation_internals.mojom.PageHandlerFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      on_device_translation_internals.mojom.PageHandlerFactoryPendingReceiver,
      handle);
    this.$ = new on_device_translation_internals.mojom.PageHandlerFactoryRemoteCallHandler(this.proxy);
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

on_device_translation_internals.mojom.PageHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('PageHandlerFactory', [
      { explicit: null },
    ]);
  }

  createPageHandler(page, handler) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      on_device_translation_internals.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec,
      null,
      [page, handler],
      false);
  }

};

on_device_translation_internals.mojom.PageHandlerFactory.getRemote = function() {
  let remote = new on_device_translation_internals.mojom.PageHandlerFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'on_device_translation_internals.mojom.PageHandlerFactory',
    'context');
  return remote.$;
};

on_device_translation_internals.mojom.PageHandlerFactoryReceiver = class {
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
             decoder.decodeStructInline(on_device_translation_internals.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(on_device_translation_internals.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec.$.structSpec);
          const result = this.impl.createPageHandler(params.page, params.handler);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

on_device_translation_internals.mojom.PageHandlerFactoryReceiver = on_device_translation_internals.mojom.PageHandlerFactoryReceiver;

on_device_translation_internals.mojom.PageHandlerFactoryPtr = on_device_translation_internals.mojom.PageHandlerFactoryRemote;
on_device_translation_internals.mojom.PageHandlerFactoryRequest = on_device_translation_internals.mojom.PageHandlerFactoryPendingReceiver;


// Interface: PageHandler
mojo.internal.Struct(
    on_device_translation_internals.mojom.PageHandler_InstallLanguagePackage_ParamsSpec, 'on_device_translation_internals.mojom.PageHandler_InstallLanguagePackage_Params', [
      mojo.internal.StructField('package_index', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    on_device_translation_internals.mojom.PageHandler_UninstallLanguagePackage_ParamsSpec, 'on_device_translation_internals.mojom.PageHandler_UninstallLanguagePackage_Params', [
      mojo.internal.StructField('package_index', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

on_device_translation_internals.mojom.PageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

on_device_translation_internals.mojom.PageHandlerRemote = class {
  static get $interfaceName() {
    return 'on_device_translation_internals.mojom.PageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      on_device_translation_internals.mojom.PageHandlerPendingReceiver,
      handle);
    this.$ = new on_device_translation_internals.mojom.PageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  installLanguagePackage(package_index) {
    return this.$.installLanguagePackage(package_index);
  }
  uninstallLanguagePackage(package_index) {
    return this.$.uninstallLanguagePackage(package_index);
  }
};

on_device_translation_internals.mojom.PageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('PageHandler', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  installLanguagePackage(package_index) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      on_device_translation_internals.mojom.PageHandler_InstallLanguagePackage_ParamsSpec,
      null,
      [package_index],
      false);
  }

  uninstallLanguagePackage(package_index) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      on_device_translation_internals.mojom.PageHandler_UninstallLanguagePackage_ParamsSpec,
      null,
      [package_index],
      false);
  }

};

on_device_translation_internals.mojom.PageHandler.getRemote = function() {
  let remote = new on_device_translation_internals.mojom.PageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'on_device_translation_internals.mojom.PageHandler',
    'context');
  return remote.$;
};

on_device_translation_internals.mojom.PageHandlerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('PageHandler', [
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
             decoder.decodeStructInline(on_device_translation_internals.mojom.PageHandler_InstallLanguagePackage_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(on_device_translation_internals.mojom.PageHandler_UninstallLanguagePackage_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(on_device_translation_internals.mojom.PageHandler_InstallLanguagePackage_ParamsSpec.$.structSpec);
          const result = this.impl.installLanguagePackage(params.package_index);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(on_device_translation_internals.mojom.PageHandler_UninstallLanguagePackage_ParamsSpec.$.structSpec);
          const result = this.impl.uninstallLanguagePackage(params.package_index);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

on_device_translation_internals.mojom.PageHandlerReceiver = on_device_translation_internals.mojom.PageHandlerReceiver;

on_device_translation_internals.mojom.PageHandlerPtr = on_device_translation_internals.mojom.PageHandlerRemote;
on_device_translation_internals.mojom.PageHandlerRequest = on_device_translation_internals.mojom.PageHandlerPendingReceiver;


// Interface: Page
mojo.internal.Struct(
    on_device_translation_internals.mojom.Page_OnLanguagePackStatus_ParamsSpec, 'on_device_translation_internals.mojom.Page_OnLanguagePackStatus_Params', [
      mojo.internal.StructField('status', 0, 0, mojo.internal.Array(on_device_translation_internals.mojom.LanguagePackInfoSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

on_device_translation_internals.mojom.PagePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

on_device_translation_internals.mojom.PageRemote = class {
  static get $interfaceName() {
    return 'on_device_translation_internals.mojom.Page';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      on_device_translation_internals.mojom.PagePendingReceiver,
      handle);
    this.$ = new on_device_translation_internals.mojom.PageRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onLanguagePackStatus(status) {
    return this.$.onLanguagePackStatus(status);
  }
};

on_device_translation_internals.mojom.PageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('Page', [
      { explicit: null },
    ]);
  }

  onLanguagePackStatus(status) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      on_device_translation_internals.mojom.Page_OnLanguagePackStatus_ParamsSpec,
      null,
      [status],
      false);
  }

};

on_device_translation_internals.mojom.Page.getRemote = function() {
  let remote = new on_device_translation_internals.mojom.PageRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'on_device_translation_internals.mojom.Page',
    'context');
  return remote.$;
};

on_device_translation_internals.mojom.PageReceiver = class {
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
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(on_device_translation_internals.mojom.Page_OnLanguagePackStatus_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(on_device_translation_internals.mojom.Page_OnLanguagePackStatus_ParamsSpec.$.structSpec);
          const result = this.impl.onLanguagePackStatus(params.status);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

on_device_translation_internals.mojom.PageReceiver = on_device_translation_internals.mojom.PageReceiver;

on_device_translation_internals.mojom.PagePtr = on_device_translation_internals.mojom.PageRemote;
on_device_translation_internals.mojom.PageRequest = on_device_translation_internals.mojom.PagePendingReceiver;

