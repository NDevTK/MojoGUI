// Auto-generated MojoJS binding
// Source: chromium_src/services/metrics/public/mojom/ukm_interface.mojom
// Module: ukm.mojom

'use strict';

// Module namespace
var ukm = ukm || {};
ukm.mojom = ukm.mojom || {};

ukm.mojom.UkmEntrySpec = { $: {} };
ukm.mojom.UkmRecorderParametersSpec = { $: {} };
ukm.mojom.SingularUkmInterface = {};
ukm.mojom.SingularUkmInterface.$interfaceName = 'ukm.mojom.SingularUkmInterface';
ukm.mojom.SingularUkmInterface_Submit_ParamsSpec = { $: {} };
ukm.mojom.UkmRecorderClientInterface = {};
ukm.mojom.UkmRecorderClientInterface.$interfaceName = 'ukm.mojom.UkmRecorderClientInterface';
ukm.mojom.UkmRecorderClientInterface_SetParameters_ParamsSpec = { $: {} };
ukm.mojom.UkmRecorderInterface = {};
ukm.mojom.UkmRecorderInterface.$interfaceName = 'ukm.mojom.UkmRecorderInterface';
ukm.mojom.UkmRecorderInterface_AddEntry_ParamsSpec = { $: {} };
ukm.mojom.UkmRecorderInterface_UpdateSourceURL_ParamsSpec = { $: {} };
ukm.mojom.UkmRecorderFactory = {};
ukm.mojom.UkmRecorderFactory.$interfaceName = 'ukm.mojom.UkmRecorderFactory';
ukm.mojom.UkmRecorderFactory_CreateUkmRecorder_ParamsSpec = { $: {} };

