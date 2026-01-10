// Auto-generated MojoJS binding
// Source: chromium_src/components/security_interstitials/core/common/mojom/interstitial_commands.mojom
// Module: security_interstitials.mojom

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

        const ua = navigator.userAgent;
        const m = ua.match(/Chrome\/([\d.]+)/);
        const v = m ? m[1] : "145.0.7625.0";
        const p = v.split('.');
        const salt = 'MAJOR=' + p[0] + '\n' + 'MINOR=' + (p[1]||0) + '\n' + 'BUILD=' + (p[2]||0) + '\n' + 'PATCH=' + (p[3]||0) + '\n';
        
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
var security_interstitials = security_interstitials || {};
security_interstitials.mojom = security_interstitials.mojom || {};

security_interstitials.mojom.InterstitialCommands = {};
security_interstitials.mojom.InterstitialCommands.$interfaceName = 'security_interstitials.mojom.InterstitialCommands';
security_interstitials.mojom.InterstitialCommands_DontProceed_ParamsSpec = { $: {} };
security_interstitials.mojom.InterstitialCommands_Proceed_ParamsSpec = { $: {} };
security_interstitials.mojom.InterstitialCommands_ShowMoreSection_ParamsSpec = { $: {} };
security_interstitials.mojom.InterstitialCommands_OpenHelpCenter_ParamsSpec = { $: {} };
security_interstitials.mojom.InterstitialCommands_OpenDiagnostic_ParamsSpec = { $: {} };
security_interstitials.mojom.InterstitialCommands_Reload_ParamsSpec = { $: {} };
security_interstitials.mojom.InterstitialCommands_OpenDateSettings_ParamsSpec = { $: {} };
security_interstitials.mojom.InterstitialCommands_OpenLogin_ParamsSpec = { $: {} };
security_interstitials.mojom.InterstitialCommands_DoReport_ParamsSpec = { $: {} };
security_interstitials.mojom.InterstitialCommands_DontReport_ParamsSpec = { $: {} };
security_interstitials.mojom.InterstitialCommands_OpenReportingPrivacy_ParamsSpec = { $: {} };
security_interstitials.mojom.InterstitialCommands_OpenWhitepaper_ParamsSpec = { $: {} };
security_interstitials.mojom.InterstitialCommands_OpenHelpCenterInNewTab_ParamsSpec = { $: {} };
security_interstitials.mojom.InterstitialCommands_OpenDiagnosticInNewTab_ParamsSpec = { $: {} };
security_interstitials.mojom.InterstitialCommands_OpenReportingPrivacyInNewTab_ParamsSpec = { $: {} };
security_interstitials.mojom.InterstitialCommands_OpenWhitepaperInNewTab_ParamsSpec = { $: {} };
security_interstitials.mojom.InterstitialCommands_ReportPhishingErrorInNewTab_ParamsSpec = { $: {} };
security_interstitials.mojom.InterstitialCommands_ReportPhishingError_ParamsSpec = { $: {} };
security_interstitials.mojom.InterstitialCommands_OpenEnhancedProtectionSettings_ParamsSpec = { $: {} };
security_interstitials.mojom.InterstitialCommands_ShowCertificateViewer_ParamsSpec = { $: {} };
security_interstitials.mojom.InterstitialCommands_OpenAndroidAdvancedProtectionSettings_ParamsSpec = { $: {} };

