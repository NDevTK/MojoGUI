// Auto-generated MojoJS binding
// Source: chromium_src/ios/chrome/browser/optimization_guide/mojom/enhanced_calendar_service.mojom
// Module: ai.mojom

'use strict';

// Module namespace
var ai = ai || {};
ai.mojom = ai.mojom || {};


// Interface: EnhancedCalendarService
ai.mojom.EnhancedCalendarService = {};

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
      [request_params]);
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

// ParamsSpec for ExecuteEnhancedCalendarRequest
ai.mojom.EnhancedCalendarService_ExecuteEnhancedCalendarRequest_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ai.mojom.EnhancedCalendarService.ExecuteEnhancedCalendarRequest_Params',
      packedSize: 16,
      fields: [
        { name: 'request_params', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

ai.mojom.EnhancedCalendarService_ExecuteEnhancedCalendarRequest_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ai.mojom.EnhancedCalendarService.ExecuteEnhancedCalendarRequest_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
ai.mojom.EnhancedCalendarServicePtr = ai.mojom.EnhancedCalendarServiceRemote;
ai.mojom.EnhancedCalendarServiceRequest = ai.mojom.EnhancedCalendarServicePendingReceiver;

