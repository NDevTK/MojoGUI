// Auto-generated MojoJS binding
// Source: chromium_src/chrome/common/search/search.mojom
// Module: search.mojom

'use strict';

// Module namespace
var search = search || {};
search.mojom = search.mojom || {};
var url = url || {};


// Interface: EmbeddedSearchConnector
search.mojom.mojom.EmbeddedSearchConnector = {};

search.mojom.mojom.EmbeddedSearchConnectorPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

search.mojom.mojom.EmbeddedSearchConnectorRemote = class {
  static get $interfaceName() {
    return 'search.mojom.EmbeddedSearchConnector';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      search.mojom.mojom.EmbeddedSearchConnectorPendingReceiver,
      handle);
    this.$ = new search.mojom.mojom.EmbeddedSearchConnectorRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

search.mojom.mojom.EmbeddedSearchConnectorRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  connect(embedded_search, client) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      search.mojom.mojom.EmbeddedSearchConnector_Connect_ParamsSpec,
      null,
      [embedded_search, client]);
  }

};

search.mojom.mojom.EmbeddedSearchConnector.getRemote = function() {
  let remote = new search.mojom.mojom.EmbeddedSearchConnectorRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'search.mojom.EmbeddedSearchConnector',
    'context');
  return remote.$;
};

// ParamsSpec for Connect
search.mojom.mojom.EmbeddedSearchConnector_Connect_ParamsSpec = {
  $: {
    structSpec: {
      name: 'search.mojom.EmbeddedSearchConnector.Connect_Params',
      packedSize: 24,
      fields: [
        { name: 'embedded_search', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.AssociatedInterfaceRequest(search.mojom.EmbeddedSearchRemote), nullable: false, minVersion: 0 },
        { name: 'client', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.AssociatedInterfaceProxy(search.mojom.EmbeddedSearchClientRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
search.mojom.mojom.EmbeddedSearchConnectorPtr = search.mojom.mojom.EmbeddedSearchConnectorRemote;
search.mojom.mojom.EmbeddedSearchConnectorRequest = search.mojom.mojom.EmbeddedSearchConnectorPendingReceiver;


// Interface: EmbeddedSearch
search.mojom.mojom.EmbeddedSearch = {};

search.mojom.mojom.EmbeddedSearchPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

search.mojom.mojom.EmbeddedSearchRemote = class {
  static get $interfaceName() {
    return 'search.mojom.EmbeddedSearch';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      search.mojom.mojom.EmbeddedSearchPendingReceiver,
      handle);
    this.$ = new search.mojom.mojom.EmbeddedSearchRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

search.mojom.mojom.EmbeddedSearchRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  focusOmnibox(page_seq_no, focus) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      search.mojom.mojom.EmbeddedSearch_FocusOmnibox_ParamsSpec,
      null,
      [page_seq_no, focus]);
  }

  deleteMostVisitedItem(page_seq_no, url) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      search.mojom.mojom.EmbeddedSearch_DeleteMostVisitedItem_ParamsSpec,
      null,
      [page_seq_no, url]);
  }

  undoAllMostVisitedDeletions(page_seq_no) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      search.mojom.mojom.EmbeddedSearch_UndoAllMostVisitedDeletions_ParamsSpec,
      null,
      [page_seq_no]);
  }

  undoMostVisitedDeletion(page_seq_no, url) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      search.mojom.mojom.EmbeddedSearch_UndoMostVisitedDeletion_ParamsSpec,
      null,
      [page_seq_no, url]);
  }

};

search.mojom.mojom.EmbeddedSearch.getRemote = function() {
  let remote = new search.mojom.mojom.EmbeddedSearchRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'search.mojom.EmbeddedSearch',
    'context');
  return remote.$;
};

