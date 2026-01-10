// Auto-generated MojoJS binding
// Source: chromium_src/components/web_package/mojom/web_bundle_parser.mojom
// Module: web_package.mojom

'use strict';

// Module namespace
var web_package = web_package || {};
web_package.mojom = web_package.mojom || {};


// Enum: BundleParseErrorType
web_package.mojom.BundleParseErrorType = {
  kParserInternalError: 0,
  kFormatError: 1,
  kVersionError: 2,
};
web_package.mojom.BundleParseErrorTypeSpec = { $: mojo.internal.Enum() };

// Enum: BundleFormatVersion
web_package.mojom.BundleFormatVersion = {
  kB1: 0,
  kB2: 1,
};
web_package.mojom.BundleFormatVersionSpec = { $: mojo.internal.Enum() };

// Union: SignatureInfo
web_package.mojom.SignatureInfoSpec = { $: mojo.internal.Union(
    'web_package.mojom.SignatureInfo', {
      'unknown': {
        'ordinal': 0,
        'type': web_package.mojom.SignatureInfoUnknownSpec,
      }},
      'ed25519': {
        'ordinal': 1,
        'type': web_package.mojom.SignatureInfoEd25519Spec,
      }},
      'ecdsa_p256_sha256': {
        'ordinal': 2,
        'type': web_package.mojom.SignatureInfoEcdsaP256SHA256Spec,
      }},
    })
};

