// Auto-generated MojoJS binding
// Source: chromium_src/services/viz/public/mojom/compositing/animation.mojom
// Module: viz.mojom

'use strict';

// Module namespace
var viz = viz || {};
viz.mojom = viz.mojom || {};
var skia = skia || {};
var ui = ui || {};
var gfx = gfx || {};
var ui = ui || {};
var gfx = gfx || {};


// Enum: TimingStepPosition
viz.mojom.mojom.TimingStepPosition = {
  kStart: 0,
  kEnd: 1,
  kJumpBoth: 2,
  kJumpEnd: 3,
  kJumpNone: 4,
  kJumpStart: 5,
};
viz.mojom.mojom.TimingStepPositionSpec = { $: mojo.internal.Enum() };

// Enum: AnimationDirection
viz.mojom.mojom.AnimationDirection = {
  kNormal: 0,
  kReverse: 1,
  kAlternateNormal: 2,
  kAlternateReverse: 3,
};
viz.mojom.mojom.AnimationDirectionSpec = { $: mojo.internal.Enum() };

// Enum: AnimationFillMode
viz.mojom.mojom.AnimationFillMode = {
  kNone: 0,
  kForwards: 1,
  kBackwards: 2,
  kBoth: 3,
  kAuto: 4,
};
viz.mojom.mojom.AnimationFillModeSpec = { $: mojo.internal.Enum() };

// Union: TimingFunction
viz.mojom.mojom.TimingFunctionSpec = { $: mojo.internal.Union(
    'viz.mojom.TimingFunction', {
      'cubic_bezier': {
        'ordinal': 0,
        'type': viz.mojom.CubicBezierTimingFunctionSpec,
      }},
      'steps': {
        'ordinal': 1,
        'type': viz.mojom.StepsTimingFunctionSpec,
      }},
      'linear': {
        'ordinal': 2,
        'type': mojo.internal.Array(viz.mojom.LinearEasingPointSpec, false),
      }},
    })
};

// Union: TransformOperation
viz.mojom.mojom.TransformOperationSpec = { $: mojo.internal.Union(
    'viz.mojom.TransformOperation', {
      'identity': {
        'ordinal': 0,
        'type': mojo.internal.Bool,
      }},
      'perspective_depth': {
        'ordinal': 1,
        'type': mojo.internal.Float,
      }},
      'skew': {
        'ordinal': 2,
        'type': gfx.mojom.Vector2dFSpec,
      }},
      'scale': {
        'ordinal': 3,
        'type': gfx.mojom.Vector3dFSpec,
      }},
      'translate': {
        'ordinal': 4,
        'type': gfx.mojom.Vector3dFSpec,
      }},
      'rotate': {
        'ordinal': 5,
        'type': viz.mojom.AxisAngleSpec,
      }},
      'matrix': {
        'ordinal': 6,
        'type': gfx.mojom.TransformSpec,
      }},
    })
};

// Union: AnimationKeyframeValue
viz.mojom.mojom.AnimationKeyframeValueSpec = { $: mojo.internal.Union(
    'viz.mojom.AnimationKeyframeValue', {
      'scalar': {
        'ordinal': 0,
        'type': mojo.internal.Float,
      }},
      'color': {
        'ordinal': 1,
        'type': skia.mojom.SkColorSpec,
      }},
      'size': {
        'ordinal': 2,
        'type': gfx.mojom.SizeFSpec,
      }},
      'rect': {
        'ordinal': 3,
        'type': gfx.mojom.RectSpec,
      }},
      'transform': {
        'ordinal': 4,
        'type': mojo.internal.Array(viz.mojom.TransformOperationSpec, false),
      }},
    })
};

