// Auto-generated MojoJS binding
 // Source: chromium_src/components/omnibox/browser/searchbox.mojom
 // Module: searchbox.mojom

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
      _interfaceScrambleMap: {"android_webview.mojom.LocalMainFrame": true, "android_webview.mojom.FrameHost": true, "android_webview.mojom.RenderMessageFilter": true, "android_webview.mojom.Renderer": true, "ash.mojom.HidPreservingBluetoothStateController": true, "ash.annotator.mojom.UntrustedAnnotatorPage": true, "ash.annotator.mojom.UntrustedAnnotatorPageHandler": true, "ash.annotator.mojom.UntrustedAnnotatorPageHandlerFactory": true, "ash.boca_receiver.mojom.UntrustedPage": true, "ash.boca_receiver.mojom.UntrustedPageHandlerFactory": true, "ash.boca.mojom.PageHandler": true, "ash.boca.mojom.Page": true, "ash.boca.mojom.BocaPageHandlerFactory": true, "ash.camera_app.mojom.TabletModeMonitor": true, "ash.camera_app.mojom.ScreenStateMonitor": true, "ash.camera_app.mojom.ScreenLockedMonitor": true, "ash.camera_app.mojom.ExternalScreenMonitor": true, "ash.camera_app.mojom.CameraUsageOwnershipMonitor": true, "ash.camera_app.mojom.LidStateMonitor": true, "ash.camera_app.mojom.SWPrivacySwitchMonitor": true, "ash.camera_app.mojom.WindowStateMonitor": true, "ash.camera_app.mojom.StorageMonitor": true, "ash.camera_app.mojom.WindowStateController": true, "ash.camera_app.mojom.CameraAppHelper": true, "ash.camera_app.mojom.EventsSender": true, "ash.camera_app.mojom.PdfBuilder": true, "ash.color_internals.mojom.WallpaperColorsObserver": true, "ash.color_internals.mojom.WallpaperColorsHandler": true, "ash.common.mojom.AcceleratorFetcherObserver": true, "ash.common.mojom.AcceleratorFetcher": true, "ash.common.mojom.ForceHiddenElementsVisibleObserver": true, "ash.common.mojom.AccessibilityFeatures": true, "ash.personalization_app.mojom.SeaPenObserver": true, "ash.personalization_app.mojom.SeaPenProvider": true, "ash.common.mojom.ShortcutInputObserver": true, "ash.common.mojom.ShortcutInputProvider": true, "ash.common.mojom.WebUiSyslogEmitter": true, "ash.mojom.demo_mode.UntrustedPageHandlerFactory": true, "ash.mojom.demo_mode.UntrustedPageHandler": true, "ash.diagnostics.mojom.KeyboardObserver": true, "ash.diagnostics.mojom.InternalDisplayPowerStateObserver": true, "ash.diagnostics.mojom.TabletModeObserver": true, "ash.diagnostics.mojom.LidStateObserver": true, "ash.diagnostics.mojom.ConnectedDevicesObserver": true, "ash.diagnostics.mojom.InputDataProvider": true, "ash.diagnostics.mojom.NetworkListObserver": true, "ash.diagnostics.mojom.NetworkStateObserver": true, "ash.diagnostics.mojom.NetworkHealthProvider": true, "ash.diagnostics.mojom.BatteryChargeStatusObserver": true, "ash.diagnostics.mojom.BatteryHealthObserver": true, "ash.diagnostics.mojom.MemoryUsageObserver": true, "ash.diagnostics.mojom.CpuUsageObserver": true, "ash.diagnostics.mojom.SystemDataProvider": true, "ash.diagnostics.mojom.RoutineRunner": true, "ash.diagnostics.mojom.SystemRoutineController": true, "ash.eche_app.mojom.SignalingMessageExchanger": true, "ash.eche_app.mojom.SignalingMessageObserver": true, "ash.eche_app.mojom.SystemInfoProvider": true, "ash.eche_app.mojom.SystemInfoObserver": true, "ash.eche_app.mojom.AccessibilityProvider": true, "ash.eche_app.mojom.AccessibilityObserver": true, "ash.eche_app.mojom.UidGenerator": true, "ash.eche_app.mojom.NotificationGenerator": true, "ash.eche_app.mojom.DisplayStreamHandler": true, "ash.eche_app.mojom.StreamActionObserver": true, "ash.eche_app.mojom.StreamOrientationObserver": true, "ash.eche_app.mojom.ConnectionStatusObserver": true, "ash.eche_app.mojom.KeyboardLayoutHandler": true, "ash.eche_app.mojom.KeyboardLayoutObserver": true, "ash.file_manager.mojom.PageHandlerFactory": true, "ash.file_manager.mojom.PageHandler": true, "ash.file_manager.mojom.Page": true, "ash.mojom.files_internals.PageHandler": true, "ash.firmware_update.mojom.UpdateObserver": true, "ash.firmware_update.mojom.DeviceRequestObserver": true, "ash.firmware_update.mojom.UpdateProgressObserver": true, "ash.firmware_update.mojom.UpdateProvider": true, "ash.firmware_update.mojom.InstallController": true, "ash.firmware_update.mojom.SystemUtils": true, "ash.focus_mode.mojom.MediaClient": true, "ash.focus_mode.mojom.TrackProvider": true, "ash.graduation_ui.mojom.GraduationUiHandler": true, "ash.growth.mojom.PageHandler": true, "ash.help_app.mojom.PageHandlerFactory": true, "ash.help_app.mojom.PageHandler": true, "ash.help_app.mojom.SearchResultsObserver": true, "ash.help_app.mojom.SearchHandler": true, "ash.mall.mojom.PageHandler": true, "ash.media_app_ui.mojom.PageHandlerFactory": true, "ash.media_app_ui.mojom.PageHandler": true, "ash.media_app_ui.mojom.UntrustedServiceFactory": true, "ash.media_app_ui.mojom.OcrUntrustedService": true, "ash.media_app_ui.mojom.OcrUntrustedPage": true, "ash.media_app_ui.mojom.MahiUntrustedService": true, "ash.media_app_ui.mojom.MahiUntrustedPage": true, "ash.media_app_ui.mojom.MantisUntrustedService": true, "ash.media_app_ui.mojom.MantisUntrustedPage": true, "ash.os_feedback_ui.mojom.HelpContentProvider": true, "ash.os_feedback_ui.mojom.FeedbackServiceProvider": true, "ash.personalization_app.mojom.WallpaperObserver": true, "ash.personalization_app.mojom.WallpaperProvider": true, "ash.personalization_app.mojom.ThemeObserver": true, "ash.personalization_app.mojom.ThemeProvider": true, "ash.personalization_app.mojom.UserImageObserver": true, "ash.personalization_app.mojom.UserProvider": true, "ash.personalization_app.mojom.AmbientObserver": true, "ash.personalization_app.mojom.AmbientProvider": true, "ash.personalization_app.mojom.KeyboardBacklightObserver": true, "ash.personalization_app.mojom.KeyboardBacklightProvider": true, "ash.personalization_app.mojom.SearchResultsObserver": true, "ash.personalization_app.mojom.SearchHandler": true, "ash.printing.print_preview.mojom.DestinationProvider": true, "ash.projector.mojom.UntrustedProjectorPageHandler": true, "ash.projector.mojom.UntrustedProjectorPage": true, "ash.projector.mojom.UntrustedProjectorPageHandlerFactory": true, "ash.recorder_app.mojom.ModelStateMonitor": true, "ash.recorder_app.mojom.QuietModeMonitor": true, "ash.recorder_app.mojom.PageHandler": true, "ash.mojom.sample_swa.ChildUntrustedPage": true, "ash.mojom.sample_swa.ParentTrustedPage": true, "ash.mojom.sample_swa.PageHandlerFactory": true, "ash.mojom.sample_swa.PageHandler": true, "ash.mojom.sample_swa.Page": true, "ash.mojom.sample_swa.UntrustedPageInterfacesFactory": true, "ash.sanitize_ui.mojom.SettingsResetter": true, "ash.mojom.scanner_feedback_ui.PageHandler": true, "ash.scanning.mojom.ScanJobObserver": true, "ash.scanning.mojom.ScanService": true, "ash.scanning.mojom.MultiPageScanController": true, "ash.shimless_rma.mojom.ErrorObserver": true, "ash.shimless_rma.mojom.OsUpdateObserver": true, "ash.shimless_rma.mojom.CalibrationObserver": true, "ash.shimless_rma.mojom.ProvisioningObserver": true, "ash.shimless_rma.mojom.HardwareWriteProtectionStateObserver": true, "ash.shimless_rma.mojom.PowerCableStateObserver": true, "ash.shimless_rma.mojom.ExternalDiskStateObserver": true, "ash.shimless_rma.mojom.HardwareVerificationStatusObserver": true, "ash.shimless_rma.mojom.FinalizationObserver": true, "ash.shimless_rma.mojom.UpdateRoFirmwareObserver": true, "ash.shimless_rma.mojom.ShimlessRmaService": true, "ash.shortcut_customization.mojom.SearchResultsAvailabilityObserver": true, "ash.shortcut_customization.mojom.SearchHandler": true, "ash.shortcut_customization.mojom.AcceleratorsUpdatedObserver": true, "ash.shortcut_customization.mojom.PolicyUpdatedObserver": true, "ash.shortcut_customization.mojom.AcceleratorConfigurationProvider": true, "ash.mojom.status_area_internals.PageHandler": true, "cc.mojom.RenderFrameMetadataObserver": true, "cc.mojom.RenderFrameMetadataObserverClient": true, "actor.ui.mojom.ActorOverlayPageHandlerFactory": true, "actor.ui.mojom.ActorOverlayPageHandler": true, "actor.ui.mojom.ActorOverlayPage": true, "contextual_tasks.mojom.PageHandler": true, "contextual_tasks.mojom.Page": true, "contextual_tasks.mojom.PageHandlerFactory": true, "contextual_tasks_internals.mojom.ContextualTasksInternalsPageHandlerFactory": true, "contextual_tasks_internals.mojom.ContextualTasksInternalsPageHandler": true, "contextual_tasks_internals.mojom.ContextualTasksInternalsPage": true, "glic.mojom.ExperimentalOptInPageHandler": true, "glic.mojom.PreloadPage": true, "glic.mojom.Page": true, "glic.mojom.GlicPreloadHandler": true, "glic.mojom.GlicPreloadHandlerFactory": true, "glic.mojom.PageHandlerFactory": true, "glic.mojom.PageHandler": true, "glic.mojom.PinCandidatesObserver": true, "glic.mojom.ActorClient": true, "glic.mojom.ActorHandler": true, "glic.mojom.AnnotationHandler": true, "glic.mojom.SkillsHandler": true, "glic.mojom.SkillsClient": true, "glic.mojom.WebClientHandler": true, "glic.mojom.TabDataHandler": true, "glic.mojom.TabFaviconHandler": true, "glic.mojom.ExperimentalTriggeringUpdatesHandler": true, "glic.mojom.WebClient": true, "glic.mojom.CaptureRegionObserver": true, "glic.mojom.InternalsPageHandler": true, "glic.mojom.InternalsPageHandlerFactory": true, "glic.selection.SelectionOverlayPageHandlerFactory": true, "glic.selection.SelectionOverlayPageHandler": true, "glic.selection.SelectionOverlayPage": true, "lens.mojom.LensPageHandlerFactory": true, "lens.mojom.LensPageHandler": true, "lens.mojom.LensPage": true, "lens.mojom.LensGhostLoaderPageHandlerFactory": true, "lens.mojom.LensGhostLoaderPage": true, "lens.mojom.LensSidePanelPageHandlerFactory": true, "lens.mojom.LensSidePanelPageHandler": true, "lens.mojom.LensSidePanelPage": true, "media.mojom.MediaEngagementScoreDetailsProvider": true, "file_suggestion.mojom.DriveSuggestionHandler": true, "file_suggestion.mojom.MicrosoftFilesPageHandler": true, "ntp.authentication.mojom.MicrosoftAuthPageHandler": true, "ntp.calendar.mojom.GoogleCalendarPageHandler": true, "ntp.calendar.mojom.OutlookCalendarPageHandler": true, "ntp.most_relevant_tab_resumption.mojom.PageHandler": true, "ntp.tab_groups.mojom.PageHandler": true, "certificate_manager.mojom.CertificateManagerPageHandlerFactory": true, "certificate_manager.mojom.CertificateManagerPageHandler": true, "certificate_manager.mojom.CertificateManagerPage": true, "drive_picker_host.mojom.DrivePickerResultHandler": true, "access_code_cast.mojom.PageHandlerFactory": true, "access_code_cast.mojom.PageHandler": true, "access_code_cast.mojom.Page": true, "ai_overlay_dialog.mojom.PageHandlerFactory": true, "ai_overlay_dialog.mojom.PageHandler": true, "ai_overlay_dialog.mojom.Page": true, "ai_overlay_dialog.mojom.AiOverlayTools": true, "app_home.mojom.PageHandlerFactory": true, "app_home.mojom.PageHandler": true, "app_home.mojom.Page": true, "mojom.app_service_internals.AppServiceInternalsPageHandler": true, "add_supervision.mojom.AddSupervisionHandler": true, "ash.app_install.mojom.AppInfoActions": true, "ash.app_install.mojom.ConnectionErrorActions": true, "ash.app_install.mojom.PageHandlerFactory": true, "ash.app_install.mojom.PageHandler": true, "ash.cloud_upload.mojom.PageHandlerFactory": true, "ash.cloud_upload.mojom.PageHandler": true, "ash.crostini_installer.mojom.PageHandlerFactory": true, "ash.crostini_installer.mojom.PageHandler": true, "ash.crostini_installer.mojom.Page": true, "dlp_internals.mojom.ReportingObserver": true, "dlp_internals.mojom.PageHandler": true, "emoji_picker.mojom.PageHandlerFactory": true, "emoji_picker.mojom.PageHandler": true, "new_window_proxy.mojom.NewWindowProxy": true, "enterprise_reporting.mojom.PageHandlerFactory": true, "enterprise_reporting.mojom.PageHandler": true, "enterprise_reporting.mojom.Page": true, "ash.extended_updates.mojom.PageHandlerFactory": true, "ash.extended_updates.mojom.PageHandler": true, "ash.extended_updates.mojom.Page": true, "launcher_internals.mojom.PageHandlerFactory": true, "launcher_internals.mojom.Page": true, "lobster.mojom.UntrustedLobsterPageHandler": true, "ash.screens_common.mojom.AiIntroPageHandler": true, "ash.screens_common.mojom.AiIntroPage": true, "ash.screens_common.mojom.AppDownloadingPageHandler": true, "ash.screens_common.mojom.DrivePinningPageHandler": true, "ash.screens_common.mojom.DrivePinningPage": true, "ash.screens_common.mojom.FjordStationSetupPageHandler": true, "ash.screens_common.mojom.FjordTouchControllerPageHandler": true, "ash.screens_common.mojom.FjordImageSelectionPageHandler": true, "ash.screens_common.mojom.GaiaInfoPageHandler": true, "ash.screens_common.mojom.GaiaInfoPage": true, "ash.screens_common.mojom.GestureNavigationPageHandler": true, "ash.screens_common.mojom.GeminiIntroPageHandler": true, "ash.screens_factory.mojom.ScreensFactory": true, "ash.screens_login.mojom.ArcVmDataMigrationPageHandler": true, "ash.screens_login.mojom.ArcVmDataMigrationPage": true, "ash.screens_login.mojom.EncryptionMigrationPageHandler": true, "ash.screens_login.mojom.EncryptionMigrationPage": true, "ash.screens_oobe.mojom.ConsumerUpdatePageHandler": true, "ash.screens_oobe.mojom.ConsumerUpdatePage": true, "ash.screens_oobe.mojom.PackagedLicensePageHandler": true, "ash.screens_osauth.mojom.LocalDataLossWarningPageHandler": true, "ash.manage_mirrorsync.mojom.PageHandlerFactory": true, "ash.manage_mirrorsync.mojom.PageHandler": true, "ash.office_fallback.mojom.PageHandlerFactory": true, "ash.office_fallback.mojom.PageHandler": true, "parent_access_ui.mojom.ParentAccessUiHandler": true, "sensor.mojom.PageHandlerFactory": true, "sensor.mojom.PageHandler": true, "ash.settings.app_notification.mojom.AppNotificationsHandler": true, "ash.settings.app_notification.mojom.AppNotificationsObserver": true, "ash.settings.app_parental_controls.mojom.AppParentalControlsHandler": true, "ash.settings.app_parental_controls.mojom.AppParentalControlsObserver": true, "ash.settings.date_time.mojom.PageHandlerFactory": true, "ash.settings.date_time.mojom.PageHandler": true, "ash.settings.date_time.mojom.Page": true, "ash.settings.mojom.TabletModeObserver": true, "ash.settings.mojom.DisplayConfigurationObserver": true, "ash.settings.mojom.DisplayBrightnessSettingsObserver": true, "ash.settings.mojom.AmbientLightSensorObserver": true, "ash.settings.mojom.DisplaySettingsProvider": true, "ash.settings.mojom.KeyboardSettingsObserver": true, "ash.settings.mojom.TouchpadSettingsObserver": true, "ash.settings.mojom.PointingStickSettingsObserver": true, "ash.settings.mojom.MouseSettingsObserver": true, "ash.settings.mojom.ButtonPressObserver": true, "ash.settings.mojom.GraphicsTabletSettingsObserver": true, "ash.settings.mojom.KeyboardBrightnessObserver": true, "ash.settings.mojom.KeyboardAmbientLightSensorObserver": true, "ash.settings.mojom.LidStateObserver": true, "ash.settings.mojom.InputDeviceSettingsProvider": true, "ash.settings.google_drive.mojom.PageHandlerFactory": true, "ash.settings.google_drive.mojom.PageHandler": true, "ash.settings.google_drive.mojom.Page": true, "ash.settings.one_drive.mojom.PageHandlerFactory": true, "ash.settings.one_drive.mojom.PageHandler": true, "ash.settings.one_drive.mojom.Page": true, "ash.settings.graduation.mojom.GraduationHandler": true, "ash.settings.graduation.mojom.GraduationObserver": true, "ash.settings.app_permission.mojom.AppPermissionsHandler": true, "ash.settings.app_permission.mojom.AppPermissionsObserver": true, "ash.settings.magic_boost_handler.mojom.PageHandlerFactory": true, "ash.settings.magic_boost_handler.mojom.PageHandler": true, "ash.settings.mojom.SearchResultsObserver": true, "ash.settings.mojom.SearchHandler": true, "ash.settings.mojom.UserActionRecorder": true, "policy.local_user_files.mojom.PageHandlerFactory": true, "policy.local_user_files.mojom.PageHandler": true, "policy.local_user_files.mojom.Page": true, "mojom.DebugLogsChangeHandler": true, "mojom.BluetoothInternalsHandler": true, "mojom.BluetoothBtsnoop": true, "chrome_finds_internals.mojom.Page": true, "chrome_finds_internals.mojom.PageHandler": true, "chrome_finds_internals.mojom.PageHandlerFactory": true, "browser.context_hub.mojom.PageHandlerFactory": true, "browser.context_hub.mojom.PageHandler": true, "customize_buttons.mojom.CustomizeButtonsHandlerFactory": true, "customize_buttons.mojom.CustomizeButtonsHandler": true, "customize_buttons.mojom.CustomizeButtonsDocument": true, "data_sharing.mojom.PageHandlerFactory": true, "data_sharing.mojom.PageHandler": true, "data_sharing.mojom.Page": true, "default_browser_modal.mojom.Page": true, "default_browser_modal.mojom.PageHandler": true, "default_browser_modal.mojom.PageHandlerFactory": true, "visual_guided_setter.mojom.Page": true, "visual_guided_setter.mojom.PageHandler": true, "visual_guided_setter.mojom.PageHandlerFactory": true, "discards.mojom.DetailsProvider": true, "discards.mojom.GraphChangeStream": true, "discards.mojom.GraphDump": true, "discards.mojom.SiteDataProvider": true, "downloads.mojom.PageHandlerFactory": true, "downloads.mojom.PageHandler": true, "downloads.mojom.Page": true, "drive_picker_host.mojom.DrivePickerHostHandler": true, "drive_picker_host_untrusted.mojom.PageHandler": true, "drive_picker_host_untrusted.mojom.Page": true, "drive_picker_host_untrusted.mojom.PageHandlerFactory": true, "drive_picker_host_untrusted.mojom.DrivePickerBridge": true, "zero_state_promo.mojom.PageHandlerFactory": true, "zero_state_promo.mojom.PageHandler": true, "feature_showcase.mojom.DefaultBrowserPageHandler": true, "feature_showcase.mojom.DefaultBrowserPageHandlerFactory": true, "feature_showcase.mojom.FeatureShowcasePageHandler": true, "feature_showcase.mojom.FeatureShowcasePageHandlerFactory": true, "feature_showcase.mojom.GoogleLensPageHandler": true, "feature_showcase.mojom.GoogleLensPageHandlerFactory": true, "feature_showcase.mojom.PasswordManagerPageHandler": true, "feature_showcase.mojom.PasswordManagerPageHandlerFactory": true, "feature_showcase.mojom.ThemesAndCustomizationPageHandler": true, "feature_showcase.mojom.ThemesAndCustomizationPageHandlerFactory": true, "feed_internals.mojom.PageHandler": true, "feedback.report_unsafe_site.mojom.PageHandler": true, "feedback.report_unsafe_site.mojom.PageHandlerFactory": true, "indigo_internals.mojom.PageHandlerFactory": true, "indigo_internals.mojom.PageHandler": true, "indigo_internals.mojom.Page": true, "infobar_internals.mojom.Page": true, "infobar_internals.mojom.PageHandler": true, "infobar_internals.mojom.PageHandlerFactory": true, "intro.mojom.FinishOrContinuePageHandlerFactory": true, "intro.mojom.FinishOrContinuePageHandler": true, "intro.mojom.IntroPageHandlerFactory": true, "intro.mojom.IntroPage": true, "intro.mojom.SignInCelebrationPageHandlerFactory": true, "intro.mojom.SignInCelebrationPageHandler": true, "intro.mojom.SignInCelebrationPage": true, "intro.mojom.SignInPromoPageHandlerFactory": true, "intro.mojom.SignInPromoPageHandler": true, "intro.mojom.SignInPromoPage": true, "mojom.LocationInternalsHandler": true, "multistep_filter_internals.mojom.PageHandler": true, "multistep_filter_internals.mojom.Page": true, "multistep_filter_internals.mojom.PageHandlerFactory": true, "nearby_share.mojom.ShareTargetListener": true, "nearby_share.mojom.TransferUpdateListener": true, "nearby_share.mojom.DiscoveryObserver": true, "nearby_share.mojom.DiscoveryManager": true, "nearby_share.mojom.ConfirmationManager": true, "nearby_share.mojom.ReceiveObserver": true, "nearby_share.mojom.ReceiveManager": true, "new_tab_footer.mojom.NewTabFooterHandlerFactory": true, "new_tab_footer.mojom.NewTabFooterHandler": true, "new_tab_footer.mojom.NewTabFooterDocument": true, "action_chips.mojom.ActionChipsHandler": true, "action_chips.mojom.Page": true, "action_chips.mojom.ActionChipsHandlerFactory": true, "foo.mojom.FooHandler": true, "new_tab_page.mojom.PageHandlerFactory": true, "new_tab_page.mojom.PageHandler": true, "new_tab_page.mojom.Page": true, "ntp_promo.mojom.NtpPromoHandler": true, "ntp_promo.mojom.NtpPromoClient": true, "ntp_promo.mojom.NtpPromoHandlerFactory": true, "new_tab_page_third_party.mojom.PageHandlerFactory": true, "new_tab_page_third_party.mojom.PageHandler": true, "new_tab_page_third_party.mojom.Page": true, "notifications_internals.mojom.PageHandler": true, "new_tab_page.mojom.MicrosoftAuthUntrustedDocument": true, "new_tab_page.mojom.MicrosoftAuthUntrustedDocumentInterfacesFactory": true, "new_tab_page.mojom.MicrosoftAuthUntrustedPageHandler": true, "aim_eligibility.mojom.Page": true, "aim_eligibility.mojom.PageHandler": true, "aim_eligibility.mojom.PageHandlerFactory": true, "omnibox.logging.mojom.PageHandlerFactory": true, "omnibox.logging.mojom.PageHandler": true, "omnibox.logging.mojom.Page": true, "mojom.OmniboxPageHandler": true, "mojom.OmniboxPage": true, "omnibox_popup.mojom.PageHandlerFactory": true, "omnibox_popup.mojom.PageHandler": true, "omnibox_popup.mojom.Page": true, "omnibox_popup_aim.mojom.PageHandlerFactory": true, "omnibox_popup_aim.mojom.PageHandler": true, "omnibox_popup_aim.mojom.Page": true, "on_device_internals.mojom.PageHandlerFactory": true, "on_device_internals.mojom.PageHandler": true, "on_device_internals.mojom.Page": true, "on_device_translation_internals.mojom.PageHandlerFactory": true, "on_device_translation_internals.mojom.PageHandler": true, "on_device_translation_internals.mojom.Page": true, "password_manager.mojom.PageHandlerFactory": true, "password_manager.mojom.PageHandler": true, "password_manager.mojom.Page": true, "personal_context.notice.mojom.PageHandler": true, "browser.personal_context_internals.mojom.PageHandlerFactory": true, "browser.personal_context_internals.mojom.PageHandler": true, "private_ai_internals.mojom.PrivateAiInternalsPage": true, "private_ai_internals.mojom.PrivateAiInternalsPageHandler": true, "mojom.ResetPasswordHandler": true, "search_engine_choice.mojom.PageHandlerFactory": true, "search_engine_choice.mojom.PageHandler": true, "segmentation_internals.mojom.PageHandlerFactory": true, "segmentation_internals.mojom.PageHandler": true, "segmentation_internals.mojom.Page": true, "side_panel.mojom.BookmarksPageHandlerFactory": true, "side_panel.mojom.BookmarksPageHandler": true, "side_panel.mojom.BookmarksPage": true, "comments.mojom.PageHandlerFactory": true, "comments.mojom.PageHandler": true, "comments.mojom.Page": true, "side_panel.mojom.CustomizeChromePageHandlerFactory": true, "side_panel.mojom.CustomizeChromePageHandler": true, "side_panel.mojom.CustomizeChromePage": true, "side_panel.customize_chrome.mojom.CustomizeToolbarHandlerFactory": true, "side_panel.customize_chrome.mojom.CustomizeToolbarHandler": true, "side_panel.customize_chrome.mojom.CustomizeToolbarClient": true, "side_panel.customize_chrome.mojom.WallpaperSearchHandlerFactory": true, "side_panel.customize_chrome.mojom.WallpaperSearchHandler": true, "side_panel.customize_chrome.mojom.WallpaperSearchClient": true, "reading_list.mojom.PageHandlerFactory": true, "reading_list.mojom.PageHandler": true, "reading_list.mojom.Page": true, "batch_upload.mojom.PageHandlerFactory": true, "batch_upload.mojom.PageHandler": true, "batch_upload.mojom.Page": true, "history_sync_optin.mojom.PageHandlerFactory": true, "history_sync_optin.mojom.PageHandler": true, "history_sync_optin.mojom.Page": true, "signout_confirmation.mojom.PageHandlerFactory": true, "signout_confirmation.mojom.PageHandler": true, "signout_confirmation.mojom.Page": true, "skills.mojom.PageHandlerFactory": true, "skills.mojom.PageHandler": true, "skills.mojom.SkillsPage": true, "skills.mojom.DialogHandler": true, "skills.mojom.SkillsPageHandler": true, "subresource_filter.mojom.SubresourceFilterInternalsHandler": true, "subresource_filter.mojom.SubresourceFilterInternalsObserver": true, "suggest_internals.mojom.PageHandler": true, "suggest_internals.mojom.Page": true, "tab_search.mojom.PageHandlerFactory": true, "tab_search.mojom.PageHandler": true, "tab_search.mojom.Page": true, "tab_strip_internals.mojom.PageHandlerFactory": true, "tab_strip_internals.mojom.PageHandler": true, "tab_strip_internals.mojom.Page": true, "unexportable_keys_internals.mojom.PageHandlerFactory": true, "unexportable_keys_internals.mojom.PageHandler": true, "unexportable_keys_internals.mojom.Page": true, "updater_ui.mojom.PageHandlerFactory": true, "updater_ui.mojom.PageHandler": true, "updater_ui.mojom.Page": true, "mojom.UsbInternalsPageHandler": true, "mojom.user_education_internals.UserEducationInternalsPageHandler": true, "watermark.mojom.PageHandlerFactory": true, "watermark.mojom.PageHandler": true, "mojom.WebAppInternalsHandler": true, "webnn_internals.mojom.PageHandler": true, "webnn_internals.mojom.Page": true, "webnn_internals.mojom.PageHandlerFactory": true, "whats_new.mojom.PageHandlerFactory": true, "whats_new.mojom.PageHandler": true, "whats_new.mojom.Page": true, "bookmark_bar.mojom.PageHandlerFactory": true, "bookmark_bar.mojom.PageHandler": true, "bookmark_bar.mojom.Page": true, "webui_browser.mojom.PageHandlerFactory": true, "webui_browser.mojom.Page": true, "webui_browser.mojom.PageHandler": true, "webui_browser.mojom.GuestHandler": true, "chrome.mojom.ChromeRenderFrame": true, "compose.mojom.ComposeSessionUntrustedPageHandlerFactory": true, "compose.mojom.ComposeSessionUntrustedPageHandler": true, "compose.mojom.ComposeClientUntrustedPageHandler": true, "compose.mojom.ComposeUntrustedDialog": true, "mojom.ModuleEventSink": true, "chrome.mojom.FontPrewarmer": true, "chrome.mojom.RenderFrameFontFamilyAccessor": true, "chrome.mojom.GoogleAccountsPrivateApiExtension": true, "chrome.mojom.ProfileImportObserver": true, "chrome.mojom.ProfileImport": true, "chrome.mojom.IndigoAgentHost": true, "chrome.mojom.IndigoAgent": true, "chrome.mojom.IndigoOnboardingDialogHost": true, "chrome.mojom.AppShim": true, "chrome.mojom.AppShimHost": true, "chrome.mojom.AppShimHostBootstrap": true, "chrome.mojom.WebRtcLoggingClient": true, "chrome.mojom.WebRtcLoggingAgent": true, "offline_pages.mojom.MhtmlPageNotifier": true, "chrome.mojom.NetErrorPageSupport": true, "chrome.mojom.NetBenchmarking": true, "chrome.mojom.NetworkDiagnostics": true, "chrome.mojom.NetworkDiagnosticsClient": true, "chrome.mojom.NetworkEasterEgg": true, "chrome.mojom.OfflinePageAutoFetcher": true, "chrome.mojom.OpenSearchDescriptionDocumentHandler": true, "chrome.mojom.PluginHost": true, "chrome.mojom.PluginAuthHost": true, "chrome.mojom.PluginInfoHost": true, "reading_mode.mojom.DistillationEvaluator": true, "read_anything.mojom.UntrustedPageHandlerFactory": true, "read_anything.mojom.UntrustedPageHandler": true, "read_anything.mojom.UntrustedPage": true, "read_aloud.mojom.ReadAloudPlayer": true, "read_aloud.mojom.ReadAloudPlayerObserver": true, "read_aloud.mojom.ReadAloudPlayerFactory": true, "chrome.mojom.BoundSessionRequestThrottledHandler": true, "chrome.mojom.ChromeOSListener": true, "chrome.mojom.RendererConfiguration": true, "request_header_integrity.mojom.ChromeCompanero": true, "chrome.mojom.SandboxStatusExtension": true, "search.mojom.EmbeddedSearchConnector": true, "search.mojom.EmbeddedSearch": true, "search.mojom.EmbeddedSearchClient": true, "supervised_user.mojom.SupervisedUserCommands": true, "chrome.mojom.TrustedVaultEncryptionKeysExtension": true, "wallet.mojom.BoardingPassExtractor": true, "gcpw_hid.mojom.GaiaCredentialProviderHidBroker": true, "enterprise_companion.mojom.EnterpriseCompanion": true, "chrome.mojom.DocumentAnalysisService": true, "chrome.mojom.FileUtilService": true, "chrome.mojom.SafeArchiveAnalyzer": true, "chrome.mojom.TemporaryFileGetter": true, "chrome.mojom.SingleFileExtractor": true, "chrome.mojom.SingleFileExtractorListener": true, "chrome.mojom.ZipListener": true, "chrome.mojom.ZipFileCreator": true, "mac_notifications.mojom.MacNotificationService": true, "mac_notifications.mojom.MacNotificationActionHandler": true, "mac_notifications.mojom.MacNotificationProvider": true, "chrome.mojom.MediaParser": true, "chrome.mojom.MediaParserFactory": true, "chrome.mojom.MediaDataSource": true, "pdf.mojom.PdfProgressiveSearchifier": true, "pdf.mojom.PdfSearchifier": true, "pdf.mojom.Ocr": true, "pdf.mojom.PdfService": true, "pdf.mojom.PdfThumbnailer": true, "printing.mojom.PdfFlattener": true, "printing.mojom.PdfNupConverter": true, "printing.mojom.PdfToEmfConverter": true, "printing.mojom.PdfToEmfConverterFactory": true, "printing.mojom.PdfToPwgRasterConverter": true, "printing.mojom.UnsandboxedPrintBackendHost": true, "printing.mojom.SandboxedPrintBackendHost": true, "printing.mojom.PrintBackendService": true, "printing.mojom.PrintingService": true, "chrome.mojom.RemovableStorageWriter": true, "chrome.mojom.RemovableStorageWriterClient": true, "chrome.mojom.UtilReadIcon": true, "chrome.mojom.UtilWin": true, "chrome.mojom.ProcessorMetrics": true, "web_ui_test.mojom.TestRunner": true, "test.mojom.Foo": true, "test.mojom.Bar": true, "test.mojom.Baz": true, "test.mojom.MojoFileSystemAccessTest": true, "updater.mojom.UpdateService": true, "updater.mojom.StateChangeObserver": true, "updater.mojom.UpdateServiceInternal": true, "updater.mojom.PostRequestObserver": true, "updater.mojom.FileDownloadObserver": true, "updater.mojom.FetchService": true, "chromecast.mojom.ApiBindings": true, "chromecast.mojom.BluetoothDeviceAccessProvider": true, "chromecast.mojom.BluetoothDeviceAccessProviderClient": true, "chromecast.mojom.CastContentWindowObserver": true, "chromecast.mojom.CastContentWindow": true, "chromecast.mojom.CastWebContentsObserver": true, "chromecast.mojom.CastWebContents": true, "chromecast.mojom.CastWebService": true, "chromecast.mojom.MessageCallback": true, "chromecast.mojom.WebUi": true, "chromecast.mojom.Resources": true, "chromecast.mojom.WebUiClient": true, "chromecast.mojom.ActivityUrlFilterConfiguration": true, "chromecast.mojom.ActivityWindow": true, "chromecast.shell.mojom.ApplicationMediaCapabilitiesObserver": true, "chromecast.shell.mojom.ApplicationMediaCapabilities": true, "chromecast.mojom.AssistantMessagePipe": true, "chromecast.mojom.AssistantMessageClient": true, "chromecast.mojom.AssistantMessageService": true, "chromecast.mojom.AudioSocketBroker": true, "chromecast.shell.mojom.CastDemoVolumeChangeObserver": true, "chromecast.shell.mojom.CastDemo": true, "chromecast.shell.mojom.FeatureManager": true, "chromecast.mojom.FeatureUpdateObserver": true, "chromecast.mojom.FeatureUpdateService": true, "chromecast.mojom.GestureHandler": true, "chromecast.mojom.GestureSource": true, "chromecast.mojom.JsChannel": true, "chromecast.mojom.JsChannelClient": true, "chromecast.mojom.JsChannelBindingProvider": true, "chromecast.media.mojom.MediaCaps": true, "chromecast.media.mojom.MediaCapsObserver": true, "chromecast.metrics.mojom.MetricsHelper": true, "chromecast.shell.mojom.QueryableDataStore": true, "chromecast.mojom.ServiceConnector": true, "chromecast.mojom.SettingsClient": true, "chromecast.mojom.SettingsPlatform": true, "chromecast.external_mojo.mojom.ExternalService": true, "chromecast.external_mojo.mojom.ExternalConnector": true, "chromecast.external_mojo.mojom.TestExternalConnector": true, "chromecast.media.mojom.VideoGeometryChangeClient": true, "chromecast.media.mojom.VideoGeometryChangeSubscriber": true, "chromecast.media.mojom.VideoGeometrySetter": true, "chromecast.mojom.RemoteInterfaces": true, "chromecast.mojom.DisplaySettings": true, "chromecast.mojom.DisplaySettingsObserver": true, "ash.audio_config.mojom.AudioSystemPropertiesObserver": true, "ash.audio_config.mojom.CrosAudioConfig": true, "drivefs.mojom.DriveFsBootstrap": true, "drivefs.mojom.DriveFs": true, "drivefs.mojom.DriveFsDelegate": true, "drivefs.mojom.SearchQuery": true, "drivefs.mojom.HttpDelegate": true, "drivefs.mojom.FakeDriveFsLauncher": true, "emoji_search.mojom.EmojiSearch": true, "ash.enhanced_network_tts.mojom.EnhancedNetworkTts": true, "ash.enhanced_network_tts.mojom.AudioDataObserver": true, "ash.language.mojom.LanguagePacksObserver": true, "ash.language.mojom.LanguagePacks": true, "ash.local_search_service.mojom.Index": true, "ash.local_search_service.mojom.SearchMetricsReporter": true, "ash.local_search_service.mojom.LocalSearchService": true, "mantis.mojom.MantisProcessor": true, "mantis.mojom.PlatformModelProgressObserver": true, "mantis.mojom.MantisService": true, "chromeos.mojo_service_manager.mojom.ServiceManager": true, "chromeos.mojo_service_manager.mojom.ServiceProvider": true, "chromeos.mojo_service_manager.mojom.ServiceObserver": true, "smbfs.mojom.SmbFsBootstrap": true, "smbfs.mojom.SmbFs": true, "smbfs.mojom.SmbFsDelegate": true, "ash.trash_service.mojom.TrashService": true, "arc.mojom.AdbdMonitorHost": true, "arc.mojom.AdbdMonitorInstance": true, "arc.mojom.AppHost": true, "arc.mojom.AppInstance": true, "arc.mojom.AppPermissionsInstance": true, "arc.mojom.AppfuseHost": true, "arc.mojom.AppfuseInstance": true, "arc.mojom.ArcBridgeHost": true, "arc.mojom.ArcWifiHost": true, "arc.mojom.ArcWifiInstance": true, "arc.mojom.AudioHost": true, "arc.mojom.AudioInstance": true, "arc.mojom.AuthHost": true, "arc.mojom.AuthInstance": true, "arc.mojom.BackupSettingsInstance": true, "arc.mojom.RfcommListeningSocketClient": true, "arc.mojom.RfcommConnectingSocketClient": true, "arc.mojom.BluetoothListenSocketClient": true, "arc.mojom.BluetoothConnectSocketClient": true, "arc.mojom.BluetoothHost": true, "arc.mojom.BluetoothInstance": true, "arc.mojom.BootPhaseMonitorHost": true, "arc.mojom.BootPhaseMonitorInstance": true, "arc.mojom.CameraService": true, "arc.mojom.CameraHost": true, "arc.mojom.CameraInstance": true, "arc.mojom.ChromeFeatureFlagsInstance": true, "arc.mojom.CompatibilityModeInstance": true, "arc.mojom.CrashCollectorHost": true, "arc.mojom.CrashCollectorInstance": true, "arc.mojom.ArcShellExecutionInstance": true, "arc.mojom.DigitalGoodsInstance": true, "arc.mojom.DiskSpaceHost": true, "arc.mojom.DiskSpaceInstance": true, "arc.mojom.EnterpriseReportingHost": true, "arc.mojom.EnterpriseReportingInstance": true, "arc.mojom.ErrorNotificationHost": true, "arc.mojom.ErrorNotificationInstance": true, "arc.mojom.ErrorNotificationItem": true, "arc.mojom.ErrorNotificationActionHandler": true, "arc.mojom.FileSystemHost": true, "arc.mojom.FileSystemInstance": true, "arc.mojom.IioSensorHost": true, "arc.mojom.IioSensorInstance": true, "arc.mojom.ImeHost": true, "arc.mojom.ImeInstance": true, "arc.mojom.InputConnection": true, "arc.mojom.InputMethodManagerHost": true, "arc.mojom.InputMethodManagerInstance": true, "arc.mojom.CustomTabSession": true, "arc.mojom.IntentHelperHost": true, "arc.mojom.IntentHelperInstance": true, "arc.mojom.KeymasterHost": true, "arc.mojom.KeymasterInstance": true, "arc.mojom.KeymasterServer": true, "arc.mojom.keymint.KeyMintHost": true, "arc.mojom.keymint.KeyMintInstance": true, "arc.mojom.keymint.KeyMintServer": true, "arc.mojom.KioskHost": true, "arc.mojom.KioskInstance": true, "arc.mojom.MediaSessionInstance": true, "arc.mojom.MemoryInstance": true, "arc.mojom.MetricsHost": true, "arc.mojom.MetricsInstance": true, "arc.mojom.MidisClient": true, "arc.mojom.MidisServer": true, "arc.mojom.MidisHost": true, "arc.mojom.MidisInstance": true, "arc.mojom.NearbyShareSessionHost": true, "arc.mojom.NearbyShareSessionInstance": true, "arc.mojom.NearbyShareHost": true, "arc.mojom.NearbyShareInstance": true, "arc.mojom.NetHost": true, "arc.mojom.NetInstance": true, "arc.mojom.NotificationsHost": true, "arc.mojom.NotificationsInstance": true, "arc.mojom.ObbMounterHost": true, "arc.mojom.ObbMounterInstance": true, "arc.mojom.OemCryptoService": true, "arc.mojom.OemCryptoHost": true, "arc.mojom.OemCryptoInstance": true, "arc.mojom.OnDeviceSafetyHost": true, "arc.mojom.OnDeviceSafetyInstance": true, "arc.mojom.PipHost": true, "arc.mojom.PipInstance": true, "arc.mojom.PolicyHost": true, "arc.mojom.PolicyInstance": true, "arc.mojom.PowerHost": true, "arc.mojom.PowerInstance": true, "arc.mojom.PrintSessionHost": true, "arc.mojom.PrintSessionInstance": true, "arc.mojom.PrintSpoolerHost": true, "arc.mojom.PrintSpoolerInstance": true, "arc.mojom.PrivacyItemsHost": true, "arc.mojom.PrivacyItemsInstance": true, "arc.mojom.ProcessInstance": true, "arc.mojom.ProtectedBufferManager": true, "arc.mojom.ScreenCaptureHost": true, "arc.mojom.ScreenCaptureSession": true, "arc.mojom.ScreenCaptureInstance": true, "arc.mojom.ScreenCaptureSessionNotifier": true, "arc.mojom.SharesheetHost": true, "arc.mojom.SharesheetInstance": true, "arc.mojom.SystemStateHost": true, "arc.mojom.SystemStateInstance": true, "arc.mojom.SystemUiInstance": true, "arc.mojom.TracingInstance": true, "arc.mojom.TtsHost": true, "arc.mojom.TtsInstance": true, "arc.mojom.UsbHostHost": true, "arc.mojom.UsbHostInstance": true, "arc.mojom.VideoHost": true, "arc.mojom.VideoInstance": true, "arc.mojom.VideoAcceleratorFactory": true, "arc.mojom.VideoDecodeAccelerator": true, "arc.mojom.VideoDecodeClient": true, "arc.mojom.VideoDecoder": true, "arc.mojom.VideoDecoderClient": true, "arc.mojom.VideoEncodeAccelerator": true, "arc.mojom.VideoEncodeClient": true, "arc.mojom.VideoFramePool": true, "arc.mojom.VideoFramePoolClient": true, "arc.mojom.VideoProtectedBufferAllocator": true, "arc.mojom.VolumeMounterHost": true, "arc.mojom.VolumeMounterInstance": true, "arc.mojom.WakeLockHost": true, "arc.mojom.WakeLockInstance": true, "arc.mojom.WallpaperHost": true, "arc.mojom.WallpaperInstance": true, "arc.mojom.WebApkInstance": true, "ash.borealis_motd.mojom.PageHandlerFactory": true, "ash.borealis_motd.mojom.PageHandler": true, "ash.borealis_motd.mojom.Page": true, "ash.auth.mojom.FactorObserver": true, "ash.auth.mojom.AuthFactorConfig": true, "ash.auth.mojom.RecoveryFactorEditor": true, "ash.auth.mojom.PinFactorEditor": true, "ash.auth.mojom.PasswordFactorEditor": true, "ash.bluetooth_config.mojom.SystemPropertiesObserver": true, "ash.bluetooth_config.mojom.BluetoothDeviceStatusObserver": true, "ash.bluetooth_config.mojom.DiscoverySessionStatusObserver": true, "ash.bluetooth_config.mojom.KeyEnteredHandler": true, "ash.bluetooth_config.mojom.DevicePairingDelegate": true, "ash.bluetooth_config.mojom.DevicePairingHandler": true, "ash.bluetooth_config.mojom.BluetoothDiscoveryDelegate": true, "ash.bluetooth_config.mojom.CrosBluetoothConfig": true, "ash.babelorca.mojom.TachyonParsingService": true, "ash.cellular_setup.mojom.CarrierPortalHandler": true, "ash.cellular_setup.mojom.ActivationDelegate": true, "ash.cellular_setup.mojom.CellularSetup": true, "ash.cellular_setup.mojom.ESimManagerObserver": true, "ash.cellular_setup.mojom.ESimManager": true, "ash.cellular_setup.mojom.Euicc": true, "ash.cellular_setup.mojom.ESimProfile": true, "chromeos.connectivity.mojom.PasspointEventsListener": true, "chromeos.connectivity.mojom.PasspointService": true, "coral.mojom.TitleObserver": true, "coral.mojom.CoralProcessor": true, "coral.mojom.CoralService": true, "ash.cros_healthd.internal.mojom.ChromiumDataCollector": true, "ash.cros_healthd.mojom.CrosHealthdDiagnosticsService": true, "ash.cros_healthd.mojom.CrosHealthdEventService": true, "ash.cros_healthd.mojom.CrosHealthdProbeService": true, "ash.cros_healthd.mojom.DEPRECATED_LedLitUpRoutineReplier": true, "ash.cros_healthd.mojom.AshEventReporter": true, "ash.cros_healthd.mojom.CrosHealthdBluetoothObserver": true, "ash.cros_healthd.mojom.CrosHealthdLidObserver": true, "ash.cros_healthd.mojom.CrosHealthdPowerObserver": true, "ash.cros_healthd.mojom.CrosHealthdAudioObserver": true, "ash.cros_healthd.mojom.CrosHealthdThunderboltObserver": true, "ash.cros_healthd.mojom.CrosHealthdUsbObserver": true, "ash.cros_healthd.mojom.CrosHealthdSdCardObserver": true, "ash.cros_healthd.mojom.EventObserver": true, "ash.cros_healthd.mojom.CrosHealthdRoutinesService": true, "ash.cros_healthd.mojom.RoutineControl": true, "ash.cros_healthd.mojom.RoutineObserver": true, "ash.cros_healthd.connectivity.mojom.State": true, "ash.cros_healthd.connectivity.mojom.ConnectivityTestProvider": true, "ash.cros_safety.mojom.CloudSafetySession": true, "ash.cros_safety.mojom.OnDeviceSafetySession": true, "ash.cros_safety.mojom.CrosSafetyService": true, "ash.device_sync.mojom.DeviceSyncObserver": true, "ash.device_sync.mojom.DeviceSync": true, "ash.heartd.mojom.HeartdControl": true, "ash.heartd.mojom.HeartbeatService": true, "ash.heartd.mojom.Pacemaker": true, "ash.hotspot_config.mojom.CrosHotspotConfig": true, "ash.hotspot_config.mojom.CrosHotspotConfigObserver": true, "ash.hotspot_config.mojom.HotspotEnabledStateObserver": true, "ash.ime.mojom.ConnectionFactory": true, "ash.ime.mojom.InputEngineManager": true, "ash.ime.mojom.PlatformAccessProvider": true, "ash.ime.mojom.ImeService": true, "ash.ime.mojom.InputChannel": true, "ash.ime.mojom.InputMethod": true, "ash.ime.mojom.InputMethodHost": true, "ash.ime.mojom.InputMethodUserDataService": true, "ash.ime.mojom.JpUnused": true, "arc.keymaster.mojom.CertStoreInstance": true, "arc.keymint.mojom.CertStoreInstance": true, "ash.multidevice_setup.mojom.AccountStatusChangeDelegate": true, "ash.multidevice_setup.mojom.HostStatusObserver": true, "ash.multidevice_setup.mojom.FeatureStateObserver": true, "ash.multidevice_setup.mojom.MultiDeviceSetup": true, "ash.multidevice_setup.mojom.PrivilegedHostDeviceSetter": true, "sharing.mojom.FirewallHole": true, "sharing.mojom.FirewallHoleFactory": true, "sharing.mojom.MdnsObserver": true, "sharing.mojom.MdnsManager": true, "nearby.connections.mojom.EndpointDiscoveryListener": true, "nearby.connections.mojom.ConnectionLifecycleListener": true, "nearby.connections.mojom.PayloadListener": true, "nearby.connections.mojom.ConnectionListenerV3": true, "nearby.connections.mojom.PayloadListenerV3": true, "nearby.connections.mojom.NearbyConnections": true, "sharing.mojom.NearbySharingDecoder": true, "ash.nearby.presence.mojom.ScanSession": true, "ash.nearby.presence.mojom.ScanObserver": true, "ash.nearby.presence.mojom.NearbyPresence": true, "ash.nearby.presence.mojom.NearbyPresenceCredentialStorage": true, "nearby_share.mojom.NearbyShareSettingsObserver": true, "nearby_share.mojom.NearbyShareSettings": true, "nearby_share.mojom.DownloadContactsObserver": true, "nearby_share.mojom.ContactManager": true, "ash.quick_start.mojom.QuickStartDecoder": true, "sharing.mojom.Sharing": true, "sharing.mojom.TcpSocketFactory": true, "sharing.mojom.IceConfigFetcher": true, "sharing.mojom.MdnsResponderFactory": true, "sharing.mojom.IncomingMessagesListener": true, "sharing.mojom.ReceiveMessagesSession": true, "sharing.mojom.WebRtcSignalingMessenger": true, "ash.orca.mojom.EditorClient": true, "ash.orca.mojom.EditorClientConnector": true, "ash.orca.mojom.EditorEventSink": true, "ash.orca.mojom.SystemActuator": true, "ash.orca.mojom.TextQueryProvider": true, "ash.orca.mojom.OrcaService": true, "ash.quick_pair.mojom.FastPairDataParser": true, "ash.quick_pair.mojom.QuickPairService": true, "recording.mojom.DriveFsQuotaDelegate": true, "recording.mojom.RecordingServiceClient": true, "recording.mojom.RecordingService": true, "ash.rollback_network_config.mojom.RollbackNetworkConfig": true, "ash.secure_channel.mojom.NearbyConnectionStateListener": true, "ash.secure_channel.mojom.NearbyMessageSender": true, "ash.secure_channel.mojom.NearbyMessageReceiver": true, "ash.secure_channel.mojom.NearbyFilePayloadHandler": true, "ash.secure_channel.mojom.NearbyConnector": true, "ash.secure_channel.mojom.Channel": true, "ash.secure_channel.mojom.MessageReceiver": true, "ash.secure_channel.mojom.ConnectionDelegate": true, "ash.secure_channel.mojom.SecureChannelStructuredMetricsLogger": true, "ash.secure_channel.mojom.SecureChannel": true, "ash.secure_channel.mojom.FilePayloadListener": true, "ash.wifi_direct.mojom.WifiDirectManager": true, "ash.wifi_direct.mojom.WifiDirectConnection": true, "chromeos.cdm.mojom.BrowserCdmFactory": true, "chromeos.cdm.mojom.CdmFactory": true, "chromeos.cdm.mojom.CdmFactoryDaemon": true, "chromeos.cdm.mojom.CdmStorage": true, "chromeos.cdm.mojom.ContentDecryptionModule": true, "chromeos.cdm.mojom.ContentDecryptionModuleClient": true, "chromeos.cdm.mojom.OutputProtection": true, "drivefs.mojom.NativeMessagingPort": true, "drivefs.mojom.NativeMessagingHost": true, "chromeos.auth.mojom.InSessionAuth": true, "mahi.mojom.ContentExtractionService": true, "mahi.mojom.ContentExtractionServiceFactory": true, "chromeos.payments.mojom.PaymentAppInstance": true, "chromeos.printing.printing_manager.mojom.PrintJobsObserver": true, "chromeos.printing.printing_manager.mojom.PrintingMetadataProvider": true, "chromeos.printing.printing_manager.mojom.PrintManagementHandler": true, "quick_answers.mojom.SpellCheckService": true, "quick_answers.mojom.SpellCheckDictionary": true, "chromeos.remote_apps.mojom.RemoteApps": true, "chromeos.remote_apps.mojom.RemoteAppsFactory": true, "chromeos.remote_apps.mojom.RemoteAppLaunchObserver": true, "chromeos.sensors.mojom.SensorHalServer": true, "chromeos.sensors.mojom.SensorHalClient": true, "chromeos.sensors.mojom.SensorService": true, "chromeos.sensors.mojom.SensorDevice": true, "chromeos.sensors.mojom.SensorDeviceSamplesObserver": true, "chromeos.sensors.mojom.SensorServiceNewDevicesObserver": true, "crosapi.mojom.AccountManagerObserver": true, "crosapi.mojom.AccountManager": true, "crosapi.mojom.AccessTokenFetcher": true, "crosapi.mojom.Crosapi": true, "crosapi.mojom.TelemetryProbeService": true, "crosapi.mojom.TelemetryDiagnosticRoutineControl": true, "crosapi.mojom.TelemetryEventObserver": true, "crosapi.mojom.TelemetryEventService": true, "chromeos.cfm.mojom.CfmBrowser": true, "chromeos.cfm.mojom.DisconnectReason": true, "chromeos.cfm.mojom.CfmServiceContext": true, "chromeos.cfm.mojom.CfmServiceAdaptor": true, "chromeos.cfm.mojom.ExternalDisplayBrightness": true, "ash.cfm.mojom.MeetBrowser": true, "ash.cfm.mojom.DataWatchDog": true, "ash.cfm.mojom.DataSource": true, "ash.cfm.mojom.DataAggregator": true, "chromeos.cfm.mojom.MeetDevicesDiagnostics": true, "ash.cfm.mojom.HotrodStatus": true, "chromeos.cfm.mojom.MeetDevicesInfo": true, "chromeos.cfm.mojom.PolicyInfoObserver": true, "chromeos.cfm.mojom.LoggerStateObserver": true, "chromeos.cfm.mojom.MeetDevicesLogger": true, "ash.cfm.mojom.XuCamera": true, "chromeos.machine_learning.mojom.DocumentScanner": true, "chromeos.machine_learning.mojom.GrammarChecker": true, "chromeos.machine_learning.mojom.GraphExecutor": true, "chromeos.machine_learning.mojom.HandwritingRecognizer": true, "chromeos.machine_learning.mojom.HeatmapPalmRejectionClient": true, "chromeos.machine_learning.mojom.ImageContentAnnotator": true, "chromeos.machine_learning.mojom.MachineLearningService": true, "chromeos.machine_learning.mojom.Model": true, "chromeos.machine_learning.mojom.SodaClient": true, "chromeos.machine_learning.mojom.SodaRecognizer": true, "chromeos.machine_learning.mojom.TextClassifier": true, "chromeos.machine_learning.mojom.TextSuggester": true, "chromeos.machine_learning.web_platform.mojom.HandwritingRecognizer": true, "chromeos.media_perception.mojom.MediaPerception": true, "chromeos.media_perception.mojom.MediaPerceptionService": true, "chromeos.media_perception.mojom.MediaPerceptionController": true, "chromeos.media_perception.mojom.MediaPerceptionControllerClient": true, "chromeos.network_config.mojom.CrosNetworkConfig": true, "chromeos.network_config.mojom.CrosNetworkConfigObserver": true, "chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines": true, "chromeos.network_health.mojom.NetworkEventsObserver": true, "chromeos.network_health.mojom.NetworkHealthService": true, "chromeos.tts.mojom.TtsService": true, "chromeos.tts.mojom.GoogleTtsStream": true, "chromeos.tts.mojom.PlaybackTtsStream": true, "chromeos.tts.mojom.TtsEventObserver": true, "math.mojom.MathService": true, "codelabs.mojom.ObjectA": true, "codelabs.mojom.ObjectB": true, "codelabs.mojom.AssociatedProcess": true, "codelabs.mojom.GenericInterface": true, "codelabs.mojom.Process": true, "accessibility_annotator_internals.mojom.PageHandlerFactory": true, "accessibility_annotator_internals.mojom.PageHandler": true, "accessibility_annotator_internals.mojom.Page": true, "actor_internals.mojom.Page": true, "actor_internals.mojom.PageHandler": true, "actor_internals.mojom.PageHandlerFactory": true, "actor.mojom.JournalClient": true, "attribution_reporting.mojom.DataHost": true, "autofill.mojom.AutofillAgent": true, "autofill.mojom.PasswordAutofillAgent": true, "autofill.mojom.PasswordGenerationAgent": true, "autofill.mojom.AutofillDriver": true, "autofill.mojom.PasswordManagerDriver": true, "autofill.mojom.PasswordGenerationDriver": true, "autofill_ml_internals.mojom.Page": true, "autofill_ml_internals.mojom.PageHandlerFactory": true, "autofill_ml_internals.mojom.PageHandler": true, "autofill.mojom.TypeTraitsTest": true, "bookmarks_api.mojom.BookmarksObserver": true, "bookmarks_api.mojom.BookmarksService": true, "browser_controls_api.mojom.BrowserControlsService": true, "tabs_api.mojom.TabDragService": true, "tabs_api.mojom.DropTargetRegistration": true, "tabs_api.mojom.DropTarget": true, "tabs_api.mojom.TabStripService": true, "tabs_api.mojom.TabsObserver": true, "tabs_api.mojom.TabStripExperimentService": true, "tabs_api.mojom.TabStripUIController": true, "extensions_bar.mojom.PageHandlerFactory": true, "extensions_bar.mojom.PageHandler": true, "extensions_bar.mojom.Page": true, "toolbar_ui_api.mojom.ToolbarUIObserver": true, "toolbar_ui_api.mojom.ToolbarUIService": true, "browsing_topics.mojom.PageHandler": true, "cast_streaming.mojom.AudioBufferRequester": true, "cast_streaming.mojom.VideoBufferRequester": true, "cast_streaming.mojom.DemuxerConnector": true, "cast_streaming.mojom.RendererController": true, "chromeos_camera.mojom.JpegEncodeAccelerator": true, "chromeos_camera.mojom.MjpegDecodeAccelerator": true, "commerce.mojom.CommerceInternalsHandlerFactory": true, "commerce.mojom.CommerceInternalsHandler": true, "commerce.mojom.CommerceInternalsPage": true, "commerce_web_extractor.mojom.CommerceWebExtractor": true, "commerce.price_insights.mojom.PriceInsightsHandler": true, "commerce.price_insights.mojom.PriceInsightsHandlerFactory": true, "commerce.price_tracking.mojom.PriceTrackingHandler": true, "commerce.price_tracking.mojom.Page": true, "commerce.price_tracking.mojom.PriceTrackingHandlerFactory": true, "shopping_service.mojom.ShoppingServiceHandlerFactory": true, "shopping_service.mojom.ShoppingServiceHandler": true, "content_capture.mojom.ContentCaptureReceiver": true, "content_capture.mojom.ContentCaptureSender": true, "content_settings.mojom.ContentSettingsAgent": true, "content_settings.mojom.ContentSettingsManager": true, "continuous_search.mojom.SearchResultExtractor": true, "data_sharing_internals.mojom.PageHandlerFactory": true, "data_sharing_internals.mojom.PageHandler": true, "data_sharing_internals.mojom.Page": true, "device_signals.mojom.SystemSignalsService": true, "discardable_memory.mojom.DiscardableSharedMemoryManager": true, "dom_distiller.mojom.DistillabilityService": true, "dom_distiller.mojom.DistillerJavaScriptService": true, "download.mojom.DownloadStreamClient": true, "connectors_internals.mojom.PageHandler": true, "payments.facilitated.mojom.PixCodeValidator": true, "global_media_controls.mojom.DeviceListHost": true, "global_media_controls.mojom.DeviceListClient": true, "global_media_controls.mojom.DeviceService": true, "global_media_controls.mojom.DevicePickerProvider": true, "global_media_controls.mojom.DevicePickerObserver": true, "guest_contents.mojom.GuestContentsHost": true, "guest_view.mojom.PageHandlerFactory": true, "guest_view.mojom.PageHandler": true, "guest_view.mojom.Page": true, "guest_view.mojom.ViewHandle": true, "guest_view.mojom.GuestViewHost": true, "heap_profiling.mojom.SnapshotController": true, "heap_profiling.mojom.TestConnector": true, "history_clusters_internals.mojom.PageHandlerFactory": true, "history_clusters_internals.mojom.PageHandler": true, "history_clusters_internals.mojom.Page": true, "input.mojom.RenderInputRouterDelegate": true, "input.mojom.RenderInputRouterDelegateClient": true, "js_injection.mojom.JsToBrowserMessaging": true, "js_injection.mojom.JsObjectsClient": true, "js_injection.mojom.BrowserToJsMessagingFactory": true, "js_injection.mojom.BrowserToJsMessaging": true, "js_injection.mojom.JsCommunication": true, "language_detection.mojom.ContentLanguageDetectionDriver": true, "components.media_control.mojom.MediaPlaybackOptions": true, "media_router.mojom.Debugger": true, "media_router.mojom.Logger": true, "media_router.mojom.MediaController": true, "media_router.mojom.MediaRouteProvider": true, "media_router.mojom.MediaRouter": true, "media_router.mojom.MediaRouterTraitsTestService": true, "media_router.mojom.MediaStatusObserver": true, "metrics.dwa.mojom.DwaRecorderClientInterface": true, "metrics.dwa.mojom.DwaRecorderInterface": true, "metrics.dwa.mojom.DwaRecorderFactory": true, "metrics.mojom.CallStackProfileCollector": true, "metrics.mojom.CallStackProfileCollectorTest": true, "metrics.mojom.ChildHistogramFetcherFactory": true, "metrics.mojom.ChildHistogramFetcher": true, "metrics.mojom.SingleSampleMetricsProvider": true, "metrics.mojom.SingleSampleMetric": true, "mirroring.mojom.CastMessageChannel": true, "mirroring.mojom.MirroringService": true, "mirroring.mojom.AudioStreamCreatorClient": true, "mirroring.mojom.ResourceProvider": true, "mirroring.mojom.SessionObserver": true, "network_hints.mojom.NetworkHintsHandler": true, "prerender.mojom.NoStatePrefetchCanceler": true, "prerender.mojom.NoStatePrefetchMessages": true, "searchbox.mojom.PageHandlerFactory": true, "searchbox.mojom.PageHandler": true, "searchbox.mojom.Page": true, "on_device_translation.mojom.FileOperationProxy": true, "on_device_translation.mojom.OnDeviceTranslationService": true, "on_device_translation.mojom.OnDeviceTranslator": true, "on_load_script_injector.mojom.OnLoadScriptInjector": true, "optimization_guide.mojom.PageTextConsumer": true, "optimization_guide.mojom.PageTextService": true, "optimization_guide_internals.mojom.PageHandlerFactory": true, "optimization_guide_internals.mojom.Page": true, "optimization_guide.mojom.ModelSolution": true, "optimization_guide.mojom.ModelSubscriber": true, "optimization_guide.mojom.ModelBroker": true, "optimization_guide.mojom.ModelBrokerDebugObserver": true, "optimization_guide.mojom.ModelBrokerDebug": true, "page_content_annotations.mojom.PageStabilityMonitor": true, "page_content_annotations.mojom.PageStabilityMonitorManager": true, "page_image_service.mojom.PageImageServiceHandler": true, "page_load_metrics.mojom.PageLoadMetrics": true, "paint_preview.mojom.PaintPreviewRecorder": true, "password_manager.mojom.CSVPasswordParser": true, "performance_manager.mojom.DocumentCoordinationUnit": true, "performance_manager.mojom.ProcessCoordinationUnit": true, "performance_manager.mojom.ChildProcessCoordinationUnit": true, "policy.mojom.PolicyPageHandler": true, "policy.mojom.PolicyPageClient": true, "policy.mojom.PolicyPageHandlerFactory": true, "printing.mojom.PrintPreviewUI": true, "printing.mojom.PrintRenderFrame": true, "printing.mojom.PrintManagerHost": true, "private_ai.mojom.OakSession": true, "private_verification_tokens.mojom.PrivateVerificationTokensProvider": true, "record_replay.mojom.RecordReplayAgent": true, "record_replay.mojom.RecordReplayDriver": true, "remote_cocoa.mojom.AlertBridge": true, "remote_cocoa.mojom.StubInterface": true, "remote_cocoa.mojom.Application": true, "remote_cocoa.mojom.MenuHost": true, "remote_cocoa.mojom.Menu": true, "remote_cocoa.mojom.NativeWidgetNSWindow": true, "remote_cocoa.mojom.NativeWidgetNSWindowHost": true, "remote_cocoa.mojom.SelectFileDialog": true, "remote_cocoa.mojom.TextInputHost": true, "safe_browsing.mojom.SafeBrowsing": true, "safe_browsing.mojom.ThreatReporter": true, "safe_browsing.mojom.PhishingDetector": true, "safe_browsing.mojom.PhishingModelSetter": true, "safe_browsing.mojom.PhishingModelSetterTestObserver": true, "safe_browsing.mojom.PhishingImageEmbedderDetector": true, "safe_browsing.mojom.ExtensionWebRequestReporter": true, "safe_browsing.mojom.SafeBrowsingUrlChecker": true, "security_interstitials.mojom.InterstitialCommands": true, "filesystem.mojom.Directory": true, "font_service.mojom.FontService": true, "font_data_service.mojom.FontDataService": true, "heap_profiling.mojom.ProfilingClient": true, "heap_profiling.mojom.ProfilingService": true, "paint_preview.mojom.PaintPreviewCompositor": true, "paint_preview.mojom.PaintPreviewCompositorCollection": true, "patch.mojom.FilePatcher": true, "printing.mojom.PrintCompositor": true, "quarantine.mojom.Quarantine": true, "storage.mojom.IndexedDBClientStateChecker": true, "storage.mojom.IndexedDBClientKeepActive": true, "storage.mojom.IndexedDBObserver": true, "storage.mojom.IndexedDBControl": true, "storage.mojom.MockFailureInjector": true, "storage.mojom.IndexedDBControlTest": true, "storage.mojom.BlobDataItemReader": true, "storage.mojom.BlobStorageContext": true, "storage.mojom.CacheStorageObserver": true, "storage.mojom.CacheStorageControl": true, "storage.mojom.FileSystemAccessContext": true, "storage.mojom.FileLock": true, "storage.mojom.Directory": true, "storage.mojom.LocalStorageControl": true, "storage.mojom.QuotaClient": true, "storage.mojom.ServiceWorkerLiveVersionRef": true, "storage.mojom.ServiceWorkerResourceReader": true, "storage.mojom.ServiceWorkerResourceWriter": true, "storage.mojom.ServiceWorkerResourceMetadataWriter": true, "storage.mojom.ServiceWorkerStorageControl": true, "storage.mojom.SessionStorageControl": true, "storage.mojom.StorageService": true, "unzip.mojom.UnzipFilter": true, "unzip.mojom.UnzipListener": true, "unzip.mojom.Unzipper": true, "site_engagement.mojom.SiteEngagementDetailsProvider": true, "spellcheck.mojom.SpellChecker": true, "spellcheck.mojom.SpellCheckInitializationHost": true, "spellcheck.mojom.SpellCheckHost": true, "spellcheck.mojom.SpellCheckPanel": true, "spellcheck.mojom.SpellCheckPanelHost": true, "subresource_filter.mojom.SubresourceFilterAgent": true, "subresource_filter.mojom.SubresourceFilterHost": true, "subresource_filter.mojom.SubresourceFilterRulesetObserver": true, "surface_embed.mojom.SurfaceEmbed": true, "surface_embed.mojom.SurfaceEmbedHost": true, "system_media_controls.mojom.SystemMediaControls": true, "system_media_controls.mojom.SystemMediaControlsObserver": true, "translate.mojom.TranslateAgent": true, "translate.mojom.ContentTranslateDriver": true, "unexportable_keys.mojom.UnexportableKeyService": true, "url_rewrite.mojom.UrlRequestRulesReceiver": true, "user_data_importer.mojom.BookmarkHtmlParser": true, "visitedlink.mojom.VisitedLinkNotificationSink": true, "viz.mojom.VizDebugOutput": true, "vrp_flags.mojom.VrpFlags": true, "vrp_flags.mojom.VrpFlagsFactory": true, "wallet.mojom.ImageExtractor": true, "web_cache.mojom.WebCache": true, "web_package.mojom.WebBundleParserFactory": true, "web_package.mojom.WebBundleParser": true, "web_package.mojom.BundleDataSource": true, "webapps.mojom.WebPageMetadataAgent": true, "chrome_urls.mojom.PageHandlerFactory": true, "chrome_urls.mojom.PageHandler": true, "chrome_urls.mojom.Page": true, "attribution_internals.mojom.Observer": true, "attribution_internals.mojom.Handler": true, "attribution_internals.mojom.Factory": true, "storage.mojom.IdbInternalsHandler": true, "private_aggregation_internals.mojom.Observer": true, "private_aggregation_internals.mojom.Handler": true, "private_aggregation_internals.mojom.Factory": true, "mojom.ProcessInternalsHandler": true, "traces_internals.mojom.TracesInternalsHandlerFactory": true, "traces_internals.mojom.PageHandler": true, "traces_internals.mojom.Page": true, "webxr.mojom.WebXrInternalsHandler": true, "webxr.mojom.XRInternalsSessionListener": true, "content.mojom.AgentSchedulingGroupHost": true, "content.mojom.AgentSchedulingGroup": true, "content.mojom.RouteProvider": true, "content.mojom.ChildProcessHost": true, "content.mojom.ChildProcess": true, "content.mojom.DomAutomationControllerHost": true, "content.mojom.MhtmlFileWriter": true, "content.mojom.FieldTrialRecorder": true, "content.mojom.FrameHTMLSerializerHandler": true, "content.mojom.Frame": true, "content.mojom.FrameBindingsControl": true, "content.mojom.NavigationRendererCancellationListener": true, "content.mojom.NavigationRendererIgnoreDuplicateNavigationListener": true, "content.mojom.FrameHost": true, "content.mojom.GinJavaBridge": true, "content.mojom.GinJavaBridgeRemoteObject": true, "content.mojom.GinJavaBridgeHost": true, "content.mojom.InputInjector": true, "content.mojom.MediaInternalLogRecords": true, "content.mojom.MemoryConsumerTraitsTest": true, "content.mojom.ChildMemoryCoordinator": true, "content.mojom.ChildMemoryConsumerRegistryHost": true, "content.mojom.MemoryCoordinatorDiagnosticsHost": true, "content.mojom.NavigationClient": true, "content.mojom.RenderMessageFilter": true, "remote_cocoa.mojom.PopupMenuRunner": true, "remote_cocoa.mojom.RenderWidgetHostNSView": true, "remote_cocoa.mojom.RenderWidgetHostNSViewHost": true, "content.mojom.Renderer": true, "content.mojom.RendererHost": true, "content.mojom.RendererVariationsConfiguration": true, "content.mojom.SandboxSupport": true, "content.mojom.SyntheticTrialConfiguration": true, "content.mojom.ThreadTypeSwitcher": true, "remote_cocoa.mojom.WebContentsNSView": true, "remote_cocoa.mojom.WebContentsNSViewHost": true, "content.mojom.WebUIHost": true, "content.mojom.WebUI": true, "content.mojom.FontCacheWin": true, "content.mojom.ResourceUsageReporter": true, "content.mojom.TestInterfaceForDefer": true, "content.mojom.TestInterfaceForGrant": true, "content.mojom.TestInterfaceForCancel": true, "content.mojom.TestInterfaceForUnexpected": true, "content.mojom.MojoContextProvider": true, "content.mojom.TestService": true, "auction_worklet.mojom.AuctionNetworkEventsHandler": true, "auction_worklet.mojom.AuctionSharedStorageHost": true, "auction_worklet.mojom.LoadSellerWorkletClient": true, "auction_worklet.mojom.AuctionWorkletService": true, "auction_worklet.mojom.GenerateBidClient": true, "auction_worklet.mojom.GenerateBidFinalizer": true, "auction_worklet.mojom.BidderWorklet": true, "auction_worklet.mojom.ScoreAdClient": true, "auction_worklet.mojom.SellerWorklet": true, "auction_worklet.mojom.TrustedSignalsCacheClient": true, "auction_worklet.mojom.TrustedSignalsCache": true, "content.mojom.MainFrameCounterTest": true, "content.mojom.MemoryCoordinatorTest": true, "content.mojom.MemoryCoordinatorTestClient": true, "content.mojom.PowerMonitorTest": true, "content.mojom.RenderFrameTestHelper": true, "content.mojom.FrameHostTestInterface": true, "content.mojom.FakeBluetoothChooser": true, "content.mojom.FakeBluetoothChooserFactory": true, "content.mojom.FakeBluetoothChooserClient": true, "content.mojom.MojoEcho": true, "content.optional_numerics_unittest.mojom.Params": true, "content.optional_numerics_unittest.mojom.ResponseParams": true, "content.optional_numerics_unittest.mojom.InterfaceV0": true, "content.optional_numerics_unittest.mojom.InterfaceV2": true, "content.mojom.WebTestRenderFrame": true, "content.mojom.WebTestControlHost": true, "content.mojom.NonAssociatedWebTestControlHost": true, "content.mojom.WebTestBluetoothFakeAdapterSetter": true, "bluetooth.mojom.Advertisement": true, "bluetooth.mojom.DiscoverySession": true, "bluetooth.mojom.Socket": true, "bluetooth.mojom.ServerSocket": true, "bluetooth.mojom.GattService": true, "bluetooth.mojom.GattServiceObserver": true, "bluetooth.mojom.Adapter": true, "bluetooth.mojom.AdapterObserver": true, "bluetooth.mojom.Device": true, "bluetooth.mojom.FakeBluetooth": true, "bluetooth.mojom.FakeCentral": true, "bluetooth.mojom.FakeCentralClient": true, "device.mojom.GamepadObserver": true, "device.mojom.GamepadMonitor": true, "device.mojom.GamepadHapticsManager": true, "device.mojom.XRSessionController": true, "device.mojom.XRRuntimeEventListener": true, "device.mojom.XRRuntime": true, "device.mojom.ImmersiveOverlay": true, "device.mojom.IsolatedXRRuntimeProviderClient": true, "device.mojom.IsolatedXRRuntimeProvider": true, "device.mojom.XRDeviceService": true, "device.mojom.XRDeviceServiceHost": true, "device_test.mojom.XRTestHook": true, "device_test.mojom.XRServiceTestHook": true, "device.mojom.VRService": true, "device.mojom.XRSessionMetricsRecorder": true, "device.mojom.VRServiceClient": true, "device.mojom.XREnvironmentIntegrationProvider": true, "device.mojom.XRFrameDataProvider": true, "device.mojom.XRPresentationProvider": true, "device.mojom.XRPresentationClient": true, "device.mojom.XRSessionClient": true, "device.mojom.XRLayerManager": true, "device.mojom.WebXrInternalsRendererListener": true, "extensions.mime_handler.MimeHandlerService": true, "extensions.mime_handler.BeforeUnloadControl": true, "extensions.mojom.AppWindow": true, "extensions.mojom.RendererAutomationRegistry": true, "extensions.mojom.EventDispatcher": true, "extensions.mojom.EventRouter": true, "extensions.mojom.LocalFrame": true, "extensions.mojom.LocalFrameHost": true, "extensions.mojom.GuestView": true, "extensions.mojom.MimeHandlerViewContainerManager": true, "extensions.KeepAlive": true, "extensions.mojom.MessagePort": true, "extensions.mojom.MessagePortHost": true, "extensions.mojom.Renderer": true, "extensions.mojom.RendererHost": true, "extensions.mojom.ServiceWorker": true, "extensions.mojom.ServiceWorkerHost": true, "mojom.WebEngineMediaResourceProvider": true, "gpu.mojom.GpuChannel": true, "gpu.mojom.CommandBuffer": true, "gpu.mojom.CommandBufferClient": true, "gpu.mojom.DCOMPTexture": true, "gpu.mojom.DCOMPTextureClient": true, "gpu.mojom.SharedImagePoolClientInterface": true, "ai.mojom.AIPrototypingService": true, "ai.mojom.EnhancedCalendarService": true, "ai.mojom.ModelLedSuggestionsService": true, "ai.mojom.SmartTabGroupingService": true, "ai.mojom.TabOrganizationService": true, "inspect.mojom.PageHandler": true, "inspect.mojom.Page": true, "inspect.mojom.PageHandlerFactory": true, "web.mojom.WebUsageController": true, "IPC.mojom.Channel": true, "IPC.mojom.ChannelBootstrap": true, "media.mojom.ImageCapture": false, "media.mojom.VideoCaptureObserver": true, "media.mojom.VideoCaptureHost": true, "cros.mojom.Camera3CallbackOps": true, "cros.mojom.Camera3DeviceOps": true, "cros.mojom.CameraAppDeviceProvider": true, "cros.mojom.CameraAppDeviceBridge": true, "cros.mojom.CameraAppDevice": true, "cros.mojom.ResultMetadataObserver": true, "cros.mojom.CameraEventObserver": true, "cros.mojom.DocumentCornersObserver": true, "cros.mojom.CameraInfoObserver": true, "cros.mojom.StillCaptureResultObserver": true, "cros.mojom.CameraModuleCallbacks": true, "cros.mojom.VendorTagOps": true, "cros.mojom.CameraModule": true, "cros.mojom.CameraHalClient": true, "cros.mojom.KioskVisionObserver": true, "cros.mojom.CameraHalDispatcher": true, "cros.mojom.CrosCameraServiceObserver": true, "cros.mojom.CrosCameraService": true, "cros.mojom.CrosDocumentScanner": true, "cros.mojom.JpegAcceleratorProvider": true, "cros.mojom.CrosDisplayObserver": true, "cros.mojom.CrosLidObserver": true, "cros.mojom.CrosPowerObserver": true, "cros.mojom.CrosSystemEventMonitor": true, "cros.mojom.VideoCaptureDeviceInfoObserver": true, "cros.mojom.VideoCaptureDeviceInfoMonitor": true, "midi.mojom.MidiSessionClient": true, "midi.mojom.MidiSessionProvider": true, "midi.mojom.MidiSession": true, "media.mojom.AndroidOverlayProvider": true, "media.mojom.AndroidOverlay": true, "media.mojom.AndroidOverlayClient": true, "media.mojom.AudioDecoder": true, "media.mojom.AudioDecoderClient": true, "media.mojom.AudioEncoder": true, "media.mojom.AudioEncoderClient": true, "media.mojom.AudioInputStream": true, "media.mojom.AudioInputStreamClient": true, "media.mojom.AudioInputStreamObserver": true, "media.mojom.AudioLog": true, "media.mojom.AudioLogFactory": true, "media.mojom.AudioOutputStream": true, "media.mojom.AudioOutputStreamObserver": true, "media.mojom.AudioOutputStreamProvider": true, "media.mojom.AudioOutputStreamProviderClient": true, "media.mojom.DeviceSwitchInterface": true, "media.mojom.AudioProcessorControls": true, "media.mojom.LocalMuter": true, "media.mojom.AudioStreamFactory": true, "media.mojom.CastApplicationMediaInfoManager": true, "media.mojom.CdmContextEventCallback": true, "media.mojom.CdmContextForOOPVD": true, "media.mojom.CdmDocumentService": true, "media.mojom.CdmService": true, "media.mojom.CdmServiceBroker": true, "media.mojom.CdmStorage": true, "media.mojom.CdmFile": true, "media.mojom.ContentDecryptionModule": true, "media.mojom.ContentDecryptionModuleClient": true, "media.mojom.CdmFactory": true, "media.mojom.DCOMPSurfaceRegistry": true, "media.mojom.Decryptor": true, "media.mojom.FrameResourceReleaser": true, "media.mojom.DemuxerStream": true, "media.mojom.MuteStateObserver": true, "media.mojom.FrameInterfaceFactory": true, "media.mojom.FuchsiaMediaCdmProvider": true, "media.mojom.FuchsiaMediaCodecProvider": true, "media.mojom.VideoDecoderTracker": true, "media.mojom.InterfaceFactory": true, "media.mojom.KeySystemSupportObserver": true, "media.mojom.KeySystemSupport": true, "media.mojom.MediaDrmStorage": true, "media.mojom.MediaFoundationPreferences": true, "media.mojom.GpuInfoObserver": true, "media.mojom.MediaFoundationService": true, "media.mojom.MediaFoundationServiceBroker": true, "media.mojom.MediaLog": true, "media.mojom.MediaMetricsProvider": true, "media.mojom.MediaPlayer": true, "media.mojom.MediaPlayerObserverClient": true, "media.mojom.MediaPlayerObserver": true, "media.mojom.MediaPlayerHost": true, "media.mojom.MediaService": true, "media.mojom.MediaDrmSupport": true, "media.mojom.OutputProtection": true, "media.mojom.PlaybackEventsRecorder": true, "media.mojom.ProvisionFetcher": true, "media.mojom.RemoterFactory": true, "media.mojom.RemotingDataStreamSender": true, "media.mojom.Remoter": true, "media.mojom.RemotingSource": true, "media.mojom.Remotee": true, "media.mojom.RemotingSink": true, "media.mojom.RemotingDataStreamReceiver": true, "media.mojom.Renderer": true, "media.mojom.RendererClient": true, "media.mojom.FlingingRendererClientExtension": true, "media.mojom.MediaFoundationRendererExtension": true, "media.mojom.MediaFoundationRendererObserver": true, "media.mojom.MediaFoundationRendererNotifier": true, "media.mojom.SpeechRecognitionContext": true, "media.mojom.SpeechRecognitionRecognizer": true, "media.mojom.SpeechRecognitionRecognizerClient": true, "media.mojom.SpeechRecognitionBrowserObserver": true, "media.mojom.SpeechRecognitionSurface": true, "media.mojom.SpeechRecognitionSurfaceClient": true, "media.mojom.SpeechRecognitionClientBrowserInterface": true, "media.mojom.SpeechRecognitionAudioForwarder": true, "media.mojom.AudioSourceSpeechRecognitionContext": true, "media.mojom.SpeechRecognitionService": true, "media.mojom.AudioSourceFetcher": true, "media.mojom.SpeechRecognizer": true, "media.mojom.OnDeviceSpeechRecognition": true, "media.mojom.SpeechRecognitionSession": true, "media.mojom.SpeechRecognitionSessionClient": true, "media.mojom.VideoDecodePerfHistory": true, "media.mojom.VideoDecodeStatsRecorder": true, "media.mojom.VideoFrameHandleReleaser": true, "media.mojom.VideoDecoder": true, "media.mojom.VideoDecoderClient": true, "media.mojom.VideoDecoderFactoryProcess": true, "media.mojom.VideoEncodeAcceleratorProvider": true, "media.mojom.VideoEncodeAcceleratorProviderFactory": true, "media.mojom.VideoEncodeAccelerator": true, "media.mojom.VideoEncodeAcceleratorClient": true, "media.mojom.VideoEncoderMetricsProvider": true, "media.mojom.WatchTimeRecorder": true, "media.mojom.WebrtcVideoPerfRecorder": true, "media.mojom.WebrtcVideoPerfHistory": true, "mojo_base.mojom.Binder": true, "mojo_base.mojom.GenericAssociatedInterface": true, "fuzz.mojom.FuzzDummyInterface": true, "fuzz.mojom.FuzzInterface": true, "pdf.mojom.SaveDataBufferHandler": true, "pdf.mojom.PdfListener": true, "pdf.mojom.PdfHost": true, "remoting.mojom.ChromotingHostServices": true, "remoting.mojom.ChromotingSessionServices": true, "remoting.mojom.DesktopSessionRequestHandler": true, "remoting.mojom.DesktopSessionManager": true, "remoting.mojom.DesktopSessionAgent": true, "remoting.mojom.FileWriter": true, "remoting.mojom.FileReader": true, "remoting.mojom.DesktopSessionControl": true, "remoting.mojom.VideoCapturer": true, "remoting.mojom.VideoCapturerEventHandler": true, "remoting.mojom.DesktopSessionEventHandler": true, "remoting.mojom.DesktopSessionStateHandler": true, "remoting.mojom.WorkerProcessControl": true, "remoting.mojom.DesktopProcessControl": true, "remoting.mojom.LoginSessionService": true, "remoting.mojom.PeerConnectionProcessControl": true, "remoting.mojom.SecurityKeyForwarder": true, "remoting.mojom.SupportHostObserver": true, "remoting.mojom.RemoteUrlOpener": true, "remoting.mojom.RemotingHostControl": true, "remoting.mojom.DesktopSessionConnectionEvents": true, "remoting.mojom.HostStatusObserver": true, "remoting.mojom.WebAuthnRequestCanceller": true, "remoting.mojom.WebAuthnProxy": true, "sandbox.mac.mojom.TraitsTestService": true, "ax.android.mojom.AccessibilityHelperHost": true, "ax.android.mojom.AccessibilityHelperInstance": true, "ax.mojom.AssistiveTechnologyController": true, "ax.mojom.AccessibilityService": true, "ax.mojom.AccessibilityServiceClient": true, "ax.mojom.Autoclick": true, "ax.mojom.AutoclickClient": true, "ax.mojom.Automation": true, "ax.mojom.AutomationClient": true, "ax.mojom.AccessibilityFileLoader": true, "ax.mojom.SpeechRecognitionEventObserver": true, "ax.mojom.SpeechRecognition": true, "ax.mojom.TtsUtteranceClient": true, "ax.mojom.Tts": true, "ax.mojom.UserInput": true, "ax.mojom.UserInterface": true, "audio.mojom.AudioService": true, "audio.mojom.DebugRecordingFileProvider": true, "audio.mojom.DebugRecording": true, "audio.mojom.DeviceListener": true, "audio.mojom.DeviceNotifier": true, "audio.mojom.LogFactoryManager": true, "audio.mojom.MlModelManager": true, "audio.mojom.SystemInfo": true, "audio.mojom.TestingApi": true, "cert_verifier.mojom.CertVerifierServiceFactory": true, "data_decoder.mojom.CborParser": true, "data_decoder.mojom.DataDecoderService": true, "data_decoder.mojom.Gzipper": true, "data_decoder.mojom.ImageDecoder": true, "data_decoder.mojom.StructuredHeadersParser": true, "data_decoder.mojom.XmlParser": true, "device.mojom.BatteryMonitor": true, "device.mojom.DeviceService": true, "device.mojom.FingerprintObserver": true, "device.mojom.Fingerprint": true, "device.mojom.Geolocation": true, "device.mojom.GeolocationContext": true, "device.mojom.GeolocationControl": true, "device.mojom.GeolocationInternalsObserver": true, "device.mojom.GeolocationInternals": true, "device.mojom.HidManagerClient": true, "device.mojom.HidManager": true, "device.mojom.HidConnection": true, "device.mojom.HidConnectionClient": true, "device.mojom.HidConnectionWatcher": true, "device.mojom.InputDeviceManagerClient": true, "device.mojom.InputDeviceManager": true, "device.mojom.MtpManagerClient": true, "device.mojom.MtpManager": true, "device.mojom.NFC": true, "device.mojom.NFCClient": true, "device.mojom.NFCProvider": true, "device.mojom.PowerMonitor": true, "device.mojom.PowerMonitorClient": true, "device.mojom.PressureManager": true, "device.mojom.PressureClient": true, "device.mojom.PublicIpAddressGeolocationProvider": true, "device.mojom.ScreenOrientation": true, "device.mojom.ScreenOrientationListener": true, "device.mojom.Sensor": false, "device.mojom.SensorClient": false, "device.mojom.SensorConnectionWatcher": false, "device.mojom.SensorProvider": false, "device.mojom.SerialPortManager": true, "device.mojom.SerialPortManagerClient": true, "device.mojom.SerialPort": true, "device.mojom.SerialPortClient": true, "device.mojom.SerialPortConnectionWatcher": true, "device.mojom.SmartCardTransaction": true, "device.mojom.SmartCardConnection": true, "device.mojom.SmartCardConnectionWatcher": true, "device.mojom.SmartCardContext": true, "device.mojom.SmartCardContextFactory": true, "device.mojom.TimeZoneMonitor": true, "device.mojom.TimeZoneMonitorClient": true, "device.mojom.UsbDevice": false, "device.mojom.UsbDeviceClient": false, "device.mojom.UsbDeviceManager": false, "device.mojom.UsbDeviceManagerClient": false, "device.mojom.UsbDeviceManagerTest": true, "device.mojom.VibrationManager": true, "device.mojom.VibrationManagerListener": true, "device.mojom.WakeLock": true, "device.mojom.WakeLockContext": true, "device.mojom.WakeLockProvider": true, "device.mojom.WakeLockObserver": true, "image_annotation.mojom.ImageProcessor": true, "image_annotation.mojom.Annotator": true, "image_annotation.mojom.ImageAnnotationService": true, "media_session.mojom.AudioFocusObserver": true, "media_session.mojom.AudioFocusRequestClient": true, "media_session.mojom.AudioFocusManager": true, "media_session.mojom.AudioFocusManagerDebug": true, "media_session.mojom.MediaControllerManager": true, "media_session.mojom.MediaController": true, "media_session.mojom.MediaControllerObserver": true, "media_session.mojom.MediaControllerImageObserver": true, "media_session.mojom.MediaSessionObserver": true, "media_session.mojom.MediaSession": true, "media_session.mojom.MediaSessionService": true, "ukm.mojom.SingularUkmInterface": true, "ukm.mojom.UkmRecorderClientInterface": true, "ukm.mojom.UkmRecorderInterface": true, "ukm.mojom.UkmRecorderFactory": true, "network.mojom.TraitsTestService": true, "network.mojom.AcceptCHFrameObserver": true, "network.mojom.CacheEncryptionProvider": true, "cert_verifier.mojom.URLLoaderFactoryConnector": true, "cert_verifier.mojom.CertVerifierService": true, "cert_verifier.mojom.CertVerifierServiceClient": true, "cert_verifier.mojom.CertVerifierRequest": true, "cert_verifier.mojom.CertVerifierServiceUpdater": true, "network.mojom.ChunkedDataPipeGetter": true, "network.mojom.ConnectionChangeObserverClient": true, "network.mojom.CookieAccessObserver": true, "network.mojom.CookieEncryptionProvider": true, "network.mojom.CookieChangeListener": true, "network.mojom.CookieManager": true, "network.mojom.CrossOriginEmbedderPolicyReporter": true, "network.mojom.CrossOriginOpenerPolicyReporter": true, "network.mojom.DataPipeGetter": true, "network.mojom.DeviceBoundSessionManager": true, "network.mojom.DeviceBoundSessionAccessObserver": true, "network.mojom.DeviceBoundSessionEventObserver": true, "network.mojom.DevToolsObserver": true, "network.mojom.DocumentIsolationPolicyReporter": true, "network.mojom.FirstPartySetsAccessDelegate": true, "network.mojom.ResolveHostHandle": true, "network.mojom.ResolveHostClient": true, "network.mojom.MdnsListenClient": true, "network.mojom.HostResolver": true, "network.mojom.DnsConfigChangeManagerClient": true, "network.mojom.DnsConfigChangeManager": true, "network.mojom.FileEnumerator": true, "network.mojom.HttpCacheBackendFileOperations": true, "network.mojom.HttpCacheBackendFileOperationsFactory": true, "network.mojom.MdnsResponder": true, "network.mojom.NetLogExporter": true, "network.mojom.NetLogProxySource": true, "network.mojom.NetLogProxySink": true, "network.mojom.NetworkAnnotationMonitor": true, "network.mojom.NetworkChangeManagerClient": true, "network.mojom.NetworkChangeManager": true, "network.mojom.CustomProxyConnectionObserver": true, "network.mojom.CustomProxyConfigClient": true, "network.mojom.TrustedHeaderClient": true, "network.mojom.TrustedURLLoaderHeaderClient": true, "network.mojom.PreloadedSharedDictionaryInfoHandle": true, "network.mojom.NetworkContext": true, "network.mojom.NetworkContextClient": true, "network.mojom.NetworkInterfaceChangeListener": true, "network.mojom.NetworkQualityEstimatorManagerClient": true, "network.mojom.NetworkQualityEstimatorManager": true, "network.mojom.NetworkService": true, "network.mojom.NetworkContextCreator": true, "network.mojom.DurableMessageCollector": true, "network.mojom.SimpleCacheEntry": true, "network.mojom.SimpleCacheEntryEnumerator": true, "network.mojom.SimpleCache": true, "network.mojom.NetworkServiceTest": true, "network.mojom.ObliviousHttpClient": true, "network.mojom.P2PNetworkNotificationClient": true, "network.mojom.P2PSocketManager": true, "network.mojom.P2PSocket": true, "network.mojom.P2PSocketClient": true, "network.mojom.P2PTrustedSocketManagerClient": true, "network.mojom.P2PTrustedSocketManager": true, "network.mojom.ProxyConfigClient": true, "network.mojom.ProxyConfigPollerClient": true, "network.mojom.ProxyErrorClient": true, "network.mojom.ProxyLookupClient": true, "network.mojom.ProxyResolvingSocket": true, "network.mojom.ProxyResolvingSocketFactory": true, "network.mojom.ReportingApiObserver": true, "network.mojom.RestrictedCookieManager": true, "network.mojom.RestrictedUDPSocket": true, "network.mojom.SharedDictionaryAccessObserver": true, "network.mojom.SocketBroker": true, "network.mojom.SocketConnectionTracker": true, "network.mojom.SSLConfigClient": true, "network.mojom.SystemDnsResolver": true, "network.mojom.TCPBoundSocket": true, "network.mojom.TCPConnectedSocket": true, "network.mojom.SocketObserver": true, "network.mojom.TCPServerSocket": true, "network.mojom.TLSClientSocket": true, "network.mojom.TrustTokenAccessObserver": true, "network.mojom.TrustTokenQueryAnswerer": true, "network.mojom.UDPSocket": true, "network.mojom.UDPSocketListener": true, "network.mojom.URLLoader": true, "network.mojom.URLLoaderClient": true, "network.mojom.URLLoaderFactory": true, "network.mojom.ClientCertificateResponder": true, "network.mojom.SSLPrivateKey": true, "network.mojom.AuthChallengeResponder": true, "network.mojom.URLLoaderNetworkServiceObserver": true, "network.mojom.WebBundleHandle": true, "network.mojom.WebTransport": true, "network.mojom.WebTransportClient": true, "network.mojom.WebTransportHandshakeClient": true, "network.mojom.WebSocketAuthenticationHandler": true, "network.mojom.WebSocketHandshakeClient": true, "network.mojom.WebSocketClient": true, "network.mojom.WebSocket": true, "on_device_model.mojom.DownloadObserver": true, "on_device_model.mojom.StreamingResponder": true, "on_device_model.mojom.ContextClient": true, "on_device_model.mojom.Session": true, "on_device_model.mojom.OnDeviceModel": true, "on_device_model.mojom.TextSafetySession": true, "on_device_model.mojom.TextSafetyModel": true, "on_device_model.mojom.AsrStreamResponder": true, "on_device_model.mojom.AsrStreamInput": true, "on_device_model.mojom.PlatformModelProgressObserver": true, "on_device_model.mojom.OnDeviceModelService": true, "on_device_model.mojom.OnDeviceModelPlatformService": true, "passage_embeddings.mojom.PassageEmbedder": true, "passage_embeddings.mojom.PassageEmbeddingsService": true, "prefs.mojom.ResetOnLoadObserver": true, "prefs.mojom.TrackedPreferenceValidationDelegate": true, "proxy_resolver.mojom.HostResolverRequestClient": true, "proxy_resolver.mojom.ProxyResolver": true, "proxy_resolver.mojom.ProxyResolverRequestClient": true, "proxy_resolver.mojom.ProxyResolverFactory": true, "proxy_resolver.mojom.ProxyResolverFactoryRequestClient": true, "proxy_resolver.mojom.SystemProxyResolver": true, "memory_instrumentation.mojom.ClientProcess": true, "memory_instrumentation.mojom.HeapProfiler": true, "memory_instrumentation.mojom.HeapProfilerHelper": true, "memory_instrumentation.mojom.Coordinator": true, "memory_instrumentation.mojom.CoordinatorConnector": true, "screen_ai.mojom.ScreenAIServiceShutdownHandler": true, "screen_ai.mojom.ScreenAIServiceFactory": true, "screen_ai.mojom.ScreenAIAnnotator": true, "screen_ai.mojom.Screen2xMainContentExtractor": true, "screen_ai.mojom.OCRService": true, "screen_ai.mojom.MainContentExtractionService": true, "service_manager.mojom.ProcessMetadata": true, "service_manager.mojom.Connector": true, "service_manager.mojom.InterfaceProvider": true, "service_manager.mojom.Service": true, "service_manager.mojom.ServiceControl": true, "service_manager.mojom.ServiceManagerListener": true, "service_manager.mojom.ServiceManager": true, "shape_detection.mojom.BarcodeDetection": true, "shape_detection.mojom.BarcodeDetectionProvider": true, "shape_detection.mojom.FaceDetection": true, "shape_detection.mojom.FaceDetectionProvider": true, "shape_detection.mojom.ShapeDetectionService": true, "shape_detection.mojom.TextDetection": true, "echo.mojom.EchoService": true, "tracing.mojom.BackgroundTracingAgentClient": true, "tracing.mojom.BackgroundTracingAgent": true, "tracing.mojom.BackgroundTracingAgentProvider": true, "tracing.mojom.ProducerHost": true, "tracing.mojom.ProducerClient": true, "tracing.mojom.PerfettoService": true, "tracing.mojom.ConsumerHost": true, "tracing.mojom.TracingSessionHost": true, "tracing.mojom.TracingSessionClient": true, "tracing.mojom.SystemTracingService": true, "tracing.mojom.TracedProcess": true, "tracing.mojom.TracingService": true, "video_capture.mojom.Device": true, "video_capture.mojom.DevicesChangedObserver": true, "video_capture.mojom.Producer": true, "video_capture.mojom.TestingControls": true, "video_capture.mojom.VideoCaptureService": true, "video_capture.mojom.VideoFrameAccessHandler": true, "video_capture.mojom.VideoFrameHandler": true, "video_capture.mojom.PushVideoStreamSubscription": true, "video_capture.mojom.VideoSource": true, "video_capture.mojom.VideoSourceProvider": true, "video_capture.mojom.SharedMemoryVirtualDevice": true, "video_capture.mojom.TextureVirtualDevice": true, "video_capture.mojom.GpuMemoryBufferVirtualDevice": true, "viz.mojom.BeginFrameObserver": true, "viz.mojom.DisplayPrivate": true, "viz.mojom.DisplayClient": true, "viz.mojom.ExternalBeginFrameController": true, "viz.mojom.ExternalBeginFrameControllerClient": true, "viz.mojom.FrameSinkManager": true, "viz.mojom.FrameSinkManagerClient": true, "viz.mojom.RendererInputRouterDelegateRegistry": true, "viz.mojom.FrameSinkManagerTestApi": true, "viz.mojom.FrameSinkVideoConsumerFrameCallbacks": true, "viz.mojom.FrameSinkVideoConsumer": true, "viz.mojom.FrameSinkVideoCapturer": true, "viz.mojom.FrameSinkVideoCaptureOverlay": true, "viz.mojom.FrameSinksMetricsRecorder": true, "viz.mojom.LayeredWindowUpdater": true, "viz.mojom.VSyncParameterObserver": true, "viz.mojom.GpuHost": true, "viz.mojom.GpuLogging": true, "viz.mojom.GpuService": true, "viz.mojom.InfoCollectionGpuService": true, "viz.mojom.VizMain": true, "viz.mojom.CompositingModeWatcher": true, "viz.mojom.CompositingModeReporter": true, "viz.mojom.CompositorFrameSink": true, "viz.mojom.CompositorFrameSinkClient": true, "viz.mojom.CopyOutputResultSender": true, "viz.mojom.FrameSinkBundle": true, "viz.mojom.FrameSinkBundleClient": true, "viz.mojom.LayerContext": true, "viz.mojom.LayerContextClient": true, "viz.mojom.TextureReleaser": true, "viz.mojom.VideoDetectorObserver": true, "viz.mojom.Gpu": true, "viz.mojom.InputTargetClient": true, "webnn.mojom.WebNNCompilerContext": true, "webnn.mojom.WebNNCompilerService": true, "webnn.mojom.WebNNContext": true, "webnn.mojom.WebNNContextProvider": true, "webnn.mojom.WebNNWeightsFileCreator": true, "webnn.mojom.WebNNGraphBuilder": true, "webnn.mojom.WebNNModelLoader": true, "webnn.mojom.WebNNServiceIntrospectionClient": true, "webnn.mojom.WebNNServiceIntrospection": true, "webnn.mojom.WebNNTensor": true, "storage.mojom.QuotaInternalsHandler": true, "storage.mojom.QuotaManagerObserver": true, "blink.mojom.AIClassifier": false, "blink.mojom.AIManagerCreateLanguageModelClient": false, "blink.mojom.AILanguageModel": false, "blink.mojom.AIManagerCreateWriterClient": false, "blink.mojom.AIManagerCreateRewriterClient": false, "blink.mojom.AIManagerCreateSummarizerClient": false, "blink.mojom.AIManagerCreateProofreaderClient": false, "blink.mojom.AIManagerCreateClassifierClient": false, "blink.mojom.AIManagerCreateSemanticEmbedderClient": false, "blink.mojom.AIManager": false, "blink.mojom.AIProofreader": false, "blink.mojom.AIRewriter": false, "blink.mojom.AISemanticEmbedder": false, "blink.mojom.AISummarizer": false, "blink.mojom.AIWriter": false, "blink.mojom.ModelStreamingResponder": false, "blink.mojom.AndroidFontLookup": false, "blink.mojom.AnnotationAgent": false, "blink.mojom.AnnotationAgentHost": false, "blink.mojom.AnnotationAgentContainer": false, "blink.mojom.AppBannerController": false, "blink.mojom.AppBannerEvent": false, "blink.mojom.AppBannerService": false, "blink.mojom.AssociatedInterface": false, "blink.mojom.AssociatedInterfaceProvider": false, "blink.mojom.AutoplayConfigurationClient": false, "blink.mojom.BackgroundFetchRegistrationObserver": false, "blink.mojom.BackgroundFetchService": false, "blink.mojom.BackgroundFetchRegistrationService": false, "blink.mojom.OneShotBackgroundSyncService": false, "blink.mojom.PeriodicBackgroundSyncService": false, "blink.mojom.BadgeService": false, "blink.mojom.BlobReaderClient": false, "blink.mojom.Blob": false, "blink.mojom.ProgressClient": false, "blink.mojom.BlobRegistry": false, "blink.mojom.BlobURLStore": false, "blink.mojom.BlobURLToken": false, "blink.mojom.BytesProvider": false, "blink.mojom.FileBackedBlobFactory": false, "blink.mojom.WebBluetoothService": true, "blink.mojom.WebBluetoothServerClient": true, "blink.mojom.WebBluetoothCharacteristicClient": true, "blink.mojom.WebBluetoothAdvertisementClient": true, "blink.mojom.BroadcastChannelClient": true, "blink.mojom.BroadcastChannelProvider": true, "blink.mojom.BrowserInterfaceBroker": false, "blink.mojom.BrowsingTopicsDocumentService": false, "blink.mojom.BucketHost": true, "blink.mojom.BucketManagerHost": true, "blink.mojom.CacheStorageCache": false, "blink.mojom.CacheStorage": false, "blink.mojom.CallStackGenerator": false, "blink.mojom.ColorChooserFactory": false, "blink.mojom.ColorChooser": false, "blink.mojom.ColorChooserClient": false, "blink.mojom.EyeDropperChooser": false, "blink.mojom.DateTimeChooser": false, "blink.mojom.FileChooser": false, "blink.mojom.PopupMenuClient": false, "blink.mojom.IsolatedWebAppApiBridge": false, "blink.mojom.ClipboardListener": false, "blink.mojom.ClipboardHost": false, "blink.mojom.CloseListener": false, "blink.mojom.WebPressureManager": false, "blink.mojom.WebPressureClient": false, "blink.mojom.ContactsManager": false, "blink.mojom.AIPageContentAgent": false, "blink.mojom.PaidContentMetadataObserver": false, "blink.mojom.MetaTagsObserver": false, "blink.mojom.FrameMetadataObserverRegistry": false, "blink.mojom.InnerHtmlAgent": false, "blink.mojom.InnerTextAgent": false, "blink.mojom.ScriptToolHost": false, "blink.mojom.ModelContextHost": false, "blink.mojom.ModelContext": false, "blink.mojom.ContentIndexService": false, "blink.mojom.ContextMenuClient": false, "blink.mojom.AttributionHost": false, "blink.mojom.CookieStore": false, "blink.mojom.CrashMemoryMetricsReporter": false, "blink.mojom.CredentialManager": true, "blink.mojom.ManagedConfigurationObserver": false, "blink.mojom.DeviceAPIService": false, "blink.mojom.ManagedConfigurationService": false, "blink.mojom.DevicePostureProvider": false, "blink.mojom.DevicePostureClient": false, "blink.mojom.DevToolsAgent": false, "blink.mojom.DevToolsAgentHost": false, "blink.mojom.DevToolsSession": false, "blink.mojom.DevToolsSessionHost": false, "blink.mojom.DevToolsFrontend": false, "blink.mojom.DevToolsFrontendHost": false, "payments.mojom.DigitalGoods": false, "payments.mojom.DigitalGoodsFactory": false, "blink.mojom.DirectSocketsService": true, "blink.mojom.DiskAllocator": false, "blink.mojom.DocumentMetadata": false, "blink.mojom.DomStorageProvider": false, "blink.mojom.DomStorage": false, "blink.mojom.DomStorageClient": false, "blink.mojom.SessionStorageNamespace": false, "blink.mojom.StorageAreaObserver": false, "blink.mojom.StorageArea": false, "blink.mojom.DWriteFontProxy": true, "payments.facilitated.mojom.PaymentLinkHandler": false, "blink.mojom.ObservedFeature": false, "blink.mojom.FeatureObserver": false, "blink.mojom.FencedFrameOwnerHost": true, "blink.mojom.FileUtilitiesHost": false, "blink.mojom.FileSystemAccessAccessHandleHost": false, "blink.mojom.FileSystemAccessDataTransferToken": false, "blink.mojom.FileSystemAccessDirectoryEntriesListener": false, "blink.mojom.FileSystemAccessDirectoryHandle": false, "blink.mojom.FileSystemAccessFileDelegateHost": false, "blink.mojom.FileSystemAccessFileHandle": false, "blink.mojom.FileSystemAccessFileModificationHost": false, "blink.mojom.FileSystemAccessFileWriter": false, "blink.mojom.FileSystemAccessManager": false, "blink.mojom.FileSystemAccessObserver": false, "blink.mojom.FileSystemAccessObserverHost": false, "blink.mojom.FileSystemAccessTransferToken": false, "blink.mojom.FileSystemCancellableOperation": false, "blink.mojom.FileSystemOperationListener": false, "blink.mojom.ReceivedSnapshotListener": false, "blink.mojom.FileSystemManager": false, "blink.mojom.FontAccessManager": false, "blink.mojom.FontUniqueNameLookup": false, "blink.mojom.BackForwardCacheControllerHost": true, "blink.mojom.FindInPage": true, "blink.mojom.FindInPageClient": true, "blink.mojom.LocalFrameHost": true, "blink.mojom.NonAssociatedLocalFrameHost": true, "blink.mojom.LocalFrame": true, "blink.mojom.LocalMainFrame": true, "blink.mojom.LocalMainFrameHost": true, "blink.mojom.PolicyContainerHost": false, "blink.mojom.NavigationStateKeepAliveHandle": true, "blink.mojom.RemoteFrameHost": true, "blink.mojom.RemoteFrame": true, "blink.mojom.RemoteMainFrame": true, "blink.mojom.RemoteMainFrameHost": true, "blink.mojom.ReportingObserver": true, "blink.mojom.SurfaceEmbedder": true, "blink.mojom.EmbeddedFrameSinkClient": true, "blink.mojom.EmbeddedFrameSinkProvider": true, "blink.mojom.GeolocationService": false, "blink.mojom.GpuDataManager": true, "handwriting.mojom.HandwritingRecognizer": false, "handwriting.mojom.HandwritingRecognitionService": false, "blink.mojom.HidService": false, "blink.mojom.Hyphenation": false, "blink.mojom.IdleMonitor": false, "blink.mojom.IdleManager": false, "blink.mojom.ImageDownloader": false, "blink.mojom.ImageReplacement": false, "blink.mojom.ImageReplacementHost": false, "blink.mojom.IDBFactoryClient": true, "blink.mojom.IDBDatabaseCallbacks": true, "blink.mojom.IDBCursor": true, "blink.mojom.IDBTransaction": true, "blink.mojom.IDBDatabaseGetAllResultSink": true, "blink.mojom.IDBDatabase": true, "blink.mojom.IDBFactory": true, "blink.mojom.ImeRenderWidgetHost": false, "blink.mojom.WidgetInputHandlerHost": false, "blink.mojom.FrameWidgetInputHandler": false, "blink.mojom.WidgetInputHandler": false, "blink.mojom.TextSuggestionHost": false, "blink.mojom.TextSuggestionBackend": false, "blink.mojom.PointerLockContext": false, "blink.mojom.SynchronousCompositor": true, "blink.mojom.SynchronousCompositorHost": true, "blink.mojom.SynchronousCompositorControlHost": true, "blink.mojom.TextInputHost": true, "blink.mojom.InstallationService": false, "blink.mojom.InstalledAppProvider": false, "blink.mojom.AbortableAdAuction": false, "blink.mojom.AdAuctionService": false, "blink.mojom.KeyboardLockService": false, "blink.mojom.LCPCriticalPathPredictorHost": false, "blink.mojom.LeakDetector": false, "blink.mojom.TextFragmentReceiver": false, "blink.mojom.CodeCacheHost": false, "blink.mojom.ContentSecurityNotifier": false, "blink.mojom.FetchLaterLoaderFactory": false, "blink.mojom.FetchLaterLoader": false, "blink.mojom.KeepAliveHandle": false, "blink.mojom.KeepAliveHandleFactory": false, "blink.mojom.AnchorElementMetricsHost": false, "blink.mojom.PauseSubresourceLoadingHandle": false, "blink.mojom.ResourceLoadInfoNotifier": false, "blink.mojom.LockScreenService": false, "blink.mojom.LockHandle": false, "blink.mojom.LockRequest": false, "blink.mojom.LockManager": false, "blink.mojom.ManifestManager": false, "blink.mojom.ManifestUrlChangeObserver": false, "blink.mojom.FullscreenVideoElementHandler": false, "blink.mojom.RendererAudioInputStreamFactory": false, "blink.mojom.RendererAudioInputStreamFactoryClient": false, "blink.mojom.RendererAudioOutputStreamFactory": false, "blink.mojom.MediaSessionClient": false, "blink.mojom.MediaSessionService": false, "blink.mojom.AecDumpAgent": false, "blink.mojom.AecDumpManager": false, "blink.mojom.MediaDevicesDispatcherHost": false, "blink.mojom.MediaDevicesListener": false, "blink.mojom.MediaStreamDeviceObserver": false, "blink.mojom.MediaStreamDispatcherHost": false, "blink.mojom.MediaStreamTrackMetricsHost": false, "blink.mojom.MemoryUsageMonitorLinux": true, "blink.mojom.ImageReleaseCallback": true, "blink.mojom.MimeRegistry": false, "blink.mojom.NavigationResumeDeferredCommitListener": true, "blink.mojom.NonPersistentNotificationListener": false, "blink.mojom.NotificationService": false, "blink.mojom.TranslationManagerCreateTranslatorClient": false, "blink.mojom.TranslationManager": false, "blink.mojom.Translator": false, "blink.mojom.OomInterventionHost": false, "blink.mojom.OomIntervention": false, "blink.mojom.OriginTrialStateHost": true, "blink.mojom.DisplayCutoutHost": true, "blink.mojom.DisplayCutoutClient": true, "blink.mojom.PageBroadcast": true, "blink.mojom.FrameWidget": true, "blink.mojom.FrameWidgetHost": true, "blink.mojom.PopupWidgetHost": true, "payments.mojom.PaymentManager": false, "payments.mojom.PaymentHandlerResponseCallback": false, "payments.mojom.PaymentHandlerHost": false, "payments.mojom.PaymentRequestClient": false, "payments.mojom.PaymentRequest": false, "payments.mojom.SecurePaymentConfirmationService": false, "blink.mojom.PeerConnectionManager": false, "blink.mojom.PeerConnectionTrackerHost": false, "blink.mojom.V8DetailedMemoryReporter": false, "blink.mojom.PermissionObserver": false, "blink.mojom.EmbeddedPermissionControlClient": false, "blink.mojom.PermissionService": false, "blink.mojom.PersistentRendererPrefsService": false, "blink.mojom.PictureInPictureSessionObserver": false, "blink.mojom.PictureInPictureSession": false, "blink.mojom.PictureInPictureService": false, "blink.mojom.PluginRegistry": false, "blink.mojom.AnchorElementInteractionHost": false, "blink.mojom.NoStatePrefetchProcessor": false, "blink.mojom.PresentationConnection": false, "blink.mojom.PresentationService": false, "blink.mojom.PresentationController": false, "blink.mojom.PresentationReceiver": false, "blink.mojom.WebPrintJobStateObserver": true, "blink.mojom.WebPrintJobController": true, "blink.mojom.WebPrinter": true, "blink.mojom.WebPrintingService": true, "blink.mojom.PrivateAggregationHost": false, "blink.mojom.PushMessaging": false, "blink.mojom.QuotaManagerHost": false, "blink.mojom.RemoteObjectHost": true, "blink.mojom.RemoteObject": true, "blink.mojom.RemoteObjectGatewayFactory": true, "blink.mojom.RemoteObjectGateway": true, "blink.mojom.RenderAccessibilityHost": false, "blink.mojom.RenderAccessibility": false, "blink.mojom.RendererPreferenceWatcher": false, "blink.mojom.ReportingServiceProxy": false, "blink.mojom.WebSensorProvider": false, "blink.mojom.SerialService": false, "blink.mojom.SerialServiceClient": false, "blink.mojom.ControllerServiceWorker": true, "blink.mojom.ControllerServiceWorkerConnector": true, "blink.mojom.EmbeddedWorkerInstanceClient": true, "blink.mojom.EmbeddedWorkerInstanceHost": true, "blink.mojom.ServiceWorkerHost": true, "blink.mojom.ServiceWorker": true, "blink.mojom.ServiceWorkerContainerHost": true, "blink.mojom.ServiceWorkerContainer": true, "blink.mojom.ServiceWorkerFetchResponseCallback": false, "blink.mojom.ServiceWorkerInstalledScriptsManagerHost": false, "blink.mojom.ServiceWorkerInstalledScriptsManager": false, "blink.mojom.ServiceWorkerObjectHost": true, "blink.mojom.ServiceWorkerObject": true, "blink.mojom.ServiceWorkerRegistrationObjectHost": true, "blink.mojom.ServiceWorkerRegistrationObject": true, "blink.mojom.ServiceWorkerRunningStatusCallback": false, "blink.mojom.ServiceWorkerStreamCallback": false, "blink.mojom.ServiceWorkerWorkerClient": false, "blink.mojom.ServiceWorkerWorkerClientRegistry": false, "blink.mojom.SharedStorageWorkletHost": true, "blink.mojom.SharedStorageDocumentService": true, "blink.mojom.SharedStorageEntriesListener": true, "blink.mojom.SharedStorageWorkletServiceClient": true, "blink.mojom.SharedStorageWorkletService": true, "blink.mojom.SmartCardService": false, "blink.mojom.WebOTPService": false, "blink.mojom.SpeculationHost": false, "blink.mojom.SpeechSynthesisVoiceListObserver": false, "blink.mojom.SpeechSynthesisClient": false, "blink.mojom.SpeechSynthesis": false, "blink.mojom.StorageAccessHandle": true, "blink.mojom.SubAppsService": false, "blink.mojom.DeclarativePerformanceObserverHost": false, "blink.mojom.UnboundedSurfaceHost": false, "blink.mojom.UnboundedSurfaceClient": false, "blink.mojom.UnhandledTapNotifier": true, "blink.mojom.WebUsbService": false, "blink.mojom.WakeLockService": false, "blink.mojom.WebInstallService": false, "blink.mojom.WebLaunchService": false, "blink.mojom.AudioContextManager": false, "blink.mojom.Authenticator": true, "blink.mojom.DigitalIdentityRequest": false, "blink.mojom.FederatedRequest": false, "blink.mojom.FederatedRequestService": false, "blink.mojom.WebNNIntrospectionClient": true, "blink.mojom.WebNNIntrospection": true, "blink.mojom.RTCLoggingDispatcher": false, "blink.mojom.ShareService": false, "blink.mojom.WebSocketConnector": false, "blink.mojom.WebTransportConnector": false, "blink.mojom.WebViewMediaIntegrityService": true, "blink.mojom.WebViewMediaIntegrityProvider": true, "blink.mojom.WidgetCompositor": false, "blink.mojom.WidgetHost": false, "blink.mojom.Widget": false, "blink.mojom.RenderInputRouterClient": false, "blink.mojom.DedicatedWorkerHost": false, "blink.mojom.DedicatedWorkerHostFactoryClient": true, "blink.mojom.DedicatedWorkerHostFactory": true, "blink.mojom.SharedWorker": true, "blink.mojom.SharedWorkerClient": false, "blink.mojom.SharedWorkerConnector": true, "blink.mojom.SharedWorkerFactory": true, "blink.mojom.SharedWorkerHost": false, "blink.mojom.SubresourceLoaderUpdater": false, "blink.mojom.WorkerContentSettingsProxy": false, "blink.mojom.WorkletDevToolsHost": false, "ui.mojom.IMEStructTraitsTest": true, "gfx.mojom.ImageTraitsTestService": true, "gfx.mojom.DelegatedInkPointRenderer": true, "gfx.mojom.TraitsTestService": true, "gfx.mojom.RangeTraitsTestService": true, "gl.mojom.TraitsTestService": true, "ui.ozone.mojom.DeviceCursor": true, "ui.ozone.mojom.DrmDevice": true, "ui.mojom.ScenicGpuHost": true, "ui.mojom.ScenicGpuService": true, "ui.ozone.mojom.WaylandBufferManagerHost": true, "ui.ozone.mojom.WaylandBufferManagerGpu": true, "wl.mojom.ConfigTraitsTestService": true, "ui.ozone.mojom.GesturePropertiesService": true, "webui_examples.mojom.PageHandlerFactory": true, "webui_examples.mojom.PageHandler": true, "app_management.mojom.PageHandlerFactory": true, "app_management.mojom.PageHandler": true, "app_management.mojom.Page": true, "color_change_listener.mojom.PageHandler": true, "color_change_listener.mojom.Page": true, "composebox.mojom.PageHandlerFactory": true, "composebox.mojom.PageHandler": true, "composebox.mojom.Page": true, "customize_color_scheme_mode.mojom.CustomizeColorSchemeModeHandlerFactory": true, "customize_color_scheme_mode.mojom.CustomizeColorSchemeModeHandler": true, "customize_color_scheme_mode.mojom.CustomizeColorSchemeModeClient": true, "custom_help_bubble.mojom.CustomHelpBubbleHandlerFactory": true, "custom_help_bubble.mojom.CustomHelpBubbleHandler": true, "help_bubble.mojom.HelpBubbleHandlerFactory": true, "help_bubble.mojom.PdfHelpBubbleHandlerFactory": true, "help_bubble.mojom.HelpBubbleHandler": true, "help_bubble.mojom.HelpBubbleClient": true, "history.mojom.ForeignSessionPageHandlerFactory": true, "history.mojom.ForeignSessionPageHandler": true, "history.mojom.ForeignSessionPage": true, "history.mojom.PageHandler": true, "history.mojom.Page": true, "history_cross_device_signin_promo.mojom.HistoryCrossDeviceSigninPromoHandler": true, "history_clusters.mojom.PageHandler": true, "history_clusters.mojom.Page": true, "history_clusters.mojom.PageHandlerFactory": true, "history_embeddings.mojom.PageHandlerFactory": true, "history_embeddings.mojom.PageHandler": true, "history_embeddings.mojom.Page": true, "most_visited.mojom.MostVisitedPageHandlerFactory": true, "most_visited.mojom.MostVisitedPageHandler": true, "most_visited.mojom.MostVisitedPage": true, "theme_color_picker.mojom.ThemeColorPickerHandlerFactory": true, "theme_color_picker.mojom.ThemeColorPickerHandler": true, "theme_color_picker.mojom.ThemeColorPickerClient": true, "batch_upload_promo.mojom.PageHandlerFactory": true, "batch_upload_promo.mojom.PageHandler": true, "batch_upload_promo.mojom.Page": true, "browser_command.mojom.CommandHandlerFactory": true, "browser_command.mojom.CommandHandler": true, "metrics_reporter.mojom.PageMetricsHost": true, "metrics_reporter.mojom.PageMetrics": true, "tracked_element.mojom.TrackedElementHandler": true, "tracked_element.mojom.TrackedElementManager": true, "url.mojom.UrlTest": true},
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
        const versionStr = window.mojoVersion || '152.0.7932.0';
        
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

 mojo.internal.bindings.searchbox = mojo.internal.bindings.searchbox || {};
