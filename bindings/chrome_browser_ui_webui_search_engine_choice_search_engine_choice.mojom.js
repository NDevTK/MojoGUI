// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/search_engine_choice/search_engine_choice.mojom
// Module: search_engine_choice.mojom

'use strict';

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
      mojo.internal.StructField('handler', 0, 0, mojo.internal.InterfaceRequest(search_engine_choice.mojom.PageHandlerSpec), null, false, 0, undefined),
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
};

search_engine_choice.mojom.PageHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createPageHandler(handler) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
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
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
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
        // Create a view of ONLY the payload (skipping the header)
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        // Decoder uses payload view starting at 0
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: CreatePageHandler
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(search_engine_choice.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreatePageHandler (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(search_engine_choice.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.createPageHandler');
          const result = this.impl.createPageHandler(params.handler);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
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
};

search_engine_choice.mojom.PageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  displayDialog() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      search_engine_choice.mojom.PageHandler_DisplayDialog_ParamsSpec,
      null,
      [],
      false);
  }

  handleSearchEngineChoiceSelected(prepopulate_id, save_guest_mode_selection) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      search_engine_choice.mojom.PageHandler_HandleSearchEngineChoiceSelected_ParamsSpec,
      null,
      [prepopulate_id, save_guest_mode_selection],
      false);
  }

  handleLearnMoreLinkClicked() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      search_engine_choice.mojom.PageHandler_HandleLearnMoreLinkClicked_ParamsSpec,
      null,
      [],
      false);
  }

  handleMoreButtonClicked() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      search_engine_choice.mojom.PageHandler_HandleMoreButtonClicked_ParamsSpec,
      null,
      [],
      false);
  }

  recordScrollState(scroll_state) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
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
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
    this.ordinalMap.set(3, 3); // Default ordinal 3 -> Index 3
    this.ordinalMap.set(4, 4); // Default ordinal 4 -> Index 4
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
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
        // Create a view of ONLY the payload (skipping the header)
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        // Decoder uses payload view starting at 0
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: DisplayDialog
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(search_engine_choice.mojom.PageHandler_DisplayDialog_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DisplayDialog (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: HandleSearchEngineChoiceSelected
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(search_engine_choice.mojom.PageHandler_HandleSearchEngineChoiceSelected_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> HandleSearchEngineChoiceSelected (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: HandleLearnMoreLinkClicked
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(search_engine_choice.mojom.PageHandler_HandleLearnMoreLinkClicked_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> HandleLearnMoreLinkClicked (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: HandleMoreButtonClicked
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(search_engine_choice.mojom.PageHandler_HandleMoreButtonClicked_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> HandleMoreButtonClicked (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: RecordScrollState
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(search_engine_choice.mojom.PageHandler_RecordScrollState_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RecordScrollState (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(search_engine_choice.mojom.PageHandler_DisplayDialog_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.displayDialog');
          const result = this.impl.displayDialog();
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(search_engine_choice.mojom.PageHandler_HandleSearchEngineChoiceSelected_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.handleSearchEngineChoiceSelected');
          const result = this.impl.handleSearchEngineChoiceSelected(params.prepopulate_id, params.save_guest_mode_selection);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(search_engine_choice.mojom.PageHandler_HandleLearnMoreLinkClicked_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.handleLearnMoreLinkClicked');
          const result = this.impl.handleLearnMoreLinkClicked();
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(search_engine_choice.mojom.PageHandler_HandleMoreButtonClicked_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.handleMoreButtonClicked');
          const result = this.impl.handleMoreButtonClicked();
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(search_engine_choice.mojom.PageHandler_RecordScrollState_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.recordScrollState');
          const result = this.impl.recordScrollState(params.scroll_state);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

search_engine_choice.mojom.PageHandlerReceiver = search_engine_choice.mojom.PageHandlerReceiver;

search_engine_choice.mojom.PageHandlerPtr = search_engine_choice.mojom.PageHandlerRemote;
search_engine_choice.mojom.PageHandlerRequest = search_engine_choice.mojom.PageHandlerPendingReceiver;

