// Auto-generated MojoJS binding
// Source: chromium_src/ios/chrome/browser/optimization_guide/mojom/tab_organization_service.mojom
// Module: ai.mojom

'use strict';

// Module namespace
var ai = ai || {};
ai.mojom = ai.mojom || {};
var mojo_base = mojo_base || {};

ai.mojom.TabOrganizationService = {};
ai.mojom.TabOrganizationService.$interfaceName = 'ai.mojom.TabOrganizationService';
ai.mojom.TabOrganizationService_ExecuteGroupTabs_ParamsSpec = { $: {} };
ai.mojom.TabOrganizationService_ExecuteGroupTabs_ResponseParamsSpec = { $: {} };

// Interface: TabOrganizationService
mojo.internal.Struct(
    ai.mojom.TabOrganizationService_ExecuteGroupTabs_ParamsSpec, 'ai.mojom.TabOrganizationService_ExecuteGroupTabs_Params', [
      mojo.internal.StructField('request', 0, 0, mojo_base.mojom.ProtoWrapperSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ai.mojom.TabOrganizationService_ExecuteGroupTabs_ResponseParamsSpec, 'ai.mojom.TabOrganizationService_ExecuteGroupTabs_ResponseParams', [
      mojo.internal.StructField('output', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

ai.mojom.TabOrganizationServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ai.mojom.TabOrganizationServiceRemote = class {
  static get $interfaceName() {
    return 'ai.mojom.TabOrganizationService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ai.mojom.TabOrganizationServicePendingReceiver,
      handle);
    this.$ = new ai.mojom.TabOrganizationServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ai.mojom.TabOrganizationServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  executeGroupTabs(request) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ai.mojom.TabOrganizationService_ExecuteGroupTabs_ParamsSpec,
      ai.mojom.TabOrganizationService_ExecuteGroupTabs_ResponseParamsSpec,
      [request],
      false);
  }

};

ai.mojom.TabOrganizationService.getRemote = function() {
  let remote = new ai.mojom.TabOrganizationServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ai.mojom.TabOrganizationService',
    'context');
  return remote.$;
};

ai.mojom.TabOrganizationServiceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = ai.mojom.TabOrganizationService_ExecuteGroupTabs_ParamsSpec.$.decode(message.payload);
          const result = this.impl.executeGroupTabs(params.request);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ai.mojom.TabOrganizationService_ExecuteGroupTabs_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
    }});
  }
};

ai.mojom.TabOrganizationServiceReceiver = ai.mojom.TabOrganizationServiceReceiver;

ai.mojom.TabOrganizationServicePtr = ai.mojom.TabOrganizationServiceRemote;
ai.mojom.TabOrganizationServiceRequest = ai.mojom.TabOrganizationServicePendingReceiver;

