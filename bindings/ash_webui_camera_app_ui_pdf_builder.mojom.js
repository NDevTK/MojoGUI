// Auto-generated MojoJS binding
// Source: chromium_src/ash/webui/camera_app_ui/pdf_builder.mojom
// Module: ash.camera_app.mojom

// Module namespace
var ash = ash || {};
ash.camera_app = ash.camera_app || {};
ash.camera_app.mojom = ash.camera_app.mojom || {};
var mojo_base = mojo_base || {};

ash.camera_app.mojom.PdfBuilder = {};
ash.camera_app.mojom.PdfBuilder.$interfaceName = 'ash.camera_app.mojom.PdfBuilder';
ash.camera_app.mojom.PdfBuilder_AddPage_ParamsSpec = { $: {} };
ash.camera_app.mojom.PdfBuilder_AddPageInline_ParamsSpec = { $: {} };
ash.camera_app.mojom.PdfBuilder_DeletePage_ParamsSpec = { $: {} };
ash.camera_app.mojom.PdfBuilder_Save_ParamsSpec = { $: {} };
ash.camera_app.mojom.PdfBuilder_Save_ResponseParamsSpec = { $: {} };
ash.camera_app.mojom.PdfBuilder_SaveInline_ParamsSpec = { $: {} };
ash.camera_app.mojom.PdfBuilder_SaveInline_ResponseParamsSpec = { $: {} };

// Interface: PdfBuilder
mojo.internal.Struct(
    ash.camera_app.mojom.PdfBuilder_AddPage_ParamsSpec, 'ash.camera_app.mojom.PdfBuilder_AddPage_Params', [
      mojo.internal.StructField('jpeg', 0, 0, mojo_base.mojom.BigBufferSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('page_index', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    ash.camera_app.mojom.PdfBuilder_AddPageInline_ParamsSpec, 'ash.camera_app.mojom.PdfBuilder_AddPageInline_Params', [
      mojo.internal.StructField('jpeg', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('page_index', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    ash.camera_app.mojom.PdfBuilder_DeletePage_ParamsSpec, 'ash.camera_app.mojom.PdfBuilder_DeletePage_Params', [
      mojo.internal.StructField('page_index', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.camera_app.mojom.PdfBuilder_Save_ParamsSpec, 'ash.camera_app.mojom.PdfBuilder_Save_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.camera_app.mojom.PdfBuilder_Save_ResponseParamsSpec, 'ash.camera_app.mojom.PdfBuilder_Save_ResponseParams', [
      mojo.internal.StructField('pdf', 0, 0, mojo_base.mojom.BigBufferSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.camera_app.mojom.PdfBuilder_SaveInline_ParamsSpec, 'ash.camera_app.mojom.PdfBuilder_SaveInline_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.camera_app.mojom.PdfBuilder_SaveInline_ResponseParamsSpec, 'ash.camera_app.mojom.PdfBuilder_SaveInline_ResponseParams', [
      mojo.internal.StructField('pdf', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

ash.camera_app.mojom.PdfBuilderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.camera_app.mojom.PdfBuilderRemote = class {
  static get $interfaceName() {
    return 'ash.camera_app.mojom.PdfBuilder';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.camera_app.mojom.PdfBuilderPendingReceiver,
      handle);
    this.$ = new ash.camera_app.mojom.PdfBuilderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  addPage(jpeg, page_index) {
    return this.$.addPage(jpeg, page_index);
  }
  addPageInline(jpeg, page_index) {
    return this.$.addPageInline(jpeg, page_index);
  }
  deletePage(page_index) {
    return this.$.deletePage(page_index);
  }
  save() {
    return this.$.save();
  }
  saveInline() {
    return this.$.saveInline();
  }
};

ash.camera_app.mojom.PdfBuilderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('PdfBuilder', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  addPage(jpeg, page_index) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      ash.camera_app.mojom.PdfBuilder_AddPage_ParamsSpec,
      null,
      [jpeg, page_index],
      false);
  }

  addPageInline(jpeg, page_index) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      ash.camera_app.mojom.PdfBuilder_AddPageInline_ParamsSpec,
      null,
      [jpeg, page_index],
      false);
  }

  deletePage(page_index) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      ash.camera_app.mojom.PdfBuilder_DeletePage_ParamsSpec,
      null,
      [page_index],
      false);
  }

  save() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      ash.camera_app.mojom.PdfBuilder_Save_ParamsSpec,
      ash.camera_app.mojom.PdfBuilder_Save_ResponseParamsSpec,
      [],
      false);
  }

  saveInline() {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      ash.camera_app.mojom.PdfBuilder_SaveInline_ParamsSpec,
      ash.camera_app.mojom.PdfBuilder_SaveInline_ResponseParamsSpec,
      [],
      false);
  }

};

ash.camera_app.mojom.PdfBuilder.getRemote = function() {
  let remote = new ash.camera_app.mojom.PdfBuilderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.camera_app.mojom.PdfBuilder',
    'context');
  return remote.$;
};

ash.camera_app.mojom.PdfBuilderReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('PdfBuilder', [
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
             decoder.decodeStructInline(ash.camera_app.mojom.PdfBuilder_AddPage_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.camera_app.mojom.PdfBuilder_AddPageInline_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.camera_app.mojom.PdfBuilder_DeletePage_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.camera_app.mojom.PdfBuilder_Save_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.camera_app.mojom.PdfBuilder_SaveInline_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.camera_app.mojom.PdfBuilder_AddPage_ParamsSpec.$.structSpec);
          const result = this.impl.addPage(params.jpeg, params.page_index);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.camera_app.mojom.PdfBuilder_AddPageInline_ParamsSpec.$.structSpec);
          const result = this.impl.addPageInline(params.jpeg, params.page_index);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.camera_app.mojom.PdfBuilder_DeletePage_ParamsSpec.$.structSpec);
          const result = this.impl.deletePage(params.page_index);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.camera_app.mojom.PdfBuilder_Save_ParamsSpec.$.structSpec);
          const result = this.impl.save();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.camera_app.mojom.PdfBuilder_Save_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.camera_app.mojom.PdfBuilder_SaveInline_ParamsSpec.$.structSpec);
          const result = this.impl.saveInline();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.camera_app.mojom.PdfBuilder_SaveInline_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

ash.camera_app.mojom.PdfBuilderReceiver = ash.camera_app.mojom.PdfBuilderReceiver;

ash.camera_app.mojom.PdfBuilderPtr = ash.camera_app.mojom.PdfBuilderRemote;
ash.camera_app.mojom.PdfBuilderRequest = ash.camera_app.mojom.PdfBuilderPendingReceiver;

