// Auto-generated MojoJS binding
 // Source: chromium_src/ash/webui/personalization_app/mojom/personalization_app.mojom
 // Module: ash.personalization_app.mojom

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
 

 mojo.internal.bindings.ash = mojo.internal.bindings.ash || {};
mojo.internal.bindings.ash.personalization_app = mojo.internal.bindings.ash.personalization_app || {};
mojo.internal.bindings.ash.personalization_app.mojom = mojo.internal.bindings.ash.personalization_app.mojom || {};
mojo.internal.bindings.mojo_base = mojo.internal.bindings.mojo_base || {};
mojo.internal.bindings.skia = mojo.internal.bindings.skia || {};
mojo.internal.bindings.url = mojo.internal.bindings.url || {};

mojo.internal.bindings.ash.personalization_app.mojom.WallpaperLayoutSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.ash.personalization_app.mojom.WallpaperTypeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.ash.personalization_app.mojom.OnlineImageTypeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.ash.personalization_app.mojom.GooglePhotosEnablementStateSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.ash.personalization_app.mojom.StaticColorSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.ash.personalization_app.mojom.AmbientThemeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.ash.personalization_app.mojom.TopicSourceSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.ash.personalization_app.mojom.TemperatureUnitSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.ash.personalization_app.mojom.AmbientUiVisibilitySpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.ash.personalization_app.mojom.BacklightColorSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.ash.personalization_app.mojom.UserImageSpec = { $: {} };
mojo.internal.bindings.ash.personalization_app.mojom.CurrentBacklightStateSpec = { $: {} };
mojo.internal.bindings.ash.personalization_app.mojom.WallpaperCollectionSpec = { $: {} };
mojo.internal.bindings.ash.personalization_app.mojom.GooglePhotosAlbumSpec = { $: {} };
mojo.internal.bindings.ash.personalization_app.mojom.FetchGooglePhotosAlbumsResponseSpec = { $: {} };
mojo.internal.bindings.ash.personalization_app.mojom.WallpaperImageSpec = { $: {} };
mojo.internal.bindings.ash.personalization_app.mojom.GooglePhotosPhotoSpec = { $: {} };
mojo.internal.bindings.ash.personalization_app.mojom.FetchGooglePhotosPhotosResponseSpec = { $: {} };
mojo.internal.bindings.ash.personalization_app.mojom.CurrentAttributionSpec = { $: {} };
mojo.internal.bindings.ash.personalization_app.mojom.CurrentWallpaperSpec = { $: {} };
mojo.internal.bindings.ash.personalization_app.mojom.SampleColorSchemeSpec = { $: {} };
mojo.internal.bindings.ash.personalization_app.mojom.UserInfoSpec = { $: {} };
mojo.internal.bindings.ash.personalization_app.mojom.DeprecatedSourceInfoSpec = { $: {} };
mojo.internal.bindings.ash.personalization_app.mojom.DefaultUserImageSpec = { $: {} };
mojo.internal.bindings.ash.personalization_app.mojom.ProfileImageSpec = { $: {} };
mojo.internal.bindings.ash.personalization_app.mojom.InvalidImageSpec = { $: {} };
mojo.internal.bindings.ash.personalization_app.mojom.AmbientModeAlbumSpec = { $: {} };
mojo.internal.bindings.ash.personalization_app.mojom.WallpaperObserver = {};
mojo.internal.bindings.ash.personalization_app.mojom.WallpaperObserver.$interfaceName = 'ash.personalization_app.mojom.WallpaperObserver';
mojo.internal.bindings.ash.personalization_app.mojom.WallpaperObserver_OnWallpaperPreviewEnded_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.personalization_app.mojom.WallpaperObserver_OnAttributionChanged_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.personalization_app.mojom.WallpaperObserver_OnWallpaperChanged_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.personalization_app.mojom.WallpaperProvider = {};
mojo.internal.bindings.ash.personalization_app.mojom.WallpaperProvider.$interfaceName = 'ash.personalization_app.mojom.WallpaperProvider';
mojo.internal.bindings.ash.personalization_app.mojom.WallpaperProvider_MakeTransparent_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.personalization_app.mojom.WallpaperProvider_MakeOpaque_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.personalization_app.mojom.WallpaperProvider_FetchCollections_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.personalization_app.mojom.WallpaperProvider_FetchCollections_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.personalization_app.mojom.WallpaperProvider_FetchImagesForCollection_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.personalization_app.mojom.WallpaperProvider_FetchImagesForCollection_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.personalization_app.mojom.WallpaperProvider_FetchGooglePhotosAlbums_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.personalization_app.mojom.WallpaperProvider_FetchGooglePhotosAlbums_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.personalization_app.mojom.WallpaperProvider_FetchGooglePhotosSharedAlbums_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.personalization_app.mojom.WallpaperProvider_FetchGooglePhotosSharedAlbums_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.personalization_app.mojom.WallpaperProvider_FetchGooglePhotosEnabled_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.personalization_app.mojom.WallpaperProvider_FetchGooglePhotosEnabled_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.personalization_app.mojom.WallpaperProvider_FetchGooglePhotosPhotos_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.personalization_app.mojom.WallpaperProvider_FetchGooglePhotosPhotos_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.personalization_app.mojom.WallpaperProvider_GetLocalImages_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.personalization_app.mojom.WallpaperProvider_GetLocalImages_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.personalization_app.mojom.WallpaperProvider_GetDefaultImageThumbnail_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.personalization_app.mojom.WallpaperProvider_GetDefaultImageThumbnail_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.personalization_app.mojom.WallpaperProvider_GetLocalImageThumbnail_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.personalization_app.mojom.WallpaperProvider_GetLocalImageThumbnail_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.personalization_app.mojom.WallpaperProvider_SetWallpaperObserver_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.personalization_app.mojom.WallpaperProvider_SelectWallpaper_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.personalization_app.mojom.WallpaperProvider_SelectWallpaper_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.personalization_app.mojom.WallpaperProvider_SelectDefaultImage_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.personalization_app.mojom.WallpaperProvider_SelectDefaultImage_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.personalization_app.mojom.WallpaperProvider_SelectLocalImage_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.personalization_app.mojom.WallpaperProvider_SelectLocalImage_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.personalization_app.mojom.WallpaperProvider_SelectGooglePhotosPhoto_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.personalization_app.mojom.WallpaperProvider_SelectGooglePhotosPhoto_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.personalization_app.mojom.WallpaperProvider_SelectGooglePhotosAlbum_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.personalization_app.mojom.WallpaperProvider_SelectGooglePhotosAlbum_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.personalization_app.mojom.WallpaperProvider_GetGooglePhotosDailyRefreshAlbumId_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.personalization_app.mojom.WallpaperProvider_GetGooglePhotosDailyRefreshAlbumId_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.personalization_app.mojom.WallpaperProvider_SetCurrentWallpaperLayout_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.personalization_app.mojom.WallpaperProvider_SetDailyRefreshCollectionId_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.personalization_app.mojom.WallpaperProvider_SetDailyRefreshCollectionId_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.personalization_app.mojom.WallpaperProvider_GetDailyRefreshCollectionId_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.personalization_app.mojom.WallpaperProvider_GetDailyRefreshCollectionId_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.personalization_app.mojom.WallpaperProvider_UpdateDailyRefreshWallpaper_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.personalization_app.mojom.WallpaperProvider_UpdateDailyRefreshWallpaper_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.personalization_app.mojom.WallpaperProvider_IsInTabletMode_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.personalization_app.mojom.WallpaperProvider_IsInTabletMode_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.personalization_app.mojom.WallpaperProvider_ConfirmPreviewWallpaper_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.personalization_app.mojom.WallpaperProvider_CancelPreviewWallpaper_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.personalization_app.mojom.WallpaperProvider_ShouldShowTimeOfDayWallpaperDialog_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.personalization_app.mojom.WallpaperProvider_ShouldShowTimeOfDayWallpaperDialog_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.personalization_app.mojom.ThemeObserver = {};
mojo.internal.bindings.ash.personalization_app.mojom.ThemeObserver.$interfaceName = 'ash.personalization_app.mojom.ThemeObserver';
mojo.internal.bindings.ash.personalization_app.mojom.ThemeObserver_OnColorModeChanged_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.personalization_app.mojom.ThemeObserver_OnColorModeAutoScheduleChanged_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.personalization_app.mojom.ThemeObserver_OnColorSchemeChanged_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.personalization_app.mojom.ThemeObserver_OnSampleColorSchemesChanged_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.personalization_app.mojom.ThemeObserver_OnStaticColorChanged_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.personalization_app.mojom.ThemeObserver_OnGeolocationPermissionForSystemServicesChanged_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.personalization_app.mojom.ThemeObserver_OnDaylightTimeChanged_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.personalization_app.mojom.ThemeProvider = {};
mojo.internal.bindings.ash.personalization_app.mojom.ThemeProvider.$interfaceName = 'ash.personalization_app.mojom.ThemeProvider';
mojo.internal.bindings.ash.personalization_app.mojom.ThemeProvider_SetThemeObserver_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.personalization_app.mojom.ThemeProvider_SetColorModePref_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.personalization_app.mojom.ThemeProvider_SetColorModeAutoScheduleEnabled_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.personalization_app.mojom.ThemeProvider_SetColorScheme_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.personalization_app.mojom.ThemeProvider_SetStaticColor_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.personalization_app.mojom.ThemeProvider_EnableGeolocationForSystemServices_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.personalization_app.mojom.ThemeProvider_GetColorScheme_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.personalization_app.mojom.ThemeProvider_GetColorScheme_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.personalization_app.mojom.ThemeProvider_GetStaticColor_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.personalization_app.mojom.ThemeProvider_GetStaticColor_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.personalization_app.mojom.ThemeProvider_GenerateSampleColorSchemes_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.personalization_app.mojom.ThemeProvider_GenerateSampleColorSchemes_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.personalization_app.mojom.ThemeProvider_IsColorModeAutoScheduleEnabled_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.personalization_app.mojom.ThemeProvider_IsColorModeAutoScheduleEnabled_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.personalization_app.mojom.ThemeProvider_IsDarkModeEnabled_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.personalization_app.mojom.ThemeProvider_IsDarkModeEnabled_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.personalization_app.mojom.ThemeProvider_IsGeolocationEnabledForSystemServices_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.personalization_app.mojom.ThemeProvider_IsGeolocationEnabledForSystemServices_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.personalization_app.mojom.ThemeProvider_IsGeolocationUserModifiable_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.personalization_app.mojom.ThemeProvider_IsGeolocationUserModifiable_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.personalization_app.mojom.UserImageObserver = {};
mojo.internal.bindings.ash.personalization_app.mojom.UserImageObserver.$interfaceName = 'ash.personalization_app.mojom.UserImageObserver';
mojo.internal.bindings.ash.personalization_app.mojom.UserImageObserver_OnUserImageChanged_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.personalization_app.mojom.UserImageObserver_OnUserProfileImageUpdated_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.personalization_app.mojom.UserImageObserver_OnCameraPresenceCheckDone_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.personalization_app.mojom.UserImageObserver_OnIsEnterpriseManagedChanged_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.personalization_app.mojom.UserProvider = {};
mojo.internal.bindings.ash.personalization_app.mojom.UserProvider.$interfaceName = 'ash.personalization_app.mojom.UserProvider';
mojo.internal.bindings.ash.personalization_app.mojom.UserProvider_SetUserImageObserver_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.personalization_app.mojom.UserProvider_GetUserInfo_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.personalization_app.mojom.UserProvider_GetUserInfo_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.personalization_app.mojom.UserProvider_GetDefaultUserImages_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.personalization_app.mojom.UserProvider_GetDefaultUserImages_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.personalization_app.mojom.UserProvider_SelectDefaultImage_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.personalization_app.mojom.UserProvider_SelectProfileImage_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.personalization_app.mojom.UserProvider_SelectCameraImage_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.personalization_app.mojom.UserProvider_SelectImageFromDisk_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.personalization_app.mojom.UserProvider_SelectLastExternalUserImage_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.personalization_app.mojom.AmbientObserver = {};
mojo.internal.bindings.ash.personalization_app.mojom.AmbientObserver.$interfaceName = 'ash.personalization_app.mojom.AmbientObserver';
mojo.internal.bindings.ash.personalization_app.mojom.AmbientObserver_OnAmbientModeEnabledChanged_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.personalization_app.mojom.AmbientObserver_OnAmbientThemeChanged_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.personalization_app.mojom.AmbientObserver_OnTopicSourceChanged_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.personalization_app.mojom.AmbientObserver_OnScreenSaverDurationChanged_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.personalization_app.mojom.AmbientObserver_OnTemperatureUnitChanged_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.personalization_app.mojom.AmbientObserver_OnAlbumsChanged_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.personalization_app.mojom.AmbientObserver_OnPreviewsFetched_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.personalization_app.mojom.AmbientObserver_OnAmbientUiVisibilityChanged_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.personalization_app.mojom.AmbientObserver_OnGeolocationPermissionForSystemServicesChanged_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.personalization_app.mojom.AmbientObserver_OnAmbientThemePreviewImagesChanged_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.personalization_app.mojom.AmbientProvider = {};
mojo.internal.bindings.ash.personalization_app.mojom.AmbientProvider.$interfaceName = 'ash.personalization_app.mojom.AmbientProvider';
mojo.internal.bindings.ash.personalization_app.mojom.AmbientProvider_IsAmbientModeEnabled_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.personalization_app.mojom.AmbientProvider_IsAmbientModeEnabled_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.personalization_app.mojom.AmbientProvider_SetAmbientModeEnabled_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.personalization_app.mojom.AmbientProvider_SetAmbientObserver_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.personalization_app.mojom.AmbientProvider_SetAmbientTheme_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.personalization_app.mojom.AmbientProvider_SetScreenSaverDuration_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.personalization_app.mojom.AmbientProvider_SetTopicSource_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.personalization_app.mojom.AmbientProvider_SetTemperatureUnit_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.personalization_app.mojom.AmbientProvider_SetAlbumSelected_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.personalization_app.mojom.AmbientProvider_SetPageViewed_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.personalization_app.mojom.AmbientProvider_FetchSettingsAndAlbums_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.personalization_app.mojom.AmbientProvider_StartScreenSaverPreview_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.personalization_app.mojom.AmbientProvider_ShouldShowTimeOfDayBanner_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.personalization_app.mojom.AmbientProvider_ShouldShowTimeOfDayBanner_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.personalization_app.mojom.AmbientProvider_HandleTimeOfDayBannerDismissed_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.personalization_app.mojom.AmbientProvider_IsGeolocationEnabledForSystemServices_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.personalization_app.mojom.AmbientProvider_IsGeolocationEnabledForSystemServices_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.personalization_app.mojom.AmbientProvider_IsGeolocationUserModifiable_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.personalization_app.mojom.AmbientProvider_IsGeolocationUserModifiable_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.personalization_app.mojom.AmbientProvider_EnableGeolocationForSystemServices_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.personalization_app.mojom.KeyboardBacklightObserver = {};
mojo.internal.bindings.ash.personalization_app.mojom.KeyboardBacklightObserver.$interfaceName = 'ash.personalization_app.mojom.KeyboardBacklightObserver';
mojo.internal.bindings.ash.personalization_app.mojom.KeyboardBacklightObserver_OnBacklightStateChanged_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.personalization_app.mojom.KeyboardBacklightObserver_OnWallpaperColorChanged_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.personalization_app.mojom.KeyboardBacklightProvider = {};
mojo.internal.bindings.ash.personalization_app.mojom.KeyboardBacklightProvider.$interfaceName = 'ash.personalization_app.mojom.KeyboardBacklightProvider';
mojo.internal.bindings.ash.personalization_app.mojom.KeyboardBacklightProvider_SetKeyboardBacklightObserver_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.personalization_app.mojom.KeyboardBacklightProvider_SetBacklightColor_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.personalization_app.mojom.KeyboardBacklightProvider_SetBacklightZoneColor_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.personalization_app.mojom.KeyboardBacklightProvider_ShouldShowNudge_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.personalization_app.mojom.KeyboardBacklightProvider_ShouldShowNudge_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.personalization_app.mojom.KeyboardBacklightProvider_HandleNudgeShown_ParamsSpec = { $: {} };

mojo.internal.bindings.ash.personalization_app.mojom.kStaticColorGoogleBlue = 0x4285F4;

mojo.internal.bindings.ash.personalization_app.mojom.kStaticColorLightPink = 0xFFD6D6;

mojo.internal.bindings.ash.personalization_app.mojom.kStaticColorDarkGreen = 0x485045;

mojo.internal.bindings.ash.personalization_app.mojom.kStaticColorLightPurple = 0xCBBFFF;

mojo.internal.bindings.ash.personalization_app.mojom.kWhiteColor = 0xFFFFFF;

mojo.internal.bindings.ash.personalization_app.mojom.kRedColor = 0xEE675C;

mojo.internal.bindings.ash.personalization_app.mojom.kYellowColor = 0xFBBC04;

mojo.internal.bindings.ash.personalization_app.mojom.kGreenColor = 0x34A853;

mojo.internal.bindings.ash.personalization_app.mojom.kBlueColor = 0x00A3C2;

mojo.internal.bindings.ash.personalization_app.mojom.kIndigoColor = 0x4285F4;

mojo.internal.bindings.ash.personalization_app.mojom.kPurpleColor = 0xB76DF8;

// Enum: WallpaperLayout
mojo.internal.bindings.ash.personalization_app.mojom.WallpaperLayout = {
  kCenter: 0,
  kCenterCropped: 1,
  kStretch: 2,
  kTile: 3,
};

// Enum: WallpaperType
mojo.internal.bindings.ash.personalization_app.mojom.WallpaperType = {
  kDaily: 0,
  kCustomized: 1,
  kDefault: 2,
  kOnline: 4,
  kPolicy: 5,
  kThirdParty: 6,
  kDevice: 7,
  kOneShot: 8,
  kDailyGooglePhotos: 10,
  kOnceGooglePhotos: 11,
  kOobe: 12,
  kSeaPen: 13,
};

// Enum: OnlineImageType
mojo.internal.bindings.ash.personalization_app.mojom.OnlineImageType = {
  kUnknown: 0,
  kLight: 1,
  kDark: 2,
  kPreview: 3,
  kMorning: 4,
  kLateAfternoon: 5,
};

// Enum: GooglePhotosEnablementState
mojo.internal.bindings.ash.personalization_app.mojom.GooglePhotosEnablementState = {
  kError: 0,
  kDisabled: 1,
  kEnabled: 2,
};

// Enum: StaticColor
mojo.internal.bindings.ash.personalization_app.mojom.StaticColor = {
  kUnknown: 0,
  kGoogleBlue: 1,
  kLightPink: 2,
  kDarkGreen: 3,
  kLightPurple: 4,
};

// Enum: AmbientTheme
mojo.internal.bindings.ash.personalization_app.mojom.AmbientTheme = {
  kSlideshow: 0,
  kFeelTheBreeze: 1,
  kFloatOnBy: 2,
  kVideo: 3,
};

// Enum: TopicSource
mojo.internal.bindings.ash.personalization_app.mojom.TopicSource = {
  kGooglePhotos: 0,
  kArtGallery: 1,
  kVideo: 2,
};

// Enum: TemperatureUnit
mojo.internal.bindings.ash.personalization_app.mojom.TemperatureUnit = {
  kFahrenheit: 0,
  kCelsius: 1,
};

// Enum: AmbientUiVisibility
mojo.internal.bindings.ash.personalization_app.mojom.AmbientUiVisibility = {
  kShouldShow: 0,
  kPreview: 1,
  kHidden: 2,
  kClosed: 3,
};

