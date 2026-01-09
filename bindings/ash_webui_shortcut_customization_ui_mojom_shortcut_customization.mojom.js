// Auto-generated MojoJS binding
// Source: chromium_src/ash/webui/shortcut_customization_ui/mojom/shortcut_customization.mojom
// Module: ash.shortcut_customization.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.shortcut_customization = ash.shortcut_customization || {};
ash.shortcut_customization.mojom = ash.shortcut_customization.mojom || {};


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
ash.shortcut_customization.mojom.AcceleratorResultDataSpec = {
  $: {
    structSpec: {
      name: 'ash.shortcut_customization.mojom.AcceleratorResultData',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: SimpleAccelerator
ash.shortcut_customization.mojom.SimpleAcceleratorSpec = {
  $: {
    structSpec: {
      name: 'ash.shortcut_customization.mojom.SimpleAccelerator',
      packedSize: 16,
      fields: [
        { name: 'key_state', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Interface: AcceleratorsUpdatedObserver
ash.shortcut_customization.mojom.AcceleratorsUpdatedObserver = {};

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
      [config]);
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

// ParamsSpec for OnAcceleratorsUpdated
ash.shortcut_customization.mojom.AcceleratorsUpdatedObserver_OnAcceleratorsUpdated_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shortcut_customization.mojom.AcceleratorsUpdatedObserver.OnAcceleratorsUpdated_Params',
      packedSize: 16,
      fields: [
        { name: 'config', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Map, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
ash.shortcut_customization.mojom.AcceleratorsUpdatedObserverPtr = ash.shortcut_customization.mojom.AcceleratorsUpdatedObserverRemote;
ash.shortcut_customization.mojom.AcceleratorsUpdatedObserverRequest = ash.shortcut_customization.mojom.AcceleratorsUpdatedObserverPendingReceiver;


// Interface: PolicyUpdatedObserver
ash.shortcut_customization.mojom.PolicyUpdatedObserver = {};

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
      []);
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

// ParamsSpec for OnCustomizationPolicyUpdated
ash.shortcut_customization.mojom.PolicyUpdatedObserver_OnCustomizationPolicyUpdated_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shortcut_customization.mojom.PolicyUpdatedObserver.OnCustomizationPolicyUpdated_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
ash.shortcut_customization.mojom.PolicyUpdatedObserverPtr = ash.shortcut_customization.mojom.PolicyUpdatedObserverRemote;
ash.shortcut_customization.mojom.PolicyUpdatedObserverRequest = ash.shortcut_customization.mojom.PolicyUpdatedObserverPendingReceiver;


// Interface: AcceleratorConfigurationProvider
ash.shortcut_customization.mojom.AcceleratorConfigurationProvider = {};

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
      [source]);
  }

  isCustomizationAllowedByPolicy() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_IsCustomizationAllowedByPolicy_ParamsSpec,
      ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_IsCustomizationAllowedByPolicy_ResponseParamsSpec,
      []);
  }

  getMetaKeyToDisplay() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_GetMetaKeyToDisplay_ParamsSpec,
      ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_GetMetaKeyToDisplay_ResponseParamsSpec,
      []);
  }

  getConflictAccelerator(source, action_id, accelerator) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_GetConflictAccelerator_ParamsSpec,
      ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_GetConflictAccelerator_ResponseParamsSpec,
      [source, action_id, accelerator]);
  }

  getDefaultAcceleratorsForId(action_id) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_GetDefaultAcceleratorsForId_ParamsSpec,
      ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_GetDefaultAcceleratorsForId_ResponseParamsSpec,
      [action_id]);
  }

  getAccelerators() {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_GetAccelerators_ParamsSpec,
      ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_GetAccelerators_ResponseParamsSpec,
      []);
  }

  addObserver(observer) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_AddObserver_ParamsSpec,
      null,
      [observer]);
  }

  addPolicyObserver(observer) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_AddPolicyObserver_ParamsSpec,
      null,
      [observer]);
  }

  getAcceleratorLayoutInfos() {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_GetAcceleratorLayoutInfos_ParamsSpec,
      ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_GetAcceleratorLayoutInfos_ResponseParamsSpec,
      []);
  }

  preventProcessingAccelerators(prevent_processing_accelerators) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_PreventProcessingAccelerators_ParamsSpec,
      null,
      [prevent_processing_accelerators]);
  }

  addAccelerator(source, action_id, accelerator) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_AddAccelerator_ParamsSpec,
      ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_AddAccelerator_ResponseParamsSpec,
      [source, action_id, accelerator]);
  }

  removeAccelerator(source, action_id, accelerator) {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_RemoveAccelerator_ParamsSpec,
      ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_RemoveAccelerator_ResponseParamsSpec,
      [source, action_id, accelerator]);
  }

  replaceAccelerator(source, action_id, old_accelerator, new_accelerator) {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_ReplaceAccelerator_ParamsSpec,
      ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_ReplaceAccelerator_ResponseParamsSpec,
      [source, action_id, old_accelerator, new_accelerator]);
  }

  restoreDefault(source, action_id) {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
      ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_RestoreDefault_ParamsSpec,
      ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_RestoreDefault_ResponseParamsSpec,
      [source, action_id]);
  }

  restoreAllDefaults() {
    // Ordinal: 14
    return this.proxy.sendMessage(
      14,  // ordinal
      ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_RestoreAllDefaults_ParamsSpec,
      ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_RestoreAllDefaults_ResponseParamsSpec,
      []);
  }

  recordUserAction(user_action) {
    // Ordinal: 15
    return this.proxy.sendMessage(
      15,  // ordinal
      ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_RecordUserAction_ParamsSpec,
      null,
      [user_action]);
  }

  recordMainCategoryNavigation(category) {
    // Ordinal: 16
    return this.proxy.sendMessage(
      16,  // ordinal
      ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_RecordMainCategoryNavigation_ParamsSpec,
      null,
      [category]);
  }

  recordEditDialogCompletedActions(completed_actions) {
    // Ordinal: 17
    return this.proxy.sendMessage(
      17,  // ordinal
      ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_RecordEditDialogCompletedActions_ParamsSpec,
      null,
      [completed_actions]);
  }

  recordAddOrEditSubactions(is_add, subactions) {
    // Ordinal: 18
    return this.proxy.sendMessage(
      18,  // ordinal
      ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_RecordAddOrEditSubactions_ParamsSpec,
      null,
      [is_add, subactions]);
  }

  hasCustomAccelerators() {
    // Ordinal: 19
    return this.proxy.sendMessage(
      19,  // ordinal
      ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_HasCustomAccelerators_ParamsSpec,
      ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_HasCustomAccelerators_ResponseParamsSpec,
      []);
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

// ParamsSpec for IsMutable
ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_IsMutable_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shortcut_customization.mojom.AcceleratorConfigurationProvider.IsMutable_Params',
      packedSize: 16,
      fields: [
        { name: 'source', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_IsMutable_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shortcut_customization.mojom.AcceleratorConfigurationProvider.IsMutable_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'is_mutable', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for IsCustomizationAllowedByPolicy
ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_IsCustomizationAllowedByPolicy_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shortcut_customization.mojom.AcceleratorConfigurationProvider.IsCustomizationAllowedByPolicy_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_IsCustomizationAllowedByPolicy_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shortcut_customization.mojom.AcceleratorConfigurationProvider.IsCustomizationAllowedByPolicy_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'is_customization_allowed_by_policy', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetMetaKeyToDisplay
ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_GetMetaKeyToDisplay_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shortcut_customization.mojom.AcceleratorConfigurationProvider.GetMetaKeyToDisplay_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_GetMetaKeyToDisplay_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shortcut_customization.mojom.AcceleratorConfigurationProvider.GetMetaKeyToDisplay_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'meta_key', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetConflictAccelerator
ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_GetConflictAccelerator_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shortcut_customization.mojom.AcceleratorConfigurationProvider.GetConflictAccelerator_Params',
      packedSize: 32,
      fields: [
        { name: 'source', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'accelerator', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'action_id', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_GetConflictAccelerator_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shortcut_customization.mojom.AcceleratorConfigurationProvider.GetConflictAccelerator_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetDefaultAcceleratorsForId
ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_GetDefaultAcceleratorsForId_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shortcut_customization.mojom.AcceleratorConfigurationProvider.GetDefaultAcceleratorsForId_Params',
      packedSize: 16,
      fields: [
        { name: 'action_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_GetDefaultAcceleratorsForId_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shortcut_customization.mojom.AcceleratorConfigurationProvider.GetDefaultAcceleratorsForId_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'accelerators', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetAccelerators
ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_GetAccelerators_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shortcut_customization.mojom.AcceleratorConfigurationProvider.GetAccelerators_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_GetAccelerators_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shortcut_customization.mojom.AcceleratorConfigurationProvider.GetAccelerators_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'config', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Map, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for AddObserver
ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_AddObserver_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shortcut_customization.mojom.AcceleratorConfigurationProvider.AddObserver_Params',
      packedSize: 16,
      fields: [
        { name: 'observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for AddPolicyObserver
ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_AddPolicyObserver_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shortcut_customization.mojom.AcceleratorConfigurationProvider.AddPolicyObserver_Params',
      packedSize: 16,
      fields: [
        { name: 'observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetAcceleratorLayoutInfos
ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_GetAcceleratorLayoutInfos_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shortcut_customization.mojom.AcceleratorConfigurationProvider.GetAcceleratorLayoutInfos_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_GetAcceleratorLayoutInfos_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shortcut_customization.mojom.AcceleratorConfigurationProvider.GetAcceleratorLayoutInfos_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'layout_infos', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for PreventProcessingAccelerators
ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_PreventProcessingAccelerators_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shortcut_customization.mojom.AcceleratorConfigurationProvider.PreventProcessingAccelerators_Params',
      packedSize: 16,
      fields: [
        { name: 'prevent_processing_accelerators', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for AddAccelerator
ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_AddAccelerator_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shortcut_customization.mojom.AcceleratorConfigurationProvider.AddAccelerator_Params',
      packedSize: 32,
      fields: [
        { name: 'source', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'accelerator', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'action_id', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_AddAccelerator_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shortcut_customization.mojom.AcceleratorConfigurationProvider.AddAccelerator_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for RemoveAccelerator
ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_RemoveAccelerator_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shortcut_customization.mojom.AcceleratorConfigurationProvider.RemoveAccelerator_Params',
      packedSize: 32,
      fields: [
        { name: 'source', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'accelerator', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'action_id', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_RemoveAccelerator_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shortcut_customization.mojom.AcceleratorConfigurationProvider.RemoveAccelerator_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ReplaceAccelerator
ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_ReplaceAccelerator_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shortcut_customization.mojom.AcceleratorConfigurationProvider.ReplaceAccelerator_Params',
      packedSize: 40,
      fields: [
        { name: 'source', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'old_accelerator', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'new_accelerator', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'action_id', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_ReplaceAccelerator_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shortcut_customization.mojom.AcceleratorConfigurationProvider.ReplaceAccelerator_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for RestoreDefault
ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_RestoreDefault_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shortcut_customization.mojom.AcceleratorConfigurationProvider.RestoreDefault_Params',
      packedSize: 24,
      fields: [
        { name: 'source', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'action_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_RestoreDefault_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shortcut_customization.mojom.AcceleratorConfigurationProvider.RestoreDefault_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for RestoreAllDefaults
ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_RestoreAllDefaults_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shortcut_customization.mojom.AcceleratorConfigurationProvider.RestoreAllDefaults_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_RestoreAllDefaults_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shortcut_customization.mojom.AcceleratorConfigurationProvider.RestoreAllDefaults_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for RecordUserAction
ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_RecordUserAction_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shortcut_customization.mojom.AcceleratorConfigurationProvider.RecordUserAction_Params',
      packedSize: 16,
      fields: [
        { name: 'user_action', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for RecordMainCategoryNavigation
ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_RecordMainCategoryNavigation_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shortcut_customization.mojom.AcceleratorConfigurationProvider.RecordMainCategoryNavigation_Params',
      packedSize: 16,
      fields: [
        { name: 'category', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for RecordEditDialogCompletedActions
ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_RecordEditDialogCompletedActions_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shortcut_customization.mojom.AcceleratorConfigurationProvider.RecordEditDialogCompletedActions_Params',
      packedSize: 16,
      fields: [
        { name: 'completed_actions', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for RecordAddOrEditSubactions
ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_RecordAddOrEditSubactions_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shortcut_customization.mojom.AcceleratorConfigurationProvider.RecordAddOrEditSubactions_Params',
      packedSize: 24,
      fields: [
        { name: 'subactions', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'is_add', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for HasCustomAccelerators
ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_HasCustomAccelerators_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shortcut_customization.mojom.AcceleratorConfigurationProvider.HasCustomAccelerators_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_HasCustomAccelerators_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shortcut_customization.mojom.AcceleratorConfigurationProvider.HasCustomAccelerators_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'has_custom_accelerators', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
ash.shortcut_customization.mojom.AcceleratorConfigurationProviderPtr = ash.shortcut_customization.mojom.AcceleratorConfigurationProviderRemote;
ash.shortcut_customization.mojom.AcceleratorConfigurationProviderRequest = ash.shortcut_customization.mojom.AcceleratorConfigurationProviderPendingReceiver;

