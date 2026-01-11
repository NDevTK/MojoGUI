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
 var mojo = mojo || {};
 mojo.internal = mojo.internal || {};
 mojo.internal.bindings = mojo.internal.bindings || {};
 

 mojo.internal.bindings.blink = mojo.internal.bindings.blink || {};
mojo.internal.bindings.blink.mojom = mojo.internal.bindings.blink.mojom || {};
mojo.internal.bindings.mojo_base = mojo.internal.bindings.mojo_base || {};
mojo.internal.bindings.url = mojo.internal.bindings.url || {};

mojo.internal.bindings.blink.mojom.ReportingServiceProxy = {};
mojo.internal.bindings.blink.mojom.ReportingServiceProxy.$interfaceName = 'blink.mojom.ReportingServiceProxy';
mojo.internal.bindings.blink.mojom.ReportingServiceProxy_QueueInterventionReport_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.ReportingServiceProxy_QueueDeprecationReport_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.ReportingServiceProxy_QueueCspViolationReport_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.ReportingServiceProxy_QueueIntegrityViolationReport_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.ReportingServiceProxy_QueuePermissionsPolicyViolationReport_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.ReportingServiceProxy_QueuePotentialPermissionsPolicyViolationReport_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.ReportingServiceProxy_QueueDocumentPolicyViolationReport_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.ReportingServiceProxy_QueueCSPHashReport_ParamsSpec = { $: {} };

