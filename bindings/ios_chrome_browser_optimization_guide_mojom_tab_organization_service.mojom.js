// Auto-generated MojoJS binding
// Source: chromium_src/ios/chrome/browser/optimization_guide/mojom/tab_organization_service.mojom
// Module: ai.mojom

'use strict';

// Module namespace
var ai = ai || {};
ai.mojom = ai.mojom || {};


// Interface: TabOrganizationService
ai.mojom.TabOrganizationService = {};

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
      [request]);
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

// ParamsSpec for ExecuteGroupTabs
ai.mojom.TabOrganizationService_ExecuteGroupTabs_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ai.mojom.TabOrganizationService.ExecuteGroupTabs_Params',
      packedSize: 16,
      fields: [
        { name: 'request', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.ProtoWrapperSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

ai.mojom.TabOrganizationService_ExecuteGroupTabs_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ai.mojom.TabOrganizationService.ExecuteGroupTabs_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'output', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
ai.mojom.TabOrganizationServicePtr = ai.mojom.TabOrganizationServiceRemote;
ai.mojom.TabOrganizationServiceRequest = ai.mojom.TabOrganizationServicePendingReceiver;

