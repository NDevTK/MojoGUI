// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/services/keymaster/public/mojom/cert_store.mojom
// Module: arc.keymaster.mojom

'use strict';

// Module namespace
var arc = arc || {};
arc.keymaster = arc.keymaster || {};
arc.keymaster.mojom = arc.keymaster.mojom || {};

arc.keymaster.mojom.KeyDataSpec = { $: {} };
arc.keymaster.mojom.ChapsKeyDataSpec = { $: {} };
arc.keymaster.mojom.ChromeOsKeySpec = { $: {} };
arc.keymaster.mojom.CertStoreInstance = {};
arc.keymaster.mojom.CertStoreInstance.$interfaceName = 'arc.keymaster.mojom.CertStoreInstance';
arc.keymaster.mojom.CertStoreInstance_UpdatePlaceholderKeys_ParamsSpec = { $: {} };
arc.keymaster.mojom.CertStoreInstance_UpdatePlaceholderKeys_ResponseParamsSpec = { $: {} };

// Union: KeyData
mojo.internal.Union(
    arc.keymaster.mojom.KeyDataSpec, 'arc.keymaster.mojom.KeyData', {
      'chaps_key_data': {
        'ordinal': 0,
        'type': arc.keymaster.mojom.ChapsKeyDataSpec.$,
        'nullable': false,
      },
    });

// Struct: ChapsKeyData
mojo.internal.Struct(
    arc.keymaster.mojom.ChapsKeyDataSpec, 'arc.keymaster.mojom.ChapsKeyData', [
      mojo.internal.StructField('label', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('id', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('slot', 16, 0, arc.keymanagement.mojom.ChapsSlotSpec.$, null, false, 1, undefined),
    ],
    [[0, 24], [1, 32]]);

// Struct: ChromeOsKey
mojo.internal.Struct(
    arc.keymaster.mojom.ChromeOsKeySpec, 'arc.keymaster.mojom.ChromeOsKey', [
      mojo.internal.StructField('base64_subject_public_key_info', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('key_data', 8, 0, arc.keymaster.mojom.KeyDataSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: CertStoreInstance
mojo.internal.Struct(
    arc.keymaster.mojom.CertStoreInstance_UpdatePlaceholderKeys_ParamsSpec, 'arc.keymaster.mojom.CertStoreInstance_UpdatePlaceholderKeys_Params', [
      mojo.internal.StructField('keys', 0, 0, mojo.internal.Array(arc.keymaster.mojom.ChromeOsKeySpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.keymaster.mojom.CertStoreInstance_UpdatePlaceholderKeys_ResponseParamsSpec, 'arc.keymaster.mojom.CertStoreInstance_UpdatePlaceholderKeys_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

arc.keymaster.mojom.CertStoreInstancePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.keymaster.mojom.CertStoreInstanceRemote = class {
  static get $interfaceName() {
    return 'arc.keymaster.mojom.CertStoreInstance';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.keymaster.mojom.CertStoreInstancePendingReceiver,
      handle);
    this.$ = new arc.keymaster.mojom.CertStoreInstanceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.keymaster.mojom.CertStoreInstanceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  updatePlaceholderKeys(keys) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      arc.keymaster.mojom.CertStoreInstance_UpdatePlaceholderKeys_ParamsSpec,
      arc.keymaster.mojom.CertStoreInstance_UpdatePlaceholderKeys_ResponseParamsSpec,
      [keys],
      false);
  }

};

arc.keymaster.mojom.CertStoreInstance.getRemote = function() {
  let remote = new arc.keymaster.mojom.CertStoreInstanceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.keymaster.mojom.CertStoreInstance',
    'context');
  return remote.$;
};

arc.keymaster.mojom.CertStoreInstanceReceiver = class {
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
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        message = {
          header: args[1],
          payload: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      switch (header.ordinal) {
        case 1: {
          const params = arc.keymaster.mojom.CertStoreInstance_UpdatePlaceholderKeys_ParamsSpec.$.decode(message.payload);
          const result = this.impl.updatePlaceholderKeys(params.keys);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.keymaster.mojom.CertStoreInstance_UpdatePlaceholderKeys_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
    }});
  }
};

arc.keymaster.mojom.CertStoreInstanceReceiver = arc.keymaster.mojom.CertStoreInstanceReceiver;

arc.keymaster.mojom.CertStoreInstancePtr = arc.keymaster.mojom.CertStoreInstanceRemote;
arc.keymaster.mojom.CertStoreInstanceRequest = arc.keymaster.mojom.CertStoreInstancePendingReceiver;

