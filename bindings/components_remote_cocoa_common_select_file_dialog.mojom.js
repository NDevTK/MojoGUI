// Auto-generated MojoJS binding
// Source: chromium_src/components/remote_cocoa/common/select_file_dialog.mojom
// Module: remote_cocoa.mojom

'use strict';

// Module namespace
var remote_cocoa = remote_cocoa || {};
remote_cocoa.mojom = remote_cocoa.mojom || {};


// Enum: SelectFileDialogType
remote_cocoa.mojom.mojom.SelectFileDialogType = {
  kFolder: 0,
  kUploadFolder: 1,
  kExistingFolder: 2,
  kOpenFile: 3,
  kOpenMultiFile: 4,
  kSaveAsFile: 5,
};
remote_cocoa.mojom.mojom.SelectFileDialogTypeSpec = { $: mojo.internal.Enum() };

// Struct: SelectFileTypeInfo
remote_cocoa.mojom.mojom.SelectFileTypeInfoSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.SelectFileTypeInfo',
      packedSize: 32,
      fields: [
        { name: 'extensions', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Array(mojo.internal.String, false), false), nullable: false, minVersion: 0 },
        { name: 'extension_description_overrides', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(mojo_base.mojom.String16Spec, false), nullable: false, minVersion: 0 },
        { name: 'include_all_files', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'keep_extension_visible', packedOffset: 16, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Interface: SelectFileDialog
remote_cocoa.mojom.mojom.SelectFileDialog = {};

remote_cocoa.mojom.mojom.SelectFileDialogPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

remote_cocoa.mojom.mojom.SelectFileDialogRemote = class {
  static get $interfaceName() {
    return 'remote_cocoa.mojom.SelectFileDialog';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      remote_cocoa.mojom.mojom.SelectFileDialogPendingReceiver,
      handle);
    this.$ = new remote_cocoa.mojom.mojom.SelectFileDialogRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

remote_cocoa.mojom.mojom.SelectFileDialogRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  show(type, title, file_path, file_types, file_type_index, default_extension) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      remote_cocoa.mojom.mojom.SelectFileDialog_Show_ParamsSpec,
      remote_cocoa.mojom.mojom.SelectFileDialog_Show_ResponseParamsSpec,
      [type, title, file_path, file_types, file_type_index, default_extension]);
  }

};

remote_cocoa.mojom.mojom.SelectFileDialog.getRemote = function() {
  let remote = new remote_cocoa.mojom.mojom.SelectFileDialogRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'remote_cocoa.mojom.SelectFileDialog',
    'context');
  return remote.$;
};

// ParamsSpec for Show
remote_cocoa.mojom.mojom.SelectFileDialog_Show_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.SelectFileDialog.Show_Params',
      packedSize: 48,
      fields: [
        { name: 'type', packedOffset: 32, packedBitOffset: 0, type: remote_cocoa.mojom.SelectFileDialogTypeSpec, nullable: false, minVersion: 0 },
        { name: 'title', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false, minVersion: 0 },
        { name: 'file_path', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.FilePathSpec, nullable: false, minVersion: 0 },
        { name: 'file_types', packedOffset: 16, packedBitOffset: 0, type: remote_cocoa.mojom.SelectFileTypeInfoSpec, nullable: true, minVersion: 0 },
        { name: 'file_type_index', packedOffset: 36, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'default_extension', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 48}]
    }
  }
};

remote_cocoa.mojom.mojom.SelectFileDialog_Show_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.SelectFileDialog.Show_ResponseParams',
      packedSize: 32,
      fields: [
        { name: 'was_cancelled', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'files', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo_base.mojom.FilePathSpec, false), nullable: false, minVersion: 0 },
        { name: 'index', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'file_tags', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.String, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Legacy compatibility
remote_cocoa.mojom.mojom.SelectFileDialogPtr = remote_cocoa.mojom.mojom.SelectFileDialogRemote;
remote_cocoa.mojom.mojom.SelectFileDialogRequest = remote_cocoa.mojom.mojom.SelectFileDialogPendingReceiver;

