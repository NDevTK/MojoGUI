// Auto-generated MojoJS binding
// Source: chromium_src/services/accessibility/public/mojom/accessibility_service.mojom
// Module: ax.mojom

'use strict';

// Module namespace
var ax = ax || {};
ax.mojom = ax.mojom || {};


// Interface: AssistiveTechnologyController
ax.mojom.AssistiveTechnologyControllerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ax.mojom.AssistiveTechnologyControllerRemote = class {
  static get $interfaceName() {
    return 'ax.mojom.AssistiveTechnologyController';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ax.mojom.AssistiveTechnologyControllerPendingReceiver,
      handle);
    this.$ = new ax.mojom.AssistiveTechnologyControllerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ax.mojom.AssistiveTechnologyControllerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  enableAssistiveTechnology(enabled_features) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ax.mojom.AssistiveTechnologyController_EnableAssistiveTechnology_ParamsSpec.$,
      null,
      [enabled_features]);
  }

};

ax.mojom.AssistiveTechnologyController.getRemote = function() {
  let remote = new ax.mojom.AssistiveTechnologyControllerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ax.mojom.AssistiveTechnologyController',
    'context');
  return remote.$;
}};

// ParamsSpec for EnableAssistiveTechnology
ax.mojom.AssistiveTechnologyController_EnableAssistiveTechnology_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ax.mojom.AssistiveTechnologyController.EnableAssistiveTechnology_Params',
      packedSize: 16,
      fields: [
        { name: 'enabled_features', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// Legacy compatibility
ax.mojom.AssistiveTechnologyControllerPtr = ax.mojom.AssistiveTechnologyControllerRemote;
ax.mojom.AssistiveTechnologyControllerRequest = ax.mojom.AssistiveTechnologyControllerPendingReceiver;


// Interface: AccessibilityService
ax.mojom.AccessibilityServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ax.mojom.AccessibilityServiceRemote = class {
  static get $interfaceName() {
    return 'ax.mojom.AccessibilityService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ax.mojom.AccessibilityServicePendingReceiver,
      handle);
    this.$ = new ax.mojom.AccessibilityServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ax.mojom.AccessibilityServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  bindAccessibilityServiceClient(accessibility_service_client) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ax.mojom.AccessibilityService_BindAccessibilityServiceClient_ParamsSpec.$,
      null,
      [accessibility_service_client]);
  }

  bindAssistiveTechnologyController(at_controller, enabled_features) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ax.mojom.AccessibilityService_BindAssistiveTechnologyController_ParamsSpec.$,
      null,
      [at_controller, enabled_features]);
  }

  connectDevToolsAgent(agent, type) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ax.mojom.AccessibilityService_ConnectDevToolsAgent_ParamsSpec.$,
      null,
      [agent, type]);
  }

};

ax.mojom.AccessibilityService.getRemote = function() {
  let remote = new ax.mojom.AccessibilityServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ax.mojom.AccessibilityService',
    'context');
  return remote.$;
}};