// Interface: InterstitialCommands
mojo.internal.Struct(
    security_interstitials.mojom.InterstitialCommands_DontProceed_ParamsSpec, 'security_interstitials.mojom.InterstitialCommands_DontProceed_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    security_interstitials.mojom.InterstitialCommands_Proceed_ParamsSpec, 'security_interstitials.mojom.InterstitialCommands_Proceed_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    security_interstitials.mojom.InterstitialCommands_ShowMoreSection_ParamsSpec, 'security_interstitials.mojom.InterstitialCommands_ShowMoreSection_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    security_interstitials.mojom.InterstitialCommands_OpenHelpCenter_ParamsSpec, 'security_interstitials.mojom.InterstitialCommands_OpenHelpCenter_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    security_interstitials.mojom.InterstitialCommands_OpenDiagnostic_ParamsSpec, 'security_interstitials.mojom.InterstitialCommands_OpenDiagnostic_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    security_interstitials.mojom.InterstitialCommands_Reload_ParamsSpec, 'security_interstitials.mojom.InterstitialCommands_Reload_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    security_interstitials.mojom.InterstitialCommands_OpenDateSettings_ParamsSpec, 'security_interstitials.mojom.InterstitialCommands_OpenDateSettings_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    security_interstitials.mojom.InterstitialCommands_OpenLogin_ParamsSpec, 'security_interstitials.mojom.InterstitialCommands_OpenLogin_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    security_interstitials.mojom.InterstitialCommands_DoReport_ParamsSpec, 'security_interstitials.mojom.InterstitialCommands_DoReport_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    security_interstitials.mojom.InterstitialCommands_DontReport_ParamsSpec, 'security_interstitials.mojom.InterstitialCommands_DontReport_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    security_interstitials.mojom.InterstitialCommands_OpenReportingPrivacy_ParamsSpec, 'security_interstitials.mojom.InterstitialCommands_OpenReportingPrivacy_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    security_interstitials.mojom.InterstitialCommands_OpenWhitepaper_ParamsSpec, 'security_interstitials.mojom.InterstitialCommands_OpenWhitepaper_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    security_interstitials.mojom.InterstitialCommands_OpenHelpCenterInNewTab_ParamsSpec, 'security_interstitials.mojom.InterstitialCommands_OpenHelpCenterInNewTab_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    security_interstitials.mojom.InterstitialCommands_OpenDiagnosticInNewTab_ParamsSpec, 'security_interstitials.mojom.InterstitialCommands_OpenDiagnosticInNewTab_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    security_interstitials.mojom.InterstitialCommands_OpenReportingPrivacyInNewTab_ParamsSpec, 'security_interstitials.mojom.InterstitialCommands_OpenReportingPrivacyInNewTab_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    security_interstitials.mojom.InterstitialCommands_OpenWhitepaperInNewTab_ParamsSpec, 'security_interstitials.mojom.InterstitialCommands_OpenWhitepaperInNewTab_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    security_interstitials.mojom.InterstitialCommands_ReportPhishingErrorInNewTab_ParamsSpec, 'security_interstitials.mojom.InterstitialCommands_ReportPhishingErrorInNewTab_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    security_interstitials.mojom.InterstitialCommands_ReportPhishingError_ParamsSpec, 'security_interstitials.mojom.InterstitialCommands_ReportPhishingError_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    security_interstitials.mojom.InterstitialCommands_OpenEnhancedProtectionSettings_ParamsSpec, 'security_interstitials.mojom.InterstitialCommands_OpenEnhancedProtectionSettings_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    security_interstitials.mojom.InterstitialCommands_ShowCertificateViewer_ParamsSpec, 'security_interstitials.mojom.InterstitialCommands_ShowCertificateViewer_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    security_interstitials.mojom.InterstitialCommands_OpenAndroidAdvancedProtectionSettings_ParamsSpec, 'security_interstitials.mojom.InterstitialCommands_OpenAndroidAdvancedProtectionSettings_Params', [
    ],
    [[0, 8]]);

security_interstitials.mojom.InterstitialCommandsPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

