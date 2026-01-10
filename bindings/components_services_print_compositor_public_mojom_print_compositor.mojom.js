// Auto-generated MojoJS binding
// Source: chromium_src/components/services/print_compositor/public/mojom/print_compositor.mojom
// Module: printing.mojom

'use strict';

// Module namespace
var printing = printing || {};
printing.mojom = printing.mojom || {};
var mojo_base = mojo_base || {};
var sandbox = sandbox || {};
var ax = ax || {};
var url = url || {};
var watermark = watermark || {};

printing.mojom.StatusSpec = { $: mojo.internal.Enum() };
printing.mojom.DocumentTypeSpec = { $: mojo.internal.Enum() };
printing.mojom.PrintCompositor = {};
printing.mojom.PrintCompositor.$interfaceName = 'printing.mojom.PrintCompositor';
printing.mojom.PrintCompositor_NotifyUnavailableSubframe_ParamsSpec = { $: {} };
printing.mojom.PrintCompositor_AddSubframeContent_ParamsSpec = { $: {} };
printing.mojom.PrintCompositor_SetAccessibilityTree_ParamsSpec = { $: {} };
printing.mojom.PrintCompositor_CompositePage_ParamsSpec = { $: {} };
printing.mojom.PrintCompositor_CompositePage_ResponseParamsSpec = { $: {} };
printing.mojom.PrintCompositor_CompositeDocument_ParamsSpec = { $: {} };
printing.mojom.PrintCompositor_CompositeDocument_ResponseParamsSpec = { $: {} };
printing.mojom.PrintCompositor_PrepareToCompositeDocument_ParamsSpec = { $: {} };
printing.mojom.PrintCompositor_PrepareToCompositeDocument_ResponseParamsSpec = { $: {} };
printing.mojom.PrintCompositor_FinishDocumentComposition_ParamsSpec = { $: {} };
printing.mojom.PrintCompositor_FinishDocumentComposition_ResponseParamsSpec = { $: {} };
printing.mojom.PrintCompositor_SetWebContentsURL_ParamsSpec = { $: {} };
printing.mojom.PrintCompositor_SetUserAgent_ParamsSpec = { $: {} };
printing.mojom.PrintCompositor_SetGenerateDocumentOutline_ParamsSpec = { $: {} };
printing.mojom.PrintCompositor_SetTitle_ParamsSpec = { $: {} };
printing.mojom.PrintCompositor_SetWatermarkBlock_ParamsSpec = { $: {} };

// Enum: Status
printing.mojom.Status = {
  kSuccess: 0,
  kHandleMapError: 1,
  kContentFormatError: 2,
  kCompositingFailure: 3,
};

// Enum: DocumentType
printing.mojom.DocumentType = {
  kPDF: 0,
  kXPS: 1,
};

