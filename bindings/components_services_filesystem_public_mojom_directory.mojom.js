// Auto-generated MojoJS binding
// Source: chromium_src/components/services/filesystem/public/mojom/directory.mojom
// Module: filesystem.mojom

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
var filesystem = filesystem || {};
filesystem.mojom = filesystem.mojom || {};
var mojo_base = mojo_base || {};

filesystem.mojom.FileOpenDetailsSpec = { $: {} };
filesystem.mojom.FileOpenResultSpec = { $: {} };
filesystem.mojom.Directory = {};
filesystem.mojom.Directory.$interfaceName = 'filesystem.mojom.Directory';
filesystem.mojom.Directory_Read_ParamsSpec = { $: {} };
filesystem.mojom.Directory_Read_ResponseParamsSpec = { $: {} };
filesystem.mojom.Directory_OpenFileHandle_ParamsSpec = { $: {} };
filesystem.mojom.Directory_OpenFileHandle_ResponseParamsSpec = { $: {} };
filesystem.mojom.Directory_OpenFileHandles_ParamsSpec = { $: {} };
filesystem.mojom.Directory_OpenFileHandles_ResponseParamsSpec = { $: {} };
filesystem.mojom.Directory_OpenDirectory_ParamsSpec = { $: {} };
filesystem.mojom.Directory_OpenDirectory_ResponseParamsSpec = { $: {} };
filesystem.mojom.Directory_Rename_ParamsSpec = { $: {} };
filesystem.mojom.Directory_Rename_ResponseParamsSpec = { $: {} };
filesystem.mojom.Directory_Replace_ParamsSpec = { $: {} };
filesystem.mojom.Directory_Replace_ResponseParamsSpec = { $: {} };
filesystem.mojom.Directory_Delete_ParamsSpec = { $: {} };
filesystem.mojom.Directory_Delete_ResponseParamsSpec = { $: {} };
filesystem.mojom.Directory_Exists_ParamsSpec = { $: {} };
filesystem.mojom.Directory_Exists_ResponseParamsSpec = { $: {} };
filesystem.mojom.Directory_IsWritable_ParamsSpec = { $: {} };
filesystem.mojom.Directory_IsWritable_ResponseParamsSpec = { $: {} };
filesystem.mojom.Directory_Flush_ParamsSpec = { $: {} };
filesystem.mojom.Directory_Flush_ResponseParamsSpec = { $: {} };
filesystem.mojom.Directory_StatFile_ParamsSpec = { $: {} };
filesystem.mojom.Directory_StatFile_ResponseParamsSpec = { $: {} };
filesystem.mojom.Directory_Clone_ParamsSpec = { $: {} };
filesystem.mojom.Directory_ReadEntireFile_ParamsSpec = { $: {} };
filesystem.mojom.Directory_ReadEntireFile_ResponseParamsSpec = { $: {} };
filesystem.mojom.Directory_WriteFile_ParamsSpec = { $: {} };
filesystem.mojom.Directory_WriteFile_ResponseParamsSpec = { $: {} };

