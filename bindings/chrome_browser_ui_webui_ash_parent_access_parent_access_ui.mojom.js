// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/ash/parent_access/parent_access_ui.mojom
// Module: parent_access_ui.mojom

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
var parent_access_ui = parent_access_ui || {};
parent_access_ui.mojom = parent_access_ui.mojom || {};
var mojo_base = mojo_base || {};
var url = url || {};

parent_access_ui.mojom.GetOauthTokenStatusSpec = { $: mojo.internal.Enum() };
parent_access_ui.mojom.ParentAccessServerMessageTypeSpec = { $: mojo.internal.Enum() };
parent_access_ui.mojom.FlowTypeSpec = { $: mojo.internal.Enum() };
parent_access_ui.mojom.ParentAccessResultSpec = { $: mojo.internal.Enum() };
parent_access_ui.mojom.FlowTypeParamsSpec = { $: {} };
parent_access_ui.mojom.ParentAccessServerMessageSpec = { $: {} };
parent_access_ui.mojom.ParentAccessParamsSpec = { $: {} };
parent_access_ui.mojom.WebApprovalsParamsSpec = { $: {} };
parent_access_ui.mojom.ExtensionApprovalsParamsSpec = { $: {} };
parent_access_ui.mojom.ExtensionPermissionSpec = { $: {} };
parent_access_ui.mojom.ParentAccessUiHandler = {};
parent_access_ui.mojom.ParentAccessUiHandler.$interfaceName = 'parent_access_ui.mojom.ParentAccessUiHandler';
parent_access_ui.mojom.ParentAccessUiHandler_GetOauthToken_ParamsSpec = { $: {} };
parent_access_ui.mojom.ParentAccessUiHandler_GetOauthToken_ResponseParamsSpec = { $: {} };
parent_access_ui.mojom.ParentAccessUiHandler_OnParentAccessCallbackReceived_ParamsSpec = { $: {} };
parent_access_ui.mojom.ParentAccessUiHandler_OnParentAccessCallbackReceived_ResponseParamsSpec = { $: {} };
parent_access_ui.mojom.ParentAccessUiHandler_GetParentAccessParams_ParamsSpec = { $: {} };
parent_access_ui.mojom.ParentAccessUiHandler_GetParentAccessParams_ResponseParamsSpec = { $: {} };
parent_access_ui.mojom.ParentAccessUiHandler_GetParentAccessUrl_ParamsSpec = { $: {} };
parent_access_ui.mojom.ParentAccessUiHandler_GetParentAccessUrl_ResponseParamsSpec = { $: {} };
parent_access_ui.mojom.ParentAccessUiHandler_OnParentAccessDone_ParamsSpec = { $: {} };
parent_access_ui.mojom.ParentAccessUiHandler_OnParentAccessDone_ResponseParamsSpec = { $: {} };
parent_access_ui.mojom.ParentAccessUiHandler_OnBeforeScreenDone_ParamsSpec = { $: {} };
parent_access_ui.mojom.ParentAccessUiHandler_OnBeforeScreenDone_ResponseParamsSpec = { $: {} };

// Enum: GetOauthTokenStatus
parent_access_ui.mojom.GetOauthTokenStatus = {
  kSuccess: 0,
  kError: 1,
  kOnlyOneFetchAtATime: 2,
};

// Enum: ParentAccessServerMessageType
parent_access_ui.mojom.ParentAccessServerMessageType = {
  kParentVerified: 0,
  kError: 1,
  kIgnore: 2,
};

// Enum: FlowType
parent_access_ui.mojom.FlowType = {
  kWebsiteAccess: 0,
  kExtensionAccess: 1,
};

// Enum: ParentAccessResult
parent_access_ui.mojom.ParentAccessResult = {
  kApproved: 0,
  kDeclined: 1,
  kCanceled: 2,
  kDisabled: 3,
  kError: 4,
};

// Union: FlowTypeParams
mojo.internal.Union(
    parent_access_ui.mojom.FlowTypeParamsSpec, 'parent_access_ui.mojom.FlowTypeParams', {
      'web_approvals_params': {
        'ordinal': 0,
        'type': parent_access_ui.mojom.WebApprovalsParamsSpec.$,
        'nullable': false,
      },
      'extension_approvals_params': {
        'ordinal': 1,
        'type': parent_access_ui.mojom.ExtensionApprovalsParamsSpec.$,
        'nullable': false,
      },
    });

