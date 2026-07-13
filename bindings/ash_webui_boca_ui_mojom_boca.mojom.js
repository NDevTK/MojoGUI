// Auto-generated MojoJS binding
 // Source: chromium_src/ash/webui/boca_ui/mojom/boca.mojom
 // Module: ash.boca.mojom

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
      _interfaceScrambleMap: {"android_webview.mojom.LocalMainFrame": true, "android_webview.mojom.FrameHost": true, "android_webview.mojom.RenderMessageFilter": true, "android_webview.mojom.Renderer": true, "ash.mojom.HidPreservingBluetoothStateController": true, "ash.annotator.mojom.UntrustedAnnotatorPage": true, "ash.annotator.mojom.UntrustedAnnotatorPageHandler": true, "ash.annotator.mojom.UntrustedAnnotatorPageHandlerFactory": true, "ash.boca_receiver.mojom.UntrustedPage": true, "ash.boca_receiver.mojom.UntrustedPageHandlerFactory": true, "ash.boca.mojom.PageHandler": true, "ash.boca.mojom.Page": true, "ash.boca.mojom.BocaPageHandlerFactory": true, "ash.camera_app.mojom.TabletModeMonitor": true, "ash.camera_app.mojom.ScreenStateMonitor": true, "ash.camera_app.mojom.ScreenLockedMonitor": true, "ash.camera_app.mojom.ExternalScreenMonitor": true, "ash.camera_app.mojom.CameraUsageOwnershipMonitor": true, "ash.camera_app.mojom.LidStateMonitor": true, "ash.camera_app.mojom.SWPrivacySwitchMonitor": true, "ash.camera_app.mojom.WindowStateMonitor": true, "ash.camera_app.mojom.StorageMonitor": true, "ash.camera_app.mojom.WindowStateController": true, "ash.camera_app.mojom.CameraAppHelper": true, "ash.camera_app.mojom.EventsSender": true, "ash.camera_app.mojom.PdfBuilder": true, "ash.color_internals.mojom.WallpaperColorsObserver": true, "ash.color_internals.mojom.WallpaperColorsHandler": true, "ash.common.mojom.AcceleratorFetcherObserver": true, "ash.common.mojom.AcceleratorFetcher": true, "ash.common.mojom.ForceHiddenElementsVisibleObserver": true, "ash.common.mojom.AccessibilityFeatures": true, "ash.personalization_app.mojom.SeaPenObserver": true, "ash.personalization_app.mojom.SeaPenProvider": true, "ash.common.mojom.ShortcutInputObserver": true, "ash.common.mojom.ShortcutInputProvider": true, "ash.common.mojom.WebUiSyslogEmitter": true, "ash.mojom.demo_mode.UntrustedPageHandlerFactory": true, "ash.mojom.demo_mode.UntrustedPageHandler": true, "ash.diagnostics.mojom.KeyboardObserver": true, "ash.diagnostics.mojom.InternalDisplayPowerStateObserver": true, "ash.diagnostics.mojom.TabletModeObserver": true, "ash.diagnostics.mojom.LidStateObserver": true, "ash.diagnostics.mojom.ConnectedDevicesObserver": true, "ash.diagnostics.mojom.InputDataProvider": true, "ash.diagnostics.mojom.NetworkListObserver": true, "ash.diagnostics.mojom.NetworkStateObserver": true, "ash.diagnostics.mojom.NetworkHealthProvider": true, "ash.diagnostics.mojom.BatteryChargeStatusObserver": true, "ash.diagnostics.mojom.BatteryHealthObserver": true, "ash.diagnostics.mojom.MemoryUsageObserver": true, "ash.diagnostics.mojom.CpuUsageObserver": true, "ash.diagnostics.mojom.SystemDataProvider": true, "ash.diagnostics.mojom.RoutineRunner": true, "ash.diagnostics.mojom.SystemRoutineController": true, "ash.eche_app.mojom.SignalingMessageExchanger": true, "ash.eche_app.mojom.SignalingMessageObserver": true, "ash.eche_app.mojom.SystemInfoProvider": true, "ash.eche_app.mojom.SystemInfoObserver": true, "ash.eche_app.mojom.AccessibilityProvider": true, "ash.eche_app.mojom.AccessibilityObserver": true, "ash.eche_app.mojom.UidGenerator": true, "ash.eche_app.mojom.NotificationGenerator": true, "ash.eche_app.mojom.DisplayStreamHandler": true, "ash.eche_app.mojom.StreamActionObserver": true, "ash.eche_app.mojom.StreamOrientationObserver": true, "ash.eche_app.mojom.ConnectionStatusObserver": true, "ash.eche_app.mojom.KeyboardLayoutHandler": true, "ash.eche_app.mojom.KeyboardLayoutObserver": true, "ash.file_manager.mojom.PageHandlerFactory": true, "ash.file_manager.mojom.PageHandler": true, "ash.file_manager.mojom.Page": true, "ash.mojom.files_internals.PageHandler": true, "ash.firmware_update.mojom.UpdateObserver": true, "ash.firmware_update.mojom.DeviceRequestObserver": true, "ash.firmware_update.mojom.UpdateProgressObserver": true, "ash.firmware_update.mojom.UpdateProvider": true, "ash.firmware_update.mojom.InstallController": true, "ash.firmware_update.mojom.SystemUtils": true, "ash.focus_mode.mojom.MediaClient": true, "ash.focus_mode.mojom.TrackProvider": true, "ash.graduation_ui.mojom.GraduationUiHandler": true, "ash.growth.mojom.PageHandler": true, "ash.help_app.mojom.PageHandlerFactory": true, "ash.help_app.mojom.PageHandler": true, "ash.help_app.mojom.SearchResultsObserver": true, "ash.help_app.mojom.SearchHandler": true, "ash.mall.mojom.PageHandler": true, "ash.media_app_ui.mojom.PageHandlerFactory": true, "ash.media_app_ui.mojom.PageHandler": true, "ash.media_app_ui.mojom.UntrustedServiceFactory": true, "ash.media_app_ui.mojom.OcrUntrustedService": true, "ash.media_app_ui.mojom.OcrUntrustedPage": true, "ash.media_app_ui.mojom.MahiUntrustedService": true, "ash.media_app_ui.mojom.MahiUntrustedPage": true, "ash.media_app_ui.mojom.MantisUntrustedService": true, "ash.media_app_ui.mojom.MantisUntrustedPage": true, "ash.os_feedback_ui.mojom.HelpContentProvider": true, "ash.os_feedback_ui.mojom.FeedbackServiceProvider": true, "ash.personalization_app.mojom.WallpaperObserver": true, "ash.personalization_app.mojom.WallpaperProvider": true, "ash.personalization_app.mojom.ThemeObserver": true, "ash.personalization_app.mojom.ThemeProvider": true, "ash.personalization_app.mojom.UserImageObserver": true, "ash.personalization_app.mojom.UserProvider": true, "ash.personalization_app.mojom.AmbientObserver": true, "ash.personalization_app.mojom.AmbientProvider": true, "ash.personalization_app.mojom.KeyboardBacklightObserver": true, "ash.personalization_app.mojom.KeyboardBacklightProvider": true, "ash.personalization_app.mojom.SearchResultsObserver": true, "ash.personalization_app.mojom.SearchHandler": true, "ash.printing.print_preview.mojom.DestinationProvider": true, "ash.projector.mojom.UntrustedProjectorPageHandler": true, "ash.projector.mojom.UntrustedProjectorPage": true, "ash.projector.mojom.UntrustedProjectorPageHandlerFactory": true, "ash.recorder_app.mojom.ModelStateMonitor": true, "ash.recorder_app.mojom.QuietModeMonitor": true, "ash.recorder_app.mojom.PageHandler": true, "ash.mojom.sample_swa.ChildUntrustedPage": true, "ash.mojom.sample_swa.ParentTrustedPage": true, "ash.mojom.sample_swa.PageHandlerFactory": true, "ash.mojom.sample_swa.PageHandler": true, "ash.mojom.sample_swa.Page": true, "ash.mojom.sample_swa.UntrustedPageInterfacesFactory": true, "ash.sanitize_ui.mojom.SettingsResetter": true, "ash.mojom.scanner_feedback_ui.PageHandler": true, "ash.scanning.mojom.ScanJobObserver": true, "ash.scanning.mojom.ScanService": true, "ash.scanning.mojom.MultiPageScanController": true, "ash.shimless_rma.mojom.ErrorObserver": true, "ash.shimless_rma.mojom.OsUpdateObserver": true, "ash.shimless_rma.mojom.CalibrationObserver": true, "ash.shimless_rma.mojom.ProvisioningObserver": true, "ash.shimless_rma.mojom.HardwareWriteProtectionStateObserver": true, "ash.shimless_rma.mojom.PowerCableStateObserver": true, "ash.shimless_rma.mojom.ExternalDiskStateObserver": true, "ash.shimless_rma.mojom.HardwareVerificationStatusObserver": true, "ash.shimless_rma.mojom.FinalizationObserver": true, "ash.shimless_rma.mojom.UpdateRoFirmwareObserver": true, "ash.shimless_rma.mojom.ShimlessRmaService": true, "ash.shortcut_customization.mojom.SearchResultsAvailabilityObserver": true, "ash.shortcut_customization.mojom.SearchHandler": true, "ash.shortcut_customization.mojom.AcceleratorsUpdatedObserver": true, "ash.shortcut_customization.mojom.PolicyUpdatedObserver": true, "ash.shortcut_customization.mojom.AcceleratorConfigurationProvider": true, "ash.mojom.status_area_internals.PageHandler": true, "cc.mojom.RenderFrameMetadataObserver": true, "cc.mojom.RenderFrameMetadataObserverClient": true, "actor.ui.mojom.ActorOverlayPageHandlerFactory": true, "actor.ui.mojom.ActorOverlayPageHandler": true, "actor.ui.mojom.ActorOverlayPage": true, "contextual_tasks.mojom.PageHandler": true, "contextual_tasks.mojom.Page": true, "contextual_tasks.mojom.PageHandlerFactory": true, "contextual_tasks_internals.mojom.ContextualTasksInternalsPageHandlerFactory": true, "contextual_tasks_internals.mojom.ContextualTasksInternalsPageHandler": true, "contextual_tasks_internals.mojom.ContextualTasksInternalsPage": true, "glic.mojom.ExperimentalOptInPageHandler": true, "glic.mojom.PreloadPage": true, "glic.mojom.Page": true, "glic.mojom.GlicPreloadHandler": true, "glic.mojom.GlicPreloadHandlerFactory": true, "glic.mojom.PageHandlerFactory": true, "glic.mojom.PageHandler": true, "glic.mojom.PinCandidatesObserver": true, "glic.mojom.ActorClient": true, "glic.mojom.ActorHandler": true, "glic.mojom.AnnotationHandler": true, "glic.mojom.SkillsHandler": true, "glic.mojom.SkillsClient": true, "glic.mojom.WebClientHandler": true, "glic.mojom.TabDataHandler": true, "glic.mojom.TabFaviconHandler": true, "glic.mojom.ExperimentalTriggeringUpdatesHandler": true, "glic.mojom.ExperimentalTriggeringClient": true, "glic.mojom.WebClient": true, "glic.mojom.CaptureRegionObserver": true, "glic.mojom.InternalsPageHandler": true, "glic.mojom.InternalsPageHandlerFactory": true, "glic.selection.SelectionOverlayPageHandlerFactory": true, "glic.selection.SelectionOverlayPageHandler": true, "glic.selection.SelectionOverlayPage": true, "lens.mojom.LensPageHandlerFactory": true, "lens.mojom.LensPageHandler": true, "lens.mojom.LensPage": true, "lens.mojom.LensGhostLoaderPageHandlerFactory": true, "lens.mojom.LensGhostLoaderPage": true, "lens.mojom.LensSidePanelPageHandlerFactory": true, "lens.mojom.LensSidePanelPageHandler": true, "lens.mojom.LensSidePanelPage": true, "media.mojom.MediaEngagementScoreDetailsProvider": true, "file_suggestion.mojom.DriveSuggestionHandler": true, "file_suggestion.mojom.MicrosoftFilesPageHandler": true, "ntp.authentication.mojom.MicrosoftAuthPageHandler": true, "ntp.calendar.mojom.GoogleCalendarPageHandler": true, "ntp.calendar.mojom.OutlookCalendarPageHandler": true, "ntp.most_relevant_tab_resumption.mojom.PageHandler": true, "ntp.tab_groups.mojom.PageHandler": true, "certificate_manager.mojom.CertificateManagerPageHandlerFactory": true, "certificate_manager.mojom.CertificateManagerPageHandler": true, "certificate_manager.mojom.CertificateManagerPage": true, "drive_picker_host.mojom.DrivePickerResultHandler": true, "access_code_cast.mojom.PageHandlerFactory": true, "access_code_cast.mojom.PageHandler": true, "access_code_cast.mojom.Page": true, "ai_overlay_dialog.mojom.PageHandlerFactory": true, "ai_overlay_dialog.mojom.PageHandler": true, "ai_overlay_dialog.mojom.Page": true, "ai_overlay_dialog.mojom.AiOverlayTools": true, "app_home.mojom.PageHandlerFactory": true, "app_home.mojom.PageHandler": true, "app_home.mojom.Page": true, "mojom.app_service_internals.AppServiceInternalsPageHandler": true, "add_supervision.mojom.AddSupervisionHandler": true, "ash.app_install.mojom.AppInfoActions": true, "ash.app_install.mojom.ConnectionErrorActions": true, "ash.app_install.mojom.PageHandlerFactory": true, "ash.app_install.mojom.PageHandler": true, "ash.cloud_upload.mojom.PageHandlerFactory": true, "ash.cloud_upload.mojom.PageHandler": true, "ash.crostini_installer.mojom.PageHandlerFactory": true, "ash.crostini_installer.mojom.PageHandler": true, "ash.crostini_installer.mojom.Page": true, "dlp_internals.mojom.ReportingObserver": true, "dlp_internals.mojom.PageHandler": true, "emoji_picker.mojom.PageHandlerFactory": true, "emoji_picker.mojom.PageHandler": true, "new_window_proxy.mojom.NewWindowProxy": true, "enterprise_reporting.mojom.PageHandlerFactory": true, "enterprise_reporting.mojom.PageHandler": true, "enterprise_reporting.mojom.Page": true, "ash.extended_updates.mojom.PageHandlerFactory": true, "ash.extended_updates.mojom.PageHandler": true, "ash.extended_updates.mojom.Page": true, "launcher_internals.mojom.PageHandlerFactory": true, "launcher_internals.mojom.Page": true, "lobster.mojom.UntrustedLobsterPageHandler": true, "ash.screens_common.mojom.AiIntroPageHandler": true, "ash.screens_common.mojom.AiIntroPage": true, "ash.screens_common.mojom.AppDownloadingPageHandler": true, "ash.screens_common.mojom.DrivePinningPageHandler": true, "ash.screens_common.mojom.DrivePinningPage": true, "ash.screens_common.mojom.FjordStationSetupPageHandler": true, "ash.screens_common.mojom.FjordTouchControllerPageHandler": true, "ash.screens_common.mojom.FjordImageSelectionPageHandler": true, "ash.screens_common.mojom.GaiaInfoPageHandler": true, "ash.screens_common.mojom.GaiaInfoPage": true, "ash.screens_common.mojom.GestureNavigationPageHandler": true, "ash.screens_common.mojom.GeminiIntroPageHandler": true, "ash.screens_factory.mojom.ScreensFactory": true, "ash.screens_login.mojom.ArcVmDataMigrationPageHandler": true, "ash.screens_login.mojom.ArcVmDataMigrationPage": true, "ash.screens_login.mojom.EncryptionMigrationPageHandler": true, "ash.screens_login.mojom.EncryptionMigrationPage": true, "ash.screens_oobe.mojom.ConsumerUpdatePageHandler": true, "ash.screens_oobe.mojom.ConsumerUpdatePage": true, "ash.screens_oobe.mojom.PackagedLicensePageHandler": true, "ash.screens_osauth.mojom.LocalDataLossWarningPageHandler": true, "ash.manage_mirrorsync.mojom.PageHandlerFactory": true, "ash.manage_mirrorsync.mojom.PageHandler": true, "ash.office_fallback.mojom.PageHandlerFactory": true, "ash.office_fallback.mojom.PageHandler": true, "parent_access_ui.mojom.ParentAccessUiHandler": true, "sensor.mojom.PageHandlerFactory": true, "sensor.mojom.PageHandler": true, "ash.settings.app_notification.mojom.AppNotificationsHandler": true, "ash.settings.app_notification.mojom.AppNotificationsObserver": true, "ash.settings.app_parental_controls.mojom.AppParentalControlsHandler": true, "ash.settings.app_parental_controls.mojom.AppParentalControlsObserver": true, "ash.settings.date_time.mojom.PageHandlerFactory": true, "ash.settings.date_time.mojom.PageHandler": true, "ash.settings.date_time.mojom.Page": true, "ash.settings.mojom.TabletModeObserver": true, "ash.settings.mojom.DisplayConfigurationObserver": true, "ash.settings.mojom.DisplayBrightnessSettingsObserver": true, "ash.settings.mojom.AmbientLightSensorObserver": true, "ash.settings.mojom.DisplaySettingsProvider": true, "ash.settings.mojom.KeyboardSettingsObserver": true, "ash.settings.mojom.TouchpadSettingsObserver": true, "ash.settings.mojom.PointingStickSettingsObserver": true, "ash.settings.mojom.MouseSettingsObserver": true, "ash.settings.mojom.ButtonPressObserver": true, "ash.settings.mojom.GraphicsTabletSettingsObserver": true, "ash.settings.mojom.KeyboardBrightnessObserver": true, "ash.settings.mojom.KeyboardAmbientLightSensorObserver": true, "ash.settings.mojom.LidStateObserver": true, "ash.settings.mojom.InputDeviceSettingsProvider": true, "ash.settings.google_drive.mojom.PageHandlerFactory": true, "ash.settings.google_drive.mojom.PageHandler": true, "ash.settings.google_drive.mojom.Page": true, "ash.settings.one_drive.mojom.PageHandlerFactory": true, "ash.settings.one_drive.mojom.PageHandler": true, "ash.settings.one_drive.mojom.Page": true, "ash.settings.graduation.mojom.GraduationHandler": true, "ash.settings.graduation.mojom.GraduationObserver": true, "ash.settings.app_permission.mojom.AppPermissionsHandler": true, "ash.settings.app_permission.mojom.AppPermissionsObserver": true, "ash.settings.magic_boost_handler.mojom.PageHandlerFactory": true, "ash.settings.magic_boost_handler.mojom.PageHandler": true, "ash.settings.mojom.SearchResultsObserver": true, "ash.settings.mojom.SearchHandler": true, "ash.settings.mojom.UserActionRecorder": true, "policy.local_user_files.mojom.PageHandlerFactory": true, "policy.local_user_files.mojom.PageHandler": true, "policy.local_user_files.mojom.Page": true, "mojom.DebugLogsChangeHandler": true, "mojom.BluetoothInternalsHandler": true, "mojom.BluetoothBtsnoop": true, "chrome_finds_internals.mojom.Page": true, "chrome_finds_internals.mojom.PageHandler": true, "chrome_finds_internals.mojom.PageHandlerFactory": true, "browser.context_hub.mojom.PageHandlerFactory": true, "browser.context_hub.mojom.PageHandler": true, "customize_buttons.mojom.CustomizeButtonsHandlerFactory": true, "customize_buttons.mojom.CustomizeButtonsHandler": true, "customize_buttons.mojom.CustomizeButtonsDocument": true, "data_sharing.mojom.PageHandlerFactory": true, "data_sharing.mojom.PageHandler": true, "data_sharing.mojom.Page": true, "default_browser_modal.mojom.Page": true, "default_browser_modal.mojom.PageHandler": true, "default_browser_modal.mojom.PageHandlerFactory": true, "visual_guided_setter.mojom.Page": true, "visual_guided_setter.mojom.PageHandler": true, "visual_guided_setter.mojom.PageHandlerFactory": true, "discards.mojom.DetailsProvider": true, "discards.mojom.GraphChangeStream": true, "discards.mojom.GraphDump": true, "discards.mojom.SiteDataProvider": true, "downloads.mojom.PageHandlerFactory": true, "downloads.mojom.PageHandler": true, "downloads.mojom.Page": true, "drive_picker_host.mojom.DrivePickerHostHandler": true, "drive_picker_host_untrusted.mojom.PageHandler": true, "drive_picker_host_untrusted.mojom.Page": true, "drive_picker_host_untrusted.mojom.PageHandlerFactory": true, "drive_picker_host_untrusted.mojom.DrivePickerBridge": true, "zero_state_promo.mojom.PageHandlerFactory": true, "zero_state_promo.mojom.PageHandler": true, "feature_showcase.mojom.DefaultBrowserPageHandler": true, "feature_showcase.mojom.DefaultBrowserPageHandlerFactory": true, "feature_showcase.mojom.FeatureShowcasePageHandler": true, "feature_showcase.mojom.FeatureShowcasePageHandlerFactory": true, "feature_showcase.mojom.GoogleLensPageHandler": true, "feature_showcase.mojom.GoogleLensPageHandlerFactory": true, "feature_showcase.mojom.PasswordManagerPageHandler": true, "feature_showcase.mojom.PasswordManagerPageHandlerFactory": true, "feature_showcase.mojom.ThemesAndCustomizationPageHandler": true, "feature_showcase.mojom.ThemesAndCustomizationPageHandlerFactory": true, "feed_internals.mojom.PageHandler": true, "feedback.report_unsafe_site.mojom.PageHandler": true, "feedback.report_unsafe_site.mojom.PageHandlerFactory": true, "indigo_internals.mojom.PageHandlerFactory": true, "indigo_internals.mojom.PageHandler": true, "indigo_internals.mojom.Page": true, "infobar_internals.mojom.Page": true, "infobar_internals.mojom.PageHandler": true, "infobar_internals.mojom.PageHandlerFactory": true, "intro.mojom.FinishOrContinuePageHandlerFactory": true, "intro.mojom.FinishOrContinuePageHandler": true, "intro.mojom.IntroPageHandlerFactory": true, "intro.mojom.IntroPage": true, "intro.mojom.SignInCelebrationPageHandlerFactory": true, "intro.mojom.SignInCelebrationPageHandler": true, "intro.mojom.SignInCelebrationPage": true, "intro.mojom.SignInPromoPageHandlerFactory": true, "intro.mojom.SignInPromoPageHandler": true, "intro.mojom.SignInPromoPage": true, "mojom.LocationInternalsHandler": true, "multistep_filter_internals.mojom.PageHandler": true, "multistep_filter_internals.mojom.Page": true, "multistep_filter_internals.mojom.PageHandlerFactory": true, "nearby_share.mojom.ShareTargetListener": true, "nearby_share.mojom.TransferUpdateListener": true, "nearby_share.mojom.DiscoveryObserver": true, "nearby_share.mojom.DiscoveryManager": true, "nearby_share.mojom.ConfirmationManager": true, "nearby_share.mojom.ReceiveObserver": true, "nearby_share.mojom.ReceiveManager": true, "new_tab_footer.mojom.NewTabFooterHandlerFactory": true, "new_tab_footer.mojom.NewTabFooterHandler": true, "new_tab_footer.mojom.NewTabFooterDocument": true, "action_chips.mojom.ActionChipsHandler": true, "action_chips.mojom.Page": true, "action_chips.mojom.ActionChipsHandlerFactory": true, "foo.mojom.FooHandler": true, "new_tab_page.mojom.PageHandlerFactory": true, "new_tab_page.mojom.PageHandler": true, "new_tab_page.mojom.Page": true, "ntp_promo.mojom.NtpPromoHandler": true, "ntp_promo.mojom.NtpPromoClient": true, "ntp_promo.mojom.NtpPromoHandlerFactory": true, "new_tab_page_third_party.mojom.PageHandlerFactory": true, "new_tab_page_third_party.mojom.PageHandler": true, "new_tab_page_third_party.mojom.Page": true, "notifications_internals.mojom.PageHandler": true, "new_tab_page.mojom.MicrosoftAuthUntrustedDocument": true, "new_tab_page.mojom.MicrosoftAuthUntrustedDocumentInterfacesFactory": true, "new_tab_page.mojom.MicrosoftAuthUntrustedPageHandler": true, "aim_eligibility.mojom.Page": true, "aim_eligibility.mojom.PageHandler": true, "aim_eligibility.mojom.PageHandlerFactory": true, "omnibox.logging.mojom.PageHandlerFactory": true, "omnibox.logging.mojom.PageHandler": true, "omnibox.logging.mojom.Page": true, "mojom.OmniboxPageHandler": true, "mojom.OmniboxPage": true, "omnibox_popup.mojom.PageHandlerFactory": true, "omnibox_popup.mojom.PageHandler": true, "omnibox_popup.mojom.Page": true, "omnibox_popup_aim.mojom.PageHandlerFactory": true, "omnibox_popup_aim.mojom.PageHandler": true, "omnibox_popup_aim.mojom.Page": true, "on_device_internals.mojom.PageHandlerFactory": true, "on_device_internals.mojom.PageHandler": true, "on_device_internals.mojom.Page": true, "on_device_translation_internals.mojom.PageHandlerFactory": true, "on_device_translation_internals.mojom.PageHandler": true, "on_device_translation_internals.mojom.Page": true, "password_manager.mojom.PageHandlerFactory": true, "password_manager.mojom.PageHandler": true, "password_manager.mojom.Page": true, "personal_context.notice.mojom.PageHandler": true, "browser.personal_context_internals.mojom.PageHandlerFactory": true, "browser.personal_context_internals.mojom.PageHandler": true, "mojom.ResetPasswordHandler": true, "search_engine_choice.mojom.PageHandlerFactory": true, "search_engine_choice.mojom.PageHandler": true, "segmentation_internals.mojom.PageHandlerFactory": true, "segmentation_internals.mojom.PageHandler": true, "segmentation_internals.mojom.Page": true, "side_panel.mojom.BookmarksPageHandlerFactory": true, "side_panel.mojom.BookmarksPageHandler": true, "side_panel.mojom.BookmarksPage": true, "comments.mojom.PageHandlerFactory": true, "comments.mojom.PageHandler": true, "side_panel.mojom.CustomizeChromePageHandlerFactory": true, "side_panel.mojom.CustomizeChromePageHandler": true, "side_panel.mojom.CustomizeChromePage": true, "side_panel.customize_chrome.mojom.CustomizeToolbarHandlerFactory": true, "side_panel.customize_chrome.mojom.CustomizeToolbarHandler": true, "side_panel.customize_chrome.mojom.CustomizeToolbarClient": true, "side_panel.customize_chrome.mojom.WallpaperSearchHandlerFactory": true, "side_panel.customize_chrome.mojom.WallpaperSearchHandler": true, "side_panel.customize_chrome.mojom.WallpaperSearchClient": true, "reading_list.mojom.PageHandlerFactory": true, "reading_list.mojom.PageHandler": true, "reading_list.mojom.Page": true, "batch_upload.mojom.PageHandlerFactory": true, "batch_upload.mojom.PageHandler": true, "batch_upload.mojom.Page": true, "cross_device_signin.mojom.PageHandlerFactory": true, "cross_device_signin.mojom.PageHandler": true, "history_sync_optin.mojom.PageHandlerFactory": true, "history_sync_optin.mojom.PageHandler": true, "history_sync_optin.mojom.Page": true, "signout_confirmation.mojom.PageHandlerFactory": true, "signout_confirmation.mojom.PageHandler": true, "signout_confirmation.mojom.Page": true, "skills.mojom.PageHandlerFactory": true, "skills.mojom.PageHandler": true, "skills.mojom.SkillsPage": true, "skills.mojom.DialogHandler": true, "skills.mojom.SkillsPageHandler": true, "subresource_filter.mojom.SubresourceFilterInternalsHandler": true, "subresource_filter.mojom.SubresourceFilterInternalsObserver": true, "suggest_internals.mojom.PageHandler": true, "suggest_internals.mojom.Page": true, "tab_search.mojom.PageHandlerFactory": true, "tab_search.mojom.PageHandler": true, "tab_search.mojom.Page": true, "tab_strip_internals.mojom.PageHandlerFactory": true, "tab_strip_internals.mojom.PageHandler": true, "tab_strip_internals.mojom.Page": true, "unexportable_keys_internals.mojom.PageHandlerFactory": true, "unexportable_keys_internals.mojom.PageHandler": true, "updater_ui.mojom.PageHandlerFactory": true, "updater_ui.mojom.PageHandler": true, "mojom.UsbInternalsPageHandler": true, "mojom.user_education_internals.UserEducationInternalsPageHandler": true, "watermark.mojom.PageHandlerFactory": true, "watermark.mojom.PageHandler": true, "mojom.WebAppInternalsHandler": true, "webnn_internals.mojom.PageHandler": true, "webnn_internals.mojom.Page": true, "webnn_internals.mojom.PageHandlerFactory": true, "whats_new.mojom.PageHandlerFactory": true, "whats_new.mojom.PageHandler": true, "bookmark_bar.mojom.PageHandlerFactory": true, "bookmark_bar.mojom.PageHandler": true, "bookmark_bar.mojom.Page": true, "webui_browser.mojom.PageHandlerFactory": true, "webui_browser.mojom.Page": true, "webui_browser.mojom.PageHandler": true, "webui_browser.mojom.GuestHandler": true, "chrome.mojom.ChromeRenderFrame": true, "compose.mojom.ComposeSessionUntrustedPageHandlerFactory": true, "compose.mojom.ComposeSessionUntrustedPageHandler": true, "compose.mojom.ComposeClientUntrustedPageHandler": true, "compose.mojom.ComposeUntrustedDialog": true, "mojom.ModuleEventSink": true, "chrome.mojom.FontPrewarmer": true, "chrome.mojom.RenderFrameFontFamilyAccessor": true, "chrome.mojom.GoogleAccountsPrivateApiExtension": true, "chrome.mojom.ProfileImportObserver": true, "chrome.mojom.ProfileImport": true, "chrome.mojom.IndigoAgentHost": true, "chrome.mojom.IndigoAgent": true, "chrome.mojom.IndigoOnboardingDialogHost": true, "chrome.mojom.AppShim": true, "chrome.mojom.AppShimHost": true, "chrome.mojom.AppShimHostBootstrap": true, "chrome.mojom.WebRtcLoggingClient": true, "chrome.mojom.WebRtcLoggingAgent": true, "offline_pages.mojom.MhtmlPageNotifier": true, "chrome.mojom.NetErrorPageSupport": true, "chrome.mojom.NetBenchmarking": true, "chrome.mojom.NetworkDiagnostics": true, "chrome.mojom.NetworkDiagnosticsClient": true, "chrome.mojom.NetworkEasterEgg": true, "chrome.mojom.OfflinePageAutoFetcher": true, "chrome.mojom.OpenSearchDescriptionDocumentHandler": true, "chrome.mojom.PluginHost": true, "chrome.mojom.PluginAuthHost": true, "chrome.mojom.PluginInfoHost": true, "reading_mode.mojom.DistillationEvaluator": true, "read_anything.mojom.UntrustedPageHandlerFactory": true, "read_anything.mojom.UntrustedPageHandler": true, "read_anything.mojom.UntrustedPage": true, "read_aloud.mojom.ReadAloudPlaybackController": true, "read_aloud.mojom.ReadAloudPlaybackControllerClient": true, "read_aloud.mojom.ReadAloudPlaybackControllerFactory": true, "chrome.mojom.BoundSessionRequestThrottledHandler": true, "chrome.mojom.ChromeOSListener": true, "chrome.mojom.RendererConfiguration": true, "request_header_integrity.mojom.ChromeCompanero": true, "chrome.mojom.SandboxStatusExtension": true, "search.mojom.EmbeddedSearchConnector": true, "search.mojom.EmbeddedSearch": true, "search.mojom.EmbeddedSearchClient": true, "supervised_user.mojom.SupervisedUserCommands": true, "chrome.mojom.TrustedVaultEncryptionKeysExtension": true, "wallet.mojom.BoardingPassExtractor": true, "gcpw_hid.mojom.GaiaCredentialProviderHidBroker": true, "enterprise_companion.mojom.EnterpriseCompanion": true, "chrome.mojom.DocumentAnalysisService": true, "chrome.mojom.FileUtilService": true, "chrome.mojom.SafeArchiveAnalyzer": true, "chrome.mojom.TemporaryFileGetter": true, "chrome.mojom.SingleFileExtractor": true, "chrome.mojom.SingleFileExtractorListener": true, "chrome.mojom.ZipListener": true, "chrome.mojom.ZipFileCreator": true, "mac_notifications.mojom.MacNotificationService": true, "mac_notifications.mojom.MacNotificationActionHandler": true, "mac_notifications.mojom.MacNotificationProvider": true, "chrome.mojom.MediaParser": true, "chrome.mojom.MediaParserFactory": true, "chrome.mojom.MediaDataSource": true, "pdf.mojom.PdfProgressiveSearchifier": true, "pdf.mojom.PdfSearchifier": true, "pdf.mojom.Ocr": true, "pdf.mojom.PdfService": true, "pdf.mojom.PdfThumbnailer": true, "printing.mojom.PdfFlattener": true, "printing.mojom.PdfNupConverter": true, "printing.mojom.PdfToEmfConverter": true, "printing.mojom.PdfToEmfConverterFactory": true, "printing.mojom.PdfToPwgRasterConverter": true, "printing.mojom.UnsandboxedPrintBackendHost": true, "printing.mojom.SandboxedPrintBackendHost": true, "printing.mojom.PrintBackendService": true, "printing.mojom.PrintingService": true, "chrome.mojom.RemovableStorageWriter": true, "chrome.mojom.RemovableStorageWriterClient": true, "chrome.mojom.UtilReadIcon": true, "chrome.mojom.UtilWin": true, "chrome.mojom.ProcessorMetrics": true, "web_ui_test.mojom.TestRunner": true, "test.mojom.Foo": true, "test.mojom.Bar": true, "test.mojom.Baz": true, "test.mojom.MojoFileSystemAccessTest": true, "updater.mojom.UpdateService": true, "updater.mojom.StateChangeObserver": true, "updater.mojom.UpdateServiceInternal": true, "updater.mojom.PostRequestObserver": true, "updater.mojom.FileDownloadObserver": true, "updater.mojom.FetchService": true, "chromecast.mojom.ApiBindings": true, "chromecast.mojom.BluetoothDeviceAccessProvider": true, "chromecast.mojom.BluetoothDeviceAccessProviderClient": true, "chromecast.mojom.CastContentWindowObserver": true, "chromecast.mojom.CastContentWindow": true, "chromecast.mojom.CastWebContentsObserver": true, "chromecast.mojom.CastWebContents": true, "chromecast.mojom.CastWebService": true, "chromecast.mojom.MessageCallback": true, "chromecast.mojom.WebUi": true, "chromecast.mojom.Resources": true, "chromecast.mojom.WebUiClient": true, "chromecast.mojom.ActivityUrlFilterConfiguration": true, "chromecast.mojom.ActivityWindow": true, "chromecast.shell.mojom.ApplicationMediaCapabilitiesObserver": true, "chromecast.shell.mojom.ApplicationMediaCapabilities": true, "chromecast.mojom.AssistantMessagePipe": true, "chromecast.mojom.AssistantMessageClient": true, "chromecast.mojom.AssistantMessageService": true, "chromecast.mojom.AudioSocketBroker": true, "chromecast.shell.mojom.CastDemoVolumeChangeObserver": true, "chromecast.shell.mojom.CastDemo": true, "chromecast.shell.mojom.FeatureManager": true, "chromecast.mojom.FeatureUpdateObserver": true, "chromecast.mojom.FeatureUpdateService": true, "chromecast.mojom.GestureHandler": true, "chromecast.mojom.GestureSource": true, "chromecast.mojom.JsChannel": true, "chromecast.mojom.JsChannelClient": true, "chromecast.mojom.JsChannelBindingProvider": true, "chromecast.media.mojom.MediaCaps": true, "chromecast.media.mojom.MediaCapsObserver": true, "chromecast.metrics.mojom.MetricsHelper": true, "chromecast.shell.mojom.QueryableDataStore": true, "chromecast.mojom.ServiceConnector": true, "chromecast.mojom.SettingsClient": true, "chromecast.mojom.SettingsPlatform": true, "chromecast.external_mojo.mojom.ExternalService": true, "chromecast.external_mojo.mojom.ExternalConnector": true, "chromecast.external_mojo.mojom.TestExternalConnector": true, "chromecast.media.mojom.VideoGeometryChangeClient": true, "chromecast.media.mojom.VideoGeometryChangeSubscriber": true, "chromecast.media.mojom.VideoGeometrySetter": true, "chromecast.mojom.RemoteInterfaces": true, "chromecast.mojom.DisplaySettings": true, "chromecast.mojom.DisplaySettingsObserver": true, "ash.audio_config.mojom.AudioSystemPropertiesObserver": true, "ash.audio_config.mojom.CrosAudioConfig": true, "drivefs.mojom.DriveFsBootstrap": true, "drivefs.mojom.DriveFs": true, "drivefs.mojom.DriveFsDelegate": true, "drivefs.mojom.SearchQuery": true, "drivefs.mojom.HttpDelegate": true, "drivefs.mojom.FakeDriveFsLauncher": true, "emoji_search.mojom.EmojiSearch": true, "ash.enhanced_network_tts.mojom.EnhancedNetworkTts": true, "ash.enhanced_network_tts.mojom.AudioDataObserver": true, "ash.language.mojom.LanguagePacksObserver": true, "ash.language.mojom.LanguagePacks": true, "ash.local_search_service.mojom.Index": true, "ash.local_search_service.mojom.SearchMetricsReporter": true, "ash.local_search_service.mojom.LocalSearchService": true, "mantis.mojom.MantisProcessor": true, "mantis.mojom.PlatformModelProgressObserver": true, "mantis.mojom.MantisService": true, "chromeos.mojo_service_manager.mojom.ServiceManager": true, "chromeos.mojo_service_manager.mojom.ServiceProvider": true, "chromeos.mojo_service_manager.mojom.ServiceObserver": true, "smbfs.mojom.SmbFsBootstrap": true, "smbfs.mojom.SmbFs": true, "smbfs.mojom.SmbFsDelegate": true, "ash.trash_service.mojom.TrashService": true, "arc.mojom.AdbdMonitorHost": true, "arc.mojom.AdbdMonitorInstance": true, "arc.mojom.AppHost": true, "arc.mojom.AppInstance": true, "arc.mojom.AppPermissionsInstance": true, "arc.mojom.AppfuseHost": true, "arc.mojom.AppfuseInstance": true, "arc.mojom.ArcBridgeHost": true, "arc.mojom.ArcWifiHost": true, "arc.mojom.ArcWifiInstance": true, "arc.mojom.AudioHost": true, "arc.mojom.AudioInstance": true, "arc.mojom.AuthHost": true, "arc.mojom.AuthInstance": true, "arc.mojom.BackupSettingsInstance": true, "arc.mojom.RfcommListeningSocketClient": true, "arc.mojom.RfcommConnectingSocketClient": true, "arc.mojom.BluetoothListenSocketClient": true, "arc.mojom.BluetoothConnectSocketClient": true, "arc.mojom.BluetoothHost": true, "arc.mojom.BluetoothInstance": true, "arc.mojom.BootPhaseMonitorHost": true, "arc.mojom.BootPhaseMonitorInstance": true, "arc.mojom.CameraService": true, "arc.mojom.CameraHost": true, "arc.mojom.CameraInstance": true, "arc.mojom.ChromeFeatureFlagsInstance": true, "arc.mojom.CompatibilityModeInstance": true, "arc.mojom.CrashCollectorHost": true, "arc.mojom.CrashCollectorInstance": true, "arc.mojom.ArcShellExecutionInstance": true, "arc.mojom.DigitalGoodsInstance": true, "arc.mojom.DiskSpaceHost": true, "arc.mojom.DiskSpaceInstance": true, "arc.mojom.EnterpriseReportingHost": true, "arc.mojom.EnterpriseReportingInstance": true, "arc.mojom.ErrorNotificationHost": true, "arc.mojom.ErrorNotificationInstance": true, "arc.mojom.ErrorNotificationItem": true, "arc.mojom.ErrorNotificationActionHandler": true, "arc.mojom.FileSystemHost": true, "arc.mojom.FileSystemInstance": true, "arc.mojom.IioSensorHost": true, "arc.mojom.IioSensorInstance": true, "arc.mojom.ImeHost": true, "arc.mojom.ImeInstance": true, "arc.mojom.InputConnection": true, "arc.mojom.InputMethodManagerHost": true, "arc.mojom.InputMethodManagerInstance": true, "arc.mojom.CustomTabSession": true, "arc.mojom.IntentHelperHost": true, "arc.mojom.IntentHelperInstance": true, "arc.mojom.KeymasterHost": true, "arc.mojom.KeymasterInstance": true, "arc.mojom.KeymasterServer": true, "arc.mojom.keymint.KeyMintHost": true, "arc.mojom.keymint.KeyMintInstance": true, "arc.mojom.keymint.KeyMintServer": true, "arc.mojom.KioskHost": true, "arc.mojom.KioskInstance": true, "arc.mojom.MediaSessionInstance": true, "arc.mojom.MemoryInstance": true, "arc.mojom.MetricsHost": true, "arc.mojom.MetricsInstance": true, "arc.mojom.MidisClient": true, "arc.mojom.MidisServer": true, "arc.mojom.MidisHost": true, "arc.mojom.MidisInstance": true, "arc.mojom.NearbyShareSessionHost": true, "arc.mojom.NearbyShareSessionInstance": true, "arc.mojom.NearbyShareHost": true, "arc.mojom.NearbyShareInstance": true, "arc.mojom.NetHost": true, "arc.mojom.NetInstance": true, "arc.mojom.NotificationsHost": true, "arc.mojom.NotificationsInstance": true, "arc.mojom.ObbMounterHost": true, "arc.mojom.ObbMounterInstance": true, "arc.mojom.OemCryptoService": true, "arc.mojom.OemCryptoHost": true, "arc.mojom.OemCryptoInstance": true, "arc.mojom.OnDeviceSafetyHost": true, "arc.mojom.OnDeviceSafetyInstance": true, "arc.mojom.PipHost": true, "arc.mojom.PipInstance": true, "arc.mojom.PolicyHost": true, "arc.mojom.PolicyInstance": true, "arc.mojom.PowerHost": true, "arc.mojom.PowerInstance": true, "arc.mojom.PrintSessionHost": true, "arc.mojom.PrintSessionInstance": true, "arc.mojom.PrintSpoolerHost": true, "arc.mojom.PrintSpoolerInstance": true, "arc.mojom.PrivacyItemsHost": true, "arc.mojom.PrivacyItemsInstance": true, "arc.mojom.ProcessInstance": true, "arc.mojom.ProtectedBufferManager": true, "arc.mojom.ScreenCaptureHost": true, "arc.mojom.ScreenCaptureSession": true, "arc.mojom.ScreenCaptureInstance": true, "arc.mojom.ScreenCaptureSessionNotifier": true, "arc.mojom.SharesheetHost": true, "arc.mojom.SharesheetInstance": true, "arc.mojom.SystemStateHost": true, "arc.mojom.SystemStateInstance": true, "arc.mojom.SystemUiInstance": true, "arc.mojom.TracingInstance": true, "arc.mojom.TtsHost": true, "arc.mojom.TtsInstance": true, "arc.mojom.UsbHostHost": true, "arc.mojom.UsbHostInstance": true, "arc.mojom.VideoHost": true, "arc.mojom.VideoInstance": true, "arc.mojom.VideoAcceleratorFactory": true, "arc.mojom.VideoDecodeAccelerator": true, "arc.mojom.VideoDecodeClient": true, "arc.mojom.VideoDecoder": true, "arc.mojom.VideoDecoderClient": true, "arc.mojom.VideoEncodeAccelerator": true, "arc.mojom.VideoEncodeClient": true, "arc.mojom.VideoFramePool": true, "arc.mojom.VideoFramePoolClient": true, "arc.mojom.VideoProtectedBufferAllocator": true, "arc.mojom.VolumeMounterHost": true, "arc.mojom.VolumeMounterInstance": true, "arc.mojom.WakeLockHost": true, "arc.mojom.WakeLockInstance": true, "arc.mojom.WallpaperHost": true, "arc.mojom.WallpaperInstance": true, "arc.mojom.WebApkInstance": true, "ash.borealis_motd.mojom.PageHandlerFactory": true, "ash.borealis_motd.mojom.PageHandler": true, "ash.borealis_motd.mojom.Page": true, "ash.auth.mojom.FactorObserver": true, "ash.auth.mojom.AuthFactorConfig": true, "ash.auth.mojom.RecoveryFactorEditor": true, "ash.auth.mojom.PinFactorEditor": true, "ash.auth.mojom.PasswordFactorEditor": true, "ash.bluetooth_config.mojom.SystemPropertiesObserver": true, "ash.bluetooth_config.mojom.BluetoothDeviceStatusObserver": true, "ash.bluetooth_config.mojom.DiscoverySessionStatusObserver": true, "ash.bluetooth_config.mojom.KeyEnteredHandler": true, "ash.bluetooth_config.mojom.DevicePairingDelegate": true, "ash.bluetooth_config.mojom.DevicePairingHandler": true, "ash.bluetooth_config.mojom.BluetoothDiscoveryDelegate": true, "ash.bluetooth_config.mojom.CrosBluetoothConfig": true, "ash.babelorca.mojom.TachyonParsingService": true, "ash.cellular_setup.mojom.CarrierPortalHandler": true, "ash.cellular_setup.mojom.ActivationDelegate": true, "ash.cellular_setup.mojom.CellularSetup": true, "ash.cellular_setup.mojom.ESimManagerObserver": true, "ash.cellular_setup.mojom.ESimManager": true, "ash.cellular_setup.mojom.Euicc": true, "ash.cellular_setup.mojom.ESimProfile": true, "chromeos.connectivity.mojom.PasspointEventsListener": true, "chromeos.connectivity.mojom.PasspointService": true, "coral.mojom.TitleObserver": true, "coral.mojom.CoralProcessor": true, "coral.mojom.CoralService": true, "ash.cros_healthd.internal.mojom.ChromiumDataCollector": true, "ash.cros_healthd.mojom.CrosHealthdDiagnosticsService": true, "ash.cros_healthd.mojom.CrosHealthdEventService": true, "ash.cros_healthd.mojom.CrosHealthdProbeService": true, "ash.cros_healthd.mojom.DEPRECATED_LedLitUpRoutineReplier": true, "ash.cros_healthd.mojom.AshEventReporter": true, "ash.cros_healthd.mojom.CrosHealthdBluetoothObserver": true, "ash.cros_healthd.mojom.CrosHealthdLidObserver": true, "ash.cros_healthd.mojom.CrosHealthdPowerObserver": true, "ash.cros_healthd.mojom.CrosHealthdAudioObserver": true, "ash.cros_healthd.mojom.CrosHealthdThunderboltObserver": true, "ash.cros_healthd.mojom.CrosHealthdUsbObserver": true, "ash.cros_healthd.mojom.CrosHealthdSdCardObserver": true, "ash.cros_healthd.mojom.EventObserver": true, "ash.cros_healthd.mojom.CrosHealthdRoutinesService": true, "ash.cros_healthd.mojom.RoutineControl": true, "ash.cros_healthd.mojom.RoutineObserver": true, "ash.cros_healthd.connectivity.mojom.State": true, "ash.cros_healthd.connectivity.mojom.ConnectivityTestProvider": true, "ash.cros_safety.mojom.CloudSafetySession": true, "ash.cros_safety.mojom.OnDeviceSafetySession": true, "ash.cros_safety.mojom.CrosSafetyService": true, "ash.device_sync.mojom.DeviceSyncObserver": true, "ash.device_sync.mojom.DeviceSync": true, "ash.heartd.mojom.HeartdControl": true, "ash.heartd.mojom.HeartbeatService": true, "ash.heartd.mojom.Pacemaker": true, "ash.hotspot_config.mojom.CrosHotspotConfig": true, "ash.hotspot_config.mojom.CrosHotspotConfigObserver": true, "ash.hotspot_config.mojom.HotspotEnabledStateObserver": true, "ash.ime.mojom.ConnectionFactory": true, "ash.ime.mojom.InputEngineManager": true, "ash.ime.mojom.PlatformAccessProvider": true, "ash.ime.mojom.ImeService": true, "ash.ime.mojom.InputChannel": true, "ash.ime.mojom.InputMethod": true, "ash.ime.mojom.InputMethodHost": true, "ash.ime.mojom.InputMethodUserDataService": true, "ash.ime.mojom.JpUnused": true, "arc.keymaster.mojom.CertStoreInstance": true, "arc.keymint.mojom.CertStoreInstance": true, "ash.multidevice_setup.mojom.AccountStatusChangeDelegate": true, "ash.multidevice_setup.mojom.HostStatusObserver": true, "ash.multidevice_setup.mojom.FeatureStateObserver": true, "ash.multidevice_setup.mojom.MultiDeviceSetup": true, "ash.multidevice_setup.mojom.PrivilegedHostDeviceSetter": true, "sharing.mojom.FirewallHole": true, "sharing.mojom.FirewallHoleFactory": true, "sharing.mojom.MdnsObserver": true, "sharing.mojom.MdnsManager": true, "nearby.connections.mojom.EndpointDiscoveryListener": true, "nearby.connections.mojom.ConnectionLifecycleListener": true, "nearby.connections.mojom.PayloadListener": true, "nearby.connections.mojom.ConnectionListenerV3": true, "nearby.connections.mojom.PayloadListenerV3": true, "nearby.connections.mojom.NearbyConnections": true, "sharing.mojom.NearbySharingDecoder": true, "ash.nearby.presence.mojom.ScanSession": true, "ash.nearby.presence.mojom.ScanObserver": true, "ash.nearby.presence.mojom.NearbyPresence": true, "ash.nearby.presence.mojom.NearbyPresenceCredentialStorage": true, "nearby_share.mojom.NearbyShareSettingsObserver": true, "nearby_share.mojom.NearbyShareSettings": true, "nearby_share.mojom.DownloadContactsObserver": true, "nearby_share.mojom.ContactManager": true, "ash.quick_start.mojom.QuickStartDecoder": true, "sharing.mojom.Sharing": true, "sharing.mojom.TcpSocketFactory": true, "sharing.mojom.IceConfigFetcher": true, "sharing.mojom.MdnsResponderFactory": true, "sharing.mojom.IncomingMessagesListener": true, "sharing.mojom.ReceiveMessagesSession": true, "sharing.mojom.WebRtcSignalingMessenger": true, "ash.orca.mojom.EditorClient": true, "ash.orca.mojom.EditorClientConnector": true, "ash.orca.mojom.EditorEventSink": true, "ash.orca.mojom.SystemActuator": true, "ash.orca.mojom.TextQueryProvider": true, "ash.orca.mojom.OrcaService": true, "ash.quick_pair.mojom.FastPairDataParser": true, "ash.quick_pair.mojom.QuickPairService": true, "recording.mojom.DriveFsQuotaDelegate": true, "recording.mojom.RecordingServiceClient": true, "recording.mojom.RecordingService": true, "ash.rollback_network_config.mojom.RollbackNetworkConfig": true, "ash.secure_channel.mojom.NearbyConnectionStateListener": true, "ash.secure_channel.mojom.NearbyMessageSender": true, "ash.secure_channel.mojom.NearbyMessageReceiver": true, "ash.secure_channel.mojom.NearbyFilePayloadHandler": true, "ash.secure_channel.mojom.NearbyConnector": true, "ash.secure_channel.mojom.Channel": true, "ash.secure_channel.mojom.MessageReceiver": true, "ash.secure_channel.mojom.ConnectionDelegate": true, "ash.secure_channel.mojom.SecureChannelStructuredMetricsLogger": true, "ash.secure_channel.mojom.SecureChannel": true, "ash.secure_channel.mojom.FilePayloadListener": true, "ash.wifi_direct.mojom.WifiDirectManager": true, "ash.wifi_direct.mojom.WifiDirectConnection": true, "chromeos.cdm.mojom.BrowserCdmFactory": true, "chromeos.cdm.mojom.CdmFactory": true, "chromeos.cdm.mojom.CdmFactoryDaemon": true, "chromeos.cdm.mojom.CdmStorage": true, "chromeos.cdm.mojom.ContentDecryptionModule": true, "chromeos.cdm.mojom.ContentDecryptionModuleClient": true, "chromeos.cdm.mojom.OutputProtection": true, "drivefs.mojom.NativeMessagingPort": true, "drivefs.mojom.NativeMessagingHost": true, "chromeos.auth.mojom.InSessionAuth": true, "mahi.mojom.ContentExtractionService": true, "mahi.mojom.ContentExtractionServiceFactory": true, "chromeos.payments.mojom.PaymentAppInstance": true, "chromeos.printing.printing_manager.mojom.PrintJobsObserver": true, "chromeos.printing.printing_manager.mojom.PrintingMetadataProvider": true, "chromeos.printing.printing_manager.mojom.PrintManagementHandler": true, "quick_answers.mojom.SpellCheckService": true, "quick_answers.mojom.SpellCheckDictionary": true, "chromeos.remote_apps.mojom.RemoteApps": true, "chromeos.remote_apps.mojom.RemoteAppsFactory": true, "chromeos.remote_apps.mojom.RemoteAppLaunchObserver": true, "chromeos.sensors.mojom.SensorHalServer": true, "chromeos.sensors.mojom.SensorHalClient": true, "chromeos.sensors.mojom.SensorService": true, "chromeos.sensors.mojom.SensorDevice": true, "chromeos.sensors.mojom.SensorDeviceSamplesObserver": true, "chromeos.sensors.mojom.SensorServiceNewDevicesObserver": true, "crosapi.mojom.AccountManager": true, "crosapi.mojom.AccessTokenFetcher": true, "crosapi.mojom.Crosapi": true, "chromeos.cfm.mojom.CfmBrowser": true, "chromeos.cfm.mojom.DisconnectReason": true, "chromeos.cfm.mojom.CfmServiceContext": true, "chromeos.cfm.mojom.CfmServiceAdaptor": true, "chromeos.cfm.mojom.ExternalDisplayBrightness": true, "ash.cfm.mojom.MeetBrowser": true, "ash.cfm.mojom.DataWatchDog": true, "ash.cfm.mojom.DataSource": true, "ash.cfm.mojom.DataAggregator": true, "chromeos.cfm.mojom.MeetDevicesDiagnostics": true, "ash.cfm.mojom.HotrodStatus": true, "chromeos.cfm.mojom.MeetDevicesInfo": true, "chromeos.cfm.mojom.PolicyInfoObserver": true, "chromeos.cfm.mojom.LoggerStateObserver": true, "chromeos.cfm.mojom.MeetDevicesLogger": true, "ash.cfm.mojom.XuCamera": true, "chromeos.machine_learning.mojom.DocumentScanner": true, "chromeos.machine_learning.mojom.GrammarChecker": true, "chromeos.machine_learning.mojom.GraphExecutor": true, "chromeos.machine_learning.mojom.HandwritingRecognizer": true, "chromeos.machine_learning.mojom.HeatmapPalmRejectionClient": true, "chromeos.machine_learning.mojom.ImageContentAnnotator": true, "chromeos.machine_learning.mojom.MachineLearningService": true, "chromeos.machine_learning.mojom.Model": true, "chromeos.machine_learning.mojom.SodaClient": true, "chromeos.machine_learning.mojom.SodaRecognizer": true, "chromeos.machine_learning.mojom.TextClassifier": true, "chromeos.machine_learning.mojom.TextSuggester": true, "chromeos.machine_learning.web_platform.mojom.HandwritingRecognizer": true, "chromeos.media_perception.mojom.MediaPerception": true, "chromeos.media_perception.mojom.MediaPerceptionService": true, "chromeos.media_perception.mojom.MediaPerceptionController": true, "chromeos.media_perception.mojom.MediaPerceptionControllerClient": true, "chromeos.network_config.mojom.CrosNetworkConfig": true, "chromeos.network_config.mojom.CrosNetworkConfigObserver": true, "chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines": true, "chromeos.network_health.mojom.NetworkEventsObserver": true, "chromeos.network_health.mojom.NetworkHealthService": true, "chromeos.tts.mojom.TtsService": true, "chromeos.tts.mojom.GoogleTtsStream": true, "chromeos.tts.mojom.PlaybackTtsStream": true, "chromeos.tts.mojom.TtsEventObserver": true, "math.mojom.MathService": true, "codelabs.mojom.ObjectA": true, "codelabs.mojom.ObjectB": true, "codelabs.mojom.AssociatedProcess": true, "codelabs.mojom.GenericInterface": true, "codelabs.mojom.Process": true, "accessibility_annotator_internals.mojom.PageHandlerFactory": true, "accessibility_annotator_internals.mojom.PageHandler": true, "accessibility_annotator_internals.mojom.Page": true, "actor_internals.mojom.Page": true, "actor_internals.mojom.PageHandler": true, "actor_internals.mojom.PageHandlerFactory": true, "actor.mojom.JournalClient": true, "attribution_reporting.mojom.DataHost": true, "autofill.mojom.AutofillAgent": true, "autofill.mojom.PasswordAutofillAgent": true, "autofill.mojom.PasswordGenerationAgent": true, "autofill.mojom.AutofillDriver": true, "autofill.mojom.PasswordManagerDriver": true, "autofill.mojom.PasswordGenerationDriver": true, "autofill_ml_internals.mojom.Page": true, "autofill_ml_internals.mojom.PageHandlerFactory": true, "autofill_ml_internals.mojom.PageHandler": true, "autofill.mojom.TypeTraitsTest": true, "bookmarks_api.mojom.BookmarksObserver": true, "bookmarks_api.mojom.BookmarksService": true, "browser_controls_api.mojom.BrowserControlsService": true, "tabs_api.mojom.TabDragService": true, "tabs_api.mojom.DropTargetRegistration": true, "tabs_api.mojom.DropTarget": true, "tabs_api.mojom.TabStripService": true, "tabs_api.mojom.TabsObserver": true, "tabs_api.mojom.TabStripExperimentService": true, "tabs_api.mojom.TabStripUIController": true, "extensions_bar.mojom.PageHandlerFactory": true, "extensions_bar.mojom.PageHandler": true, "extensions_bar.mojom.Page": true, "toolbar_ui_api.mojom.ToolbarUIObserver": true, "toolbar_ui_api.mojom.ToolbarUIService": true, "browsing_topics.mojom.PageHandler": true, "cast_streaming.mojom.AudioBufferRequester": true, "cast_streaming.mojom.VideoBufferRequester": true, "cast_streaming.mojom.DemuxerConnector": true, "cast_streaming.mojom.RendererController": true, "chromeos_camera.mojom.JpegEncodeAccelerator": true, "chromeos_camera.mojom.MjpegDecodeAccelerator": true, "commerce.mojom.CommerceInternalsHandlerFactory": true, "commerce.mojom.CommerceInternalsHandler": true, "commerce.mojom.CommerceInternalsPage": true, "commerce_web_extractor.mojom.CommerceWebExtractor": true, "commerce.price_insights.mojom.PriceInsightsHandler": true, "commerce.price_insights.mojom.PriceInsightsHandlerFactory": true, "commerce.price_tracking.mojom.PriceTrackingHandler": true, "commerce.price_tracking.mojom.Page": true, "commerce.price_tracking.mojom.PriceTrackingHandlerFactory": true, "shopping_service.mojom.ShoppingServiceHandlerFactory": true, "shopping_service.mojom.ShoppingServiceHandler": true, "content_capture.mojom.ContentCaptureReceiver": true, "content_capture.mojom.ContentCaptureSender": true, "content_settings.mojom.ContentSettingsAgent": true, "content_settings.mojom.ContentSettingsManager": true, "continuous_search.mojom.SearchResultExtractor": true, "data_sharing_internals.mojom.PageHandlerFactory": true, "data_sharing_internals.mojom.PageHandler": true, "data_sharing_internals.mojom.Page": true, "device_signals.mojom.SystemSignalsService": true, "discardable_memory.mojom.DiscardableSharedMemoryManager": true, "dom_distiller.mojom.DistillabilityService": true, "dom_distiller.mojom.DistillerJavaScriptService": true, "download.mojom.DownloadStreamClient": true, "connectors_internals.mojom.PageHandler": true, "payments.facilitated.mojom.PixCodeValidator": true, "global_media_controls.mojom.DeviceListHost": true, "global_media_controls.mojom.DeviceListClient": true, "global_media_controls.mojom.DeviceService": true, "global_media_controls.mojom.DevicePickerProvider": true, "global_media_controls.mojom.DevicePickerObserver": true, "guest_contents.mojom.GuestContentsHost": true, "guest_view.mojom.PageHandlerFactory": true, "guest_view.mojom.PageHandler": true, "guest_view.mojom.Page": true, "guest_view.mojom.ViewHandle": true, "guest_view.mojom.GuestViewHost": true, "heap_profiling.mojom.SnapshotController": true, "heap_profiling.mojom.TestConnector": true, "history_clusters_internals.mojom.PageHandlerFactory": true, "history_clusters_internals.mojom.PageHandler": true, "history_clusters_internals.mojom.Page": true, "input.mojom.RenderInputRouterDelegate": true, "input.mojom.RenderInputRouterDelegateClient": true, "js_injection.mojom.JsToBrowserMessaging": true, "js_injection.mojom.JsObjectsClient": true, "js_injection.mojom.BrowserToJsMessagingFactory": true, "js_injection.mojom.BrowserToJsMessaging": true, "js_injection.mojom.JsCommunication": true, "language_detection.mojom.ContentLanguageDetectionDriver": true, "components.media_control.mojom.MediaPlaybackOptions": true, "media_router.mojom.Debugger": true, "media_router.mojom.Logger": true, "media_router.mojom.MediaController": true, "media_router.mojom.MediaRouteProvider": true, "media_router.mojom.MediaRouter": true, "media_router.mojom.MediaRouterTraitsTestService": true, "media_router.mojom.MediaStatusObserver": true, "metrics.dwa.mojom.DwaRecorderClientInterface": true, "metrics.dwa.mojom.DwaRecorderInterface": true, "metrics.dwa.mojom.DwaRecorderFactory": true, "metrics.mojom.CallStackProfileCollector": true, "metrics.mojom.CallStackProfileCollectorTest": true, "metrics.mojom.ChildHistogramFetcherFactory": true, "metrics.mojom.ChildHistogramFetcher": true, "metrics.mojom.SingleSampleMetricsProvider": true, "metrics.mojom.SingleSampleMetric": true, "mirroring.mojom.CastMessageChannel": true, "mirroring.mojom.MirroringService": true, "mirroring.mojom.AudioStreamCreatorClient": true, "mirroring.mojom.ResourceProvider": true, "mirroring.mojom.SessionObserver": true, "network_hints.mojom.NetworkHintsHandler": true, "prerender.mojom.NoStatePrefetchCanceler": true, "prerender.mojom.NoStatePrefetchMessages": true, "searchbox.mojom.PageHandlerFactory": true, "searchbox.mojom.PageHandler": true, "searchbox.mojom.Page": true, "on_device_translation.mojom.FileOperationProxy": true, "on_device_translation.mojom.OnDeviceTranslationService": true, "on_device_translation.mojom.OnDeviceTranslator": true, "on_load_script_injector.mojom.OnLoadScriptInjector": true, "optimization_guide.mojom.PageTextConsumer": true, "optimization_guide.mojom.PageTextService": true, "optimization_guide_internals.mojom.PageHandlerFactory": true, "optimization_guide_internals.mojom.Page": true, "optimization_guide.mojom.ModelSolution": true, "optimization_guide.mojom.ModelSubscriber": true, "optimization_guide.mojom.ModelBroker": true, "optimization_guide.mojom.ModelBrokerDebugObserver": true, "optimization_guide.mojom.ModelBrokerDebug": true, "page_content_annotations.mojom.PageStabilityMonitor": true, "page_content_annotations.mojom.PageStabilityMonitorManager": true, "page_image_service.mojom.PageImageServiceHandler": true, "page_load_metrics.mojom.PageLoadMetrics": true, "paint_preview.mojom.PaintPreviewRecorder": true, "password_manager.mojom.CSVPasswordParser": true, "performance_manager.mojom.DocumentCoordinationUnit": true, "performance_manager.mojom.ProcessCoordinationUnit": true, "performance_manager.mojom.ChildProcessCoordinationUnit": true, "policy.mojom.PolicyPageHandler": true, "policy.mojom.PolicyPageClient": true, "policy.mojom.PolicyPageHandlerFactory": true, "printing.mojom.PrintPreviewUI": true, "printing.mojom.PrintRenderFrame": true, "printing.mojom.PrintManagerHost": true, "private_ai.mojom.OakSession": true, "private_ai_internals.mojom.PrivateAiInternalsPage": true, "private_ai_internals.mojom.PrivateAiInternalsPageHandler": true, "private_verification_tokens.mojom.PrivateVerificationTokensProvider": true, "record_replay.mojom.RecordReplayAgent": true, "record_replay.mojom.RecordReplayDriver": true, "remote_cocoa.mojom.AlertBridge": true, "remote_cocoa.mojom.StubInterface": true, "remote_cocoa.mojom.Application": true, "remote_cocoa.mojom.MenuHost": true, "remote_cocoa.mojom.Menu": true, "remote_cocoa.mojom.NativeWidgetNSWindow": true, "remote_cocoa.mojom.NativeWidgetNSWindowHost": true, "remote_cocoa.mojom.SelectFileDialog": true, "remote_cocoa.mojom.TextInputHost": true, "safe_browsing.mojom.SafeBrowsing": true, "safe_browsing.mojom.ThreatReporter": true, "safe_browsing.mojom.PhishingDetector": true, "safe_browsing.mojom.PhishingModelSetter": true, "safe_browsing.mojom.PhishingModelSetterTestObserver": true, "safe_browsing.mojom.PhishingImageEmbedderDetector": true, "safe_browsing.mojom.ExtensionWebRequestReporter": true, "safe_browsing.mojom.SafeBrowsingUrlChecker": true, "security_interstitials.mojom.InterstitialCommands": true, "filesystem.mojom.Directory": true, "font_service.mojom.FontService": true, "font_data_service.mojom.FontDataService": true, "heap_profiling.mojom.ProfilingClient": true, "heap_profiling.mojom.ProfilingService": true, "paint_preview.mojom.PaintPreviewCompositor": true, "paint_preview.mojom.PaintPreviewCompositorCollection": true, "patch.mojom.FilePatcher": true, "printing.mojom.PrintCompositor": true, "quarantine.mojom.Quarantine": true, "storage.mojom.IndexedDBClientStateChecker": true, "storage.mojom.IndexedDBClientKeepActive": true, "storage.mojom.IndexedDBObserver": true, "storage.mojom.IndexedDBControl": true, "storage.mojom.MockFailureInjector": true, "storage.mojom.IndexedDBControlTest": true, "storage.mojom.BlobDataItemReader": true, "storage.mojom.BlobStorageContext": true, "storage.mojom.CacheStorageObserver": true, "storage.mojom.CacheStorageControl": true, "storage.mojom.FileSystemAccessContext": true, "storage.mojom.FileLock": true, "storage.mojom.Directory": true, "storage.mojom.LocalStorageControl": true, "storage.mojom.QuotaClient": true, "storage.mojom.ServiceWorkerLiveVersionRef": true, "storage.mojom.ServiceWorkerResourceReader": true, "storage.mojom.ServiceWorkerResourceWriter": true, "storage.mojom.ServiceWorkerResourceMetadataWriter": true, "storage.mojom.ServiceWorkerStorageControl": true, "storage.mojom.SessionStorageControl": true, "storage.mojom.StorageService": true, "unzip.mojom.UnzipFilter": true, "unzip.mojom.UnzipListener": true, "unzip.mojom.Unzipper": true, "site_engagement.mojom.SiteEngagementDetailsProvider": true, "spellcheck.mojom.SpellChecker": true, "spellcheck.mojom.SpellCheckInitializationHost": true, "spellcheck.mojom.SpellCheckHost": true, "spellcheck.mojom.SpellCheckPanel": true, "spellcheck.mojom.SpellCheckPanelHost": true, "subresource_filter.mojom.SubresourceFilterAgent": true, "subresource_filter.mojom.SubresourceFilterHost": true, "subresource_filter.mojom.SubresourceFilterRulesetObserver": true, "surface_embed.mojom.SurfaceEmbed": true, "surface_embed.mojom.SurfaceEmbedHost": true, "system_media_controls.mojom.SystemMediaControls": true, "system_media_controls.mojom.SystemMediaControlsObserver": true, "translate.mojom.TranslateAgent": true, "translate.mojom.ContentTranslateDriver": true, "unexportable_keys.mojom.UnexportableKeyService": true, "url_rewrite.mojom.UrlRequestRulesReceiver": true, "user_data_importer.mojom.BookmarkHtmlParser": true, "visitedlink.mojom.VisitedLinkNotificationSink": true, "viz.mojom.VizDebugOutput": true, "vrp_flags.mojom.VrpFlags": true, "vrp_flags.mojom.VrpFlagsFactory": true, "wallet.mojom.ImageExtractor": true, "web_cache.mojom.WebCache": true, "web_package.mojom.WebBundleParserFactory": true, "web_package.mojom.WebBundleParser": true, "web_package.mojom.BundleDataSource": true, "webapps.mojom.WebPageMetadataAgent": true, "chrome_urls.mojom.PageHandlerFactory": true, "chrome_urls.mojom.PageHandler": true, "chrome_urls.mojom.Page": true, "attribution_internals.mojom.Observer": true, "attribution_internals.mojom.Handler": true, "attribution_internals.mojom.Factory": true, "storage.mojom.IdbInternalsHandler": true, "private_aggregation_internals.mojom.Observer": true, "private_aggregation_internals.mojom.Handler": true, "private_aggregation_internals.mojom.Factory": true, "mojom.ProcessInternalsHandler": true, "traces_internals.mojom.TracesInternalsHandlerFactory": true, "traces_internals.mojom.PageHandler": true, "traces_internals.mojom.Page": true, "webxr.mojom.WebXrInternalsHandler": true, "webxr.mojom.XRInternalsSessionListener": true, "content.mojom.AgentSchedulingGroupHost": true, "content.mojom.AgentSchedulingGroup": true, "content.mojom.RouteProvider": true, "content.mojom.ChildProcessHost": true, "content.mojom.ChildProcess": true, "content.mojom.DomAutomationControllerHost": true, "content.mojom.MhtmlFileWriter": true, "content.mojom.FieldTrialRecorder": true, "content.mojom.FrameHTMLSerializerHandler": true, "content.mojom.Frame": true, "content.mojom.FrameBindingsControl": true, "content.mojom.NavigationRendererCancellationListener": true, "content.mojom.NavigationRendererIgnoreDuplicateNavigationListener": true, "content.mojom.FrameHost": true, "content.mojom.GinJavaBridge": true, "content.mojom.GinJavaBridgeRemoteObject": true, "content.mojom.GinJavaBridgeHost": true, "content.mojom.InputInjector": true, "content.mojom.MediaInternalLogRecords": true, "content.mojom.MemoryConsumerTraitsTest": true, "content.mojom.ChildMemoryCoordinator": true, "content.mojom.ChildMemoryConsumerRegistryHost": true, "content.mojom.MemoryCoordinatorDiagnosticsHost": true, "content.mojom.NavigationClient": true, "content.mojom.RenderMessageFilter": true, "remote_cocoa.mojom.PopupMenuRunner": true, "remote_cocoa.mojom.RenderWidgetHostNSView": true, "remote_cocoa.mojom.RenderWidgetHostNSViewHost": true, "content.mojom.Renderer": true, "content.mojom.RendererHost": true, "content.mojom.RendererVariationsConfiguration": true, "content.mojom.SandboxSupport": true, "content.mojom.SyntheticTrialConfiguration": true, "content.mojom.ThreadTypeSwitcher": true, "remote_cocoa.mojom.WebContentsNSView": true, "remote_cocoa.mojom.WebContentsNSViewHost": true, "content.mojom.WebUIHost": true, "content.mojom.WebUI": true, "content.mojom.FontCacheWin": true, "content.mojom.ResourceUsageReporter": true, "content.mojom.TestInterfaceForDefer": true, "content.mojom.TestInterfaceForGrant": true, "content.mojom.TestInterfaceForCancel": true, "content.mojom.TestInterfaceForUnexpected": true, "content.mojom.MojoContextProvider": true, "content.mojom.TestService": true, "auction_worklet.mojom.AuctionNetworkEventsHandler": true, "auction_worklet.mojom.AuctionSharedStorageHost": true, "auction_worklet.mojom.LoadSellerWorkletClient": true, "auction_worklet.mojom.AuctionWorkletService": true, "auction_worklet.mojom.GenerateBidClient": true, "auction_worklet.mojom.GenerateBidFinalizer": true, "auction_worklet.mojom.BidderWorklet": true, "auction_worklet.mojom.ScoreAdClient": true, "auction_worklet.mojom.SellerWorklet": true, "auction_worklet.mojom.TrustedSignalsCacheClient": true, "auction_worklet.mojom.TrustedSignalsCache": true, "content.mojom.MainFrameCounterTest": true, "content.mojom.MemoryCoordinatorTest": true, "content.mojom.MemoryCoordinatorTestClient": true, "content.mojom.PowerMonitorTest": true, "content.mojom.RenderFrameTestHelper": true, "content.mojom.FrameHostTestInterface": true, "content.mojom.FakeBluetoothChooser": true, "content.mojom.FakeBluetoothChooserFactory": true, "content.mojom.FakeBluetoothChooserClient": true, "content.mojom.MojoEcho": true, "content.optional_numerics_unittest.mojom.Params": true, "content.optional_numerics_unittest.mojom.ResponseParams": true, "content.optional_numerics_unittest.mojom.InterfaceV0": true, "content.optional_numerics_unittest.mojom.InterfaceV2": true, "content.mojom.WebTestRenderFrame": true, "content.mojom.WebTestControlHost": true, "content.mojom.NonAssociatedWebTestControlHost": true, "content.mojom.WebTestBluetoothFakeAdapterSetter": true, "bluetooth.mojom.Advertisement": true, "bluetooth.mojom.DiscoverySession": true, "bluetooth.mojom.Socket": true, "bluetooth.mojom.ServerSocket": true, "bluetooth.mojom.GattService": true, "bluetooth.mojom.GattServiceObserver": true, "bluetooth.mojom.Adapter": true, "bluetooth.mojom.AdapterObserver": true, "bluetooth.mojom.Device": true, "bluetooth.mojom.FakeBluetooth": true, "bluetooth.mojom.FakeCentral": true, "bluetooth.mojom.FakeCentralClient": true, "device.mojom.GamepadObserver": true, "device.mojom.GamepadMonitor": true, "device.mojom.GamepadHapticsManager": true, "device.mojom.XRSessionController": true, "device.mojom.XRRuntimeEventListener": true, "device.mojom.XRRuntime": true, "device.mojom.ImmersiveOverlay": true, "device.mojom.IsolatedXRRuntimeProviderClient": true, "device.mojom.IsolatedXRRuntimeProvider": true, "device.mojom.XRDeviceService": true, "device.mojom.XRDeviceServiceHost": true, "device_test.mojom.XRTestHook": true, "device_test.mojom.XRServiceTestHook": true, "device.mojom.VRService": true, "device.mojom.XRSessionMetricsRecorder": true, "device.mojom.VRServiceClient": true, "device.mojom.XREnvironmentIntegrationProvider": true, "device.mojom.XRFrameDataProvider": true, "device.mojom.XRPresentationProvider": true, "device.mojom.XRPresentationClient": true, "device.mojom.XRSessionClient": true, "device.mojom.XRLayerManager": true, "device.mojom.WebXrInternalsRendererListener": true, "extensions.mime_handler.MimeHandlerService": true, "extensions.mime_handler.BeforeUnloadControl": true, "extensions.mojom.AppWindow": true, "extensions.mojom.RendererAutomationRegistry": true, "extensions.mojom.EventDispatcher": true, "extensions.mojom.EventRouter": true, "extensions.mojom.LocalFrame": true, "extensions.mojom.LocalFrameHost": true, "extensions.mojom.GuestView": true, "extensions.mojom.MimeHandlerViewContainerManager": true, "extensions.KeepAlive": true, "extensions.mojom.MessagePort": true, "extensions.mojom.MessagePortHost": true, "extensions.mojom.Renderer": true, "extensions.mojom.RendererHost": true, "extensions.mojom.ServiceWorker": true, "extensions.mojom.ServiceWorkerHost": true, "mojom.WebEngineMediaResourceProvider": true, "gpu.mojom.GpuChannel": true, "gpu.mojom.CommandBuffer": true, "gpu.mojom.CommandBufferClient": true, "gpu.mojom.DCOMPTexture": true, "gpu.mojom.DCOMPTextureClient": true, "gpu.mojom.SharedImagePoolClientInterface": true, "ai.mojom.AIPrototypingService": true, "ai.mojom.EnhancedCalendarService": true, "ai.mojom.ModelLedSuggestionsService": true, "ai.mojom.SmartTabGroupingService": true, "ai.mojom.TabOrganizationService": true, "inspect.mojom.PageHandler": true, "inspect.mojom.Page": true, "inspect.mojom.PageHandlerFactory": true, "web.mojom.WebUsageController": true, "IPC.mojom.Channel": true, "IPC.mojom.ChannelBootstrap": true, "media.mojom.ImageCapture": false, "media.mojom.VideoCaptureObserver": true, "media.mojom.VideoCaptureHost": true, "cros.mojom.Camera3CallbackOps": true, "cros.mojom.Camera3DeviceOps": true, "cros.mojom.CameraAppDeviceProvider": true, "cros.mojom.CameraAppDeviceBridge": true, "cros.mojom.CameraAppDevice": true, "cros.mojom.ResultMetadataObserver": true, "cros.mojom.CameraEventObserver": true, "cros.mojom.DocumentCornersObserver": true, "cros.mojom.CameraInfoObserver": true, "cros.mojom.StillCaptureResultObserver": true, "cros.mojom.CameraModuleCallbacks": true, "cros.mojom.VendorTagOps": true, "cros.mojom.CameraModule": true, "cros.mojom.CameraHalClient": true, "cros.mojom.KioskVisionObserver": true, "cros.mojom.CameraHalDispatcher": true, "cros.mojom.CrosCameraServiceObserver": true, "cros.mojom.CrosCameraService": true, "cros.mojom.CrosDocumentScanner": true, "cros.mojom.JpegAcceleratorProvider": true, "cros.mojom.CrosDisplayObserver": true, "cros.mojom.CrosLidObserver": true, "cros.mojom.CrosPowerObserver": true, "cros.mojom.CrosSystemEventMonitor": true, "cros.mojom.VideoCaptureDeviceInfoObserver": true, "cros.mojom.VideoCaptureDeviceInfoMonitor": true, "midi.mojom.MidiSessionClient": true, "midi.mojom.MidiSessionProvider": true, "midi.mojom.MidiSession": true, "media.mojom.AndroidOverlayProvider": true, "media.mojom.AndroidOverlay": true, "media.mojom.AndroidOverlayClient": true, "media.mojom.AudioDecoder": true, "media.mojom.AudioDecoderClient": true, "media.mojom.AudioEncoder": true, "media.mojom.AudioEncoderClient": true, "media.mojom.AudioInputStream": true, "media.mojom.AudioInputStreamClient": true, "media.mojom.AudioInputStreamObserver": true, "media.mojom.AudioLog": true, "media.mojom.AudioLogFactory": true, "media.mojom.AudioOutputStream": true, "media.mojom.AudioOutputStreamObserver": true, "media.mojom.AudioOutputStreamProvider": true, "media.mojom.AudioOutputStreamProviderClient": true, "media.mojom.DeviceSwitchInterface": true, "media.mojom.AudioProcessorControls": true, "media.mojom.LocalMuter": true, "media.mojom.AudioStreamFactory": true, "media.mojom.CastApplicationMediaInfoManager": true, "media.mojom.CdmContextEventCallback": true, "media.mojom.CdmContextForOOPVD": true, "media.mojom.CdmDocumentService": true, "media.mojom.CdmService": true, "media.mojom.CdmServiceBroker": true, "media.mojom.CdmStorage": true, "media.mojom.CdmFile": true, "media.mojom.ContentDecryptionModule": true, "media.mojom.ContentDecryptionModuleClient": true, "media.mojom.CdmFactory": true, "media.mojom.DCOMPSurfaceRegistry": true, "media.mojom.Decryptor": true, "media.mojom.FrameResourceReleaser": true, "media.mojom.DemuxerStream": true, "media.mojom.MuteStateObserver": true, "media.mojom.FrameInterfaceFactory": true, "media.mojom.FuchsiaMediaCdmProvider": true, "media.mojom.FuchsiaMediaCodecProvider": true, "media.mojom.VideoDecoderTracker": true, "media.mojom.InterfaceFactory": true, "media.mojom.KeySystemSupportObserver": true, "media.mojom.KeySystemSupport": true, "media.mojom.MediaDrmStorage": true, "media.mojom.MediaFoundationPreferences": true, "media.mojom.GpuInfoObserver": true, "media.mojom.MediaFoundationService": true, "media.mojom.MediaFoundationServiceBroker": true, "media.mojom.MediaLog": true, "media.mojom.MediaMetricsProvider": true, "media.mojom.MediaPlayer": true, "media.mojom.MediaPlayerObserverClient": true, "media.mojom.MediaPlayerObserver": true, "media.mojom.MediaPlayerHost": true, "media.mojom.MediaService": true, "media.mojom.MediaDrmSupport": true, "media.mojom.OutputProtection": true, "media.mojom.PlaybackEventsRecorder": true, "media.mojom.ProvisionFetcher": true, "media.mojom.RemoterFactory": true, "media.mojom.RemotingDataStreamSender": true, "media.mojom.Remoter": true, "media.mojom.RemotingSource": true, "media.mojom.Remotee": true, "media.mojom.RemotingSink": true, "media.mojom.RemotingDataStreamReceiver": true, "media.mojom.Renderer": true, "media.mojom.RendererClient": true, "media.mojom.FlingingRendererClientExtension": true, "media.mojom.MediaFoundationRendererExtension": true, "media.mojom.MediaFoundationRendererObserver": true, "media.mojom.MediaFoundationRendererNotifier": true, "media.mojom.SpeechRecognitionContext": true, "media.mojom.SpeechRecognitionRecognizer": true, "media.mojom.SpeechRecognitionRecognizerClient": true, "media.mojom.SpeechRecognitionBrowserObserver": true, "media.mojom.SpeechRecognitionSurface": true, "media.mojom.SpeechRecognitionSurfaceClient": true, "media.mojom.SpeechRecognitionClientBrowserInterface": true, "media.mojom.SpeechRecognitionAudioForwarder": true, "media.mojom.AudioSourceSpeechRecognitionContext": true, "media.mojom.SpeechRecognitionService": true, "media.mojom.AudioSourceFetcher": true, "media.mojom.SpeechRecognizer": true, "media.mojom.OnDeviceSpeechRecognition": true, "media.mojom.SpeechRecognitionSession": true, "media.mojom.SpeechRecognitionSessionClient": true, "media.mojom.VideoDecodePerfHistory": true, "media.mojom.VideoDecodeStatsRecorder": true, "media.mojom.VideoFrameHandleReleaser": true, "media.mojom.VideoDecoder": true, "media.mojom.VideoDecoderClient": true, "media.mojom.VideoDecoderFactoryProcess": true, "media.mojom.VideoEncodeAcceleratorProvider": true, "media.mojom.VideoEncodeAcceleratorProviderFactory": true, "media.mojom.VideoEncodeAccelerator": true, "media.mojom.VideoEncodeAcceleratorClient": true, "media.mojom.VideoEncoderMetricsProvider": true, "media.mojom.WatchTimeRecorder": true, "media.mojom.WebrtcVideoPerfRecorder": true, "media.mojom.WebrtcVideoPerfHistory": true, "mojo_base.mojom.Binder": true, "mojo_base.mojom.GenericAssociatedInterface": true, "fuzz.mojom.FuzzDummyInterface": true, "fuzz.mojom.FuzzInterface": true, "pdf.mojom.SaveDataBufferHandler": true, "pdf.mojom.PdfListener": true, "pdf.mojom.PdfHost": true, "remoting.mojom.ChromotingHostServices": true, "remoting.mojom.ChromotingSessionServices": true, "remoting.mojom.DesktopSessionRequestHandler": true, "remoting.mojom.DesktopSessionManager": true, "remoting.mojom.DesktopSessionAgent": true, "remoting.mojom.FileWriter": true, "remoting.mojom.FileReader": true, "remoting.mojom.DesktopSessionControl": true, "remoting.mojom.VideoCapturer": true, "remoting.mojom.VideoCapturerEventHandler": true, "remoting.mojom.DesktopSessionEventHandler": true, "remoting.mojom.DesktopSessionStateHandler": true, "remoting.mojom.WorkerProcessControl": true, "remoting.mojom.DesktopProcessControl": true, "remoting.mojom.LoginSessionService": true, "remoting.mojom.PeerConnectionProcessControl": true, "remoting.mojom.SecurityKeyForwarder": true, "remoting.mojom.SupportHostObserver": true, "remoting.mojom.RemoteUrlOpener": true, "remoting.mojom.RemotingHostControl": true, "remoting.mojom.DesktopSessionConnectionEvents": true, "remoting.mojom.HostStatusObserver": true, "remoting.mojom.WebAuthnRequestCanceller": true, "remoting.mojom.WebAuthnProxy": true, "sandbox.mac.mojom.TraitsTestService": true, "ax.android.mojom.AccessibilityHelperHost": true, "ax.android.mojom.AccessibilityHelperInstance": true, "ax.mojom.AssistiveTechnologyController": true, "ax.mojom.AccessibilityService": true, "ax.mojom.AccessibilityServiceClient": true, "ax.mojom.Autoclick": true, "ax.mojom.AutoclickClient": true, "ax.mojom.Automation": true, "ax.mojom.AutomationClient": true, "ax.mojom.AccessibilityFileLoader": true, "ax.mojom.SpeechRecognitionEventObserver": true, "ax.mojom.SpeechRecognition": true, "ax.mojom.TtsUtteranceClient": true, "ax.mojom.Tts": true, "ax.mojom.UserInput": true, "ax.mojom.UserInterface": true, "audio.mojom.AudioService": true, "audio.mojom.DebugRecordingFileProvider": true, "audio.mojom.DebugRecording": true, "audio.mojom.DeviceListener": true, "audio.mojom.DeviceNotifier": true, "audio.mojom.LogFactoryManager": true, "audio.mojom.MlModelManager": true, "audio.mojom.SystemInfo": true, "audio.mojom.TestingApi": true, "cert_verifier.mojom.CertVerifierServiceFactory": true, "data_decoder.mojom.CborParser": true, "data_decoder.mojom.DataDecoderService": true, "data_decoder.mojom.Gzipper": true, "data_decoder.mojom.ImageDecoder": true, "data_decoder.mojom.StructuredHeadersParser": true, "data_decoder.mojom.XmlParser": true, "device.mojom.BatteryMonitor": true, "device.mojom.DeviceService": true, "device.mojom.FingerprintObserver": true, "device.mojom.Fingerprint": true, "device.mojom.Geolocation": true, "device.mojom.GeolocationContext": true, "device.mojom.GeolocationControl": true, "device.mojom.GeolocationInternalsObserver": true, "device.mojom.GeolocationInternals": true, "device.mojom.HidManagerClient": true, "device.mojom.HidManager": true, "device.mojom.HidConnection": true, "device.mojom.HidConnectionClient": true, "device.mojom.HidConnectionWatcher": true, "device.mojom.InputDeviceManagerClient": true, "device.mojom.InputDeviceManager": true, "device.mojom.MtpManagerClient": true, "device.mojom.MtpManager": true, "device.mojom.NFC": true, "device.mojom.NFCClient": true, "device.mojom.NFCProvider": true, "device.mojom.PowerMonitor": true, "device.mojom.PowerMonitorClient": true, "device.mojom.PressureManager": true, "device.mojom.PressureClient": true, "device.mojom.PublicIpAddressGeolocationProvider": true, "device.mojom.ScreenOrientation": true, "device.mojom.ScreenOrientationListener": true, "device.mojom.Sensor": false, "device.mojom.SensorClient": false, "device.mojom.SensorClientController": false, "device.mojom.SensorProvider": false, "device.mojom.SerialPortManager": true, "device.mojom.SerialPortManagerClient": true, "device.mojom.SerialPort": true, "device.mojom.SerialPortClient": true, "device.mojom.SerialPortConnectionWatcher": true, "device.mojom.SmartCardTransaction": true, "device.mojom.SmartCardConnection": true, "device.mojom.SmartCardConnectionWatcher": true, "device.mojom.SmartCardContext": true, "device.mojom.SmartCardContextFactory": true, "device.mojom.TimeZoneMonitor": true, "device.mojom.TimeZoneMonitorClient": true, "device.mojom.UsbDevice": false, "device.mojom.UsbDeviceClient": false, "device.mojom.UsbDeviceManager": false, "device.mojom.UsbDeviceManagerClient": false, "device.mojom.UsbDeviceManagerTest": true, "device.mojom.VibrationManager": true, "device.mojom.VibrationManagerListener": true, "device.mojom.WakeLock": true, "device.mojom.WakeLockContext": true, "device.mojom.WakeLockProvider": true, "device.mojom.WakeLockObserver": true, "image_annotation.mojom.ImageProcessor": true, "image_annotation.mojom.Annotator": true, "image_annotation.mojom.ImageAnnotationService": true, "media_session.mojom.AudioFocusObserver": true, "media_session.mojom.AudioFocusRequestClient": true, "media_session.mojom.AudioFocusManager": true, "media_session.mojom.AudioFocusManagerDebug": true, "media_session.mojom.MediaControllerManager": true, "media_session.mojom.MediaController": true, "media_session.mojom.MediaControllerObserver": true, "media_session.mojom.MediaControllerImageObserver": true, "media_session.mojom.MediaSessionObserver": true, "media_session.mojom.MediaSession": true, "media_session.mojom.MediaSessionService": true, "ukm.mojom.SingularUkmInterface": true, "ukm.mojom.UkmRecorderClientInterface": true, "ukm.mojom.UkmRecorderInterface": true, "ukm.mojom.UkmRecorderFactory": true, "network.mojom.TraitsTestService": true, "network.mojom.AcceptCHFrameObserver": true, "network.mojom.CacheEncryptionProvider": true, "cert_verifier.mojom.URLLoaderFactoryConnector": true, "cert_verifier.mojom.CertVerifierService": true, "cert_verifier.mojom.CertVerifierServiceClient": true, "cert_verifier.mojom.CertVerifierRequest": true, "cert_verifier.mojom.CertVerifierServiceUpdater": true, "network.mojom.ChunkedDataPipeGetter": true, "network.mojom.ConnectionChangeObserverClient": true, "network.mojom.CookieAccessObserver": true, "network.mojom.CookieEncryptionProvider": true, "network.mojom.CookieChangeListener": true, "network.mojom.CookieManager": true, "network.mojom.CrossOriginEmbedderPolicyReporter": true, "network.mojom.CrossOriginOpenerPolicyReporter": true, "network.mojom.DataPipeGetter": true, "network.mojom.DeviceBoundSessionManager": true, "network.mojom.DeviceBoundSessionAccessObserver": true, "network.mojom.DeviceBoundSessionEventObserver": true, "network.mojom.DevToolsObserver": true, "network.mojom.DocumentIsolationPolicyReporter": true, "network.mojom.FirstPartySetsAccessDelegate": true, "network.mojom.ResolveHostHandle": true, "network.mojom.ResolveHostClient": true, "network.mojom.MdnsListenClient": true, "network.mojom.HostResolver": true, "network.mojom.DnsConfigChangeManagerClient": true, "network.mojom.DnsConfigChangeManager": true, "network.mojom.FileEnumerator": true, "network.mojom.HttpCacheBackendFileOperations": true, "network.mojom.HttpCacheBackendFileOperationsFactory": true, "network.mojom.MdnsResponder": true, "network.mojom.NetLogExporter": true, "network.mojom.NetLogProxySource": true, "network.mojom.NetLogProxySink": true, "network.mojom.NetworkAnnotationMonitor": true, "network.mojom.NetworkChangeManagerClient": true, "network.mojom.NetworkChangeManager": true, "network.mojom.CustomProxyConnectionObserver": true, "network.mojom.CustomProxyConfigClient": true, "network.mojom.TrustedHeaderClient": true, "network.mojom.TrustedURLLoaderHeaderClient": true, "network.mojom.PreloadedSharedDictionaryInfoHandle": true, "network.mojom.NetworkContext": true, "network.mojom.NetworkContextClient": true, "network.mojom.NetworkInterfaceChangeListener": true, "network.mojom.NetworkQualityEstimatorManagerClient": true, "network.mojom.NetworkQualityEstimatorManager": true, "network.mojom.NetworkService": true, "network.mojom.NetworkContextCreator": true, "network.mojom.DurableMessageCollector": true, "network.mojom.SimpleCacheEntry": true, "network.mojom.SimpleCacheEntryEnumerator": true, "network.mojom.SimpleCache": true, "network.mojom.NetworkServiceTest": true, "network.mojom.ObliviousHttpClient": true, "network.mojom.P2PNetworkNotificationClient": true, "network.mojom.P2PSocketManager": true, "network.mojom.P2PSocket": true, "network.mojom.P2PSocketClient": true, "network.mojom.P2PTrustedSocketManagerClient": true, "network.mojom.P2PTrustedSocketManager": true, "network.mojom.ProxyConfigClient": true, "network.mojom.ProxyConfigPollerClient": true, "network.mojom.ProxyErrorClient": true, "network.mojom.ProxyLookupClient": true, "network.mojom.ProxyResolvingSocket": true, "network.mojom.ProxyResolvingSocketFactory": true, "network.mojom.ReportingApiObserver": true, "network.mojom.RestrictedCookieManager": true, "network.mojom.RestrictedUDPSocket": true, "network.mojom.SharedDictionaryAccessObserver": true, "network.mojom.SocketBroker": true, "network.mojom.SocketConnectionTracker": true, "network.mojom.SSLConfigClient": true, "network.mojom.SystemDnsResolver": true, "network.mojom.TCPBoundSocket": true, "network.mojom.TCPConnectedSocket": true, "network.mojom.SocketObserver": true, "network.mojom.TCPServerSocket": true, "network.mojom.TLSClientSocket": true, "network.mojom.TrustTokenAccessObserver": true, "network.mojom.TrustTokenQueryAnswerer": true, "network.mojom.UDPSocket": true, "network.mojom.UDPSocketListener": true, "network.mojom.URLLoader": true, "network.mojom.URLLoaderClient": true, "network.mojom.URLLoaderFactory": true, "network.mojom.ClientCertificateResponder": true, "network.mojom.SSLPrivateKey": true, "network.mojom.AuthChallengeResponder": true, "network.mojom.URLLoaderNetworkServiceObserver": true, "network.mojom.WebBundleHandle": true, "network.mojom.WebTransport": true, "network.mojom.WebTransportClient": true, "network.mojom.WebTransportHandshakeClient": true, "network.mojom.WebSocketAuthenticationHandler": true, "network.mojom.WebSocketHandshakeClient": true, "network.mojom.WebSocketClient": true, "network.mojom.WebSocket": true, "on_device_model.mojom.DownloadObserver": true, "on_device_model.mojom.StreamingResponder": true, "on_device_model.mojom.ContextClient": true, "on_device_model.mojom.Session": true, "on_device_model.mojom.OnDeviceModel": true, "on_device_model.mojom.TextSafetySession": true, "on_device_model.mojom.TextSafetyModel": true, "on_device_model.mojom.AsrStreamResponder": true, "on_device_model.mojom.AsrStreamInput": true, "on_device_model.mojom.PlatformModelProgressObserver": true, "on_device_model.mojom.OnDeviceModelService": true, "on_device_model.mojom.OnDeviceModelPlatformService": true, "passage_embeddings.mojom.PassageEmbedder": true, "passage_embeddings.mojom.PassageEmbeddingsService": true, "prefs.mojom.ResetOnLoadObserver": true, "prefs.mojom.TrackedPreferenceValidationDelegate": true, "proxy_resolver.mojom.HostResolverRequestClient": true, "proxy_resolver.mojom.ProxyResolver": true, "proxy_resolver.mojom.ProxyResolverRequestClient": true, "proxy_resolver.mojom.ProxyResolverFactory": true, "proxy_resolver.mojom.ProxyResolverFactoryRequestClient": true, "proxy_resolver.mojom.SystemProxyResolver": true, "memory_instrumentation.mojom.ClientProcess": true, "memory_instrumentation.mojom.HeapProfiler": true, "memory_instrumentation.mojom.HeapProfilerHelper": true, "memory_instrumentation.mojom.Coordinator": true, "memory_instrumentation.mojom.CoordinatorConnector": true, "screen_ai.mojom.ScreenAIServiceShutdownHandler": true, "screen_ai.mojom.ScreenAIServiceFactory": true, "screen_ai.mojom.ScreenAIAnnotator": true, "screen_ai.mojom.Screen2xMainContentExtractor": true, "screen_ai.mojom.OCRService": true, "screen_ai.mojom.MainContentExtractionService": true, "service_manager.mojom.ProcessMetadata": true, "service_manager.mojom.Connector": true, "service_manager.mojom.InterfaceProvider": true, "service_manager.mojom.Service": true, "service_manager.mojom.ServiceControl": true, "service_manager.mojom.ServiceManagerListener": true, "service_manager.mojom.ServiceManager": true, "shape_detection.mojom.BarcodeDetection": true, "shape_detection.mojom.BarcodeDetectionProvider": true, "shape_detection.mojom.FaceDetection": true, "shape_detection.mojom.FaceDetectionProvider": true, "shape_detection.mojom.ShapeDetectionService": true, "shape_detection.mojom.TextDetection": true, "echo.mojom.EchoService": true, "tracing.mojom.BackgroundTracingAgentClient": true, "tracing.mojom.BackgroundTracingAgent": true, "tracing.mojom.BackgroundTracingAgentProvider": true, "tracing.mojom.ProducerHost": true, "tracing.mojom.ProducerClient": true, "tracing.mojom.PerfettoService": true, "tracing.mojom.ConsumerHost": true, "tracing.mojom.TracingSessionHost": true, "tracing.mojom.TracingSessionClient": true, "tracing.mojom.SystemTracingService": true, "tracing.mojom.TracedProcess": true, "tracing.mojom.TracingService": true, "video_capture.mojom.Device": true, "video_capture.mojom.DevicesChangedObserver": true, "video_capture.mojom.Producer": true, "video_capture.mojom.TestingControls": true, "video_capture.mojom.VideoCaptureService": true, "video_capture.mojom.VideoFrameAccessHandler": true, "video_capture.mojom.VideoFrameHandler": true, "video_capture.mojom.PushVideoStreamSubscription": true, "video_capture.mojom.VideoSource": true, "video_capture.mojom.VideoSourceProvider": true, "video_capture.mojom.SharedMemoryVirtualDevice": true, "video_capture.mojom.TextureVirtualDevice": true, "video_capture.mojom.GpuMemoryBufferVirtualDevice": true, "viz.mojom.BeginFrameObserver": true, "viz.mojom.DisplayPrivate": true, "viz.mojom.DisplayClient": true, "viz.mojom.ExternalBeginFrameController": true, "viz.mojom.ExternalBeginFrameControllerClient": true, "viz.mojom.FrameSinkManager": true, "viz.mojom.FrameSinkManagerClient": true, "viz.mojom.RendererInputRouterDelegateRegistry": true, "viz.mojom.FrameSinkManagerTestApi": true, "viz.mojom.FrameSinkVideoConsumerFrameCallbacks": true, "viz.mojom.FrameSinkVideoConsumer": true, "viz.mojom.FrameSinkVideoCapturer": true, "viz.mojom.FrameSinkVideoCaptureOverlay": true, "viz.mojom.FrameSinksMetricsRecorder": true, "viz.mojom.LayeredWindowUpdater": true, "viz.mojom.VSyncParameterObserver": true, "viz.mojom.GpuHost": true, "viz.mojom.GpuLogging": true, "viz.mojom.GpuService": true, "viz.mojom.InfoCollectionGpuService": true, "viz.mojom.VizMain": true, "viz.mojom.CompositingModeWatcher": true, "viz.mojom.CompositingModeReporter": true, "viz.mojom.CompositorFrameSink": true, "viz.mojom.CompositorFrameSinkClient": true, "viz.mojom.CopyOutputResultSender": true, "viz.mojom.FrameSinkBundle": true, "viz.mojom.FrameSinkBundleClient": true, "viz.mojom.LayerContext": true, "viz.mojom.LayerContextClient": true, "viz.mojom.TextureReleaser": true, "viz.mojom.VideoDetectorObserver": true, "viz.mojom.Gpu": true, "viz.mojom.InputTargetClient": true, "webnn.mojom.WebNNCompilerContext": true, "webnn.mojom.WebNNCompilerService": true, "webnn.mojom.WebNNContext": true, "webnn.mojom.WebNNContextProvider": true, "webnn.mojom.WebNNWeightsFileCreator": true, "webnn.mojom.WebNNGraphBuilder": true, "webnn.mojom.WebNNModelLoader": true, "webnn.mojom.WebNNServiceIntrospectionClient": true, "webnn.mojom.WebNNServiceIntrospection": true, "webnn.mojom.WebNNTensor": true, "storage.mojom.QuotaInternalsHandler": true, "storage.mojom.QuotaManagerObserver": true, "blink.mojom.AIClassifier": false, "blink.mojom.AIManagerCreateLanguageModelClient": false, "blink.mojom.AILanguageModel": false, "blink.mojom.AIManagerCreateWriterClient": false, "blink.mojom.AIManagerCreateRewriterClient": false, "blink.mojom.AIManagerCreateSummarizerClient": false, "blink.mojom.AIManagerCreateProofreaderClient": false, "blink.mojom.AIManagerCreateClassifierClient": false, "blink.mojom.AIManagerCreateSemanticEmbedderClient": false, "blink.mojom.AIManager": false, "blink.mojom.AIProofreader": false, "blink.mojom.AIRewriter": false, "blink.mojom.AISemanticEmbedder": false, "blink.mojom.AISummarizer": false, "blink.mojom.AIWriter": false, "blink.mojom.ModelStreamingResponder": false, "blink.mojom.AndroidFontLookup": false, "blink.mojom.AnnotationAgent": false, "blink.mojom.AnnotationAgentHost": false, "blink.mojom.AnnotationAgentContainer": false, "blink.mojom.AppBannerController": false, "blink.mojom.AppBannerEvent": false, "blink.mojom.AppBannerService": false, "blink.mojom.AssociatedInterface": false, "blink.mojom.AssociatedInterfaceProvider": false, "blink.mojom.AutoplayConfigurationClient": false, "blink.mojom.BackgroundFetchRegistrationObserver": false, "blink.mojom.BackgroundFetchService": false, "blink.mojom.BackgroundFetchRegistrationService": false, "blink.mojom.OneShotBackgroundSyncService": false, "blink.mojom.PeriodicBackgroundSyncService": false, "blink.mojom.BadgeService": false, "blink.mojom.BlobReaderClient": false, "blink.mojom.Blob": false, "blink.mojom.ProgressClient": false, "blink.mojom.BlobRegistry": false, "blink.mojom.BlobURLStore": false, "blink.mojom.BlobURLToken": false, "blink.mojom.BytesProvider": false, "blink.mojom.FileBackedBlobFactory": false, "blink.mojom.WebBluetoothService": true, "blink.mojom.WebBluetoothServerClient": true, "blink.mojom.WebBluetoothCharacteristicClient": true, "blink.mojom.WebBluetoothAdvertisementClient": true, "blink.mojom.BroadcastChannelClient": true, "blink.mojom.BroadcastChannelProvider": true, "blink.mojom.BrowserInterfaceBroker": false, "blink.mojom.BrowsingTopicsDocumentService": false, "blink.mojom.BucketHost": true, "blink.mojom.BucketManagerHost": true, "blink.mojom.CacheStorageCache": false, "blink.mojom.CacheStorage": false, "blink.mojom.CallStackGenerator": false, "blink.mojom.ColorChooserFactory": false, "blink.mojom.ColorChooser": false, "blink.mojom.ColorChooserClient": false, "blink.mojom.EyeDropperChooser": false, "blink.mojom.DateTimeChooser": false, "blink.mojom.FileChooser": false, "blink.mojom.PopupMenuClient": false, "blink.mojom.IsolatedWebAppApiBridge": false, "blink.mojom.ClipboardListener": false, "blink.mojom.ClipboardHost": false, "blink.mojom.CloseListener": false, "blink.mojom.WebPressureManager": false, "blink.mojom.WebPressureClient": false, "blink.mojom.ContactsManager": false, "blink.mojom.AIPageContentAgent": false, "blink.mojom.PaidContentMetadataObserver": false, "blink.mojom.MetaTagsObserver": false, "blink.mojom.FrameMetadataObserverRegistry": false, "blink.mojom.InnerHtmlAgent": false, "blink.mojom.InnerTextAgent": false, "blink.mojom.ScriptToolHost": false, "blink.mojom.ModelContextHost": false, "blink.mojom.ModelContext": false, "blink.mojom.ContentIndexService": false, "blink.mojom.ContextMenuClient": false, "blink.mojom.AttributionHost": false, "blink.mojom.CookieStore": false, "blink.mojom.CrashMemoryMetricsReporter": false, "blink.mojom.CredentialManager": true, "blink.mojom.ManagedConfigurationObserver": false, "blink.mojom.DeviceAPIService": false, "blink.mojom.ManagedConfigurationService": false, "blink.mojom.DevicePostureProvider": false, "blink.mojom.DevicePostureClient": false, "blink.mojom.DevToolsAgent": false, "blink.mojom.DevToolsAgentHost": false, "blink.mojom.DevToolsSession": false, "blink.mojom.DevToolsSessionHost": false, "blink.mojom.DevToolsFrontend": false, "blink.mojom.DevToolsFrontendHost": false, "payments.mojom.DigitalGoods": false, "payments.mojom.DigitalGoodsFactory": false, "blink.mojom.DirectSocketsService": true, "blink.mojom.DiskAllocator": false, "blink.mojom.DocumentMetadata": false, "blink.mojom.DomStorageProvider": false, "blink.mojom.DomStorage": false, "blink.mojom.DomStorageClient": false, "blink.mojom.SessionStorageNamespace": false, "blink.mojom.StorageAreaObserver": false, "blink.mojom.StorageArea": false, "blink.mojom.DWriteFontProxy": true, "payments.facilitated.mojom.PaymentLinkHandler": false, "blink.mojom.ObservedFeature": false, "blink.mojom.FeatureObserver": false, "blink.mojom.FencedFrameOwnerHost": true, "blink.mojom.FileUtilitiesHost": false, "blink.mojom.FileSystemAccessAccessHandleHost": false, "blink.mojom.FileSystemAccessDataTransferToken": false, "blink.mojom.FileSystemAccessDirectoryEntriesListener": false, "blink.mojom.FileSystemAccessDirectoryHandle": false, "blink.mojom.FileSystemAccessFileDelegateHost": false, "blink.mojom.FileSystemAccessFileHandle": false, "blink.mojom.FileSystemAccessFileModificationHost": false, "blink.mojom.FileSystemAccessFileWriter": false, "blink.mojom.FileSystemAccessManager": false, "blink.mojom.FileSystemAccessObserver": false, "blink.mojom.FileSystemAccessObserverHost": false, "blink.mojom.FileSystemAccessTransferToken": false, "blink.mojom.FileSystemCancellableOperation": false, "blink.mojom.FileSystemOperationListener": false, "blink.mojom.ReceivedSnapshotListener": false, "blink.mojom.FileSystemManager": false, "blink.mojom.FontAccessManager": false, "blink.mojom.FontUniqueNameLookup": false, "blink.mojom.BackForwardCacheControllerHost": true, "blink.mojom.FindInPage": true, "blink.mojom.FindInPageClient": true, "blink.mojom.LocalFrameHost": true, "blink.mojom.NonAssociatedLocalFrameHost": true, "blink.mojom.LocalFrame": true, "blink.mojom.LocalMainFrame": true, "blink.mojom.LocalMainFrameHost": true, "blink.mojom.PolicyContainerHost": false, "blink.mojom.NavigationStateKeepAliveHandle": true, "blink.mojom.RemoteFrameHost": true, "blink.mojom.RemoteFrame": true, "blink.mojom.RemoteMainFrame": true, "blink.mojom.RemoteMainFrameHost": true, "blink.mojom.ReportingObserver": true, "blink.mojom.SurfaceEmbedder": true, "blink.mojom.EmbeddedFrameSinkClient": true, "blink.mojom.EmbeddedFrameSinkProvider": true, "blink.mojom.GeolocationService": false, "blink.mojom.GpuDataManager": true, "handwriting.mojom.HandwritingRecognizer": false, "handwriting.mojom.HandwritingRecognitionService": false, "blink.mojom.HidService": false, "blink.mojom.Hyphenation": false, "blink.mojom.IdleMonitor": false, "blink.mojom.IdleManager": false, "blink.mojom.ImageDownloader": false, "blink.mojom.ImageReplacement": false, "blink.mojom.ImageReplacementHost": false, "blink.mojom.IDBFactoryClient": true, "blink.mojom.IDBDatabaseCallbacks": true, "blink.mojom.IDBCursor": true, "blink.mojom.IDBTransaction": true, "blink.mojom.IDBDatabaseGetAllResultSink": true, "blink.mojom.IDBDatabase": true, "blink.mojom.IDBFactory": true, "blink.mojom.ImeRenderWidgetHost": false, "blink.mojom.WidgetInputHandlerHost": false, "blink.mojom.FrameWidgetInputHandler": false, "blink.mojom.WidgetInputHandler": false, "blink.mojom.TextSuggestionHost": false, "blink.mojom.TextSuggestionBackend": false, "blink.mojom.PointerLockContext": false, "blink.mojom.SynchronousCompositor": true, "blink.mojom.SynchronousCompositorHost": true, "blink.mojom.SynchronousCompositorControlHost": true, "blink.mojom.TextInputHost": true, "blink.mojom.InstallationService": false, "blink.mojom.InstalledAppProvider": false, "blink.mojom.AbortableAdAuction": false, "blink.mojom.AdAuctionService": false, "blink.mojom.KeyboardLockService": false, "blink.mojom.LCPCriticalPathPredictorHost": false, "blink.mojom.LeakDetector": false, "blink.mojom.TextFragmentReceiver": false, "blink.mojom.CodeCacheHost": false, "blink.mojom.ContentSecurityNotifier": false, "blink.mojom.FetchLaterLoaderFactory": false, "blink.mojom.FetchLaterLoader": false, "blink.mojom.KeepAliveHandle": false, "blink.mojom.KeepAliveHandleFactory": false, "blink.mojom.AnchorElementMetricsHost": false, "blink.mojom.PauseSubresourceLoadingHandle": false, "blink.mojom.ResourceLoadInfoNotifier": false, "blink.mojom.LockScreenService": false, "blink.mojom.LockHandle": false, "blink.mojom.LockRequest": false, "blink.mojom.LockManager": false, "blink.mojom.ManifestManager": false, "blink.mojom.ManifestUrlChangeObserver": false, "blink.mojom.FullscreenVideoElementHandler": false, "blink.mojom.RendererAudioInputStreamFactory": false, "blink.mojom.RendererAudioInputStreamFactoryClient": false, "blink.mojom.RendererAudioOutputStreamFactory": false, "blink.mojom.MediaSessionClient": false, "blink.mojom.MediaSessionService": false, "blink.mojom.AecDumpAgent": false, "blink.mojom.AecDumpManager": false, "blink.mojom.MediaDevicesDispatcherHost": false, "blink.mojom.MediaDevicesListener": false, "blink.mojom.MediaStreamDeviceObserver": false, "blink.mojom.MediaStreamDispatcherHost": false, "blink.mojom.MediaStreamTrackMetricsHost": false, "blink.mojom.MemoryUsageMonitorLinux": true, "blink.mojom.ImageReleaseCallback": true, "blink.mojom.MimeRegistry": false, "blink.mojom.NavigationResumeDeferredCommitListener": true, "blink.mojom.NonPersistentNotificationListener": false, "blink.mojom.NotificationService": false, "blink.mojom.TranslationManagerCreateTranslatorClient": false, "blink.mojom.TranslationManager": false, "blink.mojom.Translator": false, "blink.mojom.OomInterventionHost": false, "blink.mojom.OomIntervention": false, "blink.mojom.OriginTrialStateHost": true, "blink.mojom.DisplayCutoutHost": true, "blink.mojom.DisplayCutoutClient": true, "blink.mojom.PageBroadcast": true, "blink.mojom.FrameWidget": true, "blink.mojom.FrameWidgetHost": true, "blink.mojom.PopupWidgetHost": true, "payments.mojom.PaymentManager": false, "payments.mojom.PaymentHandlerResponseCallback": false, "payments.mojom.PaymentHandlerHost": false, "payments.mojom.PaymentRequestClient": false, "payments.mojom.PaymentRequest": false, "payments.mojom.SecurePaymentConfirmationService": false, "blink.mojom.PeerConnectionManager": false, "blink.mojom.PeerConnectionTrackerHost": false, "blink.mojom.V8DetailedMemoryReporter": false, "blink.mojom.PermissionObserver": false, "blink.mojom.EmbeddedPermissionControlClient": false, "blink.mojom.PermissionService": false, "blink.mojom.PersistentRendererPrefsService": false, "blink.mojom.PictureInPictureSessionObserver": false, "blink.mojom.PictureInPictureSession": false, "blink.mojom.PictureInPictureService": false, "blink.mojom.PluginRegistry": false, "blink.mojom.AnchorElementInteractionHost": false, "blink.mojom.NoStatePrefetchProcessor": false, "blink.mojom.PresentationConnection": false, "blink.mojom.PresentationService": false, "blink.mojom.PresentationController": false, "blink.mojom.PresentationReceiver": false, "blink.mojom.WebPrintJobStateObserver": true, "blink.mojom.WebPrintJobController": true, "blink.mojom.WebPrinter": true, "blink.mojom.WebPrintingService": true, "blink.mojom.PrivateAggregationHost": false, "blink.mojom.PushMessaging": false, "blink.mojom.QuotaManagerHost": false, "blink.mojom.RemoteObjectHost": true, "blink.mojom.RemoteObject": true, "blink.mojom.RemoteObjectGatewayFactory": true, "blink.mojom.RemoteObjectGateway": true, "blink.mojom.RenderAccessibilityHost": false, "blink.mojom.RenderAccessibility": false, "blink.mojom.RendererPreferenceWatcher": false, "blink.mojom.ReportingServiceProxy": false, "blink.mojom.WebSensorProvider": false, "blink.mojom.SerialService": false, "blink.mojom.SerialServiceClient": false, "blink.mojom.ControllerServiceWorker": true, "blink.mojom.ControllerServiceWorkerConnector": true, "blink.mojom.EmbeddedWorkerInstanceClient": true, "blink.mojom.EmbeddedWorkerInstanceHost": true, "blink.mojom.ServiceWorkerHost": true, "blink.mojom.ServiceWorker": true, "blink.mojom.ServiceWorkerContainerHost": true, "blink.mojom.ServiceWorkerContainer": true, "blink.mojom.ServiceWorkerFetchResponseCallback": false, "blink.mojom.ServiceWorkerInstalledScriptsManagerHost": false, "blink.mojom.ServiceWorkerInstalledScriptsManager": false, "blink.mojom.ServiceWorkerObjectHost": true, "blink.mojom.ServiceWorkerObject": true, "blink.mojom.ServiceWorkerRegistrationObjectHost": true, "blink.mojom.ServiceWorkerRegistrationObject": true, "blink.mojom.ServiceWorkerRunningStatusCallback": false, "blink.mojom.ServiceWorkerStreamCallback": false, "blink.mojom.ServiceWorkerWorkerClient": false, "blink.mojom.ServiceWorkerWorkerClientRegistry": false, "blink.mojom.SharedStorageWorkletHost": true, "blink.mojom.SharedStorageDocumentService": true, "blink.mojom.SharedStorageEntriesListener": true, "blink.mojom.SharedStorageWorkletServiceClient": true, "blink.mojom.SharedStorageWorkletService": true, "blink.mojom.SmartCardService": false, "blink.mojom.WebOTPService": false, "blink.mojom.SpeculationHost": false, "blink.mojom.SpeechSynthesisVoiceListObserver": false, "blink.mojom.SpeechSynthesisClient": false, "blink.mojom.SpeechSynthesis": false, "blink.mojom.StorageAccessHandle": true, "blink.mojom.SubAppsService": false, "blink.mojom.DeclarativePerformanceObserverHost": false, "blink.mojom.UnboundedSurfaceHost": false, "blink.mojom.UnboundedSurfaceClient": false, "blink.mojom.UnhandledTapNotifier": true, "blink.mojom.WebUsbService": false, "blink.mojom.WakeLockService": false, "blink.mojom.WebInstallService": false, "blink.mojom.WebLaunchService": false, "blink.mojom.AudioContextManager": false, "blink.mojom.Authenticator": true, "blink.mojom.DigitalIdentityRequest": false, "blink.mojom.FederatedRequest": false, "blink.mojom.FederatedRequestService": false, "blink.mojom.WebNNIntrospectionClient": true, "blink.mojom.WebNNIntrospection": true, "blink.mojom.RTCLoggingDispatcher": false, "blink.mojom.ShareService": false, "blink.mojom.WebSocketConnector": false, "blink.mojom.WebTransportConnector": false, "blink.mojom.WebViewMediaIntegrityService": true, "blink.mojom.WebViewMediaIntegrityProvider": true, "blink.mojom.WidgetCompositor": false, "blink.mojom.WidgetHost": false, "blink.mojom.Widget": false, "blink.mojom.RenderInputRouterClient": false, "blink.mojom.DedicatedWorkerHost": false, "blink.mojom.DedicatedWorkerHostFactoryClient": true, "blink.mojom.DedicatedWorkerHostFactory": true, "blink.mojom.SharedWorker": true, "blink.mojom.SharedWorkerClient": false, "blink.mojom.SharedWorkerConnector": true, "blink.mojom.SharedWorkerFactory": true, "blink.mojom.SharedWorkerHost": false, "blink.mojom.SubresourceLoaderUpdater": false, "blink.mojom.WorkerContentSettingsProxy": false, "blink.mojom.WorkletDevToolsHost": false, "ui.mojom.IMEStructTraitsTest": true, "gfx.mojom.ImageTraitsTestService": true, "gfx.mojom.DelegatedInkPointRenderer": true, "gfx.mojom.TraitsTestService": true, "gfx.mojom.RangeTraitsTestService": true, "gl.mojom.TraitsTestService": true, "ui.ozone.mojom.DeviceCursor": true, "ui.ozone.mojom.DrmDevice": true, "ui.mojom.ScenicGpuHost": true, "ui.mojom.ScenicGpuService": true, "ui.ozone.mojom.WaylandBufferManagerHost": true, "ui.ozone.mojom.WaylandBufferManagerGpu": true, "wl.mojom.ConfigTraitsTestService": true, "ui.ozone.mojom.GesturePropertiesService": true, "webui_examples.mojom.PageHandlerFactory": true, "webui_examples.mojom.PageHandler": true, "app_management.mojom.PageHandlerFactory": true, "app_management.mojom.PageHandler": true, "app_management.mojom.Page": true, "color_change_listener.mojom.PageHandler": true, "color_change_listener.mojom.Page": true, "composebox.mojom.PageHandlerFactory": true, "composebox.mojom.PageHandler": true, "composebox.mojom.Page": true, "customize_color_scheme_mode.mojom.CustomizeColorSchemeModeHandlerFactory": true, "customize_color_scheme_mode.mojom.CustomizeColorSchemeModeHandler": true, "customize_color_scheme_mode.mojom.CustomizeColorSchemeModeClient": true, "custom_help_bubble.mojom.CustomHelpBubbleHandlerFactory": true, "custom_help_bubble.mojom.CustomHelpBubbleHandler": true, "help_bubble.mojom.HelpBubbleHandlerFactory": true, "help_bubble.mojom.PdfHelpBubbleHandlerFactory": true, "help_bubble.mojom.HelpBubbleHandler": true, "help_bubble.mojom.HelpBubbleClient": true, "history.mojom.ForeignSessionPageHandlerFactory": true, "history.mojom.ForeignSessionPageHandler": true, "history.mojom.ForeignSessionPage": true, "history.mojom.PageHandler": true, "history.mojom.Page": true, "history_cross_device_signin_promo.mojom.HistoryCrossDeviceSigninPromoHandler": true, "history_clusters.mojom.PageHandler": true, "history_clusters.mojom.Page": true, "history_clusters.mojom.PageHandlerFactory": true, "history_embeddings.mojom.PageHandlerFactory": true, "history_embeddings.mojom.PageHandler": true, "history_embeddings.mojom.Page": true, "most_visited.mojom.MostVisitedPageHandlerFactory": true, "most_visited.mojom.MostVisitedPageHandler": true, "most_visited.mojom.MostVisitedPage": true, "theme_color_picker.mojom.ThemeColorPickerHandlerFactory": true, "theme_color_picker.mojom.ThemeColorPickerHandler": true, "theme_color_picker.mojom.ThemeColorPickerClient": true, "batch_upload_promo.mojom.PageHandlerFactory": true, "batch_upload_promo.mojom.PageHandler": true, "batch_upload_promo.mojom.Page": true, "browser_command.mojom.CommandHandlerFactory": true, "browser_command.mojom.CommandHandler": true, "metrics_reporter.mojom.PageMetricsHost": true, "metrics_reporter.mojom.PageMetrics": true, "tracked_element.mojom.TrackedElementHandler": true, "tracked_element.mojom.TrackedElementManager": true, "url.mojom.UrlTest": true},
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
        const versionStr = window.mojoVersion || '152.0.7947.0';
        
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

 mojo.internal.bindings.ash = mojo.internal.bindings.ash || {};
