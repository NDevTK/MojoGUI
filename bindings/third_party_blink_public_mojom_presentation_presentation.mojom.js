// Auto-generated MojoJS binding
 // Source: chromium_src/third_party/blink/public/mojom/presentation/presentation.mojom
 // Module: blink.mojom

 'use strict';
 (function() {
   const SHA256 = (s) => {
     const K = [0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5, 0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174, 0xe49b69c1, 0xefbe4786, 0x0fc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da, 0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xD5A79147, 0x06CA6351, 0x14292967, 0x27B70A85, 0x2E1B2138, 0x4D2C6DFC, 0x53380D13, 0x650A7354, 0x766A0ABB, 0x81C2C92E, 0x92722C85, 0xA2BFE8A1, 0xA81A664B, 0xC24B8B70, 0xC76C51A3, 0xD192E819, 0xD6990624, 0xF40E3585,0x106AA070, 0x19A4C116, 0x1E376C08, 0x2748774C, 0x34B0BCB5, 0x391C0CB3, 0x4ED8AA4A, 0x5B9CCA4F, 0x682E6FF3, 0x748F82EE, 0x78A5636F, 0x84C87814, 0x8CC70208, 0x90BEFFFA, 0xA4506CEB, 0xBEF9A3F7, 0xC67178F2];
     const h = [0x6a09e667, 0xbb67ae85, 0x3c6ef372, 0xa54ff53a, 0x510e527f, 0x9b05688c, 0x1f83d9ab, 0x5be0cd19];
     const m = new TextEncoder().encode(s);
     const l = m.length;
     const b = new Uint32Array(((l + 8) >> 6) + 1 << 4);
     for (let i = 0; i < l; i++) b[i >> 2] |= m[i] << (24 - (i & 3) * 8);
     b[l >> 2] |= 0x80 << (24 - (l & 3) * 8);
     b[b.length - 1] = l * 8;
     for (let i = 0; i < b.length; i += 16) {
       let [a1, b1, c1, d1, e1, f1, g1, h1] = h;
       const w = new Uint32Array(64);
       for (let j = 0; j < 64; j++) {
         if (j < 16) w[j] = b[i + j];
         else {
           const s0 = ((w[j-15]>>>7)|(w[j-15]<<25))^((w[j-15]>>>18)|(w[j-15]<<14))^(w[j-15]>>>3);
           const s1 = ((w[j-2]>>>17)|(w[j-2]<<15))^((w[j-2]>>>19)|(w[j-2]<<13))^(w[j-2]>>>10);
           w[j] = (w[j-16]+s0+w[j-7]+s1)|0;
         }
         const t1 = (h1 + (((e1>>>6)|(e1<<26))^((e1>>>11)|(e1<<21))^((e1>>>25)|(e1<<7))) + ((e1&f1)^((~e1)&g1)) + K[j] + w[j])|0;
         const t2 = ((((a1>>>2)|(a1<<30))^((a1>>>13)|(a1<<19))^((a1>>>22)|(a1<<10))) + ((a1&b1)^(a1&c1)^(b1&c1)))|0;
         h1 = g1; g1 = f1; f1 = e1; e1 = (d1 + t1) | 0; d1 = c1; c1 = b1; b1 = a1; a1 = (t1 + t2) | 0;
       }
       h[0] = (h[0] + a1) | 0; h[1] = (h[1] + b1) | 0; h[2] = (h[2] + c1) | 0; h[3] = (h[3] + d1) | 0;
       h[4] = (h[4] + e1) | 0; h[5] = (h[5] + f1) | 0; h[6] = (h[6] + g1) | 0; h[7] = (h[7] + h1) | 0;
     }
     return h[0];
   };
   window.mojoScrambler = window.mojoScrambler || {
     getOrdinals: (ifaceName, methodSpecs) => {
       const params = new URLSearchParams(window.location.search);
       const forceNoScramble = params.get('scramble') === '0' || window.mojoNoScramble;
       
       const seen = new Set();
       methodSpecs.forEach(ms => { if (ms.explicit !== null) seen.add(ms.explicit); });
       let i = 0;
       return methodSpecs.map((ms, idx) => {
         if (ms.explicit !== null) return ms.explicit;
         if (forceNoScramble) return idx;

         const p = window.mojoVersion.split('.');
         const salt = 'MAJOR=' + p[0] + '\n' + 'MINOR=' + (p[1]||0) + '\n' + 'BUILD=' + (p[2]||0) + '\n' + 'PATCH=' + (p[3]||0) + '\n';
         console.log('[MojoScrambler] Derived Salt:', JSON.stringify(salt));
         
         while (true) {
           i++;
           const h0 = SHA256(salt + ifaceName.split('.').pop() + i);
           const ord = (((h0 & 0xFF) << 24) | ((h0 & 0xFF00) << 8) | ((h0 & 0xFF0000) >> 8) | (h0 >>> 24)) & 0x7fffffff;
           if (!seen.has(ord)) {
             seen.add(ord);
             return ord;
           }
         }
       });
     }
   };
 })();

 // Module namespace
 var mojo = mojo || {};
 mojo.internal = mojo.internal || {};
 mojo.internal.bindings = mojo.internal.bindings || {};
 

 mojo.internal.bindings.blink = mojo.internal.bindings.blink || {};
