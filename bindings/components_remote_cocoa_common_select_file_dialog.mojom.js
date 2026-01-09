// Auto-generated MojoJS binding
// Source: chromium_src/components/remote_cocoa/common/select_file_dialog.mojom
// Module: remote_cocoa.mojom

'use strict';

// Module namespace
var remote_cocoa = remote_cocoa || {};
remote_cocoa.mojom = remote_cocoa.mojom || {};


// Enum: SelectFileDialogType
remote_cocoa.mojom.SelectFileDialogType = {
  kFolder: 0,
  kUploadFolder: 1,
  kExistingFolder: 2,
  kOpenFile: 3,
  kOpenMultiFile: 4,
  kSaveAsFile: 5,
};

// Interface: SelectFileDialog
remote_cocoa.mojom.SelectFileDialog = {};

remote_cocoa.mojom.SelectFileDialogPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

remote_cocoa.mojom.SelectFileDialogRemote = class {
  static get $interfaceName() {
    return 'remote_cocoa.mojom.SelectFileDialog';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      remote_cocoa.mojom.SelectFileDialogPendingReceiver,
      handle);
    this.$ = new remote_cocoa.mojom.SelectFileDialogRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

remote_cocoa.mojom.SelectFileDialogRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  show(type, title, file_path, file_types, file_type_index, default_extension) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      remote_cocoa.mojom.SelectFileDialog_Show_ParamsSpec,
      remote_cocoa.mojom.SelectFileDialog_Show_ResponseParamsSpec,
      [type, title, file_path, file_types, file_type_index, default_extension]);
  }

};

remote_cocoa.mojom.SelectFileDialog.getRemote = function() {
  let remote = new remote_cocoa.mojom.SelectFileDialogRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'remote_cocoa.mojom.SelectFileDialog',
    'context');
  return remote.$;
};

// ParamsSpec for Show
remote_cocoa.mojom.SelectFileDialog_Show_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.SelectFileDialog.Show_Params',
      packedSize: 56,
      fields: [
        { name: 'type', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'title', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'file_path', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'file_types', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
        { name: 'file_type_index', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'default_extension', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

remote_cocoa.mojom.SelectFileDialog_Show_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.SelectFileDialog.Show_ResponseParams',
      packedSize: 40,
      fields: [
        { name: 'was_cancelled', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'files', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'index', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'file_tags', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
remote_cocoa.mojom.SelectFileDialogPtr = remote_cocoa.mojom.SelectFileDialogRemote;
remote_cocoa.mojom.SelectFileDialogRequest = remote_cocoa.mojom.SelectFileDialogPendingReceiver;

