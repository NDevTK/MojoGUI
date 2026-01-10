// Auto-generated MojoJS binding
// Source: chromium_src/components/device_signals/core/common/mojom/system_signals.mojom
// Module: device_signals.mojom

'use strict';

// Module namespace
var device_signals = device_signals || {};
device_signals.mojom = device_signals.mojom || {};

device_signals.mojom.PresenceValueSpec = { $: mojo.internal.Enum() };
device_signals.mojom.AntiVirusProductStateSpec = { $: mojo.internal.Enum() };
device_signals.mojom.ExecutableMetadataSpec = { $: {} };
device_signals.mojom.FileSystemItemSpec = { $: {} };
device_signals.mojom.FileSystemItemRequestSpec = { $: {} };
device_signals.mojom.AntiVirusSignalSpec = { $: {} };
device_signals.mojom.HotfixSignalSpec = { $: {} };
device_signals.mojom.SystemSignalsService = {};
device_signals.mojom.SystemSignalsService.$interfaceName = 'device_signals.mojom.SystemSignalsService';
device_signals.mojom.SystemSignalsService_GetFileSystemSignals_ParamsSpec = { $: {} };
device_signals.mojom.SystemSignalsService_GetFileSystemSignals_ResponseParamsSpec = { $: {} };
device_signals.mojom.SystemSignalsService_GetAntiVirusSignals_ParamsSpec = { $: {} };
device_signals.mojom.SystemSignalsService_GetAntiVirusSignals_ResponseParamsSpec = { $: {} };
device_signals.mojom.SystemSignalsService_GetHotfixSignals_ParamsSpec = { $: {} };
device_signals.mojom.SystemSignalsService_GetHotfixSignals_ResponseParamsSpec = { $: {} };

// Enum: PresenceValue
device_signals.mojom.PresenceValue = {
  kUnspecified: 0,
  kAccessDenied: 1,
  kNotFound: 2,
  kFound: 3,
};

// Enum: AntiVirusProductState
device_signals.mojom.AntiVirusProductState = {
  kOn: 0,
  kOff: 1,
  kSnoozed: 2,
  kExpired: 3,
};

// Struct: ExecutableMetadata
mojo.internal.Struct(
    device_signals.mojom.ExecutableMetadataSpec, 'device_signals.mojom.ExecutableMetadata', [
      mojo.internal.StructField('is_running', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('public_keys_hashes', 8, 0, mojo.internal.Array(mojo_base.mojom.ByteStringSpec, false), null, true, 0, undefined),
      mojo.internal.StructField('product_name', 16, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('version', 24, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('is_os_verified', 32, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('subject_name', 40, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 56]]);

// Struct: FileSystemItem
mojo.internal.Struct(
    device_signals.mojom.FileSystemItemSpec, 'device_signals.mojom.FileSystemItem', [
      mojo.internal.StructField('file_path', 0, 0, mojo_base.mojom.FilePathSpec, null, false, 0, undefined),
      mojo.internal.StructField('presence', 8, 0, device_signals.mojom.PresenceValueSpec, null, false, 0, undefined),
      mojo.internal.StructField('sha256_hash', 16, 0, mojo_base.mojom.ByteStringSpec, null, true, 0, undefined),
      mojo.internal.StructField('executable_metadata', 24, 0, device_signals.mojom.ExecutableMetadataSpec, null, true, 0, undefined),
    ],
    [[0, 40]]);

// Struct: FileSystemItemRequest
mojo.internal.Struct(
    device_signals.mojom.FileSystemItemRequestSpec, 'device_signals.mojom.FileSystemItemRequest', [
      mojo.internal.StructField('file_path', 0, 0, mojo_base.mojom.FilePathSpec, null, false, 0, undefined),
      mojo.internal.StructField('compute_sha256', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('compute_executable_metadata', 8, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: AntiVirusSignal
mojo.internal.Struct(
    device_signals.mojom.AntiVirusSignalSpec, 'device_signals.mojom.AntiVirusSignal', [
      mojo.internal.StructField('display_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('state', 8, 0, device_signals.mojom.AntiVirusProductStateSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: HotfixSignal
mojo.internal.Struct(
    device_signals.mojom.HotfixSignalSpec, 'device_signals.mojom.HotfixSignal', [
      mojo.internal.StructField('hotfix_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Interface: SystemSignalsService
mojo.internal.Struct(
    device_signals.mojom.SystemSignalsService_GetFileSystemSignals_ParamsSpec, 'device_signals.mojom.SystemSignalsService_GetFileSystemSignals_Params', [
      mojo.internal.StructField('requests', 0, 0, mojo.internal.Array(device_signals.mojom.FileSystemItemRequestSpec, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    device_signals.mojom.SystemSignalsService_GetFileSystemSignals_ResponseParamsSpec, 'device_signals.mojom.SystemSignalsService_GetFileSystemSignals_ResponseParams', [
      mojo.internal.StructField('items', 0, 0, mojo.internal.Array(device_signals.mojom.FileSystemItemSpec, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    device_signals.mojom.SystemSignalsService_GetAntiVirusSignals_ParamsSpec, 'device_signals.mojom.SystemSignalsService_GetAntiVirusSignals_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    device_signals.mojom.SystemSignalsService_GetAntiVirusSignals_ResponseParamsSpec, 'device_signals.mojom.SystemSignalsService_GetAntiVirusSignals_ResponseParams', [
      mojo.internal.StructField('av_signals', 0, 0, mojo.internal.Array(device_signals.mojom.AntiVirusSignalSpec, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    device_signals.mojom.SystemSignalsService_GetHotfixSignals_ParamsSpec, 'device_signals.mojom.SystemSignalsService_GetHotfixSignals_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    device_signals.mojom.SystemSignalsService_GetHotfixSignals_ResponseParamsSpec, 'device_signals.mojom.SystemSignalsService_GetHotfixSignals_ResponseParams', [
      mojo.internal.StructField('hotfix_signals', 0, 0, mojo.internal.Array(device_signals.mojom.HotfixSignalSpec, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

device_signals.mojom.SystemSignalsServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

device_signals.mojom.SystemSignalsServiceRemote = class {
  static get $interfaceName() {
    return 'device_signals.mojom.SystemSignalsService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      device_signals.mojom.SystemSignalsServicePendingReceiver,
      handle);
    this.$ = new device_signals.mojom.SystemSignalsServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

device_signals.mojom.SystemSignalsServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getFileSystemSignals(requests) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      device_signals.mojom.SystemSignalsService_GetFileSystemSignals_ParamsSpec,
      device_signals.mojom.SystemSignalsService_GetFileSystemSignals_ResponseParamsSpec,
      [requests]);
  }

  getAntiVirusSignals() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      device_signals.mojom.SystemSignalsService_GetAntiVirusSignals_ParamsSpec,
      device_signals.mojom.SystemSignalsService_GetAntiVirusSignals_ResponseParamsSpec,
      []);
  }

  getHotfixSignals() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      device_signals.mojom.SystemSignalsService_GetHotfixSignals_ParamsSpec,
      device_signals.mojom.SystemSignalsService_GetHotfixSignals_ResponseParamsSpec,
      []);
  }

};

device_signals.mojom.SystemSignalsService.getRemote = function() {
  let remote = new device_signals.mojom.SystemSignalsServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'device_signals.mojom.SystemSignalsService',
    'context');
  return remote.$;
};

device_signals.mojom.SystemSignalsServicePtr = device_signals.mojom.SystemSignalsServiceRemote;
device_signals.mojom.SystemSignalsServiceRequest = device_signals.mojom.SystemSignalsServicePendingReceiver;

