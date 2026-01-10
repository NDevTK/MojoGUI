// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/file_system_access/file_system_access_directory_handle.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};

blink.mojom.FileSystemAccessHandleSpec = { $: {} };
blink.mojom.FileSystemAccessEntrySpec = { $: {} };
blink.mojom.FileSystemAccessDirectoryEntriesListener = {};
blink.mojom.FileSystemAccessDirectoryEntriesListener.$interfaceName = 'blink.mojom.FileSystemAccessDirectoryEntriesListener';
blink.mojom.FileSystemAccessDirectoryEntriesListener_DidReadDirectory_ParamsSpec = { $: {} };
blink.mojom.FileSystemAccessDirectoryHandle = {};
blink.mojom.FileSystemAccessDirectoryHandle.$interfaceName = 'blink.mojom.FileSystemAccessDirectoryHandle';
blink.mojom.FileSystemAccessDirectoryHandle_GetPermissionStatus_ParamsSpec = { $: {} };
blink.mojom.FileSystemAccessDirectoryHandle_GetPermissionStatus_ResponseParamsSpec = { $: {} };
blink.mojom.FileSystemAccessDirectoryHandle_RequestPermission_ParamsSpec = { $: {} };
blink.mojom.FileSystemAccessDirectoryHandle_RequestPermission_ResponseParamsSpec = { $: {} };
blink.mojom.FileSystemAccessDirectoryHandle_GetFile_ParamsSpec = { $: {} };
blink.mojom.FileSystemAccessDirectoryHandle_GetFile_ResponseParamsSpec = { $: {} };
blink.mojom.FileSystemAccessDirectoryHandle_GetDirectory_ParamsSpec = { $: {} };
blink.mojom.FileSystemAccessDirectoryHandle_GetDirectory_ResponseParamsSpec = { $: {} };
blink.mojom.FileSystemAccessDirectoryHandle_GetEntries_ParamsSpec = { $: {} };
blink.mojom.FileSystemAccessDirectoryHandle_Rename_ParamsSpec = { $: {} };
blink.mojom.FileSystemAccessDirectoryHandle_Rename_ResponseParamsSpec = { $: {} };
blink.mojom.FileSystemAccessDirectoryHandle_Move_ParamsSpec = { $: {} };
blink.mojom.FileSystemAccessDirectoryHandle_Move_ResponseParamsSpec = { $: {} };
blink.mojom.FileSystemAccessDirectoryHandle_Remove_ParamsSpec = { $: {} };
blink.mojom.FileSystemAccessDirectoryHandle_Remove_ResponseParamsSpec = { $: {} };
blink.mojom.FileSystemAccessDirectoryHandle_RemoveEntry_ParamsSpec = { $: {} };
blink.mojom.FileSystemAccessDirectoryHandle_RemoveEntry_ResponseParamsSpec = { $: {} };
blink.mojom.FileSystemAccessDirectoryHandle_Resolve_ParamsSpec = { $: {} };
blink.mojom.FileSystemAccessDirectoryHandle_Resolve_ResponseParamsSpec = { $: {} };
blink.mojom.FileSystemAccessDirectoryHandle_Transfer_ParamsSpec = { $: {} };
blink.mojom.FileSystemAccessDirectoryHandle_GetUniqueId_ParamsSpec = { $: {} };
blink.mojom.FileSystemAccessDirectoryHandle_GetUniqueId_ResponseParamsSpec = { $: {} };
blink.mojom.FileSystemAccessDirectoryHandle_GetCloudIdentifiers_ParamsSpec = { $: {} };
blink.mojom.FileSystemAccessDirectoryHandle_GetCloudIdentifiers_ResponseParamsSpec = { $: {} };

// Union: FileSystemAccessHandle
mojo.internal.Union(
    blink.mojom.FileSystemAccessHandleSpec, 'blink.mojom.FileSystemAccessHandle', {
      'file': {
        'ordinal': 0,
        'type': mojo.internal.InterfaceProxy(blink.mojom.FileSystemAccessFileHandleRemote),
        'nullable': false,
      },
      'directory': {
        'ordinal': 1,
        'type': mojo.internal.InterfaceProxy(blink.mojom.FileSystemAccessDirectoryHandleSpec),
        'nullable': false,
      },
    });

