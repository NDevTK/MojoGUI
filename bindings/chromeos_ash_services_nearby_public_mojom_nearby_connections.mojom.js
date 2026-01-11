// Auto-generated MojoJS binding
 // Source: chromium_src/chromeos/ash/services/nearby/public/mojom/nearby_connections.mojom
 // Module: nearby.connections.mojom

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
 

 mojo.internal.bindings.nearby = mojo.internal.bindings.nearby || {};
mojo.internal.bindings.nearby.connections = mojo.internal.bindings.nearby.connections || {};
mojo.internal.bindings.nearby.connections.mojom = mojo.internal.bindings.nearby.connections.mojom || {};
mojo.internal.bindings.ash = mojo.internal.bindings.ash || {};
mojo.internal.bindings.mojo_base = mojo.internal.bindings.mojo_base || {};

mojo.internal.bindings.nearby.connections.mojom.EndpointDiscoveryListener = {};
mojo.internal.bindings.nearby.connections.mojom.EndpointDiscoveryListener.$interfaceName = 'nearby.connections.mojom.EndpointDiscoveryListener';
mojo.internal.bindings.nearby.connections.mojom.EndpointDiscoveryListener_OnEndpointFound_ParamsSpec = { $: {} };
mojo.internal.bindings.nearby.connections.mojom.EndpointDiscoveryListener_OnEndpointLost_ParamsSpec = { $: {} };
mojo.internal.bindings.nearby.connections.mojom.ConnectionLifecycleListener = {};
mojo.internal.bindings.nearby.connections.mojom.ConnectionLifecycleListener.$interfaceName = 'nearby.connections.mojom.ConnectionLifecycleListener';
mojo.internal.bindings.nearby.connections.mojom.ConnectionLifecycleListener_OnConnectionInitiated_ParamsSpec = { $: {} };
mojo.internal.bindings.nearby.connections.mojom.ConnectionLifecycleListener_OnConnectionAccepted_ParamsSpec = { $: {} };
mojo.internal.bindings.nearby.connections.mojom.ConnectionLifecycleListener_OnConnectionRejected_ParamsSpec = { $: {} };
mojo.internal.bindings.nearby.connections.mojom.ConnectionLifecycleListener_OnDisconnected_ParamsSpec = { $: {} };
mojo.internal.bindings.nearby.connections.mojom.ConnectionLifecycleListener_OnBandwidthChanged_ParamsSpec = { $: {} };
mojo.internal.bindings.nearby.connections.mojom.PayloadListener = {};
mojo.internal.bindings.nearby.connections.mojom.PayloadListener.$interfaceName = 'nearby.connections.mojom.PayloadListener';
mojo.internal.bindings.nearby.connections.mojom.PayloadListener_OnPayloadReceived_ParamsSpec = { $: {} };
mojo.internal.bindings.nearby.connections.mojom.PayloadListener_OnPayloadTransferUpdate_ParamsSpec = { $: {} };
mojo.internal.bindings.nearby.connections.mojom.ConnectionListenerV3 = {};
mojo.internal.bindings.nearby.connections.mojom.ConnectionListenerV3.$interfaceName = 'nearby.connections.mojom.ConnectionListenerV3';
mojo.internal.bindings.nearby.connections.mojom.ConnectionListenerV3_OnConnectionInitiatedV3_ParamsSpec = { $: {} };
mojo.internal.bindings.nearby.connections.mojom.ConnectionListenerV3_OnConnectionResultV3_ParamsSpec = { $: {} };
mojo.internal.bindings.nearby.connections.mojom.ConnectionListenerV3_OnDisconnectedV3_ParamsSpec = { $: {} };
mojo.internal.bindings.nearby.connections.mojom.ConnectionListenerV3_OnBandwidthChangedV3_ParamsSpec = { $: {} };
mojo.internal.bindings.nearby.connections.mojom.PayloadListenerV3 = {};
mojo.internal.bindings.nearby.connections.mojom.PayloadListenerV3.$interfaceName = 'nearby.connections.mojom.PayloadListenerV3';
mojo.internal.bindings.nearby.connections.mojom.PayloadListenerV3_OnPayloadReceivedV3_ParamsSpec = { $: {} };
mojo.internal.bindings.nearby.connections.mojom.PayloadListenerV3_OnPayloadTransferUpdateV3_ParamsSpec = { $: {} };
mojo.internal.bindings.nearby.connections.mojom.NearbyConnections = {};
mojo.internal.bindings.nearby.connections.mojom.NearbyConnections.$interfaceName = 'nearby.connections.mojom.NearbyConnections';
mojo.internal.bindings.nearby.connections.mojom.NearbyConnections_StartAdvertising_ParamsSpec = { $: {} };
mojo.internal.bindings.nearby.connections.mojom.NearbyConnections_StartAdvertising_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.nearby.connections.mojom.NearbyConnections_StopAdvertising_ParamsSpec = { $: {} };
mojo.internal.bindings.nearby.connections.mojom.NearbyConnections_StopAdvertising_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.nearby.connections.mojom.NearbyConnections_StartDiscovery_ParamsSpec = { $: {} };
mojo.internal.bindings.nearby.connections.mojom.NearbyConnections_StartDiscovery_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.nearby.connections.mojom.NearbyConnections_StopDiscovery_ParamsSpec = { $: {} };
mojo.internal.bindings.nearby.connections.mojom.NearbyConnections_StopDiscovery_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.nearby.connections.mojom.NearbyConnections_InjectBluetoothEndpoint_ParamsSpec = { $: {} };
mojo.internal.bindings.nearby.connections.mojom.NearbyConnections_InjectBluetoothEndpoint_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.nearby.connections.mojom.NearbyConnections_RequestConnection_ParamsSpec = { $: {} };
mojo.internal.bindings.nearby.connections.mojom.NearbyConnections_RequestConnection_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.nearby.connections.mojom.NearbyConnections_AcceptConnection_ParamsSpec = { $: {} };
mojo.internal.bindings.nearby.connections.mojom.NearbyConnections_AcceptConnection_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.nearby.connections.mojom.NearbyConnections_RejectConnection_ParamsSpec = { $: {} };
mojo.internal.bindings.nearby.connections.mojom.NearbyConnections_RejectConnection_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.nearby.connections.mojom.NearbyConnections_DisconnectFromEndpoint_ParamsSpec = { $: {} };
mojo.internal.bindings.nearby.connections.mojom.NearbyConnections_DisconnectFromEndpoint_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.nearby.connections.mojom.NearbyConnections_SendPayload_ParamsSpec = { $: {} };
mojo.internal.bindings.nearby.connections.mojom.NearbyConnections_SendPayload_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.nearby.connections.mojom.NearbyConnections_CancelPayload_ParamsSpec = { $: {} };
mojo.internal.bindings.nearby.connections.mojom.NearbyConnections_CancelPayload_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.nearby.connections.mojom.NearbyConnections_StopAllEndpoints_ParamsSpec = { $: {} };
mojo.internal.bindings.nearby.connections.mojom.NearbyConnections_StopAllEndpoints_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.nearby.connections.mojom.NearbyConnections_InitiateBandwidthUpgrade_ParamsSpec = { $: {} };
mojo.internal.bindings.nearby.connections.mojom.NearbyConnections_InitiateBandwidthUpgrade_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.nearby.connections.mojom.NearbyConnections_RegisterPayloadFile_ParamsSpec = { $: {} };
mojo.internal.bindings.nearby.connections.mojom.NearbyConnections_RegisterPayloadFile_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.nearby.connections.mojom.NearbyConnections_RequestConnectionV3_ParamsSpec = { $: {} };
mojo.internal.bindings.nearby.connections.mojom.NearbyConnections_RequestConnectionV3_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.nearby.connections.mojom.NearbyConnections_AcceptConnectionV3_ParamsSpec = { $: {} };
mojo.internal.bindings.nearby.connections.mojom.NearbyConnections_AcceptConnectionV3_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.nearby.connections.mojom.NearbyConnections_RejectConnectionV3_ParamsSpec = { $: {} };
mojo.internal.bindings.nearby.connections.mojom.NearbyConnections_RejectConnectionV3_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.nearby.connections.mojom.NearbyConnections_DisconnectFromDeviceV3_ParamsSpec = { $: {} };
mojo.internal.bindings.nearby.connections.mojom.NearbyConnections_DisconnectFromDeviceV3_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.nearby.connections.mojom.NearbyConnections_RegisterServiceWithPresenceDeviceProvider_ParamsSpec = { $: {} };