// Interface: ReportingServiceProxy
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.ReportingServiceProxy_QueueInterventionReport_ParamsSpec, 'blink.mojom.ReportingServiceProxy_QueueInterventionReport_Params', [
      mojo.internal.StructField('arg_url', 0, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_id', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_message', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_source_file', 24, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_line_number', 32, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_column_number', 36, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 48]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.ReportingServiceProxy_QueueDeprecationReport_ParamsSpec, 'blink.mojom.ReportingServiceProxy_QueueDeprecationReport_Params', [
      mojo.internal.StructField('arg_url', 0, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_id', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_anticipatedRemoval', 16, 0, mojo.internal.bindings.mojo_base.mojom.TimeSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_message', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_source_file', 32, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_line_number', 40, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_column_number', 44, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 56]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.ReportingServiceProxy_QueueCspViolationReport_ParamsSpec, 'blink.mojom.ReportingServiceProxy_QueueCspViolationReport_Params', [
      mojo.internal.StructField('arg_url', 0, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_group', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_document_url', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_referrer', 24, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_blocked_url', 32, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_effective_directive', 40, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_original_policy', 48, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_source_file', 56, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_script_sample', 64, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_disposition', 72, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_line_number', 80, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_column_number', 84, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_status_code', 88, 0, mojo.internal.Uint16, 0, false, 0, undefined),
    ],
    [[0, 104]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.ReportingServiceProxy_QueueIntegrityViolationReport_ParamsSpec, 'blink.mojom.ReportingServiceProxy_QueueIntegrityViolationReport_Params', [
      mojo.internal.StructField('arg_url', 0, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_endpoint', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_document_url', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_blocked_url', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_destination', 32, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_report_only', 40, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 56]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.ReportingServiceProxy_QueuePermissionsPolicyViolationReport_ParamsSpec, 'blink.mojom.ReportingServiceProxy_QueuePermissionsPolicyViolationReport_Params', [
      mojo.internal.StructField('arg_url', 0, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_endpoint', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_policy_id', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_disposition', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_message', 32, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_source_file', 40, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_line_number', 48, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_column_number', 52, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 64]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.ReportingServiceProxy_QueuePotentialPermissionsPolicyViolationReport_ParamsSpec, 'blink.mojom.ReportingServiceProxy_QueuePotentialPermissionsPolicyViolationReport_Params', [
      mojo.internal.StructField('arg_url', 0, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_endpoint', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_policy_id', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_disposition', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_message', 32, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_allow_attribute', 40, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_src_attribute', 48, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_source_file', 56, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_line_number', 64, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_column_number', 68, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 80]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.ReportingServiceProxy_QueueDocumentPolicyViolationReport_ParamsSpec, 'blink.mojom.ReportingServiceProxy_QueueDocumentPolicyViolationReport_Params', [
      mojo.internal.StructField('arg_url', 0, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_group', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_policy_id', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_disposition', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_message', 32, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_source_file', 40, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_line_number', 48, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_column_number', 52, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 64]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.ReportingServiceProxy_QueueCSPHashReport_ParamsSpec, 'blink.mojom.ReportingServiceProxy_QueueCSPHashReport_Params', [
      mojo.internal.StructField('arg_url', 0, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_endpoint', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_subresource_url', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_integrity_hash', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_type', 32, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_destination', 40, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 56]]);

mojo.internal.bindings.blink.mojom.ReportingServiceProxyPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.blink.mojom.ReportingServiceProxyRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.ReportingServiceProxy';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.blink.mojom.ReportingServiceProxyPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.blink.mojom.ReportingServiceProxyRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  queueInterventionReport(arg_url, arg_id, arg_message, arg_source_file, arg_line_number, arg_column_number) {
    return this.$.queueInterventionReport(arg_url, arg_id, arg_message, arg_source_file, arg_line_number, arg_column_number);
  }
  queueDeprecationReport(arg_url, arg_id, arg_anticipatedRemoval, arg_message, arg_source_file, arg_line_number, arg_column_number) {
    return this.$.queueDeprecationReport(arg_url, arg_id, arg_anticipatedRemoval, arg_message, arg_source_file, arg_line_number, arg_column_number);
  }
  queueCspViolationReport(arg_url, arg_group, arg_document_url, arg_referrer, arg_blocked_url, arg_effective_directive, arg_original_policy, arg_source_file, arg_script_sample, arg_disposition, arg_status_code, arg_line_number, arg_column_number) {
    return this.$.queueCspViolationReport(arg_url, arg_group, arg_document_url, arg_referrer, arg_blocked_url, arg_effective_directive, arg_original_policy, arg_source_file, arg_script_sample, arg_disposition, arg_status_code, arg_line_number, arg_column_number);
  }
  queueIntegrityViolationReport(arg_url, arg_endpoint, arg_document_url, arg_blocked_url, arg_destination, arg_report_only) {
    return this.$.queueIntegrityViolationReport(arg_url, arg_endpoint, arg_document_url, arg_blocked_url, arg_destination, arg_report_only);
  }
  queuePermissionsPolicyViolationReport(arg_url, arg_endpoint, arg_policy_id, arg_disposition, arg_message, arg_source_file, arg_line_number, arg_column_number) {
    return this.$.queuePermissionsPolicyViolationReport(arg_url, arg_endpoint, arg_policy_id, arg_disposition, arg_message, arg_source_file, arg_line_number, arg_column_number);
  }
  queuePotentialPermissionsPolicyViolationReport(arg_url, arg_endpoint, arg_policy_id, arg_disposition, arg_message, arg_allow_attribute, arg_src_attribute, arg_source_file, arg_line_number, arg_column_number) {
    return this.$.queuePotentialPermissionsPolicyViolationReport(arg_url, arg_endpoint, arg_policy_id, arg_disposition, arg_message, arg_allow_attribute, arg_src_attribute, arg_source_file, arg_line_number, arg_column_number);
  }
  queueDocumentPolicyViolationReport(arg_url, arg_group, arg_policy_id, arg_disposition, arg_message, arg_source_file, arg_line_number, arg_column_number) {
    return this.$.queueDocumentPolicyViolationReport(arg_url, arg_group, arg_policy_id, arg_disposition, arg_message, arg_source_file, arg_line_number, arg_column_number);
  }
  queueCSPHashReport(arg_url, arg_endpoint, arg_subresource_url, arg_integrity_hash, arg_type, arg_destination) {
    return this.$.queueCSPHashReport(arg_url, arg_endpoint, arg_subresource_url, arg_integrity_hash, arg_type, arg_destination);
  }
};

mojo.internal.bindings.blink.mojom.ReportingServiceProxyRemoteCallHandler = class {
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

  queueInterventionReport(arg_url, arg_id, arg_message, arg_source_file, arg_line_number, arg_column_number) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.blink.mojom.ReportingServiceProxy_QueueInterventionReport_ParamsSpec,
      null,
      [arg_url, arg_id, arg_message, arg_source_file, arg_line_number, arg_column_number],
      false);
  }

  queueDeprecationReport(arg_url, arg_id, arg_anticipatedRemoval, arg_message, arg_source_file, arg_line_number, arg_column_number) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.blink.mojom.ReportingServiceProxy_QueueDeprecationReport_ParamsSpec,
      null,
      [arg_url, arg_id, arg_anticipatedRemoval, arg_message, arg_source_file, arg_line_number, arg_column_number],
      false);
  }

  queueCspViolationReport(arg_url, arg_group, arg_document_url, arg_referrer, arg_blocked_url, arg_effective_directive, arg_original_policy, arg_source_file, arg_script_sample, arg_disposition, arg_status_code, arg_line_number, arg_column_number) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.blink.mojom.ReportingServiceProxy_QueueCspViolationReport_ParamsSpec,
      null,
      [arg_url, arg_group, arg_document_url, arg_referrer, arg_blocked_url, arg_effective_directive, arg_original_policy, arg_source_file, arg_script_sample, arg_disposition, arg_status_code, arg_line_number, arg_column_number],
      false);
  }

  queueIntegrityViolationReport(arg_url, arg_endpoint, arg_document_url, arg_blocked_url, arg_destination, arg_report_only) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.blink.mojom.ReportingServiceProxy_QueueIntegrityViolationReport_ParamsSpec,
      null,
      [arg_url, arg_endpoint, arg_document_url, arg_blocked_url, arg_destination, arg_report_only],
      false);
  }

  queuePermissionsPolicyViolationReport(arg_url, arg_endpoint, arg_policy_id, arg_disposition, arg_message, arg_source_file, arg_line_number, arg_column_number) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.blink.mojom.ReportingServiceProxy_QueuePermissionsPolicyViolationReport_ParamsSpec,
      null,
      [arg_url, arg_endpoint, arg_policy_id, arg_disposition, arg_message, arg_source_file, arg_line_number, arg_column_number],
      false);
  }

  queuePotentialPermissionsPolicyViolationReport(arg_url, arg_endpoint, arg_policy_id, arg_disposition, arg_message, arg_allow_attribute, arg_src_attribute, arg_source_file, arg_line_number, arg_column_number) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojo.internal.bindings.blink.mojom.ReportingServiceProxy_QueuePotentialPermissionsPolicyViolationReport_ParamsSpec,
      null,
      [arg_url, arg_endpoint, arg_policy_id, arg_disposition, arg_message, arg_allow_attribute, arg_src_attribute, arg_source_file, arg_line_number, arg_column_number],
      false);
  }

  queueDocumentPolicyViolationReport(arg_url, arg_group, arg_policy_id, arg_disposition, arg_message, arg_source_file, arg_line_number, arg_column_number) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      mojo.internal.bindings.blink.mojom.ReportingServiceProxy_QueueDocumentPolicyViolationReport_ParamsSpec,
      null,
      [arg_url, arg_group, arg_policy_id, arg_disposition, arg_message, arg_source_file, arg_line_number, arg_column_number],
      false);
  }

  queueCSPHashReport(arg_url, arg_endpoint, arg_subresource_url, arg_integrity_hash, arg_type, arg_destination) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      mojo.internal.bindings.blink.mojom.ReportingServiceProxy_QueueCSPHashReport_ParamsSpec,
      null,
      [arg_url, arg_endpoint, arg_subresource_url, arg_integrity_hash, arg_type, arg_destination],
      false);
  }

};

