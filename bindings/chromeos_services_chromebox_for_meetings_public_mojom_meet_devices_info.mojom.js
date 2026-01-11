// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/services/chromebox_for_meetings/public/mojom/meet_devices_info.mojom
// Module: chromeos.cfm.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var chromeos = chromeos || {};
chromeos.cfm = chromeos.cfm || {};
chromeos.cfm.mojom = chromeos.cfm.mojom || {};

chromeos.cfm.mojom.PolicyInfoSpec = { $: {} };
chromeos.cfm.mojom.SysInfoSpec = { $: {} };
chromeos.cfm.mojom.MachineStatisticsInfoSpec = { $: {} };
chromeos.cfm.mojom.MeetDevicesInfo = {};
chromeos.cfm.mojom.MeetDevicesInfo.$interfaceName = 'chromeos.cfm.mojom.MeetDevicesInfo';
chromeos.cfm.mojom.MeetDevicesInfo_AddDeviceSettingsObserver_ParamsSpec = { $: {} };
chromeos.cfm.mojom.MeetDevicesInfo_GetPolicyInfo_ParamsSpec = { $: {} };
chromeos.cfm.mojom.MeetDevicesInfo_GetPolicyInfo_ResponseParamsSpec = { $: {} };
chromeos.cfm.mojom.MeetDevicesInfo_GetSysInfo_ParamsSpec = { $: {} };
chromeos.cfm.mojom.MeetDevicesInfo_GetSysInfo_ResponseParamsSpec = { $: {} };
chromeos.cfm.mojom.MeetDevicesInfo_GetMachineStatisticsInfo_ParamsSpec = { $: {} };
chromeos.cfm.mojom.MeetDevicesInfo_GetMachineStatisticsInfo_ResponseParamsSpec = { $: {} };
chromeos.cfm.mojom.PolicyInfoObserver = {};
chromeos.cfm.mojom.PolicyInfoObserver.$interfaceName = 'chromeos.cfm.mojom.PolicyInfoObserver';
chromeos.cfm.mojom.PolicyInfoObserver_OnPolicyInfoChange_ParamsSpec = { $: {} };

