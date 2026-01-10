// Auto-generated MojoJS binding
// Source: chromium_src/ash/webui/recorder_app_ui/mojom/recorder_app.mojom
// Module: ash.recorder_app.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.recorder_app = ash.recorder_app || {};
ash.recorder_app.mojom = ash.recorder_app.mojom || {};
var chromeos = chromeos || {};
var mojo_base = mojo_base || {};
var on_device_model = on_device_model || {};

ash.recorder_app.mojom.ModelStateTypeSpec = { $: mojo.internal.Enum() };
ash.recorder_app.mojom.ModelStateSpec = { $: {} };
ash.recorder_app.mojom.ModelInfoSpec = { $: {} };
ash.recorder_app.mojom.MicrophoneInfoSpec = { $: {} };
ash.recorder_app.mojom.LangPackInfoSpec = { $: {} };
ash.recorder_app.mojom.ModelStateMonitor = {};
ash.recorder_app.mojom.ModelStateMonitor.$interfaceName = 'ash.recorder_app.mojom.ModelStateMonitor';
ash.recorder_app.mojom.ModelStateMonitor_Update_ParamsSpec = { $: {} };
ash.recorder_app.mojom.QuietModeMonitor = {};
ash.recorder_app.mojom.QuietModeMonitor.$interfaceName = 'ash.recorder_app.mojom.QuietModeMonitor';
ash.recorder_app.mojom.QuietModeMonitor_Update_ParamsSpec = { $: {} };
ash.recorder_app.mojom.PageHandler = {};
ash.recorder_app.mojom.PageHandler.$interfaceName = 'ash.recorder_app.mojom.PageHandler';
ash.recorder_app.mojom.PageHandler_GetModelInfo_ParamsSpec = { $: {} };
ash.recorder_app.mojom.PageHandler_GetModelInfo_ResponseParamsSpec = { $: {} };
ash.recorder_app.mojom.PageHandler_LoadModel_ParamsSpec = { $: {} };
ash.recorder_app.mojom.PageHandler_LoadModel_ResponseParamsSpec = { $: {} };
ash.recorder_app.mojom.PageHandler_FormatModelInput_ParamsSpec = { $: {} };
ash.recorder_app.mojom.PageHandler_FormatModelInput_ResponseParamsSpec = { $: {} };
ash.recorder_app.mojom.PageHandler_ValidateSafetyResult_ParamsSpec = { $: {} };
ash.recorder_app.mojom.PageHandler_ValidateSafetyResult_ResponseParamsSpec = { $: {} };
ash.recorder_app.mojom.PageHandler_AddModelMonitor_ParamsSpec = { $: {} };
ash.recorder_app.mojom.PageHandler_AddModelMonitor_ResponseParamsSpec = { $: {} };
ash.recorder_app.mojom.PageHandler_GetAvailableLangPacks_ParamsSpec = { $: {} };
ash.recorder_app.mojom.PageHandler_GetAvailableLangPacks_ResponseParamsSpec = { $: {} };
ash.recorder_app.mojom.PageHandler_GetDefaultLanguage_ParamsSpec = { $: {} };
ash.recorder_app.mojom.PageHandler_GetDefaultLanguage_ResponseParamsSpec = { $: {} };
ash.recorder_app.mojom.PageHandler_AddSodaMonitor_ParamsSpec = { $: {} };
ash.recorder_app.mojom.PageHandler_AddSodaMonitor_ResponseParamsSpec = { $: {} };
ash.recorder_app.mojom.PageHandler_InstallSoda_ParamsSpec = { $: {} };
ash.recorder_app.mojom.PageHandler_InstallSoda_ResponseParamsSpec = { $: {} };
ash.recorder_app.mojom.PageHandler_LoadSpeechRecognizer_ParamsSpec = { $: {} };
ash.recorder_app.mojom.PageHandler_LoadSpeechRecognizer_ResponseParamsSpec = { $: {} };
ash.recorder_app.mojom.PageHandler_OpenAiFeedbackDialog_ParamsSpec = { $: {} };
ash.recorder_app.mojom.PageHandler_GetMicrophoneInfo_ParamsSpec = { $: {} };
ash.recorder_app.mojom.PageHandler_GetMicrophoneInfo_ResponseParamsSpec = { $: {} };
ash.recorder_app.mojom.PageHandler_AddQuietModeMonitor_ParamsSpec = { $: {} };
ash.recorder_app.mojom.PageHandler_AddQuietModeMonitor_ResponseParamsSpec = { $: {} };
ash.recorder_app.mojom.PageHandler_SetQuietMode_ParamsSpec = { $: {} };
ash.recorder_app.mojom.PageHandler_CanUseSpeakerLabel_ParamsSpec = { $: {} };
ash.recorder_app.mojom.PageHandler_CanUseSpeakerLabel_ResponseParamsSpec = { $: {} };
ash.recorder_app.mojom.PageHandler_RecordSpeakerLabelConsent_ParamsSpec = { $: {} };
ash.recorder_app.mojom.PageHandler_CanCaptureSystemAudioWithLoopback_ParamsSpec = { $: {} };
ash.recorder_app.mojom.PageHandler_CanCaptureSystemAudioWithLoopback_ResponseParamsSpec = { $: {} };