// Struct: FileOpenDetails
mojo.internal.Struct(
    filesystem.mojom.FileOpenDetailsSpec, 'filesystem.mojom.FileOpenDetails', [
      mojo.internal.StructField('path', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('open_flags', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: FileOpenResult
mojo.internal.Struct(
    filesystem.mojom.FileOpenResultSpec, 'filesystem.mojom.FileOpenResult', [
      mojo.internal.StructField('path', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('error', 8, 0, mojo_base.mojom.FileErrorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('file_handle', 16, 0, mojo_base.mojom.FileSpec.$, null, true, 0, undefined),
    ],
    [[0, 32]]);

// Interface: Directory
mojo.internal.Struct(
    filesystem.mojom.Directory_Read_ParamsSpec, 'filesystem.mojom.Directory_Read_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    filesystem.mojom.Directory_Read_ResponseParamsSpec, 'filesystem.mojom.Directory_Read_ResponseParams', [
      mojo.internal.StructField('error', 0, 0, mojo_base.mojom.FileErrorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('directory_contents', 8, 0, mojo.internal.Array(filesystem.mojom.DirectoryEntrySpec.$, false), null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    filesystem.mojom.Directory_OpenFileHandle_ParamsSpec, 'filesystem.mojom.Directory_OpenFileHandle_Params', [
      mojo.internal.StructField('path', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('open_flags', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    filesystem.mojom.Directory_OpenFileHandle_ResponseParamsSpec, 'filesystem.mojom.Directory_OpenFileHandle_ResponseParams', [
      mojo.internal.StructField('error', 0, 0, mojo_base.mojom.FileErrorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('file_handle', 8, 0, mojo_base.mojom.FileSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    filesystem.mojom.Directory_OpenFileHandles_ParamsSpec, 'filesystem.mojom.Directory_OpenFileHandles_Params', [
      mojo.internal.StructField('files', 0, 0, mojo.internal.Array(filesystem.mojom.FileOpenDetailsSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    filesystem.mojom.Directory_OpenFileHandles_ResponseParamsSpec, 'filesystem.mojom.Directory_OpenFileHandles_ResponseParams', [
      mojo.internal.StructField('results', 0, 0, mojo.internal.Array(filesystem.mojom.FileOpenResultSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    filesystem.mojom.Directory_OpenDirectory_ParamsSpec, 'filesystem.mojom.Directory_OpenDirectory_Params', [
      mojo.internal.StructField('path', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('directory', 8, 0, mojo.internal.InterfaceRequest(filesystem.mojom.DirectorySpec), null, true, 0, undefined),
      mojo.internal.StructField('open_flags', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    filesystem.mojom.Directory_OpenDirectory_ResponseParamsSpec, 'filesystem.mojom.Directory_OpenDirectory_ResponseParams', [
      mojo.internal.StructField('error', 0, 0, mojo_base.mojom.FileErrorSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    filesystem.mojom.Directory_Rename_ParamsSpec, 'filesystem.mojom.Directory_Rename_Params', [
      mojo.internal.StructField('path', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('new_path', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    filesystem.mojom.Directory_Rename_ResponseParamsSpec, 'filesystem.mojom.Directory_Rename_ResponseParams', [
      mojo.internal.StructField('error', 0, 0, mojo_base.mojom.FileErrorSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    filesystem.mojom.Directory_Replace_ParamsSpec, 'filesystem.mojom.Directory_Replace_Params', [
      mojo.internal.StructField('path', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('new_path', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    filesystem.mojom.Directory_Replace_ResponseParamsSpec, 'filesystem.mojom.Directory_Replace_ResponseParams', [
      mojo.internal.StructField('error', 0, 0, mojo_base.mojom.FileErrorSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    filesystem.mojom.Directory_Delete_ParamsSpec, 'filesystem.mojom.Directory_Delete_Params', [
      mojo.internal.StructField('path', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('delete_flags', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    filesystem.mojom.Directory_Delete_ResponseParamsSpec, 'filesystem.mojom.Directory_Delete_ResponseParams', [
      mojo.internal.StructField('error', 0, 0, mojo_base.mojom.FileErrorSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    filesystem.mojom.Directory_Exists_ParamsSpec, 'filesystem.mojom.Directory_Exists_Params', [
      mojo.internal.StructField('path', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    filesystem.mojom.Directory_Exists_ResponseParamsSpec, 'filesystem.mojom.Directory_Exists_ResponseParams', [
      mojo.internal.StructField('error', 0, 0, mojo_base.mojom.FileErrorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('exists', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    filesystem.mojom.Directory_IsWritable_ParamsSpec, 'filesystem.mojom.Directory_IsWritable_Params', [
      mojo.internal.StructField('path', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    filesystem.mojom.Directory_IsWritable_ResponseParamsSpec, 'filesystem.mojom.Directory_IsWritable_ResponseParams', [
      mojo.internal.StructField('error', 0, 0, mojo_base.mojom.FileErrorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('is_writable', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    filesystem.mojom.Directory_Flush_ParamsSpec, 'filesystem.mojom.Directory_Flush_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    filesystem.mojom.Directory_Flush_ResponseParamsSpec, 'filesystem.mojom.Directory_Flush_ResponseParams', [
      mojo.internal.StructField('error', 0, 0, mojo_base.mojom.FileErrorSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    filesystem.mojom.Directory_StatFile_ParamsSpec, 'filesystem.mojom.Directory_StatFile_Params', [
      mojo.internal.StructField('path', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    filesystem.mojom.Directory_StatFile_ResponseParamsSpec, 'filesystem.mojom.Directory_StatFile_ResponseParams', [
      mojo.internal.StructField('error', 0, 0, mojo_base.mojom.FileErrorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('file_information', 8, 0, filesystem.mojom.FileInformationSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    filesystem.mojom.Directory_Clone_ParamsSpec, 'filesystem.mojom.Directory_Clone_Params', [
      mojo.internal.StructField('directory', 0, 0, mojo.internal.InterfaceRequest(filesystem.mojom.DirectorySpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    filesystem.mojom.Directory_ReadEntireFile_ParamsSpec, 'filesystem.mojom.Directory_ReadEntireFile_Params', [
      mojo.internal.StructField('path', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    filesystem.mojom.Directory_ReadEntireFile_ResponseParamsSpec, 'filesystem.mojom.Directory_ReadEntireFile_ResponseParams', [
      mojo.internal.StructField('error', 0, 0, mojo_base.mojom.FileErrorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('data', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    filesystem.mojom.Directory_WriteFile_ParamsSpec, 'filesystem.mojom.Directory_WriteFile_Params', [
      mojo.internal.StructField('path', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('data', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    filesystem.mojom.Directory_WriteFile_ResponseParamsSpec, 'filesystem.mojom.Directory_WriteFile_ResponseParams', [
      mojo.internal.StructField('error', 0, 0, mojo_base.mojom.FileErrorSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

filesystem.mojom.DirectoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

filesystem.mojom.DirectoryRemote = class {
  static get $interfaceName() {
    return 'filesystem.mojom.Directory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      filesystem.mojom.DirectoryPendingReceiver,
      handle);
    this.$ = new filesystem.mojom.DirectoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

filesystem.mojom.DirectoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('Directory', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  read() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      filesystem.mojom.Directory_Read_ParamsSpec,
      filesystem.mojom.Directory_Read_ResponseParamsSpec,
      [],
      false);
  }

  openFileHandle(path, open_flags) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      filesystem.mojom.Directory_OpenFileHandle_ParamsSpec,
      filesystem.mojom.Directory_OpenFileHandle_ResponseParamsSpec,
      [path, open_flags],
      false);
  }

  openFileHandles(files) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      filesystem.mojom.Directory_OpenFileHandles_ParamsSpec,
      filesystem.mojom.Directory_OpenFileHandles_ResponseParamsSpec,
      [files],
      false);
  }

  openDirectory(path, directory, open_flags) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      filesystem.mojom.Directory_OpenDirectory_ParamsSpec,
      filesystem.mojom.Directory_OpenDirectory_ResponseParamsSpec,
      [path, directory, open_flags],
      false);
  }

  rename(path, new_path) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      filesystem.mojom.Directory_Rename_ParamsSpec,
      filesystem.mojom.Directory_Rename_ResponseParamsSpec,
      [path, new_path],
      false);
  }

  replace(path, new_path) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      filesystem.mojom.Directory_Replace_ParamsSpec,
      filesystem.mojom.Directory_Replace_ResponseParamsSpec,
      [path, new_path],
      false);
  }

  delete(path, delete_flags) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      filesystem.mojom.Directory_Delete_ParamsSpec,
      filesystem.mojom.Directory_Delete_ResponseParamsSpec,
      [path, delete_flags],
      false);
  }

  exists(path) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      filesystem.mojom.Directory_Exists_ParamsSpec,
      filesystem.mojom.Directory_Exists_ResponseParamsSpec,
      [path],
      false);
  }

  isWritable(path) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      filesystem.mojom.Directory_IsWritable_ParamsSpec,
      filesystem.mojom.Directory_IsWritable_ResponseParamsSpec,
      [path],
      false);
  }

  flush() {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      filesystem.mojom.Directory_Flush_ParamsSpec,
      filesystem.mojom.Directory_Flush_ResponseParamsSpec,
      [],
      false);
  }

  statFile(path) {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      filesystem.mojom.Directory_StatFile_ParamsSpec,
      filesystem.mojom.Directory_StatFile_ResponseParamsSpec,
      [path],
      false);
  }

  clone(directory) {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      filesystem.mojom.Directory_Clone_ParamsSpec,
      null,
      [directory],
      false);
  }

  readEntireFile(path) {
    return this.proxy.sendMessage(
      this.ordinals[12],  // ordinal
      filesystem.mojom.Directory_ReadEntireFile_ParamsSpec,
      filesystem.mojom.Directory_ReadEntireFile_ResponseParamsSpec,
      [path],
      false);
  }

  writeFile(path, data) {
    return this.proxy.sendMessage(
      this.ordinals[13],  // ordinal
      filesystem.mojom.Directory_WriteFile_ParamsSpec,
      filesystem.mojom.Directory_WriteFile_ResponseParamsSpec,
      [path, data],
      false);
  }

};

filesystem.mojom.Directory.getRemote = function() {
  let remote = new filesystem.mojom.DirectoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'filesystem.mojom.Directory',
    'context');
  return remote.$;
};

filesystem.mojom.DirectoryReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('Directory', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
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
        
        // Try Method 0: Read
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(filesystem.mojom.Directory_Read_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Read (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: OpenFileHandle
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(filesystem.mojom.Directory_OpenFileHandle_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OpenFileHandle (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: OpenFileHandles
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(filesystem.mojom.Directory_OpenFileHandles_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OpenFileHandles (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: OpenDirectory
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(filesystem.mojom.Directory_OpenDirectory_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OpenDirectory (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: Rename
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(filesystem.mojom.Directory_Rename_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Rename (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: Replace
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(filesystem.mojom.Directory_Replace_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Replace (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: Delete
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(filesystem.mojom.Directory_Delete_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Delete (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: Exists
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(filesystem.mojom.Directory_Exists_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Exists (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: IsWritable
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(filesystem.mojom.Directory_IsWritable_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> IsWritable (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
           }
        }
        // Try Method 9: Flush
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(filesystem.mojom.Directory_Flush_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Flush (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 9 failed:', e);
           }
        }
        // Try Method 10: StatFile
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(filesystem.mojom.Directory_StatFile_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> StatFile (10)');
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 10 failed:', e);
           }
        }
        // Try Method 11: Clone
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(filesystem.mojom.Directory_Clone_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Clone (11)');
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 11 failed:', e);
           }
        }
        // Try Method 12: ReadEntireFile
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(filesystem.mojom.Directory_ReadEntireFile_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ReadEntireFile (12)');
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 12 failed:', e);
           }
        }
        // Try Method 13: WriteFile
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(filesystem.mojom.Directory_WriteFile_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> WriteFile (13)');
             this.mapOrdinal(header.ordinal, 13);
             dispatchId = 13;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 13 failed:', e);
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
          const params = decoder.decodeStructInline(filesystem.mojom.Directory_Read_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.read');
          const result = this.impl.read();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, filesystem.mojom.Directory_Read_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(filesystem.mojom.Directory_OpenFileHandle_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.openFileHandle');
          const result = this.impl.openFileHandle(params.path, params.open_flags);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, filesystem.mojom.Directory_OpenFileHandle_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(filesystem.mojom.Directory_OpenFileHandles_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.openFileHandles');
          const result = this.impl.openFileHandles(params.files);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, filesystem.mojom.Directory_OpenFileHandles_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(filesystem.mojom.Directory_OpenDirectory_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.openDirectory');
          const result = this.impl.openDirectory(params.path, params.directory, params.open_flags);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, filesystem.mojom.Directory_OpenDirectory_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(filesystem.mojom.Directory_Rename_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.rename');
          const result = this.impl.rename(params.path, params.new_path);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, filesystem.mojom.Directory_Rename_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(filesystem.mojom.Directory_Replace_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.replace');
          const result = this.impl.replace(params.path, params.new_path);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, filesystem.mojom.Directory_Replace_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(filesystem.mojom.Directory_Delete_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.delete');
          const result = this.impl.delete(params.path, params.delete_flags);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, filesystem.mojom.Directory_Delete_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(filesystem.mojom.Directory_Exists_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.exists');
          const result = this.impl.exists(params.path);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, filesystem.mojom.Directory_Exists_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(filesystem.mojom.Directory_IsWritable_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.isWritable');
          const result = this.impl.isWritable(params.path);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, filesystem.mojom.Directory_IsWritable_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(filesystem.mojom.Directory_Flush_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.flush');
          const result = this.impl.flush();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, filesystem.mojom.Directory_Flush_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(filesystem.mojom.Directory_StatFile_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.statFile');
          const result = this.impl.statFile(params.path);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, filesystem.mojom.Directory_StatFile_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(filesystem.mojom.Directory_Clone_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.clone');
          const result = this.impl.clone(params.directory);
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(filesystem.mojom.Directory_ReadEntireFile_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.readEntireFile');
          const result = this.impl.readEntireFile(params.path);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, filesystem.mojom.Directory_ReadEntireFile_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(filesystem.mojom.Directory_WriteFile_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.writeFile');
          const result = this.impl.writeFile(params.path, params.data);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, filesystem.mojom.Directory_WriteFile_ResponseParamsSpec);
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

filesystem.mojom.DirectoryReceiver = filesystem.mojom.DirectoryReceiver;

filesystem.mojom.DirectoryPtr = filesystem.mojom.DirectoryRemote;
filesystem.mojom.DirectoryRequest = filesystem.mojom.DirectoryPendingReceiver;

