// Auto-generated MojoJS binding
// Source: chromium_src/chrome/services/printing/public/mojom/print_backend_service.mojom
// Module: printing.mojom

'use strict';

// Module namespace
var printing = printing || {};
printing.mojom = printing.mojom || {};
var mojo_base = mojo_base || {};
var sandbox = sandbox || {};
var gfx = gfx || {};

printing.mojom.PrinterCapsAndInfoSpec = { $: {} };
printing.mojom.UnsandboxedPrintBackendHost = {};
printing.mojom.UnsandboxedPrintBackendHost.$interfaceName = 'printing.mojom.UnsandboxedPrintBackendHost';
printing.mojom.UnsandboxedPrintBackendHost_BindBackend_ParamsSpec = { $: {} };
printing.mojom.SandboxedPrintBackendHost = {};
printing.mojom.SandboxedPrintBackendHost.$interfaceName = 'printing.mojom.SandboxedPrintBackendHost';
printing.mojom.SandboxedPrintBackendHost_BindBackend_ParamsSpec = { $: {} };
printing.mojom.PrintBackendService = {};
printing.mojom.PrintBackendService.$interfaceName = 'printing.mojom.PrintBackendService';
printing.mojom.PrintBackendService_Init_ParamsSpec = { $: {} };
printing.mojom.PrintBackendService_Poke_ParamsSpec = { $: {} };
printing.mojom.PrintBackendService_EnumeratePrinters_ParamsSpec = { $: {} };
printing.mojom.PrintBackendService_GetDefaultPrinterName_ParamsSpec = { $: {} };
printing.mojom.PrintBackendService_GetPrinterSemanticCapsAndDefaults_ParamsSpec = { $: {} };
printing.mojom.PrintBackendService_FetchCapabilities_ParamsSpec = { $: {} };
printing.mojom.PrintBackendService_GetPaperPrintableArea_ParamsSpec = { $: {} };
printing.mojom.PrintBackendService_GetPaperPrintableArea_ResponseParamsSpec = { $: {} };
printing.mojom.PrintBackendService_EstablishPrintingContext_ParamsSpec = { $: {} };
printing.mojom.PrintBackendService_UseDefaultSettings_ParamsSpec = { $: {} };
printing.mojom.PrintBackendService_AskUserForSettings_ParamsSpec = { $: {} };
printing.mojom.PrintBackendService_UpdatePrintSettings_ParamsSpec = { $: {} };
printing.mojom.PrintBackendService_StartPrinting_ParamsSpec = { $: {} };
printing.mojom.PrintBackendService_StartPrinting_ResponseParamsSpec = { $: {} };
printing.mojom.PrintBackendService_RenderPrintedPage_ParamsSpec = { $: {} };
printing.mojom.PrintBackendService_RenderPrintedPage_ResponseParamsSpec = { $: {} };
printing.mojom.PrintBackendService_RenderPrintedDocument_ParamsSpec = { $: {} };
printing.mojom.PrintBackendService_RenderPrintedDocument_ResponseParamsSpec = { $: {} };
printing.mojom.PrintBackendService_DocumentDone_ParamsSpec = { $: {} };
printing.mojom.PrintBackendService_DocumentDone_ResponseParamsSpec = { $: {} };
printing.mojom.PrintBackendService_Cancel_ParamsSpec = { $: {} };
printing.mojom.PrintBackendService_Cancel_ResponseParamsSpec = { $: {} };

