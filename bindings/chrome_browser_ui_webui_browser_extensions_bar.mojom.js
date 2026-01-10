// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui_browser/extensions_bar.mojom
// Module: extensions_bar.mojom

'use strict';

// Module namespace
var extensions_bar = extensions_bar || {};
extensions_bar.mojom = extensions_bar.mojom || {};
var url = url || {};
var ui = ui || {};

extensions_bar.mojom.ExtensionActionInfoSpec = { $: {} };
extensions_bar.mojom.PageHandlerFactory = {};
extensions_bar.mojom.PageHandlerFactory.$interfaceName = 'extensions_bar.mojom.PageHandlerFactory';
extensions_bar.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec = { $: {} };
extensions_bar.mojom.PageHandler = {};
extensions_bar.mojom.PageHandler.$interfaceName = 'extensions_bar.mojom.PageHandler';
extensions_bar.mojom.PageHandler_ExecuteUserAction_ParamsSpec = { $: {} };
extensions_bar.mojom.PageHandler_ShowContextMenu_ParamsSpec = { $: {} };
extensions_bar.mojom.PageHandler_ToggleExtensionsMenuFromWebUI_ParamsSpec = { $: {} };
extensions_bar.mojom.Page = {};
extensions_bar.mojom.Page.$interfaceName = 'extensions_bar.mojom.Page';
extensions_bar.mojom.Page_ActionsAddedOrUpdated_ParamsSpec = { $: {} };
extensions_bar.mojom.Page_ActionRemoved_ParamsSpec = { $: {} };
extensions_bar.mojom.Page_ActionPoppedOut_ParamsSpec = { $: {} };
extensions_bar.mojom.Page_ActionPoppedOut_ResponseParamsSpec = { $: {} };

// Struct: ExtensionActionInfo
mojo.internal.Struct(
    extensions_bar.mojom.ExtensionActionInfoSpec, 'extensions_bar.mojom.ExtensionActionInfo', [
      mojo.internal.StructField('id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('accessible_name', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('tooltip', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('data_url_for_icon', 24, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('is_visible', 32, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 48]]);

// Interface: PageHandlerFactory
mojo.internal.Struct(
    extensions_bar.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec, 'extensions_bar.mojom.PageHandlerFactory_CreatePageHandler_Params', [
      mojo.internal.StructField('page', 0, 0, mojo.internal.InterfaceProxy(extensions_bar.mojom.PageSpec), null, false, 0, undefined),
      mojo.internal.StructField('handler', 8, 0, mojo.internal.InterfaceRequest(extensions_bar.mojom.PageHandlerSpec), null, false, 0, undefined),
    ],
    [[0, 24]]);

extensions_bar.mojom.PageHandlerFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

extensions_bar.mojom.PageHandlerFactoryRemote = class {
  static get $interfaceName() {
    return 'extensions_bar.mojom.PageHandlerFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      extensions_bar.mojom.PageHandlerFactoryPendingReceiver,
      handle);
    this.$ = new extensions_bar.mojom.PageHandlerFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

extensions_bar.mojom.PageHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createPageHandler(page, handler) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      extensions_bar.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec,
      null,
      [page, handler],
      false);
  }

};

extensions_bar.mojom.PageHandlerFactory.getRemote = function() {
  let remote = new extensions_bar.mojom.PageHandlerFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'extensions_bar.mojom.PageHandlerFactory',
    'context');
  return remote.$;
};

extensions_bar.mojom.PageHandlerFactoryReceiver = class {
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
          const params = extensions_bar.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec.$.decode(message.payload);
          const result = this.impl.createPageHandler(params.page, params.handler);
          break;
        }
      }
    });
  }
};

extensions_bar.mojom.PageHandlerFactoryReceiver = extensions_bar.mojom.PageHandlerFactoryReceiver;

extensions_bar.mojom.PageHandlerFactoryPtr = extensions_bar.mojom.PageHandlerFactoryRemote;
extensions_bar.mojom.PageHandlerFactoryRequest = extensions_bar.mojom.PageHandlerFactoryPendingReceiver;


// Interface: PageHandler
mojo.internal.Struct(
    extensions_bar.mojom.PageHandler_ExecuteUserAction_ParamsSpec, 'extensions_bar.mojom.PageHandler_ExecuteUserAction_Params', [
      mojo.internal.StructField('id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    extensions_bar.mojom.PageHandler_ShowContextMenu_ParamsSpec, 'extensions_bar.mojom.PageHandler_ShowContextMenu_Params', [
      mojo.internal.StructField('source', 0, 0, ui.mojom.MenuSourceTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('id', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    extensions_bar.mojom.PageHandler_ToggleExtensionsMenuFromWebUI_ParamsSpec, 'extensions_bar.mojom.PageHandler_ToggleExtensionsMenuFromWebUI_Params', [
    ],
    [[0, 8]]);

extensions_bar.mojom.PageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

extensions_bar.mojom.PageHandlerRemote = class {
  static get $interfaceName() {
    return 'extensions_bar.mojom.PageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      extensions_bar.mojom.PageHandlerPendingReceiver,
      handle);
    this.$ = new extensions_bar.mojom.PageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

extensions_bar.mojom.PageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  executeUserAction(id) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      extensions_bar.mojom.PageHandler_ExecuteUserAction_ParamsSpec,
      null,
      [id],
      false);
  }

  showContextMenu(source, id) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      extensions_bar.mojom.PageHandler_ShowContextMenu_ParamsSpec,
      null,
      [source, id],
      false);
  }

  toggleExtensionsMenuFromWebUI() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      extensions_bar.mojom.PageHandler_ToggleExtensionsMenuFromWebUI_ParamsSpec,
      null,
      [],
      false);
  }

};

