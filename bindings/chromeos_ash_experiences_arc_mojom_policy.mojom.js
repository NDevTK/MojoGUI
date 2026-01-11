// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/policy.mojom
// Module: arc.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};
var mojo_base = mojo_base || {};

arc.mojom.InstallErrorReasonSpec = { $: mojo.internal.Enum() };
arc.mojom.CommandResultTypeSpec = { $: mojo.internal.Enum() };
arc.mojom.PolicyHost = {};
arc.mojom.PolicyHost.$interfaceName = 'arc.mojom.PolicyHost';
arc.mojom.PolicyHost_GetPolicies_ParamsSpec = { $: {} };
arc.mojom.PolicyHost_GetPolicies_ResponseParamsSpec = { $: {} };
arc.mojom.PolicyHost_ReportCompliance_ParamsSpec = { $: {} };
arc.mojom.PolicyHost_ReportCompliance_ResponseParamsSpec = { $: {} };
arc.mojom.PolicyHost_ReportDPCVersion_ParamsSpec = { $: {} };
arc.mojom.PolicyHost_ReportPlayStoreLocalPolicySet_ParamsSpec = { $: {} };
arc.mojom.PolicyInstance = {};
arc.mojom.PolicyInstance.$interfaceName = 'arc.mojom.PolicyInstance';
arc.mojom.PolicyInstance_Init_ParamsSpec = { $: {} };
arc.mojom.PolicyInstance_Init_ResponseParamsSpec = { $: {} };
arc.mojom.PolicyInstance_OnPolicyUpdated_ParamsSpec = { $: {} };
arc.mojom.PolicyInstance_OnCommandReceived_ParamsSpec = { $: {} };
arc.mojom.PolicyInstance_OnCommandReceived_ResponseParamsSpec = { $: {} };

// Enum: InstallErrorReason
arc.mojom.InstallErrorReason = {
  REASON_UNSPECIFIED: 0,
  TIMEOUT: 1,
  TRANSIENT_ERROR: 2,
  NOT_FOUND: 3,
  NOT_COMPATIBLE_WITH_DEVICE: 4,
  NOT_APPROVED: 5,
  PERMISSIONS_NOT_ACCEPTED: 6,
  NOT_AVAILABLE_IN_COUNTRY: 7,
  NO_LICENSES_REMAINING: 8,
  NOT_ENROLLED: 9,
  USER_INVALID: 10,
};

// Enum: CommandResultType
arc.mojom.CommandResultType = {
  IGNORED: 0,
  FAILURE: 1,
  SUCCESS: 2,
};

// Interface: PolicyHost
mojo.internal.Struct(
    arc.mojom.PolicyHost_GetPolicies_ParamsSpec, 'arc.mojom.PolicyHost_GetPolicies_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    arc.mojom.PolicyHost_GetPolicies_ResponseParamsSpec, 'arc.mojom.PolicyHost_GetPolicies_ResponseParams', [
      mojo.internal.StructField('policies', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.PolicyHost_ReportCompliance_ParamsSpec, 'arc.mojom.PolicyHost_ReportCompliance_Params', [
      mojo.internal.StructField('request', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.PolicyHost_ReportCompliance_ResponseParamsSpec, 'arc.mojom.PolicyHost_ReportCompliance_ResponseParams', [
      mojo.internal.StructField('response', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.PolicyHost_ReportDPCVersion_ParamsSpec, 'arc.mojom.PolicyHost_ReportDPCVersion_Params', [
      mojo.internal.StructField('version', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.PolicyHost_ReportPlayStoreLocalPolicySet_ParamsSpec, 'arc.mojom.PolicyHost_ReportPlayStoreLocalPolicySet_Params', [
      mojo.internal.StructField('time', 0, 0, mojo_base.mojom.TimeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('package_names', 8, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

arc.mojom.PolicyHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.PolicyHostRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.PolicyHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.PolicyHostPendingReceiver,
      handle);
    this.$ = new arc.mojom.PolicyHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  getPolicies() {
    return this.$.getPolicies();
  }
  reportCompliance(request) {
    return this.$.reportCompliance(request);
  }
  reportDPCVersion(version) {
    return this.$.reportDPCVersion(version);
  }
  reportPlayStoreLocalPolicySet(time, package_names) {
    return this.$.reportPlayStoreLocalPolicySet(time, package_names);
  }
};

arc.mojom.PolicyHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('PolicyHost', [
      { explicit: 0 },
      { explicit: 1 },
      { explicit: 7 },
      { explicit: 8 },
    ]);
  }

  getPolicies() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      arc.mojom.PolicyHost_GetPolicies_ParamsSpec,
      arc.mojom.PolicyHost_GetPolicies_ResponseParamsSpec,
      [],
      false);
  }

  reportCompliance(request) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      arc.mojom.PolicyHost_ReportCompliance_ParamsSpec,
      arc.mojom.PolicyHost_ReportCompliance_ResponseParamsSpec,
      [request],
      false);
  }

  reportDPCVersion(version) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      arc.mojom.PolicyHost_ReportDPCVersion_ParamsSpec,
      null,
      [version],
      false);
  }

  reportPlayStoreLocalPolicySet(time, package_names) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      arc.mojom.PolicyHost_ReportPlayStoreLocalPolicySet_ParamsSpec,
      null,
      [time, package_names],
      false);
  }

};

