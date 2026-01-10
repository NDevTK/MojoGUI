// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/accept_ch_frame_observer.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};
var url = url || {};


// Interface: AcceptCHFrameObserver
network.mojom.mojom.AcceptCHFrameObserver = {};

network.mojom.mojom.AcceptCHFrameObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

network.mojom.mojom.AcceptCHFrameObserverRemote = class {
  static get $interfaceName() {
    return 'network.mojom.AcceptCHFrameObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      network.mojom.mojom.AcceptCHFrameObserverPendingReceiver,
      handle);
    this.$ = new network.mojom.mojom.AcceptCHFrameObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

network.mojom.mojom.AcceptCHFrameObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onAcceptCHFrameReceived(origin, accept_ch_frame) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      network.mojom.mojom.AcceptCHFrameObserver_OnAcceptCHFrameReceived_ParamsSpec,
      network.mojom.mojom.AcceptCHFrameObserver_OnAcceptCHFrameReceived_ResponseParamsSpec,
      [origin, accept_ch_frame]);
  }

  clone(listener) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      network.mojom.mojom.AcceptCHFrameObserver_Clone_ParamsSpec,
      null,
      [listener]);
  }

};

network.mojom.mojom.AcceptCHFrameObserver.getRemote = function() {
  let remote = new network.mojom.mojom.AcceptCHFrameObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'network.mojom.AcceptCHFrameObserver',
    'context');
  return remote.$;
};

// ParamsSpec for OnAcceptCHFrameReceived
network.mojom.mojom.AcceptCHFrameObserver_OnAcceptCHFrameReceived_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.AcceptCHFrameObserver.OnAcceptCHFrameReceived_Params',
      packedSize: 24,
      fields: [
        { name: 'origin', packedOffset: 0, packedBitOffset: 0, type: url.mojom.OriginSpec, nullable: false, minVersion: 0 },
        { name: 'accept_ch_frame', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(network.mojom.WebClientHintsTypeSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

network.mojom.mojom.AcceptCHFrameObserver_OnAcceptCHFrameReceived_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.AcceptCHFrameObserver.OnAcceptCHFrameReceived_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for Clone
network.mojom.mojom.AcceptCHFrameObserver_Clone_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.AcceptCHFrameObserver.Clone_Params',
      packedSize: 16,
      fields: [
        { name: 'listener', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
network.mojom.mojom.AcceptCHFrameObserverPtr = network.mojom.mojom.AcceptCHFrameObserverRemote;
network.mojom.mojom.AcceptCHFrameObserverRequest = network.mojom.mojom.AcceptCHFrameObserverPendingReceiver;

