// Auto-generated MojoJS binding
// Source: chromium_src/content/public/test/test_service.mojom
// Module: content.mojom

'use strict';

// Module namespace
var content = content || {};
content.mojom = content.mojom || {};
var mojo_base = mojo_base || {};

content.mojom.TestService = {};
content.mojom.TestService.$interfaceName = 'content.mojom.TestService';
content.mojom.TestService_DoSomething_ParamsSpec = { $: {} };
content.mojom.TestService_DoSomething_ResponseParamsSpec = { $: {} };
content.mojom.TestService_DoTerminateProcess_ParamsSpec = { $: {} };
content.mojom.TestService_DoTerminateProcess_ResponseParamsSpec = { $: {} };
content.mojom.TestService_DoCrashImmediately_ParamsSpec = { $: {} };
content.mojom.TestService_DoCrashImmediately_ResponseParamsSpec = { $: {} };
content.mojom.TestService_CreateFolder_ParamsSpec = { $: {} };
content.mojom.TestService_CreateFolder_ResponseParamsSpec = { $: {} };
content.mojom.TestService_GetRequestorName_ParamsSpec = { $: {} };
content.mojom.TestService_GetRequestorName_ResponseParamsSpec = { $: {} };
content.mojom.TestService_CreateReadOnlySharedMemoryRegion_ParamsSpec = { $: {} };
content.mojom.TestService_CreateReadOnlySharedMemoryRegion_ResponseParamsSpec = { $: {} };
content.mojom.TestService_CreateWritableSharedMemoryRegion_ParamsSpec = { $: {} };
content.mojom.TestService_CreateWritableSharedMemoryRegion_ResponseParamsSpec = { $: {} };
content.mojom.TestService_CreateUnsafeSharedMemoryRegion_ParamsSpec = { $: {} };
content.mojom.TestService_CreateUnsafeSharedMemoryRegion_ResponseParamsSpec = { $: {} };
content.mojom.TestService_CloneSharedMemoryContents_ParamsSpec = { $: {} };
content.mojom.TestService_CloneSharedMemoryContents_ResponseParamsSpec = { $: {} };
content.mojom.TestService_IsProcessSandboxed_ParamsSpec = { $: {} };
content.mojom.TestService_IsProcessSandboxed_ResponseParamsSpec = { $: {} };
content.mojom.TestService_PseudonymizeString_ParamsSpec = { $: {} };
content.mojom.TestService_PseudonymizeString_ResponseParamsSpec = { $: {} };
content.mojom.TestService_PassWriteableFile_ParamsSpec = { $: {} };
content.mojom.TestService_PassWriteableFile_ResponseParamsSpec = { $: {} };
content.mojom.TestService_WriteToPreloadedPipe_ParamsSpec = { $: {} };

content.mojom.kTestPipeKey = "content_test_pipe";

