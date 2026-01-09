// Auto-generated MojoJS binding
// Source: chromium_src/services/on_device_model/public/mojom/on_device_model.mojom
// Module: on_device_model.mojom

'use strict';

// Module namespace
var on_device_model = on_device_model || {};
on_device_model.mojom = on_device_model.mojom || {};


// Enum: Token
on_device_model.mojom.Token = {
};

// Enum: Priority
on_device_model.mojom.Priority = {
  the: 0,
};

// Enum: PerformanceClass
on_device_model.mojom.PerformanceClass = {
  kLow: 0,
  kMedium: 1,
  kHigh: 2,
  kVeryHigh: 3,
};

// Enum: LoadModelResult
on_device_model.mojom.LoadModelResult = {
  kSuccess: 0,
  kGpuBlocked: 1,
  EnableIf: 2,
};

// Struct: AdaptationAssets
on_device_model.mojom.AdaptationAssets = class {
  constructor(values = {}) {
    this.weights_path = values.weights_path !== undefined ? values.weights_path : null;
  }
};

// Struct: LanguageDetectionResult
on_device_model.mojom.LanguageDetectionResult = class {
  constructor(values = {}) {
    this.code = values.code !== undefined ? values.code : "";
    this.reliability = values.reliability !== undefined ? values.reliability : 0;
  }
};

// Struct: SafetyInfo
on_device_model.mojom.SafetyInfo = class {
  constructor(values = {}) {
    this.language = values.language !== undefined ? values.language : 0;
  }
};

// Struct: ResponseChunk
on_device_model.mojom.ResponseChunk = class {
  constructor(values = {}) {
    this.text = values.text !== undefined ? values.text : "";
    this.safety_info = values.safety_info !== undefined ? values.safety_info : null;
  }
};

// Struct: ResponseSummary
on_device_model.mojom.ResponseSummary = class {
  constructor(values = {}) {
    this.output_token_count = values.output_token_count !== undefined ? values.output_token_count : 0;
  }
};

// Struct: LoadAdaptationParams
on_device_model.mojom.LoadAdaptationParams = class {
  constructor(values = {}) {
    this.assets = values.assets !== undefined ? values.assets : null;
  }
};

// Struct: Capabilities
on_device_model.mojom.Capabilities = class {
  constructor(values = {}) {
    this.false = values.false !== undefined ? values.false : false;
  }
};

// Struct: SessionParams
on_device_model.mojom.SessionParams = class {
  constructor(values = {}) {
    this.capabilities = values.capabilities !== undefined ? values.capabilities : 0;
    this.temperature = values.temperature !== undefined ? values.temperature : 0;
  }
};

// Struct: Input
on_device_model.mojom.Input = class {
  constructor(values = {}) {
    this.pieces = values.pieces !== undefined ? values.pieces : [];
  }
};

// Struct: AppendOptions
on_device_model.mojom.AppendOptions = class {
  constructor(values = {}) {
    this.input = values.input !== undefined ? values.input : null;
    this.0 = values.0 !== undefined ? values.0 : 0;
  }
};

// Struct: GenerateOptions
on_device_model.mojom.GenerateOptions = class {
  constructor(values = {}) {
    this.constraint = values.constraint !== undefined ? values.constraint : 0;
  }
};

// Struct: AudioData
on_device_model.mojom.AudioData = class {
  constructor(values = {}) {
    this.data = values.data !== undefined ? values.data : 0;
  }
};

// Struct: SpeechRecognitionResult
on_device_model.mojom.SpeechRecognitionResult = class {
  constructor(values = {}) {
    this.is_final = values.is_final !== undefined ? values.is_final : false;
  }
};

// Struct: AsrStreamOptions
on_device_model.mojom.AsrStreamOptions = class {
  constructor(values = {}) {
    this.0 = values.0 !== undefined ? values.0 : 0;
  }
};

// Struct: DevicePerformanceInfo
on_device_model.mojom.DevicePerformanceInfo = class {
  constructor(values = {}) {
    this.performance_class = values.performance_class !== undefined ? values.performance_class : null;
    this.vram_mb = values.vram_mb !== undefined ? values.vram_mb : 0;
  }
};

// Struct: DeviceInfo
on_device_model.mojom.DeviceInfo = class {
  constructor(values = {}) {
    this.device_id = values.device_id !== undefined ? values.device_id : 0;
    this.supports_fp16 = values.supports_fp16 !== undefined ? values.supports_fp16 : false;
  }
};

// Interface: StreamingResponder
on_device_model.mojom.StreamingResponderPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'on_device_model.mojom.StreamingResponder';
  }

};

on_device_model.mojom.StreamingResponderRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: ContextClient
on_device_model.mojom.ContextClientPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'on_device_model.mojom.ContextClient';
  }

};

on_device_model.mojom.ContextClientRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: Session
on_device_model.mojom.SessionPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'on_device_model.mojom.Session';
  }

};

on_device_model.mojom.SessionRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: OnDeviceModel
on_device_model.mojom.OnDeviceModelPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'on_device_model.mojom.OnDeviceModel';
  }

};

on_device_model.mojom.OnDeviceModelRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: TextSafetySession
on_device_model.mojom.TextSafetySessionPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'on_device_model.mojom.TextSafetySession';
  }

};

on_device_model.mojom.TextSafetySessionRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: TextSafetyModel
on_device_model.mojom.TextSafetyModelPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'on_device_model.mojom.TextSafetyModel';
  }

};

on_device_model.mojom.TextSafetyModelRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: AsrStreamResponder
on_device_model.mojom.AsrStreamResponderPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'on_device_model.mojom.AsrStreamResponder';
  }

};

on_device_model.mojom.AsrStreamResponderRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: AsrStreamInput
on_device_model.mojom.AsrStreamInputPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'on_device_model.mojom.AsrStreamInput';
  }

};

on_device_model.mojom.AsrStreamInputRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
