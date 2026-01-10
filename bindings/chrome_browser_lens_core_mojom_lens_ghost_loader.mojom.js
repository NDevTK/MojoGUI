// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/lens/core/mojom/lens_ghost_loader.mojom
// Module: lens.mojom

'use strict';

// Module namespace
var lens = lens || {};
lens.mojom = lens.mojom || {};


// Interface: LensGhostLoaderPageHandlerFactory
lens.mojom.mojom.LensGhostLoaderPageHandlerFactory = {};

lens.mojom.mojom.LensGhostLoaderPageHandlerFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

lens.mojom.mojom.LensGhostLoaderPageHandlerFactoryRemote = class {
  static get $interfaceName() {
    return 'lens.mojom.LensGhostLoaderPageHandlerFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      lens.mojom.mojom.LensGhostLoaderPageHandlerFactoryPendingReceiver,
      handle);
    this.$ = new lens.mojom.mojom.LensGhostLoaderPageHandlerFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

lens.mojom.mojom.LensGhostLoaderPageHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createGhostLoaderPage(page) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      lens.mojom.mojom.LensGhostLoaderPageHandlerFactory_CreateGhostLoaderPage_ParamsSpec,
      null,
      [page]);
  }

};

lens.mojom.mojom.LensGhostLoaderPageHandlerFactory.getRemote = function() {
  let remote = new lens.mojom.mojom.LensGhostLoaderPageHandlerFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'lens.mojom.LensGhostLoaderPageHandlerFactory',
    'context');
  return remote.$;
};

// ParamsSpec for CreateGhostLoaderPage
lens.mojom.mojom.LensGhostLoaderPageHandlerFactory_CreateGhostLoaderPage_ParamsSpec = {
  $: {
    structSpec: {
      name: 'lens.mojom.LensGhostLoaderPageHandlerFactory.CreateGhostLoaderPage_Params',
      packedSize: 16,
      fields: [
        { name: 'page', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(lens.mojom.LensGhostLoaderPageRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
lens.mojom.mojom.LensGhostLoaderPageHandlerFactoryPtr = lens.mojom.mojom.LensGhostLoaderPageHandlerFactoryRemote;
lens.mojom.mojom.LensGhostLoaderPageHandlerFactoryRequest = lens.mojom.mojom.LensGhostLoaderPageHandlerFactoryPendingReceiver;


// Interface: LensGhostLoaderPage
lens.mojom.mojom.LensGhostLoaderPage = {};

lens.mojom.mojom.LensGhostLoaderPagePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

lens.mojom.mojom.LensGhostLoaderPageRemote = class {
  static get $interfaceName() {
    return 'lens.mojom.LensGhostLoaderPage';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      lens.mojom.mojom.LensGhostLoaderPagePendingReceiver,
      handle);
    this.$ = new lens.mojom.mojom.LensGhostLoaderPageRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

lens.mojom.mojom.LensGhostLoaderPageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  showErrorState() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      lens.mojom.mojom.LensGhostLoaderPage_ShowErrorState_ParamsSpec,
      null,
      []);
  }

};

lens.mojom.mojom.LensGhostLoaderPage.getRemote = function() {
  let remote = new lens.mojom.mojom.LensGhostLoaderPageRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'lens.mojom.LensGhostLoaderPage',
    'context');
  return remote.$;
};

// ParamsSpec for ShowErrorState
lens.mojom.mojom.LensGhostLoaderPage_ShowErrorState_ParamsSpec = {
  $: {
    structSpec: {
      name: 'lens.mojom.LensGhostLoaderPage.ShowErrorState_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Legacy compatibility
lens.mojom.mojom.LensGhostLoaderPagePtr = lens.mojom.mojom.LensGhostLoaderPageRemote;
lens.mojom.mojom.LensGhostLoaderPageRequest = lens.mojom.mojom.LensGhostLoaderPagePendingReceiver;

