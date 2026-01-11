// Auto-generated MojoJS binding
 // Source: chromium_src/ash/webui/shortcut_customization_ui/mojom/shortcut_customization.mojom
 // Module: ash.shortcut_customization.mojom

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
 

 mojo.internal.bindings.ash = mojo.internal.bindings.ash || {};
mojo.internal.bindings.ash.shortcut_customization = mojo.internal.bindings.ash.shortcut_customization || {};
mojo.internal.bindings.ash.shortcut_customization.mojom = mojo.internal.bindings.ash.shortcut_customization.mojom || {};
mojo.internal.bindings.mojo_base = mojo.internal.bindings.mojo_base || {};
mojo.internal.bindings.ui = mojo.internal.bindings.ui || {};

mojo.internal.bindings.ash.shortcut_customization.mojom.UserActionSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.ash.shortcut_customization.mojom.EditDialogCompletedActionsSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.ash.shortcut_customization.mojom.SubactionsSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.ash.shortcut_customization.mojom.AcceleratorResultDataSpec = { $: {} };
mojo.internal.bindings.ash.shortcut_customization.mojom.SimpleAcceleratorSpec = { $: {} };
mojo.internal.bindings.ash.shortcut_customization.mojom.AcceleratorsUpdatedObserver = {};
mojo.internal.bindings.ash.shortcut_customization.mojom.AcceleratorsUpdatedObserver.$interfaceName = 'ash.shortcut_customization.mojom.AcceleratorsUpdatedObserver';
mojo.internal.bindings.ash.shortcut_customization.mojom.AcceleratorsUpdatedObserver_OnAcceleratorsUpdated_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.shortcut_customization.mojom.PolicyUpdatedObserver = {};
mojo.internal.bindings.ash.shortcut_customization.mojom.PolicyUpdatedObserver.$interfaceName = 'ash.shortcut_customization.mojom.PolicyUpdatedObserver';
mojo.internal.bindings.ash.shortcut_customization.mojom.PolicyUpdatedObserver_OnCustomizationPolicyUpdated_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.shortcut_customization.mojom.AcceleratorConfigurationProvider = {};
mojo.internal.bindings.ash.shortcut_customization.mojom.AcceleratorConfigurationProvider.$interfaceName = 'ash.shortcut_customization.mojom.AcceleratorConfigurationProvider';
mojo.internal.bindings.ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_IsMutable_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_IsMutable_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_IsCustomizationAllowedByPolicy_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_IsCustomizationAllowedByPolicy_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_GetMetaKeyToDisplay_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_GetMetaKeyToDisplay_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_GetConflictAccelerator_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_GetConflictAccelerator_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_GetDefaultAcceleratorsForId_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_GetDefaultAcceleratorsForId_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_GetAccelerators_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_GetAccelerators_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_AddObserver_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_AddPolicyObserver_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_GetAcceleratorLayoutInfos_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_GetAcceleratorLayoutInfos_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_PreventProcessingAccelerators_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_PreventProcessingAccelerators_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_AddAccelerator_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_AddAccelerator_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_RemoveAccelerator_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_RemoveAccelerator_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_ReplaceAccelerator_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_ReplaceAccelerator_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_RestoreDefault_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_RestoreDefault_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_RestoreAllDefaults_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_RestoreAllDefaults_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_RecordUserAction_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_RecordMainCategoryNavigation_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_RecordEditDialogCompletedActions_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_RecordAddOrEditSubactions_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_HasCustomAccelerators_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_HasCustomAccelerators_ResponseParamsSpec = { $: {} };

// Enum: UserAction
mojo.internal.bindings.ash.shortcut_customization.mojom.UserAction = {
  kOpenEditDialog: 0,
  kStartAddAccelerator: 1,
  kStartReplaceAccelerator: 2,
  kRemoveAccelerator: 3,
  kSuccessfulModification: 4,
  kResetAction: 5,
  kResetAll: 6,
};

// Enum: EditDialogCompletedActions
mojo.internal.bindings.ash.shortcut_customization.mojom.EditDialogCompletedActions = {
  kNoAction: 0,
  kAdd: 1,
  kEdit: 2,
  kEditAdd: 3,
  kRemove: 4,
  kRemoveAdd: 5,
  kRemoveEdit: 6,
  kRemoveEditAdd: 7,
  kReset: 8,
  kResetAdd: 9,
  kResetEdit: 10,
  kResetEditAdd: 11,
  kResetRemove: 12,
  kResetRemoveAdd: 13,
  kResetRemoveEdit: 14,
  kResetRemoveEditAdd: 15,
};

// Enum: Subactions
mojo.internal.bindings.ash.shortcut_customization.mojom.Subactions = {
  kNoErrorCancel: 0,
  kNoErrorSuccess: 1,
  kErrorCancel: 2,
  kErrorSuccess: 3,
};

