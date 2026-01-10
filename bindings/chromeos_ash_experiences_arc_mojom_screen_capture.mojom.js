// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/screen_capture.mojom
// Module: arc.mojom

'use strict';

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};
var gfx = gfx || {};

arc.mojom.ScreenCaptureHost = {};
arc.mojom.ScreenCaptureHost.$interfaceName = 'arc.mojom.ScreenCaptureHost';
arc.mojom.ScreenCaptureHost_RequestPermission_ParamsSpec = { $: {} };
arc.mojom.ScreenCaptureHost_RequestPermission_ResponseParamsSpec = { $: {} };
arc.mojom.ScreenCaptureHost_TestModeAcceptPermission_ParamsSpec = { $: {} };
arc.mojom.ScreenCaptureHost_OpenSession_ParamsSpec = { $: {} };
arc.mojom.ScreenCaptureHost_OpenSession_ResponseParamsSpec = { $: {} };
arc.mojom.ScreenCaptureSession = {};
arc.mojom.ScreenCaptureSession.$interfaceName = 'arc.mojom.ScreenCaptureSession';
arc.mojom.ScreenCaptureSession_SetOutputBufferDeprecated_ParamsSpec = { $: {} };
arc.mojom.ScreenCaptureSession_SetOutputBufferDeprecated_ResponseParamsSpec = { $: {} };
arc.mojom.ScreenCaptureSession_SetOutputBuffer_ParamsSpec = { $: {} };
arc.mojom.ScreenCaptureSession_SetOutputBuffer_ResponseParamsSpec = { $: {} };
arc.mojom.ScreenCaptureInstance = {};
arc.mojom.ScreenCaptureInstance.$interfaceName = 'arc.mojom.ScreenCaptureInstance';
arc.mojom.ScreenCaptureInstance_Init_ParamsSpec = { $: {} };
arc.mojom.ScreenCaptureInstance_Init_ResponseParamsSpec = { $: {} };
arc.mojom.ScreenCaptureSessionNotifier = {};
arc.mojom.ScreenCaptureSessionNotifier.$interfaceName = 'arc.mojom.ScreenCaptureSessionNotifier';
arc.mojom.ScreenCaptureSessionNotifier_ForceUpdate_ParamsSpec = { $: {} };

// Interface: ScreenCaptureHost
mojo.internal.Struct(
    arc.mojom.ScreenCaptureHost_RequestPermission_ParamsSpec, 'arc.mojom.ScreenCaptureHost_RequestPermission_Params', [
      mojo.internal.StructField('display_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('package_name', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    arc.mojom.ScreenCaptureHost_RequestPermission_ResponseParamsSpec, 'arc.mojom.ScreenCaptureHost_RequestPermission_ResponseParams', [
      mojo.internal.StructField('granted', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.ScreenCaptureHost_TestModeAcceptPermission_ParamsSpec, 'arc.mojom.ScreenCaptureHost_TestModeAcceptPermission_Params', [
      mojo.internal.StructField('package_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.ScreenCaptureHost_OpenSession_ParamsSpec, 'arc.mojom.ScreenCaptureHost_OpenSession_Params', [
      mojo.internal.StructField('notifier', 0, 0, mojo.internal.InterfaceProxy(arc.mojom.ScreenCaptureSessionNotifierSpec), null, false, 0, undefined),
      mojo.internal.StructField('package_name', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('size', 16, 0, arc.mojom.SizeSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    arc.mojom.ScreenCaptureHost_OpenSession_ResponseParamsSpec, 'arc.mojom.ScreenCaptureHost_OpenSession_ResponseParams', [
      mojo.internal.StructField('session', 0, 0, mojo.internal.InterfaceProxy(arc.mojom.ScreenCaptureSessionSpec), null, true, 0, undefined),
    ],
    [[0, 16]]);

arc.mojom.ScreenCaptureHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.ScreenCaptureHostRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.ScreenCaptureHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.ScreenCaptureHostPendingReceiver,
      handle);
    this.$ = new arc.mojom.ScreenCaptureHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.ScreenCaptureHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  requestPermission(display_name, package_name) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      arc.mojom.ScreenCaptureHost_RequestPermission_ParamsSpec,
      arc.mojom.ScreenCaptureHost_RequestPermission_ResponseParamsSpec,
      [display_name, package_name],
      false);
  }

  testModeAcceptPermission(package_name) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      arc.mojom.ScreenCaptureHost_TestModeAcceptPermission_ParamsSpec,
      null,
      [package_name],
      false);
  }

  openSession(notifier, package_name, size) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      arc.mojom.ScreenCaptureHost_OpenSession_ParamsSpec,
      arc.mojom.ScreenCaptureHost_OpenSession_ResponseParamsSpec,
      [notifier, package_name, size],
      false);
  }

};

