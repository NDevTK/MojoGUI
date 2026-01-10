// Auto-generated MojoJS binding
// Source: chromium_src/codelabs/cpp101/solutions/services/math/public/mojom/math_service.mojom
// Module: math.mojom

'use strict';

// Module namespace
var math = math || {};
math.mojom = math.mojom || {};

math.mojom.MathService = {};
math.mojom.MathService.$interfaceName = 'math.mojom.MathService';
math.mojom.MathService_Divide_ParamsSpec = { $: {} };
math.mojom.MathService_Divide_ResponseParamsSpec = { $: {} };

// Interface: MathService
mojo.internal.Struct(
    math.mojom.MathService_Divide_ParamsSpec, 'math.mojom.MathService_Divide_Params', [
      mojo.internal.StructField('dividend', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('divisor', 4, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    math.mojom.MathService_Divide_ResponseParamsSpec, 'math.mojom.MathService_Divide_ResponseParams', [
      mojo.internal.StructField('quotient', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

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
      [dividend, divisor],
      false);
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

math.mojom.MathServiceReceiver = class {
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
          const params = math.mojom.MathService_Divide_ParamsSpec.$.decode(message.payload);
          const result = this.impl.divide(params.dividend, params.divisor);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, math.mojom.MathService_Divide_ResponseParamsSpec);
               responder(response);
            }});
          }
          break;
        }
      }
    });
  }
};

math.mojom.MathServiceReceiver = math.mojom.MathServiceReceiver;

math.mojom.MathServicePtr = math.mojom.MathServiceRemote;
math.mojom.MathServiceRequest = math.mojom.MathServicePendingReceiver;

