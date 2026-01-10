// Auto-generated MojoJS binding
// Source: chromium_src/components/remote_cocoa/common/menu.mojom
// Module: remote_cocoa.mojom

'use strict';

// Module namespace
var remote_cocoa = remote_cocoa || {};
remote_cocoa.mojom = remote_cocoa.mojom || {};
var skia = skia || {};
var ui = ui || {};
var gfx = gfx || {};
var ui = ui || {};
var gfx = gfx || {};


// Union: MenuItem
remote_cocoa.mojom.mojom.MenuItemSpec = { $: mojo.internal.Union(
    'remote_cocoa.mojom.MenuItem', {
      'separator': {
        'ordinal': 0,
        'type': remote_cocoa.mojom.MenuItemCommonFieldsSpec,
      }},
      'regular': {
        'ordinal': 1,
        'type': remote_cocoa.mojom.MenuItemCommonFieldsSpec,
      }},
      'submenu': {
        'ordinal': 2,
        'type': remote_cocoa.mojom.SubmenuMenuItemSpec,
      }},
    })
};

// Struct: MenuItemCommonFields
remote_cocoa.mojom.mojom.MenuItemCommonFieldsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.MenuItemCommonFields',
      packedSize: 32,
      fields: [
        { name: 'command_id', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'label', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false, minVersion: 0 },
        { name: 'may_have_mnemonics', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'is_checked', packedOffset: 20, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'icon', packedOffset: 8, packedBitOffset: 0, type: gfx.mojom.ImageSkiaSpec, nullable: true, minVersion: 0 },
        { name: 'is_enabled', packedOffset: 20, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'is_visible', packedOffset: 20, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'is_alerted', packedOffset: 20, packedBitOffset: 4, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'is_new_feature', packedOffset: 20, packedBitOffset: 5, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: SubmenuMenuItem
remote_cocoa.mojom.mojom.SubmenuMenuItemSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.SubmenuMenuItem',
      packedSize: 24,
      fields: [
        { name: 'common', packedOffset: 0, packedBitOffset: 0, type: remote_cocoa.mojom.MenuItemCommonFieldsSpec, nullable: false, minVersion: 0 },
        { name: 'children', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(remote_cocoa.mojom.MenuItemSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: MenuControllerParams
remote_cocoa.mojom.mojom.MenuControllerParamsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.MenuControllerParams',
      packedSize: 56,
      fields: [
        { name: 'badge_font', packedOffset: 0, packedBitOffset: 0, type: remote_cocoa.mojom.FontSpec, nullable: false, minVersion: 0 },
        { name: 'badge_color', packedOffset: 8, packedBitOffset: 0, type: skia.mojom.SkColorSpec, nullable: false, minVersion: 0 },
        { name: 'badge_text_color', packedOffset: 16, packedBitOffset: 0, type: skia.mojom.SkColorSpec, nullable: false, minVersion: 0 },
        { name: 'badge_horizontal_margin', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'badge_internal_padding', packedOffset: 36, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'badge_min_height', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'badge_radius', packedOffset: 44, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'iph_dot_color', packedOffset: 24, packedBitOffset: 0, type: skia.mojom.SkColorSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 56}]
    }
  }
};

// Struct: ContextMenu
remote_cocoa.mojom.mojom.ContextMenuSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.ContextMenu',
      packedSize: 40,
      fields: [
        { name: 'items', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(remote_cocoa.mojom.MenuItemSpec, false), nullable: false, minVersion: 0 },
        { name: 'anchor', packedOffset: 8, packedBitOffset: 0, type: gfx.mojom.PointSpec, nullable: false, minVersion: 0 },
        { name: 'target_view_id', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
        { name: 'params', packedOffset: 24, packedBitOffset: 0, type: remote_cocoa.mojom.MenuControllerParamsSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Interface: MenuHost
remote_cocoa.mojom.mojom.MenuHost = {};

remote_cocoa.mojom.mojom.MenuHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

remote_cocoa.mojom.mojom.MenuHostRemote = class {
  static get $interfaceName() {
    return 'remote_cocoa.mojom.MenuHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      remote_cocoa.mojom.mojom.MenuHostPendingReceiver,
      handle);
    this.$ = new remote_cocoa.mojom.mojom.MenuHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

remote_cocoa.mojom.mojom.MenuHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  commandActivated(command_id, event_flags) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      remote_cocoa.mojom.mojom.MenuHost_CommandActivated_ParamsSpec,
      null,
      [command_id, event_flags]);
  }

  menuClosed() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      remote_cocoa.mojom.mojom.MenuHost_MenuClosed_ParamsSpec,
      null,
      []);
  }

};

remote_cocoa.mojom.mojom.MenuHost.getRemote = function() {
  let remote = new remote_cocoa.mojom.mojom.MenuHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'remote_cocoa.mojom.MenuHost',
    'context');
  return remote.$;
};

// ParamsSpec for CommandActivated
remote_cocoa.mojom.mojom.MenuHost_CommandActivated_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.MenuHost.CommandActivated_Params',
      packedSize: 16,
      fields: [
        { name: 'command_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'event_flags', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for MenuClosed
remote_cocoa.mojom.mojom.MenuHost_MenuClosed_ParamsSpec = {
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
remote_cocoa.mojom.mojom.MenuHostPtr = remote_cocoa.mojom.mojom.MenuHostRemote;
remote_cocoa.mojom.mojom.MenuHostRequest = remote_cocoa.mojom.mojom.MenuHostPendingReceiver;


// Interface: Menu
remote_cocoa.mojom.mojom.Menu = {};

remote_cocoa.mojom.mojom.MenuPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

remote_cocoa.mojom.mojom.MenuRemote = class {
  static get $interfaceName() {
    return 'remote_cocoa.mojom.Menu';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      remote_cocoa.mojom.mojom.MenuPendingReceiver,
      handle);
    this.$ = new remote_cocoa.mojom.mojom.MenuRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

remote_cocoa.mojom.mojom.MenuRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  cancel() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      remote_cocoa.mojom.mojom.Menu_Cancel_ParamsSpec,
      null,
      []);
  }

  updateMenuItem(command_id, enabled, visible, label) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      remote_cocoa.mojom.mojom.Menu_UpdateMenuItem_ParamsSpec,
      null,
      [command_id, enabled, visible, label]);
  }

};

remote_cocoa.mojom.mojom.Menu.getRemote = function() {
  let remote = new remote_cocoa.mojom.mojom.MenuRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'remote_cocoa.mojom.Menu',
    'context');
  return remote.$;
};

// ParamsSpec for Cancel
remote_cocoa.mojom.mojom.Menu_Cancel_ParamsSpec = {
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
remote_cocoa.mojom.mojom.Menu_UpdateMenuItem_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.Menu.UpdateMenuItem_Params',
      packedSize: 24,
      fields: [
        { name: 'command_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'enabled', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'visible', packedOffset: 12, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'label', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
remote_cocoa.mojom.mojom.MenuPtr = remote_cocoa.mojom.mojom.MenuRemote;
remote_cocoa.mojom.mojom.MenuRequest = remote_cocoa.mojom.mojom.MenuPendingReceiver;

