// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/ash/settings/search/mojom/user_action_recorder.mojom
// Module: ash.settings.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.settings = ash.settings || {};
ash.settings.mojom = ash.settings.mojom || {};


// Interface: UserActionRecorder
ash.settings.mojom.UserActionRecorderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.settings.mojom.UserActionRecorderRemote = class {
  static get $interfaceName() {
    return 'ash.settings.mojom.UserActionRecorder';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.settings.mojom.UserActionRecorderPendingReceiver,
      handle);
    this.$ = new ash.settings.mojom.UserActionRecorderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.settings.mojom.UserActionRecorderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  recordPageFocus() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.settings.mojom.UserActionRecorder_RecordPageFocus_ParamsSpec.$,
      null,
      []);
  }

  recordPageBlur() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.settings.mojom.UserActionRecorder_RecordPageBlur_ParamsSpec.$,
      null,
      []);
  }

  recordClick() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.settings.mojom.UserActionRecorder_RecordClick_ParamsSpec.$,
      null,
      []);
  }

  recordNavigation() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      ash.settings.mojom.UserActionRecorder_RecordNavigation_ParamsSpec.$,
      null,
      []);
  }

  recordSearch() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      ash.settings.mojom.UserActionRecorder_RecordSearch_ParamsSpec.$,
      null,
      []);
  }

  recordSettingChange() {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      ash.settings.mojom.UserActionRecorder_RecordSettingChange_ParamsSpec.$,
      null,
      []);
  }

  recordSettingChangeWithDetails(setting, value) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      ash.settings.mojom.UserActionRecorder_RecordSettingChangeWithDetails_ParamsSpec.$,
      null,
      [setting, value]);
  }

};

ash.settings.mojom.UserActionRecorder.getRemote = function() {
  let remote = new ash.settings.mojom.UserActionRecorderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.settings.mojom.UserActionRecorder',
    'context');
  return remote.$;
};

// ParamsSpec for RecordPageFocus
ash.settings.mojom.UserActionRecorder_RecordPageFocus_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.mojom.UserActionRecorder.RecordPageFocus_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for RecordPageBlur
ash.settings.mojom.UserActionRecorder_RecordPageBlur_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.mojom.UserActionRecorder.RecordPageBlur_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for RecordClick
ash.settings.mojom.UserActionRecorder_RecordClick_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.mojom.UserActionRecorder.RecordClick_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for RecordNavigation
ash.settings.mojom.UserActionRecorder_RecordNavigation_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.mojom.UserActionRecorder.RecordNavigation_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for RecordSearch
ash.settings.mojom.UserActionRecorder_RecordSearch_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.mojom.UserActionRecorder.RecordSearch_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for RecordSettingChange
ash.settings.mojom.UserActionRecorder_RecordSettingChange_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.mojom.UserActionRecorder.RecordSettingChange_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for RecordSettingChangeWithDetails
ash.settings.mojom.UserActionRecorder_RecordSettingChangeWithDetails_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.mojom.UserActionRecorder.RecordSettingChangeWithDetails_Params',
      packedSize: 24,
      fields: [
        { name: 'setting', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'value', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
ash.settings.mojom.UserActionRecorderPtr = ash.settings.mojom.UserActionRecorderRemote;
ash.settings.mojom.UserActionRecorderRequest = ash.settings.mojom.UserActionRecorderPendingReceiver;

