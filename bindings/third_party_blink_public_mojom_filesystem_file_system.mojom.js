// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/filesystem/file_system.mojom
// Module: blink.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var filesystem = filesystem || {};
var url = url || {};
var mojo_base = mojo_base || {};

blink.mojom.FileSystemTypeSpec = { $: mojo.internal.Enum() };
blink.mojom.FileSystemInfoSpec = { $: {} };
blink.mojom.FileSystemCancellableOperation = {};
blink.mojom.FileSystemCancellableOperation.$interfaceName = 'blink.mojom.FileSystemCancellableOperation';
blink.mojom.FileSystemCancellableOperation_Cancel_ParamsSpec = { $: {} };
blink.mojom.FileSystemCancellableOperation_Cancel_ResponseParamsSpec = { $: {} };
blink.mojom.FileSystemOperationListener = {};
blink.mojom.FileSystemOperationListener.$interfaceName = 'blink.mojom.FileSystemOperationListener';
blink.mojom.FileSystemOperationListener_ResultsRetrieved_ParamsSpec = { $: {} };
blink.mojom.FileSystemOperationListener_DidWrite_ParamsSpec = { $: {} };
blink.mojom.FileSystemOperationListener_ErrorOccurred_ParamsSpec = { $: {} };
blink.mojom.ReceivedSnapshotListener = {};
blink.mojom.ReceivedSnapshotListener.$interfaceName = 'blink.mojom.ReceivedSnapshotListener';
blink.mojom.ReceivedSnapshotListener_DidReceiveSnapshotFile_ParamsSpec = { $: {} };
blink.mojom.FileSystemManager = {};
blink.mojom.FileSystemManager.$interfaceName = 'blink.mojom.FileSystemManager';
blink.mojom.FileSystemManager_Open_ParamsSpec = { $: {} };
blink.mojom.FileSystemManager_Open_ResponseParamsSpec = { $: {} };
blink.mojom.FileSystemManager_ResolveURL_ParamsSpec = { $: {} };
blink.mojom.FileSystemManager_ResolveURL_ResponseParamsSpec = { $: {} };
blink.mojom.FileSystemManager_Move_ParamsSpec = { $: {} };
blink.mojom.FileSystemManager_Move_ResponseParamsSpec = { $: {} };
blink.mojom.FileSystemManager_Copy_ParamsSpec = { $: {} };
blink.mojom.FileSystemManager_Copy_ResponseParamsSpec = { $: {} };
blink.mojom.FileSystemManager_Remove_ParamsSpec = { $: {} };
blink.mojom.FileSystemManager_Remove_ResponseParamsSpec = { $: {} };
blink.mojom.FileSystemManager_ReadMetadata_ParamsSpec = { $: {} };
blink.mojom.FileSystemManager_ReadMetadata_ResponseParamsSpec = { $: {} };
blink.mojom.FileSystemManager_Create_ParamsSpec = { $: {} };
blink.mojom.FileSystemManager_Create_ResponseParamsSpec = { $: {} };
blink.mojom.FileSystemManager_Exists_ParamsSpec = { $: {} };
blink.mojom.FileSystemManager_Exists_ResponseParamsSpec = { $: {} };
blink.mojom.FileSystemManager_ReadDirectory_ParamsSpec = { $: {} };
blink.mojom.FileSystemManager_ReadDirectorySync_ParamsSpec = { $: {} };
blink.mojom.FileSystemManager_ReadDirectorySync_ResponseParamsSpec = { $: {} };
blink.mojom.FileSystemManager_Write_ParamsSpec = { $: {} };
blink.mojom.FileSystemManager_WriteSync_ParamsSpec = { $: {} };
blink.mojom.FileSystemManager_WriteSync_ResponseParamsSpec = { $: {} };
blink.mojom.FileSystemManager_Truncate_ParamsSpec = { $: {} };
blink.mojom.FileSystemManager_Truncate_ResponseParamsSpec = { $: {} };
blink.mojom.FileSystemManager_TruncateSync_ParamsSpec = { $: {} };
blink.mojom.FileSystemManager_TruncateSync_ResponseParamsSpec = { $: {} };
blink.mojom.FileSystemManager_CreateSnapshotFile_ParamsSpec = { $: {} };
blink.mojom.FileSystemManager_CreateSnapshotFile_ResponseParamsSpec = { $: {} };
blink.mojom.FileSystemManager_GetPlatformPath_ParamsSpec = { $: {} };
blink.mojom.FileSystemManager_GetPlatformPath_ResponseParamsSpec = { $: {} };
blink.mojom.FileSystemManager_RegisterBlob_ParamsSpec = { $: {} };
blink.mojom.FileSystemManager_RegisterBlob_ResponseParamsSpec = { $: {} };

