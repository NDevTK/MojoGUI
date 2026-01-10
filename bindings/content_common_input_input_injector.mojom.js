// Auto-generated MojoJS binding
// Source: chromium_src/content/common/input/input_injector.mojom
// Module: content.mojom

'use strict';

// Module namespace
var content = content || {};
content.mojom = content.mojom || {};
var ui = ui || {};
var gfx = gfx || {};
var ui = ui || {};


// Enum: GestureSourceType
content.mojom.mojom.GestureSourceType = {
  kDefaultInput: 0,
  kTouchInput: 1,
  kMouseInput: 2,
  kTouchpadInput: 3,
  kPenInput: 4,
  kGestureSourceTypeMax: 5,
};
content.mojom.mojom.GestureSourceTypeSpec = { $: mojo.internal.Enum() };

// Enum: PointerActionType
content.mojom.mojom.PointerActionType = {
  kNotInitialized: 0,
  kPress: 1,
  kMove: 2,
  kRelease: 3,
  kCancel: 4,
  kLeave: 5,
  kIdle: 6,
};
content.mojom.mojom.PointerActionTypeSpec = { $: mojo.internal.Enum() };

// Enum: SyntheticButton
content.mojom.mojom.SyntheticButton = {
  kNoButton: 0,
  kLeft: 1,
  kMiddle: 2,
  kRight: 3,
  kBack: 4,
  kForward: 5,
};
content.mojom.mojom.SyntheticButtonSpec = { $: mojo.internal.Enum() };

// Enum: InputEventPattern
content.mojom.mojom.InputEventPattern = {
  kDefaultPattern: 0,
  kOnePerVsync: 1,
  kTwoPerVsync: 2,
  kEveryOtherVsync: 3,
};
content.mojom.mojom.InputEventPatternSpec = { $: mojo.internal.Enum() };

