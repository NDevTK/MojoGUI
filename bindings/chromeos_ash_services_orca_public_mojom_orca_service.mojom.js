// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/services/orca/public/mojom/orca_service.mojom
// Module: ash.orca.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.orca = ash.orca || {};
ash.orca.mojom = ash.orca.mojom || {};


// Enum: PresetTextQueryType
ash.orca.mojom.PresetTextQueryType = {
  kShorten: 0,
  kElaborate: 1,
  kRephrase: 2,
  kFormalize: 3,
  kEmojify: 4,
};

// Enum: MetricEvent
ash.orca.mojom.MetricEvent = {
  kRefineRequest: 0,
  kFeedbackThumbsUp: 1,
  kFeedbackThumbsDown: 2,
  kReturnToPreviousSuggestions: 3,
  kWebUIRequest: 4,
};

// Enum: TextQueryErrorCode
ash.orca.mojom.TextQueryErrorCode = {
  kInvalidArgument: 0,
};

// Struct: PresetTextQuery
ash.orca.mojom.PresetTextQuery = class {
  constructor(values = {}) {
    this.description@2 = values.description@2 !== undefined ? values.description@2 : "";
    this.type@3 = values.type@3 !== undefined ? values.type@3 : null;
  }
};

// Struct: TextQueryRequest
ash.orca.mojom.TextQueryRequest = class {
  constructor(values = {}) {
    this.parameters@2 = values.parameters@2 !== undefined ? values.parameters@2 : "";
  }
};

// Struct: TextQueryResult
ash.orca.mojom.TextQueryResult = class {
  constructor(values = {}) {
    this.text@1 = values.text@1 !== undefined ? values.text@1 : "";
  }
};

// Struct: TextQueryError
ash.orca.mojom.TextQueryError = class {
  constructor(values = {}) {
    this.message@1 = values.message@1 !== undefined ? values.message@1 : "";
  }
};

// Struct: SurroundingText
ash.orca.mojom.SurroundingText = class {
  constructor(values = {}) {
    this.range@1 = values.range@1 !== undefined ? values.range@1 : "";
  }
};

// Struct: Context
ash.orca.mojom.Context = class {
  constructor(values = {}) {
    this.surrounding_text@0 = values.surrounding_text@0 !== undefined ? values.surrounding_text@0 : null;
  }
};

// Struct: EditorConfig
ash.orca.mojom.EditorConfig = class {
  constructor(values = {}) {
    this.language_code@1 = values.language_code@1 !== undefined ? values.language_code@1 : "";
  }
};

// Struct: TriggerContext
ash.orca.mojom.TriggerContext = class {
  constructor(values = {}) {
    this.preset_type_selected@1 = values.preset_type_selected@1 !== undefined ? values.preset_type_selected@1 : false;
  }
};

// Interface: EditorClient
ash.orca.mojom.EditorClientPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.orca.mojom.EditorClient';
  }

};

ash.orca.mojom.EditorClientRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: EditorClientConnector
ash.orca.mojom.EditorClientConnectorPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.orca.mojom.EditorClientConnector';
  }

};

ash.orca.mojom.EditorClientConnectorRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: EditorEventSink
ash.orca.mojom.EditorEventSinkPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.orca.mojom.EditorEventSink';
  }

};

ash.orca.mojom.EditorEventSinkRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: SystemActuator
ash.orca.mojom.SystemActuatorPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.orca.mojom.SystemActuator';
  }

};

ash.orca.mojom.SystemActuatorRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: TextQueryProvider
ash.orca.mojom.TextQueryProviderPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.orca.mojom.TextQueryProvider';
  }

};

ash.orca.mojom.TextQueryProviderRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: OrcaService
ash.orca.mojom.OrcaServicePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.orca.mojom.OrcaService';
  }

};

ash.orca.mojom.OrcaServiceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
