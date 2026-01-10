// Auto-generated MojoJS binding
// Source: chromium_src/components/services/print_compositor/public/mojom/print_compositor.mojom
// Module: printing.mojom

'use strict';

// Module namespace
var printing = printing || {};
printing.mojom = printing.mojom || {};


// Enum: Status
printing.mojom.Status = {
  kSuccess: 0,
  kHandleMapError: 1,
  kContentFormatError: 2,
  kCompositingFailure: 3,
};
printing.mojom.StatusSpec = { $: mojo.internal.Enum() };

// Enum: DocumentType
printing.mojom.DocumentType = {
  kPDF: 0,
  kXPS: 1,
};
printing.mojom.DocumentTypeSpec = { $: mojo.internal.Enum() };

// Interface: PrintCompositor
printing.mojom.PrintCompositor = {};

printing.mojom.PrintCompositorPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

printing.mojom.PrintCompositorRemote = class {
  static get $interfaceName() {
    return 'printing.mojom.PrintCompositor';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      printing.mojom.PrintCompositorPendingReceiver,
      handle);
    this.$ = new printing.mojom.PrintCompositorRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

printing.mojom.PrintCompositorRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  notifyUnavailableSubframe(frame_guid) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      printing.mojom.PrintCompositor_NotifyUnavailableSubframe_ParamsSpec,
      null,
      [frame_guid]);
  }

  addSubframeContent(frame_guid, serialized_content, subframe_content_info) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      printing.mojom.PrintCompositor_AddSubframeContent_ParamsSpec,
      null,
      [frame_guid, serialized_content, subframe_content_info]);
  }

  setAccessibilityTree(accessibility_tree) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      printing.mojom.PrintCompositor_SetAccessibilityTree_ParamsSpec,
      null,
      [accessibility_tree]);
  }

  compositePage(frame_guid, sk_region, subframe_content_info) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      printing.mojom.PrintCompositor_CompositePage_ParamsSpec,
      printing.mojom.PrintCompositor_CompositePage_ResponseParamsSpec,
      [frame_guid, sk_region, subframe_content_info]);
  }

  compositeDocument(frame_guid, sk_region, subframe_content_info, document_type) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      printing.mojom.PrintCompositor_CompositeDocument_ParamsSpec,
      printing.mojom.PrintCompositor_CompositeDocument_ResponseParamsSpec,
      [frame_guid, sk_region, subframe_content_info, document_type]);
  }

  prepareToCompositeDocument(document_type) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      printing.mojom.PrintCompositor_PrepareToCompositeDocument_ParamsSpec,
      printing.mojom.PrintCompositor_PrepareToCompositeDocument_ResponseParamsSpec,
      [document_type]);
  }

  finishDocumentComposition(pages_count) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      printing.mojom.PrintCompositor_FinishDocumentComposition_ParamsSpec,
      printing.mojom.PrintCompositor_FinishDocumentComposition_ResponseParamsSpec,
      [pages_count]);
  }

  setWebContentsURL(url) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      printing.mojom.PrintCompositor_SetWebContentsURL_ParamsSpec,
      null,
      [url]);
  }

  setUserAgent(user_agent) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      printing.mojom.PrintCompositor_SetUserAgent_ParamsSpec,
      null,
      [user_agent]);
  }

  setGenerateDocumentOutline(generate_document_outline) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      printing.mojom.PrintCompositor_SetGenerateDocumentOutline_ParamsSpec,
      null,
      [generate_document_outline]);
  }

  setTitle(title) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      printing.mojom.PrintCompositor_SetTitle_ParamsSpec,
      null,
      [title]);
  }

  setWatermarkBlock(watermark_block) {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      printing.mojom.PrintCompositor_SetWatermarkBlock_ParamsSpec,
      null,
      [watermark_block]);
  }

};

printing.mojom.PrintCompositor.getRemote = function() {
  let remote = new printing.mojom.PrintCompositorRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'printing.mojom.PrintCompositor',
    'context');
  return remote.$;
};

