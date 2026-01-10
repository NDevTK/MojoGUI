// Auto-generated MojoJS binding
// Source: chromium_src/chrome/services/file_util/public/mojom/zip_file_creator.mojom
// Module: chrome.mojom

'use strict';

// Module namespace
var chrome = chrome || {};
chrome.mojom = chrome.mojom || {};


// Interface: ZipListener
chrome.mojom.mojom.ZipListener = {};

chrome.mojom.mojom.ZipListenerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chrome.mojom.mojom.ZipListenerRemote = class {
  static get $interfaceName() {
    return 'chrome.mojom.ZipListener';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chrome.mojom.mojom.ZipListenerPendingReceiver,
      handle);
    this.$ = new chrome.mojom.mojom.ZipListenerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chrome.mojom.mojom.ZipListenerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onProgress(bytes, files, directories) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      chrome.mojom.mojom.ZipListener_OnProgress_ParamsSpec,
      null,
      [bytes, files, directories]);
  }

  onFinished(success) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      chrome.mojom.mojom.ZipListener_OnFinished_ParamsSpec,
      null,
      [success]);
  }

};

chrome.mojom.mojom.ZipListener.getRemote = function() {
  let remote = new chrome.mojom.mojom.ZipListenerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chrome.mojom.ZipListener',
    'context');
  return remote.$;
};

// ParamsSpec for OnProgress
chrome.mojom.mojom.ZipListener_OnProgress_ParamsSpec = {
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
chrome.mojom.mojom.ZipListener_OnFinished_ParamsSpec = {
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
chrome.mojom.mojom.ZipListenerPtr = chrome.mojom.mojom.ZipListenerRemote;
chrome.mojom.mojom.ZipListenerRequest = chrome.mojom.mojom.ZipListenerPendingReceiver;


// Interface: ZipFileCreator
chrome.mojom.mojom.ZipFileCreator = {};

chrome.mojom.mojom.ZipFileCreatorPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chrome.mojom.mojom.ZipFileCreatorRemote = class {
  static get $interfaceName() {
    return 'chrome.mojom.ZipFileCreator';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chrome.mojom.mojom.ZipFileCreatorPendingReceiver,
      handle);
    this.$ = new chrome.mojom.mojom.ZipFileCreatorRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chrome.mojom.mojom.ZipFileCreatorRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createZipFile(src_dir, relative_paths, zip_file, listener) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      chrome.mojom.mojom.ZipFileCreator_CreateZipFile_ParamsSpec,
      null,
      [src_dir, relative_paths, zip_file, listener]);
  }

};

chrome.mojom.mojom.ZipFileCreator.getRemote = function() {
  let remote = new chrome.mojom.mojom.ZipFileCreatorRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chrome.mojom.ZipFileCreator',
    'context');
  return remote.$;
};

// ParamsSpec for CreateZipFile
chrome.mojom.mojom.ZipFileCreator_CreateZipFile_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.ZipFileCreator.CreateZipFile_Params',
      packedSize: 32,
      fields: [
        { name: 'src_dir', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
        { name: 'relative_paths', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo_base.mojom.FilePathSpec, false), nullable: false, minVersion: 0 },
        { name: 'zip_file', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.FileSpec, nullable: false, minVersion: 0 },
        { name: 'listener', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Legacy compatibility
chrome.mojom.mojom.ZipFileCreatorPtr = chrome.mojom.mojom.ZipFileCreatorRemote;
chrome.mojom.mojom.ZipFileCreatorRequest = chrome.mojom.mojom.ZipFileCreatorPendingReceiver;

