// Auto-generated MojoJS binding
// Source: chromium_src/chromecast/external_mojo/public/mojom/connector.mojom
// Module: chromecast.external_mojo.mojom

'use strict';

// Module namespace
var chromecast = chromecast || {};
chromecast.external_mojo = chromecast.external_mojo || {};
chromecast.external_mojo.mojom = chromecast.external_mojo.mojom || {};
var mojo_base = mojo_base || {};

chromecast.external_mojo.mojom.ExternalServiceInfoSpec = { $: {} };
chromecast.external_mojo.mojom.ServiceInstanceInfoSpec = { $: {} };
chromecast.external_mojo.mojom.ExternalService = {};
chromecast.external_mojo.mojom.ExternalService.$interfaceName = 'chromecast.external_mojo.mojom.ExternalService';
chromecast.external_mojo.mojom.ExternalService_OnBindInterface_ParamsSpec = { $: {} };
chromecast.external_mojo.mojom.ExternalConnector = {};
chromecast.external_mojo.mojom.ExternalConnector.$interfaceName = 'chromecast.external_mojo.mojom.ExternalConnector';
chromecast.external_mojo.mojom.ExternalConnector_RegisterServiceInstances_ParamsSpec = { $: {} };
chromecast.external_mojo.mojom.ExternalConnector_BindInterface_ParamsSpec = { $: {} };
chromecast.external_mojo.mojom.ExternalConnector_Clone_ParamsSpec = { $: {} };
chromecast.external_mojo.mojom.ExternalConnector_BindChromiumConnector_ParamsSpec = { $: {} };
chromecast.external_mojo.mojom.ExternalConnector_QueryServiceList_ParamsSpec = { $: {} };
chromecast.external_mojo.mojom.ExternalConnector_QueryServiceList_ResponseParamsSpec = { $: {} };