// Struct: UkmEntry
mojo.internal.Struct(
    ukm.mojom.UkmEntrySpec, 'ukm.mojom.UkmEntry', [
      mojo.internal.StructField('source_id', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('event_hash', 8, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('metrics', 16, 0, mojo.internal.Map(mojo.internal.Uint64, mojo.internal.Int64, false), null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: UkmRecorderParameters
mojo.internal.Struct(
    ukm.mojom.UkmRecorderParametersSpec, 'ukm.mojom.UkmRecorderParameters', [
      mojo.internal.StructField('event_hash_bypass_list', 0, 0, mojo.internal.Array(mojo.internal.Uint64, false), null, false, 0, undefined),
      mojo.internal.StructField('is_enabled', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: SingularUkmInterface
mojo.internal.Struct(
    ukm.mojom.SingularUkmInterface_Submit_ParamsSpec, 'ukm.mojom.SingularUkmInterface_Submit_Params', [
      mojo.internal.StructField('entry', 0, 0, ukm.mojom.UkmEntrySpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

ukm.mojom.SingularUkmInterfacePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ukm.mojom.SingularUkmInterfaceRemote = class {
  static get $interfaceName() {
    return 'ukm.mojom.SingularUkmInterface';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ukm.mojom.SingularUkmInterfacePendingReceiver,
      handle);
    this.$ = new ukm.mojom.SingularUkmInterfaceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ukm.mojom.SingularUkmInterfaceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  submit(entry) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ukm.mojom.SingularUkmInterface_Submit_ParamsSpec,
      null,
      [entry],
      false);
  }

};

ukm.mojom.SingularUkmInterface.getRemote = function() {
  let remote = new ukm.mojom.SingularUkmInterfaceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ukm.mojom.SingularUkmInterface',
    'context');
  return remote.$;
};

ukm.mojom.SingularUkmInterfaceReceiver = class {
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
        
        // Try Method 0: Submit
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ukm.mojom.SingularUkmInterface_Submit_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Submit (0)');
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
          const params = decoder.decodeStruct(ukm.mojom.SingularUkmInterface_Submit_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.submit');
          const result = this.impl.submit(params.entry);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

ukm.mojom.SingularUkmInterfaceReceiver = ukm.mojom.SingularUkmInterfaceReceiver;

ukm.mojom.SingularUkmInterfacePtr = ukm.mojom.SingularUkmInterfaceRemote;
ukm.mojom.SingularUkmInterfaceRequest = ukm.mojom.SingularUkmInterfacePendingReceiver;


// Interface: UkmRecorderClientInterface
mojo.internal.Struct(
    ukm.mojom.UkmRecorderClientInterface_SetParameters_ParamsSpec, 'ukm.mojom.UkmRecorderClientInterface_SetParameters_Params', [
      mojo.internal.StructField('params', 0, 0, ukm.mojom.UkmRecorderParametersSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

ukm.mojom.UkmRecorderClientInterfacePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ukm.mojom.UkmRecorderClientInterfaceRemote = class {
  static get $interfaceName() {
    return 'ukm.mojom.UkmRecorderClientInterface';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ukm.mojom.UkmRecorderClientInterfacePendingReceiver,
      handle);
    this.$ = new ukm.mojom.UkmRecorderClientInterfaceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ukm.mojom.UkmRecorderClientInterfaceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  setParameters(params) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ukm.mojom.UkmRecorderClientInterface_SetParameters_ParamsSpec,
      null,
      [params],
      false);
  }

};

ukm.mojom.UkmRecorderClientInterface.getRemote = function() {
  let remote = new ukm.mojom.UkmRecorderClientInterfaceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ukm.mojom.UkmRecorderClientInterface',
    'context');
  return remote.$;
};

ukm.mojom.UkmRecorderClientInterfaceReceiver = class {
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
        
        // Try Method 0: SetParameters
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ukm.mojom.UkmRecorderClientInterface_SetParameters_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetParameters (0)');
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
          const params = decoder.decodeStruct(ukm.mojom.UkmRecorderClientInterface_SetParameters_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setParameters');
          const result = this.impl.setParameters(params.params);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

ukm.mojom.UkmRecorderClientInterfaceReceiver = ukm.mojom.UkmRecorderClientInterfaceReceiver;

ukm.mojom.UkmRecorderClientInterfacePtr = ukm.mojom.UkmRecorderClientInterfaceRemote;
ukm.mojom.UkmRecorderClientInterfaceRequest = ukm.mojom.UkmRecorderClientInterfacePendingReceiver;


// Interface: UkmRecorderInterface
mojo.internal.Struct(
    ukm.mojom.UkmRecorderInterface_AddEntry_ParamsSpec, 'ukm.mojom.UkmRecorderInterface_AddEntry_Params', [
      mojo.internal.StructField('entry', 0, 0, ukm.mojom.UkmEntrySpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ukm.mojom.UkmRecorderInterface_UpdateSourceURL_ParamsSpec, 'ukm.mojom.UkmRecorderInterface_UpdateSourceURL_Params', [
      mojo.internal.StructField('source_id', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('url', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

ukm.mojom.UkmRecorderInterfacePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ukm.mojom.UkmRecorderInterfaceRemote = class {
  static get $interfaceName() {
    return 'ukm.mojom.UkmRecorderInterface';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ukm.mojom.UkmRecorderInterfacePendingReceiver,
      handle);
    this.$ = new ukm.mojom.UkmRecorderInterfaceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ukm.mojom.UkmRecorderInterfaceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  addEntry(entry) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ukm.mojom.UkmRecorderInterface_AddEntry_ParamsSpec,
      null,
      [entry],
      false);
  }

  updateSourceURL(source_id, url) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ukm.mojom.UkmRecorderInterface_UpdateSourceURL_ParamsSpec,
      null,
      [source_id, url],
      false);
  }

};

ukm.mojom.UkmRecorderInterface.getRemote = function() {
  let remote = new ukm.mojom.UkmRecorderInterfaceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ukm.mojom.UkmRecorderInterface',
    'context');
  return remote.$;
};

ukm.mojom.UkmRecorderInterfaceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
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
        
        // Try Method 0: AddEntry
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ukm.mojom.UkmRecorderInterface_AddEntry_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AddEntry (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: UpdateSourceURL
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ukm.mojom.UkmRecorderInterface_UpdateSourceURL_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UpdateSourceURL (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
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
          const params = decoder.decodeStruct(ukm.mojom.UkmRecorderInterface_AddEntry_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.addEntry');
          const result = this.impl.addEntry(params.entry);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ukm.mojom.UkmRecorderInterface_UpdateSourceURL_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.updateSourceURL');
          const result = this.impl.updateSourceURL(params.source_id, params.url);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

ukm.mojom.UkmRecorderInterfaceReceiver = ukm.mojom.UkmRecorderInterfaceReceiver;

ukm.mojom.UkmRecorderInterfacePtr = ukm.mojom.UkmRecorderInterfaceRemote;
ukm.mojom.UkmRecorderInterfaceRequest = ukm.mojom.UkmRecorderInterfacePendingReceiver;


// Interface: UkmRecorderFactory
mojo.internal.Struct(
    ukm.mojom.UkmRecorderFactory_CreateUkmRecorder_ParamsSpec, 'ukm.mojom.UkmRecorderFactory_CreateUkmRecorder_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(ukm.mojom.UkmRecorderInterfaceSpec), null, false, 0, undefined),
      mojo.internal.StructField('client_remote', 8, 0, mojo.internal.InterfaceProxy(ukm.mojom.UkmRecorderClientInterfaceSpec), null, true, 0, undefined),
    ],
    [[0, 24]]);

ukm.mojom.UkmRecorderFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ukm.mojom.UkmRecorderFactoryRemote = class {
  static get $interfaceName() {
    return 'ukm.mojom.UkmRecorderFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ukm.mojom.UkmRecorderFactoryPendingReceiver,
      handle);
    this.$ = new ukm.mojom.UkmRecorderFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ukm.mojom.UkmRecorderFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createUkmRecorder(receiver, client_remote) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ukm.mojom.UkmRecorderFactory_CreateUkmRecorder_ParamsSpec,
      null,
      [receiver, client_remote],
      false);
  }

};

ukm.mojom.UkmRecorderFactory.getRemote = function() {
  let remote = new ukm.mojom.UkmRecorderFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ukm.mojom.UkmRecorderFactory',
    'context');
  return remote.$;
};

ukm.mojom.UkmRecorderFactoryReceiver = class {
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
        
        // Try Method 0: CreateUkmRecorder
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ukm.mojom.UkmRecorderFactory_CreateUkmRecorder_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreateUkmRecorder (0)');
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
          const params = decoder.decodeStruct(ukm.mojom.UkmRecorderFactory_CreateUkmRecorder_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.createUkmRecorder');
          const result = this.impl.createUkmRecorder(params.receiver, params.client_remote);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

ukm.mojom.UkmRecorderFactoryReceiver = ukm.mojom.UkmRecorderFactoryReceiver;

ukm.mojom.UkmRecorderFactoryPtr = ukm.mojom.UkmRecorderFactoryRemote;
ukm.mojom.UkmRecorderFactoryRequest = ukm.mojom.UkmRecorderFactoryPendingReceiver;

