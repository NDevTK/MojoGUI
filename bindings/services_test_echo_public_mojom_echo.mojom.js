// Auto-generated MojoJS binding
// Source: chromium_src/services/test/echo/public/mojom/echo.mojom
// Module: echo.mojom

'use strict';

// Module namespace
var echo = echo || {};
echo.mojom = echo.mojom || {};
var components = components || {};

echo.mojom.LoadStatusSpec = { $: mojo.internal.Enum() };
echo.mojom.EchoService = {};
echo.mojom.EchoService.$interfaceName = 'echo.mojom.EchoService';
echo.mojom.EchoService_EchoString_ParamsSpec = { $: {} };
echo.mojom.EchoService_EchoString_ResponseParamsSpec = { $: {} };
echo.mojom.EchoService_EchoStringToSharedMemory_ParamsSpec = { $: {} };
echo.mojom.EchoService_Quit_ParamsSpec = { $: {} };
echo.mojom.EchoService_Crash_ParamsSpec = { $: {} };
echo.mojom.EchoService_DelayLoad_ParamsSpec = { $: {} };
echo.mojom.EchoService_LoadNativeLibrary_ParamsSpec = { $: {} };
echo.mojom.EchoService_LoadNativeLibrary_ResponseParamsSpec = { $: {} };
echo.mojom.EchoService_DecryptEncrypt_ParamsSpec = { $: {} };
echo.mojom.EchoService_DecryptEncrypt_ResponseParamsSpec = { $: {} };

// Enum: LoadStatus
echo.mojom.LoadStatus = {
  kSuccess: 0,
  kFailedLoadLibrary: 1,
  kFailedGetProcAddress: 2,
  kFailedCallingDelayLoad: 3,
};

// Interface: EchoService
mojo.internal.Struct(
    echo.mojom.EchoService_EchoString_ParamsSpec, 'echo.mojom.EchoService_EchoString_Params', [
      mojo.internal.StructField('input', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    echo.mojom.EchoService_EchoString_ResponseParamsSpec, 'echo.mojom.EchoService_EchoString_ResponseParams', [
      mojo.internal.StructField('echoed_input', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    echo.mojom.EchoService_EchoStringToSharedMemory_ParamsSpec, 'echo.mojom.EchoService_EchoStringToSharedMemory_Params', [
      mojo.internal.StructField('input', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('region', 8, 0, mojo_base.mojom.UnsafeSharedMemoryRegionSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    echo.mojom.EchoService_Quit_ParamsSpec, 'echo.mojom.EchoService_Quit_Params', [
    ],
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    echo.mojom.EchoService_Crash_ParamsSpec, 'echo.mojom.EchoService_Crash_Params', [
    ],
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    echo.mojom.EchoService_DelayLoad_ParamsSpec, 'echo.mojom.EchoService_DelayLoad_Params', [
    ],
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    echo.mojom.EchoService_LoadNativeLibrary_ParamsSpec, 'echo.mojom.EchoService_LoadNativeLibrary_Params', [
      mojo.internal.StructField('library', 0, 0, mojo_base.mojom.FilePathSpec, null, false, 0, undefined),
      mojo.internal.StructField('call_winmm_delayload', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    echo.mojom.EchoService_LoadNativeLibrary_ResponseParamsSpec, 'echo.mojom.EchoService_LoadNativeLibrary_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, echo.mojom.LoadStatusSpec, null, false, 0, undefined),
      mojo.internal.StructField('error_code', 4, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    echo.mojom.EchoService_DecryptEncrypt_ParamsSpec, 'echo.mojom.EchoService_DecryptEncrypt_Params', [
      mojo.internal.StructField('encryptor', 0, 0, os_crypt_async.mojom.EncryptorSpec, null, false, 0, undefined),
      mojo.internal.StructField('input', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    echo.mojom.EchoService_DecryptEncrypt_ResponseParamsSpec, 'echo.mojom.EchoService_DecryptEncrypt_ResponseParams', [
      mojo.internal.StructField('output', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, true, 0, undefined),
    ],
    [[0, 16]]);

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
      echo.mojom.EchoService_EchoString_ParamsSpec,
      echo.mojom.EchoService_EchoString_ResponseParamsSpec,
      [input]);
  }

  echoStringToSharedMemory(input, region) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      echo.mojom.EchoService_EchoStringToSharedMemory_ParamsSpec,
      null,
      [input, region]);
  }

  quit() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      echo.mojom.EchoService_Quit_ParamsSpec,
      null,
      []);
  }

  crash() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      echo.mojom.EchoService_Crash_ParamsSpec,
      null,
      []);
  }

  delayLoad() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      echo.mojom.EchoService_DelayLoad_ParamsSpec,
      null,
      []);
  }

  loadNativeLibrary(library, call_winmm_delayload) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      echo.mojom.EchoService_LoadNativeLibrary_ParamsSpec,
      echo.mojom.EchoService_LoadNativeLibrary_ResponseParamsSpec,
      [library, call_winmm_delayload]);
  }

  decryptEncrypt(encryptor, input) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      echo.mojom.EchoService_DecryptEncrypt_ParamsSpec,
      echo.mojom.EchoService_DecryptEncrypt_ResponseParamsSpec,
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

echo.mojom.EchoServicePtr = echo.mojom.EchoServiceRemote;
echo.mojom.EchoServiceRequest = echo.mojom.EchoServicePendingReceiver;

