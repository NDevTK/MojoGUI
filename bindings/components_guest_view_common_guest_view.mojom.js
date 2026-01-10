// Auto-generated MojoJS binding
// Source: chromium_src/components/guest_view/common/guest_view.mojom
// Module: guest_view.mojom

'use strict';

// Module namespace
var guest_view = guest_view || {};
guest_view.mojom = guest_view.mojom || {};


// Interface: ViewHandle
guest_view.mojom.mojom.ViewHandle = {};

guest_view.mojom.mojom.ViewHandlePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

guest_view.mojom.mojom.ViewHandleRemote = class {
  static get $interfaceName() {
    return 'guest_view.mojom.ViewHandle';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      guest_view.mojom.mojom.ViewHandlePendingReceiver,
      handle);
    this.$ = new guest_view.mojom.mojom.ViewHandleRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

guest_view.mojom.mojom.ViewHandleRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

guest_view.mojom.mojom.ViewHandle.getRemote = function() {
  let remote = new guest_view.mojom.mojom.ViewHandleRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'guest_view.mojom.ViewHandle',
    'context');
  return remote.$;
};

// Legacy compatibility
guest_view.mojom.mojom.ViewHandlePtr = guest_view.mojom.mojom.ViewHandleRemote;
guest_view.mojom.mojom.ViewHandleRequest = guest_view.mojom.mojom.ViewHandlePendingReceiver;


// Interface: GuestViewHost
guest_view.mojom.mojom.GuestViewHost = {};

guest_view.mojom.mojom.GuestViewHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

guest_view.mojom.mojom.GuestViewHostRemote = class {
  static get $interfaceName() {
    return 'guest_view.mojom.GuestViewHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      guest_view.mojom.mojom.GuestViewHostPendingReceiver,
      handle);
    this.$ = new guest_view.mojom.mojom.GuestViewHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

guest_view.mojom.mojom.GuestViewHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  attachToEmbedderFrame(element_instance_id, guest_instance_id, params) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      guest_view.mojom.mojom.GuestViewHost_AttachToEmbedderFrame_ParamsSpec,
      null,
      [element_instance_id, guest_instance_id, params]);
  }

  viewCreated(view_instance_id, view_type, keep_alive_handle_receiver) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      guest_view.mojom.mojom.GuestViewHost_ViewCreated_ParamsSpec,
      null,
      [view_instance_id, view_type, keep_alive_handle_receiver]);
  }

};

guest_view.mojom.mojom.GuestViewHost.getRemote = function() {
  let remote = new guest_view.mojom.mojom.GuestViewHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'guest_view.mojom.GuestViewHost',
    'context');
  return remote.$;
};

// ParamsSpec for AttachToEmbedderFrame
guest_view.mojom.mojom.GuestViewHost_AttachToEmbedderFrame_ParamsSpec = {
  $: {
    structSpec: {
      name: 'guest_view.mojom.GuestViewHost.AttachToEmbedderFrame_Params',
      packedSize: 24,
      fields: [
        { name: 'element_instance_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'guest_instance_id', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'params', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.DictionaryValueSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for ViewCreated
guest_view.mojom.mojom.GuestViewHost_ViewCreated_ParamsSpec = {
  $: {
    structSpec: {
      name: 'guest_view.mojom.GuestViewHost.ViewCreated_Params',
      packedSize: 32,
      fields: [
        { name: 'view_instance_id', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'view_type', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'keep_alive_handle_receiver', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(guest_view.mojom.ViewHandleRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Legacy compatibility
guest_view.mojom.mojom.GuestViewHostPtr = guest_view.mojom.mojom.GuestViewHostRemote;
guest_view.mojom.mojom.GuestViewHostRequest = guest_view.mojom.mojom.GuestViewHostPendingReceiver;

