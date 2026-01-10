// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/privacy_sandbox/private_state_tokens/private_state_tokens.mojom
// Module: private_state_tokens.mojom

'use strict';

// Module namespace
var private_state_tokens = private_state_tokens || {};
private_state_tokens.mojom = private_state_tokens.mojom || {};

private_state_tokens.mojom.IssuerTokenCountSpec = { $: {} };
private_state_tokens.mojom.PrivateStateTokensPageHandler = {};
private_state_tokens.mojom.PrivateStateTokensPageHandler.$interfaceName = 'private_state_tokens.mojom.PrivateStateTokensPageHandler';
private_state_tokens.mojom.PrivateStateTokensPageHandler_GetIssuerTokenCounts_ParamsSpec = { $: {} };
private_state_tokens.mojom.PrivateStateTokensPageHandler_GetIssuerTokenCounts_ResponseParamsSpec = { $: {} };

// Struct: IssuerTokenCount
mojo.internal.Struct(
    private_state_tokens.mojom.IssuerTokenCountSpec, 'private_state_tokens.mojom.IssuerTokenCount', [
      mojo.internal.StructField('issuer', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('count', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: PrivateStateTokensPageHandler
mojo.internal.Struct(
    private_state_tokens.mojom.PrivateStateTokensPageHandler_GetIssuerTokenCounts_ParamsSpec, 'private_state_tokens.mojom.PrivateStateTokensPageHandler_GetIssuerTokenCounts_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    private_state_tokens.mojom.PrivateStateTokensPageHandler_GetIssuerTokenCounts_ResponseParamsSpec, 'private_state_tokens.mojom.PrivateStateTokensPageHandler_GetIssuerTokenCounts_ResponseParams', [
      mojo.internal.StructField('private_state_tokens_count', 0, 0, mojo.internal.Array(private_state_tokens.mojom.IssuerTokenCountSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

private_state_tokens.mojom.PrivateStateTokensPageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

private_state_tokens.mojom.PrivateStateTokensPageHandlerRemote = class {
  static get $interfaceName() {
    return 'private_state_tokens.mojom.PrivateStateTokensPageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      private_state_tokens.mojom.PrivateStateTokensPageHandlerPendingReceiver,
      handle);
    this.$ = new private_state_tokens.mojom.PrivateStateTokensPageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

private_state_tokens.mojom.PrivateStateTokensPageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getIssuerTokenCounts() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      private_state_tokens.mojom.PrivateStateTokensPageHandler_GetIssuerTokenCounts_ParamsSpec,
      private_state_tokens.mojom.PrivateStateTokensPageHandler_GetIssuerTokenCounts_ResponseParamsSpec,
      [],
      false);
  }

};

private_state_tokens.mojom.PrivateStateTokensPageHandler.getRemote = function() {
  let remote = new private_state_tokens.mojom.PrivateStateTokensPageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'private_state_tokens.mojom.PrivateStateTokensPageHandler',
    'context');
  return remote.$;
};

private_state_tokens.mojom.PrivateStateTokensPageHandlerReceiver = class {
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
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: GetIssuerTokenCounts
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(private_state_tokens.mojom.PrivateStateTokensPageHandler_GetIssuerTokenCounts_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetIssuerTokenCounts (0)');
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
          const params = decoder.decodeStruct(private_state_tokens.mojom.PrivateStateTokensPageHandler_GetIssuerTokenCounts_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getIssuerTokenCounts');
          const result = this.impl.getIssuerTokenCounts();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, private_state_tokens.mojom.PrivateStateTokensPageHandler_GetIssuerTokenCounts_ResponseParamsSpec);
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

private_state_tokens.mojom.PrivateStateTokensPageHandlerReceiver = private_state_tokens.mojom.PrivateStateTokensPageHandlerReceiver;

private_state_tokens.mojom.PrivateStateTokensPageHandlerPtr = private_state_tokens.mojom.PrivateStateTokensPageHandlerRemote;
private_state_tokens.mojom.PrivateStateTokensPageHandlerRequest = private_state_tokens.mojom.PrivateStateTokensPageHandlerPendingReceiver;

