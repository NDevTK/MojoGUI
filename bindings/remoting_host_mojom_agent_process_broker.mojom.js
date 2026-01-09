// Auto-generated MojoJS binding
// Source: chromium_src/remoting/host/mojom/agent_process_broker.mojom
// Module: remoting.mojom

'use strict';

// Module namespace
var remoting = remoting || {};
remoting.mojom = remoting.mojom || {};


// Interface: AgentProcess
remoting.mojom.AgentProcessPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'remoting.mojom.AgentProcess';
  }

  resumeProcess() {
    // Method: ResumeProcess
    // Call: ResumeProcess()
  }

  suspendProcess() {
    // Method: SuspendProcess
    // Call: SuspendProcess()
  }

  bindRemotingHostControl(receiver) {
    // Method: BindRemotingHostControl
    // Call: BindRemotingHostControl(receiver)
  }

};

remoting.mojom.AgentProcessRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: AgentProcessBroker
remoting.mojom.AgentProcessBrokerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'remoting.mojom.AgentProcessBroker';
  }

  resumeProcess() {
    // Method: ResumeProcess
    // Call: ResumeProcess()
  }

  suspendProcess() {
    // Method: SuspendProcess
    // Call: SuspendProcess()
  }

  resumeProcess() {
    // Method: ResumeProcess
    // Call: ResumeProcess()
  }

  resumeProcess() {
    // Method: ResumeProcess
    // Call: ResumeProcess()
  }

  onAgentProcessLaunched(agent_process) {
    // Method: OnAgentProcessLaunched
    // Call: OnAgentProcessLaunched(agent_process)
  }

};

remoting.mojom.AgentProcessBrokerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
