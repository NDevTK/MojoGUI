// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/video.mojom
// Module: arc.mojom

'use strict';

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};


// Interface: VideoHost
arc.mojom.VideoHost = {};

arc.mojom.VideoHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.VideoHostRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.VideoHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.VideoHostPendingReceiver,
      handle);
    this.$ = new arc.mojom.VideoHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.VideoHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onBootstrapVideoAcceleratorFactory() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      arc.mojom.VideoHost_OnBootstrapVideoAcceleratorFactory_ParamsSpec,
      arc.mojom.VideoHost_OnBootstrapVideoAcceleratorFactory_ResponseParamsSpec,
      []);
  }

  createVideoAcceleratorFactory() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      arc.mojom.VideoHost_CreateVideoAcceleratorFactory_ParamsSpec,
      arc.mojom.VideoHost_CreateVideoAcceleratorFactory_ResponseParamsSpec,
      []);
  }

};

arc.mojom.VideoHost.getRemote = function() {
  let remote = new arc.mojom.VideoHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.VideoHost',
    'context');
  return remote.$;
};

// ParamsSpec for OnBootstrapVideoAcceleratorFactory
arc.mojom.VideoHost_OnBootstrapVideoAcceleratorFactory_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.VideoHost.OnBootstrapVideoAcceleratorFactory_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

arc.mojom.VideoHost_OnBootstrapVideoAcceleratorFactory_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.VideoHost.OnBootstrapVideoAcceleratorFactory_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'channel_handle', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Handle, nullable: false, minVersion: 0 },
        { name: 'token', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for CreateVideoAcceleratorFactory
arc.mojom.VideoHost_CreateVideoAcceleratorFactory_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.VideoHost.CreateVideoAcceleratorFactory_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

arc.mojom.VideoHost_CreateVideoAcceleratorFactory_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.VideoHost.CreateVideoAcceleratorFactory_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'remote', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
arc.mojom.VideoHostPtr = arc.mojom.VideoHostRemote;
arc.mojom.VideoHostRequest = arc.mojom.VideoHostPendingReceiver;


// Interface: VideoInstance
arc.mojom.VideoInstance = {};

arc.mojom.VideoInstancePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.VideoInstanceRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.VideoInstance';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.VideoInstancePendingReceiver,
      handle);
    this.$ = new arc.mojom.VideoInstanceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.VideoInstanceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  init(host_remote) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      arc.mojom.VideoInstance_Init_ParamsSpec,
      null,
      [host_remote]);
  }

};

arc.mojom.VideoInstance.getRemote = function() {
  let remote = new arc.mojom.VideoInstanceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.VideoInstance',
    'context');
  return remote.$;
};

// ParamsSpec for Init
arc.mojom.VideoInstance_Init_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.VideoInstance.Init_Params',
      packedSize: 16,
      fields: [
        { name: 'host_remote', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
arc.mojom.VideoInstancePtr = arc.mojom.VideoInstanceRemote;
arc.mojom.VideoInstanceRequest = arc.mojom.VideoInstancePendingReceiver;


// Interface: VideoAcceleratorFactory
arc.mojom.VideoAcceleratorFactory = {};

arc.mojom.VideoAcceleratorFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.VideoAcceleratorFactoryRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.VideoAcceleratorFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.VideoAcceleratorFactoryPendingReceiver,
      handle);
    this.$ = new arc.mojom.VideoAcceleratorFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.VideoAcceleratorFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createEncodeAccelerator(video_encoder) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      arc.mojom.VideoAcceleratorFactory_CreateEncodeAccelerator_ParamsSpec,
      null,
      [video_encoder]);
  }

  createDecodeAccelerator(video_decoder, protected_buffer_manager, browser_cdm_factory) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      arc.mojom.VideoAcceleratorFactory_CreateDecodeAccelerator_ParamsSpec,
      null,
      [video_decoder, protected_buffer_manager, browser_cdm_factory]);
  }

  createVideoDecoder(video_decoder) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      arc.mojom.VideoAcceleratorFactory_CreateVideoDecoder_ParamsSpec,
      null,
      [video_decoder]);
  }

  createProtectedBufferAllocator(video_protected_buffer_allocator) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      arc.mojom.VideoAcceleratorFactory_CreateProtectedBufferAllocator_ParamsSpec,
      null,
      [video_protected_buffer_allocator]);
  }

};

arc.mojom.VideoAcceleratorFactory.getRemote = function() {
  let remote = new arc.mojom.VideoAcceleratorFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.VideoAcceleratorFactory',
    'context');
  return remote.$;
};

// ParamsSpec for CreateEncodeAccelerator
arc.mojom.VideoAcceleratorFactory_CreateEncodeAccelerator_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.VideoAcceleratorFactory.CreateEncodeAccelerator_Params',
      packedSize: 16,
      fields: [
        { name: 'video_encoder', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for CreateDecodeAccelerator
arc.mojom.VideoAcceleratorFactory_CreateDecodeAccelerator_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.VideoAcceleratorFactory.CreateDecodeAccelerator_Params',
      packedSize: 24,
      fields: [
        { name: 'video_decoder', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false, minVersion: 0 },
        { name: 'protected_buffer_manager', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: true, minVersion: 8 },
        { name: 'browser_cdm_factory', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: true, minVersion: 10 },
      ],
      versions: [{version: 0, packedSize: 16}, {version: 8, packedSize: 16}, {version: 10, packedSize: 24}]
    }
  }
};

// ParamsSpec for CreateVideoDecoder
arc.mojom.VideoAcceleratorFactory_CreateVideoDecoder_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.VideoAcceleratorFactory.CreateVideoDecoder_Params',
      packedSize: 16,
      fields: [
        { name: 'video_decoder', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for CreateProtectedBufferAllocator
arc.mojom.VideoAcceleratorFactory_CreateProtectedBufferAllocator_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.VideoAcceleratorFactory.CreateProtectedBufferAllocator_Params',
      packedSize: 16,
      fields: [
        { name: 'video_protected_buffer_allocator', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
arc.mojom.VideoAcceleratorFactoryPtr = arc.mojom.VideoAcceleratorFactoryRemote;
arc.mojom.VideoAcceleratorFactoryRequest = arc.mojom.VideoAcceleratorFactoryPendingReceiver;

