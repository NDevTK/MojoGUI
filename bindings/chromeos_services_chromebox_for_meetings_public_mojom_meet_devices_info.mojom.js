// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/services/chromebox_for_meetings/public/mojom/meet_devices_info.mojom
// Module: chromeos.cfm.mojom

'use strict';

// Module namespace
var chromeos = chromeos || {};
chromeos.cfm = chromeos.cfm || {};
chromeos.cfm.mojom = chromeos.cfm.mojom || {};


// Struct: PolicyInfo
chromeos.cfm.mojom.PolicyInfoSpec = {
  $: {
    structSpec: {
      name: 'chromeos.cfm.mojom.PolicyInfo',
      packedSize: 64,
      fields: [
        { name: 'timestamp_ms', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
        { name: 'device_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'service_account_email_address', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'service_account_gaia_id', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
        { name: 'cros_device_id', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'cohort_hint', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'release_channel_delegated', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 64}]
    }
  }
};

// Struct: SysInfo
chromeos.cfm.mojom.SysInfoSpec = {
  $: {
    structSpec: {
      name: 'chromeos.cfm.mojom.SysInfo',
      packedSize: 72,
      fields: [
        { name: 'kernel_version', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'release_version', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'release_build_type', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'release_track', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'release_milestone', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'browser_version', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'channel_name', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'release_board', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 72}]
    }
  }
};

// Struct: MachineStatisticsInfo
chromeos.cfm.mojom.MachineStatisticsInfoSpec = {
  $: {
    structSpec: {
      name: 'chromeos.cfm.mojom.MachineStatisticsInfo',
      packedSize: 16,
      fields: [
        { name: 'hwid', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Interface: MeetDevicesInfo
chromeos.cfm.mojom.MeetDevicesInfo = {};

chromeos.cfm.mojom.MeetDevicesInfo_AddDeviceSettingsObserver_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.cfm.mojom.MeetDevicesInfo_AddDeviceSettingsObserver_Params',
      packedSize: 16,
      fields: [
        { name: 'observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(chromeos.cfm.mojom.PolicyInfoObserverRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

chromeos.cfm.mojom.MeetDevicesInfo_GetPolicyInfo_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.cfm.mojom.MeetDevicesInfo_GetPolicyInfo_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

chromeos.cfm.mojom.MeetDevicesInfo_GetSysInfo_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.cfm.mojom.MeetDevicesInfo_GetSysInfo_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

chromeos.cfm.mojom.MeetDevicesInfo_GetMachineStatisticsInfo_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.cfm.mojom.MeetDevicesInfo_GetMachineStatisticsInfo_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

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
};

chromeos.cfm.mojom.MeetDevicesInfoRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  addDeviceSettingsObserver(observer) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      chromeos.cfm.mojom.MeetDevicesInfo_AddDeviceSettingsObserver_ParamsSpec,
      null,
      [observer]);
  }

  getPolicyInfo() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      chromeos.cfm.mojom.MeetDevicesInfo_GetPolicyInfo_ParamsSpec,
      chromeos.cfm.mojom.MeetDevicesInfo_GetPolicyInfo_ResponseParamsSpec,
      []);
  }

  getSysInfo() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      chromeos.cfm.mojom.MeetDevicesInfo_GetSysInfo_ParamsSpec,
      chromeos.cfm.mojom.MeetDevicesInfo_GetSysInfo_ResponseParamsSpec,
      []);
  }

  getMachineStatisticsInfo() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      chromeos.cfm.mojom.MeetDevicesInfo_GetMachineStatisticsInfo_ParamsSpec,
      chromeos.cfm.mojom.MeetDevicesInfo_GetMachineStatisticsInfo_ResponseParamsSpec,
      []);
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

// ParamsSpec for AddDeviceSettingsObserver
chromeos.cfm.mojom.MeetDevicesInfo_AddDeviceSettingsObserver_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.cfm.mojom.MeetDevicesInfo.AddDeviceSettingsObserver_Params',
      packedSize: 16,
      fields: [
        { name: 'observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(chromeos.cfm.mojom.PolicyInfoObserverRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetPolicyInfo
chromeos.cfm.mojom.MeetDevicesInfo_GetPolicyInfo_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.cfm.mojom.MeetDevicesInfo.GetPolicyInfo_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

chromeos.cfm.mojom.MeetDevicesInfo_GetPolicyInfo_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.cfm.mojom.MeetDevicesInfo.GetPolicyInfo_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'info', packedOffset: 0, packedBitOffset: 0, type: chromeos.cfm.mojom.PolicyInfoSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetSysInfo
chromeos.cfm.mojom.MeetDevicesInfo_GetSysInfo_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.cfm.mojom.MeetDevicesInfo.GetSysInfo_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

chromeos.cfm.mojom.MeetDevicesInfo_GetSysInfo_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.cfm.mojom.MeetDevicesInfo.GetSysInfo_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'info', packedOffset: 0, packedBitOffset: 0, type: chromeos.cfm.mojom.SysInfoSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetMachineStatisticsInfo
chromeos.cfm.mojom.MeetDevicesInfo_GetMachineStatisticsInfo_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.cfm.mojom.MeetDevicesInfo.GetMachineStatisticsInfo_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

chromeos.cfm.mojom.MeetDevicesInfo_GetMachineStatisticsInfo_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.cfm.mojom.MeetDevicesInfo.GetMachineStatisticsInfo_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'info', packedOffset: 0, packedBitOffset: 0, type: chromeos.cfm.mojom.MachineStatisticsInfoSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
chromeos.cfm.mojom.MeetDevicesInfoPtr = chromeos.cfm.mojom.MeetDevicesInfoRemote;
chromeos.cfm.mojom.MeetDevicesInfoRequest = chromeos.cfm.mojom.MeetDevicesInfoPendingReceiver;


// Interface: PolicyInfoObserver
chromeos.cfm.mojom.PolicyInfoObserver = {};

chromeos.cfm.mojom.PolicyInfoObserver_OnPolicyInfoChange_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.cfm.mojom.PolicyInfoObserver_OnPolicyInfoChange_Params',
      packedSize: 16,
      fields: [
        { name: 'info', packedOffset: 0, packedBitOffset: 0, type: chromeos.cfm.mojom.PolicyInfoSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

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
};

chromeos.cfm.mojom.PolicyInfoObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onPolicyInfoChange(info) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      chromeos.cfm.mojom.PolicyInfoObserver_OnPolicyInfoChange_ParamsSpec,
      null,
      [info]);
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

// ParamsSpec for OnPolicyInfoChange
chromeos.cfm.mojom.PolicyInfoObserver_OnPolicyInfoChange_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.cfm.mojom.PolicyInfoObserver.OnPolicyInfoChange_Params',
      packedSize: 16,
      fields: [
        { name: 'info', packedOffset: 0, packedBitOffset: 0, type: chromeos.cfm.mojom.PolicyInfoSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
chromeos.cfm.mojom.PolicyInfoObserverPtr = chromeos.cfm.mojom.PolicyInfoObserverRemote;
chromeos.cfm.mojom.PolicyInfoObserverRequest = chromeos.cfm.mojom.PolicyInfoObserverPendingReceiver;

