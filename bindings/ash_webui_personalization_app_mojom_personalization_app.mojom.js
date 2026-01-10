// Auto-generated MojoJS binding
// Source: chromium_src/ash/webui/personalization_app/mojom/personalization_app.mojom
// Module: ash.personalization_app.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.personalization_app = ash.personalization_app || {};
ash.personalization_app.personalization_app.mojom = ash.personalization_app.personalization_app.mojom || {};
var skia = skia || {};
var url = url || {};


ash.personalization_app.personalization_app.mojom.mojom.kStaticColorGoogleBlue = 0x4285F4;

ash.personalization_app.personalization_app.mojom.mojom.kStaticColorLightPink = 0xFFD6D6;

ash.personalization_app.personalization_app.mojom.mojom.kStaticColorDarkGreen = 0x485045;

ash.personalization_app.personalization_app.mojom.mojom.kStaticColorLightPurple = 0xCBBFFF;

ash.personalization_app.personalization_app.mojom.mojom.kWhiteColor = 0xFFFFFF;

ash.personalization_app.personalization_app.mojom.mojom.kRedColor = 0xEE675C;

ash.personalization_app.personalization_app.mojom.mojom.kYellowColor = 0xFBBC04;

ash.personalization_app.personalization_app.mojom.mojom.kGreenColor = 0x34A853;

ash.personalization_app.personalization_app.mojom.mojom.kBlueColor = 0x00A3C2;

ash.personalization_app.personalization_app.mojom.mojom.kIndigoColor = 0x4285F4;

ash.personalization_app.personalization_app.mojom.mojom.kPurpleColor = 0xB76DF8;

// Enum: WallpaperLayout
ash.personalization_app.personalization_app.mojom.mojom.WallpaperLayout = {
  kCenter: 0,
  kCenterCropped: 1,
  kStretch: 2,
  kTile: 3,
};
ash.personalization_app.personalization_app.mojom.mojom.WallpaperLayoutSpec = { $: mojo.internal.Enum() };

// Enum: WallpaperType
ash.personalization_app.personalization_app.mojom.mojom.WallpaperType = {
  kDaily: 0,
  kCustomized: 1,
  kDefault: 2,
  kOnline: 3,
  kPolicy: 4,
  kThirdParty: 5,
  kDevice: 6,
  kOneShot: 7,
  kDailyGooglePhotos: 8,
  kOnceGooglePhotos: 9,
  kOobe: 10,
  kSeaPen: 11,
};
ash.personalization_app.personalization_app.mojom.mojom.WallpaperTypeSpec = { $: mojo.internal.Enum() };

// Enum: OnlineImageType
ash.personalization_app.personalization_app.mojom.mojom.OnlineImageType = {
  kUnknown: 0,
  kLight: 1,
  kDark: 2,
  kPreview: 3,
  kMorning: 4,
  kLateAfternoon: 5,
};
ash.personalization_app.personalization_app.mojom.mojom.OnlineImageTypeSpec = { $: mojo.internal.Enum() };

// Enum: GooglePhotosEnablementState
ash.personalization_app.personalization_app.mojom.mojom.GooglePhotosEnablementState = {
  kError: 0,
  kDisabled: 1,
  kEnabled: 2,
};
ash.personalization_app.personalization_app.mojom.mojom.GooglePhotosEnablementStateSpec = { $: mojo.internal.Enum() };

// Enum: StaticColor
ash.personalization_app.personalization_app.mojom.mojom.StaticColor = {
  kUnknown: 0,
  kGoogleBlue: 1,
  kLightPink: 2,
  kDarkGreen: 3,
  kLightPurple: 4,
};
ash.personalization_app.personalization_app.mojom.mojom.StaticColorSpec = { $: mojo.internal.Enum() };

// Enum: AmbientTheme
ash.personalization_app.personalization_app.mojom.mojom.AmbientTheme = {
  kSlideshow: 0,
  kFeelTheBreeze: 1,
  kFloatOnBy: 2,
  kVideo: 3,
};
ash.personalization_app.personalization_app.mojom.mojom.AmbientThemeSpec = { $: mojo.internal.Enum() };

// Enum: TopicSource
ash.personalization_app.personalization_app.mojom.mojom.TopicSource = {
  kGooglePhotos: 0,
  kArtGallery: 1,
  kVideo: 2,
};
ash.personalization_app.personalization_app.mojom.mojom.TopicSourceSpec = { $: mojo.internal.Enum() };

// Enum: TemperatureUnit
ash.personalization_app.personalization_app.mojom.mojom.TemperatureUnit = {
  kFahrenheit: 0,
  kCelsius: 1,
};
ash.personalization_app.personalization_app.mojom.mojom.TemperatureUnitSpec = { $: mojo.internal.Enum() };

// Enum: AmbientUiVisibility
ash.personalization_app.personalization_app.mojom.mojom.AmbientUiVisibility = {
  kShouldShow: 0,
  kPreview: 1,
  kHidden: 2,
  kClosed: 3,
};
ash.personalization_app.personalization_app.mojom.mojom.AmbientUiVisibilitySpec = { $: mojo.internal.Enum() };

// Enum: BacklightColor
ash.personalization_app.personalization_app.mojom.mojom.BacklightColor = {
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
ash.personalization_app.personalization_app.mojom.mojom.BacklightColorSpec = { $: mojo.internal.Enum() };

// Union: UserImage
ash.personalization_app.personalization_app.mojom.mojom.UserImageSpec = { $: mojo.internal.Union(
    'ash.personalization_app.mojom.UserImage', {
      'default_image': {
        'ordinal': 0,
        'type': ash.personalization_app.mojom.DefaultUserImageSpec,
      }},
      'external_image': {
        'ordinal': 1,
        'type': mojo_base.mojom.BigBufferSpec,
      }},
      'profile_image': {
        'ordinal': 2,
        'type': ash.personalization_app.mojom.ProfileImageSpec,
      }},
      'invalid_image': {
        'ordinal': 3,
        'type': ash.personalization_app.mojom.InvalidImageSpec,
      }},
    })
};

// Union: CurrentBacklightState
ash.personalization_app.personalization_app.mojom.mojom.CurrentBacklightStateSpec = { $: mojo.internal.Union(
    'ash.personalization_app.mojom.CurrentBacklightState', {
      'color': {
        'ordinal': 0,
        'type': ash.personalization_app.mojom.BacklightColorSpec,
      }},
      'zone_colors': {
        'ordinal': 1,
        'type': mojo.internal.Array(ash.personalization_app.mojom.BacklightColorSpec, false),
      }},
    })
};

