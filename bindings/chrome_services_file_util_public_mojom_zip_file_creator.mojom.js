// Auto-generated MojoJS binding
// Source: chromium_src/chrome/services/file_util/public/mojom/zip_file_creator.mojom
// Module: chrome.mojom

'use strict';

// Module namespace
var chrome = chrome || {};
chrome.mojom = chrome.mojom || {};
var components = components || {};
var services = services || {};

chrome.mojom.ZipListener = {};
chrome.mojom.ZipListener.$interfaceName = 'chrome.mojom.ZipListener';
chrome.mojom.ZipListener_OnProgress_ParamsSpec = { $: {} };
chrome.mojom.ZipListener_OnFinished_ParamsSpec = { $: {} };
chrome.mojom.ZipFileCreator = {};
chrome.mojom.ZipFileCreator.$interfaceName = 'chrome.mojom.ZipFileCreator';
chrome.mojom.ZipFileCreator_CreateZipFile_ParamsSpec = { $: {} };

// Interface: ZipListener
mojo.internal.Struct(
    chrome.mojom.ZipListener_OnProgress_ParamsSpec, 'chrome.mojom.ZipListener_OnProgress_Params', [
      mojo.internal.StructField('bytes', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('files', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('directories', 12, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    chrome.mojom.ZipListener_OnFinished_ParamsSpec, 'chrome.mojom.ZipListener_OnFinished_Params', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

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

chrome.mojom.ZipListenerPtr = chrome.mojom.ZipListenerRemote;
chrome.mojom.ZipListenerRequest = chrome.mojom.ZipListenerPendingReceiver;


// Interface: ZipFileCreator
mojo.internal.Struct(
    chrome.mojom.ZipFileCreator_CreateZipFile_ParamsSpec, 'chrome.mojom.ZipFileCreator_CreateZipFile_Params', [
      mojo.internal.StructField('src_dir', 0, 0, mojo.internal.InterfaceProxy(filesystem.mojom.DirectoryRemote), null, false, 0, undefined),
      mojo.internal.StructField('relative_paths', 8, 0, mojo.internal.Array(mojo_base.mojom.FilePathSpec, false), null, false, 0, undefined),
      mojo.internal.StructField('zip_file', 16, 0, mojo_base.mojom.FileSpec, null, false, 0, undefined),
      mojo.internal.StructField('listener', 24, 0, mojo.internal.InterfaceProxy(chrome.mojom.ZipListenerRemote), null, false, 0, undefined),
    ],
    [[0, 40]]);

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

chrome.mojom.ZipFileCreatorPtr = chrome.mojom.ZipFileCreatorRemote;
chrome.mojom.ZipFileCreatorRequest = chrome.mojom.ZipFileCreatorPendingReceiver;

