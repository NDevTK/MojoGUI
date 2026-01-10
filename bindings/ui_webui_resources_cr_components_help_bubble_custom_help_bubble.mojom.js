// Auto-generated MojoJS binding
// Source: chromium_src/ui/webui/resources/cr_components/help_bubble/custom_help_bubble.mojom
// Module: custom_help_bubble.mojom

'use strict';

// Module namespace
var custom_help_bubble = custom_help_bubble || {};
custom_help_bubble.mojom = custom_help_bubble.mojom || {};

custom_help_bubble.mojom.CustomHelpBubbleUserActionSpec = { $: mojo.internal.Enum() };
custom_help_bubble.mojom.CustomHelpBubbleHandlerFactory = {};
custom_help_bubble.mojom.CustomHelpBubbleHandlerFactory.$interfaceName = 'custom_help_bubble.mojom.CustomHelpBubbleHandlerFactory';
custom_help_bubble.mojom.CustomHelpBubbleHandlerFactory_CreateCustomHelpBubbleHandler_ParamsSpec = { $: {} };
custom_help_bubble.mojom.CustomHelpBubbleHandler = {};
custom_help_bubble.mojom.CustomHelpBubbleHandler.$interfaceName = 'custom_help_bubble.mojom.CustomHelpBubbleHandler';
custom_help_bubble.mojom.CustomHelpBubbleHandler_NotifyUserAction_ParamsSpec = { $: {} };

// Enum: CustomHelpBubbleUserAction
custom_help_bubble.mojom.CustomHelpBubbleUserAction = {
  kDismiss: 0,
  kSnooze: 1,
  kAction: 2,
  kCancel: 3,
};

// Interface: CustomHelpBubbleHandlerFactory
mojo.internal.Struct(
    custom_help_bubble.mojom.CustomHelpBubbleHandlerFactory_CreateCustomHelpBubbleHandler_ParamsSpec, 'custom_help_bubble.mojom.CustomHelpBubbleHandlerFactory_CreateCustomHelpBubbleHandler_Params', [
      mojo.internal.StructField('handler', 0, 0, mojo.internal.InterfaceRequest(custom_help_bubble.mojom.CustomHelpBubbleHandlerSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

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
      [handler],
      false);
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

custom_help_bubble.mojom.CustomHelpBubbleHandlerFactoryReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) dispatchId = header.ordinal; // Fallback to raw ordinal
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(custom_help_bubble.mojom.CustomHelpBubbleHandlerFactory_CreateCustomHelpBubbleHandler_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.createCustomHelpBubbleHandler');
          const result = this.impl.createCustomHelpBubbleHandler(params.handler);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

custom_help_bubble.mojom.CustomHelpBubbleHandlerFactoryReceiver = custom_help_bubble.mojom.CustomHelpBubbleHandlerFactoryReceiver;

custom_help_bubble.mojom.CustomHelpBubbleHandlerFactoryPtr = custom_help_bubble.mojom.CustomHelpBubbleHandlerFactoryRemote;
custom_help_bubble.mojom.CustomHelpBubbleHandlerFactoryRequest = custom_help_bubble.mojom.CustomHelpBubbleHandlerFactoryPendingReceiver;


// Interface: CustomHelpBubbleHandler
mojo.internal.Struct(
    custom_help_bubble.mojom.CustomHelpBubbleHandler_NotifyUserAction_ParamsSpec, 'custom_help_bubble.mojom.CustomHelpBubbleHandler_NotifyUserAction_Params', [
      mojo.internal.StructField('action', 0, 0, custom_help_bubble.mojom.CustomHelpBubbleUserActionSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

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
      [action],
      false);
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

custom_help_bubble.mojom.CustomHelpBubbleHandlerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) dispatchId = header.ordinal; // Fallback to raw ordinal
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(custom_help_bubble.mojom.CustomHelpBubbleHandler_NotifyUserAction_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.notifyUserAction');
          const result = this.impl.notifyUserAction(params.action);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

custom_help_bubble.mojom.CustomHelpBubbleHandlerReceiver = custom_help_bubble.mojom.CustomHelpBubbleHandlerReceiver;

custom_help_bubble.mojom.CustomHelpBubbleHandlerPtr = custom_help_bubble.mojom.CustomHelpBubbleHandlerRemote;
custom_help_bubble.mojom.CustomHelpBubbleHandlerRequest = custom_help_bubble.mojom.CustomHelpBubbleHandlerPendingReceiver;

