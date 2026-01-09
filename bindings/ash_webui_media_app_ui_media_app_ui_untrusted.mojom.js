// Auto-generated MojoJS binding
// Source: chromium_src/ash/webui/media_app_ui/media_app_ui_untrusted.mojom
// Module: ash.media_app_ui.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.media_app_ui = ash.media_app_ui || {};
ash.media_app_ui.mojom = ash.media_app_ui.mojom || {};


// Struct: PageMetadata
ash.media_app_ui.mojom.PageMetadata = class {
  constructor(values = {}) {
    this.rect = values.rect !== undefined ? values.rect : "";
  }
};

// Interface: UntrustedServiceFactory
ash.media_app_ui.mojom.UntrustedServiceFactoryPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.media_app_ui.mojom.UntrustedServiceFactory';
  }

  createOcrUntrustedService(receiver, page) {
    // Method: CreateOcrUntrustedService
    // Call: CreateOcrUntrustedService(receiver, page)
  }

  createMahiUntrustedService(receiver, page, file_name) {
    // Method: CreateMahiUntrustedService
    // Call: CreateMahiUntrustedService(receiver, page, file_name)
  }

  isMantisAvailable() {
    // Method: IsMantisAvailable
    return new Promise((resolve) => {
      // Call: IsMantisAvailable()
      resolve({});
    });
  }

  createMantisUntrustedService(page, dlc_uuid) {
    // Method: CreateMantisUntrustedService
    return new Promise((resolve) => {
      // Call: CreateMantisUntrustedService(page, dlc_uuid)
      resolve({});
    });
  }

};

ash.media_app_ui.mojom.UntrustedServiceFactoryRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: OcrUntrustedService
ash.media_app_ui.mojom.OcrUntrustedServicePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.media_app_ui.mojom.OcrUntrustedService';
  }

  pageMetadataUpdated(page_metadata) {
    // Method: PageMetadataUpdated
    // Call: PageMetadataUpdated(page_metadata)
  }

  pageContentsUpdated(dirty_page_id) {
    // Method: PageContentsUpdated
    // Call: PageContentsUpdated(dirty_page_id)
  }

  viewportUpdated(viewport_box, scale_factor) {
    // Method: ViewportUpdated
    // Call: ViewportUpdated(viewport_box, scale_factor)
  }

};

ash.media_app_ui.mojom.OcrUntrustedServiceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: OcrUntrustedPage
ash.media_app_ui.mojom.OcrUntrustedPagePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.media_app_ui.mojom.OcrUntrustedPage';
  }

  requestBitmap(requestedPageId) {
    // Method: RequestBitmap
    return new Promise((resolve) => {
      // Call: RequestBitmap(requestedPageId)
      resolve({});
    });
  }

  setViewport(viewport_box) {
    // Method: SetViewport
    // Call: SetViewport(viewport_box)
  }

  setPdfOcrEnabled(enabled) {
    // Method: SetPdfOcrEnabled
    // Call: SetPdfOcrEnabled(enabled)
  }

};

ash.media_app_ui.mojom.OcrUntrustedPageRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: MahiUntrustedService
ash.media_app_ui.mojom.MahiUntrustedServicePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.media_app_ui.mojom.MahiUntrustedService';
  }

  onPdfLoaded() {
    // Method: OnPdfLoaded
    // Call: OnPdfLoaded()
  }

  onPdfFileNameUpdated(new_name) {
    // Method: OnPdfFileNameUpdated
    // Call: OnPdfFileNameUpdated(new_name)
  }

  onPdfContextMenuShow(anchor, selected_text) {
    // Method: OnPdfContextMenuShow
    // Call: OnPdfContextMenuShow(anchor, selected_text)
  }

  onPdfContextMenuHide() {
    // Method: OnPdfContextMenuHide
    // Call: OnPdfContextMenuHide()
  }

};

ash.media_app_ui.mojom.MahiUntrustedServiceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: MahiUntrustedPage
ash.media_app_ui.mojom.MahiUntrustedPagePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.media_app_ui.mojom.MahiUntrustedPage';
  }

  hidePdfContextMenu() {
    // Method: HidePdfContextMenu
    // Call: HidePdfContextMenu()
  }

  getPdfContent(limit) {
    // Method: GetPdfContent
    return new Promise((resolve) => {
      // Call: GetPdfContent(limit)
      resolve({});
    });
  }

};

ash.media_app_ui.mojom.MahiUntrustedPageRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: MantisUntrustedService
ash.media_app_ui.mojom.MantisUntrustedServicePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.media_app_ui.mojom.MantisUntrustedService';
  }

  segmentImage(image, selection) {
    // Method: SegmentImage
    return new Promise((resolve) => {
      // Call: SegmentImage(image, selection)
      resolve({});
    });
  }

  generativeFillImage(image, mask, text, seed) {
    // Method: GenerativeFillImage
    return new Promise((resolve) => {
      // Call: GenerativeFillImage(image, mask, text, seed)
      resolve({});
    });
  }

  inpaintImage(image, mask, seed) {
    // Method: InpaintImage
    return new Promise((resolve) => {
      // Call: InpaintImage(image, mask, seed)
      resolve({});
    });
  }

  outpaintImage(image, mask, seed) {
    // Method: OutpaintImage
    return new Promise((resolve) => {
      // Call: OutpaintImage(image, mask, seed)
      resolve({});
    });
  }

  classifyImageSafety(image) {
    // Method: ClassifyImageSafety
    return new Promise((resolve) => {
      // Call: ClassifyImageSafety(image)
      resolve({});
    });
  }

  inferSegmentationMode(gesture) {
    // Method: InferSegmentationMode
    return new Promise((resolve) => {
      // Call: InferSegmentationMode(gesture)
      resolve({});
    });
  }

};

ash.media_app_ui.mojom.MantisUntrustedServiceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: MantisUntrustedPage
ash.media_app_ui.mojom.MantisUntrustedPagePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.media_app_ui.mojom.MantisUntrustedPage';
  }

  reportMantisProgress(progress) {
    // Method: ReportMantisProgress
    // Call: ReportMantisProgress(progress)
  }

};

ash.media_app_ui.mojom.MantisUntrustedPageRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
