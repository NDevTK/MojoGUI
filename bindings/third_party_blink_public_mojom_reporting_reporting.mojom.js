// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/reporting/reporting.mojom
// Module: blink.mojom

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
var blink = blink || {};
blink.mojom = blink.mojom || {};
var mojo_base = mojo_base || {};
var url = url || {};

blink.mojom.ReportingServiceProxy = {};
blink.mojom.ReportingServiceProxy.$interfaceName = 'blink.mojom.ReportingServiceProxy';
blink.mojom.ReportingServiceProxy_QueueInterventionReport_ParamsSpec = { $: {} };
blink.mojom.ReportingServiceProxy_QueueDeprecationReport_ParamsSpec = { $: {} };
blink.mojom.ReportingServiceProxy_QueueCspViolationReport_ParamsSpec = { $: {} };
blink.mojom.ReportingServiceProxy_QueueIntegrityViolationReport_ParamsSpec = { $: {} };
blink.mojom.ReportingServiceProxy_QueuePermissionsPolicyViolationReport_ParamsSpec = { $: {} };
blink.mojom.ReportingServiceProxy_QueuePotentialPermissionsPolicyViolationReport_ParamsSpec = { $: {} };
blink.mojom.ReportingServiceProxy_QueueDocumentPolicyViolationReport_ParamsSpec = { $: {} };
blink.mojom.ReportingServiceProxy_QueueCSPHashReport_ParamsSpec = { $: {} };