// ParamsSpec for BindAccessibilityServiceClient
ax.mojom.AccessibilityService_BindAccessibilityServiceClient_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ax.mojom.AccessibilityService.BindAccessibilityServiceClient_Params',
      packedSize: 16,
      fields: [
        { name: 'accessibility_service_client', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for BindAssistiveTechnologyController
ax.mojom.AccessibilityService_BindAssistiveTechnologyController_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ax.mojom.AccessibilityService.BindAssistiveTechnologyController_Params',
      packedSize: 24,
      fields: [
        { name: 'at_controller', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'enabled_features', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for ConnectDevToolsAgent
ax.mojom.AccessibilityService_ConnectDevToolsAgent_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ax.mojom.AccessibilityService.ConnectDevToolsAgent_Params',
      packedSize: 24,
      fields: [
        { name: 'agent', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'type', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// Legacy compatibility
ax.mojom.AccessibilityServicePtr = ax.mojom.AccessibilityServiceRemote;
ax.mojom.AccessibilityServiceRequest = ax.mojom.AccessibilityServicePendingReceiver;


// Interface: AccessibilityServiceClient
ax.mojom.AccessibilityServiceClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ax.mojom.AccessibilityServiceClientRemote = class {
  static get $interfaceName() {
    return 'ax.mojom.AccessibilityServiceClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ax.mojom.AccessibilityServiceClientPendingReceiver,
      handle);
    this.$ = new ax.mojom.AccessibilityServiceClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ax.mojom.AccessibilityServiceClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  bindAutomation(automation) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ax.mojom.AccessibilityServiceClient_BindAutomation_ParamsSpec.$,
      null,
      [automation]);
  }

  bindAutomationClient(automation_client) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ax.mojom.AccessibilityServiceClient_BindAutomationClient_ParamsSpec.$,
      null,
      [automation_client]);
  }

  bindAutoclickClient(autoclick_client) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ax.mojom.AccessibilityServiceClient_BindAutoclickClient_ParamsSpec.$,
      null,
      [autoclick_client]);
  }

  bindSpeechRecognition(sr_receiver) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      ax.mojom.AccessibilityServiceClient_BindSpeechRecognition_ParamsSpec.$,
      null,
      [sr_receiver]);
  }

  bindTts(tts_receiver) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      ax.mojom.AccessibilityServiceClient_BindTts_ParamsSpec.$,
      null,
      [tts_receiver]);
  }

  bindUserInput(user_input_receiver) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      ax.mojom.AccessibilityServiceClient_BindUserInput_ParamsSpec.$,
      null,
      [user_input_receiver]);
  }

  bindUserInterface(user_interface_receiver) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      ax.mojom.AccessibilityServiceClient_BindUserInterface_ParamsSpec.$,
      null,
      [user_interface_receiver]);
  }

  bindAccessibilityFileLoader(file_loader_receiver) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      ax.mojom.AccessibilityServiceClient_BindAccessibilityFileLoader_ParamsSpec.$,
      null,
      [file_loader_receiver]);
  }

};

ax.mojom.AccessibilityServiceClient.getRemote = function() {
  let remote = new ax.mojom.AccessibilityServiceClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ax.mojom.AccessibilityServiceClient',
    'context');
  return remote.$;
}};

// ParamsSpec for BindAutomation
ax.mojom.AccessibilityServiceClient_BindAutomation_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ax.mojom.AccessibilityServiceClient.BindAutomation_Params',
      packedSize: 16,
      fields: [
        { name: 'automation', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for BindAutomationClient
ax.mojom.AccessibilityServiceClient_BindAutomationClient_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ax.mojom.AccessibilityServiceClient.BindAutomationClient_Params',
      packedSize: 16,
      fields: [
        { name: 'automation_client', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for BindAutoclickClient
ax.mojom.AccessibilityServiceClient_BindAutoclickClient_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ax.mojom.AccessibilityServiceClient.BindAutoclickClient_Params',
      packedSize: 16,
      fields: [
        { name: 'autoclick_client', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for BindSpeechRecognition
ax.mojom.AccessibilityServiceClient_BindSpeechRecognition_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ax.mojom.AccessibilityServiceClient.BindSpeechRecognition_Params',
      packedSize: 16,
      fields: [
        { name: 'sr_receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for BindTts
ax.mojom.AccessibilityServiceClient_BindTts_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ax.mojom.AccessibilityServiceClient.BindTts_Params',
      packedSize: 16,
      fields: [
        { name: 'tts_receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for BindUserInput
ax.mojom.AccessibilityServiceClient_BindUserInput_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ax.mojom.AccessibilityServiceClient.BindUserInput_Params',
      packedSize: 16,
      fields: [
        { name: 'user_input_receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for BindUserInterface
ax.mojom.AccessibilityServiceClient_BindUserInterface_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ax.mojom.AccessibilityServiceClient.BindUserInterface_Params',
      packedSize: 16,
      fields: [
        { name: 'user_interface_receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for BindAccessibilityFileLoader
ax.mojom.AccessibilityServiceClient_BindAccessibilityFileLoader_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ax.mojom.AccessibilityServiceClient.BindAccessibilityFileLoader_Params',
      packedSize: 16,
      fields: [
        { name: 'file_loader_receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// Legacy compatibility
ax.mojom.AccessibilityServiceClientPtr = ax.mojom.AccessibilityServiceClientRemote;
ax.mojom.AccessibilityServiceClientRequest = ax.mojom.AccessibilityServiceClientPendingReceiver;

