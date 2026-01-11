// Auto-generated MojoJS binding
// Source: chromium_src/chrome/services/printing/public/mojom/printer_xml_parser.mojom
// Module: printing.mojom

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
  parseXmlForPrinterCapabilities(capabilities_xml) {
    return this.$.parseXmlForPrinterCapabilities(capabilities_xml);
  }
};

printing.mojom.PrinterXmlParserRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('PrinterXmlParser', [
      { explicit: null },
    ]);
  }

  parseXmlForPrinterCapabilities(capabilities_xml) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
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
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('PrinterXmlParser', [
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    if (this.router_.onConnectionError) {
      this.router_.onConnectionError.addListener(() => {
         console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
      });
    }
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(printing.mojom.PrinterXmlParser_ParseXmlForPrinterCapabilities_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(printing.mojom.PrinterXmlParser_ParseXmlForPrinterCapabilities_ParamsSpec.$.structSpec);
          const result = this.impl.parseXmlForPrinterCapabilities(params.capabilities_xml);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

printing.mojom.PrinterXmlParserReceiver = printing.mojom.PrinterXmlParserReceiver;

printing.mojom.PrinterXmlParserPtr = printing.mojom.PrinterXmlParserRemote;
printing.mojom.PrinterXmlParserRequest = printing.mojom.PrinterXmlParserPendingReceiver;