// Struct: WallpaperCollection
ash.personalization_app.personalization_app.mojom.mojom.WallpaperCollectionSpec = {
  $: {
    structSpec: {
      name: 'ash.personalization_app.mojom.WallpaperCollection',
      packedSize: 40,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'name', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'description_content', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'previews', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Array(url.mojom.UrlSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Struct: GooglePhotosAlbum
ash.personalization_app.personalization_app.mojom.mojom.GooglePhotosAlbumSpec = {
  $: {
    structSpec: {
      name: 'ash.personalization_app.mojom.GooglePhotosAlbum',
      packedSize: 48,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'title', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'photo_count', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'preview', packedOffset: 16, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'timestamp', packedOffset: 24, packedBitOffset: 0, type: mojo_base.mojom.TimeSpec, nullable: false, minVersion: 0 },
        { name: 'is_shared', packedOffset: 36, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 48}]
    }
  }
};

// Struct: FetchGooglePhotosAlbumsResponse
ash.personalization_app.personalization_app.mojom.mojom.FetchGooglePhotosAlbumsResponseSpec = {
  $: {
    structSpec: {
      name: 'ash.personalization_app.mojom.FetchGooglePhotosAlbumsResponse',
      packedSize: 24,
      fields: [
        { name: 'albums', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(ash.personalization_app.mojom.GooglePhotosAlbumSpec, false), nullable: true, minVersion: 0 },
        { name: 'resume_token', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: WallpaperImage
ash.personalization_app.personalization_app.mojom.mojom.WallpaperImageSpec = {
  $: {
    structSpec: {
      name: 'ash.personalization_app.mojom.WallpaperImage',
      packedSize: 48,
      fields: [
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'attribution', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.String, false), nullable: false, minVersion: 0 },
        { name: 'asset_id', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
        { name: 'unit_id', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
        { name: 'type', packedOffset: 32, packedBitOffset: 0, type: ash.personalization_app.mojom.OnlineImageTypeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 48}]
    }
  }
};

// Struct: GooglePhotosPhoto
ash.personalization_app.personalization_app.mojom.mojom.GooglePhotosPhotoSpec = {
  $: {
    structSpec: {
      name: 'ash.personalization_app.mojom.GooglePhotosPhoto',
      packedSize: 56,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'dedup_key', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'name', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'date', packedOffset: 24, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false, minVersion: 0 },
        { name: 'url', packedOffset: 32, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'location', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 56}]
    }
  }
};

// Struct: FetchGooglePhotosPhotosResponse
ash.personalization_app.personalization_app.mojom.mojom.FetchGooglePhotosPhotosResponseSpec = {
  $: {
    structSpec: {
      name: 'ash.personalization_app.mojom.FetchGooglePhotosPhotosResponse',
      packedSize: 24,
      fields: [
        { name: 'photos', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(ash.personalization_app.mojom.GooglePhotosPhotoSpec, false), nullable: true, minVersion: 0 },
        { name: 'resume_token', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: CurrentAttribution
ash.personalization_app.personalization_app.mojom.mojom.CurrentAttributionSpec = {
  $: {
    structSpec: {
      name: 'ash.personalization_app.mojom.CurrentAttribution',
      packedSize: 24,
      fields: [
        { name: 'attribution', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.String, false), nullable: false, minVersion: 0 },
        { name: 'key', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: CurrentWallpaper
ash.personalization_app.personalization_app.mojom.mojom.CurrentWallpaperSpec = {
  $: {
    structSpec: {
      name: 'ash.personalization_app.mojom.CurrentWallpaper',
      packedSize: 48,
      fields: [
        { name: 'layout', packedOffset: 32, packedBitOffset: 0, type: ash.personalization_app.mojom.WallpaperLayoutSpec, nullable: false, minVersion: 0 },
        { name: 'type', packedOffset: 36, packedBitOffset: 0, type: ash.personalization_app.mojom.WallpaperTypeSpec, nullable: false, minVersion: 0 },
        { name: 'key', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'description_title', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'description_content', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'action_url', packedOffset: 24, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 48}]
    }
  }
};

// Struct: SampleColorScheme
ash.personalization_app.personalization_app.mojom.mojom.SampleColorSchemeSpec = {
  $: {
    structSpec: {
      name: 'ash.personalization_app.mojom.SampleColorScheme',
      packedSize: 40,
      fields: [
        { name: 'scheme', packedOffset: 24, packedBitOffset: 0, type: ash.style.mojom.ColorSchemeSpec, nullable: false, minVersion: 0 },
        { name: 'primary', packedOffset: 0, packedBitOffset: 0, type: skia.mojom.SkColorSpec, nullable: false, minVersion: 0 },
        { name: 'secondary', packedOffset: 8, packedBitOffset: 0, type: skia.mojom.SkColorSpec, nullable: false, minVersion: 0 },
        { name: 'tertiary', packedOffset: 16, packedBitOffset: 0, type: skia.mojom.SkColorSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Struct: UserInfo
ash.personalization_app.personalization_app.mojom.mojom.UserInfoSpec = {
  $: {
    structSpec: {
      name: 'ash.personalization_app.mojom.UserInfo',
      packedSize: 24,
      fields: [
        { name: 'email', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'name', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: DeprecatedSourceInfo
ash.personalization_app.personalization_app.mojom.mojom.DeprecatedSourceInfoSpec = {
  $: {
    structSpec: {
      name: 'ash.personalization_app.mojom.DeprecatedSourceInfo',
      packedSize: 24,
      fields: [
        { name: 'author', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false, minVersion: 0 },
        { name: 'website', packedOffset: 8, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: DefaultUserImage
ash.personalization_app.personalization_app.mojom.mojom.DefaultUserImageSpec = {
  $: {
    structSpec: {
      name: 'ash.personalization_app.mojom.DefaultUserImage',
      packedSize: 40,
      fields: [
        { name: 'index', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'title', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false, minVersion: 0 },
        { name: 'url', packedOffset: 8, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'source_info', packedOffset: 16, packedBitOffset: 0, type: ash.personalization_app.mojom.DeprecatedSourceInfoSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Struct: ProfileImage
ash.personalization_app.personalization_app.mojom.mojom.ProfileImageSpec = {
  $: {
    structSpec: {
      name: 'ash.personalization_app.mojom.ProfileImage',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Struct: InvalidImage
ash.personalization_app.personalization_app.mojom.mojom.InvalidImageSpec = {
  $: {
    structSpec: {
      name: 'ash.personalization_app.mojom.InvalidImage',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Struct: AmbientModeAlbum
ash.personalization_app.personalization_app.mojom.mojom.AmbientModeAlbumSpec = {
  $: {
    structSpec: {
      name: 'ash.personalization_app.mojom.AmbientModeAlbum',
      packedSize: 56,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'checked', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'title', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'description', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'number_of_photos', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'topic_source', packedOffset: 36, packedBitOffset: 0, type: ash.personalization_app.mojom.TopicSourceSpec, nullable: false, minVersion: 0 },
        { name: 'url', packedOffset: 24, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 56}]
    }
  }
};

// Interface: WallpaperObserver
ash.personalization_app.personalization_app.mojom.mojom.WallpaperObserver = {};

ash.personalization_app.personalization_app.mojom.mojom.WallpaperObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.personalization_app.personalization_app.mojom.mojom.WallpaperObserverRemote = class {
  static get $interfaceName() {
    return 'ash.personalization_app.mojom.WallpaperObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.personalization_app.personalization_app.mojom.mojom.WallpaperObserverPendingReceiver,
      handle);
    this.$ = new ash.personalization_app.personalization_app.mojom.mojom.WallpaperObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.personalization_app.personalization_app.mojom.mojom.WallpaperObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onWallpaperPreviewEnded() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.personalization_app.personalization_app.mojom.mojom.WallpaperObserver_OnWallpaperPreviewEnded_ParamsSpec,
      null,
      []);
  }

  onAttributionChanged(attribution) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.personalization_app.personalization_app.mojom.mojom.WallpaperObserver_OnAttributionChanged_ParamsSpec,
      null,
      [attribution]);
  }

  onWallpaperChanged(image) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.personalization_app.personalization_app.mojom.mojom.WallpaperObserver_OnWallpaperChanged_ParamsSpec,
      null,
      [image]);
  }

};

ash.personalization_app.personalization_app.mojom.mojom.WallpaperObserver.getRemote = function() {
  let remote = new ash.personalization_app.personalization_app.mojom.mojom.WallpaperObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.personalization_app.mojom.WallpaperObserver',
    'context');
  return remote.$;
};

// ParamsSpec for OnWallpaperPreviewEnded
ash.personalization_app.personalization_app.mojom.mojom.WallpaperObserver_OnWallpaperPreviewEnded_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.personalization_app.mojom.WallpaperObserver.OnWallpaperPreviewEnded_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for OnAttributionChanged
ash.personalization_app.personalization_app.mojom.mojom.WallpaperObserver_OnAttributionChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.personalization_app.mojom.WallpaperObserver.OnAttributionChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'attribution', packedOffset: 0, packedBitOffset: 0, type: ash.personalization_app.mojom.CurrentAttributionSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnWallpaperChanged
ash.personalization_app.personalization_app.mojom.mojom.WallpaperObserver_OnWallpaperChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.personalization_app.mojom.WallpaperObserver.OnWallpaperChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'image', packedOffset: 0, packedBitOffset: 0, type: ash.personalization_app.mojom.CurrentWallpaperSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
ash.personalization_app.personalization_app.mojom.mojom.WallpaperObserverPtr = ash.personalization_app.personalization_app.mojom.mojom.WallpaperObserverRemote;
ash.personalization_app.personalization_app.mojom.mojom.WallpaperObserverRequest = ash.personalization_app.personalization_app.mojom.mojom.WallpaperObserverPendingReceiver;


// Interface: WallpaperProvider
ash.personalization_app.personalization_app.mojom.mojom.WallpaperProvider = {};

ash.personalization_app.personalization_app.mojom.mojom.WallpaperProviderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.personalization_app.personalization_app.mojom.mojom.WallpaperProviderRemote = class {
  static get $interfaceName() {
    return 'ash.personalization_app.mojom.WallpaperProvider';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.personalization_app.personalization_app.mojom.mojom.WallpaperProviderPendingReceiver,
      handle);
    this.$ = new ash.personalization_app.personalization_app.mojom.mojom.WallpaperProviderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.personalization_app.personalization_app.mojom.mojom.WallpaperProviderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  makeTransparent() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.personalization_app.personalization_app.mojom.mojom.WallpaperProvider_MakeTransparent_ParamsSpec,
      null,
      []);
  }

  makeOpaque() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.personalization_app.personalization_app.mojom.mojom.WallpaperProvider_MakeOpaque_ParamsSpec,
      null,
      []);
  }

  fetchCollections() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.personalization_app.personalization_app.mojom.mojom.WallpaperProvider_FetchCollections_ParamsSpec,
      ash.personalization_app.personalization_app.mojom.mojom.WallpaperProvider_FetchCollections_ResponseParamsSpec,
      []);
  }

  fetchImagesForCollection(collection_id) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      ash.personalization_app.personalization_app.mojom.mojom.WallpaperProvider_FetchImagesForCollection_ParamsSpec,
      ash.personalization_app.personalization_app.mojom.mojom.WallpaperProvider_FetchImagesForCollection_ResponseParamsSpec,
      [collection_id]);
  }

  fetchGooglePhotosAlbums(resume_token) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      ash.personalization_app.personalization_app.mojom.mojom.WallpaperProvider_FetchGooglePhotosAlbums_ParamsSpec,
      ash.personalization_app.personalization_app.mojom.mojom.WallpaperProvider_FetchGooglePhotosAlbums_ResponseParamsSpec,
      [resume_token]);
  }

  fetchGooglePhotosSharedAlbums(resume_token) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      ash.personalization_app.personalization_app.mojom.mojom.WallpaperProvider_FetchGooglePhotosSharedAlbums_ParamsSpec,
      ash.personalization_app.personalization_app.mojom.mojom.WallpaperProvider_FetchGooglePhotosSharedAlbums_ResponseParamsSpec,
      [resume_token]);
  }

  fetchGooglePhotosEnabled() {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      ash.personalization_app.personalization_app.mojom.mojom.WallpaperProvider_FetchGooglePhotosEnabled_ParamsSpec,
      ash.personalization_app.personalization_app.mojom.mojom.WallpaperProvider_FetchGooglePhotosEnabled_ResponseParamsSpec,
      []);
  }

  fetchGooglePhotosPhotos(item_id, album_id, resume_token) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      ash.personalization_app.personalization_app.mojom.mojom.WallpaperProvider_FetchGooglePhotosPhotos_ParamsSpec,
      ash.personalization_app.personalization_app.mojom.mojom.WallpaperProvider_FetchGooglePhotosPhotos_ResponseParamsSpec,
      [item_id, album_id, resume_token]);
  }

  getLocalImages() {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      ash.personalization_app.personalization_app.mojom.mojom.WallpaperProvider_GetLocalImages_ParamsSpec,
      ash.personalization_app.personalization_app.mojom.mojom.WallpaperProvider_GetLocalImages_ResponseParamsSpec,
      []);
  }

  getDefaultImageThumbnail() {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      ash.personalization_app.personalization_app.mojom.mojom.WallpaperProvider_GetDefaultImageThumbnail_ParamsSpec,
      ash.personalization_app.personalization_app.mojom.mojom.WallpaperProvider_GetDefaultImageThumbnail_ResponseParamsSpec,
      []);
  }

  getLocalImageThumbnail(file_path) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      ash.personalization_app.personalization_app.mojom.mojom.WallpaperProvider_GetLocalImageThumbnail_ParamsSpec,
      ash.personalization_app.personalization_app.mojom.mojom.WallpaperProvider_GetLocalImageThumbnail_ResponseParamsSpec,
      [file_path]);
  }

  setWallpaperObserver(observer) {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      ash.personalization_app.personalization_app.mojom.mojom.WallpaperProvider_SetWallpaperObserver_ParamsSpec,
      null,
      [observer]);
  }

  selectWallpaper(unit_id, preview_mode) {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      ash.personalization_app.personalization_app.mojom.mojom.WallpaperProvider_SelectWallpaper_ParamsSpec,
      ash.personalization_app.personalization_app.mojom.mojom.WallpaperProvider_SelectWallpaper_ResponseParamsSpec,
      [unit_id, preview_mode]);
  }

  selectDefaultImage() {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
      ash.personalization_app.personalization_app.mojom.mojom.WallpaperProvider_SelectDefaultImage_ParamsSpec,
      ash.personalization_app.personalization_app.mojom.mojom.WallpaperProvider_SelectDefaultImage_ResponseParamsSpec,
      []);
  }

  selectLocalImage(path, layout, preview_mode) {
    // Ordinal: 14
    return this.proxy.sendMessage(
      14,  // ordinal
      ash.personalization_app.personalization_app.mojom.mojom.WallpaperProvider_SelectLocalImage_ParamsSpec,
      ash.personalization_app.personalization_app.mojom.mojom.WallpaperProvider_SelectLocalImage_ResponseParamsSpec,
      [path, layout, preview_mode]);
  }

  selectGooglePhotosPhoto(id, layout, preview_mode) {
    // Ordinal: 15
    return this.proxy.sendMessage(
      15,  // ordinal
      ash.personalization_app.personalization_app.mojom.mojom.WallpaperProvider_SelectGooglePhotosPhoto_ParamsSpec,
      ash.personalization_app.personalization_app.mojom.mojom.WallpaperProvider_SelectGooglePhotosPhoto_ResponseParamsSpec,
      [id, layout, preview_mode]);
  }

  selectGooglePhotosAlbum(id) {
    // Ordinal: 16
    return this.proxy.sendMessage(
      16,  // ordinal
      ash.personalization_app.personalization_app.mojom.mojom.WallpaperProvider_SelectGooglePhotosAlbum_ParamsSpec,
      ash.personalization_app.personalization_app.mojom.mojom.WallpaperProvider_SelectGooglePhotosAlbum_ResponseParamsSpec,
      [id]);
  }

  getGooglePhotosDailyRefreshAlbumId() {
    // Ordinal: 17
    return this.proxy.sendMessage(
      17,  // ordinal
      ash.personalization_app.personalization_app.mojom.mojom.WallpaperProvider_GetGooglePhotosDailyRefreshAlbumId_ParamsSpec,
      ash.personalization_app.personalization_app.mojom.mojom.WallpaperProvider_GetGooglePhotosDailyRefreshAlbumId_ResponseParamsSpec,
      []);
  }

  setCurrentWallpaperLayout(layout) {
    // Ordinal: 18
    return this.proxy.sendMessage(
      18,  // ordinal
      ash.personalization_app.personalization_app.mojom.mojom.WallpaperProvider_SetCurrentWallpaperLayout_ParamsSpec,
      null,
      [layout]);
  }

  setDailyRefreshCollectionId(collection_id) {
    // Ordinal: 19
    return this.proxy.sendMessage(
      19,  // ordinal
      ash.personalization_app.personalization_app.mojom.mojom.WallpaperProvider_SetDailyRefreshCollectionId_ParamsSpec,
      ash.personalization_app.personalization_app.mojom.mojom.WallpaperProvider_SetDailyRefreshCollectionId_ResponseParamsSpec,
      [collection_id]);
  }

  getDailyRefreshCollectionId() {
    // Ordinal: 20
    return this.proxy.sendMessage(
      20,  // ordinal
      ash.personalization_app.personalization_app.mojom.mojom.WallpaperProvider_GetDailyRefreshCollectionId_ParamsSpec,
      ash.personalization_app.personalization_app.mojom.mojom.WallpaperProvider_GetDailyRefreshCollectionId_ResponseParamsSpec,
      []);
  }

  updateDailyRefreshWallpaper() {
    // Ordinal: 21
    return this.proxy.sendMessage(
      21,  // ordinal
      ash.personalization_app.personalization_app.mojom.mojom.WallpaperProvider_UpdateDailyRefreshWallpaper_ParamsSpec,
      ash.personalization_app.personalization_app.mojom.mojom.WallpaperProvider_UpdateDailyRefreshWallpaper_ResponseParamsSpec,
      []);
  }

  isInTabletMode() {
    // Ordinal: 22
    return this.proxy.sendMessage(
      22,  // ordinal
      ash.personalization_app.personalization_app.mojom.mojom.WallpaperProvider_IsInTabletMode_ParamsSpec,
      ash.personalization_app.personalization_app.mojom.mojom.WallpaperProvider_IsInTabletMode_ResponseParamsSpec,
      []);
  }

  confirmPreviewWallpaper() {
    // Ordinal: 23
    return this.proxy.sendMessage(
      23,  // ordinal
      ash.personalization_app.personalization_app.mojom.mojom.WallpaperProvider_ConfirmPreviewWallpaper_ParamsSpec,
      null,
      []);
  }

  cancelPreviewWallpaper() {
    // Ordinal: 24
    return this.proxy.sendMessage(
      24,  // ordinal
      ash.personalization_app.personalization_app.mojom.mojom.WallpaperProvider_CancelPreviewWallpaper_ParamsSpec,
      null,
      []);
  }

  shouldShowTimeOfDayWallpaperDialog() {
    // Ordinal: 25
    return this.proxy.sendMessage(
      25,  // ordinal
      ash.personalization_app.personalization_app.mojom.mojom.WallpaperProvider_ShouldShowTimeOfDayWallpaperDialog_ParamsSpec,
      ash.personalization_app.personalization_app.mojom.mojom.WallpaperProvider_ShouldShowTimeOfDayWallpaperDialog_ResponseParamsSpec,
      []);
  }

};

ash.personalization_app.personalization_app.mojom.mojom.WallpaperProvider.getRemote = function() {
  let remote = new ash.personalization_app.personalization_app.mojom.mojom.WallpaperProviderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.personalization_app.mojom.WallpaperProvider',
    'context');
  return remote.$;
};

// ParamsSpec for MakeTransparent
ash.personalization_app.personalization_app.mojom.mojom.WallpaperProvider_MakeTransparent_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.personalization_app.mojom.WallpaperProvider.MakeTransparent_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for MakeOpaque
ash.personalization_app.personalization_app.mojom.mojom.WallpaperProvider_MakeOpaque_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.personalization_app.mojom.WallpaperProvider.MakeOpaque_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for FetchCollections
ash.personalization_app.personalization_app.mojom.mojom.WallpaperProvider_FetchCollections_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.personalization_app.mojom.WallpaperProvider.FetchCollections_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.personalization_app.personalization_app.mojom.mojom.WallpaperProvider_FetchCollections_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.personalization_app.mojom.WallpaperProvider.FetchCollections_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'collections', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(ash.personalization_app.mojom.WallpaperCollectionSpec, false), nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for FetchImagesForCollection
ash.personalization_app.personalization_app.mojom.mojom.WallpaperProvider_FetchImagesForCollection_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.personalization_app.mojom.WallpaperProvider.FetchImagesForCollection_Params',
      packedSize: 16,
      fields: [
        { name: 'collection_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

ash.personalization_app.personalization_app.mojom.mojom.WallpaperProvider_FetchImagesForCollection_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.personalization_app.mojom.WallpaperProvider.FetchImagesForCollection_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'images', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(ash.personalization_app.mojom.WallpaperImageSpec, false), nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for FetchGooglePhotosAlbums
ash.personalization_app.personalization_app.mojom.mojom.WallpaperProvider_FetchGooglePhotosAlbums_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.personalization_app.mojom.WallpaperProvider.FetchGooglePhotosAlbums_Params',
      packedSize: 16,
      fields: [
        { name: 'resume_token', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

ash.personalization_app.personalization_app.mojom.mojom.WallpaperProvider_FetchGooglePhotosAlbums_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.personalization_app.mojom.WallpaperProvider.FetchGooglePhotosAlbums_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'response', packedOffset: 0, packedBitOffset: 0, type: ash.personalization_app.mojom.FetchGooglePhotosAlbumsResponseSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for FetchGooglePhotosSharedAlbums
ash.personalization_app.personalization_app.mojom.mojom.WallpaperProvider_FetchGooglePhotosSharedAlbums_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.personalization_app.mojom.WallpaperProvider.FetchGooglePhotosSharedAlbums_Params',
      packedSize: 16,
      fields: [
        { name: 'resume_token', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

ash.personalization_app.personalization_app.mojom.mojom.WallpaperProvider_FetchGooglePhotosSharedAlbums_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.personalization_app.mojom.WallpaperProvider.FetchGooglePhotosSharedAlbums_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'response', packedOffset: 0, packedBitOffset: 0, type: ash.personalization_app.mojom.FetchGooglePhotosAlbumsResponseSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for FetchGooglePhotosEnabled
ash.personalization_app.personalization_app.mojom.mojom.WallpaperProvider_FetchGooglePhotosEnabled_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.personalization_app.mojom.WallpaperProvider.FetchGooglePhotosEnabled_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.personalization_app.personalization_app.mojom.mojom.WallpaperProvider_FetchGooglePhotosEnabled_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.personalization_app.mojom.WallpaperProvider.FetchGooglePhotosEnabled_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'state', packedOffset: 0, packedBitOffset: 0, type: ash.personalization_app.mojom.GooglePhotosEnablementStateSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for FetchGooglePhotosPhotos
ash.personalization_app.personalization_app.mojom.mojom.WallpaperProvider_FetchGooglePhotosPhotos_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.personalization_app.mojom.WallpaperProvider.FetchGooglePhotosPhotos_Params',
      packedSize: 32,
      fields: [
        { name: 'item_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'album_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'resume_token', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

ash.personalization_app.personalization_app.mojom.mojom.WallpaperProvider_FetchGooglePhotosPhotos_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.personalization_app.mojom.WallpaperProvider.FetchGooglePhotosPhotos_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'response', packedOffset: 0, packedBitOffset: 0, type: ash.personalization_app.mojom.FetchGooglePhotosPhotosResponseSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetLocalImages
ash.personalization_app.personalization_app.mojom.mojom.WallpaperProvider_GetLocalImages_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.personalization_app.mojom.WallpaperProvider.GetLocalImages_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.personalization_app.personalization_app.mojom.mojom.WallpaperProvider_GetLocalImages_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.personalization_app.mojom.WallpaperProvider.GetLocalImages_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'images', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo_base.mojom.FilePathSpec, false), nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetDefaultImageThumbnail
ash.personalization_app.personalization_app.mojom.mojom.WallpaperProvider_GetDefaultImageThumbnail_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.personalization_app.mojom.WallpaperProvider.GetDefaultImageThumbnail_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.personalization_app.personalization_app.mojom.mojom.WallpaperProvider_GetDefaultImageThumbnail_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.personalization_app.mojom.WallpaperProvider.GetDefaultImageThumbnail_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'data', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetLocalImageThumbnail
ash.personalization_app.personalization_app.mojom.mojom.WallpaperProvider_GetLocalImageThumbnail_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.personalization_app.mojom.WallpaperProvider.GetLocalImageThumbnail_Params',
      packedSize: 16,
      fields: [
        { name: 'file_path', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.FilePathSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

ash.personalization_app.personalization_app.mojom.mojom.WallpaperProvider_GetLocalImageThumbnail_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.personalization_app.mojom.WallpaperProvider.GetLocalImageThumbnail_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'data', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetWallpaperObserver
ash.personalization_app.personalization_app.mojom.mojom.WallpaperProvider_SetWallpaperObserver_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.personalization_app.mojom.WallpaperProvider.SetWallpaperObserver_Params',
      packedSize: 16,
      fields: [
        { name: 'observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SelectWallpaper
ash.personalization_app.personalization_app.mojom.mojom.WallpaperProvider_SelectWallpaper_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.personalization_app.mojom.WallpaperProvider.SelectWallpaper_Params',
      packedSize: 24,
      fields: [
        { name: 'unit_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
        { name: 'preview_mode', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

ash.personalization_app.personalization_app.mojom.mojom.WallpaperProvider_SelectWallpaper_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.personalization_app.mojom.WallpaperProvider.SelectWallpaper_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SelectDefaultImage
ash.personalization_app.personalization_app.mojom.mojom.WallpaperProvider_SelectDefaultImage_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.personalization_app.mojom.WallpaperProvider.SelectDefaultImage_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.personalization_app.personalization_app.mojom.mojom.WallpaperProvider_SelectDefaultImage_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.personalization_app.mojom.WallpaperProvider.SelectDefaultImage_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SelectLocalImage
ash.personalization_app.personalization_app.mojom.mojom.WallpaperProvider_SelectLocalImage_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.personalization_app.mojom.WallpaperProvider.SelectLocalImage_Params',
      packedSize: 24,
      fields: [
        { name: 'path', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.FilePathSpec, nullable: false, minVersion: 0 },
        { name: 'layout', packedOffset: 8, packedBitOffset: 0, type: ash.personalization_app.mojom.WallpaperLayoutSpec, nullable: false, minVersion: 0 },
        { name: 'preview_mode', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

ash.personalization_app.personalization_app.mojom.mojom.WallpaperProvider_SelectLocalImage_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.personalization_app.mojom.WallpaperProvider.SelectLocalImage_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SelectGooglePhotosPhoto
ash.personalization_app.personalization_app.mojom.mojom.WallpaperProvider_SelectGooglePhotosPhoto_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.personalization_app.mojom.WallpaperProvider.SelectGooglePhotosPhoto_Params',
      packedSize: 24,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'layout', packedOffset: 8, packedBitOffset: 0, type: ash.personalization_app.mojom.WallpaperLayoutSpec, nullable: false, minVersion: 0 },
        { name: 'preview_mode', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

ash.personalization_app.personalization_app.mojom.mojom.WallpaperProvider_SelectGooglePhotosPhoto_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.personalization_app.mojom.WallpaperProvider.SelectGooglePhotosPhoto_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SelectGooglePhotosAlbum
ash.personalization_app.personalization_app.mojom.mojom.WallpaperProvider_SelectGooglePhotosAlbum_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.personalization_app.mojom.WallpaperProvider.SelectGooglePhotosAlbum_Params',
      packedSize: 16,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

ash.personalization_app.personalization_app.mojom.mojom.WallpaperProvider_SelectGooglePhotosAlbum_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.personalization_app.mojom.WallpaperProvider.SelectGooglePhotosAlbum_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetGooglePhotosDailyRefreshAlbumId
ash.personalization_app.personalization_app.mojom.mojom.WallpaperProvider_GetGooglePhotosDailyRefreshAlbumId_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.personalization_app.mojom.WallpaperProvider.GetGooglePhotosDailyRefreshAlbumId_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.personalization_app.personalization_app.mojom.mojom.WallpaperProvider_GetGooglePhotosDailyRefreshAlbumId_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.personalization_app.mojom.WallpaperProvider.GetGooglePhotosDailyRefreshAlbumId_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'album_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetCurrentWallpaperLayout
ash.personalization_app.personalization_app.mojom.mojom.WallpaperProvider_SetCurrentWallpaperLayout_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.personalization_app.mojom.WallpaperProvider.SetCurrentWallpaperLayout_Params',
      packedSize: 16,
      fields: [
        { name: 'layout', packedOffset: 0, packedBitOffset: 0, type: ash.personalization_app.mojom.WallpaperLayoutSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetDailyRefreshCollectionId
ash.personalization_app.personalization_app.mojom.mojom.WallpaperProvider_SetDailyRefreshCollectionId_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.personalization_app.mojom.WallpaperProvider.SetDailyRefreshCollectionId_Params',
      packedSize: 16,
      fields: [
        { name: 'collection_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

ash.personalization_app.personalization_app.mojom.mojom.WallpaperProvider_SetDailyRefreshCollectionId_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.personalization_app.mojom.WallpaperProvider.SetDailyRefreshCollectionId_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetDailyRefreshCollectionId
ash.personalization_app.personalization_app.mojom.mojom.WallpaperProvider_GetDailyRefreshCollectionId_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.personalization_app.mojom.WallpaperProvider.GetDailyRefreshCollectionId_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.personalization_app.personalization_app.mojom.mojom.WallpaperProvider_GetDailyRefreshCollectionId_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.personalization_app.mojom.WallpaperProvider.GetDailyRefreshCollectionId_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'collection_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for UpdateDailyRefreshWallpaper
ash.personalization_app.personalization_app.mojom.mojom.WallpaperProvider_UpdateDailyRefreshWallpaper_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.personalization_app.mojom.WallpaperProvider.UpdateDailyRefreshWallpaper_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.personalization_app.personalization_app.mojom.mojom.WallpaperProvider_UpdateDailyRefreshWallpaper_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.personalization_app.mojom.WallpaperProvider.UpdateDailyRefreshWallpaper_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for IsInTabletMode
ash.personalization_app.personalization_app.mojom.mojom.WallpaperProvider_IsInTabletMode_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.personalization_app.mojom.WallpaperProvider.IsInTabletMode_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.personalization_app.personalization_app.mojom.mojom.WallpaperProvider_IsInTabletMode_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.personalization_app.mojom.WallpaperProvider.IsInTabletMode_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'tablet_mode', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ConfirmPreviewWallpaper
ash.personalization_app.personalization_app.mojom.mojom.WallpaperProvider_ConfirmPreviewWallpaper_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.personalization_app.mojom.WallpaperProvider.ConfirmPreviewWallpaper_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for CancelPreviewWallpaper
ash.personalization_app.personalization_app.mojom.mojom.WallpaperProvider_CancelPreviewWallpaper_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.personalization_app.mojom.WallpaperProvider.CancelPreviewWallpaper_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for ShouldShowTimeOfDayWallpaperDialog
ash.personalization_app.personalization_app.mojom.mojom.WallpaperProvider_ShouldShowTimeOfDayWallpaperDialog_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.personalization_app.mojom.WallpaperProvider.ShouldShowTimeOfDayWallpaperDialog_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.personalization_app.personalization_app.mojom.mojom.WallpaperProvider_ShouldShowTimeOfDayWallpaperDialog_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.personalization_app.mojom.WallpaperProvider.ShouldShowTimeOfDayWallpaperDialog_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'should_show_dialog', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
ash.personalization_app.personalization_app.mojom.mojom.WallpaperProviderPtr = ash.personalization_app.personalization_app.mojom.mojom.WallpaperProviderRemote;
ash.personalization_app.personalization_app.mojom.mojom.WallpaperProviderRequest = ash.personalization_app.personalization_app.mojom.mojom.WallpaperProviderPendingReceiver;


// Interface: ThemeObserver
ash.personalization_app.personalization_app.mojom.mojom.ThemeObserver = {};

ash.personalization_app.personalization_app.mojom.mojom.ThemeObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.personalization_app.personalization_app.mojom.mojom.ThemeObserverRemote = class {
  static get $interfaceName() {
    return 'ash.personalization_app.mojom.ThemeObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.personalization_app.personalization_app.mojom.mojom.ThemeObserverPendingReceiver,
      handle);
    this.$ = new ash.personalization_app.personalization_app.mojom.mojom.ThemeObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.personalization_app.personalization_app.mojom.mojom.ThemeObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onColorModeChanged(dark_mode_enabled) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.personalization_app.personalization_app.mojom.mojom.ThemeObserver_OnColorModeChanged_ParamsSpec,
      null,
      [dark_mode_enabled]);
  }

  onColorModeAutoScheduleChanged(enabled) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.personalization_app.personalization_app.mojom.mojom.ThemeObserver_OnColorModeAutoScheduleChanged_ParamsSpec,
      null,
      [enabled]);
  }

  onColorSchemeChanged(color_scheme) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.personalization_app.personalization_app.mojom.mojom.ThemeObserver_OnColorSchemeChanged_ParamsSpec,
      null,
      [color_scheme]);
  }

  onSampleColorSchemesChanged(sample_color_schemes) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      ash.personalization_app.personalization_app.mojom.mojom.ThemeObserver_OnSampleColorSchemesChanged_ParamsSpec,
      null,
      [sample_color_schemes]);
  }

  onStaticColorChanged(color) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      ash.personalization_app.personalization_app.mojom.mojom.ThemeObserver_OnStaticColorChanged_ParamsSpec,
      null,
      [color]);
  }

  onGeolocationPermissionForSystemServicesChanged(enabled, is_user_modifiable) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      ash.personalization_app.personalization_app.mojom.mojom.ThemeObserver_OnGeolocationPermissionForSystemServicesChanged_ParamsSpec,
      null,
      [enabled, is_user_modifiable]);
  }

  onDaylightTimeChanged(sunrise_time, sunset_time) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      ash.personalization_app.personalization_app.mojom.mojom.ThemeObserver_OnDaylightTimeChanged_ParamsSpec,
      null,
      [sunrise_time, sunset_time]);
  }

};

ash.personalization_app.personalization_app.mojom.mojom.ThemeObserver.getRemote = function() {
  let remote = new ash.personalization_app.personalization_app.mojom.mojom.ThemeObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.personalization_app.mojom.ThemeObserver',
    'context');
  return remote.$;
};

// ParamsSpec for OnColorModeChanged
ash.personalization_app.personalization_app.mojom.mojom.ThemeObserver_OnColorModeChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.personalization_app.mojom.ThemeObserver.OnColorModeChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'dark_mode_enabled', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnColorModeAutoScheduleChanged
ash.personalization_app.personalization_app.mojom.mojom.ThemeObserver_OnColorModeAutoScheduleChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.personalization_app.mojom.ThemeObserver.OnColorModeAutoScheduleChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'enabled', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnColorSchemeChanged
ash.personalization_app.personalization_app.mojom.mojom.ThemeObserver_OnColorSchemeChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.personalization_app.mojom.ThemeObserver.OnColorSchemeChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'color_scheme', packedOffset: 0, packedBitOffset: 0, type: ash.style.mojom.ColorSchemeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnSampleColorSchemesChanged
ash.personalization_app.personalization_app.mojom.mojom.ThemeObserver_OnSampleColorSchemesChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.personalization_app.mojom.ThemeObserver.OnSampleColorSchemesChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'sample_color_schemes', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(ash.personalization_app.mojom.SampleColorSchemeSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnStaticColorChanged
ash.personalization_app.personalization_app.mojom.mojom.ThemeObserver_OnStaticColorChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.personalization_app.mojom.ThemeObserver.OnStaticColorChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'color', packedOffset: 0, packedBitOffset: 0, type: skia.mojom.SkColorSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnGeolocationPermissionForSystemServicesChanged
ash.personalization_app.personalization_app.mojom.mojom.ThemeObserver_OnGeolocationPermissionForSystemServicesChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.personalization_app.mojom.ThemeObserver.OnGeolocationPermissionForSystemServicesChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'enabled', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'is_user_modifiable', packedOffset: 0, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnDaylightTimeChanged
ash.personalization_app.personalization_app.mojom.mojom.ThemeObserver_OnDaylightTimeChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.personalization_app.mojom.ThemeObserver.OnDaylightTimeChanged_Params',
      packedSize: 24,
      fields: [
        { name: 'sunrise_time', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false, minVersion: 0 },
        { name: 'sunset_time', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
ash.personalization_app.personalization_app.mojom.mojom.ThemeObserverPtr = ash.personalization_app.personalization_app.mojom.mojom.ThemeObserverRemote;
ash.personalization_app.personalization_app.mojom.mojom.ThemeObserverRequest = ash.personalization_app.personalization_app.mojom.mojom.ThemeObserverPendingReceiver;


// Interface: ThemeProvider
ash.personalization_app.personalization_app.mojom.mojom.ThemeProvider = {};

ash.personalization_app.personalization_app.mojom.mojom.ThemeProviderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.personalization_app.personalization_app.mojom.mojom.ThemeProviderRemote = class {
  static get $interfaceName() {
    return 'ash.personalization_app.mojom.ThemeProvider';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.personalization_app.personalization_app.mojom.mojom.ThemeProviderPendingReceiver,
      handle);
    this.$ = new ash.personalization_app.personalization_app.mojom.mojom.ThemeProviderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.personalization_app.personalization_app.mojom.mojom.ThemeProviderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  setThemeObserver(observer) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.personalization_app.personalization_app.mojom.mojom.ThemeProvider_SetThemeObserver_ParamsSpec,
      null,
      [observer]);
  }

  setColorModePref(dark_mode_enabled) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.personalization_app.personalization_app.mojom.mojom.ThemeProvider_SetColorModePref_ParamsSpec,
      null,
      [dark_mode_enabled]);
  }

  setColorModeAutoScheduleEnabled(enabled) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.personalization_app.personalization_app.mojom.mojom.ThemeProvider_SetColorModeAutoScheduleEnabled_ParamsSpec,
      null,
      [enabled]);
  }

  setColorScheme(colorScheme) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      ash.personalization_app.personalization_app.mojom.mojom.ThemeProvider_SetColorScheme_ParamsSpec,
      null,
      [colorScheme]);
  }

  setStaticColor(static_color) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      ash.personalization_app.personalization_app.mojom.mojom.ThemeProvider_SetStaticColor_ParamsSpec,
      null,
      [static_color]);
  }

  enableGeolocationForSystemServices() {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      ash.personalization_app.personalization_app.mojom.mojom.ThemeProvider_EnableGeolocationForSystemServices_ParamsSpec,
      null,
      []);
  }

  getColorScheme() {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      ash.personalization_app.personalization_app.mojom.mojom.ThemeProvider_GetColorScheme_ParamsSpec,
      ash.personalization_app.personalization_app.mojom.mojom.ThemeProvider_GetColorScheme_ResponseParamsSpec,
      []);
  }

  getStaticColor() {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      ash.personalization_app.personalization_app.mojom.mojom.ThemeProvider_GetStaticColor_ParamsSpec,
      ash.personalization_app.personalization_app.mojom.mojom.ThemeProvider_GetStaticColor_ResponseParamsSpec,
      []);
  }

  generateSampleColorSchemes() {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      ash.personalization_app.personalization_app.mojom.mojom.ThemeProvider_GenerateSampleColorSchemes_ParamsSpec,
      ash.personalization_app.personalization_app.mojom.mojom.ThemeProvider_GenerateSampleColorSchemes_ResponseParamsSpec,
      []);
  }

  isColorModeAutoScheduleEnabled() {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      ash.personalization_app.personalization_app.mojom.mojom.ThemeProvider_IsColorModeAutoScheduleEnabled_ParamsSpec,
      ash.personalization_app.personalization_app.mojom.mojom.ThemeProvider_IsColorModeAutoScheduleEnabled_ResponseParamsSpec,
      []);
  }

  isDarkModeEnabled() {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      ash.personalization_app.personalization_app.mojom.mojom.ThemeProvider_IsDarkModeEnabled_ParamsSpec,
      ash.personalization_app.personalization_app.mojom.mojom.ThemeProvider_IsDarkModeEnabled_ResponseParamsSpec,
      []);
  }

  isGeolocationEnabledForSystemServices() {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      ash.personalization_app.personalization_app.mojom.mojom.ThemeProvider_IsGeolocationEnabledForSystemServices_ParamsSpec,
      ash.personalization_app.personalization_app.mojom.mojom.ThemeProvider_IsGeolocationEnabledForSystemServices_ResponseParamsSpec,
      []);
  }

  isGeolocationUserModifiable() {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      ash.personalization_app.personalization_app.mojom.mojom.ThemeProvider_IsGeolocationUserModifiable_ParamsSpec,
      ash.personalization_app.personalization_app.mojom.mojom.ThemeProvider_IsGeolocationUserModifiable_ResponseParamsSpec,
      []);
  }

};

