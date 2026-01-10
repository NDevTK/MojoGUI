// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/file_system_access/file_system_access_observer.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};

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
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.FileSystemAccessObserver',
    'context');
  return remote.$;
};

blink.mojom.FileSystemAccessObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: OnFileChanges
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(blink.mojom.FileSystemAccessObserver_OnFileChanges_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnFileChanges (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.FileSystemAccessObserver_OnFileChanges_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onFileChanges');
          const result = this.impl.onFileChanges(params.changes);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

blink.mojom.FileSystemAccessObserverReceiver = blink.mojom.FileSystemAccessObserverReceiver;

blink.mojom.FileSystemAccessObserverPtr = blink.mojom.FileSystemAccessObserverRemote;
blink.mojom.FileSystemAccessObserverRequest = blink.mojom.FileSystemAccessObserverPendingReceiver;