arc.mojom.ScreenCaptureHost.getRemote = function() {
  let remote = new arc.mojom.ScreenCaptureHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.ScreenCaptureHost',
    'context');
  return remote.$;
};

arc.mojom.ScreenCaptureHostReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(2, 1); // Default ordinal 2 -> Index 1
    this.ordinalMap.set(1, 2); // Default ordinal 1 -> Index 2
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        message = {
          header: args[1],
          payload: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: RequestPermission
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.ScreenCaptureHost_RequestPermission_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RequestPermission (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 1: TestModeAcceptPermission
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.ScreenCaptureHost_TestModeAcceptPermission_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> TestModeAcceptPermission (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 2: OpenSession
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.ScreenCaptureHost_OpenSession_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OpenSession (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) { /* Ignore mismatch */ }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.ScreenCaptureHost_RequestPermission_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.requestPermission');
          const result = this.impl.requestPermission(params.display_name, params.package_name);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.ScreenCaptureHost_RequestPermission_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.ScreenCaptureHost_TestModeAcceptPermission_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.testModeAcceptPermission');
          const result = this.impl.testModeAcceptPermission(params.package_name);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.ScreenCaptureHost_OpenSession_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.openSession');
          const result = this.impl.openSession(params.notifier, params.package_name, params.size);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.ScreenCaptureHost_OpenSession_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

arc.mojom.ScreenCaptureHostReceiver = arc.mojom.ScreenCaptureHostReceiver;

arc.mojom.ScreenCaptureHostPtr = arc.mojom.ScreenCaptureHostRemote;
arc.mojom.ScreenCaptureHostRequest = arc.mojom.ScreenCaptureHostPendingReceiver;


// Interface: ScreenCaptureSession
mojo.internal.Struct(
    arc.mojom.ScreenCaptureSession_SetOutputBufferDeprecated_ParamsSpec, 'arc.mojom.ScreenCaptureSession_SetOutputBufferDeprecated_Params', [
      mojo.internal.StructField('graphics_buffer', 0, 0, mojo.internal.Handle, null, false, 0, undefined),
      mojo.internal.StructField('stride', 4, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.ScreenCaptureSession_SetOutputBufferDeprecated_ResponseParamsSpec, 'arc.mojom.ScreenCaptureSession_SetOutputBufferDeprecated_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    arc.mojom.ScreenCaptureSession_SetOutputBuffer_ParamsSpec, 'arc.mojom.ScreenCaptureSession_SetOutputBuffer_Params', [
      mojo.internal.StructField('buffer_format', 0, 0, gfx.mojom.BufferFormatSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('buffer_format_modifier', 8, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('graphics_buffer', 16, 0, mojo.internal.Handle, null, false, 0, undefined),
      mojo.internal.StructField('stride', 20, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    arc.mojom.ScreenCaptureSession_SetOutputBuffer_ResponseParamsSpec, 'arc.mojom.ScreenCaptureSession_SetOutputBuffer_ResponseParams', [
    ],
    [[0, 8]]);

arc.mojom.ScreenCaptureSessionPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.ScreenCaptureSessionRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.ScreenCaptureSession';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.ScreenCaptureSessionPendingReceiver,
      handle);
    this.$ = new arc.mojom.ScreenCaptureSessionRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.ScreenCaptureSessionRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  setOutputBufferDeprecated(graphics_buffer, stride) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      arc.mojom.ScreenCaptureSession_SetOutputBufferDeprecated_ParamsSpec,
      arc.mojom.ScreenCaptureSession_SetOutputBufferDeprecated_ResponseParamsSpec,
      [graphics_buffer, stride],
      false);
  }

  setOutputBuffer(graphics_buffer, buffer_format, buffer_format_modifier, stride) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      arc.mojom.ScreenCaptureSession_SetOutputBuffer_ParamsSpec,
      arc.mojom.ScreenCaptureSession_SetOutputBuffer_ResponseParamsSpec,
      [graphics_buffer, buffer_format, buffer_format_modifier, stride],
      false);
  }

};

arc.mojom.ScreenCaptureSession.getRemote = function() {
  let remote = new arc.mojom.ScreenCaptureSessionRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.ScreenCaptureSession',
    'context');
  return remote.$;
};

arc.mojom.ScreenCaptureSessionReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        message = {
          header: args[1],
          payload: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: SetOutputBufferDeprecated
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.ScreenCaptureSession_SetOutputBufferDeprecated_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetOutputBufferDeprecated (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 1: SetOutputBuffer
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.ScreenCaptureSession_SetOutputBuffer_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetOutputBuffer (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) { /* Ignore mismatch */ }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.ScreenCaptureSession_SetOutputBufferDeprecated_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setOutputBufferDeprecated');
          const result = this.impl.setOutputBufferDeprecated(params.graphics_buffer, params.stride);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.ScreenCaptureSession_SetOutputBufferDeprecated_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.ScreenCaptureSession_SetOutputBuffer_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setOutputBuffer');
          const result = this.impl.setOutputBuffer(params.graphics_buffer, params.buffer_format, params.buffer_format_modifier, params.stride);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.ScreenCaptureSession_SetOutputBuffer_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

arc.mojom.ScreenCaptureSessionReceiver = arc.mojom.ScreenCaptureSessionReceiver;

arc.mojom.ScreenCaptureSessionPtr = arc.mojom.ScreenCaptureSessionRemote;
arc.mojom.ScreenCaptureSessionRequest = arc.mojom.ScreenCaptureSessionPendingReceiver;


// Interface: ScreenCaptureInstance
mojo.internal.Struct(
    arc.mojom.ScreenCaptureInstance_Init_ParamsSpec, 'arc.mojom.ScreenCaptureInstance_Init_Params', [
      mojo.internal.StructField('host_remote', 0, 0, mojo.internal.InterfaceProxy(arc.mojom.ScreenCaptureHostSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.ScreenCaptureInstance_Init_ResponseParamsSpec, 'arc.mojom.ScreenCaptureInstance_Init_ResponseParams', [
    ],
    [[0, 8]]);

arc.mojom.ScreenCaptureInstancePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.ScreenCaptureInstanceRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.ScreenCaptureInstance';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.ScreenCaptureInstancePendingReceiver,
      handle);
    this.$ = new arc.mojom.ScreenCaptureInstanceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.ScreenCaptureInstanceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  init(host_remote) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      arc.mojom.ScreenCaptureInstance_Init_ParamsSpec,
      arc.mojom.ScreenCaptureInstance_Init_ResponseParamsSpec,
      [host_remote],
      false);
  }

};

arc.mojom.ScreenCaptureInstance.getRemote = function() {
  let remote = new arc.mojom.ScreenCaptureInstanceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.ScreenCaptureInstance',
    'context');
  return remote.$;
};

arc.mojom.ScreenCaptureInstanceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        message = {
          header: args[1],
          payload: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: Init
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.ScreenCaptureInstance_Init_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Init (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) { /* Ignore mismatch */ }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.ScreenCaptureInstance_Init_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.init');
          const result = this.impl.init(params.host_remote);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.ScreenCaptureInstance_Init_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

arc.mojom.ScreenCaptureInstanceReceiver = arc.mojom.ScreenCaptureInstanceReceiver;

arc.mojom.ScreenCaptureInstancePtr = arc.mojom.ScreenCaptureInstanceRemote;
arc.mojom.ScreenCaptureInstanceRequest = arc.mojom.ScreenCaptureInstancePendingReceiver;


// Interface: ScreenCaptureSessionNotifier
mojo.internal.Struct(
    arc.mojom.ScreenCaptureSessionNotifier_ForceUpdate_ParamsSpec, 'arc.mojom.ScreenCaptureSessionNotifier_ForceUpdate_Params', [
    ],
    [[0, 8]]);

arc.mojom.ScreenCaptureSessionNotifierPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.ScreenCaptureSessionNotifierRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.ScreenCaptureSessionNotifier';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.ScreenCaptureSessionNotifierPendingReceiver,
      handle);
    this.$ = new arc.mojom.ScreenCaptureSessionNotifierRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.ScreenCaptureSessionNotifierRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  forceUpdate() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      arc.mojom.ScreenCaptureSessionNotifier_ForceUpdate_ParamsSpec,
      null,
      [],
      false);
  }

};

arc.mojom.ScreenCaptureSessionNotifier.getRemote = function() {
  let remote = new arc.mojom.ScreenCaptureSessionNotifierRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.ScreenCaptureSessionNotifier',
    'context');
  return remote.$;
};

arc.mojom.ScreenCaptureSessionNotifierReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        message = {
          header: args[1],
          payload: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: ForceUpdate
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.ScreenCaptureSessionNotifier_ForceUpdate_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ForceUpdate (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) { /* Ignore mismatch */ }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.ScreenCaptureSessionNotifier_ForceUpdate_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.forceUpdate');
          const result = this.impl.forceUpdate();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

arc.mojom.ScreenCaptureSessionNotifierReceiver = arc.mojom.ScreenCaptureSessionNotifierReceiver;

arc.mojom.ScreenCaptureSessionNotifierPtr = arc.mojom.ScreenCaptureSessionNotifierRemote;
arc.mojom.ScreenCaptureSessionNotifierRequest = arc.mojom.ScreenCaptureSessionNotifierPendingReceiver;

