// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/network_context_client.mojom
// Module: network.mojom

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

        // Allow forcing version from external script
        if (window.mojoVersion) { v = window.mojoVersion; }
        
        const p = v.split('.');
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
var network = network || {};
network.mojom = network.mojom || {};
var mojo_base = mojo_base || {};
var url = url || {};

network.mojom.NetworkContextClient = {};
network.mojom.NetworkContextClient.$interfaceName = 'network.mojom.NetworkContextClient';
network.mojom.NetworkContextClient_OnFileUploadRequested_ParamsSpec = { $: {} };
network.mojom.NetworkContextClient_OnFileUploadRequested_ResponseParamsSpec = { $: {} };
network.mojom.NetworkContextClient_OnCanSendReportingReports_ParamsSpec = { $: {} };
network.mojom.NetworkContextClient_OnCanSendReportingReports_ResponseParamsSpec = { $: {} };
network.mojom.NetworkContextClient_OnCanSendDomainReliabilityUpload_ParamsSpec = { $: {} };
network.mojom.NetworkContextClient_OnCanSendDomainReliabilityUpload_ResponseParamsSpec = { $: {} };
network.mojom.NetworkContextClient_OnGenerateHttpNegotiateAuthToken_ParamsSpec = { $: {} };
network.mojom.NetworkContextClient_OnGenerateHttpNegotiateAuthToken_ResponseParamsSpec = { $: {} };
network.mojom.NetworkContextClient_OnCanSendSCTAuditingReport_ParamsSpec = { $: {} };
network.mojom.NetworkContextClient_OnCanSendSCTAuditingReport_ResponseParamsSpec = { $: {} };
network.mojom.NetworkContextClient_OnNewSCTAuditingReportSent_ParamsSpec = { $: {} };

