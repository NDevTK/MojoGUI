// Auto-generated MojoJS binding
// Source: chromium_src/ios/chrome/browser/optimization_guide/mojom/tab_organization_service.mojom
// Module: ai.mojom

'use strict';

// Module namespace
var ai = ai || {};
ai.mojom = ai.mojom || {};


// Interface: TabOrganizationService
ai.mojom.mojom.TabOrganizationService = {};

ai.mojom.mojom.TabOrganizationServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ai.mojom.mojom.TabOrganizationServiceRemote = class {
  static get $interfaceName() {
    return 'ai.mojom.TabOrganizationService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ai.mojom.mojom.TabOrganizationServicePendingReceiver,
      handle);
    this.$ = new ai.mojom.mojom.TabOrganizationServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ai.mojom.mojom.TabOrganizationServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  executeGroupTabs(request) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ai.mojom.mojom.TabOrganizationService_ExecuteGroupTabs_ParamsSpec,
      ai.mojom.mojom.TabOrganizationService_ExecuteGroupTabs_ResponseParamsSpec,
      [request]);
  }

};

ai.mojom.mojom.TabOrganizationService.getRemote = function() {
  let remote = new ai.mojom.mojom.TabOrganizationServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ai.mojom.TabOrganizationService',
    'context');
  return remote.$;
};

// ParamsSpec for ExecuteGroupTabs
ai.mojom.mojom.TabOrganizationService_ExecuteGroupTabs_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ai.mojom.TabOrganizationService.ExecuteGroupTabs_Params',
      packedSize: 16,
      fields: [
        { name: 'request', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.ProtoWrapperSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

ai.mojom.mojom.TabOrganizationService_ExecuteGroupTabs_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ai.mojom.TabOrganizationService.ExecuteGroupTabs_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'output', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
ai.mojom.mojom.TabOrganizationServicePtr = ai.mojom.mojom.TabOrganizationServiceRemote;
ai.mojom.mojom.TabOrganizationServiceRequest = ai.mojom.mojom.TabOrganizationServicePendingReceiver;

