// Auto-generated MojoJS binding
// Source: chromium_src/content/common/thread_type_switcher.mojom
// Module: content.mojom

// Module namespace
var content = content || {};
content.mojom = content.mojom || {};
var mojo_base = mojo_base || {};

content.mojom.ThreadTypeSwitcher = {};
content.mojom.ThreadTypeSwitcher.$interfaceName = 'content.mojom.ThreadTypeSwitcher';
content.mojom.ThreadTypeSwitcher_SetThreadType_ParamsSpec = { $: {} };

// Interface: ThreadTypeSwitcher
mojo.internal.Struct(
    content.mojom.ThreadTypeSwitcher_SetThreadType_ParamsSpec, 'content.mojom.ThreadTypeSwitcher_SetThreadType_Params', [
      mojo.internal.StructField('thread_type', 0, 0, mojo_base.mojom.ThreadTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('platform_thread_id', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

content.mojom.ThreadTypeSwitcherPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

content.mojom.ThreadTypeSwitcherRemote = class {
  static get $interfaceName() {
    return 'content.mojom.ThreadTypeSwitcher';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      content.mojom.ThreadTypeSwitcherPendingReceiver,
      handle);
    this.$ = new content.mojom.ThreadTypeSwitcherRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  setThreadType(platform_thread_id, thread_type) {
    return this.$.setThreadType(platform_thread_id, thread_type);
  }
};

content.mojom.ThreadTypeSwitcherRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ThreadTypeSwitcher', [
      { explicit: null },
    ]);
  }

  setThreadType(platform_thread_id, thread_type) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      content.mojom.ThreadTypeSwitcher_SetThreadType_ParamsSpec,
      null,
      [platform_thread_id, thread_type],
      false);
  }

};

content.mojom.ThreadTypeSwitcher.getRemote = function() {
  let remote = new content.mojom.ThreadTypeSwitcherRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'content.mojom.ThreadTypeSwitcher',
    'context');
  return remote.$;
};

content.mojom.ThreadTypeSwitcherReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ThreadTypeSwitcher', [
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
             decoder.decodeStructInline(content.mojom.ThreadTypeSwitcher_SetThreadType_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.mojom.ThreadTypeSwitcher_SetThreadType_ParamsSpec.$.structSpec);
          const result = this.impl.setThreadType(params.platform_thread_id, params.thread_type);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

content.mojom.ThreadTypeSwitcherReceiver = content.mojom.ThreadTypeSwitcherReceiver;

content.mojom.ThreadTypeSwitcherPtr = content.mojom.ThreadTypeSwitcherRemote;
content.mojom.ThreadTypeSwitcherRequest = content.mojom.ThreadTypeSwitcherPendingReceiver;

