// Auto-generated MojoJS binding
// Source: chromium_src/chrome/services/removable_storage_writer/public/mojom/removable_storage_writer.mojom
// Module: chrome.mojom

'use strict';

// Module namespace
var chrome = chrome || {};
chrome.mojom = chrome.mojom || {};
var mojo_base = mojo_base || {};
var sandbox = sandbox || {};

chrome.mojom.RemovableStorageWriter = {};
chrome.mojom.RemovableStorageWriter.$interfaceName = 'chrome.mojom.RemovableStorageWriter';
chrome.mojom.RemovableStorageWriter_Write_ParamsSpec = { $: {} };
chrome.mojom.RemovableStorageWriter_Verify_ParamsSpec = { $: {} };
chrome.mojom.RemovableStorageWriterClient = {};
chrome.mojom.RemovableStorageWriterClient.$interfaceName = 'chrome.mojom.RemovableStorageWriterClient';
chrome.mojom.RemovableStorageWriterClient_Progress_ParamsSpec = { $: {} };
chrome.mojom.RemovableStorageWriterClient_Complete_ParamsSpec = { $: {} };

chrome.mojom.kRemovableStorageWriterSandbox = sandbox.mojom.Sandbox.kNoSandboxAndElevatedPrivileges;

chrome.mojom.kRemovableStorageWriterSandbox = sandbox.mojom.Sandbox.kNoSandbox;

chrome.mojom.kTestDevice = "chrome:

  
  
  Write(mojo_base.mojom.FilePath source,
        mojo_base.mojom.FilePath target,
        pending_remote<RemovableStorageWriterClient> client);

// Interface: RemovableStorageWriter
mojo.internal.Struct(
    chrome.mojom.RemovableStorageWriter_Write_ParamsSpec, 'chrome.mojom.RemovableStorageWriter_Write_Params', [
      mojo.internal.StructField('source', 0, 0, mojo_base.mojom.FilePathSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('target', 8, 0, mojo_base.mojom.FilePathSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('client', 16, 0, mojo.internal.InterfaceProxy(chrome.mojom.RemovableStorageWriterClientSpec), null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    chrome.mojom.RemovableStorageWriter_Verify_ParamsSpec, 'chrome.mojom.RemovableStorageWriter_Verify_Params', [
      mojo.internal.StructField('source', 0, 0, mojo_base.mojom.FilePathSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('target', 8, 0, mojo_base.mojom.FilePathSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('client', 16, 0, mojo.internal.InterfaceProxy(chrome.mojom.RemovableStorageWriterClientSpec), null, false, 0, undefined),
    ],
    [[0, 32]]);

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
      [source, target, client],
      false);
  }

  verify(source, target, client) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      chrome.mojom.RemovableStorageWriter_Verify_ParamsSpec,
      null,
      [source, target, client],
      false);
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

chrome.mojom.RemovableStorageWriterReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        message = {
          header: args[1],
          payload: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      switch (header.ordinal) {
        case 0: {
          const params = chrome.mojom.RemovableStorageWriter_Write_ParamsSpec.$.decode(message.payload);
          const result = this.impl.write(params.source, params.target, params.client);
          break;
        }
        case 1: {
          const params = chrome.mojom.RemovableStorageWriter_Verify_ParamsSpec.$.decode(message.payload);
          const result = this.impl.verify(params.source, params.target, params.client);
          break;
        }
      }
    }});
  }
};

chrome.mojom.RemovableStorageWriterReceiver = chrome.mojom.RemovableStorageWriterReceiver;

chrome.mojom.RemovableStorageWriterPtr = chrome.mojom.RemovableStorageWriterRemote;
chrome.mojom.RemovableStorageWriterRequest = chrome.mojom.RemovableStorageWriterPendingReceiver;


// Interface: RemovableStorageWriterClient
mojo.internal.Struct(
    chrome.mojom.RemovableStorageWriterClient_Progress_ParamsSpec, 'chrome.mojom.RemovableStorageWriterClient_Progress_Params', [
      mojo.internal.StructField('progress', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chrome.mojom.RemovableStorageWriterClient_Complete_ParamsSpec, 'chrome.mojom.RemovableStorageWriterClient_Complete_Params', [
      mojo.internal.StructField('error', 0, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 16]]);

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
      [progress],
      false);
  }

  complete(error) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      chrome.mojom.RemovableStorageWriterClient_Complete_ParamsSpec,
      null,
      [error],
      false);
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

chrome.mojom.RemovableStorageWriterClientReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        message = {
          header: args[1],
          payload: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      switch (header.ordinal) {
        case 0: {
          const params = chrome.mojom.RemovableStorageWriterClient_Progress_ParamsSpec.$.decode(message.payload);
          const result = this.impl.progress(params.progress);
          break;
        }
        case 1: {
          const params = chrome.mojom.RemovableStorageWriterClient_Complete_ParamsSpec.$.decode(message.payload);
          const result = this.impl.complete(params.error);
          break;
        }
      }
    }});
  }
};

chrome.mojom.RemovableStorageWriterClientReceiver = chrome.mojom.RemovableStorageWriterClientReceiver;

chrome.mojom.RemovableStorageWriterClientPtr = chrome.mojom.RemovableStorageWriterClientRemote;
chrome.mojom.RemovableStorageWriterClientRequest = chrome.mojom.RemovableStorageWriterClientPendingReceiver;

