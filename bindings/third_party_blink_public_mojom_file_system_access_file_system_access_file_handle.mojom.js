// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/file_system_access/file_system_access_file_handle.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var mojo_base = mojo_base || {};

blink.mojom.FileSystemAccessAccessHandleLockModeSpec = { $: mojo.internal.Enum() };
blink.mojom.FileSystemAccessWritableFileStreamLockModeSpec = { $: mojo.internal.Enum() };
blink.mojom.FileSystemAccessAccessHandleFileSpec = { $: {} };
blink.mojom.FileSystemAccessRegularFileSpec = { $: {} };
blink.mojom.FileSystemAccessFileHandle = {};
blink.mojom.FileSystemAccessFileHandle.$interfaceName = 'blink.mojom.FileSystemAccessFileHandle';
blink.mojom.FileSystemAccessFileHandle_GetPermissionStatus_ParamsSpec = { $: {} };
blink.mojom.FileSystemAccessFileHandle_GetPermissionStatus_ResponseParamsSpec = { $: {} };
blink.mojom.FileSystemAccessFileHandle_RequestPermission_ParamsSpec = { $: {} };
blink.mojom.FileSystemAccessFileHandle_RequestPermission_ResponseParamsSpec = { $: {} };
blink.mojom.FileSystemAccessFileHandle_AsBlob_ParamsSpec = { $: {} };
blink.mojom.FileSystemAccessFileHandle_AsBlob_ResponseParamsSpec = { $: {} };
blink.mojom.FileSystemAccessFileHandle_CreateFileWriter_ParamsSpec = { $: {} };
blink.mojom.FileSystemAccessFileHandle_CreateFileWriter_ResponseParamsSpec = { $: {} };
blink.mojom.FileSystemAccessFileHandle_Rename_ParamsSpec = { $: {} };
blink.mojom.FileSystemAccessFileHandle_Rename_ResponseParamsSpec = { $: {} };
blink.mojom.FileSystemAccessFileHandle_Move_ParamsSpec = { $: {} };
blink.mojom.FileSystemAccessFileHandle_Move_ResponseParamsSpec = { $: {} };
blink.mojom.FileSystemAccessFileHandle_Remove_ParamsSpec = { $: {} };
blink.mojom.FileSystemAccessFileHandle_Remove_ResponseParamsSpec = { $: {} };
blink.mojom.FileSystemAccessFileHandle_OpenAccessHandle_ParamsSpec = { $: {} };
blink.mojom.FileSystemAccessFileHandle_OpenAccessHandle_ResponseParamsSpec = { $: {} };
blink.mojom.FileSystemAccessFileHandle_IsSameEntry_ParamsSpec = { $: {} };
blink.mojom.FileSystemAccessFileHandle_IsSameEntry_ResponseParamsSpec = { $: {} };
blink.mojom.FileSystemAccessFileHandle_Transfer_ParamsSpec = { $: {} };
blink.mojom.FileSystemAccessFileHandle_GetUniqueId_ParamsSpec = { $: {} };
blink.mojom.FileSystemAccessFileHandle_GetUniqueId_ResponseParamsSpec = { $: {} };
blink.mojom.FileSystemAccessFileHandle_GetCloudIdentifiers_ParamsSpec = { $: {} };
blink.mojom.FileSystemAccessFileHandle_GetCloudIdentifiers_ResponseParamsSpec = { $: {} };

// Enum: FileSystemAccessAccessHandleLockMode
blink.mojom.FileSystemAccessAccessHandleLockMode = {
  kReadwrite: 0,
  kReadOnly: 1,
  kReadwriteUnsafe: 2,
};

// Enum: FileSystemAccessWritableFileStreamLockMode
blink.mojom.FileSystemAccessWritableFileStreamLockMode = {
  kExclusive: 0,
  kSiloed: 1,
};

