// Auto-generated MojoJS binding
// Source: chromium_src/ash/webui/annotator/mojom/untrusted_annotator.mojom
// Module: ash.annotator.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.annotator = ash.annotator || {};
ash.annotator.mojom = ash.annotator.mojom || {};


// Interface: UntrustedAnnotatorPage
ash.annotator.mojom.UntrustedAnnotatorPage = {};

ash.annotator.mojom.UntrustedAnnotatorPagePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.annotator.mojom.UntrustedAnnotatorPageRemote = class {
  static get $interfaceName() {
    return 'ash.annotator.mojom.UntrustedAnnotatorPage';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.annotator.mojom.UntrustedAnnotatorPagePendingReceiver,
      handle);
    this.$ = new ash.annotator.mojom.UntrustedAnnotatorPageRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.annotator.mojom.UntrustedAnnotatorPageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  clear() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.annotator.mojom.UntrustedAnnotatorPage_Clear_ParamsSpec,
      null,
      []);
  }

  undo() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.annotator.mojom.UntrustedAnnotatorPage_Undo_ParamsSpec,
      null,
      []);
  }

  redo() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.annotator.mojom.UntrustedAnnotatorPage_Redo_ParamsSpec,
      null,
      []);
  }

  setTool(tool) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      ash.annotator.mojom.UntrustedAnnotatorPage_SetTool_ParamsSpec,
      null,
      [tool]);
  }

};

ash.annotator.mojom.UntrustedAnnotatorPage.getRemote = function() {
  let remote = new ash.annotator.mojom.UntrustedAnnotatorPageRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.annotator.mojom.UntrustedAnnotatorPage',
    'context');
  return remote.$;
};

// ParamsSpec for Clear
ash.annotator.mojom.UntrustedAnnotatorPage_Clear_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.annotator.mojom.UntrustedAnnotatorPage.Clear_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for Undo
ash.annotator.mojom.UntrustedAnnotatorPage_Undo_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.annotator.mojom.UntrustedAnnotatorPage.Undo_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for Redo
ash.annotator.mojom.UntrustedAnnotatorPage_Redo_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.annotator.mojom.UntrustedAnnotatorPage.Redo_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetTool
ash.annotator.mojom.UntrustedAnnotatorPage_SetTool_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.annotator.mojom.UntrustedAnnotatorPage.SetTool_Params',
      packedSize: 16,
      fields: [
        { name: 'tool', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
ash.annotator.mojom.UntrustedAnnotatorPagePtr = ash.annotator.mojom.UntrustedAnnotatorPageRemote;
ash.annotator.mojom.UntrustedAnnotatorPageRequest = ash.annotator.mojom.UntrustedAnnotatorPagePendingReceiver;


// Interface: UntrustedAnnotatorPageHandler
ash.annotator.mojom.UntrustedAnnotatorPageHandler = {};

ash.annotator.mojom.UntrustedAnnotatorPageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.annotator.mojom.UntrustedAnnotatorPageHandlerRemote = class {
  static get $interfaceName() {
    return 'ash.annotator.mojom.UntrustedAnnotatorPageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.annotator.mojom.UntrustedAnnotatorPageHandlerPendingReceiver,
      handle);
    this.$ = new ash.annotator.mojom.UntrustedAnnotatorPageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.annotator.mojom.UntrustedAnnotatorPageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onUndoRedoAvailabilityChanged(undo_available, redo_available) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.annotator.mojom.UntrustedAnnotatorPageHandler_OnUndoRedoAvailabilityChanged_ParamsSpec,
      null,
      [undo_available, redo_available]);
  }

  onCanvasInitialized(success) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.annotator.mojom.UntrustedAnnotatorPageHandler_OnCanvasInitialized_ParamsSpec,
      null,
      [success]);
  }

};

ash.annotator.mojom.UntrustedAnnotatorPageHandler.getRemote = function() {
  let remote = new ash.annotator.mojom.UntrustedAnnotatorPageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.annotator.mojom.UntrustedAnnotatorPageHandler',
    'context');
  return remote.$;
};

// ParamsSpec for OnUndoRedoAvailabilityChanged
ash.annotator.mojom.UntrustedAnnotatorPageHandler_OnUndoRedoAvailabilityChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.annotator.mojom.UntrustedAnnotatorPageHandler.OnUndoRedoAvailabilityChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'undo_available', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'redo_available', packedOffset: 0, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnCanvasInitialized
ash.annotator.mojom.UntrustedAnnotatorPageHandler_OnCanvasInitialized_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.annotator.mojom.UntrustedAnnotatorPageHandler.OnCanvasInitialized_Params',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
ash.annotator.mojom.UntrustedAnnotatorPageHandlerPtr = ash.annotator.mojom.UntrustedAnnotatorPageHandlerRemote;
ash.annotator.mojom.UntrustedAnnotatorPageHandlerRequest = ash.annotator.mojom.UntrustedAnnotatorPageHandlerPendingReceiver;


// Interface: UntrustedAnnotatorPageHandlerFactory
ash.annotator.mojom.UntrustedAnnotatorPageHandlerFactory = {};

ash.annotator.mojom.UntrustedAnnotatorPageHandlerFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.annotator.mojom.UntrustedAnnotatorPageHandlerFactoryRemote = class {
  static get $interfaceName() {
    return 'ash.annotator.mojom.UntrustedAnnotatorPageHandlerFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.annotator.mojom.UntrustedAnnotatorPageHandlerFactoryPendingReceiver,
      handle);
    this.$ = new ash.annotator.mojom.UntrustedAnnotatorPageHandlerFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.annotator.mojom.UntrustedAnnotatorPageHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  create(handler, annotator) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.annotator.mojom.UntrustedAnnotatorPageHandlerFactory_Create_ParamsSpec,
      null,
      [handler, annotator]);
  }

};

ash.annotator.mojom.UntrustedAnnotatorPageHandlerFactory.getRemote = function() {
  let remote = new ash.annotator.mojom.UntrustedAnnotatorPageHandlerFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.annotator.mojom.UntrustedAnnotatorPageHandlerFactory',
    'context');
  return remote.$;
};

// ParamsSpec for Create
ash.annotator.mojom.UntrustedAnnotatorPageHandlerFactory_Create_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.annotator.mojom.UntrustedAnnotatorPageHandlerFactory.Create_Params',
      packedSize: 16,
      fields: [
        { name: 'handler', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
        { name: 'annotator', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
ash.annotator.mojom.UntrustedAnnotatorPageHandlerFactoryPtr = ash.annotator.mojom.UntrustedAnnotatorPageHandlerFactoryRemote;
ash.annotator.mojom.UntrustedAnnotatorPageHandlerFactoryRequest = ash.annotator.mojom.UntrustedAnnotatorPageHandlerFactoryPendingReceiver;

