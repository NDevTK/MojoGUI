// Auto-generated MojoJS binding
// Source: chromium_src/content/common/agent_scheduling_group.mojom
// Module: content.mojom

'use strict';

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
        
        // Try Method 0: DidUnloadRenderFrame
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(content.mojom.AgentSchedulingGroupHost_DidUnloadRenderFrame_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DidUnloadRenderFrame (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) { /* Ignore mismatch */ }
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
          const params = decoder.decodeStruct(content.mojom.AgentSchedulingGroupHost_DidUnloadRenderFrame_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.didUnloadRenderFrame');
          const result = this.impl.didUnloadRenderFrame(params.frame_token);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
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
      [remote_host, route_provider_receiver],
      false);
  }

  createView(params) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      content.mojom.AgentSchedulingGroup_CreateView_ParamsSpec,
      null,
      [params],
      false);
  }

  createFrame(params) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      content.mojom.AgentSchedulingGroup_CreateFrame_ParamsSpec,
      null,
      [params],
      false);
  }

  createSharedStorageWorkletService(receiver, global_scope_creation_params) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
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
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
    this.ordinalMap.set(3, 3); // Default ordinal 3 -> Index 3
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
        
        // Try Method 0: BindAssociatedInterfaces
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(content.mojom.AgentSchedulingGroup_BindAssociatedInterfaces_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> BindAssociatedInterfaces (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 1: CreateView
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(content.mojom.AgentSchedulingGroup_CreateView_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreateView (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 2: CreateFrame
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(content.mojom.AgentSchedulingGroup_CreateFrame_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreateFrame (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 3: CreateSharedStorageWorkletService
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(content.mojom.AgentSchedulingGroup_CreateSharedStorageWorkletService_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreateSharedStorageWorkletService (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) { /* Ignore mismatch */ }
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
          const params = decoder.decodeStruct(content.mojom.AgentSchedulingGroup_BindAssociatedInterfaces_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.bindAssociatedInterfaces');
          const result = this.impl.bindAssociatedInterfaces(params.remote_host, params.route_provider_receiver);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(content.mojom.AgentSchedulingGroup_CreateView_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.createView');
          const result = this.impl.createView(params.params);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(content.mojom.AgentSchedulingGroup_CreateFrame_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.createFrame');
          const result = this.impl.createFrame(params.params);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(content.mojom.AgentSchedulingGroup_CreateSharedStorageWorkletService_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.createSharedStorageWorkletService');
          const result = this.impl.createSharedStorageWorkletService(params.receiver, params.global_scope_creation_params);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

content.mojom.AgentSchedulingGroupReceiver = content.mojom.AgentSchedulingGroupReceiver;

content.mojom.AgentSchedulingGroupPtr = content.mojom.AgentSchedulingGroupRemote;
content.mojom.AgentSchedulingGroupRequest = content.mojom.AgentSchedulingGroupPendingReceiver;

