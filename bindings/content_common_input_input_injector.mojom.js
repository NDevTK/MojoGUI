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

content.mojom.GestureSourceTypeSpec = { $: mojo.internal.Enum() };
content.mojom.PointerActionTypeSpec = { $: mojo.internal.Enum() };
content.mojom.SyntheticButtonSpec = { $: mojo.internal.Enum() };
content.mojom.InputEventPatternSpec = { $: mojo.internal.Enum() };
content.mojom.SyntheticSmoothDragSpec = { $: {} };
content.mojom.SyntheticSmoothScrollSpec = { $: {} };
content.mojom.SyntheticPinchSpec = { $: {} };
content.mojom.SyntheticTapSpec = { $: {} };
content.mojom.SyntheticPointerActionParamsSpec = { $: {} };
content.mojom.SyntheticPointerActionSpec = { $: {} };
content.mojom.InputInjector = {};
content.mojom.InputInjector.$interfaceName = 'content.mojom.InputInjector';
content.mojom.InputInjector_QueueSyntheticSmoothDrag_ParamsSpec = { $: {} };
content.mojom.InputInjector_QueueSyntheticSmoothDrag_ResponseParamsSpec = { $: {} };
content.mojom.InputInjector_QueueSyntheticSmoothScroll_ParamsSpec = { $: {} };
content.mojom.InputInjector_QueueSyntheticSmoothScroll_ResponseParamsSpec = { $: {} };
content.mojom.InputInjector_QueueSyntheticPinch_ParamsSpec = { $: {} };
content.mojom.InputInjector_QueueSyntheticPinch_ResponseParamsSpec = { $: {} };
content.mojom.InputInjector_QueueSyntheticTap_ParamsSpec = { $: {} };
content.mojom.InputInjector_QueueSyntheticTap_ResponseParamsSpec = { $: {} };
content.mojom.InputInjector_QueueSyntheticPointerAction_ParamsSpec = { $: {} };
content.mojom.InputInjector_QueueSyntheticPointerAction_ResponseParamsSpec = { $: {} };

