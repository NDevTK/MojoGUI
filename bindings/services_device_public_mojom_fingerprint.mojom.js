// Auto-generated MojoJS binding
// Source: chromium_src/services/device/public/mojom/fingerprint.mojom
// Module: device.mojom

'use strict';

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
      [],
      false);
  }

  onStatusChanged(status) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      device.mojom.FingerprintObserver_OnStatusChanged_ParamsSpec,
      null,
      [status],
      false);
  }

  onEnrollScanDone(scan_result, is_complete, percent_complete) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      device.mojom.FingerprintObserver_OnEnrollScanDone_ParamsSpec,
      null,
      [scan_result, is_complete, percent_complete],
      false);
  }

  onAuthScanDone(msg, matches) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      device.mojom.FingerprintObserver_OnAuthScanDone_ParamsSpec,
      null,
      [msg, matches],
      false);
  }

  onSessionFailed() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
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
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
    this.ordinalMap.set(3, 3); // Default ordinal 3 -> Index 3
    this.ordinalMap.set(4, 4); // Default ordinal 4 -> Index 4
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        // Create a view of ONLY the payload (skipping the header)
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        // Decoder uses payload view starting at 0
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: OnRestarted
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(device.mojom.FingerprintObserver_OnRestarted_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnRestarted (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: OnStatusChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(device.mojom.FingerprintObserver_OnStatusChanged_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnStatusChanged (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: OnEnrollScanDone
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(device.mojom.FingerprintObserver_OnEnrollScanDone_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnEnrollScanDone (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: OnAuthScanDone
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(device.mojom.FingerprintObserver_OnAuthScanDone_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnAuthScanDone (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: OnSessionFailed
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(device.mojom.FingerprintObserver_OnSessionFailed_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnSessionFailed (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(device.mojom.FingerprintObserver_OnRestarted_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.onRestarted');
          const result = this.impl.onRestarted();
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(device.mojom.FingerprintObserver_OnStatusChanged_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.onStatusChanged');
          const result = this.impl.onStatusChanged(params.status);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(device.mojom.FingerprintObserver_OnEnrollScanDone_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.onEnrollScanDone');
          const result = this.impl.onEnrollScanDone(params.scan_result, params.is_complete, params.percent_complete);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(device.mojom.FingerprintObserver_OnAuthScanDone_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.onAuthScanDone');
          const result = this.impl.onAuthScanDone(params.msg, params.matches);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(device.mojom.FingerprintObserver_OnSessionFailed_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.onSessionFailed');
          const result = this.impl.onSessionFailed();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
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
      mojo.internal.StructField('observer', 0, 0, mojo.internal.InterfaceProxy(device.mojom.FingerprintObserverSpec), null, false, 0, undefined),
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
      [user_id],
      false);
  }

  startEnrollSession(user_id, label) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      device.mojom.Fingerprint_StartEnrollSession_ParamsSpec,
      null,
      [user_id, label],
      false);
  }

  cancelCurrentEnrollSession() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      device.mojom.Fingerprint_CancelCurrentEnrollSession_ParamsSpec,
      device.mojom.Fingerprint_CancelCurrentEnrollSession_ResponseParamsSpec,
      [],
      false);
  }

  requestRecordLabel(record_path) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      device.mojom.Fingerprint_RequestRecordLabel_ParamsSpec,
      device.mojom.Fingerprint_RequestRecordLabel_ResponseParamsSpec,
      [record_path],
      false);
  }

  setRecordLabel(record_path, new_label) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      device.mojom.Fingerprint_SetRecordLabel_ParamsSpec,
      device.mojom.Fingerprint_SetRecordLabel_ResponseParamsSpec,
      [record_path, new_label],
      false);
  }

  removeRecord(record_path) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      device.mojom.Fingerprint_RemoveRecord_ParamsSpec,
      device.mojom.Fingerprint_RemoveRecord_ResponseParamsSpec,
      [record_path],
      false);
  }

  startAuthSession() {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      device.mojom.Fingerprint_StartAuthSession_ParamsSpec,
      null,
      [],
      false);
  }

  endCurrentAuthSession() {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      device.mojom.Fingerprint_EndCurrentAuthSession_ParamsSpec,
      device.mojom.Fingerprint_EndCurrentAuthSession_ResponseParamsSpec,
      [],
      false);
  }

  destroyAllRecords() {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      device.mojom.Fingerprint_DestroyAllRecords_ParamsSpec,
      device.mojom.Fingerprint_DestroyAllRecords_ResponseParamsSpec,
      [],
      false);
  }

  addFingerprintObserver(observer) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      device.mojom.Fingerprint_AddFingerprintObserver_ParamsSpec,
      null,
      [observer],
      false);
  }

  requestType() {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
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
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
    this.ordinalMap.set(3, 3); // Default ordinal 3 -> Index 3
    this.ordinalMap.set(4, 4); // Default ordinal 4 -> Index 4
    this.ordinalMap.set(5, 5); // Default ordinal 5 -> Index 5
    this.ordinalMap.set(6, 6); // Default ordinal 6 -> Index 6
    this.ordinalMap.set(7, 7); // Default ordinal 7 -> Index 7
    this.ordinalMap.set(8, 8); // Default ordinal 8 -> Index 8
    this.ordinalMap.set(9, 9); // Default ordinal 9 -> Index 9
    this.ordinalMap.set(10, 10); // Default ordinal 10 -> Index 10
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        // Create a view of ONLY the payload (skipping the header)
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        // Decoder uses payload view starting at 0
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: GetRecordsForUser
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(device.mojom.Fingerprint_GetRecordsForUser_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetRecordsForUser (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: StartEnrollSession
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(device.mojom.Fingerprint_StartEnrollSession_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> StartEnrollSession (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: CancelCurrentEnrollSession
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(device.mojom.Fingerprint_CancelCurrentEnrollSession_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CancelCurrentEnrollSession (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: RequestRecordLabel
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(device.mojom.Fingerprint_RequestRecordLabel_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RequestRecordLabel (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: SetRecordLabel
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(device.mojom.Fingerprint_SetRecordLabel_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetRecordLabel (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: RemoveRecord
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(device.mojom.Fingerprint_RemoveRecord_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RemoveRecord (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: StartAuthSession
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(device.mojom.Fingerprint_StartAuthSession_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> StartAuthSession (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: EndCurrentAuthSession
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(device.mojom.Fingerprint_EndCurrentAuthSession_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> EndCurrentAuthSession (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: DestroyAllRecords
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(device.mojom.Fingerprint_DestroyAllRecords_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DestroyAllRecords (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
           }
        }
        // Try Method 9: AddFingerprintObserver
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(device.mojom.Fingerprint_AddFingerprintObserver_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AddFingerprintObserver (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 9 failed:', e);
           }
        }
        // Try Method 10: RequestType
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(device.mojom.Fingerprint_RequestType_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RequestType (10)');
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 10 failed:', e);
           }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(device.mojom.Fingerprint_GetRecordsForUser_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.getRecordsForUser');
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
          const params = decoder.decodeStructInline(device.mojom.Fingerprint_StartEnrollSession_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.startEnrollSession');
          const result = this.impl.startEnrollSession(params.user_id, params.label);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(device.mojom.Fingerprint_CancelCurrentEnrollSession_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.cancelCurrentEnrollSession');
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
          const params = decoder.decodeStructInline(device.mojom.Fingerprint_RequestRecordLabel_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.requestRecordLabel');
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
          const params = decoder.decodeStructInline(device.mojom.Fingerprint_SetRecordLabel_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.setRecordLabel');
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
          const params = decoder.decodeStructInline(device.mojom.Fingerprint_RemoveRecord_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.removeRecord');
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
          const params = decoder.decodeStructInline(device.mojom.Fingerprint_StartAuthSession_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.startAuthSession');
          const result = this.impl.startAuthSession();
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(device.mojom.Fingerprint_EndCurrentAuthSession_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.endCurrentAuthSession');
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
          const params = decoder.decodeStructInline(device.mojom.Fingerprint_DestroyAllRecords_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.destroyAllRecords');
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
          const params = decoder.decodeStructInline(device.mojom.Fingerprint_AddFingerprintObserver_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.addFingerprintObserver');
          const result = this.impl.addFingerprintObserver(params.observer);
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(device.mojom.Fingerprint_RequestType_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.requestType');
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
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

device.mojom.FingerprintReceiver = device.mojom.FingerprintReceiver;

device.mojom.FingerprintPtr = device.mojom.FingerprintRemote;
device.mojom.FingerprintRequest = device.mojom.FingerprintPendingReceiver;

