// Auto-generated MojoJS binding
// Source: chromium_src/chrome/services/printing/public/mojom/printer_xml_parser.mojom
// Module: printing.mojom

'use strict';

// Module namespace
var printing = printing || {};
printing.mojom = printing.mojom || {};
var mojo_base = mojo_base || {};

printing.mojom.PrinterXmlParser = {};
printing.mojom.PrinterXmlParser.$interfaceName = 'printing.mojom.PrinterXmlParser';
printing.mojom.PrinterXmlParser_ParseXmlForPrinterCapabilities_ParamsSpec = { $: {} };

// Interface: PrinterXmlParser
mojo.internal.Struct(
    printing.mojom.PrinterXmlParser_ParseXmlForPrinterCapabilities_ParamsSpec, 'printing.mojom.PrinterXmlParser_ParseXmlForPrinterCapabilities_Params', [
      mojo.internal.StructField('capabilities_xml', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

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
      [capabilities_xml],
      false);
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

printing.mojom.PrinterXmlParserReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (message) => {
      console.log('[GeneratedReceiver] Message received', message);
      const header = message.header;
      if (!header) { console.warn('[GeneratedReceiver] No header'); return; }
      console.log('[GeneratedReceiver] Header ordinal:', header.ordinal);
      switch (header.ordinal) {
        case 0: {
          const params = printing.mojom.PrinterXmlParser_ParseXmlForPrinterCapabilities_ParamsSpec.$.decode(message.payload);
          const result = this.impl.parseXmlForPrinterCapabilities(params.capabilities_xml);
          break;
        }
      }
    }});
  }
};

printing.mojom.PrinterXmlParserReceiver = printing.mojom.PrinterXmlParserReceiver;

printing.mojom.PrinterXmlParserPtr = printing.mojom.PrinterXmlParserRemote;
printing.mojom.PrinterXmlParserRequest = printing.mojom.PrinterXmlParserPendingReceiver;

