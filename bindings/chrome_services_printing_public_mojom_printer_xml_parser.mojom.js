// Auto-generated MojoJS binding
// Source: chromium_src/chrome/services/printing/public/mojom/printer_xml_parser.mojom
// Module: printing.mojom

'use strict';

// Module namespace
var printing = printing || {};
printing.mojom = printing.mojom || {};


// Interface: PrinterXmlParser
printing.mojom.mojom.PrinterXmlParser = {};

printing.mojom.mojom.PrinterXmlParserPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

printing.mojom.mojom.PrinterXmlParserRemote = class {
  static get $interfaceName() {
    return 'printing.mojom.PrinterXmlParser';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      printing.mojom.mojom.PrinterXmlParserPendingReceiver,
      handle);
    this.$ = new printing.mojom.mojom.PrinterXmlParserRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

printing.mojom.mojom.PrinterXmlParserRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  parseXmlForPrinterCapabilities(capabilities_xml) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      printing.mojom.mojom.PrinterXmlParser_ParseXmlForPrinterCapabilities_ParamsSpec,
      null,
      [capabilities_xml]);
  }

};

printing.mojom.mojom.PrinterXmlParser.getRemote = function() {
  let remote = new printing.mojom.mojom.PrinterXmlParserRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'printing.mojom.PrinterXmlParser',
    'context');
  return remote.$;
};

// ParamsSpec for ParseXmlForPrinterCapabilities
printing.mojom.mojom.PrinterXmlParser_ParseXmlForPrinterCapabilities_ParamsSpec = {
  $: {
    structSpec: {
      name: 'printing.mojom.PrinterXmlParser.ParseXmlForPrinterCapabilities_Params',
      packedSize: 16,
      fields: [
        { name: 'capabilities_xml', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
printing.mojom.mojom.PrinterXmlParserPtr = printing.mojom.mojom.PrinterXmlParserRemote;
printing.mojom.mojom.PrinterXmlParserRequest = printing.mojom.mojom.PrinterXmlParserPendingReceiver;

