// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/tokens/tokens.mojom
// Module: blink.mojom

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var mojo_base = mojo_base || {};

blink.mojom.FrameTokenSpec = { $: {} };
blink.mojom.WorkerTokenSpec = { $: {} };
blink.mojom.WorkletTokenSpec = { $: {} };
blink.mojom.ExecutionContextTokenSpec = { $: {} };
blink.mojom.WebGPUExecutionContextTokenSpec = { $: {} };
blink.mojom.DocumentTokenSpec = { $: {} };
blink.mojom.LocalFrameTokenSpec = { $: {} };
blink.mojom.RemoteFrameTokenSpec = { $: {} };
blink.mojom.DedicatedWorkerTokenSpec = { $: {} };
blink.mojom.ServiceWorkerTokenSpec = { $: {} };
blink.mojom.SharedWorkerTokenSpec = { $: {} };
blink.mojom.AnimationWorkletTokenSpec = { $: {} };
blink.mojom.AudioWorkletTokenSpec = { $: {} };
blink.mojom.LayoutWorkletTokenSpec = { $: {} };
blink.mojom.PaintWorkletTokenSpec = { $: {} };
blink.mojom.SharedStorageWorkletTokenSpec = { $: {} };
blink.mojom.ShadowRealmTokenSpec = { $: {} };
blink.mojom.AttributionSrcTokenSpec = { $: {} };
blink.mojom.SameDocNavigationScreenshotDestinationTokenSpec = { $: {} };
blink.mojom.V8ContextTokenSpec = { $: {} };
blink.mojom.ViewTransitionTokenSpec = { $: {} };
blink.mojom.WebNNContextTokenSpec = { $: {} };
blink.mojom.WebNNPendingConstantTokenSpec = { $: {} };
blink.mojom.WebNNTensorTokenSpec = { $: {} };

// Union: FrameToken
mojo.internal.Union(
    blink.mojom.FrameTokenSpec, 'blink.mojom.FrameToken', {
      'local_frame_token': {
        'ordinal': 0,
        'type': blink.mojom.LocalFrameTokenSpec.$,
        'nullable': false,
      },
      'remote_frame_token': {
        'ordinal': 1,
        'type': blink.mojom.RemoteFrameTokenSpec.$,
        'nullable': false,
      },
    });

// Union: WorkerToken
mojo.internal.Union(
    blink.mojom.WorkerTokenSpec, 'blink.mojom.WorkerToken', {
      'dedicated_worker_token': {
        'ordinal': 0,
        'type': blink.mojom.DedicatedWorkerTokenSpec.$,
        'nullable': false,
      },
      'service_worker_token': {
        'ordinal': 1,
        'type': blink.mojom.ServiceWorkerTokenSpec.$,
        'nullable': false,
      },
      'shared_worker_token': {
        'ordinal': 2,
        'type': blink.mojom.SharedWorkerTokenSpec.$,
        'nullable': false,
      },
    });

// Union: WorkletToken
mojo.internal.Union(
    blink.mojom.WorkletTokenSpec, 'blink.mojom.WorkletToken', {
      'animation_worklet_token': {
        'ordinal': 0,
        'type': blink.mojom.AnimationWorkletTokenSpec.$,
        'nullable': false,
      },
      'audio_worklet_token': {
        'ordinal': 1,
        'type': blink.mojom.AudioWorkletTokenSpec.$,
        'nullable': false,
      },
      'layout_worklet_token': {
        'ordinal': 2,
        'type': blink.mojom.LayoutWorkletTokenSpec.$,
        'nullable': false,
      },
      'paint_worklet_token': {
        'ordinal': 3,
        'type': blink.mojom.PaintWorkletTokenSpec.$,
        'nullable': false,
      },
      'shared_storage_worklet_token': {
        'ordinal': 4,
        'type': blink.mojom.SharedStorageWorkletTokenSpec.$,
        'nullable': false,
      },
    });

// Union: ExecutionContextToken
mojo.internal.Union(
    blink.mojom.ExecutionContextTokenSpec, 'blink.mojom.ExecutionContextToken', {
      'local_frame_token': {
        'ordinal': 0,
        'type': blink.mojom.LocalFrameTokenSpec.$,
        'nullable': false,
      },
      'dedicated_worker_token': {
        'ordinal': 1,
        'type': blink.mojom.DedicatedWorkerTokenSpec.$,
        'nullable': false,
      },
      'service_worker_token': {
        'ordinal': 2,
        'type': blink.mojom.ServiceWorkerTokenSpec.$,
        'nullable': false,
      },
      'shared_worker_token': {
        'ordinal': 3,
        'type': blink.mojom.SharedWorkerTokenSpec.$,
        'nullable': false,
      },
      'animation_worklet_token': {
        'ordinal': 4,
        'type': blink.mojom.AnimationWorkletTokenSpec.$,
        'nullable': false,
      },
      'audio_worklet_token': {
        'ordinal': 5,
        'type': blink.mojom.AudioWorkletTokenSpec.$,
        'nullable': false,
      },
      'layout_worklet_token': {
        'ordinal': 6,
        'type': blink.mojom.LayoutWorkletTokenSpec.$,
        'nullable': false,
      },
      'paint_worklet_token': {
        'ordinal': 7,
        'type': blink.mojom.PaintWorkletTokenSpec.$,
        'nullable': false,
      },
      'shared_storage_worklet_token': {
        'ordinal': 8,
        'type': blink.mojom.SharedStorageWorkletTokenSpec.$,
        'nullable': false,
      },
      'shadow_realm_token': {
        'ordinal': 9,
        'type': blink.mojom.ShadowRealmTokenSpec.$,
        'nullable': false,
      },
    });

