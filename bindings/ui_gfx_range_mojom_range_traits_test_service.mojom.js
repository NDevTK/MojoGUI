// Auto-generated MojoJS binding
// Source: chromium_src/ui/gfx/range/mojom/range_traits_test_service.mojom
// Module: gfx.mojom

'use strict';

// Module namespace
var gfx = gfx || {};
gfx.mojom = gfx.mojom || {};


// Interface: RangeTraitsTestService
gfx.mojom.RangeTraitsTestService = {};

gfx.mojom.RangeTraitsTestServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

gfx.mojom.RangeTraitsTestServiceRemote = class {
  static get $interfaceName() {
    return 'gfx.mojom.RangeTraitsTestService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      gfx.mojom.RangeTraitsTestServicePendingReceiver,
      handle);
    this.$ = new gfx.mojom.RangeTraitsTestServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

gfx.mojom.RangeTraitsTestServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  echoRange(p) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      gfx.mojom.RangeTraitsTestService_EchoRange_ParamsSpec,
      gfx.mojom.RangeTraitsTestService_EchoRange_ResponseParamsSpec,
      gfx.mojom.RangeTraitsTestService_EchoRange_ResponseParamsSpec,
      [p],
      undefined,
      mojo.internal.kMessageFlagIsSync
    );
  }

  echoRangeF(p) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      gfx.mojom.RangeTraitsTestService_EchoRangeF_ParamsSpec,
      gfx.mojom.RangeTraitsTestService_EchoRangeF_ResponseParamsSpec,
      gfx.mojom.RangeTraitsTestService_EchoRangeF_ResponseParamsSpec,
      [p],
      undefined,
      mojo.internal.kMessageFlagIsSync
    );
  }

};

gfx.mojom.RangeTraitsTestService.getRemote = function() {
  let remote = new gfx.mojom.RangeTraitsTestServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'gfx.mojom.RangeTraitsTestService',
    'context');
  return remote.$;
};

// ParamsSpec for EchoRange
gfx.mojom.RangeTraitsTestService_EchoRange_ParamsSpec = {
  $: {
    structSpec: {
      name: 'gfx.mojom.RangeTraitsTestService.EchoRange_Params',
      packedSize: 16,
      fields: [
        { name: 'p', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

gfx.mojom.RangeTraitsTestService_EchoRange_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'gfx.mojom.RangeTraitsTestService.EchoRange_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'pass', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for EchoRangeF
gfx.mojom.RangeTraitsTestService_EchoRangeF_ParamsSpec = {
  $: {
    structSpec: {
      name: 'gfx.mojom.RangeTraitsTestService.EchoRangeF_Params',
      packedSize: 16,
      fields: [
        { name: 'p', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

gfx.mojom.RangeTraitsTestService_EchoRangeF_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'gfx.mojom.RangeTraitsTestService.EchoRangeF_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'pass', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
gfx.mojom.RangeTraitsTestServicePtr = gfx.mojom.RangeTraitsTestServiceRemote;
gfx.mojom.RangeTraitsTestServiceRequest = gfx.mojom.RangeTraitsTestServicePendingReceiver;