// Struct: PolicyInfo
mojo.internal.Struct(
    chromeos.cfm.mojom.PolicyInfoSpec, 'chromeos.cfm.mojom.PolicyInfo', [
      mojo.internal.StructField('timestamp_ms', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('device_id', 8, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('service_account_email_address', 16, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('service_account_gaia_id', 24, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('cros_device_id', 32, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('cohort_hint', 40, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('release_channel_delegated', 48, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 64]]);

// Struct: SysInfo
mojo.internal.Struct(
    chromeos.cfm.mojom.SysInfoSpec, 'chromeos.cfm.mojom.SysInfo', [
      mojo.internal.StructField('kernel_version', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('release_version', 8, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('release_build_type', 16, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('release_track', 24, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('release_milestone', 32, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('browser_version', 40, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('channel_name', 48, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('release_board', 56, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 72]]);

// Struct: MachineStatisticsInfo
mojo.internal.Struct(
    chromeos.cfm.mojom.MachineStatisticsInfoSpec, 'chromeos.cfm.mojom.MachineStatisticsInfo', [
      mojo.internal.StructField('hwid', 0, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 16]]);

// Interface: MeetDevicesInfo
mojo.internal.Struct(
    chromeos.cfm.mojom.MeetDevicesInfo_AddDeviceSettingsObserver_ParamsSpec, 'chromeos.cfm.mojom.MeetDevicesInfo_AddDeviceSettingsObserver_Params', [
      mojo.internal.StructField('observer', 0, 0, mojo.internal.InterfaceProxy(chromeos.cfm.mojom.PolicyInfoObserverRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromeos.cfm.mojom.MeetDevicesInfo_GetPolicyInfo_ParamsSpec, 'chromeos.cfm.mojom.MeetDevicesInfo_GetPolicyInfo_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    chromeos.cfm.mojom.MeetDevicesInfo_GetPolicyInfo_ResponseParamsSpec, 'chromeos.cfm.mojom.MeetDevicesInfo_GetPolicyInfo_ResponseParams', [
      mojo.internal.StructField('info', 0, 0, chromeos.cfm.mojom.PolicyInfoSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromeos.cfm.mojom.MeetDevicesInfo_GetSysInfo_ParamsSpec, 'chromeos.cfm.mojom.MeetDevicesInfo_GetSysInfo_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    chromeos.cfm.mojom.MeetDevicesInfo_GetSysInfo_ResponseParamsSpec, 'chromeos.cfm.mojom.MeetDevicesInfo_GetSysInfo_ResponseParams', [
      mojo.internal.StructField('info', 0, 0, chromeos.cfm.mojom.SysInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromeos.cfm.mojom.MeetDevicesInfo_GetMachineStatisticsInfo_ParamsSpec, 'chromeos.cfm.mojom.MeetDevicesInfo_GetMachineStatisticsInfo_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    chromeos.cfm.mojom.MeetDevicesInfo_GetMachineStatisticsInfo_ResponseParamsSpec, 'chromeos.cfm.mojom.MeetDevicesInfo_GetMachineStatisticsInfo_ResponseParams', [
      mojo.internal.StructField('info', 0, 0, chromeos.cfm.mojom.MachineStatisticsInfoSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

chromeos.cfm.mojom.MeetDevicesInfoPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chromeos.cfm.mojom.MeetDevicesInfoRemote = class {
  static get $interfaceName() {
    return 'chromeos.cfm.mojom.MeetDevicesInfo';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chromeos.cfm.mojom.MeetDevicesInfoPendingReceiver,
      handle);
    this.$ = new chromeos.cfm.mojom.MeetDevicesInfoRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  addDeviceSettingsObserver(observer) {
    return this.$.addDeviceSettingsObserver(observer);
  }
  getPolicyInfo() {
    return this.$.getPolicyInfo();
  }
  getSysInfo() {
    return this.$.getSysInfo();
  }
  getMachineStatisticsInfo() {
    return this.$.getMachineStatisticsInfo();
  }
};

chromeos.cfm.mojom.MeetDevicesInfoRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('MeetDevicesInfo', [
      { explicit: 0 },
      { explicit: 1 },
      { explicit: 2 },
      { explicit: 3 },
    ]);
  }

  addDeviceSettingsObserver(observer) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      chromeos.cfm.mojom.MeetDevicesInfo_AddDeviceSettingsObserver_ParamsSpec,
      null,
      [observer],
      false);
  }

  getPolicyInfo() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      chromeos.cfm.mojom.MeetDevicesInfo_GetPolicyInfo_ParamsSpec,
      chromeos.cfm.mojom.MeetDevicesInfo_GetPolicyInfo_ResponseParamsSpec,
      [],
      false);
  }

  getSysInfo() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      chromeos.cfm.mojom.MeetDevicesInfo_GetSysInfo_ParamsSpec,
      chromeos.cfm.mojom.MeetDevicesInfo_GetSysInfo_ResponseParamsSpec,
      [],
      false);
  }

  getMachineStatisticsInfo() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      chromeos.cfm.mojom.MeetDevicesInfo_GetMachineStatisticsInfo_ParamsSpec,
      chromeos.cfm.mojom.MeetDevicesInfo_GetMachineStatisticsInfo_ResponseParamsSpec,
      [],
      false);
  }

};

chromeos.cfm.mojom.MeetDevicesInfo.getRemote = function() {
  let remote = new chromeos.cfm.mojom.MeetDevicesInfoRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromeos.cfm.mojom.MeetDevicesInfo',
    'context');
  return remote.$;
};

chromeos.cfm.mojom.MeetDevicesInfoReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('MeetDevicesInfo', [
      { explicit: 0 },
      { explicit: 1 },
      { explicit: 2 },
      { explicit: 3 },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
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
             decoder.decodeStructInline(chromeos.cfm.mojom.MeetDevicesInfo_AddDeviceSettingsObserver_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromeos.cfm.mojom.MeetDevicesInfo_GetPolicyInfo_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromeos.cfm.mojom.MeetDevicesInfo_GetSysInfo_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromeos.cfm.mojom.MeetDevicesInfo_GetMachineStatisticsInfo_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromeos.cfm.mojom.MeetDevicesInfo_AddDeviceSettingsObserver_ParamsSpec.$.structSpec);
          const result = this.impl.addDeviceSettingsObserver(params.observer);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromeos.cfm.mojom.MeetDevicesInfo_GetPolicyInfo_ParamsSpec.$.structSpec);
          const result = this.impl.getPolicyInfo();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, chromeos.cfm.mojom.MeetDevicesInfo_GetPolicyInfo_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromeos.cfm.mojom.MeetDevicesInfo_GetSysInfo_ParamsSpec.$.structSpec);
          const result = this.impl.getSysInfo();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, chromeos.cfm.mojom.MeetDevicesInfo_GetSysInfo_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromeos.cfm.mojom.MeetDevicesInfo_GetMachineStatisticsInfo_ParamsSpec.$.structSpec);
          const result = this.impl.getMachineStatisticsInfo();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, chromeos.cfm.mojom.MeetDevicesInfo_GetMachineStatisticsInfo_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
      } catch (err) {}
    });
  }
};

chromeos.cfm.mojom.MeetDevicesInfoReceiver = chromeos.cfm.mojom.MeetDevicesInfoReceiver;

chromeos.cfm.mojom.MeetDevicesInfoPtr = chromeos.cfm.mojom.MeetDevicesInfoRemote;
chromeos.cfm.mojom.MeetDevicesInfoRequest = chromeos.cfm.mojom.MeetDevicesInfoPendingReceiver;


// Interface: PolicyInfoObserver
mojo.internal.Struct(
    chromeos.cfm.mojom.PolicyInfoObserver_OnPolicyInfoChange_ParamsSpec, 'chromeos.cfm.mojom.PolicyInfoObserver_OnPolicyInfoChange_Params', [
      mojo.internal.StructField('info', 0, 0, chromeos.cfm.mojom.PolicyInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

chromeos.cfm.mojom.PolicyInfoObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chromeos.cfm.mojom.PolicyInfoObserverRemote = class {
  static get $interfaceName() {
    return 'chromeos.cfm.mojom.PolicyInfoObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chromeos.cfm.mojom.PolicyInfoObserverPendingReceiver,
      handle);
    this.$ = new chromeos.cfm.mojom.PolicyInfoObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onPolicyInfoChange(info) {
    return this.$.onPolicyInfoChange(info);
  }
};

chromeos.cfm.mojom.PolicyInfoObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('PolicyInfoObserver', [
      { explicit: 0 },
    ]);
  }

  onPolicyInfoChange(info) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      chromeos.cfm.mojom.PolicyInfoObserver_OnPolicyInfoChange_ParamsSpec,
      null,
      [info],
      false);
  }

};

chromeos.cfm.mojom.PolicyInfoObserver.getRemote = function() {
  let remote = new chromeos.cfm.mojom.PolicyInfoObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromeos.cfm.mojom.PolicyInfoObserver',
    'context');
  return remote.$;
};

chromeos.cfm.mojom.PolicyInfoObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('PolicyInfoObserver', [
      { explicit: 0 },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
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
             decoder.decodeStructInline(chromeos.cfm.mojom.PolicyInfoObserver_OnPolicyInfoChange_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromeos.cfm.mojom.PolicyInfoObserver_OnPolicyInfoChange_ParamsSpec.$.structSpec);
          const result = this.impl.onPolicyInfoChange(params.info);
          break;
        }
      }
      } catch (err) {}
    });
  }
};

chromeos.cfm.mojom.PolicyInfoObserverReceiver = chromeos.cfm.mojom.PolicyInfoObserverReceiver;

chromeos.cfm.mojom.PolicyInfoObserverPtr = chromeos.cfm.mojom.PolicyInfoObserverRemote;
chromeos.cfm.mojom.PolicyInfoObserverRequest = chromeos.cfm.mojom.PolicyInfoObserverPendingReceiver;

