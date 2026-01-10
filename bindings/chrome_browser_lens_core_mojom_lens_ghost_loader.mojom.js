// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/lens/core/mojom/lens_ghost_loader.mojom
// Module: lens.mojom

'use strict';

// Module namespace
var lens = lens || {};
lens.mojom = lens.mojom || {};

lens.mojom.LensGhostLoaderPageHandlerFactory = {};
lens.mojom.LensGhostLoaderPageHandlerFactory.$interfaceName = 'lens.mojom.LensGhostLoaderPageHandlerFactory';
lens.mojom.LensGhostLoaderPageHandlerFactory_CreateGhostLoaderPage_ParamsSpec = { $: {} };
lens.mojom.LensGhostLoaderPage = {};
lens.mojom.LensGhostLoaderPage.$interfaceName = 'lens.mojom.LensGhostLoaderPage';
lens.mojom.LensGhostLoaderPage_ShowErrorState_ParamsSpec = { $: {} };

// Interface: LensGhostLoaderPageHandlerFactory
mojo.internal.Struct(
    lens.mojom.LensGhostLoaderPageHandlerFactory_CreateGhostLoaderPage_ParamsSpec, 'lens.mojom.LensGhostLoaderPageHandlerFactory_CreateGhostLoaderPage_Params', [
      mojo.internal.StructField('page', 0, 0, mojo.internal.InterfaceProxy(lens.mojom.LensGhostLoaderPageRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

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
      [page],
      false);
  }

};

lens.mojom.LensGhostLoaderPageHandlerFactory.getRemote = function() {
  let remote = new lens.mojom.LensGhostLoaderPageHandlerFactoryRemote();
  remote.bindNewPipeAndPassReceiver();
  remote.proxy.endpoint_.bindInBrowser(
    'lens.mojom.LensGhostLoaderPageHandlerFactory',
    'context');
  return remote.$;
};

lens.mojom.LensGhostLoaderPageHandlerFactoryPtr = lens.mojom.LensGhostLoaderPageHandlerFactoryRemote;
lens.mojom.LensGhostLoaderPageHandlerFactoryRequest = lens.mojom.LensGhostLoaderPageHandlerFactoryPendingReceiver;


// Interface: LensGhostLoaderPage
mojo.internal.Struct(
    lens.mojom.LensGhostLoaderPage_ShowErrorState_ParamsSpec, 'lens.mojom.LensGhostLoaderPage_ShowErrorState_Params', [
    ],
    [[0, 8]]);

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
      [],
      false);
  }

};

lens.mojom.LensGhostLoaderPage.getRemote = function() {
  let remote = new lens.mojom.LensGhostLoaderPageRemote();
  remote.bindNewPipeAndPassReceiver();
  remote.proxy.endpoint_.bindInBrowser(
    'lens.mojom.LensGhostLoaderPage',
    'context');
  return remote.$;
};

lens.mojom.LensGhostLoaderPagePtr = lens.mojom.LensGhostLoaderPageRemote;
lens.mojom.LensGhostLoaderPageRequest = lens.mojom.LensGhostLoaderPagePendingReceiver;

