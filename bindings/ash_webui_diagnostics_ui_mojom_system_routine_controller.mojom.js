// Auto-generated MojoJS binding
// Source: chromium_src/ash/webui/diagnostics_ui/mojom/system_routine_controller.mojom
// Module: ash.diagnostics.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.diagnostics = ash.diagnostics || {};
ash.diagnostics.mojom = ash.diagnostics.mojom || {};


// Enum: RoutineType
ash.diagnostics.mojom.RoutineType = {
  kBatteryCharge: 0,
  kBatteryDischarge: 1,
  kCpuCache: 2,
  kCpuStress: 3,
  kCpuFloatingPoint: 4,
  kCpuPrime: 5,
  kMemory: 6,
  kLanConnectivity: 7,
  kSignalStrength: 8,
  kGatewayCanBePinged: 9,
  kHasSecureWiFiConnection: 10,
  kDnsResolverPresent: 11,
  kDnsLatency: 12,
  kDnsResolution: 13,
  kCaptivePortal: 14,
  kHttpFirewall: 15,
  kHttpsFirewall: 16,
  kHttpsLatency: 17,
  kArcHttp: 18,
  kArcPing: 19,
  kArcDnsResolution: 20,
};

// Enum: StandardRoutineResult
ash.diagnostics.mojom.StandardRoutineResult = {
  kTestPassed: 0,
  kTestFailed: 1,
  kExecutionError: 2,
  kUnableToRun: 3,
};

// Interface: RoutineRunner
ash.diagnostics.mojom.RoutineRunner = {};

ash.diagnostics.mojom.RoutineRunnerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.diagnostics.mojom.RoutineRunnerRemote = class {
  static get $interfaceName() {
    return 'ash.diagnostics.mojom.RoutineRunner';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.diagnostics.mojom.RoutineRunnerPendingReceiver,
      handle);
    this.$ = new ash.diagnostics.mojom.RoutineRunnerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.diagnostics.mojom.RoutineRunnerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onRoutineResult(info) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.diagnostics.mojom.RoutineRunner_OnRoutineResult_ParamsSpec,
      null,
      [info]);
  }

};

ash.diagnostics.mojom.RoutineRunner.getRemote = function() {
  let remote = new ash.diagnostics.mojom.RoutineRunnerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.diagnostics.mojom.RoutineRunner',
    'context');
  return remote.$;
};

// ParamsSpec for OnRoutineResult
ash.diagnostics.mojom.RoutineRunner_OnRoutineResult_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.diagnostics.mojom.RoutineRunner.OnRoutineResult_Params',
      packedSize: 16,
      fields: [
        { name: 'info', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
ash.diagnostics.mojom.RoutineRunnerPtr = ash.diagnostics.mojom.RoutineRunnerRemote;
ash.diagnostics.mojom.RoutineRunnerRequest = ash.diagnostics.mojom.RoutineRunnerPendingReceiver;


// Interface: SystemRoutineController
ash.diagnostics.mojom.SystemRoutineController = {};

ash.diagnostics.mojom.SystemRoutineControllerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.diagnostics.mojom.SystemRoutineControllerRemote = class {
  static get $interfaceName() {
    return 'ash.diagnostics.mojom.SystemRoutineController';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.diagnostics.mojom.SystemRoutineControllerPendingReceiver,
      handle);
    this.$ = new ash.diagnostics.mojom.SystemRoutineControllerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.diagnostics.mojom.SystemRoutineControllerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getSupportedRoutines() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.diagnostics.mojom.SystemRoutineController_GetSupportedRoutines_ParamsSpec,
      ash.diagnostics.mojom.SystemRoutineController_GetSupportedRoutines_ResponseParamsSpec,
      []);
  }

  runRoutine(type, runner) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.diagnostics.mojom.SystemRoutineController_RunRoutine_ParamsSpec,
      null,
      [type, runner]);
  }

};

ash.diagnostics.mojom.SystemRoutineController.getRemote = function() {
  let remote = new ash.diagnostics.mojom.SystemRoutineControllerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.diagnostics.mojom.SystemRoutineController',
    'context');
  return remote.$;
};

// ParamsSpec for GetSupportedRoutines
ash.diagnostics.mojom.SystemRoutineController_GetSupportedRoutines_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.diagnostics.mojom.SystemRoutineController.GetSupportedRoutines_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

ash.diagnostics.mojom.SystemRoutineController_GetSupportedRoutines_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.diagnostics.mojom.SystemRoutineController.GetSupportedRoutines_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'routines', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for RunRoutine
ash.diagnostics.mojom.SystemRoutineController_RunRoutine_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.diagnostics.mojom.SystemRoutineController.RunRoutine_Params',
      packedSize: 24,
      fields: [
        { name: 'type', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'runner', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
ash.diagnostics.mojom.SystemRoutineControllerPtr = ash.diagnostics.mojom.SystemRoutineControllerRemote;
ash.diagnostics.mojom.SystemRoutineControllerRequest = ash.diagnostics.mojom.SystemRoutineControllerPendingReceiver;

