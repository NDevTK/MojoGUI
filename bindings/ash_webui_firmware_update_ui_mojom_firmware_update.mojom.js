// Auto-generated MojoJS binding
 // Source: chromium_src/ash/webui/firmware_update_ui/mojom/firmware_update.mojom
 // Module: ash.firmware_update.mojom

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
mojo.internal.bindings.ash.firmware_update = mojo.internal.bindings.ash.firmware_update || {};
mojo.internal.bindings.ash.firmware_update.mojom = mojo.internal.bindings.ash.firmware_update.mojom || {};
mojo.internal.bindings.mojo_base = mojo.internal.bindings.mojo_base || {};

mojo.internal.bindings.ash.firmware_update.mojom.UpdatePrioritySpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.ash.firmware_update.mojom.UpdateStateSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.ash.firmware_update.mojom.DeviceRequestIdSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.ash.firmware_update.mojom.DeviceRequestKindSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.ash.firmware_update.mojom.FirmwareUpdateSpec = { $: {} };
mojo.internal.bindings.ash.firmware_update.mojom.InstallationProgressSpec = { $: {} };
mojo.internal.bindings.ash.firmware_update.mojom.DeviceRequestSpec = { $: {} };
mojo.internal.bindings.ash.firmware_update.mojom.UpdateObserver = {};
mojo.internal.bindings.ash.firmware_update.mojom.UpdateObserver.$interfaceName = 'ash.firmware_update.mojom.UpdateObserver';
mojo.internal.bindings.ash.firmware_update.mojom.UpdateObserver_OnUpdateListChanged_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.firmware_update.mojom.DeviceRequestObserver = {};
mojo.internal.bindings.ash.firmware_update.mojom.DeviceRequestObserver.$interfaceName = 'ash.firmware_update.mojom.DeviceRequestObserver';
mojo.internal.bindings.ash.firmware_update.mojom.DeviceRequestObserver_OnDeviceRequest_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.firmware_update.mojom.UpdateProgressObserver = {};
mojo.internal.bindings.ash.firmware_update.mojom.UpdateProgressObserver.$interfaceName = 'ash.firmware_update.mojom.UpdateProgressObserver';
mojo.internal.bindings.ash.firmware_update.mojom.UpdateProgressObserver_OnStatusChanged_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.firmware_update.mojom.UpdateProvider = {};
mojo.internal.bindings.ash.firmware_update.mojom.UpdateProvider.$interfaceName = 'ash.firmware_update.mojom.UpdateProvider';
mojo.internal.bindings.ash.firmware_update.mojom.UpdateProvider_ObservePeripheralUpdates_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.firmware_update.mojom.UpdateProvider_PrepareForUpdate_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.firmware_update.mojom.UpdateProvider_PrepareForUpdate_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.firmware_update.mojom.UpdateProvider_FetchInProgressUpdate_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.firmware_update.mojom.UpdateProvider_FetchInProgressUpdate_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.firmware_update.mojom.InstallController = {};
mojo.internal.bindings.ash.firmware_update.mojom.InstallController.$interfaceName = 'ash.firmware_update.mojom.InstallController';
mojo.internal.bindings.ash.firmware_update.mojom.InstallController_BeginUpdate_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.firmware_update.mojom.InstallController_AddDeviceRequestObserver_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.firmware_update.mojom.InstallController_AddUpdateProgressObserver_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.firmware_update.mojom.SystemUtils = {};
mojo.internal.bindings.ash.firmware_update.mojom.SystemUtils.$interfaceName = 'ash.firmware_update.mojom.SystemUtils';
mojo.internal.bindings.ash.firmware_update.mojom.SystemUtils_Restart_ParamsSpec = { $: {} };

// Enum: UpdatePriority
mojo.internal.bindings.ash.firmware_update.mojom.UpdatePriority = {
  kLow: 0,
  kMedium: 1,
  kHigh: 2,
  kCritical: 3,
};

// Enum: UpdateState
mojo.internal.bindings.ash.firmware_update.mojom.UpdateState = {
  kUnknown: 0,
  kIdle: 1,
  kUpdating: 2,
  kRestarting: 3,
  kFailed: 4,
  kSuccess: 5,
  kWaitingForUser: 6,
};

