// Auto-generated MojoJS binding
// Source: chromium_src/components/remote_cocoa/common/menu.mojom
// Module: remote_cocoa.mojom

'use strict';

// Module namespace
var remote_cocoa = remote_cocoa || {};
remote_cocoa.mojom = remote_cocoa.mojom || {};


// Interface: MenuHost
remote_cocoa.mojom.MenuHost = {};

remote_cocoa.mojom.MenuHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

remote_cocoa.mojom.MenuHostRemote = class {
  static get $interfaceName() {
    return 'remote_cocoa.mojom.MenuHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      remote_cocoa.mojom.MenuHostPendingReceiver,
      handle);
    this.$ = new remote_cocoa.mojom.MenuHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

remote_cocoa.mojom.MenuHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  commandActivated(command_id, event_flags) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      remote_cocoa.mojom.MenuHost_CommandActivated_ParamsSpec,
      null,
      null,
      [command_id, event_flags],
      undefined,
      undefined
    );
  }

  menuClosed() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      remote_cocoa.mojom.MenuHost_MenuClosed_ParamsSpec,
      null,
      null,
      [],
      undefined,
      undefined
    );
  }

};

remote_cocoa.mojom.MenuHost.getRemote = function() {
  let remote = new remote_cocoa.mojom.MenuHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'remote_cocoa.mojom.MenuHost',
    'context');
  return remote.$;
};

// ParamsSpec for CommandActivated
remote_cocoa.mojom.MenuHost_CommandActivated_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.MenuHost.CommandActivated_Params',
      packedSize: 24,
      fields: [
        { name: 'command_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'event_flags', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for MenuClosed
remote_cocoa.mojom.MenuHost_MenuClosed_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.MenuHost.MenuClosed_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Legacy compatibility
remote_cocoa.mojom.MenuHostPtr = remote_cocoa.mojom.MenuHostRemote;
remote_cocoa.mojom.MenuHostRequest = remote_cocoa.mojom.MenuHostPendingReceiver;


// Interface: Menu
remote_cocoa.mojom.Menu = {};

remote_cocoa.mojom.MenuPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

remote_cocoa.mojom.MenuRemote = class {
  static get $interfaceName() {
    return 'remote_cocoa.mojom.Menu';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      remote_cocoa.mojom.MenuPendingReceiver,
      handle);
    this.$ = new remote_cocoa.mojom.MenuRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

remote_cocoa.mojom.MenuRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  cancel() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      remote_cocoa.mojom.Menu_Cancel_ParamsSpec,
      null,
      null,
      [],
      undefined,
      undefined
    );
  }

  updateMenuItem(command_id, enabled, visible, label) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      remote_cocoa.mojom.Menu_UpdateMenuItem_ParamsSpec,
      null,
      null,
      [command_id, enabled, visible, label],
      undefined,
      undefined
    );
  }

};

remote_cocoa.mojom.Menu.getRemote = function() {
  let remote = new remote_cocoa.mojom.MenuRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'remote_cocoa.mojom.Menu',
    'context');
  return remote.$;
};

// ParamsSpec for Cancel
remote_cocoa.mojom.Menu_Cancel_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.Menu.Cancel_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for UpdateMenuItem
remote_cocoa.mojom.Menu_UpdateMenuItem_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.Menu.UpdateMenuItem_Params',
      packedSize: 32,
      fields: [
        { name: 'command_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'enabled', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'visible', packedOffset: 8, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
        { name: 'label', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Legacy compatibility
remote_cocoa.mojom.MenuPtr = remote_cocoa.mojom.MenuRemote;
remote_cocoa.mojom.MenuRequest = remote_cocoa.mojom.MenuPendingReceiver;

