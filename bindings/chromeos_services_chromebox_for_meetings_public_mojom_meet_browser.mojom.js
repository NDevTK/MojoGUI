// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/services/chromebox_for_meetings/public/mojom/meet_browser.mojom
// Module: ash.cfm.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.cfm = ash.cfm || {};
ash.cfm.mojom = ash.cfm.mojom || {};

ash.cfm.mojom.MeetBrowser = {};
ash.cfm.mojom.MeetBrowser.$interfaceName = 'ash.cfm.mojom.MeetBrowser';
ash.cfm.mojom.MeetBrowser_TranslateVideoDeviceId_ParamsSpec = { $: {} };
ash.cfm.mojom.MeetBrowser_TranslateVideoDeviceId_ResponseParamsSpec = { $: {} };

// Interface: MeetBrowser
mojo.internal.Struct(
    ash.cfm.mojom.MeetBrowser_TranslateVideoDeviceId_ParamsSpec, 'ash.cfm.mojom.MeetBrowser_TranslateVideoDeviceId_Params', [
      mojo.internal.StructField('hashed_device_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.cfm.mojom.MeetBrowser_TranslateVideoDeviceId_ResponseParamsSpec, 'ash.cfm.mojom.MeetBrowser_TranslateVideoDeviceId_ResponseParams', [
      mojo.internal.StructField('device_path', 0, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 16]]);

ash.cfm.mojom.MeetBrowserPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.cfm.mojom.MeetBrowserRemote = class {
  static get $interfaceName() {
    return 'ash.cfm.mojom.MeetBrowser';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.cfm.mojom.MeetBrowserPendingReceiver,
      handle);
    this.$ = new ash.cfm.mojom.MeetBrowserRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.cfm.mojom.MeetBrowserRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  translateVideoDeviceId(hashed_device_id) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.cfm.mojom.MeetBrowser_TranslateVideoDeviceId_ParamsSpec,
      ash.cfm.mojom.MeetBrowser_TranslateVideoDeviceId_ResponseParamsSpec,
      [hashed_device_id],
      false);
  }

};

ash.cfm.mojom.MeetBrowser.getRemote = function() {
  let remote = new ash.cfm.mojom.MeetBrowserRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.cfm.mojom.MeetBrowser',
    'context');
  return remote.$;
};

ash.cfm.mojom.MeetBrowserReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      switch (header.ordinal) {
        case 0: {
          const params = ash.cfm.mojom.MeetBrowser_TranslateVideoDeviceId_ParamsSpec.$.decode(message.payload);
          console.log('[GeneratedReceiver] Calling impl.translateVideoDeviceId');
          const result = this.impl.translateVideoDeviceId(params.hashed_device_id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.cfm.mojom.MeetBrowser_TranslateVideoDeviceId_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

ash.cfm.mojom.MeetBrowserReceiver = ash.cfm.mojom.MeetBrowserReceiver;

ash.cfm.mojom.MeetBrowserPtr = ash.cfm.mojom.MeetBrowserRemote;
ash.cfm.mojom.MeetBrowserRequest = ash.cfm.mojom.MeetBrowserPendingReceiver;

