// Auto-generated MojoJS binding
// Source: chromium_src/ui/webui/resources/cr_components/help_bubble/help_bubble.mojom
// Module: help_bubble.mojom

'use strict';

// Module namespace
var help_bubble = help_bubble || {};
help_bubble.mojom = help_bubble.mojom || {};
var mojo_base = mojo_base || {};
var tracked_element = tracked_element || {};

help_bubble.mojom.HelpBubbleArrowPositionSpec = { $: mojo.internal.Enum() };
help_bubble.mojom.HelpBubbleClosedReasonSpec = { $: mojo.internal.Enum() };
help_bubble.mojom.HelpBubbleButtonParamsSpec = { $: {} };
help_bubble.mojom.ProgressSpec = { $: {} };
help_bubble.mojom.HelpBubbleParamsSpec = { $: {} };
help_bubble.mojom.HelpBubbleHandlerFactory = {};
help_bubble.mojom.HelpBubbleHandlerFactory.$interfaceName = 'help_bubble.mojom.HelpBubbleHandlerFactory';
help_bubble.mojom.HelpBubbleHandlerFactory_CreateHelpBubbleHandler_ParamsSpec = { $: {} };
help_bubble.mojom.PdfHelpBubbleHandlerFactory = {};
help_bubble.mojom.PdfHelpBubbleHandlerFactory.$interfaceName = 'help_bubble.mojom.PdfHelpBubbleHandlerFactory';
help_bubble.mojom.PdfHelpBubbleHandlerFactory_CreateHelpBubbleHandler_ParamsSpec = { $: {} };
help_bubble.mojom.HelpBubbleHandler = {};
help_bubble.mojom.HelpBubbleHandler.$interfaceName = 'help_bubble.mojom.HelpBubbleHandler';
help_bubble.mojom.HelpBubbleHandler_BindTrackedElementHandler_ParamsSpec = { $: {} };
help_bubble.mojom.HelpBubbleHandler_HelpBubbleButtonPressed_ParamsSpec = { $: {} };
help_bubble.mojom.HelpBubbleHandler_HelpBubbleClosed_ParamsSpec = { $: {} };
help_bubble.mojom.HelpBubbleClient = {};
help_bubble.mojom.HelpBubbleClient.$interfaceName = 'help_bubble.mojom.HelpBubbleClient';
help_bubble.mojom.HelpBubbleClient_ShowHelpBubble_ParamsSpec = { $: {} };
help_bubble.mojom.HelpBubbleClient_ToggleFocusForAccessibility_ParamsSpec = { $: {} };
help_bubble.mojom.HelpBubbleClient_HideHelpBubble_ParamsSpec = { $: {} };
help_bubble.mojom.HelpBubbleClient_ExternalHelpBubbleUpdated_ParamsSpec = { $: {} };

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

