// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/annotation/annotation.mojom
// Module: blink.mojom

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var mojo_base = mojo_base || {};
var gfx = gfx || {};

blink.mojom.AnnotationTypeSpec = { $: mojo.internal.Enum() };
blink.mojom.AttachmentResultSpec = { $: mojo.internal.Enum() };
blink.mojom.SelectorSpec = { $: {} };
blink.mojom.SelectorCreationResultSpec = { $: {} };
blink.mojom.AnnotationAgent = {};
blink.mojom.AnnotationAgent.$interfaceName = 'blink.mojom.AnnotationAgent';
blink.mojom.AnnotationAgent_ScrollIntoView_ParamsSpec = { $: {} };
blink.mojom.AnnotationAgentHost = {};
blink.mojom.AnnotationAgentHost.$interfaceName = 'blink.mojom.AnnotationAgentHost';
blink.mojom.AnnotationAgentHost_DidFinishAttachment_ParamsSpec = { $: {} };
blink.mojom.AnnotationAgentContainer = {};
blink.mojom.AnnotationAgentContainer.$interfaceName = 'blink.mojom.AnnotationAgentContainer';
blink.mojom.AnnotationAgentContainer_CreateAgent_ParamsSpec = { $: {} };
blink.mojom.AnnotationAgentContainer_CreateAgentFromSelection_ParamsSpec = { $: {} };
blink.mojom.AnnotationAgentContainer_CreateAgentFromSelection_ResponseParamsSpec = { $: {} };
blink.mojom.AnnotationAgentContainer_RemoveAgentsOfType_ParamsSpec = { $: {} };

// Enum: AnnotationType
blink.mojom.AnnotationType = {
  kSharedHighlight: 0,
  kUserNote: 1,
  kTextFinder: 2,
  kGlic: 3,
};

// Enum: AttachmentResult
blink.mojom.AttachmentResult = {
  kSuccess: 0,
  kSelectorNotMatched: 1,
  kRangeInvalid: 2,
};

// Union: Selector
mojo.internal.Union(
    blink.mojom.SelectorSpec, 'blink.mojom.Selector', {
      'serialized_selector': {
        'ordinal': 0,
        'type': mojo.internal.String,
        'nullable': false,
      },
      'node_id': {
        'ordinal': 1,
        'type': mojo.internal.Int32,
        'nullable': false,
      },
    });

// Struct: SelectorCreationResult
mojo.internal.Struct(
    blink.mojom.SelectorCreationResultSpec, 'blink.mojom.SelectorCreationResult', [
      mojo.internal.StructField('host_receiver', 0, 0, mojo.internal.InterfaceRequest(blink.mojom.AnnotationAgentHostRemote), null, false, 0, undefined),
      mojo.internal.StructField('agent_remote', 8, 0, mojo.internal.InterfaceProxy(blink.mojom.AnnotationAgentRemote), null, false, 0, undefined),
      mojo.internal.StructField('serialized_selector', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('selected_text', 24, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
    ],
    [[0, 40]]);

// Interface: AnnotationAgent
mojo.internal.Struct(
    blink.mojom.AnnotationAgent_ScrollIntoView_ParamsSpec, 'blink.mojom.AnnotationAgent_ScrollIntoView_Params', [
      mojo.internal.StructField('applies_focus', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

blink.mojom.AnnotationAgentPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.AnnotationAgentRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.AnnotationAgent';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.AnnotationAgentPendingReceiver,
      handle);
    this.$ = new blink.mojom.AnnotationAgentRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  scrollIntoView(applies_focus) {
    return this.$.scrollIntoView(applies_focus);
  }
};

blink.mojom.AnnotationAgentRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('AnnotationAgent', [
      { explicit: null },
    ]);
  }

  scrollIntoView(applies_focus) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      blink.mojom.AnnotationAgent_ScrollIntoView_ParamsSpec,
      null,
      [applies_focus],
      false);
  }

};

blink.mojom.AnnotationAgent.getRemote = function() {
  let remote = new blink.mojom.AnnotationAgentRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.AnnotationAgent',
    'context');
  return remote.$;
};