// Interface: TestService
mojo.internal.Struct(
    content.mojom.TestService_DoSomething_ParamsSpec, 'content.mojom.TestService_DoSomething_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    content.mojom.TestService_DoSomething_ResponseParamsSpec, 'content.mojom.TestService_DoSomething_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    content.mojom.TestService_DoTerminateProcess_ParamsSpec, 'content.mojom.TestService_DoTerminateProcess_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    content.mojom.TestService_DoTerminateProcess_ResponseParamsSpec, 'content.mojom.TestService_DoTerminateProcess_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    content.mojom.TestService_DoCrashImmediately_ParamsSpec, 'content.mojom.TestService_DoCrashImmediately_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    content.mojom.TestService_DoCrashImmediately_ResponseParamsSpec, 'content.mojom.TestService_DoCrashImmediately_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    content.mojom.TestService_CreateFolder_ParamsSpec, 'content.mojom.TestService_CreateFolder_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    content.mojom.TestService_CreateFolder_ResponseParamsSpec, 'content.mojom.TestService_CreateFolder_ResponseParams', [
      mojo.internal.StructField('succeeded', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.mojom.TestService_GetRequestorName_ParamsSpec, 'content.mojom.TestService_GetRequestorName_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    content.mojom.TestService_GetRequestorName_ResponseParamsSpec, 'content.mojom.TestService_GetRequestorName_ResponseParams', [
      mojo.internal.StructField('name', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.mojom.TestService_CreateReadOnlySharedMemoryRegion_ParamsSpec, 'content.mojom.TestService_CreateReadOnlySharedMemoryRegion_Params', [
      mojo.internal.StructField('message', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.mojom.TestService_CreateReadOnlySharedMemoryRegion_ResponseParamsSpec, 'content.mojom.TestService_CreateReadOnlySharedMemoryRegion_ResponseParams', [
      mojo.internal.StructField('region', 0, 0, mojo_base.mojom.ReadOnlySharedMemoryRegionSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.mojom.TestService_CreateWritableSharedMemoryRegion_ParamsSpec, 'content.mojom.TestService_CreateWritableSharedMemoryRegion_Params', [
      mojo.internal.StructField('message', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.mojom.TestService_CreateWritableSharedMemoryRegion_ResponseParamsSpec, 'content.mojom.TestService_CreateWritableSharedMemoryRegion_ResponseParams', [
      mojo.internal.StructField('region', 0, 0, mojo_base.mojom.WritableSharedMemoryRegionSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.mojom.TestService_CreateUnsafeSharedMemoryRegion_ParamsSpec, 'content.mojom.TestService_CreateUnsafeSharedMemoryRegion_Params', [
      mojo.internal.StructField('message', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.mojom.TestService_CreateUnsafeSharedMemoryRegion_ResponseParamsSpec, 'content.mojom.TestService_CreateUnsafeSharedMemoryRegion_ResponseParams', [
      mojo.internal.StructField('region', 0, 0, mojo_base.mojom.UnsafeSharedMemoryRegionSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.mojom.TestService_CloneSharedMemoryContents_ParamsSpec, 'content.mojom.TestService_CloneSharedMemoryContents_Params', [
      mojo.internal.StructField('region', 0, 0, mojo_base.mojom.ReadOnlySharedMemoryRegionSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.mojom.TestService_CloneSharedMemoryContents_ResponseParamsSpec, 'content.mojom.TestService_CloneSharedMemoryContents_ResponseParams', [
      mojo.internal.StructField('new_region', 0, 0, mojo_base.mojom.UnsafeSharedMemoryRegionSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.mojom.TestService_IsProcessSandboxed_ParamsSpec, 'content.mojom.TestService_IsProcessSandboxed_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    content.mojom.TestService_IsProcessSandboxed_ResponseParamsSpec, 'content.mojom.TestService_IsProcessSandboxed_ResponseParams', [
      mojo.internal.StructField('is_sandboxed', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.mojom.TestService_PseudonymizeString_ParamsSpec, 'content.mojom.TestService_PseudonymizeString_Params', [
      mojo.internal.StructField('value', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.mojom.TestService_PseudonymizeString_ResponseParamsSpec, 'content.mojom.TestService_PseudonymizeString_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.mojom.TestService_PassWriteableFile_ParamsSpec, 'content.mojom.TestService_PassWriteableFile_Params', [
      mojo.internal.StructField('file', 0, 0, mojo_base.mojom.FileSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.mojom.TestService_PassWriteableFile_ResponseParamsSpec, 'content.mojom.TestService_PassWriteableFile_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    content.mojom.TestService_WriteToPreloadedPipe_ParamsSpec, 'content.mojom.TestService_WriteToPreloadedPipe_Params', [
    ],
    [[0, 8]]);

content.mojom.TestServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

content.mojom.TestServiceRemote = class {
  static get $interfaceName() {
    return 'content.mojom.TestService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      content.mojom.TestServicePendingReceiver,
      handle);
    this.$ = new content.mojom.TestServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

content.mojom.TestServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  doSomething() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      content.mojom.TestService_DoSomething_ParamsSpec,
      content.mojom.TestService_DoSomething_ResponseParamsSpec,
      [],
      false);
  }

  doTerminateProcess() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      content.mojom.TestService_DoTerminateProcess_ParamsSpec,
      content.mojom.TestService_DoTerminateProcess_ResponseParamsSpec,
      [],
      false);
  }

  doCrashImmediately() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      content.mojom.TestService_DoCrashImmediately_ParamsSpec,
      content.mojom.TestService_DoCrashImmediately_ResponseParamsSpec,
      [],
      false);
  }

  createFolder() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      content.mojom.TestService_CreateFolder_ParamsSpec,
      content.mojom.TestService_CreateFolder_ResponseParamsSpec,
      [],
      false);
  }

  getRequestorName() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      content.mojom.TestService_GetRequestorName_ParamsSpec,
      content.mojom.TestService_GetRequestorName_ResponseParamsSpec,
      [],
      false);
  }

  createReadOnlySharedMemoryRegion(message) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      content.mojom.TestService_CreateReadOnlySharedMemoryRegion_ParamsSpec,
      content.mojom.TestService_CreateReadOnlySharedMemoryRegion_ResponseParamsSpec,
      [message],
      false);
  }

  createWritableSharedMemoryRegion(message) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      content.mojom.TestService_CreateWritableSharedMemoryRegion_ParamsSpec,
      content.mojom.TestService_CreateWritableSharedMemoryRegion_ResponseParamsSpec,
      [message],
      false);
  }

  createUnsafeSharedMemoryRegion(message) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      content.mojom.TestService_CreateUnsafeSharedMemoryRegion_ParamsSpec,
      content.mojom.TestService_CreateUnsafeSharedMemoryRegion_ResponseParamsSpec,
      [message],
      false);
  }

  cloneSharedMemoryContents(region) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      content.mojom.TestService_CloneSharedMemoryContents_ParamsSpec,
      content.mojom.TestService_CloneSharedMemoryContents_ResponseParamsSpec,
      [region],
      false);
  }

  isProcessSandboxed() {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      content.mojom.TestService_IsProcessSandboxed_ParamsSpec,
      content.mojom.TestService_IsProcessSandboxed_ResponseParamsSpec,
      [],
      false);
  }

  pseudonymizeString(value) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      content.mojom.TestService_PseudonymizeString_ParamsSpec,
      content.mojom.TestService_PseudonymizeString_ResponseParamsSpec,
      [value],
      false);
  }

  passWriteableFile(file) {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      content.mojom.TestService_PassWriteableFile_ParamsSpec,
      content.mojom.TestService_PassWriteableFile_ResponseParamsSpec,
      [file],
      false);
  }

  writeToPreloadedPipe() {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      content.mojom.TestService_WriteToPreloadedPipe_ParamsSpec,
      null,
      [],
      false);
  }

};

