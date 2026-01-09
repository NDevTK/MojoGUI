// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/preloading/anchor_element_interaction_host.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Interface: AnchorElementInteractionHost
blink.mojom.AnchorElementInteractionHost = {};

blink.mojom.AnchorElementInteractionHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.AnchorElementInteractionHostRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.AnchorElementInteractionHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.AnchorElementInteractionHostPendingReceiver,
      handle);
    this.$ = new blink.mojom.AnchorElementInteractionHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.AnchorElementInteractionHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onPointerDown(target) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.AnchorElementInteractionHost_OnPointerDown_ParamsSpec,
      null,
      null,
      [target],
      undefined,
      undefined
    );
  }

  onPointerHoverEager(target, mouse_data) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.AnchorElementInteractionHost_OnPointerHoverEager_ParamsSpec,
      null,
      null,
      [target, mouse_data],
      undefined,
      undefined
    );
  }

  onPointerHoverModerate(target, mouse_data) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.AnchorElementInteractionHost_OnPointerHoverModerate_ParamsSpec,
      null,
      null,
      [target, mouse_data],
      undefined,
      undefined
    );
  }

  onModerateViewportHeuristicTriggered(target) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      blink.mojom.AnchorElementInteractionHost_OnModerateViewportHeuristicTriggered_ParamsSpec,
      null,
      null,
      [target],
      undefined,
      undefined
    );
  }

  onEagerViewportHeuristicTriggered(targets) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      blink.mojom.AnchorElementInteractionHost_OnEagerViewportHeuristicTriggered_ParamsSpec,
      null,
      null,
      [targets],
      undefined,
      undefined
    );
  }

};

blink.mojom.AnchorElementInteractionHost.getRemote = function() {
  let remote = new blink.mojom.AnchorElementInteractionHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.AnchorElementInteractionHost',
    'context');
  return remote.$;
};

// ParamsSpec for OnPointerDown
blink.mojom.AnchorElementInteractionHost_OnPointerDown_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AnchorElementInteractionHost.OnPointerDown_Params',
      packedSize: 16,
      fields: [
        { name: 'target', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnPointerHoverEager
blink.mojom.AnchorElementInteractionHost_OnPointerHoverEager_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AnchorElementInteractionHost.OnPointerHoverEager_Params',
      packedSize: 24,
      fields: [
        { name: 'target', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'mouse_data', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for OnPointerHoverModerate
blink.mojom.AnchorElementInteractionHost_OnPointerHoverModerate_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AnchorElementInteractionHost.OnPointerHoverModerate_Params',
      packedSize: 24,
      fields: [
        { name: 'target', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'mouse_data', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for OnModerateViewportHeuristicTriggered
blink.mojom.AnchorElementInteractionHost_OnModerateViewportHeuristicTriggered_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AnchorElementInteractionHost.OnModerateViewportHeuristicTriggered_Params',
      packedSize: 16,
      fields: [
        { name: 'target', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnEagerViewportHeuristicTriggered
blink.mojom.AnchorElementInteractionHost_OnEagerViewportHeuristicTriggered_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AnchorElementInteractionHost.OnEagerViewportHeuristicTriggered_Params',
      packedSize: 16,
      fields: [
        { name: 'targets', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
blink.mojom.AnchorElementInteractionHostPtr = blink.mojom.AnchorElementInteractionHostRemote;
blink.mojom.AnchorElementInteractionHostRequest = blink.mojom.AnchorElementInteractionHostPendingReceiver;

