// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/on_device_safety.mojom
// Module: arc.mojom

'use strict';

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};
var ash = ash || {};
var mojo_base = mojo_base || {};

arc.mojom.GetArcSafetySessionResultSpec = { $: mojo.internal.Enum() };
arc.mojom.OnDeviceSafetyHost = {};
arc.mojom.OnDeviceSafetyHost.$interfaceName = 'arc.mojom.OnDeviceSafetyHost';
arc.mojom.OnDeviceSafetyHost_IsCrosSafetyServiceEnabled_ParamsSpec = { $: {} };
arc.mojom.OnDeviceSafetyHost_IsCrosSafetyServiceEnabled_ResponseParamsSpec = { $: {} };
arc.mojom.OnDeviceSafetyInstance = {};
arc.mojom.OnDeviceSafetyInstance.$interfaceName = 'arc.mojom.OnDeviceSafetyInstance';
arc.mojom.OnDeviceSafetyInstance_GetArcSafetySession_ParamsSpec = { $: {} };
arc.mojom.OnDeviceSafetyInstance_GetArcSafetySession_ResponseParamsSpec = { $: {} };
arc.mojom.OnDeviceSafetyInstance_Init_ParamsSpec = { $: {} };
arc.mojom.OnDeviceSafetyInstance_Init_ResponseParamsSpec = { $: {} };

// Enum: GetArcSafetySessionResult
arc.mojom.GetArcSafetySessionResult = {
  kOk: 0,
  kGenericError: 1,
  kSafetyServiceNotFound: 2,
  kBindSafetyServiceError: 3,
  MinVersion: 3,
};

// Interface: OnDeviceSafetyHost
mojo.internal.Struct(
    arc.mojom.OnDeviceSafetyHost_IsCrosSafetyServiceEnabled_ParamsSpec, 'arc.mojom.OnDeviceSafetyHost_IsCrosSafetyServiceEnabled_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    arc.mojom.OnDeviceSafetyHost_IsCrosSafetyServiceEnabled_ResponseParamsSpec, 'arc.mojom.OnDeviceSafetyHost_IsCrosSafetyServiceEnabled_ResponseParams', [
      mojo.internal.StructField('is_enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

arc.mojom.OnDeviceSafetyHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.OnDeviceSafetyHostRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.OnDeviceSafetyHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.OnDeviceSafetyHostPendingReceiver,
      handle);
    this.$ = new arc.mojom.OnDeviceSafetyHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.OnDeviceSafetyHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  isCrosSafetyServiceEnabled() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      arc.mojom.OnDeviceSafetyHost_IsCrosSafetyServiceEnabled_ParamsSpec,
      arc.mojom.OnDeviceSafetyHost_IsCrosSafetyServiceEnabled_ResponseParamsSpec,
      [],
      false);
  }

};

arc.mojom.OnDeviceSafetyHost.getRemote = function() {
  let remote = new arc.mojom.OnDeviceSafetyHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.OnDeviceSafetyHost',
    'context');
  return remote.$;
};

arc.mojom.OnDeviceSafetyHostReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      console.log('[GeneratedReceiver] Args received:', args);
      const message = args[0];
      if (args.length > 1) { console.log('[GeneratedReceiver] 2nd Arg:', args[1]); }
      const header = message && message.header;
      if (!header) { console.warn('[GeneratedReceiver] No header in arg0'); }
      if (header) {
      console.log('[GeneratedReceiver] Header ordinal:', header.ordinal);
      switch (header.ordinal) {
        case 0: {
          const params = arc.mojom.OnDeviceSafetyHost_IsCrosSafetyServiceEnabled_ParamsSpec.$.decode(message.payload);
          const result = this.impl.isCrosSafetyServiceEnabled();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.OnDeviceSafetyHost_IsCrosSafetyServiceEnabled_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
      }
    }});
  }
};

