// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/reset_password/reset_password.mojom
// Module: mojom

'use strict';

// Module namespace
var mojom = mojom || {};

mojom.ResetPasswordHandler = {};
mojom.ResetPasswordHandler.$interfaceName = 'mojom.ResetPasswordHandler';
mojom.ResetPasswordHandler_HandlePasswordReset_ParamsSpec = { $: {} };

// Interface: ResetPasswordHandler
mojo.internal.Struct(
    mojom.ResetPasswordHandler_HandlePasswordReset_ParamsSpec, 'mojom.ResetPasswordHandler_HandlePasswordReset_Params', [
    ],
    [[0, 8]]);

mojom.ResetPasswordHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojom.ResetPasswordHandlerRemote = class {
  static get $interfaceName() {
    return 'mojom.ResetPasswordHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojom.ResetPasswordHandlerPendingReceiver,
      handle);
    this.$ = new mojom.ResetPasswordHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

mojom.ResetPasswordHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  handlePasswordReset() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      mojom.ResetPasswordHandler_HandlePasswordReset_ParamsSpec,
      null,
      [],
      false);
  }

};

mojom.ResetPasswordHandler.getRemote = function() {
  let remote = new mojom.ResetPasswordHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'mojom.ResetPasswordHandler',
    'context');
  return remote.$;
};

mojom.ResetPasswordHandlerReceiver = class {
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
        
        // Try Method 0: HandlePasswordReset
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojom.ResetPasswordHandler_HandlePasswordReset_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> HandlePasswordReset (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
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
          const params = decoder.decodeStructInline(mojom.ResetPasswordHandler_HandlePasswordReset_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.handlePasswordReset');
          const result = this.impl.handlePasswordReset();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojom.ResetPasswordHandlerReceiver = mojom.ResetPasswordHandlerReceiver;

mojom.ResetPasswordHandlerPtr = mojom.ResetPasswordHandlerRemote;
mojom.ResetPasswordHandlerRequest = mojom.ResetPasswordHandlerPendingReceiver;

