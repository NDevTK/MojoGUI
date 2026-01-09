// Auto-generated MojoJS binding
// Source: chromium_src/chrome/services/printing/public/mojom/print_backend_service.mojom
// Module: printing.mojom

'use strict';

// Module namespace
var printing = printing || {};
printing.mojom = printing.mojom || {};


// Struct: PrinterCapsAndInfo
printing.mojom.PrinterCapsAndInfo = class {
  constructor(values = {}) {
    this.printer_caps = values.printer_caps !== undefined ? values.printer_caps : 0;
  }
};

// Interface: UnsandboxedPrintBackendHost
printing.mojom.UnsandboxedPrintBackendHostPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'printing.mojom.UnsandboxedPrintBackendHost';
  }

  bindBackend(service) {
    // Method: BindBackend
    // Call: BindBackend(service)
  }

};

printing.mojom.UnsandboxedPrintBackendHostRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: SandboxedPrintBackendHost
printing.mojom.SandboxedPrintBackendHostPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'printing.mojom.SandboxedPrintBackendHost';
  }

  bindBackend(service) {
    // Method: BindBackend
    // Call: BindBackend(service)
  }

};

printing.mojom.SandboxedPrintBackendHostRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: PrintBackendService
printing.mojom.PrintBackendServicePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'printing.mojom.PrintBackendService';
  }

  init(locale, remote) {
    // Method: Init
    // Call: Init(locale, remote)
  }

  poke() {
    // Method: Poke
    // Call: Poke()
  }

  enumeratePrinters() {
    // Method: EnumeratePrinters
    // Call: EnumeratePrinters()
  }

  getDefaultPrinterName() {
    // Method: GetDefaultPrinterName
    // Call: GetDefaultPrinterName()
  }

  getPrinterSemanticCapsAndDefaults(printer_name) {
    // Method: GetPrinterSemanticCapsAndDefaults
    // Call: GetPrinterSemanticCapsAndDefaults(printer_name)
  }

  fetchCapabilities(printer_name) {
    // Method: FetchCapabilities
    // Call: FetchCapabilities(printer_name)
  }

  getPaperPrintableArea(printer_name, media) {
    // Method: GetPaperPrintableArea
    return new Promise((resolve) => {
      // Call: GetPaperPrintableArea(printer_name, media)
      resolve({});
    });
  }

  establishPrintingContext(context_id, parent_window_id) {
    // Method: EstablishPrintingContext
    // Call: EstablishPrintingContext(context_id, parent_window_id)
  }

  useDefaultSettings(context_id) {
    // Method: UseDefaultSettings
    // Call: UseDefaultSettings(context_id)
  }

  askUserForSettings(context_id, max_pages, has_selection, is_scripted) {
    // Method: AskUserForSettings
    // Call: AskUserForSettings(context_id, max_pages, has_selection, is_scripted)
  }

  updatePrintSettings(context_id, job_settings) {
    // Method: UpdatePrintSettings
    // Call: UpdatePrintSettings(context_id, job_settings)
  }

  startPrinting(context_id, document_cookie, document_name, settings) {
    // Method: StartPrinting
    return new Promise((resolve) => {
      // Call: StartPrinting(context_id, document_cookie, document_name, settings)
      resolve({});
    });
  }

  renderPrintedPage(document_cookie, page_index, page_data_type, serialized_page, page_size, page_content_rect, shrink_factor) {
    // Method: RenderPrintedPage
    return new Promise((resolve) => {
      // Call: RenderPrintedPage(document_cookie, page_index, page_data_type, serialized_page, page_size, page_content_rect, shrink_factor)
      resolve({});
    });
  }

  renderPrintedDocument(document_cookie, page_count, data_type, serialized_doc) {
    // Method: RenderPrintedDocument
    return new Promise((resolve) => {
      // Call: RenderPrintedDocument(document_cookie, page_count, data_type, serialized_doc)
      resolve({});
    });
  }

  documentDone(document_cookie) {
    // Method: DocumentDone
    return new Promise((resolve) => {
      // Call: DocumentDone(document_cookie)
      resolve({});
    });
  }

  cancel(document_cookie) {
    // Method: Cancel
    // Call: Cancel(document_cookie)
  }

};

printing.mojom.PrintBackendServiceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