mojo.internal.bindings.ash.boca = mojo.internal.bindings.ash.boca || {};
mojo.internal.bindings.ash.boca.mojom = mojo.internal.bindings.ash.boca.mojom || {};
mojo.internal.bindings.mojo_base = mojo.internal.bindings.mojo_base || {};
mojo.internal.bindings.mojo_base.mojom = mojo.internal.bindings.mojo_base.mojom || {};
mojo.internal.bindings.chromeos = mojo.internal.bindings.chromeos || {};
mojo.internal.bindings.url = mojo.internal.bindings.url || {};
mojo.internal.bindings.skia = mojo.internal.bindings.skia || {};

mojo.internal.bindings.ash.boca.mojom.UrlTypeSpec = mojo.internal.bindings.ash.boca.mojom.UrlTypeSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.ash.boca.mojom.MaterialTypeSpec = mojo.internal.bindings.ash.boca.mojom.MaterialTypeSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.ash.boca.mojom.AssignmentTypeSpec = mojo.internal.bindings.ash.boca.mojom.AssignmentTypeSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.ash.boca.mojom.NetworkTypeSpec = mojo.internal.bindings.ash.boca.mojom.NetworkTypeSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.ash.boca.mojom.PermissionSpec = mojo.internal.bindings.ash.boca.mojom.PermissionSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.ash.boca.mojom.PermissionSettingSpec = mojo.internal.bindings.ash.boca.mojom.PermissionSettingSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.ash.boca.mojom.NavigationTypeSpec = mojo.internal.bindings.ash.boca.mojom.NavigationTypeSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.ash.boca.mojom.JoinMethodSpec = mojo.internal.bindings.ash.boca.mojom.JoinMethodSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.ash.boca.mojom.BocaValidPrefSpec = mojo.internal.bindings.ash.boca.mojom.BocaValidPrefSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.ash.boca.mojom.StudentStatusDetailSpec = mojo.internal.bindings.ash.boca.mojom.StudentStatusDetailSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.ash.boca.mojom.GeminiEnablementStateSpec = mojo.internal.bindings.ash.boca.mojom.GeminiEnablementStateSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.ash.boca.mojom.GetSessionErrorSpec = mojo.internal.bindings.ash.boca.mojom.GetSessionErrorSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.ash.boca.mojom.UpdateSessionErrorSpec = mojo.internal.bindings.ash.boca.mojom.UpdateSessionErrorSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.ash.boca.mojom.RemoveStudentErrorSpec = mojo.internal.bindings.ash.boca.mojom.RemoveStudentErrorSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.ash.boca.mojom.RenotifyStudentErrorSpec = mojo.internal.bindings.ash.boca.mojom.RenotifyStudentErrorSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.ash.boca.mojom.AddStudentsErrorSpec = mojo.internal.bindings.ash.boca.mojom.AddStudentsErrorSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.ash.boca.mojom.SubmitAccessCodeErrorSpec = mojo.internal.bindings.ash.boca.mojom.SubmitAccessCodeErrorSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.ash.boca.mojom.ViewStudentScreenErrorSpec = mojo.internal.bindings.ash.boca.mojom.ViewStudentScreenErrorSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.ash.boca.mojom.EndViewScreenSessionErrorSpec = mojo.internal.bindings.ash.boca.mojom.EndViewScreenSessionErrorSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.ash.boca.mojom.SetViewScreenSessionActiveErrorSpec = mojo.internal.bindings.ash.boca.mojom.SetViewScreenSessionActiveErrorSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.ash.boca.mojom.SpeechRecognitionInstallStateSpec = mojo.internal.bindings.ash.boca.mojom.SpeechRecognitionInstallStateSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.ash.boca.mojom.CreateSessionErrorSpec = mojo.internal.bindings.ash.boca.mojom.CreateSessionErrorSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.ash.boca.mojom.CrdConnectionStateSpec = mojo.internal.bindings.ash.boca.mojom.CrdConnectionStateSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.ash.boca.mojom.SessionResultSpec = mojo.internal.bindings.ash.boca.mojom.SessionResultSpec || { $: {} };
if (mojo.internal.bindings.ash.boca.mojom.SessionResultSpec.$.structSpec && mojo.internal.bindings.ash.boca.mojom.SessionResultSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.boca.mojom.SessionResultSpec.$ = {};
mojo.internal.bindings.ash.boca.mojom.ConfigResultSpec = mojo.internal.bindings.ash.boca.mojom.ConfigResultSpec || { $: {} };
if (mojo.internal.bindings.ash.boca.mojom.ConfigResultSpec.$.structSpec && mojo.internal.bindings.ash.boca.mojom.ConfigResultSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.boca.mojom.ConfigResultSpec.$ = {};
mojo.internal.bindings.ash.boca.mojom.TabInfoSpec = mojo.internal.bindings.ash.boca.mojom.TabInfoSpec || { $: {} };
if (mojo.internal.bindings.ash.boca.mojom.TabInfoSpec.$.structSpec && mojo.internal.bindings.ash.boca.mojom.TabInfoSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.boca.mojom.TabInfoSpec.$ = {};
mojo.internal.bindings.ash.boca.mojom.IdentitySpec = mojo.internal.bindings.ash.boca.mojom.IdentitySpec || { $: {} };
if (mojo.internal.bindings.ash.boca.mojom.IdentitySpec.$.structSpec && mojo.internal.bindings.ash.boca.mojom.IdentitySpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.boca.mojom.IdentitySpec.$ = {};
mojo.internal.bindings.ash.boca.mojom.CourseSpec = mojo.internal.bindings.ash.boca.mojom.CourseSpec || { $: {} };
if (mojo.internal.bindings.ash.boca.mojom.CourseSpec.$.structSpec && mojo.internal.bindings.ash.boca.mojom.CourseSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.boca.mojom.CourseSpec.$ = {};
mojo.internal.bindings.ash.boca.mojom.MaterialSpec = mojo.internal.bindings.ash.boca.mojom.MaterialSpec || { $: {} };
if (mojo.internal.bindings.ash.boca.mojom.MaterialSpec.$.structSpec && mojo.internal.bindings.ash.boca.mojom.MaterialSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.boca.mojom.MaterialSpec.$ = {};
mojo.internal.bindings.ash.boca.mojom.AssignmentSpec = mojo.internal.bindings.ash.boca.mojom.AssignmentSpec || { $: {} };
if (mojo.internal.bindings.ash.boca.mojom.AssignmentSpec.$.structSpec && mojo.internal.bindings.ash.boca.mojom.AssignmentSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.boca.mojom.AssignmentSpec.$ = {};
mojo.internal.bindings.ash.boca.mojom.WindowSpec = mojo.internal.bindings.ash.boca.mojom.WindowSpec || { $: {} };
if (mojo.internal.bindings.ash.boca.mojom.WindowSpec.$.structSpec && mojo.internal.bindings.ash.boca.mojom.WindowSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.boca.mojom.WindowSpec.$ = {};
mojo.internal.bindings.ash.boca.mojom.NetworkInfoSpec = mojo.internal.bindings.ash.boca.mojom.NetworkInfoSpec || { $: {} };
if (mojo.internal.bindings.ash.boca.mojom.NetworkInfoSpec.$.structSpec && mojo.internal.bindings.ash.boca.mojom.NetworkInfoSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.boca.mojom.NetworkInfoSpec.$ = {};
mojo.internal.bindings.ash.boca.mojom.ConfigSpec = mojo.internal.bindings.ash.boca.mojom.ConfigSpec || { $: {} };
if (mojo.internal.bindings.ash.boca.mojom.ConfigSpec.$.structSpec && mojo.internal.bindings.ash.boca.mojom.ConfigSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.boca.mojom.ConfigSpec.$ = {};
mojo.internal.bindings.ash.boca.mojom.CaptionConfigSpec = mojo.internal.bindings.ash.boca.mojom.CaptionConfigSpec || { $: {} };
if (mojo.internal.bindings.ash.boca.mojom.CaptionConfigSpec.$.structSpec && mojo.internal.bindings.ash.boca.mojom.CaptionConfigSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.boca.mojom.CaptionConfigSpec.$ = {};
mojo.internal.bindings.ash.boca.mojom.ControlledTabSpec = mojo.internal.bindings.ash.boca.mojom.ControlledTabSpec || { $: {} };
if (mojo.internal.bindings.ash.boca.mojom.ControlledTabSpec.$.structSpec && mojo.internal.bindings.ash.boca.mojom.ControlledTabSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.boca.mojom.ControlledTabSpec.$ = {};
mojo.internal.bindings.ash.boca.mojom.OnTaskConfigSpec = mojo.internal.bindings.ash.boca.mojom.OnTaskConfigSpec || { $: {} };
if (mojo.internal.bindings.ash.boca.mojom.OnTaskConfigSpec.$.structSpec && mojo.internal.bindings.ash.boca.mojom.OnTaskConfigSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.boca.mojom.OnTaskConfigSpec.$ = {};
mojo.internal.bindings.ash.boca.mojom.SessionSpec = mojo.internal.bindings.ash.boca.mojom.SessionSpec || { $: {} };
if (mojo.internal.bindings.ash.boca.mojom.SessionSpec.$.structSpec && mojo.internal.bindings.ash.boca.mojom.SessionSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.boca.mojom.SessionSpec.$ = {};
mojo.internal.bindings.ash.boca.mojom.StudentActivitySpec = mojo.internal.bindings.ash.boca.mojom.StudentActivitySpec || { $: {} };
if (mojo.internal.bindings.ash.boca.mojom.StudentActivitySpec.$.structSpec && mojo.internal.bindings.ash.boca.mojom.StudentActivitySpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.boca.mojom.StudentActivitySpec.$ = {};
mojo.internal.bindings.ash.boca.mojom.IdentifiedActivitySpec = mojo.internal.bindings.ash.boca.mojom.IdentifiedActivitySpec || { $: {} };
if (mojo.internal.bindings.ash.boca.mojom.IdentifiedActivitySpec.$.structSpec && mojo.internal.bindings.ash.boca.mojom.IdentifiedActivitySpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.boca.mojom.IdentifiedActivitySpec.$ = {};
mojo.internal.bindings.ash.boca.mojom.PageHandler = mojo.internal.bindings.ash.boca.mojom.PageHandler || {};
mojo.internal.bindings.ash.boca.mojom.PageHandlerSpec = mojo.internal.bindings.ash.boca.mojom.PageHandlerSpec || { $ : {} };
if (mojo.internal.bindings.ash.boca.mojom.PageHandlerSpec.$.structSpec && mojo.internal.bindings.ash.boca.mojom.PageHandlerSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.boca.mojom.PageHandlerSpec.$ = {};
mojo.internal.bindings.ash.boca.mojom.PageHandler.$interfaceName = 'ash.boca.mojom.PageHandler';
mojo.internal.bindings.ash.boca.mojom.PageHandler_GetWindowsTabsList_ParamsSpec = mojo.internal.bindings.ash.boca.mojom.PageHandler_GetWindowsTabsList_ParamsSpec || { $: {} };
if (mojo.internal.bindings.ash.boca.mojom.PageHandler_GetWindowsTabsList_ParamsSpec.$.structSpec && mojo.internal.bindings.ash.boca.mojom.PageHandler_GetWindowsTabsList_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.boca.mojom.PageHandler_GetWindowsTabsList_ParamsSpec.$ = {};
mojo.internal.bindings.ash.boca.mojom.PageHandler_GetWindowsTabsList_ResponseParamsSpec = mojo.internal.bindings.ash.boca.mojom.PageHandler_GetWindowsTabsList_ResponseParamsSpec || { $: {} };
if (mojo.internal.bindings.ash.boca.mojom.PageHandler_GetWindowsTabsList_ResponseParamsSpec.$.structSpec && mojo.internal.bindings.ash.boca.mojom.PageHandler_GetWindowsTabsList_ResponseParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.boca.mojom.PageHandler_GetWindowsTabsList_ResponseParamsSpec.$ = {};
mojo.internal.bindings.ash.boca.mojom.PageHandler_ListCourses_ParamsSpec = mojo.internal.bindings.ash.boca.mojom.PageHandler_ListCourses_ParamsSpec || { $: {} };
if (mojo.internal.bindings.ash.boca.mojom.PageHandler_ListCourses_ParamsSpec.$.structSpec && mojo.internal.bindings.ash.boca.mojom.PageHandler_ListCourses_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.boca.mojom.PageHandler_ListCourses_ParamsSpec.$ = {};
mojo.internal.bindings.ash.boca.mojom.PageHandler_ListCourses_ResponseParamsSpec = mojo.internal.bindings.ash.boca.mojom.PageHandler_ListCourses_ResponseParamsSpec || { $: {} };
if (mojo.internal.bindings.ash.boca.mojom.PageHandler_ListCourses_ResponseParamsSpec.$.structSpec && mojo.internal.bindings.ash.boca.mojom.PageHandler_ListCourses_ResponseParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.boca.mojom.PageHandler_ListCourses_ResponseParamsSpec.$ = {};
mojo.internal.bindings.ash.boca.mojom.PageHandler_ListStudents_ParamsSpec = mojo.internal.bindings.ash.boca.mojom.PageHandler_ListStudents_ParamsSpec || { $: {} };
if (mojo.internal.bindings.ash.boca.mojom.PageHandler_ListStudents_ParamsSpec.$.structSpec && mojo.internal.bindings.ash.boca.mojom.PageHandler_ListStudents_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.boca.mojom.PageHandler_ListStudents_ParamsSpec.$ = {};
mojo.internal.bindings.ash.boca.mojom.PageHandler_ListStudents_ResponseParamsSpec = mojo.internal.bindings.ash.boca.mojom.PageHandler_ListStudents_ResponseParamsSpec || { $: {} };
if (mojo.internal.bindings.ash.boca.mojom.PageHandler_ListStudents_ResponseParamsSpec.$.structSpec && mojo.internal.bindings.ash.boca.mojom.PageHandler_ListStudents_ResponseParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.boca.mojom.PageHandler_ListStudents_ResponseParamsSpec.$ = {};
mojo.internal.bindings.ash.boca.mojom.PageHandler_ListAssignments_ParamsSpec = mojo.internal.bindings.ash.boca.mojom.PageHandler_ListAssignments_ParamsSpec || { $: {} };
if (mojo.internal.bindings.ash.boca.mojom.PageHandler_ListAssignments_ParamsSpec.$.structSpec && mojo.internal.bindings.ash.boca.mojom.PageHandler_ListAssignments_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.boca.mojom.PageHandler_ListAssignments_ParamsSpec.$ = {};
mojo.internal.bindings.ash.boca.mojom.PageHandler_ListAssignments_ResponseParamsSpec = mojo.internal.bindings.ash.boca.mojom.PageHandler_ListAssignments_ResponseParamsSpec || { $: {} };
if (mojo.internal.bindings.ash.boca.mojom.PageHandler_ListAssignments_ResponseParamsSpec.$.structSpec && mojo.internal.bindings.ash.boca.mojom.PageHandler_ListAssignments_ResponseParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.boca.mojom.PageHandler_ListAssignments_ResponseParamsSpec.$ = {};
mojo.internal.bindings.ash.boca.mojom.PageHandler_CreateSession_ParamsSpec = mojo.internal.bindings.ash.boca.mojom.PageHandler_CreateSession_ParamsSpec || { $: {} };
if (mojo.internal.bindings.ash.boca.mojom.PageHandler_CreateSession_ParamsSpec.$.structSpec && mojo.internal.bindings.ash.boca.mojom.PageHandler_CreateSession_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.boca.mojom.PageHandler_CreateSession_ParamsSpec.$ = {};
mojo.internal.bindings.ash.boca.mojom.PageHandler_CreateSession_ResponseParamsSpec = mojo.internal.bindings.ash.boca.mojom.PageHandler_CreateSession_ResponseParamsSpec || { $: {} };
if (mojo.internal.bindings.ash.boca.mojom.PageHandler_CreateSession_ResponseParamsSpec.$.structSpec && mojo.internal.bindings.ash.boca.mojom.PageHandler_CreateSession_ResponseParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.boca.mojom.PageHandler_CreateSession_ResponseParamsSpec.$ = {};
mojo.internal.bindings.ash.boca.mojom.PageHandler_GetSession_ParamsSpec = mojo.internal.bindings.ash.boca.mojom.PageHandler_GetSession_ParamsSpec || { $: {} };
if (mojo.internal.bindings.ash.boca.mojom.PageHandler_GetSession_ParamsSpec.$.structSpec && mojo.internal.bindings.ash.boca.mojom.PageHandler_GetSession_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.boca.mojom.PageHandler_GetSession_ParamsSpec.$ = {};
mojo.internal.bindings.ash.boca.mojom.PageHandler_GetSession_ResponseParamsSpec = mojo.internal.bindings.ash.boca.mojom.PageHandler_GetSession_ResponseParamsSpec || { $: {} };
if (mojo.internal.bindings.ash.boca.mojom.PageHandler_GetSession_ResponseParamsSpec.$.structSpec && mojo.internal.bindings.ash.boca.mojom.PageHandler_GetSession_ResponseParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.boca.mojom.PageHandler_GetSession_ResponseParamsSpec.$ = {};
mojo.internal.bindings.ash.boca.mojom.PageHandler_EndSession_ParamsSpec = mojo.internal.bindings.ash.boca.mojom.PageHandler_EndSession_ParamsSpec || { $: {} };
if (mojo.internal.bindings.ash.boca.mojom.PageHandler_EndSession_ParamsSpec.$.structSpec && mojo.internal.bindings.ash.boca.mojom.PageHandler_EndSession_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.boca.mojom.PageHandler_EndSession_ParamsSpec.$ = {};
mojo.internal.bindings.ash.boca.mojom.PageHandler_EndSession_ResponseParamsSpec = mojo.internal.bindings.ash.boca.mojom.PageHandler_EndSession_ResponseParamsSpec || { $: {} };
if (mojo.internal.bindings.ash.boca.mojom.PageHandler_EndSession_ResponseParamsSpec.$.structSpec && mojo.internal.bindings.ash.boca.mojom.PageHandler_EndSession_ResponseParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.boca.mojom.PageHandler_EndSession_ResponseParamsSpec.$ = {};
mojo.internal.bindings.ash.boca.mojom.PageHandler_ExtendSessionDuration_ParamsSpec = mojo.internal.bindings.ash.boca.mojom.PageHandler_ExtendSessionDuration_ParamsSpec || { $: {} };
if (mojo.internal.bindings.ash.boca.mojom.PageHandler_ExtendSessionDuration_ParamsSpec.$.structSpec && mojo.internal.bindings.ash.boca.mojom.PageHandler_ExtendSessionDuration_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.boca.mojom.PageHandler_ExtendSessionDuration_ParamsSpec.$ = {};
mojo.internal.bindings.ash.boca.mojom.PageHandler_ExtendSessionDuration_ResponseParamsSpec = mojo.internal.bindings.ash.boca.mojom.PageHandler_ExtendSessionDuration_ResponseParamsSpec || { $: {} };
if (mojo.internal.bindings.ash.boca.mojom.PageHandler_ExtendSessionDuration_ResponseParamsSpec.$.structSpec && mojo.internal.bindings.ash.boca.mojom.PageHandler_ExtendSessionDuration_ResponseParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.boca.mojom.PageHandler_ExtendSessionDuration_ResponseParamsSpec.$ = {};
mojo.internal.bindings.ash.boca.mojom.PageHandler_RemoveStudent_ParamsSpec = mojo.internal.bindings.ash.boca.mojom.PageHandler_RemoveStudent_ParamsSpec || { $: {} };
if (mojo.internal.bindings.ash.boca.mojom.PageHandler_RemoveStudent_ParamsSpec.$.structSpec && mojo.internal.bindings.ash.boca.mojom.PageHandler_RemoveStudent_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.boca.mojom.PageHandler_RemoveStudent_ParamsSpec.$ = {};
mojo.internal.bindings.ash.boca.mojom.PageHandler_RemoveStudent_ResponseParamsSpec = mojo.internal.bindings.ash.boca.mojom.PageHandler_RemoveStudent_ResponseParamsSpec || { $: {} };
if (mojo.internal.bindings.ash.boca.mojom.PageHandler_RemoveStudent_ResponseParamsSpec.$.structSpec && mojo.internal.bindings.ash.boca.mojom.PageHandler_RemoveStudent_ResponseParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.boca.mojom.PageHandler_RemoveStudent_ResponseParamsSpec.$ = {};
mojo.internal.bindings.ash.boca.mojom.PageHandler_RenotifyStudent_ParamsSpec = mojo.internal.bindings.ash.boca.mojom.PageHandler_RenotifyStudent_ParamsSpec || { $: {} };
if (mojo.internal.bindings.ash.boca.mojom.PageHandler_RenotifyStudent_ParamsSpec.$.structSpec && mojo.internal.bindings.ash.boca.mojom.PageHandler_RenotifyStudent_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.boca.mojom.PageHandler_RenotifyStudent_ParamsSpec.$ = {};
mojo.internal.bindings.ash.boca.mojom.PageHandler_RenotifyStudent_ResponseParamsSpec = mojo.internal.bindings.ash.boca.mojom.PageHandler_RenotifyStudent_ResponseParamsSpec || { $: {} };
if (mojo.internal.bindings.ash.boca.mojom.PageHandler_RenotifyStudent_ResponseParamsSpec.$.structSpec && mojo.internal.bindings.ash.boca.mojom.PageHandler_RenotifyStudent_ResponseParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.boca.mojom.PageHandler_RenotifyStudent_ResponseParamsSpec.$ = {};
mojo.internal.bindings.ash.boca.mojom.PageHandler_AddStudents_ParamsSpec = mojo.internal.bindings.ash.boca.mojom.PageHandler_AddStudents_ParamsSpec || { $: {} };
if (mojo.internal.bindings.ash.boca.mojom.PageHandler_AddStudents_ParamsSpec.$.structSpec && mojo.internal.bindings.ash.boca.mojom.PageHandler_AddStudents_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.boca.mojom.PageHandler_AddStudents_ParamsSpec.$ = {};
mojo.internal.bindings.ash.boca.mojom.PageHandler_AddStudents_ResponseParamsSpec = mojo.internal.bindings.ash.boca.mojom.PageHandler_AddStudents_ResponseParamsSpec || { $: {} };
if (mojo.internal.bindings.ash.boca.mojom.PageHandler_AddStudents_ResponseParamsSpec.$.structSpec && mojo.internal.bindings.ash.boca.mojom.PageHandler_AddStudents_ResponseParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.boca.mojom.PageHandler_AddStudents_ResponseParamsSpec.$ = {};
mojo.internal.bindings.ash.boca.mojom.PageHandler_UpdateOnTaskConfig_ParamsSpec = mojo.internal.bindings.ash.boca.mojom.PageHandler_UpdateOnTaskConfig_ParamsSpec || { $: {} };
if (mojo.internal.bindings.ash.boca.mojom.PageHandler_UpdateOnTaskConfig_ParamsSpec.$.structSpec && mojo.internal.bindings.ash.boca.mojom.PageHandler_UpdateOnTaskConfig_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.boca.mojom.PageHandler_UpdateOnTaskConfig_ParamsSpec.$ = {};
mojo.internal.bindings.ash.boca.mojom.PageHandler_UpdateOnTaskConfig_ResponseParamsSpec = mojo.internal.bindings.ash.boca.mojom.PageHandler_UpdateOnTaskConfig_ResponseParamsSpec || { $: {} };
if (mojo.internal.bindings.ash.boca.mojom.PageHandler_UpdateOnTaskConfig_ResponseParamsSpec.$.structSpec && mojo.internal.bindings.ash.boca.mojom.PageHandler_UpdateOnTaskConfig_ResponseParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.boca.mojom.PageHandler_UpdateOnTaskConfig_ResponseParamsSpec.$ = {};
mojo.internal.bindings.ash.boca.mojom.PageHandler_UpdateCaptionConfig_ParamsSpec = mojo.internal.bindings.ash.boca.mojom.PageHandler_UpdateCaptionConfig_ParamsSpec || { $: {} };
if (mojo.internal.bindings.ash.boca.mojom.PageHandler_UpdateCaptionConfig_ParamsSpec.$.structSpec && mojo.internal.bindings.ash.boca.mojom.PageHandler_UpdateCaptionConfig_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.boca.mojom.PageHandler_UpdateCaptionConfig_ParamsSpec.$ = {};
mojo.internal.bindings.ash.boca.mojom.PageHandler_UpdateCaptionConfig_ResponseParamsSpec = mojo.internal.bindings.ash.boca.mojom.PageHandler_UpdateCaptionConfig_ResponseParamsSpec || { $: {} };
if (mojo.internal.bindings.ash.boca.mojom.PageHandler_UpdateCaptionConfig_ResponseParamsSpec.$.structSpec && mojo.internal.bindings.ash.boca.mojom.PageHandler_UpdateCaptionConfig_ResponseParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.boca.mojom.PageHandler_UpdateCaptionConfig_ResponseParamsSpec.$ = {};
mojo.internal.bindings.ash.boca.mojom.PageHandler_SetFloatMode_ParamsSpec = mojo.internal.bindings.ash.boca.mojom.PageHandler_SetFloatMode_ParamsSpec || { $: {} };
if (mojo.internal.bindings.ash.boca.mojom.PageHandler_SetFloatMode_ParamsSpec.$.structSpec && mojo.internal.bindings.ash.boca.mojom.PageHandler_SetFloatMode_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.boca.mojom.PageHandler_SetFloatMode_ParamsSpec.$ = {};
mojo.internal.bindings.ash.boca.mojom.PageHandler_SetFloatMode_ResponseParamsSpec = mojo.internal.bindings.ash.boca.mojom.PageHandler_SetFloatMode_ResponseParamsSpec || { $: {} };
if (mojo.internal.bindings.ash.boca.mojom.PageHandler_SetFloatMode_ResponseParamsSpec.$.structSpec && mojo.internal.bindings.ash.boca.mojom.PageHandler_SetFloatMode_ResponseParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.boca.mojom.PageHandler_SetFloatMode_ResponseParamsSpec.$ = {};
mojo.internal.bindings.ash.boca.mojom.PageHandler_SubmitAccessCode_ParamsSpec = mojo.internal.bindings.ash.boca.mojom.PageHandler_SubmitAccessCode_ParamsSpec || { $: {} };
if (mojo.internal.bindings.ash.boca.mojom.PageHandler_SubmitAccessCode_ParamsSpec.$.structSpec && mojo.internal.bindings.ash.boca.mojom.PageHandler_SubmitAccessCode_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.boca.mojom.PageHandler_SubmitAccessCode_ParamsSpec.$ = {};
mojo.internal.bindings.ash.boca.mojom.PageHandler_SubmitAccessCode_ResponseParamsSpec = mojo.internal.bindings.ash.boca.mojom.PageHandler_SubmitAccessCode_ResponseParamsSpec || { $: {} };
if (mojo.internal.bindings.ash.boca.mojom.PageHandler_SubmitAccessCode_ResponseParamsSpec.$.structSpec && mojo.internal.bindings.ash.boca.mojom.PageHandler_SubmitAccessCode_ResponseParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.boca.mojom.PageHandler_SubmitAccessCode_ResponseParamsSpec.$ = {};
mojo.internal.bindings.ash.boca.mojom.PageHandler_ViewStudentScreen_ParamsSpec = mojo.internal.bindings.ash.boca.mojom.PageHandler_ViewStudentScreen_ParamsSpec || { $: {} };
if (mojo.internal.bindings.ash.boca.mojom.PageHandler_ViewStudentScreen_ParamsSpec.$.structSpec && mojo.internal.bindings.ash.boca.mojom.PageHandler_ViewStudentScreen_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.boca.mojom.PageHandler_ViewStudentScreen_ParamsSpec.$ = {};
mojo.internal.bindings.ash.boca.mojom.PageHandler_ViewStudentScreen_ResponseParamsSpec = mojo.internal.bindings.ash.boca.mojom.PageHandler_ViewStudentScreen_ResponseParamsSpec || { $: {} };
if (mojo.internal.bindings.ash.boca.mojom.PageHandler_ViewStudentScreen_ResponseParamsSpec.$.structSpec && mojo.internal.bindings.ash.boca.mojom.PageHandler_ViewStudentScreen_ResponseParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.boca.mojom.PageHandler_ViewStudentScreen_ResponseParamsSpec.$ = {};
mojo.internal.bindings.ash.boca.mojom.PageHandler_EndViewScreenSession_ParamsSpec = mojo.internal.bindings.ash.boca.mojom.PageHandler_EndViewScreenSession_ParamsSpec || { $: {} };
if (mojo.internal.bindings.ash.boca.mojom.PageHandler_EndViewScreenSession_ParamsSpec.$.structSpec && mojo.internal.bindings.ash.boca.mojom.PageHandler_EndViewScreenSession_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.boca.mojom.PageHandler_EndViewScreenSession_ParamsSpec.$ = {};
mojo.internal.bindings.ash.boca.mojom.PageHandler_EndViewScreenSession_ResponseParamsSpec = mojo.internal.bindings.ash.boca.mojom.PageHandler_EndViewScreenSession_ResponseParamsSpec || { $: {} };
if (mojo.internal.bindings.ash.boca.mojom.PageHandler_EndViewScreenSession_ResponseParamsSpec.$.structSpec && mojo.internal.bindings.ash.boca.mojom.PageHandler_EndViewScreenSession_ResponseParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.boca.mojom.PageHandler_EndViewScreenSession_ResponseParamsSpec.$ = {};
mojo.internal.bindings.ash.boca.mojom.PageHandler_SetViewScreenSessionActive_ParamsSpec = mojo.internal.bindings.ash.boca.mojom.PageHandler_SetViewScreenSessionActive_ParamsSpec || { $: {} };
if (mojo.internal.bindings.ash.boca.mojom.PageHandler_SetViewScreenSessionActive_ParamsSpec.$.structSpec && mojo.internal.bindings.ash.boca.mojom.PageHandler_SetViewScreenSessionActive_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.boca.mojom.PageHandler_SetViewScreenSessionActive_ParamsSpec.$ = {};
mojo.internal.bindings.ash.boca.mojom.PageHandler_SetViewScreenSessionActive_ResponseParamsSpec = mojo.internal.bindings.ash.boca.mojom.PageHandler_SetViewScreenSessionActive_ResponseParamsSpec || { $: {} };
if (mojo.internal.bindings.ash.boca.mojom.PageHandler_SetViewScreenSessionActive_ResponseParamsSpec.$.structSpec && mojo.internal.bindings.ash.boca.mojom.PageHandler_SetViewScreenSessionActive_ResponseParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.boca.mojom.PageHandler_SetViewScreenSessionActive_ResponseParamsSpec.$ = {};
mojo.internal.bindings.ash.boca.mojom.PageHandler_GetUserPref_ParamsSpec = mojo.internal.bindings.ash.boca.mojom.PageHandler_GetUserPref_ParamsSpec || { $: {} };
if (mojo.internal.bindings.ash.boca.mojom.PageHandler_GetUserPref_ParamsSpec.$.structSpec && mojo.internal.bindings.ash.boca.mojom.PageHandler_GetUserPref_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.boca.mojom.PageHandler_GetUserPref_ParamsSpec.$ = {};
mojo.internal.bindings.ash.boca.mojom.PageHandler_GetUserPref_ResponseParamsSpec = mojo.internal.bindings.ash.boca.mojom.PageHandler_GetUserPref_ResponseParamsSpec || { $: {} };
if (mojo.internal.bindings.ash.boca.mojom.PageHandler_GetUserPref_ResponseParamsSpec.$.structSpec && mojo.internal.bindings.ash.boca.mojom.PageHandler_GetUserPref_ResponseParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.boca.mojom.PageHandler_GetUserPref_ResponseParamsSpec.$ = {};
mojo.internal.bindings.ash.boca.mojom.PageHandler_SetUserPref_ParamsSpec = mojo.internal.bindings.ash.boca.mojom.PageHandler_SetUserPref_ParamsSpec || { $: {} };
if (mojo.internal.bindings.ash.boca.mojom.PageHandler_SetUserPref_ParamsSpec.$.structSpec && mojo.internal.bindings.ash.boca.mojom.PageHandler_SetUserPref_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.boca.mojom.PageHandler_SetUserPref_ParamsSpec.$ = {};
mojo.internal.bindings.ash.boca.mojom.PageHandler_SetUserPref_ResponseParamsSpec = mojo.internal.bindings.ash.boca.mojom.PageHandler_SetUserPref_ResponseParamsSpec || { $: {} };
if (mojo.internal.bindings.ash.boca.mojom.PageHandler_SetUserPref_ResponseParamsSpec.$.structSpec && mojo.internal.bindings.ash.boca.mojom.PageHandler_SetUserPref_ResponseParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.boca.mojom.PageHandler_SetUserPref_ResponseParamsSpec.$ = {};
mojo.internal.bindings.ash.boca.mojom.PageHandler_SetSitePermission_ParamsSpec = mojo.internal.bindings.ash.boca.mojom.PageHandler_SetSitePermission_ParamsSpec || { $: {} };
if (mojo.internal.bindings.ash.boca.mojom.PageHandler_SetSitePermission_ParamsSpec.$.structSpec && mojo.internal.bindings.ash.boca.mojom.PageHandler_SetSitePermission_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.boca.mojom.PageHandler_SetSitePermission_ParamsSpec.$ = {};
mojo.internal.bindings.ash.boca.mojom.PageHandler_SetSitePermission_ResponseParamsSpec = mojo.internal.bindings.ash.boca.mojom.PageHandler_SetSitePermission_ResponseParamsSpec || { $: {} };
if (mojo.internal.bindings.ash.boca.mojom.PageHandler_SetSitePermission_ResponseParamsSpec.$.structSpec && mojo.internal.bindings.ash.boca.mojom.PageHandler_SetSitePermission_ResponseParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.boca.mojom.PageHandler_SetSitePermission_ResponseParamsSpec.$ = {};
mojo.internal.bindings.ash.boca.mojom.PageHandler_OpenFeedbackDialog_ParamsSpec = mojo.internal.bindings.ash.boca.mojom.PageHandler_OpenFeedbackDialog_ParamsSpec || { $: {} };
if (mojo.internal.bindings.ash.boca.mojom.PageHandler_OpenFeedbackDialog_ParamsSpec.$.structSpec && mojo.internal.bindings.ash.boca.mojom.PageHandler_OpenFeedbackDialog_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.boca.mojom.PageHandler_OpenFeedbackDialog_ParamsSpec.$ = {};
mojo.internal.bindings.ash.boca.mojom.PageHandler_OpenFeedbackDialog_ResponseParamsSpec = mojo.internal.bindings.ash.boca.mojom.PageHandler_OpenFeedbackDialog_ResponseParamsSpec || { $: {} };
if (mojo.internal.bindings.ash.boca.mojom.PageHandler_OpenFeedbackDialog_ResponseParamsSpec.$.structSpec && mojo.internal.bindings.ash.boca.mojom.PageHandler_OpenFeedbackDialog_ResponseParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.boca.mojom.PageHandler_OpenFeedbackDialog_ResponseParamsSpec.$ = {};
mojo.internal.bindings.ash.boca.mojom.PageHandler_RefreshWorkbook_ParamsSpec = mojo.internal.bindings.ash.boca.mojom.PageHandler_RefreshWorkbook_ParamsSpec || { $: {} };
if (mojo.internal.bindings.ash.boca.mojom.PageHandler_RefreshWorkbook_ParamsSpec.$.structSpec && mojo.internal.bindings.ash.boca.mojom.PageHandler_RefreshWorkbook_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.boca.mojom.PageHandler_RefreshWorkbook_ParamsSpec.$ = {};
mojo.internal.bindings.ash.boca.mojom.PageHandler_RefreshWorkbook_ResponseParamsSpec = mojo.internal.bindings.ash.boca.mojom.PageHandler_RefreshWorkbook_ResponseParamsSpec || { $: {} };
if (mojo.internal.bindings.ash.boca.mojom.PageHandler_RefreshWorkbook_ResponseParamsSpec.$.structSpec && mojo.internal.bindings.ash.boca.mojom.PageHandler_RefreshWorkbook_ResponseParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.boca.mojom.PageHandler_RefreshWorkbook_ResponseParamsSpec.$ = {};
mojo.internal.bindings.ash.boca.mojom.PageHandler_GetSpeechRecognitionInstallationStatus_ParamsSpec = mojo.internal.bindings.ash.boca.mojom.PageHandler_GetSpeechRecognitionInstallationStatus_ParamsSpec || { $: {} };
if (mojo.internal.bindings.ash.boca.mojom.PageHandler_GetSpeechRecognitionInstallationStatus_ParamsSpec.$.structSpec && mojo.internal.bindings.ash.boca.mojom.PageHandler_GetSpeechRecognitionInstallationStatus_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.boca.mojom.PageHandler_GetSpeechRecognitionInstallationStatus_ParamsSpec.$ = {};
mojo.internal.bindings.ash.boca.mojom.PageHandler_GetSpeechRecognitionInstallationStatus_ResponseParamsSpec = mojo.internal.bindings.ash.boca.mojom.PageHandler_GetSpeechRecognitionInstallationStatus_ResponseParamsSpec || { $: {} };
if (mojo.internal.bindings.ash.boca.mojom.PageHandler_GetSpeechRecognitionInstallationStatus_ResponseParamsSpec.$.structSpec && mojo.internal.bindings.ash.boca.mojom.PageHandler_GetSpeechRecognitionInstallationStatus_ResponseParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.boca.mojom.PageHandler_GetSpeechRecognitionInstallationStatus_ResponseParamsSpec.$ = {};
mojo.internal.bindings.ash.boca.mojom.PageHandler_StartSpotlight_ParamsSpec = mojo.internal.bindings.ash.boca.mojom.PageHandler_StartSpotlight_ParamsSpec || { $: {} };
if (mojo.internal.bindings.ash.boca.mojom.PageHandler_StartSpotlight_ParamsSpec.$.structSpec && mojo.internal.bindings.ash.boca.mojom.PageHandler_StartSpotlight_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.boca.mojom.PageHandler_StartSpotlight_ParamsSpec.$ = {};
mojo.internal.bindings.ash.boca.mojom.PageHandler_StartSpotlight_ResponseParamsSpec = mojo.internal.bindings.ash.boca.mojom.PageHandler_StartSpotlight_ResponseParamsSpec || { $: {} };
if (mojo.internal.bindings.ash.boca.mojom.PageHandler_StartSpotlight_ResponseParamsSpec.$.structSpec && mojo.internal.bindings.ash.boca.mojom.PageHandler_StartSpotlight_ResponseParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.boca.mojom.PageHandler_StartSpotlight_ResponseParamsSpec.$ = {};
mojo.internal.bindings.ash.boca.mojom.PageHandler_PresentStudentScreen_ParamsSpec = mojo.internal.bindings.ash.boca.mojom.PageHandler_PresentStudentScreen_ParamsSpec || { $: {} };
if (mojo.internal.bindings.ash.boca.mojom.PageHandler_PresentStudentScreen_ParamsSpec.$.structSpec && mojo.internal.bindings.ash.boca.mojom.PageHandler_PresentStudentScreen_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.boca.mojom.PageHandler_PresentStudentScreen_ParamsSpec.$ = {};
mojo.internal.bindings.ash.boca.mojom.PageHandler_PresentStudentScreen_ResponseParamsSpec = mojo.internal.bindings.ash.boca.mojom.PageHandler_PresentStudentScreen_ResponseParamsSpec || { $: {} };
if (mojo.internal.bindings.ash.boca.mojom.PageHandler_PresentStudentScreen_ResponseParamsSpec.$.structSpec && mojo.internal.bindings.ash.boca.mojom.PageHandler_PresentStudentScreen_ResponseParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.boca.mojom.PageHandler_PresentStudentScreen_ResponseParamsSpec.$ = {};
mojo.internal.bindings.ash.boca.mojom.PageHandler_StopPresentingStudentScreen_ParamsSpec = mojo.internal.bindings.ash.boca.mojom.PageHandler_StopPresentingStudentScreen_ParamsSpec || { $: {} };
if (mojo.internal.bindings.ash.boca.mojom.PageHandler_StopPresentingStudentScreen_ParamsSpec.$.structSpec && mojo.internal.bindings.ash.boca.mojom.PageHandler_StopPresentingStudentScreen_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.boca.mojom.PageHandler_StopPresentingStudentScreen_ParamsSpec.$ = {};
mojo.internal.bindings.ash.boca.mojom.PageHandler_StopPresentingStudentScreen_ResponseParamsSpec = mojo.internal.bindings.ash.boca.mojom.PageHandler_StopPresentingStudentScreen_ResponseParamsSpec || { $: {} };
if (mojo.internal.bindings.ash.boca.mojom.PageHandler_StopPresentingStudentScreen_ResponseParamsSpec.$.structSpec && mojo.internal.bindings.ash.boca.mojom.PageHandler_StopPresentingStudentScreen_ResponseParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.boca.mojom.PageHandler_StopPresentingStudentScreen_ResponseParamsSpec.$ = {};
mojo.internal.bindings.ash.boca.mojom.PageHandler_PresentOwnScreen_ParamsSpec = mojo.internal.bindings.ash.boca.mojom.PageHandler_PresentOwnScreen_ParamsSpec || { $: {} };
if (mojo.internal.bindings.ash.boca.mojom.PageHandler_PresentOwnScreen_ParamsSpec.$.structSpec && mojo.internal.bindings.ash.boca.mojom.PageHandler_PresentOwnScreen_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.boca.mojom.PageHandler_PresentOwnScreen_ParamsSpec.$ = {};
mojo.internal.bindings.ash.boca.mojom.PageHandler_PresentOwnScreen_ResponseParamsSpec = mojo.internal.bindings.ash.boca.mojom.PageHandler_PresentOwnScreen_ResponseParamsSpec || { $: {} };
if (mojo.internal.bindings.ash.boca.mojom.PageHandler_PresentOwnScreen_ResponseParamsSpec.$.structSpec && mojo.internal.bindings.ash.boca.mojom.PageHandler_PresentOwnScreen_ResponseParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.boca.mojom.PageHandler_PresentOwnScreen_ResponseParamsSpec.$ = {};
mojo.internal.bindings.ash.boca.mojom.PageHandler_StopPresentingOwnScreen_ParamsSpec = mojo.internal.bindings.ash.boca.mojom.PageHandler_StopPresentingOwnScreen_ParamsSpec || { $: {} };
if (mojo.internal.bindings.ash.boca.mojom.PageHandler_StopPresentingOwnScreen_ParamsSpec.$.structSpec && mojo.internal.bindings.ash.boca.mojom.PageHandler_StopPresentingOwnScreen_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.boca.mojom.PageHandler_StopPresentingOwnScreen_ParamsSpec.$ = {};
mojo.internal.bindings.ash.boca.mojom.PageHandler_StopPresentingOwnScreen_ResponseParamsSpec = mojo.internal.bindings.ash.boca.mojom.PageHandler_StopPresentingOwnScreen_ResponseParamsSpec || { $: {} };
if (mojo.internal.bindings.ash.boca.mojom.PageHandler_StopPresentingOwnScreen_ResponseParamsSpec.$.structSpec && mojo.internal.bindings.ash.boca.mojom.PageHandler_StopPresentingOwnScreen_ResponseParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.boca.mojom.PageHandler_StopPresentingOwnScreen_ResponseParamsSpec.$ = {};
mojo.internal.bindings.ash.boca.mojom.PageHandler_GetGeminiStatus_ParamsSpec = mojo.internal.bindings.ash.boca.mojom.PageHandler_GetGeminiStatus_ParamsSpec || { $: {} };
if (mojo.internal.bindings.ash.boca.mojom.PageHandler_GetGeminiStatus_ParamsSpec.$.structSpec && mojo.internal.bindings.ash.boca.mojom.PageHandler_GetGeminiStatus_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.boca.mojom.PageHandler_GetGeminiStatus_ParamsSpec.$ = {};
mojo.internal.bindings.ash.boca.mojom.PageHandler_GetGeminiStatus_ResponseParamsSpec = mojo.internal.bindings.ash.boca.mojom.PageHandler_GetGeminiStatus_ResponseParamsSpec || { $: {} };
if (mojo.internal.bindings.ash.boca.mojom.PageHandler_GetGeminiStatus_ResponseParamsSpec.$.structSpec && mojo.internal.bindings.ash.boca.mojom.PageHandler_GetGeminiStatus_ResponseParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.boca.mojom.PageHandler_GetGeminiStatus_ResponseParamsSpec.$ = {};
mojo.internal.bindings.ash.boca.mojom.Page = mojo.internal.bindings.ash.boca.mojom.Page || {};
mojo.internal.bindings.ash.boca.mojom.PageSpec = mojo.internal.bindings.ash.boca.mojom.PageSpec || { $ : {} };
if (mojo.internal.bindings.ash.boca.mojom.PageSpec.$.structSpec && mojo.internal.bindings.ash.boca.mojom.PageSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.boca.mojom.PageSpec.$ = {};
mojo.internal.bindings.ash.boca.mojom.Page.$interfaceName = 'ash.boca.mojom.Page';
mojo.internal.bindings.ash.boca.mojom.Page_OnStudentActivityUpdated_ParamsSpec = mojo.internal.bindings.ash.boca.mojom.Page_OnStudentActivityUpdated_ParamsSpec || { $: {} };
if (mojo.internal.bindings.ash.boca.mojom.Page_OnStudentActivityUpdated_ParamsSpec.$.structSpec && mojo.internal.bindings.ash.boca.mojom.Page_OnStudentActivityUpdated_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.boca.mojom.Page_OnStudentActivityUpdated_ParamsSpec.$ = {};
mojo.internal.bindings.ash.boca.mojom.Page_OnSessionConfigUpdated_ParamsSpec = mojo.internal.bindings.ash.boca.mojom.Page_OnSessionConfigUpdated_ParamsSpec || { $: {} };
if (mojo.internal.bindings.ash.boca.mojom.Page_OnSessionConfigUpdated_ParamsSpec.$.structSpec && mojo.internal.bindings.ash.boca.mojom.Page_OnSessionConfigUpdated_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.boca.mojom.Page_OnSessionConfigUpdated_ParamsSpec.$ = {};
mojo.internal.bindings.ash.boca.mojom.Page_OnActiveNetworkStateChanged_ParamsSpec = mojo.internal.bindings.ash.boca.mojom.Page_OnActiveNetworkStateChanged_ParamsSpec || { $: {} };
if (mojo.internal.bindings.ash.boca.mojom.Page_OnActiveNetworkStateChanged_ParamsSpec.$.structSpec && mojo.internal.bindings.ash.boca.mojom.Page_OnActiveNetworkStateChanged_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.boca.mojom.Page_OnActiveNetworkStateChanged_ParamsSpec.$ = {};
mojo.internal.bindings.ash.boca.mojom.Page_OnLocalCaptionDisabled_ParamsSpec = mojo.internal.bindings.ash.boca.mojom.Page_OnLocalCaptionDisabled_ParamsSpec || { $: {} };
if (mojo.internal.bindings.ash.boca.mojom.Page_OnLocalCaptionDisabled_ParamsSpec.$.structSpec && mojo.internal.bindings.ash.boca.mojom.Page_OnLocalCaptionDisabled_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.boca.mojom.Page_OnLocalCaptionDisabled_ParamsSpec.$ = {};
mojo.internal.bindings.ash.boca.mojom.Page_OnSpeechRecognitionInstallStateUpdated_ParamsSpec = mojo.internal.bindings.ash.boca.mojom.Page_OnSpeechRecognitionInstallStateUpdated_ParamsSpec || { $: {} };
if (mojo.internal.bindings.ash.boca.mojom.Page_OnSpeechRecognitionInstallStateUpdated_ParamsSpec.$.structSpec && mojo.internal.bindings.ash.boca.mojom.Page_OnSpeechRecognitionInstallStateUpdated_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.boca.mojom.Page_OnSpeechRecognitionInstallStateUpdated_ParamsSpec.$ = {};
mojo.internal.bindings.ash.boca.mojom.Page_OnSessionCaptionDisabled_ParamsSpec = mojo.internal.bindings.ash.boca.mojom.Page_OnSessionCaptionDisabled_ParamsSpec || { $: {} };
if (mojo.internal.bindings.ash.boca.mojom.Page_OnSessionCaptionDisabled_ParamsSpec.$.structSpec && mojo.internal.bindings.ash.boca.mojom.Page_OnSessionCaptionDisabled_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.boca.mojom.Page_OnSessionCaptionDisabled_ParamsSpec.$ = {};
mojo.internal.bindings.ash.boca.mojom.Page_OnFrameDataReceived_ParamsSpec = mojo.internal.bindings.ash.boca.mojom.Page_OnFrameDataReceived_ParamsSpec || { $: {} };
if (mojo.internal.bindings.ash.boca.mojom.Page_OnFrameDataReceived_ParamsSpec.$.structSpec && mojo.internal.bindings.ash.boca.mojom.Page_OnFrameDataReceived_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.boca.mojom.Page_OnFrameDataReceived_ParamsSpec.$ = {};
mojo.internal.bindings.ash.boca.mojom.Page_OnSpotlightCrdSessionStatusUpdated_ParamsSpec = mojo.internal.bindings.ash.boca.mojom.Page_OnSpotlightCrdSessionStatusUpdated_ParamsSpec || { $: {} };
if (mojo.internal.bindings.ash.boca.mojom.Page_OnSpotlightCrdSessionStatusUpdated_ParamsSpec.$.structSpec && mojo.internal.bindings.ash.boca.mojom.Page_OnSpotlightCrdSessionStatusUpdated_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.boca.mojom.Page_OnSpotlightCrdSessionStatusUpdated_ParamsSpec.$ = {};
mojo.internal.bindings.ash.boca.mojom.Page_OnPresentStudentScreenEnded_ParamsSpec = mojo.internal.bindings.ash.boca.mojom.Page_OnPresentStudentScreenEnded_ParamsSpec || { $: {} };
if (mojo.internal.bindings.ash.boca.mojom.Page_OnPresentStudentScreenEnded_ParamsSpec.$.structSpec && mojo.internal.bindings.ash.boca.mojom.Page_OnPresentStudentScreenEnded_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.boca.mojom.Page_OnPresentStudentScreenEnded_ParamsSpec.$ = {};
mojo.internal.bindings.ash.boca.mojom.Page_OnPresentOwnScreenEnded_ParamsSpec = mojo.internal.bindings.ash.boca.mojom.Page_OnPresentOwnScreenEnded_ParamsSpec || { $: {} };
if (mojo.internal.bindings.ash.boca.mojom.Page_OnPresentOwnScreenEnded_ParamsSpec.$.structSpec && mojo.internal.bindings.ash.boca.mojom.Page_OnPresentOwnScreenEnded_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.boca.mojom.Page_OnPresentOwnScreenEnded_ParamsSpec.$ = {};
mojo.internal.bindings.ash.boca.mojom.BocaPageHandlerFactory = mojo.internal.bindings.ash.boca.mojom.BocaPageHandlerFactory || {};
mojo.internal.bindings.ash.boca.mojom.BocaPageHandlerFactorySpec = mojo.internal.bindings.ash.boca.mojom.BocaPageHandlerFactorySpec || { $ : {} };
if (mojo.internal.bindings.ash.boca.mojom.BocaPageHandlerFactorySpec.$.structSpec && mojo.internal.bindings.ash.boca.mojom.BocaPageHandlerFactorySpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.boca.mojom.BocaPageHandlerFactorySpec.$ = {};
mojo.internal.bindings.ash.boca.mojom.BocaPageHandlerFactory.$interfaceName = 'ash.boca.mojom.BocaPageHandlerFactory';
mojo.internal.bindings.ash.boca.mojom.BocaPageHandlerFactory_Create_ParamsSpec = mojo.internal.bindings.ash.boca.mojom.BocaPageHandlerFactory_Create_ParamsSpec || { $: {} };
if (mojo.internal.bindings.ash.boca.mojom.BocaPageHandlerFactory_Create_ParamsSpec.$.structSpec && mojo.internal.bindings.ash.boca.mojom.BocaPageHandlerFactory_Create_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.boca.mojom.BocaPageHandlerFactory_Create_ParamsSpec.$ = {};

// External type stubs (from imports)
mojo.internal.bindings.ash = mojo.internal.bindings.ash || {};
mojo.internal.bindings.ash.boca = mojo.internal.bindings.ash.boca || {};
mojo.internal.bindings.ash.boca.mojom = mojo.internal.bindings.ash.boca.mojom || {};
mojo.internal.bindings.ash.boca.mojom.ConfigResultSpec = mojo.internal.bindings.ash.boca.mojom.ConfigResultSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.ash = mojo.internal.bindings.ash || {};
mojo.internal.bindings.ash.boca = mojo.internal.bindings.ash.boca || {};
mojo.internal.bindings.ash.boca.mojom = mojo.internal.bindings.ash.boca.mojom || {};
mojo.internal.bindings.ash.boca.mojom.SessionResultSpec = mojo.internal.bindings.ash.boca.mojom.SessionResultSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.chromeos = mojo.internal.bindings.chromeos || {};
mojo.internal.bindings.chromeos.network_config = mojo.internal.bindings.chromeos.network_config || {};
mojo.internal.bindings.chromeos.network_config.mojom = mojo.internal.bindings.chromeos.network_config.mojom || {};
mojo.internal.bindings.chromeos.network_config.mojom.ConnectionStateTypeSpec = mojo.internal.bindings.chromeos.network_config.mojom.ConnectionStateTypeSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.mojo_base = mojo.internal.bindings.mojo_base || {};
mojo.internal.bindings.mojo_base.mojom = mojo.internal.bindings.mojo_base.mojom || {};
mojo.internal.bindings.mojo_base.mojom.JSTimeSpec = mojo.internal.bindings.mojo_base.mojom.JSTimeSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.mojo_base = mojo.internal.bindings.mojo_base || {};
mojo.internal.bindings.mojo_base.mojom = mojo.internal.bindings.mojo_base.mojom || {};
mojo.internal.bindings.mojo_base.mojom.TimeDeltaSpec = mojo.internal.bindings.mojo_base.mojom.TimeDeltaSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.mojo_base = mojo.internal.bindings.mojo_base || {};
mojo.internal.bindings.mojo_base.mojom = mojo.internal.bindings.mojo_base.mojom || {};
mojo.internal.bindings.mojo_base.mojom.ValueSpec = mojo.internal.bindings.mojo_base.mojom.ValueSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.skia = mojo.internal.bindings.skia || {};
mojo.internal.bindings.skia.mojom = mojo.internal.bindings.skia.mojom || {};
mojo.internal.bindings.skia.mojom.BitmapN32Spec = mojo.internal.bindings.skia.mojom.BitmapN32Spec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.url = mojo.internal.bindings.url || {};
mojo.internal.bindings.url.mojom = mojo.internal.bindings.url.mojom || {};
mojo.internal.bindings.url.mojom.UrlSpec = mojo.internal.bindings.url.mojom.UrlSpec || { $: mojo.internal.OpaqueStruct.$ };

// Enum: UrlType
mojo.internal.bindings.ash.boca.mojom.UrlType = {
  kGeminiRegular: 0,
  kGeminiGuidedLearning: 1,
};

// Enum: MaterialType
mojo.internal.bindings.ash.boca.mojom.MaterialType = {
  kUnknown: 0,
  kSharedDriveFile: 1,
  kYoutubeVideo: 2,
  kLink: 3,
  kForm: 4,
  kGuidedLearning: 5,
};

// Enum: AssignmentType
mojo.internal.bindings.ash.boca.mojom.AssignmentType = {
  kUnspecified: 0,
  kAssignment: 1,
  kShortAnswerQuestion: 2,
  kMultipleChoiceQuestion: 3,
};

// Enum: NetworkType
mojo.internal.bindings.ash.boca.mojom.NetworkType = {
  kCellular: 0,
  kEthernet: 1,
  kWiFi: 2,
  kUnsupported: 3,
};

// Enum: Permission
mojo.internal.bindings.ash.boca.mojom.Permission = {
  kMicrophone: 0,
  kCamera: 1,
};

// Enum: PermissionSetting
mojo.internal.bindings.ash.boca.mojom.PermissionSetting = {
  kAllow: 0,
  kAsk: 1,
  kBlock: 2,
};

// Enum: NavigationType
mojo.internal.bindings.ash.boca.mojom.NavigationType = {
  kUnknown: 0,
  kOpen: 1,
  kBlock: 2,
  kDomain: 3,
  kLimited: 4,
  kSameDomainOpenOtherDomainLimited: 5,
  kWorkspace: 6,
};

// Enum: JoinMethod
mojo.internal.bindings.ash.boca.mojom.JoinMethod = {
  kRoster: 0,
  kAccessCode: 1,
};

// Enum: BocaValidPref
mojo.internal.bindings.ash.boca.mojom.BocaValidPref = {
  kNavigationSetting: 0,
  kCaptionEnablementSetting: 1,
  kDefaultMediaStreamSetting: 2,
  kOOBEAccessCount: 3,
  kKioskReceiverCodes: 4,
};

// Enum: StudentStatusDetail
mojo.internal.bindings.ash.boca.mojom.StudentStatusDetail = {
  kUnknown: 0,
  kNotFound: 1,
  kAdded: 2,
  kActive: 3,
  kRemovedByOtherSession: 4,
  kRemovedByBeingTeacher: 5,
  kRemovedByTeacher: 6,
  kNotAddedConfiguredAsTeacher: 7,
  kNotAddedNotConfigured: 8,
  kMultipleDeviceSignedIn: 9,
};

// Enum: GeminiEnablementState
mojo.internal.bindings.ash.boca.mojom.GeminiEnablementState = {
  kUnknown: 0,
  kEnabled: 1,
  kDisabled: 2,
};

// Enum: GetSessionError
mojo.internal.bindings.ash.boca.mojom.GetSessionError = {
  kHTTPError: 0,
  kEmpty: 1,
};

// Enum: UpdateSessionError
mojo.internal.bindings.ash.boca.mojom.UpdateSessionError = {
  kInvalid: 0,
  kHTTPError: 1,
  kPreconditionFailed: 2,
};

// Enum: RemoveStudentError
mojo.internal.bindings.ash.boca.mojom.RemoveStudentError = {
  kInvalid: 0,
  kHTTPError: 1,
};

// Enum: RenotifyStudentError
mojo.internal.bindings.ash.boca.mojom.RenotifyStudentError = {
  kInvalid: 0,
  kHTTPError: 1,
};

// Enum: AddStudentsError
mojo.internal.bindings.ash.boca.mojom.AddStudentsError = {
  kInvalid: 0,
  kHTTPError: 1,
};

// Enum: SubmitAccessCodeError
mojo.internal.bindings.ash.boca.mojom.SubmitAccessCodeError = {
  kInvalid: 0,
  kNetworkRestriction: 1,
};

// Enum: ViewStudentScreenError
mojo.internal.bindings.ash.boca.mojom.ViewStudentScreenError = {
  kHTTPError: 0,
};

// Enum: EndViewScreenSessionError
mojo.internal.bindings.ash.boca.mojom.EndViewScreenSessionError = {
  kHTTPError: 0,
};

// Enum: SetViewScreenSessionActiveError
mojo.internal.bindings.ash.boca.mojom.SetViewScreenSessionActiveError = {
  kHTTPError: 0,
};

// Enum: SpeechRecognitionInstallState
mojo.internal.bindings.ash.boca.mojom.SpeechRecognitionInstallState = {
  kUnknown: 0,
  kSystemLanguageUnsupported: 1,
  kInProgress: 2,
  kFailed: 3,
  kReady: 4,
};

// Enum: CreateSessionError
mojo.internal.bindings.ash.boca.mojom.CreateSessionError = {
  kHTTPError: 0,
  kNetworkRestriction: 1,
  kMaxStudentsExceeded: 2,
};

// Enum: CrdConnectionState
mojo.internal.bindings.ash.boca.mojom.CrdConnectionState = {
  kUnknown: 0,
  kConnecting: 1,
  kConnected: 2,
  kDisconnected: 3,
  kFailed: 4,
};

// Interface: PageHandler
mojo.internal.bindings.ash.boca.mojom.PageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
    if (handle) {
      this.__mojoHandle = handle.router_ ? handle.router_.pipe_ : (handle.pipe_ || handle);
    }
  }
};

mojo.internal.bindings.ash.boca.mojom.PageHandlerRemote = class {
  static get $interfaceName() {
    return 'ash.boca.mojom.PageHandler';
  }

  constructor(handle = undefined) {
    this.__mojoHandle = handle;
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.ash.boca.mojom.PageHandlerPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.ash.boca.mojom.PageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  getWindowsTabsList() {
    return this.$.getWindowsTabsList();
  }
  listCourses() {
    return this.$.listCourses();
  }
  listStudents(arg_course_id) {
    return this.$.listStudents(arg_course_id);
  }
  listAssignments(arg_course_id) {
    return this.$.listAssignments(arg_course_id);
  }
  createSession(arg_config) {
    return this.$.createSession(arg_config);
  }
  getSession() {
    return this.$.getSession();
  }
  endSession() {
    return this.$.endSession();
  }
  extendSessionDuration(arg_extended_duration) {
    return this.$.extendSessionDuration(arg_extended_duration);
  }
  removeStudent(arg_student_id) {
    return this.$.removeStudent(arg_student_id);
  }
  renotifyStudent(arg_student_id) {
    return this.$.renotifyStudent(arg_student_id);
  }
  addStudents(arg_students) {
    return this.$.addStudents(arg_students);
  }
  updateOnTaskConfig(arg_on_task_config) {
    return this.$.updateOnTaskConfig(arg_on_task_config);
  }
  updateCaptionConfig(arg_caption_config) {
    return this.$.updateCaptionConfig(arg_caption_config);
  }
  setFloatMode(arg_is_float_mode) {
    return this.$.setFloatMode(arg_is_float_mode);
  }
  submitAccessCode(arg_access_code) {
    return this.$.submitAccessCode(arg_access_code);
  }
  viewStudentScreen(arg_id) {
    return this.$.viewStudentScreen(arg_id);
  }
  endViewScreenSession(arg_id) {
    return this.$.endViewScreenSession(arg_id);
  }
  setViewScreenSessionActive(arg_id) {
    return this.$.setViewScreenSessionActive(arg_id);
  }
  getUserPref(arg_pref) {
    return this.$.getUserPref(arg_pref);
  }
  setUserPref(arg_pref, arg_value) {
    return this.$.setUserPref(arg_pref, arg_value);
  }
  setSitePermission(arg_url, arg_permission, arg_setting) {
    return this.$.setSitePermission(arg_url, arg_permission, arg_setting);
  }
  openFeedbackDialog() {
    return this.$.openFeedbackDialog();
  }
  refreshWorkbook() {
    return this.$.refreshWorkbook();
  }
  getSpeechRecognitionInstallationStatus() {
    return this.$.getSpeechRecognitionInstallationStatus();
  }
  startSpotlight(arg_crd_connection_code) {
    return this.$.startSpotlight(arg_crd_connection_code);
  }
  presentStudentScreen(arg_student, arg_receiver_id) {
    return this.$.presentStudentScreen(arg_student, arg_receiver_id);
  }
  stopPresentingStudentScreen() {
    return this.$.stopPresentingStudentScreen();
  }
  presentOwnScreen(arg_receiver_id) {
    return this.$.presentOwnScreen(arg_receiver_id);
  }
  stopPresentingOwnScreen() {
    return this.$.stopPresentingOwnScreen();
  }
  getGeminiStatus() {
    return this.$.getGeminiStatus();
  }
};

mojo.internal.bindings.ash.boca.mojom.PageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ash.boca.mojom.PageHandler', [
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
      { explicit: null },
      { explicit: null },
    ]);
  }

  getWindowsTabsList() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.ash.boca.mojom.PageHandler_GetWindowsTabsList_ParamsSpec,
      mojo.internal.bindings.ash.boca.mojom.PageHandler_GetWindowsTabsList_ResponseParamsSpec,
      [],
      false);
  }

  listCourses() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.ash.boca.mojom.PageHandler_ListCourses_ParamsSpec,
      mojo.internal.bindings.ash.boca.mojom.PageHandler_ListCourses_ResponseParamsSpec,
      [],
      false);
  }

  listStudents(arg_course_id) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.ash.boca.mojom.PageHandler_ListStudents_ParamsSpec,
      mojo.internal.bindings.ash.boca.mojom.PageHandler_ListStudents_ResponseParamsSpec,
      [arg_course_id],
      false);
  }

  listAssignments(arg_course_id) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.ash.boca.mojom.PageHandler_ListAssignments_ParamsSpec,
      mojo.internal.bindings.ash.boca.mojom.PageHandler_ListAssignments_ResponseParamsSpec,
      [arg_course_id],
      false);
  }

  createSession(arg_config) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.ash.boca.mojom.PageHandler_CreateSession_ParamsSpec,
      mojo.internal.bindings.ash.boca.mojom.PageHandler_CreateSession_ResponseParamsSpec,
      [arg_config],
      false);
  }

  getSession() {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojo.internal.bindings.ash.boca.mojom.PageHandler_GetSession_ParamsSpec,
      mojo.internal.bindings.ash.boca.mojom.PageHandler_GetSession_ResponseParamsSpec,
      [],
      false);
  }

  endSession() {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      mojo.internal.bindings.ash.boca.mojom.PageHandler_EndSession_ParamsSpec,
      mojo.internal.bindings.ash.boca.mojom.PageHandler_EndSession_ResponseParamsSpec,
      [],
      false);
  }

  extendSessionDuration(arg_extended_duration) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      mojo.internal.bindings.ash.boca.mojom.PageHandler_ExtendSessionDuration_ParamsSpec,
      mojo.internal.bindings.ash.boca.mojom.PageHandler_ExtendSessionDuration_ResponseParamsSpec,
      [arg_extended_duration],
      false);
  }

  removeStudent(arg_student_id) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      mojo.internal.bindings.ash.boca.mojom.PageHandler_RemoveStudent_ParamsSpec,
      mojo.internal.bindings.ash.boca.mojom.PageHandler_RemoveStudent_ResponseParamsSpec,
      [arg_student_id],
      false);
  }

  renotifyStudent(arg_student_id) {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      mojo.internal.bindings.ash.boca.mojom.PageHandler_RenotifyStudent_ParamsSpec,
      mojo.internal.bindings.ash.boca.mojom.PageHandler_RenotifyStudent_ResponseParamsSpec,
      [arg_student_id],
      false);
  }

  addStudents(arg_students) {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      mojo.internal.bindings.ash.boca.mojom.PageHandler_AddStudents_ParamsSpec,
      mojo.internal.bindings.ash.boca.mojom.PageHandler_AddStudents_ResponseParamsSpec,
      [arg_students],
      false);
  }

  updateOnTaskConfig(arg_on_task_config) {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      mojo.internal.bindings.ash.boca.mojom.PageHandler_UpdateOnTaskConfig_ParamsSpec,
      mojo.internal.bindings.ash.boca.mojom.PageHandler_UpdateOnTaskConfig_ResponseParamsSpec,
      [arg_on_task_config],
      false);
  }

  updateCaptionConfig(arg_caption_config) {
    return this.proxy.sendMessage(
      this.ordinals[12],  // ordinal
      mojo.internal.bindings.ash.boca.mojom.PageHandler_UpdateCaptionConfig_ParamsSpec,
      mojo.internal.bindings.ash.boca.mojom.PageHandler_UpdateCaptionConfig_ResponseParamsSpec,
      [arg_caption_config],
      false);
  }

  setFloatMode(arg_is_float_mode) {
    return this.proxy.sendMessage(
      this.ordinals[13],  // ordinal
      mojo.internal.bindings.ash.boca.mojom.PageHandler_SetFloatMode_ParamsSpec,
      mojo.internal.bindings.ash.boca.mojom.PageHandler_SetFloatMode_ResponseParamsSpec,
      [arg_is_float_mode],
      false);
  }

  submitAccessCode(arg_access_code) {
    return this.proxy.sendMessage(
      this.ordinals[14],  // ordinal
      mojo.internal.bindings.ash.boca.mojom.PageHandler_SubmitAccessCode_ParamsSpec,
      mojo.internal.bindings.ash.boca.mojom.PageHandler_SubmitAccessCode_ResponseParamsSpec,
      [arg_access_code],
      false);
  }

  viewStudentScreen(arg_id) {
    return this.proxy.sendMessage(
      this.ordinals[15],  // ordinal
      mojo.internal.bindings.ash.boca.mojom.PageHandler_ViewStudentScreen_ParamsSpec,
      mojo.internal.bindings.ash.boca.mojom.PageHandler_ViewStudentScreen_ResponseParamsSpec,
      [arg_id],
      false);
  }

  endViewScreenSession(arg_id) {
    return this.proxy.sendMessage(
      this.ordinals[16],  // ordinal
      mojo.internal.bindings.ash.boca.mojom.PageHandler_EndViewScreenSession_ParamsSpec,
      mojo.internal.bindings.ash.boca.mojom.PageHandler_EndViewScreenSession_ResponseParamsSpec,
      [arg_id],
      false);
  }

  setViewScreenSessionActive(arg_id) {
    return this.proxy.sendMessage(
      this.ordinals[17],  // ordinal
      mojo.internal.bindings.ash.boca.mojom.PageHandler_SetViewScreenSessionActive_ParamsSpec,
      mojo.internal.bindings.ash.boca.mojom.PageHandler_SetViewScreenSessionActive_ResponseParamsSpec,
      [arg_id],
      false);
  }

  getUserPref(arg_pref) {
    return this.proxy.sendMessage(
      this.ordinals[18],  // ordinal
      mojo.internal.bindings.ash.boca.mojom.PageHandler_GetUserPref_ParamsSpec,
      mojo.internal.bindings.ash.boca.mojom.PageHandler_GetUserPref_ResponseParamsSpec,
      [arg_pref],
      false);
  }

  setUserPref(arg_pref, arg_value) {
    return this.proxy.sendMessage(
      this.ordinals[19],  // ordinal
      mojo.internal.bindings.ash.boca.mojom.PageHandler_SetUserPref_ParamsSpec,
      mojo.internal.bindings.ash.boca.mojom.PageHandler_SetUserPref_ResponseParamsSpec,
      [arg_pref, arg_value],
      false);
  }

  setSitePermission(arg_url, arg_permission, arg_setting) {
    return this.proxy.sendMessage(
      this.ordinals[20],  // ordinal
      mojo.internal.bindings.ash.boca.mojom.PageHandler_SetSitePermission_ParamsSpec,
      mojo.internal.bindings.ash.boca.mojom.PageHandler_SetSitePermission_ResponseParamsSpec,
      [arg_url, arg_permission, arg_setting],
      false);
  }

  openFeedbackDialog() {
    return this.proxy.sendMessage(
      this.ordinals[21],  // ordinal
      mojo.internal.bindings.ash.boca.mojom.PageHandler_OpenFeedbackDialog_ParamsSpec,
      mojo.internal.bindings.ash.boca.mojom.PageHandler_OpenFeedbackDialog_ResponseParamsSpec,
      [],
      false);
  }

  refreshWorkbook() {
    return this.proxy.sendMessage(
      this.ordinals[22],  // ordinal
      mojo.internal.bindings.ash.boca.mojom.PageHandler_RefreshWorkbook_ParamsSpec,
      mojo.internal.bindings.ash.boca.mojom.PageHandler_RefreshWorkbook_ResponseParamsSpec,
      [],
      false);
  }

  getSpeechRecognitionInstallationStatus() {
    return this.proxy.sendMessage(
      this.ordinals[23],  // ordinal
      mojo.internal.bindings.ash.boca.mojom.PageHandler_GetSpeechRecognitionInstallationStatus_ParamsSpec,
      mojo.internal.bindings.ash.boca.mojom.PageHandler_GetSpeechRecognitionInstallationStatus_ResponseParamsSpec,
      [],
      false);
  }

  startSpotlight(arg_crd_connection_code) {
    return this.proxy.sendMessage(
      this.ordinals[24],  // ordinal
      mojo.internal.bindings.ash.boca.mojom.PageHandler_StartSpotlight_ParamsSpec,
      mojo.internal.bindings.ash.boca.mojom.PageHandler_StartSpotlight_ResponseParamsSpec,
      [arg_crd_connection_code],
      false);
  }

  presentStudentScreen(arg_student, arg_receiver_id) {
    return this.proxy.sendMessage(
      this.ordinals[25],  // ordinal
      mojo.internal.bindings.ash.boca.mojom.PageHandler_PresentStudentScreen_ParamsSpec,
      mojo.internal.bindings.ash.boca.mojom.PageHandler_PresentStudentScreen_ResponseParamsSpec,
      [arg_student, arg_receiver_id],
      false);
  }

  stopPresentingStudentScreen() {
    return this.proxy.sendMessage(
      this.ordinals[26],  // ordinal
      mojo.internal.bindings.ash.boca.mojom.PageHandler_StopPresentingStudentScreen_ParamsSpec,
      mojo.internal.bindings.ash.boca.mojom.PageHandler_StopPresentingStudentScreen_ResponseParamsSpec,
      [],
      false);
  }

  presentOwnScreen(arg_receiver_id) {
    return this.proxy.sendMessage(
      this.ordinals[27],  // ordinal
      mojo.internal.bindings.ash.boca.mojom.PageHandler_PresentOwnScreen_ParamsSpec,
      mojo.internal.bindings.ash.boca.mojom.PageHandler_PresentOwnScreen_ResponseParamsSpec,
      [arg_receiver_id],
      false);
  }

  stopPresentingOwnScreen() {
    return this.proxy.sendMessage(
      this.ordinals[28],  // ordinal
      mojo.internal.bindings.ash.boca.mojom.PageHandler_StopPresentingOwnScreen_ParamsSpec,
      mojo.internal.bindings.ash.boca.mojom.PageHandler_StopPresentingOwnScreen_ResponseParamsSpec,
      [],
      false);
  }

  getGeminiStatus() {
    return this.proxy.sendMessage(
      this.ordinals[29],  // ordinal
      mojo.internal.bindings.ash.boca.mojom.PageHandler_GetGeminiStatus_ParamsSpec,
      mojo.internal.bindings.ash.boca.mojom.PageHandler_GetGeminiStatus_ResponseParamsSpec,
      [],
      false);
  }

};

mojo.internal.bindings.ash.boca.mojom.PageHandler.getRemote = function() {
  let remote = new mojo.internal.bindings.ash.boca.mojom.PageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.boca.mojom.PageHandler',
    'context');
  return remote.$;
};

mojo.internal.bindings.ash.boca.mojom.PageHandlerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ash.boca.mojom.PageHandler', [
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.boca.mojom.PageHandler_GetWindowsTabsList_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getWindowsTabsList');
          const result = this.impl.getWindowsTabsList();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const val = (response && typeof response === 'object' && 'arg_window_list' in response) ? response['arg_window_list'] : response;
              const resp_obj = { 'arg_window_list': val };
              const message = new mojo.internal.Message(
                this.router_, 0, mojo.internal.kMessageFlagIsResponse,
                header.ordinal, header.requestId, mojo.internal.bindings.ash.boca.mojom.PageHandler_GetWindowsTabsList_ResponseParamsSpec.$.structSpec, resp_obj);
              this.router_.send(message);
            }).catch(e => console.error('[GeneratedReceiver] getWindowsTabsList FAILED:', e));
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.boca.mojom.PageHandler_ListCourses_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.listCourses');
          const result = this.impl.listCourses();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const val = (response && typeof response === 'object' && 'arg_courses' in response) ? response['arg_courses'] : response;
              const resp_obj = { 'arg_courses': val };
              const message = new mojo.internal.Message(
                this.router_, 0, mojo.internal.kMessageFlagIsResponse,
                header.ordinal, header.requestId, mojo.internal.bindings.ash.boca.mojom.PageHandler_ListCourses_ResponseParamsSpec.$.structSpec, resp_obj);
              this.router_.send(message);
            }).catch(e => console.error('[GeneratedReceiver] listCourses FAILED:', e));
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.boca.mojom.PageHandler_ListStudents_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.listStudents');
          const result = this.impl.listStudents(params.arg_course_id);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const val = (response && typeof response === 'object' && 'arg_students' in response) ? response['arg_students'] : response;
              const resp_obj = { 'arg_students': val };
              const message = new mojo.internal.Message(
                this.router_, 0, mojo.internal.kMessageFlagIsResponse,
                header.ordinal, header.requestId, mojo.internal.bindings.ash.boca.mojom.PageHandler_ListStudents_ResponseParamsSpec.$.structSpec, resp_obj);
              this.router_.send(message);
            }).catch(e => console.error('[GeneratedReceiver] listStudents FAILED:', e));
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.boca.mojom.PageHandler_ListAssignments_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.listAssignments');
          const result = this.impl.listAssignments(params.arg_course_id);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const val = (response && typeof response === 'object' && 'arg_assignments' in response) ? response['arg_assignments'] : response;
              const resp_obj = { 'arg_assignments': val };
              const message = new mojo.internal.Message(
                this.router_, 0, mojo.internal.kMessageFlagIsResponse,
                header.ordinal, header.requestId, mojo.internal.bindings.ash.boca.mojom.PageHandler_ListAssignments_ResponseParamsSpec.$.structSpec, resp_obj);
              this.router_.send(message);
            }).catch(e => console.error('[GeneratedReceiver] listAssignments FAILED:', e));
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.boca.mojom.PageHandler_CreateSession_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.createSession');
          const result = this.impl.createSession(params.arg_config);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const val = (response && typeof response === 'object' && 'arg_error' in response) ? response['arg_error'] : response;
              const resp_obj = { 'arg_error': val };
              const message = new mojo.internal.Message(
                this.router_, 0, mojo.internal.kMessageFlagIsResponse,
                header.ordinal, header.requestId, mojo.internal.bindings.ash.boca.mojom.PageHandler_CreateSession_ResponseParamsSpec.$.structSpec, resp_obj);
              this.router_.send(message);
            }).catch(e => console.error('[GeneratedReceiver] createSession FAILED:', e));
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.boca.mojom.PageHandler_GetSession_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getSession');
          const result = this.impl.getSession();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const val = (response && typeof response === 'object' && 'arg_result' in response) ? response['arg_result'] : response;
              const resp_obj = { 'arg_result': val };
              const message = new mojo.internal.Message(
                this.router_, 0, mojo.internal.kMessageFlagIsResponse,
                header.ordinal, header.requestId, mojo.internal.bindings.ash.boca.mojom.PageHandler_GetSession_ResponseParamsSpec.$.structSpec, resp_obj);
              this.router_.send(message);
            }).catch(e => console.error('[GeneratedReceiver] getSession FAILED:', e));
          }
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.boca.mojom.PageHandler_EndSession_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.endSession');
          const result = this.impl.endSession();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const val = (response && typeof response === 'object' && 'arg_error' in response) ? response['arg_error'] : response;
              const resp_obj = { 'arg_error': val };
              const message = new mojo.internal.Message(
                this.router_, 0, mojo.internal.kMessageFlagIsResponse,
                header.ordinal, header.requestId, mojo.internal.bindings.ash.boca.mojom.PageHandler_EndSession_ResponseParamsSpec.$.structSpec, resp_obj);
              this.router_.send(message);
            }).catch(e => console.error('[GeneratedReceiver] endSession FAILED:', e));
          }
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.boca.mojom.PageHandler_ExtendSessionDuration_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.extendSessionDuration');
          const result = this.impl.extendSessionDuration(params.arg_extended_duration);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const val = (response && typeof response === 'object' && 'arg_error' in response) ? response['arg_error'] : response;
              const resp_obj = { 'arg_error': val };
              const message = new mojo.internal.Message(
                this.router_, 0, mojo.internal.kMessageFlagIsResponse,
                header.ordinal, header.requestId, mojo.internal.bindings.ash.boca.mojom.PageHandler_ExtendSessionDuration_ResponseParamsSpec.$.structSpec, resp_obj);
              this.router_.send(message);
            }).catch(e => console.error('[GeneratedReceiver] extendSessionDuration FAILED:', e));
          }
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.boca.mojom.PageHandler_RemoveStudent_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.removeStudent');
          const result = this.impl.removeStudent(params.arg_student_id);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const val = (response && typeof response === 'object' && 'arg_error' in response) ? response['arg_error'] : response;
              const resp_obj = { 'arg_error': val };
              const message = new mojo.internal.Message(
                this.router_, 0, mojo.internal.kMessageFlagIsResponse,
                header.ordinal, header.requestId, mojo.internal.bindings.ash.boca.mojom.PageHandler_RemoveStudent_ResponseParamsSpec.$.structSpec, resp_obj);
              this.router_.send(message);
            }).catch(e => console.error('[GeneratedReceiver] removeStudent FAILED:', e));
          }
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.boca.mojom.PageHandler_RenotifyStudent_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.renotifyStudent');
          const result = this.impl.renotifyStudent(params.arg_student_id);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const val = (response && typeof response === 'object' && 'arg_error' in response) ? response['arg_error'] : response;
              const resp_obj = { 'arg_error': val };
              const message = new mojo.internal.Message(
                this.router_, 0, mojo.internal.kMessageFlagIsResponse,
                header.ordinal, header.requestId, mojo.internal.bindings.ash.boca.mojom.PageHandler_RenotifyStudent_ResponseParamsSpec.$.structSpec, resp_obj);
              this.router_.send(message);
            }).catch(e => console.error('[GeneratedReceiver] renotifyStudent FAILED:', e));
          }
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.boca.mojom.PageHandler_AddStudents_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.addStudents');
          const result = this.impl.addStudents(params.arg_students);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const val = (response && typeof response === 'object' && 'arg_error' in response) ? response['arg_error'] : response;
              const resp_obj = { 'arg_error': val };
              const message = new mojo.internal.Message(
                this.router_, 0, mojo.internal.kMessageFlagIsResponse,
                header.ordinal, header.requestId, mojo.internal.bindings.ash.boca.mojom.PageHandler_AddStudents_ResponseParamsSpec.$.structSpec, resp_obj);
              this.router_.send(message);
            }).catch(e => console.error('[GeneratedReceiver] addStudents FAILED:', e));
          }
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.boca.mojom.PageHandler_UpdateOnTaskConfig_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.updateOnTaskConfig');
          const result = this.impl.updateOnTaskConfig(params.arg_on_task_config);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const val = (response && typeof response === 'object' && 'arg_error' in response) ? response['arg_error'] : response;
              const resp_obj = { 'arg_error': val };
              const message = new mojo.internal.Message(
                this.router_, 0, mojo.internal.kMessageFlagIsResponse,
                header.ordinal, header.requestId, mojo.internal.bindings.ash.boca.mojom.PageHandler_UpdateOnTaskConfig_ResponseParamsSpec.$.structSpec, resp_obj);
              this.router_.send(message);
            }).catch(e => console.error('[GeneratedReceiver] updateOnTaskConfig FAILED:', e));
          }
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.boca.mojom.PageHandler_UpdateCaptionConfig_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.updateCaptionConfig');
          const result = this.impl.updateCaptionConfig(params.arg_caption_config);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const val = (response && typeof response === 'object' && 'arg_error' in response) ? response['arg_error'] : response;
              const resp_obj = { 'arg_error': val };
              const message = new mojo.internal.Message(
                this.router_, 0, mojo.internal.kMessageFlagIsResponse,
                header.ordinal, header.requestId, mojo.internal.bindings.ash.boca.mojom.PageHandler_UpdateCaptionConfig_ResponseParamsSpec.$.structSpec, resp_obj);
              this.router_.send(message);
            }).catch(e => console.error('[GeneratedReceiver] updateCaptionConfig FAILED:', e));
          }
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.boca.mojom.PageHandler_SetFloatMode_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setFloatMode');
          const result = this.impl.setFloatMode(params.arg_is_float_mode);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const val = (response && typeof response === 'object' && 'arg_success' in response) ? response['arg_success'] : response;
              const resp_obj = { 'arg_success': val };
              const message = new mojo.internal.Message(
                this.router_, 0, mojo.internal.kMessageFlagIsResponse,
                header.ordinal, header.requestId, mojo.internal.bindings.ash.boca.mojom.PageHandler_SetFloatMode_ResponseParamsSpec.$.structSpec, resp_obj);
              this.router_.send(message);
            }).catch(e => console.error('[GeneratedReceiver] setFloatMode FAILED:', e));
          }
          break;
        }
        case 14: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.boca.mojom.PageHandler_SubmitAccessCode_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.submitAccessCode');
          const result = this.impl.submitAccessCode(params.arg_access_code);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const val = (response && typeof response === 'object' && 'arg_error' in response) ? response['arg_error'] : response;
              const resp_obj = { 'arg_error': val };
              const message = new mojo.internal.Message(
                this.router_, 0, mojo.internal.kMessageFlagIsResponse,
                header.ordinal, header.requestId, mojo.internal.bindings.ash.boca.mojom.PageHandler_SubmitAccessCode_ResponseParamsSpec.$.structSpec, resp_obj);
              this.router_.send(message);
            }).catch(e => console.error('[GeneratedReceiver] submitAccessCode FAILED:', e));
          }
          break;
        }
        case 15: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.boca.mojom.PageHandler_ViewStudentScreen_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.viewStudentScreen');
          const result = this.impl.viewStudentScreen(params.arg_id);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const val = (response && typeof response === 'object' && 'arg_error' in response) ? response['arg_error'] : response;
              const resp_obj = { 'arg_error': val };
              const message = new mojo.internal.Message(
                this.router_, 0, mojo.internal.kMessageFlagIsResponse,
                header.ordinal, header.requestId, mojo.internal.bindings.ash.boca.mojom.PageHandler_ViewStudentScreen_ResponseParamsSpec.$.structSpec, resp_obj);
              this.router_.send(message);
            }).catch(e => console.error('[GeneratedReceiver] viewStudentScreen FAILED:', e));
          }
          break;
        }
        case 16: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.boca.mojom.PageHandler_EndViewScreenSession_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.endViewScreenSession');
          const result = this.impl.endViewScreenSession(params.arg_id);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const val = (response && typeof response === 'object' && 'arg_error' in response) ? response['arg_error'] : response;
              const resp_obj = { 'arg_error': val };
              const message = new mojo.internal.Message(
                this.router_, 0, mojo.internal.kMessageFlagIsResponse,
                header.ordinal, header.requestId, mojo.internal.bindings.ash.boca.mojom.PageHandler_EndViewScreenSession_ResponseParamsSpec.$.structSpec, resp_obj);
              this.router_.send(message);
            }).catch(e => console.error('[GeneratedReceiver] endViewScreenSession FAILED:', e));
          }
          break;
        }
        case 17: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.boca.mojom.PageHandler_SetViewScreenSessionActive_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setViewScreenSessionActive');
          const result = this.impl.setViewScreenSessionActive(params.arg_id);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const val = (response && typeof response === 'object' && 'arg_error' in response) ? response['arg_error'] : response;
              const resp_obj = { 'arg_error': val };
              const message = new mojo.internal.Message(
                this.router_, 0, mojo.internal.kMessageFlagIsResponse,
                header.ordinal, header.requestId, mojo.internal.bindings.ash.boca.mojom.PageHandler_SetViewScreenSessionActive_ResponseParamsSpec.$.structSpec, resp_obj);
              this.router_.send(message);
            }).catch(e => console.error('[GeneratedReceiver] setViewScreenSessionActive FAILED:', e));
          }
          break;
        }
        case 18: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.boca.mojom.PageHandler_GetUserPref_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getUserPref');
          const result = this.impl.getUserPref(params.arg_pref);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const val = (response && typeof response === 'object' && 'arg_value' in response) ? response['arg_value'] : response;
              const resp_obj = { 'arg_value': val };
              const message = new mojo.internal.Message(
                this.router_, 0, mojo.internal.kMessageFlagIsResponse,
                header.ordinal, header.requestId, mojo.internal.bindings.ash.boca.mojom.PageHandler_GetUserPref_ResponseParamsSpec.$.structSpec, resp_obj);
              this.router_.send(message);
            }).catch(e => console.error('[GeneratedReceiver] getUserPref FAILED:', e));
          }
          break;
        }
        case 19: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.boca.mojom.PageHandler_SetUserPref_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setUserPref');
          const result = this.impl.setUserPref(params.arg_pref, params.arg_value);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const resp_obj = response;
              const message = new mojo.internal.Message(
                this.router_, 0, mojo.internal.kMessageFlagIsResponse,
                header.ordinal, header.requestId, mojo.internal.bindings.ash.boca.mojom.PageHandler_SetUserPref_ResponseParamsSpec.$.structSpec, resp_obj);
              this.router_.send(message);
            }).catch(e => console.error('[GeneratedReceiver] setUserPref FAILED:', e));
          }
          break;
        }
        case 20: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.boca.mojom.PageHandler_SetSitePermission_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setSitePermission');
          const result = this.impl.setSitePermission(params.arg_url, params.arg_permission, params.arg_setting);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const val = (response && typeof response === 'object' && 'arg_success' in response) ? response['arg_success'] : response;
              const resp_obj = { 'arg_success': val };
              const message = new mojo.internal.Message(
                this.router_, 0, mojo.internal.kMessageFlagIsResponse,
                header.ordinal, header.requestId, mojo.internal.bindings.ash.boca.mojom.PageHandler_SetSitePermission_ResponseParamsSpec.$.structSpec, resp_obj);
              this.router_.send(message);
            }).catch(e => console.error('[GeneratedReceiver] setSitePermission FAILED:', e));
          }
          break;
        }
        case 21: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.boca.mojom.PageHandler_OpenFeedbackDialog_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.openFeedbackDialog');
          const result = this.impl.openFeedbackDialog();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const resp_obj = response;
              const message = new mojo.internal.Message(
                this.router_, 0, mojo.internal.kMessageFlagIsResponse,
                header.ordinal, header.requestId, mojo.internal.bindings.ash.boca.mojom.PageHandler_OpenFeedbackDialog_ResponseParamsSpec.$.structSpec, resp_obj);
              this.router_.send(message);
            }).catch(e => console.error('[GeneratedReceiver] openFeedbackDialog FAILED:', e));
          }
          break;
        }
        case 22: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.boca.mojom.PageHandler_RefreshWorkbook_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.refreshWorkbook');
          const result = this.impl.refreshWorkbook();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const resp_obj = response;
              const message = new mojo.internal.Message(
                this.router_, 0, mojo.internal.kMessageFlagIsResponse,
                header.ordinal, header.requestId, mojo.internal.bindings.ash.boca.mojom.PageHandler_RefreshWorkbook_ResponseParamsSpec.$.structSpec, resp_obj);
              this.router_.send(message);
            }).catch(e => console.error('[GeneratedReceiver] refreshWorkbook FAILED:', e));
          }
          break;
        }
        case 23: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.boca.mojom.PageHandler_GetSpeechRecognitionInstallationStatus_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getSpeechRecognitionInstallationStatus');
          const result = this.impl.getSpeechRecognitionInstallationStatus();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const val = (response && typeof response === 'object' && 'arg_state' in response) ? response['arg_state'] : response;
              const resp_obj = { 'arg_state': val };
              const message = new mojo.internal.Message(
                this.router_, 0, mojo.internal.kMessageFlagIsResponse,
                header.ordinal, header.requestId, mojo.internal.bindings.ash.boca.mojom.PageHandler_GetSpeechRecognitionInstallationStatus_ResponseParamsSpec.$.structSpec, resp_obj);
              this.router_.send(message);
            }).catch(e => console.error('[GeneratedReceiver] getSpeechRecognitionInstallationStatus FAILED:', e));
          }
          break;
        }
        case 24: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.boca.mojom.PageHandler_StartSpotlight_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.startSpotlight');
          const result = this.impl.startSpotlight(params.arg_crd_connection_code);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const resp_obj = response;
              const message = new mojo.internal.Message(
                this.router_, 0, mojo.internal.kMessageFlagIsResponse,
                header.ordinal, header.requestId, mojo.internal.bindings.ash.boca.mojom.PageHandler_StartSpotlight_ResponseParamsSpec.$.structSpec, resp_obj);
              this.router_.send(message);
            }).catch(e => console.error('[GeneratedReceiver] startSpotlight FAILED:', e));
          }
          break;
        }
        case 25: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.boca.mojom.PageHandler_PresentStudentScreen_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.presentStudentScreen');
          const result = this.impl.presentStudentScreen(params.arg_student, params.arg_receiver_id);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const val = (response && typeof response === 'object' && 'arg_success' in response) ? response['arg_success'] : response;
              const resp_obj = { 'arg_success': val };
              const message = new mojo.internal.Message(
                this.router_, 0, mojo.internal.kMessageFlagIsResponse,
                header.ordinal, header.requestId, mojo.internal.bindings.ash.boca.mojom.PageHandler_PresentStudentScreen_ResponseParamsSpec.$.structSpec, resp_obj);
              this.router_.send(message);
            }).catch(e => console.error('[GeneratedReceiver] presentStudentScreen FAILED:', e));
          }
          break;
        }
        case 26: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.boca.mojom.PageHandler_StopPresentingStudentScreen_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.stopPresentingStudentScreen');
          const result = this.impl.stopPresentingStudentScreen();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const val = (response && typeof response === 'object' && 'arg_success' in response) ? response['arg_success'] : response;
              const resp_obj = { 'arg_success': val };
              const message = new mojo.internal.Message(
                this.router_, 0, mojo.internal.kMessageFlagIsResponse,
                header.ordinal, header.requestId, mojo.internal.bindings.ash.boca.mojom.PageHandler_StopPresentingStudentScreen_ResponseParamsSpec.$.structSpec, resp_obj);
              this.router_.send(message);
            }).catch(e => console.error('[GeneratedReceiver] stopPresentingStudentScreen FAILED:', e));
          }
          break;
        }
        case 27: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.boca.mojom.PageHandler_PresentOwnScreen_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.presentOwnScreen');
          const result = this.impl.presentOwnScreen(params.arg_receiver_id);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const val = (response && typeof response === 'object' && 'arg_success' in response) ? response['arg_success'] : response;
              const resp_obj = { 'arg_success': val };
              const message = new mojo.internal.Message(
                this.router_, 0, mojo.internal.kMessageFlagIsResponse,
                header.ordinal, header.requestId, mojo.internal.bindings.ash.boca.mojom.PageHandler_PresentOwnScreen_ResponseParamsSpec.$.structSpec, resp_obj);
              this.router_.send(message);
            }).catch(e => console.error('[GeneratedReceiver] presentOwnScreen FAILED:', e));
          }
          break;
        }
        case 28: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.boca.mojom.PageHandler_StopPresentingOwnScreen_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.stopPresentingOwnScreen');
          const result = this.impl.stopPresentingOwnScreen();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const val = (response && typeof response === 'object' && 'arg_success' in response) ? response['arg_success'] : response;
              const resp_obj = { 'arg_success': val };
              const message = new mojo.internal.Message(
                this.router_, 0, mojo.internal.kMessageFlagIsResponse,
                header.ordinal, header.requestId, mojo.internal.bindings.ash.boca.mojom.PageHandler_StopPresentingOwnScreen_ResponseParamsSpec.$.structSpec, resp_obj);
              this.router_.send(message);
            }).catch(e => console.error('[GeneratedReceiver] stopPresentingOwnScreen FAILED:', e));
          }
          break;
        }
        case 29: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.boca.mojom.PageHandler_GetGeminiStatus_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getGeminiStatus');
          const result = this.impl.getGeminiStatus();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const val = (response && typeof response === 'object' && 'arg_enabled' in response) ? response['arg_enabled'] : response;
              const resp_obj = { 'arg_enabled': val };
              const message = new mojo.internal.Message(
                this.router_, 0, mojo.internal.kMessageFlagIsResponse,
                header.ordinal, header.requestId, mojo.internal.bindings.ash.boca.mojom.PageHandler_GetGeminiStatus_ResponseParamsSpec.$.structSpec, resp_obj);
              this.router_.send(message);
            }).catch(e => console.error('[GeneratedReceiver] getGeminiStatus FAILED:', e));
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

