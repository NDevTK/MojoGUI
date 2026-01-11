// Auto-generated MojoJS binding
// Source: chromium_src/content/public/test/test_service.mojom
// Module: content.mojom

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
  doSomething() {
    return this.$.doSomething();
  }
  doTerminateProcess() {
    return this.$.doTerminateProcess();
  }
  doCrashImmediately() {
    return this.$.doCrashImmediately();
  }
  createFolder() {
    return this.$.createFolder();
  }
  getRequestorName() {
    return this.$.getRequestorName();
  }
  createReadOnlySharedMemoryRegion(message) {
    return this.$.createReadOnlySharedMemoryRegion(message);
  }
  createWritableSharedMemoryRegion(message) {
    return this.$.createWritableSharedMemoryRegion(message);
  }
  createUnsafeSharedMemoryRegion(message) {
    return this.$.createUnsafeSharedMemoryRegion(message);
  }
  cloneSharedMemoryContents(region) {
    return this.$.cloneSharedMemoryContents(region);
  }
  isProcessSandboxed() {
    return this.$.isProcessSandboxed();
  }
  pseudonymizeString(value) {
    return this.$.pseudonymizeString(value);
  }
  passWriteableFile(file) {
    return this.$.passWriteableFile(file);
  }
  writeToPreloadedPipe() {
    return this.$.writeToPreloadedPipe();
  }
};

content.mojom.TestServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('TestService', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  doSomething() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      content.mojom.TestService_DoSomething_ParamsSpec,
      content.mojom.TestService_DoSomething_ResponseParamsSpec,
      [],
      false);
  }

  doTerminateProcess() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      content.mojom.TestService_DoTerminateProcess_ParamsSpec,
      content.mojom.TestService_DoTerminateProcess_ResponseParamsSpec,
      [],
      false);
  }

  doCrashImmediately() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      content.mojom.TestService_DoCrashImmediately_ParamsSpec,
      content.mojom.TestService_DoCrashImmediately_ResponseParamsSpec,
      [],
      false);
  }

  createFolder() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      content.mojom.TestService_CreateFolder_ParamsSpec,
      content.mojom.TestService_CreateFolder_ResponseParamsSpec,
      [],
      false);
  }

  getRequestorName() {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      content.mojom.TestService_GetRequestorName_ParamsSpec,
      content.mojom.TestService_GetRequestorName_ResponseParamsSpec,
      [],
      false);
  }

  createReadOnlySharedMemoryRegion(message) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      content.mojom.TestService_CreateReadOnlySharedMemoryRegion_ParamsSpec,
      content.mojom.TestService_CreateReadOnlySharedMemoryRegion_ResponseParamsSpec,
      [message],
      false);
  }

  createWritableSharedMemoryRegion(message) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      content.mojom.TestService_CreateWritableSharedMemoryRegion_ParamsSpec,
      content.mojom.TestService_CreateWritableSharedMemoryRegion_ResponseParamsSpec,
      [message],
      false);
  }

  createUnsafeSharedMemoryRegion(message) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      content.mojom.TestService_CreateUnsafeSharedMemoryRegion_ParamsSpec,
      content.mojom.TestService_CreateUnsafeSharedMemoryRegion_ResponseParamsSpec,
      [message],
      false);
  }

  cloneSharedMemoryContents(region) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      content.mojom.TestService_CloneSharedMemoryContents_ParamsSpec,
      content.mojom.TestService_CloneSharedMemoryContents_ResponseParamsSpec,
      [region],
      false);
  }

  isProcessSandboxed() {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      content.mojom.TestService_IsProcessSandboxed_ParamsSpec,
      content.mojom.TestService_IsProcessSandboxed_ResponseParamsSpec,
      [],
      false);
  }

  pseudonymizeString(value) {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      content.mojom.TestService_PseudonymizeString_ParamsSpec,
      content.mojom.TestService_PseudonymizeString_ResponseParamsSpec,
      [value],
      false);
  }

  passWriteableFile(file) {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      content.mojom.TestService_PassWriteableFile_ParamsSpec,
      content.mojom.TestService_PassWriteableFile_ResponseParamsSpec,
      [file],
      false);
  }

  writeToPreloadedPipe() {
    return this.proxy.sendMessage(
      this.ordinals[12],  // ordinal
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
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('TestService', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.mojom.TestService_DoSomething_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.mojom.TestService_DoTerminateProcess_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.mojom.TestService_DoCrashImmediately_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.mojom.TestService_CreateFolder_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.mojom.TestService_GetRequestorName_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.mojom.TestService_CreateReadOnlySharedMemoryRegion_ParamsSpec);
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.mojom.TestService_CreateWritableSharedMemoryRegion_ParamsSpec);
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.mojom.TestService_CreateUnsafeSharedMemoryRegion_ParamsSpec);
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.mojom.TestService_CloneSharedMemoryContents_ParamsSpec);
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.mojom.TestService_IsProcessSandboxed_ParamsSpec);
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.mojom.TestService_PseudonymizeString_ParamsSpec);
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.mojom.TestService_PassWriteableFile_ParamsSpec);
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.mojom.TestService_WriteToPreloadedPipe_ParamsSpec);
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.mojom.TestService_DoSomething_ParamsSpec.$.structSpec);
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
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.mojom.TestService_DoTerminateProcess_ParamsSpec.$.structSpec);
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
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.mojom.TestService_DoCrashImmediately_ParamsSpec.$.structSpec);
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
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.mojom.TestService_CreateFolder_ParamsSpec.$.structSpec);
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
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.mojom.TestService_GetRequestorName_ParamsSpec.$.structSpec);
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
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.mojom.TestService_CreateReadOnlySharedMemoryRegion_ParamsSpec.$.structSpec);
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
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.mojom.TestService_CreateWritableSharedMemoryRegion_ParamsSpec.$.structSpec);
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
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.mojom.TestService_CreateUnsafeSharedMemoryRegion_ParamsSpec.$.structSpec);
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
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.mojom.TestService_CloneSharedMemoryContents_ParamsSpec.$.structSpec);
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
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.mojom.TestService_IsProcessSandboxed_ParamsSpec.$.structSpec);
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
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.mojom.TestService_PseudonymizeString_ParamsSpec.$.structSpec);
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
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.mojom.TestService_PassWriteableFile_ParamsSpec.$.structSpec);
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
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.mojom.TestService_WriteToPreloadedPipe_ParamsSpec.$.structSpec);
          const result = this.impl.writeToPreloadedPipe();
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

content.mojom.TestServiceReceiver = content.mojom.TestServiceReceiver;

content.mojom.TestServicePtr = content.mojom.TestServiceRemote;
content.mojom.TestServiceRequest = content.mojom.TestServicePendingReceiver;

