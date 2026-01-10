// Auto-generated MojoJS binding
// Source: chromium_src/ios/chrome/browser/optimization_guide/mojom/smart_tab_grouping_service.mojom
// Module: ai.mojom

'use strict';

// Module namespace
var ai = ai || {};
ai.mojom = ai.mojom || {};
var mojo_base = mojo_base || {};

ai.mojom.SmartTabGroupingResponseResultSpec = { $: {} };
ai.mojom.SmartTabGroupingService = {};
ai.mojom.SmartTabGroupingService.$interfaceName = 'ai.mojom.SmartTabGroupingService';
ai.mojom.SmartTabGroupingService_ExecuteSmartTabGroupingRequest_ParamsSpec = { $: {} };
ai.mojom.SmartTabGroupingService_ExecuteSmartTabGroupingRequest_ResponseParamsSpec = { $: {} };

// Union: SmartTabGroupingResponseResult
mojo.internal.Union(
    ai.mojom.SmartTabGroupingResponseResultSpec, 'ai.mojom.SmartTabGroupingResponseResult', {
      'error': {
        'ordinal': 0,
        'type': mojo.internal.String,
        'nullable': false,
      },
      'response': {
        'ordinal': 1,
        'type': mojo_base.mojom.ProtoWrapperSpec.$,
        'nullable': false,
      },
    });

// Interface: SmartTabGroupingService
mojo.internal.Struct(
    ai.mojom.SmartTabGroupingService_ExecuteSmartTabGroupingRequest_ParamsSpec, 'ai.mojom.SmartTabGroupingService_ExecuteSmartTabGroupingRequest_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ai.mojom.SmartTabGroupingService_ExecuteSmartTabGroupingRequest_ResponseParamsSpec, 'ai.mojom.SmartTabGroupingService_ExecuteSmartTabGroupingRequest_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, ai.mojom.SmartTabGroupingResponseResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

ai.mojom.SmartTabGroupingServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ai.mojom.SmartTabGroupingServiceRemote = class {
  static get $interfaceName() {
    return 'ai.mojom.SmartTabGroupingService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ai.mojom.SmartTabGroupingServicePendingReceiver,
      handle);
    this.$ = new ai.mojom.SmartTabGroupingServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ai.mojom.SmartTabGroupingServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  executeSmartTabGroupingRequest() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ai.mojom.SmartTabGroupingService_ExecuteSmartTabGroupingRequest_ParamsSpec,
      ai.mojom.SmartTabGroupingService_ExecuteSmartTabGroupingRequest_ResponseParamsSpec,
      [],
      false);
  }

};

ai.mojom.SmartTabGroupingService.getRemote = function() {
  let remote = new ai.mojom.SmartTabGroupingServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ai.mojom.SmartTabGroupingService',
    'context');
  return remote.$;
};

ai.mojom.SmartTabGroupingServiceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      console.log('[GeneratedReceiver] Args received:', args);
      const message = args[0];
      if (args.length > 1) { console.log('[GeneratedReceiver] 2nd Arg:', args[1]); }
      const header = message && message.header;
      if (!header) { console.warn('[GeneratedReceiver] No header in arg0'); }
      if (header) {
      console.log('[GeneratedReceiver] Header ordinal:', header.ordinal);
      switch (header.ordinal) {
        case 0: {
          const params = ai.mojom.SmartTabGroupingService_ExecuteSmartTabGroupingRequest_ParamsSpec.$.decode(message.payload);
          const result = this.impl.executeSmartTabGroupingRequest();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ai.mojom.SmartTabGroupingService_ExecuteSmartTabGroupingRequest_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
      }
    }});
  }
};

ai.mojom.SmartTabGroupingServiceReceiver = ai.mojom.SmartTabGroupingServiceReceiver;

ai.mojom.SmartTabGroupingServicePtr = ai.mojom.SmartTabGroupingServiceRemote;
ai.mojom.SmartTabGroupingServiceRequest = ai.mojom.SmartTabGroupingServicePendingReceiver;

