// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/services/hotspot_config/public/mojom/cros_hotspot_config.mojom
// Module: ash.hotspot_config.mojom

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
var ash = ash || {};
ash.hotspot_config = ash.hotspot_config || {};
ash.hotspot_config.mojom = ash.hotspot_config.mojom || {};

ash.hotspot_config.mojom.HotspotStateSpec = { $: mojo.internal.Enum() };
ash.hotspot_config.mojom.WiFiSecurityModeSpec = { $: mojo.internal.Enum() };
ash.hotspot_config.mojom.WiFiBandSpec = { $: mojo.internal.Enum() };
ash.hotspot_config.mojom.SetHotspotConfigResultSpec = { $: mojo.internal.Enum() };
ash.hotspot_config.mojom.HotspotAllowStatusSpec = { $: mojo.internal.Enum() };
ash.hotspot_config.mojom.HotspotControlResultSpec = { $: mojo.internal.Enum() };
ash.hotspot_config.mojom.DisableReasonSpec = { $: mojo.internal.Enum() };
ash.hotspot_config.mojom.HotspotConfigSpec = { $: {} };
ash.hotspot_config.mojom.HotspotInfoSpec = { $: {} };
ash.hotspot_config.mojom.CrosHotspotConfig = {};
ash.hotspot_config.mojom.CrosHotspotConfig.$interfaceName = 'ash.hotspot_config.mojom.CrosHotspotConfig';
ash.hotspot_config.mojom.CrosHotspotConfig_AddObserver_ParamsSpec = { $: {} };
ash.hotspot_config.mojom.CrosHotspotConfig_ObserveEnabledStateChanges_ParamsSpec = { $: {} };
ash.hotspot_config.mojom.CrosHotspotConfig_GetHotspotInfo_ParamsSpec = { $: {} };
ash.hotspot_config.mojom.CrosHotspotConfig_GetHotspotInfo_ResponseParamsSpec = { $: {} };
ash.hotspot_config.mojom.CrosHotspotConfig_SetHotspotConfig_ParamsSpec = { $: {} };
ash.hotspot_config.mojom.CrosHotspotConfig_SetHotspotConfig_ResponseParamsSpec = { $: {} };
ash.hotspot_config.mojom.CrosHotspotConfig_EnableHotspot_ParamsSpec = { $: {} };
ash.hotspot_config.mojom.CrosHotspotConfig_EnableHotspot_ResponseParamsSpec = { $: {} };
ash.hotspot_config.mojom.CrosHotspotConfig_DisableHotspot_ParamsSpec = { $: {} };
ash.hotspot_config.mojom.CrosHotspotConfig_DisableHotspot_ResponseParamsSpec = { $: {} };
ash.hotspot_config.mojom.CrosHotspotConfigObserver = {};
ash.hotspot_config.mojom.CrosHotspotConfigObserver.$interfaceName = 'ash.hotspot_config.mojom.CrosHotspotConfigObserver';
ash.hotspot_config.mojom.CrosHotspotConfigObserver_OnHotspotInfoChanged_ParamsSpec = { $: {} };
ash.hotspot_config.mojom.HotspotEnabledStateObserver = {};
ash.hotspot_config.mojom.HotspotEnabledStateObserver.$interfaceName = 'ash.hotspot_config.mojom.HotspotEnabledStateObserver';
ash.hotspot_config.mojom.HotspotEnabledStateObserver_OnHotspotTurnedOn_ParamsSpec = { $: {} };
ash.hotspot_config.mojom.HotspotEnabledStateObserver_OnHotspotTurnedOff_ParamsSpec = { $: {} };

// Enum: HotspotState
ash.hotspot_config.mojom.HotspotState = {
  kDisabled: 0,
  kEnabled: 1,
  kEnabling: 2,
  kDisabling: 3,
};

// Enum: WiFiSecurityMode
ash.hotspot_config.mojom.WiFiSecurityMode = {
  kWpa2: 0,
  kWpa3: 1,
  kWpa2Wpa3: 2,
};

// Enum: WiFiBand
ash.hotspot_config.mojom.WiFiBand = {
  k2_4GHz: 0,
  kAutoChoose: 1,
};

// Enum: SetHotspotConfigResult
ash.hotspot_config.mojom.SetHotspotConfigResult = {
  kSuccess: 0,
  kFailedNotLogin: 1,
  kFailedInvalidConfiguration: 2,
  kFailedShillOperation: 3,
};

