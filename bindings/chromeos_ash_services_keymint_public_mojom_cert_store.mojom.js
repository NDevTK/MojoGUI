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
    this.ordinalMap = new Map();
    this.ordinalMap.set(1, 0); // Default ordinal 1 -> Index 0
    this.ordinalMap.set(2, 1); // Default ordinal 2 -> Index 1
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
        message = {
          header: args[1],
          payload: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: UpdatePlaceholderKeys
        try {
             decoder.decodeStruct(arc.keymint.mojom.CertStoreInstance_UpdatePlaceholderKeys_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UpdatePlaceholderKeys (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 1: SetSerialNumber
        try {
             decoder.decodeStruct(arc.keymint.mojom.CertStoreInstance_SetSerialNumber_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetSerialNumber (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.keymint.mojom.CertStoreInstance_UpdatePlaceholderKeys_ParamsSpec.$, message.header.headerSize);
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
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.keymint.mojom.CertStoreInstance_SetSerialNumber_ParamsSpec.$, message.header.headerSize);
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

