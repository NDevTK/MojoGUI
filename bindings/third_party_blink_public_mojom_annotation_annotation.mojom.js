// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/annotation/annotation.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Enum: AnnotationType
blink.mojom.AnnotationType = {
  kSharedHighlight: 0,
  kUserNote: 1,
  kTextFinder: 2,
  kGlic: 3,
};
blink.mojom.AnnotationTypeSpec = { $: mojo.internal.Enum() };

// Enum: AttachmentResult
blink.mojom.AttachmentResult = {
  kSuccess: 0,
  kSelectorNotMatched: 1,
  kRangeInvalid: 2,
};
blink.mojom.AttachmentResultSpec = { $: mojo.internal.Enum() };

// Union: Selector
blink.mojom.SelectorSpec = { $: mojo.internal.Union(
    'blink.mojom.Selector', {
      'serialized_selector': {
        'ordinal': 0,
        'type': mojo.internal.String,
      }},
      'node_id': {
        'ordinal': 1,
        'type': mojo.internal.Int32,
      }},
    })
};

// Struct: SelectorCreationResult
blink.mojom.SelectorCreationResultSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.SelectorCreationResult',
      packedSize: 32,
      fields: [
        { name: 'host_receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false, minVersion: 0 },
        { name: 'agent_remote', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
        { name: 'serialized_selector', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'selected_text', packedOffset: 16, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Interface: AnnotationAgent
blink.mojom.AnnotationAgent = {};

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
};

blink.mojom.AnnotationAgentRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  scrollIntoView(applies_focus) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.AnnotationAgent_ScrollIntoView_ParamsSpec,
      null,
      [applies_focus]);
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

// ParamsSpec for ScrollIntoView
blink.mojom.AnnotationAgent_ScrollIntoView_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AnnotationAgent.ScrollIntoView_Params',
      packedSize: 16,
      fields: [
        { name: 'applies_focus', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
blink.mojom.AnnotationAgentPtr = blink.mojom.AnnotationAgentRemote;
blink.mojom.AnnotationAgentRequest = blink.mojom.AnnotationAgentPendingReceiver;


// Interface: AnnotationAgentHost
blink.mojom.AnnotationAgentHost = {};

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
};

blink.mojom.AnnotationAgentHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  didFinishAttachment(document_relative_rect, attachment_result) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.AnnotationAgentHost_DidFinishAttachment_ParamsSpec,
      null,
      [document_relative_rect, attachment_result]);
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

// ParamsSpec for DidFinishAttachment
blink.mojom.AnnotationAgentHost_DidFinishAttachment_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AnnotationAgentHost.DidFinishAttachment_Params',
      packedSize: 24,
      fields: [
        { name: 'document_relative_rect', packedOffset: 0, packedBitOffset: 0, type: gfx.mojom.RectSpec, nullable: false, minVersion: 0 },
        { name: 'attachment_result', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.AttachmentResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
blink.mojom.AnnotationAgentHostPtr = blink.mojom.AnnotationAgentHostRemote;
blink.mojom.AnnotationAgentHostRequest = blink.mojom.AnnotationAgentHostPendingReceiver;


// Interface: AnnotationAgentContainer
blink.mojom.AnnotationAgentContainer = {};

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
};

blink.mojom.AnnotationAgentContainerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createAgent(host_remote, agent_receiver, type, selector, search_range_start_node_id) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.AnnotationAgentContainer_CreateAgent_ParamsSpec,
      null,
      [host_remote, agent_receiver, type, selector, search_range_start_node_id]);
  }

  createAgentFromSelection(type) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.AnnotationAgentContainer_CreateAgentFromSelection_ParamsSpec,
      blink.mojom.AnnotationAgentContainer_CreateAgentFromSelection_ResponseParamsSpec,
      [type]);
  }

  removeAgentsOfType(type) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.AnnotationAgentContainer_RemoveAgentsOfType_ParamsSpec,
      null,
      [type]);
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

// ParamsSpec for CreateAgent
blink.mojom.AnnotationAgentContainer_CreateAgent_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AnnotationAgentContainer.CreateAgent_Params',
      packedSize: 48,
      fields: [
        { name: 'host_remote', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
        { name: 'agent_receiver', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false, minVersion: 0 },
        { name: 'type', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.AnnotationTypeSpec, nullable: false, minVersion: 0 },
        { name: 'selector', packedOffset: 16, packedBitOffset: 0, type: blink.mojom.SelectorSpec, nullable: false, minVersion: 0 },
        { name: 'search_range_start_node_id_$flag', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'search_range_start_node_id_$value', originalFieldName: 'search_range_start_node_id' } },
        { name: 'search_range_start_node_id_$value', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'search_range_start_node_id_$flag', originalFieldName: 'search_range_start_node_id' } },
      ],
      versions: [{version: 0, packedSize: 48}]
    }
  }
};

// ParamsSpec for CreateAgentFromSelection
blink.mojom.AnnotationAgentContainer_CreateAgentFromSelection_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AnnotationAgentContainer.CreateAgentFromSelection_Params',
      packedSize: 16,
      fields: [
        { name: 'type', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.AnnotationTypeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

blink.mojom.AnnotationAgentContainer_CreateAgentFromSelection_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.SelectorCreationResultSpec, nullable: true, minVersion: 0 },
        { name: 'error', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.LinkGenerationErrorSpec, nullable: false, minVersion: 0 },
        { name: 'ready_status', packedOffset: 12, packedBitOffset: 0, type: blink.mojom.LinkGenerationReadyStatusSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for RemoveAgentsOfType
blink.mojom.AnnotationAgentContainer_RemoveAgentsOfType_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AnnotationAgentContainer.RemoveAgentsOfType_Params',
      packedSize: 16,
      fields: [
        { name: 'type', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.AnnotationTypeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
blink.mojom.AnnotationAgentContainerPtr = blink.mojom.AnnotationAgentContainerRemote;
blink.mojom.AnnotationAgentContainerRequest = blink.mojom.AnnotationAgentContainerPendingReceiver;

