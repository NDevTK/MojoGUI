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
      mojo.internal.StructField('embedded_search', 0, 0, mojo.internal.AssociatedInterfaceRequest(search.mojom.EmbeddedSearchRemote), null, false, 0, undefined),
      mojo.internal.StructField('client', 8, 0, mojo.internal.AssociatedInterfaceProxy(search.mojom.EmbeddedSearchClientRemote), null, false, 0, undefined),
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

search.mojom.EmbeddedSearchClientPtr = search.mojom.EmbeddedSearchClientRemote;
search.mojom.EmbeddedSearchClientRequest = search.mojom.EmbeddedSearchClientPendingReceiver;

