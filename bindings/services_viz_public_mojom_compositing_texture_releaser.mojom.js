// Auto-generated MojoJS binding
// Source: chromium_src/services/viz/public/mojom/compositing/texture_releaser.mojom
// Module: viz.mojom

'use strict';

// Module namespace
var viz = viz || {};
viz.mojom = viz.mojom || {};


// Interface: TextureReleaser
viz.mojom.TextureReleaser = {};

viz.mojom.TextureReleaser_Release_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.TextureReleaser_Release_Params',
      packedSize: 24,
      fields: [
        { name: 'sync_token', packedOffset: 0, packedBitOffset: 0, type: gpu.mojom.SyncTokenSpec, nullable: false, minVersion: 0 },
        { name: 'is_lost', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

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
      [sync_token, is_lost]);
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

// ParamsSpec for Release
viz.mojom.TextureReleaser_Release_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.TextureReleaser.Release_Params',
      packedSize: 24,
      fields: [
        { name: 'sync_token', packedOffset: 0, packedBitOffset: 0, type: gpu.mojom.SyncTokenSpec, nullable: false, minVersion: 0 },
        { name: 'is_lost', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
viz.mojom.TextureReleaserPtr = viz.mojom.TextureReleaserRemote;
viz.mojom.TextureReleaserRequest = viz.mojom.TextureReleaserPendingReceiver;