ash.personalization_app.personalization_app.mojom.mojom.ThemeProvider.getRemote = function() {
  let remote = new ash.personalization_app.personalization_app.mojom.mojom.ThemeProviderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.personalization_app.mojom.ThemeProvider',
    'context');
  return remote.$;
};

// ParamsSpec for SetThemeObserver
ash.personalization_app.personalization_app.mojom.mojom.ThemeProvider_SetThemeObserver_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.personalization_app.mojom.ThemeProvider.SetThemeObserver_Params',
      packedSize: 16,
      fields: [
        { name: 'observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetColorModePref
ash.personalization_app.personalization_app.mojom.mojom.ThemeProvider_SetColorModePref_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.personalization_app.mojom.ThemeProvider.SetColorModePref_Params',
      packedSize: 16,
      fields: [
        { name: 'dark_mode_enabled', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetColorModeAutoScheduleEnabled
ash.personalization_app.personalization_app.mojom.mojom.ThemeProvider_SetColorModeAutoScheduleEnabled_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.personalization_app.mojom.ThemeProvider.SetColorModeAutoScheduleEnabled_Params',
      packedSize: 16,
      fields: [
        { name: 'enabled', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetColorScheme
ash.personalization_app.personalization_app.mojom.mojom.ThemeProvider_SetColorScheme_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.personalization_app.mojom.ThemeProvider.SetColorScheme_Params',
      packedSize: 16,
      fields: [
        { name: 'colorScheme', packedOffset: 0, packedBitOffset: 0, type: ash.style.mojom.ColorSchemeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetStaticColor
ash.personalization_app.personalization_app.mojom.mojom.ThemeProvider_SetStaticColor_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.personalization_app.mojom.ThemeProvider.SetStaticColor_Params',
      packedSize: 16,
      fields: [
        { name: 'static_color', packedOffset: 0, packedBitOffset: 0, type: skia.mojom.SkColorSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for EnableGeolocationForSystemServices
ash.personalization_app.personalization_app.mojom.mojom.ThemeProvider_EnableGeolocationForSystemServices_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.personalization_app.mojom.ThemeProvider.EnableGeolocationForSystemServices_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for GetColorScheme
ash.personalization_app.personalization_app.mojom.mojom.ThemeProvider_GetColorScheme_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.personalization_app.mojom.ThemeProvider.GetColorScheme_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.personalization_app.personalization_app.mojom.mojom.ThemeProvider_GetColorScheme_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.personalization_app.mojom.ThemeProvider.GetColorScheme_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'color_scheme', packedOffset: 0, packedBitOffset: 0, type: ash.style.mojom.ColorSchemeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetStaticColor
ash.personalization_app.personalization_app.mojom.mojom.ThemeProvider_GetStaticColor_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.personalization_app.mojom.ThemeProvider.GetStaticColor_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.personalization_app.personalization_app.mojom.mojom.ThemeProvider_GetStaticColor_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.personalization_app.mojom.ThemeProvider.GetStaticColor_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'static_color', packedOffset: 0, packedBitOffset: 0, type: skia.mojom.SkColorSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GenerateSampleColorSchemes
ash.personalization_app.personalization_app.mojom.mojom.ThemeProvider_GenerateSampleColorSchemes_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.personalization_app.mojom.ThemeProvider.GenerateSampleColorSchemes_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.personalization_app.personalization_app.mojom.mojom.ThemeProvider_GenerateSampleColorSchemes_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.personalization_app.mojom.ThemeProvider.GenerateSampleColorSchemes_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'sample_color_schemes', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(ash.personalization_app.mojom.SampleColorSchemeSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for IsColorModeAutoScheduleEnabled
ash.personalization_app.personalization_app.mojom.mojom.ThemeProvider_IsColorModeAutoScheduleEnabled_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.personalization_app.mojom.ThemeProvider.IsColorModeAutoScheduleEnabled_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.personalization_app.personalization_app.mojom.mojom.ThemeProvider_IsColorModeAutoScheduleEnabled_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.personalization_app.mojom.ThemeProvider.IsColorModeAutoScheduleEnabled_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'enabled', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for IsDarkModeEnabled
ash.personalization_app.personalization_app.mojom.mojom.ThemeProvider_IsDarkModeEnabled_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.personalization_app.mojom.ThemeProvider.IsDarkModeEnabled_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.personalization_app.personalization_app.mojom.mojom.ThemeProvider_IsDarkModeEnabled_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.personalization_app.mojom.ThemeProvider.IsDarkModeEnabled_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'dark_mode_enabled', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for IsGeolocationEnabledForSystemServices
ash.personalization_app.personalization_app.mojom.mojom.ThemeProvider_IsGeolocationEnabledForSystemServices_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.personalization_app.mojom.ThemeProvider.IsGeolocationEnabledForSystemServices_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.personalization_app.personalization_app.mojom.mojom.ThemeProvider_IsGeolocationEnabledForSystemServices_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.personalization_app.mojom.ThemeProvider.IsGeolocationEnabledForSystemServices_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'geolocation_enabled', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for IsGeolocationUserModifiable
ash.personalization_app.personalization_app.mojom.mojom.ThemeProvider_IsGeolocationUserModifiable_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.personalization_app.mojom.ThemeProvider.IsGeolocationUserModifiable_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.personalization_app.personalization_app.mojom.mojom.ThemeProvider_IsGeolocationUserModifiable_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.personalization_app.mojom.ThemeProvider.IsGeolocationUserModifiable_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'geolocation_is_user_modifiable', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
ash.personalization_app.personalization_app.mojom.mojom.ThemeProviderPtr = ash.personalization_app.personalization_app.mojom.mojom.ThemeProviderRemote;
ash.personalization_app.personalization_app.mojom.mojom.ThemeProviderRequest = ash.personalization_app.personalization_app.mojom.mojom.ThemeProviderPendingReceiver;


// Interface: UserImageObserver
ash.personalization_app.personalization_app.mojom.mojom.UserImageObserver = {};

ash.personalization_app.personalization_app.mojom.mojom.UserImageObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.personalization_app.personalization_app.mojom.mojom.UserImageObserverRemote = class {
  static get $interfaceName() {
    return 'ash.personalization_app.mojom.UserImageObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.personalization_app.personalization_app.mojom.mojom.UserImageObserverPendingReceiver,
      handle);
    this.$ = new ash.personalization_app.personalization_app.mojom.mojom.UserImageObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.personalization_app.personalization_app.mojom.mojom.UserImageObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onUserImageChanged(user_image) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.personalization_app.personalization_app.mojom.mojom.UserImageObserver_OnUserImageChanged_ParamsSpec,
      null,
      [user_image]);
  }

  onUserProfileImageUpdated(profile_image) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.personalization_app.personalization_app.mojom.mojom.UserImageObserver_OnUserProfileImageUpdated_ParamsSpec,
      null,
      [profile_image]);
  }

  onCameraPresenceCheckDone(is_camera_present) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.personalization_app.personalization_app.mojom.mojom.UserImageObserver_OnCameraPresenceCheckDone_ParamsSpec,
      null,
      [is_camera_present]);
  }

  onIsEnterpriseManagedChanged(is_enterprise_managed) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      ash.personalization_app.personalization_app.mojom.mojom.UserImageObserver_OnIsEnterpriseManagedChanged_ParamsSpec,
      null,
      [is_enterprise_managed]);
  }

};

ash.personalization_app.personalization_app.mojom.mojom.UserImageObserver.getRemote = function() {
  let remote = new ash.personalization_app.personalization_app.mojom.mojom.UserImageObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.personalization_app.mojom.UserImageObserver',
    'context');
  return remote.$;
};

// ParamsSpec for OnUserImageChanged
ash.personalization_app.personalization_app.mojom.mojom.UserImageObserver_OnUserImageChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.personalization_app.mojom.UserImageObserver.OnUserImageChanged_Params',
      packedSize: 24,
      fields: [
        { name: 'user_image', packedOffset: 0, packedBitOffset: 0, type: ash.personalization_app.mojom.UserImageSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for OnUserProfileImageUpdated
ash.personalization_app.personalization_app.mojom.mojom.UserImageObserver_OnUserProfileImageUpdated_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.personalization_app.mojom.UserImageObserver.OnUserProfileImageUpdated_Params',
      packedSize: 16,
      fields: [
        { name: 'profile_image', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnCameraPresenceCheckDone
ash.personalization_app.personalization_app.mojom.mojom.UserImageObserver_OnCameraPresenceCheckDone_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.personalization_app.mojom.UserImageObserver.OnCameraPresenceCheckDone_Params',
      packedSize: 16,
      fields: [
        { name: 'is_camera_present', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnIsEnterpriseManagedChanged
ash.personalization_app.personalization_app.mojom.mojom.UserImageObserver_OnIsEnterpriseManagedChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.personalization_app.mojom.UserImageObserver.OnIsEnterpriseManagedChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'is_enterprise_managed', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
ash.personalization_app.personalization_app.mojom.mojom.UserImageObserverPtr = ash.personalization_app.personalization_app.mojom.mojom.UserImageObserverRemote;
ash.personalization_app.personalization_app.mojom.mojom.UserImageObserverRequest = ash.personalization_app.personalization_app.mojom.mojom.UserImageObserverPendingReceiver;


// Interface: UserProvider
ash.personalization_app.personalization_app.mojom.mojom.UserProvider = {};

ash.personalization_app.personalization_app.mojom.mojom.UserProviderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.personalization_app.personalization_app.mojom.mojom.UserProviderRemote = class {
  static get $interfaceName() {
    return 'ash.personalization_app.mojom.UserProvider';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.personalization_app.personalization_app.mojom.mojom.UserProviderPendingReceiver,
      handle);
    this.$ = new ash.personalization_app.personalization_app.mojom.mojom.UserProviderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.personalization_app.personalization_app.mojom.mojom.UserProviderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  setUserImageObserver(observer) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.personalization_app.personalization_app.mojom.mojom.UserProvider_SetUserImageObserver_ParamsSpec,
      null,
      [observer]);
  }

  getUserInfo() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.personalization_app.personalization_app.mojom.mojom.UserProvider_GetUserInfo_ParamsSpec,
      ash.personalization_app.personalization_app.mojom.mojom.UserProvider_GetUserInfo_ResponseParamsSpec,
      []);
  }

  getDefaultUserImages() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.personalization_app.personalization_app.mojom.mojom.UserProvider_GetDefaultUserImages_ParamsSpec,
      ash.personalization_app.personalization_app.mojom.mojom.UserProvider_GetDefaultUserImages_ResponseParamsSpec,
      []);
  }

  selectDefaultImage(index) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      ash.personalization_app.personalization_app.mojom.mojom.UserProvider_SelectDefaultImage_ParamsSpec,
      null,
      [index]);
  }

  selectProfileImage() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      ash.personalization_app.personalization_app.mojom.mojom.UserProvider_SelectProfileImage_ParamsSpec,
      null,
      []);
  }

  selectCameraImage(data) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      ash.personalization_app.personalization_app.mojom.mojom.UserProvider_SelectCameraImage_ParamsSpec,
      null,
      [data]);
  }

  selectImageFromDisk() {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      ash.personalization_app.personalization_app.mojom.mojom.UserProvider_SelectImageFromDisk_ParamsSpec,
      null,
      []);
  }

  selectLastExternalUserImage() {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      ash.personalization_app.personalization_app.mojom.mojom.UserProvider_SelectLastExternalUserImage_ParamsSpec,
      null,
      []);
  }

};

