// Auto-generated MojoJS binding
// Source: chromium_src/chrome/common/search/search.mojom
// Module: search.mojom

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
  connect(embedded_search, client) {
    return this.$.connect(embedded_search, client);
  }
};

search.mojom.EmbeddedSearchConnectorRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('EmbeddedSearchConnector', [
      { explicit: null },
    ]);
  }

  connect(embedded_search, client) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
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
    const ordinals = window.mojoScrambler.getOrdinals('EmbeddedSearchConnector', [
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
    if (this.router_.onConnectionError) {
      this.router_.onConnectionError.addListener(() => {
         console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
      });
    }
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
             decoder.decodeStructInline(search.mojom.EmbeddedSearchConnector_Connect_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(search.mojom.EmbeddedSearchConnector_Connect_ParamsSpec.$.structSpec);
          const result = this.impl.connect(params.embedded_search, params.client);
          break;
        }
      }
      } catch (err) {}
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
  focusOmnibox(page_seq_no, focus) {
    return this.$.focusOmnibox(page_seq_no, focus);
  }
  deleteMostVisitedItem(page_seq_no, url) {
    return this.$.deleteMostVisitedItem(page_seq_no, url);
  }
  undoAllMostVisitedDeletions(page_seq_no) {
    return this.$.undoAllMostVisitedDeletions(page_seq_no);
  }
  undoMostVisitedDeletion(page_seq_no, url) {
    return this.$.undoMostVisitedDeletion(page_seq_no, url);
  }
};

search.mojom.EmbeddedSearchRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('EmbeddedSearch', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  focusOmnibox(page_seq_no, focus) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      search.mojom.EmbeddedSearch_FocusOmnibox_ParamsSpec,
      null,
      [page_seq_no, focus],
      false);
  }

  deleteMostVisitedItem(page_seq_no, url) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      search.mojom.EmbeddedSearch_DeleteMostVisitedItem_ParamsSpec,
      null,
      [page_seq_no, url],
      false);
  }

  undoAllMostVisitedDeletions(page_seq_no) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      search.mojom.EmbeddedSearch_UndoAllMostVisitedDeletions_ParamsSpec,
      null,
      [page_seq_no],
      false);
  }

  undoMostVisitedDeletion(page_seq_no, url) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
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
    const ordinals = window.mojoScrambler.getOrdinals('EmbeddedSearch', [
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
    if (this.router_.onConnectionError) {
      this.router_.onConnectionError.addListener(() => {
         console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
      });
    }
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
             decoder.decodeStructInline(search.mojom.EmbeddedSearch_FocusOmnibox_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(search.mojom.EmbeddedSearch_DeleteMostVisitedItem_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(search.mojom.EmbeddedSearch_UndoAllMostVisitedDeletions_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(search.mojom.EmbeddedSearch_UndoMostVisitedDeletion_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(search.mojom.EmbeddedSearch_FocusOmnibox_ParamsSpec.$.structSpec);
          const result = this.impl.focusOmnibox(params.page_seq_no, params.focus);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(search.mojom.EmbeddedSearch_DeleteMostVisitedItem_ParamsSpec.$.structSpec);
          const result = this.impl.deleteMostVisitedItem(params.page_seq_no, params.url);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(search.mojom.EmbeddedSearch_UndoAllMostVisitedDeletions_ParamsSpec.$.structSpec);
          const result = this.impl.undoAllMostVisitedDeletions(params.page_seq_no);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(search.mojom.EmbeddedSearch_UndoMostVisitedDeletion_ParamsSpec.$.structSpec);
          const result = this.impl.undoMostVisitedDeletion(params.page_seq_no, params.url);
          break;
        }
      }
      } catch (err) {}
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
  setPageSequenceNumber(page_seq_no) {
    return this.$.setPageSequenceNumber(page_seq_no);
  }
  focusChanged(new_focus_state, reason) {
    return this.$.focusChanged(new_focus_state, reason);
  }
  mostVisitedInfoChanged(most_visited_info) {
    return this.$.mostVisitedInfoChanged(most_visited_info);
  }
  setInputInProgress(input_in_progress) {
    return this.$.setInputInProgress(input_in_progress);
  }
  themeChanged(theme) {
    return this.$.themeChanged(theme);
  }
};

search.mojom.EmbeddedSearchClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('EmbeddedSearchClient', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  setPageSequenceNumber(page_seq_no) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      search.mojom.EmbeddedSearchClient_SetPageSequenceNumber_ParamsSpec,
      null,
      [page_seq_no],
      false);
  }

  focusChanged(new_focus_state, reason) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      search.mojom.EmbeddedSearchClient_FocusChanged_ParamsSpec,
      null,
      [new_focus_state, reason],
      false);
  }

  mostVisitedInfoChanged(most_visited_info) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      search.mojom.EmbeddedSearchClient_MostVisitedInfoChanged_ParamsSpec,
      null,
      [most_visited_info],
      false);
  }

  setInputInProgress(input_in_progress) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      search.mojom.EmbeddedSearchClient_SetInputInProgress_ParamsSpec,
      null,
      [input_in_progress],
      false);
  }

  themeChanged(theme) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
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
    const ordinals = window.mojoScrambler.getOrdinals('EmbeddedSearchClient', [
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
    if (this.router_.onConnectionError) {
      this.router_.onConnectionError.addListener(() => {
         console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
      });
    }
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
             decoder.decodeStructInline(search.mojom.EmbeddedSearchClient_SetPageSequenceNumber_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(search.mojom.EmbeddedSearchClient_FocusChanged_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(search.mojom.EmbeddedSearchClient_MostVisitedInfoChanged_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(search.mojom.EmbeddedSearchClient_SetInputInProgress_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(search.mojom.EmbeddedSearchClient_ThemeChanged_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(search.mojom.EmbeddedSearchClient_SetPageSequenceNumber_ParamsSpec.$.structSpec);
          const result = this.impl.setPageSequenceNumber(params.page_seq_no);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(search.mojom.EmbeddedSearchClient_FocusChanged_ParamsSpec.$.structSpec);
          const result = this.impl.focusChanged(params.new_focus_state, params.reason);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(search.mojom.EmbeddedSearchClient_MostVisitedInfoChanged_ParamsSpec.$.structSpec);
          const result = this.impl.mostVisitedInfoChanged(params.most_visited_info);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(search.mojom.EmbeddedSearchClient_SetInputInProgress_ParamsSpec.$.structSpec);
          const result = this.impl.setInputInProgress(params.input_in_progress);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(search.mojom.EmbeddedSearchClient_ThemeChanged_ParamsSpec.$.structSpec);
          const result = this.impl.themeChanged(params.theme);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

search.mojom.EmbeddedSearchClientReceiver = search.mojom.EmbeddedSearchClientReceiver;

search.mojom.EmbeddedSearchClientPtr = search.mojom.EmbeddedSearchClientRemote;
search.mojom.EmbeddedSearchClientRequest = search.mojom.EmbeddedSearchClientPendingReceiver;

