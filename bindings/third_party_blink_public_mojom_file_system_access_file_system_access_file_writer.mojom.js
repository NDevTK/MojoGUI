// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/file_system_access/file_system_access_file_writer.mojom
// Module: blink.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

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
  write(offset, stream) {
    return this.$.write(offset, stream);
  }
  truncate(length) {
    return this.$.truncate(length);
  }
  close() {
    return this.$.close();
  }
  abort() {
    return this.$.abort();
  }
};

blink.mojom.FileSystemAccessFileWriterRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('FileSystemAccessFileWriter', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  write(offset, stream) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      blink.mojom.FileSystemAccessFileWriter_Write_ParamsSpec,
      blink.mojom.FileSystemAccessFileWriter_Write_ResponseParamsSpec,
      [offset, stream],
      false);
  }

  truncate(length) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      blink.mojom.FileSystemAccessFileWriter_Truncate_ParamsSpec,
      blink.mojom.FileSystemAccessFileWriter_Truncate_ResponseParamsSpec,
      [length],
      false);
  }

  close() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      blink.mojom.FileSystemAccessFileWriter_Close_ParamsSpec,
      blink.mojom.FileSystemAccessFileWriter_Close_ResponseParamsSpec,
      [],
      false);
  }

  abort() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
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
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('FileSystemAccessFileWriter', [
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
             decoder.decodeStructInline(blink.mojom.FileSystemAccessFileWriter_Write_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.FileSystemAccessFileWriter_Truncate_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.FileSystemAccessFileWriter_Close_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.FileSystemAccessFileWriter_Abort_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.FileSystemAccessFileWriter_Write_ParamsSpec.$.structSpec);
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
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.FileSystemAccessFileWriter_Truncate_ParamsSpec.$.structSpec);
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
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.FileSystemAccessFileWriter_Close_ParamsSpec.$.structSpec);
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
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.FileSystemAccessFileWriter_Abort_ParamsSpec.$.structSpec);
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
      } catch (err) {}
    });
  }
};

blink.mojom.FileSystemAccessFileWriterReceiver = blink.mojom.FileSystemAccessFileWriterReceiver;

blink.mojom.FileSystemAccessFileWriterPtr = blink.mojom.FileSystemAccessFileWriterRemote;
blink.mojom.FileSystemAccessFileWriterRequest = blink.mojom.FileSystemAccessFileWriterPendingReceiver;