arc.mojom.PolicyHost.getRemote = function() {
  let remote = new arc.mojom.PolicyHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.PolicyHost',
    'context');
  return remote.$;
};

arc.mojom.PolicyHostReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('PolicyHost', [
      { explicit: 0 },
      { explicit: 1 },
      { explicit: 7 },
      { explicit: 8 },
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
             decoder.decodeStructInline(arc.mojom.PolicyHost_GetPolicies_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.PolicyHost_ReportCompliance_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.PolicyHost_ReportDPCVersion_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.PolicyHost_ReportPlayStoreLocalPolicySet_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.PolicyHost_GetPolicies_ParamsSpec.$.structSpec);
          const result = this.impl.getPolicies();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.PolicyHost_GetPolicies_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.PolicyHost_ReportCompliance_ParamsSpec.$.structSpec);
          const result = this.impl.reportCompliance(params.request);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.PolicyHost_ReportCompliance_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.PolicyHost_ReportDPCVersion_ParamsSpec.$.structSpec);
          const result = this.impl.reportDPCVersion(params.version);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.PolicyHost_ReportPlayStoreLocalPolicySet_ParamsSpec.$.structSpec);
          const result = this.impl.reportPlayStoreLocalPolicySet(params.time, params.package_names);
          break;
        }
      }
      } catch (err) {}
    });
  }
};

arc.mojom.PolicyHostReceiver = arc.mojom.PolicyHostReceiver;

arc.mojom.PolicyHostPtr = arc.mojom.PolicyHostRemote;
arc.mojom.PolicyHostRequest = arc.mojom.PolicyHostPendingReceiver;


// Interface: PolicyInstance
mojo.internal.Struct(
    arc.mojom.PolicyInstance_Init_ParamsSpec, 'arc.mojom.PolicyInstance_Init_Params', [
      mojo.internal.StructField('host_remote', 0, 0, mojo.internal.InterfaceProxy(arc.mojom.PolicyHostRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.PolicyInstance_Init_ResponseParamsSpec, 'arc.mojom.PolicyInstance_Init_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    arc.mojom.PolicyInstance_OnPolicyUpdated_ParamsSpec, 'arc.mojom.PolicyInstance_OnPolicyUpdated_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    arc.mojom.PolicyInstance_OnCommandReceived_ParamsSpec, 'arc.mojom.PolicyInstance_OnCommandReceived_Params', [
      mojo.internal.StructField('command', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.PolicyInstance_OnCommandReceived_ResponseParamsSpec, 'arc.mojom.PolicyInstance_OnCommandReceived_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, arc.mojom.CommandResultTypeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

arc.mojom.PolicyInstancePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.PolicyInstanceRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.PolicyInstance';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.PolicyInstancePendingReceiver,
      handle);
    this.$ = new arc.mojom.PolicyInstanceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  init(host_remote) {
    return this.$.init(host_remote);
  }
  onPolicyUpdated() {
    return this.$.onPolicyUpdated();
  }
  onCommandReceived(command) {
    return this.$.onCommandReceived(command);
  }
};

arc.mojom.PolicyInstanceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('PolicyInstance', [
      { explicit: 2 },
      { explicit: 1 },
      { explicit: 3 },
    ]);
  }

  init(host_remote) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      arc.mojom.PolicyInstance_Init_ParamsSpec,
      arc.mojom.PolicyInstance_Init_ResponseParamsSpec,
      [host_remote],
      false);
  }

  onPolicyUpdated() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      arc.mojom.PolicyInstance_OnPolicyUpdated_ParamsSpec,
      null,
      [],
      false);
  }

  onCommandReceived(command) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      arc.mojom.PolicyInstance_OnCommandReceived_ParamsSpec,
      arc.mojom.PolicyInstance_OnCommandReceived_ResponseParamsSpec,
      [command],
      false);
  }

};

arc.mojom.PolicyInstance.getRemote = function() {
  let remote = new arc.mojom.PolicyInstanceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.PolicyInstance',
    'context');
  return remote.$;
};

arc.mojom.PolicyInstanceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('PolicyInstance', [
      { explicit: 2 },
      { explicit: 1 },
      { explicit: 3 },
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
             decoder.decodeStructInline(arc.mojom.PolicyInstance_Init_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.PolicyInstance_OnPolicyUpdated_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.PolicyInstance_OnCommandReceived_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.PolicyInstance_Init_ParamsSpec.$.structSpec);
          const result = this.impl.init(params.host_remote);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.PolicyInstance_Init_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.PolicyInstance_OnPolicyUpdated_ParamsSpec.$.structSpec);
          const result = this.impl.onPolicyUpdated();
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.PolicyInstance_OnCommandReceived_ParamsSpec.$.structSpec);
          const result = this.impl.onCommandReceived(params.command);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.PolicyInstance_OnCommandReceived_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
      } catch (err) {}
    });
  }
};

arc.mojom.PolicyInstanceReceiver = arc.mojom.PolicyInstanceReceiver;

arc.mojom.PolicyInstancePtr = arc.mojom.PolicyInstanceRemote;
arc.mojom.PolicyInstanceRequest = arc.mojom.PolicyInstancePendingReceiver;

