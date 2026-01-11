// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/loader/content_security_notifier.mojom
// Module: blink.mojom

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var url = url || {};

blink.mojom.ContentSecurityNotifier = {};
blink.mojom.ContentSecurityNotifier.$interfaceName = 'blink.mojom.ContentSecurityNotifier';
blink.mojom.ContentSecurityNotifier_NotifyContentWithCertificateErrorsRan_ParamsSpec = { $: {} };
blink.mojom.ContentSecurityNotifier_NotifyContentWithCertificateErrorsDisplayed_ParamsSpec = { $: {} };
blink.mojom.ContentSecurityNotifier_NotifyInsecureContentRan_ParamsSpec = { $: {} };

// Interface: ContentSecurityNotifier
mojo.internal.Struct(
    blink.mojom.ContentSecurityNotifier_NotifyContentWithCertificateErrorsRan_ParamsSpec, 'blink.mojom.ContentSecurityNotifier_NotifyContentWithCertificateErrorsRan_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.ContentSecurityNotifier_NotifyContentWithCertificateErrorsDisplayed_ParamsSpec, 'blink.mojom.ContentSecurityNotifier_NotifyContentWithCertificateErrorsDisplayed_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.ContentSecurityNotifier_NotifyInsecureContentRan_ParamsSpec, 'blink.mojom.ContentSecurityNotifier_NotifyInsecureContentRan_Params', [
      mojo.internal.StructField('origin', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('insecure_url', 8, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

blink.mojom.ContentSecurityNotifierPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.ContentSecurityNotifierRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.ContentSecurityNotifier';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.ContentSecurityNotifierPendingReceiver,
      handle);
    this.$ = new blink.mojom.ContentSecurityNotifierRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  notifyContentWithCertificateErrorsRan() {
    return this.$.notifyContentWithCertificateErrorsRan();
  }
  notifyContentWithCertificateErrorsDisplayed() {
    return this.$.notifyContentWithCertificateErrorsDisplayed();
  }
  notifyInsecureContentRan(origin, insecure_url) {
    return this.$.notifyInsecureContentRan(origin, insecure_url);
  }
};

blink.mojom.ContentSecurityNotifierRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ContentSecurityNotifier', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  notifyContentWithCertificateErrorsRan() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      blink.mojom.ContentSecurityNotifier_NotifyContentWithCertificateErrorsRan_ParamsSpec,
      null,
      [],
      false);
  }

  notifyContentWithCertificateErrorsDisplayed() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      blink.mojom.ContentSecurityNotifier_NotifyContentWithCertificateErrorsDisplayed_ParamsSpec,
      null,
      [],
      false);
  }

  notifyInsecureContentRan(origin, insecure_url) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      blink.mojom.ContentSecurityNotifier_NotifyInsecureContentRan_ParamsSpec,
      null,
      [origin, insecure_url],
      false);
  }

};

blink.mojom.ContentSecurityNotifier.getRemote = function() {
  let remote = new blink.mojom.ContentSecurityNotifierRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.ContentSecurityNotifier',
    'context');
  return remote.$;
};

blink.mojom.ContentSecurityNotifierReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ContentSecurityNotifier', [
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
             decoder.decodeStructInline(blink.mojom.ContentSecurityNotifier_NotifyContentWithCertificateErrorsRan_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.ContentSecurityNotifier_NotifyContentWithCertificateErrorsDisplayed_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.ContentSecurityNotifier_NotifyInsecureContentRan_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.ContentSecurityNotifier_NotifyContentWithCertificateErrorsRan_ParamsSpec.$.structSpec);
          const result = this.impl.notifyContentWithCertificateErrorsRan();
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.ContentSecurityNotifier_NotifyContentWithCertificateErrorsDisplayed_ParamsSpec.$.structSpec);
          const result = this.impl.notifyContentWithCertificateErrorsDisplayed();
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.ContentSecurityNotifier_NotifyInsecureContentRan_ParamsSpec.$.structSpec);
          const result = this.impl.notifyInsecureContentRan(params.origin, params.insecure_url);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

blink.mojom.ContentSecurityNotifierReceiver = blink.mojom.ContentSecurityNotifierReceiver;

blink.mojom.ContentSecurityNotifierPtr = blink.mojom.ContentSecurityNotifierRemote;
blink.mojom.ContentSecurityNotifierRequest = blink.mojom.ContentSecurityNotifierPendingReceiver;

