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

// Interface: FileChooser
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
      blink.mojom.FileChooser_OpenFileChooser_ParamsSpec.$,
      blink.mojom.FileChooser_OpenFileChooser_ResponseParamsSpec.$,
      [params]);
  }

  enumerateChosenDirectory(directory_path) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.FileChooser_EnumerateChosenDirectory_ParamsSpec.$,
      blink.mojom.FileChooser_EnumerateChosenDirectory_ResponseParamsSpec.$,
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
        { name: 'params', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
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
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
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
        { name: 'directory_path', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
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
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
blink.mojom.FileChooserPtr = blink.mojom.FileChooserRemote;
blink.mojom.FileChooserRequest = blink.mojom.FileChooserPendingReceiver;