mojo.internal.bindings.searchbox.mojom = mojo.internal.bindings.searchbox.mojom || {};
mojo.internal.bindings.mojo_base = mojo.internal.bindings.mojo_base || {};
mojo.internal.bindings.mojo_base.mojom = mojo.internal.bindings.mojo_base.mojom || {};
mojo.internal.bindings.omnibox = mojo.internal.bindings.omnibox || {};
mojo.internal.bindings.composebox_query = mojo.internal.bindings.composebox_query || {};
mojo.internal.bindings.ui = mojo.internal.bindings.ui || {};
mojo.internal.bindings.gfx = mojo.internal.bindings.gfx || {};
mojo.internal.bindings.url = mojo.internal.bindings.url || {};

mojo.internal.bindings.searchbox.mojom.SideTypeSpec = mojo.internal.bindings.searchbox.mojom.SideTypeSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.searchbox.mojom.RenderTypeSpec = mojo.internal.bindings.searchbox.mojom.RenderTypeSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.searchbox.mojom.SelectionLineStateSpec = mojo.internal.bindings.searchbox.mojom.SelectionLineStateSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.searchbox.mojom.SelectionDirectionSpec = mojo.internal.bindings.searchbox.mojom.SelectionDirectionSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.searchbox.mojom.SelectionStepSpec = mojo.internal.bindings.searchbox.mojom.SelectionStepSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.searchbox.mojom.DriveUploadErrorSpec = mojo.internal.bindings.searchbox.mojom.DriveUploadErrorSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.searchbox.mojom.DriveDisclaimerStatusSpec = mojo.internal.bindings.searchbox.mojom.DriveDisclaimerStatusSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.searchbox.mojom.SuggestInventorySpec = mojo.internal.bindings.searchbox.mojom.SuggestInventorySpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.searchbox.mojom.SearchContextAttachmentSpec = mojo.internal.bindings.searchbox.mojom.SearchContextAttachmentSpec || { $: {} };
if (mojo.internal.bindings.searchbox.mojom.SearchContextAttachmentSpec.$.structSpec && mojo.internal.bindings.searchbox.mojom.SearchContextAttachmentSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.searchbox.mojom.SearchContextAttachmentSpec.$ = {};
mojo.internal.bindings.searchbox.mojom.ACMatchClassificationSpec = mojo.internal.bindings.searchbox.mojom.ACMatchClassificationSpec || { $: {} };
if (mojo.internal.bindings.searchbox.mojom.ACMatchClassificationSpec.$.structSpec && mojo.internal.bindings.searchbox.mojom.ACMatchClassificationSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.searchbox.mojom.ACMatchClassificationSpec.$ = {};
mojo.internal.bindings.searchbox.mojom.ActionSpec = mojo.internal.bindings.searchbox.mojom.ActionSpec || { $: {} };
if (mojo.internal.bindings.searchbox.mojom.ActionSpec.$.structSpec && mojo.internal.bindings.searchbox.mojom.ActionSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.searchbox.mojom.ActionSpec.$ = {};
mojo.internal.bindings.searchbox.mojom.SuggestionAnswerSpec = mojo.internal.bindings.searchbox.mojom.SuggestionAnswerSpec || { $: {} };
if (mojo.internal.bindings.searchbox.mojom.SuggestionAnswerSpec.$.structSpec && mojo.internal.bindings.searchbox.mojom.SuggestionAnswerSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.searchbox.mojom.SuggestionAnswerSpec.$ = {};
mojo.internal.bindings.searchbox.mojom.AutocompleteMatchSpec = mojo.internal.bindings.searchbox.mojom.AutocompleteMatchSpec || { $: {} };
if (mojo.internal.bindings.searchbox.mojom.AutocompleteMatchSpec.$.structSpec && mojo.internal.bindings.searchbox.mojom.AutocompleteMatchSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.searchbox.mojom.AutocompleteMatchSpec.$ = {};
mojo.internal.bindings.searchbox.mojom.TabInfoSpec = mojo.internal.bindings.searchbox.mojom.TabInfoSpec || { $: {} };
if (mojo.internal.bindings.searchbox.mojom.TabInfoSpec.$.structSpec && mojo.internal.bindings.searchbox.mojom.TabInfoSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.searchbox.mojom.TabInfoSpec.$ = {};
mojo.internal.bindings.searchbox.mojom.FileAttachmentSpec = mojo.internal.bindings.searchbox.mojom.FileAttachmentSpec || { $: {} };
if (mojo.internal.bindings.searchbox.mojom.FileAttachmentSpec.$.structSpec && mojo.internal.bindings.searchbox.mojom.FileAttachmentSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.searchbox.mojom.FileAttachmentSpec.$ = {};
mojo.internal.bindings.searchbox.mojom.TabAttachmentSpec = mojo.internal.bindings.searchbox.mojom.TabAttachmentSpec || { $: {} };
if (mojo.internal.bindings.searchbox.mojom.TabAttachmentSpec.$.structSpec && mojo.internal.bindings.searchbox.mojom.TabAttachmentSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.searchbox.mojom.TabAttachmentSpec.$ = {};
mojo.internal.bindings.searchbox.mojom.SearchContextSpec = mojo.internal.bindings.searchbox.mojom.SearchContextSpec || { $: {} };
if (mojo.internal.bindings.searchbox.mojom.SearchContextSpec.$.structSpec && mojo.internal.bindings.searchbox.mojom.SearchContextSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.searchbox.mojom.SearchContextSpec.$ = {};
mojo.internal.bindings.searchbox.mojom.SelectedFileInfoSpec = mojo.internal.bindings.searchbox.mojom.SelectedFileInfoSpec || { $: {} };
if (mojo.internal.bindings.searchbox.mojom.SelectedFileInfoSpec.$.structSpec && mojo.internal.bindings.searchbox.mojom.SelectedFileInfoSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.searchbox.mojom.SelectedFileInfoSpec.$ = {};
mojo.internal.bindings.searchbox.mojom.SuggestionGroupSpec = mojo.internal.bindings.searchbox.mojom.SuggestionGroupSpec || { $: {} };
if (mojo.internal.bindings.searchbox.mojom.SuggestionGroupSpec.$.structSpec && mojo.internal.bindings.searchbox.mojom.SuggestionGroupSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.searchbox.mojom.SuggestionGroupSpec.$ = {};
mojo.internal.bindings.searchbox.mojom.SmartComposeStatsSpec = mojo.internal.bindings.searchbox.mojom.SmartComposeStatsSpec || { $: {} };
if (mojo.internal.bindings.searchbox.mojom.SmartComposeStatsSpec.$.structSpec && mojo.internal.bindings.searchbox.mojom.SmartComposeStatsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.searchbox.mojom.SmartComposeStatsSpec.$ = {};
mojo.internal.bindings.searchbox.mojom.AutocompleteResultSpec = mojo.internal.bindings.searchbox.mojom.AutocompleteResultSpec || { $: {} };
if (mojo.internal.bindings.searchbox.mojom.AutocompleteResultSpec.$.structSpec && mojo.internal.bindings.searchbox.mojom.AutocompleteResultSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.searchbox.mojom.AutocompleteResultSpec.$ = {};
mojo.internal.bindings.searchbox.mojom.OmniboxPopupSelectionSpec = mojo.internal.bindings.searchbox.mojom.OmniboxPopupSelectionSpec || { $: {} };
if (mojo.internal.bindings.searchbox.mojom.OmniboxPopupSelectionSpec.$.structSpec && mojo.internal.bindings.searchbox.mojom.OmniboxPopupSelectionSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.searchbox.mojom.OmniboxPopupSelectionSpec.$ = {};
mojo.internal.bindings.searchbox.mojom.PlaceholderConfigSpec = mojo.internal.bindings.searchbox.mojom.PlaceholderConfigSpec || { $: {} };
if (mojo.internal.bindings.searchbox.mojom.PlaceholderConfigSpec.$.structSpec && mojo.internal.bindings.searchbox.mojom.PlaceholderConfigSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.searchbox.mojom.PlaceholderConfigSpec.$ = {};
mojo.internal.bindings.searchbox.mojom.DriveFileSpec = mojo.internal.bindings.searchbox.mojom.DriveFileSpec || { $: {} };
if (mojo.internal.bindings.searchbox.mojom.DriveFileSpec.$.structSpec && mojo.internal.bindings.searchbox.mojom.DriveFileSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.searchbox.mojom.DriveFileSpec.$ = {};
mojo.internal.bindings.searchbox.mojom.DriveUploadResponseSpec = mojo.internal.bindings.searchbox.mojom.DriveUploadResponseSpec || { $: {} };
if (mojo.internal.bindings.searchbox.mojom.DriveUploadResponseSpec.$.structSpec && mojo.internal.bindings.searchbox.mojom.DriveUploadResponseSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.searchbox.mojom.DriveUploadResponseSpec.$ = {};
mojo.internal.bindings.searchbox.mojom.PageHandlerFactory = mojo.internal.bindings.searchbox.mojom.PageHandlerFactory || {};
mojo.internal.bindings.searchbox.mojom.PageHandlerFactorySpec = mojo.internal.bindings.searchbox.mojom.PageHandlerFactorySpec || { $ : {} };
if (mojo.internal.bindings.searchbox.mojom.PageHandlerFactorySpec.$.structSpec && mojo.internal.bindings.searchbox.mojom.PageHandlerFactorySpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.searchbox.mojom.PageHandlerFactorySpec.$ = {};
mojo.internal.bindings.searchbox.mojom.PageHandlerFactory.$interfaceName = 'searchbox.mojom.PageHandlerFactory';
mojo.internal.bindings.searchbox.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec = mojo.internal.bindings.searchbox.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec || { $: {} };
if (mojo.internal.bindings.searchbox.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec.$.structSpec && mojo.internal.bindings.searchbox.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.searchbox.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec.$ = {};
mojo.internal.bindings.searchbox.mojom.PageHandler = mojo.internal.bindings.searchbox.mojom.PageHandler || {};
mojo.internal.bindings.searchbox.mojom.PageHandlerSpec = mojo.internal.bindings.searchbox.mojom.PageHandlerSpec || { $ : {} };
if (mojo.internal.bindings.searchbox.mojom.PageHandlerSpec.$.structSpec && mojo.internal.bindings.searchbox.mojom.PageHandlerSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.searchbox.mojom.PageHandlerSpec.$ = {};
mojo.internal.bindings.searchbox.mojom.PageHandler.$interfaceName = 'searchbox.mojom.PageHandler';
mojo.internal.bindings.searchbox.mojom.PageHandler_OnFocusChanged_ParamsSpec = mojo.internal.bindings.searchbox.mojom.PageHandler_OnFocusChanged_ParamsSpec || { $: {} };
if (mojo.internal.bindings.searchbox.mojom.PageHandler_OnFocusChanged_ParamsSpec.$.structSpec && mojo.internal.bindings.searchbox.mojom.PageHandler_OnFocusChanged_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.searchbox.mojom.PageHandler_OnFocusChanged_ParamsSpec.$ = {};
mojo.internal.bindings.searchbox.mojom.PageHandler_QueryAutocomplete_ParamsSpec = mojo.internal.bindings.searchbox.mojom.PageHandler_QueryAutocomplete_ParamsSpec || { $: {} };
if (mojo.internal.bindings.searchbox.mojom.PageHandler_QueryAutocomplete_ParamsSpec.$.structSpec && mojo.internal.bindings.searchbox.mojom.PageHandler_QueryAutocomplete_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.searchbox.mojom.PageHandler_QueryAutocomplete_ParamsSpec.$ = {};
mojo.internal.bindings.searchbox.mojom.PageHandler_QueryAutocompleteWithSuggestInventory_ParamsSpec = mojo.internal.bindings.searchbox.mojom.PageHandler_QueryAutocompleteWithSuggestInventory_ParamsSpec || { $: {} };
if (mojo.internal.bindings.searchbox.mojom.PageHandler_QueryAutocompleteWithSuggestInventory_ParamsSpec.$.structSpec && mojo.internal.bindings.searchbox.mojom.PageHandler_QueryAutocompleteWithSuggestInventory_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.searchbox.mojom.PageHandler_QueryAutocompleteWithSuggestInventory_ParamsSpec.$ = {};
mojo.internal.bindings.searchbox.mojom.PageHandler_StopAutocomplete_ParamsSpec = mojo.internal.bindings.searchbox.mojom.PageHandler_StopAutocomplete_ParamsSpec || { $: {} };
if (mojo.internal.bindings.searchbox.mojom.PageHandler_StopAutocomplete_ParamsSpec.$.structSpec && mojo.internal.bindings.searchbox.mojom.PageHandler_StopAutocomplete_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.searchbox.mojom.PageHandler_StopAutocomplete_ParamsSpec.$ = {};
mojo.internal.bindings.searchbox.mojom.PageHandler_OpenAutocompleteMatch_ParamsSpec = mojo.internal.bindings.searchbox.mojom.PageHandler_OpenAutocompleteMatch_ParamsSpec || { $: {} };
if (mojo.internal.bindings.searchbox.mojom.PageHandler_OpenAutocompleteMatch_ParamsSpec.$.structSpec && mojo.internal.bindings.searchbox.mojom.PageHandler_OpenAutocompleteMatch_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.searchbox.mojom.PageHandler_OpenAutocompleteMatch_ParamsSpec.$ = {};
mojo.internal.bindings.searchbox.mojom.PageHandler_SetSmartComposeStats_ParamsSpec = mojo.internal.bindings.searchbox.mojom.PageHandler_SetSmartComposeStats_ParamsSpec || { $: {} };
if (mojo.internal.bindings.searchbox.mojom.PageHandler_SetSmartComposeStats_ParamsSpec.$.structSpec && mojo.internal.bindings.searchbox.mojom.PageHandler_SetSmartComposeStats_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.searchbox.mojom.PageHandler_SetSmartComposeStats_ParamsSpec.$ = {};
mojo.internal.bindings.searchbox.mojom.PageHandler_SetPopupSelection_ParamsSpec = mojo.internal.bindings.searchbox.mojom.PageHandler_SetPopupSelection_ParamsSpec || { $: {} };
if (mojo.internal.bindings.searchbox.mojom.PageHandler_SetPopupSelection_ParamsSpec.$.structSpec && mojo.internal.bindings.searchbox.mojom.PageHandler_SetPopupSelection_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.searchbox.mojom.PageHandler_SetPopupSelection_ParamsSpec.$ = {};
mojo.internal.bindings.searchbox.mojom.PageHandler_OpenPopupSelection_ParamsSpec = mojo.internal.bindings.searchbox.mojom.PageHandler_OpenPopupSelection_ParamsSpec || { $: {} };
if (mojo.internal.bindings.searchbox.mojom.PageHandler_OpenPopupSelection_ParamsSpec.$.structSpec && mojo.internal.bindings.searchbox.mojom.PageHandler_OpenPopupSelection_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.searchbox.mojom.PageHandler_OpenPopupSelection_ParamsSpec.$ = {};
mojo.internal.bindings.searchbox.mojom.PageHandler_OnNavigationLikely_ParamsSpec = mojo.internal.bindings.searchbox.mojom.PageHandler_OnNavigationLikely_ParamsSpec || { $: {} };
if (mojo.internal.bindings.searchbox.mojom.PageHandler_OnNavigationLikely_ParamsSpec.$.structSpec && mojo.internal.bindings.searchbox.mojom.PageHandler_OnNavigationLikely_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.searchbox.mojom.PageHandler_OnNavigationLikely_ParamsSpec.$ = {};
mojo.internal.bindings.searchbox.mojom.PageHandler_DeleteAutocompleteMatch_ParamsSpec = mojo.internal.bindings.searchbox.mojom.PageHandler_DeleteAutocompleteMatch_ParamsSpec || { $: {} };
if (mojo.internal.bindings.searchbox.mojom.PageHandler_DeleteAutocompleteMatch_ParamsSpec.$.structSpec && mojo.internal.bindings.searchbox.mojom.PageHandler_DeleteAutocompleteMatch_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.searchbox.mojom.PageHandler_DeleteAutocompleteMatch_ParamsSpec.$ = {};
mojo.internal.bindings.searchbox.mojom.PageHandler_ActivateKeyword_ParamsSpec = mojo.internal.bindings.searchbox.mojom.PageHandler_ActivateKeyword_ParamsSpec || { $: {} };
if (mojo.internal.bindings.searchbox.mojom.PageHandler_ActivateKeyword_ParamsSpec.$.structSpec && mojo.internal.bindings.searchbox.mojom.PageHandler_ActivateKeyword_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.searchbox.mojom.PageHandler_ActivateKeyword_ParamsSpec.$ = {};
mojo.internal.bindings.searchbox.mojom.PageHandler_ExecuteAction_ParamsSpec = mojo.internal.bindings.searchbox.mojom.PageHandler_ExecuteAction_ParamsSpec || { $: {} };
if (mojo.internal.bindings.searchbox.mojom.PageHandler_ExecuteAction_ParamsSpec.$.structSpec && mojo.internal.bindings.searchbox.mojom.PageHandler_ExecuteAction_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.searchbox.mojom.PageHandler_ExecuteAction_ParamsSpec.$ = {};
mojo.internal.bindings.searchbox.mojom.PageHandler_OnThumbnailRemoved_ParamsSpec = mojo.internal.bindings.searchbox.mojom.PageHandler_OnThumbnailRemoved_ParamsSpec || { $: {} };
if (mojo.internal.bindings.searchbox.mojom.PageHandler_OnThumbnailRemoved_ParamsSpec.$.structSpec && mojo.internal.bindings.searchbox.mojom.PageHandler_OnThumbnailRemoved_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.searchbox.mojom.PageHandler_OnThumbnailRemoved_ParamsSpec.$ = {};
mojo.internal.bindings.searchbox.mojom.PageHandler_GetPlaceholderConfig_ParamsSpec = mojo.internal.bindings.searchbox.mojom.PageHandler_GetPlaceholderConfig_ParamsSpec || { $: {} };
if (mojo.internal.bindings.searchbox.mojom.PageHandler_GetPlaceholderConfig_ParamsSpec.$.structSpec && mojo.internal.bindings.searchbox.mojom.PageHandler_GetPlaceholderConfig_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.searchbox.mojom.PageHandler_GetPlaceholderConfig_ParamsSpec.$ = {};
mojo.internal.bindings.searchbox.mojom.PageHandler_GetPlaceholderConfig_ResponseParamsSpec = mojo.internal.bindings.searchbox.mojom.PageHandler_GetPlaceholderConfig_ResponseParamsSpec || { $: {} };
if (mojo.internal.bindings.searchbox.mojom.PageHandler_GetPlaceholderConfig_ResponseParamsSpec.$.structSpec && mojo.internal.bindings.searchbox.mojom.PageHandler_GetPlaceholderConfig_ResponseParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.searchbox.mojom.PageHandler_GetPlaceholderConfig_ResponseParamsSpec.$ = {};
mojo.internal.bindings.searchbox.mojom.PageHandler_GetRecentTabs_ParamsSpec = mojo.internal.bindings.searchbox.mojom.PageHandler_GetRecentTabs_ParamsSpec || { $: {} };
if (mojo.internal.bindings.searchbox.mojom.PageHandler_GetRecentTabs_ParamsSpec.$.structSpec && mojo.internal.bindings.searchbox.mojom.PageHandler_GetRecentTabs_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.searchbox.mojom.PageHandler_GetRecentTabs_ParamsSpec.$ = {};
mojo.internal.bindings.searchbox.mojom.PageHandler_GetRecentTabs_ResponseParamsSpec = mojo.internal.bindings.searchbox.mojom.PageHandler_GetRecentTabs_ResponseParamsSpec || { $: {} };
if (mojo.internal.bindings.searchbox.mojom.PageHandler_GetRecentTabs_ResponseParamsSpec.$.structSpec && mojo.internal.bindings.searchbox.mojom.PageHandler_GetRecentTabs_ResponseParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.searchbox.mojom.PageHandler_GetRecentTabs_ResponseParamsSpec.$ = {};
mojo.internal.bindings.searchbox.mojom.PageHandler_GetTabPreview_ParamsSpec = mojo.internal.bindings.searchbox.mojom.PageHandler_GetTabPreview_ParamsSpec || { $: {} };
if (mojo.internal.bindings.searchbox.mojom.PageHandler_GetTabPreview_ParamsSpec.$.structSpec && mojo.internal.bindings.searchbox.mojom.PageHandler_GetTabPreview_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.searchbox.mojom.PageHandler_GetTabPreview_ParamsSpec.$ = {};
mojo.internal.bindings.searchbox.mojom.PageHandler_GetTabPreview_ResponseParamsSpec = mojo.internal.bindings.searchbox.mojom.PageHandler_GetTabPreview_ResponseParamsSpec || { $: {} };
if (mojo.internal.bindings.searchbox.mojom.PageHandler_GetTabPreview_ResponseParamsSpec.$.structSpec && mojo.internal.bindings.searchbox.mojom.PageHandler_GetTabPreview_ResponseParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.searchbox.mojom.PageHandler_GetTabPreview_ResponseParamsSpec.$ = {};
mojo.internal.bindings.searchbox.mojom.PageHandler_WaitForTabFaviconLoad_ParamsSpec = mojo.internal.bindings.searchbox.mojom.PageHandler_WaitForTabFaviconLoad_ParamsSpec || { $: {} };
if (mojo.internal.bindings.searchbox.mojom.PageHandler_WaitForTabFaviconLoad_ParamsSpec.$.structSpec && mojo.internal.bindings.searchbox.mojom.PageHandler_WaitForTabFaviconLoad_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.searchbox.mojom.PageHandler_WaitForTabFaviconLoad_ParamsSpec.$ = {};
mojo.internal.bindings.searchbox.mojom.PageHandler_WaitForTabFaviconLoad_ResponseParamsSpec = mojo.internal.bindings.searchbox.mojom.PageHandler_WaitForTabFaviconLoad_ResponseParamsSpec || { $: {} };
if (mojo.internal.bindings.searchbox.mojom.PageHandler_WaitForTabFaviconLoad_ResponseParamsSpec.$.structSpec && mojo.internal.bindings.searchbox.mojom.PageHandler_WaitForTabFaviconLoad_ResponseParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.searchbox.mojom.PageHandler_WaitForTabFaviconLoad_ResponseParamsSpec.$ = {};
mojo.internal.bindings.searchbox.mojom.PageHandler_GetInputState_ParamsSpec = mojo.internal.bindings.searchbox.mojom.PageHandler_GetInputState_ParamsSpec || { $: {} };
if (mojo.internal.bindings.searchbox.mojom.PageHandler_GetInputState_ParamsSpec.$.structSpec && mojo.internal.bindings.searchbox.mojom.PageHandler_GetInputState_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.searchbox.mojom.PageHandler_GetInputState_ParamsSpec.$ = {};
mojo.internal.bindings.searchbox.mojom.PageHandler_GetInputState_ResponseParamsSpec = mojo.internal.bindings.searchbox.mojom.PageHandler_GetInputState_ResponseParamsSpec || { $: {} };
if (mojo.internal.bindings.searchbox.mojom.PageHandler_GetInputState_ResponseParamsSpec.$.structSpec && mojo.internal.bindings.searchbox.mojom.PageHandler_GetInputState_ResponseParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.searchbox.mojom.PageHandler_GetInputState_ResponseParamsSpec.$ = {};
mojo.internal.bindings.searchbox.mojom.PageHandler_NotifySessionStarted_ParamsSpec = mojo.internal.bindings.searchbox.mojom.PageHandler_NotifySessionStarted_ParamsSpec || { $: {} };
if (mojo.internal.bindings.searchbox.mojom.PageHandler_NotifySessionStarted_ParamsSpec.$.structSpec && mojo.internal.bindings.searchbox.mojom.PageHandler_NotifySessionStarted_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.searchbox.mojom.PageHandler_NotifySessionStarted_ParamsSpec.$ = {};
mojo.internal.bindings.searchbox.mojom.PageHandler_NotifySessionAbandoned_ParamsSpec = mojo.internal.bindings.searchbox.mojom.PageHandler_NotifySessionAbandoned_ParamsSpec || { $: {} };
if (mojo.internal.bindings.searchbox.mojom.PageHandler_NotifySessionAbandoned_ParamsSpec.$.structSpec && mojo.internal.bindings.searchbox.mojom.PageHandler_NotifySessionAbandoned_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.searchbox.mojom.PageHandler_NotifySessionAbandoned_ParamsSpec.$ = {};
mojo.internal.bindings.searchbox.mojom.PageHandler_AddFileContext_ParamsSpec = mojo.internal.bindings.searchbox.mojom.PageHandler_AddFileContext_ParamsSpec || { $: {} };
if (mojo.internal.bindings.searchbox.mojom.PageHandler_AddFileContext_ParamsSpec.$.structSpec && mojo.internal.bindings.searchbox.mojom.PageHandler_AddFileContext_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.searchbox.mojom.PageHandler_AddFileContext_ParamsSpec.$ = {};
mojo.internal.bindings.searchbox.mojom.PageHandler_AddTabContext_ParamsSpec = mojo.internal.bindings.searchbox.mojom.PageHandler_AddTabContext_ParamsSpec || { $: {} };
if (mojo.internal.bindings.searchbox.mojom.PageHandler_AddTabContext_ParamsSpec.$.structSpec && mojo.internal.bindings.searchbox.mojom.PageHandler_AddTabContext_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.searchbox.mojom.PageHandler_AddTabContext_ParamsSpec.$ = {};
mojo.internal.bindings.searchbox.mojom.PageHandler_DeleteContext_ParamsSpec = mojo.internal.bindings.searchbox.mojom.PageHandler_DeleteContext_ParamsSpec || { $: {} };
if (mojo.internal.bindings.searchbox.mojom.PageHandler_DeleteContext_ParamsSpec.$.structSpec && mojo.internal.bindings.searchbox.mojom.PageHandler_DeleteContext_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.searchbox.mojom.PageHandler_DeleteContext_ParamsSpec.$ = {};
mojo.internal.bindings.searchbox.mojom.PageHandler_ClearFiles_ParamsSpec = mojo.internal.bindings.searchbox.mojom.PageHandler_ClearFiles_ParamsSpec || { $: {} };
if (mojo.internal.bindings.searchbox.mojom.PageHandler_ClearFiles_ParamsSpec.$.structSpec && mojo.internal.bindings.searchbox.mojom.PageHandler_ClearFiles_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.searchbox.mojom.PageHandler_ClearFiles_ParamsSpec.$ = {};
mojo.internal.bindings.searchbox.mojom.PageHandler_SubmitQuery_ParamsSpec = mojo.internal.bindings.searchbox.mojom.PageHandler_SubmitQuery_ParamsSpec || { $: {} };
if (mojo.internal.bindings.searchbox.mojom.PageHandler_SubmitQuery_ParamsSpec.$.structSpec && mojo.internal.bindings.searchbox.mojom.PageHandler_SubmitQuery_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.searchbox.mojom.PageHandler_SubmitQuery_ParamsSpec.$ = {};
mojo.internal.bindings.searchbox.mojom.PageHandler_OpenLensSearch_ParamsSpec = mojo.internal.bindings.searchbox.mojom.PageHandler_OpenLensSearch_ParamsSpec || { $: {} };
if (mojo.internal.bindings.searchbox.mojom.PageHandler_OpenLensSearch_ParamsSpec.$.structSpec && mojo.internal.bindings.searchbox.mojom.PageHandler_OpenLensSearch_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.searchbox.mojom.PageHandler_OpenLensSearch_ParamsSpec.$ = {};
mojo.internal.bindings.searchbox.mojom.PageHandler_SetActiveToolMode_ParamsSpec = mojo.internal.bindings.searchbox.mojom.PageHandler_SetActiveToolMode_ParamsSpec || { $: {} };
if (mojo.internal.bindings.searchbox.mojom.PageHandler_SetActiveToolMode_ParamsSpec.$.structSpec && mojo.internal.bindings.searchbox.mojom.PageHandler_SetActiveToolMode_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.searchbox.mojom.PageHandler_SetActiveToolMode_ParamsSpec.$ = {};
mojo.internal.bindings.searchbox.mojom.PageHandler_SetActiveModelMode_ParamsSpec = mojo.internal.bindings.searchbox.mojom.PageHandler_SetActiveModelMode_ParamsSpec || { $: {} };
if (mojo.internal.bindings.searchbox.mojom.PageHandler_SetActiveModelMode_ParamsSpec.$.structSpec && mojo.internal.bindings.searchbox.mojom.PageHandler_SetActiveModelMode_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.searchbox.mojom.PageHandler_SetActiveModelMode_ParamsSpec.$ = {};
mojo.internal.bindings.searchbox.mojom.PageHandler_ActivateMetricsFunnel_ParamsSpec = mojo.internal.bindings.searchbox.mojom.PageHandler_ActivateMetricsFunnel_ParamsSpec || { $: {} };
if (mojo.internal.bindings.searchbox.mojom.PageHandler_ActivateMetricsFunnel_ParamsSpec.$.structSpec && mojo.internal.bindings.searchbox.mojom.PageHandler_ActivateMetricsFunnel_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.searchbox.mojom.PageHandler_ActivateMetricsFunnel_ParamsSpec.$ = {};
mojo.internal.bindings.searchbox.mojom.PageHandler_RecordToolSelectionAction_ParamsSpec = mojo.internal.bindings.searchbox.mojom.PageHandler_RecordToolSelectionAction_ParamsSpec || { $: {} };
if (mojo.internal.bindings.searchbox.mojom.PageHandler_RecordToolSelectionAction_ParamsSpec.$.structSpec && mojo.internal.bindings.searchbox.mojom.PageHandler_RecordToolSelectionAction_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.searchbox.mojom.PageHandler_RecordToolSelectionAction_ParamsSpec.$ = {};
mojo.internal.bindings.searchbox.mojom.PageHandler_RecordModelSelectionAction_ParamsSpec = mojo.internal.bindings.searchbox.mojom.PageHandler_RecordModelSelectionAction_ParamsSpec || { $: {} };
if (mojo.internal.bindings.searchbox.mojom.PageHandler_RecordModelSelectionAction_ParamsSpec.$.structSpec && mojo.internal.bindings.searchbox.mojom.PageHandler_RecordModelSelectionAction_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.searchbox.mojom.PageHandler_RecordModelSelectionAction_ParamsSpec.$ = {};
mojo.internal.bindings.searchbox.mojom.PageHandler_GetDriveDisclaimerStatus_ParamsSpec = mojo.internal.bindings.searchbox.mojom.PageHandler_GetDriveDisclaimerStatus_ParamsSpec || { $: {} };
if (mojo.internal.bindings.searchbox.mojom.PageHandler_GetDriveDisclaimerStatus_ParamsSpec.$.structSpec && mojo.internal.bindings.searchbox.mojom.PageHandler_GetDriveDisclaimerStatus_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.searchbox.mojom.PageHandler_GetDriveDisclaimerStatus_ParamsSpec.$ = {};
mojo.internal.bindings.searchbox.mojom.PageHandler_GetDriveDisclaimerStatus_ResponseParamsSpec = mojo.internal.bindings.searchbox.mojom.PageHandler_GetDriveDisclaimerStatus_ResponseParamsSpec || { $: {} };
if (mojo.internal.bindings.searchbox.mojom.PageHandler_GetDriveDisclaimerStatus_ResponseParamsSpec.$.structSpec && mojo.internal.bindings.searchbox.mojom.PageHandler_GetDriveDisclaimerStatus_ResponseParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.searchbox.mojom.PageHandler_GetDriveDisclaimerStatus_ResponseParamsSpec.$ = {};
mojo.internal.bindings.searchbox.mojom.PageHandler_OnDriveDisclaimerAccepted_ParamsSpec = mojo.internal.bindings.searchbox.mojom.PageHandler_OnDriveDisclaimerAccepted_ParamsSpec || { $: {} };
if (mojo.internal.bindings.searchbox.mojom.PageHandler_OnDriveDisclaimerAccepted_ParamsSpec.$.structSpec && mojo.internal.bindings.searchbox.mojom.PageHandler_OnDriveDisclaimerAccepted_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.searchbox.mojom.PageHandler_OnDriveDisclaimerAccepted_ParamsSpec.$ = {};
mojo.internal.bindings.searchbox.mojom.PageHandler_OnDriveUploadClicked_ParamsSpec = mojo.internal.bindings.searchbox.mojom.PageHandler_OnDriveUploadClicked_ParamsSpec || { $: {} };
if (mojo.internal.bindings.searchbox.mojom.PageHandler_OnDriveUploadClicked_ParamsSpec.$.structSpec && mojo.internal.bindings.searchbox.mojom.PageHandler_OnDriveUploadClicked_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.searchbox.mojom.PageHandler_OnDriveUploadClicked_ParamsSpec.$ = {};
mojo.internal.bindings.searchbox.mojom.PageHandler_OnDriveUploadClicked_ResponseParamsSpec = mojo.internal.bindings.searchbox.mojom.PageHandler_OnDriveUploadClicked_ResponseParamsSpec || { $: {} };
if (mojo.internal.bindings.searchbox.mojom.PageHandler_OnDriveUploadClicked_ResponseParamsSpec.$.structSpec && mojo.internal.bindings.searchbox.mojom.PageHandler_OnDriveUploadClicked_ResponseParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.searchbox.mojom.PageHandler_OnDriveUploadClicked_ResponseParamsSpec.$ = {};
mojo.internal.bindings.searchbox.mojom.PageHandler_GetPageClassification_ParamsSpec = mojo.internal.bindings.searchbox.mojom.PageHandler_GetPageClassification_ParamsSpec || { $: {} };
if (mojo.internal.bindings.searchbox.mojom.PageHandler_GetPageClassification_ParamsSpec.$.structSpec && mojo.internal.bindings.searchbox.mojom.PageHandler_GetPageClassification_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.searchbox.mojom.PageHandler_GetPageClassification_ParamsSpec.$ = {};
mojo.internal.bindings.searchbox.mojom.PageHandler_GetPageClassification_ResponseParamsSpec = mojo.internal.bindings.searchbox.mojom.PageHandler_GetPageClassification_ResponseParamsSpec || { $: {} };
if (mojo.internal.bindings.searchbox.mojom.PageHandler_GetPageClassification_ResponseParamsSpec.$.structSpec && mojo.internal.bindings.searchbox.mojom.PageHandler_GetPageClassification_ResponseParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.searchbox.mojom.PageHandler_GetPageClassification_ResponseParamsSpec.$ = {};
mojo.internal.bindings.searchbox.mojom.Page = mojo.internal.bindings.searchbox.mojom.Page || {};
mojo.internal.bindings.searchbox.mojom.PageSpec = mojo.internal.bindings.searchbox.mojom.PageSpec || { $ : {} };
if (mojo.internal.bindings.searchbox.mojom.PageSpec.$.structSpec && mojo.internal.bindings.searchbox.mojom.PageSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.searchbox.mojom.PageSpec.$ = {};
mojo.internal.bindings.searchbox.mojom.Page.$interfaceName = 'searchbox.mojom.Page';
mojo.internal.bindings.searchbox.mojom.Page_AutocompleteResultChanged_ParamsSpec = mojo.internal.bindings.searchbox.mojom.Page_AutocompleteResultChanged_ParamsSpec || { $: {} };
if (mojo.internal.bindings.searchbox.mojom.Page_AutocompleteResultChanged_ParamsSpec.$.structSpec && mojo.internal.bindings.searchbox.mojom.Page_AutocompleteResultChanged_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.searchbox.mojom.Page_AutocompleteResultChanged_ParamsSpec.$ = {};
mojo.internal.bindings.searchbox.mojom.Page_UpdateSelection_ParamsSpec = mojo.internal.bindings.searchbox.mojom.Page_UpdateSelection_ParamsSpec || { $: {} };
if (mojo.internal.bindings.searchbox.mojom.Page_UpdateSelection_ParamsSpec.$.structSpec && mojo.internal.bindings.searchbox.mojom.Page_UpdateSelection_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.searchbox.mojom.Page_UpdateSelection_ParamsSpec.$ = {};
mojo.internal.bindings.searchbox.mojom.Page_StepSelection_ParamsSpec = mojo.internal.bindings.searchbox.mojom.Page_StepSelection_ParamsSpec || { $: {} };
if (mojo.internal.bindings.searchbox.mojom.Page_StepSelection_ParamsSpec.$.structSpec && mojo.internal.bindings.searchbox.mojom.Page_StepSelection_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.searchbox.mojom.Page_StepSelection_ParamsSpec.$ = {};
mojo.internal.bindings.searchbox.mojom.Page_OpenCurrentSelection_ParamsSpec = mojo.internal.bindings.searchbox.mojom.Page_OpenCurrentSelection_ParamsSpec || { $: {} };
if (mojo.internal.bindings.searchbox.mojom.Page_OpenCurrentSelection_ParamsSpec.$.structSpec && mojo.internal.bindings.searchbox.mojom.Page_OpenCurrentSelection_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.searchbox.mojom.Page_OpenCurrentSelection_ParamsSpec.$ = {};
mojo.internal.bindings.searchbox.mojom.Page_SetAimButtonVisible_ParamsSpec = mojo.internal.bindings.searchbox.mojom.Page_SetAimButtonVisible_ParamsSpec || { $: {} };
if (mojo.internal.bindings.searchbox.mojom.Page_SetAimButtonVisible_ParamsSpec.$.structSpec && mojo.internal.bindings.searchbox.mojom.Page_SetAimButtonVisible_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.searchbox.mojom.Page_SetAimButtonVisible_ParamsSpec.$ = {};
mojo.internal.bindings.searchbox.mojom.Page_SetKeywordSelected_ParamsSpec = mojo.internal.bindings.searchbox.mojom.Page_SetKeywordSelected_ParamsSpec || { $: {} };
if (mojo.internal.bindings.searchbox.mojom.Page_SetKeywordSelected_ParamsSpec.$.structSpec && mojo.internal.bindings.searchbox.mojom.Page_SetKeywordSelected_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.searchbox.mojom.Page_SetKeywordSelected_ParamsSpec.$ = {};
mojo.internal.bindings.searchbox.mojom.Page_SetInputText_ParamsSpec = mojo.internal.bindings.searchbox.mojom.Page_SetInputText_ParamsSpec || { $: {} };
if (mojo.internal.bindings.searchbox.mojom.Page_SetInputText_ParamsSpec.$.structSpec && mojo.internal.bindings.searchbox.mojom.Page_SetInputText_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.searchbox.mojom.Page_SetInputText_ParamsSpec.$ = {};
mojo.internal.bindings.searchbox.mojom.Page_SetThumbnail_ParamsSpec = mojo.internal.bindings.searchbox.mojom.Page_SetThumbnail_ParamsSpec || { $: {} };
if (mojo.internal.bindings.searchbox.mojom.Page_SetThumbnail_ParamsSpec.$.structSpec && mojo.internal.bindings.searchbox.mojom.Page_SetThumbnail_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.searchbox.mojom.Page_SetThumbnail_ParamsSpec.$ = {};
mojo.internal.bindings.searchbox.mojom.Page_OnContextualInputStatusChanged_ParamsSpec = mojo.internal.bindings.searchbox.mojom.Page_OnContextualInputStatusChanged_ParamsSpec || { $: {} };
if (mojo.internal.bindings.searchbox.mojom.Page_OnContextualInputStatusChanged_ParamsSpec.$.structSpec && mojo.internal.bindings.searchbox.mojom.Page_OnContextualInputStatusChanged_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.searchbox.mojom.Page_OnContextualInputStatusChanged_ParamsSpec.$ = {};
mojo.internal.bindings.searchbox.mojom.Page_OnTabStripChanged_ParamsSpec = mojo.internal.bindings.searchbox.mojom.Page_OnTabStripChanged_ParamsSpec || { $: {} };
if (mojo.internal.bindings.searchbox.mojom.Page_OnTabStripChanged_ParamsSpec.$.structSpec && mojo.internal.bindings.searchbox.mojom.Page_OnTabStripChanged_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.searchbox.mojom.Page_OnTabStripChanged_ParamsSpec.$ = {};
mojo.internal.bindings.searchbox.mojom.Page_OnInputStateChanged_ParamsSpec = mojo.internal.bindings.searchbox.mojom.Page_OnInputStateChanged_ParamsSpec || { $: {} };
if (mojo.internal.bindings.searchbox.mojom.Page_OnInputStateChanged_ParamsSpec.$.structSpec && mojo.internal.bindings.searchbox.mojom.Page_OnInputStateChanged_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.searchbox.mojom.Page_OnInputStateChanged_ParamsSpec.$ = {};
mojo.internal.bindings.searchbox.mojom.Page_AddFileContext_ParamsSpec = mojo.internal.bindings.searchbox.mojom.Page_AddFileContext_ParamsSpec || { $: {} };
if (mojo.internal.bindings.searchbox.mojom.Page_AddFileContext_ParamsSpec.$.structSpec && mojo.internal.bindings.searchbox.mojom.Page_AddFileContext_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.searchbox.mojom.Page_AddFileContext_ParamsSpec.$ = {};
mojo.internal.bindings.searchbox.mojom.Page_UpdateAutoSuggestedTabContext_ParamsSpec = mojo.internal.bindings.searchbox.mojom.Page_UpdateAutoSuggestedTabContext_ParamsSpec || { $: {} };
if (mojo.internal.bindings.searchbox.mojom.Page_UpdateAutoSuggestedTabContext_ParamsSpec.$.structSpec && mojo.internal.bindings.searchbox.mojom.Page_UpdateAutoSuggestedTabContext_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.searchbox.mojom.Page_UpdateAutoSuggestedTabContext_ParamsSpec.$ = {};
mojo.internal.bindings.searchbox.mojom.Page_UpdateLensSearchEligibility_ParamsSpec = mojo.internal.bindings.searchbox.mojom.Page_UpdateLensSearchEligibility_ParamsSpec || { $: {} };
if (mojo.internal.bindings.searchbox.mojom.Page_UpdateLensSearchEligibility_ParamsSpec.$.structSpec && mojo.internal.bindings.searchbox.mojom.Page_UpdateLensSearchEligibility_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.searchbox.mojom.Page_UpdateLensSearchEligibility_ParamsSpec.$ = {};
mojo.internal.bindings.searchbox.mojom.Page_UpdateContentSharingPolicy_ParamsSpec = mojo.internal.bindings.searchbox.mojom.Page_UpdateContentSharingPolicy_ParamsSpec || { $: {} };
if (mojo.internal.bindings.searchbox.mojom.Page_UpdateContentSharingPolicy_ParamsSpec.$.structSpec && mojo.internal.bindings.searchbox.mojom.Page_UpdateContentSharingPolicy_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.searchbox.mojom.Page_UpdateContentSharingPolicy_ParamsSpec.$ = {};
mojo.internal.bindings.searchbox.mojom.Page_UpdateAimPopupEligibility_ParamsSpec = mojo.internal.bindings.searchbox.mojom.Page_UpdateAimPopupEligibility_ParamsSpec || { $: {} };
if (mojo.internal.bindings.searchbox.mojom.Page_UpdateAimPopupEligibility_ParamsSpec.$.structSpec && mojo.internal.bindings.searchbox.mojom.Page_UpdateAimPopupEligibility_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.searchbox.mojom.Page_UpdateAimPopupEligibility_ParamsSpec.$ = {};
mojo.internal.bindings.searchbox.mojom.Page_OnPermissionPromptChanged_ParamsSpec = mojo.internal.bindings.searchbox.mojom.Page_OnPermissionPromptChanged_ParamsSpec || { $: {} };
if (mojo.internal.bindings.searchbox.mojom.Page_OnPermissionPromptChanged_ParamsSpec.$.structSpec && mojo.internal.bindings.searchbox.mojom.Page_OnPermissionPromptChanged_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.searchbox.mojom.Page_OnPermissionPromptChanged_ParamsSpec.$ = {};
mojo.internal.bindings.searchbox.mojom.Page_SetRestoredTabIds_ParamsSpec = mojo.internal.bindings.searchbox.mojom.Page_SetRestoredTabIds_ParamsSpec || { $: {} };
if (mojo.internal.bindings.searchbox.mojom.Page_SetRestoredTabIds_ParamsSpec.$.structSpec && mojo.internal.bindings.searchbox.mojom.Page_SetRestoredTabIds_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.searchbox.mojom.Page_SetRestoredTabIds_ParamsSpec.$ = {};
mojo.internal.bindings.searchbox.mojom.Page_SetAimThreadRestoredTabs_ParamsSpec = mojo.internal.bindings.searchbox.mojom.Page_SetAimThreadRestoredTabs_ParamsSpec || { $: {} };
if (mojo.internal.bindings.searchbox.mojom.Page_SetAimThreadRestoredTabs_ParamsSpec.$.structSpec && mojo.internal.bindings.searchbox.mojom.Page_SetAimThreadRestoredTabs_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.searchbox.mojom.Page_SetAimThreadRestoredTabs_ParamsSpec.$ = {};

// External type stubs (from imports)
mojo.internal.bindings.composebox_query = mojo.internal.bindings.composebox_query || {};
mojo.internal.bindings.composebox_query.mojom = mojo.internal.bindings.composebox_query.mojom || {};
mojo.internal.bindings.composebox_query.mojom.ContextUploadErrorTypeSpec = mojo.internal.bindings.composebox_query.mojom.ContextUploadErrorTypeSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.composebox_query = mojo.internal.bindings.composebox_query || {};
mojo.internal.bindings.composebox_query.mojom = mojo.internal.bindings.composebox_query.mojom || {};
mojo.internal.bindings.composebox_query.mojom.ContextUploadStatusSpec = mojo.internal.bindings.composebox_query.mojom.ContextUploadStatusSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.composebox_query = mojo.internal.bindings.composebox_query || {};
mojo.internal.bindings.composebox_query.mojom = mojo.internal.bindings.composebox_query.mojom || {};
mojo.internal.bindings.composebox_query.mojom.InputStateSpec = mojo.internal.bindings.composebox_query.mojom.InputStateSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.composebox_query = mojo.internal.bindings.composebox_query || {};
mojo.internal.bindings.composebox_query.mojom = mojo.internal.bindings.composebox_query.mojom || {};
mojo.internal.bindings.composebox_query.mojom.ModelModeSpec = mojo.internal.bindings.composebox_query.mojom.ModelModeSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.composebox_query = mojo.internal.bindings.composebox_query || {};
mojo.internal.bindings.composebox_query.mojom = mojo.internal.bindings.composebox_query.mojom || {};
mojo.internal.bindings.composebox_query.mojom.ToolModeSpec = mojo.internal.bindings.composebox_query.mojom.ToolModeSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.gfx = mojo.internal.bindings.gfx || {};
mojo.internal.bindings.gfx.mojom = mojo.internal.bindings.gfx.mojom || {};
mojo.internal.bindings.gfx.mojom.SizeSpec = mojo.internal.bindings.gfx.mojom.SizeSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.mojo_base = mojo.internal.bindings.mojo_base || {};
mojo.internal.bindings.mojo_base.mojom = mojo.internal.bindings.mojo_base.mojom || {};
mojo.internal.bindings.mojo_base.mojom.BigBufferSpec = mojo.internal.bindings.mojo_base.mojom.BigBufferSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.mojo_base = mojo.internal.bindings.mojo_base || {};
mojo.internal.bindings.mojo_base.mojom = mojo.internal.bindings.mojo_base.mojom || {};
mojo.internal.bindings.mojo_base.mojom.JSTimeSpec = mojo.internal.bindings.mojo_base.mojom.JSTimeSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.mojo_base = mojo.internal.bindings.mojo_base || {};
mojo.internal.bindings.mojo_base.mojom = mojo.internal.bindings.mojo_base.mojom || {};
mojo.internal.bindings.mojo_base.mojom.String16Spec = mojo.internal.bindings.mojo_base.mojom.String16Spec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.mojo_base = mojo.internal.bindings.mojo_base || {};
mojo.internal.bindings.mojo_base.mojom = mojo.internal.bindings.mojo_base.mojom || {};
mojo.internal.bindings.mojo_base.mojom.TimeDeltaSpec = mojo.internal.bindings.mojo_base.mojom.TimeDeltaSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.mojo_base = mojo.internal.bindings.mojo_base || {};
mojo.internal.bindings.mojo_base.mojom = mojo.internal.bindings.mojo_base.mojom || {};
mojo.internal.bindings.mojo_base.mojom.TimeTicksSpec = mojo.internal.bindings.mojo_base.mojom.TimeTicksSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.mojo_base = mojo.internal.bindings.mojo_base || {};
mojo.internal.bindings.mojo_base.mojom = mojo.internal.bindings.mojo_base.mojom || {};
mojo.internal.bindings.mojo_base.mojom.UnguessableTokenSpec = mojo.internal.bindings.mojo_base.mojom.UnguessableTokenSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.omnibox = mojo.internal.bindings.omnibox || {};
mojo.internal.bindings.omnibox.mojom = mojo.internal.bindings.omnibox.mojom || {};
mojo.internal.bindings.omnibox.mojom.NavigationPredictorSpec = mojo.internal.bindings.omnibox.mojom.NavigationPredictorSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.searchbox = mojo.internal.bindings.searchbox || {};
mojo.internal.bindings.searchbox.mojom = mojo.internal.bindings.searchbox.mojom || {};
mojo.internal.bindings.searchbox.mojom.SearchContextAttachmentSpec = mojo.internal.bindings.searchbox.mojom.SearchContextAttachmentSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.ui = mojo.internal.bindings.ui || {};
mojo.internal.bindings.ui.mojom = mojo.internal.bindings.ui.mojom || {};
mojo.internal.bindings.ui.mojom.WindowOpenDispositionSpec = mojo.internal.bindings.ui.mojom.WindowOpenDispositionSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.url = mojo.internal.bindings.url || {};
mojo.internal.bindings.url.mojom = mojo.internal.bindings.url.mojom || {};
mojo.internal.bindings.url.mojom.UrlSpec = mojo.internal.bindings.url.mojom.UrlSpec || { $: mojo.internal.OpaqueStruct.$ };

// Enum: SideType
mojo.internal.bindings.searchbox.mojom.SideType = {
  kDefaultPrimary: 0,
  kSecondary: 1,
};

// Enum: RenderType
mojo.internal.bindings.searchbox.mojom.RenderType = {
  kDefaultVertical: 0,
  kHorizontal: 1,
  kGrid: 2,
};

// Enum: SelectionLineState
mojo.internal.bindings.searchbox.mojom.SelectionLineState = {
  kNormal: 1,
  kKeywordMode: 2,
  kFocusedButtonAction: 3,
  kFocusedButtonRemoveSuggestion: 4,
  kFocusedButtonAim: 5,
  kFocusedButtonContextEntrypoint: 6,
};

// Enum: SelectionDirection
mojo.internal.bindings.searchbox.mojom.SelectionDirection = {
  kForward: 1,
  kBackward: 2,
};

// Enum: SelectionStep
mojo.internal.bindings.searchbox.mojom.SelectionStep = {
  kWholeLine: 1,
  kStateOrLine: 2,
  kAllLines: 3,
};

// Enum: DriveUploadError
mojo.internal.bindings.searchbox.mojom.DriveUploadError = {
  kSizeLimitExceeded: 0,
  kMaxFilesExceeded: 1,
};

// Enum: DriveDisclaimerStatus
mojo.internal.bindings.searchbox.mojom.DriveDisclaimerStatus = {
  kNotAccepted: 0,
  kAccepted: 1,
  kRestricted: 2,
};

// Enum: SuggestInventory
mojo.internal.bindings.searchbox.mojom.SuggestInventory = {
  kDefault: 0,
  kTravel: 1,
  kAimTakeover: 2,
  kImageGenTakeover: 3,
  kConversationStarters: 4,
};

// Interface: PageHandlerFactory
mojo.internal.bindings.searchbox.mojom.PageHandlerFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
    if (handle) {
      this.__mojoHandle = handle.router_ ? handle.router_.pipe_ : (handle.pipe_ || handle);
    }
  }
};

mojo.internal.bindings.searchbox.mojom.PageHandlerFactoryRemote = class {
  static get $interfaceName() {
    return 'searchbox.mojom.PageHandlerFactory';
  }

  constructor(handle = undefined) {
    this.__mojoHandle = handle;
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.searchbox.mojom.PageHandlerFactoryPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.searchbox.mojom.PageHandlerFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  createPageHandler(arg_page, arg_handler) {
    return this.$.createPageHandler(arg_page, arg_handler);
  }
};

mojo.internal.bindings.searchbox.mojom.PageHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('searchbox.mojom.PageHandlerFactory', [
      { explicit: null },
    ]);
  }

  createPageHandler(arg_page, arg_handler) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.searchbox.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec,
      null,
      [arg_page, arg_handler],
      false);
  }

};

mojo.internal.bindings.searchbox.mojom.PageHandlerFactory.getRemote = function() {
  let remote = new mojo.internal.bindings.searchbox.mojom.PageHandlerFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'searchbox.mojom.PageHandlerFactory',
    'context');
  return remote.$;
};

mojo.internal.bindings.searchbox.mojom.PageHandlerFactoryReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('searchbox.mojom.PageHandlerFactory', [
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.searchbox.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.createPageHandler');
          const result = this.impl.createPageHandler(params.arg_page, params.arg_handler);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.searchbox.mojom.PageHandlerFactoryReceiver = mojo.internal.bindings.searchbox.mojom.PageHandlerFactoryReceiver;

mojo.internal.bindings.searchbox.mojom.PageHandlerFactoryPtr = mojo.internal.bindings.searchbox.mojom.PageHandlerFactoryRemote;
mojo.internal.bindings.searchbox.mojom.PageHandlerFactoryRequest = mojo.internal.bindings.searchbox.mojom.PageHandlerFactoryPendingReceiver;


// Interface: PageHandler
mojo.internal.bindings.searchbox.mojom.PageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
    if (handle) {
      this.__mojoHandle = handle.router_ ? handle.router_.pipe_ : (handle.pipe_ || handle);
    }
  }
};

mojo.internal.bindings.searchbox.mojom.PageHandlerRemote = class {
  static get $interfaceName() {
    return 'searchbox.mojom.PageHandler';
  }

  constructor(handle = undefined) {
    this.__mojoHandle = handle;
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.searchbox.mojom.PageHandlerPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.searchbox.mojom.PageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onFocusChanged(arg_focused) {
    return this.$.onFocusChanged(arg_focused);
  }
  queryAutocomplete(arg_input, arg_prevent_inline_autocomplete, arg_cursor_position) {
    return this.$.queryAutocomplete(arg_input, arg_prevent_inline_autocomplete, arg_cursor_position);
  }
  queryAutocompleteWithSuggestInventory(arg_input, arg_prevent_inline_autocomplete, arg_cursor_position, arg_suggest_inventory) {
    return this.$.queryAutocompleteWithSuggestInventory(arg_input, arg_prevent_inline_autocomplete, arg_cursor_position, arg_suggest_inventory);
  }
  stopAutocomplete(arg_clear_result) {
    return this.$.stopAutocomplete(arg_clear_result);
  }
  openAutocompleteMatch(arg_line, arg_url, arg_are_matches_showing, arg_mouse_button, arg_alt_key, arg_ctrl_key, arg_meta_key, arg_shift_key, arg_via_keyboard) {
    return this.$.openAutocompleteMatch(arg_line, arg_url, arg_are_matches_showing, arg_mouse_button, arg_alt_key, arg_ctrl_key, arg_meta_key, arg_shift_key, arg_via_keyboard);
  }
  setSmartComposeStats(arg_smart_compose_stats) {
    return this.$.setSmartComposeStats(arg_smart_compose_stats);
  }
  setPopupSelection(arg_selection) {
    return this.$.setPopupSelection(arg_selection);
  }
  openPopupSelection(arg_result_sequence_id, arg_selection, arg_disposition) {
    return this.$.openPopupSelection(arg_result_sequence_id, arg_selection, arg_disposition);
  }
  onNavigationLikely(arg_line, arg_url, arg_navigation_predictor) {
    return this.$.onNavigationLikely(arg_line, arg_url, arg_navigation_predictor);
  }
  deleteAutocompleteMatch(arg_line, arg_url) {
    return this.$.deleteAutocompleteMatch(arg_line, arg_url);
  }
  activateKeyword(arg_line, arg_url, arg_match_selection_timestamp, arg_is_mouse_event) {
    return this.$.activateKeyword(arg_line, arg_url, arg_match_selection_timestamp, arg_is_mouse_event);
  }
  executeAction(arg_line, arg_action_index, arg_url, arg_match_selection_timestamp, arg_mouse_button, arg_alt_key, arg_ctrl_key, arg_meta_key, arg_shift_key) {
    return this.$.executeAction(arg_line, arg_action_index, arg_url, arg_match_selection_timestamp, arg_mouse_button, arg_alt_key, arg_ctrl_key, arg_meta_key, arg_shift_key);
  }
  onThumbnailRemoved() {
    return this.$.onThumbnailRemoved();
  }
  getPlaceholderConfig() {
    return this.$.getPlaceholderConfig();
  }
  getRecentTabs() {
    return this.$.getRecentTabs();
  }
  getTabPreview(arg_tab_id) {
    return this.$.getTabPreview(arg_tab_id);
  }
  waitForTabFaviconLoad(arg_tab_id) {
    return this.$.waitForTabFaviconLoad(arg_tab_id);
  }
  getInputState() {
    return this.$.getInputState();
  }
  notifySessionStarted() {
    return this.$.notifySessionStarted();
  }
  notifySessionAbandoned() {
    return this.$.notifySessionAbandoned();
  }
  addFileContext(arg_file_info, arg_file_bytes) {
    return this.$.addFileContext(arg_file_info, arg_file_bytes);
  }
  addTabContext(arg_tab_id, arg_delay_upload) {
    return this.$.addTabContext(arg_tab_id, arg_delay_upload);
  }
  deleteContext(arg_token, arg_from_automatic_chip) {
    return this.$.deleteContext(arg_token, arg_from_automatic_chip);
  }
  clearFiles(arg_should_block_auto_suggested_tabs) {
    return this.$.clearFiles(arg_should_block_auto_suggested_tabs);
  }
  submitQuery(arg_query_text, arg_mouse_button, arg_alt_key, arg_ctrl_key, arg_meta_key, arg_shift_key, arg_is_voice_search) {
    return this.$.submitQuery(arg_query_text, arg_mouse_button, arg_alt_key, arg_ctrl_key, arg_meta_key, arg_shift_key, arg_is_voice_search);
  }
  openLensSearch() {
    return this.$.openLensSearch();
  }
  setActiveToolMode(arg_tool) {
    return this.$.setActiveToolMode(arg_tool);
  }
  setActiveModelMode(arg_model) {
    return this.$.setActiveModelMode(arg_model);
  }
  activateMetricsFunnel(arg_funnel_name) {
    return this.$.activateMetricsFunnel(arg_funnel_name);
  }
  recordToolSelectionAction(arg_tool) {
    return this.$.recordToolSelectionAction(arg_tool);
  }
  recordModelSelectionAction(arg_model) {
    return this.$.recordModelSelectionAction(arg_model);
  }
  getDriveDisclaimerStatus() {
    return this.$.getDriveDisclaimerStatus();
  }
  onDriveDisclaimerAccepted() {
    return this.$.onDriveDisclaimerAccepted();
  }
  onDriveUploadClicked() {
    return this.$.onDriveUploadClicked();
  }
  getPageClassification() {
    return this.$.getPageClassification();
  }
};

mojo.internal.bindings.searchbox.mojom.PageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('searchbox.mojom.PageHandler', [
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
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  onFocusChanged(arg_focused) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.searchbox.mojom.PageHandler_OnFocusChanged_ParamsSpec,
      null,
      [arg_focused],
      false);
  }

  queryAutocomplete(arg_input, arg_prevent_inline_autocomplete, arg_cursor_position) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.searchbox.mojom.PageHandler_QueryAutocomplete_ParamsSpec,
      null,
      [arg_input, arg_prevent_inline_autocomplete, arg_cursor_position],
      false);
  }

  queryAutocompleteWithSuggestInventory(arg_input, arg_prevent_inline_autocomplete, arg_cursor_position, arg_suggest_inventory) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.searchbox.mojom.PageHandler_QueryAutocompleteWithSuggestInventory_ParamsSpec,
      null,
      [arg_input, arg_prevent_inline_autocomplete, arg_cursor_position, arg_suggest_inventory],
      false);
  }

  stopAutocomplete(arg_clear_result) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.searchbox.mojom.PageHandler_StopAutocomplete_ParamsSpec,
      null,
      [arg_clear_result],
      false);
  }

  openAutocompleteMatch(arg_line, arg_url, arg_are_matches_showing, arg_mouse_button, arg_alt_key, arg_ctrl_key, arg_meta_key, arg_shift_key, arg_via_keyboard) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.searchbox.mojom.PageHandler_OpenAutocompleteMatch_ParamsSpec,
      null,
      [arg_line, arg_url, arg_are_matches_showing, arg_mouse_button, arg_alt_key, arg_ctrl_key, arg_meta_key, arg_shift_key, arg_via_keyboard],
      false);
  }

  setSmartComposeStats(arg_smart_compose_stats) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojo.internal.bindings.searchbox.mojom.PageHandler_SetSmartComposeStats_ParamsSpec,
      null,
      [arg_smart_compose_stats],
      false);
  }

  setPopupSelection(arg_selection) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      mojo.internal.bindings.searchbox.mojom.PageHandler_SetPopupSelection_ParamsSpec,
      null,
      [arg_selection],
      false);
  }

  openPopupSelection(arg_result_sequence_id, arg_selection, arg_disposition) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      mojo.internal.bindings.searchbox.mojom.PageHandler_OpenPopupSelection_ParamsSpec,
      null,
      [arg_result_sequence_id, arg_selection, arg_disposition],
      false);
  }

  onNavigationLikely(arg_line, arg_url, arg_navigation_predictor) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      mojo.internal.bindings.searchbox.mojom.PageHandler_OnNavigationLikely_ParamsSpec,
      null,
      [arg_line, arg_url, arg_navigation_predictor],
      false);
  }

  deleteAutocompleteMatch(arg_line, arg_url) {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      mojo.internal.bindings.searchbox.mojom.PageHandler_DeleteAutocompleteMatch_ParamsSpec,
      null,
      [arg_line, arg_url],
      false);
  }

  activateKeyword(arg_line, arg_url, arg_match_selection_timestamp, arg_is_mouse_event) {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      mojo.internal.bindings.searchbox.mojom.PageHandler_ActivateKeyword_ParamsSpec,
      null,
      [arg_line, arg_url, arg_match_selection_timestamp, arg_is_mouse_event],
      false);
  }

  executeAction(arg_line, arg_action_index, arg_url, arg_match_selection_timestamp, arg_mouse_button, arg_alt_key, arg_ctrl_key, arg_meta_key, arg_shift_key) {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      mojo.internal.bindings.searchbox.mojom.PageHandler_ExecuteAction_ParamsSpec,
      null,
      [arg_line, arg_action_index, arg_url, arg_match_selection_timestamp, arg_mouse_button, arg_alt_key, arg_ctrl_key, arg_meta_key, arg_shift_key],
      false);
  }

  onThumbnailRemoved() {
    return this.proxy.sendMessage(
      this.ordinals[12],  // ordinal
      mojo.internal.bindings.searchbox.mojom.PageHandler_OnThumbnailRemoved_ParamsSpec,
      null,
      [],
      false);
  }

  getPlaceholderConfig() {
    return this.proxy.sendMessage(
      this.ordinals[13],  // ordinal
      mojo.internal.bindings.searchbox.mojom.PageHandler_GetPlaceholderConfig_ParamsSpec,
      mojo.internal.bindings.searchbox.mojom.PageHandler_GetPlaceholderConfig_ResponseParamsSpec,
      [],
      false);
  }

  getRecentTabs() {
    return this.proxy.sendMessage(
      this.ordinals[14],  // ordinal
      mojo.internal.bindings.searchbox.mojom.PageHandler_GetRecentTabs_ParamsSpec,
      mojo.internal.bindings.searchbox.mojom.PageHandler_GetRecentTabs_ResponseParamsSpec,
      [],
      false);
  }

  getTabPreview(arg_tab_id) {
    return this.proxy.sendMessage(
      this.ordinals[15],  // ordinal
      mojo.internal.bindings.searchbox.mojom.PageHandler_GetTabPreview_ParamsSpec,
      mojo.internal.bindings.searchbox.mojom.PageHandler_GetTabPreview_ResponseParamsSpec,
      [arg_tab_id],
      false);
  }

  waitForTabFaviconLoad(arg_tab_id) {
    return this.proxy.sendMessage(
      this.ordinals[16],  // ordinal
      mojo.internal.bindings.searchbox.mojom.PageHandler_WaitForTabFaviconLoad_ParamsSpec,
      mojo.internal.bindings.searchbox.mojom.PageHandler_WaitForTabFaviconLoad_ResponseParamsSpec,
      [arg_tab_id],
      false);
  }

  getInputState() {
    return this.proxy.sendMessage(
      this.ordinals[17],  // ordinal
      mojo.internal.bindings.searchbox.mojom.PageHandler_GetInputState_ParamsSpec,
      mojo.internal.bindings.searchbox.mojom.PageHandler_GetInputState_ResponseParamsSpec,
      [],
      false);
  }

  notifySessionStarted() {
    return this.proxy.sendMessage(
      this.ordinals[18],  // ordinal
      mojo.internal.bindings.searchbox.mojom.PageHandler_NotifySessionStarted_ParamsSpec,
      null,
      [],
      false);
  }

  notifySessionAbandoned() {
    return this.proxy.sendMessage(
      this.ordinals[19],  // ordinal
      mojo.internal.bindings.searchbox.mojom.PageHandler_NotifySessionAbandoned_ParamsSpec,
      null,
      [],
      false);
  }

  addFileContext(arg_file_info, arg_file_bytes) {
    return this.proxy.sendMessage(
      this.ordinals[20],  // ordinal
      mojo.internal.bindings.searchbox.mojom.PageHandler_AddFileContext_ParamsSpec,
      null,
      [arg_file_info, arg_file_bytes],
      false);
  }

  addTabContext(arg_tab_id, arg_delay_upload) {
    return this.proxy.sendMessage(
      this.ordinals[21],  // ordinal
      mojo.internal.bindings.searchbox.mojom.PageHandler_AddTabContext_ParamsSpec,
      null,
      [arg_tab_id, arg_delay_upload],
      false);
  }

  deleteContext(arg_token, arg_from_automatic_chip) {
    return this.proxy.sendMessage(
      this.ordinals[22],  // ordinal
      mojo.internal.bindings.searchbox.mojom.PageHandler_DeleteContext_ParamsSpec,
      null,
      [arg_token, arg_from_automatic_chip],
      false);
  }

  clearFiles(arg_should_block_auto_suggested_tabs) {
    return this.proxy.sendMessage(
      this.ordinals[23],  // ordinal
      mojo.internal.bindings.searchbox.mojom.PageHandler_ClearFiles_ParamsSpec,
      null,
      [arg_should_block_auto_suggested_tabs],
      false);
  }

  submitQuery(arg_query_text, arg_mouse_button, arg_alt_key, arg_ctrl_key, arg_meta_key, arg_shift_key, arg_is_voice_search) {
    return this.proxy.sendMessage(
      this.ordinals[24],  // ordinal
      mojo.internal.bindings.searchbox.mojom.PageHandler_SubmitQuery_ParamsSpec,
      null,
      [arg_query_text, arg_mouse_button, arg_alt_key, arg_ctrl_key, arg_meta_key, arg_shift_key, arg_is_voice_search],
      false);
  }

  openLensSearch() {
    return this.proxy.sendMessage(
      this.ordinals[25],  // ordinal
      mojo.internal.bindings.searchbox.mojom.PageHandler_OpenLensSearch_ParamsSpec,
      null,
      [],
      false);
  }

  setActiveToolMode(arg_tool) {
    return this.proxy.sendMessage(
      this.ordinals[26],  // ordinal
      mojo.internal.bindings.searchbox.mojom.PageHandler_SetActiveToolMode_ParamsSpec,
      null,
      [arg_tool],
      false);
  }

  setActiveModelMode(arg_model) {
    return this.proxy.sendMessage(
      this.ordinals[27],  // ordinal
      mojo.internal.bindings.searchbox.mojom.PageHandler_SetActiveModelMode_ParamsSpec,
      null,
      [arg_model],
      false);
  }

  activateMetricsFunnel(arg_funnel_name) {
    return this.proxy.sendMessage(
      this.ordinals[28],  // ordinal
      mojo.internal.bindings.searchbox.mojom.PageHandler_ActivateMetricsFunnel_ParamsSpec,
      null,
      [arg_funnel_name],
      false);
  }

  recordToolSelectionAction(arg_tool) {
    return this.proxy.sendMessage(
      this.ordinals[29],  // ordinal
      mojo.internal.bindings.searchbox.mojom.PageHandler_RecordToolSelectionAction_ParamsSpec,
      null,
      [arg_tool],
      false);
  }

  recordModelSelectionAction(arg_model) {
    return this.proxy.sendMessage(
      this.ordinals[30],  // ordinal
      mojo.internal.bindings.searchbox.mojom.PageHandler_RecordModelSelectionAction_ParamsSpec,
      null,
      [arg_model],
      false);
  }

  getDriveDisclaimerStatus() {
    return this.proxy.sendMessage(
      this.ordinals[31],  // ordinal
      mojo.internal.bindings.searchbox.mojom.PageHandler_GetDriveDisclaimerStatus_ParamsSpec,
      mojo.internal.bindings.searchbox.mojom.PageHandler_GetDriveDisclaimerStatus_ResponseParamsSpec,
      [],
      false);
  }

  onDriveDisclaimerAccepted() {
    return this.proxy.sendMessage(
      this.ordinals[32],  // ordinal
      mojo.internal.bindings.searchbox.mojom.PageHandler_OnDriveDisclaimerAccepted_ParamsSpec,
      null,
      [],
      false);
  }

  onDriveUploadClicked() {
    return this.proxy.sendMessage(
      this.ordinals[33],  // ordinal
      mojo.internal.bindings.searchbox.mojom.PageHandler_OnDriveUploadClicked_ParamsSpec,
      mojo.internal.bindings.searchbox.mojom.PageHandler_OnDriveUploadClicked_ResponseParamsSpec,
      [],
      false);
  }

  getPageClassification() {
    return this.proxy.sendMessage(
      this.ordinals[34],  // ordinal
      mojo.internal.bindings.searchbox.mojom.PageHandler_GetPageClassification_ParamsSpec,
      mojo.internal.bindings.searchbox.mojom.PageHandler_GetPageClassification_ResponseParamsSpec,
      [],
      false);
  }

};

mojo.internal.bindings.searchbox.mojom.PageHandler.getRemote = function() {
  let remote = new mojo.internal.bindings.searchbox.mojom.PageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'searchbox.mojom.PageHandler',
    'context');
  return remote.$;
};

mojo.internal.bindings.searchbox.mojom.PageHandlerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('searchbox.mojom.PageHandler', [
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.searchbox.mojom.PageHandler_OnFocusChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onFocusChanged');
          const result = this.impl.onFocusChanged(params.arg_focused);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.searchbox.mojom.PageHandler_QueryAutocomplete_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.queryAutocomplete');
          const result = this.impl.queryAutocomplete(params.arg_input, params.arg_prevent_inline_autocomplete, params.arg_cursor_position);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.searchbox.mojom.PageHandler_QueryAutocompleteWithSuggestInventory_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.queryAutocompleteWithSuggestInventory');
          const result = this.impl.queryAutocompleteWithSuggestInventory(params.arg_input, params.arg_prevent_inline_autocomplete, params.arg_cursor_position, params.arg_suggest_inventory);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.searchbox.mojom.PageHandler_StopAutocomplete_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.stopAutocomplete');
          const result = this.impl.stopAutocomplete(params.arg_clear_result);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.searchbox.mojom.PageHandler_OpenAutocompleteMatch_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.openAutocompleteMatch');
          const result = this.impl.openAutocompleteMatch(params.arg_line, params.arg_url, params.arg_are_matches_showing, params.arg_mouse_button, params.arg_alt_key, params.arg_ctrl_key, params.arg_meta_key, params.arg_shift_key, params.arg_via_keyboard);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.searchbox.mojom.PageHandler_SetSmartComposeStats_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setSmartComposeStats');
          const result = this.impl.setSmartComposeStats(params.arg_smart_compose_stats);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.searchbox.mojom.PageHandler_SetPopupSelection_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setPopupSelection');
          const result = this.impl.setPopupSelection(params.arg_selection);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.searchbox.mojom.PageHandler_OpenPopupSelection_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.openPopupSelection');
          const result = this.impl.openPopupSelection(params.arg_result_sequence_id, params.arg_selection, params.arg_disposition);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.searchbox.mojom.PageHandler_OnNavigationLikely_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onNavigationLikely');
          const result = this.impl.onNavigationLikely(params.arg_line, params.arg_url, params.arg_navigation_predictor);
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.searchbox.mojom.PageHandler_DeleteAutocompleteMatch_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.deleteAutocompleteMatch');
          const result = this.impl.deleteAutocompleteMatch(params.arg_line, params.arg_url);
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.searchbox.mojom.PageHandler_ActivateKeyword_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.activateKeyword');
          const result = this.impl.activateKeyword(params.arg_line, params.arg_url, params.arg_match_selection_timestamp, params.arg_is_mouse_event);
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.searchbox.mojom.PageHandler_ExecuteAction_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.executeAction');
          const result = this.impl.executeAction(params.arg_line, params.arg_action_index, params.arg_url, params.arg_match_selection_timestamp, params.arg_mouse_button, params.arg_alt_key, params.arg_ctrl_key, params.arg_meta_key, params.arg_shift_key);
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.searchbox.mojom.PageHandler_OnThumbnailRemoved_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onThumbnailRemoved');
          const result = this.impl.onThumbnailRemoved();
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.searchbox.mojom.PageHandler_GetPlaceholderConfig_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getPlaceholderConfig');
          const result = this.impl.getPlaceholderConfig();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const val = (response && typeof response === 'object' && 'arg_config' in response) ? response['arg_config'] : response;
              const resp_obj = { 'arg_config': val };
              const message = new mojo.internal.Message(
                this.router_, 0, mojo.internal.kMessageFlagIsResponse,
                header.ordinal, header.requestId, mojo.internal.bindings.searchbox.mojom.PageHandler_GetPlaceholderConfig_ResponseParamsSpec.$.structSpec, resp_obj);
              this.router_.send(message);
            }).catch(e => console.error('[GeneratedReceiver] getPlaceholderConfig FAILED:', e));
          }
          break;
        }
        case 14: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.searchbox.mojom.PageHandler_GetRecentTabs_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getRecentTabs');
          const result = this.impl.getRecentTabs();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const val = (response && typeof response === 'object' && 'arg_tabs' in response) ? response['arg_tabs'] : response;
              const resp_obj = { 'arg_tabs': val };
              const message = new mojo.internal.Message(
                this.router_, 0, mojo.internal.kMessageFlagIsResponse,
                header.ordinal, header.requestId, mojo.internal.bindings.searchbox.mojom.PageHandler_GetRecentTabs_ResponseParamsSpec.$.structSpec, resp_obj);
              this.router_.send(message);
            }).catch(e => console.error('[GeneratedReceiver] getRecentTabs FAILED:', e));
          }
          break;
        }
        case 15: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.searchbox.mojom.PageHandler_GetTabPreview_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getTabPreview');
          const result = this.impl.getTabPreview(params.arg_tab_id);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const val = (response && typeof response === 'object' && 'arg_preview_data_url' in response) ? response['arg_preview_data_url'] : response;
              const resp_obj = { 'arg_preview_data_url': val };
              const message = new mojo.internal.Message(
                this.router_, 0, mojo.internal.kMessageFlagIsResponse,
                header.ordinal, header.requestId, mojo.internal.bindings.searchbox.mojom.PageHandler_GetTabPreview_ResponseParamsSpec.$.structSpec, resp_obj);
              this.router_.send(message);
            }).catch(e => console.error('[GeneratedReceiver] getTabPreview FAILED:', e));
          }
          break;
        }
        case 16: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.searchbox.mojom.PageHandler_WaitForTabFaviconLoad_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.waitForTabFaviconLoad');
          const result = this.impl.waitForTabFaviconLoad(params.arg_tab_id);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const val = (response && typeof response === 'object' && 'arg_favicon_data_url' in response) ? response['arg_favicon_data_url'] : response;
              const resp_obj = { 'arg_favicon_data_url': val };
              const message = new mojo.internal.Message(
                this.router_, 0, mojo.internal.kMessageFlagIsResponse,
                header.ordinal, header.requestId, mojo.internal.bindings.searchbox.mojom.PageHandler_WaitForTabFaviconLoad_ResponseParamsSpec.$.structSpec, resp_obj);
              this.router_.send(message);
            }).catch(e => console.error('[GeneratedReceiver] waitForTabFaviconLoad FAILED:', e));
          }
          break;
        }
        case 17: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.searchbox.mojom.PageHandler_GetInputState_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getInputState');
          const result = this.impl.getInputState();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const val = (response && typeof response === 'object' && 'arg_state' in response) ? response['arg_state'] : response;
              const resp_obj = { 'arg_state': val };
              const message = new mojo.internal.Message(
                this.router_, 0, mojo.internal.kMessageFlagIsResponse,
                header.ordinal, header.requestId, mojo.internal.bindings.searchbox.mojom.PageHandler_GetInputState_ResponseParamsSpec.$.structSpec, resp_obj);
              this.router_.send(message);
            }).catch(e => console.error('[GeneratedReceiver] getInputState FAILED:', e));
          }
          break;
        }
        case 18: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.searchbox.mojom.PageHandler_NotifySessionStarted_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.notifySessionStarted');
          const result = this.impl.notifySessionStarted();
          break;
        }
        case 19: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.searchbox.mojom.PageHandler_NotifySessionAbandoned_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.notifySessionAbandoned');
          const result = this.impl.notifySessionAbandoned();
          break;
        }
        case 20: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.searchbox.mojom.PageHandler_AddFileContext_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.addFileContext');
          const result = this.impl.addFileContext(params.arg_file_info, params.arg_file_bytes);
          break;
        }
        case 21: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.searchbox.mojom.PageHandler_AddTabContext_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.addTabContext');
          const result = this.impl.addTabContext(params.arg_tab_id, params.arg_delay_upload);
          break;
        }
        case 22: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.searchbox.mojom.PageHandler_DeleteContext_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.deleteContext');
          const result = this.impl.deleteContext(params.arg_token, params.arg_from_automatic_chip);
          break;
        }
        case 23: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.searchbox.mojom.PageHandler_ClearFiles_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.clearFiles');
          const result = this.impl.clearFiles(params.arg_should_block_auto_suggested_tabs);
          break;
        }
        case 24: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.searchbox.mojom.PageHandler_SubmitQuery_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.submitQuery');
          const result = this.impl.submitQuery(params.arg_query_text, params.arg_mouse_button, params.arg_alt_key, params.arg_ctrl_key, params.arg_meta_key, params.arg_shift_key, params.arg_is_voice_search);
          break;
        }
        case 25: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.searchbox.mojom.PageHandler_OpenLensSearch_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.openLensSearch');
          const result = this.impl.openLensSearch();
          break;
        }
        case 26: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.searchbox.mojom.PageHandler_SetActiveToolMode_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setActiveToolMode');
          const result = this.impl.setActiveToolMode(params.arg_tool);
          break;
        }
        case 27: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.searchbox.mojom.PageHandler_SetActiveModelMode_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setActiveModelMode');
          const result = this.impl.setActiveModelMode(params.arg_model);
          break;
        }
        case 28: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.searchbox.mojom.PageHandler_ActivateMetricsFunnel_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.activateMetricsFunnel');
          const result = this.impl.activateMetricsFunnel(params.arg_funnel_name);
          break;
        }
        case 29: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.searchbox.mojom.PageHandler_RecordToolSelectionAction_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.recordToolSelectionAction');
          const result = this.impl.recordToolSelectionAction(params.arg_tool);
          break;
        }
        case 30: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.searchbox.mojom.PageHandler_RecordModelSelectionAction_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.recordModelSelectionAction');
          const result = this.impl.recordModelSelectionAction(params.arg_model);
          break;
        }
        case 31: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.searchbox.mojom.PageHandler_GetDriveDisclaimerStatus_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getDriveDisclaimerStatus');
          const result = this.impl.getDriveDisclaimerStatus();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const val = (response && typeof response === 'object' && 'arg_status' in response) ? response['arg_status'] : response;
              const resp_obj = { 'arg_status': val };
              const message = new mojo.internal.Message(
                this.router_, 0, mojo.internal.kMessageFlagIsResponse,
                header.ordinal, header.requestId, mojo.internal.bindings.searchbox.mojom.PageHandler_GetDriveDisclaimerStatus_ResponseParamsSpec.$.structSpec, resp_obj);
              this.router_.send(message);
            }).catch(e => console.error('[GeneratedReceiver] getDriveDisclaimerStatus FAILED:', e));
          }
          break;
        }
        case 32: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.searchbox.mojom.PageHandler_OnDriveDisclaimerAccepted_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onDriveDisclaimerAccepted');
          const result = this.impl.onDriveDisclaimerAccepted();
          break;
        }
        case 33: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.searchbox.mojom.PageHandler_OnDriveUploadClicked_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onDriveUploadClicked');
          const result = this.impl.onDriveUploadClicked();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const val = (response && typeof response === 'object' && 'arg_response' in response) ? response['arg_response'] : response;
              const resp_obj = { 'arg_response': val };
              const message = new mojo.internal.Message(
                this.router_, 0, mojo.internal.kMessageFlagIsResponse,
                header.ordinal, header.requestId, mojo.internal.bindings.searchbox.mojom.PageHandler_OnDriveUploadClicked_ResponseParamsSpec.$.structSpec, resp_obj);
              this.router_.send(message);
            }).catch(e => console.error('[GeneratedReceiver] onDriveUploadClicked FAILED:', e));
          }
          break;
        }
        case 34: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.searchbox.mojom.PageHandler_GetPageClassification_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getPageClassification');
          const result = this.impl.getPageClassification();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const val = (response && typeof response === 'object' && 'arg_metricSource' in response) ? response['arg_metricSource'] : response;
              const resp_obj = { 'arg_metricSource': val };
              const message = new mojo.internal.Message(
                this.router_, 0, mojo.internal.kMessageFlagIsResponse,
                header.ordinal, header.requestId, mojo.internal.bindings.searchbox.mojom.PageHandler_GetPageClassification_ResponseParamsSpec.$.structSpec, resp_obj);
              this.router_.send(message);
            }).catch(e => console.error('[GeneratedReceiver] getPageClassification FAILED:', e));
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

mojo.internal.bindings.searchbox.mojom.PageHandlerReceiver = mojo.internal.bindings.searchbox.mojom.PageHandlerReceiver;

mojo.internal.bindings.searchbox.mojom.PageHandlerPtr = mojo.internal.bindings.searchbox.mojom.PageHandlerRemote;
mojo.internal.bindings.searchbox.mojom.PageHandlerRequest = mojo.internal.bindings.searchbox.mojom.PageHandlerPendingReceiver;


// Interface: Page
mojo.internal.bindings.searchbox.mojom.PagePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
    if (handle) {
      this.__mojoHandle = handle.router_ ? handle.router_.pipe_ : (handle.pipe_ || handle);
    }
  }
};

mojo.internal.bindings.searchbox.mojom.PageRemote = class {
  static get $interfaceName() {
    return 'searchbox.mojom.Page';
  }

  constructor(handle = undefined) {
    this.__mojoHandle = handle;
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.searchbox.mojom.PagePendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.searchbox.mojom.PageRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  autocompleteResultChanged(arg_result) {
    return this.$.autocompleteResultChanged(arg_result);
  }
  updateSelection(arg_old_selection, arg_selection) {
    return this.$.updateSelection(arg_old_selection, arg_selection);
  }
  stepSelection(arg_direction, arg_step) {
    return this.$.stepSelection(arg_direction, arg_step);
  }
  openCurrentSelection(arg_disposition) {
    return this.$.openCurrentSelection(arg_disposition);
  }
  setAimButtonVisible(arg_visible) {
    return this.$.setAimButtonVisible(arg_visible);
  }
  setKeywordSelected(arg_is_keyword_selected) {
    return this.$.setKeywordSelected(arg_is_keyword_selected);
  }
  setInputText(arg_input) {
    return this.$.setInputText(arg_input);
  }
  setThumbnail(arg_thumbnail_url, arg_is_deletable) {
    return this.$.setThumbnail(arg_thumbnail_url, arg_is_deletable);
  }
  onContextualInputStatusChanged(arg_token, arg_status, arg_error_type) {
    return this.$.onContextualInputStatusChanged(arg_token, arg_status, arg_error_type);
  }
  onTabStripChanged() {
    return this.$.onTabStripChanged();
  }
  onInputStateChanged(arg_input_state) {
    return this.$.onInputStateChanged(arg_input_state);
  }
  addFileContext(arg_token, arg_file_info) {
    return this.$.addFileContext(arg_token, arg_file_info);
  }
  updateAutoSuggestedTabContext(arg_tab) {
    return this.$.updateAutoSuggestedTabContext(arg_tab);
  }
  updateLensSearchEligibility(arg_eligible) {
    return this.$.updateLensSearchEligibility(arg_eligible);
  }
  updateContentSharingPolicy(arg_enabled) {
    return this.$.updateContentSharingPolicy(arg_enabled);
  }
  updateAimPopupEligibility(arg_eligible) {
    return this.$.updateAimPopupEligibility(arg_eligible);
  }
  onPermissionPromptChanged(arg_is_showing, arg_prompt_size) {
    return this.$.onPermissionPromptChanged(arg_is_showing, arg_prompt_size);
  }
  setRestoredTabIds(arg_ids) {
    return this.$.setRestoredTabIds(arg_ids);
  }
  setAimThreadRestoredTabs(arg_tabs) {
    return this.$.setAimThreadRestoredTabs(arg_tabs);
  }
};

mojo.internal.bindings.searchbox.mojom.PageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('searchbox.mojom.Page', [
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

  autocompleteResultChanged(arg_result) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.searchbox.mojom.Page_AutocompleteResultChanged_ParamsSpec,
      null,
      [arg_result],
      false);
  }

  updateSelection(arg_old_selection, arg_selection) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.searchbox.mojom.Page_UpdateSelection_ParamsSpec,
      null,
      [arg_old_selection, arg_selection],
      false);
  }

  stepSelection(arg_direction, arg_step) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.searchbox.mojom.Page_StepSelection_ParamsSpec,
      null,
      [arg_direction, arg_step],
      false);
  }

  openCurrentSelection(arg_disposition) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.searchbox.mojom.Page_OpenCurrentSelection_ParamsSpec,
      null,
      [arg_disposition],
      false);
  }

  setAimButtonVisible(arg_visible) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.searchbox.mojom.Page_SetAimButtonVisible_ParamsSpec,
      null,
      [arg_visible],
      false);
  }

  setKeywordSelected(arg_is_keyword_selected) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojo.internal.bindings.searchbox.mojom.Page_SetKeywordSelected_ParamsSpec,
      null,
      [arg_is_keyword_selected],
      false);
  }

  setInputText(arg_input) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      mojo.internal.bindings.searchbox.mojom.Page_SetInputText_ParamsSpec,
      null,
      [arg_input],
      false);
  }

  setThumbnail(arg_thumbnail_url, arg_is_deletable) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      mojo.internal.bindings.searchbox.mojom.Page_SetThumbnail_ParamsSpec,
      null,
      [arg_thumbnail_url, arg_is_deletable],
      false);
  }

  onContextualInputStatusChanged(arg_token, arg_status, arg_error_type) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      mojo.internal.bindings.searchbox.mojom.Page_OnContextualInputStatusChanged_ParamsSpec,
      null,
      [arg_token, arg_status, arg_error_type],
      false);
  }

  onTabStripChanged() {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      mojo.internal.bindings.searchbox.mojom.Page_OnTabStripChanged_ParamsSpec,
      null,
      [],
      false);
  }

  onInputStateChanged(arg_input_state) {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      mojo.internal.bindings.searchbox.mojom.Page_OnInputStateChanged_ParamsSpec,
      null,
      [arg_input_state],
      false);
  }

  addFileContext(arg_token, arg_file_info) {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      mojo.internal.bindings.searchbox.mojom.Page_AddFileContext_ParamsSpec,
      null,
      [arg_token, arg_file_info],
      false);
  }

  updateAutoSuggestedTabContext(arg_tab) {
    return this.proxy.sendMessage(
      this.ordinals[12],  // ordinal
      mojo.internal.bindings.searchbox.mojom.Page_UpdateAutoSuggestedTabContext_ParamsSpec,
      null,
      [arg_tab],
      false);
  }

  updateLensSearchEligibility(arg_eligible) {
    return this.proxy.sendMessage(
      this.ordinals[13],  // ordinal
      mojo.internal.bindings.searchbox.mojom.Page_UpdateLensSearchEligibility_ParamsSpec,
      null,
      [arg_eligible],
      false);
  }

  updateContentSharingPolicy(arg_enabled) {
    return this.proxy.sendMessage(
      this.ordinals[14],  // ordinal
      mojo.internal.bindings.searchbox.mojom.Page_UpdateContentSharingPolicy_ParamsSpec,
      null,
      [arg_enabled],
      false);
  }

  updateAimPopupEligibility(arg_eligible) {
    return this.proxy.sendMessage(
      this.ordinals[15],  // ordinal
      mojo.internal.bindings.searchbox.mojom.Page_UpdateAimPopupEligibility_ParamsSpec,
      null,
      [arg_eligible],
      false);
  }

  onPermissionPromptChanged(arg_is_showing, arg_prompt_size) {
    return this.proxy.sendMessage(
      this.ordinals[16],  // ordinal
      mojo.internal.bindings.searchbox.mojom.Page_OnPermissionPromptChanged_ParamsSpec,
      null,
      [arg_is_showing, arg_prompt_size],
      false);
  }

  setRestoredTabIds(arg_ids) {
    return this.proxy.sendMessage(
      this.ordinals[17],  // ordinal
      mojo.internal.bindings.searchbox.mojom.Page_SetRestoredTabIds_ParamsSpec,
      null,
      [arg_ids],
      false);
  }

  setAimThreadRestoredTabs(arg_tabs) {
    return this.proxy.sendMessage(
      this.ordinals[18],  // ordinal
      mojo.internal.bindings.searchbox.mojom.Page_SetAimThreadRestoredTabs_ParamsSpec,
      null,
      [arg_tabs],
      false);
  }

};

