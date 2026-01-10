// Auto-generated MojoJS binding
// Source: chromium_src/mojo/public/interfaces/bindings/interface_control_messages.mojom
// Module: mojo.interface_control

'use strict';

// Module namespace
var mojo = mojo || {};
mojo.interface_control = mojo.interface_control || {};


mojo.interface_control.interface_control.kRunMessageId = 0xFFFFFFFF;

mojo.interface_control.interface_control.kRunOrClosePipeMessageId = 0xFFFFFFFE;

// Union: RunInput
mojo.interface_control.interface_control.RunInputSpec = { $: mojo.internal.Union(
    'mojo.interface_control.RunInput', {
      'query_version': {
        'ordinal': 0,
        'type': mojo.interface_control.QueryVersionSpec,
      }},
      'flush_for_testing': {
        'ordinal': 1,
        'type': mojo.interface_control.FlushForTestingSpec,
      }},
    })
};

// Union: RunOutput
mojo.interface_control.interface_control.RunOutputSpec = { $: mojo.internal.Union(
    'mojo.interface_control.RunOutput', {
      'query_version_result': {
        'ordinal': 0,
        'type': mojo.interface_control.QueryVersionResultSpec,
      }},
    })
};

// Union: RunOrClosePipeInput
mojo.interface_control.interface_control.RunOrClosePipeInputSpec = { $: mojo.internal.Union(
    'mojo.interface_control.RunOrClosePipeInput', {
      'require_version': {
        'ordinal': 0,
        'type': mojo.interface_control.RequireVersionSpec,
      }},
      'enable_idle_tracking': {
        'ordinal': 1,
        'type': mojo.interface_control.EnableIdleTrackingSpec,
      }},
      'message_ack': {
        'ordinal': 2,
        'type': mojo.interface_control.MessageAckSpec,
      }},
      'notify_idle': {
        'ordinal': 3,
        'type': mojo.interface_control.NotifyIdleSpec,
      }},
    })
};

// Struct: RunMessageParams
mojo.interface_control.interface_control.RunMessageParamsSpec = {
  $: {
    structSpec: {
      name: 'mojo.interface_control.RunMessageParams',
      packedSize: 24,
      fields: [
        { name: 'input', packedOffset: 0, packedBitOffset: 0, type: mojo.interface_control.RunInputSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: RunResponseMessageParams
mojo.interface_control.interface_control.RunResponseMessageParamsSpec = {
  $: {
    structSpec: {
      name: 'mojo.interface_control.RunResponseMessageParams',
      packedSize: 24,
      fields: [
        { name: 'output', packedOffset: 0, packedBitOffset: 0, type: mojo.interface_control.RunOutputSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: QueryVersion
mojo.interface_control.interface_control.QueryVersionSpec = {
  $: {
    structSpec: {
      name: 'mojo.interface_control.QueryVersion',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Struct: QueryVersionResult
mojo.interface_control.interface_control.QueryVersionResultSpec = {
  $: {
    structSpec: {
      name: 'mojo.interface_control.QueryVersionResult',
      packedSize: 16,
      fields: [
        { name: 'version', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: FlushForTesting
mojo.interface_control.interface_control.FlushForTestingSpec = {
  $: {
    structSpec: {
      name: 'mojo.interface_control.FlushForTesting',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Struct: RunOrClosePipeMessageParams
mojo.interface_control.interface_control.RunOrClosePipeMessageParamsSpec = {
  $: {
    structSpec: {
      name: 'mojo.interface_control.RunOrClosePipeMessageParams',
      packedSize: 24,
      fields: [
        { name: 'input', packedOffset: 0, packedBitOffset: 0, type: mojo.interface_control.RunOrClosePipeInputSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: RequireVersion
mojo.interface_control.interface_control.RequireVersionSpec = {
  $: {
    structSpec: {
      name: 'mojo.interface_control.RequireVersion',
      packedSize: 16,
      fields: [
        { name: 'version', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: EnableIdleTracking
mojo.interface_control.interface_control.EnableIdleTrackingSpec = {
  $: {
    structSpec: {
      name: 'mojo.interface_control.EnableIdleTracking',
      packedSize: 16,
      fields: [
        { name: 'timeout_in_microseconds', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: MessageAck
mojo.interface_control.interface_control.MessageAckSpec = {
  $: {
    structSpec: {
      name: 'mojo.interface_control.MessageAck',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Struct: NotifyIdle
mojo.interface_control.interface_control.NotifyIdleSpec = {
  $: {
    structSpec: {
      name: 'mojo.interface_control.NotifyIdle',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};
