// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/file_system_access/file_system_access_observer.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var blink = blink || {};


// Union: FileSystemAccessChangeType
blink.mojom.mojom.FileSystemAccessChangeTypeSpec = { $: mojo.internal.Union(
    'blink.mojom.FileSystemAccessChangeType', {
      'appeared': {
        'ordinal': 0,
        'type': blink.mojom.FileSystemAccessChangeTypeAppearedSpec,
      }},
      'disappeared': {
        'ordinal': 1,
        'type': blink.mojom.FileSystemAccessChangeTypeDisappearedSpec,
      }},
      'errored': {
        'ordinal': 2,
        'type': blink.mojom.FileSystemAccessChangeTypeErroredSpec,
      }},
      'modified': {
        'ordinal': 3,
        'type': blink.mojom.FileSystemAccessChangeTypeModifiedSpec,
      }},
      'moved': {
        'ordinal': 4,
        'type': blink.mojom.FileSystemAccessChangeTypeMovedSpec,
      }},
      'unknown': {
        'ordinal': 5,
        'type': blink.mojom.FileSystemAccessChangeTypeUnknownSpec,
      }},
    })
};

// Struct: FileSystemAccessChangeTypeAppeared
blink.mojom.mojom.FileSystemAccessChangeTypeAppearedSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FileSystemAccessChangeTypeAppeared',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Struct: FileSystemAccessChangeTypeDisappeared
blink.mojom.mojom.FileSystemAccessChangeTypeDisappearedSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FileSystemAccessChangeTypeDisappeared',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Struct: FileSystemAccessChangeTypeErrored
blink.mojom.mojom.FileSystemAccessChangeTypeErroredSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FileSystemAccessChangeTypeErrored',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Struct: FileSystemAccessChangeTypeModified
blink.mojom.mojom.FileSystemAccessChangeTypeModifiedSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FileSystemAccessChangeTypeModified',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Struct: FileSystemAccessChangeTypeMoved
blink.mojom.mojom.FileSystemAccessChangeTypeMovedSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FileSystemAccessChangeTypeMoved',
      packedSize: 16,
      fields: [
        { name: 'former_relative_path', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.String, false), nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: FileSystemAccessChangeTypeUnknown
blink.mojom.mojom.FileSystemAccessChangeTypeUnknownSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FileSystemAccessChangeTypeUnknown',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Struct: FileSystemAccessChangeMetadata
blink.mojom.mojom.FileSystemAccessChangeMetadataSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FileSystemAccessChangeMetadata',
      packedSize: 32,
      fields: [
        { name: 'root', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.FileSystemAccessEntrySpec, nullable: false, minVersion: 0 },
        { name: 'changed_entry', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.FileSystemAccessEntrySpec, nullable: false, minVersion: 0 },
        { name: 'relative_path', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.String, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: FileSystemAccessChange
blink.mojom.mojom.FileSystemAccessChangeSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FileSystemAccessChange',
      packedSize: 32,
      fields: [
        { name: 'metadata', packedOffset: 16, packedBitOffset: 0, type: blink.mojom.FileSystemAccessChangeMetadataSpec, nullable: false, minVersion: 0 },
        { name: 'type', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.FileSystemAccessChangeTypeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Interface: FileSystemAccessObserver
blink.mojom.mojom.FileSystemAccessObserver = {};

blink.mojom.mojom.FileSystemAccessObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.mojom.FileSystemAccessObserverRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.FileSystemAccessObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.mojom.FileSystemAccessObserverPendingReceiver,
      handle);
    this.$ = new blink.mojom.mojom.FileSystemAccessObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.mojom.FileSystemAccessObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onFileChanges(changes) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.mojom.FileSystemAccessObserver_OnFileChanges_ParamsSpec,
      null,
      [changes]);
  }

};

blink.mojom.mojom.FileSystemAccessObserver.getRemote = function() {
  let remote = new blink.mojom.mojom.FileSystemAccessObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.FileSystemAccessObserver',
    'context');
  return remote.$;
};

// ParamsSpec for OnFileChanges
blink.mojom.mojom.FileSystemAccessObserver_OnFileChanges_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FileSystemAccessObserver.OnFileChanges_Params',
      packedSize: 16,
      fields: [
        { name: 'changes', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(blink.mojom.FileSystemAccessChangeSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
blink.mojom.mojom.FileSystemAccessObserverPtr = blink.mojom.mojom.FileSystemAccessObserverRemote;
blink.mojom.mojom.FileSystemAccessObserverRequest = blink.mojom.mojom.FileSystemAccessObserverPendingReceiver;