// Struct: CubicBezierTimingFunction
viz.mojom.mojom.CubicBezierTimingFunctionSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.CubicBezierTimingFunction',
      packedSize: 40,
      fields: [
        { name: 'x1', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Double, nullable: false, minVersion: 0 },
        { name: 'y1', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Double, nullable: false, minVersion: 0 },
        { name: 'x2', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Double, nullable: false, minVersion: 0 },
        { name: 'y2', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Double, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Struct: StepsTimingFunction
viz.mojom.mojom.StepsTimingFunctionSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.StepsTimingFunction',
      packedSize: 16,
      fields: [
        { name: 'num_steps', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'step_position', packedOffset: 4, packedBitOffset: 0, type: viz.mojom.TimingStepPositionSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: LinearEasingPoint
viz.mojom.mojom.LinearEasingPointSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.LinearEasingPoint',
      packedSize: 24,
      fields: [
        { name: 'in', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Double, nullable: false, minVersion: 0 },
        { name: 'out', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Double, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: AxisAngle
viz.mojom.mojom.AxisAngleSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.AxisAngle',
      packedSize: 24,
      fields: [
        { name: 'axis', packedOffset: 0, packedBitOffset: 0, type: gfx.mojom.Vector3dFSpec, nullable: false, minVersion: 0 },
        { name: 'angle', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: AnimationKeyframe
viz.mojom.mojom.AnimationKeyframeSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.AnimationKeyframe',
      packedSize: 48,
      fields: [
        { name: 'value', packedOffset: 0, packedBitOffset: 0, type: viz.mojom.AnimationKeyframeValueSpec, nullable: false, minVersion: 0 },
        { name: 'start_time', packedOffset: 32, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: false, minVersion: 0 },
        { name: 'timing_function', packedOffset: 16, packedBitOffset: 0, type: viz.mojom.TimingFunctionSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 48}]
    }
  }
};

// Struct: AnimationKeyframeModel
viz.mojom.mojom.AnimationKeyframeModelSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.AnimationKeyframeModel',
      packedSize: 104,
      fields: [
        { name: 'id', packedOffset: 72, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'group_id', packedOffset: 76, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'target_property_type', packedOffset: 80, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'element_id', packedOffset: 16, packedBitOffset: 0, type: cc.mojom.ElementIdSpec, nullable: false, minVersion: 0 },
        { name: 'timing_function', packedOffset: 0, packedBitOffset: 0, type: viz.mojom.TimingFunctionSpec, nullable: false, minVersion: 0 },
        { name: 'keyframes', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Array(viz.mojom.AnimationKeyframeSpec, false), nullable: false, minVersion: 0 },
        { name: 'scaled_duration', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Double, nullable: false, minVersion: 0 },
        { name: 'direction', packedOffset: 84, packedBitOffset: 0, type: viz.mojom.AnimationDirectionSpec, nullable: false, minVersion: 0 },
        { name: 'fill_mode', packedOffset: 88, packedBitOffset: 0, type: viz.mojom.AnimationFillModeSpec, nullable: false, minVersion: 0 },
        { name: 'playback_rate', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Double, nullable: false, minVersion: 0 },
        { name: 'iterations', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Double, nullable: false, minVersion: 0 },
        { name: 'iteration_start', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.Double, nullable: false, minVersion: 0 },
        { name: 'time_offset', packedOffset: 64, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 104}]
    }
  }
};

// Struct: Animation
viz.mojom.mojom.AnimationSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.Animation',
      packedSize: 32,
      fields: [
        { name: 'id', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'element_id', packedOffset: 0, packedBitOffset: 0, type: cc.mojom.ElementIdSpec, nullable: false, minVersion: 0 },
        { name: 'keyframe_models', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(viz.mojom.AnimationKeyframeModelSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: AnimationTimeline
viz.mojom.mojom.AnimationTimelineSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.AnimationTimeline',
      packedSize: 32,
      fields: [
        { name: 'id', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'new_animations', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(viz.mojom.AnimationSpec, false), nullable: false, minVersion: 0 },
        { name: 'removed_animations', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Int32, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};
