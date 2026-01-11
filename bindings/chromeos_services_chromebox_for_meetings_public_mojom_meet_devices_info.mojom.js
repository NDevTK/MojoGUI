// Auto-generated MojoJS binding
 // Source: chromium_src/chromeos/services/chromebox_for_meetings/public/mojom/meet_devices_info.mojom
 // Module: chromeos.cfm.mojom

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
 

 mojo.internal.bindings.chromeos = mojo.internal.bindings.chromeos || {};
mojo.internal.bindings.chromeos.cfm = mojo.internal.bindings.chromeos.cfm || {};
mojo.internal.bindings.chromeos.cfm.mojom = mojo.internal.bindings.chromeos.cfm.mojom || {};

mojo.internal.bindings.chromeos.cfm.mojom.PolicyInfoSpec = { $: {} };
mojo.internal.bindings.chromeos.cfm.mojom.SysInfoSpec = { $: {} };
mojo.internal.bindings.chromeos.cfm.mojom.MachineStatisticsInfoSpec = { $: {} };
mojo.internal.bindings.chromeos.cfm.mojom.MeetDevicesInfo = {};
mojo.internal.bindings.chromeos.cfm.mojom.MeetDevicesInfo.$interfaceName = 'chromeos.cfm.mojom.MeetDevicesInfo';
mojo.internal.bindings.chromeos.cfm.mojom.MeetDevicesInfo_AddDeviceSettingsObserver_ParamsSpec = { $: {} };
mojo.internal.bindings.chromeos.cfm.mojom.MeetDevicesInfo_GetPolicyInfo_ParamsSpec = { $: {} };
mojo.internal.bindings.chromeos.cfm.mojom.MeetDevicesInfo_GetPolicyInfo_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.chromeos.cfm.mojom.MeetDevicesInfo_GetSysInfo_ParamsSpec = { $: {} };
mojo.internal.bindings.chromeos.cfm.mojom.MeetDevicesInfo_GetSysInfo_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.chromeos.cfm.mojom.MeetDevicesInfo_GetMachineStatisticsInfo_ParamsSpec = { $: {} };
mojo.internal.bindings.chromeos.cfm.mojom.MeetDevicesInfo_GetMachineStatisticsInfo_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.chromeos.cfm.mojom.PolicyInfoObserver = {};
mojo.internal.bindings.chromeos.cfm.mojom.PolicyInfoObserver.$interfaceName = 'chromeos.cfm.mojom.PolicyInfoObserver';
mojo.internal.bindings.chromeos.cfm.mojom.PolicyInfoObserver_OnPolicyInfoChange_ParamsSpec = { $: {} };

// Struct: PolicyInfo
mojo.internal.Struct(
    mojo.internal.bindings.chromeos.cfm.mojom.PolicyInfoSpec, 'chromeos.cfm.mojom.PolicyInfo', [
      mojo.internal.StructField('arg_timestamp_ms', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_device_id', 8, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_service_account_email_address', 16, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_service_account_gaia_id', 24, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_cros_device_id', 32, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_cohort_hint', 40, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_release_channel_delegated', 48, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 64]]);

