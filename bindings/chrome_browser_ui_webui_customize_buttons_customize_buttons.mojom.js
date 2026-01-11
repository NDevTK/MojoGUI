// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/customize_buttons/customize_buttons.mojom
// Module: customize_buttons.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var customize_buttons = customize_buttons || {};
customize_buttons.mojom = customize_buttons.mojom || {};
var side_panel = side_panel || {};

customize_buttons.mojom.SidePanelOpenTriggerSpec = { $: mojo.internal.Enum() };
customize_buttons.mojom.CustomizeButtonsHandlerFactory = {};
customize_buttons.mojom.CustomizeButtonsHandlerFactory.$interfaceName = 'customize_buttons.mojom.CustomizeButtonsHandlerFactory';
customize_buttons.mojom.CustomizeButtonsHandlerFactory_CreateCustomizeButtonsHandler_ParamsSpec = { $: {} };
customize_buttons.mojom.CustomizeButtonsHandler = {};
customize_buttons.mojom.CustomizeButtonsHandler.$interfaceName = 'customize_buttons.mojom.CustomizeButtonsHandler';
customize_buttons.mojom.CustomizeButtonsHandler_IncrementCustomizeChromeButtonOpenCount_ParamsSpec = { $: {} };
customize_buttons.mojom.CustomizeButtonsHandler_IncrementWallpaperSearchButtonShownCount_ParamsSpec = { $: {} };
customize_buttons.mojom.CustomizeButtonsHandler_SetCustomizeChromeSidePanelVisible_ParamsSpec = { $: {} };
customize_buttons.mojom.CustomizeButtonsDocument = {};
customize_buttons.mojom.CustomizeButtonsDocument.$interfaceName = 'customize_buttons.mojom.CustomizeButtonsDocument';
customize_buttons.mojom.CustomizeButtonsDocument_SetCustomizeChromeSidePanelVisibility_ParamsSpec = { $: {} };

// Enum: SidePanelOpenTrigger
customize_buttons.mojom.SidePanelOpenTrigger = {
  kNewTabPage: 0,
  kNewTabFooter: 1,
};

// Interface: CustomizeButtonsHandlerFactory
mojo.internal.Struct(
    customize_buttons.mojom.CustomizeButtonsHandlerFactory_CreateCustomizeButtonsHandler_ParamsSpec, 'customize_buttons.mojom.CustomizeButtonsHandlerFactory_CreateCustomizeButtonsHandler_Params', [
      mojo.internal.StructField('page', 0, 0, mojo.internal.InterfaceProxy(customize_buttons.mojom.CustomizeButtonsDocumentRemote), null, false, 0, undefined),
      mojo.internal.StructField('handler', 8, 0, mojo.internal.InterfaceRequest(customize_buttons.mojom.CustomizeButtonsHandlerRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

customize_buttons.mojom.CustomizeButtonsHandlerFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

customize_buttons.mojom.CustomizeButtonsHandlerFactoryRemote = class {
  static get $interfaceName() {
    return 'customize_buttons.mojom.CustomizeButtonsHandlerFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      customize_buttons.mojom.CustomizeButtonsHandlerFactoryPendingReceiver,
      handle);
    this.$ = new customize_buttons.mojom.CustomizeButtonsHandlerFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  createCustomizeButtonsHandler(page, handler) {
    return this.$.createCustomizeButtonsHandler(page, handler);
  }
};

customize_buttons.mojom.CustomizeButtonsHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('CustomizeButtonsHandlerFactory', [
      { explicit: null },
    ]);
  }

  createCustomizeButtonsHandler(page, handler) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      customize_buttons.mojom.CustomizeButtonsHandlerFactory_CreateCustomizeButtonsHandler_ParamsSpec,
      null,
      [page, handler],
      false);
  }

};

customize_buttons.mojom.CustomizeButtonsHandlerFactory.getRemote = function() {
  let remote = new customize_buttons.mojom.CustomizeButtonsHandlerFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'customize_buttons.mojom.CustomizeButtonsHandlerFactory',
    'context');
  return remote.$;
};

