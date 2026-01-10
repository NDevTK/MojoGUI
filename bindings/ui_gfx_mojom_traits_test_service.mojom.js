// Auto-generated MojoJS binding
// Source: chromium_src/ui/gfx/mojom/traits_test_service.mojom
// Module: gfx.mojom

'use strict';

// Module namespace
var gfx = gfx || {};
gfx.mojom = gfx.mojom || {};


// Interface: TraitsTestService
gfx.mojom.TraitsTestService = {};

gfx.mojom.TraitsTestServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

gfx.mojom.TraitsTestServiceRemote = class {
  static get $interfaceName() {
    return 'gfx.mojom.TraitsTestService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      gfx.mojom.TraitsTestServicePendingReceiver,
      handle);
    this.$ = new gfx.mojom.TraitsTestServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

gfx.mojom.TraitsTestServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  echoSelectionBound(s) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      gfx.mojom.TraitsTestService_EchoSelectionBound_ParamsSpec,
      gfx.mojom.TraitsTestService_EchoSelectionBound_ResponseParamsSpec,
      [s]);
  }

  echoTransform(t) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      gfx.mojom.TraitsTestService_EchoTransform_ParamsSpec,
      gfx.mojom.TraitsTestService_EchoTransform_ResponseParamsSpec,
      [t]);
  }

  echoGpuMemoryBufferHandle(g) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      gfx.mojom.TraitsTestService_EchoGpuMemoryBufferHandle_ParamsSpec,
      gfx.mojom.TraitsTestService_EchoGpuMemoryBufferHandle_ResponseParamsSpec,
      [g]);
  }

  echoRRectF(t) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      gfx.mojom.TraitsTestService_EchoRRectF_ParamsSpec,
      gfx.mojom.TraitsTestService_EchoRRectF_ResponseParamsSpec,
      [t]);
  }

};

gfx.mojom.TraitsTestService.getRemote = function() {
  let remote = new gfx.mojom.TraitsTestServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'gfx.mojom.TraitsTestService',
    'context');
  return remote.$;
};

// ParamsSpec for EchoSelectionBound
gfx.mojom.TraitsTestService_EchoSelectionBound_ParamsSpec = {
  $: {
    structSpec: {
      name: 'gfx.mojom.TraitsTestService.EchoSelectionBound_Params',
      packedSize: 16,
      fields: [
        { name: 's', packedOffset: 0, packedBitOffset: 0, type: gfx.mojom.SelectionBoundSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

gfx.mojom.TraitsTestService_EchoSelectionBound_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'pass', packedOffset: 0, packedBitOffset: 0, type: gfx.mojom.SelectionBoundSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for EchoTransform
gfx.mojom.TraitsTestService_EchoTransform_ParamsSpec = {
  $: {
    structSpec: {
      name: 'gfx.mojom.TraitsTestService.EchoTransform_Params',
      packedSize: 16,
      fields: [
        { name: 't', packedOffset: 0, packedBitOffset: 0, type: gfx.mojom.TransformSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

gfx.mojom.TraitsTestService_EchoTransform_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'pass', packedOffset: 0, packedBitOffset: 0, type: gfx.mojom.TransformSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for EchoGpuMemoryBufferHandle
gfx.mojom.TraitsTestService_EchoGpuMemoryBufferHandle_ParamsSpec = {
  $: {
    structSpec: {
      name: 'gfx.mojom.TraitsTestService.EchoGpuMemoryBufferHandle_Params',
      packedSize: 16,
      fields: [
        { name: 'g', packedOffset: 0, packedBitOffset: 0, type: gfx.mojom.GpuMemoryBufferHandleSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

gfx.mojom.TraitsTestService_EchoGpuMemoryBufferHandle_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'pass', packedOffset: 0, packedBitOffset: 0, type: gfx.mojom.GpuMemoryBufferHandleSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for EchoRRectF
gfx.mojom.TraitsTestService_EchoRRectF_ParamsSpec = {
  $: {
    structSpec: {
      name: 'gfx.mojom.TraitsTestService.EchoRRectF_Params',
      packedSize: 16,
      fields: [
        { name: 't', packedOffset: 0, packedBitOffset: 0, type: gfx.mojom.RRectFSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

gfx.mojom.TraitsTestService_EchoRRectF_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'pass', packedOffset: 0, packedBitOffset: 0, type: gfx.mojom.RRectFSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
gfx.mojom.TraitsTestServicePtr = gfx.mojom.TraitsTestServiceRemote;
gfx.mojom.TraitsTestServiceRequest = gfx.mojom.TraitsTestServicePendingReceiver;

