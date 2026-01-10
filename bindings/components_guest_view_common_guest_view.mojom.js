// Auto-generated MojoJS binding
// Source: chromium_src/components/guest_view/common/guest_view.mojom
// Module: guest_view.mojom

'use strict';

// Module namespace
var guest_view = guest_view || {};
guest_view.mojom = guest_view.mojom || {};
var mojo_base = mojo_base || {};

guest_view.mojom.ViewHandle = {};
guest_view.mojom.ViewHandle.$interfaceName = 'guest_view.mojom.ViewHandle';
guest_view.mojom.GuestViewHost = {};
guest_view.mojom.GuestViewHost.$interfaceName = 'guest_view.mojom.GuestViewHost';
guest_view.mojom.GuestViewHost_AttachToEmbedderFrame_ParamsSpec = { $: {} };
guest_view.mojom.GuestViewHost_AttachToEmbedderFrame_ResponseParamsSpec = { $: {} };
guest_view.mojom.GuestViewHost_ViewCreated_ParamsSpec = { $: {} };

// Interface: ViewHandle
guest_view.mojom.ViewHandlePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

guest_view.mojom.ViewHandleRemote = class {
  static get $interfaceName() {
    return 'guest_view.mojom.ViewHandle';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      guest_view.mojom.ViewHandlePendingReceiver,
      handle);
    this.$ = new guest_view.mojom.ViewHandleRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

guest_view.mojom.ViewHandleRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

guest_view.mojom.ViewHandle.getRemote = function() {
  let remote = new guest_view.mojom.ViewHandleRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'guest_view.mojom.ViewHandle',
    'context');
  return remote.$;
};

guest_view.mojom.ViewHandleReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
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
        // Create a view of ONLY the payload (skipping the header)
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
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
        // Decoder uses payload view starting at 0
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

guest_view.mojom.ViewHandleReceiver = guest_view.mojom.ViewHandleReceiver;

guest_view.mojom.ViewHandlePtr = guest_view.mojom.ViewHandleRemote;
guest_view.mojom.ViewHandleRequest = guest_view.mojom.ViewHandlePendingReceiver;


// Interface: GuestViewHost
mojo.internal.Struct(
    guest_view.mojom.GuestViewHost_AttachToEmbedderFrame_ParamsSpec, 'guest_view.mojom.GuestViewHost_AttachToEmbedderFrame_Params', [
      mojo.internal.StructField('params', 0, 0, mojo_base.mojom.DictionaryValueSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('element_instance_id', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('guest_instance_id', 12, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    guest_view.mojom.GuestViewHost_AttachToEmbedderFrame_ResponseParamsSpec, 'guest_view.mojom.GuestViewHost_AttachToEmbedderFrame_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    guest_view.mojom.GuestViewHost_ViewCreated_ParamsSpec, 'guest_view.mojom.GuestViewHost_ViewCreated_Params', [
      mojo.internal.StructField('view_type', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('keep_alive_handle_receiver', 8, 0, mojo.internal.InterfaceRequest(guest_view.mojom.ViewHandleSpec), null, false, 0, undefined),
      mojo.internal.StructField('view_instance_id', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

guest_view.mojom.GuestViewHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

guest_view.mojom.GuestViewHostRemote = class {
  static get $interfaceName() {
    return 'guest_view.mojom.GuestViewHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      guest_view.mojom.GuestViewHostPendingReceiver,
      handle);
    this.$ = new guest_view.mojom.GuestViewHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

guest_view.mojom.GuestViewHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  attachToEmbedderFrame(element_instance_id, guest_instance_id, params) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      guest_view.mojom.GuestViewHost_AttachToEmbedderFrame_ParamsSpec,
      guest_view.mojom.GuestViewHost_AttachToEmbedderFrame_ResponseParamsSpec,
      [element_instance_id, guest_instance_id, params],
      false);
  }

  viewCreated(view_instance_id, view_type, keep_alive_handle_receiver) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      guest_view.mojom.GuestViewHost_ViewCreated_ParamsSpec,
      null,
      [view_instance_id, view_type, keep_alive_handle_receiver],
      false);
  }

};

guest_view.mojom.GuestViewHost.getRemote = function() {
  let remote = new guest_view.mojom.GuestViewHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'guest_view.mojom.GuestViewHost',
    'context');
  return remote.$;
};

guest_view.mojom.GuestViewHostReceiver = class {
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
        // Create a view of ONLY the payload (skipping the header)
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
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
        // Decoder uses payload view starting at 0
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: AttachToEmbedderFrame
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(guest_view.mojom.GuestViewHost_AttachToEmbedderFrame_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AttachToEmbedderFrame (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: ViewCreated
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(guest_view.mojom.GuestViewHost_ViewCreated_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ViewCreated (1)');
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
          const params = decoder.decodeStructInline(guest_view.mojom.GuestViewHost_AttachToEmbedderFrame_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.attachToEmbedderFrame');
          const result = this.impl.attachToEmbedderFrame(params.element_instance_id, params.guest_instance_id, params.params);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, guest_view.mojom.GuestViewHost_AttachToEmbedderFrame_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(guest_view.mojom.GuestViewHost_ViewCreated_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.viewCreated');
          const result = this.impl.viewCreated(params.view_instance_id, params.view_type, params.keep_alive_handle_receiver);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

guest_view.mojom.GuestViewHostReceiver = guest_view.mojom.GuestViewHostReceiver;

guest_view.mojom.GuestViewHostPtr = guest_view.mojom.GuestViewHostRemote;
guest_view.mojom.GuestViewHostRequest = guest_view.mojom.GuestViewHostPendingReceiver;