customize_buttons.mojom.CustomizeButtonsHandlerFactoryReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('CustomizeButtonsHandlerFactory', [
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
             decoder.decodeStructInline(customize_buttons.mojom.CustomizeButtonsHandlerFactory_CreateCustomizeButtonsHandler_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(customize_buttons.mojom.CustomizeButtonsHandlerFactory_CreateCustomizeButtonsHandler_ParamsSpec.$.structSpec);
          const result = this.impl.createCustomizeButtonsHandler(params.page, params.handler);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

customize_buttons.mojom.CustomizeButtonsHandlerFactoryReceiver = customize_buttons.mojom.CustomizeButtonsHandlerFactoryReceiver;

customize_buttons.mojom.CustomizeButtonsHandlerFactoryPtr = customize_buttons.mojom.CustomizeButtonsHandlerFactoryRemote;
customize_buttons.mojom.CustomizeButtonsHandlerFactoryRequest = customize_buttons.mojom.CustomizeButtonsHandlerFactoryPendingReceiver;


// Interface: CustomizeButtonsHandler
mojo.internal.Struct(
    customize_buttons.mojom.CustomizeButtonsHandler_IncrementCustomizeChromeButtonOpenCount_ParamsSpec, 'customize_buttons.mojom.CustomizeButtonsHandler_IncrementCustomizeChromeButtonOpenCount_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    customize_buttons.mojom.CustomizeButtonsHandler_IncrementWallpaperSearchButtonShownCount_ParamsSpec, 'customize_buttons.mojom.CustomizeButtonsHandler_IncrementWallpaperSearchButtonShownCount_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    customize_buttons.mojom.CustomizeButtonsHandler_SetCustomizeChromeSidePanelVisible_ParamsSpec, 'customize_buttons.mojom.CustomizeButtonsHandler_SetCustomizeChromeSidePanelVisible_Params', [
      mojo.internal.StructField('section', 0, 0, side_panel.mojom.CustomizeChromeSectionSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('trigger', 8, 0, customize_buttons.mojom.SidePanelOpenTriggerSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('visible', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

customize_buttons.mojom.CustomizeButtonsHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

customize_buttons.mojom.CustomizeButtonsHandlerRemote = class {
  static get $interfaceName() {
    return 'customize_buttons.mojom.CustomizeButtonsHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      customize_buttons.mojom.CustomizeButtonsHandlerPendingReceiver,
      handle);
    this.$ = new customize_buttons.mojom.CustomizeButtonsHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  incrementCustomizeChromeButtonOpenCount() {
    return this.$.incrementCustomizeChromeButtonOpenCount();
  }
  incrementWallpaperSearchButtonShownCount() {
    return this.$.incrementWallpaperSearchButtonShownCount();
  }
  setCustomizeChromeSidePanelVisible(visible, section, trigger) {
    return this.$.setCustomizeChromeSidePanelVisible(visible, section, trigger);
  }
};

customize_buttons.mojom.CustomizeButtonsHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('CustomizeButtonsHandler', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  incrementCustomizeChromeButtonOpenCount() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      customize_buttons.mojom.CustomizeButtonsHandler_IncrementCustomizeChromeButtonOpenCount_ParamsSpec,
      null,
      [],
      false);
  }

  incrementWallpaperSearchButtonShownCount() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      customize_buttons.mojom.CustomizeButtonsHandler_IncrementWallpaperSearchButtonShownCount_ParamsSpec,
      null,
      [],
      false);
  }

  setCustomizeChromeSidePanelVisible(visible, section, trigger) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      customize_buttons.mojom.CustomizeButtonsHandler_SetCustomizeChromeSidePanelVisible_ParamsSpec,
      null,
      [visible, section, trigger],
      false);
  }

};

customize_buttons.mojom.CustomizeButtonsHandler.getRemote = function() {
  let remote = new customize_buttons.mojom.CustomizeButtonsHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'customize_buttons.mojom.CustomizeButtonsHandler',
    'context');
  return remote.$;
};

customize_buttons.mojom.CustomizeButtonsHandlerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('CustomizeButtonsHandler', [
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
             decoder.decodeStructInline(customize_buttons.mojom.CustomizeButtonsHandler_IncrementCustomizeChromeButtonOpenCount_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(customize_buttons.mojom.CustomizeButtonsHandler_IncrementWallpaperSearchButtonShownCount_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(customize_buttons.mojom.CustomizeButtonsHandler_SetCustomizeChromeSidePanelVisible_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(customize_buttons.mojom.CustomizeButtonsHandler_IncrementCustomizeChromeButtonOpenCount_ParamsSpec.$.structSpec);
          const result = this.impl.incrementCustomizeChromeButtonOpenCount();
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(customize_buttons.mojom.CustomizeButtonsHandler_IncrementWallpaperSearchButtonShownCount_ParamsSpec.$.structSpec);
          const result = this.impl.incrementWallpaperSearchButtonShownCount();
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(customize_buttons.mojom.CustomizeButtonsHandler_SetCustomizeChromeSidePanelVisible_ParamsSpec.$.structSpec);
          const result = this.impl.setCustomizeChromeSidePanelVisible(params.visible, params.section, params.trigger);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

customize_buttons.mojom.CustomizeButtonsHandlerReceiver = customize_buttons.mojom.CustomizeButtonsHandlerReceiver;

customize_buttons.mojom.CustomizeButtonsHandlerPtr = customize_buttons.mojom.CustomizeButtonsHandlerRemote;
customize_buttons.mojom.CustomizeButtonsHandlerRequest = customize_buttons.mojom.CustomizeButtonsHandlerPendingReceiver;


// Interface: CustomizeButtonsDocument
mojo.internal.Struct(
    customize_buttons.mojom.CustomizeButtonsDocument_SetCustomizeChromeSidePanelVisibility_ParamsSpec, 'customize_buttons.mojom.CustomizeButtonsDocument_SetCustomizeChromeSidePanelVisibility_Params', [
      mojo.internal.StructField('visible', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

customize_buttons.mojom.CustomizeButtonsDocumentPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

customize_buttons.mojom.CustomizeButtonsDocumentRemote = class {
  static get $interfaceName() {
    return 'customize_buttons.mojom.CustomizeButtonsDocument';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      customize_buttons.mojom.CustomizeButtonsDocumentPendingReceiver,
      handle);
    this.$ = new customize_buttons.mojom.CustomizeButtonsDocumentRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  setCustomizeChromeSidePanelVisibility(visible) {
    return this.$.setCustomizeChromeSidePanelVisibility(visible);
  }
};

customize_buttons.mojom.CustomizeButtonsDocumentRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('CustomizeButtonsDocument', [
      { explicit: null },
    ]);
  }

  setCustomizeChromeSidePanelVisibility(visible) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      customize_buttons.mojom.CustomizeButtonsDocument_SetCustomizeChromeSidePanelVisibility_ParamsSpec,
      null,
      [visible],
      false);
  }

};

customize_buttons.mojom.CustomizeButtonsDocument.getRemote = function() {
  let remote = new customize_buttons.mojom.CustomizeButtonsDocumentRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'customize_buttons.mojom.CustomizeButtonsDocument',
    'context');
  return remote.$;
};

customize_buttons.mojom.CustomizeButtonsDocumentReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('CustomizeButtonsDocument', [
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
             decoder.decodeStructInline(customize_buttons.mojom.CustomizeButtonsDocument_SetCustomizeChromeSidePanelVisibility_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(customize_buttons.mojom.CustomizeButtonsDocument_SetCustomizeChromeSidePanelVisibility_ParamsSpec.$.structSpec);
          const result = this.impl.setCustomizeChromeSidePanelVisibility(params.visible);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

customize_buttons.mojom.CustomizeButtonsDocumentReceiver = customize_buttons.mojom.CustomizeButtonsDocumentReceiver;

customize_buttons.mojom.CustomizeButtonsDocumentPtr = customize_buttons.mojom.CustomizeButtonsDocumentRemote;
customize_buttons.mojom.CustomizeButtonsDocumentRequest = customize_buttons.mojom.CustomizeButtonsDocumentPendingReceiver;