arc.mojom.OnDeviceSafetyHostReceiver = arc.mojom.OnDeviceSafetyHostReceiver;

arc.mojom.OnDeviceSafetyHostPtr = arc.mojom.OnDeviceSafetyHostRemote;
arc.mojom.OnDeviceSafetyHostRequest = arc.mojom.OnDeviceSafetyHostPendingReceiver;


// Interface: OnDeviceSafetyInstance
mojo.internal.Struct(
    arc.mojom.OnDeviceSafetyInstance_GetArcSafetySession_ParamsSpec, 'arc.mojom.OnDeviceSafetyInstance_GetArcSafetySession_Params', [
      mojo.internal.StructField('session', 0, 0, mojo.internal.InterfaceRequest(ash.cros_safety.mojom.OnDeviceSafetySessionRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.OnDeviceSafetyInstance_GetArcSafetySession_ResponseParamsSpec, 'arc.mojom.OnDeviceSafetyInstance_GetArcSafetySession_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, arc.mojom.GetArcSafetySessionResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.OnDeviceSafetyInstance_Init_ParamsSpec, 'arc.mojom.OnDeviceSafetyInstance_Init_Params', [
      mojo.internal.StructField('host_remote', 0, 0, mojo.internal.InterfaceProxy(arc.mojom.OnDeviceSafetyHostSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.OnDeviceSafetyInstance_Init_ResponseParamsSpec, 'arc.mojom.OnDeviceSafetyInstance_Init_ResponseParams', [
    ],
    [[0, 8]]);

arc.mojom.OnDeviceSafetyInstancePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.OnDeviceSafetyInstanceRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.OnDeviceSafetyInstance';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.OnDeviceSafetyInstancePendingReceiver,
      handle);
    this.$ = new arc.mojom.OnDeviceSafetyInstanceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.OnDeviceSafetyInstanceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getArcSafetySession(session) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      arc.mojom.OnDeviceSafetyInstance_GetArcSafetySession_ParamsSpec,
      arc.mojom.OnDeviceSafetyInstance_GetArcSafetySession_ResponseParamsSpec,
      [session],
      false);
  }

  init(host_remote) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      arc.mojom.OnDeviceSafetyInstance_Init_ParamsSpec,
      arc.mojom.OnDeviceSafetyInstance_Init_ResponseParamsSpec,
      [host_remote],
      false);
  }

};

arc.mojom.OnDeviceSafetyInstance.getRemote = function() {
  let remote = new arc.mojom.OnDeviceSafetyInstanceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.OnDeviceSafetyInstance',
    'context');
  return remote.$;
};

arc.mojom.OnDeviceSafetyInstanceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      console.log('[GeneratedReceiver] Args received:', args);
      const message = args[0];
      if (args.length > 1) { console.log('[GeneratedReceiver] 2nd Arg:', args[1]); }
      const header = message && message.header;
      if (!header) { console.warn('[GeneratedReceiver] No header in arg0'); }
      if (header) {
      console.log('[GeneratedReceiver] Header ordinal:', header.ordinal);
      switch (header.ordinal) {
        case 0: {
          const params = arc.mojom.OnDeviceSafetyInstance_GetArcSafetySession_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getArcSafetySession(params.session);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.OnDeviceSafetyInstance_GetArcSafetySession_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const params = arc.mojom.OnDeviceSafetyInstance_Init_ParamsSpec.$.decode(message.payload);
          const result = this.impl.init(params.host_remote);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.OnDeviceSafetyInstance_Init_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
      }
    }});
  }
};

arc.mojom.OnDeviceSafetyInstanceReceiver = arc.mojom.OnDeviceSafetyInstanceReceiver;

arc.mojom.OnDeviceSafetyInstancePtr = arc.mojom.OnDeviceSafetyInstanceRemote;
arc.mojom.OnDeviceSafetyInstanceRequest = arc.mojom.OnDeviceSafetyInstancePendingReceiver;