mojo.internal.bindings.ash.boca.mojom.PageHandlerReceiver = mojo.internal.bindings.ash.boca.mojom.PageHandlerReceiver;

mojo.internal.bindings.ash.boca.mojom.PageHandlerPtr = mojo.internal.bindings.ash.boca.mojom.PageHandlerRemote;
mojo.internal.bindings.ash.boca.mojom.PageHandlerRequest = mojo.internal.bindings.ash.boca.mojom.PageHandlerPendingReceiver;


// Interface: Page
mojo.internal.bindings.ash.boca.mojom.PagePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
    if (handle) {
      this.__mojoHandle = handle.router_ ? handle.router_.pipe_ : (handle.pipe_ || handle);
    }
  }
};

mojo.internal.bindings.ash.boca.mojom.PageRemote = class {
  static get $interfaceName() {
    return 'ash.boca.mojom.Page';
  }

  constructor(handle = undefined) {
    this.__mojoHandle = handle;
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.ash.boca.mojom.PagePendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.ash.boca.mojom.PageRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onStudentActivityUpdated(arg_activities) {
    return this.$.onStudentActivityUpdated(arg_activities);
  }
  onSessionConfigUpdated(arg_config) {
    return this.$.onSessionConfigUpdated(arg_config);
  }
  onActiveNetworkStateChanged(arg_active_networks) {
    return this.$.onActiveNetworkStateChanged(arg_active_networks);
  }
  onLocalCaptionDisabled() {
    return this.$.onLocalCaptionDisabled();
  }
  onSpeechRecognitionInstallStateUpdated(arg_state) {
    return this.$.onSpeechRecognitionInstallStateUpdated(arg_state);
  }
  onSessionCaptionDisabled(arg_is_error) {
    return this.$.onSessionCaptionDisabled(arg_is_error);
  }
  onFrameDataReceived(arg_frame_data) {
    return this.$.onFrameDataReceived(arg_frame_data);
  }
  onSpotlightCrdSessionStatusUpdated(arg_state) {
    return this.$.onSpotlightCrdSessionStatusUpdated(arg_state);
  }
  onPresentStudentScreenEnded() {
    return this.$.onPresentStudentScreenEnded();
  }
  onPresentOwnScreenEnded() {
    return this.$.onPresentOwnScreenEnded();
  }
};

mojo.internal.bindings.ash.boca.mojom.PageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ash.boca.mojom.Page', [
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

  onStudentActivityUpdated(arg_activities) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.ash.boca.mojom.Page_OnStudentActivityUpdated_ParamsSpec,
      null,
      [arg_activities],
      false);
  }

  onSessionConfigUpdated(arg_config) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.ash.boca.mojom.Page_OnSessionConfigUpdated_ParamsSpec,
      null,
      [arg_config],
      false);
  }

  onActiveNetworkStateChanged(arg_active_networks) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.ash.boca.mojom.Page_OnActiveNetworkStateChanged_ParamsSpec,
      null,
      [arg_active_networks],
      false);
  }

  onLocalCaptionDisabled() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.ash.boca.mojom.Page_OnLocalCaptionDisabled_ParamsSpec,
      null,
      [],
      false);
  }

  onSpeechRecognitionInstallStateUpdated(arg_state) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.ash.boca.mojom.Page_OnSpeechRecognitionInstallStateUpdated_ParamsSpec,
      null,
      [arg_state],
      false);
  }

  onSessionCaptionDisabled(arg_is_error) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojo.internal.bindings.ash.boca.mojom.Page_OnSessionCaptionDisabled_ParamsSpec,
      null,
      [arg_is_error],
      false);
  }

  onFrameDataReceived(arg_frame_data) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      mojo.internal.bindings.ash.boca.mojom.Page_OnFrameDataReceived_ParamsSpec,
      null,
      [arg_frame_data],
      false);
  }

  onSpotlightCrdSessionStatusUpdated(arg_state) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      mojo.internal.bindings.ash.boca.mojom.Page_OnSpotlightCrdSessionStatusUpdated_ParamsSpec,
      null,
      [arg_state],
      false);
  }

  onPresentStudentScreenEnded() {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      mojo.internal.bindings.ash.boca.mojom.Page_OnPresentStudentScreenEnded_ParamsSpec,
      null,
      [],
      false);
  }

  onPresentOwnScreenEnded() {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      mojo.internal.bindings.ash.boca.mojom.Page_OnPresentOwnScreenEnded_ParamsSpec,
      null,
      [],
      false);
  }

};

