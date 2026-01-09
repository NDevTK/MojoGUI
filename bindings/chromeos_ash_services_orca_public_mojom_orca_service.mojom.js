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
};

// Enum: MetricEvent
ash.orca.mojom.MetricEvent = {
};

// Enum: TextQueryErrorCode
ash.orca.mojom.TextQueryErrorCode = {
};

// Struct: PresetTextQuery
ash.orca.mojom.PresetTextQuery = class {
  constructor(values = {}) {
  }
};

// Struct: TextQueryRequest
ash.orca.mojom.TextQueryRequest = class {
  constructor(values = {}) {
  }
};

// Struct: TextQueryResult
ash.orca.mojom.TextQueryResult = class {
  constructor(values = {}) {
  }
};

// Struct: TextQueryError
ash.orca.mojom.TextQueryError = class {
  constructor(values = {}) {
  }
};

// Struct: SurroundingText
ash.orca.mojom.SurroundingText = class {
  constructor(values = {}) {
  }
};

// Struct: Context
ash.orca.mojom.Context = class {
  constructor(values = {}) {
  }
};

// Struct: EditorConfig
ash.orca.mojom.EditorConfig = class {
  constructor(values = {}) {
  }
};

// Struct: TriggerContext
ash.orca.mojom.TriggerContext = class {
  constructor(values = {}) {
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
