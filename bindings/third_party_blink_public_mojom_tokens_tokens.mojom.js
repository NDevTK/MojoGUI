// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/tokens/tokens.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Union: FrameToken
blink.mojom.mojom.FrameTokenSpec = { $: mojo.internal.Union(
    'blink.mojom.FrameToken', {
      'local_frame_token': {
        'ordinal': 0,
        'type': blink.mojom.LocalFrameTokenSpec,
      }},
      'remote_frame_token': {
        'ordinal': 1,
        'type': blink.mojom.RemoteFrameTokenSpec,
      }},
    })
};

// Union: WorkerToken
blink.mojom.mojom.WorkerTokenSpec = { $: mojo.internal.Union(
    'blink.mojom.WorkerToken', {
      'dedicated_worker_token': {
        'ordinal': 0,
        'type': blink.mojom.DedicatedWorkerTokenSpec,
      }},
      'service_worker_token': {
        'ordinal': 1,
        'type': blink.mojom.ServiceWorkerTokenSpec,
      }},
      'shared_worker_token': {
        'ordinal': 2,
        'type': blink.mojom.SharedWorkerTokenSpec,
      }},
    })
};

// Union: WorkletToken
blink.mojom.mojom.WorkletTokenSpec = { $: mojo.internal.Union(
    'blink.mojom.WorkletToken', {
      'animation_worklet_token': {
        'ordinal': 0,
        'type': blink.mojom.AnimationWorkletTokenSpec,
      }},
      'audio_worklet_token': {
        'ordinal': 1,
        'type': blink.mojom.AudioWorkletTokenSpec,
      }},
      'layout_worklet_token': {
        'ordinal': 2,
        'type': blink.mojom.LayoutWorkletTokenSpec,
      }},
      'paint_worklet_token': {
        'ordinal': 3,
        'type': blink.mojom.PaintWorkletTokenSpec,
      }},
      'shared_storage_worklet_token': {
        'ordinal': 4,
        'type': blink.mojom.SharedStorageWorkletTokenSpec,
      }},
    })
};

// Union: ExecutionContextToken
blink.mojom.mojom.ExecutionContextTokenSpec = { $: mojo.internal.Union(
    'blink.mojom.ExecutionContextToken', {
      'local_frame_token': {
        'ordinal': 0,
        'type': blink.mojom.LocalFrameTokenSpec,
      }},
      'dedicated_worker_token': {
        'ordinal': 1,
        'type': blink.mojom.DedicatedWorkerTokenSpec,
      }},
      'service_worker_token': {
        'ordinal': 2,
        'type': blink.mojom.ServiceWorkerTokenSpec,
      }},
      'shared_worker_token': {
        'ordinal': 3,
        'type': blink.mojom.SharedWorkerTokenSpec,
      }},
      'animation_worklet_token': {
        'ordinal': 4,
        'type': blink.mojom.AnimationWorkletTokenSpec,
      }},
      'audio_worklet_token': {
        'ordinal': 5,
        'type': blink.mojom.AudioWorkletTokenSpec,
      }},
      'layout_worklet_token': {
        'ordinal': 6,
        'type': blink.mojom.LayoutWorkletTokenSpec,
      }},
      'paint_worklet_token': {
        'ordinal': 7,
        'type': blink.mojom.PaintWorkletTokenSpec,
      }},
      'shared_storage_worklet_token': {
        'ordinal': 8,
        'type': blink.mojom.SharedStorageWorkletTokenSpec,
      }},
      'shadow_realm_token': {
        'ordinal': 9,
        'type': blink.mojom.ShadowRealmTokenSpec,
      }},
    })
};

