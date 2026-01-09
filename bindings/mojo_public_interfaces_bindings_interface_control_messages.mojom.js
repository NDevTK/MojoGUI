// Auto-generated MojoJS binding
// Source: chromium_src/mojo/public/interfaces/bindings/interface_control_messages.mojom
// Module: mojo.interface_control

'use strict';

// Module namespace
var mojo = mojo || {};
mojo.interface_control = mojo.interface_control || {};


// Struct: RunMessageParams
mojo.interface_control.RunMessageParamsSpec = {
  $: {
    structSpec: {
      name: 'mojo.interface_control.RunMessageParams',
      packedSize: 16,
      fields: [
        { name: 'input', packedOffset: 8, packedBitOffset: 0, type: mojo.interface_control.RunInputSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: RunResponseMessageParams
mojo.interface_control.RunResponseMessageParamsSpec = {
  $: {
    structSpec: {
      name: 'mojo.interface_control.RunResponseMessageParams',
      packedSize: 16,
      fields: [
        { name: 'output', packedOffset: 8, packedBitOffset: 0, type: mojo.interface_control.RunOutputSpec, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: QueryVersion
mojo.interface_control.QueryVersionSpec = {
  $: {
    structSpec: {
      name: 'mojo.interface_control.QueryVersion',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: QueryVersionResult
mojo.interface_control.QueryVersionResultSpec = {
  $: {
    structSpec: {
      name: 'mojo.interface_control.QueryVersionResult',
      packedSize: 16,
      fields: [
        { name: 'version', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: FlushForTesting
mojo.interface_control.FlushForTestingSpec = {
  $: {
    structSpec: {
      name: 'mojo.interface_control.FlushForTesting',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: RunOrClosePipeMessageParams
mojo.interface_control.RunOrClosePipeMessageParamsSpec = {
  $: {
    structSpec: {
      name: 'mojo.interface_control.RunOrClosePipeMessageParams',
      packedSize: 16,
      fields: [
        { name: 'input', packedOffset: 8, packedBitOffset: 0, type: mojo.interface_control.RunOrClosePipeInputSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: RequireVersion
mojo.interface_control.RequireVersionSpec = {
  $: {
    structSpec: {
      name: 'mojo.interface_control.RequireVersion',
      packedSize: 16,
      fields: [
        { name: 'version', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: EnableIdleTracking
mojo.interface_control.EnableIdleTrackingSpec = {
  $: {
    structSpec: {
      name: 'mojo.interface_control.EnableIdleTracking',
      packedSize: 16,
      fields: [
        { name: 'timeout_in_microseconds', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: MessageAck
mojo.interface_control.MessageAckSpec = {
  $: {
    structSpec: {
      name: 'mojo.interface_control.MessageAck',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: NotifyIdle
mojo.interface_control.NotifyIdleSpec = {
  $: {
    structSpec: {
      name: 'mojo.interface_control.NotifyIdle',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};
