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
      packedSize: 32,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'base_url', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'data_source', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
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
        { name: 'data_source', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'file', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
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
        { name: 'Result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'error', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
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
        { name: 'offset', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
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
        { name: 'Result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'error', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
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
        { name: 'response_offset', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'response_length', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
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
        { name: 'Result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'error', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
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
        { name: 'offset', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'length', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
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
        { name: 'buffer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
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
        { name: 'length', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
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
        { name: 'is_random_access', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
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

