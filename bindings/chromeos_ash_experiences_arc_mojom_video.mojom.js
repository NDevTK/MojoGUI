// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/video.mojom
// Module: arc.mojom

'use strict';

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};
var chromeos = chromeos || {};
var sandbox = sandbox || {};

arc.mojom.VideoHost = {};
arc.mojom.VideoHost.$interfaceName = 'arc.mojom.VideoHost';
arc.mojom.VideoHost_OnBootstrapVideoAcceleratorFactory_ParamsSpec = { $: {} };
arc.mojom.VideoHost_OnBootstrapVideoAcceleratorFactory_ResponseParamsSpec = { $: {} };
arc.mojom.VideoHost_CreateVideoAcceleratorFactory_ParamsSpec = { $: {} };
arc.mojom.VideoHost_CreateVideoAcceleratorFactory_ResponseParamsSpec = { $: {} };
arc.mojom.VideoInstance = {};
arc.mojom.VideoInstance.$interfaceName = 'arc.mojom.VideoInstance';
arc.mojom.VideoInstance_Init_ParamsSpec = { $: {} };
arc.mojom.VideoInstance_Init_ResponseParamsSpec = { $: {} };
arc.mojom.VideoAcceleratorFactory = {};
arc.mojom.VideoAcceleratorFactory.$interfaceName = 'arc.mojom.VideoAcceleratorFactory';
arc.mojom.VideoAcceleratorFactory_CreateEncodeAccelerator_ParamsSpec = { $: {} };
arc.mojom.VideoAcceleratorFactory_CreateDecodeAccelerator_ParamsSpec = { $: {} };
arc.mojom.VideoAcceleratorFactory_CreateVideoDecoder_ParamsSpec = { $: {} };
arc.mojom.VideoAcceleratorFactory_CreateProtectedBufferAllocator_ParamsSpec = { $: {} };

// Interface: VideoHost
mojo.internal.Struct(
    arc.mojom.VideoHost_OnBootstrapVideoAcceleratorFactory_ParamsSpec, 'arc.mojom.VideoHost_OnBootstrapVideoAcceleratorFactory_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    arc.mojom.VideoHost_OnBootstrapVideoAcceleratorFactory_ResponseParamsSpec, 'arc.mojom.VideoHost_OnBootstrapVideoAcceleratorFactory_ResponseParams', [
      mojo.internal.StructField('token', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('channel_handle', 8, 0, mojo.internal.Handle, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    arc.mojom.VideoHost_CreateVideoAcceleratorFactory_ParamsSpec, 'arc.mojom.VideoHost_CreateVideoAcceleratorFactory_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    arc.mojom.VideoHost_CreateVideoAcceleratorFactory_ResponseParamsSpec, 'arc.mojom.VideoHost_CreateVideoAcceleratorFactory_ResponseParams', [
      mojo.internal.StructField('remote', 0, 0, mojo.internal.InterfaceProxy(arc.mojom.VideoAcceleratorFactorySpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

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
      [],
      false);
  }

  createVideoAcceleratorFactory() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      arc.mojom.VideoHost_CreateVideoAcceleratorFactory_ParamsSpec,
      arc.mojom.VideoHost_CreateVideoAcceleratorFactory_ResponseParamsSpec,
      [],
      false);
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

arc.mojom.VideoHostReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (message) => {
      const header = message.header;
      if (!header) return;
      switch (header.ordinal) {
        case 1: {
          const params = arc.mojom.VideoHost_OnBootstrapVideoAcceleratorFactory_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onBootstrapVideoAcceleratorFactory();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.VideoHost_OnBootstrapVideoAcceleratorFactory_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const params = arc.mojom.VideoHost_CreateVideoAcceleratorFactory_ParamsSpec.$.decode(message.payload);
          const result = this.impl.createVideoAcceleratorFactory();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.VideoHost_CreateVideoAcceleratorFactory_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
    }});
  }
};

arc.mojom.VideoHostReceiver = arc.mojom.VideoHostReceiver;

arc.mojom.VideoHostPtr = arc.mojom.VideoHostRemote;
arc.mojom.VideoHostRequest = arc.mojom.VideoHostPendingReceiver;


// Interface: VideoInstance
mojo.internal.Struct(
    arc.mojom.VideoInstance_Init_ParamsSpec, 'arc.mojom.VideoInstance_Init_Params', [
      mojo.internal.StructField('host_remote', 0, 0, mojo.internal.InterfaceProxy(arc.mojom.VideoHostSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.VideoInstance_Init_ResponseParamsSpec, 'arc.mojom.VideoInstance_Init_ResponseParams', [
    ],
    [[0, 8]]);

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
      arc.mojom.VideoInstance_Init_ResponseParamsSpec,
      [host_remote],
      false);
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

arc.mojom.VideoInstanceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (message) => {
      const header = message.header;
      if (!header) return;
      switch (header.ordinal) {
        case 1: {
          const params = arc.mojom.VideoInstance_Init_ParamsSpec.$.decode(message.payload);
          const result = this.impl.init(params.host_remote);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.VideoInstance_Init_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
    }});
  }
};

