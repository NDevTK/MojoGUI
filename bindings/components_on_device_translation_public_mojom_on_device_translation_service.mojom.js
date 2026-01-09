// Auto-generated MojoJS binding
// Source: chromium_src/components/on_device_translation/public/mojom/on_device_translation_service.mojom
// Module: on_device_translation.mojom

'use strict';

// Module namespace
var on_device_translation = on_device_translation || {};
on_device_translation.mojom = on_device_translation.mojom || {};


// Enum: CreateTranslatorResult
on_device_translation.mojom.CreateTranslatorResult = {
};

// Struct: OnDeviceTranslationLanguagePackage
on_device_translation.mojom.OnDeviceTranslationLanguagePackage = class {
  constructor(values = {}) {
    this.language2 = values.language2 !== undefined ? values.language2 : "";
  }
};

// Struct: OnDeviceTranslationServiceConfig
on_device_translation.mojom.OnDeviceTranslationServiceConfig = class {
  constructor(values = {}) {
    this.file_operation_proxy = values.file_operation_proxy !== undefined ? values.file_operation_proxy : [];
  }
};

// Interface: FileOperationProxy
on_device_translation.mojom.FileOperationProxyPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'on_device_translation.mojom.FileOperationProxy';
  }

  fileExists(package_index, relative_path) {
    // Method: FileExists
    return new Promise((resolve) => {
      // Call: FileExists(package_index, relative_path)
      resolve({});
    });
  }

  open(package_index, relative_path) {
    // Method: Open
    return new Promise((resolve) => {
      // Call: Open(package_index, relative_path)
      resolve({});
    });
  }

};

on_device_translation.mojom.FileOperationProxyRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: OnDeviceTranslationService
on_device_translation.mojom.OnDeviceTranslationServicePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'on_device_translation.mojom.OnDeviceTranslationService';
  }

  setServiceConfig(config) {
    // Method: SetServiceConfig
    // Call: SetServiceConfig(config)
  }

  createTranslator(source_lang, target_lang, receiver) {
    // Method: CreateTranslator
    return new Promise((resolve) => {
      // Call: CreateTranslator(source_lang, target_lang, receiver)
      resolve({});
    });
  }

  canTranslate(source_lang, target_lang) {
    // Method: CanTranslate
    return new Promise((resolve) => {
      // Call: CanTranslate(source_lang, target_lang)
      resolve({});
    });
  }

};

on_device_translation.mojom.OnDeviceTranslationServiceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
