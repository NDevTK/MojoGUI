// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/unexportable_keys_internals/unexportable_keys_internals.mojom
// Module: unexportable_keys_internals.mojom

'use strict';

// Module namespace
var unexportable_keys_internals = unexportable_keys_internals || {};
unexportable_keys_internals.mojom = unexportable_keys_internals.mojom || {};

unexportable_keys_internals.mojom.UnexportableKeyIdSpec = { $: {} };
unexportable_keys_internals.mojom.UnexportableKeyInfoSpec = { $: {} };
unexportable_keys_internals.mojom.PageHandlerFactory = {};
unexportable_keys_internals.mojom.PageHandlerFactory.$interfaceName = 'unexportable_keys_internals.mojom.PageHandlerFactory';
unexportable_keys_internals.mojom.PageHandlerFactory_CreateUnexportableKeysInternalsHandler_ParamsSpec = { $: {} };
unexportable_keys_internals.mojom.PageHandler = {};
unexportable_keys_internals.mojom.PageHandler.$interfaceName = 'unexportable_keys_internals.mojom.PageHandler';
unexportable_keys_internals.mojom.PageHandler_GetUnexportableKeysInfo_ParamsSpec = { $: {} };
unexportable_keys_internals.mojom.PageHandler_GetUnexportableKeysInfo_ResponseParamsSpec = { $: {} };
unexportable_keys_internals.mojom.PageHandler_DeleteKey_ParamsSpec = { $: {} };
unexportable_keys_internals.mojom.PageHandler_DeleteKey_ResponseParamsSpec = { $: {} };
unexportable_keys_internals.mojom.Page = {};
unexportable_keys_internals.mojom.Page.$interfaceName = 'unexportable_keys_internals.mojom.Page';

// Struct: UnexportableKeyId
mojo.internal.Struct(
    unexportable_keys_internals.mojom.UnexportableKeyIdSpec, 'unexportable_keys_internals.mojom.UnexportableKeyId', [
      mojo.internal.StructField('key_id', 0, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: UnexportableKeyInfo
mojo.internal.Struct(
    unexportable_keys_internals.mojom.UnexportableKeyInfoSpec, 'unexportable_keys_internals.mojom.UnexportableKeyInfo', [
      mojo.internal.StructField('key_id', 0, 0, unexportable_keys_internals.mojom.UnexportableKeyIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('wrapped_key', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('algorithm', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('key_tag', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('creation_time', 32, 0, mojo_base.mojom.TimeSpec.$, null, false, 0, undefined),
    ],
    [[0, 48]]);

// Interface: PageHandlerFactory
mojo.internal.Struct(
    unexportable_keys_internals.mojom.PageHandlerFactory_CreateUnexportableKeysInternalsHandler_ParamsSpec, 'unexportable_keys_internals.mojom.PageHandlerFactory_CreateUnexportableKeysInternalsHandler_Params', [
      mojo.internal.StructField('page', 0, 0, mojo.internal.InterfaceProxy(unexportable_keys_internals.mojom.PageRemote), null, false, 0, undefined),
      mojo.internal.StructField('handler', 8, 0, mojo.internal.InterfaceRequest(unexportable_keys_internals.mojom.PageHandlerRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

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
      [page, handler],
      false);
  }

};

unexportable_keys_internals.mojom.PageHandlerFactory.getRemote = function() {
  let remote = new unexportable_keys_internals.mojom.PageHandlerFactoryRemote();
  remote.bindNewPipeAndPassReceiver();
  remote.proxy.endpoint_.bindInBrowser(
    'unexportable_keys_internals.mojom.PageHandlerFactory',
    'context');
  return remote.$;
};

unexportable_keys_internals.mojom.PageHandlerFactoryPtr = unexportable_keys_internals.mojom.PageHandlerFactoryRemote;
unexportable_keys_internals.mojom.PageHandlerFactoryRequest = unexportable_keys_internals.mojom.PageHandlerFactoryPendingReceiver;


// Interface: PageHandler
mojo.internal.Struct(
    unexportable_keys_internals.mojom.PageHandler_GetUnexportableKeysInfo_ParamsSpec, 'unexportable_keys_internals.mojom.PageHandler_GetUnexportableKeysInfo_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    unexportable_keys_internals.mojom.PageHandler_GetUnexportableKeysInfo_ResponseParamsSpec, 'unexportable_keys_internals.mojom.PageHandler_GetUnexportableKeysInfo_ResponseParams', [
      mojo.internal.StructField('keys', 0, 0, mojo.internal.Array(unexportable_keys_internals.mojom.UnexportableKeyInfoSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    unexportable_keys_internals.mojom.PageHandler_DeleteKey_ParamsSpec, 'unexportable_keys_internals.mojom.PageHandler_DeleteKey_Params', [
      mojo.internal.StructField('key_id', 0, 0, unexportable_keys_internals.mojom.UnexportableKeyIdSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    unexportable_keys_internals.mojom.PageHandler_DeleteKey_ResponseParamsSpec, 'unexportable_keys_internals.mojom.PageHandler_DeleteKey_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

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
      [],
      false);
  }

  deleteKey(key_id) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      unexportable_keys_internals.mojom.PageHandler_DeleteKey_ParamsSpec,
      unexportable_keys_internals.mojom.PageHandler_DeleteKey_ResponseParamsSpec,
      [key_id],
      false);
  }

};

unexportable_keys_internals.mojom.PageHandler.getRemote = function() {
  let remote = new unexportable_keys_internals.mojom.PageHandlerRemote();
  remote.bindNewPipeAndPassReceiver();
  remote.proxy.endpoint_.bindInBrowser(
    'unexportable_keys_internals.mojom.PageHandler',
    'context');
  return remote.$;
};

unexportable_keys_internals.mojom.PageHandlerPtr = unexportable_keys_internals.mojom.PageHandlerRemote;
unexportable_keys_internals.mojom.PageHandlerRequest = unexportable_keys_internals.mojom.PageHandlerPendingReceiver;


// Interface: Page
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
  remote.bindNewPipeAndPassReceiver();
  remote.proxy.endpoint_.bindInBrowser(
    'unexportable_keys_internals.mojom.Page',
    'context');
  return remote.$;
};

unexportable_keys_internals.mojom.PagePtr = unexportable_keys_internals.mojom.PageRemote;
unexportable_keys_internals.mojom.PageRequest = unexportable_keys_internals.mojom.PagePendingReceiver;

