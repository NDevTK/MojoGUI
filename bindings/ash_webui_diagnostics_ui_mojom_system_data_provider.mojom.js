// Auto-generated MojoJS binding
 // Source: chromium_src/ash/webui/diagnostics_ui/mojom/system_data_provider.mojom
 // Module: ash.diagnostics.mojom

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
mojo.internal.bindings.ash.diagnostics = mojo.internal.bindings.ash.diagnostics || {};
mojo.internal.bindings.ash.diagnostics.mojom = mojo.internal.bindings.ash.diagnostics.mojom || {};
mojo.internal.bindings.mojo_base = mojo.internal.bindings.mojo_base || {};

mojo.internal.bindings.ash.diagnostics.mojom.ExternalPowerSourceSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.ash.diagnostics.mojom.BatteryStateSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.ash.diagnostics.mojom.DeviceCapabilitiesSpec = { $: {} };
mojo.internal.bindings.ash.diagnostics.mojom.VersionInfoSpec = { $: {} };
mojo.internal.bindings.ash.diagnostics.mojom.SystemInfoSpec = { $: {} };
mojo.internal.bindings.ash.diagnostics.mojom.BatteryInfoSpec = { $: {} };
mojo.internal.bindings.ash.diagnostics.mojom.BatteryChargeStatusSpec = { $: {} };
mojo.internal.bindings.ash.diagnostics.mojom.BatteryHealthSpec = { $: {} };
mojo.internal.bindings.ash.diagnostics.mojom.MemoryUsageSpec = { $: {} };
mojo.internal.bindings.ash.diagnostics.mojom.CpuUsageSpec = { $: {} };
mojo.internal.bindings.ash.diagnostics.mojom.BatteryChargeStatusObserver = {};
mojo.internal.bindings.ash.diagnostics.mojom.BatteryChargeStatusObserver.$interfaceName = 'ash.diagnostics.mojom.BatteryChargeStatusObserver';
mojo.internal.bindings.ash.diagnostics.mojom.BatteryChargeStatusObserver_OnBatteryChargeStatusUpdated_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.diagnostics.mojom.BatteryHealthObserver = {};
mojo.internal.bindings.ash.diagnostics.mojom.BatteryHealthObserver.$interfaceName = 'ash.diagnostics.mojom.BatteryHealthObserver';
mojo.internal.bindings.ash.diagnostics.mojom.BatteryHealthObserver_OnBatteryHealthUpdated_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.diagnostics.mojom.MemoryUsageObserver = {};
mojo.internal.bindings.ash.diagnostics.mojom.MemoryUsageObserver.$interfaceName = 'ash.diagnostics.mojom.MemoryUsageObserver';
mojo.internal.bindings.ash.diagnostics.mojom.MemoryUsageObserver_OnMemoryUsageUpdated_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.diagnostics.mojom.CpuUsageObserver = {};
mojo.internal.bindings.ash.diagnostics.mojom.CpuUsageObserver.$interfaceName = 'ash.diagnostics.mojom.CpuUsageObserver';
mojo.internal.bindings.ash.diagnostics.mojom.CpuUsageObserver_OnCpuUsageUpdated_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.diagnostics.mojom.SystemDataProvider = {};
mojo.internal.bindings.ash.diagnostics.mojom.SystemDataProvider.$interfaceName = 'ash.diagnostics.mojom.SystemDataProvider';
mojo.internal.bindings.ash.diagnostics.mojom.SystemDataProvider_GetSystemInfo_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.diagnostics.mojom.SystemDataProvider_GetSystemInfo_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.diagnostics.mojom.SystemDataProvider_GetBatteryInfo_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.diagnostics.mojom.SystemDataProvider_GetBatteryInfo_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.diagnostics.mojom.SystemDataProvider_ObserveBatteryChargeStatus_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.diagnostics.mojom.SystemDataProvider_ObserveBatteryHealth_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.diagnostics.mojom.SystemDataProvider_ObserveMemoryUsage_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.diagnostics.mojom.SystemDataProvider_ObserveCpuUsage_ParamsSpec = { $: {} };

