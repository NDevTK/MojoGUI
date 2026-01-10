// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/new_tab_page/action_chips/action_chips.mojom
// Module: action_chips.mojom

'use strict';

// Module namespace
var action_chips = action_chips || {};
action_chips.mojom = action_chips.mojom || {};
var url = url || {};


// Enum: ChipType
action_chips.mojom.mojom.ChipType = {
  kImage: 0,
  kDeepSearch: 1,
  kRecentTab: 2,
  kDeepDive: 3,
};
action_chips.mojom.mojom.ChipTypeSpec = { $: mojo.internal.Enum() };

// Struct: TabInfo
action_chips.mojom.mojom.TabInfoSpec = {
  $: {
    structSpec: {
      name: 'action_chips.mojom.TabInfo',
      packedSize: 40,
      fields: [
        { name: 'tab_id', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'title', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'url', packedOffset: 8, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'last_active_time', packedOffset: 16, packedBitOffset: 0, type: mojo_base.mojom.TimeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Struct: ActionChip
action_chips.mojom.mojom.ActionChipSpec = {
  $: {
    structSpec: {
      name: 'action_chips.mojom.ActionChip',
      packedSize: 40,
      fields: [
        { name: 'title', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'suggestion', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'type', packedOffset: 24, packedBitOffset: 0, type: action_chips.mojom.ChipTypeSpec, nullable: false, minVersion: 0 },
        { name: 'tab', packedOffset: 16, packedBitOffset: 0, type: action_chips.mojom.TabInfoSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Interface: ActionChipsHandler
action_chips.mojom.mojom.ActionChipsHandler = {};

action_chips.mojom.mojom.ActionChipsHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

action_chips.mojom.mojom.ActionChipsHandlerRemote = class {
  static get $interfaceName() {
    return 'action_chips.mojom.ActionChipsHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      action_chips.mojom.mojom.ActionChipsHandlerPendingReceiver,
      handle);
    this.$ = new action_chips.mojom.mojom.ActionChipsHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

action_chips.mojom.mojom.ActionChipsHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  startActionChipsRetrieval() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      action_chips.mojom.mojom.ActionChipsHandler_StartActionChipsRetrieval_ParamsSpec,
      null,
      []);
  }

};

action_chips.mojom.mojom.ActionChipsHandler.getRemote = function() {
  let remote = new action_chips.mojom.mojom.ActionChipsHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'action_chips.mojom.ActionChipsHandler',
    'context');
  return remote.$;
};

// ParamsSpec for StartActionChipsRetrieval
action_chips.mojom.mojom.ActionChipsHandler_StartActionChipsRetrieval_ParamsSpec = {
  $: {
    structSpec: {
      name: 'action_chips.mojom.ActionChipsHandler.StartActionChipsRetrieval_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Legacy compatibility
action_chips.mojom.mojom.ActionChipsHandlerPtr = action_chips.mojom.mojom.ActionChipsHandlerRemote;
action_chips.mojom.mojom.ActionChipsHandlerRequest = action_chips.mojom.mojom.ActionChipsHandlerPendingReceiver;


// Interface: Page
action_chips.mojom.mojom.Page = {};

action_chips.mojom.mojom.PagePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

action_chips.mojom.mojom.PageRemote = class {
  static get $interfaceName() {
    return 'action_chips.mojom.Page';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      action_chips.mojom.mojom.PagePendingReceiver,
      handle);
    this.$ = new action_chips.mojom.mojom.PageRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

action_chips.mojom.mojom.PageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onActionChipsChanged(action_chips) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      action_chips.mojom.mojom.Page_OnActionChipsChanged_ParamsSpec,
      null,
      [action_chips]);
  }

};

action_chips.mojom.mojom.Page.getRemote = function() {
  let remote = new action_chips.mojom.mojom.PageRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'action_chips.mojom.Page',
    'context');
  return remote.$;
};

// ParamsSpec for OnActionChipsChanged
action_chips.mojom.mojom.Page_OnActionChipsChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'action_chips.mojom.Page.OnActionChipsChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'action_chips', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(action_chips.mojom.ActionChipSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
action_chips.mojom.mojom.PagePtr = action_chips.mojom.mojom.PageRemote;
action_chips.mojom.mojom.PageRequest = action_chips.mojom.mojom.PagePendingReceiver;


// Interface: ActionChipsHandlerFactory
action_chips.mojom.mojom.ActionChipsHandlerFactory = {};

action_chips.mojom.mojom.ActionChipsHandlerFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

action_chips.mojom.mojom.ActionChipsHandlerFactoryRemote = class {
  static get $interfaceName() {
    return 'action_chips.mojom.ActionChipsHandlerFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      action_chips.mojom.mojom.ActionChipsHandlerFactoryPendingReceiver,
      handle);
    this.$ = new action_chips.mojom.mojom.ActionChipsHandlerFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

action_chips.mojom.mojom.ActionChipsHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createActionChipsHandler(handler, page) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      action_chips.mojom.mojom.ActionChipsHandlerFactory_CreateActionChipsHandler_ParamsSpec,
      null,
      [handler, page]);
  }

};

action_chips.mojom.mojom.ActionChipsHandlerFactory.getRemote = function() {
  let remote = new action_chips.mojom.mojom.ActionChipsHandlerFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'action_chips.mojom.ActionChipsHandlerFactory',
    'context');
  return remote.$;
};

// ParamsSpec for CreateActionChipsHandler
action_chips.mojom.mojom.ActionChipsHandlerFactory_CreateActionChipsHandler_ParamsSpec = {
  $: {
    structSpec: {
      name: 'action_chips.mojom.ActionChipsHandlerFactory.CreateActionChipsHandler_Params',
      packedSize: 24,
      fields: [
        { name: 'handler', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(action_chips.mojom.ActionChipsHandlerRemote), nullable: false, minVersion: 0 },
        { name: 'page', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(action_chips.mojom.PageRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
action_chips.mojom.mojom.ActionChipsHandlerFactoryPtr = action_chips.mojom.mojom.ActionChipsHandlerFactoryRemote;
action_chips.mojom.mojom.ActionChipsHandlerFactoryRequest = action_chips.mojom.mojom.ActionChipsHandlerFactoryPendingReceiver;

