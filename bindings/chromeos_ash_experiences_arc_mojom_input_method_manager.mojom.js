// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/input_method_manager.mojom
// Module: arc.mojom

'use strict';

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};


// Struct: ImeInfo
arc.mojom.ImeInfoSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.ImeInfo',
      packedSize: 40,
      fields: [
        { name: 'ime_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'display_name', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'settings_url', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'enabled', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: TextInputState
arc.mojom.TextInputStateSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.TextInputState',
      packedSize: 56,
      fields: [
        { name: 'text', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'text_range', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'selection_range', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'type', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'cursor_pos', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'flags', packedOffset: 36, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'should_do_learning', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'first_update_after_operation', packedOffset: 40, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Interface: InputConnection
arc.mojom.InputConnection = {};

arc.mojom.InputConnectionPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.InputConnectionRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.InputConnection';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.InputConnectionPendingReceiver,
      handle);
    this.$ = new arc.mojom.InputConnectionRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.InputConnectionRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

arc.mojom.InputConnection.getRemote = function() {
  let remote = new arc.mojom.InputConnectionRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.InputConnection',
    'context');
  return remote.$;
};

// Legacy compatibility
arc.mojom.InputConnectionPtr = arc.mojom.InputConnectionRemote;
arc.mojom.InputConnectionRequest = arc.mojom.InputConnectionPendingReceiver;


// Interface: InputMethodManagerHost
arc.mojom.InputMethodManagerHost = {};

arc.mojom.InputMethodManagerHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.InputMethodManagerHostRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.InputMethodManagerHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.InputMethodManagerHostPendingReceiver,
      handle);
    this.$ = new arc.mojom.InputMethodManagerHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.InputMethodManagerHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

arc.mojom.InputMethodManagerHost.getRemote = function() {
  let remote = new arc.mojom.InputMethodManagerHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.InputMethodManagerHost',
    'context');
  return remote.$;
};

// Legacy compatibility
arc.mojom.InputMethodManagerHostPtr = arc.mojom.InputMethodManagerHostRemote;
arc.mojom.InputMethodManagerHostRequest = arc.mojom.InputMethodManagerHostPendingReceiver;


// Interface: InputMethodManagerInstance
arc.mojom.InputMethodManagerInstance = {};

arc.mojom.InputMethodManagerInstancePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.InputMethodManagerInstanceRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.InputMethodManagerInstance';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.InputMethodManagerInstancePendingReceiver,
      handle);
    this.$ = new arc.mojom.InputMethodManagerInstanceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.InputMethodManagerInstanceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

arc.mojom.InputMethodManagerInstance.getRemote = function() {
  let remote = new arc.mojom.InputMethodManagerInstanceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.InputMethodManagerInstance',
    'context');
  return remote.$;
};

// Legacy compatibility
arc.mojom.InputMethodManagerInstancePtr = arc.mojom.InputMethodManagerInstanceRemote;
arc.mojom.InputMethodManagerInstanceRequest = arc.mojom.InputMethodManagerInstancePendingReceiver;

