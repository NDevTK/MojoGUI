// Auto-generated MojoJS binding
// Source: chromium_src/ios/chrome/browser/optimization_guide/mojom/ai_prototyping_service.mojom
// Module: ai.mojom

'use strict';

// Module namespace
var ai = ai || {};
ai.mojom = ai.mojom || {};
var mojo_base = mojo_base || {};

ai.mojom.AIPrototypingService = {};
ai.mojom.AIPrototypingService.$interfaceName = 'ai.mojom.AIPrototypingService';
ai.mojom.AIPrototypingService_ExecuteServerQuery_ParamsSpec = { $: {} };
ai.mojom.AIPrototypingService_ExecuteServerQuery_ResponseParamsSpec = { $: {} };
ai.mojom.AIPrototypingService_ExecuteOnDeviceQuery_ParamsSpec = { $: {} };
ai.mojom.AIPrototypingService_ExecuteOnDeviceQuery_ResponseParamsSpec = { $: {} };

// Interface: AIPrototypingService
mojo.internal.Struct(
    ai.mojom.AIPrototypingService_ExecuteServerQuery_ParamsSpec, 'ai.mojom.AIPrototypingService_ExecuteServerQuery_Params', [
      mojo.internal.StructField('request', 0, 0, mojo_base.mojom.ProtoWrapperSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ai.mojom.AIPrototypingService_ExecuteServerQuery_ResponseParamsSpec, 'ai.mojom.AIPrototypingService_ExecuteServerQuery_ResponseParams', [
      mojo.internal.StructField('output', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('logging_data', 8, 0, mojo_base.mojom.ProtoWrapperSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    ai.mojom.AIPrototypingService_ExecuteOnDeviceQuery_ParamsSpec, 'ai.mojom.AIPrototypingService_ExecuteOnDeviceQuery_Params', [
      mojo.internal.StructField('request', 0, 0, mojo_base.mojom.ProtoWrapperSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ai.mojom.AIPrototypingService_ExecuteOnDeviceQuery_ResponseParamsSpec, 'ai.mojom.AIPrototypingService_ExecuteOnDeviceQuery_ResponseParams', [
      mojo.internal.StructField('output', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

ai.mojom.AIPrototypingServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ai.mojom.AIPrototypingServiceRemote = class {
  static get $interfaceName() {
    return 'ai.mojom.AIPrototypingService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ai.mojom.AIPrototypingServicePendingReceiver,
      handle);
    this.$ = new ai.mojom.AIPrototypingServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ai.mojom.AIPrototypingServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  executeServerQuery(request) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ai.mojom.AIPrototypingService_ExecuteServerQuery_ParamsSpec,
      ai.mojom.AIPrototypingService_ExecuteServerQuery_ResponseParamsSpec,
      [request],
      false);
  }

  executeOnDeviceQuery(request) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ai.mojom.AIPrototypingService_ExecuteOnDeviceQuery_ParamsSpec,
      ai.mojom.AIPrototypingService_ExecuteOnDeviceQuery_ResponseParamsSpec,
      [request],
      false);
  }

};

ai.mojom.AIPrototypingService.getRemote = function() {
  let remote = new ai.mojom.AIPrototypingServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ai.mojom.AIPrototypingService',
    'context');
  return remote.$;
};

ai.mojom.AIPrototypingServiceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        message = {
          header: args[1],
          buffer: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      switch (header.ordinal) {
        case 0: {
          const params = ai.mojom.AIPrototypingService_ExecuteServerQuery_ParamsSpec.$.decode(message.payload);
          const result = this.impl.executeServerQuery(params.request);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ai.mojom.AIPrototypingService_ExecuteServerQuery_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const params = ai.mojom.AIPrototypingService_ExecuteOnDeviceQuery_ParamsSpec.$.decode(message.payload);
          const result = this.impl.executeOnDeviceQuery(params.request);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ai.mojom.AIPrototypingService_ExecuteOnDeviceQuery_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
    }});
  }
};

ai.mojom.AIPrototypingServiceReceiver = ai.mojom.AIPrototypingServiceReceiver;

ai.mojom.AIPrototypingServicePtr = ai.mojom.AIPrototypingServiceRemote;
ai.mojom.AIPrototypingServiceRequest = ai.mojom.AIPrototypingServicePendingReceiver;

