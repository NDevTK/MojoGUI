// Auto-generated MojoJS binding
// Source: chromium_src/content/common/thread_type_switcher.mojom
// Module: content.mojom

'use strict';

// Module namespace
var content = content || {};
content.mojom = content.mojom || {};


// Interface: ThreadTypeSwitcher
content.mojom.mojom.ThreadTypeSwitcher = {};

content.mojom.mojom.ThreadTypeSwitcherPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

content.mojom.mojom.ThreadTypeSwitcherRemote = class {
  static get $interfaceName() {
    return 'content.mojom.ThreadTypeSwitcher';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      content.mojom.mojom.ThreadTypeSwitcherPendingReceiver,
      handle);
    this.$ = new content.mojom.mojom.ThreadTypeSwitcherRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

content.mojom.mojom.ThreadTypeSwitcherRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  setThreadType(platform_thread_id, thread_type) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      content.mojom.mojom.ThreadTypeSwitcher_SetThreadType_ParamsSpec,
      null,
      [platform_thread_id, thread_type]);
  }

};

content.mojom.mojom.ThreadTypeSwitcher.getRemote = function() {
  let remote = new content.mojom.mojom.ThreadTypeSwitcherRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'content.mojom.ThreadTypeSwitcher',
    'context');
  return remote.$;
};

// ParamsSpec for SetThreadType
content.mojom.mojom.ThreadTypeSwitcher_SetThreadType_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.ThreadTypeSwitcher.SetThreadType_Params',
      packedSize: 16,
      fields: [
        { name: 'platform_thread_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'thread_type', packedOffset: 4, packedBitOffset: 0, type: mojo_base.mojom.ThreadTypeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
content.mojom.mojom.ThreadTypeSwitcherPtr = content.mojom.mojom.ThreadTypeSwitcherRemote;
content.mojom.mojom.ThreadTypeSwitcherRequest = content.mojom.mojom.ThreadTypeSwitcherPendingReceiver;

