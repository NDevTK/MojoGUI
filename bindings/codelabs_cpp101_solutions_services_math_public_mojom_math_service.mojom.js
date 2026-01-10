// Auto-generated MojoJS binding
// Source: chromium_src/codelabs/cpp101/solutions/services/math/public/mojom/math_service.mojom
// Module: math.mojom

'use strict';

// Module namespace
var math = math || {};
math.mojom = math.mojom || {};


// Interface: MathService
math.mojom.MathService = {};

math.mojom.MathServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

math.mojom.MathServiceRemote = class {
  static get $interfaceName() {
    return 'math.mojom.MathService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      math.mojom.MathServicePendingReceiver,
      handle);
    this.$ = new math.mojom.MathServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

math.mojom.MathServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  divide(dividend, divisor) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      math.mojom.MathService_Divide_ParamsSpec,
      math.mojom.MathService_Divide_ResponseParamsSpec,
      [dividend, divisor]);
  }

};

math.mojom.MathService.getRemote = function() {
  let remote = new math.mojom.MathServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'math.mojom.MathService',
    'context');
  return remote.$;
};

// ParamsSpec for Divide
math.mojom.MathService_Divide_ParamsSpec = {
  $: {
    structSpec: {
      name: 'math.mojom.MathService.Divide_Params',
      packedSize: 16,
      fields: [
        { name: 'dividend', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'divisor', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

math.mojom.MathService_Divide_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'math.mojom.MathService.Divide_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'quotient', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
math.mojom.MathServicePtr = math.mojom.MathServiceRemote;
math.mojom.MathServiceRequest = math.mojom.MathServicePendingReceiver;