// Enum: BacklightColor
mojo.internal.bindings.ash.personalization_app.mojom.BacklightColor = {
  kWallpaper: 0,
  kWhite: 1,
  kRed: 2,
  kYellow: 3,
  kGreen: 4,
  kBlue: 5,
  kIndigo: 6,
  kPurple: 7,
  kRainbow: 100,
};

// Union: UserImage
mojo.internal.Union(
    mojo.internal.bindings.ash.personalization_app.mojom.UserImageSpec, 'ash.personalization_app.mojom.UserImage', {
      'arg_default_image': {
        'ordinal': 0,
        'type': mojo.internal.bindings.ash.personalization_app.mojom.DefaultUserImageSpec.$,
        'nullable': false,
      },
      'arg_external_image': {
        'ordinal': 1,
        'type': mojo.internal.bindings.mojo_base.mojom.BigBufferSpec.$,
        'nullable': false,
      },
      'arg_profile_image': {
        'ordinal': 2,
        'type': mojo.internal.bindings.ash.personalization_app.mojom.ProfileImageSpec.$,
        'nullable': false,
      },
      'arg_invalid_image': {
        'ordinal': 3,
        'type': mojo.internal.bindings.ash.personalization_app.mojom.InvalidImageSpec.$,
        'nullable': false,
      },
    });

// Union: CurrentBacklightState
mojo.internal.Union(
    mojo.internal.bindings.ash.personalization_app.mojom.CurrentBacklightStateSpec, 'ash.personalization_app.mojom.CurrentBacklightState', {
      'arg_color': {
        'ordinal': 0,
        'type': mojo.internal.bindings.ash.personalization_app.mojom.BacklightColorSpec.$,
        'nullable': false,
      },
      'arg_zone_colors': {
        'ordinal': 1,
        'type': mojo.internal.Array(mojo.internal.bindings.ash.personalization_app.mojom.BacklightColorSpec.$, false),
        'nullable': false,
      },
    });

