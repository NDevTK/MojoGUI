// Auto-generated MojoJS binding
// Source: chromium_src/services/accessibility/public/mojom/accessibility_service.mojom
// Module: ax.mojom

// Module namespace
var ax = ax || {};
ax.mojom = ax.mojom || {};
var sandbox = sandbox || {};
var blink = blink || {};

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
  enableAssistiveTechnology(enabled_features) {
    return this.$.enableAssistiveTechnology(enabled_features);
  }
};

ax.mojom.AssistiveTechnologyControllerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('AssistiveTechnologyController', [
      { explicit: null },
    ]);
  }

  enableAssistiveTechnology(enabled_features) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      ax.mojom.AssistiveTechnologyController_EnableAssistiveTechnology_ParamsSpec,
      null,
      [enabled_features],
      false);
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
};

ax.mojom.AssistiveTechnologyControllerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('AssistiveTechnologyController', [
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.router_.onConnectionError.addListener(() => {
       console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
    });
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ax.mojom.AssistiveTechnologyController_EnableAssistiveTechnology_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ax.mojom.AssistiveTechnologyController_EnableAssistiveTechnology_ParamsSpec.$.structSpec);
          const result = this.impl.enableAssistiveTechnology(params.enabled_features);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

ax.mojom.AssistiveTechnologyControllerReceiver = ax.mojom.AssistiveTechnologyControllerReceiver;

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
      mojo.internal.StructField('agent', 0, 0, pending_associated_receiver<blink.mojom.DevToolsAgent>Spec.$, null, false, 0, undefined),
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
  bindAccessibilityServiceClient(accessibility_service_client) {
    return this.$.bindAccessibilityServiceClient(accessibility_service_client);
  }
  bindAssistiveTechnologyController(at_controller, enabled_features) {
    return this.$.bindAssistiveTechnologyController(at_controller, enabled_features);
  }
  connectDevToolsAgent(agent, type) {
    return this.$.connectDevToolsAgent(agent, type);
  }
};

ax.mojom.AccessibilityServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('AccessibilityService', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  bindAccessibilityServiceClient(accessibility_service_client) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      ax.mojom.AccessibilityService_BindAccessibilityServiceClient_ParamsSpec,
      null,
      [accessibility_service_client],
      false);
  }

  bindAssistiveTechnologyController(at_controller, enabled_features) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      ax.mojom.AccessibilityService_BindAssistiveTechnologyController_ParamsSpec,
      null,
      [at_controller, enabled_features],
      false);
  }

  connectDevToolsAgent(agent, type) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      ax.mojom.AccessibilityService_ConnectDevToolsAgent_ParamsSpec,
      null,
      [agent, type],
      false);
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
};

ax.mojom.AccessibilityServiceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('AccessibilityService', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.router_.onConnectionError.addListener(() => {
       console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
    });
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ax.mojom.AccessibilityService_BindAccessibilityServiceClient_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ax.mojom.AccessibilityService_BindAssistiveTechnologyController_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ax.mojom.AccessibilityService_ConnectDevToolsAgent_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ax.mojom.AccessibilityService_BindAccessibilityServiceClient_ParamsSpec.$.structSpec);
          const result = this.impl.bindAccessibilityServiceClient(params.accessibility_service_client);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ax.mojom.AccessibilityService_BindAssistiveTechnologyController_ParamsSpec.$.structSpec);
          const result = this.impl.bindAssistiveTechnologyController(params.at_controller, params.enabled_features);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ax.mojom.AccessibilityService_ConnectDevToolsAgent_ParamsSpec.$.structSpec);
          const result = this.impl.connectDevToolsAgent(params.agent, params.type);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

ax.mojom.AccessibilityServiceReceiver = ax.mojom.AccessibilityServiceReceiver;

ax.mojom.AccessibilityServicePtr = ax.mojom.AccessibilityServiceRemote;
ax.mojom.AccessibilityServiceRequest = ax.mojom.AccessibilityServicePendingReceiver;


