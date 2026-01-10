// Auto-generated MojoJS binding
// Source: chromium_src/services/accessibility/public/mojom/accessibility_service.mojom
// Module: ax.mojom

'use strict';

// Module namespace
var ax = ax || {};
ax.mojom = ax.mojom || {};
var services = services || {};
var services = services || {};
var services = services || {};
var services = services || {};
var blink = blink || {};
var services = services || {};
var services = services || {};
var services = services || {};
var services = services || {};
var services = services || {};

ax.mojom.AssistiveTechnologyController = {};
ax.mojom.AssistiveTechnologyController.$interfaceName = 'ax.mojom.AssistiveTechnologyController';
ax.mojom.AssistiveTechnologyController_EnableAssistiveTechnology_ParamsSpec = { $: {} };
ax.mojom.AccessibilityService = {};
ax.mojom.AccessibilityService.$interfaceName = 'ax.mojom.AccessibilityService';
ax.mojom.AccessibilityService_BindAccessibilityServiceClient_ParamsSpec = { $: {} };
ax.mojom.AccessibilityService_BindAssistiveTechnologyController_ParamsSpec = { $: {} };
ax.mojom.AccessibilityService_ConnectDevToolsAgent_ParamsSpec = { $: {} };
ax.mojom.AccessibilityServiceClient = {};
ax.mojom.AccessibilityServiceClient.$interfaceName = 'ax.mojom.AccessibilityServiceClient';
ax.mojom.AccessibilityServiceClient_BindAutomation_ParamsSpec = { $: {} };
ax.mojom.AccessibilityServiceClient_BindAutomationClient_ParamsSpec = { $: {} };
ax.mojom.AccessibilityServiceClient_BindAutoclickClient_ParamsSpec = { $: {} };
ax.mojom.AccessibilityServiceClient_BindSpeechRecognition_ParamsSpec = { $: {} };
ax.mojom.AccessibilityServiceClient_BindTts_ParamsSpec = { $: {} };
ax.mojom.AccessibilityServiceClient_BindUserInput_ParamsSpec = { $: {} };
ax.mojom.AccessibilityServiceClient_BindUserInterface_ParamsSpec = { $: {} };
ax.mojom.AccessibilityServiceClient_BindAccessibilityFileLoader_ParamsSpec = { $: {} };

