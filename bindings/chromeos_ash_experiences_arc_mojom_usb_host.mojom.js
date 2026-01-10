// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/usb_host.mojom
// Module: arc.mojom

'use strict';

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};
var device = device || {};

arc.mojom.UsbHostHost = {};
arc.mojom.UsbHostHost.$interfaceName = 'arc.mojom.UsbHostHost';
arc.mojom.UsbHostHost_OpenDevice_ParamsSpec = { $: {} };
arc.mojom.UsbHostHost_OpenDevice_ResponseParamsSpec = { $: {} };
arc.mojom.UsbHostHost_GetDeviceInfo_ParamsSpec = { $: {} };
arc.mojom.UsbHostHost_GetDeviceInfo_ResponseParamsSpec = { $: {} };
arc.mojom.UsbHostHost_RequestPermission_ParamsSpec = { $: {} };
arc.mojom.UsbHostHost_RequestPermission_ResponseParamsSpec = { $: {} };
arc.mojom.UsbHostInstance = {};
arc.mojom.UsbHostInstance.$interfaceName = 'arc.mojom.UsbHostInstance';
arc.mojom.UsbHostInstance_Init_ParamsSpec = { $: {} };
arc.mojom.UsbHostInstance_Init_ResponseParamsSpec = { $: {} };
arc.mojom.UsbHostInstance_OnDeviceAdded_ParamsSpec = { $: {} };
arc.mojom.UsbHostInstance_OnDeviceRemoved_ParamsSpec = { $: {} };

// Interface: UsbHostHost
mojo.internal.Struct(
    arc.mojom.UsbHostHost_OpenDevice_ParamsSpec, 'arc.mojom.UsbHostHost_OpenDevice_Params', [
      mojo.internal.StructField('guid', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('pkg_name', 8, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    arc.mojom.UsbHostHost_OpenDevice_ResponseParamsSpec, 'arc.mojom.UsbHostHost_OpenDevice_ResponseParams', [
      mojo.internal.StructField('usb_fd', 0, 0, mojo.internal.Handle, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.UsbHostHost_GetDeviceInfo_ParamsSpec, 'arc.mojom.UsbHostHost_GetDeviceInfo_Params', [
      mojo.internal.StructField('guid', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.UsbHostHost_GetDeviceInfo_ResponseParamsSpec, 'arc.mojom.UsbHostHost_GetDeviceInfo_ResponseParams', [
      mojo.internal.StructField('device_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('info', 8, 0, device.mojom.UsbDeviceInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    arc.mojom.UsbHostHost_RequestPermission_ParamsSpec, 'arc.mojom.UsbHostHost_RequestPermission_Params', [
      mojo.internal.StructField('guid', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('pkg_name', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('interactive', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    arc.mojom.UsbHostHost_RequestPermission_ResponseParamsSpec, 'arc.mojom.UsbHostHost_RequestPermission_ResponseParams', [
      mojo.internal.StructField('authorized', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

arc.mojom.UsbHostHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.UsbHostHostRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.UsbHostHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.UsbHostHostPendingReceiver,
      handle);
    this.$ = new arc.mojom.UsbHostHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.UsbHostHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  openDevice(guid, pkg_name) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      arc.mojom.UsbHostHost_OpenDevice_ParamsSpec,
      arc.mojom.UsbHostHost_OpenDevice_ResponseParamsSpec,
      [guid, pkg_name],
      false);
  }

  getDeviceInfo(guid) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      arc.mojom.UsbHostHost_GetDeviceInfo_ParamsSpec,
      arc.mojom.UsbHostHost_GetDeviceInfo_ResponseParamsSpec,
      [guid],
      false);
  }

  requestPermission(guid, pkg_name, interactive) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      arc.mojom.UsbHostHost_RequestPermission_ParamsSpec,
      arc.mojom.UsbHostHost_RequestPermission_ResponseParamsSpec,
      [guid, pkg_name, interactive],
      false);
  }

};

arc.mojom.UsbHostHost.getRemote = function() {
  let remote = new arc.mojom.UsbHostHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.UsbHostHost',
    'context');
  return remote.$;
};

arc.mojom.UsbHostHostReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(handle);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 3: {
          const params = arc.mojom.UsbHostHost_OpenDevice_ParamsSpec.$.decode(message.payload);
          const result = this.impl.openDevice(params.guid, params.pkg_name);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(
                this.endpoint, header.requestId, arc.mojom.UsbHostHost_OpenDevice_ResponseParamsSpec);
               responder(response);
            }});
          }
          break;
        }
        case 1: {
          const params = arc.mojom.UsbHostHost_GetDeviceInfo_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getDeviceInfo(params.guid);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(
                this.endpoint, header.requestId, arc.mojom.UsbHostHost_GetDeviceInfo_ResponseParamsSpec);
               responder(response);
            }});
          }
          break;
        }
        case 2: {
          const params = arc.mojom.UsbHostHost_RequestPermission_ParamsSpec.$.decode(message.payload);
          const result = this.impl.requestPermission(params.guid, params.pkg_name, params.interactive);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(
                this.endpoint, header.requestId, arc.mojom.UsbHostHost_RequestPermission_ResponseParamsSpec);
               responder(response);
            }});
          }
          break;
        }
      }
    });
  }
};

