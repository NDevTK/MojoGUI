// Auto-generated MojoJS binding
// Source: chromium_src/components/mirroring/mojom/mirroring_service.mojom
// Module: mirroring.mojom

'use strict';

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
};

mirroring.mojom.MirroringServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  start(params, max_resolution, observer, resource_provider, outbound_channel, inbound_channel) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      mirroring.mojom.MirroringService_Start_ParamsSpec,
      null,
      [params, max_resolution, observer, resource_provider, outbound_channel, inbound_channel],
      false);
  }

  switchMirroringSourceTab() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      mirroring.mojom.MirroringService_SwitchMirroringSourceTab_ParamsSpec,
      null,
      [],
      false);
  }

  getMirroringStats() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
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
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        message = {
          header: args[1],
          payload: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: Start
        try {
             decoder.decodeStruct(mirroring.mojom.MirroringService_Start_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Start (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 1: SwitchMirroringSourceTab
        try {
             decoder.decodeStruct(mirroring.mojom.MirroringService_SwitchMirroringSourceTab_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SwitchMirroringSourceTab (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 2: GetMirroringStats
        try {
             decoder.decodeStruct(mirroring.mojom.MirroringService_GetMirroringStats_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetMirroringStats (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(mirroring.mojom.MirroringService_Start_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.start');
          const result = this.impl.start(params.params, params.max_resolution, params.observer, params.resource_provider, params.outbound_channel, params.inbound_channel);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(mirroring.mojom.MirroringService_SwitchMirroringSourceTab_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.switchMirroringSourceTab');
          const result = this.impl.switchMirroringSourceTab();
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(mirroring.mojom.MirroringService_GetMirroringStats_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getMirroringStats');
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
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mirroring.mojom.MirroringServiceReceiver = mirroring.mojom.MirroringServiceReceiver;

mirroring.mojom.MirroringServicePtr = mirroring.mojom.MirroringServiceRemote;
mirroring.mojom.MirroringServiceRequest = mirroring.mojom.MirroringServicePendingReceiver;

