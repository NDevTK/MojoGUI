// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/file_system_access/file_system_access_manager.mojom
// Module: blink.mojom

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var mojo_base = mojo_base || {};

blink.mojom.WellKnownDirectorySpec = { $: mojo.internal.Enum() };
blink.mojom.TypeSpecificFilePickerOptionsUnionSpec = { $: {} };
blink.mojom.FilePickerStartInOptionsUnionSpec = { $: {} };
blink.mojom.ChooseFileSystemEntryAcceptsOptionSpec = { $: {} };
blink.mojom.AcceptsTypesInfoSpec = { $: {} };
blink.mojom.OpenFilePickerOptionsSpec = { $: {} };
blink.mojom.SaveFilePickerOptionsSpec = { $: {} };
blink.mojom.DirectoryPickerOptionsSpec = { $: {} };
blink.mojom.FilePickerOptionsSpec = { $: {} };
blink.mojom.FileSystemAccessManager = {};
blink.mojom.FileSystemAccessManager.$interfaceName = 'blink.mojom.FileSystemAccessManager';
blink.mojom.FileSystemAccessManager_GetSandboxedFileSystem_ParamsSpec = { $: {} };
blink.mojom.FileSystemAccessManager_GetSandboxedFileSystem_ResponseParamsSpec = { $: {} };
blink.mojom.FileSystemAccessManager_GetSandboxedFileSystemForDevtools_ParamsSpec = { $: {} };
blink.mojom.FileSystemAccessManager_GetSandboxedFileSystemForDevtools_ResponseParamsSpec = { $: {} };
blink.mojom.FileSystemAccessManager_ChooseEntries_ParamsSpec = { $: {} };
blink.mojom.FileSystemAccessManager_ChooseEntries_ResponseParamsSpec = { $: {} };
blink.mojom.FileSystemAccessManager_GetFileHandleFromToken_ParamsSpec = { $: {} };
blink.mojom.FileSystemAccessManager_GetDirectoryHandleFromToken_ParamsSpec = { $: {} };
blink.mojom.FileSystemAccessManager_GetEntryFromDataTransferToken_ParamsSpec = { $: {} };
blink.mojom.FileSystemAccessManager_GetEntryFromDataTransferToken_ResponseParamsSpec = { $: {} };
blink.mojom.FileSystemAccessManager_BindObserverHost_ParamsSpec = { $: {} };

// Enum: WellKnownDirectory
blink.mojom.WellKnownDirectory = {
  kDirDesktop: 0,
  kDirDocuments: 1,
  kDirDownloads: 2,
  kDirMusic: 3,
  kDirPictures: 4,
  kDirVideos: 5,
};

// Union: TypeSpecificFilePickerOptionsUnion
mojo.internal.Union(
    blink.mojom.TypeSpecificFilePickerOptionsUnionSpec, 'blink.mojom.TypeSpecificFilePickerOptionsUnion', {
      'open_file_picker_options': {
        'ordinal': 0,
        'type': blink.mojom.OpenFilePickerOptionsSpec.$,
        'nullable': false,
      },
      'save_file_picker_options': {
        'ordinal': 1,
        'type': blink.mojom.SaveFilePickerOptionsSpec.$,
        'nullable': false,
      },
      'directory_picker_options': {
        'ordinal': 2,
        'type': blink.mojom.DirectoryPickerOptionsSpec.$,
        'nullable': false,
      },
    });

// Union: FilePickerStartInOptionsUnion
mojo.internal.Union(
    blink.mojom.FilePickerStartInOptionsUnionSpec, 'blink.mojom.FilePickerStartInOptionsUnion', {
      'well_known_directory': {
        'ordinal': 0,
        'type': blink.mojom.WellKnownDirectorySpec.$,
        'nullable': false,
      },
      'directory_token': {
        'ordinal': 1,
        'type': mojo.internal.InterfaceProxy(blink.mojom.FileSystemAccessTransferTokenRemote),
        'nullable': false,
      },
    });