// Enum: HotspotAllowStatus
ash.hotspot_config.mojom.HotspotAllowStatus = {
  kDisallowedNoCellularUpstream: 0,
  kDisallowedNoWiFiDownstream: 1,
  kDisallowedNoWiFiSecurityModes: 2,
  kDisallowedNoMobileData: 3,
  kDisallowedReadinessCheckFail: 4,
  kDisallowedByPolicy: 5,
  kAllowed: 6,
};

// Enum: HotspotControlResult
ash.hotspot_config.mojom.HotspotControlResult = {
  kSuccess: 0,
  kNotAllowed: 1,
  kReadinessCheckFailed: 2,
  kDisableWifiFailed: 3,
  kInvalidConfiguration: 4,
  kUpstreamNotAvailable: 5,
  kNetworkSetupFailure: 6,
  kDownstreamWifiFailure: 7,
  kUpstreamFailure: 8,
  kShillOperationFailed: 9,
  kAlreadyFulfilled: 10,
  kAborted: 11,
  kInvalid: 12,
  kBusy: 13,
  kConcurrencyNotSupported: 14,
  kOperationFailure: 15,
  kUnknownFailure: 16,
};

// Enum: DisableReason
ash.hotspot_config.mojom.DisableReason = {
  kAutoDisabled: 0,
  kInternalError: 1,
  kUserInitiated: 2,
  kWifiEnabled: 3,
  kProhibitedByPolicy: 4,
  kUpstreamNetworkNotAvailable: 5,
  kSuspended: 6,
  kRestart: 7,
  kUpstreamNoInternet: 8,
  kDownstreamLinkDisconnect: 9,
  kDownstreamNetworkDisconnect: 10,
  kStartTimeout: 11,
  kUpstreamNotAvailable: 12,
  kResourceBusy: 13,
  kUnknownError: 14,
};

