// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/services/chromebox_for_meetings/public/mojom/meet_devices_info.mojom
// Module: chromeos.cfm.mojom

'use strict';

// Module namespace
var chromeos = chromeos || {};
chromeos.cfm = chromeos.cfm || {};
chromeos.cfm.mojom = chromeos.cfm.mojom || {};


// Interface: MeetDevicesInfo
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

};

chromeos.cfm.mojom.MeetDevicesInfo.getRemote = function() {
  let remote = new chromeos.cfm.mojom.MeetDevicesInfoRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromeos.cfm.mojom.MeetDevicesInfo',
    'context');
  return remote.$;
}};

// Legacy compatibility
chromeos.cfm.mojom.MeetDevicesInfoPtr = chromeos.cfm.mojom.MeetDevicesInfoRemote;
chromeos.cfm.mojom.MeetDevicesInfoRequest = chromeos.cfm.mojom.MeetDevicesInfoPendingReceiver;


// Interface: PolicyInfoObserver
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

};

chromeos.cfm.mojom.PolicyInfoObserver.getRemote = function() {
  let remote = new chromeos.cfm.mojom.PolicyInfoObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromeos.cfm.mojom.PolicyInfoObserver',
    'context');
  return remote.$;
}};

// Legacy compatibility
chromeos.cfm.mojom.PolicyInfoObserverPtr = chromeos.cfm.mojom.PolicyInfoObserverRemote;
chromeos.cfm.mojom.PolicyInfoObserverRequest = chromeos.cfm.mojom.PolicyInfoObserverPendingReceiver;