// Struct: SysInfo
mojo.internal.Struct(
    mojo.internal.bindings.chromeos.cfm.mojom.SysInfoSpec, 'chromeos.cfm.mojom.SysInfo', [
      mojo.internal.StructField('arg_kernel_version', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_release_version', 8, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_release_build_type', 16, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_release_track', 24, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_release_milestone', 32, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_browser_version', 40, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_channel_name', 48, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_release_board', 56, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 72]]);

// Struct: MachineStatisticsInfo
mojo.internal.Struct(
    mojo.internal.bindings.chromeos.cfm.mojom.MachineStatisticsInfoSpec, 'chromeos.cfm.mojom.MachineStatisticsInfo', [
      mojo.internal.StructField('arg_hwid', 0, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 16]]);

// Interface: MeetDevicesInfo
mojo.internal.Struct(
    mojo.internal.bindings.chromeos.cfm.mojom.MeetDevicesInfo_AddDeviceSettingsObserver_ParamsSpec, 'chromeos.cfm.mojom.MeetDevicesInfo_AddDeviceSettingsObserver_Params', [
      mojo.internal.StructField('arg_observer', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.chromeos.cfm.mojom.PolicyInfoObserverSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.chromeos.cfm.mojom.MeetDevicesInfo_GetPolicyInfo_ParamsSpec, 'chromeos.cfm.mojom.MeetDevicesInfo_GetPolicyInfo_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.chromeos.cfm.mojom.MeetDevicesInfo_GetPolicyInfo_ResponseParamsSpec, 'chromeos.cfm.mojom.MeetDevicesInfo_GetPolicyInfo_ResponseParams', [
      mojo.internal.StructField('arg_info', 0, 0, mojo.internal.bindings.chromeos.cfm.mojom.PolicyInfoSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.chromeos.cfm.mojom.MeetDevicesInfo_GetSysInfo_ParamsSpec, 'chromeos.cfm.mojom.MeetDevicesInfo_GetSysInfo_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.chromeos.cfm.mojom.MeetDevicesInfo_GetSysInfo_ResponseParamsSpec, 'chromeos.cfm.mojom.MeetDevicesInfo_GetSysInfo_ResponseParams', [
      mojo.internal.StructField('arg_info', 0, 0, mojo.internal.bindings.chromeos.cfm.mojom.SysInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.chromeos.cfm.mojom.MeetDevicesInfo_GetMachineStatisticsInfo_ParamsSpec, 'chromeos.cfm.mojom.MeetDevicesInfo_GetMachineStatisticsInfo_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.chromeos.cfm.mojom.MeetDevicesInfo_GetMachineStatisticsInfo_ResponseParamsSpec, 'chromeos.cfm.mojom.MeetDevicesInfo_GetMachineStatisticsInfo_ResponseParams', [
      mojo.internal.StructField('arg_info', 0, 0, mojo.internal.bindings.chromeos.cfm.mojom.MachineStatisticsInfoSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.chromeos.cfm.mojom.MeetDevicesInfoPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.chromeos.cfm.mojom.MeetDevicesInfoRemote = class {
  static get $interfaceName() {
    return 'chromeos.cfm.mojom.MeetDevicesInfo';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.chromeos.cfm.mojom.MeetDevicesInfoPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.chromeos.cfm.mojom.MeetDevicesInfoRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  addDeviceSettingsObserver(arg_observer) {
    return this.$.addDeviceSettingsObserver(arg_observer);
  }
  getPolicyInfo() {
    return this.$.getPolicyInfo();
  }
  getSysInfo() {
    return this.$.getSysInfo();
  }
  getMachineStatisticsInfo() {
    return this.$.getMachineStatisticsInfo();
  }
};

mojo.internal.bindings.chromeos.cfm.mojom.MeetDevicesInfoRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('MeetDevicesInfo', [
      { explicit: 0 },
      { explicit: 1 },
      { explicit: 2 },
      { explicit: 3 },
    ]);
  }

  addDeviceSettingsObserver(arg_observer) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.chromeos.cfm.mojom.MeetDevicesInfo_AddDeviceSettingsObserver_ParamsSpec,
      null,
      [arg_observer],
      false);
  }

  getPolicyInfo() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.chromeos.cfm.mojom.MeetDevicesInfo_GetPolicyInfo_ParamsSpec,
      mojo.internal.bindings.chromeos.cfm.mojom.MeetDevicesInfo_GetPolicyInfo_ResponseParamsSpec,
      [],
      false);
  }

  getSysInfo() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.chromeos.cfm.mojom.MeetDevicesInfo_GetSysInfo_ParamsSpec,
      mojo.internal.bindings.chromeos.cfm.mojom.MeetDevicesInfo_GetSysInfo_ResponseParamsSpec,
      [],
      false);
  }

  getMachineStatisticsInfo() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.chromeos.cfm.mojom.MeetDevicesInfo_GetMachineStatisticsInfo_ParamsSpec,
      mojo.internal.bindings.chromeos.cfm.mojom.MeetDevicesInfo_GetMachineStatisticsInfo_ResponseParamsSpec,
      [],
      false);
  }

};

mojo.internal.bindings.chromeos.cfm.mojom.MeetDevicesInfo.getRemote = function() {
  let remote = new mojo.internal.bindings.chromeos.cfm.mojom.MeetDevicesInfoRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromeos.cfm.mojom.MeetDevicesInfo',
    'context');
  return remote.$;
};