// Union: FileSystemAccessAccessHandleFile
mojo.internal.Union(
    blink.mojom.FileSystemAccessAccessHandleFileSpec, 'blink.mojom.FileSystemAccessAccessHandleFile', {
      'regular_file': {
        'ordinal': 0,
        'type': blink.mojom.FileSystemAccessRegularFileSpec.$,
        'nullable': false,
      },
      'incognito_file_delegate': {
        'ordinal': 1,
        'type': mojo.internal.InterfaceProxy(blink.mojom.FileSystemAccessFileDelegateHostRemote),
        'nullable': false,
      },
    });

// Struct: FileSystemAccessRegularFile
mojo.internal.Struct(
    blink.mojom.FileSystemAccessRegularFileSpec, 'blink.mojom.FileSystemAccessRegularFile', [
      mojo.internal.StructField('os_file', 0, 0, mojo_base.mojom.FileSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('file_size', 8, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('file_modification_host', 16, 0, mojo.internal.InterfaceProxy(blink.mojom.FileSystemAccessFileModificationHostRemote), null, false, 0, undefined),
    ],
    [[0, 32]]);

// Interface: FileSystemAccessFileHandle
mojo.internal.Struct(
    blink.mojom.FileSystemAccessFileHandle_GetPermissionStatus_ParamsSpec, 'blink.mojom.FileSystemAccessFileHandle_GetPermissionStatus_Params', [
      mojo.internal.StructField('mode', 0, 0, blink.mojom.FileSystemAccessPermissionModeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.FileSystemAccessFileHandle_GetPermissionStatus_ResponseParamsSpec, 'blink.mojom.FileSystemAccessFileHandle_GetPermissionStatus_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, blink.mojom.PermissionStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.FileSystemAccessFileHandle_RequestPermission_ParamsSpec, 'blink.mojom.FileSystemAccessFileHandle_RequestPermission_Params', [
      mojo.internal.StructField('mode', 0, 0, blink.mojom.FileSystemAccessPermissionModeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.FileSystemAccessFileHandle_RequestPermission_ResponseParamsSpec, 'blink.mojom.FileSystemAccessFileHandle_RequestPermission_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, blink.mojom.FileSystemAccessErrorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('status', 8, 0, blink.mojom.PermissionStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.FileSystemAccessFileHandle_AsBlob_ParamsSpec, 'blink.mojom.FileSystemAccessFileHandle_AsBlob_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.FileSystemAccessFileHandle_AsBlob_ResponseParamsSpec, 'blink.mojom.FileSystemAccessFileHandle_AsBlob_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, blink.mojom.FileSystemAccessErrorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('info', 8, 0, mojo_base.mojom.FileInfoSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('blob', 16, 0, blink.mojom.SerializedBlobSpec.$, null, true, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    blink.mojom.FileSystemAccessFileHandle_CreateFileWriter_ParamsSpec, 'blink.mojom.FileSystemAccessFileHandle_CreateFileWriter_Params', [
      mojo.internal.StructField('mode', 0, 0, blink.mojom.FileSystemAccessWritableFileStreamLockModeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('keep_existing_data', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('auto_close', 8, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.FileSystemAccessFileHandle_CreateFileWriter_ResponseParamsSpec, 'blink.mojom.FileSystemAccessFileHandle_CreateFileWriter_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, blink.mojom.FileSystemAccessErrorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('writer', 8, 0, mojo.internal.InterfaceProxy(blink.mojom.FileSystemAccessFileWriterRemote), null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.FileSystemAccessFileHandle_Rename_ParamsSpec, 'blink.mojom.FileSystemAccessFileHandle_Rename_Params', [
      mojo.internal.StructField('new_entry_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.FileSystemAccessFileHandle_Rename_ResponseParamsSpec, 'blink.mojom.FileSystemAccessFileHandle_Rename_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, blink.mojom.FileSystemAccessErrorSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.FileSystemAccessFileHandle_Move_ParamsSpec, 'blink.mojom.FileSystemAccessFileHandle_Move_Params', [
      mojo.internal.StructField('destination_directory', 0, 0, mojo.internal.InterfaceProxy(blink.mojom.FileSystemAccessTransferTokenRemote), null, false, 0, undefined),
      mojo.internal.StructField('new_entry_name', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.FileSystemAccessFileHandle_Move_ResponseParamsSpec, 'blink.mojom.FileSystemAccessFileHandle_Move_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, blink.mojom.FileSystemAccessErrorSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.FileSystemAccessFileHandle_Remove_ParamsSpec, 'blink.mojom.FileSystemAccessFileHandle_Remove_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.FileSystemAccessFileHandle_Remove_ResponseParamsSpec, 'blink.mojom.FileSystemAccessFileHandle_Remove_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, blink.mojom.FileSystemAccessErrorSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.FileSystemAccessFileHandle_OpenAccessHandle_ParamsSpec, 'blink.mojom.FileSystemAccessFileHandle_OpenAccessHandle_Params', [
      mojo.internal.StructField('mode', 0, 0, blink.mojom.FileSystemAccessAccessHandleLockModeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.FileSystemAccessFileHandle_OpenAccessHandle_ResponseParamsSpec, 'blink.mojom.FileSystemAccessFileHandle_OpenAccessHandle_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, blink.mojom.FileSystemAccessErrorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('file', 8, 0, blink.mojom.FileSystemAccessAccessHandleFileSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('access_handle_host', 16, 0, mojo.internal.InterfaceProxy(blink.mojom.FileSystemAccessAccessHandleHostRemote), null, true, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    blink.mojom.FileSystemAccessFileHandle_IsSameEntry_ParamsSpec, 'blink.mojom.FileSystemAccessFileHandle_IsSameEntry_Params', [
      mojo.internal.StructField('other', 0, 0, mojo.internal.InterfaceProxy(blink.mojom.FileSystemAccessTransferTokenRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.FileSystemAccessFileHandle_IsSameEntry_ResponseParamsSpec, 'blink.mojom.FileSystemAccessFileHandle_IsSameEntry_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, blink.mojom.FileSystemAccessErrorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('is_same', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.FileSystemAccessFileHandle_Transfer_ParamsSpec, 'blink.mojom.FileSystemAccessFileHandle_Transfer_Params', [
      mojo.internal.StructField('token', 0, 0, mojo.internal.InterfaceRequest(blink.mojom.FileSystemAccessTransferTokenRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.FileSystemAccessFileHandle_GetUniqueId_ParamsSpec, 'blink.mojom.FileSystemAccessFileHandle_GetUniqueId_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.FileSystemAccessFileHandle_GetUniqueId_ResponseParamsSpec, 'blink.mojom.FileSystemAccessFileHandle_GetUniqueId_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, blink.mojom.FileSystemAccessErrorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('id', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.FileSystemAccessFileHandle_GetCloudIdentifiers_ParamsSpec, 'blink.mojom.FileSystemAccessFileHandle_GetCloudIdentifiers_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.FileSystemAccessFileHandle_GetCloudIdentifiers_ResponseParamsSpec, 'blink.mojom.FileSystemAccessFileHandle_GetCloudIdentifiers_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, blink.mojom.FileSystemAccessErrorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('cloud_identifiers', 8, 0, mojo.internal.Array(blink.mojom.FileSystemAccessCloudIdentifierSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

blink.mojom.FileSystemAccessFileHandlePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.FileSystemAccessFileHandleRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.FileSystemAccessFileHandle';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.FileSystemAccessFileHandlePendingReceiver,
      handle);
    this.$ = new blink.mojom.FileSystemAccessFileHandleRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.FileSystemAccessFileHandleRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getPermissionStatus(mode) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.FileSystemAccessFileHandle_GetPermissionStatus_ParamsSpec,
      blink.mojom.FileSystemAccessFileHandle_GetPermissionStatus_ResponseParamsSpec,
      [mode],
      false);
  }

  requestPermission(mode) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.FileSystemAccessFileHandle_RequestPermission_ParamsSpec,
      blink.mojom.FileSystemAccessFileHandle_RequestPermission_ResponseParamsSpec,
      [mode],
      false);
  }

  asBlob() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.FileSystemAccessFileHandle_AsBlob_ParamsSpec,
      blink.mojom.FileSystemAccessFileHandle_AsBlob_ResponseParamsSpec,
      [],
      false);
  }

  createFileWriter(keep_existing_data, auto_close, mode) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      blink.mojom.FileSystemAccessFileHandle_CreateFileWriter_ParamsSpec,
      blink.mojom.FileSystemAccessFileHandle_CreateFileWriter_ResponseParamsSpec,
      [keep_existing_data, auto_close, mode],
      false);
  }

  rename(new_entry_name) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      blink.mojom.FileSystemAccessFileHandle_Rename_ParamsSpec,
      blink.mojom.FileSystemAccessFileHandle_Rename_ResponseParamsSpec,
      [new_entry_name],
      false);
  }

  move(destination_directory, new_entry_name) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      blink.mojom.FileSystemAccessFileHandle_Move_ParamsSpec,
      blink.mojom.FileSystemAccessFileHandle_Move_ResponseParamsSpec,
      [destination_directory, new_entry_name],
      false);
  }

  remove() {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      blink.mojom.FileSystemAccessFileHandle_Remove_ParamsSpec,
      blink.mojom.FileSystemAccessFileHandle_Remove_ResponseParamsSpec,
      [],
      false);
  }

  openAccessHandle(mode) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      blink.mojom.FileSystemAccessFileHandle_OpenAccessHandle_ParamsSpec,
      blink.mojom.FileSystemAccessFileHandle_OpenAccessHandle_ResponseParamsSpec,
      [mode],
      false);
  }

  isSameEntry(other) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      blink.mojom.FileSystemAccessFileHandle_IsSameEntry_ParamsSpec,
      blink.mojom.FileSystemAccessFileHandle_IsSameEntry_ResponseParamsSpec,
      [other],
      false);
  }

  transfer(token) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      blink.mojom.FileSystemAccessFileHandle_Transfer_ParamsSpec,
      null,
      [token],
      false);
  }

  getUniqueId() {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      blink.mojom.FileSystemAccessFileHandle_GetUniqueId_ParamsSpec,
      blink.mojom.FileSystemAccessFileHandle_GetUniqueId_ResponseParamsSpec,
      [],
      false);
  }

  getCloudIdentifiers() {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      blink.mojom.FileSystemAccessFileHandle_GetCloudIdentifiers_ParamsSpec,
      blink.mojom.FileSystemAccessFileHandle_GetCloudIdentifiers_ResponseParamsSpec,
      [],
      false);
  }

};