blink.mojom.AnnotationAgentReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('AnnotationAgent', [
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
    if (this.router_.onConnectionError) {
      this.router_.onConnectionError.addListener(() => {
         console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
      });
    }
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
             decoder.decodeStructInline(blink.mojom.AnnotationAgent_ScrollIntoView_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.AnnotationAgent_ScrollIntoView_ParamsSpec.$.structSpec);
          const result = this.impl.scrollIntoView(params.applies_focus);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

blink.mojom.AnnotationAgentReceiver = blink.mojom.AnnotationAgentReceiver;

blink.mojom.AnnotationAgentPtr = blink.mojom.AnnotationAgentRemote;
blink.mojom.AnnotationAgentRequest = blink.mojom.AnnotationAgentPendingReceiver;


// Interface: AnnotationAgentHost
mojo.internal.Struct(
    blink.mojom.AnnotationAgentHost_DidFinishAttachment_ParamsSpec, 'blink.mojom.AnnotationAgentHost_DidFinishAttachment_Params', [
      mojo.internal.StructField('document_relative_rect', 0, 0, gfx.mojom.RectSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('attachment_result', 8, 0, blink.mojom.AttachmentResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

blink.mojom.AnnotationAgentHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.AnnotationAgentHostRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.AnnotationAgentHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.AnnotationAgentHostPendingReceiver,
      handle);
    this.$ = new blink.mojom.AnnotationAgentHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  didFinishAttachment(document_relative_rect, attachment_result) {
    return this.$.didFinishAttachment(document_relative_rect, attachment_result);
  }
};

blink.mojom.AnnotationAgentHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('AnnotationAgentHost', [
      { explicit: null },
    ]);
  }

  didFinishAttachment(document_relative_rect, attachment_result) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      blink.mojom.AnnotationAgentHost_DidFinishAttachment_ParamsSpec,
      null,
      [document_relative_rect, attachment_result],
      false);
  }

};

blink.mojom.AnnotationAgentHost.getRemote = function() {
  let remote = new blink.mojom.AnnotationAgentHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.AnnotationAgentHost',
    'context');
  return remote.$;
};

