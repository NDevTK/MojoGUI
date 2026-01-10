// Auto-generated MojoJS binding
// Source: chromium_src/chrome/credential_provider/gaiacp/mojom/gaia_credential_provider_win_hid.mojom
// Module: gcpw_hid.mojom

'use strict';

// Module namespace
var gcpw_hid = gcpw_hid || {};
gcpw_hid.mojom = gcpw_hid.mojom || {};
var mojo_base = mojo_base || {};

gcpw_hid.mojom.GaiaCredentialProviderHidBroker = {};
gcpw_hid.mojom.GaiaCredentialProviderHidBroker.$interfaceName = 'gcpw_hid.mojom.GaiaCredentialProviderHidBroker';
gcpw_hid.mojom.GaiaCredentialProviderHidBroker_OpenDevice_ParamsSpec = { $: {} };
gcpw_hid.mojom.GaiaCredentialProviderHidBroker_OpenDevice_ResponseParamsSpec = { $: {} };

// Interface: GaiaCredentialProviderHidBroker
mojo.internal.Struct(
    gcpw_hid.mojom.GaiaCredentialProviderHidBroker_OpenDevice_ParamsSpec, 'gcpw_hid.mojom.GaiaCredentialProviderHidBroker_OpenDevice_Params', [
      mojo.internal.StructField('device_path', 0, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    gcpw_hid.mojom.GaiaCredentialProviderHidBroker_OpenDevice_ResponseParamsSpec, 'gcpw_hid.mojom.GaiaCredentialProviderHidBroker_OpenDevice_ResponseParams', [
      mojo.internal.StructField('out_handle', 0, 0, mojo.internal.Pointer, null, true, 0, undefined),
    ],
    [[0, 16]]);

gcpw_hid.mojom.GaiaCredentialProviderHidBrokerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

gcpw_hid.mojom.GaiaCredentialProviderHidBrokerRemote = class {
  static get $interfaceName() {
    return 'gcpw_hid.mojom.GaiaCredentialProviderHidBroker';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      gcpw_hid.mojom.GaiaCredentialProviderHidBrokerPendingReceiver,
      handle);
    this.$ = new gcpw_hid.mojom.GaiaCredentialProviderHidBrokerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

gcpw_hid.mojom.GaiaCredentialProviderHidBrokerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  openDevice(device_path) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      gcpw_hid.mojom.GaiaCredentialProviderHidBroker_OpenDevice_ParamsSpec,
      gcpw_hid.mojom.GaiaCredentialProviderHidBroker_OpenDevice_ResponseParamsSpec,
      [device_path],
      false);
  }

};

gcpw_hid.mojom.GaiaCredentialProviderHidBroker.getRemote = function() {
  let remote = new gcpw_hid.mojom.GaiaCredentialProviderHidBrokerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'gcpw_hid.mojom.GaiaCredentialProviderHidBroker',
    'context');
  return remote.$;
};

gcpw_hid.mojom.GaiaCredentialProviderHidBrokerReceiver = class {
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
        let payload = args[2];
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload);
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
      if (dispatchId === undefined) dispatchId = header.ordinal; // Fallback to raw ordinal
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(gcpw_hid.mojom.GaiaCredentialProviderHidBroker_OpenDevice_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.openDevice');
          const result = this.impl.openDevice(params.device_path);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, gcpw_hid.mojom.GaiaCredentialProviderHidBroker_OpenDevice_ResponseParamsSpec);
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

gcpw_hid.mojom.GaiaCredentialProviderHidBrokerReceiver = gcpw_hid.mojom.GaiaCredentialProviderHidBrokerReceiver;

gcpw_hid.mojom.GaiaCredentialProviderHidBrokerPtr = gcpw_hid.mojom.GaiaCredentialProviderHidBrokerRemote;
gcpw_hid.mojom.GaiaCredentialProviderHidBrokerRequest = gcpw_hid.mojom.GaiaCredentialProviderHidBrokerPendingReceiver;

