// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/services/chromebox_for_meetings/public/mojom/meet_browser.mojom
// Module: ash.cfm.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.cfm = ash.cfm || {};
ash.cfm.cfm.mojom = ash.cfm.cfm.mojom || {};


// Interface: MeetBrowser
ash.cfm.cfm.mojom.mojom.MeetBrowser = {};

ash.cfm.cfm.mojom.mojom.MeetBrowserPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.cfm.cfm.mojom.mojom.MeetBrowserRemote = class {
  static get $interfaceName() {
    return 'ash.cfm.mojom.MeetBrowser';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.cfm.cfm.mojom.mojom.MeetBrowserPendingReceiver,
      handle);
    this.$ = new ash.cfm.cfm.mojom.mojom.MeetBrowserRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.cfm.cfm.mojom.mojom.MeetBrowserRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  translateVideoDeviceId(hashed_device_id) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.cfm.cfm.mojom.mojom.MeetBrowser_TranslateVideoDeviceId_ParamsSpec,
      ash.cfm.cfm.mojom.mojom.MeetBrowser_TranslateVideoDeviceId_ResponseParamsSpec,
      [hashed_device_id]);
  }

};

ash.cfm.cfm.mojom.mojom.MeetBrowser.getRemote = function() {
  let remote = new ash.cfm.cfm.mojom.mojom.MeetBrowserRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.cfm.mojom.MeetBrowser',
    'context');
  return remote.$;
};

// ParamsSpec for TranslateVideoDeviceId
ash.cfm.cfm.mojom.mojom.MeetBrowser_TranslateVideoDeviceId_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cfm.mojom.MeetBrowser.TranslateVideoDeviceId_Params',
      packedSize: 16,
      fields: [
        { name: 'hashed_device_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

ash.cfm.cfm.mojom.mojom.MeetBrowser_TranslateVideoDeviceId_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cfm.mojom.MeetBrowser.TranslateVideoDeviceId_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'device_path', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
ash.cfm.cfm.mojom.mojom.MeetBrowserPtr = ash.cfm.cfm.mojom.mojom.MeetBrowserRemote;
ash.cfm.cfm.mojom.mojom.MeetBrowserRequest = ash.cfm.cfm.mojom.mojom.MeetBrowserPendingReceiver;

