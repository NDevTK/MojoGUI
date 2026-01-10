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
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (message) => {
      const header = message.header;
      if (!header) return;
      switch (header.ordinal) {
        case 0: {
          const params = blink.mojom.ContactsManager_Select_ParamsSpec.$.decode(message.payload);
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
    }});
  }
};

blink.mojom.ContactsManagerReceiver = blink.mojom.ContactsManagerReceiver;

blink.mojom.ContactsManagerPtr = blink.mojom.ContactsManagerRemote;
blink.mojom.ContactsManagerRequest = blink.mojom.ContactsManagerPendingReceiver;

