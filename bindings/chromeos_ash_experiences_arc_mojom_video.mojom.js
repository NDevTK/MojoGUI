// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/video.mojom
// Module: arc.mojom

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
      mojo.internal.StructField('remote', 0, 0, mojo.internal.InterfaceProxy(arc.mojom.VideoAcceleratorFactoryRemote), null, false, 0, undefined),
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
  onBootstrapVideoAcceleratorFactory() {
    return this.$.onBootstrapVideoAcceleratorFactory();
  }
  createVideoAcceleratorFactory() {
    return this.$.createVideoAcceleratorFactory();
  }
};

arc.mojom.VideoHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('VideoHost', [
      { explicit: 1 },
      { explicit: 2 },
    ]);
  }

  onBootstrapVideoAcceleratorFactory() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      arc.mojom.VideoHost_OnBootstrapVideoAcceleratorFactory_ParamsSpec,
      arc.mojom.VideoHost_OnBootstrapVideoAcceleratorFactory_ResponseParamsSpec,
      [],
      false);
  }

  createVideoAcceleratorFactory() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
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
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('VideoHost', [
      { explicit: 1 },
      { explicit: 2 },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.router_.onConnectionError.addListener(() => {
       console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
    });
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.VideoHost_OnBootstrapVideoAcceleratorFactory_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.VideoHost_CreateVideoAcceleratorFactory_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.VideoHost_OnBootstrapVideoAcceleratorFactory_ParamsSpec.$.structSpec);
          const result = this.impl.onBootstrapVideoAcceleratorFactory();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.VideoHost_OnBootstrapVideoAcceleratorFactory_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.VideoHost_CreateVideoAcceleratorFactory_ParamsSpec.$.structSpec);
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
      } catch (err) {}
    }});
  }
};

arc.mojom.VideoHostReceiver = arc.mojom.VideoHostReceiver;

arc.mojom.VideoHostPtr = arc.mojom.VideoHostRemote;
arc.mojom.VideoHostRequest = arc.mojom.VideoHostPendingReceiver;


// Interface: VideoInstance
mojo.internal.Struct(
    arc.mojom.VideoInstance_Init_ParamsSpec, 'arc.mojom.VideoInstance_Init_Params', [
      mojo.internal.StructField('host_remote', 0, 0, mojo.internal.InterfaceProxy(arc.mojom.VideoHostRemote), null, false, 0, undefined),
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
  init(host_remote) {
    return this.$.init(host_remote);
  }
};

arc.mojom.VideoInstanceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('VideoInstance', [
      { explicit: 1 },
    ]);
  }

  init(host_remote) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
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
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('VideoInstance', [
      { explicit: 1 },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.router_.onConnectionError.addListener(() => {
       console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
    });
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.VideoInstance_Init_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.VideoInstance_Init_ParamsSpec.$.structSpec);
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
      } catch (err) {}
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
  createEncodeAccelerator(video_encoder) {
    return this.$.createEncodeAccelerator(video_encoder);
  }
  createDecodeAccelerator(video_decoder, protected_buffer_manager, browser_cdm_factory) {
    return this.$.createDecodeAccelerator(video_decoder, protected_buffer_manager, browser_cdm_factory);
  }
  createVideoDecoder(video_decoder) {
    return this.$.createVideoDecoder(video_decoder);
  }
  createProtectedBufferAllocator(video_protected_buffer_allocator) {
    return this.$.createProtectedBufferAllocator(video_protected_buffer_allocator);
  }
};

arc.mojom.VideoAcceleratorFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('VideoAcceleratorFactory', [
      { explicit: 1 },
      { explicit: 2 },
      { explicit: 4 },
      { explicit: 3 },
    ]);
  }

  createEncodeAccelerator(video_encoder) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      arc.mojom.VideoAcceleratorFactory_CreateEncodeAccelerator_ParamsSpec,
      null,
      [video_encoder],
      false);
  }

  createDecodeAccelerator(video_decoder, protected_buffer_manager, browser_cdm_factory) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      arc.mojom.VideoAcceleratorFactory_CreateDecodeAccelerator_ParamsSpec,
      null,
      [video_decoder, protected_buffer_manager, browser_cdm_factory],
      false);
  }

  createVideoDecoder(video_decoder) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      arc.mojom.VideoAcceleratorFactory_CreateVideoDecoder_ParamsSpec,
      null,
      [video_decoder],
      false);
  }

  createProtectedBufferAllocator(video_protected_buffer_allocator) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
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
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('VideoAcceleratorFactory', [
      { explicit: 1 },
      { explicit: 2 },
      { explicit: 4 },
      { explicit: 3 },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.router_.onConnectionError.addListener(() => {
       console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
    });
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.VideoAcceleratorFactory_CreateEncodeAccelerator_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.VideoAcceleratorFactory_CreateDecodeAccelerator_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.VideoAcceleratorFactory_CreateVideoDecoder_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.VideoAcceleratorFactory_CreateProtectedBufferAllocator_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.VideoAcceleratorFactory_CreateEncodeAccelerator_ParamsSpec.$.structSpec);
          const result = this.impl.createEncodeAccelerator(params.video_encoder);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.VideoAcceleratorFactory_CreateDecodeAccelerator_ParamsSpec.$.structSpec);
          const result = this.impl.createDecodeAccelerator(params.video_decoder, params.protected_buffer_manager, params.browser_cdm_factory);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.VideoAcceleratorFactory_CreateVideoDecoder_ParamsSpec.$.structSpec);
          const result = this.impl.createVideoDecoder(params.video_decoder);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.VideoAcceleratorFactory_CreateProtectedBufferAllocator_ParamsSpec.$.structSpec);
          const result = this.impl.createProtectedBufferAllocator(params.video_protected_buffer_allocator);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

arc.mojom.VideoAcceleratorFactoryReceiver = arc.mojom.VideoAcceleratorFactoryReceiver;

arc.mojom.VideoAcceleratorFactoryPtr = arc.mojom.VideoAcceleratorFactoryRemote;
arc.mojom.VideoAcceleratorFactoryRequest = arc.mojom.VideoAcceleratorFactoryPendingReceiver;