mojo.internal.bindings.searchbox.mojom.Page.getRemote = function() {
  let remote = new mojo.internal.bindings.searchbox.mojom.PageRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'searchbox.mojom.Page',
    'context');
  return remote.$;
};

mojo.internal.bindings.searchbox.mojom.PageReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('searchbox.mojom.Page', [
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.searchbox.mojom.Page_AutocompleteResultChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.autocompleteResultChanged');
          const result = this.impl.autocompleteResultChanged(params.arg_result);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.searchbox.mojom.Page_UpdateSelection_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.updateSelection');
          const result = this.impl.updateSelection(params.arg_old_selection, params.arg_selection);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.searchbox.mojom.Page_StepSelection_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.stepSelection');
          const result = this.impl.stepSelection(params.arg_direction, params.arg_step);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.searchbox.mojom.Page_OpenCurrentSelection_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.openCurrentSelection');
          const result = this.impl.openCurrentSelection(params.arg_disposition);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.searchbox.mojom.Page_SetAimButtonVisible_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setAimButtonVisible');
          const result = this.impl.setAimButtonVisible(params.arg_visible);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.searchbox.mojom.Page_SetKeywordSelected_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setKeywordSelected');
          const result = this.impl.setKeywordSelected(params.arg_is_keyword_selected);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.searchbox.mojom.Page_SetInputText_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setInputText');
          const result = this.impl.setInputText(params.arg_input);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.searchbox.mojom.Page_SetThumbnail_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setThumbnail');
          const result = this.impl.setThumbnail(params.arg_thumbnail_url, params.arg_is_deletable);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.searchbox.mojom.Page_OnContextualInputStatusChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onContextualInputStatusChanged');
          const result = this.impl.onContextualInputStatusChanged(params.arg_token, params.arg_status, params.arg_error_type);
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.searchbox.mojom.Page_OnTabStripChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onTabStripChanged');
          const result = this.impl.onTabStripChanged();
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.searchbox.mojom.Page_OnInputStateChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onInputStateChanged');
          const result = this.impl.onInputStateChanged(params.arg_input_state);
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.searchbox.mojom.Page_AddFileContext_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.addFileContext');
          const result = this.impl.addFileContext(params.arg_token, params.arg_file_info);
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.searchbox.mojom.Page_UpdateAutoSuggestedTabContext_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.updateAutoSuggestedTabContext');
          const result = this.impl.updateAutoSuggestedTabContext(params.arg_tab);
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.searchbox.mojom.Page_UpdateLensSearchEligibility_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.updateLensSearchEligibility');
          const result = this.impl.updateLensSearchEligibility(params.arg_eligible);
          break;
        }
        case 14: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.searchbox.mojom.Page_UpdateContentSharingPolicy_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.updateContentSharingPolicy');
          const result = this.impl.updateContentSharingPolicy(params.arg_enabled);
          break;
        }
        case 15: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.searchbox.mojom.Page_UpdateAimPopupEligibility_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.updateAimPopupEligibility');
          const result = this.impl.updateAimPopupEligibility(params.arg_eligible);
          break;
        }
        case 16: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.searchbox.mojom.Page_OnPermissionPromptChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onPermissionPromptChanged');
          const result = this.impl.onPermissionPromptChanged(params.arg_is_showing, params.arg_prompt_size);
          break;
        }
        case 17: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.searchbox.mojom.Page_SetRestoredTabIds_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setRestoredTabIds');
          const result = this.impl.setRestoredTabIds(params.arg_ids);
          break;
        }
        case 18: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.searchbox.mojom.Page_SetAimThreadRestoredTabs_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setAimThreadRestoredTabs');
          const result = this.impl.setAimThreadRestoredTabs(params.arg_tabs);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.searchbox.mojom.PageReceiver = mojo.internal.bindings.searchbox.mojom.PageReceiver;

