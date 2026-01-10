// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/crosapi/mojom/account_manager.mojom
// Module: crosapi.mojom

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
var crosapi = crosapi || {};
crosapi.mojom = crosapi.mojom || {};
var mojo_base = mojo_base || {};

crosapi.mojom.AccountTypeSpec = { $: mojo.internal.Enum() };
crosapi.mojom.StateSpec = { $: mojo.internal.Enum() };
crosapi.mojom.InvalidGaiaCredentialsReasonSpec = { $: mojo.internal.Enum() };
crosapi.mojom.ScopeLimitedUnrecoverableErrorReasonSpec = { $: mojo.internal.Enum() };
crosapi.mojom.StatusSpec = { $: mojo.internal.Enum() };
crosapi.mojom.AccessTokenResultSpec = { $: {} };
crosapi.mojom.AccountKeySpec = { $: {} };
crosapi.mojom.AccountSpec = { $: {} };
crosapi.mojom.GoogleServiceAuthErrorSpec = { $: {} };
crosapi.mojom.AccountAdditionOptionsSpec = { $: {} };
crosapi.mojom.AccountUpsertionResultSpec = { $: {} };
crosapi.mojom.AccessTokenInfoSpec = { $: {} };
crosapi.mojom.AccountManagerObserver = {};
crosapi.mojom.AccountManagerObserver.$interfaceName = 'crosapi.mojom.AccountManagerObserver';
crosapi.mojom.AccountManagerObserver_OnTokenUpserted_ParamsSpec = { $: {} };
crosapi.mojom.AccountManagerObserver_OnAccountRemoved_ParamsSpec = { $: {} };
crosapi.mojom.AccountManagerObserver_OnAuthErrorChanged_ParamsSpec = { $: {} };
crosapi.mojom.AccountManagerObserver_OnSigninDialogClosed_ParamsSpec = { $: {} };
crosapi.mojom.AccountManager = {};
crosapi.mojom.AccountManager.$interfaceName = 'crosapi.mojom.AccountManager';
crosapi.mojom.AccountManager_IsInitialized_ParamsSpec = { $: {} };
crosapi.mojom.AccountManager_IsInitialized_ResponseParamsSpec = { $: {} };
crosapi.mojom.AccountManager_AddObserver_ParamsSpec = { $: {} };
crosapi.mojom.AccountManager_AddObserver_ResponseParamsSpec = { $: {} };
crosapi.mojom.AccountManager_GetAccounts_ParamsSpec = { $: {} };
crosapi.mojom.AccountManager_GetAccounts_ResponseParamsSpec = { $: {} };
crosapi.mojom.AccountManager_ShowAddAccountDialog_ParamsSpec = { $: {} };
crosapi.mojom.AccountManager_ShowAddAccountDialog_ResponseParamsSpec = { $: {} };
crosapi.mojom.AccountManager_ShowReauthAccountDialog_ParamsSpec = { $: {} };
crosapi.mojom.AccountManager_ShowReauthAccountDialog_ResponseParamsSpec = { $: {} };
crosapi.mojom.AccountManager_ShowManageAccountsSettings_ParamsSpec = { $: {} };
crosapi.mojom.AccountManager_GetPersistentErrorForAccount_ParamsSpec = { $: {} };
crosapi.mojom.AccountManager_GetPersistentErrorForAccount_ResponseParamsSpec = { $: {} };
crosapi.mojom.AccountManager_CreateAccessTokenFetcher_ParamsSpec = { $: {} };
crosapi.mojom.AccountManager_CreateAccessTokenFetcher_ResponseParamsSpec = { $: {} };
crosapi.mojom.AccountManager_ReportAuthError_ParamsSpec = { $: {} };
crosapi.mojom.AccessTokenFetcher = {};
crosapi.mojom.AccessTokenFetcher.$interfaceName = 'crosapi.mojom.AccessTokenFetcher';
crosapi.mojom.AccessTokenFetcher_Start_ParamsSpec = { $: {} };
crosapi.mojom.AccessTokenFetcher_Start_ResponseParamsSpec = { $: {} };

// Enum: AccountType
crosapi.mojom.AccountType = {
  kUnspecified: 0,
  kGaia: 1,
};

