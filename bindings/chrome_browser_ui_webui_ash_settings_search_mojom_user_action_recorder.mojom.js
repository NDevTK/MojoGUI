// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/ash/settings/search/mojom/user_action_recorder.mojom
// Module: ash.settings.mojom

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
  recordPageFocus() {
    return this.$.recordPageFocus();
  }
  recordPageBlur() {
    return this.$.recordPageBlur();
  }
  recordClick() {
    return this.$.recordClick();
  }
  recordNavigation() {
    return this.$.recordNavigation();
  }
  recordSearch() {
    return this.$.recordSearch();
  }
  recordSettingChange() {
    return this.$.recordSettingChange();
  }
  recordSettingChangeWithDetails(setting, value) {
    return this.$.recordSettingChangeWithDetails(setting, value);
  }
};

ash.settings.mojom.UserActionRecorderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('UserActionRecorder', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  recordPageFocus() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      ash.settings.mojom.UserActionRecorder_RecordPageFocus_ParamsSpec,
      null,
      [],
      false);
  }

  recordPageBlur() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      ash.settings.mojom.UserActionRecorder_RecordPageBlur_ParamsSpec,
      null,
      [],
      false);
  }

  recordClick() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      ash.settings.mojom.UserActionRecorder_RecordClick_ParamsSpec,
      null,
      [],
      false);
  }

  recordNavigation() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      ash.settings.mojom.UserActionRecorder_RecordNavigation_ParamsSpec,
      null,
      [],
      false);
  }

  recordSearch() {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      ash.settings.mojom.UserActionRecorder_RecordSearch_ParamsSpec,
      null,
      [],
      false);
  }

  recordSettingChange() {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      ash.settings.mojom.UserActionRecorder_RecordSettingChange_ParamsSpec,
      null,
      [],
      false);
  }

  recordSettingChangeWithDetails(setting, value) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
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
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('UserActionRecorder', [
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
    if (this.router_.onConnectionError) {
      this.router_.onConnectionError.addListener(() => {
         console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
      });
    }
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
             decoder.decodeStructInline(ash.settings.mojom.UserActionRecorder_RecordPageFocus_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.settings.mojom.UserActionRecorder_RecordPageBlur_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.settings.mojom.UserActionRecorder_RecordClick_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.settings.mojom.UserActionRecorder_RecordNavigation_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.settings.mojom.UserActionRecorder_RecordSearch_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.settings.mojom.UserActionRecorder_RecordSettingChange_ParamsSpec);
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.settings.mojom.UserActionRecorder_RecordSettingChangeWithDetails_ParamsSpec);
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.settings.mojom.UserActionRecorder_RecordPageFocus_ParamsSpec.$.structSpec);
          const result = this.impl.recordPageFocus();
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.settings.mojom.UserActionRecorder_RecordPageBlur_ParamsSpec.$.structSpec);
          const result = this.impl.recordPageBlur();
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.settings.mojom.UserActionRecorder_RecordClick_ParamsSpec.$.structSpec);
          const result = this.impl.recordClick();
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.settings.mojom.UserActionRecorder_RecordNavigation_ParamsSpec.$.structSpec);
          const result = this.impl.recordNavigation();
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.settings.mojom.UserActionRecorder_RecordSearch_ParamsSpec.$.structSpec);
          const result = this.impl.recordSearch();
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.settings.mojom.UserActionRecorder_RecordSettingChange_ParamsSpec.$.structSpec);
          const result = this.impl.recordSettingChange();
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.settings.mojom.UserActionRecorder_RecordSettingChangeWithDetails_ParamsSpec.$.structSpec);
          const result = this.impl.recordSettingChangeWithDetails(params.setting, params.value);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

ash.settings.mojom.UserActionRecorderReceiver = ash.settings.mojom.UserActionRecorderReceiver;

ash.settings.mojom.UserActionRecorderPtr = ash.settings.mojom.UserActionRecorderRemote;
ash.settings.mojom.UserActionRecorderRequest = ash.settings.mojom.UserActionRecorderPendingReceiver;

