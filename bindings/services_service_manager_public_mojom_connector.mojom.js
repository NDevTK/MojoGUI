// Auto-generated MojoJS binding
 // Source: chromium_src/services/service_manager/public/mojom/connector.mojom
 // Module: service_manager.mojom

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

         const versionStr = window.mojoVersion || '120.0.0.0';
         const p = versionStr.split('.');
         const salt = 'MAJOR=' + p[0] + '\n' + 'MINOR=' + (p[1]||0) + '\n' + 'BUILD=' + (p[2]||0) + '\n' + 'PATCH=' + (p[3]||0) + '\n';
         
         const shortName = ifaceName.split('.').pop();
         while (true) {
           i++;
           const h0 = SHA256(salt + shortName + i);
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
 

 mojo.internal.bindings.service_manager = mojo.internal.bindings.service_manager || {};
mojo.internal.bindings.service_manager.mojom = mojo.internal.bindings.service_manager.mojom || {};
mojo.internal.bindings.mojo_base = mojo.internal.bindings.mojo_base || {};

mojo.internal.bindings.service_manager.mojom.ConnectResultSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.service_manager.mojom.BindInterfacePrioritySpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.service_manager.mojom.IdentitySpec = { $: {} };
mojo.internal.bindings.service_manager.mojom.ServiceInfoSpec = { $: {} };
mojo.internal.bindings.service_manager.mojom.ProcessMetadata = {};
mojo.internal.bindings.service_manager.mojom.ProcessMetadataSpec = { $ : {} };
mojo.internal.bindings.service_manager.mojom.ProcessMetadata.$interfaceName = 'service_manager.mojom.ProcessMetadata';
mojo.internal.bindings.service_manager.mojom.ProcessMetadata_SetPID_ParamsSpec = { $: {} };
mojo.internal.bindings.service_manager.mojom.Connector = {};
mojo.internal.bindings.service_manager.mojom.ConnectorSpec = { $ : {} };
mojo.internal.bindings.service_manager.mojom.Connector.$interfaceName = 'service_manager.mojom.Connector';
mojo.internal.bindings.service_manager.mojom.Connector_BindInterface_ParamsSpec = { $: {} };
mojo.internal.bindings.service_manager.mojom.Connector_BindInterface_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.service_manager.mojom.Connector_QueryService_ParamsSpec = { $: {} };
mojo.internal.bindings.service_manager.mojom.Connector_QueryService_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.service_manager.mojom.Connector_WarmService_ParamsSpec = { $: {} };
mojo.internal.bindings.service_manager.mojom.Connector_WarmService_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.service_manager.mojom.Connector_RegisterServiceInstance_ParamsSpec = { $: {} };
mojo.internal.bindings.service_manager.mojom.Connector_RegisterServiceInstance_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.service_manager.mojom.Connector_Clone_ParamsSpec = { $: {} };

// Enum: ConnectResult
mojo.internal.bindings.service_manager.mojom.ConnectResult = {
  SUCCEEDED: 0,
  INVALID_ARGUMENT: 1,
  ACCESS_DENIED: 2,
};

// Enum: BindInterfacePriority
mojo.internal.bindings.service_manager.mojom.BindInterfacePriority = {
  kImportant: 0,
  kBestEffort: 1,
};

// Struct: Identity
mojo.internal.Struct(
    mojo.internal.bindings.service_manager.mojom.IdentitySpec, 'service_manager.mojom.Identity', [
      mojo.internal.StructField('arg_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_instance_group', 8, 0, mojo.internal.bindings.mojo_base.mojom.TokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_instance_id', 16, 0, mojo.internal.bindings.mojo_base.mojom.TokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_globally_unique_id', 24, 0, mojo.internal.bindings.mojo_base.mojom.TokenSpec.$, null, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: ServiceInfo
mojo.internal.Struct(
    mojo.internal.bindings.service_manager.mojom.ServiceInfoSpec, 'service_manager.mojom.ServiceInfo', [
      mojo.internal.StructField('arg_sandbox_type', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Interface: ProcessMetadata
mojo.internal.Struct(
    mojo.internal.bindings.service_manager.mojom.ProcessMetadata_SetPID_ParamsSpec, 'service_manager.mojom.ProcessMetadata_SetPID_Params', [
      mojo.internal.StructField('arg_pid', 0, 0, mojo.internal.bindings.mojo_base.mojom.ProcessIdSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.service_manager.mojom.ProcessMetadataPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.service_manager.mojom.ProcessMetadataRemote = class {
  static get $interfaceName() {
    return 'service_manager.mojom.ProcessMetadata';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.service_manager.mojom.ProcessMetadataPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.service_manager.mojom.ProcessMetadataRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  setPID(arg_pid) {
    return this.$.setPID(arg_pid);
  }
};

mojo.internal.bindings.service_manager.mojom.ProcessMetadataRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('service_manager.mojom.ProcessMetadata', [
      { explicit: null },
    ]);
  }

  setPID(arg_pid) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.service_manager.mojom.ProcessMetadata_SetPID_ParamsSpec,
      null,
      [arg_pid],
      false);
  }

};

mojo.internal.bindings.service_manager.mojom.ProcessMetadata.getRemote = function() {
  let remote = new mojo.internal.bindings.service_manager.mojom.ProcessMetadataRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'service_manager.mojom.ProcessMetadata',
    'context');
  return remote.$;
};

mojo.internal.bindings.service_manager.mojom.ProcessMetadataReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('service_manager.mojom.ProcessMetadata', [
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
        
        // Try Method 0: SetPID
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.service_manager.mojom.ProcessMetadata_SetPID_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetPID (0)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.service_manager.mojom.ProcessMetadata_SetPID_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setPID');
          const result = this.impl.setPID(params.arg_pid);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.service_manager.mojom.ProcessMetadataReceiver = mojo.internal.bindings.service_manager.mojom.ProcessMetadataReceiver;

mojo.internal.bindings.service_manager.mojom.ProcessMetadataPtr = mojo.internal.bindings.service_manager.mojom.ProcessMetadataRemote;
mojo.internal.bindings.service_manager.mojom.ProcessMetadataRequest = mojo.internal.bindings.service_manager.mojom.ProcessMetadataPendingReceiver;


// Interface: Connector
mojo.internal.Struct(
    mojo.internal.bindings.service_manager.mojom.Connector_BindInterface_ParamsSpec, 'service_manager.mojom.Connector_BindInterface_Params', [
      mojo.internal.StructField('arg_filter', 0, 0, mojo.internal.bindings.service_manager.mojom.ServiceFilterSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_interface_name', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_interface_pipe', 16, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('arg_priority', 24, 0, mojo.internal.bindings.service_manager.mojom.BindInterfacePrioritySpec.$, null, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    mojo.internal.bindings.service_manager.mojom.Connector_BindInterface_ResponseParamsSpec, 'service_manager.mojom.Connector_BindInterface_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.service_manager.mojom.ConnectResultSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_identity', 8, 0, mojo.internal.bindings.service_manager.mojom.IdentitySpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.service_manager.mojom.Connector_QueryService_ParamsSpec, 'service_manager.mojom.Connector_QueryService_Params', [
      mojo.internal.StructField('arg_service_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.service_manager.mojom.Connector_QueryService_ResponseParamsSpec, 'service_manager.mojom.Connector_QueryService_ResponseParams', [
      mojo.internal.StructField('arg_info', 0, 0, mojo.internal.bindings.service_manager.mojom.ServiceInfoSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.service_manager.mojom.Connector_WarmService_ParamsSpec, 'service_manager.mojom.Connector_WarmService_Params', [
      mojo.internal.StructField('arg_filter', 0, 0, mojo.internal.bindings.service_manager.mojom.ServiceFilterSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.service_manager.mojom.Connector_WarmService_ResponseParamsSpec, 'service_manager.mojom.Connector_WarmService_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.service_manager.mojom.ConnectResultSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_identity', 8, 0, mojo.internal.bindings.service_manager.mojom.IdentitySpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.service_manager.mojom.Connector_RegisterServiceInstance_ParamsSpec, 'service_manager.mojom.Connector_RegisterServiceInstance_Params', [
      mojo.internal.StructField('arg_identity', 0, 0, mojo.internal.bindings.service_manager.mojom.IdentitySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_service', 8, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('arg_metadata_receiver', 16, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.service_manager.mojom.ProcessMetadataRemote), null, true, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.service_manager.mojom.Connector_RegisterServiceInstance_ResponseParamsSpec, 'service_manager.mojom.Connector_RegisterServiceInstance_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.service_manager.mojom.ConnectResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.service_manager.mojom.Connector_Clone_ParamsSpec, 'service_manager.mojom.Connector_Clone_Params', [
      mojo.internal.StructField('arg_receiver', 0, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.service_manager.mojom.ConnectorRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.service_manager.mojom.ConnectorPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.service_manager.mojom.ConnectorRemote = class {
  static get $interfaceName() {
    return 'service_manager.mojom.Connector';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.service_manager.mojom.ConnectorPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.service_manager.mojom.ConnectorRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  bindInterface(arg_filter, arg_interface_name, arg_interface_pipe, arg_priority) {
    return this.$.bindInterface(arg_filter, arg_interface_name, arg_interface_pipe, arg_priority);
  }
  queryService(arg_service_name) {
    return this.$.queryService(arg_service_name);
  }
  warmService(arg_filter) {
    return this.$.warmService(arg_filter);
  }
  registerServiceInstance(arg_identity, arg_service, arg_metadata_receiver) {
    return this.$.registerServiceInstance(arg_identity, arg_service, arg_metadata_receiver);
  }
  clone(arg_receiver) {
    return this.$.clone(arg_receiver);
  }
};

mojo.internal.bindings.service_manager.mojom.ConnectorRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('service_manager.mojom.Connector', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  bindInterface(arg_filter, arg_interface_name, arg_interface_pipe, arg_priority) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.service_manager.mojom.Connector_BindInterface_ParamsSpec,
      mojo.internal.bindings.service_manager.mojom.Connector_BindInterface_ResponseParamsSpec,
      [arg_filter, arg_interface_name, arg_interface_pipe, arg_priority],
      false);
  }

  queryService(arg_service_name) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.service_manager.mojom.Connector_QueryService_ParamsSpec,
      mojo.internal.bindings.service_manager.mojom.Connector_QueryService_ResponseParamsSpec,
      [arg_service_name],
      false);
  }

  warmService(arg_filter) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.service_manager.mojom.Connector_WarmService_ParamsSpec,
      mojo.internal.bindings.service_manager.mojom.Connector_WarmService_ResponseParamsSpec,
      [arg_filter],
      false);
  }

  registerServiceInstance(arg_identity, arg_service, arg_metadata_receiver) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.service_manager.mojom.Connector_RegisterServiceInstance_ParamsSpec,
      mojo.internal.bindings.service_manager.mojom.Connector_RegisterServiceInstance_ResponseParamsSpec,
      [arg_identity, arg_service, arg_metadata_receiver],
      false);
  }

  clone(arg_receiver) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.service_manager.mojom.Connector_Clone_ParamsSpec,
      null,
      [arg_receiver],
      false);
  }

};

mojo.internal.bindings.service_manager.mojom.Connector.getRemote = function() {
  let remote = new mojo.internal.bindings.service_manager.mojom.ConnectorRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'service_manager.mojom.Connector',
    'context');
  return remote.$;
};

mojo.internal.bindings.service_manager.mojom.ConnectorReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('service_manager.mojom.Connector', [
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
        
        // Try Method 0: BindInterface
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.service_manager.mojom.Connector_BindInterface_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> BindInterface (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: QueryService
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.service_manager.mojom.Connector_QueryService_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> QueryService (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: WarmService
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.service_manager.mojom.Connector_WarmService_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> WarmService (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: RegisterServiceInstance
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.service_manager.mojom.Connector_RegisterServiceInstance_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RegisterServiceInstance (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: Clone
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.service_manager.mojom.Connector_Clone_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Clone (4)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.service_manager.mojom.Connector_BindInterface_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.bindInterface');
          const result = this.impl.bindInterface(params.arg_filter, params.arg_interface_name, params.arg_interface_pipe, params.arg_priority);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.service_manager.mojom.Connector_BindInterface_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] BindInterface FAILED:', e));
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.service_manager.mojom.Connector_QueryService_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.queryService');
          const result = this.impl.queryService(params.arg_service_name);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.service_manager.mojom.Connector_QueryService_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] QueryService FAILED:', e));
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.service_manager.mojom.Connector_WarmService_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.warmService');
          const result = this.impl.warmService(params.arg_filter);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.service_manager.mojom.Connector_WarmService_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] WarmService FAILED:', e));
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.service_manager.mojom.Connector_RegisterServiceInstance_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.registerServiceInstance');
          const result = this.impl.registerServiceInstance(params.arg_identity, params.arg_service, params.arg_metadata_receiver);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.service_manager.mojom.Connector_RegisterServiceInstance_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] RegisterServiceInstance FAILED:', e));
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.service_manager.mojom.Connector_Clone_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.clone');
          const result = this.impl.clone(params.arg_receiver);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.service_manager.mojom.ConnectorReceiver = mojo.internal.bindings.service_manager.mojom.ConnectorReceiver;

mojo.internal.bindings.service_manager.mojom.ConnectorPtr = mojo.internal.bindings.service_manager.mojom.ConnectorRemote;
mojo.internal.bindings.service_manager.mojom.ConnectorRequest = mojo.internal.bindings.service_manager.mojom.ConnectorPendingReceiver;

