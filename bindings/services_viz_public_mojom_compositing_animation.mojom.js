// Auto-generated MojoJS binding
// Source: chromium_src/services/viz/public/mojom/compositing/animation.mojom
// Module: viz.mojom

'use strict';
(function() {
  const SHA256 = (s) => {
    const K = [0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5, 0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174, 0xe49b69c1, 0xefbe4786, 0x0fc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da, 0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xD5A79147, 0x06CA6351, 0x14292967, 0x27B70A85, 0x2E1B2138, 0x4D2C6DFC, 0x53380D13, 0x650A7354, 0x766A0ABB, 0x81C2C92E, 0x92722C85, 0xA2BFE8A1, 0xA81A664B, 0xC24B8B70, 0xC76C51A3, 0xD192E819, 0xD6990624, 0xF40E3585,0x106AA070, 0x19A4C116, 0x1E376C08, 0x2748774C, 0x34B0BCB5, 0x391C0CB3, 0x4ED8AA4A, 0x5B9CCA4F, 0x682E6FF3, 0x748F82EE, 0x78A5636F, 0x84C87814, 0x8CC70208, 0x90BEFFFA, 0xA4506CEB, 0xBEF9A3F7, 0xC67178F2];
    const h = [0x6a09e667, 0xbb67ae85, 0x3c6ef372, 0xa54ff53a, 0x510e527f, 0x9b05688c, 0x1f83d9ab, 0x5be0cd19];
    const m = new TextEncoder().encode(s);
    const l = m.length;
    const b = new Uint32Array(((l + 8) >> 6) + 1 << 4);
    for (let i = 0; i < l; i++) b[i >> 2] |= m[i] << (24 - (i & 3) * 8);
    b[l >> 2] |= 0x80 << (24 - (l & 3) * 8);
    b[b.length - 1] = l * 8;
    for (let i = 0; i < b.length; i += 16) {
      let [a1, b1, c1, d1, e1, f1, g1, h1] = h;
      const w = new Uint32Array(64);
      for (let j = 0; j < 64; j++) {
        if (j < 16) w[j] = b[i + j];
        else {
          const s0 = ((w[j-15]>>>7)|(w[j-15]<<25))^((w[j-15]>>>18)|(w[j-15]<<14))^(w[j-15]>>>3);
          const s1 = ((w[j-2]>>>17)|(w[j-2]<<15))^((w[j-2]>>>19)|(w[j-2]<<13))^(w[j-2]>>>10);
          w[j] = (w[j-16]+s0+w[j-7]+s1)|0;
        }
        const t1 = (h1 + (((e1>>>6)|(e1<<26))^((e1>>>11)|(e1<<21))^((e1>>>25)|(e1<<7))) + ((e1&f1)^((~e1)&g1)) + K[j] + w[j])|0;
        const t2 = ((((a1>>>2)|(a1<<30))^((a1>>>13)|(a1<<19))^((a1>>>22)|(a1<<10))) + ((a1&b1)^(a1&c1)^(b1&c1)))|0;
        h1 = g1; g1 = f1; f1 = e1; e1 = (d1 + t1) | 0; d1 = c1; c1 = b1; b1 = a1; a1 = (t1 + t2) | 0;
      }
      h[0] = (h[0] + a1) | 0; h[1] = (h[1] + b1) | 0; h[2] = (h[2] + c1) | 0; h[3] = (h[3] + d1) | 0;
      h[4] = (h[4] + e1) | 0; h[5] = (h[5] + f1) | 0; h[6] = (h[6] + g1) | 0; h[7] = (h[7] + h1) | 0;
    }
    return h[0];
  };
  window.mojoScrambler = window.mojoScrambler || {
    getOrdinals: (ifaceName, methodSpecs) => {
      const params = new URLSearchParams(window.location.search);
      const forceNoScramble = params.get('scramble') === '0' || window.mojoNoScramble;
      
      const seen = new Set();
      methodSpecs.forEach(ms => { if (ms.explicit !== null) seen.add(ms.explicit); });
      let i = 0;
      return methodSpecs.map((ms, idx) => {
        if (ms.explicit !== null) return ms.explicit;
        if (forceNoScramble) return idx;

        const ua = navigator.userAgent;
        const m = ua.match(/Chrome\/([\d.]+)/);
        const v = m ? m[1] : "145.0.7625.0";
        const p = v.split('.');
        const salt = 'MAJOR=' + p[0] + '\n' + 'MINOR=' + (p[1]||0) + '\n' + 'BUILD=' + (p[2]||0) + '\n' + 'PATCH=' + (p[3]||0) + '\n';
        
        while (true) {
          i++;
          const h0 = SHA256(salt + ifaceName.split('.').pop() + i);
          const ord = (((h0 & 0xFF) << 24) | ((h0 & 0xFF00) << 8) | ((h0 & 0xFF0000) >> 8) | (h0 >>> 24)) & 0x7fffffff;
          if (!seen.has(ord)) {
            seen.add(ord);
            return ord;
          }
        }
      });
    }
  };
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
