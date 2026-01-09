// Auto-generated MojoJS binding
// Source: chromium_src/ash/webui/personalization_app/mojom/personalization_app.mojom
// Module: ash.personalization_app.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.personalization_app = ash.personalization_app || {};
ash.personalization_app.mojom = ash.personalization_app.mojom || {};


// Enum: WallpaperLayout
ash.personalization_app.mojom.WallpaperLayout = {
};

// Enum: WallpaperType
ash.personalization_app.mojom.WallpaperType = {
  kDaily: 0,
  can: 1,
  which: 2,
};

// Enum: OnlineImageType
ash.personalization_app.mojom.OnlineImageType = {
  kUnknown: 0,
  kLight: 1,
  kDark: 2,
  kPreview: 3,
  kLateAfternoon: 4,
};

// Enum: GooglePhotosEnablementState
ash.personalization_app.mojom.GooglePhotosEnablementState = {
  or: 0,
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
  but: 0,
  etc: 1,
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
  kRainbow: 8,
};

// Struct: WallpaperCollection
ash.personalization_app.mojom.WallpaperCollection = class {
  constructor(values = {}) {
    this.previews = values.previews !== undefined ? values.previews : "";
  }
};

// Struct: GooglePhotosAlbum
ash.personalization_app.mojom.GooglePhotosAlbum = class {
  constructor(values = {}) {
    this.is_shared = values.is_shared !== undefined ? values.is_shared : 0;
  }
};

// Struct: FetchGooglePhotosAlbumsResponse
ash.personalization_app.mojom.FetchGooglePhotosAlbumsResponse = class {
  constructor(values = {}) {
    this.resume_token = values.resume_token !== undefined ? values.resume_token : "";
  }
};

// Struct: WallpaperImage
ash.personalization_app.mojom.WallpaperImage = class {
  constructor(values = {}) {
    this.unit_id = values.unit_id !== undefined ? values.unit_id : 0;
    this.type = values.type !== undefined ? values.type : null;
  }
};

// Struct: GooglePhotosPhoto
ash.personalization_app.mojom.GooglePhotosPhoto = class {
  constructor(values = {}) {
    this.id = values.id !== undefined ? values.id : "";
    this.dedup_key = values.dedup_key !== undefined ? values.dedup_key : "";
    this.name = values.name !== undefined ? values.name : "";
    this.location = values.location !== undefined ? values.location : 0;
  }
};

// Struct: FetchGooglePhotosPhotosResponse
ash.personalization_app.mojom.FetchGooglePhotosPhotosResponse = class {
  constructor(values = {}) {
    this.resume_token = values.resume_token !== undefined ? values.resume_token : "";
  }
};

// Struct: CurrentAttribution
ash.personalization_app.mojom.CurrentAttribution = class {
  constructor(values = {}) {
    this.key = values.key !== undefined ? values.key : "";
  }
};

// Struct: CurrentWallpaper
ash.personalization_app.mojom.CurrentWallpaper = class {
  constructor(values = {}) {
    this.key = values.key !== undefined ? values.key : "";
  }
};

// Struct: SampleColorScheme
ash.personalization_app.mojom.SampleColorScheme = class {
  constructor(values = {}) {
    this.tertiary = values.tertiary !== undefined ? values.tertiary : null;
  }
};

// Struct: UserInfo
ash.personalization_app.mojom.UserInfo = class {
  constructor(values = {}) {
    this.name = values.name !== undefined ? values.name : "";
  }
};

// Struct: DeprecatedSourceInfo
ash.personalization_app.mojom.DeprecatedSourceInfo = class {
  constructor(values = {}) {
    this.website = values.website !== undefined ? values.website : "";
  }
};

// Struct: DefaultUserImage
ash.personalization_app.mojom.DefaultUserImage = class {
  constructor(values = {}) {
    this.source_info = values.source_info !== undefined ? values.source_info : 0;
  }
};

// Struct: ProfileImage
ash.personalization_app.mojom.ProfileImage = class {
  constructor(values = {}) {
  }
};

// Struct: InvalidImage
ash.personalization_app.mojom.InvalidImage = class {
  constructor(values = {}) {
  }
};

// Struct: AmbientModeAlbum
ash.personalization_app.mojom.AmbientModeAlbum = class {
  constructor(values = {}) {
    this.url = values.url !== undefined ? values.url : 0;
  }
};

