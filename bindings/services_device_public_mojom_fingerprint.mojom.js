// Auto-generated MojoJS binding
// Source: chromium_src/services/device/public/mojom/fingerprint.mojom
// Module: device.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var device = device || {};
device.mojom = device.mojom || {};

device.mojom.ScanResultSpec = { $: mojo.internal.Enum() };
device.mojom.FingerprintErrorSpec = { $: mojo.internal.Enum() };
device.mojom.BiometricTypeSpec = { $: mojo.internal.Enum() };
device.mojom.BiometricsManagerStatusSpec = { $: mojo.internal.Enum() };
device.mojom.FingerprintMessageSpec = { $: {} };
device.mojom.FingerprintObserver = {};
device.mojom.FingerprintObserver.$interfaceName = 'device.mojom.FingerprintObserver';
device.mojom.FingerprintObserver_OnRestarted_ParamsSpec = { $: {} };
device.mojom.FingerprintObserver_OnStatusChanged_ParamsSpec = { $: {} };
device.mojom.FingerprintObserver_OnEnrollScanDone_ParamsSpec = { $: {} };
device.mojom.FingerprintObserver_OnAuthScanDone_ParamsSpec = { $: {} };
device.mojom.FingerprintObserver_OnSessionFailed_ParamsSpec = { $: {} };
device.mojom.Fingerprint = {};
device.mojom.Fingerprint.$interfaceName = 'device.mojom.Fingerprint';
device.mojom.Fingerprint_GetRecordsForUser_ParamsSpec = { $: {} };
device.mojom.Fingerprint_GetRecordsForUser_ResponseParamsSpec = { $: {} };
device.mojom.Fingerprint_StartEnrollSession_ParamsSpec = { $: {} };
device.mojom.Fingerprint_CancelCurrentEnrollSession_ParamsSpec = { $: {} };
device.mojom.Fingerprint_CancelCurrentEnrollSession_ResponseParamsSpec = { $: {} };
device.mojom.Fingerprint_RequestRecordLabel_ParamsSpec = { $: {} };
device.mojom.Fingerprint_RequestRecordLabel_ResponseParamsSpec = { $: {} };
device.mojom.Fingerprint_SetRecordLabel_ParamsSpec = { $: {} };
device.mojom.Fingerprint_SetRecordLabel_ResponseParamsSpec = { $: {} };
device.mojom.Fingerprint_RemoveRecord_ParamsSpec = { $: {} };
device.mojom.Fingerprint_RemoveRecord_ResponseParamsSpec = { $: {} };
device.mojom.Fingerprint_StartAuthSession_ParamsSpec = { $: {} };
device.mojom.Fingerprint_EndCurrentAuthSession_ParamsSpec = { $: {} };
device.mojom.Fingerprint_EndCurrentAuthSession_ResponseParamsSpec = { $: {} };
device.mojom.Fingerprint_DestroyAllRecords_ParamsSpec = { $: {} };
device.mojom.Fingerprint_DestroyAllRecords_ResponseParamsSpec = { $: {} };
device.mojom.Fingerprint_AddFingerprintObserver_ParamsSpec = { $: {} };
device.mojom.Fingerprint_RequestType_ParamsSpec = { $: {} };
device.mojom.Fingerprint_RequestType_ResponseParamsSpec = { $: {} };

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

// Union: FingerprintMessage
mojo.internal.Union(
    device.mojom.FingerprintMessageSpec, 'device.mojom.FingerprintMessage', {
      'fingerprint_error': {
        'ordinal': 0,
        'type': device.mojom.FingerprintErrorSpec.$,
        'nullable': false,
      },
      'scan_result': {
        'ordinal': 1,
        'type': device.mojom.ScanResultSpec.$,
        'nullable': false,
      },
    });

