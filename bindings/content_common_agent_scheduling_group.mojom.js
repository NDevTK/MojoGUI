// Auto-generated MojoJS binding
// Source: chromium_src/content/common/agent_scheduling_group.mojom
// Module: content.mojom

'use strict';

// Module namespace
var content = content || {};
content.mojom = content.mojom || {};


// Interface: AgentSchedulingGroupHost
content.mojom.AgentSchedulingGroupHost = {};

content.mojom.AgentSchedulingGroupHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

content.mojom.AgentSchedulingGroupHostRemote = class {
  static get $interfaceName() {
    return 'content.mojom.AgentSchedulingGroupHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      content.mojom.AgentSchedulingGroupHostPendingReceiver,
      handle);
    this.$ = new content.mojom.AgentSchedulingGroupHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

content.mojom.AgentSchedulingGroupHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  didUnloadRenderFrame(frame_token) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      content.mojom.AgentSchedulingGroupHost_DidUnloadRenderFrame_ParamsSpec,
      null,
      [frame_token]);
  }

};

content.mojom.AgentSchedulingGroupHost.getRemote = function() {
  let remote = new content.mojom.AgentSchedulingGroupHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'content.mojom.AgentSchedulingGroupHost',
    'context');
  return remote.$;
};

// ParamsSpec for DidUnloadRenderFrame
content.mojom.AgentSchedulingGroupHost_DidUnloadRenderFrame_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.AgentSchedulingGroupHost.DidUnloadRenderFrame_Params',
      packedSize: 16,
      fields: [
        { name: 'frame_token', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
content.mojom.AgentSchedulingGroupHostPtr = content.mojom.AgentSchedulingGroupHostRemote;
content.mojom.AgentSchedulingGroupHostRequest = content.mojom.AgentSchedulingGroupHostPendingReceiver;


// Interface: AgentSchedulingGroup
content.mojom.AgentSchedulingGroup = {};

content.mojom.AgentSchedulingGroupPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

content.mojom.AgentSchedulingGroupRemote = class {
  static get $interfaceName() {
    return 'content.mojom.AgentSchedulingGroup';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      content.mojom.AgentSchedulingGroupPendingReceiver,
      handle);
    this.$ = new content.mojom.AgentSchedulingGroupRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

content.mojom.AgentSchedulingGroupRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  bindAssociatedInterfaces(remote_host, route_provider_receiver) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      content.mojom.AgentSchedulingGroup_BindAssociatedInterfaces_ParamsSpec,
      null,
      [remote_host, route_provider_receiver]);
  }

  createView(params) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      content.mojom.AgentSchedulingGroup_CreateView_ParamsSpec,
      null,
      [params]);
  }

  createFrame(params) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      content.mojom.AgentSchedulingGroup_CreateFrame_ParamsSpec,
      null,
      [params]);
  }

  createSharedStorageWorkletService(receiver, global_scope_creation_params) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      content.mojom.AgentSchedulingGroup_CreateSharedStorageWorkletService_ParamsSpec,
      null,
      [receiver, global_scope_creation_params]);
  }

};

content.mojom.AgentSchedulingGroup.getRemote = function() {
  let remote = new content.mojom.AgentSchedulingGroupRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'content.mojom.AgentSchedulingGroup',
    'context');
  return remote.$;
};

// ParamsSpec for BindAssociatedInterfaces
content.mojom.AgentSchedulingGroup_BindAssociatedInterfaces_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.AgentSchedulingGroup.BindAssociatedInterfaces_Params',
      packedSize: 16,
      fields: [
        { name: 'remote_host', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.AssociatedInterfaceProxy, nullable: false },
        { name: 'route_provider_receiver', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.AssociatedInterfaceRequest, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for CreateView
content.mojom.AgentSchedulingGroup_CreateView_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.AgentSchedulingGroup.CreateView_Params',
      packedSize: 16,
      fields: [
        { name: 'params', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for CreateFrame
content.mojom.AgentSchedulingGroup_CreateFrame_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.AgentSchedulingGroup.CreateFrame_Params',
      packedSize: 16,
      fields: [
        { name: 'params', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for CreateSharedStorageWorkletService
content.mojom.AgentSchedulingGroup_CreateSharedStorageWorkletService_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.AgentSchedulingGroup.CreateSharedStorageWorkletService_Params',
      packedSize: 24,
      fields: [
        { name: 'global_scope_creation_params', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'receiver', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
content.mojom.AgentSchedulingGroupPtr = content.mojom.AgentSchedulingGroupRemote;
content.mojom.AgentSchedulingGroupRequest = content.mojom.AgentSchedulingGroupPendingReceiver;