mojo.internal.bindings.blink.mojom.ReportingServiceProxy.getRemote = function() {
  let remote = new mojo.internal.bindings.blink.mojom.ReportingServiceProxyRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.ReportingServiceProxy',
    'context');
  return remote.$;
};

mojo.internal.bindings.blink.mojom.ReportingServiceProxyReceiver = class {
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
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.ReportingServiceProxy_QueueInterventionReport_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.ReportingServiceProxy_QueueDeprecationReport_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.ReportingServiceProxy_QueueCspViolationReport_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.ReportingServiceProxy_QueueIntegrityViolationReport_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.ReportingServiceProxy_QueuePermissionsPolicyViolationReport_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.ReportingServiceProxy_QueuePotentialPermissionsPolicyViolationReport_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.ReportingServiceProxy_QueueDocumentPolicyViolationReport_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.ReportingServiceProxy_QueueCSPHashReport_ParamsSpec);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.ReportingServiceProxy_QueueInterventionReport_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.queueInterventionReport');
          const result = this.impl.queueInterventionReport(params.arg_url, params.arg_id, params.arg_message, params.arg_source_file, params.arg_line_number, params.arg_column_number);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.ReportingServiceProxy_QueueDeprecationReport_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.queueDeprecationReport');
          const result = this.impl.queueDeprecationReport(params.arg_url, params.arg_id, params.arg_anticipatedRemoval, params.arg_message, params.arg_source_file, params.arg_line_number, params.arg_column_number);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.ReportingServiceProxy_QueueCspViolationReport_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.queueCspViolationReport');
          const result = this.impl.queueCspViolationReport(params.arg_url, params.arg_group, params.arg_document_url, params.arg_referrer, params.arg_blocked_url, params.arg_effective_directive, params.arg_original_policy, params.arg_source_file, params.arg_script_sample, params.arg_disposition, params.arg_status_code, params.arg_line_number, params.arg_column_number);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.ReportingServiceProxy_QueueIntegrityViolationReport_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.queueIntegrityViolationReport');
          const result = this.impl.queueIntegrityViolationReport(params.arg_url, params.arg_endpoint, params.arg_document_url, params.arg_blocked_url, params.arg_destination, params.arg_report_only);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.ReportingServiceProxy_QueuePermissionsPolicyViolationReport_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.queuePermissionsPolicyViolationReport');
          const result = this.impl.queuePermissionsPolicyViolationReport(params.arg_url, params.arg_endpoint, params.arg_policy_id, params.arg_disposition, params.arg_message, params.arg_source_file, params.arg_line_number, params.arg_column_number);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.ReportingServiceProxy_QueuePotentialPermissionsPolicyViolationReport_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.queuePotentialPermissionsPolicyViolationReport');
          const result = this.impl.queuePotentialPermissionsPolicyViolationReport(params.arg_url, params.arg_endpoint, params.arg_policy_id, params.arg_disposition, params.arg_message, params.arg_allow_attribute, params.arg_src_attribute, params.arg_source_file, params.arg_line_number, params.arg_column_number);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.ReportingServiceProxy_QueueDocumentPolicyViolationReport_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.queueDocumentPolicyViolationReport');
          const result = this.impl.queueDocumentPolicyViolationReport(params.arg_url, params.arg_group, params.arg_policy_id, params.arg_disposition, params.arg_message, params.arg_source_file, params.arg_line_number, params.arg_column_number);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.ReportingServiceProxy_QueueCSPHashReport_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.queueCSPHashReport');
          const result = this.impl.queueCSPHashReport(params.arg_url, params.arg_endpoint, params.arg_subresource_url, params.arg_integrity_hash, params.arg_type, params.arg_destination);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.blink.mojom.ReportingServiceProxyReceiver = mojo.internal.bindings.blink.mojom.ReportingServiceProxyReceiver;

mojo.internal.bindings.blink.mojom.ReportingServiceProxyPtr = mojo.internal.bindings.blink.mojom.ReportingServiceProxyRemote;
mojo.internal.bindings.blink.mojom.ReportingServiceProxyRequest = mojo.internal.bindings.blink.mojom.ReportingServiceProxyPendingReceiver;