ash.personalization_app.personalization_app.mojom.mojom.UserProvider.getRemote = function() {
  let remote = new ash.personalization_app.personalization_app.mojom.mojom.UserProviderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.personalization_app.mojom.UserProvider',
    'context');
  return remote.$;
};

// ParamsSpec for SetUserImageObserver
ash.personalization_app.personalization_app.mojom.mojom.UserProvider_SetUserImageObserver_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.personalization_app.mojom.UserProvider.SetUserImageObserver_Params',
      packedSize: 16,
      fields: [
        { name: 'observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetUserInfo
ash.personalization_app.personalization_app.mojom.mojom.UserProvider_GetUserInfo_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.personalization_app.mojom.UserProvider.GetUserInfo_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.personalization_app.personalization_app.mojom.mojom.UserProvider_GetUserInfo_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.personalization_app.mojom.UserProvider.GetUserInfo_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'user_info', packedOffset: 0, packedBitOffset: 0, type: ash.personalization_app.mojom.UserInfoSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetDefaultUserImages
ash.personalization_app.personalization_app.mojom.mojom.UserProvider_GetDefaultUserImages_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.personalization_app.mojom.UserProvider.GetDefaultUserImages_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.personalization_app.personalization_app.mojom.mojom.UserProvider_GetDefaultUserImages_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.personalization_app.mojom.UserProvider.GetDefaultUserImages_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'default_user_images', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(ash.personalization_app.mojom.DefaultUserImageSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SelectDefaultImage
ash.personalization_app.personalization_app.mojom.mojom.UserProvider_SelectDefaultImage_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.personalization_app.mojom.UserProvider.SelectDefaultImage_Params',
      packedSize: 16,
      fields: [
        { name: 'index', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SelectProfileImage
ash.personalization_app.personalization_app.mojom.mojom.UserProvider_SelectProfileImage_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.personalization_app.mojom.UserProvider.SelectProfileImage_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for SelectCameraImage
ash.personalization_app.personalization_app.mojom.mojom.UserProvider_SelectCameraImage_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.personalization_app.mojom.UserProvider.SelectCameraImage_Params',
      packedSize: 24,
      fields: [
        { name: 'data', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.BigBufferSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for SelectImageFromDisk
ash.personalization_app.personalization_app.mojom.mojom.UserProvider_SelectImageFromDisk_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.personalization_app.mojom.UserProvider.SelectImageFromDisk_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for SelectLastExternalUserImage
ash.personalization_app.personalization_app.mojom.mojom.UserProvider_SelectLastExternalUserImage_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.personalization_app.mojom.UserProvider.SelectLastExternalUserImage_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Legacy compatibility
ash.personalization_app.personalization_app.mojom.mojom.UserProviderPtr = ash.personalization_app.personalization_app.mojom.mojom.UserProviderRemote;
ash.personalization_app.personalization_app.mojom.mojom.UserProviderRequest = ash.personalization_app.personalization_app.mojom.mojom.UserProviderPendingReceiver;


// Interface: AmbientObserver
ash.personalization_app.personalization_app.mojom.mojom.AmbientObserver = {};

ash.personalization_app.personalization_app.mojom.mojom.AmbientObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.personalization_app.personalization_app.mojom.mojom.AmbientObserverRemote = class {
  static get $interfaceName() {
    return 'ash.personalization_app.mojom.AmbientObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.personalization_app.personalization_app.mojom.mojom.AmbientObserverPendingReceiver,
      handle);
    this.$ = new ash.personalization_app.personalization_app.mojom.mojom.AmbientObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.personalization_app.personalization_app.mojom.mojom.AmbientObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onAmbientModeEnabledChanged(ambient_mode_enabled) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.personalization_app.personalization_app.mojom.mojom.AmbientObserver_OnAmbientModeEnabledChanged_ParamsSpec,
      null,
      [ambient_mode_enabled]);
  }

  onAmbientThemeChanged(ambient_theme) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.personalization_app.personalization_app.mojom.mojom.AmbientObserver_OnAmbientThemeChanged_ParamsSpec,
      null,
      [ambient_theme]);
  }

  onTopicSourceChanged(topic_source) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.personalization_app.personalization_app.mojom.mojom.AmbientObserver_OnTopicSourceChanged_ParamsSpec,
      null,
      [topic_source]);
  }

  onScreenSaverDurationChanged(minutes) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      ash.personalization_app.personalization_app.mojom.mojom.AmbientObserver_OnScreenSaverDurationChanged_ParamsSpec,
      null,
      [minutes]);
  }

  onTemperatureUnitChanged(temperature_unit) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      ash.personalization_app.personalization_app.mojom.mojom.AmbientObserver_OnTemperatureUnitChanged_ParamsSpec,
      null,
      [temperature_unit]);
  }

  onAlbumsChanged(albums) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      ash.personalization_app.personalization_app.mojom.mojom.AmbientObserver_OnAlbumsChanged_ParamsSpec,
      null,
      [albums]);
  }

  onPreviewsFetched(previews) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      ash.personalization_app.personalization_app.mojom.mojom.AmbientObserver_OnPreviewsFetched_ParamsSpec,
      null,
      [previews]);
  }

  onAmbientUiVisibilityChanged(visibility) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      ash.personalization_app.personalization_app.mojom.mojom.AmbientObserver_OnAmbientUiVisibilityChanged_ParamsSpec,
      null,
      [visibility]);
  }

  onGeolocationPermissionForSystemServicesChanged(enabled, is_user_modifiable) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      ash.personalization_app.personalization_app.mojom.mojom.AmbientObserver_OnGeolocationPermissionForSystemServicesChanged_ParamsSpec,
      null,
      [enabled, is_user_modifiable]);
  }

  onAmbientThemePreviewImagesChanged(previews) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      ash.personalization_app.personalization_app.mojom.mojom.AmbientObserver_OnAmbientThemePreviewImagesChanged_ParamsSpec,
      null,
      [previews]);
  }

};

