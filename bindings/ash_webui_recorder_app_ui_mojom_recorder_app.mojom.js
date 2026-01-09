// Auto-generated MojoJS binding
// Source: chromium_src/ash/webui/recorder_app_ui/mojom/recorder_app.mojom
// Module: ash.recorder_app.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.recorder_app = ash.recorder_app || {};
ash.recorder_app.mojom = ash.recorder_app.mojom || {};


// Enum: ModelStateType
ash.recorder_app.mojom.ModelStateType = {
  kUnavailable: 0,
  kNotInstalled: 1,
  kInstalling: 2,
  kInstalled: 3,
  kError: 4,
  kNeedsReboot: 5,
};

// Interface: ModelStateMonitor
ash.recorder_app.mojom.ModelStateMonitor = {};

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
      [state]);
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

// ParamsSpec for Update
ash.recorder_app.mojom.ModelStateMonitor_Update_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.recorder_app.mojom.ModelStateMonitor.Update_Params',
      packedSize: 16,
      fields: [
        { name: 'state', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
ash.recorder_app.mojom.ModelStateMonitorPtr = ash.recorder_app.mojom.ModelStateMonitorRemote;
ash.recorder_app.mojom.ModelStateMonitorRequest = ash.recorder_app.mojom.ModelStateMonitorPendingReceiver;


// Interface: QuietModeMonitor
ash.recorder_app.mojom.QuietModeMonitor = {};

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
      [in_quiet_mode]);
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

// ParamsSpec for Update
ash.recorder_app.mojom.QuietModeMonitor_Update_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.recorder_app.mojom.QuietModeMonitor.Update_Params',
      packedSize: 16,
      fields: [
        { name: 'in_quiet_mode', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
ash.recorder_app.mojom.QuietModeMonitorPtr = ash.recorder_app.mojom.QuietModeMonitorRemote;
ash.recorder_app.mojom.QuietModeMonitorRequest = ash.recorder_app.mojom.QuietModeMonitorPendingReceiver;


// Interface: PageHandler
ash.recorder_app.mojom.PageHandler = {};

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
      [feature]);
  }

  loadModel(model_id, model) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.recorder_app.mojom.PageHandler_LoadModel_ParamsSpec,
      ash.recorder_app.mojom.PageHandler_LoadModel_ResponseParamsSpec,
      [model_id, model]);
  }

  formatModelInput(uuid, feature, fields) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.recorder_app.mojom.PageHandler_FormatModelInput_ParamsSpec,
      ash.recorder_app.mojom.PageHandler_FormatModelInput_ResponseParamsSpec,
      [uuid, feature, fields]);
  }

  validateSafetyResult(safety_feature, text, safety_info) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      ash.recorder_app.mojom.PageHandler_ValidateSafetyResult_ParamsSpec,
      ash.recorder_app.mojom.PageHandler_ValidateSafetyResult_ResponseParamsSpec,
      [safety_feature, text, safety_info]);
  }

  addModelMonitor(model_id, monitor) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      ash.recorder_app.mojom.PageHandler_AddModelMonitor_ParamsSpec,
      ash.recorder_app.mojom.PageHandler_AddModelMonitor_ResponseParamsSpec,
      [model_id, monitor]);
  }

  getAvailableLangPacks() {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      ash.recorder_app.mojom.PageHandler_GetAvailableLangPacks_ParamsSpec,
      ash.recorder_app.mojom.PageHandler_GetAvailableLangPacks_ResponseParamsSpec,
      []);
  }

  getDefaultLanguage() {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      ash.recorder_app.mojom.PageHandler_GetDefaultLanguage_ParamsSpec,
      ash.recorder_app.mojom.PageHandler_GetDefaultLanguage_ResponseParamsSpec,
      []);
  }

  addSodaMonitor(language, monitor) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      ash.recorder_app.mojom.PageHandler_AddSodaMonitor_ParamsSpec,
      ash.recorder_app.mojom.PageHandler_AddSodaMonitor_ResponseParamsSpec,
      [language, monitor]);
  }

  installSoda(language) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      ash.recorder_app.mojom.PageHandler_InstallSoda_ParamsSpec,
      null,
      [language]);
  }

  loadSpeechRecognizer(language, soda_client, soda_recognizer) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      ash.recorder_app.mojom.PageHandler_LoadSpeechRecognizer_ParamsSpec,
      ash.recorder_app.mojom.PageHandler_LoadSpeechRecognizer_ResponseParamsSpec,
      [language, soda_client, soda_recognizer]);
  }

  openAiFeedbackDialog(description_template) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      ash.recorder_app.mojom.PageHandler_OpenAiFeedbackDialog_ParamsSpec,
      null,
      [description_template]);
  }

  getMicrophoneInfo(source_id) {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      ash.recorder_app.mojom.PageHandler_GetMicrophoneInfo_ParamsSpec,
      ash.recorder_app.mojom.PageHandler_GetMicrophoneInfo_ResponseParamsSpec,
      [source_id]);
  }

  addQuietModeMonitor(monitor) {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      ash.recorder_app.mojom.PageHandler_AddQuietModeMonitor_ParamsSpec,
      ash.recorder_app.mojom.PageHandler_AddQuietModeMonitor_ResponseParamsSpec,
      [monitor]);
  }

  setQuietMode(quiet_mode) {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
      ash.recorder_app.mojom.PageHandler_SetQuietMode_ParamsSpec,
      null,
      [quiet_mode]);
  }

  canUseSpeakerLabel() {
    // Ordinal: 14
    return this.proxy.sendMessage(
      14,  // ordinal
      ash.recorder_app.mojom.PageHandler_CanUseSpeakerLabel_ParamsSpec,
      ash.recorder_app.mojom.PageHandler_CanUseSpeakerLabel_ResponseParamsSpec,
      []);
  }

  recordSpeakerLabelConsent(consent_given, consent_description_names, consent_confirmation_name) {
    // Ordinal: 15
    return this.proxy.sendMessage(
      15,  // ordinal
      ash.recorder_app.mojom.PageHandler_RecordSpeakerLabelConsent_ParamsSpec,
      null,
      [consent_given, consent_description_names, consent_confirmation_name]);
  }

  canCaptureSystemAudioWithLoopback() {
    // Ordinal: 16
    return this.proxy.sendMessage(
      16,  // ordinal
      ash.recorder_app.mojom.PageHandler_CanCaptureSystemAudioWithLoopback_ParamsSpec,
      ash.recorder_app.mojom.PageHandler_CanCaptureSystemAudioWithLoopback_ResponseParamsSpec,
      []);
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

// ParamsSpec for GetModelInfo
ash.recorder_app.mojom.PageHandler_GetModelInfo_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.recorder_app.mojom.PageHandler.GetModelInfo_Params',
      packedSize: 16,
      fields: [
        { name: 'feature', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

ash.recorder_app.mojom.PageHandler_GetModelInfo_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.recorder_app.mojom.PageHandler.GetModelInfo_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'model_info', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for LoadModel
ash.recorder_app.mojom.PageHandler_LoadModel_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.recorder_app.mojom.PageHandler.LoadModel_Params',
      packedSize: 24,
      fields: [
        { name: 'model_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'model', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

ash.recorder_app.mojom.PageHandler_LoadModel_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.recorder_app.mojom.PageHandler.LoadModel_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for FormatModelInput
ash.recorder_app.mojom.PageHandler_FormatModelInput_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.recorder_app.mojom.PageHandler.FormatModelInput_Params',
      packedSize: 32,
      fields: [
        { name: 'uuid', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'feature', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'fields', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

ash.recorder_app.mojom.PageHandler_FormatModelInput_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.recorder_app.mojom.PageHandler.FormatModelInput_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ValidateSafetyResult
ash.recorder_app.mojom.PageHandler_ValidateSafetyResult_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.recorder_app.mojom.PageHandler.ValidateSafetyResult_Params',
      packedSize: 32,
      fields: [
        { name: 'safety_feature', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'text', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'safety_info', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

ash.recorder_app.mojom.PageHandler_ValidateSafetyResult_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.recorder_app.mojom.PageHandler.ValidateSafetyResult_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'is_safe', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for AddModelMonitor
ash.recorder_app.mojom.PageHandler_AddModelMonitor_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.recorder_app.mojom.PageHandler.AddModelMonitor_Params',
      packedSize: 24,
      fields: [
        { name: 'model_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'monitor', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

ash.recorder_app.mojom.PageHandler_AddModelMonitor_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.recorder_app.mojom.PageHandler.AddModelMonitor_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'state', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetAvailableLangPacks
ash.recorder_app.mojom.PageHandler_GetAvailableLangPacks_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.recorder_app.mojom.PageHandler.GetAvailableLangPacks_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

ash.recorder_app.mojom.PageHandler_GetAvailableLangPacks_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.recorder_app.mojom.PageHandler.GetAvailableLangPacks_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'lang_packs', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetDefaultLanguage
ash.recorder_app.mojom.PageHandler_GetDefaultLanguage_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.recorder_app.mojom.PageHandler.GetDefaultLanguage_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

ash.recorder_app.mojom.PageHandler_GetDefaultLanguage_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.recorder_app.mojom.PageHandler.GetDefaultLanguage_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'language_code', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for AddSodaMonitor
ash.recorder_app.mojom.PageHandler_AddSodaMonitor_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.recorder_app.mojom.PageHandler.AddSodaMonitor_Params',
      packedSize: 24,
      fields: [
        { name: 'language', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'monitor', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

ash.recorder_app.mojom.PageHandler_AddSodaMonitor_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.recorder_app.mojom.PageHandler.AddSodaMonitor_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'state', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for InstallSoda
ash.recorder_app.mojom.PageHandler_InstallSoda_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.recorder_app.mojom.PageHandler.InstallSoda_Params',
      packedSize: 16,
      fields: [
        { name: 'language', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for LoadSpeechRecognizer
ash.recorder_app.mojom.PageHandler_LoadSpeechRecognizer_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.recorder_app.mojom.PageHandler.LoadSpeechRecognizer_Params',
      packedSize: 32,
      fields: [
        { name: 'language', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'soda_client', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'soda_recognizer', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

ash.recorder_app.mojom.PageHandler_LoadSpeechRecognizer_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.recorder_app.mojom.PageHandler.LoadSpeechRecognizer_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OpenAiFeedbackDialog
ash.recorder_app.mojom.PageHandler_OpenAiFeedbackDialog_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.recorder_app.mojom.PageHandler.OpenAiFeedbackDialog_Params',
      packedSize: 16,
      fields: [
        { name: 'description_template', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetMicrophoneInfo
ash.recorder_app.mojom.PageHandler_GetMicrophoneInfo_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.recorder_app.mojom.PageHandler.GetMicrophoneInfo_Params',
      packedSize: 16,
      fields: [
        { name: 'source_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

ash.recorder_app.mojom.PageHandler_GetMicrophoneInfo_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.recorder_app.mojom.PageHandler.GetMicrophoneInfo_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'info', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for AddQuietModeMonitor
ash.recorder_app.mojom.PageHandler_AddQuietModeMonitor_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.recorder_app.mojom.PageHandler.AddQuietModeMonitor_Params',
      packedSize: 16,
      fields: [
        { name: 'monitor', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

ash.recorder_app.mojom.PageHandler_AddQuietModeMonitor_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.recorder_app.mojom.PageHandler.AddQuietModeMonitor_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'in_quiet_mode', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetQuietMode
ash.recorder_app.mojom.PageHandler_SetQuietMode_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.recorder_app.mojom.PageHandler.SetQuietMode_Params',
      packedSize: 16,
      fields: [
        { name: 'quiet_mode', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for CanUseSpeakerLabel
ash.recorder_app.mojom.PageHandler_CanUseSpeakerLabel_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.recorder_app.mojom.PageHandler.CanUseSpeakerLabel_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

ash.recorder_app.mojom.PageHandler_CanUseSpeakerLabel_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.recorder_app.mojom.PageHandler.CanUseSpeakerLabel_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'supported', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for RecordSpeakerLabelConsent
ash.recorder_app.mojom.PageHandler_RecordSpeakerLabelConsent_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.recorder_app.mojom.PageHandler.RecordSpeakerLabelConsent_Params',
      packedSize: 32,
      fields: [
        { name: 'consent_given', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'consent_description_names', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'consent_confirmation_name', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for CanCaptureSystemAudioWithLoopback
ash.recorder_app.mojom.PageHandler_CanCaptureSystemAudioWithLoopback_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.recorder_app.mojom.PageHandler.CanCaptureSystemAudioWithLoopback_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

ash.recorder_app.mojom.PageHandler_CanCaptureSystemAudioWithLoopback_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.recorder_app.mojom.PageHandler.CanCaptureSystemAudioWithLoopback_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'supported', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
ash.recorder_app.mojom.PageHandlerPtr = ash.recorder_app.mojom.PageHandlerRemote;
ash.recorder_app.mojom.PageHandlerRequest = ash.recorder_app.mojom.PageHandlerPendingReceiver;

