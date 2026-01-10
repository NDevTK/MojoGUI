// Auto-generated MojoJS binding
// Source: chromium_src/ash/webui/diagnostics_ui/mojom/system_routine_controller.mojom
// Module: ash.diagnostics.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.diagnostics = ash.diagnostics || {};
ash.diagnostics.mojom = ash.diagnostics.mojom || {};

ash.diagnostics.mojom.RoutineTypeSpec = { $: mojo.internal.Enum() };
ash.diagnostics.mojom.StandardRoutineResultSpec = { $: mojo.internal.Enum() };
ash.diagnostics.mojom.RoutineResultSpec = { $: {} };
ash.diagnostics.mojom.PowerRoutineResultSpec = { $: {} };
ash.diagnostics.mojom.RoutineResultInfoSpec = { $: {} };
ash.diagnostics.mojom.RoutineRunner = {};
ash.diagnostics.mojom.RoutineRunner.$interfaceName = 'ash.diagnostics.mojom.RoutineRunner';
ash.diagnostics.mojom.RoutineRunner_OnRoutineResult_ParamsSpec = { $: {} };
ash.diagnostics.mojom.SystemRoutineController = {};
ash.diagnostics.mojom.SystemRoutineController.$interfaceName = 'ash.diagnostics.mojom.SystemRoutineController';
ash.diagnostics.mojom.SystemRoutineController_GetSupportedRoutines_ParamsSpec = { $: {} };
ash.diagnostics.mojom.SystemRoutineController_GetSupportedRoutines_ResponseParamsSpec = { $: {} };
ash.diagnostics.mojom.SystemRoutineController_RunRoutine_ParamsSpec = { $: {} };

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

// Union: RoutineResult
mojo.internal.Union(
    ash.diagnostics.mojom.RoutineResultSpec, 'ash.diagnostics.mojom.RoutineResult', {
      'simple_result': {
        'ordinal': 0,
        'type': ash.diagnostics.mojom.StandardRoutineResultSpec.$,
        'nullable': false,
      },
      'power_result': {
        'ordinal': 1,
        'type': ash.diagnostics.mojom.PowerRoutineResultSpec.$,
        'nullable': false,
      },
    });

// Struct: PowerRoutineResult
mojo.internal.Struct(
    ash.diagnostics.mojom.PowerRoutineResultSpec, 'ash.diagnostics.mojom.PowerRoutineResult', [
      mojo.internal.StructField('simple_result', 0, 0, ash.diagnostics.mojom.StandardRoutineResultSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('percent_change', 8, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('time_elapsed_seconds', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: RoutineResultInfo
mojo.internal.Struct(
    ash.diagnostics.mojom.RoutineResultInfoSpec, 'ash.diagnostics.mojom.RoutineResultInfo', [
      mojo.internal.StructField('type', 0, 0, ash.diagnostics.mojom.RoutineTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('result', 8, 0, ash.diagnostics.mojom.RoutineResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: RoutineRunner
mojo.internal.Struct(
    ash.diagnostics.mojom.RoutineRunner_OnRoutineResult_ParamsSpec, 'ash.diagnostics.mojom.RoutineRunner_OnRoutineResult_Params', [
      mojo.internal.StructField('info', 0, 0, ash.diagnostics.mojom.RoutineResultInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

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
      [info],
      false);
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

ash.diagnostics.mojom.RoutineRunnerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(handle);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = ash.diagnostics.mojom.RoutineRunner_OnRoutineResult_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onRoutineResult(params.info);
          break;
        }
      }
    });
  }
};

ash.diagnostics.mojom.RoutineRunnerReceiver = ash.diagnostics.mojom.RoutineRunnerReceiver;

ash.diagnostics.mojom.RoutineRunnerPtr = ash.diagnostics.mojom.RoutineRunnerRemote;
ash.diagnostics.mojom.RoutineRunnerRequest = ash.diagnostics.mojom.RoutineRunnerPendingReceiver;


// Interface: SystemRoutineController
mojo.internal.Struct(
    ash.diagnostics.mojom.SystemRoutineController_GetSupportedRoutines_ParamsSpec, 'ash.diagnostics.mojom.SystemRoutineController_GetSupportedRoutines_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.diagnostics.mojom.SystemRoutineController_GetSupportedRoutines_ResponseParamsSpec, 'ash.diagnostics.mojom.SystemRoutineController_GetSupportedRoutines_ResponseParams', [
      mojo.internal.StructField('routines', 0, 0, mojo.internal.Array(ash.diagnostics.mojom.RoutineTypeSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.diagnostics.mojom.SystemRoutineController_RunRoutine_ParamsSpec, 'ash.diagnostics.mojom.SystemRoutineController_RunRoutine_Params', [
      mojo.internal.StructField('type', 0, 0, ash.diagnostics.mojom.RoutineTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('runner', 8, 0, mojo.internal.InterfaceProxy(ash.diagnostics.mojom.RoutineRunnerSpec), null, false, 0, undefined),
    ],
    [[0, 24]]);

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
      [],
      false);
  }

  runRoutine(type, runner) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.diagnostics.mojom.SystemRoutineController_RunRoutine_ParamsSpec,
      null,
      [type, runner],
      false);
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

ash.diagnostics.mojom.SystemRoutineControllerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(handle);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = ash.diagnostics.mojom.SystemRoutineController_GetSupportedRoutines_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getSupportedRoutines();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(
                this.endpoint, header.requestId, ash.diagnostics.mojom.SystemRoutineController_GetSupportedRoutines_ResponseParamsSpec);
               responder(response);
            }});
          }
          break;
        }
        case 1: {
          const params = ash.diagnostics.mojom.SystemRoutineController_RunRoutine_ParamsSpec.$.decode(message.payload);
          const result = this.impl.runRoutine(params.type, params.runner);
          break;
        }
      }
    });
  }
};

ash.diagnostics.mojom.SystemRoutineControllerReceiver = ash.diagnostics.mojom.SystemRoutineControllerReceiver;

ash.diagnostics.mojom.SystemRoutineControllerPtr = ash.diagnostics.mojom.SystemRoutineControllerRemote;
ash.diagnostics.mojom.SystemRoutineControllerRequest = ash.diagnostics.mojom.SystemRoutineControllerPendingReceiver;

