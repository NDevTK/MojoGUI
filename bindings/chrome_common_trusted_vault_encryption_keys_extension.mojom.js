// Auto-generated MojoJS binding
// Source: chromium_src/chrome/common/trusted_vault_encryption_keys_extension.mojom
// Module: chrome.mojom

'use strict';

// Module namespace
var chrome = chrome || {};
chrome.mojom = chrome.mojom || {};

chrome.mojom.TrustedVaultKeySpec = { $: {} };
chrome.mojom.TrustedVaultEncryptionKeysExtension = {};
chrome.mojom.TrustedVaultEncryptionKeysExtension.$interfaceName = 'chrome.mojom.TrustedVaultEncryptionKeysExtension';
chrome.mojom.TrustedVaultEncryptionKeysExtension_SetEncryptionKeys_ParamsSpec = { $: {} };
chrome.mojom.TrustedVaultEncryptionKeysExtension_SetEncryptionKeys_ResponseParamsSpec = { $: {} };
chrome.mojom.TrustedVaultEncryptionKeysExtension_AddTrustedRecoveryMethod_ParamsSpec = { $: {} };
chrome.mojom.TrustedVaultEncryptionKeysExtension_AddTrustedRecoveryMethod_ResponseParamsSpec = { $: {} };

// Struct: TrustedVaultKey
mojo.internal.Struct(
    chrome.mojom.TrustedVaultKeySpec, 'chrome.mojom.TrustedVaultKey', [
      mojo.internal.StructField('bytes', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('version', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: TrustedVaultEncryptionKeysExtension
mojo.internal.Struct(
    chrome.mojom.TrustedVaultEncryptionKeysExtension_SetEncryptionKeys_ParamsSpec, 'chrome.mojom.TrustedVaultEncryptionKeysExtension_SetEncryptionKeys_Params', [
      mojo.internal.StructField('gaia_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('encryption_keys', 8, 0, mojo.internal.Map(mojo.internal.String, mojo.internal.Array(chrome.mojom.TrustedVaultKeySpec.$, false), false), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    chrome.mojom.TrustedVaultEncryptionKeysExtension_SetEncryptionKeys_ResponseParamsSpec, 'chrome.mojom.TrustedVaultEncryptionKeysExtension_SetEncryptionKeys_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    chrome.mojom.TrustedVaultEncryptionKeysExtension_AddTrustedRecoveryMethod_ParamsSpec, 'chrome.mojom.TrustedVaultEncryptionKeysExtension_AddTrustedRecoveryMethod_Params', [
      mojo.internal.StructField('gaia_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('public_key', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('method_type_hint', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    chrome.mojom.TrustedVaultEncryptionKeysExtension_AddTrustedRecoveryMethod_ResponseParamsSpec, 'chrome.mojom.TrustedVaultEncryptionKeysExtension_AddTrustedRecoveryMethod_ResponseParams', [
    ],
    [[0, 8]]);

chrome.mojom.TrustedVaultEncryptionKeysExtensionPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chrome.mojom.TrustedVaultEncryptionKeysExtensionRemote = class {
  static get $interfaceName() {
    return 'chrome.mojom.TrustedVaultEncryptionKeysExtension';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chrome.mojom.TrustedVaultEncryptionKeysExtensionPendingReceiver,
      handle);
    this.$ = new chrome.mojom.TrustedVaultEncryptionKeysExtensionRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chrome.mojom.TrustedVaultEncryptionKeysExtensionRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  setEncryptionKeys(gaia_id, encryption_keys) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      chrome.mojom.TrustedVaultEncryptionKeysExtension_SetEncryptionKeys_ParamsSpec,
      chrome.mojom.TrustedVaultEncryptionKeysExtension_SetEncryptionKeys_ResponseParamsSpec,
      [gaia_id, encryption_keys],
      false);
  }

  addTrustedRecoveryMethod(gaia_id, public_key, method_type_hint) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      chrome.mojom.TrustedVaultEncryptionKeysExtension_AddTrustedRecoveryMethod_ParamsSpec,
      chrome.mojom.TrustedVaultEncryptionKeysExtension_AddTrustedRecoveryMethod_ResponseParamsSpec,
      [gaia_id, public_key, method_type_hint],
      false);
  }

};

chrome.mojom.TrustedVaultEncryptionKeysExtension.getRemote = function() {
  let remote = new chrome.mojom.TrustedVaultEncryptionKeysExtensionRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chrome.mojom.TrustedVaultEncryptionKeysExtension',
    'context');
  return remote.$;
};

chrome.mojom.TrustedVaultEncryptionKeysExtensionReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
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
        let payload = args[2];
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      switch (header.ordinal) {
        case 0: {
          const params = chrome.mojom.TrustedVaultEncryptionKeysExtension_SetEncryptionKeys_ParamsSpec.$.decode(message.payload);
          console.log('[GeneratedReceiver] Calling impl.setEncryptionKeys');
          const result = this.impl.setEncryptionKeys(params.gaia_id, params.encryption_keys);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, chrome.mojom.TrustedVaultEncryptionKeysExtension_SetEncryptionKeys_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const params = chrome.mojom.TrustedVaultEncryptionKeysExtension_AddTrustedRecoveryMethod_ParamsSpec.$.decode(message.payload);
          console.log('[GeneratedReceiver] Calling impl.addTrustedRecoveryMethod');
          const result = this.impl.addTrustedRecoveryMethod(params.gaia_id, params.public_key, params.method_type_hint);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, chrome.mojom.TrustedVaultEncryptionKeysExtension_AddTrustedRecoveryMethod_ResponseParamsSpec);
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

chrome.mojom.TrustedVaultEncryptionKeysExtensionReceiver = chrome.mojom.TrustedVaultEncryptionKeysExtensionReceiver;

chrome.mojom.TrustedVaultEncryptionKeysExtensionPtr = chrome.mojom.TrustedVaultEncryptionKeysExtensionRemote;
chrome.mojom.TrustedVaultEncryptionKeysExtensionRequest = chrome.mojom.TrustedVaultEncryptionKeysExtensionPendingReceiver;

