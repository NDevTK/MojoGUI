// Auto-generated MojoJS binding
// Source: chromium_src/services/viz/public/mojom/compositing/animation.mojom
// Module: viz.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var viz = viz || {};
viz.mojom = viz.mojom || {};
var cc = cc || {};
var mojo_base = mojo_base || {};
var skia = skia || {};
var gfx = gfx || {};

viz.mojom.TimingStepPositionSpec = { $: mojo.internal.Enum() };
viz.mojom.AnimationDirectionSpec = { $: mojo.internal.Enum() };
viz.mojom.AnimationFillModeSpec = { $: mojo.internal.Enum() };
viz.mojom.TimingFunctionSpec = { $: {} };
viz.mojom.TransformOperationSpec = { $: {} };
viz.mojom.AnimationKeyframeValueSpec = { $: {} };
viz.mojom.CubicBezierTimingFunctionSpec = { $: {} };
viz.mojom.StepsTimingFunctionSpec = { $: {} };
viz.mojom.LinearEasingPointSpec = { $: {} };
viz.mojom.AxisAngleSpec = { $: {} };
viz.mojom.AnimationKeyframeSpec = { $: {} };
viz.mojom.AnimationKeyframeModelSpec = { $: {} };
viz.mojom.AnimationSpec = { $: {} };
viz.mojom.AnimationTimelineSpec = { $: {} };

// Enum: TimingStepPosition
viz.mojom.TimingStepPosition = {
  kStart: 0,
  kEnd: 1,
  kJumpBoth: 2,
  kJumpEnd: 3,
  kJumpNone: 4,
  kJumpStart: 5,
};

// Enum: AnimationDirection
viz.mojom.AnimationDirection = {
  kNormal: 0,
  kReverse: 1,
  kAlternateNormal: 2,
  kAlternateReverse: 3,
};

// Enum: AnimationFillMode
viz.mojom.AnimationFillMode = {
  kNone: 0,
  kForwards: 1,
  kBackwards: 2,
  kBoth: 3,
  kAuto: 4,
};

// Union: TimingFunction
mojo.internal.Union(
    viz.mojom.TimingFunctionSpec, 'viz.mojom.TimingFunction', {
      'cubic_bezier': {
        'ordinal': 0,
        'type': viz.mojom.CubicBezierTimingFunctionSpec.$,
        'nullable': false,
      },
      'steps': {
        'ordinal': 1,
        'type': viz.mojom.StepsTimingFunctionSpec.$,
        'nullable': false,
      },
      'linear': {
        'ordinal': 2,
        'type': mojo.internal.Array(viz.mojom.LinearEasingPointSpec.$, false),
        'nullable': false,
      },
    });

// Union: TransformOperation
mojo.internal.Union(
    viz.mojom.TransformOperationSpec, 'viz.mojom.TransformOperation', {
      'identity': {
        'ordinal': 0,
        'type': mojo.internal.Bool,
        'nullable': false,
      },
      'perspective_depth': {
        'ordinal': 1,
        'type': mojo.internal.Float,
        'nullable': false,
      },
      'skew': {
        'ordinal': 2,
        'type': gfx.mojom.Vector2dFSpec.$,
        'nullable': false,
      },
      'scale': {
        'ordinal': 3,
        'type': gfx.mojom.Vector3dFSpec.$,
        'nullable': false,
      },
      'translate': {
        'ordinal': 4,
        'type': gfx.mojom.Vector3dFSpec.$,
        'nullable': false,
      },
      'rotate': {
        'ordinal': 5,
        'type': viz.mojom.AxisAngleSpec.$,
        'nullable': false,
      },
      'matrix': {
        'ordinal': 6,
        'type': gfx.mojom.TransformSpec.$,
        'nullable': false,
      },
    });

