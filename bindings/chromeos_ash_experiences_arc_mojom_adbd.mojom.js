// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/adbd.mojom
// Module: arc.mojom

'use strict';

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};

arc.mojom.AdbdMonitorHost = {};
arc.mojom.AdbdMonitorHost.$interfaceName = 'arc.mojom.AdbdMonitorHost';
arc.mojom.AdbdMonitorHost_AdbdStarted_ParamsSpec = { $: {} };
arc.mojom.AdbdMonitorHost_AdbdStopped_ParamsSpec = { $: {} };
arc.mojom.AdbdMonitorInstance = {};
arc.mojom.AdbdMonitorInstance.$interfaceName = 'arc.mojom.AdbdMonitorInstance';
arc.mojom.AdbdMonitorInstance_Init_ParamsSpec = { $: {} };
arc.mojom.AdbdMonitorInstance_Init_ResponseParamsSpec = { $: {} };

// Interface: AdbdMonitorHost
mojo.internal.Struct(
    arc.mojom.AdbdMonitorHost_AdbdStarted_ParamsSpec, 'arc.mojom.AdbdMonitorHost_AdbdStarted_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    arc.mojom.AdbdMonitorHost_AdbdStopped_ParamsSpec, 'arc.mojom.AdbdMonitorHost_AdbdStopped_Params', [
    ],
    [[0, 8]]);

arc.mojom.AdbdMonitorHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.AdbdMonitorHostRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.AdbdMonitorHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.AdbdMonitorHostPendingReceiver,
      handle);
    this.$ = new arc.mojom.AdbdMonitorHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.AdbdMonitorHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  adbdStarted() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      arc.mojom.AdbdMonitorHost_AdbdStarted_ParamsSpec,
      null,
      [],
      false);
  }

  adbdStopped() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      arc.mojom.AdbdMonitorHost_AdbdStopped_ParamsSpec,
      null,
      [],
      false);
  }

};

arc.mojom.AdbdMonitorHost.getRemote = function() {
  let remote = new arc.mojom.AdbdMonitorHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.AdbdMonitorHost',
    'context');
  return remote.$;
};

arc.mojom.AdbdMonitorHostReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(handle);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = arc.mojom.AdbdMonitorHost_AdbdStarted_ParamsSpec.$.decode(message.payload);
          const result = this.impl.adbdStarted();
          break;
        }
        case 1: {
          const params = arc.mojom.AdbdMonitorHost_AdbdStopped_ParamsSpec.$.decode(message.payload);
          const result = this.impl.adbdStopped();
          break;
        }
      }
    });
  }
};

arc.mojom.AdbdMonitorHostReceiver = arc.mojom.AdbdMonitorHostReceiver;

arc.mojom.AdbdMonitorHostPtr = arc.mojom.AdbdMonitorHostRemote;
arc.mojom.AdbdMonitorHostRequest = arc.mojom.AdbdMonitorHostPendingReceiver;


// Interface: AdbdMonitorInstance
mojo.internal.Struct(
    arc.mojom.AdbdMonitorInstance_Init_ParamsSpec, 'arc.mojom.AdbdMonitorInstance_Init_Params', [
      mojo.internal.StructField('host_remote', 0, 0, mojo.internal.InterfaceProxy(arc.mojom.AdbdMonitorHostSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.AdbdMonitorInstance_Init_ResponseParamsSpec, 'arc.mojom.AdbdMonitorInstance_Init_ResponseParams', [
    ],
    [[0, 8]]);

arc.mojom.AdbdMonitorInstancePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.AdbdMonitorInstanceRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.AdbdMonitorInstance';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.AdbdMonitorInstancePendingReceiver,
      handle);
    this.$ = new arc.mojom.AdbdMonitorInstanceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.AdbdMonitorInstanceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  init(host_remote) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      arc.mojom.AdbdMonitorInstance_Init_ParamsSpec,
      arc.mojom.AdbdMonitorInstance_Init_ResponseParamsSpec,
      [host_remote],
      false);
  }

};

arc.mojom.AdbdMonitorInstance.getRemote = function() {
  let remote = new arc.mojom.AdbdMonitorInstanceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.AdbdMonitorInstance',
    'context');
  return remote.$;
};

arc.mojom.AdbdMonitorInstanceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(handle);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = arc.mojom.AdbdMonitorInstance_Init_ParamsSpec.$.decode(message.payload);
          const result = this.impl.init(params.host_remote);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(
                this.endpoint, header.requestId, arc.mojom.AdbdMonitorInstance_Init_ResponseParamsSpec);
               responder(response);
            }});
          }
          break;
        }
      }
    });
  }
};

arc.mojom.AdbdMonitorInstanceReceiver = arc.mojom.AdbdMonitorInstanceReceiver;

arc.mojom.AdbdMonitorInstancePtr = arc.mojom.AdbdMonitorInstanceRemote;
arc.mojom.AdbdMonitorInstanceRequest = arc.mojom.AdbdMonitorInstancePendingReceiver;