mojo.internal.bindings.searchbox.mojom.PagePtr = mojo.internal.bindings.searchbox.mojom.PageRemote;
mojo.internal.bindings.searchbox.mojom.PageRequest = mojo.internal.bindings.searchbox.mojom.PagePendingReceiver;


// Specs (at the end to ensure classes are defined for InterfaceProxy)

// Union: SearchContextAttachment
mojo.internal.Union(
    mojo.internal.bindings.searchbox.mojom.SearchContextAttachmentSpec, 'searchbox.mojom.SearchContextAttachment', {
      'arg_file_attachment': {
        'ordinal': 0,
        'type': mojo.internal.bindings.searchbox.mojom.FileAttachmentSpec,
        'nullable': false,
      },
      'arg_tab_attachment': {
        'ordinal': 1,
        'type': mojo.internal.bindings.searchbox.mojom.TabAttachmentSpec,
        'nullable': false,
      },
    });

// Struct: ACMatchClassification
mojo.internal.Struct(
    mojo.internal.bindings.searchbox.mojom.ACMatchClassificationSpec, 'searchbox.mojom.ACMatchClassification', [
      mojo.internal.StructField('arg_offset', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_style', 4, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: Action
mojo.internal.Struct(
    mojo.internal.bindings.searchbox.mojom.ActionSpec, 'searchbox.mojom.Action', [
      mojo.internal.StructField('arg_hint', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_suggestion_contents', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_icon_path', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_a11y_label', 24, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: SuggestionAnswer
mojo.internal.Struct(
    mojo.internal.bindings.searchbox.mojom.SuggestionAnswerSpec, 'searchbox.mojom.SuggestionAnswer', [
      mojo.internal.StructField('arg_first_line', 0, 0, mojo.internal.bindings.mojo_base.mojom.String16Spec, null, false, 0, undefined),
      mojo.internal.StructField('arg_second_line', 8, 0, mojo.internal.bindings.mojo_base.mojom.String16Spec, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: AutocompleteMatch
mojo.internal.Struct(
    mojo.internal.bindings.searchbox.mojom.AutocompleteMatchSpec, 'searchbox.mojom.AutocompleteMatch', [
      mojo.internal.StructField('arg_is_hidden', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_allowed_to_be_default_match', 0, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_is_weather_answer_suggestion_$flag', 0, 2, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'arg_is_weather_answer_suggestion_$value', originalFieldName: 'arg_is_weather_answer_suggestion' }),
      mojo.internal.StructField('arg_is_weather_answer_suggestion_$value', 0, 3, mojo.internal.Bool, false, false, 0, { isPrimary: false, linkedValueFieldName: 'arg_is_weather_answer_suggestion_$flag', originalFieldName: 'arg_is_weather_answer_suggestion' }),
      mojo.internal.StructField('arg_is_contextual_suggestion', 0, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_is_noncanned_aim_suggestion', 0, 5, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_is_rich_suggestion', 0, 6, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_is_search_type', 0, 7, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_is_enterprise_search_aggregator_people_type', 1, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_swap_contents_and_description', 1, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_supports_deletion', 1, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_has_instant_keyword', 1, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_suggestion_group_id', 4, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_a11y_label', 8, 0, mojo.internal.bindings.mojo_base.mojom.String16Spec, null, false, 0, undefined),
      mojo.internal.StructField('arg_actions', 16, 0, mojo.internal.Array(mojo.internal.bindings.searchbox.mojom.ActionSpec, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_answer', 24, 0, mojo.internal.bindings.searchbox.mojom.SuggestionAnswerSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_contents', 32, 0, mojo.internal.bindings.mojo_base.mojom.String16Spec, null, false, 0, undefined),
      mojo.internal.StructField('arg_contents_class', 40, 0, mojo.internal.Array(mojo.internal.bindings.searchbox.mojom.ACMatchClassificationSpec, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_description', 48, 0, mojo.internal.bindings.mojo_base.mojom.String16Spec, null, false, 0, undefined),
      mojo.internal.StructField('arg_description_class', 56, 0, mojo.internal.Array(mojo.internal.bindings.searchbox.mojom.ACMatchClassificationSpec, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_destination_url', 64, 0, mojo.internal.bindings.url.mojom.UrlSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_inline_autocompletion', 72, 0, mojo.internal.bindings.mojo_base.mojom.String16Spec, null, false, 0, undefined),
      mojo.internal.StructField('arg_fill_into_edit', 80, 0, mojo.internal.bindings.mojo_base.mojom.String16Spec, null, false, 0, undefined),
      mojo.internal.StructField('arg_icon_path', 88, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_icon_url', 96, 0, mojo.internal.bindings.url.mojom.UrlSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_image_dominant_color', 104, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_image_url', 112, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_type', 120, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_remove_button_a11y_label', 128, 0, mojo.internal.bindings.mojo_base.mojom.String16Spec, null, false, 0, undefined),
      mojo.internal.StructField('arg_tail_suggest_common_prefix', 136, 0, mojo.internal.bindings.mojo_base.mojom.String16Spec, null, true, 0, undefined),
      mojo.internal.StructField('arg_keyword_chip_hint', 144, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_keyword_chip_a11y', 152, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 168]]);

// Struct: TabInfo
mojo.internal.Struct(
    mojo.internal.bindings.searchbox.mojom.TabInfoSpec, 'searchbox.mojom.TabInfo', [
      mojo.internal.StructField('arg_tab_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_show_in_current_tab_chip', 4, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_show_in_previous_tab_chip', 4, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_title', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_url', 16, 0, mojo.internal.bindings.url.mojom.UrlSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_last_active', 24, 0, mojo.internal.bindings.mojo_base.mojom.TimeTicksSpec, null, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: FileAttachment
mojo.internal.Struct(
    mojo.internal.bindings.searchbox.mojom.FileAttachmentSpec, 'searchbox.mojom.FileAttachment', [
      mojo.internal.StructField('arg_uuid', 0, 0, mojo.internal.bindings.mojo_base.mojom.UnguessableTokenSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_name', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_mime_type', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_image_data_url', 24, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_error_type', 32, 0, mojo.internal.bindings.composebox_query.mojom.ContextUploadErrorTypeSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_icon_url', 40, 0, mojo.internal.bindings.url.mojom.UrlSpec, null, true, 0, undefined),
    ],
    [[0, 56]]);

// Struct: TabAttachment
mojo.internal.Struct(
    mojo.internal.bindings.searchbox.mojom.TabAttachmentSpec, 'searchbox.mojom.TabAttachment', [
      mojo.internal.StructField('arg_tab_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_title', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_url', 16, 0, mojo.internal.bindings.url.mojom.UrlSpec, null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: SearchContext
mojo.internal.Struct(
    mojo.internal.bindings.searchbox.mojom.SearchContextSpec, 'searchbox.mojom.SearchContext', [
      mojo.internal.StructField('arg_input', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_attachments', 8, 0, mojo.internal.Array(mojo.internal.bindings.searchbox.mojom.SearchContextAttachmentSpec, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_tool_mode', 16, 0, mojo.internal.bindings.composebox_query.mojom.ToolModeSpec, null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: SelectedFileInfo
mojo.internal.Struct(
    mojo.internal.bindings.searchbox.mojom.SelectedFileInfoSpec, 'searchbox.mojom.SelectedFileInfo', [
      mojo.internal.StructField('arg_file_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_mime_type', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_image_data_url', 16, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_is_deletable', 24, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_selection_time', 32, 0, mojo.internal.bindings.mojo_base.mojom.JSTimeSpec, null, false, 0, undefined),
    ],
    [[0, 48]]);

// Struct: SuggestionGroup
mojo.internal.Struct(
    mojo.internal.bindings.searchbox.mojom.SuggestionGroupSpec, 'searchbox.mojom.SuggestionGroup', [
      mojo.internal.StructField('arg_header', 0, 0, mojo.internal.bindings.mojo_base.mojom.String16Spec, null, false, 0, undefined),
      mojo.internal.StructField('arg_render_type', 8, 0, mojo.internal.bindings.searchbox.mojom.RenderTypeSpec, 0, false, 0, undefined),
      mojo.internal.StructField('arg_side_type', 12, 0, mojo.internal.bindings.searchbox.mojom.SideTypeSpec, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: SmartComposeStats
mojo.internal.Struct(
    mojo.internal.bindings.searchbox.mojom.SmartComposeStatsSpec, 'searchbox.mojom.SmartComposeStats', [
      mojo.internal.StructField('arg_enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_shown_count', 4, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_accepted_count', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_characters_accepted', 12, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_shown_length', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: AutocompleteResult
mojo.internal.Struct(
    mojo.internal.bindings.searchbox.mojom.AutocompleteResultSpec, 'searchbox.mojom.AutocompleteResult', [
      mojo.internal.StructField('arg_sequence_id', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_input', 8, 0, mojo.internal.bindings.mojo_base.mojom.String16Spec, null, false, 0, undefined),
      mojo.internal.StructField('arg_suggestion_groups_map', 16, 0, mojo.internal.Map(mojo.internal.Int32, mojo.internal.bindings.searchbox.mojom.SuggestionGroupSpec, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_matches', 24, 0, mojo.internal.Array(mojo.internal.bindings.searchbox.mojom.AutocompleteMatchSpec, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_smart_compose_inline_hint', 32, 0, mojo.internal.bindings.mojo_base.mojom.String16Spec, null, true, 0, undefined),
    ],
    [[0, 48]]);

// Struct: OmniboxPopupSelection
mojo.internal.Struct(
    mojo.internal.bindings.searchbox.mojom.OmniboxPopupSelectionSpec, 'searchbox.mojom.OmniboxPopupSelection', [
      mojo.internal.StructField('arg_line', 0, 0, mojo.internal.Uint8, 0, false, 0, undefined),
      mojo.internal.StructField('arg_action_index', 1, 0, mojo.internal.Uint8, 0, false, 0, undefined),
      mojo.internal.StructField('arg_state', 4, 0, mojo.internal.bindings.searchbox.mojom.SelectionLineStateSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: PlaceholderConfig
mojo.internal.Struct(
    mojo.internal.bindings.searchbox.mojom.PlaceholderConfigSpec, 'searchbox.mojom.PlaceholderConfig', [
      mojo.internal.StructField('arg_texts', 0, 0, mojo.internal.Array(mojo.internal.bindings.mojo_base.mojom.String16Spec, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_change_text_animation_interval', 8, 0, mojo.internal.bindings.mojo_base.mojom.TimeDeltaSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_fade_text_animation_duration', 16, 0, mojo.internal.bindings.mojo_base.mojom.TimeDeltaSpec, null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: DriveFile
mojo.internal.Struct(
    mojo.internal.bindings.searchbox.mojom.DriveFileSpec, 'searchbox.mojom.DriveFile', [
      mojo.internal.StructField('arg_token', 0, 0, mojo.internal.bindings.mojo_base.mojom.UnguessableTokenSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_mime_type', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_file_name', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_thumbnail_url', 24, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_icon_url', 32, 0, mojo.internal.bindings.url.mojom.UrlSpec, null, true, 0, undefined),
    ],
    [[0, 48]]);

// Struct: DriveUploadResponse
mojo.internal.Struct(
    mojo.internal.bindings.searchbox.mojom.DriveUploadResponseSpec, 'searchbox.mojom.DriveUploadResponse', [
      mojo.internal.StructField('arg_files', 0, 0, mojo.internal.Array(mojo.internal.bindings.searchbox.mojom.DriveFileSpec, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_error', 8, 0, mojo.internal.bindings.searchbox.mojom.DriveUploadErrorSpec, null, true, 0, undefined),
    ],
    [[0, 24]]);
mojo.internal.Struct(
    mojo.internal.bindings.searchbox.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec, 'searchbox.mojom.PageHandlerFactory_CreatePageHandler_Params', [
      mojo.internal.StructField('arg_page', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.searchbox.mojom.PageRemote), null, false, 0, undefined),
      mojo.internal.StructField('arg_handler', 8, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.searchbox.mojom.PageHandlerPendingReceiver), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.searchbox.mojom.PageHandler_OnFocusChanged_ParamsSpec, 'searchbox.mojom.PageHandler_OnFocusChanged_Params', [
      mojo.internal.StructField('arg_focused', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.searchbox.mojom.PageHandler_QueryAutocomplete_ParamsSpec, 'searchbox.mojom.PageHandler_QueryAutocomplete_Params', [
      mojo.internal.StructField('arg_input', 0, 0, mojo.internal.bindings.mojo_base.mojom.String16Spec, null, false, 0, undefined),
      mojo.internal.StructField('arg_prevent_inline_autocomplete', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_cursor_position', 12, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.searchbox.mojom.PageHandler_QueryAutocompleteWithSuggestInventory_ParamsSpec, 'searchbox.mojom.PageHandler_QueryAutocompleteWithSuggestInventory_Params', [
      mojo.internal.StructField('arg_input', 0, 0, mojo.internal.bindings.mojo_base.mojom.String16Spec, null, false, 0, undefined),
      mojo.internal.StructField('arg_prevent_inline_autocomplete', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_cursor_position', 12, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_suggest_inventory', 16, 0, mojo.internal.bindings.searchbox.mojom.SuggestInventorySpec, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.searchbox.mojom.PageHandler_StopAutocomplete_ParamsSpec, 'searchbox.mojom.PageHandler_StopAutocomplete_Params', [
      mojo.internal.StructField('arg_clear_result', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.searchbox.mojom.PageHandler_OpenAutocompleteMatch_ParamsSpec, 'searchbox.mojom.PageHandler_OpenAutocompleteMatch_Params', [
      mojo.internal.StructField('arg_line', 0, 0, mojo.internal.Uint8, 0, false, 0, undefined),
      mojo.internal.StructField('arg_are_matches_showing', 1, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_alt_key', 1, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_ctrl_key', 1, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_meta_key', 1, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_shift_key', 1, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_via_keyboard', 1, 5, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_mouse_button', 2, 0, mojo.internal.Uint8, 0, false, 0, undefined),
      mojo.internal.StructField('arg_url', 8, 0, mojo.internal.bindings.url.mojom.UrlSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.searchbox.mojom.PageHandler_SetSmartComposeStats_ParamsSpec, 'searchbox.mojom.PageHandler_SetSmartComposeStats_Params', [
      mojo.internal.StructField('arg_smart_compose_stats', 0, 0, mojo.internal.bindings.searchbox.mojom.SmartComposeStatsSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.searchbox.mojom.PageHandler_SetPopupSelection_ParamsSpec, 'searchbox.mojom.PageHandler_SetPopupSelection_Params', [
      mojo.internal.StructField('arg_selection', 0, 0, mojo.internal.bindings.searchbox.mojom.OmniboxPopupSelectionSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.searchbox.mojom.PageHandler_OpenPopupSelection_ParamsSpec, 'searchbox.mojom.PageHandler_OpenPopupSelection_Params', [
      mojo.internal.StructField('arg_result_sequence_id', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_disposition', 4, 0, mojo.internal.bindings.ui.mojom.WindowOpenDispositionSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_selection', 8, 0, mojo.internal.bindings.searchbox.mojom.OmniboxPopupSelectionSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.searchbox.mojom.PageHandler_OnNavigationLikely_ParamsSpec, 'searchbox.mojom.PageHandler_OnNavigationLikely_Params', [
      mojo.internal.StructField('arg_line', 0, 0, mojo.internal.Uint8, 0, false, 0, undefined),
      mojo.internal.StructField('arg_navigation_predictor', 4, 0, mojo.internal.bindings.omnibox.mojom.NavigationPredictorSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_url', 8, 0, mojo.internal.bindings.url.mojom.UrlSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.searchbox.mojom.PageHandler_DeleteAutocompleteMatch_ParamsSpec, 'searchbox.mojom.PageHandler_DeleteAutocompleteMatch_Params', [
      mojo.internal.StructField('arg_line', 0, 0, mojo.internal.Uint8, 0, false, 0, undefined),
      mojo.internal.StructField('arg_url', 8, 0, mojo.internal.bindings.url.mojom.UrlSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.searchbox.mojom.PageHandler_ActivateKeyword_ParamsSpec, 'searchbox.mojom.PageHandler_ActivateKeyword_Params', [
      mojo.internal.StructField('arg_line', 0, 0, mojo.internal.Uint8, 0, false, 0, undefined),
      mojo.internal.StructField('arg_is_mouse_event', 1, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_url', 8, 0, mojo.internal.bindings.url.mojom.UrlSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_match_selection_timestamp', 16, 0, mojo.internal.bindings.mojo_base.mojom.TimeTicksSpec, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.searchbox.mojom.PageHandler_ExecuteAction_ParamsSpec, 'searchbox.mojom.PageHandler_ExecuteAction_Params', [
      mojo.internal.StructField('arg_line', 0, 0, mojo.internal.Uint8, 0, false, 0, undefined),
      mojo.internal.StructField('arg_action_index', 1, 0, mojo.internal.Uint8, 0, false, 0, undefined),
      mojo.internal.StructField('arg_mouse_button', 2, 0, mojo.internal.Uint8, 0, false, 0, undefined),
      mojo.internal.StructField('arg_alt_key', 3, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_ctrl_key', 3, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_meta_key', 3, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_shift_key', 3, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_url', 8, 0, mojo.internal.bindings.url.mojom.UrlSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_match_selection_timestamp', 16, 0, mojo.internal.bindings.mojo_base.mojom.TimeTicksSpec, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.searchbox.mojom.PageHandler_OnThumbnailRemoved_ParamsSpec, 'searchbox.mojom.PageHandler_OnThumbnailRemoved_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.searchbox.mojom.PageHandler_GetPlaceholderConfig_ParamsSpec, 'searchbox.mojom.PageHandler_GetPlaceholderConfig_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.searchbox.mojom.PageHandler_GetPlaceholderConfig_ResponseParamsSpec, 'searchbox.mojom.PageHandler_GetPlaceholderConfig_ResponseParams', [
      mojo.internal.StructField('arg_config', 0, 0, mojo.internal.bindings.searchbox.mojom.PlaceholderConfigSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.searchbox.mojom.PageHandler_GetRecentTabs_ParamsSpec, 'searchbox.mojom.PageHandler_GetRecentTabs_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.searchbox.mojom.PageHandler_GetRecentTabs_ResponseParamsSpec, 'searchbox.mojom.PageHandler_GetRecentTabs_ResponseParams', [
      mojo.internal.StructField('arg_tabs', 0, 0, mojo.internal.Array(mojo.internal.bindings.searchbox.mojom.TabInfoSpec, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.searchbox.mojom.PageHandler_GetTabPreview_ParamsSpec, 'searchbox.mojom.PageHandler_GetTabPreview_Params', [
      mojo.internal.StructField('arg_tab_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.searchbox.mojom.PageHandler_GetTabPreview_ResponseParamsSpec, 'searchbox.mojom.PageHandler_GetTabPreview_ResponseParams', [
      mojo.internal.StructField('arg_preview_data_url', 0, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.searchbox.mojom.PageHandler_WaitForTabFaviconLoad_ParamsSpec, 'searchbox.mojom.PageHandler_WaitForTabFaviconLoad_Params', [
      mojo.internal.StructField('arg_tab_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.searchbox.mojom.PageHandler_WaitForTabFaviconLoad_ResponseParamsSpec, 'searchbox.mojom.PageHandler_WaitForTabFaviconLoad_ResponseParams', [
      mojo.internal.StructField('arg_favicon_data_url', 0, 0, mojo.internal.bindings.url.mojom.UrlSpec, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.searchbox.mojom.PageHandler_GetInputState_ParamsSpec, 'searchbox.mojom.PageHandler_GetInputState_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.searchbox.mojom.PageHandler_GetInputState_ResponseParamsSpec, 'searchbox.mojom.PageHandler_GetInputState_ResponseParams', [
      mojo.internal.StructField('arg_state', 0, 0, mojo.internal.bindings.composebox_query.mojom.InputStateSpec, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.searchbox.mojom.PageHandler_NotifySessionStarted_ParamsSpec, 'searchbox.mojom.PageHandler_NotifySessionStarted_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.searchbox.mojom.PageHandler_NotifySessionAbandoned_ParamsSpec, 'searchbox.mojom.PageHandler_NotifySessionAbandoned_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.searchbox.mojom.PageHandler_AddFileContext_ParamsSpec, 'searchbox.mojom.PageHandler_AddFileContext_Params', [
      mojo.internal.StructField('arg_file_info', 0, 0, mojo.internal.bindings.searchbox.mojom.SelectedFileInfoSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_file_bytes', 8, 0, mojo.internal.bindings.mojo_base.mojom.BigBufferSpec, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.searchbox.mojom.PageHandler_AddTabContext_ParamsSpec, 'searchbox.mojom.PageHandler_AddTabContext_Params', [
      mojo.internal.StructField('arg_tab_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_delay_upload', 4, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.searchbox.mojom.PageHandler_DeleteContext_ParamsSpec, 'searchbox.mojom.PageHandler_DeleteContext_Params', [
      mojo.internal.StructField('arg_token', 0, 0, mojo.internal.bindings.mojo_base.mojom.UnguessableTokenSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_from_automatic_chip', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.searchbox.mojom.PageHandler_ClearFiles_ParamsSpec, 'searchbox.mojom.PageHandler_ClearFiles_Params', [
      mojo.internal.StructField('arg_should_block_auto_suggested_tabs', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.searchbox.mojom.PageHandler_SubmitQuery_ParamsSpec, 'searchbox.mojom.PageHandler_SubmitQuery_Params', [
      mojo.internal.StructField('arg_query_text', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_mouse_button', 8, 0, mojo.internal.Uint8, 0, false, 0, undefined),
      mojo.internal.StructField('arg_alt_key', 9, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_ctrl_key', 9, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_meta_key', 9, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_shift_key', 9, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_is_voice_search', 9, 4, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.searchbox.mojom.PageHandler_OpenLensSearch_ParamsSpec, 'searchbox.mojom.PageHandler_OpenLensSearch_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.searchbox.mojom.PageHandler_SetActiveToolMode_ParamsSpec, 'searchbox.mojom.PageHandler_SetActiveToolMode_Params', [
      mojo.internal.StructField('arg_tool', 0, 0, mojo.internal.bindings.composebox_query.mojom.ToolModeSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.searchbox.mojom.PageHandler_SetActiveModelMode_ParamsSpec, 'searchbox.mojom.PageHandler_SetActiveModelMode_Params', [
      mojo.internal.StructField('arg_model', 0, 0, mojo.internal.bindings.composebox_query.mojom.ModelModeSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.searchbox.mojom.PageHandler_ActivateMetricsFunnel_ParamsSpec, 'searchbox.mojom.PageHandler_ActivateMetricsFunnel_Params', [
      mojo.internal.StructField('arg_funnel_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.searchbox.mojom.PageHandler_RecordToolSelectionAction_ParamsSpec, 'searchbox.mojom.PageHandler_RecordToolSelectionAction_Params', [
      mojo.internal.StructField('arg_tool', 0, 0, mojo.internal.bindings.composebox_query.mojom.ToolModeSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.searchbox.mojom.PageHandler_RecordModelSelectionAction_ParamsSpec, 'searchbox.mojom.PageHandler_RecordModelSelectionAction_Params', [
      mojo.internal.StructField('arg_model', 0, 0, mojo.internal.bindings.composebox_query.mojom.ModelModeSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.searchbox.mojom.PageHandler_GetDriveDisclaimerStatus_ParamsSpec, 'searchbox.mojom.PageHandler_GetDriveDisclaimerStatus_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.searchbox.mojom.PageHandler_GetDriveDisclaimerStatus_ResponseParamsSpec, 'searchbox.mojom.PageHandler_GetDriveDisclaimerStatus_ResponseParams', [
      mojo.internal.StructField('arg_status', 0, 0, mojo.internal.bindings.searchbox.mojom.DriveDisclaimerStatusSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.searchbox.mojom.PageHandler_OnDriveDisclaimerAccepted_ParamsSpec, 'searchbox.mojom.PageHandler_OnDriveDisclaimerAccepted_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.searchbox.mojom.PageHandler_OnDriveUploadClicked_ParamsSpec, 'searchbox.mojom.PageHandler_OnDriveUploadClicked_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.searchbox.mojom.PageHandler_OnDriveUploadClicked_ResponseParamsSpec, 'searchbox.mojom.PageHandler_OnDriveUploadClicked_ResponseParams', [
      mojo.internal.StructField('arg_response', 0, 0, mojo.internal.bindings.searchbox.mojom.DriveUploadResponseSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.searchbox.mojom.PageHandler_GetPageClassification_ParamsSpec, 'searchbox.mojom.PageHandler_GetPageClassification_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.searchbox.mojom.PageHandler_GetPageClassification_ResponseParamsSpec, 'searchbox.mojom.PageHandler_GetPageClassification_ResponseParams', [
      mojo.internal.StructField('arg_metricSource', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.searchbox.mojom.Page_AutocompleteResultChanged_ParamsSpec, 'searchbox.mojom.Page_AutocompleteResultChanged_Params', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.searchbox.mojom.AutocompleteResultSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.searchbox.mojom.Page_UpdateSelection_ParamsSpec, 'searchbox.mojom.Page_UpdateSelection_Params', [
      mojo.internal.StructField('arg_old_selection', 0, 0, mojo.internal.bindings.searchbox.mojom.OmniboxPopupSelectionSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_selection', 8, 0, mojo.internal.bindings.searchbox.mojom.OmniboxPopupSelectionSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.searchbox.mojom.Page_StepSelection_ParamsSpec, 'searchbox.mojom.Page_StepSelection_Params', [
      mojo.internal.StructField('arg_direction', 0, 0, mojo.internal.bindings.searchbox.mojom.SelectionDirectionSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_step', 4, 0, mojo.internal.bindings.searchbox.mojom.SelectionStepSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.searchbox.mojom.Page_OpenCurrentSelection_ParamsSpec, 'searchbox.mojom.Page_OpenCurrentSelection_Params', [
      mojo.internal.StructField('arg_disposition', 0, 0, mojo.internal.bindings.ui.mojom.WindowOpenDispositionSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.searchbox.mojom.Page_SetAimButtonVisible_ParamsSpec, 'searchbox.mojom.Page_SetAimButtonVisible_Params', [
      mojo.internal.StructField('arg_visible', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.searchbox.mojom.Page_SetKeywordSelected_ParamsSpec, 'searchbox.mojom.Page_SetKeywordSelected_Params', [
      mojo.internal.StructField('arg_is_keyword_selected', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.searchbox.mojom.Page_SetInputText_ParamsSpec, 'searchbox.mojom.Page_SetInputText_Params', [
      mojo.internal.StructField('arg_input', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.searchbox.mojom.Page_SetThumbnail_ParamsSpec, 'searchbox.mojom.Page_SetThumbnail_Params', [
      mojo.internal.StructField('arg_thumbnail_url', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_is_deletable', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.searchbox.mojom.Page_OnContextualInputStatusChanged_ParamsSpec, 'searchbox.mojom.Page_OnContextualInputStatusChanged_Params', [
      mojo.internal.StructField('arg_token', 0, 0, mojo.internal.bindings.mojo_base.mojom.UnguessableTokenSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_status', 8, 0, mojo.internal.bindings.composebox_query.mojom.ContextUploadStatusSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_error_type', 12, 0, mojo.internal.bindings.composebox_query.mojom.ContextUploadErrorTypeSpec, null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.searchbox.mojom.Page_OnTabStripChanged_ParamsSpec, 'searchbox.mojom.Page_OnTabStripChanged_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.searchbox.mojom.Page_OnInputStateChanged_ParamsSpec, 'searchbox.mojom.Page_OnInputStateChanged_Params', [
      mojo.internal.StructField('arg_input_state', 0, 0, mojo.internal.bindings.composebox_query.mojom.InputStateSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.searchbox.mojom.Page_AddFileContext_ParamsSpec, 'searchbox.mojom.Page_AddFileContext_Params', [
      mojo.internal.StructField('arg_token', 0, 0, mojo.internal.bindings.mojo_base.mojom.UnguessableTokenSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_file_info', 8, 0, mojo.internal.bindings.searchbox.mojom.SelectedFileInfoSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.searchbox.mojom.Page_UpdateAutoSuggestedTabContext_ParamsSpec, 'searchbox.mojom.Page_UpdateAutoSuggestedTabContext_Params', [
      mojo.internal.StructField('arg_tab', 0, 0, mojo.internal.bindings.searchbox.mojom.TabInfoSpec, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.searchbox.mojom.Page_UpdateLensSearchEligibility_ParamsSpec, 'searchbox.mojom.Page_UpdateLensSearchEligibility_Params', [
      mojo.internal.StructField('arg_eligible', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.searchbox.mojom.Page_UpdateContentSharingPolicy_ParamsSpec, 'searchbox.mojom.Page_UpdateContentSharingPolicy_Params', [
      mojo.internal.StructField('arg_enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.searchbox.mojom.Page_UpdateAimPopupEligibility_ParamsSpec, 'searchbox.mojom.Page_UpdateAimPopupEligibility_Params', [
      mojo.internal.StructField('arg_eligible', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.searchbox.mojom.Page_OnPermissionPromptChanged_ParamsSpec, 'searchbox.mojom.Page_OnPermissionPromptChanged_Params', [
      mojo.internal.StructField('arg_is_showing', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_prompt_size', 8, 0, mojo.internal.bindings.gfx.mojom.SizeSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.searchbox.mojom.Page_SetRestoredTabIds_ParamsSpec, 'searchbox.mojom.Page_SetRestoredTabIds_Params', [
      mojo.internal.StructField('arg_ids', 0, 0, mojo.internal.Array(mojo.internal.Int32, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.searchbox.mojom.Page_SetAimThreadRestoredTabs_ParamsSpec, 'searchbox.mojom.Page_SetAimThreadRestoredTabs_Params', [
      mojo.internal.StructField('arg_tabs', 0, 0, mojo.internal.Array(mojo.internal.bindings.searchbox.mojom.TabInfoSpec, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