mojo.internal.bindings.ash.boca.mojom.Page.getRemote = function() {
  let remote = new mojo.internal.bindings.ash.boca.mojom.PageRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.boca.mojom.Page',
    'context');
  return remote.$;
};

mojo.internal.bindings.ash.boca.mojom.PageReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ash.boca.mojom.Page', [
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.boca.mojom.Page_OnStudentActivityUpdated_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onStudentActivityUpdated');
          const result = this.impl.onStudentActivityUpdated(params.arg_activities);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.boca.mojom.Page_OnSessionConfigUpdated_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onSessionConfigUpdated');
          const result = this.impl.onSessionConfigUpdated(params.arg_config);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.boca.mojom.Page_OnActiveNetworkStateChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onActiveNetworkStateChanged');
          const result = this.impl.onActiveNetworkStateChanged(params.arg_active_networks);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.boca.mojom.Page_OnLocalCaptionDisabled_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onLocalCaptionDisabled');
          const result = this.impl.onLocalCaptionDisabled();
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.boca.mojom.Page_OnSpeechRecognitionInstallStateUpdated_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onSpeechRecognitionInstallStateUpdated');
          const result = this.impl.onSpeechRecognitionInstallStateUpdated(params.arg_state);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.boca.mojom.Page_OnSessionCaptionDisabled_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onSessionCaptionDisabled');
          const result = this.impl.onSessionCaptionDisabled(params.arg_is_error);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.boca.mojom.Page_OnFrameDataReceived_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onFrameDataReceived');
          const result = this.impl.onFrameDataReceived(params.arg_frame_data);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.boca.mojom.Page_OnSpotlightCrdSessionStatusUpdated_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onSpotlightCrdSessionStatusUpdated');
          const result = this.impl.onSpotlightCrdSessionStatusUpdated(params.arg_state);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.boca.mojom.Page_OnPresentStudentScreenEnded_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onPresentStudentScreenEnded');
          const result = this.impl.onPresentStudentScreenEnded();
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.boca.mojom.Page_OnPresentOwnScreenEnded_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onPresentOwnScreenEnded');
          const result = this.impl.onPresentOwnScreenEnded();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.ash.boca.mojom.PageReceiver = mojo.internal.bindings.ash.boca.mojom.PageReceiver;

