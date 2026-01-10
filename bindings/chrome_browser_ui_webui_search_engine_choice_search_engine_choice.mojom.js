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
  }
  bind(handle) {
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(handle);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = search_engine_choice.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec.$.decode(message.payload);
          const result = this.impl.createPageHandler(params.handler);
          break;
        }
      }
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
  }
  bind(handle) {
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(handle);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = search_engine_choice.mojom.PageHandler_DisplayDialog_ParamsSpec.$.decode(message.payload);
          const result = this.impl.displayDialog();
          break;
        }
        case 1: {
          const params = search_engine_choice.mojom.PageHandler_HandleSearchEngineChoiceSelected_ParamsSpec.$.decode(message.payload);
          const result = this.impl.handleSearchEngineChoiceSelected(params.prepopulate_id, params.save_guest_mode_selection);
          break;
        }
        case 2: {
          const params = search_engine_choice.mojom.PageHandler_HandleLearnMoreLinkClicked_ParamsSpec.$.decode(message.payload);
          const result = this.impl.handleLearnMoreLinkClicked();
          break;
        }
        case 3: {
          const params = search_engine_choice.mojom.PageHandler_HandleMoreButtonClicked_ParamsSpec.$.decode(message.payload);
          const result = this.impl.handleMoreButtonClicked();
          break;
        }
        case 4: {
          const params = search_engine_choice.mojom.PageHandler_RecordScrollState_ParamsSpec.$.decode(message.payload);
          const result = this.impl.recordScrollState(params.scroll_state);
          break;
        }
      }
    });
  }
};

search_engine_choice.mojom.PageHandlerReceiver = search_engine_choice.mojom.PageHandlerReceiver;

search_engine_choice.mojom.PageHandlerPtr = search_engine_choice.mojom.PageHandlerRemote;
search_engine_choice.mojom.PageHandlerRequest = search_engine_choice.mojom.PageHandlerPendingReceiver;

