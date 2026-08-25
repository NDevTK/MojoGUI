// Auto-generated MojoJS binding
 // Source: chromium_src/device/vr/public/mojom/vr_service.mojom
 // Module: device.mojom

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
      // Per-interface scramble map (generated from BUILD.gn analysis)
      _interfaceScrambleMap: {"android_webview.mojom.LocalMainFrame": true, "android_webview.mojom.FrameHost": true, "android_webview.mojom.RenderMessageFilter": true, "android_webview.mojom.Renderer": true, "ash.mojom.HidPreservingBluetoothStateController": true, "ash.annotator.mojom.UntrustedAnnotatorPage": true, "ash.annotator.mojom.UntrustedAnnotatorPageHandler": true, "ash.annotator.mojom.UntrustedAnnotatorPageHandlerFactory": true, "ash.boca_receiver.mojom.UntrustedPage": true, "ash.boca_receiver.mojom.UntrustedPageHandlerFactory": true, "ash.boca.mojom.PageHandler": true, "ash.boca.mojom.Page": true, "ash.boca.mojom.BocaPageHandlerFactory": true, "ash.camera_app.mojom.TabletModeMonitor": true, "ash.camera_app.mojom.ScreenStateMonitor": true, "ash.camera_app.mojom.ScreenLockedMonitor": true, "ash.camera_app.mojom.ExternalScreenMonitor": true, "ash.camera_app.mojom.CameraUsageOwnershipMonitor": true, "ash.camera_app.mojom.LidStateMonitor": true, "ash.camera_app.mojom.SWPrivacySwitchMonitor": true, "ash.camera_app.mojom.WindowStateMonitor": true, "ash.camera_app.mojom.StorageMonitor": true, "ash.camera_app.mojom.WindowStateController": true, "ash.camera_app.mojom.CameraAppHelper": true, "ash.camera_app.mojom.EventsSender": true, "ash.camera_app.mojom.PdfBuilder": true, "ash.color_internals.mojom.WallpaperColorsObserver": true, "ash.color_internals.mojom.WallpaperColorsHandler": true, "ash.common.mojom.AcceleratorFetcherObserver": true, "ash.common.mojom.AcceleratorFetcher": true, "ash.common.mojom.ForceHiddenElementsVisibleObserver": true, "ash.common.mojom.AccessibilityFeatures": true, "ash.personalization_app.mojom.SeaPenObserver": true, "ash.personalization_app.mojom.SeaPenProvider": true, "ash.common.mojom.ShortcutInputObserver": true, "ash.common.mojom.ShortcutInputProvider": true, "ash.common.mojom.WebUiSyslogEmitter": true, "ash.mojom.demo_mode.UntrustedPageHandlerFactory": true, "ash.mojom.demo_mode.UntrustedPageHandler": true, "ash.diagnostics.mojom.KeyboardObserver": true, "ash.diagnostics.mojom.InternalDisplayPowerStateObserver": true, "ash.diagnostics.mojom.TabletModeObserver": true, "ash.diagnostics.mojom.LidStateObserver": true, "ash.diagnostics.mojom.ConnectedDevicesObserver": true, "ash.diagnostics.mojom.InputDataProvider": true, "ash.diagnostics.mojom.NetworkListObserver": true, "ash.diagnostics.mojom.NetworkStateObserver": true, "ash.diagnostics.mojom.NetworkHealthProvider": true, "ash.diagnostics.mojom.BatteryChargeStatusObserver": true, "ash.diagnostics.mojom.BatteryHealthObserver": true, "ash.diagnostics.mojom.MemoryUsageObserver": true, "ash.diagnostics.mojom.CpuUsageObserver": true, "ash.diagnostics.mojom.SystemDataProvider": true, "ash.diagnostics.mojom.RoutineRunner": true, "ash.diagnostics.mojom.SystemRoutineController": true, "ash.eche_app.mojom.SignalingMessageExchanger": true, "ash.eche_app.mojom.SignalingMessageObserver": true, "ash.eche_app.mojom.SystemInfoProvider": true, "ash.eche_app.mojom.SystemInfoObserver": true, "ash.eche_app.mojom.AccessibilityProvider": true, "ash.eche_app.mojom.AccessibilityObserver": true, "ash.eche_app.mojom.UidGenerator": true, "ash.eche_app.mojom.NotificationGenerator": true, "ash.eche_app.mojom.DisplayStreamHandler": true, "ash.eche_app.mojom.StreamActionObserver": true, "ash.eche_app.mojom.StreamOrientationObserver": true, "ash.eche_app.mojom.ConnectionStatusObserver": true, "ash.eche_app.mojom.KeyboardLayoutHandler": true, "ash.eche_app.mojom.KeyboardLayoutObserver": true, "ash.file_manager.mojom.PageHandlerFactory": true, "ash.file_manager.mojom.PageHandler": true, "ash.file_manager.mojom.Page": true, "ash.mojom.files_internals.PageHandler": true, "ash.firmware_update.mojom.UpdateObserver": true, "ash.firmware_update.mojom.DeviceRequestObserver": true, "ash.firmware_update.mojom.UpdateProgressObserver": true, "ash.firmware_update.mojom.UpdateProvider": true, "ash.firmware_update.mojom.InstallController": true, "ash.firmware_update.mojom.SystemUtils": true, "ash.focus_mode.mojom.MediaClient": true, "ash.focus_mode.mojom.TrackProvider": true, "ash.graduation_ui.mojom.GraduationUiHandler": true, "ash.growth.mojom.PageHandler": true, "ash.help_app.mojom.PageHandlerFactory": true, "ash.help_app.mojom.PageHandler": true, "ash.help_app.mojom.SearchResultsObserver": true, "ash.help_app.mojom.SearchHandler": true, "ash.mall.mojom.PageHandler": true, "ash.media_app_ui.mojom.PageHandlerFactory": true, "ash.media_app_ui.mojom.PageHandler": true, "ash.media_app_ui.mojom.UntrustedServiceFactory": true, "ash.media_app_ui.mojom.OcrUntrustedService": true, "ash.media_app_ui.mojom.OcrUntrustedPage": true, "ash.media_app_ui.mojom.MahiUntrustedService": true, "ash.media_app_ui.mojom.MahiUntrustedPage": true, "ash.media_app_ui.mojom.MantisUntrustedService": true, "ash.media_app_ui.mojom.MantisUntrustedPage": true, "ash.os_feedback_ui.mojom.HelpContentProvider": true, "ash.os_feedback_ui.mojom.FeedbackServiceProvider": true, "ash.personalization_app.mojom.WallpaperObserver": true, "ash.personalization_app.mojom.WallpaperProvider": true, "ash.personalization_app.mojom.ThemeObserver": true, "ash.personalization_app.mojom.ThemeProvider": true, "ash.personalization_app.mojom.UserImageObserver": true, "ash.personalization_app.mojom.UserProvider": true, "ash.personalization_app.mojom.AmbientObserver": true, "ash.personalization_app.mojom.AmbientProvider": true, "ash.personalization_app.mojom.KeyboardBacklightObserver": true, "ash.personalization_app.mojom.KeyboardBacklightProvider": true, "ash.personalization_app.mojom.SearchResultsObserver": true, "ash.personalization_app.mojom.SearchHandler": true, "ash.projector.mojom.UntrustedProjectorPageHandler": true, "ash.projector.mojom.UntrustedProjectorPage": true, "ash.projector.mojom.UntrustedProjectorPageHandlerFactory": true, "ash.recorder_app.mojom.ModelStateMonitor": true, "ash.recorder_app.mojom.QuietModeMonitor": true, "ash.recorder_app.mojom.PageHandler": true, "ash.mojom.sample_swa.ChildUntrustedPage": true, "ash.mojom.sample_swa.ParentTrustedPage": true, "ash.mojom.sample_swa.PageHandlerFactory": true, "ash.mojom.sample_swa.PageHandler": true, "ash.mojom.sample_swa.Page": true, "ash.mojom.sample_swa.UntrustedPageInterfacesFactory": true, "ash.sanitize_ui.mojom.SettingsResetter": true, "ash.mojom.scanner_feedback_ui.PageHandler": true, "ash.scanning.mojom.ScanJobObserver": true, "ash.scanning.mojom.ScanService": true, "ash.scanning.mojom.MultiPageScanController": true, "ash.shimless_rma.mojom.ErrorObserver": true, "ash.shimless_rma.mojom.OsUpdateObserver": true, "ash.shimless_rma.mojom.CalibrationObserver": true, "ash.shimless_rma.mojom.ProvisioningObserver": true, "ash.shimless_rma.mojom.HardwareWriteProtectionStateObserver": true, "ash.shimless_rma.mojom.PowerCableStateObserver": true, "ash.shimless_rma.mojom.ExternalDiskStateObserver": true, "ash.shimless_rma.mojom.HardwareVerificationStatusObserver": true, "ash.shimless_rma.mojom.FinalizationObserver": true, "ash.shimless_rma.mojom.UpdateRoFirmwareObserver": true, "ash.shimless_rma.mojom.ShimlessRmaService": true, "ash.shortcut_customization.mojom.SearchResultsAvailabilityObserver": true, "ash.shortcut_customization.mojom.SearchHandler": true, "ash.shortcut_customization.mojom.AcceleratorsUpdatedObserver": true, "ash.shortcut_customization.mojom.PolicyUpdatedObserver": true, "ash.shortcut_customization.mojom.AcceleratorConfigurationProvider": true, "ash.mojom.status_area_internals.PageHandler": true, "cc.mojom.RenderFrameMetadataObserver": true, "cc.mojom.RenderFrameMetadataObserverClient": true, "actor.ui.mojom.ActorOverlayPageHandlerFactory": true, "actor.ui.mojom.ActorOverlayPageHandler": true, "actor.ui.mojom.ActorOverlayPage": true, "contextual_cueing_internals.mojom.PageHandler": true, "contextual_tasks.mojom.PageHandler": true, "contextual_tasks.mojom.Page": true, "contextual_tasks.mojom.PageHandlerFactory": true, "contextual_tasks.mojom.ExtensionPageHandlerFactory": true, "contextual_tasks.mojom.ExtensionPageHandler": true, "contextual_tasks.mojom.ExtensionPage": true, "contextual_tasks_internals.mojom.ContextualTasksInternalsPageHandlerFactory": true, "contextual_tasks_internals.mojom.ContextualTasksInternalsPageHandler": true, "contextual_tasks_internals.mojom.ContextualTasksInternalsPage": true, "contextual_tasks_toolbar.mojom.PageHandlerFactory": true, "contextual_tasks_toolbar.mojom.PageHandler": true, "contextual_tasks_toolbar.mojom.Page": true, "geic.mojom.GeicApi": true, "geic.mojom.GeicBrowserHost": true, "geic.mojom.GeicClient": true, "glic.mojom.ExperimentalOptInPageHandler": true, "glic.mojom.PreloadPage": true, "glic.mojom.Page": true, "glic.mojom.GlicPreloadHandler": true, "glic.mojom.GlicPreloadHandlerFactory": true, "glic.mojom.PageHandlerFactory": true, "glic.mojom.PageHandler": true, "glic.mojom.PinCandidatesObserver": true, "glic.mojom.ActorClient": true, "glic.mojom.ActorHandler": true, "glic.mojom.AnnotationHandler": true, "glic.mojom.SkillsHandler": true, "glic.mojom.SkillsClient": true, "glic.mojom.WebClientHandler": true, "glic.mojom.ZeroStateSuggestionsHandler": true, "glic.mojom.ZeroStateSuggestionsClient": true, "glic.mojom.TabDataHandler": true, "glic.mojom.TabFaviconHandler": true, "glic.mojom.ExperimentalTriggeringUpdatesHandler": true, "glic.mojom.ExperimentalTriggeringClient": true, "glic.mojom.WebClient": true, "glic.mojom.CaptureRegionObserver": true, "glic.mojom.InternalsPageHandler": true, "glic.mojom.InternalsPageHandlerFactory": true, "glic.selection.SelectionOverlayPageHandlerFactory": true, "glic.selection.SelectionOverlayPageHandler": true, "glic.selection.SelectionOverlayPage": true, "lens.mojom.LensPageHandlerFactory": true, "lens.mojom.LensPageHandler": true, "lens.mojom.LensPage": true, "lens.mojom.LensGhostLoaderPageHandlerFactory": true, "lens.mojom.LensGhostLoaderPage": true, "lens.mojom.LensSidePanelPageHandlerFactory": true, "lens.mojom.LensSidePanelPageHandler": true, "lens.mojom.LensSidePanelPage": true, "media.mojom.MediaEngagementScoreDetailsProvider": true, "file_suggestion.mojom.DriveSuggestionHandler": true, "file_suggestion.mojom.MicrosoftFilesPageHandler": true, "ntp.authentication.mojom.MicrosoftAuthPageHandler": true, "ntp.calendar.mojom.GoogleCalendarPageHandler": true, "ntp.calendar.mojom.OutlookCalendarPageHandler": true, "ntp.most_relevant_tab_resumption.mojom.PageHandler": true, "ntp.tab_groups.mojom.PageHandler": true, "pwc.mojom.PrivilegedBridge": true, "certificate_manager.mojom.CertificateManagerPageHandlerFactory": true, "certificate_manager.mojom.CertificateManagerPageHandler": true, "certificate_manager.mojom.CertificateManagerPage": true, "drive_picker_host.mojom.DrivePickerResultHandler": true, "access_code_cast.mojom.PageHandlerFactory": true, "access_code_cast.mojom.PageHandler": true, "access_code_cast.mojom.Page": true, "ai_overlay_dialog.mojom.PageHandlerFactory": true, "ai_overlay_dialog.mojom.PageHandler": true, "ai_overlay_dialog.mojom.Page": true, "ai_overlay_dialog.mojom.AiOverlayTools": true, "ai_overlay_dialog.mojom.AiOverlayToolRegistry": true, "app_home.mojom.PageHandlerFactory": true, "app_home.mojom.PageHandler": true, "app_home.mojom.Page": true, "mojom.app_service_internals.AppServiceInternalsPageHandler": true, "add_supervision.mojom.AddSupervisionHandler": true, "ash.app_install.mojom.AppInfoActions": true, "ash.app_install.mojom.ConnectionErrorActions": true, "ash.app_install.mojom.PageHandlerFactory": true, "ash.app_install.mojom.PageHandler": true, "ash.cloud_upload.mojom.PageHandlerFactory": true, "ash.cloud_upload.mojom.PageHandler": true, "ash.crostini_installer.mojom.PageHandlerFactory": true, "ash.crostini_installer.mojom.PageHandler": true, "ash.crostini_installer.mojom.Page": true, "dlp_internals.mojom.ReportingObserver": true, "dlp_internals.mojom.PageHandler": true, "emoji_picker.mojom.PageHandlerFactory": true, "emoji_picker.mojom.PageHandler": true, "new_window_proxy.mojom.NewWindowProxy": true, "enterprise_reporting.mojom.PageHandlerFactory": true, "enterprise_reporting.mojom.PageHandler": true, "enterprise_reporting.mojom.Page": true, "ash.extended_updates.mojom.PageHandlerFactory": true, "ash.extended_updates.mojom.PageHandler": true, "ash.extended_updates.mojom.Page": true, "launcher_internals.mojom.PageHandlerFactory": true, "launcher_internals.mojom.Page": true, "lobster.mojom.UntrustedLobsterPageHandler": true, "ash.screens_common.mojom.AiIntroPageHandler": true, "ash.screens_common.mojom.AiIntroPage": true, "ash.screens_common.mojom.AppDownloadingPageHandler": true, "ash.screens_common.mojom.DrivePinningPageHandler": true, "ash.screens_common.mojom.DrivePinningPage": true, "ash.screens_common.mojom.FjordStationSetupPageHandler": true, "ash.screens_common.mojom.FjordTouchControllerPageHandler": true, "ash.screens_common.mojom.FjordImageSelectionPageHandler": true, "ash.screens_common.mojom.GaiaInfoPageHandler": true, "ash.screens_common.mojom.GaiaInfoPage": true, "ash.screens_common.mojom.GestureNavigationPageHandler": true, "ash.screens_common.mojom.GeminiIntroPageHandler": true, "ash.screens_factory.mojom.ScreensFactory": true, "ash.screens_login.mojom.EncryptionMigrationPageHandler": true, "ash.screens_login.mojom.EncryptionMigrationPage": true, "ash.screens_oobe.mojom.ConsumerUpdatePageHandler": true, "ash.screens_oobe.mojom.ConsumerUpdatePage": true, "ash.screens_oobe.mojom.PackagedLicensePageHandler": true, "ash.screens_osauth.mojom.LocalDataLossWarningPageHandler": true, "ash.manage_mirrorsync.mojom.PageHandlerFactory": true, "ash.manage_mirrorsync.mojom.PageHandler": true, "ash.office_fallback.mojom.PageHandlerFactory": true, "ash.office_fallback.mojom.PageHandler": true, "parent_access_ui.mojom.ParentAccessUiHandler": true, "sensor.mojom.PageHandlerFactory": true, "sensor.mojom.PageHandler": true, "ash.settings.app_notification.mojom.AppNotificationsHandler": true, "ash.settings.app_notification.mojom.AppNotificationsObserver": true, "ash.settings.app_parental_controls.mojom.AppParentalControlsHandler": true, "ash.settings.app_parental_controls.mojom.AppParentalControlsObserver": true, "ash.settings.date_time.mojom.PageHandlerFactory": true, "ash.settings.date_time.mojom.PageHandler": true, "ash.settings.date_time.mojom.Page": true, "ash.settings.mojom.TabletModeObserver": true, "ash.settings.mojom.DisplayConfigurationObserver": true, "ash.settings.mojom.DisplayBrightnessSettingsObserver": true, "ash.settings.mojom.AmbientLightSensorObserver": true, "ash.settings.mojom.DisplaySettingsProvider": true, "ash.settings.mojom.KeyboardSettingsObserver": true, "ash.settings.mojom.TouchpadSettingsObserver": true, "ash.settings.mojom.PointingStickSettingsObserver": true, "ash.settings.mojom.MouseSettingsObserver": true, "ash.settings.mojom.ButtonPressObserver": true, "ash.settings.mojom.GraphicsTabletSettingsObserver": true, "ash.settings.mojom.KeyboardBrightnessObserver": true, "ash.settings.mojom.KeyboardAmbientLightSensorObserver": true, "ash.settings.mojom.LidStateObserver": true, "ash.settings.mojom.InputDeviceSettingsProvider": true, "ash.settings.google_drive.mojom.PageHandlerFactory": true, "ash.settings.google_drive.mojom.PageHandler": true, "ash.settings.google_drive.mojom.Page": true, "ash.settings.one_drive.mojom.PageHandlerFactory": true, "ash.settings.one_drive.mojom.PageHandler": true, "ash.settings.one_drive.mojom.Page": true, "ash.settings.graduation.mojom.GraduationHandler": true, "ash.settings.graduation.mojom.GraduationObserver": true, "ash.settings.app_permission.mojom.AppPermissionsHandler": true, "ash.settings.app_permission.mojom.AppPermissionsObserver": true, "ash.settings.magic_boost_handler.mojom.PageHandlerFactory": true, "ash.settings.magic_boost_handler.mojom.PageHandler": true, "ash.settings.mojom.SearchResultsObserver": true, "ash.settings.mojom.SearchHandler": true, "ash.settings.mojom.UserActionRecorder": true, "policy.local_user_files.mojom.PageHandlerFactory": true, "policy.local_user_files.mojom.PageHandler": true, "policy.local_user_files.mojom.Page": true, "mojom.DebugLogsChangeHandler": true, "mojom.BluetoothInternalsHandler": true, "mojom.BluetoothBtsnoop": true, "chrome_finds_internals.mojom.Page": true, "chrome_finds_internals.mojom.PageHandler": true, "chrome_finds_internals.mojom.PageHandlerFactory": true, "content_settings_internals.mojom.PageHandler": true, "content_settings_internals.mojom.PageHandlerFactory": true, "browser.context_hub.mojom.Page": true, "browser.context_hub.mojom.PageHandlerFactory": true, "browser.context_hub.mojom.PageHandler": true, "customize_buttons.mojom.CustomizeButtonsHandlerFactory": true, "customize_buttons.mojom.CustomizeButtonsHandler": true, "customize_buttons.mojom.CustomizeButtonsDocument": true, "data_sharing.mojom.PageHandlerFactory": true, "data_sharing.mojom.PageHandler": true, "data_sharing.mojom.Page": true, "default_browser_modal.mojom.Page": true, "default_browser_modal.mojom.PageHandler": true, "default_browser_modal.mojom.PageHandlerFactory": true, "visual_guided_setter.mojom.Page": true, "visual_guided_setter.mojom.PageHandler": true, "visual_guided_setter.mojom.PageHandlerFactory": true, "discards.mojom.DetailsProvider": true, "discards.mojom.GraphChangeStream": true, "discards.mojom.GraphDump": true, "discards.mojom.SiteDataProvider": true, "downloads.mojom.PageHandlerFactory": true, "downloads.mojom.PageHandler": true, "downloads.mojom.Page": true, "drive_picker_host.mojom.DrivePickerHostHandler": true, "drive_picker_host_untrusted.mojom.PageHandler": true, "drive_picker_host_untrusted.mojom.Page": true, "drive_picker_host_untrusted.mojom.PageHandlerFactory": true, "drive_picker_host_untrusted.mojom.DrivePickerBridge": true, "zero_state_promo.mojom.PageHandlerFactory": true, "zero_state_promo.mojom.PageHandler": true, "feature_showcase.mojom.DefaultBrowserPageHandler": true, "feature_showcase.mojom.DefaultBrowserPageHandlerFactory": true, "feature_showcase.mojom.FeatureShowcasePageHandler": true, "feature_showcase.mojom.FeatureShowcasePageHandlerFactory": true, "feature_showcase.mojom.GeminiPageHandler": true, "feature_showcase.mojom.GeminiPageHandlerFactory": true, "feature_showcase.mojom.GoogleLensPageHandler": true, "feature_showcase.mojom.GoogleLensPageHandlerFactory": true, "feature_showcase.mojom.PasswordManagerPageHandler": true, "feature_showcase.mojom.PasswordManagerPageHandlerFactory": true, "feature_showcase.mojom.ThemesAndCustomizationPageHandler": true, "feature_showcase.mojom.ThemesAndCustomizationPageHandlerFactory": true, "feed_internals.mojom.PageHandler": true, "feedback.report_unsafe_site.mojom.PageHandler": true, "feedback.report_unsafe_site.mojom.PageHandlerFactory": true, "indigo_internals.mojom.PageHandlerFactory": true, "indigo_internals.mojom.PageHandler": true, "indigo_internals.mojom.Page": true, "infobar_internals.mojom.Page": true, "infobar_internals.mojom.PageHandler": true, "infobar_internals.mojom.PageHandlerFactory": true, "intro.mojom.FinishOrContinuePageHandlerFactory": true, "intro.mojom.FinishOrContinuePageHandler": true, "intro.mojom.IntroPageHandlerFactory": true, "intro.mojom.IntroPage": true, "intro.mojom.SignInCelebrationPageHandlerFactory": true, "intro.mojom.SignInCelebrationPageHandler": true, "intro.mojom.SignInCelebrationPage": true, "intro.mojom.SignInPromoPageHandlerFactory": true, "intro.mojom.SignInPromoPageHandler": true, "intro.mojom.SignInPromoPage": true, "intro.mojom.WelcomePageHandlerFactory": true, "intro.mojom.WelcomePageHandler": true, "iwa_dev.mojom.PageHandler": true, "iwa_dev.mojom.Page": true, "iwa_dev.mojom.PageHandlerFactory": true, "mojom.LocationInternalsHandler": true, "multistep_filter_internals.mojom.PageHandler": true, "multistep_filter_internals.mojom.Page": true, "multistep_filter_internals.mojom.PageHandlerFactory": true, "nearby_share.mojom.ShareTargetListener": true, "nearby_share.mojom.TransferUpdateListener": true, "nearby_share.mojom.DiscoveryObserver": true, "nearby_share.mojom.DiscoveryManager": true, "nearby_share.mojom.ConfirmationManager": true, "nearby_share.mojom.ReceiveObserver": true, "nearby_share.mojom.ReceiveManager": true, "new_tab_footer.mojom.NewTabFooterHandlerFactory": true, "new_tab_footer.mojom.NewTabFooterHandler": true, "new_tab_footer.mojom.NewTabFooterDocument": true, "action_chips.mojom.ActionChipsHandler": true, "action_chips.mojom.Page": true, "action_chips.mojom.ActionChipsHandlerFactory": true, "foo.mojom.FooHandler": true, "new_tab_page.mojom.PageHandlerFactory": true, "new_tab_page.mojom.PageHandler": true, "new_tab_page.mojom.Page": true, "ntp_promo.mojom.NtpPromoHandler": true, "ntp_promo.mojom.NtpPromoClient": true, "ntp_promo.mojom.NtpPromoHandlerFactory": true, "new_tab_page_third_party.mojom.PageHandlerFactory": true, "new_tab_page_third_party.mojom.PageHandler": true, "new_tab_page_third_party.mojom.Page": true, "notifications_internals.mojom.PageHandler": true, "new_tab_page.mojom.MicrosoftAuthUntrustedDocument": true, "new_tab_page.mojom.MicrosoftAuthUntrustedDocumentInterfacesFactory": true, "new_tab_page.mojom.MicrosoftAuthUntrustedPageHandler": true, "aim_eligibility.mojom.Page": true, "aim_eligibility.mojom.PageHandler": true, "aim_eligibility.mojom.PageHandlerFactory": true, "omnibox.logging.mojom.PageHandlerFactory": true, "omnibox.logging.mojom.PageHandler": true, "omnibox.logging.mojom.Page": true, "mojom.OmniboxPageHandler": true, "mojom.OmniboxPage": true, "omnibox_everywhere_debug.mojom.Page": true, "omnibox_everywhere_debug.mojom.PageHandler": true, "omnibox_everywhere_debug.mojom.PageHandlerFactory": true, "omnibox_popup.mojom.PageHandlerFactory": true, "omnibox_popup.mojom.PageHandler": true, "omnibox_popup.mojom.Page": true, "omnibox_popup_aim.mojom.PageHandlerFactory": true, "omnibox_popup_aim.mojom.PageHandler": true, "omnibox_popup_aim.mojom.Page": true, "on_device_internals.mojom.PageHandlerFactory": true, "on_device_internals.mojom.PageHandler": true, "on_device_internals.mojom.Page": true, "on_device_translation_internals.mojom.PageHandlerFactory": true, "on_device_translation_internals.mojom.PageHandler": true, "on_device_translation_internals.mojom.Page": true, "password_manager.mojom.PageHandlerFactory": true, "password_manager.mojom.PageHandler": true, "password_manager.mojom.Page": true, "mojom.ResetPasswordHandler": true, "search_engine_choice.mojom.PageHandlerFactory": true, "search_engine_choice.mojom.PageHandler": true, "segmentation_internals.mojom.PageHandlerFactory": true, "segmentation_internals.mojom.PageHandler": true, "segmentation_internals.mojom.Page": true, "side_panel.mojom.BookmarksPageHandlerFactory": true, "side_panel.mojom.BookmarksPageHandler": true, "side_panel.mojom.BookmarksPage": true, "comments.mojom.PageHandlerFactory": true, "comments.mojom.PageHandler": true, "side_panel.mojom.CustomizeChromePageHandlerFactory": true, "side_panel.mojom.CustomizeChromePageHandler": true, "side_panel.mojom.CustomizeChromePage": true, "side_panel.customize_chrome.mojom.CustomizeToolbarHandlerFactory": true, "side_panel.customize_chrome.mojom.CustomizeToolbarHandler": true, "side_panel.customize_chrome.mojom.CustomizeToolbarClient": true, "side_panel.customize_chrome.mojom.WallpaperSearchHandlerFactory": true, "side_panel.customize_chrome.mojom.WallpaperSearchHandler": true, "side_panel.customize_chrome.mojom.WallpaperSearchClient": true, "reading_list.mojom.PageHandlerFactory": true, "reading_list.mojom.PageHandler": true, "reading_list.mojom.Page": true, "batch_upload.mojom.PageHandlerFactory": true, "batch_upload.mojom.PageHandler": true, "batch_upload.mojom.Page": true, "cross_device_signin.mojom.PageHandlerFactory": true, "cross_device_signin.mojom.PageHandler": true, "history_sync_optin.mojom.PageHandlerFactory": true, "history_sync_optin.mojom.PageHandler": true, "history_sync_optin.mojom.Page": true, "signout_confirmation.mojom.PageHandlerFactory": true, "signout_confirmation.mojom.PageHandler": true, "signout_confirmation.mojom.Page": true, "skills.mojom.PageHandlerFactory": true, "skills.mojom.PageHandler": true, "skills.mojom.SkillsPage": true, "skills.mojom.DialogHandler": true, "skills.mojom.SkillsPageV2": true, "skills.mojom.SkillsPageHandler": true, "subresource_filter.mojom.SubresourceFilterInternalsHandler": true, "subresource_filter.mojom.SubresourceFilterInternalsObserver": true, "suggest_internals.mojom.PageHandler": true, "suggest_internals.mojom.Page": true, "tab_search.mojom.PageHandlerFactory": true, "tab_search.mojom.PageHandler": true, "tab_search.mojom.Page": true, "tab_strip_internals.mojom.PageHandlerFactory": true, "tab_strip_internals.mojom.PageHandler": true, "tab_strip_internals.mojom.Page": true, "unexportable_keys_internals.mojom.PageHandlerFactory": true, "unexportable_keys_internals.mojom.PageHandler": true, "updater_ui.mojom.PageHandlerFactory": true, "updater_ui.mojom.PageHandler": true, "mojom.UsbInternalsPageHandler": true, "user_education.mojom.UserEducationMixedTrustHandlerFactory": true, "user_education.mojom.UserEducationMixedTrustHandler": true, "mojom.user_education_internals.UserEducationInternalsPageHandler": true, "watermark.mojom.PageHandlerFactory": true, "watermark.mojom.PageHandler": true, "mojom.PageHandlerFactory": true, "mojom.WebAppInternalsHandler": true, "webnn_internals.mojom.PageHandler": true, "webnn_internals.mojom.Page": true, "webnn_internals.mojom.PageHandlerFactory": true, "whats_new.mojom.PageHandlerFactory": true, "whats_new.mojom.PageHandler": true, "bookmark_bar.mojom.PageHandlerFactory": true, "bookmark_bar.mojom.PageHandler": true, "bookmark_bar.mojom.Page": true, "webui_browser.mojom.PageHandlerFactory": true, "webui_browser.mojom.Page": true, "webui_browser.mojom.PageHandler": true, "webui_browser.mojom.GuestHandler": true, "chrome.mojom.ChromeRenderFrame": true, "compose.mojom.ComposeSessionUntrustedPageHandlerFactory": true, "compose.mojom.ComposeSessionUntrustedPageHandler": true, "compose.mojom.ComposeClientUntrustedPageHandler": true, "compose.mojom.ComposeUntrustedDialog": true, "mojom.ModuleEventSink": true, "chrome.mojom.FontPrewarmer": true, "chrome.mojom.RenderFrameFontFamilyAccessor": true, "chrome.mojom.GoogleAccountsPrivateApiExtension": true, "chrome.mojom.ProfileImportObserver": true, "chrome.mojom.ProfileImport": true, "chrome.mojom.IndigoAgentHost": true, "chrome.mojom.IndigoAgent": true, "chrome.mojom.IndigoOnboardingDialogHost": true, "chrome.mojom.AppShim": true, "chrome.mojom.AppShimHost": true, "chrome.mojom.AppShimHostBootstrap": true, "chrome.mojom.WebRtcLoggingClient": true, "chrome.mojom.WebRtcLoggingAgent": true, "offline_pages.mojom.MhtmlPageNotifier": true, "chrome.mojom.NetErrorPageSupport": true, "chrome.mojom.NetBenchmarking": true, "chrome.mojom.NetworkDiagnostics": true, "chrome.mojom.NetworkDiagnosticsClient": true, "chrome.mojom.NetworkEasterEgg": true, "chrome.mojom.OfflinePageAutoFetcher": true, "chrome.mojom.OpenSearchDescriptionDocumentHandler": true, "chrome.mojom.RemoteActorCredentialSharing": true, "chrome.mojom.PluginHost": true, "chrome.mojom.PluginAuthHost": true, "chrome.mojom.PluginInfoHost": true, "reading_mode.mojom.DistillationEvaluator": true, "read_anything.mojom.UntrustedPageHandlerFactory": true, "read_anything.mojom.UntrustedPageHandler": true, "read_anything.mojom.UntrustedPage": true, "read_aloud.mojom.ReadAloudPlaybackController": true, "read_aloud.mojom.ReadAloudPlaybackControllerClient": true, "read_aloud.mojom.ReadAloudPlaybackControllerFactory": true, "chrome.mojom.BoundSessionRequestThrottledHandler": true, "chrome.mojom.ChromeOSListener": true, "chrome.mojom.RendererConfiguration": true, "request_header_integrity.mojom.ChromeCompanero": true, "chrome.mojom.SandboxStatusExtension": true, "search.mojom.EmbeddedSearchConnector": true, "search.mojom.EmbeddedSearch": true, "search.mojom.EmbeddedSearchClient": true, "supervised_user.mojom.SupervisedUserCommands": true, "chrome.mojom.TrustedVaultEncryptionKeysExtension": true, "wallet.mojom.BoardingPassExtractor": true, "gcpw_hid.mojom.GaiaCredentialProviderHidBroker": true, "enterprise_companion.mojom.EnterpriseCompanion": true, "chrome.mojom.DocumentAnalysisService": true, "chrome.mojom.FileUtilService": true, "chrome.mojom.SafeArchiveAnalyzer": true, "chrome.mojom.TemporaryFileGetter": true, "chrome.mojom.SingleFileExtractor": true, "chrome.mojom.SingleFileExtractorListener": true, "chrome.mojom.ZipListener": true, "chrome.mojom.ZipFileCreator": true, "mac_notifications.mojom.MacNotificationService": true, "mac_notifications.mojom.MacNotificationActionHandler": true, "mac_notifications.mojom.MacNotificationProvider": true, "pdf.mojom.PdfProgressiveSearchifier": true, "pdf.mojom.PdfSearchifier": true, "pdf.mojom.Ocr": true, "pdf.mojom.PdfService": true, "pdf.mojom.PdfThumbnailer": true, "printing.mojom.PdfFlattener": true, "printing.mojom.PdfNupConverter": true, "printing.mojom.PdfToEmfConverter": true, "printing.mojom.PdfToEmfConverterFactory": true, "printing.mojom.PdfToPwgRasterConverter": true, "printing.mojom.UnsandboxedPrintBackendHost": true, "printing.mojom.SandboxedPrintBackendHost": true, "printing.mojom.PrintBackendService": true, "printing.mojom.PrintingService": true, "redirection.mojom.RedirectionService": true, "chrome.mojom.RemovableStorageWriter": true, "chrome.mojom.RemovableStorageWriterClient": true, "chrome.mojom.UtilReadIcon": true, "chrome.mojom.UtilWin": true, "chrome.mojom.ProcessorMetrics": true, "web_ui_test.mojom.TestRunner": true, "test.mojom.Foo": true, "test.mojom.Bar": true, "test.mojom.Baz": true, "test.mojom.MojoFileSystemAccessTest": true, "updater.mojom.UpdateService": true, "updater.mojom.StateChangeObserver": true, "updater.mojom.UpdateServiceInternal": true, "updater.mojom.PostRequestObserver": true, "updater.mojom.FileDownloadObserver": true, "updater.mojom.FetchService": true, "chromecast.mojom.ApiBindings": true, "chromecast.mojom.BluetoothDeviceAccessProvider": true, "chromecast.mojom.BluetoothDeviceAccessProviderClient": true, "chromecast.mojom.CastContentWindowObserver": true, "chromecast.mojom.CastContentWindow": true, "chromecast.mojom.CastWebContentsObserver": true, "chromecast.mojom.CastWebContents": true, "chromecast.mojom.CastWebService": true, "chromecast.mojom.MessageCallback": true, "chromecast.mojom.WebUi": true, "chromecast.mojom.Resources": true, "chromecast.mojom.WebUiClient": true, "chromecast.mojom.ActivityUrlFilterConfiguration": true, "chromecast.mojom.ActivityWindow": true, "chromecast.shell.mojom.ApplicationMediaCapabilitiesObserver": true, "chromecast.shell.mojom.ApplicationMediaCapabilities": true, "chromecast.mojom.AssistantMessagePipe": true, "chromecast.mojom.AssistantMessageClient": true, "chromecast.mojom.AssistantMessageService": true, "chromecast.mojom.AudioSocketBroker": true, "chromecast.shell.mojom.CastDemoVolumeChangeObserver": true, "chromecast.shell.mojom.CastDemo": true, "chromecast.shell.mojom.FeatureManager": true, "chromecast.mojom.FeatureUpdateObserver": true, "chromecast.mojom.FeatureUpdateService": true, "chromecast.mojom.GestureHandler": true, "chromecast.mojom.GestureSource": true, "chromecast.mojom.JsChannel": true, "chromecast.mojom.JsChannelClient": true, "chromecast.mojom.JsChannelBindingProvider": true, "chromecast.media.mojom.MediaCaps": true, "chromecast.media.mojom.MediaCapsObserver": true, "chromecast.metrics.mojom.MetricsHelper": true, "chromecast.shell.mojom.QueryableDataStore": true, "chromecast.mojom.ServiceConnector": true, "chromecast.mojom.SettingsClient": true, "chromecast.mojom.SettingsPlatform": true, "chromecast.external_mojo.mojom.ExternalService": true, "chromecast.external_mojo.mojom.ExternalConnector": true, "chromecast.external_mojo.mojom.TestExternalConnector": true, "chromecast.media.mojom.VideoGeometryChangeClient": true, "chromecast.media.mojom.VideoGeometryChangeSubscriber": true, "chromecast.media.mojom.VideoGeometrySetter": true, "chromecast.mojom.RemoteInterfaces": true, "chromecast.mojom.DisplaySettings": true, "chromecast.mojom.DisplaySettingsObserver": true, "ash.audio_config.mojom.AudioSystemPropertiesObserver": true, "ash.audio_config.mojom.CrosAudioConfig": true, "drivefs.mojom.DriveFsBootstrap": true, "drivefs.mojom.DriveFs": true, "drivefs.mojom.DriveFsDelegate": true, "drivefs.mojom.SearchQuery": true, "drivefs.mojom.HttpDelegate": true, "drivefs.mojom.FakeDriveFsLauncher": true, "emoji_search.mojom.EmojiSearch": true, "ash.enhanced_network_tts.mojom.EnhancedNetworkTts": true, "ash.enhanced_network_tts.mojom.AudioDataObserver": true, "ash.language.mojom.LanguagePacksObserver": true, "ash.language.mojom.LanguagePacks": true, "ash.local_search_service.mojom.Index": true, "ash.local_search_service.mojom.SearchMetricsReporter": true, "ash.local_search_service.mojom.LocalSearchService": true, "mantis.mojom.MantisProcessor": true, "mantis.mojom.PlatformModelProgressObserver": true, "mantis.mojom.MantisService": true, "chromeos.mojo_service_manager.mojom.ServiceManager": true, "chromeos.mojo_service_manager.mojom.ServiceProvider": true, "chromeos.mojo_service_manager.mojom.ServiceObserver": true, "smbfs.mojom.SmbFsBootstrap": true, "smbfs.mojom.SmbFs": true, "smbfs.mojom.SmbFsDelegate": true, "ash.trash_service.mojom.TrashService": true, "arc.mojom.AdbdMonitorHost": true, "arc.mojom.AdbdMonitorInstance": true, "arc.mojom.AppHost": true, "arc.mojom.AppInstance": true, "arc.mojom.AppPermissionsInstance": true, "arc.mojom.AppfuseHost": true, "arc.mojom.AppfuseInstance": true, "arc.mojom.ArcBridgeHost": true, "arc.mojom.ArcWifiHost": true, "arc.mojom.ArcWifiInstance": true, "arc.mojom.AudioHost": true, "arc.mojom.AudioInstance": true, "arc.mojom.AuthHost": true, "arc.mojom.AuthInstance": true, "arc.mojom.BackupSettingsInstance": true, "arc.mojom.RfcommListeningSocketClient": true, "arc.mojom.RfcommConnectingSocketClient": true, "arc.mojom.BluetoothListenSocketClient": true, "arc.mojom.BluetoothConnectSocketClient": true, "arc.mojom.BluetoothHost": true, "arc.mojom.BluetoothInstance": true, "arc.mojom.BootPhaseMonitorHost": true, "arc.mojom.BootPhaseMonitorInstance": true, "arc.mojom.CameraService": true, "arc.mojom.CameraHost": true, "arc.mojom.CameraInstance": true, "arc.mojom.ChromeFeatureFlagsInstance": true, "arc.mojom.CompatibilityModeInstance": true, "arc.mojom.CrashCollectorHost": true, "arc.mojom.CrashCollectorInstance": true, "arc.mojom.ArcShellExecutionInstance": true, "arc.mojom.DigitalGoodsInstance": true, "arc.mojom.DiskSpaceHost": true, "arc.mojom.DiskSpaceInstance": true, "arc.mojom.EnterpriseReportingHost": true, "arc.mojom.EnterpriseReportingInstance": true, "arc.mojom.ErrorNotificationHost": true, "arc.mojom.ErrorNotificationInstance": true, "arc.mojom.ErrorNotificationItem": true, "arc.mojom.ErrorNotificationActionHandler": true, "arc.mojom.FileSystemHost": true, "arc.mojom.FileSystemInstance": true, "arc.mojom.IioSensorHost": true, "arc.mojom.IioSensorInstance": true, "arc.mojom.ImeHost": true, "arc.mojom.ImeInstance": true, "arc.mojom.InputConnection": true, "arc.mojom.InputMethodManagerHost": true, "arc.mojom.InputMethodManagerInstance": true, "arc.mojom.CustomTabSession": true, "arc.mojom.IntentHelperHost": true, "arc.mojom.IntentHelperInstance": true, "arc.mojom.KeymasterHost": true, "arc.mojom.KeymasterInstance": true, "arc.mojom.KeymasterServer": true, "arc.mojom.keymint.KeyMintHost": true, "arc.mojom.keymint.KeyMintInstance": true, "arc.mojom.keymint.KeyMintServer": true, "arc.mojom.KioskHost": true, "arc.mojom.KioskInstance": true, "arc.mojom.MediaSessionInstance": true, "arc.mojom.MemoryInstance": true, "arc.mojom.MetricsHost": true, "arc.mojom.MetricsInstance": true, "arc.mojom.MidisClient": true, "arc.mojom.MidisServer": true, "arc.mojom.MidisHost": true, "arc.mojom.MidisInstance": true, "arc.mojom.NearbyShareSessionHost": true, "arc.mojom.NearbyShareSessionInstance": true, "arc.mojom.NearbyShareHost": true, "arc.mojom.NearbyShareInstance": true, "arc.mojom.NetHost": true, "arc.mojom.NetInstance": true, "arc.mojom.NotificationsHost": true, "arc.mojom.NotificationsInstance": true, "arc.mojom.ObbMounterHost": true, "arc.mojom.ObbMounterInstance": true, "arc.mojom.OemCryptoService": true, "arc.mojom.OemCryptoHost": true, "arc.mojom.OemCryptoInstance": true, "arc.mojom.OnDeviceSafetyHost": true, "arc.mojom.OnDeviceSafetyInstance": true, "arc.mojom.PipHost": true, "arc.mojom.PipInstance": true, "arc.mojom.PolicyHost": true, "arc.mojom.PolicyInstance": true, "arc.mojom.PowerHost": true, "arc.mojom.PowerInstance": true, "arc.mojom.PrintSessionHost": true, "arc.mojom.PrintSessionInstance": true, "arc.mojom.PrintSpoolerHost": true, "arc.mojom.PrintSpoolerInstance": true, "arc.mojom.PrivacyItemsHost": true, "arc.mojom.PrivacyItemsInstance": true, "arc.mojom.ProcessInstance": true, "arc.mojom.ProtectedBufferManager": true, "arc.mojom.ScreenCaptureHost": true, "arc.mojom.ScreenCaptureSession": true, "arc.mojom.ScreenCaptureInstance": true, "arc.mojom.ScreenCaptureSessionNotifier": true, "arc.mojom.SharesheetHost": true, "arc.mojom.SharesheetInstance": true, "arc.mojom.SystemStateHost": true, "arc.mojom.SystemStateInstance": true, "arc.mojom.SystemUiInstance": true, "arc.mojom.TracingInstance": true, "arc.mojom.TtsHost": true, "arc.mojom.TtsInstance": true, "arc.mojom.UsbHostHost": true, "arc.mojom.UsbHostInstance": true, "arc.mojom.VideoHost": true, "arc.mojom.VideoInstance": true, "arc.mojom.VideoAcceleratorFactory": true, "arc.mojom.VideoDecodeAccelerator": true, "arc.mojom.VideoDecodeClient": true, "arc.mojom.VideoDecoder": true, "arc.mojom.VideoDecoderClient": true, "arc.mojom.VideoEncodeAccelerator": true, "arc.mojom.VideoEncodeClient": true, "arc.mojom.VideoFramePool": true, "arc.mojom.VideoFramePoolClient": true, "arc.mojom.VideoProtectedBufferAllocator": true, "arc.mojom.VolumeMounterHost": true, "arc.mojom.VolumeMounterInstance": true, "arc.mojom.WakeLockHost": true, "arc.mojom.WakeLockInstance": true, "arc.mojom.WallpaperHost": true, "arc.mojom.WallpaperInstance": true, "arc.mojom.WebApkInstance": true, "ash.borealis_motd.mojom.PageHandlerFactory": true, "ash.borealis_motd.mojom.PageHandler": true, "ash.auth.mojom.FactorObserver": true, "ash.auth.mojom.AuthFactorConfig": true, "ash.auth.mojom.RecoveryFactorEditor": true, "ash.auth.mojom.PinFactorEditor": true, "ash.auth.mojom.PasswordFactorEditor": true, "ash.bluetooth_config.mojom.SystemPropertiesObserver": true, "ash.bluetooth_config.mojom.BluetoothDeviceStatusObserver": true, "ash.bluetooth_config.mojom.DiscoverySessionStatusObserver": true, "ash.bluetooth_config.mojom.KeyEnteredHandler": true, "ash.bluetooth_config.mojom.DevicePairingDelegate": true, "ash.bluetooth_config.mojom.DevicePairingHandler": true, "ash.bluetooth_config.mojom.BluetoothDiscoveryDelegate": true, "ash.bluetooth_config.mojom.CrosBluetoothConfig": true, "ash.babelorca.mojom.TachyonParsingService": true, "ash.cellular_setup.mojom.CarrierPortalHandler": true, "ash.cellular_setup.mojom.ActivationDelegate": true, "ash.cellular_setup.mojom.CellularSetup": true, "ash.cellular_setup.mojom.ESimManagerObserver": true, "ash.cellular_setup.mojom.ESimManager": true, "ash.cellular_setup.mojom.Euicc": true, "ash.cellular_setup.mojom.ESimProfile": true, "chromeos.connectivity.mojom.PasspointEventsListener": true, "chromeos.connectivity.mojom.PasspointService": true, "coral.mojom.TitleObserver": true, "coral.mojom.CoralProcessor": true, "coral.mojom.CoralService": true, "ash.cros_healthd.internal.mojom.ChromiumDataCollector": true, "ash.cros_healthd.mojom.CrosHealthdDiagnosticsService": true, "ash.cros_healthd.mojom.CrosHealthdEventService": true, "ash.cros_healthd.mojom.CrosHealthdProbeService": true, "ash.cros_healthd.mojom.DEPRECATED_LedLitUpRoutineReplier": true, "ash.cros_healthd.mojom.AshEventReporter": true, "ash.cros_healthd.mojom.CrosHealthdBluetoothObserver": true, "ash.cros_healthd.mojom.CrosHealthdLidObserver": true, "ash.cros_healthd.mojom.CrosHealthdPowerObserver": true, "ash.cros_healthd.mojom.CrosHealthdAudioObserver": true, "ash.cros_healthd.mojom.CrosHealthdThunderboltObserver": true, "ash.cros_healthd.mojom.CrosHealthdUsbObserver": true, "ash.cros_healthd.mojom.CrosHealthdSdCardObserver": true, "ash.cros_healthd.mojom.EventObserver": true, "ash.cros_healthd.mojom.CrosHealthdRoutinesService": true, "ash.cros_healthd.mojom.RoutineControl": true, "ash.cros_healthd.mojom.RoutineObserver": true, "ash.cros_healthd.connectivity.mojom.State": true, "ash.cros_healthd.connectivity.mojom.ConnectivityTestProvider": true, "ash.cros_safety.mojom.CloudSafetySession": true, "ash.cros_safety.mojom.OnDeviceSafetySession": true, "ash.cros_safety.mojom.CrosSafetyService": true, "ash.device_sync.mojom.DeviceSyncObserver": true, "ash.device_sync.mojom.DeviceSync": true, "ash.heartd.mojom.HeartdControl": true, "ash.heartd.mojom.HeartbeatService": true, "ash.heartd.mojom.Pacemaker": true, "ash.hotspot_config.mojom.CrosHotspotConfig": true, "ash.hotspot_config.mojom.CrosHotspotConfigObserver": true, "ash.hotspot_config.mojom.HotspotEnabledStateObserver": true, "ash.ime.mojom.ConnectionFactory": true, "ash.ime.mojom.InputEngineManager": true, "ash.ime.mojom.PlatformAccessProvider": true, "ash.ime.mojom.ImeService": true, "ash.ime.mojom.InputChannel": true, "ash.ime.mojom.InputMethod": true, "ash.ime.mojom.InputMethodHost": true, "ash.ime.mojom.InputMethodUserDataService": true, "ash.ime.mojom.JpUnused": true, "arc.keymaster.mojom.CertStoreInstance": true, "arc.keymint.mojom.CertStoreInstance": true, "ash.multidevice_setup.mojom.AccountStatusChangeDelegate": true, "ash.multidevice_setup.mojom.HostStatusObserver": true, "ash.multidevice_setup.mojom.FeatureStateObserver": true, "ash.multidevice_setup.mojom.MultiDeviceSetup": true, "ash.multidevice_setup.mojom.PrivilegedHostDeviceSetter": true, "sharing.mojom.FirewallHole": true, "sharing.mojom.FirewallHoleFactory": true, "sharing.mojom.MdnsObserver": true, "sharing.mojom.MdnsManager": true, "nearby.connections.mojom.EndpointDiscoveryListener": true, "nearby.connections.mojom.ConnectionLifecycleListener": true, "nearby.connections.mojom.PayloadListener": true, "nearby.connections.mojom.ConnectionListenerV3": true, "nearby.connections.mojom.PayloadListenerV3": true, "nearby.connections.mojom.NearbyConnections": true, "sharing.mojom.NearbySharingDecoder": true, "ash.nearby.presence.mojom.ScanSession": true, "ash.nearby.presence.mojom.ScanObserver": true, "ash.nearby.presence.mojom.NearbyPresence": true, "ash.nearby.presence.mojom.NearbyPresenceCredentialStorage": true, "nearby_share.mojom.NearbyShareSettingsObserver": true, "nearby_share.mojom.NearbyShareSettings": true, "nearby_share.mojom.DownloadContactsObserver": true, "nearby_share.mojom.ContactManager": true, "ash.quick_start.mojom.QuickStartDecoder": true, "sharing.mojom.Sharing": true, "sharing.mojom.TcpSocketFactory": true, "sharing.mojom.IceConfigFetcher": true, "sharing.mojom.MdnsResponderFactory": true, "sharing.mojom.IncomingMessagesListener": true, "sharing.mojom.ReceiveMessagesSession": true, "sharing.mojom.WebRtcSignalingMessenger": true, "ash.orca.mojom.EditorClient": true, "ash.orca.mojom.EditorClientConnector": true, "ash.orca.mojom.EditorEventSink": true, "ash.orca.mojom.SystemActuator": true, "ash.orca.mojom.TextQueryProvider": true, "ash.orca.mojom.OrcaService": true, "ash.quick_pair.mojom.FastPairDataParser": true, "ash.quick_pair.mojom.QuickPairService": true, "recording.mojom.DriveFsQuotaDelegate": true, "recording.mojom.RecordingServiceClient": true, "recording.mojom.RecordingService": true, "ash.rollback_network_config.mojom.RollbackNetworkConfig": true, "ash.secure_channel.mojom.NearbyConnectionStateListener": true, "ash.secure_channel.mojom.NearbyMessageSender": true, "ash.secure_channel.mojom.NearbyMessageReceiver": true, "ash.secure_channel.mojom.NearbyFilePayloadHandler": true, "ash.secure_channel.mojom.NearbyConnector": true, "ash.secure_channel.mojom.Channel": true, "ash.secure_channel.mojom.MessageReceiver": true, "ash.secure_channel.mojom.ConnectionDelegate": true, "ash.secure_channel.mojom.SecureChannelStructuredMetricsLogger": true, "ash.secure_channel.mojom.SecureChannel": true, "ash.secure_channel.mojom.FilePayloadListener": true, "ash.wifi_direct.mojom.WifiDirectManager": true, "ash.wifi_direct.mojom.WifiDirectConnection": true, "chromeos.cdm.mojom.BrowserCdmFactory": true, "chromeos.cdm.mojom.CdmFactory": true, "chromeos.cdm.mojom.CdmFactoryDaemon": true, "chromeos.cdm.mojom.CdmStorage": true, "chromeos.cdm.mojom.ContentDecryptionModule": true, "chromeos.cdm.mojom.ContentDecryptionModuleClient": true, "chromeos.cdm.mojom.OutputProtection": true, "drivefs.mojom.NativeMessagingPort": true, "drivefs.mojom.NativeMessagingHost": true, "chromeos.auth.mojom.InSessionAuth": true, "mahi.mojom.ContentExtractionService": true, "mahi.mojom.ContentExtractionServiceFactory": true, "chromeos.payments.mojom.PaymentAppInstance": true, "chromeos.printing.printing_manager.mojom.PrintJobsObserver": true, "chromeos.printing.printing_manager.mojom.PrintingMetadataProvider": true, "chromeos.printing.printing_manager.mojom.PrintManagementHandler": true, "quick_answers.mojom.SpellCheckService": true, "quick_answers.mojom.SpellCheckDictionary": true, "chromeos.remote_apps.mojom.RemoteApps": true, "chromeos.remote_apps.mojom.RemoteAppsFactory": true, "chromeos.remote_apps.mojom.RemoteAppLaunchObserver": true, "chromeos.sensors.mojom.SensorHalServer": true, "chromeos.sensors.mojom.SensorHalClient": true, "chromeos.sensors.mojom.SensorService": true, "chromeos.sensors.mojom.SensorDevice": true, "chromeos.sensors.mojom.SensorDeviceSamplesObserver": true, "chromeos.sensors.mojom.SensorServiceNewDevicesObserver": true, "chromeos.cfm.mojom.CfmBrowser": true, "chromeos.cfm.mojom.DisconnectReason": true, "chromeos.cfm.mojom.CfmServiceContext": true, "chromeos.cfm.mojom.CfmServiceAdaptor": true, "chromeos.cfm.mojom.ExternalDisplayBrightness": true, "ash.cfm.mojom.MeetBrowser": true, "ash.cfm.mojom.DataWatchDog": true, "ash.cfm.mojom.DataSource": true, "ash.cfm.mojom.DataAggregator": true, "chromeos.cfm.mojom.MeetDevicesDiagnostics": true, "ash.cfm.mojom.HotrodStatus": true, "chromeos.cfm.mojom.MeetDevicesInfo": true, "chromeos.cfm.mojom.PolicyInfoObserver": true, "chromeos.cfm.mojom.LoggerStateObserver": true, "chromeos.cfm.mojom.MeetDevicesLogger": true, "ash.cfm.mojom.XuCamera": true, "chromeos.machine_learning.mojom.DocumentScanner": true, "chromeos.machine_learning.mojom.GrammarChecker": true, "chromeos.machine_learning.mojom.GraphExecutor": true, "chromeos.machine_learning.mojom.HandwritingRecognizer": true, "chromeos.machine_learning.mojom.HeatmapPalmRejectionClient": true, "chromeos.machine_learning.mojom.ImageContentAnnotator": true, "chromeos.machine_learning.mojom.MachineLearningService": true, "chromeos.machine_learning.mojom.Model": true, "chromeos.machine_learning.mojom.SodaClient": true, "chromeos.machine_learning.mojom.SodaRecognizer": true, "chromeos.machine_learning.mojom.TextClassifier": true, "chromeos.machine_learning.mojom.TextSuggester": true, "chromeos.machine_learning.web_platform.mojom.HandwritingRecognizer": true, "chromeos.media_perception.mojom.MediaPerception": true, "chromeos.media_perception.mojom.MediaPerceptionService": true, "chromeos.media_perception.mojom.MediaPerceptionController": true, "chromeos.media_perception.mojom.MediaPerceptionControllerClient": true, "chromeos.network_config.mojom.CrosNetworkConfig": true, "chromeos.network_config.mojom.CrosNetworkConfigObserver": true, "chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines": true, "chromeos.network_health.mojom.NetworkEventsObserver": true, "chromeos.network_health.mojom.NetworkHealthService": true, "chromeos.tts.mojom.TtsService": true, "chromeos.tts.mojom.GoogleTtsStream": true, "chromeos.tts.mojom.PlaybackTtsStream": true, "chromeos.tts.mojom.TtsEventObserver": true, "math.mojom.MathService": true, "codelabs.mojom.ObjectA": true, "codelabs.mojom.ObjectB": true, "codelabs.mojom.AssociatedProcess": true, "codelabs.mojom.GenericInterface": true, "codelabs.mojom.Process": true, "actor_internals.mojom.Page": true, "actor_internals.mojom.PageHandler": true, "actor_internals.mojom.PageHandlerFactory": true, "actor.mojom.JournalClient": true, "autofill.mojom.AutofillAgent": true, "autofill.mojom.PasswordAutofillAgent": true, "autofill.mojom.PasswordGenerationAgent": true, "autofill.mojom.AutofillDriver": true, "autofill.mojom.PasswordManagerDriver": true, "autofill.mojom.PasswordGenerationDriver": true, "autofill_ml_internals.mojom.Page": true, "autofill_ml_internals.mojom.PageHandlerFactory": true, "autofill_ml_internals.mojom.PageHandler": true, "autofill.mojom.AutofillVisibilityObserver": true, "autofill.mojom.TypeTraitsTest": true, "bookmarks_api.mojom.BookmarksObserver": true, "bookmarks_api.mojom.BookmarksService": true, "browser_controls_api.mojom.BrowserControlsService": true, "tabs_api.mojom.TabDragService": true, "tabs_api.mojom.DropTargetRegistration": true, "tabs_api.mojom.DropTarget": true, "tabs_api.mojom.TabStripService": true, "tabs_api.mojom.TabsObserver": true, "tabs_api.mojom.TabStripExperimentService": true, "tabs_api.mojom.TabStripUIController": true, "extensions_bar.mojom.PageHandlerFactory": true, "extensions_bar.mojom.PageHandler": true, "extensions_bar.mojom.Page": true, "toolbar_ui_api.mojom.ToolbarUIObserver": true, "toolbar_ui_api.mojom.ToolbarUIService": true, "cast_streaming.mojom.AudioBufferRequester": true, "cast_streaming.mojom.VideoBufferRequester": true, "cast_streaming.mojom.DemuxerConnector": true, "cast_streaming.mojom.RendererController": true, "chromeos_camera.mojom.JpegEncodeAccelerator": true, "chromeos_camera.mojom.MjpegDecodeAccelerator": true, "commerce.mojom.CommerceInternalsHandlerFactory": true, "commerce.mojom.CommerceInternalsHandler": true, "commerce.mojom.CommerceInternalsPage": true, "commerce_web_extractor.mojom.CommerceWebExtractor": true, "commerce.price_insights.mojom.PriceInsightsHandler": true, "commerce.price_insights.mojom.PriceInsightsHandlerFactory": true, "commerce.price_tracking.mojom.PriceTrackingHandler": true, "commerce.price_tracking.mojom.Page": true, "commerce.price_tracking.mojom.PriceTrackingHandlerFactory": true, "shopping_service.mojom.ShoppingServiceHandlerFactory": true, "shopping_service.mojom.ShoppingServiceHandler": true, "content_capture.mojom.ContentCaptureReceiver": true, "content_capture.mojom.ContentCaptureSender": true, "content_settings.mojom.ContentSettingsAgent": true, "content_settings.mojom.ContentSettingsManager": true, "continuous_search.mojom.SearchResultExtractor": true, "data_sharing_internals.mojom.PageHandlerFactory": true, "data_sharing_internals.mojom.PageHandler": true, "data_sharing_internals.mojom.Page": true, "device_signals.mojom.SystemSignalsService": true, "discardable_memory.mojom.DiscardableSharedMemoryManager": true, "dom_distiller.mojom.DistillabilityService": true, "dom_distiller.mojom.DistillerJavaScriptService": true, "download.mojom.DownloadStreamClient": true, "connectors_internals.mojom.PageHandler": true, "payments.facilitated.mojom.PixCodeValidator": true, "global_media_controls.mojom.DeviceListHost": true, "global_media_controls.mojom.DeviceListClient": true, "global_media_controls.mojom.DeviceService": true, "global_media_controls.mojom.DevicePickerProvider": true, "global_media_controls.mojom.DevicePickerObserver": true, "guest_contents.mojom.GuestContentsHost": true, "guest_view.mojom.PageHandlerFactory": true, "guest_view.mojom.PageHandler": true, "guest_view.mojom.Page": true, "guest_view.mojom.ViewHandle": true, "guest_view.mojom.GuestViewHost": true, "heap_profiling.mojom.SnapshotController": true, "heap_profiling.mojom.TestConnector": true, "history_clusters_internals.mojom.PageHandlerFactory": true, "history_clusters_internals.mojom.PageHandler": true, "history_clusters_internals.mojom.Page": true, "input.mojom.RenderInputRouterDelegate": true, "input.mojom.RenderInputRouterDelegateClient": true, "js_injection.mojom.JsToBrowserMessaging": true, "js_injection.mojom.JsObjectsClient": true, "js_injection.mojom.BrowserToJsMessagingFactory": true, "js_injection.mojom.BrowserToJsMessaging": true, "js_injection.mojom.JsCommunication": true, "language_detection.mojom.ContentLanguageDetectionDriver": true, "components.media_control.mojom.MediaPlaybackOptions": true, "chrome.mojom.MediaParser": true, "chrome.mojom.MediaParserFactory": true, "chrome.mojom.MediaDataSource": true, "media_router.mojom.Debugger": true, "media_router.mojom.Logger": true, "media_router.mojom.MediaController": true, "media_router.mojom.MediaRouteProvider": true, "media_router.mojom.MediaRouter": true, "media_router.mojom.MediaRouterTraitsTestService": true, "media_router.mojom.MediaStatusObserver": true, "metrics.dwa.mojom.DwaRecorderClientInterface": true, "metrics.dwa.mojom.DwaRecorderInterface": true, "metrics.dwa.mojom.DwaRecorderFactory": true, "metrics.mojom.CallStackProfileCollector": true, "metrics.mojom.CallStackProfileCollectorTest": true, "metrics.mojom.ChildHistogramFetcherFactory": true, "metrics.mojom.ChildHistogramFetcher": true, "metrics.mojom.SingleSampleMetricsProvider": true, "metrics.mojom.SingleSampleMetric": true, "mirroring.mojom.CastMessageChannel": true, "mirroring.mojom.MirroringService": true, "mirroring.mojom.AudioStreamCreatorClient": true, "mirroring.mojom.ResourceProvider": true, "mirroring.mojom.SessionObserver": true, "network_hints.mojom.NetworkHintsHandler": true, "prerender.mojom.NoStatePrefetchCanceler": true, "prerender.mojom.NoStatePrefetchMessages": true, "notebooks_internals.mojom.PageHandlerFactory": true, "notebooks_internals.mojom.PageHandler": true, "notebooks_internals.mojom.Page": true, "searchbox.mojom.PageHandlerFactory": true, "searchbox.mojom.PageHandler": true, "searchbox.mojom.Page": true, "on_device_translation.mojom.FileOperationProxy": true, "on_device_translation.mojom.OnDeviceTranslationService": true, "on_device_translation.mojom.OnDeviceTranslator": true, "on_load_script_injector.mojom.OnLoadScriptInjector": true, "optimization_guide.mojom.PageTextConsumer": true, "optimization_guide.mojom.PageTextService": true, "optimization_guide_internals.mojom.PageHandlerFactory": true, "optimization_guide_internals.mojom.Page": true, "optimization_guide.mojom.ModelSolution": true, "optimization_guide.mojom.ModelSubscriber": true, "optimization_guide.mojom.ModelBroker": true, "optimization_guide.mojom.ModelBrokerDebugObserver": true, "optimization_guide.mojom.ModelBrokerDebug": true, "page_content_annotations.mojom.PageStabilityMonitor": true, "page_content_annotations.mojom.PageStabilityMonitorManager": true, "page_image_service.mojom.PageImageServiceHandler": true, "page_load_metrics.mojom.PageLoadMetrics": true, "paint_preview.mojom.PaintPreviewRecorder": true, "password_manager.mojom.CSVPasswordParser": true, "performance_manager.mojom.DocumentCoordinationUnit": true, "performance_manager.mojom.ProcessCoordinationUnit": true, "performance_manager.mojom.ChildProcessCoordinationUnit": true, "policy.mojom.PolicyPageHandler": true, "policy.mojom.PolicyPageClient": true, "policy.mojom.PolicyPageHandlerFactory": true, "printing.mojom.PrintPreviewUI": true, "printing.mojom.PrintRenderFrame": true, "printing.mojom.PrintManagerHost": true, "private_ai.mojom.OakSession": true, "private_ai_internals.mojom.PrivateAiInternalsPage": true, "private_ai_internals.mojom.PrivateAiInternalsPageHandler": true, "record_replay.mojom.RecordReplayAgent": true, "record_replay.mojom.RecordReplayDriver": true, "remote_cocoa.mojom.AlertBridge": true, "remote_cocoa.mojom.StubInterface": true, "remote_cocoa.mojom.Application": true, "remote_cocoa.mojom.MenuHost": true, "remote_cocoa.mojom.Menu": true, "remote_cocoa.mojom.NativeWidgetNSWindow": true, "remote_cocoa.mojom.NativeWidgetNSWindowHost": true, "remote_cocoa.mojom.SelectFileDialog": true, "remote_cocoa.mojom.TextInputHost": true, "safe_browsing.mojom.SafeBrowsing": true, "safe_browsing.mojom.ThreatReporter": true, "safe_browsing.mojom.PhishingDetector": true, "safe_browsing.mojom.PhishingModelSetter": true, "safe_browsing.mojom.PhishingModelSetterTestObserver": true, "safe_browsing.mojom.PhishingImageEmbedderDetector": true, "safe_browsing.mojom.ExtensionWebRequestReporter": true, "safe_browsing.mojom.SafeBrowsingUrlChecker": true, "security_interstitials.mojom.InterstitialCommands": true, "filesystem.mojom.Directory": true, "font_service.mojom.FontService": true, "font_data_service.mojom.FontDataService": true, "heap_profiling.mojom.ProfilingClient": true, "heap_profiling.mojom.ProfilingService": true, "paint_preview.mojom.PaintPreviewCompositor": true, "paint_preview.mojom.PaintPreviewCompositorCollection": true, "patch.mojom.FilePatcher": true, "printing.mojom.PrintCompositor": true, "quarantine.mojom.Quarantine": true, "storage.mojom.IndexedDBClientStateChecker": true, "storage.mojom.IndexedDBClientKeepActive": true, "storage.mojom.IndexedDBObserver": true, "storage.mojom.IndexedDBControl": true, "storage.mojom.MockFailureInjector": true, "storage.mojom.IndexedDBControlTest": true, "storage.mojom.BlobDataItemReader": true, "storage.mojom.BlobStorageContext": true, "storage.mojom.CacheStorageObserver": true, "storage.mojom.CacheStorageControl": true, "storage.mojom.FileSystemAccessContext": true, "storage.mojom.FileLock": true, "storage.mojom.Directory": true, "storage.mojom.LocalStorageControl": true, "storage.mojom.QuotaClient": true, "storage.mojom.ServiceWorkerLiveVersionRef": true, "storage.mojom.ServiceWorkerResourceReader": true, "storage.mojom.ServiceWorkerResourceWriter": true, "storage.mojom.ServiceWorkerResourceMetadataWriter": true, "storage.mojom.ServiceWorkerStorageControl": true, "storage.mojom.SessionStorageControl": true, "storage.mojom.StorageService": true, "unzip.mojom.UnzipFilter": true, "unzip.mojom.UnzipListener": true, "unzip.mojom.Unzipper": true, "site_engagement.mojom.SiteEngagementDetailsProvider": true, "spellcheck.mojom.SpellChecker": true, "spellcheck.mojom.SpellCheckInitializationHost": true, "spellcheck.mojom.SpellCheckHost": true, "spellcheck.mojom.SpellCheckPanel": true, "spellcheck.mojom.SpellCheckPanelHost": true, "subresource_filter.mojom.SubresourceFilterAgent": true, "subresource_filter.mojom.SubresourceFilterHost": true, "subresource_filter.mojom.SubresourceFilterRulesetObserver": true, "surface_embed.mojom.SurfaceEmbed": true, "surface_embed.mojom.SurfaceEmbedHost": true, "system_media_controls.mojom.SystemMediaControls": true, "system_media_controls.mojom.SystemMediaControlsObserver": true, "translate.mojom.TranslateAgent": true, "translate.mojom.ContentTranslateDriver": true, "unexportable_keys.mojom.UnexportableKeyService": true, "url_rewrite.mojom.UrlRequestRulesReceiver": true, "user_data_importer.mojom.BookmarkHtmlParser": true, "visitedlink.mojom.VisitedLinkNotificationSink": true, "viz.mojom.VizDebugOutput": true, "vrp_flags.mojom.VrpFlags": true, "vrp_flags.mojom.VrpFlagsFactory": true, "wallet.mojom.ImageExtractor": true, "web_cache.mojom.WebCache": true, "web_package.mojom.WebBundleParserFactory": true, "web_package.mojom.WebBundleParser": true, "web_package.mojom.BundleDataSource": true, "webapps.mojom.WebPageMetadataAgent": true, "chrome_urls.mojom.PageHandlerFactory": true, "chrome_urls.mojom.PageHandler": true, "storage.mojom.IdbInternalsHandler": true, "mojom.ProcessInternalsHandler": true, "traces_internals.mojom.TracesInternalsHandlerFactory": true, "traces_internals.mojom.PageHandler": true, "traces_internals.mojom.Page": true, "webxr.mojom.WebXrInternalsHandler": true, "webxr.mojom.XRInternalsSessionListener": true, "content.mojom.AgentSchedulingGroupHost": true, "content.mojom.AgentSchedulingGroup": true, "content.mojom.RouteProvider": true, "content.mojom.ChildProcessHost": true, "content.mojom.ChildProcess": true, "content.mojom.DomAutomationControllerHost": true, "content.mojom.MhtmlFileWriter": true, "content.mojom.FieldTrialRecorder": true, "content.mojom.FrameHTMLSerializerHandler": true, "content.mojom.Frame": true, "content.mojom.FrameBindingsControl": true, "content.mojom.NavigationRendererCancellationListener": true, "content.mojom.NavigationRendererIgnoreDuplicateNavigationListener": true, "content.mojom.FrameHost": true, "content.mojom.GinJavaBridge": true, "content.mojom.GinJavaBridgeRemoteObject": true, "content.mojom.GinJavaBridgeHost": true, "content.mojom.InputInjector": true, "content.mojom.MediaInternalLogRecords": true, "content.mojom.MemoryConsumerTraitsTest": true, "content.mojom.ChildMemoryCoordinator": true, "content.mojom.ChildMemoryConsumerRegistryHost": true, "content.mojom.MemoryCoordinatorDiagnosticsHost": true, "content.mojom.NavigationClient": true, "content.mojom.RenderMessageFilter": true, "remote_cocoa.mojom.PopupMenuRunner": true, "remote_cocoa.mojom.RenderWidgetHostNSView": true, "remote_cocoa.mojom.RenderWidgetHostNSViewHost": true, "content.mojom.Renderer": true, "content.mojom.RendererHost": true, "content.mojom.RendererVariationsConfiguration": true, "content.mojom.SandboxSupport": true, "content.mojom.SyntheticTrialConfiguration": true, "content.mojom.ThreadTypeSwitcher": true, "remote_cocoa.mojom.WebContentsNSView": true, "remote_cocoa.mojom.WebContentsNSViewHost": true, "content.mojom.WebUIHost": true, "content.mojom.WebUI": true, "content.mojom.FontCacheWin": true, "content.mojom.ResourceUsageReporter": true, "content.mojom.TestInterfaceForDefer": true, "content.mojom.TestInterfaceForGrant": true, "content.mojom.TestInterfaceForCancel": true, "content.mojom.TestInterfaceForUnexpected": true, "content.mojom.MojoContextProvider": true, "content.mojom.TestService": true, "devtools_media_encoding_service.mojom.DevToolsMediaEncodingServiceClient": true, "devtools_media_encoding_service.mojom.DevToolsMediaEncodingService": true, "content.mojom.MainFrameCounterTest": true, "content.mojom.MemoryCoordinatorTest": true, "content.mojom.MemoryCoordinatorTestClient": true, "content.mojom.PowerMonitorTest": true, "content.mojom.RenderFrameTestHelper": true, "content.mojom.FrameHostTestInterface": true, "content.mojom.FakeBluetoothChooser": true, "content.mojom.FakeBluetoothChooserFactory": true, "content.mojom.FakeBluetoothChooserClient": true, "content.mojom.MojoEcho": true, "content.optional_numerics_unittest.mojom.Params": true, "content.optional_numerics_unittest.mojom.ResponseParams": true, "content.optional_numerics_unittest.mojom.InterfaceV0": true, "content.optional_numerics_unittest.mojom.InterfaceV2": true, "content.mojom.WebTestRenderFrame": true, "content.mojom.WebTestControlHost": true, "content.mojom.NonAssociatedWebTestControlHost": true, "content.mojom.WebTestBluetoothFakeAdapterSetter": true, "bluetooth.mojom.Advertisement": true, "bluetooth.mojom.DiscoverySession": true, "bluetooth.mojom.Socket": true, "bluetooth.mojom.ServerSocket": true, "bluetooth.mojom.GattService": true, "bluetooth.mojom.GattServiceObserver": true, "bluetooth.mojom.Adapter": true, "bluetooth.mojom.AdapterObserver": true, "bluetooth.mojom.Device": true, "bluetooth.mojom.FakeBluetooth": true, "bluetooth.mojom.FakeCentral": true, "bluetooth.mojom.FakeCentralClient": true, "device.mojom.GamepadObserver": true, "device.mojom.GamepadMonitor": true, "device.mojom.GamepadHapticsManager": true, "device.mojom.XRSessionController": true, "device.mojom.XRRuntimeEventListener": true, "device.mojom.XRRuntime": true, "device.mojom.ImmersiveOverlay": true, "device.mojom.IsolatedXRRuntimeProviderClient": true, "device.mojom.IsolatedXRRuntimeProvider": true, "device.mojom.XRDeviceService": true, "device.mojom.XRDeviceServiceHost": true, "device.mojom.VRService": true, "device.mojom.XRSessionMetricsRecorder": true, "device.mojom.VRServiceClient": true, "device.mojom.XREnvironmentIntegrationProvider": true, "device.mojom.XRFrameDataProvider": true, "device.mojom.XRPresentationProvider": true, "device.mojom.XRPresentationClient": true, "device.mojom.XRSessionClient": true, "device.mojom.XRLayerManager": true, "device.mojom.WebXrInternalsRendererListener": true, "extensions.mime_handler.MimeHandlerService": true, "extensions.mime_handler.BeforeUnloadControl": true, "extensions.mojom.AppWindow": true, "extensions.mojom.RendererAutomationRegistry": true, "extensions.mojom.EventDispatcher": true, "extensions.mojom.EventRouter": true, "extensions.mojom.LocalFrame": true, "extensions.mojom.LocalFrameHost": true, "extensions.mojom.GuestView": true, "extensions.mojom.MimeHandlerViewContainerManager": true, "extensions.KeepAlive": true, "extensions.mojom.MessagePort": true, "extensions.mojom.MessagePortHost": true, "extensions.mojom.Renderer": true, "extensions.mojom.RendererHost": true, "extensions.mojom.ServiceWorker": true, "extensions.mojom.ServiceWorkerHost": true, "extensions.mojom.WebRequestHost": true, "mojom.WebEngineMediaResourceProvider": true, "gpu.mojom.GpuChannel": true, "gpu.mojom.CommandBuffer": true, "gpu.mojom.CommandBufferClient": true, "gpu.mojom.DCOMPTexture": true, "gpu.mojom.DCOMPTextureClient": true, "gpu.mojom.SharedImagePoolClientInterface": true, "ai.mojom.AIPrototypingService": true, "ai.mojom.EnhancedCalendarService": true, "ai.mojom.ModelLedSuggestionsService": true, "ai.mojom.SmartTabGroupingService": true, "ai.mojom.TabOrganizationService": true, "inspect.mojom.PageHandler": true, "inspect.mojom.Page": true, "inspect.mojom.PageHandlerFactory": true, "web.mojom.WebUsageController": true, "IPC.mojom.Channel": true, "IPC.mojom.ChannelBootstrap": true, "media.mojom.ImageCapture": false, "media.mojom.VideoCaptureObserver": true, "media.mojom.VideoCaptureHost": true, "cros.mojom.Camera3CallbackOps": true, "cros.mojom.Camera3DeviceOps": true, "cros.mojom.CameraAppDeviceProvider": true, "cros.mojom.CameraAppDeviceBridge": true, "cros.mojom.CameraAppDevice": true, "cros.mojom.ResultMetadataObserver": true, "cros.mojom.CameraEventObserver": true, "cros.mojom.DocumentCornersObserver": true, "cros.mojom.CameraInfoObserver": true, "cros.mojom.StillCaptureResultObserver": true, "cros.mojom.CameraModuleCallbacks": true, "cros.mojom.VendorTagOps": true, "cros.mojom.CameraModule": true, "cros.mojom.CameraHalClient": true, "cros.mojom.KioskVisionObserver": true, "cros.mojom.CameraHalDispatcher": true, "cros.mojom.CrosCameraServiceObserver": true, "cros.mojom.CrosCameraService": true, "cros.mojom.CrosDocumentScanner": true, "cros.mojom.JpegAcceleratorProvider": true, "cros.mojom.CrosDisplayObserver": true, "cros.mojom.CrosLidObserver": true, "cros.mojom.CrosPowerObserver": true, "cros.mojom.CrosSystemEventMonitor": true, "cros.mojom.VideoCaptureDeviceInfoObserver": true, "cros.mojom.VideoCaptureDeviceInfoMonitor": true, "midi.mojom.MidiSessionClient": true, "midi.mojom.MidiSessionProvider": true, "midi.mojom.MidiSession": true, "media.mojom.AndroidOverlayProvider": true, "media.mojom.AndroidOverlay": true, "media.mojom.AndroidOverlayClient": true, "media.mojom.AudioDecoder": true, "media.mojom.AudioDecoderClient": true, "media.mojom.AudioEncoder": true, "media.mojom.AudioEncoderClient": true, "media.mojom.AudioInputStream": true, "media.mojom.AudioInputStreamClient": true, "media.mojom.AudioInputStreamObserver": true, "media.mojom.AudioLog": true, "media.mojom.AudioLogFactory": true, "media.mojom.AudioOutputStream": true, "media.mojom.AudioOutputStreamObserver": true, "media.mojom.AudioOutputStreamProvider": true, "media.mojom.AudioOutputStreamProviderClient": true, "media.mojom.DeviceSwitchInterface": true, "media.mojom.AudioProcessorControls": true, "media.mojom.LocalMuter": true, "media.mojom.AudioStreamFactory": true, "media.mojom.CastApplicationMediaInfoManager": true, "media.mojom.CdmContextEventCallback": true, "media.mojom.CdmContextForOOPVD": true, "media.mojom.CdmDocumentService": true, "media.mojom.CdmService": true, "media.mojom.CdmServiceBroker": true, "media.mojom.CdmStorage": true, "media.mojom.CdmFile": true, "media.mojom.ContentDecryptionModule": true, "media.mojom.ContentDecryptionModuleClient": true, "media.mojom.CdmFactory": true, "media.mojom.DCOMPSurfaceRegistry": true, "media.mojom.Decryptor": true, "media.mojom.FrameResourceReleaser": true, "media.mojom.DemuxerStream": true, "media.mojom.MuteStateObserver": true, "media.mojom.FrameInterfaceFactory": true, "media.mojom.FuchsiaMediaCdmProvider": true, "media.mojom.FuchsiaMediaCodecProvider": true, "media.mojom.VideoDecoderTracker": true, "media.mojom.InterfaceFactory": true, "media.mojom.KeySystemSupportObserver": true, "media.mojom.KeySystemSupport": true, "media.mojom.MediaDrmStorage": true, "media.mojom.MediaFoundationPreferences": true, "media.mojom.GpuInfoObserver": true, "media.mojom.MediaFoundationService": true, "media.mojom.MediaFoundationServiceBroker": true, "media.mojom.MediaLog": true, "media.mojom.MediaMetricsProvider": true, "media.mojom.MediaPlayer": true, "media.mojom.MediaPlayerObserverClient": true, "media.mojom.MediaPlayerObserver": true, "media.mojom.MediaPlayerHost": true, "media.mojom.MediaService": true, "media.mojom.MediaDrmSupport": true, "media.mojom.OutputProtection": true, "media.mojom.PlaybackEventsRecorder": true, "media.mojom.ProvisionFetcher": true, "media.mojom.RemoterFactory": true, "media.mojom.RemotingDataStreamSender": true, "media.mojom.Remoter": true, "media.mojom.RemotingSource": true, "media.mojom.Remotee": true, "media.mojom.RemotingSink": true, "media.mojom.RemotingDataStreamReceiver": true, "media.mojom.Renderer": true, "media.mojom.RendererClient": true, "media.mojom.FlingingRendererClientExtension": true, "media.mojom.MediaFoundationRendererExtension": true, "media.mojom.MediaFoundationRendererObserver": true, "media.mojom.MediaFoundationRendererNotifier": true, "media.mojom.SpeechRecognitionContext": true, "media.mojom.SpeechRecognitionRecognizer": true, "media.mojom.SpeechRecognitionRecognizerClient": true, "media.mojom.SpeechRecognitionBrowserObserver": true, "media.mojom.SpeechRecognitionSurface": true, "media.mojom.SpeechRecognitionSurfaceClient": true, "media.mojom.SpeechRecognitionClientBrowserInterface": true, "media.mojom.SpeechRecognitionAudioForwarder": true, "media.mojom.AudioSourceSpeechRecognitionContext": true, "media.mojom.SpeechRecognitionService": true, "media.mojom.AudioSourceFetcher": true, "media.mojom.SpeechRecognizer": true, "media.mojom.OnDeviceSpeechRecognition": true, "media.mojom.SpeechRecognitionSession": true, "media.mojom.SpeechRecognitionSessionClient": true, "media.mojom.VideoDecodePerfHistory": true, "media.mojom.VideoDecodeStatsRecorder": true, "media.mojom.VideoFrameHandleReleaser": true, "media.mojom.VideoDecoder": true, "media.mojom.VideoDecoderClient": true, "media.mojom.VideoDecoderFactoryProcess": true, "media.mojom.VideoEncodeAcceleratorProvider": true, "media.mojom.VideoEncodeAcceleratorProviderFactory": true, "media.mojom.VideoEncodeAccelerator": true, "media.mojom.VideoEncodeAcceleratorClient": true, "media.mojom.VideoEncoderMetricsProvider": true, "media.mojom.WatchTimeRecorder": true, "media.mojom.WebrtcVideoPerfRecorder": true, "media.mojom.WebrtcVideoPerfHistory": true, "mojo_base.mojom.Binder": true, "mojo_base.mojom.GenericAssociatedInterface": true, "fuzz.mojom.FuzzDummyInterface": true, "fuzz.mojom.FuzzInterface": true, "pdf.mojom.SaveDataBufferHandler": true, "pdf.mojom.PdfListener": true, "pdf.mojom.PdfHost": true, "remoting.mojom.ChromotingHostServices": true, "remoting.mojom.ChromotingSessionServices": true, "remoting.mojom.DesktopSessionRequestHandler": true, "remoting.mojom.DesktopSession": true, "remoting.mojom.DesktopSessionEvents": true, "remoting.mojom.DesktopSessionManager": true, "remoting.mojom.DesktopSessionAgent": true, "remoting.mojom.FileWriter": true, "remoting.mojom.FileReader": true, "remoting.mojom.DesktopSessionControl": true, "remoting.mojom.VideoCapturer": true, "remoting.mojom.VideoCapturerEventHandler": true, "remoting.mojom.DesktopSessionEventHandler": true, "remoting.mojom.DesktopSessionStateHandler": true, "remoting.mojom.WorkerProcessControl": true, "remoting.mojom.DesktopProcessControl": true, "remoting.mojom.LoginSessionService": true, "remoting.mojom.PeerSessionManager": true, "remoting.mojom.PeerSessionEventHandler": true, "remoting.mojom.TransportEventHandler": true, "remoting.mojom.IceConfigFetcher": true, "remoting.mojom.PairingRequester": true, "remoting.mojom.PeerSession": true, "remoting.mojom.PeerConnectionProcessControl": true, "remoting.mojom.SecurityKeyForwarder": true, "remoting.mojom.SupportHostObserver": true, "remoting.mojom.RemoteUrlOpener": true, "remoting.mojom.RemotingHostControl": true, "remoting.mojom.HostStatusObserver": true, "remoting.mojom.WebAuthnRequestCanceller": true, "remoting.mojom.WebAuthnProxy": true, "sandbox.mac.mojom.TraitsTestService": true, "ax.android.mojom.AccessibilityHelperHost": true, "ax.android.mojom.AccessibilityHelperInstance": true, "ax.mojom.AccessibilityService": true, "ax.mojom.AccessibilityServiceClient": true, "ax.mojom.Automation": true, "ax.mojom.AutomationClient": true, "audio.mojom.AudioService": true, "audio.mojom.DebugRecordingFileProvider": true, "audio.mojom.DebugRecording": true, "audio.mojom.DeviceListener": true, "audio.mojom.DeviceNotifier": true, "audio.mojom.LogFactoryManager": true, "audio.mojom.MlModelManager": true, "audio.mojom.SystemInfo": true, "audio.mojom.TestingApi": true, "cert_verifier.mojom.CertVerifierServiceFactory": true, "data_decoder.mojom.DataDecoderService": true, "data_decoder.mojom.Gzipper": true, "data_decoder.mojom.ImageDecoder": true, "data_decoder.mojom.StructuredHeadersParser": true, "data_decoder.mojom.XmlParser": true, "device.mojom.BatteryMonitor": true, "device.mojom.DeviceService": true, "device.mojom.FingerprintObserver": true, "device.mojom.Fingerprint": true, "device.mojom.Geolocation": true, "device.mojom.GeolocationContext": true, "device.mojom.GeolocationControl": true, "device.mojom.GeolocationInternalsObserver": true, "device.mojom.GeolocationInternals": true, "device.mojom.HidManagerClient": true, "device.mojom.HidManager": true, "device.mojom.HidConnection": true, "device.mojom.HidConnectionClient": true, "device.mojom.HidConnectionWatcher": true, "device.mojom.InputDeviceManagerClient": true, "device.mojom.InputDeviceManager": true, "device.mojom.MtpManagerClient": true, "device.mojom.MtpManager": true, "device.mojom.NFC": true, "device.mojom.NFCClient": true, "device.mojom.NFCProvider": true, "device.mojom.PowerMonitor": true, "device.mojom.PowerMonitorClient": true, "device.mojom.PressureManager": true, "device.mojom.PressureClient": true, "device.mojom.PublicIpAddressGeolocationProvider": true, "device.mojom.ScreenOrientation": true, "device.mojom.ScreenOrientationListener": true, "device.mojom.Sensor": false, "device.mojom.SensorClient": false, "device.mojom.SensorClientController": false, "device.mojom.SensorProvider": false, "device.mojom.SerialPortManager": true, "device.mojom.SerialPortManagerClient": true, "device.mojom.SerialPort": true, "device.mojom.SerialPortClient": true, "device.mojom.SerialPortConnectionWatcher": true, "device.mojom.SmartCardTransaction": true, "device.mojom.SmartCardConnection": true, "device.mojom.SmartCardConnectionWatcher": true, "device.mojom.SmartCardContext": true, "device.mojom.SmartCardContextFactory": true, "device.mojom.TimeZoneMonitor": true, "device.mojom.TimeZoneMonitorClient": true, "device.mojom.UsbDevice": false, "device.mojom.UsbDeviceClient": false, "device.mojom.UsbDeviceManager": false, "device.mojom.UsbDeviceManagerClient": false, "device.mojom.UsbDeviceManagerTest": true, "device.mojom.VibrationManager": true, "device.mojom.VibrationManagerListener": true, "device.mojom.WakeLock": true, "device.mojom.WakeLockContext": true, "device.mojom.WakeLockProvider": true, "device.mojom.WakeLockObserver": true, "image_annotation.mojom.ImageProcessor": true, "image_annotation.mojom.Annotator": true, "image_annotation.mojom.ImageAnnotationService": true, "media_session.mojom.AudioFocusObserver": true, "media_session.mojom.AudioFocusRequestClient": true, "media_session.mojom.AudioFocusManager": true, "media_session.mojom.AudioFocusManagerDebug": true, "media_session.mojom.MediaControllerManager": true, "media_session.mojom.MediaController": true, "media_session.mojom.MediaControllerObserver": true, "media_session.mojom.MediaControllerImageObserver": true, "media_session.mojom.MediaSessionObserver": true, "media_session.mojom.MediaSession": true, "media_session.mojom.MediaSessionService": true, "ukm.mojom.SingularUkmInterface": true, "ukm.mojom.UkmRecorderClientInterface": true, "ukm.mojom.UkmRecorderInterface": true, "ukm.mojom.UkmRecorderFactory": true, "network.mojom.TraitsTestService": true, "network.mojom.AcceptCHFrameObserver": true, "network.mojom.CacheEncryptionProvider": true, "cert_verifier.mojom.URLLoaderFactoryConnector": true, "cert_verifier.mojom.CertVerifierService": true, "cert_verifier.mojom.CertVerifierServiceClient": true, "cert_verifier.mojom.CertVerifierRequest": true, "cert_verifier.mojom.CertVerifierServiceUpdater": true, "network.mojom.ChunkedDataPipeGetter": true, "network.mojom.ConnectionChangeObserverClient": true, "network.mojom.CookieAccessObserver": true, "network.mojom.CookieEncryptionProvider": true, "network.mojom.CookieChangeListener": true, "network.mojom.CookieManager": true, "network.mojom.CrossOriginEmbedderPolicyReporter": true, "network.mojom.CrossOriginOpenerPolicyReporter": true, "network.mojom.DataPipeGetter": true, "network.mojom.DeviceBoundSessionManager": true, "network.mojom.DeviceBoundSessionAccessObserver": true, "network.mojom.DeviceBoundSessionEventObserver": true, "network.mojom.DevToolsObserver": true, "network.mojom.DocumentIsolationPolicyReporter": true, "network.mojom.FirstPartySetsAccessDelegate": true, "network.mojom.ResolveHostHandle": true, "network.mojom.ResolveHostClient": true, "network.mojom.MdnsListenClient": true, "network.mojom.HostResolver": true, "network.mojom.DnsConfigChangeManagerClient": true, "network.mojom.DnsConfigChangeManager": true, "network.mojom.FileEnumerator": true, "network.mojom.HttpCacheBackendFileOperations": true, "network.mojom.HttpCacheBackendFileOperationsFactory": true, "network.mojom.MdnsResponder": true, "network.mojom.NetLogExporter": true, "network.mojom.NetLogProxySource": true, "network.mojom.NetLogProxySink": true, "network.mojom.NetworkAnnotationMonitor": true, "network.mojom.NetworkChangeManagerClient": true, "network.mojom.NetworkChangeManager": true, "network.mojom.CustomProxyConnectionObserver": true, "network.mojom.CustomProxyConfigClient": true, "network.mojom.TrustedHeaderClient": true, "network.mojom.TrustedURLLoaderHeaderClient": true, "network.mojom.PreloadedSharedDictionaryInfoHandle": true, "network.mojom.NetworkContext": true, "network.mojom.NetworkContextClient": true, "network.mojom.NetworkInterfaceChangeListener": true, "network.mojom.NetworkQualityEstimatorManagerClient": true, "network.mojom.NetworkQualityEstimatorManager": true, "network.mojom.NetworkService": true, "network.mojom.NetworkContextCreator": true, "network.mojom.DurableMessageCollector": true, "network.mojom.SimpleCacheEntry": true, "network.mojom.SimpleCacheEntryEnumerator": true, "network.mojom.SimpleCache": true, "network.mojom.NetworkServiceTest": true, "network.mojom.ObliviousHttpClient": true, "network.mojom.P2PNetworkNotificationClient": true, "network.mojom.P2PSocketManager": true, "network.mojom.P2PSocket": true, "network.mojom.P2PSocketClient": true, "network.mojom.P2PTrustedSocketManagerClient": true, "network.mojom.P2PTrustedSocketManager": true, "network.mojom.ProxyConfigClient": true, "network.mojom.ProxyConfigPollerClient": true, "network.mojom.ProxyErrorClient": true, "network.mojom.ProxyLookupClient": true, "network.mojom.ProxyResolvingSocket": true, "network.mojom.ProxyResolvingSocketFactory": true, "network.mojom.ReportingApiObserver": true, "network.mojom.RestrictedCookieManager": true, "network.mojom.RestrictedUDPSocket": true, "network.mojom.SharedDictionaryAccessObserver": true, "network.mojom.SocketBroker": true, "network.mojom.SocketConnectionTracker": true, "network.mojom.SocketFactory": true, "network.mojom.SSLConfigClient": true, "network.mojom.SystemDnsResolver": true, "network.mojom.TCPBoundSocket": true, "network.mojom.TCPConnectedSocket": true, "network.mojom.SocketObserver": true, "network.mojom.TCPServerSocket": true, "network.mojom.TLSClientSocket": true, "network.mojom.TrustTokenAccessObserver": true, "network.mojom.TrustTokenQueryAnswerer": true, "network.mojom.UDPSocket": true, "network.mojom.UDPSocketListener": true, "network.mojom.URLLoader": true, "network.mojom.URLLoaderClient": true, "network.mojom.URLLoaderFactory": true, "network.mojom.ClientCertificateResponder": true, "network.mojom.SSLPrivateKey": true, "network.mojom.AuthChallengeResponder": true, "network.mojom.URLLoaderNetworkServiceObserver": true, "network.mojom.WebBundleHandle": true, "network.mojom.WebTransport": true, "network.mojom.WebTransportClient": true, "network.mojom.WebTransportHandshakeClient": true, "network.mojom.WebSocketAuthenticationHandler": true, "network.mojom.WebSocketHandshakeClient": true, "network.mojom.WebSocketClient": true, "network.mojom.WebSocket": true, "on_device_model.mojom.DownloadObserver": true, "on_device_model.mojom.StreamingResponder": true, "on_device_model.mojom.ContextClient": true, "on_device_model.mojom.Session": true, "on_device_model.mojom.OnDeviceModel": true, "on_device_model.mojom.TextSafetySession": true, "on_device_model.mojom.TextSafetyModel": true, "on_device_model.mojom.AsrStreamResponder": true, "on_device_model.mojom.AsrStreamInput": true, "on_device_model.mojom.PlatformModelProgressObserver": true, "on_device_model.mojom.OnDeviceModelService": true, "on_device_model.mojom.OnDeviceModelPlatformService": true, "passage_embeddings.mojom.PassageEmbedder": true, "passage_embeddings.mojom.PassageEmbeddingsService": true, "prefs.mojom.ResetOnLoadObserver": true, "prefs.mojom.TrackedPreferenceValidationDelegate": true, "proxy_resolver.mojom.HostResolverRequestClient": true, "proxy_resolver.mojom.ProxyResolver": true, "proxy_resolver.mojom.ProxyResolverRequestClient": true, "proxy_resolver.mojom.ProxyResolverFactory": true, "proxy_resolver.mojom.ProxyResolverFactoryRequestClient": true, "proxy_resolver.mojom.SystemProxyResolver": true, "memory_instrumentation.mojom.ClientProcess": true, "memory_instrumentation.mojom.HeapProfiler": true, "memory_instrumentation.mojom.HeapProfilerHelper": true, "memory_instrumentation.mojom.Coordinator": true, "memory_instrumentation.mojom.CoordinatorConnector": true, "screen_ai.mojom.ScreenAIServiceShutdownHandler": true, "screen_ai.mojom.ScreenAIServiceFactory": true, "screen_ai.mojom.ScreenAIAnnotator": true, "screen_ai.mojom.Screen2xMainContentExtractor": true, "screen_ai.mojom.OCRService": true, "screen_ai.mojom.MainContentExtractionService": true, "service_manager.mojom.ProcessMetadata": true, "service_manager.mojom.Connector": true, "service_manager.mojom.InterfaceProvider": true, "service_manager.mojom.Service": true, "service_manager.mojom.ServiceControl": true, "service_manager.mojom.ServiceManagerListener": true, "service_manager.mojom.ServiceManager": true, "shape_detection.mojom.BarcodeDetection": true, "shape_detection.mojom.BarcodeDetectionProvider": true, "shape_detection.mojom.FaceDetection": true, "shape_detection.mojom.FaceDetectionProvider": true, "shape_detection.mojom.ShapeDetectionService": true, "shape_detection.mojom.TextDetection": true, "echo.mojom.EchoService": true, "tracing.mojom.BackgroundTracingAgentClient": true, "tracing.mojom.BackgroundTracingAgent": true, "tracing.mojom.BackgroundTracingAgentProvider": true, "tracing.mojom.ProducerHost": true, "tracing.mojom.ProducerClient": true, "tracing.mojom.PerfettoService": true, "tracing.mojom.ConsumerHost": true, "tracing.mojom.TracingSessionHost": true, "tracing.mojom.TracingSessionClient": true, "tracing.mojom.SystemTracingService": true, "tracing.mojom.TracedProcess": true, "tracing.mojom.TracingService": true, "video_capture.mojom.Device": true, "video_capture.mojom.DevicesChangedObserver": true, "video_capture.mojom.Producer": true, "video_capture.mojom.TestingControls": true, "video_capture.mojom.VideoCaptureService": true, "video_capture.mojom.VideoFrameAccessHandler": true, "video_capture.mojom.VideoFrameHandler": true, "video_capture.mojom.PushVideoStreamSubscription": true, "video_capture.mojom.VideoSource": true, "video_capture.mojom.VideoSourceProvider": true, "video_capture.mojom.SharedMemoryVirtualDevice": true, "video_capture.mojom.TextureVirtualDevice": true, "video_capture.mojom.GpuMemoryBufferVirtualDevice": true, "viz.mojom.BeginFrameObserver": true, "viz.mojom.DisplayPrivate": true, "viz.mojom.DisplayClient": true, "viz.mojom.ExternalBeginFrameController": true, "viz.mojom.ExternalBeginFrameControllerClient": true, "viz.mojom.FrameSinkManager": true, "viz.mojom.FrameSinkManagerClient": true, "viz.mojom.RendererInputRouterDelegateRegistry": true, "viz.mojom.FrameSinkManagerTestApi": true, "viz.mojom.FrameSinkVideoConsumerFrameCallbacks": true, "viz.mojom.FrameSinkVideoConsumer": true, "viz.mojom.FrameSinkVideoCapturer": true, "viz.mojom.FrameSinkVideoCaptureOverlay": true, "viz.mojom.FrameSinksMetricsRecorder": true, "viz.mojom.LayeredWindowUpdater": true, "viz.mojom.VSyncParameterObserver": true, "viz.mojom.GpuHost": true, "viz.mojom.GpuLogging": true, "viz.mojom.GpuService": true, "viz.mojom.InfoCollectionGpuService": true, "viz.mojom.VizMain": true, "viz.mojom.CompositingModeWatcher": true, "viz.mojom.CompositingModeReporter": true, "viz.mojom.CompositorFrameSink": true, "viz.mojom.CompositorFrameSinkClient": true, "viz.mojom.CopyOutputResultSender": true, "viz.mojom.FrameSinkBundle": true, "viz.mojom.FrameSinkBundleClient": true, "viz.mojom.LayerContext": true, "viz.mojom.LayerContextClient": true, "viz.mojom.TextureReleaser": true, "viz.mojom.VideoDetectorObserver": true, "viz.mojom.Gpu": true, "viz.mojom.InputTargetClient": true, "webnn.mojom.WebNNCompilerContext": true, "webnn.mojom.WebNNCompilerService": true, "webnn.mojom.WebNNContext": true, "webnn.mojom.WebNNContextProvider": true, "webnn.mojom.WeightsFileSession": true, "webnn.mojom.WebNNWeightsFileCreator": true, "webnn.mojom.WebNNGraphBuilder": true, "webnn.mojom.WebNNModelLoader": true, "webnn.mojom.WebNNServiceIntrospectionClient": true, "webnn.mojom.WebNNServiceIntrospection": true, "webnn.mojom.WebNNTensor": true, "storage.mojom.QuotaInternalsHandler": true, "storage.mojom.QuotaManagerObserver": true, "blink.mojom.AIManagerCreateLanguageModelClient": false, "blink.mojom.AILanguageModel": false, "blink.mojom.AIManagerCreateWriterClient": false, "blink.mojom.AIManagerCreateRewriterClient": false, "blink.mojom.AIManagerCreateSummarizerClient": false, "blink.mojom.AIManagerCreateProofreaderClient": false, "blink.mojom.AIManagerCreateSemanticEmbedderClient": false, "blink.mojom.AIManager": false, "blink.mojom.AIProofreader": false, "blink.mojom.AIRewriter": false, "blink.mojom.AISemanticEmbedder": false, "blink.mojom.AISummarizer": false, "blink.mojom.AIWriter": false, "blink.mojom.ModelStreamingResponder": false, "blink.mojom.AndroidFontLookup": false, "blink.mojom.AnnotationAgent": false, "blink.mojom.AnnotationAgentHost": false, "blink.mojom.AnnotationAgentContainer": false, "blink.mojom.AppBannerController": false, "blink.mojom.AppBannerEvent": false, "blink.mojom.AppBannerService": false, "blink.mojom.AssociatedInterface": false, "blink.mojom.AssociatedInterfaceProvider": false, "blink.mojom.AutoplayConfigurationClient": false, "blink.mojom.BackgroundFetchRegistrationObserver": false, "blink.mojom.BackgroundFetchService": false, "blink.mojom.BackgroundFetchRegistrationService": false, "blink.mojom.OneShotBackgroundSyncService": false, "blink.mojom.PeriodicBackgroundSyncService": false, "blink.mojom.BadgeService": false, "blink.mojom.BlobReaderClient": false, "blink.mojom.Blob": false, "blink.mojom.ProgressClient": false, "blink.mojom.BlobRegistry": false, "blink.mojom.BlobURLStore": false, "blink.mojom.BlobURLToken": false, "blink.mojom.BytesProvider": false, "blink.mojom.FileBackedBlobFactory": false, "blink.mojom.WebBluetoothService": true, "blink.mojom.WebBluetoothServerClient": true, "blink.mojom.WebBluetoothCharacteristicClient": true, "blink.mojom.WebBluetoothAdvertisementClient": true, "blink.mojom.BroadcastChannelClient": true, "blink.mojom.BroadcastChannelProvider": true, "blink.mojom.BrowserInterfaceBroker": false, "blink.mojom.BucketHost": true, "blink.mojom.BucketManagerHost": true, "blink.mojom.CacheStorageCache": false, "blink.mojom.CacheStorage": false, "blink.mojom.CallStackGenerator": false, "blink.mojom.ColorChooserFactory": false, "blink.mojom.ColorChooser": false, "blink.mojom.ColorChooserClient": false, "blink.mojom.EyeDropperChooser": false, "blink.mojom.DateTimeChooser": false, "blink.mojom.FileChooser": false, "blink.mojom.PopupMenuClient": false, "blink.mojom.ClipboardListener": false, "blink.mojom.ClipboardHost": false, "blink.mojom.CloseListener": false, "blink.mojom.WebPressureManager": false, "blink.mojom.WebPressureClient": false, "blink.mojom.ContactsManager": false, "blink.mojom.AIPageContentAgent": false, "blink.mojom.PaidContentMetadataObserver": false, "blink.mojom.MetaTagsObserver": false, "blink.mojom.FrameMetadataObserverRegistry": false, "blink.mojom.InnerHtmlAgent": false, "blink.mojom.InnerTextAgent": false, "blink.mojom.ScriptToolHost": false, "blink.mojom.ModelContextHost": false, "blink.mojom.ModelContext": false, "blink.mojom.ContentIndexService": false, "blink.mojom.ContextMenuClient": false, "blink.mojom.CookieStore": false, "blink.mojom.CrashMemoryMetricsReporter": false, "blink.mojom.CredentialManager": true, "blink.mojom.ManagedConfigurationObserver": false, "blink.mojom.DeviceAPIService": false, "blink.mojom.ManagedConfigurationService": false, "blink.mojom.DevicePostureProvider": false, "blink.mojom.DevicePostureClient": false, "blink.mojom.DevToolsAgent": false, "blink.mojom.DevToolsAgentHost": false, "blink.mojom.DevToolsSession": false, "blink.mojom.DevToolsSessionHost": false, "blink.mojom.DevToolsFrontend": false, "blink.mojom.DevToolsFrontendHost": false, "payments.mojom.DigitalGoods": false, "payments.mojom.DigitalGoodsFactory": false, "blink.mojom.DirectSocketsService": true, "blink.mojom.DiskAllocator": false, "blink.mojom.DocumentMetadata": false, "blink.mojom.DomStorageProvider": false, "blink.mojom.DomStorage": false, "blink.mojom.DomStorageClient": false, "blink.mojom.SessionStorageNamespace": false, "blink.mojom.StorageAreaObserver": false, "blink.mojom.StorageArea": false, "blink.mojom.DWriteFontProxy": true, "payments.facilitated.mojom.PaymentLinkHandler": false, "blink.mojom.ObservedFeature": false, "blink.mojom.FeatureObserver": false, "blink.mojom.FencedFrameOwnerHost": true, "blink.mojom.FileUtilitiesHost": false, "blink.mojom.FileSystemAccessAccessHandleHost": false, "blink.mojom.FileSystemAccessDataTransferToken": false, "blink.mojom.FileSystemAccessDirectoryEntriesListener": false, "blink.mojom.FileSystemAccessDirectoryHandle": false, "blink.mojom.FileSystemAccessFileDelegateHost": false, "blink.mojom.FileSystemAccessFileHandle": false, "blink.mojom.FileSystemAccessFileModificationHost": false, "blink.mojom.FileSystemAccessFileWriter": false, "blink.mojom.FileSystemAccessManager": false, "blink.mojom.FileSystemAccessObserver": false, "blink.mojom.FileSystemAccessObserverHost": false, "blink.mojom.FileSystemAccessTransferToken": false, "blink.mojom.FileSystemCancellableOperation": false, "blink.mojom.FileSystemOperationListener": false, "blink.mojom.ReceivedSnapshotListener": false, "blink.mojom.FileSystemManager": false, "blink.mojom.FontAccessManager": false, "blink.mojom.FontUniqueNameLookup": false, "blink.mojom.BackForwardCacheControllerHost": true, "blink.mojom.FindInPage": true, "blink.mojom.FindInPageClient": true, "blink.mojom.LocalFrameHost": true, "blink.mojom.NonAssociatedLocalFrameHost": true, "blink.mojom.LocalFrame": true, "blink.mojom.LocalMainFrame": true, "blink.mojom.LocalMainFrameHost": true, "blink.mojom.PolicyContainerHost": false, "blink.mojom.NavigationStateKeepAliveHandle": true, "blink.mojom.RemoteFrameHost": true, "blink.mojom.RemoteFrame": true, "blink.mojom.RemoteMainFrame": true, "blink.mojom.RemoteMainFrameHost": true, "blink.mojom.ReportingObserver": true, "blink.mojom.SurfaceEmbedder": true, "blink.mojom.EmbeddedFrameSinkClient": true, "blink.mojom.EmbeddedFrameSinkProvider": true, "blink.mojom.GeolocationService": false, "blink.mojom.GpuDataManager": true, "handwriting.mojom.HandwritingRecognizer": false, "handwriting.mojom.HandwritingRecognitionService": false, "blink.mojom.HapticsService": false, "blink.mojom.HidService": false, "blink.mojom.Hyphenation": false, "blink.mojom.IdleMonitor": false, "blink.mojom.IdleManager": false, "blink.mojom.ImageDownloader": false, "blink.mojom.ImageReplacement": false, "blink.mojom.ImageReplacementHost": false, "blink.mojom.IDBFactoryClient": true, "blink.mojom.IDBDatabaseCallbacks": true, "blink.mojom.IDBCursor": true, "blink.mojom.IDBTransaction": true, "blink.mojom.IDBDatabaseGetAllResultSink": true, "blink.mojom.IDBDatabase": true, "blink.mojom.IDBFactory": true, "blink.mojom.ImeRenderWidgetHost": false, "blink.mojom.WidgetInputHandlerHost": false, "blink.mojom.FrameWidgetInputHandler": false, "blink.mojom.WidgetInputHandler": false, "blink.mojom.TextSuggestionHost": false, "blink.mojom.TextSuggestionBackend": false, "blink.mojom.PointerLockContext": false, "blink.mojom.SynchronousCompositor": true, "blink.mojom.SynchronousCompositorHost": true, "blink.mojom.SynchronousCompositorControlHost": true, "blink.mojom.TextInputHost": true, "blink.mojom.InstallationService": false, "blink.mojom.InstalledAppProvider": false, "blink.mojom.KeyboardLockService": false, "blink.mojom.LCPCriticalPathPredictorHost": false, "blink.mojom.LeakDetector": false, "blink.mojom.TextFragmentReceiver": false, "blink.mojom.CodeCacheHost": false, "blink.mojom.ContentSecurityNotifier": false, "blink.mojom.FetchLaterLoaderFactory": false, "blink.mojom.FetchLaterLoader": false, "blink.mojom.KeepAliveHandle": false, "blink.mojom.KeepAliveHandleFactory": false, "blink.mojom.AnchorElementMetricsHost": false, "blink.mojom.PauseSubresourceLoadingHandle": false, "blink.mojom.ResourceLoadInfoNotifier": false, "blink.mojom.LockScreenService": false, "blink.mojom.LockHandle": false, "blink.mojom.LockRequest": false, "blink.mojom.LockManager": false, "blink.mojom.ManifestManager": false, "blink.mojom.ManifestUrlChangeObserver": false, "blink.mojom.FullscreenVideoElementHandler": false, "blink.mojom.RendererAudioInputStreamFactory": false, "blink.mojom.RendererAudioInputStreamFactoryClient": false, "blink.mojom.RendererAudioOutputStreamFactory": false, "blink.mojom.MediaSessionClient": false, "blink.mojom.MediaSessionService": false, "blink.mojom.AecDumpAgent": false, "blink.mojom.AecDumpManager": false, "blink.mojom.MediaDevicesDispatcherHost": false, "blink.mojom.MediaDevicesListener": false, "blink.mojom.MediaStreamDeviceObserver": false, "blink.mojom.MediaStreamDispatcherHost": false, "blink.mojom.MediaStreamTrackMetricsHost": false, "blink.mojom.MemoryUsageMonitorLinux": true, "blink.mojom.ImageReleaseCallback": true, "blink.mojom.MimeRegistry": false, "blink.mojom.NavigationResumeDeferredCommitListener": true, "blink.mojom.NonPersistentNotificationListener": false, "blink.mojom.NotificationService": false, "blink.mojom.TranslationManagerCreateTranslatorClient": false, "blink.mojom.TranslationManager": false, "blink.mojom.Translator": false, "blink.mojom.OomInterventionHost": false, "blink.mojom.OomIntervention": false, "blink.mojom.OriginTrialStateHost": true, "blink.mojom.DisplayCutoutHost": true, "blink.mojom.DisplayCutoutClient": true, "blink.mojom.PageBroadcast": true, "blink.mojom.FrameWidget": true, "blink.mojom.FrameWidgetHost": true, "blink.mojom.PopupWidgetHost": true, "payments.mojom.PaymentManager": false, "payments.mojom.PaymentHandlerResponseCallback": false, "payments.mojom.PaymentHandlerHost": false, "payments.mojom.PaymentRequestClient": false, "payments.mojom.PaymentRequest": false, "payments.mojom.SecurePaymentConfirmationService": false, "blink.mojom.PeerConnectionManager": false, "blink.mojom.PeerConnectionTrackerHost": false, "blink.mojom.V8DetailedMemoryReporter": false, "blink.mojom.PermissionObserver": false, "blink.mojom.EmbeddedPermissionControlClient": false, "blink.mojom.PermissionService": false, "blink.mojom.PersistentRendererPrefsService": false, "blink.mojom.PictureInPictureSessionObserver": false, "blink.mojom.PictureInPictureSession": false, "blink.mojom.PictureInPictureService": false, "blink.mojom.PluginRegistry": false, "blink.mojom.AnchorElementInteractionHost": false, "blink.mojom.NoStatePrefetchProcessor": false, "blink.mojom.PresentationConnection": false, "blink.mojom.PresentationService": false, "blink.mojom.PresentationController": false, "blink.mojom.PresentationReceiver": false, "blink.mojom.WebPrintJobStateObserver": true, "blink.mojom.WebPrintJobController": true, "blink.mojom.WebPrinter": true, "blink.mojom.WebPrintingService": true, "blink.mojom.PushMessaging": false, "blink.mojom.QuotaManagerHost": false, "blink.mojom.RemoteObjectHost": true, "blink.mojom.RemoteObject": true, "blink.mojom.RemoteObjectGatewayFactory": true, "blink.mojom.RemoteObjectGateway": true, "blink.mojom.RenderAccessibilityHost": false, "blink.mojom.RenderAccessibility": false, "blink.mojom.RendererPreferenceWatcher": false, "blink.mojom.ReportingServiceProxy": false, "blink.mojom.WebSensorProvider": false, "blink.mojom.SerialService": false, "blink.mojom.SerialServiceClient": false, "blink.mojom.ControllerServiceWorker": true, "blink.mojom.ControllerServiceWorkerConnector": true, "blink.mojom.EmbeddedWorkerInstanceClient": true, "blink.mojom.EmbeddedWorkerInstanceHost": true, "blink.mojom.ServiceWorkerHost": true, "blink.mojom.ServiceWorker": true, "blink.mojom.ServiceWorkerContainerHost": true, "blink.mojom.ServiceWorkerContainer": true, "blink.mojom.ServiceWorkerFetchResponseCallback": false, "blink.mojom.ServiceWorkerInstalledScriptsManagerHost": false, "blink.mojom.ServiceWorkerInstalledScriptsManager": false, "blink.mojom.ServiceWorkerObjectHost": true, "blink.mojom.ServiceWorkerObject": true, "blink.mojom.ServiceWorkerRegistrationObjectHost": true, "blink.mojom.ServiceWorkerRegistrationObject": true, "blink.mojom.ServiceWorkerRunningStatusCallback": false, "blink.mojom.ServiceWorkerStreamCallback": false, "blink.mojom.ServiceWorkerWorkerClient": false, "blink.mojom.ServiceWorkerWorkerClientRegistry": false, "blink.mojom.SetShapeService": true, "blink.mojom.SmartCardService": false, "blink.mojom.WebOTPService": false, "blink.mojom.SpeculationHost": false, "blink.mojom.SpeechSynthesisVoiceListObserver": false, "blink.mojom.SpeechSynthesisClient": false, "blink.mojom.SpeechSynthesis": false, "blink.mojom.StorageAccessHandle": true, "blink.mojom.SubAppsService": false, "blink.mojom.DeclarativePerformanceObserverHost": false, "blink.mojom.UnboundedSurfaceHost": false, "blink.mojom.UnboundedSurfaceClient": false, "blink.mojom.UnhandledTapNotifier": true, "blink.mojom.WebUsbService": false, "blink.mojom.WakeLockService": false, "blink.mojom.WebInstallService": false, "blink.mojom.WebLaunchService": false, "blink.mojom.AudioContextManager": false, "blink.mojom.Authenticator": true, "blink.mojom.DigitalIdentityRequest": false, "blink.mojom.FederatedRequest": false, "blink.mojom.FederatedRequestService": false, "blink.mojom.WebNNIntrospectionClient": true, "blink.mojom.WebNNIntrospection": true, "blink.mojom.RTCLoggingDispatcher": false, "blink.mojom.ShareService": false, "blink.mojom.WebSocketConnector": false, "blink.mojom.WebTransportConnector": false, "blink.mojom.WebViewMediaIntegrityService": true, "blink.mojom.WebViewMediaIntegrityProvider": true, "blink.mojom.WidgetCompositor": false, "blink.mojom.WidgetHost": false, "blink.mojom.Widget": false, "blink.mojom.RenderInputRouterClient": false, "blink.mojom.DedicatedWorkerHost": false, "blink.mojom.DedicatedWorkerHostFactoryClient": true, "blink.mojom.DedicatedWorkerHostFactory": true, "blink.mojom.SharedWorker": true, "blink.mojom.SharedWorkerClient": false, "blink.mojom.SharedWorkerConnector": true, "blink.mojom.SharedWorkerFactory": true, "blink.mojom.SharedWorkerHost": false, "blink.mojom.SubresourceLoaderUpdater": false, "blink.mojom.WorkerContentSettingsProxy": false, "blink.mojom.WorkletDevToolsHost": false, "ui.mojom.IMEStructTraitsTest": true, "gfx.mojom.ImageTraitsTestService": true, "gfx.mojom.DelegatedInkPointRenderer": true, "gfx.mojom.TraitsTestService": true, "gfx.mojom.RangeTraitsTestService": true, "gl.mojom.TraitsTestService": true, "ui.ozone.mojom.DeviceCursor": true, "ui.ozone.mojom.DrmDevice": true, "ui.mojom.ScenicGpuHost": true, "ui.mojom.ScenicGpuService": true, "ui.ozone.mojom.WaylandBufferManagerHost": true, "ui.ozone.mojom.WaylandBufferManagerGpu": true, "wl.mojom.ConfigTraitsTestService": true, "ui.ozone.mojom.GesturePropertiesService": true, "webui_examples.mojom.PageHandlerFactory": true, "webui_examples.mojom.PageHandler": true, "app_management.mojom.PageHandlerFactory": true, "app_management.mojom.PageHandler": true, "app_management.mojom.Page": true, "color_change_listener.mojom.PageHandler": true, "color_change_listener.mojom.Page": true, "composebox.mojom.PageHandlerFactory": true, "composebox.mojom.PageHandler": true, "customize_color_scheme_mode.mojom.CustomizeColorSchemeModeHandlerFactory": true, "customize_color_scheme_mode.mojom.CustomizeColorSchemeModeHandler": true, "customize_color_scheme_mode.mojom.CustomizeColorSchemeModeClient": true, "custom_help_bubble.mojom.CustomHelpBubbleHandlerFactory": true, "custom_help_bubble.mojom.CustomHelpBubbleHandler": true, "help_bubble.mojom.HelpBubbleHandlerFactory": true, "help_bubble.mojom.PdfHelpBubbleHandlerFactory": true, "help_bubble.mojom.HelpBubbleHandler": true, "help_bubble.mojom.HelpBubbleClient": true, "history.mojom.ForeignSessionPageHandlerFactory": true, "history.mojom.ForeignSessionPageHandler": true, "history.mojom.ForeignSessionPage": true, "history.mojom.PageHandler": true, "history.mojom.Page": true, "history_cross_device_signin_promo.mojom.HistoryCrossDeviceSigninPromoHandler": true, "history_clusters.mojom.PageHandler": true, "history_clusters.mojom.Page": true, "history_clusters.mojom.PageHandlerFactory": true, "history_embeddings.mojom.PageHandlerFactory": true, "history_embeddings.mojom.PageHandler": true, "history_embeddings.mojom.Page": true, "most_visited.mojom.MostVisitedPageHandlerFactory": true, "most_visited.mojom.MostVisitedPageHandler": true, "most_visited.mojom.MostVisitedPage": true, "signin.mojom.SigninPageHandler": true, "signin.mojom.SigninPageHandlerFactory": true, "theme_color_picker.mojom.ThemeColorPickerHandlerFactory": true, "theme_color_picker.mojom.ThemeColorPickerHandler": true, "theme_color_picker.mojom.ThemeColorPickerClient": true, "batch_upload_promo.mojom.PageHandlerFactory": true, "batch_upload_promo.mojom.PageHandler": true, "batch_upload_promo.mojom.Page": true, "browser_command.mojom.CommandHandlerFactory": true, "browser_command.mojom.CommandHandler": true, "metrics_reporter.mojom.PageMetricsHost": true, "metrics_reporter.mojom.PageMetrics": true, "tracked_element.mojom.TrackedElementHandler": true, "tracked_element.mojom.TrackedElementManager": true, "url.mojom.UrlTest": true},
      // Lazy cache: keyed by "version|ifaceName"
      _ordinalCache: {},
      _lastVersion: null,
      getOrdinals: function(ifaceName, methodSpecs) {
        const params = new URLSearchParams(window.location.search);
        const forceNoScramble = params.get('scramble') === '0' || window.mojoNoScramble;
        
        // Check per-interface setting from BUILD.gn
        const shouldScramble = this._interfaceScrambleMap[ifaceName];
        if (shouldScramble === false || forceNoScramble) {
          // No scrambling: use explicit ordinals or sequential index
          return methodSpecs.map((ms, idx) => ms.explicit !== null ? ms.explicit : idx);
        }
        
        // Get current version (may change after async detection)
        const versionStr = window.mojoVersion || '154.0.8023.0';
        
        // Invalidate cache if version changed
        if (this._lastVersion !== versionStr) {
          this._ordinalCache = {};
          this._lastVersion = versionStr;
        }
        
        // Check cache
        const cacheKey = ifaceName;
        if (this._ordinalCache[cacheKey]) {
          return this._ordinalCache[cacheKey];
        }
        
        // Scrambling enabled: use SHA256 hash
        const p = versionStr.split('.');
        const salt = 'MAJOR=' + p[0] + '\n' + 'MINOR=' + (p[1]||0) + '\n' + 'BUILD=' + (p[2]||0) + '\n' + 'PATCH=' + (p[3]||0) + '\n';
        const shortName = ifaceName.split('.').pop();
        
        const seen = new Set();
        methodSpecs.forEach(ms => { if (ms.explicit !== null) seen.add(ms.explicit); });
        let i = 0;
        const ordinals = methodSpecs.map((ms, idx) => {
          if (ms.explicit !== null) return ms.explicit;
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
        
        // Cache the result
        this._ordinalCache[cacheKey] = ordinals;
        return ordinals;
      }
    };
  })();

 // Module namespace
 var mojo = mojo || {};
 mojo.internal = mojo.internal || {};
 mojo.internal.bindings = mojo.internal.bindings || {};
 
 // Fallback opaque struct type for unknown external types
 mojo.internal.OpaqueStruct = mojo.internal.OpaqueStruct || {
   $: {
     structSpec: { name: 'OpaqueStruct', packedSize: 8, fields: [], versions: [{version: 0, packedSize: 8}] },
     encode: function(value, encoder, byteOffset, bitOffset, nullable) {
       if (value !== null && value !== undefined) {
         console.warn('[MojoJS] Encoding OpaqueStruct! Field may be missing its real spec.', value);
       }
       encoder.encodeOffset(byteOffset, 0);
     },
     encodeNull: function(encoder, byteOffset) { },
     decode: function(decoder, byteOffset, bitOffset, nullable) {
       try {
         const offset = decoder.decodeOffset(byteOffset);
         return offset ? { _opaqueOffset: offset } : null;
       } catch (e) {
         return null;
       }
     },
     arrayElementSize: nullable => 8,
     isValidObjectKeyType: false,
   }
 };

 mojo.internal.bindings.device = mojo.internal.bindings.device || {};
