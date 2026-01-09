// Auto-generated MojoJS binding
// Source: chromium_src/content/public/test/test_service.mojom
// Module: content.mojom

'use strict';

// Module namespace
var content = content || {};
content.mojom = content.mojom || {};


// Interface: TestService
content.mojom.TestServicePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'content.mojom.TestService';
  }

  doSomething() {
    // Method: DoSomething
    // Call: DoSomething()
  }

  doTerminateProcess() {
    // Method: DoTerminateProcess
    // Call: DoTerminateProcess()
  }

  doCrashImmediately() {
    // Method: DoCrashImmediately
    // Call: DoCrashImmediately()
  }

  createFolder() {
    // Method: CreateFolder
    return new Promise((resolve) => {
      // Call: CreateFolder()
      resolve({});
    });
  }

  getRequestorName() {
    // Method: GetRequestorName
    return new Promise((resolve) => {
      // Call: GetRequestorName()
      resolve({});
    });
  }

  createReadOnlySharedMemoryRegion(message) {
    // Method: CreateReadOnlySharedMemoryRegion
    return new Promise((resolve) => {
      // Call: CreateReadOnlySharedMemoryRegion(message)
      resolve({});
    });
  }

  createWritableSharedMemoryRegion(message) {
    // Method: CreateWritableSharedMemoryRegion
    return new Promise((resolve) => {
      // Call: CreateWritableSharedMemoryRegion(message)
      resolve({});
    });
  }

  createUnsafeSharedMemoryRegion(message) {
    // Method: CreateUnsafeSharedMemoryRegion
    return new Promise((resolve) => {
      // Call: CreateUnsafeSharedMemoryRegion(message)
      resolve({});
    });
  }

  cloneSharedMemoryContents(region) {
    // Method: CloneSharedMemoryContents
    return new Promise((resolve) => {
      // Call: CloneSharedMemoryContents(region)
      resolve({});
    });
  }

  isProcessSandboxed() {
    // Method: IsProcessSandboxed
    return new Promise((resolve) => {
      // Call: IsProcessSandboxed()
      resolve({});
    });
  }

  pseudonymizeString(value) {
    // Method: PseudonymizeString
    return new Promise((resolve) => {
      // Call: PseudonymizeString(value)
      resolve({});
    });
  }

  passWriteableFile(file) {
    // Method: PassWriteableFile
    // Call: PassWriteableFile(file)
  }

  writeToPreloadedPipe() {
    // Method: WriteToPreloadedPipe
    // Call: WriteToPreloadedPipe()
  }

};

content.mojom.TestServiceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
