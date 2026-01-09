// Auto-generated MojoJS binding
// Source: chromium_src/ui/webui/resources/cr_components/help_bubble/help_bubble.mojom
// Module: help_bubble.mojom

'use strict';

// Module namespace
var help_bubble = help_bubble || {};
help_bubble.mojom = help_bubble.mojom || {};


// Enum: HelpBubbleArrowPosition
help_bubble.mojom.HelpBubbleArrowPosition = {
  TOP_LEFT: 0,
  TOP_CENTER: 1,
  TOP_RIGHT: 2,
  BOTTOM_LEFT: 3,
  BOTTOM_CENTER: 4,
  BOTTOM_RIGHT: 5,
  LEFT_TOP: 6,
  LEFT_CENTER: 7,
  LEFT_BOTTOM: 8,
  RIGHT_TOP: 9,
  RIGHT_CENTER: 10,
  RIGHT_BOTTOM: 11,
};

// Enum: HelpBubbleClosedReason
help_bubble.mojom.HelpBubbleClosedReason = {
  kPageChanged: 0,
  kDismissedByUser: 1,
  kTimedOut: 2,
};

// Interface: HelpBubbleHandlerFactory
help_bubble.mojom.HelpBubbleHandlerFactory = {};

help_bubble.mojom.HelpBubbleHandlerFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

help_bubble.mojom.HelpBubbleHandlerFactoryRemote = class {
  static get $interfaceName() {
    return 'help_bubble.mojom.HelpBubbleHandlerFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      help_bubble.mojom.HelpBubbleHandlerFactoryPendingReceiver,
      handle);
    this.$ = new help_bubble.mojom.HelpBubbleHandlerFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

help_bubble.mojom.HelpBubbleHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createHelpBubbleHandler(client, handler) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      help_bubble.mojom.HelpBubbleHandlerFactory_CreateHelpBubbleHandler_ParamsSpec,
      null,
      null,
      [client, handler],
      undefined,
      undefined
    );
  }

};

help_bubble.mojom.HelpBubbleHandlerFactory.getRemote = function() {
  let remote = new help_bubble.mojom.HelpBubbleHandlerFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'help_bubble.mojom.HelpBubbleHandlerFactory',
    'context');
  return remote.$;
};

