// Auto-generated MojoJS binding
// Source: chromium_src/ash/webui/diagnostics_ui/mojom/system_routine_controller.mojom
// Module: ash.diagnostics.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.diagnostics = ash.diagnostics || {};
ash.diagnostics.diagnostics.mojom = ash.diagnostics.diagnostics.mojom || {};


// Enum: RoutineType
ash.diagnostics.diagnostics.mojom.mojom.RoutineType = {
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
ash.diagnostics.diagnostics.mojom.mojom.RoutineTypeSpec = { $: mojo.internal.Enum() };

// Enum: StandardRoutineResult
ash.diagnostics.diagnostics.mojom.mojom.StandardRoutineResult = {
  kTestPassed: 0,
  kTestFailed: 1,
  kExecutionError: 2,
  kUnableToRun: 3,
};
ash.diagnostics.diagnostics.mojom.mojom.StandardRoutineResultSpec = { $: mojo.internal.Enum() };

// Union: RoutineResult
ash.diagnostics.diagnostics.mojom.mojom.RoutineResultSpec = { $: mojo.internal.Union(
    'ash.diagnostics.mojom.RoutineResult', {
      'simple_result': {
        'ordinal': 0,
        'type': ash.diagnostics.mojom.StandardRoutineResultSpec,
      }},
      'power_result': {
        'ordinal': 1,
        'type': ash.diagnostics.mojom.PowerRoutineResultSpec,
      }},
    })
};

// Struct: PowerRoutineResult
ash.diagnostics.diagnostics.mojom.mojom.PowerRoutineResultSpec = {
  $: {
    structSpec: {
      name: 'ash.diagnostics.mojom.PowerRoutineResult',
      packedSize: 24,
      fields: [
        { name: 'simple_result', packedOffset: 8, packedBitOffset: 0, type: ash.diagnostics.mojom.StandardRoutineResultSpec, nullable: false, minVersion: 0 },
        { name: 'percent_change', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Double, nullable: false, minVersion: 0 },
        { name: 'time_elapsed_seconds', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: RoutineResultInfo
ash.diagnostics.diagnostics.mojom.mojom.RoutineResultInfoSpec = {
  $: {
    structSpec: {
      name: 'ash.diagnostics.mojom.RoutineResultInfo',
      packedSize: 32,
      fields: [
        { name: 'type', packedOffset: 16, packedBitOffset: 0, type: ash.diagnostics.mojom.RoutineTypeSpec, nullable: false, minVersion: 0 },
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: ash.diagnostics.mojom.RoutineResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Interface: RoutineRunner
ash.diagnostics.diagnostics.mojom.mojom.RoutineRunner = {};

ash.diagnostics.diagnostics.mojom.mojom.RoutineRunnerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.diagnostics.diagnostics.mojom.mojom.RoutineRunnerRemote = class {
  static get $interfaceName() {
    return 'ash.diagnostics.mojom.RoutineRunner';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.diagnostics.diagnostics.mojom.mojom.RoutineRunnerPendingReceiver,
      handle);
    this.$ = new ash.diagnostics.diagnostics.mojom.mojom.RoutineRunnerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.diagnostics.diagnostics.mojom.mojom.RoutineRunnerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onRoutineResult(info) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.diagnostics.diagnostics.mojom.mojom.RoutineRunner_OnRoutineResult_ParamsSpec,
      null,
      [info]);
  }

};

ash.diagnostics.diagnostics.mojom.mojom.RoutineRunner.getRemote = function() {
  let remote = new ash.diagnostics.diagnostics.mojom.mojom.RoutineRunnerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.diagnostics.mojom.RoutineRunner',
    'context');
  return remote.$;
};

// ParamsSpec for OnRoutineResult
ash.diagnostics.diagnostics.mojom.mojom.RoutineRunner_OnRoutineResult_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.diagnostics.mojom.RoutineRunner.OnRoutineResult_Params',
      packedSize: 16,
      fields: [
        { name: 'info', packedOffset: 0, packedBitOffset: 0, type: ash.diagnostics.mojom.RoutineResultInfoSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
ash.diagnostics.diagnostics.mojom.mojom.RoutineRunnerPtr = ash.diagnostics.diagnostics.mojom.mojom.RoutineRunnerRemote;
ash.diagnostics.diagnostics.mojom.mojom.RoutineRunnerRequest = ash.diagnostics.diagnostics.mojom.mojom.RoutineRunnerPendingReceiver;


// Interface: SystemRoutineController
ash.diagnostics.diagnostics.mojom.mojom.SystemRoutineController = {};

ash.diagnostics.diagnostics.mojom.mojom.SystemRoutineControllerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.diagnostics.diagnostics.mojom.mojom.SystemRoutineControllerRemote = class {
  static get $interfaceName() {
    return 'ash.diagnostics.mojom.SystemRoutineController';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.diagnostics.diagnostics.mojom.mojom.SystemRoutineControllerPendingReceiver,
      handle);
    this.$ = new ash.diagnostics.diagnostics.mojom.mojom.SystemRoutineControllerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.diagnostics.diagnostics.mojom.mojom.SystemRoutineControllerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getSupportedRoutines() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.diagnostics.diagnostics.mojom.mojom.SystemRoutineController_GetSupportedRoutines_ParamsSpec,
      ash.diagnostics.diagnostics.mojom.mojom.SystemRoutineController_GetSupportedRoutines_ResponseParamsSpec,
      []);
  }

  runRoutine(type, runner) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.diagnostics.diagnostics.mojom.mojom.SystemRoutineController_RunRoutine_ParamsSpec,
      null,
      [type, runner]);
  }

};

ash.diagnostics.diagnostics.mojom.mojom.SystemRoutineController.getRemote = function() {
  let remote = new ash.diagnostics.diagnostics.mojom.mojom.SystemRoutineControllerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.diagnostics.mojom.SystemRoutineController',
    'context');
  return remote.$;
};

// ParamsSpec for GetSupportedRoutines
ash.diagnostics.diagnostics.mojom.mojom.SystemRoutineController_GetSupportedRoutines_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.diagnostics.mojom.SystemRoutineController.GetSupportedRoutines_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.diagnostics.diagnostics.mojom.mojom.SystemRoutineController_GetSupportedRoutines_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.diagnostics.mojom.SystemRoutineController.GetSupportedRoutines_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'routines', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(ash.diagnostics.mojom.RoutineTypeSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for RunRoutine
ash.diagnostics.diagnostics.mojom.mojom.SystemRoutineController_RunRoutine_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.diagnostics.mojom.SystemRoutineController.RunRoutine_Params',
      packedSize: 16,
      fields: [
        { name: 'type', packedOffset: 0, packedBitOffset: 0, type: ash.diagnostics.mojom.RoutineTypeSpec, nullable: false, minVersion: 0 },
        { name: 'runner', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
ash.diagnostics.diagnostics.mojom.mojom.SystemRoutineControllerPtr = ash.diagnostics.diagnostics.mojom.mojom.SystemRoutineControllerRemote;
ash.diagnostics.diagnostics.mojom.mojom.SystemRoutineControllerRequest = ash.diagnostics.diagnostics.mojom.mojom.SystemRoutineControllerPendingReceiver;