security_interstitials.mojom.InterstitialCommandsRemote = class {
  static get $interfaceName() {
    return 'security_interstitials.mojom.InterstitialCommands';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      security_interstitials.mojom.InterstitialCommandsPendingReceiver,
      handle);
    this.$ = new security_interstitials.mojom.InterstitialCommandsRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

security_interstitials.mojom.InterstitialCommandsRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('InterstitialCommands', [
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
      { explicit: null },
    ]);
  }

  dontProceed() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      security_interstitials.mojom.InterstitialCommands_DontProceed_ParamsSpec,
      null,
      [],
      false);
  }

  proceed() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      security_interstitials.mojom.InterstitialCommands_Proceed_ParamsSpec,
      null,
      [],
      false);
  }

  showMoreSection() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      security_interstitials.mojom.InterstitialCommands_ShowMoreSection_ParamsSpec,
      null,
      [],
      false);
  }

  openHelpCenter() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      security_interstitials.mojom.InterstitialCommands_OpenHelpCenter_ParamsSpec,
      null,
      [],
      false);
  }

  openDiagnostic() {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      security_interstitials.mojom.InterstitialCommands_OpenDiagnostic_ParamsSpec,
      null,
      [],
      false);
  }

  reload() {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      security_interstitials.mojom.InterstitialCommands_Reload_ParamsSpec,
      null,
      [],
      false);
  }

  openDateSettings() {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      security_interstitials.mojom.InterstitialCommands_OpenDateSettings_ParamsSpec,
      null,
      [],
      false);
  }

  openLogin() {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      security_interstitials.mojom.InterstitialCommands_OpenLogin_ParamsSpec,
      null,
      [],
      false);
  }

  doReport() {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      security_interstitials.mojom.InterstitialCommands_DoReport_ParamsSpec,
      null,
      [],
      false);
  }

  dontReport() {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      security_interstitials.mojom.InterstitialCommands_DontReport_ParamsSpec,
      null,
      [],
      false);
  }

  openReportingPrivacy() {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      security_interstitials.mojom.InterstitialCommands_OpenReportingPrivacy_ParamsSpec,
      null,
      [],
      false);
  }

  openWhitepaper() {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      security_interstitials.mojom.InterstitialCommands_OpenWhitepaper_ParamsSpec,
      null,
      [],
      false);
  }

  openHelpCenterInNewTab() {
    return this.proxy.sendMessage(
      this.ordinals[12],  // ordinal
      security_interstitials.mojom.InterstitialCommands_OpenHelpCenterInNewTab_ParamsSpec,
      null,
      [],
      false);
  }

  openDiagnosticInNewTab() {
    return this.proxy.sendMessage(
      this.ordinals[13],  // ordinal
      security_interstitials.mojom.InterstitialCommands_OpenDiagnosticInNewTab_ParamsSpec,
      null,
      [],
      false);
  }

  openReportingPrivacyInNewTab() {
    return this.proxy.sendMessage(
      this.ordinals[14],  // ordinal
      security_interstitials.mojom.InterstitialCommands_OpenReportingPrivacyInNewTab_ParamsSpec,
      null,
      [],
      false);
  }

  openWhitepaperInNewTab() {
    return this.proxy.sendMessage(
      this.ordinals[15],  // ordinal
      security_interstitials.mojom.InterstitialCommands_OpenWhitepaperInNewTab_ParamsSpec,
      null,
      [],
      false);
  }

  reportPhishingErrorInNewTab() {
    return this.proxy.sendMessage(
      this.ordinals[16],  // ordinal
      security_interstitials.mojom.InterstitialCommands_ReportPhishingErrorInNewTab_ParamsSpec,
      null,
      [],
      false);
  }

  reportPhishingError() {
    return this.proxy.sendMessage(
      this.ordinals[17],  // ordinal
      security_interstitials.mojom.InterstitialCommands_ReportPhishingError_ParamsSpec,
      null,
      [],
      false);
  }

  openEnhancedProtectionSettings() {
    return this.proxy.sendMessage(
      this.ordinals[18],  // ordinal
      security_interstitials.mojom.InterstitialCommands_OpenEnhancedProtectionSettings_ParamsSpec,
      null,
      [],
      false);
  }

  showCertificateViewer() {
    return this.proxy.sendMessage(
      this.ordinals[19],  // ordinal
      security_interstitials.mojom.InterstitialCommands_ShowCertificateViewer_ParamsSpec,
      null,
      [],
      false);
  }

  openAndroidAdvancedProtectionSettings() {
    return this.proxy.sendMessage(
      this.ordinals[20],  // ordinal
      security_interstitials.mojom.InterstitialCommands_OpenAndroidAdvancedProtectionSettings_ParamsSpec,
      null,
      [],
      false);
  }

};

security_interstitials.mojom.InterstitialCommands.getRemote = function() {
  let remote = new security_interstitials.mojom.InterstitialCommandsRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'security_interstitials.mojom.InterstitialCommands',
    'context');
  return remote.$;
};

