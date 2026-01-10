// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/context_menu/context_menu.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var mojo_base = mojo_base || {};
var network = network || {};
var ui = ui || {};
var gfx = gfx || {};
var url = url || {};

blink.mojom.ContextMenuDataMediaTypeSpec = { $: mojo.internal.Enum() };
blink.mojom.CustomContextMenuItemTypeSpec = { $: mojo.internal.Enum() };
blink.mojom.AcceleratorSpec = { $: {} };
blink.mojom.FormRendererIdSpec = { $: {} };
blink.mojom.FieldRendererIdSpec = { $: {} };
blink.mojom.CustomContextMenuItemSpec = { $: {} };
blink.mojom.UntrustworthyContextMenuParamsSpec = { $: {} };
blink.mojom.ContextMenuClient = {};
blink.mojom.ContextMenuClient.$interfaceName = 'blink.mojom.ContextMenuClient';
blink.mojom.ContextMenuClient_CustomContextMenuAction_ParamsSpec = { $: {} };
blink.mojom.ContextMenuClient_ContextMenuClosed_ParamsSpec = { $: {} };

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

// Enum: CustomContextMenuItemType
blink.mojom.CustomContextMenuItemType = {
  kOption: 0,
  kCheckableOption: 1,
  kGroup: 2,
  kSeparator: 3,
  kSubMenu: 4,
};

// Struct: Accelerator
mojo.internal.Struct(
    blink.mojom.AcceleratorSpec, 'blink.mojom.Accelerator', [
      mojo.internal.StructField('modifiers', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('key_code', 4, 0, mojo.internal.Uint16, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: FormRendererId
mojo.internal.Struct(
    blink.mojom.FormRendererIdSpec, 'blink.mojom.FormRendererId', [
      mojo.internal.StructField('id', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: FieldRendererId
mojo.internal.Struct(
    blink.mojom.FieldRendererIdSpec, 'blink.mojom.FieldRendererId', [
      mojo.internal.StructField('id', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: CustomContextMenuItem
mojo.internal.Struct(
    blink.mojom.CustomContextMenuItemSpec, 'blink.mojom.CustomContextMenuItem', [
      mojo.internal.StructField('label', 0, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('accelerator', 8, 0, blink.mojom.AcceleratorSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('icon', 16, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('tool_tip', 24, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('type', 32, 0, blink.mojom.CustomContextMenuItemTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('feature_name', 40, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('submenu', 48, 0, mojo.internal.Array(blink.mojom.CustomContextMenuItemSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('action', 56, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('is_experimental_feature', 60, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('rtl', 60, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('has_directional_override', 60, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('enabled', 60, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('checked', 60, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('force_show_accelerator_for_item', 60, 5, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 72]]);

// Struct: UntrustworthyContextMenuParams
mojo.internal.Struct(
    blink.mojom.UntrustworthyContextMenuParamsSpec, 'blink.mojom.UntrustworthyContextMenuParams', [
      mojo.internal.StructField('media_type', 0, 0, blink.mojom.ContextMenuDataMediaTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('link_url', 8, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('link_text', 16, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('impression', 24, 0, blink.mojom.ImpressionSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('unfiltered_link_url', 32, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('src_url', 40, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('selection_text', 48, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('title_text', 56, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('alt_text', 64, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('suggested_filename', 72, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('misspelled_word', 80, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('dictionary_suggestions', 88, 0, mojo.internal.Array(mojo_base.mojom.String16Spec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('frame_charset', 96, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('referrer_policy', 104, 0, network.mojom.ReferrerPolicySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('link_followed', 112, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('custom_items', 120, 0, mojo.internal.Array(blink.mojom.CustomContextMenuItemSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('source_type', 128, 0, ui.mojom.MenuSourceTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('selection_rect', 136, 0, gfx.mojom.RectSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('annotation_type', 144, 0, blink.mojom.AnnotationTypeSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('form_control_type', 152, 0, blink.mojom.FormControlTypeSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('field_renderer_id', 160, 0, blink.mojom.FieldRendererIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('form_renderer_id', 168, 0, blink.mojom.FormRendererIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('x', 176, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('y', 180, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('media_flags', 184, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('writing_direction_default', 188, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('writing_direction_left_to_right', 192, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('writing_direction_right_to_left', 196, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('edit_flags', 200, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('selection_start_offset', 204, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('interest_for_node_id', 208, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('has_image_contents', 212, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_image_media_plugin_document', 212, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('spellcheck_enabled', 212, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_editable', 212, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('opened_from_interest_for', 212, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_content_editable_for_autofill', 212, 5, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 224]]);

// Interface: ContextMenuClient
mojo.internal.Struct(
    blink.mojom.ContextMenuClient_CustomContextMenuAction_ParamsSpec, 'blink.mojom.ContextMenuClient_CustomContextMenuAction_Params', [
      mojo.internal.StructField('action', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.ContextMenuClient_ContextMenuClosed_ParamsSpec, 'blink.mojom.ContextMenuClient_ContextMenuClosed_Params', [
      mojo.internal.StructField('link_followed', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('impression', 8, 0, blink.mojom.ImpressionSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

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
      [action],
      false);
  }

  contextMenuClosed(link_followed, impression) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.ContextMenuClient_ContextMenuClosed_ParamsSpec,
      null,
      [link_followed, impression],
      false);
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

blink.mojom.ContextMenuClientReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        message = {
          header: args[1],
          buffer: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      switch (header.ordinal) {
        case 0: {
          const params = blink.mojom.ContextMenuClient_CustomContextMenuAction_ParamsSpec.$.decode(message.payload);
          const result = this.impl.customContextMenuAction(params.action);
          break;
        }
        case 1: {
          const params = blink.mojom.ContextMenuClient_ContextMenuClosed_ParamsSpec.$.decode(message.payload);
          const result = this.impl.contextMenuClosed(params.link_followed, params.impression);
          break;
        }
      }
    }});
  }
};

blink.mojom.ContextMenuClientReceiver = blink.mojom.ContextMenuClientReceiver;

blink.mojom.ContextMenuClientPtr = blink.mojom.ContextMenuClientRemote;
blink.mojom.ContextMenuClientRequest = blink.mojom.ContextMenuClientPendingReceiver;

