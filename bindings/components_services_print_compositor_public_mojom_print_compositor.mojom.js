// Auto-generated MojoJS binding
// Source: chromium_src/components/services/print_compositor/public/mojom/print_compositor.mojom
// Module: printing.mojom

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
  notifyUnavailableSubframe(frame_guid) {
    return this.$.notifyUnavailableSubframe(frame_guid);
  }
  addSubframeContent(frame_guid, serialized_content, subframe_content_info) {
    return this.$.addSubframeContent(frame_guid, serialized_content, subframe_content_info);
  }
  setAccessibilityTree(accessibility_tree) {
    return this.$.setAccessibilityTree(accessibility_tree);
  }
  compositePage(frame_guid, sk_region, subframe_content_info) {
    return this.$.compositePage(frame_guid, sk_region, subframe_content_info);
  }
  compositeDocument(frame_guid, sk_region, subframe_content_info, document_type) {
    return this.$.compositeDocument(frame_guid, sk_region, subframe_content_info, document_type);
  }
  prepareToCompositeDocument(document_type) {
    return this.$.prepareToCompositeDocument(document_type);
  }
  finishDocumentComposition(pages_count) {
    return this.$.finishDocumentComposition(pages_count);
  }
  setWebContentsURL(url) {
    return this.$.setWebContentsURL(url);
  }
  setUserAgent(user_agent) {
    return this.$.setUserAgent(user_agent);
  }
  setGenerateDocumentOutline(generate_document_outline) {
    return this.$.setGenerateDocumentOutline(generate_document_outline);
  }
  setTitle(title) {
    return this.$.setTitle(title);
  }
  setWatermarkBlock(watermark_block) {
    return this.$.setWatermarkBlock(watermark_block);
  }
};

printing.mojom.PrintCompositorRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('PrintCompositor', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  notifyUnavailableSubframe(frame_guid) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      printing.mojom.PrintCompositor_NotifyUnavailableSubframe_ParamsSpec,
      null,
      [frame_guid],
      false);
  }

  addSubframeContent(frame_guid, serialized_content, subframe_content_info) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      printing.mojom.PrintCompositor_AddSubframeContent_ParamsSpec,
      null,
      [frame_guid, serialized_content, subframe_content_info],
      false);
  }

  setAccessibilityTree(accessibility_tree) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      printing.mojom.PrintCompositor_SetAccessibilityTree_ParamsSpec,
      null,
      [accessibility_tree],
      false);
  }

  compositePage(frame_guid, sk_region, subframe_content_info) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      printing.mojom.PrintCompositor_CompositePage_ParamsSpec,
      printing.mojom.PrintCompositor_CompositePage_ResponseParamsSpec,
      [frame_guid, sk_region, subframe_content_info],
      false);
  }

  compositeDocument(frame_guid, sk_region, subframe_content_info, document_type) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      printing.mojom.PrintCompositor_CompositeDocument_ParamsSpec,
      printing.mojom.PrintCompositor_CompositeDocument_ResponseParamsSpec,
      [frame_guid, sk_region, subframe_content_info, document_type],
      false);
  }

  prepareToCompositeDocument(document_type) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      printing.mojom.PrintCompositor_PrepareToCompositeDocument_ParamsSpec,
      printing.mojom.PrintCompositor_PrepareToCompositeDocument_ResponseParamsSpec,
      [document_type],
      false);
  }

  finishDocumentComposition(pages_count) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      printing.mojom.PrintCompositor_FinishDocumentComposition_ParamsSpec,
      printing.mojom.PrintCompositor_FinishDocumentComposition_ResponseParamsSpec,
      [pages_count],
      false);
  }

  setWebContentsURL(url) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      printing.mojom.PrintCompositor_SetWebContentsURL_ParamsSpec,
      null,
      [url],
      false);
  }

  setUserAgent(user_agent) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      printing.mojom.PrintCompositor_SetUserAgent_ParamsSpec,
      null,
      [user_agent],
      false);
  }

  setGenerateDocumentOutline(generate_document_outline) {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      printing.mojom.PrintCompositor_SetGenerateDocumentOutline_ParamsSpec,
      null,
      [generate_document_outline],
      false);
  }

  setTitle(title) {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      printing.mojom.PrintCompositor_SetTitle_ParamsSpec,
      null,
      [title],
      false);
  }

  setWatermarkBlock(watermark_block) {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
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
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('PrintCompositor', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    if (this.router_.onConnectionError) {
      this.router_.onConnectionError.addListener(() => {
         console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
      });
    }
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(printing.mojom.PrintCompositor_NotifyUnavailableSubframe_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(printing.mojom.PrintCompositor_AddSubframeContent_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(printing.mojom.PrintCompositor_SetAccessibilityTree_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(printing.mojom.PrintCompositor_CompositePage_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(printing.mojom.PrintCompositor_CompositeDocument_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(printing.mojom.PrintCompositor_PrepareToCompositeDocument_ParamsSpec);
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(printing.mojom.PrintCompositor_FinishDocumentComposition_ParamsSpec);
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(printing.mojom.PrintCompositor_SetWebContentsURL_ParamsSpec);
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(printing.mojom.PrintCompositor_SetUserAgent_ParamsSpec);
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(printing.mojom.PrintCompositor_SetGenerateDocumentOutline_ParamsSpec);
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(printing.mojom.PrintCompositor_SetTitle_ParamsSpec);
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(printing.mojom.PrintCompositor_SetWatermarkBlock_ParamsSpec);
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(printing.mojom.PrintCompositor_NotifyUnavailableSubframe_ParamsSpec.$.structSpec);
          const result = this.impl.notifyUnavailableSubframe(params.frame_guid);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(printing.mojom.PrintCompositor_AddSubframeContent_ParamsSpec.$.structSpec);
          const result = this.impl.addSubframeContent(params.frame_guid, params.serialized_content, params.subframe_content_info);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(printing.mojom.PrintCompositor_SetAccessibilityTree_ParamsSpec.$.structSpec);
          const result = this.impl.setAccessibilityTree(params.accessibility_tree);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(printing.mojom.PrintCompositor_CompositePage_ParamsSpec.$.structSpec);
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
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(printing.mojom.PrintCompositor_CompositeDocument_ParamsSpec.$.structSpec);
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
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(printing.mojom.PrintCompositor_PrepareToCompositeDocument_ParamsSpec.$.structSpec);
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
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(printing.mojom.PrintCompositor_FinishDocumentComposition_ParamsSpec.$.structSpec);
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
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(printing.mojom.PrintCompositor_SetWebContentsURL_ParamsSpec.$.structSpec);
          const result = this.impl.setWebContentsURL(params.url);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(printing.mojom.PrintCompositor_SetUserAgent_ParamsSpec.$.structSpec);
          const result = this.impl.setUserAgent(params.user_agent);
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(printing.mojom.PrintCompositor_SetGenerateDocumentOutline_ParamsSpec.$.structSpec);
          const result = this.impl.setGenerateDocumentOutline(params.generate_document_outline);
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(printing.mojom.PrintCompositor_SetTitle_ParamsSpec.$.structSpec);
          const result = this.impl.setTitle(params.title);
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(printing.mojom.PrintCompositor_SetWatermarkBlock_ParamsSpec.$.structSpec);
          const result = this.impl.setWatermarkBlock(params.watermark_block);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

printing.mojom.PrintCompositorReceiver = printing.mojom.PrintCompositorReceiver;

printing.mojom.PrintCompositorPtr = printing.mojom.PrintCompositorRemote;
printing.mojom.PrintCompositorRequest = printing.mojom.PrintCompositorPendingReceiver;

