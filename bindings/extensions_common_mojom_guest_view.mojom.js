// Auto-generated MojoJS binding
// Source: chromium_src/extensions/common/mojom/guest_view.mojom
// Module: extensions.mojom

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
  readyToCreateMimeHandlerView(success) {
    return this.$.readyToCreateMimeHandlerView(success);
  }
  canExecuteContentScript(script_id) {
    return this.$.canExecuteContentScript(script_id);
  }
};

extensions.mojom.GuestViewRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('GuestView', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  readyToCreateMimeHandlerView(success) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      extensions.mojom.GuestView_ReadyToCreateMimeHandlerView_ParamsSpec,
      null,
      [success],
      false);
  }

  canExecuteContentScript(script_id) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
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
    const ordinals = window.mojoScrambler.getOrdinals('GuestView', [
      { explicit: null },
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    if (this.router_.onConnectionError) {
      this.router_.onConnectionError.addListener(() => {
         console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
      });
    }
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(extensions.mojom.GuestView_ReadyToCreateMimeHandlerView_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(extensions.mojom.GuestView_CanExecuteContentScript_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(extensions.mojom.GuestView_ReadyToCreateMimeHandlerView_ParamsSpec.$.structSpec);
          const result = this.impl.readyToCreateMimeHandlerView(params.success);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(extensions.mojom.GuestView_CanExecuteContentScript_ParamsSpec.$.structSpec);
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
      } catch (err) {}
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
  setInternalId(token_id) {
    return this.$.setInternalId(token_id);
  }
  createBeforeUnloadControl() {
    return this.$.createBeforeUnloadControl();
  }
  destroyFrameContainer(element_instance_id) {
    return this.$.destroyFrameContainer(element_instance_id);
  }
  didLoad(mime_handler_view_guest_element_instance_id, resource_url) {
    return this.$.didLoad(mime_handler_view_guest_element_instance_id, resource_url);
  }
};

extensions.mojom.MimeHandlerViewContainerManagerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('MimeHandlerViewContainerManager', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  setInternalId(token_id) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      extensions.mojom.MimeHandlerViewContainerManager_SetInternalId_ParamsSpec,
      null,
      [token_id],
      false);
  }

  createBeforeUnloadControl() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      extensions.mojom.MimeHandlerViewContainerManager_CreateBeforeUnloadControl_ParamsSpec,
      extensions.mojom.MimeHandlerViewContainerManager_CreateBeforeUnloadControl_ResponseParamsSpec,
      [],
      false);
  }

  destroyFrameContainer(element_instance_id) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      extensions.mojom.MimeHandlerViewContainerManager_DestroyFrameContainer_ParamsSpec,
      null,
      [element_instance_id],
      false);
  }

  didLoad(mime_handler_view_guest_element_instance_id, resource_url) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
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
    const ordinals = window.mojoScrambler.getOrdinals('MimeHandlerViewContainerManager', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    if (this.router_.onConnectionError) {
      this.router_.onConnectionError.addListener(() => {
         console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
      });
    }
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(extensions.mojom.MimeHandlerViewContainerManager_SetInternalId_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(extensions.mojom.MimeHandlerViewContainerManager_CreateBeforeUnloadControl_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(extensions.mojom.MimeHandlerViewContainerManager_DestroyFrameContainer_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(extensions.mojom.MimeHandlerViewContainerManager_DidLoad_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(extensions.mojom.MimeHandlerViewContainerManager_SetInternalId_ParamsSpec.$.structSpec);
          const result = this.impl.setInternalId(params.token_id);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(extensions.mojom.MimeHandlerViewContainerManager_CreateBeforeUnloadControl_ParamsSpec.$.structSpec);
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
          const params = decoder.decodeStructInline(extensions.mojom.MimeHandlerViewContainerManager_DestroyFrameContainer_ParamsSpec.$.structSpec);
          const result = this.impl.destroyFrameContainer(params.element_instance_id);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(extensions.mojom.MimeHandlerViewContainerManager_DidLoad_ParamsSpec.$.structSpec);
          const result = this.impl.didLoad(params.mime_handler_view_guest_element_instance_id, params.resource_url);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

extensions.mojom.MimeHandlerViewContainerManagerReceiver = extensions.mojom.MimeHandlerViewContainerManagerReceiver;

extensions.mojom.MimeHandlerViewContainerManagerPtr = extensions.mojom.MimeHandlerViewContainerManagerRemote;
extensions.mojom.MimeHandlerViewContainerManagerRequest = extensions.mojom.MimeHandlerViewContainerManagerPendingReceiver;

