// Auto-generated MojoJS binding
// Source: chromium_src/components/remote_cocoa/common/select_file_dialog.mojom
// Module: remote_cocoa.mojom

'use strict';

// Module namespace
var remote_cocoa = remote_cocoa || {};
remote_cocoa.mojom = remote_cocoa.mojom || {};
var mojo_base = mojo_base || {};

remote_cocoa.mojom.SelectFileDialogTypeSpec = { $: mojo.internal.Enum() };
remote_cocoa.mojom.SelectFileTypeInfoSpec = { $: {} };
remote_cocoa.mojom.SelectFileDialog = {};
remote_cocoa.mojom.SelectFileDialog.$interfaceName = 'remote_cocoa.mojom.SelectFileDialog';
remote_cocoa.mojom.SelectFileDialog_Show_ParamsSpec = { $: {} };
remote_cocoa.mojom.SelectFileDialog_Show_ResponseParamsSpec = { $: {} };

// Enum: SelectFileDialogType
remote_cocoa.mojom.SelectFileDialogType = {
  kFolder: 0,
  kUploadFolder: 1,
  kExistingFolder: 2,
  kOpenFile: 3,
  kOpenMultiFile: 4,
  kSaveAsFile: 5,
};

// Struct: SelectFileTypeInfo
mojo.internal.Struct(
    remote_cocoa.mojom.SelectFileTypeInfoSpec, 'remote_cocoa.mojom.SelectFileTypeInfo', [
      mojo.internal.StructField('extensions', 0, 0, mojo.internal.Array(mojo.internal.Array(mojo.internal.String, false), false), null, false, 0, undefined),
      mojo.internal.StructField('extension_description_overrides', 8, 0, mojo.internal.Array(mojo_base.mojom.String16Spec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('include_all_files', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('keep_extension_visible', 16, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

// Interface: SelectFileDialog
mojo.internal.Struct(
    remote_cocoa.mojom.SelectFileDialog_Show_ParamsSpec, 'remote_cocoa.mojom.SelectFileDialog_Show_Params', [
      mojo.internal.StructField('type', 0, 0, remote_cocoa.mojom.SelectFileDialogTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('title', 8, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('file_path', 16, 0, mojo_base.mojom.FilePathSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('file_types', 24, 0, remote_cocoa.mojom.SelectFileTypeInfoSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('default_extension', 32, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('file_type_index', 40, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 56]]);

mojo.internal.Struct(
    remote_cocoa.mojom.SelectFileDialog_Show_ResponseParamsSpec, 'remote_cocoa.mojom.SelectFileDialog_Show_ResponseParams', [
      mojo.internal.StructField('files', 0, 0, mojo.internal.Array(mojo_base.mojom.FilePathSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('file_tags', 8, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('index', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('was_cancelled', 20, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

remote_cocoa.mojom.SelectFileDialogPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

remote_cocoa.mojom.SelectFileDialogRemote = class {
  static get $interfaceName() {
    return 'remote_cocoa.mojom.SelectFileDialog';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      remote_cocoa.mojom.SelectFileDialogPendingReceiver,
      handle);
    this.$ = new remote_cocoa.mojom.SelectFileDialogRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

remote_cocoa.mojom.SelectFileDialogRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  show(type, title, file_path, file_types, file_type_index, default_extension) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      remote_cocoa.mojom.SelectFileDialog_Show_ParamsSpec,
      remote_cocoa.mojom.SelectFileDialog_Show_ResponseParamsSpec,
      [type, title, file_path, file_types, file_type_index, default_extension],
      false);
  }

};

remote_cocoa.mojom.SelectFileDialog.getRemote = function() {
  let remote = new remote_cocoa.mojom.SelectFileDialogRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'remote_cocoa.mojom.SelectFileDialog',
    'context');
  return remote.$;
};

remote_cocoa.mojom.SelectFileDialogReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
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
      switch (header.ordinal) {
        case 0: {
          const params = remote_cocoa.mojom.SelectFileDialog_Show_ParamsSpec.$.decode(message.payload);
          console.log('[GeneratedReceiver] Calling impl.show');
          const result = this.impl.show(params.type, params.title, params.file_path, params.file_types, params.file_type_index, params.default_extension);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, remote_cocoa.mojom.SelectFileDialog_Show_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

remote_cocoa.mojom.SelectFileDialogReceiver = remote_cocoa.mojom.SelectFileDialogReceiver;

remote_cocoa.mojom.SelectFileDialogPtr = remote_cocoa.mojom.SelectFileDialogRemote;
remote_cocoa.mojom.SelectFileDialogRequest = remote_cocoa.mojom.SelectFileDialogPendingReceiver;

