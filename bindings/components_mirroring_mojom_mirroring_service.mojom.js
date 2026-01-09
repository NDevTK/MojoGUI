// Auto-generated MojoJS binding
// Source: chromium_src/components/mirroring/mojom/mirroring_service.mojom
// Module: mirroring.mojom

'use strict';

// Module namespace
var mirroring = mirroring || {};
mirroring.mojom = mirroring.mojom || {};


// Interface: MirroringService
mirroring.mojom.MirroringService = {};

mirroring.mojom.MirroringServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mirroring.mojom.MirroringServiceRemote = class {
  static get $interfaceName() {
    return 'mirroring.mojom.MirroringService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mirroring.mojom.MirroringServicePendingReceiver,
      handle);
    this.$ = new mirroring.mojom.MirroringServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

mirroring.mojom.MirroringServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  start(params, max_resolution, observer, resource_provider, outbound_channel, inbound_channel) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      mirroring.mojom.MirroringService_Start_ParamsSpec,
      null,
      [params, max_resolution, observer, resource_provider, outbound_channel, inbound_channel]);
  }

  switchMirroringSourceTab() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      mirroring.mojom.MirroringService_SwitchMirroringSourceTab_ParamsSpec,
      null,
      []);
  }

  getMirroringStats() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      mirroring.mojom.MirroringService_GetMirroringStats_ParamsSpec,
      mirroring.mojom.MirroringService_GetMirroringStats_ResponseParamsSpec,
      []);
  }

};

mirroring.mojom.MirroringService.getRemote = function() {
  let remote = new mirroring.mojom.MirroringServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'mirroring.mojom.MirroringService',
    'context');
  return remote.$;
};

// ParamsSpec for Start
mirroring.mojom.MirroringService_Start_ParamsSpec = {
  $: {
    structSpec: {
      name: 'mirroring.mojom.MirroringService.Start_Params',
      packedSize: 56,
      fields: [
        { name: 'params', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'max_resolution', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'observer', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
        { name: 'resource_provider', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
        { name: 'outbound_channel', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
        { name: 'inbound_channel', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SwitchMirroringSourceTab
mirroring.mojom.MirroringService_SwitchMirroringSourceTab_ParamsSpec = {
  $: {
    structSpec: {
      name: 'mirroring.mojom.MirroringService.SwitchMirroringSourceTab_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetMirroringStats
mirroring.mojom.MirroringService_GetMirroringStats_ParamsSpec = {
  $: {
    structSpec: {
      name: 'mirroring.mojom.MirroringService.GetMirroringStats_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

mirroring.mojom.MirroringService_GetMirroringStats_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'mirroring.mojom.MirroringService.GetMirroringStats_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'json_stats', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
mirroring.mojom.MirroringServicePtr = mirroring.mojom.MirroringServiceRemote;
mirroring.mojom.MirroringServiceRequest = mirroring.mojom.MirroringServicePendingReceiver;

