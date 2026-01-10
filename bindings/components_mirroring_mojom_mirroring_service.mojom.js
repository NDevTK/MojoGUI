// Auto-generated MojoJS binding
// Source: chromium_src/components/mirroring/mojom/mirroring_service.mojom
// Module: mirroring.mojom

'use strict';

// Module namespace
var mirroring = mirroring || {};
mirroring.mojom = mirroring.mojom || {};


mirroring.mojom.kMirroringSandbox = sandbox.mojom.Sandbox.kMirroring;

mirroring.mojom.kMirroringSandbox = sandbox.mojom.Sandbox.kHardwareVideoEncoding;

mirroring.mojom.kMirroringSandbox = sandbox.mojom.Sandbox.kService;

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
      packedSize: 40,
      fields: [
        { name: 'params', packedOffset: 0, packedBitOffset: 0, type: mirroring.mojom.SessionParametersSpec, nullable: false, minVersion: 0 },
        { name: 'max_resolution', packedOffset: 8, packedBitOffset: 0, type: gfx.mojom.SizeSpec, nullable: false, minVersion: 0 },
        { name: 'observer', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
        { name: 'resource_provider', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
        { name: 'outbound_channel', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
        { name: 'inbound_channel', packedOffset: 28, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
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
      versions: [{version: 0, packedSize: 8}]
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
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

mirroring.mojom.MirroringService_GetMirroringStats_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'mirroring.mojom.MirroringService.GetMirroringStats_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'json_stats', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.ValueSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
mirroring.mojom.MirroringServicePtr = mirroring.mojom.MirroringServiceRemote;
mirroring.mojom.MirroringServiceRequest = mirroring.mojom.MirroringServicePendingReceiver;

