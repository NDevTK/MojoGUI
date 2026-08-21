// Auto-generated MojoJS binding
 // Source: chromium_src/chromeos/services/network_config/public/mojom/cros_network_config.mojom
 // Module: chromeos.network_config.mojom

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
      _interfaceScrambleMap: {"android_webview.mojom.LocalMainFrame": true, "android_webview.mojom.FrameHost": true, "android_webview.mojom.RenderMessageFilter": true, "android_webview.mojom.Renderer": true, "ash.mojom.HidPreservingBluetoothStateController": true, "ash.annotator.mojom.UntrustedAnnotatorPage": true, "ash.annotator.mojom.UntrustedAnnotatorPageHandler": true, "ash.annotator.mojom.UntrustedAnnotatorPageHandlerFactory": true, "ash.boca_receiver.mojom.UntrustedPage": true, "ash.boca_receiver.mojom.UntrustedPageHandlerFactory": true, "ash.boca.mojom.PageHandler": true, "ash.boca.mojom.Page": true, "ash.boca.mojom.BocaPageHandlerFactory": true, "ash.camera_app.mojom.TabletModeMonitor": true, "ash.camera_app.mojom.ScreenStateMonitor": true, "ash.camera_app.mojom.ScreenLockedMonitor": true, "ash.camera_app.mojom.ExternalScreenMonitor": true, "ash.camera_app.mojom.CameraUsageOwnershipMonitor": true, "ash.camera_app.mojom.LidStateMonitor": true, "ash.camera_app.mojom.SWPrivacySwitchMonitor": true, "ash.camera_app.mojom.WindowStateMonitor": true, "ash.camera_app.mojom.StorageMonitor": true, "ash.camera_app.mojom.WindowStateController": true, "ash.camera_app.mojom.CameraAppHelper": true, "ash.camera_app.mojom.EventsSender": true, "ash.camera_app.mojom.PdfBuilder": true, "ash.color_internals.mojom.WallpaperColorsObserver": true, "ash.color_internals.mojom.WallpaperColorsHandler": true, "ash.common.mojom.AcceleratorFetcherObserver": true, "ash.common.mojom.AcceleratorFetcher": true, "ash.common.mojom.ForceHiddenElementsVisibleObserver": true, "ash.common.mojom.AccessibilityFeatures": true, "ash.personalization_app.mojom.SeaPenObserver": true, "ash.personalization_app.mojom.SeaPenProvider": true, "ash.common.mojom.ShortcutInputObserver": true, "ash.common.mojom.ShortcutInputProvider": true, "ash.common.mojom.WebUiSyslogEmitter": true, "ash.mojom.demo_mode.UntrustedPageHandlerFactory": true, "ash.mojom.demo_mode.UntrustedPageHandler": true, "ash.diagnostics.mojom.KeyboardObserver": true, "ash.diagnostics.mojom.InternalDisplayPowerStateObserver": true, "ash.diagnostics.mojom.TabletModeObserver": true, "ash.diagnostics.mojom.LidStateObserver": true, "ash.diagnostics.mojom.ConnectedDevicesObserver": true, "ash.diagnostics.mojom.InputDataProvider": true, "ash.diagnostics.mojom.NetworkListObserver": true, "ash.diagnostics.mojom.NetworkStateObserver": true, "ash.diagnostics.mojom.NetworkHealthProvider": true, "ash.diagnostics.mojom.BatteryChargeStatusObserver": true, "ash.diagnostics.mojom.BatteryHealthObserver": true, "ash.diagnostics.mojom.MemoryUsageObserver": true, "ash.diagnostics.mojom.CpuUsageObserver": true, "ash.diagnostics.mojom.SystemDataProvider": true, "ash.diagnostics.mojom.RoutineRunner": true, "ash.diagnostics.mojom.SystemRoutineController": true, "ash.eche_app.mojom.SignalingMessageExchanger": true, "ash.eche_app.mojom.SignalingMessageObserver": true, "ash.eche_app.mojom.SystemInfoProvider": true, "ash.eche_app.mojom.SystemInfoObserver": true, "ash.eche_app.mojom.AccessibilityProvider": true, "ash.eche_app.mojom.AccessibilityObserver": true, "ash.eche_app.mojom.UidGenerator": true, "ash.eche_app.mojom.NotificationGenerator": true, "ash.eche_app.mojom.DisplayStreamHandler": true, "ash.eche_app.mojom.StreamActionObserver": true, "ash.eche_app.mojom.StreamOrientationObserver": true, "ash.eche_app.mojom.ConnectionStatusObserver": true, "ash.eche_app.mojom.KeyboardLayoutHandler": true, "ash.eche_app.mojom.KeyboardLayoutObserver": true, "ash.file_manager.mojom.PageHandlerFactory": true, "ash.file_manager.mojom.PageHandler": true, "ash.file_manager.mojom.Page": true, "ash.mojom.files_internals.PageHandler": true, "ash.firmware_update.mojom.UpdateObserver": true, "ash.firmware_update.mojom.DeviceRequestObserver": true, "ash.firmware_update.mojom.UpdateProgressObserver": true, "ash.firmware_update.mojom.UpdateProvider": true, "ash.firmware_update.mojom.InstallController": true, "ash.firmware_update.mojom.SystemUtils": true, "ash.focus_mode.mojom.MediaClient": true, "ash.focus_mode.mojom.TrackProvider": true, "ash.graduation_ui.mojom.GraduationUiHandler": true, "ash.growth.mojom.PageHandler": true, "ash.help_app.mojom.PageHandlerFactory": true, "ash.help_app.mojom.PageHandler": true, "ash.help_app.mojom.SearchResultsObserver": true, "ash.help_app.mojom.SearchHandler": true, "ash.mall.mojom.PageHandler": true, "ash.media_app_ui.mojom.PageHandlerFactory": true, "ash.media_app_ui.mojom.PageHandler": true, "ash.media_app_ui.mojom.UntrustedServiceFactory": true, "ash.media_app_ui.mojom.OcrUntrustedService": true, "ash.media_app_ui.mojom.OcrUntrustedPage": true, "ash.media_app_ui.mojom.MahiUntrustedService": true, "ash.media_app_ui.mojom.MahiUntrustedPage": true, "ash.media_app_ui.mojom.MantisUntrustedService": true, "ash.media_app_ui.mojom.MantisUntrustedPage": true, "ash.os_feedback_ui.mojom.HelpContentProvider": true, "ash.os_feedback_ui.mojom.FeedbackServiceProvider": true, "ash.personalization_app.mojom.WallpaperObserver": true, "ash.personalization_app.mojom.WallpaperProvider": true, "ash.personalization_app.mojom.ThemeObserver": true, "ash.personalization_app.mojom.ThemeProvider": true, "ash.personalization_app.mojom.UserImageObserver": true, "ash.personalization_app.mojom.UserProvider": true, "ash.personalization_app.mojom.AmbientObserver": true, "ash.personalization_app.mojom.AmbientProvider": true, "ash.personalization_app.mojom.KeyboardBacklightObserver": true, "ash.personalization_app.mojom.KeyboardBacklightProvider": true, "ash.personalization_app.mojom.SearchResultsObserver": true, "ash.personalization_app.mojom.SearchHandler": true, "ash.projector.mojom.UntrustedProjectorPageHandler": true, "ash.projector.mojom.UntrustedProjectorPage": true, "ash.projector.mojom.UntrustedProjectorPageHandlerFactory": true, "ash.recorder_app.mojom.ModelStateMonitor": true, "ash.recorder_app.mojom.QuietModeMonitor": true, "ash.recorder_app.mojom.PageHandler": true, "ash.mojom.sample_swa.ChildUntrustedPage": true, "ash.mojom.sample_swa.ParentTrustedPage": true, "ash.mojom.sample_swa.PageHandlerFactory": true, "ash.mojom.sample_swa.PageHandler": true, "ash.mojom.sample_swa.Page": true, "ash.mojom.sample_swa.UntrustedPageInterfacesFactory": true, "ash.sanitize_ui.mojom.SettingsResetter": true, "ash.mojom.scanner_feedback_ui.PageHandler": true, "ash.scanning.mojom.ScanJobObserver": true, "ash.scanning.mojom.ScanService": true, "ash.scanning.mojom.MultiPageScanController": true, "ash.shimless_rma.mojom.ErrorObserver": true, "ash.shimless_rma.mojom.OsUpdateObserver": true, "ash.shimless_rma.mojom.CalibrationObserver": true, "ash.shimless_rma.mojom.ProvisioningObserver": true, "ash.shimless_rma.mojom.HardwareWriteProtectionStateObserver": true, "ash.shimless_rma.mojom.PowerCableStateObserver": true, "ash.shimless_rma.mojom.ExternalDiskStateObserver": true, "ash.shimless_rma.mojom.HardwareVerificationStatusObserver": true, "ash.shimless_rma.mojom.FinalizationObserver": true, "ash.shimless_rma.mojom.UpdateRoFirmwareObserver": true, "ash.shimless_rma.mojom.ShimlessRmaService": true, "ash.shortcut_customization.mojom.SearchResultsAvailabilityObserver": true, "ash.shortcut_customization.mojom.SearchHandler": true, "ash.shortcut_customization.mojom.AcceleratorsUpdatedObserver": true, "ash.shortcut_customization.mojom.PolicyUpdatedObserver": true, "ash.shortcut_customization.mojom.AcceleratorConfigurationProvider": true, "ash.mojom.status_area_internals.PageHandler": true, "cc.mojom.RenderFrameMetadataObserver": true, "cc.mojom.RenderFrameMetadataObserverClient": true, "actor.ui.mojom.ActorOverlayPageHandlerFactory": true, "actor.ui.mojom.ActorOverlayPageHandler": true, "actor.ui.mojom.ActorOverlayPage": true, "contextual_cueing_internals.mojom.PageHandler": true, "contextual_tasks.mojom.PageHandler": true, "contextual_tasks.mojom.Page": true, "contextual_tasks.mojom.PageHandlerFactory": true, "contextual_tasks.mojom.ExtensionPageHandlerFactory": true, "contextual_tasks.mojom.ExtensionPageHandler": true, "contextual_tasks.mojom.ExtensionPage": true, "contextual_tasks_internals.mojom.ContextualTasksInternalsPageHandlerFactory": true, "contextual_tasks_internals.mojom.ContextualTasksInternalsPageHandler": true, "contextual_tasks_internals.mojom.ContextualTasksInternalsPage": true, "contextual_tasks_toolbar.mojom.PageHandlerFactory": true, "contextual_tasks_toolbar.mojom.PageHandler": true, "contextual_tasks_toolbar.mojom.Page": true, "geic.mojom.GeicApi": true, "geic.mojom.GeicBrowserHost": true, "geic.mojom.GeicClient": true, "glic.mojom.ExperimentalOptInPageHandler": true, "glic.mojom.PreloadPage": true, "glic.mojom.Page": true, "glic.mojom.GlicPreloadHandler": true, "glic.mojom.GlicPreloadHandlerFactory": true, "glic.mojom.PageHandlerFactory": true, "glic.mojom.PageHandler": true, "glic.mojom.PinCandidatesObserver": true, "glic.mojom.ActorClient": true, "glic.mojom.ActorHandler": true, "glic.mojom.AnnotationHandler": true, "glic.mojom.SkillsHandler": true, "glic.mojom.SkillsClient": true, "glic.mojom.WebClientHandler": true, "glic.mojom.ZeroStateSuggestionsHandler": true, "glic.mojom.ZeroStateSuggestionsClient": true, "glic.mojom.TabDataHandler": true, "glic.mojom.TabFaviconHandler": true, "glic.mojom.ExperimentalTriggeringUpdatesHandler": true, "glic.mojom.ExperimentalTriggeringClient": true, "glic.mojom.WebClient": true, "glic.mojom.CaptureRegionObserver": true, "glic.mojom.InternalsPageHandler": true, "glic.mojom.InternalsPageHandlerFactory": true, "glic.selection.SelectionOverlayPageHandlerFactory": true, "glic.selection.SelectionOverlayPageHandler": true, "glic.selection.SelectionOverlayPage": true, "lens.mojom.LensPageHandlerFactory": true, "lens.mojom.LensPageHandler": true, "lens.mojom.LensPage": true, "lens.mojom.LensGhostLoaderPageHandlerFactory": true, "lens.mojom.LensGhostLoaderPage": true, "lens.mojom.LensSidePanelPageHandlerFactory": true, "lens.mojom.LensSidePanelPageHandler": true, "lens.mojom.LensSidePanelPage": true, "media.mojom.MediaEngagementScoreDetailsProvider": true, "file_suggestion.mojom.DriveSuggestionHandler": true, "file_suggestion.mojom.MicrosoftFilesPageHandler": true, "ntp.authentication.mojom.MicrosoftAuthPageHandler": true, "ntp.calendar.mojom.GoogleCalendarPageHandler": true, "ntp.calendar.mojom.OutlookCalendarPageHandler": true, "ntp.most_relevant_tab_resumption.mojom.PageHandler": true, "ntp.tab_groups.mojom.PageHandler": true, "pwc.mojom.PrivilegedBridge": true, "certificate_manager.mojom.CertificateManagerPageHandlerFactory": true, "certificate_manager.mojom.CertificateManagerPageHandler": true, "certificate_manager.mojom.CertificateManagerPage": true, "drive_picker_host.mojom.DrivePickerResultHandler": true, "access_code_cast.mojom.PageHandlerFactory": true, "access_code_cast.mojom.PageHandler": true, "access_code_cast.mojom.Page": true, "ai_overlay_dialog.mojom.PageHandlerFactory": true, "ai_overlay_dialog.mojom.PageHandler": true, "ai_overlay_dialog.mojom.Page": true, "ai_overlay_dialog.mojom.AiOverlayTools": true, "ai_overlay_dialog.mojom.AiOverlayToolRegistry": true, "app_home.mojom.PageHandlerFactory": true, "app_home.mojom.PageHandler": true, "app_home.mojom.Page": true, "mojom.app_service_internals.AppServiceInternalsPageHandler": true, "add_supervision.mojom.AddSupervisionHandler": true, "ash.app_install.mojom.AppInfoActions": true, "ash.app_install.mojom.ConnectionErrorActions": true, "ash.app_install.mojom.PageHandlerFactory": true, "ash.app_install.mojom.PageHandler": true, "ash.cloud_upload.mojom.PageHandlerFactory": true, "ash.cloud_upload.mojom.PageHandler": true, "ash.crostini_installer.mojom.PageHandlerFactory": true, "ash.crostini_installer.mojom.PageHandler": true, "ash.crostini_installer.mojom.Page": true, "dlp_internals.mojom.ReportingObserver": true, "dlp_internals.mojom.PageHandler": true, "emoji_picker.mojom.PageHandlerFactory": true, "emoji_picker.mojom.PageHandler": true, "new_window_proxy.mojom.NewWindowProxy": true, "enterprise_reporting.mojom.PageHandlerFactory": true, "enterprise_reporting.mojom.PageHandler": true, "enterprise_reporting.mojom.Page": true, "ash.extended_updates.mojom.PageHandlerFactory": true, "ash.extended_updates.mojom.PageHandler": true, "ash.extended_updates.mojom.Page": true, "launcher_internals.mojom.PageHandlerFactory": true, "launcher_internals.mojom.Page": true, "lobster.mojom.UntrustedLobsterPageHandler": true, "ash.screens_common.mojom.AiIntroPageHandler": true, "ash.screens_common.mojom.AiIntroPage": true, "ash.screens_common.mojom.AppDownloadingPageHandler": true, "ash.screens_common.mojom.DrivePinningPageHandler": true, "ash.screens_common.mojom.DrivePinningPage": true, "ash.screens_common.mojom.FjordStationSetupPageHandler": true, "ash.screens_common.mojom.FjordTouchControllerPageHandler": true, "ash.screens_common.mojom.FjordImageSelectionPageHandler": true, "ash.screens_common.mojom.GaiaInfoPageHandler": true, "ash.screens_common.mojom.GaiaInfoPage": true, "ash.screens_common.mojom.GestureNavigationPageHandler": true, "ash.screens_common.mojom.GeminiIntroPageHandler": true, "ash.screens_factory.mojom.ScreensFactory": true, "ash.screens_login.mojom.EncryptionMigrationPageHandler": true, "ash.screens_login.mojom.EncryptionMigrationPage": true, "ash.screens_oobe.mojom.ConsumerUpdatePageHandler": true, "ash.screens_oobe.mojom.ConsumerUpdatePage": true, "ash.screens_oobe.mojom.PackagedLicensePageHandler": true, "ash.screens_osauth.mojom.LocalDataLossWarningPageHandler": true, "ash.manage_mirrorsync.mojom.PageHandlerFactory": true, "ash.manage_mirrorsync.mojom.PageHandler": true, "ash.office_fallback.mojom.PageHandlerFactory": true, "ash.office_fallback.mojom.PageHandler": true, "parent_access_ui.mojom.ParentAccessUiHandler": true, "sensor.mojom.PageHandlerFactory": true, "sensor.mojom.PageHandler": true, "ash.settings.app_notification.mojom.AppNotificationsHandler": true, "ash.settings.app_notification.mojom.AppNotificationsObserver": true, "ash.settings.app_parental_controls.mojom.AppParentalControlsHandler": true, "ash.settings.app_parental_controls.mojom.AppParentalControlsObserver": true, "ash.settings.date_time.mojom.PageHandlerFactory": true, "ash.settings.date_time.mojom.PageHandler": true, "ash.settings.date_time.mojom.Page": true, "ash.settings.mojom.TabletModeObserver": true, "ash.settings.mojom.DisplayConfigurationObserver": true, "ash.settings.mojom.DisplayBrightnessSettingsObserver": true, "ash.settings.mojom.AmbientLightSensorObserver": true, "ash.settings.mojom.DisplaySettingsProvider": true, "ash.settings.mojom.KeyboardSettingsObserver": true, "ash.settings.mojom.TouchpadSettingsObserver": true, "ash.settings.mojom.PointingStickSettingsObserver": true, "ash.settings.mojom.MouseSettingsObserver": true, "ash.settings.mojom.ButtonPressObserver": true, "ash.settings.mojom.GraphicsTabletSettingsObserver": true, "ash.settings.mojom.KeyboardBrightnessObserver": true, "ash.settings.mojom.KeyboardAmbientLightSensorObserver": true, "ash.settings.mojom.LidStateObserver": true, "ash.settings.mojom.InputDeviceSettingsProvider": true, "ash.settings.google_drive.mojom.PageHandlerFactory": true, "ash.settings.google_drive.mojom.PageHandler": true, "ash.settings.google_drive.mojom.Page": true, "ash.settings.one_drive.mojom.PageHandlerFactory": true, "ash.settings.one_drive.mojom.PageHandler": true, "ash.settings.one_drive.mojom.Page": true, "ash.settings.graduation.mojom.GraduationHandler": true, "ash.settings.graduation.mojom.GraduationObserver": true, "ash.settings.app_permission.mojom.AppPermissionsHandler": true, "ash.settings.app_permission.mojom.AppPermissionsObserver": true, "ash.settings.magic_boost_handler.mojom.PageHandlerFactory": true, "ash.settings.magic_boost_handler.mojom.PageHandler": true, "ash.settings.mojom.SearchResultsObserver": true, "ash.settings.mojom.SearchHandler": true, "ash.settings.mojom.UserActionRecorder": true, "policy.local_user_files.mojom.PageHandlerFactory": true, "policy.local_user_files.mojom.PageHandler": true, "policy.local_user_files.mojom.Page": true, "mojom.DebugLogsChangeHandler": true, "mojom.BluetoothInternalsHandler": true, "mojom.BluetoothBtsnoop": true, "chrome_finds_internals.mojom.Page": true, "chrome_finds_internals.mojom.PageHandler": true, "chrome_finds_internals.mojom.PageHandlerFactory": true, "content_settings_internals.mojom.PageHandler": true, "content_settings_internals.mojom.PageHandlerFactory": true, "browser.context_hub.mojom.Page": true, "browser.context_hub.mojom.PageHandlerFactory": true, "browser.context_hub.mojom.PageHandler": true, "customize_buttons.mojom.CustomizeButtonsHandlerFactory": true, "customize_buttons.mojom.CustomizeButtonsHandler": true, "customize_buttons.mojom.CustomizeButtonsDocument": true, "data_sharing.mojom.PageHandlerFactory": true, "data_sharing.mojom.PageHandler": true, "data_sharing.mojom.Page": true, "default_browser_modal.mojom.Page": true, "default_browser_modal.mojom.PageHandler": true, "default_browser_modal.mojom.PageHandlerFactory": true, "visual_guided_setter.mojom.Page": true, "visual_guided_setter.mojom.PageHandler": true, "visual_guided_setter.mojom.PageHandlerFactory": true, "discards.mojom.DetailsProvider": true, "discards.mojom.GraphChangeStream": true, "discards.mojom.GraphDump": true, "discards.mojom.SiteDataProvider": true, "downloads.mojom.PageHandlerFactory": true, "downloads.mojom.PageHandler": true, "downloads.mojom.Page": true, "drive_picker_host.mojom.DrivePickerHostHandler": true, "drive_picker_host_untrusted.mojom.PageHandler": true, "drive_picker_host_untrusted.mojom.Page": true, "drive_picker_host_untrusted.mojom.PageHandlerFactory": true, "drive_picker_host_untrusted.mojom.DrivePickerBridge": true, "zero_state_promo.mojom.PageHandlerFactory": true, "zero_state_promo.mojom.PageHandler": true, "feature_showcase.mojom.DefaultBrowserPageHandler": true, "feature_showcase.mojom.DefaultBrowserPageHandlerFactory": true, "feature_showcase.mojom.FeatureShowcasePageHandler": true, "feature_showcase.mojom.FeatureShowcasePageHandlerFactory": true, "feature_showcase.mojom.GeminiPageHandler": true, "feature_showcase.mojom.GeminiPageHandlerFactory": true, "feature_showcase.mojom.GoogleLensPageHandler": true, "feature_showcase.mojom.GoogleLensPageHandlerFactory": true, "feature_showcase.mojom.PasswordManagerPageHandler": true, "feature_showcase.mojom.PasswordManagerPageHandlerFactory": true, "feature_showcase.mojom.ThemesAndCustomizationPageHandler": true, "feature_showcase.mojom.ThemesAndCustomizationPageHandlerFactory": true, "feed_internals.mojom.PageHandler": true, "feedback.report_unsafe_site.mojom.PageHandler": true, "feedback.report_unsafe_site.mojom.PageHandlerFactory": true, "indigo_internals.mojom.PageHandlerFactory": true, "indigo_internals.mojom.PageHandler": true, "indigo_internals.mojom.Page": true, "infobar_internals.mojom.Page": true, "infobar_internals.mojom.PageHandler": true, "infobar_internals.mojom.PageHandlerFactory": true, "intro.mojom.FinishOrContinuePageHandlerFactory": true, "intro.mojom.FinishOrContinuePageHandler": true, "intro.mojom.IntroPageHandlerFactory": true, "intro.mojom.IntroPage": true, "intro.mojom.SignInCelebrationPageHandlerFactory": true, "intro.mojom.SignInCelebrationPageHandler": true, "intro.mojom.SignInCelebrationPage": true, "intro.mojom.SignInPromoPageHandlerFactory": true, "intro.mojom.SignInPromoPageHandler": true, "intro.mojom.SignInPromoPage": true, "intro.mojom.WelcomePageHandlerFactory": true, "intro.mojom.WelcomePageHandler": true, "iwa_dev.mojom.PageHandler": true, "iwa_dev.mojom.Page": true, "iwa_dev.mojom.PageHandlerFactory": true, "mojom.LocationInternalsHandler": true, "multistep_filter_internals.mojom.PageHandler": true, "multistep_filter_internals.mojom.Page": true, "multistep_filter_internals.mojom.PageHandlerFactory": true, "nearby_share.mojom.ShareTargetListener": true, "nearby_share.mojom.TransferUpdateListener": true, "nearby_share.mojom.DiscoveryObserver": true, "nearby_share.mojom.DiscoveryManager": true, "nearby_share.mojom.ConfirmationManager": true, "nearby_share.mojom.ReceiveObserver": true, "nearby_share.mojom.ReceiveManager": true, "new_tab_footer.mojom.NewTabFooterHandlerFactory": true, "new_tab_footer.mojom.NewTabFooterHandler": true, "new_tab_footer.mojom.NewTabFooterDocument": true, "action_chips.mojom.ActionChipsHandler": true, "action_chips.mojom.Page": true, "action_chips.mojom.ActionChipsHandlerFactory": true, "foo.mojom.FooHandler": true, "new_tab_page.mojom.PageHandlerFactory": true, "new_tab_page.mojom.PageHandler": true, "new_tab_page.mojom.Page": true, "ntp_promo.mojom.NtpPromoHandler": true, "ntp_promo.mojom.NtpPromoClient": true, "ntp_promo.mojom.NtpPromoHandlerFactory": true, "new_tab_page_third_party.mojom.PageHandlerFactory": true, "new_tab_page_third_party.mojom.PageHandler": true, "new_tab_page_third_party.mojom.Page": true, "notifications_internals.mojom.PageHandler": true, "new_tab_page.mojom.MicrosoftAuthUntrustedDocument": true, "new_tab_page.mojom.MicrosoftAuthUntrustedDocumentInterfacesFactory": true, "new_tab_page.mojom.MicrosoftAuthUntrustedPageHandler": true, "aim_eligibility.mojom.Page": true, "aim_eligibility.mojom.PageHandler": true, "aim_eligibility.mojom.PageHandlerFactory": true, "omnibox.logging.mojom.PageHandlerFactory": true, "omnibox.logging.mojom.PageHandler": true, "omnibox.logging.mojom.Page": true, "mojom.OmniboxPageHandler": true, "mojom.OmniboxPage": true, "omnibox_everywhere_debug.mojom.Page": true, "omnibox_everywhere_debug.mojom.PageHandler": true, "omnibox_everywhere_debug.mojom.PageHandlerFactory": true, "omnibox_popup.mojom.PageHandlerFactory": true, "omnibox_popup.mojom.PageHandler": true, "omnibox_popup.mojom.Page": true, "omnibox_popup_aim.mojom.PageHandlerFactory": true, "omnibox_popup_aim.mojom.PageHandler": true, "omnibox_popup_aim.mojom.Page": true, "on_device_internals.mojom.PageHandlerFactory": true, "on_device_internals.mojom.PageHandler": true, "on_device_internals.mojom.Page": true, "on_device_translation_internals.mojom.PageHandlerFactory": true, "on_device_translation_internals.mojom.PageHandler": true, "on_device_translation_internals.mojom.Page": true, "password_manager.mojom.PageHandlerFactory": true, "password_manager.mojom.PageHandler": true, "password_manager.mojom.Page": true, "mojom.ResetPasswordHandler": true, "search_engine_choice.mojom.PageHandlerFactory": true, "search_engine_choice.mojom.PageHandler": true, "segmentation_internals.mojom.PageHandlerFactory": true, "segmentation_internals.mojom.PageHandler": true, "segmentation_internals.mojom.Page": true, "side_panel.mojom.BookmarksPageHandlerFactory": true, "side_panel.mojom.BookmarksPageHandler": true, "side_panel.mojom.BookmarksPage": true, "comments.mojom.PageHandlerFactory": true, "comments.mojom.PageHandler": true, "side_panel.mojom.CustomizeChromePageHandlerFactory": true, "side_panel.mojom.CustomizeChromePageHandler": true, "side_panel.mojom.CustomizeChromePage": true, "side_panel.customize_chrome.mojom.CustomizeToolbarHandlerFactory": true, "side_panel.customize_chrome.mojom.CustomizeToolbarHandler": true, "side_panel.customize_chrome.mojom.CustomizeToolbarClient": true, "side_panel.customize_chrome.mojom.WallpaperSearchHandlerFactory": true, "side_panel.customize_chrome.mojom.WallpaperSearchHandler": true, "side_panel.customize_chrome.mojom.WallpaperSearchClient": true, "reading_list.mojom.PageHandlerFactory": true, "reading_list.mojom.PageHandler": true, "reading_list.mojom.Page": true, "batch_upload.mojom.PageHandlerFactory": true, "batch_upload.mojom.PageHandler": true, "batch_upload.mojom.Page": true, "cross_device_signin.mojom.PageHandlerFactory": true, "cross_device_signin.mojom.PageHandler": true, "history_sync_optin.mojom.PageHandlerFactory": true, "history_sync_optin.mojom.PageHandler": true, "history_sync_optin.mojom.Page": true, "signout_confirmation.mojom.PageHandlerFactory": true, "signout_confirmation.mojom.PageHandler": true, "signout_confirmation.mojom.Page": true, "skills.mojom.PageHandlerFactory": true, "skills.mojom.PageHandler": true, "skills.mojom.SkillsPage": true, "skills.mojom.DialogHandler": true, "skills.mojom.SkillsPageV2": true, "skills.mojom.SkillsPageHandler": true, "subresource_filter.mojom.SubresourceFilterInternalsHandler": true, "subresource_filter.mojom.SubresourceFilterInternalsObserver": true, "suggest_internals.mojom.PageHandler": true, "suggest_internals.mojom.Page": true, "tab_search.mojom.PageHandlerFactory": true, "tab_search.mojom.PageHandler": true, "tab_search.mojom.Page": true, "tab_strip_internals.mojom.PageHandlerFactory": true, "tab_strip_internals.mojom.PageHandler": true, "tab_strip_internals.mojom.Page": true, "unexportable_keys_internals.mojom.PageHandlerFactory": true, "unexportable_keys_internals.mojom.PageHandler": true, "updater_ui.mojom.PageHandlerFactory": true, "updater_ui.mojom.PageHandler": true, "mojom.UsbInternalsPageHandler": true, "mojom.user_education_internals.UserEducationInternalsPageHandler": true, "watermark.mojom.PageHandlerFactory": true, "watermark.mojom.PageHandler": true, "mojom.PageHandlerFactory": true, "mojom.WebAppInternalsHandler": true, "webnn_internals.mojom.PageHandler": true, "webnn_internals.mojom.Page": true, "webnn_internals.mojom.PageHandlerFactory": true, "whats_new.mojom.PageHandlerFactory": true, "whats_new.mojom.PageHandler": true, "bookmark_bar.mojom.PageHandlerFactory": true, "bookmark_bar.mojom.PageHandler": true, "bookmark_bar.mojom.Page": true, "webui_browser.mojom.PageHandlerFactory": true, "webui_browser.mojom.Page": true, "webui_browser.mojom.PageHandler": true, "webui_browser.mojom.GuestHandler": true, "chrome.mojom.ChromeRenderFrame": true, "compose.mojom.ComposeSessionUntrustedPageHandlerFactory": true, "compose.mojom.ComposeSessionUntrustedPageHandler": true, "compose.mojom.ComposeClientUntrustedPageHandler": true, "compose.mojom.ComposeUntrustedDialog": true, "mojom.ModuleEventSink": true, "chrome.mojom.FontPrewarmer": true, "chrome.mojom.RenderFrameFontFamilyAccessor": true, "chrome.mojom.GoogleAccountsPrivateApiExtension": true, "chrome.mojom.ProfileImportObserver": true, "chrome.mojom.ProfileImport": true, "chrome.mojom.IndigoAgentHost": true, "chrome.mojom.IndigoAgent": true, "chrome.mojom.IndigoOnboardingDialogHost": true, "chrome.mojom.AppShim": true, "chrome.mojom.AppShimHost": true, "chrome.mojom.AppShimHostBootstrap": true, "chrome.mojom.WebRtcLoggingClient": true, "chrome.mojom.WebRtcLoggingAgent": true, "offline_pages.mojom.MhtmlPageNotifier": true, "chrome.mojom.NetErrorPageSupport": true, "chrome.mojom.NetBenchmarking": true, "chrome.mojom.NetworkDiagnostics": true, "chrome.mojom.NetworkDiagnosticsClient": true, "chrome.mojom.NetworkEasterEgg": true, "chrome.mojom.OfflinePageAutoFetcher": true, "chrome.mojom.OpenSearchDescriptionDocumentHandler": true, "chrome.mojom.RemoteActorCredentialSharing": true, "chrome.mojom.PluginHost": true, "chrome.mojom.PluginAuthHost": true, "chrome.mojom.PluginInfoHost": true, "reading_mode.mojom.DistillationEvaluator": true, "read_anything.mojom.UntrustedPageHandlerFactory": true, "read_anything.mojom.UntrustedPageHandler": true, "read_anything.mojom.UntrustedPage": true, "read_aloud.mojom.ReadAloudPlaybackController": true, "read_aloud.mojom.ReadAloudPlaybackControllerClient": true, "read_aloud.mojom.ReadAloudPlaybackControllerFactory": true, "chrome.mojom.BoundSessionRequestThrottledHandler": true, "chrome.mojom.ChromeOSListener": true, "chrome.mojom.RendererConfiguration": true, "request_header_integrity.mojom.ChromeCompanero": true, "chrome.mojom.SandboxStatusExtension": true, "search.mojom.EmbeddedSearchConnector": true, "search.mojom.EmbeddedSearch": true, "search.mojom.EmbeddedSearchClient": true, "supervised_user.mojom.SupervisedUserCommands": true, "chrome.mojom.TrustedVaultEncryptionKeysExtension": true, "wallet.mojom.BoardingPassExtractor": true, "gcpw_hid.mojom.GaiaCredentialProviderHidBroker": true, "enterprise_companion.mojom.EnterpriseCompanion": true, "chrome.mojom.DocumentAnalysisService": true, "chrome.mojom.FileUtilService": true, "chrome.mojom.SafeArchiveAnalyzer": true, "chrome.mojom.TemporaryFileGetter": true, "chrome.mojom.SingleFileExtractor": true, "chrome.mojom.SingleFileExtractorListener": true, "chrome.mojom.ZipListener": true, "chrome.mojom.ZipFileCreator": true, "mac_notifications.mojom.MacNotificationService": true, "mac_notifications.mojom.MacNotificationActionHandler": true, "mac_notifications.mojom.MacNotificationProvider": true, "pdf.mojom.PdfProgressiveSearchifier": true, "pdf.mojom.PdfSearchifier": true, "pdf.mojom.Ocr": true, "pdf.mojom.PdfService": true, "pdf.mojom.PdfThumbnailer": true, "printing.mojom.PdfFlattener": true, "printing.mojom.PdfNupConverter": true, "printing.mojom.PdfToEmfConverter": true, "printing.mojom.PdfToEmfConverterFactory": true, "printing.mojom.PdfToPwgRasterConverter": true, "printing.mojom.UnsandboxedPrintBackendHost": true, "printing.mojom.SandboxedPrintBackendHost": true, "printing.mojom.PrintBackendService": true, "printing.mojom.PrintingService": true, "redirection.mojom.RedirectionService": true, "chrome.mojom.RemovableStorageWriter": true, "chrome.mojom.RemovableStorageWriterClient": true, "chrome.mojom.UtilReadIcon": true, "chrome.mojom.UtilWin": true, "chrome.mojom.ProcessorMetrics": true, "web_ui_test.mojom.TestRunner": true, "test.mojom.Foo": true, "test.mojom.Bar": true, "test.mojom.Baz": true, "test.mojom.MojoFileSystemAccessTest": true, "updater.mojom.UpdateService": true, "updater.mojom.StateChangeObserver": true, "updater.mojom.UpdateServiceInternal": true, "updater.mojom.PostRequestObserver": true, "updater.mojom.FileDownloadObserver": true, "updater.mojom.FetchService": true, "chromecast.mojom.ApiBindings": true, "chromecast.mojom.BluetoothDeviceAccessProvider": true, "chromecast.mojom.BluetoothDeviceAccessProviderClient": true, "chromecast.mojom.CastContentWindowObserver": true, "chromecast.mojom.CastContentWindow": true, "chromecast.mojom.CastWebContentsObserver": true, "chromecast.mojom.CastWebContents": true, "chromecast.mojom.CastWebService": true, "chromecast.mojom.MessageCallback": true, "chromecast.mojom.WebUi": true, "chromecast.mojom.Resources": true, "chromecast.mojom.WebUiClient": true, "chromecast.mojom.ActivityUrlFilterConfiguration": true, "chromecast.mojom.ActivityWindow": true, "chromecast.shell.mojom.ApplicationMediaCapabilitiesObserver": true, "chromecast.shell.mojom.ApplicationMediaCapabilities": true, "chromecast.mojom.AssistantMessagePipe": true, "chromecast.mojom.AssistantMessageClient": true, "chromecast.mojom.AssistantMessageService": true, "chromecast.mojom.AudioSocketBroker": true, "chromecast.shell.mojom.CastDemoVolumeChangeObserver": true, "chromecast.shell.mojom.CastDemo": true, "chromecast.shell.mojom.FeatureManager": true, "chromecast.mojom.FeatureUpdateObserver": true, "chromecast.mojom.FeatureUpdateService": true, "chromecast.mojom.GestureHandler": true, "chromecast.mojom.GestureSource": true, "chromecast.mojom.JsChannel": true, "chromecast.mojom.JsChannelClient": true, "chromecast.mojom.JsChannelBindingProvider": true, "chromecast.media.mojom.MediaCaps": true, "chromecast.media.mojom.MediaCapsObserver": true, "chromecast.metrics.mojom.MetricsHelper": true, "chromecast.shell.mojom.QueryableDataStore": true, "chromecast.mojom.ServiceConnector": true, "chromecast.mojom.SettingsClient": true, "chromecast.mojom.SettingsPlatform": true, "chromecast.external_mojo.mojom.ExternalService": true, "chromecast.external_mojo.mojom.ExternalConnector": true, "chromecast.external_mojo.mojom.TestExternalConnector": true, "chromecast.media.mojom.VideoGeometryChangeClient": true, "chromecast.media.mojom.VideoGeometryChangeSubscriber": true, "chromecast.media.mojom.VideoGeometrySetter": true, "chromecast.mojom.RemoteInterfaces": true, "chromecast.mojom.DisplaySettings": true, "chromecast.mojom.DisplaySettingsObserver": true, "ash.audio_config.mojom.AudioSystemPropertiesObserver": true, "ash.audio_config.mojom.CrosAudioConfig": true, "drivefs.mojom.DriveFsBootstrap": true, "drivefs.mojom.DriveFs": true, "drivefs.mojom.DriveFsDelegate": true, "drivefs.mojom.SearchQuery": true, "drivefs.mojom.HttpDelegate": true, "drivefs.mojom.FakeDriveFsLauncher": true, "emoji_search.mojom.EmojiSearch": true, "ash.enhanced_network_tts.mojom.EnhancedNetworkTts": true, "ash.enhanced_network_tts.mojom.AudioDataObserver": true, "ash.language.mojom.LanguagePacksObserver": true, "ash.language.mojom.LanguagePacks": true, "ash.local_search_service.mojom.Index": true, "ash.local_search_service.mojom.SearchMetricsReporter": true, "ash.local_search_service.mojom.LocalSearchService": true, "mantis.mojom.MantisProcessor": true, "mantis.mojom.PlatformModelProgressObserver": true, "mantis.mojom.MantisService": true, "chromeos.mojo_service_manager.mojom.ServiceManager": true, "chromeos.mojo_service_manager.mojom.ServiceProvider": true, "chromeos.mojo_service_manager.mojom.ServiceObserver": true, "smbfs.mojom.SmbFsBootstrap": true, "smbfs.mojom.SmbFs": true, "smbfs.mojom.SmbFsDelegate": true, "ash.trash_service.mojom.TrashService": true, "arc.mojom.AdbdMonitorHost": true, "arc.mojom.AdbdMonitorInstance": true, "arc.mojom.AppHost": true, "arc.mojom.AppInstance": true, "arc.mojom.AppPermissionsInstance": true, "arc.mojom.AppfuseHost": true, "arc.mojom.AppfuseInstance": true, "arc.mojom.ArcBridgeHost": true, "arc.mojom.ArcWifiHost": true, "arc.mojom.ArcWifiInstance": true, "arc.mojom.AudioHost": true, "arc.mojom.AudioInstance": true, "arc.mojom.AuthHost": true, "arc.mojom.AuthInstance": true, "arc.mojom.BackupSettingsInstance": true, "arc.mojom.RfcommListeningSocketClient": true, "arc.mojom.RfcommConnectingSocketClient": true, "arc.mojom.BluetoothListenSocketClient": true, "arc.mojom.BluetoothConnectSocketClient": true, "arc.mojom.BluetoothHost": true, "arc.mojom.BluetoothInstance": true, "arc.mojom.BootPhaseMonitorHost": true, "arc.mojom.BootPhaseMonitorInstance": true, "arc.mojom.CameraService": true, "arc.mojom.CameraHost": true, "arc.mojom.CameraInstance": true, "arc.mojom.ChromeFeatureFlagsInstance": true, "arc.mojom.CompatibilityModeInstance": true, "arc.mojom.CrashCollectorHost": true, "arc.mojom.CrashCollectorInstance": true, "arc.mojom.ArcShellExecutionInstance": true, "arc.mojom.DigitalGoodsInstance": true, "arc.mojom.DiskSpaceHost": true, "arc.mojom.DiskSpaceInstance": true, "arc.mojom.EnterpriseReportingHost": true, "arc.mojom.EnterpriseReportingInstance": true, "arc.mojom.ErrorNotificationHost": true, "arc.mojom.ErrorNotificationInstance": true, "arc.mojom.ErrorNotificationItem": true, "arc.mojom.ErrorNotificationActionHandler": true, "arc.mojom.FileSystemHost": true, "arc.mojom.FileSystemInstance": true, "arc.mojom.IioSensorHost": true, "arc.mojom.IioSensorInstance": true, "arc.mojom.ImeHost": true, "arc.mojom.ImeInstance": true, "arc.mojom.InputConnection": true, "arc.mojom.InputMethodManagerHost": true, "arc.mojom.InputMethodManagerInstance": true, "arc.mojom.CustomTabSession": true, "arc.mojom.IntentHelperHost": true, "arc.mojom.IntentHelperInstance": true, "arc.mojom.KeymasterHost": true, "arc.mojom.KeymasterInstance": true, "arc.mojom.KeymasterServer": true, "arc.mojom.keymint.KeyMintHost": true, "arc.mojom.keymint.KeyMintInstance": true, "arc.mojom.keymint.KeyMintServer": true, "arc.mojom.KioskHost": true, "arc.mojom.KioskInstance": true, "arc.mojom.MediaSessionInstance": true, "arc.mojom.MemoryInstance": true, "arc.mojom.MetricsHost": true, "arc.mojom.MetricsInstance": true, "arc.mojom.MidisClient": true, "arc.mojom.MidisServer": true, "arc.mojom.MidisHost": true, "arc.mojom.MidisInstance": true, "arc.mojom.NearbyShareSessionHost": true, "arc.mojom.NearbyShareSessionInstance": true, "arc.mojom.NearbyShareHost": true, "arc.mojom.NearbyShareInstance": true, "arc.mojom.NetHost": true, "arc.mojom.NetInstance": true, "arc.mojom.NotificationsHost": true, "arc.mojom.NotificationsInstance": true, "arc.mojom.ObbMounterHost": true, "arc.mojom.ObbMounterInstance": true, "arc.mojom.OemCryptoService": true, "arc.mojom.OemCryptoHost": true, "arc.mojom.OemCryptoInstance": true, "arc.mojom.OnDeviceSafetyHost": true, "arc.mojom.OnDeviceSafetyInstance": true, "arc.mojom.PipHost": true, "arc.mojom.PipInstance": true, "arc.mojom.PolicyHost": true, "arc.mojom.PolicyInstance": true, "arc.mojom.PowerHost": true, "arc.mojom.PowerInstance": true, "arc.mojom.PrintSessionHost": true, "arc.mojom.PrintSessionInstance": true, "arc.mojom.PrintSpoolerHost": true, "arc.mojom.PrintSpoolerInstance": true, "arc.mojom.PrivacyItemsHost": true, "arc.mojom.PrivacyItemsInstance": true, "arc.mojom.ProcessInstance": true, "arc.mojom.ProtectedBufferManager": true, "arc.mojom.ScreenCaptureHost": true, "arc.mojom.ScreenCaptureSession": true, "arc.mojom.ScreenCaptureInstance": true, "arc.mojom.ScreenCaptureSessionNotifier": true, "arc.mojom.SharesheetHost": true, "arc.mojom.SharesheetInstance": true, "arc.mojom.SystemStateHost": true, "arc.mojom.SystemStateInstance": true, "arc.mojom.SystemUiInstance": true, "arc.mojom.TracingInstance": true, "arc.mojom.TtsHost": true, "arc.mojom.TtsInstance": true, "arc.mojom.UsbHostHost": true, "arc.mojom.UsbHostInstance": true, "arc.mojom.VideoHost": true, "arc.mojom.VideoInstance": true, "arc.mojom.VideoAcceleratorFactory": true, "arc.mojom.VideoDecodeAccelerator": true, "arc.mojom.VideoDecodeClient": true, "arc.mojom.VideoDecoder": true, "arc.mojom.VideoDecoderClient": true, "arc.mojom.VideoEncodeAccelerator": true, "arc.mojom.VideoEncodeClient": true, "arc.mojom.VideoFramePool": true, "arc.mojom.VideoFramePoolClient": true, "arc.mojom.VideoProtectedBufferAllocator": true, "arc.mojom.VolumeMounterHost": true, "arc.mojom.VolumeMounterInstance": true, "arc.mojom.WakeLockHost": true, "arc.mojom.WakeLockInstance": true, "arc.mojom.WallpaperHost": true, "arc.mojom.WallpaperInstance": true, "arc.mojom.WebApkInstance": true, "ash.borealis_motd.mojom.PageHandlerFactory": true, "ash.borealis_motd.mojom.PageHandler": true, "ash.auth.mojom.FactorObserver": true, "ash.auth.mojom.AuthFactorConfig": true, "ash.auth.mojom.RecoveryFactorEditor": true, "ash.auth.mojom.PinFactorEditor": true, "ash.auth.mojom.PasswordFactorEditor": true, "ash.bluetooth_config.mojom.SystemPropertiesObserver": true, "ash.bluetooth_config.mojom.BluetoothDeviceStatusObserver": true, "ash.bluetooth_config.mojom.DiscoverySessionStatusObserver": true, "ash.bluetooth_config.mojom.KeyEnteredHandler": true, "ash.bluetooth_config.mojom.DevicePairingDelegate": true, "ash.bluetooth_config.mojom.DevicePairingHandler": true, "ash.bluetooth_config.mojom.BluetoothDiscoveryDelegate": true, "ash.bluetooth_config.mojom.CrosBluetoothConfig": true, "ash.babelorca.mojom.TachyonParsingService": true, "ash.cellular_setup.mojom.CarrierPortalHandler": true, "ash.cellular_setup.mojom.ActivationDelegate": true, "ash.cellular_setup.mojom.CellularSetup": true, "ash.cellular_setup.mojom.ESimManagerObserver": true, "ash.cellular_setup.mojom.ESimManager": true, "ash.cellular_setup.mojom.Euicc": true, "ash.cellular_setup.mojom.ESimProfile": true, "chromeos.connectivity.mojom.PasspointEventsListener": true, "chromeos.connectivity.mojom.PasspointService": true, "coral.mojom.TitleObserver": true, "coral.mojom.CoralProcessor": true, "coral.mojom.CoralService": true, "ash.cros_healthd.internal.mojom.ChromiumDataCollector": true, "ash.cros_healthd.mojom.CrosHealthdDiagnosticsService": true, "ash.cros_healthd.mojom.CrosHealthdEventService": true, "ash.cros_healthd.mojom.CrosHealthdProbeService": true, "ash.cros_healthd.mojom.DEPRECATED_LedLitUpRoutineReplier": true, "ash.cros_healthd.mojom.AshEventReporter": true, "ash.cros_healthd.mojom.CrosHealthdBluetoothObserver": true, "ash.cros_healthd.mojom.CrosHealthdLidObserver": true, "ash.cros_healthd.mojom.CrosHealthdPowerObserver": true, "ash.cros_healthd.mojom.CrosHealthdAudioObserver": true, "ash.cros_healthd.mojom.CrosHealthdThunderboltObserver": true, "ash.cros_healthd.mojom.CrosHealthdUsbObserver": true, "ash.cros_healthd.mojom.CrosHealthdSdCardObserver": true, "ash.cros_healthd.mojom.EventObserver": true, "ash.cros_healthd.mojom.CrosHealthdRoutinesService": true, "ash.cros_healthd.mojom.RoutineControl": true, "ash.cros_healthd.mojom.RoutineObserver": true, "ash.cros_healthd.connectivity.mojom.State": true, "ash.cros_healthd.connectivity.mojom.ConnectivityTestProvider": true, "ash.cros_safety.mojom.CloudSafetySession": true, "ash.cros_safety.mojom.OnDeviceSafetySession": true, "ash.cros_safety.mojom.CrosSafetyService": true, "ash.device_sync.mojom.DeviceSyncObserver": true, "ash.device_sync.mojom.DeviceSync": true, "ash.heartd.mojom.HeartdControl": true, "ash.heartd.mojom.HeartbeatService": true, "ash.heartd.mojom.Pacemaker": true, "ash.hotspot_config.mojom.CrosHotspotConfig": true, "ash.hotspot_config.mojom.CrosHotspotConfigObserver": true, "ash.hotspot_config.mojom.HotspotEnabledStateObserver": true, "ash.ime.mojom.ConnectionFactory": true, "ash.ime.mojom.InputEngineManager": true, "ash.ime.mojom.PlatformAccessProvider": true, "ash.ime.mojom.ImeService": true, "ash.ime.mojom.InputChannel": true, "ash.ime.mojom.InputMethod": true, "ash.ime.mojom.InputMethodHost": true, "ash.ime.mojom.InputMethodUserDataService": true, "ash.ime.mojom.JpUnused": true, "arc.keymaster.mojom.CertStoreInstance": true, "arc.keymint.mojom.CertStoreInstance": true, "ash.multidevice_setup.mojom.AccountStatusChangeDelegate": true, "ash.multidevice_setup.mojom.HostStatusObserver": true, "ash.multidevice_setup.mojom.FeatureStateObserver": true, "ash.multidevice_setup.mojom.MultiDeviceSetup": true, "ash.multidevice_setup.mojom.PrivilegedHostDeviceSetter": true, "sharing.mojom.FirewallHole": true, "sharing.mojom.FirewallHoleFactory": true, "sharing.mojom.MdnsObserver": true, "sharing.mojom.MdnsManager": true, "nearby.connections.mojom.EndpointDiscoveryListener": true, "nearby.connections.mojom.ConnectionLifecycleListener": true, "nearby.connections.mojom.PayloadListener": true, "nearby.connections.mojom.ConnectionListenerV3": true, "nearby.connections.mojom.PayloadListenerV3": true, "nearby.connections.mojom.NearbyConnections": true, "sharing.mojom.NearbySharingDecoder": true, "ash.nearby.presence.mojom.ScanSession": true, "ash.nearby.presence.mojom.ScanObserver": true, "ash.nearby.presence.mojom.NearbyPresence": true, "ash.nearby.presence.mojom.NearbyPresenceCredentialStorage": true, "nearby_share.mojom.NearbyShareSettingsObserver": true, "nearby_share.mojom.NearbyShareSettings": true, "nearby_share.mojom.DownloadContactsObserver": true, "nearby_share.mojom.ContactManager": true, "ash.quick_start.mojom.QuickStartDecoder": true, "sharing.mojom.Sharing": true, "sharing.mojom.TcpSocketFactory": true, "sharing.mojom.IceConfigFetcher": true, "sharing.mojom.MdnsResponderFactory": true, "sharing.mojom.IncomingMessagesListener": true, "sharing.mojom.ReceiveMessagesSession": true, "sharing.mojom.WebRtcSignalingMessenger": true, "ash.orca.mojom.EditorClient": true, "ash.orca.mojom.EditorClientConnector": true, "ash.orca.mojom.EditorEventSink": true, "ash.orca.mojom.SystemActuator": true, "ash.orca.mojom.TextQueryProvider": true, "ash.orca.mojom.OrcaService": true, "ash.quick_pair.mojom.FastPairDataParser": true, "ash.quick_pair.mojom.QuickPairService": true, "recording.mojom.DriveFsQuotaDelegate": true, "recording.mojom.RecordingServiceClient": true, "recording.mojom.RecordingService": true, "ash.rollback_network_config.mojom.RollbackNetworkConfig": true, "ash.secure_channel.mojom.NearbyConnectionStateListener": true, "ash.secure_channel.mojom.NearbyMessageSender": true, "ash.secure_channel.mojom.NearbyMessageReceiver": true, "ash.secure_channel.mojom.NearbyFilePayloadHandler": true, "ash.secure_channel.mojom.NearbyConnector": true, "ash.secure_channel.mojom.Channel": true, "ash.secure_channel.mojom.MessageReceiver": true, "ash.secure_channel.mojom.ConnectionDelegate": true, "ash.secure_channel.mojom.SecureChannelStructuredMetricsLogger": true, "ash.secure_channel.mojom.SecureChannel": true, "ash.secure_channel.mojom.FilePayloadListener": true, "ash.wifi_direct.mojom.WifiDirectManager": true, "ash.wifi_direct.mojom.WifiDirectConnection": true, "chromeos.cdm.mojom.BrowserCdmFactory": true, "chromeos.cdm.mojom.CdmFactory": true, "chromeos.cdm.mojom.CdmFactoryDaemon": true, "chromeos.cdm.mojom.CdmStorage": true, "chromeos.cdm.mojom.ContentDecryptionModule": true, "chromeos.cdm.mojom.ContentDecryptionModuleClient": true, "chromeos.cdm.mojom.OutputProtection": true, "drivefs.mojom.NativeMessagingPort": true, "drivefs.mojom.NativeMessagingHost": true, "chromeos.auth.mojom.InSessionAuth": true, "mahi.mojom.ContentExtractionService": true, "mahi.mojom.ContentExtractionServiceFactory": true, "chromeos.payments.mojom.PaymentAppInstance": true, "chromeos.printing.printing_manager.mojom.PrintJobsObserver": true, "chromeos.printing.printing_manager.mojom.PrintingMetadataProvider": true, "chromeos.printing.printing_manager.mojom.PrintManagementHandler": true, "quick_answers.mojom.SpellCheckService": true, "quick_answers.mojom.SpellCheckDictionary": true, "chromeos.remote_apps.mojom.RemoteApps": true, "chromeos.remote_apps.mojom.RemoteAppsFactory": true, "chromeos.remote_apps.mojom.RemoteAppLaunchObserver": true, "chromeos.sensors.mojom.SensorHalServer": true, "chromeos.sensors.mojom.SensorHalClient": true, "chromeos.sensors.mojom.SensorService": true, "chromeos.sensors.mojom.SensorDevice": true, "chromeos.sensors.mojom.SensorDeviceSamplesObserver": true, "chromeos.sensors.mojom.SensorServiceNewDevicesObserver": true, "chromeos.cfm.mojom.CfmBrowser": true, "chromeos.cfm.mojom.DisconnectReason": true, "chromeos.cfm.mojom.CfmServiceContext": true, "chromeos.cfm.mojom.CfmServiceAdaptor": true, "chromeos.cfm.mojom.ExternalDisplayBrightness": true, "ash.cfm.mojom.MeetBrowser": true, "ash.cfm.mojom.DataWatchDog": true, "ash.cfm.mojom.DataSource": true, "ash.cfm.mojom.DataAggregator": true, "chromeos.cfm.mojom.MeetDevicesDiagnostics": true, "ash.cfm.mojom.HotrodStatus": true, "chromeos.cfm.mojom.MeetDevicesInfo": true, "chromeos.cfm.mojom.PolicyInfoObserver": true, "chromeos.cfm.mojom.LoggerStateObserver": true, "chromeos.cfm.mojom.MeetDevicesLogger": true, "ash.cfm.mojom.XuCamera": true, "chromeos.machine_learning.mojom.DocumentScanner": true, "chromeos.machine_learning.mojom.GrammarChecker": true, "chromeos.machine_learning.mojom.GraphExecutor": true, "chromeos.machine_learning.mojom.HandwritingRecognizer": true, "chromeos.machine_learning.mojom.HeatmapPalmRejectionClient": true, "chromeos.machine_learning.mojom.ImageContentAnnotator": true, "chromeos.machine_learning.mojom.MachineLearningService": true, "chromeos.machine_learning.mojom.Model": true, "chromeos.machine_learning.mojom.SodaClient": true, "chromeos.machine_learning.mojom.SodaRecognizer": true, "chromeos.machine_learning.mojom.TextClassifier": true, "chromeos.machine_learning.mojom.TextSuggester": true, "chromeos.machine_learning.web_platform.mojom.HandwritingRecognizer": true, "chromeos.media_perception.mojom.MediaPerception": true, "chromeos.media_perception.mojom.MediaPerceptionService": true, "chromeos.media_perception.mojom.MediaPerceptionController": true, "chromeos.media_perception.mojom.MediaPerceptionControllerClient": true, "chromeos.network_config.mojom.CrosNetworkConfig": true, "chromeos.network_config.mojom.CrosNetworkConfigObserver": true, "chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines": true, "chromeos.network_health.mojom.NetworkEventsObserver": true, "chromeos.network_health.mojom.NetworkHealthService": true, "chromeos.tts.mojom.TtsService": true, "chromeos.tts.mojom.GoogleTtsStream": true, "chromeos.tts.mojom.PlaybackTtsStream": true, "chromeos.tts.mojom.TtsEventObserver": true, "math.mojom.MathService": true, "codelabs.mojom.ObjectA": true, "codelabs.mojom.ObjectB": true, "codelabs.mojom.AssociatedProcess": true, "codelabs.mojom.GenericInterface": true, "codelabs.mojom.Process": true, "actor_internals.mojom.Page": true, "actor_internals.mojom.PageHandler": true, "actor_internals.mojom.PageHandlerFactory": true, "actor.mojom.JournalClient": true, "autofill.mojom.AutofillAgent": true, "autofill.mojom.PasswordAutofillAgent": true, "autofill.mojom.PasswordGenerationAgent": true, "autofill.mojom.AutofillDriver": true, "autofill.mojom.PasswordManagerDriver": true, "autofill.mojom.PasswordGenerationDriver": true, "autofill_ml_internals.mojom.Page": true, "autofill_ml_internals.mojom.PageHandlerFactory": true, "autofill_ml_internals.mojom.PageHandler": true, "autofill.mojom.AutofillVisibilityObserver": true, "autofill.mojom.TypeTraitsTest": true, "bookmarks_api.mojom.BookmarksObserver": true, "bookmarks_api.mojom.BookmarksService": true, "browser_controls_api.mojom.BrowserControlsService": true, "tabs_api.mojom.TabDragService": true, "tabs_api.mojom.DropTargetRegistration": true, "tabs_api.mojom.DropTarget": true, "tabs_api.mojom.TabStripService": true, "tabs_api.mojom.TabsObserver": true, "tabs_api.mojom.TabStripExperimentService": true, "tabs_api.mojom.TabStripUIController": true, "extensions_bar.mojom.PageHandlerFactory": true, "extensions_bar.mojom.PageHandler": true, "extensions_bar.mojom.Page": true, "toolbar_ui_api.mojom.ToolbarUIObserver": true, "toolbar_ui_api.mojom.ToolbarUIService": true, "cast_streaming.mojom.AudioBufferRequester": true, "cast_streaming.mojom.VideoBufferRequester": true, "cast_streaming.mojom.DemuxerConnector": true, "cast_streaming.mojom.RendererController": true, "chromeos_camera.mojom.JpegEncodeAccelerator": true, "chromeos_camera.mojom.MjpegDecodeAccelerator": true, "commerce.mojom.CommerceInternalsHandlerFactory": true, "commerce.mojom.CommerceInternalsHandler": true, "commerce.mojom.CommerceInternalsPage": true, "commerce_web_extractor.mojom.CommerceWebExtractor": true, "commerce.price_insights.mojom.PriceInsightsHandler": true, "commerce.price_insights.mojom.PriceInsightsHandlerFactory": true, "commerce.price_tracking.mojom.PriceTrackingHandler": true, "commerce.price_tracking.mojom.Page": true, "commerce.price_tracking.mojom.PriceTrackingHandlerFactory": true, "shopping_service.mojom.ShoppingServiceHandlerFactory": true, "shopping_service.mojom.ShoppingServiceHandler": true, "content_capture.mojom.ContentCaptureReceiver": true, "content_capture.mojom.ContentCaptureSender": true, "content_settings.mojom.ContentSettingsAgent": true, "content_settings.mojom.ContentSettingsManager": true, "continuous_search.mojom.SearchResultExtractor": true, "data_sharing_internals.mojom.PageHandlerFactory": true, "data_sharing_internals.mojom.PageHandler": true, "data_sharing_internals.mojom.Page": true, "device_signals.mojom.SystemSignalsService": true, "discardable_memory.mojom.DiscardableSharedMemoryManager": true, "dom_distiller.mojom.DistillabilityService": true, "dom_distiller.mojom.DistillerJavaScriptService": true, "download.mojom.DownloadStreamClient": true, "connectors_internals.mojom.PageHandler": true, "payments.facilitated.mojom.PixCodeValidator": true, "global_media_controls.mojom.DeviceListHost": true, "global_media_controls.mojom.DeviceListClient": true, "global_media_controls.mojom.DeviceService": true, "global_media_controls.mojom.DevicePickerProvider": true, "global_media_controls.mojom.DevicePickerObserver": true, "guest_contents.mojom.GuestContentsHost": true, "guest_view.mojom.PageHandlerFactory": true, "guest_view.mojom.PageHandler": true, "guest_view.mojom.Page": true, "guest_view.mojom.ViewHandle": true, "guest_view.mojom.GuestViewHost": true, "heap_profiling.mojom.SnapshotController": true, "heap_profiling.mojom.TestConnector": true, "history_clusters_internals.mojom.PageHandlerFactory": true, "history_clusters_internals.mojom.PageHandler": true, "history_clusters_internals.mojom.Page": true, "input.mojom.RenderInputRouterDelegate": true, "input.mojom.RenderInputRouterDelegateClient": true, "js_injection.mojom.JsToBrowserMessaging": true, "js_injection.mojom.JsObjectsClient": true, "js_injection.mojom.BrowserToJsMessagingFactory": true, "js_injection.mojom.BrowserToJsMessaging": true, "js_injection.mojom.JsCommunication": true, "language_detection.mojom.ContentLanguageDetectionDriver": true, "components.media_control.mojom.MediaPlaybackOptions": true, "chrome.mojom.MediaParser": true, "chrome.mojom.MediaParserFactory": true, "chrome.mojom.MediaDataSource": true, "media_router.mojom.Debugger": true, "media_router.mojom.Logger": true, "media_router.mojom.MediaController": true, "media_router.mojom.MediaRouteProvider": true, "media_router.mojom.MediaRouter": true, "media_router.mojom.MediaRouterTraitsTestService": true, "media_router.mojom.MediaStatusObserver": true, "metrics.dwa.mojom.DwaRecorderClientInterface": true, "metrics.dwa.mojom.DwaRecorderInterface": true, "metrics.dwa.mojom.DwaRecorderFactory": true, "metrics.mojom.CallStackProfileCollector": true, "metrics.mojom.CallStackProfileCollectorTest": true, "metrics.mojom.ChildHistogramFetcherFactory": true, "metrics.mojom.ChildHistogramFetcher": true, "metrics.mojom.SingleSampleMetricsProvider": true, "metrics.mojom.SingleSampleMetric": true, "mirroring.mojom.CastMessageChannel": true, "mirroring.mojom.MirroringService": true, "mirroring.mojom.AudioStreamCreatorClient": true, "mirroring.mojom.ResourceProvider": true, "mirroring.mojom.SessionObserver": true, "network_hints.mojom.NetworkHintsHandler": true, "prerender.mojom.NoStatePrefetchCanceler": true, "prerender.mojom.NoStatePrefetchMessages": true, "notebooks_internals.mojom.PageHandlerFactory": true, "notebooks_internals.mojom.PageHandler": true, "notebooks_internals.mojom.Page": true, "searchbox.mojom.PageHandlerFactory": true, "searchbox.mojom.PageHandler": true, "searchbox.mojom.Page": true, "on_device_translation.mojom.FileOperationProxy": true, "on_device_translation.mojom.OnDeviceTranslationService": true, "on_device_translation.mojom.OnDeviceTranslator": true, "on_load_script_injector.mojom.OnLoadScriptInjector": true, "optimization_guide.mojom.PageTextConsumer": true, "optimization_guide.mojom.PageTextService": true, "optimization_guide_internals.mojom.PageHandlerFactory": true, "optimization_guide_internals.mojom.Page": true, "optimization_guide.mojom.ModelSolution": true, "optimization_guide.mojom.ModelSubscriber": true, "optimization_guide.mojom.ModelBroker": true, "optimization_guide.mojom.ModelBrokerDebugObserver": true, "optimization_guide.mojom.ModelBrokerDebug": true, "page_content_annotations.mojom.PageStabilityMonitor": true, "page_content_annotations.mojom.PageStabilityMonitorManager": true, "page_image_service.mojom.PageImageServiceHandler": true, "page_load_metrics.mojom.PageLoadMetrics": true, "paint_preview.mojom.PaintPreviewRecorder": true, "password_manager.mojom.CSVPasswordParser": true, "performance_manager.mojom.DocumentCoordinationUnit": true, "performance_manager.mojom.ProcessCoordinationUnit": true, "performance_manager.mojom.ChildProcessCoordinationUnit": true, "policy.mojom.PolicyPageHandler": true, "policy.mojom.PolicyPageClient": true, "policy.mojom.PolicyPageHandlerFactory": true, "printing.mojom.PrintPreviewUI": true, "printing.mojom.PrintRenderFrame": true, "printing.mojom.PrintManagerHost": true, "private_ai.mojom.OakSession": true, "private_ai_internals.mojom.PrivateAiInternalsPage": true, "private_ai_internals.mojom.PrivateAiInternalsPageHandler": true, "record_replay.mojom.RecordReplayAgent": true, "record_replay.mojom.RecordReplayDriver": true, "remote_cocoa.mojom.AlertBridge": true, "remote_cocoa.mojom.StubInterface": true, "remote_cocoa.mojom.Application": true, "remote_cocoa.mojom.MenuHost": true, "remote_cocoa.mojom.Menu": true, "remote_cocoa.mojom.NativeWidgetNSWindow": true, "remote_cocoa.mojom.NativeWidgetNSWindowHost": true, "remote_cocoa.mojom.SelectFileDialog": true, "remote_cocoa.mojom.TextInputHost": true, "safe_browsing.mojom.SafeBrowsing": true, "safe_browsing.mojom.ThreatReporter": true, "safe_browsing.mojom.PhishingDetector": true, "safe_browsing.mojom.PhishingModelSetter": true, "safe_browsing.mojom.PhishingModelSetterTestObserver": true, "safe_browsing.mojom.PhishingImageEmbedderDetector": true, "safe_browsing.mojom.ExtensionWebRequestReporter": true, "safe_browsing.mojom.SafeBrowsingUrlChecker": true, "security_interstitials.mojom.InterstitialCommands": true, "filesystem.mojom.Directory": true, "font_service.mojom.FontService": true, "font_data_service.mojom.FontDataService": true, "heap_profiling.mojom.ProfilingClient": true, "heap_profiling.mojom.ProfilingService": true, "paint_preview.mojom.PaintPreviewCompositor": true, "paint_preview.mojom.PaintPreviewCompositorCollection": true, "patch.mojom.FilePatcher": true, "printing.mojom.PrintCompositor": true, "quarantine.mojom.Quarantine": true, "storage.mojom.IndexedDBClientStateChecker": true, "storage.mojom.IndexedDBClientKeepActive": true, "storage.mojom.IndexedDBObserver": true, "storage.mojom.IndexedDBControl": true, "storage.mojom.MockFailureInjector": true, "storage.mojom.IndexedDBControlTest": true, "storage.mojom.BlobDataItemReader": true, "storage.mojom.BlobStorageContext": true, "storage.mojom.CacheStorageObserver": true, "storage.mojom.CacheStorageControl": true, "storage.mojom.FileSystemAccessContext": true, "storage.mojom.FileLock": true, "storage.mojom.Directory": true, "storage.mojom.LocalStorageControl": true, "storage.mojom.QuotaClient": true, "storage.mojom.ServiceWorkerLiveVersionRef": true, "storage.mojom.ServiceWorkerResourceReader": true, "storage.mojom.ServiceWorkerResourceWriter": true, "storage.mojom.ServiceWorkerResourceMetadataWriter": true, "storage.mojom.ServiceWorkerStorageControl": true, "storage.mojom.SessionStorageControl": true, "storage.mojom.StorageService": true, "unzip.mojom.UnzipFilter": true, "unzip.mojom.UnzipListener": true, "unzip.mojom.Unzipper": true, "site_engagement.mojom.SiteEngagementDetailsProvider": true, "spellcheck.mojom.SpellChecker": true, "spellcheck.mojom.SpellCheckInitializationHost": true, "spellcheck.mojom.SpellCheckHost": true, "spellcheck.mojom.SpellCheckPanel": true, "spellcheck.mojom.SpellCheckPanelHost": true, "subresource_filter.mojom.SubresourceFilterAgent": true, "subresource_filter.mojom.SubresourceFilterHost": true, "subresource_filter.mojom.SubresourceFilterRulesetObserver": true, "surface_embed.mojom.SurfaceEmbed": true, "surface_embed.mojom.SurfaceEmbedHost": true, "system_media_controls.mojom.SystemMediaControls": true, "system_media_controls.mojom.SystemMediaControlsObserver": true, "translate.mojom.TranslateAgent": true, "translate.mojom.ContentTranslateDriver": true, "unexportable_keys.mojom.UnexportableKeyService": true, "url_rewrite.mojom.UrlRequestRulesReceiver": true, "user_data_importer.mojom.BookmarkHtmlParser": true, "visitedlink.mojom.VisitedLinkNotificationSink": true, "viz.mojom.VizDebugOutput": true, "vrp_flags.mojom.VrpFlags": true, "vrp_flags.mojom.VrpFlagsFactory": true, "wallet.mojom.ImageExtractor": true, "web_cache.mojom.WebCache": true, "web_package.mojom.WebBundleParserFactory": true, "web_package.mojom.WebBundleParser": true, "web_package.mojom.BundleDataSource": true, "webapps.mojom.WebPageMetadataAgent": true, "chrome_urls.mojom.PageHandlerFactory": true, "chrome_urls.mojom.PageHandler": true, "storage.mojom.IdbInternalsHandler": true, "mojom.ProcessInternalsHandler": true, "traces_internals.mojom.TracesInternalsHandlerFactory": true, "traces_internals.mojom.PageHandler": true, "traces_internals.mojom.Page": true, "webxr.mojom.WebXrInternalsHandler": true, "webxr.mojom.XRInternalsSessionListener": true, "content.mojom.AgentSchedulingGroupHost": true, "content.mojom.AgentSchedulingGroup": true, "content.mojom.RouteProvider": true, "content.mojom.ChildProcessHost": true, "content.mojom.ChildProcess": true, "content.mojom.DomAutomationControllerHost": true, "content.mojom.MhtmlFileWriter": true, "content.mojom.FieldTrialRecorder": true, "content.mojom.FrameHTMLSerializerHandler": true, "content.mojom.Frame": true, "content.mojom.FrameBindingsControl": true, "content.mojom.NavigationRendererCancellationListener": true, "content.mojom.NavigationRendererIgnoreDuplicateNavigationListener": true, "content.mojom.FrameHost": true, "content.mojom.GinJavaBridge": true, "content.mojom.GinJavaBridgeRemoteObject": true, "content.mojom.GinJavaBridgeHost": true, "content.mojom.InputInjector": true, "content.mojom.MediaInternalLogRecords": true, "content.mojom.MemoryConsumerTraitsTest": true, "content.mojom.ChildMemoryCoordinator": true, "content.mojom.ChildMemoryConsumerRegistryHost": true, "content.mojom.MemoryCoordinatorDiagnosticsHost": true, "content.mojom.NavigationClient": true, "content.mojom.RenderMessageFilter": true, "remote_cocoa.mojom.PopupMenuRunner": true, "remote_cocoa.mojom.RenderWidgetHostNSView": true, "remote_cocoa.mojom.RenderWidgetHostNSViewHost": true, "content.mojom.Renderer": true, "content.mojom.RendererHost": true, "content.mojom.RendererVariationsConfiguration": true, "content.mojom.SandboxSupport": true, "content.mojom.SyntheticTrialConfiguration": true, "content.mojom.ThreadTypeSwitcher": true, "remote_cocoa.mojom.WebContentsNSView": true, "remote_cocoa.mojom.WebContentsNSViewHost": true, "content.mojom.WebUIHost": true, "content.mojom.WebUI": true, "content.mojom.FontCacheWin": true, "content.mojom.ResourceUsageReporter": true, "content.mojom.TestInterfaceForDefer": true, "content.mojom.TestInterfaceForGrant": true, "content.mojom.TestInterfaceForCancel": true, "content.mojom.TestInterfaceForUnexpected": true, "content.mojom.MojoContextProvider": true, "content.mojom.TestService": true, "devtools_media_encoding_service.mojom.DevToolsMediaEncodingServiceClient": true, "devtools_media_encoding_service.mojom.DevToolsMediaEncodingService": true, "content.mojom.MainFrameCounterTest": true, "content.mojom.MemoryCoordinatorTest": true, "content.mojom.MemoryCoordinatorTestClient": true, "content.mojom.PowerMonitorTest": true, "content.mojom.RenderFrameTestHelper": true, "content.mojom.FrameHostTestInterface": true, "content.mojom.FakeBluetoothChooser": true, "content.mojom.FakeBluetoothChooserFactory": true, "content.mojom.FakeBluetoothChooserClient": true, "content.mojom.MojoEcho": true, "content.optional_numerics_unittest.mojom.Params": true, "content.optional_numerics_unittest.mojom.ResponseParams": true, "content.optional_numerics_unittest.mojom.InterfaceV0": true, "content.optional_numerics_unittest.mojom.InterfaceV2": true, "content.mojom.WebTestRenderFrame": true, "content.mojom.WebTestControlHost": true, "content.mojom.NonAssociatedWebTestControlHost": true, "content.mojom.WebTestBluetoothFakeAdapterSetter": true, "bluetooth.mojom.Advertisement": true, "bluetooth.mojom.DiscoverySession": true, "bluetooth.mojom.Socket": true, "bluetooth.mojom.ServerSocket": true, "bluetooth.mojom.GattService": true, "bluetooth.mojom.GattServiceObserver": true, "bluetooth.mojom.Adapter": true, "bluetooth.mojom.AdapterObserver": true, "bluetooth.mojom.Device": true, "bluetooth.mojom.FakeBluetooth": true, "bluetooth.mojom.FakeCentral": true, "bluetooth.mojom.FakeCentralClient": true, "device.mojom.GamepadObserver": true, "device.mojom.GamepadMonitor": true, "device.mojom.GamepadHapticsManager": true, "device.mojom.XRSessionController": true, "device.mojom.XRRuntimeEventListener": true, "device.mojom.XRRuntime": true, "device.mojom.ImmersiveOverlay": true, "device.mojom.IsolatedXRRuntimeProviderClient": true, "device.mojom.IsolatedXRRuntimeProvider": true, "device.mojom.XRDeviceService": true, "device.mojom.XRDeviceServiceHost": true, "device.mojom.VRService": true, "device.mojom.XRSessionMetricsRecorder": true, "device.mojom.VRServiceClient": true, "device.mojom.XREnvironmentIntegrationProvider": true, "device.mojom.XRFrameDataProvider": true, "device.mojom.XRPresentationProvider": true, "device.mojom.XRPresentationClient": true, "device.mojom.XRSessionClient": true, "device.mojom.XRLayerManager": true, "device.mojom.WebXrInternalsRendererListener": true, "extensions.mime_handler.MimeHandlerService": true, "extensions.mime_handler.BeforeUnloadControl": true, "extensions.mojom.AppWindow": true, "extensions.mojom.RendererAutomationRegistry": true, "extensions.mojom.EventDispatcher": true, "extensions.mojom.EventRouter": true, "extensions.mojom.LocalFrame": true, "extensions.mojom.LocalFrameHost": true, "extensions.mojom.GuestView": true, "extensions.mojom.MimeHandlerViewContainerManager": true, "extensions.KeepAlive": true, "extensions.mojom.MessagePort": true, "extensions.mojom.MessagePortHost": true, "extensions.mojom.Renderer": true, "extensions.mojom.RendererHost": true, "extensions.mojom.ServiceWorker": true, "extensions.mojom.ServiceWorkerHost": true, "extensions.mojom.WebRequestHost": true, "mojom.WebEngineMediaResourceProvider": true, "gpu.mojom.GpuChannel": true, "gpu.mojom.CommandBuffer": true, "gpu.mojom.CommandBufferClient": true, "gpu.mojom.DCOMPTexture": true, "gpu.mojom.DCOMPTextureClient": true, "gpu.mojom.SharedImagePoolClientInterface": true, "ai.mojom.AIPrototypingService": true, "ai.mojom.EnhancedCalendarService": true, "ai.mojom.ModelLedSuggestionsService": true, "ai.mojom.SmartTabGroupingService": true, "ai.mojom.TabOrganizationService": true, "inspect.mojom.PageHandler": true, "inspect.mojom.Page": true, "inspect.mojom.PageHandlerFactory": true, "web.mojom.WebUsageController": true, "IPC.mojom.Channel": true, "IPC.mojom.ChannelBootstrap": true, "media.mojom.ImageCapture": false, "media.mojom.VideoCaptureObserver": true, "media.mojom.VideoCaptureHost": true, "cros.mojom.Camera3CallbackOps": true, "cros.mojom.Camera3DeviceOps": true, "cros.mojom.CameraAppDeviceProvider": true, "cros.mojom.CameraAppDeviceBridge": true, "cros.mojom.CameraAppDevice": true, "cros.mojom.ResultMetadataObserver": true, "cros.mojom.CameraEventObserver": true, "cros.mojom.DocumentCornersObserver": true, "cros.mojom.CameraInfoObserver": true, "cros.mojom.StillCaptureResultObserver": true, "cros.mojom.CameraModuleCallbacks": true, "cros.mojom.VendorTagOps": true, "cros.mojom.CameraModule": true, "cros.mojom.CameraHalClient": true, "cros.mojom.KioskVisionObserver": true, "cros.mojom.CameraHalDispatcher": true, "cros.mojom.CrosCameraServiceObserver": true, "cros.mojom.CrosCameraService": true, "cros.mojom.CrosDocumentScanner": true, "cros.mojom.JpegAcceleratorProvider": true, "cros.mojom.CrosDisplayObserver": true, "cros.mojom.CrosLidObserver": true, "cros.mojom.CrosPowerObserver": true, "cros.mojom.CrosSystemEventMonitor": true, "cros.mojom.VideoCaptureDeviceInfoObserver": true, "cros.mojom.VideoCaptureDeviceInfoMonitor": true, "midi.mojom.MidiSessionClient": true, "midi.mojom.MidiSessionProvider": true, "midi.mojom.MidiSession": true, "media.mojom.AndroidOverlayProvider": true, "media.mojom.AndroidOverlay": true, "media.mojom.AndroidOverlayClient": true, "media.mojom.AudioDecoder": true, "media.mojom.AudioDecoderClient": true, "media.mojom.AudioEncoder": true, "media.mojom.AudioEncoderClient": true, "media.mojom.AudioInputStream": true, "media.mojom.AudioInputStreamClient": true, "media.mojom.AudioInputStreamObserver": true, "media.mojom.AudioLog": true, "media.mojom.AudioLogFactory": true, "media.mojom.AudioOutputStream": true, "media.mojom.AudioOutputStreamObserver": true, "media.mojom.AudioOutputStreamProvider": true, "media.mojom.AudioOutputStreamProviderClient": true, "media.mojom.DeviceSwitchInterface": true, "media.mojom.AudioProcessorControls": true, "media.mojom.LocalMuter": true, "media.mojom.AudioStreamFactory": true, "media.mojom.CastApplicationMediaInfoManager": true, "media.mojom.CdmContextEventCallback": true, "media.mojom.CdmContextForOOPVD": true, "media.mojom.CdmDocumentService": true, "media.mojom.CdmService": true, "media.mojom.CdmServiceBroker": true, "media.mojom.CdmStorage": true, "media.mojom.CdmFile": true, "media.mojom.ContentDecryptionModule": true, "media.mojom.ContentDecryptionModuleClient": true, "media.mojom.CdmFactory": true, "media.mojom.DCOMPSurfaceRegistry": true, "media.mojom.Decryptor": true, "media.mojom.FrameResourceReleaser": true, "media.mojom.DemuxerStream": true, "media.mojom.MuteStateObserver": true, "media.mojom.FrameInterfaceFactory": true, "media.mojom.FuchsiaMediaCdmProvider": true, "media.mojom.FuchsiaMediaCodecProvider": true, "media.mojom.VideoDecoderTracker": true, "media.mojom.InterfaceFactory": true, "media.mojom.KeySystemSupportObserver": true, "media.mojom.KeySystemSupport": true, "media.mojom.MediaDrmStorage": true, "media.mojom.MediaFoundationPreferences": true, "media.mojom.GpuInfoObserver": true, "media.mojom.MediaFoundationService": true, "media.mojom.MediaFoundationServiceBroker": true, "media.mojom.MediaLog": true, "media.mojom.MediaMetricsProvider": true, "media.mojom.MediaPlayer": true, "media.mojom.MediaPlayerObserverClient": true, "media.mojom.MediaPlayerObserver": true, "media.mojom.MediaPlayerHost": true, "media.mojom.MediaService": true, "media.mojom.MediaDrmSupport": true, "media.mojom.OutputProtection": true, "media.mojom.PlaybackEventsRecorder": true, "media.mojom.ProvisionFetcher": true, "media.mojom.RemoterFactory": true, "media.mojom.RemotingDataStreamSender": true, "media.mojom.Remoter": true, "media.mojom.RemotingSource": true, "media.mojom.Remotee": true, "media.mojom.RemotingSink": true, "media.mojom.RemotingDataStreamReceiver": true, "media.mojom.Renderer": true, "media.mojom.RendererClient": true, "media.mojom.FlingingRendererClientExtension": true, "media.mojom.MediaFoundationRendererExtension": true, "media.mojom.MediaFoundationRendererObserver": true, "media.mojom.MediaFoundationRendererNotifier": true, "media.mojom.SpeechRecognitionContext": true, "media.mojom.SpeechRecognitionRecognizer": true, "media.mojom.SpeechRecognitionRecognizerClient": true, "media.mojom.SpeechRecognitionBrowserObserver": true, "media.mojom.SpeechRecognitionSurface": true, "media.mojom.SpeechRecognitionSurfaceClient": true, "media.mojom.SpeechRecognitionClientBrowserInterface": true, "media.mojom.SpeechRecognitionAudioForwarder": true, "media.mojom.AudioSourceSpeechRecognitionContext": true, "media.mojom.SpeechRecognitionService": true, "media.mojom.AudioSourceFetcher": true, "media.mojom.SpeechRecognizer": true, "media.mojom.OnDeviceSpeechRecognition": true, "media.mojom.SpeechRecognitionSession": true, "media.mojom.SpeechRecognitionSessionClient": true, "media.mojom.VideoDecodePerfHistory": true, "media.mojom.VideoDecodeStatsRecorder": true, "media.mojom.VideoFrameHandleReleaser": true, "media.mojom.VideoDecoder": true, "media.mojom.VideoDecoderClient": true, "media.mojom.VideoDecoderFactoryProcess": true, "media.mojom.VideoEncodeAcceleratorProvider": true, "media.mojom.VideoEncodeAcceleratorProviderFactory": true, "media.mojom.VideoEncodeAccelerator": true, "media.mojom.VideoEncodeAcceleratorClient": true, "media.mojom.VideoEncoderMetricsProvider": true, "media.mojom.WatchTimeRecorder": true, "media.mojom.WebrtcVideoPerfRecorder": true, "media.mojom.WebrtcVideoPerfHistory": true, "mojo_base.mojom.Binder": true, "mojo_base.mojom.GenericAssociatedInterface": true, "fuzz.mojom.FuzzDummyInterface": true, "fuzz.mojom.FuzzInterface": true, "pdf.mojom.SaveDataBufferHandler": true, "pdf.mojom.PdfListener": true, "pdf.mojom.PdfHost": true, "remoting.mojom.ChromotingHostServices": true, "remoting.mojom.ChromotingSessionServices": true, "remoting.mojom.DesktopSessionRequestHandler": true, "remoting.mojom.DesktopSession": true, "remoting.mojom.DesktopSessionEvents": true, "remoting.mojom.DesktopSessionManager": true, "remoting.mojom.DesktopSessionAgent": true, "remoting.mojom.FileWriter": true, "remoting.mojom.FileReader": true, "remoting.mojom.DesktopSessionControl": true, "remoting.mojom.VideoCapturer": true, "remoting.mojom.VideoCapturerEventHandler": true, "remoting.mojom.DesktopSessionEventHandler": true, "remoting.mojom.DesktopSessionStateHandler": true, "remoting.mojom.WorkerProcessControl": true, "remoting.mojom.DesktopProcessControl": true, "remoting.mojom.LoginSessionService": true, "remoting.mojom.PeerSessionManager": true, "remoting.mojom.PeerSessionEventHandler": true, "remoting.mojom.TransportEventHandler": true, "remoting.mojom.IceConfigFetcher": true, "remoting.mojom.PairingRequester": true, "remoting.mojom.PeerSession": true, "remoting.mojom.PeerConnectionProcessControl": true, "remoting.mojom.SecurityKeyForwarder": true, "remoting.mojom.SupportHostObserver": true, "remoting.mojom.RemoteUrlOpener": true, "remoting.mojom.RemotingHostControl": true, "remoting.mojom.HostStatusObserver": true, "remoting.mojom.WebAuthnRequestCanceller": true, "remoting.mojom.WebAuthnProxy": true, "sandbox.mac.mojom.TraitsTestService": true, "ax.android.mojom.AccessibilityHelperHost": true, "ax.android.mojom.AccessibilityHelperInstance": true, "ax.mojom.AccessibilityService": true, "ax.mojom.AccessibilityServiceClient": true, "ax.mojom.Automation": true, "ax.mojom.AutomationClient": true, "audio.mojom.AudioService": true, "audio.mojom.DebugRecordingFileProvider": true, "audio.mojom.DebugRecording": true, "audio.mojom.DeviceListener": true, "audio.mojom.DeviceNotifier": true, "audio.mojom.LogFactoryManager": true, "audio.mojom.MlModelManager": true, "audio.mojom.SystemInfo": true, "audio.mojom.TestingApi": true, "cert_verifier.mojom.CertVerifierServiceFactory": true, "data_decoder.mojom.DataDecoderService": true, "data_decoder.mojom.Gzipper": true, "data_decoder.mojom.ImageDecoder": true, "data_decoder.mojom.StructuredHeadersParser": true, "data_decoder.mojom.XmlParser": true, "device.mojom.BatteryMonitor": true, "device.mojom.DeviceService": true, "device.mojom.FingerprintObserver": true, "device.mojom.Fingerprint": true, "device.mojom.Geolocation": true, "device.mojom.GeolocationContext": true, "device.mojom.GeolocationControl": true, "device.mojom.GeolocationInternalsObserver": true, "device.mojom.GeolocationInternals": true, "device.mojom.HidManagerClient": true, "device.mojom.HidManager": true, "device.mojom.HidConnection": true, "device.mojom.HidConnectionClient": true, "device.mojom.HidConnectionWatcher": true, "device.mojom.InputDeviceManagerClient": true, "device.mojom.InputDeviceManager": true, "device.mojom.MtpManagerClient": true, "device.mojom.MtpManager": true, "device.mojom.NFC": true, "device.mojom.NFCClient": true, "device.mojom.NFCProvider": true, "device.mojom.PowerMonitor": true, "device.mojom.PowerMonitorClient": true, "device.mojom.PressureManager": true, "device.mojom.PressureClient": true, "device.mojom.PublicIpAddressGeolocationProvider": true, "device.mojom.ScreenOrientation": true, "device.mojom.ScreenOrientationListener": true, "device.mojom.Sensor": false, "device.mojom.SensorClient": false, "device.mojom.SensorClientController": false, "device.mojom.SensorProvider": false, "device.mojom.SerialPortManager": true, "device.mojom.SerialPortManagerClient": true, "device.mojom.SerialPort": true, "device.mojom.SerialPortClient": true, "device.mojom.SerialPortConnectionWatcher": true, "device.mojom.SmartCardTransaction": true, "device.mojom.SmartCardConnection": true, "device.mojom.SmartCardConnectionWatcher": true, "device.mojom.SmartCardContext": true, "device.mojom.SmartCardContextFactory": true, "device.mojom.TimeZoneMonitor": true, "device.mojom.TimeZoneMonitorClient": true, "device.mojom.UsbDevice": false, "device.mojom.UsbDeviceClient": false, "device.mojom.UsbDeviceManager": false, "device.mojom.UsbDeviceManagerClient": false, "device.mojom.UsbDeviceManagerTest": true, "device.mojom.VibrationManager": true, "device.mojom.VibrationManagerListener": true, "device.mojom.WakeLock": true, "device.mojom.WakeLockContext": true, "device.mojom.WakeLockProvider": true, "device.mojom.WakeLockObserver": true, "image_annotation.mojom.ImageProcessor": true, "image_annotation.mojom.Annotator": true, "image_annotation.mojom.ImageAnnotationService": true, "media_session.mojom.AudioFocusObserver": true, "media_session.mojom.AudioFocusRequestClient": true, "media_session.mojom.AudioFocusManager": true, "media_session.mojom.AudioFocusManagerDebug": true, "media_session.mojom.MediaControllerManager": true, "media_session.mojom.MediaController": true, "media_session.mojom.MediaControllerObserver": true, "media_session.mojom.MediaControllerImageObserver": true, "media_session.mojom.MediaSessionObserver": true, "media_session.mojom.MediaSession": true, "media_session.mojom.MediaSessionService": true, "ukm.mojom.SingularUkmInterface": true, "ukm.mojom.UkmRecorderClientInterface": true, "ukm.mojom.UkmRecorderInterface": true, "ukm.mojom.UkmRecorderFactory": true, "network.mojom.TraitsTestService": true, "network.mojom.AcceptCHFrameObserver": true, "network.mojom.CacheEncryptionProvider": true, "cert_verifier.mojom.URLLoaderFactoryConnector": true, "cert_verifier.mojom.CertVerifierService": true, "cert_verifier.mojom.CertVerifierServiceClient": true, "cert_verifier.mojom.CertVerifierRequest": true, "cert_verifier.mojom.CertVerifierServiceUpdater": true, "network.mojom.ChunkedDataPipeGetter": true, "network.mojom.ConnectionChangeObserverClient": true, "network.mojom.CookieAccessObserver": true, "network.mojom.CookieEncryptionProvider": true, "network.mojom.CookieChangeListener": true, "network.mojom.CookieManager": true, "network.mojom.CrossOriginEmbedderPolicyReporter": true, "network.mojom.CrossOriginOpenerPolicyReporter": true, "network.mojom.DataPipeGetter": true, "network.mojom.DeviceBoundSessionManager": true, "network.mojom.DeviceBoundSessionAccessObserver": true, "network.mojom.DeviceBoundSessionEventObserver": true, "network.mojom.DevToolsObserver": true, "network.mojom.DocumentIsolationPolicyReporter": true, "network.mojom.FirstPartySetsAccessDelegate": true, "network.mojom.ResolveHostHandle": true, "network.mojom.ResolveHostClient": true, "network.mojom.MdnsListenClient": true, "network.mojom.HostResolver": true, "network.mojom.DnsConfigChangeManagerClient": true, "network.mojom.DnsConfigChangeManager": true, "network.mojom.FileEnumerator": true, "network.mojom.HttpCacheBackendFileOperations": true, "network.mojom.HttpCacheBackendFileOperationsFactory": true, "network.mojom.MdnsResponder": true, "network.mojom.NetLogExporter": true, "network.mojom.NetLogProxySource": true, "network.mojom.NetLogProxySink": true, "network.mojom.NetworkAnnotationMonitor": true, "network.mojom.NetworkChangeManagerClient": true, "network.mojom.NetworkChangeManager": true, "network.mojom.CustomProxyConnectionObserver": true, "network.mojom.CustomProxyConfigClient": true, "network.mojom.TrustedHeaderClient": true, "network.mojom.TrustedURLLoaderHeaderClient": true, "network.mojom.PreloadedSharedDictionaryInfoHandle": true, "network.mojom.NetworkContext": true, "network.mojom.NetworkContextClient": true, "network.mojom.NetworkInterfaceChangeListener": true, "network.mojom.NetworkQualityEstimatorManagerClient": true, "network.mojom.NetworkQualityEstimatorManager": true, "network.mojom.NetworkService": true, "network.mojom.NetworkContextCreator": true, "network.mojom.DurableMessageCollector": true, "network.mojom.SimpleCacheEntry": true, "network.mojom.SimpleCacheEntryEnumerator": true, "network.mojom.SimpleCache": true, "network.mojom.NetworkServiceTest": true, "network.mojom.ObliviousHttpClient": true, "network.mojom.P2PNetworkNotificationClient": true, "network.mojom.P2PSocketManager": true, "network.mojom.P2PSocket": true, "network.mojom.P2PSocketClient": true, "network.mojom.P2PTrustedSocketManagerClient": true, "network.mojom.P2PTrustedSocketManager": true, "network.mojom.ProxyConfigClient": true, "network.mojom.ProxyConfigPollerClient": true, "network.mojom.ProxyErrorClient": true, "network.mojom.ProxyLookupClient": true, "network.mojom.ProxyResolvingSocket": true, "network.mojom.ProxyResolvingSocketFactory": true, "network.mojom.ReportingApiObserver": true, "network.mojom.RestrictedCookieManager": true, "network.mojom.RestrictedUDPSocket": true, "network.mojom.SharedDictionaryAccessObserver": true, "network.mojom.SocketBroker": true, "network.mojom.SocketConnectionTracker": true, "network.mojom.SocketFactory": true, "network.mojom.SSLConfigClient": true, "network.mojom.SystemDnsResolver": true, "network.mojom.TCPBoundSocket": true, "network.mojom.TCPConnectedSocket": true, "network.mojom.SocketObserver": true, "network.mojom.TCPServerSocket": true, "network.mojom.TLSClientSocket": true, "network.mojom.TrustTokenAccessObserver": true, "network.mojom.TrustTokenQueryAnswerer": true, "network.mojom.UDPSocket": true, "network.mojom.UDPSocketListener": true, "network.mojom.URLLoader": true, "network.mojom.URLLoaderClient": true, "network.mojom.URLLoaderFactory": true, "network.mojom.ClientCertificateResponder": true, "network.mojom.SSLPrivateKey": true, "network.mojom.AuthChallengeResponder": true, "network.mojom.URLLoaderNetworkServiceObserver": true, "network.mojom.WebBundleHandle": true, "network.mojom.WebTransport": true, "network.mojom.WebTransportClient": true, "network.mojom.WebTransportHandshakeClient": true, "network.mojom.WebSocketAuthenticationHandler": true, "network.mojom.WebSocketHandshakeClient": true, "network.mojom.WebSocketClient": true, "network.mojom.WebSocket": true, "on_device_model.mojom.DownloadObserver": true, "on_device_model.mojom.StreamingResponder": true, "on_device_model.mojom.ContextClient": true, "on_device_model.mojom.Session": true, "on_device_model.mojom.OnDeviceModel": true, "on_device_model.mojom.TextSafetySession": true, "on_device_model.mojom.TextSafetyModel": true, "on_device_model.mojom.AsrStreamResponder": true, "on_device_model.mojom.AsrStreamInput": true, "on_device_model.mojom.PlatformModelProgressObserver": true, "on_device_model.mojom.OnDeviceModelService": true, "on_device_model.mojom.OnDeviceModelPlatformService": true, "passage_embeddings.mojom.PassageEmbedder": true, "passage_embeddings.mojom.PassageEmbeddingsService": true, "prefs.mojom.ResetOnLoadObserver": true, "prefs.mojom.TrackedPreferenceValidationDelegate": true, "proxy_resolver.mojom.HostResolverRequestClient": true, "proxy_resolver.mojom.ProxyResolver": true, "proxy_resolver.mojom.ProxyResolverRequestClient": true, "proxy_resolver.mojom.ProxyResolverFactory": true, "proxy_resolver.mojom.ProxyResolverFactoryRequestClient": true, "proxy_resolver.mojom.SystemProxyResolver": true, "memory_instrumentation.mojom.ClientProcess": true, "memory_instrumentation.mojom.HeapProfiler": true, "memory_instrumentation.mojom.HeapProfilerHelper": true, "memory_instrumentation.mojom.Coordinator": true, "memory_instrumentation.mojom.CoordinatorConnector": true, "screen_ai.mojom.ScreenAIServiceShutdownHandler": true, "screen_ai.mojom.ScreenAIServiceFactory": true, "screen_ai.mojom.ScreenAIAnnotator": true, "screen_ai.mojom.Screen2xMainContentExtractor": true, "screen_ai.mojom.OCRService": true, "screen_ai.mojom.MainContentExtractionService": true, "service_manager.mojom.ProcessMetadata": true, "service_manager.mojom.Connector": true, "service_manager.mojom.InterfaceProvider": true, "service_manager.mojom.Service": true, "service_manager.mojom.ServiceControl": true, "service_manager.mojom.ServiceManagerListener": true, "service_manager.mojom.ServiceManager": true, "shape_detection.mojom.BarcodeDetection": true, "shape_detection.mojom.BarcodeDetectionProvider": true, "shape_detection.mojom.FaceDetection": true, "shape_detection.mojom.FaceDetectionProvider": true, "shape_detection.mojom.ShapeDetectionService": true, "shape_detection.mojom.TextDetection": true, "echo.mojom.EchoService": true, "tracing.mojom.BackgroundTracingAgentClient": true, "tracing.mojom.BackgroundTracingAgent": true, "tracing.mojom.BackgroundTracingAgentProvider": true, "tracing.mojom.ProducerHost": true, "tracing.mojom.ProducerClient": true, "tracing.mojom.PerfettoService": true, "tracing.mojom.ConsumerHost": true, "tracing.mojom.TracingSessionHost": true, "tracing.mojom.TracingSessionClient": true, "tracing.mojom.SystemTracingService": true, "tracing.mojom.TracedProcess": true, "tracing.mojom.TracingService": true, "video_capture.mojom.Device": true, "video_capture.mojom.DevicesChangedObserver": true, "video_capture.mojom.Producer": true, "video_capture.mojom.TestingControls": true, "video_capture.mojom.VideoCaptureService": true, "video_capture.mojom.VideoFrameAccessHandler": true, "video_capture.mojom.VideoFrameHandler": true, "video_capture.mojom.PushVideoStreamSubscription": true, "video_capture.mojom.VideoSource": true, "video_capture.mojom.VideoSourceProvider": true, "video_capture.mojom.SharedMemoryVirtualDevice": true, "video_capture.mojom.TextureVirtualDevice": true, "video_capture.mojom.GpuMemoryBufferVirtualDevice": true, "viz.mojom.BeginFrameObserver": true, "viz.mojom.DisplayPrivate": true, "viz.mojom.DisplayClient": true, "viz.mojom.ExternalBeginFrameController": true, "viz.mojom.ExternalBeginFrameControllerClient": true, "viz.mojom.FrameSinkManager": true, "viz.mojom.FrameSinkManagerClient": true, "viz.mojom.RendererInputRouterDelegateRegistry": true, "viz.mojom.FrameSinkManagerTestApi": true, "viz.mojom.FrameSinkVideoConsumerFrameCallbacks": true, "viz.mojom.FrameSinkVideoConsumer": true, "viz.mojom.FrameSinkVideoCapturer": true, "viz.mojom.FrameSinkVideoCaptureOverlay": true, "viz.mojom.FrameSinksMetricsRecorder": true, "viz.mojom.LayeredWindowUpdater": true, "viz.mojom.VSyncParameterObserver": true, "viz.mojom.GpuHost": true, "viz.mojom.GpuLogging": true, "viz.mojom.GpuService": true, "viz.mojom.InfoCollectionGpuService": true, "viz.mojom.VizMain": true, "viz.mojom.CompositingModeWatcher": true, "viz.mojom.CompositingModeReporter": true, "viz.mojom.CompositorFrameSink": true, "viz.mojom.CompositorFrameSinkClient": true, "viz.mojom.CopyOutputResultSender": true, "viz.mojom.FrameSinkBundle": true, "viz.mojom.FrameSinkBundleClient": true, "viz.mojom.LayerContext": true, "viz.mojom.LayerContextClient": true, "viz.mojom.TextureReleaser": true, "viz.mojom.VideoDetectorObserver": true, "viz.mojom.Gpu": true, "viz.mojom.InputTargetClient": true, "webnn.mojom.WebNNCompilerContext": true, "webnn.mojom.WebNNCompilerService": true, "webnn.mojom.WebNNContext": true, "webnn.mojom.WebNNContextProvider": true, "webnn.mojom.WeightsFileSession": true, "webnn.mojom.WebNNWeightsFileCreator": true, "webnn.mojom.WebNNGraphBuilder": true, "webnn.mojom.WebNNModelLoader": true, "webnn.mojom.WebNNServiceIntrospectionClient": true, "webnn.mojom.WebNNServiceIntrospection": true, "webnn.mojom.WebNNTensor": true, "storage.mojom.QuotaInternalsHandler": true, "storage.mojom.QuotaManagerObserver": true, "blink.mojom.AIManagerCreateLanguageModelClient": false, "blink.mojom.AILanguageModel": false, "blink.mojom.AIManagerCreateWriterClient": false, "blink.mojom.AIManagerCreateRewriterClient": false, "blink.mojom.AIManagerCreateSummarizerClient": false, "blink.mojom.AIManagerCreateProofreaderClient": false, "blink.mojom.AIManagerCreateSemanticEmbedderClient": false, "blink.mojom.AIManager": false, "blink.mojom.AIProofreader": false, "blink.mojom.AIRewriter": false, "blink.mojom.AISemanticEmbedder": false, "blink.mojom.AISummarizer": false, "blink.mojom.AIWriter": false, "blink.mojom.ModelStreamingResponder": false, "blink.mojom.AndroidFontLookup": false, "blink.mojom.AnnotationAgent": false, "blink.mojom.AnnotationAgentHost": false, "blink.mojom.AnnotationAgentContainer": false, "blink.mojom.AppBannerController": false, "blink.mojom.AppBannerEvent": false, "blink.mojom.AppBannerService": false, "blink.mojom.AssociatedInterface": false, "blink.mojom.AssociatedInterfaceProvider": false, "blink.mojom.AutoplayConfigurationClient": false, "blink.mojom.BackgroundFetchRegistrationObserver": false, "blink.mojom.BackgroundFetchService": false, "blink.mojom.BackgroundFetchRegistrationService": false, "blink.mojom.OneShotBackgroundSyncService": false, "blink.mojom.PeriodicBackgroundSyncService": false, "blink.mojom.BadgeService": false, "blink.mojom.BlobReaderClient": false, "blink.mojom.Blob": false, "blink.mojom.ProgressClient": false, "blink.mojom.BlobRegistry": false, "blink.mojom.BlobURLStore": false, "blink.mojom.BlobURLToken": false, "blink.mojom.BytesProvider": false, "blink.mojom.FileBackedBlobFactory": false, "blink.mojom.WebBluetoothService": true, "blink.mojom.WebBluetoothServerClient": true, "blink.mojom.WebBluetoothCharacteristicClient": true, "blink.mojom.WebBluetoothAdvertisementClient": true, "blink.mojom.BroadcastChannelClient": true, "blink.mojom.BroadcastChannelProvider": true, "blink.mojom.BrowserInterfaceBroker": false, "blink.mojom.BucketHost": true, "blink.mojom.BucketManagerHost": true, "blink.mojom.CacheStorageCache": false, "blink.mojom.CacheStorage": false, "blink.mojom.CallStackGenerator": false, "blink.mojom.ColorChooserFactory": false, "blink.mojom.ColorChooser": false, "blink.mojom.ColorChooserClient": false, "blink.mojom.EyeDropperChooser": false, "blink.mojom.DateTimeChooser": false, "blink.mojom.FileChooser": false, "blink.mojom.PopupMenuClient": false, "blink.mojom.ClipboardListener": false, "blink.mojom.ClipboardHost": false, "blink.mojom.CloseListener": false, "blink.mojom.WebPressureManager": false, "blink.mojom.WebPressureClient": false, "blink.mojom.ContactsManager": false, "blink.mojom.AIPageContentAgent": false, "blink.mojom.PaidContentMetadataObserver": false, "blink.mojom.MetaTagsObserver": false, "blink.mojom.FrameMetadataObserverRegistry": false, "blink.mojom.InnerHtmlAgent": false, "blink.mojom.InnerTextAgent": false, "blink.mojom.ScriptToolHost": false, "blink.mojom.ModelContextHost": false, "blink.mojom.ModelContext": false, "blink.mojom.ContentIndexService": false, "blink.mojom.ContextMenuClient": false, "blink.mojom.CookieStore": false, "blink.mojom.CrashMemoryMetricsReporter": false, "blink.mojom.CredentialManager": true, "blink.mojom.ManagedConfigurationObserver": false, "blink.mojom.DeviceAPIService": false, "blink.mojom.ManagedConfigurationService": false, "blink.mojom.DevicePostureProvider": false, "blink.mojom.DevicePostureClient": false, "blink.mojom.DevToolsAgent": false, "blink.mojom.DevToolsAgentHost": false, "blink.mojom.DevToolsSession": false, "blink.mojom.DevToolsSessionHost": false, "blink.mojom.DevToolsFrontend": false, "blink.mojom.DevToolsFrontendHost": false, "payments.mojom.DigitalGoods": false, "payments.mojom.DigitalGoodsFactory": false, "blink.mojom.DirectSocketsService": true, "blink.mojom.DiskAllocator": false, "blink.mojom.DocumentMetadata": false, "blink.mojom.DomStorageProvider": false, "blink.mojom.DomStorage": false, "blink.mojom.DomStorageClient": false, "blink.mojom.SessionStorageNamespace": false, "blink.mojom.StorageAreaObserver": false, "blink.mojom.StorageArea": false, "blink.mojom.DWriteFontProxy": true, "payments.facilitated.mojom.PaymentLinkHandler": false, "blink.mojom.ObservedFeature": false, "blink.mojom.FeatureObserver": false, "blink.mojom.FencedFrameOwnerHost": true, "blink.mojom.FileUtilitiesHost": false, "blink.mojom.FileSystemAccessAccessHandleHost": false, "blink.mojom.FileSystemAccessDataTransferToken": false, "blink.mojom.FileSystemAccessDirectoryEntriesListener": false, "blink.mojom.FileSystemAccessDirectoryHandle": false, "blink.mojom.FileSystemAccessFileDelegateHost": false, "blink.mojom.FileSystemAccessFileHandle": false, "blink.mojom.FileSystemAccessFileModificationHost": false, "blink.mojom.FileSystemAccessFileWriter": false, "blink.mojom.FileSystemAccessManager": false, "blink.mojom.FileSystemAccessObserver": false, "blink.mojom.FileSystemAccessObserverHost": false, "blink.mojom.FileSystemAccessTransferToken": false, "blink.mojom.FileSystemCancellableOperation": false, "blink.mojom.FileSystemOperationListener": false, "blink.mojom.ReceivedSnapshotListener": false, "blink.mojom.FileSystemManager": false, "blink.mojom.FontAccessManager": false, "blink.mojom.FontUniqueNameLookup": false, "blink.mojom.BackForwardCacheControllerHost": true, "blink.mojom.FindInPage": true, "blink.mojom.FindInPageClient": true, "blink.mojom.LocalFrameHost": true, "blink.mojom.NonAssociatedLocalFrameHost": true, "blink.mojom.LocalFrame": true, "blink.mojom.LocalMainFrame": true, "blink.mojom.LocalMainFrameHost": true, "blink.mojom.PolicyContainerHost": false, "blink.mojom.NavigationStateKeepAliveHandle": true, "blink.mojom.RemoteFrameHost": true, "blink.mojom.RemoteFrame": true, "blink.mojom.RemoteMainFrame": true, "blink.mojom.RemoteMainFrameHost": true, "blink.mojom.ReportingObserver": true, "blink.mojom.SurfaceEmbedder": true, "blink.mojom.EmbeddedFrameSinkClient": true, "blink.mojom.EmbeddedFrameSinkProvider": true, "blink.mojom.GeolocationService": false, "blink.mojom.GpuDataManager": true, "handwriting.mojom.HandwritingRecognizer": false, "handwriting.mojom.HandwritingRecognitionService": false, "blink.mojom.HidService": false, "blink.mojom.Hyphenation": false, "blink.mojom.IdleMonitor": false, "blink.mojom.IdleManager": false, "blink.mojom.ImageDownloader": false, "blink.mojom.ImageReplacement": false, "blink.mojom.ImageReplacementHost": false, "blink.mojom.IDBFactoryClient": true, "blink.mojom.IDBDatabaseCallbacks": true, "blink.mojom.IDBCursor": true, "blink.mojom.IDBTransaction": true, "blink.mojom.IDBDatabaseGetAllResultSink": true, "blink.mojom.IDBDatabase": true, "blink.mojom.IDBFactory": true, "blink.mojom.ImeRenderWidgetHost": false, "blink.mojom.WidgetInputHandlerHost": false, "blink.mojom.FrameWidgetInputHandler": false, "blink.mojom.WidgetInputHandler": false, "blink.mojom.TextSuggestionHost": false, "blink.mojom.TextSuggestionBackend": false, "blink.mojom.PointerLockContext": false, "blink.mojom.SynchronousCompositor": true, "blink.mojom.SynchronousCompositorHost": true, "blink.mojom.SynchronousCompositorControlHost": true, "blink.mojom.TextInputHost": true, "blink.mojom.InstallationService": false, "blink.mojom.InstalledAppProvider": false, "blink.mojom.KeyboardLockService": false, "blink.mojom.LCPCriticalPathPredictorHost": false, "blink.mojom.LeakDetector": false, "blink.mojom.TextFragmentReceiver": false, "blink.mojom.CodeCacheHost": false, "blink.mojom.ContentSecurityNotifier": false, "blink.mojom.FetchLaterLoaderFactory": false, "blink.mojom.FetchLaterLoader": false, "blink.mojom.KeepAliveHandle": false, "blink.mojom.KeepAliveHandleFactory": false, "blink.mojom.AnchorElementMetricsHost": false, "blink.mojom.PauseSubresourceLoadingHandle": false, "blink.mojom.ResourceLoadInfoNotifier": false, "blink.mojom.LockScreenService": false, "blink.mojom.LockHandle": false, "blink.mojom.LockRequest": false, "blink.mojom.LockManager": false, "blink.mojom.ManifestManager": false, "blink.mojom.ManifestUrlChangeObserver": false, "blink.mojom.FullscreenVideoElementHandler": false, "blink.mojom.RendererAudioInputStreamFactory": false, "blink.mojom.RendererAudioInputStreamFactoryClient": false, "blink.mojom.RendererAudioOutputStreamFactory": false, "blink.mojom.MediaSessionClient": false, "blink.mojom.MediaSessionService": false, "blink.mojom.AecDumpAgent": false, "blink.mojom.AecDumpManager": false, "blink.mojom.MediaDevicesDispatcherHost": false, "blink.mojom.MediaDevicesListener": false, "blink.mojom.MediaStreamDeviceObserver": false, "blink.mojom.MediaStreamDispatcherHost": false, "blink.mojom.MediaStreamTrackMetricsHost": false, "blink.mojom.MemoryUsageMonitorLinux": true, "blink.mojom.ImageReleaseCallback": true, "blink.mojom.MimeRegistry": false, "blink.mojom.NavigationResumeDeferredCommitListener": true, "blink.mojom.NonPersistentNotificationListener": false, "blink.mojom.NotificationService": false, "blink.mojom.TranslationManagerCreateTranslatorClient": false, "blink.mojom.TranslationManager": false, "blink.mojom.Translator": false, "blink.mojom.OomInterventionHost": false, "blink.mojom.OomIntervention": false, "blink.mojom.OriginTrialStateHost": true, "blink.mojom.DisplayCutoutHost": true, "blink.mojom.DisplayCutoutClient": true, "blink.mojom.PageBroadcast": true, "blink.mojom.FrameWidget": true, "blink.mojom.FrameWidgetHost": true, "blink.mojom.PopupWidgetHost": true, "payments.mojom.PaymentManager": false, "payments.mojom.PaymentHandlerResponseCallback": false, "payments.mojom.PaymentHandlerHost": false, "payments.mojom.PaymentRequestClient": false, "payments.mojom.PaymentRequest": false, "payments.mojom.SecurePaymentConfirmationService": false, "blink.mojom.PeerConnectionManager": false, "blink.mojom.PeerConnectionTrackerHost": false, "blink.mojom.V8DetailedMemoryReporter": false, "blink.mojom.PermissionObserver": false, "blink.mojom.EmbeddedPermissionControlClient": false, "blink.mojom.PermissionService": false, "blink.mojom.PersistentRendererPrefsService": false, "blink.mojom.PictureInPictureSessionObserver": false, "blink.mojom.PictureInPictureSession": false, "blink.mojom.PictureInPictureService": false, "blink.mojom.PluginRegistry": false, "blink.mojom.AnchorElementInteractionHost": false, "blink.mojom.NoStatePrefetchProcessor": false, "blink.mojom.PresentationConnection": false, "blink.mojom.PresentationService": false, "blink.mojom.PresentationController": false, "blink.mojom.PresentationReceiver": false, "blink.mojom.WebPrintJobStateObserver": true, "blink.mojom.WebPrintJobController": true, "blink.mojom.WebPrinter": true, "blink.mojom.WebPrintingService": true, "blink.mojom.PushMessaging": false, "blink.mojom.QuotaManagerHost": false, "blink.mojom.RemoteObjectHost": true, "blink.mojom.RemoteObject": true, "blink.mojom.RemoteObjectGatewayFactory": true, "blink.mojom.RemoteObjectGateway": true, "blink.mojom.RenderAccessibilityHost": false, "blink.mojom.RenderAccessibility": false, "blink.mojom.RendererPreferenceWatcher": false, "blink.mojom.ReportingServiceProxy": false, "blink.mojom.WebSensorProvider": false, "blink.mojom.SerialService": false, "blink.mojom.SerialServiceClient": false, "blink.mojom.ControllerServiceWorker": true, "blink.mojom.ControllerServiceWorkerConnector": true, "blink.mojom.EmbeddedWorkerInstanceClient": true, "blink.mojom.EmbeddedWorkerInstanceHost": true, "blink.mojom.ServiceWorkerHost": true, "blink.mojom.ServiceWorker": true, "blink.mojom.ServiceWorkerContainerHost": true, "blink.mojom.ServiceWorkerContainer": true, "blink.mojom.ServiceWorkerFetchResponseCallback": false, "blink.mojom.ServiceWorkerInstalledScriptsManagerHost": false, "blink.mojom.ServiceWorkerInstalledScriptsManager": false, "blink.mojom.ServiceWorkerObjectHost": true, "blink.mojom.ServiceWorkerObject": true, "blink.mojom.ServiceWorkerRegistrationObjectHost": true, "blink.mojom.ServiceWorkerRegistrationObject": true, "blink.mojom.ServiceWorkerRunningStatusCallback": false, "blink.mojom.ServiceWorkerStreamCallback": false, "blink.mojom.ServiceWorkerWorkerClient": false, "blink.mojom.ServiceWorkerWorkerClientRegistry": false, "blink.mojom.SetShapeService": true, "blink.mojom.SmartCardService": false, "blink.mojom.WebOTPService": false, "blink.mojom.SpeculationHost": false, "blink.mojom.SpeechSynthesisVoiceListObserver": false, "blink.mojom.SpeechSynthesisClient": false, "blink.mojom.SpeechSynthesis": false, "blink.mojom.StorageAccessHandle": true, "blink.mojom.SubAppsService": false, "blink.mojom.DeclarativePerformanceObserverHost": false, "blink.mojom.UnboundedSurfaceHost": false, "blink.mojom.UnboundedSurfaceClient": false, "blink.mojom.UnhandledTapNotifier": true, "blink.mojom.WebUsbService": false, "blink.mojom.WakeLockService": false, "blink.mojom.WebInstallService": false, "blink.mojom.WebLaunchService": false, "blink.mojom.AudioContextManager": false, "blink.mojom.Authenticator": true, "blink.mojom.DigitalIdentityRequest": false, "blink.mojom.FederatedRequest": false, "blink.mojom.FederatedRequestService": false, "blink.mojom.WebNNIntrospectionClient": true, "blink.mojom.WebNNIntrospection": true, "blink.mojom.RTCLoggingDispatcher": false, "blink.mojom.ShareService": false, "blink.mojom.WebSocketConnector": false, "blink.mojom.WebTransportConnector": false, "blink.mojom.WebViewMediaIntegrityService": true, "blink.mojom.WebViewMediaIntegrityProvider": true, "blink.mojom.WidgetCompositor": false, "blink.mojom.WidgetHost": false, "blink.mojom.Widget": false, "blink.mojom.RenderInputRouterClient": false, "blink.mojom.DedicatedWorkerHost": false, "blink.mojom.DedicatedWorkerHostFactoryClient": true, "blink.mojom.DedicatedWorkerHostFactory": true, "blink.mojom.SharedWorker": true, "blink.mojom.SharedWorkerClient": false, "blink.mojom.SharedWorkerConnector": true, "blink.mojom.SharedWorkerFactory": true, "blink.mojom.SharedWorkerHost": false, "blink.mojom.SubresourceLoaderUpdater": false, "blink.mojom.WorkerContentSettingsProxy": false, "blink.mojom.WorkletDevToolsHost": false, "ui.mojom.IMEStructTraitsTest": true, "gfx.mojom.ImageTraitsTestService": true, "gfx.mojom.DelegatedInkPointRenderer": true, "gfx.mojom.TraitsTestService": true, "gfx.mojom.RangeTraitsTestService": true, "gl.mojom.TraitsTestService": true, "ui.ozone.mojom.DeviceCursor": true, "ui.ozone.mojom.DrmDevice": true, "ui.mojom.ScenicGpuHost": true, "ui.mojom.ScenicGpuService": true, "ui.ozone.mojom.WaylandBufferManagerHost": true, "ui.ozone.mojom.WaylandBufferManagerGpu": true, "wl.mojom.ConfigTraitsTestService": true, "ui.ozone.mojom.GesturePropertiesService": true, "webui_examples.mojom.PageHandlerFactory": true, "webui_examples.mojom.PageHandler": true, "app_management.mojom.PageHandlerFactory": true, "app_management.mojom.PageHandler": true, "app_management.mojom.Page": true, "color_change_listener.mojom.PageHandler": true, "color_change_listener.mojom.Page": true, "composebox.mojom.PageHandlerFactory": true, "composebox.mojom.PageHandler": true, "customize_color_scheme_mode.mojom.CustomizeColorSchemeModeHandlerFactory": true, "customize_color_scheme_mode.mojom.CustomizeColorSchemeModeHandler": true, "customize_color_scheme_mode.mojom.CustomizeColorSchemeModeClient": true, "custom_help_bubble.mojom.CustomHelpBubbleHandlerFactory": true, "custom_help_bubble.mojom.CustomHelpBubbleHandler": true, "help_bubble.mojom.HelpBubbleHandlerFactory": true, "help_bubble.mojom.PdfHelpBubbleHandlerFactory": true, "help_bubble.mojom.HelpBubbleHandler": true, "help_bubble.mojom.HelpBubbleClient": true, "history.mojom.ForeignSessionPageHandlerFactory": true, "history.mojom.ForeignSessionPageHandler": true, "history.mojom.ForeignSessionPage": true, "history.mojom.PageHandler": true, "history.mojom.Page": true, "history_cross_device_signin_promo.mojom.HistoryCrossDeviceSigninPromoHandler": true, "history_clusters.mojom.PageHandler": true, "history_clusters.mojom.Page": true, "history_clusters.mojom.PageHandlerFactory": true, "history_embeddings.mojom.PageHandlerFactory": true, "history_embeddings.mojom.PageHandler": true, "history_embeddings.mojom.Page": true, "most_visited.mojom.MostVisitedPageHandlerFactory": true, "most_visited.mojom.MostVisitedPageHandler": true, "most_visited.mojom.MostVisitedPage": true, "signin.mojom.SigninPageHandler": true, "signin.mojom.SigninPageHandlerFactory": true, "theme_color_picker.mojom.ThemeColorPickerHandlerFactory": true, "theme_color_picker.mojom.ThemeColorPickerHandler": true, "theme_color_picker.mojom.ThemeColorPickerClient": true, "batch_upload_promo.mojom.PageHandlerFactory": true, "batch_upload_promo.mojom.PageHandler": true, "batch_upload_promo.mojom.Page": true, "browser_command.mojom.CommandHandlerFactory": true, "browser_command.mojom.CommandHandler": true, "metrics_reporter.mojom.PageMetricsHost": true, "metrics_reporter.mojom.PageMetrics": true, "tracked_element.mojom.TrackedElementHandler": true, "tracked_element.mojom.TrackedElementManager": true, "url.mojom.UrlTest": true},
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
        const versionStr = window.mojoVersion || '154.0.8015.0';
        
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

 mojo.internal.bindings.chromeos = mojo.internal.bindings.chromeos || {};
