// Auto-generated MojoJS binding
// Source: chromium_src/services/on_device_model/public/mojom/on_device_model.mojom
// Module: on_device_model.mojom

'use strict';

// Module namespace
var on_device_model = on_device_model || {};
on_device_model.mojom = on_device_model.mojom || {};


// Enum: Token
on_device_model.mojom.Token = {
  kSystem: 0,
  kModel: 1,
  kUser: 2,
};

// Enum: Priority
on_device_model.mojom.Priority = {
  kBackground: 0,
};

// Enum: PerformanceClass
on_device_model.mojom.PerformanceClass = {
  kGpuBlocked: 0,
  kFailedToLoadLibrary: 1,
  kVeryLow: 2,
  kLow: 3,
  kMedium: 4,
  kHigh: 5,
  kVeryHigh: 6,
};

// Enum: LoadModelResult
on_device_model.mojom.LoadModelResult = {
  kSuccess: 0,
  kGpuBlocked: 1,
  EnableIf: 2,
};

// Interface: StreamingResponder
on_device_model.mojom.StreamingResponder = {};

on_device_model.mojom.StreamingResponderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

on_device_model.mojom.StreamingResponderRemote = class {
  static get $interfaceName() {
    return 'on_device_model.mojom.StreamingResponder';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      on_device_model.mojom.StreamingResponderPendingReceiver,
      handle);
    this.$ = new on_device_model.mojom.StreamingResponderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

on_device_model.mojom.StreamingResponderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

on_device_model.mojom.StreamingResponder.getRemote = function() {
  let remote = new on_device_model.mojom.StreamingResponderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'on_device_model.mojom.StreamingResponder',
    'context');
  return remote.$;
};

// Legacy compatibility
on_device_model.mojom.StreamingResponderPtr = on_device_model.mojom.StreamingResponderRemote;
on_device_model.mojom.StreamingResponderRequest = on_device_model.mojom.StreamingResponderPendingReceiver;


// Interface: ContextClient
on_device_model.mojom.ContextClient = {};

on_device_model.mojom.ContextClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

on_device_model.mojom.ContextClientRemote = class {
  static get $interfaceName() {
    return 'on_device_model.mojom.ContextClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      on_device_model.mojom.ContextClientPendingReceiver,
      handle);
    this.$ = new on_device_model.mojom.ContextClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

on_device_model.mojom.ContextClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

on_device_model.mojom.ContextClient.getRemote = function() {
  let remote = new on_device_model.mojom.ContextClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'on_device_model.mojom.ContextClient',
    'context');
  return remote.$;
};

// Legacy compatibility
on_device_model.mojom.ContextClientPtr = on_device_model.mojom.ContextClientRemote;
on_device_model.mojom.ContextClientRequest = on_device_model.mojom.ContextClientPendingReceiver;


// Interface: Session
on_device_model.mojom.Session = {};

on_device_model.mojom.SessionPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

on_device_model.mojom.SessionRemote = class {
  static get $interfaceName() {
    return 'on_device_model.mojom.Session';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      on_device_model.mojom.SessionPendingReceiver,
      handle);
    this.$ = new on_device_model.mojom.SessionRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

on_device_model.mojom.SessionRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

on_device_model.mojom.Session.getRemote = function() {
  let remote = new on_device_model.mojom.SessionRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'on_device_model.mojom.Session',
    'context');
  return remote.$;
};

// Legacy compatibility
on_device_model.mojom.SessionPtr = on_device_model.mojom.SessionRemote;
on_device_model.mojom.SessionRequest = on_device_model.mojom.SessionPendingReceiver;


// Interface: OnDeviceModel
on_device_model.mojom.OnDeviceModel = {};

on_device_model.mojom.OnDeviceModelPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

on_device_model.mojom.OnDeviceModelRemote = class {
  static get $interfaceName() {
    return 'on_device_model.mojom.OnDeviceModel';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      on_device_model.mojom.OnDeviceModelPendingReceiver,
      handle);
    this.$ = new on_device_model.mojom.OnDeviceModelRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

on_device_model.mojom.OnDeviceModelRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

on_device_model.mojom.OnDeviceModel.getRemote = function() {
  let remote = new on_device_model.mojom.OnDeviceModelRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'on_device_model.mojom.OnDeviceModel',
    'context');
  return remote.$;
};