// Struct: ChooseFileSystemEntryAcceptsOption
mojo.internal.Struct(
    blink.mojom.ChooseFileSystemEntryAcceptsOptionSpec, 'blink.mojom.ChooseFileSystemEntryAcceptsOption', [
      mojo.internal.StructField('description', 0, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('mime_types', 8, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('extensions', 16, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: AcceptsTypesInfo
mojo.internal.Struct(
    blink.mojom.AcceptsTypesInfoSpec, 'blink.mojom.AcceptsTypesInfo', [
      mojo.internal.StructField('accepts', 0, 0, mojo.internal.Array(blink.mojom.ChooseFileSystemEntryAcceptsOptionSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('include_accepts_all', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: OpenFilePickerOptions
mojo.internal.Struct(
    blink.mojom.OpenFilePickerOptionsSpec, 'blink.mojom.OpenFilePickerOptions', [
      mojo.internal.StructField('accepts_types_info', 0, 0, blink.mojom.AcceptsTypesInfoSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('can_select_multiple_files', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: SaveFilePickerOptions
mojo.internal.Struct(
    blink.mojom.SaveFilePickerOptionsSpec, 'blink.mojom.SaveFilePickerOptions', [
      mojo.internal.StructField('accepts_types_info', 0, 0, blink.mojom.AcceptsTypesInfoSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('suggested_name', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: DirectoryPickerOptions
mojo.internal.Struct(
    blink.mojom.DirectoryPickerOptionsSpec, 'blink.mojom.DirectoryPickerOptions', [
      mojo.internal.StructField('permission_mode', 0, 0, blink.mojom.FileSystemAccessPermissionModeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: FilePickerOptions
mojo.internal.Struct(
    blink.mojom.FilePickerOptionsSpec, 'blink.mojom.FilePickerOptions', [
      mojo.internal.StructField('type_specific_options', 0, 0, blink.mojom.TypeSpecificFilePickerOptionsUnionSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('starting_directory_id', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('start_in_options', 16, 0, blink.mojom.FilePickerStartInOptionsUnionSpec.$, null, true, 0, undefined),
    ],
    [[0, 32]]);

// Interface: FileSystemAccessManager
mojo.internal.Struct(
    blink.mojom.FileSystemAccessManager_GetSandboxedFileSystem_ParamsSpec, 'blink.mojom.FileSystemAccessManager_GetSandboxedFileSystem_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.FileSystemAccessManager_GetSandboxedFileSystem_ResponseParamsSpec, 'blink.mojom.FileSystemAccessManager_GetSandboxedFileSystem_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, blink.mojom.FileSystemAccessErrorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('directory', 8, 0, mojo.internal.InterfaceProxy(blink.mojom.FileSystemAccessDirectoryHandleRemote), null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.FileSystemAccessManager_GetSandboxedFileSystemForDevtools_ParamsSpec, 'blink.mojom.FileSystemAccessManager_GetSandboxedFileSystemForDevtools_Params', [
      mojo.internal.StructField('directory_path_components', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.FileSystemAccessManager_GetSandboxedFileSystemForDevtools_ResponseParamsSpec, 'blink.mojom.FileSystemAccessManager_GetSandboxedFileSystemForDevtools_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, blink.mojom.FileSystemAccessErrorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('directory', 8, 0, mojo.internal.InterfaceProxy(blink.mojom.FileSystemAccessDirectoryHandleRemote), null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.FileSystemAccessManager_ChooseEntries_ParamsSpec, 'blink.mojom.FileSystemAccessManager_ChooseEntries_Params', [
      mojo.internal.StructField('options', 0, 0, blink.mojom.FilePickerOptionsSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.FileSystemAccessManager_ChooseEntries_ResponseParamsSpec, 'blink.mojom.FileSystemAccessManager_ChooseEntries_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, blink.mojom.FileSystemAccessErrorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('entries', 8, 0, mojo.internal.Array(blink.mojom.FileSystemAccessEntrySpec.$, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.FileSystemAccessManager_GetFileHandleFromToken_ParamsSpec, 'blink.mojom.FileSystemAccessManager_GetFileHandleFromToken_Params', [
      mojo.internal.StructField('token', 0, 0, mojo.internal.InterfaceProxy(blink.mojom.FileSystemAccessTransferTokenRemote), null, false, 0, undefined),
      mojo.internal.StructField('file_handle', 8, 0, mojo.internal.InterfaceRequest(blink.mojom.FileSystemAccessFileHandleRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.FileSystemAccessManager_GetDirectoryHandleFromToken_ParamsSpec, 'blink.mojom.FileSystemAccessManager_GetDirectoryHandleFromToken_Params', [
      mojo.internal.StructField('token', 0, 0, mojo.internal.InterfaceProxy(blink.mojom.FileSystemAccessTransferTokenRemote), null, false, 0, undefined),
      mojo.internal.StructField('directory_handle', 8, 0, mojo.internal.InterfaceRequest(blink.mojom.FileSystemAccessDirectoryHandleRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.FileSystemAccessManager_GetEntryFromDataTransferToken_ParamsSpec, 'blink.mojom.FileSystemAccessManager_GetEntryFromDataTransferToken_Params', [
      mojo.internal.StructField('token', 0, 0, mojo.internal.InterfaceProxy(blink.mojom.FileSystemAccessDataTransferTokenRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.FileSystemAccessManager_GetEntryFromDataTransferToken_ResponseParamsSpec, 'blink.mojom.FileSystemAccessManager_GetEntryFromDataTransferToken_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, blink.mojom.FileSystemAccessErrorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('entry', 8, 0, blink.mojom.FileSystemAccessEntrySpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.FileSystemAccessManager_BindObserverHost_ParamsSpec, 'blink.mojom.FileSystemAccessManager_BindObserverHost_Params', [
      mojo.internal.StructField('observer_host', 0, 0, mojo.internal.InterfaceRequest(blink.mojom.FileSystemAccessObserverHostRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

blink.mojom.FileSystemAccessManagerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.FileSystemAccessManagerRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.FileSystemAccessManager';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.FileSystemAccessManagerPendingReceiver,
      handle);
    this.$ = new blink.mojom.FileSystemAccessManagerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  getSandboxedFileSystem() {
    return this.$.getSandboxedFileSystem();
  }
  getSandboxedFileSystemForDevtools(directory_path_components) {
    return this.$.getSandboxedFileSystemForDevtools(directory_path_components);
  }
  chooseEntries(options) {
    return this.$.chooseEntries(options);
  }
  getFileHandleFromToken(token, file_handle) {
    return this.$.getFileHandleFromToken(token, file_handle);
  }
  getDirectoryHandleFromToken(token, directory_handle) {
    return this.$.getDirectoryHandleFromToken(token, directory_handle);
  }
  getEntryFromDataTransferToken(token) {
    return this.$.getEntryFromDataTransferToken(token);
  }
  bindObserverHost(observer_host) {
    return this.$.bindObserverHost(observer_host);
  }
};

blink.mojom.FileSystemAccessManagerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('FileSystemAccessManager', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  getSandboxedFileSystem() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      blink.mojom.FileSystemAccessManager_GetSandboxedFileSystem_ParamsSpec,
      blink.mojom.FileSystemAccessManager_GetSandboxedFileSystem_ResponseParamsSpec,
      [],
      false);
  }

  getSandboxedFileSystemForDevtools(directory_path_components) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      blink.mojom.FileSystemAccessManager_GetSandboxedFileSystemForDevtools_ParamsSpec,
      blink.mojom.FileSystemAccessManager_GetSandboxedFileSystemForDevtools_ResponseParamsSpec,
      [directory_path_components],
      false);
  }

  chooseEntries(options) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      blink.mojom.FileSystemAccessManager_ChooseEntries_ParamsSpec,
      blink.mojom.FileSystemAccessManager_ChooseEntries_ResponseParamsSpec,
      [options],
      false);
  }

  getFileHandleFromToken(token, file_handle) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      blink.mojom.FileSystemAccessManager_GetFileHandleFromToken_ParamsSpec,
      null,
      [token, file_handle],
      false);
  }

  getDirectoryHandleFromToken(token, directory_handle) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      blink.mojom.FileSystemAccessManager_GetDirectoryHandleFromToken_ParamsSpec,
      null,
      [token, directory_handle],
      false);
  }

  getEntryFromDataTransferToken(token) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      blink.mojom.FileSystemAccessManager_GetEntryFromDataTransferToken_ParamsSpec,
      blink.mojom.FileSystemAccessManager_GetEntryFromDataTransferToken_ResponseParamsSpec,
      [token],
      false);
  }

  bindObserverHost(observer_host) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      blink.mojom.FileSystemAccessManager_BindObserverHost_ParamsSpec,
      null,
      [observer_host],
      false);
  }

};

blink.mojom.FileSystemAccessManager.getRemote = function() {
  let remote = new blink.mojom.FileSystemAccessManagerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.FileSystemAccessManager',
    'context');
  return remote.$;
};

blink.mojom.FileSystemAccessManagerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('FileSystemAccessManager', [
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
             decoder.decodeStructInline(blink.mojom.FileSystemAccessManager_GetSandboxedFileSystem_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.FileSystemAccessManager_GetSandboxedFileSystemForDevtools_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.FileSystemAccessManager_ChooseEntries_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.FileSystemAccessManager_GetFileHandleFromToken_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.FileSystemAccessManager_GetDirectoryHandleFromToken_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.FileSystemAccessManager_GetEntryFromDataTransferToken_ParamsSpec);
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.FileSystemAccessManager_BindObserverHost_ParamsSpec);
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.FileSystemAccessManager_GetSandboxedFileSystem_ParamsSpec.$.structSpec);
          const result = this.impl.getSandboxedFileSystem();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.FileSystemAccessManager_GetSandboxedFileSystem_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.FileSystemAccessManager_GetSandboxedFileSystemForDevtools_ParamsSpec.$.structSpec);
          const result = this.impl.getSandboxedFileSystemForDevtools(params.directory_path_components);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.FileSystemAccessManager_GetSandboxedFileSystemForDevtools_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.FileSystemAccessManager_ChooseEntries_ParamsSpec.$.structSpec);
          const result = this.impl.chooseEntries(params.options);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.FileSystemAccessManager_ChooseEntries_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.FileSystemAccessManager_GetFileHandleFromToken_ParamsSpec.$.structSpec);
          const result = this.impl.getFileHandleFromToken(params.token, params.file_handle);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.FileSystemAccessManager_GetDirectoryHandleFromToken_ParamsSpec.$.structSpec);
          const result = this.impl.getDirectoryHandleFromToken(params.token, params.directory_handle);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.FileSystemAccessManager_GetEntryFromDataTransferToken_ParamsSpec.$.structSpec);
          const result = this.impl.getEntryFromDataTransferToken(params.token);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.FileSystemAccessManager_GetEntryFromDataTransferToken_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.FileSystemAccessManager_BindObserverHost_ParamsSpec.$.structSpec);
          const result = this.impl.bindObserverHost(params.observer_host);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

blink.mojom.FileSystemAccessManagerReceiver = blink.mojom.FileSystemAccessManagerReceiver;

blink.mojom.FileSystemAccessManagerPtr = blink.mojom.FileSystemAccessManagerRemote;
blink.mojom.FileSystemAccessManagerRequest = blink.mojom.FileSystemAccessManagerPendingReceiver;

