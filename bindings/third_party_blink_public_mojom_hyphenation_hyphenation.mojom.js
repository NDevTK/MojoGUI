// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/hyphenation/hyphenation.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var mojo_base = mojo_base || {};

blink.mojom.Hyphenation = {};
blink.mojom.Hyphenation.$interfaceName = 'blink.mojom.Hyphenation';
blink.mojom.Hyphenation_OpenDictionary_ParamsSpec = { $: {} };
blink.mojom.Hyphenation_OpenDictionary_ResponseParamsSpec = { $: {} };

// Interface: Hyphenation
mojo.internal.Struct(
    blink.mojom.Hyphenation_OpenDictionary_ParamsSpec, 'blink.mojom.Hyphenation_OpenDictionary_Params', [
      mojo.internal.StructField('locale', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.Hyphenation_OpenDictionary_ResponseParamsSpec, 'blink.mojom.Hyphenation_OpenDictionary_ResponseParams', [
      mojo.internal.StructField('hyphenation_dictionary_handle', 0, 0, mojo_base.mojom.ReadOnlyFileSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

blink.mojom.HyphenationPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.HyphenationRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.Hyphenation';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.HyphenationPendingReceiver,
      handle);
    this.$ = new blink.mojom.HyphenationRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.HyphenationRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  openDictionary(locale) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.Hyphenation_OpenDictionary_ParamsSpec,
      blink.mojom.Hyphenation_OpenDictionary_ResponseParamsSpec,
      [locale],
      false);
  }

};

blink.mojom.Hyphenation.getRemote = function() {
  let remote = new blink.mojom.HyphenationRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.Hyphenation',
    'context');
  return remote.$;
};

blink.mojom.HyphenationReceiver = class {
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
          const params = blink.mojom.Hyphenation_OpenDictionary_ParamsSpec.$.decode(message.payload);
          console.log('[GeneratedReceiver] Calling impl.openDictionary');
          const result = this.impl.openDictionary(params.locale);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.Hyphenation_OpenDictionary_ResponseParamsSpec);
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

blink.mojom.HyphenationReceiver = blink.mojom.HyphenationReceiver;

blink.mojom.HyphenationPtr = blink.mojom.HyphenationRemote;
blink.mojom.HyphenationRequest = blink.mojom.HyphenationPendingReceiver;