// Legacy compatibility
on_device_model.mojom.OnDeviceModelPtr = on_device_model.mojom.OnDeviceModelRemote;
on_device_model.mojom.OnDeviceModelRequest = on_device_model.mojom.OnDeviceModelPendingReceiver;


// Interface: TextSafetySession
on_device_model.mojom.TextSafetySession = {};

on_device_model.mojom.TextSafetySessionPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

on_device_model.mojom.TextSafetySessionRemote = class {
  static get $interfaceName() {
    return 'on_device_model.mojom.TextSafetySession';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      on_device_model.mojom.TextSafetySessionPendingReceiver,
      handle);
    this.$ = new on_device_model.mojom.TextSafetySessionRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

on_device_model.mojom.TextSafetySessionRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

on_device_model.mojom.TextSafetySession.getRemote = function() {
  let remote = new on_device_model.mojom.TextSafetySessionRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'on_device_model.mojom.TextSafetySession',
    'context');
  return remote.$;
};

// Legacy compatibility
on_device_model.mojom.TextSafetySessionPtr = on_device_model.mojom.TextSafetySessionRemote;
on_device_model.mojom.TextSafetySessionRequest = on_device_model.mojom.TextSafetySessionPendingReceiver;


// Interface: TextSafetyModel
on_device_model.mojom.TextSafetyModel = {};

on_device_model.mojom.TextSafetyModelPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

on_device_model.mojom.TextSafetyModelRemote = class {
  static get $interfaceName() {
    return 'on_device_model.mojom.TextSafetyModel';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      on_device_model.mojom.TextSafetyModelPendingReceiver,
      handle);
    this.$ = new on_device_model.mojom.TextSafetyModelRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

on_device_model.mojom.TextSafetyModelRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

on_device_model.mojom.TextSafetyModel.getRemote = function() {
  let remote = new on_device_model.mojom.TextSafetyModelRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'on_device_model.mojom.TextSafetyModel',
    'context');
  return remote.$;
};

// Legacy compatibility
on_device_model.mojom.TextSafetyModelPtr = on_device_model.mojom.TextSafetyModelRemote;
on_device_model.mojom.TextSafetyModelRequest = on_device_model.mojom.TextSafetyModelPendingReceiver;


// Interface: AsrStreamResponder
on_device_model.mojom.AsrStreamResponder = {};

on_device_model.mojom.AsrStreamResponderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

on_device_model.mojom.AsrStreamResponderRemote = class {
  static get $interfaceName() {
    return 'on_device_model.mojom.AsrStreamResponder';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      on_device_model.mojom.AsrStreamResponderPendingReceiver,
      handle);
    this.$ = new on_device_model.mojom.AsrStreamResponderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

on_device_model.mojom.AsrStreamResponderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

on_device_model.mojom.AsrStreamResponder.getRemote = function() {
  let remote = new on_device_model.mojom.AsrStreamResponderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'on_device_model.mojom.AsrStreamResponder',
    'context');
  return remote.$;
};

// Legacy compatibility
on_device_model.mojom.AsrStreamResponderPtr = on_device_model.mojom.AsrStreamResponderRemote;
on_device_model.mojom.AsrStreamResponderRequest = on_device_model.mojom.AsrStreamResponderPendingReceiver;


// Interface: AsrStreamInput
on_device_model.mojom.AsrStreamInput = {};

on_device_model.mojom.AsrStreamInputPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

on_device_model.mojom.AsrStreamInputRemote = class {
  static get $interfaceName() {
    return 'on_device_model.mojom.AsrStreamInput';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      on_device_model.mojom.AsrStreamInputPendingReceiver,
      handle);
    this.$ = new on_device_model.mojom.AsrStreamInputRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

on_device_model.mojom.AsrStreamInputRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

on_device_model.mojom.AsrStreamInput.getRemote = function() {
  let remote = new on_device_model.mojom.AsrStreamInputRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'on_device_model.mojom.AsrStreamInput',
    'context');
  return remote.$;
};

// Legacy compatibility
on_device_model.mojom.AsrStreamInputPtr = on_device_model.mojom.AsrStreamInputRemote;
on_device_model.mojom.AsrStreamInputRequest = on_device_model.mojom.AsrStreamInputPendingReceiver;

