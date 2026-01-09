// Auto-generated MojoJS binding
// Source: chromium_src/extensions/common/mojom/guest_view.mojom
// Module: extensions.mojom

'use strict';

// Module namespace
var extensions = extensions || {};
extensions.mojom = extensions.mojom || {};


// Interface: GuestView
extensions.mojom.GuestView = {};

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
      [success]);
  }

  canExecuteContentScript(script_id) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      extensions.mojom.GuestView_CanExecuteContentScript_ParamsSpec,
      extensions.mojom.GuestView_CanExecuteContentScript_ResponseParamsSpec,
      [script_id]);
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

// ParamsSpec for ReadyToCreateMimeHandlerView
extensions.mojom.GuestView_ReadyToCreateMimeHandlerView_ParamsSpec = {
  $: {
    structSpec: {
      name: 'extensions.mojom.GuestView.ReadyToCreateMimeHandlerView_Params',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for CanExecuteContentScript
extensions.mojom.GuestView_CanExecuteContentScript_ParamsSpec = {
  $: {
    structSpec: {
      name: 'extensions.mojom.GuestView.CanExecuteContentScript_Params',
      packedSize: 16,
      fields: [
        { name: 'script_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

extensions.mojom.GuestView_CanExecuteContentScript_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'extensions.mojom.GuestView.CanExecuteContentScript_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'allowed', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
extensions.mojom.GuestViewPtr = extensions.mojom.GuestViewRemote;
extensions.mojom.GuestViewRequest = extensions.mojom.GuestViewPendingReceiver;


// Interface: MimeHandlerViewContainerManager
extensions.mojom.MimeHandlerViewContainerManager = {};

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
      [token_id]);
  }

  createBeforeUnloadControl() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      extensions.mojom.MimeHandlerViewContainerManager_CreateBeforeUnloadControl_ParamsSpec,
      extensions.mojom.MimeHandlerViewContainerManager_CreateBeforeUnloadControl_ResponseParamsSpec,
      []);
  }

  destroyFrameContainer(element_instance_id) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      extensions.mojom.MimeHandlerViewContainerManager_DestroyFrameContainer_ParamsSpec,
      null,
      [element_instance_id]);
  }

  didLoad(mime_handler_view_guest_element_instance_id, resource_url) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      extensions.mojom.MimeHandlerViewContainerManager_DidLoad_ParamsSpec,
      null,
      [mime_handler_view_guest_element_instance_id, resource_url]);
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

// ParamsSpec for SetInternalId
extensions.mojom.MimeHandlerViewContainerManager_SetInternalId_ParamsSpec = {
  $: {
    structSpec: {
      name: 'extensions.mojom.MimeHandlerViewContainerManager.SetInternalId_Params',
      packedSize: 16,
      fields: [
        { name: 'token_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for CreateBeforeUnloadControl
extensions.mojom.MimeHandlerViewContainerManager_CreateBeforeUnloadControl_ParamsSpec = {
  $: {
    structSpec: {
      name: 'extensions.mojom.MimeHandlerViewContainerManager.CreateBeforeUnloadControl_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

extensions.mojom.MimeHandlerViewContainerManager_CreateBeforeUnloadControl_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'extensions.mojom.MimeHandlerViewContainerManager.CreateBeforeUnloadControl_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'before_unload_control', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for DestroyFrameContainer
extensions.mojom.MimeHandlerViewContainerManager_DestroyFrameContainer_ParamsSpec = {
  $: {
    structSpec: {
      name: 'extensions.mojom.MimeHandlerViewContainerManager.DestroyFrameContainer_Params',
      packedSize: 16,
      fields: [
        { name: 'element_instance_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for DidLoad
extensions.mojom.MimeHandlerViewContainerManager_DidLoad_ParamsSpec = {
  $: {
    structSpec: {
      name: 'extensions.mojom.MimeHandlerViewContainerManager.DidLoad_Params',
      packedSize: 24,
      fields: [
        { name: 'mime_handler_view_guest_element_instance_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'resource_url', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
extensions.mojom.MimeHandlerViewContainerManagerPtr = extensions.mojom.MimeHandlerViewContainerManagerRemote;
extensions.mojom.MimeHandlerViewContainerManagerRequest = extensions.mojom.MimeHandlerViewContainerManagerPendingReceiver;

