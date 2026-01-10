// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/obb_mounter.mojom
// Module: arc.mojom

'use strict';

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};

arc.mojom.ObbMounterHost = {};
arc.mojom.ObbMounterHost.$interfaceName = 'arc.mojom.ObbMounterHost';
arc.mojom.ObbMounterHost_MountObb_ParamsSpec = { $: {} };
arc.mojom.ObbMounterHost_MountObb_ResponseParamsSpec = { $: {} };
arc.mojom.ObbMounterHost_UnmountObb_ParamsSpec = { $: {} };
arc.mojom.ObbMounterHost_UnmountObb_ResponseParamsSpec = { $: {} };
arc.mojom.ObbMounterInstance = {};
arc.mojom.ObbMounterInstance.$interfaceName = 'arc.mojom.ObbMounterInstance';
arc.mojom.ObbMounterInstance_Init_ParamsSpec = { $: {} };
arc.mojom.ObbMounterInstance_Init_ResponseParamsSpec = { $: {} };

// Interface: ObbMounterHost
mojo.internal.Struct(
    arc.mojom.ObbMounterHost_MountObb_ParamsSpec, 'arc.mojom.ObbMounterHost_MountObb_Params', [
      mojo.internal.StructField('obb_file', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('target_path', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('owner_gid', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    arc.mojom.ObbMounterHost_MountObb_ResponseParamsSpec, 'arc.mojom.ObbMounterHost_MountObb_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.ObbMounterHost_UnmountObb_ParamsSpec, 'arc.mojom.ObbMounterHost_UnmountObb_Params', [
      mojo.internal.StructField('target_path', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.ObbMounterHost_UnmountObb_ResponseParamsSpec, 'arc.mojom.ObbMounterHost_UnmountObb_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

arc.mojom.ObbMounterHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.ObbMounterHostRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.ObbMounterHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.ObbMounterHostPendingReceiver,
      handle);
    this.$ = new arc.mojom.ObbMounterHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.ObbMounterHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  mountObb(obb_file, target_path, owner_gid) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      arc.mojom.ObbMounterHost_MountObb_ParamsSpec,
      arc.mojom.ObbMounterHost_MountObb_ResponseParamsSpec,
      [obb_file, target_path, owner_gid],
      false);
  }

  unmountObb(target_path) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      arc.mojom.ObbMounterHost_UnmountObb_ParamsSpec,
      arc.mojom.ObbMounterHost_UnmountObb_ResponseParamsSpec,
      [target_path],
      false);
  }

};

arc.mojom.ObbMounterHost.getRemote = function() {
  let remote = new arc.mojom.ObbMounterHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.ObbMounterHost',
    'context');
  return remote.$;
};

arc.mojom.ObbMounterHostReceiver = class {
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
          const params = arc.mojom.ObbMounterHost_MountObb_ParamsSpec.$.decode(message.payload);
          const result = this.impl.mountObb(params.obb_file, params.target_path, params.owner_gid);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.ObbMounterHost_MountObb_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const params = arc.mojom.ObbMounterHost_UnmountObb_ParamsSpec.$.decode(message.payload);
          const result = this.impl.unmountObb(params.target_path);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.ObbMounterHost_UnmountObb_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
    });
  }
};

arc.mojom.ObbMounterHostReceiver = arc.mojom.ObbMounterHostReceiver;

arc.mojom.ObbMounterHostPtr = arc.mojom.ObbMounterHostRemote;
arc.mojom.ObbMounterHostRequest = arc.mojom.ObbMounterHostPendingReceiver;


// Interface: ObbMounterInstance
mojo.internal.Struct(
    arc.mojom.ObbMounterInstance_Init_ParamsSpec, 'arc.mojom.ObbMounterInstance_Init_Params', [
      mojo.internal.StructField('host_remote', 0, 0, mojo.internal.InterfaceProxy(arc.mojom.ObbMounterHostSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.ObbMounterInstance_Init_ResponseParamsSpec, 'arc.mojom.ObbMounterInstance_Init_ResponseParams', [
    ],
    [[0, 8]]);

arc.mojom.ObbMounterInstancePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.ObbMounterInstanceRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.ObbMounterInstance';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.ObbMounterInstancePendingReceiver,
      handle);
    this.$ = new arc.mojom.ObbMounterInstanceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.ObbMounterInstanceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  init(host_remote) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      arc.mojom.ObbMounterInstance_Init_ParamsSpec,
      arc.mojom.ObbMounterInstance_Init_ResponseParamsSpec,
      [host_remote],
      false);
  }

};

arc.mojom.ObbMounterInstance.getRemote = function() {
  let remote = new arc.mojom.ObbMounterInstanceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.ObbMounterInstance',
    'context');
  return remote.$;
};

arc.mojom.ObbMounterInstanceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(handle);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 1: {
          const params = arc.mojom.ObbMounterInstance_Init_ParamsSpec.$.decode(message.payload);
          const result = this.impl.init(params.host_remote);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.ObbMounterInstance_Init_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
    });
  }
};

arc.mojom.ObbMounterInstanceReceiver = arc.mojom.ObbMounterInstanceReceiver;

arc.mojom.ObbMounterInstancePtr = arc.mojom.ObbMounterInstanceRemote;
arc.mojom.ObbMounterInstanceRequest = arc.mojom.ObbMounterInstancePendingReceiver;