// Enum: FileSystemType
blink.mojom.FileSystemType = {
  kTemporary: 0,
  kPersistent: 1,
  kIsolated: 2,
  kExternal: 3,
};

// Struct: FileSystemInfo
mojo.internal.Struct(
    blink.mojom.FileSystemInfoSpec, 'blink.mojom.FileSystemInfo', [
      mojo.internal.StructField('name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('root_url', 8, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('mount_type', 16, 0, blink.mojom.FileSystemTypeSpec.$, 0, false, 0, undefined),
    ],
    [[0, 32]]);

// Interface: FileSystemCancellableOperation
mojo.internal.Struct(
    blink.mojom.FileSystemCancellableOperation_Cancel_ParamsSpec, 'blink.mojom.FileSystemCancellableOperation_Cancel_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.FileSystemCancellableOperation_Cancel_ResponseParamsSpec, 'blink.mojom.FileSystemCancellableOperation_Cancel_ResponseParams', [
      mojo.internal.StructField('error_code', 0, 0, mojo_base.mojom.FileErrorSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

blink.mojom.FileSystemCancellableOperationPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.FileSystemCancellableOperationRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.FileSystemCancellableOperation';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.FileSystemCancellableOperationPendingReceiver,
      handle);
    this.$ = new blink.mojom.FileSystemCancellableOperationRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  cancel() {
    return this.$.cancel();
  }
};

blink.mojom.FileSystemCancellableOperationRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('FileSystemCancellableOperation', [
      { explicit: null },
    ]);
  }

  cancel() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      blink.mojom.FileSystemCancellableOperation_Cancel_ParamsSpec,
      blink.mojom.FileSystemCancellableOperation_Cancel_ResponseParamsSpec,
      [],
      false);
  }

};

blink.mojom.FileSystemCancellableOperation.getRemote = function() {
  let remote = new blink.mojom.FileSystemCancellableOperationRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.FileSystemCancellableOperation',
    'context');
  return remote.$;
};

blink.mojom.FileSystemCancellableOperationReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('FileSystemCancellableOperation', [
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
             decoder.decodeStructInline(blink.mojom.FileSystemCancellableOperation_Cancel_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.FileSystemCancellableOperation_Cancel_ParamsSpec.$.structSpec);
          const result = this.impl.cancel();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.FileSystemCancellableOperation_Cancel_ResponseParamsSpec);
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

blink.mojom.FileSystemCancellableOperationReceiver = blink.mojom.FileSystemCancellableOperationReceiver;

blink.mojom.FileSystemCancellableOperationPtr = blink.mojom.FileSystemCancellableOperationRemote;
blink.mojom.FileSystemCancellableOperationRequest = blink.mojom.FileSystemCancellableOperationPendingReceiver;


// Interface: FileSystemOperationListener
mojo.internal.Struct(
    blink.mojom.FileSystemOperationListener_ResultsRetrieved_ParamsSpec, 'blink.mojom.FileSystemOperationListener_ResultsRetrieved_Params', [
      mojo.internal.StructField('entries', 0, 0, mojo.internal.Array(filesystem.mojom.DirectoryEntrySpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('has_more', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.FileSystemOperationListener_DidWrite_ParamsSpec, 'blink.mojom.FileSystemOperationListener_DidWrite_Params', [
      mojo.internal.StructField('byte_count', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('complete', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.FileSystemOperationListener_ErrorOccurred_ParamsSpec, 'blink.mojom.FileSystemOperationListener_ErrorOccurred_Params', [
      mojo.internal.StructField('error_code', 0, 0, mojo_base.mojom.FileErrorSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

blink.mojom.FileSystemOperationListenerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.FileSystemOperationListenerRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.FileSystemOperationListener';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.FileSystemOperationListenerPendingReceiver,
      handle);
    this.$ = new blink.mojom.FileSystemOperationListenerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  resultsRetrieved(entries, has_more) {
    return this.$.resultsRetrieved(entries, has_more);
  }
  didWrite(byte_count, complete) {
    return this.$.didWrite(byte_count, complete);
  }
  errorOccurred(error_code) {
    return this.$.errorOccurred(error_code);
  }
};

blink.mojom.FileSystemOperationListenerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('FileSystemOperationListener', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  resultsRetrieved(entries, has_more) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      blink.mojom.FileSystemOperationListener_ResultsRetrieved_ParamsSpec,
      null,
      [entries, has_more],
      false);
  }

  didWrite(byte_count, complete) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      blink.mojom.FileSystemOperationListener_DidWrite_ParamsSpec,
      null,
      [byte_count, complete],
      false);
  }

  errorOccurred(error_code) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      blink.mojom.FileSystemOperationListener_ErrorOccurred_ParamsSpec,
      null,
      [error_code],
      false);
  }

};

blink.mojom.FileSystemOperationListener.getRemote = function() {
  let remote = new blink.mojom.FileSystemOperationListenerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.FileSystemOperationListener',
    'context');
  return remote.$;
};

blink.mojom.FileSystemOperationListenerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('FileSystemOperationListener', [
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
             decoder.decodeStructInline(blink.mojom.FileSystemOperationListener_ResultsRetrieved_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.FileSystemOperationListener_DidWrite_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.FileSystemOperationListener_ErrorOccurred_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.FileSystemOperationListener_ResultsRetrieved_ParamsSpec.$.structSpec);
          const result = this.impl.resultsRetrieved(params.entries, params.has_more);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.FileSystemOperationListener_DidWrite_ParamsSpec.$.structSpec);
          const result = this.impl.didWrite(params.byte_count, params.complete);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.FileSystemOperationListener_ErrorOccurred_ParamsSpec.$.structSpec);
          const result = this.impl.errorOccurred(params.error_code);
          break;
        }
      }
      } catch (err) {}
    });
  }
};

blink.mojom.FileSystemOperationListenerReceiver = blink.mojom.FileSystemOperationListenerReceiver;

blink.mojom.FileSystemOperationListenerPtr = blink.mojom.FileSystemOperationListenerRemote;
blink.mojom.FileSystemOperationListenerRequest = blink.mojom.FileSystemOperationListenerPendingReceiver;


// Interface: ReceivedSnapshotListener
mojo.internal.Struct(
    blink.mojom.ReceivedSnapshotListener_DidReceiveSnapshotFile_ParamsSpec, 'blink.mojom.ReceivedSnapshotListener_DidReceiveSnapshotFile_Params', [
    ],
    [[0, 8]]);

blink.mojom.ReceivedSnapshotListenerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.ReceivedSnapshotListenerRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.ReceivedSnapshotListener';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.ReceivedSnapshotListenerPendingReceiver,
      handle);
    this.$ = new blink.mojom.ReceivedSnapshotListenerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  didReceiveSnapshotFile() {
    return this.$.didReceiveSnapshotFile();
  }
};

blink.mojom.ReceivedSnapshotListenerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ReceivedSnapshotListener', [
      { explicit: null },
    ]);
  }

  didReceiveSnapshotFile() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      blink.mojom.ReceivedSnapshotListener_DidReceiveSnapshotFile_ParamsSpec,
      null,
      [],
      false);
  }

};

blink.mojom.ReceivedSnapshotListener.getRemote = function() {
  let remote = new blink.mojom.ReceivedSnapshotListenerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.ReceivedSnapshotListener',
    'context');
  return remote.$;
};

blink.mojom.ReceivedSnapshotListenerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ReceivedSnapshotListener', [
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
             decoder.decodeStructInline(blink.mojom.ReceivedSnapshotListener_DidReceiveSnapshotFile_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.ReceivedSnapshotListener_DidReceiveSnapshotFile_ParamsSpec.$.structSpec);
          const result = this.impl.didReceiveSnapshotFile();
          break;
        }
      }
      } catch (err) {}
    });
  }
};

