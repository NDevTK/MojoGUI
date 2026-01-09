// Auto-generated MojoJS binding
// Source: chromium_src/services/device/public/mojom/fingerprint.mojom
// Module: device.mojom

'use strict';

// Module namespace
var device = device || {};
device.mojom = device.mojom || {};


// Enum: ScanResult
device.mojom.ScanResult = {
  SUCCESS: 0,
  PARTIAL: 1,
  INSUFFICIENT: 2,
  SENSOR_DIRTY: 3,
  TOO_SLOW: 4,
  TOO_FAST: 5,
  IMMOBILE: 6,
  NO_MATCH: 7,
};

// Enum: FingerprintError
device.mojom.FingerprintError = {
  UNKNOWN: 0,
  HW_UNAVAILABLE: 1,
  UNABLE_TO_PROCESS: 2,
  TIMEOUT: 3,
  NO_SPACE: 4,
  CANCELED: 5,
  UNABLE_TO_REMOVE: 6,
  LOCKOUT: 7,
  NO_TEMPLATES: 8,
};

// Enum: BiometricType
device.mojom.BiometricType = {
  UNKNOWN: 0,
  FINGERPRINT: 1,
};

// Enum: BiometricsManagerStatus
device.mojom.BiometricsManagerStatus = {
  UNKNOWN: 0,
  INITIALIZED: 1,
};

// Interface: FingerprintObserver
device.mojom.FingerprintObserver = {};

device.mojom.FingerprintObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

device.mojom.FingerprintObserverRemote = class {
  static get $interfaceName() {
    return 'device.mojom.FingerprintObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      device.mojom.FingerprintObserverPendingReceiver,
      handle);
    this.$ = new device.mojom.FingerprintObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

device.mojom.FingerprintObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onRestarted() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      device.mojom.FingerprintObserver_OnRestarted_ParamsSpec,
      null,
      []);
  }

  onStatusChanged(status) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      device.mojom.FingerprintObserver_OnStatusChanged_ParamsSpec,
      null,
      [status]);
  }

  onEnrollScanDone(scan_result, is_complete, percent_complete) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      device.mojom.FingerprintObserver_OnEnrollScanDone_ParamsSpec,
      null,
      [scan_result, is_complete, percent_complete]);
  }

  onAuthScanDone(msg, matches) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      device.mojom.FingerprintObserver_OnAuthScanDone_ParamsSpec,
      null,
      [msg, matches]);
  }

  onSessionFailed() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      device.mojom.FingerprintObserver_OnSessionFailed_ParamsSpec,
      null,
      []);
  }

};

device.mojom.FingerprintObserver.getRemote = function() {
  let remote = new device.mojom.FingerprintObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'device.mojom.FingerprintObserver',
    'context');
  return remote.$;
};

// ParamsSpec for OnRestarted
device.mojom.FingerprintObserver_OnRestarted_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.FingerprintObserver.OnRestarted_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnStatusChanged
device.mojom.FingerprintObserver_OnStatusChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.FingerprintObserver.OnStatusChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: device.mojom.BiometricsManagerStatusSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnEnrollScanDone
device.mojom.FingerprintObserver_OnEnrollScanDone_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.FingerprintObserver.OnEnrollScanDone_Params',
      packedSize: 32,
      fields: [
        { name: 'scan_result', packedOffset: 0, packedBitOffset: 0, type: device.mojom.ScanResultSpec, nullable: false },
        { name: 'percent_complete', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'is_complete', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnAuthScanDone
device.mojom.FingerprintObserver_OnAuthScanDone_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.FingerprintObserver.OnAuthScanDone_Params',
      packedSize: 24,
      fields: [
        { name: 'msg', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'matches', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Map, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnSessionFailed
device.mojom.FingerprintObserver_OnSessionFailed_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.FingerprintObserver.OnSessionFailed_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
device.mojom.FingerprintObserverPtr = device.mojom.FingerprintObserverRemote;
device.mojom.FingerprintObserverRequest = device.mojom.FingerprintObserverPendingReceiver;


// Interface: Fingerprint
device.mojom.Fingerprint = {};

device.mojom.FingerprintPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

device.mojom.FingerprintRemote = class {
  static get $interfaceName() {
    return 'device.mojom.Fingerprint';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      device.mojom.FingerprintPendingReceiver,
      handle);
    this.$ = new device.mojom.FingerprintRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

device.mojom.FingerprintRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getRecordsForUser(user_id) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      device.mojom.Fingerprint_GetRecordsForUser_ParamsSpec,
      device.mojom.Fingerprint_GetRecordsForUser_ResponseParamsSpec,
      [user_id]);
  }

  startEnrollSession(user_id, label) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      device.mojom.Fingerprint_StartEnrollSession_ParamsSpec,
      null,
      [user_id, label]);
  }

  cancelCurrentEnrollSession() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      device.mojom.Fingerprint_CancelCurrentEnrollSession_ParamsSpec,
      device.mojom.Fingerprint_CancelCurrentEnrollSession_ResponseParamsSpec,
      []);
  }

  requestRecordLabel(record_path) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      device.mojom.Fingerprint_RequestRecordLabel_ParamsSpec,
      device.mojom.Fingerprint_RequestRecordLabel_ResponseParamsSpec,
      [record_path]);
  }

  setRecordLabel(record_path, new_label) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      device.mojom.Fingerprint_SetRecordLabel_ParamsSpec,
      device.mojom.Fingerprint_SetRecordLabel_ResponseParamsSpec,
      [record_path, new_label]);
  }

  removeRecord(record_path) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      device.mojom.Fingerprint_RemoveRecord_ParamsSpec,
      device.mojom.Fingerprint_RemoveRecord_ResponseParamsSpec,
      [record_path]);
  }

  startAuthSession() {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      device.mojom.Fingerprint_StartAuthSession_ParamsSpec,
      null,
      []);
  }

  endCurrentAuthSession() {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      device.mojom.Fingerprint_EndCurrentAuthSession_ParamsSpec,
      device.mojom.Fingerprint_EndCurrentAuthSession_ResponseParamsSpec,
      []);
  }

  destroyAllRecords() {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      device.mojom.Fingerprint_DestroyAllRecords_ParamsSpec,
      device.mojom.Fingerprint_DestroyAllRecords_ResponseParamsSpec,
      []);
  }

  addFingerprintObserver(observer) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      device.mojom.Fingerprint_AddFingerprintObserver_ParamsSpec,
      null,
      [observer]);
  }

  requestType() {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      device.mojom.Fingerprint_RequestType_ParamsSpec,
      device.mojom.Fingerprint_RequestType_ResponseParamsSpec,
      []);
  }

};

