// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/accept_ch_frame_observer.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};


// Interface: AcceptCHFrameObserver
network.mojom.AcceptCHFrameObserver = {};

network.mojom.AcceptCHFrameObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

network.mojom.AcceptCHFrameObserverRemote = class {
  static get $interfaceName() {
    return 'network.mojom.AcceptCHFrameObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      network.mojom.AcceptCHFrameObserverPendingReceiver,
      handle);
    this.$ = new network.mojom.AcceptCHFrameObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

network.mojom.AcceptCHFrameObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onAcceptCHFrameReceived(origin, accept_ch_frame) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      network.mojom.AcceptCHFrameObserver_OnAcceptCHFrameReceived_ParamsSpec,
      network.mojom.AcceptCHFrameObserver_OnAcceptCHFrameReceived_ResponseParamsSpec,
      network.mojom.AcceptCHFrameObserver_OnAcceptCHFrameReceived_ResponseParamsSpec,
      [origin, accept_ch_frame],
      undefined,
      undefined
    );
  }

  clone(listener) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      network.mojom.AcceptCHFrameObserver_Clone_ParamsSpec,
      null,
      null,
      [listener],
      undefined,
      undefined
    );
  }

};

network.mojom.AcceptCHFrameObserver.getRemote = function() {
  let remote = new network.mojom.AcceptCHFrameObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'network.mojom.AcceptCHFrameObserver',
    'context');
  return remote.$;
};

// ParamsSpec for OnAcceptCHFrameReceived
network.mojom.AcceptCHFrameObserver_OnAcceptCHFrameReceived_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.AcceptCHFrameObserver.OnAcceptCHFrameReceived_Params',
      packedSize: 24,
      fields: [
        { name: 'origin', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'accept_ch_frame', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

network.mojom.AcceptCHFrameObserver_OnAcceptCHFrameReceived_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.AcceptCHFrameObserver.OnAcceptCHFrameReceived_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for Clone
network.mojom.AcceptCHFrameObserver_Clone_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.AcceptCHFrameObserver.Clone_Params',
      packedSize: 16,
      fields: [
        { name: 'listener', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
network.mojom.AcceptCHFrameObserverPtr = network.mojom.AcceptCHFrameObserverRemote;
network.mojom.AcceptCHFrameObserverRequest = network.mojom.AcceptCHFrameObserverPendingReceiver;

