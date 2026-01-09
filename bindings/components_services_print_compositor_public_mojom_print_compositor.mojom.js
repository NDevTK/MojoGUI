// Auto-generated MojoJS binding
// Source: chromium_src/components/services/print_compositor/public/mojom/print_compositor.mojom
// Module: printing.mojom

'use strict';

// Module namespace
var printing = printing || {};
printing.mojom = printing.mojom || {};


// Enum: Status
printing.mojom.Status = {
};

// Enum: DocumentType
printing.mojom.DocumentType = {
};

// Interface: PrintCompositor
printing.mojom.PrintCompositorPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'printing.mojom.PrintCompositor';
  }

  notifyUnavailableSubframe(frame_guid) {
    // Method: NotifyUnavailableSubframe
    // Call: NotifyUnavailableSubframe(frame_guid)
  }

  addSubframeContent(frame_guid, serialized_content, subframe_content_info) {
    // Method: AddSubframeContent
    // Call: AddSubframeContent(frame_guid, serialized_content, subframe_content_info)
  }

  setAccessibilityTree(accessibility_tree) {
    // Method: SetAccessibilityTree
    // Call: SetAccessibilityTree(accessibility_tree)
  }

  compositePage(frame_guid, sk_region, subframe_content_info) {
    // Method: CompositePage
    return new Promise((resolve) => {
      // Call: CompositePage(frame_guid, sk_region, subframe_content_info)
      resolve({});
    });
  }

  compositeDocument(frame_guid, sk_region, subframe_content_info, document_type) {
    // Method: CompositeDocument
    return new Promise((resolve) => {
      // Call: CompositeDocument(frame_guid, sk_region, subframe_content_info, document_type)
      resolve({});
    });
  }

  prepareToCompositeDocument(document_type) {
    // Method: PrepareToCompositeDocument
    return new Promise((resolve) => {
      // Call: PrepareToCompositeDocument(document_type)
      resolve({});
    });
  }

  finishDocumentComposition(pages_count) {
    // Method: FinishDocumentComposition
    return new Promise((resolve) => {
      // Call: FinishDocumentComposition(pages_count)
      resolve({});
    });
  }

  setWebContentsURL(url) {
    // Method: SetWebContentsURL
    // Call: SetWebContentsURL(url)
  }

  setUserAgent(user_agent) {
    // Method: SetUserAgent
    // Call: SetUserAgent(user_agent)
  }

  setGenerateDocumentOutline(generate_document_outline) {
    // Method: SetGenerateDocumentOutline
    // Call: SetGenerateDocumentOutline(generate_document_outline)
  }

  setTitle(title) {
    // Method: SetTitle
    // Call: SetTitle(title)
  }

  setWatermarkBlock(watermark_block) {
    // Method: SetWatermarkBlock
    // Call: SetWatermarkBlock(watermark_block)
  }

};

printing.mojom.PrintCompositorRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
