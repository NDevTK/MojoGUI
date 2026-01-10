// Auto-generated MojoJS binding
// Source: chromium_src/remoting/host/mojom/remote_security_key.mojom
// Module: remoting.mojom

'use strict';

// Module namespace
var remoting = remoting || {};
remoting.mojom = remoting.mojom || {};
var mojo_base = mojo_base || {};

remoting.mojom.SecurityKeyForwarder = {};
remoting.mojom.SecurityKeyForwarder.$interfaceName = 'remoting.mojom.SecurityKeyForwarder';
remoting.mojom.SecurityKeyForwarder_OnSecurityKeyRequest_ParamsSpec = { $: {} };
remoting.mojom.SecurityKeyForwarder_OnSecurityKeyRequest_ResponseParamsSpec = { $: {} };

// Interface: SecurityKeyForwarder
mojo.internal.Struct(
    remoting.mojom.SecurityKeyForwarder_OnSecurityKeyRequest_ParamsSpec, 'remoting.mojom.SecurityKeyForwarder_OnSecurityKeyRequest_Params', [
      mojo.internal.StructField('request_data', 0, 0, mojo_base.mojom.ByteStringSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    remoting.mojom.SecurityKeyForwarder_OnSecurityKeyRequest_ResponseParamsSpec, 'remoting.mojom.SecurityKeyForwarder_OnSecurityKeyRequest_ResponseParams', [
      mojo.internal.StructField('response_data', 0, 0, mojo_base.mojom.ByteStringSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

remoting.mojom.SecurityKeyForwarderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

remoting.mojom.SecurityKeyForwarderRemote = class {
  static get $interfaceName() {
    return 'remoting.mojom.SecurityKeyForwarder';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      remoting.mojom.SecurityKeyForwarderPendingReceiver,
      handle);
    this.$ = new remoting.mojom.SecurityKeyForwarderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

remoting.mojom.SecurityKeyForwarderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onSecurityKeyRequest(request_data) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      remoting.mojom.SecurityKeyForwarder_OnSecurityKeyRequest_ParamsSpec,
      remoting.mojom.SecurityKeyForwarder_OnSecurityKeyRequest_ResponseParamsSpec,
      [request_data],
      false);
  }

};

remoting.mojom.SecurityKeyForwarder.getRemote = function() {
  let remote = new remoting.mojom.SecurityKeyForwarderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'remoting.mojom.SecurityKeyForwarder',
    'context');
  return remote.$;
};

remoting.mojom.SecurityKeyForwarderReceiver = class {
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
        message = {
          header: args[1],
          payload: args[2],
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
        
        // Try Method 0: OnSecurityKeyRequest
        try {
             decoder.decodeStruct(remoting.mojom.SecurityKeyForwarder_OnSecurityKeyRequest_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnSecurityKeyRequest (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(remoting.mojom.SecurityKeyForwarder_OnSecurityKeyRequest_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onSecurityKeyRequest');
          const result = this.impl.onSecurityKeyRequest(params.request_data);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, remoting.mojom.SecurityKeyForwarder_OnSecurityKeyRequest_ResponseParamsSpec);
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

remoting.mojom.SecurityKeyForwarderReceiver = remoting.mojom.SecurityKeyForwarderReceiver;

remoting.mojom.SecurityKeyForwarderPtr = remoting.mojom.SecurityKeyForwarderRemote;
remoting.mojom.SecurityKeyForwarderRequest = remoting.mojom.SecurityKeyForwarderPendingReceiver;