arc.mojom.VideoInstanceReceiver = arc.mojom.VideoInstanceReceiver;

arc.mojom.VideoInstancePtr = arc.mojom.VideoInstanceRemote;
arc.mojom.VideoInstanceRequest = arc.mojom.VideoInstancePendingReceiver;


// Interface: VideoAcceleratorFactory
mojo.internal.Struct(
    arc.mojom.VideoAcceleratorFactory_CreateEncodeAccelerator_ParamsSpec, 'arc.mojom.VideoAcceleratorFactory_CreateEncodeAccelerator_Params', [
      mojo.internal.StructField('video_encoder', 0, 0, mojo.internal.InterfaceRequest(arc.mojom.VideoEncodeAcceleratorRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.VideoAcceleratorFactory_CreateDecodeAccelerator_ParamsSpec, 'arc.mojom.VideoAcceleratorFactory_CreateDecodeAccelerator_Params', [
      mojo.internal.StructField('video_decoder', 0, 0, mojo.internal.InterfaceRequest(arc.mojom.VideoDecodeAcceleratorRemote), null, false, 0, undefined),
      mojo.internal.StructField('protected_buffer_manager', 8, 0, mojo.internal.InterfaceProxy(arc.mojom.ProtectedBufferManagerRemote), null, true, 8, undefined),
      mojo.internal.StructField('browser_cdm_factory', 16, 0, mojo.internal.InterfaceProxy(chromeos.cdm.mojom.BrowserCdmFactoryRemote), null, true, 10, undefined),
    ],
    [[0, 16], [8, 24], [10, 32]]);

mojo.internal.Struct(
    arc.mojom.VideoAcceleratorFactory_CreateVideoDecoder_ParamsSpec, 'arc.mojom.VideoAcceleratorFactory_CreateVideoDecoder_Params', [
      mojo.internal.StructField('video_decoder', 0, 0, mojo.internal.InterfaceRequest(arc.mojom.VideoDecoderRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.VideoAcceleratorFactory_CreateProtectedBufferAllocator_ParamsSpec, 'arc.mojom.VideoAcceleratorFactory_CreateProtectedBufferAllocator_Params', [
      mojo.internal.StructField('video_protected_buffer_allocator', 0, 0, mojo.internal.InterfaceRequest(arc.mojom.VideoProtectedBufferAllocatorRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

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
      [video_encoder],
      false);
  }

  createDecodeAccelerator(video_decoder, protected_buffer_manager, browser_cdm_factory) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      arc.mojom.VideoAcceleratorFactory_CreateDecodeAccelerator_ParamsSpec,
      null,
      [video_decoder, protected_buffer_manager, browser_cdm_factory],
      false);
  }

  createVideoDecoder(video_decoder) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      arc.mojom.VideoAcceleratorFactory_CreateVideoDecoder_ParamsSpec,
      null,
      [video_decoder],
      false);
  }

  createProtectedBufferAllocator(video_protected_buffer_allocator) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      arc.mojom.VideoAcceleratorFactory_CreateProtectedBufferAllocator_ParamsSpec,
      null,
      [video_protected_buffer_allocator],
      false);
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

arc.mojom.VideoAcceleratorFactoryReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (message) => {
      const header = message.header;
      if (!header) return;
      switch (header.ordinal) {
        case 1: {
          const params = arc.mojom.VideoAcceleratorFactory_CreateEncodeAccelerator_ParamsSpec.$.decode(message.payload);
          const result = this.impl.createEncodeAccelerator(params.video_encoder);
          break;
        }
        case 2: {
          const params = arc.mojom.VideoAcceleratorFactory_CreateDecodeAccelerator_ParamsSpec.$.decode(message.payload);
          const result = this.impl.createDecodeAccelerator(params.video_decoder, params.protected_buffer_manager, params.browser_cdm_factory);
          break;
        }
        case 4: {
          const params = arc.mojom.VideoAcceleratorFactory_CreateVideoDecoder_ParamsSpec.$.decode(message.payload);
          const result = this.impl.createVideoDecoder(params.video_decoder);
          break;
        }
        case 3: {
          const params = arc.mojom.VideoAcceleratorFactory_CreateProtectedBufferAllocator_ParamsSpec.$.decode(message.payload);
          const result = this.impl.createProtectedBufferAllocator(params.video_protected_buffer_allocator);
          break;
        }
      }
    }});
  }
};

arc.mojom.VideoAcceleratorFactoryReceiver = arc.mojom.VideoAcceleratorFactoryReceiver;

arc.mojom.VideoAcceleratorFactoryPtr = arc.mojom.VideoAcceleratorFactoryRemote;
arc.mojom.VideoAcceleratorFactoryRequest = arc.mojom.VideoAcceleratorFactoryPendingReceiver;