mojo.internal.bindings.blink.mojom = mojo.internal.bindings.blink.mojom || {};
mojo.internal.bindings.url = mojo.internal.bindings.url || {};

mojo.internal.bindings.blink.mojom.ScreenAvailabilitySpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.blink.mojom.PresentationConnectionStateSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.blink.mojom.PresentationConnectionCloseReasonSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.blink.mojom.PresentationErrorTypeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.blink.mojom.PresentationConnectionMessageSpec = { $: {} };
mojo.internal.bindings.blink.mojom.PresentationInfoSpec = { $: {} };
mojo.internal.bindings.blink.mojom.PresentationErrorSpec = { $: {} };
mojo.internal.bindings.blink.mojom.PresentationConnectionResultSpec = { $: {} };
mojo.internal.bindings.blink.mojom.PresentationConnection = {};
mojo.internal.bindings.blink.mojom.PresentationConnection.$interfaceName = 'blink.mojom.PresentationConnection';
mojo.internal.bindings.blink.mojom.PresentationConnection_OnMessage_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.PresentationConnection_DidChangeState_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.PresentationConnection_DidClose_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.PresentationService = {};
mojo.internal.bindings.blink.mojom.PresentationService.$interfaceName = 'blink.mojom.PresentationService';
mojo.internal.bindings.blink.mojom.PresentationService_SetController_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.PresentationService_SetReceiver_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.PresentationService_SetDefaultPresentationUrls_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.PresentationService_ListenForScreenAvailability_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.PresentationService_StopListeningForScreenAvailability_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.PresentationService_StartPresentation_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.PresentationService_StartPresentation_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.PresentationService_ReconnectPresentation_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.PresentationService_ReconnectPresentation_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.PresentationService_CloseConnection_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.PresentationService_Terminate_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.PresentationController = {};
mojo.internal.bindings.blink.mojom.PresentationController.$interfaceName = 'blink.mojom.PresentationController';
mojo.internal.bindings.blink.mojom.PresentationController_OnScreenAvailabilityUpdated_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.PresentationController_OnDefaultPresentationStarted_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.PresentationController_OnConnectionStateChanged_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.PresentationController_OnConnectionClosed_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.PresentationReceiver = {};
mojo.internal.bindings.blink.mojom.PresentationReceiver.$interfaceName = 'blink.mojom.PresentationReceiver';
mojo.internal.bindings.blink.mojom.PresentationReceiver_OnReceiverConnectionAvailable_ParamsSpec = { $: {} };

// Enum: ScreenAvailability
mojo.internal.bindings.blink.mojom.ScreenAvailability = {
  UNKNOWN: 0,
  UNAVAILABLE: 1,
  SOURCE_NOT_SUPPORTED: 2,
  DISABLED: 3,
  AVAILABLE: 4,
};

// Enum: PresentationConnectionState
mojo.internal.bindings.blink.mojom.PresentationConnectionState = {
  CONNECTING: 0,
  CONNECTED: 1,
  CLOSED: 2,
  TERMINATED: 3,
};

// Enum: PresentationConnectionCloseReason
mojo.internal.bindings.blink.mojom.PresentationConnectionCloseReason = {
  CONNECTION_ERROR: 0,
  CLOSED: 1,
  WENT_AWAY: 2,
};

// Enum: PresentationErrorType
mojo.internal.bindings.blink.mojom.PresentationErrorType = {
  NO_AVAILABLE_SCREENS: 0,
  PRESENTATION_REQUEST_CANCELLED: 1,
  NO_PRESENTATION_FOUND: 2,
  PREVIOUS_START_IN_PROGRESS: 3,
  UNKNOWN: 4,
};