// Enum: ModelStateType
ash.recorder_app.mojom.ModelStateType = {
  kUnavailable: 0,
  kNotInstalled: 1,
  kInstalling: 2,
  kInstalled: 3,
  kError: 4,
  kNeedsReboot: 5,
};

// Struct: ModelState
mojo.internal.Struct(
    ash.recorder_app.mojom.ModelStateSpec, 'ash.recorder_app.mojom.ModelState', [
      mojo.internal.StructField('type', 0, 0, ash.recorder_app.mojom.ModelStateTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('progress_$flag', 8, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'progress_$value', originalFieldName: 'progress' }),
      mojo.internal.StructField('progress_$value', 9, 0, mojo.internal.Uint8, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'progress_$flag', originalFieldName: 'progress' }),
    ],
    [[0, 24]]);

// Struct: ModelInfo
mojo.internal.Struct(
    ash.recorder_app.mojom.ModelInfoSpec, 'ash.recorder_app.mojom.ModelInfo', [
      mojo.internal.StructField('model_id', 0, 0, mojo_base.mojom.UuidSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('input_token_limit', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('is_large_model', 12, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: MicrophoneInfo
mojo.internal.Struct(
    ash.recorder_app.mojom.MicrophoneInfoSpec, 'ash.recorder_app.mojom.MicrophoneInfo', [
      mojo.internal.StructField('is_default', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_internal', 0, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: LangPackInfo
mojo.internal.Struct(
    ash.recorder_app.mojom.LangPackInfoSpec, 'ash.recorder_app.mojom.LangPackInfo', [
      mojo.internal.StructField('language_code', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('display_name', 8, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('is_gen_ai_supported', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_speaker_label_supported', 16, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

// Interface: ModelStateMonitor
mojo.internal.Struct(
    ash.recorder_app.mojom.ModelStateMonitor_Update_ParamsSpec, 'ash.recorder_app.mojom.ModelStateMonitor_Update_Params', [
      mojo.internal.StructField('state', 0, 0, ash.recorder_app.mojom.ModelStateSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

ash.recorder_app.mojom.ModelStateMonitorPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.recorder_app.mojom.ModelStateMonitorRemote = class {
  static get $interfaceName() {
    return 'ash.recorder_app.mojom.ModelStateMonitor';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.recorder_app.mojom.ModelStateMonitorPendingReceiver,
      handle);
    this.$ = new ash.recorder_app.mojom.ModelStateMonitorRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.recorder_app.mojom.ModelStateMonitorRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  update(state) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.recorder_app.mojom.ModelStateMonitor_Update_ParamsSpec,
      null,
      [state],
      false);
  }

};

ash.recorder_app.mojom.ModelStateMonitor.getRemote = function() {
  let remote = new ash.recorder_app.mojom.ModelStateMonitorRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.recorder_app.mojom.ModelStateMonitor',
    'context');
  return remote.$;
};

ash.recorder_app.mojom.ModelStateMonitorReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
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
        let payload = args[2];
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload);
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
      if (dispatchId === undefined) dispatchId = header.ordinal; // Fallback to raw ordinal
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.recorder_app.mojom.ModelStateMonitor_Update_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.update');
          const result = this.impl.update(params.state);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

ash.recorder_app.mojom.ModelStateMonitorReceiver = ash.recorder_app.mojom.ModelStateMonitorReceiver;

ash.recorder_app.mojom.ModelStateMonitorPtr = ash.recorder_app.mojom.ModelStateMonitorRemote;
ash.recorder_app.mojom.ModelStateMonitorRequest = ash.recorder_app.mojom.ModelStateMonitorPendingReceiver;


// Interface: QuietModeMonitor
mojo.internal.Struct(
    ash.recorder_app.mojom.QuietModeMonitor_Update_ParamsSpec, 'ash.recorder_app.mojom.QuietModeMonitor_Update_Params', [
      mojo.internal.StructField('in_quiet_mode', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

ash.recorder_app.mojom.QuietModeMonitorPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.recorder_app.mojom.QuietModeMonitorRemote = class {
  static get $interfaceName() {
    return 'ash.recorder_app.mojom.QuietModeMonitor';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.recorder_app.mojom.QuietModeMonitorPendingReceiver,
      handle);
    this.$ = new ash.recorder_app.mojom.QuietModeMonitorRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.recorder_app.mojom.QuietModeMonitorRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  update(in_quiet_mode) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.recorder_app.mojom.QuietModeMonitor_Update_ParamsSpec,
      null,
      [in_quiet_mode],
      false);
  }

};

ash.recorder_app.mojom.QuietModeMonitor.getRemote = function() {
  let remote = new ash.recorder_app.mojom.QuietModeMonitorRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.recorder_app.mojom.QuietModeMonitor',
    'context');
  return remote.$;
};

ash.recorder_app.mojom.QuietModeMonitorReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
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
        let payload = args[2];
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload);
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
      if (dispatchId === undefined) dispatchId = header.ordinal; // Fallback to raw ordinal
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.recorder_app.mojom.QuietModeMonitor_Update_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.update');
          const result = this.impl.update(params.in_quiet_mode);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

ash.recorder_app.mojom.QuietModeMonitorReceiver = ash.recorder_app.mojom.QuietModeMonitorReceiver;

ash.recorder_app.mojom.QuietModeMonitorPtr = ash.recorder_app.mojom.QuietModeMonitorRemote;
ash.recorder_app.mojom.QuietModeMonitorRequest = ash.recorder_app.mojom.QuietModeMonitorPendingReceiver;


// Interface: PageHandler
mojo.internal.Struct(
    ash.recorder_app.mojom.PageHandler_GetModelInfo_ParamsSpec, 'ash.recorder_app.mojom.PageHandler_GetModelInfo_Params', [
      mojo.internal.StructField('feature', 0, 0, on_device_model.mojom.FormatFeatureSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.recorder_app.mojom.PageHandler_GetModelInfo_ResponseParamsSpec, 'ash.recorder_app.mojom.PageHandler_GetModelInfo_ResponseParams', [
      mojo.internal.StructField('model_info', 0, 0, ash.recorder_app.mojom.ModelInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.recorder_app.mojom.PageHandler_LoadModel_ParamsSpec, 'ash.recorder_app.mojom.PageHandler_LoadModel_Params', [
      mojo.internal.StructField('model_id', 0, 0, mojo_base.mojom.UuidSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('model', 8, 0, mojo.internal.InterfaceRequest(on_device_model.mojom.OnDeviceModelRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    ash.recorder_app.mojom.PageHandler_LoadModel_ResponseParamsSpec, 'ash.recorder_app.mojom.PageHandler_LoadModel_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, on_device_model.mojom.LoadModelResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.recorder_app.mojom.PageHandler_FormatModelInput_ParamsSpec, 'ash.recorder_app.mojom.PageHandler_FormatModelInput_Params', [
      mojo.internal.StructField('uuid', 0, 0, mojo_base.mojom.UuidSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('feature', 8, 0, on_device_model.mojom.FormatFeatureSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('fields', 16, 0, mojo.internal.Map(mojo.internal.String, mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    ash.recorder_app.mojom.PageHandler_FormatModelInput_ResponseParamsSpec, 'ash.recorder_app.mojom.PageHandler_FormatModelInput_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.recorder_app.mojom.PageHandler_ValidateSafetyResult_ParamsSpec, 'ash.recorder_app.mojom.PageHandler_ValidateSafetyResult_Params', [
      mojo.internal.StructField('safety_feature', 0, 0, on_device_model.mojom.SafetyFeatureSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('text', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('safety_info', 16, 0, on_device_model.mojom.SafetyInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    ash.recorder_app.mojom.PageHandler_ValidateSafetyResult_ResponseParamsSpec, 'ash.recorder_app.mojom.PageHandler_ValidateSafetyResult_ResponseParams', [
      mojo.internal.StructField('is_safe', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.recorder_app.mojom.PageHandler_AddModelMonitor_ParamsSpec, 'ash.recorder_app.mojom.PageHandler_AddModelMonitor_Params', [
      mojo.internal.StructField('model_id', 0, 0, mojo_base.mojom.UuidSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('monitor', 8, 0, mojo.internal.InterfaceProxy(ash.recorder_app.mojom.ModelStateMonitorSpec), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    ash.recorder_app.mojom.PageHandler_AddModelMonitor_ResponseParamsSpec, 'ash.recorder_app.mojom.PageHandler_AddModelMonitor_ResponseParams', [
      mojo.internal.StructField('state', 0, 0, ash.recorder_app.mojom.ModelStateSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.recorder_app.mojom.PageHandler_GetAvailableLangPacks_ParamsSpec, 'ash.recorder_app.mojom.PageHandler_GetAvailableLangPacks_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.recorder_app.mojom.PageHandler_GetAvailableLangPacks_ResponseParamsSpec, 'ash.recorder_app.mojom.PageHandler_GetAvailableLangPacks_ResponseParams', [
      mojo.internal.StructField('lang_packs', 0, 0, mojo.internal.Array(ash.recorder_app.mojom.LangPackInfoSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.recorder_app.mojom.PageHandler_GetDefaultLanguage_ParamsSpec, 'ash.recorder_app.mojom.PageHandler_GetDefaultLanguage_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.recorder_app.mojom.PageHandler_GetDefaultLanguage_ResponseParamsSpec, 'ash.recorder_app.mojom.PageHandler_GetDefaultLanguage_ResponseParams', [
      mojo.internal.StructField('language_code', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.recorder_app.mojom.PageHandler_AddSodaMonitor_ParamsSpec, 'ash.recorder_app.mojom.PageHandler_AddSodaMonitor_Params', [
      mojo.internal.StructField('language', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('monitor', 8, 0, mojo.internal.InterfaceProxy(ash.recorder_app.mojom.ModelStateMonitorSpec), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    ash.recorder_app.mojom.PageHandler_AddSodaMonitor_ResponseParamsSpec, 'ash.recorder_app.mojom.PageHandler_AddSodaMonitor_ResponseParams', [
      mojo.internal.StructField('state', 0, 0, ash.recorder_app.mojom.ModelStateSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.recorder_app.mojom.PageHandler_InstallSoda_ParamsSpec, 'ash.recorder_app.mojom.PageHandler_InstallSoda_Params', [
      mojo.internal.StructField('language', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.recorder_app.mojom.PageHandler_InstallSoda_ResponseParamsSpec, 'ash.recorder_app.mojom.PageHandler_InstallSoda_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.recorder_app.mojom.PageHandler_LoadSpeechRecognizer_ParamsSpec, 'ash.recorder_app.mojom.PageHandler_LoadSpeechRecognizer_Params', [
      mojo.internal.StructField('language', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('soda_client', 8, 0, mojo.internal.InterfaceProxy(chromeos.machine_learning.mojom.SodaClientRemote), null, false, 0, undefined),
      mojo.internal.StructField('soda_recognizer', 16, 0, mojo.internal.InterfaceRequest(chromeos.machine_learning.mojom.SodaRecognizerRemote), null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    ash.recorder_app.mojom.PageHandler_LoadSpeechRecognizer_ResponseParamsSpec, 'ash.recorder_app.mojom.PageHandler_LoadSpeechRecognizer_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.recorder_app.mojom.PageHandler_OpenAiFeedbackDialog_ParamsSpec, 'ash.recorder_app.mojom.PageHandler_OpenAiFeedbackDialog_Params', [
      mojo.internal.StructField('description_template', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.recorder_app.mojom.PageHandler_GetMicrophoneInfo_ParamsSpec, 'ash.recorder_app.mojom.PageHandler_GetMicrophoneInfo_Params', [
      mojo.internal.StructField('source_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.recorder_app.mojom.PageHandler_GetMicrophoneInfo_ResponseParamsSpec, 'ash.recorder_app.mojom.PageHandler_GetMicrophoneInfo_ResponseParams', [
      mojo.internal.StructField('info', 0, 0, ash.recorder_app.mojom.MicrophoneInfoSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.recorder_app.mojom.PageHandler_AddQuietModeMonitor_ParamsSpec, 'ash.recorder_app.mojom.PageHandler_AddQuietModeMonitor_Params', [
      mojo.internal.StructField('monitor', 0, 0, mojo.internal.InterfaceProxy(ash.recorder_app.mojom.QuietModeMonitorSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.recorder_app.mojom.PageHandler_AddQuietModeMonitor_ResponseParamsSpec, 'ash.recorder_app.mojom.PageHandler_AddQuietModeMonitor_ResponseParams', [
      mojo.internal.StructField('in_quiet_mode', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.recorder_app.mojom.PageHandler_SetQuietMode_ParamsSpec, 'ash.recorder_app.mojom.PageHandler_SetQuietMode_Params', [
      mojo.internal.StructField('quiet_mode', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.recorder_app.mojom.PageHandler_CanUseSpeakerLabel_ParamsSpec, 'ash.recorder_app.mojom.PageHandler_CanUseSpeakerLabel_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.recorder_app.mojom.PageHandler_CanUseSpeakerLabel_ResponseParamsSpec, 'ash.recorder_app.mojom.PageHandler_CanUseSpeakerLabel_ResponseParams', [
      mojo.internal.StructField('supported', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.recorder_app.mojom.PageHandler_RecordSpeakerLabelConsent_ParamsSpec, 'ash.recorder_app.mojom.PageHandler_RecordSpeakerLabelConsent_Params', [
      mojo.internal.StructField('consent_description_names', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('consent_confirmation_name', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('consent_given', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    ash.recorder_app.mojom.PageHandler_CanCaptureSystemAudioWithLoopback_ParamsSpec, 'ash.recorder_app.mojom.PageHandler_CanCaptureSystemAudioWithLoopback_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.recorder_app.mojom.PageHandler_CanCaptureSystemAudioWithLoopback_ResponseParamsSpec, 'ash.recorder_app.mojom.PageHandler_CanCaptureSystemAudioWithLoopback_ResponseParams', [
      mojo.internal.StructField('supported', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

ash.recorder_app.mojom.PageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.recorder_app.mojom.PageHandlerRemote = class {
  static get $interfaceName() {
    return 'ash.recorder_app.mojom.PageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.recorder_app.mojom.PageHandlerPendingReceiver,
      handle);
    this.$ = new ash.recorder_app.mojom.PageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.recorder_app.mojom.PageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getModelInfo(feature) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.recorder_app.mojom.PageHandler_GetModelInfo_ParamsSpec,
      ash.recorder_app.mojom.PageHandler_GetModelInfo_ResponseParamsSpec,
      [feature],
      false);
  }

  loadModel(model_id, model) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.recorder_app.mojom.PageHandler_LoadModel_ParamsSpec,
      ash.recorder_app.mojom.PageHandler_LoadModel_ResponseParamsSpec,
      [model_id, model],
      false);
  }

  formatModelInput(uuid, feature, fields) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.recorder_app.mojom.PageHandler_FormatModelInput_ParamsSpec,
      ash.recorder_app.mojom.PageHandler_FormatModelInput_ResponseParamsSpec,
      [uuid, feature, fields],
      false);
  }

  validateSafetyResult(safety_feature, text, safety_info) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      ash.recorder_app.mojom.PageHandler_ValidateSafetyResult_ParamsSpec,
      ash.recorder_app.mojom.PageHandler_ValidateSafetyResult_ResponseParamsSpec,
      [safety_feature, text, safety_info],
      false);
  }

  addModelMonitor(model_id, monitor) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      ash.recorder_app.mojom.PageHandler_AddModelMonitor_ParamsSpec,
      ash.recorder_app.mojom.PageHandler_AddModelMonitor_ResponseParamsSpec,
      [model_id, monitor],
      false);
  }

  getAvailableLangPacks() {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      ash.recorder_app.mojom.PageHandler_GetAvailableLangPacks_ParamsSpec,
      ash.recorder_app.mojom.PageHandler_GetAvailableLangPacks_ResponseParamsSpec,
      [],
      false);
  }

  getDefaultLanguage() {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      ash.recorder_app.mojom.PageHandler_GetDefaultLanguage_ParamsSpec,
      ash.recorder_app.mojom.PageHandler_GetDefaultLanguage_ResponseParamsSpec,
      [],
      false);
  }

  addSodaMonitor(language, monitor) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      ash.recorder_app.mojom.PageHandler_AddSodaMonitor_ParamsSpec,
      ash.recorder_app.mojom.PageHandler_AddSodaMonitor_ResponseParamsSpec,
      [language, monitor],
      false);
  }

  installSoda(language) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      ash.recorder_app.mojom.PageHandler_InstallSoda_ParamsSpec,
      ash.recorder_app.mojom.PageHandler_InstallSoda_ResponseParamsSpec,
      [language],
      false);
  }

  loadSpeechRecognizer(language, soda_client, soda_recognizer) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      ash.recorder_app.mojom.PageHandler_LoadSpeechRecognizer_ParamsSpec,
      ash.recorder_app.mojom.PageHandler_LoadSpeechRecognizer_ResponseParamsSpec,
      [language, soda_client, soda_recognizer],
      false);
  }

  openAiFeedbackDialog(description_template) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      ash.recorder_app.mojom.PageHandler_OpenAiFeedbackDialog_ParamsSpec,
      null,
      [description_template],
      false);
  }

  getMicrophoneInfo(source_id) {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      ash.recorder_app.mojom.PageHandler_GetMicrophoneInfo_ParamsSpec,
      ash.recorder_app.mojom.PageHandler_GetMicrophoneInfo_ResponseParamsSpec,
      [source_id],
      false);
  }

  addQuietModeMonitor(monitor) {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      ash.recorder_app.mojom.PageHandler_AddQuietModeMonitor_ParamsSpec,
      ash.recorder_app.mojom.PageHandler_AddQuietModeMonitor_ResponseParamsSpec,
      [monitor],
      false);
  }

  setQuietMode(quiet_mode) {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
      ash.recorder_app.mojom.PageHandler_SetQuietMode_ParamsSpec,
      null,
      [quiet_mode],
      false);
  }

  canUseSpeakerLabel() {
    // Ordinal: 14
    return this.proxy.sendMessage(
      14,  // ordinal
      ash.recorder_app.mojom.PageHandler_CanUseSpeakerLabel_ParamsSpec,
      ash.recorder_app.mojom.PageHandler_CanUseSpeakerLabel_ResponseParamsSpec,
      [],
      false);
  }

  recordSpeakerLabelConsent(consent_given, consent_description_names, consent_confirmation_name) {
    // Ordinal: 15
    return this.proxy.sendMessage(
      15,  // ordinal
      ash.recorder_app.mojom.PageHandler_RecordSpeakerLabelConsent_ParamsSpec,
      null,
      [consent_given, consent_description_names, consent_confirmation_name],
      false);
  }

  canCaptureSystemAudioWithLoopback() {
    // Ordinal: 16
    return this.proxy.sendMessage(
      16,  // ordinal
      ash.recorder_app.mojom.PageHandler_CanCaptureSystemAudioWithLoopback_ParamsSpec,
      ash.recorder_app.mojom.PageHandler_CanCaptureSystemAudioWithLoopback_ResponseParamsSpec,
      [],
      false);
  }

};

ash.recorder_app.mojom.PageHandler.getRemote = function() {
  let remote = new ash.recorder_app.mojom.PageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.recorder_app.mojom.PageHandler',
    'context');
  return remote.$;
};

ash.recorder_app.mojom.PageHandlerReceiver = class {
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
    this.ordinalMap.set(11, 11); // Default ordinal 11 -> Index 11
    this.ordinalMap.set(12, 12); // Default ordinal 12 -> Index 12
    this.ordinalMap.set(13, 13); // Default ordinal 13 -> Index 13
    this.ordinalMap.set(14, 14); // Default ordinal 14 -> Index 14
    this.ordinalMap.set(15, 15); // Default ordinal 15 -> Index 15
    this.ordinalMap.set(16, 16); // Default ordinal 16 -> Index 16
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
        let payload = args[2];
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload);
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
      if (dispatchId === undefined) dispatchId = header.ordinal; // Fallback to raw ordinal
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.recorder_app.mojom.PageHandler_GetModelInfo_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.getModelInfo');
          const result = this.impl.getModelInfo(params.feature);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.recorder_app.mojom.PageHandler_GetModelInfo_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.recorder_app.mojom.PageHandler_LoadModel_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.loadModel');
          const result = this.impl.loadModel(params.model_id, params.model);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.recorder_app.mojom.PageHandler_LoadModel_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.recorder_app.mojom.PageHandler_FormatModelInput_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.formatModelInput');
          const result = this.impl.formatModelInput(params.uuid, params.feature, params.fields);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.recorder_app.mojom.PageHandler_FormatModelInput_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.recorder_app.mojom.PageHandler_ValidateSafetyResult_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.validateSafetyResult');
          const result = this.impl.validateSafetyResult(params.safety_feature, params.text, params.safety_info);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.recorder_app.mojom.PageHandler_ValidateSafetyResult_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.recorder_app.mojom.PageHandler_AddModelMonitor_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.addModelMonitor');
          const result = this.impl.addModelMonitor(params.model_id, params.monitor);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.recorder_app.mojom.PageHandler_AddModelMonitor_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.recorder_app.mojom.PageHandler_GetAvailableLangPacks_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.getAvailableLangPacks');
          const result = this.impl.getAvailableLangPacks();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.recorder_app.mojom.PageHandler_GetAvailableLangPacks_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.recorder_app.mojom.PageHandler_GetDefaultLanguage_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.getDefaultLanguage');
          const result = this.impl.getDefaultLanguage();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.recorder_app.mojom.PageHandler_GetDefaultLanguage_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.recorder_app.mojom.PageHandler_AddSodaMonitor_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.addSodaMonitor');
          const result = this.impl.addSodaMonitor(params.language, params.monitor);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.recorder_app.mojom.PageHandler_AddSodaMonitor_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.recorder_app.mojom.PageHandler_InstallSoda_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.installSoda');
          const result = this.impl.installSoda(params.language);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.recorder_app.mojom.PageHandler_InstallSoda_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.recorder_app.mojom.PageHandler_LoadSpeechRecognizer_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.loadSpeechRecognizer');
          const result = this.impl.loadSpeechRecognizer(params.language, params.soda_client, params.soda_recognizer);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.recorder_app.mojom.PageHandler_LoadSpeechRecognizer_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.recorder_app.mojom.PageHandler_OpenAiFeedbackDialog_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.openAiFeedbackDialog');
          const result = this.impl.openAiFeedbackDialog(params.description_template);
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.recorder_app.mojom.PageHandler_GetMicrophoneInfo_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.getMicrophoneInfo');
          const result = this.impl.getMicrophoneInfo(params.source_id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.recorder_app.mojom.PageHandler_GetMicrophoneInfo_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.recorder_app.mojom.PageHandler_AddQuietModeMonitor_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.addQuietModeMonitor');
          const result = this.impl.addQuietModeMonitor(params.monitor);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.recorder_app.mojom.PageHandler_AddQuietModeMonitor_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.recorder_app.mojom.PageHandler_SetQuietMode_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.setQuietMode');
          const result = this.impl.setQuietMode(params.quiet_mode);
          break;
        }
        case 14: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.recorder_app.mojom.PageHandler_CanUseSpeakerLabel_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.canUseSpeakerLabel');
          const result = this.impl.canUseSpeakerLabel();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.recorder_app.mojom.PageHandler_CanUseSpeakerLabel_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 15: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.recorder_app.mojom.PageHandler_RecordSpeakerLabelConsent_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.recordSpeakerLabelConsent');
          const result = this.impl.recordSpeakerLabelConsent(params.consent_given, params.consent_description_names, params.consent_confirmation_name);
          break;
        }
        case 16: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.recorder_app.mojom.PageHandler_CanCaptureSystemAudioWithLoopback_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.canCaptureSystemAudioWithLoopback');
          const result = this.impl.canCaptureSystemAudioWithLoopback();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.recorder_app.mojom.PageHandler_CanCaptureSystemAudioWithLoopback_ResponseParamsSpec);
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

ash.recorder_app.mojom.PageHandlerReceiver = ash.recorder_app.mojom.PageHandlerReceiver;

ash.recorder_app.mojom.PageHandlerPtr = ash.recorder_app.mojom.PageHandlerRemote;
ash.recorder_app.mojom.PageHandlerRequest = ash.recorder_app.mojom.PageHandlerPendingReceiver;

