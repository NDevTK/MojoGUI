// Auto-generated MojoJS binding
// Source: chromium_src/content/common/dom_automation_controller.mojom
// Module: content.mojom

'use strict';

// Module namespace
var content = content || {};
content.mojom = content.mojom || {};


// Interface: DomAutomationControllerHost
content.mojom.DomAutomationControllerHost = {};

content.mojom.DomAutomationControllerHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

content.mojom.DomAutomationControllerHostRemote = class {
  static get $interfaceName() {
    return 'content.mojom.DomAutomationControllerHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      content.mojom.DomAutomationControllerHostPendingReceiver,
      handle);
    this.$ = new content.mojom.DomAutomationControllerHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

content.mojom.DomAutomationControllerHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  domOperationResponse(json_string) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      content.mojom.DomAutomationControllerHost_DomOperationResponse_ParamsSpec,
      null,
      [json_string]);
  }

};

content.mojom.DomAutomationControllerHost.getRemote = function() {
  let remote = new content.mojom.DomAutomationControllerHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'content.mojom.DomAutomationControllerHost',
    'context');
  return remote.$;
};

// ParamsSpec for DomOperationResponse
content.mojom.DomAutomationControllerHost_DomOperationResponse_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.DomAutomationControllerHost.DomOperationResponse_Params',
      packedSize: 16,
      fields: [
        { name: 'json_string', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
content.mojom.DomAutomationControllerHostPtr = content.mojom.DomAutomationControllerHostRemote;
content.mojom.DomAutomationControllerHostRequest = content.mojom.DomAutomationControllerHostPendingReceiver;

