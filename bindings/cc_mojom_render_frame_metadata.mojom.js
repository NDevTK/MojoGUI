// Auto-generated MojoJS binding
// Source: chromium_src/cc/mojom/render_frame_metadata.mojom
// Module: cc.mojom

'use strict';

// Module namespace
var cc = cc || {};
cc.mojom = cc.mojom || {};


// Enum: RootScrollOffsetUpdateFrequency
cc.mojom.RootScrollOffsetUpdateFrequency = {
  kNone: 0,
  kOnScrollEnd: 1,
  kAllUpdates: 2,
};

// Interface: RenderFrameMetadataObserver
cc.mojom.RenderFrameMetadataObserver = {};

cc.mojom.RenderFrameMetadataObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

cc.mojom.RenderFrameMetadataObserverRemote = class {
  static get $interfaceName() {
    return 'cc.mojom.RenderFrameMetadataObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      cc.mojom.RenderFrameMetadataObserverPendingReceiver,
      handle);
    this.$ = new cc.mojom.RenderFrameMetadataObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

cc.mojom.RenderFrameMetadataObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  updateRootScrollOffsetUpdateFrequency(frequency) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      cc.mojom.RenderFrameMetadataObserver_UpdateRootScrollOffsetUpdateFrequency_ParamsSpec,
      null,
      null,
      [frequency],
      undefined,
      undefined
    );
  }

  reportAllFrameSubmissionsForTesting(enabled) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      cc.mojom.RenderFrameMetadataObserver_ReportAllFrameSubmissionsForTesting_ParamsSpec,
      null,
      null,
      [enabled],
      undefined,
      undefined
    );
  }

};

cc.mojom.RenderFrameMetadataObserver.getRemote = function() {
  let remote = new cc.mojom.RenderFrameMetadataObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'cc.mojom.RenderFrameMetadataObserver',
    'context');
  return remote.$;
};

// ParamsSpec for UpdateRootScrollOffsetUpdateFrequency
cc.mojom.RenderFrameMetadataObserver_UpdateRootScrollOffsetUpdateFrequency_ParamsSpec = {
  $: {
    structSpec: {
      name: 'cc.mojom.RenderFrameMetadataObserver.UpdateRootScrollOffsetUpdateFrequency_Params',
      packedSize: 16,
      fields: [
        { name: 'frequency', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ReportAllFrameSubmissionsForTesting
cc.mojom.RenderFrameMetadataObserver_ReportAllFrameSubmissionsForTesting_ParamsSpec = {
  $: {
    structSpec: {
      name: 'cc.mojom.RenderFrameMetadataObserver.ReportAllFrameSubmissionsForTesting_Params',
      packedSize: 16,
      fields: [
        { name: 'enabled', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
cc.mojom.RenderFrameMetadataObserverPtr = cc.mojom.RenderFrameMetadataObserverRemote;
cc.mojom.RenderFrameMetadataObserverRequest = cc.mojom.RenderFrameMetadataObserverPendingReceiver;


// Interface: RenderFrameMetadataObserverClient
cc.mojom.RenderFrameMetadataObserverClient = {};

cc.mojom.RenderFrameMetadataObserverClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

cc.mojom.RenderFrameMetadataObserverClientRemote = class {
  static get $interfaceName() {
    return 'cc.mojom.RenderFrameMetadataObserverClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      cc.mojom.RenderFrameMetadataObserverClientPendingReceiver,
      handle);
    this.$ = new cc.mojom.RenderFrameMetadataObserverClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

cc.mojom.RenderFrameMetadataObserverClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onRenderFrameMetadataChanged(frame_token, metadata) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      cc.mojom.RenderFrameMetadataObserverClient_OnRenderFrameMetadataChanged_ParamsSpec,
      null,
      null,
      [frame_token, metadata],
      undefined,
      undefined
    );
  }

  onFrameSubmissionForTesting(frame_token) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      cc.mojom.RenderFrameMetadataObserverClient_OnFrameSubmissionForTesting_ParamsSpec,
      null,
      null,
      [frame_token],
      undefined,
      undefined
    );
  }

  onRootScrollOffsetChanged(root_scroll_offset) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      cc.mojom.RenderFrameMetadataObserverClient_OnRootScrollOffsetChanged_ParamsSpec,
      null,
      null,
      [root_scroll_offset],
      undefined,
      undefined
    );
  }

};

cc.mojom.RenderFrameMetadataObserverClient.getRemote = function() {
  let remote = new cc.mojom.RenderFrameMetadataObserverClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'cc.mojom.RenderFrameMetadataObserverClient',
    'context');
  return remote.$;
};

// ParamsSpec for OnRenderFrameMetadataChanged
cc.mojom.RenderFrameMetadataObserverClient_OnRenderFrameMetadataChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'cc.mojom.RenderFrameMetadataObserverClient.OnRenderFrameMetadataChanged_Params',
      packedSize: 24,
      fields: [
        { name: 'frame_token', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'metadata', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for OnFrameSubmissionForTesting
cc.mojom.RenderFrameMetadataObserverClient_OnFrameSubmissionForTesting_ParamsSpec = {
  $: {
    structSpec: {
      name: 'cc.mojom.RenderFrameMetadataObserverClient.OnFrameSubmissionForTesting_Params',
      packedSize: 16,
      fields: [
        { name: 'frame_token', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnRootScrollOffsetChanged
cc.mojom.RenderFrameMetadataObserverClient_OnRootScrollOffsetChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'cc.mojom.RenderFrameMetadataObserverClient.OnRootScrollOffsetChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'root_scroll_offset', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
cc.mojom.RenderFrameMetadataObserverClientPtr = cc.mojom.RenderFrameMetadataObserverClientRemote;
cc.mojom.RenderFrameMetadataObserverClientRequest = cc.mojom.RenderFrameMetadataObserverClientPendingReceiver;

