// Auto-generated MojoJS binding
// Source: chromium_src/chrome/services/printing/public/mojom/printing_service.mojom
// Module: printing.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var printing = printing || {};
printing.mojom = printing.mojom || {};
var sandbox = sandbox || {};

printing.mojom.PrintingService = {};
printing.mojom.PrintingService.$interfaceName = 'printing.mojom.PrintingService';
printing.mojom.PrintingService_BindPdfNupConverter_ParamsSpec = { $: {} };
printing.mojom.PrintingService_BindPdfToPwgRasterConverter_ParamsSpec = { $: {} };
printing.mojom.PrintingService_BindPdfFlattener_ParamsSpec = { $: {} };
printing.mojom.PrintingService_BindPdfToEmfConverterFactory_ParamsSpec = { $: {} };

printing.mojom.kPrintingServiceSandbox = sandbox.mojom.Sandbox.kPdfConversion;

printing.mojom.kPrintingServiceSandbox = sandbox.mojom.Sandbox.kUtility;

// Interface: PrintingService
mojo.internal.Struct(
    printing.mojom.PrintingService_BindPdfNupConverter_ParamsSpec, 'printing.mojom.PrintingService_BindPdfNupConverter_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(printing.mojom.PdfNupConverterRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    printing.mojom.PrintingService_BindPdfToPwgRasterConverter_ParamsSpec, 'printing.mojom.PrintingService_BindPdfToPwgRasterConverter_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(printing.mojom.PdfToPwgRasterConverterRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    printing.mojom.PrintingService_BindPdfFlattener_ParamsSpec, 'printing.mojom.PrintingService_BindPdfFlattener_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(printing.mojom.PdfFlattenerRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    printing.mojom.PrintingService_BindPdfToEmfConverterFactory_ParamsSpec, 'printing.mojom.PrintingService_BindPdfToEmfConverterFactory_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(printing.mojom.PdfToEmfConverterFactoryRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

printing.mojom.PrintingServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

printing.mojom.PrintingServiceRemote = class {
  static get $interfaceName() {
    return 'printing.mojom.PrintingService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      printing.mojom.PrintingServicePendingReceiver,
      handle);
    this.$ = new printing.mojom.PrintingServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  bindPdfNupConverter(receiver) {
    return this.$.bindPdfNupConverter(receiver);
  }
  bindPdfToPwgRasterConverter(receiver) {
    return this.$.bindPdfToPwgRasterConverter(receiver);
  }
  bindPdfFlattener(receiver) {
    return this.$.bindPdfFlattener(receiver);
  }
  bindPdfToEmfConverterFactory(receiver) {
    return this.$.bindPdfToEmfConverterFactory(receiver);
  }
};

printing.mojom.PrintingServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('PrintingService', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  bindPdfNupConverter(receiver) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      printing.mojom.PrintingService_BindPdfNupConverter_ParamsSpec,
      null,
      [receiver],
      false);
  }

  bindPdfToPwgRasterConverter(receiver) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      printing.mojom.PrintingService_BindPdfToPwgRasterConverter_ParamsSpec,
      null,
      [receiver],
      false);
  }

  bindPdfFlattener(receiver) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      printing.mojom.PrintingService_BindPdfFlattener_ParamsSpec,
      null,
      [receiver],
      false);
  }

  bindPdfToEmfConverterFactory(receiver) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      printing.mojom.PrintingService_BindPdfToEmfConverterFactory_ParamsSpec,
      null,
      [receiver],
      false);
  }

};

printing.mojom.PrintingService.getRemote = function() {
  let remote = new printing.mojom.PrintingServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'printing.mojom.PrintingService',
    'context');
  return remote.$;
};

printing.mojom.PrintingServiceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('PrintingService', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
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
             decoder.decodeStructInline(printing.mojom.PrintingService_BindPdfNupConverter_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(printing.mojom.PrintingService_BindPdfToPwgRasterConverter_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(printing.mojom.PrintingService_BindPdfFlattener_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(printing.mojom.PrintingService_BindPdfToEmfConverterFactory_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(printing.mojom.PrintingService_BindPdfNupConverter_ParamsSpec.$.structSpec);
          const result = this.impl.bindPdfNupConverter(params.receiver);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(printing.mojom.PrintingService_BindPdfToPwgRasterConverter_ParamsSpec.$.structSpec);
          const result = this.impl.bindPdfToPwgRasterConverter(params.receiver);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(printing.mojom.PrintingService_BindPdfFlattener_ParamsSpec.$.structSpec);
          const result = this.impl.bindPdfFlattener(params.receiver);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(printing.mojom.PrintingService_BindPdfToEmfConverterFactory_ParamsSpec.$.structSpec);
          const result = this.impl.bindPdfToEmfConverterFactory(params.receiver);
          break;
        }
      }
      } catch (err) {}
    });
  }
};

printing.mojom.PrintingServiceReceiver = printing.mojom.PrintingServiceReceiver;

printing.mojom.PrintingServicePtr = printing.mojom.PrintingServiceRemote;
printing.mojom.PrintingServiceRequest = printing.mojom.PrintingServicePendingReceiver;

