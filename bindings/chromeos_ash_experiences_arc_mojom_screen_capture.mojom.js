// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/screen_capture.mojom
// Module: arc.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

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
      mojo.internal.StructField('notifier', 0, 0, mojo.internal.InterfaceProxy(arc.mojom.ScreenCaptureSessionNotifierRemote), null, false, 0, undefined),
      mojo.internal.StructField('package_name', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('size', 16, 0, arc.mojom.SizeSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    arc.mojom.ScreenCaptureHost_OpenSession_ResponseParamsSpec, 'arc.mojom.ScreenCaptureHost_OpenSession_ResponseParams', [
      mojo.internal.StructField('session', 0, 0, mojo.internal.InterfaceProxy(arc.mojom.ScreenCaptureSessionRemote), null, true, 0, undefined),
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
  requestPermission(display_name, package_name) {
    return this.$.requestPermission(display_name, package_name);
  }
  testModeAcceptPermission(package_name) {
    return this.$.testModeAcceptPermission(package_name);
  }
  openSession(notifier, package_name, size) {
    return this.$.openSession(notifier, package_name, size);
  }
};

arc.mojom.ScreenCaptureHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ScreenCaptureHost', [
      { explicit: 0 },
      { explicit: 2 },
      { explicit: 1 },
    ]);
  }

  requestPermission(display_name, package_name) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      arc.mojom.ScreenCaptureHost_RequestPermission_ParamsSpec,
      arc.mojom.ScreenCaptureHost_RequestPermission_ResponseParamsSpec,
      [display_name, package_name],
      false);
  }

  testModeAcceptPermission(package_name) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      arc.mojom.ScreenCaptureHost_TestModeAcceptPermission_ParamsSpec,
      null,
      [package_name],
      false);
  }

  openSession(notifier, package_name, size) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
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
    const ordinals = window.mojoScrambler.getOrdinals('ScreenCaptureHost', [
      { explicit: 0 },
      { explicit: 2 },
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
             decoder.decodeStructInline(arc.mojom.ScreenCaptureHost_RequestPermission_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.ScreenCaptureHost_TestModeAcceptPermission_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.ScreenCaptureHost_OpenSession_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.ScreenCaptureHost_RequestPermission_ParamsSpec.$.structSpec);
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
          const params = decoder.decodeStructInline(arc.mojom.ScreenCaptureHost_TestModeAcceptPermission_ParamsSpec.$.structSpec);
          const result = this.impl.testModeAcceptPermission(params.package_name);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.ScreenCaptureHost_OpenSession_ParamsSpec.$.structSpec);
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
      } catch (err) {}
    });
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
  setOutputBufferDeprecated(graphics_buffer, stride) {
    return this.$.setOutputBufferDeprecated(graphics_buffer, stride);
  }
  setOutputBuffer(graphics_buffer, buffer_format, buffer_format_modifier, stride) {
    return this.$.setOutputBuffer(graphics_buffer, buffer_format, buffer_format_modifier, stride);
  }
};

arc.mojom.ScreenCaptureSessionRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ScreenCaptureSession', [
      { explicit: 0 },
      { explicit: 1 },
    ]);
  }

  setOutputBufferDeprecated(graphics_buffer, stride) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      arc.mojom.ScreenCaptureSession_SetOutputBufferDeprecated_ParamsSpec,
      arc.mojom.ScreenCaptureSession_SetOutputBufferDeprecated_ResponseParamsSpec,
      [graphics_buffer, stride],
      false);
  }

  setOutputBuffer(graphics_buffer, buffer_format, buffer_format_modifier, stride) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
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
    const ordinals = window.mojoScrambler.getOrdinals('ScreenCaptureSession', [
      { explicit: 0 },
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
             decoder.decodeStructInline(arc.mojom.ScreenCaptureSession_SetOutputBufferDeprecated_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.ScreenCaptureSession_SetOutputBuffer_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.ScreenCaptureSession_SetOutputBufferDeprecated_ParamsSpec.$.structSpec);
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
          const params = decoder.decodeStructInline(arc.mojom.ScreenCaptureSession_SetOutputBuffer_ParamsSpec.$.structSpec);
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
      } catch (err) {}
    });
  }
};

arc.mojom.ScreenCaptureSessionReceiver = arc.mojom.ScreenCaptureSessionReceiver;

arc.mojom.ScreenCaptureSessionPtr = arc.mojom.ScreenCaptureSessionRemote;
arc.mojom.ScreenCaptureSessionRequest = arc.mojom.ScreenCaptureSessionPendingReceiver;


// Interface: ScreenCaptureInstance
mojo.internal.Struct(
    arc.mojom.ScreenCaptureInstance_Init_ParamsSpec, 'arc.mojom.ScreenCaptureInstance_Init_Params', [
      mojo.internal.StructField('host_remote', 0, 0, mojo.internal.InterfaceProxy(arc.mojom.ScreenCaptureHostRemote), null, false, 0, undefined),
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
  init(host_remote) {
    return this.$.init(host_remote);
  }
};

arc.mojom.ScreenCaptureInstanceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ScreenCaptureInstance', [
      { explicit: 0 },
    ]);
  }

  init(host_remote) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
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
    const ordinals = window.mojoScrambler.getOrdinals('ScreenCaptureInstance', [
      { explicit: 0 },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
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
             decoder.decodeStructInline(arc.mojom.ScreenCaptureInstance_Init_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.ScreenCaptureInstance_Init_ParamsSpec.$.structSpec);
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
      } catch (err) {}
    });
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
  forceUpdate() {
    return this.$.forceUpdate();
  }
};

arc.mojom.ScreenCaptureSessionNotifierRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ScreenCaptureSessionNotifier', [
      { explicit: 0 },
    ]);
  }

  forceUpdate() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
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
    const ordinals = window.mojoScrambler.getOrdinals('ScreenCaptureSessionNotifier', [
      { explicit: 0 },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
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
             decoder.decodeStructInline(arc.mojom.ScreenCaptureSessionNotifier_ForceUpdate_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.ScreenCaptureSessionNotifier_ForceUpdate_ParamsSpec.$.structSpec);
          const result = this.impl.forceUpdate();
          break;
        }
      }
      } catch (err) {}
    });
  }
};

arc.mojom.ScreenCaptureSessionNotifierReceiver = arc.mojom.ScreenCaptureSessionNotifierReceiver;

arc.mojom.ScreenCaptureSessionNotifierPtr = arc.mojom.ScreenCaptureSessionNotifierRemote;
arc.mojom.ScreenCaptureSessionNotifierRequest = arc.mojom.ScreenCaptureSessionNotifierPendingReceiver;

