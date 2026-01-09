// Auto-generated MojoJS binding
// Source: chromium_src/ash/webui/camera_app_ui/pdf_builder.mojom
// Module: ash.camera_app.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.camera_app = ash.camera_app || {};
ash.camera_app.mojom = ash.camera_app.mojom || {};


// Interface: PdfBuilder
ash.camera_app.mojom.PdfBuilder = {};

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

// ParamsSpec for AddPage
ash.camera_app.mojom.PdfBuilder_AddPage_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.camera_app.mojom.PdfBuilder.AddPage_Params',
      packedSize: 24,
      fields: [
        { name: 'jpeg', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.BigBufferSpec, nullable: false },
        { name: 'page_index', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for AddPageInline
ash.camera_app.mojom.PdfBuilder_AddPageInline_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.camera_app.mojom.PdfBuilder.AddPageInline_Params',
      packedSize: 24,
      fields: [
        { name: 'jpeg', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'page_index', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for DeletePage
ash.camera_app.mojom.PdfBuilder_DeletePage_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.camera_app.mojom.PdfBuilder.DeletePage_Params',
      packedSize: 16,
      fields: [
        { name: 'page_index', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for Save
ash.camera_app.mojom.PdfBuilder_Save_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.camera_app.mojom.PdfBuilder.Save_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

ash.camera_app.mojom.PdfBuilder_Save_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.camera_app.mojom.PdfBuilder.Save_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'pdf', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.BigBufferSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SaveInline
ash.camera_app.mojom.PdfBuilder_SaveInline_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.camera_app.mojom.PdfBuilder.SaveInline_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

ash.camera_app.mojom.PdfBuilder_SaveInline_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.camera_app.mojom.PdfBuilder.SaveInline_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'pdf', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
ash.camera_app.mojom.PdfBuilderPtr = ash.camera_app.mojom.PdfBuilderRemote;
ash.camera_app.mojom.PdfBuilderRequest = ash.camera_app.mojom.PdfBuilderPendingReceiver;

