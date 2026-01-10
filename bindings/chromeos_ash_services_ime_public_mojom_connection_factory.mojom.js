// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/services/ime/public/mojom/connection_factory.mojom
// Module: ash.ime.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.ime = ash.ime || {};
ash.ime.mojom = ash.ime.mojom || {};


// Interface: ConnectionFactory
ash.ime.mojom.ConnectionFactory = {};

ash.ime.mojom.ConnectionFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.ime.mojom.ConnectionFactoryRemote = class {
  static get $interfaceName() {
    return 'ash.ime.mojom.ConnectionFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.ime.mojom.ConnectionFactoryPendingReceiver,
      handle);
    this.$ = new ash.ime.mojom.ConnectionFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.ime.mojom.ConnectionFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  connectToInputMethod(ime_spec, input_method, input_method_host, settings) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.ime.mojom.ConnectionFactory_ConnectToInputMethod_ParamsSpec,
      ash.ime.mojom.ConnectionFactory_ConnectToInputMethod_ResponseParamsSpec,
      [ime_spec, input_method, input_method_host, settings]);
  }

  unused(unused) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.ime.mojom.ConnectionFactory_Unused_ParamsSpec,
      ash.ime.mojom.ConnectionFactory_Unused_ResponseParamsSpec,
      [unused]);
  }

};

ash.ime.mojom.ConnectionFactory.getRemote = function() {
  let remote = new ash.ime.mojom.ConnectionFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.ime.mojom.ConnectionFactory',
    'context');
  return remote.$;
};

// ParamsSpec for ConnectToInputMethod
ash.ime.mojom.ConnectionFactory_ConnectToInputMethod_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.ime.mojom.ConnectionFactory.ConnectToInputMethod_Params',
      packedSize: 40,
      fields: [
        { name: 'ime_spec', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'input_method', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.AssociatedInterfaceRequest, nullable: false, minVersion: 0 },
        { name: 'input_method_host', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.AssociatedInterfaceProxy, nullable: false, minVersion: 0 },
        { name: 'settings', packedOffset: 16, packedBitOffset: 0, type: ash.ime.mojom.InputMethodSettingsSpec, nullable: true, minVersion: 2 },
      ],
      versions: [{version: 0, packedSize: 24}, {version: 2, packedSize: 40}]
    }
  }
};

ash.ime.mojom.ConnectionFactory_ConnectToInputMethod_ResponseParamsSpec = {
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
ash.ime.mojom.ConnectionFactory_Unused_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.ime.mojom.ConnectionFactory.Unused_Params',
      packedSize: 16,
      fields: [
        { name: 'unused', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.AssociatedInterfaceRequest, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

ash.ime.mojom.ConnectionFactory_Unused_ResponseParamsSpec = {
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
ash.ime.mojom.ConnectionFactoryPtr = ash.ime.mojom.ConnectionFactoryRemote;
ash.ime.mojom.ConnectionFactoryRequest = ash.ime.mojom.ConnectionFactoryPendingReceiver;