// Struct: HotspotConfig
mojo.internal.Struct(
    ash.hotspot_config.mojom.HotspotConfigSpec, 'ash.hotspot_config.mojom.HotspotConfig', [
      mojo.internal.StructField('security', 0, 0, ash.hotspot_config.mojom.WiFiSecurityModeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('band', 8, 0, ash.hotspot_config.mojom.WiFiBandSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('ssid', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('passphrase', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('auto_disable', 32, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('bssid_randomization', 32, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 48]]);

// Struct: HotspotInfo
mojo.internal.Struct(
    ash.hotspot_config.mojom.HotspotInfoSpec, 'ash.hotspot_config.mojom.HotspotInfo', [
      mojo.internal.StructField('state', 0, 0, ash.hotspot_config.mojom.HotspotStateSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('allow_status', 8, 0, ash.hotspot_config.mojom.HotspotAllowStatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('allowed_wifi_security_modes', 16, 0, mojo.internal.Array(ash.hotspot_config.mojom.WiFiSecurityModeSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('config', 24, 0, ash.hotspot_config.mojom.HotspotConfigSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('client_count', 32, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 48]]);

// Interface: CrosHotspotConfig
mojo.internal.Struct(
    ash.hotspot_config.mojom.CrosHotspotConfig_AddObserver_ParamsSpec, 'ash.hotspot_config.mojom.CrosHotspotConfig_AddObserver_Params', [
      mojo.internal.StructField('observer', 0, 0, mojo.internal.InterfaceProxy(ash.hotspot_config.mojom.CrosHotspotConfigObserverSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.hotspot_config.mojom.CrosHotspotConfig_ObserveEnabledStateChanges_ParamsSpec, 'ash.hotspot_config.mojom.CrosHotspotConfig_ObserveEnabledStateChanges_Params', [
      mojo.internal.StructField('observer', 0, 0, mojo.internal.InterfaceProxy(ash.hotspot_config.mojom.HotspotEnabledStateObserverSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.hotspot_config.mojom.CrosHotspotConfig_GetHotspotInfo_ParamsSpec, 'ash.hotspot_config.mojom.CrosHotspotConfig_GetHotspotInfo_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.hotspot_config.mojom.CrosHotspotConfig_GetHotspotInfo_ResponseParamsSpec, 'ash.hotspot_config.mojom.CrosHotspotConfig_GetHotspotInfo_ResponseParams', [
      mojo.internal.StructField('hotspot_info', 0, 0, ash.hotspot_config.mojom.HotspotInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.hotspot_config.mojom.CrosHotspotConfig_SetHotspotConfig_ParamsSpec, 'ash.hotspot_config.mojom.CrosHotspotConfig_SetHotspotConfig_Params', [
      mojo.internal.StructField('config', 0, 0, ash.hotspot_config.mojom.HotspotConfigSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.hotspot_config.mojom.CrosHotspotConfig_SetHotspotConfig_ResponseParamsSpec, 'ash.hotspot_config.mojom.CrosHotspotConfig_SetHotspotConfig_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, ash.hotspot_config.mojom.SetHotspotConfigResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.hotspot_config.mojom.CrosHotspotConfig_EnableHotspot_ParamsSpec, 'ash.hotspot_config.mojom.CrosHotspotConfig_EnableHotspot_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.hotspot_config.mojom.CrosHotspotConfig_EnableHotspot_ResponseParamsSpec, 'ash.hotspot_config.mojom.CrosHotspotConfig_EnableHotspot_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, ash.hotspot_config.mojom.HotspotControlResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.hotspot_config.mojom.CrosHotspotConfig_DisableHotspot_ParamsSpec, 'ash.hotspot_config.mojom.CrosHotspotConfig_DisableHotspot_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.hotspot_config.mojom.CrosHotspotConfig_DisableHotspot_ResponseParamsSpec, 'ash.hotspot_config.mojom.CrosHotspotConfig_DisableHotspot_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, ash.hotspot_config.mojom.HotspotControlResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

ash.hotspot_config.mojom.CrosHotspotConfigPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.hotspot_config.mojom.CrosHotspotConfigRemote = class {
  static get $interfaceName() {
    return 'ash.hotspot_config.mojom.CrosHotspotConfig';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.hotspot_config.mojom.CrosHotspotConfigPendingReceiver,
      handle);
    this.$ = new ash.hotspot_config.mojom.CrosHotspotConfigRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  addObserver(observer) {
    return this.$.addObserver(observer);
  }
  observeEnabledStateChanges(observer) {
    return this.$.observeEnabledStateChanges(observer);
  }
  getHotspotInfo() {
    return this.$.getHotspotInfo();
  }
  setHotspotConfig(config) {
    return this.$.setHotspotConfig(config);
  }
  enableHotspot() {
    return this.$.enableHotspot();
  }
  disableHotspot() {
    return this.$.disableHotspot();
  }
};

ash.hotspot_config.mojom.CrosHotspotConfigRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('CrosHotspotConfig', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  addObserver(observer) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      ash.hotspot_config.mojom.CrosHotspotConfig_AddObserver_ParamsSpec,
      null,
      [observer],
      false);
  }

  observeEnabledStateChanges(observer) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      ash.hotspot_config.mojom.CrosHotspotConfig_ObserveEnabledStateChanges_ParamsSpec,
      null,
      [observer],
      false);
  }

  getHotspotInfo() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      ash.hotspot_config.mojom.CrosHotspotConfig_GetHotspotInfo_ParamsSpec,
      ash.hotspot_config.mojom.CrosHotspotConfig_GetHotspotInfo_ResponseParamsSpec,
      [],
      false);
  }

  setHotspotConfig(config) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      ash.hotspot_config.mojom.CrosHotspotConfig_SetHotspotConfig_ParamsSpec,
      ash.hotspot_config.mojom.CrosHotspotConfig_SetHotspotConfig_ResponseParamsSpec,
      [config],
      false);
  }

  enableHotspot() {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      ash.hotspot_config.mojom.CrosHotspotConfig_EnableHotspot_ParamsSpec,
      ash.hotspot_config.mojom.CrosHotspotConfig_EnableHotspot_ResponseParamsSpec,
      [],
      false);
  }

  disableHotspot() {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      ash.hotspot_config.mojom.CrosHotspotConfig_DisableHotspot_ParamsSpec,
      ash.hotspot_config.mojom.CrosHotspotConfig_DisableHotspot_ResponseParamsSpec,
      [],
      false);
  }

};

ash.hotspot_config.mojom.CrosHotspotConfig.getRemote = function() {
  let remote = new ash.hotspot_config.mojom.CrosHotspotConfigRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.hotspot_config.mojom.CrosHotspotConfig',
    'context');
  return remote.$;
};

ash.hotspot_config.mojom.CrosHotspotConfigReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('CrosHotspotConfig', [
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
        
        // Try Method 0: AddObserver
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.hotspot_config.mojom.CrosHotspotConfig_AddObserver_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AddObserver (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: ObserveEnabledStateChanges
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.hotspot_config.mojom.CrosHotspotConfig_ObserveEnabledStateChanges_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ObserveEnabledStateChanges (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: GetHotspotInfo
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.hotspot_config.mojom.CrosHotspotConfig_GetHotspotInfo_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetHotspotInfo (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: SetHotspotConfig
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.hotspot_config.mojom.CrosHotspotConfig_SetHotspotConfig_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetHotspotConfig (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: EnableHotspot
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.hotspot_config.mojom.CrosHotspotConfig_EnableHotspot_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> EnableHotspot (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: DisableHotspot
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.hotspot_config.mojom.CrosHotspotConfig_DisableHotspot_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DisableHotspot (5)');
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
          const params = decoder.decodeStructInline(ash.hotspot_config.mojom.CrosHotspotConfig_AddObserver_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.addObserver');
          const result = this.impl.addObserver(params.observer);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.hotspot_config.mojom.CrosHotspotConfig_ObserveEnabledStateChanges_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.observeEnabledStateChanges');
          const result = this.impl.observeEnabledStateChanges(params.observer);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.hotspot_config.mojom.CrosHotspotConfig_GetHotspotInfo_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getHotspotInfo');
          const result = this.impl.getHotspotInfo();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.hotspot_config.mojom.CrosHotspotConfig_GetHotspotInfo_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.hotspot_config.mojom.CrosHotspotConfig_SetHotspotConfig_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setHotspotConfig');
          const result = this.impl.setHotspotConfig(params.config);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.hotspot_config.mojom.CrosHotspotConfig_SetHotspotConfig_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.hotspot_config.mojom.CrosHotspotConfig_EnableHotspot_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.enableHotspot');
          const result = this.impl.enableHotspot();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.hotspot_config.mojom.CrosHotspotConfig_EnableHotspot_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.hotspot_config.mojom.CrosHotspotConfig_DisableHotspot_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.disableHotspot');
          const result = this.impl.disableHotspot();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.hotspot_config.mojom.CrosHotspotConfig_DisableHotspot_ResponseParamsSpec);
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

ash.hotspot_config.mojom.CrosHotspotConfigReceiver = ash.hotspot_config.mojom.CrosHotspotConfigReceiver;

ash.hotspot_config.mojom.CrosHotspotConfigPtr = ash.hotspot_config.mojom.CrosHotspotConfigRemote;
ash.hotspot_config.mojom.CrosHotspotConfigRequest = ash.hotspot_config.mojom.CrosHotspotConfigPendingReceiver;


// Interface: CrosHotspotConfigObserver
mojo.internal.Struct(
    ash.hotspot_config.mojom.CrosHotspotConfigObserver_OnHotspotInfoChanged_ParamsSpec, 'ash.hotspot_config.mojom.CrosHotspotConfigObserver_OnHotspotInfoChanged_Params', [
    ],
    [[0, 8]]);

ash.hotspot_config.mojom.CrosHotspotConfigObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.hotspot_config.mojom.CrosHotspotConfigObserverRemote = class {
  static get $interfaceName() {
    return 'ash.hotspot_config.mojom.CrosHotspotConfigObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.hotspot_config.mojom.CrosHotspotConfigObserverPendingReceiver,
      handle);
    this.$ = new ash.hotspot_config.mojom.CrosHotspotConfigObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onHotspotInfoChanged() {
    return this.$.onHotspotInfoChanged();
  }
};

ash.hotspot_config.mojom.CrosHotspotConfigObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('CrosHotspotConfigObserver', [
      { explicit: null },
    ]);
  }

  onHotspotInfoChanged() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      ash.hotspot_config.mojom.CrosHotspotConfigObserver_OnHotspotInfoChanged_ParamsSpec,
      null,
      [],
      false);
  }

};

ash.hotspot_config.mojom.CrosHotspotConfigObserver.getRemote = function() {
  let remote = new ash.hotspot_config.mojom.CrosHotspotConfigObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.hotspot_config.mojom.CrosHotspotConfigObserver',
    'context');
  return remote.$;
};

ash.hotspot_config.mojom.CrosHotspotConfigObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('CrosHotspotConfigObserver', [
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
        
        // Try Method 0: OnHotspotInfoChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.hotspot_config.mojom.CrosHotspotConfigObserver_OnHotspotInfoChanged_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnHotspotInfoChanged (0)');
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
          const params = decoder.decodeStructInline(ash.hotspot_config.mojom.CrosHotspotConfigObserver_OnHotspotInfoChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onHotspotInfoChanged');
          const result = this.impl.onHotspotInfoChanged();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

ash.hotspot_config.mojom.CrosHotspotConfigObserverReceiver = ash.hotspot_config.mojom.CrosHotspotConfigObserverReceiver;

ash.hotspot_config.mojom.CrosHotspotConfigObserverPtr = ash.hotspot_config.mojom.CrosHotspotConfigObserverRemote;
ash.hotspot_config.mojom.CrosHotspotConfigObserverRequest = ash.hotspot_config.mojom.CrosHotspotConfigObserverPendingReceiver;


// Interface: HotspotEnabledStateObserver
mojo.internal.Struct(
    ash.hotspot_config.mojom.HotspotEnabledStateObserver_OnHotspotTurnedOn_ParamsSpec, 'ash.hotspot_config.mojom.HotspotEnabledStateObserver_OnHotspotTurnedOn_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.hotspot_config.mojom.HotspotEnabledStateObserver_OnHotspotTurnedOff_ParamsSpec, 'ash.hotspot_config.mojom.HotspotEnabledStateObserver_OnHotspotTurnedOff_Params', [
      mojo.internal.StructField('reason', 0, 0, ash.hotspot_config.mojom.DisableReasonSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

ash.hotspot_config.mojom.HotspotEnabledStateObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.hotspot_config.mojom.HotspotEnabledStateObserverRemote = class {
  static get $interfaceName() {
    return 'ash.hotspot_config.mojom.HotspotEnabledStateObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.hotspot_config.mojom.HotspotEnabledStateObserverPendingReceiver,
      handle);
    this.$ = new ash.hotspot_config.mojom.HotspotEnabledStateObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onHotspotTurnedOn() {
    return this.$.onHotspotTurnedOn();
  }
  onHotspotTurnedOff(reason) {
    return this.$.onHotspotTurnedOff(reason);
  }
};

ash.hotspot_config.mojom.HotspotEnabledStateObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('HotspotEnabledStateObserver', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  onHotspotTurnedOn() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      ash.hotspot_config.mojom.HotspotEnabledStateObserver_OnHotspotTurnedOn_ParamsSpec,
      null,
      [],
      false);
  }

  onHotspotTurnedOff(reason) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      ash.hotspot_config.mojom.HotspotEnabledStateObserver_OnHotspotTurnedOff_ParamsSpec,
      null,
      [reason],
      false);
  }

};

ash.hotspot_config.mojom.HotspotEnabledStateObserver.getRemote = function() {
  let remote = new ash.hotspot_config.mojom.HotspotEnabledStateObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.hotspot_config.mojom.HotspotEnabledStateObserver',
    'context');
  return remote.$;
};

ash.hotspot_config.mojom.HotspotEnabledStateObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('HotspotEnabledStateObserver', [
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
        
        // Try Method 0: OnHotspotTurnedOn
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.hotspot_config.mojom.HotspotEnabledStateObserver_OnHotspotTurnedOn_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnHotspotTurnedOn (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: OnHotspotTurnedOff
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.hotspot_config.mojom.HotspotEnabledStateObserver_OnHotspotTurnedOff_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnHotspotTurnedOff (1)');
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
          const params = decoder.decodeStructInline(ash.hotspot_config.mojom.HotspotEnabledStateObserver_OnHotspotTurnedOn_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onHotspotTurnedOn');
          const result = this.impl.onHotspotTurnedOn();
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.hotspot_config.mojom.HotspotEnabledStateObserver_OnHotspotTurnedOff_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onHotspotTurnedOff');
          const result = this.impl.onHotspotTurnedOff(params.reason);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

ash.hotspot_config.mojom.HotspotEnabledStateObserverReceiver = ash.hotspot_config.mojom.HotspotEnabledStateObserverReceiver;

ash.hotspot_config.mojom.HotspotEnabledStateObserverPtr = ash.hotspot_config.mojom.HotspotEnabledStateObserverRemote;
ash.hotspot_config.mojom.HotspotEnabledStateObserverRequest = ash.hotspot_config.mojom.HotspotEnabledStateObserverPendingReceiver;

