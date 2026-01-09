// Auto-generated MojoJS binding
// Source: chromium_src/services/viz/public/mojom/compositing/animation.mojom
// Module: viz.mojom

'use strict';

// Module namespace
var viz = viz || {};
viz.mojom = viz.mojom || {};


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

// Struct: CubicBezierTimingFunction
viz.mojom.CubicBezierTimingFunctionSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.CubicBezierTimingFunction',
      packedSize: 40,
      fields: [
        { name: 'x1', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Double, nullable: false },
        { name: 'y1', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Double, nullable: false },
        { name: 'x2', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Double, nullable: false },
        { name: 'y2', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Double, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: StepsTimingFunction
viz.mojom.StepsTimingFunctionSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.StepsTimingFunction',
      packedSize: 24,
      fields: [
        { name: 'num_steps', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'step_position', packedOffset: 16, packedBitOffset: 0, type: viz.mojom.TimingStepPositionSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: LinearEasingPoint
viz.mojom.LinearEasingPointSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.LinearEasingPoint',
      packedSize: 24,
      fields: [
        { name: 'in', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Double, nullable: false },
        { name: 'out', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Double, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: AxisAngle
viz.mojom.AxisAngleSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.AxisAngle',
      packedSize: 24,
      fields: [
        { name: 'axis', packedOffset: 8, packedBitOffset: 0, type: gfx.mojom.Vector3dFSpec, nullable: false },
        { name: 'angle', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: AnimationKeyframe
viz.mojom.AnimationKeyframeSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.AnimationKeyframe',
      packedSize: 32,
      fields: [
        { name: 'value', packedOffset: 8, packedBitOffset: 0, type: viz.mojom.AnimationKeyframeValueSpec, nullable: false },
        { name: 'start_time', packedOffset: 16, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: false },
        { name: 'timing_function', packedOffset: 24, packedBitOffset: 0, type: viz.mojom.TimingFunctionSpec, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: AnimationKeyframeModel
viz.mojom.AnimationKeyframeModelSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.AnimationKeyframeModel',
      packedSize: 104,
      fields: [
        { name: 'id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'group_id', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'target_property_type', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'element_id', packedOffset: 24, packedBitOffset: 0, type: cc.mojom.ElementIdSpec, nullable: false },
        { name: 'timing_function', packedOffset: 32, packedBitOffset: 0, type: viz.mojom.TimingFunctionSpec, nullable: false },
        { name: 'keyframes', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'scaled_duration', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Double, nullable: false },
        { name: 'direction', packedOffset: 56, packedBitOffset: 0, type: viz.mojom.AnimationDirectionSpec, nullable: false },
        { name: 'fill_mode', packedOffset: 64, packedBitOffset: 0, type: viz.mojom.AnimationFillModeSpec, nullable: false },
        { name: 'playback_rate', packedOffset: 72, packedBitOffset: 0, type: mojo.internal.Double, nullable: false },
        { name: 'iterations', packedOffset: 80, packedBitOffset: 0, type: mojo.internal.Double, nullable: false },
        { name: 'iteration_start', packedOffset: 88, packedBitOffset: 0, type: mojo.internal.Double, nullable: false },
        { name: 'time_offset', packedOffset: 96, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: Animation
viz.mojom.AnimationSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.Animation',
      packedSize: 32,
      fields: [
        { name: 'id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'element_id', packedOffset: 16, packedBitOffset: 0, type: cc.mojom.ElementIdSpec, nullable: false },
        { name: 'keyframe_models', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: AnimationTimeline
viz.mojom.AnimationTimelineSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.AnimationTimeline',
      packedSize: 32,
      fields: [
        { name: 'id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'new_animations', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'removed_animations', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