mojo.internal.bindings.ash.boca.mojom.PagePtr = mojo.internal.bindings.ash.boca.mojom.PageRemote;
mojo.internal.bindings.ash.boca.mojom.PageRequest = mojo.internal.bindings.ash.boca.mojom.PagePendingReceiver;


// Interface: BocaPageHandlerFactory
mojo.internal.bindings.ash.boca.mojom.BocaPageHandlerFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
    if (handle) {
      this.__mojoHandle = handle.router_ ? handle.router_.pipe_ : (handle.pipe_ || handle);
    }
  }
};

mojo.internal.bindings.ash.boca.mojom.BocaPageHandlerFactoryRemote = class {
  static get $interfaceName() {
    return 'ash.boca.mojom.BocaPageHandlerFactory';
  }

  constructor(handle = undefined) {
    this.__mojoHandle = handle;
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.ash.boca.mojom.BocaPageHandlerFactoryPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.ash.boca.mojom.BocaPageHandlerFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  create(arg_handler, arg_page) {
    return this.$.create(arg_handler, arg_page);
  }
};

mojo.internal.bindings.ash.boca.mojom.BocaPageHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ash.boca.mojom.BocaPageHandlerFactory', [
      { explicit: null },
    ]);
  }

  create(arg_handler, arg_page) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.ash.boca.mojom.BocaPageHandlerFactory_Create_ParamsSpec,
      null,
      [arg_handler, arg_page],
      false);
  }

};