// Union: WebGPUExecutionContextToken
blink.mojom.mojom.WebGPUExecutionContextTokenSpec = { $: mojo.internal.Union(
    'blink.mojom.WebGPUExecutionContextToken', {
      'document_token': {
        'ordinal': 0,
        'type': blink.mojom.DocumentTokenSpec,
      }},
      'dedicated_worker_token': {
        'ordinal': 1,
        'type': blink.mojom.DedicatedWorkerTokenSpec,
      }},
      'shared_worker_token': {
        'ordinal': 2,
        'type': blink.mojom.SharedWorkerTokenSpec,
      }},
      'service_worker_token': {
        'ordinal': 3,
        'type': blink.mojom.ServiceWorkerTokenSpec,
      }},
    })
};

// Struct: DocumentToken
blink.mojom.mojom.DocumentTokenSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.DocumentToken',
      packedSize: 16,
      fields: [
        { name: 'value', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: LocalFrameToken
blink.mojom.mojom.LocalFrameTokenSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.LocalFrameToken',
      packedSize: 16,
      fields: [
        { name: 'value', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: RemoteFrameToken
blink.mojom.mojom.RemoteFrameTokenSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.RemoteFrameToken',
      packedSize: 16,
      fields: [
        { name: 'value', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: DedicatedWorkerToken
blink.mojom.mojom.DedicatedWorkerTokenSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.DedicatedWorkerToken',
      packedSize: 16,
      fields: [
        { name: 'value', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: ServiceWorkerToken
blink.mojom.mojom.ServiceWorkerTokenSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ServiceWorkerToken',
      packedSize: 16,
      fields: [
        { name: 'value', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: SharedWorkerToken
blink.mojom.mojom.SharedWorkerTokenSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.SharedWorkerToken',
      packedSize: 16,
      fields: [
        { name: 'value', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: AnimationWorkletToken
blink.mojom.mojom.AnimationWorkletTokenSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AnimationWorkletToken',
      packedSize: 16,
      fields: [
        { name: 'value', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: AudioWorkletToken
blink.mojom.mojom.AudioWorkletTokenSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AudioWorkletToken',
      packedSize: 16,
      fields: [
        { name: 'value', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: LayoutWorkletToken
blink.mojom.mojom.LayoutWorkletTokenSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.LayoutWorkletToken',
      packedSize: 16,
      fields: [
        { name: 'value', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: PaintWorkletToken
blink.mojom.mojom.PaintWorkletTokenSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.PaintWorkletToken',
      packedSize: 16,
      fields: [
        { name: 'value', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: SharedStorageWorkletToken
blink.mojom.mojom.SharedStorageWorkletTokenSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.SharedStorageWorkletToken',
      packedSize: 16,
      fields: [
        { name: 'value', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: ShadowRealmToken
blink.mojom.mojom.ShadowRealmTokenSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ShadowRealmToken',
      packedSize: 16,
      fields: [
        { name: 'value', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: AttributionSrcToken
blink.mojom.mojom.AttributionSrcTokenSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AttributionSrcToken',
      packedSize: 16,
      fields: [
        { name: 'value', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: SameDocNavigationScreenshotDestinationToken
blink.mojom.mojom.SameDocNavigationScreenshotDestinationTokenSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.SameDocNavigationScreenshotDestinationToken',
      packedSize: 16,
      fields: [
        { name: 'value', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: V8ContextToken
blink.mojom.mojom.V8ContextTokenSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.V8ContextToken',
      packedSize: 16,
      fields: [
        { name: 'value', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: ViewTransitionToken
blink.mojom.mojom.ViewTransitionTokenSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ViewTransitionToken',
      packedSize: 16,
      fields: [
        { name: 'value', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: WebNNContextToken
blink.mojom.mojom.WebNNContextTokenSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.WebNNContextToken',
      packedSize: 16,
      fields: [
        { name: 'value', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: WebNNPendingConstantToken
blink.mojom.mojom.WebNNPendingConstantTokenSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.WebNNPendingConstantToken',
      packedSize: 16,
      fields: [
        { name: 'value', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: WebNNTensorToken
blink.mojom.mojom.WebNNTensorTokenSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.WebNNTensorToken',
      packedSize: 16,
      fields: [
        { name: 'value', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};
