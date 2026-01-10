// Auto-generated MojoJS binding
// Source: chromium_src/components/web_package/mojom/web_bundle_parser.mojom
// Module: web_package.mojom

'use strict';

// Module namespace
var web_package = web_package || {};
web_package.mojom = web_package.mojom || {};
var mojo_base = mojo_base || {};
var url = url || {};

web_package.mojom.BundleParseErrorTypeSpec = { $: mojo.internal.Enum() };
web_package.mojom.BundleFormatVersionSpec = { $: mojo.internal.Enum() };
web_package.mojom.SignatureInfoSpec = { $: {} };
web_package.mojom.BundleIntegrityBlockParseErrorSpec = { $: {} };
web_package.mojom.BundleMetadataParseErrorSpec = { $: {} };
web_package.mojom.BundleResponseParseErrorSpec = { $: {} };
web_package.mojom.BundleIntegrityBlockAttributesSpec = { $: {} };
web_package.mojom.BundleIntegrityBlockSpec = { $: {} };
web_package.mojom.Ed25519PublicKeySpec = { $: {} };
web_package.mojom.Ed25519SignatureSpec = { $: {} };
web_package.mojom.SignatureInfoEd25519Spec = { $: {} };
web_package.mojom.EcdsaP256PublicKeySpec = { $: {} };
web_package.mojom.EcdsaP256SHA256SignatureSpec = { $: {} };
web_package.mojom.SignatureInfoEcdsaP256SHA256Spec = { $: {} };
web_package.mojom.SignatureInfoUnknownSpec = { $: {} };
web_package.mojom.BundleIntegrityBlockSignatureStackEntrySpec = { $: {} };
web_package.mojom.BundleMetadataSpec = { $: {} };
web_package.mojom.BundleResponseLocationSpec = { $: {} };
web_package.mojom.BundleResponseSpec = { $: {} };
web_package.mojom.WebBundleParserFactory = {};
web_package.mojom.WebBundleParserFactory.$interfaceName = 'web_package.mojom.WebBundleParserFactory';
web_package.mojom.WebBundleParserFactory_GetParserForDataSource_ParamsSpec = { $: {} };
web_package.mojom.WebBundleParserFactory_BindFileDataSource_ParamsSpec = { $: {} };
web_package.mojom.WebBundleParser = {};
web_package.mojom.WebBundleParser.$interfaceName = 'web_package.mojom.WebBundleParser';
web_package.mojom.WebBundleParser_ParseIntegrityBlock_ParamsSpec = { $: {} };
web_package.mojom.WebBundleParser_ParseIntegrityBlock_ResponseParamsSpec = { $: {} };
web_package.mojom.WebBundleParser_ParseMetadata_ParamsSpec = { $: {} };
web_package.mojom.WebBundleParser_ParseMetadata_ResponseParamsSpec = { $: {} };
web_package.mojom.WebBundleParser_ParseResponse_ParamsSpec = { $: {} };
web_package.mojom.WebBundleParser_ParseResponse_ResponseParamsSpec = { $: {} };
web_package.mojom.WebBundleParser_Close_ParamsSpec = { $: {} };
web_package.mojom.WebBundleParser_Close_ResponseParamsSpec = { $: {} };
web_package.mojom.BundleDataSource = {};
web_package.mojom.BundleDataSource.$interfaceName = 'web_package.mojom.BundleDataSource';
web_package.mojom.BundleDataSource_Read_ParamsSpec = { $: {} };
web_package.mojom.BundleDataSource_Read_ResponseParamsSpec = { $: {} };
web_package.mojom.BundleDataSource_Length_ParamsSpec = { $: {} };
web_package.mojom.BundleDataSource_Length_ResponseParamsSpec = { $: {} };
web_package.mojom.BundleDataSource_IsRandomAccessContext_ParamsSpec = { $: {} };
web_package.mojom.BundleDataSource_IsRandomAccessContext_ResponseParamsSpec = { $: {} };
web_package.mojom.BundleDataSource_Close_ParamsSpec = { $: {} };
web_package.mojom.BundleDataSource_Close_ResponseParamsSpec = { $: {} };

