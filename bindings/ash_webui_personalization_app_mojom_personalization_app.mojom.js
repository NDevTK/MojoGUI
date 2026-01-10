// Auto-generated MojoJS binding
// Source: chromium_src/ash/webui/personalization_app/mojom/personalization_app.mojom
// Module: ash.personalization_app.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.personalization_app = ash.personalization_app || {};
ash.personalization_app.mojom = ash.personalization_app.mojom || {};
var mojo_base = mojo_base || {};
var skia = skia || {};
var url = url || {};

ash.personalization_app.mojom.WallpaperLayoutSpec = { $: mojo.internal.Enum() };
ash.personalization_app.mojom.WallpaperTypeSpec = { $: mojo.internal.Enum() };
ash.personalization_app.mojom.OnlineImageTypeSpec = { $: mojo.internal.Enum() };
ash.personalization_app.mojom.GooglePhotosEnablementStateSpec = { $: mojo.internal.Enum() };
ash.personalization_app.mojom.StaticColorSpec = { $: mojo.internal.Enum() };
ash.personalization_app.mojom.AmbientThemeSpec = { $: mojo.internal.Enum() };
ash.personalization_app.mojom.TopicSourceSpec = { $: mojo.internal.Enum() };
ash.personalization_app.mojom.TemperatureUnitSpec = { $: mojo.internal.Enum() };
ash.personalization_app.mojom.AmbientUiVisibilitySpec = { $: mojo.internal.Enum() };
ash.personalization_app.mojom.BacklightColorSpec = { $: mojo.internal.Enum() };
ash.personalization_app.mojom.UserImageSpec = { $: {} };
ash.personalization_app.mojom.CurrentBacklightStateSpec = { $: {} };
ash.personalization_app.mojom.WallpaperCollectionSpec = { $: {} };
ash.personalization_app.mojom.GooglePhotosAlbumSpec = { $: {} };
ash.personalization_app.mojom.FetchGooglePhotosAlbumsResponseSpec = { $: {} };
ash.personalization_app.mojom.WallpaperImageSpec = { $: {} };
ash.personalization_app.mojom.GooglePhotosPhotoSpec = { $: {} };
ash.personalization_app.mojom.FetchGooglePhotosPhotosResponseSpec = { $: {} };
ash.personalization_app.mojom.CurrentAttributionSpec = { $: {} };
ash.personalization_app.mojom.CurrentWallpaperSpec = { $: {} };
ash.personalization_app.mojom.SampleColorSchemeSpec = { $: {} };
ash.personalization_app.mojom.UserInfoSpec = { $: {} };
ash.personalization_app.mojom.DeprecatedSourceInfoSpec = { $: {} };
ash.personalization_app.mojom.DefaultUserImageSpec = { $: {} };
ash.personalization_app.mojom.ProfileImageSpec = { $: {} };
ash.personalization_app.mojom.InvalidImageSpec = { $: {} };
ash.personalization_app.mojom.AmbientModeAlbumSpec = { $: {} };
ash.personalization_app.mojom.WallpaperObserver = {};
ash.personalization_app.mojom.WallpaperObserver.$interfaceName = 'ash.personalization_app.mojom.WallpaperObserver';
ash.personalization_app.mojom.WallpaperObserver_OnWallpaperPreviewEnded_ParamsSpec = { $: {} };
ash.personalization_app.mojom.WallpaperObserver_OnAttributionChanged_ParamsSpec = { $: {} };
ash.personalization_app.mojom.WallpaperObserver_OnWallpaperChanged_ParamsSpec = { $: {} };
ash.personalization_app.mojom.WallpaperProvider = {};
ash.personalization_app.mojom.WallpaperProvider.$interfaceName = 'ash.personalization_app.mojom.WallpaperProvider';
ash.personalization_app.mojom.WallpaperProvider_MakeTransparent_ParamsSpec = { $: {} };
ash.personalization_app.mojom.WallpaperProvider_MakeOpaque_ParamsSpec = { $: {} };
ash.personalization_app.mojom.WallpaperProvider_FetchCollections_ParamsSpec = { $: {} };
ash.personalization_app.mojom.WallpaperProvider_FetchCollections_ResponseParamsSpec = { $: {} };
ash.personalization_app.mojom.WallpaperProvider_FetchImagesForCollection_ParamsSpec = { $: {} };
ash.personalization_app.mojom.WallpaperProvider_FetchImagesForCollection_ResponseParamsSpec = { $: {} };
ash.personalization_app.mojom.WallpaperProvider_FetchGooglePhotosAlbums_ParamsSpec = { $: {} };
ash.personalization_app.mojom.WallpaperProvider_FetchGooglePhotosAlbums_ResponseParamsSpec = { $: {} };
ash.personalization_app.mojom.WallpaperProvider_FetchGooglePhotosSharedAlbums_ParamsSpec = { $: {} };
ash.personalization_app.mojom.WallpaperProvider_FetchGooglePhotosSharedAlbums_ResponseParamsSpec = { $: {} };
ash.personalization_app.mojom.WallpaperProvider_FetchGooglePhotosEnabled_ParamsSpec = { $: {} };
ash.personalization_app.mojom.WallpaperProvider_FetchGooglePhotosEnabled_ResponseParamsSpec = { $: {} };
ash.personalization_app.mojom.WallpaperProvider_FetchGooglePhotosPhotos_ParamsSpec = { $: {} };
ash.personalization_app.mojom.WallpaperProvider_FetchGooglePhotosPhotos_ResponseParamsSpec = { $: {} };
ash.personalization_app.mojom.WallpaperProvider_GetLocalImages_ParamsSpec = { $: {} };
ash.personalization_app.mojom.WallpaperProvider_GetLocalImages_ResponseParamsSpec = { $: {} };
ash.personalization_app.mojom.WallpaperProvider_GetDefaultImageThumbnail_ParamsSpec = { $: {} };
ash.personalization_app.mojom.WallpaperProvider_GetDefaultImageThumbnail_ResponseParamsSpec = { $: {} };
ash.personalization_app.mojom.WallpaperProvider_GetLocalImageThumbnail_ParamsSpec = { $: {} };
ash.personalization_app.mojom.WallpaperProvider_GetLocalImageThumbnail_ResponseParamsSpec = { $: {} };
ash.personalization_app.mojom.WallpaperProvider_SetWallpaperObserver_ParamsSpec = { $: {} };
ash.personalization_app.mojom.WallpaperProvider_SelectWallpaper_ParamsSpec = { $: {} };
ash.personalization_app.mojom.WallpaperProvider_SelectWallpaper_ResponseParamsSpec = { $: {} };
ash.personalization_app.mojom.WallpaperProvider_SelectDefaultImage_ParamsSpec = { $: {} };
ash.personalization_app.mojom.WallpaperProvider_SelectDefaultImage_ResponseParamsSpec = { $: {} };
ash.personalization_app.mojom.WallpaperProvider_SelectLocalImage_ParamsSpec = { $: {} };
ash.personalization_app.mojom.WallpaperProvider_SelectLocalImage_ResponseParamsSpec = { $: {} };
ash.personalization_app.mojom.WallpaperProvider_SelectGooglePhotosPhoto_ParamsSpec = { $: {} };
ash.personalization_app.mojom.WallpaperProvider_SelectGooglePhotosPhoto_ResponseParamsSpec = { $: {} };
ash.personalization_app.mojom.WallpaperProvider_SelectGooglePhotosAlbum_ParamsSpec = { $: {} };
ash.personalization_app.mojom.WallpaperProvider_SelectGooglePhotosAlbum_ResponseParamsSpec = { $: {} };
ash.personalization_app.mojom.WallpaperProvider_GetGooglePhotosDailyRefreshAlbumId_ParamsSpec = { $: {} };
ash.personalization_app.mojom.WallpaperProvider_GetGooglePhotosDailyRefreshAlbumId_ResponseParamsSpec = { $: {} };
ash.personalization_app.mojom.WallpaperProvider_SetCurrentWallpaperLayout_ParamsSpec = { $: {} };
ash.personalization_app.mojom.WallpaperProvider_SetDailyRefreshCollectionId_ParamsSpec = { $: {} };
ash.personalization_app.mojom.WallpaperProvider_SetDailyRefreshCollectionId_ResponseParamsSpec = { $: {} };
ash.personalization_app.mojom.WallpaperProvider_GetDailyRefreshCollectionId_ParamsSpec = { $: {} };
ash.personalization_app.mojom.WallpaperProvider_GetDailyRefreshCollectionId_ResponseParamsSpec = { $: {} };
ash.personalization_app.mojom.WallpaperProvider_UpdateDailyRefreshWallpaper_ParamsSpec = { $: {} };
ash.personalization_app.mojom.WallpaperProvider_UpdateDailyRefreshWallpaper_ResponseParamsSpec = { $: {} };
ash.personalization_app.mojom.WallpaperProvider_IsInTabletMode_ParamsSpec = { $: {} };
ash.personalization_app.mojom.WallpaperProvider_IsInTabletMode_ResponseParamsSpec = { $: {} };
ash.personalization_app.mojom.WallpaperProvider_ConfirmPreviewWallpaper_ParamsSpec = { $: {} };
ash.personalization_app.mojom.WallpaperProvider_CancelPreviewWallpaper_ParamsSpec = { $: {} };
ash.personalization_app.mojom.WallpaperProvider_ShouldShowTimeOfDayWallpaperDialog_ParamsSpec = { $: {} };
ash.personalization_app.mojom.WallpaperProvider_ShouldShowTimeOfDayWallpaperDialog_ResponseParamsSpec = { $: {} };
ash.personalization_app.mojom.ThemeObserver = {};
ash.personalization_app.mojom.ThemeObserver.$interfaceName = 'ash.personalization_app.mojom.ThemeObserver';
ash.personalization_app.mojom.ThemeObserver_OnColorModeChanged_ParamsSpec = { $: {} };
ash.personalization_app.mojom.ThemeObserver_OnColorModeAutoScheduleChanged_ParamsSpec = { $: {} };
ash.personalization_app.mojom.ThemeObserver_OnColorSchemeChanged_ParamsSpec = { $: {} };
ash.personalization_app.mojom.ThemeObserver_OnSampleColorSchemesChanged_ParamsSpec = { $: {} };
ash.personalization_app.mojom.ThemeObserver_OnStaticColorChanged_ParamsSpec = { $: {} };
ash.personalization_app.mojom.ThemeObserver_OnGeolocationPermissionForSystemServicesChanged_ParamsSpec = { $: {} };
ash.personalization_app.mojom.ThemeObserver_OnDaylightTimeChanged_ParamsSpec = { $: {} };
ash.personalization_app.mojom.ThemeProvider = {};
ash.personalization_app.mojom.ThemeProvider.$interfaceName = 'ash.personalization_app.mojom.ThemeProvider';
ash.personalization_app.mojom.ThemeProvider_SetThemeObserver_ParamsSpec = { $: {} };
ash.personalization_app.mojom.ThemeProvider_SetColorModePref_ParamsSpec = { $: {} };
ash.personalization_app.mojom.ThemeProvider_SetColorModeAutoScheduleEnabled_ParamsSpec = { $: {} };
ash.personalization_app.mojom.ThemeProvider_SetColorScheme_ParamsSpec = { $: {} };
ash.personalization_app.mojom.ThemeProvider_SetStaticColor_ParamsSpec = { $: {} };
ash.personalization_app.mojom.ThemeProvider_EnableGeolocationForSystemServices_ParamsSpec = { $: {} };
ash.personalization_app.mojom.ThemeProvider_GetColorScheme_ParamsSpec = { $: {} };
ash.personalization_app.mojom.ThemeProvider_GetColorScheme_ResponseParamsSpec = { $: {} };
ash.personalization_app.mojom.ThemeProvider_GetStaticColor_ParamsSpec = { $: {} };
ash.personalization_app.mojom.ThemeProvider_GetStaticColor_ResponseParamsSpec = { $: {} };
ash.personalization_app.mojom.ThemeProvider_GenerateSampleColorSchemes_ParamsSpec = { $: {} };
ash.personalization_app.mojom.ThemeProvider_GenerateSampleColorSchemes_ResponseParamsSpec = { $: {} };
ash.personalization_app.mojom.ThemeProvider_IsColorModeAutoScheduleEnabled_ParamsSpec = { $: {} };
ash.personalization_app.mojom.ThemeProvider_IsColorModeAutoScheduleEnabled_ResponseParamsSpec = { $: {} };
ash.personalization_app.mojom.ThemeProvider_IsDarkModeEnabled_ParamsSpec = { $: {} };
ash.personalization_app.mojom.ThemeProvider_IsDarkModeEnabled_ResponseParamsSpec = { $: {} };
ash.personalization_app.mojom.ThemeProvider_IsGeolocationEnabledForSystemServices_ParamsSpec = { $: {} };
ash.personalization_app.mojom.ThemeProvider_IsGeolocationEnabledForSystemServices_ResponseParamsSpec = { $: {} };
ash.personalization_app.mojom.ThemeProvider_IsGeolocationUserModifiable_ParamsSpec = { $: {} };
ash.personalization_app.mojom.ThemeProvider_IsGeolocationUserModifiable_ResponseParamsSpec = { $: {} };
ash.personalization_app.mojom.UserImageObserver = {};
ash.personalization_app.mojom.UserImageObserver.$interfaceName = 'ash.personalization_app.mojom.UserImageObserver';
ash.personalization_app.mojom.UserImageObserver_OnUserImageChanged_ParamsSpec = { $: {} };
ash.personalization_app.mojom.UserImageObserver_OnUserProfileImageUpdated_ParamsSpec = { $: {} };
ash.personalization_app.mojom.UserImageObserver_OnCameraPresenceCheckDone_ParamsSpec = { $: {} };
ash.personalization_app.mojom.UserImageObserver_OnIsEnterpriseManagedChanged_ParamsSpec = { $: {} };
ash.personalization_app.mojom.UserProvider = {};
ash.personalization_app.mojom.UserProvider.$interfaceName = 'ash.personalization_app.mojom.UserProvider';
ash.personalization_app.mojom.UserProvider_SetUserImageObserver_ParamsSpec = { $: {} };
ash.personalization_app.mojom.UserProvider_GetUserInfo_ParamsSpec = { $: {} };
ash.personalization_app.mojom.UserProvider_GetUserInfo_ResponseParamsSpec = { $: {} };
ash.personalization_app.mojom.UserProvider_GetDefaultUserImages_ParamsSpec = { $: {} };
ash.personalization_app.mojom.UserProvider_GetDefaultUserImages_ResponseParamsSpec = { $: {} };
ash.personalization_app.mojom.UserProvider_SelectDefaultImage_ParamsSpec = { $: {} };
ash.personalization_app.mojom.UserProvider_SelectProfileImage_ParamsSpec = { $: {} };
ash.personalization_app.mojom.UserProvider_SelectCameraImage_ParamsSpec = { $: {} };
ash.personalization_app.mojom.UserProvider_SelectImageFromDisk_ParamsSpec = { $: {} };
ash.personalization_app.mojom.UserProvider_SelectLastExternalUserImage_ParamsSpec = { $: {} };
ash.personalization_app.mojom.AmbientObserver = {};
ash.personalization_app.mojom.AmbientObserver.$interfaceName = 'ash.personalization_app.mojom.AmbientObserver';
ash.personalization_app.mojom.AmbientObserver_OnAmbientModeEnabledChanged_ParamsSpec = { $: {} };
ash.personalization_app.mojom.AmbientObserver_OnAmbientThemeChanged_ParamsSpec = { $: {} };
ash.personalization_app.mojom.AmbientObserver_OnTopicSourceChanged_ParamsSpec = { $: {} };
ash.personalization_app.mojom.AmbientObserver_OnScreenSaverDurationChanged_ParamsSpec = { $: {} };
ash.personalization_app.mojom.AmbientObserver_OnTemperatureUnitChanged_ParamsSpec = { $: {} };
ash.personalization_app.mojom.AmbientObserver_OnAlbumsChanged_ParamsSpec = { $: {} };
ash.personalization_app.mojom.AmbientObserver_OnPreviewsFetched_ParamsSpec = { $: {} };
ash.personalization_app.mojom.AmbientObserver_OnAmbientUiVisibilityChanged_ParamsSpec = { $: {} };
ash.personalization_app.mojom.AmbientObserver_OnGeolocationPermissionForSystemServicesChanged_ParamsSpec = { $: {} };
ash.personalization_app.mojom.AmbientObserver_OnAmbientThemePreviewImagesChanged_ParamsSpec = { $: {} };
ash.personalization_app.mojom.AmbientProvider = {};
ash.personalization_app.mojom.AmbientProvider.$interfaceName = 'ash.personalization_app.mojom.AmbientProvider';
ash.personalization_app.mojom.AmbientProvider_IsAmbientModeEnabled_ParamsSpec = { $: {} };
ash.personalization_app.mojom.AmbientProvider_IsAmbientModeEnabled_ResponseParamsSpec = { $: {} };
ash.personalization_app.mojom.AmbientProvider_SetAmbientModeEnabled_ParamsSpec = { $: {} };
ash.personalization_app.mojom.AmbientProvider_SetAmbientObserver_ParamsSpec = { $: {} };
ash.personalization_app.mojom.AmbientProvider_SetAmbientTheme_ParamsSpec = { $: {} };
ash.personalization_app.mojom.AmbientProvider_SetScreenSaverDuration_ParamsSpec = { $: {} };
ash.personalization_app.mojom.AmbientProvider_SetTopicSource_ParamsSpec = { $: {} };
ash.personalization_app.mojom.AmbientProvider_SetTemperatureUnit_ParamsSpec = { $: {} };
ash.personalization_app.mojom.AmbientProvider_SetAlbumSelected_ParamsSpec = { $: {} };
ash.personalization_app.mojom.AmbientProvider_SetPageViewed_ParamsSpec = { $: {} };
ash.personalization_app.mojom.AmbientProvider_FetchSettingsAndAlbums_ParamsSpec = { $: {} };
ash.personalization_app.mojom.AmbientProvider_StartScreenSaverPreview_ParamsSpec = { $: {} };
ash.personalization_app.mojom.AmbientProvider_ShouldShowTimeOfDayBanner_ParamsSpec = { $: {} };
ash.personalization_app.mojom.AmbientProvider_ShouldShowTimeOfDayBanner_ResponseParamsSpec = { $: {} };
ash.personalization_app.mojom.AmbientProvider_HandleTimeOfDayBannerDismissed_ParamsSpec = { $: {} };
ash.personalization_app.mojom.AmbientProvider_IsGeolocationEnabledForSystemServices_ParamsSpec = { $: {} };
ash.personalization_app.mojom.AmbientProvider_IsGeolocationEnabledForSystemServices_ResponseParamsSpec = { $: {} };
ash.personalization_app.mojom.AmbientProvider_IsGeolocationUserModifiable_ParamsSpec = { $: {} };
ash.personalization_app.mojom.AmbientProvider_IsGeolocationUserModifiable_ResponseParamsSpec = { $: {} };
ash.personalization_app.mojom.AmbientProvider_EnableGeolocationForSystemServices_ParamsSpec = { $: {} };
ash.personalization_app.mojom.KeyboardBacklightObserver = {};
ash.personalization_app.mojom.KeyboardBacklightObserver.$interfaceName = 'ash.personalization_app.mojom.KeyboardBacklightObserver';
ash.personalization_app.mojom.KeyboardBacklightObserver_OnBacklightStateChanged_ParamsSpec = { $: {} };
ash.personalization_app.mojom.KeyboardBacklightObserver_OnWallpaperColorChanged_ParamsSpec = { $: {} };
ash.personalization_app.mojom.KeyboardBacklightProvider = {};
ash.personalization_app.mojom.KeyboardBacklightProvider.$interfaceName = 'ash.personalization_app.mojom.KeyboardBacklightProvider';
ash.personalization_app.mojom.KeyboardBacklightProvider_SetKeyboardBacklightObserver_ParamsSpec = { $: {} };
ash.personalization_app.mojom.KeyboardBacklightProvider_SetBacklightColor_ParamsSpec = { $: {} };
ash.personalization_app.mojom.KeyboardBacklightProvider_SetBacklightZoneColor_ParamsSpec = { $: {} };
ash.personalization_app.mojom.KeyboardBacklightProvider_ShouldShowNudge_ParamsSpec = { $: {} };
ash.personalization_app.mojom.KeyboardBacklightProvider_ShouldShowNudge_ResponseParamsSpec = { $: {} };
ash.personalization_app.mojom.KeyboardBacklightProvider_HandleNudgeShown_ParamsSpec = { $: {} };