mojo.internal.bindings.ash.boca.mojom.BocaPageHandlerFactory.getRemote = function() {
  let remote = new mojo.internal.bindings.ash.boca.mojom.BocaPageHandlerFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.boca.mojom.BocaPageHandlerFactory',
    'context');
  return remote.$;
};

mojo.internal.bindings.ash.boca.mojom.BocaPageHandlerFactoryReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ash.boca.mojom.BocaPageHandlerFactory', [
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.boca.mojom.BocaPageHandlerFactory_Create_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.create');
          const result = this.impl.create(params.arg_handler, params.arg_page);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.ash.boca.mojom.BocaPageHandlerFactoryReceiver = mojo.internal.bindings.ash.boca.mojom.BocaPageHandlerFactoryReceiver;

mojo.internal.bindings.ash.boca.mojom.BocaPageHandlerFactoryPtr = mojo.internal.bindings.ash.boca.mojom.BocaPageHandlerFactoryRemote;
mojo.internal.bindings.ash.boca.mojom.BocaPageHandlerFactoryRequest = mojo.internal.bindings.ash.boca.mojom.BocaPageHandlerFactoryPendingReceiver;


// Specs (at the end to ensure classes are defined for InterfaceProxy)

// Union: SessionResult
mojo.internal.Union(
    mojo.internal.bindings.ash.boca.mojom.SessionResultSpec, 'ash.boca.mojom.SessionResult', {
      'arg_error': {
        'ordinal': 0,
        'type': mojo.internal.bindings.ash.boca.mojom.GetSessionErrorSpec,
        'nullable': false,
      },
      'arg_session': {
        'ordinal': 1,
        'type': mojo.internal.bindings.ash.boca.mojom.SessionSpec,
        'nullable': false,
      },
    });

