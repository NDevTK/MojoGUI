// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/screen_capture.mojom
// Module: arc.mojom

'use strict';

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};
var ui = ui || {};
var gfx = gfx || {};


// Interface: ScreenCaptureHost
arc.mojom.ScreenCaptureHost = {};

arc.mojom.ScreenCaptureHost_RequestPermission_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.ScreenCaptureHost_RequestPermission_Params',
      packedSize: 24,
      fields: [
        { name: 'display_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'package_name', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

arc.mojom.ScreenCaptureHost_TestModeAcceptPermission_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.ScreenCaptureHost_TestModeAcceptPermission_Params',
      packedSize: 16,
      fields: [
        { name: 'package_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

arc.mojom.ScreenCaptureHost_OpenSession_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.ScreenCaptureHost_OpenSession_Params',
      packedSize: 32,
      fields: [
        { name: 'notifier', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(arc.mojom.ScreenCaptureSessionNotifierRemote), nullable: false, minVersion: 0 },
        { name: 'package_name', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'size', packedOffset: 16, packedBitOffset: 0, type: arc.mojom.SizeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

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
      [display_name, package_name]);
  }

  testModeAcceptPermission(package_name) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      arc.mojom.ScreenCaptureHost_TestModeAcceptPermission_ParamsSpec,
      null,
      [package_name]);
  }

  openSession(notifier, package_name, size) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      arc.mojom.ScreenCaptureHost_OpenSession_ParamsSpec,
      arc.mojom.ScreenCaptureHost_OpenSession_ResponseParamsSpec,
      [notifier, package_name, size]);
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

// ParamsSpec for RequestPermission
arc.mojom.ScreenCaptureHost_RequestPermission_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.ScreenCaptureHost.RequestPermission_Params',
      packedSize: 24,
      fields: [
        { name: 'display_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'package_name', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

arc.mojom.ScreenCaptureHost_RequestPermission_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.ScreenCaptureHost.RequestPermission_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'granted', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for TestModeAcceptPermission
arc.mojom.ScreenCaptureHost_TestModeAcceptPermission_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.ScreenCaptureHost.TestModeAcceptPermission_Params',
      packedSize: 16,
      fields: [
        { name: 'package_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OpenSession
arc.mojom.ScreenCaptureHost_OpenSession_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.ScreenCaptureHost.OpenSession_Params',
      packedSize: 32,
      fields: [
        { name: 'notifier', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(arc.mojom.ScreenCaptureSessionNotifierRemote), nullable: false, minVersion: 0 },
        { name: 'package_name', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'size', packedOffset: 16, packedBitOffset: 0, type: arc.mojom.SizeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

arc.mojom.ScreenCaptureHost_OpenSession_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.ScreenCaptureHost.OpenSession_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'session', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(arc.mojom.ScreenCaptureSessionRemote), nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
arc.mojom.ScreenCaptureHostPtr = arc.mojom.ScreenCaptureHostRemote;
arc.mojom.ScreenCaptureHostRequest = arc.mojom.ScreenCaptureHostPendingReceiver;


// Interface: ScreenCaptureSession
arc.mojom.ScreenCaptureSession = {};

arc.mojom.ScreenCaptureSession_SetOutputBufferDeprecated_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.ScreenCaptureSession_SetOutputBufferDeprecated_Params',
      packedSize: 16,
      fields: [
        { name: 'graphics_buffer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Handle, nullable: false, minVersion: 0 },
        { name: 'stride', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

arc.mojom.ScreenCaptureSession_SetOutputBuffer_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.ScreenCaptureSession_SetOutputBuffer_Params',
      packedSize: 32,
      fields: [
        { name: 'graphics_buffer', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Handle, nullable: false, minVersion: 0 },
        { name: 'buffer_format', packedOffset: 12, packedBitOffset: 0, type: gfx.mojom.BufferFormatSpec, nullable: false, minVersion: 0 },
        { name: 'buffer_format_modifier', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
        { name: 'stride', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

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
      null,
      [graphics_buffer, stride]);
  }

  setOutputBuffer(graphics_buffer, buffer_format, buffer_format_modifier, stride) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      arc.mojom.ScreenCaptureSession_SetOutputBuffer_ParamsSpec,
      null,
      [graphics_buffer, buffer_format, buffer_format_modifier, stride]);
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

// ParamsSpec for SetOutputBufferDeprecated
arc.mojom.ScreenCaptureSession_SetOutputBufferDeprecated_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.ScreenCaptureSession.SetOutputBufferDeprecated_Params',
      packedSize: 16,
      fields: [
        { name: 'graphics_buffer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Handle, nullable: false, minVersion: 0 },
        { name: 'stride', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetOutputBuffer
arc.mojom.ScreenCaptureSession_SetOutputBuffer_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.ScreenCaptureSession.SetOutputBuffer_Params',
      packedSize: 32,
      fields: [
        { name: 'graphics_buffer', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Handle, nullable: false, minVersion: 0 },
        { name: 'buffer_format', packedOffset: 12, packedBitOffset: 0, type: gfx.mojom.BufferFormatSpec, nullable: false, minVersion: 0 },
        { name: 'buffer_format_modifier', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
        { name: 'stride', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Legacy compatibility
arc.mojom.ScreenCaptureSessionPtr = arc.mojom.ScreenCaptureSessionRemote;
arc.mojom.ScreenCaptureSessionRequest = arc.mojom.ScreenCaptureSessionPendingReceiver;


// Interface: ScreenCaptureInstance
arc.mojom.ScreenCaptureInstance = {};

arc.mojom.ScreenCaptureInstance_Init_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.ScreenCaptureInstance_Init_Params',
      packedSize: 16,
      fields: [
        { name: 'host_remote', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(arc.mojom.ScreenCaptureHostRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

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
      null,
      [host_remote]);
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

// ParamsSpec for Init
arc.mojom.ScreenCaptureInstance_Init_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.ScreenCaptureInstance.Init_Params',
      packedSize: 16,
      fields: [
        { name: 'host_remote', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(arc.mojom.ScreenCaptureHostRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
arc.mojom.ScreenCaptureInstancePtr = arc.mojom.ScreenCaptureInstanceRemote;
arc.mojom.ScreenCaptureInstanceRequest = arc.mojom.ScreenCaptureInstancePendingReceiver;


// Interface: ScreenCaptureSessionNotifier
arc.mojom.ScreenCaptureSessionNotifier = {};

arc.mojom.ScreenCaptureSessionNotifier_ForceUpdate_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.ScreenCaptureSessionNotifier_ForceUpdate_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

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
      []);
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

// ParamsSpec for ForceUpdate
arc.mojom.ScreenCaptureSessionNotifier_ForceUpdate_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.ScreenCaptureSessionNotifier.ForceUpdate_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Legacy compatibility
arc.mojom.ScreenCaptureSessionNotifierPtr = arc.mojom.ScreenCaptureSessionNotifierRemote;
arc.mojom.ScreenCaptureSessionNotifierRequest = arc.mojom.ScreenCaptureSessionNotifierPendingReceiver;

