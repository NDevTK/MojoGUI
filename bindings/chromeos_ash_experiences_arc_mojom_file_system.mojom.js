// Auto-generated MojoJS binding
 // Source: chromium_src/chromeos/ash/experiences/arc/mojom/file_system.mojom
 // Module: arc.mojom

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
 

 mojo.internal.bindings.arc = mojo.internal.bindings.arc || {};
mojo.internal.bindings.arc.mojom = mojo.internal.bindings.arc.mojom || {};
mojo.internal.bindings.mojo_base = mojo.internal.bindings.mojo_base || {};
mojo.internal.bindings.url = mojo.internal.bindings.url || {};

mojo.internal.bindings.arc.mojom.ChangeTypeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.arc.mojom.SelectFilesActionTypeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.arc.mojom.FileSelectorEventTypeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.arc.mojom.MediaStoreMetadataSpec = { $: {} };
mojo.internal.bindings.arc.mojom.DocumentSpec = { $: {} };
mojo.internal.bindings.arc.mojom.RootSpec = { $: {} };
mojo.internal.bindings.arc.mojom.ContentUrlWithMimeTypeSpec = { $: {} };
mojo.internal.bindings.arc.mojom.OpenUrlsRequestSpec = { $: {} };
mojo.internal.bindings.arc.mojom.SelectFilesRequestSpec = { $: {} };
mojo.internal.bindings.arc.mojom.DocumentPathSpec = { $: {} };
mojo.internal.bindings.arc.mojom.SelectFilesResultSpec = { $: {} };
mojo.internal.bindings.arc.mojom.FileSelectorEventSpec = { $: {} };
mojo.internal.bindings.arc.mojom.GetFileSelectorElementsRequestSpec = { $: {} };
mojo.internal.bindings.arc.mojom.FileSelectorElementSpec = { $: {} };
mojo.internal.bindings.arc.mojom.FileSelectorElementsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.RootSizeSpec = { $: {} };
mojo.internal.bindings.arc.mojom.FileSessionSpec = { $: {} };
mojo.internal.bindings.arc.mojom.MediaStoreDownloadMetadataSpec = { $: {} };
mojo.internal.bindings.arc.mojom.FileSystemHost = {};
mojo.internal.bindings.arc.mojom.FileSystemHost.$interfaceName = 'arc.mojom.FileSystemHost';
mojo.internal.bindings.arc.mojom.FileSystemHost_GetFileName_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.FileSystemHost_GetFileName_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.FileSystemHost_GetFileSize_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.FileSystemHost_GetFileSize_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.FileSystemHost_GetLastModified_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.FileSystemHost_GetLastModified_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.FileSystemHost_GetFileType_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.FileSystemHost_GetFileType_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.FileSystemHost_OnDocumentChanged_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.FileSystemHost_OnRootsChanged_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.FileSystemHost_GetVirtualFileId_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.FileSystemHost_GetVirtualFileId_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.FileSystemHost_HandleIdReleased_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.FileSystemHost_HandleIdReleased_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.FileSystemHost_OpenFileToRead_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.FileSystemHost_OpenFileToRead_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.FileSystemHost_SelectFiles_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.FileSystemHost_SelectFiles_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.FileSystemHost_OnFileSelectorEvent_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.FileSystemHost_OnFileSelectorEvent_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.FileSystemHost_GetFileSelectorElements_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.FileSystemHost_GetFileSelectorElements_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.FileSystemHost_OnMediaStoreUriAdded_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.FileSystemHost_CreateMoniker_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.FileSystemHost_CreateMoniker_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.FileSystemHost_DestroyMoniker_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.FileSystemHost_DestroyMoniker_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.FileSystemInstance = {};
mojo.internal.bindings.arc.mojom.FileSystemInstance.$interfaceName = 'arc.mojom.FileSystemInstance';
mojo.internal.bindings.arc.mojom.FileSystemInstance_AddWatcher_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.FileSystemInstance_AddWatcher_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.FileSystemInstance_GetChildDocuments_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.FileSystemInstance_GetChildDocuments_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.FileSystemInstance_GetDocument_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.FileSystemInstance_GetDocument_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.FileSystemInstance_GetFileSize_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.FileSystemInstance_GetFileSize_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.FileSystemInstance_GetMimeType_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.FileSystemInstance_GetMimeType_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.FileSystemInstance_GetRecentDocuments_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.FileSystemInstance_GetRecentDocuments_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.FileSystemInstance_GetRoots_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.FileSystemInstance_GetRoots_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.FileSystemInstance_GetRootSize_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.FileSystemInstance_GetRootSize_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.FileSystemInstance_DeleteDocument_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.FileSystemInstance_DeleteDocument_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.FileSystemInstance_RenameDocument_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.FileSystemInstance_RenameDocument_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.FileSystemInstance_CreateDocument_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.FileSystemInstance_CreateDocument_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.FileSystemInstance_CopyDocument_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.FileSystemInstance_CopyDocument_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.FileSystemInstance_MoveDocument_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.FileSystemInstance_MoveDocument_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.FileSystemInstance_Init_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.FileSystemInstance_Init_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.FileSystemInstance_OpenThumbnail_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.FileSystemInstance_OpenThumbnail_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.FileSystemInstance_CloseFileSession_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.FileSystemInstance_OpenFileSessionToWrite_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.FileSystemInstance_OpenFileSessionToWrite_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.FileSystemInstance_OpenFileSessionToRead_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.FileSystemInstance_OpenFileSessionToRead_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.FileSystemInstance_RemoveWatcher_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.FileSystemInstance_RemoveWatcher_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.FileSystemInstance_RequestMediaScan_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.FileSystemInstance_ReindexDirectory_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.FileSystemInstance_RequestFileRemovalScan_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.FileSystemInstance_OpenUrlsWithPermissionAndWindowInfo_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.FileSystemInstance_OpenUrlsWithPermissionAndWindowInfo_ResponseParamsSpec = { $: {} };

// Enum: ChangeType
mojo.internal.bindings.arc.mojom.ChangeType = {
  CHANGED: 0,
  DELETED: 1,
};

// Enum: SelectFilesActionType
mojo.internal.bindings.arc.mojom.SelectFilesActionType = {
  GET_CONTENT: 0,
  OPEN_DOCUMENT: 1,
  OPEN_DOCUMENT_TREE: 2,
  CREATE_DOCUMENT: 3,
  MinVersion: 3,
};

// Enum: FileSelectorEventType
mojo.internal.bindings.arc.mojom.FileSelectorEventType = {
  CLICK_OK: 0,
  CLICK_DIRECTORY: 1,
  CLICK_FILE: 2,
  CLICK_CANCEL: 3,
};

// Union: MediaStoreMetadata
mojo.internal.Union(
    mojo.internal.bindings.arc.mojom.MediaStoreMetadataSpec, 'arc.mojom.MediaStoreMetadata', {
      'arg_unknown': {
        'ordinal': 0,
        'type': mojo.internal.Uint8,
        'nullable': false,
      },
      'arg_download': {
        'ordinal': 1,
        'type': mojo.internal.bindings.arc.mojom.MediaStoreDownloadMetadataSpec.$,
        'nullable': false,
      },
    });

// Struct: Document
mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.DocumentSpec, 'arc.mojom.Document', [
      mojo.internal.StructField('arg_document_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_display_name', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_mime_type', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_size', 24, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_last_modified', 32, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_android_file_system_path', 40, 0, mojo.internal.String, null, true, 5, undefined),
      mojo.internal.StructField('arg_supports_delete', 48, 0, mojo.internal.Bool, false, false, 12, undefined),
      mojo.internal.StructField('arg_supports_rename', 48, 1, mojo.internal.Bool, false, false, 12, undefined),
      mojo.internal.StructField('arg_supports_write', 48, 2, mojo.internal.Bool, false, false, 12, undefined),
      mojo.internal.StructField('arg_dir_supports_create', 48, 3, mojo.internal.Bool, false, false, 12, undefined),
      mojo.internal.StructField('arg_supports_copy', 48, 4, mojo.internal.Bool, false, false, 12, undefined),
      mojo.internal.StructField('arg_supports_move', 48, 5, mojo.internal.Bool, false, false, 12, undefined),
      mojo.internal.StructField('arg_supports_thumbnail', 48, 6, mojo.internal.Bool, false, false, 15, undefined),
    ],
    [[0, 48], [5, 56], [12, 64], [15, 64]]);

