// Auto-generated MojoJS binding
// Source: chromium_src/ash/webui/recorder_app_ui/mojom/recorder_app.mojom
// Module: ash.recorder_app.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.recorder_app = ash.recorder_app || {};
ash.recorder_app.mojom = ash.recorder_app.mojom || {};


// Enum: ModelStateType
ash.recorder_app.mojom.ModelStateType = {
  or: 0,
};

// Struct: ModelState
ash.recorder_app.mojom.ModelState = class {
  constructor(values = {}) {
    this.type = values.type !== undefined ? values.type : null;
    this.progress = values.progress !== undefined ? values.progress : 0;
  }
};

// Struct: ModelInfo
ash.recorder_app.mojom.ModelInfo = class {
  constructor(values = {}) {
    this.is_large_model = values.is_large_model !== undefined ? values.is_large_model : 0;
  }
};

// Struct: MicrophoneInfo
ash.recorder_app.mojom.MicrophoneInfo = class {
  constructor(values = {}) {
    this.is_internal = values.is_internal !== undefined ? values.is_internal : false;
  }
};

// Struct: LangPackInfo
ash.recorder_app.mojom.LangPackInfo = class {
  constructor(values = {}) {
    this.is_gen_ai_supported = values.is_gen_ai_supported !== undefined ? values.is_gen_ai_supported : false;
    this.label = values.label !== undefined ? values.label : null;
    this.is_speaker_label_supported = values.is_speaker_label_supported !== undefined ? values.is_speaker_label_supported : false;
  }
};

// Interface: ModelStateMonitor
ash.recorder_app.mojom.ModelStateMonitorPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.recorder_app.mojom.ModelStateMonitor';
  }

  update(state) {
    // Method: Update
    // Call: Update(state)
  }

};

ash.recorder_app.mojom.ModelStateMonitorRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: QuietModeMonitor
ash.recorder_app.mojom.QuietModeMonitorPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.recorder_app.mojom.QuietModeMonitor';
  }

  update(in_quiet_mode) {
    // Method: Update
    // Call: Update(in_quiet_mode)
  }

};

ash.recorder_app.mojom.QuietModeMonitorRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: PageHandler
ash.recorder_app.mojom.PageHandlerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.recorder_app.mojom.PageHandler';
  }

  getModelInfo(feature) {
    // Method: GetModelInfo
    return new Promise((resolve) => {
      // Call: GetModelInfo(feature)
      resolve({});
    });
  }

  loadModel(model_id, model) {
    // Method: LoadModel
    return new Promise((resolve) => {
      // Call: LoadModel(model_id, model)
      resolve({});
    });
  }

};

ash.recorder_app.mojom.PageHandlerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
