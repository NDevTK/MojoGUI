// Auto-generated MojoJS binding
 // Source: chromium_src/services/accessibility/public/mojom/accessibility_service.mojom
 // Module: ax.mojom

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
 

 mojo.internal.bindings.ax = mojo.internal.bindings.ax || {};
mojo.internal.bindings.ax.mojom = mojo.internal.bindings.ax.mojom || {};
mojo.internal.bindings.sandbox = mojo.internal.bindings.sandbox || {};
mojo.internal.bindings.blink = mojo.internal.bindings.blink || {};

mojo.internal.bindings.ax.mojom.AssistiveTechnologyController = {};
mojo.internal.bindings.ax.mojom.AssistiveTechnologyController.$interfaceName = 'ax.mojom.AssistiveTechnologyController';
mojo.internal.bindings.ax.mojom.AssistiveTechnologyController_EnableAssistiveTechnology_ParamsSpec = { $: {} };
mojo.internal.bindings.ax.mojom.AccessibilityService = {};
mojo.internal.bindings.ax.mojom.AccessibilityService.$interfaceName = 'ax.mojom.AccessibilityService';
mojo.internal.bindings.ax.mojom.AccessibilityService_BindAccessibilityServiceClient_ParamsSpec = { $: {} };
mojo.internal.bindings.ax.mojom.AccessibilityService_BindAssistiveTechnologyController_ParamsSpec = { $: {} };
mojo.internal.bindings.ax.mojom.AccessibilityService_ConnectDevToolsAgent_ParamsSpec = { $: {} };
mojo.internal.bindings.ax.mojom.AccessibilityServiceClient = {};
mojo.internal.bindings.ax.mojom.AccessibilityServiceClient.$interfaceName = 'ax.mojom.AccessibilityServiceClient';
mojo.internal.bindings.ax.mojom.AccessibilityServiceClient_BindAutomation_ParamsSpec = { $: {} };
mojo.internal.bindings.ax.mojom.AccessibilityServiceClient_BindAutomationClient_ParamsSpec = { $: {} };
mojo.internal.bindings.ax.mojom.AccessibilityServiceClient_BindAutoclickClient_ParamsSpec = { $: {} };
mojo.internal.bindings.ax.mojom.AccessibilityServiceClient_BindSpeechRecognition_ParamsSpec = { $: {} };
mojo.internal.bindings.ax.mojom.AccessibilityServiceClient_BindTts_ParamsSpec = { $: {} };
mojo.internal.bindings.ax.mojom.AccessibilityServiceClient_BindUserInput_ParamsSpec = { $: {} };
mojo.internal.bindings.ax.mojom.AccessibilityServiceClient_BindUserInterface_ParamsSpec = { $: {} };
mojo.internal.bindings.ax.mojom.AccessibilityServiceClient_BindAccessibilityFileLoader_ParamsSpec = { $: {} };

// Interface: AssistiveTechnologyController
mojo.internal.Struct(
    mojo.internal.bindings.ax.mojom.AssistiveTechnologyController_EnableAssistiveTechnology_ParamsSpec, 'ax.mojom.AssistiveTechnologyController_EnableAssistiveTechnology_Params', [
      mojo.internal.StructField('arg_enabled_features', 0, 0, mojo.internal.Array(mojo.internal.bindings.ax.mojom.AssistiveTechnologyTypeSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.ax.mojom.AssistiveTechnologyControllerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.ax.mojom.AssistiveTechnologyControllerRemote = class {
  static get $interfaceName() {
    return 'ax.mojom.AssistiveTechnologyController';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.ax.mojom.AssistiveTechnologyControllerPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.ax.mojom.AssistiveTechnologyControllerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  enableAssistiveTechnology(arg_enabled_features) {
    return this.$.enableAssistiveTechnology(arg_enabled_features);
  }
};

mojo.internal.bindings.ax.mojom.AssistiveTechnologyControllerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('AssistiveTechnologyController', [
      { explicit: null },
    ]);
  }

  enableAssistiveTechnology(arg_enabled_features) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.ax.mojom.AssistiveTechnologyController_EnableAssistiveTechnology_ParamsSpec,
      null,
      [arg_enabled_features],
      false);
  }

};

mojo.internal.bindings.ax.mojom.AssistiveTechnologyController.getRemote = function() {
  let remote = new mojo.internal.bindings.ax.mojom.AssistiveTechnologyControllerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ax.mojom.AssistiveTechnologyController',
    'context');
  return remote.$;
};

