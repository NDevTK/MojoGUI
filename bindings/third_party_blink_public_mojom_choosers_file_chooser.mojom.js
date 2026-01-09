// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/choosers/file_chooser.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Enum: Mode
blink.mojom.Mode = {
  kOpen: 0,
  kOpenMultiple: 1,
  kUploadFolder: 2,
  kOpenDirectory: 3,
  kSave: 4,
};

// Struct: FileChooserParams
blink.mojom.FileChooserParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FileChooserParams',
      packedSize: 16,
      fields: [
        { name: 'kOpen', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: NativeFileInfo
blink.mojom.NativeFileInfoSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.NativeFileInfo',
      packedSize: 32,
      fields: [
        { name: 'file_path', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.FilePathSpec, nullable: false },
        { name: 'display_name', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false },
        { name: 'base_subdirs', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: FileSystemFileInfo
blink.mojom.FileSystemFileInfoSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FileSystemFileInfo',
      packedSize: 32,
      fields: [
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false },
        { name: 'modification_time', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.TimeSpec, nullable: false },
        { name: 'length', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: FileChooserResult
blink.mojom.FileChooserResultSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FileChooserResult',
      packedSize: 24,
      fields: [
        { name: 'files', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'base_directory', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.FilePathSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Interface: FileChooser
blink.mojom.FileChooser = {};

blink.mojom.FileChooserPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.FileChooserRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.FileChooser';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.FileChooserPendingReceiver,
      handle);
    this.$ = new blink.mojom.FileChooserRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.FileChooserRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  openFileChooser(params) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.FileChooser_OpenFileChooser_ParamsSpec,
      blink.mojom.FileChooser_OpenFileChooser_ResponseParamsSpec,
      [params]);
  }

  enumerateChosenDirectory(directory_path) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.FileChooser_EnumerateChosenDirectory_ParamsSpec,
      blink.mojom.FileChooser_EnumerateChosenDirectory_ResponseParamsSpec,
      [directory_path]);
  }

};

blink.mojom.FileChooser.getRemote = function() {
  let remote = new blink.mojom.FileChooserRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.FileChooser',
    'context');
  return remote.$;
};

// ParamsSpec for OpenFileChooser
blink.mojom.FileChooser_OpenFileChooser_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FileChooser.OpenFileChooser_Params',
      packedSize: 16,
      fields: [
        { name: 'params', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.FileChooserParamsSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.FileChooser_OpenFileChooser_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FileChooser.OpenFileChooser_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.FileChooserResultSpec, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for EnumerateChosenDirectory
blink.mojom.FileChooser_EnumerateChosenDirectory_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FileChooser.EnumerateChosenDirectory_Params',
      packedSize: 16,
      fields: [
        { name: 'directory_path', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.FilePathSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.FileChooser_EnumerateChosenDirectory_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FileChooser.EnumerateChosenDirectory_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.FileChooserResultSpec, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
blink.mojom.FileChooserPtr = blink.mojom.FileChooserRemote;
blink.mojom.FileChooserRequest = blink.mojom.FileChooserPendingReceiver;