// Enum: BundleParseErrorType
web_package.mojom.BundleParseErrorType = {
  kParserInternalError: 0,
  kFormatError: 1,
  kVersionError: 2,
};

// Enum: BundleFormatVersion
web_package.mojom.BundleFormatVersion = {
  kB1: 0,
  kB2: 1,
};

// Union: SignatureInfo
mojo.internal.Union(
    web_package.mojom.SignatureInfoSpec, 'web_package.mojom.SignatureInfo', {
      'unknown': {
        'ordinal': 0,
        'type': web_package.mojom.SignatureInfoUnknownSpec.$,
        'nullable': false,
      },
      'ed25519': {
        'ordinal': 1,
        'type': web_package.mojom.SignatureInfoEd25519Spec.$,
        'nullable': false,
      },
      'ecdsa_p256_sha256': {
        'ordinal': 2,
        'type': web_package.mojom.SignatureInfoEcdsaP256SHA256Spec.$,
        'nullable': false,
      },
    });

// Struct: BundleIntegrityBlockParseError
mojo.internal.Struct(
    web_package.mojom.BundleIntegrityBlockParseErrorSpec, 'web_package.mojom.BundleIntegrityBlockParseError', [
      mojo.internal.StructField('type', 0, 0, web_package.mojom.BundleParseErrorTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('message', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: BundleMetadataParseError
mojo.internal.Struct(
    web_package.mojom.BundleMetadataParseErrorSpec, 'web_package.mojom.BundleMetadataParseError', [
      mojo.internal.StructField('type', 0, 0, web_package.mojom.BundleParseErrorTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('message', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: BundleResponseParseError
mojo.internal.Struct(
    web_package.mojom.BundleResponseParseErrorSpec, 'web_package.mojom.BundleResponseParseError', [
      mojo.internal.StructField('type', 0, 0, web_package.mojom.BundleParseErrorTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('message', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: BundleIntegrityBlockAttributes
mojo.internal.Struct(
    web_package.mojom.BundleIntegrityBlockAttributesSpec, 'web_package.mojom.BundleIntegrityBlockAttributes', [
      mojo.internal.StructField('web_bundle_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('cbor', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: BundleIntegrityBlock
mojo.internal.Struct(
    web_package.mojom.BundleIntegrityBlockSpec, 'web_package.mojom.BundleIntegrityBlock', [
      mojo.internal.StructField('size', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('signature_stack', 8, 0, mojo.internal.Array(web_package.mojom.BundleIntegrityBlockSignatureStackEntrySpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('attributes', 16, 0, web_package.mojom.BundleIntegrityBlockAttributesSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: Ed25519PublicKey
mojo.internal.Struct(
    web_package.mojom.Ed25519PublicKeySpec, 'web_package.mojom.Ed25519PublicKey', [
      mojo.internal.StructField('bytes', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: Ed25519Signature
mojo.internal.Struct(
    web_package.mojom.Ed25519SignatureSpec, 'web_package.mojom.Ed25519Signature', [
      mojo.internal.StructField('bytes', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: SignatureInfoEd25519
mojo.internal.Struct(
    web_package.mojom.SignatureInfoEd25519Spec, 'web_package.mojom.SignatureInfoEd25519', [
      mojo.internal.StructField('public_key', 0, 0, web_package.mojom.Ed25519PublicKeySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('signature', 8, 0, web_package.mojom.Ed25519SignatureSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: EcdsaP256PublicKey
mojo.internal.Struct(
    web_package.mojom.EcdsaP256PublicKeySpec, 'web_package.mojom.EcdsaP256PublicKey', [
      mojo.internal.StructField('bytes', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: EcdsaP256SHA256Signature
mojo.internal.Struct(
    web_package.mojom.EcdsaP256SHA256SignatureSpec, 'web_package.mojom.EcdsaP256SHA256Signature', [
      mojo.internal.StructField('bytes', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: SignatureInfoEcdsaP256SHA256
mojo.internal.Struct(
    web_package.mojom.SignatureInfoEcdsaP256SHA256Spec, 'web_package.mojom.SignatureInfoEcdsaP256SHA256', [
      mojo.internal.StructField('public_key', 0, 0, web_package.mojom.EcdsaP256PublicKeySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('signature', 8, 0, web_package.mojom.EcdsaP256SHA256SignatureSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: SignatureInfoUnknown
mojo.internal.Struct(
    web_package.mojom.SignatureInfoUnknownSpec, 'web_package.mojom.SignatureInfoUnknown', [
    ],
    [[0, 8]]);

// Struct: BundleIntegrityBlockSignatureStackEntry
mojo.internal.Struct(
    web_package.mojom.BundleIntegrityBlockSignatureStackEntrySpec, 'web_package.mojom.BundleIntegrityBlockSignatureStackEntry', [
      mojo.internal.StructField('attributes_cbor', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('signature_info', 8, 0, web_package.mojom.SignatureInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: BundleMetadata
mojo.internal.Struct(
    web_package.mojom.BundleMetadataSpec, 'web_package.mojom.BundleMetadata', [
      mojo.internal.StructField('version', 0, 0, web_package.mojom.BundleFormatVersionSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('primary_url', 8, 0, url.mojom.UrlSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('requests', 16, 0, mojo.internal.Map(url.mojom.UrlSpec.$, web_package.mojom.BundleResponseLocationSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: BundleResponseLocation
mojo.internal.Struct(
    web_package.mojom.BundleResponseLocationSpec, 'web_package.mojom.BundleResponseLocation', [
      mojo.internal.StructField('offset', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('length', 8, 0, mojo.internal.Uint64, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: BundleResponse
mojo.internal.Struct(
    web_package.mojom.BundleResponseSpec, 'web_package.mojom.BundleResponse', [
      mojo.internal.StructField('response_headers', 0, 0, mojo.internal.Map(mojo.internal.String, mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('payload_offset', 8, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('payload_length', 16, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('response_code', 24, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 40]]);

// Interface: WebBundleParserFactory
mojo.internal.Struct(
    web_package.mojom.WebBundleParserFactory_GetParserForDataSource_ParamsSpec, 'web_package.mojom.WebBundleParserFactory_GetParserForDataSource_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(web_package.mojom.WebBundleParserSpec), null, false, 0, undefined),
      mojo.internal.StructField('base_url', 8, 0, url.mojom.UrlSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('data_source', 16, 0, mojo.internal.InterfaceProxy(web_package.mojom.BundleDataSourceSpec), null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    web_package.mojom.WebBundleParserFactory_BindFileDataSource_ParamsSpec, 'web_package.mojom.WebBundleParserFactory_BindFileDataSource_Params', [
      mojo.internal.StructField('data_source', 0, 0, mojo.internal.InterfaceRequest(web_package.mojom.BundleDataSourceSpec), null, false, 0, undefined),
      mojo.internal.StructField('file', 8, 0, mojo_base.mojom.ReadOnlyFileSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

web_package.mojom.WebBundleParserFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

web_package.mojom.WebBundleParserFactoryRemote = class {
  static get $interfaceName() {
    return 'web_package.mojom.WebBundleParserFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      web_package.mojom.WebBundleParserFactoryPendingReceiver,
      handle);
    this.$ = new web_package.mojom.WebBundleParserFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

web_package.mojom.WebBundleParserFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getParserForDataSource(receiver, base_url, data_source) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      web_package.mojom.WebBundleParserFactory_GetParserForDataSource_ParamsSpec,
      null,
      [receiver, base_url, data_source],
      false);
  }

  bindFileDataSource(data_source, file) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      web_package.mojom.WebBundleParserFactory_BindFileDataSource_ParamsSpec,
      null,
      [data_source, file],
      false);
  }

};

web_package.mojom.WebBundleParserFactory.getRemote = function() {
  let remote = new web_package.mojom.WebBundleParserFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'web_package.mojom.WebBundleParserFactory',
    'context');
  return remote.$;
};

web_package.mojom.WebBundleParserFactoryReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
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
        
        // Try Method 0: GetParserForDataSource
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(web_package.mojom.WebBundleParserFactory_GetParserForDataSource_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetParserForDataSource (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: BindFileDataSource
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(web_package.mojom.WebBundleParserFactory_BindFileDataSource_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> BindFileDataSource (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
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
          const params = decoder.decodeStruct(web_package.mojom.WebBundleParserFactory_GetParserForDataSource_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getParserForDataSource');
          const result = this.impl.getParserForDataSource(params.receiver, params.base_url, params.data_source);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(web_package.mojom.WebBundleParserFactory_BindFileDataSource_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.bindFileDataSource');
          const result = this.impl.bindFileDataSource(params.data_source, params.file);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

web_package.mojom.WebBundleParserFactoryReceiver = web_package.mojom.WebBundleParserFactoryReceiver;

web_package.mojom.WebBundleParserFactoryPtr = web_package.mojom.WebBundleParserFactoryRemote;
web_package.mojom.WebBundleParserFactoryRequest = web_package.mojom.WebBundleParserFactoryPendingReceiver;


// Interface: WebBundleParser
mojo.internal.Struct(
    web_package.mojom.WebBundleParser_ParseIntegrityBlock_ParamsSpec, 'web_package.mojom.WebBundleParser_ParseIntegrityBlock_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    web_package.mojom.WebBundleParser_ParseIntegrityBlock_ResponseParamsSpec, 'web_package.mojom.WebBundleParser_ParseIntegrityBlock_ResponseParams', [
      mojo.internal.StructField('Result', 0, 0, web_package.mojom.BundleIntegrityBlockSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('error', 8, 0, web_package.mojom.BundleIntegrityBlockParseErrorSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    web_package.mojom.WebBundleParser_ParseMetadata_ParamsSpec, 'web_package.mojom.WebBundleParser_ParseMetadata_Params', [
      mojo.internal.StructField('offset_$value', 0, 0, mojo.internal.Uint64, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'offset_$flag', originalFieldName: 'offset' }),
      mojo.internal.StructField('offset_$flag', 8, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'offset_$value', originalFieldName: 'offset' }),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    web_package.mojom.WebBundleParser_ParseMetadata_ResponseParamsSpec, 'web_package.mojom.WebBundleParser_ParseMetadata_ResponseParams', [
      mojo.internal.StructField('Result', 0, 0, web_package.mojom.BundleMetadataSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('error', 8, 0, web_package.mojom.BundleMetadataParseErrorSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    web_package.mojom.WebBundleParser_ParseResponse_ParamsSpec, 'web_package.mojom.WebBundleParser_ParseResponse_Params', [
      mojo.internal.StructField('response_offset', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('response_length', 8, 0, mojo.internal.Uint64, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    web_package.mojom.WebBundleParser_ParseResponse_ResponseParamsSpec, 'web_package.mojom.WebBundleParser_ParseResponse_ResponseParams', [
      mojo.internal.StructField('Result', 0, 0, web_package.mojom.BundleResponseSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('error', 8, 0, web_package.mojom.BundleResponseParseErrorSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    web_package.mojom.WebBundleParser_Close_ParamsSpec, 'web_package.mojom.WebBundleParser_Close_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    web_package.mojom.WebBundleParser_Close_ResponseParamsSpec, 'web_package.mojom.WebBundleParser_Close_ResponseParams', [
    ],
    [[0, 8]]);

web_package.mojom.WebBundleParserPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

web_package.mojom.WebBundleParserRemote = class {
  static get $interfaceName() {
    return 'web_package.mojom.WebBundleParser';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      web_package.mojom.WebBundleParserPendingReceiver,
      handle);
    this.$ = new web_package.mojom.WebBundleParserRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

web_package.mojom.WebBundleParserRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  parseIntegrityBlock() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      web_package.mojom.WebBundleParser_ParseIntegrityBlock_ParamsSpec,
      web_package.mojom.WebBundleParser_ParseIntegrityBlock_ResponseParamsSpec,
      [],
      false);
  }

  parseMetadata(offset) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      web_package.mojom.WebBundleParser_ParseMetadata_ParamsSpec,
      web_package.mojom.WebBundleParser_ParseMetadata_ResponseParamsSpec,
      [offset],
      false);
  }

  parseResponse(response_offset, response_length) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      web_package.mojom.WebBundleParser_ParseResponse_ParamsSpec,
      web_package.mojom.WebBundleParser_ParseResponse_ResponseParamsSpec,
      [response_offset, response_length],
      false);
  }

  close() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      web_package.mojom.WebBundleParser_Close_ParamsSpec,
      web_package.mojom.WebBundleParser_Close_ResponseParamsSpec,
      [],
      false);
  }

};

web_package.mojom.WebBundleParser.getRemote = function() {
  let remote = new web_package.mojom.WebBundleParserRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'web_package.mojom.WebBundleParser',
    'context');
  return remote.$;
};

web_package.mojom.WebBundleParserReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
    this.ordinalMap.set(3, 3); // Default ordinal 3 -> Index 3
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
        
        // Try Method 0: ParseIntegrityBlock
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(web_package.mojom.WebBundleParser_ParseIntegrityBlock_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ParseIntegrityBlock (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: ParseMetadata
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(web_package.mojom.WebBundleParser_ParseMetadata_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ParseMetadata (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: ParseResponse
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(web_package.mojom.WebBundleParser_ParseResponse_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ParseResponse (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: Close
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(web_package.mojom.WebBundleParser_Close_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Close (3)');
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
          const params = decoder.decodeStruct(web_package.mojom.WebBundleParser_ParseIntegrityBlock_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.parseIntegrityBlock');
          const result = this.impl.parseIntegrityBlock();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, web_package.mojom.WebBundleParser_ParseIntegrityBlock_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(web_package.mojom.WebBundleParser_ParseMetadata_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.parseMetadata');
          const result = this.impl.parseMetadata(params.offset);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, web_package.mojom.WebBundleParser_ParseMetadata_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(web_package.mojom.WebBundleParser_ParseResponse_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.parseResponse');
          const result = this.impl.parseResponse(params.response_offset, params.response_length);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, web_package.mojom.WebBundleParser_ParseResponse_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(web_package.mojom.WebBundleParser_Close_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.close');
          const result = this.impl.close();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, web_package.mojom.WebBundleParser_Close_ResponseParamsSpec);
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

web_package.mojom.WebBundleParserReceiver = web_package.mojom.WebBundleParserReceiver;

web_package.mojom.WebBundleParserPtr = web_package.mojom.WebBundleParserRemote;
web_package.mojom.WebBundleParserRequest = web_package.mojom.WebBundleParserPendingReceiver;


// Interface: BundleDataSource
mojo.internal.Struct(
    web_package.mojom.BundleDataSource_Read_ParamsSpec, 'web_package.mojom.BundleDataSource_Read_Params', [
      mojo.internal.StructField('offset', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('length', 8, 0, mojo.internal.Uint64, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    web_package.mojom.BundleDataSource_Read_ResponseParamsSpec, 'web_package.mojom.BundleDataSource_Read_ResponseParams', [
      mojo.internal.StructField('buffer', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    web_package.mojom.BundleDataSource_Length_ParamsSpec, 'web_package.mojom.BundleDataSource_Length_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    web_package.mojom.BundleDataSource_Length_ResponseParamsSpec, 'web_package.mojom.BundleDataSource_Length_ResponseParams', [
      mojo.internal.StructField('length', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    web_package.mojom.BundleDataSource_IsRandomAccessContext_ParamsSpec, 'web_package.mojom.BundleDataSource_IsRandomAccessContext_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    web_package.mojom.BundleDataSource_IsRandomAccessContext_ResponseParamsSpec, 'web_package.mojom.BundleDataSource_IsRandomAccessContext_ResponseParams', [
      mojo.internal.StructField('is_random_access', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    web_package.mojom.BundleDataSource_Close_ParamsSpec, 'web_package.mojom.BundleDataSource_Close_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    web_package.mojom.BundleDataSource_Close_ResponseParamsSpec, 'web_package.mojom.BundleDataSource_Close_ResponseParams', [
    ],
    [[0, 8]]);

web_package.mojom.BundleDataSourcePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

web_package.mojom.BundleDataSourceRemote = class {
  static get $interfaceName() {
    return 'web_package.mojom.BundleDataSource';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      web_package.mojom.BundleDataSourcePendingReceiver,
      handle);
    this.$ = new web_package.mojom.BundleDataSourceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

web_package.mojom.BundleDataSourceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  read(offset, length) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      web_package.mojom.BundleDataSource_Read_ParamsSpec,
      web_package.mojom.BundleDataSource_Read_ResponseParamsSpec,
      [offset, length],
      false);
  }

  length() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      web_package.mojom.BundleDataSource_Length_ParamsSpec,
      web_package.mojom.BundleDataSource_Length_ResponseParamsSpec,
      [],
      false);
  }

  isRandomAccessContext() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      web_package.mojom.BundleDataSource_IsRandomAccessContext_ParamsSpec,
      web_package.mojom.BundleDataSource_IsRandomAccessContext_ResponseParamsSpec,
      [],
      false);
  }

  close() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      web_package.mojom.BundleDataSource_Close_ParamsSpec,
      web_package.mojom.BundleDataSource_Close_ResponseParamsSpec,
      [],
      false);
  }

};

web_package.mojom.BundleDataSource.getRemote = function() {
  let remote = new web_package.mojom.BundleDataSourceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'web_package.mojom.BundleDataSource',
    'context');
  return remote.$;
};

web_package.mojom.BundleDataSourceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
    this.ordinalMap.set(3, 3); // Default ordinal 3 -> Index 3
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
        
        // Try Method 0: Read
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(web_package.mojom.BundleDataSource_Read_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Read (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: Length
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(web_package.mojom.BundleDataSource_Length_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Length (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: IsRandomAccessContext
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(web_package.mojom.BundleDataSource_IsRandomAccessContext_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> IsRandomAccessContext (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: Close
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(web_package.mojom.BundleDataSource_Close_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Close (3)');
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
          const params = decoder.decodeStruct(web_package.mojom.BundleDataSource_Read_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.read');
          const result = this.impl.read(params.offset, params.length);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, web_package.mojom.BundleDataSource_Read_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(web_package.mojom.BundleDataSource_Length_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.length');
          const result = this.impl.length();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, web_package.mojom.BundleDataSource_Length_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(web_package.mojom.BundleDataSource_IsRandomAccessContext_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.isRandomAccessContext');
          const result = this.impl.isRandomAccessContext();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, web_package.mojom.BundleDataSource_IsRandomAccessContext_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(web_package.mojom.BundleDataSource_Close_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.close');
          const result = this.impl.close();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, web_package.mojom.BundleDataSource_Close_ResponseParamsSpec);
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

web_package.mojom.BundleDataSourceReceiver = web_package.mojom.BundleDataSourceReceiver;

web_package.mojom.BundleDataSourcePtr = web_package.mojom.BundleDataSourceRemote;
web_package.mojom.BundleDataSourceRequest = web_package.mojom.BundleDataSourcePendingReceiver;

