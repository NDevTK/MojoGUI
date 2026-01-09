// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/services/cros_healthd/public/mojom/cros_healthd.mojom
// Module: ash.cros_healthd.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.cros_healthd = ash.cros_healthd || {};
ash.cros_healthd.mojom = ash.cros_healthd.mojom || {};


// Interface: CrosHealthdDiagnosticsService
ash.cros_healthd.mojom.CrosHealthdDiagnosticsService = {};

ash.cros_healthd.mojom.CrosHealthdDiagnosticsServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.cros_healthd.mojom.CrosHealthdDiagnosticsServiceRemote = class {
  static get $interfaceName() {
    return 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsServicePendingReceiver,
      handle);
    this.$ = new ash.cros_healthd.mojom.CrosHealthdDiagnosticsServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.cros_healthd.mojom.CrosHealthdDiagnosticsServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

ash.cros_healthd.mojom.CrosHealthdDiagnosticsService.getRemote = function() {
  let remote = new ash.cros_healthd.mojom.CrosHealthdDiagnosticsServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService',
    'context');
  return remote.$;
};

// Legacy compatibility
ash.cros_healthd.mojom.CrosHealthdDiagnosticsServicePtr = ash.cros_healthd.mojom.CrosHealthdDiagnosticsServiceRemote;
ash.cros_healthd.mojom.CrosHealthdDiagnosticsServiceRequest = ash.cros_healthd.mojom.CrosHealthdDiagnosticsServicePendingReceiver;


// Interface: CrosHealthdEventService
ash.cros_healthd.mojom.CrosHealthdEventService = {};

ash.cros_healthd.mojom.CrosHealthdEventServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.cros_healthd.mojom.CrosHealthdEventServiceRemote = class {
  static get $interfaceName() {
    return 'ash.cros_healthd.mojom.CrosHealthdEventService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.cros_healthd.mojom.CrosHealthdEventServicePendingReceiver,
      handle);
    this.$ = new ash.cros_healthd.mojom.CrosHealthdEventServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.cros_healthd.mojom.CrosHealthdEventServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

ash.cros_healthd.mojom.CrosHealthdEventService.getRemote = function() {
  let remote = new ash.cros_healthd.mojom.CrosHealthdEventServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.cros_healthd.mojom.CrosHealthdEventService',
    'context');
  return remote.$;
};

// Legacy compatibility
ash.cros_healthd.mojom.CrosHealthdEventServicePtr = ash.cros_healthd.mojom.CrosHealthdEventServiceRemote;
ash.cros_healthd.mojom.CrosHealthdEventServiceRequest = ash.cros_healthd.mojom.CrosHealthdEventServicePendingReceiver;


// Interface: CrosHealthdProbeService
ash.cros_healthd.mojom.CrosHealthdProbeService = {};

ash.cros_healthd.mojom.CrosHealthdProbeServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.cros_healthd.mojom.CrosHealthdProbeServiceRemote = class {
  static get $interfaceName() {
    return 'ash.cros_healthd.mojom.CrosHealthdProbeService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.cros_healthd.mojom.CrosHealthdProbeServicePendingReceiver,
      handle);
    this.$ = new ash.cros_healthd.mojom.CrosHealthdProbeServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.cros_healthd.mojom.CrosHealthdProbeServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

ash.cros_healthd.mojom.CrosHealthdProbeService.getRemote = function() {
  let remote = new ash.cros_healthd.mojom.CrosHealthdProbeServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.cros_healthd.mojom.CrosHealthdProbeService',
    'context');
  return remote.$;
};

// Legacy compatibility
ash.cros_healthd.mojom.CrosHealthdProbeServicePtr = ash.cros_healthd.mojom.CrosHealthdProbeServiceRemote;
ash.cros_healthd.mojom.CrosHealthdProbeServiceRequest = ash.cros_healthd.mojom.CrosHealthdProbeServicePendingReceiver;