// Interface: AssistiveTechnologyController
mojo.internal.Struct(
    ax.mojom.AssistiveTechnologyController_EnableAssistiveTechnology_ParamsSpec, 'ax.mojom.AssistiveTechnologyController_EnableAssistiveTechnology_Params', [
      mojo.internal.StructField('enabled_features', 0, 0, mojo.internal.Array(ax.mojom.AssistiveTechnologyTypeSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

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
      ax.mojom.AssistiveTechnologyController_EnableAssistiveTechnology_ParamsSpec,
      null,
      [enabled_features],
      false);
  }

};

ax.mojom.AssistiveTechnologyController.getRemote = function() {
  let remote = new ax.mojom.AssistiveTechnologyControllerRemote();
  remote.bindNewPipeAndPassReceiver();
  remote.proxy.endpoint_.bindInBrowser(
    'ax.mojom.AssistiveTechnologyController',
    'context');
  return remote.$;
};

ax.mojom.AssistiveTechnologyControllerPtr = ax.mojom.AssistiveTechnologyControllerRemote;
ax.mojom.AssistiveTechnologyControllerRequest = ax.mojom.AssistiveTechnologyControllerPendingReceiver;


// Interface: AccessibilityService
mojo.internal.Struct(
    ax.mojom.AccessibilityService_BindAccessibilityServiceClient_ParamsSpec, 'ax.mojom.AccessibilityService_BindAccessibilityServiceClient_Params', [
      mojo.internal.StructField('accessibility_service_client', 0, 0, mojo.internal.InterfaceProxy(ax.mojom.AccessibilityServiceClientRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ax.mojom.AccessibilityService_BindAssistiveTechnologyController_ParamsSpec, 'ax.mojom.AccessibilityService_BindAssistiveTechnologyController_Params', [
      mojo.internal.StructField('at_controller', 0, 0, mojo.internal.InterfaceRequest(ax.mojom.AssistiveTechnologyControllerRemote), null, false, 0, undefined),
      mojo.internal.StructField('enabled_features', 8, 0, mojo.internal.Array(ax.mojom.AssistiveTechnologyTypeSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    ax.mojom.AccessibilityService_ConnectDevToolsAgent_ParamsSpec, 'ax.mojom.AccessibilityService_ConnectDevToolsAgent_Params', [
      mojo.internal.StructField('agent', 0, 0, mojo.internal.AssociatedInterfaceRequest(blink.mojom.DevToolsAgentRemote), null, false, 0, undefined),
      mojo.internal.StructField('type', 8, 0, ax.mojom.AssistiveTechnologyTypeSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

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
      ax.mojom.AccessibilityService_BindAccessibilityServiceClient_ParamsSpec,
      null,
      [accessibility_service_client],
      false);
  }

  bindAssistiveTechnologyController(at_controller, enabled_features) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ax.mojom.AccessibilityService_BindAssistiveTechnologyController_ParamsSpec,
      null,
      [at_controller, enabled_features],
      false);
  }

  connectDevToolsAgent(agent, type) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ax.mojom.AccessibilityService_ConnectDevToolsAgent_ParamsSpec,
      null,
      [agent, type],
      false);
  }

};

ax.mojom.AccessibilityService.getRemote = function() {
  let remote = new ax.mojom.AccessibilityServiceRemote();
  remote.bindNewPipeAndPassReceiver();
  remote.proxy.endpoint_.bindInBrowser(
    'ax.mojom.AccessibilityService',
    'context');
  return remote.$;
};

ax.mojom.AccessibilityServicePtr = ax.mojom.AccessibilityServiceRemote;
ax.mojom.AccessibilityServiceRequest = ax.mojom.AccessibilityServicePendingReceiver;


// Interface: AccessibilityServiceClient
mojo.internal.Struct(
    ax.mojom.AccessibilityServiceClient_BindAutomation_ParamsSpec, 'ax.mojom.AccessibilityServiceClient_BindAutomation_Params', [
      mojo.internal.StructField('automation', 0, 0, mojo.internal.AssociatedInterfaceProxy(ax.mojom.AutomationRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ax.mojom.AccessibilityServiceClient_BindAutomationClient_ParamsSpec, 'ax.mojom.AccessibilityServiceClient_BindAutomationClient_Params', [
      mojo.internal.StructField('automation_client', 0, 0, mojo.internal.InterfaceRequest(ax.mojom.AutomationClientRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ax.mojom.AccessibilityServiceClient_BindAutoclickClient_ParamsSpec, 'ax.mojom.AccessibilityServiceClient_BindAutoclickClient_Params', [
      mojo.internal.StructField('autoclick_client', 0, 0, mojo.internal.InterfaceRequest(ax.mojom.AutoclickClientRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ax.mojom.AccessibilityServiceClient_BindSpeechRecognition_ParamsSpec, 'ax.mojom.AccessibilityServiceClient_BindSpeechRecognition_Params', [
      mojo.internal.StructField('sr_receiver', 0, 0, mojo.internal.InterfaceRequest(ax.mojom.SpeechRecognitionRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ax.mojom.AccessibilityServiceClient_BindTts_ParamsSpec, 'ax.mojom.AccessibilityServiceClient_BindTts_Params', [
      mojo.internal.StructField('tts_receiver', 0, 0, mojo.internal.InterfaceRequest(ax.mojom.TtsRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ax.mojom.AccessibilityServiceClient_BindUserInput_ParamsSpec, 'ax.mojom.AccessibilityServiceClient_BindUserInput_Params', [
      mojo.internal.StructField('user_input_receiver', 0, 0, mojo.internal.InterfaceRequest(ax.mojom.UserInputRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ax.mojom.AccessibilityServiceClient_BindUserInterface_ParamsSpec, 'ax.mojom.AccessibilityServiceClient_BindUserInterface_Params', [
      mojo.internal.StructField('user_interface_receiver', 0, 0, mojo.internal.InterfaceRequest(ax.mojom.UserInterfaceRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ax.mojom.AccessibilityServiceClient_BindAccessibilityFileLoader_ParamsSpec, 'ax.mojom.AccessibilityServiceClient_BindAccessibilityFileLoader_Params', [
      mojo.internal.StructField('file_loader_receiver', 0, 0, mojo.internal.InterfaceRequest(ax.mojom.AccessibilityFileLoaderRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

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
      ax.mojom.AccessibilityServiceClient_BindAutomation_ParamsSpec,
      null,
      [automation],
      false);
  }

  bindAutomationClient(automation_client) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ax.mojom.AccessibilityServiceClient_BindAutomationClient_ParamsSpec,
      null,
      [automation_client],
      false);
  }

  bindAutoclickClient(autoclick_client) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ax.mojom.AccessibilityServiceClient_BindAutoclickClient_ParamsSpec,
      null,
      [autoclick_client],
      false);
  }

  bindSpeechRecognition(sr_receiver) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      ax.mojom.AccessibilityServiceClient_BindSpeechRecognition_ParamsSpec,
      null,
      [sr_receiver],
      false);
  }

  bindTts(tts_receiver) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      ax.mojom.AccessibilityServiceClient_BindTts_ParamsSpec,
      null,
      [tts_receiver],
      false);
  }

  bindUserInput(user_input_receiver) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      ax.mojom.AccessibilityServiceClient_BindUserInput_ParamsSpec,
      null,
      [user_input_receiver],
      false);
  }

  bindUserInterface(user_interface_receiver) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      ax.mojom.AccessibilityServiceClient_BindUserInterface_ParamsSpec,
      null,
      [user_interface_receiver],
      false);
  }

  bindAccessibilityFileLoader(file_loader_receiver) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      ax.mojom.AccessibilityServiceClient_BindAccessibilityFileLoader_ParamsSpec,
      null,
      [file_loader_receiver],
      false);
  }

};

ax.mojom.AccessibilityServiceClient.getRemote = function() {
  let remote = new ax.mojom.AccessibilityServiceClientRemote();
  remote.bindNewPipeAndPassReceiver();
  remote.proxy.endpoint_.bindInBrowser(
    'ax.mojom.AccessibilityServiceClient',
    'context');
  return remote.$;
};

ax.mojom.AccessibilityServiceClientPtr = ax.mojom.AccessibilityServiceClientRemote;
ax.mojom.AccessibilityServiceClientRequest = ax.mojom.AccessibilityServiceClientPendingReceiver;

