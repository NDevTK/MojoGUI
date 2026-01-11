// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/compatibility_mode.mojom
// Module: arc.mojom

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};

arc.mojom.ArcResizeLockStateSpec = { $: mojo.internal.Enum() };
arc.mojom.CompatibilityModeInstance = {};
arc.mojom.CompatibilityModeInstance.$interfaceName = 'arc.mojom.CompatibilityModeInstance';
arc.mojom.CompatibilityModeInstance_SetResizeLockState_ParamsSpec = { $: {} };
arc.mojom.CompatibilityModeInstance_IsOptimizedForCrosApp_ParamsSpec = { $: {} };
arc.mojom.CompatibilityModeInstance_IsOptimizedForCrosApp_ResponseParamsSpec = { $: {} };

// Enum: ArcResizeLockState
arc.mojom.ArcResizeLockState = {
  UNDEFINED: 0,
  READY: 1,
  ON: 2,
  OFF: 3,
  FULLY_LOCKED: 4,
};

// Interface: CompatibilityModeInstance
mojo.internal.Struct(
    arc.mojom.CompatibilityModeInstance_SetResizeLockState_ParamsSpec, 'arc.mojom.CompatibilityModeInstance_SetResizeLockState_Params', [
      mojo.internal.StructField('package_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('state', 8, 0, arc.mojom.ArcResizeLockStateSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    arc.mojom.CompatibilityModeInstance_IsOptimizedForCrosApp_ParamsSpec, 'arc.mojom.CompatibilityModeInstance_IsOptimizedForCrosApp_Params', [
      mojo.internal.StructField('package_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.CompatibilityModeInstance_IsOptimizedForCrosApp_ResponseParamsSpec, 'arc.mojom.CompatibilityModeInstance_IsOptimizedForCrosApp_ResponseParams', [
      mojo.internal.StructField('is_o4c_app', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

arc.mojom.CompatibilityModeInstancePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.CompatibilityModeInstanceRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.CompatibilityModeInstance';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.CompatibilityModeInstancePendingReceiver,
      handle);
    this.$ = new arc.mojom.CompatibilityModeInstanceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  setResizeLockState(package_name, state) {
    return this.$.setResizeLockState(package_name, state);
  }
  isOptimizedForCrosApp(package_name) {
    return this.$.isOptimizedForCrosApp(package_name);
  }
};

arc.mojom.CompatibilityModeInstanceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('CompatibilityModeInstance', [
      { explicit: 0 },
      { explicit: 2 },
    ]);
  }

  setResizeLockState(package_name, state) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      arc.mojom.CompatibilityModeInstance_SetResizeLockState_ParamsSpec,
      null,
      [package_name, state],
      false);
  }

  isOptimizedForCrosApp(package_name) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      arc.mojom.CompatibilityModeInstance_IsOptimizedForCrosApp_ParamsSpec,
      arc.mojom.CompatibilityModeInstance_IsOptimizedForCrosApp_ResponseParamsSpec,
      [package_name],
      false);
  }

};

arc.mojom.CompatibilityModeInstance.getRemote = function() {
  let remote = new arc.mojom.CompatibilityModeInstanceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.CompatibilityModeInstance',
    'context');
  return remote.$;
};

arc.mojom.CompatibilityModeInstanceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('CompatibilityModeInstance', [
      { explicit: 0 },
      { explicit: 2 },
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
             decoder.decodeStructInline(arc.mojom.CompatibilityModeInstance_SetResizeLockState_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.CompatibilityModeInstance_IsOptimizedForCrosApp_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.CompatibilityModeInstance_SetResizeLockState_ParamsSpec.$.structSpec);
          const result = this.impl.setResizeLockState(params.package_name, params.state);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.CompatibilityModeInstance_IsOptimizedForCrosApp_ParamsSpec.$.structSpec);
          const result = this.impl.isOptimizedForCrosApp(params.package_name);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.CompatibilityModeInstance_IsOptimizedForCrosApp_ResponseParamsSpec);
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

arc.mojom.CompatibilityModeInstanceReceiver = arc.mojom.CompatibilityModeInstanceReceiver;

arc.mojom.CompatibilityModeInstancePtr = arc.mojom.CompatibilityModeInstanceRemote;
arc.mojom.CompatibilityModeInstanceRequest = arc.mojom.CompatibilityModeInstancePendingReceiver;

