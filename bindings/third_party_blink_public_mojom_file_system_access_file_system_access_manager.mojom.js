// Auto-generated MojoJS binding
 // Source: chromium_src/third_party/blink/public/mojom/file_system_access/file_system_access_manager.mojom
 // Module: blink.mojom

 'use strict';
 (function() {
   const SHA256 = (s) => {
     const K = [0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5, 0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174, 0xe49b69c1, 0xefbe4786, 0x0fc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da, 0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xD5A79147, 0x06CA6351, 0x14292967, 0x27B70A85, 0x2E1B2138, 0x4D2C6DFC, 0x53380D13, 0x650A7354, 0x766A0ABB, 0x81C2C92E, 0x92722C85, 0xA2BFE8A1, 0xA81A664B, 0xC24B8B70, 0xC76C51A3, 0xD192E819, 0xD6990624, 0xF40E3585,0x106AA070, 0x19A4C116, 0x1E376C08, 0x2748774C, 0x34B0BCB5, 0x391C0CB3, 0x4ED8AA4A, 0x5B9CCA4F, 0x682E6FF3, 0x748F82EE, 0x78A5636F, 0x84C87814, 0x8CC70208, 0x90BEFFFA, 0xA4506CEB, 0xBEF9A3F7, 0xC67178F2];
     const h = [0x6a09e667, 0xbb67ae85, 0x3c6ef372, 0xa54ff53a, 0x510e527f, 0x9b05688c, 0x1f83d9ab, 0x5be0cd19];
     const m = new TextEncoder().encode(s);
     const l = m.length;
     const b = new Uint32Array(((l + 8) >> 6) + 1 << 4);
     for (let i = 0; i < l; i++) b[i >> 2] |= m[i] << (24 - (i & 3) * 8);
     b[l >> 2] |= 0x80 << (24 - (l & 3) * 8);
     b[b.length - 1] = l * 8;
     for (let i = 0; i < b.length; i += 16) {
       let [a1, b1, c1, d1, e1, f1, g1, h1] = h;
       const w = new Uint32Array(64);
       for (let j = 0; j < 64; j++) {
         if (j < 16) w[j] = b[i + j];
         else {
           const s0 = ((w[j-15]>>>7)|(w[j-15]<<25))^((w[j-15]>>>18)|(w[j-15]<<14))^(w[j-15]>>>3);
           const s1 = ((w[j-2]>>>17)|(w[j-2]<<15))^((w[j-2]>>>19)|(w[j-2]<<13))^(w[j-2]>>>10);
           w[j] = (w[j-16]+s0+w[j-7]+s1)|0;
         }
         const t1 = (h1 + (((e1>>>6)|(e1<<26))^((e1>>>11)|(e1<<21))^((e1>>>25)|(e1<<7))) + ((e1&f1)^((~e1)&g1)) + K[j] + w[j])|0;
         const t2 = ((((a1>>>2)|(a1<<30))^((a1>>>13)|(a1<<19))^((a1>>>22)|(a1<<10))) + ((a1&b1)^(a1&c1)^(b1&c1)))|0;
         h1 = g1; g1 = f1; f1 = e1; e1 = (d1 + t1) | 0; d1 = c1; c1 = b1; b1 = a1; a1 = (t1 + t2) | 0;
       }
       h[0] = (h[0] + a1) | 0; h[1] = (h[1] + b1) | 0; h[2] = (h[2] + c1) | 0; h[3] = (h[3] + d1) | 0;
       h[4] = (h[4] + e1) | 0; h[5] = (h[5] + f1) | 0; h[6] = (h[6] + g1) | 0; h[7] = (h[7] + h1) | 0;
     }
     return h[0];
   };
   window.mojoScrambler = window.mojoScrambler || {
     getOrdinals: (ifaceName, methodSpecs) => {
       const params = new URLSearchParams(window.location.search);
       const forceNoScramble = params.get('scramble') === '0' || window.mojoNoScramble;
       
       const seen = new Set();
       methodSpecs.forEach(ms => { if (ms.explicit !== null) seen.add(ms.explicit); });
       let i = 0;
       return methodSpecs.map((ms, idx) => {
         if (ms.explicit !== null) return ms.explicit;
         if (forceNoScramble) return idx;

         const p = window.mojoVersion.split('.');
         const salt = 'MAJOR=' + p[0] + '\n' + 'MINOR=' + (p[1]||0) + '\n' + 'BUILD=' + (p[2]||0) + '\n' + 'PATCH=' + (p[3]||0) + '\n';
         console.log('[MojoScrambler] Derived Salt:', JSON.stringify(salt));
         
         while (true) {
           i++;
           const h0 = SHA256(salt + ifaceName.split('.').pop() + i);
           const ord = (((h0 & 0xFF) << 24) | ((h0 & 0xFF00) << 8) | ((h0 & 0xFF0000) >> 8) | (h0 >>> 24)) & 0x7fffffff;
           if (!seen.has(ord)) {
             seen.add(ord);
             return ord;
           }
         }
       });
     }
   };
 })();

 // Module namespace
 var mojo = mojo || {};
 mojo.internal = mojo.internal || {};
 mojo.internal.bindings = mojo.internal.bindings || {};
 

 mojo.internal.bindings.blink = mojo.internal.bindings.blink || {};
