// Auto-generated MojoJS binding
// Source: chromium_src/chrome/services/printing/public/mojom/printing_service.mojom
// Module: printing.mojom

'use strict';

// Module namespace
var printing = printing || {};
printing.mojom = printing.mojom || {};
var services = services || {};
var services = services || {};
var services = services || {};
var services = services || {};

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

printing.mojom.PrintingServicePtr = printing.mojom.PrintingServiceRemote;
printing.mojom.PrintingServiceRequest = printing.mojom.PrintingServicePendingReceiver;

