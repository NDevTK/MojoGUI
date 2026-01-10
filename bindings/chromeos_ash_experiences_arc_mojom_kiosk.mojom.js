// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/kiosk.mojom
// Module: arc.mojom

'use strict';

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};

arc.mojom.KioskHost = {};
arc.mojom.KioskHost.$interfaceName = 'arc.mojom.KioskHost';
arc.mojom.KioskHost_OnMaintenanceSessionCreated_ParamsSpec = { $: {} };
arc.mojom.KioskHost_OnMaintenanceSessionFinished_ParamsSpec = { $: {} };
arc.mojom.KioskInstance = {};
arc.mojom.KioskInstance.$interfaceName = 'arc.mojom.KioskInstance';
arc.mojom.KioskInstance_Init_ParamsSpec = { $: {} };
arc.mojom.KioskInstance_Init_ResponseParamsSpec = { $: {} };

// Interface: KioskHost
mojo.internal.Struct(
    arc.mojom.KioskHost_OnMaintenanceSessionCreated_ParamsSpec, 'arc.mojom.KioskHost_OnMaintenanceSessionCreated_Params', [
      mojo.internal.StructField('session_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.KioskHost_OnMaintenanceSessionFinished_ParamsSpec, 'arc.mojom.KioskHost_OnMaintenanceSessionFinished_Params', [
      mojo.internal.StructField('session_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('succeeded', 4, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

arc.mojom.KioskHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.KioskHostRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.KioskHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.KioskHostPendingReceiver,
      handle);
    this.$ = new arc.mojom.KioskHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.KioskHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onMaintenanceSessionCreated(session_id) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      arc.mojom.KioskHost_OnMaintenanceSessionCreated_ParamsSpec,
      null,
      [session_id],
      false);
  }

  onMaintenanceSessionFinished(session_id, succeeded) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      arc.mojom.KioskHost_OnMaintenanceSessionFinished_ParamsSpec,
      null,
      [session_id, succeeded],
      false);
  }

};

arc.mojom.KioskHost.getRemote = function() {
  let remote = new arc.mojom.KioskHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.KioskHost',
    'context');
  return remote.$;
};

arc.mojom.KioskHostReceiver = class {
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
        case 0: {
          const params = arc.mojom.KioskHost_OnMaintenanceSessionCreated_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onMaintenanceSessionCreated(params.session_id);
          break;
        }
        case 1: {
          const params = arc.mojom.KioskHost_OnMaintenanceSessionFinished_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onMaintenanceSessionFinished(params.session_id, params.succeeded);
          break;
        }
      }
    }});
  }
};

arc.mojom.KioskHostReceiver = arc.mojom.KioskHostReceiver;

arc.mojom.KioskHostPtr = arc.mojom.KioskHostRemote;
arc.mojom.KioskHostRequest = arc.mojom.KioskHostPendingReceiver;


// Interface: KioskInstance
mojo.internal.Struct(
    arc.mojom.KioskInstance_Init_ParamsSpec, 'arc.mojom.KioskInstance_Init_Params', [
      mojo.internal.StructField('host_remote', 0, 0, mojo.internal.InterfaceProxy(arc.mojom.KioskHostSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.KioskInstance_Init_ResponseParamsSpec, 'arc.mojom.KioskInstance_Init_ResponseParams', [
    ],
    [[0, 8]]);

arc.mojom.KioskInstancePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.KioskInstanceRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.KioskInstance';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.KioskInstancePendingReceiver,
      handle);
    this.$ = new arc.mojom.KioskInstanceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.KioskInstanceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  init(host_remote) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      arc.mojom.KioskInstance_Init_ParamsSpec,
      arc.mojom.KioskInstance_Init_ResponseParamsSpec,
      [host_remote],
      false);
  }

};

arc.mojom.KioskInstance.getRemote = function() {
  let remote = new arc.mojom.KioskInstanceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.KioskInstance',
    'context');
  return remote.$;
};

arc.mojom.KioskInstanceReceiver = class {
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
        case 0: {
          const params = arc.mojom.KioskInstance_Init_ParamsSpec.$.decode(message.payload);
          const result = this.impl.init(params.host_remote);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.KioskInstance_Init_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
    }});
  }
};

arc.mojom.KioskInstanceReceiver = arc.mojom.KioskInstanceReceiver;

arc.mojom.KioskInstancePtr = arc.mojom.KioskInstanceRemote;
arc.mojom.KioskInstanceRequest = arc.mojom.KioskInstancePendingReceiver;