// Union: ConfigResult
mojo.internal.Union(
    mojo.internal.bindings.ash.boca.mojom.ConfigResultSpec, 'ash.boca.mojom.ConfigResult', {
      'arg_error': {
        'ordinal': 0,
        'type': mojo.internal.bindings.ash.boca.mojom.GetSessionErrorSpec,
        'nullable': false,
      },
      'arg_config': {
        'ordinal': 1,
        'type': mojo.internal.bindings.ash.boca.mojom.ConfigSpec,
        'nullable': false,
      },
    });

// Struct: TabInfo
mojo.internal.Struct(
    mojo.internal.bindings.ash.boca.mojom.TabInfoSpec, 'ash.boca.mojom.TabInfo', [
      mojo.internal.StructField('arg_id_$flag', 0, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'arg_id_$value', originalFieldName: 'arg_id' }),
      mojo.internal.StructField('arg_id_$value', 4, 0, mojo.internal.Int32, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'arg_id_$flag', originalFieldName: 'arg_id' }),
      mojo.internal.StructField('arg_title', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_url', 16, 0, mojo.internal.bindings.url.mojom.UrlSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_favicon', 24, 0, mojo.internal.bindings.url.mojom.UrlSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_url_type', 32, 0, mojo.internal.bindings.ash.boca.mojom.UrlTypeSpec, null, true, 0, undefined),
    ],
    [[0, 48]]);