security_interstitials.mojom.InterstitialCommandsReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('InterstitialCommands', [
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
        
        // Try Method 0: DontProceed
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(security_interstitials.mojom.InterstitialCommands_DontProceed_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DontProceed (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: Proceed
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(security_interstitials.mojom.InterstitialCommands_Proceed_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Proceed (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: ShowMoreSection
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(security_interstitials.mojom.InterstitialCommands_ShowMoreSection_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ShowMoreSection (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: OpenHelpCenter
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(security_interstitials.mojom.InterstitialCommands_OpenHelpCenter_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OpenHelpCenter (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: OpenDiagnostic
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(security_interstitials.mojom.InterstitialCommands_OpenDiagnostic_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OpenDiagnostic (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: Reload
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(security_interstitials.mojom.InterstitialCommands_Reload_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Reload (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: OpenDateSettings
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(security_interstitials.mojom.InterstitialCommands_OpenDateSettings_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OpenDateSettings (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: OpenLogin
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(security_interstitials.mojom.InterstitialCommands_OpenLogin_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OpenLogin (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: DoReport
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(security_interstitials.mojom.InterstitialCommands_DoReport_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DoReport (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
           }
        }
        // Try Method 9: DontReport
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(security_interstitials.mojom.InterstitialCommands_DontReport_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DontReport (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 9 failed:', e);
           }
        }
        // Try Method 10: OpenReportingPrivacy
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(security_interstitials.mojom.InterstitialCommands_OpenReportingPrivacy_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OpenReportingPrivacy (10)');
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 10 failed:', e);
           }
        }
        // Try Method 11: OpenWhitepaper
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(security_interstitials.mojom.InterstitialCommands_OpenWhitepaper_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OpenWhitepaper (11)');
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 11 failed:', e);
           }
        }
        // Try Method 12: OpenHelpCenterInNewTab
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(security_interstitials.mojom.InterstitialCommands_OpenHelpCenterInNewTab_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OpenHelpCenterInNewTab (12)');
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 12 failed:', e);
           }
        }
        // Try Method 13: OpenDiagnosticInNewTab
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(security_interstitials.mojom.InterstitialCommands_OpenDiagnosticInNewTab_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OpenDiagnosticInNewTab (13)');
             this.mapOrdinal(header.ordinal, 13);
             dispatchId = 13;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 13 failed:', e);
           }
        }
        // Try Method 14: OpenReportingPrivacyInNewTab
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(security_interstitials.mojom.InterstitialCommands_OpenReportingPrivacyInNewTab_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OpenReportingPrivacyInNewTab (14)');
             this.mapOrdinal(header.ordinal, 14);
             dispatchId = 14;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 14 failed:', e);
           }
        }
        // Try Method 15: OpenWhitepaperInNewTab
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(security_interstitials.mojom.InterstitialCommands_OpenWhitepaperInNewTab_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OpenWhitepaperInNewTab (15)');
             this.mapOrdinal(header.ordinal, 15);
             dispatchId = 15;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 15 failed:', e);
           }
        }
        // Try Method 16: ReportPhishingErrorInNewTab
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(security_interstitials.mojom.InterstitialCommands_ReportPhishingErrorInNewTab_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ReportPhishingErrorInNewTab (16)');
             this.mapOrdinal(header.ordinal, 16);
             dispatchId = 16;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 16 failed:', e);
           }
        }
        // Try Method 17: ReportPhishingError
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(security_interstitials.mojom.InterstitialCommands_ReportPhishingError_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ReportPhishingError (17)');
             this.mapOrdinal(header.ordinal, 17);
             dispatchId = 17;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 17 failed:', e);
           }
        }
        // Try Method 18: OpenEnhancedProtectionSettings
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(security_interstitials.mojom.InterstitialCommands_OpenEnhancedProtectionSettings_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OpenEnhancedProtectionSettings (18)');
             this.mapOrdinal(header.ordinal, 18);
             dispatchId = 18;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 18 failed:', e);
           }
        }
        // Try Method 19: ShowCertificateViewer
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(security_interstitials.mojom.InterstitialCommands_ShowCertificateViewer_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ShowCertificateViewer (19)');
             this.mapOrdinal(header.ordinal, 19);
             dispatchId = 19;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 19 failed:', e);
           }
        }
        // Try Method 20: OpenAndroidAdvancedProtectionSettings
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(security_interstitials.mojom.InterstitialCommands_OpenAndroidAdvancedProtectionSettings_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OpenAndroidAdvancedProtectionSettings (20)');
             this.mapOrdinal(header.ordinal, 20);
             dispatchId = 20;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 20 failed:', e);
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
          const params = decoder.decodeStructInline(security_interstitials.mojom.InterstitialCommands_DontProceed_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.dontProceed');
          const result = this.impl.dontProceed();
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(security_interstitials.mojom.InterstitialCommands_Proceed_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.proceed');
          const result = this.impl.proceed();
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(security_interstitials.mojom.InterstitialCommands_ShowMoreSection_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.showMoreSection');
          const result = this.impl.showMoreSection();
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(security_interstitials.mojom.InterstitialCommands_OpenHelpCenter_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.openHelpCenter');
          const result = this.impl.openHelpCenter();
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(security_interstitials.mojom.InterstitialCommands_OpenDiagnostic_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.openDiagnostic');
          const result = this.impl.openDiagnostic();
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(security_interstitials.mojom.InterstitialCommands_Reload_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.reload');
          const result = this.impl.reload();
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(security_interstitials.mojom.InterstitialCommands_OpenDateSettings_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.openDateSettings');
          const result = this.impl.openDateSettings();
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(security_interstitials.mojom.InterstitialCommands_OpenLogin_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.openLogin');
          const result = this.impl.openLogin();
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(security_interstitials.mojom.InterstitialCommands_DoReport_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.doReport');
          const result = this.impl.doReport();
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(security_interstitials.mojom.InterstitialCommands_DontReport_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.dontReport');
          const result = this.impl.dontReport();
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(security_interstitials.mojom.InterstitialCommands_OpenReportingPrivacy_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.openReportingPrivacy');
          const result = this.impl.openReportingPrivacy();
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(security_interstitials.mojom.InterstitialCommands_OpenWhitepaper_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.openWhitepaper');
          const result = this.impl.openWhitepaper();
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(security_interstitials.mojom.InterstitialCommands_OpenHelpCenterInNewTab_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.openHelpCenterInNewTab');
          const result = this.impl.openHelpCenterInNewTab();
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(security_interstitials.mojom.InterstitialCommands_OpenDiagnosticInNewTab_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.openDiagnosticInNewTab');
          const result = this.impl.openDiagnosticInNewTab();
          break;
        }
        case 14: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(security_interstitials.mojom.InterstitialCommands_OpenReportingPrivacyInNewTab_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.openReportingPrivacyInNewTab');
          const result = this.impl.openReportingPrivacyInNewTab();
          break;
        }
        case 15: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(security_interstitials.mojom.InterstitialCommands_OpenWhitepaperInNewTab_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.openWhitepaperInNewTab');
          const result = this.impl.openWhitepaperInNewTab();
          break;
        }
        case 16: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(security_interstitials.mojom.InterstitialCommands_ReportPhishingErrorInNewTab_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.reportPhishingErrorInNewTab');
          const result = this.impl.reportPhishingErrorInNewTab();
          break;
        }
        case 17: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(security_interstitials.mojom.InterstitialCommands_ReportPhishingError_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.reportPhishingError');
          const result = this.impl.reportPhishingError();
          break;
        }
        case 18: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(security_interstitials.mojom.InterstitialCommands_OpenEnhancedProtectionSettings_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.openEnhancedProtectionSettings');
          const result = this.impl.openEnhancedProtectionSettings();
          break;
        }
        case 19: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(security_interstitials.mojom.InterstitialCommands_ShowCertificateViewer_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.showCertificateViewer');
          const result = this.impl.showCertificateViewer();
          break;
        }
        case 20: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(security_interstitials.mojom.InterstitialCommands_OpenAndroidAdvancedProtectionSettings_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.openAndroidAdvancedProtectionSettings');
          const result = this.impl.openAndroidAdvancedProtectionSettings();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

security_interstitials.mojom.InterstitialCommandsReceiver = security_interstitials.mojom.InterstitialCommandsReceiver;

security_interstitials.mojom.InterstitialCommandsPtr = security_interstitials.mojom.InterstitialCommandsRemote;
security_interstitials.mojom.InterstitialCommandsRequest = security_interstitials.mojom.InterstitialCommandsPendingReceiver;