// Struct: AcceleratorResultData
mojo.internal.Struct(
    mojo.internal.bindings.ash.shortcut_customization.mojom.AcceleratorResultDataSpec, 'ash.shortcut_customization.mojom.AcceleratorResultData', [
      mojo.internal.StructField('arg_shortcut_name', 0, 0, mojo.internal.bindings.mojo_base.mojom.String16Spec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_result', 8, 0, mojo.internal.bindings.ash.mojom.AcceleratorConfigResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: SimpleAccelerator
mojo.internal.Struct(
    mojo.internal.bindings.ash.shortcut_customization.mojom.SimpleAcceleratorSpec, 'ash.shortcut_customization.mojom.SimpleAccelerator', [
      mojo.internal.StructField('arg_key_code', 0, 0, mojo.internal.bindings.ash.mojom.VKeySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_key_state', 8, 0, mojo.internal.bindings.ui.mojom.AcceleratorKeyStateSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_modifiers', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

// Interface: AcceleratorsUpdatedObserver
mojo.internal.Struct(
    mojo.internal.bindings.ash.shortcut_customization.mojom.AcceleratorsUpdatedObserver_OnAcceleratorsUpdated_ParamsSpec, 'ash.shortcut_customization.mojom.AcceleratorsUpdatedObserver_OnAcceleratorsUpdated_Params', [
      mojo.internal.StructField('arg_config', 0, 0, mojo.internal.Map(mojo.internal.bindings.ash.mojom.AcceleratorSourceSpec.$, mojo.internal.Map(mojo.internal.Uint32, mojo.internal.Array(mojo.internal.bindings.ash.mojom.AcceleratorInfoSpec.$, false), false), false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.ash.shortcut_customization.mojom.AcceleratorsUpdatedObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.ash.shortcut_customization.mojom.AcceleratorsUpdatedObserverRemote = class {
  static get $interfaceName() {
    return 'ash.shortcut_customization.mojom.AcceleratorsUpdatedObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.ash.shortcut_customization.mojom.AcceleratorsUpdatedObserverPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.ash.shortcut_customization.mojom.AcceleratorsUpdatedObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onAcceleratorsUpdated(arg_config) {
    return this.$.onAcceleratorsUpdated(arg_config);
  }
};

mojo.internal.bindings.ash.shortcut_customization.mojom.AcceleratorsUpdatedObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('AcceleratorsUpdatedObserver', [
      { explicit: null },
    ]);
  }

  onAcceleratorsUpdated(arg_config) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.ash.shortcut_customization.mojom.AcceleratorsUpdatedObserver_OnAcceleratorsUpdated_ParamsSpec,
      null,
      [arg_config],
      false);
  }

};

mojo.internal.bindings.ash.shortcut_customization.mojom.AcceleratorsUpdatedObserver.getRemote = function() {
  let remote = new mojo.internal.bindings.ash.shortcut_customization.mojom.AcceleratorsUpdatedObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.shortcut_customization.mojom.AcceleratorsUpdatedObserver',
    'context');
  return remote.$;
};

mojo.internal.bindings.ash.shortcut_customization.mojom.AcceleratorsUpdatedObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('AcceleratorsUpdatedObserver', [
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
        
        // Try Method 0: OnAcceleratorsUpdated
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.shortcut_customization.mojom.AcceleratorsUpdatedObserver_OnAcceleratorsUpdated_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnAcceleratorsUpdated (0)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.shortcut_customization.mojom.AcceleratorsUpdatedObserver_OnAcceleratorsUpdated_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onAcceleratorsUpdated');
          const result = this.impl.onAcceleratorsUpdated(params.arg_config);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.ash.shortcut_customization.mojom.AcceleratorsUpdatedObserverReceiver = mojo.internal.bindings.ash.shortcut_customization.mojom.AcceleratorsUpdatedObserverReceiver;

mojo.internal.bindings.ash.shortcut_customization.mojom.AcceleratorsUpdatedObserverPtr = mojo.internal.bindings.ash.shortcut_customization.mojom.AcceleratorsUpdatedObserverRemote;
mojo.internal.bindings.ash.shortcut_customization.mojom.AcceleratorsUpdatedObserverRequest = mojo.internal.bindings.ash.shortcut_customization.mojom.AcceleratorsUpdatedObserverPendingReceiver;


// Interface: PolicyUpdatedObserver
mojo.internal.Struct(
    mojo.internal.bindings.ash.shortcut_customization.mojom.PolicyUpdatedObserver_OnCustomizationPolicyUpdated_ParamsSpec, 'ash.shortcut_customization.mojom.PolicyUpdatedObserver_OnCustomizationPolicyUpdated_Params', [
    ],
    [[0, 8]]);

mojo.internal.bindings.ash.shortcut_customization.mojom.PolicyUpdatedObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.ash.shortcut_customization.mojom.PolicyUpdatedObserverRemote = class {
  static get $interfaceName() {
    return 'ash.shortcut_customization.mojom.PolicyUpdatedObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.ash.shortcut_customization.mojom.PolicyUpdatedObserverPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.ash.shortcut_customization.mojom.PolicyUpdatedObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onCustomizationPolicyUpdated() {
    return this.$.onCustomizationPolicyUpdated();
  }
};

mojo.internal.bindings.ash.shortcut_customization.mojom.PolicyUpdatedObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('PolicyUpdatedObserver', [
      { explicit: null },
    ]);
  }

  onCustomizationPolicyUpdated() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.ash.shortcut_customization.mojom.PolicyUpdatedObserver_OnCustomizationPolicyUpdated_ParamsSpec,
      null,
      [],
      false);
  }

};

mojo.internal.bindings.ash.shortcut_customization.mojom.PolicyUpdatedObserver.getRemote = function() {
  let remote = new mojo.internal.bindings.ash.shortcut_customization.mojom.PolicyUpdatedObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.shortcut_customization.mojom.PolicyUpdatedObserver',
    'context');
  return remote.$;
};

mojo.internal.bindings.ash.shortcut_customization.mojom.PolicyUpdatedObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('PolicyUpdatedObserver', [
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
        
        // Try Method 0: OnCustomizationPolicyUpdated
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.shortcut_customization.mojom.PolicyUpdatedObserver_OnCustomizationPolicyUpdated_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnCustomizationPolicyUpdated (0)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.shortcut_customization.mojom.PolicyUpdatedObserver_OnCustomizationPolicyUpdated_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onCustomizationPolicyUpdated');
          const result = this.impl.onCustomizationPolicyUpdated();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.ash.shortcut_customization.mojom.PolicyUpdatedObserverReceiver = mojo.internal.bindings.ash.shortcut_customization.mojom.PolicyUpdatedObserverReceiver;

mojo.internal.bindings.ash.shortcut_customization.mojom.PolicyUpdatedObserverPtr = mojo.internal.bindings.ash.shortcut_customization.mojom.PolicyUpdatedObserverRemote;
mojo.internal.bindings.ash.shortcut_customization.mojom.PolicyUpdatedObserverRequest = mojo.internal.bindings.ash.shortcut_customization.mojom.PolicyUpdatedObserverPendingReceiver;


// Interface: AcceleratorConfigurationProvider
mojo.internal.Struct(
    mojo.internal.bindings.ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_IsMutable_ParamsSpec, 'ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_IsMutable_Params', [
      mojo.internal.StructField('arg_source', 0, 0, mojo.internal.bindings.ash.mojom.AcceleratorSourceSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_IsMutable_ResponseParamsSpec, 'ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_IsMutable_ResponseParams', [
      mojo.internal.StructField('arg_is_mutable', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_IsCustomizationAllowedByPolicy_ParamsSpec, 'ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_IsCustomizationAllowedByPolicy_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_IsCustomizationAllowedByPolicy_ResponseParamsSpec, 'ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_IsCustomizationAllowedByPolicy_ResponseParams', [
      mojo.internal.StructField('arg_is_customization_allowed_by_policy', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_GetMetaKeyToDisplay_ParamsSpec, 'ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_GetMetaKeyToDisplay_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_GetMetaKeyToDisplay_ResponseParamsSpec, 'ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_GetMetaKeyToDisplay_ResponseParams', [
      mojo.internal.StructField('arg_meta_key', 0, 0, mojo.internal.bindings.ui.mojom.MetaKeySpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_GetConflictAccelerator_ParamsSpec, 'ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_GetConflictAccelerator_Params', [
      mojo.internal.StructField('arg_source', 0, 0, mojo.internal.bindings.ash.mojom.AcceleratorSourceSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_accelerator', 8, 0, mojo.internal.bindings.mojo.internal.bindings.ash.shortcut_customization.mojom.SimpleAcceleratorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_action_id', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_GetConflictAccelerator_ResponseParamsSpec, 'ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_GetConflictAccelerator_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.mojo.internal.bindings.ash.shortcut_customization.mojom.AcceleratorResultDataSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_GetDefaultAcceleratorsForId_ParamsSpec, 'ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_GetDefaultAcceleratorsForId_Params', [
      mojo.internal.StructField('arg_action_id', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_GetDefaultAcceleratorsForId_ResponseParamsSpec, 'ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_GetDefaultAcceleratorsForId_ResponseParams', [
      mojo.internal.StructField('arg_accelerators', 0, 0, mojo.internal.Array(mojo.internal.bindings.mojo.internal.bindings.ash.shortcut_customization.mojom.SimpleAcceleratorSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_GetAccelerators_ParamsSpec, 'ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_GetAccelerators_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_GetAccelerators_ResponseParamsSpec, 'ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_GetAccelerators_ResponseParams', [
      mojo.internal.StructField('arg_config', 0, 0, mojo.internal.Map(mojo.internal.bindings.ash.mojom.AcceleratorSourceSpec.$, mojo.internal.Map(mojo.internal.Uint32, mojo.internal.Array(mojo.internal.bindings.ash.mojom.AcceleratorInfoSpec.$, false), false), false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_AddObserver_ParamsSpec, 'ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_AddObserver_Params', [
      mojo.internal.StructField('arg_observer', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.ash.shortcut_customization.mojom.AcceleratorsUpdatedObserverSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_AddPolicyObserver_ParamsSpec, 'ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_AddPolicyObserver_Params', [
      mojo.internal.StructField('arg_observer', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.ash.shortcut_customization.mojom.PolicyUpdatedObserverSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_GetAcceleratorLayoutInfos_ParamsSpec, 'ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_GetAcceleratorLayoutInfos_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_GetAcceleratorLayoutInfos_ResponseParamsSpec, 'ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_GetAcceleratorLayoutInfos_ResponseParams', [
      mojo.internal.StructField('arg_layout_infos', 0, 0, mojo.internal.Array(mojo.internal.bindings.ash.mojom.AcceleratorLayoutInfoSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_PreventProcessingAccelerators_ParamsSpec, 'ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_PreventProcessingAccelerators_Params', [
      mojo.internal.StructField('arg_prevent_processing_accelerators', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_PreventProcessingAccelerators_ResponseParamsSpec, 'ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_PreventProcessingAccelerators_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_AddAccelerator_ParamsSpec, 'ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_AddAccelerator_Params', [
      mojo.internal.StructField('arg_source', 0, 0, mojo.internal.bindings.ash.mojom.AcceleratorSourceSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_accelerator', 8, 0, mojo.internal.bindings.mojo.internal.bindings.ash.shortcut_customization.mojom.SimpleAcceleratorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_action_id', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_AddAccelerator_ResponseParamsSpec, 'ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_AddAccelerator_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.mojo.internal.bindings.ash.shortcut_customization.mojom.AcceleratorResultDataSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_RemoveAccelerator_ParamsSpec, 'ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_RemoveAccelerator_Params', [
      mojo.internal.StructField('arg_source', 0, 0, mojo.internal.bindings.ash.mojom.AcceleratorSourceSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_accelerator', 8, 0, mojo.internal.bindings.mojo.internal.bindings.ash.shortcut_customization.mojom.SimpleAcceleratorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_action_id', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_RemoveAccelerator_ResponseParamsSpec, 'ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_RemoveAccelerator_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.mojo.internal.bindings.ash.shortcut_customization.mojom.AcceleratorResultDataSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_ReplaceAccelerator_ParamsSpec, 'ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_ReplaceAccelerator_Params', [
      mojo.internal.StructField('arg_source', 0, 0, mojo.internal.bindings.ash.mojom.AcceleratorSourceSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_old_accelerator', 8, 0, mojo.internal.bindings.mojo.internal.bindings.ash.shortcut_customization.mojom.SimpleAcceleratorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_new_accelerator', 16, 0, mojo.internal.bindings.mojo.internal.bindings.ash.shortcut_customization.mojom.SimpleAcceleratorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_action_id', 24, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_ReplaceAccelerator_ResponseParamsSpec, 'ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_ReplaceAccelerator_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.mojo.internal.bindings.ash.shortcut_customization.mojom.AcceleratorResultDataSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_RestoreDefault_ParamsSpec, 'ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_RestoreDefault_Params', [
      mojo.internal.StructField('arg_source', 0, 0, mojo.internal.bindings.ash.mojom.AcceleratorSourceSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_action_id', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_RestoreDefault_ResponseParamsSpec, 'ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_RestoreDefault_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.mojo.internal.bindings.ash.shortcut_customization.mojom.AcceleratorResultDataSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_RestoreAllDefaults_ParamsSpec, 'ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_RestoreAllDefaults_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_RestoreAllDefaults_ResponseParamsSpec, 'ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_RestoreAllDefaults_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.mojo.internal.bindings.ash.shortcut_customization.mojom.AcceleratorResultDataSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_RecordUserAction_ParamsSpec, 'ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_RecordUserAction_Params', [
      mojo.internal.StructField('arg_user_action', 0, 0, mojo.internal.bindings.mojo.internal.bindings.ash.shortcut_customization.mojom.UserActionSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_RecordMainCategoryNavigation_ParamsSpec, 'ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_RecordMainCategoryNavigation_Params', [
      mojo.internal.StructField('arg_category', 0, 0, mojo.internal.bindings.ash.mojom.AcceleratorCategorySpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_RecordEditDialogCompletedActions_ParamsSpec, 'ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_RecordEditDialogCompletedActions_Params', [
      mojo.internal.StructField('arg_completed_actions', 0, 0, mojo.internal.bindings.mojo.internal.bindings.ash.shortcut_customization.mojom.EditDialogCompletedActionsSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_RecordAddOrEditSubactions_ParamsSpec, 'ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_RecordAddOrEditSubactions_Params', [
      mojo.internal.StructField('arg_subactions', 0, 0, mojo.internal.bindings.mojo.internal.bindings.ash.shortcut_customization.mojom.SubactionsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_is_add', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_HasCustomAccelerators_ParamsSpec, 'ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_HasCustomAccelerators_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_HasCustomAccelerators_ResponseParamsSpec, 'ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_HasCustomAccelerators_ResponseParams', [
      mojo.internal.StructField('arg_has_custom_accelerators', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.ash.shortcut_customization.mojom.AcceleratorConfigurationProviderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.ash.shortcut_customization.mojom.AcceleratorConfigurationProviderRemote = class {
  static get $interfaceName() {
    return 'ash.shortcut_customization.mojom.AcceleratorConfigurationProvider';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.ash.shortcut_customization.mojom.AcceleratorConfigurationProviderPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.ash.shortcut_customization.mojom.AcceleratorConfigurationProviderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  isMutable(arg_source) {
    return this.$.isMutable(arg_source);
  }
  isCustomizationAllowedByPolicy() {
    return this.$.isCustomizationAllowedByPolicy();
  }
  getMetaKeyToDisplay() {
    return this.$.getMetaKeyToDisplay();
  }
  getConflictAccelerator(arg_source, arg_action_id, arg_accelerator) {
    return this.$.getConflictAccelerator(arg_source, arg_action_id, arg_accelerator);
  }
  getDefaultAcceleratorsForId(arg_action_id) {
    return this.$.getDefaultAcceleratorsForId(arg_action_id);
  }
  getAccelerators() {
    return this.$.getAccelerators();
  }
  addObserver(arg_observer) {
    return this.$.addObserver(arg_observer);
  }
  addPolicyObserver(arg_observer) {
    return this.$.addPolicyObserver(arg_observer);
  }
  getAcceleratorLayoutInfos() {
    return this.$.getAcceleratorLayoutInfos();
  }
  preventProcessingAccelerators(arg_prevent_processing_accelerators) {
    return this.$.preventProcessingAccelerators(arg_prevent_processing_accelerators);
  }
  addAccelerator(arg_source, arg_action_id, arg_accelerator) {
    return this.$.addAccelerator(arg_source, arg_action_id, arg_accelerator);
  }
  removeAccelerator(arg_source, arg_action_id, arg_accelerator) {
    return this.$.removeAccelerator(arg_source, arg_action_id, arg_accelerator);
  }
  replaceAccelerator(arg_source, arg_action_id, arg_old_accelerator, arg_new_accelerator) {
    return this.$.replaceAccelerator(arg_source, arg_action_id, arg_old_accelerator, arg_new_accelerator);
  }
  restoreDefault(arg_source, arg_action_id) {
    return this.$.restoreDefault(arg_source, arg_action_id);
  }
  restoreAllDefaults() {
    return this.$.restoreAllDefaults();
  }
  recordUserAction(arg_user_action) {
    return this.$.recordUserAction(arg_user_action);
  }
  recordMainCategoryNavigation(arg_category) {
    return this.$.recordMainCategoryNavigation(arg_category);
  }
  recordEditDialogCompletedActions(arg_completed_actions) {
    return this.$.recordEditDialogCompletedActions(arg_completed_actions);
  }
  recordAddOrEditSubactions(arg_is_add, arg_subactions) {
    return this.$.recordAddOrEditSubactions(arg_is_add, arg_subactions);
  }
  hasCustomAccelerators() {
    return this.$.hasCustomAccelerators();
  }
};

mojo.internal.bindings.ash.shortcut_customization.mojom.AcceleratorConfigurationProviderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('AcceleratorConfigurationProvider', [
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
      { explicit: null },
    ]);
  }

  isMutable(arg_source) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_IsMutable_ParamsSpec,
      mojo.internal.bindings.ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_IsMutable_ResponseParamsSpec,
      [arg_source],
      false);
  }

  isCustomizationAllowedByPolicy() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_IsCustomizationAllowedByPolicy_ParamsSpec,
      mojo.internal.bindings.ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_IsCustomizationAllowedByPolicy_ResponseParamsSpec,
      [],
      false);
  }

  getMetaKeyToDisplay() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_GetMetaKeyToDisplay_ParamsSpec,
      mojo.internal.bindings.ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_GetMetaKeyToDisplay_ResponseParamsSpec,
      [],
      false);
  }

  getConflictAccelerator(arg_source, arg_action_id, arg_accelerator) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_GetConflictAccelerator_ParamsSpec,
      mojo.internal.bindings.ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_GetConflictAccelerator_ResponseParamsSpec,
      [arg_source, arg_action_id, arg_accelerator],
      false);
  }

  getDefaultAcceleratorsForId(arg_action_id) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_GetDefaultAcceleratorsForId_ParamsSpec,
      mojo.internal.bindings.ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_GetDefaultAcceleratorsForId_ResponseParamsSpec,
      [arg_action_id],
      false);
  }

  getAccelerators() {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojo.internal.bindings.ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_GetAccelerators_ParamsSpec,
      mojo.internal.bindings.ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_GetAccelerators_ResponseParamsSpec,
      [],
      false);
  }

  addObserver(arg_observer) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      mojo.internal.bindings.ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_AddObserver_ParamsSpec,
      null,
      [arg_observer],
      false);
  }

  addPolicyObserver(arg_observer) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      mojo.internal.bindings.ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_AddPolicyObserver_ParamsSpec,
      null,
      [arg_observer],
      false);
  }

  getAcceleratorLayoutInfos() {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      mojo.internal.bindings.ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_GetAcceleratorLayoutInfos_ParamsSpec,
      mojo.internal.bindings.ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_GetAcceleratorLayoutInfos_ResponseParamsSpec,
      [],
      false);
  }

  preventProcessingAccelerators(arg_prevent_processing_accelerators) {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      mojo.internal.bindings.ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_PreventProcessingAccelerators_ParamsSpec,
      mojo.internal.bindings.ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_PreventProcessingAccelerators_ResponseParamsSpec,
      [arg_prevent_processing_accelerators],
      false);
  }

  addAccelerator(arg_source, arg_action_id, arg_accelerator) {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      mojo.internal.bindings.ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_AddAccelerator_ParamsSpec,
      mojo.internal.bindings.ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_AddAccelerator_ResponseParamsSpec,
      [arg_source, arg_action_id, arg_accelerator],
      false);
  }

  removeAccelerator(arg_source, arg_action_id, arg_accelerator) {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      mojo.internal.bindings.ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_RemoveAccelerator_ParamsSpec,
      mojo.internal.bindings.ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_RemoveAccelerator_ResponseParamsSpec,
      [arg_source, arg_action_id, arg_accelerator],
      false);
  }

  replaceAccelerator(arg_source, arg_action_id, arg_old_accelerator, arg_new_accelerator) {
    return this.proxy.sendMessage(
      this.ordinals[12],  // ordinal
      mojo.internal.bindings.ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_ReplaceAccelerator_ParamsSpec,
      mojo.internal.bindings.ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_ReplaceAccelerator_ResponseParamsSpec,
      [arg_source, arg_action_id, arg_old_accelerator, arg_new_accelerator],
      false);
  }

  restoreDefault(arg_source, arg_action_id) {
    return this.proxy.sendMessage(
      this.ordinals[13],  // ordinal
      mojo.internal.bindings.ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_RestoreDefault_ParamsSpec,
      mojo.internal.bindings.ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_RestoreDefault_ResponseParamsSpec,
      [arg_source, arg_action_id],
      false);
  }

  restoreAllDefaults() {
    return this.proxy.sendMessage(
      this.ordinals[14],  // ordinal
      mojo.internal.bindings.ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_RestoreAllDefaults_ParamsSpec,
      mojo.internal.bindings.ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_RestoreAllDefaults_ResponseParamsSpec,
      [],
      false);
  }

  recordUserAction(arg_user_action) {
    return this.proxy.sendMessage(
      this.ordinals[15],  // ordinal
      mojo.internal.bindings.ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_RecordUserAction_ParamsSpec,
      null,
      [arg_user_action],
      false);
  }

  recordMainCategoryNavigation(arg_category) {
    return this.proxy.sendMessage(
      this.ordinals[16],  // ordinal
      mojo.internal.bindings.ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_RecordMainCategoryNavigation_ParamsSpec,
      null,
      [arg_category],
      false);
  }

  recordEditDialogCompletedActions(arg_completed_actions) {
    return this.proxy.sendMessage(
      this.ordinals[17],  // ordinal
      mojo.internal.bindings.ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_RecordEditDialogCompletedActions_ParamsSpec,
      null,
      [arg_completed_actions],
      false);
  }

  recordAddOrEditSubactions(arg_is_add, arg_subactions) {
    return this.proxy.sendMessage(
      this.ordinals[18],  // ordinal
      mojo.internal.bindings.ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_RecordAddOrEditSubactions_ParamsSpec,
      null,
      [arg_is_add, arg_subactions],
      false);
  }

  hasCustomAccelerators() {
    return this.proxy.sendMessage(
      this.ordinals[19],  // ordinal
      mojo.internal.bindings.ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_HasCustomAccelerators_ParamsSpec,
      mojo.internal.bindings.ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_HasCustomAccelerators_ResponseParamsSpec,
      [],
      false);
  }

};

mojo.internal.bindings.ash.shortcut_customization.mojom.AcceleratorConfigurationProvider.getRemote = function() {
  let remote = new mojo.internal.bindings.ash.shortcut_customization.mojom.AcceleratorConfigurationProviderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.shortcut_customization.mojom.AcceleratorConfigurationProvider',
    'context');
  return remote.$;
};

mojo.internal.bindings.ash.shortcut_customization.mojom.AcceleratorConfigurationProviderReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('AcceleratorConfigurationProvider', [
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
        
        // Try Method 0: IsMutable
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_IsMutable_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> IsMutable (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: IsCustomizationAllowedByPolicy
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_IsCustomizationAllowedByPolicy_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> IsCustomizationAllowedByPolicy (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: GetMetaKeyToDisplay
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_GetMetaKeyToDisplay_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetMetaKeyToDisplay (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: GetConflictAccelerator
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_GetConflictAccelerator_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetConflictAccelerator (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: GetDefaultAcceleratorsForId
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_GetDefaultAcceleratorsForId_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetDefaultAcceleratorsForId (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: GetAccelerators
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_GetAccelerators_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetAccelerators (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: AddObserver
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_AddObserver_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AddObserver (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: AddPolicyObserver
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_AddPolicyObserver_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AddPolicyObserver (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: GetAcceleratorLayoutInfos
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_GetAcceleratorLayoutInfos_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetAcceleratorLayoutInfos (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
           }
        }
        // Try Method 9: PreventProcessingAccelerators
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_PreventProcessingAccelerators_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> PreventProcessingAccelerators (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 9 failed:', e);
           }
        }
        // Try Method 10: AddAccelerator
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_AddAccelerator_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AddAccelerator (10)');
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 10 failed:', e);
           }
        }
        // Try Method 11: RemoveAccelerator
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_RemoveAccelerator_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RemoveAccelerator (11)');
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 11 failed:', e);
           }
        }
        // Try Method 12: ReplaceAccelerator
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_ReplaceAccelerator_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ReplaceAccelerator (12)');
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 12 failed:', e);
           }
        }
        // Try Method 13: RestoreDefault
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_RestoreDefault_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RestoreDefault (13)');
             this.mapOrdinal(header.ordinal, 13);
             dispatchId = 13;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 13 failed:', e);
           }
        }
        // Try Method 14: RestoreAllDefaults
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_RestoreAllDefaults_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RestoreAllDefaults (14)');
             this.mapOrdinal(header.ordinal, 14);
             dispatchId = 14;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 14 failed:', e);
           }
        }
        // Try Method 15: RecordUserAction
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_RecordUserAction_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RecordUserAction (15)');
             this.mapOrdinal(header.ordinal, 15);
             dispatchId = 15;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 15 failed:', e);
           }
        }
        // Try Method 16: RecordMainCategoryNavigation
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_RecordMainCategoryNavigation_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RecordMainCategoryNavigation (16)');
             this.mapOrdinal(header.ordinal, 16);
             dispatchId = 16;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 16 failed:', e);
           }
        }
        // Try Method 17: RecordEditDialogCompletedActions
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_RecordEditDialogCompletedActions_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RecordEditDialogCompletedActions (17)');
             this.mapOrdinal(header.ordinal, 17);
             dispatchId = 17;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 17 failed:', e);
           }
        }
        // Try Method 18: RecordAddOrEditSubactions
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_RecordAddOrEditSubactions_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RecordAddOrEditSubactions (18)');
             this.mapOrdinal(header.ordinal, 18);
             dispatchId = 18;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 18 failed:', e);
           }
        }
        // Try Method 19: HasCustomAccelerators
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_HasCustomAccelerators_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> HasCustomAccelerators (19)');
             this.mapOrdinal(header.ordinal, 19);
             dispatchId = 19;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 19 failed:', e);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_IsMutable_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.isMutable');
          const result = this.impl.isMutable(params.arg_source);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_IsMutable_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] IsMutable FAILED:', e));
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_IsCustomizationAllowedByPolicy_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.isCustomizationAllowedByPolicy');
          const result = this.impl.isCustomizationAllowedByPolicy();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_IsCustomizationAllowedByPolicy_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] IsCustomizationAllowedByPolicy FAILED:', e));
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_GetMetaKeyToDisplay_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getMetaKeyToDisplay');
          const result = this.impl.getMetaKeyToDisplay();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_GetMetaKeyToDisplay_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetMetaKeyToDisplay FAILED:', e));
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_GetConflictAccelerator_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getConflictAccelerator');
          const result = this.impl.getConflictAccelerator(params.arg_source, params.arg_action_id, params.arg_accelerator);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_GetConflictAccelerator_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetConflictAccelerator FAILED:', e));
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_GetDefaultAcceleratorsForId_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getDefaultAcceleratorsForId');
          const result = this.impl.getDefaultAcceleratorsForId(params.arg_action_id);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_GetDefaultAcceleratorsForId_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetDefaultAcceleratorsForId FAILED:', e));
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_GetAccelerators_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getAccelerators');
          const result = this.impl.getAccelerators();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_GetAccelerators_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetAccelerators FAILED:', e));
          }
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_AddObserver_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.addObserver');
          const result = this.impl.addObserver(params.arg_observer);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_AddPolicyObserver_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.addPolicyObserver');
          const result = this.impl.addPolicyObserver(params.arg_observer);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_GetAcceleratorLayoutInfos_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getAcceleratorLayoutInfos');
          const result = this.impl.getAcceleratorLayoutInfos();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_GetAcceleratorLayoutInfos_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetAcceleratorLayoutInfos FAILED:', e));
          }
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_PreventProcessingAccelerators_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.preventProcessingAccelerators');
          const result = this.impl.preventProcessingAccelerators(params.arg_prevent_processing_accelerators);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_PreventProcessingAccelerators_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] PreventProcessingAccelerators FAILED:', e));
          }
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_AddAccelerator_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.addAccelerator');
          const result = this.impl.addAccelerator(params.arg_source, params.arg_action_id, params.arg_accelerator);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_AddAccelerator_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] AddAccelerator FAILED:', e));
          }
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_RemoveAccelerator_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.removeAccelerator');
          const result = this.impl.removeAccelerator(params.arg_source, params.arg_action_id, params.arg_accelerator);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_RemoveAccelerator_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] RemoveAccelerator FAILED:', e));
          }
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_ReplaceAccelerator_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.replaceAccelerator');
          const result = this.impl.replaceAccelerator(params.arg_source, params.arg_action_id, params.arg_old_accelerator, params.arg_new_accelerator);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_ReplaceAccelerator_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] ReplaceAccelerator FAILED:', e));
          }
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_RestoreDefault_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.restoreDefault');
          const result = this.impl.restoreDefault(params.arg_source, params.arg_action_id);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_RestoreDefault_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] RestoreDefault FAILED:', e));
          }
          break;
        }
        case 14: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_RestoreAllDefaults_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.restoreAllDefaults');
          const result = this.impl.restoreAllDefaults();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_RestoreAllDefaults_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] RestoreAllDefaults FAILED:', e));
          }
          break;
        }
        case 15: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_RecordUserAction_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.recordUserAction');
          const result = this.impl.recordUserAction(params.arg_user_action);
          break;
        }
        case 16: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_RecordMainCategoryNavigation_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.recordMainCategoryNavigation');
          const result = this.impl.recordMainCategoryNavigation(params.arg_category);
          break;
        }
        case 17: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_RecordEditDialogCompletedActions_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.recordEditDialogCompletedActions');
          const result = this.impl.recordEditDialogCompletedActions(params.arg_completed_actions);
          break;
        }
        case 18: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_RecordAddOrEditSubactions_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.recordAddOrEditSubactions');
          const result = this.impl.recordAddOrEditSubactions(params.arg_is_add, params.arg_subactions);
          break;
        }
        case 19: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_HasCustomAccelerators_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.hasCustomAccelerators');
          const result = this.impl.hasCustomAccelerators();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_HasCustomAccelerators_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] HasCustomAccelerators FAILED:', e));
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

mojo.internal.bindings.ash.shortcut_customization.mojom.AcceleratorConfigurationProviderReceiver = mojo.internal.bindings.ash.shortcut_customization.mojom.AcceleratorConfigurationProviderReceiver;

mojo.internal.bindings.ash.shortcut_customization.mojom.AcceleratorConfigurationProviderPtr = mojo.internal.bindings.ash.shortcut_customization.mojom.AcceleratorConfigurationProviderRemote;
mojo.internal.bindings.ash.shortcut_customization.mojom.AcceleratorConfigurationProviderRequest = mojo.internal.bindings.ash.shortcut_customization.mojom.AcceleratorConfigurationProviderPendingReceiver;

