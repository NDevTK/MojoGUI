// Auto-generated MojoJS binding
// Source: chromium_src/chrome/updater/mojom/updater_service_internal.mojom
// Module: updater.mojom

'use strict';

// Module namespace
var updater = updater || {};
updater.mojom = updater.mojom || {};

updater.mojom.UpdateServiceInternal = {};
updater.mojom.UpdateServiceInternal.$interfaceName = 'updater.mojom.UpdateServiceInternal';
updater.mojom.UpdateServiceInternal_Run_ParamsSpec = { $: {} };
updater.mojom.UpdateServiceInternal_Run_ResponseParamsSpec = { $: {} };
updater.mojom.UpdateServiceInternal_Hello_ParamsSpec = { $: {} };
updater.mojom.UpdateServiceInternal_Hello_ResponseParamsSpec = { $: {} };

// Interface: UpdateServiceInternal
mojo.internal.Struct(
    updater.mojom.UpdateServiceInternal_Run_ParamsSpec, 'updater.mojom.UpdateServiceInternal_Run_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    updater.mojom.UpdateServiceInternal_Run_ResponseParamsSpec, 'updater.mojom.UpdateServiceInternal_Run_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    updater.mojom.UpdateServiceInternal_Hello_ParamsSpec, 'updater.mojom.UpdateServiceInternal_Hello_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    updater.mojom.UpdateServiceInternal_Hello_ResponseParamsSpec, 'updater.mojom.UpdateServiceInternal_Hello_ResponseParams', [
    ],
    [[0, 8]]);

updater.mojom.UpdateServiceInternalPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

updater.mojom.UpdateServiceInternalRemote = class {
  static get $interfaceName() {
    return 'updater.mojom.UpdateServiceInternal';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      updater.mojom.UpdateServiceInternalPendingReceiver,
      handle);
    this.$ = new updater.mojom.UpdateServiceInternalRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

updater.mojom.UpdateServiceInternalRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  run() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      updater.mojom.UpdateServiceInternal_Run_ParamsSpec,
      updater.mojom.UpdateServiceInternal_Run_ResponseParamsSpec,
      [],
      false);
  }

  hello() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      updater.mojom.UpdateServiceInternal_Hello_ParamsSpec,
      updater.mojom.UpdateServiceInternal_Hello_ResponseParamsSpec,
      [],
      false);
  }

};

updater.mojom.UpdateServiceInternal.getRemote = function() {
  let remote = new updater.mojom.UpdateServiceInternalRemote();
  remote.bindNewPipeAndPassReceiver();
  remote.proxy.endpoint_.bindInBrowser(
    'updater.mojom.UpdateServiceInternal',
    'context');
  return remote.$;
};

updater.mojom.UpdateServiceInternalPtr = updater.mojom.UpdateServiceInternalRemote;
updater.mojom.UpdateServiceInternalRequest = updater.mojom.UpdateServiceInternalPendingReceiver;