device.mojom.Fingerprint.getRemote = function() {
  let remote = new device.mojom.FingerprintRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'device.mojom.Fingerprint',
    'context');
  return remote.$;
};

// ParamsSpec for GetRecordsForUser
device.mojom.Fingerprint_GetRecordsForUser_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.Fingerprint.GetRecordsForUser_Params',
      packedSize: 16,
      fields: [
        { name: 'user_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

device.mojom.Fingerprint_GetRecordsForUser_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.Fingerprint.GetRecordsForUser_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'records', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Map, nullable: false },
        { name: 'success', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for StartEnrollSession
device.mojom.Fingerprint_StartEnrollSession_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.Fingerprint.StartEnrollSession_Params',
      packedSize: 24,
      fields: [
        { name: 'user_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'label', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for CancelCurrentEnrollSession
device.mojom.Fingerprint_CancelCurrentEnrollSession_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.Fingerprint.CancelCurrentEnrollSession_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

device.mojom.Fingerprint_CancelCurrentEnrollSession_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.Fingerprint.CancelCurrentEnrollSession_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for RequestRecordLabel
device.mojom.Fingerprint_RequestRecordLabel_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.Fingerprint.RequestRecordLabel_Params',
      packedSize: 16,
      fields: [
        { name: 'record_path', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

device.mojom.Fingerprint_RequestRecordLabel_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.Fingerprint.RequestRecordLabel_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'label', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetRecordLabel
device.mojom.Fingerprint_SetRecordLabel_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.Fingerprint.SetRecordLabel_Params',
      packedSize: 24,
      fields: [
        { name: 'record_path', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'new_label', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

device.mojom.Fingerprint_SetRecordLabel_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.Fingerprint.SetRecordLabel_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for RemoveRecord
device.mojom.Fingerprint_RemoveRecord_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.Fingerprint.RemoveRecord_Params',
      packedSize: 16,
      fields: [
        { name: 'record_path', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

device.mojom.Fingerprint_RemoveRecord_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.Fingerprint.RemoveRecord_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for StartAuthSession
device.mojom.Fingerprint_StartAuthSession_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.Fingerprint.StartAuthSession_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for EndCurrentAuthSession
device.mojom.Fingerprint_EndCurrentAuthSession_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.Fingerprint.EndCurrentAuthSession_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

device.mojom.Fingerprint_EndCurrentAuthSession_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.Fingerprint.EndCurrentAuthSession_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for DestroyAllRecords
device.mojom.Fingerprint_DestroyAllRecords_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.Fingerprint.DestroyAllRecords_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

device.mojom.Fingerprint_DestroyAllRecords_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.Fingerprint.DestroyAllRecords_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for AddFingerprintObserver
device.mojom.Fingerprint_AddFingerprintObserver_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.Fingerprint.AddFingerprintObserver_Params',
      packedSize: 16,
      fields: [
        { name: 'observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for RequestType
device.mojom.Fingerprint_RequestType_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.Fingerprint.RequestType_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

device.mojom.Fingerprint_RequestType_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.Fingerprint.RequestType_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'type', packedOffset: 0, packedBitOffset: 0, type: device.mojom.BiometricTypeSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
device.mojom.FingerprintPtr = device.mojom.FingerprintRemote;
device.mojom.FingerprintRequest = device.mojom.FingerprintPendingReceiver;