// Enum: GestureSourceType
content.mojom.GestureSourceType = {
  kDefaultInput: 0,
  kTouchInput: 1,
  kMouseInput: 2,
  kTouchpadInput: 2,
  kPenInput: 3,
  kGestureSourceTypeMax: 3,
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
mojo.internal.Struct(
    content.mojom.SyntheticSmoothDragSpec, 'content.mojom.SyntheticSmoothDrag', [
      mojo.internal.StructField('gesture_source_type', 0, 0, content.mojom.GestureSourceTypeSpec, null, false, 0, undefined),
      mojo.internal.StructField('start_point', 8, 0, gfx.mojom.PointFSpec, null, false, 0, undefined),
      mojo.internal.StructField('distances', 16, 0, mojo.internal.Array(gfx.mojom.Vector2dFSpec, false), null, false, 0, undefined),
      mojo.internal.StructField('speed_in_pixels_s', 24, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('vsync_offset_ms', 28, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('input_event_pattern', 32, 0, content.mojom.InputEventPatternSpec, null, false, 0, undefined),
    ],
    [[0, 48]]);

// Struct: SyntheticSmoothScroll
mojo.internal.Struct(
    content.mojom.SyntheticSmoothScrollSpec, 'content.mojom.SyntheticSmoothScroll', [
      mojo.internal.StructField('gesture_source_type', 0, 0, content.mojom.GestureSourceTypeSpec, null, false, 0, undefined),
      mojo.internal.StructField('anchor', 8, 0, gfx.mojom.PointFSpec, null, false, 0, undefined),
      mojo.internal.StructField('distances', 16, 0, mojo.internal.Array(gfx.mojom.Vector2dFSpec, false), null, false, 0, undefined),
      mojo.internal.StructField('prevent_fling', 24, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('speed_in_pixels_s', 28, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('fling_velocity_x', 32, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('fling_velocity_y', 36, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('granularity', 40, 0, ui.mojom.ScrollGranularitySpec, null, false, 0, undefined),
      mojo.internal.StructField('modifiers', 48, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('vsync_offset_ms', 52, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('input_event_pattern', 56, 0, content.mojom.InputEventPatternSpec, null, false, 0, undefined),
    ],
    [[0, 72]]);

// Struct: SyntheticPinch
mojo.internal.Struct(
    content.mojom.SyntheticPinchSpec, 'content.mojom.SyntheticPinch', [
      mojo.internal.StructField('scale_factor', 0, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('anchor', 8, 0, gfx.mojom.PointFSpec, null, false, 0, undefined),
      mojo.internal.StructField('relative_pointer_speed_in_pixels_s', 16, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('vsync_offset_ms', 20, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('input_event_pattern', 24, 0, content.mojom.InputEventPatternSpec, null, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: SyntheticTap
mojo.internal.Struct(
    content.mojom.SyntheticTapSpec, 'content.mojom.SyntheticTap', [
      mojo.internal.StructField('gesture_source_type', 0, 0, content.mojom.GestureSourceTypeSpec, null, false, 0, undefined),
      mojo.internal.StructField('position', 8, 0, gfx.mojom.PointFSpec, null, false, 0, undefined),
      mojo.internal.StructField('duration_ms', 16, 0, mojo.internal.Float, 0, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: SyntheticPointerActionParams
mojo.internal.Struct(
    content.mojom.SyntheticPointerActionParamsSpec, 'content.mojom.SyntheticPointerActionParams', [
      mojo.internal.StructField('pointer_action_type', 0, 0, content.mojom.PointerActionTypeSpec, null, false, 0, undefined),
      mojo.internal.StructField('position', 8, 0, gfx.mojom.PointFSpec, null, false, 0, undefined),
      mojo.internal.StructField('pointer_id', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('button', 20, 0, content.mojom.SyntheticButtonSpec, null, false, 0, undefined),
      mojo.internal.StructField('key_modifiers', 24, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('width', 28, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('height', 32, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('rotation_angle', 36, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('force', 40, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('tangential_pressure', 44, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('tilt_x', 48, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('tilt_y', 52, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('timestamp', 56, 0, mojo_base.mojom.TimeTicksSpec, null, false, 0, undefined),
      mojo.internal.StructField('duration', 64, 0, mojo_base.mojom.TimeDeltaSpec, null, false, 0, undefined),
    ],
    [[0, 80]]);

// Struct: SyntheticPointerAction
mojo.internal.Struct(
    content.mojom.SyntheticPointerActionSpec, 'content.mojom.SyntheticPointerAction', [
      mojo.internal.StructField('gesture_source_type', 0, 0, content.mojom.GestureSourceTypeSpec, null, false, 0, undefined),
      mojo.internal.StructField('params', 8, 0, mojo.internal.Array(mojo.internal.Array(content.mojom.SyntheticPointerActionParamsSpec, false), false), null, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: InputInjector
mojo.internal.Struct(
    content.mojom.InputInjector_QueueSyntheticSmoothDrag_ParamsSpec, 'content.mojom.InputInjector_QueueSyntheticSmoothDrag_Params', [
      mojo.internal.StructField('drag', 0, 0, content.mojom.SyntheticSmoothDragSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.mojom.InputInjector_QueueSyntheticSmoothDrag_ResponseParamsSpec, 'content.mojom.InputInjector_QueueSyntheticSmoothDrag_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    content.mojom.InputInjector_QueueSyntheticSmoothScroll_ParamsSpec, 'content.mojom.InputInjector_QueueSyntheticSmoothScroll_Params', [
      mojo.internal.StructField('scroll', 0, 0, content.mojom.SyntheticSmoothScrollSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.mojom.InputInjector_QueueSyntheticSmoothScroll_ResponseParamsSpec, 'content.mojom.InputInjector_QueueSyntheticSmoothScroll_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    content.mojom.InputInjector_QueueSyntheticPinch_ParamsSpec, 'content.mojom.InputInjector_QueueSyntheticPinch_Params', [
      mojo.internal.StructField('pinch', 0, 0, content.mojom.SyntheticPinchSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.mojom.InputInjector_QueueSyntheticPinch_ResponseParamsSpec, 'content.mojom.InputInjector_QueueSyntheticPinch_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    content.mojom.InputInjector_QueueSyntheticTap_ParamsSpec, 'content.mojom.InputInjector_QueueSyntheticTap_Params', [
      mojo.internal.StructField('tap', 0, 0, content.mojom.SyntheticTapSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.mojom.InputInjector_QueueSyntheticTap_ResponseParamsSpec, 'content.mojom.InputInjector_QueueSyntheticTap_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    content.mojom.InputInjector_QueueSyntheticPointerAction_ParamsSpec, 'content.mojom.InputInjector_QueueSyntheticPointerAction_Params', [
      mojo.internal.StructField('pointer_action', 0, 0, content.mojom.SyntheticPointerActionSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.mojom.InputInjector_QueueSyntheticPointerAction_ResponseParamsSpec, 'content.mojom.InputInjector_QueueSyntheticPointerAction_ResponseParams', [
    ],
    [[0, 8]]);

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
      content.mojom.InputInjector_QueueSyntheticSmoothDrag_ResponseParamsSpec,
      [drag],
      false);
  }

  queueSyntheticSmoothScroll(scroll) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      content.mojom.InputInjector_QueueSyntheticSmoothScroll_ParamsSpec,
      content.mojom.InputInjector_QueueSyntheticSmoothScroll_ResponseParamsSpec,
      [scroll],
      false);
  }

  queueSyntheticPinch(pinch) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      content.mojom.InputInjector_QueueSyntheticPinch_ParamsSpec,
      content.mojom.InputInjector_QueueSyntheticPinch_ResponseParamsSpec,
      [pinch],
      false);
  }

  queueSyntheticTap(tap) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      content.mojom.InputInjector_QueueSyntheticTap_ParamsSpec,
      content.mojom.InputInjector_QueueSyntheticTap_ResponseParamsSpec,
      [tap],
      false);
  }

  queueSyntheticPointerAction(pointer_action) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      content.mojom.InputInjector_QueueSyntheticPointerAction_ParamsSpec,
      content.mojom.InputInjector_QueueSyntheticPointerAction_ResponseParamsSpec,
      [pointer_action],
      false);
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

content.mojom.InputInjectorPtr = content.mojom.InputInjectorRemote;
content.mojom.InputInjectorRequest = content.mojom.InputInjectorPendingReceiver;

