// Auto-generated MojoJS binding
// Source: chromium_src/ash/webui/camera_app_ui/pdf_builder.mojom
// Module: ash.camera_app.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.camera_app = ash.camera_app || {};
ash.camera_app.mojom = ash.camera_app.mojom || {};

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
      mojo.internal.StructField('jpeg', 0, 0, mojo_base.mojom.BigBufferSpec, null, false, 0, undefined),
      mojo.internal.StructField('page_index', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

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
      mojo.internal.StructField('pdf', 0, 0, mojo_base.mojom.BigBufferSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

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
      [jpeg, page_index]);
  }

  addPageInline(jpeg, page_index) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.camera_app.mojom.PdfBuilder_AddPageInline_ParamsSpec,
      null,
      [jpeg, page_index]);
  }

  deletePage(page_index) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.camera_app.mojom.PdfBuilder_DeletePage_ParamsSpec,
      null,
      [page_index]);
  }

  save() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      ash.camera_app.mojom.PdfBuilder_Save_ParamsSpec,
      ash.camera_app.mojom.PdfBuilder_Save_ResponseParamsSpec,
      []);
  }

  saveInline() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      ash.camera_app.mojom.PdfBuilder_SaveInline_ParamsSpec,
      ash.camera_app.mojom.PdfBuilder_SaveInline_ResponseParamsSpec,
      []);
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

ash.camera_app.mojom.PdfBuilderPtr = ash.camera_app.mojom.PdfBuilderRemote;
ash.camera_app.mojom.PdfBuilderRequest = ash.camera_app.mojom.PdfBuilderPendingReceiver;

