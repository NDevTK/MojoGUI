// Auto-generated MojoJS binding
// Source: chromium_src/chrome/services/printing/public/mojom/printing_service.mojom
// Module: printing.mojom

'use strict';

// Module namespace
var printing = printing || {};
printing.mojom = printing.mojom || {};


printing.mojom.mojom.kPrintingServiceSandbox = sandbox.mojom.Sandbox.kPdfConversion;

printing.mojom.mojom.kPrintingServiceSandbox = sandbox.mojom.Sandbox.kUtility;

// Interface: PrintingService
printing.mojom.mojom.PrintingService = {};

printing.mojom.mojom.PrintingServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

printing.mojom.mojom.PrintingServiceRemote = class {
  static get $interfaceName() {
    return 'printing.mojom.PrintingService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      printing.mojom.mojom.PrintingServicePendingReceiver,
      handle);
    this.$ = new printing.mojom.mojom.PrintingServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

printing.mojom.mojom.PrintingServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  bindPdfNupConverter(receiver) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      printing.mojom.mojom.PrintingService_BindPdfNupConverter_ParamsSpec,
      null,
      [receiver]);
  }

  bindPdfToPwgRasterConverter(receiver) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      printing.mojom.mojom.PrintingService_BindPdfToPwgRasterConverter_ParamsSpec,
      null,
      [receiver]);
  }

  bindPdfFlattener(receiver) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      printing.mojom.mojom.PrintingService_BindPdfFlattener_ParamsSpec,
      null,
      [receiver]);
  }

  bindPdfToEmfConverterFactory(receiver) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      printing.mojom.mojom.PrintingService_BindPdfToEmfConverterFactory_ParamsSpec,
      null,
      [receiver]);
  }

};

printing.mojom.mojom.PrintingService.getRemote = function() {
  let remote = new printing.mojom.mojom.PrintingServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'printing.mojom.PrintingService',
    'context');
  return remote.$;
};

// ParamsSpec for BindPdfNupConverter
printing.mojom.mojom.PrintingService_BindPdfNupConverter_ParamsSpec = {
  $: {
    structSpec: {
      name: 'printing.mojom.PrintingService.BindPdfNupConverter_Params',
      packedSize: 16,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for BindPdfToPwgRasterConverter
printing.mojom.mojom.PrintingService_BindPdfToPwgRasterConverter_ParamsSpec = {
  $: {
    structSpec: {
      name: 'printing.mojom.PrintingService.BindPdfToPwgRasterConverter_Params',
      packedSize: 16,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for BindPdfFlattener
printing.mojom.mojom.PrintingService_BindPdfFlattener_ParamsSpec = {
  $: {
    structSpec: {
      name: 'printing.mojom.PrintingService.BindPdfFlattener_Params',
      packedSize: 16,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for BindPdfToEmfConverterFactory
printing.mojom.mojom.PrintingService_BindPdfToEmfConverterFactory_ParamsSpec = {
  $: {
    structSpec: {
      name: 'printing.mojom.PrintingService.BindPdfToEmfConverterFactory_Params',
      packedSize: 16,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
printing.mojom.mojom.PrintingServicePtr = printing.mojom.mojom.PrintingServiceRemote;
printing.mojom.mojom.PrintingServiceRequest = printing.mojom.mojom.PrintingServicePendingReceiver;

