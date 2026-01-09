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
content.mojom.SyntheticSmoothDragSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.SyntheticSmoothDrag',
      packedSize: 48,
      fields: [
        { name: 'gesture_source_type', packedOffset: 0, packedBitOffset: 0, type: content.mojom.GestureSourceTypeSpec, nullable: false },
        { name: 'start_point', packedOffset: 8, packedBitOffset: 0, type: gfx.mojom.PointFSpec, nullable: false },
        { name: 'distances', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'speed_in_pixels_s', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
        { name: 'vsync_offset_ms', packedOffset: 28, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
        { name: 'input_event_pattern', packedOffset: 32, packedBitOffset: 0, type: content.mojom.InputEventPatternSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: SyntheticSmoothScroll
content.mojom.SyntheticSmoothScrollSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.SyntheticSmoothScroll',
      packedSize: 80,
      fields: [
        { name: 'gesture_source_type', packedOffset: 0, packedBitOffset: 0, type: content.mojom.GestureSourceTypeSpec, nullable: false },
        { name: 'anchor', packedOffset: 8, packedBitOffset: 0, type: gfx.mojom.PointFSpec, nullable: false },
        { name: 'distances', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'prevent_fling', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'speed_in_pixels_s', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
        { name: 'fling_velocity_x', packedOffset: 36, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
        { name: 'fling_velocity_y', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
        { name: 'granularity', packedOffset: 48, packedBitOffset: 0, type: ui.mojom.ScrollGranularitySpec, nullable: false },
        { name: 'modifiers', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'vsync_offset_ms', packedOffset: 60, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
        { name: 'input_event_pattern', packedOffset: 64, packedBitOffset: 0, type: content.mojom.InputEventPatternSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: SyntheticPinch
content.mojom.SyntheticPinchSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.SyntheticPinch',
      packedSize: 40,
      fields: [
        { name: 'scale_factor', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
        { name: 'anchor', packedOffset: 8, packedBitOffset: 0, type: gfx.mojom.PointFSpec, nullable: false },
        { name: 'relative_pointer_speed_in_pixels_s', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
        { name: 'vsync_offset_ms', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
        { name: 'input_event_pattern', packedOffset: 24, packedBitOffset: 0, type: content.mojom.InputEventPatternSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: SyntheticTap
content.mojom.SyntheticTapSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.SyntheticTap',
      packedSize: 32,
      fields: [
        { name: 'gesture_source_type', packedOffset: 0, packedBitOffset: 0, type: content.mojom.GestureSourceTypeSpec, nullable: false },
        { name: 'position', packedOffset: 8, packedBitOffset: 0, type: gfx.mojom.PointFSpec, nullable: false },
        { name: 'duration_ms', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: SyntheticPointerActionParams
content.mojom.SyntheticPointerActionParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.SyntheticPointerActionParams',
      packedSize: 88,
      fields: [
        { name: 'pointer_action_type', packedOffset: 0, packedBitOffset: 0, type: content.mojom.PointerActionTypeSpec, nullable: false },
        { name: 'position', packedOffset: 8, packedBitOffset: 0, type: gfx.mojom.PointFSpec, nullable: false },
        { name: 'pointer_id', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'button', packedOffset: 24, packedBitOffset: 0, type: content.mojom.SyntheticButtonSpec, nullable: false },
        { name: 'key_modifiers', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'width', packedOffset: 36, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
        { name: 'height', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
        { name: 'rotation_angle', packedOffset: 44, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
        { name: 'force', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
        { name: 'tangential_pressure', packedOffset: 52, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
        { name: 'tilt_x', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'tilt_y', packedOffset: 60, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'timestamp', packedOffset: 64, packedBitOffset: 0, type: mojo_base.mojom.TimeTicksSpec, nullable: false },
        { name: 'duration', packedOffset: 72, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: SyntheticPointerAction
content.mojom.SyntheticPointerActionSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.SyntheticPointerAction',
      packedSize: 24,
      fields: [
        { name: 'gesture_source_type', packedOffset: 0, packedBitOffset: 0, type: content.mojom.GestureSourceTypeSpec, nullable: false },
        { name: 'params', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Interface: InputInjector
content.mojom.InputInjector = {};

content.mojom.InputInjectorPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

content.mojom.InputInjectorRemote = class {
  static get $interfaceName() {
    return 'content.mojom.InputInjector';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      content.mojom.InputInjectorPendingReceiver,
      handle);
    this.$ = new content.mojom.InputInjectorRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

content.mojom.InputInjectorRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  queueSyntheticSmoothDrag(drag) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      content.mojom.InputInjector_QueueSyntheticSmoothDrag_ParamsSpec,
      null,
      [drag]);
  }

  queueSyntheticSmoothScroll(scroll) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      content.mojom.InputInjector_QueueSyntheticSmoothScroll_ParamsSpec,
      null,
      [scroll]);
  }

  queueSyntheticPinch(pinch) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      content.mojom.InputInjector_QueueSyntheticPinch_ParamsSpec,
      null,
      [pinch]);
  }

  queueSyntheticTap(tap) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      content.mojom.InputInjector_QueueSyntheticTap_ParamsSpec,
      null,
      [tap]);
  }

  queueSyntheticPointerAction(pointer_action) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      content.mojom.InputInjector_QueueSyntheticPointerAction_ParamsSpec,
      null,
      [pointer_action]);
  }

};

content.mojom.InputInjector.getRemote = function() {
  let remote = new content.mojom.InputInjectorRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'content.mojom.InputInjector',
    'context');
  return remote.$;
};

// ParamsSpec for QueueSyntheticSmoothDrag
content.mojom.InputInjector_QueueSyntheticSmoothDrag_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.InputInjector.QueueSyntheticSmoothDrag_Params',
      packedSize: 16,
      fields: [
        { name: 'drag', packedOffset: 0, packedBitOffset: 0, type: content.mojom.SyntheticSmoothDragSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for QueueSyntheticSmoothScroll
content.mojom.InputInjector_QueueSyntheticSmoothScroll_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.InputInjector.QueueSyntheticSmoothScroll_Params',
      packedSize: 16,
      fields: [
        { name: 'scroll', packedOffset: 0, packedBitOffset: 0, type: content.mojom.SyntheticSmoothScrollSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for QueueSyntheticPinch
content.mojom.InputInjector_QueueSyntheticPinch_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.InputInjector.QueueSyntheticPinch_Params',
      packedSize: 16,
      fields: [
        { name: 'pinch', packedOffset: 0, packedBitOffset: 0, type: content.mojom.SyntheticPinchSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for QueueSyntheticTap
content.mojom.InputInjector_QueueSyntheticTap_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.InputInjector.QueueSyntheticTap_Params',
      packedSize: 16,
      fields: [
        { name: 'tap', packedOffset: 0, packedBitOffset: 0, type: content.mojom.SyntheticTapSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for QueueSyntheticPointerAction
content.mojom.InputInjector_QueueSyntheticPointerAction_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.InputInjector.QueueSyntheticPointerAction_Params',
      packedSize: 16,
      fields: [
        { name: 'pointer_action', packedOffset: 0, packedBitOffset: 0, type: content.mojom.SyntheticPointerActionSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
content.mojom.InputInjectorPtr = content.mojom.InputInjectorRemote;
content.mojom.InputInjectorRequest = content.mojom.InputInjectorPendingReceiver;

