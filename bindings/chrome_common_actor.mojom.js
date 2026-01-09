// Auto-generated MojoJS binding
// Source: chromium_src/chrome/common/actor.mojom
// Module: actor.mojom

'use strict';

// Module namespace
var actor = actor || {};
actor.mojom = actor.mojom || {};


// Enum: Type
actor.mojom.Type = {
  kLeft: 0,
  kRight: 1,
};

// Enum: Count
actor.mojom.Count = {
  kSingle: 0,
  kDouble: 1,
};

// Enum: Mode
actor.mojom.Mode = {
  kDeleteExisting: 0,
  kPrepend: 1,
  kAppend: 2,
};

// Enum: ScrollDirection
actor.mojom.ScrollDirection = {
};

// Enum: ActionResultCode
actor.mojom.ActionResultCode = {
  kOk: 0,
  and: 1,
  a: 2,
  but: 3,
  so: 4,
  but: 5,
  nor: 6,
  the: 7,
};

// Enum: JournalEntryType
actor.mojom.JournalEntryType = {
  kBegin: 0,
  kEnd: 1,
  kInstant: 2,
};

// Struct: ObservedToolTarget
actor.mojom.ObservedToolTarget = class {
  constructor(values = {}) {
    this.node_attribute = values.node_attribute !== undefined ? values.node_attribute : null;
  }
};

// Struct: ClickAction
actor.mojom.ClickAction = class {
  constructor(values = {}) {
    this.1 = values.1 !== undefined ? values.1 : null;
    this.2 = values.2 !== undefined ? values.2 : null;
  }
};

// Struct: MouseMoveAction
actor.mojom.MouseMoveAction = class {
  constructor(values = {}) {
  }
};

// Struct: ScrollToAction
actor.mojom.ScrollToAction = class {
  constructor(values = {}) {
  }
};

// Struct: TypeAction
actor.mojom.TypeAction = class {
  constructor(values = {}) {
    this.0 = values.0 !== undefined ? values.0 : null;
    this.1 = values.1 !== undefined ? values.1 : null;
    this.2 = values.2 !== undefined ? values.2 : null;
  }
};

// Struct: ScrollAction
actor.mojom.ScrollAction = class {
  constructor(values = {}) {
    this.1 = values.1 !== undefined ? values.1 : null;
    this.2 = values.2 !== undefined ? values.2 : null;
    this.3 = values.3 !== undefined ? values.3 : null;
    this.4 = values.4 !== undefined ? values.4 : null;
  }
};

// Struct: SelectAction
actor.mojom.SelectAction = class {
  constructor(values = {}) {
    this.value = values.value !== undefined ? values.value : "";
  }
};

// Struct: DragAndReleaseAction
actor.mojom.DragAndReleaseAction = class {
  constructor(values = {}) {
    this.to_target = values.to_target !== undefined ? values.to_target : null;
  }
};

// Struct: ScriptToolAction
actor.mojom.ScriptToolAction = class {
  constructor(values = {}) {
    this.input_arguments = values.input_arguments !== undefined ? values.input_arguments : "";
  }
};

// Struct: TaskId
actor.mojom.TaskId = class {
  constructor(values = {}) {
    this.id = values.id !== undefined ? values.id : 0;
  }
};

// Struct: ToolInvocation
actor.mojom.ToolInvocation = class {
  constructor(values = {}) {
    this.observed_target = values.observed_target !== undefined ? values.observed_target : null;
  }
};

// Struct: ActionResult
actor.mojom.ActionResult = class {
  constructor(values = {}) {
    this.requires_page_stabilization = values.requires_page_stabilization !== undefined ? values.requires_page_stabilization : false;
    this.message = values.message !== undefined ? values.message : "";
    this.execution_end_time = values.execution_end_time !== undefined ? values.execution_end_time : "";
  }
};

// Struct: JournalDetails
actor.mojom.JournalDetails = class {
  constructor(values = {}) {
    this.value = values.value !== undefined ? values.value : "";
  }
};

// Struct: JournalEntry
actor.mojom.JournalEntry = class {
  constructor(values = {}) {
    this.details = values.details !== undefined ? values.details : 0;
  }
};

// Interface: JournalClient
actor.mojom.JournalClientPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'actor.mojom.JournalClient';
  }

  addEntriesToJournal(entries) {
    // Method: AddEntriesToJournal
    // Call: AddEntriesToJournal(entries)
  }

};

actor.mojom.JournalClientRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: PageStabilityMonitor
actor.mojom.PageStabilityMonitorPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'actor.mojom.PageStabilityMonitor';
  }

  notifyWhenStable(observation_delay) {
    // Method: NotifyWhenStable
    // Call: NotifyWhenStable(observation_delay)
  }

};

actor.mojom.PageStabilityMonitorRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
