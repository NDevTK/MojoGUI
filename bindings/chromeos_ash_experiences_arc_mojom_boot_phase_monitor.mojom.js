// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/boot_phase_monitor.mojom
// Module: arc.mojom

'use strict';

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};

arc.mojom.BootPhaseMonitorHost = {};
arc.mojom.BootPhaseMonitorHost.$interfaceName = 'arc.mojom.BootPhaseMonitorHost';
arc.mojom.BootPhaseMonitorHost_OnBootCompleted_ParamsSpec = { $: {} };
arc.mojom.BootPhaseMonitorInstance = {};
arc.mojom.BootPhaseMonitorInstance.$interfaceName = 'arc.mojom.BootPhaseMonitorInstance';
arc.mojom.BootPhaseMonitorInstance_Init_ParamsSpec = { $: {} };
arc.mojom.BootPhaseMonitorInstance_Init_ResponseParamsSpec = { $: {} };

// Interface: BootPhaseMonitorHost
mojo.internal.Struct(
    arc.mojom.BootPhaseMonitorHost_OnBootCompleted_ParamsSpec, 'arc.mojom.BootPhaseMonitorHost_OnBootCompleted_Params', [
    ],
    [[0, 8]]);

arc.mojom.BootPhaseMonitorHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.BootPhaseMonitorHostRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.BootPhaseMonitorHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.BootPhaseMonitorHostPendingReceiver,
      handle);
    this.$ = new arc.mojom.BootPhaseMonitorHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.BootPhaseMonitorHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onBootCompleted() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      arc.mojom.BootPhaseMonitorHost_OnBootCompleted_ParamsSpec,
      null,
      [],
      false);
  }

};

arc.mojom.BootPhaseMonitorHost.getRemote = function() {
  let remote = new arc.mojom.BootPhaseMonitorHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.BootPhaseMonitorHost',
    'context');
  return remote.$;
};

arc.mojom.BootPhaseMonitorHostReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        message = {
          header: args[1],
          buffer: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      switch (header.ordinal) {
        case 0: {
          const params = arc.mojom.BootPhaseMonitorHost_OnBootCompleted_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onBootCompleted();
          break;
        }
      }
    }});
  }
};

arc.mojom.BootPhaseMonitorHostReceiver = arc.mojom.BootPhaseMonitorHostReceiver;

arc.mojom.BootPhaseMonitorHostPtr = arc.mojom.BootPhaseMonitorHostRemote;
arc.mojom.BootPhaseMonitorHostRequest = arc.mojom.BootPhaseMonitorHostPendingReceiver;


// Interface: BootPhaseMonitorInstance
mojo.internal.Struct(
    arc.mojom.BootPhaseMonitorInstance_Init_ParamsSpec, 'arc.mojom.BootPhaseMonitorInstance_Init_Params', [
      mojo.internal.StructField('host_remote', 0, 0, mojo.internal.InterfaceProxy(arc.mojom.BootPhaseMonitorHostSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.BootPhaseMonitorInstance_Init_ResponseParamsSpec, 'arc.mojom.BootPhaseMonitorInstance_Init_ResponseParams', [
    ],
    [[0, 8]]);

arc.mojom.BootPhaseMonitorInstancePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.BootPhaseMonitorInstanceRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.BootPhaseMonitorInstance';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.BootPhaseMonitorInstancePendingReceiver,
      handle);
    this.$ = new arc.mojom.BootPhaseMonitorInstanceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.BootPhaseMonitorInstanceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  init(host_remote) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      arc.mojom.BootPhaseMonitorInstance_Init_ParamsSpec,
      arc.mojom.BootPhaseMonitorInstance_Init_ResponseParamsSpec,
      [host_remote],
      false);
  }

};

arc.mojom.BootPhaseMonitorInstance.getRemote = function() {
  let remote = new arc.mojom.BootPhaseMonitorInstanceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.BootPhaseMonitorInstance',
    'context');
  return remote.$;
};

arc.mojom.BootPhaseMonitorInstanceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        message = {
          header: args[1],
          buffer: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      switch (header.ordinal) {
        case 1: {
          const params = arc.mojom.BootPhaseMonitorInstance_Init_ParamsSpec.$.decode(message.payload);
          const result = this.impl.init(params.host_remote);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.BootPhaseMonitorInstance_Init_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
    }});
  }
};

arc.mojom.BootPhaseMonitorInstanceReceiver = arc.mojom.BootPhaseMonitorInstanceReceiver;

arc.mojom.BootPhaseMonitorInstancePtr = arc.mojom.BootPhaseMonitorInstanceRemote;
arc.mojom.BootPhaseMonitorInstanceRequest = arc.mojom.BootPhaseMonitorInstancePendingReceiver;