// Struct: WallpaperCollection
mojo.internal.Struct(
    mojo.internal.bindings.ash.personalization_app.mojom.WallpaperCollectionSpec, 'ash.personalization_app.mojom.WallpaperCollection', [
      mojo.internal.StructField('arg_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_name', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_description_content', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_previews', 24, 0, mojo.internal.Array(mojo.internal.bindings.url.mojom.UrlSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: GooglePhotosAlbum
mojo.internal.Struct(
    mojo.internal.bindings.ash.personalization_app.mojom.GooglePhotosAlbumSpec, 'ash.personalization_app.mojom.GooglePhotosAlbum', [
      mojo.internal.StructField('arg_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_title', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_preview', 16, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_timestamp', 24, 0, mojo.internal.bindings.mojo_base.mojom.TimeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_photo_count', 32, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_is_shared', 36, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 48]]);

// Struct: FetchGooglePhotosAlbumsResponse
mojo.internal.Struct(
    mojo.internal.bindings.ash.personalization_app.mojom.FetchGooglePhotosAlbumsResponseSpec, 'ash.personalization_app.mojom.FetchGooglePhotosAlbumsResponse', [
      mojo.internal.StructField('arg_albums', 0, 0, mojo.internal.Array(mojo.internal.bindings.ash.personalization_app.mojom.GooglePhotosAlbumSpec.$, false), null, true, 0, undefined),
      mojo.internal.StructField('arg_resume_token', 8, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 24]]);

// Struct: WallpaperImage
mojo.internal.Struct(
    mojo.internal.bindings.ash.personalization_app.mojom.WallpaperImageSpec, 'ash.personalization_app.mojom.WallpaperImage', [
      mojo.internal.StructField('arg_url', 0, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_attribution', 8, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_asset_id', 16, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_unit_id', 24, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_type', 32, 0, mojo.internal.bindings.ash.personalization_app.mojom.OnlineImageTypeSpec.$, null, false, 0, undefined),
    ],
    [[0, 48]]);

// Struct: GooglePhotosPhoto
mojo.internal.Struct(
    mojo.internal.bindings.ash.personalization_app.mojom.GooglePhotosPhotoSpec, 'ash.personalization_app.mojom.GooglePhotosPhoto', [
      mojo.internal.StructField('arg_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_dedup_key', 8, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_name', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_date', 24, 0, mojo.internal.bindings.mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_url', 32, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_location', 40, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 56]]);

// Struct: FetchGooglePhotosPhotosResponse
mojo.internal.Struct(
    mojo.internal.bindings.ash.personalization_app.mojom.FetchGooglePhotosPhotosResponseSpec, 'ash.personalization_app.mojom.FetchGooglePhotosPhotosResponse', [
      mojo.internal.StructField('arg_photos', 0, 0, mojo.internal.Array(mojo.internal.bindings.ash.personalization_app.mojom.GooglePhotosPhotoSpec.$, false), null, true, 0, undefined),
      mojo.internal.StructField('arg_resume_token', 8, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 24]]);

// Struct: CurrentAttribution
mojo.internal.Struct(
    mojo.internal.bindings.ash.personalization_app.mojom.CurrentAttributionSpec, 'ash.personalization_app.mojom.CurrentAttribution', [
      mojo.internal.StructField('arg_attribution', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_key', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: CurrentWallpaper
mojo.internal.Struct(
    mojo.internal.bindings.ash.personalization_app.mojom.CurrentWallpaperSpec, 'ash.personalization_app.mojom.CurrentWallpaper', [
      mojo.internal.StructField('arg_layout', 0, 0, mojo.internal.bindings.ash.personalization_app.mojom.WallpaperLayoutSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_type', 8, 0, mojo.internal.bindings.ash.personalization_app.mojom.WallpaperTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_key', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_description_title', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_description_content', 32, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_action_url', 40, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, true, 0, undefined),
    ],
    [[0, 56]]);

// Struct: SampleColorScheme
mojo.internal.Struct(
    mojo.internal.bindings.ash.personalization_app.mojom.SampleColorSchemeSpec, 'ash.personalization_app.mojom.SampleColorScheme', [
      mojo.internal.StructField('arg_scheme', 0, 0, mojo.internal.bindings.ash.style.mojom.ColorSchemeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_primary', 8, 0, mojo.internal.bindings.skia.mojom.SkColorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_secondary', 16, 0, mojo.internal.bindings.skia.mojom.SkColorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_tertiary', 24, 0, mojo.internal.bindings.skia.mojom.SkColorSpec.$, null, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: UserInfo
mojo.internal.Struct(
    mojo.internal.bindings.ash.personalization_app.mojom.UserInfoSpec, 'ash.personalization_app.mojom.UserInfo', [
      mojo.internal.StructField('arg_email', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_name', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: DeprecatedSourceInfo
mojo.internal.Struct(
    mojo.internal.bindings.ash.personalization_app.mojom.DeprecatedSourceInfoSpec, 'ash.personalization_app.mojom.DeprecatedSourceInfo', [
      mojo.internal.StructField('arg_author', 0, 0, mojo.internal.bindings.mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_website', 8, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: DefaultUserImage
mojo.internal.Struct(
    mojo.internal.bindings.ash.personalization_app.mojom.DefaultUserImageSpec, 'ash.personalization_app.mojom.DefaultUserImage', [
      mojo.internal.StructField('arg_title', 0, 0, mojo.internal.bindings.mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_url', 8, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_source_info', 16, 0, mojo.internal.bindings.ash.personalization_app.mojom.DeprecatedSourceInfoSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_index', 24, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: ProfileImage
mojo.internal.Struct(
    mojo.internal.bindings.ash.personalization_app.mojom.ProfileImageSpec, 'ash.personalization_app.mojom.ProfileImage', [
    ],
    [[0, 8]]);

// Struct: InvalidImage
mojo.internal.Struct(
    mojo.internal.bindings.ash.personalization_app.mojom.InvalidImageSpec, 'ash.personalization_app.mojom.InvalidImage', [
    ],
    [[0, 8]]);

// Struct: AmbientModeAlbum
mojo.internal.Struct(
    mojo.internal.bindings.ash.personalization_app.mojom.AmbientModeAlbumSpec, 'ash.personalization_app.mojom.AmbientModeAlbum', [
      mojo.internal.StructField('arg_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_title', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_description', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_topic_source', 24, 0, mojo.internal.bindings.ash.personalization_app.mojom.TopicSourceSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_url', 32, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_number_of_photos', 40, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_checked', 44, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 56]]);

// Interface: WallpaperObserver
mojo.internal.Struct(
    mojo.internal.bindings.ash.personalization_app.mojom.WallpaperObserver_OnWallpaperPreviewEnded_ParamsSpec, 'ash.personalization_app.mojom.WallpaperObserver_OnWallpaperPreviewEnded_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.personalization_app.mojom.WallpaperObserver_OnAttributionChanged_ParamsSpec, 'ash.personalization_app.mojom.WallpaperObserver_OnAttributionChanged_Params', [
      mojo.internal.StructField('arg_attribution', 0, 0, mojo.internal.bindings.ash.personalization_app.mojom.CurrentAttributionSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.personalization_app.mojom.WallpaperObserver_OnWallpaperChanged_ParamsSpec, 'ash.personalization_app.mojom.WallpaperObserver_OnWallpaperChanged_Params', [
      mojo.internal.StructField('arg_image', 0, 0, mojo.internal.bindings.ash.personalization_app.mojom.CurrentWallpaperSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.ash.personalization_app.mojom.WallpaperObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.ash.personalization_app.mojom.WallpaperObserverRemote = class {
  static get $interfaceName() {
    return 'ash.personalization_app.mojom.WallpaperObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.ash.personalization_app.mojom.WallpaperObserverPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.ash.personalization_app.mojom.WallpaperObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onWallpaperPreviewEnded() {
    return this.$.onWallpaperPreviewEnded();
  }
  onAttributionChanged(arg_attribution) {
    return this.$.onAttributionChanged(arg_attribution);
  }
  onWallpaperChanged(arg_image) {
    return this.$.onWallpaperChanged(arg_image);
  }
};

mojo.internal.bindings.ash.personalization_app.mojom.WallpaperObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('WallpaperObserver', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  onWallpaperPreviewEnded() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.ash.personalization_app.mojom.WallpaperObserver_OnWallpaperPreviewEnded_ParamsSpec,
      null,
      [],
      false);
  }

  onAttributionChanged(arg_attribution) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.ash.personalization_app.mojom.WallpaperObserver_OnAttributionChanged_ParamsSpec,
      null,
      [arg_attribution],
      false);
  }

  onWallpaperChanged(arg_image) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.ash.personalization_app.mojom.WallpaperObserver_OnWallpaperChanged_ParamsSpec,
      null,
      [arg_image],
      false);
  }

};

mojo.internal.bindings.ash.personalization_app.mojom.WallpaperObserver.getRemote = function() {
  let remote = new mojo.internal.bindings.ash.personalization_app.mojom.WallpaperObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.personalization_app.mojom.WallpaperObserver',
    'context');
  return remote.$;
};

mojo.internal.bindings.ash.personalization_app.mojom.WallpaperObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('WallpaperObserver', [
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
        
        // Try Method 0: OnWallpaperPreviewEnded
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.personalization_app.mojom.WallpaperObserver_OnWallpaperPreviewEnded_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnWallpaperPreviewEnded (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: OnAttributionChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.personalization_app.mojom.WallpaperObserver_OnAttributionChanged_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnAttributionChanged (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: OnWallpaperChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.personalization_app.mojom.WallpaperObserver_OnWallpaperChanged_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnWallpaperChanged (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.personalization_app.mojom.WallpaperObserver_OnWallpaperPreviewEnded_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onWallpaperPreviewEnded');
          const result = this.impl.onWallpaperPreviewEnded();
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.personalization_app.mojom.WallpaperObserver_OnAttributionChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onAttributionChanged');
          const result = this.impl.onAttributionChanged(params.arg_attribution);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.personalization_app.mojom.WallpaperObserver_OnWallpaperChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onWallpaperChanged');
          const result = this.impl.onWallpaperChanged(params.arg_image);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.ash.personalization_app.mojom.WallpaperObserverReceiver = mojo.internal.bindings.ash.personalization_app.mojom.WallpaperObserverReceiver;

mojo.internal.bindings.ash.personalization_app.mojom.WallpaperObserverPtr = mojo.internal.bindings.ash.personalization_app.mojom.WallpaperObserverRemote;
mojo.internal.bindings.ash.personalization_app.mojom.WallpaperObserverRequest = mojo.internal.bindings.ash.personalization_app.mojom.WallpaperObserverPendingReceiver;


// Interface: WallpaperProvider
mojo.internal.Struct(
    mojo.internal.bindings.ash.personalization_app.mojom.WallpaperProvider_MakeTransparent_ParamsSpec, 'ash.personalization_app.mojom.WallpaperProvider_MakeTransparent_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.personalization_app.mojom.WallpaperProvider_MakeOpaque_ParamsSpec, 'ash.personalization_app.mojom.WallpaperProvider_MakeOpaque_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.personalization_app.mojom.WallpaperProvider_FetchCollections_ParamsSpec, 'ash.personalization_app.mojom.WallpaperProvider_FetchCollections_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.personalization_app.mojom.WallpaperProvider_FetchCollections_ResponseParamsSpec, 'ash.personalization_app.mojom.WallpaperProvider_FetchCollections_ResponseParams', [
      mojo.internal.StructField('arg_collections', 0, 0, mojo.internal.Array(mojo.internal.bindings.ash.personalization_app.mojom.WallpaperCollectionSpec.$, false), null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.personalization_app.mojom.WallpaperProvider_FetchImagesForCollection_ParamsSpec, 'ash.personalization_app.mojom.WallpaperProvider_FetchImagesForCollection_Params', [
      mojo.internal.StructField('arg_collection_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.personalization_app.mojom.WallpaperProvider_FetchImagesForCollection_ResponseParamsSpec, 'ash.personalization_app.mojom.WallpaperProvider_FetchImagesForCollection_ResponseParams', [
      mojo.internal.StructField('arg_images', 0, 0, mojo.internal.Array(mojo.internal.bindings.ash.personalization_app.mojom.WallpaperImageSpec.$, false), null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.personalization_app.mojom.WallpaperProvider_FetchGooglePhotosAlbums_ParamsSpec, 'ash.personalization_app.mojom.WallpaperProvider_FetchGooglePhotosAlbums_Params', [
      mojo.internal.StructField('arg_resume_token', 0, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.personalization_app.mojom.WallpaperProvider_FetchGooglePhotosAlbums_ResponseParamsSpec, 'ash.personalization_app.mojom.WallpaperProvider_FetchGooglePhotosAlbums_ResponseParams', [
      mojo.internal.StructField('arg_response', 0, 0, mojo.internal.bindings.ash.personalization_app.mojom.FetchGooglePhotosAlbumsResponseSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.personalization_app.mojom.WallpaperProvider_FetchGooglePhotosSharedAlbums_ParamsSpec, 'ash.personalization_app.mojom.WallpaperProvider_FetchGooglePhotosSharedAlbums_Params', [
      mojo.internal.StructField('arg_resume_token', 0, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.personalization_app.mojom.WallpaperProvider_FetchGooglePhotosSharedAlbums_ResponseParamsSpec, 'ash.personalization_app.mojom.WallpaperProvider_FetchGooglePhotosSharedAlbums_ResponseParams', [
      mojo.internal.StructField('arg_response', 0, 0, mojo.internal.bindings.ash.personalization_app.mojom.FetchGooglePhotosAlbumsResponseSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.personalization_app.mojom.WallpaperProvider_FetchGooglePhotosEnabled_ParamsSpec, 'ash.personalization_app.mojom.WallpaperProvider_FetchGooglePhotosEnabled_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.personalization_app.mojom.WallpaperProvider_FetchGooglePhotosEnabled_ResponseParamsSpec, 'ash.personalization_app.mojom.WallpaperProvider_FetchGooglePhotosEnabled_ResponseParams', [
      mojo.internal.StructField('arg_state', 0, 0, mojo.internal.bindings.ash.personalization_app.mojom.GooglePhotosEnablementStateSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.personalization_app.mojom.WallpaperProvider_FetchGooglePhotosPhotos_ParamsSpec, 'ash.personalization_app.mojom.WallpaperProvider_FetchGooglePhotosPhotos_Params', [
      mojo.internal.StructField('arg_item_id', 0, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_album_id', 8, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_resume_token', 16, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.personalization_app.mojom.WallpaperProvider_FetchGooglePhotosPhotos_ResponseParamsSpec, 'ash.personalization_app.mojom.WallpaperProvider_FetchGooglePhotosPhotos_ResponseParams', [
      mojo.internal.StructField('arg_response', 0, 0, mojo.internal.bindings.ash.personalization_app.mojom.FetchGooglePhotosPhotosResponseSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.personalization_app.mojom.WallpaperProvider_GetLocalImages_ParamsSpec, 'ash.personalization_app.mojom.WallpaperProvider_GetLocalImages_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.personalization_app.mojom.WallpaperProvider_GetLocalImages_ResponseParamsSpec, 'ash.personalization_app.mojom.WallpaperProvider_GetLocalImages_ResponseParams', [
      mojo.internal.StructField('arg_images', 0, 0, mojo.internal.Array(mojo.internal.bindings.mojo_base.mojom.FilePathSpec.$, false), null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.personalization_app.mojom.WallpaperProvider_GetDefaultImageThumbnail_ParamsSpec, 'ash.personalization_app.mojom.WallpaperProvider_GetDefaultImageThumbnail_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.personalization_app.mojom.WallpaperProvider_GetDefaultImageThumbnail_ResponseParamsSpec, 'ash.personalization_app.mojom.WallpaperProvider_GetDefaultImageThumbnail_ResponseParams', [
      mojo.internal.StructField('arg_data', 0, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.personalization_app.mojom.WallpaperProvider_GetLocalImageThumbnail_ParamsSpec, 'ash.personalization_app.mojom.WallpaperProvider_GetLocalImageThumbnail_Params', [
      mojo.internal.StructField('arg_file_path', 0, 0, mojo.internal.bindings.mojo_base.mojom.FilePathSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.personalization_app.mojom.WallpaperProvider_GetLocalImageThumbnail_ResponseParamsSpec, 'ash.personalization_app.mojom.WallpaperProvider_GetLocalImageThumbnail_ResponseParams', [
      mojo.internal.StructField('arg_data', 0, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.personalization_app.mojom.WallpaperProvider_SetWallpaperObserver_ParamsSpec, 'ash.personalization_app.mojom.WallpaperProvider_SetWallpaperObserver_Params', [
      mojo.internal.StructField('arg_observer', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.ash.personalization_app.mojom.WallpaperObserverSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.personalization_app.mojom.WallpaperProvider_SelectWallpaper_ParamsSpec, 'ash.personalization_app.mojom.WallpaperProvider_SelectWallpaper_Params', [
      mojo.internal.StructField('arg_unit_id', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_preview_mode', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.personalization_app.mojom.WallpaperProvider_SelectWallpaper_ResponseParamsSpec, 'ash.personalization_app.mojom.WallpaperProvider_SelectWallpaper_ResponseParams', [
      mojo.internal.StructField('arg_success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.personalization_app.mojom.WallpaperProvider_SelectDefaultImage_ParamsSpec, 'ash.personalization_app.mojom.WallpaperProvider_SelectDefaultImage_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.personalization_app.mojom.WallpaperProvider_SelectDefaultImage_ResponseParamsSpec, 'ash.personalization_app.mojom.WallpaperProvider_SelectDefaultImage_ResponseParams', [
      mojo.internal.StructField('arg_success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.personalization_app.mojom.WallpaperProvider_SelectLocalImage_ParamsSpec, 'ash.personalization_app.mojom.WallpaperProvider_SelectLocalImage_Params', [
      mojo.internal.StructField('arg_path', 0, 0, mojo.internal.bindings.mojo_base.mojom.FilePathSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_layout', 8, 0, mojo.internal.bindings.ash.personalization_app.mojom.WallpaperLayoutSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_preview_mode', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.personalization_app.mojom.WallpaperProvider_SelectLocalImage_ResponseParamsSpec, 'ash.personalization_app.mojom.WallpaperProvider_SelectLocalImage_ResponseParams', [
      mojo.internal.StructField('arg_success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.personalization_app.mojom.WallpaperProvider_SelectGooglePhotosPhoto_ParamsSpec, 'ash.personalization_app.mojom.WallpaperProvider_SelectGooglePhotosPhoto_Params', [
      mojo.internal.StructField('arg_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_layout', 8, 0, mojo.internal.bindings.ash.personalization_app.mojom.WallpaperLayoutSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_preview_mode', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.personalization_app.mojom.WallpaperProvider_SelectGooglePhotosPhoto_ResponseParamsSpec, 'ash.personalization_app.mojom.WallpaperProvider_SelectGooglePhotosPhoto_ResponseParams', [
      mojo.internal.StructField('arg_success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.personalization_app.mojom.WallpaperProvider_SelectGooglePhotosAlbum_ParamsSpec, 'ash.personalization_app.mojom.WallpaperProvider_SelectGooglePhotosAlbum_Params', [
      mojo.internal.StructField('arg_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.personalization_app.mojom.WallpaperProvider_SelectGooglePhotosAlbum_ResponseParamsSpec, 'ash.personalization_app.mojom.WallpaperProvider_SelectGooglePhotosAlbum_ResponseParams', [
      mojo.internal.StructField('arg_success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.personalization_app.mojom.WallpaperProvider_GetGooglePhotosDailyRefreshAlbumId_ParamsSpec, 'ash.personalization_app.mojom.WallpaperProvider_GetGooglePhotosDailyRefreshAlbumId_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.personalization_app.mojom.WallpaperProvider_GetGooglePhotosDailyRefreshAlbumId_ResponseParamsSpec, 'ash.personalization_app.mojom.WallpaperProvider_GetGooglePhotosDailyRefreshAlbumId_ResponseParams', [
      mojo.internal.StructField('arg_album_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.personalization_app.mojom.WallpaperProvider_SetCurrentWallpaperLayout_ParamsSpec, 'ash.personalization_app.mojom.WallpaperProvider_SetCurrentWallpaperLayout_Params', [
      mojo.internal.StructField('arg_layout', 0, 0, mojo.internal.bindings.ash.personalization_app.mojom.WallpaperLayoutSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.personalization_app.mojom.WallpaperProvider_SetDailyRefreshCollectionId_ParamsSpec, 'ash.personalization_app.mojom.WallpaperProvider_SetDailyRefreshCollectionId_Params', [
      mojo.internal.StructField('arg_collection_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.personalization_app.mojom.WallpaperProvider_SetDailyRefreshCollectionId_ResponseParamsSpec, 'ash.personalization_app.mojom.WallpaperProvider_SetDailyRefreshCollectionId_ResponseParams', [
      mojo.internal.StructField('arg_success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.personalization_app.mojom.WallpaperProvider_GetDailyRefreshCollectionId_ParamsSpec, 'ash.personalization_app.mojom.WallpaperProvider_GetDailyRefreshCollectionId_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.personalization_app.mojom.WallpaperProvider_GetDailyRefreshCollectionId_ResponseParamsSpec, 'ash.personalization_app.mojom.WallpaperProvider_GetDailyRefreshCollectionId_ResponseParams', [
      mojo.internal.StructField('arg_collection_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.personalization_app.mojom.WallpaperProvider_UpdateDailyRefreshWallpaper_ParamsSpec, 'ash.personalization_app.mojom.WallpaperProvider_UpdateDailyRefreshWallpaper_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.personalization_app.mojom.WallpaperProvider_UpdateDailyRefreshWallpaper_ResponseParamsSpec, 'ash.personalization_app.mojom.WallpaperProvider_UpdateDailyRefreshWallpaper_ResponseParams', [
      mojo.internal.StructField('arg_success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.personalization_app.mojom.WallpaperProvider_IsInTabletMode_ParamsSpec, 'ash.personalization_app.mojom.WallpaperProvider_IsInTabletMode_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.personalization_app.mojom.WallpaperProvider_IsInTabletMode_ResponseParamsSpec, 'ash.personalization_app.mojom.WallpaperProvider_IsInTabletMode_ResponseParams', [
      mojo.internal.StructField('arg_tablet_mode', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.personalization_app.mojom.WallpaperProvider_ConfirmPreviewWallpaper_ParamsSpec, 'ash.personalization_app.mojom.WallpaperProvider_ConfirmPreviewWallpaper_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.personalization_app.mojom.WallpaperProvider_CancelPreviewWallpaper_ParamsSpec, 'ash.personalization_app.mojom.WallpaperProvider_CancelPreviewWallpaper_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.personalization_app.mojom.WallpaperProvider_ShouldShowTimeOfDayWallpaperDialog_ParamsSpec, 'ash.personalization_app.mojom.WallpaperProvider_ShouldShowTimeOfDayWallpaperDialog_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.personalization_app.mojom.WallpaperProvider_ShouldShowTimeOfDayWallpaperDialog_ResponseParamsSpec, 'ash.personalization_app.mojom.WallpaperProvider_ShouldShowTimeOfDayWallpaperDialog_ResponseParams', [
      mojo.internal.StructField('arg_should_show_dialog', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.ash.personalization_app.mojom.WallpaperProviderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.ash.personalization_app.mojom.WallpaperProviderRemote = class {
  static get $interfaceName() {
    return 'ash.personalization_app.mojom.WallpaperProvider';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.ash.personalization_app.mojom.WallpaperProviderPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.ash.personalization_app.mojom.WallpaperProviderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  makeTransparent() {
    return this.$.makeTransparent();
  }
  makeOpaque() {
    return this.$.makeOpaque();
  }
  fetchCollections() {
    return this.$.fetchCollections();
  }
  fetchImagesForCollection(arg_collection_id) {
    return this.$.fetchImagesForCollection(arg_collection_id);
  }
  fetchGooglePhotosAlbums(arg_resume_token) {
    return this.$.fetchGooglePhotosAlbums(arg_resume_token);
  }
  fetchGooglePhotosSharedAlbums(arg_resume_token) {
    return this.$.fetchGooglePhotosSharedAlbums(arg_resume_token);
  }
  fetchGooglePhotosEnabled() {
    return this.$.fetchGooglePhotosEnabled();
  }
  fetchGooglePhotosPhotos(arg_item_id, arg_album_id, arg_resume_token) {
    return this.$.fetchGooglePhotosPhotos(arg_item_id, arg_album_id, arg_resume_token);
  }
  getLocalImages() {
    return this.$.getLocalImages();
  }
  getDefaultImageThumbnail() {
    return this.$.getDefaultImageThumbnail();
  }
  getLocalImageThumbnail(arg_file_path) {
    return this.$.getLocalImageThumbnail(arg_file_path);
  }
  setWallpaperObserver(arg_observer) {
    return this.$.setWallpaperObserver(arg_observer);
  }
  selectWallpaper(arg_unit_id, arg_preview_mode) {
    return this.$.selectWallpaper(arg_unit_id, arg_preview_mode);
  }
  selectDefaultImage() {
    return this.$.selectDefaultImage();
  }
  selectLocalImage(arg_path, arg_layout, arg_preview_mode) {
    return this.$.selectLocalImage(arg_path, arg_layout, arg_preview_mode);
  }
  selectGooglePhotosPhoto(arg_id, arg_layout, arg_preview_mode) {
    return this.$.selectGooglePhotosPhoto(arg_id, arg_layout, arg_preview_mode);
  }
  selectGooglePhotosAlbum(arg_id) {
    return this.$.selectGooglePhotosAlbum(arg_id);
  }
  getGooglePhotosDailyRefreshAlbumId() {
    return this.$.getGooglePhotosDailyRefreshAlbumId();
  }
  setCurrentWallpaperLayout(arg_layout) {
    return this.$.setCurrentWallpaperLayout(arg_layout);
  }
  setDailyRefreshCollectionId(arg_collection_id) {
    return this.$.setDailyRefreshCollectionId(arg_collection_id);
  }
  getDailyRefreshCollectionId() {
    return this.$.getDailyRefreshCollectionId();
  }
  updateDailyRefreshWallpaper() {
    return this.$.updateDailyRefreshWallpaper();
  }
  isInTabletMode() {
    return this.$.isInTabletMode();
  }
  confirmPreviewWallpaper() {
    return this.$.confirmPreviewWallpaper();
  }
  cancelPreviewWallpaper() {
    return this.$.cancelPreviewWallpaper();
  }
  shouldShowTimeOfDayWallpaperDialog() {
    return this.$.shouldShowTimeOfDayWallpaperDialog();
  }
};

mojo.internal.bindings.ash.personalization_app.mojom.WallpaperProviderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('WallpaperProvider', [
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

  makeTransparent() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.ash.personalization_app.mojom.WallpaperProvider_MakeTransparent_ParamsSpec,
      null,
      [],
      false);
  }

  makeOpaque() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.ash.personalization_app.mojom.WallpaperProvider_MakeOpaque_ParamsSpec,
      null,
      [],
      false);
  }

  fetchCollections() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.ash.personalization_app.mojom.WallpaperProvider_FetchCollections_ParamsSpec,
      mojo.internal.bindings.ash.personalization_app.mojom.WallpaperProvider_FetchCollections_ResponseParamsSpec,
      [],
      false);
  }

  fetchImagesForCollection(arg_collection_id) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.ash.personalization_app.mojom.WallpaperProvider_FetchImagesForCollection_ParamsSpec,
      mojo.internal.bindings.ash.personalization_app.mojom.WallpaperProvider_FetchImagesForCollection_ResponseParamsSpec,
      [arg_collection_id],
      false);
  }

  fetchGooglePhotosAlbums(arg_resume_token) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.ash.personalization_app.mojom.WallpaperProvider_FetchGooglePhotosAlbums_ParamsSpec,
      mojo.internal.bindings.ash.personalization_app.mojom.WallpaperProvider_FetchGooglePhotosAlbums_ResponseParamsSpec,
      [arg_resume_token],
      false);
  }

  fetchGooglePhotosSharedAlbums(arg_resume_token) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojo.internal.bindings.ash.personalization_app.mojom.WallpaperProvider_FetchGooglePhotosSharedAlbums_ParamsSpec,
      mojo.internal.bindings.ash.personalization_app.mojom.WallpaperProvider_FetchGooglePhotosSharedAlbums_ResponseParamsSpec,
      [arg_resume_token],
      false);
  }

  fetchGooglePhotosEnabled() {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      mojo.internal.bindings.ash.personalization_app.mojom.WallpaperProvider_FetchGooglePhotosEnabled_ParamsSpec,
      mojo.internal.bindings.ash.personalization_app.mojom.WallpaperProvider_FetchGooglePhotosEnabled_ResponseParamsSpec,
      [],
      false);
  }

  fetchGooglePhotosPhotos(arg_item_id, arg_album_id, arg_resume_token) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      mojo.internal.bindings.ash.personalization_app.mojom.WallpaperProvider_FetchGooglePhotosPhotos_ParamsSpec,
      mojo.internal.bindings.ash.personalization_app.mojom.WallpaperProvider_FetchGooglePhotosPhotos_ResponseParamsSpec,
      [arg_item_id, arg_album_id, arg_resume_token],
      false);
  }

  getLocalImages() {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      mojo.internal.bindings.ash.personalization_app.mojom.WallpaperProvider_GetLocalImages_ParamsSpec,
      mojo.internal.bindings.ash.personalization_app.mojom.WallpaperProvider_GetLocalImages_ResponseParamsSpec,
      [],
      false);
  }

  getDefaultImageThumbnail() {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      mojo.internal.bindings.ash.personalization_app.mojom.WallpaperProvider_GetDefaultImageThumbnail_ParamsSpec,
      mojo.internal.bindings.ash.personalization_app.mojom.WallpaperProvider_GetDefaultImageThumbnail_ResponseParamsSpec,
      [],
      false);
  }

  getLocalImageThumbnail(arg_file_path) {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      mojo.internal.bindings.ash.personalization_app.mojom.WallpaperProvider_GetLocalImageThumbnail_ParamsSpec,
      mojo.internal.bindings.ash.personalization_app.mojom.WallpaperProvider_GetLocalImageThumbnail_ResponseParamsSpec,
      [arg_file_path],
      false);
  }

  setWallpaperObserver(arg_observer) {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      mojo.internal.bindings.ash.personalization_app.mojom.WallpaperProvider_SetWallpaperObserver_ParamsSpec,
      null,
      [arg_observer],
      false);
  }

  selectWallpaper(arg_unit_id, arg_preview_mode) {
    return this.proxy.sendMessage(
      this.ordinals[12],  // ordinal
      mojo.internal.bindings.ash.personalization_app.mojom.WallpaperProvider_SelectWallpaper_ParamsSpec,
      mojo.internal.bindings.ash.personalization_app.mojom.WallpaperProvider_SelectWallpaper_ResponseParamsSpec,
      [arg_unit_id, arg_preview_mode],
      false);
  }

  selectDefaultImage() {
    return this.proxy.sendMessage(
      this.ordinals[13],  // ordinal
      mojo.internal.bindings.ash.personalization_app.mojom.WallpaperProvider_SelectDefaultImage_ParamsSpec,
      mojo.internal.bindings.ash.personalization_app.mojom.WallpaperProvider_SelectDefaultImage_ResponseParamsSpec,
      [],
      false);
  }

  selectLocalImage(arg_path, arg_layout, arg_preview_mode) {
    return this.proxy.sendMessage(
      this.ordinals[14],  // ordinal
      mojo.internal.bindings.ash.personalization_app.mojom.WallpaperProvider_SelectLocalImage_ParamsSpec,
      mojo.internal.bindings.ash.personalization_app.mojom.WallpaperProvider_SelectLocalImage_ResponseParamsSpec,
      [arg_path, arg_layout, arg_preview_mode],
      false);
  }

  selectGooglePhotosPhoto(arg_id, arg_layout, arg_preview_mode) {
    return this.proxy.sendMessage(
      this.ordinals[15],  // ordinal
      mojo.internal.bindings.ash.personalization_app.mojom.WallpaperProvider_SelectGooglePhotosPhoto_ParamsSpec,
      mojo.internal.bindings.ash.personalization_app.mojom.WallpaperProvider_SelectGooglePhotosPhoto_ResponseParamsSpec,
      [arg_id, arg_layout, arg_preview_mode],
      false);
  }

  selectGooglePhotosAlbum(arg_id) {
    return this.proxy.sendMessage(
      this.ordinals[16],  // ordinal
      mojo.internal.bindings.ash.personalization_app.mojom.WallpaperProvider_SelectGooglePhotosAlbum_ParamsSpec,
      mojo.internal.bindings.ash.personalization_app.mojom.WallpaperProvider_SelectGooglePhotosAlbum_ResponseParamsSpec,
      [arg_id],
      false);
  }

  getGooglePhotosDailyRefreshAlbumId() {
    return this.proxy.sendMessage(
      this.ordinals[17],  // ordinal
      mojo.internal.bindings.ash.personalization_app.mojom.WallpaperProvider_GetGooglePhotosDailyRefreshAlbumId_ParamsSpec,
      mojo.internal.bindings.ash.personalization_app.mojom.WallpaperProvider_GetGooglePhotosDailyRefreshAlbumId_ResponseParamsSpec,
      [],
      false);
  }

  setCurrentWallpaperLayout(arg_layout) {
    return this.proxy.sendMessage(
      this.ordinals[18],  // ordinal
      mojo.internal.bindings.ash.personalization_app.mojom.WallpaperProvider_SetCurrentWallpaperLayout_ParamsSpec,
      null,
      [arg_layout],
      false);
  }

  setDailyRefreshCollectionId(arg_collection_id) {
    return this.proxy.sendMessage(
      this.ordinals[19],  // ordinal
      mojo.internal.bindings.ash.personalization_app.mojom.WallpaperProvider_SetDailyRefreshCollectionId_ParamsSpec,
      mojo.internal.bindings.ash.personalization_app.mojom.WallpaperProvider_SetDailyRefreshCollectionId_ResponseParamsSpec,
      [arg_collection_id],
      false);
  }

  getDailyRefreshCollectionId() {
    return this.proxy.sendMessage(
      this.ordinals[20],  // ordinal
      mojo.internal.bindings.ash.personalization_app.mojom.WallpaperProvider_GetDailyRefreshCollectionId_ParamsSpec,
      mojo.internal.bindings.ash.personalization_app.mojom.WallpaperProvider_GetDailyRefreshCollectionId_ResponseParamsSpec,
      [],
      false);
  }

  updateDailyRefreshWallpaper() {
    return this.proxy.sendMessage(
      this.ordinals[21],  // ordinal
      mojo.internal.bindings.ash.personalization_app.mojom.WallpaperProvider_UpdateDailyRefreshWallpaper_ParamsSpec,
      mojo.internal.bindings.ash.personalization_app.mojom.WallpaperProvider_UpdateDailyRefreshWallpaper_ResponseParamsSpec,
      [],
      false);
  }

  isInTabletMode() {
    return this.proxy.sendMessage(
      this.ordinals[22],  // ordinal
      mojo.internal.bindings.ash.personalization_app.mojom.WallpaperProvider_IsInTabletMode_ParamsSpec,
      mojo.internal.bindings.ash.personalization_app.mojom.WallpaperProvider_IsInTabletMode_ResponseParamsSpec,
      [],
      false);
  }

  confirmPreviewWallpaper() {
    return this.proxy.sendMessage(
      this.ordinals[23],  // ordinal
      mojo.internal.bindings.ash.personalization_app.mojom.WallpaperProvider_ConfirmPreviewWallpaper_ParamsSpec,
      null,
      [],
      false);
  }

  cancelPreviewWallpaper() {
    return this.proxy.sendMessage(
      this.ordinals[24],  // ordinal
      mojo.internal.bindings.ash.personalization_app.mojom.WallpaperProvider_CancelPreviewWallpaper_ParamsSpec,
      null,
      [],
      false);
  }

  shouldShowTimeOfDayWallpaperDialog() {
    return this.proxy.sendMessage(
      this.ordinals[25],  // ordinal
      mojo.internal.bindings.ash.personalization_app.mojom.WallpaperProvider_ShouldShowTimeOfDayWallpaperDialog_ParamsSpec,
      mojo.internal.bindings.ash.personalization_app.mojom.WallpaperProvider_ShouldShowTimeOfDayWallpaperDialog_ResponseParamsSpec,
      [],
      false);
  }

};

mojo.internal.bindings.ash.personalization_app.mojom.WallpaperProvider.getRemote = function() {
  let remote = new mojo.internal.bindings.ash.personalization_app.mojom.WallpaperProviderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.personalization_app.mojom.WallpaperProvider',
    'context');
  return remote.$;
};

mojo.internal.bindings.ash.personalization_app.mojom.WallpaperProviderReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('WallpaperProvider', [
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
        
        // Try Method 0: MakeTransparent
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.personalization_app.mojom.WallpaperProvider_MakeTransparent_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> MakeTransparent (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: MakeOpaque
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.personalization_app.mojom.WallpaperProvider_MakeOpaque_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> MakeOpaque (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: FetchCollections
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.personalization_app.mojom.WallpaperProvider_FetchCollections_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> FetchCollections (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: FetchImagesForCollection
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.personalization_app.mojom.WallpaperProvider_FetchImagesForCollection_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> FetchImagesForCollection (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: FetchGooglePhotosAlbums
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.personalization_app.mojom.WallpaperProvider_FetchGooglePhotosAlbums_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> FetchGooglePhotosAlbums (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: FetchGooglePhotosSharedAlbums
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.personalization_app.mojom.WallpaperProvider_FetchGooglePhotosSharedAlbums_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> FetchGooglePhotosSharedAlbums (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: FetchGooglePhotosEnabled
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.personalization_app.mojom.WallpaperProvider_FetchGooglePhotosEnabled_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> FetchGooglePhotosEnabled (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: FetchGooglePhotosPhotos
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.personalization_app.mojom.WallpaperProvider_FetchGooglePhotosPhotos_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> FetchGooglePhotosPhotos (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: GetLocalImages
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.personalization_app.mojom.WallpaperProvider_GetLocalImages_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetLocalImages (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
           }
        }
        // Try Method 9: GetDefaultImageThumbnail
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.personalization_app.mojom.WallpaperProvider_GetDefaultImageThumbnail_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetDefaultImageThumbnail (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 9 failed:', e);
           }
        }
        // Try Method 10: GetLocalImageThumbnail
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.personalization_app.mojom.WallpaperProvider_GetLocalImageThumbnail_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetLocalImageThumbnail (10)');
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 10 failed:', e);
           }
        }
        // Try Method 11: SetWallpaperObserver
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.personalization_app.mojom.WallpaperProvider_SetWallpaperObserver_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetWallpaperObserver (11)');
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 11 failed:', e);
           }
        }
        // Try Method 12: SelectWallpaper
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.personalization_app.mojom.WallpaperProvider_SelectWallpaper_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SelectWallpaper (12)');
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 12 failed:', e);
           }
        }
        // Try Method 13: SelectDefaultImage
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.personalization_app.mojom.WallpaperProvider_SelectDefaultImage_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SelectDefaultImage (13)');
             this.mapOrdinal(header.ordinal, 13);
             dispatchId = 13;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 13 failed:', e);
           }
        }
        // Try Method 14: SelectLocalImage
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.personalization_app.mojom.WallpaperProvider_SelectLocalImage_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SelectLocalImage (14)');
             this.mapOrdinal(header.ordinal, 14);
             dispatchId = 14;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 14 failed:', e);
           }
        }
        // Try Method 15: SelectGooglePhotosPhoto
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.personalization_app.mojom.WallpaperProvider_SelectGooglePhotosPhoto_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SelectGooglePhotosPhoto (15)');
             this.mapOrdinal(header.ordinal, 15);
             dispatchId = 15;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 15 failed:', e);
           }
        }
        // Try Method 16: SelectGooglePhotosAlbum
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.personalization_app.mojom.WallpaperProvider_SelectGooglePhotosAlbum_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SelectGooglePhotosAlbum (16)');
             this.mapOrdinal(header.ordinal, 16);
             dispatchId = 16;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 16 failed:', e);
           }
        }
        // Try Method 17: GetGooglePhotosDailyRefreshAlbumId
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.personalization_app.mojom.WallpaperProvider_GetGooglePhotosDailyRefreshAlbumId_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetGooglePhotosDailyRefreshAlbumId (17)');
             this.mapOrdinal(header.ordinal, 17);
             dispatchId = 17;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 17 failed:', e);
           }
        }
        // Try Method 18: SetCurrentWallpaperLayout
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.personalization_app.mojom.WallpaperProvider_SetCurrentWallpaperLayout_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetCurrentWallpaperLayout (18)');
             this.mapOrdinal(header.ordinal, 18);
             dispatchId = 18;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 18 failed:', e);
           }
        }
        // Try Method 19: SetDailyRefreshCollectionId
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.personalization_app.mojom.WallpaperProvider_SetDailyRefreshCollectionId_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetDailyRefreshCollectionId (19)');
             this.mapOrdinal(header.ordinal, 19);
             dispatchId = 19;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 19 failed:', e);
           }
        }
        // Try Method 20: GetDailyRefreshCollectionId
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.personalization_app.mojom.WallpaperProvider_GetDailyRefreshCollectionId_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetDailyRefreshCollectionId (20)');
             this.mapOrdinal(header.ordinal, 20);
             dispatchId = 20;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 20 failed:', e);
           }
        }
        // Try Method 21: UpdateDailyRefreshWallpaper
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.personalization_app.mojom.WallpaperProvider_UpdateDailyRefreshWallpaper_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UpdateDailyRefreshWallpaper (21)');
             this.mapOrdinal(header.ordinal, 21);
             dispatchId = 21;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 21 failed:', e);
           }
        }
        // Try Method 22: IsInTabletMode
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.personalization_app.mojom.WallpaperProvider_IsInTabletMode_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> IsInTabletMode (22)');
             this.mapOrdinal(header.ordinal, 22);
             dispatchId = 22;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 22 failed:', e);
           }
        }
        // Try Method 23: ConfirmPreviewWallpaper
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.personalization_app.mojom.WallpaperProvider_ConfirmPreviewWallpaper_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ConfirmPreviewWallpaper (23)');
             this.mapOrdinal(header.ordinal, 23);
             dispatchId = 23;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 23 failed:', e);
           }
        }
        // Try Method 24: CancelPreviewWallpaper
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.personalization_app.mojom.WallpaperProvider_CancelPreviewWallpaper_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CancelPreviewWallpaper (24)');
             this.mapOrdinal(header.ordinal, 24);
             dispatchId = 24;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 24 failed:', e);
           }
        }
        // Try Method 25: ShouldShowTimeOfDayWallpaperDialog
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.personalization_app.mojom.WallpaperProvider_ShouldShowTimeOfDayWallpaperDialog_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ShouldShowTimeOfDayWallpaperDialog (25)');
             this.mapOrdinal(header.ordinal, 25);
             dispatchId = 25;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 25 failed:', e);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.personalization_app.mojom.WallpaperProvider_MakeTransparent_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.makeTransparent');
          const result = this.impl.makeTransparent();
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.personalization_app.mojom.WallpaperProvider_MakeOpaque_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.makeOpaque');
          const result = this.impl.makeOpaque();
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.personalization_app.mojom.WallpaperProvider_FetchCollections_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.fetchCollections');
          const result = this.impl.fetchCollections();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.personalization_app.mojom.WallpaperProvider_FetchCollections_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] FetchCollections FAILED:', e));
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.personalization_app.mojom.WallpaperProvider_FetchImagesForCollection_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.fetchImagesForCollection');
          const result = this.impl.fetchImagesForCollection(params.arg_collection_id);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.personalization_app.mojom.WallpaperProvider_FetchImagesForCollection_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] FetchImagesForCollection FAILED:', e));
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.personalization_app.mojom.WallpaperProvider_FetchGooglePhotosAlbums_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.fetchGooglePhotosAlbums');
          const result = this.impl.fetchGooglePhotosAlbums(params.arg_resume_token);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.personalization_app.mojom.WallpaperProvider_FetchGooglePhotosAlbums_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] FetchGooglePhotosAlbums FAILED:', e));
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.personalization_app.mojom.WallpaperProvider_FetchGooglePhotosSharedAlbums_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.fetchGooglePhotosSharedAlbums');
          const result = this.impl.fetchGooglePhotosSharedAlbums(params.arg_resume_token);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.personalization_app.mojom.WallpaperProvider_FetchGooglePhotosSharedAlbums_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] FetchGooglePhotosSharedAlbums FAILED:', e));
          }
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.personalization_app.mojom.WallpaperProvider_FetchGooglePhotosEnabled_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.fetchGooglePhotosEnabled');
          const result = this.impl.fetchGooglePhotosEnabled();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.personalization_app.mojom.WallpaperProvider_FetchGooglePhotosEnabled_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] FetchGooglePhotosEnabled FAILED:', e));
          }
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.personalization_app.mojom.WallpaperProvider_FetchGooglePhotosPhotos_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.fetchGooglePhotosPhotos');
          const result = this.impl.fetchGooglePhotosPhotos(params.arg_item_id, params.arg_album_id, params.arg_resume_token);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.personalization_app.mojom.WallpaperProvider_FetchGooglePhotosPhotos_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] FetchGooglePhotosPhotos FAILED:', e));
          }
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.personalization_app.mojom.WallpaperProvider_GetLocalImages_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getLocalImages');
          const result = this.impl.getLocalImages();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.personalization_app.mojom.WallpaperProvider_GetLocalImages_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetLocalImages FAILED:', e));
          }
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.personalization_app.mojom.WallpaperProvider_GetDefaultImageThumbnail_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getDefaultImageThumbnail');
          const result = this.impl.getDefaultImageThumbnail();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.personalization_app.mojom.WallpaperProvider_GetDefaultImageThumbnail_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetDefaultImageThumbnail FAILED:', e));
          }
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.personalization_app.mojom.WallpaperProvider_GetLocalImageThumbnail_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getLocalImageThumbnail');
          const result = this.impl.getLocalImageThumbnail(params.arg_file_path);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.personalization_app.mojom.WallpaperProvider_GetLocalImageThumbnail_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetLocalImageThumbnail FAILED:', e));
          }
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.personalization_app.mojom.WallpaperProvider_SetWallpaperObserver_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setWallpaperObserver');
          const result = this.impl.setWallpaperObserver(params.arg_observer);
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.personalization_app.mojom.WallpaperProvider_SelectWallpaper_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.selectWallpaper');
          const result = this.impl.selectWallpaper(params.arg_unit_id, params.arg_preview_mode);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.personalization_app.mojom.WallpaperProvider_SelectWallpaper_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] SelectWallpaper FAILED:', e));
          }
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.personalization_app.mojom.WallpaperProvider_SelectDefaultImage_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.selectDefaultImage');
          const result = this.impl.selectDefaultImage();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.personalization_app.mojom.WallpaperProvider_SelectDefaultImage_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] SelectDefaultImage FAILED:', e));
          }
          break;
        }
        case 14: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.personalization_app.mojom.WallpaperProvider_SelectLocalImage_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.selectLocalImage');
          const result = this.impl.selectLocalImage(params.arg_path, params.arg_layout, params.arg_preview_mode);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.personalization_app.mojom.WallpaperProvider_SelectLocalImage_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] SelectLocalImage FAILED:', e));
          }
          break;
        }
        case 15: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.personalization_app.mojom.WallpaperProvider_SelectGooglePhotosPhoto_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.selectGooglePhotosPhoto');
          const result = this.impl.selectGooglePhotosPhoto(params.arg_id, params.arg_layout, params.arg_preview_mode);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.personalization_app.mojom.WallpaperProvider_SelectGooglePhotosPhoto_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] SelectGooglePhotosPhoto FAILED:', e));
          }
          break;
        }
        case 16: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.personalization_app.mojom.WallpaperProvider_SelectGooglePhotosAlbum_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.selectGooglePhotosAlbum');
          const result = this.impl.selectGooglePhotosAlbum(params.arg_id);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.personalization_app.mojom.WallpaperProvider_SelectGooglePhotosAlbum_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] SelectGooglePhotosAlbum FAILED:', e));
          }
          break;
        }
        case 17: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.personalization_app.mojom.WallpaperProvider_GetGooglePhotosDailyRefreshAlbumId_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getGooglePhotosDailyRefreshAlbumId');
          const result = this.impl.getGooglePhotosDailyRefreshAlbumId();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.personalization_app.mojom.WallpaperProvider_GetGooglePhotosDailyRefreshAlbumId_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetGooglePhotosDailyRefreshAlbumId FAILED:', e));
          }
          break;
        }
        case 18: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.personalization_app.mojom.WallpaperProvider_SetCurrentWallpaperLayout_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setCurrentWallpaperLayout');
          const result = this.impl.setCurrentWallpaperLayout(params.arg_layout);
          break;
        }
        case 19: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.personalization_app.mojom.WallpaperProvider_SetDailyRefreshCollectionId_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setDailyRefreshCollectionId');
          const result = this.impl.setDailyRefreshCollectionId(params.arg_collection_id);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.personalization_app.mojom.WallpaperProvider_SetDailyRefreshCollectionId_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] SetDailyRefreshCollectionId FAILED:', e));
          }
          break;
        }
        case 20: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.personalization_app.mojom.WallpaperProvider_GetDailyRefreshCollectionId_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getDailyRefreshCollectionId');
          const result = this.impl.getDailyRefreshCollectionId();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.personalization_app.mojom.WallpaperProvider_GetDailyRefreshCollectionId_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetDailyRefreshCollectionId FAILED:', e));
          }
          break;
        }
        case 21: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.personalization_app.mojom.WallpaperProvider_UpdateDailyRefreshWallpaper_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.updateDailyRefreshWallpaper');
          const result = this.impl.updateDailyRefreshWallpaper();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.personalization_app.mojom.WallpaperProvider_UpdateDailyRefreshWallpaper_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] UpdateDailyRefreshWallpaper FAILED:', e));
          }
          break;
        }
        case 22: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.personalization_app.mojom.WallpaperProvider_IsInTabletMode_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.isInTabletMode');
          const result = this.impl.isInTabletMode();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.personalization_app.mojom.WallpaperProvider_IsInTabletMode_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] IsInTabletMode FAILED:', e));
          }
          break;
        }
        case 23: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.personalization_app.mojom.WallpaperProvider_ConfirmPreviewWallpaper_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.confirmPreviewWallpaper');
          const result = this.impl.confirmPreviewWallpaper();
          break;
        }
        case 24: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.personalization_app.mojom.WallpaperProvider_CancelPreviewWallpaper_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.cancelPreviewWallpaper');
          const result = this.impl.cancelPreviewWallpaper();
          break;
        }
        case 25: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.personalization_app.mojom.WallpaperProvider_ShouldShowTimeOfDayWallpaperDialog_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.shouldShowTimeOfDayWallpaperDialog');
          const result = this.impl.shouldShowTimeOfDayWallpaperDialog();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.personalization_app.mojom.WallpaperProvider_ShouldShowTimeOfDayWallpaperDialog_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] ShouldShowTimeOfDayWallpaperDialog FAILED:', e));
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