// Struct: HelpBubbleButtonParams
mojo.internal.Struct(
    help_bubble.mojom.HelpBubbleButtonParamsSpec, 'help_bubble.mojom.HelpBubbleButtonParams', [
      mojo.internal.StructField('text', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('is_default', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: Progress
mojo.internal.Struct(
    help_bubble.mojom.ProgressSpec, 'help_bubble.mojom.Progress', [
      mojo.internal.StructField('current', 0, 0, mojo.internal.Uint8, 0, false, 0, undefined),
      mojo.internal.StructField('total', 1, 0, mojo.internal.Uint8, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: HelpBubbleParams
mojo.internal.Struct(
    help_bubble.mojom.HelpBubbleParamsSpec, 'help_bubble.mojom.HelpBubbleParams', [
      mojo.internal.StructField('native_identifier', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('position', 8, 0, help_bubble.mojom.HelpBubbleArrowPositionSpec.$, 0, false, 0, undefined),
      mojo.internal.StructField('title_text', 16, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('body_text', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('close_button_alt_text', 32, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('body_icon_name', 40, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('body_icon_alt_text', 48, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('progress', 56, 0, help_bubble.mojom.ProgressSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('buttons', 64, 0, mojo.internal.Array(help_bubble.mojom.HelpBubbleButtonParamsSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('timeout', 72, 0, mojo_base.mojom.TimeDeltaSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('focus_on_show_hint_$flag', 80, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'focus_on_show_hint_$value', originalFieldName: 'focus_on_show_hint' }),
      mojo.internal.StructField('focus_on_show_hint_$value', 80, 1, mojo.internal.Bool, false, false, 0, { isPrimary: false, linkedValueFieldName: 'focus_on_show_hint_$flag', originalFieldName: 'focus_on_show_hint' }),
    ],
    [[0, 96]]);

// Interface: HelpBubbleHandlerFactory
mojo.internal.Struct(
    help_bubble.mojom.HelpBubbleHandlerFactory_CreateHelpBubbleHandler_ParamsSpec, 'help_bubble.mojom.HelpBubbleHandlerFactory_CreateHelpBubbleHandler_Params', [
      mojo.internal.StructField('client', 0, 0, mojo.internal.InterfaceProxy(help_bubble.mojom.HelpBubbleClientSpec), null, false, 0, undefined),
      mojo.internal.StructField('handler', 8, 0, mojo.internal.InterfaceRequest(help_bubble.mojom.HelpBubbleHandlerSpec), null, false, 0, undefined),
    ],
    [[0, 24]]);

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
      [client, handler],
      false);
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

help_bubble.mojom.HelpBubbleHandlerFactoryReceiver = class {
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
          const params = help_bubble.mojom.HelpBubbleHandlerFactory_CreateHelpBubbleHandler_ParamsSpec.$.decode(message.payload);
          const result = this.impl.createHelpBubbleHandler(params.client, params.handler);
          break;
        }
      }
    });
  }
};

help_bubble.mojom.HelpBubbleHandlerFactoryReceiver = help_bubble.mojom.HelpBubbleHandlerFactoryReceiver;

help_bubble.mojom.HelpBubbleHandlerFactoryPtr = help_bubble.mojom.HelpBubbleHandlerFactoryRemote;
help_bubble.mojom.HelpBubbleHandlerFactoryRequest = help_bubble.mojom.HelpBubbleHandlerFactoryPendingReceiver;


// Interface: PdfHelpBubbleHandlerFactory
mojo.internal.Struct(
    help_bubble.mojom.PdfHelpBubbleHandlerFactory_CreateHelpBubbleHandler_ParamsSpec, 'help_bubble.mojom.PdfHelpBubbleHandlerFactory_CreateHelpBubbleHandler_Params', [
      mojo.internal.StructField('client', 0, 0, mojo.internal.InterfaceProxy(help_bubble.mojom.HelpBubbleClientRemote), null, false, 0, undefined),
      mojo.internal.StructField('handler', 8, 0, mojo.internal.InterfaceRequest(help_bubble.mojom.HelpBubbleHandlerRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

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
      [client, handler],
      false);
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

help_bubble.mojom.PdfHelpBubbleHandlerFactoryReceiver = class {
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
          const params = help_bubble.mojom.PdfHelpBubbleHandlerFactory_CreateHelpBubbleHandler_ParamsSpec.$.decode(message.payload);
          const result = this.impl.createHelpBubbleHandler(params.client, params.handler);
          break;
        }
      }
    });
  }
};

help_bubble.mojom.PdfHelpBubbleHandlerFactoryReceiver = help_bubble.mojom.PdfHelpBubbleHandlerFactoryReceiver;

help_bubble.mojom.PdfHelpBubbleHandlerFactoryPtr = help_bubble.mojom.PdfHelpBubbleHandlerFactoryRemote;
help_bubble.mojom.PdfHelpBubbleHandlerFactoryRequest = help_bubble.mojom.PdfHelpBubbleHandlerFactoryPendingReceiver;


// Interface: HelpBubbleHandler
mojo.internal.Struct(
    help_bubble.mojom.HelpBubbleHandler_BindTrackedElementHandler_ParamsSpec, 'help_bubble.mojom.HelpBubbleHandler_BindTrackedElementHandler_Params', [
      mojo.internal.StructField('handler', 0, 0, mojo.internal.InterfaceRequest(tracked_element.mojom.TrackedElementHandlerRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    help_bubble.mojom.HelpBubbleHandler_HelpBubbleButtonPressed_ParamsSpec, 'help_bubble.mojom.HelpBubbleHandler_HelpBubbleButtonPressed_Params', [
      mojo.internal.StructField('native_identifier', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('button_index', 8, 0, mojo.internal.Uint8, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    help_bubble.mojom.HelpBubbleHandler_HelpBubbleClosed_ParamsSpec, 'help_bubble.mojom.HelpBubbleHandler_HelpBubbleClosed_Params', [
      mojo.internal.StructField('native_identifier', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('reason', 8, 0, help_bubble.mojom.HelpBubbleClosedReasonSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

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
      [handler],
      false);
  }

  helpBubbleButtonPressed(native_identifier, button_index) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      help_bubble.mojom.HelpBubbleHandler_HelpBubbleButtonPressed_ParamsSpec,
      null,
      [native_identifier, button_index],
      false);
  }

  helpBubbleClosed(native_identifier, reason) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      help_bubble.mojom.HelpBubbleHandler_HelpBubbleClosed_ParamsSpec,
      null,
      [native_identifier, reason],
      false);
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

help_bubble.mojom.HelpBubbleHandlerReceiver = class {
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
          const params = help_bubble.mojom.HelpBubbleHandler_BindTrackedElementHandler_ParamsSpec.$.decode(message.payload);
          const result = this.impl.bindTrackedElementHandler(params.handler);
          break;
        }
        case 1: {
          const params = help_bubble.mojom.HelpBubbleHandler_HelpBubbleButtonPressed_ParamsSpec.$.decode(message.payload);
          const result = this.impl.helpBubbleButtonPressed(params.native_identifier, params.button_index);
          break;
        }
        case 2: {
          const params = help_bubble.mojom.HelpBubbleHandler_HelpBubbleClosed_ParamsSpec.$.decode(message.payload);
          const result = this.impl.helpBubbleClosed(params.native_identifier, params.reason);
          break;
        }
      }
    });
  }
};

help_bubble.mojom.HelpBubbleHandlerReceiver = help_bubble.mojom.HelpBubbleHandlerReceiver;

help_bubble.mojom.HelpBubbleHandlerPtr = help_bubble.mojom.HelpBubbleHandlerRemote;
help_bubble.mojom.HelpBubbleHandlerRequest = help_bubble.mojom.HelpBubbleHandlerPendingReceiver;


// Interface: HelpBubbleClient
mojo.internal.Struct(
    help_bubble.mojom.HelpBubbleClient_ShowHelpBubble_ParamsSpec, 'help_bubble.mojom.HelpBubbleClient_ShowHelpBubble_Params', [
      mojo.internal.StructField('params', 0, 0, help_bubble.mojom.HelpBubbleParamsSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    help_bubble.mojom.HelpBubbleClient_ToggleFocusForAccessibility_ParamsSpec, 'help_bubble.mojom.HelpBubbleClient_ToggleFocusForAccessibility_Params', [
      mojo.internal.StructField('native_identifier', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    help_bubble.mojom.HelpBubbleClient_HideHelpBubble_ParamsSpec, 'help_bubble.mojom.HelpBubbleClient_HideHelpBubble_Params', [
      mojo.internal.StructField('native_identifier', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    help_bubble.mojom.HelpBubbleClient_ExternalHelpBubbleUpdated_ParamsSpec, 'help_bubble.mojom.HelpBubbleClient_ExternalHelpBubbleUpdated_Params', [
      mojo.internal.StructField('native_identifier', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('shown', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

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
      [params],
      false);
  }

  toggleFocusForAccessibility(native_identifier) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      help_bubble.mojom.HelpBubbleClient_ToggleFocusForAccessibility_ParamsSpec,
      null,
      [native_identifier],
      false);
  }

  hideHelpBubble(native_identifier) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      help_bubble.mojom.HelpBubbleClient_HideHelpBubble_ParamsSpec,
      null,
      [native_identifier],
      false);
  }

  externalHelpBubbleUpdated(native_identifier, shown) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      help_bubble.mojom.HelpBubbleClient_ExternalHelpBubbleUpdated_ParamsSpec,
      null,
      [native_identifier, shown],
      false);
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

help_bubble.mojom.HelpBubbleClientReceiver = class {
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
          const params = help_bubble.mojom.HelpBubbleClient_ShowHelpBubble_ParamsSpec.$.decode(message.payload);
          const result = this.impl.showHelpBubble(params.params);
          break;
        }
        case 1: {
          const params = help_bubble.mojom.HelpBubbleClient_ToggleFocusForAccessibility_ParamsSpec.$.decode(message.payload);
          const result = this.impl.toggleFocusForAccessibility(params.native_identifier);
          break;
        }
        case 2: {
          const params = help_bubble.mojom.HelpBubbleClient_HideHelpBubble_ParamsSpec.$.decode(message.payload);
          const result = this.impl.hideHelpBubble(params.native_identifier);
          break;
        }
        case 3: {
          const params = help_bubble.mojom.HelpBubbleClient_ExternalHelpBubbleUpdated_ParamsSpec.$.decode(message.payload);
          const result = this.impl.externalHelpBubbleUpdated(params.native_identifier, params.shown);
          break;
        }
      }
    });
  }
};

help_bubble.mojom.HelpBubbleClientReceiver = help_bubble.mojom.HelpBubbleClientReceiver;

help_bubble.mojom.HelpBubbleClientPtr = help_bubble.mojom.HelpBubbleClientRemote;
help_bubble.mojom.HelpBubbleClientRequest = help_bubble.mojom.HelpBubbleClientPendingReceiver;

