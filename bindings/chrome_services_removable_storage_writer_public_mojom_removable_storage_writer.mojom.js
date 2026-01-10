// Auto-generated MojoJS binding
// Source: chromium_src/chrome/services/removable_storage_writer/public/mojom/removable_storage_writer.mojom
// Module: chrome.mojom

'use strict';

// Module namespace
var chrome = chrome || {};
chrome.mojom = chrome.mojom || {};


chrome.mojom.mojom.kRemovableStorageWriterSandbox = sandbox.mojom.Sandbox.kNoSandboxAndElevatedPrivileges;

chrome.mojom.mojom.kRemovableStorageWriterSandbox = sandbox.mojom.Sandbox.kNoSandbox;

chrome.mojom.mojom.kTestDevice = "chrome:

  
  
  Write(mojo_base.mojom.FilePath source,
        mojo_base.mojom.FilePath target,
        pending_remote<RemovableStorageWriterClient> client);

// Interface: RemovableStorageWriter
chrome.mojom.mojom.RemovableStorageWriter = {};

chrome.mojom.mojom.RemovableStorageWriterPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chrome.mojom.mojom.RemovableStorageWriterRemote = class {
  static get $interfaceName() {
    return 'chrome.mojom.RemovableStorageWriter';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chrome.mojom.mojom.RemovableStorageWriterPendingReceiver,
      handle);
    this.$ = new chrome.mojom.mojom.RemovableStorageWriterRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chrome.mojom.mojom.RemovableStorageWriterRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  write(source, target, client) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      chrome.mojom.mojom.RemovableStorageWriter_Write_ParamsSpec,
      null,
      [source, target, client]);
  }

  verify(source, target, client) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      chrome.mojom.mojom.RemovableStorageWriter_Verify_ParamsSpec,
      null,
      [source, target, client]);
  }

};

chrome.mojom.mojom.RemovableStorageWriter.getRemote = function() {
  let remote = new chrome.mojom.mojom.RemovableStorageWriterRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chrome.mojom.RemovableStorageWriter',
    'context');
  return remote.$;
};

// ParamsSpec for Write
chrome.mojom.mojom.RemovableStorageWriter_Write_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.RemovableStorageWriter.Write_Params',
      packedSize: 32,
      fields: [
        { name: 'source', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.FilePathSpec, nullable: false, minVersion: 0 },
        { name: 'target', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.FilePathSpec, nullable: false, minVersion: 0 },
        { name: 'client', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// ParamsSpec for Verify
chrome.mojom.mojom.RemovableStorageWriter_Verify_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.RemovableStorageWriter.Verify_Params',
      packedSize: 32,
      fields: [
        { name: 'source', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.FilePathSpec, nullable: false, minVersion: 0 },
        { name: 'target', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.FilePathSpec, nullable: false, minVersion: 0 },
        { name: 'client', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Legacy compatibility
chrome.mojom.mojom.RemovableStorageWriterPtr = chrome.mojom.mojom.RemovableStorageWriterRemote;
chrome.mojom.mojom.RemovableStorageWriterRequest = chrome.mojom.mojom.RemovableStorageWriterPendingReceiver;


// Interface: RemovableStorageWriterClient
chrome.mojom.mojom.RemovableStorageWriterClient = {};

chrome.mojom.mojom.RemovableStorageWriterClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chrome.mojom.mojom.RemovableStorageWriterClientRemote = class {
  static get $interfaceName() {
    return 'chrome.mojom.RemovableStorageWriterClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chrome.mojom.mojom.RemovableStorageWriterClientPendingReceiver,
      handle);
    this.$ = new chrome.mojom.mojom.RemovableStorageWriterClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chrome.mojom.mojom.RemovableStorageWriterClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  progress(progress) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      chrome.mojom.mojom.RemovableStorageWriterClient_Progress_ParamsSpec,
      null,
      [progress]);
  }

  complete(error) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      chrome.mojom.mojom.RemovableStorageWriterClient_Complete_ParamsSpec,
      null,
      [error]);
  }

};

chrome.mojom.mojom.RemovableStorageWriterClient.getRemote = function() {
  let remote = new chrome.mojom.mojom.RemovableStorageWriterClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chrome.mojom.RemovableStorageWriterClient',
    'context');
  return remote.$;
};

// ParamsSpec for Progress
chrome.mojom.mojom.RemovableStorageWriterClient_Progress_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.RemovableStorageWriterClient.Progress_Params',
      packedSize: 16,
      fields: [
        { name: 'progress', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for Complete
chrome.mojom.mojom.RemovableStorageWriterClient_Complete_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.RemovableStorageWriterClient.Complete_Params',
      packedSize: 16,
      fields: [
        { name: 'error', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
chrome.mojom.mojom.RemovableStorageWriterClientPtr = chrome.mojom.mojom.RemovableStorageWriterClientRemote;
chrome.mojom.mojom.RemovableStorageWriterClientRequest = chrome.mojom.mojom.RemovableStorageWriterClientPendingReceiver;

