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
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
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
        let payload = args[2];
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      switch (header.ordinal) {
        case 0: {
          const params = printing.mojom.PrinterXmlParser_ParseXmlForPrinterCapabilities_ParamsSpec.$.decode(message.payload);
          console.log('[GeneratedReceiver] Calling impl.parseXmlForPrinterCapabilities');
          const result = this.impl.parseXmlForPrinterCapabilities(params.capabilities_xml);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

printing.mojom.PrinterXmlParserReceiver = printing.mojom.PrinterXmlParserReceiver;

printing.mojom.PrinterXmlParserPtr = printing.mojom.PrinterXmlParserRemote;
printing.mojom.PrinterXmlParserRequest = printing.mojom.PrinterXmlParserPendingReceiver;