// Interface: AccessibilityServiceClient
mojo.internal.Struct(
    ax.mojom.AccessibilityServiceClient_BindAutomation_ParamsSpec, 'ax.mojom.AccessibilityServiceClient_BindAutomation_Params', [
      mojo.internal.StructField('automation', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
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
  bindAutomation(automation) {
    return this.$.bindAutomation(automation);
  }
  bindAutomationClient(automation_client) {
    return this.$.bindAutomationClient(automation_client);
  }
  bindAutoclickClient(autoclick_client) {
    return this.$.bindAutoclickClient(autoclick_client);
  }
  bindSpeechRecognition(sr_receiver) {
    return this.$.bindSpeechRecognition(sr_receiver);
  }
  bindTts(tts_receiver) {
    return this.$.bindTts(tts_receiver);
  }
  bindUserInput(user_input_receiver) {
    return this.$.bindUserInput(user_input_receiver);
  }
  bindUserInterface(user_interface_receiver) {
    return this.$.bindUserInterface(user_interface_receiver);
  }
  bindAccessibilityFileLoader(file_loader_receiver) {
    return this.$.bindAccessibilityFileLoader(file_loader_receiver);
  }
};

ax.mojom.AccessibilityServiceClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('AccessibilityServiceClient', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  bindAutomation(automation) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      ax.mojom.AccessibilityServiceClient_BindAutomation_ParamsSpec,
      null,
      [automation],
      false);
  }

  bindAutomationClient(automation_client) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      ax.mojom.AccessibilityServiceClient_BindAutomationClient_ParamsSpec,
      null,
      [automation_client],
      false);
  }

  bindAutoclickClient(autoclick_client) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      ax.mojom.AccessibilityServiceClient_BindAutoclickClient_ParamsSpec,
      null,
      [autoclick_client],
      false);
  }

  bindSpeechRecognition(sr_receiver) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      ax.mojom.AccessibilityServiceClient_BindSpeechRecognition_ParamsSpec,
      null,
      [sr_receiver],
      false);
  }

  bindTts(tts_receiver) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      ax.mojom.AccessibilityServiceClient_BindTts_ParamsSpec,
      null,
      [tts_receiver],
      false);
  }

  bindUserInput(user_input_receiver) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      ax.mojom.AccessibilityServiceClient_BindUserInput_ParamsSpec,
      null,
      [user_input_receiver],
      false);
  }

  bindUserInterface(user_interface_receiver) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      ax.mojom.AccessibilityServiceClient_BindUserInterface_ParamsSpec,
      null,
      [user_interface_receiver],
      false);
  }

  bindAccessibilityFileLoader(file_loader_receiver) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      ax.mojom.AccessibilityServiceClient_BindAccessibilityFileLoader_ParamsSpec,
      null,
      [file_loader_receiver],
      false);
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
};

ax.mojom.AccessibilityServiceClientReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('AccessibilityServiceClient', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.router_.onConnectionError.addListener(() => {
       console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
    });
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ax.mojom.AccessibilityServiceClient_BindAutomation_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ax.mojom.AccessibilityServiceClient_BindAutomationClient_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ax.mojom.AccessibilityServiceClient_BindAutoclickClient_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ax.mojom.AccessibilityServiceClient_BindSpeechRecognition_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ax.mojom.AccessibilityServiceClient_BindTts_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ax.mojom.AccessibilityServiceClient_BindUserInput_ParamsSpec);
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ax.mojom.AccessibilityServiceClient_BindUserInterface_ParamsSpec);
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ax.mojom.AccessibilityServiceClient_BindAccessibilityFileLoader_ParamsSpec);
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ax.mojom.AccessibilityServiceClient_BindAutomation_ParamsSpec.$.structSpec);
          const result = this.impl.bindAutomation(params.automation);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ax.mojom.AccessibilityServiceClient_BindAutomationClient_ParamsSpec.$.structSpec);
          const result = this.impl.bindAutomationClient(params.automation_client);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ax.mojom.AccessibilityServiceClient_BindAutoclickClient_ParamsSpec.$.structSpec);
          const result = this.impl.bindAutoclickClient(params.autoclick_client);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ax.mojom.AccessibilityServiceClient_BindSpeechRecognition_ParamsSpec.$.structSpec);
          const result = this.impl.bindSpeechRecognition(params.sr_receiver);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ax.mojom.AccessibilityServiceClient_BindTts_ParamsSpec.$.structSpec);
          const result = this.impl.bindTts(params.tts_receiver);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ax.mojom.AccessibilityServiceClient_BindUserInput_ParamsSpec.$.structSpec);
          const result = this.impl.bindUserInput(params.user_input_receiver);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ax.mojom.AccessibilityServiceClient_BindUserInterface_ParamsSpec.$.structSpec);
          const result = this.impl.bindUserInterface(params.user_interface_receiver);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ax.mojom.AccessibilityServiceClient_BindAccessibilityFileLoader_ParamsSpec.$.structSpec);
          const result = this.impl.bindAccessibilityFileLoader(params.file_loader_receiver);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

ax.mojom.AccessibilityServiceClientReceiver = ax.mojom.AccessibilityServiceClientReceiver;

ax.mojom.AccessibilityServiceClientPtr = ax.mojom.AccessibilityServiceClientRemote;
ax.mojom.AccessibilityServiceClientRequest = ax.mojom.AccessibilityServiceClientPendingReceiver;

