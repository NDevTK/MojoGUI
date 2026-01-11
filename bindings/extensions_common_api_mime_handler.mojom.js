// Auto-generated MojoJS binding
// Source: chromium_src/extensions/common/api/mime_handler.mojom
// Module: extensions.mime_handler

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var extensions = extensions || {};
extensions.mime_handler = extensions.mime_handler || {};

extensions.mime_handler.StreamInfoSpec = { $: {} };
extensions.mime_handler.PdfPluginAttributesSpec = { $: {} };
extensions.mime_handler.MimeHandlerService = {};
extensions.mime_handler.MimeHandlerService.$interfaceName = 'extensions.mime_handler.MimeHandlerService';
extensions.mime_handler.MimeHandlerService_GetStreamInfo_ParamsSpec = { $: {} };
extensions.mime_handler.MimeHandlerService_GetStreamInfo_ResponseParamsSpec = { $: {} };
extensions.mime_handler.MimeHandlerService_SetPdfPluginAttributes_ParamsSpec = { $: {} };
extensions.mime_handler.BeforeUnloadControl = {};
extensions.mime_handler.BeforeUnloadControl.$interfaceName = 'extensions.mime_handler.BeforeUnloadControl';
extensions.mime_handler.BeforeUnloadControl_SetShowBeforeUnloadDialog_ParamsSpec = { $: {} };
extensions.mime_handler.BeforeUnloadControl_SetShowBeforeUnloadDialog_ResponseParamsSpec = { $: {} };

// Struct: StreamInfo
mojo.internal.Struct(
    extensions.mime_handler.StreamInfoSpec, 'extensions.mime_handler.StreamInfo', [
      mojo.internal.StructField('mime_type', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('original_url', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('stream_url', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('response_headers', 24, 0, mojo.internal.Map(mojo.internal.String, mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('tab_id', 32, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('embedded', 36, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 48]]);

// Struct: PdfPluginAttributes
mojo.internal.Struct(
    extensions.mime_handler.PdfPluginAttributesSpec, 'extensions.mime_handler.PdfPluginAttributes', [
      mojo.internal.StructField('background_color', 0, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('allow_javascript', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: MimeHandlerService
mojo.internal.Struct(
    extensions.mime_handler.MimeHandlerService_GetStreamInfo_ParamsSpec, 'extensions.mime_handler.MimeHandlerService_GetStreamInfo_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    extensions.mime_handler.MimeHandlerService_GetStreamInfo_ResponseParamsSpec, 'extensions.mime_handler.MimeHandlerService_GetStreamInfo_ResponseParams', [
      mojo.internal.StructField('stream_info', 0, 0, extensions.mime_handler.StreamInfoSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    extensions.mime_handler.MimeHandlerService_SetPdfPluginAttributes_ParamsSpec, 'extensions.mime_handler.MimeHandlerService_SetPdfPluginAttributes_Params', [
      mojo.internal.StructField('pdf_plugin_attributes', 0, 0, extensions.mime_handler.PdfPluginAttributesSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

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
  getStreamInfo() {
    return this.$.getStreamInfo();
  }
  setPdfPluginAttributes(pdf_plugin_attributes) {
    return this.$.setPdfPluginAttributes(pdf_plugin_attributes);
  }
};

extensions.mime_handler.MimeHandlerServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('MimeHandlerService', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  getStreamInfo() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      extensions.mime_handler.MimeHandlerService_GetStreamInfo_ParamsSpec,
      extensions.mime_handler.MimeHandlerService_GetStreamInfo_ResponseParamsSpec,
      [],
      false);
  }

  setPdfPluginAttributes(pdf_plugin_attributes) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      extensions.mime_handler.MimeHandlerService_SetPdfPluginAttributes_ParamsSpec,
      null,
      [pdf_plugin_attributes],
      false);
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

extensions.mime_handler.MimeHandlerServiceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('MimeHandlerService', [
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
        message = {{ header: args[1], payload: payload, handles: args[3] || [] }};
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(extensions.mime_handler.MimeHandlerService_GetStreamInfo_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(extensions.mime_handler.MimeHandlerService_SetPdfPluginAttributes_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(extensions.mime_handler.MimeHandlerService_GetStreamInfo_ParamsSpec.$.structSpec);
          const result = this.impl.getStreamInfo();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, extensions.mime_handler.MimeHandlerService_GetStreamInfo_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(extensions.mime_handler.MimeHandlerService_SetPdfPluginAttributes_ParamsSpec.$.structSpec);
          const result = this.impl.setPdfPluginAttributes(params.pdf_plugin_attributes);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

extensions.mime_handler.MimeHandlerServiceReceiver = extensions.mime_handler.MimeHandlerServiceReceiver;

extensions.mime_handler.MimeHandlerServicePtr = extensions.mime_handler.MimeHandlerServiceRemote;
extensions.mime_handler.MimeHandlerServiceRequest = extensions.mime_handler.MimeHandlerServicePendingReceiver;


// Interface: BeforeUnloadControl
mojo.internal.Struct(
    extensions.mime_handler.BeforeUnloadControl_SetShowBeforeUnloadDialog_ParamsSpec, 'extensions.mime_handler.BeforeUnloadControl_SetShowBeforeUnloadDialog_Params', [
      mojo.internal.StructField('show_dialog', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    extensions.mime_handler.BeforeUnloadControl_SetShowBeforeUnloadDialog_ResponseParamsSpec, 'extensions.mime_handler.BeforeUnloadControl_SetShowBeforeUnloadDialog_ResponseParams', [
    ],
    [[0, 8]]);

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
  setShowBeforeUnloadDialog(show_dialog) {
    return this.$.setShowBeforeUnloadDialog(show_dialog);
  }
};

extensions.mime_handler.BeforeUnloadControlRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('BeforeUnloadControl', [
      { explicit: null },
    ]);
  }

  setShowBeforeUnloadDialog(show_dialog) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      extensions.mime_handler.BeforeUnloadControl_SetShowBeforeUnloadDialog_ParamsSpec,
      extensions.mime_handler.BeforeUnloadControl_SetShowBeforeUnloadDialog_ResponseParamsSpec,
      [show_dialog],
      false);
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

extensions.mime_handler.BeforeUnloadControlReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('BeforeUnloadControl', [
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
        message = {{ header: args[1], payload: payload, handles: args[3] || [] }};
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(extensions.mime_handler.BeforeUnloadControl_SetShowBeforeUnloadDialog_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(extensions.mime_handler.BeforeUnloadControl_SetShowBeforeUnloadDialog_ParamsSpec.$.structSpec);
          const result = this.impl.setShowBeforeUnloadDialog(params.show_dialog);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, extensions.mime_handler.BeforeUnloadControl_SetShowBeforeUnloadDialog_ResponseParamsSpec);
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

extensions.mime_handler.BeforeUnloadControlReceiver = extensions.mime_handler.BeforeUnloadControlReceiver;

extensions.mime_handler.BeforeUnloadControlPtr = extensions.mime_handler.BeforeUnloadControlRemote;
extensions.mime_handler.BeforeUnloadControlRequest = extensions.mime_handler.BeforeUnloadControlPendingReceiver;

