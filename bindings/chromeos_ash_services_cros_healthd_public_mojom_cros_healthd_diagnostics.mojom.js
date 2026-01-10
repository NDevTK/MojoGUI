// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/services/cros_healthd/public/mojom/cros_healthd_diagnostics.mojom
// Module: ash.cros_healthd.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.cros_healthd = ash.cros_healthd || {};
ash.cros_healthd.mojom = ash.cros_healthd.mojom || {};

ash.cros_healthd.mojom.DiagnosticRoutineEnumSpec = { $: mojo.internal.Enum() };
ash.cros_healthd.mojom.DiskReadRoutineTypeEnumSpec = { $: mojo.internal.Enum() };
ash.cros_healthd.mojom.DiagnosticRoutineStatusEnumSpec = { $: mojo.internal.Enum() };
ash.cros_healthd.mojom.DiagnosticRoutineUserMessageEnumSpec = { $: mojo.internal.Enum() };
ash.cros_healthd.mojom.DiagnosticRoutineCommandEnumSpec = { $: mojo.internal.Enum() };
ash.cros_healthd.mojom.AcPowerStatusEnumSpec = { $: mojo.internal.Enum() };
ash.cros_healthd.mojom.NvmeSelfTestTypeEnumSpec = { $: mojo.internal.Enum() };
ash.cros_healthd.mojom.DEPRECATED_LedNameSpec = { $: mojo.internal.Enum() };
ash.cros_healthd.mojom.DEPRECATED_LedColorSpec = { $: mojo.internal.Enum() };
ash.cros_healthd.mojom.RoutineUpdateUnionSpec = { $: {} };
ash.cros_healthd.mojom.RunRoutineResponseSpec = { $: {} };
ash.cros_healthd.mojom.InteractiveRoutineUpdateSpec = { $: {} };
ash.cros_healthd.mojom.NonInteractiveRoutineUpdateSpec = { $: {} };
ash.cros_healthd.mojom.RoutineUpdateSpec = { $: {} };
ash.cros_healthd.mojom.DEPRECATED_LedLitUpRoutineReplier = {};
ash.cros_healthd.mojom.DEPRECATED_LedLitUpRoutineReplier.$interfaceName = 'ash.cros_healthd.mojom.DEPRECATED_LedLitUpRoutineReplier';
ash.cros_healthd.mojom.DEPRECATED_LedLitUpRoutineReplier_GetColorMatched_ParamsSpec = { $: {} };
ash.cros_healthd.mojom.DEPRECATED_LedLitUpRoutineReplier_GetColorMatched_ResponseParamsSpec = { $: {} };

ash.cros_healthd.mojom.kFailedToStartId = 0;

// Enum: DiagnosticRoutineEnum
ash.cros_healthd.mojom.DiagnosticRoutineEnum = {
  kUnknown: 30,
  kBatteryCapacity: 0,
  kBatteryHealth: 1,
  kUrandom: 2,
  kSmartctlCheck: 3,
  kAcPower: 4,
  kCpuCache: 5,
  kCpuStress: 6,
  kFloatingPointAccuracy: 7,
  DEPRECATED_kNvmeWearLevel: 8,
  kNvmeSelfTest: 9,
  kDiskRead: 10,
  kPrimeSearch: 11,
  kBatteryDischarge: 12,
  kBatteryCharge: 13,
  kMemory: 14,
  kLanConnectivity: 15,
  kSignalStrength: 16,
  kGatewayCanBePinged: 17,
  kHasSecureWiFiConnection: 18,
  kDnsResolverPresent: 19,
  kDnsLatency: 20,
  kDnsResolution: 21,
  kCaptivePortal: 22,
  kHttpFirewall: 23,
  kHttpsFirewall: 24,
  kHttpsLatency: 25,
  kVideoConferencing: 26,
  kArcHttp: 27,
  kArcPing: 28,
  kArcDnsResolution: 29,
  MinVersion: 29,
  MinVersion: 29,
  MinVersion: 29,
  MinVersion: 29,
  MinVersion: 29,
  MinVersion: 29,
  MinVersion: 29,
  MinVersion: 29,
  MinVersion: 29,
  MinVersion: 29,
  MinVersion: 29,
  MinVersion: 29,
  MinVersion: 29,
  MinVersion: 29,
  MinVersion: 29,
  MinVersion: 29,
  MinVersion: 29,
};

