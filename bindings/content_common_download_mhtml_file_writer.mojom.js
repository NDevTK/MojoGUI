// Auto-generated MojoJS binding
// Source: chromium_src/content/common/download/mhtml_file_writer.mojom
// Module: content.mojom

'use strict';

// Module namespace
var content = content || {};
content.mojom = content.mojom || {};
var mojo_base = mojo_base || {};

content.mojom.MhtmlSaveStatusSpec = { $: mojo.internal.Enum() };
content.mojom.MhtmlOutputHandleSpec = { $: {} };
content.mojom.SerializeAsMHTMLParamsSpec = { $: {} };
content.mojom.MhtmlFileWriter = {};
content.mojom.MhtmlFileWriter.$interfaceName = 'content.mojom.MhtmlFileWriter';
content.mojom.MhtmlFileWriter_SerializeAsMHTML_ParamsSpec = { $: {} };
content.mojom.MhtmlFileWriter_SerializeAsMHTML_ResponseParamsSpec = { $: {} };

// Enum: MhtmlSaveStatus
content.mojom.MhtmlSaveStatus = {
  kSuccess: 0,
  kFileClosingError: 1,
  kFileCreationError: 2,
  kFileWritingError: 3,
  kFrameNoLongerExists: 4,
  kDeprecatedFrameSerializationForbidden: 5,
  kRenderProcessExited: 6,
  kStreamingError: 7,
};

// Union: MhtmlOutputHandle
mojo.internal.Union(
    content.mojom.MhtmlOutputHandleSpec, 'content.mojom.MhtmlOutputHandle', {
      'file_handle': {
        'ordinal': 0,
        'type': mojo_base.mojom.FileSpec.$,
        'nullable': false,
      },
      'producer_handle': {
        'ordinal': 1,
        'type': mojo.internal.Pointer,
        'nullable': false,
      },
    });

// Struct: SerializeAsMHTMLParams
mojo.internal.Struct(
    content.mojom.SerializeAsMHTMLParamsSpec, 'content.mojom.SerializeAsMHTMLParams', [
      mojo.internal.StructField('mhtml_boundary_marker', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('digests_of_uris_to_skip', 8, 0, mojo.internal.Array(mojo_base.mojom.ByteStringSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('salt', 16, 0, mojo_base.mojom.ByteStringSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('output_handle', 24, 0, content.mojom.MhtmlOutputHandleSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('mhtml_binary_encoding', 32, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('mhtml_popup_overlay_removal', 32, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 48]]);

// Interface: MhtmlFileWriter
mojo.internal.Struct(
    content.mojom.MhtmlFileWriter_SerializeAsMHTML_ParamsSpec, 'content.mojom.MhtmlFileWriter_SerializeAsMHTML_Params', [
      mojo.internal.StructField('params', 0, 0, content.mojom.SerializeAsMHTMLParamsSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.mojom.MhtmlFileWriter_SerializeAsMHTML_ResponseParamsSpec, 'content.mojom.MhtmlFileWriter_SerializeAsMHTML_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, content.mojom.MhtmlSaveStatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('digests_of_uris_to_skip', 8, 0, mojo.internal.Array(mojo_base.mojom.ByteStringSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

content.mojom.MhtmlFileWriterPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

content.mojom.MhtmlFileWriterRemote = class {
  static get $interfaceName() {
    return 'content.mojom.MhtmlFileWriter';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      content.mojom.MhtmlFileWriterPendingReceiver,
      handle);
    this.$ = new content.mojom.MhtmlFileWriterRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

content.mojom.MhtmlFileWriterRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  serializeAsMHTML(params) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      content.mojom.MhtmlFileWriter_SerializeAsMHTML_ParamsSpec,
      content.mojom.MhtmlFileWriter_SerializeAsMHTML_ResponseParamsSpec,
      [params],
      false);
  }

};

content.mojom.MhtmlFileWriter.getRemote = function() {
  let remote = new content.mojom.MhtmlFileWriterRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'content.mojom.MhtmlFileWriter',
    'context');
  return remote.$;
};

content.mojom.MhtmlFileWriterReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      console.log('[GeneratedReceiver] Args received:', args);
      const message = args[0];
      if (args.length > 1) { console.log('[GeneratedReceiver] 2nd Arg:', args[1]); }
      const header = message && message.header;
      if (!header) { console.warn('[GeneratedReceiver] No header in arg0'); }
      if (header) {
      console.log('[GeneratedReceiver] Header ordinal:', header.ordinal);
      switch (header.ordinal) {
        case 0: {
          const params = content.mojom.MhtmlFileWriter_SerializeAsMHTML_ParamsSpec.$.decode(message.payload);
          const result = this.impl.serializeAsMHTML(params.params);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, content.mojom.MhtmlFileWriter_SerializeAsMHTML_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
      }
    }});
  }
};

content.mojom.MhtmlFileWriterReceiver = content.mojom.MhtmlFileWriterReceiver;

content.mojom.MhtmlFileWriterPtr = content.mojom.MhtmlFileWriterRemote;
content.mojom.MhtmlFileWriterRequest = content.mojom.MhtmlFileWriterPendingReceiver;

