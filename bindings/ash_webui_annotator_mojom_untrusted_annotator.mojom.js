// Auto-generated MojoJS binding
// Source: chromium_src/ash/webui/annotator/mojom/untrusted_annotator.mojom
// Module: ash.annotator.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.annotator = ash.annotator || {};
ash.annotator.annotator.mojom = ash.annotator.annotator.mojom || {};


// Interface: UntrustedAnnotatorPage
ash.annotator.annotator.mojom.mojom.UntrustedAnnotatorPage = {};

ash.annotator.annotator.mojom.mojom.UntrustedAnnotatorPagePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.annotator.annotator.mojom.mojom.UntrustedAnnotatorPageRemote = class {
  static get $interfaceName() {
    return 'ash.annotator.mojom.UntrustedAnnotatorPage';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.annotator.annotator.mojom.mojom.UntrustedAnnotatorPagePendingReceiver,
      handle);
    this.$ = new ash.annotator.annotator.mojom.mojom.UntrustedAnnotatorPageRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.annotator.annotator.mojom.mojom.UntrustedAnnotatorPageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  clear() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.annotator.annotator.mojom.mojom.UntrustedAnnotatorPage_Clear_ParamsSpec,
      null,
      []);
  }

  undo() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.annotator.annotator.mojom.mojom.UntrustedAnnotatorPage_Undo_ParamsSpec,
      null,
      []);
  }

  redo() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.annotator.annotator.mojom.mojom.UntrustedAnnotatorPage_Redo_ParamsSpec,
      null,
      []);
  }

  setTool(tool) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      ash.annotator.annotator.mojom.mojom.UntrustedAnnotatorPage_SetTool_ParamsSpec,
      null,
      [tool]);
  }

};

ash.annotator.annotator.mojom.mojom.UntrustedAnnotatorPage.getRemote = function() {
  let remote = new ash.annotator.annotator.mojom.mojom.UntrustedAnnotatorPageRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.annotator.mojom.UntrustedAnnotatorPage',
    'context');
  return remote.$;
};

// ParamsSpec for Clear
ash.annotator.annotator.mojom.mojom.UntrustedAnnotatorPage_Clear_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.annotator.mojom.UntrustedAnnotatorPage.Clear_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for Undo
ash.annotator.annotator.mojom.mojom.UntrustedAnnotatorPage_Undo_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.annotator.mojom.UntrustedAnnotatorPage.Undo_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for Redo
ash.annotator.annotator.mojom.mojom.UntrustedAnnotatorPage_Redo_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.annotator.mojom.UntrustedAnnotatorPage.Redo_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for SetTool
ash.annotator.annotator.mojom.mojom.UntrustedAnnotatorPage_SetTool_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.annotator.mojom.UntrustedAnnotatorPage.SetTool_Params',
      packedSize: 16,
      fields: [
        { name: 'tool', packedOffset: 0, packedBitOffset: 0, type: ash.annotator.mojom.AnnotatorToolSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
ash.annotator.annotator.mojom.mojom.UntrustedAnnotatorPagePtr = ash.annotator.annotator.mojom.mojom.UntrustedAnnotatorPageRemote;
ash.annotator.annotator.mojom.mojom.UntrustedAnnotatorPageRequest = ash.annotator.annotator.mojom.mojom.UntrustedAnnotatorPagePendingReceiver;


// Interface: UntrustedAnnotatorPageHandler
ash.annotator.annotator.mojom.mojom.UntrustedAnnotatorPageHandler = {};

ash.annotator.annotator.mojom.mojom.UntrustedAnnotatorPageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.annotator.annotator.mojom.mojom.UntrustedAnnotatorPageHandlerRemote = class {
  static get $interfaceName() {
    return 'ash.annotator.mojom.UntrustedAnnotatorPageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.annotator.annotator.mojom.mojom.UntrustedAnnotatorPageHandlerPendingReceiver,
      handle);
    this.$ = new ash.annotator.annotator.mojom.mojom.UntrustedAnnotatorPageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.annotator.annotator.mojom.mojom.UntrustedAnnotatorPageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onUndoRedoAvailabilityChanged(undo_available, redo_available) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.annotator.annotator.mojom.mojom.UntrustedAnnotatorPageHandler_OnUndoRedoAvailabilityChanged_ParamsSpec,
      null,
      [undo_available, redo_available]);
  }

  onCanvasInitialized(success) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.annotator.annotator.mojom.mojom.UntrustedAnnotatorPageHandler_OnCanvasInitialized_ParamsSpec,
      null,
      [success]);
  }

};

