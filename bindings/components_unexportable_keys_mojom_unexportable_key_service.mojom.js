// Auto-generated MojoJS binding
// Source: chromium_src/components/unexportable_keys/mojom/unexportable_key_service.mojom
// Module: unexportable_keys.mojom

// Module namespace
var unexportable_keys = unexportable_keys || {};
unexportable_keys.mojom = unexportable_keys.mojom || {};
var mojo_base = mojo_base || {};

unexportable_keys.mojom.SignatureAlgorithmSpec = { $: mojo.internal.Enum() };
unexportable_keys.mojom.ServiceErrorSpec = { $: mojo.internal.Enum() };
unexportable_keys.mojom.BackgroundTaskPrioritySpec = { $: mojo.internal.Enum() };
unexportable_keys.mojom.UnexportableKeyIdSpec = { $: {} };
unexportable_keys.mojom.NewKeyDataSpec = { $: {} };
unexportable_keys.mojom.UnexportableKeyService = {};
unexportable_keys.mojom.UnexportableKeyService.$interfaceName = 'unexportable_keys.mojom.UnexportableKeyService';
unexportable_keys.mojom.UnexportableKeyService_GenerateSigningKey_ParamsSpec = { $: {} };
unexportable_keys.mojom.UnexportableKeyService_FromWrappedSigningKey_ParamsSpec = { $: {} };
unexportable_keys.mojom.UnexportableKeyService_Sign_ParamsSpec = { $: {} };
unexportable_keys.mojom.UnexportableKeyService_GetAllSigningKeysForGarbageCollection_ParamsSpec = { $: {} };
unexportable_keys.mojom.UnexportableKeyService_DeleteKey_ParamsSpec = { $: {} };
unexportable_keys.mojom.UnexportableKeyService_DeleteKey_ResponseParamsSpec = { $: {} };
unexportable_keys.mojom.UnexportableKeyService_DeleteAllKeys_ParamsSpec = { $: {} };

// Enum: SignatureAlgorithm
unexportable_keys.mojom.SignatureAlgorithm = {
  RSA_PKCS1_SHA1: 0,
  RSA_PKCS1_SHA256: 1,
  ECDSA_SHA256: 2,
  RSA_PSS_SHA256: 3,
};

// Enum: ServiceError
unexportable_keys.mojom.ServiceError = {
  kCryptoApiFailed: 1,
  kKeyNotFound: 2,
  kKeyCollision: 3,
  kNoKeyProvider: 4,
  kAlgorithmNotSupported: 5,
  kKeyNotReady: 6,
  kVerifySignatureFailed: 7,
  kOperationNotSupported: 8,
};

// Enum: BackgroundTaskPriority
unexportable_keys.mojom.BackgroundTaskPriority = {
  kBestEffort: 0,
  kUserVisible: 1,
  kUserBlocking: 2,
};

