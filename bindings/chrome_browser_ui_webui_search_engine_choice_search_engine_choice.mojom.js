// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/search_engine_choice/search_engine_choice.mojom
// Module: search_engine_choice.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var search_engine_choice = search_engine_choice || {};
search_engine_choice.mojom = search_engine_choice.mojom || {};

search_engine_choice.mojom.ScrollStateSpec = { $: mojo.internal.Enum() };
search_engine_choice.mojom.PageHandlerFactory = {};
search_engine_choice.mojom.PageHandlerFactory.$interfaceName = 'search_engine_choice.mojom.PageHandlerFactory';
search_engine_choice.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec = { $: {} };
search_engine_choice.mojom.PageHandler = {};
search_engine_choice.mojom.PageHandler.$interfaceName = 'search_engine_choice.mojom.PageHandler';
search_engine_choice.mojom.PageHandler_DisplayDialog_ParamsSpec = { $: {} };
search_engine_choice.mojom.PageHandler_HandleSearchEngineChoiceSelected_ParamsSpec = { $: {} };
search_engine_choice.mojom.PageHandler_HandleLearnMoreLinkClicked_ParamsSpec = { $: {} };
search_engine_choice.mojom.PageHandler_HandleMoreButtonClicked_ParamsSpec = { $: {} };
search_engine_choice.mojom.PageHandler_RecordScrollState_ParamsSpec = { $: {} };

// Enum: ScrollState
search_engine_choice.mojom.ScrollState = {
  kAtTheBottom: 0,
  kAtTheBottomWithErrorMargin: 1,
  kNotAtTheBottom: 2,
};

// Interface: PageHandlerFactory
mojo.internal.Struct(
    search_engine_choice.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec, 'search_engine_choice.mojom.PageHandlerFactory_CreatePageHandler_Params', [
      mojo.internal.StructField('handler', 0, 0, mojo.internal.InterfaceRequest(search_engine_choice.mojom.PageHandlerRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

search_engine_choice.mojom.PageHandlerFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

search_engine_choice.mojom.PageHandlerFactoryRemote = class {
  static get $interfaceName() {
    return 'search_engine_choice.mojom.PageHandlerFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      search_engine_choice.mojom.PageHandlerFactoryPendingReceiver,
      handle);
    this.$ = new search_engine_choice.mojom.PageHandlerFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  createPageHandler(handler) {
    return this.$.createPageHandler(handler);
  }
};

search_engine_choice.mojom.PageHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('PageHandlerFactory', [
      { explicit: null },
    ]);
  }

  createPageHandler(handler) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      search_engine_choice.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec,
      null,
      [handler],
      false);
  }

};

search_engine_choice.mojom.PageHandlerFactory.getRemote = function() {
  let remote = new search_engine_choice.mojom.PageHandlerFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'search_engine_choice.mojom.PageHandlerFactory',
    'context');
  return remote.$;
};

search_engine_choice.mojom.PageHandlerFactoryReceiver = class {
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
             decoder.decodeStructInline(search_engine_choice.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(search_engine_choice.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec.$.structSpec);
          const result = this.impl.createPageHandler(params.handler);
          break;
        }
      }
      } catch (err) {}
    });
  }
};

search_engine_choice.mojom.PageHandlerFactoryReceiver = search_engine_choice.mojom.PageHandlerFactoryReceiver;

search_engine_choice.mojom.PageHandlerFactoryPtr = search_engine_choice.mojom.PageHandlerFactoryRemote;
search_engine_choice.mojom.PageHandlerFactoryRequest = search_engine_choice.mojom.PageHandlerFactoryPendingReceiver;