mojo.internal.bindings.chromeos.cfm.mojom.MeetDevicesInfoReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('MeetDevicesInfo', [
      { explicit: 0 },
      { explicit: 1 },
      { explicit: 2 },
      { explicit: 3 },
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
        
        // Try Method 0: AddDeviceSettingsObserver
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.chromeos.cfm.mojom.MeetDevicesInfo_AddDeviceSettingsObserver_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AddDeviceSettingsObserver (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: GetPolicyInfo
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.chromeos.cfm.mojom.MeetDevicesInfo_GetPolicyInfo_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetPolicyInfo (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: GetSysInfo
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.chromeos.cfm.mojom.MeetDevicesInfo_GetSysInfo_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetSysInfo (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: GetMachineStatisticsInfo
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.chromeos.cfm.mojom.MeetDevicesInfo_GetMachineStatisticsInfo_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetMachineStatisticsInfo (3)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.chromeos.cfm.mojom.MeetDevicesInfo_AddDeviceSettingsObserver_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.addDeviceSettingsObserver');
          const result = this.impl.addDeviceSettingsObserver(params.arg_observer);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.chromeos.cfm.mojom.MeetDevicesInfo_GetPolicyInfo_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getPolicyInfo');
          const result = this.impl.getPolicyInfo();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.chromeos.cfm.mojom.MeetDevicesInfo_GetPolicyInfo_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetPolicyInfo FAILED:', e));
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.chromeos.cfm.mojom.MeetDevicesInfo_GetSysInfo_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getSysInfo');
          const result = this.impl.getSysInfo();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.chromeos.cfm.mojom.MeetDevicesInfo_GetSysInfo_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetSysInfo FAILED:', e));
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.chromeos.cfm.mojom.MeetDevicesInfo_GetMachineStatisticsInfo_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getMachineStatisticsInfo');
          const result = this.impl.getMachineStatisticsInfo();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.chromeos.cfm.mojom.MeetDevicesInfo_GetMachineStatisticsInfo_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetMachineStatisticsInfo FAILED:', e));
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

mojo.internal.bindings.chromeos.cfm.mojom.MeetDevicesInfoReceiver = mojo.internal.bindings.chromeos.cfm.mojom.MeetDevicesInfoReceiver;

mojo.internal.bindings.chromeos.cfm.mojom.MeetDevicesInfoPtr = mojo.internal.bindings.chromeos.cfm.mojom.MeetDevicesInfoRemote;
mojo.internal.bindings.chromeos.cfm.mojom.MeetDevicesInfoRequest = mojo.internal.bindings.chromeos.cfm.mojom.MeetDevicesInfoPendingReceiver;


// Interface: PolicyInfoObserver
mojo.internal.Struct(
    mojo.internal.bindings.chromeos.cfm.mojom.PolicyInfoObserver_OnPolicyInfoChange_ParamsSpec, 'chromeos.cfm.mojom.PolicyInfoObserver_OnPolicyInfoChange_Params', [
      mojo.internal.StructField('arg_info', 0, 0, mojo.internal.bindings.chromeos.cfm.mojom.PolicyInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.chromeos.cfm.mojom.PolicyInfoObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.chromeos.cfm.mojom.PolicyInfoObserverRemote = class {
  static get $interfaceName() {
    return 'chromeos.cfm.mojom.PolicyInfoObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.chromeos.cfm.mojom.PolicyInfoObserverPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.chromeos.cfm.mojom.PolicyInfoObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onPolicyInfoChange(arg_info) {
    return this.$.onPolicyInfoChange(arg_info);
  }
};

mojo.internal.bindings.chromeos.cfm.mojom.PolicyInfoObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('PolicyInfoObserver', [
      { explicit: 0 },
    ]);
  }

  onPolicyInfoChange(arg_info) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.chromeos.cfm.mojom.PolicyInfoObserver_OnPolicyInfoChange_ParamsSpec,
      null,
      [arg_info],
      false);
  }

};

mojo.internal.bindings.chromeos.cfm.mojom.PolicyInfoObserver.getRemote = function() {
  let remote = new mojo.internal.bindings.chromeos.cfm.mojom.PolicyInfoObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromeos.cfm.mojom.PolicyInfoObserver',
    'context');
  return remote.$;
};

mojo.internal.bindings.chromeos.cfm.mojom.PolicyInfoObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('PolicyInfoObserver', [
      { explicit: 0 },
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
        
        // Try Method 0: OnPolicyInfoChange
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.chromeos.cfm.mojom.PolicyInfoObserver_OnPolicyInfoChange_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnPolicyInfoChange (0)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.chromeos.cfm.mojom.PolicyInfoObserver_OnPolicyInfoChange_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onPolicyInfoChange');
          const result = this.impl.onPolicyInfoChange(params.arg_info);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.chromeos.cfm.mojom.PolicyInfoObserverReceiver = mojo.internal.bindings.chromeos.cfm.mojom.PolicyInfoObserverReceiver;

mojo.internal.bindings.chromeos.cfm.mojom.PolicyInfoObserverPtr = mojo.internal.bindings.chromeos.cfm.mojom.PolicyInfoObserverRemote;
mojo.internal.bindings.chromeos.cfm.mojom.PolicyInfoObserverRequest = mojo.internal.bindings.chromeos.cfm.mojom.PolicyInfoObserverPendingReceiver;

