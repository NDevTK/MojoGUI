// Auto-generated MojoJS binding
// Source: chromium_src/services/accessibility/public/mojom/accessibility_service.mojom
// Module: ax.mojom

'use strict';

// Module namespace
var ax = ax || {};
ax.mojom = ax.mojom || {};


// Interface: AssistiveTechnologyController
ax.mojom.AssistiveTechnologyControllerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ax.mojom.AssistiveTechnologyController';
  }

  enableAssistiveTechnology(enabled_features) {
    // Method: EnableAssistiveTechnology
    // Call: EnableAssistiveTechnology(enabled_features)
  }

};

ax.mojom.AssistiveTechnologyControllerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: AccessibilityService
ax.mojom.AccessibilityServicePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ax.mojom.AccessibilityService';
  }

  bindAccessibilityServiceClient(accessibility_service_client) {
    // Method: BindAccessibilityServiceClient
    // Call: BindAccessibilityServiceClient(accessibility_service_client)
  }

  bindAssistiveTechnologyController(at_controller, enabled_features) {
    // Method: BindAssistiveTechnologyController
    // Call: BindAssistiveTechnologyController(at_controller, enabled_features)
  }

  connectDevToolsAgent(agent, type) {
    // Method: ConnectDevToolsAgent
    // Call: ConnectDevToolsAgent(agent, type)
  }

};

ax.mojom.AccessibilityServiceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: AccessibilityServiceClient
ax.mojom.AccessibilityServiceClientPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ax.mojom.AccessibilityServiceClient';
  }

  bindAutomation(automation) {
    // Method: BindAutomation
    // Call: BindAutomation(automation)
  }

  bindAutomationClient(automation_client) {
    // Method: BindAutomationClient
    // Call: BindAutomationClient(automation_client)
  }

  bindAutoclickClient(autoclick_client) {
    // Method: BindAutoclickClient
    // Call: BindAutoclickClient(autoclick_client)
  }

  bindSpeechRecognition(sr_receiver) {
    // Method: BindSpeechRecognition
    // Call: BindSpeechRecognition(sr_receiver)
  }

  bindTts(tts_receiver) {
    // Method: BindTts
    // Call: BindTts(tts_receiver)
  }

  bindUserInput(user_input_receiver) {
    // Method: BindUserInput
    // Call: BindUserInput(user_input_receiver)
  }

  bindUserInterface(user_interface_receiver) {
    // Method: BindUserInterface
    // Call: BindUserInterface(user_interface_receiver)
  }

  bindAccessibilityFileLoader(file_loader_receiver) {
    // Method: BindAccessibilityFileLoader
    // Call: BindAccessibilityFileLoader(file_loader_receiver)
  }

};

ax.mojom.AccessibilityServiceClientRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
