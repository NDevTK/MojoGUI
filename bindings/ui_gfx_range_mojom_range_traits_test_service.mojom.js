// Auto-generated MojoJS binding
// Source: chromium_src/ui/gfx/range/mojom/range_traits_test_service.mojom
// Module: gfx.mojom

'use strict';

// Module namespace
var gfx = gfx || {};
gfx.mojom = gfx.mojom || {};
var ui = ui || {};
var gfx = gfx || {};

gfx.mojom.RangeTraitsTestService = {};
gfx.mojom.RangeTraitsTestService.$interfaceName = 'gfx.mojom.RangeTraitsTestService';
gfx.mojom.RangeTraitsTestService_EchoRange_ParamsSpec = { $: {} };
gfx.mojom.RangeTraitsTestService_EchoRange_ResponseParamsSpec = { $: {} };
gfx.mojom.RangeTraitsTestService_EchoRangeF_ParamsSpec = { $: {} };
gfx.mojom.RangeTraitsTestService_EchoRangeF_ResponseParamsSpec = { $: {} };

// Interface: RangeTraitsTestService
mojo.internal.Struct(
    gfx.mojom.RangeTraitsTestService_EchoRange_ParamsSpec, 'gfx.mojom.RangeTraitsTestService_EchoRange_Params', [
      mojo.internal.StructField('p', 0, 0, gfx.mojom.RangeSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    gfx.mojom.RangeTraitsTestService_EchoRange_ResponseParamsSpec, 'gfx.mojom.RangeTraitsTestService_EchoRange_ResponseParams', [
      mojo.internal.StructField('pass', 0, 0, gfx.mojom.RangeSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    gfx.mojom.RangeTraitsTestService_EchoRangeF_ParamsSpec, 'gfx.mojom.RangeTraitsTestService_EchoRangeF_Params', [
      mojo.internal.StructField('p', 0, 0, gfx.mojom.RangeFSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    gfx.mojom.RangeTraitsTestService_EchoRangeF_ResponseParamsSpec, 'gfx.mojom.RangeTraitsTestService_EchoRangeF_ResponseParams', [
      mojo.internal.StructField('pass', 0, 0, gfx.mojom.RangeFSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

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
      [p]);
  }

  echoRangeF(p) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      gfx.mojom.RangeTraitsTestService_EchoRangeF_ParamsSpec,
      gfx.mojom.RangeTraitsTestService_EchoRangeF_ResponseParamsSpec,
      [p]);
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

gfx.mojom.RangeTraitsTestServicePtr = gfx.mojom.RangeTraitsTestServiceRemote;
gfx.mojom.RangeTraitsTestServiceRequest = gfx.mojom.RangeTraitsTestServicePendingReceiver;