// Enum: DiskReadRoutineTypeEnum
ash.cros_healthd.mojom.DiskReadRoutineTypeEnum = {
  kUnmappedEnumField: 2,
  kLinearRead: 0,
  kRandomRead: 1,
};

// Enum: DiagnosticRoutineStatusEnum
ash.cros_healthd.mojom.DiagnosticRoutineStatusEnum = {
  kUnknown: 12,
  kReady: 0,
  kRunning: 1,
  kWaiting: 2,
  kPassed: 3,
  kFailed: 4,
  kError: 5,
  kCancelled: 6,
  kFailedToStart: 7,
  kRemoved: 8,
  kCancelling: 9,
  kUnsupported: 10,
  kNotRun: 11,
};

// Enum: DiagnosticRoutineUserMessageEnum
ash.cros_healthd.mojom.DiagnosticRoutineUserMessageEnum = {
  kUnknown: 2,
  kUnplugACPower: 0,
  kPlugInACPower: 1,
  MinVersion: 1,
  MinVersion: 1,
};

// Enum: DiagnosticRoutineCommandEnum
ash.cros_healthd.mojom.DiagnosticRoutineCommandEnum = {
  kUnknown: 4,
  kContinue: 0,
  kCancel: 1,
  kGetStatus: 2,
  kRemove: 3,
};

// Enum: AcPowerStatusEnum
ash.cros_healthd.mojom.AcPowerStatusEnum = {
  kUnknown: 2,
  kConnected: 0,
  kDisconnected: 1,
};

// Enum: NvmeSelfTestTypeEnum
ash.cros_healthd.mojom.NvmeSelfTestTypeEnum = {
  kUnknown: 2,
  kShortSelfTest: 0,
  kLongSelfTest: 1,
};

// Enum: DEPRECATED_LedName
ash.cros_healthd.mojom.DEPRECATED_LedName = {
  kUnmappedEnumField: 0,
  kBattery: 1,
  kPower: 2,
  kAdapter: 3,
  kLeft: 4,
  kRight: 5,
};

// Enum: DEPRECATED_LedColor
ash.cros_healthd.mojom.DEPRECATED_LedColor = {
  kUnmappedEnumField: 0,
  kRed: 1,
  kGreen: 2,
  kBlue: 3,
  kYellow: 4,
  kWhite: 5,
  kAmber: 6,
};

// Union: RoutineUpdateUnion
mojo.internal.Union(
    ash.cros_healthd.mojom.RoutineUpdateUnionSpec, 'ash.cros_healthd.mojom.RoutineUpdateUnion', {
      'interactive_update': {
        'ordinal': 0,
        'type': ash.cros_healthd.mojom.InteractiveRoutineUpdateSpec.$,
        'nullable': false,
      },
      'noninteractive_update': {
        'ordinal': 1,
        'type': ash.cros_healthd.mojom.NonInteractiveRoutineUpdateSpec.$,
        'nullable': false,
      },
    });