ash.personalization_app.personalization_app.mojom.mojom.AmbientObserver.getRemote = function() {
  let remote = new ash.personalization_app.personalization_app.mojom.mojom.AmbientObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.personalization_app.mojom.AmbientObserver',
    'context');
  return remote.$;
};

// ParamsSpec for OnAmbientModeEnabledChanged
ash.personalization_app.personalization_app.mojom.mojom.AmbientObserver_OnAmbientModeEnabledChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.personalization_app.mojom.AmbientObserver.OnAmbientModeEnabledChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'ambient_mode_enabled', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnAmbientThemeChanged
ash.personalization_app.personalization_app.mojom.mojom.AmbientObserver_OnAmbientThemeChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.personalization_app.mojom.AmbientObserver.OnAmbientThemeChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'ambient_theme', packedOffset: 0, packedBitOffset: 0, type: ash.personalization_app.mojom.AmbientThemeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnTopicSourceChanged
ash.personalization_app.personalization_app.mojom.mojom.AmbientObserver_OnTopicSourceChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.personalization_app.mojom.AmbientObserver.OnTopicSourceChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'topic_source', packedOffset: 0, packedBitOffset: 0, type: ash.personalization_app.mojom.TopicSourceSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnScreenSaverDurationChanged
ash.personalization_app.personalization_app.mojom.mojom.AmbientObserver_OnScreenSaverDurationChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.personalization_app.mojom.AmbientObserver.OnScreenSaverDurationChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'minutes', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnTemperatureUnitChanged
ash.personalization_app.personalization_app.mojom.mojom.AmbientObserver_OnTemperatureUnitChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.personalization_app.mojom.AmbientObserver.OnTemperatureUnitChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'temperature_unit', packedOffset: 0, packedBitOffset: 0, type: ash.personalization_app.mojom.TemperatureUnitSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnAlbumsChanged
ash.personalization_app.personalization_app.mojom.mojom.AmbientObserver_OnAlbumsChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.personalization_app.mojom.AmbientObserver.OnAlbumsChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'albums', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(ash.personalization_app.mojom.AmbientModeAlbumSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnPreviewsFetched
ash.personalization_app.personalization_app.mojom.mojom.AmbientObserver_OnPreviewsFetched_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.personalization_app.mojom.AmbientObserver.OnPreviewsFetched_Params',
      packedSize: 16,
      fields: [
        { name: 'previews', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(url.mojom.UrlSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnAmbientUiVisibilityChanged
ash.personalization_app.personalization_app.mojom.mojom.AmbientObserver_OnAmbientUiVisibilityChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.personalization_app.mojom.AmbientObserver.OnAmbientUiVisibilityChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'visibility', packedOffset: 0, packedBitOffset: 0, type: ash.personalization_app.mojom.AmbientUiVisibilitySpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnGeolocationPermissionForSystemServicesChanged
ash.personalization_app.personalization_app.mojom.mojom.AmbientObserver_OnGeolocationPermissionForSystemServicesChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.personalization_app.mojom.AmbientObserver.OnGeolocationPermissionForSystemServicesChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'enabled', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'is_user_modifiable', packedOffset: 0, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnAmbientThemePreviewImagesChanged
ash.personalization_app.personalization_app.mojom.mojom.AmbientObserver_OnAmbientThemePreviewImagesChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.personalization_app.mojom.AmbientObserver.OnAmbientThemePreviewImagesChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'previews', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Map(ash.personalization_app.mojom.AmbientThemeSpec, url.mojom.UrlSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
ash.personalization_app.personalization_app.mojom.mojom.AmbientObserverPtr = ash.personalization_app.personalization_app.mojom.mojom.AmbientObserverRemote;
ash.personalization_app.personalization_app.mojom.mojom.AmbientObserverRequest = ash.personalization_app.personalization_app.mojom.mojom.AmbientObserverPendingReceiver;


// Interface: AmbientProvider
ash.personalization_app.personalization_app.mojom.mojom.AmbientProvider = {};

ash.personalization_app.personalization_app.mojom.mojom.AmbientProviderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.personalization_app.personalization_app.mojom.mojom.AmbientProviderRemote = class {
  static get $interfaceName() {
    return 'ash.personalization_app.mojom.AmbientProvider';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.personalization_app.personalization_app.mojom.mojom.AmbientProviderPendingReceiver,
      handle);
    this.$ = new ash.personalization_app.personalization_app.mojom.mojom.AmbientProviderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.personalization_app.personalization_app.mojom.mojom.AmbientProviderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  isAmbientModeEnabled() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.personalization_app.personalization_app.mojom.mojom.AmbientProvider_IsAmbientModeEnabled_ParamsSpec,
      ash.personalization_app.personalization_app.mojom.mojom.AmbientProvider_IsAmbientModeEnabled_ResponseParamsSpec,
      []);
  }

  setAmbientModeEnabled(enabled) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.personalization_app.personalization_app.mojom.mojom.AmbientProvider_SetAmbientModeEnabled_ParamsSpec,
      null,
      [enabled]);
  }

  setAmbientObserver(observer) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.personalization_app.personalization_app.mojom.mojom.AmbientProvider_SetAmbientObserver_ParamsSpec,
      null,
      [observer]);
  }

  setAmbientTheme(ambient_theme) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      ash.personalization_app.personalization_app.mojom.mojom.AmbientProvider_SetAmbientTheme_ParamsSpec,
      null,
      [ambient_theme]);
  }

  setScreenSaverDuration(minutes) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      ash.personalization_app.personalization_app.mojom.mojom.AmbientProvider_SetScreenSaverDuration_ParamsSpec,
      null,
      [minutes]);
  }

  setTopicSource(topic_source) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      ash.personalization_app.personalization_app.mojom.mojom.AmbientProvider_SetTopicSource_ParamsSpec,
      null,
      [topic_source]);
  }

  setTemperatureUnit(temperature_unit) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      ash.personalization_app.personalization_app.mojom.mojom.AmbientProvider_SetTemperatureUnit_ParamsSpec,
      null,
      [temperature_unit]);
  }

  setAlbumSelected(id, topic_source, selected) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      ash.personalization_app.personalization_app.mojom.mojom.AmbientProvider_SetAlbumSelected_ParamsSpec,
      null,
      [id, topic_source, selected]);
  }

  setPageViewed() {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      ash.personalization_app.personalization_app.mojom.mojom.AmbientProvider_SetPageViewed_ParamsSpec,
      null,
      []);
  }

  fetchSettingsAndAlbums() {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      ash.personalization_app.personalization_app.mojom.mojom.AmbientProvider_FetchSettingsAndAlbums_ParamsSpec,
      null,
      []);
  }

  startScreenSaverPreview() {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      ash.personalization_app.personalization_app.mojom.mojom.AmbientProvider_StartScreenSaverPreview_ParamsSpec,
      null,
      []);
  }

  shouldShowTimeOfDayBanner() {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      ash.personalization_app.personalization_app.mojom.mojom.AmbientProvider_ShouldShowTimeOfDayBanner_ParamsSpec,
      ash.personalization_app.personalization_app.mojom.mojom.AmbientProvider_ShouldShowTimeOfDayBanner_ResponseParamsSpec,
      []);
  }

  handleTimeOfDayBannerDismissed() {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      ash.personalization_app.personalization_app.mojom.mojom.AmbientProvider_HandleTimeOfDayBannerDismissed_ParamsSpec,
      null,
      []);
  }

  isGeolocationEnabledForSystemServices() {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
      ash.personalization_app.personalization_app.mojom.mojom.AmbientProvider_IsGeolocationEnabledForSystemServices_ParamsSpec,
      ash.personalization_app.personalization_app.mojom.mojom.AmbientProvider_IsGeolocationEnabledForSystemServices_ResponseParamsSpec,
      []);
  }

  isGeolocationUserModifiable() {
    // Ordinal: 14
    return this.proxy.sendMessage(
      14,  // ordinal
      ash.personalization_app.personalization_app.mojom.mojom.AmbientProvider_IsGeolocationUserModifiable_ParamsSpec,
      ash.personalization_app.personalization_app.mojom.mojom.AmbientProvider_IsGeolocationUserModifiable_ResponseParamsSpec,
      []);
  }

  enableGeolocationForSystemServices() {
    // Ordinal: 15
    return this.proxy.sendMessage(
      15,  // ordinal
      ash.personalization_app.personalization_app.mojom.mojom.AmbientProvider_EnableGeolocationForSystemServices_ParamsSpec,
      null,
      []);
  }

};

