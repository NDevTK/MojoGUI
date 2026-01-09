// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/new_tab_page/action_chips/action_chips.mojom
// Module: action_chips.mojom

'use strict';

// Module namespace
var action_chips = action_chips || {};
action_chips.mojom = action_chips.mojom || {};


// Enum: ChipType
action_chips.mojom.ChipType = {
  kImage: 0,
  kDeepSearch: 1,
  kRecentTab: 2,
  kDeepDive: 3,
};

// Interface: ActionChipsHandler
action_chips.mojom.ActionChipsHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

action_chips.mojom.ActionChipsHandlerRemote = class {
  static get $interfaceName() {
    return 'action_chips.mojom.ActionChipsHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      action_chips.mojom.ActionChipsHandlerPendingReceiver,
      handle);
    this.$ = new action_chips.mojom.ActionChipsHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

action_chips.mojom.ActionChipsHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  startActionChipsRetrieval() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      action_chips.mojom.ActionChipsHandler_StartActionChipsRetrieval_ParamsSpec.$,
      null,
      []);
  }

};

action_chips.mojom.ActionChipsHandler.getRemote = function() {
  let remote = new action_chips.mojom.ActionChipsHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'action_chips.mojom.ActionChipsHandler',
    'context');
  return remote.$;
};

// ParamsSpec for StartActionChipsRetrieval
action_chips.mojom.ActionChipsHandler_StartActionChipsRetrieval_ParamsSpec = {
  $: {
    structSpec: {
      name: 'action_chips.mojom.ActionChipsHandler.StartActionChipsRetrieval_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
action_chips.mojom.ActionChipsHandlerPtr = action_chips.mojom.ActionChipsHandlerRemote;
action_chips.mojom.ActionChipsHandlerRequest = action_chips.mojom.ActionChipsHandlerPendingReceiver;


// Interface: Page
action_chips.mojom.PagePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

action_chips.mojom.PageRemote = class {
  static get $interfaceName() {
    return 'action_chips.mojom.Page';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      action_chips.mojom.PagePendingReceiver,
      handle);
    this.$ = new action_chips.mojom.PageRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

action_chips.mojom.PageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onActionChipsChanged(action_chips) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      action_chips.mojom.Page_OnActionChipsChanged_ParamsSpec.$,
      null,
      [action_chips]);
  }

};

action_chips.mojom.Page.getRemote = function() {
  let remote = new action_chips.mojom.PageRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'action_chips.mojom.Page',
    'context');
  return remote.$;
};

// ParamsSpec for OnActionChipsChanged
action_chips.mojom.Page_OnActionChipsChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'action_chips.mojom.Page.OnActionChipsChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'action_chips', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
action_chips.mojom.PagePtr = action_chips.mojom.PageRemote;
action_chips.mojom.PageRequest = action_chips.mojom.PagePendingReceiver;


// Interface: ActionChipsHandlerFactory
action_chips.mojom.ActionChipsHandlerFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

action_chips.mojom.ActionChipsHandlerFactoryRemote = class {
  static get $interfaceName() {
    return 'action_chips.mojom.ActionChipsHandlerFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      action_chips.mojom.ActionChipsHandlerFactoryPendingReceiver,
      handle);
    this.$ = new action_chips.mojom.ActionChipsHandlerFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

action_chips.mojom.ActionChipsHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createActionChipsHandler(handler, page) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      action_chips.mojom.ActionChipsHandlerFactory_CreateActionChipsHandler_ParamsSpec.$,
      null,
      [handler, page]);
  }

};

action_chips.mojom.ActionChipsHandlerFactory.getRemote = function() {
  let remote = new action_chips.mojom.ActionChipsHandlerFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'action_chips.mojom.ActionChipsHandlerFactory',
    'context');
  return remote.$;
};

// ParamsSpec for CreateActionChipsHandler
action_chips.mojom.ActionChipsHandlerFactory_CreateActionChipsHandler_ParamsSpec = {
  $: {
    structSpec: {
      name: 'action_chips.mojom.ActionChipsHandlerFactory.CreateActionChipsHandler_Params',
      packedSize: 24,
      fields: [
        { name: 'handler', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'page', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
action_chips.mojom.ActionChipsHandlerFactoryPtr = action_chips.mojom.ActionChipsHandlerFactoryRemote;
action_chips.mojom.ActionChipsHandlerFactoryRequest = action_chips.mojom.ActionChipsHandlerFactoryPendingReceiver;