// ParamsSpec for NotifyUnavailableSubframe
printing.mojom.PrintCompositor_NotifyUnavailableSubframe_ParamsSpec = {
  $: {
    structSpec: {
      name: 'printing.mojom.PrintCompositor.NotifyUnavailableSubframe_Params',
      packedSize: 16,
      fields: [
        { name: 'frame_guid', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for AddSubframeContent
printing.mojom.PrintCompositor_AddSubframeContent_ParamsSpec = {
  $: {
    structSpec: {
      name: 'printing.mojom.PrintCompositor.AddSubframeContent_Params',
      packedSize: 32,
      fields: [
        { name: 'frame_guid', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
        { name: 'serialized_content', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.ReadOnlySharedMemoryRegionSpec, nullable: false, minVersion: 0 },
        { name: 'subframe_content_info', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Map(mojo.internal.Uint32, mojo.internal.Uint64, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// ParamsSpec for SetAccessibilityTree
printing.mojom.PrintCompositor_SetAccessibilityTree_ParamsSpec = {
  $: {
    structSpec: {
      name: 'printing.mojom.PrintCompositor.SetAccessibilityTree_Params',
      packedSize: 16,
      fields: [
        { name: 'accessibility_tree', packedOffset: 0, packedBitOffset: 0, type: ax.mojom.AXTreeUpdateSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for CompositePage
printing.mojom.PrintCompositor_CompositePage_ParamsSpec = {
  $: {
    structSpec: {
      name: 'printing.mojom.PrintCompositor.CompositePage_Params',
      packedSize: 32,
      fields: [
        { name: 'frame_guid', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
        { name: 'sk_region', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.ReadOnlySharedMemoryRegionSpec, nullable: false, minVersion: 0 },
        { name: 'subframe_content_info', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Map(mojo.internal.Uint32, mojo.internal.Uint64, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

printing.mojom.PrintCompositor_CompositePage_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'printing.mojom.PrintCompositor.CompositePage_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: printing.mojom.StatusSpec, nullable: false, minVersion: 0 },
        { name: 'document_region', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.ReadOnlySharedMemoryRegionSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for CompositeDocument
printing.mojom.PrintCompositor_CompositeDocument_ParamsSpec = {
  $: {
    structSpec: {
      name: 'printing.mojom.PrintCompositor.CompositeDocument_Params',
      packedSize: 40,
      fields: [
        { name: 'frame_guid', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
        { name: 'sk_region', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.ReadOnlySharedMemoryRegionSpec, nullable: false, minVersion: 0 },
        { name: 'subframe_content_info', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Map(mojo.internal.Uint32, mojo.internal.Uint64, false), nullable: false, minVersion: 0 },
        { name: 'document_type', packedOffset: 24, packedBitOffset: 0, type: printing.mojom.DocumentTypeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

printing.mojom.PrintCompositor_CompositeDocument_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'printing.mojom.PrintCompositor.CompositeDocument_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: printing.mojom.StatusSpec, nullable: false, minVersion: 0 },
        { name: 'document_region', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.ReadOnlySharedMemoryRegionSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for PrepareToCompositeDocument
printing.mojom.PrintCompositor_PrepareToCompositeDocument_ParamsSpec = {
  $: {
    structSpec: {
      name: 'printing.mojom.PrintCompositor.PrepareToCompositeDocument_Params',
      packedSize: 16,
      fields: [
        { name: 'document_type', packedOffset: 0, packedBitOffset: 0, type: printing.mojom.DocumentTypeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

printing.mojom.PrintCompositor_PrepareToCompositeDocument_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'printing.mojom.PrintCompositor.PrepareToCompositeDocument_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: printing.mojom.StatusSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for FinishDocumentComposition
printing.mojom.PrintCompositor_FinishDocumentComposition_ParamsSpec = {
  $: {
    structSpec: {
      name: 'printing.mojom.PrintCompositor.FinishDocumentComposition_Params',
      packedSize: 16,
      fields: [
        { name: 'pages_count', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

printing.mojom.PrintCompositor_FinishDocumentComposition_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'printing.mojom.PrintCompositor.FinishDocumentComposition_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: printing.mojom.StatusSpec, nullable: false, minVersion: 0 },
        { name: 'document_region', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.ReadOnlySharedMemoryRegionSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for SetWebContentsURL
printing.mojom.PrintCompositor_SetWebContentsURL_ParamsSpec = {
  $: {
    structSpec: {
      name: 'printing.mojom.PrintCompositor.SetWebContentsURL_Params',
      packedSize: 16,
      fields: [
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetUserAgent
printing.mojom.PrintCompositor_SetUserAgent_ParamsSpec = {
  $: {
    structSpec: {
      name: 'printing.mojom.PrintCompositor.SetUserAgent_Params',
      packedSize: 16,
      fields: [
        { name: 'user_agent', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetGenerateDocumentOutline
printing.mojom.PrintCompositor_SetGenerateDocumentOutline_ParamsSpec = {
  $: {
    structSpec: {
      name: 'printing.mojom.PrintCompositor.SetGenerateDocumentOutline_Params',
      packedSize: 16,
      fields: [
        { name: 'generate_document_outline', packedOffset: 0, packedBitOffset: 0, type: printing.mojom.GenerateDocumentOutlineSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetTitle
printing.mojom.PrintCompositor_SetTitle_ParamsSpec = {
  $: {
    structSpec: {
      name: 'printing.mojom.PrintCompositor.SetTitle_Params',
      packedSize: 16,
      fields: [
        { name: 'title', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetWatermarkBlock
printing.mojom.PrintCompositor_SetWatermarkBlock_ParamsSpec = {
  $: {
    structSpec: {
      name: 'printing.mojom.PrintCompositor.SetWatermarkBlock_Params',
      packedSize: 16,
      fields: [
        { name: 'watermark_block', packedOffset: 0, packedBitOffset: 0, type: watermark.mojom.WatermarkBlockSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
printing.mojom.PrintCompositorPtr = printing.mojom.PrintCompositorRemote;
printing.mojom.PrintCompositorRequest = printing.mojom.PrintCompositorPendingReceiver;

