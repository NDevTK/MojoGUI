// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/password_manager/password_manager.mojom
// Module: password_manager.mojom

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
var password_manager = password_manager || {};
password_manager.mojom = password_manager.mojom || {};
var url = url || {};

password_manager.mojom.DomainInfoSpec = { $: {} };
password_manager.mojom.ActorLoginPermissionSpec = { $: {} };
password_manager.mojom.PageHandlerFactory = {};
password_manager.mojom.PageHandlerFactory.$interfaceName = 'password_manager.mojom.PageHandlerFactory';
password_manager.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec = { $: {} };
password_manager.mojom.PageHandler = {};
password_manager.mojom.PageHandler.$interfaceName = 'password_manager.mojom.PageHandler';
password_manager.mojom.PageHandler_ExtendAuthValidity_ParamsSpec = { $: {} };
password_manager.mojom.PageHandler_DeleteAllPasswordManagerData_ParamsSpec = { $: {} };
password_manager.mojom.PageHandler_DeleteAllPasswordManagerData_ResponseParamsSpec = { $: {} };
password_manager.mojom.PageHandler_CopyPlaintextBackupPassword_ParamsSpec = { $: {} };
password_manager.mojom.PageHandler_CopyPlaintextBackupPassword_ResponseParamsSpec = { $: {} };
password_manager.mojom.PageHandler_RemoveBackupPassword_ParamsSpec = { $: {} };
password_manager.mojom.PageHandler_GetActorLoginPermissions_ParamsSpec = { $: {} };
password_manager.mojom.PageHandler_GetActorLoginPermissions_ResponseParamsSpec = { $: {} };
password_manager.mojom.PageHandler_RevokeActorLoginPermission_ParamsSpec = { $: {} };
password_manager.mojom.PageHandler_ChangePasswordManagerPin_ParamsSpec = { $: {} };
password_manager.mojom.PageHandler_ChangePasswordManagerPin_ResponseParamsSpec = { $: {} };
password_manager.mojom.PageHandler_ShowAddShortcutDialog_ParamsSpec = { $: {} };
password_manager.mojom.PageHandler_IsAccountStorageEnabled_ParamsSpec = { $: {} };
password_manager.mojom.PageHandler_IsAccountStorageEnabled_ResponseParamsSpec = { $: {} };
password_manager.mojom.PageHandler_SetAccountStorageEnabled_ParamsSpec = { $: {} };
password_manager.mojom.PageHandler_ShouldShowAccountStorageSettingToggle_ParamsSpec = { $: {} };
password_manager.mojom.PageHandler_ShouldShowAccountStorageSettingToggle_ResponseParamsSpec = { $: {} };
password_manager.mojom.PageHandler_IsPasswordManagerPinAvailable_ParamsSpec = { $: {} };
password_manager.mojom.PageHandler_IsPasswordManagerPinAvailable_ResponseParamsSpec = { $: {} };
password_manager.mojom.PageHandler_SwitchBiometricAuthBeforeFillingState_ParamsSpec = { $: {} };
password_manager.mojom.PageHandler_SwitchBiometricAuthBeforeFillingState_ResponseParamsSpec = { $: {} };
password_manager.mojom.Page = {};
password_manager.mojom.Page.$interfaceName = 'password_manager.mojom.Page';

// Struct: DomainInfo
mojo.internal.Struct(
    password_manager.mojom.DomainInfoSpec, 'password_manager.mojom.DomainInfo', [
      mojo.internal.StructField('human_readable_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('url', 8, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('signon_realm', 16, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: ActorLoginPermission
mojo.internal.Struct(
    password_manager.mojom.ActorLoginPermissionSpec, 'password_manager.mojom.ActorLoginPermission', [
      mojo.internal.StructField('domain_info', 0, 0, password_manager.mojom.DomainInfoSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('favicon_url', 8, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('username', 16, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 32]]);

// Interface: PageHandlerFactory
mojo.internal.Struct(
    password_manager.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec, 'password_manager.mojom.PageHandlerFactory_CreatePageHandler_Params', [
      mojo.internal.StructField('page', 0, 0, mojo.internal.InterfaceProxy(password_manager.mojom.PageSpec), null, false, 0, undefined),
      mojo.internal.StructField('handler', 8, 0, mojo.internal.InterfaceRequest(password_manager.mojom.PageHandlerSpec), null, false, 0, undefined),
    ],
    [[0, 24]]);

password_manager.mojom.PageHandlerFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

password_manager.mojom.PageHandlerFactoryRemote = class {
  static get $interfaceName() {
    return 'password_manager.mojom.PageHandlerFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      password_manager.mojom.PageHandlerFactoryPendingReceiver,
      handle);
    this.$ = new password_manager.mojom.PageHandlerFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  createPageHandler(page, handler) {
    return this.$.createPageHandler(page, handler);
  }
};

password_manager.mojom.PageHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('PageHandlerFactory', [
      { explicit: null },
    ]);
  }

  createPageHandler(page, handler) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      password_manager.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec,
      null,
      [page, handler],
      false);
  }

};

password_manager.mojom.PageHandlerFactory.getRemote = function() {
  let remote = new password_manager.mojom.PageHandlerFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'password_manager.mojom.PageHandlerFactory',
    'context');
  return remote.$;
};

