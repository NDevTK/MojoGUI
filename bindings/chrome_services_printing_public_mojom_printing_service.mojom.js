// Auto-generated MojoJS binding
// Source: chromium_src/chrome/services/printing/public/mojom/printing_service.mojom
// Module: printing.mojom

'use strict';

// Module namespace
var printing = printing || {};
printing.mojom = printing.mojom || {};


printing.mojom.kPrintingServiceSandbox = sandbox.mojom.Sandbox.kPdfConversion;

printing.mojom.kPrintingServiceSandbox = sandbox.mojom.Sandbox.kUtility;

// Interface: PrintingService
printing.mojom.PrintingService = {};

printing.mojom.PrintingService_BindPdfNupConverter_ParamsSpec = {
  $: {
    structSpec: {
      name: 'printing.mojom.PrintingService_BindPdfNupConverter_Params',
      packedSize: 16,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(printing.mojom.PdfNupConverterRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

printing.mojom.PrintingService_BindPdfToPwgRasterConverter_ParamsSpec = {
  $: {
    structSpec: {
      name: 'printing.mojom.PrintingService_BindPdfToPwgRasterConverter_Params',
      packedSize: 16,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(printing.mojom.PdfToPwgRasterConverterRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

printing.mojom.PrintingService_BindPdfFlattener_ParamsSpec = {
  $: {
    structSpec: {
      name: 'printing.mojom.PrintingService_BindPdfFlattener_Params',
      packedSize: 16,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(printing.mojom.PdfFlattenerRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

printing.mojom.PrintingService_BindPdfToEmfConverterFactory_ParamsSpec = {
  $: {
    structSpec: {
      name: 'printing.mojom.PrintingService_BindPdfToEmfConverterFactory_Params',
      packedSize: 16,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(printing.mojom.PdfToEmfConverterFactoryRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

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
      [receiver]);
  }

  bindPdfToPwgRasterConverter(receiver) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      printing.mojom.PrintingService_BindPdfToPwgRasterConverter_ParamsSpec,
      null,
      [receiver]);
  }

  bindPdfFlattener(receiver) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      printing.mojom.PrintingService_BindPdfFlattener_ParamsSpec,
      null,
      [receiver]);
  }

  bindPdfToEmfConverterFactory(receiver) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      printing.mojom.PrintingService_BindPdfToEmfConverterFactory_ParamsSpec,
      null,
      [receiver]);
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

// ParamsSpec for BindPdfNupConverter
printing.mojom.PrintingService_BindPdfNupConverter_ParamsSpec = {
  $: {
    structSpec: {
      name: 'printing.mojom.PrintingService.BindPdfNupConverter_Params',
      packedSize: 16,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(printing.mojom.PdfNupConverterRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for BindPdfToPwgRasterConverter
printing.mojom.PrintingService_BindPdfToPwgRasterConverter_ParamsSpec = {
  $: {
    structSpec: {
      name: 'printing.mojom.PrintingService.BindPdfToPwgRasterConverter_Params',
      packedSize: 16,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(printing.mojom.PdfToPwgRasterConverterRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for BindPdfFlattener
printing.mojom.PrintingService_BindPdfFlattener_ParamsSpec = {
  $: {
    structSpec: {
      name: 'printing.mojom.PrintingService.BindPdfFlattener_Params',
      packedSize: 16,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(printing.mojom.PdfFlattenerRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for BindPdfToEmfConverterFactory
printing.mojom.PrintingService_BindPdfToEmfConverterFactory_ParamsSpec = {
  $: {
    structSpec: {
      name: 'printing.mojom.PrintingService.BindPdfToEmfConverterFactory_Params',
      packedSize: 16,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(printing.mojom.PdfToEmfConverterFactoryRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
printing.mojom.PrintingServicePtr = printing.mojom.PrintingServiceRemote;
printing.mojom.PrintingServiceRequest = printing.mojom.PrintingServicePendingReceiver;