// Struct: ParentAccessServerMessage
mojo.internal.Struct(
    parent_access_ui.mojom.ParentAccessServerMessageSpec, 'parent_access_ui.mojom.ParentAccessServerMessage', [
      mojo.internal.StructField('type', 0, 0, parent_access_ui.mojom.ParentAccessServerMessageTypeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: ParentAccessParams
mojo.internal.Struct(
    parent_access_ui.mojom.ParentAccessParamsSpec, 'parent_access_ui.mojom.ParentAccessParams', [
      mojo.internal.StructField('kWebsiteAccess', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: WebApprovalsParams
mojo.internal.Struct(
    parent_access_ui.mojom.WebApprovalsParamsSpec, 'parent_access_ui.mojom.WebApprovalsParams', [
      mojo.internal.StructField('url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('child_display_name', 8, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('favicon_png_bytes', 16, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: ExtensionApprovalsParams
mojo.internal.Struct(
    parent_access_ui.mojom.ExtensionApprovalsParamsSpec, 'parent_access_ui.mojom.ExtensionApprovalsParams', [
      mojo.internal.StructField('extension_name', 0, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('icon_png_bytes', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('child_display_name', 16, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('permissions', 24, 0, mojo.internal.Array(parent_access_ui.mojom.ExtensionPermissionSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: ExtensionPermission
mojo.internal.Struct(
    parent_access_ui.mojom.ExtensionPermissionSpec, 'parent_access_ui.mojom.ExtensionPermission', [
      mojo.internal.StructField('permission', 0, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('details', 8, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: ParentAccessUiHandler
mojo.internal.Struct(
    parent_access_ui.mojom.ParentAccessUiHandler_GetOauthToken_ParamsSpec, 'parent_access_ui.mojom.ParentAccessUiHandler_GetOauthToken_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    parent_access_ui.mojom.ParentAccessUiHandler_GetOauthToken_ResponseParamsSpec, 'parent_access_ui.mojom.ParentAccessUiHandler_GetOauthToken_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, parent_access_ui.mojom.GetOauthTokenStatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('oauth_token', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    parent_access_ui.mojom.ParentAccessUiHandler_OnParentAccessCallbackReceived_ParamsSpec, 'parent_access_ui.mojom.ParentAccessUiHandler_OnParentAccessCallbackReceived_Params', [
      mojo.internal.StructField('encoded_parent_access_callback_proto', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    parent_access_ui.mojom.ParentAccessUiHandler_OnParentAccessCallbackReceived_ResponseParamsSpec, 'parent_access_ui.mojom.ParentAccessUiHandler_OnParentAccessCallbackReceived_ResponseParams', [
      mojo.internal.StructField('message', 0, 0, parent_access_ui.mojom.ParentAccessServerMessageSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    parent_access_ui.mojom.ParentAccessUiHandler_GetParentAccessParams_ParamsSpec, 'parent_access_ui.mojom.ParentAccessUiHandler_GetParentAccessParams_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    parent_access_ui.mojom.ParentAccessUiHandler_GetParentAccessParams_ResponseParamsSpec, 'parent_access_ui.mojom.ParentAccessUiHandler_GetParentAccessParams_ResponseParams', [
      mojo.internal.StructField('params', 0, 0, parent_access_ui.mojom.ParentAccessParamsSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    parent_access_ui.mojom.ParentAccessUiHandler_GetParentAccessUrl_ParamsSpec, 'parent_access_ui.mojom.ParentAccessUiHandler_GetParentAccessUrl_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    parent_access_ui.mojom.ParentAccessUiHandler_GetParentAccessUrl_ResponseParamsSpec, 'parent_access_ui.mojom.ParentAccessUiHandler_GetParentAccessUrl_ResponseParams', [
      mojo.internal.StructField('url', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    parent_access_ui.mojom.ParentAccessUiHandler_OnParentAccessDone_ParamsSpec, 'parent_access_ui.mojom.ParentAccessUiHandler_OnParentAccessDone_Params', [
      mojo.internal.StructField('result', 0, 0, parent_access_ui.mojom.ParentAccessResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    parent_access_ui.mojom.ParentAccessUiHandler_OnParentAccessDone_ResponseParamsSpec, 'parent_access_ui.mojom.ParentAccessUiHandler_OnParentAccessDone_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    parent_access_ui.mojom.ParentAccessUiHandler_OnBeforeScreenDone_ParamsSpec, 'parent_access_ui.mojom.ParentAccessUiHandler_OnBeforeScreenDone_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    parent_access_ui.mojom.ParentAccessUiHandler_OnBeforeScreenDone_ResponseParamsSpec, 'parent_access_ui.mojom.ParentAccessUiHandler_OnBeforeScreenDone_ResponseParams', [
    ],
    [[0, 8]]);

parent_access_ui.mojom.ParentAccessUiHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

parent_access_ui.mojom.ParentAccessUiHandlerRemote = class {
  static get $interfaceName() {
    return 'parent_access_ui.mojom.ParentAccessUiHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      parent_access_ui.mojom.ParentAccessUiHandlerPendingReceiver,
      handle);
    this.$ = new parent_access_ui.mojom.ParentAccessUiHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

parent_access_ui.mojom.ParentAccessUiHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ParentAccessUiHandler', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  getOauthToken() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      parent_access_ui.mojom.ParentAccessUiHandler_GetOauthToken_ParamsSpec,
      parent_access_ui.mojom.ParentAccessUiHandler_GetOauthToken_ResponseParamsSpec,
      [],
      false);
  }

  onParentAccessCallbackReceived(encoded_parent_access_callback_proto) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      parent_access_ui.mojom.ParentAccessUiHandler_OnParentAccessCallbackReceived_ParamsSpec,
      parent_access_ui.mojom.ParentAccessUiHandler_OnParentAccessCallbackReceived_ResponseParamsSpec,
      [encoded_parent_access_callback_proto],
      false);
  }

  getParentAccessParams() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      parent_access_ui.mojom.ParentAccessUiHandler_GetParentAccessParams_ParamsSpec,
      parent_access_ui.mojom.ParentAccessUiHandler_GetParentAccessParams_ResponseParamsSpec,
      [],
      false);
  }

  getParentAccessUrl() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      parent_access_ui.mojom.ParentAccessUiHandler_GetParentAccessUrl_ParamsSpec,
      parent_access_ui.mojom.ParentAccessUiHandler_GetParentAccessUrl_ResponseParamsSpec,
      [],
      false);
  }

  onParentAccessDone(result) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      parent_access_ui.mojom.ParentAccessUiHandler_OnParentAccessDone_ParamsSpec,
      parent_access_ui.mojom.ParentAccessUiHandler_OnParentAccessDone_ResponseParamsSpec,
      [result],
      false);
  }

  onBeforeScreenDone() {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      parent_access_ui.mojom.ParentAccessUiHandler_OnBeforeScreenDone_ParamsSpec,
      parent_access_ui.mojom.ParentAccessUiHandler_OnBeforeScreenDone_ResponseParamsSpec,
      [],
      false);
  }

};

parent_access_ui.mojom.ParentAccessUiHandler.getRemote = function() {
  let remote = new parent_access_ui.mojom.ParentAccessUiHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'parent_access_ui.mojom.ParentAccessUiHandler',
    'context');
  return remote.$;
};

parent_access_ui.mojom.ParentAccessUiHandlerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ParentAccessUiHandler', [
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
        
        // Try Method 0: GetOauthToken
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(parent_access_ui.mojom.ParentAccessUiHandler_GetOauthToken_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetOauthToken (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: OnParentAccessCallbackReceived
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(parent_access_ui.mojom.ParentAccessUiHandler_OnParentAccessCallbackReceived_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnParentAccessCallbackReceived (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: GetParentAccessParams
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(parent_access_ui.mojom.ParentAccessUiHandler_GetParentAccessParams_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetParentAccessParams (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: GetParentAccessUrl
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(parent_access_ui.mojom.ParentAccessUiHandler_GetParentAccessUrl_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetParentAccessUrl (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: OnParentAccessDone
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(parent_access_ui.mojom.ParentAccessUiHandler_OnParentAccessDone_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnParentAccessDone (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: OnBeforeScreenDone
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(parent_access_ui.mojom.ParentAccessUiHandler_OnBeforeScreenDone_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnBeforeScreenDone (5)');
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
          const params = decoder.decodeStructInline(parent_access_ui.mojom.ParentAccessUiHandler_GetOauthToken_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getOauthToken');
          const result = this.impl.getOauthToken();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, parent_access_ui.mojom.ParentAccessUiHandler_GetOauthToken_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(parent_access_ui.mojom.ParentAccessUiHandler_OnParentAccessCallbackReceived_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onParentAccessCallbackReceived');
          const result = this.impl.onParentAccessCallbackReceived(params.encoded_parent_access_callback_proto);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, parent_access_ui.mojom.ParentAccessUiHandler_OnParentAccessCallbackReceived_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(parent_access_ui.mojom.ParentAccessUiHandler_GetParentAccessParams_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getParentAccessParams');
          const result = this.impl.getParentAccessParams();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, parent_access_ui.mojom.ParentAccessUiHandler_GetParentAccessParams_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(parent_access_ui.mojom.ParentAccessUiHandler_GetParentAccessUrl_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getParentAccessUrl');
          const result = this.impl.getParentAccessUrl();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, parent_access_ui.mojom.ParentAccessUiHandler_GetParentAccessUrl_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(parent_access_ui.mojom.ParentAccessUiHandler_OnParentAccessDone_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onParentAccessDone');
          const result = this.impl.onParentAccessDone(params.result);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, parent_access_ui.mojom.ParentAccessUiHandler_OnParentAccessDone_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(parent_access_ui.mojom.ParentAccessUiHandler_OnBeforeScreenDone_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onBeforeScreenDone');
          const result = this.impl.onBeforeScreenDone();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, parent_access_ui.mojom.ParentAccessUiHandler_OnBeforeScreenDone_ResponseParamsSpec);
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

parent_access_ui.mojom.ParentAccessUiHandlerReceiver = parent_access_ui.mojom.ParentAccessUiHandlerReceiver;

parent_access_ui.mojom.ParentAccessUiHandlerPtr = parent_access_ui.mojom.ParentAccessUiHandlerRemote;
parent_access_ui.mojom.ParentAccessUiHandlerRequest = parent_access_ui.mojom.ParentAccessUiHandlerPendingReceiver;

