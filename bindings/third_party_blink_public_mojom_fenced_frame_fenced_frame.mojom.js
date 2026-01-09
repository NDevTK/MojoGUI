// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/fenced_frame/fenced_frame.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Interface: FencedFrameOwnerHost
blink.mojom.FencedFrameOwnerHost = {};

blink.mojom.FencedFrameOwnerHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.FencedFrameOwnerHostRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.FencedFrameOwnerHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.FencedFrameOwnerHostPendingReceiver,
      handle);
    this.$ = new blink.mojom.FencedFrameOwnerHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.FencedFrameOwnerHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  navigate(url, navigation_start_time, embedder_shared_storage_context) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.FencedFrameOwnerHost_Navigate_ParamsSpec,
      null,
      [url, navigation_start_time, embedder_shared_storage_context]);
  }

  didChangeFramePolicy(frame_policy) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.FencedFrameOwnerHost_DidChangeFramePolicy_ParamsSpec,
      null,
      [frame_policy]);
  }

};

blink.mojom.FencedFrameOwnerHost.getRemote = function() {
  let remote = new blink.mojom.FencedFrameOwnerHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.FencedFrameOwnerHost',
    'context');
  return remote.$;
};

// ParamsSpec for Navigate
blink.mojom.FencedFrameOwnerHost_Navigate_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FencedFrameOwnerHost.Navigate_Params',
      packedSize: 32,
      fields: [
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'navigation_start_time', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'embedder_shared_storage_context', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for DidChangeFramePolicy
blink.mojom.FencedFrameOwnerHost_DidChangeFramePolicy_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FencedFrameOwnerHost.DidChangeFramePolicy_Params',
      packedSize: 16,
      fields: [
        { name: 'frame_policy', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
blink.mojom.FencedFrameOwnerHostPtr = blink.mojom.FencedFrameOwnerHostRemote;
blink.mojom.FencedFrameOwnerHostRequest = blink.mojom.FencedFrameOwnerHostPendingReceiver;