mojo.internal.bindings.blink.mojom = mojo.internal.bindings.blink.mojom || {};
mojo.internal.bindings.mojo_base = mojo.internal.bindings.mojo_base || {};

mojo.internal.bindings.blink.mojom.WellKnownDirectorySpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.blink.mojom.TypeSpecificFilePickerOptionsUnionSpec = { $: {} };
mojo.internal.bindings.blink.mojom.FilePickerStartInOptionsUnionSpec = { $: {} };
mojo.internal.bindings.blink.mojom.ChooseFileSystemEntryAcceptsOptionSpec = { $: {} };
mojo.internal.bindings.blink.mojom.AcceptsTypesInfoSpec = { $: {} };
mojo.internal.bindings.blink.mojom.OpenFilePickerOptionsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.SaveFilePickerOptionsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.DirectoryPickerOptionsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.FilePickerOptionsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.FileSystemAccessManager = {};
mojo.internal.bindings.blink.mojom.FileSystemAccessManager.$interfaceName = 'blink.mojom.FileSystemAccessManager';
mojo.internal.bindings.blink.mojom.FileSystemAccessManager_GetSandboxedFileSystem_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.FileSystemAccessManager_GetSandboxedFileSystem_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.FileSystemAccessManager_GetSandboxedFileSystemForDevtools_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.FileSystemAccessManager_GetSandboxedFileSystemForDevtools_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.FileSystemAccessManager_ChooseEntries_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.FileSystemAccessManager_ChooseEntries_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.FileSystemAccessManager_GetFileHandleFromToken_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.FileSystemAccessManager_GetDirectoryHandleFromToken_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.FileSystemAccessManager_GetEntryFromDataTransferToken_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.FileSystemAccessManager_GetEntryFromDataTransferToken_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.FileSystemAccessManager_BindObserverHost_ParamsSpec = { $: {} };

// Enum: WellKnownDirectory
mojo.internal.bindings.blink.mojom.WellKnownDirectory = {
  kDirDesktop: 0,
  kDirDocuments: 1,
  kDirDownloads: 2,
  kDirMusic: 3,
  kDirPictures: 4,
  kDirVideos: 5,
};

// Union: TypeSpecificFilePickerOptionsUnion
mojo.internal.Union(
    mojo.internal.bindings.blink.mojom.TypeSpecificFilePickerOptionsUnionSpec, 'blink.mojom.TypeSpecificFilePickerOptionsUnion', {
      'arg_open_file_picker_options': {
        'ordinal': 0,
        'type': mojo.internal.bindings.mojo.internal.bindings.blink.mojom.OpenFilePickerOptionsSpec.$,
        'nullable': false,
      },
      'arg_save_file_picker_options': {
        'ordinal': 1,
        'type': mojo.internal.bindings.mojo.internal.bindings.blink.mojom.SaveFilePickerOptionsSpec.$,
        'nullable': false,
      },
      'arg_directory_picker_options': {
        'ordinal': 2,
        'type': mojo.internal.bindings.mojo.internal.bindings.blink.mojom.DirectoryPickerOptionsSpec.$,
        'nullable': false,
      },
    });

// Union: FilePickerStartInOptionsUnion
mojo.internal.Union(
    mojo.internal.bindings.blink.mojom.FilePickerStartInOptionsUnionSpec, 'blink.mojom.FilePickerStartInOptionsUnion', {
      'arg_well_known_directory': {
        'ordinal': 0,
        'type': mojo.internal.bindings.mojo.internal.bindings.blink.mojom.WellKnownDirectorySpec.$,
        'nullable': false,
      },
      'arg_directory_token': {
        'ordinal': 1,
        'type': mojo.internal.InterfaceProxy(mojo.internal.bindings.blink.mojom.FileSystemAccessTransferTokenRemote),
        'nullable': false,
      },
    });

