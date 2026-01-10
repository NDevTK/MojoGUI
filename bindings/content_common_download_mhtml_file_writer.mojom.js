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
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
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
        message = {
          header: args[1],
          payload: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: SerializeAsMHTML
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(content.mojom.MhtmlFileWriter_SerializeAsMHTML_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SerializeAsMHTML (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) { /* Ignore mismatch */ }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(content.mojom.MhtmlFileWriter_SerializeAsMHTML_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.serializeAsMHTML');
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
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

content.mojom.MhtmlFileWriterReceiver = content.mojom.MhtmlFileWriterReceiver;

content.mojom.MhtmlFileWriterPtr = content.mojom.MhtmlFileWriterRemote;
content.mojom.MhtmlFileWriterRequest = content.mojom.MhtmlFileWriterPendingReceiver;