mojo.internal.bindings.ax.mojom.AssistiveTechnologyControllerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('AssistiveTechnologyController', [
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
        
        // Try Method 0: EnableAssistiveTechnology
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ax.mojom.AssistiveTechnologyController_EnableAssistiveTechnology_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> EnableAssistiveTechnology (0)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.ax.mojom.AssistiveTechnologyController_EnableAssistiveTechnology_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.enableAssistiveTechnology');
          const result = this.impl.enableAssistiveTechnology(params.arg_enabled_features);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.ax.mojom.AssistiveTechnologyControllerReceiver = mojo.internal.bindings.ax.mojom.AssistiveTechnologyControllerReceiver;

mojo.internal.bindings.ax.mojom.AssistiveTechnologyControllerPtr = mojo.internal.bindings.ax.mojom.AssistiveTechnologyControllerRemote;
mojo.internal.bindings.ax.mojom.AssistiveTechnologyControllerRequest = mojo.internal.bindings.ax.mojom.AssistiveTechnologyControllerPendingReceiver;


// Interface: AccessibilityService
mojo.internal.Struct(
    mojo.internal.bindings.ax.mojom.AccessibilityService_BindAccessibilityServiceClient_ParamsSpec, 'ax.mojom.AccessibilityService_BindAccessibilityServiceClient_Params', [
      mojo.internal.StructField('arg_accessibility_service_client', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.ax.mojom.AccessibilityServiceClientSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ax.mojom.AccessibilityService_BindAssistiveTechnologyController_ParamsSpec, 'ax.mojom.AccessibilityService_BindAssistiveTechnologyController_Params', [
      mojo.internal.StructField('arg_at_controller', 0, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.ax.mojom.AssistiveTechnologyControllerSpec), null, false, 0, undefined),
      mojo.internal.StructField('arg_enabled_features', 8, 0, mojo.internal.Array(mojo.internal.bindings.ax.mojom.AssistiveTechnologyTypeSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.ax.mojom.AccessibilityService_ConnectDevToolsAgent_ParamsSpec, 'ax.mojom.AccessibilityService_ConnectDevToolsAgent_Params', [
      mojo.internal.StructField('arg_agent', 0, 0, mojo.internal.bindings.pending_associated_receiver<blink.mojom.DevToolsAgent>Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_type', 8, 0, mojo.internal.bindings.ax.mojom.AssistiveTechnologyTypeSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.bindings.ax.mojom.AccessibilityServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.ax.mojom.AccessibilityServiceRemote = class {
  static get $interfaceName() {
    return 'ax.mojom.AccessibilityService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.ax.mojom.AccessibilityServicePendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.ax.mojom.AccessibilityServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  bindAccessibilityServiceClient(arg_accessibility_service_client) {
    return this.$.bindAccessibilityServiceClient(arg_accessibility_service_client);
  }
  bindAssistiveTechnologyController(arg_at_controller, arg_enabled_features) {
    return this.$.bindAssistiveTechnologyController(arg_at_controller, arg_enabled_features);
  }
  connectDevToolsAgent(arg_agent, arg_type) {
    return this.$.connectDevToolsAgent(arg_agent, arg_type);
  }
};

mojo.internal.bindings.ax.mojom.AccessibilityServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('AccessibilityService', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  bindAccessibilityServiceClient(arg_accessibility_service_client) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.ax.mojom.AccessibilityService_BindAccessibilityServiceClient_ParamsSpec,
      null,
      [arg_accessibility_service_client],
      false);
  }

  bindAssistiveTechnologyController(arg_at_controller, arg_enabled_features) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.ax.mojom.AccessibilityService_BindAssistiveTechnologyController_ParamsSpec,
      null,
      [arg_at_controller, arg_enabled_features],
      false);
  }

  connectDevToolsAgent(arg_agent, arg_type) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.ax.mojom.AccessibilityService_ConnectDevToolsAgent_ParamsSpec,
      null,
      [arg_agent, arg_type],
      false);
  }

};

mojo.internal.bindings.ax.mojom.AccessibilityService.getRemote = function() {
  let remote = new mojo.internal.bindings.ax.mojom.AccessibilityServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ax.mojom.AccessibilityService',
    'context');
  return remote.$;
};

mojo.internal.bindings.ax.mojom.AccessibilityServiceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('AccessibilityService', [
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
        
        // Try Method 0: BindAccessibilityServiceClient
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ax.mojom.AccessibilityService_BindAccessibilityServiceClient_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> BindAccessibilityServiceClient (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: BindAssistiveTechnologyController
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ax.mojom.AccessibilityService_BindAssistiveTechnologyController_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> BindAssistiveTechnologyController (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: ConnectDevToolsAgent
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ax.mojom.AccessibilityService_ConnectDevToolsAgent_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ConnectDevToolsAgent (2)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.ax.mojom.AccessibilityService_BindAccessibilityServiceClient_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.bindAccessibilityServiceClient');
          const result = this.impl.bindAccessibilityServiceClient(params.arg_accessibility_service_client);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ax.mojom.AccessibilityService_BindAssistiveTechnologyController_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.bindAssistiveTechnologyController');
          const result = this.impl.bindAssistiveTechnologyController(params.arg_at_controller, params.arg_enabled_features);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ax.mojom.AccessibilityService_ConnectDevToolsAgent_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.connectDevToolsAgent');
          const result = this.impl.connectDevToolsAgent(params.arg_agent, params.arg_type);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.ax.mojom.AccessibilityServiceReceiver = mojo.internal.bindings.ax.mojom.AccessibilityServiceReceiver;

mojo.internal.bindings.ax.mojom.AccessibilityServicePtr = mojo.internal.bindings.ax.mojom.AccessibilityServiceRemote;
mojo.internal.bindings.ax.mojom.AccessibilityServiceRequest = mojo.internal.bindings.ax.mojom.AccessibilityServicePendingReceiver;


// Interface: AccessibilityServiceClient
mojo.internal.Struct(
    mojo.internal.bindings.ax.mojom.AccessibilityServiceClient_BindAutomation_ParamsSpec, 'ax.mojom.AccessibilityServiceClient_BindAutomation_Params', [
      mojo.internal.StructField('arg_automation', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ax.mojom.AccessibilityServiceClient_BindAutomationClient_ParamsSpec, 'ax.mojom.AccessibilityServiceClient_BindAutomationClient_Params', [
      mojo.internal.StructField('arg_automation_client', 0, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.ax.mojom.AutomationClientRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ax.mojom.AccessibilityServiceClient_BindAutoclickClient_ParamsSpec, 'ax.mojom.AccessibilityServiceClient_BindAutoclickClient_Params', [
      mojo.internal.StructField('arg_autoclick_client', 0, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.ax.mojom.AutoclickClientRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ax.mojom.AccessibilityServiceClient_BindSpeechRecognition_ParamsSpec, 'ax.mojom.AccessibilityServiceClient_BindSpeechRecognition_Params', [
      mojo.internal.StructField('arg_sr_receiver', 0, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.ax.mojom.SpeechRecognitionRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ax.mojom.AccessibilityServiceClient_BindTts_ParamsSpec, 'ax.mojom.AccessibilityServiceClient_BindTts_Params', [
      mojo.internal.StructField('arg_tts_receiver', 0, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.ax.mojom.TtsRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ax.mojom.AccessibilityServiceClient_BindUserInput_ParamsSpec, 'ax.mojom.AccessibilityServiceClient_BindUserInput_Params', [
      mojo.internal.StructField('arg_user_input_receiver', 0, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.ax.mojom.UserInputRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ax.mojom.AccessibilityServiceClient_BindUserInterface_ParamsSpec, 'ax.mojom.AccessibilityServiceClient_BindUserInterface_Params', [
      mojo.internal.StructField('arg_user_interface_receiver', 0, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.ax.mojom.UserInterfaceRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ax.mojom.AccessibilityServiceClient_BindAccessibilityFileLoader_ParamsSpec, 'ax.mojom.AccessibilityServiceClient_BindAccessibilityFileLoader_Params', [
      mojo.internal.StructField('arg_file_loader_receiver', 0, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.ax.mojom.AccessibilityFileLoaderRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.ax.mojom.AccessibilityServiceClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.ax.mojom.AccessibilityServiceClientRemote = class {
  static get $interfaceName() {
    return 'ax.mojom.AccessibilityServiceClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.ax.mojom.AccessibilityServiceClientPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.ax.mojom.AccessibilityServiceClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  bindAutomation(arg_automation) {
    return this.$.bindAutomation(arg_automation);
  }
  bindAutomationClient(arg_automation_client) {
    return this.$.bindAutomationClient(arg_automation_client);
  }
  bindAutoclickClient(arg_autoclick_client) {
    return this.$.bindAutoclickClient(arg_autoclick_client);
  }
  bindSpeechRecognition(arg_sr_receiver) {
    return this.$.bindSpeechRecognition(arg_sr_receiver);
  }
  bindTts(arg_tts_receiver) {
    return this.$.bindTts(arg_tts_receiver);
  }
  bindUserInput(arg_user_input_receiver) {
    return this.$.bindUserInput(arg_user_input_receiver);
  }
  bindUserInterface(arg_user_interface_receiver) {
    return this.$.bindUserInterface(arg_user_interface_receiver);
  }
  bindAccessibilityFileLoader(arg_file_loader_receiver) {
    return this.$.bindAccessibilityFileLoader(arg_file_loader_receiver);
  }
};

mojo.internal.bindings.ax.mojom.AccessibilityServiceClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('AccessibilityServiceClient', [
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

  bindAutomation(arg_automation) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.ax.mojom.AccessibilityServiceClient_BindAutomation_ParamsSpec,
      null,
      [arg_automation],
      false);
  }

  bindAutomationClient(arg_automation_client) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.ax.mojom.AccessibilityServiceClient_BindAutomationClient_ParamsSpec,
      null,
      [arg_automation_client],
      false);
  }

  bindAutoclickClient(arg_autoclick_client) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.ax.mojom.AccessibilityServiceClient_BindAutoclickClient_ParamsSpec,
      null,
      [arg_autoclick_client],
      false);
  }

  bindSpeechRecognition(arg_sr_receiver) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.ax.mojom.AccessibilityServiceClient_BindSpeechRecognition_ParamsSpec,
      null,
      [arg_sr_receiver],
      false);
  }

  bindTts(arg_tts_receiver) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.ax.mojom.AccessibilityServiceClient_BindTts_ParamsSpec,
      null,
      [arg_tts_receiver],
      false);
  }

  bindUserInput(arg_user_input_receiver) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojo.internal.bindings.ax.mojom.AccessibilityServiceClient_BindUserInput_ParamsSpec,
      null,
      [arg_user_input_receiver],
      false);
  }

  bindUserInterface(arg_user_interface_receiver) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      mojo.internal.bindings.ax.mojom.AccessibilityServiceClient_BindUserInterface_ParamsSpec,
      null,
      [arg_user_interface_receiver],
      false);
  }

  bindAccessibilityFileLoader(arg_file_loader_receiver) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      mojo.internal.bindings.ax.mojom.AccessibilityServiceClient_BindAccessibilityFileLoader_ParamsSpec,
      null,
      [arg_file_loader_receiver],
      false);
  }

};

mojo.internal.bindings.ax.mojom.AccessibilityServiceClient.getRemote = function() {
  let remote = new mojo.internal.bindings.ax.mojom.AccessibilityServiceClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ax.mojom.AccessibilityServiceClient',
    'context');
  return remote.$;
};

mojo.internal.bindings.ax.mojom.AccessibilityServiceClientReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('AccessibilityServiceClient', [
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
        
        // Try Method 0: BindAutomation
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ax.mojom.AccessibilityServiceClient_BindAutomation_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> BindAutomation (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: BindAutomationClient
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ax.mojom.AccessibilityServiceClient_BindAutomationClient_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> BindAutomationClient (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: BindAutoclickClient
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ax.mojom.AccessibilityServiceClient_BindAutoclickClient_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> BindAutoclickClient (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: BindSpeechRecognition
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ax.mojom.AccessibilityServiceClient_BindSpeechRecognition_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> BindSpeechRecognition (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: BindTts
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ax.mojom.AccessibilityServiceClient_BindTts_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> BindTts (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: BindUserInput
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ax.mojom.AccessibilityServiceClient_BindUserInput_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> BindUserInput (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: BindUserInterface
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ax.mojom.AccessibilityServiceClient_BindUserInterface_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> BindUserInterface (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: BindAccessibilityFileLoader
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ax.mojom.AccessibilityServiceClient_BindAccessibilityFileLoader_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> BindAccessibilityFileLoader (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.ax.mojom.AccessibilityServiceClient_BindAutomation_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.bindAutomation');
          const result = this.impl.bindAutomation(params.arg_automation);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ax.mojom.AccessibilityServiceClient_BindAutomationClient_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.bindAutomationClient');
          const result = this.impl.bindAutomationClient(params.arg_automation_client);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ax.mojom.AccessibilityServiceClient_BindAutoclickClient_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.bindAutoclickClient');
          const result = this.impl.bindAutoclickClient(params.arg_autoclick_client);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ax.mojom.AccessibilityServiceClient_BindSpeechRecognition_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.bindSpeechRecognition');
          const result = this.impl.bindSpeechRecognition(params.arg_sr_receiver);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ax.mojom.AccessibilityServiceClient_BindTts_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.bindTts');
          const result = this.impl.bindTts(params.arg_tts_receiver);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ax.mojom.AccessibilityServiceClient_BindUserInput_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.bindUserInput');
          const result = this.impl.bindUserInput(params.arg_user_input_receiver);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ax.mojom.AccessibilityServiceClient_BindUserInterface_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.bindUserInterface');
          const result = this.impl.bindUserInterface(params.arg_user_interface_receiver);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ax.mojom.AccessibilityServiceClient_BindAccessibilityFileLoader_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.bindAccessibilityFileLoader');
          const result = this.impl.bindAccessibilityFileLoader(params.arg_file_loader_receiver);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.ax.mojom.AccessibilityServiceClientReceiver = mojo.internal.bindings.ax.mojom.AccessibilityServiceClientReceiver;

mojo.internal.bindings.ax.mojom.AccessibilityServiceClientPtr = mojo.internal.bindings.ax.mojom.AccessibilityServiceClientRemote;
mojo.internal.bindings.ax.mojom.AccessibilityServiceClientRequest = mojo.internal.bindings.ax.mojom.AccessibilityServiceClientPendingReceiver;

