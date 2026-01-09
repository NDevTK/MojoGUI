// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/services/cros_healthd/private/mojom/cros_healthd_internal.mojom
// Module: ash.cros_healthd.internal.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.cros_healthd = ash.cros_healthd || {};
ash.cros_healthd.internal = ash.cros_healthd.internal || {};
ash.cros_healthd.internal.mojom = ash.cros_healthd.internal.mojom || {};


// Enum: ConnectionType
ash.cros_healthd.internal.mojom.ConnectionType = {
  kInternal: 0,
  kUSB: 1,
  kBluetooth: 2,
  kUnknown: 3,
};

// Interface: ChromiumDataCollector
ash.cros_healthd.internal.mojom.ChromiumDataCollector = {};

ash.cros_healthd.internal.mojom.ChromiumDataCollectorPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.cros_healthd.internal.mojom.ChromiumDataCollectorRemote = class {
  static get $interfaceName() {
    return 'ash.cros_healthd.internal.mojom.ChromiumDataCollector';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.cros_healthd.internal.mojom.ChromiumDataCollectorPendingReceiver,
      handle);
    this.$ = new ash.cros_healthd.internal.mojom.ChromiumDataCollectorRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.cros_healthd.internal.mojom.ChromiumDataCollectorRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

ash.cros_healthd.internal.mojom.ChromiumDataCollector.getRemote = function() {
  let remote = new ash.cros_healthd.internal.mojom.ChromiumDataCollectorRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.cros_healthd.internal.mojom.ChromiumDataCollector',
    'context');
  return remote.$;
};

// Legacy compatibility
ash.cros_healthd.internal.mojom.ChromiumDataCollectorPtr = ash.cros_healthd.internal.mojom.ChromiumDataCollectorRemote;
ash.cros_healthd.internal.mojom.ChromiumDataCollectorRequest = ash.cros_healthd.internal.mojom.ChromiumDataCollectorPendingReceiver;