// Enum: DeviceRequestId
mojo.internal.bindings.ash.firmware_update.mojom.DeviceRequestId = {
  kDoNotPowerOff: 0,
  kReplugInstall: 1,
  kInsertUSBCable: 2,
  kRemoveUSBCable: 3,
  kPressUnlock: 4,
  kRemoveReplug: 5,
  kReplugPower: 6,
};

// Enum: DeviceRequestKind
mojo.internal.bindings.ash.firmware_update.mojom.DeviceRequestKind = {
  kUnknown: 0,
  kPost: 1,
  kImmediate: 2,
};

// Struct: FirmwareUpdate
mojo.internal.Struct(
    mojo.internal.bindings.ash.firmware_update.mojom.FirmwareUpdateSpec, 'ash.firmware_update.mojom.FirmwareUpdate', [
      mojo.internal.StructField('arg_device_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_device_name', 8, 0, mojo.internal.bindings.mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_device_version', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_device_description', 24, 0, mojo.internal.bindings.mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_priority', 32, 0, mojo.internal.bindings.ash.firmware_update.mojom.UpdatePrioritySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_filepath', 40, 0, mojo.internal.bindings.mojo_base.mojom.FilePathSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_checksum', 48, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_needs_reboot', 56, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 72]]);

// Struct: InstallationProgress
mojo.internal.Struct(
    mojo.internal.bindings.ash.firmware_update.mojom.InstallationProgressSpec, 'ash.firmware_update.mojom.InstallationProgress', [
      mojo.internal.StructField('arg_state', 0, 0, mojo.internal.bindings.ash.firmware_update.mojom.UpdateStateSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_percentage', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: DeviceRequest
mojo.internal.Struct(
    mojo.internal.bindings.ash.firmware_update.mojom.DeviceRequestSpec, 'ash.firmware_update.mojom.DeviceRequest', [
      mojo.internal.StructField('arg_id', 0, 0, mojo.internal.bindings.ash.firmware_update.mojom.DeviceRequestIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_kind', 8, 0, mojo.internal.bindings.ash.firmware_update.mojom.DeviceRequestKindSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: UpdateObserver
mojo.internal.Struct(
    mojo.internal.bindings.ash.firmware_update.mojom.UpdateObserver_OnUpdateListChanged_ParamsSpec, 'ash.firmware_update.mojom.UpdateObserver_OnUpdateListChanged_Params', [
      mojo.internal.StructField('arg_firmware_updates', 0, 0, mojo.internal.Array(mojo.internal.bindings.ash.firmware_update.mojom.FirmwareUpdateSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.ash.firmware_update.mojom.UpdateObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.ash.firmware_update.mojom.UpdateObserverRemote = class {
  static get $interfaceName() {
    return 'ash.firmware_update.mojom.UpdateObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.ash.firmware_update.mojom.UpdateObserverPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.ash.firmware_update.mojom.UpdateObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onUpdateListChanged(arg_firmware_updates) {
    return this.$.onUpdateListChanged(arg_firmware_updates);
  }
};

mojo.internal.bindings.ash.firmware_update.mojom.UpdateObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('UpdateObserver', [
      { explicit: null },
    ]);
  }

  onUpdateListChanged(arg_firmware_updates) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.ash.firmware_update.mojom.UpdateObserver_OnUpdateListChanged_ParamsSpec,
      null,
      [arg_firmware_updates],
      false);
  }

};

mojo.internal.bindings.ash.firmware_update.mojom.UpdateObserver.getRemote = function() {
  let remote = new mojo.internal.bindings.ash.firmware_update.mojom.UpdateObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.firmware_update.mojom.UpdateObserver',
    'context');
  return remote.$;
};

mojo.internal.bindings.ash.firmware_update.mojom.UpdateObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('UpdateObserver', [
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
        
        // Try Method 0: OnUpdateListChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.firmware_update.mojom.UpdateObserver_OnUpdateListChanged_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnUpdateListChanged (0)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.firmware_update.mojom.UpdateObserver_OnUpdateListChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onUpdateListChanged');
          const result = this.impl.onUpdateListChanged(params.arg_firmware_updates);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.ash.firmware_update.mojom.UpdateObserverReceiver = mojo.internal.bindings.ash.firmware_update.mojom.UpdateObserverReceiver;

mojo.internal.bindings.ash.firmware_update.mojom.UpdateObserverPtr = mojo.internal.bindings.ash.firmware_update.mojom.UpdateObserverRemote;
mojo.internal.bindings.ash.firmware_update.mojom.UpdateObserverRequest = mojo.internal.bindings.ash.firmware_update.mojom.UpdateObserverPendingReceiver;


// Interface: DeviceRequestObserver
mojo.internal.Struct(
    mojo.internal.bindings.ash.firmware_update.mojom.DeviceRequestObserver_OnDeviceRequest_ParamsSpec, 'ash.firmware_update.mojom.DeviceRequestObserver_OnDeviceRequest_Params', [
      mojo.internal.StructField('arg_request', 0, 0, mojo.internal.bindings.ash.firmware_update.mojom.DeviceRequestSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.ash.firmware_update.mojom.DeviceRequestObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.ash.firmware_update.mojom.DeviceRequestObserverRemote = class {
  static get $interfaceName() {
    return 'ash.firmware_update.mojom.DeviceRequestObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.ash.firmware_update.mojom.DeviceRequestObserverPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.ash.firmware_update.mojom.DeviceRequestObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onDeviceRequest(arg_request) {
    return this.$.onDeviceRequest(arg_request);
  }
};

mojo.internal.bindings.ash.firmware_update.mojom.DeviceRequestObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('DeviceRequestObserver', [
      { explicit: null },
    ]);
  }

  onDeviceRequest(arg_request) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.ash.firmware_update.mojom.DeviceRequestObserver_OnDeviceRequest_ParamsSpec,
      null,
      [arg_request],
      false);
  }

};

mojo.internal.bindings.ash.firmware_update.mojom.DeviceRequestObserver.getRemote = function() {
  let remote = new mojo.internal.bindings.ash.firmware_update.mojom.DeviceRequestObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.firmware_update.mojom.DeviceRequestObserver',
    'context');
  return remote.$;
};

mojo.internal.bindings.ash.firmware_update.mojom.DeviceRequestObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('DeviceRequestObserver', [
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
        
        // Try Method 0: OnDeviceRequest
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.firmware_update.mojom.DeviceRequestObserver_OnDeviceRequest_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnDeviceRequest (0)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.firmware_update.mojom.DeviceRequestObserver_OnDeviceRequest_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onDeviceRequest');
          const result = this.impl.onDeviceRequest(params.arg_request);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.ash.firmware_update.mojom.DeviceRequestObserverReceiver = mojo.internal.bindings.ash.firmware_update.mojom.DeviceRequestObserverReceiver;

mojo.internal.bindings.ash.firmware_update.mojom.DeviceRequestObserverPtr = mojo.internal.bindings.ash.firmware_update.mojom.DeviceRequestObserverRemote;
mojo.internal.bindings.ash.firmware_update.mojom.DeviceRequestObserverRequest = mojo.internal.bindings.ash.firmware_update.mojom.DeviceRequestObserverPendingReceiver;


// Interface: UpdateProgressObserver
mojo.internal.Struct(
    mojo.internal.bindings.ash.firmware_update.mojom.UpdateProgressObserver_OnStatusChanged_ParamsSpec, 'ash.firmware_update.mojom.UpdateProgressObserver_OnStatusChanged_Params', [
      mojo.internal.StructField('arg_update', 0, 0, mojo.internal.bindings.ash.firmware_update.mojom.InstallationProgressSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.ash.firmware_update.mojom.UpdateProgressObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.ash.firmware_update.mojom.UpdateProgressObserverRemote = class {
  static get $interfaceName() {
    return 'ash.firmware_update.mojom.UpdateProgressObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.ash.firmware_update.mojom.UpdateProgressObserverPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.ash.firmware_update.mojom.UpdateProgressObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onStatusChanged(arg_update) {
    return this.$.onStatusChanged(arg_update);
  }
};

mojo.internal.bindings.ash.firmware_update.mojom.UpdateProgressObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('UpdateProgressObserver', [
      { explicit: null },
    ]);
  }

  onStatusChanged(arg_update) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.ash.firmware_update.mojom.UpdateProgressObserver_OnStatusChanged_ParamsSpec,
      null,
      [arg_update],
      false);
  }

};

mojo.internal.bindings.ash.firmware_update.mojom.UpdateProgressObserver.getRemote = function() {
  let remote = new mojo.internal.bindings.ash.firmware_update.mojom.UpdateProgressObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.firmware_update.mojom.UpdateProgressObserver',
    'context');
  return remote.$;
};

mojo.internal.bindings.ash.firmware_update.mojom.UpdateProgressObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('UpdateProgressObserver', [
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
        
        // Try Method 0: OnStatusChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.firmware_update.mojom.UpdateProgressObserver_OnStatusChanged_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnStatusChanged (0)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.firmware_update.mojom.UpdateProgressObserver_OnStatusChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onStatusChanged');
          const result = this.impl.onStatusChanged(params.arg_update);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.ash.firmware_update.mojom.UpdateProgressObserverReceiver = mojo.internal.bindings.ash.firmware_update.mojom.UpdateProgressObserverReceiver;

mojo.internal.bindings.ash.firmware_update.mojom.UpdateProgressObserverPtr = mojo.internal.bindings.ash.firmware_update.mojom.UpdateProgressObserverRemote;
mojo.internal.bindings.ash.firmware_update.mojom.UpdateProgressObserverRequest = mojo.internal.bindings.ash.firmware_update.mojom.UpdateProgressObserverPendingReceiver;


// Interface: UpdateProvider
mojo.internal.Struct(
    mojo.internal.bindings.ash.firmware_update.mojom.UpdateProvider_ObservePeripheralUpdates_ParamsSpec, 'ash.firmware_update.mojom.UpdateProvider_ObservePeripheralUpdates_Params', [
      mojo.internal.StructField('arg_observer', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.ash.firmware_update.mojom.UpdateObserverSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.firmware_update.mojom.UpdateProvider_PrepareForUpdate_ParamsSpec, 'ash.firmware_update.mojom.UpdateProvider_PrepareForUpdate_Params', [
      mojo.internal.StructField('arg_device_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.firmware_update.mojom.UpdateProvider_PrepareForUpdate_ResponseParamsSpec, 'ash.firmware_update.mojom.UpdateProvider_PrepareForUpdate_ResponseParams', [
      mojo.internal.StructField('arg_controller', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.ash.firmware_update.mojom.InstallControllerSpec), null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.firmware_update.mojom.UpdateProvider_FetchInProgressUpdate_ParamsSpec, 'ash.firmware_update.mojom.UpdateProvider_FetchInProgressUpdate_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.firmware_update.mojom.UpdateProvider_FetchInProgressUpdate_ResponseParamsSpec, 'ash.firmware_update.mojom.UpdateProvider_FetchInProgressUpdate_ResponseParams', [
      mojo.internal.StructField('arg_update', 0, 0, mojo.internal.bindings.ash.firmware_update.mojom.FirmwareUpdateSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.ash.firmware_update.mojom.UpdateProviderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.ash.firmware_update.mojom.UpdateProviderRemote = class {
  static get $interfaceName() {
    return 'ash.firmware_update.mojom.UpdateProvider';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.ash.firmware_update.mojom.UpdateProviderPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.ash.firmware_update.mojom.UpdateProviderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  observePeripheralUpdates(arg_observer) {
    return this.$.observePeripheralUpdates(arg_observer);
  }
  prepareForUpdate(arg_device_id) {
    return this.$.prepareForUpdate(arg_device_id);
  }
  fetchInProgressUpdate() {
    return this.$.fetchInProgressUpdate();
  }
};

mojo.internal.bindings.ash.firmware_update.mojom.UpdateProviderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('UpdateProvider', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  observePeripheralUpdates(arg_observer) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.ash.firmware_update.mojom.UpdateProvider_ObservePeripheralUpdates_ParamsSpec,
      null,
      [arg_observer],
      false);
  }

  prepareForUpdate(arg_device_id) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.ash.firmware_update.mojom.UpdateProvider_PrepareForUpdate_ParamsSpec,
      mojo.internal.bindings.ash.firmware_update.mojom.UpdateProvider_PrepareForUpdate_ResponseParamsSpec,
      [arg_device_id],
      false);
  }

  fetchInProgressUpdate() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.ash.firmware_update.mojom.UpdateProvider_FetchInProgressUpdate_ParamsSpec,
      mojo.internal.bindings.ash.firmware_update.mojom.UpdateProvider_FetchInProgressUpdate_ResponseParamsSpec,
      [],
      false);
  }

};

mojo.internal.bindings.ash.firmware_update.mojom.UpdateProvider.getRemote = function() {
  let remote = new mojo.internal.bindings.ash.firmware_update.mojom.UpdateProviderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.firmware_update.mojom.UpdateProvider',
    'context');
  return remote.$;
};

mojo.internal.bindings.ash.firmware_update.mojom.UpdateProviderReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('UpdateProvider', [
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
        
        // Try Method 0: ObservePeripheralUpdates
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.firmware_update.mojom.UpdateProvider_ObservePeripheralUpdates_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ObservePeripheralUpdates (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: PrepareForUpdate
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.firmware_update.mojom.UpdateProvider_PrepareForUpdate_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> PrepareForUpdate (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: FetchInProgressUpdate
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.firmware_update.mojom.UpdateProvider_FetchInProgressUpdate_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> FetchInProgressUpdate (2)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.firmware_update.mojom.UpdateProvider_ObservePeripheralUpdates_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.observePeripheralUpdates');
          const result = this.impl.observePeripheralUpdates(params.arg_observer);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.firmware_update.mojom.UpdateProvider_PrepareForUpdate_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.prepareForUpdate');
          const result = this.impl.prepareForUpdate(params.arg_device_id);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.firmware_update.mojom.UpdateProvider_PrepareForUpdate_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] PrepareForUpdate FAILED:', e));
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.firmware_update.mojom.UpdateProvider_FetchInProgressUpdate_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.fetchInProgressUpdate');
          const result = this.impl.fetchInProgressUpdate();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.firmware_update.mojom.UpdateProvider_FetchInProgressUpdate_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] FetchInProgressUpdate FAILED:', e));
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

mojo.internal.bindings.ash.firmware_update.mojom.UpdateProviderReceiver = mojo.internal.bindings.ash.firmware_update.mojom.UpdateProviderReceiver;

mojo.internal.bindings.ash.firmware_update.mojom.UpdateProviderPtr = mojo.internal.bindings.ash.firmware_update.mojom.UpdateProviderRemote;
mojo.internal.bindings.ash.firmware_update.mojom.UpdateProviderRequest = mojo.internal.bindings.ash.firmware_update.mojom.UpdateProviderPendingReceiver;


// Interface: InstallController
mojo.internal.Struct(
    mojo.internal.bindings.ash.firmware_update.mojom.InstallController_BeginUpdate_ParamsSpec, 'ash.firmware_update.mojom.InstallController_BeginUpdate_Params', [
      mojo.internal.StructField('arg_device_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_filepath', 8, 0, mojo.internal.bindings.mojo_base.mojom.FilePathSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.firmware_update.mojom.InstallController_AddDeviceRequestObserver_ParamsSpec, 'ash.firmware_update.mojom.InstallController_AddDeviceRequestObserver_Params', [
      mojo.internal.StructField('arg_observer', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.ash.firmware_update.mojom.DeviceRequestObserverSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.firmware_update.mojom.InstallController_AddUpdateProgressObserver_ParamsSpec, 'ash.firmware_update.mojom.InstallController_AddUpdateProgressObserver_Params', [
      mojo.internal.StructField('arg_observer', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.ash.firmware_update.mojom.UpdateProgressObserverSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.ash.firmware_update.mojom.InstallControllerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.ash.firmware_update.mojom.InstallControllerRemote = class {
  static get $interfaceName() {
    return 'ash.firmware_update.mojom.InstallController';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.ash.firmware_update.mojom.InstallControllerPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.ash.firmware_update.mojom.InstallControllerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  beginUpdate(arg_device_id, arg_filepath) {
    return this.$.beginUpdate(arg_device_id, arg_filepath);
  }
  addDeviceRequestObserver(arg_observer) {
    return this.$.addDeviceRequestObserver(arg_observer);
  }
  addUpdateProgressObserver(arg_observer) {
    return this.$.addUpdateProgressObserver(arg_observer);
  }
};

mojo.internal.bindings.ash.firmware_update.mojom.InstallControllerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('InstallController', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  beginUpdate(arg_device_id, arg_filepath) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.ash.firmware_update.mojom.InstallController_BeginUpdate_ParamsSpec,
      null,
      [arg_device_id, arg_filepath],
      false);
  }

  addDeviceRequestObserver(arg_observer) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.ash.firmware_update.mojom.InstallController_AddDeviceRequestObserver_ParamsSpec,
      null,
      [arg_observer],
      false);
  }

  addUpdateProgressObserver(arg_observer) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.ash.firmware_update.mojom.InstallController_AddUpdateProgressObserver_ParamsSpec,
      null,
      [arg_observer],
      false);
  }

};

mojo.internal.bindings.ash.firmware_update.mojom.InstallController.getRemote = function() {
  let remote = new mojo.internal.bindings.ash.firmware_update.mojom.InstallControllerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.firmware_update.mojom.InstallController',
    'context');
  return remote.$;
};

mojo.internal.bindings.ash.firmware_update.mojom.InstallControllerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('InstallController', [
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
        
        // Try Method 0: BeginUpdate
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.firmware_update.mojom.InstallController_BeginUpdate_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> BeginUpdate (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: AddDeviceRequestObserver
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.firmware_update.mojom.InstallController_AddDeviceRequestObserver_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AddDeviceRequestObserver (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: AddUpdateProgressObserver
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.firmware_update.mojom.InstallController_AddUpdateProgressObserver_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AddUpdateProgressObserver (2)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.firmware_update.mojom.InstallController_BeginUpdate_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.beginUpdate');
          const result = this.impl.beginUpdate(params.arg_device_id, params.arg_filepath);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.firmware_update.mojom.InstallController_AddDeviceRequestObserver_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.addDeviceRequestObserver');
          const result = this.impl.addDeviceRequestObserver(params.arg_observer);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.firmware_update.mojom.InstallController_AddUpdateProgressObserver_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.addUpdateProgressObserver');
          const result = this.impl.addUpdateProgressObserver(params.arg_observer);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.ash.firmware_update.mojom.InstallControllerReceiver = mojo.internal.bindings.ash.firmware_update.mojom.InstallControllerReceiver;

mojo.internal.bindings.ash.firmware_update.mojom.InstallControllerPtr = mojo.internal.bindings.ash.firmware_update.mojom.InstallControllerRemote;
mojo.internal.bindings.ash.firmware_update.mojom.InstallControllerRequest = mojo.internal.bindings.ash.firmware_update.mojom.InstallControllerPendingReceiver;


// Interface: SystemUtils
mojo.internal.Struct(
    mojo.internal.bindings.ash.firmware_update.mojom.SystemUtils_Restart_ParamsSpec, 'ash.firmware_update.mojom.SystemUtils_Restart_Params', [
    ],
    [[0, 8]]);

mojo.internal.bindings.ash.firmware_update.mojom.SystemUtilsPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.ash.firmware_update.mojom.SystemUtilsRemote = class {
  static get $interfaceName() {
    return 'ash.firmware_update.mojom.SystemUtils';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.ash.firmware_update.mojom.SystemUtilsPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.ash.firmware_update.mojom.SystemUtilsRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  restart() {
    return this.$.restart();
  }
};

mojo.internal.bindings.ash.firmware_update.mojom.SystemUtilsRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('SystemUtils', [
      { explicit: null },
    ]);
  }

  restart() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.ash.firmware_update.mojom.SystemUtils_Restart_ParamsSpec,
      null,
      [],
      false);
  }

};

mojo.internal.bindings.ash.firmware_update.mojom.SystemUtils.getRemote = function() {
  let remote = new mojo.internal.bindings.ash.firmware_update.mojom.SystemUtilsRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.firmware_update.mojom.SystemUtils',
    'context');
  return remote.$;
};

mojo.internal.bindings.ash.firmware_update.mojom.SystemUtilsReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('SystemUtils', [
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
        
        // Try Method 0: Restart
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.firmware_update.mojom.SystemUtils_Restart_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Restart (0)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.firmware_update.mojom.SystemUtils_Restart_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.restart');
          const result = this.impl.restart();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.ash.firmware_update.mojom.SystemUtilsReceiver = mojo.internal.bindings.ash.firmware_update.mojom.SystemUtilsReceiver;

mojo.internal.bindings.ash.firmware_update.mojom.SystemUtilsPtr = mojo.internal.bindings.ash.firmware_update.mojom.SystemUtilsRemote;
mojo.internal.bindings.ash.firmware_update.mojom.SystemUtilsRequest = mojo.internal.bindings.ash.firmware_update.mojom.SystemUtilsPendingReceiver;

