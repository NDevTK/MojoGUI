// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/omnibox/omnibox_internals.mojom
// Module: mojom

'use strict';

// Module namespace
var mojom = mojom || {};


// Enum: AutocompleteControllerType
mojom.AutocompleteControllerType = {
  kBrowser: 0,
  kDebug: 1,
  kMlDisabledDebug: 2,
};

// Interface: OmniboxPageHandler
mojom.OmniboxPageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojom.OmniboxPageHandlerRemote = class {
  static get $interfaceName() {
    return 'mojom.OmniboxPageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojom.OmniboxPageHandlerPendingReceiver,
      handle);
    this.$ = new mojom.OmniboxPageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

mojom.OmniboxPageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  setClientPage(page) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      mojom.OmniboxPageHandler_SetClientPage_ParamsSpec.$,
      null,
      [page]);
  }

  startOmniboxQuery(input_string, reset_autocomplete_controller, cursor_position, zero_suggest, prevent_inline_autocomplete, prefer_keyword, current_url, page_classification) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      mojom.OmniboxPageHandler_StartOmniboxQuery_ParamsSpec.$,
      null,
      [input_string, reset_autocomplete_controller, cursor_position, zero_suggest, prevent_inline_autocomplete, prefer_keyword, current_url, page_classification]);
  }

  getMlModelVersion() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      mojom.OmniboxPageHandler_GetMlModelVersion_ParamsSpec.$,
      mojom.OmniboxPageHandler_GetMlModelVersion_ResponseParamsSpec.$,
      []);
  }

  startMl(signals) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      mojom.OmniboxPageHandler_StartMl_ParamsSpec.$,
      mojom.OmniboxPageHandler_StartMl_ResponseParamsSpec.$,
      [signals]);
  }

};

mojom.OmniboxPageHandler.getRemote = function() {
  let remote = new mojom.OmniboxPageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'mojom.OmniboxPageHandler',
    'context');
  return remote.$;
};

// ParamsSpec for SetClientPage
mojom.OmniboxPageHandler_SetClientPage_ParamsSpec = {
  $: {
    structSpec: {
      name: 'mojom.OmniboxPageHandler.SetClientPage_Params',
      packedSize: 16,
      fields: [
        { name: 'page', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for StartOmniboxQuery
mojom.OmniboxPageHandler_StartOmniboxQuery_ParamsSpec = {
  $: {
    structSpec: {
      name: 'mojom.OmniboxPageHandler.StartOmniboxQuery_Params',
      packedSize: 72,
      fields: [
        { name: 'input_string', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'reset_autocomplete_controller', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'cursor_position', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'zero_suggest', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'prevent_inline_autocomplete', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'prefer_keyword', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'current_url', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'page_classification', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetMlModelVersion
mojom.OmniboxPageHandler_GetMlModelVersion_ParamsSpec = {
  $: {
    structSpec: {
      name: 'mojom.OmniboxPageHandler.GetMlModelVersion_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

mojom.OmniboxPageHandler_GetMlModelVersion_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'mojom.OmniboxPageHandler.GetMlModelVersion_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'version', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for StartMl
mojom.OmniboxPageHandler_StartMl_ParamsSpec = {
  $: {
    structSpec: {
      name: 'mojom.OmniboxPageHandler.StartMl_Params',
      packedSize: 16,
      fields: [
        { name: 'signals', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

mojom.OmniboxPageHandler_StartMl_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'mojom.OmniboxPageHandler.StartMl_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'score', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
mojom.OmniboxPageHandlerPtr = mojom.OmniboxPageHandlerRemote;
mojom.OmniboxPageHandlerRequest = mojom.OmniboxPageHandlerPendingReceiver;


// Interface: OmniboxPage
mojom.OmniboxPagePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojom.OmniboxPageRemote = class {
  static get $interfaceName() {
    return 'mojom.OmniboxPage';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojom.OmniboxPagePendingReceiver,
      handle);
    this.$ = new mojom.OmniboxPageRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

mojom.OmniboxPageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  handleNewAutocompleteQuery(autocomplete_controller_type, input_text) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      mojom.OmniboxPage_HandleNewAutocompleteQuery_ParamsSpec.$,
      null,
      [autocomplete_controller_type, input_text]);
  }

  handleNewAutocompleteResponse(autocomplete_controller_type, response) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      mojom.OmniboxPage_HandleNewAutocompleteResponse_ParamsSpec.$,
      null,
      [autocomplete_controller_type, response]);
  }

  handleNewMlResponse(autocomplete_controller_type, input_text, matches) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      mojom.OmniboxPage_HandleNewMlResponse_ParamsSpec.$,
      null,
      [autocomplete_controller_type, input_text, matches]);
  }

  handleAnswerIconImageData(autocomplete_controller_type, image_url, image_data) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      mojom.OmniboxPage_HandleAnswerIconImageData_ParamsSpec.$,
      null,
      [autocomplete_controller_type, image_url, image_data]);
  }

};

mojom.OmniboxPage.getRemote = function() {
  let remote = new mojom.OmniboxPageRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'mojom.OmniboxPage',
    'context');
  return remote.$;
};

// ParamsSpec for HandleNewAutocompleteQuery
mojom.OmniboxPage_HandleNewAutocompleteQuery_ParamsSpec = {
  $: {
    structSpec: {
      name: 'mojom.OmniboxPage.HandleNewAutocompleteQuery_Params',
      packedSize: 24,
      fields: [
        { name: 'autocomplete_controller_type', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'input_text', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for HandleNewAutocompleteResponse
mojom.OmniboxPage_HandleNewAutocompleteResponse_ParamsSpec = {
  $: {
    structSpec: {
      name: 'mojom.OmniboxPage.HandleNewAutocompleteResponse_Params',
      packedSize: 24,
      fields: [
        { name: 'autocomplete_controller_type', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'response', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for HandleNewMlResponse
mojom.OmniboxPage_HandleNewMlResponse_ParamsSpec = {
  $: {
    structSpec: {
      name: 'mojom.OmniboxPage.HandleNewMlResponse_Params',
      packedSize: 32,
      fields: [
        { name: 'autocomplete_controller_type', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'input_text', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'matches', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for HandleAnswerIconImageData
mojom.OmniboxPage_HandleAnswerIconImageData_ParamsSpec = {
  $: {
    structSpec: {
      name: 'mojom.OmniboxPage.HandleAnswerIconImageData_Params',
      packedSize: 32,
      fields: [
        { name: 'autocomplete_controller_type', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'image_url', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'image_data', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
mojom.OmniboxPagePtr = mojom.OmniboxPageRemote;
mojom.OmniboxPageRequest = mojom.OmniboxPagePendingReceiver;

