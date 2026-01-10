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
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (message) => {
      console.log('[GeneratedReceiver] Message received', message);
      const header = message.header;
      if (!header) { console.warn('[GeneratedReceiver] No header'); return; }
      console.log('[GeneratedReceiver] Header ordinal:', header.ordinal);
      switch (header.ordinal) {
        case 0: {
          const params = remoting.mojom.AgentProcess_ResumeProcess_ParamsSpec.$.decode(message.payload);
          const result = this.impl.resumeProcess();
          break;
        }
        case 1: {
          const params = remoting.mojom.AgentProcess_SuspendProcess_ParamsSpec.$.decode(message.payload);
          const result = this.impl.suspendProcess();
          break;
        }
        case 2: {
          const params = remoting.mojom.AgentProcess_BindRemotingHostControl_ParamsSpec.$.decode(message.payload);
          const result = this.impl.bindRemotingHostControl(params.receiver);
          break;
        }
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
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (message) => {
      console.log('[GeneratedReceiver] Message received', message);
      const header = message.header;
      if (!header) { console.warn('[GeneratedReceiver] No header'); return; }
      console.log('[GeneratedReceiver] Header ordinal:', header.ordinal);
      switch (header.ordinal) {
        case 0: {
          const params = remoting.mojom.AgentProcessBroker_OnAgentProcessLaunched_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onAgentProcessLaunched(params.agent_process);
          break;
        }
      }
    }});
  }
};

remoting.mojom.AgentProcessBrokerReceiver = remoting.mojom.AgentProcessBrokerReceiver;

remoting.mojom.AgentProcessBrokerPtr = remoting.mojom.AgentProcessBrokerRemote;
remoting.mojom.AgentProcessBrokerRequest = remoting.mojom.AgentProcessBrokerPendingReceiver;

