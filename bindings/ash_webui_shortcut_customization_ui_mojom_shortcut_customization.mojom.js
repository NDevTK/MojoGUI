// Auto-generated MojoJS binding
// Source: chromium_src/ash/webui/shortcut_customization_ui/mojom/shortcut_customization.mojom
// Module: ash.shortcut_customization.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.shortcut_customization = ash.shortcut_customization || {};
ash.shortcut_customization.mojom = ash.shortcut_customization.mojom || {};
var mojo_base = mojo_base || {};
var ui = ui || {};

ash.shortcut_customization.mojom.UserActionSpec = { $: mojo.internal.Enum() };
ash.shortcut_customization.mojom.EditDialogCompletedActionsSpec = { $: mojo.internal.Enum() };
ash.shortcut_customization.mojom.SubactionsSpec = { $: mojo.internal.Enum() };
ash.shortcut_customization.mojom.AcceleratorResultDataSpec = { $: {} };
ash.shortcut_customization.mojom.SimpleAcceleratorSpec = { $: {} };
ash.shortcut_customization.mojom.AcceleratorsUpdatedObserver = {};
ash.shortcut_customization.mojom.AcceleratorsUpdatedObserver.$interfaceName = 'ash.shortcut_customization.mojom.AcceleratorsUpdatedObserver';
ash.shortcut_customization.mojom.AcceleratorsUpdatedObserver_OnAcceleratorsUpdated_ParamsSpec = { $: {} };
ash.shortcut_customization.mojom.PolicyUpdatedObserver = {};
ash.shortcut_customization.mojom.PolicyUpdatedObserver.$interfaceName = 'ash.shortcut_customization.mojom.PolicyUpdatedObserver';
ash.shortcut_customization.mojom.PolicyUpdatedObserver_OnCustomizationPolicyUpdated_ParamsSpec = { $: {} };
ash.shortcut_customization.mojom.AcceleratorConfigurationProvider = {};
ash.shortcut_customization.mojom.AcceleratorConfigurationProvider.$interfaceName = 'ash.shortcut_customization.mojom.AcceleratorConfigurationProvider';
ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_IsMutable_ParamsSpec = { $: {} };
ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_IsMutable_ResponseParamsSpec = { $: {} };
ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_IsCustomizationAllowedByPolicy_ParamsSpec = { $: {} };
ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_IsCustomizationAllowedByPolicy_ResponseParamsSpec = { $: {} };
ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_GetMetaKeyToDisplay_ParamsSpec = { $: {} };
ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_GetMetaKeyToDisplay_ResponseParamsSpec = { $: {} };
ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_GetConflictAccelerator_ParamsSpec = { $: {} };
ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_GetConflictAccelerator_ResponseParamsSpec = { $: {} };
ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_GetDefaultAcceleratorsForId_ParamsSpec = { $: {} };
ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_GetDefaultAcceleratorsForId_ResponseParamsSpec = { $: {} };
ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_GetAccelerators_ParamsSpec = { $: {} };
ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_GetAccelerators_ResponseParamsSpec = { $: {} };
ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_AddObserver_ParamsSpec = { $: {} };
ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_AddPolicyObserver_ParamsSpec = { $: {} };
ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_GetAcceleratorLayoutInfos_ParamsSpec = { $: {} };
ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_GetAcceleratorLayoutInfos_ResponseParamsSpec = { $: {} };
ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_PreventProcessingAccelerators_ParamsSpec = { $: {} };
ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_PreventProcessingAccelerators_ResponseParamsSpec = { $: {} };
ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_AddAccelerator_ParamsSpec = { $: {} };
ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_AddAccelerator_ResponseParamsSpec = { $: {} };
ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_RemoveAccelerator_ParamsSpec = { $: {} };
ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_RemoveAccelerator_ResponseParamsSpec = { $: {} };
ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_ReplaceAccelerator_ParamsSpec = { $: {} };
ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_ReplaceAccelerator_ResponseParamsSpec = { $: {} };
ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_RestoreDefault_ParamsSpec = { $: {} };
ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_RestoreDefault_ResponseParamsSpec = { $: {} };
ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_RestoreAllDefaults_ParamsSpec = { $: {} };
ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_RestoreAllDefaults_ResponseParamsSpec = { $: {} };
ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_RecordUserAction_ParamsSpec = { $: {} };
ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_RecordMainCategoryNavigation_ParamsSpec = { $: {} };
ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_RecordEditDialogCompletedActions_ParamsSpec = { $: {} };
ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_RecordAddOrEditSubactions_ParamsSpec = { $: {} };
ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_HasCustomAccelerators_ParamsSpec = { $: {} };
ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_HasCustomAccelerators_ResponseParamsSpec = { $: {} };

