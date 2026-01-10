// Auto-generated MojoJS binding
// Source: chromium_src/ios/chrome/browser/optimization_guide/mojom/tab_organization_service.mojom
// Module: ai.mojom

'use strict';

// Module namespace
var ai = ai || {};
ai.mojom = ai.mojom || {};

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
  remote.bindNewPipeAndPassReceiver();
  remote.proxy.endpoint_.bindInBrowser(
    'ai.mojom.TabOrganizationService',
    'context');
  return remote.$;
};

ai.mojom.TabOrganizationServicePtr = ai.mojom.TabOrganizationServiceRemote;
ai.mojom.TabOrganizationServiceRequest = ai.mojom.TabOrganizationServicePendingReceiver;

