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
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
    this.ordinalMap.set(3, 3); // Default ordinal 3 -> Index 3
    this.ordinalMap.set(4, 4); // Default ordinal 4 -> Index 4
    this.ordinalMap.set(5, 5); // Default ordinal 5 -> Index 5
    this.ordinalMap.set(6, 6); // Default ordinal 6 -> Index 6
    this.ordinalMap.set(7, 7); // Default ordinal 7 -> Index 7
    this.ordinalMap.set(8, 8); // Default ordinal 8 -> Index 8
    this.ordinalMap.set(9, 9); // Default ordinal 9 -> Index 9
    this.ordinalMap.set(10, 10); // Default ordinal 10 -> Index 10
    this.ordinalMap.set(11, 11); // Default ordinal 11 -> Index 11
    this.ordinalMap.set(12, 12); // Default ordinal 12 -> Index 12
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: DoSomething
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(content.mojom.TestService_DoSomething_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DoSomething (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: DoTerminateProcess
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(content.mojom.TestService_DoTerminateProcess_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DoTerminateProcess (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: DoCrashImmediately
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(content.mojom.TestService_DoCrashImmediately_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DoCrashImmediately (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: CreateFolder
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(content.mojom.TestService_CreateFolder_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreateFolder (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: GetRequestorName
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(content.mojom.TestService_GetRequestorName_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetRequestorName (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: CreateReadOnlySharedMemoryRegion
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(content.mojom.TestService_CreateReadOnlySharedMemoryRegion_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreateReadOnlySharedMemoryRegion (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: CreateWritableSharedMemoryRegion
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(content.mojom.TestService_CreateWritableSharedMemoryRegion_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreateWritableSharedMemoryRegion (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: CreateUnsafeSharedMemoryRegion
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(content.mojom.TestService_CreateUnsafeSharedMemoryRegion_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreateUnsafeSharedMemoryRegion (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: CloneSharedMemoryContents
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(content.mojom.TestService_CloneSharedMemoryContents_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CloneSharedMemoryContents (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
           }
        }
        // Try Method 9: IsProcessSandboxed
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(content.mojom.TestService_IsProcessSandboxed_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> IsProcessSandboxed (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 9 failed:', e);
           }
        }
        // Try Method 10: PseudonymizeString
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(content.mojom.TestService_PseudonymizeString_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> PseudonymizeString (10)');
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 10 failed:', e);
           }
        }
        // Try Method 11: PassWriteableFile
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(content.mojom.TestService_PassWriteableFile_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> PassWriteableFile (11)');
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 11 failed:', e);
           }
        }
        // Try Method 12: WriteToPreloadedPipe
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(content.mojom.TestService_WriteToPreloadedPipe_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> WriteToPreloadedPipe (12)');
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 12 failed:', e);
           }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(content.mojom.TestService_DoSomething_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.doSomething');
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
          const params = decoder.decodeStruct(content.mojom.TestService_DoTerminateProcess_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.doTerminateProcess');
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
          const params = decoder.decodeStruct(content.mojom.TestService_DoCrashImmediately_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.doCrashImmediately');
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
          const params = decoder.decodeStruct(content.mojom.TestService_CreateFolder_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.createFolder');
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
          const params = decoder.decodeStruct(content.mojom.TestService_GetRequestorName_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getRequestorName');
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
          const params = decoder.decodeStruct(content.mojom.TestService_CreateReadOnlySharedMemoryRegion_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.createReadOnlySharedMemoryRegion');
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
          const params = decoder.decodeStruct(content.mojom.TestService_CreateWritableSharedMemoryRegion_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.createWritableSharedMemoryRegion');
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
          const params = decoder.decodeStruct(content.mojom.TestService_CreateUnsafeSharedMemoryRegion_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.createUnsafeSharedMemoryRegion');
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
          const params = decoder.decodeStruct(content.mojom.TestService_CloneSharedMemoryContents_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.cloneSharedMemoryContents');
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
          const params = decoder.decodeStruct(content.mojom.TestService_IsProcessSandboxed_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.isProcessSandboxed');
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
          const params = decoder.decodeStruct(content.mojom.TestService_PseudonymizeString_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.pseudonymizeString');
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
          const params = decoder.decodeStruct(content.mojom.TestService_PassWriteableFile_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.passWriteableFile');
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
          const params = decoder.decodeStruct(content.mojom.TestService_WriteToPreloadedPipe_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.writeToPreloadedPipe');
          const result = this.impl.writeToPreloadedPipe();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

content.mojom.TestServiceReceiver = content.mojom.TestServiceReceiver;

content.mojom.TestServicePtr = content.mojom.TestServiceRemote;
content.mojom.TestServiceRequest = content.mojom.TestServicePendingReceiver;