// Struct: PrinterCapsAndInfo
mojo.internal.Struct(
    printing.mojom.PrinterCapsAndInfoSpec, 'printing.mojom.PrinterCapsAndInfo', [
      mojo.internal.StructField('printer_info', 0, 0, printing.mojom.PrinterBasicInfoSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('printer_caps', 8, 0, printing.mojom.PrinterSemanticCapsAndDefaultsSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: UnsandboxedPrintBackendHost
mojo.internal.Struct(
    printing.mojom.UnsandboxedPrintBackendHost_BindBackend_ParamsSpec, 'printing.mojom.UnsandboxedPrintBackendHost_BindBackend_Params', [
      mojo.internal.StructField('service', 0, 0, mojo.internal.InterfaceRequest(printing.mojom.PrintBackendServiceSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

printing.mojom.UnsandboxedPrintBackendHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

printing.mojom.UnsandboxedPrintBackendHostRemote = class {
  static get $interfaceName() {
    return 'printing.mojom.UnsandboxedPrintBackendHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      printing.mojom.UnsandboxedPrintBackendHostPendingReceiver,
      handle);
    this.$ = new printing.mojom.UnsandboxedPrintBackendHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

printing.mojom.UnsandboxedPrintBackendHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  bindBackend(service) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      printing.mojom.UnsandboxedPrintBackendHost_BindBackend_ParamsSpec,
      null,
      [service],
      false);
  }

};

printing.mojom.UnsandboxedPrintBackendHost.getRemote = function() {
  let remote = new printing.mojom.UnsandboxedPrintBackendHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'printing.mojom.UnsandboxedPrintBackendHost',
    'context');
  return remote.$;
};

printing.mojom.UnsandboxedPrintBackendHostReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
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
        message = {
          header: args[1],
          payload: args[2],
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
        
        // Try Method 0: BindBackend
        try {
             decoder.decodeStruct(printing.mojom.UnsandboxedPrintBackendHost_BindBackend_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> BindBackend (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(printing.mojom.UnsandboxedPrintBackendHost_BindBackend_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.bindBackend');
          const result = this.impl.bindBackend(params.service);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

printing.mojom.UnsandboxedPrintBackendHostReceiver = printing.mojom.UnsandboxedPrintBackendHostReceiver;

printing.mojom.UnsandboxedPrintBackendHostPtr = printing.mojom.UnsandboxedPrintBackendHostRemote;
printing.mojom.UnsandboxedPrintBackendHostRequest = printing.mojom.UnsandboxedPrintBackendHostPendingReceiver;


// Interface: SandboxedPrintBackendHost
mojo.internal.Struct(
    printing.mojom.SandboxedPrintBackendHost_BindBackend_ParamsSpec, 'printing.mojom.SandboxedPrintBackendHost_BindBackend_Params', [
      mojo.internal.StructField('service', 0, 0, mojo.internal.InterfaceRequest(printing.mojom.PrintBackendServiceSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

printing.mojom.SandboxedPrintBackendHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

printing.mojom.SandboxedPrintBackendHostRemote = class {
  static get $interfaceName() {
    return 'printing.mojom.SandboxedPrintBackendHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      printing.mojom.SandboxedPrintBackendHostPendingReceiver,
      handle);
    this.$ = new printing.mojom.SandboxedPrintBackendHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

printing.mojom.SandboxedPrintBackendHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  bindBackend(service) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      printing.mojom.SandboxedPrintBackendHost_BindBackend_ParamsSpec,
      null,
      [service],
      false);
  }

};

printing.mojom.SandboxedPrintBackendHost.getRemote = function() {
  let remote = new printing.mojom.SandboxedPrintBackendHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'printing.mojom.SandboxedPrintBackendHost',
    'context');
  return remote.$;
};

printing.mojom.SandboxedPrintBackendHostReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
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
        message = {
          header: args[1],
          payload: args[2],
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
        
        // Try Method 0: BindBackend
        try {
             decoder.decodeStruct(printing.mojom.SandboxedPrintBackendHost_BindBackend_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> BindBackend (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(printing.mojom.SandboxedPrintBackendHost_BindBackend_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.bindBackend');
          const result = this.impl.bindBackend(params.service);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

printing.mojom.SandboxedPrintBackendHostReceiver = printing.mojom.SandboxedPrintBackendHostReceiver;

printing.mojom.SandboxedPrintBackendHostPtr = printing.mojom.SandboxedPrintBackendHostRemote;
printing.mojom.SandboxedPrintBackendHostRequest = printing.mojom.SandboxedPrintBackendHostPendingReceiver;


// Interface: PrintBackendService
mojo.internal.Struct(
    printing.mojom.PrintBackendService_Init_ParamsSpec, 'printing.mojom.PrintBackendService_Init_Params', [
      mojo.internal.StructField('locale', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('remote', 8, 0, mojo.internal.InterfaceProxy(printing.mojom.PrinterXmlParserRemote), null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    printing.mojom.PrintBackendService_Poke_ParamsSpec, 'printing.mojom.PrintBackendService_Poke_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    printing.mojom.PrintBackendService_EnumeratePrinters_ParamsSpec, 'printing.mojom.PrintBackendService_EnumeratePrinters_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    printing.mojom.PrintBackendService_GetDefaultPrinterName_ParamsSpec, 'printing.mojom.PrintBackendService_GetDefaultPrinterName_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    printing.mojom.PrintBackendService_GetPrinterSemanticCapsAndDefaults_ParamsSpec, 'printing.mojom.PrintBackendService_GetPrinterSemanticCapsAndDefaults_Params', [
      mojo.internal.StructField('printer_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    printing.mojom.PrintBackendService_FetchCapabilities_ParamsSpec, 'printing.mojom.PrintBackendService_FetchCapabilities_Params', [
      mojo.internal.StructField('printer_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    printing.mojom.PrintBackendService_GetPaperPrintableArea_ParamsSpec, 'printing.mojom.PrintBackendService_GetPaperPrintableArea_Params', [
      mojo.internal.StructField('printer_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('media', 8, 0, printing.mojom.RequestedMediaSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    printing.mojom.PrintBackendService_GetPaperPrintableArea_ResponseParamsSpec, 'printing.mojom.PrintBackendService_GetPaperPrintableArea_ResponseParams', [
      mojo.internal.StructField('printable_area_um', 0, 0, gfx.mojom.RectSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    printing.mojom.PrintBackendService_EstablishPrintingContext_ParamsSpec, 'printing.mojom.PrintBackendService_EstablishPrintingContext_Params', [
      mojo.internal.StructField('context_id', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('parent_window_id', 4, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    printing.mojom.PrintBackendService_UseDefaultSettings_ParamsSpec, 'printing.mojom.PrintBackendService_UseDefaultSettings_Params', [
      mojo.internal.StructField('context_id', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    printing.mojom.PrintBackendService_AskUserForSettings_ParamsSpec, 'printing.mojom.PrintBackendService_AskUserForSettings_Params', [
      mojo.internal.StructField('context_id', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('max_pages', 4, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('has_selection', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_scripted', 8, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    printing.mojom.PrintBackendService_UpdatePrintSettings_ParamsSpec, 'printing.mojom.PrintBackendService_UpdatePrintSettings_Params', [
      mojo.internal.StructField('job_settings', 0, 0, mojo_base.mojom.DictionaryValueSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('context_id', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    printing.mojom.PrintBackendService_StartPrinting_ParamsSpec, 'printing.mojom.PrintBackendService_StartPrinting_Params', [
      mojo.internal.StructField('document_name', 0, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('settings', 8, 0, printing.mojom.PrintSettingsSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('context_id', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('document_cookie', 20, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    printing.mojom.PrintBackendService_StartPrinting_ResponseParamsSpec, 'printing.mojom.PrintBackendService_StartPrinting_ResponseParams', [
      mojo.internal.StructField('result_code', 0, 0, printing.mojom.ResultCodeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('job_id', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    printing.mojom.PrintBackendService_RenderPrintedPage_ParamsSpec, 'printing.mojom.PrintBackendService_RenderPrintedPage_Params', [
      mojo.internal.StructField('page_data_type', 0, 0, printing.mojom.MetafileDataTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('serialized_page', 8, 0, mojo_base.mojom.ReadOnlySharedMemoryRegionSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('page_size', 16, 0, gfx.mojom.SizeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('page_content_rect', 24, 0, gfx.mojom.RectSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('document_cookie', 32, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('page_index', 36, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('shrink_factor', 40, 0, mojo.internal.Float, 0, false, 0, undefined),
    ],
    [[0, 56]]);

mojo.internal.Struct(
    printing.mojom.PrintBackendService_RenderPrintedPage_ResponseParamsSpec, 'printing.mojom.PrintBackendService_RenderPrintedPage_ResponseParams', [
      mojo.internal.StructField('result_code', 0, 0, printing.mojom.ResultCodeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    printing.mojom.PrintBackendService_RenderPrintedDocument_ParamsSpec, 'printing.mojom.PrintBackendService_RenderPrintedDocument_Params', [
      mojo.internal.StructField('data_type', 0, 0, printing.mojom.MetafileDataTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('serialized_doc', 8, 0, mojo_base.mojom.ReadOnlySharedMemoryRegionSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('document_cookie', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('page_count', 20, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    printing.mojom.PrintBackendService_RenderPrintedDocument_ResponseParamsSpec, 'printing.mojom.PrintBackendService_RenderPrintedDocument_ResponseParams', [
      mojo.internal.StructField('result_code', 0, 0, printing.mojom.ResultCodeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    printing.mojom.PrintBackendService_DocumentDone_ParamsSpec, 'printing.mojom.PrintBackendService_DocumentDone_Params', [
      mojo.internal.StructField('document_cookie', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    printing.mojom.PrintBackendService_DocumentDone_ResponseParamsSpec, 'printing.mojom.PrintBackendService_DocumentDone_ResponseParams', [
      mojo.internal.StructField('result_code', 0, 0, printing.mojom.ResultCodeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    printing.mojom.PrintBackendService_Cancel_ParamsSpec, 'printing.mojom.PrintBackendService_Cancel_Params', [
      mojo.internal.StructField('document_cookie', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    printing.mojom.PrintBackendService_Cancel_ResponseParamsSpec, 'printing.mojom.PrintBackendService_Cancel_ResponseParams', [
    ],
    [[0, 8]]);

printing.mojom.PrintBackendServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

printing.mojom.PrintBackendServiceRemote = class {
  static get $interfaceName() {
    return 'printing.mojom.PrintBackendService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      printing.mojom.PrintBackendServicePendingReceiver,
      handle);
    this.$ = new printing.mojom.PrintBackendServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

printing.mojom.PrintBackendServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  init(locale, remote) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      printing.mojom.PrintBackendService_Init_ParamsSpec,
      null,
      [locale, remote],
      false);
  }

  poke() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      printing.mojom.PrintBackendService_Poke_ParamsSpec,
      null,
      [],
      false);
  }

  enumeratePrinters() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      printing.mojom.PrintBackendService_EnumeratePrinters_ParamsSpec,
      null,
      [],
      false);
  }

  getDefaultPrinterName() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      printing.mojom.PrintBackendService_GetDefaultPrinterName_ParamsSpec,
      null,
      [],
      false);
  }

  getPrinterSemanticCapsAndDefaults(printer_name) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      printing.mojom.PrintBackendService_GetPrinterSemanticCapsAndDefaults_ParamsSpec,
      null,
      [printer_name],
      false);
  }

  fetchCapabilities(printer_name) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      printing.mojom.PrintBackendService_FetchCapabilities_ParamsSpec,
      null,
      [printer_name],
      false);
  }

  getPaperPrintableArea(printer_name, media) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      printing.mojom.PrintBackendService_GetPaperPrintableArea_ParamsSpec,
      printing.mojom.PrintBackendService_GetPaperPrintableArea_ResponseParamsSpec,
      [printer_name, media],
      false);
  }

  establishPrintingContext(context_id, parent_window_id) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      printing.mojom.PrintBackendService_EstablishPrintingContext_ParamsSpec,
      null,
      [context_id, parent_window_id],
      false);
  }

  useDefaultSettings(context_id) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      printing.mojom.PrintBackendService_UseDefaultSettings_ParamsSpec,
      null,
      [context_id],
      false);
  }

  askUserForSettings(context_id, max_pages, has_selection, is_scripted) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      printing.mojom.PrintBackendService_AskUserForSettings_ParamsSpec,
      null,
      [context_id, max_pages, has_selection, is_scripted],
      false);
  }

  updatePrintSettings(context_id, job_settings) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      printing.mojom.PrintBackendService_UpdatePrintSettings_ParamsSpec,
      null,
      [context_id, job_settings],
      false);
  }

  startPrinting(context_id, document_cookie, document_name, settings) {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      printing.mojom.PrintBackendService_StartPrinting_ParamsSpec,
      printing.mojom.PrintBackendService_StartPrinting_ResponseParamsSpec,
      [context_id, document_cookie, document_name, settings],
      false);
  }

  renderPrintedPage(document_cookie, page_index, page_data_type, serialized_page, page_size, page_content_rect, shrink_factor) {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      printing.mojom.PrintBackendService_RenderPrintedPage_ParamsSpec,
      printing.mojom.PrintBackendService_RenderPrintedPage_ResponseParamsSpec,
      [document_cookie, page_index, page_data_type, serialized_page, page_size, page_content_rect, shrink_factor],
      false);
  }

  renderPrintedDocument(document_cookie, page_count, data_type, serialized_doc) {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
      printing.mojom.PrintBackendService_RenderPrintedDocument_ParamsSpec,
      printing.mojom.PrintBackendService_RenderPrintedDocument_ResponseParamsSpec,
      [document_cookie, page_count, data_type, serialized_doc],
      false);
  }

  documentDone(document_cookie) {
    // Ordinal: 14
    return this.proxy.sendMessage(
      14,  // ordinal
      printing.mojom.PrintBackendService_DocumentDone_ParamsSpec,
      printing.mojom.PrintBackendService_DocumentDone_ResponseParamsSpec,
      [document_cookie],
      false);
  }

  cancel(document_cookie) {
    // Ordinal: 15
    return this.proxy.sendMessage(
      15,  // ordinal
      printing.mojom.PrintBackendService_Cancel_ParamsSpec,
      printing.mojom.PrintBackendService_Cancel_ResponseParamsSpec,
      [document_cookie],
      false);
  }

};

printing.mojom.PrintBackendService.getRemote = function() {
  let remote = new printing.mojom.PrintBackendServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'printing.mojom.PrintBackendService',
    'context');
  return remote.$;
};

printing.mojom.PrintBackendServiceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
    this.ordinalMap.set(3, 3); // Default ordinal 3 -> Index 3
    this.ordinalMap.set(4, 4); // Default ordinal 4 -> Index 4
    this.ordinalMap.set(5, 5); // Default ordinal 5 -> Index 5
    this.ordinalMap.set(6, 6); // Default ordinal 6 -> Index 6
    this.ordinalMap.set(7, 7); // Default ordinal 7 -> Index 7
    this.ordinalMap.set(8, 8); // Default ordinal 8 -> Index 8
    this.ordinalMap.set(9, 9); // Default ordinal 9 -> Index 9
    this.ordinalMap.set(10, 10); // Default ordinal 10 -> Index 10
    this.ordinalMap.set(11, 11); // Default ordinal 11 -> Index 11
    this.ordinalMap.set(12, 12); // Default ordinal 12 -> Index 12
    this.ordinalMap.set(13, 13); // Default ordinal 13 -> Index 13
    this.ordinalMap.set(14, 14); // Default ordinal 14 -> Index 14
    this.ordinalMap.set(15, 15); // Default ordinal 15 -> Index 15
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
        message = {
          header: args[1],
          payload: args[2],
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
        
        // Try Method 0: Init
        try {
             decoder.decodeStruct(printing.mojom.PrintBackendService_Init_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Init (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 1: Poke
        try {
             decoder.decodeStruct(printing.mojom.PrintBackendService_Poke_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Poke (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 2: EnumeratePrinters
        try {
             decoder.decodeStruct(printing.mojom.PrintBackendService_EnumeratePrinters_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> EnumeratePrinters (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 3: GetDefaultPrinterName
        try {
             decoder.decodeStruct(printing.mojom.PrintBackendService_GetDefaultPrinterName_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetDefaultPrinterName (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 4: GetPrinterSemanticCapsAndDefaults
        try {
             decoder.decodeStruct(printing.mojom.PrintBackendService_GetPrinterSemanticCapsAndDefaults_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetPrinterSemanticCapsAndDefaults (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 5: FetchCapabilities
        try {
             decoder.decodeStruct(printing.mojom.PrintBackendService_FetchCapabilities_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> FetchCapabilities (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 6: GetPaperPrintableArea
        try {
             decoder.decodeStruct(printing.mojom.PrintBackendService_GetPaperPrintableArea_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetPaperPrintableArea (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 7: EstablishPrintingContext
        try {
             decoder.decodeStruct(printing.mojom.PrintBackendService_EstablishPrintingContext_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> EstablishPrintingContext (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 8: UseDefaultSettings
        try {
             decoder.decodeStruct(printing.mojom.PrintBackendService_UseDefaultSettings_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UseDefaultSettings (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 9: AskUserForSettings
        try {
             decoder.decodeStruct(printing.mojom.PrintBackendService_AskUserForSettings_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AskUserForSettings (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 10: UpdatePrintSettings
        try {
             decoder.decodeStruct(printing.mojom.PrintBackendService_UpdatePrintSettings_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UpdatePrintSettings (10)');
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 11: StartPrinting
        try {
             decoder.decodeStruct(printing.mojom.PrintBackendService_StartPrinting_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> StartPrinting (11)');
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 12: RenderPrintedPage
        try {
             decoder.decodeStruct(printing.mojom.PrintBackendService_RenderPrintedPage_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RenderPrintedPage (12)');
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 13: RenderPrintedDocument
        try {
             decoder.decodeStruct(printing.mojom.PrintBackendService_RenderPrintedDocument_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RenderPrintedDocument (13)');
             this.mapOrdinal(header.ordinal, 13);
             dispatchId = 13;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 14: DocumentDone
        try {
             decoder.decodeStruct(printing.mojom.PrintBackendService_DocumentDone_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DocumentDone (14)');
             this.mapOrdinal(header.ordinal, 14);
             dispatchId = 14;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 15: Cancel
        try {
             decoder.decodeStruct(printing.mojom.PrintBackendService_Cancel_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Cancel (15)');
             this.mapOrdinal(header.ordinal, 15);
             dispatchId = 15;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 15: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(printing.mojom.PrintBackendService_Init_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.init');
          const result = this.impl.init(params.locale, params.remote);
          break;
        }
        case 15: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(printing.mojom.PrintBackendService_Poke_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.poke');
          const result = this.impl.poke();
          break;
        }
        case 15: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(printing.mojom.PrintBackendService_EnumeratePrinters_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.enumeratePrinters');
          const result = this.impl.enumeratePrinters();
          break;
        }
        case 15: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(printing.mojom.PrintBackendService_GetDefaultPrinterName_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getDefaultPrinterName');
          const result = this.impl.getDefaultPrinterName();
          break;
        }
        case 15: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(printing.mojom.PrintBackendService_GetPrinterSemanticCapsAndDefaults_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getPrinterSemanticCapsAndDefaults');
          const result = this.impl.getPrinterSemanticCapsAndDefaults(params.printer_name);
          break;
        }
        case 15: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(printing.mojom.PrintBackendService_FetchCapabilities_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.fetchCapabilities');
          const result = this.impl.fetchCapabilities(params.printer_name);
          break;
        }
        case 15: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(printing.mojom.PrintBackendService_GetPaperPrintableArea_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getPaperPrintableArea');
          const result = this.impl.getPaperPrintableArea(params.printer_name, params.media);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, printing.mojom.PrintBackendService_GetPaperPrintableArea_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 15: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(printing.mojom.PrintBackendService_EstablishPrintingContext_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.establishPrintingContext');
          const result = this.impl.establishPrintingContext(params.context_id, params.parent_window_id);
          break;
        }
        case 15: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(printing.mojom.PrintBackendService_UseDefaultSettings_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.useDefaultSettings');
          const result = this.impl.useDefaultSettings(params.context_id);
          break;
        }
        case 15: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(printing.mojom.PrintBackendService_AskUserForSettings_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.askUserForSettings');
          const result = this.impl.askUserForSettings(params.context_id, params.max_pages, params.has_selection, params.is_scripted);
          break;
        }
        case 15: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(printing.mojom.PrintBackendService_UpdatePrintSettings_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.updatePrintSettings');
          const result = this.impl.updatePrintSettings(params.context_id, params.job_settings);
          break;
        }
        case 15: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(printing.mojom.PrintBackendService_StartPrinting_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.startPrinting');
          const result = this.impl.startPrinting(params.context_id, params.document_cookie, params.document_name, params.settings);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, printing.mojom.PrintBackendService_StartPrinting_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 15: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(printing.mojom.PrintBackendService_RenderPrintedPage_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.renderPrintedPage');
          const result = this.impl.renderPrintedPage(params.document_cookie, params.page_index, params.page_data_type, params.serialized_page, params.page_size, params.page_content_rect, params.shrink_factor);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, printing.mojom.PrintBackendService_RenderPrintedPage_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 15: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(printing.mojom.PrintBackendService_RenderPrintedDocument_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.renderPrintedDocument');
          const result = this.impl.renderPrintedDocument(params.document_cookie, params.page_count, params.data_type, params.serialized_doc);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, printing.mojom.PrintBackendService_RenderPrintedDocument_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 15: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(printing.mojom.PrintBackendService_DocumentDone_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.documentDone');
          const result = this.impl.documentDone(params.document_cookie);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, printing.mojom.PrintBackendService_DocumentDone_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 15: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(printing.mojom.PrintBackendService_Cancel_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.cancel');
          const result = this.impl.cancel(params.document_cookie);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, printing.mojom.PrintBackendService_Cancel_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

printing.mojom.PrintBackendServiceReceiver = printing.mojom.PrintBackendServiceReceiver;

printing.mojom.PrintBackendServicePtr = printing.mojom.PrintBackendServiceRemote;
printing.mojom.PrintBackendServiceRequest = printing.mojom.PrintBackendServicePendingReceiver;