// Struct: UnexportableKeyId
mojo.internal.Struct(
    unexportable_keys.mojom.UnexportableKeyIdSpec, 'unexportable_keys.mojom.UnexportableKeyId', [
      mojo.internal.StructField('key_id', 0, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: NewKeyData
mojo.internal.Struct(
    unexportable_keys.mojom.NewKeyDataSpec, 'unexportable_keys.mojom.NewKeyData', [
      mojo.internal.StructField('key_id', 0, 0, unexportable_keys.mojom.UnexportableKeyIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('subject_public_key_info', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('wrapped_key', 16, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('algorithm', 24, 0, unexportable_keys.mojom.SignatureAlgorithmSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('key_tag', 32, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('creation_time', 40, 0, mojo_base.mojom.TimeSpec.$, null, true, 0, undefined),
    ],
    [[0, 56]]);

// Interface: UnexportableKeyService
mojo.internal.Struct(
    unexportable_keys.mojom.UnexportableKeyService_GenerateSigningKey_ParamsSpec, 'unexportable_keys.mojom.UnexportableKeyService_GenerateSigningKey_Params', [
      mojo.internal.StructField('acceptable_algorithms', 0, 0, mojo.internal.Array(unexportable_keys.mojom.SignatureAlgorithmSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('priority', 8, 0, unexportable_keys.mojom.BackgroundTaskPrioritySpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    unexportable_keys.mojom.UnexportableKeyService_FromWrappedSigningKey_ParamsSpec, 'unexportable_keys.mojom.UnexportableKeyService_FromWrappedSigningKey_Params', [
      mojo.internal.StructField('wrapped_key', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('priority', 8, 0, unexportable_keys.mojom.BackgroundTaskPrioritySpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    unexportable_keys.mojom.UnexportableKeyService_Sign_ParamsSpec, 'unexportable_keys.mojom.UnexportableKeyService_Sign_Params', [
      mojo.internal.StructField('key_id', 0, 0, unexportable_keys.mojom.UnexportableKeyIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('data', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('priority', 16, 0, unexportable_keys.mojom.BackgroundTaskPrioritySpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    unexportable_keys.mojom.UnexportableKeyService_GetAllSigningKeysForGarbageCollection_ParamsSpec, 'unexportable_keys.mojom.UnexportableKeyService_GetAllSigningKeysForGarbageCollection_Params', [
      mojo.internal.StructField('priority', 0, 0, unexportable_keys.mojom.BackgroundTaskPrioritySpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    unexportable_keys.mojom.UnexportableKeyService_DeleteKey_ParamsSpec, 'unexportable_keys.mojom.UnexportableKeyService_DeleteKey_Params', [
      mojo.internal.StructField('key_id', 0, 0, unexportable_keys.mojom.UnexportableKeyIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('priority', 8, 0, unexportable_keys.mojom.BackgroundTaskPrioritySpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    unexportable_keys.mojom.UnexportableKeyService_DeleteKey_ResponseParamsSpec, 'unexportable_keys.mojom.UnexportableKeyService_DeleteKey_ResponseParams', [
      mojo.internal.StructField('error', 0, 0, unexportable_keys.mojom.ServiceErrorSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    unexportable_keys.mojom.UnexportableKeyService_DeleteAllKeys_ParamsSpec, 'unexportable_keys.mojom.UnexportableKeyService_DeleteAllKeys_Params', [
      mojo.internal.StructField('priority', 0, 0, unexportable_keys.mojom.BackgroundTaskPrioritySpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

unexportable_keys.mojom.UnexportableKeyServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

unexportable_keys.mojom.UnexportableKeyServiceRemote = class {
  static get $interfaceName() {
    return 'unexportable_keys.mojom.UnexportableKeyService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      unexportable_keys.mojom.UnexportableKeyServicePendingReceiver,
      handle);
    this.$ = new unexportable_keys.mojom.UnexportableKeyServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  generateSigningKey(acceptable_algorithms, priority) {
    return this.$.generateSigningKey(acceptable_algorithms, priority);
  }
  fromWrappedSigningKey(wrapped_key, priority) {
    return this.$.fromWrappedSigningKey(wrapped_key, priority);
  }
  sign(key_id, data, priority) {
    return this.$.sign(key_id, data, priority);
  }
  getAllSigningKeysForGarbageCollection(priority) {
    return this.$.getAllSigningKeysForGarbageCollection(priority);
  }
  deleteKey(key_id, priority) {
    return this.$.deleteKey(key_id, priority);
  }
  deleteAllKeys(priority) {
    return this.$.deleteAllKeys(priority);
  }
};

unexportable_keys.mojom.UnexportableKeyServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('UnexportableKeyService', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  generateSigningKey(acceptable_algorithms, priority) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      unexportable_keys.mojom.UnexportableKeyService_GenerateSigningKey_ParamsSpec,
      null,
      [acceptable_algorithms, priority],
      false);
  }

  fromWrappedSigningKey(wrapped_key, priority) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      unexportable_keys.mojom.UnexportableKeyService_FromWrappedSigningKey_ParamsSpec,
      null,
      [wrapped_key, priority],
      false);
  }

  sign(key_id, data, priority) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      unexportable_keys.mojom.UnexportableKeyService_Sign_ParamsSpec,
      null,
      [key_id, data, priority],
      false);
  }

  getAllSigningKeysForGarbageCollection(priority) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      unexportable_keys.mojom.UnexportableKeyService_GetAllSigningKeysForGarbageCollection_ParamsSpec,
      null,
      [priority],
      false);
  }

  deleteKey(key_id, priority) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      unexportable_keys.mojom.UnexportableKeyService_DeleteKey_ParamsSpec,
      unexportable_keys.mojom.UnexportableKeyService_DeleteKey_ResponseParamsSpec,
      [key_id, priority],
      false);
  }

  deleteAllKeys(priority) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      unexportable_keys.mojom.UnexportableKeyService_DeleteAllKeys_ParamsSpec,
      null,
      [priority],
      false);
  }

};

unexportable_keys.mojom.UnexportableKeyService.getRemote = function() {
  let remote = new unexportable_keys.mojom.UnexportableKeyServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'unexportable_keys.mojom.UnexportableKeyService',
    'context');
  return remote.$;
};

unexportable_keys.mojom.UnexportableKeyServiceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('UnexportableKeyService', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    if (this.router_.onConnectionError) {
      this.router_.onConnectionError.addListener(() => {
         console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
      });
    }
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
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(unexportable_keys.mojom.UnexportableKeyService_GenerateSigningKey_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(unexportable_keys.mojom.UnexportableKeyService_FromWrappedSigningKey_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(unexportable_keys.mojom.UnexportableKeyService_Sign_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(unexportable_keys.mojom.UnexportableKeyService_GetAllSigningKeysForGarbageCollection_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(unexportable_keys.mojom.UnexportableKeyService_DeleteKey_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(unexportable_keys.mojom.UnexportableKeyService_DeleteAllKeys_ParamsSpec);
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(unexportable_keys.mojom.UnexportableKeyService_GenerateSigningKey_ParamsSpec.$.structSpec);
          const result = this.impl.generateSigningKey(params.acceptable_algorithms, params.priority);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(unexportable_keys.mojom.UnexportableKeyService_FromWrappedSigningKey_ParamsSpec.$.structSpec);
          const result = this.impl.fromWrappedSigningKey(params.wrapped_key, params.priority);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(unexportable_keys.mojom.UnexportableKeyService_Sign_ParamsSpec.$.structSpec);
          const result = this.impl.sign(params.key_id, params.data, params.priority);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(unexportable_keys.mojom.UnexportableKeyService_GetAllSigningKeysForGarbageCollection_ParamsSpec.$.structSpec);
          const result = this.impl.getAllSigningKeysForGarbageCollection(params.priority);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(unexportable_keys.mojom.UnexportableKeyService_DeleteKey_ParamsSpec.$.structSpec);
          const result = this.impl.deleteKey(params.key_id, params.priority);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, unexportable_keys.mojom.UnexportableKeyService_DeleteKey_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(unexportable_keys.mojom.UnexportableKeyService_DeleteAllKeys_ParamsSpec.$.structSpec);
          const result = this.impl.deleteAllKeys(params.priority);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

unexportable_keys.mojom.UnexportableKeyServiceReceiver = unexportable_keys.mojom.UnexportableKeyServiceReceiver;

unexportable_keys.mojom.UnexportableKeyServicePtr = unexportable_keys.mojom.UnexportableKeyServiceRemote;
unexportable_keys.mojom.UnexportableKeyServiceRequest = unexportable_keys.mojom.UnexportableKeyServicePendingReceiver;