// Interface: PrintCompositor
mojo.internal.Struct(
    printing.mojom.PrintCompositor_NotifyUnavailableSubframe_ParamsSpec, 'printing.mojom.PrintCompositor_NotifyUnavailableSubframe_Params', [
      mojo.internal.StructField('frame_guid', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    printing.mojom.PrintCompositor_AddSubframeContent_ParamsSpec, 'printing.mojom.PrintCompositor_AddSubframeContent_Params', [
      mojo.internal.StructField('frame_guid', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('serialized_content', 8, 0, mojo_base.mojom.ReadOnlySharedMemoryRegionSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('subframe_content_info', 16, 0, mojo.internal.Map(mojo.internal.Uint32, mojo.internal.Uint64, false), null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    printing.mojom.PrintCompositor_SetAccessibilityTree_ParamsSpec, 'printing.mojom.PrintCompositor_SetAccessibilityTree_Params', [
      mojo.internal.StructField('accessibility_tree', 0, 0, ax.mojom.AXTreeUpdateSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    printing.mojom.PrintCompositor_CompositePage_ParamsSpec, 'printing.mojom.PrintCompositor_CompositePage_Params', [
      mojo.internal.StructField('frame_guid', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('sk_region', 8, 0, mojo_base.mojom.ReadOnlySharedMemoryRegionSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('subframe_content_info', 16, 0, mojo.internal.Map(mojo.internal.Uint32, mojo.internal.Uint64, false), null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    printing.mojom.PrintCompositor_CompositePage_ResponseParamsSpec, 'printing.mojom.PrintCompositor_CompositePage_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, printing.mojom.StatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('document_region', 8, 0, mojo_base.mojom.ReadOnlySharedMemoryRegionSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    printing.mojom.PrintCompositor_CompositeDocument_ParamsSpec, 'printing.mojom.PrintCompositor_CompositeDocument_Params', [
      mojo.internal.StructField('frame_guid', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('sk_region', 8, 0, mojo_base.mojom.ReadOnlySharedMemoryRegionSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('subframe_content_info', 16, 0, mojo.internal.Map(mojo.internal.Uint32, mojo.internal.Uint64, false), null, false, 0, undefined),
      mojo.internal.StructField('document_type', 24, 0, printing.mojom.DocumentTypeSpec.$, null, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    printing.mojom.PrintCompositor_CompositeDocument_ResponseParamsSpec, 'printing.mojom.PrintCompositor_CompositeDocument_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, printing.mojom.StatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('document_region', 8, 0, mojo_base.mojom.ReadOnlySharedMemoryRegionSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    printing.mojom.PrintCompositor_PrepareToCompositeDocument_ParamsSpec, 'printing.mojom.PrintCompositor_PrepareToCompositeDocument_Params', [
      mojo.internal.StructField('document_type', 0, 0, printing.mojom.DocumentTypeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    printing.mojom.PrintCompositor_PrepareToCompositeDocument_ResponseParamsSpec, 'printing.mojom.PrintCompositor_PrepareToCompositeDocument_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, printing.mojom.StatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    printing.mojom.PrintCompositor_FinishDocumentComposition_ParamsSpec, 'printing.mojom.PrintCompositor_FinishDocumentComposition_Params', [
      mojo.internal.StructField('pages_count', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    printing.mojom.PrintCompositor_FinishDocumentComposition_ResponseParamsSpec, 'printing.mojom.PrintCompositor_FinishDocumentComposition_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, printing.mojom.StatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('document_region', 8, 0, mojo_base.mojom.ReadOnlySharedMemoryRegionSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    printing.mojom.PrintCompositor_SetWebContentsURL_ParamsSpec, 'printing.mojom.PrintCompositor_SetWebContentsURL_Params', [
      mojo.internal.StructField('url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    printing.mojom.PrintCompositor_SetUserAgent_ParamsSpec, 'printing.mojom.PrintCompositor_SetUserAgent_Params', [
      mojo.internal.StructField('user_agent', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    printing.mojom.PrintCompositor_SetGenerateDocumentOutline_ParamsSpec, 'printing.mojom.PrintCompositor_SetGenerateDocumentOutline_Params', [
      mojo.internal.StructField('generate_document_outline', 0, 0, printing.mojom.GenerateDocumentOutlineSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    printing.mojom.PrintCompositor_SetTitle_ParamsSpec, 'printing.mojom.PrintCompositor_SetTitle_Params', [
      mojo.internal.StructField('title', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    printing.mojom.PrintCompositor_SetWatermarkBlock_ParamsSpec, 'printing.mojom.PrintCompositor_SetWatermarkBlock_Params', [
      mojo.internal.StructField('watermark_block', 0, 0, watermark.mojom.WatermarkBlockSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

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
      [frame_guid],
      false);
  }

  addSubframeContent(frame_guid, serialized_content, subframe_content_info) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      printing.mojom.PrintCompositor_AddSubframeContent_ParamsSpec,
      null,
      [frame_guid, serialized_content, subframe_content_info],
      false);
  }

  setAccessibilityTree(accessibility_tree) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      printing.mojom.PrintCompositor_SetAccessibilityTree_ParamsSpec,
      null,
      [accessibility_tree],
      false);
  }

  compositePage(frame_guid, sk_region, subframe_content_info) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      printing.mojom.PrintCompositor_CompositePage_ParamsSpec,
      printing.mojom.PrintCompositor_CompositePage_ResponseParamsSpec,
      [frame_guid, sk_region, subframe_content_info],
      false);
  }

  compositeDocument(frame_guid, sk_region, subframe_content_info, document_type) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      printing.mojom.PrintCompositor_CompositeDocument_ParamsSpec,
      printing.mojom.PrintCompositor_CompositeDocument_ResponseParamsSpec,
      [frame_guid, sk_region, subframe_content_info, document_type],
      false);
  }

  prepareToCompositeDocument(document_type) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      printing.mojom.PrintCompositor_PrepareToCompositeDocument_ParamsSpec,
      printing.mojom.PrintCompositor_PrepareToCompositeDocument_ResponseParamsSpec,
      [document_type],
      false);
  }

  finishDocumentComposition(pages_count) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      printing.mojom.PrintCompositor_FinishDocumentComposition_ParamsSpec,
      printing.mojom.PrintCompositor_FinishDocumentComposition_ResponseParamsSpec,
      [pages_count],
      false);
  }

  setWebContentsURL(url) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      printing.mojom.PrintCompositor_SetWebContentsURL_ParamsSpec,
      null,
      [url],
      false);
  }

  setUserAgent(user_agent) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      printing.mojom.PrintCompositor_SetUserAgent_ParamsSpec,
      null,
      [user_agent],
      false);
  }

  setGenerateDocumentOutline(generate_document_outline) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      printing.mojom.PrintCompositor_SetGenerateDocumentOutline_ParamsSpec,
      null,
      [generate_document_outline],
      false);
  }

  setTitle(title) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      printing.mojom.PrintCompositor_SetTitle_ParamsSpec,
      null,
      [title],
      false);
  }

  setWatermarkBlock(watermark_block) {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      printing.mojom.PrintCompositor_SetWatermarkBlock_ParamsSpec,
      null,
      [watermark_block],
      false);
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

printing.mojom.PrintCompositorReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(handle);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = printing.mojom.PrintCompositor_NotifyUnavailableSubframe_ParamsSpec.$.decode(message.payload);
          const result = this.impl.notifyUnavailableSubframe(params.frame_guid);
          break;
        }
        case 1: {
          const params = printing.mojom.PrintCompositor_AddSubframeContent_ParamsSpec.$.decode(message.payload);
          const result = this.impl.addSubframeContent(params.frame_guid, params.serialized_content, params.subframe_content_info);
          break;
        }
        case 2: {
          const params = printing.mojom.PrintCompositor_SetAccessibilityTree_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setAccessibilityTree(params.accessibility_tree);
          break;
        }
        case 3: {
          const params = printing.mojom.PrintCompositor_CompositePage_ParamsSpec.$.decode(message.payload);
          const result = this.impl.compositePage(params.frame_guid, params.sk_region, params.subframe_content_info);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, printing.mojom.PrintCompositor_CompositePage_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 4: {
          const params = printing.mojom.PrintCompositor_CompositeDocument_ParamsSpec.$.decode(message.payload);
          const result = this.impl.compositeDocument(params.frame_guid, params.sk_region, params.subframe_content_info, params.document_type);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, printing.mojom.PrintCompositor_CompositeDocument_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 5: {
          const params = printing.mojom.PrintCompositor_PrepareToCompositeDocument_ParamsSpec.$.decode(message.payload);
          const result = this.impl.prepareToCompositeDocument(params.document_type);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, printing.mojom.PrintCompositor_PrepareToCompositeDocument_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 6: {
          const params = printing.mojom.PrintCompositor_FinishDocumentComposition_ParamsSpec.$.decode(message.payload);
          const result = this.impl.finishDocumentComposition(params.pages_count);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, printing.mojom.PrintCompositor_FinishDocumentComposition_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 7: {
          const params = printing.mojom.PrintCompositor_SetWebContentsURL_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setWebContentsURL(params.url);
          break;
        }
        case 8: {
          const params = printing.mojom.PrintCompositor_SetUserAgent_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setUserAgent(params.user_agent);
          break;
        }
        case 9: {
          const params = printing.mojom.PrintCompositor_SetGenerateDocumentOutline_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setGenerateDocumentOutline(params.generate_document_outline);
          break;
        }
        case 10: {
          const params = printing.mojom.PrintCompositor_SetTitle_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setTitle(params.title);
          break;
        }
        case 11: {
          const params = printing.mojom.PrintCompositor_SetWatermarkBlock_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setWatermarkBlock(params.watermark_block);
          break;
        }
      }
    });
  }
};

printing.mojom.PrintCompositorReceiver = printing.mojom.PrintCompositorReceiver;

printing.mojom.PrintCompositorPtr = printing.mojom.PrintCompositorRemote;
printing.mojom.PrintCompositorRequest = printing.mojom.PrintCompositorPendingReceiver;

