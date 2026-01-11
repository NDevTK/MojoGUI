// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/crosh.mojom
// Module: arc.mojom

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
  exec(request) {
    return this.$.exec(request);
  }
};

arc.mojom.ArcShellExecutionInstanceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ArcShellExecutionInstance', [
      { explicit: 0 },
    ]);
  }

  exec(request) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
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
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ArcShellExecutionInstance', [
      { explicit: 0 },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.ArcShellExecutionInstance_Exec_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.ArcShellExecutionInstance_Exec_ParamsSpec.$.structSpec);
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
      } catch (err) {}
    }});
  }
};

arc.mojom.ArcShellExecutionInstanceReceiver = arc.mojom.ArcShellExecutionInstanceReceiver;

arc.mojom.ArcShellExecutionInstancePtr = arc.mojom.ArcShellExecutionInstanceRemote;
arc.mojom.ArcShellExecutionInstanceRequest = arc.mojom.ArcShellExecutionInstancePendingReceiver;