// Struct: ChooseFileSystemEntryAcceptsOption
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.ChooseFileSystemEntryAcceptsOptionSpec, 'blink.mojom.ChooseFileSystemEntryAcceptsOption', [
      mojo.internal.StructField('arg_description', 0, 0, mojo.internal.bindings.mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_mime_types', 8, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_extensions', 16, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: AcceptsTypesInfo
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.AcceptsTypesInfoSpec, 'blink.mojom.AcceptsTypesInfo', [
      mojo.internal.StructField('arg_accepts', 0, 0, mojo.internal.Array(mojo.internal.bindings.mojo.internal.bindings.blink.mojom.ChooseFileSystemEntryAcceptsOptionSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_include_accepts_all', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: OpenFilePickerOptions
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.OpenFilePickerOptionsSpec, 'blink.mojom.OpenFilePickerOptions', [
      mojo.internal.StructField('arg_accepts_types_info', 0, 0, mojo.internal.bindings.mojo.internal.bindings.blink.mojom.AcceptsTypesInfoSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_can_select_multiple_files', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: SaveFilePickerOptions
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.SaveFilePickerOptionsSpec, 'blink.mojom.SaveFilePickerOptions', [
      mojo.internal.StructField('arg_accepts_types_info', 0, 0, mojo.internal.bindings.mojo.internal.bindings.blink.mojom.AcceptsTypesInfoSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_suggested_name', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: DirectoryPickerOptions
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.DirectoryPickerOptionsSpec, 'blink.mojom.DirectoryPickerOptions', [
      mojo.internal.StructField('arg_permission_mode', 0, 0, mojo.internal.bindings.blink.mojom.FileSystemAccessPermissionModeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: FilePickerOptions
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.FilePickerOptionsSpec, 'blink.mojom.FilePickerOptions', [
      mojo.internal.StructField('arg_type_specific_options', 0, 0, mojo.internal.bindings.blink.mojom.TypeSpecificFilePickerOptionsUnionSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_starting_directory_id', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_start_in_options', 16, 0, mojo.internal.bindings.blink.mojom.FilePickerStartInOptionsUnionSpec.$, null, true, 0, undefined),
    ],
    [[0, 32]]);

// Interface: FileSystemAccessManager
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.FileSystemAccessManager_GetSandboxedFileSystem_ParamsSpec, 'blink.mojom.FileSystemAccessManager_GetSandboxedFileSystem_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.FileSystemAccessManager_GetSandboxedFileSystem_ResponseParamsSpec, 'blink.mojom.FileSystemAccessManager_GetSandboxedFileSystem_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.blink.mojom.FileSystemAccessErrorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_directory', 8, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.blink.mojom.FileSystemAccessDirectoryHandleRemote), null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.FileSystemAccessManager_GetSandboxedFileSystemForDevtools_ParamsSpec, 'blink.mojom.FileSystemAccessManager_GetSandboxedFileSystemForDevtools_Params', [
      mojo.internal.StructField('arg_directory_path_components', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.FileSystemAccessManager_GetSandboxedFileSystemForDevtools_ResponseParamsSpec, 'blink.mojom.FileSystemAccessManager_GetSandboxedFileSystemForDevtools_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.blink.mojom.FileSystemAccessErrorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_directory', 8, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.blink.mojom.FileSystemAccessDirectoryHandleRemote), null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.FileSystemAccessManager_ChooseEntries_ParamsSpec, 'blink.mojom.FileSystemAccessManager_ChooseEntries_Params', [
      mojo.internal.StructField('arg_options', 0, 0, mojo.internal.bindings.mojo.internal.bindings.blink.mojom.FilePickerOptionsSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.FileSystemAccessManager_ChooseEntries_ResponseParamsSpec, 'blink.mojom.FileSystemAccessManager_ChooseEntries_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.blink.mojom.FileSystemAccessErrorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_entries', 8, 0, mojo.internal.Array(mojo.internal.bindings.blink.mojom.FileSystemAccessEntrySpec.$, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.FileSystemAccessManager_GetFileHandleFromToken_ParamsSpec, 'blink.mojom.FileSystemAccessManager_GetFileHandleFromToken_Params', [
      mojo.internal.StructField('arg_token', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.blink.mojom.FileSystemAccessTransferTokenRemote), null, false, 0, undefined),
      mojo.internal.StructField('arg_file_handle', 8, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.blink.mojom.FileSystemAccessFileHandleRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.FileSystemAccessManager_GetDirectoryHandleFromToken_ParamsSpec, 'blink.mojom.FileSystemAccessManager_GetDirectoryHandleFromToken_Params', [
      mojo.internal.StructField('arg_token', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.blink.mojom.FileSystemAccessTransferTokenRemote), null, false, 0, undefined),
      mojo.internal.StructField('arg_directory_handle', 8, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.blink.mojom.FileSystemAccessDirectoryHandleRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.FileSystemAccessManager_GetEntryFromDataTransferToken_ParamsSpec, 'blink.mojom.FileSystemAccessManager_GetEntryFromDataTransferToken_Params', [
      mojo.internal.StructField('arg_token', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.blink.mojom.FileSystemAccessDataTransferTokenRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.FileSystemAccessManager_GetEntryFromDataTransferToken_ResponseParamsSpec, 'blink.mojom.FileSystemAccessManager_GetEntryFromDataTransferToken_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.blink.mojom.FileSystemAccessErrorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_entry', 8, 0, mojo.internal.bindings.blink.mojom.FileSystemAccessEntrySpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.FileSystemAccessManager_BindObserverHost_ParamsSpec, 'blink.mojom.FileSystemAccessManager_BindObserverHost_Params', [
      mojo.internal.StructField('arg_observer_host', 0, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.blink.mojom.FileSystemAccessObserverHostRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.blink.mojom.FileSystemAccessManagerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.blink.mojom.FileSystemAccessManagerRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.FileSystemAccessManager';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.blink.mojom.FileSystemAccessManagerPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.blink.mojom.FileSystemAccessManagerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  getSandboxedFileSystem() {
    return this.$.getSandboxedFileSystem();
  }
  getSandboxedFileSystemForDevtools(arg_directory_path_components) {
    return this.$.getSandboxedFileSystemForDevtools(arg_directory_path_components);
  }
  chooseEntries(arg_options) {
    return this.$.chooseEntries(arg_options);
  }
  getFileHandleFromToken(arg_token, arg_file_handle) {
    return this.$.getFileHandleFromToken(arg_token, arg_file_handle);
  }
  getDirectoryHandleFromToken(arg_token, arg_directory_handle) {
    return this.$.getDirectoryHandleFromToken(arg_token, arg_directory_handle);
  }
  getEntryFromDataTransferToken(arg_token) {
    return this.$.getEntryFromDataTransferToken(arg_token);
  }
  bindObserverHost(arg_observer_host) {
    return this.$.bindObserverHost(arg_observer_host);
  }
};

mojo.internal.bindings.blink.mojom.FileSystemAccessManagerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('FileSystemAccessManager', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  getSandboxedFileSystem() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.blink.mojom.FileSystemAccessManager_GetSandboxedFileSystem_ParamsSpec,
      mojo.internal.bindings.blink.mojom.FileSystemAccessManager_GetSandboxedFileSystem_ResponseParamsSpec,
      [],
      false);
  }

  getSandboxedFileSystemForDevtools(arg_directory_path_components) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.blink.mojom.FileSystemAccessManager_GetSandboxedFileSystemForDevtools_ParamsSpec,
      mojo.internal.bindings.blink.mojom.FileSystemAccessManager_GetSandboxedFileSystemForDevtools_ResponseParamsSpec,
      [arg_directory_path_components],
      false);
  }

  chooseEntries(arg_options) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.blink.mojom.FileSystemAccessManager_ChooseEntries_ParamsSpec,
      mojo.internal.bindings.blink.mojom.FileSystemAccessManager_ChooseEntries_ResponseParamsSpec,
      [arg_options],
      false);
  }

  getFileHandleFromToken(arg_token, arg_file_handle) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.blink.mojom.FileSystemAccessManager_GetFileHandleFromToken_ParamsSpec,
      null,
      [arg_token, arg_file_handle],
      false);
  }

  getDirectoryHandleFromToken(arg_token, arg_directory_handle) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.blink.mojom.FileSystemAccessManager_GetDirectoryHandleFromToken_ParamsSpec,
      null,
      [arg_token, arg_directory_handle],
      false);
  }

  getEntryFromDataTransferToken(arg_token) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojo.internal.bindings.blink.mojom.FileSystemAccessManager_GetEntryFromDataTransferToken_ParamsSpec,
      mojo.internal.bindings.blink.mojom.FileSystemAccessManager_GetEntryFromDataTransferToken_ResponseParamsSpec,
      [arg_token],
      false);
  }

  bindObserverHost(arg_observer_host) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      mojo.internal.bindings.blink.mojom.FileSystemAccessManager_BindObserverHost_ParamsSpec,
      null,
      [arg_observer_host],
      false);
  }

};

mojo.internal.bindings.blink.mojom.FileSystemAccessManager.getRemote = function() {
  let remote = new mojo.internal.bindings.blink.mojom.FileSystemAccessManagerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.FileSystemAccessManager',
    'context');
  return remote.$;
};

mojo.internal.bindings.blink.mojom.FileSystemAccessManagerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('FileSystemAccessManager', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx); // Scrambled/Explicit
      this.ordinalMap.set(idx, idx); // Sequential Fallback (Non-scrambled builds)
    });
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
        // Create a view of ONLY the payload (skipping the header)
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
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
        // Decoder uses payload view starting at 0
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: GetSandboxedFileSystem
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.FileSystemAccessManager_GetSandboxedFileSystem_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetSandboxedFileSystem (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: GetSandboxedFileSystemForDevtools
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.FileSystemAccessManager_GetSandboxedFileSystemForDevtools_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetSandboxedFileSystemForDevtools (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: ChooseEntries
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.FileSystemAccessManager_ChooseEntries_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ChooseEntries (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: GetFileHandleFromToken
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.FileSystemAccessManager_GetFileHandleFromToken_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetFileHandleFromToken (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: GetDirectoryHandleFromToken
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.FileSystemAccessManager_GetDirectoryHandleFromToken_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetDirectoryHandleFromToken (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: GetEntryFromDataTransferToken
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.FileSystemAccessManager_GetEntryFromDataTransferToken_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetEntryFromDataTransferToken (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: BindObserverHost
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.FileSystemAccessManager_BindObserverHost_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> BindObserverHost (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.FileSystemAccessManager_GetSandboxedFileSystem_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getSandboxedFileSystem');
          const result = this.impl.getSandboxedFileSystem();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.blink.mojom.FileSystemAccessManager_GetSandboxedFileSystem_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetSandboxedFileSystem FAILED:', e));
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.FileSystemAccessManager_GetSandboxedFileSystemForDevtools_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getSandboxedFileSystemForDevtools');
          const result = this.impl.getSandboxedFileSystemForDevtools(params.arg_directory_path_components);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.blink.mojom.FileSystemAccessManager_GetSandboxedFileSystemForDevtools_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetSandboxedFileSystemForDevtools FAILED:', e));
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.FileSystemAccessManager_ChooseEntries_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.chooseEntries');
          const result = this.impl.chooseEntries(params.arg_options);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.blink.mojom.FileSystemAccessManager_ChooseEntries_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] ChooseEntries FAILED:', e));
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.FileSystemAccessManager_GetFileHandleFromToken_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getFileHandleFromToken');
          const result = this.impl.getFileHandleFromToken(params.arg_token, params.arg_file_handle);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.FileSystemAccessManager_GetDirectoryHandleFromToken_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getDirectoryHandleFromToken');
          const result = this.impl.getDirectoryHandleFromToken(params.arg_token, params.arg_directory_handle);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.FileSystemAccessManager_GetEntryFromDataTransferToken_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getEntryFromDataTransferToken');
          const result = this.impl.getEntryFromDataTransferToken(params.arg_token);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.blink.mojom.FileSystemAccessManager_GetEntryFromDataTransferToken_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetEntryFromDataTransferToken FAILED:', e));
          }
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.FileSystemAccessManager_BindObserverHost_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.bindObserverHost');
          const result = this.impl.bindObserverHost(params.arg_observer_host);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.blink.mojom.FileSystemAccessManagerReceiver = mojo.internal.bindings.blink.mojom.FileSystemAccessManagerReceiver;

mojo.internal.bindings.blink.mojom.FileSystemAccessManagerPtr = mojo.internal.bindings.blink.mojom.FileSystemAccessManagerRemote;
mojo.internal.bindings.blink.mojom.FileSystemAccessManagerRequest = mojo.internal.bindings.blink.mojom.FileSystemAccessManagerPendingReceiver;