arc.mojom.UsbHostHostReceiver = arc.mojom.UsbHostHostReceiver;

arc.mojom.UsbHostHostPtr = arc.mojom.UsbHostHostRemote;
arc.mojom.UsbHostHostRequest = arc.mojom.UsbHostHostPendingReceiver;


// Interface: UsbHostInstance
mojo.internal.Struct(
    arc.mojom.UsbHostInstance_Init_ParamsSpec, 'arc.mojom.UsbHostInstance_Init_Params', [
      mojo.internal.StructField('host_remote', 0, 0, mojo.internal.InterfaceProxy(arc.mojom.UsbHostHostSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.UsbHostInstance_Init_ResponseParamsSpec, 'arc.mojom.UsbHostInstance_Init_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    arc.mojom.UsbHostInstance_OnDeviceAdded_ParamsSpec, 'arc.mojom.UsbHostInstance_OnDeviceAdded_Params', [
      mojo.internal.StructField('guid', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('event_receiver_packages', 8, 0, mojo.internal.Array(mojo.internal.String, false), null, true, 2, undefined),
    ],
    [[0, 16], [2, 24]]);

mojo.internal.Struct(
    arc.mojom.UsbHostInstance_OnDeviceRemoved_ParamsSpec, 'arc.mojom.UsbHostInstance_OnDeviceRemoved_Params', [
      mojo.internal.StructField('guid', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('event_receiver_packages', 8, 0, mojo.internal.Array(mojo.internal.String, false), null, true, 2, undefined),
    ],
    [[0, 16], [2, 24]]);

arc.mojom.UsbHostInstancePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.UsbHostInstanceRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.UsbHostInstance';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.UsbHostInstancePendingReceiver,
      handle);
    this.$ = new arc.mojom.UsbHostInstanceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.UsbHostInstanceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  init(host_remote) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      arc.mojom.UsbHostInstance_Init_ParamsSpec,
      arc.mojom.UsbHostInstance_Init_ResponseParamsSpec,
      [host_remote],
      false);
  }

  onDeviceAdded(guid, event_receiver_packages) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      arc.mojom.UsbHostInstance_OnDeviceAdded_ParamsSpec,
      null,
      [guid, event_receiver_packages],
      false);
  }

  onDeviceRemoved(guid, event_receiver_packages) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      arc.mojom.UsbHostInstance_OnDeviceRemoved_ParamsSpec,
      null,
      [guid, event_receiver_packages],
      false);
  }

};

arc.mojom.UsbHostInstance.getRemote = function() {
  let remote = new arc.mojom.UsbHostInstanceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.UsbHostInstance',
    'context');
  return remote.$;
};

arc.mojom.UsbHostInstanceReceiver = class {
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
          const params = arc.mojom.UsbHostInstance_Init_ParamsSpec.$.decode(message.payload);
          const result = this.impl.init(params.host_remote);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(
                this.endpoint, header.requestId, arc.mojom.UsbHostInstance_Init_ResponseParamsSpec);
               responder(response);
            }});
          }
          break;
        }
        case 1: {
          const params = arc.mojom.UsbHostInstance_OnDeviceAdded_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onDeviceAdded(params.guid, params.event_receiver_packages);
          break;
        }
        case 2: {
          const params = arc.mojom.UsbHostInstance_OnDeviceRemoved_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onDeviceRemoved(params.guid, params.event_receiver_packages);
          break;
        }
      }
    });
  }
};

arc.mojom.UsbHostInstanceReceiver = arc.mojom.UsbHostInstanceReceiver;

arc.mojom.UsbHostInstancePtr = arc.mojom.UsbHostInstanceRemote;
arc.mojom.UsbHostInstanceRequest = arc.mojom.UsbHostInstancePendingReceiver;