// Struct: Identity
mojo.internal.Struct(
    mojo.internal.bindings.ash.boca.mojom.IdentitySpec, 'ash.boca.mojom.Identity', [
      mojo.internal.StructField('arg_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_name', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_email', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_photo_url', 24, 0, mojo.internal.bindings.url.mojom.UrlSpec, null, true, 0, undefined),
    ],
    [[0, 40]]);

// Struct: Course
mojo.internal.Struct(
    mojo.internal.bindings.ash.boca.mojom.CourseSpec, 'ash.boca.mojom.Course', [
      mojo.internal.StructField('arg_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_name', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_section', 16, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: Material
mojo.internal.Struct(
    mojo.internal.bindings.ash.boca.mojom.MaterialSpec, 'ash.boca.mojom.Material', [
      mojo.internal.StructField('arg_title', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_type', 8, 0, mojo.internal.bindings.ash.boca.mojom.MaterialTypeSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: Assignment
mojo.internal.Struct(
    mojo.internal.bindings.ash.boca.mojom.AssignmentSpec, 'ash.boca.mojom.Assignment', [
      mojo.internal.StructField('arg_title', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_url', 8, 0, mojo.internal.bindings.url.mojom.UrlSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_last_update_time', 16, 0, mojo.internal.bindings.mojo_base.mojom.JSTimeSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_materials', 24, 0, mojo.internal.Array(mojo.internal.bindings.ash.boca.mojom.MaterialSpec, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_type', 32, 0, mojo.internal.bindings.ash.boca.mojom.AssignmentTypeSpec, null, false, 0, undefined),
    ],
    [[0, 48]]);

// Struct: Window
mojo.internal.Struct(
    mojo.internal.bindings.ash.boca.mojom.WindowSpec, 'ash.boca.mojom.Window', [
      mojo.internal.StructField('arg_name', 0, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_tab_list', 8, 0, mojo.internal.Array(mojo.internal.bindings.ash.boca.mojom.TabInfoSpec, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: NetworkInfo
mojo.internal.Struct(
    mojo.internal.bindings.ash.boca.mojom.NetworkInfoSpec, 'ash.boca.mojom.NetworkInfo', [
      mojo.internal.StructField('arg_state', 0, 0, mojo.internal.bindings.chromeos.network_config.mojom.ConnectionStateTypeSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_type', 4, 0, mojo.internal.bindings.ash.boca.mojom.NetworkTypeSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_name', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_signal_strength', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: Config
mojo.internal.Struct(
    mojo.internal.bindings.ash.boca.mojom.ConfigSpec, 'ash.boca.mojom.Config', [
      mojo.internal.StructField('arg_session_duration', 0, 0, mojo.internal.bindings.mojo_base.mojom.TimeDeltaSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_session_start_time', 8, 0, mojo.internal.bindings.mojo_base.mojom.JSTimeSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_teacher', 16, 0, mojo.internal.bindings.ash.boca.mojom.IdentitySpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_students', 24, 0, mojo.internal.Array(mojo.internal.bindings.ash.boca.mojom.IdentitySpec, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_students_join_via_code', 32, 0, mojo.internal.Array(mojo.internal.bindings.ash.boca.mojom.IdentitySpec, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_on_task_config', 40, 0, mojo.internal.bindings.ash.boca.mojom.OnTaskConfigSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_caption_config', 48, 0, mojo.internal.bindings.ash.boca.mojom.CaptionConfigSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_access_code', 56, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 72]]);

// Struct: CaptionConfig
mojo.internal.Struct(
    mojo.internal.bindings.ash.boca.mojom.CaptionConfigSpec, 'ash.boca.mojom.CaptionConfig', [
      mojo.internal.StructField('arg_session_caption_enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_local_caption_enabled', 0, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_session_translation_enabled', 0, 2, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: ControlledTab
mojo.internal.Struct(
    mojo.internal.bindings.ash.boca.mojom.ControlledTabSpec, 'ash.boca.mojom.ControlledTab', [
      mojo.internal.StructField('arg_tab', 0, 0, mojo.internal.bindings.ash.boca.mojom.TabInfoSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_navigation_type', 8, 0, mojo.internal.bindings.ash.boca.mojom.NavigationTypeSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: OnTaskConfig
mojo.internal.Struct(
    mojo.internal.bindings.ash.boca.mojom.OnTaskConfigSpec, 'ash.boca.mojom.OnTaskConfig', [
      mojo.internal.StructField('arg_is_locked', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_is_paused', 0, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_tabs', 8, 0, mojo.internal.Array(mojo.internal.bindings.ash.boca.mojom.ControlledTabSpec, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: Session
mojo.internal.Struct(
    mojo.internal.bindings.ash.boca.mojom.SessionSpec, 'ash.boca.mojom.Session', [
      mojo.internal.StructField('arg_config', 0, 0, mojo.internal.bindings.ash.boca.mojom.ConfigSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_activities', 8, 0, mojo.internal.Array(mojo.internal.bindings.ash.boca.mojom.IdentifiedActivitySpec, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: StudentActivity
mojo.internal.Struct(
    mojo.internal.bindings.ash.boca.mojom.StudentActivitySpec, 'ash.boca.mojom.StudentActivity', [
      mojo.internal.StructField('arg_student_status_detail', 0, 0, mojo.internal.bindings.ash.boca.mojom.StudentStatusDetailSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_is_active', 4, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_is_caption_enabled', 4, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_is_hand_raised', 4, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_active_tab', 8, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_join_method', 16, 0, mojo.internal.bindings.ash.boca.mojom.JoinMethodSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_gemini_state', 20, 0, mojo.internal.bindings.ash.boca.mojom.GeminiEnablementStateSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_view_screen_session_code', 24, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 40]]);

// Struct: IdentifiedActivity
mojo.internal.Struct(
    mojo.internal.bindings.ash.boca.mojom.IdentifiedActivitySpec, 'ash.boca.mojom.IdentifiedActivity', [
      mojo.internal.StructField('arg_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_activity', 8, 0, mojo.internal.bindings.ash.boca.mojom.StudentActivitySpec, null, false, 0, undefined),
    ],
    [[0, 24]]);
mojo.internal.Struct(
    mojo.internal.bindings.ash.boca.mojom.PageHandler_GetWindowsTabsList_ParamsSpec, 'ash.boca.mojom.PageHandler_GetWindowsTabsList_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.boca.mojom.PageHandler_GetWindowsTabsList_ResponseParamsSpec, 'ash.boca.mojom.PageHandler_GetWindowsTabsList_ResponseParams', [
      mojo.internal.StructField('arg_window_list', 0, 0, mojo.internal.Array(mojo.internal.bindings.ash.boca.mojom.WindowSpec, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.boca.mojom.PageHandler_ListCourses_ParamsSpec, 'ash.boca.mojom.PageHandler_ListCourses_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.boca.mojom.PageHandler_ListCourses_ResponseParamsSpec, 'ash.boca.mojom.PageHandler_ListCourses_ResponseParams', [
      mojo.internal.StructField('arg_courses', 0, 0, mojo.internal.Array(mojo.internal.bindings.ash.boca.mojom.CourseSpec, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.boca.mojom.PageHandler_ListStudents_ParamsSpec, 'ash.boca.mojom.PageHandler_ListStudents_Params', [
      mojo.internal.StructField('arg_course_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.boca.mojom.PageHandler_ListStudents_ResponseParamsSpec, 'ash.boca.mojom.PageHandler_ListStudents_ResponseParams', [
      mojo.internal.StructField('arg_students', 0, 0, mojo.internal.Array(mojo.internal.bindings.ash.boca.mojom.IdentitySpec, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.boca.mojom.PageHandler_ListAssignments_ParamsSpec, 'ash.boca.mojom.PageHandler_ListAssignments_Params', [
      mojo.internal.StructField('arg_course_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.boca.mojom.PageHandler_ListAssignments_ResponseParamsSpec, 'ash.boca.mojom.PageHandler_ListAssignments_ResponseParams', [
      mojo.internal.StructField('arg_assignments', 0, 0, mojo.internal.Array(mojo.internal.bindings.ash.boca.mojom.AssignmentSpec, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.boca.mojom.PageHandler_CreateSession_ParamsSpec, 'ash.boca.mojom.PageHandler_CreateSession_Params', [
      mojo.internal.StructField('arg_config', 0, 0, mojo.internal.bindings.ash.boca.mojom.ConfigSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.boca.mojom.PageHandler_CreateSession_ResponseParamsSpec, 'ash.boca.mojom.PageHandler_CreateSession_ResponseParams', [
      mojo.internal.StructField('arg_error', 0, 0, mojo.internal.bindings.ash.boca.mojom.CreateSessionErrorSpec, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.boca.mojom.PageHandler_GetSession_ParamsSpec, 'ash.boca.mojom.PageHandler_GetSession_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.boca.mojom.PageHandler_GetSession_ResponseParamsSpec, 'ash.boca.mojom.PageHandler_GetSession_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.ash.boca.mojom.SessionResultSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.boca.mojom.PageHandler_EndSession_ParamsSpec, 'ash.boca.mojom.PageHandler_EndSession_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.boca.mojom.PageHandler_EndSession_ResponseParamsSpec, 'ash.boca.mojom.PageHandler_EndSession_ResponseParams', [
      mojo.internal.StructField('arg_error', 0, 0, mojo.internal.bindings.ash.boca.mojom.UpdateSessionErrorSpec, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.boca.mojom.PageHandler_ExtendSessionDuration_ParamsSpec, 'ash.boca.mojom.PageHandler_ExtendSessionDuration_Params', [
      mojo.internal.StructField('arg_extended_duration', 0, 0, mojo.internal.bindings.mojo_base.mojom.TimeDeltaSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.boca.mojom.PageHandler_ExtendSessionDuration_ResponseParamsSpec, 'ash.boca.mojom.PageHandler_ExtendSessionDuration_ResponseParams', [
      mojo.internal.StructField('arg_error', 0, 0, mojo.internal.bindings.ash.boca.mojom.UpdateSessionErrorSpec, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.boca.mojom.PageHandler_RemoveStudent_ParamsSpec, 'ash.boca.mojom.PageHandler_RemoveStudent_Params', [
      mojo.internal.StructField('arg_student_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.boca.mojom.PageHandler_RemoveStudent_ResponseParamsSpec, 'ash.boca.mojom.PageHandler_RemoveStudent_ResponseParams', [
      mojo.internal.StructField('arg_error', 0, 0, mojo.internal.bindings.ash.boca.mojom.RemoveStudentErrorSpec, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.boca.mojom.PageHandler_RenotifyStudent_ParamsSpec, 'ash.boca.mojom.PageHandler_RenotifyStudent_Params', [
      mojo.internal.StructField('arg_student_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.boca.mojom.PageHandler_RenotifyStudent_ResponseParamsSpec, 'ash.boca.mojom.PageHandler_RenotifyStudent_ResponseParams', [
      mojo.internal.StructField('arg_error', 0, 0, mojo.internal.bindings.ash.boca.mojom.RenotifyStudentErrorSpec, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.boca.mojom.PageHandler_AddStudents_ParamsSpec, 'ash.boca.mojom.PageHandler_AddStudents_Params', [
      mojo.internal.StructField('arg_students', 0, 0, mojo.internal.Array(mojo.internal.bindings.ash.boca.mojom.IdentitySpec, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.boca.mojom.PageHandler_AddStudents_ResponseParamsSpec, 'ash.boca.mojom.PageHandler_AddStudents_ResponseParams', [
      mojo.internal.StructField('arg_error', 0, 0, mojo.internal.bindings.ash.boca.mojom.AddStudentsErrorSpec, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.boca.mojom.PageHandler_UpdateOnTaskConfig_ParamsSpec, 'ash.boca.mojom.PageHandler_UpdateOnTaskConfig_Params', [
      mojo.internal.StructField('arg_on_task_config', 0, 0, mojo.internal.bindings.ash.boca.mojom.OnTaskConfigSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.boca.mojom.PageHandler_UpdateOnTaskConfig_ResponseParamsSpec, 'ash.boca.mojom.PageHandler_UpdateOnTaskConfig_ResponseParams', [
      mojo.internal.StructField('arg_error', 0, 0, mojo.internal.bindings.ash.boca.mojom.UpdateSessionErrorSpec, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.boca.mojom.PageHandler_UpdateCaptionConfig_ParamsSpec, 'ash.boca.mojom.PageHandler_UpdateCaptionConfig_Params', [
      mojo.internal.StructField('arg_caption_config', 0, 0, mojo.internal.bindings.ash.boca.mojom.CaptionConfigSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.boca.mojom.PageHandler_UpdateCaptionConfig_ResponseParamsSpec, 'ash.boca.mojom.PageHandler_UpdateCaptionConfig_ResponseParams', [
      mojo.internal.StructField('arg_error', 0, 0, mojo.internal.bindings.ash.boca.mojom.UpdateSessionErrorSpec, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.boca.mojom.PageHandler_SetFloatMode_ParamsSpec, 'ash.boca.mojom.PageHandler_SetFloatMode_Params', [
      mojo.internal.StructField('arg_is_float_mode', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.boca.mojom.PageHandler_SetFloatMode_ResponseParamsSpec, 'ash.boca.mojom.PageHandler_SetFloatMode_ResponseParams', [
      mojo.internal.StructField('arg_success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.boca.mojom.PageHandler_SubmitAccessCode_ParamsSpec, 'ash.boca.mojom.PageHandler_SubmitAccessCode_Params', [
      mojo.internal.StructField('arg_access_code', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.boca.mojom.PageHandler_SubmitAccessCode_ResponseParamsSpec, 'ash.boca.mojom.PageHandler_SubmitAccessCode_ResponseParams', [
      mojo.internal.StructField('arg_error', 0, 0, mojo.internal.bindings.ash.boca.mojom.SubmitAccessCodeErrorSpec, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.boca.mojom.PageHandler_ViewStudentScreen_ParamsSpec, 'ash.boca.mojom.PageHandler_ViewStudentScreen_Params', [
      mojo.internal.StructField('arg_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.boca.mojom.PageHandler_ViewStudentScreen_ResponseParamsSpec, 'ash.boca.mojom.PageHandler_ViewStudentScreen_ResponseParams', [
      mojo.internal.StructField('arg_error', 0, 0, mojo.internal.bindings.ash.boca.mojom.ViewStudentScreenErrorSpec, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.boca.mojom.PageHandler_EndViewScreenSession_ParamsSpec, 'ash.boca.mojom.PageHandler_EndViewScreenSession_Params', [
      mojo.internal.StructField('arg_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.boca.mojom.PageHandler_EndViewScreenSession_ResponseParamsSpec, 'ash.boca.mojom.PageHandler_EndViewScreenSession_ResponseParams', [
      mojo.internal.StructField('arg_error', 0, 0, mojo.internal.bindings.ash.boca.mojom.EndViewScreenSessionErrorSpec, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.boca.mojom.PageHandler_SetViewScreenSessionActive_ParamsSpec, 'ash.boca.mojom.PageHandler_SetViewScreenSessionActive_Params', [
      mojo.internal.StructField('arg_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.boca.mojom.PageHandler_SetViewScreenSessionActive_ResponseParamsSpec, 'ash.boca.mojom.PageHandler_SetViewScreenSessionActive_ResponseParams', [
      mojo.internal.StructField('arg_error', 0, 0, mojo.internal.bindings.ash.boca.mojom.SetViewScreenSessionActiveErrorSpec, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.boca.mojom.PageHandler_GetUserPref_ParamsSpec, 'ash.boca.mojom.PageHandler_GetUserPref_Params', [
      mojo.internal.StructField('arg_pref', 0, 0, mojo.internal.bindings.ash.boca.mojom.BocaValidPrefSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.boca.mojom.PageHandler_GetUserPref_ResponseParamsSpec, 'ash.boca.mojom.PageHandler_GetUserPref_ResponseParams', [
      mojo.internal.StructField('arg_value', 0, 0, mojo.internal.bindings.mojo_base.mojom.ValueSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.boca.mojom.PageHandler_SetUserPref_ParamsSpec, 'ash.boca.mojom.PageHandler_SetUserPref_Params', [
      mojo.internal.StructField('arg_pref', 0, 0, mojo.internal.bindings.ash.boca.mojom.BocaValidPrefSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_value', 8, 0, mojo.internal.bindings.mojo_base.mojom.ValueSpec, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.boca.mojom.PageHandler_SetUserPref_ResponseParamsSpec, 'ash.boca.mojom.PageHandler_SetUserPref_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.boca.mojom.PageHandler_SetSitePermission_ParamsSpec, 'ash.boca.mojom.PageHandler_SetSitePermission_Params', [
      mojo.internal.StructField('arg_url', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_permission', 8, 0, mojo.internal.bindings.ash.boca.mojom.PermissionSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_setting', 12, 0, mojo.internal.bindings.ash.boca.mojom.PermissionSettingSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.boca.mojom.PageHandler_SetSitePermission_ResponseParamsSpec, 'ash.boca.mojom.PageHandler_SetSitePermission_ResponseParams', [
      mojo.internal.StructField('arg_success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.boca.mojom.PageHandler_OpenFeedbackDialog_ParamsSpec, 'ash.boca.mojom.PageHandler_OpenFeedbackDialog_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.boca.mojom.PageHandler_OpenFeedbackDialog_ResponseParamsSpec, 'ash.boca.mojom.PageHandler_OpenFeedbackDialog_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.boca.mojom.PageHandler_RefreshWorkbook_ParamsSpec, 'ash.boca.mojom.PageHandler_RefreshWorkbook_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.boca.mojom.PageHandler_RefreshWorkbook_ResponseParamsSpec, 'ash.boca.mojom.PageHandler_RefreshWorkbook_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.boca.mojom.PageHandler_GetSpeechRecognitionInstallationStatus_ParamsSpec, 'ash.boca.mojom.PageHandler_GetSpeechRecognitionInstallationStatus_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.boca.mojom.PageHandler_GetSpeechRecognitionInstallationStatus_ResponseParamsSpec, 'ash.boca.mojom.PageHandler_GetSpeechRecognitionInstallationStatus_ResponseParams', [
      mojo.internal.StructField('arg_state', 0, 0, mojo.internal.bindings.ash.boca.mojom.SpeechRecognitionInstallStateSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.boca.mojom.PageHandler_StartSpotlight_ParamsSpec, 'ash.boca.mojom.PageHandler_StartSpotlight_Params', [
      mojo.internal.StructField('arg_crd_connection_code', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.boca.mojom.PageHandler_StartSpotlight_ResponseParamsSpec, 'ash.boca.mojom.PageHandler_StartSpotlight_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.boca.mojom.PageHandler_PresentStudentScreen_ParamsSpec, 'ash.boca.mojom.PageHandler_PresentStudentScreen_Params', [
      mojo.internal.StructField('arg_student', 0, 0, mojo.internal.bindings.ash.boca.mojom.IdentitySpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_receiver_id', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.boca.mojom.PageHandler_PresentStudentScreen_ResponseParamsSpec, 'ash.boca.mojom.PageHandler_PresentStudentScreen_ResponseParams', [
      mojo.internal.StructField('arg_success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.boca.mojom.PageHandler_StopPresentingStudentScreen_ParamsSpec, 'ash.boca.mojom.PageHandler_StopPresentingStudentScreen_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.boca.mojom.PageHandler_StopPresentingStudentScreen_ResponseParamsSpec, 'ash.boca.mojom.PageHandler_StopPresentingStudentScreen_ResponseParams', [
      mojo.internal.StructField('arg_success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.boca.mojom.PageHandler_PresentOwnScreen_ParamsSpec, 'ash.boca.mojom.PageHandler_PresentOwnScreen_Params', [
      mojo.internal.StructField('arg_receiver_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.boca.mojom.PageHandler_PresentOwnScreen_ResponseParamsSpec, 'ash.boca.mojom.PageHandler_PresentOwnScreen_ResponseParams', [
      mojo.internal.StructField('arg_success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.boca.mojom.PageHandler_StopPresentingOwnScreen_ParamsSpec, 'ash.boca.mojom.PageHandler_StopPresentingOwnScreen_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.boca.mojom.PageHandler_StopPresentingOwnScreen_ResponseParamsSpec, 'ash.boca.mojom.PageHandler_StopPresentingOwnScreen_ResponseParams', [
      mojo.internal.StructField('arg_success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.boca.mojom.PageHandler_GetGeminiStatus_ParamsSpec, 'ash.boca.mojom.PageHandler_GetGeminiStatus_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.boca.mojom.PageHandler_GetGeminiStatus_ResponseParamsSpec, 'ash.boca.mojom.PageHandler_GetGeminiStatus_ResponseParams', [
      mojo.internal.StructField('arg_enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.boca.mojom.Page_OnStudentActivityUpdated_ParamsSpec, 'ash.boca.mojom.Page_OnStudentActivityUpdated_Params', [
      mojo.internal.StructField('arg_activities', 0, 0, mojo.internal.Array(mojo.internal.bindings.ash.boca.mojom.IdentifiedActivitySpec, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.boca.mojom.Page_OnSessionConfigUpdated_ParamsSpec, 'ash.boca.mojom.Page_OnSessionConfigUpdated_Params', [
      mojo.internal.StructField('arg_config', 0, 0, mojo.internal.bindings.ash.boca.mojom.ConfigResultSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.boca.mojom.Page_OnActiveNetworkStateChanged_ParamsSpec, 'ash.boca.mojom.Page_OnActiveNetworkStateChanged_Params', [
      mojo.internal.StructField('arg_active_networks', 0, 0, mojo.internal.Array(mojo.internal.bindings.ash.boca.mojom.NetworkInfoSpec, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.boca.mojom.Page_OnLocalCaptionDisabled_ParamsSpec, 'ash.boca.mojom.Page_OnLocalCaptionDisabled_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.boca.mojom.Page_OnSpeechRecognitionInstallStateUpdated_ParamsSpec, 'ash.boca.mojom.Page_OnSpeechRecognitionInstallStateUpdated_Params', [
      mojo.internal.StructField('arg_state', 0, 0, mojo.internal.bindings.ash.boca.mojom.SpeechRecognitionInstallStateSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.boca.mojom.Page_OnSessionCaptionDisabled_ParamsSpec, 'ash.boca.mojom.Page_OnSessionCaptionDisabled_Params', [
      mojo.internal.StructField('arg_is_error', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.boca.mojom.Page_OnFrameDataReceived_ParamsSpec, 'ash.boca.mojom.Page_OnFrameDataReceived_Params', [
      mojo.internal.StructField('arg_frame_data', 0, 0, mojo.internal.bindings.skia.mojom.BitmapN32Spec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.boca.mojom.Page_OnSpotlightCrdSessionStatusUpdated_ParamsSpec, 'ash.boca.mojom.Page_OnSpotlightCrdSessionStatusUpdated_Params', [
      mojo.internal.StructField('arg_state', 0, 0, mojo.internal.bindings.ash.boca.mojom.CrdConnectionStateSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.boca.mojom.Page_OnPresentStudentScreenEnded_ParamsSpec, 'ash.boca.mojom.Page_OnPresentStudentScreenEnded_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.boca.mojom.Page_OnPresentOwnScreenEnded_ParamsSpec, 'ash.boca.mojom.Page_OnPresentOwnScreenEnded_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.boca.mojom.BocaPageHandlerFactory_Create_ParamsSpec, 'ash.boca.mojom.BocaPageHandlerFactory_Create_Params', [
      mojo.internal.StructField('arg_handler', 0, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.ash.boca.mojom.PageHandlerPendingReceiver), null, false, 0, undefined),
      mojo.internal.StructField('arg_page', 4, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.ash.boca.mojom.PageRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

