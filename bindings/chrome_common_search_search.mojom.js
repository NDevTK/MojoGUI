// Auto-generated MojoJS binding
// Source: chromium_src/chrome/common/search/search.mojom
// Module: search.mojom

'use strict';

// Module namespace
var search = search || {};
search.mojom = search.mojom || {};
var url = url || {};

search.mojom.EmbeddedSearchConnector = {};
search.mojom.EmbeddedSearchConnector.$interfaceName = 'search.mojom.EmbeddedSearchConnector';
search.mojom.EmbeddedSearchConnector_Connect_ParamsSpec = { $: {} };
search.mojom.EmbeddedSearch = {};
search.mojom.EmbeddedSearch.$interfaceName = 'search.mojom.EmbeddedSearch';
search.mojom.EmbeddedSearch_FocusOmnibox_ParamsSpec = { $: {} };
search.mojom.EmbeddedSearch_DeleteMostVisitedItem_ParamsSpec = { $: {} };
search.mojom.EmbeddedSearch_UndoAllMostVisitedDeletions_ParamsSpec = { $: {} };
search.mojom.EmbeddedSearch_UndoMostVisitedDeletion_ParamsSpec = { $: {} };
search.mojom.EmbeddedSearchClient = {};
search.mojom.EmbeddedSearchClient.$interfaceName = 'search.mojom.EmbeddedSearchClient';
search.mojom.EmbeddedSearchClient_SetPageSequenceNumber_ParamsSpec = { $: {} };
search.mojom.EmbeddedSearchClient_FocusChanged_ParamsSpec = { $: {} };
search.mojom.EmbeddedSearchClient_MostVisitedInfoChanged_ParamsSpec = { $: {} };
search.mojom.EmbeddedSearchClient_SetInputInProgress_ParamsSpec = { $: {} };
search.mojom.EmbeddedSearchClient_ThemeChanged_ParamsSpec = { $: {} };

// Interface: EmbeddedSearchConnector
mojo.internal.Struct(
    search.mojom.EmbeddedSearchConnector_Connect_ParamsSpec, 'search.mojom.EmbeddedSearchConnector_Connect_Params', [
      mojo.internal.StructField('embedded_search', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('client', 8, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 24]]);

search.mojom.EmbeddedSearchConnectorPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

search.mojom.EmbeddedSearchConnectorRemote = class {
  static get $interfaceName() {
    return 'search.mojom.EmbeddedSearchConnector';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      search.mojom.EmbeddedSearchConnectorPendingReceiver,
      handle);
    this.$ = new search.mojom.EmbeddedSearchConnectorRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

search.mojom.EmbeddedSearchConnectorRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  connect(embedded_search, client) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      search.mojom.EmbeddedSearchConnector_Connect_ParamsSpec,
      null,
      [embedded_search, client],
      false);
  }

};

search.mojom.EmbeddedSearchConnector.getRemote = function() {
  let remote = new search.mojom.EmbeddedSearchConnectorRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'search.mojom.EmbeddedSearchConnector',
    'context');
  return remote.$;
};

