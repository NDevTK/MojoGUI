// Auto-generated MojoJS binding
// Source: chromium_src/components/mirroring/mojom/mirroring_service.mojom
// Module: mirroring.mojom

// Module namespace
var mirroring = mirroring || {};
mirroring.mojom = mirroring.mojom || {};
var sandbox = sandbox || {};
var gfx = gfx || {};
var mojo_base = mojo_base || {};

mirroring.mojom.MirroringService = {};
mirroring.mojom.MirroringService.$interfaceName = 'mirroring.mojom.MirroringService';
mirroring.mojom.MirroringService_Start_ParamsSpec = { $: {} };
mirroring.mojom.MirroringService_SwitchMirroringSourceTab_ParamsSpec = { $: {} };
mirroring.mojom.MirroringService_GetMirroringStats_ParamsSpec = { $: {} };
mirroring.mojom.MirroringService_GetMirroringStats_ResponseParamsSpec = { $: {} };

mirroring.mojom.kMirroringSandbox = sandbox.mojom.Sandbox.kMirroring;

mirroring.mojom.kMirroringSandbox = sandbox.mojom.Sandbox.kHardwareVideoEncoding;

mirroring.mojom.kMirroringSandbox = sandbox.mojom.Sandbox.kService;

// Interface: MirroringService
mojo.internal.Struct(
    mirroring.mojom.MirroringService_Start_ParamsSpec, 'mirroring.mojom.MirroringService_Start_Params', [
      mojo.internal.StructField('params', 0, 0, mirroring.mojom.SessionParametersSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('max_resolution', 8, 0, gfx.mojom.SizeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('observer', 16, 0, mojo.internal.InterfaceProxy(mirroring.mojom.SessionObserverRemote), null, false, 0, undefined),
      mojo.internal.StructField('resource_provider', 24, 0, mojo.internal.InterfaceProxy(mirroring.mojom.ResourceProviderRemote), null, false, 0, undefined),
      mojo.internal.StructField('outbound_channel', 32, 0, mojo.internal.InterfaceProxy(mirroring.mojom.CastMessageChannelRemote), null, false, 0, undefined),
      mojo.internal.StructField('inbound_channel', 40, 0, mojo.internal.InterfaceRequest(mirroring.mojom.CastMessageChannelRemote), null, false, 0, undefined),
    ],
    [[0, 56]]);

mojo.internal.Struct(
    mirroring.mojom.MirroringService_SwitchMirroringSourceTab_ParamsSpec, 'mirroring.mojom.MirroringService_SwitchMirroringSourceTab_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mirroring.mojom.MirroringService_GetMirroringStats_ParamsSpec, 'mirroring.mojom.MirroringService_GetMirroringStats_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mirroring.mojom.MirroringService_GetMirroringStats_ResponseParamsSpec, 'mirroring.mojom.MirroringService_GetMirroringStats_ResponseParams', [
      mojo.internal.StructField('json_stats', 0, 0, mojo_base.mojom.ValueSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mirroring.mojom.MirroringServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mirroring.mojom.MirroringServiceRemote = class {
  static get $interfaceName() {
    return 'mirroring.mojom.MirroringService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mirroring.mojom.MirroringServicePendingReceiver,
      handle);
    this.$ = new mirroring.mojom.MirroringServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  start(params, max_resolution, observer, resource_provider, outbound_channel, inbound_channel) {
    return this.$.start(params, max_resolution, observer, resource_provider, outbound_channel, inbound_channel);
  }
  switchMirroringSourceTab() {
    return this.$.switchMirroringSourceTab();
  }
  getMirroringStats() {
    return this.$.getMirroringStats();
  }
};

mirroring.mojom.MirroringServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('MirroringService', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  start(params, max_resolution, observer, resource_provider, outbound_channel, inbound_channel) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mirroring.mojom.MirroringService_Start_ParamsSpec,
      null,
      [params, max_resolution, observer, resource_provider, outbound_channel, inbound_channel],
      false);
  }

  switchMirroringSourceTab() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mirroring.mojom.MirroringService_SwitchMirroringSourceTab_ParamsSpec,
      null,
      [],
      false);
  }

  getMirroringStats() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mirroring.mojom.MirroringService_GetMirroringStats_ParamsSpec,
      mirroring.mojom.MirroringService_GetMirroringStats_ResponseParamsSpec,
      [],
      false);
  }

};

mirroring.mojom.MirroringService.getRemote = function() {
  let remote = new mirroring.mojom.MirroringServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'mirroring.mojom.MirroringService',
    'context');
  return remote.$;
};

mirroring.mojom.MirroringServiceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('MirroringService', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    if (this.router_.onConnectionError) {
      this.router_.onConnectionError.addListener(() => {
         console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
      });
    }
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
             decoder.decodeStructInline(mirroring.mojom.MirroringService_Start_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mirroring.mojom.MirroringService_SwitchMirroringSourceTab_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mirroring.mojom.MirroringService_GetMirroringStats_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mirroring.mojom.MirroringService_Start_ParamsSpec.$.structSpec);
          const result = this.impl.start(params.params, params.max_resolution, params.observer, params.resource_provider, params.outbound_channel, params.inbound_channel);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mirroring.mojom.MirroringService_SwitchMirroringSourceTab_ParamsSpec.$.structSpec);
          const result = this.impl.switchMirroringSourceTab();
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mirroring.mojom.MirroringService_GetMirroringStats_ParamsSpec.$.structSpec);
          const result = this.impl.getMirroringStats();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mirroring.mojom.MirroringService_GetMirroringStats_ResponseParamsSpec);
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

mirroring.mojom.MirroringServiceReceiver = mirroring.mojom.MirroringServiceReceiver;

mirroring.mojom.MirroringServicePtr = mirroring.mojom.MirroringServiceRemote;
mirroring.mojom.MirroringServiceRequest = mirroring.mojom.MirroringServicePendingReceiver;