// Interface: WallpaperObserver
ash.personalization_app.mojom.WallpaperObserverPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.personalization_app.mojom.WallpaperObserver';
  }

  onWallpaperPreviewEnded() {
    // Method: OnWallpaperPreviewEnded
    // Call: OnWallpaperPreviewEnded()
  }

  onAttributionChanged(attribution) {
    // Method: OnAttributionChanged
    // Call: OnAttributionChanged(attribution)
  }

  onWallpaperChanged(image) {
    // Method: OnWallpaperChanged
    // Call: OnWallpaperChanged(image)
  }

};

ash.personalization_app.mojom.WallpaperObserverRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: WallpaperProvider
ash.personalization_app.mojom.WallpaperProviderPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.personalization_app.mojom.WallpaperProvider';
  }

  makeTransparent() {
    // Method: MakeTransparent
    // Call: MakeTransparent()
  }

  makeOpaque() {
    // Method: MakeOpaque
    // Call: MakeOpaque()
  }

  fetchCollections() {
    // Method: FetchCollections
    return new Promise((resolve) => {
      // Call: FetchCollections()
      resolve({});
    });
  }

  fetchImagesForCollection(collection_id) {
    // Method: FetchImagesForCollection
    return new Promise((resolve) => {
      // Call: FetchImagesForCollection(collection_id)
      resolve({});
    });
  }

  fetchGooglePhotosAlbums(resume_token) {
    // Method: FetchGooglePhotosAlbums
    return new Promise((resolve) => {
      // Call: FetchGooglePhotosAlbums(resume_token)
      resolve({});
    });
  }

  fetchGooglePhotosSharedAlbums(resume_token) {
    // Method: FetchGooglePhotosSharedAlbums
    return new Promise((resolve) => {
      // Call: FetchGooglePhotosSharedAlbums(resume_token)
      resolve({});
    });
  }

  fetchGooglePhotosEnabled() {
    // Method: FetchGooglePhotosEnabled
    return new Promise((resolve) => {
      // Call: FetchGooglePhotosEnabled()
      resolve({});
    });
  }

  fetchGooglePhotosPhotos(item_id, album_id, resume_token) {
    // Method: FetchGooglePhotosPhotos
    return new Promise((resolve) => {
      // Call: FetchGooglePhotosPhotos(item_id, album_id, resume_token)
      resolve({});
    });
  }

  getLocalImages() {
    // Method: GetLocalImages
    return new Promise((resolve) => {
      // Call: GetLocalImages()
      resolve({});
    });
  }

  getDefaultImageThumbnail() {
    // Method: GetDefaultImageThumbnail
    return new Promise((resolve) => {
      // Call: GetDefaultImageThumbnail()
      resolve({});
    });
  }

  getLocalImageThumbnail(file_path) {
    // Method: GetLocalImageThumbnail
    return new Promise((resolve) => {
      // Call: GetLocalImageThumbnail(file_path)
      resolve({});
    });
  }

  setWallpaperObserver(observer) {
    // Method: SetWallpaperObserver
    // Call: SetWallpaperObserver(observer)
  }

  selectWallpaper(unit_id, preview_mode) {
    // Method: SelectWallpaper
    return new Promise((resolve) => {
      // Call: SelectWallpaper(unit_id, preview_mode)
      resolve({});
    });
  }

  selectDefaultImage() {
    // Method: SelectDefaultImage
    return new Promise((resolve) => {
      // Call: SelectDefaultImage()
      resolve({});
    });
  }

  selectLocalImage(path, layout, preview_mode) {
    // Method: SelectLocalImage
    return new Promise((resolve) => {
      // Call: SelectLocalImage(path, layout, preview_mode)
      resolve({});
    });
  }

  selectGooglePhotosPhoto(id, layout, preview_mode) {
    // Method: SelectGooglePhotosPhoto
    return new Promise((resolve) => {
      // Call: SelectGooglePhotosPhoto(id, layout, preview_mode)
      resolve({});
    });
  }

  selectGooglePhotosAlbum(id) {
    // Method: SelectGooglePhotosAlbum
    return new Promise((resolve) => {
      // Call: SelectGooglePhotosAlbum(id)
      resolve({});
    });
  }

  getGooglePhotosDailyRefreshAlbumId() {
    // Method: GetGooglePhotosDailyRefreshAlbumId
    return new Promise((resolve) => {
      // Call: GetGooglePhotosDailyRefreshAlbumId()
      resolve({});
    });
  }

  setCurrentWallpaperLayout(layout) {
    // Method: SetCurrentWallpaperLayout
    // Call: SetCurrentWallpaperLayout(layout)
  }

  setDailyRefreshCollectionId(collection_id) {
    // Method: SetDailyRefreshCollectionId
    return new Promise((resolve) => {
      // Call: SetDailyRefreshCollectionId(collection_id)
      resolve({});
    });
  }

  getDailyRefreshCollectionId() {
    // Method: GetDailyRefreshCollectionId
    return new Promise((resolve) => {
      // Call: GetDailyRefreshCollectionId()
      resolve({});
    });
  }

  updateDailyRefreshWallpaper() {
    // Method: UpdateDailyRefreshWallpaper
    return new Promise((resolve) => {
      // Call: UpdateDailyRefreshWallpaper()
      resolve({});
    });
  }

  isInTabletMode() {
    // Method: IsInTabletMode
    return new Promise((resolve) => {
      // Call: IsInTabletMode()
      resolve({});
    });
  }

  confirmPreviewWallpaper() {
    // Method: ConfirmPreviewWallpaper
    // Call: ConfirmPreviewWallpaper()
  }

  cancelPreviewWallpaper() {
    // Method: CancelPreviewWallpaper
    // Call: CancelPreviewWallpaper()
  }

  shouldShowTimeOfDayWallpaperDialog() {
    // Method: ShouldShowTimeOfDayWallpaperDialog
    return new Promise((resolve) => {
      // Call: ShouldShowTimeOfDayWallpaperDialog()
      resolve({});
    });
  }

};