blink.mojom.ReceivedSnapshotListenerReceiver = blink.mojom.ReceivedSnapshotListenerReceiver;

blink.mojom.ReceivedSnapshotListenerPtr = blink.mojom.ReceivedSnapshotListenerRemote;
blink.mojom.ReceivedSnapshotListenerRequest = blink.mojom.ReceivedSnapshotListenerPendingReceiver;


// Interface: FileSystemManager
mojo.internal.Struct(
    blink.mojom.FileSystemManager_Open_ParamsSpec, 'blink.mojom.FileSystemManager_Open_Params', [
      mojo.internal.StructField('origin', 0, 0, url.mojom.OriginSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('file_system_type', 8, 0, blink.mojom.FileSystemTypeSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.FileSystemManager_Open_ResponseParamsSpec, 'blink.mojom.FileSystemManager_Open_ResponseParams', [
      mojo.internal.StructField('name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('root_url', 8, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('error_code', 16, 0, mojo_base.mojom.FileErrorSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    blink.mojom.FileSystemManager_ResolveURL_ParamsSpec, 'blink.mojom.FileSystemManager_ResolveURL_Params', [
      mojo.internal.StructField('filesystem_url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.FileSystemManager_ResolveURL_ResponseParamsSpec, 'blink.mojom.FileSystemManager_ResolveURL_ResponseParams', [
      mojo.internal.StructField('info', 0, 0, blink.mojom.FileSystemInfoSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('file_path', 8, 0, mojo_base.mojom.FilePathSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('error_code', 16, 0, mojo_base.mojom.FileErrorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('is_directory', 24, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    blink.mojom.FileSystemManager_Move_ParamsSpec, 'blink.mojom.FileSystemManager_Move_Params', [
      mojo.internal.StructField('src_path', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('dest_path', 8, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.FileSystemManager_Move_ResponseParamsSpec, 'blink.mojom.FileSystemManager_Move_ResponseParams', [
      mojo.internal.StructField('error_code', 0, 0, mojo_base.mojom.FileErrorSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.FileSystemManager_Copy_ParamsSpec, 'blink.mojom.FileSystemManager_Copy_Params', [
      mojo.internal.StructField('src_path', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('dest_path', 8, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.FileSystemManager_Copy_ResponseParamsSpec, 'blink.mojom.FileSystemManager_Copy_ResponseParams', [
      mojo.internal.StructField('error_code', 0, 0, mojo_base.mojom.FileErrorSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.FileSystemManager_Remove_ParamsSpec, 'blink.mojom.FileSystemManager_Remove_Params', [
      mojo.internal.StructField('path', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('recursive', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.FileSystemManager_Remove_ResponseParamsSpec, 'blink.mojom.FileSystemManager_Remove_ResponseParams', [
      mojo.internal.StructField('error_code', 0, 0, mojo_base.mojom.FileErrorSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.FileSystemManager_ReadMetadata_ParamsSpec, 'blink.mojom.FileSystemManager_ReadMetadata_Params', [
      mojo.internal.StructField('path', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.FileSystemManager_ReadMetadata_ResponseParamsSpec, 'blink.mojom.FileSystemManager_ReadMetadata_ResponseParams', [
      mojo.internal.StructField('file_info', 0, 0, mojo_base.mojom.FileInfoSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('error_code', 8, 0, mojo_base.mojom.FileErrorSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.FileSystemManager_Create_ParamsSpec, 'blink.mojom.FileSystemManager_Create_Params', [
      mojo.internal.StructField('path', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('exclusive', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_directory', 8, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('recursive', 8, 2, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.FileSystemManager_Create_ResponseParamsSpec, 'blink.mojom.FileSystemManager_Create_ResponseParams', [
      mojo.internal.StructField('error_code', 0, 0, mojo_base.mojom.FileErrorSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.FileSystemManager_Exists_ParamsSpec, 'blink.mojom.FileSystemManager_Exists_Params', [
      mojo.internal.StructField('path', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('is_directory', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.FileSystemManager_Exists_ResponseParamsSpec, 'blink.mojom.FileSystemManager_Exists_ResponseParams', [
      mojo.internal.StructField('error_code', 0, 0, mojo_base.mojom.FileErrorSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.FileSystemManager_ReadDirectory_ParamsSpec, 'blink.mojom.FileSystemManager_ReadDirectory_Params', [
      mojo.internal.StructField('path', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('listener', 8, 0, mojo.internal.InterfaceProxy(blink.mojom.FileSystemOperationListenerRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.FileSystemManager_ReadDirectorySync_ParamsSpec, 'blink.mojom.FileSystemManager_ReadDirectorySync_Params', [
      mojo.internal.StructField('path', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.FileSystemManager_ReadDirectorySync_ResponseParamsSpec, 'blink.mojom.FileSystemManager_ReadDirectorySync_ResponseParams', [
      mojo.internal.StructField('entries', 0, 0, mojo.internal.Array(filesystem.mojom.DirectoryEntrySpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('error_code', 8, 0, mojo_base.mojom.FileErrorSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.FileSystemManager_Write_ParamsSpec, 'blink.mojom.FileSystemManager_Write_Params', [
      mojo.internal.StructField('file_path', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('blob', 8, 0, mojo.internal.InterfaceProxy(blink.mojom.BlobRemote), null, false, 0, undefined),
      mojo.internal.StructField('position', 16, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('op_receiver', 24, 0, mojo.internal.InterfaceRequest(blink.mojom.FileSystemCancellableOperationRemote), null, false, 0, undefined),
      mojo.internal.StructField('listener', 32, 0, mojo.internal.InterfaceProxy(blink.mojom.FileSystemOperationListenerRemote), null, false, 0, undefined),
    ],
    [[0, 48]]);

mojo.internal.Struct(
    blink.mojom.FileSystemManager_WriteSync_ParamsSpec, 'blink.mojom.FileSystemManager_WriteSync_Params', [
      mojo.internal.StructField('file_path', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('blob', 8, 0, mojo.internal.InterfaceProxy(blink.mojom.BlobRemote), null, false, 0, undefined),
      mojo.internal.StructField('position', 16, 0, mojo.internal.Int64, 0, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    blink.mojom.FileSystemManager_WriteSync_ResponseParamsSpec, 'blink.mojom.FileSystemManager_WriteSync_ResponseParams', [
      mojo.internal.StructField('byte_count', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('error_code', 8, 0, mojo_base.mojom.FileErrorSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.FileSystemManager_Truncate_ParamsSpec, 'blink.mojom.FileSystemManager_Truncate_Params', [
      mojo.internal.StructField('file_path', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('length', 8, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('op_receiver', 16, 0, mojo.internal.InterfaceRequest(blink.mojom.FileSystemCancellableOperationRemote), null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    blink.mojom.FileSystemManager_Truncate_ResponseParamsSpec, 'blink.mojom.FileSystemManager_Truncate_ResponseParams', [
      mojo.internal.StructField('error_code', 0, 0, mojo_base.mojom.FileErrorSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.FileSystemManager_TruncateSync_ParamsSpec, 'blink.mojom.FileSystemManager_TruncateSync_Params', [
      mojo.internal.StructField('file_path', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('length', 8, 0, mojo.internal.Int64, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.FileSystemManager_TruncateSync_ResponseParamsSpec, 'blink.mojom.FileSystemManager_TruncateSync_ResponseParams', [
      mojo.internal.StructField('error_code', 0, 0, mojo_base.mojom.FileErrorSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.FileSystemManager_CreateSnapshotFile_ParamsSpec, 'blink.mojom.FileSystemManager_CreateSnapshotFile_Params', [
      mojo.internal.StructField('file_path', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.FileSystemManager_CreateSnapshotFile_ResponseParamsSpec, 'blink.mojom.FileSystemManager_CreateSnapshotFile_ResponseParams', [
      mojo.internal.StructField('file_info', 0, 0, mojo_base.mojom.FileInfoSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('platform_path', 8, 0, mojo_base.mojom.FilePathSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('error_code', 16, 0, mojo_base.mojom.FileErrorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('snapshot_listener', 24, 0, mojo.internal.InterfaceProxy(blink.mojom.ReceivedSnapshotListenerRemote), null, true, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    blink.mojom.FileSystemManager_GetPlatformPath_ParamsSpec, 'blink.mojom.FileSystemManager_GetPlatformPath_Params', [
      mojo.internal.StructField('file_path', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.FileSystemManager_GetPlatformPath_ResponseParamsSpec, 'blink.mojom.FileSystemManager_GetPlatformPath_ResponseParams', [
      mojo.internal.StructField('platform_path', 0, 0, mojo_base.mojom.FilePathSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.FileSystemManager_RegisterBlob_ParamsSpec, 'blink.mojom.FileSystemManager_RegisterBlob_Params', [
      mojo.internal.StructField('content_type', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('url', 8, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('length', 16, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('expected_modification_time', 24, 0, mojo_base.mojom.TimeSpec.$, null, true, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    blink.mojom.FileSystemManager_RegisterBlob_ResponseParamsSpec, 'blink.mojom.FileSystemManager_RegisterBlob_ResponseParams', [
      mojo.internal.StructField('blob', 0, 0, blink.mojom.SerializedBlobSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

blink.mojom.FileSystemManagerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.FileSystemManagerRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.FileSystemManager';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.FileSystemManagerPendingReceiver,
      handle);
    this.$ = new blink.mojom.FileSystemManagerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  open(origin, file_system_type) {
    return this.$.open(origin, file_system_type);
  }
  resolveURL(filesystem_url) {
    return this.$.resolveURL(filesystem_url);
  }
  move(src_path, dest_path) {
    return this.$.move(src_path, dest_path);
  }
  copy(src_path, dest_path) {
    return this.$.copy(src_path, dest_path);
  }
  remove(path, recursive) {
    return this.$.remove(path, recursive);
  }
  readMetadata(path) {
    return this.$.readMetadata(path);
  }
  create(path, exclusive, is_directory, recursive) {
    return this.$.create(path, exclusive, is_directory, recursive);
  }
  exists(path, is_directory) {
    return this.$.exists(path, is_directory);
  }
  readDirectory(path, listener) {
    return this.$.readDirectory(path, listener);
  }
  readDirectorySync(path) {
    return this.$.readDirectorySync(path);
  }
  write(file_path, blob, position, op_receiver, listener) {
    return this.$.write(file_path, blob, position, op_receiver, listener);
  }
  writeSync(file_path, blob, position) {
    return this.$.writeSync(file_path, blob, position);
  }
  truncate(file_path, length, op_receiver) {
    return this.$.truncate(file_path, length, op_receiver);
  }
  truncateSync(file_path, length) {
    return this.$.truncateSync(file_path, length);
  }
  createSnapshotFile(file_path) {
    return this.$.createSnapshotFile(file_path);
  }
  getPlatformPath(file_path) {
    return this.$.getPlatformPath(file_path);
  }
  registerBlob(content_type, url, length, expected_modification_time) {
    return this.$.registerBlob(content_type, url, length, expected_modification_time);
  }
};

blink.mojom.FileSystemManagerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('FileSystemManager', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  open(origin, file_system_type) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      blink.mojom.FileSystemManager_Open_ParamsSpec,
      blink.mojom.FileSystemManager_Open_ResponseParamsSpec,
      [origin, file_system_type],
      false);
  }

  resolveURL(filesystem_url) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      blink.mojom.FileSystemManager_ResolveURL_ParamsSpec,
      blink.mojom.FileSystemManager_ResolveURL_ResponseParamsSpec,
      [filesystem_url],
      false);
  }

  move(src_path, dest_path) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      blink.mojom.FileSystemManager_Move_ParamsSpec,
      blink.mojom.FileSystemManager_Move_ResponseParamsSpec,
      [src_path, dest_path],
      false);
  }

  copy(src_path, dest_path) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      blink.mojom.FileSystemManager_Copy_ParamsSpec,
      blink.mojom.FileSystemManager_Copy_ResponseParamsSpec,
      [src_path, dest_path],
      false);
  }

  remove(path, recursive) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      blink.mojom.FileSystemManager_Remove_ParamsSpec,
      blink.mojom.FileSystemManager_Remove_ResponseParamsSpec,
      [path, recursive],
      false);
  }

  readMetadata(path) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      blink.mojom.FileSystemManager_ReadMetadata_ParamsSpec,
      blink.mojom.FileSystemManager_ReadMetadata_ResponseParamsSpec,
      [path],
      false);
  }

  create(path, exclusive, is_directory, recursive) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      blink.mojom.FileSystemManager_Create_ParamsSpec,
      blink.mojom.FileSystemManager_Create_ResponseParamsSpec,
      [path, exclusive, is_directory, recursive],
      false);
  }

  exists(path, is_directory) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      blink.mojom.FileSystemManager_Exists_ParamsSpec,
      blink.mojom.FileSystemManager_Exists_ResponseParamsSpec,
      [path, is_directory],
      false);
  }

  readDirectory(path, listener) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      blink.mojom.FileSystemManager_ReadDirectory_ParamsSpec,
      null,
      [path, listener],
      false);
  }

  readDirectorySync(path) {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      blink.mojom.FileSystemManager_ReadDirectorySync_ParamsSpec,
      blink.mojom.FileSystemManager_ReadDirectorySync_ResponseParamsSpec,
      [path],
      false);
  }

  write(file_path, blob, position, op_receiver, listener) {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      blink.mojom.FileSystemManager_Write_ParamsSpec,
      null,
      [file_path, blob, position, op_receiver, listener],
      false);
  }

  writeSync(file_path, blob, position) {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      blink.mojom.FileSystemManager_WriteSync_ParamsSpec,
      blink.mojom.FileSystemManager_WriteSync_ResponseParamsSpec,
      [file_path, blob, position],
      false);
  }

  truncate(file_path, length, op_receiver) {
    return this.proxy.sendMessage(
      this.ordinals[12],  // ordinal
      blink.mojom.FileSystemManager_Truncate_ParamsSpec,
      blink.mojom.FileSystemManager_Truncate_ResponseParamsSpec,
      [file_path, length, op_receiver],
      false);
  }

  truncateSync(file_path, length) {
    return this.proxy.sendMessage(
      this.ordinals[13],  // ordinal
      blink.mojom.FileSystemManager_TruncateSync_ParamsSpec,
      blink.mojom.FileSystemManager_TruncateSync_ResponseParamsSpec,
      [file_path, length],
      false);
  }

  createSnapshotFile(file_path) {
    return this.proxy.sendMessage(
      this.ordinals[14],  // ordinal
      blink.mojom.FileSystemManager_CreateSnapshotFile_ParamsSpec,
      blink.mojom.FileSystemManager_CreateSnapshotFile_ResponseParamsSpec,
      [file_path],
      false);
  }

  getPlatformPath(file_path) {
    return this.proxy.sendMessage(
      this.ordinals[15],  // ordinal
      blink.mojom.FileSystemManager_GetPlatformPath_ParamsSpec,
      blink.mojom.FileSystemManager_GetPlatformPath_ResponseParamsSpec,
      [file_path],
      false);
  }

  registerBlob(content_type, url, length, expected_modification_time) {
    return this.proxy.sendMessage(
      this.ordinals[16],  // ordinal
      blink.mojom.FileSystemManager_RegisterBlob_ParamsSpec,
      blink.mojom.FileSystemManager_RegisterBlob_ResponseParamsSpec,
      [content_type, url, length, expected_modification_time],
      false);
  }

};

blink.mojom.FileSystemManager.getRemote = function() {
  let remote = new blink.mojom.FileSystemManagerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.FileSystemManager',
    'context');
  return remote.$;
};

blink.mojom.FileSystemManagerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('FileSystemManager', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
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
             decoder.decodeStructInline(blink.mojom.FileSystemManager_Open_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.FileSystemManager_ResolveURL_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.FileSystemManager_Move_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.FileSystemManager_Copy_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.FileSystemManager_Remove_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.FileSystemManager_ReadMetadata_ParamsSpec);
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.FileSystemManager_Create_ParamsSpec);
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.FileSystemManager_Exists_ParamsSpec);
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.FileSystemManager_ReadDirectory_ParamsSpec);
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.FileSystemManager_ReadDirectorySync_ParamsSpec);
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.FileSystemManager_Write_ParamsSpec);
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.FileSystemManager_WriteSync_ParamsSpec);
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.FileSystemManager_Truncate_ParamsSpec);
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.FileSystemManager_TruncateSync_ParamsSpec);
             this.mapOrdinal(header.ordinal, 13);
             dispatchId = 13;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.FileSystemManager_CreateSnapshotFile_ParamsSpec);
             this.mapOrdinal(header.ordinal, 14);
             dispatchId = 14;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.FileSystemManager_GetPlatformPath_ParamsSpec);
             this.mapOrdinal(header.ordinal, 15);
             dispatchId = 15;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.FileSystemManager_RegisterBlob_ParamsSpec);
             this.mapOrdinal(header.ordinal, 16);
             dispatchId = 16;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.FileSystemManager_Open_ParamsSpec.$.structSpec);
          const result = this.impl.open(params.origin, params.file_system_type);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.FileSystemManager_Open_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.FileSystemManager_ResolveURL_ParamsSpec.$.structSpec);
          const result = this.impl.resolveURL(params.filesystem_url);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.FileSystemManager_ResolveURL_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.FileSystemManager_Move_ParamsSpec.$.structSpec);
          const result = this.impl.move(params.src_path, params.dest_path);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.FileSystemManager_Move_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.FileSystemManager_Copy_ParamsSpec.$.structSpec);
          const result = this.impl.copy(params.src_path, params.dest_path);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.FileSystemManager_Copy_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.FileSystemManager_Remove_ParamsSpec.$.structSpec);
          const result = this.impl.remove(params.path, params.recursive);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.FileSystemManager_Remove_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.FileSystemManager_ReadMetadata_ParamsSpec.$.structSpec);
          const result = this.impl.readMetadata(params.path);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.FileSystemManager_ReadMetadata_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.FileSystemManager_Create_ParamsSpec.$.structSpec);
          const result = this.impl.create(params.path, params.exclusive, params.is_directory, params.recursive);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.FileSystemManager_Create_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.FileSystemManager_Exists_ParamsSpec.$.structSpec);
          const result = this.impl.exists(params.path, params.is_directory);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.FileSystemManager_Exists_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.FileSystemManager_ReadDirectory_ParamsSpec.$.structSpec);
          const result = this.impl.readDirectory(params.path, params.listener);
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.FileSystemManager_ReadDirectorySync_ParamsSpec.$.structSpec);
          const result = this.impl.readDirectorySync(params.path);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.FileSystemManager_ReadDirectorySync_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.FileSystemManager_Write_ParamsSpec.$.structSpec);
          const result = this.impl.write(params.file_path, params.blob, params.position, params.op_receiver, params.listener);
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.FileSystemManager_WriteSync_ParamsSpec.$.structSpec);
          const result = this.impl.writeSync(params.file_path, params.blob, params.position);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.FileSystemManager_WriteSync_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.FileSystemManager_Truncate_ParamsSpec.$.structSpec);
          const result = this.impl.truncate(params.file_path, params.length, params.op_receiver);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.FileSystemManager_Truncate_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.FileSystemManager_TruncateSync_ParamsSpec.$.structSpec);
          const result = this.impl.truncateSync(params.file_path, params.length);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.FileSystemManager_TruncateSync_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 14: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.FileSystemManager_CreateSnapshotFile_ParamsSpec.$.structSpec);
          const result = this.impl.createSnapshotFile(params.file_path);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.FileSystemManager_CreateSnapshotFile_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 15: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.FileSystemManager_GetPlatformPath_ParamsSpec.$.structSpec);
          const result = this.impl.getPlatformPath(params.file_path);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.FileSystemManager_GetPlatformPath_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 16: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.FileSystemManager_RegisterBlob_ParamsSpec.$.structSpec);
          const result = this.impl.registerBlob(params.content_type, params.url, params.length, params.expected_modification_time);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.FileSystemManager_RegisterBlob_ResponseParamsSpec);
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

blink.mojom.FileSystemManagerReceiver = blink.mojom.FileSystemManagerReceiver;

blink.mojom.FileSystemManagerPtr = blink.mojom.FileSystemManagerRemote;
blink.mojom.FileSystemManagerRequest = blink.mojom.FileSystemManagerPendingReceiver;