// Interface: NetworkContextClient
mojo.internal.Struct(
    network.mojom.NetworkContextClient_OnFileUploadRequested_ParamsSpec, 'network.mojom.NetworkContextClient_OnFileUploadRequested_Params', [
      mojo.internal.StructField('file_paths', 0, 0, mojo.internal.Array(mojo_base.mojom.FilePathSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('destination_url', 8, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('process_id', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('async', 20, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    network.mojom.NetworkContextClient_OnFileUploadRequested_ResponseParamsSpec, 'network.mojom.NetworkContextClient_OnFileUploadRequested_ResponseParams', [
      mojo.internal.StructField('files', 0, 0, mojo.internal.Array(mojo_base.mojom.ReadOnlyFileSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('net_error', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    network.mojom.NetworkContextClient_OnCanSendReportingReports_ParamsSpec, 'network.mojom.NetworkContextClient_OnCanSendReportingReports_Params', [
      mojo.internal.StructField('origins', 0, 0, mojo.internal.Array(url.mojom.OriginSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.NetworkContextClient_OnCanSendReportingReports_ResponseParamsSpec, 'network.mojom.NetworkContextClient_OnCanSendReportingReports_ResponseParams', [
      mojo.internal.StructField('origins', 0, 0, mojo.internal.Array(url.mojom.OriginSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.NetworkContextClient_OnCanSendDomainReliabilityUpload_ParamsSpec, 'network.mojom.NetworkContextClient_OnCanSendDomainReliabilityUpload_Params', [
      mojo.internal.StructField('origin', 0, 0, url.mojom.OriginSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.NetworkContextClient_OnCanSendDomainReliabilityUpload_ResponseParamsSpec, 'network.mojom.NetworkContextClient_OnCanSendDomainReliabilityUpload_ResponseParams', [
      mojo.internal.StructField('allowed', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.NetworkContextClient_OnGenerateHttpNegotiateAuthToken_ParamsSpec, 'network.mojom.NetworkContextClient_OnGenerateHttpNegotiateAuthToken_Params', [
      mojo.internal.StructField('server_auth_token', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('auth_negotiate_android_account_type', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('spn', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('can_delegate', 24, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    network.mojom.NetworkContextClient_OnGenerateHttpNegotiateAuthToken_ResponseParamsSpec, 'network.mojom.NetworkContextClient_OnGenerateHttpNegotiateAuthToken_ResponseParams', [
      mojo.internal.StructField('auth_token', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('result', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    network.mojom.NetworkContextClient_OnCanSendSCTAuditingReport_ParamsSpec, 'network.mojom.NetworkContextClient_OnCanSendSCTAuditingReport_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    network.mojom.NetworkContextClient_OnCanSendSCTAuditingReport_ResponseParamsSpec, 'network.mojom.NetworkContextClient_OnCanSendSCTAuditingReport_ResponseParams', [
      mojo.internal.StructField('allowed', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.NetworkContextClient_OnNewSCTAuditingReportSent_ParamsSpec, 'network.mojom.NetworkContextClient_OnNewSCTAuditingReportSent_Params', [
    ],
    [[0, 8]]);

network.mojom.NetworkContextClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

network.mojom.NetworkContextClientRemote = class {
  static get $interfaceName() {
    return 'network.mojom.NetworkContextClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      network.mojom.NetworkContextClientPendingReceiver,
      handle);
    this.$ = new network.mojom.NetworkContextClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

network.mojom.NetworkContextClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('NetworkContextClient', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  onFileUploadRequested(process_id, async, file_paths, destination_url) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      network.mojom.NetworkContextClient_OnFileUploadRequested_ParamsSpec,
      network.mojom.NetworkContextClient_OnFileUploadRequested_ResponseParamsSpec,
      [process_id, async, file_paths, destination_url],
      false);
  }

  onCanSendReportingReports(origins) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      network.mojom.NetworkContextClient_OnCanSendReportingReports_ParamsSpec,
      network.mojom.NetworkContextClient_OnCanSendReportingReports_ResponseParamsSpec,
      [origins],
      false);
  }

  onCanSendDomainReliabilityUpload(origin) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      network.mojom.NetworkContextClient_OnCanSendDomainReliabilityUpload_ParamsSpec,
      network.mojom.NetworkContextClient_OnCanSendDomainReliabilityUpload_ResponseParamsSpec,
      [origin],
      false);
  }

  onGenerateHttpNegotiateAuthToken(server_auth_token, can_delegate, auth_negotiate_android_account_type, spn) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      network.mojom.NetworkContextClient_OnGenerateHttpNegotiateAuthToken_ParamsSpec,
      network.mojom.NetworkContextClient_OnGenerateHttpNegotiateAuthToken_ResponseParamsSpec,
      [server_auth_token, can_delegate, auth_negotiate_android_account_type, spn],
      false);
  }

  onCanSendSCTAuditingReport() {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      network.mojom.NetworkContextClient_OnCanSendSCTAuditingReport_ParamsSpec,
      network.mojom.NetworkContextClient_OnCanSendSCTAuditingReport_ResponseParamsSpec,
      [],
      false);
  }

  onNewSCTAuditingReportSent() {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      network.mojom.NetworkContextClient_OnNewSCTAuditingReportSent_ParamsSpec,
      null,
      [],
      false);
  }

};

network.mojom.NetworkContextClient.getRemote = function() {
  let remote = new network.mojom.NetworkContextClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'network.mojom.NetworkContextClient',
    'context');
  return remote.$;
};

network.mojom.NetworkContextClientReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('NetworkContextClient', [
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
        
        // Try Method 0: OnFileUploadRequested
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(network.mojom.NetworkContextClient_OnFileUploadRequested_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnFileUploadRequested (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: OnCanSendReportingReports
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(network.mojom.NetworkContextClient_OnCanSendReportingReports_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnCanSendReportingReports (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: OnCanSendDomainReliabilityUpload
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(network.mojom.NetworkContextClient_OnCanSendDomainReliabilityUpload_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnCanSendDomainReliabilityUpload (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: OnGenerateHttpNegotiateAuthToken
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(network.mojom.NetworkContextClient_OnGenerateHttpNegotiateAuthToken_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnGenerateHttpNegotiateAuthToken (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: OnCanSendSCTAuditingReport
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(network.mojom.NetworkContextClient_OnCanSendSCTAuditingReport_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnCanSendSCTAuditingReport (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: OnNewSCTAuditingReportSent
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(network.mojom.NetworkContextClient_OnNewSCTAuditingReportSent_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnNewSCTAuditingReportSent (5)');
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
          const params = decoder.decodeStructInline(network.mojom.NetworkContextClient_OnFileUploadRequested_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onFileUploadRequested');
          const result = this.impl.onFileUploadRequested(params.process_id, params.async, params.file_paths, params.destination_url);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, network.mojom.NetworkContextClient_OnFileUploadRequested_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.NetworkContextClient_OnCanSendReportingReports_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onCanSendReportingReports');
          const result = this.impl.onCanSendReportingReports(params.origins);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, network.mojom.NetworkContextClient_OnCanSendReportingReports_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.NetworkContextClient_OnCanSendDomainReliabilityUpload_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onCanSendDomainReliabilityUpload');
          const result = this.impl.onCanSendDomainReliabilityUpload(params.origin);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, network.mojom.NetworkContextClient_OnCanSendDomainReliabilityUpload_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.NetworkContextClient_OnGenerateHttpNegotiateAuthToken_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onGenerateHttpNegotiateAuthToken');
          const result = this.impl.onGenerateHttpNegotiateAuthToken(params.server_auth_token, params.can_delegate, params.auth_negotiate_android_account_type, params.spn);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, network.mojom.NetworkContextClient_OnGenerateHttpNegotiateAuthToken_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.NetworkContextClient_OnCanSendSCTAuditingReport_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onCanSendSCTAuditingReport');
          const result = this.impl.onCanSendSCTAuditingReport();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, network.mojom.NetworkContextClient_OnCanSendSCTAuditingReport_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.NetworkContextClient_OnNewSCTAuditingReportSent_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onNewSCTAuditingReportSent');
          const result = this.impl.onNewSCTAuditingReportSent();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

network.mojom.NetworkContextClientReceiver = network.mojom.NetworkContextClientReceiver;

network.mojom.NetworkContextClientPtr = network.mojom.NetworkContextClientRemote;
network.mojom.NetworkContextClientRequest = network.mojom.NetworkContextClientPendingReceiver;

