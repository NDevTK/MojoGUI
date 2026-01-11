// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/services/chromebox_for_meetings/public/mojom/meet_browser.mojom
// Module: ash.cfm.mojom

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
  translateVideoDeviceId(hashed_device_id) {
    return this.$.translateVideoDeviceId(hashed_device_id);
  }
};

ash.cfm.mojom.MeetBrowserRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('MeetBrowser', [
      { explicit: 0 },
    ]);
  }

  translateVideoDeviceId(hashed_device_id) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
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
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('MeetBrowser', [
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
             decoder.decodeStructInline(ash.cfm.mojom.MeetBrowser_TranslateVideoDeviceId_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.cfm.mojom.MeetBrowser_TranslateVideoDeviceId_ParamsSpec.$.structSpec);
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
      } catch (err) {}
    }});
  }
};

ash.cfm.mojom.MeetBrowserReceiver = ash.cfm.mojom.MeetBrowserReceiver;

ash.cfm.mojom.MeetBrowserPtr = ash.cfm.mojom.MeetBrowserRemote;
ash.cfm.mojom.MeetBrowserRequest = ash.cfm.mojom.MeetBrowserPendingReceiver;

