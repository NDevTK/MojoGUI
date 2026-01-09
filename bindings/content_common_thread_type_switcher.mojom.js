// Auto-generated MojoJS binding
// Source: chromium_src/content/common/thread_type_switcher.mojom
// Module: content.mojom

'use strict';

// Module namespace
var content = content || {};
content.mojom = content.mojom || {};


// Interface: ThreadTypeSwitcher
content.mojom.ThreadTypeSwitcher = {};

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
      [platform_thread_id, thread_type]);
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

// ParamsSpec for SetThreadType
content.mojom.ThreadTypeSwitcher_SetThreadType_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.ThreadTypeSwitcher.SetThreadType_Params',
      packedSize: 24,
      fields: [
        { name: 'thread_type', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'platform_thread_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
content.mojom.ThreadTypeSwitcherPtr = content.mojom.ThreadTypeSwitcherRemote;
content.mojom.ThreadTypeSwitcherRequest = content.mojom.ThreadTypeSwitcherPendingReceiver;

