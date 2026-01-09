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

// Enum: BundleFormatVersion
web_package.mojom.BundleFormatVersion = {
  kB1: 0,
  kB2: 1,
};

// Struct: BundleIntegrityBlockParseError
web_package.mojom.BundleIntegrityBlockParseErrorSpec = {
  $: {
    structSpec: {
      name: 'web_package.mojom.BundleIntegrityBlockParseError',
      packedSize: 24,
      fields: [
        { name: 'type', packedOffset: 0, packedBitOffset: 0, type: web_package.mojom.BundleParseErrorTypeSpec, nullable: false },
        { name: 'message', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
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
        { name: 'type', packedOffset: 0, packedBitOffset: 0, type: web_package.mojom.BundleParseErrorTypeSpec, nullable: false },
        { name: 'message', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
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
        { name: 'type', packedOffset: 0, packedBitOffset: 0, type: web_package.mojom.BundleParseErrorTypeSpec, nullable: false },
        { name: 'message', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
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
        { name: 'web_bundle_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'cbor', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
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
        { name: 'size', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false },
        { name: 'signature_stack', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'attributes', packedOffset: 16, packedBitOffset: 0, type: web_package.mojom.BundleIntegrityBlockAttributesSpec, nullable: false },
      ],
      versions: [{version: 0}]
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
        { name: 'bytes', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
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
        { name: 'bytes', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
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
        { name: 'public_key', packedOffset: 0, packedBitOffset: 0, type: web_package.mojom.Ed25519PublicKeySpec, nullable: false },
        { name: 'signature', packedOffset: 8, packedBitOffset: 0, type: web_package.mojom.Ed25519SignatureSpec, nullable: false },
      ],
      versions: [{version: 0}]
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
        { name: 'bytes', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
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
        { name: 'bytes', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
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
        { name: 'public_key', packedOffset: 0, packedBitOffset: 0, type: web_package.mojom.EcdsaP256PublicKeySpec, nullable: false },
        { name: 'signature', packedOffset: 8, packedBitOffset: 0, type: web_package.mojom.EcdsaP256SHA256SignatureSpec, nullable: false },
      ],
      versions: [{version: 0}]
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
      versions: [{version: 0}]
    }
  }
};

// Struct: BundleIntegrityBlockSignatureStackEntry
web_package.mojom.BundleIntegrityBlockSignatureStackEntrySpec = {
  $: {
    structSpec: {
      name: 'web_package.mojom.BundleIntegrityBlockSignatureStackEntry',
      packedSize: 24,
      fields: [
        { name: 'attributes_cbor', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'signature_info', packedOffset: 8, packedBitOffset: 0, type: web_package.mojom.SignatureInfoSpec, nullable: false },
      ],
      versions: [{version: 0}]
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
        { name: 'version', packedOffset: 0, packedBitOffset: 0, type: web_package.mojom.BundleFormatVersionSpec, nullable: false },
        { name: 'primary_url', packedOffset: 8, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: true },
        { name: 'requests', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Map, nullable: false },
      ],
      versions: [{version: 0}]
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
        { name: 'offset', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false },
        { name: 'length', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false },
      ],
      versions: [{version: 0}]
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
        { name: 'response_headers', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Map, nullable: false },
        { name: 'payload_offset', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false },
        { name: 'payload_length', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false },
        { name: 'response_code', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
      ],
      versions: [{version: 0}]
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
        { name: 'base_url', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: true },
        { name: 'receiver', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
        { name: 'data_source', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
      ],
      versions: [{version: 0}]
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
        { name: 'file', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.ReadOnlyFileSpec, nullable: false },
        { name: 'data_source', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
      ],
      versions: [{version: 0}]
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
      versions: [{version: 0}]
    }
  }
};

web_package.mojom.WebBundleParser_ParseIntegrityBlock_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'web_package.mojom.WebBundleParser.ParseIntegrityBlock_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'Result', packedOffset: 0, packedBitOffset: 0, type: web_package.mojom.BundleIntegrityBlockSpec, nullable: true },
        { name: 'error', packedOffset: 8, packedBitOffset: 0, type: web_package.mojom.BundleIntegrityBlockParseErrorSpec, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ParseMetadata
web_package.mojom.WebBundleParser_ParseMetadata_ParamsSpec = {
  $: {
    structSpec: {
      name: 'web_package.mojom.WebBundleParser.ParseMetadata_Params',
      packedSize: 16,
      fields: [
        { name: 'offset', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

web_package.mojom.WebBundleParser_ParseMetadata_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'web_package.mojom.WebBundleParser.ParseMetadata_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'Result', packedOffset: 0, packedBitOffset: 0, type: web_package.mojom.BundleMetadataSpec, nullable: true },
        { name: 'error', packedOffset: 8, packedBitOffset: 0, type: web_package.mojom.BundleMetadataParseErrorSpec, nullable: true },
      ],
      versions: [{version: 0}]
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
        { name: 'response_offset', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false },
        { name: 'response_length', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

web_package.mojom.WebBundleParser_ParseResponse_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'web_package.mojom.WebBundleParser.ParseResponse_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'Result', packedOffset: 0, packedBitOffset: 0, type: web_package.mojom.BundleResponseSpec, nullable: true },
        { name: 'error', packedOffset: 8, packedBitOffset: 0, type: web_package.mojom.BundleResponseParseErrorSpec, nullable: true },
      ],
      versions: [{version: 0}]
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
      versions: [{version: 0}]
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
        { name: 'offset', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false },
        { name: 'length', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

web_package.mojom.BundleDataSource_Read_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'web_package.mojom.BundleDataSource.Read_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'buffer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: true },
      ],
      versions: [{version: 0}]
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
      versions: [{version: 0}]
    }
  }
};

web_package.mojom.BundleDataSource_Length_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'web_package.mojom.BundleDataSource.Length_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'length', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false },
      ],
      versions: [{version: 0}]
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
      versions: [{version: 0}]
    }
  }
};

web_package.mojom.BundleDataSource_IsRandomAccessContext_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'web_package.mojom.BundleDataSource.IsRandomAccessContext_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'is_random_access', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
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
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
web_package.mojom.BundleDataSourcePtr = web_package.mojom.BundleDataSourceRemote;
web_package.mojom.BundleDataSourceRequest = web_package.mojom.BundleDataSourcePendingReceiver;

