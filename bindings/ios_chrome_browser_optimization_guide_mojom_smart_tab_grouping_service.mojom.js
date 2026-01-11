// Auto-generated MojoJS binding
// Source: chromium_src/ios/chrome/browser/optimization_guide/mojom/smart_tab_grouping_service.mojom
// Module: ai.mojom

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
  executeSmartTabGroupingRequest() {
    return this.$.executeSmartTabGroupingRequest();
  }
};

ai.mojom.SmartTabGroupingServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('SmartTabGroupingService', [
      { explicit: null },
    ]);
  }

  executeSmartTabGroupingRequest() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
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
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('SmartTabGroupingService', [
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ai.mojom.SmartTabGroupingService_ExecuteSmartTabGroupingRequest_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ai.mojom.SmartTabGroupingService_ExecuteSmartTabGroupingRequest_ParamsSpec.$.structSpec);
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
      } catch (err) {}
    }});
  }
};

ai.mojom.SmartTabGroupingServiceReceiver = ai.mojom.SmartTabGroupingServiceReceiver;

ai.mojom.SmartTabGroupingServicePtr = ai.mojom.SmartTabGroupingServiceRemote;
ai.mojom.SmartTabGroupingServiceRequest = ai.mojom.SmartTabGroupingServicePendingReceiver;

