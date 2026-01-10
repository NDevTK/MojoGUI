// Auto-generated MojoJS binding
// Source: chromium_src/components/remote_cocoa/common/menu.mojom
// Module: remote_cocoa.mojom

'use strict';

// Module namespace
var remote_cocoa = remote_cocoa || {};
remote_cocoa.mojom = remote_cocoa.mojom || {};
var mojo_base = mojo_base || {};
var skia = skia || {};
var gfx = gfx || {};

remote_cocoa.mojom.MenuItemSpec = { $: {} };
remote_cocoa.mojom.MenuItemCommonFieldsSpec = { $: {} };
remote_cocoa.mojom.SubmenuMenuItemSpec = { $: {} };
remote_cocoa.mojom.MenuControllerParamsSpec = { $: {} };
remote_cocoa.mojom.ContextMenuSpec = { $: {} };
remote_cocoa.mojom.MenuHost = {};
remote_cocoa.mojom.MenuHost.$interfaceName = 'remote_cocoa.mojom.MenuHost';
remote_cocoa.mojom.MenuHost_CommandActivated_ParamsSpec = { $: {} };
remote_cocoa.mojom.MenuHost_MenuClosed_ParamsSpec = { $: {} };
remote_cocoa.mojom.Menu = {};
remote_cocoa.mojom.Menu.$interfaceName = 'remote_cocoa.mojom.Menu';
remote_cocoa.mojom.Menu_Cancel_ParamsSpec = { $: {} };
remote_cocoa.mojom.Menu_UpdateMenuItem_ParamsSpec = { $: {} };

// Union: MenuItem
mojo.internal.Union(
    remote_cocoa.mojom.MenuItemSpec, 'remote_cocoa.mojom.MenuItem', {
      'separator': {
        'ordinal': 0,
        'type': remote_cocoa.mojom.MenuItemCommonFieldsSpec.$,
        'nullable': false,
      },
      'regular': {
        'ordinal': 1,
        'type': remote_cocoa.mojom.MenuItemCommonFieldsSpec.$,
        'nullable': false,
      },
      'submenu': {
        'ordinal': 2,
        'type': remote_cocoa.mojom.SubmenuMenuItemSpec.$,
        'nullable': false,
      },
    });

// Struct: MenuItemCommonFields
mojo.internal.Struct(
    remote_cocoa.mojom.MenuItemCommonFieldsSpec, 'remote_cocoa.mojom.MenuItemCommonFields', [
      mojo.internal.StructField('label', 0, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('icon', 8, 0, gfx.mojom.ImageSkiaSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('command_id', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('may_have_mnemonics', 20, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_checked', 20, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_enabled', 20, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_visible', 20, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_alerted', 20, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_new_feature', 20, 5, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: SubmenuMenuItem
mojo.internal.Struct(
    remote_cocoa.mojom.SubmenuMenuItemSpec, 'remote_cocoa.mojom.SubmenuMenuItem', [
      mojo.internal.StructField('common', 0, 0, remote_cocoa.mojom.MenuItemCommonFieldsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('children', 8, 0, mojo.internal.Array(remote_cocoa.mojom.MenuItemSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: MenuControllerParams
mojo.internal.Struct(
    remote_cocoa.mojom.MenuControllerParamsSpec, 'remote_cocoa.mojom.MenuControllerParams', [
      mojo.internal.StructField('badge_font', 0, 0, remote_cocoa.mojom.FontSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('badge_color', 8, 0, skia.mojom.SkColorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('badge_text_color', 16, 0, skia.mojom.SkColorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('iph_dot_color', 24, 0, skia.mojom.SkColorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('badge_horizontal_margin', 32, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('badge_internal_padding', 36, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('badge_min_height', 40, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('badge_radius', 44, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 56]]);

// Struct: ContextMenu
mojo.internal.Struct(
    remote_cocoa.mojom.ContextMenuSpec, 'remote_cocoa.mojom.ContextMenu', [
      mojo.internal.StructField('items', 0, 0, mojo.internal.Array(remote_cocoa.mojom.MenuItemSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('anchor', 8, 0, gfx.mojom.PointSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('target_view_id', 16, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('params', 24, 0, remote_cocoa.mojom.MenuControllerParamsSpec.$, null, false, 0, undefined),
    ],
    [[0, 40]]);

// Interface: MenuHost
mojo.internal.Struct(
    remote_cocoa.mojom.MenuHost_CommandActivated_ParamsSpec, 'remote_cocoa.mojom.MenuHost_CommandActivated_Params', [
      mojo.internal.StructField('command_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('event_flags', 4, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    remote_cocoa.mojom.MenuHost_MenuClosed_ParamsSpec, 'remote_cocoa.mojom.MenuHost_MenuClosed_Params', [
    ],
    [[0, 8]]);

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
      [command_id, event_flags],
      false);
  }

  menuClosed() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      remote_cocoa.mojom.MenuHost_MenuClosed_ParamsSpec,
      null,
      [],
      false);
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

remote_cocoa.mojom.MenuHostReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (message) => {
      const header = message.header;
      if (!header) return;
      switch (header.ordinal) {
        case 0: {
          const params = remote_cocoa.mojom.MenuHost_CommandActivated_ParamsSpec.$.decode(message.payload);
          const result = this.impl.commandActivated(params.command_id, params.event_flags);
          break;
        }
        case 1: {
          const params = remote_cocoa.mojom.MenuHost_MenuClosed_ParamsSpec.$.decode(message.payload);
          const result = this.impl.menuClosed();
          break;
        }
      }
    }});
  }
};

remote_cocoa.mojom.MenuHostReceiver = remote_cocoa.mojom.MenuHostReceiver;

remote_cocoa.mojom.MenuHostPtr = remote_cocoa.mojom.MenuHostRemote;
remote_cocoa.mojom.MenuHostRequest = remote_cocoa.mojom.MenuHostPendingReceiver;


// Interface: Menu
mojo.internal.Struct(
    remote_cocoa.mojom.Menu_Cancel_ParamsSpec, 'remote_cocoa.mojom.Menu_Cancel_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    remote_cocoa.mojom.Menu_UpdateMenuItem_ParamsSpec, 'remote_cocoa.mojom.Menu_UpdateMenuItem_Params', [
      mojo.internal.StructField('label', 0, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('command_id', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('enabled', 12, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('visible', 12, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

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
      [],
      false);
  }

  updateMenuItem(command_id, enabled, visible, label) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      remote_cocoa.mojom.Menu_UpdateMenuItem_ParamsSpec,
      null,
      [command_id, enabled, visible, label],
      false);
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

remote_cocoa.mojom.MenuReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (message) => {
      const header = message.header;
      if (!header) return;
      switch (header.ordinal) {
        case 0: {
          const params = remote_cocoa.mojom.Menu_Cancel_ParamsSpec.$.decode(message.payload);
          const result = this.impl.cancel();
          break;
        }
        case 1: {
          const params = remote_cocoa.mojom.Menu_UpdateMenuItem_ParamsSpec.$.decode(message.payload);
          const result = this.impl.updateMenuItem(params.command_id, params.enabled, params.visible, params.label);
          break;
        }
      }
    }});
  }
};

remote_cocoa.mojom.MenuReceiver = remote_cocoa.mojom.MenuReceiver;

remote_cocoa.mojom.MenuPtr = remote_cocoa.mojom.MenuRemote;
remote_cocoa.mojom.MenuRequest = remote_cocoa.mojom.MenuPendingReceiver;

