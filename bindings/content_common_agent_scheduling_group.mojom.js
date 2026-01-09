// Auto-generated MojoJS binding
// Source: chromium_src/content/common/agent_scheduling_group.mojom
// Module: content.mojom

'use strict';

// Module namespace
var content = content || {};
content.mojom = content.mojom || {};


// Interface: AgentSchedulingGroupHost
content.mojom.AgentSchedulingGroupHostPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'content.mojom.AgentSchedulingGroupHost';
  }

  unload() {
    // Method: Unload
    // Call: Unload()
  }

  unload() {
    // Method: Unload
    // Call: Unload()
  }

  associatedReceiver(RenderFrame) {
    // Method: AssociatedReceiver
    // Call: AssociatedReceiver(RenderFrame)
  }

  unload(tears) {
    // Method: unload
    // Call: unload(tears)
  }

  didUnloadRenderFrame(frame_token) {
    // Method: DidUnloadRenderFrame
    // Call: DidUnloadRenderFrame(frame_token)
  }

};

content.mojom.AgentSchedulingGroupHostRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: AgentSchedulingGroup
content.mojom.AgentSchedulingGroupPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'content.mojom.AgentSchedulingGroup';
  }

  remote() {
    // Method: remote
    // Call: remote()
  }

  createAgentSchedulingGroup() {
    // Method: CreateAgentSchedulingGroup
    // Call: CreateAgentSchedulingGroup()
  }

  createAgentAssociatedSchedulingGroup() {
    // Method: CreateAgentAssociatedSchedulingGroup
    // Call: CreateAgentAssociatedSchedulingGroup()
  }

  bindAssociatedInterfaces(remote_host, route_provider_receiver) {
    // Method: BindAssociatedInterfaces
    // Call: BindAssociatedInterfaces(remote_host, route_provider_receiver)
  }

  createView(params) {
    // Method: CreateView
    // Call: CreateView(params)
  }

  createFrame(params) {
    // Method: CreateFrame
    // Call: CreateFrame(params)
  }

  createSharedStorageWorkletService(receiver, global_scope_creation_params) {
    // Method: CreateSharedStorageWorkletService
    // Call: CreateSharedStorageWorkletService(receiver, global_scope_creation_params)
  }

};

content.mojom.AgentSchedulingGroupRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
