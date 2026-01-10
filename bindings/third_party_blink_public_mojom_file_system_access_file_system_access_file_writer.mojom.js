// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/file_system_access/file_system_access_file_writer.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};

blink.mojom.FileSystemAccessFileWriter = {};
blink.mojom.FileSystemAccessFileWriter.$interfaceName = 'blink.mojom.FileSystemAccessFileWriter';
blink.mojom.FileSystemAccessFileWriter_Write_ParamsSpec = { $: {} };
blink.mojom.FileSystemAccessFileWriter_Write_ResponseParamsSpec = { $: {} };
blink.mojom.FileSystemAccessFileWriter_Truncate_ParamsSpec = { $: {} };
blink.mojom.FileSystemAccessFileWriter_Truncate_ResponseParamsSpec = { $: {} };
blink.mojom.FileSystemAccessFileWriter_Close_ParamsSpec = { $: {} };
blink.mojom.FileSystemAccessFileWriter_Close_ResponseParamsSpec = { $: {} };
blink.mojom.FileSystemAccessFileWriter_Abort_ParamsSpec = { $: {} };
blink.mojom.FileSystemAccessFileWriter_Abort_ResponseParamsSpec = { $: {} };

// Interface: FileSystemAccessFileWriter
mojo.internal.Struct(
    blink.mojom.FileSystemAccessFileWriter_Write_ParamsSpec, 'blink.mojom.FileSystemAccessFileWriter_Write_Params', [
      mojo.internal.StructField('offset', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('stream', 8, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.FileSystemAccessFileWriter_Write_ResponseParamsSpec, 'blink.mojom.FileSystemAccessFileWriter_Write_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, blink.mojom.FileSystemAccessErrorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('bytes_written', 8, 0, mojo.internal.Uint64, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.FileSystemAccessFileWriter_Truncate_ParamsSpec, 'blink.mojom.FileSystemAccessFileWriter_Truncate_Params', [
      mojo.internal.StructField('length', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.FileSystemAccessFileWriter_Truncate_ResponseParamsSpec, 'blink.mojom.FileSystemAccessFileWriter_Truncate_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, blink.mojom.FileSystemAccessErrorSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.FileSystemAccessFileWriter_Close_ParamsSpec, 'blink.mojom.FileSystemAccessFileWriter_Close_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.FileSystemAccessFileWriter_Close_ResponseParamsSpec, 'blink.mojom.FileSystemAccessFileWriter_Close_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, blink.mojom.FileSystemAccessErrorSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.FileSystemAccessFileWriter_Abort_ParamsSpec, 'blink.mojom.FileSystemAccessFileWriter_Abort_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.FileSystemAccessFileWriter_Abort_ResponseParamsSpec, 'blink.mojom.FileSystemAccessFileWriter_Abort_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, blink.mojom.FileSystemAccessErrorSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

blink.mojom.FileSystemAccessFileWriterPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.FileSystemAccessFileWriterRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.FileSystemAccessFileWriter';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.FileSystemAccessFileWriterPendingReceiver,
      handle);
    this.$ = new blink.mojom.FileSystemAccessFileWriterRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.FileSystemAccessFileWriterRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  write(offset, stream) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.FileSystemAccessFileWriter_Write_ParamsSpec,
      blink.mojom.FileSystemAccessFileWriter_Write_ResponseParamsSpec,
      [offset, stream],
      false);
  }

  truncate(length) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.FileSystemAccessFileWriter_Truncate_ParamsSpec,
      blink.mojom.FileSystemAccessFileWriter_Truncate_ResponseParamsSpec,
      [length],
      false);
  }

  close() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.FileSystemAccessFileWriter_Close_ParamsSpec,
      blink.mojom.FileSystemAccessFileWriter_Close_ResponseParamsSpec,
      [],
      false);
  }

  abort() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      blink.mojom.FileSystemAccessFileWriter_Abort_ParamsSpec,
      blink.mojom.FileSystemAccessFileWriter_Abort_ResponseParamsSpec,
      [],
      false);
  }

};

blink.mojom.FileSystemAccessFileWriter.getRemote = function() {
  let remote = new blink.mojom.FileSystemAccessFileWriterRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.FileSystemAccessFileWriter',
    'context');
  return remote.$;
};

blink.mojom.FileSystemAccessFileWriterReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (message) => {
      console.log('[GeneratedReceiver] Message received', message);
      const header = message.header;
      if (!header) { console.warn('[GeneratedReceiver] No header'); return; }
      console.log('[GeneratedReceiver] Header ordinal:', header.ordinal);
      switch (header.ordinal) {
        case 0: {
          const params = blink.mojom.FileSystemAccessFileWriter_Write_ParamsSpec.$.decode(message.payload);
          const result = this.impl.write(params.offset, params.stream);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.FileSystemAccessFileWriter_Write_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const params = blink.mojom.FileSystemAccessFileWriter_Truncate_ParamsSpec.$.decode(message.payload);
          const result = this.impl.truncate(params.length);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.FileSystemAccessFileWriter_Truncate_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const params = blink.mojom.FileSystemAccessFileWriter_Close_ParamsSpec.$.decode(message.payload);
          const result = this.impl.close();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.FileSystemAccessFileWriter_Close_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const params = blink.mojom.FileSystemAccessFileWriter_Abort_ParamsSpec.$.decode(message.payload);
          const result = this.impl.abort();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.FileSystemAccessFileWriter_Abort_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
    }});
  }
};

blink.mojom.FileSystemAccessFileWriterReceiver = blink.mojom.FileSystemAccessFileWriterReceiver;

blink.mojom.FileSystemAccessFileWriterPtr = blink.mojom.FileSystemAccessFileWriterRemote;
blink.mojom.FileSystemAccessFileWriterRequest = blink.mojom.FileSystemAccessFileWriterPendingReceiver;