// Enum: ExternalPowerSource
mojo.internal.bindings.ash.diagnostics.mojom.ExternalPowerSource = {
  kAc: 0,
  kUsb: 1,
  kDisconnected: 2,
};

// Enum: BatteryState
mojo.internal.bindings.ash.diagnostics.mojom.BatteryState = {
  kCharging: 0,
  kDischarging: 1,
  kFull: 2,
};

// Struct: DeviceCapabilities
mojo.internal.Struct(
    mojo.internal.bindings.ash.diagnostics.mojom.DeviceCapabilitiesSpec, 'ash.diagnostics.mojom.DeviceCapabilities', [
      mojo.internal.StructField('arg_has_battery', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: VersionInfo
mojo.internal.Struct(
    mojo.internal.bindings.ash.diagnostics.mojom.VersionInfoSpec, 'ash.diagnostics.mojom.VersionInfo', [
      mojo.internal.StructField('arg_milestone_version', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_full_version_string', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: SystemInfo
mojo.internal.Struct(
    mojo.internal.bindings.ash.diagnostics.mojom.SystemInfoSpec, 'ash.diagnostics.mojom.SystemInfo', [
      mojo.internal.StructField('arg_board_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_marketing_name', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_cpu_model_name', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_version_info', 24, 0, mojo.internal.bindings.ash.diagnostics.mojom.VersionInfoSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_device_capabilities', 32, 0, mojo.internal.bindings.ash.diagnostics.mojom.DeviceCapabilitiesSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_total_memory_kib', 40, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_cpu_max_clock_speed_khz', 44, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_cpu_threads_count', 48, 0, mojo.internal.Uint16, 0, false, 0, undefined),
    ],
    [[0, 64]]);

// Struct: BatteryInfo
mojo.internal.Struct(
    mojo.internal.bindings.ash.diagnostics.mojom.BatteryInfoSpec, 'ash.diagnostics.mojom.BatteryInfo', [
      mojo.internal.StructField('arg_manufacturer', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_charge_full_design_milliamp_hours', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: BatteryChargeStatus
mojo.internal.Struct(
    mojo.internal.bindings.ash.diagnostics.mojom.BatteryChargeStatusSpec, 'ash.diagnostics.mojom.BatteryChargeStatus', [
      mojo.internal.StructField('arg_power_time', 0, 0, mojo.internal.bindings.mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_battery_state', 8, 0, mojo.internal.bindings.ash.diagnostics.mojom.BatteryStateSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_power_adapter_status', 16, 0, mojo.internal.bindings.ash.diagnostics.mojom.ExternalPowerSourceSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_current_now_milliamps', 24, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_charge_now_milliamp_hours', 28, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: BatteryHealth
mojo.internal.Struct(
    mojo.internal.bindings.ash.diagnostics.mojom.BatteryHealthSpec, 'ash.diagnostics.mojom.BatteryHealth', [
      mojo.internal.StructField('arg_charge_full_now_milliamp_hours', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_charge_full_design_milliamp_hours', 4, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_cycle_count', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_battery_wear_percentage', 12, 0, mojo.internal.Int8, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: MemoryUsage
mojo.internal.Struct(
    mojo.internal.bindings.ash.diagnostics.mojom.MemoryUsageSpec, 'ash.diagnostics.mojom.MemoryUsage', [
      mojo.internal.StructField('arg_total_memory_kib', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_available_memory_kib', 4, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_free_memory_kib', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: CpuUsage
mojo.internal.Struct(
    mojo.internal.bindings.ash.diagnostics.mojom.CpuUsageSpec, 'ash.diagnostics.mojom.CpuUsage', [
      mojo.internal.StructField('arg_scaling_current_frequency_khz', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_average_cpu_temp_celsius', 4, 0, mojo.internal.Uint16, 0, false, 0, undefined),
      mojo.internal.StructField('arg_percent_usage_user', 6, 0, mojo.internal.Uint8, 0, false, 0, undefined),
      mojo.internal.StructField('arg_percent_usage_system', 7, 0, mojo.internal.Uint8, 0, false, 0, undefined),
      mojo.internal.StructField('arg_percent_usage_free', 8, 0, mojo.internal.Uint8, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: BatteryChargeStatusObserver
mojo.internal.Struct(
    mojo.internal.bindings.ash.diagnostics.mojom.BatteryChargeStatusObserver_OnBatteryChargeStatusUpdated_ParamsSpec, 'ash.diagnostics.mojom.BatteryChargeStatusObserver_OnBatteryChargeStatusUpdated_Params', [
      mojo.internal.StructField('arg_battery_charge_status', 0, 0, mojo.internal.bindings.ash.diagnostics.mojom.BatteryChargeStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.ash.diagnostics.mojom.BatteryChargeStatusObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.ash.diagnostics.mojom.BatteryChargeStatusObserverRemote = class {
  static get $interfaceName() {
    return 'ash.diagnostics.mojom.BatteryChargeStatusObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.ash.diagnostics.mojom.BatteryChargeStatusObserverPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.ash.diagnostics.mojom.BatteryChargeStatusObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onBatteryChargeStatusUpdated(arg_battery_charge_status) {
    return this.$.onBatteryChargeStatusUpdated(arg_battery_charge_status);
  }
};

mojo.internal.bindings.ash.diagnostics.mojom.BatteryChargeStatusObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('BatteryChargeStatusObserver', [
      { explicit: null },
    ]);
  }

  onBatteryChargeStatusUpdated(arg_battery_charge_status) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.ash.diagnostics.mojom.BatteryChargeStatusObserver_OnBatteryChargeStatusUpdated_ParamsSpec,
      null,
      [arg_battery_charge_status],
      false);
  }

};

mojo.internal.bindings.ash.diagnostics.mojom.BatteryChargeStatusObserver.getRemote = function() {
  let remote = new mojo.internal.bindings.ash.diagnostics.mojom.BatteryChargeStatusObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.diagnostics.mojom.BatteryChargeStatusObserver',
    'context');
  return remote.$;
};

mojo.internal.bindings.ash.diagnostics.mojom.BatteryChargeStatusObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('BatteryChargeStatusObserver', [
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
        
        // Try Method 0: OnBatteryChargeStatusUpdated
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.diagnostics.mojom.BatteryChargeStatusObserver_OnBatteryChargeStatusUpdated_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnBatteryChargeStatusUpdated (0)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.diagnostics.mojom.BatteryChargeStatusObserver_OnBatteryChargeStatusUpdated_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onBatteryChargeStatusUpdated');
          const result = this.impl.onBatteryChargeStatusUpdated(params.arg_battery_charge_status);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.ash.diagnostics.mojom.BatteryChargeStatusObserverReceiver = mojo.internal.bindings.ash.diagnostics.mojom.BatteryChargeStatusObserverReceiver;

mojo.internal.bindings.ash.diagnostics.mojom.BatteryChargeStatusObserverPtr = mojo.internal.bindings.ash.diagnostics.mojom.BatteryChargeStatusObserverRemote;
mojo.internal.bindings.ash.diagnostics.mojom.BatteryChargeStatusObserverRequest = mojo.internal.bindings.ash.diagnostics.mojom.BatteryChargeStatusObserverPendingReceiver;


// Interface: BatteryHealthObserver
mojo.internal.Struct(
    mojo.internal.bindings.ash.diagnostics.mojom.BatteryHealthObserver_OnBatteryHealthUpdated_ParamsSpec, 'ash.diagnostics.mojom.BatteryHealthObserver_OnBatteryHealthUpdated_Params', [
      mojo.internal.StructField('arg_battery_health', 0, 0, mojo.internal.bindings.ash.diagnostics.mojom.BatteryHealthSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.ash.diagnostics.mojom.BatteryHealthObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.ash.diagnostics.mojom.BatteryHealthObserverRemote = class {
  static get $interfaceName() {
    return 'ash.diagnostics.mojom.BatteryHealthObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.ash.diagnostics.mojom.BatteryHealthObserverPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.ash.diagnostics.mojom.BatteryHealthObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onBatteryHealthUpdated(arg_battery_health) {
    return this.$.onBatteryHealthUpdated(arg_battery_health);
  }
};

mojo.internal.bindings.ash.diagnostics.mojom.BatteryHealthObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('BatteryHealthObserver', [
      { explicit: null },
    ]);
  }

  onBatteryHealthUpdated(arg_battery_health) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.ash.diagnostics.mojom.BatteryHealthObserver_OnBatteryHealthUpdated_ParamsSpec,
      null,
      [arg_battery_health],
      false);
  }

};

mojo.internal.bindings.ash.diagnostics.mojom.BatteryHealthObserver.getRemote = function() {
  let remote = new mojo.internal.bindings.ash.diagnostics.mojom.BatteryHealthObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.diagnostics.mojom.BatteryHealthObserver',
    'context');
  return remote.$;
};

mojo.internal.bindings.ash.diagnostics.mojom.BatteryHealthObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('BatteryHealthObserver', [
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
        
        // Try Method 0: OnBatteryHealthUpdated
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.diagnostics.mojom.BatteryHealthObserver_OnBatteryHealthUpdated_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnBatteryHealthUpdated (0)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.diagnostics.mojom.BatteryHealthObserver_OnBatteryHealthUpdated_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onBatteryHealthUpdated');
          const result = this.impl.onBatteryHealthUpdated(params.arg_battery_health);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.ash.diagnostics.mojom.BatteryHealthObserverReceiver = mojo.internal.bindings.ash.diagnostics.mojom.BatteryHealthObserverReceiver;

mojo.internal.bindings.ash.diagnostics.mojom.BatteryHealthObserverPtr = mojo.internal.bindings.ash.diagnostics.mojom.BatteryHealthObserverRemote;
mojo.internal.bindings.ash.diagnostics.mojom.BatteryHealthObserverRequest = mojo.internal.bindings.ash.diagnostics.mojom.BatteryHealthObserverPendingReceiver;


// Interface: MemoryUsageObserver
mojo.internal.Struct(
    mojo.internal.bindings.ash.diagnostics.mojom.MemoryUsageObserver_OnMemoryUsageUpdated_ParamsSpec, 'ash.diagnostics.mojom.MemoryUsageObserver_OnMemoryUsageUpdated_Params', [
      mojo.internal.StructField('arg_memory_usage', 0, 0, mojo.internal.bindings.ash.diagnostics.mojom.MemoryUsageSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.ash.diagnostics.mojom.MemoryUsageObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.ash.diagnostics.mojom.MemoryUsageObserverRemote = class {
  static get $interfaceName() {
    return 'ash.diagnostics.mojom.MemoryUsageObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.ash.diagnostics.mojom.MemoryUsageObserverPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.ash.diagnostics.mojom.MemoryUsageObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onMemoryUsageUpdated(arg_memory_usage) {
    return this.$.onMemoryUsageUpdated(arg_memory_usage);
  }
};

mojo.internal.bindings.ash.diagnostics.mojom.MemoryUsageObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('MemoryUsageObserver', [
      { explicit: null },
    ]);
  }

  onMemoryUsageUpdated(arg_memory_usage) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.ash.diagnostics.mojom.MemoryUsageObserver_OnMemoryUsageUpdated_ParamsSpec,
      null,
      [arg_memory_usage],
      false);
  }

};

mojo.internal.bindings.ash.diagnostics.mojom.MemoryUsageObserver.getRemote = function() {
  let remote = new mojo.internal.bindings.ash.diagnostics.mojom.MemoryUsageObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.diagnostics.mojom.MemoryUsageObserver',
    'context');
  return remote.$;
};

mojo.internal.bindings.ash.diagnostics.mojom.MemoryUsageObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('MemoryUsageObserver', [
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
        
        // Try Method 0: OnMemoryUsageUpdated
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.diagnostics.mojom.MemoryUsageObserver_OnMemoryUsageUpdated_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnMemoryUsageUpdated (0)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.diagnostics.mojom.MemoryUsageObserver_OnMemoryUsageUpdated_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onMemoryUsageUpdated');
          const result = this.impl.onMemoryUsageUpdated(params.arg_memory_usage);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.ash.diagnostics.mojom.MemoryUsageObserverReceiver = mojo.internal.bindings.ash.diagnostics.mojom.MemoryUsageObserverReceiver;

mojo.internal.bindings.ash.diagnostics.mojom.MemoryUsageObserverPtr = mojo.internal.bindings.ash.diagnostics.mojom.MemoryUsageObserverRemote;
mojo.internal.bindings.ash.diagnostics.mojom.MemoryUsageObserverRequest = mojo.internal.bindings.ash.diagnostics.mojom.MemoryUsageObserverPendingReceiver;


// Interface: CpuUsageObserver
mojo.internal.Struct(
    mojo.internal.bindings.ash.diagnostics.mojom.CpuUsageObserver_OnCpuUsageUpdated_ParamsSpec, 'ash.diagnostics.mojom.CpuUsageObserver_OnCpuUsageUpdated_Params', [
      mojo.internal.StructField('arg_cpu_usage', 0, 0, mojo.internal.bindings.ash.diagnostics.mojom.CpuUsageSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.ash.diagnostics.mojom.CpuUsageObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.ash.diagnostics.mojom.CpuUsageObserverRemote = class {
  static get $interfaceName() {
    return 'ash.diagnostics.mojom.CpuUsageObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.ash.diagnostics.mojom.CpuUsageObserverPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.ash.diagnostics.mojom.CpuUsageObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onCpuUsageUpdated(arg_cpu_usage) {
    return this.$.onCpuUsageUpdated(arg_cpu_usage);
  }
};

mojo.internal.bindings.ash.diagnostics.mojom.CpuUsageObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('CpuUsageObserver', [
      { explicit: null },
    ]);
  }

  onCpuUsageUpdated(arg_cpu_usage) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.ash.diagnostics.mojom.CpuUsageObserver_OnCpuUsageUpdated_ParamsSpec,
      null,
      [arg_cpu_usage],
      false);
  }

};

mojo.internal.bindings.ash.diagnostics.mojom.CpuUsageObserver.getRemote = function() {
  let remote = new mojo.internal.bindings.ash.diagnostics.mojom.CpuUsageObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.diagnostics.mojom.CpuUsageObserver',
    'context');
  return remote.$;
};

mojo.internal.bindings.ash.diagnostics.mojom.CpuUsageObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('CpuUsageObserver', [
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
        
        // Try Method 0: OnCpuUsageUpdated
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.diagnostics.mojom.CpuUsageObserver_OnCpuUsageUpdated_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnCpuUsageUpdated (0)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.diagnostics.mojom.CpuUsageObserver_OnCpuUsageUpdated_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onCpuUsageUpdated');
          const result = this.impl.onCpuUsageUpdated(params.arg_cpu_usage);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.ash.diagnostics.mojom.CpuUsageObserverReceiver = mojo.internal.bindings.ash.diagnostics.mojom.CpuUsageObserverReceiver;

mojo.internal.bindings.ash.diagnostics.mojom.CpuUsageObserverPtr = mojo.internal.bindings.ash.diagnostics.mojom.CpuUsageObserverRemote;
mojo.internal.bindings.ash.diagnostics.mojom.CpuUsageObserverRequest = mojo.internal.bindings.ash.diagnostics.mojom.CpuUsageObserverPendingReceiver;


// Interface: SystemDataProvider
mojo.internal.Struct(
    mojo.internal.bindings.ash.diagnostics.mojom.SystemDataProvider_GetSystemInfo_ParamsSpec, 'ash.diagnostics.mojom.SystemDataProvider_GetSystemInfo_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.diagnostics.mojom.SystemDataProvider_GetSystemInfo_ResponseParamsSpec, 'ash.diagnostics.mojom.SystemDataProvider_GetSystemInfo_ResponseParams', [
      mojo.internal.StructField('arg_system_info', 0, 0, mojo.internal.bindings.ash.diagnostics.mojom.SystemInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.diagnostics.mojom.SystemDataProvider_GetBatteryInfo_ParamsSpec, 'ash.diagnostics.mojom.SystemDataProvider_GetBatteryInfo_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.diagnostics.mojom.SystemDataProvider_GetBatteryInfo_ResponseParamsSpec, 'ash.diagnostics.mojom.SystemDataProvider_GetBatteryInfo_ResponseParams', [
      mojo.internal.StructField('arg_battery_info', 0, 0, mojo.internal.bindings.ash.diagnostics.mojom.BatteryInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.diagnostics.mojom.SystemDataProvider_ObserveBatteryChargeStatus_ParamsSpec, 'ash.diagnostics.mojom.SystemDataProvider_ObserveBatteryChargeStatus_Params', [
      mojo.internal.StructField('arg_observer', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.ash.diagnostics.mojom.BatteryChargeStatusObserverSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.diagnostics.mojom.SystemDataProvider_ObserveBatteryHealth_ParamsSpec, 'ash.diagnostics.mojom.SystemDataProvider_ObserveBatteryHealth_Params', [
      mojo.internal.StructField('arg_observer', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.ash.diagnostics.mojom.BatteryHealthObserverSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.diagnostics.mojom.SystemDataProvider_ObserveMemoryUsage_ParamsSpec, 'ash.diagnostics.mojom.SystemDataProvider_ObserveMemoryUsage_Params', [
      mojo.internal.StructField('arg_observer', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.ash.diagnostics.mojom.MemoryUsageObserverSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.diagnostics.mojom.SystemDataProvider_ObserveCpuUsage_ParamsSpec, 'ash.diagnostics.mojom.SystemDataProvider_ObserveCpuUsage_Params', [
      mojo.internal.StructField('arg_observer', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.ash.diagnostics.mojom.CpuUsageObserverSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.ash.diagnostics.mojom.SystemDataProviderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.ash.diagnostics.mojom.SystemDataProviderRemote = class {
  static get $interfaceName() {
    return 'ash.diagnostics.mojom.SystemDataProvider';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.ash.diagnostics.mojom.SystemDataProviderPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.ash.diagnostics.mojom.SystemDataProviderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  getSystemInfo() {
    return this.$.getSystemInfo();
  }
  getBatteryInfo() {
    return this.$.getBatteryInfo();
  }
  observeBatteryChargeStatus(arg_observer) {
    return this.$.observeBatteryChargeStatus(arg_observer);
  }
  observeBatteryHealth(arg_observer) {
    return this.$.observeBatteryHealth(arg_observer);
  }
  observeMemoryUsage(arg_observer) {
    return this.$.observeMemoryUsage(arg_observer);
  }
  observeCpuUsage(arg_observer) {
    return this.$.observeCpuUsage(arg_observer);
  }
};

mojo.internal.bindings.ash.diagnostics.mojom.SystemDataProviderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('SystemDataProvider', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  getSystemInfo() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.ash.diagnostics.mojom.SystemDataProvider_GetSystemInfo_ParamsSpec,
      mojo.internal.bindings.ash.diagnostics.mojom.SystemDataProvider_GetSystemInfo_ResponseParamsSpec,
      [],
      false);
  }

  getBatteryInfo() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.ash.diagnostics.mojom.SystemDataProvider_GetBatteryInfo_ParamsSpec,
      mojo.internal.bindings.ash.diagnostics.mojom.SystemDataProvider_GetBatteryInfo_ResponseParamsSpec,
      [],
      false);
  }

  observeBatteryChargeStatus(arg_observer) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.ash.diagnostics.mojom.SystemDataProvider_ObserveBatteryChargeStatus_ParamsSpec,
      null,
      [arg_observer],
      false);
  }

  observeBatteryHealth(arg_observer) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.ash.diagnostics.mojom.SystemDataProvider_ObserveBatteryHealth_ParamsSpec,
      null,
      [arg_observer],
      false);
  }

  observeMemoryUsage(arg_observer) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.ash.diagnostics.mojom.SystemDataProvider_ObserveMemoryUsage_ParamsSpec,
      null,
      [arg_observer],
      false);
  }

  observeCpuUsage(arg_observer) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojo.internal.bindings.ash.diagnostics.mojom.SystemDataProvider_ObserveCpuUsage_ParamsSpec,
      null,
      [arg_observer],
      false);
  }

};

mojo.internal.bindings.ash.diagnostics.mojom.SystemDataProvider.getRemote = function() {
  let remote = new mojo.internal.bindings.ash.diagnostics.mojom.SystemDataProviderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.diagnostics.mojom.SystemDataProvider',
    'context');
  return remote.$;
};

mojo.internal.bindings.ash.diagnostics.mojom.SystemDataProviderReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('SystemDataProvider', [
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
        
        // Try Method 0: GetSystemInfo
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.diagnostics.mojom.SystemDataProvider_GetSystemInfo_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetSystemInfo (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: GetBatteryInfo
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.diagnostics.mojom.SystemDataProvider_GetBatteryInfo_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetBatteryInfo (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: ObserveBatteryChargeStatus
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.diagnostics.mojom.SystemDataProvider_ObserveBatteryChargeStatus_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ObserveBatteryChargeStatus (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: ObserveBatteryHealth
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.diagnostics.mojom.SystemDataProvider_ObserveBatteryHealth_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ObserveBatteryHealth (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: ObserveMemoryUsage
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.diagnostics.mojom.SystemDataProvider_ObserveMemoryUsage_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ObserveMemoryUsage (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: ObserveCpuUsage
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.diagnostics.mojom.SystemDataProvider_ObserveCpuUsage_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ObserveCpuUsage (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.diagnostics.mojom.SystemDataProvider_GetSystemInfo_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getSystemInfo');
          const result = this.impl.getSystemInfo();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.diagnostics.mojom.SystemDataProvider_GetSystemInfo_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetSystemInfo FAILED:', e));
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.diagnostics.mojom.SystemDataProvider_GetBatteryInfo_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getBatteryInfo');
          const result = this.impl.getBatteryInfo();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.diagnostics.mojom.SystemDataProvider_GetBatteryInfo_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetBatteryInfo FAILED:', e));
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.diagnostics.mojom.SystemDataProvider_ObserveBatteryChargeStatus_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.observeBatteryChargeStatus');
          const result = this.impl.observeBatteryChargeStatus(params.arg_observer);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.diagnostics.mojom.SystemDataProvider_ObserveBatteryHealth_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.observeBatteryHealth');
          const result = this.impl.observeBatteryHealth(params.arg_observer);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.diagnostics.mojom.SystemDataProvider_ObserveMemoryUsage_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.observeMemoryUsage');
          const result = this.impl.observeMemoryUsage(params.arg_observer);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.diagnostics.mojom.SystemDataProvider_ObserveCpuUsage_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.observeCpuUsage');
          const result = this.impl.observeCpuUsage(params.arg_observer);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.ash.diagnostics.mojom.SystemDataProviderReceiver = mojo.internal.bindings.ash.diagnostics.mojom.SystemDataProviderReceiver;

mojo.internal.bindings.ash.diagnostics.mojom.SystemDataProviderPtr = mojo.internal.bindings.ash.diagnostics.mojom.SystemDataProviderRemote;
mojo.internal.bindings.ash.diagnostics.mojom.SystemDataProviderRequest = mojo.internal.bindings.ash.diagnostics.mojom.SystemDataProviderPendingReceiver;

