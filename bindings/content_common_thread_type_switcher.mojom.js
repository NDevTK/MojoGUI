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
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = content.mojom.ThreadTypeSwitcher_SetThreadType_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setThreadType(params.platform_thread_id, params.thread_type);
          break;
        }
      }
    });
  }
};

content.mojom.ThreadTypeSwitcherReceiver = content.mojom.ThreadTypeSwitcherReceiver;

content.mojom.ThreadTypeSwitcherPtr = content.mojom.ThreadTypeSwitcherRemote;
content.mojom.ThreadTypeSwitcherRequest = content.mojom.ThreadTypeSwitcherPendingReceiver;