mojo.internal.bindings.ash.personalization_app.mojom.WallpaperProviderReceiver = mojo.internal.bindings.ash.personalization_app.mojom.WallpaperProviderReceiver;

mojo.internal.bindings.ash.personalization_app.mojom.WallpaperProviderPtr = mojo.internal.bindings.ash.personalization_app.mojom.WallpaperProviderRemote;
mojo.internal.bindings.ash.personalization_app.mojom.WallpaperProviderRequest = mojo.internal.bindings.ash.personalization_app.mojom.WallpaperProviderPendingReceiver;


// Interface: ThemeObserver
mojo.internal.Struct(
    mojo.internal.bindings.ash.personalization_app.mojom.ThemeObserver_OnColorModeChanged_ParamsSpec, 'ash.personalization_app.mojom.ThemeObserver_OnColorModeChanged_Params', [
      mojo.internal.StructField('arg_dark_mode_enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.personalization_app.mojom.ThemeObserver_OnColorModeAutoScheduleChanged_ParamsSpec, 'ash.personalization_app.mojom.ThemeObserver_OnColorModeAutoScheduleChanged_Params', [
      mojo.internal.StructField('arg_enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.personalization_app.mojom.ThemeObserver_OnColorSchemeChanged_ParamsSpec, 'ash.personalization_app.mojom.ThemeObserver_OnColorSchemeChanged_Params', [
      mojo.internal.StructField('arg_color_scheme', 0, 0, mojo.internal.bindings.ash.style.mojom.ColorSchemeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.personalization_app.mojom.ThemeObserver_OnSampleColorSchemesChanged_ParamsSpec, 'ash.personalization_app.mojom.ThemeObserver_OnSampleColorSchemesChanged_Params', [
      mojo.internal.StructField('arg_sample_color_schemes', 0, 0, mojo.internal.Array(mojo.internal.bindings.ash.personalization_app.mojom.SampleColorSchemeSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.personalization_app.mojom.ThemeObserver_OnStaticColorChanged_ParamsSpec, 'ash.personalization_app.mojom.ThemeObserver_OnStaticColorChanged_Params', [
      mojo.internal.StructField('arg_color', 0, 0, mojo.internal.bindings.skia.mojom.SkColorSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.personalization_app.mojom.ThemeObserver_OnGeolocationPermissionForSystemServicesChanged_ParamsSpec, 'ash.personalization_app.mojom.ThemeObserver_OnGeolocationPermissionForSystemServicesChanged_Params', [
      mojo.internal.StructField('arg_enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_is_user_modifiable', 0, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.personalization_app.mojom.ThemeObserver_OnDaylightTimeChanged_ParamsSpec, 'ash.personalization_app.mojom.ThemeObserver_OnDaylightTimeChanged_Params', [
      mojo.internal.StructField('arg_sunrise_time', 0, 0, mojo.internal.bindings.mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_sunset_time', 8, 0, mojo.internal.bindings.mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.bindings.ash.personalization_app.mojom.ThemeObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.ash.personalization_app.mojom.ThemeObserverRemote = class {
  static get $interfaceName() {
    return 'ash.personalization_app.mojom.ThemeObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.ash.personalization_app.mojom.ThemeObserverPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.ash.personalization_app.mojom.ThemeObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onColorModeChanged(arg_dark_mode_enabled) {
    return this.$.onColorModeChanged(arg_dark_mode_enabled);
  }
  onColorModeAutoScheduleChanged(arg_enabled) {
    return this.$.onColorModeAutoScheduleChanged(arg_enabled);
  }
  onColorSchemeChanged(arg_color_scheme) {
    return this.$.onColorSchemeChanged(arg_color_scheme);
  }
  onSampleColorSchemesChanged(arg_sample_color_schemes) {
    return this.$.onSampleColorSchemesChanged(arg_sample_color_schemes);
  }
  onStaticColorChanged(arg_color) {
    return this.$.onStaticColorChanged(arg_color);
  }
  onGeolocationPermissionForSystemServicesChanged(arg_enabled, arg_is_user_modifiable) {
    return this.$.onGeolocationPermissionForSystemServicesChanged(arg_enabled, arg_is_user_modifiable);
  }
  onDaylightTimeChanged(arg_sunrise_time, arg_sunset_time) {
    return this.$.onDaylightTimeChanged(arg_sunrise_time, arg_sunset_time);
  }
};

mojo.internal.bindings.ash.personalization_app.mojom.ThemeObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ThemeObserver', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  onColorModeChanged(arg_dark_mode_enabled) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.ash.personalization_app.mojom.ThemeObserver_OnColorModeChanged_ParamsSpec,
      null,
      [arg_dark_mode_enabled],
      false);
  }

  onColorModeAutoScheduleChanged(arg_enabled) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.ash.personalization_app.mojom.ThemeObserver_OnColorModeAutoScheduleChanged_ParamsSpec,
      null,
      [arg_enabled],
      false);
  }

  onColorSchemeChanged(arg_color_scheme) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.ash.personalization_app.mojom.ThemeObserver_OnColorSchemeChanged_ParamsSpec,
      null,
      [arg_color_scheme],
      false);
  }

  onSampleColorSchemesChanged(arg_sample_color_schemes) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.ash.personalization_app.mojom.ThemeObserver_OnSampleColorSchemesChanged_ParamsSpec,
      null,
      [arg_sample_color_schemes],
      false);
  }

  onStaticColorChanged(arg_color) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.ash.personalization_app.mojom.ThemeObserver_OnStaticColorChanged_ParamsSpec,
      null,
      [arg_color],
      false);
  }

  onGeolocationPermissionForSystemServicesChanged(arg_enabled, arg_is_user_modifiable) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojo.internal.bindings.ash.personalization_app.mojom.ThemeObserver_OnGeolocationPermissionForSystemServicesChanged_ParamsSpec,
      null,
      [arg_enabled, arg_is_user_modifiable],
      false);
  }

  onDaylightTimeChanged(arg_sunrise_time, arg_sunset_time) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      mojo.internal.bindings.ash.personalization_app.mojom.ThemeObserver_OnDaylightTimeChanged_ParamsSpec,
      null,
      [arg_sunrise_time, arg_sunset_time],
      false);
  }

};

