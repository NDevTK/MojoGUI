// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/file_system_access/file_system_access_observer.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var blink = blink || {};

blink.mojom.FileSystemAccessChangeTypeSpec = { $: {} };
blink.mojom.FileSystemAccessChangeTypeAppearedSpec = { $: {} };
blink.mojom.FileSystemAccessChangeTypeDisappearedSpec = { $: {} };
blink.mojom.FileSystemAccessChangeTypeErroredSpec = { $: {} };
blink.mojom.FileSystemAccessChangeTypeModifiedSpec = { $: {} };
blink.mojom.FileSystemAccessChangeTypeMovedSpec = { $: {} };
blink.mojom.FileSystemAccessChangeTypeUnknownSpec = { $: {} };
blink.mojom.FileSystemAccessChangeMetadataSpec = { $: {} };
blink.mojom.FileSystemAccessChangeSpec = { $: {} };
blink.mojom.FileSystemAccessObserver = {};
blink.mojom.FileSystemAccessObserver.$interfaceName = 'blink.mojom.FileSystemAccessObserver';
blink.mojom.FileSystemAccessObserver_OnFileChanges_ParamsSpec = { $: {} };

// Union: FileSystemAccessChangeType
mojo.internal.Union(
    blink.mojom.FileSystemAccessChangeTypeSpec, 'blink.mojom.FileSystemAccessChangeType', {
      'appeared': {
        'ordinal': 0,
        'type': blink.mojom.FileSystemAccessChangeTypeAppearedSpec.$,
        'nullable': false,
      },
      'disappeared': {
        'ordinal': 1,
        'type': blink.mojom.FileSystemAccessChangeTypeDisappearedSpec.$,
        'nullable': false,
      },
      'errored': {
        'ordinal': 2,
        'type': blink.mojom.FileSystemAccessChangeTypeErroredSpec.$,
        'nullable': false,
      },
      'modified': {
        'ordinal': 3,
        'type': blink.mojom.FileSystemAccessChangeTypeModifiedSpec.$,
        'nullable': false,
      },
      'moved': {
        'ordinal': 4,
        'type': blink.mojom.FileSystemAccessChangeTypeMovedSpec.$,
        'nullable': false,
      },
      'unknown': {
        'ordinal': 5,
        'type': blink.mojom.FileSystemAccessChangeTypeUnknownSpec.$,
        'nullable': false,
      },
    });

// Struct: FileSystemAccessChangeTypeAppeared
mojo.internal.Struct(
    blink.mojom.FileSystemAccessChangeTypeAppearedSpec, 'blink.mojom.FileSystemAccessChangeTypeAppeared', [
    ],
    [[0, 8]]);

// Struct: FileSystemAccessChangeTypeDisappeared
mojo.internal.Struct(
    blink.mojom.FileSystemAccessChangeTypeDisappearedSpec, 'blink.mojom.FileSystemAccessChangeTypeDisappeared', [
    ],
    [[0, 8]]);

// Struct: FileSystemAccessChangeTypeErrored
mojo.internal.Struct(
    blink.mojom.FileSystemAccessChangeTypeErroredSpec, 'blink.mojom.FileSystemAccessChangeTypeErrored', [
    ],
    [[0, 8]]);

// Struct: FileSystemAccessChangeTypeModified
mojo.internal.Struct(
    blink.mojom.FileSystemAccessChangeTypeModifiedSpec, 'blink.mojom.FileSystemAccessChangeTypeModified', [
    ],
    [[0, 8]]);

// Struct: FileSystemAccessChangeTypeMoved
mojo.internal.Struct(
    blink.mojom.FileSystemAccessChangeTypeMovedSpec, 'blink.mojom.FileSystemAccessChangeTypeMoved', [
      mojo.internal.StructField('former_relative_path', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, true, 0, undefined),
    ],
    [[0, 16]]);

// Struct: FileSystemAccessChangeTypeUnknown
mojo.internal.Struct(
    blink.mojom.FileSystemAccessChangeTypeUnknownSpec, 'blink.mojom.FileSystemAccessChangeTypeUnknown', [
    ],
    [[0, 8]]);

// Struct: FileSystemAccessChangeMetadata
mojo.internal.Struct(
    blink.mojom.FileSystemAccessChangeMetadataSpec, 'blink.mojom.FileSystemAccessChangeMetadata', [
      mojo.internal.StructField('root', 0, 0, blink.mojom.FileSystemAccessEntrySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('changed_entry', 8, 0, blink.mojom.FileSystemAccessEntrySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('relative_path', 16, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: FileSystemAccessChange
mojo.internal.Struct(
    blink.mojom.FileSystemAccessChangeSpec, 'blink.mojom.FileSystemAccessChange', [
      mojo.internal.StructField('metadata', 0, 0, blink.mojom.FileSystemAccessChangeMetadataSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('type', 8, 0, blink.mojom.FileSystemAccessChangeTypeSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: FileSystemAccessObserver
mojo.internal.Struct(
    blink.mojom.FileSystemAccessObserver_OnFileChanges_ParamsSpec, 'blink.mojom.FileSystemAccessObserver_OnFileChanges_Params', [
      mojo.internal.StructField('changes', 0, 0, mojo.internal.Array(blink.mojom.FileSystemAccessChangeSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

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
      [changes],
      false);
  }

};

blink.mojom.FileSystemAccessObserver.getRemote = function() {
  let remote = new blink.mojom.FileSystemAccessObserverRemote();
  remote.bindNewPipeAndPassReceiver();
  remote.proxy.endpoint_.bindInBrowser(
    'blink.mojom.FileSystemAccessObserver',
    'context');
  return remote.$;
};

blink.mojom.FileSystemAccessObserverPtr = blink.mojom.FileSystemAccessObserverRemote;
blink.mojom.FileSystemAccessObserverRequest = blink.mojom.FileSystemAccessObserverPendingReceiver;

