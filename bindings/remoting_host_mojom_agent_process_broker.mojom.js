// Auto-generated MojoJS binding
// Source: chromium_src/remoting/host/mojom/agent_process_broker.mojom
// Module: remoting.mojom

'use strict';

// Module namespace
var remoting = remoting || {};
remoting.mojom = remoting.mojom || {};

remoting.mojom.AgentProcess = {};
remoting.mojom.AgentProcess.$interfaceName = 'remoting.mojom.AgentProcess';
remoting.mojom.AgentProcess_ResumeProcess_ParamsSpec = { $: {} };
remoting.mojom.AgentProcess_SuspendProcess_ParamsSpec = { $: {} };
remoting.mojom.AgentProcess_BindRemotingHostControl_ParamsSpec = { $: {} };
remoting.mojom.AgentProcessBroker = {};
remoting.mojom.AgentProcessBroker.$interfaceName = 'remoting.mojom.AgentProcessBroker';
remoting.mojom.AgentProcessBroker_OnAgentProcessLaunched_ParamsSpec = { $: {} };

// Interface: AgentProcess
mojo.internal.Struct(
    remoting.mojom.AgentProcess_ResumeProcess_ParamsSpec, 'remoting.mojom.AgentProcess_ResumeProcess_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    remoting.mojom.AgentProcess_SuspendProcess_ParamsSpec, 'remoting.mojom.AgentProcess_SuspendProcess_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    remoting.mojom.AgentProcess_BindRemotingHostControl_ParamsSpec, 'remoting.mojom.AgentProcess_BindRemotingHostControl_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(remoting.mojom.RemotingHostControlRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

remoting.mojom.AgentProcessPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

remoting.mojom.AgentProcessRemote = class {
  static get $interfaceName() {
    return 'remoting.mojom.AgentProcess';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      remoting.mojom.AgentProcessPendingReceiver,
      handle);
    this.$ = new remoting.mojom.AgentProcessRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

remoting.mojom.AgentProcessRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  resumeProcess() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      remoting.mojom.AgentProcess_ResumeProcess_ParamsSpec,
      null,
      [],
      false);
  }

  suspendProcess() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      remoting.mojom.AgentProcess_SuspendProcess_ParamsSpec,
      null,
      [],
      false);
  }

  bindRemotingHostControl(receiver) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      remoting.mojom.AgentProcess_BindRemotingHostControl_ParamsSpec,
      null,
      [receiver],
      false);
  }

};

remoting.mojom.AgentProcess.getRemote = function() {
  let remote = new remoting.mojom.AgentProcessRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'remoting.mojom.AgentProcess',
    'context');
  return remote.$;
};

remoting.mojom.AgentProcessReceiver = class {
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
        
        // Try Method 0: ResumeProcess
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(remoting.mojom.AgentProcess_ResumeProcess_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ResumeProcess (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: SuspendProcess
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(remoting.mojom.AgentProcess_SuspendProcess_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SuspendProcess (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: BindRemotingHostControl
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(remoting.mojom.AgentProcess_BindRemotingHostControl_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> BindRemotingHostControl (2)');
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
          const params = decoder.decodeStruct(remoting.mojom.AgentProcess_ResumeProcess_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.resumeProcess');
          const result = this.impl.resumeProcess();
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(remoting.mojom.AgentProcess_SuspendProcess_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.suspendProcess');
          const result = this.impl.suspendProcess();
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(remoting.mojom.AgentProcess_BindRemotingHostControl_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.bindRemotingHostControl');
          const result = this.impl.bindRemotingHostControl(params.receiver);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

remoting.mojom.AgentProcessReceiver = remoting.mojom.AgentProcessReceiver;

remoting.mojom.AgentProcessPtr = remoting.mojom.AgentProcessRemote;
remoting.mojom.AgentProcessRequest = remoting.mojom.AgentProcessPendingReceiver;


// Interface: AgentProcessBroker
mojo.internal.Struct(
    remoting.mojom.AgentProcessBroker_OnAgentProcessLaunched_ParamsSpec, 'remoting.mojom.AgentProcessBroker_OnAgentProcessLaunched_Params', [
      mojo.internal.StructField('agent_process', 0, 0, mojo.internal.InterfaceProxy(remoting.mojom.AgentProcessSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

remoting.mojom.AgentProcessBrokerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

remoting.mojom.AgentProcessBrokerRemote = class {
  static get $interfaceName() {
    return 'remoting.mojom.AgentProcessBroker';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      remoting.mojom.AgentProcessBrokerPendingReceiver,
      handle);
    this.$ = new remoting.mojom.AgentProcessBrokerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

remoting.mojom.AgentProcessBrokerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onAgentProcessLaunched(agent_process) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      remoting.mojom.AgentProcessBroker_OnAgentProcessLaunched_ParamsSpec,
      null,
      [agent_process],
      false);
  }

};

remoting.mojom.AgentProcessBroker.getRemote = function() {
  let remote = new remoting.mojom.AgentProcessBrokerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'remoting.mojom.AgentProcessBroker',
    'context');
  return remote.$;
};

remoting.mojom.AgentProcessBrokerReceiver = class {
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
        
        // Try Method 0: OnAgentProcessLaunched
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(remoting.mojom.AgentProcessBroker_OnAgentProcessLaunched_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnAgentProcessLaunched (0)');
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
          const params = decoder.decodeStruct(remoting.mojom.AgentProcessBroker_OnAgentProcessLaunched_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onAgentProcessLaunched');
          const result = this.impl.onAgentProcessLaunched(params.agent_process);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

remoting.mojom.AgentProcessBrokerReceiver = remoting.mojom.AgentProcessBrokerReceiver;

remoting.mojom.AgentProcessBrokerPtr = remoting.mojom.AgentProcessBrokerRemote;
remoting.mojom.AgentProcessBrokerRequest = remoting.mojom.AgentProcessBrokerPendingReceiver;