// Struct: FileSystemAccessEntry
mojo.internal.Struct(
    blink.mojom.FileSystemAccessEntrySpec, 'blink.mojom.FileSystemAccessEntry', [
      mojo.internal.StructField('entry_handle', 0, 0, blink.mojom.FileSystemAccessHandleSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('name', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: FileSystemAccessDirectoryEntriesListener
mojo.internal.Struct(
    blink.mojom.FileSystemAccessDirectoryEntriesListener_DidReadDirectory_ParamsSpec, 'blink.mojom.FileSystemAccessDirectoryEntriesListener_DidReadDirectory_Params', [
      mojo.internal.StructField('result', 0, 0, blink.mojom.FileSystemAccessErrorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('entries', 8, 0, mojo.internal.Array(blink.mojom.FileSystemAccessEntrySpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('has_more_entries', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

blink.mojom.FileSystemAccessDirectoryEntriesListenerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.FileSystemAccessDirectoryEntriesListenerRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.FileSystemAccessDirectoryEntriesListener';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.FileSystemAccessDirectoryEntriesListenerPendingReceiver,
      handle);
    this.$ = new blink.mojom.FileSystemAccessDirectoryEntriesListenerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.FileSystemAccessDirectoryEntriesListenerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  didReadDirectory(result, entries, has_more_entries) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.FileSystemAccessDirectoryEntriesListener_DidReadDirectory_ParamsSpec,
      null,
      [result, entries, has_more_entries],
      false);
  }

};

blink.mojom.FileSystemAccessDirectoryEntriesListener.getRemote = function() {
  let remote = new blink.mojom.FileSystemAccessDirectoryEntriesListenerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.FileSystemAccessDirectoryEntriesListener',
    'context');
  return remote.$;
};

blink.mojom.FileSystemAccessDirectoryEntriesListenerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
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
      switch (header.ordinal) {
        case 0: {
          const params = blink.mojom.FileSystemAccessDirectoryEntriesListener_DidReadDirectory_ParamsSpec.$.decode(message.payload);
          const result = this.impl.didReadDirectory(params.result, params.entries, params.has_more_entries);
          break;
        }
      }
    }});
  }
};

blink.mojom.FileSystemAccessDirectoryEntriesListenerReceiver = blink.mojom.FileSystemAccessDirectoryEntriesListenerReceiver;

blink.mojom.FileSystemAccessDirectoryEntriesListenerPtr = blink.mojom.FileSystemAccessDirectoryEntriesListenerRemote;
blink.mojom.FileSystemAccessDirectoryEntriesListenerRequest = blink.mojom.FileSystemAccessDirectoryEntriesListenerPendingReceiver;