// Interface: PageHandler
mojo.internal.Struct(
    search_engine_choice.mojom.PageHandler_DisplayDialog_ParamsSpec, 'search_engine_choice.mojom.PageHandler_DisplayDialog_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    search_engine_choice.mojom.PageHandler_HandleSearchEngineChoiceSelected_ParamsSpec, 'search_engine_choice.mojom.PageHandler_HandleSearchEngineChoiceSelected_Params', [
      mojo.internal.StructField('prepopulate_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('save_guest_mode_selection', 4, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    search_engine_choice.mojom.PageHandler_HandleLearnMoreLinkClicked_ParamsSpec, 'search_engine_choice.mojom.PageHandler_HandleLearnMoreLinkClicked_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    search_engine_choice.mojom.PageHandler_HandleMoreButtonClicked_ParamsSpec, 'search_engine_choice.mojom.PageHandler_HandleMoreButtonClicked_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    search_engine_choice.mojom.PageHandler_RecordScrollState_ParamsSpec, 'search_engine_choice.mojom.PageHandler_RecordScrollState_Params', [
      mojo.internal.StructField('scroll_state', 0, 0, search_engine_choice.mojom.ScrollStateSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

search_engine_choice.mojom.PageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

search_engine_choice.mojom.PageHandlerRemote = class {
  static get $interfaceName() {
    return 'search_engine_choice.mojom.PageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      search_engine_choice.mojom.PageHandlerPendingReceiver,
      handle);
    this.$ = new search_engine_choice.mojom.PageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  displayDialog() {
    return this.$.displayDialog();
  }
  handleSearchEngineChoiceSelected(prepopulate_id, save_guest_mode_selection) {
    return this.$.handleSearchEngineChoiceSelected(prepopulate_id, save_guest_mode_selection);
  }
  handleLearnMoreLinkClicked() {
    return this.$.handleLearnMoreLinkClicked();
  }
  handleMoreButtonClicked() {
    return this.$.handleMoreButtonClicked();
  }
  recordScrollState(scroll_state) {
    return this.$.recordScrollState(scroll_state);
  }
};

search_engine_choice.mojom.PageHandlerRemoteCallHandler = class {
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

  displayDialog() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      search_engine_choice.mojom.PageHandler_DisplayDialog_ParamsSpec,
      null,
      [],
      false);
  }

  handleSearchEngineChoiceSelected(prepopulate_id, save_guest_mode_selection) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      search_engine_choice.mojom.PageHandler_HandleSearchEngineChoiceSelected_ParamsSpec,
      null,
      [prepopulate_id, save_guest_mode_selection],
      false);
  }

  handleLearnMoreLinkClicked() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      search_engine_choice.mojom.PageHandler_HandleLearnMoreLinkClicked_ParamsSpec,
      null,
      [],
      false);
  }

  handleMoreButtonClicked() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      search_engine_choice.mojom.PageHandler_HandleMoreButtonClicked_ParamsSpec,
      null,
      [],
      false);
  }

  recordScrollState(scroll_state) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      search_engine_choice.mojom.PageHandler_RecordScrollState_ParamsSpec,
      null,
      [scroll_state],
      false);
  }

};

search_engine_choice.mojom.PageHandler.getRemote = function() {
  let remote = new search_engine_choice.mojom.PageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'search_engine_choice.mojom.PageHandler',
    'context');
  return remote.$;
};

search_engine_choice.mojom.PageHandlerReceiver = class {
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
             decoder.decodeStructInline(search_engine_choice.mojom.PageHandler_DisplayDialog_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(search_engine_choice.mojom.PageHandler_HandleSearchEngineChoiceSelected_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(search_engine_choice.mojom.PageHandler_HandleLearnMoreLinkClicked_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(search_engine_choice.mojom.PageHandler_HandleMoreButtonClicked_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(search_engine_choice.mojom.PageHandler_RecordScrollState_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(search_engine_choice.mojom.PageHandler_DisplayDialog_ParamsSpec.$.structSpec);
          const result = this.impl.displayDialog();
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(search_engine_choice.mojom.PageHandler_HandleSearchEngineChoiceSelected_ParamsSpec.$.structSpec);
          const result = this.impl.handleSearchEngineChoiceSelected(params.prepopulate_id, params.save_guest_mode_selection);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(search_engine_choice.mojom.PageHandler_HandleLearnMoreLinkClicked_ParamsSpec.$.structSpec);
          const result = this.impl.handleLearnMoreLinkClicked();
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(search_engine_choice.mojom.PageHandler_HandleMoreButtonClicked_ParamsSpec.$.structSpec);
          const result = this.impl.handleMoreButtonClicked();
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(search_engine_choice.mojom.PageHandler_RecordScrollState_ParamsSpec.$.structSpec);
          const result = this.impl.recordScrollState(params.scroll_state);
          break;
        }
      }
      } catch (err) {}
    });
  }
};

search_engine_choice.mojom.PageHandlerReceiver = search_engine_choice.mojom.PageHandlerReceiver;

search_engine_choice.mojom.PageHandlerPtr = search_engine_choice.mojom.PageHandlerRemote;
search_engine_choice.mojom.PageHandlerRequest = search_engine_choice.mojom.PageHandlerPendingReceiver;

