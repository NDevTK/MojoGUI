// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/nearby_share.mojom
// Module: arc.mojom

'use strict';

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};


// Struct: FileInfo
arc.mojom.FileInfoSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.FileInfo',
      packedSize: 40,
      fields: [
        { name: 'content_uri', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'mime_type', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'name', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'size', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Struct: ShareIntentInfo
arc.mojom.ShareIntentInfoSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.ShareIntentInfo',
      packedSize: 40,
      fields: [
        { name: 'title', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'mime_type', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'extras', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Map(mojo.internal.String, mojo.internal.String, false), nullable: true, minVersion: 0 },
        { name: 'files', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Array(arc.mojom.FileInfoSpec, false), nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Interface: NearbyShareSessionHost
arc.mojom.NearbyShareSessionHost = {};

arc.mojom.NearbyShareSessionHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.NearbyShareSessionHostRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.NearbyShareSessionHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.NearbyShareSessionHostPendingReceiver,
      handle);
    this.$ = new arc.mojom.NearbyShareSessionHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.NearbyShareSessionHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

arc.mojom.NearbyShareSessionHost.getRemote = function() {
  let remote = new arc.mojom.NearbyShareSessionHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.NearbyShareSessionHost',
    'context');
  return remote.$;
};

// Legacy compatibility
arc.mojom.NearbyShareSessionHostPtr = arc.mojom.NearbyShareSessionHostRemote;
arc.mojom.NearbyShareSessionHostRequest = arc.mojom.NearbyShareSessionHostPendingReceiver;


// Interface: NearbyShareSessionInstance
arc.mojom.NearbyShareSessionInstance = {};

arc.mojom.NearbyShareSessionInstancePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.NearbyShareSessionInstanceRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.NearbyShareSessionInstance';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.NearbyShareSessionInstancePendingReceiver,
      handle);
    this.$ = new arc.mojom.NearbyShareSessionInstanceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.NearbyShareSessionInstanceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onNearbyShareViewClosed() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      arc.mojom.NearbyShareSessionInstance_OnNearbyShareViewClosed_ParamsSpec,
      null,
      []);
  }

};

arc.mojom.NearbyShareSessionInstance.getRemote = function() {
  let remote = new arc.mojom.NearbyShareSessionInstanceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.NearbyShareSessionInstance',
    'context');
  return remote.$;
};

// ParamsSpec for OnNearbyShareViewClosed
arc.mojom.NearbyShareSessionInstance_OnNearbyShareViewClosed_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.NearbyShareSessionInstance.OnNearbyShareViewClosed_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Legacy compatibility
arc.mojom.NearbyShareSessionInstancePtr = arc.mojom.NearbyShareSessionInstanceRemote;
arc.mojom.NearbyShareSessionInstanceRequest = arc.mojom.NearbyShareSessionInstancePendingReceiver;


// Interface: NearbyShareHost
arc.mojom.NearbyShareHost = {};

arc.mojom.NearbyShareHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.NearbyShareHostRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.NearbyShareHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.NearbyShareHostPendingReceiver,
      handle);
    this.$ = new arc.mojom.NearbyShareHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.NearbyShareHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  startNearbyShare(task_id, info, instance) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      arc.mojom.NearbyShareHost_StartNearbyShare_ParamsSpec,
      arc.mojom.NearbyShareHost_StartNearbyShare_ResponseParamsSpec,
      [task_id, info, instance]);
  }

};

arc.mojom.NearbyShareHost.getRemote = function() {
  let remote = new arc.mojom.NearbyShareHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.NearbyShareHost',
    'context');
  return remote.$;
};

// ParamsSpec for StartNearbyShare
arc.mojom.NearbyShareHost_StartNearbyShare_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.NearbyShareHost.StartNearbyShare_Params',
      packedSize: 24,
      fields: [
        { name: 'task_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'info', packedOffset: 8, packedBitOffset: 0, type: arc.mojom.ShareIntentInfoSpec, nullable: false, minVersion: 0 },
        { name: 'instance', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

arc.mojom.NearbyShareHost_StartNearbyShare_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'host', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
arc.mojom.NearbyShareHostPtr = arc.mojom.NearbyShareHostRemote;
arc.mojom.NearbyShareHostRequest = arc.mojom.NearbyShareHostPendingReceiver;


// Interface: NearbyShareInstance
arc.mojom.NearbyShareInstance = {};

arc.mojom.NearbyShareInstancePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.NearbyShareInstanceRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.NearbyShareInstance';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.NearbyShareInstancePendingReceiver,
      handle);
    this.$ = new arc.mojom.NearbyShareInstanceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.NearbyShareInstanceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  init(host_remote) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      arc.mojom.NearbyShareInstance_Init_ParamsSpec,
      null,
      [host_remote]);
  }

};

arc.mojom.NearbyShareInstance.getRemote = function() {
  let remote = new arc.mojom.NearbyShareInstanceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.NearbyShareInstance',
    'context');
  return remote.$;
};

// ParamsSpec for Init
arc.mojom.NearbyShareInstance_Init_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.NearbyShareInstance.Init_Params',
      packedSize: 16,
      fields: [
        { name: 'host_remote', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
arc.mojom.NearbyShareInstancePtr = arc.mojom.NearbyShareInstanceRemote;
arc.mojom.NearbyShareInstanceRequest = arc.mojom.NearbyShareInstancePendingReceiver;

