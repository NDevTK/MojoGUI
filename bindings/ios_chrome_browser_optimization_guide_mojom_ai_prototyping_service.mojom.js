// Auto-generated MojoJS binding
// Source: chromium_src/ios/chrome/browser/optimization_guide/mojom/ai_prototyping_service.mojom
// Module: ai.mojom

'use strict';

// Module namespace
var ai = ai || {};
ai.mojom = ai.mojom || {};


// Interface: AIPrototypingService
ai.mojom.mojom.AIPrototypingService = {};

ai.mojom.mojom.AIPrototypingServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ai.mojom.mojom.AIPrototypingServiceRemote = class {
  static get $interfaceName() {
    return 'ai.mojom.AIPrototypingService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ai.mojom.mojom.AIPrototypingServicePendingReceiver,
      handle);
    this.$ = new ai.mojom.mojom.AIPrototypingServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ai.mojom.mojom.AIPrototypingServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  executeServerQuery(request) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ai.mojom.mojom.AIPrototypingService_ExecuteServerQuery_ParamsSpec,
      ai.mojom.mojom.AIPrototypingService_ExecuteServerQuery_ResponseParamsSpec,
      [request]);
  }

  executeOnDeviceQuery(request) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ai.mojom.mojom.AIPrototypingService_ExecuteOnDeviceQuery_ParamsSpec,
      ai.mojom.mojom.AIPrototypingService_ExecuteOnDeviceQuery_ResponseParamsSpec,
      [request]);
  }

};

ai.mojom.mojom.AIPrototypingService.getRemote = function() {
  let remote = new ai.mojom.mojom.AIPrototypingServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ai.mojom.AIPrototypingService',
    'context');
  return remote.$;
};

// ParamsSpec for ExecuteServerQuery
ai.mojom.mojom.AIPrototypingService_ExecuteServerQuery_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ai.mojom.AIPrototypingService.ExecuteServerQuery_Params',
      packedSize: 16,
      fields: [
        { name: 'request', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.ProtoWrapperSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

ai.mojom.mojom.AIPrototypingService_ExecuteServerQuery_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ai.mojom.AIPrototypingService.ExecuteServerQuery_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'output', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'logging_data', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.ProtoWrapperSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for ExecuteOnDeviceQuery
ai.mojom.mojom.AIPrototypingService_ExecuteOnDeviceQuery_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ai.mojom.AIPrototypingService.ExecuteOnDeviceQuery_Params',
      packedSize: 16,
      fields: [
        { name: 'request', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.ProtoWrapperSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

ai.mojom.mojom.AIPrototypingService_ExecuteOnDeviceQuery_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ai.mojom.AIPrototypingService.ExecuteOnDeviceQuery_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'output', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
ai.mojom.mojom.AIPrototypingServicePtr = ai.mojom.mojom.AIPrototypingServiceRemote;
ai.mojom.mojom.AIPrototypingServiceRequest = ai.mojom.mojom.AIPrototypingServicePendingReceiver;

