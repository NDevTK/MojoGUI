// Auto-generated MojoJS binding
// Source: chromium_src/extensions/common/api/mime_handler.mojom
// Module: extensions.mime_handler

'use strict';

// Module namespace
var extensions = extensions || {};
extensions.mime_handler = extensions.mime_handler || {};


// Struct: StreamInfo
extensions.mime_handler.StreamInfoSpec = {
  $: {
    structSpec: {
      name: 'extensions.mime_handler.StreamInfo',
      packedSize: 56,
      fields: [
        { name: 'mime_type', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'original_url', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'stream_url', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'response_headers', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Map, nullable: false },
        { name: 'tab_id', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'embedded', packedOffset: 36, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: PdfPluginAttributes
extensions.mime_handler.PdfPluginAttributesSpec = {
  $: {
    structSpec: {
      name: 'extensions.mime_handler.PdfPluginAttributes',
      packedSize: 24,
      fields: [
        { name: 'background_color', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Double, nullable: false },
        { name: 'allow_javascript', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Interface: MimeHandlerService
extensions.mime_handler.MimeHandlerService = {};

extensions.mime_handler.MimeHandlerServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

extensions.mime_handler.MimeHandlerServiceRemote = class {
  static get $interfaceName() {
    return 'extensions.mime_handler.MimeHandlerService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      extensions.mime_handler.MimeHandlerServicePendingReceiver,
      handle);
    this.$ = new extensions.mime_handler.MimeHandlerServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

extensions.mime_handler.MimeHandlerServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getStreamInfo() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      extensions.mime_handler.MimeHandlerService_GetStreamInfo_ParamsSpec,
      extensions.mime_handler.MimeHandlerService_GetStreamInfo_ResponseParamsSpec,
      []);
  }

  setPdfPluginAttributes(pdf_plugin_attributes) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      extensions.mime_handler.MimeHandlerService_SetPdfPluginAttributes_ParamsSpec,
      null,
      [pdf_plugin_attributes]);
  }

};

extensions.mime_handler.MimeHandlerService.getRemote = function() {
  let remote = new extensions.mime_handler.MimeHandlerServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'extensions.mime_handler.MimeHandlerService',
    'context');
  return remote.$;
};

// ParamsSpec for GetStreamInfo
extensions.mime_handler.MimeHandlerService_GetStreamInfo_ParamsSpec = {
  $: {
    structSpec: {
      name: 'extensions.mime_handler.MimeHandlerService.GetStreamInfo_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

extensions.mime_handler.MimeHandlerService_GetStreamInfo_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'extensions.mime_handler.MimeHandlerService.GetStreamInfo_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'stream_info', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetPdfPluginAttributes
extensions.mime_handler.MimeHandlerService_SetPdfPluginAttributes_ParamsSpec = {
  $: {
    structSpec: {
      name: 'extensions.mime_handler.MimeHandlerService.SetPdfPluginAttributes_Params',
      packedSize: 16,
      fields: [
        { name: 'pdf_plugin_attributes', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
extensions.mime_handler.MimeHandlerServicePtr = extensions.mime_handler.MimeHandlerServiceRemote;
extensions.mime_handler.MimeHandlerServiceRequest = extensions.mime_handler.MimeHandlerServicePendingReceiver;


// Interface: BeforeUnloadControl
extensions.mime_handler.BeforeUnloadControl = {};

extensions.mime_handler.BeforeUnloadControlPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

extensions.mime_handler.BeforeUnloadControlRemote = class {
  static get $interfaceName() {
    return 'extensions.mime_handler.BeforeUnloadControl';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      extensions.mime_handler.BeforeUnloadControlPendingReceiver,
      handle);
    this.$ = new extensions.mime_handler.BeforeUnloadControlRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

extensions.mime_handler.BeforeUnloadControlRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  setShowBeforeUnloadDialog(show_dialog) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      extensions.mime_handler.BeforeUnloadControl_SetShowBeforeUnloadDialog_ParamsSpec,
      null,
      [show_dialog]);
  }

};

extensions.mime_handler.BeforeUnloadControl.getRemote = function() {
  let remote = new extensions.mime_handler.BeforeUnloadControlRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'extensions.mime_handler.BeforeUnloadControl',
    'context');
  return remote.$;
};

// ParamsSpec for SetShowBeforeUnloadDialog
extensions.mime_handler.BeforeUnloadControl_SetShowBeforeUnloadDialog_ParamsSpec = {
  $: {
    structSpec: {
      name: 'extensions.mime_handler.BeforeUnloadControl.SetShowBeforeUnloadDialog_Params',
      packedSize: 16,
      fields: [
        { name: 'show_dialog', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
extensions.mime_handler.BeforeUnloadControlPtr = extensions.mime_handler.BeforeUnloadControlRemote;
extensions.mime_handler.BeforeUnloadControlRequest = extensions.mime_handler.BeforeUnloadControlPendingReceiver;