// Enum: UserAction
ash.shortcut_customization.mojom.UserAction = {
  kOpenEditDialog: 0,
  kStartAddAccelerator: 1,
  kStartReplaceAccelerator: 2,
  kRemoveAccelerator: 3,
  kSuccessfulModification: 4,
  kResetAction: 5,
  kResetAll: 6,
};

// Enum: EditDialogCompletedActions
ash.shortcut_customization.mojom.EditDialogCompletedActions = {
  kNoAction: 0,
  kAdd: 1,
  kEdit: 2,
  kEditAdd: 3,
  kRemove: 4,
  kRemoveAdd: 5,
  kRemoveEdit: 6,
  kRemoveEditAdd: 7,
  kReset: 8,
  kResetAdd: 9,
  kResetEdit: 10,
  kResetEditAdd: 11,
  kResetRemove: 12,
  kResetRemoveAdd: 13,
  kResetRemoveEdit: 14,
  kResetRemoveEditAdd: 15,
};

// Enum: Subactions
ash.shortcut_customization.mojom.Subactions = {
  kNoErrorCancel: 0,
  kNoErrorSuccess: 1,
  kErrorCancel: 2,
  kErrorSuccess: 3,
};

// Struct: AcceleratorResultData
mojo.internal.Struct(
    ash.shortcut_customization.mojom.AcceleratorResultDataSpec, 'ash.shortcut_customization.mojom.AcceleratorResultData', [
      mojo.internal.StructField('shortcut_name', 0, 0, mojo_base.mojom.String16Spec.$, null, true, 0, undefined),
      mojo.internal.StructField('result', 8, 0, ash.mojom.AcceleratorConfigResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: SimpleAccelerator
mojo.internal.Struct(
    ash.shortcut_customization.mojom.SimpleAcceleratorSpec, 'ash.shortcut_customization.mojom.SimpleAccelerator', [
      mojo.internal.StructField('key_code', 0, 0, ash.mojom.VKeySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('key_state', 8, 0, ui.mojom.AcceleratorKeyStateSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('modifiers', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

// Interface: AcceleratorsUpdatedObserver
mojo.internal.Struct(
    ash.shortcut_customization.mojom.AcceleratorsUpdatedObserver_OnAcceleratorsUpdated_ParamsSpec, 'ash.shortcut_customization.mojom.AcceleratorsUpdatedObserver_OnAcceleratorsUpdated_Params', [
      mojo.internal.StructField('config', 0, 0, mojo.internal.Map(ash.mojom.AcceleratorSourceSpec.$, mojo.internal.Map(mojo.internal.Uint32, mojo.internal.Array(ash.mojom.AcceleratorInfoSpec.$, false), false), false), null, false, 0, undefined),
    ],
    [[0, 16]]);

ash.shortcut_customization.mojom.AcceleratorsUpdatedObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.shortcut_customization.mojom.AcceleratorsUpdatedObserverRemote = class {
  static get $interfaceName() {
    return 'ash.shortcut_customization.mojom.AcceleratorsUpdatedObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.shortcut_customization.mojom.AcceleratorsUpdatedObserverPendingReceiver,
      handle);
    this.$ = new ash.shortcut_customization.mojom.AcceleratorsUpdatedObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.shortcut_customization.mojom.AcceleratorsUpdatedObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onAcceleratorsUpdated(config) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.shortcut_customization.mojom.AcceleratorsUpdatedObserver_OnAcceleratorsUpdated_ParamsSpec,
      null,
      [config],
      false);
  }

};

ash.shortcut_customization.mojom.AcceleratorsUpdatedObserver.getRemote = function() {
  let remote = new ash.shortcut_customization.mojom.AcceleratorsUpdatedObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.shortcut_customization.mojom.AcceleratorsUpdatedObserver',
    'context');
  return remote.$;
};

ash.shortcut_customization.mojom.AcceleratorsUpdatedObserverReceiver = class {
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
          const params = ash.shortcut_customization.mojom.AcceleratorsUpdatedObserver_OnAcceleratorsUpdated_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onAcceleratorsUpdated(params.config);
          break;
        }
      }
    });
  }
};

