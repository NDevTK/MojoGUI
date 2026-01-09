// Auto-generated MojoJS binding
// Source: chromium_src/chrome/common/search/search.mojom
// Module: search.mojom

'use strict';

// Module namespace
var search = search || {};
search.mojom = search.mojom || {};


// Interface: EmbeddedSearchConnector
search.mojom.EmbeddedSearchConnector = {};

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
      [embedded_search, client]);
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

// ParamsSpec for Connect
search.mojom.EmbeddedSearchConnector_Connect_ParamsSpec = {
  $: {
    structSpec: {
      name: 'search.mojom.EmbeddedSearchConnector.Connect_Params',
      packedSize: 16,
      fields: [
        { name: 'embedded_search', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.AssociatedInterfaceRequest, nullable: false },
        { name: 'client', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.AssociatedInterfaceProxy, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
search.mojom.EmbeddedSearchConnectorPtr = search.mojom.EmbeddedSearchConnectorRemote;
search.mojom.EmbeddedSearchConnectorRequest = search.mojom.EmbeddedSearchConnectorPendingReceiver;


// Interface: EmbeddedSearch
search.mojom.EmbeddedSearch = {};

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
      [page_seq_no, focus]);
  }

  deleteMostVisitedItem(page_seq_no, url) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      search.mojom.EmbeddedSearch_DeleteMostVisitedItem_ParamsSpec,
      null,
      [page_seq_no, url]);
  }

  undoAllMostVisitedDeletions(page_seq_no) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      search.mojom.EmbeddedSearch_UndoAllMostVisitedDeletions_ParamsSpec,
      null,
      [page_seq_no]);
  }

  undoMostVisitedDeletion(page_seq_no, url) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      search.mojom.EmbeddedSearch_UndoMostVisitedDeletion_ParamsSpec,
      null,
      [page_seq_no, url]);
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

// ParamsSpec for FocusOmnibox
search.mojom.EmbeddedSearch_FocusOmnibox_ParamsSpec = {
  $: {
    structSpec: {
      name: 'search.mojom.EmbeddedSearch.FocusOmnibox_Params',
      packedSize: 24,
      fields: [
        { name: 'page_seq_no', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'focus', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for DeleteMostVisitedItem
search.mojom.EmbeddedSearch_DeleteMostVisitedItem_ParamsSpec = {
  $: {
    structSpec: {
      name: 'search.mojom.EmbeddedSearch.DeleteMostVisitedItem_Params',
      packedSize: 24,
      fields: [
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'page_seq_no', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for UndoAllMostVisitedDeletions
search.mojom.EmbeddedSearch_UndoAllMostVisitedDeletions_ParamsSpec = {
  $: {
    structSpec: {
      name: 'search.mojom.EmbeddedSearch.UndoAllMostVisitedDeletions_Params',
      packedSize: 16,
      fields: [
        { name: 'page_seq_no', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for UndoMostVisitedDeletion
search.mojom.EmbeddedSearch_UndoMostVisitedDeletion_ParamsSpec = {
  $: {
    structSpec: {
      name: 'search.mojom.EmbeddedSearch.UndoMostVisitedDeletion_Params',
      packedSize: 24,
      fields: [
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'page_seq_no', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
search.mojom.EmbeddedSearchPtr = search.mojom.EmbeddedSearchRemote;
search.mojom.EmbeddedSearchRequest = search.mojom.EmbeddedSearchPendingReceiver;


// Interface: EmbeddedSearchClient
search.mojom.EmbeddedSearchClient = {};

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
      [page_seq_no]);
  }

  focusChanged(new_focus_state, reason) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      search.mojom.EmbeddedSearchClient_FocusChanged_ParamsSpec,
      null,
      [new_focus_state, reason]);
  }

  mostVisitedInfoChanged(most_visited_info) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      search.mojom.EmbeddedSearchClient_MostVisitedInfoChanged_ParamsSpec,
      null,
      [most_visited_info]);
  }

  setInputInProgress(input_in_progress) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      search.mojom.EmbeddedSearchClient_SetInputInProgress_ParamsSpec,
      null,
      [input_in_progress]);
  }

  themeChanged(theme) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      search.mojom.EmbeddedSearchClient_ThemeChanged_ParamsSpec,
      null,
      [theme]);
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

// ParamsSpec for SetPageSequenceNumber
search.mojom.EmbeddedSearchClient_SetPageSequenceNumber_ParamsSpec = {
  $: {
    structSpec: {
      name: 'search.mojom.EmbeddedSearchClient.SetPageSequenceNumber_Params',
      packedSize: 16,
      fields: [
        { name: 'page_seq_no', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for FocusChanged
search.mojom.EmbeddedSearchClient_FocusChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'search.mojom.EmbeddedSearchClient.FocusChanged_Params',
      packedSize: 24,
      fields: [
        { name: 'new_focus_state', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'reason', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for MostVisitedInfoChanged
search.mojom.EmbeddedSearchClient_MostVisitedInfoChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'search.mojom.EmbeddedSearchClient.MostVisitedInfoChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'most_visited_info', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetInputInProgress
search.mojom.EmbeddedSearchClient_SetInputInProgress_ParamsSpec = {
  $: {
    structSpec: {
      name: 'search.mojom.EmbeddedSearchClient.SetInputInProgress_Params',
      packedSize: 16,
      fields: [
        { name: 'input_in_progress', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ThemeChanged
search.mojom.EmbeddedSearchClient_ThemeChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'search.mojom.EmbeddedSearchClient.ThemeChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'theme', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
search.mojom.EmbeddedSearchClientPtr = search.mojom.EmbeddedSearchClientRemote;
search.mojom.EmbeddedSearchClientRequest = search.mojom.EmbeddedSearchClientPendingReceiver;

