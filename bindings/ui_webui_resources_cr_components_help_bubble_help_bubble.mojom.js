// Auto-generated MojoJS binding
// Source: chromium_src/ui/webui/resources/cr_components/help_bubble/help_bubble.mojom
// Module: help_bubble.mojom

'use strict';

// Module namespace
var help_bubble = help_bubble || {};
help_bubble.mojom = help_bubble.mojom || {};
var ui = ui || {};


// Enum: HelpBubbleArrowPosition
help_bubble.mojom.mojom.HelpBubbleArrowPosition = {
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
help_bubble.mojom.mojom.HelpBubbleArrowPositionSpec = { $: mojo.internal.Enum() };

// Enum: HelpBubbleClosedReason
help_bubble.mojom.mojom.HelpBubbleClosedReason = {
  kPageChanged: 0,
  kDismissedByUser: 1,
  kTimedOut: 2,
};
help_bubble.mojom.mojom.HelpBubbleClosedReasonSpec = { $: mojo.internal.Enum() };

// Struct: HelpBubbleButtonParams
help_bubble.mojom.mojom.HelpBubbleButtonParamsSpec = {
  $: {
    structSpec: {
      name: 'help_bubble.mojom.HelpBubbleButtonParams',
      packedSize: 24,
      fields: [
        { name: 'text', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'is_default', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: Progress
help_bubble.mojom.mojom.ProgressSpec = {
  $: {
    structSpec: {
      name: 'help_bubble.mojom.Progress',
      packedSize: 16,
      fields: [
        { name: 'current', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint8, nullable: false, minVersion: 0 },
        { name: 'total', packedOffset: 1, packedBitOffset: 0, type: mojo.internal.Uint8, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: HelpBubbleParams
help_bubble.mojom.mojom.HelpBubbleParamsSpec = {
  $: {
    structSpec: {
      name: 'help_bubble.mojom.HelpBubbleParams',
      packedSize: 88,
      fields: [
        { name: 'native_identifier', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'position', packedOffset: 72, packedBitOffset: 0, type: help_bubble.mojom.HelpBubbleArrowPositionSpec, nullable: false, minVersion: 0 },
        { name: 'title_text', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'body_text', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'close_button_alt_text', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'body_icon_name', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'body_icon_alt_text', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'progress', packedOffset: 48, packedBitOffset: 0, type: help_bubble.mojom.ProgressSpec, nullable: true, minVersion: 0 },
        { name: 'buttons', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.Array(help_bubble.mojom.HelpBubbleButtonParamsSpec, false), nullable: false, minVersion: 0 },
        { name: 'focus_on_show_hint_$flag', packedOffset: 76, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'focus_on_show_hint_$value', originalFieldName: 'focus_on_show_hint' } },
        { name: 'focus_on_show_hint_$value', packedOffset: 76, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'focus_on_show_hint_$flag', originalFieldName: 'focus_on_show_hint' } },
        { name: 'timeout', packedOffset: 64, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 88}]
    }
  }
};

// Interface: HelpBubbleHandlerFactory
help_bubble.mojom.mojom.HelpBubbleHandlerFactory = {};

help_bubble.mojom.mojom.HelpBubbleHandlerFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

help_bubble.mojom.mojom.HelpBubbleHandlerFactoryRemote = class {
  static get $interfaceName() {
    return 'help_bubble.mojom.HelpBubbleHandlerFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      help_bubble.mojom.mojom.HelpBubbleHandlerFactoryPendingReceiver,
      handle);
    this.$ = new help_bubble.mojom.mojom.HelpBubbleHandlerFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

help_bubble.mojom.mojom.HelpBubbleHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createHelpBubbleHandler(client, handler) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      help_bubble.mojom.mojom.HelpBubbleHandlerFactory_CreateHelpBubbleHandler_ParamsSpec,
      null,
      [client, handler]);
  }

};

help_bubble.mojom.mojom.HelpBubbleHandlerFactory.getRemote = function() {
  let remote = new help_bubble.mojom.mojom.HelpBubbleHandlerFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'help_bubble.mojom.HelpBubbleHandlerFactory',
    'context');
  return remote.$;
};

// ParamsSpec for CreateHelpBubbleHandler
help_bubble.mojom.mojom.HelpBubbleHandlerFactory_CreateHelpBubbleHandler_ParamsSpec = {
  $: {
    structSpec: {
      name: 'help_bubble.mojom.HelpBubbleHandlerFactory.CreateHelpBubbleHandler_Params',
      packedSize: 16,
      fields: [
        { name: 'client', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
        { name: 'handler', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
help_bubble.mojom.mojom.HelpBubbleHandlerFactoryPtr = help_bubble.mojom.mojom.HelpBubbleHandlerFactoryRemote;
help_bubble.mojom.mojom.HelpBubbleHandlerFactoryRequest = help_bubble.mojom.mojom.HelpBubbleHandlerFactoryPendingReceiver;


// Interface: PdfHelpBubbleHandlerFactory
help_bubble.mojom.mojom.PdfHelpBubbleHandlerFactory = {};

help_bubble.mojom.mojom.PdfHelpBubbleHandlerFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

help_bubble.mojom.mojom.PdfHelpBubbleHandlerFactoryRemote = class {
  static get $interfaceName() {
    return 'help_bubble.mojom.PdfHelpBubbleHandlerFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      help_bubble.mojom.mojom.PdfHelpBubbleHandlerFactoryPendingReceiver,
      handle);
    this.$ = new help_bubble.mojom.mojom.PdfHelpBubbleHandlerFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

help_bubble.mojom.mojom.PdfHelpBubbleHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createHelpBubbleHandler(client, handler) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      help_bubble.mojom.mojom.PdfHelpBubbleHandlerFactory_CreateHelpBubbleHandler_ParamsSpec,
      null,
      [client, handler]);
  }

};

help_bubble.mojom.mojom.PdfHelpBubbleHandlerFactory.getRemote = function() {
  let remote = new help_bubble.mojom.mojom.PdfHelpBubbleHandlerFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'help_bubble.mojom.PdfHelpBubbleHandlerFactory',
    'context');
  return remote.$;
};

// ParamsSpec for CreateHelpBubbleHandler
help_bubble.mojom.mojom.PdfHelpBubbleHandlerFactory_CreateHelpBubbleHandler_ParamsSpec = {
  $: {
    structSpec: {
      name: 'help_bubble.mojom.PdfHelpBubbleHandlerFactory.CreateHelpBubbleHandler_Params',
      packedSize: 16,
      fields: [
        { name: 'client', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
        { name: 'handler', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
help_bubble.mojom.mojom.PdfHelpBubbleHandlerFactoryPtr = help_bubble.mojom.mojom.PdfHelpBubbleHandlerFactoryRemote;
help_bubble.mojom.mojom.PdfHelpBubbleHandlerFactoryRequest = help_bubble.mojom.mojom.PdfHelpBubbleHandlerFactoryPendingReceiver;


// Interface: HelpBubbleHandler
help_bubble.mojom.mojom.HelpBubbleHandler = {};

help_bubble.mojom.mojom.HelpBubbleHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

help_bubble.mojom.mojom.HelpBubbleHandlerRemote = class {
  static get $interfaceName() {
    return 'help_bubble.mojom.HelpBubbleHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      help_bubble.mojom.mojom.HelpBubbleHandlerPendingReceiver,
      handle);
    this.$ = new help_bubble.mojom.mojom.HelpBubbleHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

help_bubble.mojom.mojom.HelpBubbleHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  bindTrackedElementHandler(handler) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      help_bubble.mojom.mojom.HelpBubbleHandler_BindTrackedElementHandler_ParamsSpec,
      null,
      [handler]);
  }

  helpBubbleButtonPressed(native_identifier, button_index) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      help_bubble.mojom.mojom.HelpBubbleHandler_HelpBubbleButtonPressed_ParamsSpec,
      null,
      [native_identifier, button_index]);
  }

  helpBubbleClosed(native_identifier, reason) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      help_bubble.mojom.mojom.HelpBubbleHandler_HelpBubbleClosed_ParamsSpec,
      null,
      [native_identifier, reason]);
  }

};

help_bubble.mojom.mojom.HelpBubbleHandler.getRemote = function() {
  let remote = new help_bubble.mojom.mojom.HelpBubbleHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'help_bubble.mojom.HelpBubbleHandler',
    'context');
  return remote.$;
};

// ParamsSpec for BindTrackedElementHandler
help_bubble.mojom.mojom.HelpBubbleHandler_BindTrackedElementHandler_ParamsSpec = {
  $: {
    structSpec: {
      name: 'help_bubble.mojom.HelpBubbleHandler.BindTrackedElementHandler_Params',
      packedSize: 16,
      fields: [
        { name: 'handler', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for HelpBubbleButtonPressed
help_bubble.mojom.mojom.HelpBubbleHandler_HelpBubbleButtonPressed_ParamsSpec = {
  $: {
    structSpec: {
      name: 'help_bubble.mojom.HelpBubbleHandler.HelpBubbleButtonPressed_Params',
      packedSize: 24,
      fields: [
        { name: 'native_identifier', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'button_index', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint8, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for HelpBubbleClosed
help_bubble.mojom.mojom.HelpBubbleHandler_HelpBubbleClosed_ParamsSpec = {
  $: {
    structSpec: {
      name: 'help_bubble.mojom.HelpBubbleHandler.HelpBubbleClosed_Params',
      packedSize: 24,
      fields: [
        { name: 'native_identifier', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'reason', packedOffset: 8, packedBitOffset: 0, type: help_bubble.mojom.HelpBubbleClosedReasonSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
help_bubble.mojom.mojom.HelpBubbleHandlerPtr = help_bubble.mojom.mojom.HelpBubbleHandlerRemote;
help_bubble.mojom.mojom.HelpBubbleHandlerRequest = help_bubble.mojom.mojom.HelpBubbleHandlerPendingReceiver;


// Interface: HelpBubbleClient
help_bubble.mojom.mojom.HelpBubbleClient = {};

help_bubble.mojom.mojom.HelpBubbleClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

help_bubble.mojom.mojom.HelpBubbleClientRemote = class {
  static get $interfaceName() {
    return 'help_bubble.mojom.HelpBubbleClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      help_bubble.mojom.mojom.HelpBubbleClientPendingReceiver,
      handle);
    this.$ = new help_bubble.mojom.mojom.HelpBubbleClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

help_bubble.mojom.mojom.HelpBubbleClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  showHelpBubble(params) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      help_bubble.mojom.mojom.HelpBubbleClient_ShowHelpBubble_ParamsSpec,
      null,
      [params]);
  }

  toggleFocusForAccessibility(native_identifier) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      help_bubble.mojom.mojom.HelpBubbleClient_ToggleFocusForAccessibility_ParamsSpec,
      null,
      [native_identifier]);
  }

  hideHelpBubble(native_identifier) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      help_bubble.mojom.mojom.HelpBubbleClient_HideHelpBubble_ParamsSpec,
      null,
      [native_identifier]);
  }

  externalHelpBubbleUpdated(native_identifier, shown) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      help_bubble.mojom.mojom.HelpBubbleClient_ExternalHelpBubbleUpdated_ParamsSpec,
      null,
      [native_identifier, shown]);
  }

};

help_bubble.mojom.mojom.HelpBubbleClient.getRemote = function() {
  let remote = new help_bubble.mojom.mojom.HelpBubbleClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'help_bubble.mojom.HelpBubbleClient',
    'context');
  return remote.$;
};

// ParamsSpec for ShowHelpBubble
help_bubble.mojom.mojom.HelpBubbleClient_ShowHelpBubble_ParamsSpec = {
  $: {
    structSpec: {
      name: 'help_bubble.mojom.HelpBubbleClient.ShowHelpBubble_Params',
      packedSize: 16,
      fields: [
        { name: 'params', packedOffset: 0, packedBitOffset: 0, type: help_bubble.mojom.HelpBubbleParamsSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ToggleFocusForAccessibility
help_bubble.mojom.mojom.HelpBubbleClient_ToggleFocusForAccessibility_ParamsSpec = {
  $: {
    structSpec: {
      name: 'help_bubble.mojom.HelpBubbleClient.ToggleFocusForAccessibility_Params',
      packedSize: 16,
      fields: [
        { name: 'native_identifier', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for HideHelpBubble
help_bubble.mojom.mojom.HelpBubbleClient_HideHelpBubble_ParamsSpec = {
  $: {
    structSpec: {
      name: 'help_bubble.mojom.HelpBubbleClient.HideHelpBubble_Params',
      packedSize: 16,
      fields: [
        { name: 'native_identifier', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ExternalHelpBubbleUpdated
help_bubble.mojom.mojom.HelpBubbleClient_ExternalHelpBubbleUpdated_ParamsSpec = {
  $: {
    structSpec: {
      name: 'help_bubble.mojom.HelpBubbleClient.ExternalHelpBubbleUpdated_Params',
      packedSize: 24,
      fields: [
        { name: 'native_identifier', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'shown', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
help_bubble.mojom.mojom.HelpBubbleClientPtr = help_bubble.mojom.mojom.HelpBubbleClientRemote;
help_bubble.mojom.mojom.HelpBubbleClientRequest = help_bubble.mojom.mojom.HelpBubbleClientPendingReceiver;