// Union: AnimationKeyframeValue
mojo.internal.Union(
    viz.mojom.AnimationKeyframeValueSpec, 'viz.mojom.AnimationKeyframeValue', {
      'scalar': {
        'ordinal': 0,
        'type': mojo.internal.Float,
        'nullable': false,
      },
      'color': {
        'ordinal': 1,
        'type': skia.mojom.SkColorSpec.$,
        'nullable': false,
      },
      'size': {
        'ordinal': 2,
        'type': gfx.mojom.SizeFSpec.$,
        'nullable': false,
      },
      'rect': {
        'ordinal': 3,
        'type': gfx.mojom.RectSpec.$,
        'nullable': false,
      },
      'transform': {
        'ordinal': 4,
        'type': mojo.internal.Array(viz.mojom.TransformOperationSpec.$, false),
        'nullable': false,
      },
    });

// Struct: CubicBezierTimingFunction
mojo.internal.Struct(
    viz.mojom.CubicBezierTimingFunctionSpec, 'viz.mojom.CubicBezierTimingFunction', [
      mojo.internal.StructField('x1', 0, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('y1', 8, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('x2', 16, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('y2', 24, 0, mojo.internal.Double, 0, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: StepsTimingFunction
mojo.internal.Struct(
    viz.mojom.StepsTimingFunctionSpec, 'viz.mojom.StepsTimingFunction', [
      mojo.internal.StructField('step_position', 0, 0, viz.mojom.TimingStepPositionSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('num_steps', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: LinearEasingPoint
mojo.internal.Struct(
    viz.mojom.LinearEasingPointSpec, 'viz.mojom.LinearEasingPoint', [
      mojo.internal.StructField('in', 0, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('out', 8, 0, mojo.internal.Double, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: AxisAngle
mojo.internal.Struct(
    viz.mojom.AxisAngleSpec, 'viz.mojom.AxisAngle', [
      mojo.internal.StructField('axis', 0, 0, gfx.mojom.Vector3dFSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('angle', 8, 0, mojo.internal.Float, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: AnimationKeyframe
mojo.internal.Struct(
    viz.mojom.AnimationKeyframeSpec, 'viz.mojom.AnimationKeyframe', [
      mojo.internal.StructField('value', 0, 0, viz.mojom.AnimationKeyframeValueSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('start_time', 8, 0, mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('timing_function', 16, 0, viz.mojom.TimingFunctionSpec.$, null, true, 0, undefined),
    ],
    [[0, 32]]);

// Struct: AnimationKeyframeModel
mojo.internal.Struct(
    viz.mojom.AnimationKeyframeModelSpec, 'viz.mojom.AnimationKeyframeModel', [
      mojo.internal.StructField('element_id', 0, 0, cc.mojom.ElementIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('timing_function', 8, 0, viz.mojom.TimingFunctionSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('keyframes', 16, 0, mojo.internal.Array(viz.mojom.AnimationKeyframeSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('scaled_duration', 24, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('direction', 32, 0, viz.mojom.AnimationDirectionSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('fill_mode', 40, 0, viz.mojom.AnimationFillModeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('playback_rate', 48, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('iterations', 56, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('iteration_start', 64, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('time_offset', 72, 0, mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('id', 80, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('group_id', 84, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('target_property_type', 88, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 104]]);

// Struct: Animation
mojo.internal.Struct(
    viz.mojom.AnimationSpec, 'viz.mojom.Animation', [
      mojo.internal.StructField('element_id', 0, 0, cc.mojom.ElementIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('keyframe_models', 8, 0, mojo.internal.Array(viz.mojom.AnimationKeyframeModelSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('id', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: AnimationTimeline
mojo.internal.Struct(
    viz.mojom.AnimationTimelineSpec, 'viz.mojom.AnimationTimeline', [
      mojo.internal.StructField('new_animations', 0, 0, mojo.internal.Array(viz.mojom.AnimationSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('removed_animations', 8, 0, mojo.internal.Array(mojo.internal.Int32, false), null, false, 0, undefined),
      mojo.internal.StructField('id', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 32]]);