// Interface: EndpointDiscoveryListener
mojo.internal.Struct(
    mojo.internal.bindings.nearby.connections.mojom.EndpointDiscoveryListener_OnEndpointFound_ParamsSpec, 'nearby.connections.mojom.EndpointDiscoveryListener_OnEndpointFound_Params', [
      mojo.internal.StructField('arg_endpoint_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_info', 8, 0, mojo.internal.bindings.nearby.connections.mojom.DiscoveredEndpointInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.nearby.connections.mojom.EndpointDiscoveryListener_OnEndpointLost_ParamsSpec, 'nearby.connections.mojom.EndpointDiscoveryListener_OnEndpointLost_Params', [
      mojo.internal.StructField('arg_endpoint_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.nearby.connections.mojom.EndpointDiscoveryListenerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.nearby.connections.mojom.EndpointDiscoveryListenerRemote = class {
  static get $interfaceName() {
    return 'nearby.connections.mojom.EndpointDiscoveryListener';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.nearby.connections.mojom.EndpointDiscoveryListenerPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.nearby.connections.mojom.EndpointDiscoveryListenerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onEndpointFound(arg_endpoint_id, arg_info) {
    return this.$.onEndpointFound(arg_endpoint_id, arg_info);
  }
  onEndpointLost(arg_endpoint_id) {
    return this.$.onEndpointLost(arg_endpoint_id);
  }
};

mojo.internal.bindings.nearby.connections.mojom.EndpointDiscoveryListenerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('EndpointDiscoveryListener', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  onEndpointFound(arg_endpoint_id, arg_info) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.nearby.connections.mojom.EndpointDiscoveryListener_OnEndpointFound_ParamsSpec,
      null,
      [arg_endpoint_id, arg_info],
      false);
  }

  onEndpointLost(arg_endpoint_id) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.nearby.connections.mojom.EndpointDiscoveryListener_OnEndpointLost_ParamsSpec,
      null,
      [arg_endpoint_id],
      false);
  }

};

mojo.internal.bindings.nearby.connections.mojom.EndpointDiscoveryListener.getRemote = function() {
  let remote = new mojo.internal.bindings.nearby.connections.mojom.EndpointDiscoveryListenerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'nearby.connections.mojom.EndpointDiscoveryListener',
    'context');
  return remote.$;
};