ash.personalization_app.mojom.WallpaperProviderRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: ThemeObserver
ash.personalization_app.mojom.ThemeObserverPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.personalization_app.mojom.ThemeObserver';
  }

  onColorModeChanged(dark_mode_enabled) {
    // Method: OnColorModeChanged
    // Call: OnColorModeChanged(dark_mode_enabled)
  }

  onColorModeAutoScheduleChanged(enabled) {
    // Method: OnColorModeAutoScheduleChanged
    // Call: OnColorModeAutoScheduleChanged(enabled)
  }

  onColorSchemeChanged(color_scheme) {
    // Method: OnColorSchemeChanged
    // Call: OnColorSchemeChanged(color_scheme)
  }

  onSampleColorSchemesChanged(sample_color_schemes) {
    // Method: OnSampleColorSchemesChanged
    // Call: OnSampleColorSchemesChanged(sample_color_schemes)
  }

  onStaticColorChanged(color) {
    // Method: OnStaticColorChanged
    // Call: OnStaticColorChanged(color)
  }

  onGeolocationPermissionForSystemServicesChanged(enabled, is_user_modifiable) {
    // Method: OnGeolocationPermissionForSystemServicesChanged
    // Call: OnGeolocationPermissionForSystemServicesChanged(enabled, is_user_modifiable)
  }

  onDaylightTimeChanged(sunrise_time, sunset_time) {
    // Method: OnDaylightTimeChanged
    // Call: OnDaylightTimeChanged(sunrise_time, sunset_time)
  }

};

ash.personalization_app.mojom.ThemeObserverRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: ThemeProvider
ash.personalization_app.mojom.ThemeProviderPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.personalization_app.mojom.ThemeProvider';
  }

  setThemeObserver(observer) {
    // Method: SetThemeObserver
    // Call: SetThemeObserver(observer)
  }

  setColorModePref(dark_mode_enabled) {
    // Method: SetColorModePref
    // Call: SetColorModePref(dark_mode_enabled)
  }

  setColorModeAutoScheduleEnabled(enabled) {
    // Method: SetColorModeAutoScheduleEnabled
    // Call: SetColorModeAutoScheduleEnabled(enabled)
  }

  setColorScheme(colorScheme) {
    // Method: SetColorScheme
    // Call: SetColorScheme(colorScheme)
  }

  setStaticColor(static_color) {
    // Method: SetStaticColor
    // Call: SetStaticColor(static_color)
  }

  enableGeolocationForSystemServices() {
    // Method: EnableGeolocationForSystemServices
    // Call: EnableGeolocationForSystemServices()
  }

  getColorScheme() {
    // Method: GetColorScheme
    return new Promise((resolve) => {
      // Call: GetColorScheme()
      resolve({});
    });
  }

  getStaticColor() {
    // Method: GetStaticColor
    return new Promise((resolve) => {
      // Call: GetStaticColor()
      resolve({});
    });
  }

  generateSampleColorSchemes() {
    // Method: GenerateSampleColorSchemes
    return new Promise((resolve) => {
      // Call: GenerateSampleColorSchemes()
      resolve({});
    });
  }

  isColorModeAutoScheduleEnabled() {
    // Method: IsColorModeAutoScheduleEnabled
    return new Promise((resolve) => {
      // Call: IsColorModeAutoScheduleEnabled()
      resolve({});
    });
  }

  isDarkModeEnabled() {
    // Method: IsDarkModeEnabled
    return new Promise((resolve) => {
      // Call: IsDarkModeEnabled()
      resolve({});
    });
  }

  isGeolocationEnabledForSystemServices() {
    // Method: IsGeolocationEnabledForSystemServices
    return new Promise((resolve) => {
      // Call: IsGeolocationEnabledForSystemServices()
      resolve({});
    });
  }

  isGeolocationUserModifiable() {
    // Method: IsGeolocationUserModifiable
    return new Promise((resolve) => {
      // Call: IsGeolocationUserModifiable()
      resolve({});
    });
  }

};

