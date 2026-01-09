// Auto-generated MojoJS binding
// Source: chromium_src/chrome/services/printing/public/mojom/printer_xml_parser.mojom
// Module: printing.mojom

'use strict';

// Module namespace
var printing = printing || {};
printing.mojom = printing.mojom || {};


// Interface: PrinterXmlParser
printing.mojom.PrinterXmlParser = {};

printing.mojom.PrinterXmlParserPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

printing.mojom.PrinterXmlParserRemote = class {
  static get $interfaceName() {
    return 'printing.mojom.PrinterXmlParser';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      printing.mojom.PrinterXmlParserPendingReceiver,
      handle);
    this.$ = new printing.mojom.PrinterXmlParserRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

printing.mojom.PrinterXmlParserRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  parseXmlForPrinterCapabilities(capabilities_xml) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      printing.mojom.PrinterXmlParser_ParseXmlForPrinterCapabilities_ParamsSpec,
      null,
      [capabilities_xml]);
  }

};

printing.mojom.PrinterXmlParser.getRemote = function() {
  let remote = new printing.mojom.PrinterXmlParserRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'printing.mojom.PrinterXmlParser',
    'context');
  return remote.$;
};

// ParamsSpec for ParseXmlForPrinterCapabilities
printing.mojom.PrinterXmlParser_ParseXmlForPrinterCapabilities_ParamsSpec = {
  $: {
    structSpec: {
      name: 'printing.mojom.PrinterXmlParser.ParseXmlForPrinterCapabilities_Params',
      packedSize: 16,
      fields: [
        { name: 'capabilities_xml', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
printing.mojom.PrinterXmlParserPtr = printing.mojom.PrinterXmlParserRemote;
printing.mojom.PrinterXmlParserRequest = printing.mojom.PrinterXmlParserPendingReceiver;