// Interface: FileSystemAccessDirectoryHandle
mojo.internal.Struct(
    blink.mojom.FileSystemAccessDirectoryHandle_GetPermissionStatus_ParamsSpec, 'blink.mojom.FileSystemAccessDirectoryHandle_GetPermissionStatus_Params', [
      mojo.internal.StructField('mode', 0, 0, blink.mojom.FileSystemAccessPermissionModeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.FileSystemAccessDirectoryHandle_GetPermissionStatus_ResponseParamsSpec, 'blink.mojom.FileSystemAccessDirectoryHandle_GetPermissionStatus_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, blink.mojom.PermissionStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.FileSystemAccessDirectoryHandle_RequestPermission_ParamsSpec, 'blink.mojom.FileSystemAccessDirectoryHandle_RequestPermission_Params', [
      mojo.internal.StructField('mode', 0, 0, blink.mojom.FileSystemAccessPermissionModeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.FileSystemAccessDirectoryHandle_RequestPermission_ResponseParamsSpec, 'blink.mojom.FileSystemAccessDirectoryHandle_RequestPermission_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, blink.mojom.FileSystemAccessErrorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('status', 8, 0, blink.mojom.PermissionStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.FileSystemAccessDirectoryHandle_GetFile_ParamsSpec, 'blink.mojom.FileSystemAccessDirectoryHandle_GetFile_Params', [
      mojo.internal.StructField('basename', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('create', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.FileSystemAccessDirectoryHandle_GetFile_ResponseParamsSpec, 'blink.mojom.FileSystemAccessDirectoryHandle_GetFile_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, blink.mojom.FileSystemAccessErrorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('file', 8, 0, mojo.internal.InterfaceProxy(blink.mojom.FileSystemAccessFileHandleRemote), null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.FileSystemAccessDirectoryHandle_GetDirectory_ParamsSpec, 'blink.mojom.FileSystemAccessDirectoryHandle_GetDirectory_Params', [
      mojo.internal.StructField('basename', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('create', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.FileSystemAccessDirectoryHandle_GetDirectory_ResponseParamsSpec, 'blink.mojom.FileSystemAccessDirectoryHandle_GetDirectory_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, blink.mojom.FileSystemAccessErrorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('directory', 8, 0, mojo.internal.InterfaceProxy(blink.mojom.FileSystemAccessDirectoryHandleSpec), null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.FileSystemAccessDirectoryHandle_GetEntries_ParamsSpec, 'blink.mojom.FileSystemAccessDirectoryHandle_GetEntries_Params', [
      mojo.internal.StructField('listener', 0, 0, mojo.internal.InterfaceProxy(blink.mojom.FileSystemAccessDirectoryEntriesListenerSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.FileSystemAccessDirectoryHandle_Rename_ParamsSpec, 'blink.mojom.FileSystemAccessDirectoryHandle_Rename_Params', [
      mojo.internal.StructField('new_entry_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.FileSystemAccessDirectoryHandle_Rename_ResponseParamsSpec, 'blink.mojom.FileSystemAccessDirectoryHandle_Rename_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, blink.mojom.FileSystemAccessErrorSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.FileSystemAccessDirectoryHandle_Move_ParamsSpec, 'blink.mojom.FileSystemAccessDirectoryHandle_Move_Params', [
      mojo.internal.StructField('destination_directory', 0, 0, mojo.internal.InterfaceProxy(blink.mojom.FileSystemAccessTransferTokenRemote), null, false, 0, undefined),
      mojo.internal.StructField('new_entry_name', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.FileSystemAccessDirectoryHandle_Move_ResponseParamsSpec, 'blink.mojom.FileSystemAccessDirectoryHandle_Move_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, blink.mojom.FileSystemAccessErrorSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.FileSystemAccessDirectoryHandle_Remove_ParamsSpec, 'blink.mojom.FileSystemAccessDirectoryHandle_Remove_Params', [
      mojo.internal.StructField('recurse', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.FileSystemAccessDirectoryHandle_Remove_ResponseParamsSpec, 'blink.mojom.FileSystemAccessDirectoryHandle_Remove_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, blink.mojom.FileSystemAccessErrorSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.FileSystemAccessDirectoryHandle_RemoveEntry_ParamsSpec, 'blink.mojom.FileSystemAccessDirectoryHandle_RemoveEntry_Params', [
      mojo.internal.StructField('basename', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('recurse', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.FileSystemAccessDirectoryHandle_RemoveEntry_ResponseParamsSpec, 'blink.mojom.FileSystemAccessDirectoryHandle_RemoveEntry_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, blink.mojom.FileSystemAccessErrorSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.FileSystemAccessDirectoryHandle_Resolve_ParamsSpec, 'blink.mojom.FileSystemAccessDirectoryHandle_Resolve_Params', [
      mojo.internal.StructField('possible_child', 0, 0, mojo.internal.InterfaceProxy(blink.mojom.FileSystemAccessTransferTokenRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.FileSystemAccessDirectoryHandle_Resolve_ResponseParamsSpec, 'blink.mojom.FileSystemAccessDirectoryHandle_Resolve_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, blink.mojom.FileSystemAccessErrorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('path', 8, 0, mojo.internal.Array(mojo.internal.String, false), null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.FileSystemAccessDirectoryHandle_Transfer_ParamsSpec, 'blink.mojom.FileSystemAccessDirectoryHandle_Transfer_Params', [
      mojo.internal.StructField('token', 0, 0, mojo.internal.InterfaceRequest(blink.mojom.FileSystemAccessTransferTokenRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.FileSystemAccessDirectoryHandle_GetUniqueId_ParamsSpec, 'blink.mojom.FileSystemAccessDirectoryHandle_GetUniqueId_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.FileSystemAccessDirectoryHandle_GetUniqueId_ResponseParamsSpec, 'blink.mojom.FileSystemAccessDirectoryHandle_GetUniqueId_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, blink.mojom.FileSystemAccessErrorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('id', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.FileSystemAccessDirectoryHandle_GetCloudIdentifiers_ParamsSpec, 'blink.mojom.FileSystemAccessDirectoryHandle_GetCloudIdentifiers_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.FileSystemAccessDirectoryHandle_GetCloudIdentifiers_ResponseParamsSpec, 'blink.mojom.FileSystemAccessDirectoryHandle_GetCloudIdentifiers_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, blink.mojom.FileSystemAccessErrorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('cloud_identifiers', 8, 0, mojo.internal.Array(blink.mojom.FileSystemAccessCloudIdentifierSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

blink.mojom.FileSystemAccessDirectoryHandlePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.FileSystemAccessDirectoryHandleRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.FileSystemAccessDirectoryHandle';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.FileSystemAccessDirectoryHandlePendingReceiver,
      handle);
    this.$ = new blink.mojom.FileSystemAccessDirectoryHandleRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.FileSystemAccessDirectoryHandleRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getPermissionStatus(mode) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.FileSystemAccessDirectoryHandle_GetPermissionStatus_ParamsSpec,
      blink.mojom.FileSystemAccessDirectoryHandle_GetPermissionStatus_ResponseParamsSpec,
      [mode],
      false);
  }

  requestPermission(mode) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.FileSystemAccessDirectoryHandle_RequestPermission_ParamsSpec,
      blink.mojom.FileSystemAccessDirectoryHandle_RequestPermission_ResponseParamsSpec,
      [mode],
      false);
  }

  getFile(basename, create) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.FileSystemAccessDirectoryHandle_GetFile_ParamsSpec,
      blink.mojom.FileSystemAccessDirectoryHandle_GetFile_ResponseParamsSpec,
      [basename, create],
      false);
  }

  getDirectory(basename, create) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      blink.mojom.FileSystemAccessDirectoryHandle_GetDirectory_ParamsSpec,
      blink.mojom.FileSystemAccessDirectoryHandle_GetDirectory_ResponseParamsSpec,
      [basename, create],
      false);
  }

  getEntries(listener) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      blink.mojom.FileSystemAccessDirectoryHandle_GetEntries_ParamsSpec,
      null,
      [listener],
      false);
  }

  rename(new_entry_name) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      blink.mojom.FileSystemAccessDirectoryHandle_Rename_ParamsSpec,
      blink.mojom.FileSystemAccessDirectoryHandle_Rename_ResponseParamsSpec,
      [new_entry_name],
      false);
  }

  move(destination_directory, new_entry_name) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      blink.mojom.FileSystemAccessDirectoryHandle_Move_ParamsSpec,
      blink.mojom.FileSystemAccessDirectoryHandle_Move_ResponseParamsSpec,
      [destination_directory, new_entry_name],
      false);
  }

  remove(recurse) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      blink.mojom.FileSystemAccessDirectoryHandle_Remove_ParamsSpec,
      blink.mojom.FileSystemAccessDirectoryHandle_Remove_ResponseParamsSpec,
      [recurse],
      false);
  }

  removeEntry(basename, recurse) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      blink.mojom.FileSystemAccessDirectoryHandle_RemoveEntry_ParamsSpec,
      blink.mojom.FileSystemAccessDirectoryHandle_RemoveEntry_ResponseParamsSpec,
      [basename, recurse],
      false);
  }

  resolve(possible_child) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      blink.mojom.FileSystemAccessDirectoryHandle_Resolve_ParamsSpec,
      blink.mojom.FileSystemAccessDirectoryHandle_Resolve_ResponseParamsSpec,
      [possible_child],
      false);
  }

  transfer(token) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      blink.mojom.FileSystemAccessDirectoryHandle_Transfer_ParamsSpec,
      null,
      [token],
      false);
  }

  getUniqueId() {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      blink.mojom.FileSystemAccessDirectoryHandle_GetUniqueId_ParamsSpec,
      blink.mojom.FileSystemAccessDirectoryHandle_GetUniqueId_ResponseParamsSpec,
      [],
      false);
  }

  getCloudIdentifiers() {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      blink.mojom.FileSystemAccessDirectoryHandle_GetCloudIdentifiers_ParamsSpec,
      blink.mojom.FileSystemAccessDirectoryHandle_GetCloudIdentifiers_ResponseParamsSpec,
      [],
      false);
  }

};

