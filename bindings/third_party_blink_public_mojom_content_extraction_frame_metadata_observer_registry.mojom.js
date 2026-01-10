// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/content_extraction/frame_metadata_observer_registry.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var blink = blink || {};
var url = url || {};


// Interface: PaidContentMetadataObserver
blink.mojom.mojom.PaidContentMetadataObserver = {};

blink.mojom.mojom.PaidContentMetadataObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.mojom.PaidContentMetadataObserverRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.PaidContentMetadataObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.mojom.PaidContentMetadataObserverPendingReceiver,
      handle);
    this.$ = new blink.mojom.mojom.PaidContentMetadataObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.mojom.PaidContentMetadataObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onPaidContentMetadataChanged(has_paid_content) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.mojom.PaidContentMetadataObserver_OnPaidContentMetadataChanged_ParamsSpec,
      null,
      [has_paid_content]);
  }

};

blink.mojom.mojom.PaidContentMetadataObserver.getRemote = function() {
  let remote = new blink.mojom.mojom.PaidContentMetadataObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.PaidContentMetadataObserver',
    'context');
  return remote.$;
};

// ParamsSpec for OnPaidContentMetadataChanged
blink.mojom.mojom.PaidContentMetadataObserver_OnPaidContentMetadataChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.PaidContentMetadataObserver.OnPaidContentMetadataChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'has_paid_content', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
blink.mojom.mojom.PaidContentMetadataObserverPtr = blink.mojom.mojom.PaidContentMetadataObserverRemote;
blink.mojom.mojom.PaidContentMetadataObserverRequest = blink.mojom.mojom.PaidContentMetadataObserverPendingReceiver;


// Interface: MetaTagsObserver
blink.mojom.mojom.MetaTagsObserver = {};

blink.mojom.mojom.MetaTagsObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.mojom.MetaTagsObserverRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.MetaTagsObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.mojom.MetaTagsObserverPendingReceiver,
      handle);
    this.$ = new blink.mojom.mojom.MetaTagsObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.mojom.MetaTagsObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onMetaTagsChanged(meta_tags) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.mojom.MetaTagsObserver_OnMetaTagsChanged_ParamsSpec,
      null,
      [meta_tags]);
  }

};

blink.mojom.mojom.MetaTagsObserver.getRemote = function() {
  let remote = new blink.mojom.mojom.MetaTagsObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.MetaTagsObserver',
    'context');
  return remote.$;
};

// ParamsSpec for OnMetaTagsChanged
blink.mojom.mojom.MetaTagsObserver_OnMetaTagsChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.MetaTagsObserver.OnMetaTagsChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'meta_tags', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(blink.mojom.MetaTagSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
blink.mojom.mojom.MetaTagsObserverPtr = blink.mojom.mojom.MetaTagsObserverRemote;
blink.mojom.mojom.MetaTagsObserverRequest = blink.mojom.mojom.MetaTagsObserverPendingReceiver;


// Interface: FrameMetadataObserverRegistry
blink.mojom.mojom.FrameMetadataObserverRegistry = {};

blink.mojom.mojom.FrameMetadataObserverRegistryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.mojom.FrameMetadataObserverRegistryRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.FrameMetadataObserverRegistry';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.mojom.FrameMetadataObserverRegistryPendingReceiver,
      handle);
    this.$ = new blink.mojom.mojom.FrameMetadataObserverRegistryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.mojom.FrameMetadataObserverRegistryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  addPaidContentMetadataObserver(observer) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.mojom.FrameMetadataObserverRegistry_AddPaidContentMetadataObserver_ParamsSpec,
      null,
      [observer]);
  }

  addMetaTagsObserver(names, observer) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.mojom.FrameMetadataObserverRegistry_AddMetaTagsObserver_ParamsSpec,
      null,
      [names, observer]);
  }

};

blink.mojom.mojom.FrameMetadataObserverRegistry.getRemote = function() {
  let remote = new blink.mojom.mojom.FrameMetadataObserverRegistryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.FrameMetadataObserverRegistry',
    'context');
  return remote.$;
};

// ParamsSpec for AddPaidContentMetadataObserver
blink.mojom.mojom.FrameMetadataObserverRegistry_AddPaidContentMetadataObserver_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FrameMetadataObserverRegistry.AddPaidContentMetadataObserver_Params',
      packedSize: 16,
      fields: [
        { name: 'observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for AddMetaTagsObserver
blink.mojom.mojom.FrameMetadataObserverRegistry_AddMetaTagsObserver_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FrameMetadataObserverRegistry.AddMetaTagsObserver_Params',
      packedSize: 24,
      fields: [
        { name: 'names', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.String, false), nullable: false, minVersion: 0 },
        { name: 'observer', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
blink.mojom.mojom.FrameMetadataObserverRegistryPtr = blink.mojom.mojom.FrameMetadataObserverRegistryRemote;
blink.mojom.mojom.FrameMetadataObserverRegistryRequest = blink.mojom.mojom.FrameMetadataObserverRegistryPendingReceiver;

