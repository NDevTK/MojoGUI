// Auto-generated MojoJS binding
// Source: chromium_src/chrome/services/printing/public/mojom/printing_service.mojom
// Module: printing.mojom

'use strict';

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
};

printing.mojom.PrintingServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  bindPdfNupConverter(receiver) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      printing.mojom.PrintingService_BindPdfNupConverter_ParamsSpec,
      null,
      [receiver],
      false);
  }

  bindPdfToPwgRasterConverter(receiver) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      printing.mojom.PrintingService_BindPdfToPwgRasterConverter_ParamsSpec,
      null,
      [receiver],
      false);
  }

  bindPdfFlattener(receiver) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      printing.mojom.PrintingService_BindPdfFlattener_ParamsSpec,
      null,
      [receiver],
      false);
  }

  bindPdfToEmfConverterFactory(receiver) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
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
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
    this.ordinalMap.set(3, 3); // Default ordinal 3 -> Index 3
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
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
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: BindPdfNupConverter
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(printing.mojom.PrintingService_BindPdfNupConverter_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> BindPdfNupConverter (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: BindPdfToPwgRasterConverter
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(printing.mojom.PrintingService_BindPdfToPwgRasterConverter_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> BindPdfToPwgRasterConverter (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: BindPdfFlattener
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(printing.mojom.PrintingService_BindPdfFlattener_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> BindPdfFlattener (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: BindPdfToEmfConverterFactory
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(printing.mojom.PrintingService_BindPdfToEmfConverterFactory_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> BindPdfToEmfConverterFactory (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(printing.mojom.PrintingService_BindPdfNupConverter_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.bindPdfNupConverter');
          const result = this.impl.bindPdfNupConverter(params.receiver);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(printing.mojom.PrintingService_BindPdfToPwgRasterConverter_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.bindPdfToPwgRasterConverter');
          const result = this.impl.bindPdfToPwgRasterConverter(params.receiver);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(printing.mojom.PrintingService_BindPdfFlattener_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.bindPdfFlattener');
          const result = this.impl.bindPdfFlattener(params.receiver);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(printing.mojom.PrintingService_BindPdfToEmfConverterFactory_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.bindPdfToEmfConverterFactory');
          const result = this.impl.bindPdfToEmfConverterFactory(params.receiver);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

printing.mojom.PrintingServiceReceiver = printing.mojom.PrintingServiceReceiver;

printing.mojom.PrintingServicePtr = printing.mojom.PrintingServiceRemote;
printing.mojom.PrintingServiceRequest = printing.mojom.PrintingServicePendingReceiver;

