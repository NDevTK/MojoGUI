// Auto-generated MojoJS binding
// Source: chromium_src/content/common/agent_scheduling_group.mojom
// Module: content.mojom

// Module namespace
var content = content || {};
content.mojom = content.mojom || {};
var blink = blink || {};

content.mojom.AgentSchedulingGroupHost = {};
content.mojom.AgentSchedulingGroupHost.$interfaceName = 'content.mojom.AgentSchedulingGroupHost';
content.mojom.AgentSchedulingGroupHost_DidUnloadRenderFrame_ParamsSpec = { $: {} };
content.mojom.AgentSchedulingGroup = {};
content.mojom.AgentSchedulingGroup.$interfaceName = 'content.mojom.AgentSchedulingGroup';
content.mojom.AgentSchedulingGroup_BindAssociatedInterfaces_ParamsSpec = { $: {} };
content.mojom.AgentSchedulingGroup_CreateView_ParamsSpec = { $: {} };
content.mojom.AgentSchedulingGroup_CreateFrame_ParamsSpec = { $: {} };
content.mojom.AgentSchedulingGroup_CreateSharedStorageWorkletService_ParamsSpec = { $: {} };

// Interface: AgentSchedulingGroupHost
mojo.internal.Struct(
    content.mojom.AgentSchedulingGroupHost_DidUnloadRenderFrame_ParamsSpec, 'content.mojom.AgentSchedulingGroupHost_DidUnloadRenderFrame_Params', [
      mojo.internal.StructField('frame_token', 0, 0, blink.mojom.LocalFrameTokenSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

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
  didUnloadRenderFrame(frame_token) {
    return this.$.didUnloadRenderFrame(frame_token);
  }
};

content.mojom.AgentSchedulingGroupHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('AgentSchedulingGroupHost', [
      { explicit: null },
    ]);
  }

  didUnloadRenderFrame(frame_token) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      content.mojom.AgentSchedulingGroupHost_DidUnloadRenderFrame_ParamsSpec,
      null,
      [frame_token],
      false);
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

content.mojom.AgentSchedulingGroupHostReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('AgentSchedulingGroupHost', [
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
             decoder.decodeStructInline(content.mojom.AgentSchedulingGroupHost_DidUnloadRenderFrame_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.mojom.AgentSchedulingGroupHost_DidUnloadRenderFrame_ParamsSpec.$.structSpec);
          const result = this.impl.didUnloadRenderFrame(params.frame_token);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

content.mojom.AgentSchedulingGroupHostReceiver = content.mojom.AgentSchedulingGroupHostReceiver;

content.mojom.AgentSchedulingGroupHostPtr = content.mojom.AgentSchedulingGroupHostRemote;
content.mojom.AgentSchedulingGroupHostRequest = content.mojom.AgentSchedulingGroupHostPendingReceiver;


// Interface: AgentSchedulingGroup
mojo.internal.Struct(
    content.mojom.AgentSchedulingGroup_BindAssociatedInterfaces_ParamsSpec, 'content.mojom.AgentSchedulingGroup_BindAssociatedInterfaces_Params', [
      mojo.internal.StructField('remote_host', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('route_provider_receiver', 8, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    content.mojom.AgentSchedulingGroup_CreateView_ParamsSpec, 'content.mojom.AgentSchedulingGroup_CreateView_Params', [
      mojo.internal.StructField('params', 0, 0, content.mojom.CreateViewParamsSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.mojom.AgentSchedulingGroup_CreateFrame_ParamsSpec, 'content.mojom.AgentSchedulingGroup_CreateFrame_Params', [
      mojo.internal.StructField('params', 0, 0, content.mojom.CreateFrameParamsSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.mojom.AgentSchedulingGroup_CreateSharedStorageWorkletService_ParamsSpec, 'content.mojom.AgentSchedulingGroup_CreateSharedStorageWorkletService_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(blink.mojom.SharedStorageWorkletServiceRemote), null, false, 0, undefined),
      mojo.internal.StructField('global_scope_creation_params', 8, 0, blink.mojom.WorkletGlobalScopeCreationParamsSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

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
  bindAssociatedInterfaces(remote_host, route_provider_receiver) {
    return this.$.bindAssociatedInterfaces(remote_host, route_provider_receiver);
  }
  createView(params) {
    return this.$.createView(params);
  }
  createFrame(params) {
    return this.$.createFrame(params);
  }
  createSharedStorageWorkletService(receiver, global_scope_creation_params) {
    return this.$.createSharedStorageWorkletService(receiver, global_scope_creation_params);
  }
};

content.mojom.AgentSchedulingGroupRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('AgentSchedulingGroup', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  bindAssociatedInterfaces(remote_host, route_provider_receiver) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      content.mojom.AgentSchedulingGroup_BindAssociatedInterfaces_ParamsSpec,
      null,
      [remote_host, route_provider_receiver],
      false);
  }

  createView(params) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      content.mojom.AgentSchedulingGroup_CreateView_ParamsSpec,
      null,
      [params],
      false);
  }

  createFrame(params) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      content.mojom.AgentSchedulingGroup_CreateFrame_ParamsSpec,
      null,
      [params],
      false);
  }

  createSharedStorageWorkletService(receiver, global_scope_creation_params) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      content.mojom.AgentSchedulingGroup_CreateSharedStorageWorkletService_ParamsSpec,
      null,
      [receiver, global_scope_creation_params],
      false);
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

content.mojom.AgentSchedulingGroupReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('AgentSchedulingGroup', [
      { explicit: null },
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
             decoder.decodeStructInline(content.mojom.AgentSchedulingGroup_BindAssociatedInterfaces_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.mojom.AgentSchedulingGroup_CreateView_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.mojom.AgentSchedulingGroup_CreateFrame_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.mojom.AgentSchedulingGroup_CreateSharedStorageWorkletService_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.mojom.AgentSchedulingGroup_BindAssociatedInterfaces_ParamsSpec.$.structSpec);
          const result = this.impl.bindAssociatedInterfaces(params.remote_host, params.route_provider_receiver);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.mojom.AgentSchedulingGroup_CreateView_ParamsSpec.$.structSpec);
          const result = this.impl.createView(params.params);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.mojom.AgentSchedulingGroup_CreateFrame_ParamsSpec.$.structSpec);
          const result = this.impl.createFrame(params.params);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.mojom.AgentSchedulingGroup_CreateSharedStorageWorkletService_ParamsSpec.$.structSpec);
          const result = this.impl.createSharedStorageWorkletService(params.receiver, params.global_scope_creation_params);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

content.mojom.AgentSchedulingGroupReceiver = content.mojom.AgentSchedulingGroupReceiver;

content.mojom.AgentSchedulingGroupPtr = content.mojom.AgentSchedulingGroupRemote;
content.mojom.AgentSchedulingGroupRequest = content.mojom.AgentSchedulingGroupPendingReceiver;