mojo.internal.bindings.nearby.connections.mojom.EndpointDiscoveryListenerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('EndpointDiscoveryListener', [
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
        
        // Try Method 0: OnEndpointFound
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.nearby.connections.mojom.EndpointDiscoveryListener_OnEndpointFound_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnEndpointFound (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: OnEndpointLost
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.nearby.connections.mojom.EndpointDiscoveryListener_OnEndpointLost_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnEndpointLost (1)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.nearby.connections.mojom.EndpointDiscoveryListener_OnEndpointFound_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onEndpointFound');
          const result = this.impl.onEndpointFound(params.arg_endpoint_id, params.arg_info);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.nearby.connections.mojom.EndpointDiscoveryListener_OnEndpointLost_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onEndpointLost');
          const result = this.impl.onEndpointLost(params.arg_endpoint_id);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.nearby.connections.mojom.EndpointDiscoveryListenerReceiver = mojo.internal.bindings.nearby.connections.mojom.EndpointDiscoveryListenerReceiver;

mojo.internal.bindings.nearby.connections.mojom.EndpointDiscoveryListenerPtr = mojo.internal.bindings.nearby.connections.mojom.EndpointDiscoveryListenerRemote;
mojo.internal.bindings.nearby.connections.mojom.EndpointDiscoveryListenerRequest = mojo.internal.bindings.nearby.connections.mojom.EndpointDiscoveryListenerPendingReceiver;


// Interface: ConnectionLifecycleListener
mojo.internal.Struct(
    mojo.internal.bindings.nearby.connections.mojom.ConnectionLifecycleListener_OnConnectionInitiated_ParamsSpec, 'nearby.connections.mojom.ConnectionLifecycleListener_OnConnectionInitiated_Params', [
      mojo.internal.StructField('arg_endpoint_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_info', 8, 0, mojo.internal.bindings.nearby.connections.mojom.ConnectionInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.nearby.connections.mojom.ConnectionLifecycleListener_OnConnectionAccepted_ParamsSpec, 'nearby.connections.mojom.ConnectionLifecycleListener_OnConnectionAccepted_Params', [
      mojo.internal.StructField('arg_endpoint_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.nearby.connections.mojom.ConnectionLifecycleListener_OnConnectionRejected_ParamsSpec, 'nearby.connections.mojom.ConnectionLifecycleListener_OnConnectionRejected_Params', [
      mojo.internal.StructField('arg_endpoint_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_status', 8, 0, mojo.internal.bindings.nearby.connections.mojom.StatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.nearby.connections.mojom.ConnectionLifecycleListener_OnDisconnected_ParamsSpec, 'nearby.connections.mojom.ConnectionLifecycleListener_OnDisconnected_Params', [
      mojo.internal.StructField('arg_endpoint_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.nearby.connections.mojom.ConnectionLifecycleListener_OnBandwidthChanged_ParamsSpec, 'nearby.connections.mojom.ConnectionLifecycleListener_OnBandwidthChanged_Params', [
      mojo.internal.StructField('arg_endpoint_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_medium', 8, 0, mojo.internal.bindings.nearby.connections.mojom.MediumSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.bindings.nearby.connections.mojom.ConnectionLifecycleListenerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.nearby.connections.mojom.ConnectionLifecycleListenerRemote = class {
  static get $interfaceName() {
    return 'nearby.connections.mojom.ConnectionLifecycleListener';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.nearby.connections.mojom.ConnectionLifecycleListenerPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.nearby.connections.mojom.ConnectionLifecycleListenerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onConnectionInitiated(arg_endpoint_id, arg_info) {
    return this.$.onConnectionInitiated(arg_endpoint_id, arg_info);
  }
  onConnectionAccepted(arg_endpoint_id) {
    return this.$.onConnectionAccepted(arg_endpoint_id);
  }
  onConnectionRejected(arg_endpoint_id, arg_status) {
    return this.$.onConnectionRejected(arg_endpoint_id, arg_status);
  }
  onDisconnected(arg_endpoint_id) {
    return this.$.onDisconnected(arg_endpoint_id);
  }
  onBandwidthChanged(arg_endpoint_id, arg_medium) {
    return this.$.onBandwidthChanged(arg_endpoint_id, arg_medium);
  }
};

mojo.internal.bindings.nearby.connections.mojom.ConnectionLifecycleListenerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ConnectionLifecycleListener', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  onConnectionInitiated(arg_endpoint_id, arg_info) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.nearby.connections.mojom.ConnectionLifecycleListener_OnConnectionInitiated_ParamsSpec,
      null,
      [arg_endpoint_id, arg_info],
      false);
  }

  onConnectionAccepted(arg_endpoint_id) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.nearby.connections.mojom.ConnectionLifecycleListener_OnConnectionAccepted_ParamsSpec,
      null,
      [arg_endpoint_id],
      false);
  }

  onConnectionRejected(arg_endpoint_id, arg_status) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.nearby.connections.mojom.ConnectionLifecycleListener_OnConnectionRejected_ParamsSpec,
      null,
      [arg_endpoint_id, arg_status],
      false);
  }

  onDisconnected(arg_endpoint_id) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.nearby.connections.mojom.ConnectionLifecycleListener_OnDisconnected_ParamsSpec,
      null,
      [arg_endpoint_id],
      false);
  }

  onBandwidthChanged(arg_endpoint_id, arg_medium) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.nearby.connections.mojom.ConnectionLifecycleListener_OnBandwidthChanged_ParamsSpec,
      null,
      [arg_endpoint_id, arg_medium],
      false);
  }

};

mojo.internal.bindings.nearby.connections.mojom.ConnectionLifecycleListener.getRemote = function() {
  let remote = new mojo.internal.bindings.nearby.connections.mojom.ConnectionLifecycleListenerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'nearby.connections.mojom.ConnectionLifecycleListener',
    'context');
  return remote.$;
};

mojo.internal.bindings.nearby.connections.mojom.ConnectionLifecycleListenerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ConnectionLifecycleListener', [
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
        
        // Try Method 0: OnConnectionInitiated
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.nearby.connections.mojom.ConnectionLifecycleListener_OnConnectionInitiated_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnConnectionInitiated (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: OnConnectionAccepted
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.nearby.connections.mojom.ConnectionLifecycleListener_OnConnectionAccepted_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnConnectionAccepted (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: OnConnectionRejected
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.nearby.connections.mojom.ConnectionLifecycleListener_OnConnectionRejected_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnConnectionRejected (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: OnDisconnected
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.nearby.connections.mojom.ConnectionLifecycleListener_OnDisconnected_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnDisconnected (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: OnBandwidthChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.nearby.connections.mojom.ConnectionLifecycleListener_OnBandwidthChanged_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnBandwidthChanged (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.nearby.connections.mojom.ConnectionLifecycleListener_OnConnectionInitiated_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onConnectionInitiated');
          const result = this.impl.onConnectionInitiated(params.arg_endpoint_id, params.arg_info);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.nearby.connections.mojom.ConnectionLifecycleListener_OnConnectionAccepted_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onConnectionAccepted');
          const result = this.impl.onConnectionAccepted(params.arg_endpoint_id);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.nearby.connections.mojom.ConnectionLifecycleListener_OnConnectionRejected_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onConnectionRejected');
          const result = this.impl.onConnectionRejected(params.arg_endpoint_id, params.arg_status);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.nearby.connections.mojom.ConnectionLifecycleListener_OnDisconnected_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onDisconnected');
          const result = this.impl.onDisconnected(params.arg_endpoint_id);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.nearby.connections.mojom.ConnectionLifecycleListener_OnBandwidthChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onBandwidthChanged');
          const result = this.impl.onBandwidthChanged(params.arg_endpoint_id, params.arg_medium);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.nearby.connections.mojom.ConnectionLifecycleListenerReceiver = mojo.internal.bindings.nearby.connections.mojom.ConnectionLifecycleListenerReceiver;

mojo.internal.bindings.nearby.connections.mojom.ConnectionLifecycleListenerPtr = mojo.internal.bindings.nearby.connections.mojom.ConnectionLifecycleListenerRemote;
mojo.internal.bindings.nearby.connections.mojom.ConnectionLifecycleListenerRequest = mojo.internal.bindings.nearby.connections.mojom.ConnectionLifecycleListenerPendingReceiver;


// Interface: PayloadListener
mojo.internal.Struct(
    mojo.internal.bindings.nearby.connections.mojom.PayloadListener_OnPayloadReceived_ParamsSpec, 'nearby.connections.mojom.PayloadListener_OnPayloadReceived_Params', [
      mojo.internal.StructField('arg_endpoint_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_payload', 8, 0, mojo.internal.bindings.nearby.connections.mojom.PayloadSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.nearby.connections.mojom.PayloadListener_OnPayloadTransferUpdate_ParamsSpec, 'nearby.connections.mojom.PayloadListener_OnPayloadTransferUpdate_Params', [
      mojo.internal.StructField('arg_endpoint_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_update', 8, 0, mojo.internal.bindings.nearby.connections.mojom.PayloadTransferUpdateSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.bindings.nearby.connections.mojom.PayloadListenerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.nearby.connections.mojom.PayloadListenerRemote = class {
  static get $interfaceName() {
    return 'nearby.connections.mojom.PayloadListener';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.nearby.connections.mojom.PayloadListenerPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.nearby.connections.mojom.PayloadListenerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onPayloadReceived(arg_endpoint_id, arg_payload) {
    return this.$.onPayloadReceived(arg_endpoint_id, arg_payload);
  }
  onPayloadTransferUpdate(arg_endpoint_id, arg_update) {
    return this.$.onPayloadTransferUpdate(arg_endpoint_id, arg_update);
  }
};

mojo.internal.bindings.nearby.connections.mojom.PayloadListenerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('PayloadListener', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  onPayloadReceived(arg_endpoint_id, arg_payload) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.nearby.connections.mojom.PayloadListener_OnPayloadReceived_ParamsSpec,
      null,
      [arg_endpoint_id, arg_payload],
      false);
  }

  onPayloadTransferUpdate(arg_endpoint_id, arg_update) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.nearby.connections.mojom.PayloadListener_OnPayloadTransferUpdate_ParamsSpec,
      null,
      [arg_endpoint_id, arg_update],
      false);
  }

};

mojo.internal.bindings.nearby.connections.mojom.PayloadListener.getRemote = function() {
  let remote = new mojo.internal.bindings.nearby.connections.mojom.PayloadListenerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'nearby.connections.mojom.PayloadListener',
    'context');
  return remote.$;
};

mojo.internal.bindings.nearby.connections.mojom.PayloadListenerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('PayloadListener', [
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
        
        // Try Method 0: OnPayloadReceived
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.nearby.connections.mojom.PayloadListener_OnPayloadReceived_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnPayloadReceived (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: OnPayloadTransferUpdate
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.nearby.connections.mojom.PayloadListener_OnPayloadTransferUpdate_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnPayloadTransferUpdate (1)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.nearby.connections.mojom.PayloadListener_OnPayloadReceived_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onPayloadReceived');
          const result = this.impl.onPayloadReceived(params.arg_endpoint_id, params.arg_payload);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.nearby.connections.mojom.PayloadListener_OnPayloadTransferUpdate_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onPayloadTransferUpdate');
          const result = this.impl.onPayloadTransferUpdate(params.arg_endpoint_id, params.arg_update);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.nearby.connections.mojom.PayloadListenerReceiver = mojo.internal.bindings.nearby.connections.mojom.PayloadListenerReceiver;

mojo.internal.bindings.nearby.connections.mojom.PayloadListenerPtr = mojo.internal.bindings.nearby.connections.mojom.PayloadListenerRemote;
mojo.internal.bindings.nearby.connections.mojom.PayloadListenerRequest = mojo.internal.bindings.nearby.connections.mojom.PayloadListenerPendingReceiver;


// Interface: ConnectionListenerV3
mojo.internal.Struct(
    mojo.internal.bindings.nearby.connections.mojom.ConnectionListenerV3_OnConnectionInitiatedV3_ParamsSpec, 'nearby.connections.mojom.ConnectionListenerV3_OnConnectionInitiatedV3_Params', [
      mojo.internal.StructField('arg_endpoint_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_info', 8, 0, mojo.internal.bindings.nearby.connections.mojom.InitialConnectionInfoV3Spec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.nearby.connections.mojom.ConnectionListenerV3_OnConnectionResultV3_ParamsSpec, 'nearby.connections.mojom.ConnectionListenerV3_OnConnectionResultV3_Params', [
      mojo.internal.StructField('arg_endpoint_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_resolution', 8, 0, mojo.internal.bindings.nearby.connections.mojom.StatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.nearby.connections.mojom.ConnectionListenerV3_OnDisconnectedV3_ParamsSpec, 'nearby.connections.mojom.ConnectionListenerV3_OnDisconnectedV3_Params', [
      mojo.internal.StructField('arg_endpoint_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.nearby.connections.mojom.ConnectionListenerV3_OnBandwidthChangedV3_ParamsSpec, 'nearby.connections.mojom.ConnectionListenerV3_OnBandwidthChangedV3_Params', [
      mojo.internal.StructField('arg_endpoint_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_bandwidth_info', 8, 0, mojo.internal.bindings.nearby.connections.mojom.BandwidthInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.bindings.nearby.connections.mojom.ConnectionListenerV3PendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.nearby.connections.mojom.ConnectionListenerV3Remote = class {
  static get $interfaceName() {
    return 'nearby.connections.mojom.ConnectionListenerV3';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.nearby.connections.mojom.ConnectionListenerV3PendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.nearby.connections.mojom.ConnectionListenerV3RemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onConnectionInitiatedV3(arg_endpoint_id, arg_info) {
    return this.$.onConnectionInitiatedV3(arg_endpoint_id, arg_info);
  }
  onConnectionResultV3(arg_endpoint_id, arg_resolution) {
    return this.$.onConnectionResultV3(arg_endpoint_id, arg_resolution);
  }
  onDisconnectedV3(arg_endpoint_id) {
    return this.$.onDisconnectedV3(arg_endpoint_id);
  }
  onBandwidthChangedV3(arg_endpoint_id, arg_bandwidth_info) {
    return this.$.onBandwidthChangedV3(arg_endpoint_id, arg_bandwidth_info);
  }
};

mojo.internal.bindings.nearby.connections.mojom.ConnectionListenerV3RemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ConnectionListenerV3', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  onConnectionInitiatedV3(arg_endpoint_id, arg_info) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.nearby.connections.mojom.ConnectionListenerV3_OnConnectionInitiatedV3_ParamsSpec,
      null,
      [arg_endpoint_id, arg_info],
      false);
  }

  onConnectionResultV3(arg_endpoint_id, arg_resolution) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.nearby.connections.mojom.ConnectionListenerV3_OnConnectionResultV3_ParamsSpec,
      null,
      [arg_endpoint_id, arg_resolution],
      false);
  }

  onDisconnectedV3(arg_endpoint_id) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.nearby.connections.mojom.ConnectionListenerV3_OnDisconnectedV3_ParamsSpec,
      null,
      [arg_endpoint_id],
      false);
  }

  onBandwidthChangedV3(arg_endpoint_id, arg_bandwidth_info) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.nearby.connections.mojom.ConnectionListenerV3_OnBandwidthChangedV3_ParamsSpec,
      null,
      [arg_endpoint_id, arg_bandwidth_info],
      false);
  }

};

mojo.internal.bindings.nearby.connections.mojom.ConnectionListenerV3.getRemote = function() {
  let remote = new mojo.internal.bindings.nearby.connections.mojom.ConnectionListenerV3Remote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'nearby.connections.mojom.ConnectionListenerV3',
    'context');
  return remote.$;
};

mojo.internal.bindings.nearby.connections.mojom.ConnectionListenerV3Receiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ConnectionListenerV3', [
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
        
        // Try Method 0: OnConnectionInitiatedV3
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.nearby.connections.mojom.ConnectionListenerV3_OnConnectionInitiatedV3_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnConnectionInitiatedV3 (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: OnConnectionResultV3
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.nearby.connections.mojom.ConnectionListenerV3_OnConnectionResultV3_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnConnectionResultV3 (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: OnDisconnectedV3
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.nearby.connections.mojom.ConnectionListenerV3_OnDisconnectedV3_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnDisconnectedV3 (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: OnBandwidthChangedV3
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.nearby.connections.mojom.ConnectionListenerV3_OnBandwidthChangedV3_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnBandwidthChangedV3 (3)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.nearby.connections.mojom.ConnectionListenerV3_OnConnectionInitiatedV3_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onConnectionInitiatedV3');
          const result = this.impl.onConnectionInitiatedV3(params.arg_endpoint_id, params.arg_info);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.nearby.connections.mojom.ConnectionListenerV3_OnConnectionResultV3_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onConnectionResultV3');
          const result = this.impl.onConnectionResultV3(params.arg_endpoint_id, params.arg_resolution);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.nearby.connections.mojom.ConnectionListenerV3_OnDisconnectedV3_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onDisconnectedV3');
          const result = this.impl.onDisconnectedV3(params.arg_endpoint_id);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.nearby.connections.mojom.ConnectionListenerV3_OnBandwidthChangedV3_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onBandwidthChangedV3');
          const result = this.impl.onBandwidthChangedV3(params.arg_endpoint_id, params.arg_bandwidth_info);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.nearby.connections.mojom.ConnectionListenerV3Receiver = mojo.internal.bindings.nearby.connections.mojom.ConnectionListenerV3Receiver;

mojo.internal.bindings.nearby.connections.mojom.ConnectionListenerV3Ptr = mojo.internal.bindings.nearby.connections.mojom.ConnectionListenerV3Remote;
mojo.internal.bindings.nearby.connections.mojom.ConnectionListenerV3Request = mojo.internal.bindings.nearby.connections.mojom.ConnectionListenerV3PendingReceiver;


// Interface: PayloadListenerV3
mojo.internal.Struct(
    mojo.internal.bindings.nearby.connections.mojom.PayloadListenerV3_OnPayloadReceivedV3_ParamsSpec, 'nearby.connections.mojom.PayloadListenerV3_OnPayloadReceivedV3_Params', [
      mojo.internal.StructField('arg_endpoint_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_payload', 8, 0, mojo.internal.bindings.nearby.connections.mojom.PayloadSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.nearby.connections.mojom.PayloadListenerV3_OnPayloadTransferUpdateV3_ParamsSpec, 'nearby.connections.mojom.PayloadListenerV3_OnPayloadTransferUpdateV3_Params', [
      mojo.internal.StructField('arg_endpoint_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_update', 8, 0, mojo.internal.bindings.nearby.connections.mojom.PayloadTransferUpdateSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.bindings.nearby.connections.mojom.PayloadListenerV3PendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.nearby.connections.mojom.PayloadListenerV3Remote = class {
  static get $interfaceName() {
    return 'nearby.connections.mojom.PayloadListenerV3';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.nearby.connections.mojom.PayloadListenerV3PendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.nearby.connections.mojom.PayloadListenerV3RemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onPayloadReceivedV3(arg_endpoint_id, arg_payload) {
    return this.$.onPayloadReceivedV3(arg_endpoint_id, arg_payload);
  }
  onPayloadTransferUpdateV3(arg_endpoint_id, arg_update) {
    return this.$.onPayloadTransferUpdateV3(arg_endpoint_id, arg_update);
  }
};

mojo.internal.bindings.nearby.connections.mojom.PayloadListenerV3RemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('PayloadListenerV3', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  onPayloadReceivedV3(arg_endpoint_id, arg_payload) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.nearby.connections.mojom.PayloadListenerV3_OnPayloadReceivedV3_ParamsSpec,
      null,
      [arg_endpoint_id, arg_payload],
      false);
  }

  onPayloadTransferUpdateV3(arg_endpoint_id, arg_update) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.nearby.connections.mojom.PayloadListenerV3_OnPayloadTransferUpdateV3_ParamsSpec,
      null,
      [arg_endpoint_id, arg_update],
      false);
  }

};

mojo.internal.bindings.nearby.connections.mojom.PayloadListenerV3.getRemote = function() {
  let remote = new mojo.internal.bindings.nearby.connections.mojom.PayloadListenerV3Remote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'nearby.connections.mojom.PayloadListenerV3',
    'context');
  return remote.$;
};

mojo.internal.bindings.nearby.connections.mojom.PayloadListenerV3Receiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('PayloadListenerV3', [
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
        
        // Try Method 0: OnPayloadReceivedV3
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.nearby.connections.mojom.PayloadListenerV3_OnPayloadReceivedV3_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnPayloadReceivedV3 (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: OnPayloadTransferUpdateV3
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.nearby.connections.mojom.PayloadListenerV3_OnPayloadTransferUpdateV3_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnPayloadTransferUpdateV3 (1)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.nearby.connections.mojom.PayloadListenerV3_OnPayloadReceivedV3_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onPayloadReceivedV3');
          const result = this.impl.onPayloadReceivedV3(params.arg_endpoint_id, params.arg_payload);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.nearby.connections.mojom.PayloadListenerV3_OnPayloadTransferUpdateV3_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onPayloadTransferUpdateV3');
          const result = this.impl.onPayloadTransferUpdateV3(params.arg_endpoint_id, params.arg_update);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.nearby.connections.mojom.PayloadListenerV3Receiver = mojo.internal.bindings.nearby.connections.mojom.PayloadListenerV3Receiver;

mojo.internal.bindings.nearby.connections.mojom.PayloadListenerV3Ptr = mojo.internal.bindings.nearby.connections.mojom.PayloadListenerV3Remote;
mojo.internal.bindings.nearby.connections.mojom.PayloadListenerV3Request = mojo.internal.bindings.nearby.connections.mojom.PayloadListenerV3PendingReceiver;


// Interface: NearbyConnections
mojo.internal.Struct(
    mojo.internal.bindings.nearby.connections.mojom.NearbyConnections_StartAdvertising_ParamsSpec, 'nearby.connections.mojom.NearbyConnections_StartAdvertising_Params', [
      mojo.internal.StructField('arg_service_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_endpoint_info', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_options', 16, 0, mojo.internal.bindings.nearby.connections.mojom.AdvertisingOptionsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_listener', 24, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.nearby.connections.mojom.ConnectionLifecycleListenerSpec), null, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    mojo.internal.bindings.nearby.connections.mojom.NearbyConnections_StartAdvertising_ResponseParamsSpec, 'nearby.connections.mojom.NearbyConnections_StartAdvertising_ResponseParams', [
      mojo.internal.StructField('arg_status', 0, 0, mojo.internal.bindings.nearby.connections.mojom.StatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.nearby.connections.mojom.NearbyConnections_StopAdvertising_ParamsSpec, 'nearby.connections.mojom.NearbyConnections_StopAdvertising_Params', [
      mojo.internal.StructField('arg_service_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.nearby.connections.mojom.NearbyConnections_StopAdvertising_ResponseParamsSpec, 'nearby.connections.mojom.NearbyConnections_StopAdvertising_ResponseParams', [
      mojo.internal.StructField('arg_status', 0, 0, mojo.internal.bindings.nearby.connections.mojom.StatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.nearby.connections.mojom.NearbyConnections_StartDiscovery_ParamsSpec, 'nearby.connections.mojom.NearbyConnections_StartDiscovery_Params', [
      mojo.internal.StructField('arg_service_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_options', 8, 0, mojo.internal.bindings.nearby.connections.mojom.DiscoveryOptionsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_listener', 16, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.nearby.connections.mojom.EndpointDiscoveryListenerSpec), null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.nearby.connections.mojom.NearbyConnections_StartDiscovery_ResponseParamsSpec, 'nearby.connections.mojom.NearbyConnections_StartDiscovery_ResponseParams', [
      mojo.internal.StructField('arg_status', 0, 0, mojo.internal.bindings.nearby.connections.mojom.StatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.nearby.connections.mojom.NearbyConnections_StopDiscovery_ParamsSpec, 'nearby.connections.mojom.NearbyConnections_StopDiscovery_Params', [
      mojo.internal.StructField('arg_service_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.nearby.connections.mojom.NearbyConnections_StopDiscovery_ResponseParamsSpec, 'nearby.connections.mojom.NearbyConnections_StopDiscovery_ResponseParams', [
      mojo.internal.StructField('arg_status', 0, 0, mojo.internal.bindings.nearby.connections.mojom.StatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.nearby.connections.mojom.NearbyConnections_InjectBluetoothEndpoint_ParamsSpec, 'nearby.connections.mojom.NearbyConnections_InjectBluetoothEndpoint_Params', [
      mojo.internal.StructField('arg_service_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_endpoint_id', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_endpoint_info', 16, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_remote_bluetooth_mac_address', 24, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    mojo.internal.bindings.nearby.connections.mojom.NearbyConnections_InjectBluetoothEndpoint_ResponseParamsSpec, 'nearby.connections.mojom.NearbyConnections_InjectBluetoothEndpoint_ResponseParams', [
      mojo.internal.StructField('arg_status', 0, 0, mojo.internal.bindings.nearby.connections.mojom.StatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.nearby.connections.mojom.NearbyConnections_RequestConnection_ParamsSpec, 'nearby.connections.mojom.NearbyConnections_RequestConnection_Params', [
      mojo.internal.StructField('arg_service_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_endpoint_info', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_endpoint_id', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_options', 24, 0, mojo.internal.bindings.nearby.connections.mojom.ConnectionOptionsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_listener', 32, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.nearby.connections.mojom.ConnectionLifecycleListenerSpec), null, false, 0, undefined),
    ],
    [[0, 48]]);

mojo.internal.Struct(
    mojo.internal.bindings.nearby.connections.mojom.NearbyConnections_RequestConnection_ResponseParamsSpec, 'nearby.connections.mojom.NearbyConnections_RequestConnection_ResponseParams', [
      mojo.internal.StructField('arg_status', 0, 0, mojo.internal.bindings.nearby.connections.mojom.StatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.nearby.connections.mojom.NearbyConnections_AcceptConnection_ParamsSpec, 'nearby.connections.mojom.NearbyConnections_AcceptConnection_Params', [
      mojo.internal.StructField('arg_service_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_endpoint_id', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_listener', 16, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.nearby.connections.mojom.PayloadListenerSpec), null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.nearby.connections.mojom.NearbyConnections_AcceptConnection_ResponseParamsSpec, 'nearby.connections.mojom.NearbyConnections_AcceptConnection_ResponseParams', [
      mojo.internal.StructField('arg_status', 0, 0, mojo.internal.bindings.nearby.connections.mojom.StatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.nearby.connections.mojom.NearbyConnections_RejectConnection_ParamsSpec, 'nearby.connections.mojom.NearbyConnections_RejectConnection_Params', [
      mojo.internal.StructField('arg_service_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_endpoint_id', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.nearby.connections.mojom.NearbyConnections_RejectConnection_ResponseParamsSpec, 'nearby.connections.mojom.NearbyConnections_RejectConnection_ResponseParams', [
      mojo.internal.StructField('arg_status', 0, 0, mojo.internal.bindings.nearby.connections.mojom.StatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.nearby.connections.mojom.NearbyConnections_DisconnectFromEndpoint_ParamsSpec, 'nearby.connections.mojom.NearbyConnections_DisconnectFromEndpoint_Params', [
      mojo.internal.StructField('arg_service_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_endpoint_id', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.nearby.connections.mojom.NearbyConnections_DisconnectFromEndpoint_ResponseParamsSpec, 'nearby.connections.mojom.NearbyConnections_DisconnectFromEndpoint_ResponseParams', [
      mojo.internal.StructField('arg_status', 0, 0, mojo.internal.bindings.nearby.connections.mojom.StatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.nearby.connections.mojom.NearbyConnections_SendPayload_ParamsSpec, 'nearby.connections.mojom.NearbyConnections_SendPayload_Params', [
      mojo.internal.StructField('arg_service_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_endpoint_ids', 8, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_payload', 16, 0, mojo.internal.bindings.nearby.connections.mojom.PayloadSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.nearby.connections.mojom.NearbyConnections_SendPayload_ResponseParamsSpec, 'nearby.connections.mojom.NearbyConnections_SendPayload_ResponseParams', [
      mojo.internal.StructField('arg_status', 0, 0, mojo.internal.bindings.nearby.connections.mojom.StatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.nearby.connections.mojom.NearbyConnections_CancelPayload_ParamsSpec, 'nearby.connections.mojom.NearbyConnections_CancelPayload_Params', [
      mojo.internal.StructField('arg_service_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_payload_id', 8, 0, mojo.internal.Int64, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.nearby.connections.mojom.NearbyConnections_CancelPayload_ResponseParamsSpec, 'nearby.connections.mojom.NearbyConnections_CancelPayload_ResponseParams', [
      mojo.internal.StructField('arg_status', 0, 0, mojo.internal.bindings.nearby.connections.mojom.StatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.nearby.connections.mojom.NearbyConnections_StopAllEndpoints_ParamsSpec, 'nearby.connections.mojom.NearbyConnections_StopAllEndpoints_Params', [
      mojo.internal.StructField('arg_service_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.nearby.connections.mojom.NearbyConnections_StopAllEndpoints_ResponseParamsSpec, 'nearby.connections.mojom.NearbyConnections_StopAllEndpoints_ResponseParams', [
      mojo.internal.StructField('arg_status', 0, 0, mojo.internal.bindings.nearby.connections.mojom.StatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.nearby.connections.mojom.NearbyConnections_InitiateBandwidthUpgrade_ParamsSpec, 'nearby.connections.mojom.NearbyConnections_InitiateBandwidthUpgrade_Params', [
      mojo.internal.StructField('arg_service_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_endpoint_id', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.nearby.connections.mojom.NearbyConnections_InitiateBandwidthUpgrade_ResponseParamsSpec, 'nearby.connections.mojom.NearbyConnections_InitiateBandwidthUpgrade_ResponseParams', [
      mojo.internal.StructField('arg_status', 0, 0, mojo.internal.bindings.nearby.connections.mojom.StatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.nearby.connections.mojom.NearbyConnections_RegisterPayloadFile_ParamsSpec, 'nearby.connections.mojom.NearbyConnections_RegisterPayloadFile_Params', [
      mojo.internal.StructField('arg_service_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_payload_id', 8, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_input_file', 16, 0, mojo.internal.bindings.mojo_base.mojom.ReadOnlyFileSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_output_file', 24, 0, mojo.internal.bindings.mojo_base.mojom.FileSpec.$, null, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    mojo.internal.bindings.nearby.connections.mojom.NearbyConnections_RegisterPayloadFile_ResponseParamsSpec, 'nearby.connections.mojom.NearbyConnections_RegisterPayloadFile_ResponseParams', [
      mojo.internal.StructField('arg_status', 0, 0, mojo.internal.bindings.nearby.connections.mojom.StatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.nearby.connections.mojom.NearbyConnections_RequestConnectionV3_ParamsSpec, 'nearby.connections.mojom.NearbyConnections_RequestConnectionV3_Params', [
      mojo.internal.StructField('arg_service_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_remote_device', 8, 0, mojo.internal.bindings.ash.nearby.presence.mojom.PresenceDeviceSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_connection_options', 16, 0, mojo.internal.bindings.nearby.connections.mojom.ConnectionOptionsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_listener', 24, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.nearby.connections.mojom.ConnectionListenerV3Spec), null, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    mojo.internal.bindings.nearby.connections.mojom.NearbyConnections_RequestConnectionV3_ResponseParamsSpec, 'nearby.connections.mojom.NearbyConnections_RequestConnectionV3_ResponseParams', [
      mojo.internal.StructField('arg_status', 0, 0, mojo.internal.bindings.nearby.connections.mojom.StatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.nearby.connections.mojom.NearbyConnections_AcceptConnectionV3_ParamsSpec, 'nearby.connections.mojom.NearbyConnections_AcceptConnectionV3_Params', [
      mojo.internal.StructField('arg_service_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_remote_device', 8, 0, mojo.internal.bindings.ash.nearby.presence.mojom.PresenceDeviceSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_listener', 16, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.nearby.connections.mojom.PayloadListenerV3Spec), null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.nearby.connections.mojom.NearbyConnections_AcceptConnectionV3_ResponseParamsSpec, 'nearby.connections.mojom.NearbyConnections_AcceptConnectionV3_ResponseParams', [
      mojo.internal.StructField('arg_status', 0, 0, mojo.internal.bindings.nearby.connections.mojom.StatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.nearby.connections.mojom.NearbyConnections_RejectConnectionV3_ParamsSpec, 'nearby.connections.mojom.NearbyConnections_RejectConnectionV3_Params', [
      mojo.internal.StructField('arg_service_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_remote_device', 8, 0, mojo.internal.bindings.ash.nearby.presence.mojom.PresenceDeviceSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.nearby.connections.mojom.NearbyConnections_RejectConnectionV3_ResponseParamsSpec, 'nearby.connections.mojom.NearbyConnections_RejectConnectionV3_ResponseParams', [
      mojo.internal.StructField('arg_status', 0, 0, mojo.internal.bindings.nearby.connections.mojom.StatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.nearby.connections.mojom.NearbyConnections_DisconnectFromDeviceV3_ParamsSpec, 'nearby.connections.mojom.NearbyConnections_DisconnectFromDeviceV3_Params', [
      mojo.internal.StructField('arg_service_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_remote_device', 8, 0, mojo.internal.bindings.ash.nearby.presence.mojom.PresenceDeviceSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.nearby.connections.mojom.NearbyConnections_DisconnectFromDeviceV3_ResponseParamsSpec, 'nearby.connections.mojom.NearbyConnections_DisconnectFromDeviceV3_ResponseParams', [
      mojo.internal.StructField('arg_status', 0, 0, mojo.internal.bindings.nearby.connections.mojom.StatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.nearby.connections.mojom.NearbyConnections_RegisterServiceWithPresenceDeviceProvider_ParamsSpec, 'nearby.connections.mojom.NearbyConnections_RegisterServiceWithPresenceDeviceProvider_Params', [
      mojo.internal.StructField('arg_service_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.nearby.connections.mojom.NearbyConnectionsPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.nearby.connections.mojom.NearbyConnectionsRemote = class {
  static get $interfaceName() {
    return 'nearby.connections.mojom.NearbyConnections';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.nearby.connections.mojom.NearbyConnectionsPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.nearby.connections.mojom.NearbyConnectionsRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  startAdvertising(arg_service_id, arg_endpoint_info, arg_options, arg_listener) {
    return this.$.startAdvertising(arg_service_id, arg_endpoint_info, arg_options, arg_listener);
  }
  stopAdvertising(arg_service_id) {
    return this.$.stopAdvertising(arg_service_id);
  }
  startDiscovery(arg_service_id, arg_options, arg_listener) {
    return this.$.startDiscovery(arg_service_id, arg_options, arg_listener);
  }
  stopDiscovery(arg_service_id) {
    return this.$.stopDiscovery(arg_service_id);
  }
  injectBluetoothEndpoint(arg_service_id, arg_endpoint_id, arg_endpoint_info, arg_remote_bluetooth_mac_address) {
    return this.$.injectBluetoothEndpoint(arg_service_id, arg_endpoint_id, arg_endpoint_info, arg_remote_bluetooth_mac_address);
  }
  requestConnection(arg_service_id, arg_endpoint_info, arg_endpoint_id, arg_options, arg_listener) {
    return this.$.requestConnection(arg_service_id, arg_endpoint_info, arg_endpoint_id, arg_options, arg_listener);
  }
  acceptConnection(arg_service_id, arg_endpoint_id, arg_listener) {
    return this.$.acceptConnection(arg_service_id, arg_endpoint_id, arg_listener);
  }
  rejectConnection(arg_service_id, arg_endpoint_id) {
    return this.$.rejectConnection(arg_service_id, arg_endpoint_id);
  }
  disconnectFromEndpoint(arg_service_id, arg_endpoint_id) {
    return this.$.disconnectFromEndpoint(arg_service_id, arg_endpoint_id);
  }
  sendPayload(arg_service_id, arg_endpoint_ids, arg_payload) {
    return this.$.sendPayload(arg_service_id, arg_endpoint_ids, arg_payload);
  }
  cancelPayload(arg_service_id, arg_payload_id) {
    return this.$.cancelPayload(arg_service_id, arg_payload_id);
  }
  stopAllEndpoints(arg_service_id) {
    return this.$.stopAllEndpoints(arg_service_id);
  }
  initiateBandwidthUpgrade(arg_service_id, arg_endpoint_id) {
    return this.$.initiateBandwidthUpgrade(arg_service_id, arg_endpoint_id);
  }
  registerPayloadFile(arg_service_id, arg_payload_id, arg_input_file, arg_output_file) {
    return this.$.registerPayloadFile(arg_service_id, arg_payload_id, arg_input_file, arg_output_file);
  }
  requestConnectionV3(arg_service_id, arg_remote_device, arg_connection_options, arg_listener) {
    return this.$.requestConnectionV3(arg_service_id, arg_remote_device, arg_connection_options, arg_listener);
  }
  acceptConnectionV3(arg_service_id, arg_remote_device, arg_listener) {
    return this.$.acceptConnectionV3(arg_service_id, arg_remote_device, arg_listener);
  }
  rejectConnectionV3(arg_service_id, arg_remote_device) {
    return this.$.rejectConnectionV3(arg_service_id, arg_remote_device);
  }
  disconnectFromDeviceV3(arg_service_id, arg_remote_device) {
    return this.$.disconnectFromDeviceV3(arg_service_id, arg_remote_device);
  }
  registerServiceWithPresenceDeviceProvider(arg_service_id) {
    return this.$.registerServiceWithPresenceDeviceProvider(arg_service_id);
  }
};

mojo.internal.bindings.nearby.connections.mojom.NearbyConnectionsRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('NearbyConnections', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
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

  startAdvertising(arg_service_id, arg_endpoint_info, arg_options, arg_listener) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.nearby.connections.mojom.NearbyConnections_StartAdvertising_ParamsSpec,
      mojo.internal.bindings.nearby.connections.mojom.NearbyConnections_StartAdvertising_ResponseParamsSpec,
      [arg_service_id, arg_endpoint_info, arg_options, arg_listener],
      false);
  }

  stopAdvertising(arg_service_id) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.nearby.connections.mojom.NearbyConnections_StopAdvertising_ParamsSpec,
      mojo.internal.bindings.nearby.connections.mojom.NearbyConnections_StopAdvertising_ResponseParamsSpec,
      [arg_service_id],
      false);
  }

  startDiscovery(arg_service_id, arg_options, arg_listener) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.nearby.connections.mojom.NearbyConnections_StartDiscovery_ParamsSpec,
      mojo.internal.bindings.nearby.connections.mojom.NearbyConnections_StartDiscovery_ResponseParamsSpec,
      [arg_service_id, arg_options, arg_listener],
      false);
  }

  stopDiscovery(arg_service_id) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.nearby.connections.mojom.NearbyConnections_StopDiscovery_ParamsSpec,
      mojo.internal.bindings.nearby.connections.mojom.NearbyConnections_StopDiscovery_ResponseParamsSpec,
      [arg_service_id],
      false);
  }

  injectBluetoothEndpoint(arg_service_id, arg_endpoint_id, arg_endpoint_info, arg_remote_bluetooth_mac_address) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.nearby.connections.mojom.NearbyConnections_InjectBluetoothEndpoint_ParamsSpec,
      mojo.internal.bindings.nearby.connections.mojom.NearbyConnections_InjectBluetoothEndpoint_ResponseParamsSpec,
      [arg_service_id, arg_endpoint_id, arg_endpoint_info, arg_remote_bluetooth_mac_address],
      false);
  }

  requestConnection(arg_service_id, arg_endpoint_info, arg_endpoint_id, arg_options, arg_listener) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojo.internal.bindings.nearby.connections.mojom.NearbyConnections_RequestConnection_ParamsSpec,
      mojo.internal.bindings.nearby.connections.mojom.NearbyConnections_RequestConnection_ResponseParamsSpec,
      [arg_service_id, arg_endpoint_info, arg_endpoint_id, arg_options, arg_listener],
      false);
  }

  acceptConnection(arg_service_id, arg_endpoint_id, arg_listener) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      mojo.internal.bindings.nearby.connections.mojom.NearbyConnections_AcceptConnection_ParamsSpec,
      mojo.internal.bindings.nearby.connections.mojom.NearbyConnections_AcceptConnection_ResponseParamsSpec,
      [arg_service_id, arg_endpoint_id, arg_listener],
      false);
  }

  rejectConnection(arg_service_id, arg_endpoint_id) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      mojo.internal.bindings.nearby.connections.mojom.NearbyConnections_RejectConnection_ParamsSpec,
      mojo.internal.bindings.nearby.connections.mojom.NearbyConnections_RejectConnection_ResponseParamsSpec,
      [arg_service_id, arg_endpoint_id],
      false);
  }

  disconnectFromEndpoint(arg_service_id, arg_endpoint_id) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      mojo.internal.bindings.nearby.connections.mojom.NearbyConnections_DisconnectFromEndpoint_ParamsSpec,
      mojo.internal.bindings.nearby.connections.mojom.NearbyConnections_DisconnectFromEndpoint_ResponseParamsSpec,
      [arg_service_id, arg_endpoint_id],
      false);
  }

  sendPayload(arg_service_id, arg_endpoint_ids, arg_payload) {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      mojo.internal.bindings.nearby.connections.mojom.NearbyConnections_SendPayload_ParamsSpec,
      mojo.internal.bindings.nearby.connections.mojom.NearbyConnections_SendPayload_ResponseParamsSpec,
      [arg_service_id, arg_endpoint_ids, arg_payload],
      false);
  }

  cancelPayload(arg_service_id, arg_payload_id) {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      mojo.internal.bindings.nearby.connections.mojom.NearbyConnections_CancelPayload_ParamsSpec,
      mojo.internal.bindings.nearby.connections.mojom.NearbyConnections_CancelPayload_ResponseParamsSpec,
      [arg_service_id, arg_payload_id],
      false);
  }

  stopAllEndpoints(arg_service_id) {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      mojo.internal.bindings.nearby.connections.mojom.NearbyConnections_StopAllEndpoints_ParamsSpec,
      mojo.internal.bindings.nearby.connections.mojom.NearbyConnections_StopAllEndpoints_ResponseParamsSpec,
      [arg_service_id],
      false);
  }

  initiateBandwidthUpgrade(arg_service_id, arg_endpoint_id) {
    return this.proxy.sendMessage(
      this.ordinals[12],  // ordinal
      mojo.internal.bindings.nearby.connections.mojom.NearbyConnections_InitiateBandwidthUpgrade_ParamsSpec,
      mojo.internal.bindings.nearby.connections.mojom.NearbyConnections_InitiateBandwidthUpgrade_ResponseParamsSpec,
      [arg_service_id, arg_endpoint_id],
      false);
  }

  registerPayloadFile(arg_service_id, arg_payload_id, arg_input_file, arg_output_file) {
    return this.proxy.sendMessage(
      this.ordinals[13],  // ordinal
      mojo.internal.bindings.nearby.connections.mojom.NearbyConnections_RegisterPayloadFile_ParamsSpec,
      mojo.internal.bindings.nearby.connections.mojom.NearbyConnections_RegisterPayloadFile_ResponseParamsSpec,
      [arg_service_id, arg_payload_id, arg_input_file, arg_output_file],
      false);
  }

  requestConnectionV3(arg_service_id, arg_remote_device, arg_connection_options, arg_listener) {
    return this.proxy.sendMessage(
      this.ordinals[14],  // ordinal
      mojo.internal.bindings.nearby.connections.mojom.NearbyConnections_RequestConnectionV3_ParamsSpec,
      mojo.internal.bindings.nearby.connections.mojom.NearbyConnections_RequestConnectionV3_ResponseParamsSpec,
      [arg_service_id, arg_remote_device, arg_connection_options, arg_listener],
      false);
  }

  acceptConnectionV3(arg_service_id, arg_remote_device, arg_listener) {
    return this.proxy.sendMessage(
      this.ordinals[15],  // ordinal
      mojo.internal.bindings.nearby.connections.mojom.NearbyConnections_AcceptConnectionV3_ParamsSpec,
      mojo.internal.bindings.nearby.connections.mojom.NearbyConnections_AcceptConnectionV3_ResponseParamsSpec,
      [arg_service_id, arg_remote_device, arg_listener],
      false);
  }

  rejectConnectionV3(arg_service_id, arg_remote_device) {
    return this.proxy.sendMessage(
      this.ordinals[16],  // ordinal
      mojo.internal.bindings.nearby.connections.mojom.NearbyConnections_RejectConnectionV3_ParamsSpec,
      mojo.internal.bindings.nearby.connections.mojom.NearbyConnections_RejectConnectionV3_ResponseParamsSpec,
      [arg_service_id, arg_remote_device],
      false);
  }

  disconnectFromDeviceV3(arg_service_id, arg_remote_device) {
    return this.proxy.sendMessage(
      this.ordinals[17],  // ordinal
      mojo.internal.bindings.nearby.connections.mojom.NearbyConnections_DisconnectFromDeviceV3_ParamsSpec,
      mojo.internal.bindings.nearby.connections.mojom.NearbyConnections_DisconnectFromDeviceV3_ResponseParamsSpec,
      [arg_service_id, arg_remote_device],
      false);
  }

  registerServiceWithPresenceDeviceProvider(arg_service_id) {
    return this.proxy.sendMessage(
      this.ordinals[18],  // ordinal
      mojo.internal.bindings.nearby.connections.mojom.NearbyConnections_RegisterServiceWithPresenceDeviceProvider_ParamsSpec,
      null,
      [arg_service_id],
      false);
  }

};

mojo.internal.bindings.nearby.connections.mojom.NearbyConnections.getRemote = function() {
  let remote = new mojo.internal.bindings.nearby.connections.mojom.NearbyConnectionsRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'nearby.connections.mojom.NearbyConnections',
    'context');
  return remote.$;
};

mojo.internal.bindings.nearby.connections.mojom.NearbyConnectionsReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('NearbyConnections', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
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
        
        // Try Method 0: StartAdvertising
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.nearby.connections.mojom.NearbyConnections_StartAdvertising_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> StartAdvertising (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: StopAdvertising
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.nearby.connections.mojom.NearbyConnections_StopAdvertising_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> StopAdvertising (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: StartDiscovery
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.nearby.connections.mojom.NearbyConnections_StartDiscovery_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> StartDiscovery (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: StopDiscovery
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.nearby.connections.mojom.NearbyConnections_StopDiscovery_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> StopDiscovery (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: InjectBluetoothEndpoint
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.nearby.connections.mojom.NearbyConnections_InjectBluetoothEndpoint_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> InjectBluetoothEndpoint (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: RequestConnection
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.nearby.connections.mojom.NearbyConnections_RequestConnection_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RequestConnection (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: AcceptConnection
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.nearby.connections.mojom.NearbyConnections_AcceptConnection_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AcceptConnection (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: RejectConnection
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.nearby.connections.mojom.NearbyConnections_RejectConnection_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RejectConnection (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: DisconnectFromEndpoint
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.nearby.connections.mojom.NearbyConnections_DisconnectFromEndpoint_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DisconnectFromEndpoint (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
           }
        }
        // Try Method 9: SendPayload
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.nearby.connections.mojom.NearbyConnections_SendPayload_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SendPayload (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 9 failed:', e);
           }
        }
        // Try Method 10: CancelPayload
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.nearby.connections.mojom.NearbyConnections_CancelPayload_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CancelPayload (10)');
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 10 failed:', e);
           }
        }
        // Try Method 11: StopAllEndpoints
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.nearby.connections.mojom.NearbyConnections_StopAllEndpoints_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> StopAllEndpoints (11)');
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 11 failed:', e);
           }
        }
        // Try Method 12: InitiateBandwidthUpgrade
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.nearby.connections.mojom.NearbyConnections_InitiateBandwidthUpgrade_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> InitiateBandwidthUpgrade (12)');
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 12 failed:', e);
           }
        }
        // Try Method 13: RegisterPayloadFile
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.nearby.connections.mojom.NearbyConnections_RegisterPayloadFile_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RegisterPayloadFile (13)');
             this.mapOrdinal(header.ordinal, 13);
             dispatchId = 13;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 13 failed:', e);
           }
        }
        // Try Method 14: RequestConnectionV3
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.nearby.connections.mojom.NearbyConnections_RequestConnectionV3_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RequestConnectionV3 (14)');
             this.mapOrdinal(header.ordinal, 14);
             dispatchId = 14;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 14 failed:', e);
           }
        }
        // Try Method 15: AcceptConnectionV3
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.nearby.connections.mojom.NearbyConnections_AcceptConnectionV3_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AcceptConnectionV3 (15)');
             this.mapOrdinal(header.ordinal, 15);
             dispatchId = 15;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 15 failed:', e);
           }
        }
        // Try Method 16: RejectConnectionV3
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.nearby.connections.mojom.NearbyConnections_RejectConnectionV3_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RejectConnectionV3 (16)');
             this.mapOrdinal(header.ordinal, 16);
             dispatchId = 16;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 16 failed:', e);
           }
        }
        // Try Method 17: DisconnectFromDeviceV3
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.nearby.connections.mojom.NearbyConnections_DisconnectFromDeviceV3_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DisconnectFromDeviceV3 (17)');
             this.mapOrdinal(header.ordinal, 17);
             dispatchId = 17;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 17 failed:', e);
           }
        }
        // Try Method 18: RegisterServiceWithPresenceDeviceProvider
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.nearby.connections.mojom.NearbyConnections_RegisterServiceWithPresenceDeviceProvider_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RegisterServiceWithPresenceDeviceProvider (18)');
             this.mapOrdinal(header.ordinal, 18);
             dispatchId = 18;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 18 failed:', e);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.nearby.connections.mojom.NearbyConnections_StartAdvertising_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.startAdvertising');
          const result = this.impl.startAdvertising(params.arg_service_id, params.arg_endpoint_info, params.arg_options, params.arg_listener);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.nearby.connections.mojom.NearbyConnections_StartAdvertising_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] StartAdvertising FAILED:', e));
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.nearby.connections.mojom.NearbyConnections_StopAdvertising_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.stopAdvertising');
          const result = this.impl.stopAdvertising(params.arg_service_id);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.nearby.connections.mojom.NearbyConnections_StopAdvertising_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] StopAdvertising FAILED:', e));
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.nearby.connections.mojom.NearbyConnections_StartDiscovery_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.startDiscovery');
          const result = this.impl.startDiscovery(params.arg_service_id, params.arg_options, params.arg_listener);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.nearby.connections.mojom.NearbyConnections_StartDiscovery_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] StartDiscovery FAILED:', e));
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.nearby.connections.mojom.NearbyConnections_StopDiscovery_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.stopDiscovery');
          const result = this.impl.stopDiscovery(params.arg_service_id);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.nearby.connections.mojom.NearbyConnections_StopDiscovery_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] StopDiscovery FAILED:', e));
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.nearby.connections.mojom.NearbyConnections_InjectBluetoothEndpoint_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.injectBluetoothEndpoint');
          const result = this.impl.injectBluetoothEndpoint(params.arg_service_id, params.arg_endpoint_id, params.arg_endpoint_info, params.arg_remote_bluetooth_mac_address);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.nearby.connections.mojom.NearbyConnections_InjectBluetoothEndpoint_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] InjectBluetoothEndpoint FAILED:', e));
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.nearby.connections.mojom.NearbyConnections_RequestConnection_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.requestConnection');
          const result = this.impl.requestConnection(params.arg_service_id, params.arg_endpoint_info, params.arg_endpoint_id, params.arg_options, params.arg_listener);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.nearby.connections.mojom.NearbyConnections_RequestConnection_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] RequestConnection FAILED:', e));
          }
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.nearby.connections.mojom.NearbyConnections_AcceptConnection_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.acceptConnection');
          const result = this.impl.acceptConnection(params.arg_service_id, params.arg_endpoint_id, params.arg_listener);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.nearby.connections.mojom.NearbyConnections_AcceptConnection_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] AcceptConnection FAILED:', e));
          }
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.nearby.connections.mojom.NearbyConnections_RejectConnection_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.rejectConnection');
          const result = this.impl.rejectConnection(params.arg_service_id, params.arg_endpoint_id);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.nearby.connections.mojom.NearbyConnections_RejectConnection_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] RejectConnection FAILED:', e));
          }
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.nearby.connections.mojom.NearbyConnections_DisconnectFromEndpoint_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.disconnectFromEndpoint');
          const result = this.impl.disconnectFromEndpoint(params.arg_service_id, params.arg_endpoint_id);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.nearby.connections.mojom.NearbyConnections_DisconnectFromEndpoint_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] DisconnectFromEndpoint FAILED:', e));
          }
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.nearby.connections.mojom.NearbyConnections_SendPayload_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.sendPayload');
          const result = this.impl.sendPayload(params.arg_service_id, params.arg_endpoint_ids, params.arg_payload);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.nearby.connections.mojom.NearbyConnections_SendPayload_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] SendPayload FAILED:', e));
          }
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.nearby.connections.mojom.NearbyConnections_CancelPayload_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.cancelPayload');
          const result = this.impl.cancelPayload(params.arg_service_id, params.arg_payload_id);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.nearby.connections.mojom.NearbyConnections_CancelPayload_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] CancelPayload FAILED:', e));
          }
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.nearby.connections.mojom.NearbyConnections_StopAllEndpoints_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.stopAllEndpoints');
          const result = this.impl.stopAllEndpoints(params.arg_service_id);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.nearby.connections.mojom.NearbyConnections_StopAllEndpoints_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] StopAllEndpoints FAILED:', e));
          }
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.nearby.connections.mojom.NearbyConnections_InitiateBandwidthUpgrade_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.initiateBandwidthUpgrade');
          const result = this.impl.initiateBandwidthUpgrade(params.arg_service_id, params.arg_endpoint_id);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.nearby.connections.mojom.NearbyConnections_InitiateBandwidthUpgrade_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] InitiateBandwidthUpgrade FAILED:', e));
          }
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.nearby.connections.mojom.NearbyConnections_RegisterPayloadFile_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.registerPayloadFile');
          const result = this.impl.registerPayloadFile(params.arg_service_id, params.arg_payload_id, params.arg_input_file, params.arg_output_file);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.nearby.connections.mojom.NearbyConnections_RegisterPayloadFile_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] RegisterPayloadFile FAILED:', e));
          }
          break;
        }
        case 14: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.nearby.connections.mojom.NearbyConnections_RequestConnectionV3_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.requestConnectionV3');
          const result = this.impl.requestConnectionV3(params.arg_service_id, params.arg_remote_device, params.arg_connection_options, params.arg_listener);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.nearby.connections.mojom.NearbyConnections_RequestConnectionV3_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] RequestConnectionV3 FAILED:', e));
          }
          break;
        }
        case 15: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.nearby.connections.mojom.NearbyConnections_AcceptConnectionV3_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.acceptConnectionV3');
          const result = this.impl.acceptConnectionV3(params.arg_service_id, params.arg_remote_device, params.arg_listener);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.nearby.connections.mojom.NearbyConnections_AcceptConnectionV3_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] AcceptConnectionV3 FAILED:', e));
          }
          break;
        }
        case 16: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.nearby.connections.mojom.NearbyConnections_RejectConnectionV3_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.rejectConnectionV3');
          const result = this.impl.rejectConnectionV3(params.arg_service_id, params.arg_remote_device);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.nearby.connections.mojom.NearbyConnections_RejectConnectionV3_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] RejectConnectionV3 FAILED:', e));
          }
          break;
        }
        case 17: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.nearby.connections.mojom.NearbyConnections_DisconnectFromDeviceV3_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.disconnectFromDeviceV3');
          const result = this.impl.disconnectFromDeviceV3(params.arg_service_id, params.arg_remote_device);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.nearby.connections.mojom.NearbyConnections_DisconnectFromDeviceV3_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] DisconnectFromDeviceV3 FAILED:', e));
          }
          break;
        }
        case 18: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.nearby.connections.mojom.NearbyConnections_RegisterServiceWithPresenceDeviceProvider_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.registerServiceWithPresenceDeviceProvider');
          const result = this.impl.registerServiceWithPresenceDeviceProvider(params.arg_service_id);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.nearby.connections.mojom.NearbyConnectionsReceiver = mojo.internal.bindings.nearby.connections.mojom.NearbyConnectionsReceiver;

mojo.internal.bindings.nearby.connections.mojom.NearbyConnectionsPtr = mojo.internal.bindings.nearby.connections.mojom.NearbyConnectionsRemote;
mojo.internal.bindings.nearby.connections.mojom.NearbyConnectionsRequest = mojo.internal.bindings.nearby.connections.mojom.NearbyConnectionsPendingReceiver;