ash.personalization_app.personalization_app.mojom.mojom.AmbientProvider.getRemote = function() {
  let remote = new ash.personalization_app.personalization_app.mojom.mojom.AmbientProviderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.personalization_app.mojom.AmbientProvider',
    'context');
  return remote.$;
};

// ParamsSpec for IsAmbientModeEnabled
ash.personalization_app.personalization_app.mojom.mojom.AmbientProvider_IsAmbientModeEnabled_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.personalization_app.mojom.AmbientProvider.IsAmbientModeEnabled_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.personalization_app.personalization_app.mojom.mojom.AmbientProvider_IsAmbientModeEnabled_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.personalization_app.mojom.AmbientProvider.IsAmbientModeEnabled_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'enabled', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetAmbientModeEnabled
ash.personalization_app.personalization_app.mojom.mojom.AmbientProvider_SetAmbientModeEnabled_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.personalization_app.mojom.AmbientProvider.SetAmbientModeEnabled_Params',
      packedSize: 16,
      fields: [
        { name: 'enabled', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetAmbientObserver
ash.personalization_app.personalization_app.mojom.mojom.AmbientProvider_SetAmbientObserver_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.personalization_app.mojom.AmbientProvider.SetAmbientObserver_Params',
      packedSize: 16,
      fields: [
        { name: 'observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetAmbientTheme
ash.personalization_app.personalization_app.mojom.mojom.AmbientProvider_SetAmbientTheme_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.personalization_app.mojom.AmbientProvider.SetAmbientTheme_Params',
      packedSize: 16,
      fields: [
        { name: 'ambient_theme', packedOffset: 0, packedBitOffset: 0, type: ash.personalization_app.mojom.AmbientThemeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetScreenSaverDuration
ash.personalization_app.personalization_app.mojom.mojom.AmbientProvider_SetScreenSaverDuration_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.personalization_app.mojom.AmbientProvider.SetScreenSaverDuration_Params',
      packedSize: 16,
      fields: [
        { name: 'minutes', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetTopicSource
ash.personalization_app.personalization_app.mojom.mojom.AmbientProvider_SetTopicSource_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.personalization_app.mojom.AmbientProvider.SetTopicSource_Params',
      packedSize: 16,
      fields: [
        { name: 'topic_source', packedOffset: 0, packedBitOffset: 0, type: ash.personalization_app.mojom.TopicSourceSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetTemperatureUnit
ash.personalization_app.personalization_app.mojom.mojom.AmbientProvider_SetTemperatureUnit_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.personalization_app.mojom.AmbientProvider.SetTemperatureUnit_Params',
      packedSize: 16,
      fields: [
        { name: 'temperature_unit', packedOffset: 0, packedBitOffset: 0, type: ash.personalization_app.mojom.TemperatureUnitSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetAlbumSelected
ash.personalization_app.personalization_app.mojom.mojom.AmbientProvider_SetAlbumSelected_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.personalization_app.mojom.AmbientProvider.SetAlbumSelected_Params',
      packedSize: 24,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'topic_source', packedOffset: 8, packedBitOffset: 0, type: ash.personalization_app.mojom.TopicSourceSpec, nullable: false, minVersion: 0 },
        { name: 'selected', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for SetPageViewed
ash.personalization_app.personalization_app.mojom.mojom.AmbientProvider_SetPageViewed_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.personalization_app.mojom.AmbientProvider.SetPageViewed_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for FetchSettingsAndAlbums
ash.personalization_app.personalization_app.mojom.mojom.AmbientProvider_FetchSettingsAndAlbums_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.personalization_app.mojom.AmbientProvider.FetchSettingsAndAlbums_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for StartScreenSaverPreview
ash.personalization_app.personalization_app.mojom.mojom.AmbientProvider_StartScreenSaverPreview_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.personalization_app.mojom.AmbientProvider.StartScreenSaverPreview_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for ShouldShowTimeOfDayBanner
ash.personalization_app.personalization_app.mojom.mojom.AmbientProvider_ShouldShowTimeOfDayBanner_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.personalization_app.mojom.AmbientProvider.ShouldShowTimeOfDayBanner_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.personalization_app.personalization_app.mojom.mojom.AmbientProvider_ShouldShowTimeOfDayBanner_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.personalization_app.mojom.AmbientProvider.ShouldShowTimeOfDayBanner_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'should_show_banner', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for HandleTimeOfDayBannerDismissed
ash.personalization_app.personalization_app.mojom.mojom.AmbientProvider_HandleTimeOfDayBannerDismissed_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.personalization_app.mojom.AmbientProvider.HandleTimeOfDayBannerDismissed_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for IsGeolocationEnabledForSystemServices
ash.personalization_app.personalization_app.mojom.mojom.AmbientProvider_IsGeolocationEnabledForSystemServices_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.personalization_app.mojom.AmbientProvider.IsGeolocationEnabledForSystemServices_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.personalization_app.personalization_app.mojom.mojom.AmbientProvider_IsGeolocationEnabledForSystemServices_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.personalization_app.mojom.AmbientProvider.IsGeolocationEnabledForSystemServices_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'geolocation_enabled', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for IsGeolocationUserModifiable
ash.personalization_app.personalization_app.mojom.mojom.AmbientProvider_IsGeolocationUserModifiable_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.personalization_app.mojom.AmbientProvider.IsGeolocationUserModifiable_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.personalization_app.personalization_app.mojom.mojom.AmbientProvider_IsGeolocationUserModifiable_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.personalization_app.mojom.AmbientProvider.IsGeolocationUserModifiable_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'geolocation_is_user_modifiable', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for EnableGeolocationForSystemServices
ash.personalization_app.personalization_app.mojom.mojom.AmbientProvider_EnableGeolocationForSystemServices_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.personalization_app.mojom.AmbientProvider.EnableGeolocationForSystemServices_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Legacy compatibility
ash.personalization_app.personalization_app.mojom.mojom.AmbientProviderPtr = ash.personalization_app.personalization_app.mojom.mojom.AmbientProviderRemote;
ash.personalization_app.personalization_app.mojom.mojom.AmbientProviderRequest = ash.personalization_app.personalization_app.mojom.mojom.AmbientProviderPendingReceiver;


// Interface: KeyboardBacklightObserver
ash.personalization_app.personalization_app.mojom.mojom.KeyboardBacklightObserver = {};

ash.personalization_app.personalization_app.mojom.mojom.KeyboardBacklightObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.personalization_app.personalization_app.mojom.mojom.KeyboardBacklightObserverRemote = class {
  static get $interfaceName() {
    return 'ash.personalization_app.mojom.KeyboardBacklightObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.personalization_app.personalization_app.mojom.mojom.KeyboardBacklightObserverPendingReceiver,
      handle);
    this.$ = new ash.personalization_app.personalization_app.mojom.mojom.KeyboardBacklightObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.personalization_app.personalization_app.mojom.mojom.KeyboardBacklightObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onBacklightStateChanged(currentBacklightState) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.personalization_app.personalization_app.mojom.mojom.KeyboardBacklightObserver_OnBacklightStateChanged_ParamsSpec,
      null,
      [currentBacklightState]);
  }

  onWallpaperColorChanged(wallpaper_color) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.personalization_app.personalization_app.mojom.mojom.KeyboardBacklightObserver_OnWallpaperColorChanged_ParamsSpec,
      null,
      [wallpaper_color]);
  }

};

ash.personalization_app.personalization_app.mojom.mojom.KeyboardBacklightObserver.getRemote = function() {
  let remote = new ash.personalization_app.personalization_app.mojom.mojom.KeyboardBacklightObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.personalization_app.mojom.KeyboardBacklightObserver',
    'context');
  return remote.$;
};

// ParamsSpec for OnBacklightStateChanged
ash.personalization_app.personalization_app.mojom.mojom.KeyboardBacklightObserver_OnBacklightStateChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.personalization_app.mojom.KeyboardBacklightObserver.OnBacklightStateChanged_Params',
      packedSize: 24,
      fields: [
        { name: 'currentBacklightState', packedOffset: 0, packedBitOffset: 0, type: ash.personalization_app.mojom.CurrentBacklightStateSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for OnWallpaperColorChanged
ash.personalization_app.personalization_app.mojom.mojom.KeyboardBacklightObserver_OnWallpaperColorChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.personalization_app.mojom.KeyboardBacklightObserver.OnWallpaperColorChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'wallpaper_color', packedOffset: 0, packedBitOffset: 0, type: skia.mojom.SkColorSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
ash.personalization_app.personalization_app.mojom.mojom.KeyboardBacklightObserverPtr = ash.personalization_app.personalization_app.mojom.mojom.KeyboardBacklightObserverRemote;
ash.personalization_app.personalization_app.mojom.mojom.KeyboardBacklightObserverRequest = ash.personalization_app.personalization_app.mojom.mojom.KeyboardBacklightObserverPendingReceiver;


// Interface: KeyboardBacklightProvider
ash.personalization_app.personalization_app.mojom.mojom.KeyboardBacklightProvider = {};

ash.personalization_app.personalization_app.mojom.mojom.KeyboardBacklightProviderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.personalization_app.personalization_app.mojom.mojom.KeyboardBacklightProviderRemote = class {
  static get $interfaceName() {
    return 'ash.personalization_app.mojom.KeyboardBacklightProvider';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.personalization_app.personalization_app.mojom.mojom.KeyboardBacklightProviderPendingReceiver,
      handle);
    this.$ = new ash.personalization_app.personalization_app.mojom.mojom.KeyboardBacklightProviderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.personalization_app.personalization_app.mojom.mojom.KeyboardBacklightProviderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  setKeyboardBacklightObserver(observer) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.personalization_app.personalization_app.mojom.mojom.KeyboardBacklightProvider_SetKeyboardBacklightObserver_ParamsSpec,
      null,
      [observer]);
  }

  setBacklightColor(backlight_color) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.personalization_app.personalization_app.mojom.mojom.KeyboardBacklightProvider_SetBacklightColor_ParamsSpec,
      null,
      [backlight_color]);
  }

  setBacklightZoneColor(zone, backlight_color) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.personalization_app.personalization_app.mojom.mojom.KeyboardBacklightProvider_SetBacklightZoneColor_ParamsSpec,
      null,
      [zone, backlight_color]);
  }

  shouldShowNudge() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      ash.personalization_app.personalization_app.mojom.mojom.KeyboardBacklightProvider_ShouldShowNudge_ParamsSpec,
      ash.personalization_app.personalization_app.mojom.mojom.KeyboardBacklightProvider_ShouldShowNudge_ResponseParamsSpec,
      []);
  }

  handleNudgeShown() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      ash.personalization_app.personalization_app.mojom.mojom.KeyboardBacklightProvider_HandleNudgeShown_ParamsSpec,
      null,
      []);
  }

};

