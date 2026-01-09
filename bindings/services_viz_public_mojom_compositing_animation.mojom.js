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
      packedSize: 16,
      fields: [
        { name: 'y2', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
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
      packedSize: 16,
      fields: [
        { name: 'step_position', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
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
      packedSize: 16,
      fields: [
        { name: 'out', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
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
      packedSize: 16,
      fields: [
        { name: 'angle', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
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
      packedSize: 16,
      fields: [
        { name: 'timing_function', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
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
      packedSize: 16,
      fields: [
        { name: 'time_offset', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
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
      packedSize: 16,
      fields: [
        { name: 'keyframe_models', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
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
      packedSize: 16,
      fields: [
        { name: 'removed_animations', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