// Struct: RunRoutineResponse
mojo.internal.Struct(
    ash.cros_healthd.mojom.RunRoutineResponseSpec, 'ash.cros_healthd.mojom.RunRoutineResponse', [
      mojo.internal.StructField('status', 0, 0, ash.cros_healthd.mojom.DiagnosticRoutineStatusEnumSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('id', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: InteractiveRoutineUpdate
mojo.internal.Struct(
    ash.cros_healthd.mojom.InteractiveRoutineUpdateSpec, 'ash.cros_healthd.mojom.InteractiveRoutineUpdate', [
      mojo.internal.StructField('user_message', 0, 0, ash.cros_healthd.mojom.DiagnosticRoutineUserMessageEnumSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: NonInteractiveRoutineUpdate
mojo.internal.Struct(
    ash.cros_healthd.mojom.NonInteractiveRoutineUpdateSpec, 'ash.cros_healthd.mojom.NonInteractiveRoutineUpdate', [
      mojo.internal.StructField('status', 0, 0, ash.cros_healthd.mojom.DiagnosticRoutineStatusEnumSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('status_message', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: RoutineUpdate
mojo.internal.Struct(
    ash.cros_healthd.mojom.RoutineUpdateSpec, 'ash.cros_healthd.mojom.RoutineUpdate', [
      mojo.internal.StructField('routine_update_union', 0, 0, ash.cros_healthd.mojom.RoutineUpdateUnionSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('progress_percent', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('output', 12, 0, mojo.internal.Handle, null, true, 0, undefined),
    ],
    [[0, 24]]);

// Interface: DEPRECATED_LedLitUpRoutineReplier
mojo.internal.Struct(
    ash.cros_healthd.mojom.DEPRECATED_LedLitUpRoutineReplier_GetColorMatched_ParamsSpec, 'ash.cros_healthd.mojom.DEPRECATED_LedLitUpRoutineReplier_GetColorMatched_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.cros_healthd.mojom.DEPRECATED_LedLitUpRoutineReplier_GetColorMatched_ResponseParamsSpec, 'ash.cros_healthd.mojom.DEPRECATED_LedLitUpRoutineReplier_GetColorMatched_ResponseParams', [
      mojo.internal.StructField('matched', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

ash.cros_healthd.mojom.DEPRECATED_LedLitUpRoutineReplierPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.cros_healthd.mojom.DEPRECATED_LedLitUpRoutineReplierRemote = class {
  static get $interfaceName() {
    return 'ash.cros_healthd.mojom.DEPRECATED_LedLitUpRoutineReplier';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.cros_healthd.mojom.DEPRECATED_LedLitUpRoutineReplierPendingReceiver,
      handle);
    this.$ = new ash.cros_healthd.mojom.DEPRECATED_LedLitUpRoutineReplierRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.cros_healthd.mojom.DEPRECATED_LedLitUpRoutineReplierRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getColorMatched() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.cros_healthd.mojom.DEPRECATED_LedLitUpRoutineReplier_GetColorMatched_ParamsSpec,
      ash.cros_healthd.mojom.DEPRECATED_LedLitUpRoutineReplier_GetColorMatched_ResponseParamsSpec,
      [],
      false);
  }

};

ash.cros_healthd.mojom.DEPRECATED_LedLitUpRoutineReplier.getRemote = function() {
  let remote = new ash.cros_healthd.mojom.DEPRECATED_LedLitUpRoutineReplierRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.cros_healthd.mojom.DEPRECATED_LedLitUpRoutineReplier',
    'context');
  return remote.$;
};

ash.cros_healthd.mojom.DEPRECATED_LedLitUpRoutineReplierReceiver = class {
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
          const params = ash.cros_healthd.mojom.DEPRECATED_LedLitUpRoutineReplier_GetColorMatched_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getColorMatched();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.cros_healthd.mojom.DEPRECATED_LedLitUpRoutineReplier_GetColorMatched_ResponseParamsSpec);
               responder(response);
            }});
          }
          break;
        }
      }
    });
  }
};

ash.cros_healthd.mojom.DEPRECATED_LedLitUpRoutineReplierReceiver = ash.cros_healthd.mojom.DEPRECATED_LedLitUpRoutineReplierReceiver;

ash.cros_healthd.mojom.DEPRECATED_LedLitUpRoutineReplierPtr = ash.cros_healthd.mojom.DEPRECATED_LedLitUpRoutineReplierRemote;
ash.cros_healthd.mojom.DEPRECATED_LedLitUpRoutineReplierRequest = ash.cros_healthd.mojom.DEPRECATED_LedLitUpRoutineReplierPendingReceiver;