password_manager.mojom.PageHandlerFactoryReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('PageHandlerFactory', [
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
        
        // Try Method 0: CreatePageHandler
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(password_manager.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreatePageHandler (0)');
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
          const params = decoder.decodeStructInline(password_manager.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.createPageHandler');
          const result = this.impl.createPageHandler(params.page, params.handler);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

password_manager.mojom.PageHandlerFactoryReceiver = password_manager.mojom.PageHandlerFactoryReceiver;

password_manager.mojom.PageHandlerFactoryPtr = password_manager.mojom.PageHandlerFactoryRemote;
password_manager.mojom.PageHandlerFactoryRequest = password_manager.mojom.PageHandlerFactoryPendingReceiver;


// Interface: PageHandler
mojo.internal.Struct(
    password_manager.mojom.PageHandler_ExtendAuthValidity_ParamsSpec, 'password_manager.mojom.PageHandler_ExtendAuthValidity_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    password_manager.mojom.PageHandler_DeleteAllPasswordManagerData_ParamsSpec, 'password_manager.mojom.PageHandler_DeleteAllPasswordManagerData_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    password_manager.mojom.PageHandler_DeleteAllPasswordManagerData_ResponseParamsSpec, 'password_manager.mojom.PageHandler_DeleteAllPasswordManagerData_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    password_manager.mojom.PageHandler_CopyPlaintextBackupPassword_ParamsSpec, 'password_manager.mojom.PageHandler_CopyPlaintextBackupPassword_Params', [
      mojo.internal.StructField('id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    password_manager.mojom.PageHandler_CopyPlaintextBackupPassword_ResponseParamsSpec, 'password_manager.mojom.PageHandler_CopyPlaintextBackupPassword_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    password_manager.mojom.PageHandler_RemoveBackupPassword_ParamsSpec, 'password_manager.mojom.PageHandler_RemoveBackupPassword_Params', [
      mojo.internal.StructField('id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    password_manager.mojom.PageHandler_GetActorLoginPermissions_ParamsSpec, 'password_manager.mojom.PageHandler_GetActorLoginPermissions_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    password_manager.mojom.PageHandler_GetActorLoginPermissions_ResponseParamsSpec, 'password_manager.mojom.PageHandler_GetActorLoginPermissions_ResponseParams', [
      mojo.internal.StructField('sites', 0, 0, mojo.internal.Array(password_manager.mojom.ActorLoginPermissionSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    password_manager.mojom.PageHandler_RevokeActorLoginPermission_ParamsSpec, 'password_manager.mojom.PageHandler_RevokeActorLoginPermission_Params', [
      mojo.internal.StructField('site', 0, 0, password_manager.mojom.ActorLoginPermissionSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    password_manager.mojom.PageHandler_ChangePasswordManagerPin_ParamsSpec, 'password_manager.mojom.PageHandler_ChangePasswordManagerPin_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    password_manager.mojom.PageHandler_ChangePasswordManagerPin_ResponseParamsSpec, 'password_manager.mojom.PageHandler_ChangePasswordManagerPin_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    password_manager.mojom.PageHandler_ShowAddShortcutDialog_ParamsSpec, 'password_manager.mojom.PageHandler_ShowAddShortcutDialog_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    password_manager.mojom.PageHandler_IsAccountStorageEnabled_ParamsSpec, 'password_manager.mojom.PageHandler_IsAccountStorageEnabled_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    password_manager.mojom.PageHandler_IsAccountStorageEnabled_ResponseParamsSpec, 'password_manager.mojom.PageHandler_IsAccountStorageEnabled_ResponseParams', [
      mojo.internal.StructField('enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    password_manager.mojom.PageHandler_SetAccountStorageEnabled_ParamsSpec, 'password_manager.mojom.PageHandler_SetAccountStorageEnabled_Params', [
      mojo.internal.StructField('enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    password_manager.mojom.PageHandler_ShouldShowAccountStorageSettingToggle_ParamsSpec, 'password_manager.mojom.PageHandler_ShouldShowAccountStorageSettingToggle_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    password_manager.mojom.PageHandler_ShouldShowAccountStorageSettingToggle_ResponseParamsSpec, 'password_manager.mojom.PageHandler_ShouldShowAccountStorageSettingToggle_ResponseParams', [
      mojo.internal.StructField('should_show', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    password_manager.mojom.PageHandler_IsPasswordManagerPinAvailable_ParamsSpec, 'password_manager.mojom.PageHandler_IsPasswordManagerPinAvailable_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    password_manager.mojom.PageHandler_IsPasswordManagerPinAvailable_ResponseParamsSpec, 'password_manager.mojom.PageHandler_IsPasswordManagerPinAvailable_ResponseParams', [
      mojo.internal.StructField('is_available', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    password_manager.mojom.PageHandler_SwitchBiometricAuthBeforeFillingState_ParamsSpec, 'password_manager.mojom.PageHandler_SwitchBiometricAuthBeforeFillingState_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    password_manager.mojom.PageHandler_SwitchBiometricAuthBeforeFillingState_ResponseParamsSpec, 'password_manager.mojom.PageHandler_SwitchBiometricAuthBeforeFillingState_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

password_manager.mojom.PageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

password_manager.mojom.PageHandlerRemote = class {
  static get $interfaceName() {
    return 'password_manager.mojom.PageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      password_manager.mojom.PageHandlerPendingReceiver,
      handle);
    this.$ = new password_manager.mojom.PageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  extendAuthValidity() {
    return this.$.extendAuthValidity();
  }
  deleteAllPasswordManagerData() {
    return this.$.deleteAllPasswordManagerData();
  }
  copyPlaintextBackupPassword(id) {
    return this.$.copyPlaintextBackupPassword(id);
  }
  removeBackupPassword(id) {
    return this.$.removeBackupPassword(id);
  }
  getActorLoginPermissions() {
    return this.$.getActorLoginPermissions();
  }
  revokeActorLoginPermission(site) {
    return this.$.revokeActorLoginPermission(site);
  }
  changePasswordManagerPin() {
    return this.$.changePasswordManagerPin();
  }
  showAddShortcutDialog() {
    return this.$.showAddShortcutDialog();
  }
  isAccountStorageEnabled() {
    return this.$.isAccountStorageEnabled();
  }
  setAccountStorageEnabled(enabled) {
    return this.$.setAccountStorageEnabled(enabled);
  }
  shouldShowAccountStorageSettingToggle() {
    return this.$.shouldShowAccountStorageSettingToggle();
  }
  isPasswordManagerPinAvailable() {
    return this.$.isPasswordManagerPinAvailable();
  }
  switchBiometricAuthBeforeFillingState() {
    return this.$.switchBiometricAuthBeforeFillingState();
  }
};

password_manager.mojom.PageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('PageHandler', [
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

  extendAuthValidity() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      password_manager.mojom.PageHandler_ExtendAuthValidity_ParamsSpec,
      null,
      [],
      false);
  }

  deleteAllPasswordManagerData() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      password_manager.mojom.PageHandler_DeleteAllPasswordManagerData_ParamsSpec,
      password_manager.mojom.PageHandler_DeleteAllPasswordManagerData_ResponseParamsSpec,
      [],
      false);
  }

  copyPlaintextBackupPassword(id) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      password_manager.mojom.PageHandler_CopyPlaintextBackupPassword_ParamsSpec,
      password_manager.mojom.PageHandler_CopyPlaintextBackupPassword_ResponseParamsSpec,
      [id],
      false);
  }

  removeBackupPassword(id) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      password_manager.mojom.PageHandler_RemoveBackupPassword_ParamsSpec,
      null,
      [id],
      false);
  }

  getActorLoginPermissions() {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      password_manager.mojom.PageHandler_GetActorLoginPermissions_ParamsSpec,
      password_manager.mojom.PageHandler_GetActorLoginPermissions_ResponseParamsSpec,
      [],
      false);
  }

  revokeActorLoginPermission(site) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      password_manager.mojom.PageHandler_RevokeActorLoginPermission_ParamsSpec,
      null,
      [site],
      false);
  }

  changePasswordManagerPin() {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      password_manager.mojom.PageHandler_ChangePasswordManagerPin_ParamsSpec,
      password_manager.mojom.PageHandler_ChangePasswordManagerPin_ResponseParamsSpec,
      [],
      false);
  }

  showAddShortcutDialog() {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      password_manager.mojom.PageHandler_ShowAddShortcutDialog_ParamsSpec,
      null,
      [],
      false);
  }

  isAccountStorageEnabled() {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      password_manager.mojom.PageHandler_IsAccountStorageEnabled_ParamsSpec,
      password_manager.mojom.PageHandler_IsAccountStorageEnabled_ResponseParamsSpec,
      [],
      false);
  }

  setAccountStorageEnabled(enabled) {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      password_manager.mojom.PageHandler_SetAccountStorageEnabled_ParamsSpec,
      null,
      [enabled],
      false);
  }

  shouldShowAccountStorageSettingToggle() {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      password_manager.mojom.PageHandler_ShouldShowAccountStorageSettingToggle_ParamsSpec,
      password_manager.mojom.PageHandler_ShouldShowAccountStorageSettingToggle_ResponseParamsSpec,
      [],
      false);
  }

  isPasswordManagerPinAvailable() {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      password_manager.mojom.PageHandler_IsPasswordManagerPinAvailable_ParamsSpec,
      password_manager.mojom.PageHandler_IsPasswordManagerPinAvailable_ResponseParamsSpec,
      [],
      false);
  }

  switchBiometricAuthBeforeFillingState() {
    return this.proxy.sendMessage(
      this.ordinals[12],  // ordinal
      password_manager.mojom.PageHandler_SwitchBiometricAuthBeforeFillingState_ParamsSpec,
      password_manager.mojom.PageHandler_SwitchBiometricAuthBeforeFillingState_ResponseParamsSpec,
      [],
      false);
  }

};

password_manager.mojom.PageHandler.getRemote = function() {
  let remote = new password_manager.mojom.PageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'password_manager.mojom.PageHandler',
    'context');
  return remote.$;
};

password_manager.mojom.PageHandlerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('PageHandler', [
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
        
        // Try Method 0: ExtendAuthValidity
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(password_manager.mojom.PageHandler_ExtendAuthValidity_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ExtendAuthValidity (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: DeleteAllPasswordManagerData
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(password_manager.mojom.PageHandler_DeleteAllPasswordManagerData_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DeleteAllPasswordManagerData (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: CopyPlaintextBackupPassword
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(password_manager.mojom.PageHandler_CopyPlaintextBackupPassword_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CopyPlaintextBackupPassword (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: RemoveBackupPassword
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(password_manager.mojom.PageHandler_RemoveBackupPassword_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RemoveBackupPassword (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: GetActorLoginPermissions
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(password_manager.mojom.PageHandler_GetActorLoginPermissions_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetActorLoginPermissions (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: RevokeActorLoginPermission
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(password_manager.mojom.PageHandler_RevokeActorLoginPermission_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RevokeActorLoginPermission (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: ChangePasswordManagerPin
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(password_manager.mojom.PageHandler_ChangePasswordManagerPin_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ChangePasswordManagerPin (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: ShowAddShortcutDialog
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(password_manager.mojom.PageHandler_ShowAddShortcutDialog_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ShowAddShortcutDialog (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: IsAccountStorageEnabled
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(password_manager.mojom.PageHandler_IsAccountStorageEnabled_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> IsAccountStorageEnabled (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
           }
        }
        // Try Method 9: SetAccountStorageEnabled
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(password_manager.mojom.PageHandler_SetAccountStorageEnabled_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetAccountStorageEnabled (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 9 failed:', e);
           }
        }
        // Try Method 10: ShouldShowAccountStorageSettingToggle
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(password_manager.mojom.PageHandler_ShouldShowAccountStorageSettingToggle_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ShouldShowAccountStorageSettingToggle (10)');
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 10 failed:', e);
           }
        }
        // Try Method 11: IsPasswordManagerPinAvailable
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(password_manager.mojom.PageHandler_IsPasswordManagerPinAvailable_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> IsPasswordManagerPinAvailable (11)');
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 11 failed:', e);
           }
        }
        // Try Method 12: SwitchBiometricAuthBeforeFillingState
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(password_manager.mojom.PageHandler_SwitchBiometricAuthBeforeFillingState_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SwitchBiometricAuthBeforeFillingState (12)');
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 12 failed:', e);
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
          const params = decoder.decodeStructInline(password_manager.mojom.PageHandler_ExtendAuthValidity_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.extendAuthValidity');
          const result = this.impl.extendAuthValidity();
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(password_manager.mojom.PageHandler_DeleteAllPasswordManagerData_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.deleteAllPasswordManagerData');
          const result = this.impl.deleteAllPasswordManagerData();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, password_manager.mojom.PageHandler_DeleteAllPasswordManagerData_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] DeleteAllPasswordManagerData FAILED:', e));
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(password_manager.mojom.PageHandler_CopyPlaintextBackupPassword_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.copyPlaintextBackupPassword');
          const result = this.impl.copyPlaintextBackupPassword(params.id);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, password_manager.mojom.PageHandler_CopyPlaintextBackupPassword_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] CopyPlaintextBackupPassword FAILED:', e));
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(password_manager.mojom.PageHandler_RemoveBackupPassword_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.removeBackupPassword');
          const result = this.impl.removeBackupPassword(params.id);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(password_manager.mojom.PageHandler_GetActorLoginPermissions_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getActorLoginPermissions');
          const result = this.impl.getActorLoginPermissions();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, password_manager.mojom.PageHandler_GetActorLoginPermissions_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetActorLoginPermissions FAILED:', e));
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(password_manager.mojom.PageHandler_RevokeActorLoginPermission_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.revokeActorLoginPermission');
          const result = this.impl.revokeActorLoginPermission(params.site);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(password_manager.mojom.PageHandler_ChangePasswordManagerPin_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.changePasswordManagerPin');
          const result = this.impl.changePasswordManagerPin();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, password_manager.mojom.PageHandler_ChangePasswordManagerPin_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] ChangePasswordManagerPin FAILED:', e));
          }
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(password_manager.mojom.PageHandler_ShowAddShortcutDialog_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.showAddShortcutDialog');
          const result = this.impl.showAddShortcutDialog();
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(password_manager.mojom.PageHandler_IsAccountStorageEnabled_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.isAccountStorageEnabled');
          const result = this.impl.isAccountStorageEnabled();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, password_manager.mojom.PageHandler_IsAccountStorageEnabled_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] IsAccountStorageEnabled FAILED:', e));
          }
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(password_manager.mojom.PageHandler_SetAccountStorageEnabled_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setAccountStorageEnabled');
          const result = this.impl.setAccountStorageEnabled(params.enabled);
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(password_manager.mojom.PageHandler_ShouldShowAccountStorageSettingToggle_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.shouldShowAccountStorageSettingToggle');
          const result = this.impl.shouldShowAccountStorageSettingToggle();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, password_manager.mojom.PageHandler_ShouldShowAccountStorageSettingToggle_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] ShouldShowAccountStorageSettingToggle FAILED:', e));
          }
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(password_manager.mojom.PageHandler_IsPasswordManagerPinAvailable_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.isPasswordManagerPinAvailable');
          const result = this.impl.isPasswordManagerPinAvailable();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, password_manager.mojom.PageHandler_IsPasswordManagerPinAvailable_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] IsPasswordManagerPinAvailable FAILED:', e));
          }
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(password_manager.mojom.PageHandler_SwitchBiometricAuthBeforeFillingState_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.switchBiometricAuthBeforeFillingState');
          const result = this.impl.switchBiometricAuthBeforeFillingState();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, password_manager.mojom.PageHandler_SwitchBiometricAuthBeforeFillingState_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] SwitchBiometricAuthBeforeFillingState FAILED:', e));
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

password_manager.mojom.PageHandlerReceiver = password_manager.mojom.PageHandlerReceiver;

password_manager.mojom.PageHandlerPtr = password_manager.mojom.PageHandlerRemote;
password_manager.mojom.PageHandlerRequest = password_manager.mojom.PageHandlerPendingReceiver;


// Interface: Page
password_manager.mojom.PagePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

password_manager.mojom.PageRemote = class {
  static get $interfaceName() {
    return 'password_manager.mojom.Page';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      password_manager.mojom.PagePendingReceiver,
      handle);
    this.$ = new password_manager.mojom.PageRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

password_manager.mojom.PageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('Page', [
    ]);
  }

};

password_manager.mojom.Page.getRemote = function() {
  let remote = new password_manager.mojom.PageRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'password_manager.mojom.Page',
    'context');
  return remote.$;
};

password_manager.mojom.PageReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('Page', [
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
        
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

password_manager.mojom.PageReceiver = password_manager.mojom.PageReceiver;

password_manager.mojom.PagePtr = password_manager.mojom.PageRemote;
password_manager.mojom.PageRequest = password_manager.mojom.PagePendingReceiver;

