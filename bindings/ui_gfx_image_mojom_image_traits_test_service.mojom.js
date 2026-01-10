// Auto-generated MojoJS binding
// Source: chromium_src/ui/gfx/image/mojom/image_traits_test_service.mojom
// Module: gfx.mojom

'use strict';

// Module namespace
var gfx = gfx || {};
gfx.mojom = gfx.mojom || {};


// Interface: ImageTraitsTestService
gfx.mojom.ImageTraitsTestService = {};

gfx.mojom.ImageTraitsTestServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

gfx.mojom.ImageTraitsTestServiceRemote = class {
  static get $interfaceName() {
    return 'gfx.mojom.ImageTraitsTestService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      gfx.mojom.ImageTraitsTestServicePendingReceiver,
      handle);
    this.$ = new gfx.mojom.ImageTraitsTestServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

gfx.mojom.ImageTraitsTestServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  echoImageSkiaRep(in) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      gfx.mojom.ImageTraitsTestService_EchoImageSkiaRep_ParamsSpec,
      gfx.mojom.ImageTraitsTestService_EchoImageSkiaRep_ResponseParamsSpec,
      [in]);
  }

  echoImageSkia(in) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      gfx.mojom.ImageTraitsTestService_EchoImageSkia_ParamsSpec,
      gfx.mojom.ImageTraitsTestService_EchoImageSkia_ResponseParamsSpec,
      [in]);
  }

};

gfx.mojom.ImageTraitsTestService.getRemote = function() {
  let remote = new gfx.mojom.ImageTraitsTestServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'gfx.mojom.ImageTraitsTestService',
    'context');
  return remote.$;
};

// ParamsSpec for EchoImageSkiaRep
gfx.mojom.ImageTraitsTestService_EchoImageSkiaRep_ParamsSpec = {
  $: {
    structSpec: {
      name: 'gfx.mojom.ImageTraitsTestService.EchoImageSkiaRep_Params',
      packedSize: 16,
      fields: [
        { name: 'in', packedOffset: 0, packedBitOffset: 0, type: gfx.mojom.ImageSkiaRepSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

gfx.mojom.ImageTraitsTestService_EchoImageSkiaRep_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'out', packedOffset: 0, packedBitOffset: 0, type: gfx.mojom.ImageSkiaRepSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for EchoImageSkia
gfx.mojom.ImageTraitsTestService_EchoImageSkia_ParamsSpec = {
  $: {
    structSpec: {
      name: 'gfx.mojom.ImageTraitsTestService.EchoImageSkia_Params',
      packedSize: 16,
      fields: [
        { name: 'in', packedOffset: 0, packedBitOffset: 0, type: gfx.mojom.ImageSkiaSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

gfx.mojom.ImageTraitsTestService_EchoImageSkia_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'out', packedOffset: 0, packedBitOffset: 0, type: gfx.mojom.ImageSkiaSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
gfx.mojom.ImageTraitsTestServicePtr = gfx.mojom.ImageTraitsTestServiceRemote;
gfx.mojom.ImageTraitsTestServiceRequest = gfx.mojom.ImageTraitsTestServicePendingReceiver;