// Interface: ReportingServiceProxy
mojo.internal.Struct(
    blink.mojom.ReportingServiceProxy_QueueInterventionReport_ParamsSpec, 'blink.mojom.ReportingServiceProxy_QueueInterventionReport_Params', [
      mojo.internal.StructField('url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('id', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('message', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('source_file', 24, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('line_number', 32, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('column_number', 36, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 48]]);

mojo.internal.Struct(
    blink.mojom.ReportingServiceProxy_QueueDeprecationReport_ParamsSpec, 'blink.mojom.ReportingServiceProxy_QueueDeprecationReport_Params', [
      mojo.internal.StructField('url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('id', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('anticipatedRemoval', 16, 0, mojo_base.mojom.TimeSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('message', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('source_file', 32, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('line_number', 40, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('column_number', 44, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 56]]);

mojo.internal.Struct(
    blink.mojom.ReportingServiceProxy_QueueCspViolationReport_ParamsSpec, 'blink.mojom.ReportingServiceProxy_QueueCspViolationReport_Params', [
      mojo.internal.StructField('url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('group', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('document_url', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('referrer', 24, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('blocked_url', 32, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('effective_directive', 40, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('original_policy', 48, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('source_file', 56, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('script_sample', 64, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('disposition', 72, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('line_number', 80, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('column_number', 84, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('status_code', 88, 0, mojo.internal.Uint16, 0, false, 0, undefined),
    ],
    [[0, 104]]);

mojo.internal.Struct(
    blink.mojom.ReportingServiceProxy_QueueIntegrityViolationReport_ParamsSpec, 'blink.mojom.ReportingServiceProxy_QueueIntegrityViolationReport_Params', [
      mojo.internal.StructField('url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('endpoint', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('document_url', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('blocked_url', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('destination', 32, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('report_only', 40, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 56]]);

mojo.internal.Struct(
    blink.mojom.ReportingServiceProxy_QueuePermissionsPolicyViolationReport_ParamsSpec, 'blink.mojom.ReportingServiceProxy_QueuePermissionsPolicyViolationReport_Params', [
      mojo.internal.StructField('url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('endpoint', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('policy_id', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('disposition', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('message', 32, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('source_file', 40, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('line_number', 48, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('column_number', 52, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 64]]);

mojo.internal.Struct(
    blink.mojom.ReportingServiceProxy_QueuePotentialPermissionsPolicyViolationReport_ParamsSpec, 'blink.mojom.ReportingServiceProxy_QueuePotentialPermissionsPolicyViolationReport_Params', [
      mojo.internal.StructField('url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('endpoint', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('policy_id', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('disposition', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('message', 32, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('allow_attribute', 40, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('src_attribute', 48, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('source_file', 56, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('line_number', 64, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('column_number', 68, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 80]]);

mojo.internal.Struct(
    blink.mojom.ReportingServiceProxy_QueueDocumentPolicyViolationReport_ParamsSpec, 'blink.mojom.ReportingServiceProxy_QueueDocumentPolicyViolationReport_Params', [
      mojo.internal.StructField('url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('group', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('policy_id', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('disposition', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('message', 32, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('source_file', 40, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('line_number', 48, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('column_number', 52, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 64]]);

mojo.internal.Struct(
    blink.mojom.ReportingServiceProxy_QueueCSPHashReport_ParamsSpec, 'blink.mojom.ReportingServiceProxy_QueueCSPHashReport_Params', [
      mojo.internal.StructField('url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('endpoint', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('subresource_url', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('integrity_hash', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('type', 32, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('destination', 40, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 56]]);

blink.mojom.ReportingServiceProxyPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.ReportingServiceProxyRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.ReportingServiceProxy';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.ReportingServiceProxyPendingReceiver,
      handle);
    this.$ = new blink.mojom.ReportingServiceProxyRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  queueInterventionReport(url, id, message, source_file, line_number, column_number) {
    return this.$.queueInterventionReport(url, id, message, source_file, line_number, column_number);
  }
  queueDeprecationReport(url, id, anticipatedRemoval, message, source_file, line_number, column_number) {
    return this.$.queueDeprecationReport(url, id, anticipatedRemoval, message, source_file, line_number, column_number);
  }
  queueCspViolationReport(url, group, document_url, referrer, blocked_url, effective_directive, original_policy, source_file, script_sample, disposition, status_code, line_number, column_number) {
    return this.$.queueCspViolationReport(url, group, document_url, referrer, blocked_url, effective_directive, original_policy, source_file, script_sample, disposition, status_code, line_number, column_number);
  }
  queueIntegrityViolationReport(url, endpoint, document_url, blocked_url, destination, report_only) {
    return this.$.queueIntegrityViolationReport(url, endpoint, document_url, blocked_url, destination, report_only);
  }
  queuePermissionsPolicyViolationReport(url, endpoint, policy_id, disposition, message, source_file, line_number, column_number) {
    return this.$.queuePermissionsPolicyViolationReport(url, endpoint, policy_id, disposition, message, source_file, line_number, column_number);
  }
  queuePotentialPermissionsPolicyViolationReport(url, endpoint, policy_id, disposition, message, allow_attribute, src_attribute, source_file, line_number, column_number) {
    return this.$.queuePotentialPermissionsPolicyViolationReport(url, endpoint, policy_id, disposition, message, allow_attribute, src_attribute, source_file, line_number, column_number);
  }
  queueDocumentPolicyViolationReport(url, group, policy_id, disposition, message, source_file, line_number, column_number) {
    return this.$.queueDocumentPolicyViolationReport(url, group, policy_id, disposition, message, source_file, line_number, column_number);
  }
  queueCSPHashReport(url, endpoint, subresource_url, integrity_hash, type, destination) {
    return this.$.queueCSPHashReport(url, endpoint, subresource_url, integrity_hash, type, destination);
  }
};

blink.mojom.ReportingServiceProxyRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ReportingServiceProxy', [
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

  queueInterventionReport(url, id, message, source_file, line_number, column_number) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      blink.mojom.ReportingServiceProxy_QueueInterventionReport_ParamsSpec,
      null,
      [url, id, message, source_file, line_number, column_number],
      false);
  }

  queueDeprecationReport(url, id, anticipatedRemoval, message, source_file, line_number, column_number) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      blink.mojom.ReportingServiceProxy_QueueDeprecationReport_ParamsSpec,
      null,
      [url, id, anticipatedRemoval, message, source_file, line_number, column_number],
      false);
  }

  queueCspViolationReport(url, group, document_url, referrer, blocked_url, effective_directive, original_policy, source_file, script_sample, disposition, status_code, line_number, column_number) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      blink.mojom.ReportingServiceProxy_QueueCspViolationReport_ParamsSpec,
      null,
      [url, group, document_url, referrer, blocked_url, effective_directive, original_policy, source_file, script_sample, disposition, status_code, line_number, column_number],
      false);
  }

  queueIntegrityViolationReport(url, endpoint, document_url, blocked_url, destination, report_only) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      blink.mojom.ReportingServiceProxy_QueueIntegrityViolationReport_ParamsSpec,
      null,
      [url, endpoint, document_url, blocked_url, destination, report_only],
      false);
  }

  queuePermissionsPolicyViolationReport(url, endpoint, policy_id, disposition, message, source_file, line_number, column_number) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      blink.mojom.ReportingServiceProxy_QueuePermissionsPolicyViolationReport_ParamsSpec,
      null,
      [url, endpoint, policy_id, disposition, message, source_file, line_number, column_number],
      false);
  }

  queuePotentialPermissionsPolicyViolationReport(url, endpoint, policy_id, disposition, message, allow_attribute, src_attribute, source_file, line_number, column_number) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      blink.mojom.ReportingServiceProxy_QueuePotentialPermissionsPolicyViolationReport_ParamsSpec,
      null,
      [url, endpoint, policy_id, disposition, message, allow_attribute, src_attribute, source_file, line_number, column_number],
      false);
  }

  queueDocumentPolicyViolationReport(url, group, policy_id, disposition, message, source_file, line_number, column_number) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      blink.mojom.ReportingServiceProxy_QueueDocumentPolicyViolationReport_ParamsSpec,
      null,
      [url, group, policy_id, disposition, message, source_file, line_number, column_number],
      false);
  }

  queueCSPHashReport(url, endpoint, subresource_url, integrity_hash, type, destination) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      blink.mojom.ReportingServiceProxy_QueueCSPHashReport_ParamsSpec,
      null,
      [url, endpoint, subresource_url, integrity_hash, type, destination],
      false);
  }

};

blink.mojom.ReportingServiceProxy.getRemote = function() {
  let remote = new blink.mojom.ReportingServiceProxyRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.ReportingServiceProxy',
    'context');
  return remote.$;
};

blink.mojom.ReportingServiceProxyReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ReportingServiceProxy', [
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
        
        // Try Method 0: QueueInterventionReport
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.ReportingServiceProxy_QueueInterventionReport_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> QueueInterventionReport (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: QueueDeprecationReport
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.ReportingServiceProxy_QueueDeprecationReport_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> QueueDeprecationReport (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: QueueCspViolationReport
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.ReportingServiceProxy_QueueCspViolationReport_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> QueueCspViolationReport (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: QueueIntegrityViolationReport
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.ReportingServiceProxy_QueueIntegrityViolationReport_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> QueueIntegrityViolationReport (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: QueuePermissionsPolicyViolationReport
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.ReportingServiceProxy_QueuePermissionsPolicyViolationReport_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> QueuePermissionsPolicyViolationReport (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: QueuePotentialPermissionsPolicyViolationReport
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.ReportingServiceProxy_QueuePotentialPermissionsPolicyViolationReport_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> QueuePotentialPermissionsPolicyViolationReport (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: QueueDocumentPolicyViolationReport
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.ReportingServiceProxy_QueueDocumentPolicyViolationReport_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> QueueDocumentPolicyViolationReport (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: QueueCSPHashReport
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.ReportingServiceProxy_QueueCSPHashReport_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> QueueCSPHashReport (7)');
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
          const params = decoder.decodeStructInline(blink.mojom.ReportingServiceProxy_QueueInterventionReport_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.queueInterventionReport');
          const result = this.impl.queueInterventionReport(params.url, params.id, params.message, params.source_file, params.line_number, params.column_number);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.ReportingServiceProxy_QueueDeprecationReport_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.queueDeprecationReport');
          const result = this.impl.queueDeprecationReport(params.url, params.id, params.anticipatedRemoval, params.message, params.source_file, params.line_number, params.column_number);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.ReportingServiceProxy_QueueCspViolationReport_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.queueCspViolationReport');
          const result = this.impl.queueCspViolationReport(params.url, params.group, params.document_url, params.referrer, params.blocked_url, params.effective_directive, params.original_policy, params.source_file, params.script_sample, params.disposition, params.status_code, params.line_number, params.column_number);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.ReportingServiceProxy_QueueIntegrityViolationReport_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.queueIntegrityViolationReport');
          const result = this.impl.queueIntegrityViolationReport(params.url, params.endpoint, params.document_url, params.blocked_url, params.destination, params.report_only);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.ReportingServiceProxy_QueuePermissionsPolicyViolationReport_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.queuePermissionsPolicyViolationReport');
          const result = this.impl.queuePermissionsPolicyViolationReport(params.url, params.endpoint, params.policy_id, params.disposition, params.message, params.source_file, params.line_number, params.column_number);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.ReportingServiceProxy_QueuePotentialPermissionsPolicyViolationReport_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.queuePotentialPermissionsPolicyViolationReport');
          const result = this.impl.queuePotentialPermissionsPolicyViolationReport(params.url, params.endpoint, params.policy_id, params.disposition, params.message, params.allow_attribute, params.src_attribute, params.source_file, params.line_number, params.column_number);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.ReportingServiceProxy_QueueDocumentPolicyViolationReport_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.queueDocumentPolicyViolationReport');
          const result = this.impl.queueDocumentPolicyViolationReport(params.url, params.group, params.policy_id, params.disposition, params.message, params.source_file, params.line_number, params.column_number);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.ReportingServiceProxy_QueueCSPHashReport_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.queueCSPHashReport');
          const result = this.impl.queueCSPHashReport(params.url, params.endpoint, params.subresource_url, params.integrity_hash, params.type, params.destination);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

blink.mojom.ReportingServiceProxyReceiver = blink.mojom.ReportingServiceProxyReceiver;

blink.mojom.ReportingServiceProxyPtr = blink.mojom.ReportingServiceProxyRemote;
blink.mojom.ReportingServiceProxyRequest = blink.mojom.ReportingServiceProxyPendingReceiver;