// Interface: FingerprintObserver
mojo.internal.Struct(
    device.mojom.FingerprintObserver_OnRestarted_ParamsSpec, 'device.mojom.FingerprintObserver_OnRestarted_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    device.mojom.FingerprintObserver_OnStatusChanged_ParamsSpec, 'device.mojom.FingerprintObserver_OnStatusChanged_Params', [
      mojo.internal.StructField('status', 0, 0, device.mojom.BiometricsManagerStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    device.mojom.FingerprintObserver_OnEnrollScanDone_ParamsSpec, 'device.mojom.FingerprintObserver_OnEnrollScanDone_Params', [
      mojo.internal.StructField('scan_result', 0, 0, device.mojom.ScanResultSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('percent_complete', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('is_complete', 12, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    device.mojom.FingerprintObserver_OnAuthScanDone_ParamsSpec, 'device.mojom.FingerprintObserver_OnAuthScanDone_Params', [
      mojo.internal.StructField('msg', 0, 0, device.mojom.FingerprintMessageSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('matches', 8, 0, mojo.internal.Map(mojo.internal.String, mojo.internal.Array(mojo.internal.String, false), false), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    device.mojom.FingerprintObserver_OnSessionFailed_ParamsSpec, 'device.mojom.FingerprintObserver_OnSessionFailed_Params', [
    ],
    [[0, 8]]);

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
  onRestarted() {
    return this.$.onRestarted();
  }
  onStatusChanged(status) {
    return this.$.onStatusChanged(status);
  }
  onEnrollScanDone(scan_result, is_complete, percent_complete) {
    return this.$.onEnrollScanDone(scan_result, is_complete, percent_complete);
  }
  onAuthScanDone(msg, matches) {
    return this.$.onAuthScanDone(msg, matches);
  }
  onSessionFailed() {
    return this.$.onSessionFailed();
  }
};

device.mojom.FingerprintObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('FingerprintObserver', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  onRestarted() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      device.mojom.FingerprintObserver_OnRestarted_ParamsSpec,
      null,
      [],
      false);
  }

  onStatusChanged(status) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      device.mojom.FingerprintObserver_OnStatusChanged_ParamsSpec,
      null,
      [status],
      false);
  }

  onEnrollScanDone(scan_result, is_complete, percent_complete) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      device.mojom.FingerprintObserver_OnEnrollScanDone_ParamsSpec,
      null,
      [scan_result, is_complete, percent_complete],
      false);
  }

  onAuthScanDone(msg, matches) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      device.mojom.FingerprintObserver_OnAuthScanDone_ParamsSpec,
      null,
      [msg, matches],
      false);
  }

  onSessionFailed() {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      device.mojom.FingerprintObserver_OnSessionFailed_ParamsSpec,
      null,
      [],
      false);
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

device.mojom.FingerprintObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('FingerprintObserver', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(device.mojom.FingerprintObserver_OnRestarted_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(device.mojom.FingerprintObserver_OnStatusChanged_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(device.mojom.FingerprintObserver_OnEnrollScanDone_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(device.mojom.FingerprintObserver_OnAuthScanDone_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(device.mojom.FingerprintObserver_OnSessionFailed_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(device.mojom.FingerprintObserver_OnRestarted_ParamsSpec.$.structSpec);
          const result = this.impl.onRestarted();
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(device.mojom.FingerprintObserver_OnStatusChanged_ParamsSpec.$.structSpec);
          const result = this.impl.onStatusChanged(params.status);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(device.mojom.FingerprintObserver_OnEnrollScanDone_ParamsSpec.$.structSpec);
          const result = this.impl.onEnrollScanDone(params.scan_result, params.is_complete, params.percent_complete);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(device.mojom.FingerprintObserver_OnAuthScanDone_ParamsSpec.$.structSpec);
          const result = this.impl.onAuthScanDone(params.msg, params.matches);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(device.mojom.FingerprintObserver_OnSessionFailed_ParamsSpec.$.structSpec);
          const result = this.impl.onSessionFailed();
          break;
        }
      }
      } catch (err) {}
    });
  }
};

device.mojom.FingerprintObserverReceiver = device.mojom.FingerprintObserverReceiver;

device.mojom.FingerprintObserverPtr = device.mojom.FingerprintObserverRemote;
device.mojom.FingerprintObserverRequest = device.mojom.FingerprintObserverPendingReceiver;


