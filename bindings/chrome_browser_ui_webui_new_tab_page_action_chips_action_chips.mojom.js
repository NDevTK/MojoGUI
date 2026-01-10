// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/new_tab_page/action_chips/action_chips.mojom
// Module: action_chips.mojom

'use strict';

// Module namespace
var action_chips = action_chips || {};
action_chips.mojom = action_chips.mojom || {};
var url = url || {};

action_chips.mojom.ChipTypeSpec = { $: mojo.internal.Enum() };
action_chips.mojom.TabInfoSpec = { $: {} };
action_chips.mojom.ActionChipSpec = { $: {} };
action_chips.mojom.ActionChipsHandler = {};
action_chips.mojom.ActionChipsHandler.$interfaceName = 'action_chips.mojom.ActionChipsHandler';
action_chips.mojom.ActionChipsHandler_StartActionChipsRetrieval_ParamsSpec = { $: {} };
action_chips.mojom.Page = {};
action_chips.mojom.Page.$interfaceName = 'action_chips.mojom.Page';
action_chips.mojom.Page_OnActionChipsChanged_ParamsSpec = { $: {} };
action_chips.mojom.ActionChipsHandlerFactory = {};
action_chips.mojom.ActionChipsHandlerFactory.$interfaceName = 'action_chips.mojom.ActionChipsHandlerFactory';
action_chips.mojom.ActionChipsHandlerFactory_CreateActionChipsHandler_ParamsSpec = { $: {} };

// Enum: ChipType
action_chips.mojom.ChipType = {
  kImage: 0,
  kDeepSearch: 1,
  kRecentTab: 2,
  kDeepDive: 3,
};

// Struct: TabInfo
mojo.internal.Struct(
    action_chips.mojom.TabInfoSpec, 'action_chips.mojom.TabInfo', [
      mojo.internal.StructField('title', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('url', 8, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('last_active_time', 16, 0, mojo_base.mojom.TimeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('tab_id', 24, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: ActionChip
mojo.internal.Struct(
    action_chips.mojom.ActionChipSpec, 'action_chips.mojom.ActionChip', [
      mojo.internal.StructField('title', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('suggestion', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('type', 16, 0, action_chips.mojom.ChipTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('tab', 24, 0, action_chips.mojom.TabInfoSpec.$, null, true, 0, undefined),
    ],
    [[0, 40]]);

// Interface: ActionChipsHandler
mojo.internal.Struct(
    action_chips.mojom.ActionChipsHandler_StartActionChipsRetrieval_ParamsSpec, 'action_chips.mojom.ActionChipsHandler_StartActionChipsRetrieval_Params', [
    ],
    [[0, 8]]);

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
      action_chips.mojom.ActionChipsHandler_StartActionChipsRetrieval_ParamsSpec,
      null,
      [],
      false);
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

action_chips.mojom.ActionChipsHandlerPtr = action_chips.mojom.ActionChipsHandlerRemote;
action_chips.mojom.ActionChipsHandlerRequest = action_chips.mojom.ActionChipsHandlerPendingReceiver;


// Interface: Page
mojo.internal.Struct(
    action_chips.mojom.Page_OnActionChipsChanged_ParamsSpec, 'action_chips.mojom.Page_OnActionChipsChanged_Params', [
      mojo.internal.StructField('action_chips', 0, 0, mojo.internal.Array(action_chips.mojom.ActionChipSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

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
      action_chips.mojom.Page_OnActionChipsChanged_ParamsSpec,
      null,
      [action_chips],
      false);
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

action_chips.mojom.PagePtr = action_chips.mojom.PageRemote;
action_chips.mojom.PageRequest = action_chips.mojom.PagePendingReceiver;


// Interface: ActionChipsHandlerFactory
mojo.internal.Struct(
    action_chips.mojom.ActionChipsHandlerFactory_CreateActionChipsHandler_ParamsSpec, 'action_chips.mojom.ActionChipsHandlerFactory_CreateActionChipsHandler_Params', [
      mojo.internal.StructField('handler', 0, 0, mojo.internal.InterfaceRequest(action_chips.mojom.ActionChipsHandlerRemote), null, false, 0, undefined),
      mojo.internal.StructField('page', 8, 0, mojo.internal.InterfaceProxy(action_chips.mojom.PageRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

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
      action_chips.mojom.ActionChipsHandlerFactory_CreateActionChipsHandler_ParamsSpec,
      null,
      [handler, page],
      false);
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

action_chips.mojom.ActionChipsHandlerFactoryPtr = action_chips.mojom.ActionChipsHandlerFactoryRemote;
action_chips.mojom.ActionChipsHandlerFactoryRequest = action_chips.mojom.ActionChipsHandlerFactoryPendingReceiver;

