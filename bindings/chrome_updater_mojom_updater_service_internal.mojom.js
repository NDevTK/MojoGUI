// Auto-generated MojoJS binding
// Source: chromium_src/chrome/updater/mojom/updater_service_internal.mojom
// Module: updater.mojom

'use strict';

// Module namespace
var updater = updater || {};
updater.mojom = updater.mojom || {};


// Interface: UpdateServiceInternal
updater.mojom.UpdateServiceInternal = {};

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
      null,
      null,
      [],
      undefined,
      undefined
    );
  }

  hello() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      updater.mojom.UpdateServiceInternal_Hello_ParamsSpec,
      null,
      null,
      [],
      undefined,
      undefined
    );
  }

};

updater.mojom.UpdateServiceInternal.getRemote = function() {
  let remote = new updater.mojom.UpdateServiceInternalRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'updater.mojom.UpdateServiceInternal',
    'context');
  return remote.$;
};

// ParamsSpec for Run
updater.mojom.UpdateServiceInternal_Run_ParamsSpec = {
  $: {
    structSpec: {
      name: 'updater.mojom.UpdateServiceInternal.Run_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for Hello
updater.mojom.UpdateServiceInternal_Hello_ParamsSpec = {
  $: {
    structSpec: {
      name: 'updater.mojom.UpdateServiceInternal.Hello_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Legacy compatibility
updater.mojom.UpdateServiceInternalPtr = updater.mojom.UpdateServiceInternalRemote;
updater.mojom.UpdateServiceInternalRequest = updater.mojom.UpdateServiceInternalPendingReceiver;