// Struct: SyntheticSmoothDrag
content.mojom.mojom.SyntheticSmoothDragSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.SyntheticSmoothDrag',
      packedSize: 40,
      fields: [
        { name: 'gesture_source_type', packedOffset: 16, packedBitOffset: 0, type: content.mojom.GestureSourceTypeSpec, nullable: false, minVersion: 0 },
        { name: 'start_point', packedOffset: 0, packedBitOffset: 0, type: gfx.mojom.PointFSpec, nullable: false, minVersion: 0 },
        { name: 'distances', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(gfx.mojom.Vector2dFSpec, false), nullable: false, minVersion: 0 },
        { name: 'speed_in_pixels_s', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
        { name: 'vsync_offset_ms', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
        { name: 'input_event_pattern', packedOffset: 28, packedBitOffset: 0, type: content.mojom.InputEventPatternSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Struct: SyntheticSmoothScroll
content.mojom.mojom.SyntheticSmoothScrollSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.SyntheticSmoothScroll',
      packedSize: 64,
      fields: [
        { name: 'gesture_source_type', packedOffset: 24, packedBitOffset: 0, type: content.mojom.GestureSourceTypeSpec, nullable: false, minVersion: 0 },
        { name: 'anchor', packedOffset: 0, packedBitOffset: 0, type: gfx.mojom.PointFSpec, nullable: false, minVersion: 0 },
        { name: 'distances', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(gfx.mojom.Vector2dFSpec, false), nullable: false, minVersion: 0 },
        { name: 'prevent_fling', packedOffset: 52, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'speed_in_pixels_s', packedOffset: 28, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
        { name: 'fling_velocity_x', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
        { name: 'fling_velocity_y', packedOffset: 36, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
        { name: 'granularity', packedOffset: 16, packedBitOffset: 0, type: ui.mojom.ScrollGranularitySpec, nullable: false, minVersion: 0 },
        { name: 'modifiers', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'vsync_offset_ms', packedOffset: 44, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
        { name: 'input_event_pattern', packedOffset: 48, packedBitOffset: 0, type: content.mojom.InputEventPatternSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 64}]
    }
  }
};

// Struct: SyntheticPinch
content.mojom.mojom.SyntheticPinchSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.SyntheticPinch',
      packedSize: 32,
      fields: [
        { name: 'scale_factor', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
        { name: 'anchor', packedOffset: 0, packedBitOffset: 0, type: gfx.mojom.PointFSpec, nullable: false, minVersion: 0 },
        { name: 'relative_pointer_speed_in_pixels_s', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
        { name: 'vsync_offset_ms', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
        { name: 'input_event_pattern', packedOffset: 20, packedBitOffset: 0, type: content.mojom.InputEventPatternSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: SyntheticTap
content.mojom.mojom.SyntheticTapSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.SyntheticTap',
      packedSize: 24,
      fields: [
        { name: 'gesture_source_type', packedOffset: 8, packedBitOffset: 0, type: content.mojom.GestureSourceTypeSpec, nullable: false, minVersion: 0 },
        { name: 'position', packedOffset: 0, packedBitOffset: 0, type: gfx.mojom.PointFSpec, nullable: false, minVersion: 0 },
        { name: 'duration_ms', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: SyntheticPointerActionParams
content.mojom.mojom.SyntheticPointerActionParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.SyntheticPointerActionParams',
      packedSize: 80,
      fields: [
        { name: 'pointer_action_type', packedOffset: 24, packedBitOffset: 0, type: content.mojom.PointerActionTypeSpec, nullable: false, minVersion: 0 },
        { name: 'position', packedOffset: 0, packedBitOffset: 0, type: gfx.mojom.PointFSpec, nullable: false, minVersion: 0 },
        { name: 'pointer_id', packedOffset: 28, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'button', packedOffset: 32, packedBitOffset: 0, type: content.mojom.SyntheticButtonSpec, nullable: false, minVersion: 0 },
        { name: 'key_modifiers', packedOffset: 36, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'width', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
        { name: 'height', packedOffset: 44, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
        { name: 'rotation_angle', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
        { name: 'force', packedOffset: 52, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
        { name: 'tangential_pressure', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
        { name: 'tilt_x', packedOffset: 60, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'tilt_y', packedOffset: 64, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'timestamp', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.TimeTicksSpec, nullable: false, minVersion: 0 },
        { name: 'duration', packedOffset: 16, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 80}]
    }
  }
};

// Struct: SyntheticPointerAction
content.mojom.mojom.SyntheticPointerActionSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.SyntheticPointerAction',
      packedSize: 24,
      fields: [
        { name: 'gesture_source_type', packedOffset: 8, packedBitOffset: 0, type: content.mojom.GestureSourceTypeSpec, nullable: false, minVersion: 0 },
        { name: 'params', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Array(content.mojom.SyntheticPointerActionParamsSpec, false), false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Interface: InputInjector
content.mojom.mojom.InputInjector = {};

content.mojom.mojom.InputInjectorPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

content.mojom.mojom.InputInjectorRemote = class {
  static get $interfaceName() {
    return 'content.mojom.InputInjector';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      content.mojom.mojom.InputInjectorPendingReceiver,
      handle);
    this.$ = new content.mojom.mojom.InputInjectorRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

content.mojom.mojom.InputInjectorRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  queueSyntheticSmoothDrag(drag) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      content.mojom.mojom.InputInjector_QueueSyntheticSmoothDrag_ParamsSpec,
      null,
      [drag]);
  }

  queueSyntheticSmoothScroll(scroll) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      content.mojom.mojom.InputInjector_QueueSyntheticSmoothScroll_ParamsSpec,
      null,
      [scroll]);
  }

  queueSyntheticPinch(pinch) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      content.mojom.mojom.InputInjector_QueueSyntheticPinch_ParamsSpec,
      null,
      [pinch]);
  }

  queueSyntheticTap(tap) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      content.mojom.mojom.InputInjector_QueueSyntheticTap_ParamsSpec,
      null,
      [tap]);
  }

  queueSyntheticPointerAction(pointer_action) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      content.mojom.mojom.InputInjector_QueueSyntheticPointerAction_ParamsSpec,
      null,
      [pointer_action]);
  }

};

content.mojom.mojom.InputInjector.getRemote = function() {
  let remote = new content.mojom.mojom.InputInjectorRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'content.mojom.InputInjector',
    'context');
  return remote.$;
};

// ParamsSpec for QueueSyntheticSmoothDrag
content.mojom.mojom.InputInjector_QueueSyntheticSmoothDrag_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.InputInjector.QueueSyntheticSmoothDrag_Params',
      packedSize: 16,
      fields: [
        { name: 'drag', packedOffset: 0, packedBitOffset: 0, type: content.mojom.SyntheticSmoothDragSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for QueueSyntheticSmoothScroll
content.mojom.mojom.InputInjector_QueueSyntheticSmoothScroll_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.InputInjector.QueueSyntheticSmoothScroll_Params',
      packedSize: 16,
      fields: [
        { name: 'scroll', packedOffset: 0, packedBitOffset: 0, type: content.mojom.SyntheticSmoothScrollSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for QueueSyntheticPinch
content.mojom.mojom.InputInjector_QueueSyntheticPinch_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.InputInjector.QueueSyntheticPinch_Params',
      packedSize: 16,
      fields: [
        { name: 'pinch', packedOffset: 0, packedBitOffset: 0, type: content.mojom.SyntheticPinchSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for QueueSyntheticTap
content.mojom.mojom.InputInjector_QueueSyntheticTap_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.InputInjector.QueueSyntheticTap_Params',
      packedSize: 16,
      fields: [
        { name: 'tap', packedOffset: 0, packedBitOffset: 0, type: content.mojom.SyntheticTapSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for QueueSyntheticPointerAction
content.mojom.mojom.InputInjector_QueueSyntheticPointerAction_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.InputInjector.QueueSyntheticPointerAction_Params',
      packedSize: 16,
      fields: [
        { name: 'pointer_action', packedOffset: 0, packedBitOffset: 0, type: content.mojom.SyntheticPointerActionSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
content.mojom.mojom.InputInjectorPtr = content.mojom.mojom.InputInjectorRemote;
content.mojom.mojom.InputInjectorRequest = content.mojom.mojom.InputInjectorPendingReceiver;

