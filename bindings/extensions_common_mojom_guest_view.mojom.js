// Auto-generated MojoJS binding
// Source: chromium_src/extensions/common/mojom/guest_view.mojom
// Module: extensions.mojom

'use strict';

// Module namespace
var extensions = extensions || {};
extensions.mojom = extensions.mojom || {};
var blink = blink || {};
var url = url || {};

extensions.mojom.GuestView = {};
extensions.mojom.GuestView.$interfaceName = 'extensions.mojom.GuestView';
extensions.mojom.GuestView_ReadyToCreateMimeHandlerView_ParamsSpec = { $: {} };
extensions.mojom.GuestView_CanExecuteContentScript_ParamsSpec = { $: {} };
extensions.mojom.GuestView_CanExecuteContentScript_ResponseParamsSpec = { $: {} };
extensions.mojom.MimeHandlerViewContainerManager = {};
extensions.mojom.MimeHandlerViewContainerManager.$interfaceName = 'extensions.mojom.MimeHandlerViewContainerManager';
extensions.mojom.MimeHandlerViewContainerManager_SetInternalId_ParamsSpec = { $: {} };
extensions.mojom.MimeHandlerViewContainerManager_CreateBeforeUnloadControl_ParamsSpec = { $: {} };
extensions.mojom.MimeHandlerViewContainerManager_CreateBeforeUnloadControl_ResponseParamsSpec = { $: {} };
extensions.mojom.MimeHandlerViewContainerManager_DestroyFrameContainer_ParamsSpec = { $: {} };
extensions.mojom.MimeHandlerViewContainerManager_DidLoad_ParamsSpec = { $: {} };

// Interface: GuestView
mojo.internal.Struct(
    extensions.mojom.GuestView_ReadyToCreateMimeHandlerView_ParamsSpec, 'extensions.mojom.GuestView_ReadyToCreateMimeHandlerView_Params', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    extensions.mojom.GuestView_CanExecuteContentScript_ParamsSpec, 'extensions.mojom.GuestView_CanExecuteContentScript_Params', [
      mojo.internal.StructField('script_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    extensions.mojom.GuestView_CanExecuteContentScript_ResponseParamsSpec, 'extensions.mojom.GuestView_CanExecuteContentScript_ResponseParams', [
      mojo.internal.StructField('allowed', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

extensions.mojom.GuestViewPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

extensions.mojom.GuestViewRemote = class {
  static get $interfaceName() {
    return 'extensions.mojom.GuestView';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      extensions.mojom.GuestViewPendingReceiver,
      handle);
    this.$ = new extensions.mojom.GuestViewRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

extensions.mojom.GuestViewRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  readyToCreateMimeHandlerView(success) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      extensions.mojom.GuestView_ReadyToCreateMimeHandlerView_ParamsSpec,
      null,
      [success],
      false);
  }

  canExecuteContentScript(script_id) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      extensions.mojom.GuestView_CanExecuteContentScript_ParamsSpec,
      extensions.mojom.GuestView_CanExecuteContentScript_ResponseParamsSpec,
      [script_id],
      false);
  }

};

extensions.mojom.GuestView.getRemote = function() {
  let remote = new extensions.mojom.GuestViewRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'extensions.mojom.GuestView',
    'context');
  return remote.$;
};