ash.shortcut_customization.mojom.AcceleratorsUpdatedObserverReceiver = ash.shortcut_customization.mojom.AcceleratorsUpdatedObserverReceiver;

ash.shortcut_customization.mojom.AcceleratorsUpdatedObserverPtr = ash.shortcut_customization.mojom.AcceleratorsUpdatedObserverRemote;
ash.shortcut_customization.mojom.AcceleratorsUpdatedObserverRequest = ash.shortcut_customization.mojom.AcceleratorsUpdatedObserverPendingReceiver;


// Interface: PolicyUpdatedObserver
mojo.internal.Struct(
    ash.shortcut_customization.mojom.PolicyUpdatedObserver_OnCustomizationPolicyUpdated_ParamsSpec, 'ash.shortcut_customization.mojom.PolicyUpdatedObserver_OnCustomizationPolicyUpdated_Params', [
    ],
    [[0, 8]]);

ash.shortcut_customization.mojom.PolicyUpdatedObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.shortcut_customization.mojom.PolicyUpdatedObserverRemote = class {
  static get $interfaceName() {
    return 'ash.shortcut_customization.mojom.PolicyUpdatedObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.shortcut_customization.mojom.PolicyUpdatedObserverPendingReceiver,
      handle);
    this.$ = new ash.shortcut_customization.mojom.PolicyUpdatedObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.shortcut_customization.mojom.PolicyUpdatedObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onCustomizationPolicyUpdated() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.shortcut_customization.mojom.PolicyUpdatedObserver_OnCustomizationPolicyUpdated_ParamsSpec,
      null,
      [],
      false);
  }

};

ash.shortcut_customization.mojom.PolicyUpdatedObserver.getRemote = function() {
  let remote = new ash.shortcut_customization.mojom.PolicyUpdatedObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.shortcut_customization.mojom.PolicyUpdatedObserver',
    'context');
  return remote.$;
};

ash.shortcut_customization.mojom.PolicyUpdatedObserverReceiver = class {
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
          const params = ash.shortcut_customization.mojom.PolicyUpdatedObserver_OnCustomizationPolicyUpdated_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onCustomizationPolicyUpdated();
          break;
        }
      }
    });
  }
};

ash.shortcut_customization.mojom.PolicyUpdatedObserverReceiver = ash.shortcut_customization.mojom.PolicyUpdatedObserverReceiver;

ash.shortcut_customization.mojom.PolicyUpdatedObserverPtr = ash.shortcut_customization.mojom.PolicyUpdatedObserverRemote;
ash.shortcut_customization.mojom.PolicyUpdatedObserverRequest = ash.shortcut_customization.mojom.PolicyUpdatedObserverPendingReceiver;


