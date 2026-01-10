// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/crosh.mojom
// Module: arc.mojom

'use strict';

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};


// Enum: ArcShellCommand
arc.mojom.ArcShellCommand = {
  kTop: 0,
  kCpuinfo: 1,
  kMeminfo: 2,
};
arc.mojom.ArcShellCommandSpec = { $: mojo.internal.Enum() };

// Union: ArcShellExecutionResult
arc.mojom.ArcShellExecutionResultSpec = { $: mojo.internal.Union(
    'arc.mojom.ArcShellExecutionResult', {
      'stdout': {
        'ordinal': 0,
        'type': mojo.internal.String,
      }},
      'error': {
        'ordinal': 1,
        'type': mojo.internal.String,
      }},
    })
};

// Struct: ArcShellExecutionRequest
arc.mojom.ArcShellExecutionRequestSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.ArcShellExecutionRequest',
      packedSize: 16,
      fields: [
        { name: 'command', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.ArcShellCommandSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Interface: ArcShellExecutionInstance
arc.mojom.ArcShellExecutionInstance = {};

arc.mojom.ArcShellExecutionInstance_Exec_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.ArcShellExecutionInstance_Exec_Params',
      packedSize: 16,
      fields: [
        { name: 'request', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.ArcShellExecutionRequestSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

arc.mojom.ArcShellExecutionInstancePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.ArcShellExecutionInstanceRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.ArcShellExecutionInstance';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.ArcShellExecutionInstancePendingReceiver,
      handle);
    this.$ = new arc.mojom.ArcShellExecutionInstanceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.ArcShellExecutionInstanceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  exec(request) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      arc.mojom.ArcShellExecutionInstance_Exec_ParamsSpec,
      arc.mojom.ArcShellExecutionInstance_Exec_ResponseParamsSpec,
      [request]);
  }

};

arc.mojom.ArcShellExecutionInstance.getRemote = function() {
  let remote = new arc.mojom.ArcShellExecutionInstanceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.ArcShellExecutionInstance',
    'context');
  return remote.$;
};

// ParamsSpec for Exec
arc.mojom.ArcShellExecutionInstance_Exec_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.ArcShellExecutionInstance.Exec_Params',
      packedSize: 16,
      fields: [
        { name: 'request', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.ArcShellExecutionRequestSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

arc.mojom.ArcShellExecutionInstance_Exec_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.ArcShellExecutionInstance.Exec_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.ArcShellExecutionResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
arc.mojom.ArcShellExecutionInstancePtr = arc.mojom.ArcShellExecutionInstanceRemote;
arc.mojom.ArcShellExecutionInstanceRequest = arc.mojom.ArcShellExecutionInstancePendingReceiver;

