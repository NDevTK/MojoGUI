// Auto-generated MojoJS binding
// Source: chromium_src/services/test/echo/public/mojom/echo.mojom
// Module: echo.mojom

'use strict';

// Module namespace
var echo = echo || {};
echo.mojom = echo.mojom || {};


// Enum: LoadStatus
echo.mojom.LoadStatus = {
  kSuccess: 0,
  kFailedLoadLibrary: 1,
  kFailedGetProcAddress: 2,
  kFailedCallingDelayLoad: 3,
};

// Interface: EchoService
echo.mojom.EchoServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

echo.mojom.EchoServiceRemote = class {
  static get $interfaceName() {
    return 'echo.mojom.EchoService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      echo.mojom.EchoServicePendingReceiver,
      handle);
    this.$ = new echo.mojom.EchoServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

echo.mojom.EchoServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  echoString(input) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      echo.mojom.EchoService_EchoString_ParamsSpec.$,
      echo.mojom.EchoService_EchoString_ResponseParamsSpec.$,
      [input]);
  }

  echoStringToSharedMemory(input, region) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      echo.mojom.EchoService_EchoStringToSharedMemory_ParamsSpec.$,
      null,
      [input, region]);
  }

  quit() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      echo.mojom.EchoService_Quit_ParamsSpec.$,
      null,
      []);
  }

  crash() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      echo.mojom.EchoService_Crash_ParamsSpec.$,
      null,
      []);
  }

  delayLoad() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      echo.mojom.EchoService_DelayLoad_ParamsSpec.$,
      null,
      []);
  }

  loadNativeLibrary(library, call_winmm_delayload) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      echo.mojom.EchoService_LoadNativeLibrary_ParamsSpec.$,
      echo.mojom.EchoService_LoadNativeLibrary_ResponseParamsSpec.$,
      [library, call_winmm_delayload]);
  }

  decryptEncrypt(encryptor, input) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      echo.mojom.EchoService_DecryptEncrypt_ParamsSpec.$,
      echo.mojom.EchoService_DecryptEncrypt_ResponseParamsSpec.$,
      [encryptor, input]);
  }

};

echo.mojom.EchoService.getRemote = function() {
  let remote = new echo.mojom.EchoServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'echo.mojom.EchoService',
    'context');
  return remote.$;
};

// ParamsSpec for EchoString
echo.mojom.EchoService_EchoString_ParamsSpec = {
  $: {
    structSpec: {
      name: 'echo.mojom.EchoService.EchoString_Params',
      packedSize: 16,
      fields: [
        { name: 'input', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

echo.mojom.EchoService_EchoString_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'echo.mojom.EchoService.EchoString_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'echoed_input', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for EchoStringToSharedMemory
echo.mojom.EchoService_EchoStringToSharedMemory_ParamsSpec = {
  $: {
    structSpec: {
      name: 'echo.mojom.EchoService.EchoStringToSharedMemory_Params',
      packedSize: 24,
      fields: [
        { name: 'input', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'region', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for Quit
echo.mojom.EchoService_Quit_ParamsSpec = {
  $: {
    structSpec: {
      name: 'echo.mojom.EchoService.Quit_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for Crash
echo.mojom.EchoService_Crash_ParamsSpec = {
  $: {
    structSpec: {
      name: 'echo.mojom.EchoService.Crash_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for DelayLoad
echo.mojom.EchoService_DelayLoad_ParamsSpec = {
  $: {
    structSpec: {
      name: 'echo.mojom.EchoService.DelayLoad_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for LoadNativeLibrary
echo.mojom.EchoService_LoadNativeLibrary_ParamsSpec = {
  $: {
    structSpec: {
      name: 'echo.mojom.EchoService.LoadNativeLibrary_Params',
      packedSize: 24,
      fields: [
        { name: 'library', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'call_winmm_delayload', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

echo.mojom.EchoService_LoadNativeLibrary_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'echo.mojom.EchoService.LoadNativeLibrary_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'error_code', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for DecryptEncrypt
echo.mojom.EchoService_DecryptEncrypt_ParamsSpec = {
  $: {
    structSpec: {
      name: 'echo.mojom.EchoService.DecryptEncrypt_Params',
      packedSize: 24,
      fields: [
        { name: 'encryptor', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'input', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

echo.mojom.EchoService_DecryptEncrypt_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'echo.mojom.EchoService.DecryptEncrypt_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'output', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
echo.mojom.EchoServicePtr = echo.mojom.EchoServiceRemote;
echo.mojom.EchoServiceRequest = echo.mojom.EchoServicePendingReceiver;