// Enum: State
crosapi.mojom.State = {
  kNone: 0,
  kInvalidGaiaCredentials: 1,
  kAccountNotFound: 2,
  kConnectionFailed: 3,
  kServiceUnavailable: 7,
  kRequestCanceled: 9,
  kUnexpectedServiceResponse: 11,
  kServiceError: 12,
  MinVersion: 12,
  MinVersion: 12,
};

// Enum: InvalidGaiaCredentialsReason
crosapi.mojom.InvalidGaiaCredentialsReason = {
  kUnknown: 0,
  kCredentialsRejectedByServer: 1,
  kCredentialsRejectedByClient: 2,
  kCredentialsMissing: 3,
};

// Enum: ScopeLimitedUnrecoverableErrorReason
crosapi.mojom.ScopeLimitedUnrecoverableErrorReason = {
  kInvalidGrantRaptError: 0,
  kInvalidScope: 1,
  kRestrictedClient: 2,
  kAdminPolicyEnforced: 3,
  kRemoteConsentResolutionRequired: 4,
  kAccessDenied: 5,
};

// Enum: Status
crosapi.mojom.Status = {
  kSuccess: 0,
  kAlreadyInProgress: 1,
  kCancelledByUser: 2,
  kNetworkError: 3,
  kUnexpectedResponse: 4,
  MinVersion: 4,
};

// Union: AccessTokenResult
mojo.internal.Union(
    crosapi.mojom.AccessTokenResultSpec, 'crosapi.mojom.AccessTokenResult', {
      'access_token_info': {
        'ordinal': 0,
        'type': crosapi.mojom.AccessTokenInfoSpec.$,
        'nullable': false,
      },
      'error': {
        'ordinal': 1,
        'type': crosapi.mojom.GoogleServiceAuthErrorSpec.$,
        'nullable': false,
      },
    });

