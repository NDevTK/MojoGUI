// Auto-generated MojoJS binding
// Source: chromium_src/extensions/common/mojom/guest_view.mojom
// Module: extensions.mojom

'use strict';

// Module namespace
var extensions = extensions || {};
extensions.mojom = extensions.mojom || {};
var blink = blink || {};
var url = url || {};

extensions.mojom.GuestView = {};
extensions.mojom.GuestView.$interfaceName = 'extensions.mojom.GuestView';
extensions.mojom.GuestView_ReadyToCreateMimeHandlerView_ParamsSpec = { $: {} };
extensions.mojom.GuestView_CanExecuteContentScript_ParamsSpec = { $: {} };
extensions.mojom.GuestView_CanExecuteContentScript_ResponseParamsSpec = { $: {} };
extensions.mojom.MimeHandlerViewContainerManager = {};
extensions.mojom.MimeHandlerViewContainerManager.$interfaceName = 'extensions.mojom.MimeHandlerViewContainerManager';
extensions.mojom.MimeHandlerViewContainerManager_SetInternalId_ParamsSpec = { $: {} };
extensions.mojom.MimeHandlerViewContainerManager_CreateBeforeUnloadControl_ParamsSpec = { $: {} };
extensions.mojom.MimeHandlerViewContainerManager_CreateBeforeUnloadControl_ResponseParamsSpec = { $: {} };
extensions.mojom.MimeHandlerViewContainerManager_DestroyFrameContainer_ParamsSpec = { $: {} };
extensions.mojom.MimeHandlerViewContainerManager_DidLoad_ParamsSpec = { $: {} };

// Interface: GuestView
mojo.internal.Struct(
    extensions.mojom.GuestView_ReadyToCreateMimeHandlerView_ParamsSpec, 'extensions.mojom.GuestView_ReadyToCreateMimeHandlerView_Params', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    extensions.mojom.GuestView_CanExecuteContentScript_ParamsSpec, 'extensions.mojom.GuestView_CanExecuteContentScript_Params', [
      mojo.internal.StructField('script_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    extensions.mojom.GuestView_CanExecuteContentScript_ResponseParamsSpec, 'extensions.mojom.GuestView_CanExecuteContentScript_ResponseParams', [
      mojo.internal.StructField('allowed', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

extensions.mojom.GuestViewPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

extensions.mojom.GuestViewRemote = class {
  static get $interfaceName() {
    return 'extensions.mojom.GuestView';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      extensions.mojom.GuestViewPendingReceiver,
      handle);
    this.$ = new extensions.mojom.GuestViewRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

extensions.mojom.GuestViewRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  readyToCreateMimeHandlerView(success) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      extensions.mojom.GuestView_ReadyToCreateMimeHandlerView_ParamsSpec,
      null,
      [success],
      false);
  }

  canExecuteContentScript(script_id) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      extensions.mojom.GuestView_CanExecuteContentScript_ParamsSpec,
      extensions.mojom.GuestView_CanExecuteContentScript_ResponseParamsSpec,
      [script_id],
      false);
  }

};

extensions.mojom.GuestView.getRemote = function() {
  let remote = new extensions.mojom.GuestViewRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'extensions.mojom.GuestView',
    'context');
  return remote.$;
};

extensions.mojom.GuestViewPtr = extensions.mojom.GuestViewRemote;
extensions.mojom.GuestViewRequest = extensions.mojom.GuestViewPendingReceiver;


// Interface: MimeHandlerViewContainerManager
mojo.internal.Struct(
    extensions.mojom.MimeHandlerViewContainerManager_SetInternalId_ParamsSpec, 'extensions.mojom.MimeHandlerViewContainerManager_SetInternalId_Params', [
      mojo.internal.StructField('token_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    extensions.mojom.MimeHandlerViewContainerManager_CreateBeforeUnloadControl_ParamsSpec, 'extensions.mojom.MimeHandlerViewContainerManager_CreateBeforeUnloadControl_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    extensions.mojom.MimeHandlerViewContainerManager_CreateBeforeUnloadControl_ResponseParamsSpec, 'extensions.mojom.MimeHandlerViewContainerManager_CreateBeforeUnloadControl_ResponseParams', [
      mojo.internal.StructField('before_unload_control', 0, 0, mojo.internal.InterfaceProxy(extensions.mime_handler.BeforeUnloadControlRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    extensions.mojom.MimeHandlerViewContainerManager_DestroyFrameContainer_ParamsSpec, 'extensions.mojom.MimeHandlerViewContainerManager_DestroyFrameContainer_Params', [
      mojo.internal.StructField('element_instance_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    extensions.mojom.MimeHandlerViewContainerManager_DidLoad_ParamsSpec, 'extensions.mojom.MimeHandlerViewContainerManager_DidLoad_Params', [
      mojo.internal.StructField('mime_handler_view_guest_element_instance_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('resource_url', 8, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

extensions.mojom.MimeHandlerViewContainerManagerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

extensions.mojom.MimeHandlerViewContainerManagerRemote = class {
  static get $interfaceName() {
    return 'extensions.mojom.MimeHandlerViewContainerManager';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      extensions.mojom.MimeHandlerViewContainerManagerPendingReceiver,
      handle);
    this.$ = new extensions.mojom.MimeHandlerViewContainerManagerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

extensions.mojom.MimeHandlerViewContainerManagerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  setInternalId(token_id) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      extensions.mojom.MimeHandlerViewContainerManager_SetInternalId_ParamsSpec,
      null,
      [token_id],
      false);
  }

  createBeforeUnloadControl() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      extensions.mojom.MimeHandlerViewContainerManager_CreateBeforeUnloadControl_ParamsSpec,
      extensions.mojom.MimeHandlerViewContainerManager_CreateBeforeUnloadControl_ResponseParamsSpec,
      [],
      false);
  }

  destroyFrameContainer(element_instance_id) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      extensions.mojom.MimeHandlerViewContainerManager_DestroyFrameContainer_ParamsSpec,
      null,
      [element_instance_id],
      false);
  }

  didLoad(mime_handler_view_guest_element_instance_id, resource_url) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      extensions.mojom.MimeHandlerViewContainerManager_DidLoad_ParamsSpec,
      null,
      [mime_handler_view_guest_element_instance_id, resource_url],
      false);
  }

};

extensions.mojom.MimeHandlerViewContainerManager.getRemote = function() {
  let remote = new extensions.mojom.MimeHandlerViewContainerManagerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'extensions.mojom.MimeHandlerViewContainerManager',
    'context');
  return remote.$;
};

extensions.mojom.MimeHandlerViewContainerManagerPtr = extensions.mojom.MimeHandlerViewContainerManagerRemote;
extensions.mojom.MimeHandlerViewContainerManagerRequest = extensions.mojom.MimeHandlerViewContainerManagerPendingReceiver;

