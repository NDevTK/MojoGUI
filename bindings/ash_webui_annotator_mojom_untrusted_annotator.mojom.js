// Auto-generated MojoJS binding
// Source: chromium_src/ash/webui/annotator/mojom/untrusted_annotator.mojom
// Module: ash.annotator.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.annotator = ash.annotator || {};
ash.annotator.mojom = ash.annotator.mojom || {};
var ash = ash || {};

ash.annotator.mojom.UntrustedAnnotatorPage = {};
ash.annotator.mojom.UntrustedAnnotatorPage.$interfaceName = 'ash.annotator.mojom.UntrustedAnnotatorPage';
ash.annotator.mojom.UntrustedAnnotatorPage_Clear_ParamsSpec = { $: {} };
ash.annotator.mojom.UntrustedAnnotatorPage_Undo_ParamsSpec = { $: {} };
ash.annotator.mojom.UntrustedAnnotatorPage_Redo_ParamsSpec = { $: {} };
ash.annotator.mojom.UntrustedAnnotatorPage_SetTool_ParamsSpec = { $: {} };
ash.annotator.mojom.UntrustedAnnotatorPageHandler = {};
ash.annotator.mojom.UntrustedAnnotatorPageHandler.$interfaceName = 'ash.annotator.mojom.UntrustedAnnotatorPageHandler';
ash.annotator.mojom.UntrustedAnnotatorPageHandler_OnUndoRedoAvailabilityChanged_ParamsSpec = { $: {} };
ash.annotator.mojom.UntrustedAnnotatorPageHandler_OnCanvasInitialized_ParamsSpec = { $: {} };
ash.annotator.mojom.UntrustedAnnotatorPageHandlerFactory = {};
ash.annotator.mojom.UntrustedAnnotatorPageHandlerFactory.$interfaceName = 'ash.annotator.mojom.UntrustedAnnotatorPageHandlerFactory';
ash.annotator.mojom.UntrustedAnnotatorPageHandlerFactory_Create_ParamsSpec = { $: {} };

// Interface: UntrustedAnnotatorPage
mojo.internal.Struct(
    ash.annotator.mojom.UntrustedAnnotatorPage_Clear_ParamsSpec, 'ash.annotator.mojom.UntrustedAnnotatorPage_Clear_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.annotator.mojom.UntrustedAnnotatorPage_Undo_ParamsSpec, 'ash.annotator.mojom.UntrustedAnnotatorPage_Undo_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.annotator.mojom.UntrustedAnnotatorPage_Redo_ParamsSpec, 'ash.annotator.mojom.UntrustedAnnotatorPage_Redo_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.annotator.mojom.UntrustedAnnotatorPage_SetTool_ParamsSpec, 'ash.annotator.mojom.UntrustedAnnotatorPage_SetTool_Params', [
      mojo.internal.StructField('tool', 0, 0, ash.annotator.mojom.AnnotatorToolSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

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
      [],
      false);
  }

  undo() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.annotator.mojom.UntrustedAnnotatorPage_Undo_ParamsSpec,
      null,
      [],
      false);
  }

  redo() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.annotator.mojom.UntrustedAnnotatorPage_Redo_ParamsSpec,
      null,
      [],
      false);
  }

  setTool(tool) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      ash.annotator.mojom.UntrustedAnnotatorPage_SetTool_ParamsSpec,
      null,
      [tool],
      false);
  }

};

ash.annotator.mojom.UntrustedAnnotatorPage.getRemote = function() {
  let remote = new ash.annotator.mojom.UntrustedAnnotatorPageRemote();
  remote.bindNewPipeAndPassReceiver();
  remote.proxy.endpoint_.bindInBrowser(
    'ash.annotator.mojom.UntrustedAnnotatorPage',
    'context');
  return remote.$;
};

ash.annotator.mojom.UntrustedAnnotatorPagePtr = ash.annotator.mojom.UntrustedAnnotatorPageRemote;
ash.annotator.mojom.UntrustedAnnotatorPageRequest = ash.annotator.mojom.UntrustedAnnotatorPagePendingReceiver;


// Interface: UntrustedAnnotatorPageHandler
mojo.internal.Struct(
    ash.annotator.mojom.UntrustedAnnotatorPageHandler_OnUndoRedoAvailabilityChanged_ParamsSpec, 'ash.annotator.mojom.UntrustedAnnotatorPageHandler_OnUndoRedoAvailabilityChanged_Params', [
      mojo.internal.StructField('undo_available', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('redo_available', 0, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.annotator.mojom.UntrustedAnnotatorPageHandler_OnCanvasInitialized_ParamsSpec, 'ash.annotator.mojom.UntrustedAnnotatorPageHandler_OnCanvasInitialized_Params', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

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
      [undo_available, redo_available],
      false);
  }

  onCanvasInitialized(success) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.annotator.mojom.UntrustedAnnotatorPageHandler_OnCanvasInitialized_ParamsSpec,
      null,
      [success],
      false);
  }

};

ash.annotator.mojom.UntrustedAnnotatorPageHandler.getRemote = function() {
  let remote = new ash.annotator.mojom.UntrustedAnnotatorPageHandlerRemote();
  remote.bindNewPipeAndPassReceiver();
  remote.proxy.endpoint_.bindInBrowser(
    'ash.annotator.mojom.UntrustedAnnotatorPageHandler',
    'context');
  return remote.$;
};

ash.annotator.mojom.UntrustedAnnotatorPageHandlerPtr = ash.annotator.mojom.UntrustedAnnotatorPageHandlerRemote;
ash.annotator.mojom.UntrustedAnnotatorPageHandlerRequest = ash.annotator.mojom.UntrustedAnnotatorPageHandlerPendingReceiver;


// Interface: UntrustedAnnotatorPageHandlerFactory
mojo.internal.Struct(
    ash.annotator.mojom.UntrustedAnnotatorPageHandlerFactory_Create_ParamsSpec, 'ash.annotator.mojom.UntrustedAnnotatorPageHandlerFactory_Create_Params', [
      mojo.internal.StructField('handler', 0, 0, mojo.internal.InterfaceRequest(ash.annotator.mojom.UntrustedAnnotatorPageHandlerRemote), null, false, 0, undefined),
      mojo.internal.StructField('annotator', 8, 0, mojo.internal.InterfaceProxy(ash.annotator.mojom.UntrustedAnnotatorPageRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

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
      [handler, annotator],
      false);
  }

};

ash.annotator.mojom.UntrustedAnnotatorPageHandlerFactory.getRemote = function() {
  let remote = new ash.annotator.mojom.UntrustedAnnotatorPageHandlerFactoryRemote();
  remote.bindNewPipeAndPassReceiver();
  remote.proxy.endpoint_.bindInBrowser(
    'ash.annotator.mojom.UntrustedAnnotatorPageHandlerFactory',
    'context');
  return remote.$;
};

ash.annotator.mojom.UntrustedAnnotatorPageHandlerFactoryPtr = ash.annotator.mojom.UntrustedAnnotatorPageHandlerFactoryRemote;
ash.annotator.mojom.UntrustedAnnotatorPageHandlerFactoryRequest = ash.annotator.mojom.UntrustedAnnotatorPageHandlerFactoryPendingReceiver;

