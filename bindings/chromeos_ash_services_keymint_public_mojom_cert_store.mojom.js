// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/services/keymint/public/mojom/cert_store.mojom
// Module: arc.keymint.mojom

'use strict';

// Module namespace
var arc = arc || {};
arc.keymint = arc.keymint || {};
arc.keymint.mojom = arc.keymint.mojom || {};

arc.keymint.mojom.KeyDataSpec = { $: {} };
arc.keymint.mojom.ChapsKeyDataSpec = { $: {} };
arc.keymint.mojom.ChromeOsKeySpec = { $: {} };
arc.keymint.mojom.CertStoreInstance = {};
arc.keymint.mojom.CertStoreInstance.$interfaceName = 'arc.keymint.mojom.CertStoreInstance';
arc.keymint.mojom.CertStoreInstance_UpdatePlaceholderKeys_ParamsSpec = { $: {} };
arc.keymint.mojom.CertStoreInstance_UpdatePlaceholderKeys_ResponseParamsSpec = { $: {} };
arc.keymint.mojom.CertStoreInstance_SetSerialNumber_ParamsSpec = { $: {} };

// Union: KeyData
mojo.internal.Union(
    arc.keymint.mojom.KeyDataSpec, 'arc.keymint.mojom.KeyData', {
      'chaps_key_data': {
        'ordinal': 0,
        'type': arc.keymint.mojom.ChapsKeyDataSpec.$,
        'nullable': false,
      },
    });

// Struct: ChapsKeyData
mojo.internal.Struct(
    arc.keymint.mojom.ChapsKeyDataSpec, 'arc.keymint.mojom.ChapsKeyData', [
      mojo.internal.StructField('label', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('id', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('slot', 16, 0, arc.keymanagement.mojom.ChapsSlotSpec.$, null, false, 1, undefined),
    ],
    [[0, 24], [1, 32]]);

// Struct: ChromeOsKey
mojo.internal.Struct(
    arc.keymint.mojom.ChromeOsKeySpec, 'arc.keymint.mojom.ChromeOsKey', [
      mojo.internal.StructField('base64_subject_public_key_info', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('key_data', 8, 0, arc.keymint.mojom.KeyDataSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: CertStoreInstance
mojo.internal.Struct(
    arc.keymint.mojom.CertStoreInstance_UpdatePlaceholderKeys_ParamsSpec, 'arc.keymint.mojom.CertStoreInstance_UpdatePlaceholderKeys_Params', [
      mojo.internal.StructField('keys', 0, 0, mojo.internal.Array(arc.keymint.mojom.ChromeOsKeySpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.keymint.mojom.CertStoreInstance_UpdatePlaceholderKeys_ResponseParamsSpec, 'arc.keymint.mojom.CertStoreInstance_UpdatePlaceholderKeys_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.keymint.mojom.CertStoreInstance_SetSerialNumber_ParamsSpec, 'arc.keymint.mojom.CertStoreInstance_SetSerialNumber_Params', [
      mojo.internal.StructField('serial_number', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

arc.keymint.mojom.CertStoreInstancePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.keymint.mojom.CertStoreInstanceRemote = class {
  static get $interfaceName() {
    return 'arc.keymint.mojom.CertStoreInstance';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.keymint.mojom.CertStoreInstancePendingReceiver,
      handle);
    this.$ = new arc.keymint.mojom.CertStoreInstanceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.keymint.mojom.CertStoreInstanceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  updatePlaceholderKeys(keys) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      arc.keymint.mojom.CertStoreInstance_UpdatePlaceholderKeys_ParamsSpec,
      arc.keymint.mojom.CertStoreInstance_UpdatePlaceholderKeys_ResponseParamsSpec,
      [keys],
      false);
  }

  setSerialNumber(serial_number) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      arc.keymint.mojom.CertStoreInstance_SetSerialNumber_ParamsSpec,
      null,
      [serial_number],
      false);
  }

};

arc.keymint.mojom.CertStoreInstance.getRemote = function() {
  let remote = new arc.keymint.mojom.CertStoreInstanceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.keymint.mojom.CertStoreInstance',
    'context');
  return remote.$;
};

arc.keymint.mojom.CertStoreInstanceReceiver = class {
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
        case 1: {
          const params = arc.keymint.mojom.CertStoreInstance_UpdatePlaceholderKeys_ParamsSpec.$.decode(message.payload);
          console.log('[GeneratedReceiver] Calling impl.updatePlaceholderKeys');
          const result = this.impl.updatePlaceholderKeys(params.keys);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.keymint.mojom.CertStoreInstance_UpdatePlaceholderKeys_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const params = arc.keymint.mojom.CertStoreInstance_SetSerialNumber_ParamsSpec.$.decode(message.payload);
          console.log('[GeneratedReceiver] Calling impl.setSerialNumber');
          const result = this.impl.setSerialNumber(params.serial_number);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

arc.keymint.mojom.CertStoreInstanceReceiver = arc.keymint.mojom.CertStoreInstanceReceiver;

arc.keymint.mojom.CertStoreInstancePtr = arc.keymint.mojom.CertStoreInstanceRemote;
arc.keymint.mojom.CertStoreInstanceRequest = arc.keymint.mojom.CertStoreInstancePendingReceiver;

