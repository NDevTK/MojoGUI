// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/services/ime/public/mojom/ime_service.mojom
// Module: ash.ime.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.ime = ash.ime || {};
ash.ime.mojom = ash.ime.mojom || {};


// Interface: InputEngineManager
ash.ime.mojom.InputEngineManagerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.ime.mojom.InputEngineManager';
  }

  failure(found) {
    // Method: failure
    // Call: failure(found)
  }

  tODO() {
    // Method: TODO
    // Call: TODO()
  }

  connectToProtoModeSharedLibInputMethod() {
    // Method: ConnectToProtoModeSharedLibInputMethod
    // Call: ConnectToProtoModeSharedLibInputMethod()
  }

  connectToImeEngine(ime_spec, to_engine_request, from_engine, extra) {
    // Method: ConnectToImeEngine
    return new Promise((resolve) => {
      // Call: ConnectToImeEngine(ime_spec, to_engine_request, from_engine, extra)
      resolve({});
    });
  }

  pipe(details) {
    // Method: pipe
    // Call: pipe(details)
  }

  tODO() {
    // Method: TODO
    // Call: TODO()
  }

  initializeMojoModeSharedLibConnectionFactory() {
    // Method: InitializeMojoModeSharedLibConnectionFactory
    // Call: InitializeMojoModeSharedLibConnectionFactory()
  }

  initializeConnectionFactory(connection_factory) {
    // Method: InitializeConnectionFactory
    return new Promise((resolve) => {
      // Call: InitializeConnectionFactory(connection_factory)
      resolve({});
    });
  }

};

ash.ime.mojom.InputEngineManagerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: PlatformAccessProvider
ash.ime.mojom.PlatformAccessProviderPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.ime.mojom.PlatformAccessProvider';
  }

  downloadImeFileTo(url, file_path) {
    // Method: DownloadImeFileTo
    return new Promise((resolve) => {
      // Call: DownloadImeFileTo(url, file_path)
      resolve({});
    });
  }

};

ash.ime.mojom.PlatformAccessProviderRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: ImeService
ash.ime.mojom.ImeServicePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.ime.mojom.ImeService';
  }

  client(browser) {
    // Method: client
    // Call: client(browser)
  }

  setPlatformAccessProvider(provider) {
    // Method: SetPlatformAccessProvider
    // Call: SetPlatformAccessProvider(provider)
  }

  bindInputEngineManager(receiver) {
    // Method: BindInputEngineManager
    // Call: BindInputEngineManager(receiver)
  }

  bindInputMethodUserDataService(receiver) {
    // Method: BindInputMethodUserDataService
    // Call: BindInputMethodUserDataService(receiver)
  }

};

ash.ime.mojom.ImeServiceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