// Union: PresentationConnectionMessage
mojo.internal.Union(
    mojo.internal.bindings.blink.mojom.PresentationConnectionMessageSpec, 'blink.mojom.PresentationConnectionMessage', {
      'arg_message': {
        'ordinal': 0,
        'type': mojo.internal.String,
        'nullable': false,
      },
      'arg_data': {
        'ordinal': 1,
        'type': mojo.internal.Array(mojo.internal.Uint8, false),
        'nullable': false,
      },
    });

// Struct: PresentationInfo
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.PresentationInfoSpec, 'blink.mojom.PresentationInfo', [
      mojo.internal.StructField('arg_url', 0, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_id', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: PresentationError
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.PresentationErrorSpec, 'blink.mojom.PresentationError', [
      mojo.internal.StructField('arg_error_type', 0, 0, mojo.internal.bindings.blink.mojom.PresentationErrorTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_message', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: PresentationConnectionResult
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.PresentationConnectionResultSpec, 'blink.mojom.PresentationConnectionResult', [
      mojo.internal.StructField('arg_presentation_info', 0, 0, mojo.internal.bindings.blink.mojom.PresentationInfoSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_connection_remote', 8, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.blink.mojom.PresentationConnectionSpec), null, false, 0, undefined),
      mojo.internal.StructField('arg_connection_receiver', 16, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.blink.mojom.PresentationConnectionSpec), null, false, 0, undefined),
    ],
    [[0, 32]]);

// Interface: PresentationConnection
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.PresentationConnection_OnMessage_ParamsSpec, 'blink.mojom.PresentationConnection_OnMessage_Params', [
      mojo.internal.StructField('arg_message', 0, 0, mojo.internal.bindings.blink.mojom.PresentationConnectionMessageSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.PresentationConnection_DidChangeState_ParamsSpec, 'blink.mojom.PresentationConnection_DidChangeState_Params', [
      mojo.internal.StructField('arg_state', 0, 0, mojo.internal.bindings.blink.mojom.PresentationConnectionStateSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.PresentationConnection_DidClose_ParamsSpec, 'blink.mojom.PresentationConnection_DidClose_Params', [
      mojo.internal.StructField('arg_reason', 0, 0, mojo.internal.bindings.blink.mojom.PresentationConnectionCloseReasonSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.blink.mojom.PresentationConnectionPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.blink.mojom.PresentationConnectionRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.PresentationConnection';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.blink.mojom.PresentationConnectionPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.blink.mojom.PresentationConnectionRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onMessage(arg_message) {
    return this.$.onMessage(arg_message);
  }
  didChangeState(arg_state) {
    return this.$.didChangeState(arg_state);
  }
  didClose(arg_reason) {
    return this.$.didClose(arg_reason);
  }
};

mojo.internal.bindings.blink.mojom.PresentationConnectionRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('PresentationConnection', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  onMessage(arg_message) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.blink.mojom.PresentationConnection_OnMessage_ParamsSpec,
      null,
      [arg_message],
      false);
  }

  didChangeState(arg_state) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.blink.mojom.PresentationConnection_DidChangeState_ParamsSpec,
      null,
      [arg_state],
      false);
  }

  didClose(arg_reason) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.blink.mojom.PresentationConnection_DidClose_ParamsSpec,
      null,
      [arg_reason],
      false);
  }

};

mojo.internal.bindings.blink.mojom.PresentationConnection.getRemote = function() {
  let remote = new mojo.internal.bindings.blink.mojom.PresentationConnectionRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.PresentationConnection',
    'context');
  return remote.$;
};

