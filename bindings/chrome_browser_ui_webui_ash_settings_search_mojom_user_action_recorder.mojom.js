// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/ash/settings/search/mojom/user_action_recorder.mojom
// Module: ash.settings.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.settings = ash.settings || {};
ash.settings.mojom = ash.settings.mojom || {};


// Interface: UserActionRecorder
ash.settings.mojom.UserActionRecorderPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.settings.mojom.UserActionRecorder';
  }

  recordPageFocus() {
    // Method: RecordPageFocus
    // Call: RecordPageFocus()
  }

  blurred(longer) {
    // Method: blurred
    // Call: blurred(longer)
  }

  recordPageBlur() {
    // Method: RecordPageBlur
    // Call: RecordPageBlur()
  }

  recordClick() {
    // Method: RecordClick
    // Call: RecordClick()
  }

  recordNavigation() {
    // Method: RecordNavigation
    // Call: RecordNavigation()
  }

  recordSearch() {
    // Method: RecordSearch
    // Call: RecordSearch()
  }

  tODO() {
    // Method: TODO
    // Call: TODO()
  }

  recordSettingChange() {
    // Method: RecordSettingChange
    // Call: RecordSettingChange()
  }

  recordSettingChangeWithDetails(setting, value) {
    // Method: RecordSettingChangeWithDetails
    // Call: RecordSettingChangeWithDetails(setting, value)
  }

};

ash.settings.mojom.UserActionRecorderRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