mojo.internal.bindings.ash.personalization_app.mojom.ThemeObserver.getRemote = function() {
  let remote = new mojo.internal.bindings.ash.personalization_app.mojom.ThemeObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.personalization_app.mojom.ThemeObserver',
    'context');
  return remote.$;
};

mojo.internal.bindings.ash.personalization_app.mojom.ThemeObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ThemeObserver', [
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
        
        // Try Method 0: OnColorModeChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.personalization_app.mojom.ThemeObserver_OnColorModeChanged_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnColorModeChanged (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: OnColorModeAutoScheduleChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.personalization_app.mojom.ThemeObserver_OnColorModeAutoScheduleChanged_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnColorModeAutoScheduleChanged (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: OnColorSchemeChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.personalization_app.mojom.ThemeObserver_OnColorSchemeChanged_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnColorSchemeChanged (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: OnSampleColorSchemesChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.personalization_app.mojom.ThemeObserver_OnSampleColorSchemesChanged_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnSampleColorSchemesChanged (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: OnStaticColorChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.personalization_app.mojom.ThemeObserver_OnStaticColorChanged_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnStaticColorChanged (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: OnGeolocationPermissionForSystemServicesChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.personalization_app.mojom.ThemeObserver_OnGeolocationPermissionForSystemServicesChanged_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnGeolocationPermissionForSystemServicesChanged (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: OnDaylightTimeChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.personalization_app.mojom.ThemeObserver_OnDaylightTimeChanged_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnDaylightTimeChanged (6)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.personalization_app.mojom.ThemeObserver_OnColorModeChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onColorModeChanged');
          const result = this.impl.onColorModeChanged(params.arg_dark_mode_enabled);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.personalization_app.mojom.ThemeObserver_OnColorModeAutoScheduleChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onColorModeAutoScheduleChanged');
          const result = this.impl.onColorModeAutoScheduleChanged(params.arg_enabled);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.personalization_app.mojom.ThemeObserver_OnColorSchemeChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onColorSchemeChanged');
          const result = this.impl.onColorSchemeChanged(params.arg_color_scheme);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.personalization_app.mojom.ThemeObserver_OnSampleColorSchemesChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onSampleColorSchemesChanged');
          const result = this.impl.onSampleColorSchemesChanged(params.arg_sample_color_schemes);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.personalization_app.mojom.ThemeObserver_OnStaticColorChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onStaticColorChanged');
          const result = this.impl.onStaticColorChanged(params.arg_color);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.personalization_app.mojom.ThemeObserver_OnGeolocationPermissionForSystemServicesChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onGeolocationPermissionForSystemServicesChanged');
          const result = this.impl.onGeolocationPermissionForSystemServicesChanged(params.arg_enabled, params.arg_is_user_modifiable);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.personalization_app.mojom.ThemeObserver_OnDaylightTimeChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onDaylightTimeChanged');
          const result = this.impl.onDaylightTimeChanged(params.arg_sunrise_time, params.arg_sunset_time);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.ash.personalization_app.mojom.ThemeObserverReceiver = mojo.internal.bindings.ash.personalization_app.mojom.ThemeObserverReceiver;

mojo.internal.bindings.ash.personalization_app.mojom.ThemeObserverPtr = mojo.internal.bindings.ash.personalization_app.mojom.ThemeObserverRemote;
mojo.internal.bindings.ash.personalization_app.mojom.ThemeObserverRequest = mojo.internal.bindings.ash.personalization_app.mojom.ThemeObserverPendingReceiver;


// Interface: ThemeProvider
mojo.internal.Struct(
    mojo.internal.bindings.ash.personalization_app.mojom.ThemeProvider_SetThemeObserver_ParamsSpec, 'ash.personalization_app.mojom.ThemeProvider_SetThemeObserver_Params', [
      mojo.internal.StructField('arg_observer', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.ash.personalization_app.mojom.ThemeObserverSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.personalization_app.mojom.ThemeProvider_SetColorModePref_ParamsSpec, 'ash.personalization_app.mojom.ThemeProvider_SetColorModePref_Params', [
      mojo.internal.StructField('arg_dark_mode_enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.personalization_app.mojom.ThemeProvider_SetColorModeAutoScheduleEnabled_ParamsSpec, 'ash.personalization_app.mojom.ThemeProvider_SetColorModeAutoScheduleEnabled_Params', [
      mojo.internal.StructField('arg_enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.personalization_app.mojom.ThemeProvider_SetColorScheme_ParamsSpec, 'ash.personalization_app.mojom.ThemeProvider_SetColorScheme_Params', [
      mojo.internal.StructField('arg_colorScheme', 0, 0, mojo.internal.bindings.ash.style.mojom.ColorSchemeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.personalization_app.mojom.ThemeProvider_SetStaticColor_ParamsSpec, 'ash.personalization_app.mojom.ThemeProvider_SetStaticColor_Params', [
      mojo.internal.StructField('arg_static_color', 0, 0, mojo.internal.bindings.skia.mojom.SkColorSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.personalization_app.mojom.ThemeProvider_EnableGeolocationForSystemServices_ParamsSpec, 'ash.personalization_app.mojom.ThemeProvider_EnableGeolocationForSystemServices_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.personalization_app.mojom.ThemeProvider_GetColorScheme_ParamsSpec, 'ash.personalization_app.mojom.ThemeProvider_GetColorScheme_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.personalization_app.mojom.ThemeProvider_GetColorScheme_ResponseParamsSpec, 'ash.personalization_app.mojom.ThemeProvider_GetColorScheme_ResponseParams', [
      mojo.internal.StructField('arg_color_scheme', 0, 0, mojo.internal.bindings.ash.style.mojom.ColorSchemeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.personalization_app.mojom.ThemeProvider_GetStaticColor_ParamsSpec, 'ash.personalization_app.mojom.ThemeProvider_GetStaticColor_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.personalization_app.mojom.ThemeProvider_GetStaticColor_ResponseParamsSpec, 'ash.personalization_app.mojom.ThemeProvider_GetStaticColor_ResponseParams', [
      mojo.internal.StructField('arg_static_color', 0, 0, mojo.internal.bindings.skia.mojom.SkColorSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.personalization_app.mojom.ThemeProvider_GenerateSampleColorSchemes_ParamsSpec, 'ash.personalization_app.mojom.ThemeProvider_GenerateSampleColorSchemes_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.personalization_app.mojom.ThemeProvider_GenerateSampleColorSchemes_ResponseParamsSpec, 'ash.personalization_app.mojom.ThemeProvider_GenerateSampleColorSchemes_ResponseParams', [
      mojo.internal.StructField('arg_sample_color_schemes', 0, 0, mojo.internal.Array(mojo.internal.bindings.ash.personalization_app.mojom.SampleColorSchemeSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.personalization_app.mojom.ThemeProvider_IsColorModeAutoScheduleEnabled_ParamsSpec, 'ash.personalization_app.mojom.ThemeProvider_IsColorModeAutoScheduleEnabled_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.personalization_app.mojom.ThemeProvider_IsColorModeAutoScheduleEnabled_ResponseParamsSpec, 'ash.personalization_app.mojom.ThemeProvider_IsColorModeAutoScheduleEnabled_ResponseParams', [
      mojo.internal.StructField('arg_enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.personalization_app.mojom.ThemeProvider_IsDarkModeEnabled_ParamsSpec, 'ash.personalization_app.mojom.ThemeProvider_IsDarkModeEnabled_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.personalization_app.mojom.ThemeProvider_IsDarkModeEnabled_ResponseParamsSpec, 'ash.personalization_app.mojom.ThemeProvider_IsDarkModeEnabled_ResponseParams', [
      mojo.internal.StructField('arg_dark_mode_enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.personalization_app.mojom.ThemeProvider_IsGeolocationEnabledForSystemServices_ParamsSpec, 'ash.personalization_app.mojom.ThemeProvider_IsGeolocationEnabledForSystemServices_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.personalization_app.mojom.ThemeProvider_IsGeolocationEnabledForSystemServices_ResponseParamsSpec, 'ash.personalization_app.mojom.ThemeProvider_IsGeolocationEnabledForSystemServices_ResponseParams', [
      mojo.internal.StructField('arg_geolocation_enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.personalization_app.mojom.ThemeProvider_IsGeolocationUserModifiable_ParamsSpec, 'ash.personalization_app.mojom.ThemeProvider_IsGeolocationUserModifiable_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.personalization_app.mojom.ThemeProvider_IsGeolocationUserModifiable_ResponseParamsSpec, 'ash.personalization_app.mojom.ThemeProvider_IsGeolocationUserModifiable_ResponseParams', [
      mojo.internal.StructField('arg_geolocation_is_user_modifiable', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.ash.personalization_app.mojom.ThemeProviderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.ash.personalization_app.mojom.ThemeProviderRemote = class {
  static get $interfaceName() {
    return 'ash.personalization_app.mojom.ThemeProvider';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.ash.personalization_app.mojom.ThemeProviderPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.ash.personalization_app.mojom.ThemeProviderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  setThemeObserver(arg_observer) {
    return this.$.setThemeObserver(arg_observer);
  }
  setColorModePref(arg_dark_mode_enabled) {
    return this.$.setColorModePref(arg_dark_mode_enabled);
  }
  setColorModeAutoScheduleEnabled(arg_enabled) {
    return this.$.setColorModeAutoScheduleEnabled(arg_enabled);
  }
  setColorScheme(arg_colorScheme) {
    return this.$.setColorScheme(arg_colorScheme);
  }
  setStaticColor(arg_static_color) {
    return this.$.setStaticColor(arg_static_color);
  }
  enableGeolocationForSystemServices() {
    return this.$.enableGeolocationForSystemServices();
  }
  getColorScheme() {
    return this.$.getColorScheme();
  }
  getStaticColor() {
    return this.$.getStaticColor();
  }
  generateSampleColorSchemes() {
    return this.$.generateSampleColorSchemes();
  }
  isColorModeAutoScheduleEnabled() {
    return this.$.isColorModeAutoScheduleEnabled();
  }
  isDarkModeEnabled() {
    return this.$.isDarkModeEnabled();
  }
  isGeolocationEnabledForSystemServices() {
    return this.$.isGeolocationEnabledForSystemServices();
  }
  isGeolocationUserModifiable() {
    return this.$.isGeolocationUserModifiable();
  }
};

mojo.internal.bindings.ash.personalization_app.mojom.ThemeProviderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ThemeProvider', [
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

  setThemeObserver(arg_observer) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.ash.personalization_app.mojom.ThemeProvider_SetThemeObserver_ParamsSpec,
      null,
      [arg_observer],
      false);
  }

  setColorModePref(arg_dark_mode_enabled) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.ash.personalization_app.mojom.ThemeProvider_SetColorModePref_ParamsSpec,
      null,
      [arg_dark_mode_enabled],
      false);
  }

  setColorModeAutoScheduleEnabled(arg_enabled) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.ash.personalization_app.mojom.ThemeProvider_SetColorModeAutoScheduleEnabled_ParamsSpec,
      null,
      [arg_enabled],
      false);
  }

  setColorScheme(arg_colorScheme) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.ash.personalization_app.mojom.ThemeProvider_SetColorScheme_ParamsSpec,
      null,
      [arg_colorScheme],
      false);
  }

  setStaticColor(arg_static_color) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.ash.personalization_app.mojom.ThemeProvider_SetStaticColor_ParamsSpec,
      null,
      [arg_static_color],
      false);
  }

  enableGeolocationForSystemServices() {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojo.internal.bindings.ash.personalization_app.mojom.ThemeProvider_EnableGeolocationForSystemServices_ParamsSpec,
      null,
      [],
      false);
  }

  getColorScheme() {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      mojo.internal.bindings.ash.personalization_app.mojom.ThemeProvider_GetColorScheme_ParamsSpec,
      mojo.internal.bindings.ash.personalization_app.mojom.ThemeProvider_GetColorScheme_ResponseParamsSpec,
      [],
      false);
  }

  getStaticColor() {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      mojo.internal.bindings.ash.personalization_app.mojom.ThemeProvider_GetStaticColor_ParamsSpec,
      mojo.internal.bindings.ash.personalization_app.mojom.ThemeProvider_GetStaticColor_ResponseParamsSpec,
      [],
      false);
  }

  generateSampleColorSchemes() {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      mojo.internal.bindings.ash.personalization_app.mojom.ThemeProvider_GenerateSampleColorSchemes_ParamsSpec,
      mojo.internal.bindings.ash.personalization_app.mojom.ThemeProvider_GenerateSampleColorSchemes_ResponseParamsSpec,
      [],
      false);
  }

  isColorModeAutoScheduleEnabled() {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      mojo.internal.bindings.ash.personalization_app.mojom.ThemeProvider_IsColorModeAutoScheduleEnabled_ParamsSpec,
      mojo.internal.bindings.ash.personalization_app.mojom.ThemeProvider_IsColorModeAutoScheduleEnabled_ResponseParamsSpec,
      [],
      false);
  }

  isDarkModeEnabled() {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      mojo.internal.bindings.ash.personalization_app.mojom.ThemeProvider_IsDarkModeEnabled_ParamsSpec,
      mojo.internal.bindings.ash.personalization_app.mojom.ThemeProvider_IsDarkModeEnabled_ResponseParamsSpec,
      [],
      false);
  }

  isGeolocationEnabledForSystemServices() {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      mojo.internal.bindings.ash.personalization_app.mojom.ThemeProvider_IsGeolocationEnabledForSystemServices_ParamsSpec,
      mojo.internal.bindings.ash.personalization_app.mojom.ThemeProvider_IsGeolocationEnabledForSystemServices_ResponseParamsSpec,
      [],
      false);
  }

  isGeolocationUserModifiable() {
    return this.proxy.sendMessage(
      this.ordinals[12],  // ordinal
      mojo.internal.bindings.ash.personalization_app.mojom.ThemeProvider_IsGeolocationUserModifiable_ParamsSpec,
      mojo.internal.bindings.ash.personalization_app.mojom.ThemeProvider_IsGeolocationUserModifiable_ResponseParamsSpec,
      [],
      false);
  }

};

mojo.internal.bindings.ash.personalization_app.mojom.ThemeProvider.getRemote = function() {
  let remote = new mojo.internal.bindings.ash.personalization_app.mojom.ThemeProviderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.personalization_app.mojom.ThemeProvider',
    'context');
  return remote.$;
};

mojo.internal.bindings.ash.personalization_app.mojom.ThemeProviderReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ThemeProvider', [
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
        
        // Try Method 0: SetThemeObserver
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.personalization_app.mojom.ThemeProvider_SetThemeObserver_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetThemeObserver (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: SetColorModePref
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.personalization_app.mojom.ThemeProvider_SetColorModePref_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetColorModePref (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: SetColorModeAutoScheduleEnabled
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.personalization_app.mojom.ThemeProvider_SetColorModeAutoScheduleEnabled_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetColorModeAutoScheduleEnabled (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: SetColorScheme
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.personalization_app.mojom.ThemeProvider_SetColorScheme_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetColorScheme (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: SetStaticColor
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.personalization_app.mojom.ThemeProvider_SetStaticColor_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetStaticColor (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: EnableGeolocationForSystemServices
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.personalization_app.mojom.ThemeProvider_EnableGeolocationForSystemServices_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> EnableGeolocationForSystemServices (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: GetColorScheme
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.personalization_app.mojom.ThemeProvider_GetColorScheme_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetColorScheme (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: GetStaticColor
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.personalization_app.mojom.ThemeProvider_GetStaticColor_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetStaticColor (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: GenerateSampleColorSchemes
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.personalization_app.mojom.ThemeProvider_GenerateSampleColorSchemes_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GenerateSampleColorSchemes (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
           }
        }
        // Try Method 9: IsColorModeAutoScheduleEnabled
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.personalization_app.mojom.ThemeProvider_IsColorModeAutoScheduleEnabled_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> IsColorModeAutoScheduleEnabled (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 9 failed:', e);
           }
        }
        // Try Method 10: IsDarkModeEnabled
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.personalization_app.mojom.ThemeProvider_IsDarkModeEnabled_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> IsDarkModeEnabled (10)');
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 10 failed:', e);
           }
        }
        // Try Method 11: IsGeolocationEnabledForSystemServices
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.personalization_app.mojom.ThemeProvider_IsGeolocationEnabledForSystemServices_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> IsGeolocationEnabledForSystemServices (11)');
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 11 failed:', e);
           }
        }
        // Try Method 12: IsGeolocationUserModifiable
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.personalization_app.mojom.ThemeProvider_IsGeolocationUserModifiable_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> IsGeolocationUserModifiable (12)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.personalization_app.mojom.ThemeProvider_SetThemeObserver_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setThemeObserver');
          const result = this.impl.setThemeObserver(params.arg_observer);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.personalization_app.mojom.ThemeProvider_SetColorModePref_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setColorModePref');
          const result = this.impl.setColorModePref(params.arg_dark_mode_enabled);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.personalization_app.mojom.ThemeProvider_SetColorModeAutoScheduleEnabled_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setColorModeAutoScheduleEnabled');
          const result = this.impl.setColorModeAutoScheduleEnabled(params.arg_enabled);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.personalization_app.mojom.ThemeProvider_SetColorScheme_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setColorScheme');
          const result = this.impl.setColorScheme(params.arg_colorScheme);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.personalization_app.mojom.ThemeProvider_SetStaticColor_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setStaticColor');
          const result = this.impl.setStaticColor(params.arg_static_color);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.personalization_app.mojom.ThemeProvider_EnableGeolocationForSystemServices_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.enableGeolocationForSystemServices');
          const result = this.impl.enableGeolocationForSystemServices();
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.personalization_app.mojom.ThemeProvider_GetColorScheme_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getColorScheme');
          const result = this.impl.getColorScheme();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.personalization_app.mojom.ThemeProvider_GetColorScheme_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetColorScheme FAILED:', e));
          }
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.personalization_app.mojom.ThemeProvider_GetStaticColor_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getStaticColor');
          const result = this.impl.getStaticColor();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.personalization_app.mojom.ThemeProvider_GetStaticColor_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetStaticColor FAILED:', e));
          }
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.personalization_app.mojom.ThemeProvider_GenerateSampleColorSchemes_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.generateSampleColorSchemes');
          const result = this.impl.generateSampleColorSchemes();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.personalization_app.mojom.ThemeProvider_GenerateSampleColorSchemes_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GenerateSampleColorSchemes FAILED:', e));
          }
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.personalization_app.mojom.ThemeProvider_IsColorModeAutoScheduleEnabled_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.isColorModeAutoScheduleEnabled');
          const result = this.impl.isColorModeAutoScheduleEnabled();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.personalization_app.mojom.ThemeProvider_IsColorModeAutoScheduleEnabled_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] IsColorModeAutoScheduleEnabled FAILED:', e));
          }
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.personalization_app.mojom.ThemeProvider_IsDarkModeEnabled_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.isDarkModeEnabled');
          const result = this.impl.isDarkModeEnabled();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.personalization_app.mojom.ThemeProvider_IsDarkModeEnabled_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] IsDarkModeEnabled FAILED:', e));
          }
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.personalization_app.mojom.ThemeProvider_IsGeolocationEnabledForSystemServices_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.isGeolocationEnabledForSystemServices');
          const result = this.impl.isGeolocationEnabledForSystemServices();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.personalization_app.mojom.ThemeProvider_IsGeolocationEnabledForSystemServices_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] IsGeolocationEnabledForSystemServices FAILED:', e));
          }
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.personalization_app.mojom.ThemeProvider_IsGeolocationUserModifiable_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.isGeolocationUserModifiable');
          const result = this.impl.isGeolocationUserModifiable();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.personalization_app.mojom.ThemeProvider_IsGeolocationUserModifiable_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] IsGeolocationUserModifiable FAILED:', e));
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