// Union: WebGPUExecutionContextToken
mojo.internal.Union(
    blink.mojom.WebGPUExecutionContextTokenSpec, 'blink.mojom.WebGPUExecutionContextToken', {
      'document_token': {
        'ordinal': 0,
        'type': blink.mojom.DocumentTokenSpec.$,
        'nullable': false,
      },
      'dedicated_worker_token': {
        'ordinal': 1,
        'type': blink.mojom.DedicatedWorkerTokenSpec.$,
        'nullable': false,
      },
      'shared_worker_token': {
        'ordinal': 2,
        'type': blink.mojom.SharedWorkerTokenSpec.$,
        'nullable': false,
      },
      'service_worker_token': {
        'ordinal': 3,
        'type': blink.mojom.ServiceWorkerTokenSpec.$,
        'nullable': false,
      },
    });

// Struct: DocumentToken
mojo.internal.Struct(
    blink.mojom.DocumentTokenSpec, 'blink.mojom.DocumentToken', [
      mojo.internal.StructField('value', 0, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: LocalFrameToken
mojo.internal.Struct(
    blink.mojom.LocalFrameTokenSpec, 'blink.mojom.LocalFrameToken', [
      mojo.internal.StructField('value', 0, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: RemoteFrameToken
mojo.internal.Struct(
    blink.mojom.RemoteFrameTokenSpec, 'blink.mojom.RemoteFrameToken', [
      mojo.internal.StructField('value', 0, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: DedicatedWorkerToken
mojo.internal.Struct(
    blink.mojom.DedicatedWorkerTokenSpec, 'blink.mojom.DedicatedWorkerToken', [
      mojo.internal.StructField('value', 0, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: ServiceWorkerToken
mojo.internal.Struct(
    blink.mojom.ServiceWorkerTokenSpec, 'blink.mojom.ServiceWorkerToken', [
      mojo.internal.StructField('value', 0, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: SharedWorkerToken
mojo.internal.Struct(
    blink.mojom.SharedWorkerTokenSpec, 'blink.mojom.SharedWorkerToken', [
      mojo.internal.StructField('value', 0, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: AnimationWorkletToken
mojo.internal.Struct(
    blink.mojom.AnimationWorkletTokenSpec, 'blink.mojom.AnimationWorkletToken', [
      mojo.internal.StructField('value', 0, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: AudioWorkletToken
mojo.internal.Struct(
    blink.mojom.AudioWorkletTokenSpec, 'blink.mojom.AudioWorkletToken', [
      mojo.internal.StructField('value', 0, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: LayoutWorkletToken
mojo.internal.Struct(
    blink.mojom.LayoutWorkletTokenSpec, 'blink.mojom.LayoutWorkletToken', [
      mojo.internal.StructField('value', 0, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: PaintWorkletToken
mojo.internal.Struct(
    blink.mojom.PaintWorkletTokenSpec, 'blink.mojom.PaintWorkletToken', [
      mojo.internal.StructField('value', 0, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: SharedStorageWorkletToken
mojo.internal.Struct(
    blink.mojom.SharedStorageWorkletTokenSpec, 'blink.mojom.SharedStorageWorkletToken', [
      mojo.internal.StructField('value', 0, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: ShadowRealmToken
mojo.internal.Struct(
    blink.mojom.ShadowRealmTokenSpec, 'blink.mojom.ShadowRealmToken', [
      mojo.internal.StructField('value', 0, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: AttributionSrcToken
mojo.internal.Struct(
    blink.mojom.AttributionSrcTokenSpec, 'blink.mojom.AttributionSrcToken', [
      mojo.internal.StructField('value', 0, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: SameDocNavigationScreenshotDestinationToken
mojo.internal.Struct(
    blink.mojom.SameDocNavigationScreenshotDestinationTokenSpec, 'blink.mojom.SameDocNavigationScreenshotDestinationToken', [
      mojo.internal.StructField('value', 0, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: V8ContextToken
mojo.internal.Struct(
    blink.mojom.V8ContextTokenSpec, 'blink.mojom.V8ContextToken', [
      mojo.internal.StructField('value', 0, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: ViewTransitionToken
mojo.internal.Struct(
    blink.mojom.ViewTransitionTokenSpec, 'blink.mojom.ViewTransitionToken', [
      mojo.internal.StructField('value', 0, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: WebNNContextToken
mojo.internal.Struct(
    blink.mojom.WebNNContextTokenSpec, 'blink.mojom.WebNNContextToken', [
      mojo.internal.StructField('value', 0, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: WebNNPendingConstantToken
mojo.internal.Struct(
    blink.mojom.WebNNPendingConstantTokenSpec, 'blink.mojom.WebNNPendingConstantToken', [
      mojo.internal.StructField('value', 0, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: WebNNTensorToken
mojo.internal.Struct(
    blink.mojom.WebNNTensorTokenSpec, 'blink.mojom.WebNNTensorToken', [
      mojo.internal.StructField('value', 0, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);
