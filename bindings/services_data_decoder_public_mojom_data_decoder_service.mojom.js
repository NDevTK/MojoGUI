// Auto-generated MojoJS binding
// Source: chromium_src/services/data_decoder/public/mojom/data_decoder_service.mojom
// Module: data_decoder.mojom

'use strict';

// Module namespace
var data_decoder = data_decoder || {};
data_decoder.mojom = data_decoder.mojom || {};


// Interface: DataDecoderService
data_decoder.mojom.DataDecoderServicePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'data_decoder.mojom.DataDecoderService';
  }

  bindImageDecoder(receiver) {
    // Method: BindImageDecoder
    // Call: BindImageDecoder(receiver)
  }

  bindXmlParser(reciever) {
    // Method: BindXmlParser
    // Call: BindXmlParser(reciever)
  }

  bindWebBundleParserFactory(receiver) {
    // Method: BindWebBundleParserFactory
    // Call: BindWebBundleParserFactory(receiver)
  }

  bindGzipper(receiver) {
    // Method: BindGzipper
    // Call: BindGzipper(receiver)
  }

  bindStructuredHeadersParser(receiver) {
    // Method: BindStructuredHeadersParser
    // Call: BindStructuredHeadersParser(receiver)
  }

  bindCborParser(receiver) {
    // Method: BindCborParser
    // Call: BindCborParser(receiver)
  }

  bindPixCodeValidator(receiver) {
    // Method: BindPixCodeValidator
    // Call: BindPixCodeValidator(receiver)
  }

};

data_decoder.mojom.DataDecoderServiceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
