// Auto-generated MojoJS binding
// Source: chromium_src/content/public/test/test_service.mojom
// Module: content.mojom

'use strict';

// Module namespace
var content = content || {};
content.mojom = content.mojom || {};


// Interface: TestService
content.mojom.TestService = {};

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
      null,
      null,
      [],
      undefined,
      undefined
    );
  }

  doTerminateProcess() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      content.mojom.TestService_DoTerminateProcess_ParamsSpec,
      null,
      null,
      [],
      undefined,
      undefined
    );
  }

  doCrashImmediately() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      content.mojom.TestService_DoCrashImmediately_ParamsSpec,
      null,
      null,
      [],
      undefined,
      undefined
    );
  }

  createFolder() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      content.mojom.TestService_CreateFolder_ParamsSpec,
      content.mojom.TestService_CreateFolder_ResponseParamsSpec,
      content.mojom.TestService_CreateFolder_ResponseParamsSpec,
      [],
      undefined,
      undefined
    );
  }

  getRequestorName() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      content.mojom.TestService_GetRequestorName_ParamsSpec,
      content.mojom.TestService_GetRequestorName_ResponseParamsSpec,
      content.mojom.TestService_GetRequestorName_ResponseParamsSpec,
      [],
      undefined,
      undefined
    );
  }

  createReadOnlySharedMemoryRegion(message) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      content.mojom.TestService_CreateReadOnlySharedMemoryRegion_ParamsSpec,
      content.mojom.TestService_CreateReadOnlySharedMemoryRegion_ResponseParamsSpec,
      content.mojom.TestService_CreateReadOnlySharedMemoryRegion_ResponseParamsSpec,
      [message],
      undefined,
      undefined
    );
  }

  createWritableSharedMemoryRegion(message) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      content.mojom.TestService_CreateWritableSharedMemoryRegion_ParamsSpec,
      content.mojom.TestService_CreateWritableSharedMemoryRegion_ResponseParamsSpec,
      content.mojom.TestService_CreateWritableSharedMemoryRegion_ResponseParamsSpec,
      [message],
      undefined,
      undefined
    );
  }

  createUnsafeSharedMemoryRegion(message) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      content.mojom.TestService_CreateUnsafeSharedMemoryRegion_ParamsSpec,
      content.mojom.TestService_CreateUnsafeSharedMemoryRegion_ResponseParamsSpec,
      content.mojom.TestService_CreateUnsafeSharedMemoryRegion_ResponseParamsSpec,
      [message],
      undefined,
      undefined
    );
  }

  cloneSharedMemoryContents(region) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      content.mojom.TestService_CloneSharedMemoryContents_ParamsSpec,
      content.mojom.TestService_CloneSharedMemoryContents_ResponseParamsSpec,
      content.mojom.TestService_CloneSharedMemoryContents_ResponseParamsSpec,
      [region],
      undefined,
      undefined
    );
  }

  isProcessSandboxed() {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      content.mojom.TestService_IsProcessSandboxed_ParamsSpec,
      content.mojom.TestService_IsProcessSandboxed_ResponseParamsSpec,
      content.mojom.TestService_IsProcessSandboxed_ResponseParamsSpec,
      [],
      undefined,
      undefined
    );
  }

  pseudonymizeString(value) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      content.mojom.TestService_PseudonymizeString_ParamsSpec,
      content.mojom.TestService_PseudonymizeString_ResponseParamsSpec,
      content.mojom.TestService_PseudonymizeString_ResponseParamsSpec,
      [value],
      undefined,
      undefined
    );
  }

  passWriteableFile(file) {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      content.mojom.TestService_PassWriteableFile_ParamsSpec,
      null,
      null,
      [file],
      undefined,
      undefined
    );
  }

  writeToPreloadedPipe() {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      content.mojom.TestService_WriteToPreloadedPipe_ParamsSpec,
      null,
      null,
      [],
      undefined,
      undefined
    );
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

// ParamsSpec for DoSomething
content.mojom.TestService_DoSomething_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.TestService.DoSomething_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for DoTerminateProcess
content.mojom.TestService_DoTerminateProcess_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.TestService.DoTerminateProcess_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for DoCrashImmediately
content.mojom.TestService_DoCrashImmediately_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.TestService.DoCrashImmediately_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for CreateFolder
content.mojom.TestService_CreateFolder_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.TestService.CreateFolder_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

content.mojom.TestService_CreateFolder_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.TestService.CreateFolder_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'succeeded', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetRequestorName
content.mojom.TestService_GetRequestorName_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.TestService.GetRequestorName_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

content.mojom.TestService_GetRequestorName_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.TestService.GetRequestorName_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for CreateReadOnlySharedMemoryRegion
content.mojom.TestService_CreateReadOnlySharedMemoryRegion_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.TestService.CreateReadOnlySharedMemoryRegion_Params',
      packedSize: 16,
      fields: [
        { name: 'message', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

content.mojom.TestService_CreateReadOnlySharedMemoryRegion_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.TestService.CreateReadOnlySharedMemoryRegion_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'region', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for CreateWritableSharedMemoryRegion
content.mojom.TestService_CreateWritableSharedMemoryRegion_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.TestService.CreateWritableSharedMemoryRegion_Params',
      packedSize: 16,
      fields: [
        { name: 'message', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

content.mojom.TestService_CreateWritableSharedMemoryRegion_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.TestService.CreateWritableSharedMemoryRegion_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'region', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for CreateUnsafeSharedMemoryRegion
content.mojom.TestService_CreateUnsafeSharedMemoryRegion_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.TestService.CreateUnsafeSharedMemoryRegion_Params',
      packedSize: 16,
      fields: [
        { name: 'message', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

content.mojom.TestService_CreateUnsafeSharedMemoryRegion_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.TestService.CreateUnsafeSharedMemoryRegion_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'region', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for CloneSharedMemoryContents
content.mojom.TestService_CloneSharedMemoryContents_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.TestService.CloneSharedMemoryContents_Params',
      packedSize: 16,
      fields: [
        { name: 'region', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

content.mojom.TestService_CloneSharedMemoryContents_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.TestService.CloneSharedMemoryContents_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'new_region', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for IsProcessSandboxed
content.mojom.TestService_IsProcessSandboxed_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.TestService.IsProcessSandboxed_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

content.mojom.TestService_IsProcessSandboxed_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.TestService.IsProcessSandboxed_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'is_sandboxed', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for PseudonymizeString
content.mojom.TestService_PseudonymizeString_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.TestService.PseudonymizeString_Params',
      packedSize: 16,
      fields: [
        { name: 'value', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

content.mojom.TestService_PseudonymizeString_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.TestService.PseudonymizeString_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for PassWriteableFile
content.mojom.TestService_PassWriteableFile_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.TestService.PassWriteableFile_Params',
      packedSize: 16,
      fields: [
        { name: 'file', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for WriteToPreloadedPipe
content.mojom.TestService_WriteToPreloadedPipe_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.TestService.WriteToPreloadedPipe_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Legacy compatibility
content.mojom.TestServicePtr = content.mojom.TestServiceRemote;
content.mojom.TestServiceRequest = content.mojom.TestServicePendingReceiver;

