// Auto-generated MojoJS binding
// Source: chromium_src/ui/gfx/mojom/traits_test_service.mojom
// Module: gfx.mojom

'use strict';

// Module namespace
var gfx = gfx || {};
gfx.mojom = gfx.mojom || {};
var ui = ui || {};
var gfx = gfx || {};
var ui = ui || {};
var gfx = gfx || {};
var ui = ui || {};
var gfx = gfx || {};
var ui = ui || {};
var gfx = gfx || {};

gfx.mojom.TraitsTestService = {};
gfx.mojom.TraitsTestService.$interfaceName = 'gfx.mojom.TraitsTestService';
gfx.mojom.TraitsTestService_EchoSelectionBound_ParamsSpec = { $: {} };
gfx.mojom.TraitsTestService_EchoSelectionBound_ResponseParamsSpec = { $: {} };
gfx.mojom.TraitsTestService_EchoTransform_ParamsSpec = { $: {} };
gfx.mojom.TraitsTestService_EchoTransform_ResponseParamsSpec = { $: {} };
gfx.mojom.TraitsTestService_EchoGpuMemoryBufferHandle_ParamsSpec = { $: {} };
gfx.mojom.TraitsTestService_EchoGpuMemoryBufferHandle_ResponseParamsSpec = { $: {} };
gfx.mojom.TraitsTestService_EchoRRectF_ParamsSpec = { $: {} };
gfx.mojom.TraitsTestService_EchoRRectF_ResponseParamsSpec = { $: {} };

// Interface: TraitsTestService
mojo.internal.Struct(
    gfx.mojom.TraitsTestService_EchoSelectionBound_ParamsSpec, 'gfx.mojom.TraitsTestService_EchoSelectionBound_Params', [
      mojo.internal.StructField('s', 0, 0, gfx.mojom.SelectionBoundSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    gfx.mojom.TraitsTestService_EchoSelectionBound_ResponseParamsSpec, 'gfx.mojom.TraitsTestService_EchoSelectionBound_ResponseParams', [
      mojo.internal.StructField('pass', 0, 0, gfx.mojom.SelectionBoundSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    gfx.mojom.TraitsTestService_EchoTransform_ParamsSpec, 'gfx.mojom.TraitsTestService_EchoTransform_Params', [
      mojo.internal.StructField('t', 0, 0, gfx.mojom.TransformSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    gfx.mojom.TraitsTestService_EchoTransform_ResponseParamsSpec, 'gfx.mojom.TraitsTestService_EchoTransform_ResponseParams', [
      mojo.internal.StructField('pass', 0, 0, gfx.mojom.TransformSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    gfx.mojom.TraitsTestService_EchoGpuMemoryBufferHandle_ParamsSpec, 'gfx.mojom.TraitsTestService_EchoGpuMemoryBufferHandle_Params', [
      mojo.internal.StructField('g', 0, 0, gfx.mojom.GpuMemoryBufferHandleSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    gfx.mojom.TraitsTestService_EchoGpuMemoryBufferHandle_ResponseParamsSpec, 'gfx.mojom.TraitsTestService_EchoGpuMemoryBufferHandle_ResponseParams', [
      mojo.internal.StructField('pass', 0, 0, gfx.mojom.GpuMemoryBufferHandleSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    gfx.mojom.TraitsTestService_EchoRRectF_ParamsSpec, 'gfx.mojom.TraitsTestService_EchoRRectF_Params', [
      mojo.internal.StructField('t', 0, 0, gfx.mojom.RRectFSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    gfx.mojom.TraitsTestService_EchoRRectF_ResponseParamsSpec, 'gfx.mojom.TraitsTestService_EchoRRectF_ResponseParams', [
      mojo.internal.StructField('pass', 0, 0, gfx.mojom.RRectFSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

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
      [s],
      false);
  }

  echoTransform(t) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      gfx.mojom.TraitsTestService_EchoTransform_ParamsSpec,
      gfx.mojom.TraitsTestService_EchoTransform_ResponseParamsSpec,
      [t],
      false);
  }

  echoGpuMemoryBufferHandle(g) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      gfx.mojom.TraitsTestService_EchoGpuMemoryBufferHandle_ParamsSpec,
      gfx.mojom.TraitsTestService_EchoGpuMemoryBufferHandle_ResponseParamsSpec,
      [g],
      false);
  }

  echoRRectF(t) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      gfx.mojom.TraitsTestService_EchoRRectF_ParamsSpec,
      gfx.mojom.TraitsTestService_EchoRRectF_ResponseParamsSpec,
      [t],
      false);
  }

};

gfx.mojom.TraitsTestService.getRemote = function() {
  let remote = new gfx.mojom.TraitsTestServiceRemote();
  remote.bindNewPipeAndPassReceiver();
  remote.proxy.endpoint_.bindInBrowser(
    'gfx.mojom.TraitsTestService',
    'context');
  return remote.$;
};

gfx.mojom.TraitsTestServicePtr = gfx.mojom.TraitsTestServiceRemote;
gfx.mojom.TraitsTestServiceRequest = gfx.mojom.TraitsTestServicePendingReceiver;