ash.personalization_app.mojom.kStaticColorGoogleBlue = 0x4285F4;

ash.personalization_app.mojom.kStaticColorLightPink = 0xFFD6D6;

ash.personalization_app.mojom.kStaticColorDarkGreen = 0x485045;

ash.personalization_app.mojom.kStaticColorLightPurple = 0xCBBFFF;

ash.personalization_app.mojom.kWhiteColor = 0xFFFFFF;

ash.personalization_app.mojom.kRedColor = 0xEE675C;

ash.personalization_app.mojom.kYellowColor = 0xFBBC04;

ash.personalization_app.mojom.kGreenColor = 0x34A853;

ash.personalization_app.mojom.kBlueColor = 0x00A3C2;

ash.personalization_app.mojom.kIndigoColor = 0x4285F4;

ash.personalization_app.mojom.kPurpleColor = 0xB76DF8;

// Enum: WallpaperLayout
ash.personalization_app.mojom.WallpaperLayout = {
  kCenter: 0,
  kCenterCropped: 1,
  kStretch: 2,
  kTile: 3,
};

// Enum: WallpaperType
ash.personalization_app.mojom.WallpaperType = {
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
ash.personalization_app.mojom.OnlineImageType = {
  kUnknown: 0,
  kLight: 1,
  kDark: 2,
  kPreview: 3,
  kMorning: 4,
  kLateAfternoon: 5,
};

// Enum: GooglePhotosEnablementState
ash.personalization_app.mojom.GooglePhotosEnablementState = {
  kError: 0,
  kDisabled: 1,
  kEnabled: 2,
};

// Enum: StaticColor
ash.personalization_app.mojom.StaticColor = {
  kUnknown: 0,
  kGoogleBlue: 1,
  kLightPink: 2,
  kDarkGreen: 3,
  kLightPurple: 4,
};

// Enum: AmbientTheme
ash.personalization_app.mojom.AmbientTheme = {
  kSlideshow: 0,
  kFeelTheBreeze: 1,
  kFloatOnBy: 2,
  kVideo: 3,
};

// Enum: TopicSource
ash.personalization_app.mojom.TopicSource = {
  kGooglePhotos: 0,
  kArtGallery: 1,
  kVideo: 2,
};

// Enum: TemperatureUnit
ash.personalization_app.mojom.TemperatureUnit = {
  kFahrenheit: 0,
  kCelsius: 1,
};

// Enum: AmbientUiVisibility
ash.personalization_app.mojom.AmbientUiVisibility = {
  kShouldShow: 0,
  kPreview: 1,
  kHidden: 2,
  kClosed: 3,
};

// Enum: BacklightColor
ash.personalization_app.mojom.BacklightColor = {
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
    ash.personalization_app.mojom.UserImageSpec, 'ash.personalization_app.mojom.UserImage', {
      'default_image': {
        'ordinal': 0,
        'type': ash.personalization_app.mojom.DefaultUserImageSpec.$,
        'nullable': false,
      },
      'external_image': {
        'ordinal': 1,
        'type': mojo_base.mojom.BigBufferSpec.$,
        'nullable': false,
      },
      'profile_image': {
        'ordinal': 2,
        'type': ash.personalization_app.mojom.ProfileImageSpec.$,
        'nullable': false,
      },
      'invalid_image': {
        'ordinal': 3,
        'type': ash.personalization_app.mojom.InvalidImageSpec.$,
        'nullable': false,
      },
    });

// Union: CurrentBacklightState
mojo.internal.Union(
    ash.personalization_app.mojom.CurrentBacklightStateSpec, 'ash.personalization_app.mojom.CurrentBacklightState', {
      'color': {
        'ordinal': 0,
        'type': ash.personalization_app.mojom.BacklightColorSpec.$,
        'nullable': false,
      },
      'zone_colors': {
        'ordinal': 1,
        'type': mojo.internal.Array(ash.personalization_app.mojom.BacklightColorSpec.$, false),
        'nullable': false,
      },
    });

// Struct: WallpaperCollection
mojo.internal.Struct(
    ash.personalization_app.mojom.WallpaperCollectionSpec, 'ash.personalization_app.mojom.WallpaperCollection', [
      mojo.internal.StructField('id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('name', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('description_content', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('previews', 24, 0, mojo.internal.Array(url.mojom.UrlSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: GooglePhotosAlbum
mojo.internal.Struct(
    ash.personalization_app.mojom.GooglePhotosAlbumSpec, 'ash.personalization_app.mojom.GooglePhotosAlbum', [
      mojo.internal.StructField('id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('title', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('preview', 16, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('timestamp', 24, 0, mojo_base.mojom.TimeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('photo_count', 32, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('is_shared', 36, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 48]]);

// Struct: FetchGooglePhotosAlbumsResponse
mojo.internal.Struct(
    ash.personalization_app.mojom.FetchGooglePhotosAlbumsResponseSpec, 'ash.personalization_app.mojom.FetchGooglePhotosAlbumsResponse', [
      mojo.internal.StructField('albums', 0, 0, mojo.internal.Array(ash.personalization_app.mojom.GooglePhotosAlbumSpec.$, false), null, true, 0, undefined),
      mojo.internal.StructField('resume_token', 8, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 24]]);

// Struct: WallpaperImage
mojo.internal.Struct(
    ash.personalization_app.mojom.WallpaperImageSpec, 'ash.personalization_app.mojom.WallpaperImage', [
      mojo.internal.StructField('url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('attribution', 8, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('asset_id', 16, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('unit_id', 24, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('type', 32, 0, ash.personalization_app.mojom.OnlineImageTypeSpec.$, null, false, 0, undefined),
    ],
    [[0, 48]]);

// Struct: GooglePhotosPhoto
mojo.internal.Struct(
    ash.personalization_app.mojom.GooglePhotosPhotoSpec, 'ash.personalization_app.mojom.GooglePhotosPhoto', [
      mojo.internal.StructField('id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('dedup_key', 8, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('name', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('date', 24, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('url', 32, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('location', 40, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 56]]);

// Struct: FetchGooglePhotosPhotosResponse
mojo.internal.Struct(
    ash.personalization_app.mojom.FetchGooglePhotosPhotosResponseSpec, 'ash.personalization_app.mojom.FetchGooglePhotosPhotosResponse', [
      mojo.internal.StructField('photos', 0, 0, mojo.internal.Array(ash.personalization_app.mojom.GooglePhotosPhotoSpec.$, false), null, true, 0, undefined),
      mojo.internal.StructField('resume_token', 8, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 24]]);

// Struct: CurrentAttribution
mojo.internal.Struct(
    ash.personalization_app.mojom.CurrentAttributionSpec, 'ash.personalization_app.mojom.CurrentAttribution', [
      mojo.internal.StructField('attribution', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('key', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: CurrentWallpaper
mojo.internal.Struct(
    ash.personalization_app.mojom.CurrentWallpaperSpec, 'ash.personalization_app.mojom.CurrentWallpaper', [
      mojo.internal.StructField('layout', 0, 0, ash.personalization_app.mojom.WallpaperLayoutSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('type', 8, 0, ash.personalization_app.mojom.WallpaperTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('key', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('description_title', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('description_content', 32, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('action_url', 40, 0, url.mojom.UrlSpec.$, null, true, 0, undefined),
    ],
    [[0, 56]]);

// Struct: SampleColorScheme
mojo.internal.Struct(
    ash.personalization_app.mojom.SampleColorSchemeSpec, 'ash.personalization_app.mojom.SampleColorScheme', [
      mojo.internal.StructField('scheme', 0, 0, ash.style.mojom.ColorSchemeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('primary', 8, 0, skia.mojom.SkColorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('secondary', 16, 0, skia.mojom.SkColorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('tertiary', 24, 0, skia.mojom.SkColorSpec.$, null, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: UserInfo
mojo.internal.Struct(
    ash.personalization_app.mojom.UserInfoSpec, 'ash.personalization_app.mojom.UserInfo', [
      mojo.internal.StructField('email', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('name', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: DeprecatedSourceInfo
mojo.internal.Struct(
    ash.personalization_app.mojom.DeprecatedSourceInfoSpec, 'ash.personalization_app.mojom.DeprecatedSourceInfo', [
      mojo.internal.StructField('author', 0, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('website', 8, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: DefaultUserImage
mojo.internal.Struct(
    ash.personalization_app.mojom.DefaultUserImageSpec, 'ash.personalization_app.mojom.DefaultUserImage', [
      mojo.internal.StructField('title', 0, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('url', 8, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('source_info', 16, 0, ash.personalization_app.mojom.DeprecatedSourceInfoSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('index', 24, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: ProfileImage
mojo.internal.Struct(
    ash.personalization_app.mojom.ProfileImageSpec, 'ash.personalization_app.mojom.ProfileImage', [
    ],
    [[0, 8]]);

// Struct: InvalidImage
mojo.internal.Struct(
    ash.personalization_app.mojom.InvalidImageSpec, 'ash.personalization_app.mojom.InvalidImage', [
    ],
    [[0, 8]]);

// Struct: AmbientModeAlbum
mojo.internal.Struct(
    ash.personalization_app.mojom.AmbientModeAlbumSpec, 'ash.personalization_app.mojom.AmbientModeAlbum', [
      mojo.internal.StructField('id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('title', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('description', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('topic_source', 24, 0, ash.personalization_app.mojom.TopicSourceSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('url', 32, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('number_of_photos', 40, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('checked', 44, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 56]]);

// Interface: WallpaperObserver
mojo.internal.Struct(
    ash.personalization_app.mojom.WallpaperObserver_OnWallpaperPreviewEnded_ParamsSpec, 'ash.personalization_app.mojom.WallpaperObserver_OnWallpaperPreviewEnded_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.personalization_app.mojom.WallpaperObserver_OnAttributionChanged_ParamsSpec, 'ash.personalization_app.mojom.WallpaperObserver_OnAttributionChanged_Params', [
      mojo.internal.StructField('attribution', 0, 0, ash.personalization_app.mojom.CurrentAttributionSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.personalization_app.mojom.WallpaperObserver_OnWallpaperChanged_ParamsSpec, 'ash.personalization_app.mojom.WallpaperObserver_OnWallpaperChanged_Params', [
      mojo.internal.StructField('image', 0, 0, ash.personalization_app.mojom.CurrentWallpaperSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

ash.personalization_app.mojom.WallpaperObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.personalization_app.mojom.WallpaperObserverRemote = class {
  static get $interfaceName() {
    return 'ash.personalization_app.mojom.WallpaperObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.personalization_app.mojom.WallpaperObserverPendingReceiver,
      handle);
    this.$ = new ash.personalization_app.mojom.WallpaperObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.personalization_app.mojom.WallpaperObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onWallpaperPreviewEnded() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.personalization_app.mojom.WallpaperObserver_OnWallpaperPreviewEnded_ParamsSpec,
      null,
      [],
      false);
  }

  onAttributionChanged(attribution) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.personalization_app.mojom.WallpaperObserver_OnAttributionChanged_ParamsSpec,
      null,
      [attribution],
      false);
  }

  onWallpaperChanged(image) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.personalization_app.mojom.WallpaperObserver_OnWallpaperChanged_ParamsSpec,
      null,
      [image],
      false);
  }

};

ash.personalization_app.mojom.WallpaperObserver.getRemote = function() {
  let remote = new ash.personalization_app.mojom.WallpaperObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.personalization_app.mojom.WallpaperObserver',
    'context');
  return remote.$;
};

ash.personalization_app.mojom.WallpaperObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(handle);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = ash.personalization_app.mojom.WallpaperObserver_OnWallpaperPreviewEnded_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onWallpaperPreviewEnded();
          break;
        }
        case 1: {
          const params = ash.personalization_app.mojom.WallpaperObserver_OnAttributionChanged_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onAttributionChanged(params.attribution);
          break;
        }
        case 2: {
          const params = ash.personalization_app.mojom.WallpaperObserver_OnWallpaperChanged_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onWallpaperChanged(params.image);
          break;
        }
      }
    });
  }
};

ash.personalization_app.mojom.WallpaperObserverReceiver = ash.personalization_app.mojom.WallpaperObserverReceiver;

ash.personalization_app.mojom.WallpaperObserverPtr = ash.personalization_app.mojom.WallpaperObserverRemote;
ash.personalization_app.mojom.WallpaperObserverRequest = ash.personalization_app.mojom.WallpaperObserverPendingReceiver;


// Interface: WallpaperProvider
mojo.internal.Struct(
    ash.personalization_app.mojom.WallpaperProvider_MakeTransparent_ParamsSpec, 'ash.personalization_app.mojom.WallpaperProvider_MakeTransparent_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.personalization_app.mojom.WallpaperProvider_MakeOpaque_ParamsSpec, 'ash.personalization_app.mojom.WallpaperProvider_MakeOpaque_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.personalization_app.mojom.WallpaperProvider_FetchCollections_ParamsSpec, 'ash.personalization_app.mojom.WallpaperProvider_FetchCollections_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.personalization_app.mojom.WallpaperProvider_FetchCollections_ResponseParamsSpec, 'ash.personalization_app.mojom.WallpaperProvider_FetchCollections_ResponseParams', [
      mojo.internal.StructField('collections', 0, 0, mojo.internal.Array(ash.personalization_app.mojom.WallpaperCollectionSpec.$, false), null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.personalization_app.mojom.WallpaperProvider_FetchImagesForCollection_ParamsSpec, 'ash.personalization_app.mojom.WallpaperProvider_FetchImagesForCollection_Params', [
      mojo.internal.StructField('collection_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.personalization_app.mojom.WallpaperProvider_FetchImagesForCollection_ResponseParamsSpec, 'ash.personalization_app.mojom.WallpaperProvider_FetchImagesForCollection_ResponseParams', [
      mojo.internal.StructField('images', 0, 0, mojo.internal.Array(ash.personalization_app.mojom.WallpaperImageSpec.$, false), null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.personalization_app.mojom.WallpaperProvider_FetchGooglePhotosAlbums_ParamsSpec, 'ash.personalization_app.mojom.WallpaperProvider_FetchGooglePhotosAlbums_Params', [
      mojo.internal.StructField('resume_token', 0, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.personalization_app.mojom.WallpaperProvider_FetchGooglePhotosAlbums_ResponseParamsSpec, 'ash.personalization_app.mojom.WallpaperProvider_FetchGooglePhotosAlbums_ResponseParams', [
      mojo.internal.StructField('response', 0, 0, ash.personalization_app.mojom.FetchGooglePhotosAlbumsResponseSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.personalization_app.mojom.WallpaperProvider_FetchGooglePhotosSharedAlbums_ParamsSpec, 'ash.personalization_app.mojom.WallpaperProvider_FetchGooglePhotosSharedAlbums_Params', [
      mojo.internal.StructField('resume_token', 0, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.personalization_app.mojom.WallpaperProvider_FetchGooglePhotosSharedAlbums_ResponseParamsSpec, 'ash.personalization_app.mojom.WallpaperProvider_FetchGooglePhotosSharedAlbums_ResponseParams', [
      mojo.internal.StructField('response', 0, 0, ash.personalization_app.mojom.FetchGooglePhotosAlbumsResponseSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.personalization_app.mojom.WallpaperProvider_FetchGooglePhotosEnabled_ParamsSpec, 'ash.personalization_app.mojom.WallpaperProvider_FetchGooglePhotosEnabled_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.personalization_app.mojom.WallpaperProvider_FetchGooglePhotosEnabled_ResponseParamsSpec, 'ash.personalization_app.mojom.WallpaperProvider_FetchGooglePhotosEnabled_ResponseParams', [
      mojo.internal.StructField('state', 0, 0, ash.personalization_app.mojom.GooglePhotosEnablementStateSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.personalization_app.mojom.WallpaperProvider_FetchGooglePhotosPhotos_ParamsSpec, 'ash.personalization_app.mojom.WallpaperProvider_FetchGooglePhotosPhotos_Params', [
      mojo.internal.StructField('item_id', 0, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('album_id', 8, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('resume_token', 16, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    ash.personalization_app.mojom.WallpaperProvider_FetchGooglePhotosPhotos_ResponseParamsSpec, 'ash.personalization_app.mojom.WallpaperProvider_FetchGooglePhotosPhotos_ResponseParams', [
      mojo.internal.StructField('response', 0, 0, ash.personalization_app.mojom.FetchGooglePhotosPhotosResponseSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.personalization_app.mojom.WallpaperProvider_GetLocalImages_ParamsSpec, 'ash.personalization_app.mojom.WallpaperProvider_GetLocalImages_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.personalization_app.mojom.WallpaperProvider_GetLocalImages_ResponseParamsSpec, 'ash.personalization_app.mojom.WallpaperProvider_GetLocalImages_ResponseParams', [
      mojo.internal.StructField('images', 0, 0, mojo.internal.Array(mojo_base.mojom.FilePathSpec.$, false), null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.personalization_app.mojom.WallpaperProvider_GetDefaultImageThumbnail_ParamsSpec, 'ash.personalization_app.mojom.WallpaperProvider_GetDefaultImageThumbnail_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.personalization_app.mojom.WallpaperProvider_GetDefaultImageThumbnail_ResponseParamsSpec, 'ash.personalization_app.mojom.WallpaperProvider_GetDefaultImageThumbnail_ResponseParams', [
      mojo.internal.StructField('data', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.personalization_app.mojom.WallpaperProvider_GetLocalImageThumbnail_ParamsSpec, 'ash.personalization_app.mojom.WallpaperProvider_GetLocalImageThumbnail_Params', [
      mojo.internal.StructField('file_path', 0, 0, mojo_base.mojom.FilePathSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.personalization_app.mojom.WallpaperProvider_GetLocalImageThumbnail_ResponseParamsSpec, 'ash.personalization_app.mojom.WallpaperProvider_GetLocalImageThumbnail_ResponseParams', [
      mojo.internal.StructField('data', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.personalization_app.mojom.WallpaperProvider_SetWallpaperObserver_ParamsSpec, 'ash.personalization_app.mojom.WallpaperProvider_SetWallpaperObserver_Params', [
      mojo.internal.StructField('observer', 0, 0, mojo.internal.InterfaceProxy(ash.personalization_app.mojom.WallpaperObserverSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.personalization_app.mojom.WallpaperProvider_SelectWallpaper_ParamsSpec, 'ash.personalization_app.mojom.WallpaperProvider_SelectWallpaper_Params', [
      mojo.internal.StructField('unit_id', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('preview_mode', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    ash.personalization_app.mojom.WallpaperProvider_SelectWallpaper_ResponseParamsSpec, 'ash.personalization_app.mojom.WallpaperProvider_SelectWallpaper_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.personalization_app.mojom.WallpaperProvider_SelectDefaultImage_ParamsSpec, 'ash.personalization_app.mojom.WallpaperProvider_SelectDefaultImage_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.personalization_app.mojom.WallpaperProvider_SelectDefaultImage_ResponseParamsSpec, 'ash.personalization_app.mojom.WallpaperProvider_SelectDefaultImage_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.personalization_app.mojom.WallpaperProvider_SelectLocalImage_ParamsSpec, 'ash.personalization_app.mojom.WallpaperProvider_SelectLocalImage_Params', [
      mojo.internal.StructField('path', 0, 0, mojo_base.mojom.FilePathSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('layout', 8, 0, ash.personalization_app.mojom.WallpaperLayoutSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('preview_mode', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    ash.personalization_app.mojom.WallpaperProvider_SelectLocalImage_ResponseParamsSpec, 'ash.personalization_app.mojom.WallpaperProvider_SelectLocalImage_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.personalization_app.mojom.WallpaperProvider_SelectGooglePhotosPhoto_ParamsSpec, 'ash.personalization_app.mojom.WallpaperProvider_SelectGooglePhotosPhoto_Params', [
      mojo.internal.StructField('id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('layout', 8, 0, ash.personalization_app.mojom.WallpaperLayoutSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('preview_mode', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    ash.personalization_app.mojom.WallpaperProvider_SelectGooglePhotosPhoto_ResponseParamsSpec, 'ash.personalization_app.mojom.WallpaperProvider_SelectGooglePhotosPhoto_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.personalization_app.mojom.WallpaperProvider_SelectGooglePhotosAlbum_ParamsSpec, 'ash.personalization_app.mojom.WallpaperProvider_SelectGooglePhotosAlbum_Params', [
      mojo.internal.StructField('id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.personalization_app.mojom.WallpaperProvider_SelectGooglePhotosAlbum_ResponseParamsSpec, 'ash.personalization_app.mojom.WallpaperProvider_SelectGooglePhotosAlbum_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.personalization_app.mojom.WallpaperProvider_GetGooglePhotosDailyRefreshAlbumId_ParamsSpec, 'ash.personalization_app.mojom.WallpaperProvider_GetGooglePhotosDailyRefreshAlbumId_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.personalization_app.mojom.WallpaperProvider_GetGooglePhotosDailyRefreshAlbumId_ResponseParamsSpec, 'ash.personalization_app.mojom.WallpaperProvider_GetGooglePhotosDailyRefreshAlbumId_ResponseParams', [
      mojo.internal.StructField('album_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.personalization_app.mojom.WallpaperProvider_SetCurrentWallpaperLayout_ParamsSpec, 'ash.personalization_app.mojom.WallpaperProvider_SetCurrentWallpaperLayout_Params', [
      mojo.internal.StructField('layout', 0, 0, ash.personalization_app.mojom.WallpaperLayoutSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.personalization_app.mojom.WallpaperProvider_SetDailyRefreshCollectionId_ParamsSpec, 'ash.personalization_app.mojom.WallpaperProvider_SetDailyRefreshCollectionId_Params', [
      mojo.internal.StructField('collection_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.personalization_app.mojom.WallpaperProvider_SetDailyRefreshCollectionId_ResponseParamsSpec, 'ash.personalization_app.mojom.WallpaperProvider_SetDailyRefreshCollectionId_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.personalization_app.mojom.WallpaperProvider_GetDailyRefreshCollectionId_ParamsSpec, 'ash.personalization_app.mojom.WallpaperProvider_GetDailyRefreshCollectionId_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.personalization_app.mojom.WallpaperProvider_GetDailyRefreshCollectionId_ResponseParamsSpec, 'ash.personalization_app.mojom.WallpaperProvider_GetDailyRefreshCollectionId_ResponseParams', [
      mojo.internal.StructField('collection_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.personalization_app.mojom.WallpaperProvider_UpdateDailyRefreshWallpaper_ParamsSpec, 'ash.personalization_app.mojom.WallpaperProvider_UpdateDailyRefreshWallpaper_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.personalization_app.mojom.WallpaperProvider_UpdateDailyRefreshWallpaper_ResponseParamsSpec, 'ash.personalization_app.mojom.WallpaperProvider_UpdateDailyRefreshWallpaper_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.personalization_app.mojom.WallpaperProvider_IsInTabletMode_ParamsSpec, 'ash.personalization_app.mojom.WallpaperProvider_IsInTabletMode_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.personalization_app.mojom.WallpaperProvider_IsInTabletMode_ResponseParamsSpec, 'ash.personalization_app.mojom.WallpaperProvider_IsInTabletMode_ResponseParams', [
      mojo.internal.StructField('tablet_mode', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.personalization_app.mojom.WallpaperProvider_ConfirmPreviewWallpaper_ParamsSpec, 'ash.personalization_app.mojom.WallpaperProvider_ConfirmPreviewWallpaper_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.personalization_app.mojom.WallpaperProvider_CancelPreviewWallpaper_ParamsSpec, 'ash.personalization_app.mojom.WallpaperProvider_CancelPreviewWallpaper_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.personalization_app.mojom.WallpaperProvider_ShouldShowTimeOfDayWallpaperDialog_ParamsSpec, 'ash.personalization_app.mojom.WallpaperProvider_ShouldShowTimeOfDayWallpaperDialog_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.personalization_app.mojom.WallpaperProvider_ShouldShowTimeOfDayWallpaperDialog_ResponseParamsSpec, 'ash.personalization_app.mojom.WallpaperProvider_ShouldShowTimeOfDayWallpaperDialog_ResponseParams', [
      mojo.internal.StructField('should_show_dialog', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

ash.personalization_app.mojom.WallpaperProviderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.personalization_app.mojom.WallpaperProviderRemote = class {
  static get $interfaceName() {
    return 'ash.personalization_app.mojom.WallpaperProvider';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.personalization_app.mojom.WallpaperProviderPendingReceiver,
      handle);
    this.$ = new ash.personalization_app.mojom.WallpaperProviderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.personalization_app.mojom.WallpaperProviderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  makeTransparent() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.personalization_app.mojom.WallpaperProvider_MakeTransparent_ParamsSpec,
      null,
      [],
      false);
  }

  makeOpaque() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.personalization_app.mojom.WallpaperProvider_MakeOpaque_ParamsSpec,
      null,
      [],
      false);
  }

  fetchCollections() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.personalization_app.mojom.WallpaperProvider_FetchCollections_ParamsSpec,
      ash.personalization_app.mojom.WallpaperProvider_FetchCollections_ResponseParamsSpec,
      [],
      false);
  }

  fetchImagesForCollection(collection_id) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      ash.personalization_app.mojom.WallpaperProvider_FetchImagesForCollection_ParamsSpec,
      ash.personalization_app.mojom.WallpaperProvider_FetchImagesForCollection_ResponseParamsSpec,
      [collection_id],
      false);
  }

  fetchGooglePhotosAlbums(resume_token) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      ash.personalization_app.mojom.WallpaperProvider_FetchGooglePhotosAlbums_ParamsSpec,
      ash.personalization_app.mojom.WallpaperProvider_FetchGooglePhotosAlbums_ResponseParamsSpec,
      [resume_token],
      false);
  }

  fetchGooglePhotosSharedAlbums(resume_token) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      ash.personalization_app.mojom.WallpaperProvider_FetchGooglePhotosSharedAlbums_ParamsSpec,
      ash.personalization_app.mojom.WallpaperProvider_FetchGooglePhotosSharedAlbums_ResponseParamsSpec,
      [resume_token],
      false);
  }

  fetchGooglePhotosEnabled() {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      ash.personalization_app.mojom.WallpaperProvider_FetchGooglePhotosEnabled_ParamsSpec,
      ash.personalization_app.mojom.WallpaperProvider_FetchGooglePhotosEnabled_ResponseParamsSpec,
      [],
      false);
  }

  fetchGooglePhotosPhotos(item_id, album_id, resume_token) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      ash.personalization_app.mojom.WallpaperProvider_FetchGooglePhotosPhotos_ParamsSpec,
      ash.personalization_app.mojom.WallpaperProvider_FetchGooglePhotosPhotos_ResponseParamsSpec,
      [item_id, album_id, resume_token],
      false);
  }

  getLocalImages() {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      ash.personalization_app.mojom.WallpaperProvider_GetLocalImages_ParamsSpec,
      ash.personalization_app.mojom.WallpaperProvider_GetLocalImages_ResponseParamsSpec,
      [],
      false);
  }

  getDefaultImageThumbnail() {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      ash.personalization_app.mojom.WallpaperProvider_GetDefaultImageThumbnail_ParamsSpec,
      ash.personalization_app.mojom.WallpaperProvider_GetDefaultImageThumbnail_ResponseParamsSpec,
      [],
      false);
  }

  getLocalImageThumbnail(file_path) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      ash.personalization_app.mojom.WallpaperProvider_GetLocalImageThumbnail_ParamsSpec,
      ash.personalization_app.mojom.WallpaperProvider_GetLocalImageThumbnail_ResponseParamsSpec,
      [file_path],
      false);
  }

  setWallpaperObserver(observer) {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      ash.personalization_app.mojom.WallpaperProvider_SetWallpaperObserver_ParamsSpec,
      null,
      [observer],
      false);
  }

  selectWallpaper(unit_id, preview_mode) {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      ash.personalization_app.mojom.WallpaperProvider_SelectWallpaper_ParamsSpec,
      ash.personalization_app.mojom.WallpaperProvider_SelectWallpaper_ResponseParamsSpec,
      [unit_id, preview_mode],
      false);
  }

  selectDefaultImage() {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
      ash.personalization_app.mojom.WallpaperProvider_SelectDefaultImage_ParamsSpec,
      ash.personalization_app.mojom.WallpaperProvider_SelectDefaultImage_ResponseParamsSpec,
      [],
      false);
  }

  selectLocalImage(path, layout, preview_mode) {
    // Ordinal: 14
    return this.proxy.sendMessage(
      14,  // ordinal
      ash.personalization_app.mojom.WallpaperProvider_SelectLocalImage_ParamsSpec,
      ash.personalization_app.mojom.WallpaperProvider_SelectLocalImage_ResponseParamsSpec,
      [path, layout, preview_mode],
      false);
  }

  selectGooglePhotosPhoto(id, layout, preview_mode) {
    // Ordinal: 15
    return this.proxy.sendMessage(
      15,  // ordinal
      ash.personalization_app.mojom.WallpaperProvider_SelectGooglePhotosPhoto_ParamsSpec,
      ash.personalization_app.mojom.WallpaperProvider_SelectGooglePhotosPhoto_ResponseParamsSpec,
      [id, layout, preview_mode],
      false);
  }

  selectGooglePhotosAlbum(id) {
    // Ordinal: 16
    return this.proxy.sendMessage(
      16,  // ordinal
      ash.personalization_app.mojom.WallpaperProvider_SelectGooglePhotosAlbum_ParamsSpec,
      ash.personalization_app.mojom.WallpaperProvider_SelectGooglePhotosAlbum_ResponseParamsSpec,
      [id],
      false);
  }

  getGooglePhotosDailyRefreshAlbumId() {
    // Ordinal: 17
    return this.proxy.sendMessage(
      17,  // ordinal
      ash.personalization_app.mojom.WallpaperProvider_GetGooglePhotosDailyRefreshAlbumId_ParamsSpec,
      ash.personalization_app.mojom.WallpaperProvider_GetGooglePhotosDailyRefreshAlbumId_ResponseParamsSpec,
      [],
      false);
  }

  setCurrentWallpaperLayout(layout) {
    // Ordinal: 18
    return this.proxy.sendMessage(
      18,  // ordinal
      ash.personalization_app.mojom.WallpaperProvider_SetCurrentWallpaperLayout_ParamsSpec,
      null,
      [layout],
      false);
  }

  setDailyRefreshCollectionId(collection_id) {
    // Ordinal: 19
    return this.proxy.sendMessage(
      19,  // ordinal
      ash.personalization_app.mojom.WallpaperProvider_SetDailyRefreshCollectionId_ParamsSpec,
      ash.personalization_app.mojom.WallpaperProvider_SetDailyRefreshCollectionId_ResponseParamsSpec,
      [collection_id],
      false);
  }

  getDailyRefreshCollectionId() {
    // Ordinal: 20
    return this.proxy.sendMessage(
      20,  // ordinal
      ash.personalization_app.mojom.WallpaperProvider_GetDailyRefreshCollectionId_ParamsSpec,
      ash.personalization_app.mojom.WallpaperProvider_GetDailyRefreshCollectionId_ResponseParamsSpec,
      [],
      false);
  }

  updateDailyRefreshWallpaper() {
    // Ordinal: 21
    return this.proxy.sendMessage(
      21,  // ordinal
      ash.personalization_app.mojom.WallpaperProvider_UpdateDailyRefreshWallpaper_ParamsSpec,
      ash.personalization_app.mojom.WallpaperProvider_UpdateDailyRefreshWallpaper_ResponseParamsSpec,
      [],
      false);
  }

  isInTabletMode() {
    // Ordinal: 22
    return this.proxy.sendMessage(
      22,  // ordinal
      ash.personalization_app.mojom.WallpaperProvider_IsInTabletMode_ParamsSpec,
      ash.personalization_app.mojom.WallpaperProvider_IsInTabletMode_ResponseParamsSpec,
      [],
      false);
  }

  confirmPreviewWallpaper() {
    // Ordinal: 23
    return this.proxy.sendMessage(
      23,  // ordinal
      ash.personalization_app.mojom.WallpaperProvider_ConfirmPreviewWallpaper_ParamsSpec,
      null,
      [],
      false);
  }

  cancelPreviewWallpaper() {
    // Ordinal: 24
    return this.proxy.sendMessage(
      24,  // ordinal
      ash.personalization_app.mojom.WallpaperProvider_CancelPreviewWallpaper_ParamsSpec,
      null,
      [],
      false);
  }

  shouldShowTimeOfDayWallpaperDialog() {
    // Ordinal: 25
    return this.proxy.sendMessage(
      25,  // ordinal
      ash.personalization_app.mojom.WallpaperProvider_ShouldShowTimeOfDayWallpaperDialog_ParamsSpec,
      ash.personalization_app.mojom.WallpaperProvider_ShouldShowTimeOfDayWallpaperDialog_ResponseParamsSpec,
      [],
      false);
  }

};

ash.personalization_app.mojom.WallpaperProvider.getRemote = function() {
  let remote = new ash.personalization_app.mojom.WallpaperProviderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.personalization_app.mojom.WallpaperProvider',
    'context');
  return remote.$;
};

ash.personalization_app.mojom.WallpaperProviderReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(handle);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = ash.personalization_app.mojom.WallpaperProvider_MakeTransparent_ParamsSpec.$.decode(message.payload);
          const result = this.impl.makeTransparent();
          break;
        }
        case 1: {
          const params = ash.personalization_app.mojom.WallpaperProvider_MakeOpaque_ParamsSpec.$.decode(message.payload);
          const result = this.impl.makeOpaque();
          break;
        }
        case 2: {
          const params = ash.personalization_app.mojom.WallpaperProvider_FetchCollections_ParamsSpec.$.decode(message.payload);
          const result = this.impl.fetchCollections();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.personalization_app.mojom.WallpaperProvider_FetchCollections_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const params = ash.personalization_app.mojom.WallpaperProvider_FetchImagesForCollection_ParamsSpec.$.decode(message.payload);
          const result = this.impl.fetchImagesForCollection(params.collection_id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.personalization_app.mojom.WallpaperProvider_FetchImagesForCollection_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 4: {
          const params = ash.personalization_app.mojom.WallpaperProvider_FetchGooglePhotosAlbums_ParamsSpec.$.decode(message.payload);
          const result = this.impl.fetchGooglePhotosAlbums(params.resume_token);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.personalization_app.mojom.WallpaperProvider_FetchGooglePhotosAlbums_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 5: {
          const params = ash.personalization_app.mojom.WallpaperProvider_FetchGooglePhotosSharedAlbums_ParamsSpec.$.decode(message.payload);
          const result = this.impl.fetchGooglePhotosSharedAlbums(params.resume_token);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.personalization_app.mojom.WallpaperProvider_FetchGooglePhotosSharedAlbums_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 6: {
          const params = ash.personalization_app.mojom.WallpaperProvider_FetchGooglePhotosEnabled_ParamsSpec.$.decode(message.payload);
          const result = this.impl.fetchGooglePhotosEnabled();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.personalization_app.mojom.WallpaperProvider_FetchGooglePhotosEnabled_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 7: {
          const params = ash.personalization_app.mojom.WallpaperProvider_FetchGooglePhotosPhotos_ParamsSpec.$.decode(message.payload);
          const result = this.impl.fetchGooglePhotosPhotos(params.item_id, params.album_id, params.resume_token);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.personalization_app.mojom.WallpaperProvider_FetchGooglePhotosPhotos_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 8: {
          const params = ash.personalization_app.mojom.WallpaperProvider_GetLocalImages_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getLocalImages();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.personalization_app.mojom.WallpaperProvider_GetLocalImages_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 9: {
          const params = ash.personalization_app.mojom.WallpaperProvider_GetDefaultImageThumbnail_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getDefaultImageThumbnail();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.personalization_app.mojom.WallpaperProvider_GetDefaultImageThumbnail_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 10: {
          const params = ash.personalization_app.mojom.WallpaperProvider_GetLocalImageThumbnail_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getLocalImageThumbnail(params.file_path);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.personalization_app.mojom.WallpaperProvider_GetLocalImageThumbnail_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 11: {
          const params = ash.personalization_app.mojom.WallpaperProvider_SetWallpaperObserver_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setWallpaperObserver(params.observer);
          break;
        }
        case 12: {
          const params = ash.personalization_app.mojom.WallpaperProvider_SelectWallpaper_ParamsSpec.$.decode(message.payload);
          const result = this.impl.selectWallpaper(params.unit_id, params.preview_mode);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.personalization_app.mojom.WallpaperProvider_SelectWallpaper_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 13: {
          const params = ash.personalization_app.mojom.WallpaperProvider_SelectDefaultImage_ParamsSpec.$.decode(message.payload);
          const result = this.impl.selectDefaultImage();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.personalization_app.mojom.WallpaperProvider_SelectDefaultImage_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 14: {
          const params = ash.personalization_app.mojom.WallpaperProvider_SelectLocalImage_ParamsSpec.$.decode(message.payload);
          const result = this.impl.selectLocalImage(params.path, params.layout, params.preview_mode);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.personalization_app.mojom.WallpaperProvider_SelectLocalImage_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 15: {
          const params = ash.personalization_app.mojom.WallpaperProvider_SelectGooglePhotosPhoto_ParamsSpec.$.decode(message.payload);
          const result = this.impl.selectGooglePhotosPhoto(params.id, params.layout, params.preview_mode);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.personalization_app.mojom.WallpaperProvider_SelectGooglePhotosPhoto_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 16: {
          const params = ash.personalization_app.mojom.WallpaperProvider_SelectGooglePhotosAlbum_ParamsSpec.$.decode(message.payload);
          const result = this.impl.selectGooglePhotosAlbum(params.id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.personalization_app.mojom.WallpaperProvider_SelectGooglePhotosAlbum_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 17: {
          const params = ash.personalization_app.mojom.WallpaperProvider_GetGooglePhotosDailyRefreshAlbumId_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getGooglePhotosDailyRefreshAlbumId();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.personalization_app.mojom.WallpaperProvider_GetGooglePhotosDailyRefreshAlbumId_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 18: {
          const params = ash.personalization_app.mojom.WallpaperProvider_SetCurrentWallpaperLayout_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setCurrentWallpaperLayout(params.layout);
          break;
        }
        case 19: {
          const params = ash.personalization_app.mojom.WallpaperProvider_SetDailyRefreshCollectionId_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setDailyRefreshCollectionId(params.collection_id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.personalization_app.mojom.WallpaperProvider_SetDailyRefreshCollectionId_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 20: {
          const params = ash.personalization_app.mojom.WallpaperProvider_GetDailyRefreshCollectionId_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getDailyRefreshCollectionId();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.personalization_app.mojom.WallpaperProvider_GetDailyRefreshCollectionId_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 21: {
          const params = ash.personalization_app.mojom.WallpaperProvider_UpdateDailyRefreshWallpaper_ParamsSpec.$.decode(message.payload);
          const result = this.impl.updateDailyRefreshWallpaper();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.personalization_app.mojom.WallpaperProvider_UpdateDailyRefreshWallpaper_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 22: {
          const params = ash.personalization_app.mojom.WallpaperProvider_IsInTabletMode_ParamsSpec.$.decode(message.payload);
          const result = this.impl.isInTabletMode();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.personalization_app.mojom.WallpaperProvider_IsInTabletMode_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 23: {
          const params = ash.personalization_app.mojom.WallpaperProvider_ConfirmPreviewWallpaper_ParamsSpec.$.decode(message.payload);
          const result = this.impl.confirmPreviewWallpaper();
          break;
        }
        case 24: {
          const params = ash.personalization_app.mojom.WallpaperProvider_CancelPreviewWallpaper_ParamsSpec.$.decode(message.payload);
          const result = this.impl.cancelPreviewWallpaper();
          break;
        }
        case 25: {
          const params = ash.personalization_app.mojom.WallpaperProvider_ShouldShowTimeOfDayWallpaperDialog_ParamsSpec.$.decode(message.payload);
          const result = this.impl.shouldShowTimeOfDayWallpaperDialog();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.personalization_app.mojom.WallpaperProvider_ShouldShowTimeOfDayWallpaperDialog_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
    });
  }
};

ash.personalization_app.mojom.WallpaperProviderReceiver = ash.personalization_app.mojom.WallpaperProviderReceiver;

ash.personalization_app.mojom.WallpaperProviderPtr = ash.personalization_app.mojom.WallpaperProviderRemote;
ash.personalization_app.mojom.WallpaperProviderRequest = ash.personalization_app.mojom.WallpaperProviderPendingReceiver;


// Interface: ThemeObserver
mojo.internal.Struct(
    ash.personalization_app.mojom.ThemeObserver_OnColorModeChanged_ParamsSpec, 'ash.personalization_app.mojom.ThemeObserver_OnColorModeChanged_Params', [
      mojo.internal.StructField('dark_mode_enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.personalization_app.mojom.ThemeObserver_OnColorModeAutoScheduleChanged_ParamsSpec, 'ash.personalization_app.mojom.ThemeObserver_OnColorModeAutoScheduleChanged_Params', [
      mojo.internal.StructField('enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.personalization_app.mojom.ThemeObserver_OnColorSchemeChanged_ParamsSpec, 'ash.personalization_app.mojom.ThemeObserver_OnColorSchemeChanged_Params', [
      mojo.internal.StructField('color_scheme', 0, 0, ash.style.mojom.ColorSchemeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.personalization_app.mojom.ThemeObserver_OnSampleColorSchemesChanged_ParamsSpec, 'ash.personalization_app.mojom.ThemeObserver_OnSampleColorSchemesChanged_Params', [
      mojo.internal.StructField('sample_color_schemes', 0, 0, mojo.internal.Array(ash.personalization_app.mojom.SampleColorSchemeSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.personalization_app.mojom.ThemeObserver_OnStaticColorChanged_ParamsSpec, 'ash.personalization_app.mojom.ThemeObserver_OnStaticColorChanged_Params', [
      mojo.internal.StructField('color', 0, 0, skia.mojom.SkColorSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.personalization_app.mojom.ThemeObserver_OnGeolocationPermissionForSystemServicesChanged_ParamsSpec, 'ash.personalization_app.mojom.ThemeObserver_OnGeolocationPermissionForSystemServicesChanged_Params', [
      mojo.internal.StructField('enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_user_modifiable', 0, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.personalization_app.mojom.ThemeObserver_OnDaylightTimeChanged_ParamsSpec, 'ash.personalization_app.mojom.ThemeObserver_OnDaylightTimeChanged_Params', [
      mojo.internal.StructField('sunrise_time', 0, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('sunset_time', 8, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

ash.personalization_app.mojom.ThemeObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.personalization_app.mojom.ThemeObserverRemote = class {
  static get $interfaceName() {
    return 'ash.personalization_app.mojom.ThemeObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.personalization_app.mojom.ThemeObserverPendingReceiver,
      handle);
    this.$ = new ash.personalization_app.mojom.ThemeObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.personalization_app.mojom.ThemeObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onColorModeChanged(dark_mode_enabled) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.personalization_app.mojom.ThemeObserver_OnColorModeChanged_ParamsSpec,
      null,
      [dark_mode_enabled],
      false);
  }

  onColorModeAutoScheduleChanged(enabled) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.personalization_app.mojom.ThemeObserver_OnColorModeAutoScheduleChanged_ParamsSpec,
      null,
      [enabled],
      false);
  }

  onColorSchemeChanged(color_scheme) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.personalization_app.mojom.ThemeObserver_OnColorSchemeChanged_ParamsSpec,
      null,
      [color_scheme],
      false);
  }

  onSampleColorSchemesChanged(sample_color_schemes) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      ash.personalization_app.mojom.ThemeObserver_OnSampleColorSchemesChanged_ParamsSpec,
      null,
      [sample_color_schemes],
      false);
  }

  onStaticColorChanged(color) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      ash.personalization_app.mojom.ThemeObserver_OnStaticColorChanged_ParamsSpec,
      null,
      [color],
      false);
  }

  onGeolocationPermissionForSystemServicesChanged(enabled, is_user_modifiable) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      ash.personalization_app.mojom.ThemeObserver_OnGeolocationPermissionForSystemServicesChanged_ParamsSpec,
      null,
      [enabled, is_user_modifiable],
      false);
  }

  onDaylightTimeChanged(sunrise_time, sunset_time) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      ash.personalization_app.mojom.ThemeObserver_OnDaylightTimeChanged_ParamsSpec,
      null,
      [sunrise_time, sunset_time],
      false);
  }

};

ash.personalization_app.mojom.ThemeObserver.getRemote = function() {
  let remote = new ash.personalization_app.mojom.ThemeObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.personalization_app.mojom.ThemeObserver',
    'context');
  return remote.$;
};

ash.personalization_app.mojom.ThemeObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(handle);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = ash.personalization_app.mojom.ThemeObserver_OnColorModeChanged_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onColorModeChanged(params.dark_mode_enabled);
          break;
        }
        case 1: {
          const params = ash.personalization_app.mojom.ThemeObserver_OnColorModeAutoScheduleChanged_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onColorModeAutoScheduleChanged(params.enabled);
          break;
        }
        case 2: {
          const params = ash.personalization_app.mojom.ThemeObserver_OnColorSchemeChanged_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onColorSchemeChanged(params.color_scheme);
          break;
        }
        case 3: {
          const params = ash.personalization_app.mojom.ThemeObserver_OnSampleColorSchemesChanged_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onSampleColorSchemesChanged(params.sample_color_schemes);
          break;
        }
        case 4: {
          const params = ash.personalization_app.mojom.ThemeObserver_OnStaticColorChanged_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onStaticColorChanged(params.color);
          break;
        }
        case 5: {
          const params = ash.personalization_app.mojom.ThemeObserver_OnGeolocationPermissionForSystemServicesChanged_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onGeolocationPermissionForSystemServicesChanged(params.enabled, params.is_user_modifiable);
          break;
        }
        case 6: {
          const params = ash.personalization_app.mojom.ThemeObserver_OnDaylightTimeChanged_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onDaylightTimeChanged(params.sunrise_time, params.sunset_time);
          break;
        }
      }
    });
  }
};

ash.personalization_app.mojom.ThemeObserverReceiver = ash.personalization_app.mojom.ThemeObserverReceiver;

ash.personalization_app.mojom.ThemeObserverPtr = ash.personalization_app.mojom.ThemeObserverRemote;
ash.personalization_app.mojom.ThemeObserverRequest = ash.personalization_app.mojom.ThemeObserverPendingReceiver;


// Interface: ThemeProvider
mojo.internal.Struct(
    ash.personalization_app.mojom.ThemeProvider_SetThemeObserver_ParamsSpec, 'ash.personalization_app.mojom.ThemeProvider_SetThemeObserver_Params', [
      mojo.internal.StructField('observer', 0, 0, mojo.internal.InterfaceProxy(ash.personalization_app.mojom.ThemeObserverSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.personalization_app.mojom.ThemeProvider_SetColorModePref_ParamsSpec, 'ash.personalization_app.mojom.ThemeProvider_SetColorModePref_Params', [
      mojo.internal.StructField('dark_mode_enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.personalization_app.mojom.ThemeProvider_SetColorModeAutoScheduleEnabled_ParamsSpec, 'ash.personalization_app.mojom.ThemeProvider_SetColorModeAutoScheduleEnabled_Params', [
      mojo.internal.StructField('enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.personalization_app.mojom.ThemeProvider_SetColorScheme_ParamsSpec, 'ash.personalization_app.mojom.ThemeProvider_SetColorScheme_Params', [
      mojo.internal.StructField('colorScheme', 0, 0, ash.style.mojom.ColorSchemeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.personalization_app.mojom.ThemeProvider_SetStaticColor_ParamsSpec, 'ash.personalization_app.mojom.ThemeProvider_SetStaticColor_Params', [
      mojo.internal.StructField('static_color', 0, 0, skia.mojom.SkColorSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.personalization_app.mojom.ThemeProvider_EnableGeolocationForSystemServices_ParamsSpec, 'ash.personalization_app.mojom.ThemeProvider_EnableGeolocationForSystemServices_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.personalization_app.mojom.ThemeProvider_GetColorScheme_ParamsSpec, 'ash.personalization_app.mojom.ThemeProvider_GetColorScheme_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.personalization_app.mojom.ThemeProvider_GetColorScheme_ResponseParamsSpec, 'ash.personalization_app.mojom.ThemeProvider_GetColorScheme_ResponseParams', [
      mojo.internal.StructField('color_scheme', 0, 0, ash.style.mojom.ColorSchemeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.personalization_app.mojom.ThemeProvider_GetStaticColor_ParamsSpec, 'ash.personalization_app.mojom.ThemeProvider_GetStaticColor_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.personalization_app.mojom.ThemeProvider_GetStaticColor_ResponseParamsSpec, 'ash.personalization_app.mojom.ThemeProvider_GetStaticColor_ResponseParams', [
      mojo.internal.StructField('static_color', 0, 0, skia.mojom.SkColorSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.personalization_app.mojom.ThemeProvider_GenerateSampleColorSchemes_ParamsSpec, 'ash.personalization_app.mojom.ThemeProvider_GenerateSampleColorSchemes_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.personalization_app.mojom.ThemeProvider_GenerateSampleColorSchemes_ResponseParamsSpec, 'ash.personalization_app.mojom.ThemeProvider_GenerateSampleColorSchemes_ResponseParams', [
      mojo.internal.StructField('sample_color_schemes', 0, 0, mojo.internal.Array(ash.personalization_app.mojom.SampleColorSchemeSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.personalization_app.mojom.ThemeProvider_IsColorModeAutoScheduleEnabled_ParamsSpec, 'ash.personalization_app.mojom.ThemeProvider_IsColorModeAutoScheduleEnabled_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.personalization_app.mojom.ThemeProvider_IsColorModeAutoScheduleEnabled_ResponseParamsSpec, 'ash.personalization_app.mojom.ThemeProvider_IsColorModeAutoScheduleEnabled_ResponseParams', [
      mojo.internal.StructField('enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.personalization_app.mojom.ThemeProvider_IsDarkModeEnabled_ParamsSpec, 'ash.personalization_app.mojom.ThemeProvider_IsDarkModeEnabled_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.personalization_app.mojom.ThemeProvider_IsDarkModeEnabled_ResponseParamsSpec, 'ash.personalization_app.mojom.ThemeProvider_IsDarkModeEnabled_ResponseParams', [
      mojo.internal.StructField('dark_mode_enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.personalization_app.mojom.ThemeProvider_IsGeolocationEnabledForSystemServices_ParamsSpec, 'ash.personalization_app.mojom.ThemeProvider_IsGeolocationEnabledForSystemServices_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.personalization_app.mojom.ThemeProvider_IsGeolocationEnabledForSystemServices_ResponseParamsSpec, 'ash.personalization_app.mojom.ThemeProvider_IsGeolocationEnabledForSystemServices_ResponseParams', [
      mojo.internal.StructField('geolocation_enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.personalization_app.mojom.ThemeProvider_IsGeolocationUserModifiable_ParamsSpec, 'ash.personalization_app.mojom.ThemeProvider_IsGeolocationUserModifiable_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.personalization_app.mojom.ThemeProvider_IsGeolocationUserModifiable_ResponseParamsSpec, 'ash.personalization_app.mojom.ThemeProvider_IsGeolocationUserModifiable_ResponseParams', [
      mojo.internal.StructField('geolocation_is_user_modifiable', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

ash.personalization_app.mojom.ThemeProviderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.personalization_app.mojom.ThemeProviderRemote = class {
  static get $interfaceName() {
    return 'ash.personalization_app.mojom.ThemeProvider';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.personalization_app.mojom.ThemeProviderPendingReceiver,
      handle);
    this.$ = new ash.personalization_app.mojom.ThemeProviderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.personalization_app.mojom.ThemeProviderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  setThemeObserver(observer) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.personalization_app.mojom.ThemeProvider_SetThemeObserver_ParamsSpec,
      null,
      [observer],
      false);
  }

  setColorModePref(dark_mode_enabled) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.personalization_app.mojom.ThemeProvider_SetColorModePref_ParamsSpec,
      null,
      [dark_mode_enabled],
      false);
  }

  setColorModeAutoScheduleEnabled(enabled) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.personalization_app.mojom.ThemeProvider_SetColorModeAutoScheduleEnabled_ParamsSpec,
      null,
      [enabled],
      false);
  }

  setColorScheme(colorScheme) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      ash.personalization_app.mojom.ThemeProvider_SetColorScheme_ParamsSpec,
      null,
      [colorScheme],
      false);
  }

  setStaticColor(static_color) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      ash.personalization_app.mojom.ThemeProvider_SetStaticColor_ParamsSpec,
      null,
      [static_color],
      false);
  }

  enableGeolocationForSystemServices() {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      ash.personalization_app.mojom.ThemeProvider_EnableGeolocationForSystemServices_ParamsSpec,
      null,
      [],
      false);
  }

  getColorScheme() {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      ash.personalization_app.mojom.ThemeProvider_GetColorScheme_ParamsSpec,
      ash.personalization_app.mojom.ThemeProvider_GetColorScheme_ResponseParamsSpec,
      [],
      false);
  }

  getStaticColor() {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      ash.personalization_app.mojom.ThemeProvider_GetStaticColor_ParamsSpec,
      ash.personalization_app.mojom.ThemeProvider_GetStaticColor_ResponseParamsSpec,
      [],
      false);
  }

  generateSampleColorSchemes() {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      ash.personalization_app.mojom.ThemeProvider_GenerateSampleColorSchemes_ParamsSpec,
      ash.personalization_app.mojom.ThemeProvider_GenerateSampleColorSchemes_ResponseParamsSpec,
      [],
      false);
  }

  isColorModeAutoScheduleEnabled() {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      ash.personalization_app.mojom.ThemeProvider_IsColorModeAutoScheduleEnabled_ParamsSpec,
      ash.personalization_app.mojom.ThemeProvider_IsColorModeAutoScheduleEnabled_ResponseParamsSpec,
      [],
      false);
  }

  isDarkModeEnabled() {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      ash.personalization_app.mojom.ThemeProvider_IsDarkModeEnabled_ParamsSpec,
      ash.personalization_app.mojom.ThemeProvider_IsDarkModeEnabled_ResponseParamsSpec,
      [],
      false);
  }

  isGeolocationEnabledForSystemServices() {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      ash.personalization_app.mojom.ThemeProvider_IsGeolocationEnabledForSystemServices_ParamsSpec,
      ash.personalization_app.mojom.ThemeProvider_IsGeolocationEnabledForSystemServices_ResponseParamsSpec,
      [],
      false);
  }

  isGeolocationUserModifiable() {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      ash.personalization_app.mojom.ThemeProvider_IsGeolocationUserModifiable_ParamsSpec,
      ash.personalization_app.mojom.ThemeProvider_IsGeolocationUserModifiable_ResponseParamsSpec,
      [],
      false);
  }

};

ash.personalization_app.mojom.ThemeProvider.getRemote = function() {
  let remote = new ash.personalization_app.mojom.ThemeProviderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.personalization_app.mojom.ThemeProvider',
    'context');
  return remote.$;
};

ash.personalization_app.mojom.ThemeProviderReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(handle);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = ash.personalization_app.mojom.ThemeProvider_SetThemeObserver_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setThemeObserver(params.observer);
          break;
        }
        case 1: {
          const params = ash.personalization_app.mojom.ThemeProvider_SetColorModePref_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setColorModePref(params.dark_mode_enabled);
          break;
        }
        case 2: {
          const params = ash.personalization_app.mojom.ThemeProvider_SetColorModeAutoScheduleEnabled_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setColorModeAutoScheduleEnabled(params.enabled);
          break;
        }
        case 3: {
          const params = ash.personalization_app.mojom.ThemeProvider_SetColorScheme_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setColorScheme(params.colorScheme);
          break;
        }
        case 4: {
          const params = ash.personalization_app.mojom.ThemeProvider_SetStaticColor_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setStaticColor(params.static_color);
          break;
        }
        case 5: {
          const params = ash.personalization_app.mojom.ThemeProvider_EnableGeolocationForSystemServices_ParamsSpec.$.decode(message.payload);
          const result = this.impl.enableGeolocationForSystemServices();
          break;
        }
        case 6: {
          const params = ash.personalization_app.mojom.ThemeProvider_GetColorScheme_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getColorScheme();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.personalization_app.mojom.ThemeProvider_GetColorScheme_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 7: {
          const params = ash.personalization_app.mojom.ThemeProvider_GetStaticColor_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getStaticColor();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.personalization_app.mojom.ThemeProvider_GetStaticColor_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 8: {
          const params = ash.personalization_app.mojom.ThemeProvider_GenerateSampleColorSchemes_ParamsSpec.$.decode(message.payload);
          const result = this.impl.generateSampleColorSchemes();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.personalization_app.mojom.ThemeProvider_GenerateSampleColorSchemes_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 9: {
          const params = ash.personalization_app.mojom.ThemeProvider_IsColorModeAutoScheduleEnabled_ParamsSpec.$.decode(message.payload);
          const result = this.impl.isColorModeAutoScheduleEnabled();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.personalization_app.mojom.ThemeProvider_IsColorModeAutoScheduleEnabled_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 10: {
          const params = ash.personalization_app.mojom.ThemeProvider_IsDarkModeEnabled_ParamsSpec.$.decode(message.payload);
          const result = this.impl.isDarkModeEnabled();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.personalization_app.mojom.ThemeProvider_IsDarkModeEnabled_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 11: {
          const params = ash.personalization_app.mojom.ThemeProvider_IsGeolocationEnabledForSystemServices_ParamsSpec.$.decode(message.payload);
          const result = this.impl.isGeolocationEnabledForSystemServices();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.personalization_app.mojom.ThemeProvider_IsGeolocationEnabledForSystemServices_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 12: {
          const params = ash.personalization_app.mojom.ThemeProvider_IsGeolocationUserModifiable_ParamsSpec.$.decode(message.payload);
          const result = this.impl.isGeolocationUserModifiable();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.personalization_app.mojom.ThemeProvider_IsGeolocationUserModifiable_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
    });
  }
};

ash.personalization_app.mojom.ThemeProviderReceiver = ash.personalization_app.mojom.ThemeProviderReceiver;

ash.personalization_app.mojom.ThemeProviderPtr = ash.personalization_app.mojom.ThemeProviderRemote;
ash.personalization_app.mojom.ThemeProviderRequest = ash.personalization_app.mojom.ThemeProviderPendingReceiver;


// Interface: UserImageObserver
mojo.internal.Struct(
    ash.personalization_app.mojom.UserImageObserver_OnUserImageChanged_ParamsSpec, 'ash.personalization_app.mojom.UserImageObserver_OnUserImageChanged_Params', [
      mojo.internal.StructField('user_image', 0, 0, ash.personalization_app.mojom.UserImageSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.personalization_app.mojom.UserImageObserver_OnUserProfileImageUpdated_ParamsSpec, 'ash.personalization_app.mojom.UserImageObserver_OnUserProfileImageUpdated_Params', [
      mojo.internal.StructField('profile_image', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.personalization_app.mojom.UserImageObserver_OnCameraPresenceCheckDone_ParamsSpec, 'ash.personalization_app.mojom.UserImageObserver_OnCameraPresenceCheckDone_Params', [
      mojo.internal.StructField('is_camera_present', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.personalization_app.mojom.UserImageObserver_OnIsEnterpriseManagedChanged_ParamsSpec, 'ash.personalization_app.mojom.UserImageObserver_OnIsEnterpriseManagedChanged_Params', [
      mojo.internal.StructField('is_enterprise_managed', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

ash.personalization_app.mojom.UserImageObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.personalization_app.mojom.UserImageObserverRemote = class {
  static get $interfaceName() {
    return 'ash.personalization_app.mojom.UserImageObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.personalization_app.mojom.UserImageObserverPendingReceiver,
      handle);
    this.$ = new ash.personalization_app.mojom.UserImageObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.personalization_app.mojom.UserImageObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onUserImageChanged(user_image) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.personalization_app.mojom.UserImageObserver_OnUserImageChanged_ParamsSpec,
      null,
      [user_image],
      false);
  }

  onUserProfileImageUpdated(profile_image) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.personalization_app.mojom.UserImageObserver_OnUserProfileImageUpdated_ParamsSpec,
      null,
      [profile_image],
      false);
  }

  onCameraPresenceCheckDone(is_camera_present) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.personalization_app.mojom.UserImageObserver_OnCameraPresenceCheckDone_ParamsSpec,
      null,
      [is_camera_present],
      false);
  }

  onIsEnterpriseManagedChanged(is_enterprise_managed) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      ash.personalization_app.mojom.UserImageObserver_OnIsEnterpriseManagedChanged_ParamsSpec,
      null,
      [is_enterprise_managed],
      false);
  }

};

ash.personalization_app.mojom.UserImageObserver.getRemote = function() {
  let remote = new ash.personalization_app.mojom.UserImageObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.personalization_app.mojom.UserImageObserver',
    'context');
  return remote.$;
};

ash.personalization_app.mojom.UserImageObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(handle);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = ash.personalization_app.mojom.UserImageObserver_OnUserImageChanged_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onUserImageChanged(params.user_image);
          break;
        }
        case 1: {
          const params = ash.personalization_app.mojom.UserImageObserver_OnUserProfileImageUpdated_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onUserProfileImageUpdated(params.profile_image);
          break;
        }
        case 2: {
          const params = ash.personalization_app.mojom.UserImageObserver_OnCameraPresenceCheckDone_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onCameraPresenceCheckDone(params.is_camera_present);
          break;
        }
        case 3: {
          const params = ash.personalization_app.mojom.UserImageObserver_OnIsEnterpriseManagedChanged_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onIsEnterpriseManagedChanged(params.is_enterprise_managed);
          break;
        }
      }
    });
  }
};

ash.personalization_app.mojom.UserImageObserverReceiver = ash.personalization_app.mojom.UserImageObserverReceiver;

ash.personalization_app.mojom.UserImageObserverPtr = ash.personalization_app.mojom.UserImageObserverRemote;
ash.personalization_app.mojom.UserImageObserverRequest = ash.personalization_app.mojom.UserImageObserverPendingReceiver;


// Interface: UserProvider
mojo.internal.Struct(
    ash.personalization_app.mojom.UserProvider_SetUserImageObserver_ParamsSpec, 'ash.personalization_app.mojom.UserProvider_SetUserImageObserver_Params', [
      mojo.internal.StructField('observer', 0, 0, mojo.internal.InterfaceProxy(ash.personalization_app.mojom.UserImageObserverSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.personalization_app.mojom.UserProvider_GetUserInfo_ParamsSpec, 'ash.personalization_app.mojom.UserProvider_GetUserInfo_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.personalization_app.mojom.UserProvider_GetUserInfo_ResponseParamsSpec, 'ash.personalization_app.mojom.UserProvider_GetUserInfo_ResponseParams', [
      mojo.internal.StructField('user_info', 0, 0, ash.personalization_app.mojom.UserInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.personalization_app.mojom.UserProvider_GetDefaultUserImages_ParamsSpec, 'ash.personalization_app.mojom.UserProvider_GetDefaultUserImages_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.personalization_app.mojom.UserProvider_GetDefaultUserImages_ResponseParamsSpec, 'ash.personalization_app.mojom.UserProvider_GetDefaultUserImages_ResponseParams', [
      mojo.internal.StructField('default_user_images', 0, 0, mojo.internal.Array(ash.personalization_app.mojom.DefaultUserImageSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.personalization_app.mojom.UserProvider_SelectDefaultImage_ParamsSpec, 'ash.personalization_app.mojom.UserProvider_SelectDefaultImage_Params', [
      mojo.internal.StructField('index', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.personalization_app.mojom.UserProvider_SelectProfileImage_ParamsSpec, 'ash.personalization_app.mojom.UserProvider_SelectProfileImage_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.personalization_app.mojom.UserProvider_SelectCameraImage_ParamsSpec, 'ash.personalization_app.mojom.UserProvider_SelectCameraImage_Params', [
      mojo.internal.StructField('data', 0, 0, mojo_base.mojom.BigBufferSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.personalization_app.mojom.UserProvider_SelectImageFromDisk_ParamsSpec, 'ash.personalization_app.mojom.UserProvider_SelectImageFromDisk_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.personalization_app.mojom.UserProvider_SelectLastExternalUserImage_ParamsSpec, 'ash.personalization_app.mojom.UserProvider_SelectLastExternalUserImage_Params', [
    ],
    [[0, 8]]);

ash.personalization_app.mojom.UserProviderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.personalization_app.mojom.UserProviderRemote = class {
  static get $interfaceName() {
    return 'ash.personalization_app.mojom.UserProvider';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.personalization_app.mojom.UserProviderPendingReceiver,
      handle);
    this.$ = new ash.personalization_app.mojom.UserProviderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.personalization_app.mojom.UserProviderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  setUserImageObserver(observer) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.personalization_app.mojom.UserProvider_SetUserImageObserver_ParamsSpec,
      null,
      [observer],
      false);
  }

  getUserInfo() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.personalization_app.mojom.UserProvider_GetUserInfo_ParamsSpec,
      ash.personalization_app.mojom.UserProvider_GetUserInfo_ResponseParamsSpec,
      [],
      false);
  }

  getDefaultUserImages() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.personalization_app.mojom.UserProvider_GetDefaultUserImages_ParamsSpec,
      ash.personalization_app.mojom.UserProvider_GetDefaultUserImages_ResponseParamsSpec,
      [],
      false);
  }

  selectDefaultImage(index) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      ash.personalization_app.mojom.UserProvider_SelectDefaultImage_ParamsSpec,
      null,
      [index],
      false);
  }

  selectProfileImage() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      ash.personalization_app.mojom.UserProvider_SelectProfileImage_ParamsSpec,
      null,
      [],
      false);
  }

  selectCameraImage(data) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      ash.personalization_app.mojom.UserProvider_SelectCameraImage_ParamsSpec,
      null,
      [data],
      false);
  }

  selectImageFromDisk() {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      ash.personalization_app.mojom.UserProvider_SelectImageFromDisk_ParamsSpec,
      null,
      [],
      false);
  }

  selectLastExternalUserImage() {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      ash.personalization_app.mojom.UserProvider_SelectLastExternalUserImage_ParamsSpec,
      null,
      [],
      false);
  }

};

ash.personalization_app.mojom.UserProvider.getRemote = function() {
  let remote = new ash.personalization_app.mojom.UserProviderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.personalization_app.mojom.UserProvider',
    'context');
  return remote.$;
};

ash.personalization_app.mojom.UserProviderReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(handle);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = ash.personalization_app.mojom.UserProvider_SetUserImageObserver_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setUserImageObserver(params.observer);
          break;
        }
        case 1: {
          const params = ash.personalization_app.mojom.UserProvider_GetUserInfo_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getUserInfo();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.personalization_app.mojom.UserProvider_GetUserInfo_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const params = ash.personalization_app.mojom.UserProvider_GetDefaultUserImages_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getDefaultUserImages();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.personalization_app.mojom.UserProvider_GetDefaultUserImages_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const params = ash.personalization_app.mojom.UserProvider_SelectDefaultImage_ParamsSpec.$.decode(message.payload);
          const result = this.impl.selectDefaultImage(params.index);
          break;
        }
        case 4: {
          const params = ash.personalization_app.mojom.UserProvider_SelectProfileImage_ParamsSpec.$.decode(message.payload);
          const result = this.impl.selectProfileImage();
          break;
        }
        case 5: {
          const params = ash.personalization_app.mojom.UserProvider_SelectCameraImage_ParamsSpec.$.decode(message.payload);
          const result = this.impl.selectCameraImage(params.data);
          break;
        }
        case 6: {
          const params = ash.personalization_app.mojom.UserProvider_SelectImageFromDisk_ParamsSpec.$.decode(message.payload);
          const result = this.impl.selectImageFromDisk();
          break;
        }
        case 7: {
          const params = ash.personalization_app.mojom.UserProvider_SelectLastExternalUserImage_ParamsSpec.$.decode(message.payload);
          const result = this.impl.selectLastExternalUserImage();
          break;
        }
      }
    });
  }
};

ash.personalization_app.mojom.UserProviderReceiver = ash.personalization_app.mojom.UserProviderReceiver;

ash.personalization_app.mojom.UserProviderPtr = ash.personalization_app.mojom.UserProviderRemote;
ash.personalization_app.mojom.UserProviderRequest = ash.personalization_app.mojom.UserProviderPendingReceiver;


// Interface: AmbientObserver
mojo.internal.Struct(
    ash.personalization_app.mojom.AmbientObserver_OnAmbientModeEnabledChanged_ParamsSpec, 'ash.personalization_app.mojom.AmbientObserver_OnAmbientModeEnabledChanged_Params', [
      mojo.internal.StructField('ambient_mode_enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.personalization_app.mojom.AmbientObserver_OnAmbientThemeChanged_ParamsSpec, 'ash.personalization_app.mojom.AmbientObserver_OnAmbientThemeChanged_Params', [
      mojo.internal.StructField('ambient_theme', 0, 0, ash.personalization_app.mojom.AmbientThemeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.personalization_app.mojom.AmbientObserver_OnTopicSourceChanged_ParamsSpec, 'ash.personalization_app.mojom.AmbientObserver_OnTopicSourceChanged_Params', [
      mojo.internal.StructField('topic_source', 0, 0, ash.personalization_app.mojom.TopicSourceSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.personalization_app.mojom.AmbientObserver_OnScreenSaverDurationChanged_ParamsSpec, 'ash.personalization_app.mojom.AmbientObserver_OnScreenSaverDurationChanged_Params', [
      mojo.internal.StructField('minutes', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.personalization_app.mojom.AmbientObserver_OnTemperatureUnitChanged_ParamsSpec, 'ash.personalization_app.mojom.AmbientObserver_OnTemperatureUnitChanged_Params', [
      mojo.internal.StructField('temperature_unit', 0, 0, ash.personalization_app.mojom.TemperatureUnitSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.personalization_app.mojom.AmbientObserver_OnAlbumsChanged_ParamsSpec, 'ash.personalization_app.mojom.AmbientObserver_OnAlbumsChanged_Params', [
      mojo.internal.StructField('albums', 0, 0, mojo.internal.Array(ash.personalization_app.mojom.AmbientModeAlbumSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.personalization_app.mojom.AmbientObserver_OnPreviewsFetched_ParamsSpec, 'ash.personalization_app.mojom.AmbientObserver_OnPreviewsFetched_Params', [
      mojo.internal.StructField('previews', 0, 0, mojo.internal.Array(url.mojom.UrlSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.personalization_app.mojom.AmbientObserver_OnAmbientUiVisibilityChanged_ParamsSpec, 'ash.personalization_app.mojom.AmbientObserver_OnAmbientUiVisibilityChanged_Params', [
      mojo.internal.StructField('visibility', 0, 0, ash.personalization_app.mojom.AmbientUiVisibilitySpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.personalization_app.mojom.AmbientObserver_OnGeolocationPermissionForSystemServicesChanged_ParamsSpec, 'ash.personalization_app.mojom.AmbientObserver_OnGeolocationPermissionForSystemServicesChanged_Params', [
      mojo.internal.StructField('enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_user_modifiable', 0, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.personalization_app.mojom.AmbientObserver_OnAmbientThemePreviewImagesChanged_ParamsSpec, 'ash.personalization_app.mojom.AmbientObserver_OnAmbientThemePreviewImagesChanged_Params', [
      mojo.internal.StructField('previews', 0, 0, mojo.internal.Map(ash.personalization_app.mojom.AmbientThemeSpec.$, url.mojom.UrlSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

ash.personalization_app.mojom.AmbientObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.personalization_app.mojom.AmbientObserverRemote = class {
  static get $interfaceName() {
    return 'ash.personalization_app.mojom.AmbientObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.personalization_app.mojom.AmbientObserverPendingReceiver,
      handle);
    this.$ = new ash.personalization_app.mojom.AmbientObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.personalization_app.mojom.AmbientObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onAmbientModeEnabledChanged(ambient_mode_enabled) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.personalization_app.mojom.AmbientObserver_OnAmbientModeEnabledChanged_ParamsSpec,
      null,
      [ambient_mode_enabled],
      false);
  }

  onAmbientThemeChanged(ambient_theme) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.personalization_app.mojom.AmbientObserver_OnAmbientThemeChanged_ParamsSpec,
      null,
      [ambient_theme],
      false);
  }

  onTopicSourceChanged(topic_source) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.personalization_app.mojom.AmbientObserver_OnTopicSourceChanged_ParamsSpec,
      null,
      [topic_source],
      false);
  }

  onScreenSaverDurationChanged(minutes) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      ash.personalization_app.mojom.AmbientObserver_OnScreenSaverDurationChanged_ParamsSpec,
      null,
      [minutes],
      false);
  }

  onTemperatureUnitChanged(temperature_unit) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      ash.personalization_app.mojom.AmbientObserver_OnTemperatureUnitChanged_ParamsSpec,
      null,
      [temperature_unit],
      false);
  }

  onAlbumsChanged(albums) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      ash.personalization_app.mojom.AmbientObserver_OnAlbumsChanged_ParamsSpec,
      null,
      [albums],
      false);
  }

  onPreviewsFetched(previews) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      ash.personalization_app.mojom.AmbientObserver_OnPreviewsFetched_ParamsSpec,
      null,
      [previews],
      false);
  }

  onAmbientUiVisibilityChanged(visibility) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      ash.personalization_app.mojom.AmbientObserver_OnAmbientUiVisibilityChanged_ParamsSpec,
      null,
      [visibility],
      false);
  }

  onGeolocationPermissionForSystemServicesChanged(enabled, is_user_modifiable) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      ash.personalization_app.mojom.AmbientObserver_OnGeolocationPermissionForSystemServicesChanged_ParamsSpec,
      null,
      [enabled, is_user_modifiable],
      false);
  }

  onAmbientThemePreviewImagesChanged(previews) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      ash.personalization_app.mojom.AmbientObserver_OnAmbientThemePreviewImagesChanged_ParamsSpec,
      null,
      [previews],
      false);
  }

};

ash.personalization_app.mojom.AmbientObserver.getRemote = function() {
  let remote = new ash.personalization_app.mojom.AmbientObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.personalization_app.mojom.AmbientObserver',
    'context');
  return remote.$;
};

ash.personalization_app.mojom.AmbientObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(handle);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = ash.personalization_app.mojom.AmbientObserver_OnAmbientModeEnabledChanged_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onAmbientModeEnabledChanged(params.ambient_mode_enabled);
          break;
        }
        case 1: {
          const params = ash.personalization_app.mojom.AmbientObserver_OnAmbientThemeChanged_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onAmbientThemeChanged(params.ambient_theme);
          break;
        }
        case 2: {
          const params = ash.personalization_app.mojom.AmbientObserver_OnTopicSourceChanged_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onTopicSourceChanged(params.topic_source);
          break;
        }
        case 3: {
          const params = ash.personalization_app.mojom.AmbientObserver_OnScreenSaverDurationChanged_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onScreenSaverDurationChanged(params.minutes);
          break;
        }
        case 4: {
          const params = ash.personalization_app.mojom.AmbientObserver_OnTemperatureUnitChanged_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onTemperatureUnitChanged(params.temperature_unit);
          break;
        }
        case 5: {
          const params = ash.personalization_app.mojom.AmbientObserver_OnAlbumsChanged_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onAlbumsChanged(params.albums);
          break;
        }
        case 6: {
          const params = ash.personalization_app.mojom.AmbientObserver_OnPreviewsFetched_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onPreviewsFetched(params.previews);
          break;
        }
        case 7: {
          const params = ash.personalization_app.mojom.AmbientObserver_OnAmbientUiVisibilityChanged_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onAmbientUiVisibilityChanged(params.visibility);
          break;
        }
        case 8: {
          const params = ash.personalization_app.mojom.AmbientObserver_OnGeolocationPermissionForSystemServicesChanged_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onGeolocationPermissionForSystemServicesChanged(params.enabled, params.is_user_modifiable);
          break;
        }
        case 9: {
          const params = ash.personalization_app.mojom.AmbientObserver_OnAmbientThemePreviewImagesChanged_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onAmbientThemePreviewImagesChanged(params.previews);
          break;
        }
      }
    });
  }
};

ash.personalization_app.mojom.AmbientObserverReceiver = ash.personalization_app.mojom.AmbientObserverReceiver;

ash.personalization_app.mojom.AmbientObserverPtr = ash.personalization_app.mojom.AmbientObserverRemote;
ash.personalization_app.mojom.AmbientObserverRequest = ash.personalization_app.mojom.AmbientObserverPendingReceiver;


// Interface: AmbientProvider
mojo.internal.Struct(
    ash.personalization_app.mojom.AmbientProvider_IsAmbientModeEnabled_ParamsSpec, 'ash.personalization_app.mojom.AmbientProvider_IsAmbientModeEnabled_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.personalization_app.mojom.AmbientProvider_IsAmbientModeEnabled_ResponseParamsSpec, 'ash.personalization_app.mojom.AmbientProvider_IsAmbientModeEnabled_ResponseParams', [
      mojo.internal.StructField('enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.personalization_app.mojom.AmbientProvider_SetAmbientModeEnabled_ParamsSpec, 'ash.personalization_app.mojom.AmbientProvider_SetAmbientModeEnabled_Params', [
      mojo.internal.StructField('enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.personalization_app.mojom.AmbientProvider_SetAmbientObserver_ParamsSpec, 'ash.personalization_app.mojom.AmbientProvider_SetAmbientObserver_Params', [
      mojo.internal.StructField('observer', 0, 0, mojo.internal.InterfaceProxy(ash.personalization_app.mojom.AmbientObserverSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.personalization_app.mojom.AmbientProvider_SetAmbientTheme_ParamsSpec, 'ash.personalization_app.mojom.AmbientProvider_SetAmbientTheme_Params', [
      mojo.internal.StructField('ambient_theme', 0, 0, ash.personalization_app.mojom.AmbientThemeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.personalization_app.mojom.AmbientProvider_SetScreenSaverDuration_ParamsSpec, 'ash.personalization_app.mojom.AmbientProvider_SetScreenSaverDuration_Params', [
      mojo.internal.StructField('minutes', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.personalization_app.mojom.AmbientProvider_SetTopicSource_ParamsSpec, 'ash.personalization_app.mojom.AmbientProvider_SetTopicSource_Params', [
      mojo.internal.StructField('topic_source', 0, 0, ash.personalization_app.mojom.TopicSourceSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.personalization_app.mojom.AmbientProvider_SetTemperatureUnit_ParamsSpec, 'ash.personalization_app.mojom.AmbientProvider_SetTemperatureUnit_Params', [
      mojo.internal.StructField('temperature_unit', 0, 0, ash.personalization_app.mojom.TemperatureUnitSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.personalization_app.mojom.AmbientProvider_SetAlbumSelected_ParamsSpec, 'ash.personalization_app.mojom.AmbientProvider_SetAlbumSelected_Params', [
      mojo.internal.StructField('id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('topic_source', 8, 0, ash.personalization_app.mojom.TopicSourceSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('selected', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    ash.personalization_app.mojom.AmbientProvider_SetPageViewed_ParamsSpec, 'ash.personalization_app.mojom.AmbientProvider_SetPageViewed_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.personalization_app.mojom.AmbientProvider_FetchSettingsAndAlbums_ParamsSpec, 'ash.personalization_app.mojom.AmbientProvider_FetchSettingsAndAlbums_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.personalization_app.mojom.AmbientProvider_StartScreenSaverPreview_ParamsSpec, 'ash.personalization_app.mojom.AmbientProvider_StartScreenSaverPreview_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.personalization_app.mojom.AmbientProvider_ShouldShowTimeOfDayBanner_ParamsSpec, 'ash.personalization_app.mojom.AmbientProvider_ShouldShowTimeOfDayBanner_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.personalization_app.mojom.AmbientProvider_ShouldShowTimeOfDayBanner_ResponseParamsSpec, 'ash.personalization_app.mojom.AmbientProvider_ShouldShowTimeOfDayBanner_ResponseParams', [
      mojo.internal.StructField('should_show_banner', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.personalization_app.mojom.AmbientProvider_HandleTimeOfDayBannerDismissed_ParamsSpec, 'ash.personalization_app.mojom.AmbientProvider_HandleTimeOfDayBannerDismissed_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.personalization_app.mojom.AmbientProvider_IsGeolocationEnabledForSystemServices_ParamsSpec, 'ash.personalization_app.mojom.AmbientProvider_IsGeolocationEnabledForSystemServices_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.personalization_app.mojom.AmbientProvider_IsGeolocationEnabledForSystemServices_ResponseParamsSpec, 'ash.personalization_app.mojom.AmbientProvider_IsGeolocationEnabledForSystemServices_ResponseParams', [
      mojo.internal.StructField('geolocation_enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.personalization_app.mojom.AmbientProvider_IsGeolocationUserModifiable_ParamsSpec, 'ash.personalization_app.mojom.AmbientProvider_IsGeolocationUserModifiable_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.personalization_app.mojom.AmbientProvider_IsGeolocationUserModifiable_ResponseParamsSpec, 'ash.personalization_app.mojom.AmbientProvider_IsGeolocationUserModifiable_ResponseParams', [
      mojo.internal.StructField('geolocation_is_user_modifiable', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.personalization_app.mojom.AmbientProvider_EnableGeolocationForSystemServices_ParamsSpec, 'ash.personalization_app.mojom.AmbientProvider_EnableGeolocationForSystemServices_Params', [
    ],
    [[0, 8]]);

ash.personalization_app.mojom.AmbientProviderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.personalization_app.mojom.AmbientProviderRemote = class {
  static get $interfaceName() {
    return 'ash.personalization_app.mojom.AmbientProvider';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.personalization_app.mojom.AmbientProviderPendingReceiver,
      handle);
    this.$ = new ash.personalization_app.mojom.AmbientProviderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.personalization_app.mojom.AmbientProviderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  isAmbientModeEnabled() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.personalization_app.mojom.AmbientProvider_IsAmbientModeEnabled_ParamsSpec,
      ash.personalization_app.mojom.AmbientProvider_IsAmbientModeEnabled_ResponseParamsSpec,
      [],
      false);
  }

  setAmbientModeEnabled(enabled) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.personalization_app.mojom.AmbientProvider_SetAmbientModeEnabled_ParamsSpec,
      null,
      [enabled],
      false);
  }

  setAmbientObserver(observer) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.personalization_app.mojom.AmbientProvider_SetAmbientObserver_ParamsSpec,
      null,
      [observer],
      false);
  }

  setAmbientTheme(ambient_theme) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      ash.personalization_app.mojom.AmbientProvider_SetAmbientTheme_ParamsSpec,
      null,
      [ambient_theme],
      false);
  }

  setScreenSaverDuration(minutes) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      ash.personalization_app.mojom.AmbientProvider_SetScreenSaverDuration_ParamsSpec,
      null,
      [minutes],
      false);
  }

  setTopicSource(topic_source) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      ash.personalization_app.mojom.AmbientProvider_SetTopicSource_ParamsSpec,
      null,
      [topic_source],
      false);
  }

  setTemperatureUnit(temperature_unit) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      ash.personalization_app.mojom.AmbientProvider_SetTemperatureUnit_ParamsSpec,
      null,
      [temperature_unit],
      false);
  }

  setAlbumSelected(id, topic_source, selected) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      ash.personalization_app.mojom.AmbientProvider_SetAlbumSelected_ParamsSpec,
      null,
      [id, topic_source, selected],
      false);
  }

  setPageViewed() {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      ash.personalization_app.mojom.AmbientProvider_SetPageViewed_ParamsSpec,
      null,
      [],
      false);
  }

  fetchSettingsAndAlbums() {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      ash.personalization_app.mojom.AmbientProvider_FetchSettingsAndAlbums_ParamsSpec,
      null,
      [],
      false);
  }

  startScreenSaverPreview() {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      ash.personalization_app.mojom.AmbientProvider_StartScreenSaverPreview_ParamsSpec,
      null,
      [],
      false);
  }

  shouldShowTimeOfDayBanner() {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      ash.personalization_app.mojom.AmbientProvider_ShouldShowTimeOfDayBanner_ParamsSpec,
      ash.personalization_app.mojom.AmbientProvider_ShouldShowTimeOfDayBanner_ResponseParamsSpec,
      [],
      false);
  }

  handleTimeOfDayBannerDismissed() {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      ash.personalization_app.mojom.AmbientProvider_HandleTimeOfDayBannerDismissed_ParamsSpec,
      null,
      [],
      false);
  }

  isGeolocationEnabledForSystemServices() {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
      ash.personalization_app.mojom.AmbientProvider_IsGeolocationEnabledForSystemServices_ParamsSpec,
      ash.personalization_app.mojom.AmbientProvider_IsGeolocationEnabledForSystemServices_ResponseParamsSpec,
      [],
      false);
  }

  isGeolocationUserModifiable() {
    // Ordinal: 14
    return this.proxy.sendMessage(
      14,  // ordinal
      ash.personalization_app.mojom.AmbientProvider_IsGeolocationUserModifiable_ParamsSpec,
      ash.personalization_app.mojom.AmbientProvider_IsGeolocationUserModifiable_ResponseParamsSpec,
      [],
      false);
  }

  enableGeolocationForSystemServices() {
    // Ordinal: 15
    return this.proxy.sendMessage(
      15,  // ordinal
      ash.personalization_app.mojom.AmbientProvider_EnableGeolocationForSystemServices_ParamsSpec,
      null,
      [],
      false);
  }

};

ash.personalization_app.mojom.AmbientProvider.getRemote = function() {
  let remote = new ash.personalization_app.mojom.AmbientProviderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.personalization_app.mojom.AmbientProvider',
    'context');
  return remote.$;
};

ash.personalization_app.mojom.AmbientProviderReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(handle);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = ash.personalization_app.mojom.AmbientProvider_IsAmbientModeEnabled_ParamsSpec.$.decode(message.payload);
          const result = this.impl.isAmbientModeEnabled();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.personalization_app.mojom.AmbientProvider_IsAmbientModeEnabled_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const params = ash.personalization_app.mojom.AmbientProvider_SetAmbientModeEnabled_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setAmbientModeEnabled(params.enabled);
          break;
        }
        case 2: {
          const params = ash.personalization_app.mojom.AmbientProvider_SetAmbientObserver_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setAmbientObserver(params.observer);
          break;
        }
        case 3: {
          const params = ash.personalization_app.mojom.AmbientProvider_SetAmbientTheme_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setAmbientTheme(params.ambient_theme);
          break;
        }
        case 4: {
          const params = ash.personalization_app.mojom.AmbientProvider_SetScreenSaverDuration_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setScreenSaverDuration(params.minutes);
          break;
        }
        case 5: {
          const params = ash.personalization_app.mojom.AmbientProvider_SetTopicSource_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setTopicSource(params.topic_source);
          break;
        }
        case 6: {
          const params = ash.personalization_app.mojom.AmbientProvider_SetTemperatureUnit_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setTemperatureUnit(params.temperature_unit);
          break;
        }
        case 7: {
          const params = ash.personalization_app.mojom.AmbientProvider_SetAlbumSelected_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setAlbumSelected(params.id, params.topic_source, params.selected);
          break;
        }
        case 8: {
          const params = ash.personalization_app.mojom.AmbientProvider_SetPageViewed_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setPageViewed();
          break;
        }
        case 9: {
          const params = ash.personalization_app.mojom.AmbientProvider_FetchSettingsAndAlbums_ParamsSpec.$.decode(message.payload);
          const result = this.impl.fetchSettingsAndAlbums();
          break;
        }
        case 10: {
          const params = ash.personalization_app.mojom.AmbientProvider_StartScreenSaverPreview_ParamsSpec.$.decode(message.payload);
          const result = this.impl.startScreenSaverPreview();
          break;
        }
        case 11: {
          const params = ash.personalization_app.mojom.AmbientProvider_ShouldShowTimeOfDayBanner_ParamsSpec.$.decode(message.payload);
          const result = this.impl.shouldShowTimeOfDayBanner();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.personalization_app.mojom.AmbientProvider_ShouldShowTimeOfDayBanner_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 12: {
          const params = ash.personalization_app.mojom.AmbientProvider_HandleTimeOfDayBannerDismissed_ParamsSpec.$.decode(message.payload);
          const result = this.impl.handleTimeOfDayBannerDismissed();
          break;
        }
        case 13: {
          const params = ash.personalization_app.mojom.AmbientProvider_IsGeolocationEnabledForSystemServices_ParamsSpec.$.decode(message.payload);
          const result = this.impl.isGeolocationEnabledForSystemServices();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.personalization_app.mojom.AmbientProvider_IsGeolocationEnabledForSystemServices_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 14: {
          const params = ash.personalization_app.mojom.AmbientProvider_IsGeolocationUserModifiable_ParamsSpec.$.decode(message.payload);
          const result = this.impl.isGeolocationUserModifiable();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.personalization_app.mojom.AmbientProvider_IsGeolocationUserModifiable_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 15: {
          const params = ash.personalization_app.mojom.AmbientProvider_EnableGeolocationForSystemServices_ParamsSpec.$.decode(message.payload);
          const result = this.impl.enableGeolocationForSystemServices();
          break;
        }
      }
    });
  }
};

ash.personalization_app.mojom.AmbientProviderReceiver = ash.personalization_app.mojom.AmbientProviderReceiver;

ash.personalization_app.mojom.AmbientProviderPtr = ash.personalization_app.mojom.AmbientProviderRemote;
ash.personalization_app.mojom.AmbientProviderRequest = ash.personalization_app.mojom.AmbientProviderPendingReceiver;


// Interface: KeyboardBacklightObserver
mojo.internal.Struct(
    ash.personalization_app.mojom.KeyboardBacklightObserver_OnBacklightStateChanged_ParamsSpec, 'ash.personalization_app.mojom.KeyboardBacklightObserver_OnBacklightStateChanged_Params', [
      mojo.internal.StructField('currentBacklightState', 0, 0, ash.personalization_app.mojom.CurrentBacklightStateSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.personalization_app.mojom.KeyboardBacklightObserver_OnWallpaperColorChanged_ParamsSpec, 'ash.personalization_app.mojom.KeyboardBacklightObserver_OnWallpaperColorChanged_Params', [
      mojo.internal.StructField('wallpaper_color', 0, 0, skia.mojom.SkColorSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

ash.personalization_app.mojom.KeyboardBacklightObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.personalization_app.mojom.KeyboardBacklightObserverRemote = class {
  static get $interfaceName() {
    return 'ash.personalization_app.mojom.KeyboardBacklightObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.personalization_app.mojom.KeyboardBacklightObserverPendingReceiver,
      handle);
    this.$ = new ash.personalization_app.mojom.KeyboardBacklightObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.personalization_app.mojom.KeyboardBacklightObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onBacklightStateChanged(currentBacklightState) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.personalization_app.mojom.KeyboardBacklightObserver_OnBacklightStateChanged_ParamsSpec,
      null,
      [currentBacklightState],
      false);
  }

  onWallpaperColorChanged(wallpaper_color) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.personalization_app.mojom.KeyboardBacklightObserver_OnWallpaperColorChanged_ParamsSpec,
      null,
      [wallpaper_color],
      false);
  }

};

ash.personalization_app.mojom.KeyboardBacklightObserver.getRemote = function() {
  let remote = new ash.personalization_app.mojom.KeyboardBacklightObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.personalization_app.mojom.KeyboardBacklightObserver',
    'context');
  return remote.$;
};

ash.personalization_app.mojom.KeyboardBacklightObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(handle);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = ash.personalization_app.mojom.KeyboardBacklightObserver_OnBacklightStateChanged_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onBacklightStateChanged(params.currentBacklightState);
          break;
        }
        case 1: {
          const params = ash.personalization_app.mojom.KeyboardBacklightObserver_OnWallpaperColorChanged_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onWallpaperColorChanged(params.wallpaper_color);
          break;
        }
      }
    });
  }
};

ash.personalization_app.mojom.KeyboardBacklightObserverReceiver = ash.personalization_app.mojom.KeyboardBacklightObserverReceiver;

ash.personalization_app.mojom.KeyboardBacklightObserverPtr = ash.personalization_app.mojom.KeyboardBacklightObserverRemote;
ash.personalization_app.mojom.KeyboardBacklightObserverRequest = ash.personalization_app.mojom.KeyboardBacklightObserverPendingReceiver;


// Interface: KeyboardBacklightProvider
mojo.internal.Struct(
    ash.personalization_app.mojom.KeyboardBacklightProvider_SetKeyboardBacklightObserver_ParamsSpec, 'ash.personalization_app.mojom.KeyboardBacklightProvider_SetKeyboardBacklightObserver_Params', [
      mojo.internal.StructField('observer', 0, 0, mojo.internal.InterfaceProxy(ash.personalization_app.mojom.KeyboardBacklightObserverSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.personalization_app.mojom.KeyboardBacklightProvider_SetBacklightColor_ParamsSpec, 'ash.personalization_app.mojom.KeyboardBacklightProvider_SetBacklightColor_Params', [
      mojo.internal.StructField('backlight_color', 0, 0, ash.personalization_app.mojom.BacklightColorSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.personalization_app.mojom.KeyboardBacklightProvider_SetBacklightZoneColor_ParamsSpec, 'ash.personalization_app.mojom.KeyboardBacklightProvider_SetBacklightZoneColor_Params', [
      mojo.internal.StructField('backlight_color', 0, 0, ash.personalization_app.mojom.BacklightColorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('zone', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    ash.personalization_app.mojom.KeyboardBacklightProvider_ShouldShowNudge_ParamsSpec, 'ash.personalization_app.mojom.KeyboardBacklightProvider_ShouldShowNudge_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.personalization_app.mojom.KeyboardBacklightProvider_ShouldShowNudge_ResponseParamsSpec, 'ash.personalization_app.mojom.KeyboardBacklightProvider_ShouldShowNudge_ResponseParams', [
      mojo.internal.StructField('should_show_nudge', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.personalization_app.mojom.KeyboardBacklightProvider_HandleNudgeShown_ParamsSpec, 'ash.personalization_app.mojom.KeyboardBacklightProvider_HandleNudgeShown_Params', [
    ],
    [[0, 8]]);

ash.personalization_app.mojom.KeyboardBacklightProviderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.personalization_app.mojom.KeyboardBacklightProviderRemote = class {
  static get $interfaceName() {
    return 'ash.personalization_app.mojom.KeyboardBacklightProvider';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.personalization_app.mojom.KeyboardBacklightProviderPendingReceiver,
      handle);
    this.$ = new ash.personalization_app.mojom.KeyboardBacklightProviderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.personalization_app.mojom.KeyboardBacklightProviderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  setKeyboardBacklightObserver(observer) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.personalization_app.mojom.KeyboardBacklightProvider_SetKeyboardBacklightObserver_ParamsSpec,
      null,
      [observer],
      false);
  }

  setBacklightColor(backlight_color) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.personalization_app.mojom.KeyboardBacklightProvider_SetBacklightColor_ParamsSpec,
      null,
      [backlight_color],
      false);
  }

  setBacklightZoneColor(zone, backlight_color) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.personalization_app.mojom.KeyboardBacklightProvider_SetBacklightZoneColor_ParamsSpec,
      null,
      [zone, backlight_color],
      false);
  }

  shouldShowNudge() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      ash.personalization_app.mojom.KeyboardBacklightProvider_ShouldShowNudge_ParamsSpec,
      ash.personalization_app.mojom.KeyboardBacklightProvider_ShouldShowNudge_ResponseParamsSpec,
      [],
      false);
  }

  handleNudgeShown() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      ash.personalization_app.mojom.KeyboardBacklightProvider_HandleNudgeShown_ParamsSpec,
      null,
      [],
      false);
  }

};

ash.personalization_app.mojom.KeyboardBacklightProvider.getRemote = function() {
  let remote = new ash.personalization_app.mojom.KeyboardBacklightProviderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.personalization_app.mojom.KeyboardBacklightProvider',
    'context');
  return remote.$;
};

ash.personalization_app.mojom.KeyboardBacklightProviderReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(handle);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = ash.personalization_app.mojom.KeyboardBacklightProvider_SetKeyboardBacklightObserver_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setKeyboardBacklightObserver(params.observer);
          break;
        }
        case 1: {
          const params = ash.personalization_app.mojom.KeyboardBacklightProvider_SetBacklightColor_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setBacklightColor(params.backlight_color);
          break;
        }
        case 2: {
          const params = ash.personalization_app.mojom.KeyboardBacklightProvider_SetBacklightZoneColor_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setBacklightZoneColor(params.zone, params.backlight_color);
          break;
        }
        case 3: {
          const params = ash.personalization_app.mojom.KeyboardBacklightProvider_ShouldShowNudge_ParamsSpec.$.decode(message.payload);
          const result = this.impl.shouldShowNudge();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.personalization_app.mojom.KeyboardBacklightProvider_ShouldShowNudge_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 4: {
          const params = ash.personalization_app.mojom.KeyboardBacklightProvider_HandleNudgeShown_ParamsSpec.$.decode(message.payload);
          const result = this.impl.handleNudgeShown();
          break;
        }
      }
    });
  }
};

ash.personalization_app.mojom.KeyboardBacklightProviderReceiver = ash.personalization_app.mojom.KeyboardBacklightProviderReceiver;

ash.personalization_app.mojom.KeyboardBacklightProviderPtr = ash.personalization_app.mojom.KeyboardBacklightProviderRemote;
ash.personalization_app.mojom.KeyboardBacklightProviderRequest = ash.personalization_app.mojom.KeyboardBacklightProviderPendingReceiver;

