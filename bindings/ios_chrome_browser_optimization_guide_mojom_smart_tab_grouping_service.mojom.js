// Auto-generated MojoJS binding
// Source: chromium_src/ios/chrome/browser/optimization_guide/mojom/smart_tab_grouping_service.mojom
// Module: ai.mojom

'use strict';

// Module namespace
var ai = ai || {};
ai.mojom = ai.mojom || {};


// Union: SmartTabGroupingResponseResult
ai.mojom.SmartTabGroupingResponseResultSpec = { $: mojo.internal.Union(
    'ai.mojom.SmartTabGroupingResponseResult', {
      'error': {
        'ordinal': 0,
        'type': mojo.internal.String,
      }},
      'response': {
        'ordinal': 1,
        'type': mojo_base.mojom.ProtoWrapperSpec,
      }},
    })
};

// Interface: SmartTabGroupingService
ai.mojom.SmartTabGroupingService = {};

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
      []);
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

// ParamsSpec for ExecuteSmartTabGroupingRequest
ai.mojom.SmartTabGroupingService_ExecuteSmartTabGroupingRequest_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ai.mojom.SmartTabGroupingService.ExecuteSmartTabGroupingRequest_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ai.mojom.SmartTabGroupingService_ExecuteSmartTabGroupingRequest_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: ai.mojom.SmartTabGroupingResponseResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
ai.mojom.SmartTabGroupingServicePtr = ai.mojom.SmartTabGroupingServiceRemote;
ai.mojom.SmartTabGroupingServiceRequest = ai.mojom.SmartTabGroupingServicePendingReceiver;