ash.annotator.annotator.mojom.mojom.UntrustedAnnotatorPageHandler.getRemote = function() {
  let remote = new ash.annotator.annotator.mojom.mojom.UntrustedAnnotatorPageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.annotator.mojom.UntrustedAnnotatorPageHandler',
    'context');
  return remote.$;
};

// ParamsSpec for OnUndoRedoAvailabilityChanged
ash.annotator.annotator.mojom.mojom.UntrustedAnnotatorPageHandler_OnUndoRedoAvailabilityChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.annotator.mojom.UntrustedAnnotatorPageHandler.OnUndoRedoAvailabilityChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'undo_available', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'redo_available', packedOffset: 0, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnCanvasInitialized
ash.annotator.annotator.mojom.mojom.UntrustedAnnotatorPageHandler_OnCanvasInitialized_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.annotator.mojom.UntrustedAnnotatorPageHandler.OnCanvasInitialized_Params',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
ash.annotator.annotator.mojom.mojom.UntrustedAnnotatorPageHandlerPtr = ash.annotator.annotator.mojom.mojom.UntrustedAnnotatorPageHandlerRemote;
ash.annotator.annotator.mojom.mojom.UntrustedAnnotatorPageHandlerRequest = ash.annotator.annotator.mojom.mojom.UntrustedAnnotatorPageHandlerPendingReceiver;


// Interface: UntrustedAnnotatorPageHandlerFactory
ash.annotator.annotator.mojom.mojom.UntrustedAnnotatorPageHandlerFactory = {};

ash.annotator.annotator.mojom.mojom.UntrustedAnnotatorPageHandlerFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.annotator.annotator.mojom.mojom.UntrustedAnnotatorPageHandlerFactoryRemote = class {
  static get $interfaceName() {
    return 'ash.annotator.mojom.UntrustedAnnotatorPageHandlerFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.annotator.annotator.mojom.mojom.UntrustedAnnotatorPageHandlerFactoryPendingReceiver,
      handle);
    this.$ = new ash.annotator.annotator.mojom.mojom.UntrustedAnnotatorPageHandlerFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.annotator.annotator.mojom.mojom.UntrustedAnnotatorPageHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  create(handler, annotator) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.annotator.annotator.mojom.mojom.UntrustedAnnotatorPageHandlerFactory_Create_ParamsSpec,
      null,
      [handler, annotator]);
  }

};

ash.annotator.annotator.mojom.mojom.UntrustedAnnotatorPageHandlerFactory.getRemote = function() {
  let remote = new ash.annotator.annotator.mojom.mojom.UntrustedAnnotatorPageHandlerFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.annotator.mojom.UntrustedAnnotatorPageHandlerFactory',
    'context');
  return remote.$;
};

// ParamsSpec for Create
ash.annotator.annotator.mojom.mojom.UntrustedAnnotatorPageHandlerFactory_Create_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.annotator.mojom.UntrustedAnnotatorPageHandlerFactory.Create_Params',
      packedSize: 24,
      fields: [
        { name: 'handler', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(ash.annotator.mojom.UntrustedAnnotatorPageHandlerRemote), nullable: false, minVersion: 0 },
        { name: 'annotator', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(ash.annotator.mojom.UntrustedAnnotatorPageRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
ash.annotator.annotator.mojom.mojom.UntrustedAnnotatorPageHandlerFactoryPtr = ash.annotator.annotator.mojom.mojom.UntrustedAnnotatorPageHandlerFactoryRemote;
ash.annotator.annotator.mojom.mojom.UntrustedAnnotatorPageHandlerFactoryRequest = ash.annotator.annotator.mojom.mojom.UntrustedAnnotatorPageHandlerFactoryPendingReceiver;

