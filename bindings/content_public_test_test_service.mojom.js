// Auto-generated MojoJS binding
 // Source: chromium_src/content/public/test/test_service.mojom
 // Module: content.mojom

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

         const versionStr = window.mojoVersion || '120.0.0.0';
         const p = versionStr.split('.');
         const salt = 'MAJOR=' + p[0] + '\n' + 'MINOR=' + (p[1]||0) + '\n' + 'BUILD=' + (p[2]||0) + '\n' + 'PATCH=' + (p[3]||0) + '\n';
         
         const shortName = ifaceName.split('.').pop();
         while (true) {
           i++;
           const h0 = SHA256(salt + shortName + i);
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
 

 mojo.internal.bindings.content = mojo.internal.bindings.content || {};
mojo.internal.bindings.content.mojom = mojo.internal.bindings.content.mojom || {};
mojo.internal.bindings.mojo_base = mojo.internal.bindings.mojo_base || {};

mojo.internal.bindings.content.mojom.TestService = {};
mojo.internal.bindings.content.mojom.TestServiceSpec = { $ : {} };
mojo.internal.bindings.content.mojom.TestService.$interfaceName = 'content.mojom.TestService';
mojo.internal.bindings.content.mojom.TestService_DoSomething_ParamsSpec = { $: {} };
mojo.internal.bindings.content.mojom.TestService_DoSomething_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.content.mojom.TestService_DoTerminateProcess_ParamsSpec = { $: {} };
mojo.internal.bindings.content.mojom.TestService_DoTerminateProcess_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.content.mojom.TestService_DoCrashImmediately_ParamsSpec = { $: {} };
mojo.internal.bindings.content.mojom.TestService_DoCrashImmediately_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.content.mojom.TestService_CreateFolder_ParamsSpec = { $: {} };
mojo.internal.bindings.content.mojom.TestService_CreateFolder_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.content.mojom.TestService_GetRequestorName_ParamsSpec = { $: {} };
mojo.internal.bindings.content.mojom.TestService_GetRequestorName_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.content.mojom.TestService_CreateReadOnlySharedMemoryRegion_ParamsSpec = { $: {} };
mojo.internal.bindings.content.mojom.TestService_CreateReadOnlySharedMemoryRegion_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.content.mojom.TestService_CreateWritableSharedMemoryRegion_ParamsSpec = { $: {} };
mojo.internal.bindings.content.mojom.TestService_CreateWritableSharedMemoryRegion_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.content.mojom.TestService_CreateUnsafeSharedMemoryRegion_ParamsSpec = { $: {} };
mojo.internal.bindings.content.mojom.TestService_CreateUnsafeSharedMemoryRegion_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.content.mojom.TestService_CloneSharedMemoryContents_ParamsSpec = { $: {} };
mojo.internal.bindings.content.mojom.TestService_CloneSharedMemoryContents_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.content.mojom.TestService_IsProcessSandboxed_ParamsSpec = { $: {} };
mojo.internal.bindings.content.mojom.TestService_IsProcessSandboxed_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.content.mojom.TestService_PseudonymizeString_ParamsSpec = { $: {} };
mojo.internal.bindings.content.mojom.TestService_PseudonymizeString_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.content.mojom.TestService_PassWriteableFile_ParamsSpec = { $: {} };
mojo.internal.bindings.content.mojom.TestService_PassWriteableFile_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.content.mojom.TestService_WriteToPreloadedPipe_ParamsSpec = { $: {} };

mojo.internal.bindings.content.mojom.kTestPipeKey = "content_test_pipe";

// Interface: TestService
mojo.internal.Struct(
    mojo.internal.bindings.content.mojom.TestService_DoSomething_ParamsSpec, 'content.mojom.TestService_DoSomething_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.content.mojom.TestService_DoSomething_ResponseParamsSpec, 'content.mojom.TestService_DoSomething_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.content.mojom.TestService_DoTerminateProcess_ParamsSpec, 'content.mojom.TestService_DoTerminateProcess_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.content.mojom.TestService_DoTerminateProcess_ResponseParamsSpec, 'content.mojom.TestService_DoTerminateProcess_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.content.mojom.TestService_DoCrashImmediately_ParamsSpec, 'content.mojom.TestService_DoCrashImmediately_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.content.mojom.TestService_DoCrashImmediately_ResponseParamsSpec, 'content.mojom.TestService_DoCrashImmediately_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.content.mojom.TestService_CreateFolder_ParamsSpec, 'content.mojom.TestService_CreateFolder_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.content.mojom.TestService_CreateFolder_ResponseParamsSpec, 'content.mojom.TestService_CreateFolder_ResponseParams', [
      mojo.internal.StructField('arg_succeeded', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.content.mojom.TestService_GetRequestorName_ParamsSpec, 'content.mojom.TestService_GetRequestorName_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.content.mojom.TestService_GetRequestorName_ResponseParamsSpec, 'content.mojom.TestService_GetRequestorName_ResponseParams', [
      mojo.internal.StructField('arg_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.content.mojom.TestService_CreateReadOnlySharedMemoryRegion_ParamsSpec, 'content.mojom.TestService_CreateReadOnlySharedMemoryRegion_Params', [
      mojo.internal.StructField('arg_message', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.content.mojom.TestService_CreateReadOnlySharedMemoryRegion_ResponseParamsSpec, 'content.mojom.TestService_CreateReadOnlySharedMemoryRegion_ResponseParams', [
      mojo.internal.StructField('arg_region', 0, 0, mojo.internal.bindings.mojo_base.mojom.ReadOnlySharedMemoryRegionSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.content.mojom.TestService_CreateWritableSharedMemoryRegion_ParamsSpec, 'content.mojom.TestService_CreateWritableSharedMemoryRegion_Params', [
      mojo.internal.StructField('arg_message', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.content.mojom.TestService_CreateWritableSharedMemoryRegion_ResponseParamsSpec, 'content.mojom.TestService_CreateWritableSharedMemoryRegion_ResponseParams', [
      mojo.internal.StructField('arg_region', 0, 0, mojo.internal.bindings.mojo_base.mojom.WritableSharedMemoryRegionSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.content.mojom.TestService_CreateUnsafeSharedMemoryRegion_ParamsSpec, 'content.mojom.TestService_CreateUnsafeSharedMemoryRegion_Params', [
      mojo.internal.StructField('arg_message', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.content.mojom.TestService_CreateUnsafeSharedMemoryRegion_ResponseParamsSpec, 'content.mojom.TestService_CreateUnsafeSharedMemoryRegion_ResponseParams', [
      mojo.internal.StructField('arg_region', 0, 0, mojo.internal.bindings.mojo_base.mojom.UnsafeSharedMemoryRegionSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.content.mojom.TestService_CloneSharedMemoryContents_ParamsSpec, 'content.mojom.TestService_CloneSharedMemoryContents_Params', [
      mojo.internal.StructField('arg_region', 0, 0, mojo.internal.bindings.mojo_base.mojom.ReadOnlySharedMemoryRegionSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.content.mojom.TestService_CloneSharedMemoryContents_ResponseParamsSpec, 'content.mojom.TestService_CloneSharedMemoryContents_ResponseParams', [
      mojo.internal.StructField('arg_new_region', 0, 0, mojo.internal.bindings.mojo_base.mojom.UnsafeSharedMemoryRegionSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.content.mojom.TestService_IsProcessSandboxed_ParamsSpec, 'content.mojom.TestService_IsProcessSandboxed_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.content.mojom.TestService_IsProcessSandboxed_ResponseParamsSpec, 'content.mojom.TestService_IsProcessSandboxed_ResponseParams', [
      mojo.internal.StructField('arg_is_sandboxed', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.content.mojom.TestService_PseudonymizeString_ParamsSpec, 'content.mojom.TestService_PseudonymizeString_Params', [
      mojo.internal.StructField('arg_value', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.content.mojom.TestService_PseudonymizeString_ResponseParamsSpec, 'content.mojom.TestService_PseudonymizeString_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.content.mojom.TestService_PassWriteableFile_ParamsSpec, 'content.mojom.TestService_PassWriteableFile_Params', [
      mojo.internal.StructField('arg_file', 0, 0, mojo.internal.bindings.mojo_base.mojom.FileSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.content.mojom.TestService_PassWriteableFile_ResponseParamsSpec, 'content.mojom.TestService_PassWriteableFile_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.content.mojom.TestService_WriteToPreloadedPipe_ParamsSpec, 'content.mojom.TestService_WriteToPreloadedPipe_Params', [
    ],
    [[0, 8]]);

mojo.internal.bindings.content.mojom.TestServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.content.mojom.TestServiceRemote = class {
  static get $interfaceName() {
    return 'content.mojom.TestService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.content.mojom.TestServicePendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.content.mojom.TestServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  doSomething() {
    return this.$.doSomething();
  }
  doTerminateProcess() {
    return this.$.doTerminateProcess();
  }
  doCrashImmediately() {
    return this.$.doCrashImmediately();
  }
  createFolder() {
    return this.$.createFolder();
  }
  getRequestorName() {
    return this.$.getRequestorName();
  }
  createReadOnlySharedMemoryRegion(arg_message) {
    return this.$.createReadOnlySharedMemoryRegion(arg_message);
  }
  createWritableSharedMemoryRegion(arg_message) {
    return this.$.createWritableSharedMemoryRegion(arg_message);
  }
  createUnsafeSharedMemoryRegion(arg_message) {
    return this.$.createUnsafeSharedMemoryRegion(arg_message);
  }
  cloneSharedMemoryContents(arg_region) {
    return this.$.cloneSharedMemoryContents(arg_region);
  }
  isProcessSandboxed() {
    return this.$.isProcessSandboxed();
  }
  pseudonymizeString(arg_value) {
    return this.$.pseudonymizeString(arg_value);
  }
  passWriteableFile(arg_file) {
    return this.$.passWriteableFile(arg_file);
  }
  writeToPreloadedPipe() {
    return this.$.writeToPreloadedPipe();
  }
};

mojo.internal.bindings.content.mojom.TestServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('content.mojom.TestService', [
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

  doSomething() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.content.mojom.TestService_DoSomething_ParamsSpec,
      mojo.internal.bindings.content.mojom.TestService_DoSomething_ResponseParamsSpec,
      [],
      false);
  }

  doTerminateProcess() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.content.mojom.TestService_DoTerminateProcess_ParamsSpec,
      mojo.internal.bindings.content.mojom.TestService_DoTerminateProcess_ResponseParamsSpec,
      [],
      false);
  }

  doCrashImmediately() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.content.mojom.TestService_DoCrashImmediately_ParamsSpec,
      mojo.internal.bindings.content.mojom.TestService_DoCrashImmediately_ResponseParamsSpec,
      [],
      false);
  }

  createFolder() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.content.mojom.TestService_CreateFolder_ParamsSpec,
      mojo.internal.bindings.content.mojom.TestService_CreateFolder_ResponseParamsSpec,
      [],
      false);
  }

  getRequestorName() {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.content.mojom.TestService_GetRequestorName_ParamsSpec,
      mojo.internal.bindings.content.mojom.TestService_GetRequestorName_ResponseParamsSpec,
      [],
      false);
  }

  createReadOnlySharedMemoryRegion(arg_message) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojo.internal.bindings.content.mojom.TestService_CreateReadOnlySharedMemoryRegion_ParamsSpec,
      mojo.internal.bindings.content.mojom.TestService_CreateReadOnlySharedMemoryRegion_ResponseParamsSpec,
      [arg_message],
      false);
  }

  createWritableSharedMemoryRegion(arg_message) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      mojo.internal.bindings.content.mojom.TestService_CreateWritableSharedMemoryRegion_ParamsSpec,
      mojo.internal.bindings.content.mojom.TestService_CreateWritableSharedMemoryRegion_ResponseParamsSpec,
      [arg_message],
      false);
  }

  createUnsafeSharedMemoryRegion(arg_message) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      mojo.internal.bindings.content.mojom.TestService_CreateUnsafeSharedMemoryRegion_ParamsSpec,
      mojo.internal.bindings.content.mojom.TestService_CreateUnsafeSharedMemoryRegion_ResponseParamsSpec,
      [arg_message],
      false);
  }

  cloneSharedMemoryContents(arg_region) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      mojo.internal.bindings.content.mojom.TestService_CloneSharedMemoryContents_ParamsSpec,
      mojo.internal.bindings.content.mojom.TestService_CloneSharedMemoryContents_ResponseParamsSpec,
      [arg_region],
      false);
  }

  isProcessSandboxed() {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      mojo.internal.bindings.content.mojom.TestService_IsProcessSandboxed_ParamsSpec,
      mojo.internal.bindings.content.mojom.TestService_IsProcessSandboxed_ResponseParamsSpec,
      [],
      false);
  }

  pseudonymizeString(arg_value) {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      mojo.internal.bindings.content.mojom.TestService_PseudonymizeString_ParamsSpec,
      mojo.internal.bindings.content.mojom.TestService_PseudonymizeString_ResponseParamsSpec,
      [arg_value],
      false);
  }

  passWriteableFile(arg_file) {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      mojo.internal.bindings.content.mojom.TestService_PassWriteableFile_ParamsSpec,
      mojo.internal.bindings.content.mojom.TestService_PassWriteableFile_ResponseParamsSpec,
      [arg_file],
      false);
  }

  writeToPreloadedPipe() {
    return this.proxy.sendMessage(
      this.ordinals[12],  // ordinal
      mojo.internal.bindings.content.mojom.TestService_WriteToPreloadedPipe_ParamsSpec,
      null,
      [],
      false);
  }

};

mojo.internal.bindings.content.mojom.TestService.getRemote = function() {
  let remote = new mojo.internal.bindings.content.mojom.TestServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'content.mojom.TestService',
    'context');
  return remote.$;
};

mojo.internal.bindings.content.mojom.TestServiceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('content.mojom.TestService', [
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
        
        // Try Method 0: DoSomething
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.content.mojom.TestService_DoSomething_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DoSomething (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: DoTerminateProcess
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.content.mojom.TestService_DoTerminateProcess_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DoTerminateProcess (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: DoCrashImmediately
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.content.mojom.TestService_DoCrashImmediately_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DoCrashImmediately (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: CreateFolder
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.content.mojom.TestService_CreateFolder_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreateFolder (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: GetRequestorName
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.content.mojom.TestService_GetRequestorName_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetRequestorName (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: CreateReadOnlySharedMemoryRegion
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.content.mojom.TestService_CreateReadOnlySharedMemoryRegion_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreateReadOnlySharedMemoryRegion (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: CreateWritableSharedMemoryRegion
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.content.mojom.TestService_CreateWritableSharedMemoryRegion_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreateWritableSharedMemoryRegion (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: CreateUnsafeSharedMemoryRegion
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.content.mojom.TestService_CreateUnsafeSharedMemoryRegion_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreateUnsafeSharedMemoryRegion (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: CloneSharedMemoryContents
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.content.mojom.TestService_CloneSharedMemoryContents_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CloneSharedMemoryContents (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
           }
        }
        // Try Method 9: IsProcessSandboxed
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.content.mojom.TestService_IsProcessSandboxed_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> IsProcessSandboxed (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 9 failed:', e);
           }
        }
        // Try Method 10: PseudonymizeString
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.content.mojom.TestService_PseudonymizeString_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> PseudonymizeString (10)');
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 10 failed:', e);
           }
        }
        // Try Method 11: PassWriteableFile
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.content.mojom.TestService_PassWriteableFile_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> PassWriteableFile (11)');
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 11 failed:', e);
           }
        }
        // Try Method 12: WriteToPreloadedPipe
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.content.mojom.TestService_WriteToPreloadedPipe_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> WriteToPreloadedPipe (12)');
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 12 failed:', e);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.content.mojom.TestService_DoSomething_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.doSomething');
          const result = this.impl.doSomething();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.content.mojom.TestService_DoSomething_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] DoSomething FAILED:', e));
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.content.mojom.TestService_DoTerminateProcess_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.doTerminateProcess');
          const result = this.impl.doTerminateProcess();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.content.mojom.TestService_DoTerminateProcess_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] DoTerminateProcess FAILED:', e));
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.content.mojom.TestService_DoCrashImmediately_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.doCrashImmediately');
          const result = this.impl.doCrashImmediately();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.content.mojom.TestService_DoCrashImmediately_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] DoCrashImmediately FAILED:', e));
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.content.mojom.TestService_CreateFolder_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.createFolder');
          const result = this.impl.createFolder();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.content.mojom.TestService_CreateFolder_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] CreateFolder FAILED:', e));
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.content.mojom.TestService_GetRequestorName_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getRequestorName');
          const result = this.impl.getRequestorName();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.content.mojom.TestService_GetRequestorName_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetRequestorName FAILED:', e));
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.content.mojom.TestService_CreateReadOnlySharedMemoryRegion_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.createReadOnlySharedMemoryRegion');
          const result = this.impl.createReadOnlySharedMemoryRegion(params.arg_message);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.content.mojom.TestService_CreateReadOnlySharedMemoryRegion_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] CreateReadOnlySharedMemoryRegion FAILED:', e));
          }
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.content.mojom.TestService_CreateWritableSharedMemoryRegion_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.createWritableSharedMemoryRegion');
          const result = this.impl.createWritableSharedMemoryRegion(params.arg_message);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.content.mojom.TestService_CreateWritableSharedMemoryRegion_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] CreateWritableSharedMemoryRegion FAILED:', e));
          }
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.content.mojom.TestService_CreateUnsafeSharedMemoryRegion_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.createUnsafeSharedMemoryRegion');
          const result = this.impl.createUnsafeSharedMemoryRegion(params.arg_message);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.content.mojom.TestService_CreateUnsafeSharedMemoryRegion_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] CreateUnsafeSharedMemoryRegion FAILED:', e));
          }
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.content.mojom.TestService_CloneSharedMemoryContents_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.cloneSharedMemoryContents');
          const result = this.impl.cloneSharedMemoryContents(params.arg_region);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.content.mojom.TestService_CloneSharedMemoryContents_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] CloneSharedMemoryContents FAILED:', e));
          }
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.content.mojom.TestService_IsProcessSandboxed_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.isProcessSandboxed');
          const result = this.impl.isProcessSandboxed();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.content.mojom.TestService_IsProcessSandboxed_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] IsProcessSandboxed FAILED:', e));
          }
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.content.mojom.TestService_PseudonymizeString_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.pseudonymizeString');
          const result = this.impl.pseudonymizeString(params.arg_value);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.content.mojom.TestService_PseudonymizeString_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] PseudonymizeString FAILED:', e));
          }
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.content.mojom.TestService_PassWriteableFile_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.passWriteableFile');
          const result = this.impl.passWriteableFile(params.arg_file);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.content.mojom.TestService_PassWriteableFile_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] PassWriteableFile FAILED:', e));
          }
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.content.mojom.TestService_WriteToPreloadedPipe_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.writeToPreloadedPipe');
          const result = this.impl.writeToPreloadedPipe();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.content.mojom.TestServiceReceiver = mojo.internal.bindings.content.mojom.TestServiceReceiver;

mojo.internal.bindings.content.mojom.TestServicePtr = mojo.internal.bindings.content.mojom.TestServiceRemote;
mojo.internal.bindings.content.mojom.TestServiceRequest = mojo.internal.bindings.content.mojom.TestServicePendingReceiver;