mojo.internal.bindings.blink.mojom.PresentationConnectionReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('PresentationConnection', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx); // Scrambled/Explicit
      this.ordinalMap.set(idx, idx); // Sequential Fallback (Non-scrambled builds)
    });
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
        
        // Try Method 0: OnMessage
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.PresentationConnection_OnMessage_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnMessage (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: DidChangeState
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.PresentationConnection_DidChangeState_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DidChangeState (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: DidClose
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.PresentationConnection_DidClose_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DidClose (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.PresentationConnection_OnMessage_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onMessage');
          const result = this.impl.onMessage(params.arg_message);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.PresentationConnection_DidChangeState_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.didChangeState');
          const result = this.impl.didChangeState(params.arg_state);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.PresentationConnection_DidClose_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.didClose');
          const result = this.impl.didClose(params.arg_reason);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.blink.mojom.PresentationConnectionReceiver = mojo.internal.bindings.blink.mojom.PresentationConnectionReceiver;

mojo.internal.bindings.blink.mojom.PresentationConnectionPtr = mojo.internal.bindings.blink.mojom.PresentationConnectionRemote;
mojo.internal.bindings.blink.mojom.PresentationConnectionRequest = mojo.internal.bindings.blink.mojom.PresentationConnectionPendingReceiver;


// Interface: PresentationService
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.PresentationService_SetController_ParamsSpec, 'blink.mojom.PresentationService_SetController_Params', [
      mojo.internal.StructField('arg_controller', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.blink.mojom.PresentationControllerSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.PresentationService_SetReceiver_ParamsSpec, 'blink.mojom.PresentationService_SetReceiver_Params', [
      mojo.internal.StructField('arg_receiver', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.blink.mojom.PresentationReceiverSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.PresentationService_SetDefaultPresentationUrls_ParamsSpec, 'blink.mojom.PresentationService_SetDefaultPresentationUrls_Params', [
      mojo.internal.StructField('arg_presentation_urls', 0, 0, mojo.internal.Array(mojo.internal.bindings.url.mojom.UrlSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.PresentationService_ListenForScreenAvailability_ParamsSpec, 'blink.mojom.PresentationService_ListenForScreenAvailability_Params', [
      mojo.internal.StructField('arg_availability_url', 0, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.PresentationService_StopListeningForScreenAvailability_ParamsSpec, 'blink.mojom.PresentationService_StopListeningForScreenAvailability_Params', [
      mojo.internal.StructField('arg_availability_url', 0, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.PresentationService_StartPresentation_ParamsSpec, 'blink.mojom.PresentationService_StartPresentation_Params', [
      mojo.internal.StructField('arg_presentation_urls', 0, 0, mojo.internal.Array(mojo.internal.bindings.url.mojom.UrlSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.PresentationService_StartPresentation_ResponseParamsSpec, 'blink.mojom.PresentationService_StartPresentation_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.blink.mojom.PresentationConnectionResultSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_error', 8, 0, mojo.internal.bindings.blink.mojom.PresentationErrorSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.PresentationService_ReconnectPresentation_ParamsSpec, 'blink.mojom.PresentationService_ReconnectPresentation_Params', [
      mojo.internal.StructField('arg_presentation_urls', 0, 0, mojo.internal.Array(mojo.internal.bindings.url.mojom.UrlSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_presentation_id', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.PresentationService_ReconnectPresentation_ResponseParamsSpec, 'blink.mojom.PresentationService_ReconnectPresentation_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.blink.mojom.PresentationConnectionResultSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_error', 8, 0, mojo.internal.bindings.blink.mojom.PresentationErrorSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.PresentationService_CloseConnection_ParamsSpec, 'blink.mojom.PresentationService_CloseConnection_Params', [
      mojo.internal.StructField('arg_presentation_url', 0, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_presentation_id', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.PresentationService_Terminate_ParamsSpec, 'blink.mojom.PresentationService_Terminate_Params', [
      mojo.internal.StructField('arg_presentation_url', 0, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_presentation_id', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.bindings.blink.mojom.PresentationServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.blink.mojom.PresentationServiceRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.PresentationService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.blink.mojom.PresentationServicePendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.blink.mojom.PresentationServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  setController(arg_controller) {
    return this.$.setController(arg_controller);
  }
  setReceiver(arg_receiver) {
    return this.$.setReceiver(arg_receiver);
  }
  setDefaultPresentationUrls(arg_presentation_urls) {
    return this.$.setDefaultPresentationUrls(arg_presentation_urls);
  }
  listenForScreenAvailability(arg_availability_url) {
    return this.$.listenForScreenAvailability(arg_availability_url);
  }
  stopListeningForScreenAvailability(arg_availability_url) {
    return this.$.stopListeningForScreenAvailability(arg_availability_url);
  }
  startPresentation(arg_presentation_urls) {
    return this.$.startPresentation(arg_presentation_urls);
  }
  reconnectPresentation(arg_presentation_urls, arg_presentation_id) {
    return this.$.reconnectPresentation(arg_presentation_urls, arg_presentation_id);
  }
  closeConnection(arg_presentation_url, arg_presentation_id) {
    return this.$.closeConnection(arg_presentation_url, arg_presentation_id);
  }
  terminate(arg_presentation_url, arg_presentation_id) {
    return this.$.terminate(arg_presentation_url, arg_presentation_id);
  }
};

mojo.internal.bindings.blink.mojom.PresentationServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('PresentationService', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  setController(arg_controller) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.blink.mojom.PresentationService_SetController_ParamsSpec,
      null,
      [arg_controller],
      false);
  }

  setReceiver(arg_receiver) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.blink.mojom.PresentationService_SetReceiver_ParamsSpec,
      null,
      [arg_receiver],
      false);
  }

  setDefaultPresentationUrls(arg_presentation_urls) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.blink.mojom.PresentationService_SetDefaultPresentationUrls_ParamsSpec,
      null,
      [arg_presentation_urls],
      false);
  }

  listenForScreenAvailability(arg_availability_url) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.blink.mojom.PresentationService_ListenForScreenAvailability_ParamsSpec,
      null,
      [arg_availability_url],
      false);
  }

  stopListeningForScreenAvailability(arg_availability_url) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.blink.mojom.PresentationService_StopListeningForScreenAvailability_ParamsSpec,
      null,
      [arg_availability_url],
      false);
  }

  startPresentation(arg_presentation_urls) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojo.internal.bindings.blink.mojom.PresentationService_StartPresentation_ParamsSpec,
      mojo.internal.bindings.blink.mojom.PresentationService_StartPresentation_ResponseParamsSpec,
      [arg_presentation_urls],
      false);
  }

  reconnectPresentation(arg_presentation_urls, arg_presentation_id) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      mojo.internal.bindings.blink.mojom.PresentationService_ReconnectPresentation_ParamsSpec,
      mojo.internal.bindings.blink.mojom.PresentationService_ReconnectPresentation_ResponseParamsSpec,
      [arg_presentation_urls, arg_presentation_id],
      false);
  }

  closeConnection(arg_presentation_url, arg_presentation_id) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      mojo.internal.bindings.blink.mojom.PresentationService_CloseConnection_ParamsSpec,
      null,
      [arg_presentation_url, arg_presentation_id],
      false);
  }

  terminate(arg_presentation_url, arg_presentation_id) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      mojo.internal.bindings.blink.mojom.PresentationService_Terminate_ParamsSpec,
      null,
      [arg_presentation_url, arg_presentation_id],
      false);
  }

};

mojo.internal.bindings.blink.mojom.PresentationService.getRemote = function() {
  let remote = new mojo.internal.bindings.blink.mojom.PresentationServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.PresentationService',
    'context');
  return remote.$;
};

mojo.internal.bindings.blink.mojom.PresentationServiceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('PresentationService', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx); // Scrambled/Explicit
      this.ordinalMap.set(idx, idx); // Sequential Fallback (Non-scrambled builds)
    });
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
        
        // Try Method 0: SetController
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.PresentationService_SetController_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetController (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: SetReceiver
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.PresentationService_SetReceiver_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetReceiver (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: SetDefaultPresentationUrls
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.PresentationService_SetDefaultPresentationUrls_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetDefaultPresentationUrls (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: ListenForScreenAvailability
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.PresentationService_ListenForScreenAvailability_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ListenForScreenAvailability (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: StopListeningForScreenAvailability
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.PresentationService_StopListeningForScreenAvailability_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> StopListeningForScreenAvailability (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: StartPresentation
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.PresentationService_StartPresentation_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> StartPresentation (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: ReconnectPresentation
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.PresentationService_ReconnectPresentation_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ReconnectPresentation (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: CloseConnection
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.PresentationService_CloseConnection_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CloseConnection (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: Terminate
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.PresentationService_Terminate_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Terminate (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.PresentationService_SetController_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setController');
          const result = this.impl.setController(params.arg_controller);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.PresentationService_SetReceiver_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setReceiver');
          const result = this.impl.setReceiver(params.arg_receiver);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.PresentationService_SetDefaultPresentationUrls_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setDefaultPresentationUrls');
          const result = this.impl.setDefaultPresentationUrls(params.arg_presentation_urls);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.PresentationService_ListenForScreenAvailability_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.listenForScreenAvailability');
          const result = this.impl.listenForScreenAvailability(params.arg_availability_url);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.PresentationService_StopListeningForScreenAvailability_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.stopListeningForScreenAvailability');
          const result = this.impl.stopListeningForScreenAvailability(params.arg_availability_url);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.PresentationService_StartPresentation_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.startPresentation');
          const result = this.impl.startPresentation(params.arg_presentation_urls);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.blink.mojom.PresentationService_StartPresentation_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] StartPresentation FAILED:', e));
          }
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.PresentationService_ReconnectPresentation_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.reconnectPresentation');
          const result = this.impl.reconnectPresentation(params.arg_presentation_urls, params.arg_presentation_id);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.blink.mojom.PresentationService_ReconnectPresentation_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] ReconnectPresentation FAILED:', e));
          }
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.PresentationService_CloseConnection_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.closeConnection');
          const result = this.impl.closeConnection(params.arg_presentation_url, params.arg_presentation_id);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.PresentationService_Terminate_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.terminate');
          const result = this.impl.terminate(params.arg_presentation_url, params.arg_presentation_id);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.blink.mojom.PresentationServiceReceiver = mojo.internal.bindings.blink.mojom.PresentationServiceReceiver;

mojo.internal.bindings.blink.mojom.PresentationServicePtr = mojo.internal.bindings.blink.mojom.PresentationServiceRemote;
mojo.internal.bindings.blink.mojom.PresentationServiceRequest = mojo.internal.bindings.blink.mojom.PresentationServicePendingReceiver;


// Interface: PresentationController
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.PresentationController_OnScreenAvailabilityUpdated_ParamsSpec, 'blink.mojom.PresentationController_OnScreenAvailabilityUpdated_Params', [
      mojo.internal.StructField('arg_url', 0, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_availability', 8, 0, mojo.internal.bindings.blink.mojom.ScreenAvailabilitySpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.PresentationController_OnDefaultPresentationStarted_ParamsSpec, 'blink.mojom.PresentationController_OnDefaultPresentationStarted_Params', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.blink.mojom.PresentationConnectionResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.PresentationController_OnConnectionStateChanged_ParamsSpec, 'blink.mojom.PresentationController_OnConnectionStateChanged_Params', [
      mojo.internal.StructField('arg_presentation_info', 0, 0, mojo.internal.bindings.blink.mojom.PresentationInfoSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_newState', 8, 0, mojo.internal.bindings.blink.mojom.PresentationConnectionStateSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.PresentationController_OnConnectionClosed_ParamsSpec, 'blink.mojom.PresentationController_OnConnectionClosed_Params', [
      mojo.internal.StructField('arg_presentation_info', 0, 0, mojo.internal.bindings.blink.mojom.PresentationInfoSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_reason', 8, 0, mojo.internal.bindings.blink.mojom.PresentationConnectionCloseReasonSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_message', 16, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.bindings.blink.mojom.PresentationControllerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.blink.mojom.PresentationControllerRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.PresentationController';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.blink.mojom.PresentationControllerPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.blink.mojom.PresentationControllerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onScreenAvailabilityUpdated(arg_url, arg_availability) {
    return this.$.onScreenAvailabilityUpdated(arg_url, arg_availability);
  }
  onDefaultPresentationStarted(arg_result) {
    return this.$.onDefaultPresentationStarted(arg_result);
  }
  onConnectionStateChanged(arg_presentation_info, arg_newState) {
    return this.$.onConnectionStateChanged(arg_presentation_info, arg_newState);
  }
  onConnectionClosed(arg_presentation_info, arg_reason, arg_message) {
    return this.$.onConnectionClosed(arg_presentation_info, arg_reason, arg_message);
  }
};

mojo.internal.bindings.blink.mojom.PresentationControllerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('PresentationController', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  onScreenAvailabilityUpdated(arg_url, arg_availability) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.blink.mojom.PresentationController_OnScreenAvailabilityUpdated_ParamsSpec,
      null,
      [arg_url, arg_availability],
      false);
  }

  onDefaultPresentationStarted(arg_result) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.blink.mojom.PresentationController_OnDefaultPresentationStarted_ParamsSpec,
      null,
      [arg_result],
      false);
  }

  onConnectionStateChanged(arg_presentation_info, arg_newState) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.blink.mojom.PresentationController_OnConnectionStateChanged_ParamsSpec,
      null,
      [arg_presentation_info, arg_newState],
      false);
  }

  onConnectionClosed(arg_presentation_info, arg_reason, arg_message) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.blink.mojom.PresentationController_OnConnectionClosed_ParamsSpec,
      null,
      [arg_presentation_info, arg_reason, arg_message],
      false);
  }

};

