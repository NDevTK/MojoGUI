// Auto-generated MojoJS binding
// Source: chromium_src/content/common/input/input_injector.mojom
// Module: content.mojom

'use strict';

// Module namespace
var content = content || {};
content.mojom = content.mojom || {};


// Enum: GestureSourceType
content.mojom.GestureSourceType = {
  kDefaultInput: 0,
  kTouchInput: 1,
  kMouseInput: 2,
  kTouchpadInput: 3,
  kPenInput: 4,
  kGestureSourceTypeMax: 5,
};

// Enum: PointerActionType
content.mojom.PointerActionType = {
  kNotInitialized: 0,
  kPress: 1,
  kMove: 2,
  kRelease: 3,
  kCancel: 4,
  kLeave: 5,
  kIdle: 6,
};

// Enum: SyntheticButton
content.mojom.SyntheticButton = {
  kNoButton: 0,
  kLeft: 1,
  kMiddle: 2,
  kRight: 3,
  kBack: 4,
  kForward: 5,
};

// Enum: InputEventPattern
content.mojom.InputEventPattern = {
  kDefaultPattern: 0,
  kOnePerVsync: 1,
  kTwoPerVsync: 2,
  kEveryOtherVsync: 3,
};

// Struct: SyntheticSmoothDrag
content.mojom.SyntheticSmoothDrag = class {
  constructor(values = {}) {
    this.input_event_pattern = values.input_event_pattern !== undefined ? values.input_event_pattern : 0;
  }
};

// Struct: SyntheticSmoothScroll
content.mojom.SyntheticSmoothScroll = class {
  constructor(values = {}) {
    this.input_event_pattern = values.input_event_pattern !== undefined ? values.input_event_pattern : 0;
  }
};

// Struct: SyntheticPinch
content.mojom.SyntheticPinch = class {
  constructor(values = {}) {
    this.input_event_pattern = values.input_event_pattern !== undefined ? values.input_event_pattern : 0;
  }
};

// Struct: SyntheticTap
content.mojom.SyntheticTap = class {
  constructor(values = {}) {
    this.duration_ms = values.duration_ms !== undefined ? values.duration_ms : 0;
  }
};

// Struct: SyntheticPointerActionParams
content.mojom.SyntheticPointerActionParams = class {
  constructor(values = {}) {
    this.duration = values.duration !== undefined ? values.duration : 0;
  }
};

// Struct: SyntheticPointerAction
content.mojom.SyntheticPointerAction = class {
  constructor(values = {}) {
    this.params = values.params !== undefined ? values.params : 0;
  }
};

// Interface: InputInjector
content.mojom.InputInjectorPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'content.mojom.InputInjector';
  }

  queueSyntheticSmoothDrag(drag) {
    // Method: QueueSyntheticSmoothDrag
    // Call: QueueSyntheticSmoothDrag(drag)
  }

  queueSyntheticSmoothScroll(scroll) {
    // Method: QueueSyntheticSmoothScroll
    // Call: QueueSyntheticSmoothScroll(scroll)
  }

  queueSyntheticPinch(pinch) {
    // Method: QueueSyntheticPinch
    // Call: QueueSyntheticPinch(pinch)
  }

  queueSyntheticTap(tap) {
    // Method: QueueSyntheticTap
    // Call: QueueSyntheticTap(tap)
  }

  queueSyntheticPointerAction(pointer_action) {
    // Method: QueueSyntheticPointerAction
    // Call: QueueSyntheticPointerAction(pointer_action)
  }

};

content.mojom.InputInjectorRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
