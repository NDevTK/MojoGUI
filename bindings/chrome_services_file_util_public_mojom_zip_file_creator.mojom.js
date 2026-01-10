// Auto-generated MojoJS binding
// Source: chromium_src/chrome/services/file_util/public/mojom/zip_file_creator.mojom
// Module: chrome.mojom

'use strict';

// Module namespace
var chrome = chrome || {};
chrome.mojom = chrome.mojom || {};


// Interface: ZipListener
chrome.mojom.ZipListener = {};

chrome.mojom.ZipListener_OnProgress_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.ZipListener_OnProgress_Params',
      packedSize: 24,
      fields: [
        { name: 'bytes', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
        { name: 'files', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'directories', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

chrome.mojom.ZipListener_OnFinished_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.ZipListener_OnFinished_Params',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

chrome.mojom.ZipListenerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chrome.mojom.ZipListenerRemote = class {
  static get $interfaceName() {
    return 'chrome.mojom.ZipListener';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chrome.mojom.ZipListenerPendingReceiver,
      handle);
    this.$ = new chrome.mojom.ZipListenerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chrome.mojom.ZipListenerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onProgress(bytes, files, directories) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      chrome.mojom.ZipListener_OnProgress_ParamsSpec,
      null,
      [bytes, files, directories]);
  }

  onFinished(success) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      chrome.mojom.ZipListener_OnFinished_ParamsSpec,
      null,
      [success]);
  }

};

chrome.mojom.ZipListener.getRemote = function() {
  let remote = new chrome.mojom.ZipListenerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chrome.mojom.ZipListener',
    'context');
  return remote.$;
};

// ParamsSpec for OnProgress
chrome.mojom.ZipListener_OnProgress_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.ZipListener.OnProgress_Params',
      packedSize: 24,
      fields: [
        { name: 'bytes', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
        { name: 'files', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'directories', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for OnFinished
chrome.mojom.ZipListener_OnFinished_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.ZipListener.OnFinished_Params',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
chrome.mojom.ZipListenerPtr = chrome.mojom.ZipListenerRemote;
chrome.mojom.ZipListenerRequest = chrome.mojom.ZipListenerPendingReceiver;


// Interface: ZipFileCreator
chrome.mojom.ZipFileCreator = {};

chrome.mojom.ZipFileCreator_CreateZipFile_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.ZipFileCreator_CreateZipFile_Params',
      packedSize: 40,
      fields: [
        { name: 'src_dir', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(filesystem.mojom.DirectoryRemote), nullable: false, minVersion: 0 },
        { name: 'relative_paths', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(mojo_base.mojom.FilePathSpec, false), nullable: false, minVersion: 0 },
        { name: 'zip_file', packedOffset: 16, packedBitOffset: 0, type: mojo_base.mojom.FileSpec, nullable: false, minVersion: 0 },
        { name: 'listener', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(chrome.mojom.ZipListenerRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

chrome.mojom.ZipFileCreatorPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chrome.mojom.ZipFileCreatorRemote = class {
  static get $interfaceName() {
    return 'chrome.mojom.ZipFileCreator';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chrome.mojom.ZipFileCreatorPendingReceiver,
      handle);
    this.$ = new chrome.mojom.ZipFileCreatorRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chrome.mojom.ZipFileCreatorRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createZipFile(src_dir, relative_paths, zip_file, listener) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      chrome.mojom.ZipFileCreator_CreateZipFile_ParamsSpec,
      null,
      [src_dir, relative_paths, zip_file, listener]);
  }

};

chrome.mojom.ZipFileCreator.getRemote = function() {
  let remote = new chrome.mojom.ZipFileCreatorRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chrome.mojom.ZipFileCreator',
    'context');
  return remote.$;
};

// ParamsSpec for CreateZipFile
chrome.mojom.ZipFileCreator_CreateZipFile_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.ZipFileCreator.CreateZipFile_Params',
      packedSize: 40,
      fields: [
        { name: 'src_dir', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(filesystem.mojom.DirectoryRemote), nullable: false, minVersion: 0 },
        { name: 'relative_paths', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(mojo_base.mojom.FilePathSpec, false), nullable: false, minVersion: 0 },
        { name: 'zip_file', packedOffset: 16, packedBitOffset: 0, type: mojo_base.mojom.FileSpec, nullable: false, minVersion: 0 },
        { name: 'listener', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(chrome.mojom.ZipListenerRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Legacy compatibility
chrome.mojom.ZipFileCreatorPtr = chrome.mojom.ZipFileCreatorRemote;
chrome.mojom.ZipFileCreatorRequest = chrome.mojom.ZipFileCreatorPendingReceiver;

