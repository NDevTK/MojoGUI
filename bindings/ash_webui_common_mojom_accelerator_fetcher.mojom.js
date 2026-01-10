// Auto-generated MojoJS binding
// Source: chromium_src/ash/webui/common/mojom/accelerator_fetcher.mojom
// Module: ash.common.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.common = ash.common || {};
ash.common.mojom = ash.common.mojom || {};
var ash = ash || {};
var ash = ash || {};
var ui = ui || {};
var ash = ash || {};

ash.common.mojom.AcceleratorFetcherObserver = {};
ash.common.mojom.AcceleratorFetcherObserver.$interfaceName = 'ash.common.mojom.AcceleratorFetcherObserver';
ash.common.mojom.AcceleratorFetcherObserver_OnAcceleratorsUpdated_ParamsSpec = { $: {} };
ash.common.mojom.AcceleratorFetcher = {};
ash.common.mojom.AcceleratorFetcher.$interfaceName = 'ash.common.mojom.AcceleratorFetcher';
ash.common.mojom.AcceleratorFetcher_ObserveAcceleratorChanges_ParamsSpec = { $: {} };
ash.common.mojom.AcceleratorFetcher_GetMetaKeyToDisplay_ParamsSpec = { $: {} };
ash.common.mojom.AcceleratorFetcher_GetMetaKeyToDisplay_ResponseParamsSpec = { $: {} };

// Interface: AcceleratorFetcherObserver
mojo.internal.Struct(
    ash.common.mojom.AcceleratorFetcherObserver_OnAcceleratorsUpdated_ParamsSpec, 'ash.common.mojom.AcceleratorFetcherObserver_OnAcceleratorsUpdated_Params', [
      mojo.internal.StructField('actionId', 8, 0, ash.mojom.AcceleratorActionSpec, null, false, 0, undefined),
      mojo.internal.StructField('accelerators', 0, 0, mojo.internal.Array(ash.mojom.StandardAcceleratorPropertiesSpec, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

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

ash.common.mojom.AcceleratorFetcherObserverPtr = ash.common.mojom.AcceleratorFetcherObserverRemote;
ash.common.mojom.AcceleratorFetcherObserverRequest = ash.common.mojom.AcceleratorFetcherObserverPendingReceiver;


// Interface: AcceleratorFetcher
mojo.internal.Struct(
    ash.common.mojom.AcceleratorFetcher_ObserveAcceleratorChanges_ParamsSpec, 'ash.common.mojom.AcceleratorFetcher_ObserveAcceleratorChanges_Params', [
      mojo.internal.StructField('actionIds', 0, 0, mojo.internal.Array(ash.mojom.AcceleratorActionSpec, false), null, false, 0, undefined),
      mojo.internal.StructField('observer', 8, 0, mojo.internal.InterfaceProxy(ash.common.mojom.AcceleratorFetcherObserverRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    ash.common.mojom.AcceleratorFetcher_GetMetaKeyToDisplay_ParamsSpec, 'ash.common.mojom.AcceleratorFetcher_GetMetaKeyToDisplay_Params', [
    ],
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    ash.common.mojom.AcceleratorFetcher_GetMetaKeyToDisplay_ResponseParamsSpec, 'ash.common.mojom.AcceleratorFetcher_GetMetaKeyToDisplay_ResponseParams', [
      mojo.internal.StructField('meta_key', 0, 0, ui.mojom.MetaKeySpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

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

ash.common.mojom.AcceleratorFetcherPtr = ash.common.mojom.AcceleratorFetcherRemote;
ash.common.mojom.AcceleratorFetcherRequest = ash.common.mojom.AcceleratorFetcherPendingReceiver;

