// Auto-generated MojoJS binding
// Source: chromium_src/services/accessibility/public/mojom/accessibility_service.mojom
// Module: ax.mojom

'use strict';

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
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: EnableAssistiveTechnology
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ax.mojom.AssistiveTechnologyController_EnableAssistiveTechnology_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> EnableAssistiveTechnology (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ax.mojom.AssistiveTechnologyController_EnableAssistiveTechnology_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.enableAssistiveTechnology');
          const result = this.impl.enableAssistiveTechnology(params.enabled_features);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

ax.mojom.AssistiveTechnologyControllerReceiver = ax.mojom.AssistiveTechnologyControllerReceiver;

ax.mojom.AssistiveTechnologyControllerPtr = ax.mojom.AssistiveTechnologyControllerRemote;
ax.mojom.AssistiveTechnologyControllerRequest = ax.mojom.AssistiveTechnologyControllerPendingReceiver;


// Interface: AccessibilityService
mojo.internal.Struct(
    ax.mojom.AccessibilityService_BindAccessibilityServiceClient_ParamsSpec, 'ax.mojom.AccessibilityService_BindAccessibilityServiceClient_Params', [
      mojo.internal.StructField('accessibility_service_client', 0, 0, mojo.internal.InterfaceProxy(ax.mojom.AccessibilityServiceClientSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ax.mojom.AccessibilityService_BindAssistiveTechnologyController_ParamsSpec, 'ax.mojom.AccessibilityService_BindAssistiveTechnologyController_Params', [
      mojo.internal.StructField('at_controller', 0, 0, mojo.internal.InterfaceRequest(ax.mojom.AssistiveTechnologyControllerSpec), null, false, 0, undefined),
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
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: BindAccessibilityServiceClient
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ax.mojom.AccessibilityService_BindAccessibilityServiceClient_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> BindAccessibilityServiceClient (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: BindAssistiveTechnologyController
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ax.mojom.AccessibilityService_BindAssistiveTechnologyController_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> BindAssistiveTechnologyController (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: ConnectDevToolsAgent
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ax.mojom.AccessibilityService_ConnectDevToolsAgent_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ConnectDevToolsAgent (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ax.mojom.AccessibilityService_BindAccessibilityServiceClient_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.bindAccessibilityServiceClient');
          const result = this.impl.bindAccessibilityServiceClient(params.accessibility_service_client);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ax.mojom.AccessibilityService_BindAssistiveTechnologyController_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.bindAssistiveTechnologyController');
          const result = this.impl.bindAssistiveTechnologyController(params.at_controller, params.enabled_features);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ax.mojom.AccessibilityService_ConnectDevToolsAgent_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.connectDevToolsAgent');
          const result = this.impl.connectDevToolsAgent(params.agent, params.type);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
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
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
    this.ordinalMap.set(3, 3); // Default ordinal 3 -> Index 3
    this.ordinalMap.set(4, 4); // Default ordinal 4 -> Index 4
    this.ordinalMap.set(5, 5); // Default ordinal 5 -> Index 5
    this.ordinalMap.set(6, 6); // Default ordinal 6 -> Index 6
    this.ordinalMap.set(7, 7); // Default ordinal 7 -> Index 7
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: BindAutomation
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ax.mojom.AccessibilityServiceClient_BindAutomation_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> BindAutomation (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: BindAutomationClient
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ax.mojom.AccessibilityServiceClient_BindAutomationClient_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> BindAutomationClient (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: BindAutoclickClient
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ax.mojom.AccessibilityServiceClient_BindAutoclickClient_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> BindAutoclickClient (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: BindSpeechRecognition
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ax.mojom.AccessibilityServiceClient_BindSpeechRecognition_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> BindSpeechRecognition (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: BindTts
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ax.mojom.AccessibilityServiceClient_BindTts_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> BindTts (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: BindUserInput
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ax.mojom.AccessibilityServiceClient_BindUserInput_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> BindUserInput (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: BindUserInterface
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ax.mojom.AccessibilityServiceClient_BindUserInterface_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> BindUserInterface (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: BindAccessibilityFileLoader
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ax.mojom.AccessibilityServiceClient_BindAccessibilityFileLoader_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> BindAccessibilityFileLoader (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ax.mojom.AccessibilityServiceClient_BindAutomation_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.bindAutomation');
          const result = this.impl.bindAutomation(params.automation);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ax.mojom.AccessibilityServiceClient_BindAutomationClient_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.bindAutomationClient');
          const result = this.impl.bindAutomationClient(params.automation_client);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ax.mojom.AccessibilityServiceClient_BindAutoclickClient_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.bindAutoclickClient');
          const result = this.impl.bindAutoclickClient(params.autoclick_client);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ax.mojom.AccessibilityServiceClient_BindSpeechRecognition_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.bindSpeechRecognition');
          const result = this.impl.bindSpeechRecognition(params.sr_receiver);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ax.mojom.AccessibilityServiceClient_BindTts_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.bindTts');
          const result = this.impl.bindTts(params.tts_receiver);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ax.mojom.AccessibilityServiceClient_BindUserInput_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.bindUserInput');
          const result = this.impl.bindUserInput(params.user_input_receiver);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ax.mojom.AccessibilityServiceClient_BindUserInterface_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.bindUserInterface');
          const result = this.impl.bindUserInterface(params.user_interface_receiver);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ax.mojom.AccessibilityServiceClient_BindAccessibilityFileLoader_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.bindAccessibilityFileLoader');
          const result = this.impl.bindAccessibilityFileLoader(params.file_loader_receiver);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

ax.mojom.AccessibilityServiceClientReceiver = ax.mojom.AccessibilityServiceClientReceiver;

ax.mojom.AccessibilityServiceClientPtr = ax.mojom.AccessibilityServiceClientRemote;
ax.mojom.AccessibilityServiceClientRequest = ax.mojom.AccessibilityServiceClientPendingReceiver;