ash.personalization_app.personalization_app.mojom.mojom.KeyboardBacklightProvider.getRemote = function() {
  let remote = new ash.personalization_app.personalization_app.mojom.mojom.KeyboardBacklightProviderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.personalization_app.mojom.KeyboardBacklightProvider',
    'context');
  return remote.$;
};

// ParamsSpec for SetKeyboardBacklightObserver
ash.personalization_app.personalization_app.mojom.mojom.KeyboardBacklightProvider_SetKeyboardBacklightObserver_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.personalization_app.mojom.KeyboardBacklightProvider.SetKeyboardBacklightObserver_Params',
      packedSize: 16,
      fields: [
        { name: 'observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetBacklightColor
ash.personalization_app.personalization_app.mojom.mojom.KeyboardBacklightProvider_SetBacklightColor_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.personalization_app.mojom.KeyboardBacklightProvider.SetBacklightColor_Params',
      packedSize: 16,
      fields: [
        { name: 'backlight_color', packedOffset: 0, packedBitOffset: 0, type: ash.personalization_app.mojom.BacklightColorSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetBacklightZoneColor
ash.personalization_app.personalization_app.mojom.mojom.KeyboardBacklightProvider_SetBacklightZoneColor_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.personalization_app.mojom.KeyboardBacklightProvider.SetBacklightZoneColor_Params',
      packedSize: 16,
      fields: [
        { name: 'zone', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'backlight_color', packedOffset: 4, packedBitOffset: 0, type: ash.personalization_app.mojom.BacklightColorSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ShouldShowNudge
ash.personalization_app.personalization_app.mojom.mojom.KeyboardBacklightProvider_ShouldShowNudge_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.personalization_app.mojom.KeyboardBacklightProvider.ShouldShowNudge_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.personalization_app.personalization_app.mojom.mojom.KeyboardBacklightProvider_ShouldShowNudge_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.personalization_app.mojom.KeyboardBacklightProvider.ShouldShowNudge_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'should_show_nudge', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for HandleNudgeShown
ash.personalization_app.personalization_app.mojom.mojom.KeyboardBacklightProvider_HandleNudgeShown_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.personalization_app.mojom.KeyboardBacklightProvider.HandleNudgeShown_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Legacy compatibility
ash.personalization_app.personalization_app.mojom.mojom.KeyboardBacklightProviderPtr = ash.personalization_app.personalization_app.mojom.mojom.KeyboardBacklightProviderRemote;
ash.personalization_app.personalization_app.mojom.mojom.KeyboardBacklightProviderRequest = ash.personalization_app.personalization_app.mojom.mojom.KeyboardBacklightProviderPendingReceiver;

