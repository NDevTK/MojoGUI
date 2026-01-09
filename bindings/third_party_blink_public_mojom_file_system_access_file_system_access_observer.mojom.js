// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/file_system_access/file_system_access_observer.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Struct: FileSystemAccessChangeTypeAppeared
blink.mojom.FileSystemAccessChangeTypeAppearedSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FileSystemAccessChangeTypeAppeared',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: FileSystemAccessChangeTypeDisappeared
blink.mojom.FileSystemAccessChangeTypeDisappearedSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FileSystemAccessChangeTypeDisappeared',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: FileSystemAccessChangeTypeErrored
blink.mojom.FileSystemAccessChangeTypeErroredSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FileSystemAccessChangeTypeErrored',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: FileSystemAccessChangeTypeModified
blink.mojom.FileSystemAccessChangeTypeModifiedSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FileSystemAccessChangeTypeModified',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: FileSystemAccessChangeTypeMoved
blink.mojom.FileSystemAccessChangeTypeMovedSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FileSystemAccessChangeTypeMoved',
      packedSize: 16,
      fields: [
        { name: 'former_relative_path', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: FileSystemAccessChangeTypeUnknown
blink.mojom.FileSystemAccessChangeTypeUnknownSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FileSystemAccessChangeTypeUnknown',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: FileSystemAccessChangeMetadata
blink.mojom.FileSystemAccessChangeMetadataSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FileSystemAccessChangeMetadata',
      packedSize: 32,
      fields: [
        { name: 'root', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'changed_entry', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'relative_path', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: FileSystemAccessChange
blink.mojom.FileSystemAccessChangeSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FileSystemAccessChange',
      packedSize: 24,
      fields: [
        { name: 'metadata', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.FileSystemAccessChangeMetadataSpec, nullable: false },
        { name: 'type', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Interface: FileSystemAccessObserver
blink.mojom.FileSystemAccessObserver = {};

blink.mojom.FileSystemAccessObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.FileSystemAccessObserverRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.FileSystemAccessObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.FileSystemAccessObserverPendingReceiver,
      handle);
    this.$ = new blink.mojom.FileSystemAccessObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.FileSystemAccessObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onFileChanges(changes) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.FileSystemAccessObserver_OnFileChanges_ParamsSpec,
      null,
      [changes]);
  }

};

blink.mojom.FileSystemAccessObserver.getRemote = function() {
  let remote = new blink.mojom.FileSystemAccessObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.FileSystemAccessObserver',
    'context');
  return remote.$;
};

// ParamsSpec for OnFileChanges
blink.mojom.FileSystemAccessObserver_OnFileChanges_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FileSystemAccessObserver.OnFileChanges_Params',
      packedSize: 16,
      fields: [
        { name: 'changes', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
blink.mojom.FileSystemAccessObserverPtr = blink.mojom.FileSystemAccessObserverRemote;
blink.mojom.FileSystemAccessObserverRequest = blink.mojom.FileSystemAccessObserverPendingReceiver;

