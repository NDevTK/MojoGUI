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
};

// Enum: EditDialogCompletedActions
ash.shortcut_customization.mojom.EditDialogCompletedActions = {
};

// Enum: Subactions
ash.shortcut_customization.mojom.Subactions = {
};

// Struct: AcceleratorResultData
ash.shortcut_customization.mojom.AcceleratorResultData = class {
  constructor(values = {}) {
    this.result = values.result !== undefined ? values.result : "";
  }
};

// Struct: SimpleAccelerator
ash.shortcut_customization.mojom.SimpleAccelerator = class {
  constructor(values = {}) {
    this.key_state = values.key_state !== undefined ? values.key_state : 0;
  }
};

// Interface: AcceleratorsUpdatedObserver
ash.shortcut_customization.mojom.AcceleratorsUpdatedObserverPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.shortcut_customization.mojom.AcceleratorsUpdatedObserver';
  }

  onAcceleratorsUpdated(config) {
    // Method: OnAcceleratorsUpdated
    // Call: OnAcceleratorsUpdated(config)
  }

};

ash.shortcut_customization.mojom.AcceleratorsUpdatedObserverRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: PolicyUpdatedObserver
ash.shortcut_customization.mojom.PolicyUpdatedObserverPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.shortcut_customization.mojom.PolicyUpdatedObserver';
  }

  onCustomizationPolicyUpdated() {
    // Method: OnCustomizationPolicyUpdated
    // Call: OnCustomizationPolicyUpdated()
  }

};

ash.shortcut_customization.mojom.PolicyUpdatedObserverRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: AcceleratorConfigurationProvider
ash.shortcut_customization.mojom.AcceleratorConfigurationProviderPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.shortcut_customization.mojom.AcceleratorConfigurationProvider';
  }

  isMutable(source) {
    // Method: IsMutable
    return new Promise((resolve) => {
      // Call: IsMutable(source)
      resolve({});
    });
  }

  isCustomizationAllowedByPolicy() {
    // Method: IsCustomizationAllowedByPolicy
    return new Promise((resolve) => {
      // Call: IsCustomizationAllowedByPolicy()
      resolve({});
    });
  }

  getMetaKeyToDisplay() {
    // Method: GetMetaKeyToDisplay
    return new Promise((resolve) => {
      // Call: GetMetaKeyToDisplay()
      resolve({});
    });
  }

  getConflictAccelerator(source, action_id, accelerator) {
    // Method: GetConflictAccelerator
    return new Promise((resolve) => {
      // Call: GetConflictAccelerator(source, action_id, accelerator)
      resolve({});
    });
  }

  getDefaultAcceleratorsForId(action_id) {
    // Method: GetDefaultAcceleratorsForId
    return new Promise((resolve) => {
      // Call: GetDefaultAcceleratorsForId(action_id)
      resolve({});
    });
  }

  getAccelerators() {
    // Method: GetAccelerators
    return new Promise((resolve) => {
      // Call: GetAccelerators()
      resolve({});
    });
  }

  addObserver(observer) {
    // Method: AddObserver
    // Call: AddObserver(observer)
  }

  addPolicyObserver(observer) {
    // Method: AddPolicyObserver
    // Call: AddPolicyObserver(observer)
  }

  getAcceleratorLayoutInfos() {
    // Method: GetAcceleratorLayoutInfos
    return new Promise((resolve) => {
      // Call: GetAcceleratorLayoutInfos()
      resolve({});
    });
  }

  preventProcessingAccelerators(prevent_processing_accelerators) {
    // Method: PreventProcessingAccelerators
    // Call: PreventProcessingAccelerators(prevent_processing_accelerators)
  }

  addAccelerator(source, action_id, accelerator) {
    // Method: AddAccelerator
    return new Promise((resolve) => {
      // Call: AddAccelerator(source, action_id, accelerator)
      resolve({});
    });
  }

  removeAccelerator(source, action_id, accelerator) {
    // Method: RemoveAccelerator
    return new Promise((resolve) => {
      // Call: RemoveAccelerator(source, action_id, accelerator)
      resolve({});
    });
  }

  replaceAccelerator(source, action_id, old_accelerator, new_accelerator) {
    // Method: ReplaceAccelerator
    return new Promise((resolve) => {
      // Call: ReplaceAccelerator(source, action_id, old_accelerator, new_accelerator)
      resolve({});
    });
  }

  restoreDefault(source, action_id) {
    // Method: RestoreDefault
    return new Promise((resolve) => {
      // Call: RestoreDefault(source, action_id)
      resolve({});
    });
  }

  restoreAllDefaults() {
    // Method: RestoreAllDefaults
    return new Promise((resolve) => {
      // Call: RestoreAllDefaults()
      resolve({});
    });
  }

  recordUserAction(user_action) {
    // Method: RecordUserAction
    // Call: RecordUserAction(user_action)
  }

  recordMainCategoryNavigation(category) {
    // Method: RecordMainCategoryNavigation
    // Call: RecordMainCategoryNavigation(category)
  }

  recordEditDialogCompletedActions(completed_actions) {
    // Method: RecordEditDialogCompletedActions
    // Call: RecordEditDialogCompletedActions(completed_actions)
  }

  recordAddOrEditSubactions(is_add, subactions) {
    // Method: RecordAddOrEditSubactions
    // Call: RecordAddOrEditSubactions(is_add, subactions)
  }

  hasCustomAccelerators() {
    // Method: HasCustomAccelerators
    return new Promise((resolve) => {
      // Call: HasCustomAccelerators()
      resolve({});
    });
  }

};

ash.shortcut_customization.mojom.AcceleratorConfigurationProviderRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
