// Auto-generated MojoJS binding
// Source: chromium_src/ash/webui/camera_app_ui/pdf_builder.mojom
// Module: ash.camera_app.mojom

'use strict';

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
};

ash.camera_app.mojom.PdfBuilderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  addPage(jpeg, page_index) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.camera_app.mojom.PdfBuilder_AddPage_ParamsSpec,
      null,
      [jpeg, page_index],
      false);
  }

  addPageInline(jpeg, page_index) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.camera_app.mojom.PdfBuilder_AddPageInline_ParamsSpec,
      null,
      [jpeg, page_index],
      false);
  }

  deletePage(page_index) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.camera_app.mojom.PdfBuilder_DeletePage_ParamsSpec,
      null,
      [page_index],
      false);
  }

  save() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      ash.camera_app.mojom.PdfBuilder_Save_ParamsSpec,
      ash.camera_app.mojom.PdfBuilder_Save_ResponseParamsSpec,
      [],
      false);
  }

  saveInline() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
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
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
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
        let payload = args[2];
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      switch (header.ordinal) {
        case 0: {
          const params = ash.camera_app.mojom.PdfBuilder_AddPage_ParamsSpec.$.decode(message.payload);
          console.log('[GeneratedReceiver] Calling impl.addPage');
          const result = this.impl.addPage(params.jpeg, params.page_index);
          break;
        }
        case 1: {
          const params = ash.camera_app.mojom.PdfBuilder_AddPageInline_ParamsSpec.$.decode(message.payload);
          console.log('[GeneratedReceiver] Calling impl.addPageInline');
          const result = this.impl.addPageInline(params.jpeg, params.page_index);
          break;
        }
        case 2: {
          const params = ash.camera_app.mojom.PdfBuilder_DeletePage_ParamsSpec.$.decode(message.payload);
          console.log('[GeneratedReceiver] Calling impl.deletePage');
          const result = this.impl.deletePage(params.page_index);
          break;
        }
        case 3: {
          const params = ash.camera_app.mojom.PdfBuilder_Save_ParamsSpec.$.decode(message.payload);
          console.log('[GeneratedReceiver] Calling impl.save');
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
          const params = ash.camera_app.mojom.PdfBuilder_SaveInline_ParamsSpec.$.decode(message.payload);
          console.log('[GeneratedReceiver] Calling impl.saveInline');
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
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

ash.camera_app.mojom.PdfBuilderReceiver = ash.camera_app.mojom.PdfBuilderReceiver;

ash.camera_app.mojom.PdfBuilderPtr = ash.camera_app.mojom.PdfBuilderRemote;
ash.camera_app.mojom.PdfBuilderRequest = ash.camera_app.mojom.PdfBuilderPendingReceiver;

