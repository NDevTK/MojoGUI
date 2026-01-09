// Auto-generated MojoJS binding
// Source: chromium_src/chrome/services/removable_storage_writer/public/mojom/removable_storage_writer.mojom
// Module: chrome.mojom

'use strict';

// Module namespace
var chrome = chrome || {};
chrome.mojom = chrome.mojom || {};


// Interface: RemovableStorageWriter
chrome.mojom.RemovableStorageWriter = {};

chrome.mojom.RemovableStorageWriterPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chrome.mojom.RemovableStorageWriterRemote = class {
  static get $interfaceName() {
    return 'chrome.mojom.RemovableStorageWriter';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chrome.mojom.RemovableStorageWriterPendingReceiver,
      handle);
    this.$ = new chrome.mojom.RemovableStorageWriterRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chrome.mojom.RemovableStorageWriterRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  write(source, target, client) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      chrome.mojom.RemovableStorageWriter_Write_ParamsSpec,
      null,
      [source, target, client]);
  }

  verify(source, target, client) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      chrome.mojom.RemovableStorageWriter_Verify_ParamsSpec,
      null,
      [source, target, client]);
  }

};

chrome.mojom.RemovableStorageWriter.getRemote = function() {
  let remote = new chrome.mojom.RemovableStorageWriterRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chrome.mojom.RemovableStorageWriter',
    'context');
  return remote.$;
};

// ParamsSpec for Write
chrome.mojom.RemovableStorageWriter_Write_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.RemovableStorageWriter.Write_Params',
      packedSize: 32,
      fields: [
        { name: 'source', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.FilePathSpec, nullable: false },
        { name: 'target', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.FilePathSpec, nullable: false },
        { name: 'client', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for Verify
chrome.mojom.RemovableStorageWriter_Verify_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.RemovableStorageWriter.Verify_Params',
      packedSize: 32,
      fields: [
        { name: 'source', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.FilePathSpec, nullable: false },
        { name: 'target', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.FilePathSpec, nullable: false },
        { name: 'client', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
chrome.mojom.RemovableStorageWriterPtr = chrome.mojom.RemovableStorageWriterRemote;
chrome.mojom.RemovableStorageWriterRequest = chrome.mojom.RemovableStorageWriterPendingReceiver;


// Interface: RemovableStorageWriterClient
chrome.mojom.RemovableStorageWriterClient = {};

chrome.mojom.RemovableStorageWriterClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chrome.mojom.RemovableStorageWriterClientRemote = class {
  static get $interfaceName() {
    return 'chrome.mojom.RemovableStorageWriterClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chrome.mojom.RemovableStorageWriterClientPendingReceiver,
      handle);
    this.$ = new chrome.mojom.RemovableStorageWriterClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chrome.mojom.RemovableStorageWriterClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  progress(progress) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      chrome.mojom.RemovableStorageWriterClient_Progress_ParamsSpec,
      null,
      [progress]);
  }

  complete(error) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      chrome.mojom.RemovableStorageWriterClient_Complete_ParamsSpec,
      null,
      [error]);
  }

};

chrome.mojom.RemovableStorageWriterClient.getRemote = function() {
  let remote = new chrome.mojom.RemovableStorageWriterClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chrome.mojom.RemovableStorageWriterClient',
    'context');
  return remote.$;
};

// ParamsSpec for Progress
chrome.mojom.RemovableStorageWriterClient_Progress_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.RemovableStorageWriterClient.Progress_Params',
      packedSize: 16,
      fields: [
        { name: 'progress', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for Complete
chrome.mojom.RemovableStorageWriterClient_Complete_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.RemovableStorageWriterClient.Complete_Params',
      packedSize: 16,
      fields: [
        { name: 'error', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
chrome.mojom.RemovableStorageWriterClientPtr = chrome.mojom.RemovableStorageWriterClientRemote;
chrome.mojom.RemovableStorageWriterClientRequest = chrome.mojom.RemovableStorageWriterClientPendingReceiver;

