// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/services/keymint/public/mojom/cert_store.mojom
// Module: arc.keymint.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

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
  updatePlaceholderKeys(keys) {
    return this.$.updatePlaceholderKeys(keys);
  }
  setSerialNumber(serial_number) {
    return this.$.setSerialNumber(serial_number);
  }
};

arc.keymint.mojom.CertStoreInstanceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('CertStoreInstance', [
      { explicit: 1 },
      { explicit: 2 },
    ]);
  }

  updatePlaceholderKeys(keys) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      arc.keymint.mojom.CertStoreInstance_UpdatePlaceholderKeys_ParamsSpec,
      arc.keymint.mojom.CertStoreInstance_UpdatePlaceholderKeys_ResponseParamsSpec,
      [keys],
      false);
  }

  setSerialNumber(serial_number) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
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
    const ordinals = window.mojoScrambler.getOrdinals('CertStoreInstance', [
      { explicit: 1 },
      { explicit: 2 },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = {{ header: args[1], payload: payload, handles: args[3] || [] }};
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.keymint.mojom.CertStoreInstance_UpdatePlaceholderKeys_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.keymint.mojom.CertStoreInstance_SetSerialNumber_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.keymint.mojom.CertStoreInstance_UpdatePlaceholderKeys_ParamsSpec.$.structSpec);
          const result = this.impl.updatePlaceholderKeys(params.keys);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.keymint.mojom.CertStoreInstance_UpdatePlaceholderKeys_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.keymint.mojom.CertStoreInstance_SetSerialNumber_ParamsSpec.$.structSpec);
          const result = this.impl.setSerialNumber(params.serial_number);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

arc.keymint.mojom.CertStoreInstanceReceiver = arc.keymint.mojom.CertStoreInstanceReceiver;

arc.keymint.mojom.CertStoreInstancePtr = arc.keymint.mojom.CertStoreInstanceRemote;
arc.keymint.mojom.CertStoreInstanceRequest = arc.keymint.mojom.CertStoreInstancePendingReceiver;

