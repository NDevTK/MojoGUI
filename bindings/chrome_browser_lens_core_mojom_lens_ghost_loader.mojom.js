// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/lens/core/mojom/lens_ghost_loader.mojom
// Module: lens.mojom

'use strict';

// Module namespace
var lens = lens || {};
lens.mojom = lens.mojom || {};


// Interface: LensGhostLoaderPageHandlerFactory
lens.mojom.LensGhostLoaderPageHandlerFactory = {};

lens.mojom.LensGhostLoaderPageHandlerFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

lens.mojom.LensGhostLoaderPageHandlerFactoryRemote = class {
  static get $interfaceName() {
    return 'lens.mojom.LensGhostLoaderPageHandlerFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      lens.mojom.LensGhostLoaderPageHandlerFactoryPendingReceiver,
      handle);
    this.$ = new lens.mojom.LensGhostLoaderPageHandlerFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

lens.mojom.LensGhostLoaderPageHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createGhostLoaderPage(page) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      lens.mojom.LensGhostLoaderPageHandlerFactory_CreateGhostLoaderPage_ParamsSpec,
      null,
      [page]);
  }

};

lens.mojom.LensGhostLoaderPageHandlerFactory.getRemote = function() {
  let remote = new lens.mojom.LensGhostLoaderPageHandlerFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'lens.mojom.LensGhostLoaderPageHandlerFactory',
    'context');
  return remote.$;
};

// ParamsSpec for CreateGhostLoaderPage
lens.mojom.LensGhostLoaderPageHandlerFactory_CreateGhostLoaderPage_ParamsSpec = {
  $: {
    structSpec: {
      name: 'lens.mojom.LensGhostLoaderPageHandlerFactory.CreateGhostLoaderPage_Params',
      packedSize: 16,
      fields: [
        { name: 'page', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
lens.mojom.LensGhostLoaderPageHandlerFactoryPtr = lens.mojom.LensGhostLoaderPageHandlerFactoryRemote;
lens.mojom.LensGhostLoaderPageHandlerFactoryRequest = lens.mojom.LensGhostLoaderPageHandlerFactoryPendingReceiver;


// Interface: LensGhostLoaderPage
lens.mojom.LensGhostLoaderPage = {};

lens.mojom.LensGhostLoaderPagePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

lens.mojom.LensGhostLoaderPageRemote = class {
  static get $interfaceName() {
    return 'lens.mojom.LensGhostLoaderPage';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      lens.mojom.LensGhostLoaderPagePendingReceiver,
      handle);
    this.$ = new lens.mojom.LensGhostLoaderPageRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

lens.mojom.LensGhostLoaderPageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  showErrorState() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      lens.mojom.LensGhostLoaderPage_ShowErrorState_ParamsSpec,
      null,
      []);
  }

};

lens.mojom.LensGhostLoaderPage.getRemote = function() {
  let remote = new lens.mojom.LensGhostLoaderPageRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'lens.mojom.LensGhostLoaderPage',
    'context');
  return remote.$;
};

// ParamsSpec for ShowErrorState
lens.mojom.LensGhostLoaderPage_ShowErrorState_ParamsSpec = {
  $: {
    structSpec: {
      name: 'lens.mojom.LensGhostLoaderPage.ShowErrorState_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
lens.mojom.LensGhostLoaderPagePtr = lens.mojom.LensGhostLoaderPageRemote;
lens.mojom.LensGhostLoaderPageRequest = lens.mojom.LensGhostLoaderPagePendingReceiver;