extensions.mojom.GuestViewReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
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
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: ReadyToCreateMimeHandlerView
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(extensions.mojom.GuestView_ReadyToCreateMimeHandlerView_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ReadyToCreateMimeHandlerView (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: CanExecuteContentScript
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(extensions.mojom.GuestView_CanExecuteContentScript_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CanExecuteContentScript (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(extensions.mojom.GuestView_ReadyToCreateMimeHandlerView_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.readyToCreateMimeHandlerView');
          const result = this.impl.readyToCreateMimeHandlerView(params.success);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(extensions.mojom.GuestView_CanExecuteContentScript_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.canExecuteContentScript');
          const result = this.impl.canExecuteContentScript(params.script_id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, extensions.mojom.GuestView_CanExecuteContentScript_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

extensions.mojom.GuestViewReceiver = extensions.mojom.GuestViewReceiver;

extensions.mojom.GuestViewPtr = extensions.mojom.GuestViewRemote;
extensions.mojom.GuestViewRequest = extensions.mojom.GuestViewPendingReceiver;


// Interface: MimeHandlerViewContainerManager
mojo.internal.Struct(
    extensions.mojom.MimeHandlerViewContainerManager_SetInternalId_ParamsSpec, 'extensions.mojom.MimeHandlerViewContainerManager_SetInternalId_Params', [
      mojo.internal.StructField('token_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    extensions.mojom.MimeHandlerViewContainerManager_CreateBeforeUnloadControl_ParamsSpec, 'extensions.mojom.MimeHandlerViewContainerManager_CreateBeforeUnloadControl_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    extensions.mojom.MimeHandlerViewContainerManager_CreateBeforeUnloadControl_ResponseParamsSpec, 'extensions.mojom.MimeHandlerViewContainerManager_CreateBeforeUnloadControl_ResponseParams', [
      mojo.internal.StructField('before_unload_control', 0, 0, mojo.internal.InterfaceProxy(extensions.mime_handler.BeforeUnloadControlRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    extensions.mojom.MimeHandlerViewContainerManager_DestroyFrameContainer_ParamsSpec, 'extensions.mojom.MimeHandlerViewContainerManager_DestroyFrameContainer_Params', [
      mojo.internal.StructField('element_instance_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    extensions.mojom.MimeHandlerViewContainerManager_DidLoad_ParamsSpec, 'extensions.mojom.MimeHandlerViewContainerManager_DidLoad_Params', [
      mojo.internal.StructField('resource_url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('mime_handler_view_guest_element_instance_id', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

extensions.mojom.MimeHandlerViewContainerManagerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

extensions.mojom.MimeHandlerViewContainerManagerRemote = class {
  static get $interfaceName() {
    return 'extensions.mojom.MimeHandlerViewContainerManager';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      extensions.mojom.MimeHandlerViewContainerManagerPendingReceiver,
      handle);
    this.$ = new extensions.mojom.MimeHandlerViewContainerManagerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

extensions.mojom.MimeHandlerViewContainerManagerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  setInternalId(token_id) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      extensions.mojom.MimeHandlerViewContainerManager_SetInternalId_ParamsSpec,
      null,
      [token_id],
      false);
  }

  createBeforeUnloadControl() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      extensions.mojom.MimeHandlerViewContainerManager_CreateBeforeUnloadControl_ParamsSpec,
      extensions.mojom.MimeHandlerViewContainerManager_CreateBeforeUnloadControl_ResponseParamsSpec,
      [],
      false);
  }

  destroyFrameContainer(element_instance_id) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      extensions.mojom.MimeHandlerViewContainerManager_DestroyFrameContainer_ParamsSpec,
      null,
      [element_instance_id],
      false);
  }

  didLoad(mime_handler_view_guest_element_instance_id, resource_url) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      extensions.mojom.MimeHandlerViewContainerManager_DidLoad_ParamsSpec,
      null,
      [mime_handler_view_guest_element_instance_id, resource_url],
      false);
  }

};

extensions.mojom.MimeHandlerViewContainerManager.getRemote = function() {
  let remote = new extensions.mojom.MimeHandlerViewContainerManagerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'extensions.mojom.MimeHandlerViewContainerManager',
    'context');
  return remote.$;
};

extensions.mojom.MimeHandlerViewContainerManagerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
    this.ordinalMap.set(3, 3); // Default ordinal 3 -> Index 3
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
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: SetInternalId
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(extensions.mojom.MimeHandlerViewContainerManager_SetInternalId_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetInternalId (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: CreateBeforeUnloadControl
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(extensions.mojom.MimeHandlerViewContainerManager_CreateBeforeUnloadControl_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreateBeforeUnloadControl (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: DestroyFrameContainer
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(extensions.mojom.MimeHandlerViewContainerManager_DestroyFrameContainer_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DestroyFrameContainer (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: DidLoad
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(extensions.mojom.MimeHandlerViewContainerManager_DidLoad_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DidLoad (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(extensions.mojom.MimeHandlerViewContainerManager_SetInternalId_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setInternalId');
          const result = this.impl.setInternalId(params.token_id);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(extensions.mojom.MimeHandlerViewContainerManager_CreateBeforeUnloadControl_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.createBeforeUnloadControl');
          const result = this.impl.createBeforeUnloadControl();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, extensions.mojom.MimeHandlerViewContainerManager_CreateBeforeUnloadControl_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(extensions.mojom.MimeHandlerViewContainerManager_DestroyFrameContainer_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.destroyFrameContainer');
          const result = this.impl.destroyFrameContainer(params.element_instance_id);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(extensions.mojom.MimeHandlerViewContainerManager_DidLoad_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.didLoad');
          const result = this.impl.didLoad(params.mime_handler_view_guest_element_instance_id, params.resource_url);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

extensions.mojom.MimeHandlerViewContainerManagerReceiver = extensions.mojom.MimeHandlerViewContainerManagerReceiver;

extensions.mojom.MimeHandlerViewContainerManagerPtr = extensions.mojom.MimeHandlerViewContainerManagerRemote;
extensions.mojom.MimeHandlerViewContainerManagerRequest = extensions.mojom.MimeHandlerViewContainerManagerPendingReceiver;