mojo.internal.bindings.blink.mojom.PresentationController.getRemote = function() {
  let remote = new mojo.internal.bindings.blink.mojom.PresentationControllerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.PresentationController',
    'context');
  return remote.$;
};

mojo.internal.bindings.blink.mojom.PresentationControllerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('PresentationController', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx); // Scrambled/Explicit
      this.ordinalMap.set(idx, idx); // Sequential Fallback (Non-scrambled builds)
    });
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
        
        // Try Method 0: OnScreenAvailabilityUpdated
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.PresentationController_OnScreenAvailabilityUpdated_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnScreenAvailabilityUpdated (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: OnDefaultPresentationStarted
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.PresentationController_OnDefaultPresentationStarted_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnDefaultPresentationStarted (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: OnConnectionStateChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.PresentationController_OnConnectionStateChanged_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnConnectionStateChanged (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: OnConnectionClosed
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.PresentationController_OnConnectionClosed_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnConnectionClosed (3)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.PresentationController_OnScreenAvailabilityUpdated_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onScreenAvailabilityUpdated');
          const result = this.impl.onScreenAvailabilityUpdated(params.arg_url, params.arg_availability);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.PresentationController_OnDefaultPresentationStarted_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onDefaultPresentationStarted');
          const result = this.impl.onDefaultPresentationStarted(params.arg_result);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.PresentationController_OnConnectionStateChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onConnectionStateChanged');
          const result = this.impl.onConnectionStateChanged(params.arg_presentation_info, params.arg_newState);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.PresentationController_OnConnectionClosed_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onConnectionClosed');
          const result = this.impl.onConnectionClosed(params.arg_presentation_info, params.arg_reason, params.arg_message);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.blink.mojom.PresentationControllerReceiver = mojo.internal.bindings.blink.mojom.PresentationControllerReceiver;

mojo.internal.bindings.blink.mojom.PresentationControllerPtr = mojo.internal.bindings.blink.mojom.PresentationControllerRemote;
mojo.internal.bindings.blink.mojom.PresentationControllerRequest = mojo.internal.bindings.blink.mojom.PresentationControllerPendingReceiver;


// Interface: PresentationReceiver
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.PresentationReceiver_OnReceiverConnectionAvailable_ParamsSpec, 'blink.mojom.PresentationReceiver_OnReceiverConnectionAvailable_Params', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.blink.mojom.PresentationConnectionResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.blink.mojom.PresentationReceiverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.blink.mojom.PresentationReceiverRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.PresentationReceiver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.blink.mojom.PresentationReceiverPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.blink.mojom.PresentationReceiverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onReceiverConnectionAvailable(arg_result) {
    return this.$.onReceiverConnectionAvailable(arg_result);
  }
};

mojo.internal.bindings.blink.mojom.PresentationReceiverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('PresentationReceiver', [
      { explicit: null },
    ]);
  }

  onReceiverConnectionAvailable(arg_result) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.blink.mojom.PresentationReceiver_OnReceiverConnectionAvailable_ParamsSpec,
      null,
      [arg_result],
      false);
  }

};

