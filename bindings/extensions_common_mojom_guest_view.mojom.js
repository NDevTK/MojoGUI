// Auto-generated MojoJS binding
// Source: chromium_src/extensions/common/mojom/guest_view.mojom
// Module: extensions.mojom

'use strict';

// Module namespace
var extensions = extensions || {};
extensions.mojom = extensions.mojom || {};
var blink = blink || {};
var url = url || {};


// Interface: GuestView
extensions.mojom.mojom.GuestView = {};

extensions.mojom.mojom.GuestViewPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

extensions.mojom.mojom.GuestViewRemote = class {
  static get $interfaceName() {
    return 'extensions.mojom.GuestView';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      extensions.mojom.mojom.GuestViewPendingReceiver,
      handle);
    this.$ = new extensions.mojom.mojom.GuestViewRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

extensions.mojom.mojom.GuestViewRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  readyToCreateMimeHandlerView(success) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      extensions.mojom.mojom.GuestView_ReadyToCreateMimeHandlerView_ParamsSpec,
      null,
      [success]);
  }

  canExecuteContentScript(script_id) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      extensions.mojom.mojom.GuestView_CanExecuteContentScript_ParamsSpec,
      extensions.mojom.mojom.GuestView_CanExecuteContentScript_ResponseParamsSpec,
      [script_id]);
  }

};

extensions.mojom.mojom.GuestView.getRemote = function() {
  let remote = new extensions.mojom.mojom.GuestViewRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'extensions.mojom.GuestView',
    'context');
  return remote.$;
};

// ParamsSpec for ReadyToCreateMimeHandlerView
extensions.mojom.mojom.GuestView_ReadyToCreateMimeHandlerView_ParamsSpec = {
  $: {
    structSpec: {
      name: 'extensions.mojom.GuestView.ReadyToCreateMimeHandlerView_Params',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for CanExecuteContentScript
extensions.mojom.mojom.GuestView_CanExecuteContentScript_ParamsSpec = {
  $: {
    structSpec: {
      name: 'extensions.mojom.GuestView.CanExecuteContentScript_Params',
      packedSize: 16,
      fields: [
        { name: 'script_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

extensions.mojom.mojom.GuestView_CanExecuteContentScript_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'extensions.mojom.GuestView.CanExecuteContentScript_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'allowed', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
extensions.mojom.mojom.GuestViewPtr = extensions.mojom.mojom.GuestViewRemote;
extensions.mojom.mojom.GuestViewRequest = extensions.mojom.mojom.GuestViewPendingReceiver;


// Interface: MimeHandlerViewContainerManager
extensions.mojom.mojom.MimeHandlerViewContainerManager = {};

extensions.mojom.mojom.MimeHandlerViewContainerManagerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

extensions.mojom.mojom.MimeHandlerViewContainerManagerRemote = class {
  static get $interfaceName() {
    return 'extensions.mojom.MimeHandlerViewContainerManager';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      extensions.mojom.mojom.MimeHandlerViewContainerManagerPendingReceiver,
      handle);
    this.$ = new extensions.mojom.mojom.MimeHandlerViewContainerManagerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

extensions.mojom.mojom.MimeHandlerViewContainerManagerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  setInternalId(token_id) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      extensions.mojom.mojom.MimeHandlerViewContainerManager_SetInternalId_ParamsSpec,
      null,
      [token_id]);
  }

  createBeforeUnloadControl() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      extensions.mojom.mojom.MimeHandlerViewContainerManager_CreateBeforeUnloadControl_ParamsSpec,
      extensions.mojom.mojom.MimeHandlerViewContainerManager_CreateBeforeUnloadControl_ResponseParamsSpec,
      []);
  }

  destroyFrameContainer(element_instance_id) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      extensions.mojom.mojom.MimeHandlerViewContainerManager_DestroyFrameContainer_ParamsSpec,
      null,
      [element_instance_id]);
  }

  didLoad(mime_handler_view_guest_element_instance_id, resource_url) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      extensions.mojom.mojom.MimeHandlerViewContainerManager_DidLoad_ParamsSpec,
      null,
      [mime_handler_view_guest_element_instance_id, resource_url]);
  }

};

extensions.mojom.mojom.MimeHandlerViewContainerManager.getRemote = function() {
  let remote = new extensions.mojom.mojom.MimeHandlerViewContainerManagerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'extensions.mojom.MimeHandlerViewContainerManager',
    'context');
  return remote.$;
};

// ParamsSpec for SetInternalId
extensions.mojom.mojom.MimeHandlerViewContainerManager_SetInternalId_ParamsSpec = {
  $: {
    structSpec: {
      name: 'extensions.mojom.MimeHandlerViewContainerManager.SetInternalId_Params',
      packedSize: 16,
      fields: [
        { name: 'token_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for CreateBeforeUnloadControl
extensions.mojom.mojom.MimeHandlerViewContainerManager_CreateBeforeUnloadControl_ParamsSpec = {
  $: {
    structSpec: {
      name: 'extensions.mojom.MimeHandlerViewContainerManager.CreateBeforeUnloadControl_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

extensions.mojom.mojom.MimeHandlerViewContainerManager_CreateBeforeUnloadControl_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'extensions.mojom.MimeHandlerViewContainerManager.CreateBeforeUnloadControl_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'before_unload_control', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for DestroyFrameContainer
extensions.mojom.mojom.MimeHandlerViewContainerManager_DestroyFrameContainer_ParamsSpec = {
  $: {
    structSpec: {
      name: 'extensions.mojom.MimeHandlerViewContainerManager.DestroyFrameContainer_Params',
      packedSize: 16,
      fields: [
        { name: 'element_instance_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for DidLoad
extensions.mojom.mojom.MimeHandlerViewContainerManager_DidLoad_ParamsSpec = {
  $: {
    structSpec: {
      name: 'extensions.mojom.MimeHandlerViewContainerManager.DidLoad_Params',
      packedSize: 24,
      fields: [
        { name: 'mime_handler_view_guest_element_instance_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'resource_url', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
extensions.mojom.mojom.MimeHandlerViewContainerManagerPtr = extensions.mojom.mojom.MimeHandlerViewContainerManagerRemote;
extensions.mojom.mojom.MimeHandlerViewContainerManagerRequest = extensions.mojom.mojom.MimeHandlerViewContainerManagerPendingReceiver;

