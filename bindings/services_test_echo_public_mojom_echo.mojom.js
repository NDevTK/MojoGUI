// Auto-generated MojoJS binding
// Source: chromium_src/services/test/echo/public/mojom/echo.mojom
// Module: echo.mojom

'use strict';

// Module namespace
var echo = echo || {};
echo.mojom = echo.mojom || {};


// Enum: LoadStatus
echo.mojom.mojom.LoadStatus = {
  kSuccess: 0,
  kFailedLoadLibrary: 1,
  kFailedGetProcAddress: 2,
  kFailedCallingDelayLoad: 3,
};
echo.mojom.mojom.LoadStatusSpec = { $: mojo.internal.Enum() };

// Interface: EchoService
echo.mojom.mojom.EchoService = {};

echo.mojom.mojom.EchoServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

echo.mojom.mojom.EchoServiceRemote = class {
  static get $interfaceName() {
    return 'echo.mojom.EchoService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      echo.mojom.mojom.EchoServicePendingReceiver,
      handle);
    this.$ = new echo.mojom.mojom.EchoServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

echo.mojom.mojom.EchoServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  echoString(input) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      echo.mojom.mojom.EchoService_EchoString_ParamsSpec,
      echo.mojom.mojom.EchoService_EchoString_ResponseParamsSpec,
      [input]);
  }

  echoStringToSharedMemory(input, region) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      echo.mojom.mojom.EchoService_EchoStringToSharedMemory_ParamsSpec,
      null,
      [input, region]);
  }

  quit() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      echo.mojom.mojom.EchoService_Quit_ParamsSpec,
      null,
      []);
  }

  crash() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      echo.mojom.mojom.EchoService_Crash_ParamsSpec,
      null,
      []);
  }

  delayLoad() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      echo.mojom.mojom.EchoService_DelayLoad_ParamsSpec,
      null,
      []);
  }

  loadNativeLibrary(library, call_winmm_delayload) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      echo.mojom.mojom.EchoService_LoadNativeLibrary_ParamsSpec,
      echo.mojom.mojom.EchoService_LoadNativeLibrary_ResponseParamsSpec,
      [library, call_winmm_delayload]);
  }

  decryptEncrypt(encryptor, input) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      echo.mojom.mojom.EchoService_DecryptEncrypt_ParamsSpec,
      echo.mojom.mojom.EchoService_DecryptEncrypt_ResponseParamsSpec,
      [encryptor, input]);
  }

};

echo.mojom.mojom.EchoService.getRemote = function() {
  let remote = new echo.mojom.mojom.EchoServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'echo.mojom.EchoService',
    'context');
  return remote.$;
};

// ParamsSpec for EchoString
echo.mojom.mojom.EchoService_EchoString_ParamsSpec = {
  $: {
    structSpec: {
      name: 'echo.mojom.EchoService.EchoString_Params',
      packedSize: 16,
      fields: [
        { name: 'input', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

echo.mojom.mojom.EchoService_EchoString_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'echo.mojom.EchoService.EchoString_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'echoed_input', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for EchoStringToSharedMemory
echo.mojom.mojom.EchoService_EchoStringToSharedMemory_ParamsSpec = {
  $: {
    structSpec: {
      name: 'echo.mojom.EchoService.EchoStringToSharedMemory_Params',
      packedSize: 24,
      fields: [
        { name: 'input', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'region', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.UnsafeSharedMemoryRegionSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for Quit
echo.mojom.mojom.EchoService_Quit_ParamsSpec = {
  $: {
    structSpec: {
      name: 'echo.mojom.EchoService.Quit_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for Crash
echo.mojom.mojom.EchoService_Crash_ParamsSpec = {
  $: {
    structSpec: {
      name: 'echo.mojom.EchoService.Crash_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for DelayLoad
echo.mojom.mojom.EchoService_DelayLoad_ParamsSpec = {
  $: {
    structSpec: {
      name: 'echo.mojom.EchoService.DelayLoad_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for LoadNativeLibrary
echo.mojom.mojom.EchoService_LoadNativeLibrary_ParamsSpec = {
  $: {
    structSpec: {
      name: 'echo.mojom.EchoService.LoadNativeLibrary_Params',
      packedSize: 24,
      fields: [
        { name: 'library', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.FilePathSpec, nullable: false, minVersion: 0 },
        { name: 'call_winmm_delayload', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

echo.mojom.mojom.EchoService_LoadNativeLibrary_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'echo.mojom.EchoService.LoadNativeLibrary_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: echo.mojom.LoadStatusSpec, nullable: false, minVersion: 0 },
        { name: 'error_code', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for DecryptEncrypt
echo.mojom.mojom.EchoService_DecryptEncrypt_ParamsSpec = {
  $: {
    structSpec: {
      name: 'echo.mojom.EchoService.DecryptEncrypt_Params',
      packedSize: 24,
      fields: [
        { name: 'encryptor', packedOffset: 0, packedBitOffset: 0, type: os_crypt_async.mojom.EncryptorSpec, nullable: false, minVersion: 0 },
        { name: 'input', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

echo.mojom.mojom.EchoService_DecryptEncrypt_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'echo.mojom.EchoService.DecryptEncrypt_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'output', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
echo.mojom.mojom.EchoServicePtr = echo.mojom.mojom.EchoServiceRemote;
echo.mojom.mojom.EchoServiceRequest = echo.mojom.mojom.EchoServicePendingReceiver;

