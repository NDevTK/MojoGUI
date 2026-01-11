// Auto-generated MojoJS binding
// Source: chromium_src/remoting/host/mojom/agent_process_broker.mojom
// Module: remoting.mojom

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
  resumeProcess() {
    return this.$.resumeProcess();
  }
  suspendProcess() {
    return this.$.suspendProcess();
  }
  bindRemotingHostControl(receiver) {
    return this.$.bindRemotingHostControl(receiver);
  }
};

remoting.mojom.AgentProcessRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('AgentProcess', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  resumeProcess() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      remoting.mojom.AgentProcess_ResumeProcess_ParamsSpec,
      null,
      [],
      false);
  }

  suspendProcess() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      remoting.mojom.AgentProcess_SuspendProcess_ParamsSpec,
      null,
      [],
      false);
  }

  bindRemotingHostControl(receiver) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
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
    const ordinals = window.mojoScrambler.getOrdinals('AgentProcess', [
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
             decoder.decodeStructInline(remoting.mojom.AgentProcess_ResumeProcess_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(remoting.mojom.AgentProcess_SuspendProcess_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(remoting.mojom.AgentProcess_BindRemotingHostControl_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(remoting.mojom.AgentProcess_ResumeProcess_ParamsSpec.$.structSpec);
          const result = this.impl.resumeProcess();
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(remoting.mojom.AgentProcess_SuspendProcess_ParamsSpec.$.structSpec);
          const result = this.impl.suspendProcess();
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(remoting.mojom.AgentProcess_BindRemotingHostControl_ParamsSpec.$.structSpec);
          const result = this.impl.bindRemotingHostControl(params.receiver);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

remoting.mojom.AgentProcessReceiver = remoting.mojom.AgentProcessReceiver;

remoting.mojom.AgentProcessPtr = remoting.mojom.AgentProcessRemote;
remoting.mojom.AgentProcessRequest = remoting.mojom.AgentProcessPendingReceiver;


// Interface: AgentProcessBroker
mojo.internal.Struct(
    remoting.mojom.AgentProcessBroker_OnAgentProcessLaunched_ParamsSpec, 'remoting.mojom.AgentProcessBroker_OnAgentProcessLaunched_Params', [
      mojo.internal.StructField('agent_process', 0, 0, mojo.internal.InterfaceProxy(remoting.mojom.AgentProcessRemote), null, false, 0, undefined),
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
  onAgentProcessLaunched(agent_process) {
    return this.$.onAgentProcessLaunched(agent_process);
  }
};

remoting.mojom.AgentProcessBrokerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('AgentProcessBroker', [
      { explicit: null },
    ]);
  }

  onAgentProcessLaunched(agent_process) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
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
    const ordinals = window.mojoScrambler.getOrdinals('AgentProcessBroker', [
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
             decoder.decodeStructInline(remoting.mojom.AgentProcessBroker_OnAgentProcessLaunched_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(remoting.mojom.AgentProcessBroker_OnAgentProcessLaunched_ParamsSpec.$.structSpec);
          const result = this.impl.onAgentProcessLaunched(params.agent_process);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

remoting.mojom.AgentProcessBrokerReceiver = remoting.mojom.AgentProcessBrokerReceiver;

remoting.mojom.AgentProcessBrokerPtr = remoting.mojom.AgentProcessBrokerRemote;
remoting.mojom.AgentProcessBrokerRequest = remoting.mojom.AgentProcessBrokerPendingReceiver;