mojo.internal.bindings.ash.personalization_app.mojom.ThemeProviderReceiver = mojo.internal.bindings.ash.personalization_app.mojom.ThemeProviderReceiver;

mojo.internal.bindings.ash.personalization_app.mojom.ThemeProviderPtr = mojo.internal.bindings.ash.personalization_app.mojom.ThemeProviderRemote;
mojo.internal.bindings.ash.personalization_app.mojom.ThemeProviderRequest = mojo.internal.bindings.ash.personalization_app.mojom.ThemeProviderPendingReceiver;


// Interface: UserImageObserver
mojo.internal.Struct(
    mojo.internal.bindings.ash.personalization_app.mojom.UserImageObserver_OnUserImageChanged_ParamsSpec, 'ash.personalization_app.mojom.UserImageObserver_OnUserImageChanged_Params', [
      mojo.internal.StructField('arg_user_image', 0, 0, mojo.internal.bindings.ash.personalization_app.mojom.UserImageSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.personalization_app.mojom.UserImageObserver_OnUserProfileImageUpdated_ParamsSpec, 'ash.personalization_app.mojom.UserImageObserver_OnUserProfileImageUpdated_Params', [
      mojo.internal.StructField('arg_profile_image', 0, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.personalization_app.mojom.UserImageObserver_OnCameraPresenceCheckDone_ParamsSpec, 'ash.personalization_app.mojom.UserImageObserver_OnCameraPresenceCheckDone_Params', [
      mojo.internal.StructField('arg_is_camera_present', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.personalization_app.mojom.UserImageObserver_OnIsEnterpriseManagedChanged_ParamsSpec, 'ash.personalization_app.mojom.UserImageObserver_OnIsEnterpriseManagedChanged_Params', [
      mojo.internal.StructField('arg_is_enterprise_managed', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.ash.personalization_app.mojom.UserImageObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.ash.personalization_app.mojom.UserImageObserverRemote = class {
  static get $interfaceName() {
    return 'ash.personalization_app.mojom.UserImageObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.ash.personalization_app.mojom.UserImageObserverPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.ash.personalization_app.mojom.UserImageObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onUserImageChanged(arg_user_image) {
    return this.$.onUserImageChanged(arg_user_image);
  }
  onUserProfileImageUpdated(arg_profile_image) {
    return this.$.onUserProfileImageUpdated(arg_profile_image);
  }
  onCameraPresenceCheckDone(arg_is_camera_present) {
    return this.$.onCameraPresenceCheckDone(arg_is_camera_present);
  }
  onIsEnterpriseManagedChanged(arg_is_enterprise_managed) {
    return this.$.onIsEnterpriseManagedChanged(arg_is_enterprise_managed);
  }
};

mojo.internal.bindings.ash.personalization_app.mojom.UserImageObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('UserImageObserver', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  onUserImageChanged(arg_user_image) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.ash.personalization_app.mojom.UserImageObserver_OnUserImageChanged_ParamsSpec,
      null,
      [arg_user_image],
      false);
  }

  onUserProfileImageUpdated(arg_profile_image) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.ash.personalization_app.mojom.UserImageObserver_OnUserProfileImageUpdated_ParamsSpec,
      null,
      [arg_profile_image],
      false);
  }

  onCameraPresenceCheckDone(arg_is_camera_present) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.ash.personalization_app.mojom.UserImageObserver_OnCameraPresenceCheckDone_ParamsSpec,
      null,
      [arg_is_camera_present],
      false);
  }

  onIsEnterpriseManagedChanged(arg_is_enterprise_managed) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.ash.personalization_app.mojom.UserImageObserver_OnIsEnterpriseManagedChanged_ParamsSpec,
      null,
      [arg_is_enterprise_managed],
      false);
  }

};

mojo.internal.bindings.ash.personalization_app.mojom.UserImageObserver.getRemote = function() {
  let remote = new mojo.internal.bindings.ash.personalization_app.mojom.UserImageObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.personalization_app.mojom.UserImageObserver',
    'context');
  return remote.$;
};

mojo.internal.bindings.ash.personalization_app.mojom.UserImageObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('UserImageObserver', [
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
        
        // Try Method 0: OnUserImageChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.personalization_app.mojom.UserImageObserver_OnUserImageChanged_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnUserImageChanged (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: OnUserProfileImageUpdated
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.personalization_app.mojom.UserImageObserver_OnUserProfileImageUpdated_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnUserProfileImageUpdated (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: OnCameraPresenceCheckDone
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.personalization_app.mojom.UserImageObserver_OnCameraPresenceCheckDone_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnCameraPresenceCheckDone (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: OnIsEnterpriseManagedChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.personalization_app.mojom.UserImageObserver_OnIsEnterpriseManagedChanged_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnIsEnterpriseManagedChanged (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.personalization_app.mojom.UserImageObserver_OnUserImageChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onUserImageChanged');
          const result = this.impl.onUserImageChanged(params.arg_user_image);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.personalization_app.mojom.UserImageObserver_OnUserProfileImageUpdated_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onUserProfileImageUpdated');
          const result = this.impl.onUserProfileImageUpdated(params.arg_profile_image);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.personalization_app.mojom.UserImageObserver_OnCameraPresenceCheckDone_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onCameraPresenceCheckDone');
          const result = this.impl.onCameraPresenceCheckDone(params.arg_is_camera_present);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.personalization_app.mojom.UserImageObserver_OnIsEnterpriseManagedChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onIsEnterpriseManagedChanged');
          const result = this.impl.onIsEnterpriseManagedChanged(params.arg_is_enterprise_managed);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.ash.personalization_app.mojom.UserImageObserverReceiver = mojo.internal.bindings.ash.personalization_app.mojom.UserImageObserverReceiver;

mojo.internal.bindings.ash.personalization_app.mojom.UserImageObserverPtr = mojo.internal.bindings.ash.personalization_app.mojom.UserImageObserverRemote;
mojo.internal.bindings.ash.personalization_app.mojom.UserImageObserverRequest = mojo.internal.bindings.ash.personalization_app.mojom.UserImageObserverPendingReceiver;


// Interface: UserProvider
mojo.internal.Struct(
    mojo.internal.bindings.ash.personalization_app.mojom.UserProvider_SetUserImageObserver_ParamsSpec, 'ash.personalization_app.mojom.UserProvider_SetUserImageObserver_Params', [
      mojo.internal.StructField('arg_observer', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.ash.personalization_app.mojom.UserImageObserverSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.personalization_app.mojom.UserProvider_GetUserInfo_ParamsSpec, 'ash.personalization_app.mojom.UserProvider_GetUserInfo_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.personalization_app.mojom.UserProvider_GetUserInfo_ResponseParamsSpec, 'ash.personalization_app.mojom.UserProvider_GetUserInfo_ResponseParams', [
      mojo.internal.StructField('arg_user_info', 0, 0, mojo.internal.bindings.ash.personalization_app.mojom.UserInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.personalization_app.mojom.UserProvider_GetDefaultUserImages_ParamsSpec, 'ash.personalization_app.mojom.UserProvider_GetDefaultUserImages_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.personalization_app.mojom.UserProvider_GetDefaultUserImages_ResponseParamsSpec, 'ash.personalization_app.mojom.UserProvider_GetDefaultUserImages_ResponseParams', [
      mojo.internal.StructField('arg_default_user_images', 0, 0, mojo.internal.Array(mojo.internal.bindings.ash.personalization_app.mojom.DefaultUserImageSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.personalization_app.mojom.UserProvider_SelectDefaultImage_ParamsSpec, 'ash.personalization_app.mojom.UserProvider_SelectDefaultImage_Params', [
      mojo.internal.StructField('arg_index', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.personalization_app.mojom.UserProvider_SelectProfileImage_ParamsSpec, 'ash.personalization_app.mojom.UserProvider_SelectProfileImage_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.personalization_app.mojom.UserProvider_SelectCameraImage_ParamsSpec, 'ash.personalization_app.mojom.UserProvider_SelectCameraImage_Params', [
      mojo.internal.StructField('arg_data', 0, 0, mojo.internal.bindings.mojo_base.mojom.BigBufferSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.personalization_app.mojom.UserProvider_SelectImageFromDisk_ParamsSpec, 'ash.personalization_app.mojom.UserProvider_SelectImageFromDisk_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.personalization_app.mojom.UserProvider_SelectLastExternalUserImage_ParamsSpec, 'ash.personalization_app.mojom.UserProvider_SelectLastExternalUserImage_Params', [
    ],
    [[0, 8]]);

mojo.internal.bindings.ash.personalization_app.mojom.UserProviderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.ash.personalization_app.mojom.UserProviderRemote = class {
  static get $interfaceName() {
    return 'ash.personalization_app.mojom.UserProvider';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.ash.personalization_app.mojom.UserProviderPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.ash.personalization_app.mojom.UserProviderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  setUserImageObserver(arg_observer) {
    return this.$.setUserImageObserver(arg_observer);
  }
  getUserInfo() {
    return this.$.getUserInfo();
  }
  getDefaultUserImages() {
    return this.$.getDefaultUserImages();
  }
  selectDefaultImage(arg_index) {
    return this.$.selectDefaultImage(arg_index);
  }
  selectProfileImage() {
    return this.$.selectProfileImage();
  }
  selectCameraImage(arg_data) {
    return this.$.selectCameraImage(arg_data);
  }
  selectImageFromDisk() {
    return this.$.selectImageFromDisk();
  }
  selectLastExternalUserImage() {
    return this.$.selectLastExternalUserImage();
  }
};

mojo.internal.bindings.ash.personalization_app.mojom.UserProviderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('UserProvider', [
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

  setUserImageObserver(arg_observer) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.ash.personalization_app.mojom.UserProvider_SetUserImageObserver_ParamsSpec,
      null,
      [arg_observer],
      false);
  }

  getUserInfo() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.ash.personalization_app.mojom.UserProvider_GetUserInfo_ParamsSpec,
      mojo.internal.bindings.ash.personalization_app.mojom.UserProvider_GetUserInfo_ResponseParamsSpec,
      [],
      false);
  }

  getDefaultUserImages() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.ash.personalization_app.mojom.UserProvider_GetDefaultUserImages_ParamsSpec,
      mojo.internal.bindings.ash.personalization_app.mojom.UserProvider_GetDefaultUserImages_ResponseParamsSpec,
      [],
      false);
  }

  selectDefaultImage(arg_index) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.ash.personalization_app.mojom.UserProvider_SelectDefaultImage_ParamsSpec,
      null,
      [arg_index],
      false);
  }

  selectProfileImage() {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.ash.personalization_app.mojom.UserProvider_SelectProfileImage_ParamsSpec,
      null,
      [],
      false);
  }

  selectCameraImage(arg_data) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojo.internal.bindings.ash.personalization_app.mojom.UserProvider_SelectCameraImage_ParamsSpec,
      null,
      [arg_data],
      false);
  }

  selectImageFromDisk() {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      mojo.internal.bindings.ash.personalization_app.mojom.UserProvider_SelectImageFromDisk_ParamsSpec,
      null,
      [],
      false);
  }

  selectLastExternalUserImage() {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      mojo.internal.bindings.ash.personalization_app.mojom.UserProvider_SelectLastExternalUserImage_ParamsSpec,
      null,
      [],
      false);
  }

};

mojo.internal.bindings.ash.personalization_app.mojom.UserProvider.getRemote = function() {
  let remote = new mojo.internal.bindings.ash.personalization_app.mojom.UserProviderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.personalization_app.mojom.UserProvider',
    'context');
  return remote.$;
};

