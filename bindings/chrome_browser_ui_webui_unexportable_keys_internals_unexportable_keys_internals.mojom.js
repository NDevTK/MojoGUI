// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/unexportable_keys_internals/unexportable_keys_internals.mojom
// Module: unexportable_keys_internals.mojom

'use strict';

// Module namespace
var unexportable_keys_internals = unexportable_keys_internals || {};
unexportable_keys_internals.mojom = unexportable_keys_internals.mojom || {};


// Struct: UnexportableKeyId
unexportable_keys_internals.mojom.UnexportableKeyIdSpec = {
  $: {
    structSpec: {
      name: 'unexportable_keys_internals.mojom.UnexportableKeyId',
      packedSize: 16,
      fields: [
        { name: 'key_id', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: UnexportableKeyInfo
unexportable_keys_internals.mojom.UnexportableKeyInfoSpec = {
  $: {
    structSpec: {
      name: 'unexportable_keys_internals.mojom.UnexportableKeyInfo',
      packedSize: 48,
      fields: [
        { name: 'key_id', packedOffset: 0, packedBitOffset: 0, type: unexportable_keys_internals.mojom.UnexportableKeyIdSpec, nullable: false },
        { name: 'wrapped_key', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'algorithm', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'key_tag', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'creation_time', packedOffset: 32, packedBitOffset: 0, type: mojo_base.mojom.TimeSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Interface: PageHandlerFactory
unexportable_keys_internals.mojom.PageHandlerFactory = {};

unexportable_keys_internals.mojom.PageHandlerFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

unexportable_keys_internals.mojom.PageHandlerFactoryRemote = class {
  static get $interfaceName() {
    return 'unexportable_keys_internals.mojom.PageHandlerFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      unexportable_keys_internals.mojom.PageHandlerFactoryPendingReceiver,
      handle);
    this.$ = new unexportable_keys_internals.mojom.PageHandlerFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

unexportable_keys_internals.mojom.PageHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createUnexportableKeysInternalsHandler(page, handler) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      unexportable_keys_internals.mojom.PageHandlerFactory_CreateUnexportableKeysInternalsHandler_ParamsSpec,
      null,
      [page, handler]);
  }

};

unexportable_keys_internals.mojom.PageHandlerFactory.getRemote = function() {
  let remote = new unexportable_keys_internals.mojom.PageHandlerFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'unexportable_keys_internals.mojom.PageHandlerFactory',
    'context');
  return remote.$;
};

// ParamsSpec for CreateUnexportableKeysInternalsHandler
unexportable_keys_internals.mojom.PageHandlerFactory_CreateUnexportableKeysInternalsHandler_ParamsSpec = {
  $: {
    structSpec: {
      name: 'unexportable_keys_internals.mojom.PageHandlerFactory.CreateUnexportableKeysInternalsHandler_Params',
      packedSize: 16,
      fields: [
        { name: 'page', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
        { name: 'handler', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
unexportable_keys_internals.mojom.PageHandlerFactoryPtr = unexportable_keys_internals.mojom.PageHandlerFactoryRemote;
unexportable_keys_internals.mojom.PageHandlerFactoryRequest = unexportable_keys_internals.mojom.PageHandlerFactoryPendingReceiver;


// Interface: PageHandler
unexportable_keys_internals.mojom.PageHandler = {};

unexportable_keys_internals.mojom.PageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

unexportable_keys_internals.mojom.PageHandlerRemote = class {
  static get $interfaceName() {
    return 'unexportable_keys_internals.mojom.PageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      unexportable_keys_internals.mojom.PageHandlerPendingReceiver,
      handle);
    this.$ = new unexportable_keys_internals.mojom.PageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

unexportable_keys_internals.mojom.PageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getUnexportableKeysInfo() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      unexportable_keys_internals.mojom.PageHandler_GetUnexportableKeysInfo_ParamsSpec,
      unexportable_keys_internals.mojom.PageHandler_GetUnexportableKeysInfo_ResponseParamsSpec,
      []);
  }

  deleteKey(key_id) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      unexportable_keys_internals.mojom.PageHandler_DeleteKey_ParamsSpec,
      unexportable_keys_internals.mojom.PageHandler_DeleteKey_ResponseParamsSpec,
      [key_id]);
  }

};

unexportable_keys_internals.mojom.PageHandler.getRemote = function() {
  let remote = new unexportable_keys_internals.mojom.PageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'unexportable_keys_internals.mojom.PageHandler',
    'context');
  return remote.$;
};

// ParamsSpec for GetUnexportableKeysInfo
unexportable_keys_internals.mojom.PageHandler_GetUnexportableKeysInfo_ParamsSpec = {
  $: {
    structSpec: {
      name: 'unexportable_keys_internals.mojom.PageHandler.GetUnexportableKeysInfo_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

unexportable_keys_internals.mojom.PageHandler_GetUnexportableKeysInfo_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'unexportable_keys_internals.mojom.PageHandler.GetUnexportableKeysInfo_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'keys', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for DeleteKey
unexportable_keys_internals.mojom.PageHandler_DeleteKey_ParamsSpec = {
  $: {
    structSpec: {
      name: 'unexportable_keys_internals.mojom.PageHandler.DeleteKey_Params',
      packedSize: 16,
      fields: [
        { name: 'key_id', packedOffset: 0, packedBitOffset: 0, type: unexportable_keys_internals.mojom.UnexportableKeyIdSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

unexportable_keys_internals.mojom.PageHandler_DeleteKey_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'unexportable_keys_internals.mojom.PageHandler.DeleteKey_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
unexportable_keys_internals.mojom.PageHandlerPtr = unexportable_keys_internals.mojom.PageHandlerRemote;
unexportable_keys_internals.mojom.PageHandlerRequest = unexportable_keys_internals.mojom.PageHandlerPendingReceiver;


// Interface: Page
unexportable_keys_internals.mojom.Page = {};

unexportable_keys_internals.mojom.PagePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

unexportable_keys_internals.mojom.PageRemote = class {
  static get $interfaceName() {
    return 'unexportable_keys_internals.mojom.Page';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      unexportable_keys_internals.mojom.PagePendingReceiver,
      handle);
    this.$ = new unexportable_keys_internals.mojom.PageRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

unexportable_keys_internals.mojom.PageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

unexportable_keys_internals.mojom.Page.getRemote = function() {
  let remote = new unexportable_keys_internals.mojom.PageRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'unexportable_keys_internals.mojom.Page',
    'context');
  return remote.$;
};

// Legacy compatibility
unexportable_keys_internals.mojom.PagePtr = unexportable_keys_internals.mojom.PageRemote;
unexportable_keys_internals.mojom.PageRequest = unexportable_keys_internals.mojom.PagePendingReceiver;