blink.mojom.AnnotationAgentHostReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('AnnotationAgentHost', [
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
    if (this.router_.onConnectionError) {
      this.router_.onConnectionError.addListener(() => {
         console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
      });
    }
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
             decoder.decodeStructInline(blink.mojom.AnnotationAgentHost_DidFinishAttachment_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.AnnotationAgentHost_DidFinishAttachment_ParamsSpec.$.structSpec);
          const result = this.impl.didFinishAttachment(params.document_relative_rect, params.attachment_result);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

blink.mojom.AnnotationAgentHostReceiver = blink.mojom.AnnotationAgentHostReceiver;

blink.mojom.AnnotationAgentHostPtr = blink.mojom.AnnotationAgentHostRemote;
blink.mojom.AnnotationAgentHostRequest = blink.mojom.AnnotationAgentHostPendingReceiver;


// Interface: AnnotationAgentContainer
mojo.internal.Struct(
    blink.mojom.AnnotationAgentContainer_CreateAgent_ParamsSpec, 'blink.mojom.AnnotationAgentContainer_CreateAgent_Params', [
      mojo.internal.StructField('host_remote', 0, 0, mojo.internal.InterfaceProxy(blink.mojom.AnnotationAgentHostRemote), null, false, 0, undefined),
      mojo.internal.StructField('agent_receiver', 8, 0, mojo.internal.InterfaceRequest(blink.mojom.AnnotationAgentRemote), null, false, 0, undefined),
      mojo.internal.StructField('type', 16, 0, blink.mojom.AnnotationTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('selector', 24, 0, blink.mojom.SelectorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('search_range_start_node_id_$value', 32, 0, mojo.internal.Int32, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'search_range_start_node_id_$flag', originalFieldName: 'search_range_start_node_id' }),
      mojo.internal.StructField('search_range_start_node_id_$flag', 36, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'search_range_start_node_id_$value', originalFieldName: 'search_range_start_node_id' }),
    ],
    [[0, 48]]);

mojo.internal.Struct(
    blink.mojom.AnnotationAgentContainer_CreateAgentFromSelection_ParamsSpec, 'blink.mojom.AnnotationAgentContainer_CreateAgentFromSelection_Params', [
      mojo.internal.StructField('type', 0, 0, blink.mojom.AnnotationTypeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.AnnotationAgentContainer_CreateAgentFromSelection_ResponseParamsSpec, 'blink.mojom.AnnotationAgentContainer_CreateAgentFromSelection_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, blink.mojom.SelectorCreationResultSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('error', 8, 0, blink.mojom.LinkGenerationErrorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('ready_status', 16, 0, blink.mojom.LinkGenerationReadyStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    blink.mojom.AnnotationAgentContainer_RemoveAgentsOfType_ParamsSpec, 'blink.mojom.AnnotationAgentContainer_RemoveAgentsOfType_Params', [
      mojo.internal.StructField('type', 0, 0, blink.mojom.AnnotationTypeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

blink.mojom.AnnotationAgentContainerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.AnnotationAgentContainerRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.AnnotationAgentContainer';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.AnnotationAgentContainerPendingReceiver,
      handle);
    this.$ = new blink.mojom.AnnotationAgentContainerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  createAgent(host_remote, agent_receiver, type, selector, search_range_start_node_id) {
    return this.$.createAgent(host_remote, agent_receiver, type, selector, search_range_start_node_id);
  }
  createAgentFromSelection(type) {
    return this.$.createAgentFromSelection(type);
  }
  removeAgentsOfType(type) {
    return this.$.removeAgentsOfType(type);
  }
};

blink.mojom.AnnotationAgentContainerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('AnnotationAgentContainer', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  createAgent(host_remote, agent_receiver, type, selector, search_range_start_node_id) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      blink.mojom.AnnotationAgentContainer_CreateAgent_ParamsSpec,
      null,
      [host_remote, agent_receiver, type, selector, search_range_start_node_id],
      false);
  }

  createAgentFromSelection(type) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      blink.mojom.AnnotationAgentContainer_CreateAgentFromSelection_ParamsSpec,
      blink.mojom.AnnotationAgentContainer_CreateAgentFromSelection_ResponseParamsSpec,
      [type],
      false);
  }

  removeAgentsOfType(type) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      blink.mojom.AnnotationAgentContainer_RemoveAgentsOfType_ParamsSpec,
      null,
      [type],
      false);
  }

};

blink.mojom.AnnotationAgentContainer.getRemote = function() {
  let remote = new blink.mojom.AnnotationAgentContainerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.AnnotationAgentContainer',
    'context');
  return remote.$;
};

blink.mojom.AnnotationAgentContainerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('AnnotationAgentContainer', [
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
    if (this.router_.onConnectionError) {
      this.router_.onConnectionError.addListener(() => {
         console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
      });
    }
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
             decoder.decodeStructInline(blink.mojom.AnnotationAgentContainer_CreateAgent_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.AnnotationAgentContainer_CreateAgentFromSelection_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.AnnotationAgentContainer_RemoveAgentsOfType_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.AnnotationAgentContainer_CreateAgent_ParamsSpec.$.structSpec);
          const result = this.impl.createAgent(params.host_remote, params.agent_receiver, params.type, params.selector, params.search_range_start_node_id);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.AnnotationAgentContainer_CreateAgentFromSelection_ParamsSpec.$.structSpec);
          const result = this.impl.createAgentFromSelection(params.type);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.AnnotationAgentContainer_CreateAgentFromSelection_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.AnnotationAgentContainer_RemoveAgentsOfType_ParamsSpec.$.structSpec);
          const result = this.impl.removeAgentsOfType(params.type);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

blink.mojom.AnnotationAgentContainerReceiver = blink.mojom.AnnotationAgentContainerReceiver;

blink.mojom.AnnotationAgentContainerPtr = blink.mojom.AnnotationAgentContainerRemote;
blink.mojom.AnnotationAgentContainerRequest = blink.mojom.AnnotationAgentContainerPendingReceiver;

