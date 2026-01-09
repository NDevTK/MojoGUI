// Auto-generated MojoJS binding
// Source: chromium_src/services/data_decoder/public/mojom/data_decoder_service.mojom
// Module: data_decoder.mojom

'use strict';

// Module namespace
var data_decoder = data_decoder || {};
data_decoder.mojom = data_decoder.mojom || {};


// Interface: DataDecoderService
data_decoder.mojom.DataDecoderService = {};

data_decoder.mojom.DataDecoderServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

data_decoder.mojom.DataDecoderServiceRemote = class {
  static get $interfaceName() {
    return 'data_decoder.mojom.DataDecoderService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      data_decoder.mojom.DataDecoderServicePendingReceiver,
      handle);
    this.$ = new data_decoder.mojom.DataDecoderServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

data_decoder.mojom.DataDecoderServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  bindImageDecoder(receiver) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      data_decoder.mojom.DataDecoderService_BindImageDecoder_ParamsSpec.$,
      null,
      [receiver]);
  }

  bindXmlParser(reciever) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      data_decoder.mojom.DataDecoderService_BindXmlParser_ParamsSpec.$,
      null,
      [reciever]);
  }

  bindWebBundleParserFactory(receiver) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      data_decoder.mojom.DataDecoderService_BindWebBundleParserFactory_ParamsSpec.$,
      null,
      [receiver]);
  }

  bindGzipper(receiver) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      data_decoder.mojom.DataDecoderService_BindGzipper_ParamsSpec.$,
      null,
      [receiver]);
  }

  bindStructuredHeadersParser(receiver) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      data_decoder.mojom.DataDecoderService_BindStructuredHeadersParser_ParamsSpec.$,
      null,
      [receiver]);
  }

  bindCborParser(receiver) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      data_decoder.mojom.DataDecoderService_BindCborParser_ParamsSpec.$,
      null,
      [receiver]);
  }

  bindPixCodeValidator(receiver) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      data_decoder.mojom.DataDecoderService_BindPixCodeValidator_ParamsSpec.$,
      null,
      [receiver]);
  }

};

data_decoder.mojom.DataDecoderService.getRemote = function() {
  let remote = new data_decoder.mojom.DataDecoderServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'data_decoder.mojom.DataDecoderService',
    'context');
  return remote.$;
};

// ParamsSpec for BindImageDecoder
data_decoder.mojom.DataDecoderService_BindImageDecoder_ParamsSpec = {
  $: {
    structSpec: {
      name: 'data_decoder.mojom.DataDecoderService.BindImageDecoder_Params',
      packedSize: 16,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for BindXmlParser
data_decoder.mojom.DataDecoderService_BindXmlParser_ParamsSpec = {
  $: {
    structSpec: {
      name: 'data_decoder.mojom.DataDecoderService.BindXmlParser_Params',
      packedSize: 16,
      fields: [
        { name: 'reciever', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for BindWebBundleParserFactory
data_decoder.mojom.DataDecoderService_BindWebBundleParserFactory_ParamsSpec = {
  $: {
    structSpec: {
      name: 'data_decoder.mojom.DataDecoderService.BindWebBundleParserFactory_Params',
      packedSize: 16,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for BindGzipper
data_decoder.mojom.DataDecoderService_BindGzipper_ParamsSpec = {
  $: {
    structSpec: {
      name: 'data_decoder.mojom.DataDecoderService.BindGzipper_Params',
      packedSize: 16,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for BindStructuredHeadersParser
data_decoder.mojom.DataDecoderService_BindStructuredHeadersParser_ParamsSpec = {
  $: {
    structSpec: {
      name: 'data_decoder.mojom.DataDecoderService.BindStructuredHeadersParser_Params',
      packedSize: 16,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for BindCborParser
data_decoder.mojom.DataDecoderService_BindCborParser_ParamsSpec = {
  $: {
    structSpec: {
      name: 'data_decoder.mojom.DataDecoderService.BindCborParser_Params',
      packedSize: 16,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for BindPixCodeValidator
data_decoder.mojom.DataDecoderService_BindPixCodeValidator_ParamsSpec = {
  $: {
    structSpec: {
      name: 'data_decoder.mojom.DataDecoderService.BindPixCodeValidator_Params',
      packedSize: 16,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
data_decoder.mojom.DataDecoderServicePtr = data_decoder.mojom.DataDecoderServiceRemote;
data_decoder.mojom.DataDecoderServiceRequest = data_decoder.mojom.DataDecoderServicePendingReceiver;