extensions_bar.mojom.PageHandler.getRemote = function() {
  let remote = new extensions_bar.mojom.PageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'extensions_bar.mojom.PageHandler',
    'context');
  return remote.$;
};

extensions_bar.mojom.PageHandlerReceiver = class {
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
          const params = extensions_bar.mojom.PageHandler_ExecuteUserAction_ParamsSpec.$.decode(message.payload);
          const result = this.impl.executeUserAction(params.id);
          break;
        }
        case 1: {
          const params = extensions_bar.mojom.PageHandler_ShowContextMenu_ParamsSpec.$.decode(message.payload);
          const result = this.impl.showContextMenu(params.source, params.id);
          break;
        }
        case 2: {
          const params = extensions_bar.mojom.PageHandler_ToggleExtensionsMenuFromWebUI_ParamsSpec.$.decode(message.payload);
          const result = this.impl.toggleExtensionsMenuFromWebUI();
          break;
        }
      }
    });
  }
};

extensions_bar.mojom.PageHandlerReceiver = extensions_bar.mojom.PageHandlerReceiver;

extensions_bar.mojom.PageHandlerPtr = extensions_bar.mojom.PageHandlerRemote;
extensions_bar.mojom.PageHandlerRequest = extensions_bar.mojom.PageHandlerPendingReceiver;


// Interface: Page
mojo.internal.Struct(
    extensions_bar.mojom.Page_ActionsAddedOrUpdated_ParamsSpec, 'extensions_bar.mojom.Page_ActionsAddedOrUpdated_Params', [
      mojo.internal.StructField('actions', 0, 0, mojo.internal.Array(extensions_bar.mojom.ExtensionActionInfoSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    extensions_bar.mojom.Page_ActionRemoved_ParamsSpec, 'extensions_bar.mojom.Page_ActionRemoved_Params', [
      mojo.internal.StructField('id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    extensions_bar.mojom.Page_ActionPoppedOut_ParamsSpec, 'extensions_bar.mojom.Page_ActionPoppedOut_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    extensions_bar.mojom.Page_ActionPoppedOut_ResponseParamsSpec, 'extensions_bar.mojom.Page_ActionPoppedOut_ResponseParams', [
    ],
    [[0, 8]]);

extensions_bar.mojom.PagePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

extensions_bar.mojom.PageRemote = class {
  static get $interfaceName() {
    return 'extensions_bar.mojom.Page';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      extensions_bar.mojom.PagePendingReceiver,
      handle);
    this.$ = new extensions_bar.mojom.PageRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

extensions_bar.mojom.PageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  actionsAddedOrUpdated(actions) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      extensions_bar.mojom.Page_ActionsAddedOrUpdated_ParamsSpec,
      null,
      [actions],
      false);
  }

  actionRemoved(id) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      extensions_bar.mojom.Page_ActionRemoved_ParamsSpec,
      null,
      [id],
      false);
  }

  actionPoppedOut() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      extensions_bar.mojom.Page_ActionPoppedOut_ParamsSpec,
      extensions_bar.mojom.Page_ActionPoppedOut_ResponseParamsSpec,
      [],
      false);
  }

};

extensions_bar.mojom.Page.getRemote = function() {
  let remote = new extensions_bar.mojom.PageRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'extensions_bar.mojom.Page',
    'context');
  return remote.$;
};

extensions_bar.mojom.PageReceiver = class {
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
          const params = extensions_bar.mojom.Page_ActionsAddedOrUpdated_ParamsSpec.$.decode(message.payload);
          const result = this.impl.actionsAddedOrUpdated(params.actions);
          break;
        }
        case 1: {
          const params = extensions_bar.mojom.Page_ActionRemoved_ParamsSpec.$.decode(message.payload);
          const result = this.impl.actionRemoved(params.id);
          break;
        }
        case 2: {
          const params = extensions_bar.mojom.Page_ActionPoppedOut_ParamsSpec.$.decode(message.payload);
          const result = this.impl.actionPoppedOut();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(
                this.endpoint, header.requestId, extensions_bar.mojom.Page_ActionPoppedOut_ResponseParamsSpec);
               responder(response);
            }});
          }
          break;
        }
      }
    });
  }
};

extensions_bar.mojom.PageReceiver = extensions_bar.mojom.PageReceiver;

extensions_bar.mojom.PagePtr = extensions_bar.mojom.PageRemote;
extensions_bar.mojom.PageRequest = extensions_bar.mojom.PagePendingReceiver;

