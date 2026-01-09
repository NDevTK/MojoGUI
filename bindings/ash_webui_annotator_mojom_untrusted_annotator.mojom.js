// Auto-generated MojoJS binding
// Source: chromium_src/ash/webui/annotator/mojom/untrusted_annotator.mojom
// Module: ash.annotator.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.annotator = ash.annotator || {};
ash.annotator.mojom = ash.annotator.mojom || {};


// Interface: UntrustedAnnotatorPage
ash.annotator.mojom.UntrustedAnnotatorPagePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.annotator.mojom.UntrustedAnnotatorPage';
  }

  clear() {
    // Method: Clear
    // Call: Clear()
  }

  undo() {
    // Method: Undo
    // Call: Undo()
  }

  redo() {
    // Method: Redo
    // Call: Redo()
  }

  setTool(tool) {
    // Method: SetTool
    // Call: SetTool(tool)
  }

};

ash.annotator.mojom.UntrustedAnnotatorPageRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: UntrustedAnnotatorPageHandler
ash.annotator.mojom.UntrustedAnnotatorPageHandlerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.annotator.mojom.UntrustedAnnotatorPageHandler';
  }

  onUndoRedoAvailabilityChanged(undo_available, redo_available) {
    // Method: OnUndoRedoAvailabilityChanged
    // Call: OnUndoRedoAvailabilityChanged(undo_available, redo_available)
  }

  onCanvasInitialized(success) {
    // Method: OnCanvasInitialized
    // Call: OnCanvasInitialized(success)
  }

};

ash.annotator.mojom.UntrustedAnnotatorPageHandlerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: UntrustedAnnotatorPageHandlerFactory
ash.annotator.mojom.UntrustedAnnotatorPageHandlerFactoryPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.annotator.mojom.UntrustedAnnotatorPageHandlerFactory';
  }

  create(handler, annotator) {
    // Method: Create
    // Call: Create(handler, annotator)
  }

};

ash.annotator.mojom.UntrustedAnnotatorPageHandlerFactoryRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
