// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/search_engine_choice/search_engine_choice.mojom
// Module: search_engine_choice.mojom

'use strict';

// Module namespace
var search_engine_choice = search_engine_choice || {};
search_engine_choice.mojom = search_engine_choice.mojom || {};


// Enum: ScrollState
search_engine_choice.mojom.ScrollState = {
  kAtTheBottom: 0,
  kAtTheBottomWithErrorMargin: 1,
  kNotAtTheBottom: 2,
};

// Interface: PageHandlerFactory
search_engine_choice.mojom.PageHandlerFactory = {};

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
      [handler]);
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

// ParamsSpec for CreatePageHandler
search_engine_choice.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec = {
  $: {
    structSpec: {
      name: 'search_engine_choice.mojom.PageHandlerFactory.CreatePageHandler_Params',
      packedSize: 16,
      fields: [
        { name: 'handler', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
search_engine_choice.mojom.PageHandlerFactoryPtr = search_engine_choice.mojom.PageHandlerFactoryRemote;
search_engine_choice.mojom.PageHandlerFactoryRequest = search_engine_choice.mojom.PageHandlerFactoryPendingReceiver;


// Interface: PageHandler
search_engine_choice.mojom.PageHandler = {};

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
      []);
  }

  handleSearchEngineChoiceSelected(prepopulate_id, save_guest_mode_selection) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      search_engine_choice.mojom.PageHandler_HandleSearchEngineChoiceSelected_ParamsSpec,
      null,
      [prepopulate_id, save_guest_mode_selection]);
  }

  handleLearnMoreLinkClicked() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      search_engine_choice.mojom.PageHandler_HandleLearnMoreLinkClicked_ParamsSpec,
      null,
      []);
  }

  handleMoreButtonClicked() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      search_engine_choice.mojom.PageHandler_HandleMoreButtonClicked_ParamsSpec,
      null,
      []);
  }

  recordScrollState(scroll_state) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      search_engine_choice.mojom.PageHandler_RecordScrollState_ParamsSpec,
      null,
      [scroll_state]);
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

// ParamsSpec for DisplayDialog
search_engine_choice.mojom.PageHandler_DisplayDialog_ParamsSpec = {
  $: {
    structSpec: {
      name: 'search_engine_choice.mojom.PageHandler.DisplayDialog_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for HandleSearchEngineChoiceSelected
search_engine_choice.mojom.PageHandler_HandleSearchEngineChoiceSelected_ParamsSpec = {
  $: {
    structSpec: {
      name: 'search_engine_choice.mojom.PageHandler.HandleSearchEngineChoiceSelected_Params',
      packedSize: 24,
      fields: [
        { name: 'prepopulate_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'save_guest_mode_selection', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for HandleLearnMoreLinkClicked
search_engine_choice.mojom.PageHandler_HandleLearnMoreLinkClicked_ParamsSpec = {
  $: {
    structSpec: {
      name: 'search_engine_choice.mojom.PageHandler.HandleLearnMoreLinkClicked_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for HandleMoreButtonClicked
search_engine_choice.mojom.PageHandler_HandleMoreButtonClicked_ParamsSpec = {
  $: {
    structSpec: {
      name: 'search_engine_choice.mojom.PageHandler.HandleMoreButtonClicked_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for RecordScrollState
search_engine_choice.mojom.PageHandler_RecordScrollState_ParamsSpec = {
  $: {
    structSpec: {
      name: 'search_engine_choice.mojom.PageHandler.RecordScrollState_Params',
      packedSize: 16,
      fields: [
        { name: 'scroll_state', packedOffset: 0, packedBitOffset: 0, type: search_engine_choice.mojom.ScrollStateSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
search_engine_choice.mojom.PageHandlerPtr = search_engine_choice.mojom.PageHandlerRemote;
search_engine_choice.mojom.PageHandlerRequest = search_engine_choice.mojom.PageHandlerPendingReceiver;

