// Auto-generated MojoJS binding
// Source: chromium_src/media/mojo/mojom/cdm_service.mojom
// Module: media.mojom

'use strict';

// Module namespace
var media = media || {};
media.mojom = media.mojom || {};
var mojo_base = mojo_base || {};
var sandbox = sandbox || {};
var service_manager = service_manager || {};

media.mojom.CdmService = {};
media.mojom.CdmService.$interfaceName = 'media.mojom.CdmService';
media.mojom.CdmService_CreateCdmFactory_ParamsSpec = { $: {} };
media.mojom.SeatbeltExtensionTokenProvider = {};
media.mojom.SeatbeltExtensionTokenProvider.$interfaceName = 'media.mojom.SeatbeltExtensionTokenProvider';
media.mojom.SeatbeltExtensionTokenProvider_GetTokens_ParamsSpec = { $: {} };
media.mojom.SeatbeltExtensionTokenProvider_GetTokens_ResponseParamsSpec = { $: {} };
media.mojom.CdmServiceBroker = {};
media.mojom.CdmServiceBroker.$interfaceName = 'media.mojom.CdmServiceBroker';
media.mojom.CdmServiceBroker_GetService_ParamsSpec = { $: {} };

// Interface: CdmService
mojo.internal.Struct(
    media.mojom.CdmService_CreateCdmFactory_ParamsSpec, 'media.mojom.CdmService_CreateCdmFactory_Params', [
      mojo.internal.StructField('factory', 0, 0, mojo.internal.InterfaceRequest(media.mojom.CdmFactoryRemote), null, false, 0, undefined),
      mojo.internal.StructField('frame_interfaces', 8, 0, mojo.internal.InterfaceProxy(media.mojom.FrameInterfaceFactoryRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

media.mojom.CdmServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media.mojom.CdmServiceRemote = class {
  static get $interfaceName() {
    return 'media.mojom.CdmService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media.mojom.CdmServicePendingReceiver,
      handle);
    this.$ = new media.mojom.CdmServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

media.mojom.CdmServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createCdmFactory(factory, frame_interfaces) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      media.mojom.CdmService_CreateCdmFactory_ParamsSpec,
      null,
      [factory, frame_interfaces],
      false);
  }

};

media.mojom.CdmService.getRemote = function() {
  let remote = new media.mojom.CdmServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.CdmService',
    'context');
  return remote.$;
};

media.mojom.CdmServiceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
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
        
        // Try Method 0: CreateCdmFactory
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(media.mojom.CdmService_CreateCdmFactory_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreateCdmFactory (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(media.mojom.CdmService_CreateCdmFactory_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.createCdmFactory');
          const result = this.impl.createCdmFactory(params.factory, params.frame_interfaces);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

media.mojom.CdmServiceReceiver = media.mojom.CdmServiceReceiver;

media.mojom.CdmServicePtr = media.mojom.CdmServiceRemote;
media.mojom.CdmServiceRequest = media.mojom.CdmServicePendingReceiver;


// Interface: SeatbeltExtensionTokenProvider
mojo.internal.Struct(
    media.mojom.SeatbeltExtensionTokenProvider_GetTokens_ParamsSpec, 'media.mojom.SeatbeltExtensionTokenProvider_GetTokens_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    media.mojom.SeatbeltExtensionTokenProvider_GetTokens_ResponseParamsSpec, 'media.mojom.SeatbeltExtensionTokenProvider_GetTokens_ResponseParams', [
      mojo.internal.StructField('tokens', 0, 0, mojo.internal.Array(sandbox.mac.mojom.SeatbeltExtensionTokenSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

media.mojom.SeatbeltExtensionTokenProviderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media.mojom.SeatbeltExtensionTokenProviderRemote = class {
  static get $interfaceName() {
    return 'media.mojom.SeatbeltExtensionTokenProvider';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media.mojom.SeatbeltExtensionTokenProviderPendingReceiver,
      handle);
    this.$ = new media.mojom.SeatbeltExtensionTokenProviderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

media.mojom.SeatbeltExtensionTokenProviderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getTokens() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      media.mojom.SeatbeltExtensionTokenProvider_GetTokens_ParamsSpec,
      media.mojom.SeatbeltExtensionTokenProvider_GetTokens_ResponseParamsSpec,
      [],
      false);
  }

};

media.mojom.SeatbeltExtensionTokenProvider.getRemote = function() {
  let remote = new media.mojom.SeatbeltExtensionTokenProviderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.SeatbeltExtensionTokenProvider',
    'context');
  return remote.$;
};

media.mojom.SeatbeltExtensionTokenProviderReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
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
        
        // Try Method 0: GetTokens
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(media.mojom.SeatbeltExtensionTokenProvider_GetTokens_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetTokens (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(media.mojom.SeatbeltExtensionTokenProvider_GetTokens_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getTokens');
          const result = this.impl.getTokens();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, media.mojom.SeatbeltExtensionTokenProvider_GetTokens_ResponseParamsSpec);
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

media.mojom.SeatbeltExtensionTokenProviderReceiver = media.mojom.SeatbeltExtensionTokenProviderReceiver;

media.mojom.SeatbeltExtensionTokenProviderPtr = media.mojom.SeatbeltExtensionTokenProviderRemote;
media.mojom.SeatbeltExtensionTokenProviderRequest = media.mojom.SeatbeltExtensionTokenProviderPendingReceiver;


// Interface: CdmServiceBroker
mojo.internal.Struct(
    media.mojom.CdmServiceBroker_GetService_ParamsSpec, 'media.mojom.CdmServiceBroker_GetService_Params', [
      mojo.internal.StructField('cdm_path', 0, 0, mojo_base.mojom.FilePathSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('token_provider', 8, 0, mojo.internal.InterfaceProxy(media.mojom.SeatbeltExtensionTokenProviderSpec), null, true, 0, undefined),
      mojo.internal.StructField('receiver', 16, 0, mojo.internal.InterfaceRequest(media.mojom.CdmServiceSpec), null, false, 0, undefined),
    ],
    [[0, 32]]);

media.mojom.CdmServiceBrokerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media.mojom.CdmServiceBrokerRemote = class {
  static get $interfaceName() {
    return 'media.mojom.CdmServiceBroker';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media.mojom.CdmServiceBrokerPendingReceiver,
      handle);
    this.$ = new media.mojom.CdmServiceBrokerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

media.mojom.CdmServiceBrokerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getService(cdm_path, token_provider, receiver) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      media.mojom.CdmServiceBroker_GetService_ParamsSpec,
      null,
      [cdm_path, token_provider, receiver],
      false);
  }

};

media.mojom.CdmServiceBroker.getRemote = function() {
  let remote = new media.mojom.CdmServiceBrokerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.CdmServiceBroker',
    'context');
  return remote.$;
};

media.mojom.CdmServiceBrokerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
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
        
        // Try Method 0: GetService
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(media.mojom.CdmServiceBroker_GetService_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetService (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(media.mojom.CdmServiceBroker_GetService_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getService');
          const result = this.impl.getService(params.cdm_path, params.token_provider, params.receiver);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

media.mojom.CdmServiceBrokerReceiver = media.mojom.CdmServiceBrokerReceiver;

media.mojom.CdmServiceBrokerPtr = media.mojom.CdmServiceBrokerRemote;
media.mojom.CdmServiceBrokerRequest = media.mojom.CdmServiceBrokerPendingReceiver;

