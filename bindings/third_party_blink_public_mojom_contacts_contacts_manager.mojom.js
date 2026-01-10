// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/contacts/contacts_manager.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Struct: ContactIconBlob
blink.mojom.ContactIconBlobSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ContactIconBlob',
      packedSize: 24,
      fields: [
        { name: 'mime_type', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'data', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: ContactInfo
blink.mojom.ContactInfoSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ContactInfo',
      packedSize: 48,
      fields: [
        { name: 'name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.String, false), nullable: true, minVersion: 0 },
        { name: 'email', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.String, false), nullable: true, minVersion: 0 },
        { name: 'tel', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.String, false), nullable: true, minVersion: 0 },
        { name: 'address', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Array(payments.mojom.PaymentAddressSpec, false), nullable: true, minVersion: 0 },
        { name: 'icon', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Array(blink.mojom.ContactIconBlobSpec, false), nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 48}]
    }
  }
};

// Interface: ContactsManager
blink.mojom.ContactsManager = {};

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
      [multiple, include_names, include_emails, include_tel, include_addresses, include_icons]);
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

// ParamsSpec for Select
blink.mojom.ContactsManager_Select_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ContactsManager.Select_Params',
      packedSize: 16,
      fields: [
        { name: 'multiple', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'include_names', packedOffset: 0, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'include_emails', packedOffset: 0, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'include_tel', packedOffset: 0, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'include_addresses', packedOffset: 0, packedBitOffset: 4, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'include_icons', packedOffset: 0, packedBitOffset: 5, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

blink.mojom.ContactsManager_Select_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'contacts', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(blink.mojom.ContactInfoSpec, false), nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
blink.mojom.ContactsManagerPtr = blink.mojom.ContactsManagerRemote;
blink.mojom.ContactsManagerRequest = blink.mojom.ContactsManagerPendingReceiver;