blink.mojom.FileSystemAccessDirectoryHandle.getRemote = function() {
  let remote = new blink.mojom.FileSystemAccessDirectoryHandleRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.FileSystemAccessDirectoryHandle',
    'context');
  return remote.$;
};

blink.mojom.FileSystemAccessDirectoryHandleReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
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
      switch (header.ordinal) {
        case 0: {
          const params = blink.mojom.FileSystemAccessDirectoryHandle_GetPermissionStatus_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getPermissionStatus(params.mode);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.FileSystemAccessDirectoryHandle_GetPermissionStatus_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const params = blink.mojom.FileSystemAccessDirectoryHandle_RequestPermission_ParamsSpec.$.decode(message.payload);
          const result = this.impl.requestPermission(params.mode);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.FileSystemAccessDirectoryHandle_RequestPermission_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const params = blink.mojom.FileSystemAccessDirectoryHandle_GetFile_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getFile(params.basename, params.create);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.FileSystemAccessDirectoryHandle_GetFile_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const params = blink.mojom.FileSystemAccessDirectoryHandle_GetDirectory_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getDirectory(params.basename, params.create);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.FileSystemAccessDirectoryHandle_GetDirectory_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 4: {
          const params = blink.mojom.FileSystemAccessDirectoryHandle_GetEntries_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getEntries(params.listener);
          break;
        }
        case 5: {
          const params = blink.mojom.FileSystemAccessDirectoryHandle_Rename_ParamsSpec.$.decode(message.payload);
          const result = this.impl.rename(params.new_entry_name);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.FileSystemAccessDirectoryHandle_Rename_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 6: {
          const params = blink.mojom.FileSystemAccessDirectoryHandle_Move_ParamsSpec.$.decode(message.payload);
          const result = this.impl.move(params.destination_directory, params.new_entry_name);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.FileSystemAccessDirectoryHandle_Move_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 7: {
          const params = blink.mojom.FileSystemAccessDirectoryHandle_Remove_ParamsSpec.$.decode(message.payload);
          const result = this.impl.remove(params.recurse);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.FileSystemAccessDirectoryHandle_Remove_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 8: {
          const params = blink.mojom.FileSystemAccessDirectoryHandle_RemoveEntry_ParamsSpec.$.decode(message.payload);
          const result = this.impl.removeEntry(params.basename, params.recurse);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.FileSystemAccessDirectoryHandle_RemoveEntry_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 9: {
          const params = blink.mojom.FileSystemAccessDirectoryHandle_Resolve_ParamsSpec.$.decode(message.payload);
          const result = this.impl.resolve(params.possible_child);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.FileSystemAccessDirectoryHandle_Resolve_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 10: {
          const params = blink.mojom.FileSystemAccessDirectoryHandle_Transfer_ParamsSpec.$.decode(message.payload);
          const result = this.impl.transfer(params.token);
          break;
        }
        case 11: {
          const params = blink.mojom.FileSystemAccessDirectoryHandle_GetUniqueId_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getUniqueId();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.FileSystemAccessDirectoryHandle_GetUniqueId_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 12: {
          const params = blink.mojom.FileSystemAccessDirectoryHandle_GetCloudIdentifiers_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getCloudIdentifiers();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.FileSystemAccessDirectoryHandle_GetCloudIdentifiers_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
    }});
  }
};

blink.mojom.FileSystemAccessDirectoryHandleReceiver = blink.mojom.FileSystemAccessDirectoryHandleReceiver;

blink.mojom.FileSystemAccessDirectoryHandlePtr = blink.mojom.FileSystemAccessDirectoryHandleRemote;
blink.mojom.FileSystemAccessDirectoryHandleRequest = blink.mojom.FileSystemAccessDirectoryHandlePendingReceiver;