mojo.internal.bindings.blink.mojom.PresentationReceiver.getRemote = function() {
  let remote = new mojo.internal.bindings.blink.mojom.PresentationReceiverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.PresentationReceiver',
    'context');
  return remote.$;
};

mojo.internal.bindings.blink.mojom.PresentationReceiverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('PresentationReceiver', [
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx); // Scrambled/Explicit
      this.ordinalMap.set(idx, idx); // Sequential Fallback (Non-scrambled builds)
    });
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
        
        // Try Method 0: OnReceiverConnectionAvailable
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.PresentationReceiver_OnReceiverConnectionAvailable_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnReceiverConnectionAvailable (0)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.PresentationReceiver_OnReceiverConnectionAvailable_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onReceiverConnectionAvailable');
          const result = this.impl.onReceiverConnectionAvailable(params.arg_result);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.blink.mojom.PresentationReceiverReceiver = mojo.internal.bindings.blink.mojom.PresentationReceiverReceiver;

mojo.internal.bindings.blink.mojom.PresentationReceiverPtr = mojo.internal.bindings.blink.mojom.PresentationReceiverRemote;
mojo.internal.bindings.blink.mojom.PresentationReceiverRequest = mojo.internal.bindings.blink.mojom.PresentationReceiverPendingReceiver;