ash.personalization_app.mojom.ThemeProviderRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: UserImageObserver
ash.personalization_app.mojom.UserImageObserverPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.personalization_app.mojom.UserImageObserver';
  }

  onUserImageChanged(user_image) {
    // Method: OnUserImageChanged
    // Call: OnUserImageChanged(user_image)
  }

  onUserProfileImageUpdated(profile_image) {
    // Method: OnUserProfileImageUpdated
    // Call: OnUserProfileImageUpdated(profile_image)
  }

  onCameraPresenceCheckDone(is_camera_present) {
    // Method: OnCameraPresenceCheckDone
    // Call: OnCameraPresenceCheckDone(is_camera_present)
  }

  onIsEnterpriseManagedChanged(is_enterprise_managed) {
    // Method: OnIsEnterpriseManagedChanged
    // Call: OnIsEnterpriseManagedChanged(is_enterprise_managed)
  }

};

ash.personalization_app.mojom.UserImageObserverRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: UserProvider
ash.personalization_app.mojom.UserProviderPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.personalization_app.mojom.UserProvider';
  }

  setUserImageObserver(observer) {
    // Method: SetUserImageObserver
    // Call: SetUserImageObserver(observer)
  }

  getUserInfo() {
    // Method: GetUserInfo
    return new Promise((resolve) => {
      // Call: GetUserInfo()
      resolve({});
    });
  }

  getDefaultUserImages() {
    // Method: GetDefaultUserImages
    return new Promise((resolve) => {
      // Call: GetDefaultUserImages()
      resolve({});
    });
  }

  selectDefaultImage(index) {
    // Method: SelectDefaultImage
    // Call: SelectDefaultImage(index)
  }

  selectProfileImage() {
    // Method: SelectProfileImage
    // Call: SelectProfileImage()
  }

  selectCameraImage(data) {
    // Method: SelectCameraImage
    // Call: SelectCameraImage(data)
  }

  selectImageFromDisk() {
    // Method: SelectImageFromDisk
    // Call: SelectImageFromDisk()
  }

  selectLastExternalUserImage() {
    // Method: SelectLastExternalUserImage
    // Call: SelectLastExternalUserImage()
  }

};

ash.personalization_app.mojom.UserProviderRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: AmbientObserver
ash.personalization_app.mojom.AmbientObserverPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.personalization_app.mojom.AmbientObserver';
  }

  onAmbientModeEnabledChanged(ambient_mode_enabled) {
    // Method: OnAmbientModeEnabledChanged
    // Call: OnAmbientModeEnabledChanged(ambient_mode_enabled)
  }

  onAmbientThemeChanged(ambient_theme) {
    // Method: OnAmbientThemeChanged
    // Call: OnAmbientThemeChanged(ambient_theme)
  }

  onTopicSourceChanged(topic_source) {
    // Method: OnTopicSourceChanged
    // Call: OnTopicSourceChanged(topic_source)
  }

  onScreenSaverDurationChanged(minutes) {
    // Method: OnScreenSaverDurationChanged
    // Call: OnScreenSaverDurationChanged(minutes)
  }

  onTemperatureUnitChanged(temperature_unit) {
    // Method: OnTemperatureUnitChanged
    // Call: OnTemperatureUnitChanged(temperature_unit)
  }

  onAlbumsChanged(albums) {
    // Method: OnAlbumsChanged
    // Call: OnAlbumsChanged(albums)
  }

  onPreviewsFetched(previews) {
    // Method: OnPreviewsFetched
    // Call: OnPreviewsFetched(previews)
  }

  onAmbientUiVisibilityChanged(visibility) {
    // Method: OnAmbientUiVisibilityChanged
    // Call: OnAmbientUiVisibilityChanged(visibility)
  }

  onGeolocationPermissionForSystemServicesChanged(enabled, is_user_modifiable) {
    // Method: OnGeolocationPermissionForSystemServicesChanged
    // Call: OnGeolocationPermissionForSystemServicesChanged(enabled, is_user_modifiable)
  }

  onAmbientThemePreviewImagesChanged(previews) {
    // Method: OnAmbientThemePreviewImagesChanged
    // Call: OnAmbientThemePreviewImagesChanged(previews)
  }

};