// Struct: BundleIntegrityBlockParseError
web_package.mojom.BundleIntegrityBlockParseErrorSpec = {
  $: {
    structSpec: {
      name: 'web_package.mojom.BundleIntegrityBlockParseError',
      packedSize: 24,
      fields: [
        { name: 'type', packedOffset: 0, packedBitOffset: 0, type: web_package.mojom.BundleParseErrorTypeSpec, nullable: false, minVersion: 0 },
        { name: 'message', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: BundleMetadataParseError
web_package.mojom.BundleMetadataParseErrorSpec = {
  $: {
    structSpec: {
      name: 'web_package.mojom.BundleMetadataParseError',
      packedSize: 24,
      fields: [
        { name: 'type', packedOffset: 0, packedBitOffset: 0, type: web_package.mojom.BundleParseErrorTypeSpec, nullable: false, minVersion: 0 },
        { name: 'message', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: BundleResponseParseError
web_package.mojom.BundleResponseParseErrorSpec = {
  $: {
    structSpec: {
      name: 'web_package.mojom.BundleResponseParseError',
      packedSize: 24,
      fields: [
        { name: 'type', packedOffset: 0, packedBitOffset: 0, type: web_package.mojom.BundleParseErrorTypeSpec, nullable: false, minVersion: 0 },
        { name: 'message', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: BundleIntegrityBlockAttributes
web_package.mojom.BundleIntegrityBlockAttributesSpec = {
  $: {
    structSpec: {
      name: 'web_package.mojom.BundleIntegrityBlockAttributes',
      packedSize: 24,
      fields: [
        { name: 'web_bundle_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'cbor', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: BundleIntegrityBlock
web_package.mojom.BundleIntegrityBlockSpec = {
  $: {
    structSpec: {
      name: 'web_package.mojom.BundleIntegrityBlock',
      packedSize: 32,
      fields: [
        { name: 'size', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
        { name: 'signature_stack', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(web_package.mojom.BundleIntegrityBlockSignatureStackEntrySpec, false), nullable: false, minVersion: 0 },
        { name: 'attributes', packedOffset: 16, packedBitOffset: 0, type: web_package.mojom.BundleIntegrityBlockAttributesSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: Ed25519PublicKey
web_package.mojom.Ed25519PublicKeySpec = {
  $: {
    structSpec: {
      name: 'web_package.mojom.Ed25519PublicKey',
      packedSize: 16,
      fields: [
        { name: 'bytes', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Pointer, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: Ed25519Signature
web_package.mojom.Ed25519SignatureSpec = {
  $: {
    structSpec: {
      name: 'web_package.mojom.Ed25519Signature',
      packedSize: 16,
      fields: [
        { name: 'bytes', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Pointer, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: SignatureInfoEd25519
web_package.mojom.SignatureInfoEd25519Spec = {
  $: {
    structSpec: {
      name: 'web_package.mojom.SignatureInfoEd25519',
      packedSize: 24,
      fields: [
        { name: 'public_key', packedOffset: 0, packedBitOffset: 0, type: web_package.mojom.Ed25519PublicKeySpec, nullable: false, minVersion: 0 },
        { name: 'signature', packedOffset: 8, packedBitOffset: 0, type: web_package.mojom.Ed25519SignatureSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: EcdsaP256PublicKey
web_package.mojom.EcdsaP256PublicKeySpec = {
  $: {
    structSpec: {
      name: 'web_package.mojom.EcdsaP256PublicKey',
      packedSize: 16,
      fields: [
        { name: 'bytes', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Pointer, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: EcdsaP256SHA256Signature
web_package.mojom.EcdsaP256SHA256SignatureSpec = {
  $: {
    structSpec: {
      name: 'web_package.mojom.EcdsaP256SHA256Signature',
      packedSize: 16,
      fields: [
        { name: 'bytes', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: SignatureInfoEcdsaP256SHA256
web_package.mojom.SignatureInfoEcdsaP256SHA256Spec = {
  $: {
    structSpec: {
      name: 'web_package.mojom.SignatureInfoEcdsaP256SHA256',
      packedSize: 24,
      fields: [
        { name: 'public_key', packedOffset: 0, packedBitOffset: 0, type: web_package.mojom.EcdsaP256PublicKeySpec, nullable: false, minVersion: 0 },
        { name: 'signature', packedOffset: 8, packedBitOffset: 0, type: web_package.mojom.EcdsaP256SHA256SignatureSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: SignatureInfoUnknown
web_package.mojom.SignatureInfoUnknownSpec = {
  $: {
    structSpec: {
      name: 'web_package.mojom.SignatureInfoUnknown',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Struct: BundleIntegrityBlockSignatureStackEntry
web_package.mojom.BundleIntegrityBlockSignatureStackEntrySpec = {
  $: {
    structSpec: {
      name: 'web_package.mojom.BundleIntegrityBlockSignatureStackEntry',
      packedSize: 32,
      fields: [
        { name: 'attributes_cbor', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
        { name: 'signature_info', packedOffset: 8, packedBitOffset: 0, type: web_package.mojom.SignatureInfoSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: BundleMetadata
web_package.mojom.BundleMetadataSpec = {
  $: {
    structSpec: {
      name: 'web_package.mojom.BundleMetadata',
      packedSize: 32,
      fields: [
        { name: 'version', packedOffset: 0, packedBitOffset: 0, type: web_package.mojom.BundleFormatVersionSpec, nullable: false, minVersion: 0 },
        { name: 'primary_url', packedOffset: 8, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: true, minVersion: 0 },
        { name: 'requests', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Map(url.mojom.UrlSpec, web_package.mojom.BundleResponseLocationSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: BundleResponseLocation
web_package.mojom.BundleResponseLocationSpec = {
  $: {
    structSpec: {
      name: 'web_package.mojom.BundleResponseLocation',
      packedSize: 24,
      fields: [
        { name: 'offset', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
        { name: 'length', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: BundleResponse
web_package.mojom.BundleResponseSpec = {
  $: {
    structSpec: {
      name: 'web_package.mojom.BundleResponse',
      packedSize: 40,
      fields: [
        { name: 'response_code', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'response_headers', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Map(mojo.internal.String, mojo.internal.String, false), nullable: false, minVersion: 0 },
        { name: 'payload_offset', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
        { name: 'payload_length', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Interface: WebBundleParserFactory
web_package.mojom.WebBundleParserFactory = {};

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
      [receiver, base_url, data_source]);
  }

  bindFileDataSource(data_source, file) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      web_package.mojom.WebBundleParserFactory_BindFileDataSource_ParamsSpec,
      null,
      [data_source, file]);
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

// ParamsSpec for GetParserForDataSource
web_package.mojom.WebBundleParserFactory_GetParserForDataSource_ParamsSpec = {
  $: {
    structSpec: {
      name: 'web_package.mojom.WebBundleParserFactory.GetParserForDataSource_Params',
      packedSize: 24,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false, minVersion: 0 },
        { name: 'base_url', packedOffset: 8, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: true, minVersion: 0 },
        { name: 'data_source', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for BindFileDataSource
web_package.mojom.WebBundleParserFactory_BindFileDataSource_ParamsSpec = {
  $: {
    structSpec: {
      name: 'web_package.mojom.WebBundleParserFactory.BindFileDataSource_Params',
      packedSize: 24,
      fields: [
        { name: 'data_source', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false, minVersion: 0 },
        { name: 'file', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.ReadOnlyFileSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
web_package.mojom.WebBundleParserFactoryPtr = web_package.mojom.WebBundleParserFactoryRemote;
web_package.mojom.WebBundleParserFactoryRequest = web_package.mojom.WebBundleParserFactoryPendingReceiver;


// Interface: WebBundleParser
web_package.mojom.WebBundleParser = {};

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
      []);
  }

  parseMetadata(offset) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      web_package.mojom.WebBundleParser_ParseMetadata_ParamsSpec,
      web_package.mojom.WebBundleParser_ParseMetadata_ResponseParamsSpec,
      [offset]);
  }

  parseResponse(response_offset, response_length) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      web_package.mojom.WebBundleParser_ParseResponse_ParamsSpec,
      web_package.mojom.WebBundleParser_ParseResponse_ResponseParamsSpec,
      [response_offset, response_length]);
  }

  close() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      web_package.mojom.WebBundleParser_Close_ParamsSpec,
      null,
      []);
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

// ParamsSpec for ParseIntegrityBlock
web_package.mojom.WebBundleParser_ParseIntegrityBlock_ParamsSpec = {
  $: {
    structSpec: {
      name: 'web_package.mojom.WebBundleParser.ParseIntegrityBlock_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

web_package.mojom.WebBundleParser_ParseIntegrityBlock_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'Result', packedOffset: 0, packedBitOffset: 0, type: web_package.mojom.BundleIntegrityBlockSpec, nullable: true, minVersion: 0 },
        { name: 'error', packedOffset: 8, packedBitOffset: 0, type: web_package.mojom.BundleIntegrityBlockParseErrorSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for ParseMetadata
web_package.mojom.WebBundleParser_ParseMetadata_ParamsSpec = {
  $: {
    structSpec: {
      name: 'web_package.mojom.WebBundleParser.ParseMetadata_Params',
      packedSize: 24,
      fields: [
        { name: 'offset_$flag', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'offset_$value', originalFieldName: 'offset' } },
        { name: 'offset_$value', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'offset_$flag', originalFieldName: 'offset' } },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

web_package.mojom.WebBundleParser_ParseMetadata_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'Result', packedOffset: 0, packedBitOffset: 0, type: web_package.mojom.BundleMetadataSpec, nullable: true, minVersion: 0 },
        { name: 'error', packedOffset: 8, packedBitOffset: 0, type: web_package.mojom.BundleMetadataParseErrorSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for ParseResponse
web_package.mojom.WebBundleParser_ParseResponse_ParamsSpec = {
  $: {
    structSpec: {
      name: 'web_package.mojom.WebBundleParser.ParseResponse_Params',
      packedSize: 24,
      fields: [
        { name: 'response_offset', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
        { name: 'response_length', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

web_package.mojom.WebBundleParser_ParseResponse_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'Result', packedOffset: 0, packedBitOffset: 0, type: web_package.mojom.BundleResponseSpec, nullable: true, minVersion: 0 },
        { name: 'error', packedOffset: 8, packedBitOffset: 0, type: web_package.mojom.BundleResponseParseErrorSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for Close
web_package.mojom.WebBundleParser_Close_ParamsSpec = {
  $: {
    structSpec: {
      name: 'web_package.mojom.WebBundleParser.Close_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Legacy compatibility
web_package.mojom.WebBundleParserPtr = web_package.mojom.WebBundleParserRemote;
web_package.mojom.WebBundleParserRequest = web_package.mojom.WebBundleParserPendingReceiver;


// Interface: BundleDataSource
web_package.mojom.BundleDataSource = {};

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
      [offset, length]);
  }

  length() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      web_package.mojom.BundleDataSource_Length_ParamsSpec,
      web_package.mojom.BundleDataSource_Length_ResponseParamsSpec,
      []);
  }

  isRandomAccessContext() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      web_package.mojom.BundleDataSource_IsRandomAccessContext_ParamsSpec,
      web_package.mojom.BundleDataSource_IsRandomAccessContext_ResponseParamsSpec,
      []);
  }

  close() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      web_package.mojom.BundleDataSource_Close_ParamsSpec,
      null,
      []);
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

// ParamsSpec for Read
web_package.mojom.BundleDataSource_Read_ParamsSpec = {
  $: {
    structSpec: {
      name: 'web_package.mojom.BundleDataSource.Read_Params',
      packedSize: 24,
      fields: [
        { name: 'offset', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
        { name: 'length', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

web_package.mojom.BundleDataSource_Read_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'buffer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for Length
web_package.mojom.BundleDataSource_Length_ParamsSpec = {
  $: {
    structSpec: {
      name: 'web_package.mojom.BundleDataSource.Length_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

web_package.mojom.BundleDataSource_Length_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'length', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for IsRandomAccessContext
web_package.mojom.BundleDataSource_IsRandomAccessContext_ParamsSpec = {
  $: {
    structSpec: {
      name: 'web_package.mojom.BundleDataSource.IsRandomAccessContext_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

web_package.mojom.BundleDataSource_IsRandomAccessContext_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'is_random_access', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for Close
web_package.mojom.BundleDataSource_Close_ParamsSpec = {
  $: {
    structSpec: {
      name: 'web_package.mojom.BundleDataSource.Close_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Legacy compatibility
web_package.mojom.BundleDataSourcePtr = web_package.mojom.BundleDataSourceRemote;
web_package.mojom.BundleDataSourceRequest = web_package.mojom.BundleDataSourcePendingReceiver;

