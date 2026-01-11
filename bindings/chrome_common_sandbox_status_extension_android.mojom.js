// Auto-generated MojoJS binding
// Source: chromium_src/chrome/common/sandbox_status_extension_android.mojom
// Module: chrome.mojom

// Module namespace
var chrome = chrome || {};
chrome.mojom = chrome.mojom || {};

chrome.mojom.SandboxStatusExtension = {};
chrome.mojom.SandboxStatusExtension.$interfaceName = 'chrome.mojom.SandboxStatusExtension';
chrome.mojom.SandboxStatusExtension_AddSandboxStatusExtension_ParamsSpec = { $: {} };

// Interface: SandboxStatusExtension
mojo.internal.Struct(
    chrome.mojom.SandboxStatusExtension_AddSandboxStatusExtension_ParamsSpec, 'chrome.mojom.SandboxStatusExtension_AddSandboxStatusExtension_Params', [
    ],
    [[0, 8]]);

chrome.mojom.SandboxStatusExtensionPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chrome.mojom.SandboxStatusExtensionRemote = class {
  static get $interfaceName() {
    return 'chrome.mojom.SandboxStatusExtension';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chrome.mojom.SandboxStatusExtensionPendingReceiver,
      handle);
    this.$ = new chrome.mojom.SandboxStatusExtensionRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  addSandboxStatusExtension() {
    return this.$.addSandboxStatusExtension();
  }
};

chrome.mojom.SandboxStatusExtensionRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('SandboxStatusExtension', [
      { explicit: null },
    ]);
  }

  addSandboxStatusExtension() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      chrome.mojom.SandboxStatusExtension_AddSandboxStatusExtension_ParamsSpec,
      null,
      [],
      false);
  }

};

chrome.mojom.SandboxStatusExtension.getRemote = function() {
  let remote = new chrome.mojom.SandboxStatusExtensionRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chrome.mojom.SandboxStatusExtension',
    'context');
  return remote.$;
};

chrome.mojom.SandboxStatusExtensionReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('SandboxStatusExtension', [
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
             decoder.decodeStructInline(chrome.mojom.SandboxStatusExtension_AddSandboxStatusExtension_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chrome.mojom.SandboxStatusExtension_AddSandboxStatusExtension_ParamsSpec.$.structSpec);
          const result = this.impl.addSandboxStatusExtension();
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

chrome.mojom.SandboxStatusExtensionReceiver = chrome.mojom.SandboxStatusExtensionReceiver;

chrome.mojom.SandboxStatusExtensionPtr = chrome.mojom.SandboxStatusExtensionRemote;
chrome.mojom.SandboxStatusExtensionRequest = chrome.mojom.SandboxStatusExtensionPendingReceiver;

