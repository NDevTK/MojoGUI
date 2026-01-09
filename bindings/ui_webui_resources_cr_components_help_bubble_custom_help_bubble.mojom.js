// Auto-generated MojoJS binding
// Source: chromium_src/ui/webui/resources/cr_components/help_bubble/custom_help_bubble.mojom
// Module: custom_help_bubble.mojom

'use strict';

// Module namespace
var custom_help_bubble = custom_help_bubble || {};
custom_help_bubble.mojom = custom_help_bubble.mojom || {};


// Enum: CustomHelpBubbleUserAction
custom_help_bubble.mojom.CustomHelpBubbleUserAction = {
  kDismiss: 0,
  kSnooze: 1,
  kAction: 2,
  kCancel: 3,
};

// Interface: CustomHelpBubbleHandlerFactory
custom_help_bubble.mojom.CustomHelpBubbleHandlerFactory = {};

custom_help_bubble.mojom.CustomHelpBubbleHandlerFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

custom_help_bubble.mojom.CustomHelpBubbleHandlerFactoryRemote = class {
  static get $interfaceName() {
    return 'custom_help_bubble.mojom.CustomHelpBubbleHandlerFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      custom_help_bubble.mojom.CustomHelpBubbleHandlerFactoryPendingReceiver,
      handle);
    this.$ = new custom_help_bubble.mojom.CustomHelpBubbleHandlerFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

custom_help_bubble.mojom.CustomHelpBubbleHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createCustomHelpBubbleHandler(handler) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      custom_help_bubble.mojom.CustomHelpBubbleHandlerFactory_CreateCustomHelpBubbleHandler_ParamsSpec,
      null,
      [handler]);
  }

};

custom_help_bubble.mojom.CustomHelpBubbleHandlerFactory.getRemote = function() {
  let remote = new custom_help_bubble.mojom.CustomHelpBubbleHandlerFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'custom_help_bubble.mojom.CustomHelpBubbleHandlerFactory',
    'context');
  return remote.$;
};

// ParamsSpec for CreateCustomHelpBubbleHandler
custom_help_bubble.mojom.CustomHelpBubbleHandlerFactory_CreateCustomHelpBubbleHandler_ParamsSpec = {
  $: {
    structSpec: {
      name: 'custom_help_bubble.mojom.CustomHelpBubbleHandlerFactory.CreateCustomHelpBubbleHandler_Params',
      packedSize: 16,
      fields: [
        { name: 'handler', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
custom_help_bubble.mojom.CustomHelpBubbleHandlerFactoryPtr = custom_help_bubble.mojom.CustomHelpBubbleHandlerFactoryRemote;
custom_help_bubble.mojom.CustomHelpBubbleHandlerFactoryRequest = custom_help_bubble.mojom.CustomHelpBubbleHandlerFactoryPendingReceiver;


// Interface: CustomHelpBubbleHandler
custom_help_bubble.mojom.CustomHelpBubbleHandler = {};

custom_help_bubble.mojom.CustomHelpBubbleHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

custom_help_bubble.mojom.CustomHelpBubbleHandlerRemote = class {
  static get $interfaceName() {
    return 'custom_help_bubble.mojom.CustomHelpBubbleHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      custom_help_bubble.mojom.CustomHelpBubbleHandlerPendingReceiver,
      handle);
    this.$ = new custom_help_bubble.mojom.CustomHelpBubbleHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

custom_help_bubble.mojom.CustomHelpBubbleHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  notifyUserAction(action) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      custom_help_bubble.mojom.CustomHelpBubbleHandler_NotifyUserAction_ParamsSpec,
      null,
      [action]);
  }

};

custom_help_bubble.mojom.CustomHelpBubbleHandler.getRemote = function() {
  let remote = new custom_help_bubble.mojom.CustomHelpBubbleHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'custom_help_bubble.mojom.CustomHelpBubbleHandler',
    'context');
  return remote.$;
};

// ParamsSpec for NotifyUserAction
custom_help_bubble.mojom.CustomHelpBubbleHandler_NotifyUserAction_ParamsSpec = {
  $: {
    structSpec: {
      name: 'custom_help_bubble.mojom.CustomHelpBubbleHandler.NotifyUserAction_Params',
      packedSize: 16,
      fields: [
        { name: 'action', packedOffset: 0, packedBitOffset: 0, type: custom_help_bubble.mojom.CustomHelpBubbleUserActionSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
custom_help_bubble.mojom.CustomHelpBubbleHandlerPtr = custom_help_bubble.mojom.CustomHelpBubbleHandlerRemote;
custom_help_bubble.mojom.CustomHelpBubbleHandlerRequest = custom_help_bubble.mojom.CustomHelpBubbleHandlerPendingReceiver;

