// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/file_system_access/file_system_access_file_handle.mojom
// Module: blink.mojom

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
  getPermissionStatus(mode) {
    return this.$.getPermissionStatus(mode);
  }
  requestPermission(mode) {
    return this.$.requestPermission(mode);
  }
  asBlob() {
    return this.$.asBlob();
  }
  createFileWriter(keep_existing_data, auto_close, mode) {
    return this.$.createFileWriter(keep_existing_data, auto_close, mode);
  }
  rename(new_entry_name) {
    return this.$.rename(new_entry_name);
  }
  move(destination_directory, new_entry_name) {
    return this.$.move(destination_directory, new_entry_name);
  }
  remove() {
    return this.$.remove();
  }
  openAccessHandle(mode) {
    return this.$.openAccessHandle(mode);
  }
  isSameEntry(other) {
    return this.$.isSameEntry(other);
  }
  transfer(token) {
    return this.$.transfer(token);
  }
  getUniqueId() {
    return this.$.getUniqueId();
  }
  getCloudIdentifiers() {
    return this.$.getCloudIdentifiers();
  }
};

blink.mojom.FileSystemAccessFileHandleRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('FileSystemAccessFileHandle', [
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

  getPermissionStatus(mode) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      blink.mojom.FileSystemAccessFileHandle_GetPermissionStatus_ParamsSpec,
      blink.mojom.FileSystemAccessFileHandle_GetPermissionStatus_ResponseParamsSpec,
      [mode],
      false);
  }

  requestPermission(mode) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      blink.mojom.FileSystemAccessFileHandle_RequestPermission_ParamsSpec,
      blink.mojom.FileSystemAccessFileHandle_RequestPermission_ResponseParamsSpec,
      [mode],
      false);
  }

  asBlob() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      blink.mojom.FileSystemAccessFileHandle_AsBlob_ParamsSpec,
      blink.mojom.FileSystemAccessFileHandle_AsBlob_ResponseParamsSpec,
      [],
      false);
  }

  createFileWriter(keep_existing_data, auto_close, mode) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      blink.mojom.FileSystemAccessFileHandle_CreateFileWriter_ParamsSpec,
      blink.mojom.FileSystemAccessFileHandle_CreateFileWriter_ResponseParamsSpec,
      [keep_existing_data, auto_close, mode],
      false);
  }

  rename(new_entry_name) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      blink.mojom.FileSystemAccessFileHandle_Rename_ParamsSpec,
      blink.mojom.FileSystemAccessFileHandle_Rename_ResponseParamsSpec,
      [new_entry_name],
      false);
  }

  move(destination_directory, new_entry_name) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      blink.mojom.FileSystemAccessFileHandle_Move_ParamsSpec,
      blink.mojom.FileSystemAccessFileHandle_Move_ResponseParamsSpec,
      [destination_directory, new_entry_name],
      false);
  }

  remove() {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      blink.mojom.FileSystemAccessFileHandle_Remove_ParamsSpec,
      blink.mojom.FileSystemAccessFileHandle_Remove_ResponseParamsSpec,
      [],
      false);
  }

  openAccessHandle(mode) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      blink.mojom.FileSystemAccessFileHandle_OpenAccessHandle_ParamsSpec,
      blink.mojom.FileSystemAccessFileHandle_OpenAccessHandle_ResponseParamsSpec,
      [mode],
      false);
  }

  isSameEntry(other) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      blink.mojom.FileSystemAccessFileHandle_IsSameEntry_ParamsSpec,
      blink.mojom.FileSystemAccessFileHandle_IsSameEntry_ResponseParamsSpec,
      [other],
      false);
  }

  transfer(token) {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      blink.mojom.FileSystemAccessFileHandle_Transfer_ParamsSpec,
      null,
      [token],
      false);
  }

  getUniqueId() {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      blink.mojom.FileSystemAccessFileHandle_GetUniqueId_ParamsSpec,
      blink.mojom.FileSystemAccessFileHandle_GetUniqueId_ResponseParamsSpec,
      [],
      false);
  }

  getCloudIdentifiers() {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
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
    const ordinals = window.mojoScrambler.getOrdinals('FileSystemAccessFileHandle', [
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
    this.router_.onConnectionError.addListener(() => {
       console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
    });
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
             decoder.decodeStructInline(blink.mojom.FileSystemAccessFileHandle_GetPermissionStatus_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.FileSystemAccessFileHandle_RequestPermission_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.FileSystemAccessFileHandle_AsBlob_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.FileSystemAccessFileHandle_CreateFileWriter_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.FileSystemAccessFileHandle_Rename_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.FileSystemAccessFileHandle_Move_ParamsSpec);
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.FileSystemAccessFileHandle_Remove_ParamsSpec);
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.FileSystemAccessFileHandle_OpenAccessHandle_ParamsSpec);
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.FileSystemAccessFileHandle_IsSameEntry_ParamsSpec);
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.FileSystemAccessFileHandle_Transfer_ParamsSpec);
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.FileSystemAccessFileHandle_GetUniqueId_ParamsSpec);
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.FileSystemAccessFileHandle_GetCloudIdentifiers_ParamsSpec);
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.FileSystemAccessFileHandle_GetPermissionStatus_ParamsSpec.$.structSpec);
          const result = this.impl.getPermissionStatus(params.mode);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.FileSystemAccessFileHandle_GetPermissionStatus_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.FileSystemAccessFileHandle_RequestPermission_ParamsSpec.$.structSpec);
          const result = this.impl.requestPermission(params.mode);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.FileSystemAccessFileHandle_RequestPermission_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.FileSystemAccessFileHandle_AsBlob_ParamsSpec.$.structSpec);
          const result = this.impl.asBlob();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.FileSystemAccessFileHandle_AsBlob_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.FileSystemAccessFileHandle_CreateFileWriter_ParamsSpec.$.structSpec);
          const result = this.impl.createFileWriter(params.keep_existing_data, params.auto_close, params.mode);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.FileSystemAccessFileHandle_CreateFileWriter_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.FileSystemAccessFileHandle_Rename_ParamsSpec.$.structSpec);
          const result = this.impl.rename(params.new_entry_name);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.FileSystemAccessFileHandle_Rename_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.FileSystemAccessFileHandle_Move_ParamsSpec.$.structSpec);
          const result = this.impl.move(params.destination_directory, params.new_entry_name);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.FileSystemAccessFileHandle_Move_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.FileSystemAccessFileHandle_Remove_ParamsSpec.$.structSpec);
          const result = this.impl.remove();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.FileSystemAccessFileHandle_Remove_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.FileSystemAccessFileHandle_OpenAccessHandle_ParamsSpec.$.structSpec);
          const result = this.impl.openAccessHandle(params.mode);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.FileSystemAccessFileHandle_OpenAccessHandle_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.FileSystemAccessFileHandle_IsSameEntry_ParamsSpec.$.structSpec);
          const result = this.impl.isSameEntry(params.other);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.FileSystemAccessFileHandle_IsSameEntry_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.FileSystemAccessFileHandle_Transfer_ParamsSpec.$.structSpec);
          const result = this.impl.transfer(params.token);
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.FileSystemAccessFileHandle_GetUniqueId_ParamsSpec.$.structSpec);
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
          const params = decoder.decodeStructInline(blink.mojom.FileSystemAccessFileHandle_GetCloudIdentifiers_ParamsSpec.$.structSpec);
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
      } catch (err) {}
    }});
  }
};

blink.mojom.FileSystemAccessFileHandleReceiver = blink.mojom.FileSystemAccessFileHandleReceiver;

blink.mojom.FileSystemAccessFileHandlePtr = blink.mojom.FileSystemAccessFileHandleRemote;
blink.mojom.FileSystemAccessFileHandleRequest = blink.mojom.FileSystemAccessFileHandlePendingReceiver;

