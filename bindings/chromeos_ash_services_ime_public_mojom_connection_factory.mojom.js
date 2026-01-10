// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/services/ime/public/mojom/connection_factory.mojom
// Module: ash.ime.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.ime = ash.ime || {};
ash.ime.ime.mojom = ash.ime.ime.mojom || {};


// Interface: ConnectionFactory
ash.ime.ime.mojom.mojom.ConnectionFactory = {};

ash.ime.ime.mojom.mojom.ConnectionFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.ime.ime.mojom.mojom.ConnectionFactoryRemote = class {
  static get $interfaceName() {
    return 'ash.ime.mojom.ConnectionFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.ime.ime.mojom.mojom.ConnectionFactoryPendingReceiver,
      handle);
    this.$ = new ash.ime.ime.mojom.mojom.ConnectionFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.ime.ime.mojom.mojom.ConnectionFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  connectToInputMethod(ime_spec, input_method, input_method_host, settings) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.ime.ime.mojom.mojom.ConnectionFactory_ConnectToInputMethod_ParamsSpec,
      ash.ime.ime.mojom.mojom.ConnectionFactory_ConnectToInputMethod_ResponseParamsSpec,
      [ime_spec, input_method, input_method_host, settings]);
  }

  unused(unused) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.ime.ime.mojom.mojom.ConnectionFactory_Unused_ParamsSpec,
      ash.ime.ime.mojom.mojom.ConnectionFactory_Unused_ResponseParamsSpec,
      [unused]);
  }

};

ash.ime.ime.mojom.mojom.ConnectionFactory.getRemote = function() {
  let remote = new ash.ime.ime.mojom.mojom.ConnectionFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.ime.mojom.ConnectionFactory',
    'context');
  return remote.$;
};

// ParamsSpec for ConnectToInputMethod
ash.ime.ime.mojom.mojom.ConnectionFactory_ConnectToInputMethod_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.ime.mojom.ConnectionFactory.ConnectToInputMethod_Params',
      packedSize: 48,
      fields: [
        { name: 'ime_spec', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'input_method', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.AssociatedInterfaceRequest(ash.ime.mojom.InputMethodRemote), nullable: false, minVersion: 0 },
        { name: 'input_method_host', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.AssociatedInterfaceProxy(ash.ime.mojom.InputMethodHostRemote), nullable: false, minVersion: 0 },
        { name: 'settings', packedOffset: 24, packedBitOffset: 0, type: ash.ime.mojom.InputMethodSettingsSpec, nullable: true, minVersion: 2 },
      ],
      versions: [{version: 0, packedSize: 32}, {version: 2, packedSize: 48}]
    }
  }
};

ash.ime.ime.mojom.mojom.ConnectionFactory_ConnectToInputMethod_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.ime.mojom.ConnectionFactory.ConnectToInputMethod_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for Unused
ash.ime.ime.mojom.mojom.ConnectionFactory_Unused_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.ime.mojom.ConnectionFactory.Unused_Params',
      packedSize: 16,
      fields: [
        { name: 'unused', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.AssociatedInterfaceRequest(ash.ime.mojom.JpUnusedRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

ash.ime.ime.mojom.mojom.ConnectionFactory_Unused_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.ime.mojom.ConnectionFactory.Unused_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
ash.ime.ime.mojom.mojom.ConnectionFactoryPtr = ash.ime.ime.mojom.mojom.ConnectionFactoryRemote;
ash.ime.ime.mojom.mojom.ConnectionFactoryRequest = ash.ime.ime.mojom.mojom.ConnectionFactoryPendingReceiver;