mojo.internal.bindings.chromeos.network_config = mojo.internal.bindings.chromeos.network_config || {};
mojo.internal.bindings.chromeos.network_config.mojom = mojo.internal.bindings.chromeos.network_config.mojom || {};
mojo.internal.bindings.mojo_base = mojo.internal.bindings.mojo_base || {};
mojo.internal.bindings.mojo_base.mojom = mojo.internal.bindings.mojo_base.mojom || {};
mojo.internal.bindings.network = mojo.internal.bindings.network || {};
mojo.internal.bindings.url = mojo.internal.bindings.url || {};

mojo.internal.bindings.chromeos.network_config.mojom.ActivationStateTypeSpec = mojo.internal.bindings.chromeos.network_config.mojom.ActivationStateTypeSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.chromeos.network_config.mojom.AuthenticationTypeSpec = mojo.internal.bindings.chromeos.network_config.mojom.AuthenticationTypeSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.chromeos.network_config.mojom.HiddenSsidModeSpec = mojo.internal.bindings.chromeos.network_config.mojom.HiddenSsidModeSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.chromeos.network_config.mojom.ProxyModeSpec = mojo.internal.bindings.chromeos.network_config.mojom.ProxyModeSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.chromeos.network_config.mojom.SecurityTypeSpec = mojo.internal.bindings.chromeos.network_config.mojom.SecurityTypeSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.chromeos.network_config.mojom.MatchTypeSpec = mojo.internal.bindings.chromeos.network_config.mojom.MatchTypeSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.chromeos.network_config.mojom.VpnTypeSpec = mojo.internal.bindings.chromeos.network_config.mojom.VpnTypeSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.chromeos.network_config.mojom.FilterTypeSpec = mojo.internal.bindings.chromeos.network_config.mojom.FilterTypeSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.chromeos.network_config.mojom.StartConnectResultSpec = mojo.internal.bindings.chromeos.network_config.mojom.StartConnectResultSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.chromeos.network_config.mojom.CertificateTypeSpec = mojo.internal.bindings.chromeos.network_config.mojom.CertificateTypeSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.chromeos.network_config.mojom.InhibitReasonSpec = mojo.internal.bindings.chromeos.network_config.mojom.InhibitReasonSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.chromeos.network_config.mojom.AlwaysOnVpnModeSpec = mojo.internal.bindings.chromeos.network_config.mojom.AlwaysOnVpnModeSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.chromeos.network_config.mojom.ApnStateSpec = mojo.internal.bindings.chromeos.network_config.mojom.ApnStateSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.chromeos.network_config.mojom.ApnAuthenticationTypeSpec = mojo.internal.bindings.chromeos.network_config.mojom.ApnAuthenticationTypeSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.chromeos.network_config.mojom.ApnIpTypeSpec = mojo.internal.bindings.chromeos.network_config.mojom.ApnIpTypeSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.chromeos.network_config.mojom.ApnTypeSpec = mojo.internal.bindings.chromeos.network_config.mojom.ApnTypeSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.chromeos.network_config.mojom.ApnSourceSpec = mojo.internal.bindings.chromeos.network_config.mojom.ApnSourceSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.chromeos.network_config.mojom.TypeSpec = mojo.internal.bindings.chromeos.network_config.mojom.TypeSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.chromeos.network_config.mojom.SuppressionTypeSpec = mojo.internal.bindings.chromeos.network_config.mojom.SuppressionTypeSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.chromeos.network_config.mojom.TrafficCounterSourceSpec = mojo.internal.bindings.chromeos.network_config.mojom.TrafficCounterSourceSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.chromeos.network_config.mojom.NetworkTypeStatePropertiesSpec = mojo.internal.bindings.chromeos.network_config.mojom.NetworkTypeStatePropertiesSpec || { $: {} };
if (mojo.internal.bindings.chromeos.network_config.mojom.NetworkTypeStatePropertiesSpec.$.structSpec && mojo.internal.bindings.chromeos.network_config.mojom.NetworkTypeStatePropertiesSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.chromeos.network_config.mojom.NetworkTypeStatePropertiesSpec.$ = {};
mojo.internal.bindings.chromeos.network_config.mojom.NetworkTypeManagedPropertiesSpec = mojo.internal.bindings.chromeos.network_config.mojom.NetworkTypeManagedPropertiesSpec || { $: {} };
if (mojo.internal.bindings.chromeos.network_config.mojom.NetworkTypeManagedPropertiesSpec.$.structSpec && mojo.internal.bindings.chromeos.network_config.mojom.NetworkTypeManagedPropertiesSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.chromeos.network_config.mojom.NetworkTypeManagedPropertiesSpec.$ = {};
mojo.internal.bindings.chromeos.network_config.mojom.NetworkTypeConfigPropertiesSpec = mojo.internal.bindings.chromeos.network_config.mojom.NetworkTypeConfigPropertiesSpec || { $: {} };
if (mojo.internal.bindings.chromeos.network_config.mojom.NetworkTypeConfigPropertiesSpec.$.structSpec && mojo.internal.bindings.chromeos.network_config.mojom.NetworkTypeConfigPropertiesSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.chromeos.network_config.mojom.NetworkTypeConfigPropertiesSpec.$ = {};
mojo.internal.bindings.chromeos.network_config.mojom.SIMLockStatusSpec = mojo.internal.bindings.chromeos.network_config.mojom.SIMLockStatusSpec || { $: {} };
if (mojo.internal.bindings.chromeos.network_config.mojom.SIMLockStatusSpec.$.structSpec && mojo.internal.bindings.chromeos.network_config.mojom.SIMLockStatusSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.chromeos.network_config.mojom.SIMLockStatusSpec.$ = {};
mojo.internal.bindings.chromeos.network_config.mojom.SIMInfoSpec = mojo.internal.bindings.chromeos.network_config.mojom.SIMInfoSpec || { $: {} };
if (mojo.internal.bindings.chromeos.network_config.mojom.SIMInfoSpec.$.structSpec && mojo.internal.bindings.chromeos.network_config.mojom.SIMInfoSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.chromeos.network_config.mojom.SIMInfoSpec.$ = {};
mojo.internal.bindings.chromeos.network_config.mojom.CellularStatePropertiesSpec = mojo.internal.bindings.chromeos.network_config.mojom.CellularStatePropertiesSpec || { $: {} };
if (mojo.internal.bindings.chromeos.network_config.mojom.CellularStatePropertiesSpec.$.structSpec && mojo.internal.bindings.chromeos.network_config.mojom.CellularStatePropertiesSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.chromeos.network_config.mojom.CellularStatePropertiesSpec.$ = {};
mojo.internal.bindings.chromeos.network_config.mojom.EthernetStatePropertiesSpec = mojo.internal.bindings.chromeos.network_config.mojom.EthernetStatePropertiesSpec || { $: {} };
if (mojo.internal.bindings.chromeos.network_config.mojom.EthernetStatePropertiesSpec.$.structSpec && mojo.internal.bindings.chromeos.network_config.mojom.EthernetStatePropertiesSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.chromeos.network_config.mojom.EthernetStatePropertiesSpec.$ = {};
mojo.internal.bindings.chromeos.network_config.mojom.TetherStatePropertiesSpec = mojo.internal.bindings.chromeos.network_config.mojom.TetherStatePropertiesSpec || { $: {} };
if (mojo.internal.bindings.chromeos.network_config.mojom.TetherStatePropertiesSpec.$.structSpec && mojo.internal.bindings.chromeos.network_config.mojom.TetherStatePropertiesSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.chromeos.network_config.mojom.TetherStatePropertiesSpec.$ = {};
mojo.internal.bindings.chromeos.network_config.mojom.VPNStatePropertiesSpec = mojo.internal.bindings.chromeos.network_config.mojom.VPNStatePropertiesSpec || { $: {} };
if (mojo.internal.bindings.chromeos.network_config.mojom.VPNStatePropertiesSpec.$.structSpec && mojo.internal.bindings.chromeos.network_config.mojom.VPNStatePropertiesSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.chromeos.network_config.mojom.VPNStatePropertiesSpec.$ = {};
mojo.internal.bindings.chromeos.network_config.mojom.WiFiStatePropertiesSpec = mojo.internal.bindings.chromeos.network_config.mojom.WiFiStatePropertiesSpec || { $: {} };
if (mojo.internal.bindings.chromeos.network_config.mojom.WiFiStatePropertiesSpec.$.structSpec && mojo.internal.bindings.chromeos.network_config.mojom.WiFiStatePropertiesSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.chromeos.network_config.mojom.WiFiStatePropertiesSpec.$ = {};
mojo.internal.bindings.chromeos.network_config.mojom.NetworkStatePropertiesSpec = mojo.internal.bindings.chromeos.network_config.mojom.NetworkStatePropertiesSpec || { $: {} };
if (mojo.internal.bindings.chromeos.network_config.mojom.NetworkStatePropertiesSpec.$.structSpec && mojo.internal.bindings.chromeos.network_config.mojom.NetworkStatePropertiesSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.chromeos.network_config.mojom.NetworkStatePropertiesSpec.$ = {};
mojo.internal.bindings.chromeos.network_config.mojom.DeviceStatePropertiesSpec = mojo.internal.bindings.chromeos.network_config.mojom.DeviceStatePropertiesSpec || { $: {} };
if (mojo.internal.bindings.chromeos.network_config.mojom.DeviceStatePropertiesSpec.$.structSpec && mojo.internal.bindings.chromeos.network_config.mojom.DeviceStatePropertiesSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.chromeos.network_config.mojom.DeviceStatePropertiesSpec.$ = {};
mojo.internal.bindings.chromeos.network_config.mojom.NetworkFilterSpec = mojo.internal.bindings.chromeos.network_config.mojom.NetworkFilterSpec || { $: {} };
if (mojo.internal.bindings.chromeos.network_config.mojom.NetworkFilterSpec.$.structSpec && mojo.internal.bindings.chromeos.network_config.mojom.NetworkFilterSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.chromeos.network_config.mojom.NetworkFilterSpec.$ = {};
mojo.internal.bindings.chromeos.network_config.mojom.ApnPropertiesSpec = mojo.internal.bindings.chromeos.network_config.mojom.ApnPropertiesSpec || { $: {} };
if (mojo.internal.bindings.chromeos.network_config.mojom.ApnPropertiesSpec.$.structSpec && mojo.internal.bindings.chromeos.network_config.mojom.ApnPropertiesSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.chromeos.network_config.mojom.ApnPropertiesSpec.$ = {};
mojo.internal.bindings.chromeos.network_config.mojom.RoamingPropertiesSpec = mojo.internal.bindings.chromeos.network_config.mojom.RoamingPropertiesSpec || { $: {} };
if (mojo.internal.bindings.chromeos.network_config.mojom.RoamingPropertiesSpec.$.structSpec && mojo.internal.bindings.chromeos.network_config.mojom.RoamingPropertiesSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.chromeos.network_config.mojom.RoamingPropertiesSpec.$ = {};
mojo.internal.bindings.chromeos.network_config.mojom.CellularProviderPropertiesSpec = mojo.internal.bindings.chromeos.network_config.mojom.CellularProviderPropertiesSpec || { $: {} };
if (mojo.internal.bindings.chromeos.network_config.mojom.CellularProviderPropertiesSpec.$.structSpec && mojo.internal.bindings.chromeos.network_config.mojom.CellularProviderPropertiesSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.chromeos.network_config.mojom.CellularProviderPropertiesSpec.$ = {};
mojo.internal.bindings.chromeos.network_config.mojom.FoundNetworkPropertiesSpec = mojo.internal.bindings.chromeos.network_config.mojom.FoundNetworkPropertiesSpec || { $: {} };
if (mojo.internal.bindings.chromeos.network_config.mojom.FoundNetworkPropertiesSpec.$.structSpec && mojo.internal.bindings.chromeos.network_config.mojom.FoundNetworkPropertiesSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.chromeos.network_config.mojom.FoundNetworkPropertiesSpec.$ = {};
mojo.internal.bindings.chromeos.network_config.mojom.IPConfigPropertiesSpec = mojo.internal.bindings.chromeos.network_config.mojom.IPConfigPropertiesSpec || { $: {} };
if (mojo.internal.bindings.chromeos.network_config.mojom.IPConfigPropertiesSpec.$.structSpec && mojo.internal.bindings.chromeos.network_config.mojom.IPConfigPropertiesSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.chromeos.network_config.mojom.IPConfigPropertiesSpec.$ = {};
mojo.internal.bindings.chromeos.network_config.mojom.PaymentPortalPropertiesSpec = mojo.internal.bindings.chromeos.network_config.mojom.PaymentPortalPropertiesSpec || { $: {} };
if (mojo.internal.bindings.chromeos.network_config.mojom.PaymentPortalPropertiesSpec.$.structSpec && mojo.internal.bindings.chromeos.network_config.mojom.PaymentPortalPropertiesSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.chromeos.network_config.mojom.PaymentPortalPropertiesSpec.$ = {};
mojo.internal.bindings.chromeos.network_config.mojom.WireGuardPeerPropertiesSpec = mojo.internal.bindings.chromeos.network_config.mojom.WireGuardPeerPropertiesSpec || { $: {} };
if (mojo.internal.bindings.chromeos.network_config.mojom.WireGuardPeerPropertiesSpec.$.structSpec && mojo.internal.bindings.chromeos.network_config.mojom.WireGuardPeerPropertiesSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.chromeos.network_config.mojom.WireGuardPeerPropertiesSpec.$ = {};
mojo.internal.bindings.chromeos.network_config.mojom.ManagedBooleanSpec = mojo.internal.bindings.chromeos.network_config.mojom.ManagedBooleanSpec || { $: {} };
if (mojo.internal.bindings.chromeos.network_config.mojom.ManagedBooleanSpec.$.structSpec && mojo.internal.bindings.chromeos.network_config.mojom.ManagedBooleanSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.chromeos.network_config.mojom.ManagedBooleanSpec.$ = {};
mojo.internal.bindings.chromeos.network_config.mojom.ManagedInt32Spec = mojo.internal.bindings.chromeos.network_config.mojom.ManagedInt32Spec || { $: {} };
if (mojo.internal.bindings.chromeos.network_config.mojom.ManagedInt32Spec.$.structSpec && mojo.internal.bindings.chromeos.network_config.mojom.ManagedInt32Spec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.chromeos.network_config.mojom.ManagedInt32Spec.$ = {};
mojo.internal.bindings.chromeos.network_config.mojom.ManagedStringSpec = mojo.internal.bindings.chromeos.network_config.mojom.ManagedStringSpec || { $: {} };
if (mojo.internal.bindings.chromeos.network_config.mojom.ManagedStringSpec.$.structSpec && mojo.internal.bindings.chromeos.network_config.mojom.ManagedStringSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.chromeos.network_config.mojom.ManagedStringSpec.$ = {};
mojo.internal.bindings.chromeos.network_config.mojom.ManagedStringListSpec = mojo.internal.bindings.chromeos.network_config.mojom.ManagedStringListSpec || { $: {} };
if (mojo.internal.bindings.chromeos.network_config.mojom.ManagedStringListSpec.$.structSpec && mojo.internal.bindings.chromeos.network_config.mojom.ManagedStringListSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.chromeos.network_config.mojom.ManagedStringListSpec.$ = {};
mojo.internal.bindings.chromeos.network_config.mojom.ManagedApnPropertiesSpec = mojo.internal.bindings.chromeos.network_config.mojom.ManagedApnPropertiesSpec || { $: {} };
if (mojo.internal.bindings.chromeos.network_config.mojom.ManagedApnPropertiesSpec.$.structSpec && mojo.internal.bindings.chromeos.network_config.mojom.ManagedApnPropertiesSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.chromeos.network_config.mojom.ManagedApnPropertiesSpec.$ = {};
mojo.internal.bindings.chromeos.network_config.mojom.ManagedApnListSpec = mojo.internal.bindings.chromeos.network_config.mojom.ManagedApnListSpec || { $: {} };
if (mojo.internal.bindings.chromeos.network_config.mojom.ManagedApnListSpec.$.structSpec && mojo.internal.bindings.chromeos.network_config.mojom.ManagedApnListSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.chromeos.network_config.mojom.ManagedApnListSpec.$ = {};
mojo.internal.bindings.chromeos.network_config.mojom.ManagedIssuerSubjectPatternSpec = mojo.internal.bindings.chromeos.network_config.mojom.ManagedIssuerSubjectPatternSpec || { $: {} };
if (mojo.internal.bindings.chromeos.network_config.mojom.ManagedIssuerSubjectPatternSpec.$.structSpec && mojo.internal.bindings.chromeos.network_config.mojom.ManagedIssuerSubjectPatternSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.chromeos.network_config.mojom.ManagedIssuerSubjectPatternSpec.$ = {};
mojo.internal.bindings.chromeos.network_config.mojom.ManagedCertificatePatternSpec = mojo.internal.bindings.chromeos.network_config.mojom.ManagedCertificatePatternSpec || { $: {} };
if (mojo.internal.bindings.chromeos.network_config.mojom.ManagedCertificatePatternSpec.$.structSpec && mojo.internal.bindings.chromeos.network_config.mojom.ManagedCertificatePatternSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.chromeos.network_config.mojom.ManagedCertificatePatternSpec.$ = {};
mojo.internal.bindings.chromeos.network_config.mojom.ManagedEAPPropertiesSpec = mojo.internal.bindings.chromeos.network_config.mojom.ManagedEAPPropertiesSpec || { $: {} };
if (mojo.internal.bindings.chromeos.network_config.mojom.ManagedEAPPropertiesSpec.$.structSpec && mojo.internal.bindings.chromeos.network_config.mojom.ManagedEAPPropertiesSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.chromeos.network_config.mojom.ManagedEAPPropertiesSpec.$ = {};
mojo.internal.bindings.chromeos.network_config.mojom.ManagedSubjectAltNameMatchListSpec = mojo.internal.bindings.chromeos.network_config.mojom.ManagedSubjectAltNameMatchListSpec || { $: {} };
if (mojo.internal.bindings.chromeos.network_config.mojom.ManagedSubjectAltNameMatchListSpec.$.structSpec && mojo.internal.bindings.chromeos.network_config.mojom.ManagedSubjectAltNameMatchListSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.chromeos.network_config.mojom.ManagedSubjectAltNameMatchListSpec.$ = {};
mojo.internal.bindings.chromeos.network_config.mojom.ManagedIPConfigPropertiesSpec = mojo.internal.bindings.chromeos.network_config.mojom.ManagedIPConfigPropertiesSpec || { $: {} };
if (mojo.internal.bindings.chromeos.network_config.mojom.ManagedIPConfigPropertiesSpec.$.structSpec && mojo.internal.bindings.chromeos.network_config.mojom.ManagedIPConfigPropertiesSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.chromeos.network_config.mojom.ManagedIPConfigPropertiesSpec.$ = {};
mojo.internal.bindings.chromeos.network_config.mojom.ManagedIPSecPropertiesSpec = mojo.internal.bindings.chromeos.network_config.mojom.ManagedIPSecPropertiesSpec || { $: {} };
if (mojo.internal.bindings.chromeos.network_config.mojom.ManagedIPSecPropertiesSpec.$.structSpec && mojo.internal.bindings.chromeos.network_config.mojom.ManagedIPSecPropertiesSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.chromeos.network_config.mojom.ManagedIPSecPropertiesSpec.$ = {};
mojo.internal.bindings.chromeos.network_config.mojom.ManagedL2TPPropertiesSpec = mojo.internal.bindings.chromeos.network_config.mojom.ManagedL2TPPropertiesSpec || { $: {} };
if (mojo.internal.bindings.chromeos.network_config.mojom.ManagedL2TPPropertiesSpec.$.structSpec && mojo.internal.bindings.chromeos.network_config.mojom.ManagedL2TPPropertiesSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.chromeos.network_config.mojom.ManagedL2TPPropertiesSpec.$ = {};
mojo.internal.bindings.chromeos.network_config.mojom.ManagedProxyLocationSpec = mojo.internal.bindings.chromeos.network_config.mojom.ManagedProxyLocationSpec || { $: {} };
if (mojo.internal.bindings.chromeos.network_config.mojom.ManagedProxyLocationSpec.$.structSpec && mojo.internal.bindings.chromeos.network_config.mojom.ManagedProxyLocationSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.chromeos.network_config.mojom.ManagedProxyLocationSpec.$ = {};
mojo.internal.bindings.chromeos.network_config.mojom.ManagedManualProxySettingsSpec = mojo.internal.bindings.chromeos.network_config.mojom.ManagedManualProxySettingsSpec || { $: {} };
if (mojo.internal.bindings.chromeos.network_config.mojom.ManagedManualProxySettingsSpec.$.structSpec && mojo.internal.bindings.chromeos.network_config.mojom.ManagedManualProxySettingsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.chromeos.network_config.mojom.ManagedManualProxySettingsSpec.$ = {};
mojo.internal.bindings.chromeos.network_config.mojom.ManagedProxySettingsSpec = mojo.internal.bindings.chromeos.network_config.mojom.ManagedProxySettingsSpec || { $: {} };
if (mojo.internal.bindings.chromeos.network_config.mojom.ManagedProxySettingsSpec.$.structSpec && mojo.internal.bindings.chromeos.network_config.mojom.ManagedProxySettingsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.chromeos.network_config.mojom.ManagedProxySettingsSpec.$ = {};
mojo.internal.bindings.chromeos.network_config.mojom.ManagedVerifyX509PropertiesSpec = mojo.internal.bindings.chromeos.network_config.mojom.ManagedVerifyX509PropertiesSpec || { $: {} };
if (mojo.internal.bindings.chromeos.network_config.mojom.ManagedVerifyX509PropertiesSpec.$.structSpec && mojo.internal.bindings.chromeos.network_config.mojom.ManagedVerifyX509PropertiesSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.chromeos.network_config.mojom.ManagedVerifyX509PropertiesSpec.$ = {};
mojo.internal.bindings.chromeos.network_config.mojom.ManagedOpenVPNPropertiesSpec = mojo.internal.bindings.chromeos.network_config.mojom.ManagedOpenVPNPropertiesSpec || { $: {} };
if (mojo.internal.bindings.chromeos.network_config.mojom.ManagedOpenVPNPropertiesSpec.$.structSpec && mojo.internal.bindings.chromeos.network_config.mojom.ManagedOpenVPNPropertiesSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.chromeos.network_config.mojom.ManagedOpenVPNPropertiesSpec.$ = {};
mojo.internal.bindings.chromeos.network_config.mojom.ManagedWireGuardPeerListSpec = mojo.internal.bindings.chromeos.network_config.mojom.ManagedWireGuardPeerListSpec || { $: {} };
if (mojo.internal.bindings.chromeos.network_config.mojom.ManagedWireGuardPeerListSpec.$.structSpec && mojo.internal.bindings.chromeos.network_config.mojom.ManagedWireGuardPeerListSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.chromeos.network_config.mojom.ManagedWireGuardPeerListSpec.$ = {};
mojo.internal.bindings.chromeos.network_config.mojom.ManagedWireGuardPropertiesSpec = mojo.internal.bindings.chromeos.network_config.mojom.ManagedWireGuardPropertiesSpec || { $: {} };
if (mojo.internal.bindings.chromeos.network_config.mojom.ManagedWireGuardPropertiesSpec.$.structSpec && mojo.internal.bindings.chromeos.network_config.mojom.ManagedWireGuardPropertiesSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.chromeos.network_config.mojom.ManagedWireGuardPropertiesSpec.$ = {};
mojo.internal.bindings.chromeos.network_config.mojom.ManagedCellularPropertiesSpec = mojo.internal.bindings.chromeos.network_config.mojom.ManagedCellularPropertiesSpec || { $: {} };
if (mojo.internal.bindings.chromeos.network_config.mojom.ManagedCellularPropertiesSpec.$.structSpec && mojo.internal.bindings.chromeos.network_config.mojom.ManagedCellularPropertiesSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.chromeos.network_config.mojom.ManagedCellularPropertiesSpec.$ = {};
mojo.internal.bindings.chromeos.network_config.mojom.ManagedEthernetPropertiesSpec = mojo.internal.bindings.chromeos.network_config.mojom.ManagedEthernetPropertiesSpec || { $: {} };
if (mojo.internal.bindings.chromeos.network_config.mojom.ManagedEthernetPropertiesSpec.$.structSpec && mojo.internal.bindings.chromeos.network_config.mojom.ManagedEthernetPropertiesSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.chromeos.network_config.mojom.ManagedEthernetPropertiesSpec.$ = {};
mojo.internal.bindings.chromeos.network_config.mojom.ManagedVPNPropertiesSpec = mojo.internal.bindings.chromeos.network_config.mojom.ManagedVPNPropertiesSpec || { $: {} };
if (mojo.internal.bindings.chromeos.network_config.mojom.ManagedVPNPropertiesSpec.$.structSpec && mojo.internal.bindings.chromeos.network_config.mojom.ManagedVPNPropertiesSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.chromeos.network_config.mojom.ManagedVPNPropertiesSpec.$ = {};
mojo.internal.bindings.chromeos.network_config.mojom.ManagedWiFiPropertiesSpec = mojo.internal.bindings.chromeos.network_config.mojom.ManagedWiFiPropertiesSpec || { $: {} };
if (mojo.internal.bindings.chromeos.network_config.mojom.ManagedWiFiPropertiesSpec.$.structSpec && mojo.internal.bindings.chromeos.network_config.mojom.ManagedWiFiPropertiesSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.chromeos.network_config.mojom.ManagedWiFiPropertiesSpec.$ = {};
mojo.internal.bindings.chromeos.network_config.mojom.UInt32ValueSpec = mojo.internal.bindings.chromeos.network_config.mojom.UInt32ValueSpec || { $: {} };
if (mojo.internal.bindings.chromeos.network_config.mojom.UInt32ValueSpec.$.structSpec && mojo.internal.bindings.chromeos.network_config.mojom.UInt32ValueSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.chromeos.network_config.mojom.UInt32ValueSpec.$ = {};
mojo.internal.bindings.chromeos.network_config.mojom.TrafficCounterPropertiesSpec = mojo.internal.bindings.chromeos.network_config.mojom.TrafficCounterPropertiesSpec || { $: {} };
if (mojo.internal.bindings.chromeos.network_config.mojom.TrafficCounterPropertiesSpec.$.structSpec && mojo.internal.bindings.chromeos.network_config.mojom.TrafficCounterPropertiesSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.chromeos.network_config.mojom.TrafficCounterPropertiesSpec.$ = {};
mojo.internal.bindings.chromeos.network_config.mojom.ManagedPropertiesSpec = mojo.internal.bindings.chromeos.network_config.mojom.ManagedPropertiesSpec || { $: {} };
if (mojo.internal.bindings.chromeos.network_config.mojom.ManagedPropertiesSpec.$.structSpec && mojo.internal.bindings.chromeos.network_config.mojom.ManagedPropertiesSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.chromeos.network_config.mojom.ManagedPropertiesSpec.$ = {};
mojo.internal.bindings.chromeos.network_config.mojom.AutoConnectConfigSpec = mojo.internal.bindings.chromeos.network_config.mojom.AutoConnectConfigSpec || { $: {} };
if (mojo.internal.bindings.chromeos.network_config.mojom.AutoConnectConfigSpec.$.structSpec && mojo.internal.bindings.chromeos.network_config.mojom.AutoConnectConfigSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.chromeos.network_config.mojom.AutoConnectConfigSpec.$ = {};
mojo.internal.bindings.chromeos.network_config.mojom.MeteredConfigSpec = mojo.internal.bindings.chromeos.network_config.mojom.MeteredConfigSpec || { $: {} };
if (mojo.internal.bindings.chromeos.network_config.mojom.MeteredConfigSpec.$.structSpec && mojo.internal.bindings.chromeos.network_config.mojom.MeteredConfigSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.chromeos.network_config.mojom.MeteredConfigSpec.$ = {};
mojo.internal.bindings.chromeos.network_config.mojom.PriorityConfigSpec = mojo.internal.bindings.chromeos.network_config.mojom.PriorityConfigSpec || { $: {} };
if (mojo.internal.bindings.chromeos.network_config.mojom.PriorityConfigSpec.$.structSpec && mojo.internal.bindings.chromeos.network_config.mojom.PriorityConfigSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.chromeos.network_config.mojom.PriorityConfigSpec.$ = {};
mojo.internal.bindings.chromeos.network_config.mojom.VpnTypeConfigSpec = mojo.internal.bindings.chromeos.network_config.mojom.VpnTypeConfigSpec || { $: {} };
if (mojo.internal.bindings.chromeos.network_config.mojom.VpnTypeConfigSpec.$.structSpec && mojo.internal.bindings.chromeos.network_config.mojom.VpnTypeConfigSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.chromeos.network_config.mojom.VpnTypeConfigSpec.$ = {};
mojo.internal.bindings.chromeos.network_config.mojom.ProxyLocationSpec = mojo.internal.bindings.chromeos.network_config.mojom.ProxyLocationSpec || { $: {} };
if (mojo.internal.bindings.chromeos.network_config.mojom.ProxyLocationSpec.$.structSpec && mojo.internal.bindings.chromeos.network_config.mojom.ProxyLocationSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.chromeos.network_config.mojom.ProxyLocationSpec.$ = {};
mojo.internal.bindings.chromeos.network_config.mojom.ManualProxySettingsSpec = mojo.internal.bindings.chromeos.network_config.mojom.ManualProxySettingsSpec || { $: {} };
if (mojo.internal.bindings.chromeos.network_config.mojom.ManualProxySettingsSpec.$.structSpec && mojo.internal.bindings.chromeos.network_config.mojom.ManualProxySettingsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.chromeos.network_config.mojom.ManualProxySettingsSpec.$ = {};
mojo.internal.bindings.chromeos.network_config.mojom.ProxySettingsSpec = mojo.internal.bindings.chromeos.network_config.mojom.ProxySettingsSpec || { $: {} };
if (mojo.internal.bindings.chromeos.network_config.mojom.ProxySettingsSpec.$.structSpec && mojo.internal.bindings.chromeos.network_config.mojom.ProxySettingsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.chromeos.network_config.mojom.ProxySettingsSpec.$ = {};
mojo.internal.bindings.chromeos.network_config.mojom.EAPConfigPropertiesSpec = mojo.internal.bindings.chromeos.network_config.mojom.EAPConfigPropertiesSpec || { $: {} };
if (mojo.internal.bindings.chromeos.network_config.mojom.EAPConfigPropertiesSpec.$.structSpec && mojo.internal.bindings.chromeos.network_config.mojom.EAPConfigPropertiesSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.chromeos.network_config.mojom.EAPConfigPropertiesSpec.$ = {};
mojo.internal.bindings.chromeos.network_config.mojom.SubjectAltNameSpec = mojo.internal.bindings.chromeos.network_config.mojom.SubjectAltNameSpec || { $: {} };
if (mojo.internal.bindings.chromeos.network_config.mojom.SubjectAltNameSpec.$.structSpec && mojo.internal.bindings.chromeos.network_config.mojom.SubjectAltNameSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.chromeos.network_config.mojom.SubjectAltNameSpec.$ = {};
mojo.internal.bindings.chromeos.network_config.mojom.IPSecConfigPropertiesSpec = mojo.internal.bindings.chromeos.network_config.mojom.IPSecConfigPropertiesSpec || { $: {} };
if (mojo.internal.bindings.chromeos.network_config.mojom.IPSecConfigPropertiesSpec.$.structSpec && mojo.internal.bindings.chromeos.network_config.mojom.IPSecConfigPropertiesSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.chromeos.network_config.mojom.IPSecConfigPropertiesSpec.$ = {};
mojo.internal.bindings.chromeos.network_config.mojom.L2TPConfigPropertiesSpec = mojo.internal.bindings.chromeos.network_config.mojom.L2TPConfigPropertiesSpec || { $: {} };
if (mojo.internal.bindings.chromeos.network_config.mojom.L2TPConfigPropertiesSpec.$.structSpec && mojo.internal.bindings.chromeos.network_config.mojom.L2TPConfigPropertiesSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.chromeos.network_config.mojom.L2TPConfigPropertiesSpec.$ = {};
mojo.internal.bindings.chromeos.network_config.mojom.OpenVPNConfigPropertiesSpec = mojo.internal.bindings.chromeos.network_config.mojom.OpenVPNConfigPropertiesSpec || { $: {} };
if (mojo.internal.bindings.chromeos.network_config.mojom.OpenVPNConfigPropertiesSpec.$.structSpec && mojo.internal.bindings.chromeos.network_config.mojom.OpenVPNConfigPropertiesSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.chromeos.network_config.mojom.OpenVPNConfigPropertiesSpec.$ = {};
mojo.internal.bindings.chromeos.network_config.mojom.WireGuardConfigPropertiesSpec = mojo.internal.bindings.chromeos.network_config.mojom.WireGuardConfigPropertiesSpec || { $: {} };
if (mojo.internal.bindings.chromeos.network_config.mojom.WireGuardConfigPropertiesSpec.$.structSpec && mojo.internal.bindings.chromeos.network_config.mojom.WireGuardConfigPropertiesSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.chromeos.network_config.mojom.WireGuardConfigPropertiesSpec.$ = {};
mojo.internal.bindings.chromeos.network_config.mojom.TextMessagesAllowStateSpec = mojo.internal.bindings.chromeos.network_config.mojom.TextMessagesAllowStateSpec || { $: {} };
if (mojo.internal.bindings.chromeos.network_config.mojom.TextMessagesAllowStateSpec.$.structSpec && mojo.internal.bindings.chromeos.network_config.mojom.TextMessagesAllowStateSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.chromeos.network_config.mojom.TextMessagesAllowStateSpec.$ = {};
mojo.internal.bindings.chromeos.network_config.mojom.CellularConfigPropertiesSpec = mojo.internal.bindings.chromeos.network_config.mojom.CellularConfigPropertiesSpec || { $: {} };
if (mojo.internal.bindings.chromeos.network_config.mojom.CellularConfigPropertiesSpec.$.structSpec && mojo.internal.bindings.chromeos.network_config.mojom.CellularConfigPropertiesSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.chromeos.network_config.mojom.CellularConfigPropertiesSpec.$ = {};
mojo.internal.bindings.chromeos.network_config.mojom.EthernetConfigPropertiesSpec = mojo.internal.bindings.chromeos.network_config.mojom.EthernetConfigPropertiesSpec || { $: {} };
if (mojo.internal.bindings.chromeos.network_config.mojom.EthernetConfigPropertiesSpec.$.structSpec && mojo.internal.bindings.chromeos.network_config.mojom.EthernetConfigPropertiesSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.chromeos.network_config.mojom.EthernetConfigPropertiesSpec.$ = {};
mojo.internal.bindings.chromeos.network_config.mojom.VPNConfigPropertiesSpec = mojo.internal.bindings.chromeos.network_config.mojom.VPNConfigPropertiesSpec || { $: {} };
if (mojo.internal.bindings.chromeos.network_config.mojom.VPNConfigPropertiesSpec.$.structSpec && mojo.internal.bindings.chromeos.network_config.mojom.VPNConfigPropertiesSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.chromeos.network_config.mojom.VPNConfigPropertiesSpec.$ = {};
mojo.internal.bindings.chromeos.network_config.mojom.WiFiConfigPropertiesSpec = mojo.internal.bindings.chromeos.network_config.mojom.WiFiConfigPropertiesSpec || { $: {} };
if (mojo.internal.bindings.chromeos.network_config.mojom.WiFiConfigPropertiesSpec.$.structSpec && mojo.internal.bindings.chromeos.network_config.mojom.WiFiConfigPropertiesSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.chromeos.network_config.mojom.WiFiConfigPropertiesSpec.$ = {};
mojo.internal.bindings.chromeos.network_config.mojom.ConfigPropertiesSpec = mojo.internal.bindings.chromeos.network_config.mojom.ConfigPropertiesSpec || { $: {} };
if (mojo.internal.bindings.chromeos.network_config.mojom.ConfigPropertiesSpec.$.structSpec && mojo.internal.bindings.chromeos.network_config.mojom.ConfigPropertiesSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.chromeos.network_config.mojom.ConfigPropertiesSpec.$ = {};
mojo.internal.bindings.chromeos.network_config.mojom.CellularSimStateSpec = mojo.internal.bindings.chromeos.network_config.mojom.CellularSimStateSpec || { $: {} };
if (mojo.internal.bindings.chromeos.network_config.mojom.CellularSimStateSpec.$.structSpec && mojo.internal.bindings.chromeos.network_config.mojom.CellularSimStateSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.chromeos.network_config.mojom.CellularSimStateSpec.$ = {};
mojo.internal.bindings.chromeos.network_config.mojom.GlobalPolicySpec = mojo.internal.bindings.chromeos.network_config.mojom.GlobalPolicySpec || { $: {} };
if (mojo.internal.bindings.chromeos.network_config.mojom.GlobalPolicySpec.$.structSpec && mojo.internal.bindings.chromeos.network_config.mojom.GlobalPolicySpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.chromeos.network_config.mojom.GlobalPolicySpec.$ = {};
mojo.internal.bindings.chromeos.network_config.mojom.VpnProviderSpec = mojo.internal.bindings.chromeos.network_config.mojom.VpnProviderSpec || { $: {} };
if (mojo.internal.bindings.chromeos.network_config.mojom.VpnProviderSpec.$.structSpec && mojo.internal.bindings.chromeos.network_config.mojom.VpnProviderSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.chromeos.network_config.mojom.VpnProviderSpec.$ = {};
mojo.internal.bindings.chromeos.network_config.mojom.NetworkCertificateSpec = mojo.internal.bindings.chromeos.network_config.mojom.NetworkCertificateSpec || { $: {} };
if (mojo.internal.bindings.chromeos.network_config.mojom.NetworkCertificateSpec.$.structSpec && mojo.internal.bindings.chromeos.network_config.mojom.NetworkCertificateSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.chromeos.network_config.mojom.NetworkCertificateSpec.$ = {};
mojo.internal.bindings.chromeos.network_config.mojom.AlwaysOnVpnPropertiesSpec = mojo.internal.bindings.chromeos.network_config.mojom.AlwaysOnVpnPropertiesSpec || { $: {} };
if (mojo.internal.bindings.chromeos.network_config.mojom.AlwaysOnVpnPropertiesSpec.$.structSpec && mojo.internal.bindings.chromeos.network_config.mojom.AlwaysOnVpnPropertiesSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.chromeos.network_config.mojom.AlwaysOnVpnPropertiesSpec.$ = {};
mojo.internal.bindings.chromeos.network_config.mojom.TrafficCounterSpec = mojo.internal.bindings.chromeos.network_config.mojom.TrafficCounterSpec || { $: {} };
if (mojo.internal.bindings.chromeos.network_config.mojom.TrafficCounterSpec.$.structSpec && mojo.internal.bindings.chromeos.network_config.mojom.TrafficCounterSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.chromeos.network_config.mojom.TrafficCounterSpec.$ = {};
mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig = mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig || {};
mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfigSpec = mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfigSpec || { $ : {} };
if (mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfigSpec.$.structSpec && mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfigSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfigSpec.$ = {};
mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig.$interfaceName = 'chromeos.network_config.mojom.CrosNetworkConfig';
mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_AddObserver_ParamsSpec = mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_AddObserver_ParamsSpec || { $: {} };
if (mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_AddObserver_ParamsSpec.$.structSpec && mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_AddObserver_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_AddObserver_ParamsSpec.$ = {};
mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_GetNetworkState_ParamsSpec = mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_GetNetworkState_ParamsSpec || { $: {} };
if (mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_GetNetworkState_ParamsSpec.$.structSpec && mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_GetNetworkState_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_GetNetworkState_ParamsSpec.$ = {};
mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_GetNetworkState_ResponseParamsSpec = mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_GetNetworkState_ResponseParamsSpec || { $: {} };
if (mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_GetNetworkState_ResponseParamsSpec.$.structSpec && mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_GetNetworkState_ResponseParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_GetNetworkState_ResponseParamsSpec.$ = {};
mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_GetNetworkStateList_ParamsSpec = mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_GetNetworkStateList_ParamsSpec || { $: {} };
if (mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_GetNetworkStateList_ParamsSpec.$.structSpec && mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_GetNetworkStateList_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_GetNetworkStateList_ParamsSpec.$ = {};
mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_GetNetworkStateList_ResponseParamsSpec = mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_GetNetworkStateList_ResponseParamsSpec || { $: {} };
if (mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_GetNetworkStateList_ResponseParamsSpec.$.structSpec && mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_GetNetworkStateList_ResponseParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_GetNetworkStateList_ResponseParamsSpec.$ = {};
mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_GetDeviceStateList_ParamsSpec = mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_GetDeviceStateList_ParamsSpec || { $: {} };
if (mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_GetDeviceStateList_ParamsSpec.$.structSpec && mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_GetDeviceStateList_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_GetDeviceStateList_ParamsSpec.$ = {};
mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_GetDeviceStateList_ResponseParamsSpec = mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_GetDeviceStateList_ResponseParamsSpec || { $: {} };
if (mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_GetDeviceStateList_ResponseParamsSpec.$.structSpec && mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_GetDeviceStateList_ResponseParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_GetDeviceStateList_ResponseParamsSpec.$ = {};
mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_GetManagedProperties_ParamsSpec = mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_GetManagedProperties_ParamsSpec || { $: {} };
if (mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_GetManagedProperties_ParamsSpec.$.structSpec && mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_GetManagedProperties_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_GetManagedProperties_ParamsSpec.$ = {};
mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_GetManagedProperties_ResponseParamsSpec = mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_GetManagedProperties_ResponseParamsSpec || { $: {} };
if (mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_GetManagedProperties_ResponseParamsSpec.$.structSpec && mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_GetManagedProperties_ResponseParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_GetManagedProperties_ResponseParamsSpec.$ = {};
mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_SetProperties_ParamsSpec = mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_SetProperties_ParamsSpec || { $: {} };
if (mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_SetProperties_ParamsSpec.$.structSpec && mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_SetProperties_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_SetProperties_ParamsSpec.$ = {};
mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_SetProperties_ResponseParamsSpec = mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_SetProperties_ResponseParamsSpec || { $: {} };
if (mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_SetProperties_ResponseParamsSpec.$.structSpec && mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_SetProperties_ResponseParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_SetProperties_ResponseParamsSpec.$ = {};
mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_ConfigureNetwork_ParamsSpec = mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_ConfigureNetwork_ParamsSpec || { $: {} };
if (mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_ConfigureNetwork_ParamsSpec.$.structSpec && mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_ConfigureNetwork_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_ConfigureNetwork_ParamsSpec.$ = {};
mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_ConfigureNetwork_ResponseParamsSpec = mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_ConfigureNetwork_ResponseParamsSpec || { $: {} };
if (mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_ConfigureNetwork_ResponseParamsSpec.$.structSpec && mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_ConfigureNetwork_ResponseParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_ConfigureNetwork_ResponseParamsSpec.$ = {};
mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_ForgetNetwork_ParamsSpec = mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_ForgetNetwork_ParamsSpec || { $: {} };
if (mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_ForgetNetwork_ParamsSpec.$.structSpec && mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_ForgetNetwork_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_ForgetNetwork_ParamsSpec.$ = {};
mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_ForgetNetwork_ResponseParamsSpec = mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_ForgetNetwork_ResponseParamsSpec || { $: {} };
if (mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_ForgetNetwork_ResponseParamsSpec.$.structSpec && mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_ForgetNetwork_ResponseParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_ForgetNetwork_ResponseParamsSpec.$ = {};
mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_SetNetworkTypeEnabledState_ParamsSpec = mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_SetNetworkTypeEnabledState_ParamsSpec || { $: {} };
if (mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_SetNetworkTypeEnabledState_ParamsSpec.$.structSpec && mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_SetNetworkTypeEnabledState_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_SetNetworkTypeEnabledState_ParamsSpec.$ = {};
mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_SetNetworkTypeEnabledState_ResponseParamsSpec = mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_SetNetworkTypeEnabledState_ResponseParamsSpec || { $: {} };
if (mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_SetNetworkTypeEnabledState_ResponseParamsSpec.$.structSpec && mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_SetNetworkTypeEnabledState_ResponseParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_SetNetworkTypeEnabledState_ResponseParamsSpec.$ = {};
mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_SetCellularSimState_ParamsSpec = mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_SetCellularSimState_ParamsSpec || { $: {} };
if (mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_SetCellularSimState_ParamsSpec.$.structSpec && mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_SetCellularSimState_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_SetCellularSimState_ParamsSpec.$ = {};
mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_SetCellularSimState_ResponseParamsSpec = mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_SetCellularSimState_ResponseParamsSpec || { $: {} };
if (mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_SetCellularSimState_ResponseParamsSpec.$.structSpec && mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_SetCellularSimState_ResponseParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_SetCellularSimState_ResponseParamsSpec.$ = {};
mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_SelectCellularMobileNetwork_ParamsSpec = mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_SelectCellularMobileNetwork_ParamsSpec || { $: {} };
if (mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_SelectCellularMobileNetwork_ParamsSpec.$.structSpec && mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_SelectCellularMobileNetwork_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_SelectCellularMobileNetwork_ParamsSpec.$ = {};
mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_SelectCellularMobileNetwork_ResponseParamsSpec = mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_SelectCellularMobileNetwork_ResponseParamsSpec || { $: {} };
if (mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_SelectCellularMobileNetwork_ResponseParamsSpec.$.structSpec && mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_SelectCellularMobileNetwork_ResponseParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_SelectCellularMobileNetwork_ResponseParamsSpec.$ = {};
mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_RequestNetworkScan_ParamsSpec = mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_RequestNetworkScan_ParamsSpec || { $: {} };
if (mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_RequestNetworkScan_ParamsSpec.$.structSpec && mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_RequestNetworkScan_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_RequestNetworkScan_ParamsSpec.$ = {};
mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_GetGlobalPolicy_ParamsSpec = mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_GetGlobalPolicy_ParamsSpec || { $: {} };
if (mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_GetGlobalPolicy_ParamsSpec.$.structSpec && mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_GetGlobalPolicy_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_GetGlobalPolicy_ParamsSpec.$ = {};
mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_GetGlobalPolicy_ResponseParamsSpec = mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_GetGlobalPolicy_ResponseParamsSpec || { $: {} };
if (mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_GetGlobalPolicy_ResponseParamsSpec.$.structSpec && mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_GetGlobalPolicy_ResponseParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_GetGlobalPolicy_ResponseParamsSpec.$ = {};
mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_StartConnect_ParamsSpec = mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_StartConnect_ParamsSpec || { $: {} };
if (mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_StartConnect_ParamsSpec.$.structSpec && mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_StartConnect_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_StartConnect_ParamsSpec.$ = {};
mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_StartConnect_ResponseParamsSpec = mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_StartConnect_ResponseParamsSpec || { $: {} };
if (mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_StartConnect_ResponseParamsSpec.$.structSpec && mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_StartConnect_ResponseParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_StartConnect_ResponseParamsSpec.$ = {};
mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_StartDisconnect_ParamsSpec = mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_StartDisconnect_ParamsSpec || { $: {} };
if (mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_StartDisconnect_ParamsSpec.$.structSpec && mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_StartDisconnect_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_StartDisconnect_ParamsSpec.$ = {};
mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_StartDisconnect_ResponseParamsSpec = mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_StartDisconnect_ResponseParamsSpec || { $: {} };
if (mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_StartDisconnect_ResponseParamsSpec.$.structSpec && mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_StartDisconnect_ResponseParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_StartDisconnect_ResponseParamsSpec.$ = {};
mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_SetVpnProviders_ParamsSpec = mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_SetVpnProviders_ParamsSpec || { $: {} };
if (mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_SetVpnProviders_ParamsSpec.$.structSpec && mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_SetVpnProviders_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_SetVpnProviders_ParamsSpec.$ = {};
mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_GetVpnProviders_ParamsSpec = mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_GetVpnProviders_ParamsSpec || { $: {} };
if (mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_GetVpnProviders_ParamsSpec.$.structSpec && mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_GetVpnProviders_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_GetVpnProviders_ParamsSpec.$ = {};
mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_GetVpnProviders_ResponseParamsSpec = mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_GetVpnProviders_ResponseParamsSpec || { $: {} };
if (mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_GetVpnProviders_ResponseParamsSpec.$.structSpec && mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_GetVpnProviders_ResponseParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_GetVpnProviders_ResponseParamsSpec.$ = {};
mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_GetNetworkCertificates_ParamsSpec = mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_GetNetworkCertificates_ParamsSpec || { $: {} };
if (mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_GetNetworkCertificates_ParamsSpec.$.structSpec && mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_GetNetworkCertificates_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_GetNetworkCertificates_ParamsSpec.$ = {};
mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_GetNetworkCertificates_ResponseParamsSpec = mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_GetNetworkCertificates_ResponseParamsSpec || { $: {} };
if (mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_GetNetworkCertificates_ResponseParamsSpec.$.structSpec && mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_GetNetworkCertificates_ResponseParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_GetNetworkCertificates_ResponseParamsSpec.$ = {};
mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_GetAlwaysOnVpn_ParamsSpec = mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_GetAlwaysOnVpn_ParamsSpec || { $: {} };
if (mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_GetAlwaysOnVpn_ParamsSpec.$.structSpec && mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_GetAlwaysOnVpn_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_GetAlwaysOnVpn_ParamsSpec.$ = {};
mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_GetAlwaysOnVpn_ResponseParamsSpec = mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_GetAlwaysOnVpn_ResponseParamsSpec || { $: {} };
if (mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_GetAlwaysOnVpn_ResponseParamsSpec.$.structSpec && mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_GetAlwaysOnVpn_ResponseParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_GetAlwaysOnVpn_ResponseParamsSpec.$ = {};
mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_SetAlwaysOnVpn_ParamsSpec = mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_SetAlwaysOnVpn_ParamsSpec || { $: {} };
if (mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_SetAlwaysOnVpn_ParamsSpec.$.structSpec && mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_SetAlwaysOnVpn_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_SetAlwaysOnVpn_ParamsSpec.$ = {};
mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_GetSupportedVpnTypes_ParamsSpec = mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_GetSupportedVpnTypes_ParamsSpec || { $: {} };
if (mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_GetSupportedVpnTypes_ParamsSpec.$.structSpec && mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_GetSupportedVpnTypes_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_GetSupportedVpnTypes_ParamsSpec.$ = {};
mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_GetSupportedVpnTypes_ResponseParamsSpec = mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_GetSupportedVpnTypes_ResponseParamsSpec || { $: {} };
if (mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_GetSupportedVpnTypes_ResponseParamsSpec.$.structSpec && mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_GetSupportedVpnTypes_ResponseParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_GetSupportedVpnTypes_ResponseParamsSpec.$ = {};
mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_RequestTrafficCounters_ParamsSpec = mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_RequestTrafficCounters_ParamsSpec || { $: {} };
if (mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_RequestTrafficCounters_ParamsSpec.$.structSpec && mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_RequestTrafficCounters_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_RequestTrafficCounters_ParamsSpec.$ = {};
mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_RequestTrafficCounters_ResponseParamsSpec = mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_RequestTrafficCounters_ResponseParamsSpec || { $: {} };
if (mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_RequestTrafficCounters_ResponseParamsSpec.$.structSpec && mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_RequestTrafficCounters_ResponseParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_RequestTrafficCounters_ResponseParamsSpec.$ = {};
mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_ResetTrafficCounters_ParamsSpec = mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_ResetTrafficCounters_ParamsSpec || { $: {} };
if (mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_ResetTrafficCounters_ParamsSpec.$.structSpec && mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_ResetTrafficCounters_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_ResetTrafficCounters_ParamsSpec.$ = {};
mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_SetTrafficCountersResetDay_ParamsSpec = mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_SetTrafficCountersResetDay_ParamsSpec || { $: {} };
if (mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_SetTrafficCountersResetDay_ParamsSpec.$.structSpec && mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_SetTrafficCountersResetDay_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_SetTrafficCountersResetDay_ParamsSpec.$ = {};
mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_SetTrafficCountersResetDay_ResponseParamsSpec = mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_SetTrafficCountersResetDay_ResponseParamsSpec || { $: {} };
if (mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_SetTrafficCountersResetDay_ResponseParamsSpec.$.structSpec && mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_SetTrafficCountersResetDay_ResponseParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_SetTrafficCountersResetDay_ResponseParamsSpec.$ = {};
mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_CreateCustomApn_ParamsSpec = mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_CreateCustomApn_ParamsSpec || { $: {} };
if (mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_CreateCustomApn_ParamsSpec.$.structSpec && mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_CreateCustomApn_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_CreateCustomApn_ParamsSpec.$ = {};
mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_CreateCustomApn_ResponseParamsSpec = mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_CreateCustomApn_ResponseParamsSpec || { $: {} };
if (mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_CreateCustomApn_ResponseParamsSpec.$.structSpec && mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_CreateCustomApn_ResponseParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_CreateCustomApn_ResponseParamsSpec.$ = {};
mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_CreateExclusivelyEnabledCustomApn_ParamsSpec = mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_CreateExclusivelyEnabledCustomApn_ParamsSpec || { $: {} };
if (mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_CreateExclusivelyEnabledCustomApn_ParamsSpec.$.structSpec && mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_CreateExclusivelyEnabledCustomApn_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_CreateExclusivelyEnabledCustomApn_ParamsSpec.$ = {};
mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_CreateExclusivelyEnabledCustomApn_ResponseParamsSpec = mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_CreateExclusivelyEnabledCustomApn_ResponseParamsSpec || { $: {} };
if (mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_CreateExclusivelyEnabledCustomApn_ResponseParamsSpec.$.structSpec && mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_CreateExclusivelyEnabledCustomApn_ResponseParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_CreateExclusivelyEnabledCustomApn_ResponseParamsSpec.$ = {};
mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_RemoveCustomApn_ParamsSpec = mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_RemoveCustomApn_ParamsSpec || { $: {} };
if (mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_RemoveCustomApn_ParamsSpec.$.structSpec && mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_RemoveCustomApn_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_RemoveCustomApn_ParamsSpec.$ = {};
mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_ModifyCustomApn_ParamsSpec = mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_ModifyCustomApn_ParamsSpec || { $: {} };
if (mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_ModifyCustomApn_ParamsSpec.$.structSpec && mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_ModifyCustomApn_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_ModifyCustomApn_ParamsSpec.$ = {};
mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfigObserver = mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfigObserver || {};
mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfigObserverSpec = mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfigObserverSpec || { $ : {} };
if (mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfigObserverSpec.$.structSpec && mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfigObserverSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfigObserverSpec.$ = {};
mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfigObserver.$interfaceName = 'chromeos.network_config.mojom.CrosNetworkConfigObserver';
mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfigObserver_OnActiveNetworksChanged_ParamsSpec = mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfigObserver_OnActiveNetworksChanged_ParamsSpec || { $: {} };
if (mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfigObserver_OnActiveNetworksChanged_ParamsSpec.$.structSpec && mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfigObserver_OnActiveNetworksChanged_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfigObserver_OnActiveNetworksChanged_ParamsSpec.$ = {};
mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfigObserver_OnNetworkStateChanged_ParamsSpec = mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfigObserver_OnNetworkStateChanged_ParamsSpec || { $: {} };
if (mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfigObserver_OnNetworkStateChanged_ParamsSpec.$.structSpec && mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfigObserver_OnNetworkStateChanged_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfigObserver_OnNetworkStateChanged_ParamsSpec.$ = {};
mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfigObserver_OnNetworkStateListChanged_ParamsSpec = mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfigObserver_OnNetworkStateListChanged_ParamsSpec || { $: {} };
if (mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfigObserver_OnNetworkStateListChanged_ParamsSpec.$.structSpec && mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfigObserver_OnNetworkStateListChanged_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfigObserver_OnNetworkStateListChanged_ParamsSpec.$ = {};
mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfigObserver_OnDeviceStateListChanged_ParamsSpec = mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfigObserver_OnDeviceStateListChanged_ParamsSpec || { $: {} };
if (mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfigObserver_OnDeviceStateListChanged_ParamsSpec.$.structSpec && mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfigObserver_OnDeviceStateListChanged_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfigObserver_OnDeviceStateListChanged_ParamsSpec.$ = {};
mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfigObserver_OnVpnProvidersChanged_ParamsSpec = mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfigObserver_OnVpnProvidersChanged_ParamsSpec || { $: {} };
if (mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfigObserver_OnVpnProvidersChanged_ParamsSpec.$.structSpec && mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfigObserver_OnVpnProvidersChanged_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfigObserver_OnVpnProvidersChanged_ParamsSpec.$ = {};
mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfigObserver_OnNetworkCertificatesChanged_ParamsSpec = mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfigObserver_OnNetworkCertificatesChanged_ParamsSpec || { $: {} };
if (mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfigObserver_OnNetworkCertificatesChanged_ParamsSpec.$.structSpec && mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfigObserver_OnNetworkCertificatesChanged_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfigObserver_OnNetworkCertificatesChanged_ParamsSpec.$ = {};
mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfigObserver_OnPoliciesApplied_ParamsSpec = mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfigObserver_OnPoliciesApplied_ParamsSpec || { $: {} };
if (mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfigObserver_OnPoliciesApplied_ParamsSpec.$.structSpec && mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfigObserver_OnPoliciesApplied_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfigObserver_OnPoliciesApplied_ParamsSpec.$ = {};

// External type stubs (from imports)
mojo.internal.bindings.chromeos = mojo.internal.bindings.chromeos || {};
mojo.internal.bindings.chromeos.network_config = mojo.internal.bindings.chromeos.network_config || {};
mojo.internal.bindings.chromeos.network_config.mojom = mojo.internal.bindings.chromeos.network_config.mojom || {};
mojo.internal.bindings.chromeos.network_config.mojom.ConnectionStateTypeSpec = mojo.internal.bindings.chromeos.network_config.mojom.ConnectionStateTypeSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.chromeos = mojo.internal.bindings.chromeos || {};
mojo.internal.bindings.chromeos.network_config = mojo.internal.bindings.chromeos.network_config || {};
mojo.internal.bindings.chromeos.network_config.mojom = mojo.internal.bindings.chromeos.network_config.mojom || {};
mojo.internal.bindings.chromeos.network_config.mojom.DeviceStateTypeSpec = mojo.internal.bindings.chromeos.network_config.mojom.DeviceStateTypeSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.chromeos = mojo.internal.bindings.chromeos || {};
mojo.internal.bindings.chromeos.network_config = mojo.internal.bindings.chromeos.network_config || {};
mojo.internal.bindings.chromeos.network_config.mojom = mojo.internal.bindings.chromeos.network_config.mojom || {};
mojo.internal.bindings.chromeos.network_config.mojom.IPConfigTypeSpec = mojo.internal.bindings.chromeos.network_config.mojom.IPConfigTypeSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.chromeos = mojo.internal.bindings.chromeos || {};
mojo.internal.bindings.chromeos.network_config = mojo.internal.bindings.chromeos.network_config || {};
mojo.internal.bindings.chromeos.network_config.mojom = mojo.internal.bindings.chromeos.network_config.mojom || {};
mojo.internal.bindings.chromeos.network_config.mojom.NetworkTypeSpec = mojo.internal.bindings.chromeos.network_config.mojom.NetworkTypeSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.chromeos = mojo.internal.bindings.chromeos || {};
mojo.internal.bindings.chromeos.network_config = mojo.internal.bindings.chromeos.network_config || {};
mojo.internal.bindings.chromeos.network_config.mojom = mojo.internal.bindings.chromeos.network_config.mojom || {};
mojo.internal.bindings.chromeos.network_config.mojom.NetworkTypeConfigPropertiesSpec = mojo.internal.bindings.chromeos.network_config.mojom.NetworkTypeConfigPropertiesSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.chromeos = mojo.internal.bindings.chromeos || {};
mojo.internal.bindings.chromeos.network_config = mojo.internal.bindings.chromeos.network_config || {};
mojo.internal.bindings.chromeos.network_config.mojom = mojo.internal.bindings.chromeos.network_config.mojom || {};
mojo.internal.bindings.chromeos.network_config.mojom.NetworkTypeManagedPropertiesSpec = mojo.internal.bindings.chromeos.network_config.mojom.NetworkTypeManagedPropertiesSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.chromeos = mojo.internal.bindings.chromeos || {};
mojo.internal.bindings.chromeos.network_config = mojo.internal.bindings.chromeos.network_config || {};
mojo.internal.bindings.chromeos.network_config.mojom = mojo.internal.bindings.chromeos.network_config.mojom || {};
mojo.internal.bindings.chromeos.network_config.mojom.NetworkTypeStatePropertiesSpec = mojo.internal.bindings.chromeos.network_config.mojom.NetworkTypeStatePropertiesSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.chromeos = mojo.internal.bindings.chromeos || {};
mojo.internal.bindings.chromeos.network_config = mojo.internal.bindings.chromeos.network_config || {};
mojo.internal.bindings.chromeos.network_config.mojom = mojo.internal.bindings.chromeos.network_config.mojom || {};
mojo.internal.bindings.chromeos.network_config.mojom.OncSourceSpec = mojo.internal.bindings.chromeos.network_config.mojom.OncSourceSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.chromeos = mojo.internal.bindings.chromeos || {};
mojo.internal.bindings.chromeos.network_config = mojo.internal.bindings.chromeos.network_config || {};
mojo.internal.bindings.chromeos.network_config.mojom = mojo.internal.bindings.chromeos.network_config.mojom || {};
mojo.internal.bindings.chromeos.network_config.mojom.PolicySourceSpec = mojo.internal.bindings.chromeos.network_config.mojom.PolicySourceSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.chromeos = mojo.internal.bindings.chromeos || {};
mojo.internal.bindings.chromeos.network_config = mojo.internal.bindings.chromeos.network_config || {};
mojo.internal.bindings.chromeos.network_config.mojom = mojo.internal.bindings.chromeos.network_config.mojom || {};
mojo.internal.bindings.chromeos.network_config.mojom.PortalStateSpec = mojo.internal.bindings.chromeos.network_config.mojom.PortalStateSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.mojo_base = mojo.internal.bindings.mojo_base || {};
mojo.internal.bindings.mojo_base.mojom = mojo.internal.bindings.mojo_base.mojom || {};
mojo.internal.bindings.mojo_base.mojom.TimeSpec = mojo.internal.bindings.mojo_base.mojom.TimeSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.network = mojo.internal.bindings.network || {};
mojo.internal.bindings.network.mojom = mojo.internal.bindings.network.mojom || {};
mojo.internal.bindings.network.mojom.IPAddressSpec = mojo.internal.bindings.network.mojom.IPAddressSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.url = mojo.internal.bindings.url || {};
mojo.internal.bindings.url.mojom = mojo.internal.bindings.url.mojom || {};
mojo.internal.bindings.url.mojom.UrlSpec = mojo.internal.bindings.url.mojom.UrlSpec || { $: mojo.internal.OpaqueStruct.$ };

mojo.internal.bindings.chromeos.network_config.mojom.kMaxNumCustomApns = 10;

mojo.internal.bindings.chromeos.network_config.mojom.kNoLimit = 0;

mojo.internal.bindings.chromeos.network_config.mojom.kNoRoutingPrefix = 0;

// Enum: ActivationStateType
mojo.internal.bindings.chromeos.network_config.mojom.ActivationStateType = {
  kUnknown: 0,
  kNotActivated: 1,
  kActivating: 2,
  kPartiallyActivated: 3,
  kActivated: 4,
  kNoService: 5,
};

// Enum: AuthenticationType
mojo.internal.bindings.chromeos.network_config.mojom.AuthenticationType = {
  kNone: 0,
  k8021x: 1,
};

// Enum: HiddenSsidMode
mojo.internal.bindings.chromeos.network_config.mojom.HiddenSsidMode = {
  kAutomatic: 0,
  kDisabled: 1,
  kEnabled: 2,
};

// Enum: ProxyMode
mojo.internal.bindings.chromeos.network_config.mojom.ProxyMode = {
  kDirect: 0,
  kAutoDetect: 1,
  kPacScript: 2,
  kFixedServers: 3,
  kSystem: 4,
};

// Enum: SecurityType
mojo.internal.bindings.chromeos.network_config.mojom.SecurityType = {
  kNone: 0,
  kWep8021x: 1,
  kWepPsk: 2,
  kWpaEap: 3,
  kWpaPsk: 4,
};

// Enum: MatchType
mojo.internal.bindings.chromeos.network_config.mojom.MatchType = {
  kNoMatch: 0,
  kHome: 1,
  kRoaming: 2,
  kUnknown: 3,
};

// Enum: VpnType
mojo.internal.bindings.chromeos.network_config.mojom.VpnType = {
  kIKEv2: 0,
  kL2TPIPsec: 1,
  kOpenVPN: 2,
  kWireGuard: 3,
  kExtension: 4,
  kArc: 5,
};

// Enum: FilterType
mojo.internal.bindings.chromeos.network_config.mojom.FilterType = {
  kActive: 0,
  kVisible: 1,
  kConfigured: 2,
  kAll: 3,
};

// Enum: StartConnectResult
mojo.internal.bindings.chromeos.network_config.mojom.StartConnectResult = {
  kSuccess: 0,
  kInvalidGuid: 1,
  kInvalidState: 2,
  kCanceled: 3,
  kNotConfigured: 4,
  kBlocked: 5,
  kUnknown: 6,
};

// Enum: CertificateType
mojo.internal.bindings.chromeos.network_config.mojom.CertificateType = {
  kServerCA: 0,
  kUserCert: 1,
};

// Enum: InhibitReason
mojo.internal.bindings.chromeos.network_config.mojom.InhibitReason = {
  kNotInhibited: 0,
  kInstallingProfile: 1,
  kRenamingProfile: 2,
  kRemovingProfile: 3,
  kConnectingToProfile: 4,
  kRefreshingProfileList: 5,
  kResettingEuiccMemory: 6,
  kDisablingProfile: 7,
  kRequestingAvailableProfiles: 8,
};

// Enum: AlwaysOnVpnMode
mojo.internal.bindings.chromeos.network_config.mojom.AlwaysOnVpnMode = {
  kOff: 0,
  kBestEffort: 1,
  kStrict: 2,
};

// Enum: ApnState
mojo.internal.bindings.chromeos.network_config.mojom.ApnState = {
  kEnabled: 0,
  kDisabled: 1,
};

// Enum: ApnAuthenticationType
mojo.internal.bindings.chromeos.network_config.mojom.ApnAuthenticationType = {
  kAutomatic: 0,
  kPap: 1,
  kChap: 2,
};

// Enum: ApnIpType
mojo.internal.bindings.chromeos.network_config.mojom.ApnIpType = {
  kAutomatic: 0,
  kIpv4: 1,
  kIpv6: 2,
  kIpv4Ipv6: 3,
};

// Enum: ApnType
mojo.internal.bindings.chromeos.network_config.mojom.ApnType = {
  kDefault: 0,
  kAttach: 1,
  kTether: 2,
};

// Enum: ApnSource
mojo.internal.bindings.chromeos.network_config.mojom.ApnSource = {
  kModem: 0,
  kModb: 1,
  kUi: 2,
};

// Enum: Type
mojo.internal.bindings.chromeos.network_config.mojom.Type = {
  kEmail: 0,
  kDns: 1,
  kUri: 2,
};

// Enum: SuppressionType
mojo.internal.bindings.chromeos.network_config.mojom.SuppressionType = {
  kUnset: 0,
  kAllow: 1,
  kSuppress: 2,
};

// Enum: TrafficCounterSource
mojo.internal.bindings.chromeos.network_config.mojom.TrafficCounterSource = {
  kUnknown: 0,
  kChrome: 1,
  kUser: 2,
  kArc: 3,
  kCrosvm: 4,
  kPluginvm: 5,
  kUpdateEngine: 6,
  kVpn: 7,
  kSystem: 8,
};

// Interface: CrosNetworkConfig
mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfigPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
    if (handle) {
      this.__mojoHandle = handle.router_ ? handle.router_.pipe_ : (handle.pipe_ || handle);
    }
  }
};

mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfigRemote = class {
  static get $interfaceName() {
    return 'chromeos.network_config.mojom.CrosNetworkConfig';
  }

  constructor(handle = undefined) {
    this.__mojoHandle = handle;
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfigPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfigRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  addObserver(arg_observer) {
    return this.$.addObserver(arg_observer);
  }
  getNetworkState(arg_guid) {
    return this.$.getNetworkState(arg_guid);
  }
  getNetworkStateList(arg_filter) {
    return this.$.getNetworkStateList(arg_filter);
  }
  getDeviceStateList() {
    return this.$.getDeviceStateList();
  }
  getManagedProperties(arg_guid) {
    return this.$.getManagedProperties(arg_guid);
  }
  setProperties(arg_guid, arg_properties) {
    return this.$.setProperties(arg_guid, arg_properties);
  }
  configureNetwork(arg_properties, arg_shared) {
    return this.$.configureNetwork(arg_properties, arg_shared);
  }
  forgetNetwork(arg_guid) {
    return this.$.forgetNetwork(arg_guid);
  }
  setNetworkTypeEnabledState(arg_type, arg_enabled) {
    return this.$.setNetworkTypeEnabledState(arg_type, arg_enabled);
  }
  setCellularSimState(arg_state) {
    return this.$.setCellularSimState(arg_state);
  }
  selectCellularMobileNetwork(arg_guid, arg_network_id) {
    return this.$.selectCellularMobileNetwork(arg_guid, arg_network_id);
  }
  requestNetworkScan(arg_type) {
    return this.$.requestNetworkScan(arg_type);
  }
  getGlobalPolicy() {
    return this.$.getGlobalPolicy();
  }
  startConnect(arg_guid) {
    return this.$.startConnect(arg_guid);
  }
  startDisconnect(arg_guid) {
    return this.$.startDisconnect(arg_guid);
  }
  setVpnProviders(arg_providers) {
    return this.$.setVpnProviders(arg_providers);
  }
  getVpnProviders() {
    return this.$.getVpnProviders();
  }
  getNetworkCertificates() {
    return this.$.getNetworkCertificates();
  }
  getAlwaysOnVpn() {
    return this.$.getAlwaysOnVpn();
  }
  setAlwaysOnVpn(arg_properties) {
    return this.$.setAlwaysOnVpn(arg_properties);
  }
  getSupportedVpnTypes() {
    return this.$.getSupportedVpnTypes();
  }
  requestTrafficCounters(arg_guid) {
    return this.$.requestTrafficCounters(arg_guid);
  }
  resetTrafficCounters(arg_guid) {
    return this.$.resetTrafficCounters(arg_guid);
  }
  setTrafficCountersResetDay(arg_guid, arg_day) {
    return this.$.setTrafficCountersResetDay(arg_guid, arg_day);
  }
  createCustomApn(arg_network_guid, arg_apn) {
    return this.$.createCustomApn(arg_network_guid, arg_apn);
  }
  createExclusivelyEnabledCustomApn(arg_network_guid, arg_apn) {
    return this.$.createExclusivelyEnabledCustomApn(arg_network_guid, arg_apn);
  }
  removeCustomApn(arg_network_guid, arg_apn_id) {
    return this.$.removeCustomApn(arg_network_guid, arg_apn_id);
  }
  modifyCustomApn(arg_network_guid, arg_apn) {
    return this.$.modifyCustomApn(arg_network_guid, arg_apn);
  }
};

mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfigRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('chromeos.network_config.mojom.CrosNetworkConfig', [
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
      { explicit: null },
      { explicit: null },
    ]);
  }

  addObserver(arg_observer) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_AddObserver_ParamsSpec,
      null,
      [arg_observer],
      false);
  }

  getNetworkState(arg_guid) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_GetNetworkState_ParamsSpec,
      mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_GetNetworkState_ResponseParamsSpec,
      [arg_guid],
      false);
  }

  getNetworkStateList(arg_filter) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_GetNetworkStateList_ParamsSpec,
      mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_GetNetworkStateList_ResponseParamsSpec,
      [arg_filter],
      false);
  }

  getDeviceStateList() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_GetDeviceStateList_ParamsSpec,
      mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_GetDeviceStateList_ResponseParamsSpec,
      [],
      false);
  }

  getManagedProperties(arg_guid) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_GetManagedProperties_ParamsSpec,
      mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_GetManagedProperties_ResponseParamsSpec,
      [arg_guid],
      false);
  }

  setProperties(arg_guid, arg_properties) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_SetProperties_ParamsSpec,
      mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_SetProperties_ResponseParamsSpec,
      [arg_guid, arg_properties],
      false);
  }

  configureNetwork(arg_properties, arg_shared) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_ConfigureNetwork_ParamsSpec,
      mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_ConfigureNetwork_ResponseParamsSpec,
      [arg_properties, arg_shared],
      false);
  }

  forgetNetwork(arg_guid) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_ForgetNetwork_ParamsSpec,
      mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_ForgetNetwork_ResponseParamsSpec,
      [arg_guid],
      false);
  }

  setNetworkTypeEnabledState(arg_type, arg_enabled) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_SetNetworkTypeEnabledState_ParamsSpec,
      mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_SetNetworkTypeEnabledState_ResponseParamsSpec,
      [arg_type, arg_enabled],
      false);
  }

  setCellularSimState(arg_state) {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_SetCellularSimState_ParamsSpec,
      mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_SetCellularSimState_ResponseParamsSpec,
      [arg_state],
      false);
  }

  selectCellularMobileNetwork(arg_guid, arg_network_id) {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_SelectCellularMobileNetwork_ParamsSpec,
      mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_SelectCellularMobileNetwork_ResponseParamsSpec,
      [arg_guid, arg_network_id],
      false);
  }

  requestNetworkScan(arg_type) {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_RequestNetworkScan_ParamsSpec,
      null,
      [arg_type],
      false);
  }

  getGlobalPolicy() {
    return this.proxy.sendMessage(
      this.ordinals[12],  // ordinal
      mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_GetGlobalPolicy_ParamsSpec,
      mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_GetGlobalPolicy_ResponseParamsSpec,
      [],
      false);
  }

  startConnect(arg_guid) {
    return this.proxy.sendMessage(
      this.ordinals[13],  // ordinal
      mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_StartConnect_ParamsSpec,
      mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_StartConnect_ResponseParamsSpec,
      [arg_guid],
      false);
  }

  startDisconnect(arg_guid) {
    return this.proxy.sendMessage(
      this.ordinals[14],  // ordinal
      mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_StartDisconnect_ParamsSpec,
      mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_StartDisconnect_ResponseParamsSpec,
      [arg_guid],
      false);
  }

  setVpnProviders(arg_providers) {
    return this.proxy.sendMessage(
      this.ordinals[15],  // ordinal
      mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_SetVpnProviders_ParamsSpec,
      null,
      [arg_providers],
      false);
  }

  getVpnProviders() {
    return this.proxy.sendMessage(
      this.ordinals[16],  // ordinal
      mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_GetVpnProviders_ParamsSpec,
      mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_GetVpnProviders_ResponseParamsSpec,
      [],
      false);
  }

  getNetworkCertificates() {
    return this.proxy.sendMessage(
      this.ordinals[17],  // ordinal
      mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_GetNetworkCertificates_ParamsSpec,
      mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_GetNetworkCertificates_ResponseParamsSpec,
      [],
      false);
  }

  getAlwaysOnVpn() {
    return this.proxy.sendMessage(
      this.ordinals[18],  // ordinal
      mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_GetAlwaysOnVpn_ParamsSpec,
      mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_GetAlwaysOnVpn_ResponseParamsSpec,
      [],
      false);
  }

  setAlwaysOnVpn(arg_properties) {
    return this.proxy.sendMessage(
      this.ordinals[19],  // ordinal
      mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_SetAlwaysOnVpn_ParamsSpec,
      null,
      [arg_properties],
      false);
  }

  getSupportedVpnTypes() {
    return this.proxy.sendMessage(
      this.ordinals[20],  // ordinal
      mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_GetSupportedVpnTypes_ParamsSpec,
      mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_GetSupportedVpnTypes_ResponseParamsSpec,
      [],
      false);
  }

  requestTrafficCounters(arg_guid) {
    return this.proxy.sendMessage(
      this.ordinals[21],  // ordinal
      mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_RequestTrafficCounters_ParamsSpec,
      mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_RequestTrafficCounters_ResponseParamsSpec,
      [arg_guid],
      false);
  }

  resetTrafficCounters(arg_guid) {
    return this.proxy.sendMessage(
      this.ordinals[22],  // ordinal
      mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_ResetTrafficCounters_ParamsSpec,
      null,
      [arg_guid],
      false);
  }

  setTrafficCountersResetDay(arg_guid, arg_day) {
    return this.proxy.sendMessage(
      this.ordinals[23],  // ordinal
      mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_SetTrafficCountersResetDay_ParamsSpec,
      mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_SetTrafficCountersResetDay_ResponseParamsSpec,
      [arg_guid, arg_day],
      false);
  }

  createCustomApn(arg_network_guid, arg_apn) {
    return this.proxy.sendMessage(
      this.ordinals[24],  // ordinal
      mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_CreateCustomApn_ParamsSpec,
      mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_CreateCustomApn_ResponseParamsSpec,
      [arg_network_guid, arg_apn],
      false);
  }

  createExclusivelyEnabledCustomApn(arg_network_guid, arg_apn) {
    return this.proxy.sendMessage(
      this.ordinals[25],  // ordinal
      mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_CreateExclusivelyEnabledCustomApn_ParamsSpec,
      mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_CreateExclusivelyEnabledCustomApn_ResponseParamsSpec,
      [arg_network_guid, arg_apn],
      false);
  }

  removeCustomApn(arg_network_guid, arg_apn_id) {
    return this.proxy.sendMessage(
      this.ordinals[26],  // ordinal
      mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_RemoveCustomApn_ParamsSpec,
      null,
      [arg_network_guid, arg_apn_id],
      false);
  }

  modifyCustomApn(arg_network_guid, arg_apn) {
    return this.proxy.sendMessage(
      this.ordinals[27],  // ordinal
      mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_ModifyCustomApn_ParamsSpec,
      null,
      [arg_network_guid, arg_apn],
      false);
  }

};

mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig.getRemote = function() {
  let remote = new mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfigRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromeos.network_config.mojom.CrosNetworkConfig',
    'context');
  return remote.$;
};

mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfigReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('chromeos.network_config.mojom.CrosNetworkConfig', [
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_AddObserver_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.addObserver');
          const result = this.impl.addObserver(params.arg_observer);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_GetNetworkState_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getNetworkState');
          const result = this.impl.getNetworkState(params.arg_guid);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const val = (response && typeof response === 'object' && 'arg_result' in response) ? response['arg_result'] : response;
              const resp_obj = { 'arg_result': val };
              const message = new mojo.internal.Message(
                this.router_, 0, mojo.internal.kMessageFlagIsResponse,
                header.ordinal, header.requestId, mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_GetNetworkState_ResponseParamsSpec.$.structSpec, resp_obj);
              this.router_.send(message);
            }).catch(e => console.error('[GeneratedReceiver] getNetworkState FAILED:', e));
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_GetNetworkStateList_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getNetworkStateList');
          const result = this.impl.getNetworkStateList(params.arg_filter);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const val = (response && typeof response === 'object' && 'arg_result' in response) ? response['arg_result'] : response;
              const resp_obj = { 'arg_result': val };
              const message = new mojo.internal.Message(
                this.router_, 0, mojo.internal.kMessageFlagIsResponse,
                header.ordinal, header.requestId, mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_GetNetworkStateList_ResponseParamsSpec.$.structSpec, resp_obj);
              this.router_.send(message);
            }).catch(e => console.error('[GeneratedReceiver] getNetworkStateList FAILED:', e));
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_GetDeviceStateList_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getDeviceStateList');
          const result = this.impl.getDeviceStateList();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const val = (response && typeof response === 'object' && 'arg_result' in response) ? response['arg_result'] : response;
              const resp_obj = { 'arg_result': val };
              const message = new mojo.internal.Message(
                this.router_, 0, mojo.internal.kMessageFlagIsResponse,
                header.ordinal, header.requestId, mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_GetDeviceStateList_ResponseParamsSpec.$.structSpec, resp_obj);
              this.router_.send(message);
            }).catch(e => console.error('[GeneratedReceiver] getDeviceStateList FAILED:', e));
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_GetManagedProperties_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getManagedProperties');
          const result = this.impl.getManagedProperties(params.arg_guid);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const val = (response && typeof response === 'object' && 'arg_result' in response) ? response['arg_result'] : response;
              const resp_obj = { 'arg_result': val };
              const message = new mojo.internal.Message(
                this.router_, 0, mojo.internal.kMessageFlagIsResponse,
                header.ordinal, header.requestId, mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_GetManagedProperties_ResponseParamsSpec.$.structSpec, resp_obj);
              this.router_.send(message);
            }).catch(e => console.error('[GeneratedReceiver] getManagedProperties FAILED:', e));
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_SetProperties_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setProperties');
          const result = this.impl.setProperties(params.arg_guid, params.arg_properties);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const resp_obj = response;
              const message = new mojo.internal.Message(
                this.router_, 0, mojo.internal.kMessageFlagIsResponse,
                header.ordinal, header.requestId, mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_SetProperties_ResponseParamsSpec.$.structSpec, resp_obj);
              this.router_.send(message);
            }).catch(e => console.error('[GeneratedReceiver] setProperties FAILED:', e));
          }
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_ConfigureNetwork_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.configureNetwork');
          const result = this.impl.configureNetwork(params.arg_properties, params.arg_shared);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const resp_obj = response;
              const message = new mojo.internal.Message(
                this.router_, 0, mojo.internal.kMessageFlagIsResponse,
                header.ordinal, header.requestId, mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_ConfigureNetwork_ResponseParamsSpec.$.structSpec, resp_obj);
              this.router_.send(message);
            }).catch(e => console.error('[GeneratedReceiver] configureNetwork FAILED:', e));
          }
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_ForgetNetwork_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.forgetNetwork');
          const result = this.impl.forgetNetwork(params.arg_guid);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const val = (response && typeof response === 'object' && 'arg_success' in response) ? response['arg_success'] : response;
              const resp_obj = { 'arg_success': val };
              const message = new mojo.internal.Message(
                this.router_, 0, mojo.internal.kMessageFlagIsResponse,
                header.ordinal, header.requestId, mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_ForgetNetwork_ResponseParamsSpec.$.structSpec, resp_obj);
              this.router_.send(message);
            }).catch(e => console.error('[GeneratedReceiver] forgetNetwork FAILED:', e));
          }
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_SetNetworkTypeEnabledState_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setNetworkTypeEnabledState');
          const result = this.impl.setNetworkTypeEnabledState(params.arg_type, params.arg_enabled);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const val = (response && typeof response === 'object' && 'arg_success' in response) ? response['arg_success'] : response;
              const resp_obj = { 'arg_success': val };
              const message = new mojo.internal.Message(
                this.router_, 0, mojo.internal.kMessageFlagIsResponse,
                header.ordinal, header.requestId, mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_SetNetworkTypeEnabledState_ResponseParamsSpec.$.structSpec, resp_obj);
              this.router_.send(message);
            }).catch(e => console.error('[GeneratedReceiver] setNetworkTypeEnabledState FAILED:', e));
          }
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_SetCellularSimState_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setCellularSimState');
          const result = this.impl.setCellularSimState(params.arg_state);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const val = (response && typeof response === 'object' && 'arg_success' in response) ? response['arg_success'] : response;
              const resp_obj = { 'arg_success': val };
              const message = new mojo.internal.Message(
                this.router_, 0, mojo.internal.kMessageFlagIsResponse,
                header.ordinal, header.requestId, mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_SetCellularSimState_ResponseParamsSpec.$.structSpec, resp_obj);
              this.router_.send(message);
            }).catch(e => console.error('[GeneratedReceiver] setCellularSimState FAILED:', e));
          }
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_SelectCellularMobileNetwork_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.selectCellularMobileNetwork');
          const result = this.impl.selectCellularMobileNetwork(params.arg_guid, params.arg_network_id);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const val = (response && typeof response === 'object' && 'arg_success' in response) ? response['arg_success'] : response;
              const resp_obj = { 'arg_success': val };
              const message = new mojo.internal.Message(
                this.router_, 0, mojo.internal.kMessageFlagIsResponse,
                header.ordinal, header.requestId, mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_SelectCellularMobileNetwork_ResponseParamsSpec.$.structSpec, resp_obj);
              this.router_.send(message);
            }).catch(e => console.error('[GeneratedReceiver] selectCellularMobileNetwork FAILED:', e));
          }
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_RequestNetworkScan_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.requestNetworkScan');
          const result = this.impl.requestNetworkScan(params.arg_type);
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_GetGlobalPolicy_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getGlobalPolicy');
          const result = this.impl.getGlobalPolicy();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const val = (response && typeof response === 'object' && 'arg_result' in response) ? response['arg_result'] : response;
              const resp_obj = { 'arg_result': val };
              const message = new mojo.internal.Message(
                this.router_, 0, mojo.internal.kMessageFlagIsResponse,
                header.ordinal, header.requestId, mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_GetGlobalPolicy_ResponseParamsSpec.$.structSpec, resp_obj);
              this.router_.send(message);
            }).catch(e => console.error('[GeneratedReceiver] getGlobalPolicy FAILED:', e));
          }
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_StartConnect_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.startConnect');
          const result = this.impl.startConnect(params.arg_guid);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const resp_obj = response;
              const message = new mojo.internal.Message(
                this.router_, 0, mojo.internal.kMessageFlagIsResponse,
                header.ordinal, header.requestId, mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_StartConnect_ResponseParamsSpec.$.structSpec, resp_obj);
              this.router_.send(message);
            }).catch(e => console.error('[GeneratedReceiver] startConnect FAILED:', e));
          }
          break;
        }
        case 14: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_StartDisconnect_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.startDisconnect');
          const result = this.impl.startDisconnect(params.arg_guid);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const val = (response && typeof response === 'object' && 'arg_success' in response) ? response['arg_success'] : response;
              const resp_obj = { 'arg_success': val };
              const message = new mojo.internal.Message(
                this.router_, 0, mojo.internal.kMessageFlagIsResponse,
                header.ordinal, header.requestId, mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_StartDisconnect_ResponseParamsSpec.$.structSpec, resp_obj);
              this.router_.send(message);
            }).catch(e => console.error('[GeneratedReceiver] startDisconnect FAILED:', e));
          }
          break;
        }
        case 15: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_SetVpnProviders_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setVpnProviders');
          const result = this.impl.setVpnProviders(params.arg_providers);
          break;
        }
        case 16: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_GetVpnProviders_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getVpnProviders');
          const result = this.impl.getVpnProviders();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const val = (response && typeof response === 'object' && 'arg_providers' in response) ? response['arg_providers'] : response;
              const resp_obj = { 'arg_providers': val };
              const message = new mojo.internal.Message(
                this.router_, 0, mojo.internal.kMessageFlagIsResponse,
                header.ordinal, header.requestId, mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_GetVpnProviders_ResponseParamsSpec.$.structSpec, resp_obj);
              this.router_.send(message);
            }).catch(e => console.error('[GeneratedReceiver] getVpnProviders FAILED:', e));
          }
          break;
        }
        case 17: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_GetNetworkCertificates_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getNetworkCertificates');
          const result = this.impl.getNetworkCertificates();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const resp_obj = response;
              const message = new mojo.internal.Message(
                this.router_, 0, mojo.internal.kMessageFlagIsResponse,
                header.ordinal, header.requestId, mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_GetNetworkCertificates_ResponseParamsSpec.$.structSpec, resp_obj);
              this.router_.send(message);
            }).catch(e => console.error('[GeneratedReceiver] getNetworkCertificates FAILED:', e));
          }
          break;
        }
        case 18: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_GetAlwaysOnVpn_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getAlwaysOnVpn');
          const result = this.impl.getAlwaysOnVpn();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const val = (response && typeof response === 'object' && 'arg_properties' in response) ? response['arg_properties'] : response;
              const resp_obj = { 'arg_properties': val };
              const message = new mojo.internal.Message(
                this.router_, 0, mojo.internal.kMessageFlagIsResponse,
                header.ordinal, header.requestId, mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_GetAlwaysOnVpn_ResponseParamsSpec.$.structSpec, resp_obj);
              this.router_.send(message);
            }).catch(e => console.error('[GeneratedReceiver] getAlwaysOnVpn FAILED:', e));
          }
          break;
        }
        case 19: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_SetAlwaysOnVpn_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setAlwaysOnVpn');
          const result = this.impl.setAlwaysOnVpn(params.arg_properties);
          break;
        }
        case 20: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_GetSupportedVpnTypes_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getSupportedVpnTypes');
          const result = this.impl.getSupportedVpnTypes();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const val = (response && typeof response === 'object' && 'arg_vpn_types' in response) ? response['arg_vpn_types'] : response;
              const resp_obj = { 'arg_vpn_types': val };
              const message = new mojo.internal.Message(
                this.router_, 0, mojo.internal.kMessageFlagIsResponse,
                header.ordinal, header.requestId, mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_GetSupportedVpnTypes_ResponseParamsSpec.$.structSpec, resp_obj);
              this.router_.send(message);
            }).catch(e => console.error('[GeneratedReceiver] getSupportedVpnTypes FAILED:', e));
          }
          break;
        }
        case 21: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_RequestTrafficCounters_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.requestTrafficCounters');
          const result = this.impl.requestTrafficCounters(params.arg_guid);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const val = (response && typeof response === 'object' && 'arg_traffic_counters' in response) ? response['arg_traffic_counters'] : response;
              const resp_obj = { 'arg_traffic_counters': val };
              const message = new mojo.internal.Message(
                this.router_, 0, mojo.internal.kMessageFlagIsResponse,
                header.ordinal, header.requestId, mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_RequestTrafficCounters_ResponseParamsSpec.$.structSpec, resp_obj);
              this.router_.send(message);
            }).catch(e => console.error('[GeneratedReceiver] requestTrafficCounters FAILED:', e));
          }
          break;
        }
        case 22: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_ResetTrafficCounters_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.resetTrafficCounters');
          const result = this.impl.resetTrafficCounters(params.arg_guid);
          break;
        }
        case 23: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_SetTrafficCountersResetDay_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setTrafficCountersResetDay');
          const result = this.impl.setTrafficCountersResetDay(params.arg_guid, params.arg_day);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const val = (response && typeof response === 'object' && 'arg_success' in response) ? response['arg_success'] : response;
              const resp_obj = { 'arg_success': val };
              const message = new mojo.internal.Message(
                this.router_, 0, mojo.internal.kMessageFlagIsResponse,
                header.ordinal, header.requestId, mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_SetTrafficCountersResetDay_ResponseParamsSpec.$.structSpec, resp_obj);
              this.router_.send(message);
            }).catch(e => console.error('[GeneratedReceiver] setTrafficCountersResetDay FAILED:', e));
          }
          break;
        }
        case 24: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_CreateCustomApn_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.createCustomApn');
          const result = this.impl.createCustomApn(params.arg_network_guid, params.arg_apn);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const val = (response && typeof response === 'object' && 'arg_success' in response) ? response['arg_success'] : response;
              const resp_obj = { 'arg_success': val };
              const message = new mojo.internal.Message(
                this.router_, 0, mojo.internal.kMessageFlagIsResponse,
                header.ordinal, header.requestId, mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_CreateCustomApn_ResponseParamsSpec.$.structSpec, resp_obj);
              this.router_.send(message);
            }).catch(e => console.error('[GeneratedReceiver] createCustomApn FAILED:', e));
          }
          break;
        }
        case 25: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_CreateExclusivelyEnabledCustomApn_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.createExclusivelyEnabledCustomApn');
          const result = this.impl.createExclusivelyEnabledCustomApn(params.arg_network_guid, params.arg_apn);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const val = (response && typeof response === 'object' && 'arg_success' in response) ? response['arg_success'] : response;
              const resp_obj = { 'arg_success': val };
              const message = new mojo.internal.Message(
                this.router_, 0, mojo.internal.kMessageFlagIsResponse,
                header.ordinal, header.requestId, mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_CreateExclusivelyEnabledCustomApn_ResponseParamsSpec.$.structSpec, resp_obj);
              this.router_.send(message);
            }).catch(e => console.error('[GeneratedReceiver] createExclusivelyEnabledCustomApn FAILED:', e));
          }
          break;
        }
        case 26: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_RemoveCustomApn_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.removeCustomApn');
          const result = this.impl.removeCustomApn(params.arg_network_guid, params.arg_apn_id);
          break;
        }
        case 27: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_ModifyCustomApn_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.modifyCustomApn');
          const result = this.impl.modifyCustomApn(params.arg_network_guid, params.arg_apn);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfigReceiver = mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfigReceiver;

mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfigPtr = mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfigRemote;
mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfigRequest = mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfigPendingReceiver;


// Interface: CrosNetworkConfigObserver
mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfigObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
    if (handle) {
      this.__mojoHandle = handle.router_ ? handle.router_.pipe_ : (handle.pipe_ || handle);
    }
  }
};

mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfigObserverRemote = class {
  static get $interfaceName() {
    return 'chromeos.network_config.mojom.CrosNetworkConfigObserver';
  }

  constructor(handle = undefined) {
    this.__mojoHandle = handle;
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfigObserverPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfigObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onActiveNetworksChanged(arg_networks) {
    return this.$.onActiveNetworksChanged(arg_networks);
  }
  onNetworkStateChanged(arg_network) {
    return this.$.onNetworkStateChanged(arg_network);
  }
  onNetworkStateListChanged() {
    return this.$.onNetworkStateListChanged();
  }
  onDeviceStateListChanged() {
    return this.$.onDeviceStateListChanged();
  }
  onVpnProvidersChanged() {
    return this.$.onVpnProvidersChanged();
  }
  onNetworkCertificatesChanged() {
    return this.$.onNetworkCertificatesChanged();
  }
  onPoliciesApplied(arg_userhash) {
    return this.$.onPoliciesApplied(arg_userhash);
  }
};

mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfigObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('chromeos.network_config.mojom.CrosNetworkConfigObserver', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  onActiveNetworksChanged(arg_networks) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfigObserver_OnActiveNetworksChanged_ParamsSpec,
      null,
      [arg_networks],
      false);
  }

  onNetworkStateChanged(arg_network) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfigObserver_OnNetworkStateChanged_ParamsSpec,
      null,
      [arg_network],
      false);
  }

  onNetworkStateListChanged() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfigObserver_OnNetworkStateListChanged_ParamsSpec,
      null,
      [],
      false);
  }

  onDeviceStateListChanged() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfigObserver_OnDeviceStateListChanged_ParamsSpec,
      null,
      [],
      false);
  }

  onVpnProvidersChanged() {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfigObserver_OnVpnProvidersChanged_ParamsSpec,
      null,
      [],
      false);
  }

  onNetworkCertificatesChanged() {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfigObserver_OnNetworkCertificatesChanged_ParamsSpec,
      null,
      [],
      false);
  }

  onPoliciesApplied(arg_userhash) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfigObserver_OnPoliciesApplied_ParamsSpec,
      null,
      [arg_userhash],
      false);
  }

};

mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfigObserver.getRemote = function() {
  let remote = new mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfigObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromeos.network_config.mojom.CrosNetworkConfigObserver',
    'context');
  return remote.$;
};

mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfigObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('chromeos.network_config.mojom.CrosNetworkConfigObserver', [
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfigObserver_OnActiveNetworksChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onActiveNetworksChanged');
          const result = this.impl.onActiveNetworksChanged(params.arg_networks);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfigObserver_OnNetworkStateChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onNetworkStateChanged');
          const result = this.impl.onNetworkStateChanged(params.arg_network);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfigObserver_OnNetworkStateListChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onNetworkStateListChanged');
          const result = this.impl.onNetworkStateListChanged();
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfigObserver_OnDeviceStateListChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onDeviceStateListChanged');
          const result = this.impl.onDeviceStateListChanged();
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfigObserver_OnVpnProvidersChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onVpnProvidersChanged');
          const result = this.impl.onVpnProvidersChanged();
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfigObserver_OnNetworkCertificatesChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onNetworkCertificatesChanged');
          const result = this.impl.onNetworkCertificatesChanged();
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfigObserver_OnPoliciesApplied_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onPoliciesApplied');
          const result = this.impl.onPoliciesApplied(params.arg_userhash);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfigObserverReceiver = mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfigObserverReceiver;

mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfigObserverPtr = mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfigObserverRemote;
mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfigObserverRequest = mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfigObserverPendingReceiver;


// Specs (at the end to ensure classes are defined for InterfaceProxy)

// Union: NetworkTypeStateProperties
mojo.internal.Union(
    mojo.internal.bindings.chromeos.network_config.mojom.NetworkTypeStatePropertiesSpec, 'chromeos.network_config.mojom.NetworkTypeStateProperties', {
      'arg_cellular': {
        'ordinal': 0,
        'type': mojo.internal.bindings.chromeos.network_config.mojom.CellularStatePropertiesSpec,
        'nullable': false,
      },
      'arg_ethernet': {
        'ordinal': 1,
        'type': mojo.internal.bindings.chromeos.network_config.mojom.EthernetStatePropertiesSpec,
        'nullable': false,
      },
      'arg_tether': {
        'ordinal': 2,
        'type': mojo.internal.bindings.chromeos.network_config.mojom.TetherStatePropertiesSpec,
        'nullable': false,
      },
      'arg_vpn': {
        'ordinal': 3,
        'type': mojo.internal.bindings.chromeos.network_config.mojom.VPNStatePropertiesSpec,
        'nullable': false,
      },
      'arg_wifi': {
        'ordinal': 4,
        'type': mojo.internal.bindings.chromeos.network_config.mojom.WiFiStatePropertiesSpec,
        'nullable': false,
      },
    });

// Union: NetworkTypeManagedProperties
mojo.internal.Union(
    mojo.internal.bindings.chromeos.network_config.mojom.NetworkTypeManagedPropertiesSpec, 'chromeos.network_config.mojom.NetworkTypeManagedProperties', {
      'arg_cellular': {
        'ordinal': 0,
        'type': mojo.internal.bindings.chromeos.network_config.mojom.ManagedCellularPropertiesSpec,
        'nullable': false,
      },
      'arg_ethernet': {
        'ordinal': 1,
        'type': mojo.internal.bindings.chromeos.network_config.mojom.ManagedEthernetPropertiesSpec,
        'nullable': false,
      },
      'arg_tether': {
        'ordinal': 2,
        'type': mojo.internal.bindings.chromeos.network_config.mojom.TetherStatePropertiesSpec,
        'nullable': false,
      },
      'arg_vpn': {
        'ordinal': 3,
        'type': mojo.internal.bindings.chromeos.network_config.mojom.ManagedVPNPropertiesSpec,
        'nullable': false,
      },
      'arg_wifi': {
        'ordinal': 4,
        'type': mojo.internal.bindings.chromeos.network_config.mojom.ManagedWiFiPropertiesSpec,
        'nullable': false,
      },
    });

// Union: NetworkTypeConfigProperties
mojo.internal.Union(
    mojo.internal.bindings.chromeos.network_config.mojom.NetworkTypeConfigPropertiesSpec, 'chromeos.network_config.mojom.NetworkTypeConfigProperties', {
      'arg_cellular': {
        'ordinal': 0,
        'type': mojo.internal.bindings.chromeos.network_config.mojom.CellularConfigPropertiesSpec,
        'nullable': false,
      },
      'arg_ethernet': {
        'ordinal': 1,
        'type': mojo.internal.bindings.chromeos.network_config.mojom.EthernetConfigPropertiesSpec,
        'nullable': false,
      },
      'arg_vpn': {
        'ordinal': 2,
        'type': mojo.internal.bindings.chromeos.network_config.mojom.VPNConfigPropertiesSpec,
        'nullable': false,
      },
      'arg_wifi': {
        'ordinal': 3,
        'type': mojo.internal.bindings.chromeos.network_config.mojom.WiFiConfigPropertiesSpec,
        'nullable': false,
      },
    });

// Struct: SIMLockStatus
mojo.internal.Struct(
    mojo.internal.bindings.chromeos.network_config.mojom.SIMLockStatusSpec, 'chromeos.network_config.mojom.SIMLockStatus', [
      mojo.internal.StructField('arg_lock_type', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_lock_enabled', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_retries_left', 12, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: SIMInfo
mojo.internal.Struct(
    mojo.internal.bindings.chromeos.network_config.mojom.SIMInfoSpec, 'chromeos.network_config.mojom.SIMInfo', [
      mojo.internal.StructField('arg_slot_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_is_primary', 4, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_eid', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_iccid', 16, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: CellularStateProperties
mojo.internal.Struct(
    mojo.internal.bindings.chromeos.network_config.mojom.CellularStatePropertiesSpec, 'chromeos.network_config.mojom.CellularStateProperties', [
      mojo.internal.StructField('arg_iccid', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_eid', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_activation_state', 16, 0, mojo.internal.bindings.chromeos.network_config.mojom.ActivationStateTypeSpec, 0, false, 0, undefined),
      mojo.internal.StructField('arg_roaming', 20, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_sim_lock_enabled', 20, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_sim_locked', 20, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_has_nick_name', 20, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_network_technology', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_signal_strength', 32, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_sim_lock_type', 40, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_network_operator', 48, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_payment_portal', 56, 0, mojo.internal.bindings.chromeos.network_config.mojom.PaymentPortalPropertiesSpec, null, true, 0, undefined),
    ],
    [[0, 72]]);

// Struct: EthernetStateProperties
mojo.internal.Struct(
    mojo.internal.bindings.chromeos.network_config.mojom.EthernetStatePropertiesSpec, 'chromeos.network_config.mojom.EthernetStateProperties', [
      mojo.internal.StructField('arg_authentication', 0, 0, mojo.internal.bindings.chromeos.network_config.mojom.AuthenticationTypeSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: TetherStateProperties
mojo.internal.Struct(
    mojo.internal.bindings.chromeos.network_config.mojom.TetherStatePropertiesSpec, 'chromeos.network_config.mojom.TetherStateProperties', [
      mojo.internal.StructField('arg_battery_percentage', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_has_connected_to_host', 4, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_carrier', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_signal_strength', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: VPNStateProperties
mojo.internal.Struct(
    mojo.internal.bindings.chromeos.network_config.mojom.VPNStatePropertiesSpec, 'chromeos.network_config.mojom.VPNStateProperties', [
      mojo.internal.StructField('arg_type', 0, 0, mojo.internal.bindings.chromeos.network_config.mojom.VpnTypeSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_provider_id', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_provider_name', 16, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: WiFiStateProperties
mojo.internal.Struct(
    mojo.internal.bindings.chromeos.network_config.mojom.WiFiStatePropertiesSpec, 'chromeos.network_config.mojom.WiFiStateProperties', [
      mojo.internal.StructField('arg_bssid', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_frequency', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_security', 12, 0, mojo.internal.bindings.chromeos.network_config.mojom.SecurityTypeSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_hex_ssid', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_signal_strength', 24, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_visible', 28, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_hidden_ssid', 28, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_ssid', 32, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_passpoint_id', 40, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 56]]);

// Struct: NetworkStateProperties
mojo.internal.Struct(
    mojo.internal.bindings.chromeos.network_config.mojom.NetworkStatePropertiesSpec, 'chromeos.network_config.mojom.NetworkStateProperties', [
      mojo.internal.StructField('arg_connectable', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_connect_requested', 0, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_prohibited_by_policy', 0, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_connection_state', 4, 0, mojo.internal.bindings.chromeos.network_config.mojom.ConnectionStateTypeSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_error_state', 8, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_guid', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_name', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_portal_state', 32, 0, mojo.internal.bindings.chromeos.network_config.mojom.PortalStateSpec, 0, false, 0, undefined),
      mojo.internal.StructField('arg_priority', 36, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_portal_probe_url', 40, 0, mojo.internal.bindings.url.mojom.UrlSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_proxy_mode', 48, 0, mojo.internal.bindings.chromeos.network_config.mojom.ProxyModeSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_source', 52, 0, mojo.internal.bindings.chromeos.network_config.mojom.OncSourceSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_type', 56, 0, mojo.internal.bindings.chromeos.network_config.mojom.NetworkTypeSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_type_state', 64, 0, mojo.internal.bindings.chromeos.network_config.mojom.NetworkTypeStatePropertiesSpec, null, false, 0, undefined),
    ],
    [[0, 88]]);

// Struct: DeviceStateProperties
mojo.internal.Struct(
    mojo.internal.bindings.chromeos.network_config.mojom.DeviceStatePropertiesSpec, 'chromeos.network_config.mojom.DeviceStateProperties', [
      mojo.internal.StructField('arg_ipv4_address', 0, 0, mojo.internal.bindings.network.mojom.IPAddressSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_ipv6_address', 8, 0, mojo.internal.bindings.network.mojom.IPAddressSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_imei', 16, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_mac_address', 24, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_scanning', 32, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_sim_absent', 32, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_managed_network_available', 32, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_is_carrier_locked', 32, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_is_flashing', 32, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_inhibit_reason', 36, 0, mojo.internal.bindings.chromeos.network_config.mojom.InhibitReasonSpec, 0, false, 0, undefined),
      mojo.internal.StructField('arg_sim_lock_status', 40, 0, mojo.internal.bindings.chromeos.network_config.mojom.SIMLockStatusSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_sim_infos', 48, 0, mojo.internal.Array(mojo.internal.bindings.chromeos.network_config.mojom.SIMInfoSpec, false), null, true, 0, undefined),
      mojo.internal.StructField('arg_device_state', 56, 0, mojo.internal.bindings.chromeos.network_config.mojom.DeviceStateTypeSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_type', 60, 0, mojo.internal.bindings.chromeos.network_config.mojom.NetworkTypeSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_serial', 64, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 80]]);

// Struct: NetworkFilter
mojo.internal.Struct(
    mojo.internal.bindings.chromeos.network_config.mojom.NetworkFilterSpec, 'chromeos.network_config.mojom.NetworkFilter', [
      mojo.internal.StructField('arg_filter', 0, 0, mojo.internal.bindings.chromeos.network_config.mojom.FilterTypeSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_network_type', 4, 0, mojo.internal.bindings.chromeos.network_config.mojom.NetworkTypeSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_limit', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: ApnProperties
mojo.internal.Struct(
    mojo.internal.bindings.chromeos.network_config.mojom.ApnPropertiesSpec, 'chromeos.network_config.mojom.ApnProperties', [
      mojo.internal.StructField('arg_access_point_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_id', 8, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_authentication', 16, 0, mojo.internal.bindings.chromeos.network_config.mojom.ApnAuthenticationTypeSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_state', 20, 0, mojo.internal.bindings.chromeos.network_config.mojom.ApnStateSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_language', 24, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_localized_name', 32, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_name', 40, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_password', 48, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_username', 56, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_attach', 64, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_ip_type', 72, 0, mojo.internal.bindings.chromeos.network_config.mojom.ApnIpTypeSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_source', 76, 0, mojo.internal.bindings.chromeos.network_config.mojom.ApnSourceSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_apn_types', 80, 0, mojo.internal.Array(mojo.internal.bindings.chromeos.network_config.mojom.ApnTypeSpec, false), null, false, 0, undefined),
    ],
    [[0, 96]]);

// Struct: RoamingProperties
mojo.internal.Struct(
    mojo.internal.bindings.chromeos.network_config.mojom.RoamingPropertiesSpec, 'chromeos.network_config.mojom.RoamingProperties', [
      mojo.internal.StructField('arg_allow_roaming', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: CellularProviderProperties
mojo.internal.Struct(
    mojo.internal.bindings.chromeos.network_config.mojom.CellularProviderPropertiesSpec, 'chromeos.network_config.mojom.CellularProviderProperties', [
      mojo.internal.StructField('arg_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_code', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_country', 16, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 32]]);

// Struct: FoundNetworkProperties
mojo.internal.Struct(
    mojo.internal.bindings.chromeos.network_config.mojom.FoundNetworkPropertiesSpec, 'chromeos.network_config.mojom.FoundNetworkProperties', [
      mojo.internal.StructField('arg_status', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_network_id', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_technology', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_short_name', 24, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_long_name', 32, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 48]]);

// Struct: IPConfigProperties
mojo.internal.Struct(
    mojo.internal.bindings.chromeos.network_config.mojom.IPConfigPropertiesSpec, 'chromeos.network_config.mojom.IPConfigProperties', [
      mojo.internal.StructField('arg_gateway', 0, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_ip_address', 8, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_excluded_routes', 16, 0, mojo.internal.Array(mojo.internal.String, false), null, true, 0, undefined),
      mojo.internal.StructField('arg_included_routes', 24, 0, mojo.internal.Array(mojo.internal.String, false), null, true, 0, undefined),
      mojo.internal.StructField('arg_name_servers', 32, 0, mojo.internal.Array(mojo.internal.String, false), null, true, 0, undefined),
      mojo.internal.StructField('arg_search_domains', 40, 0, mojo.internal.Array(mojo.internal.String, false), null, true, 0, undefined),
      mojo.internal.StructField('arg_routing_prefix', 48, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_type', 52, 0, mojo.internal.bindings.chromeos.network_config.mojom.IPConfigTypeSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_web_proxy_auto_discovery_url', 56, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 72]]);

// Struct: PaymentPortalProperties
mojo.internal.Struct(
    mojo.internal.bindings.chromeos.network_config.mojom.PaymentPortalPropertiesSpec, 'chromeos.network_config.mojom.PaymentPortalProperties', [
      mojo.internal.StructField('arg_method', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_post_data', 8, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_url', 16, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 32]]);

// Struct: WireGuardPeerProperties
mojo.internal.Struct(
    mojo.internal.bindings.chromeos.network_config.mojom.WireGuardPeerPropertiesSpec, 'chromeos.network_config.mojom.WireGuardPeerProperties', [
      mojo.internal.StructField('arg_public_key', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_preshared_key', 8, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_allowed_ips', 16, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_endpoint', 24, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_persistent_keepalive_interval', 32, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 48]]);

// Struct: ManagedBoolean
mojo.internal.Struct(
    mojo.internal.bindings.chromeos.network_config.mojom.ManagedBooleanSpec, 'chromeos.network_config.mojom.ManagedBoolean', [
      mojo.internal.StructField('arg_active_value', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_policy_value', 0, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_policy_source', 4, 0, mojo.internal.bindings.chromeos.network_config.mojom.PolicySourceSpec, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: ManagedInt32
mojo.internal.Struct(
    mojo.internal.bindings.chromeos.network_config.mojom.ManagedInt32Spec, 'chromeos.network_config.mojom.ManagedInt32', [
      mojo.internal.StructField('arg_active_value', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_policy_source', 4, 0, mojo.internal.bindings.chromeos.network_config.mojom.PolicySourceSpec, 0, false, 0, undefined),
      mojo.internal.StructField('arg_policy_value', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: ManagedString
mojo.internal.Struct(
    mojo.internal.bindings.chromeos.network_config.mojom.ManagedStringSpec, 'chromeos.network_config.mojom.ManagedString', [
      mojo.internal.StructField('arg_active_value', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_policy_source', 8, 0, mojo.internal.bindings.chromeos.network_config.mojom.PolicySourceSpec, 0, false, 0, undefined),
      mojo.internal.StructField('arg_policy_value', 16, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 32]]);

// Struct: ManagedStringList
mojo.internal.Struct(
    mojo.internal.bindings.chromeos.network_config.mojom.ManagedStringListSpec, 'chromeos.network_config.mojom.ManagedStringList', [
      mojo.internal.StructField('arg_active_value', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_policy_source', 8, 0, mojo.internal.bindings.chromeos.network_config.mojom.PolicySourceSpec, 0, false, 0, undefined),
      mojo.internal.StructField('arg_policy_value', 16, 0, mojo.internal.Array(mojo.internal.String, false), null, true, 0, undefined),
    ],
    [[0, 32]]);

// Struct: ManagedApnProperties
mojo.internal.Struct(
    mojo.internal.bindings.chromeos.network_config.mojom.ManagedApnPropertiesSpec, 'chromeos.network_config.mojom.ManagedApnProperties', [
      mojo.internal.StructField('arg_access_point_name', 0, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedStringSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_authentication', 8, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedStringSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_language', 16, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedStringSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_localized_name', 24, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedStringSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_name', 32, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedStringSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_password', 40, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedStringSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_username', 48, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedStringSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_attach', 56, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedStringSpec, null, true, 0, undefined),
    ],
    [[0, 72]]);

// Struct: ManagedApnList
mojo.internal.Struct(
    mojo.internal.bindings.chromeos.network_config.mojom.ManagedApnListSpec, 'chromeos.network_config.mojom.ManagedApnList', [
      mojo.internal.StructField('arg_active_value', 0, 0, mojo.internal.Array(mojo.internal.bindings.chromeos.network_config.mojom.ApnPropertiesSpec, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_policy_source', 8, 0, mojo.internal.bindings.chromeos.network_config.mojom.PolicySourceSpec, 0, false, 0, undefined),
      mojo.internal.StructField('arg_policy_value', 16, 0, mojo.internal.Array(mojo.internal.bindings.chromeos.network_config.mojom.ApnPropertiesSpec, false), null, true, 0, undefined),
    ],
    [[0, 32]]);

// Struct: ManagedIssuerSubjectPattern
mojo.internal.Struct(
    mojo.internal.bindings.chromeos.network_config.mojom.ManagedIssuerSubjectPatternSpec, 'chromeos.network_config.mojom.ManagedIssuerSubjectPattern', [
      mojo.internal.StructField('arg_common_name', 0, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedStringSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_locality', 8, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedStringSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_organization', 16, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedStringSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_organizational_unit', 24, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedStringSpec, null, true, 0, undefined),
    ],
    [[0, 40]]);

// Struct: ManagedCertificatePattern
mojo.internal.Struct(
    mojo.internal.bindings.chromeos.network_config.mojom.ManagedCertificatePatternSpec, 'chromeos.network_config.mojom.ManagedCertificatePattern', [
      mojo.internal.StructField('arg_enrollment_uri', 0, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedStringListSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_issuer', 8, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedIssuerSubjectPatternSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_issuer_ca_ref', 16, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedStringListSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_subject', 24, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedIssuerSubjectPatternSpec, null, true, 0, undefined),
    ],
    [[0, 40]]);

// Struct: ManagedEAPProperties
mojo.internal.Struct(
    mojo.internal.bindings.chromeos.network_config.mojom.ManagedEAPPropertiesSpec, 'chromeos.network_config.mojom.ManagedEAPProperties', [
      mojo.internal.StructField('arg_anonymous_identity', 0, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedStringSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_client_cert_pattern', 8, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedCertificatePatternSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_client_cert_pkcs11_id', 16, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedStringSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_client_cert_provisioning_profile_id', 24, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedStringSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_client_cert_ref', 32, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedStringSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_client_cert_type', 40, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedStringSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_domain_suffix_match', 48, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedStringListSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_identity', 56, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedStringSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_inner', 64, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedStringSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_outer', 72, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedStringSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_password', 80, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedStringSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_save_credentials', 88, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedBooleanSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_server_ca_pems', 96, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedStringListSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_server_ca_refs', 104, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedStringListSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_subject_alt_name_match', 112, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedSubjectAltNameMatchListSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_subject_match', 120, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedStringSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_tls_version_max', 128, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedStringSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_use_proactive_key_caching', 136, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedBooleanSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_use_system_cas', 144, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedBooleanSpec, null, true, 0, undefined),
    ],
    [[0, 160]]);

// Struct: ManagedSubjectAltNameMatchList
mojo.internal.Struct(
    mojo.internal.bindings.chromeos.network_config.mojom.ManagedSubjectAltNameMatchListSpec, 'chromeos.network_config.mojom.ManagedSubjectAltNameMatchList', [
      mojo.internal.StructField('arg_active_value', 0, 0, mojo.internal.Array(mojo.internal.bindings.chromeos.network_config.mojom.SubjectAltNameSpec, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_policy_source', 8, 0, mojo.internal.bindings.chromeos.network_config.mojom.PolicySourceSpec, 0, false, 0, undefined),
      mojo.internal.StructField('arg_policy_value', 16, 0, mojo.internal.Array(mojo.internal.bindings.chromeos.network_config.mojom.SubjectAltNameSpec, false), null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: ManagedIPConfigProperties
mojo.internal.Struct(
    mojo.internal.bindings.chromeos.network_config.mojom.ManagedIPConfigPropertiesSpec, 'chromeos.network_config.mojom.ManagedIPConfigProperties', [
      mojo.internal.StructField('arg_gateway', 0, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedStringSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_ip_address', 8, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedStringSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_name_servers', 16, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedStringListSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_routing_prefix', 24, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedInt32Spec, null, true, 0, undefined),
      mojo.internal.StructField('arg_type', 32, 0, mojo.internal.bindings.chromeos.network_config.mojom.IPConfigTypeSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_web_proxy_auto_discovery_url', 40, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedStringSpec, null, true, 0, undefined),
    ],
    [[0, 56]]);

// Struct: ManagedIPSecProperties
mojo.internal.Struct(
    mojo.internal.bindings.chromeos.network_config.mojom.ManagedIPSecPropertiesSpec, 'chromeos.network_config.mojom.ManagedIPSecProperties', [
      mojo.internal.StructField('arg_authentication_type', 0, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedStringSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_client_cert_pattern', 8, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedCertificatePatternSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_client_cert_pkcs11_id', 16, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedStringSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_client_cert_provisioning_profile_id', 24, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedStringSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_client_cert_ref', 32, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedStringSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_client_cert_type', 40, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedStringSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_eap', 48, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedEAPPropertiesSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_group', 56, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedStringSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_ike_version', 64, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedInt32Spec, null, true, 0, undefined),
      mojo.internal.StructField('arg_local_identity', 72, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedStringSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_psk', 80, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedStringSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_remote_identity', 88, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedStringSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_save_credentials', 96, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedBooleanSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_server_ca_pems', 104, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedStringListSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_server_ca_refs', 112, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedStringListSpec, null, true, 0, undefined),
    ],
    [[0, 128]]);

// Struct: ManagedL2TPProperties
mojo.internal.Struct(
    mojo.internal.bindings.chromeos.network_config.mojom.ManagedL2TPPropertiesSpec, 'chromeos.network_config.mojom.ManagedL2TPProperties', [
      mojo.internal.StructField('arg_lcp_echo_disabled', 0, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedBooleanSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_password', 8, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedStringSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_save_credentials', 16, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedBooleanSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_username', 24, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedStringSpec, null, true, 0, undefined),
    ],
    [[0, 40]]);

// Struct: ManagedProxyLocation
mojo.internal.Struct(
    mojo.internal.bindings.chromeos.network_config.mojom.ManagedProxyLocationSpec, 'chromeos.network_config.mojom.ManagedProxyLocation', [
      mojo.internal.StructField('arg_host', 0, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedStringSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_port', 8, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedInt32Spec, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: ManagedManualProxySettings
mojo.internal.Struct(
    mojo.internal.bindings.chromeos.network_config.mojom.ManagedManualProxySettingsSpec, 'chromeos.network_config.mojom.ManagedManualProxySettings', [
      mojo.internal.StructField('arg_http_proxy', 0, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedProxyLocationSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_secure_http_proxy', 8, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedProxyLocationSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_ftp_proxy', 16, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedProxyLocationSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_socks', 24, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedProxyLocationSpec, null, true, 0, undefined),
    ],
    [[0, 40]]);

// Struct: ManagedProxySettings
mojo.internal.Struct(
    mojo.internal.bindings.chromeos.network_config.mojom.ManagedProxySettingsSpec, 'chromeos.network_config.mojom.ManagedProxySettings', [
      mojo.internal.StructField('arg_type', 0, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedStringSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_manual', 8, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedManualProxySettingsSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_exclude_domains', 16, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedStringListSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_pac', 24, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedStringSpec, null, true, 0, undefined),
    ],
    [[0, 40]]);

// Struct: ManagedVerifyX509Properties
mojo.internal.Struct(
    mojo.internal.bindings.chromeos.network_config.mojom.ManagedVerifyX509PropertiesSpec, 'chromeos.network_config.mojom.ManagedVerifyX509Properties', [
      mojo.internal.StructField('arg_name', 0, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedStringSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_type', 8, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedStringSpec, null, true, 0, undefined),
    ],
    [[0, 24]]);

// Struct: ManagedOpenVPNProperties
mojo.internal.Struct(
    mojo.internal.bindings.chromeos.network_config.mojom.ManagedOpenVPNPropertiesSpec, 'chromeos.network_config.mojom.ManagedOpenVPNProperties', [
      mojo.internal.StructField('arg_auth', 0, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedStringSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_auth_retry', 8, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedStringSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_auth_no_cache', 16, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedBooleanSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_cipher', 24, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedStringSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_client_cert_pkcs11_id', 32, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedStringSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_client_cert_pattern', 40, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedCertificatePatternSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_client_cert_provisioning_profile_id', 48, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedStringSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_client_cert_ref', 56, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedStringSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_client_cert_type', 64, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedStringSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_compression_algorithm', 72, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedStringSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_extra_hosts', 80, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedStringListSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_ignore_default_route', 88, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedBooleanSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_key_direction', 96, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedStringSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_ns_cert_type', 104, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedStringSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_password', 112, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedStringSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_port', 120, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedInt32Spec, null, true, 0, undefined),
      mojo.internal.StructField('arg_proto', 128, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedStringSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_push_peer_info', 136, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedBooleanSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_remote_cert_eku', 144, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedStringSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_remote_cert_ku', 152, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedStringListSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_remote_cert_tls', 160, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedStringSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_reneg_sec', 168, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedInt32Spec, null, true, 0, undefined),
      mojo.internal.StructField('arg_save_credentials', 176, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedBooleanSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_server_ca_pems', 184, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedStringListSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_server_ca_refs', 192, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedStringListSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_server_cert_ref', 200, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedStringSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_server_poll_timeout', 208, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedInt32Spec, null, true, 0, undefined),
      mojo.internal.StructField('arg_shaper', 216, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedInt32Spec, null, true, 0, undefined),
      mojo.internal.StructField('arg_static_challenge', 224, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedStringSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_tls_auth_contents', 232, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedStringSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_tls_remote', 240, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedStringSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_tls_version_min', 248, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedStringSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_user_authentication_type', 256, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedStringSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_username', 264, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedStringSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_verb', 272, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedStringSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_verify_hash', 280, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedStringSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_verify_x509', 288, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedVerifyX509PropertiesSpec, null, true, 0, undefined),
    ],
    [[0, 304]]);

// Struct: ManagedWireGuardPeerList
mojo.internal.Struct(
    mojo.internal.bindings.chromeos.network_config.mojom.ManagedWireGuardPeerListSpec, 'chromeos.network_config.mojom.ManagedWireGuardPeerList', [
      mojo.internal.StructField('arg_active_value', 0, 0, mojo.internal.Array(mojo.internal.bindings.chromeos.network_config.mojom.WireGuardPeerPropertiesSpec, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_policy_source', 8, 0, mojo.internal.bindings.chromeos.network_config.mojom.PolicySourceSpec, 0, false, 0, undefined),
      mojo.internal.StructField('arg_policy_value', 16, 0, mojo.internal.Array(mojo.internal.bindings.chromeos.network_config.mojom.WireGuardPeerPropertiesSpec, false), null, true, 0, undefined),
    ],
    [[0, 32]]);

// Struct: ManagedWireGuardProperties
mojo.internal.Struct(
    mojo.internal.bindings.chromeos.network_config.mojom.ManagedWireGuardPropertiesSpec, 'chromeos.network_config.mojom.ManagedWireGuardProperties', [
      mojo.internal.StructField('arg_ip_addresses', 0, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedStringListSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_private_key', 8, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedStringSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_public_key', 16, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedStringSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_peers', 24, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedWireGuardPeerListSpec, null, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: ManagedCellularProperties
mojo.internal.Struct(
    mojo.internal.bindings.chromeos.network_config.mojom.ManagedCellularPropertiesSpec, 'chromeos.network_config.mojom.ManagedCellularProperties', [
      mojo.internal.StructField('arg_activation_state', 0, 0, mojo.internal.bindings.chromeos.network_config.mojom.ActivationStateTypeSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_sim_locked', 4, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_support_network_scan', 4, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_allow_roaming', 8, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedBooleanSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_allow_text_messages', 16, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedBooleanSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_apn_list', 24, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedApnListSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_auto_connect', 32, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedBooleanSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_custom_apn_list', 40, 0, mojo.internal.Array(mojo.internal.bindings.chromeos.network_config.mojom.ApnPropertiesSpec, false), null, true, 0, undefined),
      mojo.internal.StructField('arg_eid', 48, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_esn', 56, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_family', 64, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_firmware_revision', 72, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_found_networks', 80, 0, mojo.internal.Array(mojo.internal.bindings.chromeos.network_config.mojom.FoundNetworkPropertiesSpec, false), null, true, 0, undefined),
      mojo.internal.StructField('arg_hardware_revision', 88, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_home_provider', 96, 0, mojo.internal.bindings.chromeos.network_config.mojom.CellularProviderPropertiesSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_iccid', 104, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_imei', 112, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_last_good_apn', 120, 0, mojo.internal.bindings.chromeos.network_config.mojom.ApnPropertiesSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_connected_apn', 128, 0, mojo.internal.bindings.chromeos.network_config.mojom.ApnPropertiesSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_manufacturer', 136, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_mdn', 144, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_meid', 152, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_min', 160, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_model_id', 168, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_network_technology', 176, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_sim_lock_type', 184, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_payment_portal', 192, 0, mojo.internal.bindings.chromeos.network_config.mojom.PaymentPortalPropertiesSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_roaming_state', 200, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_selected_apn', 208, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedApnPropertiesSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_serving_operator', 216, 0, mojo.internal.bindings.chromeos.network_config.mojom.CellularProviderPropertiesSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_signal_strength', 224, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 240]]);

// Struct: ManagedEthernetProperties
mojo.internal.Struct(
    mojo.internal.bindings.chromeos.network_config.mojom.ManagedEthernetPropertiesSpec, 'chromeos.network_config.mojom.ManagedEthernetProperties', [
      mojo.internal.StructField('arg_authentication', 0, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedStringSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_eap', 8, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedEAPPropertiesSpec, null, true, 0, undefined),
    ],
    [[0, 24]]);

// Struct: ManagedVPNProperties
mojo.internal.Struct(
    mojo.internal.bindings.chromeos.network_config.mojom.ManagedVPNPropertiesSpec, 'chromeos.network_config.mojom.ManagedVPNProperties', [
      mojo.internal.StructField('arg_auto_connect', 0, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedBooleanSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_host', 8, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedStringSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_ip_sec', 16, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedIPSecPropertiesSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_l2tp', 24, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedL2TPPropertiesSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_open_vpn', 32, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedOpenVPNPropertiesSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_wireguard', 40, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedWireGuardPropertiesSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_provider_id', 48, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedStringSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_provider_name', 56, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_type', 64, 0, mojo.internal.bindings.chromeos.network_config.mojom.VpnTypeSpec, null, false, 0, undefined),
    ],
    [[0, 80]]);

// Struct: ManagedWiFiProperties
mojo.internal.Struct(
    mojo.internal.bindings.chromeos.network_config.mojom.ManagedWiFiPropertiesSpec, 'chromeos.network_config.mojom.ManagedWiFiProperties', [
      mojo.internal.StructField('arg_allow_gateway_arp_polling', 0, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedBooleanSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_auto_connect', 8, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedBooleanSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_bssid', 16, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_eap', 24, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedEAPPropertiesSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_frequency', 32, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_security', 36, 0, mojo.internal.bindings.chromeos.network_config.mojom.SecurityTypeSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_frequency_list', 40, 0, mojo.internal.Array(mojo.internal.Int32, false), null, true, 0, undefined),
      mojo.internal.StructField('arg_hex_ssid', 48, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedStringSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_hidden_ssid', 56, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedBooleanSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_passphrase', 64, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedStringSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_ssid', 72, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedStringSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_signal_strength', 80, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_is_syncable', 84, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_is_configured_by_active_user', 84, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_passpoint_id', 88, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_passpoint_match_type', 96, 0, mojo.internal.bindings.chromeos.network_config.mojom.MatchTypeSpec, null, false, 0, undefined),
    ],
    [[0, 112]]);

// Struct: UInt32Value
mojo.internal.Struct(
    mojo.internal.bindings.chromeos.network_config.mojom.UInt32ValueSpec, 'chromeos.network_config.mojom.UInt32Value', [
      mojo.internal.StructField('arg_value', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: TrafficCounterProperties
mojo.internal.Struct(
    mojo.internal.bindings.chromeos.network_config.mojom.TrafficCounterPropertiesSpec, 'chromeos.network_config.mojom.TrafficCounterProperties', [
      mojo.internal.StructField('arg_last_reset_time', 0, 0, mojo.internal.bindings.mojo_base.mojom.TimeSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_friendly_date', 8, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_auto_reset', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_user_specified_reset_day', 20, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: ManagedProperties
mojo.internal.Struct(
    mojo.internal.bindings.chromeos.network_config.mojom.ManagedPropertiesSpec, 'chromeos.network_config.mojom.ManagedProperties', [
      mojo.internal.StructField('arg_connection_state', 0, 0, mojo.internal.bindings.chromeos.network_config.mojom.ConnectionStateTypeSpec, 0, false, 0, undefined),
      mojo.internal.StructField('arg_source', 4, 0, mojo.internal.bindings.chromeos.network_config.mojom.OncSourceSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_connectable', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_portal_state', 12, 0, mojo.internal.bindings.chromeos.network_config.mojom.PortalStateSpec, 0, false, 0, undefined),
      mojo.internal.StructField('arg_error_state', 16, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_guid', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_ip_address_config_type', 32, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedStringSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_ip_configs', 40, 0, mojo.internal.Array(mojo.internal.bindings.chromeos.network_config.mojom.IPConfigPropertiesSpec, false), null, true, 0, undefined),
      mojo.internal.StructField('arg_metered', 48, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedBooleanSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_name', 56, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedStringSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_name_servers_config_type', 64, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedStringSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_priority', 72, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedInt32Spec, null, true, 0, undefined),
      mojo.internal.StructField('arg_proxy_settings', 80, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedProxySettingsSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_static_ip_config', 88, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedIPConfigPropertiesSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_saved_ip_config', 96, 0, mojo.internal.bindings.chromeos.network_config.mojom.IPConfigPropertiesSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_type', 104, 0, mojo.internal.bindings.chromeos.network_config.mojom.NetworkTypeSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_type_properties', 112, 0, mojo.internal.bindings.chromeos.network_config.mojom.NetworkTypeManagedPropertiesSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_traffic_counter_properties', 128, 0, mojo.internal.bindings.chromeos.network_config.mojom.TrafficCounterPropertiesSpec, null, true, 0, undefined),
    ],
    [[0, 144]]);

// Struct: AutoConnectConfig
mojo.internal.Struct(
    mojo.internal.bindings.chromeos.network_config.mojom.AutoConnectConfigSpec, 'chromeos.network_config.mojom.AutoConnectConfig', [
      mojo.internal.StructField('arg_value', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: MeteredConfig
mojo.internal.Struct(
    mojo.internal.bindings.chromeos.network_config.mojom.MeteredConfigSpec, 'chromeos.network_config.mojom.MeteredConfig', [
      mojo.internal.StructField('arg_value', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: PriorityConfig
mojo.internal.Struct(
    mojo.internal.bindings.chromeos.network_config.mojom.PriorityConfigSpec, 'chromeos.network_config.mojom.PriorityConfig', [
      mojo.internal.StructField('arg_value', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: VpnTypeConfig
mojo.internal.Struct(
    mojo.internal.bindings.chromeos.network_config.mojom.VpnTypeConfigSpec, 'chromeos.network_config.mojom.VpnTypeConfig', [
      mojo.internal.StructField('arg_value', 0, 0, mojo.internal.bindings.chromeos.network_config.mojom.VpnTypeSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: ProxyLocation
mojo.internal.Struct(
    mojo.internal.bindings.chromeos.network_config.mojom.ProxyLocationSpec, 'chromeos.network_config.mojom.ProxyLocation', [
      mojo.internal.StructField('arg_host', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_port', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: ManualProxySettings
mojo.internal.Struct(
    mojo.internal.bindings.chromeos.network_config.mojom.ManualProxySettingsSpec, 'chromeos.network_config.mojom.ManualProxySettings', [
      mojo.internal.StructField('arg_http_proxy', 0, 0, mojo.internal.bindings.chromeos.network_config.mojom.ProxyLocationSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_secure_http_proxy', 8, 0, mojo.internal.bindings.chromeos.network_config.mojom.ProxyLocationSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_ftp_proxy', 16, 0, mojo.internal.bindings.chromeos.network_config.mojom.ProxyLocationSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_socks', 24, 0, mojo.internal.bindings.chromeos.network_config.mojom.ProxyLocationSpec, null, true, 0, undefined),
    ],
    [[0, 40]]);

// Struct: ProxySettings
mojo.internal.Struct(
    mojo.internal.bindings.chromeos.network_config.mojom.ProxySettingsSpec, 'chromeos.network_config.mojom.ProxySettings', [
      mojo.internal.StructField('arg_type', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_manual', 8, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManualProxySettingsSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_exclude_domains', 16, 0, mojo.internal.Array(mojo.internal.String, false), null, true, 0, undefined),
      mojo.internal.StructField('arg_pac', 24, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 40]]);

// Struct: EAPConfigProperties
mojo.internal.Struct(
    mojo.internal.bindings.chromeos.network_config.mojom.EAPConfigPropertiesSpec, 'chromeos.network_config.mojom.EAPConfigProperties', [
      mojo.internal.StructField('arg_anonymous_identity', 0, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_client_cert_pkcs11_id', 8, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_client_cert_type', 16, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_domain_suffix_match', 24, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_identity', 32, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_inner', 40, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_outer', 48, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_password', 56, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_save_credentials', 64, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_use_system_cas', 64, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_server_ca_pems', 72, 0, mojo.internal.Array(mojo.internal.String, false), null, true, 0, undefined),
      mojo.internal.StructField('arg_subject_alt_name_match', 80, 0, mojo.internal.Array(mojo.internal.bindings.chromeos.network_config.mojom.SubjectAltNameSpec, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_subject_match', 88, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 104]]);

// Struct: SubjectAltName
mojo.internal.Struct(
    mojo.internal.bindings.chromeos.network_config.mojom.SubjectAltNameSpec, 'chromeos.network_config.mojom.SubjectAltName', [
      mojo.internal.StructField('arg_type', 0, 0, mojo.internal.bindings.chromeos.network_config.mojom.TypeSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_value', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: IPSecConfigProperties
mojo.internal.Struct(
    mojo.internal.bindings.chromeos.network_config.mojom.IPSecConfigPropertiesSpec, 'chromeos.network_config.mojom.IPSecConfigProperties', [
      mojo.internal.StructField('arg_authentication_type', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_client_cert_pkcs11_id', 8, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_client_cert_type', 16, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_eap', 24, 0, mojo.internal.bindings.chromeos.network_config.mojom.EAPConfigPropertiesSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_group', 32, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_ike_version', 40, 0, mojo.internal.Int32, 1, false, 0, undefined),
      mojo.internal.StructField('arg_save_credentials', 44, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_local_identity', 48, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_psk', 56, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_remote_identity', 64, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_server_ca_pems', 72, 0, mojo.internal.Array(mojo.internal.String, false), null, true, 0, undefined),
      mojo.internal.StructField('arg_server_ca_refs', 80, 0, mojo.internal.Array(mojo.internal.String, false), null, true, 0, undefined),
    ],
    [[0, 96]]);

// Struct: L2TPConfigProperties
mojo.internal.Struct(
    mojo.internal.bindings.chromeos.network_config.mojom.L2TPConfigPropertiesSpec, 'chromeos.network_config.mojom.L2TPConfigProperties', [
      mojo.internal.StructField('arg_lcp_echo_disabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_save_credentials', 0, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_password', 8, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_username', 16, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 32]]);

// Struct: OpenVPNConfigProperties
mojo.internal.Struct(
    mojo.internal.bindings.chromeos.network_config.mojom.OpenVPNConfigPropertiesSpec, 'chromeos.network_config.mojom.OpenVPNConfigProperties', [
      mojo.internal.StructField('arg_client_cert_pkcs11_id', 0, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_client_cert_type', 8, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_extra_hosts', 16, 0, mojo.internal.Array(mojo.internal.String, false), null, true, 0, undefined),
      mojo.internal.StructField('arg_otp', 24, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_password', 32, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_save_credentials', 40, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_server_ca_pems', 48, 0, mojo.internal.Array(mojo.internal.String, false), null, true, 0, undefined),
      mojo.internal.StructField('arg_server_ca_refs', 56, 0, mojo.internal.Array(mojo.internal.String, false), null, true, 0, undefined),
      mojo.internal.StructField('arg_username', 64, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_user_authentication_type', 72, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 88]]);

// Struct: WireGuardConfigProperties
mojo.internal.Struct(
    mojo.internal.bindings.chromeos.network_config.mojom.WireGuardConfigPropertiesSpec, 'chromeos.network_config.mojom.WireGuardConfigProperties', [
      mojo.internal.StructField('arg_ip_addresses', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, true, 0, undefined),
      mojo.internal.StructField('arg_private_key', 8, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_peers', 16, 0, mojo.internal.Array(mojo.internal.bindings.chromeos.network_config.mojom.WireGuardPeerPropertiesSpec, false), null, true, 0, undefined),
    ],
    [[0, 32]]);

// Struct: TextMessagesAllowState
mojo.internal.Struct(
    mojo.internal.bindings.chromeos.network_config.mojom.TextMessagesAllowStateSpec, 'chromeos.network_config.mojom.TextMessagesAllowState', [
      mojo.internal.StructField('arg_allow_text_messages', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: CellularConfigProperties
mojo.internal.Struct(
    mojo.internal.bindings.chromeos.network_config.mojom.CellularConfigPropertiesSpec, 'chromeos.network_config.mojom.CellularConfigProperties', [
      mojo.internal.StructField('arg_apn', 0, 0, mojo.internal.bindings.chromeos.network_config.mojom.ApnPropertiesSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_roaming', 8, 0, mojo.internal.bindings.chromeos.network_config.mojom.RoamingPropertiesSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_text_message_allow_state', 16, 0, mojo.internal.bindings.chromeos.network_config.mojom.TextMessagesAllowStateSpec, null, true, 0, undefined),
    ],
    [[0, 32]]);

// Struct: EthernetConfigProperties
mojo.internal.Struct(
    mojo.internal.bindings.chromeos.network_config.mojom.EthernetConfigPropertiesSpec, 'chromeos.network_config.mojom.EthernetConfigProperties', [
      mojo.internal.StructField('arg_authentication', 0, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_eap', 8, 0, mojo.internal.bindings.chromeos.network_config.mojom.EAPConfigPropertiesSpec, null, true, 0, undefined),
    ],
    [[0, 24]]);

// Struct: VPNConfigProperties
mojo.internal.Struct(
    mojo.internal.bindings.chromeos.network_config.mojom.VPNConfigPropertiesSpec, 'chromeos.network_config.mojom.VPNConfigProperties', [
      mojo.internal.StructField('arg_host', 0, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_ip_sec', 8, 0, mojo.internal.bindings.chromeos.network_config.mojom.IPSecConfigPropertiesSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_l2tp', 16, 0, mojo.internal.bindings.chromeos.network_config.mojom.L2TPConfigPropertiesSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_open_vpn', 24, 0, mojo.internal.bindings.chromeos.network_config.mojom.OpenVPNConfigPropertiesSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_wireguard', 32, 0, mojo.internal.bindings.chromeos.network_config.mojom.WireGuardConfigPropertiesSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_type', 40, 0, mojo.internal.bindings.chromeos.network_config.mojom.VpnTypeConfigSpec, null, true, 0, undefined),
    ],
    [[0, 56]]);

// Struct: WiFiConfigProperties
mojo.internal.Struct(
    mojo.internal.bindings.chromeos.network_config.mojom.WiFiConfigPropertiesSpec, 'chromeos.network_config.mojom.WiFiConfigProperties', [
      mojo.internal.StructField('arg_eap', 0, 0, mojo.internal.bindings.chromeos.network_config.mojom.EAPConfigPropertiesSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_passphrase', 8, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_ssid', 16, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_security', 24, 0, mojo.internal.bindings.chromeos.network_config.mojom.SecurityTypeSpec, 0, false, 0, undefined),
      mojo.internal.StructField('arg_hidden_ssid', 28, 0, mojo.internal.bindings.chromeos.network_config.mojom.HiddenSsidModeSpec, 0, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: ConfigProperties
mojo.internal.Struct(
    mojo.internal.bindings.chromeos.network_config.mojom.ConfigPropertiesSpec, 'chromeos.network_config.mojom.ConfigProperties', [
      mojo.internal.StructField('arg_auto_connect', 0, 0, mojo.internal.bindings.chromeos.network_config.mojom.AutoConnectConfigSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_guid', 8, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_ip_address_config_type', 16, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_metered', 24, 0, mojo.internal.bindings.chromeos.network_config.mojom.MeteredConfigSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_name', 32, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_name_servers_config_type', 40, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_priority', 48, 0, mojo.internal.bindings.chromeos.network_config.mojom.PriorityConfigSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_proxy_settings', 56, 0, mojo.internal.bindings.chromeos.network_config.mojom.ProxySettingsSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_static_ip_config', 64, 0, mojo.internal.bindings.chromeos.network_config.mojom.IPConfigPropertiesSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_type_config', 72, 0, mojo.internal.bindings.chromeos.network_config.mojom.NetworkTypeConfigPropertiesSpec, null, false, 0, undefined),
    ],
    [[0, 96]]);

// Struct: CellularSimState
mojo.internal.Struct(
    mojo.internal.bindings.chromeos.network_config.mojom.CellularSimStateSpec, 'chromeos.network_config.mojom.CellularSimState', [
      mojo.internal.StructField('arg_current_pin_or_puk', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_new_pin', 8, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_require_pin', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: GlobalPolicy
mojo.internal.Struct(
    mojo.internal.bindings.chromeos.network_config.mojom.GlobalPolicySpec, 'chromeos.network_config.mojom.GlobalPolicy', [
      mojo.internal.StructField('arg_allow_apn_modification', 0, 0, mojo.internal.Bool, true, false, 0, undefined),
      mojo.internal.StructField('arg_allow_cellular_sim_lock', 0, 1, mojo.internal.Bool, true, false, 0, undefined),
      mojo.internal.StructField('arg_allow_cellular_hotspot', 0, 2, mojo.internal.Bool, true, false, 0, undefined),
      mojo.internal.StructField('arg_allow_only_policy_cellular_networks', 0, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_allow_only_policy_networks_to_autoconnect', 0, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_allow_only_policy_wifi_networks_to_connect', 0, 5, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_allow_only_policy_wifi_networks_to_connect_if_available', 0, 6, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_dns_queries_monitored', 0, 7, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_report_xdr_events_enabled', 1, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_recommended_values_are_ephemeral', 1, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_user_created_network_configurations_are_ephemeral', 1, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_allow_text_messages', 4, 0, mojo.internal.bindings.chromeos.network_config.mojom.SuppressionTypeSpec, 0, false, 0, undefined),
      mojo.internal.StructField('arg_blocked_hex_ssids', 8, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: VpnProvider
mojo.internal.Struct(
    mojo.internal.bindings.chromeos.network_config.mojom.VpnProviderSpec, 'chromeos.network_config.mojom.VpnProvider', [
      mojo.internal.StructField('arg_type', 0, 0, mojo.internal.bindings.chromeos.network_config.mojom.VpnTypeSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_provider_id', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_provider_name', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_app_id', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_last_launch_time', 32, 0, mojo.internal.bindings.mojo_base.mojom.TimeSpec, null, false, 0, undefined),
    ],
    [[0, 48]]);

// Struct: NetworkCertificate
mojo.internal.Struct(
    mojo.internal.bindings.chromeos.network_config.mojom.NetworkCertificateSpec, 'chromeos.network_config.mojom.NetworkCertificate', [
      mojo.internal.StructField('arg_type', 0, 0, mojo.internal.bindings.chromeos.network_config.mojom.CertificateTypeSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_available_for_network_auth', 4, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_hardware_backed', 4, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_device_wide', 4, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_hash', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_issued_by', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_issued_to', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_pem_or_id', 32, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 48]]);

// Struct: AlwaysOnVpnProperties
mojo.internal.Struct(
    mojo.internal.bindings.chromeos.network_config.mojom.AlwaysOnVpnPropertiesSpec, 'chromeos.network_config.mojom.AlwaysOnVpnProperties', [
      mojo.internal.StructField('arg_mode', 0, 0, mojo.internal.bindings.chromeos.network_config.mojom.AlwaysOnVpnModeSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_service_guid', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: TrafficCounter
mojo.internal.Struct(
    mojo.internal.bindings.chromeos.network_config.mojom.TrafficCounterSpec, 'chromeos.network_config.mojom.TrafficCounter', [
      mojo.internal.StructField('arg_source', 0, 0, mojo.internal.bindings.chromeos.network_config.mojom.TrafficCounterSourceSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_rx_bytes', 8, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_tx_bytes', 16, 0, mojo.internal.Uint64, 0, false, 0, undefined),
    ],
    [[0, 32]]);
mojo.internal.Struct(
    mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_AddObserver_ParamsSpec, 'chromeos.network_config.mojom.CrosNetworkConfig_AddObserver_Params', [
      mojo.internal.StructField('arg_observer', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfigObserverRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_GetNetworkState_ParamsSpec, 'chromeos.network_config.mojom.CrosNetworkConfig_GetNetworkState_Params', [
      mojo.internal.StructField('arg_guid', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_GetNetworkState_ResponseParamsSpec, 'chromeos.network_config.mojom.CrosNetworkConfig_GetNetworkState_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.chromeos.network_config.mojom.NetworkStatePropertiesSpec, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_GetNetworkStateList_ParamsSpec, 'chromeos.network_config.mojom.CrosNetworkConfig_GetNetworkStateList_Params', [
      mojo.internal.StructField('arg_filter', 0, 0, mojo.internal.bindings.chromeos.network_config.mojom.NetworkFilterSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_GetNetworkStateList_ResponseParamsSpec, 'chromeos.network_config.mojom.CrosNetworkConfig_GetNetworkStateList_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.Array(mojo.internal.bindings.chromeos.network_config.mojom.NetworkStatePropertiesSpec, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_GetDeviceStateList_ParamsSpec, 'chromeos.network_config.mojom.CrosNetworkConfig_GetDeviceStateList_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_GetDeviceStateList_ResponseParamsSpec, 'chromeos.network_config.mojom.CrosNetworkConfig_GetDeviceStateList_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.Array(mojo.internal.bindings.chromeos.network_config.mojom.DeviceStatePropertiesSpec, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_GetManagedProperties_ParamsSpec, 'chromeos.network_config.mojom.CrosNetworkConfig_GetManagedProperties_Params', [
      mojo.internal.StructField('arg_guid', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_GetManagedProperties_ResponseParamsSpec, 'chromeos.network_config.mojom.CrosNetworkConfig_GetManagedProperties_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedPropertiesSpec, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_SetProperties_ParamsSpec, 'chromeos.network_config.mojom.CrosNetworkConfig_SetProperties_Params', [
      mojo.internal.StructField('arg_guid', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_properties', 8, 0, mojo.internal.bindings.chromeos.network_config.mojom.ConfigPropertiesSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_SetProperties_ResponseParamsSpec, 'chromeos.network_config.mojom.CrosNetworkConfig_SetProperties_ResponseParams', [
      mojo.internal.StructField('arg_success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_error_message', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_ConfigureNetwork_ParamsSpec, 'chromeos.network_config.mojom.CrosNetworkConfig_ConfigureNetwork_Params', [
      mojo.internal.StructField('arg_properties', 0, 0, mojo.internal.bindings.chromeos.network_config.mojom.ConfigPropertiesSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_shared', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_ConfigureNetwork_ResponseParamsSpec, 'chromeos.network_config.mojom.CrosNetworkConfig_ConfigureNetwork_ResponseParams', [
      mojo.internal.StructField('arg_guid', 0, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_error_message', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_ForgetNetwork_ParamsSpec, 'chromeos.network_config.mojom.CrosNetworkConfig_ForgetNetwork_Params', [
      mojo.internal.StructField('arg_guid', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_ForgetNetwork_ResponseParamsSpec, 'chromeos.network_config.mojom.CrosNetworkConfig_ForgetNetwork_ResponseParams', [
      mojo.internal.StructField('arg_success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_SetNetworkTypeEnabledState_ParamsSpec, 'chromeos.network_config.mojom.CrosNetworkConfig_SetNetworkTypeEnabledState_Params', [
      mojo.internal.StructField('arg_type', 0, 0, mojo.internal.bindings.chromeos.network_config.mojom.NetworkTypeSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_enabled', 4, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_SetNetworkTypeEnabledState_ResponseParamsSpec, 'chromeos.network_config.mojom.CrosNetworkConfig_SetNetworkTypeEnabledState_ResponseParams', [
      mojo.internal.StructField('arg_success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_SetCellularSimState_ParamsSpec, 'chromeos.network_config.mojom.CrosNetworkConfig_SetCellularSimState_Params', [
      mojo.internal.StructField('arg_state', 0, 0, mojo.internal.bindings.chromeos.network_config.mojom.CellularSimStateSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_SetCellularSimState_ResponseParamsSpec, 'chromeos.network_config.mojom.CrosNetworkConfig_SetCellularSimState_ResponseParams', [
      mojo.internal.StructField('arg_success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_SelectCellularMobileNetwork_ParamsSpec, 'chromeos.network_config.mojom.CrosNetworkConfig_SelectCellularMobileNetwork_Params', [
      mojo.internal.StructField('arg_guid', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_network_id', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_SelectCellularMobileNetwork_ResponseParamsSpec, 'chromeos.network_config.mojom.CrosNetworkConfig_SelectCellularMobileNetwork_ResponseParams', [
      mojo.internal.StructField('arg_success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_RequestNetworkScan_ParamsSpec, 'chromeos.network_config.mojom.CrosNetworkConfig_RequestNetworkScan_Params', [
      mojo.internal.StructField('arg_type', 0, 0, mojo.internal.bindings.chromeos.network_config.mojom.NetworkTypeSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_GetGlobalPolicy_ParamsSpec, 'chromeos.network_config.mojom.CrosNetworkConfig_GetGlobalPolicy_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_GetGlobalPolicy_ResponseParamsSpec, 'chromeos.network_config.mojom.CrosNetworkConfig_GetGlobalPolicy_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.chromeos.network_config.mojom.GlobalPolicySpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_StartConnect_ParamsSpec, 'chromeos.network_config.mojom.CrosNetworkConfig_StartConnect_Params', [
      mojo.internal.StructField('arg_guid', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_StartConnect_ResponseParamsSpec, 'chromeos.network_config.mojom.CrosNetworkConfig_StartConnect_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.chromeos.network_config.mojom.StartConnectResultSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_message', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_StartDisconnect_ParamsSpec, 'chromeos.network_config.mojom.CrosNetworkConfig_StartDisconnect_Params', [
      mojo.internal.StructField('arg_guid', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_StartDisconnect_ResponseParamsSpec, 'chromeos.network_config.mojom.CrosNetworkConfig_StartDisconnect_ResponseParams', [
      mojo.internal.StructField('arg_success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_SetVpnProviders_ParamsSpec, 'chromeos.network_config.mojom.CrosNetworkConfig_SetVpnProviders_Params', [
      mojo.internal.StructField('arg_providers', 0, 0, mojo.internal.Array(mojo.internal.bindings.chromeos.network_config.mojom.VpnProviderSpec, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_GetVpnProviders_ParamsSpec, 'chromeos.network_config.mojom.CrosNetworkConfig_GetVpnProviders_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_GetVpnProviders_ResponseParamsSpec, 'chromeos.network_config.mojom.CrosNetworkConfig_GetVpnProviders_ResponseParams', [
      mojo.internal.StructField('arg_providers', 0, 0, mojo.internal.Array(mojo.internal.bindings.chromeos.network_config.mojom.VpnProviderSpec, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_GetNetworkCertificates_ParamsSpec, 'chromeos.network_config.mojom.CrosNetworkConfig_GetNetworkCertificates_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_GetNetworkCertificates_ResponseParamsSpec, 'chromeos.network_config.mojom.CrosNetworkConfig_GetNetworkCertificates_ResponseParams', [
      mojo.internal.StructField('arg_server_cas', 0, 0, mojo.internal.Array(mojo.internal.bindings.chromeos.network_config.mojom.NetworkCertificateSpec, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_user_certs', 8, 0, mojo.internal.Array(mojo.internal.bindings.chromeos.network_config.mojom.NetworkCertificateSpec, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_GetAlwaysOnVpn_ParamsSpec, 'chromeos.network_config.mojom.CrosNetworkConfig_GetAlwaysOnVpn_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_GetAlwaysOnVpn_ResponseParamsSpec, 'chromeos.network_config.mojom.CrosNetworkConfig_GetAlwaysOnVpn_ResponseParams', [
      mojo.internal.StructField('arg_properties', 0, 0, mojo.internal.bindings.chromeos.network_config.mojom.AlwaysOnVpnPropertiesSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_SetAlwaysOnVpn_ParamsSpec, 'chromeos.network_config.mojom.CrosNetworkConfig_SetAlwaysOnVpn_Params', [
      mojo.internal.StructField('arg_properties', 0, 0, mojo.internal.bindings.chromeos.network_config.mojom.AlwaysOnVpnPropertiesSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_GetSupportedVpnTypes_ParamsSpec, 'chromeos.network_config.mojom.CrosNetworkConfig_GetSupportedVpnTypes_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_GetSupportedVpnTypes_ResponseParamsSpec, 'chromeos.network_config.mojom.CrosNetworkConfig_GetSupportedVpnTypes_ResponseParams', [
      mojo.internal.StructField('arg_vpn_types', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_RequestTrafficCounters_ParamsSpec, 'chromeos.network_config.mojom.CrosNetworkConfig_RequestTrafficCounters_Params', [
      mojo.internal.StructField('arg_guid', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_RequestTrafficCounters_ResponseParamsSpec, 'chromeos.network_config.mojom.CrosNetworkConfig_RequestTrafficCounters_ResponseParams', [
      mojo.internal.StructField('arg_traffic_counters', 0, 0, mojo.internal.Array(mojo.internal.bindings.chromeos.network_config.mojom.TrafficCounterSpec, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_ResetTrafficCounters_ParamsSpec, 'chromeos.network_config.mojom.CrosNetworkConfig_ResetTrafficCounters_Params', [
      mojo.internal.StructField('arg_guid', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_SetTrafficCountersResetDay_ParamsSpec, 'chromeos.network_config.mojom.CrosNetworkConfig_SetTrafficCountersResetDay_Params', [
      mojo.internal.StructField('arg_guid', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_day', 8, 0, mojo.internal.bindings.chromeos.network_config.mojom.UInt32ValueSpec, null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_SetTrafficCountersResetDay_ResponseParamsSpec, 'chromeos.network_config.mojom.CrosNetworkConfig_SetTrafficCountersResetDay_ResponseParams', [
      mojo.internal.StructField('arg_success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_CreateCustomApn_ParamsSpec, 'chromeos.network_config.mojom.CrosNetworkConfig_CreateCustomApn_Params', [
      mojo.internal.StructField('arg_network_guid', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_apn', 8, 0, mojo.internal.bindings.chromeos.network_config.mojom.ApnPropertiesSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_CreateCustomApn_ResponseParamsSpec, 'chromeos.network_config.mojom.CrosNetworkConfig_CreateCustomApn_ResponseParams', [
      mojo.internal.StructField('arg_success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_CreateExclusivelyEnabledCustomApn_ParamsSpec, 'chromeos.network_config.mojom.CrosNetworkConfig_CreateExclusivelyEnabledCustomApn_Params', [
      mojo.internal.StructField('arg_network_guid', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_apn', 8, 0, mojo.internal.bindings.chromeos.network_config.mojom.ApnPropertiesSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_CreateExclusivelyEnabledCustomApn_ResponseParamsSpec, 'chromeos.network_config.mojom.CrosNetworkConfig_CreateExclusivelyEnabledCustomApn_ResponseParams', [
      mojo.internal.StructField('arg_success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_RemoveCustomApn_ParamsSpec, 'chromeos.network_config.mojom.CrosNetworkConfig_RemoveCustomApn_Params', [
      mojo.internal.StructField('arg_network_guid', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_apn_id', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_ModifyCustomApn_ParamsSpec, 'chromeos.network_config.mojom.CrosNetworkConfig_ModifyCustomApn_Params', [
      mojo.internal.StructField('arg_network_guid', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_apn', 8, 0, mojo.internal.bindings.chromeos.network_config.mojom.ApnPropertiesSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfigObserver_OnActiveNetworksChanged_ParamsSpec, 'chromeos.network_config.mojom.CrosNetworkConfigObserver_OnActiveNetworksChanged_Params', [
      mojo.internal.StructField('arg_networks', 0, 0, mojo.internal.Array(mojo.internal.bindings.chromeos.network_config.mojom.NetworkStatePropertiesSpec, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfigObserver_OnNetworkStateChanged_ParamsSpec, 'chromeos.network_config.mojom.CrosNetworkConfigObserver_OnNetworkStateChanged_Params', [
      mojo.internal.StructField('arg_network', 0, 0, mojo.internal.bindings.chromeos.network_config.mojom.NetworkStatePropertiesSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfigObserver_OnNetworkStateListChanged_ParamsSpec, 'chromeos.network_config.mojom.CrosNetworkConfigObserver_OnNetworkStateListChanged_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfigObserver_OnDeviceStateListChanged_ParamsSpec, 'chromeos.network_config.mojom.CrosNetworkConfigObserver_OnDeviceStateListChanged_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfigObserver_OnVpnProvidersChanged_ParamsSpec, 'chromeos.network_config.mojom.CrosNetworkConfigObserver_OnVpnProvidersChanged_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfigObserver_OnNetworkCertificatesChanged_ParamsSpec, 'chromeos.network_config.mojom.CrosNetworkConfigObserver_OnNetworkCertificatesChanged_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfigObserver_OnPoliciesApplied_ParamsSpec, 'chromeos.network_config.mojom.CrosNetworkConfigObserver_OnPoliciesApplied_Params', [
      mojo.internal.StructField('arg_userhash', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

