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
echo.mojom.EchoServicePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'echo.mojom.EchoService';
  }

  echoString(input) {
    // Method: EchoString
    return new Promise((resolve) => {
      // Call: EchoString(input)
      resolve({});
    });
  }

  echoStringToSharedMemory(input, region) {
    // Method: EchoStringToSharedMemory
    // Call: EchoStringToSharedMemory(input, region)
  }

  quit() {
    // Method: Quit
    // Call: Quit()
  }

  crash() {
    // Method: Crash
    // Call: Crash()
  }

  delayLoad() {
    // Method: DelayLoad
    // Call: DelayLoad()
  }

  loadNativeLibrary(library, call_winmm_delayload) {
    // Method: LoadNativeLibrary
    return new Promise((resolve) => {
      // Call: LoadNativeLibrary(library, call_winmm_delayload)
      resolve({});
    });
  }

  decryptEncrypt(encryptor, input) {
    // Method: DecryptEncrypt
    return new Promise((resolve) => {
      // Call: DecryptEncrypt(encryptor, input)
      resolve({});
    });
  }

};

echo.mojom.EchoServiceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