ash.personalization_app.mojom.AmbientObserverRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: AmbientProvider
ash.personalization_app.mojom.AmbientProviderPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.personalization_app.mojom.AmbientProvider';
  }

  isAmbientModeEnabled() {
    // Method: IsAmbientModeEnabled
    return new Promise((resolve) => {
      // Call: IsAmbientModeEnabled()
      resolve({});
    });
  }

  setAmbientModeEnabled(enabled) {
    // Method: SetAmbientModeEnabled
    // Call: SetAmbientModeEnabled(enabled)
  }

  setAmbientObserver(observer) {
    // Method: SetAmbientObserver
    // Call: SetAmbientObserver(observer)
  }

  setAmbientTheme(ambient_theme) {
    // Method: SetAmbientTheme
    // Call: SetAmbientTheme(ambient_theme)
  }

  setScreenSaverDuration(minutes) {
    // Method: SetScreenSaverDuration
    // Call: SetScreenSaverDuration(minutes)
  }

  setTopicSource(topic_source) {
    // Method: SetTopicSource
    // Call: SetTopicSource(topic_source)
  }

  setTemperatureUnit(temperature_unit) {
    // Method: SetTemperatureUnit
    // Call: SetTemperatureUnit(temperature_unit)
  }

  setAlbumSelected(id, topic_source, selected) {
    // Method: SetAlbumSelected
    // Call: SetAlbumSelected(id, topic_source, selected)
  }

  setPageViewed() {
    // Method: SetPageViewed
    // Call: SetPageViewed()
  }

  fetchSettingsAndAlbums() {
    // Method: FetchSettingsAndAlbums
    // Call: FetchSettingsAndAlbums()
  }

  startScreenSaverPreview() {
    // Method: StartScreenSaverPreview
    // Call: StartScreenSaverPreview()
  }

  shouldShowTimeOfDayBanner() {
    // Method: ShouldShowTimeOfDayBanner
    return new Promise((resolve) => {
      // Call: ShouldShowTimeOfDayBanner()
      resolve({});
    });
  }

  handleTimeOfDayBannerDismissed() {
    // Method: HandleTimeOfDayBannerDismissed
    // Call: HandleTimeOfDayBannerDismissed()
  }

  isGeolocationEnabledForSystemServices() {
    // Method: IsGeolocationEnabledForSystemServices
    return new Promise((resolve) => {
      // Call: IsGeolocationEnabledForSystemServices()
      resolve({});
    });
  }

  isGeolocationUserModifiable() {
    // Method: IsGeolocationUserModifiable
    return new Promise((resolve) => {
      // Call: IsGeolocationUserModifiable()
      resolve({});
    });
  }

  enableGeolocationForSystemServices() {
    // Method: EnableGeolocationForSystemServices
    // Call: EnableGeolocationForSystemServices()
  }

};

ash.personalization_app.mojom.AmbientProviderRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: KeyboardBacklightObserver
ash.personalization_app.mojom.KeyboardBacklightObserverPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.personalization_app.mojom.KeyboardBacklightObserver';
  }

  onBacklightStateChanged(currentBacklightState) {
    // Method: OnBacklightStateChanged
    // Call: OnBacklightStateChanged(currentBacklightState)
  }

  onWallpaperColorChanged(wallpaper_color) {
    // Method: OnWallpaperColorChanged
    // Call: OnWallpaperColorChanged(wallpaper_color)
  }

};

ash.personalization_app.mojom.KeyboardBacklightObserverRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: KeyboardBacklightProvider
ash.personalization_app.mojom.KeyboardBacklightProviderPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.personalization_app.mojom.KeyboardBacklightProvider';
  }

  setKeyboardBacklightObserver(observer) {
    // Method: SetKeyboardBacklightObserver
    // Call: SetKeyboardBacklightObserver(observer)
  }

  setBacklightColor(backlight_color) {
    // Method: SetBacklightColor
    // Call: SetBacklightColor(backlight_color)
  }

  setBacklightZoneColor(zone, backlight_color) {
    // Method: SetBacklightZoneColor
    // Call: SetBacklightZoneColor(zone, backlight_color)
  }

  shouldShowNudge() {
    // Method: ShouldShowNudge
    return new Promise((resolve) => {
      // Call: ShouldShowNudge()
      resolve({});
    });
  }

  handleNudgeShown() {
    // Method: HandleNudgeShown
    // Call: HandleNudgeShown()
  }

};

ash.personalization_app.mojom.KeyboardBacklightProviderRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
