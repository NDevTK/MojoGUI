// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/crosh.mojom
// Module: arc.mojom

'use strict';

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};

arc.mojom.ArcShellCommandSpec = { $: mojo.internal.Enum() };
arc.mojom.ArcShellExecutionResultSpec = { $: {} };
arc.mojom.ArcShellExecutionRequestSpec = { $: {} };
arc.mojom.ArcShellExecutionInstance = {};
arc.mojom.ArcShellExecutionInstance.$interfaceName = 'arc.mojom.ArcShellExecutionInstance';
arc.mojom.ArcShellExecutionInstance_Exec_ParamsSpec = { $: {} };
arc.mojom.ArcShellExecutionInstance_Exec_ResponseParamsSpec = { $: {} };

// Enum: ArcShellCommand
arc.mojom.ArcShellCommand = {
  unknown: -1,
  kTop: 0,
  kCpuinfo: 1,
  kMeminfo: 2,
};

// Union: ArcShellExecutionResult
mojo.internal.Union(
    arc.mojom.ArcShellExecutionResultSpec, 'arc.mojom.ArcShellExecutionResult', {
      'stdout': {
        'ordinal': 0,
        'type': mojo.internal.String,
        'nullable': false,
      },
      'error': {
        'ordinal': 1,
        'type': mojo.internal.String,
        'nullable': false,
      },
    });

// Struct: ArcShellExecutionRequest
mojo.internal.Struct(
    arc.mojom.ArcShellExecutionRequestSpec, 'arc.mojom.ArcShellExecutionRequest', [
      mojo.internal.StructField('command', 0, 0, arc.mojom.ArcShellCommandSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Interface: ArcShellExecutionInstance
mojo.internal.Struct(
    arc.mojom.ArcShellExecutionInstance_Exec_ParamsSpec, 'arc.mojom.ArcShellExecutionInstance_Exec_Params', [
      mojo.internal.StructField('request', 0, 0, arc.mojom.ArcShellExecutionRequestSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.ArcShellExecutionInstance_Exec_ResponseParamsSpec, 'arc.mojom.ArcShellExecutionInstance_Exec_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, arc.mojom.ArcShellExecutionResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

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
      [request],
      false);
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

arc.mojom.ArcShellExecutionInstanceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(handle);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = arc.mojom.ArcShellExecutionInstance_Exec_ParamsSpec.$.decode(message.payload);
          const result = this.impl.exec(params.request);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.ArcShellExecutionInstance_Exec_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
    });
  }
};

arc.mojom.ArcShellExecutionInstanceReceiver = arc.mojom.ArcShellExecutionInstanceReceiver;

arc.mojom.ArcShellExecutionInstancePtr = arc.mojom.ArcShellExecutionInstanceRemote;
arc.mojom.ArcShellExecutionInstanceRequest = arc.mojom.ArcShellExecutionInstancePendingReceiver;

