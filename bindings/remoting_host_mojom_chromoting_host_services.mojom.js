// Auto-generated MojoJS binding
// Source: chromium_src/remoting/host/mojom/chromoting_host_services.mojom
// Module: remoting.mojom

'use strict';

// Module namespace
var remoting = remoting || {};
remoting.mojom = remoting.mojom || {};

remoting.mojom.ChromotingHostServices = {};
remoting.mojom.ChromotingHostServices.$interfaceName = 'remoting.mojom.ChromotingHostServices';
remoting.mojom.ChromotingHostServices_BindSessionServices_ParamsSpec = { $: {} };
remoting.mojom.ChromotingSessionServices = {};
remoting.mojom.ChromotingSessionServices.$interfaceName = 'remoting.mojom.ChromotingSessionServices';
remoting.mojom.ChromotingSessionServices_BindWebAuthnProxy_ParamsSpec = { $: {} };
remoting.mojom.ChromotingSessionServices_BindRemoteUrlOpener_ParamsSpec = { $: {} };
remoting.mojom.ChromotingSessionServices_BindSecurityKeyForwarder_ParamsSpec = { $: {} };

// Interface: ChromotingHostServices
mojo.internal.Struct(
    remoting.mojom.ChromotingHostServices_BindSessionServices_ParamsSpec, 'remoting.mojom.ChromotingHostServices_BindSessionServices_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(remoting.mojom.ChromotingSessionServicesSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

remoting.mojom.ChromotingHostServicesPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

remoting.mojom.ChromotingHostServicesRemote = class {
  static get $interfaceName() {
    return 'remoting.mojom.ChromotingHostServices';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      remoting.mojom.ChromotingHostServicesPendingReceiver,
      handle);
    this.$ = new remoting.mojom.ChromotingHostServicesRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

remoting.mojom.ChromotingHostServicesRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  bindSessionServices(receiver) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      remoting.mojom.ChromotingHostServices_BindSessionServices_ParamsSpec,
      null,
      [receiver],
      false);
  }

};

remoting.mojom.ChromotingHostServices.getRemote = function() {
  let remote = new remoting.mojom.ChromotingHostServicesRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'remoting.mojom.ChromotingHostServices',
    'context');
  return remote.$;
};

remoting.mojom.ChromotingHostServicesReceiver = class {
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
        // Create a view of ONLY the payload (skipping the header)
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        // Decoder uses payload view starting at 0
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: BindSessionServices
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(remoting.mojom.ChromotingHostServices_BindSessionServices_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> BindSessionServices (0)');
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
          const params = decoder.decodeStructInline(remoting.mojom.ChromotingHostServices_BindSessionServices_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.bindSessionServices');
          const result = this.impl.bindSessionServices(params.receiver);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

remoting.mojom.ChromotingHostServicesReceiver = remoting.mojom.ChromotingHostServicesReceiver;

remoting.mojom.ChromotingHostServicesPtr = remoting.mojom.ChromotingHostServicesRemote;
remoting.mojom.ChromotingHostServicesRequest = remoting.mojom.ChromotingHostServicesPendingReceiver;


// Interface: ChromotingSessionServices
mojo.internal.Struct(
    remoting.mojom.ChromotingSessionServices_BindWebAuthnProxy_ParamsSpec, 'remoting.mojom.ChromotingSessionServices_BindWebAuthnProxy_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(remoting.mojom.WebAuthnProxyRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    remoting.mojom.ChromotingSessionServices_BindRemoteUrlOpener_ParamsSpec, 'remoting.mojom.ChromotingSessionServices_BindRemoteUrlOpener_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(remoting.mojom.RemoteUrlOpenerRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    remoting.mojom.ChromotingSessionServices_BindSecurityKeyForwarder_ParamsSpec, 'remoting.mojom.ChromotingSessionServices_BindSecurityKeyForwarder_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(remoting.mojom.SecurityKeyForwarderRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

remoting.mojom.ChromotingSessionServicesPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

remoting.mojom.ChromotingSessionServicesRemote = class {
  static get $interfaceName() {
    return 'remoting.mojom.ChromotingSessionServices';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      remoting.mojom.ChromotingSessionServicesPendingReceiver,
      handle);
    this.$ = new remoting.mojom.ChromotingSessionServicesRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

remoting.mojom.ChromotingSessionServicesRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  bindWebAuthnProxy(receiver) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      remoting.mojom.ChromotingSessionServices_BindWebAuthnProxy_ParamsSpec,
      null,
      [receiver],
      false);
  }

  bindRemoteUrlOpener(receiver) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      remoting.mojom.ChromotingSessionServices_BindRemoteUrlOpener_ParamsSpec,
      null,
      [receiver],
      false);
  }

  bindSecurityKeyForwarder(receiver) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      remoting.mojom.ChromotingSessionServices_BindSecurityKeyForwarder_ParamsSpec,
      null,
      [receiver],
      false);
  }

};

remoting.mojom.ChromotingSessionServices.getRemote = function() {
  let remote = new remoting.mojom.ChromotingSessionServicesRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'remoting.mojom.ChromotingSessionServices',
    'context');
  return remote.$;
};

remoting.mojom.ChromotingSessionServicesReceiver = class {
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
        // Create a view of ONLY the payload (skipping the header)
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        // Decoder uses payload view starting at 0
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: BindWebAuthnProxy
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(remoting.mojom.ChromotingSessionServices_BindWebAuthnProxy_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> BindWebAuthnProxy (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: BindRemoteUrlOpener
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(remoting.mojom.ChromotingSessionServices_BindRemoteUrlOpener_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> BindRemoteUrlOpener (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: BindSecurityKeyForwarder
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(remoting.mojom.ChromotingSessionServices_BindSecurityKeyForwarder_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> BindSecurityKeyForwarder (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
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
          const params = decoder.decodeStructInline(remoting.mojom.ChromotingSessionServices_BindWebAuthnProxy_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.bindWebAuthnProxy');
          const result = this.impl.bindWebAuthnProxy(params.receiver);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(remoting.mojom.ChromotingSessionServices_BindRemoteUrlOpener_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.bindRemoteUrlOpener');
          const result = this.impl.bindRemoteUrlOpener(params.receiver);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(remoting.mojom.ChromotingSessionServices_BindSecurityKeyForwarder_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.bindSecurityKeyForwarder');
          const result = this.impl.bindSecurityKeyForwarder(params.receiver);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

remoting.mojom.ChromotingSessionServicesReceiver = remoting.mojom.ChromotingSessionServicesReceiver;

remoting.mojom.ChromotingSessionServicesPtr = remoting.mojom.ChromotingSessionServicesRemote;
remoting.mojom.ChromotingSessionServicesRequest = remoting.mojom.ChromotingSessionServicesPendingReceiver;