// Struct: AccountKey
mojo.internal.Struct(
    crosapi.mojom.AccountKeySpec, 'crosapi.mojom.AccountKey', [
      mojo.internal.StructField('id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('account_type', 8, 0, crosapi.mojom.AccountTypeSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: Account
mojo.internal.Struct(
    crosapi.mojom.AccountSpec, 'crosapi.mojom.Account', [
      mojo.internal.StructField('key', 0, 0, crosapi.mojom.AccountKeySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('raw_email', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: GoogleServiceAuthError
mojo.internal.Struct(
    crosapi.mojom.GoogleServiceAuthErrorSpec, 'crosapi.mojom.GoogleServiceAuthError', [
      mojo.internal.StructField('kNone', 0, 0, mojo.internal.Pointer, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: AccountAdditionOptions
mojo.internal.Struct(
    crosapi.mojom.AccountAdditionOptionsSpec, 'crosapi.mojom.AccountAdditionOptions', [
      mojo.internal.StructField('is_available_in_arc', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('show_arc_availability_picker', 0, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: AccountUpsertionResult
mojo.internal.Struct(
    crosapi.mojom.AccountUpsertionResultSpec, 'crosapi.mojom.AccountUpsertionResult', [
      mojo.internal.StructField('kSuccess', 0, 0, mojo.internal.Pointer, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: AccessTokenInfo
mojo.internal.Struct(
    crosapi.mojom.AccessTokenInfoSpec, 'crosapi.mojom.AccessTokenInfo', [
      mojo.internal.StructField('access_token', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('expiration_time', 8, 0, mojo_base.mojom.TimeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('id_token', 16, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 32]]);

// Interface: AccountManagerObserver
mojo.internal.Struct(
    crosapi.mojom.AccountManagerObserver_OnTokenUpserted_ParamsSpec, 'crosapi.mojom.AccountManagerObserver_OnTokenUpserted_Params', [
      mojo.internal.StructField('account', 0, 0, crosapi.mojom.AccountSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.AccountManagerObserver_OnAccountRemoved_ParamsSpec, 'crosapi.mojom.AccountManagerObserver_OnAccountRemoved_Params', [
      mojo.internal.StructField('account', 0, 0, crosapi.mojom.AccountSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.AccountManagerObserver_OnAuthErrorChanged_ParamsSpec, 'crosapi.mojom.AccountManagerObserver_OnAuthErrorChanged_Params', [
      mojo.internal.StructField('account', 0, 0, crosapi.mojom.AccountKeySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('error', 8, 0, crosapi.mojom.GoogleServiceAuthErrorSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    crosapi.mojom.AccountManagerObserver_OnSigninDialogClosed_ParamsSpec, 'crosapi.mojom.AccountManagerObserver_OnSigninDialogClosed_Params', [
    ],
    [[0, 8]]);

crosapi.mojom.AccountManagerObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

crosapi.mojom.AccountManagerObserverRemote = class {
  static get $interfaceName() {
    return 'crosapi.mojom.AccountManagerObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      crosapi.mojom.AccountManagerObserverPendingReceiver,
      handle);
    this.$ = new crosapi.mojom.AccountManagerObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onTokenUpserted(account) {
    return this.$.onTokenUpserted(account);
  }
  onAccountRemoved(account) {
    return this.$.onAccountRemoved(account);
  }
  onAuthErrorChanged(account, error) {
    return this.$.onAuthErrorChanged(account, error);
  }
  onSigninDialogClosed() {
    return this.$.onSigninDialogClosed();
  }
};

crosapi.mojom.AccountManagerObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('AccountManagerObserver', [
      { explicit: 0 },
      { explicit: 1 },
      { explicit: 2 },
      { explicit: 3 },
    ]);
  }

  onTokenUpserted(account) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      crosapi.mojom.AccountManagerObserver_OnTokenUpserted_ParamsSpec,
      null,
      [account],
      false);
  }

  onAccountRemoved(account) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      crosapi.mojom.AccountManagerObserver_OnAccountRemoved_ParamsSpec,
      null,
      [account],
      false);
  }

  onAuthErrorChanged(account, error) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      crosapi.mojom.AccountManagerObserver_OnAuthErrorChanged_ParamsSpec,
      null,
      [account, error],
      false);
  }

  onSigninDialogClosed() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      crosapi.mojom.AccountManagerObserver_OnSigninDialogClosed_ParamsSpec,
      null,
      [],
      false);
  }

};

crosapi.mojom.AccountManagerObserver.getRemote = function() {
  let remote = new crosapi.mojom.AccountManagerObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'crosapi.mojom.AccountManagerObserver',
    'context');
  return remote.$;
};

crosapi.mojom.AccountManagerObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('AccountManagerObserver', [
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
        
        // Try Method 0: OnTokenUpserted
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(crosapi.mojom.AccountManagerObserver_OnTokenUpserted_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnTokenUpserted (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: OnAccountRemoved
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(crosapi.mojom.AccountManagerObserver_OnAccountRemoved_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnAccountRemoved (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: OnAuthErrorChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(crosapi.mojom.AccountManagerObserver_OnAuthErrorChanged_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnAuthErrorChanged (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: OnSigninDialogClosed
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(crosapi.mojom.AccountManagerObserver_OnSigninDialogClosed_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnSigninDialogClosed (3)');
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
          const params = decoder.decodeStructInline(crosapi.mojom.AccountManagerObserver_OnTokenUpserted_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onTokenUpserted');
          const result = this.impl.onTokenUpserted(params.account);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(crosapi.mojom.AccountManagerObserver_OnAccountRemoved_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onAccountRemoved');
          const result = this.impl.onAccountRemoved(params.account);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(crosapi.mojom.AccountManagerObserver_OnAuthErrorChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onAuthErrorChanged');
          const result = this.impl.onAuthErrorChanged(params.account, params.error);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(crosapi.mojom.AccountManagerObserver_OnSigninDialogClosed_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onSigninDialogClosed');
          const result = this.impl.onSigninDialogClosed();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

crosapi.mojom.AccountManagerObserverReceiver = crosapi.mojom.AccountManagerObserverReceiver;

crosapi.mojom.AccountManagerObserverPtr = crosapi.mojom.AccountManagerObserverRemote;
crosapi.mojom.AccountManagerObserverRequest = crosapi.mojom.AccountManagerObserverPendingReceiver;


// Interface: AccountManager
mojo.internal.Struct(
    crosapi.mojom.AccountManager_IsInitialized_ParamsSpec, 'crosapi.mojom.AccountManager_IsInitialized_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    crosapi.mojom.AccountManager_IsInitialized_ResponseParamsSpec, 'crosapi.mojom.AccountManager_IsInitialized_ResponseParams', [
      mojo.internal.StructField('is_initialized', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.AccountManager_AddObserver_ParamsSpec, 'crosapi.mojom.AccountManager_AddObserver_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    crosapi.mojom.AccountManager_AddObserver_ResponseParamsSpec, 'crosapi.mojom.AccountManager_AddObserver_ResponseParams', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(crosapi.mojom.AccountManagerObserverSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.AccountManager_GetAccounts_ParamsSpec, 'crosapi.mojom.AccountManager_GetAccounts_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    crosapi.mojom.AccountManager_GetAccounts_ResponseParamsSpec, 'crosapi.mojom.AccountManager_GetAccounts_ResponseParams', [
      mojo.internal.StructField('accounts', 0, 0, mojo.internal.Array(crosapi.mojom.AccountSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.AccountManager_ShowAddAccountDialog_ParamsSpec, 'crosapi.mojom.AccountManager_ShowAddAccountDialog_Params', [
      mojo.internal.StructField('add_account_options', 0, 0, crosapi.mojom.AccountAdditionOptionsSpec.$, null, true, 8, undefined),
    ],
    [[0, 8], [8, 16]]);

mojo.internal.Struct(
    crosapi.mojom.AccountManager_ShowAddAccountDialog_ResponseParamsSpec, 'crosapi.mojom.AccountManager_ShowAddAccountDialog_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, crosapi.mojom.AccountUpsertionResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.AccountManager_ShowReauthAccountDialog_ParamsSpec, 'crosapi.mojom.AccountManager_ShowReauthAccountDialog_Params', [
      mojo.internal.StructField('email', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.AccountManager_ShowReauthAccountDialog_ResponseParamsSpec, 'crosapi.mojom.AccountManager_ShowReauthAccountDialog_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, crosapi.mojom.AccountUpsertionResultSpec.$, null, true, 13, undefined),
    ],
    [[0, 8], [13, 16]]);

mojo.internal.Struct(
    crosapi.mojom.AccountManager_ShowManageAccountsSettings_ParamsSpec, 'crosapi.mojom.AccountManager_ShowManageAccountsSettings_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    crosapi.mojom.AccountManager_GetPersistentErrorForAccount_ParamsSpec, 'crosapi.mojom.AccountManager_GetPersistentErrorForAccount_Params', [
      mojo.internal.StructField('account', 0, 0, crosapi.mojom.AccountKeySpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.AccountManager_GetPersistentErrorForAccount_ResponseParamsSpec, 'crosapi.mojom.AccountManager_GetPersistentErrorForAccount_ResponseParams', [
      mojo.internal.StructField('error', 0, 0, crosapi.mojom.GoogleServiceAuthErrorSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.AccountManager_CreateAccessTokenFetcher_ParamsSpec, 'crosapi.mojom.AccountManager_CreateAccessTokenFetcher_Params', [
      mojo.internal.StructField('account_key', 0, 0, crosapi.mojom.AccountKeySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('oauth_consumer_name', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    crosapi.mojom.AccountManager_CreateAccessTokenFetcher_ResponseParamsSpec, 'crosapi.mojom.AccountManager_CreateAccessTokenFetcher_ResponseParams', [
      mojo.internal.StructField('access_token_fetcher', 0, 0, mojo.internal.InterfaceProxy(crosapi.mojom.AccessTokenFetcherSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.AccountManager_ReportAuthError_ParamsSpec, 'crosapi.mojom.AccountManager_ReportAuthError_Params', [
      mojo.internal.StructField('account', 0, 0, crosapi.mojom.AccountKeySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('error', 8, 0, crosapi.mojom.GoogleServiceAuthErrorSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

crosapi.mojom.AccountManagerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

crosapi.mojom.AccountManagerRemote = class {
  static get $interfaceName() {
    return 'crosapi.mojom.AccountManager';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      crosapi.mojom.AccountManagerPendingReceiver,
      handle);
    this.$ = new crosapi.mojom.AccountManagerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  isInitialized() {
    return this.$.isInitialized();
  }
  addObserver() {
    return this.$.addObserver();
  }
  getAccounts() {
    return this.$.getAccounts();
  }
  showAddAccountDialog(add_account_options) {
    return this.$.showAddAccountDialog(add_account_options);
  }
  showReauthAccountDialog(email) {
    return this.$.showReauthAccountDialog(email);
  }
  showManageAccountsSettings() {
    return this.$.showManageAccountsSettings();
  }
  getPersistentErrorForAccount(account) {
    return this.$.getPersistentErrorForAccount(account);
  }
  createAccessTokenFetcher(account_key, oauth_consumer_name) {
    return this.$.createAccessTokenFetcher(account_key, oauth_consumer_name);
  }
  reportAuthError(account, error) {
    return this.$.reportAuthError(account, error);
  }
};

crosapi.mojom.AccountManagerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('AccountManager', [
      { explicit: 0 },
      { explicit: 1 },
      { explicit: 2 },
      { explicit: 3 },
      { explicit: 4 },
      { explicit: 5 },
      { explicit: 6 },
      { explicit: 7 },
      { explicit: 8 },
    ]);
  }

  isInitialized() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      crosapi.mojom.AccountManager_IsInitialized_ParamsSpec,
      crosapi.mojom.AccountManager_IsInitialized_ResponseParamsSpec,
      [],
      false);
  }

  addObserver() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      crosapi.mojom.AccountManager_AddObserver_ParamsSpec,
      crosapi.mojom.AccountManager_AddObserver_ResponseParamsSpec,
      [],
      false);
  }

  getAccounts() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      crosapi.mojom.AccountManager_GetAccounts_ParamsSpec,
      crosapi.mojom.AccountManager_GetAccounts_ResponseParamsSpec,
      [],
      false);
  }

  showAddAccountDialog(add_account_options) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      crosapi.mojom.AccountManager_ShowAddAccountDialog_ParamsSpec,
      crosapi.mojom.AccountManager_ShowAddAccountDialog_ResponseParamsSpec,
      [add_account_options],
      false);
  }

  showReauthAccountDialog(email) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      crosapi.mojom.AccountManager_ShowReauthAccountDialog_ParamsSpec,
      crosapi.mojom.AccountManager_ShowReauthAccountDialog_ResponseParamsSpec,
      [email],
      false);
  }

  showManageAccountsSettings() {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      crosapi.mojom.AccountManager_ShowManageAccountsSettings_ParamsSpec,
      null,
      [],
      false);
  }

  getPersistentErrorForAccount(account) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      crosapi.mojom.AccountManager_GetPersistentErrorForAccount_ParamsSpec,
      crosapi.mojom.AccountManager_GetPersistentErrorForAccount_ResponseParamsSpec,
      [account],
      false);
  }

  createAccessTokenFetcher(account_key, oauth_consumer_name) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      crosapi.mojom.AccountManager_CreateAccessTokenFetcher_ParamsSpec,
      crosapi.mojom.AccountManager_CreateAccessTokenFetcher_ResponseParamsSpec,
      [account_key, oauth_consumer_name],
      false);
  }

  reportAuthError(account, error) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      crosapi.mojom.AccountManager_ReportAuthError_ParamsSpec,
      null,
      [account, error],
      false);
  }

};

crosapi.mojom.AccountManager.getRemote = function() {
  let remote = new crosapi.mojom.AccountManagerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'crosapi.mojom.AccountManager',
    'context');
  return remote.$;
};

crosapi.mojom.AccountManagerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('AccountManager', [
      { explicit: 0 },
      { explicit: 1 },
      { explicit: 2 },
      { explicit: 3 },
      { explicit: 4 },
      { explicit: 5 },
      { explicit: 6 },
      { explicit: 7 },
      { explicit: 8 },
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
        
        // Try Method 0: IsInitialized
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(crosapi.mojom.AccountManager_IsInitialized_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> IsInitialized (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: AddObserver
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(crosapi.mojom.AccountManager_AddObserver_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AddObserver (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: GetAccounts
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(crosapi.mojom.AccountManager_GetAccounts_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetAccounts (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: ShowAddAccountDialog
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(crosapi.mojom.AccountManager_ShowAddAccountDialog_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ShowAddAccountDialog (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: ShowReauthAccountDialog
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(crosapi.mojom.AccountManager_ShowReauthAccountDialog_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ShowReauthAccountDialog (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: ShowManageAccountsSettings
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(crosapi.mojom.AccountManager_ShowManageAccountsSettings_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ShowManageAccountsSettings (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: GetPersistentErrorForAccount
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(crosapi.mojom.AccountManager_GetPersistentErrorForAccount_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetPersistentErrorForAccount (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: CreateAccessTokenFetcher
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(crosapi.mojom.AccountManager_CreateAccessTokenFetcher_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreateAccessTokenFetcher (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: ReportAuthError
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(crosapi.mojom.AccountManager_ReportAuthError_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ReportAuthError (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
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
          const params = decoder.decodeStructInline(crosapi.mojom.AccountManager_IsInitialized_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.isInitialized');
          const result = this.impl.isInitialized();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, crosapi.mojom.AccountManager_IsInitialized_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(crosapi.mojom.AccountManager_AddObserver_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.addObserver');
          const result = this.impl.addObserver();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, crosapi.mojom.AccountManager_AddObserver_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(crosapi.mojom.AccountManager_GetAccounts_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getAccounts');
          const result = this.impl.getAccounts();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, crosapi.mojom.AccountManager_GetAccounts_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(crosapi.mojom.AccountManager_ShowAddAccountDialog_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.showAddAccountDialog');
          const result = this.impl.showAddAccountDialog(params.add_account_options);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, crosapi.mojom.AccountManager_ShowAddAccountDialog_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(crosapi.mojom.AccountManager_ShowReauthAccountDialog_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.showReauthAccountDialog');
          const result = this.impl.showReauthAccountDialog(params.email);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, crosapi.mojom.AccountManager_ShowReauthAccountDialog_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(crosapi.mojom.AccountManager_ShowManageAccountsSettings_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.showManageAccountsSettings');
          const result = this.impl.showManageAccountsSettings();
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(crosapi.mojom.AccountManager_GetPersistentErrorForAccount_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getPersistentErrorForAccount');
          const result = this.impl.getPersistentErrorForAccount(params.account);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, crosapi.mojom.AccountManager_GetPersistentErrorForAccount_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(crosapi.mojom.AccountManager_CreateAccessTokenFetcher_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.createAccessTokenFetcher');
          const result = this.impl.createAccessTokenFetcher(params.account_key, params.oauth_consumer_name);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, crosapi.mojom.AccountManager_CreateAccessTokenFetcher_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(crosapi.mojom.AccountManager_ReportAuthError_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.reportAuthError');
          const result = this.impl.reportAuthError(params.account, params.error);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

crosapi.mojom.AccountManagerReceiver = crosapi.mojom.AccountManagerReceiver;

crosapi.mojom.AccountManagerPtr = crosapi.mojom.AccountManagerRemote;
crosapi.mojom.AccountManagerRequest = crosapi.mojom.AccountManagerPendingReceiver;


// Interface: AccessTokenFetcher
mojo.internal.Struct(
    crosapi.mojom.AccessTokenFetcher_Start_ParamsSpec, 'crosapi.mojom.AccessTokenFetcher_Start_Params', [
      mojo.internal.StructField('scopes', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.AccessTokenFetcher_Start_ResponseParamsSpec, 'crosapi.mojom.AccessTokenFetcher_Start_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, crosapi.mojom.AccessTokenResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

crosapi.mojom.AccessTokenFetcherPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

crosapi.mojom.AccessTokenFetcherRemote = class {
  static get $interfaceName() {
    return 'crosapi.mojom.AccessTokenFetcher';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      crosapi.mojom.AccessTokenFetcherPendingReceiver,
      handle);
    this.$ = new crosapi.mojom.AccessTokenFetcherRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  start(scopes) {
    return this.$.start(scopes);
  }
};

crosapi.mojom.AccessTokenFetcherRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('AccessTokenFetcher', [
      { explicit: 0 },
    ]);
  }

  start(scopes) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      crosapi.mojom.AccessTokenFetcher_Start_ParamsSpec,
      crosapi.mojom.AccessTokenFetcher_Start_ResponseParamsSpec,
      [scopes],
      false);
  }

};

crosapi.mojom.AccessTokenFetcher.getRemote = function() {
  let remote = new crosapi.mojom.AccessTokenFetcherRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'crosapi.mojom.AccessTokenFetcher',
    'context');
  return remote.$;
};

crosapi.mojom.AccessTokenFetcherReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('AccessTokenFetcher', [
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
        
        // Try Method 0: Start
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(crosapi.mojom.AccessTokenFetcher_Start_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Start (0)');
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
          const params = decoder.decodeStructInline(crosapi.mojom.AccessTokenFetcher_Start_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.start');
          const result = this.impl.start(params.scopes);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, crosapi.mojom.AccessTokenFetcher_Start_ResponseParamsSpec);
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

crosapi.mojom.AccessTokenFetcherReceiver = crosapi.mojom.AccessTokenFetcherReceiver;

crosapi.mojom.AccessTokenFetcherPtr = crosapi.mojom.AccessTokenFetcherRemote;
crosapi.mojom.AccessTokenFetcherRequest = crosapi.mojom.AccessTokenFetcherPendingReceiver;