// Struct: ExternalServiceInfo
mojo.internal.Struct(
    chromecast.external_mojo.mojom.ExternalServiceInfoSpec, 'chromecast.external_mojo.mojom.ExternalServiceInfo', [
      mojo.internal.StructField('name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('connect_time', 8, 0, mojo_base.mojom.TimeTicksSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('disconnect_time', 16, 0, mojo_base.mojom.TimeTicksSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: ServiceInstanceInfo
mojo.internal.Struct(
    chromecast.external_mojo.mojom.ServiceInstanceInfoSpec, 'chromecast.external_mojo.mojom.ServiceInstanceInfo', [
      mojo.internal.StructField('service_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('service_remote', 8, 0, mojo.internal.InterfaceProxy(chromecast.external_mojo.mojom.ExternalServiceSpec), null, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: ExternalService
mojo.internal.Struct(
    chromecast.external_mojo.mojom.ExternalService_OnBindInterface_ParamsSpec, 'chromecast.external_mojo.mojom.ExternalService_OnBindInterface_Params', [
      mojo.internal.StructField('interface_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('interface_pipe', 8, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 24]]);

chromecast.external_mojo.mojom.ExternalServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chromecast.external_mojo.mojom.ExternalServiceRemote = class {
  static get $interfaceName() {
    return 'chromecast.external_mojo.mojom.ExternalService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chromecast.external_mojo.mojom.ExternalServicePendingReceiver,
      handle);
    this.$ = new chromecast.external_mojo.mojom.ExternalServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chromecast.external_mojo.mojom.ExternalServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onBindInterface(interface_name, interface_pipe) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      chromecast.external_mojo.mojom.ExternalService_OnBindInterface_ParamsSpec,
      null,
      [interface_name, interface_pipe],
      false);
  }

};

chromecast.external_mojo.mojom.ExternalService.getRemote = function() {
  let remote = new chromecast.external_mojo.mojom.ExternalServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromecast.external_mojo.mojom.ExternalService',
    'context');
  return remote.$;
};

chromecast.external_mojo.mojom.ExternalServiceReceiver = class {
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
        message = {
          header: args[1],
          payload: args[2],
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
        
        // Try Method 0: OnBindInterface
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(chromecast.external_mojo.mojom.ExternalService_OnBindInterface_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnBindInterface (0)');
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
          const params = decoder.decodeStruct(chromecast.external_mojo.mojom.ExternalService_OnBindInterface_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onBindInterface');
          const result = this.impl.onBindInterface(params.interface_name, params.interface_pipe);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

chromecast.external_mojo.mojom.ExternalServiceReceiver = chromecast.external_mojo.mojom.ExternalServiceReceiver;

chromecast.external_mojo.mojom.ExternalServicePtr = chromecast.external_mojo.mojom.ExternalServiceRemote;
chromecast.external_mojo.mojom.ExternalServiceRequest = chromecast.external_mojo.mojom.ExternalServicePendingReceiver;


// Interface: ExternalConnector
mojo.internal.Struct(
    chromecast.external_mojo.mojom.ExternalConnector_RegisterServiceInstances_ParamsSpec, 'chromecast.external_mojo.mojom.ExternalConnector_RegisterServiceInstances_Params', [
      mojo.internal.StructField('instances_info', 0, 0, mojo.internal.Array(chromecast.external_mojo.mojom.ServiceInstanceInfoSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromecast.external_mojo.mojom.ExternalConnector_BindInterface_ParamsSpec, 'chromecast.external_mojo.mojom.ExternalConnector_BindInterface_Params', [
      mojo.internal.StructField('service_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('interface_name', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('interface_pipe', 16, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    chromecast.external_mojo.mojom.ExternalConnector_Clone_ParamsSpec, 'chromecast.external_mojo.mojom.ExternalConnector_Clone_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(chromecast.external_mojo.mojom.ExternalConnectorSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromecast.external_mojo.mojom.ExternalConnector_BindChromiumConnector_ParamsSpec, 'chromecast.external_mojo.mojom.ExternalConnector_BindChromiumConnector_Params', [
      mojo.internal.StructField('interface_pipe', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromecast.external_mojo.mojom.ExternalConnector_QueryServiceList_ParamsSpec, 'chromecast.external_mojo.mojom.ExternalConnector_QueryServiceList_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    chromecast.external_mojo.mojom.ExternalConnector_QueryServiceList_ResponseParamsSpec, 'chromecast.external_mojo.mojom.ExternalConnector_QueryServiceList_ResponseParams', [
      mojo.internal.StructField('services', 0, 0, mojo.internal.Array(chromecast.external_mojo.mojom.ExternalServiceInfoSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

chromecast.external_mojo.mojom.ExternalConnectorPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chromecast.external_mojo.mojom.ExternalConnectorRemote = class {
  static get $interfaceName() {
    return 'chromecast.external_mojo.mojom.ExternalConnector';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chromecast.external_mojo.mojom.ExternalConnectorPendingReceiver,
      handle);
    this.$ = new chromecast.external_mojo.mojom.ExternalConnectorRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chromecast.external_mojo.mojom.ExternalConnectorRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  registerServiceInstances(instances_info) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      chromecast.external_mojo.mojom.ExternalConnector_RegisterServiceInstances_ParamsSpec,
      null,
      [instances_info],
      false);
  }

  bindInterface(service_name, interface_name, interface_pipe) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      chromecast.external_mojo.mojom.ExternalConnector_BindInterface_ParamsSpec,
      null,
      [service_name, interface_name, interface_pipe],
      false);
  }

  clone(receiver) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      chromecast.external_mojo.mojom.ExternalConnector_Clone_ParamsSpec,
      null,
      [receiver],
      false);
  }

  bindChromiumConnector(interface_pipe) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      chromecast.external_mojo.mojom.ExternalConnector_BindChromiumConnector_ParamsSpec,
      null,
      [interface_pipe],
      false);
  }

  queryServiceList() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      chromecast.external_mojo.mojom.ExternalConnector_QueryServiceList_ParamsSpec,
      chromecast.external_mojo.mojom.ExternalConnector_QueryServiceList_ResponseParamsSpec,
      [],
      false);
  }

};

chromecast.external_mojo.mojom.ExternalConnector.getRemote = function() {
  let remote = new chromecast.external_mojo.mojom.ExternalConnectorRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromecast.external_mojo.mojom.ExternalConnector',
    'context');
  return remote.$;
};

chromecast.external_mojo.mojom.ExternalConnectorReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
    this.ordinalMap.set(3, 3); // Default ordinal 3 -> Index 3
    this.ordinalMap.set(4, 4); // Default ordinal 4 -> Index 4
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
        message = {
          header: args[1],
          payload: args[2],
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
        
        // Try Method 0: RegisterServiceInstances
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(chromecast.external_mojo.mojom.ExternalConnector_RegisterServiceInstances_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RegisterServiceInstances (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: BindInterface
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(chromecast.external_mojo.mojom.ExternalConnector_BindInterface_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> BindInterface (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: Clone
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(chromecast.external_mojo.mojom.ExternalConnector_Clone_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Clone (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: BindChromiumConnector
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(chromecast.external_mojo.mojom.ExternalConnector_BindChromiumConnector_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> BindChromiumConnector (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: QueryServiceList
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(chromecast.external_mojo.mojom.ExternalConnector_QueryServiceList_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> QueryServiceList (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
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
          const params = decoder.decodeStruct(chromecast.external_mojo.mojom.ExternalConnector_RegisterServiceInstances_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.registerServiceInstances');
          const result = this.impl.registerServiceInstances(params.instances_info);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(chromecast.external_mojo.mojom.ExternalConnector_BindInterface_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.bindInterface');
          const result = this.impl.bindInterface(params.service_name, params.interface_name, params.interface_pipe);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(chromecast.external_mojo.mojom.ExternalConnector_Clone_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.clone');
          const result = this.impl.clone(params.receiver);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(chromecast.external_mojo.mojom.ExternalConnector_BindChromiumConnector_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.bindChromiumConnector');
          const result = this.impl.bindChromiumConnector(params.interface_pipe);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(chromecast.external_mojo.mojom.ExternalConnector_QueryServiceList_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.queryServiceList');
          const result = this.impl.queryServiceList();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, chromecast.external_mojo.mojom.ExternalConnector_QueryServiceList_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

chromecast.external_mojo.mojom.ExternalConnectorReceiver = chromecast.external_mojo.mojom.ExternalConnectorReceiver;

chromecast.external_mojo.mojom.ExternalConnectorPtr = chromecast.external_mojo.mojom.ExternalConnectorRemote;
chromecast.external_mojo.mojom.ExternalConnectorRequest = chromecast.external_mojo.mojom.ExternalConnectorPendingReceiver;

