// Auto-generated MojoJS binding
// Source: chromium_src/services/viz/public/mojom/compositing/texture_releaser.mojom
// Module: viz.mojom

'use strict';

// Module namespace
var viz = viz || {};
viz.mojom = viz.mojom || {};

viz.mojom.TextureReleaser = {};
viz.mojom.TextureReleaser.$interfaceName = 'viz.mojom.TextureReleaser';
viz.mojom.TextureReleaser_Release_ParamsSpec = { $: {} };

// Interface: TextureReleaser
mojo.internal.Struct(
    viz.mojom.TextureReleaser_Release_ParamsSpec, 'viz.mojom.TextureReleaser_Release_Params', [
      mojo.internal.StructField('sync_token', 0, 0, gpu.mojom.SyncTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('is_lost', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

viz.mojom.TextureReleaserPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

viz.mojom.TextureReleaserRemote = class {
  static get $interfaceName() {
    return 'viz.mojom.TextureReleaser';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      viz.mojom.TextureReleaserPendingReceiver,
      handle);
    this.$ = new viz.mojom.TextureReleaserRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

viz.mojom.TextureReleaserRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  release(sync_token, is_lost) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      viz.mojom.TextureReleaser_Release_ParamsSpec,
      null,
      [sync_token, is_lost],
      false);
  }

};

viz.mojom.TextureReleaser.getRemote = function() {
  let remote = new viz.mojom.TextureReleaserRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'viz.mojom.TextureReleaser',
    'context');
  return remote.$;
};

viz.mojom.TextureReleaserPtr = viz.mojom.TextureReleaserRemote;
viz.mojom.TextureReleaserRequest = viz.mojom.TextureReleaserPendingReceiver;

