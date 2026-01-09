// Auto-generated MojoJS binding
// Source: chromium_src/remoting/host/mojom/agent_process_broker.mojom
// Module: remoting.mojom

'use strict';

// Module namespace
var remoting = remoting || {};
remoting.mojom = remoting.mojom || {};


// Interface: AgentProcess
remoting.mojom.AgentProcess = {};

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
      []);
  }

  suspendProcess() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      remoting.mojom.AgentProcess_SuspendProcess_ParamsSpec,
      null,
      []);
  }

  bindRemotingHostControl(receiver) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      remoting.mojom.AgentProcess_BindRemotingHostControl_ParamsSpec,
      null,
      [receiver]);
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

// ParamsSpec for ResumeProcess
remoting.mojom.AgentProcess_ResumeProcess_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remoting.mojom.AgentProcess.ResumeProcess_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for SuspendProcess
remoting.mojom.AgentProcess_SuspendProcess_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remoting.mojom.AgentProcess.SuspendProcess_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for BindRemotingHostControl
remoting.mojom.AgentProcess_BindRemotingHostControl_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remoting.mojom.AgentProcess.BindRemotingHostControl_Params',
      packedSize: 16,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
remoting.mojom.AgentProcessPtr = remoting.mojom.AgentProcessRemote;
remoting.mojom.AgentProcessRequest = remoting.mojom.AgentProcessPendingReceiver;


// Interface: AgentProcessBroker
remoting.mojom.AgentProcessBroker = {};

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
      [agent_process]);
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

// ParamsSpec for OnAgentProcessLaunched
remoting.mojom.AgentProcessBroker_OnAgentProcessLaunched_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remoting.mojom.AgentProcessBroker.OnAgentProcessLaunched_Params',
      packedSize: 16,
      fields: [
        { name: 'agent_process', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
remoting.mojom.AgentProcessBrokerPtr = remoting.mojom.AgentProcessBrokerRemote;
remoting.mojom.AgentProcessBrokerRequest = remoting.mojom.AgentProcessBrokerPendingReceiver;

