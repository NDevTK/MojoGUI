// Auto-generated MojoJS binding
// Source: chromium_src/pdf/mojom/pdf.mojom
// Module: pdf.mojom

'use strict';

// Module namespace
var pdf = pdf || {};
pdf.mojom = pdf.mojom || {};


// Enum: SaveRequestType
pdf.mojom.SaveRequestType = {
  kAnnotation: 0,
  kOriginal: 1,
  kEdited: 2,
  kSearchified: 3,
};

// Enum: GetPdfBytesStatus
pdf.mojom.GetPdfBytesStatus = {
  kSuccess: 0,
  kSizeLimitExceeded: 1,
  kFailed: 2,
};

// Struct: SaveDataBufferHandlerGetResult
pdf.mojom.SaveDataBufferHandlerGetResult = class {
  constructor(values = {}) {
    this.total_file_size = values.total_file_size !== undefined ? values.total_file_size : 0;
  }
};

// Interface: SaveDataBufferHandler
pdf.mojom.SaveDataBufferHandlerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'pdf.mojom.SaveDataBufferHandler';
  }

  read(offset, block_size) {
    // Method: Read
    return new Promise((resolve) => {
      // Call: Read(offset, block_size)
      resolve({});
    });
  }

};

pdf.mojom.SaveDataBufferHandlerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: PdfListener
pdf.mojom.PdfListenerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'pdf.mojom.PdfListener';
  }

  setCaretPosition(position) {
    // Method: SetCaretPosition
    // Call: SetCaretPosition(position)
  }

  moveRangeSelectionExtent(extent) {
    // Method: MoveRangeSelectionExtent
    // Call: MoveRangeSelectionExtent(extent)
  }

  setSelectionBounds(base, extent) {
    // Method: SetSelectionBounds
    // Call: SetSelectionBounds(base, extent)
  }

  getPdfBytes(size_limit) {
    // Method: GetPdfBytes
    return new Promise((resolve) => {
      // Call: GetPdfBytes(size_limit)
      resolve({});
    });
  }

  getPageText(page_index) {
    // Method: GetPageText
    return new Promise((resolve) => {
      // Call: GetPageText(page_index)
      resolve({});
    });
  }

  getMostVisiblePageIndex() {
    // Method: GetMostVisiblePageIndex
    return new Promise((resolve) => {
      // Call: GetMostVisiblePageIndex()
      resolve({});
    });
  }

  getSaveDataBufferHandlerForDrive(request_type) {
    // Method: GetSaveDataBufferHandlerForDrive
    return new Promise((resolve) => {
      // Call: GetSaveDataBufferHandlerForDrive(request_type)
      resolve({});
    });
  }

};

pdf.mojom.PdfListenerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: PdfHost
pdf.mojom.PdfHostPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'pdf.mojom.PdfHost';
  }

  setListener(client) {
    // Method: SetListener
    // Call: SetListener(client)
  }

  onDocumentLoadComplete() {
    // Method: OnDocumentLoadComplete
    // Call: OnDocumentLoadComplete()
  }

  updateContentRestrictions(restrictions) {
    // Method: UpdateContentRestrictions
    // Call: UpdateContentRestrictions(restrictions)
  }

  saveUrlAs(url, policy) {
    // Method: SaveUrlAs
    // Call: SaveUrlAs(url, policy)
  }

  selectionChanged(left, left_height, right, right_height) {
    // Method: SelectionChanged
    // Call: SelectionChanged(left, left_height, right, right_height)
  }

  setPluginCanSave(can_save) {
    // Method: SetPluginCanSave
    // Call: SetPluginCanSave(can_save)
  }

  onSearchifyStarted() {
    // Method: OnSearchifyStarted
    // Call: OnSearchifyStarted()
  }

};

pdf.mojom.PdfHostRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
