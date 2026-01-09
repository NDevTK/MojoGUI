// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/actor_internals/actor_internals.mojom
// Module: actor_internals.mojom

'use strict';

// Module namespace
var actor_internals = actor_internals || {};
actor_internals.mojom = actor_internals.mojom || {};


// Struct: JournalEntry
actor_internals.mojom.JournalEntry = class {
  constructor(values = {}) {
    this.event = values.event !== undefined ? values.event : "";
    this.Begin = values.Begin !== undefined ? values.Begin : null;
    this.End = values.End !== undefined ? values.End : null;
    this.screenshot = values.screenshot !== undefined ? values.screenshot : 0;
  }
};

// Interface: Page
actor_internals.mojom.PagePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'actor_internals.mojom.Page';
  }

  journalEntryAdded(entry) {
    // Method: JournalEntryAdded
    // Call: JournalEntryAdded(entry)
  }

};

actor_internals.mojom.PageRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: PageHandler
actor_internals.mojom.PageHandlerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'actor_internals.mojom.PageHandler';
  }

  startLogging() {
    // Method: StartLogging
    // Call: StartLogging()
  }

  stopLogging() {
    // Method: StopLogging
    // Call: StopLogging()
  }

};

actor_internals.mojom.PageHandlerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: PageHandlerFactory
actor_internals.mojom.PageHandlerFactoryPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'actor_internals.mojom.PageHandlerFactory';
  }

  createPageHandler(page, handler) {
    // Method: CreatePageHandler
    // Call: CreatePageHandler(page, handler)
  }

};

actor_internals.mojom.PageHandlerFactoryRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