content.mojom.TestService.getRemote = function() {
  let remote = new content.mojom.TestServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'content.mojom.TestService',
    'context');
  return remote.$;
};

content.mojom.TestServiceReceiver = class {
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
          const params = content.mojom.TestService_DoSomething_ParamsSpec.$.decode(message.payload);
          const result = this.impl.doSomething();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, content.mojom.TestService_DoSomething_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const params = content.mojom.TestService_DoTerminateProcess_ParamsSpec.$.decode(message.payload);
          const result = this.impl.doTerminateProcess();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, content.mojom.TestService_DoTerminateProcess_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const params = content.mojom.TestService_DoCrashImmediately_ParamsSpec.$.decode(message.payload);
          const result = this.impl.doCrashImmediately();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, content.mojom.TestService_DoCrashImmediately_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const params = content.mojom.TestService_CreateFolder_ParamsSpec.$.decode(message.payload);
          const result = this.impl.createFolder();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, content.mojom.TestService_CreateFolder_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 4: {
          const params = content.mojom.TestService_GetRequestorName_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getRequestorName();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, content.mojom.TestService_GetRequestorName_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 5: {
          const params = content.mojom.TestService_CreateReadOnlySharedMemoryRegion_ParamsSpec.$.decode(message.payload);
          const result = this.impl.createReadOnlySharedMemoryRegion(params.message);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, content.mojom.TestService_CreateReadOnlySharedMemoryRegion_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 6: {
          const params = content.mojom.TestService_CreateWritableSharedMemoryRegion_ParamsSpec.$.decode(message.payload);
          const result = this.impl.createWritableSharedMemoryRegion(params.message);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, content.mojom.TestService_CreateWritableSharedMemoryRegion_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 7: {
          const params = content.mojom.TestService_CreateUnsafeSharedMemoryRegion_ParamsSpec.$.decode(message.payload);
          const result = this.impl.createUnsafeSharedMemoryRegion(params.message);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, content.mojom.TestService_CreateUnsafeSharedMemoryRegion_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 8: {
          const params = content.mojom.TestService_CloneSharedMemoryContents_ParamsSpec.$.decode(message.payload);
          const result = this.impl.cloneSharedMemoryContents(params.region);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, content.mojom.TestService_CloneSharedMemoryContents_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 9: {
          const params = content.mojom.TestService_IsProcessSandboxed_ParamsSpec.$.decode(message.payload);
          const result = this.impl.isProcessSandboxed();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, content.mojom.TestService_IsProcessSandboxed_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 10: {
          const params = content.mojom.TestService_PseudonymizeString_ParamsSpec.$.decode(message.payload);
          const result = this.impl.pseudonymizeString(params.value);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, content.mojom.TestService_PseudonymizeString_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 11: {
          const params = content.mojom.TestService_PassWriteableFile_ParamsSpec.$.decode(message.payload);
          const result = this.impl.passWriteableFile(params.file);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, content.mojom.TestService_PassWriteableFile_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 12: {
          const params = content.mojom.TestService_WriteToPreloadedPipe_ParamsSpec.$.decode(message.payload);
          const result = this.impl.writeToPreloadedPipe();
          break;
        }
      }
    }});
  }
};

content.mojom.TestServiceReceiver = content.mojom.TestServiceReceiver;

content.mojom.TestServicePtr = content.mojom.TestServiceRemote;
content.mojom.TestServiceRequest = content.mojom.TestServicePendingReceiver;

