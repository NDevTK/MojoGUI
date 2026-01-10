// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/contacts/contacts_manager.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var payments = payments || {};

blink.mojom.ContactIconBlobSpec = { $: {} };
blink.mojom.ContactInfoSpec = { $: {} };
blink.mojom.ContactsManager = {};
blink.mojom.ContactsManager.$interfaceName = 'blink.mojom.ContactsManager';
blink.mojom.ContactsManager_Select_ParamsSpec = { $: {} };
blink.mojom.ContactsManager_Select_ResponseParamsSpec = { $: {} };

// Struct: ContactIconBlob
mojo.internal.Struct(
    blink.mojom.ContactIconBlobSpec, 'blink.mojom.ContactIconBlob', [
      mojo.internal.StructField('mime_type', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('data', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: ContactInfo
mojo.internal.Struct(
    blink.mojom.ContactInfoSpec, 'blink.mojom.ContactInfo', [
      mojo.internal.StructField('name', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, true, 0, undefined),
      mojo.internal.StructField('email', 8, 0, mojo.internal.Array(mojo.internal.String, false), null, true, 0, undefined),
      mojo.internal.StructField('tel', 16, 0, mojo.internal.Array(mojo.internal.String, false), null, true, 0, undefined),
      mojo.internal.StructField('address', 24, 0, mojo.internal.Array(payments.mojom.PaymentAddressSpec.$, false), null, true, 0, undefined),
      mojo.internal.StructField('icon', 32, 0, mojo.internal.Array(blink.mojom.ContactIconBlobSpec.$, false), null, true, 0, undefined),
    ],
    [[0, 48]]);

// Interface: ContactsManager
mojo.internal.Struct(
    blink.mojom.ContactsManager_Select_ParamsSpec, 'blink.mojom.ContactsManager_Select_Params', [
      mojo.internal.StructField('multiple', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('include_names', 0, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('include_emails', 0, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('include_tel', 0, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('include_addresses', 0, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('include_icons', 0, 5, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.ContactsManager_Select_ResponseParamsSpec, 'blink.mojom.ContactsManager_Select_ResponseParams', [
      mojo.internal.StructField('contacts', 0, 0, mojo.internal.Array(blink.mojom.ContactInfoSpec.$, false), null, true, 0, undefined),
    ],
    [[0, 16]]);

blink.mojom.ContactsManagerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.ContactsManagerRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.ContactsManager';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.ContactsManagerPendingReceiver,
      handle);
    this.$ = new blink.mojom.ContactsManagerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.ContactsManagerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  select(multiple, include_names, include_emails, include_tel, include_addresses, include_icons) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.ContactsManager_Select_ParamsSpec,
      blink.mojom.ContactsManager_Select_ResponseParamsSpec,
      [multiple, include_names, include_emails, include_tel, include_addresses, include_icons],
      false);
  }

};

blink.mojom.ContactsManager.getRemote = function() {
  let remote = new blink.mojom.ContactsManagerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.ContactsManager',
    'context');
  return remote.$;
};

blink.mojom.ContactsManagerReceiver = class {
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
        
        // Try Method 0: Select
        try {
             decoder.decodeStruct(blink.mojom.ContactsManager_Select_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Select (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.ContactsManager_Select_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.select');
          const result = this.impl.select(params.multiple, params.include_names, params.include_emails, params.include_tel, params.include_addresses, params.include_icons);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.ContactsManager_Select_ResponseParamsSpec);
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

blink.mojom.ContactsManagerReceiver = blink.mojom.ContactsManagerReceiver;

blink.mojom.ContactsManagerPtr = blink.mojom.ContactsManagerRemote;
blink.mojom.ContactsManagerRequest = blink.mojom.ContactsManagerPendingReceiver;

