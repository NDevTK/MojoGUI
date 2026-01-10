// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/ash/settings/search/mojom/user_action_recorder.mojom
// Module: ash.settings.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.settings = ash.settings || {};
ash.settings.mojom = ash.settings.mojom || {};
var chromeos = chromeos || {};

ash.settings.mojom.SettingChangeValueSpec = { $: {} };
ash.settings.mojom.UserActionRecorder = {};
ash.settings.mojom.UserActionRecorder.$interfaceName = 'ash.settings.mojom.UserActionRecorder';
ash.settings.mojom.UserActionRecorder_RecordPageFocus_ParamsSpec = { $: {} };
ash.settings.mojom.UserActionRecorder_RecordPageBlur_ParamsSpec = { $: {} };
ash.settings.mojom.UserActionRecorder_RecordClick_ParamsSpec = { $: {} };
ash.settings.mojom.UserActionRecorder_RecordNavigation_ParamsSpec = { $: {} };
ash.settings.mojom.UserActionRecorder_RecordSearch_ParamsSpec = { $: {} };
ash.settings.mojom.UserActionRecorder_RecordSettingChange_ParamsSpec = { $: {} };
ash.settings.mojom.UserActionRecorder_RecordSettingChangeWithDetails_ParamsSpec = { $: {} };

// Union: SettingChangeValue
mojo.internal.Union(
    ash.settings.mojom.SettingChangeValueSpec, 'ash.settings.mojom.SettingChangeValue', {
      'bool_value': {
        'ordinal': 0,
        'type': mojo.internal.Bool,
        'nullable': false,
      },
      'int_value': {
        'ordinal': 1,
        'type': mojo.internal.Int32,
        'nullable': false,
      },
      'string_value': {
        'ordinal': 2,
        'type': mojo.internal.String,
        'nullable': false,
      },
    });

// Interface: UserActionRecorder
mojo.internal.Struct(
    ash.settings.mojom.UserActionRecorder_RecordPageFocus_ParamsSpec, 'ash.settings.mojom.UserActionRecorder_RecordPageFocus_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.settings.mojom.UserActionRecorder_RecordPageBlur_ParamsSpec, 'ash.settings.mojom.UserActionRecorder_RecordPageBlur_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.settings.mojom.UserActionRecorder_RecordClick_ParamsSpec, 'ash.settings.mojom.UserActionRecorder_RecordClick_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.settings.mojom.UserActionRecorder_RecordNavigation_ParamsSpec, 'ash.settings.mojom.UserActionRecorder_RecordNavigation_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.settings.mojom.UserActionRecorder_RecordSearch_ParamsSpec, 'ash.settings.mojom.UserActionRecorder_RecordSearch_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.settings.mojom.UserActionRecorder_RecordSettingChange_ParamsSpec, 'ash.settings.mojom.UserActionRecorder_RecordSettingChange_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.settings.mojom.UserActionRecorder_RecordSettingChangeWithDetails_ParamsSpec, 'ash.settings.mojom.UserActionRecorder_RecordSettingChangeWithDetails_Params', [
      mojo.internal.StructField('setting', 0, 0, chromeos.settings.mojom.SettingSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('value', 8, 0, ash.settings.mojom.SettingChangeValueSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

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
      ash.settings.mojom.UserActionRecorder_RecordPageFocus_ParamsSpec,
      null,
      [],
      false);
  }

  recordPageBlur() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.settings.mojom.UserActionRecorder_RecordPageBlur_ParamsSpec,
      null,
      [],
      false);
  }

  recordClick() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.settings.mojom.UserActionRecorder_RecordClick_ParamsSpec,
      null,
      [],
      false);
  }

  recordNavigation() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      ash.settings.mojom.UserActionRecorder_RecordNavigation_ParamsSpec,
      null,
      [],
      false);
  }

  recordSearch() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      ash.settings.mojom.UserActionRecorder_RecordSearch_ParamsSpec,
      null,
      [],
      false);
  }

  recordSettingChange() {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      ash.settings.mojom.UserActionRecorder_RecordSettingChange_ParamsSpec,
      null,
      [],
      false);
  }

  recordSettingChangeWithDetails(setting, value) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      ash.settings.mojom.UserActionRecorder_RecordSettingChangeWithDetails_ParamsSpec,
      null,
      [setting, value],
      false);
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

ash.settings.mojom.UserActionRecorderReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = ash.settings.mojom.UserActionRecorder_RecordPageFocus_ParamsSpec.$.decode(message.payload);
          const result = this.impl.recordPageFocus();
          break;
        }
        case 1: {
          const params = ash.settings.mojom.UserActionRecorder_RecordPageBlur_ParamsSpec.$.decode(message.payload);
          const result = this.impl.recordPageBlur();
          break;
        }
        case 2: {
          const params = ash.settings.mojom.UserActionRecorder_RecordClick_ParamsSpec.$.decode(message.payload);
          const result = this.impl.recordClick();
          break;
        }
        case 3: {
          const params = ash.settings.mojom.UserActionRecorder_RecordNavigation_ParamsSpec.$.decode(message.payload);
          const result = this.impl.recordNavigation();
          break;
        }
        case 4: {
          const params = ash.settings.mojom.UserActionRecorder_RecordSearch_ParamsSpec.$.decode(message.payload);
          const result = this.impl.recordSearch();
          break;
        }
        case 5: {
          const params = ash.settings.mojom.UserActionRecorder_RecordSettingChange_ParamsSpec.$.decode(message.payload);
          const result = this.impl.recordSettingChange();
          break;
        }
        case 6: {
          const params = ash.settings.mojom.UserActionRecorder_RecordSettingChangeWithDetails_ParamsSpec.$.decode(message.payload);
          const result = this.impl.recordSettingChangeWithDetails(params.setting, params.value);
          break;
        }
      }
    });
  }
};

ash.settings.mojom.UserActionRecorderReceiver = ash.settings.mojom.UserActionRecorderReceiver;

ash.settings.mojom.UserActionRecorderPtr = ash.settings.mojom.UserActionRecorderRemote;
ash.settings.mojom.UserActionRecorderRequest = ash.settings.mojom.UserActionRecorderPendingReceiver;

