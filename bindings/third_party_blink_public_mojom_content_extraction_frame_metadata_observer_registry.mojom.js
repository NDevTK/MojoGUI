// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/content_extraction/frame_metadata_observer_registry.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Interface: PaidContentMetadataObserver
blink.mojom.PaidContentMetadataObserver = {};

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
      [has_paid_content]);
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

// ParamsSpec for OnPaidContentMetadataChanged
blink.mojom.PaidContentMetadataObserver_OnPaidContentMetadataChanged_ParamsSpec = {
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
blink.mojom.PaidContentMetadataObserverPtr = blink.mojom.PaidContentMetadataObserverRemote;
blink.mojom.PaidContentMetadataObserverRequest = blink.mojom.PaidContentMetadataObserverPendingReceiver;


// Interface: MetaTagsObserver
blink.mojom.MetaTagsObserver = {};

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
      [meta_tags]);
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

// ParamsSpec for OnMetaTagsChanged
blink.mojom.MetaTagsObserver_OnMetaTagsChanged_ParamsSpec = {
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
blink.mojom.MetaTagsObserverPtr = blink.mojom.MetaTagsObserverRemote;
blink.mojom.MetaTagsObserverRequest = blink.mojom.MetaTagsObserverPendingReceiver;


// Interface: FrameMetadataObserverRegistry
blink.mojom.FrameMetadataObserverRegistry = {};

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
      [observer]);
  }

  addMetaTagsObserver(names, observer) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.FrameMetadataObserverRegistry_AddMetaTagsObserver_ParamsSpec,
      null,
      [names, observer]);
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

// ParamsSpec for AddPaidContentMetadataObserver
blink.mojom.FrameMetadataObserverRegistry_AddPaidContentMetadataObserver_ParamsSpec = {
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
blink.mojom.FrameMetadataObserverRegistry_AddMetaTagsObserver_ParamsSpec = {
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
blink.mojom.FrameMetadataObserverRegistryPtr = blink.mojom.FrameMetadataObserverRegistryRemote;
blink.mojom.FrameMetadataObserverRegistryRequest = blink.mojom.FrameMetadataObserverRegistryPendingReceiver;

