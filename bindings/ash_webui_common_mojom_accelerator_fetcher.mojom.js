// Auto-generated MojoJS binding
// Source: chromium_src/ash/webui/common/mojom/accelerator_fetcher.mojom
// Module: ash.common.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.common = ash.common || {};
ash.common.mojom = ash.common.mojom || {};


// Interface: AcceleratorFetcherObserver
ash.common.mojom.AcceleratorFetcherObserver = {};

ash.common.mojom.AcceleratorFetcherObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.common.mojom.AcceleratorFetcherObserverRemote = class {
  static get $interfaceName() {
    return 'ash.common.mojom.AcceleratorFetcherObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.common.mojom.AcceleratorFetcherObserverPendingReceiver,
      handle);
    this.$ = new ash.common.mojom.AcceleratorFetcherObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.common.mojom.AcceleratorFetcherObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onAcceleratorsUpdated(actionId, accelerators) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.common.mojom.AcceleratorFetcherObserver_OnAcceleratorsUpdated_ParamsSpec,
      null,
      [actionId, accelerators]);
  }

};

ash.common.mojom.AcceleratorFetcherObserver.getRemote = function() {
  let remote = new ash.common.mojom.AcceleratorFetcherObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.common.mojom.AcceleratorFetcherObserver',
    'context');
  return remote.$;
};

// ParamsSpec for OnAcceleratorsUpdated
ash.common.mojom.AcceleratorFetcherObserver_OnAcceleratorsUpdated_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.common.mojom.AcceleratorFetcherObserver.OnAcceleratorsUpdated_Params',
      packedSize: 24,
      fields: [
        { name: 'actionId', packedOffset: 8, packedBitOffset: 0, type: ash.mojom.AcceleratorActionSpec, nullable: false },
        { name: 'accelerators', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
ash.common.mojom.AcceleratorFetcherObserverPtr = ash.common.mojom.AcceleratorFetcherObserverRemote;
ash.common.mojom.AcceleratorFetcherObserverRequest = ash.common.mojom.AcceleratorFetcherObserverPendingReceiver;


// Interface: AcceleratorFetcher
ash.common.mojom.AcceleratorFetcher = {};

ash.common.mojom.AcceleratorFetcherPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.common.mojom.AcceleratorFetcherRemote = class {
  static get $interfaceName() {
    return 'ash.common.mojom.AcceleratorFetcher';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.common.mojom.AcceleratorFetcherPendingReceiver,
      handle);
    this.$ = new ash.common.mojom.AcceleratorFetcherRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.common.mojom.AcceleratorFetcherRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  observeAcceleratorChanges(actionIds, observer) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.common.mojom.AcceleratorFetcher_ObserveAcceleratorChanges_ParamsSpec,
      null,
      [actionIds, observer]);
  }

  getMetaKeyToDisplay() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.common.mojom.AcceleratorFetcher_GetMetaKeyToDisplay_ParamsSpec,
      ash.common.mojom.AcceleratorFetcher_GetMetaKeyToDisplay_ResponseParamsSpec,
      []);
  }

};

ash.common.mojom.AcceleratorFetcher.getRemote = function() {
  let remote = new ash.common.mojom.AcceleratorFetcherRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.common.mojom.AcceleratorFetcher',
    'context');
  return remote.$;
};

// ParamsSpec for ObserveAcceleratorChanges
ash.common.mojom.AcceleratorFetcher_ObserveAcceleratorChanges_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.common.mojom.AcceleratorFetcher.ObserveAcceleratorChanges_Params',
      packedSize: 24,
      fields: [
        { name: 'actionIds', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'observer', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetMetaKeyToDisplay
ash.common.mojom.AcceleratorFetcher_GetMetaKeyToDisplay_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.common.mojom.AcceleratorFetcher.GetMetaKeyToDisplay_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

ash.common.mojom.AcceleratorFetcher_GetMetaKeyToDisplay_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.common.mojom.AcceleratorFetcher.GetMetaKeyToDisplay_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'meta_key', packedOffset: 8, packedBitOffset: 0, type: ui.mojom.MetaKeySpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
ash.common.mojom.AcceleratorFetcherPtr = ash.common.mojom.AcceleratorFetcherRemote;
ash.common.mojom.AcceleratorFetcherRequest = ash.common.mojom.AcceleratorFetcherPendingReceiver;

