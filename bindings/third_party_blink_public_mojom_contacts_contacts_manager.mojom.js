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
      packedSize: 16,
      fields: [
        { name: 'data', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: ContactInfo
blink.mojom.ContactInfoSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ContactInfo',
      packedSize: 16,
      fields: [
        { name: 'icon', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: true },
      ],
      versions: [{version: 0}]
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
        { name: 'multiple', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'include_names', packedOffset: 0, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
        { name: 'include_emails', packedOffset: 0, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false },
        { name: 'include_tel', packedOffset: 0, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false },
        { name: 'include_addresses', packedOffset: 0, packedBitOffset: 4, type: mojo.internal.Bool, nullable: false },
        { name: 'include_icons', packedOffset: 0, packedBitOffset: 5, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.ContactsManager_Select_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ContactsManager.Select_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'contacts', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
blink.mojom.ContactsManagerPtr = blink.mojom.ContactsManagerRemote;
blink.mojom.ContactsManagerRequest = blink.mojom.ContactsManagerPendingReceiver;

