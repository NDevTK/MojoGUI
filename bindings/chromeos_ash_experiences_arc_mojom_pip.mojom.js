// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/pip.mojom
// Module: arc.mojom

'use strict';

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};

arc.mojom.ArcPipEventSpec = { $: mojo.internal.Enum() };
arc.mojom.PipHost = {};
arc.mojom.PipHost.$interfaceName = 'arc.mojom.PipHost';
arc.mojom.PipHost_OnPipEvent_ParamsSpec = { $: {} };
arc.mojom.PipInstance = {};
arc.mojom.PipInstance.$interfaceName = 'arc.mojom.PipInstance';
arc.mojom.PipInstance_Init_ParamsSpec = { $: {} };
arc.mojom.PipInstance_Init_ResponseParamsSpec = { $: {} };
arc.mojom.PipInstance_ClosePip_ParamsSpec = { $: {} };
arc.mojom.PipInstance_SetPipSuppressionStatus_ParamsSpec = { $: {} };

// Enum: ArcPipEvent
arc.mojom.ArcPipEvent = {
  ENTER: 0,
};

// Interface: PipHost
mojo.internal.Struct(
    arc.mojom.PipHost_OnPipEvent_ParamsSpec, 'arc.mojom.PipHost_OnPipEvent_Params', [
      mojo.internal.StructField('event', 0, 0, arc.mojom.ArcPipEventSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

arc.mojom.PipHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.PipHostRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.PipHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.PipHostPendingReceiver,
      handle);
    this.$ = new arc.mojom.PipHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.PipHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onPipEvent(event) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      arc.mojom.PipHost_OnPipEvent_ParamsSpec,
      null,
      [event],
      false);
  }

};

arc.mojom.PipHost.getRemote = function() {
  let remote = new arc.mojom.PipHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.PipHost',
    'context');
  return remote.$;
};

arc.mojom.PipHostReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = arc.mojom.PipHost_OnPipEvent_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onPipEvent(params.event);
          break;
        }
      }
    }});
  }
};

arc.mojom.PipHostReceiver = arc.mojom.PipHostReceiver;

arc.mojom.PipHostPtr = arc.mojom.PipHostRemote;
arc.mojom.PipHostRequest = arc.mojom.PipHostPendingReceiver;


// Interface: PipInstance
mojo.internal.Struct(
    arc.mojom.PipInstance_Init_ParamsSpec, 'arc.mojom.PipInstance_Init_Params', [
      mojo.internal.StructField('host_remote', 0, 0, mojo.internal.InterfaceProxy(arc.mojom.PipHostSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.PipInstance_Init_ResponseParamsSpec, 'arc.mojom.PipInstance_Init_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    arc.mojom.PipInstance_ClosePip_ParamsSpec, 'arc.mojom.PipInstance_ClosePip_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    arc.mojom.PipInstance_SetPipSuppressionStatus_ParamsSpec, 'arc.mojom.PipInstance_SetPipSuppressionStatus_Params', [
      mojo.internal.StructField('suppressed', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

arc.mojom.PipInstancePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.PipInstanceRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.PipInstance';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.PipInstancePendingReceiver,
      handle);
    this.$ = new arc.mojom.PipInstanceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.PipInstanceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  init(host_remote) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      arc.mojom.PipInstance_Init_ParamsSpec,
      arc.mojom.PipInstance_Init_ResponseParamsSpec,
      [host_remote],
      false);
  }

  closePip() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      arc.mojom.PipInstance_ClosePip_ParamsSpec,
      null,
      [],
      false);
  }

  setPipSuppressionStatus(suppressed) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      arc.mojom.PipInstance_SetPipSuppressionStatus_ParamsSpec,
      null,
      [suppressed],
      false);
  }

};

arc.mojom.PipInstance.getRemote = function() {
  let remote = new arc.mojom.PipInstanceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.PipInstance',
    'context');
  return remote.$;
};

arc.mojom.PipInstanceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = arc.mojom.PipInstance_Init_ParamsSpec.$.decode(message.payload);
          const result = this.impl.init(params.host_remote);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.PipInstance_Init_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const params = arc.mojom.PipInstance_ClosePip_ParamsSpec.$.decode(message.payload);
          const result = this.impl.closePip();
          break;
        }
        case 2: {
          const params = arc.mojom.PipInstance_SetPipSuppressionStatus_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setPipSuppressionStatus(params.suppressed);
          break;
        }
      }
    }});
  }
};

arc.mojom.PipInstanceReceiver = arc.mojom.PipInstanceReceiver;

arc.mojom.PipInstancePtr = arc.mojom.PipInstanceRemote;
arc.mojom.PipInstanceRequest = arc.mojom.PipInstancePendingReceiver;

