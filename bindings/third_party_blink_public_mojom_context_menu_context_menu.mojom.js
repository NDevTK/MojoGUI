// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/context_menu/context_menu.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Enum: ContextMenuDataMediaType
blink.mojom.ContextMenuDataMediaType = {
  kNone: 0,
  kImage: 1,
  kVideo: 2,
  kAudio: 3,
  kCanvas: 4,
  kFile: 5,
  kPlugin: 6,
};
blink.mojom.ContextMenuDataMediaTypeSpec = { $: mojo.internal.Enum() };

// Enum: CustomContextMenuItemType
blink.mojom.CustomContextMenuItemType = {
  kOption: 0,
  kCheckableOption: 1,
  kGroup: 2,
  kSeparator: 3,
  kSubMenu: 4,
};
blink.mojom.CustomContextMenuItemTypeSpec = { $: mojo.internal.Enum() };

// Struct: Accelerator
blink.mojom.AcceleratorSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.Accelerator',
      packedSize: 16,
      fields: [
        { name: 'key_code', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint16, nullable: false, minVersion: 0 },
        { name: 'modifiers', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: FormRendererId
blink.mojom.FormRendererIdSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FormRendererId',
      packedSize: 16,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: FieldRendererId
blink.mojom.FieldRendererIdSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FieldRendererId',
      packedSize: 16,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: CustomContextMenuItem
blink.mojom.CustomContextMenuItemSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.CustomContextMenuItem',
      packedSize: 72,
      fields: [
        { name: 'label', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false, minVersion: 0 },
        { name: 'accelerator', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.AcceleratorSpec, nullable: true, minVersion: 0 },
        { name: 'icon', packedOffset: 16, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false, minVersion: 0 },
        { name: 'tool_tip', packedOffset: 24, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false, minVersion: 0 },
        { name: 'type', packedOffset: 32, packedBitOffset: 0, type: blink.mojom.CustomContextMenuItemTypeSpec, nullable: false, minVersion: 0 },
        { name: 'action', packedOffset: 36, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'feature_name', packedOffset: 40, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false, minVersion: 0 },
        { name: 'is_experimental_feature', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'rtl', packedOffset: 48, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'has_directional_override', packedOffset: 48, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'enabled', packedOffset: 48, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'checked', packedOffset: 48, packedBitOffset: 4, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'force_show_accelerator_for_item', packedOffset: 48, packedBitOffset: 5, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'submenu', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.Array(blink.mojom.CustomContextMenuItemSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 72}]
    }
  }
};

// Struct: UntrustworthyContextMenuParams
blink.mojom.UntrustworthyContextMenuParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.UntrustworthyContextMenuParams',
      packedSize: 208,
      fields: [
        { name: 'media_type', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.ContextMenuDataMediaTypeSpec, nullable: false, minVersion: 0 },
        { name: 'x', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'y', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'link_url', packedOffset: 16, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'link_text', packedOffset: 24, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false, minVersion: 0 },
        { name: 'impression', packedOffset: 32, packedBitOffset: 0, type: blink.mojom.ImpressionSpec, nullable: true, minVersion: 0 },
        { name: 'unfiltered_link_url', packedOffset: 40, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'src_url', packedOffset: 48, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'has_image_contents', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'is_image_media_plugin_document', packedOffset: 12, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'media_flags', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'selection_text', packedOffset: 64, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false, minVersion: 0 },
        { name: 'title_text', packedOffset: 72, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false, minVersion: 0 },
        { name: 'alt_text', packedOffset: 80, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false, minVersion: 0 },
        { name: 'suggested_filename', packedOffset: 88, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false, minVersion: 0 },
        { name: 'misspelled_word', packedOffset: 96, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false, minVersion: 0 },
        { name: 'dictionary_suggestions', packedOffset: 104, packedBitOffset: 0, type: mojo.internal.Array(mojo_base.mojom.String16Spec, false), nullable: false, minVersion: 0 },
        { name: 'spellcheck_enabled', packedOffset: 12, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'is_editable', packedOffset: 12, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'writing_direction_default', packedOffset: 60, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'writing_direction_left_to_right', packedOffset: 112, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'writing_direction_right_to_left', packedOffset: 116, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'edit_flags', packedOffset: 120, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'frame_charset', packedOffset: 128, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'referrer_policy', packedOffset: 124, packedBitOffset: 0, type: network.mojom.ReferrerPolicySpec, nullable: false, minVersion: 0 },
        { name: 'link_followed', packedOffset: 136, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'custom_items', packedOffset: 144, packedBitOffset: 0, type: mojo.internal.Array(blink.mojom.CustomContextMenuItemSpec, false), nullable: false, minVersion: 0 },
        { name: 'source_type', packedOffset: 152, packedBitOffset: 0, type: ui.mojom.MenuSourceTypeSpec, nullable: false, minVersion: 0 },
        { name: 'selection_rect', packedOffset: 160, packedBitOffset: 0, type: gfx.mojom.RectSpec, nullable: false, minVersion: 0 },
        { name: 'selection_start_offset', packedOffset: 156, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'annotation_type', packedOffset: 168, packedBitOffset: 0, type: blink.mojom.AnnotationTypeSpec, nullable: true, minVersion: 0 },
        { name: 'opened_from_interest_for', packedOffset: 12, packedBitOffset: 4, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'interest_for_node_id', packedOffset: 172, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'form_control_type', packedOffset: 176, packedBitOffset: 0, type: blink.mojom.FormControlTypeSpec, nullable: true, minVersion: 0 },
        { name: 'is_content_editable_for_autofill', packedOffset: 12, packedBitOffset: 5, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'field_renderer_id', packedOffset: 184, packedBitOffset: 0, type: blink.mojom.FieldRendererIdSpec, nullable: false, minVersion: 0 },
        { name: 'form_renderer_id', packedOffset: 192, packedBitOffset: 0, type: blink.mojom.FormRendererIdSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 208}]
    }
  }
};

// Interface: ContextMenuClient
blink.mojom.ContextMenuClient = {};

blink.mojom.ContextMenuClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.ContextMenuClientRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.ContextMenuClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.ContextMenuClientPendingReceiver,
      handle);
    this.$ = new blink.mojom.ContextMenuClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.ContextMenuClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  customContextMenuAction(action) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.ContextMenuClient_CustomContextMenuAction_ParamsSpec,
      null,
      [action]);
  }

  contextMenuClosed(link_followed, impression) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.ContextMenuClient_ContextMenuClosed_ParamsSpec,
      null,
      [link_followed, impression]);
  }

};

blink.mojom.ContextMenuClient.getRemote = function() {
  let remote = new blink.mojom.ContextMenuClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.ContextMenuClient',
    'context');
  return remote.$;
};

// ParamsSpec for CustomContextMenuAction
blink.mojom.ContextMenuClient_CustomContextMenuAction_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ContextMenuClient.CustomContextMenuAction_Params',
      packedSize: 16,
      fields: [
        { name: 'action', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ContextMenuClosed
blink.mojom.ContextMenuClient_ContextMenuClosed_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ContextMenuClient.ContextMenuClosed_Params',
      packedSize: 24,
      fields: [
        { name: 'link_followed', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'impression', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.ImpressionSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
blink.mojom.ContextMenuClientPtr = blink.mojom.ContextMenuClientRemote;
blink.mojom.ContextMenuClientRequest = blink.mojom.ContextMenuClientPendingReceiver;