// ParamsSpec for CreateHelpBubbleHandler
help_bubble.mojom.HelpBubbleHandlerFactory_CreateHelpBubbleHandler_ParamsSpec = {
  $: {
    structSpec: {
      name: 'help_bubble.mojom.HelpBubbleHandlerFactory.CreateHelpBubbleHandler_Params',
      packedSize: 24,
      fields: [
        { name: 'client', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
        { name: 'handler', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
help_bubble.mojom.HelpBubbleHandlerFactoryPtr = help_bubble.mojom.HelpBubbleHandlerFactoryRemote;
help_bubble.mojom.HelpBubbleHandlerFactoryRequest = help_bubble.mojom.HelpBubbleHandlerFactoryPendingReceiver;


// Interface: PdfHelpBubbleHandlerFactory
help_bubble.mojom.PdfHelpBubbleHandlerFactory = {};

help_bubble.mojom.PdfHelpBubbleHandlerFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

help_bubble.mojom.PdfHelpBubbleHandlerFactoryRemote = class {
  static get $interfaceName() {
    return 'help_bubble.mojom.PdfHelpBubbleHandlerFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      help_bubble.mojom.PdfHelpBubbleHandlerFactoryPendingReceiver,
      handle);
    this.$ = new help_bubble.mojom.PdfHelpBubbleHandlerFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

help_bubble.mojom.PdfHelpBubbleHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createHelpBubbleHandler(client, handler) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      help_bubble.mojom.PdfHelpBubbleHandlerFactory_CreateHelpBubbleHandler_ParamsSpec,
      null,
      null,
      [client, handler],
      undefined,
      undefined
    );
  }

};

help_bubble.mojom.PdfHelpBubbleHandlerFactory.getRemote = function() {
  let remote = new help_bubble.mojom.PdfHelpBubbleHandlerFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'help_bubble.mojom.PdfHelpBubbleHandlerFactory',
    'context');
  return remote.$;
};

// ParamsSpec for CreateHelpBubbleHandler
help_bubble.mojom.PdfHelpBubbleHandlerFactory_CreateHelpBubbleHandler_ParamsSpec = {
  $: {
    structSpec: {
      name: 'help_bubble.mojom.PdfHelpBubbleHandlerFactory.CreateHelpBubbleHandler_Params',
      packedSize: 24,
      fields: [
        { name: 'client', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
        { name: 'handler', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
help_bubble.mojom.PdfHelpBubbleHandlerFactoryPtr = help_bubble.mojom.PdfHelpBubbleHandlerFactoryRemote;
help_bubble.mojom.PdfHelpBubbleHandlerFactoryRequest = help_bubble.mojom.PdfHelpBubbleHandlerFactoryPendingReceiver;


// Interface: HelpBubbleHandler
help_bubble.mojom.HelpBubbleHandler = {};

help_bubble.mojom.HelpBubbleHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

help_bubble.mojom.HelpBubbleHandlerRemote = class {
  static get $interfaceName() {
    return 'help_bubble.mojom.HelpBubbleHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      help_bubble.mojom.HelpBubbleHandlerPendingReceiver,
      handle);
    this.$ = new help_bubble.mojom.HelpBubbleHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

help_bubble.mojom.HelpBubbleHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  bindTrackedElementHandler(handler) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      help_bubble.mojom.HelpBubbleHandler_BindTrackedElementHandler_ParamsSpec,
      null,
      null,
      [handler],
      undefined,
      undefined
    );
  }

  helpBubbleButtonPressed(native_identifier, button_index) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      help_bubble.mojom.HelpBubbleHandler_HelpBubbleButtonPressed_ParamsSpec,
      null,
      null,
      [native_identifier, button_index],
      undefined,
      undefined
    );
  }

  helpBubbleClosed(native_identifier, reason) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      help_bubble.mojom.HelpBubbleHandler_HelpBubbleClosed_ParamsSpec,
      null,
      null,
      [native_identifier, reason],
      undefined,
      undefined
    );
  }

};

help_bubble.mojom.HelpBubbleHandler.getRemote = function() {
  let remote = new help_bubble.mojom.HelpBubbleHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'help_bubble.mojom.HelpBubbleHandler',
    'context');
  return remote.$;
};

// ParamsSpec for BindTrackedElementHandler
help_bubble.mojom.HelpBubbleHandler_BindTrackedElementHandler_ParamsSpec = {
  $: {
    structSpec: {
      name: 'help_bubble.mojom.HelpBubbleHandler.BindTrackedElementHandler_Params',
      packedSize: 16,
      fields: [
        { name: 'handler', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for HelpBubbleButtonPressed
help_bubble.mojom.HelpBubbleHandler_HelpBubbleButtonPressed_ParamsSpec = {
  $: {
    structSpec: {
      name: 'help_bubble.mojom.HelpBubbleHandler.HelpBubbleButtonPressed_Params',
      packedSize: 24,
      fields: [
        { name: 'native_identifier', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'button_index', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint8, nullable: false },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for HelpBubbleClosed
help_bubble.mojom.HelpBubbleHandler_HelpBubbleClosed_ParamsSpec = {
  $: {
    structSpec: {
      name: 'help_bubble.mojom.HelpBubbleHandler.HelpBubbleClosed_Params',
      packedSize: 24,
      fields: [
        { name: 'native_identifier', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'reason', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
help_bubble.mojom.HelpBubbleHandlerPtr = help_bubble.mojom.HelpBubbleHandlerRemote;
help_bubble.mojom.HelpBubbleHandlerRequest = help_bubble.mojom.HelpBubbleHandlerPendingReceiver;


// Interface: HelpBubbleClient
help_bubble.mojom.HelpBubbleClient = {};

help_bubble.mojom.HelpBubbleClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

help_bubble.mojom.HelpBubbleClientRemote = class {
  static get $interfaceName() {
    return 'help_bubble.mojom.HelpBubbleClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      help_bubble.mojom.HelpBubbleClientPendingReceiver,
      handle);
    this.$ = new help_bubble.mojom.HelpBubbleClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

help_bubble.mojom.HelpBubbleClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  showHelpBubble(params) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      help_bubble.mojom.HelpBubbleClient_ShowHelpBubble_ParamsSpec,
      null,
      null,
      [params],
      undefined,
      undefined
    );
  }

  toggleFocusForAccessibility(native_identifier) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      help_bubble.mojom.HelpBubbleClient_ToggleFocusForAccessibility_ParamsSpec,
      null,
      null,
      [native_identifier],
      undefined,
      undefined
    );
  }

  hideHelpBubble(native_identifier) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      help_bubble.mojom.HelpBubbleClient_HideHelpBubble_ParamsSpec,
      null,
      null,
      [native_identifier],
      undefined,
      undefined
    );
  }

  externalHelpBubbleUpdated(native_identifier, shown) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      help_bubble.mojom.HelpBubbleClient_ExternalHelpBubbleUpdated_ParamsSpec,
      null,
      null,
      [native_identifier, shown],
      undefined,
      undefined
    );
  }

};

help_bubble.mojom.HelpBubbleClient.getRemote = function() {
  let remote = new help_bubble.mojom.HelpBubbleClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'help_bubble.mojom.HelpBubbleClient',
    'context');
  return remote.$;
};

// ParamsSpec for ShowHelpBubble
help_bubble.mojom.HelpBubbleClient_ShowHelpBubble_ParamsSpec = {
  $: {
    structSpec: {
      name: 'help_bubble.mojom.HelpBubbleClient.ShowHelpBubble_Params',
      packedSize: 16,
      fields: [
        { name: 'params', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ToggleFocusForAccessibility
help_bubble.mojom.HelpBubbleClient_ToggleFocusForAccessibility_ParamsSpec = {
  $: {
    structSpec: {
      name: 'help_bubble.mojom.HelpBubbleClient.ToggleFocusForAccessibility_Params',
      packedSize: 16,
      fields: [
        { name: 'native_identifier', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for HideHelpBubble
help_bubble.mojom.HelpBubbleClient_HideHelpBubble_ParamsSpec = {
  $: {
    structSpec: {
      name: 'help_bubble.mojom.HelpBubbleClient.HideHelpBubble_Params',
      packedSize: 16,
      fields: [
        { name: 'native_identifier', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ExternalHelpBubbleUpdated
help_bubble.mojom.HelpBubbleClient_ExternalHelpBubbleUpdated_ParamsSpec = {
  $: {
    structSpec: {
      name: 'help_bubble.mojom.HelpBubbleClient.ExternalHelpBubbleUpdated_Params',
      packedSize: 24,
      fields: [
        { name: 'native_identifier', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'shown', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
help_bubble.mojom.HelpBubbleClientPtr = help_bubble.mojom.HelpBubbleClientRemote;
help_bubble.mojom.HelpBubbleClientRequest = help_bubble.mojom.HelpBubbleClientPendingReceiver;