mojo.internal.bindings.ash.personalization_app.mojom.UserProviderReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('UserProvider', [
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
        
        // Try Method 0: SetUserImageObserver
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.personalization_app.mojom.UserProvider_SetUserImageObserver_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetUserImageObserver (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: GetUserInfo
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.personalization_app.mojom.UserProvider_GetUserInfo_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetUserInfo (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: GetDefaultUserImages
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.personalization_app.mojom.UserProvider_GetDefaultUserImages_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetDefaultUserImages (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: SelectDefaultImage
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.personalization_app.mojom.UserProvider_SelectDefaultImage_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SelectDefaultImage (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: SelectProfileImage
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.personalization_app.mojom.UserProvider_SelectProfileImage_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SelectProfileImage (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: SelectCameraImage
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.personalization_app.mojom.UserProvider_SelectCameraImage_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SelectCameraImage (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: SelectImageFromDisk
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.personalization_app.mojom.UserProvider_SelectImageFromDisk_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SelectImageFromDisk (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: SelectLastExternalUserImage
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.personalization_app.mojom.UserProvider_SelectLastExternalUserImage_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SelectLastExternalUserImage (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.personalization_app.mojom.UserProvider_SetUserImageObserver_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setUserImageObserver');
          const result = this.impl.setUserImageObserver(params.arg_observer);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.personalization_app.mojom.UserProvider_GetUserInfo_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getUserInfo');
          const result = this.impl.getUserInfo();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.personalization_app.mojom.UserProvider_GetUserInfo_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetUserInfo FAILED:', e));
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.personalization_app.mojom.UserProvider_GetDefaultUserImages_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getDefaultUserImages');
          const result = this.impl.getDefaultUserImages();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.personalization_app.mojom.UserProvider_GetDefaultUserImages_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetDefaultUserImages FAILED:', e));
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.personalization_app.mojom.UserProvider_SelectDefaultImage_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.selectDefaultImage');
          const result = this.impl.selectDefaultImage(params.arg_index);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.personalization_app.mojom.UserProvider_SelectProfileImage_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.selectProfileImage');
          const result = this.impl.selectProfileImage();
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.personalization_app.mojom.UserProvider_SelectCameraImage_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.selectCameraImage');
          const result = this.impl.selectCameraImage(params.arg_data);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.personalization_app.mojom.UserProvider_SelectImageFromDisk_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.selectImageFromDisk');
          const result = this.impl.selectImageFromDisk();
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.personalization_app.mojom.UserProvider_SelectLastExternalUserImage_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.selectLastExternalUserImage');
          const result = this.impl.selectLastExternalUserImage();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.ash.personalization_app.mojom.UserProviderReceiver = mojo.internal.bindings.ash.personalization_app.mojom.UserProviderReceiver;

mojo.internal.bindings.ash.personalization_app.mojom.UserProviderPtr = mojo.internal.bindings.ash.personalization_app.mojom.UserProviderRemote;
mojo.internal.bindings.ash.personalization_app.mojom.UserProviderRequest = mojo.internal.bindings.ash.personalization_app.mojom.UserProviderPendingReceiver;


// Interface: AmbientObserver
mojo.internal.Struct(
    mojo.internal.bindings.ash.personalization_app.mojom.AmbientObserver_OnAmbientModeEnabledChanged_ParamsSpec, 'ash.personalization_app.mojom.AmbientObserver_OnAmbientModeEnabledChanged_Params', [
      mojo.internal.StructField('arg_ambient_mode_enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.personalization_app.mojom.AmbientObserver_OnAmbientThemeChanged_ParamsSpec, 'ash.personalization_app.mojom.AmbientObserver_OnAmbientThemeChanged_Params', [
      mojo.internal.StructField('arg_ambient_theme', 0, 0, mojo.internal.bindings.ash.personalization_app.mojom.AmbientThemeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.personalization_app.mojom.AmbientObserver_OnTopicSourceChanged_ParamsSpec, 'ash.personalization_app.mojom.AmbientObserver_OnTopicSourceChanged_Params', [
      mojo.internal.StructField('arg_topic_source', 0, 0, mojo.internal.bindings.ash.personalization_app.mojom.TopicSourceSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.personalization_app.mojom.AmbientObserver_OnScreenSaverDurationChanged_ParamsSpec, 'ash.personalization_app.mojom.AmbientObserver_OnScreenSaverDurationChanged_Params', [
      mojo.internal.StructField('arg_minutes', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.personalization_app.mojom.AmbientObserver_OnTemperatureUnitChanged_ParamsSpec, 'ash.personalization_app.mojom.AmbientObserver_OnTemperatureUnitChanged_Params', [
      mojo.internal.StructField('arg_temperature_unit', 0, 0, mojo.internal.bindings.ash.personalization_app.mojom.TemperatureUnitSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.personalization_app.mojom.AmbientObserver_OnAlbumsChanged_ParamsSpec, 'ash.personalization_app.mojom.AmbientObserver_OnAlbumsChanged_Params', [
      mojo.internal.StructField('arg_albums', 0, 0, mojo.internal.Array(mojo.internal.bindings.ash.personalization_app.mojom.AmbientModeAlbumSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.personalization_app.mojom.AmbientObserver_OnPreviewsFetched_ParamsSpec, 'ash.personalization_app.mojom.AmbientObserver_OnPreviewsFetched_Params', [
      mojo.internal.StructField('arg_previews', 0, 0, mojo.internal.Array(mojo.internal.bindings.url.mojom.UrlSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.personalization_app.mojom.AmbientObserver_OnAmbientUiVisibilityChanged_ParamsSpec, 'ash.personalization_app.mojom.AmbientObserver_OnAmbientUiVisibilityChanged_Params', [
      mojo.internal.StructField('arg_visibility', 0, 0, mojo.internal.bindings.ash.personalization_app.mojom.AmbientUiVisibilitySpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.personalization_app.mojom.AmbientObserver_OnGeolocationPermissionForSystemServicesChanged_ParamsSpec, 'ash.personalization_app.mojom.AmbientObserver_OnGeolocationPermissionForSystemServicesChanged_Params', [
      mojo.internal.StructField('arg_enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_is_user_modifiable', 0, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.personalization_app.mojom.AmbientObserver_OnAmbientThemePreviewImagesChanged_ParamsSpec, 'ash.personalization_app.mojom.AmbientObserver_OnAmbientThemePreviewImagesChanged_Params', [
      mojo.internal.StructField('arg_previews', 0, 0, mojo.internal.Map(mojo.internal.bindings.ash.personalization_app.mojom.AmbientThemeSpec.$, mojo.internal.bindings.url.mojom.UrlSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.ash.personalization_app.mojom.AmbientObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.ash.personalization_app.mojom.AmbientObserverRemote = class {
  static get $interfaceName() {
    return 'ash.personalization_app.mojom.AmbientObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.ash.personalization_app.mojom.AmbientObserverPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.ash.personalization_app.mojom.AmbientObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onAmbientModeEnabledChanged(arg_ambient_mode_enabled) {
    return this.$.onAmbientModeEnabledChanged(arg_ambient_mode_enabled);
  }
  onAmbientThemeChanged(arg_ambient_theme) {
    return this.$.onAmbientThemeChanged(arg_ambient_theme);
  }
  onTopicSourceChanged(arg_topic_source) {
    return this.$.onTopicSourceChanged(arg_topic_source);
  }
  onScreenSaverDurationChanged(arg_minutes) {
    return this.$.onScreenSaverDurationChanged(arg_minutes);
  }
  onTemperatureUnitChanged(arg_temperature_unit) {
    return this.$.onTemperatureUnitChanged(arg_temperature_unit);
  }
  onAlbumsChanged(arg_albums) {
    return this.$.onAlbumsChanged(arg_albums);
  }
  onPreviewsFetched(arg_previews) {
    return this.$.onPreviewsFetched(arg_previews);
  }
  onAmbientUiVisibilityChanged(arg_visibility) {
    return this.$.onAmbientUiVisibilityChanged(arg_visibility);
  }
  onGeolocationPermissionForSystemServicesChanged(arg_enabled, arg_is_user_modifiable) {
    return this.$.onGeolocationPermissionForSystemServicesChanged(arg_enabled, arg_is_user_modifiable);
  }
  onAmbientThemePreviewImagesChanged(arg_previews) {
    return this.$.onAmbientThemePreviewImagesChanged(arg_previews);
  }
};

mojo.internal.bindings.ash.personalization_app.mojom.AmbientObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('AmbientObserver', [
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

  onAmbientModeEnabledChanged(arg_ambient_mode_enabled) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.ash.personalization_app.mojom.AmbientObserver_OnAmbientModeEnabledChanged_ParamsSpec,
      null,
      [arg_ambient_mode_enabled],
      false);
  }

  onAmbientThemeChanged(arg_ambient_theme) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.ash.personalization_app.mojom.AmbientObserver_OnAmbientThemeChanged_ParamsSpec,
      null,
      [arg_ambient_theme],
      false);
  }

  onTopicSourceChanged(arg_topic_source) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.ash.personalization_app.mojom.AmbientObserver_OnTopicSourceChanged_ParamsSpec,
      null,
      [arg_topic_source],
      false);
  }

  onScreenSaverDurationChanged(arg_minutes) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.ash.personalization_app.mojom.AmbientObserver_OnScreenSaverDurationChanged_ParamsSpec,
      null,
      [arg_minutes],
      false);
  }

  onTemperatureUnitChanged(arg_temperature_unit) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.ash.personalization_app.mojom.AmbientObserver_OnTemperatureUnitChanged_ParamsSpec,
      null,
      [arg_temperature_unit],
      false);
  }

  onAlbumsChanged(arg_albums) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojo.internal.bindings.ash.personalization_app.mojom.AmbientObserver_OnAlbumsChanged_ParamsSpec,
      null,
      [arg_albums],
      false);
  }

  onPreviewsFetched(arg_previews) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      mojo.internal.bindings.ash.personalization_app.mojom.AmbientObserver_OnPreviewsFetched_ParamsSpec,
      null,
      [arg_previews],
      false);
  }

  onAmbientUiVisibilityChanged(arg_visibility) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      mojo.internal.bindings.ash.personalization_app.mojom.AmbientObserver_OnAmbientUiVisibilityChanged_ParamsSpec,
      null,
      [arg_visibility],
      false);
  }

  onGeolocationPermissionForSystemServicesChanged(arg_enabled, arg_is_user_modifiable) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      mojo.internal.bindings.ash.personalization_app.mojom.AmbientObserver_OnGeolocationPermissionForSystemServicesChanged_ParamsSpec,
      null,
      [arg_enabled, arg_is_user_modifiable],
      false);
  }

  onAmbientThemePreviewImagesChanged(arg_previews) {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      mojo.internal.bindings.ash.personalization_app.mojom.AmbientObserver_OnAmbientThemePreviewImagesChanged_ParamsSpec,
      null,
      [arg_previews],
      false);
  }

};

mojo.internal.bindings.ash.personalization_app.mojom.AmbientObserver.getRemote = function() {
  let remote = new mojo.internal.bindings.ash.personalization_app.mojom.AmbientObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.personalization_app.mojom.AmbientObserver',
    'context');
  return remote.$;
};

mojo.internal.bindings.ash.personalization_app.mojom.AmbientObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('AmbientObserver', [
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
        
        // Try Method 0: OnAmbientModeEnabledChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.personalization_app.mojom.AmbientObserver_OnAmbientModeEnabledChanged_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnAmbientModeEnabledChanged (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: OnAmbientThemeChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.personalization_app.mojom.AmbientObserver_OnAmbientThemeChanged_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnAmbientThemeChanged (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: OnTopicSourceChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.personalization_app.mojom.AmbientObserver_OnTopicSourceChanged_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnTopicSourceChanged (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: OnScreenSaverDurationChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.personalization_app.mojom.AmbientObserver_OnScreenSaverDurationChanged_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnScreenSaverDurationChanged (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: OnTemperatureUnitChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.personalization_app.mojom.AmbientObserver_OnTemperatureUnitChanged_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnTemperatureUnitChanged (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: OnAlbumsChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.personalization_app.mojom.AmbientObserver_OnAlbumsChanged_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnAlbumsChanged (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: OnPreviewsFetched
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.personalization_app.mojom.AmbientObserver_OnPreviewsFetched_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnPreviewsFetched (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: OnAmbientUiVisibilityChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.personalization_app.mojom.AmbientObserver_OnAmbientUiVisibilityChanged_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnAmbientUiVisibilityChanged (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: OnGeolocationPermissionForSystemServicesChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.personalization_app.mojom.AmbientObserver_OnGeolocationPermissionForSystemServicesChanged_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnGeolocationPermissionForSystemServicesChanged (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
           }
        }
        // Try Method 9: OnAmbientThemePreviewImagesChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.personalization_app.mojom.AmbientObserver_OnAmbientThemePreviewImagesChanged_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnAmbientThemePreviewImagesChanged (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 9 failed:', e);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.personalization_app.mojom.AmbientObserver_OnAmbientModeEnabledChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onAmbientModeEnabledChanged');
          const result = this.impl.onAmbientModeEnabledChanged(params.arg_ambient_mode_enabled);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.personalization_app.mojom.AmbientObserver_OnAmbientThemeChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onAmbientThemeChanged');
          const result = this.impl.onAmbientThemeChanged(params.arg_ambient_theme);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.personalization_app.mojom.AmbientObserver_OnTopicSourceChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onTopicSourceChanged');
          const result = this.impl.onTopicSourceChanged(params.arg_topic_source);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.personalization_app.mojom.AmbientObserver_OnScreenSaverDurationChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onScreenSaverDurationChanged');
          const result = this.impl.onScreenSaverDurationChanged(params.arg_minutes);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.personalization_app.mojom.AmbientObserver_OnTemperatureUnitChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onTemperatureUnitChanged');
          const result = this.impl.onTemperatureUnitChanged(params.arg_temperature_unit);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.personalization_app.mojom.AmbientObserver_OnAlbumsChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onAlbumsChanged');
          const result = this.impl.onAlbumsChanged(params.arg_albums);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.personalization_app.mojom.AmbientObserver_OnPreviewsFetched_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onPreviewsFetched');
          const result = this.impl.onPreviewsFetched(params.arg_previews);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.personalization_app.mojom.AmbientObserver_OnAmbientUiVisibilityChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onAmbientUiVisibilityChanged');
          const result = this.impl.onAmbientUiVisibilityChanged(params.arg_visibility);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.personalization_app.mojom.AmbientObserver_OnGeolocationPermissionForSystemServicesChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onGeolocationPermissionForSystemServicesChanged');
          const result = this.impl.onGeolocationPermissionForSystemServicesChanged(params.arg_enabled, params.arg_is_user_modifiable);
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.personalization_app.mojom.AmbientObserver_OnAmbientThemePreviewImagesChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onAmbientThemePreviewImagesChanged');
          const result = this.impl.onAmbientThemePreviewImagesChanged(params.arg_previews);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.ash.personalization_app.mojom.AmbientObserverReceiver = mojo.internal.bindings.ash.personalization_app.mojom.AmbientObserverReceiver;

mojo.internal.bindings.ash.personalization_app.mojom.AmbientObserverPtr = mojo.internal.bindings.ash.personalization_app.mojom.AmbientObserverRemote;
mojo.internal.bindings.ash.personalization_app.mojom.AmbientObserverRequest = mojo.internal.bindings.ash.personalization_app.mojom.AmbientObserverPendingReceiver;


// Interface: AmbientProvider
mojo.internal.Struct(
    mojo.internal.bindings.ash.personalization_app.mojom.AmbientProvider_IsAmbientModeEnabled_ParamsSpec, 'ash.personalization_app.mojom.AmbientProvider_IsAmbientModeEnabled_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.personalization_app.mojom.AmbientProvider_IsAmbientModeEnabled_ResponseParamsSpec, 'ash.personalization_app.mojom.AmbientProvider_IsAmbientModeEnabled_ResponseParams', [
      mojo.internal.StructField('arg_enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.personalization_app.mojom.AmbientProvider_SetAmbientModeEnabled_ParamsSpec, 'ash.personalization_app.mojom.AmbientProvider_SetAmbientModeEnabled_Params', [
      mojo.internal.StructField('arg_enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.personalization_app.mojom.AmbientProvider_SetAmbientObserver_ParamsSpec, 'ash.personalization_app.mojom.AmbientProvider_SetAmbientObserver_Params', [
      mojo.internal.StructField('arg_observer', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.ash.personalization_app.mojom.AmbientObserverSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.personalization_app.mojom.AmbientProvider_SetAmbientTheme_ParamsSpec, 'ash.personalization_app.mojom.AmbientProvider_SetAmbientTheme_Params', [
      mojo.internal.StructField('arg_ambient_theme', 0, 0, mojo.internal.bindings.ash.personalization_app.mojom.AmbientThemeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.personalization_app.mojom.AmbientProvider_SetScreenSaverDuration_ParamsSpec, 'ash.personalization_app.mojom.AmbientProvider_SetScreenSaverDuration_Params', [
      mojo.internal.StructField('arg_minutes', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.personalization_app.mojom.AmbientProvider_SetTopicSource_ParamsSpec, 'ash.personalization_app.mojom.AmbientProvider_SetTopicSource_Params', [
      mojo.internal.StructField('arg_topic_source', 0, 0, mojo.internal.bindings.ash.personalization_app.mojom.TopicSourceSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.personalization_app.mojom.AmbientProvider_SetTemperatureUnit_ParamsSpec, 'ash.personalization_app.mojom.AmbientProvider_SetTemperatureUnit_Params', [
      mojo.internal.StructField('arg_temperature_unit', 0, 0, mojo.internal.bindings.ash.personalization_app.mojom.TemperatureUnitSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.personalization_app.mojom.AmbientProvider_SetAlbumSelected_ParamsSpec, 'ash.personalization_app.mojom.AmbientProvider_SetAlbumSelected_Params', [
      mojo.internal.StructField('arg_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_topic_source', 8, 0, mojo.internal.bindings.ash.personalization_app.mojom.TopicSourceSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_selected', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.personalization_app.mojom.AmbientProvider_SetPageViewed_ParamsSpec, 'ash.personalization_app.mojom.AmbientProvider_SetPageViewed_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.personalization_app.mojom.AmbientProvider_FetchSettingsAndAlbums_ParamsSpec, 'ash.personalization_app.mojom.AmbientProvider_FetchSettingsAndAlbums_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.personalization_app.mojom.AmbientProvider_StartScreenSaverPreview_ParamsSpec, 'ash.personalization_app.mojom.AmbientProvider_StartScreenSaverPreview_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.personalization_app.mojom.AmbientProvider_ShouldShowTimeOfDayBanner_ParamsSpec, 'ash.personalization_app.mojom.AmbientProvider_ShouldShowTimeOfDayBanner_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.personalization_app.mojom.AmbientProvider_ShouldShowTimeOfDayBanner_ResponseParamsSpec, 'ash.personalization_app.mojom.AmbientProvider_ShouldShowTimeOfDayBanner_ResponseParams', [
      mojo.internal.StructField('arg_should_show_banner', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.personalization_app.mojom.AmbientProvider_HandleTimeOfDayBannerDismissed_ParamsSpec, 'ash.personalization_app.mojom.AmbientProvider_HandleTimeOfDayBannerDismissed_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.personalization_app.mojom.AmbientProvider_IsGeolocationEnabledForSystemServices_ParamsSpec, 'ash.personalization_app.mojom.AmbientProvider_IsGeolocationEnabledForSystemServices_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.personalization_app.mojom.AmbientProvider_IsGeolocationEnabledForSystemServices_ResponseParamsSpec, 'ash.personalization_app.mojom.AmbientProvider_IsGeolocationEnabledForSystemServices_ResponseParams', [
      mojo.internal.StructField('arg_geolocation_enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.personalization_app.mojom.AmbientProvider_IsGeolocationUserModifiable_ParamsSpec, 'ash.personalization_app.mojom.AmbientProvider_IsGeolocationUserModifiable_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.personalization_app.mojom.AmbientProvider_IsGeolocationUserModifiable_ResponseParamsSpec, 'ash.personalization_app.mojom.AmbientProvider_IsGeolocationUserModifiable_ResponseParams', [
      mojo.internal.StructField('arg_geolocation_is_user_modifiable', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.personalization_app.mojom.AmbientProvider_EnableGeolocationForSystemServices_ParamsSpec, 'ash.personalization_app.mojom.AmbientProvider_EnableGeolocationForSystemServices_Params', [
    ],
    [[0, 8]]);

mojo.internal.bindings.ash.personalization_app.mojom.AmbientProviderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.ash.personalization_app.mojom.AmbientProviderRemote = class {
  static get $interfaceName() {
    return 'ash.personalization_app.mojom.AmbientProvider';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.ash.personalization_app.mojom.AmbientProviderPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.ash.personalization_app.mojom.AmbientProviderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  isAmbientModeEnabled() {
    return this.$.isAmbientModeEnabled();
  }
  setAmbientModeEnabled(arg_enabled) {
    return this.$.setAmbientModeEnabled(arg_enabled);
  }
  setAmbientObserver(arg_observer) {
    return this.$.setAmbientObserver(arg_observer);
  }
  setAmbientTheme(arg_ambient_theme) {
    return this.$.setAmbientTheme(arg_ambient_theme);
  }
  setScreenSaverDuration(arg_minutes) {
    return this.$.setScreenSaverDuration(arg_minutes);
  }
  setTopicSource(arg_topic_source) {
    return this.$.setTopicSource(arg_topic_source);
  }
  setTemperatureUnit(arg_temperature_unit) {
    return this.$.setTemperatureUnit(arg_temperature_unit);
  }
  setAlbumSelected(arg_id, arg_topic_source, arg_selected) {
    return this.$.setAlbumSelected(arg_id, arg_topic_source, arg_selected);
  }
  setPageViewed() {
    return this.$.setPageViewed();
  }
  fetchSettingsAndAlbums() {
    return this.$.fetchSettingsAndAlbums();
  }
  startScreenSaverPreview() {
    return this.$.startScreenSaverPreview();
  }
  shouldShowTimeOfDayBanner() {
    return this.$.shouldShowTimeOfDayBanner();
  }
  handleTimeOfDayBannerDismissed() {
    return this.$.handleTimeOfDayBannerDismissed();
  }
  isGeolocationEnabledForSystemServices() {
    return this.$.isGeolocationEnabledForSystemServices();
  }
  isGeolocationUserModifiable() {
    return this.$.isGeolocationUserModifiable();
  }
  enableGeolocationForSystemServices() {
    return this.$.enableGeolocationForSystemServices();
  }
};

mojo.internal.bindings.ash.personalization_app.mojom.AmbientProviderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('AmbientProvider', [
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
      { explicit: null },
      { explicit: null },
    ]);
  }

  isAmbientModeEnabled() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.ash.personalization_app.mojom.AmbientProvider_IsAmbientModeEnabled_ParamsSpec,
      mojo.internal.bindings.ash.personalization_app.mojom.AmbientProvider_IsAmbientModeEnabled_ResponseParamsSpec,
      [],
      false);
  }

  setAmbientModeEnabled(arg_enabled) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.ash.personalization_app.mojom.AmbientProvider_SetAmbientModeEnabled_ParamsSpec,
      null,
      [arg_enabled],
      false);
  }

  setAmbientObserver(arg_observer) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.ash.personalization_app.mojom.AmbientProvider_SetAmbientObserver_ParamsSpec,
      null,
      [arg_observer],
      false);
  }

  setAmbientTheme(arg_ambient_theme) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.ash.personalization_app.mojom.AmbientProvider_SetAmbientTheme_ParamsSpec,
      null,
      [arg_ambient_theme],
      false);
  }

  setScreenSaverDuration(arg_minutes) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.ash.personalization_app.mojom.AmbientProvider_SetScreenSaverDuration_ParamsSpec,
      null,
      [arg_minutes],
      false);
  }

  setTopicSource(arg_topic_source) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojo.internal.bindings.ash.personalization_app.mojom.AmbientProvider_SetTopicSource_ParamsSpec,
      null,
      [arg_topic_source],
      false);
  }

  setTemperatureUnit(arg_temperature_unit) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      mojo.internal.bindings.ash.personalization_app.mojom.AmbientProvider_SetTemperatureUnit_ParamsSpec,
      null,
      [arg_temperature_unit],
      false);
  }

  setAlbumSelected(arg_id, arg_topic_source, arg_selected) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      mojo.internal.bindings.ash.personalization_app.mojom.AmbientProvider_SetAlbumSelected_ParamsSpec,
      null,
      [arg_id, arg_topic_source, arg_selected],
      false);
  }

  setPageViewed() {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      mojo.internal.bindings.ash.personalization_app.mojom.AmbientProvider_SetPageViewed_ParamsSpec,
      null,
      [],
      false);
  }

  fetchSettingsAndAlbums() {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      mojo.internal.bindings.ash.personalization_app.mojom.AmbientProvider_FetchSettingsAndAlbums_ParamsSpec,
      null,
      [],
      false);
  }

  startScreenSaverPreview() {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      mojo.internal.bindings.ash.personalization_app.mojom.AmbientProvider_StartScreenSaverPreview_ParamsSpec,
      null,
      [],
      false);
  }

  shouldShowTimeOfDayBanner() {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      mojo.internal.bindings.ash.personalization_app.mojom.AmbientProvider_ShouldShowTimeOfDayBanner_ParamsSpec,
      mojo.internal.bindings.ash.personalization_app.mojom.AmbientProvider_ShouldShowTimeOfDayBanner_ResponseParamsSpec,
      [],
      false);
  }

  handleTimeOfDayBannerDismissed() {
    return this.proxy.sendMessage(
      this.ordinals[12],  // ordinal
      mojo.internal.bindings.ash.personalization_app.mojom.AmbientProvider_HandleTimeOfDayBannerDismissed_ParamsSpec,
      null,
      [],
      false);
  }

  isGeolocationEnabledForSystemServices() {
    return this.proxy.sendMessage(
      this.ordinals[13],  // ordinal
      mojo.internal.bindings.ash.personalization_app.mojom.AmbientProvider_IsGeolocationEnabledForSystemServices_ParamsSpec,
      mojo.internal.bindings.ash.personalization_app.mojom.AmbientProvider_IsGeolocationEnabledForSystemServices_ResponseParamsSpec,
      [],
      false);
  }

  isGeolocationUserModifiable() {
    return this.proxy.sendMessage(
      this.ordinals[14],  // ordinal
      mojo.internal.bindings.ash.personalization_app.mojom.AmbientProvider_IsGeolocationUserModifiable_ParamsSpec,
      mojo.internal.bindings.ash.personalization_app.mojom.AmbientProvider_IsGeolocationUserModifiable_ResponseParamsSpec,
      [],
      false);
  }

  enableGeolocationForSystemServices() {
    return this.proxy.sendMessage(
      this.ordinals[15],  // ordinal
      mojo.internal.bindings.ash.personalization_app.mojom.AmbientProvider_EnableGeolocationForSystemServices_ParamsSpec,
      null,
      [],
      false);
  }

};

mojo.internal.bindings.ash.personalization_app.mojom.AmbientProvider.getRemote = function() {
  let remote = new mojo.internal.bindings.ash.personalization_app.mojom.AmbientProviderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.personalization_app.mojom.AmbientProvider',
    'context');
  return remote.$;
};

mojo.internal.bindings.ash.personalization_app.mojom.AmbientProviderReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('AmbientProvider', [
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
        
        // Try Method 0: IsAmbientModeEnabled
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.personalization_app.mojom.AmbientProvider_IsAmbientModeEnabled_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> IsAmbientModeEnabled (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: SetAmbientModeEnabled
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.personalization_app.mojom.AmbientProvider_SetAmbientModeEnabled_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetAmbientModeEnabled (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: SetAmbientObserver
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.personalization_app.mojom.AmbientProvider_SetAmbientObserver_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetAmbientObserver (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: SetAmbientTheme
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.personalization_app.mojom.AmbientProvider_SetAmbientTheme_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetAmbientTheme (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: SetScreenSaverDuration
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.personalization_app.mojom.AmbientProvider_SetScreenSaverDuration_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetScreenSaverDuration (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: SetTopicSource
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.personalization_app.mojom.AmbientProvider_SetTopicSource_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetTopicSource (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: SetTemperatureUnit
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.personalization_app.mojom.AmbientProvider_SetTemperatureUnit_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetTemperatureUnit (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: SetAlbumSelected
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.personalization_app.mojom.AmbientProvider_SetAlbumSelected_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetAlbumSelected (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: SetPageViewed
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.personalization_app.mojom.AmbientProvider_SetPageViewed_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetPageViewed (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
           }
        }
        // Try Method 9: FetchSettingsAndAlbums
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.personalization_app.mojom.AmbientProvider_FetchSettingsAndAlbums_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> FetchSettingsAndAlbums (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 9 failed:', e);
           }
        }
        // Try Method 10: StartScreenSaverPreview
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.personalization_app.mojom.AmbientProvider_StartScreenSaverPreview_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> StartScreenSaverPreview (10)');
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 10 failed:', e);
           }
        }
        // Try Method 11: ShouldShowTimeOfDayBanner
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.personalization_app.mojom.AmbientProvider_ShouldShowTimeOfDayBanner_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ShouldShowTimeOfDayBanner (11)');
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 11 failed:', e);
           }
        }
        // Try Method 12: HandleTimeOfDayBannerDismissed
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.personalization_app.mojom.AmbientProvider_HandleTimeOfDayBannerDismissed_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> HandleTimeOfDayBannerDismissed (12)');
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 12 failed:', e);
           }
        }
        // Try Method 13: IsGeolocationEnabledForSystemServices
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.personalization_app.mojom.AmbientProvider_IsGeolocationEnabledForSystemServices_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> IsGeolocationEnabledForSystemServices (13)');
             this.mapOrdinal(header.ordinal, 13);
             dispatchId = 13;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 13 failed:', e);
           }
        }
        // Try Method 14: IsGeolocationUserModifiable
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.personalization_app.mojom.AmbientProvider_IsGeolocationUserModifiable_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> IsGeolocationUserModifiable (14)');
             this.mapOrdinal(header.ordinal, 14);
             dispatchId = 14;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 14 failed:', e);
           }
        }
        // Try Method 15: EnableGeolocationForSystemServices
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.personalization_app.mojom.AmbientProvider_EnableGeolocationForSystemServices_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> EnableGeolocationForSystemServices (15)');
             this.mapOrdinal(header.ordinal, 15);
             dispatchId = 15;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 15 failed:', e);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.personalization_app.mojom.AmbientProvider_IsAmbientModeEnabled_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.isAmbientModeEnabled');
          const result = this.impl.isAmbientModeEnabled();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.personalization_app.mojom.AmbientProvider_IsAmbientModeEnabled_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] IsAmbientModeEnabled FAILED:', e));
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.personalization_app.mojom.AmbientProvider_SetAmbientModeEnabled_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setAmbientModeEnabled');
          const result = this.impl.setAmbientModeEnabled(params.arg_enabled);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.personalization_app.mojom.AmbientProvider_SetAmbientObserver_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setAmbientObserver');
          const result = this.impl.setAmbientObserver(params.arg_observer);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.personalization_app.mojom.AmbientProvider_SetAmbientTheme_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setAmbientTheme');
          const result = this.impl.setAmbientTheme(params.arg_ambient_theme);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.personalization_app.mojom.AmbientProvider_SetScreenSaverDuration_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setScreenSaverDuration');
          const result = this.impl.setScreenSaverDuration(params.arg_minutes);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.personalization_app.mojom.AmbientProvider_SetTopicSource_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setTopicSource');
          const result = this.impl.setTopicSource(params.arg_topic_source);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.personalization_app.mojom.AmbientProvider_SetTemperatureUnit_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setTemperatureUnit');
          const result = this.impl.setTemperatureUnit(params.arg_temperature_unit);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.personalization_app.mojom.AmbientProvider_SetAlbumSelected_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setAlbumSelected');
          const result = this.impl.setAlbumSelected(params.arg_id, params.arg_topic_source, params.arg_selected);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.personalization_app.mojom.AmbientProvider_SetPageViewed_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setPageViewed');
          const result = this.impl.setPageViewed();
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.personalization_app.mojom.AmbientProvider_FetchSettingsAndAlbums_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.fetchSettingsAndAlbums');
          const result = this.impl.fetchSettingsAndAlbums();
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.personalization_app.mojom.AmbientProvider_StartScreenSaverPreview_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.startScreenSaverPreview');
          const result = this.impl.startScreenSaverPreview();
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.personalization_app.mojom.AmbientProvider_ShouldShowTimeOfDayBanner_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.shouldShowTimeOfDayBanner');
          const result = this.impl.shouldShowTimeOfDayBanner();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.personalization_app.mojom.AmbientProvider_ShouldShowTimeOfDayBanner_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] ShouldShowTimeOfDayBanner FAILED:', e));
          }
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.personalization_app.mojom.AmbientProvider_HandleTimeOfDayBannerDismissed_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.handleTimeOfDayBannerDismissed');
          const result = this.impl.handleTimeOfDayBannerDismissed();
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.personalization_app.mojom.AmbientProvider_IsGeolocationEnabledForSystemServices_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.isGeolocationEnabledForSystemServices');
          const result = this.impl.isGeolocationEnabledForSystemServices();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.personalization_app.mojom.AmbientProvider_IsGeolocationEnabledForSystemServices_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] IsGeolocationEnabledForSystemServices FAILED:', e));
          }
          break;
        }
        case 14: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.personalization_app.mojom.AmbientProvider_IsGeolocationUserModifiable_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.isGeolocationUserModifiable');
          const result = this.impl.isGeolocationUserModifiable();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.personalization_app.mojom.AmbientProvider_IsGeolocationUserModifiable_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] IsGeolocationUserModifiable FAILED:', e));
          }
          break;
        }
        case 15: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.personalization_app.mojom.AmbientProvider_EnableGeolocationForSystemServices_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.enableGeolocationForSystemServices');
          const result = this.impl.enableGeolocationForSystemServices();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.ash.personalization_app.mojom.AmbientProviderReceiver = mojo.internal.bindings.ash.personalization_app.mojom.AmbientProviderReceiver;

mojo.internal.bindings.ash.personalization_app.mojom.AmbientProviderPtr = mojo.internal.bindings.ash.personalization_app.mojom.AmbientProviderRemote;
mojo.internal.bindings.ash.personalization_app.mojom.AmbientProviderRequest = mojo.internal.bindings.ash.personalization_app.mojom.AmbientProviderPendingReceiver;


// Interface: KeyboardBacklightObserver
mojo.internal.Struct(
    mojo.internal.bindings.ash.personalization_app.mojom.KeyboardBacklightObserver_OnBacklightStateChanged_ParamsSpec, 'ash.personalization_app.mojom.KeyboardBacklightObserver_OnBacklightStateChanged_Params', [
      mojo.internal.StructField('arg_currentBacklightState', 0, 0, mojo.internal.bindings.ash.personalization_app.mojom.CurrentBacklightStateSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.personalization_app.mojom.KeyboardBacklightObserver_OnWallpaperColorChanged_ParamsSpec, 'ash.personalization_app.mojom.KeyboardBacklightObserver_OnWallpaperColorChanged_Params', [
      mojo.internal.StructField('arg_wallpaper_color', 0, 0, mojo.internal.bindings.skia.mojom.SkColorSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.ash.personalization_app.mojom.KeyboardBacklightObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.ash.personalization_app.mojom.KeyboardBacklightObserverRemote = class {
  static get $interfaceName() {
    return 'ash.personalization_app.mojom.KeyboardBacklightObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.ash.personalization_app.mojom.KeyboardBacklightObserverPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.ash.personalization_app.mojom.KeyboardBacklightObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onBacklightStateChanged(arg_currentBacklightState) {
    return this.$.onBacklightStateChanged(arg_currentBacklightState);
  }
  onWallpaperColorChanged(arg_wallpaper_color) {
    return this.$.onWallpaperColorChanged(arg_wallpaper_color);
  }
};

mojo.internal.bindings.ash.personalization_app.mojom.KeyboardBacklightObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('KeyboardBacklightObserver', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  onBacklightStateChanged(arg_currentBacklightState) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.ash.personalization_app.mojom.KeyboardBacklightObserver_OnBacklightStateChanged_ParamsSpec,
      null,
      [arg_currentBacklightState],
      false);
  }

  onWallpaperColorChanged(arg_wallpaper_color) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.ash.personalization_app.mojom.KeyboardBacklightObserver_OnWallpaperColorChanged_ParamsSpec,
      null,
      [arg_wallpaper_color],
      false);
  }

};

mojo.internal.bindings.ash.personalization_app.mojom.KeyboardBacklightObserver.getRemote = function() {
  let remote = new mojo.internal.bindings.ash.personalization_app.mojom.KeyboardBacklightObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.personalization_app.mojom.KeyboardBacklightObserver',
    'context');
  return remote.$;
};

mojo.internal.bindings.ash.personalization_app.mojom.KeyboardBacklightObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('KeyboardBacklightObserver', [
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
        
        // Try Method 0: OnBacklightStateChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.personalization_app.mojom.KeyboardBacklightObserver_OnBacklightStateChanged_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnBacklightStateChanged (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: OnWallpaperColorChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.personalization_app.mojom.KeyboardBacklightObserver_OnWallpaperColorChanged_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnWallpaperColorChanged (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.personalization_app.mojom.KeyboardBacklightObserver_OnBacklightStateChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onBacklightStateChanged');
          const result = this.impl.onBacklightStateChanged(params.arg_currentBacklightState);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.personalization_app.mojom.KeyboardBacklightObserver_OnWallpaperColorChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onWallpaperColorChanged');
          const result = this.impl.onWallpaperColorChanged(params.arg_wallpaper_color);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.ash.personalization_app.mojom.KeyboardBacklightObserverReceiver = mojo.internal.bindings.ash.personalization_app.mojom.KeyboardBacklightObserverReceiver;

mojo.internal.bindings.ash.personalization_app.mojom.KeyboardBacklightObserverPtr = mojo.internal.bindings.ash.personalization_app.mojom.KeyboardBacklightObserverRemote;
mojo.internal.bindings.ash.personalization_app.mojom.KeyboardBacklightObserverRequest = mojo.internal.bindings.ash.personalization_app.mojom.KeyboardBacklightObserverPendingReceiver;


// Interface: KeyboardBacklightProvider
mojo.internal.Struct(
    mojo.internal.bindings.ash.personalization_app.mojom.KeyboardBacklightProvider_SetKeyboardBacklightObserver_ParamsSpec, 'ash.personalization_app.mojom.KeyboardBacklightProvider_SetKeyboardBacklightObserver_Params', [
      mojo.internal.StructField('arg_observer', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.ash.personalization_app.mojom.KeyboardBacklightObserverSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.personalization_app.mojom.KeyboardBacklightProvider_SetBacklightColor_ParamsSpec, 'ash.personalization_app.mojom.KeyboardBacklightProvider_SetBacklightColor_Params', [
      mojo.internal.StructField('arg_backlight_color', 0, 0, mojo.internal.bindings.ash.personalization_app.mojom.BacklightColorSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.personalization_app.mojom.KeyboardBacklightProvider_SetBacklightZoneColor_ParamsSpec, 'ash.personalization_app.mojom.KeyboardBacklightProvider_SetBacklightZoneColor_Params', [
      mojo.internal.StructField('arg_backlight_color', 0, 0, mojo.internal.bindings.ash.personalization_app.mojom.BacklightColorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_zone', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.personalization_app.mojom.KeyboardBacklightProvider_ShouldShowNudge_ParamsSpec, 'ash.personalization_app.mojom.KeyboardBacklightProvider_ShouldShowNudge_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.personalization_app.mojom.KeyboardBacklightProvider_ShouldShowNudge_ResponseParamsSpec, 'ash.personalization_app.mojom.KeyboardBacklightProvider_ShouldShowNudge_ResponseParams', [
      mojo.internal.StructField('arg_should_show_nudge', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.personalization_app.mojom.KeyboardBacklightProvider_HandleNudgeShown_ParamsSpec, 'ash.personalization_app.mojom.KeyboardBacklightProvider_HandleNudgeShown_Params', [
    ],
    [[0, 8]]);

mojo.internal.bindings.ash.personalization_app.mojom.KeyboardBacklightProviderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.ash.personalization_app.mojom.KeyboardBacklightProviderRemote = class {
  static get $interfaceName() {
    return 'ash.personalization_app.mojom.KeyboardBacklightProvider';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.ash.personalization_app.mojom.KeyboardBacklightProviderPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.ash.personalization_app.mojom.KeyboardBacklightProviderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  setKeyboardBacklightObserver(arg_observer) {
    return this.$.setKeyboardBacklightObserver(arg_observer);
  }
  setBacklightColor(arg_backlight_color) {
    return this.$.setBacklightColor(arg_backlight_color);
  }
  setBacklightZoneColor(arg_zone, arg_backlight_color) {
    return this.$.setBacklightZoneColor(arg_zone, arg_backlight_color);
  }
  shouldShowNudge() {
    return this.$.shouldShowNudge();
  }
  handleNudgeShown() {
    return this.$.handleNudgeShown();
  }
};

mojo.internal.bindings.ash.personalization_app.mojom.KeyboardBacklightProviderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('KeyboardBacklightProvider', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  setKeyboardBacklightObserver(arg_observer) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.ash.personalization_app.mojom.KeyboardBacklightProvider_SetKeyboardBacklightObserver_ParamsSpec,
      null,
      [arg_observer],
      false);
  }

  setBacklightColor(arg_backlight_color) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.ash.personalization_app.mojom.KeyboardBacklightProvider_SetBacklightColor_ParamsSpec,
      null,
      [arg_backlight_color],
      false);
  }

  setBacklightZoneColor(arg_zone, arg_backlight_color) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.ash.personalization_app.mojom.KeyboardBacklightProvider_SetBacklightZoneColor_ParamsSpec,
      null,
      [arg_zone, arg_backlight_color],
      false);
  }

  shouldShowNudge() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.ash.personalization_app.mojom.KeyboardBacklightProvider_ShouldShowNudge_ParamsSpec,
      mojo.internal.bindings.ash.personalization_app.mojom.KeyboardBacklightProvider_ShouldShowNudge_ResponseParamsSpec,
      [],
      false);
  }

  handleNudgeShown() {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.ash.personalization_app.mojom.KeyboardBacklightProvider_HandleNudgeShown_ParamsSpec,
      null,
      [],
      false);
  }

};

mojo.internal.bindings.ash.personalization_app.mojom.KeyboardBacklightProvider.getRemote = function() {
  let remote = new mojo.internal.bindings.ash.personalization_app.mojom.KeyboardBacklightProviderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.personalization_app.mojom.KeyboardBacklightProvider',
    'context');
  return remote.$;
};

mojo.internal.bindings.ash.personalization_app.mojom.KeyboardBacklightProviderReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('KeyboardBacklightProvider', [
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
        
        // Try Method 0: SetKeyboardBacklightObserver
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.personalization_app.mojom.KeyboardBacklightProvider_SetKeyboardBacklightObserver_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetKeyboardBacklightObserver (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: SetBacklightColor
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.personalization_app.mojom.KeyboardBacklightProvider_SetBacklightColor_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetBacklightColor (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: SetBacklightZoneColor
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.personalization_app.mojom.KeyboardBacklightProvider_SetBacklightZoneColor_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetBacklightZoneColor (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: ShouldShowNudge
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.personalization_app.mojom.KeyboardBacklightProvider_ShouldShowNudge_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ShouldShowNudge (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: HandleNudgeShown
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.personalization_app.mojom.KeyboardBacklightProvider_HandleNudgeShown_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> HandleNudgeShown (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.personalization_app.mojom.KeyboardBacklightProvider_SetKeyboardBacklightObserver_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setKeyboardBacklightObserver');
          const result = this.impl.setKeyboardBacklightObserver(params.arg_observer);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.personalization_app.mojom.KeyboardBacklightProvider_SetBacklightColor_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setBacklightColor');
          const result = this.impl.setBacklightColor(params.arg_backlight_color);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.personalization_app.mojom.KeyboardBacklightProvider_SetBacklightZoneColor_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setBacklightZoneColor');
          const result = this.impl.setBacklightZoneColor(params.arg_zone, params.arg_backlight_color);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.personalization_app.mojom.KeyboardBacklightProvider_ShouldShowNudge_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.shouldShowNudge');
          const result = this.impl.shouldShowNudge();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.personalization_app.mojom.KeyboardBacklightProvider_ShouldShowNudge_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] ShouldShowNudge FAILED:', e));
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.personalization_app.mojom.KeyboardBacklightProvider_HandleNudgeShown_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.handleNudgeShown');
          const result = this.impl.handleNudgeShown();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.ash.personalization_app.mojom.KeyboardBacklightProviderReceiver = mojo.internal.bindings.ash.personalization_app.mojom.KeyboardBacklightProviderReceiver;

mojo.internal.bindings.ash.personalization_app.mojom.KeyboardBacklightProviderPtr = mojo.internal.bindings.ash.personalization_app.mojom.KeyboardBacklightProviderRemote;
mojo.internal.bindings.ash.personalization_app.mojom.KeyboardBacklightProviderRequest = mojo.internal.bindings.ash.personalization_app.mojom.KeyboardBacklightProviderPendingReceiver;

