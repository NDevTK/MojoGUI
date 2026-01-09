// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/on_device_translation_internals/on_device_translation_internals.mojom
// Module: on_device_translation_internals.mojom

'use strict';

// Module namespace
var on_device_translation_internals = on_device_translation_internals || {};
on_device_translation_internals.mojom = on_device_translation_internals.mojom || {};


// Enum: LanguagePackStatus
on_device_translation_internals.mojom.LanguagePackStatus = {
};

// Struct: LanguagePackInfo
on_device_translation_internals.mojom.LanguagePackInfo = class {
  constructor(values = {}) {
    this.status = values.status !== undefined ? values.status : "";
  }
};

// Interface: PageHandlerFactory
on_device_translation_internals.mojom.PageHandlerFactoryPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'on_device_translation_internals.mojom.PageHandlerFactory';
  }

  createPageHandler(page, handler) {
    // Method: CreatePageHandler
    // Call: CreatePageHandler(page, handler)
  }

};

on_device_translation_internals.mojom.PageHandlerFactoryRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: PageHandler
on_device_translation_internals.mojom.PageHandlerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'on_device_translation_internals.mojom.PageHandler';
  }

  installLanguagePackage(package_index) {
    // Method: InstallLanguagePackage
    // Call: InstallLanguagePackage(package_index)
  }

  uninstallLanguagePackage(package_index) {
    // Method: UninstallLanguagePackage
    // Call: UninstallLanguagePackage(package_index)
  }

};

on_device_translation_internals.mojom.PageHandlerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: Page
on_device_translation_internals.mojom.PagePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'on_device_translation_internals.mojom.Page';
  }

  onLanguagePackStatus(status) {
    // Method: OnLanguagePackStatus
    // Call: OnLanguagePackStatus(status)
  }

};

on_device_translation_internals.mojom.PageRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