// Struct: Root
mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.RootSpec, 'arc.mojom.Root', [
      mojo.internal.StructField('arg_authority', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_root_id', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_document_id', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_title', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_summary', 32, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_icon', 40, 0, mojo.internal.bindings.arc.mojom.ArcBitmapSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_mime_types', 48, 0, mojo.internal.Array(mojo.internal.String, false), null, true, 12, undefined),
      mojo.internal.StructField('arg_supports_create', 56, 0, mojo.internal.Bool, false, false, 12, undefined),
    ],
    [[0, 56], [12, 72]]);

// Struct: ContentUrlWithMimeType
mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.ContentUrlWithMimeTypeSpec, 'arc.mojom.ContentUrlWithMimeType', [
      mojo.internal.StructField('arg_content_url', 0, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_mime_type', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: OpenUrlsRequest
mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.OpenUrlsRequestSpec, 'arc.mojom.OpenUrlsRequest', [
      mojo.internal.StructField('arg_action_type', 0, 0, mojo.internal.bindings.arc.mojom.ActionTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_activity_name', 8, 0, mojo.internal.bindings.arc.mojom.ActivityNameSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_urls', 16, 0, mojo.internal.Array(mojo.internal.bindings.arc.mojom.ContentUrlWithMimeTypeSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_extras', 24, 0, mojo.internal.Map(mojo.internal.String, mojo.internal.String, false), null, true, 17, undefined),
    ],
    [[0, 32], [17, 40]]);

// Struct: SelectFilesRequest
mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.SelectFilesRequestSpec, 'arc.mojom.SelectFilesRequest', [
      mojo.internal.StructField('arg_action_type', 0, 0, mojo.internal.bindings.arc.mojom.SelectFilesActionTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_mime_types', 8, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_default_file_name', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_initial_content_uri', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_initial_document_path', 32, 0, mojo.internal.bindings.arc.mojom.DocumentPathSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_search_query', 40, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_task_id', 48, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_openable_only', 52, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_allow_multiple', 52, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 64]]);

// Struct: DocumentPath
mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.DocumentPathSpec, 'arc.mojom.DocumentPath', [
      mojo.internal.StructField('arg_authority', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_path', 8, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_root_id', 16, 0, mojo.internal.String, null, true, 24, undefined),
    ],
    [[0, 24], [24, 32]]);

// Struct: SelectFilesResult
mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.SelectFilesResultSpec, 'arc.mojom.SelectFilesResult', [
      mojo.internal.StructField('arg_urls', 0, 0, mojo.internal.Array(mojo.internal.bindings.url.mojom.UrlSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_picker_activity', 8, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 24]]);

// Struct: FileSelectorEvent
mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.FileSelectorEventSpec, 'arc.mojom.FileSelectorEvent', [
      mojo.internal.StructField('arg_type', 0, 0, mojo.internal.bindings.arc.mojom.FileSelectorEventTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_click_target', 8, 0, mojo.internal.bindings.arc.mojom.FileSelectorElementSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_creator_task_id', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: GetFileSelectorElementsRequest
mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.GetFileSelectorElementsRequestSpec, 'arc.mojom.GetFileSelectorElementsRequest', [
      mojo.internal.StructField('arg_creator_task_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: FileSelectorElement
mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.FileSelectorElementSpec, 'arc.mojom.FileSelectorElement', [
      mojo.internal.StructField('arg_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: FileSelectorElements
mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.FileSelectorElementsSpec, 'arc.mojom.FileSelectorElements', [
      mojo.internal.StructField('arg_directory_elements', 0, 0, mojo.internal.Array(mojo.internal.bindings.arc.mojom.FileSelectorElementSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_file_elements', 8, 0, mojo.internal.Array(mojo.internal.bindings.arc.mojom.FileSelectorElementSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_search_query', 16, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 32]]);

// Struct: RootSize
mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.RootSizeSpec, 'arc.mojom.RootSize', [
      mojo.internal.StructField('arg_available_bytes', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_capacity_bytes', 8, 0, mojo.internal.Int64, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: FileSession
mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.FileSessionSpec, 'arc.mojom.FileSession', [
      mojo.internal.StructField('arg_url_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_fd', 8, 0, mojo.internal.Handle, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: MediaStoreDownloadMetadata
mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.MediaStoreDownloadMetadataSpec, 'arc.mojom.MediaStoreDownloadMetadata', [
      mojo.internal.StructField('arg_display_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_owner_package_name', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_relative_path', 16, 0, mojo.internal.bindings.mojo_base.mojom.FilePathSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

// Interface: FileSystemHost
mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.FileSystemHost_GetFileName_ParamsSpec, 'arc.mojom.FileSystemHost_GetFileName_Params', [
      mojo.internal.StructField('arg_url', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.FileSystemHost_GetFileName_ResponseParamsSpec, 'arc.mojom.FileSystemHost_GetFileName_ResponseParams', [
      mojo.internal.StructField('arg_name', 0, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.FileSystemHost_GetFileSize_ParamsSpec, 'arc.mojom.FileSystemHost_GetFileSize_Params', [
      mojo.internal.StructField('arg_url', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.FileSystemHost_GetFileSize_ResponseParamsSpec, 'arc.mojom.FileSystemHost_GetFileSize_ResponseParams', [
      mojo.internal.StructField('arg_size', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.FileSystemHost_GetLastModified_ParamsSpec, 'arc.mojom.FileSystemHost_GetLastModified_Params', [
      mojo.internal.StructField('arg_url', 0, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.FileSystemHost_GetLastModified_ResponseParamsSpec, 'arc.mojom.FileSystemHost_GetLastModified_ResponseParams', [
      mojo.internal.StructField('arg_last_modified', 0, 0, mojo.internal.bindings.mojo_base.mojom.TimeSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.FileSystemHost_GetFileType_ParamsSpec, 'arc.mojom.FileSystemHost_GetFileType_Params', [
      mojo.internal.StructField('arg_url', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.FileSystemHost_GetFileType_ResponseParamsSpec, 'arc.mojom.FileSystemHost_GetFileType_ResponseParams', [
      mojo.internal.StructField('arg_mime_type', 0, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.FileSystemHost_OnDocumentChanged_ParamsSpec, 'arc.mojom.FileSystemHost_OnDocumentChanged_Params', [
      mojo.internal.StructField('arg_watcher_id', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_type', 8, 0, mojo.internal.bindings.arc.mojom.ChangeTypeSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.FileSystemHost_OnRootsChanged_ParamsSpec, 'arc.mojom.FileSystemHost_OnRootsChanged_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.FileSystemHost_GetVirtualFileId_ParamsSpec, 'arc.mojom.FileSystemHost_GetVirtualFileId_Params', [
      mojo.internal.StructField('arg_url', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.FileSystemHost_GetVirtualFileId_ResponseParamsSpec, 'arc.mojom.FileSystemHost_GetVirtualFileId_ResponseParams', [
      mojo.internal.StructField('arg_id', 0, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.FileSystemHost_HandleIdReleased_ParamsSpec, 'arc.mojom.FileSystemHost_HandleIdReleased_Params', [
      mojo.internal.StructField('arg_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.FileSystemHost_HandleIdReleased_ResponseParamsSpec, 'arc.mojom.FileSystemHost_HandleIdReleased_ResponseParams', [
      mojo.internal.StructField('arg_success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.FileSystemHost_OpenFileToRead_ParamsSpec, 'arc.mojom.FileSystemHost_OpenFileToRead_Params', [
      mojo.internal.StructField('arg_url', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.FileSystemHost_OpenFileToRead_ResponseParamsSpec, 'arc.mojom.FileSystemHost_OpenFileToRead_ResponseParams', [
      mojo.internal.StructField('arg_fd', 0, 0, mojo.internal.Handle, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.FileSystemHost_SelectFiles_ParamsSpec, 'arc.mojom.FileSystemHost_SelectFiles_Params', [
      mojo.internal.StructField('arg_request', 0, 0, mojo.internal.bindings.arc.mojom.SelectFilesRequestSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.FileSystemHost_SelectFiles_ResponseParamsSpec, 'arc.mojom.FileSystemHost_SelectFiles_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.arc.mojom.SelectFilesResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.FileSystemHost_OnFileSelectorEvent_ParamsSpec, 'arc.mojom.FileSystemHost_OnFileSelectorEvent_Params', [
      mojo.internal.StructField('arg_event', 0, 0, mojo.internal.bindings.arc.mojom.FileSelectorEventSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.FileSystemHost_OnFileSelectorEvent_ResponseParamsSpec, 'arc.mojom.FileSystemHost_OnFileSelectorEvent_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.FileSystemHost_GetFileSelectorElements_ParamsSpec, 'arc.mojom.FileSystemHost_GetFileSelectorElements_Params', [
      mojo.internal.StructField('arg_request', 0, 0, mojo.internal.bindings.arc.mojom.GetFileSelectorElementsRequestSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.FileSystemHost_GetFileSelectorElements_ResponseParamsSpec, 'arc.mojom.FileSystemHost_GetFileSelectorElements_ResponseParams', [
      mojo.internal.StructField('arg_elements', 0, 0, mojo.internal.bindings.arc.mojom.FileSelectorElementsSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.FileSystemHost_OnMediaStoreUriAdded_ParamsSpec, 'arc.mojom.FileSystemHost_OnMediaStoreUriAdded_Params', [
      mojo.internal.StructField('arg_uri', 0, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_metadata', 8, 0, mojo.internal.bindings.arc.mojom.MediaStoreMetadataSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.FileSystemHost_CreateMoniker_ParamsSpec, 'arc.mojom.FileSystemHost_CreateMoniker_Params', [
      mojo.internal.StructField('arg_content_uri', 0, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_read_only', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.FileSystemHost_CreateMoniker_ResponseParamsSpec, 'arc.mojom.FileSystemHost_CreateMoniker_ResponseParams', [
      mojo.internal.StructField('arg_moniker', 0, 0, mojo.internal.bindings.mojo_base.mojom.TokenSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.FileSystemHost_DestroyMoniker_ParamsSpec, 'arc.mojom.FileSystemHost_DestroyMoniker_Params', [
      mojo.internal.StructField('arg_moniker', 0, 0, mojo.internal.bindings.mojo_base.mojom.TokenSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.FileSystemHost_DestroyMoniker_ResponseParamsSpec, 'arc.mojom.FileSystemHost_DestroyMoniker_ResponseParams', [
      mojo.internal.StructField('arg_success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.arc.mojom.FileSystemHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.arc.mojom.FileSystemHostRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.FileSystemHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.arc.mojom.FileSystemHostPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.arc.mojom.FileSystemHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  getFileName(arg_url) {
    return this.$.getFileName(arg_url);
  }
  getFileSize(arg_url) {
    return this.$.getFileSize(arg_url);
  }
  getLastModified(arg_url) {
    return this.$.getLastModified(arg_url);
  }
  getFileType(arg_url) {
    return this.$.getFileType(arg_url);
  }
  onDocumentChanged(arg_watcher_id, arg_type) {
    return this.$.onDocumentChanged(arg_watcher_id, arg_type);
  }
  onRootsChanged() {
    return this.$.onRootsChanged();
  }
  getVirtualFileId(arg_url) {
    return this.$.getVirtualFileId(arg_url);
  }
  handleIdReleased(arg_id) {
    return this.$.handleIdReleased(arg_id);
  }
  openFileToRead(arg_url) {
    return this.$.openFileToRead(arg_url);
  }
  selectFiles(arg_request) {
    return this.$.selectFiles(arg_request);
  }
  onFileSelectorEvent(arg_event) {
    return this.$.onFileSelectorEvent(arg_event);
  }
  getFileSelectorElements(arg_request) {
    return this.$.getFileSelectorElements(arg_request);
  }
  onMediaStoreUriAdded(arg_uri, arg_metadata) {
    return this.$.onMediaStoreUriAdded(arg_uri, arg_metadata);
  }
  createMoniker(arg_content_uri, arg_read_only) {
    return this.$.createMoniker(arg_content_uri, arg_read_only);
  }
  destroyMoniker(arg_moniker) {
    return this.$.destroyMoniker(arg_moniker);
  }
};

mojo.internal.bindings.arc.mojom.FileSystemHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('FileSystemHost', [
      { explicit: 1 },
      { explicit: 2 },
      { explicit: 11 },
      { explicit: 3 },
      { explicit: 0 },
      { explicit: 6 },
      { explicit: 9 },
      { explicit: 10 },
      { explicit: 4 },
      { explicit: 5 },
      { explicit: 7 },
      { explicit: 8 },
      { explicit: 12 },
      { explicit: 13 },
      { explicit: 14 },
    ]);
  }

  getFileName(arg_url) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.arc.mojom.FileSystemHost_GetFileName_ParamsSpec,
      mojo.internal.bindings.arc.mojom.FileSystemHost_GetFileName_ResponseParamsSpec,
      [arg_url],
      false);
  }

  getFileSize(arg_url) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.arc.mojom.FileSystemHost_GetFileSize_ParamsSpec,
      mojo.internal.bindings.arc.mojom.FileSystemHost_GetFileSize_ResponseParamsSpec,
      [arg_url],
      false);
  }

  getLastModified(arg_url) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.arc.mojom.FileSystemHost_GetLastModified_ParamsSpec,
      mojo.internal.bindings.arc.mojom.FileSystemHost_GetLastModified_ResponseParamsSpec,
      [arg_url],
      false);
  }

  getFileType(arg_url) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.arc.mojom.FileSystemHost_GetFileType_ParamsSpec,
      mojo.internal.bindings.arc.mojom.FileSystemHost_GetFileType_ResponseParamsSpec,
      [arg_url],
      false);
  }

  onDocumentChanged(arg_watcher_id, arg_type) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.arc.mojom.FileSystemHost_OnDocumentChanged_ParamsSpec,
      null,
      [arg_watcher_id, arg_type],
      false);
  }

  onRootsChanged() {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojo.internal.bindings.arc.mojom.FileSystemHost_OnRootsChanged_ParamsSpec,
      null,
      [],
      false);
  }

  getVirtualFileId(arg_url) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      mojo.internal.bindings.arc.mojom.FileSystemHost_GetVirtualFileId_ParamsSpec,
      mojo.internal.bindings.arc.mojom.FileSystemHost_GetVirtualFileId_ResponseParamsSpec,
      [arg_url],
      false);
  }

  handleIdReleased(arg_id) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      mojo.internal.bindings.arc.mojom.FileSystemHost_HandleIdReleased_ParamsSpec,
      mojo.internal.bindings.arc.mojom.FileSystemHost_HandleIdReleased_ResponseParamsSpec,
      [arg_id],
      false);
  }

  openFileToRead(arg_url) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      mojo.internal.bindings.arc.mojom.FileSystemHost_OpenFileToRead_ParamsSpec,
      mojo.internal.bindings.arc.mojom.FileSystemHost_OpenFileToRead_ResponseParamsSpec,
      [arg_url],
      false);
  }

  selectFiles(arg_request) {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      mojo.internal.bindings.arc.mojom.FileSystemHost_SelectFiles_ParamsSpec,
      mojo.internal.bindings.arc.mojom.FileSystemHost_SelectFiles_ResponseParamsSpec,
      [arg_request],
      false);
  }

  onFileSelectorEvent(arg_event) {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      mojo.internal.bindings.arc.mojom.FileSystemHost_OnFileSelectorEvent_ParamsSpec,
      mojo.internal.bindings.arc.mojom.FileSystemHost_OnFileSelectorEvent_ResponseParamsSpec,
      [arg_event],
      false);
  }

  getFileSelectorElements(arg_request) {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      mojo.internal.bindings.arc.mojom.FileSystemHost_GetFileSelectorElements_ParamsSpec,
      mojo.internal.bindings.arc.mojom.FileSystemHost_GetFileSelectorElements_ResponseParamsSpec,
      [arg_request],
      false);
  }

  onMediaStoreUriAdded(arg_uri, arg_metadata) {
    return this.proxy.sendMessage(
      this.ordinals[12],  // ordinal
      mojo.internal.bindings.arc.mojom.FileSystemHost_OnMediaStoreUriAdded_ParamsSpec,
      null,
      [arg_uri, arg_metadata],
      false);
  }

  createMoniker(arg_content_uri, arg_read_only) {
    return this.proxy.sendMessage(
      this.ordinals[13],  // ordinal
      mojo.internal.bindings.arc.mojom.FileSystemHost_CreateMoniker_ParamsSpec,
      mojo.internal.bindings.arc.mojom.FileSystemHost_CreateMoniker_ResponseParamsSpec,
      [arg_content_uri, arg_read_only],
      false);
  }

  destroyMoniker(arg_moniker) {
    return this.proxy.sendMessage(
      this.ordinals[14],  // ordinal
      mojo.internal.bindings.arc.mojom.FileSystemHost_DestroyMoniker_ParamsSpec,
      mojo.internal.bindings.arc.mojom.FileSystemHost_DestroyMoniker_ResponseParamsSpec,
      [arg_moniker],
      false);
  }

};

mojo.internal.bindings.arc.mojom.FileSystemHost.getRemote = function() {
  let remote = new mojo.internal.bindings.arc.mojom.FileSystemHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.FileSystemHost',
    'context');
  return remote.$;
};

mojo.internal.bindings.arc.mojom.FileSystemHostReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('FileSystemHost', [
      { explicit: 1 },
      { explicit: 2 },
      { explicit: 11 },
      { explicit: 3 },
      { explicit: 0 },
      { explicit: 6 },
      { explicit: 9 },
      { explicit: 10 },
      { explicit: 4 },
      { explicit: 5 },
      { explicit: 7 },
      { explicit: 8 },
      { explicit: 12 },
      { explicit: 13 },
      { explicit: 14 },
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
        
        // Try Method 0: GetFileName
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.FileSystemHost_GetFileName_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetFileName (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: GetFileSize
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.FileSystemHost_GetFileSize_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetFileSize (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: GetLastModified
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.FileSystemHost_GetLastModified_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetLastModified (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: GetFileType
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.FileSystemHost_GetFileType_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetFileType (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: OnDocumentChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.FileSystemHost_OnDocumentChanged_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnDocumentChanged (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: OnRootsChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.FileSystemHost_OnRootsChanged_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnRootsChanged (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: GetVirtualFileId
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.FileSystemHost_GetVirtualFileId_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetVirtualFileId (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: HandleIdReleased
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.FileSystemHost_HandleIdReleased_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> HandleIdReleased (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: OpenFileToRead
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.FileSystemHost_OpenFileToRead_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OpenFileToRead (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
           }
        }
        // Try Method 9: SelectFiles
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.FileSystemHost_SelectFiles_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SelectFiles (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 9 failed:', e);
           }
        }
        // Try Method 10: OnFileSelectorEvent
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.FileSystemHost_OnFileSelectorEvent_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnFileSelectorEvent (10)');
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 10 failed:', e);
           }
        }
        // Try Method 11: GetFileSelectorElements
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.FileSystemHost_GetFileSelectorElements_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetFileSelectorElements (11)');
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 11 failed:', e);
           }
        }
        // Try Method 12: OnMediaStoreUriAdded
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.FileSystemHost_OnMediaStoreUriAdded_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnMediaStoreUriAdded (12)');
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 12 failed:', e);
           }
        }
        // Try Method 13: CreateMoniker
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.FileSystemHost_CreateMoniker_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreateMoniker (13)');
             this.mapOrdinal(header.ordinal, 13);
             dispatchId = 13;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 13 failed:', e);
           }
        }
        // Try Method 14: DestroyMoniker
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.FileSystemHost_DestroyMoniker_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DestroyMoniker (14)');
             this.mapOrdinal(header.ordinal, 14);
             dispatchId = 14;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 14 failed:', e);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.FileSystemHost_GetFileName_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getFileName');
          const result = this.impl.getFileName(params.arg_url);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.arc.mojom.FileSystemHost_GetFileName_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetFileName FAILED:', e));
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.FileSystemHost_GetFileSize_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getFileSize');
          const result = this.impl.getFileSize(params.arg_url);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.arc.mojom.FileSystemHost_GetFileSize_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetFileSize FAILED:', e));
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.FileSystemHost_GetLastModified_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getLastModified');
          const result = this.impl.getLastModified(params.arg_url);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.arc.mojom.FileSystemHost_GetLastModified_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetLastModified FAILED:', e));
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.FileSystemHost_GetFileType_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getFileType');
          const result = this.impl.getFileType(params.arg_url);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.arc.mojom.FileSystemHost_GetFileType_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetFileType FAILED:', e));
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.FileSystemHost_OnDocumentChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onDocumentChanged');
          const result = this.impl.onDocumentChanged(params.arg_watcher_id, params.arg_type);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.FileSystemHost_OnRootsChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onRootsChanged');
          const result = this.impl.onRootsChanged();
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.FileSystemHost_GetVirtualFileId_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getVirtualFileId');
          const result = this.impl.getVirtualFileId(params.arg_url);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.arc.mojom.FileSystemHost_GetVirtualFileId_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetVirtualFileId FAILED:', e));
          }
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.FileSystemHost_HandleIdReleased_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.handleIdReleased');
          const result = this.impl.handleIdReleased(params.arg_id);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.arc.mojom.FileSystemHost_HandleIdReleased_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] HandleIdReleased FAILED:', e));
          }
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.FileSystemHost_OpenFileToRead_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.openFileToRead');
          const result = this.impl.openFileToRead(params.arg_url);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.arc.mojom.FileSystemHost_OpenFileToRead_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] OpenFileToRead FAILED:', e));
          }
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.FileSystemHost_SelectFiles_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.selectFiles');
          const result = this.impl.selectFiles(params.arg_request);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.arc.mojom.FileSystemHost_SelectFiles_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] SelectFiles FAILED:', e));
          }
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.FileSystemHost_OnFileSelectorEvent_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onFileSelectorEvent');
          const result = this.impl.onFileSelectorEvent(params.arg_event);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.arc.mojom.FileSystemHost_OnFileSelectorEvent_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] OnFileSelectorEvent FAILED:', e));
          }
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.FileSystemHost_GetFileSelectorElements_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getFileSelectorElements');
          const result = this.impl.getFileSelectorElements(params.arg_request);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.arc.mojom.FileSystemHost_GetFileSelectorElements_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetFileSelectorElements FAILED:', e));
          }
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.FileSystemHost_OnMediaStoreUriAdded_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onMediaStoreUriAdded');
          const result = this.impl.onMediaStoreUriAdded(params.arg_uri, params.arg_metadata);
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.FileSystemHost_CreateMoniker_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.createMoniker');
          const result = this.impl.createMoniker(params.arg_content_uri, params.arg_read_only);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.arc.mojom.FileSystemHost_CreateMoniker_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] CreateMoniker FAILED:', e));
          }
          break;
        }
        case 14: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.FileSystemHost_DestroyMoniker_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.destroyMoniker');
          const result = this.impl.destroyMoniker(params.arg_moniker);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.arc.mojom.FileSystemHost_DestroyMoniker_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] DestroyMoniker FAILED:', e));
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

mojo.internal.bindings.arc.mojom.FileSystemHostReceiver = mojo.internal.bindings.arc.mojom.FileSystemHostReceiver;

mojo.internal.bindings.arc.mojom.FileSystemHostPtr = mojo.internal.bindings.arc.mojom.FileSystemHostRemote;
mojo.internal.bindings.arc.mojom.FileSystemHostRequest = mojo.internal.bindings.arc.mojom.FileSystemHostPendingReceiver;


// Interface: FileSystemInstance
mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.FileSystemInstance_AddWatcher_ParamsSpec, 'arc.mojom.FileSystemInstance_AddWatcher_Params', [
      mojo.internal.StructField('arg_authority', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_document_id', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.FileSystemInstance_AddWatcher_ResponseParamsSpec, 'arc.mojom.FileSystemInstance_AddWatcher_ResponseParams', [
      mojo.internal.StructField('arg_watcher_id', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.FileSystemInstance_GetChildDocuments_ParamsSpec, 'arc.mojom.FileSystemInstance_GetChildDocuments_Params', [
      mojo.internal.StructField('arg_authority', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_parent_document_id', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.FileSystemInstance_GetChildDocuments_ResponseParamsSpec, 'arc.mojom.FileSystemInstance_GetChildDocuments_ResponseParams', [
      mojo.internal.StructField('arg_documents', 0, 0, mojo.internal.Array(mojo.internal.bindings.arc.mojom.DocumentSpec.$, false), null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.FileSystemInstance_GetDocument_ParamsSpec, 'arc.mojom.FileSystemInstance_GetDocument_Params', [
      mojo.internal.StructField('arg_authority', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_document_id', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.FileSystemInstance_GetDocument_ResponseParamsSpec, 'arc.mojom.FileSystemInstance_GetDocument_ResponseParams', [
      mojo.internal.StructField('arg_document', 0, 0, mojo.internal.bindings.arc.mojom.DocumentSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.FileSystemInstance_GetFileSize_ParamsSpec, 'arc.mojom.FileSystemInstance_GetFileSize_Params', [
      mojo.internal.StructField('arg_url', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.FileSystemInstance_GetFileSize_ResponseParamsSpec, 'arc.mojom.FileSystemInstance_GetFileSize_ResponseParams', [
      mojo.internal.StructField('arg_size', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.FileSystemInstance_GetMimeType_ParamsSpec, 'arc.mojom.FileSystemInstance_GetMimeType_Params', [
      mojo.internal.StructField('arg_url', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.FileSystemInstance_GetMimeType_ResponseParamsSpec, 'arc.mojom.FileSystemInstance_GetMimeType_ResponseParams', [
      mojo.internal.StructField('arg_mime_type', 0, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.FileSystemInstance_GetRecentDocuments_ParamsSpec, 'arc.mojom.FileSystemInstance_GetRecentDocuments_Params', [
      mojo.internal.StructField('arg_authority', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_root_id', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.FileSystemInstance_GetRecentDocuments_ResponseParamsSpec, 'arc.mojom.FileSystemInstance_GetRecentDocuments_ResponseParams', [
      mojo.internal.StructField('arg_documents', 0, 0, mojo.internal.Array(mojo.internal.bindings.arc.mojom.DocumentSpec.$, false), null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.FileSystemInstance_GetRoots_ParamsSpec, 'arc.mojom.FileSystemInstance_GetRoots_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.FileSystemInstance_GetRoots_ResponseParamsSpec, 'arc.mojom.FileSystemInstance_GetRoots_ResponseParams', [
      mojo.internal.StructField('arg_roots', 0, 0, mojo.internal.Array(mojo.internal.bindings.arc.mojom.RootSpec.$, false), null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.FileSystemInstance_GetRootSize_ParamsSpec, 'arc.mojom.FileSystemInstance_GetRootSize_Params', [
      mojo.internal.StructField('arg_authority', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_root_id', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.FileSystemInstance_GetRootSize_ResponseParamsSpec, 'arc.mojom.FileSystemInstance_GetRootSize_ResponseParams', [
      mojo.internal.StructField('arg_root_size', 0, 0, mojo.internal.bindings.arc.mojom.RootSizeSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.FileSystemInstance_DeleteDocument_ParamsSpec, 'arc.mojom.FileSystemInstance_DeleteDocument_Params', [
      mojo.internal.StructField('arg_authority', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_document_id', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.FileSystemInstance_DeleteDocument_ResponseParamsSpec, 'arc.mojom.FileSystemInstance_DeleteDocument_ResponseParams', [
      mojo.internal.StructField('arg_success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.FileSystemInstance_RenameDocument_ParamsSpec, 'arc.mojom.FileSystemInstance_RenameDocument_Params', [
      mojo.internal.StructField('arg_authority', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_document_id', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_display_name', 16, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.FileSystemInstance_RenameDocument_ResponseParamsSpec, 'arc.mojom.FileSystemInstance_RenameDocument_ResponseParams', [
      mojo.internal.StructField('arg_document', 0, 0, mojo.internal.bindings.arc.mojom.DocumentSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.FileSystemInstance_CreateDocument_ParamsSpec, 'arc.mojom.FileSystemInstance_CreateDocument_Params', [
      mojo.internal.StructField('arg_authority', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_parent_document_id', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_mime_type', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_display_name', 24, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.FileSystemInstance_CreateDocument_ResponseParamsSpec, 'arc.mojom.FileSystemInstance_CreateDocument_ResponseParams', [
      mojo.internal.StructField('arg_document', 0, 0, mojo.internal.bindings.arc.mojom.DocumentSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.FileSystemInstance_CopyDocument_ParamsSpec, 'arc.mojom.FileSystemInstance_CopyDocument_Params', [
      mojo.internal.StructField('arg_authority', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_source_document_id', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_target_parent_document_id', 16, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.FileSystemInstance_CopyDocument_ResponseParamsSpec, 'arc.mojom.FileSystemInstance_CopyDocument_ResponseParams', [
      mojo.internal.StructField('arg_document', 0, 0, mojo.internal.bindings.arc.mojom.DocumentSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.FileSystemInstance_MoveDocument_ParamsSpec, 'arc.mojom.FileSystemInstance_MoveDocument_Params', [
      mojo.internal.StructField('arg_authority', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_source_document_id', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_source_parent_document_id', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_target_parent_document_id', 24, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.FileSystemInstance_MoveDocument_ResponseParamsSpec, 'arc.mojom.FileSystemInstance_MoveDocument_ResponseParams', [
      mojo.internal.StructField('arg_document', 0, 0, mojo.internal.bindings.arc.mojom.DocumentSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.FileSystemInstance_Init_ParamsSpec, 'arc.mojom.FileSystemInstance_Init_Params', [
      mojo.internal.StructField('arg_host_remote', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.arc.mojom.FileSystemHostSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.FileSystemInstance_Init_ResponseParamsSpec, 'arc.mojom.FileSystemInstance_Init_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.FileSystemInstance_OpenThumbnail_ParamsSpec, 'arc.mojom.FileSystemInstance_OpenThumbnail_Params', [
      mojo.internal.StructField('arg_url', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_size_hint', 8, 0, mojo.internal.bindings.arc.mojom.SizeSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.FileSystemInstance_OpenThumbnail_ResponseParamsSpec, 'arc.mojom.FileSystemInstance_OpenThumbnail_ResponseParams', [
      mojo.internal.StructField('arg_fd', 0, 0, mojo.internal.Handle, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.FileSystemInstance_CloseFileSession_ParamsSpec, 'arc.mojom.FileSystemInstance_CloseFileSession_Params', [
      mojo.internal.StructField('arg_url_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_error_message', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.FileSystemInstance_OpenFileSessionToWrite_ParamsSpec, 'arc.mojom.FileSystemInstance_OpenFileSessionToWrite_Params', [
      mojo.internal.StructField('arg_url', 0, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.FileSystemInstance_OpenFileSessionToWrite_ResponseParamsSpec, 'arc.mojom.FileSystemInstance_OpenFileSessionToWrite_ResponseParams', [
      mojo.internal.StructField('arg_file_session', 0, 0, mojo.internal.bindings.arc.mojom.FileSessionSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.FileSystemInstance_OpenFileSessionToRead_ParamsSpec, 'arc.mojom.FileSystemInstance_OpenFileSessionToRead_Params', [
      mojo.internal.StructField('arg_url', 0, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.FileSystemInstance_OpenFileSessionToRead_ResponseParamsSpec, 'arc.mojom.FileSystemInstance_OpenFileSessionToRead_ResponseParams', [
      mojo.internal.StructField('arg_file_session', 0, 0, mojo.internal.bindings.arc.mojom.FileSessionSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.FileSystemInstance_RemoveWatcher_ParamsSpec, 'arc.mojom.FileSystemInstance_RemoveWatcher_Params', [
      mojo.internal.StructField('arg_watcher_id', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.FileSystemInstance_RemoveWatcher_ResponseParamsSpec, 'arc.mojom.FileSystemInstance_RemoveWatcher_ResponseParams', [
      mojo.internal.StructField('arg_success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.FileSystemInstance_RequestMediaScan_ParamsSpec, 'arc.mojom.FileSystemInstance_RequestMediaScan_Params', [
      mojo.internal.StructField('arg_paths', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.FileSystemInstance_ReindexDirectory_ParamsSpec, 'arc.mojom.FileSystemInstance_ReindexDirectory_Params', [
      mojo.internal.StructField('arg_directory_path', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.FileSystemInstance_RequestFileRemovalScan_ParamsSpec, 'arc.mojom.FileSystemInstance_RequestFileRemovalScan_Params', [
      mojo.internal.StructField('arg_directory_paths', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.FileSystemInstance_OpenUrlsWithPermissionAndWindowInfo_ParamsSpec, 'arc.mojom.FileSystemInstance_OpenUrlsWithPermissionAndWindowInfo_Params', [
      mojo.internal.StructField('arg_request', 0, 0, mojo.internal.bindings.arc.mojom.OpenUrlsRequestSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_window_info', 8, 0, mojo.internal.bindings.arc.mojom.WindowInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.FileSystemInstance_OpenUrlsWithPermissionAndWindowInfo_ResponseParamsSpec, 'arc.mojom.FileSystemInstance_OpenUrlsWithPermissionAndWindowInfo_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.bindings.arc.mojom.FileSystemInstancePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.arc.mojom.FileSystemInstanceRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.FileSystemInstance';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.arc.mojom.FileSystemInstancePendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.arc.mojom.FileSystemInstanceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  addWatcher(arg_authority, arg_document_id) {
    return this.$.addWatcher(arg_authority, arg_document_id);
  }
  getChildDocuments(arg_authority, arg_parent_document_id) {
    return this.$.getChildDocuments(arg_authority, arg_parent_document_id);
  }
  getDocument(arg_authority, arg_document_id) {
    return this.$.getDocument(arg_authority, arg_document_id);
  }
  getFileSize(arg_url) {
    return this.$.getFileSize(arg_url);
  }
  getMimeType(arg_url) {
    return this.$.getMimeType(arg_url);
  }
  getRecentDocuments(arg_authority, arg_root_id) {
    return this.$.getRecentDocuments(arg_authority, arg_root_id);
  }
  getRoots() {
    return this.$.getRoots();
  }
  getRootSize(arg_authority, arg_root_id) {
    return this.$.getRootSize(arg_authority, arg_root_id);
  }
  deleteDocument(arg_authority, arg_document_id) {
    return this.$.deleteDocument(arg_authority, arg_document_id);
  }
  renameDocument(arg_authority, arg_document_id, arg_display_name) {
    return this.$.renameDocument(arg_authority, arg_document_id, arg_display_name);
  }
  createDocument(arg_authority, arg_parent_document_id, arg_mime_type, arg_display_name) {
    return this.$.createDocument(arg_authority, arg_parent_document_id, arg_mime_type, arg_display_name);
  }
  copyDocument(arg_authority, arg_source_document_id, arg_target_parent_document_id) {
    return this.$.copyDocument(arg_authority, arg_source_document_id, arg_target_parent_document_id);
  }
  moveDocument(arg_authority, arg_source_document_id, arg_source_parent_document_id, arg_target_parent_document_id) {
    return this.$.moveDocument(arg_authority, arg_source_document_id, arg_source_parent_document_id, arg_target_parent_document_id);
  }
  init(arg_host_remote) {
    return this.$.init(arg_host_remote);
  }
  openThumbnail(arg_url, arg_size_hint) {
    return this.$.openThumbnail(arg_url, arg_size_hint);
  }
  closeFileSession(arg_url_id, arg_error_message) {
    return this.$.closeFileSession(arg_url_id, arg_error_message);
  }
  openFileSessionToWrite(arg_url) {
    return this.$.openFileSessionToWrite(arg_url);
  }
  openFileSessionToRead(arg_url) {
    return this.$.openFileSessionToRead(arg_url);
  }
  removeWatcher(arg_watcher_id) {
    return this.$.removeWatcher(arg_watcher_id);
  }
  requestMediaScan(arg_paths) {
    return this.$.requestMediaScan(arg_paths);
  }
  reindexDirectory(arg_directory_path) {
    return this.$.reindexDirectory(arg_directory_path);
  }
  requestFileRemovalScan(arg_directory_paths) {
    return this.$.requestFileRemovalScan(arg_directory_paths);
  }
  openUrlsWithPermissionAndWindowInfo(arg_request, arg_window_info) {
    return this.$.openUrlsWithPermissionAndWindowInfo(arg_request, arg_window_info);
  }
};

mojo.internal.bindings.arc.mojom.FileSystemInstanceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('FileSystemInstance', [
      { explicit: 6 },
      { explicit: 4 },
      { explicit: 3 },
      { explicit: 1 },
      { explicit: 8 },
      { explicit: 9 },
      { explicit: 12 },
      { explicit: 22 },
      { explicit: 13 },
      { explicit: 14 },
      { explicit: 15 },
      { explicit: 16 },
      { explicit: 17 },
      { explicit: 10 },
      { explicit: 21 },
      { explicit: 24 },
      { explicit: 25 },
      { explicit: 26 },
      { explicit: 7 },
      { explicit: 0 },
      { explicit: 19 },
      { explicit: 20 },
      { explicit: 23 },
    ]);
  }

  addWatcher(arg_authority, arg_document_id) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.arc.mojom.FileSystemInstance_AddWatcher_ParamsSpec,
      mojo.internal.bindings.arc.mojom.FileSystemInstance_AddWatcher_ResponseParamsSpec,
      [arg_authority, arg_document_id],
      false);
  }

  getChildDocuments(arg_authority, arg_parent_document_id) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.arc.mojom.FileSystemInstance_GetChildDocuments_ParamsSpec,
      mojo.internal.bindings.arc.mojom.FileSystemInstance_GetChildDocuments_ResponseParamsSpec,
      [arg_authority, arg_parent_document_id],
      false);
  }

  getDocument(arg_authority, arg_document_id) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.arc.mojom.FileSystemInstance_GetDocument_ParamsSpec,
      mojo.internal.bindings.arc.mojom.FileSystemInstance_GetDocument_ResponseParamsSpec,
      [arg_authority, arg_document_id],
      false);
  }

  getFileSize(arg_url) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.arc.mojom.FileSystemInstance_GetFileSize_ParamsSpec,
      mojo.internal.bindings.arc.mojom.FileSystemInstance_GetFileSize_ResponseParamsSpec,
      [arg_url],
      false);
  }

  getMimeType(arg_url) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.arc.mojom.FileSystemInstance_GetMimeType_ParamsSpec,
      mojo.internal.bindings.arc.mojom.FileSystemInstance_GetMimeType_ResponseParamsSpec,
      [arg_url],
      false);
  }

  getRecentDocuments(arg_authority, arg_root_id) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojo.internal.bindings.arc.mojom.FileSystemInstance_GetRecentDocuments_ParamsSpec,
      mojo.internal.bindings.arc.mojom.FileSystemInstance_GetRecentDocuments_ResponseParamsSpec,
      [arg_authority, arg_root_id],
      false);
  }

  getRoots() {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      mojo.internal.bindings.arc.mojom.FileSystemInstance_GetRoots_ParamsSpec,
      mojo.internal.bindings.arc.mojom.FileSystemInstance_GetRoots_ResponseParamsSpec,
      [],
      false);
  }

  getRootSize(arg_authority, arg_root_id) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      mojo.internal.bindings.arc.mojom.FileSystemInstance_GetRootSize_ParamsSpec,
      mojo.internal.bindings.arc.mojom.FileSystemInstance_GetRootSize_ResponseParamsSpec,
      [arg_authority, arg_root_id],
      false);
  }

  deleteDocument(arg_authority, arg_document_id) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      mojo.internal.bindings.arc.mojom.FileSystemInstance_DeleteDocument_ParamsSpec,
      mojo.internal.bindings.arc.mojom.FileSystemInstance_DeleteDocument_ResponseParamsSpec,
      [arg_authority, arg_document_id],
      false);
  }

  renameDocument(arg_authority, arg_document_id, arg_display_name) {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      mojo.internal.bindings.arc.mojom.FileSystemInstance_RenameDocument_ParamsSpec,
      mojo.internal.bindings.arc.mojom.FileSystemInstance_RenameDocument_ResponseParamsSpec,
      [arg_authority, arg_document_id, arg_display_name],
      false);
  }

  createDocument(arg_authority, arg_parent_document_id, arg_mime_type, arg_display_name) {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      mojo.internal.bindings.arc.mojom.FileSystemInstance_CreateDocument_ParamsSpec,
      mojo.internal.bindings.arc.mojom.FileSystemInstance_CreateDocument_ResponseParamsSpec,
      [arg_authority, arg_parent_document_id, arg_mime_type, arg_display_name],
      false);
  }

  copyDocument(arg_authority, arg_source_document_id, arg_target_parent_document_id) {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      mojo.internal.bindings.arc.mojom.FileSystemInstance_CopyDocument_ParamsSpec,
      mojo.internal.bindings.arc.mojom.FileSystemInstance_CopyDocument_ResponseParamsSpec,
      [arg_authority, arg_source_document_id, arg_target_parent_document_id],
      false);
  }

  moveDocument(arg_authority, arg_source_document_id, arg_source_parent_document_id, arg_target_parent_document_id) {
    return this.proxy.sendMessage(
      this.ordinals[12],  // ordinal
      mojo.internal.bindings.arc.mojom.FileSystemInstance_MoveDocument_ParamsSpec,
      mojo.internal.bindings.arc.mojom.FileSystemInstance_MoveDocument_ResponseParamsSpec,
      [arg_authority, arg_source_document_id, arg_source_parent_document_id, arg_target_parent_document_id],
      false);
  }

  init(arg_host_remote) {
    return this.proxy.sendMessage(
      this.ordinals[13],  // ordinal
      mojo.internal.bindings.arc.mojom.FileSystemInstance_Init_ParamsSpec,
      mojo.internal.bindings.arc.mojom.FileSystemInstance_Init_ResponseParamsSpec,
      [arg_host_remote],
      false);
  }

  openThumbnail(arg_url, arg_size_hint) {
    return this.proxy.sendMessage(
      this.ordinals[14],  // ordinal
      mojo.internal.bindings.arc.mojom.FileSystemInstance_OpenThumbnail_ParamsSpec,
      mojo.internal.bindings.arc.mojom.FileSystemInstance_OpenThumbnail_ResponseParamsSpec,
      [arg_url, arg_size_hint],
      false);
  }

  closeFileSession(arg_url_id, arg_error_message) {
    return this.proxy.sendMessage(
      this.ordinals[15],  // ordinal
      mojo.internal.bindings.arc.mojom.FileSystemInstance_CloseFileSession_ParamsSpec,
      null,
      [arg_url_id, arg_error_message],
      false);
  }

  openFileSessionToWrite(arg_url) {
    return this.proxy.sendMessage(
      this.ordinals[16],  // ordinal
      mojo.internal.bindings.arc.mojom.FileSystemInstance_OpenFileSessionToWrite_ParamsSpec,
      mojo.internal.bindings.arc.mojom.FileSystemInstance_OpenFileSessionToWrite_ResponseParamsSpec,
      [arg_url],
      false);
  }

  openFileSessionToRead(arg_url) {
    return this.proxy.sendMessage(
      this.ordinals[17],  // ordinal
      mojo.internal.bindings.arc.mojom.FileSystemInstance_OpenFileSessionToRead_ParamsSpec,
      mojo.internal.bindings.arc.mojom.FileSystemInstance_OpenFileSessionToRead_ResponseParamsSpec,
      [arg_url],
      false);
  }

  removeWatcher(arg_watcher_id) {
    return this.proxy.sendMessage(
      this.ordinals[18],  // ordinal
      mojo.internal.bindings.arc.mojom.FileSystemInstance_RemoveWatcher_ParamsSpec,
      mojo.internal.bindings.arc.mojom.FileSystemInstance_RemoveWatcher_ResponseParamsSpec,
      [arg_watcher_id],
      false);
  }

  requestMediaScan(arg_paths) {
    return this.proxy.sendMessage(
      this.ordinals[19],  // ordinal
      mojo.internal.bindings.arc.mojom.FileSystemInstance_RequestMediaScan_ParamsSpec,
      null,
      [arg_paths],
      false);
  }

  reindexDirectory(arg_directory_path) {
    return this.proxy.sendMessage(
      this.ordinals[20],  // ordinal
      mojo.internal.bindings.arc.mojom.FileSystemInstance_ReindexDirectory_ParamsSpec,
      null,
      [arg_directory_path],
      false);
  }

  requestFileRemovalScan(arg_directory_paths) {
    return this.proxy.sendMessage(
      this.ordinals[21],  // ordinal
      mojo.internal.bindings.arc.mojom.FileSystemInstance_RequestFileRemovalScan_ParamsSpec,
      null,
      [arg_directory_paths],
      false);
  }

  openUrlsWithPermissionAndWindowInfo(arg_request, arg_window_info) {
    return this.proxy.sendMessage(
      this.ordinals[22],  // ordinal
      mojo.internal.bindings.arc.mojom.FileSystemInstance_OpenUrlsWithPermissionAndWindowInfo_ParamsSpec,
      mojo.internal.bindings.arc.mojom.FileSystemInstance_OpenUrlsWithPermissionAndWindowInfo_ResponseParamsSpec,
      [arg_request, arg_window_info],
      false);
  }

};

mojo.internal.bindings.arc.mojom.FileSystemInstance.getRemote = function() {
  let remote = new mojo.internal.bindings.arc.mojom.FileSystemInstanceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.FileSystemInstance',
    'context');
  return remote.$;
};

mojo.internal.bindings.arc.mojom.FileSystemInstanceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('FileSystemInstance', [
      { explicit: 6 },
      { explicit: 4 },
      { explicit: 3 },
      { explicit: 1 },
      { explicit: 8 },
      { explicit: 9 },
      { explicit: 12 },
      { explicit: 22 },
      { explicit: 13 },
      { explicit: 14 },
      { explicit: 15 },
      { explicit: 16 },
      { explicit: 17 },
      { explicit: 10 },
      { explicit: 21 },
      { explicit: 24 },
      { explicit: 25 },
      { explicit: 26 },
      { explicit: 7 },
      { explicit: 0 },
      { explicit: 19 },
      { explicit: 20 },
      { explicit: 23 },
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
        
        // Try Method 0: AddWatcher
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.FileSystemInstance_AddWatcher_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AddWatcher (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: GetChildDocuments
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.FileSystemInstance_GetChildDocuments_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetChildDocuments (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: GetDocument
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.FileSystemInstance_GetDocument_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetDocument (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: GetFileSize
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.FileSystemInstance_GetFileSize_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetFileSize (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: GetMimeType
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.FileSystemInstance_GetMimeType_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetMimeType (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: GetRecentDocuments
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.FileSystemInstance_GetRecentDocuments_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetRecentDocuments (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: GetRoots
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.FileSystemInstance_GetRoots_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetRoots (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: GetRootSize
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.FileSystemInstance_GetRootSize_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetRootSize (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: DeleteDocument
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.FileSystemInstance_DeleteDocument_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DeleteDocument (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
           }
        }
        // Try Method 9: RenameDocument
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.FileSystemInstance_RenameDocument_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RenameDocument (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 9 failed:', e);
           }
        }
        // Try Method 10: CreateDocument
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.FileSystemInstance_CreateDocument_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreateDocument (10)');
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 10 failed:', e);
           }
        }
        // Try Method 11: CopyDocument
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.FileSystemInstance_CopyDocument_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CopyDocument (11)');
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 11 failed:', e);
           }
        }
        // Try Method 12: MoveDocument
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.FileSystemInstance_MoveDocument_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> MoveDocument (12)');
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 12 failed:', e);
           }
        }
        // Try Method 13: Init
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.FileSystemInstance_Init_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Init (13)');
             this.mapOrdinal(header.ordinal, 13);
             dispatchId = 13;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 13 failed:', e);
           }
        }
        // Try Method 14: OpenThumbnail
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.FileSystemInstance_OpenThumbnail_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OpenThumbnail (14)');
             this.mapOrdinal(header.ordinal, 14);
             dispatchId = 14;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 14 failed:', e);
           }
        }
        // Try Method 15: CloseFileSession
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.FileSystemInstance_CloseFileSession_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CloseFileSession (15)');
             this.mapOrdinal(header.ordinal, 15);
             dispatchId = 15;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 15 failed:', e);
           }
        }
        // Try Method 16: OpenFileSessionToWrite
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.FileSystemInstance_OpenFileSessionToWrite_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OpenFileSessionToWrite (16)');
             this.mapOrdinal(header.ordinal, 16);
             dispatchId = 16;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 16 failed:', e);
           }
        }
        // Try Method 17: OpenFileSessionToRead
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.FileSystemInstance_OpenFileSessionToRead_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OpenFileSessionToRead (17)');
             this.mapOrdinal(header.ordinal, 17);
             dispatchId = 17;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 17 failed:', e);
           }
        }
        // Try Method 18: RemoveWatcher
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.FileSystemInstance_RemoveWatcher_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RemoveWatcher (18)');
             this.mapOrdinal(header.ordinal, 18);
             dispatchId = 18;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 18 failed:', e);
           }
        }
        // Try Method 19: RequestMediaScan
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.FileSystemInstance_RequestMediaScan_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RequestMediaScan (19)');
             this.mapOrdinal(header.ordinal, 19);
             dispatchId = 19;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 19 failed:', e);
           }
        }
        // Try Method 20: ReindexDirectory
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.FileSystemInstance_ReindexDirectory_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ReindexDirectory (20)');
             this.mapOrdinal(header.ordinal, 20);
             dispatchId = 20;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 20 failed:', e);
           }
        }
        // Try Method 21: RequestFileRemovalScan
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.FileSystemInstance_RequestFileRemovalScan_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RequestFileRemovalScan (21)');
             this.mapOrdinal(header.ordinal, 21);
             dispatchId = 21;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 21 failed:', e);
           }
        }
        // Try Method 22: OpenUrlsWithPermissionAndWindowInfo
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.FileSystemInstance_OpenUrlsWithPermissionAndWindowInfo_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OpenUrlsWithPermissionAndWindowInfo (22)');
             this.mapOrdinal(header.ordinal, 22);
             dispatchId = 22;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 22 failed:', e);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.FileSystemInstance_AddWatcher_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.addWatcher');
          const result = this.impl.addWatcher(params.arg_authority, params.arg_document_id);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.arc.mojom.FileSystemInstance_AddWatcher_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] AddWatcher FAILED:', e));
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.FileSystemInstance_GetChildDocuments_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getChildDocuments');
          const result = this.impl.getChildDocuments(params.arg_authority, params.arg_parent_document_id);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.arc.mojom.FileSystemInstance_GetChildDocuments_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetChildDocuments FAILED:', e));
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.FileSystemInstance_GetDocument_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getDocument');
          const result = this.impl.getDocument(params.arg_authority, params.arg_document_id);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.arc.mojom.FileSystemInstance_GetDocument_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetDocument FAILED:', e));
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.FileSystemInstance_GetFileSize_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getFileSize');
          const result = this.impl.getFileSize(params.arg_url);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.arc.mojom.FileSystemInstance_GetFileSize_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetFileSize FAILED:', e));
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.FileSystemInstance_GetMimeType_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getMimeType');
          const result = this.impl.getMimeType(params.arg_url);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.arc.mojom.FileSystemInstance_GetMimeType_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetMimeType FAILED:', e));
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.FileSystemInstance_GetRecentDocuments_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getRecentDocuments');
          const result = this.impl.getRecentDocuments(params.arg_authority, params.arg_root_id);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.arc.mojom.FileSystemInstance_GetRecentDocuments_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetRecentDocuments FAILED:', e));
          }
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.FileSystemInstance_GetRoots_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getRoots');
          const result = this.impl.getRoots();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.arc.mojom.FileSystemInstance_GetRoots_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetRoots FAILED:', e));
          }
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.FileSystemInstance_GetRootSize_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getRootSize');
          const result = this.impl.getRootSize(params.arg_authority, params.arg_root_id);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.arc.mojom.FileSystemInstance_GetRootSize_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetRootSize FAILED:', e));
          }
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.FileSystemInstance_DeleteDocument_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.deleteDocument');
          const result = this.impl.deleteDocument(params.arg_authority, params.arg_document_id);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.arc.mojom.FileSystemInstance_DeleteDocument_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] DeleteDocument FAILED:', e));
          }
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.FileSystemInstance_RenameDocument_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.renameDocument');
          const result = this.impl.renameDocument(params.arg_authority, params.arg_document_id, params.arg_display_name);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.arc.mojom.FileSystemInstance_RenameDocument_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] RenameDocument FAILED:', e));
          }
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.FileSystemInstance_CreateDocument_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.createDocument');
          const result = this.impl.createDocument(params.arg_authority, params.arg_parent_document_id, params.arg_mime_type, params.arg_display_name);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.arc.mojom.FileSystemInstance_CreateDocument_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] CreateDocument FAILED:', e));
          }
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.FileSystemInstance_CopyDocument_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.copyDocument');
          const result = this.impl.copyDocument(params.arg_authority, params.arg_source_document_id, params.arg_target_parent_document_id);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.arc.mojom.FileSystemInstance_CopyDocument_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] CopyDocument FAILED:', e));
          }
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.FileSystemInstance_MoveDocument_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.moveDocument');
          const result = this.impl.moveDocument(params.arg_authority, params.arg_source_document_id, params.arg_source_parent_document_id, params.arg_target_parent_document_id);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.arc.mojom.FileSystemInstance_MoveDocument_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] MoveDocument FAILED:', e));
          }
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.FileSystemInstance_Init_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.init');
          const result = this.impl.init(params.arg_host_remote);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.arc.mojom.FileSystemInstance_Init_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] Init FAILED:', e));
          }
          break;
        }
        case 14: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.FileSystemInstance_OpenThumbnail_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.openThumbnail');
          const result = this.impl.openThumbnail(params.arg_url, params.arg_size_hint);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.arc.mojom.FileSystemInstance_OpenThumbnail_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] OpenThumbnail FAILED:', e));
          }
          break;
        }
        case 15: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.FileSystemInstance_CloseFileSession_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.closeFileSession');
          const result = this.impl.closeFileSession(params.arg_url_id, params.arg_error_message);
          break;
        }
        case 16: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.FileSystemInstance_OpenFileSessionToWrite_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.openFileSessionToWrite');
          const result = this.impl.openFileSessionToWrite(params.arg_url);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.arc.mojom.FileSystemInstance_OpenFileSessionToWrite_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] OpenFileSessionToWrite FAILED:', e));
          }
          break;
        }
        case 17: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.FileSystemInstance_OpenFileSessionToRead_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.openFileSessionToRead');
          const result = this.impl.openFileSessionToRead(params.arg_url);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.arc.mojom.FileSystemInstance_OpenFileSessionToRead_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] OpenFileSessionToRead FAILED:', e));
          }
          break;
        }
        case 18: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.FileSystemInstance_RemoveWatcher_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.removeWatcher');
          const result = this.impl.removeWatcher(params.arg_watcher_id);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.arc.mojom.FileSystemInstance_RemoveWatcher_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] RemoveWatcher FAILED:', e));
          }
          break;
        }
        case 19: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.FileSystemInstance_RequestMediaScan_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.requestMediaScan');
          const result = this.impl.requestMediaScan(params.arg_paths);
          break;
        }
        case 20: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.FileSystemInstance_ReindexDirectory_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.reindexDirectory');
          const result = this.impl.reindexDirectory(params.arg_directory_path);
          break;
        }
        case 21: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.FileSystemInstance_RequestFileRemovalScan_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.requestFileRemovalScan');
          const result = this.impl.requestFileRemovalScan(params.arg_directory_paths);
          break;
        }
        case 22: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.FileSystemInstance_OpenUrlsWithPermissionAndWindowInfo_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.openUrlsWithPermissionAndWindowInfo');
          const result = this.impl.openUrlsWithPermissionAndWindowInfo(params.arg_request, params.arg_window_info);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.arc.mojom.FileSystemInstance_OpenUrlsWithPermissionAndWindowInfo_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] OpenUrlsWithPermissionAndWindowInfo FAILED:', e));
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

mojo.internal.bindings.arc.mojom.FileSystemInstanceReceiver = mojo.internal.bindings.arc.mojom.FileSystemInstanceReceiver;

mojo.internal.bindings.arc.mojom.FileSystemInstancePtr = mojo.internal.bindings.arc.mojom.FileSystemInstanceRemote;
mojo.internal.bindings.arc.mojom.FileSystemInstanceRequest = mojo.internal.bindings.arc.mojom.FileSystemInstancePendingReceiver;

