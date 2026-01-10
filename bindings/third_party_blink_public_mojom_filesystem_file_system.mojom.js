// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/filesystem/file_system.mojom
// Module: blink.mojom

'use strict';

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
};

blink.mojom.FileSystemCancellableOperationRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  cancel() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
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
        // Create a view of ONLY the payload (skipping the header)
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        // Decoder uses payload view starting at 0
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: Cancel
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.FileSystemCancellableOperation_Cancel_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Cancel (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
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
          const params = decoder.decodeStructInline(blink.mojom.FileSystemCancellableOperation_Cancel_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.cancel');
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
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
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
};

blink.mojom.FileSystemOperationListenerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  resultsRetrieved(entries, has_more) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.FileSystemOperationListener_ResultsRetrieved_ParamsSpec,
      null,
      [entries, has_more],
      false);
  }

  didWrite(byte_count, complete) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.FileSystemOperationListener_DidWrite_ParamsSpec,
      null,
      [byte_count, complete],
      false);
  }

  errorOccurred(error_code) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
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
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
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
        // Create a view of ONLY the payload (skipping the header)
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        // Decoder uses payload view starting at 0
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: ResultsRetrieved
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.FileSystemOperationListener_ResultsRetrieved_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ResultsRetrieved (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: DidWrite
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.FileSystemOperationListener_DidWrite_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DidWrite (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: ErrorOccurred
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.FileSystemOperationListener_ErrorOccurred_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ErrorOccurred (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
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
          const params = decoder.decodeStructInline(blink.mojom.FileSystemOperationListener_ResultsRetrieved_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.resultsRetrieved');
          const result = this.impl.resultsRetrieved(params.entries, params.has_more);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.FileSystemOperationListener_DidWrite_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.didWrite');
          const result = this.impl.didWrite(params.byte_count, params.complete);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.FileSystemOperationListener_ErrorOccurred_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.errorOccurred');
          const result = this.impl.errorOccurred(params.error_code);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
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
};

blink.mojom.ReceivedSnapshotListenerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  didReceiveSnapshotFile() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
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
        // Create a view of ONLY the payload (skipping the header)
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        // Decoder uses payload view starting at 0
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: DidReceiveSnapshotFile
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.ReceivedSnapshotListener_DidReceiveSnapshotFile_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DidReceiveSnapshotFile (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
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
          const params = decoder.decodeStructInline(blink.mojom.ReceivedSnapshotListener_DidReceiveSnapshotFile_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.didReceiveSnapshotFile');
          const result = this.impl.didReceiveSnapshotFile();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
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
      mojo.internal.StructField('listener', 8, 0, mojo.internal.InterfaceProxy(blink.mojom.FileSystemOperationListenerSpec), null, false, 0, undefined),
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
      mojo.internal.StructField('op_receiver', 24, 0, mojo.internal.InterfaceRequest(blink.mojom.FileSystemCancellableOperationSpec), null, false, 0, undefined),
      mojo.internal.StructField('listener', 32, 0, mojo.internal.InterfaceProxy(blink.mojom.FileSystemOperationListenerSpec), null, false, 0, undefined),
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
      mojo.internal.StructField('op_receiver', 16, 0, mojo.internal.InterfaceRequest(blink.mojom.FileSystemCancellableOperationSpec), null, false, 0, undefined),
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
      mojo.internal.StructField('snapshot_listener', 24, 0, mojo.internal.InterfaceProxy(blink.mojom.ReceivedSnapshotListenerSpec), null, true, 0, undefined),
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
};

blink.mojom.FileSystemManagerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  open(origin, file_system_type) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.FileSystemManager_Open_ParamsSpec,
      blink.mojom.FileSystemManager_Open_ResponseParamsSpec,
      [origin, file_system_type],
      false);
  }

  resolveURL(filesystem_url) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.FileSystemManager_ResolveURL_ParamsSpec,
      blink.mojom.FileSystemManager_ResolveURL_ResponseParamsSpec,
      [filesystem_url],
      false);
  }

  move(src_path, dest_path) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.FileSystemManager_Move_ParamsSpec,
      blink.mojom.FileSystemManager_Move_ResponseParamsSpec,
      [src_path, dest_path],
      false);
  }

  copy(src_path, dest_path) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      blink.mojom.FileSystemManager_Copy_ParamsSpec,
      blink.mojom.FileSystemManager_Copy_ResponseParamsSpec,
      [src_path, dest_path],
      false);
  }

  remove(path, recursive) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      blink.mojom.FileSystemManager_Remove_ParamsSpec,
      blink.mojom.FileSystemManager_Remove_ResponseParamsSpec,
      [path, recursive],
      false);
  }

  readMetadata(path) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      blink.mojom.FileSystemManager_ReadMetadata_ParamsSpec,
      blink.mojom.FileSystemManager_ReadMetadata_ResponseParamsSpec,
      [path],
      false);
  }

  create(path, exclusive, is_directory, recursive) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      blink.mojom.FileSystemManager_Create_ParamsSpec,
      blink.mojom.FileSystemManager_Create_ResponseParamsSpec,
      [path, exclusive, is_directory, recursive],
      false);
  }

  exists(path, is_directory) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      blink.mojom.FileSystemManager_Exists_ParamsSpec,
      blink.mojom.FileSystemManager_Exists_ResponseParamsSpec,
      [path, is_directory],
      false);
  }

  readDirectory(path, listener) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      blink.mojom.FileSystemManager_ReadDirectory_ParamsSpec,
      null,
      [path, listener],
      false);
  }

  readDirectorySync(path) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      blink.mojom.FileSystemManager_ReadDirectorySync_ParamsSpec,
      blink.mojom.FileSystemManager_ReadDirectorySync_ResponseParamsSpec,
      [path],
      false);
  }

  write(file_path, blob, position, op_receiver, listener) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      blink.mojom.FileSystemManager_Write_ParamsSpec,
      null,
      [file_path, blob, position, op_receiver, listener],
      false);
  }

  writeSync(file_path, blob, position) {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      blink.mojom.FileSystemManager_WriteSync_ParamsSpec,
      blink.mojom.FileSystemManager_WriteSync_ResponseParamsSpec,
      [file_path, blob, position],
      false);
  }

  truncate(file_path, length, op_receiver) {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      blink.mojom.FileSystemManager_Truncate_ParamsSpec,
      blink.mojom.FileSystemManager_Truncate_ResponseParamsSpec,
      [file_path, length, op_receiver],
      false);
  }

  truncateSync(file_path, length) {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
      blink.mojom.FileSystemManager_TruncateSync_ParamsSpec,
      blink.mojom.FileSystemManager_TruncateSync_ResponseParamsSpec,
      [file_path, length],
      false);
  }

  createSnapshotFile(file_path) {
    // Ordinal: 14
    return this.proxy.sendMessage(
      14,  // ordinal
      blink.mojom.FileSystemManager_CreateSnapshotFile_ParamsSpec,
      blink.mojom.FileSystemManager_CreateSnapshotFile_ResponseParamsSpec,
      [file_path],
      false);
  }

  getPlatformPath(file_path) {
    // Ordinal: 15
    return this.proxy.sendMessage(
      15,  // ordinal
      blink.mojom.FileSystemManager_GetPlatformPath_ParamsSpec,
      blink.mojom.FileSystemManager_GetPlatformPath_ResponseParamsSpec,
      [file_path],
      false);
  }

  registerBlob(content_type, url, length, expected_modification_time) {
    // Ordinal: 16
    return this.proxy.sendMessage(
      16,  // ordinal
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
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
    this.ordinalMap.set(3, 3); // Default ordinal 3 -> Index 3
    this.ordinalMap.set(4, 4); // Default ordinal 4 -> Index 4
    this.ordinalMap.set(5, 5); // Default ordinal 5 -> Index 5
    this.ordinalMap.set(6, 6); // Default ordinal 6 -> Index 6
    this.ordinalMap.set(7, 7); // Default ordinal 7 -> Index 7
    this.ordinalMap.set(8, 8); // Default ordinal 8 -> Index 8
    this.ordinalMap.set(9, 9); // Default ordinal 9 -> Index 9
    this.ordinalMap.set(10, 10); // Default ordinal 10 -> Index 10
    this.ordinalMap.set(11, 11); // Default ordinal 11 -> Index 11
    this.ordinalMap.set(12, 12); // Default ordinal 12 -> Index 12
    this.ordinalMap.set(13, 13); // Default ordinal 13 -> Index 13
    this.ordinalMap.set(14, 14); // Default ordinal 14 -> Index 14
    this.ordinalMap.set(15, 15); // Default ordinal 15 -> Index 15
    this.ordinalMap.set(16, 16); // Default ordinal 16 -> Index 16
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
        // Create a view of ONLY the payload (skipping the header)
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        // Decoder uses payload view starting at 0
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: Open
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.FileSystemManager_Open_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Open (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: ResolveURL
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.FileSystemManager_ResolveURL_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ResolveURL (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: Move
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.FileSystemManager_Move_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Move (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: Copy
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.FileSystemManager_Copy_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Copy (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: Remove
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.FileSystemManager_Remove_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Remove (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: ReadMetadata
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.FileSystemManager_ReadMetadata_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ReadMetadata (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: Create
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.FileSystemManager_Create_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Create (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: Exists
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.FileSystemManager_Exists_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Exists (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: ReadDirectory
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.FileSystemManager_ReadDirectory_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ReadDirectory (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
           }
        }
        // Try Method 9: ReadDirectorySync
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.FileSystemManager_ReadDirectorySync_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ReadDirectorySync (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 9 failed:', e);
           }
        }
        // Try Method 10: Write
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.FileSystemManager_Write_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Write (10)');
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 10 failed:', e);
           }
        }
        // Try Method 11: WriteSync
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.FileSystemManager_WriteSync_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> WriteSync (11)');
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 11 failed:', e);
           }
        }
        // Try Method 12: Truncate
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.FileSystemManager_Truncate_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Truncate (12)');
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 12 failed:', e);
           }
        }
        // Try Method 13: TruncateSync
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.FileSystemManager_TruncateSync_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> TruncateSync (13)');
             this.mapOrdinal(header.ordinal, 13);
             dispatchId = 13;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 13 failed:', e);
           }
        }
        // Try Method 14: CreateSnapshotFile
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.FileSystemManager_CreateSnapshotFile_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreateSnapshotFile (14)');
             this.mapOrdinal(header.ordinal, 14);
             dispatchId = 14;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 14 failed:', e);
           }
        }
        // Try Method 15: GetPlatformPath
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.FileSystemManager_GetPlatformPath_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetPlatformPath (15)');
             this.mapOrdinal(header.ordinal, 15);
             dispatchId = 15;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 15 failed:', e);
           }
        }
        // Try Method 16: RegisterBlob
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.FileSystemManager_RegisterBlob_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RegisterBlob (16)');
             this.mapOrdinal(header.ordinal, 16);
             dispatchId = 16;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 16 failed:', e);
           }
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
          const params = decoder.decodeStructInline(blink.mojom.FileSystemManager_Open_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.open');
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
          const params = decoder.decodeStructInline(blink.mojom.FileSystemManager_ResolveURL_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.resolveURL');
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
          const params = decoder.decodeStructInline(blink.mojom.FileSystemManager_Move_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.move');
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
          const params = decoder.decodeStructInline(blink.mojom.FileSystemManager_Copy_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.copy');
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
          const params = decoder.decodeStructInline(blink.mojom.FileSystemManager_Remove_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.remove');
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
          const params = decoder.decodeStructInline(blink.mojom.FileSystemManager_ReadMetadata_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.readMetadata');
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
          const params = decoder.decodeStructInline(blink.mojom.FileSystemManager_Create_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.create');
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
          const params = decoder.decodeStructInline(blink.mojom.FileSystemManager_Exists_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.exists');
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
          const params = decoder.decodeStructInline(blink.mojom.FileSystemManager_ReadDirectory_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.readDirectory');
          const result = this.impl.readDirectory(params.path, params.listener);
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.FileSystemManager_ReadDirectorySync_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.readDirectorySync');
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
          const params = decoder.decodeStructInline(blink.mojom.FileSystemManager_Write_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.write');
          const result = this.impl.write(params.file_path, params.blob, params.position, params.op_receiver, params.listener);
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.FileSystemManager_WriteSync_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.writeSync');
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
          const params = decoder.decodeStructInline(blink.mojom.FileSystemManager_Truncate_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.truncate');
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
          const params = decoder.decodeStructInline(blink.mojom.FileSystemManager_TruncateSync_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.truncateSync');
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
          const params = decoder.decodeStructInline(blink.mojom.FileSystemManager_CreateSnapshotFile_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.createSnapshotFile');
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
          const params = decoder.decodeStructInline(blink.mojom.FileSystemManager_GetPlatformPath_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.getPlatformPath');
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
          const params = decoder.decodeStructInline(blink.mojom.FileSystemManager_RegisterBlob_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.registerBlob');
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
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

blink.mojom.FileSystemManagerReceiver = blink.mojom.FileSystemManagerReceiver;

blink.mojom.FileSystemManagerPtr = blink.mojom.FileSystemManagerRemote;
blink.mojom.FileSystemManagerRequest = blink.mojom.FileSystemManagerPendingReceiver;

