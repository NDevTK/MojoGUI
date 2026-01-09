// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/annotation/annotation.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Enum: AnnotationType
blink.mojom.AnnotationType = {
  and: 0,
};

// Enum: AttachmentResult
blink.mojom.AttachmentResult = {
  because: 0,
  the: 1,
};

// Struct: SelectorCreationResult
blink.mojom.SelectorCreationResult = class {
  constructor(values = {}) {
    this.host_receiver = values.host_receiver !== undefined ? values.host_receiver : null;
    this.selected_text = values.selected_text !== undefined ? values.selected_text : "";
  }
};

// Interface: AnnotationAgent
blink.mojom.AnnotationAgentPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.AnnotationAgent';
  }

  scrollIntoView(applies_focus) {
    // Method: ScrollIntoView
    // Call: ScrollIntoView(applies_focus)
  }

};

blink.mojom.AnnotationAgentRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: AnnotationAgentHost
blink.mojom.AnnotationAgentHostPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.AnnotationAgentHost';
  }

  didFinishAttachment(document_relative_rect, attachment_result) {
    // Method: DidFinishAttachment
    // Call: DidFinishAttachment(document_relative_rect, attachment_result)
  }

};

blink.mojom.AnnotationAgentHostRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: AnnotationAgentContainer
blink.mojom.AnnotationAgentContainerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.AnnotationAgentContainer';
  }

  createAgent(host_remote, agent_receiver, type, selector, search_range_start_node_id) {
    // Method: CreateAgent
    // Call: CreateAgent(host_remote, agent_receiver, type, selector, search_range_start_node_id)
  }

  createAgentFromSelection(type) {
    // Method: CreateAgentFromSelection
    return new Promise((resolve) => {
      // Call: CreateAgentFromSelection(type)
      resolve({});
    });
  }

  removeAgentsOfType(type) {
    // Method: RemoveAgentsOfType
    // Call: RemoveAgentsOfType(type)
  }

};

blink.mojom.AnnotationAgentContainerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