mojo.internal.bindings.device.mojom = mojo.internal.bindings.device.mojom || {};
mojo.internal.bindings.mojo_base = mojo.internal.bindings.mojo_base || {};
mojo.internal.bindings.mojo_base.mojom = mojo.internal.bindings.mojo_base.mojom || {};
mojo.internal.bindings.gpu = mojo.internal.bindings.gpu || {};
mojo.internal.bindings.display = mojo.internal.bindings.display || {};
mojo.internal.bindings.gfx = mojo.internal.bindings.gfx || {};

mojo.internal.bindings.device.mojom.XRHandednessSpec = mojo.internal.bindings.device.mojom.XRHandednessSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.device.mojom.XRTargetRayModeSpec = mojo.internal.bindings.device.mojom.XRTargetRayModeSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.device.mojom.XRSessionFeatureRequestStatusSpec = mojo.internal.bindings.device.mojom.XRSessionFeatureRequestStatusSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.device.mojom.XREnvironmentBlendModeSpec = mojo.internal.bindings.device.mojom.XREnvironmentBlendModeSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.device.mojom.XRInteractionModeSpec = mojo.internal.bindings.device.mojom.XRInteractionModeSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.device.mojom.XREyeSpec = mojo.internal.bindings.device.mojom.XREyeSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.device.mojom.XRPresentationTransportMethodSpec = mojo.internal.bindings.device.mojom.XRPresentationTransportMethodSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.device.mojom.XRReferenceSpaceTypeSpec = mojo.internal.bindings.device.mojom.XRReferenceSpaceTypeSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.device.mojom.XRInputSourceSpaceTypeSpec = mojo.internal.bindings.device.mojom.XRInputSourceSpaceTypeSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.device.mojom.XRPlaneOrientationSpec = mojo.internal.bindings.device.mojom.XRPlaneOrientationSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.device.mojom.XRSemanticLabelSpec = mojo.internal.bindings.device.mojom.XRSemanticLabelSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.device.mojom.XRLayerLayoutSpec = mojo.internal.bindings.device.mojom.XRLayerLayoutSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.device.mojom.CreateCompositionLayerResultSpec = mojo.internal.bindings.device.mojom.CreateCompositionLayerResultSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.device.mojom.XrCompatibleResultSpec = mojo.internal.bindings.device.mojom.XrCompatibleResultSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.device.mojom.EntityTypeForHitTestSpec = mojo.internal.bindings.device.mojom.EntityTypeForHitTestSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.device.mojom.XRVisibilityStateSpec = mojo.internal.bindings.device.mojom.XRVisibilityStateSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.device.mojom.XRNativeOriginInformationSpec = mojo.internal.bindings.device.mojom.XRNativeOriginInformationSpec || { $: {} };
if (mojo.internal.bindings.device.mojom.XRNativeOriginInformationSpec.$.structSpec && mojo.internal.bindings.device.mojom.XRNativeOriginInformationSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.device.mojom.XRNativeOriginInformationSpec.$ = {};
mojo.internal.bindings.device.mojom.XRDepthDataSpec = mojo.internal.bindings.device.mojom.XRDepthDataSpec || { $: {} };
if (mojo.internal.bindings.device.mojom.XRDepthDataSpec.$.structSpec && mojo.internal.bindings.device.mojom.XRDepthDataSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.device.mojom.XRDepthDataSpec.$ = {};
mojo.internal.bindings.device.mojom.XRLayerSpecificDataSpec = mojo.internal.bindings.device.mojom.XRLayerSpecificDataSpec || { $: {} };
if (mojo.internal.bindings.device.mojom.XRLayerSpecificDataSpec.$.structSpec && mojo.internal.bindings.device.mojom.XRLayerSpecificDataSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.device.mojom.XRLayerSpecificDataSpec.$ = {};
mojo.internal.bindings.device.mojom.RequestSessionResultSpec = mojo.internal.bindings.device.mojom.RequestSessionResultSpec || { $: {} };
if (mojo.internal.bindings.device.mojom.RequestSessionResultSpec.$.structSpec && mojo.internal.bindings.device.mojom.RequestSessionResultSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.device.mojom.RequestSessionResultSpec.$ = {};
mojo.internal.bindings.device.mojom.XRDepthConfigSpec = mojo.internal.bindings.device.mojom.XRDepthConfigSpec || { $: {} };
if (mojo.internal.bindings.device.mojom.XRDepthConfigSpec.$.structSpec && mojo.internal.bindings.device.mojom.XRDepthConfigSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.device.mojom.XRDepthConfigSpec.$ = {};
mojo.internal.bindings.device.mojom.XRSessionDeviceConfigSpec = mojo.internal.bindings.device.mojom.XRSessionDeviceConfigSpec || { $: {} };
if (mojo.internal.bindings.device.mojom.XRSessionDeviceConfigSpec.$.structSpec && mojo.internal.bindings.device.mojom.XRSessionDeviceConfigSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.device.mojom.XRSessionDeviceConfigSpec.$ = {};
mojo.internal.bindings.device.mojom.XRSessionSpec = mojo.internal.bindings.device.mojom.XRSessionSpec || { $: {} };
if (mojo.internal.bindings.device.mojom.XRSessionSpec.$.structSpec && mojo.internal.bindings.device.mojom.XRSessionSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.device.mojom.XRSessionSpec.$ = {};
mojo.internal.bindings.device.mojom.XRPresentationConnectionSpec = mojo.internal.bindings.device.mojom.XRPresentationConnectionSpec || { $: {} };
if (mojo.internal.bindings.device.mojom.XRPresentationConnectionSpec.$.structSpec && mojo.internal.bindings.device.mojom.XRPresentationConnectionSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.device.mojom.XRPresentationConnectionSpec.$ = {};
mojo.internal.bindings.device.mojom.XRInputSourceDescriptionSpec = mojo.internal.bindings.device.mojom.XRInputSourceDescriptionSpec || { $: {} };
if (mojo.internal.bindings.device.mojom.XRInputSourceDescriptionSpec.$.structSpec && mojo.internal.bindings.device.mojom.XRInputSourceDescriptionSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.device.mojom.XRInputSourceDescriptionSpec.$ = {};
mojo.internal.bindings.device.mojom.XRInputSourceStateSpec = mojo.internal.bindings.device.mojom.XRInputSourceStateSpec || { $: {} };
if (mojo.internal.bindings.device.mojom.XRInputSourceStateSpec.$.structSpec && mojo.internal.bindings.device.mojom.XRInputSourceStateSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.device.mojom.XRInputSourceStateSpec.$ = {};
mojo.internal.bindings.device.mojom.VRFieldOfViewSpec = mojo.internal.bindings.device.mojom.VRFieldOfViewSpec || { $: {} };
if (mojo.internal.bindings.device.mojom.VRFieldOfViewSpec.$.structSpec && mojo.internal.bindings.device.mojom.VRFieldOfViewSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.device.mojom.VRFieldOfViewSpec.$ = {};
mojo.internal.bindings.device.mojom.VRPoseSpec = mojo.internal.bindings.device.mojom.VRPoseSpec || { $: {} };
if (mojo.internal.bindings.device.mojom.VRPoseSpec.$.structSpec && mojo.internal.bindings.device.mojom.VRPoseSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.device.mojom.VRPoseSpec.$ = {};
mojo.internal.bindings.device.mojom.PoseSpec = mojo.internal.bindings.device.mojom.PoseSpec || { $: {} };
if (mojo.internal.bindings.device.mojom.PoseSpec.$.structSpec && mojo.internal.bindings.device.mojom.PoseSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.device.mojom.PoseSpec.$ = {};
mojo.internal.bindings.device.mojom.AnchorIdSpec = mojo.internal.bindings.device.mojom.AnchorIdSpec || { $: {} };
if (mojo.internal.bindings.device.mojom.AnchorIdSpec.$.structSpec && mojo.internal.bindings.device.mojom.AnchorIdSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.device.mojom.AnchorIdSpec.$ = {};
mojo.internal.bindings.device.mojom.HitTestSubscriptionIdSpec = mojo.internal.bindings.device.mojom.HitTestSubscriptionIdSpec || { $: {} };
if (mojo.internal.bindings.device.mojom.HitTestSubscriptionIdSpec.$.structSpec && mojo.internal.bindings.device.mojom.HitTestSubscriptionIdSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.device.mojom.HitTestSubscriptionIdSpec.$ = {};
mojo.internal.bindings.device.mojom.PlaneIdSpec = mojo.internal.bindings.device.mojom.PlaneIdSpec || { $: {} };
if (mojo.internal.bindings.device.mojom.PlaneIdSpec.$.structSpec && mojo.internal.bindings.device.mojom.PlaneIdSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.device.mojom.PlaneIdSpec.$ = {};
mojo.internal.bindings.device.mojom.MeshIdSpec = mojo.internal.bindings.device.mojom.MeshIdSpec || { $: {} };
if (mojo.internal.bindings.device.mojom.MeshIdSpec.$.structSpec && mojo.internal.bindings.device.mojom.MeshIdSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.device.mojom.MeshIdSpec.$ = {};
mojo.internal.bindings.device.mojom.XrVisibilityMaskIdSpec = mojo.internal.bindings.device.mojom.XrVisibilityMaskIdSpec || { $: {} };
if (mojo.internal.bindings.device.mojom.XrVisibilityMaskIdSpec.$.structSpec && mojo.internal.bindings.device.mojom.XrVisibilityMaskIdSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.device.mojom.XrVisibilityMaskIdSpec.$ = {};
mojo.internal.bindings.device.mojom.XRRaySpec = mojo.internal.bindings.device.mojom.XRRaySpec || { $: {} };
if (mojo.internal.bindings.device.mojom.XRRaySpec.$.structSpec && mojo.internal.bindings.device.mojom.XRRaySpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.device.mojom.XRRaySpec.$ = {};
mojo.internal.bindings.device.mojom.XRHitResultSpec = mojo.internal.bindings.device.mojom.XRHitResultSpec || { $: {} };
if (mojo.internal.bindings.device.mojom.XRHitResultSpec.$.structSpec && mojo.internal.bindings.device.mojom.XRHitResultSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.device.mojom.XRHitResultSpec.$ = {};
mojo.internal.bindings.device.mojom.XRViewGeometrySpec = mojo.internal.bindings.device.mojom.XRViewGeometrySpec || { $: {} };
if (mojo.internal.bindings.device.mojom.XRViewGeometrySpec.$.structSpec && mojo.internal.bindings.device.mojom.XRViewGeometrySpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.device.mojom.XRViewGeometrySpec.$ = {};
mojo.internal.bindings.device.mojom.XRVisibilityMaskSpec = mojo.internal.bindings.device.mojom.XRVisibilityMaskSpec || { $: {} };
if (mojo.internal.bindings.device.mojom.XRVisibilityMaskSpec.$.structSpec && mojo.internal.bindings.device.mojom.XRVisibilityMaskSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.device.mojom.XRVisibilityMaskSpec.$ = {};
mojo.internal.bindings.device.mojom.XRViewSpec = mojo.internal.bindings.device.mojom.XRViewSpec || { $: {} };
if (mojo.internal.bindings.device.mojom.XRViewSpec.$.structSpec && mojo.internal.bindings.device.mojom.XRViewSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.device.mojom.XRViewSpec.$ = {};
mojo.internal.bindings.device.mojom.VRStageParametersSpec = mojo.internal.bindings.device.mojom.VRStageParametersSpec || { $: {} };
if (mojo.internal.bindings.device.mojom.VRStageParametersSpec.$.structSpec && mojo.internal.bindings.device.mojom.VRStageParametersSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.device.mojom.VRStageParametersSpec.$ = {};
mojo.internal.bindings.device.mojom.XRPresentationTransportOptionsSpec = mojo.internal.bindings.device.mojom.XRPresentationTransportOptionsSpec || { $: {} };
if (mojo.internal.bindings.device.mojom.XRPresentationTransportOptionsSpec.$.structSpec && mojo.internal.bindings.device.mojom.XRPresentationTransportOptionsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.device.mojom.XRPresentationTransportOptionsSpec.$ = {};
mojo.internal.bindings.device.mojom.XRInputSourceSpaceInfoSpec = mojo.internal.bindings.device.mojom.XRInputSourceSpaceInfoSpec || { $: {} };
if (mojo.internal.bindings.device.mojom.XRInputSourceSpaceInfoSpec.$.structSpec && mojo.internal.bindings.device.mojom.XRInputSourceSpaceInfoSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.device.mojom.XRInputSourceSpaceInfoSpec.$ = {};
mojo.internal.bindings.device.mojom.XRHandJointSpaceInfoSpec = mojo.internal.bindings.device.mojom.XRHandJointSpaceInfoSpec || { $: {} };
if (mojo.internal.bindings.device.mojom.XRHandJointSpaceInfoSpec.$.structSpec && mojo.internal.bindings.device.mojom.XRHandJointSpaceInfoSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.device.mojom.XRHandJointSpaceInfoSpec.$ = {};
mojo.internal.bindings.device.mojom.XRPlanePointDataSpec = mojo.internal.bindings.device.mojom.XRPlanePointDataSpec || { $: {} };
if (mojo.internal.bindings.device.mojom.XRPlanePointDataSpec.$.structSpec && mojo.internal.bindings.device.mojom.XRPlanePointDataSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.device.mojom.XRPlanePointDataSpec.$ = {};
mojo.internal.bindings.device.mojom.XRPlaneDataSpec = mojo.internal.bindings.device.mojom.XRPlaneDataSpec || { $: {} };
if (mojo.internal.bindings.device.mojom.XRPlaneDataSpec.$.structSpec && mojo.internal.bindings.device.mojom.XRPlaneDataSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.device.mojom.XRPlaneDataSpec.$ = {};
mojo.internal.bindings.device.mojom.XRPlaneDetectionDataSpec = mojo.internal.bindings.device.mojom.XRPlaneDetectionDataSpec || { $: {} };
if (mojo.internal.bindings.device.mojom.XRPlaneDetectionDataSpec.$.structSpec && mojo.internal.bindings.device.mojom.XRPlaneDetectionDataSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.device.mojom.XRPlaneDetectionDataSpec.$ = {};
mojo.internal.bindings.device.mojom.XRMeshDataSpec = mojo.internal.bindings.device.mojom.XRMeshDataSpec || { $: {} };
if (mojo.internal.bindings.device.mojom.XRMeshDataSpec.$.structSpec && mojo.internal.bindings.device.mojom.XRMeshDataSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.device.mojom.XRMeshDataSpec.$ = {};
mojo.internal.bindings.device.mojom.XRMeshDetectionDataSpec = mojo.internal.bindings.device.mojom.XRMeshDetectionDataSpec || { $: {} };
if (mojo.internal.bindings.device.mojom.XRMeshDetectionDataSpec.$.structSpec && mojo.internal.bindings.device.mojom.XRMeshDetectionDataSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.device.mojom.XRMeshDetectionDataSpec.$ = {};
mojo.internal.bindings.device.mojom.XRAnchorDataSpec = mojo.internal.bindings.device.mojom.XRAnchorDataSpec || { $: {} };
if (mojo.internal.bindings.device.mojom.XRAnchorDataSpec.$.structSpec && mojo.internal.bindings.device.mojom.XRAnchorDataSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.device.mojom.XRAnchorDataSpec.$ = {};
mojo.internal.bindings.device.mojom.XRAnchorsDataSpec = mojo.internal.bindings.device.mojom.XRAnchorsDataSpec || { $: {} };
if (mojo.internal.bindings.device.mojom.XRAnchorsDataSpec.$.structSpec && mojo.internal.bindings.device.mojom.XRAnchorsDataSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.device.mojom.XRAnchorsDataSpec.$ = {};
mojo.internal.bindings.device.mojom.XRHitTestSubscriptionResultDataSpec = mojo.internal.bindings.device.mojom.XRHitTestSubscriptionResultDataSpec || { $: {} };
if (mojo.internal.bindings.device.mojom.XRHitTestSubscriptionResultDataSpec.$.structSpec && mojo.internal.bindings.device.mojom.XRHitTestSubscriptionResultDataSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.device.mojom.XRHitTestSubscriptionResultDataSpec.$ = {};
mojo.internal.bindings.device.mojom.XRHitTestTransientInputSubscriptionResultDataSpec = mojo.internal.bindings.device.mojom.XRHitTestTransientInputSubscriptionResultDataSpec || { $: {} };
if (mojo.internal.bindings.device.mojom.XRHitTestTransientInputSubscriptionResultDataSpec.$.structSpec && mojo.internal.bindings.device.mojom.XRHitTestTransientInputSubscriptionResultDataSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.device.mojom.XRHitTestTransientInputSubscriptionResultDataSpec.$ = {};
mojo.internal.bindings.device.mojom.XRHitTestSubscriptionResultsDataSpec = mojo.internal.bindings.device.mojom.XRHitTestSubscriptionResultsDataSpec || { $: {} };
if (mojo.internal.bindings.device.mojom.XRHitTestSubscriptionResultsDataSpec.$.structSpec && mojo.internal.bindings.device.mojom.XRHitTestSubscriptionResultsDataSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.device.mojom.XRHitTestSubscriptionResultsDataSpec.$ = {};
mojo.internal.bindings.device.mojom.RgbTupleF32Spec = mojo.internal.bindings.device.mojom.RgbTupleF32Spec || { $: {} };
if (mojo.internal.bindings.device.mojom.RgbTupleF32Spec.$.structSpec && mojo.internal.bindings.device.mojom.RgbTupleF32Spec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.device.mojom.RgbTupleF32Spec.$ = {};
mojo.internal.bindings.device.mojom.XRSphericalHarmonicsSpec = mojo.internal.bindings.device.mojom.XRSphericalHarmonicsSpec || { $: {} };
if (mojo.internal.bindings.device.mojom.XRSphericalHarmonicsSpec.$.structSpec && mojo.internal.bindings.device.mojom.XRSphericalHarmonicsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.device.mojom.XRSphericalHarmonicsSpec.$ = {};
mojo.internal.bindings.device.mojom.XRCubeMapSpec = mojo.internal.bindings.device.mojom.XRCubeMapSpec || { $: {} };
if (mojo.internal.bindings.device.mojom.XRCubeMapSpec.$.structSpec && mojo.internal.bindings.device.mojom.XRCubeMapSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.device.mojom.XRCubeMapSpec.$ = {};
mojo.internal.bindings.device.mojom.XRLightProbeSpec = mojo.internal.bindings.device.mojom.XRLightProbeSpec || { $: {} };
if (mojo.internal.bindings.device.mojom.XRLightProbeSpec.$.structSpec && mojo.internal.bindings.device.mojom.XRLightProbeSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.device.mojom.XRLightProbeSpec.$ = {};
mojo.internal.bindings.device.mojom.XRReflectionProbeSpec = mojo.internal.bindings.device.mojom.XRReflectionProbeSpec || { $: {} };
if (mojo.internal.bindings.device.mojom.XRReflectionProbeSpec.$.structSpec && mojo.internal.bindings.device.mojom.XRReflectionProbeSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.device.mojom.XRReflectionProbeSpec.$ = {};
mojo.internal.bindings.device.mojom.XRLightEstimationDataSpec = mojo.internal.bindings.device.mojom.XRLightEstimationDataSpec || { $: {} };
if (mojo.internal.bindings.device.mojom.XRLightEstimationDataSpec.$.structSpec && mojo.internal.bindings.device.mojom.XRLightEstimationDataSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.device.mojom.XRLightEstimationDataSpec.$ = {};
mojo.internal.bindings.device.mojom.XRDepthDataStillValidSpec = mojo.internal.bindings.device.mojom.XRDepthDataStillValidSpec || { $: {} };
if (mojo.internal.bindings.device.mojom.XRDepthDataStillValidSpec.$.structSpec && mojo.internal.bindings.device.mojom.XRDepthDataStillValidSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.device.mojom.XRDepthDataStillValidSpec.$ = {};
mojo.internal.bindings.device.mojom.XRDepthDataUpdatedSpec = mojo.internal.bindings.device.mojom.XRDepthDataUpdatedSpec || { $: {} };
if (mojo.internal.bindings.device.mojom.XRDepthDataUpdatedSpec.$.structSpec && mojo.internal.bindings.device.mojom.XRDepthDataUpdatedSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.device.mojom.XRDepthDataUpdatedSpec.$ = {};
mojo.internal.bindings.device.mojom.XRTrackedImageDataSpec = mojo.internal.bindings.device.mojom.XRTrackedImageDataSpec || { $: {} };
if (mojo.internal.bindings.device.mojom.XRTrackedImageDataSpec.$.structSpec && mojo.internal.bindings.device.mojom.XRTrackedImageDataSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.device.mojom.XRTrackedImageDataSpec.$ = {};
mojo.internal.bindings.device.mojom.XRTrackedImagesDataSpec = mojo.internal.bindings.device.mojom.XRTrackedImagesDataSpec || { $: {} };
if (mojo.internal.bindings.device.mojom.XRTrackedImagesDataSpec.$.structSpec && mojo.internal.bindings.device.mojom.XRTrackedImagesDataSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.device.mojom.XRTrackedImagesDataSpec.$ = {};
mojo.internal.bindings.device.mojom.LayerIdSpec = mojo.internal.bindings.device.mojom.LayerIdSpec || { $: {} };
if (mojo.internal.bindings.device.mojom.LayerIdSpec.$.structSpec && mojo.internal.bindings.device.mojom.LayerIdSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.device.mojom.LayerIdSpec.$ = {};
mojo.internal.bindings.device.mojom.XRProjectionLayerDataSpec = mojo.internal.bindings.device.mojom.XRProjectionLayerDataSpec || { $: {} };
if (mojo.internal.bindings.device.mojom.XRProjectionLayerDataSpec.$.structSpec && mojo.internal.bindings.device.mojom.XRProjectionLayerDataSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.device.mojom.XRProjectionLayerDataSpec.$ = {};
mojo.internal.bindings.device.mojom.XRQuadLayerDataSpec = mojo.internal.bindings.device.mojom.XRQuadLayerDataSpec || { $: {} };
if (mojo.internal.bindings.device.mojom.XRQuadLayerDataSpec.$.structSpec && mojo.internal.bindings.device.mojom.XRQuadLayerDataSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.device.mojom.XRQuadLayerDataSpec.$ = {};
mojo.internal.bindings.device.mojom.XRCylinderLayerDataSpec = mojo.internal.bindings.device.mojom.XRCylinderLayerDataSpec || { $: {} };
if (mojo.internal.bindings.device.mojom.XRCylinderLayerDataSpec.$.structSpec && mojo.internal.bindings.device.mojom.XRCylinderLayerDataSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.device.mojom.XRCylinderLayerDataSpec.$ = {};
mojo.internal.bindings.device.mojom.XREquirectLayerDataSpec = mojo.internal.bindings.device.mojom.XREquirectLayerDataSpec || { $: {} };
if (mojo.internal.bindings.device.mojom.XREquirectLayerDataSpec.$.structSpec && mojo.internal.bindings.device.mojom.XREquirectLayerDataSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.device.mojom.XREquirectLayerDataSpec.$ = {};
mojo.internal.bindings.device.mojom.XRCubeLayerDataSpec = mojo.internal.bindings.device.mojom.XRCubeLayerDataSpec || { $: {} };
if (mojo.internal.bindings.device.mojom.XRCubeLayerDataSpec.$.structSpec && mojo.internal.bindings.device.mojom.XRCubeLayerDataSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.device.mojom.XRCubeLayerDataSpec.$ = {};
mojo.internal.bindings.device.mojom.XRLayerReadOnlyDataSpec = mojo.internal.bindings.device.mojom.XRLayerReadOnlyDataSpec || { $: {} };
if (mojo.internal.bindings.device.mojom.XRLayerReadOnlyDataSpec.$.structSpec && mojo.internal.bindings.device.mojom.XRLayerReadOnlyDataSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.device.mojom.XRLayerReadOnlyDataSpec.$ = {};
mojo.internal.bindings.device.mojom.XRLayerMutableDataSpec = mojo.internal.bindings.device.mojom.XRLayerMutableDataSpec || { $: {} };
if (mojo.internal.bindings.device.mojom.XRLayerMutableDataSpec.$.structSpec && mojo.internal.bindings.device.mojom.XRLayerMutableDataSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.device.mojom.XRLayerMutableDataSpec.$ = {};
mojo.internal.bindings.device.mojom.XRCompositionLayerDataSpec = mojo.internal.bindings.device.mojom.XRCompositionLayerDataSpec || { $: {} };
if (mojo.internal.bindings.device.mojom.XRCompositionLayerDataSpec.$.structSpec && mojo.internal.bindings.device.mojom.XRCompositionLayerDataSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.device.mojom.XRCompositionLayerDataSpec.$ = {};
mojo.internal.bindings.device.mojom.XRLayerFrameDataSpec = mojo.internal.bindings.device.mojom.XRLayerFrameDataSpec || { $: {} };
if (mojo.internal.bindings.device.mojom.XRLayerFrameDataSpec.$.structSpec && mojo.internal.bindings.device.mojom.XRLayerFrameDataSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.device.mojom.XRLayerFrameDataSpec.$ = {};
mojo.internal.bindings.device.mojom.XRRenderInfoSpec = mojo.internal.bindings.device.mojom.XRRenderInfoSpec || { $: {} };
if (mojo.internal.bindings.device.mojom.XRRenderInfoSpec.$.structSpec && mojo.internal.bindings.device.mojom.XRRenderInfoSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.device.mojom.XRRenderInfoSpec.$ = {};
mojo.internal.bindings.device.mojom.XRFrameDataSpec = mojo.internal.bindings.device.mojom.XRFrameDataSpec || { $: {} };
if (mojo.internal.bindings.device.mojom.XRFrameDataSpec.$.structSpec && mojo.internal.bindings.device.mojom.XRFrameDataSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.device.mojom.XRFrameDataSpec.$ = {};
mojo.internal.bindings.device.mojom.RequestSessionSuccessSpec = mojo.internal.bindings.device.mojom.RequestSessionSuccessSpec || { $: {} };
if (mojo.internal.bindings.device.mojom.RequestSessionSuccessSpec.$.structSpec && mojo.internal.bindings.device.mojom.RequestSessionSuccessSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.device.mojom.RequestSessionSuccessSpec.$ = {};
mojo.internal.bindings.device.mojom.XRFrameDataRequestOptionsSpec = mojo.internal.bindings.device.mojom.XRFrameDataRequestOptionsSpec || { $: {} };
if (mojo.internal.bindings.device.mojom.XRFrameDataRequestOptionsSpec.$.structSpec && mojo.internal.bindings.device.mojom.XRFrameDataRequestOptionsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.device.mojom.XRFrameDataRequestOptionsSpec.$ = {};
mojo.internal.bindings.device.mojom.XRLayerUpdateSpec = mojo.internal.bindings.device.mojom.XRLayerUpdateSpec || { $: {} };
if (mojo.internal.bindings.device.mojom.XRLayerUpdateSpec.$.structSpec && mojo.internal.bindings.device.mojom.XRLayerUpdateSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.device.mojom.XRLayerUpdateSpec.$ = {};
mojo.internal.bindings.device.mojom.VRService = mojo.internal.bindings.device.mojom.VRService || {};
mojo.internal.bindings.device.mojom.VRServiceSpec = mojo.internal.bindings.device.mojom.VRServiceSpec || { $ : {} };
if (mojo.internal.bindings.device.mojom.VRServiceSpec.$.structSpec && mojo.internal.bindings.device.mojom.VRServiceSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.device.mojom.VRServiceSpec.$ = {};
mojo.internal.bindings.device.mojom.VRService.$interfaceName = 'device.mojom.VRService';
mojo.internal.bindings.device.mojom.VRService_SetClient_ParamsSpec = mojo.internal.bindings.device.mojom.VRService_SetClient_ParamsSpec || { $: {} };
if (mojo.internal.bindings.device.mojom.VRService_SetClient_ParamsSpec.$.structSpec && mojo.internal.bindings.device.mojom.VRService_SetClient_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.device.mojom.VRService_SetClient_ParamsSpec.$ = {};
mojo.internal.bindings.device.mojom.VRService_RequestSession_ParamsSpec = mojo.internal.bindings.device.mojom.VRService_RequestSession_ParamsSpec || { $: {} };
if (mojo.internal.bindings.device.mojom.VRService_RequestSession_ParamsSpec.$.structSpec && mojo.internal.bindings.device.mojom.VRService_RequestSession_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.device.mojom.VRService_RequestSession_ParamsSpec.$ = {};
mojo.internal.bindings.device.mojom.VRService_RequestSession_ResponseParamsSpec = mojo.internal.bindings.device.mojom.VRService_RequestSession_ResponseParamsSpec || { $: {} };
if (mojo.internal.bindings.device.mojom.VRService_RequestSession_ResponseParamsSpec.$.structSpec && mojo.internal.bindings.device.mojom.VRService_RequestSession_ResponseParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.device.mojom.VRService_RequestSession_ResponseParamsSpec.$ = {};
mojo.internal.bindings.device.mojom.VRService_SupportsSession_ParamsSpec = mojo.internal.bindings.device.mojom.VRService_SupportsSession_ParamsSpec || { $: {} };
if (mojo.internal.bindings.device.mojom.VRService_SupportsSession_ParamsSpec.$.structSpec && mojo.internal.bindings.device.mojom.VRService_SupportsSession_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.device.mojom.VRService_SupportsSession_ParamsSpec.$ = {};
mojo.internal.bindings.device.mojom.VRService_SupportsSession_ResponseParamsSpec = mojo.internal.bindings.device.mojom.VRService_SupportsSession_ResponseParamsSpec || { $: {} };
if (mojo.internal.bindings.device.mojom.VRService_SupportsSession_ResponseParamsSpec.$.structSpec && mojo.internal.bindings.device.mojom.VRService_SupportsSession_ResponseParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.device.mojom.VRService_SupportsSession_ResponseParamsSpec.$ = {};
mojo.internal.bindings.device.mojom.VRService_ExitPresent_ParamsSpec = mojo.internal.bindings.device.mojom.VRService_ExitPresent_ParamsSpec || { $: {} };
if (mojo.internal.bindings.device.mojom.VRService_ExitPresent_ParamsSpec.$.structSpec && mojo.internal.bindings.device.mojom.VRService_ExitPresent_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.device.mojom.VRService_ExitPresent_ParamsSpec.$ = {};
mojo.internal.bindings.device.mojom.VRService_ExitPresent_ResponseParamsSpec = mojo.internal.bindings.device.mojom.VRService_ExitPresent_ResponseParamsSpec || { $: {} };
if (mojo.internal.bindings.device.mojom.VRService_ExitPresent_ResponseParamsSpec.$.structSpec && mojo.internal.bindings.device.mojom.VRService_ExitPresent_ResponseParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.device.mojom.VRService_ExitPresent_ResponseParamsSpec.$ = {};
mojo.internal.bindings.device.mojom.VRService_SetFramesThrottled_ParamsSpec = mojo.internal.bindings.device.mojom.VRService_SetFramesThrottled_ParamsSpec || { $: {} };
if (mojo.internal.bindings.device.mojom.VRService_SetFramesThrottled_ParamsSpec.$.structSpec && mojo.internal.bindings.device.mojom.VRService_SetFramesThrottled_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.device.mojom.VRService_SetFramesThrottled_ParamsSpec.$ = {};
mojo.internal.bindings.device.mojom.VRService_MakeXrCompatible_ParamsSpec = mojo.internal.bindings.device.mojom.VRService_MakeXrCompatible_ParamsSpec || { $: {} };
if (mojo.internal.bindings.device.mojom.VRService_MakeXrCompatible_ParamsSpec.$.structSpec && mojo.internal.bindings.device.mojom.VRService_MakeXrCompatible_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.device.mojom.VRService_MakeXrCompatible_ParamsSpec.$ = {};
mojo.internal.bindings.device.mojom.VRService_MakeXrCompatible_ResponseParamsSpec = mojo.internal.bindings.device.mojom.VRService_MakeXrCompatible_ResponseParamsSpec || { $: {} };
if (mojo.internal.bindings.device.mojom.VRService_MakeXrCompatible_ResponseParamsSpec.$.structSpec && mojo.internal.bindings.device.mojom.VRService_MakeXrCompatible_ResponseParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.device.mojom.VRService_MakeXrCompatible_ResponseParamsSpec.$ = {};
mojo.internal.bindings.device.mojom.XRSessionMetricsRecorder = mojo.internal.bindings.device.mojom.XRSessionMetricsRecorder || {};
mojo.internal.bindings.device.mojom.XRSessionMetricsRecorderSpec = mojo.internal.bindings.device.mojom.XRSessionMetricsRecorderSpec || { $ : {} };
if (mojo.internal.bindings.device.mojom.XRSessionMetricsRecorderSpec.$.structSpec && mojo.internal.bindings.device.mojom.XRSessionMetricsRecorderSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.device.mojom.XRSessionMetricsRecorderSpec.$ = {};
mojo.internal.bindings.device.mojom.XRSessionMetricsRecorder.$interfaceName = 'device.mojom.XRSessionMetricsRecorder';
mojo.internal.bindings.device.mojom.XRSessionMetricsRecorder_ReportFeatureUsed_ParamsSpec = mojo.internal.bindings.device.mojom.XRSessionMetricsRecorder_ReportFeatureUsed_ParamsSpec || { $: {} };
if (mojo.internal.bindings.device.mojom.XRSessionMetricsRecorder_ReportFeatureUsed_ParamsSpec.$.structSpec && mojo.internal.bindings.device.mojom.XRSessionMetricsRecorder_ReportFeatureUsed_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.device.mojom.XRSessionMetricsRecorder_ReportFeatureUsed_ParamsSpec.$ = {};
mojo.internal.bindings.device.mojom.VRServiceClient = mojo.internal.bindings.device.mojom.VRServiceClient || {};
mojo.internal.bindings.device.mojom.VRServiceClientSpec = mojo.internal.bindings.device.mojom.VRServiceClientSpec || { $ : {} };
if (mojo.internal.bindings.device.mojom.VRServiceClientSpec.$.structSpec && mojo.internal.bindings.device.mojom.VRServiceClientSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.device.mojom.VRServiceClientSpec.$ = {};
mojo.internal.bindings.device.mojom.VRServiceClient.$interfaceName = 'device.mojom.VRServiceClient';
mojo.internal.bindings.device.mojom.VRServiceClient_OnDeviceChanged_ParamsSpec = mojo.internal.bindings.device.mojom.VRServiceClient_OnDeviceChanged_ParamsSpec || { $: {} };
if (mojo.internal.bindings.device.mojom.VRServiceClient_OnDeviceChanged_ParamsSpec.$.structSpec && mojo.internal.bindings.device.mojom.VRServiceClient_OnDeviceChanged_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.device.mojom.VRServiceClient_OnDeviceChanged_ParamsSpec.$ = {};
mojo.internal.bindings.device.mojom.XREnvironmentIntegrationProvider = mojo.internal.bindings.device.mojom.XREnvironmentIntegrationProvider || {};
mojo.internal.bindings.device.mojom.XREnvironmentIntegrationProviderSpec = mojo.internal.bindings.device.mojom.XREnvironmentIntegrationProviderSpec || { $ : {} };
if (mojo.internal.bindings.device.mojom.XREnvironmentIntegrationProviderSpec.$.structSpec && mojo.internal.bindings.device.mojom.XREnvironmentIntegrationProviderSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.device.mojom.XREnvironmentIntegrationProviderSpec.$ = {};
mojo.internal.bindings.device.mojom.XREnvironmentIntegrationProvider.$interfaceName = 'device.mojom.XREnvironmentIntegrationProvider';
mojo.internal.bindings.device.mojom.XREnvironmentIntegrationProvider_SubscribeToHitTest_ParamsSpec = mojo.internal.bindings.device.mojom.XREnvironmentIntegrationProvider_SubscribeToHitTest_ParamsSpec || { $: {} };
if (mojo.internal.bindings.device.mojom.XREnvironmentIntegrationProvider_SubscribeToHitTest_ParamsSpec.$.structSpec && mojo.internal.bindings.device.mojom.XREnvironmentIntegrationProvider_SubscribeToHitTest_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.device.mojom.XREnvironmentIntegrationProvider_SubscribeToHitTest_ParamsSpec.$ = {};
mojo.internal.bindings.device.mojom.XREnvironmentIntegrationProvider_SubscribeToHitTest_ResponseParamsSpec = mojo.internal.bindings.device.mojom.XREnvironmentIntegrationProvider_SubscribeToHitTest_ResponseParamsSpec || { $: {} };
if (mojo.internal.bindings.device.mojom.XREnvironmentIntegrationProvider_SubscribeToHitTest_ResponseParamsSpec.$.structSpec && mojo.internal.bindings.device.mojom.XREnvironmentIntegrationProvider_SubscribeToHitTest_ResponseParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.device.mojom.XREnvironmentIntegrationProvider_SubscribeToHitTest_ResponseParamsSpec.$ = {};
mojo.internal.bindings.device.mojom.XREnvironmentIntegrationProvider_SubscribeToHitTestForTransientInput_ParamsSpec = mojo.internal.bindings.device.mojom.XREnvironmentIntegrationProvider_SubscribeToHitTestForTransientInput_ParamsSpec || { $: {} };
if (mojo.internal.bindings.device.mojom.XREnvironmentIntegrationProvider_SubscribeToHitTestForTransientInput_ParamsSpec.$.structSpec && mojo.internal.bindings.device.mojom.XREnvironmentIntegrationProvider_SubscribeToHitTestForTransientInput_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.device.mojom.XREnvironmentIntegrationProvider_SubscribeToHitTestForTransientInput_ParamsSpec.$ = {};
mojo.internal.bindings.device.mojom.XREnvironmentIntegrationProvider_SubscribeToHitTestForTransientInput_ResponseParamsSpec = mojo.internal.bindings.device.mojom.XREnvironmentIntegrationProvider_SubscribeToHitTestForTransientInput_ResponseParamsSpec || { $: {} };
if (mojo.internal.bindings.device.mojom.XREnvironmentIntegrationProvider_SubscribeToHitTestForTransientInput_ResponseParamsSpec.$.structSpec && mojo.internal.bindings.device.mojom.XREnvironmentIntegrationProvider_SubscribeToHitTestForTransientInput_ResponseParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.device.mojom.XREnvironmentIntegrationProvider_SubscribeToHitTestForTransientInput_ResponseParamsSpec.$ = {};
mojo.internal.bindings.device.mojom.XREnvironmentIntegrationProvider_UnsubscribeFromHitTest_ParamsSpec = mojo.internal.bindings.device.mojom.XREnvironmentIntegrationProvider_UnsubscribeFromHitTest_ParamsSpec || { $: {} };
if (mojo.internal.bindings.device.mojom.XREnvironmentIntegrationProvider_UnsubscribeFromHitTest_ParamsSpec.$.structSpec && mojo.internal.bindings.device.mojom.XREnvironmentIntegrationProvider_UnsubscribeFromHitTest_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.device.mojom.XREnvironmentIntegrationProvider_UnsubscribeFromHitTest_ParamsSpec.$ = {};
mojo.internal.bindings.device.mojom.XREnvironmentIntegrationProvider_CreateAnchor_ParamsSpec = mojo.internal.bindings.device.mojom.XREnvironmentIntegrationProvider_CreateAnchor_ParamsSpec || { $: {} };
if (mojo.internal.bindings.device.mojom.XREnvironmentIntegrationProvider_CreateAnchor_ParamsSpec.$.structSpec && mojo.internal.bindings.device.mojom.XREnvironmentIntegrationProvider_CreateAnchor_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.device.mojom.XREnvironmentIntegrationProvider_CreateAnchor_ParamsSpec.$ = {};
mojo.internal.bindings.device.mojom.XREnvironmentIntegrationProvider_CreateAnchor_ResponseParamsSpec = mojo.internal.bindings.device.mojom.XREnvironmentIntegrationProvider_CreateAnchor_ResponseParamsSpec || { $: {} };
if (mojo.internal.bindings.device.mojom.XREnvironmentIntegrationProvider_CreateAnchor_ResponseParamsSpec.$.structSpec && mojo.internal.bindings.device.mojom.XREnvironmentIntegrationProvider_CreateAnchor_ResponseParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.device.mojom.XREnvironmentIntegrationProvider_CreateAnchor_ResponseParamsSpec.$ = {};
mojo.internal.bindings.device.mojom.XREnvironmentIntegrationProvider_DetachAnchor_ParamsSpec = mojo.internal.bindings.device.mojom.XREnvironmentIntegrationProvider_DetachAnchor_ParamsSpec || { $: {} };
if (mojo.internal.bindings.device.mojom.XREnvironmentIntegrationProvider_DetachAnchor_ParamsSpec.$.structSpec && mojo.internal.bindings.device.mojom.XREnvironmentIntegrationProvider_DetachAnchor_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.device.mojom.XREnvironmentIntegrationProvider_DetachAnchor_ParamsSpec.$ = {};
mojo.internal.bindings.device.mojom.XRFrameDataProvider = mojo.internal.bindings.device.mojom.XRFrameDataProvider || {};
mojo.internal.bindings.device.mojom.XRFrameDataProviderSpec = mojo.internal.bindings.device.mojom.XRFrameDataProviderSpec || { $ : {} };
if (mojo.internal.bindings.device.mojom.XRFrameDataProviderSpec.$.structSpec && mojo.internal.bindings.device.mojom.XRFrameDataProviderSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.device.mojom.XRFrameDataProviderSpec.$ = {};
mojo.internal.bindings.device.mojom.XRFrameDataProvider.$interfaceName = 'device.mojom.XRFrameDataProvider';
mojo.internal.bindings.device.mojom.XRFrameDataProvider_GetFrameData_ParamsSpec = mojo.internal.bindings.device.mojom.XRFrameDataProvider_GetFrameData_ParamsSpec || { $: {} };
if (mojo.internal.bindings.device.mojom.XRFrameDataProvider_GetFrameData_ParamsSpec.$.structSpec && mojo.internal.bindings.device.mojom.XRFrameDataProvider_GetFrameData_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.device.mojom.XRFrameDataProvider_GetFrameData_ParamsSpec.$ = {};
mojo.internal.bindings.device.mojom.XRFrameDataProvider_GetFrameData_ResponseParamsSpec = mojo.internal.bindings.device.mojom.XRFrameDataProvider_GetFrameData_ResponseParamsSpec || { $: {} };
if (mojo.internal.bindings.device.mojom.XRFrameDataProvider_GetFrameData_ResponseParamsSpec.$.structSpec && mojo.internal.bindings.device.mojom.XRFrameDataProvider_GetFrameData_ResponseParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.device.mojom.XRFrameDataProvider_GetFrameData_ResponseParamsSpec.$ = {};
mojo.internal.bindings.device.mojom.XRFrameDataProvider_GetEnvironmentIntegrationProvider_ParamsSpec = mojo.internal.bindings.device.mojom.XRFrameDataProvider_GetEnvironmentIntegrationProvider_ParamsSpec || { $: {} };
if (mojo.internal.bindings.device.mojom.XRFrameDataProvider_GetEnvironmentIntegrationProvider_ParamsSpec.$.structSpec && mojo.internal.bindings.device.mojom.XRFrameDataProvider_GetEnvironmentIntegrationProvider_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.device.mojom.XRFrameDataProvider_GetEnvironmentIntegrationProvider_ParamsSpec.$ = {};
mojo.internal.bindings.device.mojom.XRPresentationProvider = mojo.internal.bindings.device.mojom.XRPresentationProvider || {};
mojo.internal.bindings.device.mojom.XRPresentationProviderSpec = mojo.internal.bindings.device.mojom.XRPresentationProviderSpec || { $ : {} };
if (mojo.internal.bindings.device.mojom.XRPresentationProviderSpec.$.structSpec && mojo.internal.bindings.device.mojom.XRPresentationProviderSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.device.mojom.XRPresentationProviderSpec.$ = {};
mojo.internal.bindings.device.mojom.XRPresentationProvider.$interfaceName = 'device.mojom.XRPresentationProvider';
mojo.internal.bindings.device.mojom.XRPresentationProvider_UpdateLayerBounds_ParamsSpec = mojo.internal.bindings.device.mojom.XRPresentationProvider_UpdateLayerBounds_ParamsSpec || { $: {} };
if (mojo.internal.bindings.device.mojom.XRPresentationProvider_UpdateLayerBounds_ParamsSpec.$.structSpec && mojo.internal.bindings.device.mojom.XRPresentationProvider_UpdateLayerBounds_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.device.mojom.XRPresentationProvider_UpdateLayerBounds_ParamsSpec.$ = {};
mojo.internal.bindings.device.mojom.XRPresentationProvider_SubmitFrameMissing_ParamsSpec = mojo.internal.bindings.device.mojom.XRPresentationProvider_SubmitFrameMissing_ParamsSpec || { $: {} };
if (mojo.internal.bindings.device.mojom.XRPresentationProvider_SubmitFrameMissing_ParamsSpec.$.structSpec && mojo.internal.bindings.device.mojom.XRPresentationProvider_SubmitFrameMissing_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.device.mojom.XRPresentationProvider_SubmitFrameMissing_ParamsSpec.$ = {};
mojo.internal.bindings.device.mojom.XRPresentationProvider_SubmitFrame_ParamsSpec = mojo.internal.bindings.device.mojom.XRPresentationProvider_SubmitFrame_ParamsSpec || { $: {} };
if (mojo.internal.bindings.device.mojom.XRPresentationProvider_SubmitFrame_ParamsSpec.$.structSpec && mojo.internal.bindings.device.mojom.XRPresentationProvider_SubmitFrame_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.device.mojom.XRPresentationProvider_SubmitFrame_ParamsSpec.$ = {};
mojo.internal.bindings.device.mojom.XRPresentationProvider_SubmitFrameWithTextureHandle_ParamsSpec = mojo.internal.bindings.device.mojom.XRPresentationProvider_SubmitFrameWithTextureHandle_ParamsSpec || { $: {} };
if (mojo.internal.bindings.device.mojom.XRPresentationProvider_SubmitFrameWithTextureHandle_ParamsSpec.$.structSpec && mojo.internal.bindings.device.mojom.XRPresentationProvider_SubmitFrameWithTextureHandle_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.device.mojom.XRPresentationProvider_SubmitFrameWithTextureHandle_ParamsSpec.$ = {};
mojo.internal.bindings.device.mojom.XRPresentationProvider_SubmitFrameDrawnIntoTexture_ParamsSpec = mojo.internal.bindings.device.mojom.XRPresentationProvider_SubmitFrameDrawnIntoTexture_ParamsSpec || { $: {} };
if (mojo.internal.bindings.device.mojom.XRPresentationProvider_SubmitFrameDrawnIntoTexture_ParamsSpec.$.structSpec && mojo.internal.bindings.device.mojom.XRPresentationProvider_SubmitFrameDrawnIntoTexture_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.device.mojom.XRPresentationProvider_SubmitFrameDrawnIntoTexture_ParamsSpec.$ = {};
mojo.internal.bindings.device.mojom.XRPresentationClient = mojo.internal.bindings.device.mojom.XRPresentationClient || {};
mojo.internal.bindings.device.mojom.XRPresentationClientSpec = mojo.internal.bindings.device.mojom.XRPresentationClientSpec || { $ : {} };
if (mojo.internal.bindings.device.mojom.XRPresentationClientSpec.$.structSpec && mojo.internal.bindings.device.mojom.XRPresentationClientSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.device.mojom.XRPresentationClientSpec.$ = {};
mojo.internal.bindings.device.mojom.XRPresentationClient.$interfaceName = 'device.mojom.XRPresentationClient';
mojo.internal.bindings.device.mojom.XRPresentationClient_OnSubmitFrameTransferred_ParamsSpec = mojo.internal.bindings.device.mojom.XRPresentationClient_OnSubmitFrameTransferred_ParamsSpec || { $: {} };
if (mojo.internal.bindings.device.mojom.XRPresentationClient_OnSubmitFrameTransferred_ParamsSpec.$.structSpec && mojo.internal.bindings.device.mojom.XRPresentationClient_OnSubmitFrameTransferred_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.device.mojom.XRPresentationClient_OnSubmitFrameTransferred_ParamsSpec.$ = {};
mojo.internal.bindings.device.mojom.XRPresentationClient_OnSubmitFrameRendered_ParamsSpec = mojo.internal.bindings.device.mojom.XRPresentationClient_OnSubmitFrameRendered_ParamsSpec || { $: {} };
if (mojo.internal.bindings.device.mojom.XRPresentationClient_OnSubmitFrameRendered_ParamsSpec.$.structSpec && mojo.internal.bindings.device.mojom.XRPresentationClient_OnSubmitFrameRendered_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.device.mojom.XRPresentationClient_OnSubmitFrameRendered_ParamsSpec.$ = {};
mojo.internal.bindings.device.mojom.XRPresentationClient_OnSubmitFrameGpuFence_ParamsSpec = mojo.internal.bindings.device.mojom.XRPresentationClient_OnSubmitFrameGpuFence_ParamsSpec || { $: {} };
if (mojo.internal.bindings.device.mojom.XRPresentationClient_OnSubmitFrameGpuFence_ParamsSpec.$.structSpec && mojo.internal.bindings.device.mojom.XRPresentationClient_OnSubmitFrameGpuFence_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.device.mojom.XRPresentationClient_OnSubmitFrameGpuFence_ParamsSpec.$ = {};
mojo.internal.bindings.device.mojom.XRSessionClient = mojo.internal.bindings.device.mojom.XRSessionClient || {};
mojo.internal.bindings.device.mojom.XRSessionClientSpec = mojo.internal.bindings.device.mojom.XRSessionClientSpec || { $ : {} };
if (mojo.internal.bindings.device.mojom.XRSessionClientSpec.$.structSpec && mojo.internal.bindings.device.mojom.XRSessionClientSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.device.mojom.XRSessionClientSpec.$ = {};
mojo.internal.bindings.device.mojom.XRSessionClient.$interfaceName = 'device.mojom.XRSessionClient';
mojo.internal.bindings.device.mojom.XRSessionClient_OnExitPresent_ParamsSpec = mojo.internal.bindings.device.mojom.XRSessionClient_OnExitPresent_ParamsSpec || { $: {} };
if (mojo.internal.bindings.device.mojom.XRSessionClient_OnExitPresent_ParamsSpec.$.structSpec && mojo.internal.bindings.device.mojom.XRSessionClient_OnExitPresent_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.device.mojom.XRSessionClient_OnExitPresent_ParamsSpec.$ = {};
mojo.internal.bindings.device.mojom.XRSessionClient_OnVisibilityStateChanged_ParamsSpec = mojo.internal.bindings.device.mojom.XRSessionClient_OnVisibilityStateChanged_ParamsSpec || { $: {} };
if (mojo.internal.bindings.device.mojom.XRSessionClient_OnVisibilityStateChanged_ParamsSpec.$.structSpec && mojo.internal.bindings.device.mojom.XRSessionClient_OnVisibilityStateChanged_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.device.mojom.XRSessionClient_OnVisibilityStateChanged_ParamsSpec.$ = {};
mojo.internal.bindings.device.mojom.XRLayerManager = mojo.internal.bindings.device.mojom.XRLayerManager || {};
mojo.internal.bindings.device.mojom.XRLayerManagerSpec = mojo.internal.bindings.device.mojom.XRLayerManagerSpec || { $ : {} };
if (mojo.internal.bindings.device.mojom.XRLayerManagerSpec.$.structSpec && mojo.internal.bindings.device.mojom.XRLayerManagerSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.device.mojom.XRLayerManagerSpec.$ = {};
mojo.internal.bindings.device.mojom.XRLayerManager.$interfaceName = 'device.mojom.XRLayerManager';
mojo.internal.bindings.device.mojom.XRLayerManager_CreateCompositionLayer_ParamsSpec = mojo.internal.bindings.device.mojom.XRLayerManager_CreateCompositionLayer_ParamsSpec || { $: {} };
if (mojo.internal.bindings.device.mojom.XRLayerManager_CreateCompositionLayer_ParamsSpec.$.structSpec && mojo.internal.bindings.device.mojom.XRLayerManager_CreateCompositionLayer_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.device.mojom.XRLayerManager_CreateCompositionLayer_ParamsSpec.$ = {};
mojo.internal.bindings.device.mojom.XRLayerManager_CreateCompositionLayer_ResponseParamsSpec = mojo.internal.bindings.device.mojom.XRLayerManager_CreateCompositionLayer_ResponseParamsSpec || { $: {} };
if (mojo.internal.bindings.device.mojom.XRLayerManager_CreateCompositionLayer_ResponseParamsSpec.$.structSpec && mojo.internal.bindings.device.mojom.XRLayerManager_CreateCompositionLayer_ResponseParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.device.mojom.XRLayerManager_CreateCompositionLayer_ResponseParamsSpec.$ = {};
mojo.internal.bindings.device.mojom.XRLayerManager_DestroyCompositionLayer_ParamsSpec = mojo.internal.bindings.device.mojom.XRLayerManager_DestroyCompositionLayer_ParamsSpec || { $: {} };
if (mojo.internal.bindings.device.mojom.XRLayerManager_DestroyCompositionLayer_ParamsSpec.$.structSpec && mojo.internal.bindings.device.mojom.XRLayerManager_DestroyCompositionLayer_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.device.mojom.XRLayerManager_DestroyCompositionLayer_ParamsSpec.$ = {};
mojo.internal.bindings.device.mojom.XRLayerManager_UpdateCompositionLayer_ParamsSpec = mojo.internal.bindings.device.mojom.XRLayerManager_UpdateCompositionLayer_ParamsSpec || { $: {} };
if (mojo.internal.bindings.device.mojom.XRLayerManager_UpdateCompositionLayer_ParamsSpec.$.structSpec && mojo.internal.bindings.device.mojom.XRLayerManager_UpdateCompositionLayer_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.device.mojom.XRLayerManager_UpdateCompositionLayer_ParamsSpec.$ = {};
mojo.internal.bindings.device.mojom.XRLayerManager_SetEnabledCompositionLayers_ParamsSpec = mojo.internal.bindings.device.mojom.XRLayerManager_SetEnabledCompositionLayers_ParamsSpec || { $: {} };
if (mojo.internal.bindings.device.mojom.XRLayerManager_SetEnabledCompositionLayers_ParamsSpec.$.structSpec && mojo.internal.bindings.device.mojom.XRLayerManager_SetEnabledCompositionLayers_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.device.mojom.XRLayerManager_SetEnabledCompositionLayers_ParamsSpec.$ = {};
mojo.internal.bindings.device.mojom.WebXrInternalsRendererListener = mojo.internal.bindings.device.mojom.WebXrInternalsRendererListener || {};
mojo.internal.bindings.device.mojom.WebXrInternalsRendererListenerSpec = mojo.internal.bindings.device.mojom.WebXrInternalsRendererListenerSpec || { $ : {} };
if (mojo.internal.bindings.device.mojom.WebXrInternalsRendererListenerSpec.$.structSpec && mojo.internal.bindings.device.mojom.WebXrInternalsRendererListenerSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.device.mojom.WebXrInternalsRendererListenerSpec.$ = {};
mojo.internal.bindings.device.mojom.WebXrInternalsRendererListener.$interfaceName = 'device.mojom.WebXrInternalsRendererListener';
mojo.internal.bindings.device.mojom.WebXrInternalsRendererListener_OnFrameData_ParamsSpec = mojo.internal.bindings.device.mojom.WebXrInternalsRendererListener_OnFrameData_ParamsSpec || { $: {} };
if (mojo.internal.bindings.device.mojom.WebXrInternalsRendererListener_OnFrameData_ParamsSpec.$.structSpec && mojo.internal.bindings.device.mojom.WebXrInternalsRendererListener_OnFrameData_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.device.mojom.WebXrInternalsRendererListener_OnFrameData_ParamsSpec.$ = {};
mojo.internal.bindings.device.mojom.WebXrInternalsRendererListener_OnConsoleLog_ParamsSpec = mojo.internal.bindings.device.mojom.WebXrInternalsRendererListener_OnConsoleLog_ParamsSpec || { $: {} };
if (mojo.internal.bindings.device.mojom.WebXrInternalsRendererListener_OnConsoleLog_ParamsSpec.$.structSpec && mojo.internal.bindings.device.mojom.WebXrInternalsRendererListener_OnConsoleLog_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.device.mojom.WebXrInternalsRendererListener_OnConsoleLog_ParamsSpec.$ = {};

// External type stubs (from imports)
mojo.internal.bindings.device = mojo.internal.bindings.device || {};
mojo.internal.bindings.device.mojom = mojo.internal.bindings.device.mojom || {};
mojo.internal.bindings.device.mojom.GamepadSpec = mojo.internal.bindings.device.mojom.GamepadSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.device = mojo.internal.bindings.device || {};
mojo.internal.bindings.device.mojom = mojo.internal.bindings.device.mojom || {};
mojo.internal.bindings.device.mojom.RequestSessionErrorSpec = mojo.internal.bindings.device.mojom.RequestSessionErrorSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.device = mojo.internal.bindings.device || {};
mojo.internal.bindings.device.mojom = mojo.internal.bindings.device.mojom || {};
mojo.internal.bindings.device.mojom.RequestSessionResultSpec = mojo.internal.bindings.device.mojom.RequestSessionResultSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.device = mojo.internal.bindings.device || {};
mojo.internal.bindings.device.mojom = mojo.internal.bindings.device.mojom || {};
mojo.internal.bindings.device.mojom.XRDepthDataSpec = mojo.internal.bindings.device.mojom.XRDepthDataSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.device = mojo.internal.bindings.device || {};
mojo.internal.bindings.device.mojom = mojo.internal.bindings.device.mojom || {};
mojo.internal.bindings.device.mojom.XRDepthDataFormatSpec = mojo.internal.bindings.device.mojom.XRDepthDataFormatSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.device = mojo.internal.bindings.device || {};
mojo.internal.bindings.device.mojom = mojo.internal.bindings.device.mojom || {};
mojo.internal.bindings.device.mojom.XRDepthTypeSpec = mojo.internal.bindings.device.mojom.XRDepthTypeSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.device = mojo.internal.bindings.device || {};
mojo.internal.bindings.device.mojom = mojo.internal.bindings.device.mojom || {};
mojo.internal.bindings.device.mojom.XRDepthUsageSpec = mojo.internal.bindings.device.mojom.XRDepthUsageSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.device = mojo.internal.bindings.device || {};
mojo.internal.bindings.device.mojom = mojo.internal.bindings.device.mojom || {};
mojo.internal.bindings.device.mojom.XRHandJointSpec = mojo.internal.bindings.device.mojom.XRHandJointSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.device = mojo.internal.bindings.device || {};
mojo.internal.bindings.device.mojom = mojo.internal.bindings.device.mojom || {};
mojo.internal.bindings.device.mojom.XRHandTrackingDataSpec = mojo.internal.bindings.device.mojom.XRHandTrackingDataSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.device = mojo.internal.bindings.device || {};
mojo.internal.bindings.device.mojom = mojo.internal.bindings.device.mojom || {};
mojo.internal.bindings.device.mojom.XRLayerSpecificDataSpec = mojo.internal.bindings.device.mojom.XRLayerSpecificDataSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.device = mojo.internal.bindings.device || {};
mojo.internal.bindings.device.mojom = mojo.internal.bindings.device.mojom || {};
mojo.internal.bindings.device.mojom.XRNativeOriginInformationSpec = mojo.internal.bindings.device.mojom.XRNativeOriginInformationSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.device = mojo.internal.bindings.device || {};
mojo.internal.bindings.device.mojom = mojo.internal.bindings.device.mojom || {};
mojo.internal.bindings.device.mojom.XRSessionFeatureSpec = mojo.internal.bindings.device.mojom.XRSessionFeatureSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.device = mojo.internal.bindings.device || {};
mojo.internal.bindings.device.mojom = mojo.internal.bindings.device.mojom || {};
mojo.internal.bindings.device.mojom.XRSessionOptionsSpec = mojo.internal.bindings.device.mojom.XRSessionOptionsSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.device = mojo.internal.bindings.device || {};
mojo.internal.bindings.device.mojom = mojo.internal.bindings.device.mojom || {};
mojo.internal.bindings.device.mojom.XrFrameStatisticsSpec = mojo.internal.bindings.device.mojom.XrFrameStatisticsSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.device = mojo.internal.bindings.device || {};
mojo.internal.bindings.device.mojom = mojo.internal.bindings.device.mojom || {};
mojo.internal.bindings.device.mojom.XrLogMessageSpec = mojo.internal.bindings.device.mojom.XrLogMessageSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.gfx = mojo.internal.bindings.gfx || {};
mojo.internal.bindings.gfx.mojom = mojo.internal.bindings.gfx.mojom || {};
mojo.internal.bindings.gfx.mojom.GpuFenceHandleSpec = mojo.internal.bindings.gfx.mojom.GpuFenceHandleSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.gfx = mojo.internal.bindings.gfx || {};
mojo.internal.bindings.gfx.mojom = mojo.internal.bindings.gfx.mojom || {};
mojo.internal.bindings.gfx.mojom.Point3FSpec = mojo.internal.bindings.gfx.mojom.Point3FSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.gfx = mojo.internal.bindings.gfx || {};
mojo.internal.bindings.gfx.mojom = mojo.internal.bindings.gfx.mojom || {};
mojo.internal.bindings.gfx.mojom.PointFSpec = mojo.internal.bindings.gfx.mojom.PointFSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.gfx = mojo.internal.bindings.gfx || {};
mojo.internal.bindings.gfx.mojom = mojo.internal.bindings.gfx.mojom || {};
mojo.internal.bindings.gfx.mojom.QuaternionSpec = mojo.internal.bindings.gfx.mojom.QuaternionSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.gfx = mojo.internal.bindings.gfx || {};
mojo.internal.bindings.gfx.mojom = mojo.internal.bindings.gfx.mojom || {};
mojo.internal.bindings.gfx.mojom.RectSpec = mojo.internal.bindings.gfx.mojom.RectSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.gfx = mojo.internal.bindings.gfx || {};
mojo.internal.bindings.gfx.mojom = mojo.internal.bindings.gfx.mojom || {};
mojo.internal.bindings.gfx.mojom.RectFSpec = mojo.internal.bindings.gfx.mojom.RectFSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.gfx = mojo.internal.bindings.gfx || {};
mojo.internal.bindings.gfx.mojom = mojo.internal.bindings.gfx.mojom || {};
mojo.internal.bindings.gfx.mojom.SizeSpec = mojo.internal.bindings.gfx.mojom.SizeSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.gfx = mojo.internal.bindings.gfx || {};
mojo.internal.bindings.gfx.mojom = mojo.internal.bindings.gfx.mojom || {};
mojo.internal.bindings.gfx.mojom.TransformSpec = mojo.internal.bindings.gfx.mojom.TransformSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.gfx = mojo.internal.bindings.gfx || {};
mojo.internal.bindings.gfx.mojom = mojo.internal.bindings.gfx.mojom || {};
mojo.internal.bindings.gfx.mojom.Vector3dFSpec = mojo.internal.bindings.gfx.mojom.Vector3dFSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.gpu = mojo.internal.bindings.gpu || {};
mojo.internal.bindings.gpu.mojom = mojo.internal.bindings.gpu.mojom || {};
mojo.internal.bindings.gpu.mojom.ExportedSharedImageSpec = mojo.internal.bindings.gpu.mojom.ExportedSharedImageSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.gpu = mojo.internal.bindings.gpu || {};
mojo.internal.bindings.gpu.mojom = mojo.internal.bindings.gpu.mojom || {};
mojo.internal.bindings.gpu.mojom.SharedImageExportResultSpec = mojo.internal.bindings.gpu.mojom.SharedImageExportResultSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.gpu = mojo.internal.bindings.gpu || {};
mojo.internal.bindings.gpu.mojom = mojo.internal.bindings.gpu.mojom || {};
mojo.internal.bindings.gpu.mojom.SyncTokenSpec = mojo.internal.bindings.gpu.mojom.SyncTokenSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.mojo_base = mojo.internal.bindings.mojo_base || {};
mojo.internal.bindings.mojo_base.mojom = mojo.internal.bindings.mojo_base.mojom || {};
mojo.internal.bindings.mojo_base.mojom.BigBufferSpec = mojo.internal.bindings.mojo_base.mojom.BigBufferSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.mojo_base = mojo.internal.bindings.mojo_base || {};
mojo.internal.bindings.mojo_base.mojom = mojo.internal.bindings.mojo_base.mojom || {};
mojo.internal.bindings.mojo_base.mojom.TimeDeltaSpec = mojo.internal.bindings.mojo_base.mojom.TimeDeltaSpec || { $: mojo.internal.OpaqueStruct.$ };

mojo.internal.bindings.device.mojom.kNumComponentsPerPixel = 4;

// Enum: XRHandedness
mojo.internal.bindings.device.mojom.XRHandedness = {
  NONE: 0,
  LEFT: 1,
  RIGHT: 2,
};

// Enum: XRTargetRayMode
mojo.internal.bindings.device.mojom.XRTargetRayMode = {
  GAZING: 1,
  POINTING: 2,
  TAPPING: 3,
};

// Enum: XRSessionFeatureRequestStatus
mojo.internal.bindings.device.mojom.XRSessionFeatureRequestStatus = {
  kNotRequested: 0,
  kRequired: 1,
  kOptionalAccepted: 2,
  kOptionalRejected: 3,
};

// Enum: XREnvironmentBlendMode
mojo.internal.bindings.device.mojom.XREnvironmentBlendMode = {
  kOpaque: 1,
  kAlphaBlend: 2,
  kAdditive: 3,
};

// Enum: XRInteractionMode
mojo.internal.bindings.device.mojom.XRInteractionMode = {
  kScreenSpace: 1,
  kWorldSpace: 2,
};

// Enum: XREye
mojo.internal.bindings.device.mojom.XREye = {
  kNone: 0,
  kLeft: 1,
  kRight: 2,
};

// Enum: XRPresentationTransportMethod
mojo.internal.bindings.device.mojom.XRPresentationTransportMethod = {
  NONE: 0,
  SUBMIT_AS_TEXTURE_HANDLE: 1,
  SUBMIT_AS_TEST: 2,
  DRAW_INTO_TEXTURE_MAILBOX: 3,
};

// Enum: XRReferenceSpaceType
mojo.internal.bindings.device.mojom.XRReferenceSpaceType = {
  kViewer: 0,
  kLocal: 1,
  kLocalFloor: 2,
  kBoundedFloor: 3,
  kUnbounded: 4,
};

// Enum: XRInputSourceSpaceType
mojo.internal.bindings.device.mojom.XRInputSourceSpaceType = {
  kTargetRay: 0,
  kGrip: 1,
};

// Enum: XRPlaneOrientation
mojo.internal.bindings.device.mojom.XRPlaneOrientation = {
  UNKNOWN: 0,
  HORIZONTAL: 1,
  VERTICAL: 2,
};

// Enum: XRSemanticLabel
mojo.internal.bindings.device.mojom.XRSemanticLabel = {
  kOther: 0,
  kFloor: 1,
  kWall: 2,
  kCeiling: 3,
  kTable: 4,
};

// Enum: XRLayerLayout
mojo.internal.bindings.device.mojom.XRLayerLayout = {
  kMono: 0,
  kStereo: 1,
  kStereoLeftRight: 2,
  kStereoTopBottom: 3,
};

// Enum: CreateCompositionLayerResult
mojo.internal.bindings.device.mojom.CreateCompositionLayerResult = {
  SUCCESS: 0,
  FAILURE: 1,
};

// Enum: XrCompatibleResult
mojo.internal.bindings.device.mojom.XrCompatibleResult = {
  kAlreadyCompatible: 0,
  kNoDeviceAvailable: 1,
  kWebXrFeaturePolicyBlocked: 2,
  kCompatibleAfterRestart: 3,
  kNotCompatibleAfterRestart: 4,
};

// Enum: EntityTypeForHitTest
mojo.internal.bindings.device.mojom.EntityTypeForHitTest = {
  POINT: 1,
  PLANE: 2,
};

// Enum: XRVisibilityState
mojo.internal.bindings.device.mojom.XRVisibilityState = {
  VISIBLE: 1,
  VISIBLE_BLURRED: 2,
  HIDDEN: 3,
};

// Interface: VRService
mojo.internal.bindings.device.mojom.VRServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
    if (handle) {
      this.__mojoHandle = handle.router_ ? handle.router_.pipe_ : (handle.pipe_ || handle);
    }
  }
};

mojo.internal.bindings.device.mojom.VRServiceRemote = class {
  static get $interfaceName() {
    return 'device.mojom.VRService';
  }

  constructor(handle = undefined) {
    this.__mojoHandle = handle;
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.device.mojom.VRServicePendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.device.mojom.VRServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  setClient(arg_client) {
    return this.$.setClient(arg_client);
  }
  requestSession(arg_options) {
    return this.$.requestSession(arg_options);
  }
  supportsSession(arg_options) {
    return this.$.supportsSession(arg_options);
  }
  exitPresent() {
    return this.$.exitPresent();
  }
  setFramesThrottled(arg_throttled) {
    return this.$.setFramesThrottled(arg_throttled);
  }
  makeXrCompatible() {
    return this.$.makeXrCompatible();
  }
};

mojo.internal.bindings.device.mojom.VRServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('device.mojom.VRService', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  setClient(arg_client) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.device.mojom.VRService_SetClient_ParamsSpec,
      null,
      [arg_client],
      false);
  }

  requestSession(arg_options) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.device.mojom.VRService_RequestSession_ParamsSpec,
      mojo.internal.bindings.device.mojom.VRService_RequestSession_ResponseParamsSpec,
      [arg_options],
      false);
  }

  supportsSession(arg_options) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.device.mojom.VRService_SupportsSession_ParamsSpec,
      mojo.internal.bindings.device.mojom.VRService_SupportsSession_ResponseParamsSpec,
      [arg_options],
      false);
  }

  exitPresent() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.device.mojom.VRService_ExitPresent_ParamsSpec,
      mojo.internal.bindings.device.mojom.VRService_ExitPresent_ResponseParamsSpec,
      [],
      false);
  }

  setFramesThrottled(arg_throttled) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.device.mojom.VRService_SetFramesThrottled_ParamsSpec,
      null,
      [arg_throttled],
      false);
  }

  makeXrCompatible() {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojo.internal.bindings.device.mojom.VRService_MakeXrCompatible_ParamsSpec,
      mojo.internal.bindings.device.mojom.VRService_MakeXrCompatible_ResponseParamsSpec,
      [],
      false);
  }

};

mojo.internal.bindings.device.mojom.VRService.getRemote = function() {
  let remote = new mojo.internal.bindings.device.mojom.VRServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'device.mojom.VRService',
    'context');
  return remote.$;
};

mojo.internal.bindings.device.mojom.VRServiceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('device.mojom.VRService', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx); // Scrambled/Explicit
    });
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onError: function() { console.log('[GeneratedReceiver] Endpoint Error'); },
      onMessageReceived: (...args) => {
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
           console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
           return;
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      
      // FEEDBACK LOOP: Report the wire truth to the learner
      this.mapOrdinal(header.ordinal, dispatchId);
      
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.device.mojom.VRService_SetClient_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setClient');
          const result = this.impl.setClient(params.arg_client);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.device.mojom.VRService_RequestSession_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.requestSession');
          const result = this.impl.requestSession(params.arg_options);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const val = (response && typeof response === 'object' && 'arg_result' in response) ? response['arg_result'] : response;
              const resp_obj = { 'arg_result': val };
              const message = new mojo.internal.Message(
                this.router_, 0, mojo.internal.kMessageFlagIsResponse,
                header.ordinal, header.requestId, mojo.internal.bindings.device.mojom.VRService_RequestSession_ResponseParamsSpec.$.structSpec, resp_obj);
              this.router_.send(message);
            }).catch(e => console.error('[GeneratedReceiver] requestSession FAILED:', e));
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.device.mojom.VRService_SupportsSession_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.supportsSession');
          const result = this.impl.supportsSession(params.arg_options);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const val = (response && typeof response === 'object' && 'arg_supports_session' in response) ? response['arg_supports_session'] : response;
              const resp_obj = { 'arg_supports_session': val };
              const message = new mojo.internal.Message(
                this.router_, 0, mojo.internal.kMessageFlagIsResponse,
                header.ordinal, header.requestId, mojo.internal.bindings.device.mojom.VRService_SupportsSession_ResponseParamsSpec.$.structSpec, resp_obj);
              this.router_.send(message);
            }).catch(e => console.error('[GeneratedReceiver] supportsSession FAILED:', e));
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.device.mojom.VRService_ExitPresent_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.exitPresent');
          const result = this.impl.exitPresent();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const resp_obj = response;
              const message = new mojo.internal.Message(
                this.router_, 0, mojo.internal.kMessageFlagIsResponse,
                header.ordinal, header.requestId, mojo.internal.bindings.device.mojom.VRService_ExitPresent_ResponseParamsSpec.$.structSpec, resp_obj);
              this.router_.send(message);
            }).catch(e => console.error('[GeneratedReceiver] exitPresent FAILED:', e));
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.device.mojom.VRService_SetFramesThrottled_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setFramesThrottled');
          const result = this.impl.setFramesThrottled(params.arg_throttled);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.device.mojom.VRService_MakeXrCompatible_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.makeXrCompatible');
          const result = this.impl.makeXrCompatible();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const val = (response && typeof response === 'object' && 'arg_xr_compatible_result' in response) ? response['arg_xr_compatible_result'] : response;
              const resp_obj = { 'arg_xr_compatible_result': val };
              const message = new mojo.internal.Message(
                this.router_, 0, mojo.internal.kMessageFlagIsResponse,
                header.ordinal, header.requestId, mojo.internal.bindings.device.mojom.VRService_MakeXrCompatible_ResponseParamsSpec.$.structSpec, resp_obj);
              this.router_.send(message);
            }).catch(e => console.error('[GeneratedReceiver] makeXrCompatible FAILED:', e));
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

mojo.internal.bindings.device.mojom.VRServiceReceiver = mojo.internal.bindings.device.mojom.VRServiceReceiver;

mojo.internal.bindings.device.mojom.VRServicePtr = mojo.internal.bindings.device.mojom.VRServiceRemote;
mojo.internal.bindings.device.mojom.VRServiceRequest = mojo.internal.bindings.device.mojom.VRServicePendingReceiver;


// Interface: XRSessionMetricsRecorder
mojo.internal.bindings.device.mojom.XRSessionMetricsRecorderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
    if (handle) {
      this.__mojoHandle = handle.router_ ? handle.router_.pipe_ : (handle.pipe_ || handle);
    }
  }
};

mojo.internal.bindings.device.mojom.XRSessionMetricsRecorderRemote = class {
  static get $interfaceName() {
    return 'device.mojom.XRSessionMetricsRecorder';
  }

  constructor(handle = undefined) {
    this.__mojoHandle = handle;
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.device.mojom.XRSessionMetricsRecorderPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.device.mojom.XRSessionMetricsRecorderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  reportFeatureUsed(arg_feature) {
    return this.$.reportFeatureUsed(arg_feature);
  }
};

mojo.internal.bindings.device.mojom.XRSessionMetricsRecorderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('device.mojom.XRSessionMetricsRecorder', [
      { explicit: null },
    ]);
  }

  reportFeatureUsed(arg_feature) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.device.mojom.XRSessionMetricsRecorder_ReportFeatureUsed_ParamsSpec,
      null,
      [arg_feature],
      false);
  }

};

mojo.internal.bindings.device.mojom.XRSessionMetricsRecorder.getRemote = function() {
  let remote = new mojo.internal.bindings.device.mojom.XRSessionMetricsRecorderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'device.mojom.XRSessionMetricsRecorder',
    'context');
  return remote.$;
};

mojo.internal.bindings.device.mojom.XRSessionMetricsRecorderReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('device.mojom.XRSessionMetricsRecorder', [
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx); // Scrambled/Explicit
    });
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onError: function() { console.log('[GeneratedReceiver] Endpoint Error'); },
      onMessageReceived: (...args) => {
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
           console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
           return;
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      
      // FEEDBACK LOOP: Report the wire truth to the learner
      this.mapOrdinal(header.ordinal, dispatchId);
      
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.device.mojom.XRSessionMetricsRecorder_ReportFeatureUsed_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.reportFeatureUsed');
          const result = this.impl.reportFeatureUsed(params.arg_feature);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.device.mojom.XRSessionMetricsRecorderReceiver = mojo.internal.bindings.device.mojom.XRSessionMetricsRecorderReceiver;

mojo.internal.bindings.device.mojom.XRSessionMetricsRecorderPtr = mojo.internal.bindings.device.mojom.XRSessionMetricsRecorderRemote;
mojo.internal.bindings.device.mojom.XRSessionMetricsRecorderRequest = mojo.internal.bindings.device.mojom.XRSessionMetricsRecorderPendingReceiver;


// Interface: VRServiceClient
mojo.internal.bindings.device.mojom.VRServiceClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
    if (handle) {
      this.__mojoHandle = handle.router_ ? handle.router_.pipe_ : (handle.pipe_ || handle);
    }
  }
};

mojo.internal.bindings.device.mojom.VRServiceClientRemote = class {
  static get $interfaceName() {
    return 'device.mojom.VRServiceClient';
  }

  constructor(handle = undefined) {
    this.__mojoHandle = handle;
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.device.mojom.VRServiceClientPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.device.mojom.VRServiceClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onDeviceChanged() {
    return this.$.onDeviceChanged();
  }
};

mojo.internal.bindings.device.mojom.VRServiceClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('device.mojom.VRServiceClient', [
      { explicit: null },
    ]);
  }

  onDeviceChanged() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.device.mojom.VRServiceClient_OnDeviceChanged_ParamsSpec,
      null,
      [],
      false);
  }

};

mojo.internal.bindings.device.mojom.VRServiceClient.getRemote = function() {
  let remote = new mojo.internal.bindings.device.mojom.VRServiceClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'device.mojom.VRServiceClient',
    'context');
  return remote.$;
};

mojo.internal.bindings.device.mojom.VRServiceClientReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('device.mojom.VRServiceClient', [
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx); // Scrambled/Explicit
    });
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onError: function() { console.log('[GeneratedReceiver] Endpoint Error'); },
      onMessageReceived: (...args) => {
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
           console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
           return;
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      
      // FEEDBACK LOOP: Report the wire truth to the learner
      this.mapOrdinal(header.ordinal, dispatchId);
      
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.device.mojom.VRServiceClient_OnDeviceChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onDeviceChanged');
          const result = this.impl.onDeviceChanged();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.device.mojom.VRServiceClientReceiver = mojo.internal.bindings.device.mojom.VRServiceClientReceiver;

mojo.internal.bindings.device.mojom.VRServiceClientPtr = mojo.internal.bindings.device.mojom.VRServiceClientRemote;
mojo.internal.bindings.device.mojom.VRServiceClientRequest = mojo.internal.bindings.device.mojom.VRServiceClientPendingReceiver;


// Interface: XREnvironmentIntegrationProvider
mojo.internal.bindings.device.mojom.XREnvironmentIntegrationProviderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
    if (handle) {
      this.__mojoHandle = handle.router_ ? handle.router_.pipe_ : (handle.pipe_ || handle);
    }
  }
};

mojo.internal.bindings.device.mojom.XREnvironmentIntegrationProviderRemote = class {
  static get $interfaceName() {
    return 'device.mojom.XREnvironmentIntegrationProvider';
  }

  constructor(handle = undefined) {
    this.__mojoHandle = handle;
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.device.mojom.XREnvironmentIntegrationProviderPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.device.mojom.XREnvironmentIntegrationProviderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  subscribeToHitTest(arg_native_origin_information, arg_entity_types, arg_ray) {
    return this.$.subscribeToHitTest(arg_native_origin_information, arg_entity_types, arg_ray);
  }
  subscribeToHitTestForTransientInput(arg_profile_name, arg_entity_types, arg_ray) {
    return this.$.subscribeToHitTestForTransientInput(arg_profile_name, arg_entity_types, arg_ray);
  }
  unsubscribeFromHitTest(arg_subscription_id) {
    return this.$.unsubscribeFromHitTest(arg_subscription_id);
  }
  createAnchor(arg_native_origin_information, arg_native_origin_from_anchor, arg_plane_id) {
    return this.$.createAnchor(arg_native_origin_information, arg_native_origin_from_anchor, arg_plane_id);
  }
  detachAnchor(arg_anchor_id) {
    return this.$.detachAnchor(arg_anchor_id);
  }
};

mojo.internal.bindings.device.mojom.XREnvironmentIntegrationProviderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('device.mojom.XREnvironmentIntegrationProvider', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  subscribeToHitTest(arg_native_origin_information, arg_entity_types, arg_ray) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.device.mojom.XREnvironmentIntegrationProvider_SubscribeToHitTest_ParamsSpec,
      mojo.internal.bindings.device.mojom.XREnvironmentIntegrationProvider_SubscribeToHitTest_ResponseParamsSpec,
      [arg_native_origin_information, arg_entity_types, arg_ray],
      false);
  }

  subscribeToHitTestForTransientInput(arg_profile_name, arg_entity_types, arg_ray) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.device.mojom.XREnvironmentIntegrationProvider_SubscribeToHitTestForTransientInput_ParamsSpec,
      mojo.internal.bindings.device.mojom.XREnvironmentIntegrationProvider_SubscribeToHitTestForTransientInput_ResponseParamsSpec,
      [arg_profile_name, arg_entity_types, arg_ray],
      false);
  }

  unsubscribeFromHitTest(arg_subscription_id) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.device.mojom.XREnvironmentIntegrationProvider_UnsubscribeFromHitTest_ParamsSpec,
      null,
      [arg_subscription_id],
      false);
  }

  createAnchor(arg_native_origin_information, arg_native_origin_from_anchor, arg_plane_id) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.device.mojom.XREnvironmentIntegrationProvider_CreateAnchor_ParamsSpec,
      mojo.internal.bindings.device.mojom.XREnvironmentIntegrationProvider_CreateAnchor_ResponseParamsSpec,
      [arg_native_origin_information, arg_native_origin_from_anchor, arg_plane_id],
      false);
  }

  detachAnchor(arg_anchor_id) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.device.mojom.XREnvironmentIntegrationProvider_DetachAnchor_ParamsSpec,
      null,
      [arg_anchor_id],
      false);
  }

};

mojo.internal.bindings.device.mojom.XREnvironmentIntegrationProvider.getRemote = function() {
  let remote = new mojo.internal.bindings.device.mojom.XREnvironmentIntegrationProviderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'device.mojom.XREnvironmentIntegrationProvider',
    'context');
  return remote.$;
};

mojo.internal.bindings.device.mojom.XREnvironmentIntegrationProviderReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('device.mojom.XREnvironmentIntegrationProvider', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx); // Scrambled/Explicit
    });
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onError: function() { console.log('[GeneratedReceiver] Endpoint Error'); },
      onMessageReceived: (...args) => {
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
           console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
           return;
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      
      // FEEDBACK LOOP: Report the wire truth to the learner
      this.mapOrdinal(header.ordinal, dispatchId);
      
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.device.mojom.XREnvironmentIntegrationProvider_SubscribeToHitTest_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.subscribeToHitTest');
          const result = this.impl.subscribeToHitTest(params.arg_native_origin_information, params.arg_entity_types, params.arg_ray);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const val = (response && typeof response === 'object' && 'arg_subscription_id' in response) ? response['arg_subscription_id'] : response;
              const resp_obj = { 'arg_subscription_id': val };
              const message = new mojo.internal.Message(
                this.router_, 0, mojo.internal.kMessageFlagIsResponse,
                header.ordinal, header.requestId, mojo.internal.bindings.device.mojom.XREnvironmentIntegrationProvider_SubscribeToHitTest_ResponseParamsSpec.$.structSpec, resp_obj);
              this.router_.send(message);
            }).catch(e => console.error('[GeneratedReceiver] subscribeToHitTest FAILED:', e));
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.device.mojom.XREnvironmentIntegrationProvider_SubscribeToHitTestForTransientInput_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.subscribeToHitTestForTransientInput');
          const result = this.impl.subscribeToHitTestForTransientInput(params.arg_profile_name, params.arg_entity_types, params.arg_ray);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const val = (response && typeof response === 'object' && 'arg_subscription_id' in response) ? response['arg_subscription_id'] : response;
              const resp_obj = { 'arg_subscription_id': val };
              const message = new mojo.internal.Message(
                this.router_, 0, mojo.internal.kMessageFlagIsResponse,
                header.ordinal, header.requestId, mojo.internal.bindings.device.mojom.XREnvironmentIntegrationProvider_SubscribeToHitTestForTransientInput_ResponseParamsSpec.$.structSpec, resp_obj);
              this.router_.send(message);
            }).catch(e => console.error('[GeneratedReceiver] subscribeToHitTestForTransientInput FAILED:', e));
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.device.mojom.XREnvironmentIntegrationProvider_UnsubscribeFromHitTest_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.unsubscribeFromHitTest');
          const result = this.impl.unsubscribeFromHitTest(params.arg_subscription_id);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.device.mojom.XREnvironmentIntegrationProvider_CreateAnchor_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.createAnchor');
          const result = this.impl.createAnchor(params.arg_native_origin_information, params.arg_native_origin_from_anchor, params.arg_plane_id);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const val = (response && typeof response === 'object' && 'arg_anchor_id' in response) ? response['arg_anchor_id'] : response;
              const resp_obj = { 'arg_anchor_id': val };
              const message = new mojo.internal.Message(
                this.router_, 0, mojo.internal.kMessageFlagIsResponse,
                header.ordinal, header.requestId, mojo.internal.bindings.device.mojom.XREnvironmentIntegrationProvider_CreateAnchor_ResponseParamsSpec.$.structSpec, resp_obj);
              this.router_.send(message);
            }).catch(e => console.error('[GeneratedReceiver] createAnchor FAILED:', e));
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.device.mojom.XREnvironmentIntegrationProvider_DetachAnchor_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.detachAnchor');
          const result = this.impl.detachAnchor(params.arg_anchor_id);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.device.mojom.XREnvironmentIntegrationProviderReceiver = mojo.internal.bindings.device.mojom.XREnvironmentIntegrationProviderReceiver;

mojo.internal.bindings.device.mojom.XREnvironmentIntegrationProviderPtr = mojo.internal.bindings.device.mojom.XREnvironmentIntegrationProviderRemote;
mojo.internal.bindings.device.mojom.XREnvironmentIntegrationProviderRequest = mojo.internal.bindings.device.mojom.XREnvironmentIntegrationProviderPendingReceiver;


// Interface: XRFrameDataProvider
mojo.internal.bindings.device.mojom.XRFrameDataProviderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
    if (handle) {
      this.__mojoHandle = handle.router_ ? handle.router_.pipe_ : (handle.pipe_ || handle);
    }
  }
};

mojo.internal.bindings.device.mojom.XRFrameDataProviderRemote = class {
  static get $interfaceName() {
    return 'device.mojom.XRFrameDataProvider';
  }

  constructor(handle = undefined) {
    this.__mojoHandle = handle;
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.device.mojom.XRFrameDataProviderPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.device.mojom.XRFrameDataProviderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  getFrameData(arg_options) {
    return this.$.getFrameData(arg_options);
  }
  getEnvironmentIntegrationProvider(arg_environment_provider) {
    return this.$.getEnvironmentIntegrationProvider(arg_environment_provider);
  }
};

mojo.internal.bindings.device.mojom.XRFrameDataProviderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('device.mojom.XRFrameDataProvider', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  getFrameData(arg_options) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.device.mojom.XRFrameDataProvider_GetFrameData_ParamsSpec,
      mojo.internal.bindings.device.mojom.XRFrameDataProvider_GetFrameData_ResponseParamsSpec,
      [arg_options],
      false);
  }

  getEnvironmentIntegrationProvider(arg_environment_provider) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.device.mojom.XRFrameDataProvider_GetEnvironmentIntegrationProvider_ParamsSpec,
      null,
      [arg_environment_provider],
      false);
  }

};

mojo.internal.bindings.device.mojom.XRFrameDataProvider.getRemote = function() {
  let remote = new mojo.internal.bindings.device.mojom.XRFrameDataProviderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'device.mojom.XRFrameDataProvider',
    'context');
  return remote.$;
};

mojo.internal.bindings.device.mojom.XRFrameDataProviderReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('device.mojom.XRFrameDataProvider', [
      { explicit: null },
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx); // Scrambled/Explicit
    });
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onError: function() { console.log('[GeneratedReceiver] Endpoint Error'); },
      onMessageReceived: (...args) => {
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
           console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
           return;
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      
      // FEEDBACK LOOP: Report the wire truth to the learner
      this.mapOrdinal(header.ordinal, dispatchId);
      
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.device.mojom.XRFrameDataProvider_GetFrameData_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getFrameData');
          const result = this.impl.getFrameData(params.arg_options);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const val = (response && typeof response === 'object' && 'arg_frame_data' in response) ? response['arg_frame_data'] : response;
              const resp_obj = { 'arg_frame_data': val };
              const message = new mojo.internal.Message(
                this.router_, 0, mojo.internal.kMessageFlagIsResponse,
                header.ordinal, header.requestId, mojo.internal.bindings.device.mojom.XRFrameDataProvider_GetFrameData_ResponseParamsSpec.$.structSpec, resp_obj);
              this.router_.send(message);
            }).catch(e => console.error('[GeneratedReceiver] getFrameData FAILED:', e));
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.device.mojom.XRFrameDataProvider_GetEnvironmentIntegrationProvider_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getEnvironmentIntegrationProvider');
          const result = this.impl.getEnvironmentIntegrationProvider(params.arg_environment_provider);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.device.mojom.XRFrameDataProviderReceiver = mojo.internal.bindings.device.mojom.XRFrameDataProviderReceiver;

mojo.internal.bindings.device.mojom.XRFrameDataProviderPtr = mojo.internal.bindings.device.mojom.XRFrameDataProviderRemote;
mojo.internal.bindings.device.mojom.XRFrameDataProviderRequest = mojo.internal.bindings.device.mojom.XRFrameDataProviderPendingReceiver;


// Interface: XRPresentationProvider
mojo.internal.bindings.device.mojom.XRPresentationProviderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
    if (handle) {
      this.__mojoHandle = handle.router_ ? handle.router_.pipe_ : (handle.pipe_ || handle);
    }
  }
};

mojo.internal.bindings.device.mojom.XRPresentationProviderRemote = class {
  static get $interfaceName() {
    return 'device.mojom.XRPresentationProvider';
  }

  constructor(handle = undefined) {
    this.__mojoHandle = handle;
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.device.mojom.XRPresentationProviderPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.device.mojom.XRPresentationProviderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  updateLayerBounds(arg_frame_id, arg_left_bounds, arg_right_bounds, arg_source_size) {
    return this.$.updateLayerBounds(arg_frame_id, arg_left_bounds, arg_right_bounds, arg_source_size);
  }
  submitFrameMissing(arg_frame_id, arg_camera_export_multi_result) {
    return this.$.submitFrameMissing(arg_frame_id, arg_camera_export_multi_result);
  }
  submitFrame(arg_frame_id, arg_time_waited) {
    return this.$.submitFrame(arg_frame_id, arg_time_waited);
  }
  submitFrameWithTextureHandle(arg_frame_id, arg_texture, arg_sync_token) {
    return this.$.submitFrameWithTextureHandle(arg_frame_id, arg_texture, arg_sync_token);
  }
  submitFrameDrawnIntoTexture(arg_frame_id, arg_layer_updates, arg_camera_export_multi_result, arg_time_waited) {
    return this.$.submitFrameDrawnIntoTexture(arg_frame_id, arg_layer_updates, arg_camera_export_multi_result, arg_time_waited);
  }
};

mojo.internal.bindings.device.mojom.XRPresentationProviderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('device.mojom.XRPresentationProvider', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  updateLayerBounds(arg_frame_id, arg_left_bounds, arg_right_bounds, arg_source_size) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.device.mojom.XRPresentationProvider_UpdateLayerBounds_ParamsSpec,
      null,
      [arg_frame_id, arg_left_bounds, arg_right_bounds, arg_source_size],
      false);
  }

  submitFrameMissing(arg_frame_id, arg_camera_export_multi_result) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.device.mojom.XRPresentationProvider_SubmitFrameMissing_ParamsSpec,
      null,
      [arg_frame_id, arg_camera_export_multi_result],
      false);
  }

  submitFrame(arg_frame_id, arg_time_waited) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.device.mojom.XRPresentationProvider_SubmitFrame_ParamsSpec,
      null,
      [arg_frame_id, arg_time_waited],
      false);
  }

  submitFrameWithTextureHandle(arg_frame_id, arg_texture, arg_sync_token) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.device.mojom.XRPresentationProvider_SubmitFrameWithTextureHandle_ParamsSpec,
      null,
      [arg_frame_id, arg_texture, arg_sync_token],
      false);
  }

  submitFrameDrawnIntoTexture(arg_frame_id, arg_layer_updates, arg_camera_export_multi_result, arg_time_waited) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.device.mojom.XRPresentationProvider_SubmitFrameDrawnIntoTexture_ParamsSpec,
      null,
      [arg_frame_id, arg_layer_updates, arg_camera_export_multi_result, arg_time_waited],
      false);
  }

};

mojo.internal.bindings.device.mojom.XRPresentationProvider.getRemote = function() {
  let remote = new mojo.internal.bindings.device.mojom.XRPresentationProviderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'device.mojom.XRPresentationProvider',
    'context');
  return remote.$;
};

mojo.internal.bindings.device.mojom.XRPresentationProviderReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('device.mojom.XRPresentationProvider', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx); // Scrambled/Explicit
    });
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onError: function() { console.log('[GeneratedReceiver] Endpoint Error'); },
      onMessageReceived: (...args) => {
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
           console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
           return;
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      
      // FEEDBACK LOOP: Report the wire truth to the learner
      this.mapOrdinal(header.ordinal, dispatchId);
      
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.device.mojom.XRPresentationProvider_UpdateLayerBounds_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.updateLayerBounds');
          const result = this.impl.updateLayerBounds(params.arg_frame_id, params.arg_left_bounds, params.arg_right_bounds, params.arg_source_size);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.device.mojom.XRPresentationProvider_SubmitFrameMissing_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.submitFrameMissing');
          const result = this.impl.submitFrameMissing(params.arg_frame_id, params.arg_camera_export_multi_result);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.device.mojom.XRPresentationProvider_SubmitFrame_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.submitFrame');
          const result = this.impl.submitFrame(params.arg_frame_id, params.arg_time_waited);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.device.mojom.XRPresentationProvider_SubmitFrameWithTextureHandle_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.submitFrameWithTextureHandle');
          const result = this.impl.submitFrameWithTextureHandle(params.arg_frame_id, params.arg_texture, params.arg_sync_token);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.device.mojom.XRPresentationProvider_SubmitFrameDrawnIntoTexture_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.submitFrameDrawnIntoTexture');
          const result = this.impl.submitFrameDrawnIntoTexture(params.arg_frame_id, params.arg_layer_updates, params.arg_camera_export_multi_result, params.arg_time_waited);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.device.mojom.XRPresentationProviderReceiver = mojo.internal.bindings.device.mojom.XRPresentationProviderReceiver;

mojo.internal.bindings.device.mojom.XRPresentationProviderPtr = mojo.internal.bindings.device.mojom.XRPresentationProviderRemote;
mojo.internal.bindings.device.mojom.XRPresentationProviderRequest = mojo.internal.bindings.device.mojom.XRPresentationProviderPendingReceiver;


// Interface: XRPresentationClient
mojo.internal.bindings.device.mojom.XRPresentationClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
    if (handle) {
      this.__mojoHandle = handle.router_ ? handle.router_.pipe_ : (handle.pipe_ || handle);
    }
  }
};

mojo.internal.bindings.device.mojom.XRPresentationClientRemote = class {
  static get $interfaceName() {
    return 'device.mojom.XRPresentationClient';
  }

  constructor(handle = undefined) {
    this.__mojoHandle = handle;
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.device.mojom.XRPresentationClientPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.device.mojom.XRPresentationClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onSubmitFrameTransferred(arg_succeeded, arg_layer_ids) {
    return this.$.onSubmitFrameTransferred(arg_succeeded, arg_layer_ids);
  }
  onSubmitFrameRendered() {
    return this.$.onSubmitFrameRendered();
  }
  onSubmitFrameGpuFence(arg_gpu_fence_handle) {
    return this.$.onSubmitFrameGpuFence(arg_gpu_fence_handle);
  }
};

mojo.internal.bindings.device.mojom.XRPresentationClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('device.mojom.XRPresentationClient', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  onSubmitFrameTransferred(arg_succeeded, arg_layer_ids) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.device.mojom.XRPresentationClient_OnSubmitFrameTransferred_ParamsSpec,
      null,
      [arg_succeeded, arg_layer_ids],
      false);
  }

  onSubmitFrameRendered() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.device.mojom.XRPresentationClient_OnSubmitFrameRendered_ParamsSpec,
      null,
      [],
      false);
  }

  onSubmitFrameGpuFence(arg_gpu_fence_handle) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.device.mojom.XRPresentationClient_OnSubmitFrameGpuFence_ParamsSpec,
      null,
      [arg_gpu_fence_handle],
      false);
  }

};

mojo.internal.bindings.device.mojom.XRPresentationClient.getRemote = function() {
  let remote = new mojo.internal.bindings.device.mojom.XRPresentationClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'device.mojom.XRPresentationClient',
    'context');
  return remote.$;
};

mojo.internal.bindings.device.mojom.XRPresentationClientReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('device.mojom.XRPresentationClient', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx); // Scrambled/Explicit
    });
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onError: function() { console.log('[GeneratedReceiver] Endpoint Error'); },
      onMessageReceived: (...args) => {
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
           console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
           return;
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      
      // FEEDBACK LOOP: Report the wire truth to the learner
      this.mapOrdinal(header.ordinal, dispatchId);
      
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.device.mojom.XRPresentationClient_OnSubmitFrameTransferred_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onSubmitFrameTransferred');
          const result = this.impl.onSubmitFrameTransferred(params.arg_succeeded, params.arg_layer_ids);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.device.mojom.XRPresentationClient_OnSubmitFrameRendered_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onSubmitFrameRendered');
          const result = this.impl.onSubmitFrameRendered();
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.device.mojom.XRPresentationClient_OnSubmitFrameGpuFence_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onSubmitFrameGpuFence');
          const result = this.impl.onSubmitFrameGpuFence(params.arg_gpu_fence_handle);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.device.mojom.XRPresentationClientReceiver = mojo.internal.bindings.device.mojom.XRPresentationClientReceiver;

mojo.internal.bindings.device.mojom.XRPresentationClientPtr = mojo.internal.bindings.device.mojom.XRPresentationClientRemote;
mojo.internal.bindings.device.mojom.XRPresentationClientRequest = mojo.internal.bindings.device.mojom.XRPresentationClientPendingReceiver;


// Interface: XRSessionClient
mojo.internal.bindings.device.mojom.XRSessionClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
    if (handle) {
      this.__mojoHandle = handle.router_ ? handle.router_.pipe_ : (handle.pipe_ || handle);
    }
  }
};

mojo.internal.bindings.device.mojom.XRSessionClientRemote = class {
  static get $interfaceName() {
    return 'device.mojom.XRSessionClient';
  }

  constructor(handle = undefined) {
    this.__mojoHandle = handle;
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.device.mojom.XRSessionClientPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.device.mojom.XRSessionClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onExitPresent() {
    return this.$.onExitPresent();
  }
  onVisibilityStateChanged(arg_visibility_state) {
    return this.$.onVisibilityStateChanged(arg_visibility_state);
  }
};

mojo.internal.bindings.device.mojom.XRSessionClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('device.mojom.XRSessionClient', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  onExitPresent() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.device.mojom.XRSessionClient_OnExitPresent_ParamsSpec,
      null,
      [],
      false);
  }

  onVisibilityStateChanged(arg_visibility_state) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.device.mojom.XRSessionClient_OnVisibilityStateChanged_ParamsSpec,
      null,
      [arg_visibility_state],
      false);
  }

};

mojo.internal.bindings.device.mojom.XRSessionClient.getRemote = function() {
  let remote = new mojo.internal.bindings.device.mojom.XRSessionClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'device.mojom.XRSessionClient',
    'context');
  return remote.$;
};

mojo.internal.bindings.device.mojom.XRSessionClientReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('device.mojom.XRSessionClient', [
      { explicit: null },
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx); // Scrambled/Explicit
    });
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onError: function() { console.log('[GeneratedReceiver] Endpoint Error'); },
      onMessageReceived: (...args) => {
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
           console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
           return;
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      
      // FEEDBACK LOOP: Report the wire truth to the learner
      this.mapOrdinal(header.ordinal, dispatchId);
      
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.device.mojom.XRSessionClient_OnExitPresent_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onExitPresent');
          const result = this.impl.onExitPresent();
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.device.mojom.XRSessionClient_OnVisibilityStateChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onVisibilityStateChanged');
          const result = this.impl.onVisibilityStateChanged(params.arg_visibility_state);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.device.mojom.XRSessionClientReceiver = mojo.internal.bindings.device.mojom.XRSessionClientReceiver;

mojo.internal.bindings.device.mojom.XRSessionClientPtr = mojo.internal.bindings.device.mojom.XRSessionClientRemote;
mojo.internal.bindings.device.mojom.XRSessionClientRequest = mojo.internal.bindings.device.mojom.XRSessionClientPendingReceiver;


// Interface: XRLayerManager
mojo.internal.bindings.device.mojom.XRLayerManagerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
    if (handle) {
      this.__mojoHandle = handle.router_ ? handle.router_.pipe_ : (handle.pipe_ || handle);
    }
  }
};

mojo.internal.bindings.device.mojom.XRLayerManagerRemote = class {
  static get $interfaceName() {
    return 'device.mojom.XRLayerManager';
  }

  constructor(handle = undefined) {
    this.__mojoHandle = handle;
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.device.mojom.XRLayerManagerPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.device.mojom.XRLayerManagerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  createCompositionLayer(arg_create_data) {
    return this.$.createCompositionLayer(arg_create_data);
  }
  destroyCompositionLayer(arg_layer_id) {
    return this.$.destroyCompositionLayer(arg_layer_id);
  }
  updateCompositionLayer(arg_layer_id, arg_update_data) {
    return this.$.updateCompositionLayer(arg_layer_id, arg_update_data);
  }
  setEnabledCompositionLayers(arg_layer_ids) {
    return this.$.setEnabledCompositionLayers(arg_layer_ids);
  }
};

mojo.internal.bindings.device.mojom.XRLayerManagerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('device.mojom.XRLayerManager', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  createCompositionLayer(arg_create_data) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.device.mojom.XRLayerManager_CreateCompositionLayer_ParamsSpec,
      mojo.internal.bindings.device.mojom.XRLayerManager_CreateCompositionLayer_ResponseParamsSpec,
      [arg_create_data],
      false);
  }

  destroyCompositionLayer(arg_layer_id) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.device.mojom.XRLayerManager_DestroyCompositionLayer_ParamsSpec,
      null,
      [arg_layer_id],
      false);
  }

  updateCompositionLayer(arg_layer_id, arg_update_data) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.device.mojom.XRLayerManager_UpdateCompositionLayer_ParamsSpec,
      null,
      [arg_layer_id, arg_update_data],
      false);
  }

  setEnabledCompositionLayers(arg_layer_ids) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.device.mojom.XRLayerManager_SetEnabledCompositionLayers_ParamsSpec,
      null,
      [arg_layer_ids],
      false);
  }

};

mojo.internal.bindings.device.mojom.XRLayerManager.getRemote = function() {
  let remote = new mojo.internal.bindings.device.mojom.XRLayerManagerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'device.mojom.XRLayerManager',
    'context');
  return remote.$;
};

mojo.internal.bindings.device.mojom.XRLayerManagerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('device.mojom.XRLayerManager', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx); // Scrambled/Explicit
    });
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onError: function() { console.log('[GeneratedReceiver] Endpoint Error'); },
      onMessageReceived: (...args) => {
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
           console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
           return;
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      
      // FEEDBACK LOOP: Report the wire truth to the learner
      this.mapOrdinal(header.ordinal, dispatchId);
      
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.device.mojom.XRLayerManager_CreateCompositionLayer_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.createCompositionLayer');
          const result = this.impl.createCompositionLayer(params.arg_create_data);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const val = (response && typeof response === 'object' && 'arg_code' in response) ? response['arg_code'] : response;
              const resp_obj = { 'arg_code': val };
              const message = new mojo.internal.Message(
                this.router_, 0, mojo.internal.kMessageFlagIsResponse,
                header.ordinal, header.requestId, mojo.internal.bindings.device.mojom.XRLayerManager_CreateCompositionLayer_ResponseParamsSpec.$.structSpec, resp_obj);
              this.router_.send(message);
            }).catch(e => console.error('[GeneratedReceiver] createCompositionLayer FAILED:', e));
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.device.mojom.XRLayerManager_DestroyCompositionLayer_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.destroyCompositionLayer');
          const result = this.impl.destroyCompositionLayer(params.arg_layer_id);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.device.mojom.XRLayerManager_UpdateCompositionLayer_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.updateCompositionLayer');
          const result = this.impl.updateCompositionLayer(params.arg_layer_id, params.arg_update_data);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.device.mojom.XRLayerManager_SetEnabledCompositionLayers_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setEnabledCompositionLayers');
          const result = this.impl.setEnabledCompositionLayers(params.arg_layer_ids);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.device.mojom.XRLayerManagerReceiver = mojo.internal.bindings.device.mojom.XRLayerManagerReceiver;

mojo.internal.bindings.device.mojom.XRLayerManagerPtr = mojo.internal.bindings.device.mojom.XRLayerManagerRemote;
mojo.internal.bindings.device.mojom.XRLayerManagerRequest = mojo.internal.bindings.device.mojom.XRLayerManagerPendingReceiver;


// Interface: WebXrInternalsRendererListener
mojo.internal.bindings.device.mojom.WebXrInternalsRendererListenerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
    if (handle) {
      this.__mojoHandle = handle.router_ ? handle.router_.pipe_ : (handle.pipe_ || handle);
    }
  }
};

mojo.internal.bindings.device.mojom.WebXrInternalsRendererListenerRemote = class {
  static get $interfaceName() {
    return 'device.mojom.WebXrInternalsRendererListener';
  }

  constructor(handle = undefined) {
    this.__mojoHandle = handle;
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.device.mojom.WebXrInternalsRendererListenerPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.device.mojom.WebXrInternalsRendererListenerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onFrameData(arg_xrframe_statistics) {
    return this.$.onFrameData(arg_xrframe_statistics);
  }
  onConsoleLog(arg_xrlogging_statistics) {
    return this.$.onConsoleLog(arg_xrlogging_statistics);
  }
};

mojo.internal.bindings.device.mojom.WebXrInternalsRendererListenerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('device.mojom.WebXrInternalsRendererListener', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  onFrameData(arg_xrframe_statistics) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.device.mojom.WebXrInternalsRendererListener_OnFrameData_ParamsSpec,
      null,
      [arg_xrframe_statistics],
      false);
  }

  onConsoleLog(arg_xrlogging_statistics) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.device.mojom.WebXrInternalsRendererListener_OnConsoleLog_ParamsSpec,
      null,
      [arg_xrlogging_statistics],
      false);
  }

};

mojo.internal.bindings.device.mojom.WebXrInternalsRendererListener.getRemote = function() {
  let remote = new mojo.internal.bindings.device.mojom.WebXrInternalsRendererListenerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'device.mojom.WebXrInternalsRendererListener',
    'context');
  return remote.$;
};

mojo.internal.bindings.device.mojom.WebXrInternalsRendererListenerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('device.mojom.WebXrInternalsRendererListener', [
      { explicit: null },
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx); // Scrambled/Explicit
    });
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onError: function() { console.log('[GeneratedReceiver] Endpoint Error'); },
      onMessageReceived: (...args) => {
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
           console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
           return;
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      
      // FEEDBACK LOOP: Report the wire truth to the learner
      this.mapOrdinal(header.ordinal, dispatchId);
      
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.device.mojom.WebXrInternalsRendererListener_OnFrameData_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onFrameData');
          const result = this.impl.onFrameData(params.arg_xrframe_statistics);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.device.mojom.WebXrInternalsRendererListener_OnConsoleLog_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onConsoleLog');
          const result = this.impl.onConsoleLog(params.arg_xrlogging_statistics);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.device.mojom.WebXrInternalsRendererListenerReceiver = mojo.internal.bindings.device.mojom.WebXrInternalsRendererListenerReceiver;

mojo.internal.bindings.device.mojom.WebXrInternalsRendererListenerPtr = mojo.internal.bindings.device.mojom.WebXrInternalsRendererListenerRemote;
mojo.internal.bindings.device.mojom.WebXrInternalsRendererListenerRequest = mojo.internal.bindings.device.mojom.WebXrInternalsRendererListenerPendingReceiver;


// Specs (at the end to ensure classes are defined for InterfaceProxy)

// Union: XRNativeOriginInformation
mojo.internal.Union(
    mojo.internal.bindings.device.mojom.XRNativeOriginInformationSpec, 'device.mojom.XRNativeOriginInformation', {
      'arg_input_source_space_info': {
        'ordinal': 0,
        'type': mojo.internal.bindings.device.mojom.XRInputSourceSpaceInfoSpec,
        'nullable': false,
      },
      'arg_plane_id': {
        'ordinal': 1,
        'type': mojo.internal.bindings.device.mojom.PlaneIdSpec,
        'nullable': false,
      },
      'arg_mesh_id': {
        'ordinal': 2,
        'type': mojo.internal.bindings.device.mojom.MeshIdSpec,
        'nullable': false,
      },
      'arg_anchor_id': {
        'ordinal': 3,
        'type': mojo.internal.bindings.device.mojom.AnchorIdSpec,
        'nullable': false,
      },
      'arg_reference_space_type': {
        'ordinal': 4,
        'type': mojo.internal.bindings.device.mojom.XRReferenceSpaceTypeSpec,
        'nullable': false,
      },
      'arg_hand_joint_space_info': {
        'ordinal': 5,
        'type': mojo.internal.bindings.device.mojom.XRHandJointSpaceInfoSpec,
        'nullable': false,
      },
      'arg_image_index': {
        'ordinal': 6,
        'type': mojo.internal.Uint32,
        'nullable': false,
      },
    });

// Union: XRDepthData
mojo.internal.Union(
    mojo.internal.bindings.device.mojom.XRDepthDataSpec, 'device.mojom.XRDepthData', {
      'arg_data_still_valid': {
        'ordinal': 0,
        'type': mojo.internal.bindings.device.mojom.XRDepthDataStillValidSpec,
        'nullable': false,
      },
      'arg_updated_depth_data': {
        'ordinal': 1,
        'type': mojo.internal.bindings.device.mojom.XRDepthDataUpdatedSpec,
        'nullable': false,
      },
    });

// Union: XRLayerSpecificData
mojo.internal.Union(
    mojo.internal.bindings.device.mojom.XRLayerSpecificDataSpec, 'device.mojom.XRLayerSpecificData', {
      'arg_projection': {
        'ordinal': 0,
        'type': mojo.internal.bindings.device.mojom.XRProjectionLayerDataSpec,
        'nullable': false,
      },
      'arg_quad': {
        'ordinal': 1,
        'type': mojo.internal.bindings.device.mojom.XRQuadLayerDataSpec,
        'nullable': false,
      },
      'arg_cylinder': {
        'ordinal': 2,
        'type': mojo.internal.bindings.device.mojom.XRCylinderLayerDataSpec,
        'nullable': false,
      },
      'arg_equirect': {
        'ordinal': 3,
        'type': mojo.internal.bindings.device.mojom.XREquirectLayerDataSpec,
        'nullable': false,
      },
      'arg_cube': {
        'ordinal': 4,
        'type': mojo.internal.bindings.device.mojom.XRCubeLayerDataSpec,
        'nullable': false,
      },
    });

// Union: RequestSessionResult
mojo.internal.Union(
    mojo.internal.bindings.device.mojom.RequestSessionResultSpec, 'device.mojom.RequestSessionResult', {
      'arg_success': {
        'ordinal': 0,
        'type': mojo.internal.bindings.device.mojom.RequestSessionSuccessSpec,
        'nullable': false,
      },
      'arg_failure_reason': {
        'ordinal': 1,
        'type': mojo.internal.bindings.device.mojom.RequestSessionErrorSpec,
        'nullable': false,
      },
    });

// Struct: XRDepthConfig
mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.XRDepthConfigSpec, 'device.mojom.XRDepthConfig', [
      mojo.internal.StructField('arg_depth_usage', 0, 0, mojo.internal.bindings.device.mojom.XRDepthUsageSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_depth_data_format', 4, 0, mojo.internal.bindings.device.mojom.XRDepthDataFormatSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_depth_type', 8, 0, mojo.internal.bindings.device.mojom.XRDepthTypeSpec, null, true, 0, undefined),
    ],
    [[0, 24]]);

// Struct: XRSessionDeviceConfig
mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.XRSessionDeviceConfigSpec, 'device.mojom.XRSessionDeviceConfig', [
      mojo.internal.StructField('arg_default_framebuffer_scale', 0, 0, mojo.internal.Float, 1.0, false, 0, undefined),
      mojo.internal.StructField('arg_supports_viewport_scaling', 4, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_enable_anti_aliasing', 4, 1, mojo.internal.Bool, true, false, 0, undefined),
      mojo.internal.StructField('arg_max_render_layers', 6, 0, mojo.internal.Uint16, 1, false, 0, undefined),
      mojo.internal.StructField('arg_views', 8, 0, mojo.internal.Array(mojo.internal.bindings.device.mojom.XRViewSpec, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_depth_configuration', 16, 0, mojo.internal.bindings.device.mojom.XRDepthConfigSpec, null, true, 0, undefined),
    ],
    [[0, 32]]);

// Struct: XRSession
mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.XRSessionSpec, 'device.mojom.XRSession', [
      mojo.internal.StructField('arg_data_provider', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.device.mojom.XRFrameDataProviderRemote), null, false, 0, undefined),
      mojo.internal.StructField('arg_layer_manager', 8, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.device.mojom.XRLayerManagerRemote), null, true, 0, undefined),
      mojo.internal.StructField('arg_client_receiver', 16, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.device.mojom.XRSessionClientPendingReceiver), null, true, 0, undefined),
      mojo.internal.StructField('arg_enviroment_blend_mode', 20, 0, mojo.internal.bindings.device.mojom.XREnvironmentBlendModeSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_submit_frame_sink', 24, 0, mojo.internal.bindings.device.mojom.XRPresentationConnectionSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_enabled_features', 32, 0, mojo.internal.Array(mojo.internal.bindings.device.mojom.XRSessionFeatureSpec, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_device_config', 40, 0, mojo.internal.bindings.device.mojom.XRSessionDeviceConfigSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_interaction_mode', 48, 0, mojo.internal.bindings.device.mojom.XRInteractionModeSpec, null, false, 0, undefined),
    ],
    [[0, 64]]);

// Struct: XRPresentationConnection
mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.XRPresentationConnectionSpec, 'device.mojom.XRPresentationConnection', [
      mojo.internal.StructField('arg_provider', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.device.mojom.XRPresentationProviderRemote), null, false, 0, undefined),
      mojo.internal.StructField('arg_client_receiver', 8, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.device.mojom.XRPresentationClientPendingReceiver), null, false, 0, undefined),
      mojo.internal.StructField('arg_transport_options', 16, 0, mojo.internal.bindings.device.mojom.XRPresentationTransportOptionsSpec, null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: XRInputSourceDescription
mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.XRInputSourceDescriptionSpec, 'device.mojom.XRInputSourceDescription', [
      mojo.internal.StructField('arg_target_ray_mode', 0, 0, mojo.internal.bindings.device.mojom.XRTargetRayModeSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_handedness', 4, 0, mojo.internal.bindings.device.mojom.XRHandednessSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_input_from_pointer', 8, 0, mojo.internal.bindings.gfx.mojom.TransformSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_profiles', 16, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: XRInputSourceState
mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.XRInputSourceStateSpec, 'device.mojom.XRInputSourceState', [
      mojo.internal.StructField('arg_source_id', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_emulated_position', 4, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_is_auxiliary', 4, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_primary_input_pressed', 4, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_primary_input_clicked', 4, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_primary_squeeze_pressed', 4, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_primary_squeeze_clicked', 4, 5, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_description', 8, 0, mojo.internal.bindings.device.mojom.XRInputSourceDescriptionSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_mojo_from_input', 16, 0, mojo.internal.bindings.gfx.mojom.TransformSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_gamepad', 24, 0, mojo.internal.bindings.device.mojom.GamepadSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_overlay_pointer_position', 32, 0, mojo.internal.bindings.gfx.mojom.PointFSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_hand_tracking_data', 40, 0, mojo.internal.bindings.device.mojom.XRHandTrackingDataSpec, null, true, 0, undefined),
    ],
    [[0, 56]]);

// Struct: VRFieldOfView
mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.VRFieldOfViewSpec, 'device.mojom.VRFieldOfView', [
      mojo.internal.StructField('arg_up_degrees', 0, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('arg_down_degrees', 4, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('arg_left_degrees', 8, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('arg_right_degrees', 12, 0, mojo.internal.Float, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: VRPose
mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.VRPoseSpec, 'device.mojom.VRPose', [
      mojo.internal.StructField('arg_orientation', 0, 0, mojo.internal.bindings.gfx.mojom.QuaternionSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_position', 8, 0, mojo.internal.bindings.gfx.mojom.Point3FSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_emulated_position', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: Pose
mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.PoseSpec, 'device.mojom.Pose', [
      mojo.internal.StructField('arg_orientation', 0, 0, mojo.internal.bindings.gfx.mojom.QuaternionSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_position', 8, 0, mojo.internal.bindings.gfx.mojom.Point3FSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: AnchorId
mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.AnchorIdSpec, 'device.mojom.AnchorId', [
      mojo.internal.StructField('arg_id_value', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: HitTestSubscriptionId
mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.HitTestSubscriptionIdSpec, 'device.mojom.HitTestSubscriptionId', [
      mojo.internal.StructField('arg_id_value', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: PlaneId
mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.PlaneIdSpec, 'device.mojom.PlaneId', [
      mojo.internal.StructField('arg_id_value', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: MeshId
mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.MeshIdSpec, 'device.mojom.MeshId', [
      mojo.internal.StructField('arg_id_value', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: XrVisibilityMaskId
mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.XrVisibilityMaskIdSpec, 'device.mojom.XrVisibilityMaskId', [
      mojo.internal.StructField('arg_id_value', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: XRRay
mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.XRRaySpec, 'device.mojom.XRRay', [
      mojo.internal.StructField('arg_origin', 0, 0, mojo.internal.bindings.gfx.mojom.Point3FSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_direction', 8, 0, mojo.internal.bindings.gfx.mojom.Vector3dFSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: XRHitResult
mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.XRHitResultSpec, 'device.mojom.XRHitResult', [
      mojo.internal.StructField('arg_mojo_from_result', 0, 0, mojo.internal.bindings.device.mojom.PoseSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_plane_id', 8, 0, mojo.internal.bindings.device.mojom.PlaneIdSpec, null, true, 0, undefined),
    ],
    [[0, 24]]);

// Struct: XRViewGeometry
mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.XRViewGeometrySpec, 'device.mojom.XRViewGeometry', [
      mojo.internal.StructField('arg_field_of_view', 0, 0, mojo.internal.bindings.device.mojom.VRFieldOfViewSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_mojo_from_view', 8, 0, mojo.internal.bindings.gfx.mojom.TransformSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: XRVisibilityMask
mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.XRVisibilityMaskSpec, 'device.mojom.XRVisibilityMask', [
      mojo.internal.StructField('arg_vertices', 0, 0, mojo.internal.Array(mojo.internal.bindings.gfx.mojom.PointFSpec, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_unvalidated_indices', 8, 0, mojo.internal.Array(mojo.internal.Uint32, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: XRView
mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.XRViewSpec, 'device.mojom.XRView', [
      mojo.internal.StructField('arg_eye', 0, 0, mojo.internal.bindings.device.mojom.XREyeSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_is_first_person_observer', 4, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_geometry', 8, 0, mojo.internal.bindings.device.mojom.XRViewGeometrySpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_viewport', 16, 0, mojo.internal.bindings.gfx.mojom.RectSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_depth_data', 24, 0, mojo.internal.bindings.device.mojom.XRDepthDataSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_visibility_mask', 40, 0, mojo.internal.bindings.device.mojom.XRVisibilityMaskSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_visibility_mask_id', 48, 0, mojo.internal.bindings.device.mojom.XrVisibilityMaskIdSpec, null, false, 0, undefined),
    ],
    [[0, 64]]);

// Struct: VRStageParameters
mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.VRStageParametersSpec, 'device.mojom.VRStageParameters', [
      mojo.internal.StructField('arg_mojo_from_stage', 0, 0, mojo.internal.bindings.gfx.mojom.TransformSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_bounds', 8, 0, mojo.internal.Array(mojo.internal.bindings.gfx.mojom.Point3FSpec, false), null, true, 0, undefined),
    ],
    [[0, 24]]);

// Struct: XRPresentationTransportOptions
mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.XRPresentationTransportOptionsSpec, 'device.mojom.XRPresentationTransportOptions', [
      mojo.internal.StructField('arg_transport_method', 0, 0, mojo.internal.bindings.device.mojom.XRPresentationTransportMethodSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_wait_for_transfer_notification', 4, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_wait_for_render_notification', 4, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_wait_for_gpu_fence', 4, 2, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: XRInputSourceSpaceInfo
mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.XRInputSourceSpaceInfoSpec, 'device.mojom.XRInputSourceSpaceInfo', [
      mojo.internal.StructField('arg_input_source_id', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_input_source_space_type', 4, 0, mojo.internal.bindings.device.mojom.XRInputSourceSpaceTypeSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: XRHandJointSpaceInfo
mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.XRHandJointSpaceInfoSpec, 'device.mojom.XRHandJointSpaceInfo', [
      mojo.internal.StructField('arg_handedness', 0, 0, mojo.internal.bindings.device.mojom.XRHandednessSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_joint', 4, 0, mojo.internal.bindings.device.mojom.XRHandJointSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: XRPlanePointData
mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.XRPlanePointDataSpec, 'device.mojom.XRPlanePointData', [
      mojo.internal.StructField('arg_x', 0, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('arg_z', 4, 0, mojo.internal.Float, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: XRPlaneData
mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.XRPlaneDataSpec, 'device.mojom.XRPlaneData', [
      mojo.internal.StructField('arg_id', 0, 0, mojo.internal.bindings.device.mojom.PlaneIdSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_orientation', 8, 0, mojo.internal.bindings.device.mojom.XRPlaneOrientationSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_semantic_label', 12, 0, mojo.internal.bindings.device.mojom.XRSemanticLabelSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_mojo_from_plane', 16, 0, mojo.internal.bindings.device.mojom.PoseSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_polygon', 24, 0, mojo.internal.Array(mojo.internal.bindings.device.mojom.XRPlanePointDataSpec, false), null, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: XRPlaneDetectionData
mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.XRPlaneDetectionDataSpec, 'device.mojom.XRPlaneDetectionData', [
      mojo.internal.StructField('arg_all_planes_ids', 0, 0, mojo.internal.Array(mojo.internal.bindings.device.mojom.PlaneIdSpec, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_updated_planes_data', 8, 0, mojo.internal.Array(mojo.internal.bindings.device.mojom.XRPlaneDataSpec, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: XRMeshData
mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.XRMeshDataSpec, 'device.mojom.XRMeshData', [
      mojo.internal.StructField('arg_id', 0, 0, mojo.internal.bindings.device.mojom.MeshIdSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_mojo_from_mesh', 8, 0, mojo.internal.bindings.device.mojom.PoseSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_vertices', 16, 0, mojo.internal.Array(mojo.internal.Float, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_indices', 24, 0, mojo.internal.Array(mojo.internal.Uint32, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_semantic_label', 32, 0, mojo.internal.bindings.device.mojom.XRSemanticLabelSpec, null, true, 0, undefined),
    ],
    [[0, 48]]);

// Struct: XRMeshDetectionData
mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.XRMeshDetectionDataSpec, 'device.mojom.XRMeshDetectionData', [
      mojo.internal.StructField('arg_all_meshes_ids', 0, 0, mojo.internal.Array(mojo.internal.bindings.device.mojom.MeshIdSpec, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_updated_meshes_data', 8, 0, mojo.internal.Array(mojo.internal.bindings.device.mojom.XRMeshDataSpec, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: XRAnchorData
mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.XRAnchorDataSpec, 'device.mojom.XRAnchorData', [
      mojo.internal.StructField('arg_id', 0, 0, mojo.internal.bindings.device.mojom.AnchorIdSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_mojo_from_anchor', 8, 0, mojo.internal.bindings.device.mojom.PoseSpec, null, true, 0, undefined),
    ],
    [[0, 24]]);

// Struct: XRAnchorsData
mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.XRAnchorsDataSpec, 'device.mojom.XRAnchorsData', [
      mojo.internal.StructField('arg_all_anchors_ids', 0, 0, mojo.internal.Array(mojo.internal.bindings.device.mojom.AnchorIdSpec, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_updated_anchors_data', 8, 0, mojo.internal.Array(mojo.internal.bindings.device.mojom.XRAnchorDataSpec, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: XRHitTestSubscriptionResultData
mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.XRHitTestSubscriptionResultDataSpec, 'device.mojom.XRHitTestSubscriptionResultData', [
      mojo.internal.StructField('arg_subscription_id', 0, 0, mojo.internal.bindings.device.mojom.HitTestSubscriptionIdSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_hit_test_results', 8, 0, mojo.internal.Array(mojo.internal.bindings.device.mojom.XRHitResultSpec, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: XRHitTestTransientInputSubscriptionResultData
mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.XRHitTestTransientInputSubscriptionResultDataSpec, 'device.mojom.XRHitTestTransientInputSubscriptionResultData', [
      mojo.internal.StructField('arg_subscription_id', 0, 0, mojo.internal.bindings.device.mojom.HitTestSubscriptionIdSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_input_source_id_to_hit_test_results', 8, 0, mojo.internal.Map(mojo.internal.Uint32, mojo.internal.Array(mojo.internal.bindings.device.mojom.XRHitResultSpec, false), false), null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: XRHitTestSubscriptionResultsData
mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.XRHitTestSubscriptionResultsDataSpec, 'device.mojom.XRHitTestSubscriptionResultsData', [
      mojo.internal.StructField('arg_results', 0, 0, mojo.internal.Array(mojo.internal.bindings.device.mojom.XRHitTestSubscriptionResultDataSpec, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_transient_input_results', 8, 0, mojo.internal.Array(mojo.internal.bindings.device.mojom.XRHitTestTransientInputSubscriptionResultDataSpec, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: RgbTupleF32
mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.RgbTupleF32Spec, 'device.mojom.RgbTupleF32', [
      mojo.internal.StructField('arg_red', 0, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('arg_green', 4, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('arg_blue', 8, 0, mojo.internal.Float, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: XRSphericalHarmonics
mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.XRSphericalHarmonicsSpec, 'device.mojom.XRSphericalHarmonics', [
      mojo.internal.StructField('arg_coefficients', 0, 0, mojo.internal.Array(mojo.internal.bindings.device.mojom.RgbTupleF32Spec, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: XRCubeMap
mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.XRCubeMapSpec, 'device.mojom.XRCubeMap', [
      mojo.internal.StructField('arg_width_and_height', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_positive_x', 8, 0, mojo.internal.Array(mojo.internal.Uint16, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_negative_x', 16, 0, mojo.internal.Array(mojo.internal.Uint16, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_positive_y', 24, 0, mojo.internal.Array(mojo.internal.Uint16, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_negative_y', 32, 0, mojo.internal.Array(mojo.internal.Uint16, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_positive_z', 40, 0, mojo.internal.Array(mojo.internal.Uint16, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_negative_z', 48, 0, mojo.internal.Array(mojo.internal.Uint16, false), null, false, 0, undefined),
    ],
    [[0, 64]]);

// Struct: XRLightProbe
mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.XRLightProbeSpec, 'device.mojom.XRLightProbe', [
      mojo.internal.StructField('arg_spherical_harmonics', 0, 0, mojo.internal.bindings.device.mojom.XRSphericalHarmonicsSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_main_light_direction', 8, 0, mojo.internal.bindings.gfx.mojom.Vector3dFSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_main_light_intensity', 16, 0, mojo.internal.bindings.device.mojom.RgbTupleF32Spec, null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: XRReflectionProbe
mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.XRReflectionProbeSpec, 'device.mojom.XRReflectionProbe', [
      mojo.internal.StructField('arg_cube_map', 0, 0, mojo.internal.bindings.device.mojom.XRCubeMapSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: XRLightEstimationData
mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.XRLightEstimationDataSpec, 'device.mojom.XRLightEstimationData', [
      mojo.internal.StructField('arg_light_probe', 0, 0, mojo.internal.bindings.device.mojom.XRLightProbeSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_reflection_probe', 8, 0, mojo.internal.bindings.device.mojom.XRReflectionProbeSpec, null, true, 0, undefined),
    ],
    [[0, 24]]);

// Struct: XRDepthDataStillValid
mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.XRDepthDataStillValidSpec, 'device.mojom.XRDepthDataStillValid', [
    ],
    [[0, 8]]);

// Struct: XRDepthDataUpdated
mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.XRDepthDataUpdatedSpec, 'device.mojom.XRDepthDataUpdated', [
      mojo.internal.StructField('arg_pixel_data', 0, 0, mojo.internal.bindings.mojo_base.mojom.BigBufferSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_norm_texture_from_norm_view', 16, 0, mojo.internal.bindings.gfx.mojom.TransformSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_size', 24, 0, mojo.internal.bindings.gfx.mojom.SizeSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_raw_value_to_meters', 32, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('arg_view_geometry', 40, 0, mojo.internal.bindings.device.mojom.XRViewGeometrySpec, null, true, 0, undefined),
    ],
    [[0, 56]]);

// Struct: XRTrackedImageData
mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.XRTrackedImageDataSpec, 'device.mojom.XRTrackedImageData', [
      mojo.internal.StructField('arg_index', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_actively_tracked', 4, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_mojo_from_image', 8, 0, mojo.internal.bindings.device.mojom.PoseSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_width_in_meters', 16, 0, mojo.internal.Float, 0, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: XRTrackedImagesData
mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.XRTrackedImagesDataSpec, 'device.mojom.XRTrackedImagesData', [
      mojo.internal.StructField('arg_images_data', 0, 0, mojo.internal.Array(mojo.internal.bindings.device.mojom.XRTrackedImageDataSpec, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_image_trackable_scores', 8, 0, mojo.internal.Array(mojo.internal.Bool, false), null, true, 0, undefined),
    ],
    [[0, 24]]);

// Struct: LayerId
mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.LayerIdSpec, 'device.mojom.LayerId', [
      mojo.internal.StructField('arg_id_value', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: XRProjectionLayerData
mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.XRProjectionLayerDataSpec, 'device.mojom.XRProjectionLayerData', [
    ],
    [[0, 8]]);

// Struct: XRQuadLayerData
mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.XRQuadLayerDataSpec, 'device.mojom.XRQuadLayerData', [
      mojo.internal.StructField('arg_native_origin_from_layer', 0, 0, mojo.internal.bindings.gfx.mojom.TransformSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_width', 8, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('arg_height', 12, 0, mojo.internal.Float, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: XRCylinderLayerData
mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.XRCylinderLayerDataSpec, 'device.mojom.XRCylinderLayerData', [
      mojo.internal.StructField('arg_native_origin_from_layer', 0, 0, mojo.internal.bindings.gfx.mojom.TransformSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_radius', 8, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('arg_central_angle', 12, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('arg_aspect_ratio', 16, 0, mojo.internal.Float, 0, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: XREquirectLayerData
mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.XREquirectLayerDataSpec, 'device.mojom.XREquirectLayerData', [
      mojo.internal.StructField('arg_native_origin_from_layer', 0, 0, mojo.internal.bindings.gfx.mojom.TransformSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_radius', 8, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('arg_central_horizontal_angle', 12, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('arg_upper_vertical_angle', 16, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('arg_lower_vertical_angle', 20, 0, mojo.internal.Float, 0, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: XRCubeLayerData
mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.XRCubeLayerDataSpec, 'device.mojom.XRCubeLayerData', [
      mojo.internal.StructField('arg_orientation', 0, 0, mojo.internal.bindings.gfx.mojom.QuaternionSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: XRLayerReadOnlyData
mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.XRLayerReadOnlyDataSpec, 'device.mojom.XRLayerReadOnlyData', [
      mojo.internal.StructField('arg_layer_id', 0, 0, mojo.internal.bindings.device.mojom.LayerIdSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_layout', 8, 0, mojo.internal.bindings.device.mojom.XRLayerLayoutSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_texture_width', 12, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_texture_height', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_is_static', 20, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_flip_y', 20, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_needs_raster_access', 20, 2, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: XRLayerMutableData
mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.XRLayerMutableDataSpec, 'device.mojom.XRLayerMutableData', [
      mojo.internal.StructField('arg_blend_texture_source_alpha', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_force_mono_presentation', 0, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_opacity', 4, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('arg_native_origin_information', 8, 0, mojo.internal.bindings.device.mojom.XRNativeOriginInformationSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_layer_data', 24, 0, mojo.internal.bindings.device.mojom.XRLayerSpecificDataSpec, null, false, 0, undefined),
    ],
    [[0, 48]]);

// Struct: XRCompositionLayerData
mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.XRCompositionLayerDataSpec, 'device.mojom.XRCompositionLayerData', [
      mojo.internal.StructField('arg_read_only_data', 0, 0, mojo.internal.bindings.device.mojom.XRLayerReadOnlyDataSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_mutable_data', 8, 0, mojo.internal.bindings.device.mojom.XRLayerMutableDataSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: XRLayerFrameData
mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.XRLayerFrameDataSpec, 'device.mojom.XRLayerFrameData', [
      mojo.internal.StructField('arg_layer_id', 0, 0, mojo.internal.bindings.device.mojom.LayerIdSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_buffer_shared_image', 8, 0, mojo.internal.bindings.gpu.mojom.ExportedSharedImageSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_buffer_sync_token', 16, 0, mojo.internal.bindings.gpu.mojom.SyncTokenSpec, null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: XRRenderInfo
mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.XRRenderInfoSpec, 'device.mojom.XRRenderInfo', [
      mojo.internal.StructField('arg_frame_id', 0, 0, mojo.internal.Int16, 0, false, 0, undefined),
      mojo.internal.StructField('arg_mojo_from_viewer', 8, 0, mojo.internal.bindings.device.mojom.VRPoseSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_views', 16, 0, mojo.internal.Array(mojo.internal.bindings.device.mojom.XRViewSpec, false), null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: XRFrameData
mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.XRFrameDataSpec, 'device.mojom.XRFrameData', [
      mojo.internal.StructField('arg_render_info', 0, 0, mojo.internal.bindings.device.mojom.XRRenderInfoSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_time_delta', 8, 0, mojo.internal.bindings.mojo_base.mojom.TimeDeltaSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_buffer_shared_image', 16, 0, mojo.internal.bindings.gpu.mojom.ExportedSharedImageSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_buffer_sync_token', 24, 0, mojo.internal.bindings.gpu.mojom.SyncTokenSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_camera_image_buffer_shared_image', 32, 0, mojo.internal.bindings.gpu.mojom.ExportedSharedImageSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_camera_image_buffer_sync_token', 40, 0, mojo.internal.bindings.gpu.mojom.SyncTokenSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_camera_image_size', 48, 0, mojo.internal.bindings.gfx.mojom.SizeSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_mojo_space_reset', 56, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_stage_parameters_id', 60, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_mojo_from_floor', 64, 0, mojo.internal.bindings.gfx.mojom.TransformSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_input_state', 72, 0, mojo.internal.Array(mojo.internal.bindings.device.mojom.XRInputSourceStateSpec, false), null, true, 0, undefined),
      mojo.internal.StructField('arg_stage_parameters', 80, 0, mojo.internal.bindings.device.mojom.VRStageParametersSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_detected_planes_data', 88, 0, mojo.internal.bindings.device.mojom.XRPlaneDetectionDataSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_detected_meshes_data', 96, 0, mojo.internal.bindings.device.mojom.XRMeshDetectionDataSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_anchors_data', 104, 0, mojo.internal.bindings.device.mojom.XRAnchorsDataSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_composition_layers_data', 112, 0, mojo.internal.Array(mojo.internal.bindings.device.mojom.XRLayerFrameDataSpec, false), null, true, 0, undefined),
      mojo.internal.StructField('arg_light_estimation_data', 120, 0, mojo.internal.bindings.device.mojom.XRLightEstimationDataSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_hit_test_subscription_results', 128, 0, mojo.internal.bindings.device.mojom.XRHitTestSubscriptionResultsDataSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_rendering_time_ratio', 136, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('arg_tracked_images', 144, 0, mojo.internal.bindings.device.mojom.XRTrackedImagesDataSpec, null, true, 0, undefined),
    ],
    [[0, 160]]);

// Struct: RequestSessionSuccess
mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.RequestSessionSuccessSpec, 'device.mojom.RequestSessionSuccess', [
      mojo.internal.StructField('arg_session', 0, 0, mojo.internal.bindings.device.mojom.XRSessionSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_trace_id', 8, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_metrics_recorder', 16, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.device.mojom.XRSessionMetricsRecorderRemote), null, false, 0, undefined),
      mojo.internal.StructField('arg_xr_internals_listener', 24, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.device.mojom.WebXrInternalsRendererListenerRemote), null, true, 0, undefined),
    ],
    [[0, 40]]);

// Struct: XRFrameDataRequestOptions
mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.XRFrameDataRequestOptionsSpec, 'device.mojom.XRFrameDataRequestOptions', [
      mojo.internal.StructField('arg_include_lighting_estimation_data', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_depth_active', 0, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_stage_parameters_id', 4, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: XRLayerUpdate
mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.XRLayerUpdateSpec, 'device.mojom.XRLayerUpdate', [
      mojo.internal.StructField('arg_layer_id', 0, 0, mojo.internal.bindings.device.mojom.LayerIdSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_shared_image_export_result', 8, 0, mojo.internal.bindings.gpu.mojom.SharedImageExportResultSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);
mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.VRService_SetClient_ParamsSpec, 'device.mojom.VRService_SetClient_Params', [
      mojo.internal.StructField('arg_client', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.device.mojom.VRServiceClientRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.VRService_RequestSession_ParamsSpec, 'device.mojom.VRService_RequestSession_Params', [
      mojo.internal.StructField('arg_options', 0, 0, mojo.internal.bindings.device.mojom.XRSessionOptionsSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.VRService_RequestSession_ResponseParamsSpec, 'device.mojom.VRService_RequestSession_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.device.mojom.RequestSessionResultSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.VRService_SupportsSession_ParamsSpec, 'device.mojom.VRService_SupportsSession_Params', [
      mojo.internal.StructField('arg_options', 0, 0, mojo.internal.bindings.device.mojom.XRSessionOptionsSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.VRService_SupportsSession_ResponseParamsSpec, 'device.mojom.VRService_SupportsSession_ResponseParams', [
      mojo.internal.StructField('arg_supports_session', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.VRService_ExitPresent_ParamsSpec, 'device.mojom.VRService_ExitPresent_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.VRService_ExitPresent_ResponseParamsSpec, 'device.mojom.VRService_ExitPresent_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.VRService_SetFramesThrottled_ParamsSpec, 'device.mojom.VRService_SetFramesThrottled_Params', [
      mojo.internal.StructField('arg_throttled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.VRService_MakeXrCompatible_ParamsSpec, 'device.mojom.VRService_MakeXrCompatible_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.VRService_MakeXrCompatible_ResponseParamsSpec, 'device.mojom.VRService_MakeXrCompatible_ResponseParams', [
      mojo.internal.StructField('arg_xr_compatible_result', 0, 0, mojo.internal.bindings.device.mojom.XrCompatibleResultSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.XRSessionMetricsRecorder_ReportFeatureUsed_ParamsSpec, 'device.mojom.XRSessionMetricsRecorder_ReportFeatureUsed_Params', [
      mojo.internal.StructField('arg_feature', 0, 0, mojo.internal.bindings.device.mojom.XRSessionFeatureSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.VRServiceClient_OnDeviceChanged_ParamsSpec, 'device.mojom.VRServiceClient_OnDeviceChanged_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.XREnvironmentIntegrationProvider_SubscribeToHitTest_ParamsSpec, 'device.mojom.XREnvironmentIntegrationProvider_SubscribeToHitTest_Params', [
      mojo.internal.StructField('arg_native_origin_information', 0, 0, mojo.internal.bindings.device.mojom.XRNativeOriginInformationSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_entity_types', 16, 0, mojo.internal.Array(mojo.internal.bindings.device.mojom.EntityTypeForHitTestSpec, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_ray', 24, 0, mojo.internal.bindings.device.mojom.XRRaySpec, null, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.XREnvironmentIntegrationProvider_SubscribeToHitTest_ResponseParamsSpec, 'device.mojom.XREnvironmentIntegrationProvider_SubscribeToHitTest_ResponseParams', [
      mojo.internal.StructField('arg_subscription_id', 0, 0, mojo.internal.bindings.device.mojom.HitTestSubscriptionIdSpec, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.XREnvironmentIntegrationProvider_SubscribeToHitTestForTransientInput_ParamsSpec, 'device.mojom.XREnvironmentIntegrationProvider_SubscribeToHitTestForTransientInput_Params', [
      mojo.internal.StructField('arg_profile_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_entity_types', 8, 0, mojo.internal.Array(mojo.internal.bindings.device.mojom.EntityTypeForHitTestSpec, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_ray', 16, 0, mojo.internal.bindings.device.mojom.XRRaySpec, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.XREnvironmentIntegrationProvider_SubscribeToHitTestForTransientInput_ResponseParamsSpec, 'device.mojom.XREnvironmentIntegrationProvider_SubscribeToHitTestForTransientInput_ResponseParams', [
      mojo.internal.StructField('arg_subscription_id', 0, 0, mojo.internal.bindings.device.mojom.HitTestSubscriptionIdSpec, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.XREnvironmentIntegrationProvider_UnsubscribeFromHitTest_ParamsSpec, 'device.mojom.XREnvironmentIntegrationProvider_UnsubscribeFromHitTest_Params', [
      mojo.internal.StructField('arg_subscription_id', 0, 0, mojo.internal.bindings.device.mojom.HitTestSubscriptionIdSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.XREnvironmentIntegrationProvider_CreateAnchor_ParamsSpec, 'device.mojom.XREnvironmentIntegrationProvider_CreateAnchor_Params', [
      mojo.internal.StructField('arg_native_origin_information', 0, 0, mojo.internal.bindings.device.mojom.XRNativeOriginInformationSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_native_origin_from_anchor', 16, 0, mojo.internal.bindings.device.mojom.PoseSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_plane_id', 24, 0, mojo.internal.bindings.device.mojom.PlaneIdSpec, null, true, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.XREnvironmentIntegrationProvider_CreateAnchor_ResponseParamsSpec, 'device.mojom.XREnvironmentIntegrationProvider_CreateAnchor_ResponseParams', [
      mojo.internal.StructField('arg_anchor_id', 0, 0, mojo.internal.bindings.device.mojom.AnchorIdSpec, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.XREnvironmentIntegrationProvider_DetachAnchor_ParamsSpec, 'device.mojom.XREnvironmentIntegrationProvider_DetachAnchor_Params', [
      mojo.internal.StructField('arg_anchor_id', 0, 0, mojo.internal.bindings.device.mojom.AnchorIdSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.XRFrameDataProvider_GetFrameData_ParamsSpec, 'device.mojom.XRFrameDataProvider_GetFrameData_Params', [
      mojo.internal.StructField('arg_options', 0, 0, mojo.internal.bindings.device.mojom.XRFrameDataRequestOptionsSpec, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.XRFrameDataProvider_GetFrameData_ResponseParamsSpec, 'device.mojom.XRFrameDataProvider_GetFrameData_ResponseParams', [
      mojo.internal.StructField('arg_frame_data', 0, 0, mojo.internal.bindings.device.mojom.XRFrameDataSpec, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.XRFrameDataProvider_GetEnvironmentIntegrationProvider_ParamsSpec, 'device.mojom.XRFrameDataProvider_GetEnvironmentIntegrationProvider_Params', [
      mojo.internal.StructField('arg_environment_provider', 0, 0, mojo.internal.AssociatedInterfaceRequest(mojo.internal.bindings.device.mojom.XREnvironmentIntegrationProviderPendingReceiver), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.XRPresentationProvider_UpdateLayerBounds_ParamsSpec, 'device.mojom.XRPresentationProvider_UpdateLayerBounds_Params', [
      mojo.internal.StructField('arg_frame_id', 0, 0, mojo.internal.Int16, 0, false, 0, undefined),
      mojo.internal.StructField('arg_left_bounds', 8, 0, mojo.internal.bindings.gfx.mojom.RectFSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_right_bounds', 16, 0, mojo.internal.bindings.gfx.mojom.RectFSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_source_size', 24, 0, mojo.internal.bindings.gfx.mojom.SizeSpec, null, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.XRPresentationProvider_SubmitFrameMissing_ParamsSpec, 'device.mojom.XRPresentationProvider_SubmitFrameMissing_Params', [
      mojo.internal.StructField('arg_frame_id', 0, 0, mojo.internal.Int16, 0, false, 0, undefined),
      mojo.internal.StructField('arg_camera_export_multi_result', 8, 0, mojo.internal.bindings.gpu.mojom.SharedImageExportResultSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.XRPresentationProvider_SubmitFrame_ParamsSpec, 'device.mojom.XRPresentationProvider_SubmitFrame_Params', [
      mojo.internal.StructField('arg_frame_id', 0, 0, mojo.internal.Int16, 0, false, 0, undefined),
      mojo.internal.StructField('arg_time_waited', 8, 0, mojo.internal.bindings.mojo_base.mojom.TimeDeltaSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.XRPresentationProvider_SubmitFrameWithTextureHandle_ParamsSpec, 'device.mojom.XRPresentationProvider_SubmitFrameWithTextureHandle_Params', [
      mojo.internal.StructField('arg_frame_id', 0, 0, mojo.internal.Int16, 0, false, 0, undefined),
      mojo.internal.StructField('arg_texture', 4, 0, mojo.internal.Handle, null, false, 0, undefined),
      mojo.internal.StructField('arg_sync_token', 8, 0, mojo.internal.bindings.gpu.mojom.SyncTokenSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.XRPresentationProvider_SubmitFrameDrawnIntoTexture_ParamsSpec, 'device.mojom.XRPresentationProvider_SubmitFrameDrawnIntoTexture_Params', [
      mojo.internal.StructField('arg_frame_id', 0, 0, mojo.internal.Int16, 0, false, 0, undefined),
      mojo.internal.StructField('arg_layer_updates', 8, 0, mojo.internal.Array(mojo.internal.bindings.device.mojom.XRLayerUpdateSpec, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_camera_export_multi_result', 16, 0, mojo.internal.bindings.gpu.mojom.SharedImageExportResultSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_time_waited', 24, 0, mojo.internal.bindings.mojo_base.mojom.TimeDeltaSpec, null, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.XRPresentationClient_OnSubmitFrameTransferred_ParamsSpec, 'device.mojom.XRPresentationClient_OnSubmitFrameTransferred_Params', [
      mojo.internal.StructField('arg_succeeded', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_layer_ids', 8, 0, mojo.internal.Array(mojo.internal.bindings.device.mojom.LayerIdSpec, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.XRPresentationClient_OnSubmitFrameRendered_ParamsSpec, 'device.mojom.XRPresentationClient_OnSubmitFrameRendered_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.XRPresentationClient_OnSubmitFrameGpuFence_ParamsSpec, 'device.mojom.XRPresentationClient_OnSubmitFrameGpuFence_Params', [
      mojo.internal.StructField('arg_gpu_fence_handle', 0, 0, mojo.internal.bindings.gfx.mojom.GpuFenceHandleSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.XRSessionClient_OnExitPresent_ParamsSpec, 'device.mojom.XRSessionClient_OnExitPresent_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.XRSessionClient_OnVisibilityStateChanged_ParamsSpec, 'device.mojom.XRSessionClient_OnVisibilityStateChanged_Params', [
      mojo.internal.StructField('arg_visibility_state', 0, 0, mojo.internal.bindings.device.mojom.XRVisibilityStateSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.XRLayerManager_CreateCompositionLayer_ParamsSpec, 'device.mojom.XRLayerManager_CreateCompositionLayer_Params', [
      mojo.internal.StructField('arg_create_data', 0, 0, mojo.internal.bindings.device.mojom.XRCompositionLayerDataSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.XRLayerManager_CreateCompositionLayer_ResponseParamsSpec, 'device.mojom.XRLayerManager_CreateCompositionLayer_ResponseParams', [
      mojo.internal.StructField('arg_code', 0, 0, mojo.internal.bindings.device.mojom.CreateCompositionLayerResultSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.XRLayerManager_DestroyCompositionLayer_ParamsSpec, 'device.mojom.XRLayerManager_DestroyCompositionLayer_Params', [
      mojo.internal.StructField('arg_layer_id', 0, 0, mojo.internal.bindings.device.mojom.LayerIdSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.XRLayerManager_UpdateCompositionLayer_ParamsSpec, 'device.mojom.XRLayerManager_UpdateCompositionLayer_Params', [
      mojo.internal.StructField('arg_layer_id', 0, 0, mojo.internal.bindings.device.mojom.LayerIdSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_update_data', 8, 0, mojo.internal.bindings.device.mojom.XRLayerMutableDataSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.XRLayerManager_SetEnabledCompositionLayers_ParamsSpec, 'device.mojom.XRLayerManager_SetEnabledCompositionLayers_Params', [
      mojo.internal.StructField('arg_layer_ids', 0, 0, mojo.internal.Array(mojo.internal.bindings.device.mojom.LayerIdSpec, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.WebXrInternalsRendererListener_OnFrameData_ParamsSpec, 'device.mojom.WebXrInternalsRendererListener_OnFrameData_Params', [
      mojo.internal.StructField('arg_xrframe_statistics', 0, 0, mojo.internal.bindings.device.mojom.XrFrameStatisticsSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.WebXrInternalsRendererListener_OnConsoleLog_ParamsSpec, 'device.mojom.WebXrInternalsRendererListener_OnConsoleLog_Params', [
      mojo.internal.StructField('arg_xrlogging_statistics', 0, 0, mojo.internal.bindings.device.mojom.XrLogMessageSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