search.mojom.EmbeddedSearchConnectorReceiver = class {
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
        message = {
          header: args[1],
          payload: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: Connect
        try {
             decoder.decodeStruct(search.mojom.EmbeddedSearchConnector_Connect_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Connect (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(search.mojom.EmbeddedSearchConnector_Connect_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.connect');
          const result = this.impl.connect(params.embedded_search, params.client);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

search.mojom.EmbeddedSearchConnectorReceiver = search.mojom.EmbeddedSearchConnectorReceiver;

search.mojom.EmbeddedSearchConnectorPtr = search.mojom.EmbeddedSearchConnectorRemote;
search.mojom.EmbeddedSearchConnectorRequest = search.mojom.EmbeddedSearchConnectorPendingReceiver;


// Interface: EmbeddedSearch
mojo.internal.Struct(
    search.mojom.EmbeddedSearch_FocusOmnibox_ParamsSpec, 'search.mojom.EmbeddedSearch_FocusOmnibox_Params', [
      mojo.internal.StructField('page_seq_no', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('focus', 4, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    search.mojom.EmbeddedSearch_DeleteMostVisitedItem_ParamsSpec, 'search.mojom.EmbeddedSearch_DeleteMostVisitedItem_Params', [
      mojo.internal.StructField('url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('page_seq_no', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    search.mojom.EmbeddedSearch_UndoAllMostVisitedDeletions_ParamsSpec, 'search.mojom.EmbeddedSearch_UndoAllMostVisitedDeletions_Params', [
      mojo.internal.StructField('page_seq_no', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    search.mojom.EmbeddedSearch_UndoMostVisitedDeletion_ParamsSpec, 'search.mojom.EmbeddedSearch_UndoMostVisitedDeletion_Params', [
      mojo.internal.StructField('url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('page_seq_no', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

search.mojom.EmbeddedSearchPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

search.mojom.EmbeddedSearchRemote = class {
  static get $interfaceName() {
    return 'search.mojom.EmbeddedSearch';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      search.mojom.EmbeddedSearchPendingReceiver,
      handle);
    this.$ = new search.mojom.EmbeddedSearchRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

search.mojom.EmbeddedSearchRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  focusOmnibox(page_seq_no, focus) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      search.mojom.EmbeddedSearch_FocusOmnibox_ParamsSpec,
      null,
      [page_seq_no, focus],
      false);
  }

  deleteMostVisitedItem(page_seq_no, url) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      search.mojom.EmbeddedSearch_DeleteMostVisitedItem_ParamsSpec,
      null,
      [page_seq_no, url],
      false);
  }

  undoAllMostVisitedDeletions(page_seq_no) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      search.mojom.EmbeddedSearch_UndoAllMostVisitedDeletions_ParamsSpec,
      null,
      [page_seq_no],
      false);
  }

  undoMostVisitedDeletion(page_seq_no, url) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      search.mojom.EmbeddedSearch_UndoMostVisitedDeletion_ParamsSpec,
      null,
      [page_seq_no, url],
      false);
  }

};

search.mojom.EmbeddedSearch.getRemote = function() {
  let remote = new search.mojom.EmbeddedSearchRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'search.mojom.EmbeddedSearch',
    'context');
  return remote.$;
};

search.mojom.EmbeddedSearchReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
    this.ordinalMap.set(3, 3); // Default ordinal 3 -> Index 3
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
        message = {
          header: args[1],
          payload: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: FocusOmnibox
        try {
             decoder.decodeStruct(search.mojom.EmbeddedSearch_FocusOmnibox_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> FocusOmnibox (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 1: DeleteMostVisitedItem
        try {
             decoder.decodeStruct(search.mojom.EmbeddedSearch_DeleteMostVisitedItem_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DeleteMostVisitedItem (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 2: UndoAllMostVisitedDeletions
        try {
             decoder.decodeStruct(search.mojom.EmbeddedSearch_UndoAllMostVisitedDeletions_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UndoAllMostVisitedDeletions (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 3: UndoMostVisitedDeletion
        try {
             decoder.decodeStruct(search.mojom.EmbeddedSearch_UndoMostVisitedDeletion_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UndoMostVisitedDeletion (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(search.mojom.EmbeddedSearch_FocusOmnibox_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.focusOmnibox');
          const result = this.impl.focusOmnibox(params.page_seq_no, params.focus);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(search.mojom.EmbeddedSearch_DeleteMostVisitedItem_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.deleteMostVisitedItem');
          const result = this.impl.deleteMostVisitedItem(params.page_seq_no, params.url);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(search.mojom.EmbeddedSearch_UndoAllMostVisitedDeletions_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.undoAllMostVisitedDeletions');
          const result = this.impl.undoAllMostVisitedDeletions(params.page_seq_no);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(search.mojom.EmbeddedSearch_UndoMostVisitedDeletion_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.undoMostVisitedDeletion');
          const result = this.impl.undoMostVisitedDeletion(params.page_seq_no, params.url);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

search.mojom.EmbeddedSearchReceiver = search.mojom.EmbeddedSearchReceiver;

search.mojom.EmbeddedSearchPtr = search.mojom.EmbeddedSearchRemote;
search.mojom.EmbeddedSearchRequest = search.mojom.EmbeddedSearchPendingReceiver;


// Interface: EmbeddedSearchClient
mojo.internal.Struct(
    search.mojom.EmbeddedSearchClient_SetPageSequenceNumber_ParamsSpec, 'search.mojom.EmbeddedSearchClient_SetPageSequenceNumber_Params', [
      mojo.internal.StructField('page_seq_no', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    search.mojom.EmbeddedSearchClient_FocusChanged_ParamsSpec, 'search.mojom.EmbeddedSearchClient_FocusChanged_Params', [
      mojo.internal.StructField('new_focus_state', 0, 0, search.mojom.OmniboxFocusStateSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('reason', 8, 0, search.mojom.OmniboxFocusChangeReasonSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    search.mojom.EmbeddedSearchClient_MostVisitedInfoChanged_ParamsSpec, 'search.mojom.EmbeddedSearchClient_MostVisitedInfoChanged_Params', [
      mojo.internal.StructField('most_visited_info', 0, 0, search.mojom.InstantMostVisitedInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    search.mojom.EmbeddedSearchClient_SetInputInProgress_ParamsSpec, 'search.mojom.EmbeddedSearchClient_SetInputInProgress_Params', [
      mojo.internal.StructField('input_in_progress', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    search.mojom.EmbeddedSearchClient_ThemeChanged_ParamsSpec, 'search.mojom.EmbeddedSearchClient_ThemeChanged_Params', [
      mojo.internal.StructField('theme', 0, 0, search.mojom.NtpThemeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

search.mojom.EmbeddedSearchClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

search.mojom.EmbeddedSearchClientRemote = class {
  static get $interfaceName() {
    return 'search.mojom.EmbeddedSearchClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      search.mojom.EmbeddedSearchClientPendingReceiver,
      handle);
    this.$ = new search.mojom.EmbeddedSearchClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

search.mojom.EmbeddedSearchClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  setPageSequenceNumber(page_seq_no) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      search.mojom.EmbeddedSearchClient_SetPageSequenceNumber_ParamsSpec,
      null,
      [page_seq_no],
      false);
  }

  focusChanged(new_focus_state, reason) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      search.mojom.EmbeddedSearchClient_FocusChanged_ParamsSpec,
      null,
      [new_focus_state, reason],
      false);
  }

  mostVisitedInfoChanged(most_visited_info) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      search.mojom.EmbeddedSearchClient_MostVisitedInfoChanged_ParamsSpec,
      null,
      [most_visited_info],
      false);
  }

  setInputInProgress(input_in_progress) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      search.mojom.EmbeddedSearchClient_SetInputInProgress_ParamsSpec,
      null,
      [input_in_progress],
      false);
  }

  themeChanged(theme) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      search.mojom.EmbeddedSearchClient_ThemeChanged_ParamsSpec,
      null,
      [theme],
      false);
  }

};

search.mojom.EmbeddedSearchClient.getRemote = function() {
  let remote = new search.mojom.EmbeddedSearchClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'search.mojom.EmbeddedSearchClient',
    'context');
  return remote.$;
};

search.mojom.EmbeddedSearchClientReceiver = class {
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
        message = {
          header: args[1],
          payload: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: SetPageSequenceNumber
        try {
             decoder.decodeStruct(search.mojom.EmbeddedSearchClient_SetPageSequenceNumber_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetPageSequenceNumber (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 1: FocusChanged
        try {
             decoder.decodeStruct(search.mojom.EmbeddedSearchClient_FocusChanged_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> FocusChanged (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 2: MostVisitedInfoChanged
        try {
             decoder.decodeStruct(search.mojom.EmbeddedSearchClient_MostVisitedInfoChanged_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> MostVisitedInfoChanged (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 3: SetInputInProgress
        try {
             decoder.decodeStruct(search.mojom.EmbeddedSearchClient_SetInputInProgress_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetInputInProgress (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 4: ThemeChanged
        try {
             decoder.decodeStruct(search.mojom.EmbeddedSearchClient_ThemeChanged_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ThemeChanged (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(search.mojom.EmbeddedSearchClient_SetPageSequenceNumber_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setPageSequenceNumber');
          const result = this.impl.setPageSequenceNumber(params.page_seq_no);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(search.mojom.EmbeddedSearchClient_FocusChanged_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.focusChanged');
          const result = this.impl.focusChanged(params.new_focus_state, params.reason);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(search.mojom.EmbeddedSearchClient_MostVisitedInfoChanged_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.mostVisitedInfoChanged');
          const result = this.impl.mostVisitedInfoChanged(params.most_visited_info);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(search.mojom.EmbeddedSearchClient_SetInputInProgress_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setInputInProgress');
          const result = this.impl.setInputInProgress(params.input_in_progress);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(search.mojom.EmbeddedSearchClient_ThemeChanged_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.themeChanged');
          const result = this.impl.themeChanged(params.theme);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

search.mojom.EmbeddedSearchClientReceiver = search.mojom.EmbeddedSearchClientReceiver;

search.mojom.EmbeddedSearchClientPtr = search.mojom.EmbeddedSearchClientRemote;
search.mojom.EmbeddedSearchClientRequest = search.mojom.EmbeddedSearchClientPendingReceiver;