// Interface: Fingerprint
mojo.internal.Struct(
    device.mojom.Fingerprint_GetRecordsForUser_ParamsSpec, 'device.mojom.Fingerprint_GetRecordsForUser_Params', [
      mojo.internal.StructField('user_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    device.mojom.Fingerprint_GetRecordsForUser_ResponseParamsSpec, 'device.mojom.Fingerprint_GetRecordsForUser_ResponseParams', [
      mojo.internal.StructField('records', 0, 0, mojo.internal.Map(mojo.internal.String, mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('success', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    device.mojom.Fingerprint_StartEnrollSession_ParamsSpec, 'device.mojom.Fingerprint_StartEnrollSession_Params', [
      mojo.internal.StructField('user_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('label', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    device.mojom.Fingerprint_CancelCurrentEnrollSession_ParamsSpec, 'device.mojom.Fingerprint_CancelCurrentEnrollSession_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    device.mojom.Fingerprint_CancelCurrentEnrollSession_ResponseParamsSpec, 'device.mojom.Fingerprint_CancelCurrentEnrollSession_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    device.mojom.Fingerprint_RequestRecordLabel_ParamsSpec, 'device.mojom.Fingerprint_RequestRecordLabel_Params', [
      mojo.internal.StructField('record_path', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    device.mojom.Fingerprint_RequestRecordLabel_ResponseParamsSpec, 'device.mojom.Fingerprint_RequestRecordLabel_ResponseParams', [
      mojo.internal.StructField('label', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    device.mojom.Fingerprint_SetRecordLabel_ParamsSpec, 'device.mojom.Fingerprint_SetRecordLabel_Params', [
      mojo.internal.StructField('record_path', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('new_label', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    device.mojom.Fingerprint_SetRecordLabel_ResponseParamsSpec, 'device.mojom.Fingerprint_SetRecordLabel_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    device.mojom.Fingerprint_RemoveRecord_ParamsSpec, 'device.mojom.Fingerprint_RemoveRecord_Params', [
      mojo.internal.StructField('record_path', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    device.mojom.Fingerprint_RemoveRecord_ResponseParamsSpec, 'device.mojom.Fingerprint_RemoveRecord_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    device.mojom.Fingerprint_StartAuthSession_ParamsSpec, 'device.mojom.Fingerprint_StartAuthSession_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    device.mojom.Fingerprint_EndCurrentAuthSession_ParamsSpec, 'device.mojom.Fingerprint_EndCurrentAuthSession_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    device.mojom.Fingerprint_EndCurrentAuthSession_ResponseParamsSpec, 'device.mojom.Fingerprint_EndCurrentAuthSession_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    device.mojom.Fingerprint_DestroyAllRecords_ParamsSpec, 'device.mojom.Fingerprint_DestroyAllRecords_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    device.mojom.Fingerprint_DestroyAllRecords_ResponseParamsSpec, 'device.mojom.Fingerprint_DestroyAllRecords_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    device.mojom.Fingerprint_AddFingerprintObserver_ParamsSpec, 'device.mojom.Fingerprint_AddFingerprintObserver_Params', [
      mojo.internal.StructField('observer', 0, 0, mojo.internal.InterfaceProxy(device.mojom.FingerprintObserverRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    device.mojom.Fingerprint_RequestType_ParamsSpec, 'device.mojom.Fingerprint_RequestType_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    device.mojom.Fingerprint_RequestType_ResponseParamsSpec, 'device.mojom.Fingerprint_RequestType_ResponseParams', [
      mojo.internal.StructField('type', 0, 0, device.mojom.BiometricTypeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

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
  getRecordsForUser(user_id) {
    return this.$.getRecordsForUser(user_id);
  }
  startEnrollSession(user_id, label) {
    return this.$.startEnrollSession(user_id, label);
  }
  cancelCurrentEnrollSession() {
    return this.$.cancelCurrentEnrollSession();
  }
  requestRecordLabel(record_path) {
    return this.$.requestRecordLabel(record_path);
  }
  setRecordLabel(record_path, new_label) {
    return this.$.setRecordLabel(record_path, new_label);
  }
  removeRecord(record_path) {
    return this.$.removeRecord(record_path);
  }
  startAuthSession() {
    return this.$.startAuthSession();
  }
  endCurrentAuthSession() {
    return this.$.endCurrentAuthSession();
  }
  destroyAllRecords() {
    return this.$.destroyAllRecords();
  }
  addFingerprintObserver(observer) {
    return this.$.addFingerprintObserver(observer);
  }
  requestType() {
    return this.$.requestType();
  }
};

device.mojom.FingerprintRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('Fingerprint', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  getRecordsForUser(user_id) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      device.mojom.Fingerprint_GetRecordsForUser_ParamsSpec,
      device.mojom.Fingerprint_GetRecordsForUser_ResponseParamsSpec,
      [user_id],
      false);
  }

  startEnrollSession(user_id, label) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      device.mojom.Fingerprint_StartEnrollSession_ParamsSpec,
      null,
      [user_id, label],
      false);
  }

  cancelCurrentEnrollSession() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      device.mojom.Fingerprint_CancelCurrentEnrollSession_ParamsSpec,
      device.mojom.Fingerprint_CancelCurrentEnrollSession_ResponseParamsSpec,
      [],
      false);
  }

  requestRecordLabel(record_path) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      device.mojom.Fingerprint_RequestRecordLabel_ParamsSpec,
      device.mojom.Fingerprint_RequestRecordLabel_ResponseParamsSpec,
      [record_path],
      false);
  }

  setRecordLabel(record_path, new_label) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      device.mojom.Fingerprint_SetRecordLabel_ParamsSpec,
      device.mojom.Fingerprint_SetRecordLabel_ResponseParamsSpec,
      [record_path, new_label],
      false);
  }

  removeRecord(record_path) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      device.mojom.Fingerprint_RemoveRecord_ParamsSpec,
      device.mojom.Fingerprint_RemoveRecord_ResponseParamsSpec,
      [record_path],
      false);
  }

  startAuthSession() {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      device.mojom.Fingerprint_StartAuthSession_ParamsSpec,
      null,
      [],
      false);
  }

  endCurrentAuthSession() {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      device.mojom.Fingerprint_EndCurrentAuthSession_ParamsSpec,
      device.mojom.Fingerprint_EndCurrentAuthSession_ResponseParamsSpec,
      [],
      false);
  }

  destroyAllRecords() {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      device.mojom.Fingerprint_DestroyAllRecords_ParamsSpec,
      device.mojom.Fingerprint_DestroyAllRecords_ResponseParamsSpec,
      [],
      false);
  }

  addFingerprintObserver(observer) {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      device.mojom.Fingerprint_AddFingerprintObserver_ParamsSpec,
      null,
      [observer],
      false);
  }

  requestType() {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      device.mojom.Fingerprint_RequestType_ParamsSpec,
      device.mojom.Fingerprint_RequestType_ResponseParamsSpec,
      [],
      false);
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

device.mojom.FingerprintReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('Fingerprint', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(device.mojom.Fingerprint_GetRecordsForUser_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(device.mojom.Fingerprint_StartEnrollSession_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(device.mojom.Fingerprint_CancelCurrentEnrollSession_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(device.mojom.Fingerprint_RequestRecordLabel_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(device.mojom.Fingerprint_SetRecordLabel_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(device.mojom.Fingerprint_RemoveRecord_ParamsSpec);
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(device.mojom.Fingerprint_StartAuthSession_ParamsSpec);
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(device.mojom.Fingerprint_EndCurrentAuthSession_ParamsSpec);
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(device.mojom.Fingerprint_DestroyAllRecords_ParamsSpec);
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(device.mojom.Fingerprint_AddFingerprintObserver_ParamsSpec);
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(device.mojom.Fingerprint_RequestType_ParamsSpec);
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(device.mojom.Fingerprint_GetRecordsForUser_ParamsSpec.$.structSpec);
          const result = this.impl.getRecordsForUser(params.user_id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, device.mojom.Fingerprint_GetRecordsForUser_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(device.mojom.Fingerprint_StartEnrollSession_ParamsSpec.$.structSpec);
          const result = this.impl.startEnrollSession(params.user_id, params.label);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(device.mojom.Fingerprint_CancelCurrentEnrollSession_ParamsSpec.$.structSpec);
          const result = this.impl.cancelCurrentEnrollSession();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, device.mojom.Fingerprint_CancelCurrentEnrollSession_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(device.mojom.Fingerprint_RequestRecordLabel_ParamsSpec.$.structSpec);
          const result = this.impl.requestRecordLabel(params.record_path);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, device.mojom.Fingerprint_RequestRecordLabel_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(device.mojom.Fingerprint_SetRecordLabel_ParamsSpec.$.structSpec);
          const result = this.impl.setRecordLabel(params.record_path, params.new_label);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, device.mojom.Fingerprint_SetRecordLabel_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(device.mojom.Fingerprint_RemoveRecord_ParamsSpec.$.structSpec);
          const result = this.impl.removeRecord(params.record_path);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, device.mojom.Fingerprint_RemoveRecord_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(device.mojom.Fingerprint_StartAuthSession_ParamsSpec.$.structSpec);
          const result = this.impl.startAuthSession();
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(device.mojom.Fingerprint_EndCurrentAuthSession_ParamsSpec.$.structSpec);
          const result = this.impl.endCurrentAuthSession();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, device.mojom.Fingerprint_EndCurrentAuthSession_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(device.mojom.Fingerprint_DestroyAllRecords_ParamsSpec.$.structSpec);
          const result = this.impl.destroyAllRecords();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, device.mojom.Fingerprint_DestroyAllRecords_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(device.mojom.Fingerprint_AddFingerprintObserver_ParamsSpec.$.structSpec);
          const result = this.impl.addFingerprintObserver(params.observer);
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(device.mojom.Fingerprint_RequestType_ParamsSpec.$.structSpec);
          const result = this.impl.requestType();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, device.mojom.Fingerprint_RequestType_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
      } catch (err) {}
    });
  }
};

device.mojom.FingerprintReceiver = device.mojom.FingerprintReceiver;

device.mojom.FingerprintPtr = device.mojom.FingerprintRemote;
device.mojom.FingerprintRequest = device.mojom.FingerprintPendingReceiver;

