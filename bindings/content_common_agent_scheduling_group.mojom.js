// Auto-generated MojoJS binding
// Source: chromium_src/content/common/agent_scheduling_group.mojom
// Module: content.mojom

'use strict';

// Module namespace
var content = content || {};
content.mojom = content.mojom || {};
var content = content || {};
var content = content || {};
var blink = blink || {};
var blink = blink || {};
var blink = blink || {};
var blink = blink || {};
var blink = blink || {};
var blink = blink || {};


// Interface: AgentSchedulingGroupHost
content.mojom.mojom.AgentSchedulingGroupHost = {};

content.mojom.mojom.AgentSchedulingGroupHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

content.mojom.mojom.AgentSchedulingGroupHostRemote = class {
  static get $interfaceName() {
    return 'content.mojom.AgentSchedulingGroupHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      content.mojom.mojom.AgentSchedulingGroupHostPendingReceiver,
      handle);
    this.$ = new content.mojom.mojom.AgentSchedulingGroupHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

content.mojom.mojom.AgentSchedulingGroupHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  didUnloadRenderFrame(frame_token) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      content.mojom.mojom.AgentSchedulingGroupHost_DidUnloadRenderFrame_ParamsSpec,
      null,
      [frame_token]);
  }

};

content.mojom.mojom.AgentSchedulingGroupHost.getRemote = function() {
  let remote = new content.mojom.mojom.AgentSchedulingGroupHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'content.mojom.AgentSchedulingGroupHost',
    'context');
  return remote.$;
};

// ParamsSpec for DidUnloadRenderFrame
content.mojom.mojom.AgentSchedulingGroupHost_DidUnloadRenderFrame_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.AgentSchedulingGroupHost.DidUnloadRenderFrame_Params',
      packedSize: 16,
      fields: [
        { name: 'frame_token', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.LocalFrameTokenSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
content.mojom.mojom.AgentSchedulingGroupHostPtr = content.mojom.mojom.AgentSchedulingGroupHostRemote;
content.mojom.mojom.AgentSchedulingGroupHostRequest = content.mojom.mojom.AgentSchedulingGroupHostPendingReceiver;


// Interface: AgentSchedulingGroup
content.mojom.mojom.AgentSchedulingGroup = {};

content.mojom.mojom.AgentSchedulingGroupPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

content.mojom.mojom.AgentSchedulingGroupRemote = class {
  static get $interfaceName() {
    return 'content.mojom.AgentSchedulingGroup';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      content.mojom.mojom.AgentSchedulingGroupPendingReceiver,
      handle);
    this.$ = new content.mojom.mojom.AgentSchedulingGroupRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

content.mojom.mojom.AgentSchedulingGroupRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  bindAssociatedInterfaces(remote_host, route_provider_receiver) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      content.mojom.mojom.AgentSchedulingGroup_BindAssociatedInterfaces_ParamsSpec,
      null,
      [remote_host, route_provider_receiver]);
  }

  createView(params) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      content.mojom.mojom.AgentSchedulingGroup_CreateView_ParamsSpec,
      null,
      [params]);
  }

  createFrame(params) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      content.mojom.mojom.AgentSchedulingGroup_CreateFrame_ParamsSpec,
      null,
      [params]);
  }

  createSharedStorageWorkletService(receiver, global_scope_creation_params) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      content.mojom.mojom.AgentSchedulingGroup_CreateSharedStorageWorkletService_ParamsSpec,
      null,
      [receiver, global_scope_creation_params]);
  }

};

content.mojom.mojom.AgentSchedulingGroup.getRemote = function() {
  let remote = new content.mojom.mojom.AgentSchedulingGroupRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'content.mojom.AgentSchedulingGroup',
    'context');
  return remote.$;
};

// ParamsSpec for BindAssociatedInterfaces
content.mojom.mojom.AgentSchedulingGroup_BindAssociatedInterfaces_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.AgentSchedulingGroup.BindAssociatedInterfaces_Params',
      packedSize: 24,
      fields: [
        { name: 'remote_host', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.AssociatedInterfaceProxy(content.mojom.AgentSchedulingGroupHostRemote), nullable: false, minVersion: 0 },
        { name: 'route_provider_receiver', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.AssociatedInterfaceRequest(content.mojom.RouteProviderRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for CreateView
content.mojom.mojom.AgentSchedulingGroup_CreateView_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.AgentSchedulingGroup.CreateView_Params',
      packedSize: 16,
      fields: [
        { name: 'params', packedOffset: 0, packedBitOffset: 0, type: content.mojom.CreateViewParamsSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for CreateFrame
content.mojom.mojom.AgentSchedulingGroup_CreateFrame_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.AgentSchedulingGroup.CreateFrame_Params',
      packedSize: 16,
      fields: [
        { name: 'params', packedOffset: 0, packedBitOffset: 0, type: content.mojom.CreateFrameParamsSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for CreateSharedStorageWorkletService
content.mojom.mojom.AgentSchedulingGroup_CreateSharedStorageWorkletService_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.AgentSchedulingGroup.CreateSharedStorageWorkletService_Params',
      packedSize: 24,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(blink.mojom.SharedStorageWorkletServiceRemote), nullable: false, minVersion: 0 },
        { name: 'global_scope_creation_params', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.WorkletGlobalScopeCreationParamsSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
content.mojom.mojom.AgentSchedulingGroupPtr = content.mojom.mojom.AgentSchedulingGroupRemote;
content.mojom.mojom.AgentSchedulingGroupRequest = content.mojom.mojom.AgentSchedulingGroupPendingReceiver;

