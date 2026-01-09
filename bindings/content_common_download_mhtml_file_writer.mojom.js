// Auto-generated MojoJS binding
// Source: chromium_src/content/common/download/mhtml_file_writer.mojom
// Module: content.mojom

'use strict';

// Module namespace
var content = content || {};
content.mojom = content.mojom || {};


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

// Struct: SerializeAsMHTMLParams
content.mojom.SerializeAsMHTMLParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.SerializeAsMHTMLParams',
      packedSize: 48,
      fields: [
        { name: 'mhtml_boundary_marker', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'mhtml_binary_encoding', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'mhtml_popup_overlay_removal', packedOffset: 8, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
        { name: 'digests_of_uris_to_skip', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'salt', packedOffset: 24, packedBitOffset: 0, type: mojo_base.mojom.ByteStringSpec, nullable: false },
        { name: 'output_handle', packedOffset: 32, packedBitOffset: 0, type: content.mojom.MhtmlOutputHandleSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Interface: MhtmlFileWriter
content.mojom.MhtmlFileWriter = {};

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
      [params]);
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

// ParamsSpec for SerializeAsMHTML
content.mojom.MhtmlFileWriter_SerializeAsMHTML_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.MhtmlFileWriter.SerializeAsMHTML_Params',
      packedSize: 16,
      fields: [
        { name: 'params', packedOffset: 0, packedBitOffset: 0, type: content.mojom.SerializeAsMHTMLParamsSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

content.mojom.MhtmlFileWriter_SerializeAsMHTML_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.MhtmlFileWriter.SerializeAsMHTML_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: content.mojom.MhtmlSaveStatusSpec, nullable: false },
        { name: 'digests_of_uris_to_skip', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
content.mojom.MhtmlFileWriterPtr = content.mojom.MhtmlFileWriterRemote;
content.mojom.MhtmlFileWriterRequest = content.mojom.MhtmlFileWriterPendingReceiver;

