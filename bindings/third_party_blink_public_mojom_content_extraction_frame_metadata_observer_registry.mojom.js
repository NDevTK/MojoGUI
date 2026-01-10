// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/content_extraction/frame_metadata_observer_registry.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var blink = blink || {};
var url = url || {};

blink.mojom.PaidContentMetadataObserver = {};
blink.mojom.PaidContentMetadataObserver.$interfaceName = 'blink.mojom.PaidContentMetadataObserver';
blink.mojom.PaidContentMetadataObserver_OnPaidContentMetadataChanged_ParamsSpec = { $: {} };
blink.mojom.MetaTagsObserver = {};
blink.mojom.MetaTagsObserver.$interfaceName = 'blink.mojom.MetaTagsObserver';
blink.mojom.MetaTagsObserver_OnMetaTagsChanged_ParamsSpec = { $: {} };
blink.mojom.FrameMetadataObserverRegistry = {};
blink.mojom.FrameMetadataObserverRegistry.$interfaceName = 'blink.mojom.FrameMetadataObserverRegistry';
blink.mojom.FrameMetadataObserverRegistry_AddPaidContentMetadataObserver_ParamsSpec = { $: {} };
blink.mojom.FrameMetadataObserverRegistry_AddMetaTagsObserver_ParamsSpec = { $: {} };

// Interface: PaidContentMetadataObserver
mojo.internal.Struct(
    blink.mojom.PaidContentMetadataObserver_OnPaidContentMetadataChanged_ParamsSpec, 'blink.mojom.PaidContentMetadataObserver_OnPaidContentMetadataChanged_Params', [
      mojo.internal.StructField('has_paid_content', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

blink.mojom.PaidContentMetadataObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.PaidContentMetadataObserverRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.PaidContentMetadataObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.PaidContentMetadataObserverPendingReceiver,
      handle);
    this.$ = new blink.mojom.PaidContentMetadataObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.PaidContentMetadataObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onPaidContentMetadataChanged(has_paid_content) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.PaidContentMetadataObserver_OnPaidContentMetadataChanged_ParamsSpec,
      null,
      [has_paid_content],
      false);
  }

};

blink.mojom.PaidContentMetadataObserver.getRemote = function() {
  let remote = new blink.mojom.PaidContentMetadataObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.PaidContentMetadataObserver',
    'context');
  return remote.$;
};

blink.mojom.PaidContentMetadataObserverPtr = blink.mojom.PaidContentMetadataObserverRemote;
blink.mojom.PaidContentMetadataObserverRequest = blink.mojom.PaidContentMetadataObserverPendingReceiver;


// Interface: MetaTagsObserver
mojo.internal.Struct(
    blink.mojom.MetaTagsObserver_OnMetaTagsChanged_ParamsSpec, 'blink.mojom.MetaTagsObserver_OnMetaTagsChanged_Params', [
      mojo.internal.StructField('meta_tags', 0, 0, mojo.internal.Array(blink.mojom.MetaTagSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

blink.mojom.MetaTagsObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.MetaTagsObserverRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.MetaTagsObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.MetaTagsObserverPendingReceiver,
      handle);
    this.$ = new blink.mojom.MetaTagsObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.MetaTagsObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onMetaTagsChanged(meta_tags) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.MetaTagsObserver_OnMetaTagsChanged_ParamsSpec,
      null,
      [meta_tags],
      false);
  }

};

blink.mojom.MetaTagsObserver.getRemote = function() {
  let remote = new blink.mojom.MetaTagsObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.MetaTagsObserver',
    'context');
  return remote.$;
};

blink.mojom.MetaTagsObserverPtr = blink.mojom.MetaTagsObserverRemote;
blink.mojom.MetaTagsObserverRequest = blink.mojom.MetaTagsObserverPendingReceiver;


// Interface: FrameMetadataObserverRegistry
mojo.internal.Struct(
    blink.mojom.FrameMetadataObserverRegistry_AddPaidContentMetadataObserver_ParamsSpec, 'blink.mojom.FrameMetadataObserverRegistry_AddPaidContentMetadataObserver_Params', [
      mojo.internal.StructField('observer', 0, 0, mojo.internal.InterfaceProxy(blink.mojom.PaidContentMetadataObserverRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.FrameMetadataObserverRegistry_AddMetaTagsObserver_ParamsSpec, 'blink.mojom.FrameMetadataObserverRegistry_AddMetaTagsObserver_Params', [
      mojo.internal.StructField('names', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('observer', 8, 0, mojo.internal.InterfaceProxy(blink.mojom.MetaTagsObserverRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

blink.mojom.FrameMetadataObserverRegistryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.FrameMetadataObserverRegistryRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.FrameMetadataObserverRegistry';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.FrameMetadataObserverRegistryPendingReceiver,
      handle);
    this.$ = new blink.mojom.FrameMetadataObserverRegistryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.FrameMetadataObserverRegistryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  addPaidContentMetadataObserver(observer) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.FrameMetadataObserverRegistry_AddPaidContentMetadataObserver_ParamsSpec,
      null,
      [observer],
      false);
  }

  addMetaTagsObserver(names, observer) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.FrameMetadataObserverRegistry_AddMetaTagsObserver_ParamsSpec,
      null,
      [names, observer],
      false);
  }

};

blink.mojom.FrameMetadataObserverRegistry.getRemote = function() {
  let remote = new blink.mojom.FrameMetadataObserverRegistryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.FrameMetadataObserverRegistry',
    'context');
  return remote.$;
};

blink.mojom.FrameMetadataObserverRegistryPtr = blink.mojom.FrameMetadataObserverRegistryRemote;
blink.mojom.FrameMetadataObserverRegistryRequest = blink.mojom.FrameMetadataObserverRegistryPendingReceiver;