blink.mojom.FileSystemAccessFileHandle.getRemote = function() {
  let remote = new blink.mojom.FileSystemAccessFileHandleRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.FileSystemAccessFileHandle',
    'context');
  return remote.$;
};

blink.mojom.FileSystemAccessFileHandleReceiver = class {
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
        
        // Try Method 0: GetPermissionStatus
        try {
             decoder.decodeStruct(blink.mojom.FileSystemAccessFileHandle_GetPermissionStatus_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetPermissionStatus (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 1: RequestPermission
        try {
             decoder.decodeStruct(blink.mojom.FileSystemAccessFileHandle_RequestPermission_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RequestPermission (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 2: AsBlob
        try {
             decoder.decodeStruct(blink.mojom.FileSystemAccessFileHandle_AsBlob_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AsBlob (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 3: CreateFileWriter
        try {
             decoder.decodeStruct(blink.mojom.FileSystemAccessFileHandle_CreateFileWriter_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreateFileWriter (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 4: Rename
        try {
             decoder.decodeStruct(blink.mojom.FileSystemAccessFileHandle_Rename_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Rename (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 5: Move
        try {
             decoder.decodeStruct(blink.mojom.FileSystemAccessFileHandle_Move_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Move (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 6: Remove
        try {
             decoder.decodeStruct(blink.mojom.FileSystemAccessFileHandle_Remove_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Remove (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 7: OpenAccessHandle
        try {
             decoder.decodeStruct(blink.mojom.FileSystemAccessFileHandle_OpenAccessHandle_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OpenAccessHandle (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 8: IsSameEntry
        try {
             decoder.decodeStruct(blink.mojom.FileSystemAccessFileHandle_IsSameEntry_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> IsSameEntry (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 9: Transfer
        try {
             decoder.decodeStruct(blink.mojom.FileSystemAccessFileHandle_Transfer_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Transfer (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 10: GetUniqueId
        try {
             decoder.decodeStruct(blink.mojom.FileSystemAccessFileHandle_GetUniqueId_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetUniqueId (10)');
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 11: GetCloudIdentifiers
        try {
             decoder.decodeStruct(blink.mojom.FileSystemAccessFileHandle_GetCloudIdentifiers_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetCloudIdentifiers (11)');
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.FileSystemAccessFileHandle_GetPermissionStatus_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getPermissionStatus');
          const result = this.impl.getPermissionStatus(params.mode);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.FileSystemAccessFileHandle_GetPermissionStatus_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.FileSystemAccessFileHandle_RequestPermission_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.requestPermission');
          const result = this.impl.requestPermission(params.mode);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.FileSystemAccessFileHandle_RequestPermission_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.FileSystemAccessFileHandle_AsBlob_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.asBlob');
          const result = this.impl.asBlob();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.FileSystemAccessFileHandle_AsBlob_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.FileSystemAccessFileHandle_CreateFileWriter_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.createFileWriter');
          const result = this.impl.createFileWriter(params.keep_existing_data, params.auto_close, params.mode);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.FileSystemAccessFileHandle_CreateFileWriter_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.FileSystemAccessFileHandle_Rename_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.rename');
          const result = this.impl.rename(params.new_entry_name);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.FileSystemAccessFileHandle_Rename_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.FileSystemAccessFileHandle_Move_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.move');
          const result = this.impl.move(params.destination_directory, params.new_entry_name);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.FileSystemAccessFileHandle_Move_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.FileSystemAccessFileHandle_Remove_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.remove');
          const result = this.impl.remove();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.FileSystemAccessFileHandle_Remove_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.FileSystemAccessFileHandle_OpenAccessHandle_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.openAccessHandle');
          const result = this.impl.openAccessHandle(params.mode);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.FileSystemAccessFileHandle_OpenAccessHandle_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.FileSystemAccessFileHandle_IsSameEntry_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.isSameEntry');
          const result = this.impl.isSameEntry(params.other);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.FileSystemAccessFileHandle_IsSameEntry_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.FileSystemAccessFileHandle_Transfer_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.transfer');
          const result = this.impl.transfer(params.token);
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.FileSystemAccessFileHandle_GetUniqueId_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getUniqueId');
          const result = this.impl.getUniqueId();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.FileSystemAccessFileHandle_GetUniqueId_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.FileSystemAccessFileHandle_GetCloudIdentifiers_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getCloudIdentifiers');
          const result = this.impl.getCloudIdentifiers();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.FileSystemAccessFileHandle_GetCloudIdentifiers_ResponseParamsSpec);
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

blink.mojom.FileSystemAccessFileHandleReceiver = blink.mojom.FileSystemAccessFileHandleReceiver;

blink.mojom.FileSystemAccessFileHandlePtr = blink.mojom.FileSystemAccessFileHandleRemote;
blink.mojom.FileSystemAccessFileHandleRequest = blink.mojom.FileSystemAccessFileHandlePendingReceiver;

