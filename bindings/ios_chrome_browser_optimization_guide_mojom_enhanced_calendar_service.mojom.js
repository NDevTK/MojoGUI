// Auto-generated MojoJS binding
// Source: chromium_src/ios/chrome/browser/optimization_guide/mojom/enhanced_calendar_service.mojom
// Module: ai.mojom

'use strict';

// Module namespace
var ai = ai || {};
ai.mojom = ai.mojom || {};
var mojo_base = mojo_base || {};

ai.mojom.EnhancedCalendarResponseResultSpec = { $: {} };
ai.mojom.EnhancedCalendarServiceRequestParamsSpec = { $: {} };
ai.mojom.EnhancedCalendarService = {};
ai.mojom.EnhancedCalendarService.$interfaceName = 'ai.mojom.EnhancedCalendarService';
ai.mojom.EnhancedCalendarService_ExecuteEnhancedCalendarRequest_ParamsSpec = { $: {} };
ai.mojom.EnhancedCalendarService_ExecuteEnhancedCalendarRequest_ResponseParamsSpec = { $: {} };

// Union: EnhancedCalendarResponseResult
mojo.internal.Union(
    ai.mojom.EnhancedCalendarResponseResultSpec, 'ai.mojom.EnhancedCalendarResponseResult', {
      'response': {
        'ordinal': 0,
        'type': mojo_base.mojom.ProtoWrapperSpec.$,
        'nullable': false,
      },
      'error': {
        'ordinal': 1,
        'type': mojo.internal.String,
        'nullable': false,
      },
    });

// Struct: EnhancedCalendarServiceRequestParams
mojo.internal.Struct(
    ai.mojom.EnhancedCalendarServiceRequestParamsSpec, 'ai.mojom.EnhancedCalendarServiceRequestParams', [
      mojo.internal.StructField('selected_text', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('surrounding_text', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('optional_prompt', 16, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 32]]);

// Interface: EnhancedCalendarService
mojo.internal.Struct(
    ai.mojom.EnhancedCalendarService_ExecuteEnhancedCalendarRequest_ParamsSpec, 'ai.mojom.EnhancedCalendarService_ExecuteEnhancedCalendarRequest_Params', [
      mojo.internal.StructField('request_params', 0, 0, ai.mojom.EnhancedCalendarServiceRequestParamsSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ai.mojom.EnhancedCalendarService_ExecuteEnhancedCalendarRequest_ResponseParamsSpec, 'ai.mojom.EnhancedCalendarService_ExecuteEnhancedCalendarRequest_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, ai.mojom.EnhancedCalendarResponseResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

ai.mojom.EnhancedCalendarServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ai.mojom.EnhancedCalendarServiceRemote = class {
  static get $interfaceName() {
    return 'ai.mojom.EnhancedCalendarService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ai.mojom.EnhancedCalendarServicePendingReceiver,
      handle);
    this.$ = new ai.mojom.EnhancedCalendarServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ai.mojom.EnhancedCalendarServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  executeEnhancedCalendarRequest(request_params) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ai.mojom.EnhancedCalendarService_ExecuteEnhancedCalendarRequest_ParamsSpec,
      ai.mojom.EnhancedCalendarService_ExecuteEnhancedCalendarRequest_ResponseParamsSpec,
      [request_params],
      false);
  }

};

ai.mojom.EnhancedCalendarService.getRemote = function() {
  let remote = new ai.mojom.EnhancedCalendarServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ai.mojom.EnhancedCalendarService',
    'context');
  return remote.$;
};

ai.mojom.EnhancedCalendarServiceReceiver = class {
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
          const params = ai.mojom.EnhancedCalendarService_ExecuteEnhancedCalendarRequest_ParamsSpec.$.decode(message.payload);
          const result = this.impl.executeEnhancedCalendarRequest(params.request_params);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ai.mojom.EnhancedCalendarService_ExecuteEnhancedCalendarRequest_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
    }});
  }
};

ai.mojom.EnhancedCalendarServiceReceiver = ai.mojom.EnhancedCalendarServiceReceiver;

ai.mojom.EnhancedCalendarServicePtr = ai.mojom.EnhancedCalendarServiceRemote;
ai.mojom.EnhancedCalendarServiceRequest = ai.mojom.EnhancedCalendarServicePendingReceiver;

