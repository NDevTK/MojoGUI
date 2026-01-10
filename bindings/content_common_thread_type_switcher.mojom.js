// Auto-generated MojoJS binding
// Source: chromium_src/content/common/thread_type_switcher.mojom
// Module: content.mojom

'use strict';

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
};

content.mojom.ThreadTypeSwitcherRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  setThreadType(platform_thread_id, thread_type) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
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
          const params = content.mojom.ThreadTypeSwitcher_SetThreadType_ParamsSpec.$.decode(message.payload);
          console.log('[GeneratedReceiver] Calling impl.setThreadType');
          const result = this.impl.setThreadType(params.platform_thread_id, params.thread_type);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

content.mojom.ThreadTypeSwitcherReceiver = content.mojom.ThreadTypeSwitcherReceiver;

content.mojom.ThreadTypeSwitcherPtr = content.mojom.ThreadTypeSwitcherRemote;
content.mojom.ThreadTypeSwitcherRequest = content.mojom.ThreadTypeSwitcherPendingReceiver;

