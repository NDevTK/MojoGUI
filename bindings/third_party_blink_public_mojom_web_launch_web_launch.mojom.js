// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/web_launch/web_launch.mojom
// Module: blink.mojom

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var mojo_base = mojo_base || {};
var url = url || {};

blink.mojom.WebLaunchService = {};
blink.mojom.WebLaunchService.$interfaceName = 'blink.mojom.WebLaunchService';
blink.mojom.WebLaunchService_SetLaunchFiles_ParamsSpec = { $: {} };
blink.mojom.WebLaunchService_EnqueueLaunchParams_ParamsSpec = { $: {} };

// Interface: WebLaunchService
mojo.internal.Struct(
    blink.mojom.WebLaunchService_SetLaunchFiles_ParamsSpec, 'blink.mojom.WebLaunchService_SetLaunchFiles_Params', [
      mojo.internal.StructField('files', 0, 0, mojo.internal.Array(blink.mojom.FileSystemAccessEntrySpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.WebLaunchService_EnqueueLaunchParams_ParamsSpec, 'blink.mojom.WebLaunchService_EnqueueLaunchParams_Params', [
      mojo.internal.StructField('launch_url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('time_navigation_started_in_browser', 8, 0, mojo_base.mojom.TimeTicksSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('navigation_started', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

blink.mojom.WebLaunchServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.WebLaunchServiceRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.WebLaunchService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.WebLaunchServicePendingReceiver,
      handle);
    this.$ = new blink.mojom.WebLaunchServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  setLaunchFiles(files) {
    return this.$.setLaunchFiles(files);
  }
  enqueueLaunchParams(launch_url, time_navigation_started_in_browser, navigation_started) {
    return this.$.enqueueLaunchParams(launch_url, time_navigation_started_in_browser, navigation_started);
  }
};

blink.mojom.WebLaunchServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('WebLaunchService', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  setLaunchFiles(files) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      blink.mojom.WebLaunchService_SetLaunchFiles_ParamsSpec,
      null,
      [files],
      false);
  }

  enqueueLaunchParams(launch_url, time_navigation_started_in_browser, navigation_started) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      blink.mojom.WebLaunchService_EnqueueLaunchParams_ParamsSpec,
      null,
      [launch_url, time_navigation_started_in_browser, navigation_started],
      false);
  }

};

blink.mojom.WebLaunchService.getRemote = function() {
  let remote = new blink.mojom.WebLaunchServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.WebLaunchService',
    'context');
  return remote.$;
};

blink.mojom.WebLaunchServiceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('WebLaunchService', [
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
    this.router_.onConnectionError.addListener(() => {
       console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
    });
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
             decoder.decodeStructInline(blink.mojom.WebLaunchService_SetLaunchFiles_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.WebLaunchService_EnqueueLaunchParams_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.WebLaunchService_SetLaunchFiles_ParamsSpec.$.structSpec);
          const result = this.impl.setLaunchFiles(params.files);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.WebLaunchService_EnqueueLaunchParams_ParamsSpec.$.structSpec);
          const result = this.impl.enqueueLaunchParams(params.launch_url, params.time_navigation_started_in_browser, params.navigation_started);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

blink.mojom.WebLaunchServiceReceiver = blink.mojom.WebLaunchServiceReceiver;

blink.mojom.WebLaunchServicePtr = blink.mojom.WebLaunchServiceRemote;
blink.mojom.WebLaunchServiceRequest = blink.mojom.WebLaunchServicePendingReceiver;

