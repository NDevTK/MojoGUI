// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/screen_capture.mojom
// Module: arc.mojom

'use strict';

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};
var ash = ash || {};
var chromeos = chromeos || {};
var ash = ash || {};
var chromeos = chromeos || {};
var ui = ui || {};
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
      mojo.internal.StructField('size', 16, 0, arc.mojom.SizeSpec, null, false, 0, undefined),
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
      mojo.internal.StructField('graphics_buffer', 8, 0, mojo.internal.Handle, null, false, 0, undefined),
      mojo.internal.StructField('buffer_format', 12, 0, gfx.mojom.BufferFormatSpec, null, false, 0, undefined),
      mojo.internal.StructField('buffer_format_modifier', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('stride', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
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
      [graphics_buffer, stride]);
  }

  setOutputBuffer(graphics_buffer, buffer_format, buffer_format_modifier, stride) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      arc.mojom.ScreenCaptureSession_SetOutputBuffer_ParamsSpec,
      arc.mojom.ScreenCaptureSession_SetOutputBuffer_ResponseParamsSpec,
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

arc.mojom.ScreenCaptureSessionNotifierPtr = arc.mojom.ScreenCaptureSessionNotifierRemote;
arc.mojom.ScreenCaptureSessionNotifierRequest = arc.mojom.ScreenCaptureSessionNotifierPendingReceiver;