// Interface: AcceleratorConfigurationProvider
mojo.internal.Struct(
    ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_IsMutable_ParamsSpec, 'ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_IsMutable_Params', [
      mojo.internal.StructField('source', 0, 0, ash.mojom.AcceleratorSourceSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_IsMutable_ResponseParamsSpec, 'ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_IsMutable_ResponseParams', [
      mojo.internal.StructField('is_mutable', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_IsCustomizationAllowedByPolicy_ParamsSpec, 'ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_IsCustomizationAllowedByPolicy_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_IsCustomizationAllowedByPolicy_ResponseParamsSpec, 'ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_IsCustomizationAllowedByPolicy_ResponseParams', [
      mojo.internal.StructField('is_customization_allowed_by_policy', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_GetMetaKeyToDisplay_ParamsSpec, 'ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_GetMetaKeyToDisplay_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_GetMetaKeyToDisplay_ResponseParamsSpec, 'ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_GetMetaKeyToDisplay_ResponseParams', [
      mojo.internal.StructField('meta_key', 0, 0, ui.mojom.MetaKeySpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_GetConflictAccelerator_ParamsSpec, 'ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_GetConflictAccelerator_Params', [
      mojo.internal.StructField('source', 0, 0, ash.mojom.AcceleratorSourceSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('accelerator', 8, 0, ash.shortcut_customization.mojom.SimpleAcceleratorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('action_id', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_GetConflictAccelerator_ResponseParamsSpec, 'ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_GetConflictAccelerator_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, ash.shortcut_customization.mojom.AcceleratorResultDataSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_GetDefaultAcceleratorsForId_ParamsSpec, 'ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_GetDefaultAcceleratorsForId_Params', [
      mojo.internal.StructField('action_id', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_GetDefaultAcceleratorsForId_ResponseParamsSpec, 'ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_GetDefaultAcceleratorsForId_ResponseParams', [
      mojo.internal.StructField('accelerators', 0, 0, mojo.internal.Array(ash.shortcut_customization.mojom.SimpleAcceleratorSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_GetAccelerators_ParamsSpec, 'ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_GetAccelerators_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_GetAccelerators_ResponseParamsSpec, 'ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_GetAccelerators_ResponseParams', [
      mojo.internal.StructField('config', 0, 0, mojo.internal.Map(ash.mojom.AcceleratorSourceSpec.$, mojo.internal.Map(mojo.internal.Uint32, mojo.internal.Array(ash.mojom.AcceleratorInfoSpec.$, false), false), false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_AddObserver_ParamsSpec, 'ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_AddObserver_Params', [
      mojo.internal.StructField('observer', 0, 0, mojo.internal.InterfaceProxy(ash.shortcut_customization.mojom.AcceleratorsUpdatedObserverSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_AddPolicyObserver_ParamsSpec, 'ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_AddPolicyObserver_Params', [
      mojo.internal.StructField('observer', 0, 0, mojo.internal.InterfaceProxy(ash.shortcut_customization.mojom.PolicyUpdatedObserverSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_GetAcceleratorLayoutInfos_ParamsSpec, 'ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_GetAcceleratorLayoutInfos_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_GetAcceleratorLayoutInfos_ResponseParamsSpec, 'ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_GetAcceleratorLayoutInfos_ResponseParams', [
      mojo.internal.StructField('layout_infos', 0, 0, mojo.internal.Array(ash.mojom.AcceleratorLayoutInfoSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_PreventProcessingAccelerators_ParamsSpec, 'ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_PreventProcessingAccelerators_Params', [
      mojo.internal.StructField('prevent_processing_accelerators', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_PreventProcessingAccelerators_ResponseParamsSpec, 'ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_PreventProcessingAccelerators_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_AddAccelerator_ParamsSpec, 'ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_AddAccelerator_Params', [
      mojo.internal.StructField('source', 0, 0, ash.mojom.AcceleratorSourceSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('accelerator', 8, 0, ash.shortcut_customization.mojom.SimpleAcceleratorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('action_id', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_AddAccelerator_ResponseParamsSpec, 'ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_AddAccelerator_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, ash.shortcut_customization.mojom.AcceleratorResultDataSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_RemoveAccelerator_ParamsSpec, 'ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_RemoveAccelerator_Params', [
      mojo.internal.StructField('source', 0, 0, ash.mojom.AcceleratorSourceSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('accelerator', 8, 0, ash.shortcut_customization.mojom.SimpleAcceleratorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('action_id', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_RemoveAccelerator_ResponseParamsSpec, 'ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_RemoveAccelerator_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, ash.shortcut_customization.mojom.AcceleratorResultDataSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_ReplaceAccelerator_ParamsSpec, 'ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_ReplaceAccelerator_Params', [
      mojo.internal.StructField('source', 0, 0, ash.mojom.AcceleratorSourceSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('old_accelerator', 8, 0, ash.shortcut_customization.mojom.SimpleAcceleratorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('new_accelerator', 16, 0, ash.shortcut_customization.mojom.SimpleAcceleratorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('action_id', 24, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_ReplaceAccelerator_ResponseParamsSpec, 'ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_ReplaceAccelerator_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, ash.shortcut_customization.mojom.AcceleratorResultDataSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_RestoreDefault_ParamsSpec, 'ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_RestoreDefault_Params', [
      mojo.internal.StructField('source', 0, 0, ash.mojom.AcceleratorSourceSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('action_id', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_RestoreDefault_ResponseParamsSpec, 'ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_RestoreDefault_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, ash.shortcut_customization.mojom.AcceleratorResultDataSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_RestoreAllDefaults_ParamsSpec, 'ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_RestoreAllDefaults_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_RestoreAllDefaults_ResponseParamsSpec, 'ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_RestoreAllDefaults_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, ash.shortcut_customization.mojom.AcceleratorResultDataSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_RecordUserAction_ParamsSpec, 'ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_RecordUserAction_Params', [
      mojo.internal.StructField('user_action', 0, 0, ash.shortcut_customization.mojom.UserActionSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_RecordMainCategoryNavigation_ParamsSpec, 'ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_RecordMainCategoryNavigation_Params', [
      mojo.internal.StructField('category', 0, 0, ash.mojom.AcceleratorCategorySpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_RecordEditDialogCompletedActions_ParamsSpec, 'ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_RecordEditDialogCompletedActions_Params', [
      mojo.internal.StructField('completed_actions', 0, 0, ash.shortcut_customization.mojom.EditDialogCompletedActionsSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_RecordAddOrEditSubactions_ParamsSpec, 'ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_RecordAddOrEditSubactions_Params', [
      mojo.internal.StructField('subactions', 0, 0, ash.shortcut_customization.mojom.SubactionsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('is_add', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_HasCustomAccelerators_ParamsSpec, 'ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_HasCustomAccelerators_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_HasCustomAccelerators_ResponseParamsSpec, 'ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_HasCustomAccelerators_ResponseParams', [
      mojo.internal.StructField('has_custom_accelerators', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

ash.shortcut_customization.mojom.AcceleratorConfigurationProviderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.shortcut_customization.mojom.AcceleratorConfigurationProviderRemote = class {
  static get $interfaceName() {
    return 'ash.shortcut_customization.mojom.AcceleratorConfigurationProvider';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.shortcut_customization.mojom.AcceleratorConfigurationProviderPendingReceiver,
      handle);
    this.$ = new ash.shortcut_customization.mojom.AcceleratorConfigurationProviderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.shortcut_customization.mojom.AcceleratorConfigurationProviderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  isMutable(source) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_IsMutable_ParamsSpec,
      ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_IsMutable_ResponseParamsSpec,
      [source],
      false);
  }

  isCustomizationAllowedByPolicy() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_IsCustomizationAllowedByPolicy_ParamsSpec,
      ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_IsCustomizationAllowedByPolicy_ResponseParamsSpec,
      [],
      false);
  }

  getMetaKeyToDisplay() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_GetMetaKeyToDisplay_ParamsSpec,
      ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_GetMetaKeyToDisplay_ResponseParamsSpec,
      [],
      false);
  }

  getConflictAccelerator(source, action_id, accelerator) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_GetConflictAccelerator_ParamsSpec,
      ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_GetConflictAccelerator_ResponseParamsSpec,
      [source, action_id, accelerator],
      false);
  }

  getDefaultAcceleratorsForId(action_id) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_GetDefaultAcceleratorsForId_ParamsSpec,
      ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_GetDefaultAcceleratorsForId_ResponseParamsSpec,
      [action_id],
      false);
  }

  getAccelerators() {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_GetAccelerators_ParamsSpec,
      ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_GetAccelerators_ResponseParamsSpec,
      [],
      false);
  }

  addObserver(observer) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_AddObserver_ParamsSpec,
      null,
      [observer],
      false);
  }

  addPolicyObserver(observer) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_AddPolicyObserver_ParamsSpec,
      null,
      [observer],
      false);
  }

  getAcceleratorLayoutInfos() {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_GetAcceleratorLayoutInfos_ParamsSpec,
      ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_GetAcceleratorLayoutInfos_ResponseParamsSpec,
      [],
      false);
  }

  preventProcessingAccelerators(prevent_processing_accelerators) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_PreventProcessingAccelerators_ParamsSpec,
      ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_PreventProcessingAccelerators_ResponseParamsSpec,
      [prevent_processing_accelerators],
      false);
  }

  addAccelerator(source, action_id, accelerator) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_AddAccelerator_ParamsSpec,
      ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_AddAccelerator_ResponseParamsSpec,
      [source, action_id, accelerator],
      false);
  }

  removeAccelerator(source, action_id, accelerator) {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_RemoveAccelerator_ParamsSpec,
      ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_RemoveAccelerator_ResponseParamsSpec,
      [source, action_id, accelerator],
      false);
  }

  replaceAccelerator(source, action_id, old_accelerator, new_accelerator) {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_ReplaceAccelerator_ParamsSpec,
      ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_ReplaceAccelerator_ResponseParamsSpec,
      [source, action_id, old_accelerator, new_accelerator],
      false);
  }

  restoreDefault(source, action_id) {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
      ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_RestoreDefault_ParamsSpec,
      ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_RestoreDefault_ResponseParamsSpec,
      [source, action_id],
      false);
  }

  restoreAllDefaults() {
    // Ordinal: 14
    return this.proxy.sendMessage(
      14,  // ordinal
      ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_RestoreAllDefaults_ParamsSpec,
      ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_RestoreAllDefaults_ResponseParamsSpec,
      [],
      false);
  }

  recordUserAction(user_action) {
    // Ordinal: 15
    return this.proxy.sendMessage(
      15,  // ordinal
      ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_RecordUserAction_ParamsSpec,
      null,
      [user_action],
      false);
  }

  recordMainCategoryNavigation(category) {
    // Ordinal: 16
    return this.proxy.sendMessage(
      16,  // ordinal
      ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_RecordMainCategoryNavigation_ParamsSpec,
      null,
      [category],
      false);
  }

  recordEditDialogCompletedActions(completed_actions) {
    // Ordinal: 17
    return this.proxy.sendMessage(
      17,  // ordinal
      ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_RecordEditDialogCompletedActions_ParamsSpec,
      null,
      [completed_actions],
      false);
  }

  recordAddOrEditSubactions(is_add, subactions) {
    // Ordinal: 18
    return this.proxy.sendMessage(
      18,  // ordinal
      ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_RecordAddOrEditSubactions_ParamsSpec,
      null,
      [is_add, subactions],
      false);
  }

  hasCustomAccelerators() {
    // Ordinal: 19
    return this.proxy.sendMessage(
      19,  // ordinal
      ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_HasCustomAccelerators_ParamsSpec,
      ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_HasCustomAccelerators_ResponseParamsSpec,
      [],
      false);
  }

};

ash.shortcut_customization.mojom.AcceleratorConfigurationProvider.getRemote = function() {
  let remote = new ash.shortcut_customization.mojom.AcceleratorConfigurationProviderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.shortcut_customization.mojom.AcceleratorConfigurationProvider',
    'context');
  return remote.$;
};

ash.shortcut_customization.mojom.AcceleratorConfigurationProviderReceiver = class {
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
          const params = ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_IsMutable_ParamsSpec.$.decode(message.payload);
          const result = this.impl.isMutable(params.source);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_IsMutable_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const params = ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_IsCustomizationAllowedByPolicy_ParamsSpec.$.decode(message.payload);
          const result = this.impl.isCustomizationAllowedByPolicy();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_IsCustomizationAllowedByPolicy_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const params = ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_GetMetaKeyToDisplay_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getMetaKeyToDisplay();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_GetMetaKeyToDisplay_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const params = ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_GetConflictAccelerator_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getConflictAccelerator(params.source, params.action_id, params.accelerator);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_GetConflictAccelerator_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 4: {
          const params = ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_GetDefaultAcceleratorsForId_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getDefaultAcceleratorsForId(params.action_id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_GetDefaultAcceleratorsForId_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 5: {
          const params = ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_GetAccelerators_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getAccelerators();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_GetAccelerators_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 6: {
          const params = ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_AddObserver_ParamsSpec.$.decode(message.payload);
          const result = this.impl.addObserver(params.observer);
          break;
        }
        case 7: {
          const params = ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_AddPolicyObserver_ParamsSpec.$.decode(message.payload);
          const result = this.impl.addPolicyObserver(params.observer);
          break;
        }
        case 8: {
          const params = ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_GetAcceleratorLayoutInfos_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getAcceleratorLayoutInfos();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_GetAcceleratorLayoutInfos_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 9: {
          const params = ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_PreventProcessingAccelerators_ParamsSpec.$.decode(message.payload);
          const result = this.impl.preventProcessingAccelerators(params.prevent_processing_accelerators);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_PreventProcessingAccelerators_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 10: {
          const params = ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_AddAccelerator_ParamsSpec.$.decode(message.payload);
          const result = this.impl.addAccelerator(params.source, params.action_id, params.accelerator);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_AddAccelerator_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 11: {
          const params = ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_RemoveAccelerator_ParamsSpec.$.decode(message.payload);
          const result = this.impl.removeAccelerator(params.source, params.action_id, params.accelerator);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_RemoveAccelerator_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 12: {
          const params = ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_ReplaceAccelerator_ParamsSpec.$.decode(message.payload);
          const result = this.impl.replaceAccelerator(params.source, params.action_id, params.old_accelerator, params.new_accelerator);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_ReplaceAccelerator_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 13: {
          const params = ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_RestoreDefault_ParamsSpec.$.decode(message.payload);
          const result = this.impl.restoreDefault(params.source, params.action_id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_RestoreDefault_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 14: {
          const params = ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_RestoreAllDefaults_ParamsSpec.$.decode(message.payload);
          const result = this.impl.restoreAllDefaults();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_RestoreAllDefaults_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 15: {
          const params = ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_RecordUserAction_ParamsSpec.$.decode(message.payload);
          const result = this.impl.recordUserAction(params.user_action);
          break;
        }
        case 16: {
          const params = ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_RecordMainCategoryNavigation_ParamsSpec.$.decode(message.payload);
          const result = this.impl.recordMainCategoryNavigation(params.category);
          break;
        }
        case 17: {
          const params = ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_RecordEditDialogCompletedActions_ParamsSpec.$.decode(message.payload);
          const result = this.impl.recordEditDialogCompletedActions(params.completed_actions);
          break;
        }
        case 18: {
          const params = ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_RecordAddOrEditSubactions_ParamsSpec.$.decode(message.payload);
          const result = this.impl.recordAddOrEditSubactions(params.is_add, params.subactions);
          break;
        }
        case 19: {
          const params = ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_HasCustomAccelerators_ParamsSpec.$.decode(message.payload);
          const result = this.impl.hasCustomAccelerators();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_HasCustomAccelerators_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
    });
  }
};

ash.shortcut_customization.mojom.AcceleratorConfigurationProviderReceiver = ash.shortcut_customization.mojom.AcceleratorConfigurationProviderReceiver;

ash.shortcut_customization.mojom.AcceleratorConfigurationProviderPtr = ash.shortcut_customization.mojom.AcceleratorConfigurationProviderRemote;
ash.shortcut_customization.mojom.AcceleratorConfigurationProviderRequest = ash.shortcut_customization.mojom.AcceleratorConfigurationProviderPendingReceiver;

