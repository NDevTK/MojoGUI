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

  0() {
    // Method: 0
    return new Promise((resolve) => {
      // Call: 0()
      resolve({});
    });
  }

  1(text_query_id, text_override) {
    // Method: 1
    return new Promise((resolve) => {
      // Call: 1(text_query_id, text_override)
      resolve({});
    });
  }

  2(input, text_override) {
    // Method: 2
    return new Promise((resolve) => {
      // Call: 2(input, text_override)
      resolve({});
    });
  }

  3(input) {
    // Method: 3
    return new Promise((resolve) => {
      // Call: 3(input)
      resolve({});
    });
  }

  4(text) {
    // Method: 4
    // Call: 4(text)
  }

  5() {
    // Method: 5
    // Call: 5()
  }

  6() {
    // Method: 6
    // Call: 6()
  }

  7() {
    // Method: 7
    // Call: 7()
  }

  8(url) {
    // Method: 8
    // Call: 8(url)
  }

  9() {
    // Method: 9
    // Call: 9()
  }

  10() {
    // Method: 10
    // Call: 10()
  }

  11(text) {
    // Method: 11
    // Call: 11(text)
  }

  12(result_id) {
    // Method: 12
    return new Promise((resolve) => {
      // Call: 12(result_id)
      resolve({});
    });
  }

  13(result_id, user_description) {
    // Method: 13
    // Call: 13(result_id, user_description)
  }

  14(trigger_context) {
    // Method: 14
    // Call: 14(trigger_context)
  }

  15(metric_event) {
    // Method: 15
    // Call: 15(metric_event)
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

  0(editor_client) {
    // Method: 0
    // Call: 0(editor_client)
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

  0(context) {
    // Method: 0
    // Call: 0(context)
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

  0(text) {
    // Method: 0
    // Call: 0(text)
  }

  1() {
    // Method: 1
    // Call: 1()
  }

  2() {
    // Method: 2
    // Call: 2()
  }

  3(url) {
    // Method: 3
    // Call: 3(url)
  }

  4() {
    // Method: 4
    // Call: 4()
  }

  5() {
    // Method: 5
    // Call: 5()
  }

  6(description) {
    // Method: 6
    // Call: 6(description)
  }

  7(trigger_context) {
    // Method: 7
    // Call: 7(trigger_context)
  }

  8(metric_event) {
    // Method: 8
    // Call: 8(metric_event)
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

  response() {
    // Method: response
    // Call: response()
  }

  0(request) {
    // Method: 0
    return new Promise((resolve) => {
      // Call: 0(request)
      resolve({});
    });
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

  0(system_actuator, text_query_provider, client_connector, event_sink, editor_config) {
    // Method: 0
    // Call: 0(system_actuator, text_query_provider, client_connector, event_sink, editor_config)
  }

};

ash.orca.mojom.OrcaServiceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