// ParamsSpec for FocusOmnibox
search.mojom.mojom.EmbeddedSearch_FocusOmnibox_ParamsSpec = {
  $: {
    structSpec: {
      name: 'search.mojom.EmbeddedSearch.FocusOmnibox_Params',
      packedSize: 16,
      fields: [
        { name: 'page_seq_no', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'focus', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for DeleteMostVisitedItem
search.mojom.mojom.EmbeddedSearch_DeleteMostVisitedItem_ParamsSpec = {
  $: {
    structSpec: {
      name: 'search.mojom.EmbeddedSearch.DeleteMostVisitedItem_Params',
      packedSize: 24,
      fields: [
        { name: 'page_seq_no', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for UndoAllMostVisitedDeletions
search.mojom.mojom.EmbeddedSearch_UndoAllMostVisitedDeletions_ParamsSpec = {
  $: {
    structSpec: {
      name: 'search.mojom.EmbeddedSearch.UndoAllMostVisitedDeletions_Params',
      packedSize: 16,
      fields: [
        { name: 'page_seq_no', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for UndoMostVisitedDeletion
search.mojom.mojom.EmbeddedSearch_UndoMostVisitedDeletion_ParamsSpec = {
  $: {
    structSpec: {
      name: 'search.mojom.EmbeddedSearch.UndoMostVisitedDeletion_Params',
      packedSize: 24,
      fields: [
        { name: 'page_seq_no', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
search.mojom.mojom.EmbeddedSearchPtr = search.mojom.mojom.EmbeddedSearchRemote;
search.mojom.mojom.EmbeddedSearchRequest = search.mojom.mojom.EmbeddedSearchPendingReceiver;


// Interface: EmbeddedSearchClient
search.mojom.mojom.EmbeddedSearchClient = {};

search.mojom.mojom.EmbeddedSearchClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

search.mojom.mojom.EmbeddedSearchClientRemote = class {
  static get $interfaceName() {
    return 'search.mojom.EmbeddedSearchClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      search.mojom.mojom.EmbeddedSearchClientPendingReceiver,
      handle);
    this.$ = new search.mojom.mojom.EmbeddedSearchClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

search.mojom.mojom.EmbeddedSearchClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  setPageSequenceNumber(page_seq_no) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      search.mojom.mojom.EmbeddedSearchClient_SetPageSequenceNumber_ParamsSpec,
      null,
      [page_seq_no]);
  }

  focusChanged(new_focus_state, reason) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      search.mojom.mojom.EmbeddedSearchClient_FocusChanged_ParamsSpec,
      null,
      [new_focus_state, reason]);
  }

  mostVisitedInfoChanged(most_visited_info) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      search.mojom.mojom.EmbeddedSearchClient_MostVisitedInfoChanged_ParamsSpec,
      null,
      [most_visited_info]);
  }

  setInputInProgress(input_in_progress) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      search.mojom.mojom.EmbeddedSearchClient_SetInputInProgress_ParamsSpec,
      null,
      [input_in_progress]);
  }

  themeChanged(theme) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      search.mojom.mojom.EmbeddedSearchClient_ThemeChanged_ParamsSpec,
      null,
      [theme]);
  }

};

search.mojom.mojom.EmbeddedSearchClient.getRemote = function() {
  let remote = new search.mojom.mojom.EmbeddedSearchClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'search.mojom.EmbeddedSearchClient',
    'context');
  return remote.$;
};

// ParamsSpec for SetPageSequenceNumber
search.mojom.mojom.EmbeddedSearchClient_SetPageSequenceNumber_ParamsSpec = {
  $: {
    structSpec: {
      name: 'search.mojom.EmbeddedSearchClient.SetPageSequenceNumber_Params',
      packedSize: 16,
      fields: [
        { name: 'page_seq_no', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for FocusChanged
search.mojom.mojom.EmbeddedSearchClient_FocusChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'search.mojom.EmbeddedSearchClient.FocusChanged_Params',
      packedSize: 24,
      fields: [
        { name: 'new_focus_state', packedOffset: 0, packedBitOffset: 0, type: search.mojom.OmniboxFocusStateSpec, nullable: false, minVersion: 0 },
        { name: 'reason', packedOffset: 8, packedBitOffset: 0, type: search.mojom.OmniboxFocusChangeReasonSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for MostVisitedInfoChanged
search.mojom.mojom.EmbeddedSearchClient_MostVisitedInfoChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'search.mojom.EmbeddedSearchClient.MostVisitedInfoChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'most_visited_info', packedOffset: 0, packedBitOffset: 0, type: search.mojom.InstantMostVisitedInfoSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetInputInProgress
search.mojom.mojom.EmbeddedSearchClient_SetInputInProgress_ParamsSpec = {
  $: {
    structSpec: {
      name: 'search.mojom.EmbeddedSearchClient.SetInputInProgress_Params',
      packedSize: 16,
      fields: [
        { name: 'input_in_progress', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ThemeChanged
search.mojom.mojom.EmbeddedSearchClient_ThemeChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'search.mojom.EmbeddedSearchClient.ThemeChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'theme', packedOffset: 0, packedBitOffset: 0, type: search.mojom.NtpThemeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
search.mojom.mojom.EmbeddedSearchClientPtr = search.mojom.mojom.EmbeddedSearchClientRemote;
search.mojom.mojom.EmbeddedSearchClientRequest = search.mojom.mojom.EmbeddedSearchClientPendingReceiver;

