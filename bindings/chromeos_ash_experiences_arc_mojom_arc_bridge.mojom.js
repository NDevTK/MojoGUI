// Auto-generated MojoJS binding
 // Source: chromium_src/chromeos/ash/experiences/arc/mojom/arc_bridge.mojom
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
      // Per-interface scramble map (generated from BUILD.gn analysis)
      _interfaceScrambleMap: {"android_webview.mojom.LocalMainFrame": true, "android_webview.mojom.FrameHost": true, "android_webview.mojom.RenderMessageFilter": true, "android_webview.mojom.Renderer": true, "ash.mojom.HidPreservingBluetoothStateController": true, "ash.annotator.mojom.UntrustedAnnotatorPage": true, "ash.annotator.mojom.UntrustedAnnotatorPageHandler": true, "ash.annotator.mojom.UntrustedAnnotatorPageHandlerFactory": true, "ash.boca_receiver.mojom.UntrustedPage": true, "ash.boca_receiver.mojom.UntrustedPageHandlerFactory": true, "ash.boca.mojom.PageHandler": true, "ash.boca.mojom.Page": true, "ash.boca.mojom.BocaPageHandlerFactory": true, "ash.camera_app.mojom.TabletModeMonitor": true, "ash.camera_app.mojom.ScreenStateMonitor": true, "ash.camera_app.mojom.ScreenLockedMonitor": true, "ash.camera_app.mojom.ExternalScreenMonitor": true, "ash.camera_app.mojom.CameraUsageOwnershipMonitor": true, "ash.camera_app.mojom.LidStateMonitor": true, "ash.camera_app.mojom.SWPrivacySwitchMonitor": true, "ash.camera_app.mojom.WindowStateMonitor": true, "ash.camera_app.mojom.StorageMonitor": true, "ash.camera_app.mojom.WindowStateController": true, "ash.camera_app.mojom.CameraAppHelper": true, "ash.camera_app.mojom.EventsSender": true, "ash.camera_app.mojom.PdfBuilder": true, "ash.color_internals.mojom.WallpaperColorsObserver": true, "ash.color_internals.mojom.WallpaperColorsHandler": true, "ash.common.mojom.AcceleratorFetcherObserver": true, "ash.common.mojom.AcceleratorFetcher": true, "ash.common.mojom.ForceHiddenElementsVisibleObserver": true, "ash.common.mojom.AccessibilityFeatures": true, "ash.personalization_app.mojom.SeaPenObserver": true, "ash.personalization_app.mojom.SeaPenProvider": true, "ash.common.mojom.ShortcutInputObserver": true, "ash.common.mojom.ShortcutInputProvider": true, "ash.common.mojom.WebUiSyslogEmitter": true, "ash.mojom.demo_mode.UntrustedPageHandlerFactory": true, "ash.mojom.demo_mode.UntrustedPageHandler": true, "ash.diagnostics.mojom.KeyboardObserver": true, "ash.diagnostics.mojom.InternalDisplayPowerStateObserver": true, "ash.diagnostics.mojom.TabletModeObserver": true, "ash.diagnostics.mojom.LidStateObserver": true, "ash.diagnostics.mojom.ConnectedDevicesObserver": true, "ash.diagnostics.mojom.InputDataProvider": true, "ash.diagnostics.mojom.NetworkListObserver": true, "ash.diagnostics.mojom.NetworkStateObserver": true, "ash.diagnostics.mojom.NetworkHealthProvider": true, "ash.diagnostics.mojom.BatteryChargeStatusObserver": true, "ash.diagnostics.mojom.BatteryHealthObserver": true, "ash.diagnostics.mojom.MemoryUsageObserver": true, "ash.diagnostics.mojom.CpuUsageObserver": true, "ash.diagnostics.mojom.SystemDataProvider": true, "ash.diagnostics.mojom.RoutineRunner": true, "ash.diagnostics.mojom.SystemRoutineController": true, "ash.eche_app.mojom.SignalingMessageExchanger": true, "ash.eche_app.mojom.SignalingMessageObserver": true, "ash.eche_app.mojom.SystemInfoProvider": true, "ash.eche_app.mojom.SystemInfoObserver": true, "ash.eche_app.mojom.AccessibilityProvider": true, "ash.eche_app.mojom.AccessibilityObserver": true, "ash.eche_app.mojom.UidGenerator": true, "ash.eche_app.mojom.NotificationGenerator": true, "ash.eche_app.mojom.DisplayStreamHandler": true, "ash.eche_app.mojom.StreamActionObserver": true, "ash.eche_app.mojom.StreamOrientationObserver": true, "ash.eche_app.mojom.ConnectionStatusObserver": true, "ash.eche_app.mojom.KeyboardLayoutHandler": true, "ash.eche_app.mojom.KeyboardLayoutObserver": true, "ash.file_manager.mojom.PageHandlerFactory": true, "ash.file_manager.mojom.PageHandler": true, "ash.file_manager.mojom.Page": true, "ash.mojom.files_internals.PageHandler": true, "ash.firmware_update.mojom.UpdateObserver": true, "ash.firmware_update.mojom.DeviceRequestObserver": true, "ash.firmware_update.mojom.UpdateProgressObserver": true, "ash.firmware_update.mojom.UpdateProvider": true, "ash.firmware_update.mojom.InstallController": true, "ash.firmware_update.mojom.SystemUtils": true, "ash.focus_mode.mojom.MediaClient": true, "ash.focus_mode.mojom.TrackProvider": true, "ash.graduation_ui.mojom.GraduationUiHandler": true, "ash.growth.mojom.PageHandler": true, "ash.help_app.mojom.PageHandlerFactory": true, "ash.help_app.mojom.PageHandler": true, "ash.help_app.mojom.SearchResultsObserver": true, "ash.help_app.mojom.SearchHandler": true, "ash.mall.mojom.PageHandler": true, "ash.media_app_ui.mojom.PageHandlerFactory": true, "ash.media_app_ui.mojom.PageHandler": true, "ash.media_app_ui.mojom.UntrustedServiceFactory": true, "ash.media_app_ui.mojom.OcrUntrustedService": true, "ash.media_app_ui.mojom.OcrUntrustedPage": true, "ash.media_app_ui.mojom.MahiUntrustedService": true, "ash.media_app_ui.mojom.MahiUntrustedPage": true, "ash.media_app_ui.mojom.MantisUntrustedService": true, "ash.media_app_ui.mojom.MantisUntrustedPage": true, "ash.os_feedback_ui.mojom.HelpContentProvider": true, "ash.os_feedback_ui.mojom.FeedbackServiceProvider": true, "ash.personalization_app.mojom.WallpaperObserver": true, "ash.personalization_app.mojom.WallpaperProvider": true, "ash.personalization_app.mojom.ThemeObserver": true, "ash.personalization_app.mojom.ThemeProvider": true, "ash.personalization_app.mojom.UserImageObserver": true, "ash.personalization_app.mojom.UserProvider": true, "ash.personalization_app.mojom.AmbientObserver": true, "ash.personalization_app.mojom.AmbientProvider": true, "ash.personalization_app.mojom.KeyboardBacklightObserver": true, "ash.personalization_app.mojom.KeyboardBacklightProvider": true, "ash.personalization_app.mojom.SearchResultsObserver": true, "ash.personalization_app.mojom.SearchHandler": true, "ash.printing.print_preview.mojom.DestinationProvider": true, "ash.projector.mojom.UntrustedProjectorPageHandler": true, "ash.projector.mojom.UntrustedProjectorPage": true, "ash.projector.mojom.UntrustedProjectorPageHandlerFactory": true, "ash.recorder_app.mojom.ModelStateMonitor": true, "ash.recorder_app.mojom.QuietModeMonitor": true, "ash.recorder_app.mojom.PageHandler": true, "ash.mojom.sample_swa.ChildUntrustedPage": true, "ash.mojom.sample_swa.ParentTrustedPage": true, "ash.mojom.sample_swa.PageHandlerFactory": true, "ash.mojom.sample_swa.PageHandler": true, "ash.mojom.sample_swa.Page": true, "ash.mojom.sample_swa.UntrustedPageInterfacesFactory": true, "ash.sanitize_ui.mojom.SettingsResetter": true, "ash.mojom.scanner_feedback_ui.PageHandler": true, "ash.scanning.mojom.ScanJobObserver": true, "ash.scanning.mojom.ScanService": true, "ash.scanning.mojom.MultiPageScanController": true, "ash.shimless_rma.mojom.ErrorObserver": true, "ash.shimless_rma.mojom.OsUpdateObserver": true, "ash.shimless_rma.mojom.CalibrationObserver": true, "ash.shimless_rma.mojom.ProvisioningObserver": true, "ash.shimless_rma.mojom.HardwareWriteProtectionStateObserver": true, "ash.shimless_rma.mojom.PowerCableStateObserver": true, "ash.shimless_rma.mojom.ExternalDiskStateObserver": true, "ash.shimless_rma.mojom.HardwareVerificationStatusObserver": true, "ash.shimless_rma.mojom.FinalizationObserver": true, "ash.shimless_rma.mojom.UpdateRoFirmwareObserver": true, "ash.shimless_rma.mojom.ShimlessRmaService": true, "ash.shortcut_customization.mojom.SearchResultsAvailabilityObserver": true, "ash.shortcut_customization.mojom.SearchHandler": true, "ash.shortcut_customization.mojom.AcceleratorsUpdatedObserver": true, "ash.shortcut_customization.mojom.PolicyUpdatedObserver": true, "ash.shortcut_customization.mojom.AcceleratorConfigurationProvider": true, "ash.mojom.status_area_internals.PageHandler": true, "cc.mojom.RenderFrameMetadataObserver": true, "cc.mojom.RenderFrameMetadataObserverClient": true, "actor.ui.mojom.ActorOverlayPageHandlerFactory": true, "actor.ui.mojom.ActorOverlayPageHandler": true, "actor.ui.mojom.ActorOverlayPage": true, "contextual_tasks.mojom.PageHandler": true, "contextual_tasks.mojom.Page": true, "contextual_tasks.mojom.PageHandlerFactory": true, "contextual_tasks_internals.mojom.ContextualTasksInternalsPageHandlerFactory": true, "contextual_tasks_internals.mojom.ContextualTasksInternalsPageHandler": true, "contextual_tasks_internals.mojom.ContextualTasksInternalsPage": true, "glic.mojom.FrePageHandlerFactory": true, "glic.mojom.FrePageHandler": true, "glic.mojom.PreloadPage": true, "glic.mojom.Page": true, "glic.mojom.GlicPreloadHandler": true, "glic.mojom.GlicPreloadHandlerFactory": true, "glic.mojom.PageHandlerFactory": true, "glic.mojom.PageHandler": true, "glic.mojom.PinCandidatesObserver": true, "glic.mojom.WebClientHandler": true, "glic.mojom.TabDataHandler": true, "glic.mojom.WebClient": true, "glic.mojom.CaptureRegionObserver": true, "lens.mojom.LensPageHandlerFactory": true, "lens.mojom.LensPageHandler": true, "lens.mojom.LensPage": true, "lens.mojom.LensGhostLoaderPageHandlerFactory": true, "lens.mojom.LensGhostLoaderPage": true, "lens.mojom.LensSidePanelPageHandlerFactory": true, "lens.mojom.LensSidePanelPageHandler": true, "lens.mojom.LensSidePanelPage": true, "media.mojom.MediaEngagementScoreDetailsProvider": true, "file_suggestion.mojom.DriveSuggestionHandler": true, "file_suggestion.mojom.MicrosoftFilesPageHandler": true, "ntp.safe_browsing.mojom.SafeBrowsingHandler": true, "ntp.authentication.mojom.MicrosoftAuthPageHandler": true, "ntp.calendar.mojom.GoogleCalendarPageHandler": true, "ntp.calendar.mojom.OutlookCalendarPageHandler": true, "ntp.most_relevant_tab_resumption.mojom.PageHandler": true, "ntp.tab_groups.mojom.PageHandler": true, "certificate_manager.mojom.CertificateManagerPageHandlerFactory": true, "certificate_manager.mojom.CertificateManagerPageHandler": true, "certificate_manager.mojom.CertificateManagerPage": true, "access_code_cast.mojom.PageHandlerFactory": true, "access_code_cast.mojom.PageHandler": true, "access_code_cast.mojom.Page": true, "actor_internals.mojom.Page": true, "actor_internals.mojom.PageHandler": true, "actor_internals.mojom.PageHandlerFactory": true, "app_home.mojom.PageHandlerFactory": true, "app_home.mojom.PageHandler": true, "app_home.mojom.Page": true, "mojom.app_service_internals.AppServiceInternalsPageHandler": true, "add_supervision.mojom.AddSupervisionHandler": true, "ash.app_install.mojom.AppInfoActions": true, "ash.app_install.mojom.ConnectionErrorActions": true, "ash.app_install.mojom.PageHandlerFactory": true, "ash.app_install.mojom.PageHandler": true, "ash.borealis_installer.mojom.PageHandlerFactory": true, "ash.borealis_installer.mojom.PageHandler": true, "ash.borealis_installer.mojom.Page": true, "ash.cloud_upload.mojom.PageHandlerFactory": true, "ash.cloud_upload.mojom.PageHandler": true, "ash.crostini_installer.mojom.PageHandlerFactory": true, "ash.crostini_installer.mojom.PageHandler": true, "ash.crostini_installer.mojom.Page": true, "dlp_internals.mojom.ReportingObserver": true, "dlp_internals.mojom.PageHandler": true, "emoji_picker.mojom.PageHandlerFactory": true, "emoji_picker.mojom.PageHandler": true, "new_window_proxy.mojom.NewWindowProxy": true, "enterprise_reporting.mojom.PageHandlerFactory": true, "enterprise_reporting.mojom.PageHandler": true, "enterprise_reporting.mojom.Page": true, "ash.extended_updates.mojom.PageHandlerFactory": true, "ash.extended_updates.mojom.PageHandler": true, "ash.extended_updates.mojom.Page": true, "launcher_internals.mojom.PageHandlerFactory": true, "launcher_internals.mojom.Page": true, "lobster.mojom.UntrustedLobsterPageHandler": true, "ash.screens_common.mojom.AiIntroPageHandler": true, "ash.screens_common.mojom.AiIntroPage": true, "ash.screens_common.mojom.AppDownloadingPageHandler": true, "ash.screens_common.mojom.DrivePinningPageHandler": true, "ash.screens_common.mojom.DrivePinningPage": true, "ash.screens_common.mojom.FjordStationSetupPageHandler": true, "ash.screens_common.mojom.GaiaInfoPageHandler": true, "ash.screens_common.mojom.GaiaInfoPage": true, "ash.screens_common.mojom.GestureNavigationPageHandler": true, "ash.screens_common.mojom.GeminiIntroPageHandler": true, "ash.screens_factory.mojom.ScreensFactory": true, "ash.screens_login.mojom.ArcVmDataMigrationPageHandler": true, "ash.screens_login.mojom.ArcVmDataMigrationPage": true, "ash.screens_login.mojom.EncryptionMigrationPageHandler": true, "ash.screens_login.mojom.EncryptionMigrationPage": true, "ash.screens_oobe.mojom.ConsumerUpdatePageHandler": true, "ash.screens_oobe.mojom.ConsumerUpdatePage": true, "ash.screens_oobe.mojom.PackagedLicensePageHandler": true, "ash.screens_osauth.mojom.LocalDataLossWarningPageHandler": true, "ash.manage_mirrorsync.mojom.PageHandlerFactory": true, "ash.manage_mirrorsync.mojom.PageHandler": true, "ash.office_fallback.mojom.PageHandlerFactory": true, "ash.office_fallback.mojom.PageHandler": true, "parent_access_ui.mojom.ParentAccessUiHandler": true, "sensor.mojom.PageHandlerFactory": true, "sensor.mojom.PageHandler": true, "ash.settings.app_notification.mojom.AppNotificationsHandler": true, "ash.settings.app_notification.mojom.AppNotificationsObserver": true, "ash.settings.app_parental_controls.mojom.AppParentalControlsHandler": true, "ash.settings.app_parental_controls.mojom.AppParentalControlsObserver": true, "ash.settings.date_time.mojom.PageHandlerFactory": true, "ash.settings.date_time.mojom.PageHandler": true, "ash.settings.date_time.mojom.Page": true, "ash.settings.mojom.TabletModeObserver": true, "ash.settings.mojom.DisplayConfigurationObserver": true, "ash.settings.mojom.DisplayBrightnessSettingsObserver": true, "ash.settings.mojom.AmbientLightSensorObserver": true, "ash.settings.mojom.DisplaySettingsProvider": true, "ash.settings.mojom.KeyboardSettingsObserver": true, "ash.settings.mojom.TouchpadSettingsObserver": true, "ash.settings.mojom.PointingStickSettingsObserver": true, "ash.settings.mojom.MouseSettingsObserver": true, "ash.settings.mojom.ButtonPressObserver": true, "ash.settings.mojom.GraphicsTabletSettingsObserver": true, "ash.settings.mojom.KeyboardBrightnessObserver": true, "ash.settings.mojom.KeyboardAmbientLightSensorObserver": true, "ash.settings.mojom.LidStateObserver": true, "ash.settings.mojom.InputDeviceSettingsProvider": true, "ash.settings.google_drive.mojom.PageHandlerFactory": true, "ash.settings.google_drive.mojom.PageHandler": true, "ash.settings.google_drive.mojom.Page": true, "ash.settings.one_drive.mojom.PageHandlerFactory": true, "ash.settings.one_drive.mojom.PageHandler": true, "ash.settings.one_drive.mojom.Page": true, "ash.settings.graduation.mojom.GraduationHandler": true, "ash.settings.graduation.mojom.GraduationObserver": true, "ash.settings.app_permission.mojom.AppPermissionsHandler": true, "ash.settings.app_permission.mojom.AppPermissionsObserver": true, "ash.settings.magic_boost_handler.mojom.PageHandlerFactory": true, "ash.settings.magic_boost_handler.mojom.PageHandler": true, "ash.settings.mojom.SearchResultsObserver": true, "ash.settings.mojom.SearchHandler": true, "ash.settings.mojom.UserActionRecorder": true, "policy.local_user_files.mojom.PageHandlerFactory": true, "policy.local_user_files.mojom.PageHandler": true, "policy.local_user_files.mojom.Page": true, "ash.vm.mojom.VmDiagnosticsProvider": true, "mojom.DebugLogsChangeHandler": true, "mojom.BluetoothInternalsHandler": true, "mojom.BluetoothBtsnoop": true, "customize_buttons.mojom.CustomizeButtonsHandlerFactory": true, "customize_buttons.mojom.CustomizeButtonsHandler": true, "customize_buttons.mojom.CustomizeButtonsDocument": true, "data_sharing.mojom.PageHandlerFactory": true, "data_sharing.mojom.PageHandler": true, "data_sharing.mojom.Page": true, "discards.mojom.DetailsProvider": true, "discards.mojom.GraphChangeStream": true, "discards.mojom.GraphDump": true, "discards.mojom.SiteDataProvider": true, "downloads.mojom.PageHandlerFactory": true, "downloads.mojom.PageHandler": true, "downloads.mojom.Page": true, "zero_state_promo.mojom.PageHandlerFactory": true, "zero_state_promo.mojom.PageHandler": true, "feed_internals.mojom.PageHandler": true, "infobar_internals.mojom.Page": true, "infobar_internals.mojom.PageHandler": true, "infobar_internals.mojom.PageHandlerFactory": true, "legion_internals.mojom.LegionInternalsPageHandler": true, "mojom.LocationInternalsHandler": true, "nearby_share.mojom.ShareTargetListener": true, "nearby_share.mojom.TransferUpdateListener": true, "nearby_share.mojom.DiscoveryObserver": true, "nearby_share.mojom.DiscoveryManager": true, "nearby_share.mojom.ConfirmationManager": true, "nearby_share.mojom.ReceiveObserver": true, "nearby_share.mojom.ReceiveManager": true, "new_tab_footer.mojom.NewTabFooterHandlerFactory": true, "new_tab_footer.mojom.NewTabFooterHandler": true, "new_tab_footer.mojom.NewTabFooterDocument": true, "action_chips.mojom.ActionChipsHandler": true, "action_chips.mojom.Page": true, "action_chips.mojom.ActionChipsHandlerFactory": true, "foo.mojom.FooHandler": true, "new_tab_page.mojom.PageHandlerFactory": true, "new_tab_page.mojom.PageHandler": true, "new_tab_page.mojom.Page": true, "ntp_promo.mojom.NtpPromoHandler": true, "ntp_promo.mojom.NtpPromoClient": true, "ntp_promo.mojom.NtpPromoHandlerFactory": true, "new_tab_page_third_party.mojom.PageHandlerFactory": true, "new_tab_page_third_party.mojom.PageHandler": true, "new_tab_page_third_party.mojom.Page": true, "notifications_internals.mojom.PageHandler": true, "new_tab_page.mojom.MicrosoftAuthUntrustedDocument": true, "new_tab_page.mojom.MicrosoftAuthUntrustedDocumentInterfacesFactory": true, "new_tab_page.mojom.MicrosoftAuthUntrustedPageHandler": true, "aim_eligibility.mojom.Page": true, "aim_eligibility.mojom.PageHandler": true, "aim_eligibility.mojom.PageHandlerFactory": true, "mojom.OmniboxPageHandler": true, "mojom.OmniboxPage": true, "omnibox_popup_aim.mojom.PageHandlerFactory": true, "omnibox_popup_aim.mojom.PageHandler": true, "omnibox_popup_aim.mojom.Page": true, "on_device_internals.mojom.PageHandlerFactory": true, "on_device_internals.mojom.PageHandler": true, "on_device_internals.mojom.Page": true, "on_device_translation_internals.mojom.PageHandlerFactory": true, "on_device_translation_internals.mojom.PageHandler": true, "on_device_translation_internals.mojom.Page": true, "password_manager.mojom.PageHandlerFactory": true, "password_manager.mojom.PageHandler": true, "password_manager.mojom.Page": true, "privacy_sandbox_internals.mojom.PageHandler": true, "privacy_sandbox_internals.mojom.Page": true, "private_state_tokens.mojom.PrivateStateTokensPageHandler": true, "related_website_sets.mojom.RelatedWebsiteSetsPageHandler": true, "mojom.ResetPasswordHandler": true, "search_engine_choice.mojom.PageHandlerFactory": true, "search_engine_choice.mojom.PageHandler": true, "segmentation_internals.mojom.PageHandlerFactory": true, "segmentation_internals.mojom.PageHandler": true, "segmentation_internals.mojom.Page": true, "side_panel.mojom.BookmarksPageHandlerFactory": true, "side_panel.mojom.BookmarksPageHandler": true, "side_panel.mojom.BookmarksPage": true, "comments.mojom.PageHandlerFactory": true, "comments.mojom.PageHandler": true, "comments.mojom.Page": true, "side_panel.mojom.CustomizeChromePageHandlerFactory": true, "side_panel.mojom.CustomizeChromePageHandler": true, "side_panel.mojom.CustomizeChromePage": true, "side_panel.customize_chrome.mojom.CustomizeToolbarHandlerFactory": true, "side_panel.customize_chrome.mojom.CustomizeToolbarHandler": true, "side_panel.customize_chrome.mojom.CustomizeToolbarClient": true, "side_panel.customize_chrome.mojom.WallpaperSearchHandlerFactory": true, "side_panel.customize_chrome.mojom.WallpaperSearchHandler": true, "side_panel.customize_chrome.mojom.WallpaperSearchClient": true, "reading_list.mojom.PageHandlerFactory": true, "reading_list.mojom.PageHandler": true, "reading_list.mojom.Page": true, "batch_upload.mojom.PageHandlerFactory": true, "batch_upload.mojom.PageHandler": true, "batch_upload.mojom.Page": true, "history_sync_optin.mojom.PageHandlerFactory": true, "history_sync_optin.mojom.PageHandler": true, "history_sync_optin.mojom.Page": true, "signout_confirmation.mojom.PageHandlerFactory": true, "signout_confirmation.mojom.PageHandler": true, "signout_confirmation.mojom.Page": true, "skills.mojom.PageHandlerFactory": true, "skills.mojom.DialogHandler": true, "skills.mojom.PageHandler": true, "suggest_internals.mojom.PageHandler": true, "suggest_internals.mojom.Page": true, "tab_search.mojom.PageHandlerFactory": true, "tab_search.mojom.PageHandler": true, "tab_search.mojom.Page": true, "tab_strip.mojom.PageHandlerFactory": true, "tab_strip.mojom.PageHandler": true, "tab_strip.mojom.Page": true, "tab_strip_internals.mojom.PageHandlerFactory": true, "tab_strip_internals.mojom.PageHandler": true, "tab_strip_internals.mojom.Page": true, "unexportable_keys_internals.mojom.PageHandlerFactory": true, "unexportable_keys_internals.mojom.PageHandler": true, "unexportable_keys_internals.mojom.Page": true, "updater_ui.mojom.PageHandlerFactory": true, "updater_ui.mojom.PageHandler": true, "updater_ui.mojom.Page": true, "mojom.UsbInternalsPageHandler": true, "mojom.user_education_internals.UserEducationInternalsPageHandler": true, "watermark.mojom.PageHandlerFactory": true, "watermark.mojom.PageHandler": true, "mojom.WebAppInternalsHandler": true, "whats_new.mojom.PageHandlerFactory": true, "whats_new.mojom.PageHandler": true, "whats_new.mojom.Page": true, "bookmark_bar.mojom.PageHandlerFactory": true, "bookmark_bar.mojom.PageHandler": true, "bookmark_bar.mojom.Page": true, "webui_browser.mojom.PageHandlerFactory": true, "webui_browser.mojom.Page": true, "webui_browser.mojom.PageHandler": true, "webui_browser.mojom.GuestHandler": true, "extensions_bar.mojom.PageHandlerFactory": true, "extensions_bar.mojom.PageHandler": true, "extensions_bar.mojom.Page": true, "actor.mojom.JournalClient": true, "actor.mojom.PageStabilityMonitor": true, "chrome.mojom.ChromeRenderFrame": true, "compose.mojom.ComposeSessionUntrustedPageHandlerFactory": true, "compose.mojom.ComposeSessionUntrustedPageHandler": true, "compose.mojom.ComposeClientUntrustedPageHandler": true, "compose.mojom.ComposeUntrustedDialog": true, "mojom.ModuleEventSink": true, "chrome.mojom.FontPrewarmer": true, "chrome.mojom.RenderFrameFontFamilyAccessor": true, "chrome.mojom.GoogleAccountsPrivateApiExtension": true, "chrome.mojom.ProfileImportObserver": true, "chrome.mojom.ProfileImport": true, "chrome.mojom.AppShim": true, "chrome.mojom.AppShimHost": true, "chrome.mojom.AppShimHostBootstrap": true, "chrome.mojom.WebRtcLoggingClient": true, "chrome.mojom.WebRtcLoggingAgent": true, "offline_pages.mojom.MhtmlPageNotifier": true, "chrome.mojom.NetErrorPageSupport": true, "chrome.mojom.NetBenchmarking": true, "chrome.mojom.NetworkDiagnostics": true, "chrome.mojom.NetworkDiagnosticsClient": true, "chrome.mojom.NetworkEasterEgg": true, "chrome.mojom.OfflinePageAutoFetcher": true, "chrome.mojom.OpenSearchDescriptionDocumentHandler": true, "chrome.mojom.PluginHost": true, "chrome.mojom.PluginAuthHost": true, "chrome.mojom.PluginInfoHost": true, "read_anything.mojom.UntrustedPageHandlerFactory": true, "read_anything.mojom.UntrustedPageHandler": true, "read_anything.mojom.UntrustedPage": true, "chrome.mojom.BoundSessionRequestThrottledHandler": true, "chrome.mojom.ChromeOSListener": true, "chrome.mojom.RendererConfiguration": true, "chrome.mojom.SandboxStatusExtension": true, "search.mojom.EmbeddedSearchConnector": true, "search.mojom.EmbeddedSearch": true, "search.mojom.EmbeddedSearchClient": true, "supervised_user.mojom.SupervisedUserCommands": true, "chrome.mojom.TrustedVaultEncryptionKeysExtension": true, "wallet.mojom.BoardingPassExtractor": true, "gcpw_hid.mojom.GaiaCredentialProviderHidBroker": true, "enterprise_companion.mojom.EnterpriseCompanion": true, "chrome.mojom.DocumentAnalysisService": true, "chrome.mojom.FileUtilService": true, "chrome.mojom.SafeArchiveAnalyzer": true, "chrome.mojom.TemporaryFileGetter": true, "chrome.mojom.SingleFileExtractor": true, "chrome.mojom.SingleFileExtractorListener": true, "chrome.mojom.ZipListener": true, "chrome.mojom.ZipFileCreator": true, "mac_notifications.mojom.MacNotificationService": true, "mac_notifications.mojom.MacNotificationActionHandler": true, "mac_notifications.mojom.MacNotificationProvider": true, "chrome.mojom.MediaParser": true, "chrome.mojom.MediaParserFactory": true, "chrome.mojom.MediaDataSource": true, "pdf.mojom.PdfProgressiveSearchifier": true, "pdf.mojom.PdfSearchifier": true, "pdf.mojom.Ocr": true, "pdf.mojom.PdfService": true, "pdf.mojom.PdfThumbnailer": true, "printing.mojom.PdfFlattener": true, "printing.mojom.PdfNupConverter": true, "printing.mojom.PdfToEmfConverter": true, "printing.mojom.PdfToEmfConverterFactory": true, "printing.mojom.PdfToPwgRasterConverter": true, "printing.mojom.UnsandboxedPrintBackendHost": true, "printing.mojom.SandboxedPrintBackendHost": true, "printing.mojom.PrintBackendService": true, "printing.mojom.PrinterXmlParser": true, "printing.mojom.PrintingService": true, "chrome.mojom.RemovableStorageWriter": true, "chrome.mojom.RemovableStorageWriterClient": true, "chrome.mojom.UtilReadIcon": true, "chrome.mojom.UtilWin": true, "chrome.mojom.ProcessorMetrics": true, "web_ui_test.mojom.TestRunner": true, "test.mojom.Foo": true, "test.mojom.Bar": true, "test.mojom.Baz": true, "test.mojom.MojoFileSystemAccessTest": true, "updater.mojom.UpdateService": true, "updater.mojom.StateChangeObserver": true, "updater.mojom.UpdateServiceInternal": true, "updater.mojom.PostRequestObserver": true, "updater.mojom.FileDownloadObserver": true, "updater.mojom.FetchService": true, "chromecast.mojom.ApiBindings": true, "chromecast.mojom.BluetoothDeviceAccessProvider": true, "chromecast.mojom.BluetoothDeviceAccessProviderClient": true, "chromecast.mojom.GeneralAudienceBrowsingAPIKeyObserver": true, "chromecast.mojom.GeneralAudienceBrowsingAPIKeySubject": true, "chromecast.mojom.CastContentWindowObserver": true, "chromecast.mojom.CastContentWindow": true, "chromecast.mojom.CastWebContentsObserver": true, "chromecast.mojom.CastWebContents": true, "chromecast.mojom.CastWebService": true, "chromecast.mojom.MessageCallback": true, "chromecast.mojom.WebUi": true, "chromecast.mojom.Resources": true, "chromecast.mojom.WebUiClient": true, "chromecast.mojom.ActivityUrlFilterConfiguration": true, "chromecast.mojom.ActivityWindow": true, "chromecast.shell.mojom.ApplicationMediaCapabilitiesObserver": true, "chromecast.shell.mojom.ApplicationMediaCapabilities": true, "chromecast.mojom.AssistantMessagePipe": true, "chromecast.mojom.AssistantMessageClient": true, "chromecast.mojom.AssistantMessageService": true, "chromecast.mojom.AudioSocketBroker": true, "chromecast.shell.mojom.CastDemoVolumeChangeObserver": true, "chromecast.shell.mojom.CastDemo": true, "chromecast.shell.mojom.FeatureManager": true, "chromecast.mojom.FeatureUpdateObserver": true, "chromecast.mojom.FeatureUpdateService": true, "chromecast.mojom.GestureHandler": true, "chromecast.mojom.GestureSource": true, "chromecast.mojom.JsChannel": true, "chromecast.mojom.JsChannelClient": true, "chromecast.mojom.JsChannelBindingProvider": true, "chromecast.media.mojom.MediaCaps": true, "chromecast.media.mojom.MediaCapsObserver": true, "chromecast.metrics.mojom.MetricsHelper": true, "chromecast.shell.mojom.QueryableDataStore": true, "chromecast.mojom.ServiceConnector": true, "chromecast.mojom.SettingsClient": true, "chromecast.mojom.SettingsPlatform": true, "chromecast.external_mojo.mojom.ExternalService": true, "chromecast.external_mojo.mojom.ExternalConnector": true, "chromecast.external_mojo.mojom.TestExternalConnector": true, "chromecast.media.mojom.VideoGeometryChangeClient": true, "chromecast.media.mojom.VideoGeometryChangeSubscriber": true, "chromecast.media.mojom.VideoGeometrySetter": true, "chromecast.mojom.RemoteInterfaces": true, "chromecast.mojom.DisplaySettings": true, "chromecast.mojom.DisplaySettingsObserver": true, "ash.audio_config.mojom.AudioSystemPropertiesObserver": true, "ash.audio_config.mojom.CrosAudioConfig": true, "drivefs.mojom.DriveFsBootstrap": true, "drivefs.mojom.DriveFs": true, "drivefs.mojom.DriveFsDelegate": true, "drivefs.mojom.SearchQuery": true, "drivefs.mojom.HttpDelegate": true, "drivefs.mojom.FakeDriveFsLauncher": true, "emoji_search.mojom.EmojiSearch": true, "ash.enhanced_network_tts.mojom.EnhancedNetworkTts": true, "ash.enhanced_network_tts.mojom.AudioDataObserver": true, "ash.language.mojom.LanguagePacksObserver": true, "ash.language.mojom.LanguagePacks": true, "ash.local_search_service.mojom.Index": true, "ash.local_search_service.mojom.SearchMetricsReporter": true, "ash.local_search_service.mojom.LocalSearchService": true, "mantis.mojom.MantisProcessor": true, "mantis.mojom.PlatformModelProgressObserver": true, "mantis.mojom.MantisService": true, "userspace_swap.mojom.UserspaceSwapInitialization": true, "userspace_swap.mojom.UserspaceSwap": true, "chromeos.mojo_service_manager.mojom.ServiceManager": true, "chromeos.mojo_service_manager.mojom.ServiceProvider": true, "chromeos.mojo_service_manager.mojom.ServiceObserver": true, "smbfs.mojom.SmbFsBootstrap": true, "smbfs.mojom.SmbFs": true, "smbfs.mojom.SmbFsDelegate": true, "ash.trash_service.mojom.TrashService": true, "arc.mojom.AdbdMonitorHost": true, "arc.mojom.AdbdMonitorInstance": true, "arc.mojom.AppHost": true, "arc.mojom.AppInstance": true, "arc.mojom.AppPermissionsInstance": true, "arc.mojom.AppfuseHost": true, "arc.mojom.AppfuseInstance": true, "arc.mojom.ArcBridgeHost": true, "arc.mojom.ArcWifiHost": true, "arc.mojom.ArcWifiInstance": true, "arc.mojom.AudioHost": true, "arc.mojom.AudioInstance": true, "arc.mojom.AuthHost": true, "arc.mojom.AuthInstance": true, "arc.mojom.BackupSettingsInstance": true, "arc.mojom.RfcommListeningSocketClient": true, "arc.mojom.RfcommConnectingSocketClient": true, "arc.mojom.BluetoothListenSocketClient": true, "arc.mojom.BluetoothConnectSocketClient": true, "arc.mojom.BluetoothHost": true, "arc.mojom.BluetoothInstance": true, "arc.mojom.BootPhaseMonitorHost": true, "arc.mojom.BootPhaseMonitorInstance": true, "arc.mojom.CameraService": true, "arc.mojom.CameraHost": true, "arc.mojom.CameraInstance": true, "arc.mojom.ChromeFeatureFlagsInstance": true, "arc.mojom.CompatibilityModeInstance": true, "arc.mojom.CrashCollectorHost": true, "arc.mojom.CrashCollectorInstance": true, "arc.mojom.ArcShellExecutionInstance": true, "arc.mojom.DigitalGoodsInstance": true, "arc.mojom.DiskSpaceHost": true, "arc.mojom.DiskSpaceInstance": true, "arc.mojom.EnterpriseReportingHost": true, "arc.mojom.EnterpriseReportingInstance": true, "arc.mojom.ErrorNotificationHost": true, "arc.mojom.ErrorNotificationInstance": true, "arc.mojom.ErrorNotificationItem": true, "arc.mojom.ErrorNotificationActionHandler": true, "arc.mojom.FileSystemHost": true, "arc.mojom.FileSystemInstance": true, "arc.mojom.IioSensorHost": true, "arc.mojom.IioSensorInstance": true, "arc.mojom.ImeHost": true, "arc.mojom.ImeInstance": true, "arc.mojom.InputConnection": true, "arc.mojom.InputMethodManagerHost": true, "arc.mojom.InputMethodManagerInstance": true, "arc.mojom.CustomTabSession": true, "arc.mojom.IntentHelperHost": true, "arc.mojom.IntentHelperInstance": true, "arc.mojom.KeymasterHost": true, "arc.mojom.KeymasterInstance": true, "arc.mojom.KeymasterServer": true, "arc.mojom.keymint.KeyMintHost": true, "arc.mojom.keymint.KeyMintInstance": true, "arc.mojom.keymint.KeyMintServer": true, "arc.mojom.KioskHost": true, "arc.mojom.KioskInstance": true, "arc.mojom.MediaSessionInstance": true, "arc.mojom.MemoryInstance": true, "arc.mojom.MetricsHost": true, "arc.mojom.MetricsInstance": true, "arc.mojom.MidisClient": true, "arc.mojom.MidisServer": true, "arc.mojom.MidisHost": true, "arc.mojom.MidisInstance": true, "arc.mojom.NearbyShareSessionHost": true, "arc.mojom.NearbyShareSessionInstance": true, "arc.mojom.NearbyShareHost": true, "arc.mojom.NearbyShareInstance": true, "arc.mojom.NetHost": true, "arc.mojom.NetInstance": true, "arc.mojom.NotificationsHost": true, "arc.mojom.NotificationsInstance": true, "arc.mojom.ObbMounterHost": true, "arc.mojom.ObbMounterInstance": true, "arc.mojom.OemCryptoService": true, "arc.mojom.OemCryptoHost": true, "arc.mojom.OemCryptoInstance": true, "arc.mojom.OnDeviceSafetyHost": true, "arc.mojom.OnDeviceSafetyInstance": true, "arc.mojom.PipHost": true, "arc.mojom.PipInstance": true, "arc.mojom.PolicyHost": true, "arc.mojom.PolicyInstance": true, "arc.mojom.PowerHost": true, "arc.mojom.PowerInstance": true, "arc.mojom.PrintSessionHost": true, "arc.mojom.PrintSessionInstance": true, "arc.mojom.PrintSpoolerHost": true, "arc.mojom.PrintSpoolerInstance": true, "arc.mojom.PrivacyItemsHost": true, "arc.mojom.PrivacyItemsInstance": true, "arc.mojom.ProcessInstance": true, "arc.mojom.ProtectedBufferManager": true, "arc.mojom.ScreenCaptureHost": true, "arc.mojom.ScreenCaptureSession": true, "arc.mojom.ScreenCaptureInstance": true, "arc.mojom.ScreenCaptureSessionNotifier": true, "arc.mojom.SharesheetHost": true, "arc.mojom.SharesheetInstance": true, "arc.mojom.SystemStateHost": true, "arc.mojom.SystemStateInstance": true, "arc.mojom.SystemUiInstance": true, "arc.mojom.TimerHost": true, "arc.mojom.TimerInstance": true, "arc.mojom.TracingInstance": true, "arc.mojom.TtsHost": true, "arc.mojom.TtsInstance": true, "arc.mojom.UsbHostHost": true, "arc.mojom.UsbHostInstance": true, "arc.mojom.VideoHost": true, "arc.mojom.VideoInstance": true, "arc.mojom.VideoAcceleratorFactory": true, "arc.mojom.VideoDecodeAccelerator": true, "arc.mojom.VideoDecodeClient": true, "arc.mojom.VideoDecoder": true, "arc.mojom.VideoDecoderClient": true, "arc.mojom.VideoEncodeAccelerator": true, "arc.mojom.VideoEncodeClient": true, "arc.mojom.VideoFramePool": true, "arc.mojom.VideoFramePoolClient": true, "arc.mojom.VideoProtectedBufferAllocator": true, "arc.mojom.VolumeMounterHost": true, "arc.mojom.VolumeMounterInstance": true, "arc.mojom.WakeLockHost": true, "arc.mojom.WakeLockInstance": true, "arc.mojom.WallpaperHost": true, "arc.mojom.WallpaperInstance": true, "arc.mojom.WebApkInstance": true, "ash.borealis_motd.mojom.PageHandlerFactory": true, "ash.borealis_motd.mojom.PageHandler": true, "ash.borealis_motd.mojom.Page": true, "ash.auth.mojom.FactorObserver": true, "ash.auth.mojom.AuthFactorConfig": true, "ash.auth.mojom.RecoveryFactorEditor": true, "ash.auth.mojom.PinFactorEditor": true, "ash.auth.mojom.PasswordFactorEditor": true, "ash.bluetooth_config.mojom.SystemPropertiesObserver": true, "ash.bluetooth_config.mojom.BluetoothDeviceStatusObserver": true, "ash.bluetooth_config.mojom.DiscoverySessionStatusObserver": true, "ash.bluetooth_config.mojom.KeyEnteredHandler": true, "ash.bluetooth_config.mojom.DevicePairingDelegate": true, "ash.bluetooth_config.mojom.DevicePairingHandler": true, "ash.bluetooth_config.mojom.BluetoothDiscoveryDelegate": true, "ash.bluetooth_config.mojom.CrosBluetoothConfig": true, "ash.babelorca.mojom.TachyonParsingService": true, "ash.cellular_setup.mojom.CarrierPortalHandler": true, "ash.cellular_setup.mojom.ActivationDelegate": true, "ash.cellular_setup.mojom.CellularSetup": true, "ash.cellular_setup.mojom.ESimManagerObserver": true, "ash.cellular_setup.mojom.ESimManager": true, "ash.cellular_setup.mojom.Euicc": true, "ash.cellular_setup.mojom.ESimProfile": true, "chromeos.connectivity.mojom.PasspointEventsListener": true, "chromeos.connectivity.mojom.PasspointService": true, "coral.mojom.TitleObserver": true, "coral.mojom.CoralProcessor": true, "coral.mojom.CoralService": true, "ash.cros_healthd.internal.mojom.ChromiumDataCollector": true, "ash.cros_healthd.mojom.CrosHealthdDiagnosticsService": true, "ash.cros_healthd.mojom.CrosHealthdEventService": true, "ash.cros_healthd.mojom.CrosHealthdProbeService": true, "ash.cros_healthd.mojom.DEPRECATED_LedLitUpRoutineReplier": true, "ash.cros_healthd.mojom.AshEventReporter": true, "ash.cros_healthd.mojom.CrosHealthdBluetoothObserver": true, "ash.cros_healthd.mojom.CrosHealthdLidObserver": true, "ash.cros_healthd.mojom.CrosHealthdPowerObserver": true, "ash.cros_healthd.mojom.CrosHealthdAudioObserver": true, "ash.cros_healthd.mojom.CrosHealthdThunderboltObserver": true, "ash.cros_healthd.mojom.CrosHealthdUsbObserver": true, "ash.cros_healthd.mojom.CrosHealthdSdCardObserver": true, "ash.cros_healthd.mojom.EventObserver": true, "ash.cros_healthd.mojom.CrosHealthdRoutinesService": true, "ash.cros_healthd.mojom.RoutineControl": true, "ash.cros_healthd.mojom.RoutineObserver": true, "ash.cros_healthd.connectivity.mojom.State": true, "ash.cros_healthd.connectivity.mojom.ConnectivityTestProvider": true, "ash.cros_safety.mojom.CloudSafetySession": true, "ash.cros_safety.mojom.OnDeviceSafetySession": true, "ash.cros_safety.mojom.CrosSafetyService": true, "ash.device_sync.mojom.DeviceSyncObserver": true, "ash.device_sync.mojom.DeviceSync": true, "ash.heartd.mojom.HeartdControl": true, "ash.heartd.mojom.HeartbeatService": true, "ash.heartd.mojom.Pacemaker": true, "ash.hotspot_config.mojom.CrosHotspotConfig": true, "ash.hotspot_config.mojom.CrosHotspotConfigObserver": true, "ash.hotspot_config.mojom.HotspotEnabledStateObserver": true, "ash.ime.mojom.ConnectionFactory": true, "ash.ime.mojom.InputEngineManager": true, "ash.ime.mojom.PlatformAccessProvider": true, "ash.ime.mojom.ImeService": true, "ash.ime.mojom.InputChannel": true, "ash.ime.mojom.InputMethod": true, "ash.ime.mojom.InputMethodHost": true, "ash.ime.mojom.InputMethodUserDataService": true, "ash.ime.mojom.JpUnused": true, "arc.keymaster.mojom.CertStoreInstance": true, "arc.keymint.mojom.CertStoreInstance": true, "ash.multidevice_setup.mojom.AccountStatusChangeDelegate": true, "ash.multidevice_setup.mojom.HostStatusObserver": true, "ash.multidevice_setup.mojom.FeatureStateObserver": true, "ash.multidevice_setup.mojom.MultiDeviceSetup": true, "ash.multidevice_setup.mojom.PrivilegedHostDeviceSetter": true, "sharing.mojom.FirewallHole": true, "sharing.mojom.FirewallHoleFactory": true, "sharing.mojom.MdnsObserver": true, "sharing.mojom.MdnsManager": true, "nearby.connections.mojom.EndpointDiscoveryListener": true, "nearby.connections.mojom.ConnectionLifecycleListener": true, "nearby.connections.mojom.PayloadListener": true, "nearby.connections.mojom.ConnectionListenerV3": true, "nearby.connections.mojom.PayloadListenerV3": true, "nearby.connections.mojom.NearbyConnections": true, "sharing.mojom.NearbySharingDecoder": true, "ash.nearby.presence.mojom.ScanSession": true, "ash.nearby.presence.mojom.ScanObserver": true, "ash.nearby.presence.mojom.NearbyPresence": true, "ash.nearby.presence.mojom.NearbyPresenceCredentialStorage": true, "nearby_share.mojom.NearbyShareSettingsObserver": true, "nearby_share.mojom.NearbyShareSettings": true, "nearby_share.mojom.DownloadContactsObserver": true, "nearby_share.mojom.ContactManager": true, "ash.quick_start.mojom.QuickStartDecoder": true, "sharing.mojom.Sharing": true, "sharing.mojom.TcpSocketFactory": true, "sharing.mojom.IceConfigFetcher": true, "sharing.mojom.MdnsResponderFactory": true, "sharing.mojom.IncomingMessagesListener": true, "sharing.mojom.ReceiveMessagesSession": true, "sharing.mojom.WebRtcSignalingMessenger": true, "ash.orca.mojom.EditorClient": true, "ash.orca.mojom.EditorClientConnector": true, "ash.orca.mojom.EditorEventSink": true, "ash.orca.mojom.SystemActuator": true, "ash.orca.mojom.TextQueryProvider": true, "ash.orca.mojom.OrcaService": true, "ash.quick_pair.mojom.FastPairDataParser": true, "ash.quick_pair.mojom.QuickPairService": true, "recording.mojom.DriveFsQuotaDelegate": true, "recording.mojom.RecordingServiceClient": true, "recording.mojom.RecordingService": true, "ash.rollback_network_config.mojom.RollbackNetworkConfig": true, "ash.secure_channel.mojom.NearbyConnectionStateListener": true, "ash.secure_channel.mojom.NearbyMessageSender": true, "ash.secure_channel.mojom.NearbyMessageReceiver": true, "ash.secure_channel.mojom.NearbyFilePayloadHandler": true, "ash.secure_channel.mojom.NearbyConnector": true, "ash.secure_channel.mojom.Channel": true, "ash.secure_channel.mojom.MessageReceiver": true, "ash.secure_channel.mojom.ConnectionDelegate": true, "ash.secure_channel.mojom.SecureChannelStructuredMetricsLogger": true, "ash.secure_channel.mojom.SecureChannel": true, "ash.secure_channel.mojom.FilePayloadListener": true, "ash.wifi_direct.mojom.WifiDirectManager": true, "ash.wifi_direct.mojom.WifiDirectConnection": true, "chromeos.cdm.mojom.BrowserCdmFactory": true, "chromeos.cdm.mojom.CdmFactory": true, "chromeos.cdm.mojom.CdmFactoryDaemon": true, "chromeos.cdm.mojom.CdmStorage": true, "chromeos.cdm.mojom.ContentDecryptionModule": true, "chromeos.cdm.mojom.ContentDecryptionModuleClient": true, "chromeos.cdm.mojom.OutputProtection": true, "drivefs.mojom.NativeMessagingPort": true, "drivefs.mojom.NativeMessagingHost": true, "chromeos.auth.mojom.InSessionAuth": true, "mahi.mojom.ContentExtractionService": true, "mahi.mojom.ContentExtractionServiceFactory": true, "chromeos.payments.mojom.PaymentAppInstance": true, "chromeos.printing.printing_manager.mojom.PrintJobsObserver": true, "chromeos.printing.printing_manager.mojom.PrintingMetadataProvider": true, "chromeos.printing.printing_manager.mojom.PrintManagementHandler": true, "quick_answers.mojom.SpellCheckService": true, "quick_answers.mojom.SpellCheckDictionary": true, "chromeos.remote_apps.mojom.RemoteApps": true, "chromeos.remote_apps.mojom.RemoteAppsFactory": true, "chromeos.remote_apps.mojom.RemoteAppLaunchObserver": true, "chromeos.sensors.mojom.SensorHalServer": true, "chromeos.sensors.mojom.SensorHalClient": true, "chromeos.sensors.mojom.SensorService": true, "chromeos.sensors.mojom.SensorDevice": true, "chromeos.sensors.mojom.SensorDeviceSamplesObserver": true, "chromeos.sensors.mojom.SensorServiceNewDevicesObserver": true, "crosapi.mojom.AccountManagerObserver": true, "crosapi.mojom.AccountManager": true, "crosapi.mojom.AccessTokenFetcher": true, "crosapi.mojom.CrosDisplayConfigController": true, "crosapi.mojom.CrosDisplayConfigObserver": true, "crosapi.mojom.Crosapi": true, "crosapi.mojom.DiagnosticsService": true, "crosapi.mojom.DocumentScan": true, "crosapi.mojom.SearchResultConsumer": true, "crosapi.mojom.PrintServerObserver": true, "crosapi.mojom.PrintJobObserver": true, "crosapi.mojom.LocalPrintersObserver": true, "crosapi.mojom.LocalPrinter": true, "crosapi.mojom.PrintPreviewCrosDelegate": true, "crosapi.mojom.PrintPreviewCrosClient": true, "crosapi.mojom.TelemetryProbeService": true, "crosapi.mojom.StructuredMetricsService": true, "crosapi.mojom.TelemetryDiagnosticRoutineControl": true, "crosapi.mojom.TelemetryDiagnosticRoutineObserver": true, "crosapi.mojom.TelemetryDiagnosticRoutinesService": true, "crosapi.mojom.TelemetryEventObserver": true, "crosapi.mojom.TelemetryEventService": true, "crosapi.mojom.TelemetryManagementService": true, "crosapi.mojom.ScopedAccessPermission": true, "crosapi.mojom.VideoFrameHandler": true, "crosapi.mojom.VideoCaptureDevice": true, "crosapi.mojom.VideoCaptureDeviceFactory": true, "crosapi.mojom.VideoConferenceManagerClient": true, "chromeos.cfm.mojom.CfmBrowser": true, "chromeos.cfm.mojom.DisconnectReason": true, "chromeos.cfm.mojom.CfmServiceContext": true, "chromeos.cfm.mojom.CfmServiceAdaptor": true, "chromeos.cfm.mojom.ExternalDisplayBrightness": true, "ash.cfm.mojom.MeetBrowser": true, "ash.cfm.mojom.DataWatchDog": true, "ash.cfm.mojom.DataSource": true, "ash.cfm.mojom.DataAggregator": true, "chromeos.cfm.mojom.MeetDevicesDiagnostics": true, "chromeos.cfm.mojom.MeetDevicesInfo": true, "chromeos.cfm.mojom.PolicyInfoObserver": true, "chromeos.cfm.mojom.LoggerStateObserver": true, "chromeos.cfm.mojom.MeetDevicesLogger": true, "ash.cfm.mojom.XuCamera": true, "chromeos.machine_learning.mojom.DocumentScanner": true, "chromeos.machine_learning.mojom.GrammarChecker": true, "chromeos.machine_learning.mojom.GraphExecutor": true, "chromeos.machine_learning.mojom.HandwritingRecognizer": true, "chromeos.machine_learning.mojom.HeatmapPalmRejectionClient": true, "chromeos.machine_learning.mojom.ImageContentAnnotator": true, "chromeos.machine_learning.mojom.MachineLearningService": true, "chromeos.machine_learning.mojom.Model": true, "chromeos.machine_learning.mojom.SodaClient": true, "chromeos.machine_learning.mojom.SodaRecognizer": true, "chromeos.machine_learning.mojom.TextClassifier": true, "chromeos.machine_learning.mojom.TextSuggester": true, "chromeos.machine_learning.web_platform.mojom.HandwritingRecognizer": true, "chromeos.media_perception.mojom.MediaPerception": true, "chromeos.media_perception.mojom.MediaPerceptionService": true, "chromeos.media_perception.mojom.MediaPerceptionController": true, "chromeos.media_perception.mojom.MediaPerceptionControllerClient": true, "chromeos.network_config.mojom.CrosNetworkConfig": true, "chromeos.network_config.mojom.CrosNetworkConfigObserver": true, "chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines": true, "chromeos.network_health.mojom.NetworkEventsObserver": true, "chromeos.network_health.mojom.NetworkHealthService": true, "chromeos.tts.mojom.TtsService": true, "chromeos.tts.mojom.GoogleTtsStream": true, "chromeos.tts.mojom.PlaybackTtsStream": true, "chromeos.tts.mojom.TtsEventObserver": true, "math.mojom.MathService": true, "codelabs.mojom.ObjectA": true, "codelabs.mojom.ObjectB": true, "codelabs.mojom.AssociatedProcess": true, "codelabs.mojom.GenericInterface": true, "codelabs.mojom.Process": true, "attribution_reporting.mojom.DataHost": true, "autofill.mojom.AutofillAgent": true, "autofill.mojom.PasswordAutofillAgent": true, "autofill.mojom.PasswordGenerationAgent": true, "autofill.mojom.AutofillDriver": true, "autofill.mojom.PasswordManagerDriver": true, "autofill.mojom.PasswordGenerationDriver": true, "autofill_ml_internals.mojom.Page": true, "autofill_ml_internals.mojom.PageHandler": true, "autofill.mojom.TypeTraitsTest": true, "browser_controls_api.mojom.BrowserControlsFactory": true, "browser_controls_api.mojom.BrowserControlsObserver": true, "browser_controls_api.mojom.BrowserControlsService": true, "tabs_api.mojom.TabStripService": true, "tabs_api.mojom.TabsObserver": true, "tabs_api.mojom.TabStripExperimentService": true, "browsing_topics.mojom.PageHandler": true, "cast_streaming.mojom.AudioBufferRequester": true, "cast_streaming.mojom.VideoBufferRequester": true, "cast_streaming.mojom.DemuxerConnector": true, "cast_streaming.mojom.RendererController": true, "chromeos_camera.mojom.JpegEncodeAccelerator": true, "chromeos_camera.mojom.MjpegDecodeAccelerator": true, "commerce.mojom.CommerceInternalsHandlerFactory": true, "commerce.mojom.CommerceInternalsHandler": true, "commerce.mojom.CommerceInternalsPage": true, "commerce_web_extractor.mojom.CommerceWebExtractor": true, "commerce.price_insights.mojom.PriceInsightsHandler": true, "commerce.price_insights.mojom.PriceInsightsHandlerFactory": true, "commerce.price_tracking.mojom.PriceTrackingHandler": true, "commerce.price_tracking.mojom.Page": true, "commerce.price_tracking.mojom.PriceTrackingHandlerFactory": true, "commerce.product_specifications.mojom.ProductSpecificationsHandler": true, "commerce.product_specifications.mojom.Page": true, "commerce.product_specifications.mojom.ProductSpecificationsHandlerFactory": true, "shopping_service.mojom.ShoppingServiceHandlerFactory": true, "shopping_service.mojom.ShoppingServiceHandler": true, "content_capture.mojom.ContentCaptureReceiver": true, "content_capture.mojom.ContentCaptureSender": true, "content_settings.mojom.ContentSettingsAgent": true, "content_settings.mojom.ContentSettingsManager": true, "continuous_search.mojom.SearchResultExtractor": true, "data_sharing_internals.mojom.PageHandlerFactory": true, "data_sharing_internals.mojom.PageHandler": true, "data_sharing_internals.mojom.Page": true, "device_signals.mojom.SystemSignalsService": true, "discardable_memory.mojom.DiscardableSharedMemoryManager": true, "dom_distiller.mojom.DistillabilityService": true, "dom_distiller.mojom.DistillerJavaScriptService": true, "download.mojom.DownloadStreamClient": true, "connectors_internals.mojom.PageHandler": true, "payments.facilitated.mojom.PixCodeValidator": true, "feed.mojom.RssLinkReader": true, "global_media_controls.mojom.DeviceListHost": true, "global_media_controls.mojom.DeviceListClient": true, "global_media_controls.mojom.DeviceService": true, "global_media_controls.mojom.DevicePickerProvider": true, "global_media_controls.mojom.DevicePickerObserver": true, "guest_contents.mojom.GuestContentsHost": true, "guest_view.mojom.ViewHandle": true, "guest_view.mojom.GuestViewHost": true, "heap_profiling.mojom.SnapshotController": true, "heap_profiling.mojom.TestConnector": true, "history_clusters_internals.mojom.PageHandlerFactory": true, "history_clusters_internals.mojom.PageHandler": true, "history_clusters_internals.mojom.Page": true, "input.mojom.RenderInputRouterDelegate": true, "input.mojom.RenderInputRouterDelegateClient": true, "js_injection.mojom.JsToBrowserMessaging": true, "js_injection.mojom.JsObjectsClient": true, "js_injection.mojom.BrowserToJsMessagingFactory": true, "js_injection.mojom.BrowserToJsMessaging": true, "js_injection.mojom.JsCommunication": true, "language_detection.mojom.ContentLanguageDetectionDriver": true, "legion.mojom.OakSession": true, "components.media_control.mojom.MediaPlaybackOptions": true, "media_router.mojom.Debugger": true, "media_router.mojom.Logger": true, "media_router.mojom.MediaController": true, "media_router.mojom.MediaRouteProvider": true, "media_router.mojom.MediaRouter": true, "media_router.mojom.MediaRouterTraitsTestService": true, "media_router.mojom.MediaStatusObserver": true, "metrics.dwa.mojom.DwaRecorderClientInterface": true, "metrics.dwa.mojom.DwaRecorderInterface": true, "metrics.dwa.mojom.DwaRecorderFactory": true, "metrics.mojom.CallStackProfileCollector": true, "metrics.mojom.CallStackProfileCollectorTest": true, "metrics.mojom.ChildHistogramFetcherFactory": true, "metrics.mojom.ChildHistogramFetcher": true, "metrics.mojom.SingleSampleMetricsProvider": true, "metrics.mojom.SingleSampleMetric": true, "mirroring.mojom.CastMessageChannel": true, "mirroring.mojom.MirroringService": true, "mirroring.mojom.AudioStreamCreatorClient": true, "mirroring.mojom.ResourceProvider": true, "mirroring.mojom.SessionObserver": true, "network_hints.mojom.NetworkHintsHandler": true, "prerender.mojom.NoStatePrefetchCanceler": true, "prerender.mojom.NoStatePrefetchMessages": true, "searchbox.mojom.PageHandler": true, "searchbox.mojom.Page": true, "on_device_translation.mojom.FileOperationProxy": true, "on_device_translation.mojom.OnDeviceTranslationService": true, "on_device_translation.mojom.Translator": true, "on_load_script_injector.mojom.OnLoadScriptInjector": true, "optimization_guide.mojom.PageTextConsumer": true, "optimization_guide.mojom.PageTextService": true, "optimization_guide_internals.mojom.PageHandlerFactory": true, "optimization_guide_internals.mojom.Page": true, "optimization_guide.mojom.ModelSolution": true, "optimization_guide.mojom.ModelSubscriber": true, "optimization_guide.mojom.ModelBroker": true, "page_image_service.mojom.PageImageServiceHandler": true, "page_load_metrics.mojom.PageLoadMetrics": true, "paint_preview.mojom.PaintPreviewRecorder": true, "password_manager.mojom.CSVPasswordParser": true, "performance_manager.mojom.DocumentCoordinationUnit": true, "performance_manager.mojom.ProcessCoordinationUnit": true, "performance_manager.mojom.ChildProcessCoordinationUnit": true, "printing.mojom.PrintPreviewUI": true, "printing.mojom.PrintRenderFrame": true, "printing.mojom.PrintManagerHost": true, "remote_cocoa.mojom.AlertBridge": true, "remote_cocoa.mojom.StubInterface": true, "remote_cocoa.mojom.Application": true, "remote_cocoa.mojom.MenuHost": true, "remote_cocoa.mojom.Menu": true, "remote_cocoa.mojom.NativeWidgetNSWindow": true, "remote_cocoa.mojom.NativeWidgetNSWindowHost": true, "remote_cocoa.mojom.SelectFileDialog": true, "remote_cocoa.mojom.TextInputHost": true, "safe_browsing.mojom.SafeBrowsing": true, "safe_browsing.mojom.ThreatReporter": true, "safe_browsing.mojom.PhishingDetector": true, "safe_browsing.mojom.PhishingModelSetter": true, "safe_browsing.mojom.PhishingModelSetterTestObserver": true, "safe_browsing.mojom.PhishingImageEmbedderDetector": true, "safe_browsing.mojom.ExtensionWebRequestReporter": true, "safe_browsing.mojom.SafeBrowsingUrlChecker": true, "security_interstitials.mojom.InterstitialCommands": true, "filesystem.mojom.Directory": true, "font_service.mojom.FontService": true, "font_data_service.mojom.FontDataService": true, "heap_profiling.mojom.ProfilingClient": true, "heap_profiling.mojom.ProfilingService": true, "paint_preview.mojom.PaintPreviewCompositor": true, "paint_preview.mojom.PaintPreviewCompositorCollection": true, "patch.mojom.FilePatcher": true, "printing.mojom.PrintCompositor": true, "quarantine.mojom.Quarantine": true, "storage.mojom.IndexedDBClientStateChecker": true, "storage.mojom.IndexedDBClientKeepActive": true, "storage.mojom.IndexedDBObserver": true, "storage.mojom.IndexedDBControl": true, "storage.mojom.MockFailureInjector": true, "storage.mojom.IndexedDBControlTest": true, "storage.mojom.BlobDataItemReader": true, "storage.mojom.BlobStorageContext": true, "storage.mojom.CacheStorageObserver": true, "storage.mojom.CacheStorageControl": true, "storage.mojom.FileSystemAccessContext": true, "storage.mojom.FileLock": true, "storage.mojom.Directory": true, "storage.mojom.LocalStorageControl": true, "storage.mojom.QuotaClient": true, "storage.mojom.ServiceWorkerLiveVersionRef": true, "storage.mojom.ServiceWorkerResourceReader": true, "storage.mojom.ServiceWorkerResourceWriter": true, "storage.mojom.ServiceWorkerResourceMetadataWriter": true, "storage.mojom.ServiceWorkerStorageControl": true, "storage.mojom.SessionStorageControl": true, "storage.mojom.StorageService": true, "unzip.mojom.UnzipFilter": true, "unzip.mojom.UnzipListener": true, "unzip.mojom.Unzipper": true, "site_engagement.mojom.SiteEngagementDetailsProvider": true, "spellcheck.mojom.SpellChecker": true, "spellcheck.mojom.SpellCheckInitializationHost": true, "spellcheck.mojom.SpellCheckHost": true, "spellcheck.mojom.SpellCheckPanel": true, "spellcheck.mojom.SpellCheckPanelHost": true, "subresource_filter.mojom.SubresourceFilterAgent": true, "subresource_filter.mojom.SubresourceFilterHost": true, "subresource_filter.mojom.SubresourceFilterRulesetObserver": true, "system_media_controls.mojom.SystemMediaControls": true, "system_media_controls.mojom.SystemMediaControlsObserver": true, "translate.mojom.TranslateAgent": true, "translate.mojom.ContentTranslateDriver": true, "unexportable_keys.mojom.UnexportableKeyService": true, "url_rewrite.mojom.UrlRequestRulesReceiver": true, "user_data_importer.mojom.BookmarkHtmlParser": true, "visitedlink.mojom.VisitedLinkNotificationSink": true, "viz.mojom.VizDebugOutput": true, "wallet.mojom.ImageExtractor": true, "web_cache.mojom.WebCache": true, "web_package.mojom.WebBundleParserFactory": true, "web_package.mojom.WebBundleParser": true, "web_package.mojom.BundleDataSource": true, "webapps.mojom.WebPageMetadataAgent": true, "chrome_urls.mojom.PageHandlerFactory": true, "chrome_urls.mojom.PageHandler": true, "chrome_urls.mojom.Page": true, "attribution_internals.mojom.Observer": true, "attribution_internals.mojom.Handler": true, "attribution_internals.mojom.Factory": true, "storage.mojom.IdbInternalsHandler": true, "private_aggregation_internals.mojom.Observer": true, "private_aggregation_internals.mojom.Handler": true, "private_aggregation_internals.mojom.Factory": true, "mojom.ProcessInternalsHandler": true, "traces_internals.mojom.TracesInternalsHandlerFactory": true, "traces_internals.mojom.PageHandler": true, "traces_internals.mojom.Page": true, "webxr.mojom.WebXrInternalsHandler": true, "webxr.mojom.XRInternalsSessionListener": true, "content.mojom.AgentSchedulingGroupHost": true, "content.mojom.AgentSchedulingGroup": true, "content.mojom.RouteProvider": true, "content.mojom.ChildProcessHost": true, "content.mojom.ChildProcess": true, "content.mojom.DomAutomationControllerHost": true, "content.mojom.MhtmlFileWriter": true, "content.mojom.FieldTrialRecorder": true, "content.mojom.FrameHTMLSerializerHandler": true, "content.mojom.Frame": true, "content.mojom.FrameBindingsControl": true, "content.mojom.NavigationRendererCancellationListener": true, "content.mojom.FrameHost": true, "content.mojom.GinJavaBridge": true, "content.mojom.GinJavaBridgeRemoteObject": true, "content.mojom.GinJavaBridgeHost": true, "content.mojom.InputInjector": true, "content.mojom.MediaInternalLogRecords": true, "content.mojom.MemoryConsumerTraitsTest": true, "content.mojom.ChildMemoryConsumer": true, "content.mojom.BrowserMemoryConsumerRegistry": true, "content.mojom.NavigationClient": true, "content.mojom.RenderMessageFilter": true, "remote_cocoa.mojom.PopupMenuRunner": true, "remote_cocoa.mojom.RenderWidgetHostNSView": true, "remote_cocoa.mojom.RenderWidgetHostNSViewHost": true, "content.mojom.Renderer": true, "content.mojom.RendererHost": true, "content.mojom.RendererVariationsConfiguration": true, "content.mojom.SandboxSupport": true, "content.mojom.SyntheticTrialConfiguration": true, "content.mojom.ThreadTypeSwitcher": true, "remote_cocoa.mojom.WebContentsNSView": true, "remote_cocoa.mojom.WebContentsNSViewHost": true, "content.mojom.WebUIHost": true, "content.mojom.WebUI": true, "content.mojom.FontCacheWin": true, "content.mojom.ResourceUsageReporter": true, "content.mojom.TestInterfaceForDefer": true, "content.mojom.TestInterfaceForGrant": true, "content.mojom.TestInterfaceForCancel": true, "content.mojom.TestInterfaceForUnexpected": true, "content.mojom.MojoContextProvider": true, "content.mojom.TestService": true, "auction_worklet.mojom.AuctionNetworkEventsHandler": true, "auction_worklet.mojom.AuctionSharedStorageHost": true, "auction_worklet.mojom.LoadSellerWorkletClient": true, "auction_worklet.mojom.AuctionWorkletService": true, "auction_worklet.mojom.GenerateBidClient": true, "auction_worklet.mojom.GenerateBidFinalizer": true, "auction_worklet.mojom.BidderWorklet": true, "auction_worklet.mojom.ScoreAdClient": true, "auction_worklet.mojom.SellerWorklet": true, "auction_worklet.mojom.TrustedSignalsCacheClient": true, "auction_worklet.mojom.TrustedSignalsCache": true, "content.mojom.MainFrameCounterTest": true, "content.mojom.PowerMonitorTest": true, "content.mojom.RenderFrameTestHelper": true, "content.mojom.FrameHostTestInterface": true, "content.mojom.FakeBluetoothChooser": true, "content.mojom.FakeBluetoothChooserFactory": true, "content.mojom.FakeBluetoothChooserClient": true, "content.mojom.MojoEcho": true, "content.optional_numerics_unittest.mojom.Params": true, "content.optional_numerics_unittest.mojom.ResponseParams": true, "content.optional_numerics_unittest.mojom.InterfaceV0": true, "content.optional_numerics_unittest.mojom.InterfaceV2": true, "content.mojom.WebTestRenderFrame": true, "content.mojom.WebTestControlHost": true, "content.mojom.NonAssociatedWebTestControlHost": true, "content.mojom.WebTestBluetoothFakeAdapterSetter": true, "bluetooth.mojom.Advertisement": true, "bluetooth.mojom.DiscoverySession": true, "bluetooth.mojom.Socket": true, "bluetooth.mojom.ServerSocket": true, "bluetooth.mojom.GattService": true, "bluetooth.mojom.GattServiceObserver": true, "bluetooth.mojom.Adapter": true, "bluetooth.mojom.AdapterObserver": true, "bluetooth.mojom.Device": true, "bluetooth.mojom.FakeBluetooth": true, "bluetooth.mojom.FakeCentral": true, "bluetooth.mojom.FakeCentralClient": true, "device.mojom.GamepadObserver": true, "device.mojom.GamepadMonitor": true, "device.mojom.GamepadHapticsManager": true, "device.mojom.XRSessionController": true, "device.mojom.XRRuntimeEventListener": true, "device.mojom.XRRuntime": true, "device.mojom.ImmersiveOverlay": true, "device.mojom.IsolatedXRRuntimeProviderClient": true, "device.mojom.IsolatedXRRuntimeProvider": true, "device.mojom.XRDeviceService": true, "device.mojom.XRDeviceServiceHost": true, "device_test.mojom.XRTestHook": true, "device_test.mojom.XRServiceTestHook": true, "device.mojom.VRService": true, "device.mojom.XRSessionMetricsRecorder": true, "device.mojom.VRServiceClient": true, "device.mojom.XREnvironmentIntegrationProvider": true, "device.mojom.XRFrameDataProvider": true, "device.mojom.XRPresentationProvider": true, "device.mojom.XRPresentationClient": true, "device.mojom.XRSessionClient": true, "device.mojom.XRLayerManager": true, "device.mojom.WebXrInternalsRendererListener": true, "extensions.mime_handler.MimeHandlerService": true, "extensions.mime_handler.BeforeUnloadControl": true, "extensions.mojom.AppWindow": true, "extensions.mojom.RendererAutomationRegistry": true, "extensions.mojom.EventDispatcher": true, "extensions.mojom.EventRouter": true, "extensions.mojom.LocalFrame": true, "extensions.mojom.LocalFrameHost": true, "extensions.mojom.GuestView": true, "extensions.mojom.MimeHandlerViewContainerManager": true, "extensions.KeepAlive": true, "extensions.mojom.MessagePort": true, "extensions.mojom.MessagePortHost": true, "extensions.mojom.Renderer": true, "extensions.mojom.RendererHost": true, "extensions.mojom.ServiceWorker": true, "extensions.mojom.ServiceWorkerHost": true, "mojom.WebEngineMediaResourceProvider": true, "gpu.mojom.GpuChannel": true, "gpu.mojom.CommandBuffer": true, "gpu.mojom.CommandBufferClient": true, "gpu.mojom.DCOMPTexture": true, "gpu.mojom.DCOMPTextureClient": true, "gpu.mojom.SharedImagePoolClientInterface": true, "ai.mojom.AIPrototypingService": true, "ai.mojom.EnhancedCalendarService": true, "ai.mojom.SmartTabGroupingService": true, "ai.mojom.TabOrganizationService": true, "ai.mojom.ZeroStateSuggestionsService": true, "web.mojom.WebUsageController": true, "IPC.mojom.Channel": true, "IPC.mojom.ChannelBootstrap": true, "media.mojom.ImageCapture": false, "media.mojom.VideoCaptureObserver": true, "media.mojom.VideoCaptureHost": true, "cros.mojom.Camera3CallbackOps": true, "cros.mojom.Camera3DeviceOps": true, "cros.mojom.CameraAppDeviceProvider": true, "cros.mojom.CameraAppDeviceBridge": true, "cros.mojom.CameraAppDevice": true, "cros.mojom.ResultMetadataObserver": true, "cros.mojom.CameraEventObserver": true, "cros.mojom.DocumentCornersObserver": true, "cros.mojom.CameraInfoObserver": true, "cros.mojom.StillCaptureResultObserver": true, "cros.mojom.CameraModuleCallbacks": true, "cros.mojom.VendorTagOps": true, "cros.mojom.CameraModule": true, "cros.mojom.CameraHalClient": true, "cros.mojom.KioskVisionObserver": true, "cros.mojom.CameraHalDispatcher": true, "cros.mojom.CrosCameraServiceObserver": true, "cros.mojom.CrosCameraService": true, "cros.mojom.CrosDocumentScanner": true, "cros.mojom.JpegAcceleratorProvider": true, "cros.mojom.CrosDisplayObserver": true, "cros.mojom.CrosLidObserver": true, "cros.mojom.CrosPowerObserver": true, "cros.mojom.CrosSystemEventMonitor": true, "cros.mojom.VideoCaptureDeviceInfoObserver": true, "cros.mojom.VideoCaptureDeviceInfoMonitor": true, "midi.mojom.MidiSessionClient": true, "midi.mojom.MidiSessionProvider": true, "midi.mojom.MidiSession": true, "media.mojom.AndroidOverlayProvider": true, "media.mojom.AndroidOverlay": true, "media.mojom.AndroidOverlayClient": true, "media.mojom.AudioDecoder": true, "media.mojom.AudioDecoderClient": true, "media.mojom.AudioEncoder": true, "media.mojom.AudioEncoderClient": true, "media.mojom.AudioInputStream": true, "media.mojom.AudioInputStreamClient": true, "media.mojom.AudioInputStreamObserver": true, "media.mojom.AudioLog": true, "media.mojom.AudioLogFactory": true, "media.mojom.AudioOutputStream": true, "media.mojom.AudioOutputStreamObserver": true, "media.mojom.AudioOutputStreamProvider": true, "media.mojom.AudioOutputStreamProviderClient": true, "media.mojom.DeviceSwitchInterface": true, "media.mojom.AudioProcessorControls": true, "media.mojom.LocalMuter": true, "media.mojom.AudioStreamFactory": true, "media.mojom.CastApplicationMediaInfoManager": true, "media.mojom.CdmContextEventCallback": true, "media.mojom.CdmContextForOOPVD": true, "media.mojom.CdmDocumentService": true, "media.mojom.CdmService": true, "media.mojom.CdmServiceBroker": true, "media.mojom.CdmStorage": true, "media.mojom.CdmFile": true, "media.mojom.ContentDecryptionModule": true, "media.mojom.ContentDecryptionModuleClient": true, "media.mojom.CdmFactory": true, "media.mojom.DCOMPSurfaceRegistry": true, "media.mojom.Decryptor": true, "media.mojom.FrameResourceReleaser": true, "media.mojom.DemuxerStream": true, "media.mojom.MuteStateObserver": true, "media.mojom.FrameInterfaceFactory": true, "media.mojom.FuchsiaMediaCdmProvider": true, "media.mojom.FuchsiaMediaCodecProvider": true, "media.mojom.VideoDecoderTracker": true, "media.mojom.InterfaceFactory": true, "media.mojom.KeySystemSupportObserver": true, "media.mojom.KeySystemSupport": true, "media.mojom.MediaDrmStorage": true, "media.mojom.MediaFoundationPreferences": true, "media.mojom.GpuInfoObserver": true, "media.mojom.MediaFoundationService": true, "media.mojom.MediaFoundationServiceBroker": true, "media.mojom.MediaLog": true, "media.mojom.MediaMetricsProvider": true, "media.mojom.MediaPlayer": true, "media.mojom.MediaPlayerObserverClient": true, "media.mojom.MediaPlayerObserver": true, "media.mojom.MediaPlayerHost": true, "media.mojom.MediaService": true, "media.mojom.MediaDrmSupport": true, "media.mojom.OutputProtection": true, "media.mojom.PlaybackEventsRecorder": true, "media.mojom.ProvisionFetcher": true, "media.mojom.RemoterFactory": true, "media.mojom.RemotingDataStreamSender": true, "media.mojom.Remoter": true, "media.mojom.RemotingSource": true, "media.mojom.Remotee": true, "media.mojom.RemotingSink": true, "media.mojom.RemotingDataStreamReceiver": true, "media.mojom.Renderer": true, "media.mojom.RendererClient": true, "media.mojom.FlingingRendererClientExtension": true, "media.mojom.MediaFoundationRendererExtension": true, "media.mojom.MediaFoundationRendererObserver": true, "media.mojom.MediaFoundationRendererNotifier": true, "media.mojom.SpeechRecognitionContext": true, "media.mojom.SpeechRecognitionRecognizer": true, "media.mojom.SpeechRecognitionRecognizerClient": true, "media.mojom.SpeechRecognitionBrowserObserver": true, "media.mojom.SpeechRecognitionSurface": true, "media.mojom.SpeechRecognitionSurfaceClient": true, "media.mojom.SpeechRecognitionClientBrowserInterface": true, "media.mojom.SpeechRecognitionAudioForwarder": true, "media.mojom.AudioSourceSpeechRecognitionContext": true, "media.mojom.SpeechRecognitionService": true, "media.mojom.AudioSourceFetcher": true, "media.mojom.SpeechRecognizer": true, "media.mojom.OnDeviceSpeechRecognition": true, "media.mojom.SpeechRecognitionSession": true, "media.mojom.SpeechRecognitionSessionClient": true, "media.mojom.VideoDecodePerfHistory": true, "media.mojom.VideoDecodeStatsRecorder": true, "media.mojom.VideoFrameHandleReleaser": true, "media.mojom.VideoDecoder": true, "media.mojom.VideoDecoderClient": true, "media.mojom.VideoDecoderFactoryProcess": true, "media.mojom.VideoEncodeAcceleratorProvider": true, "media.mojom.VideoEncodeAcceleratorProviderFactory": true, "media.mojom.VideoEncodeAccelerator": true, "media.mojom.VideoEncodeAcceleratorClient": true, "media.mojom.VideoEncoderMetricsProvider": true, "media.mojom.WatchTimeRecorder": true, "media.mojom.WebrtcVideoPerfRecorder": true, "media.mojom.WebrtcVideoPerfHistory": true, "mojo_base.mojom.Binder": true, "mojo_base.mojom.GenericAssociatedInterface": true, "fuzz.mojom.FuzzDummyInterface": true, "fuzz.mojom.FuzzInterface": true, "pdf.mojom.SaveDataBufferHandler": true, "pdf.mojom.PdfListener": true, "pdf.mojom.PdfHost": true, "remoting.mojom.ChromotingHostServices": true, "remoting.mojom.ChromotingSessionServices": true, "remoting.mojom.DesktopSessionRequestHandler": true, "remoting.mojom.DesktopSessionManager": true, "remoting.mojom.DesktopSessionAgent": true, "remoting.mojom.FileWriter": true, "remoting.mojom.FileReader": true, "remoting.mojom.DesktopSessionControl": true, "remoting.mojom.VideoCapturer": true, "remoting.mojom.VideoCapturerEventHandler": true, "remoting.mojom.DesktopSessionEventHandler": true, "remoting.mojom.DesktopSessionStateHandler": true, "remoting.mojom.WorkerProcessControl": true, "remoting.mojom.SecurityKeyForwarder": true, "remoting.mojom.SupportHostObserver": true, "remoting.mojom.RemoteUrlOpener": true, "remoting.mojom.RemotingHostControl": true, "remoting.mojom.DesktopSessionConnectionEvents": true, "remoting.mojom.HostStatusObserver": true, "remoting.mojom.WebAuthnRequestCanceller": true, "remoting.mojom.WebAuthnProxy": true, "sandbox.mac.mojom.TraitsTestService": true, "ax.android.mojom.AccessibilityHelperHost": true, "ax.android.mojom.AccessibilityHelperInstance": true, "ax.mojom.AssistiveTechnologyController": true, "ax.mojom.AccessibilityService": true, "ax.mojom.AccessibilityServiceClient": true, "ax.mojom.Autoclick": true, "ax.mojom.AutoclickClient": true, "ax.mojom.Automation": true, "ax.mojom.AutomationClient": true, "ax.mojom.AccessibilityFileLoader": true, "ax.mojom.SpeechRecognitionEventObserver": true, "ax.mojom.SpeechRecognition": true, "ax.mojom.TtsUtteranceClient": true, "ax.mojom.Tts": true, "ax.mojom.UserInput": true, "ax.mojom.UserInterface": true, "audio.mojom.AudioService": true, "audio.mojom.DebugRecordingFileProvider": true, "audio.mojom.DebugRecording": true, "audio.mojom.DeviceListener": true, "audio.mojom.DeviceNotifier": true, "audio.mojom.LogFactoryManager": true, "audio.mojom.MlModelManager": true, "audio.mojom.SystemInfo": true, "audio.mojom.TestingApi": true, "cert_verifier.mojom.CertVerifierServiceFactory": true, "data_decoder.mojom.CborParser": true, "data_decoder.mojom.DataDecoderService": true, "data_decoder.mojom.Gzipper": true, "data_decoder.mojom.ImageDecoder": true, "data_decoder.mojom.StructuredHeadersParser": true, "data_decoder.mojom.XmlParser": true, "device.mojom.BatteryMonitor": true, "device.mojom.DeviceService": true, "device.mojom.FingerprintObserver": true, "device.mojom.Fingerprint": true, "device.mojom.Geolocation": true, "device.mojom.GeolocationContext": true, "device.mojom.GeolocationControl": true, "device.mojom.GeolocationInternalsObserver": true, "device.mojom.GeolocationInternals": true, "device.mojom.HidManagerClient": true, "device.mojom.HidManager": true, "device.mojom.HidConnection": true, "device.mojom.HidConnectionClient": true, "device.mojom.HidConnectionWatcher": true, "device.mojom.InputDeviceManagerClient": true, "device.mojom.InputDeviceManager": true, "device.mojom.MtpManagerClient": true, "device.mojom.MtpManager": true, "device.mojom.NFC": true, "device.mojom.NFCClient": true, "device.mojom.NFCProvider": true, "device.mojom.PowerMonitor": true, "device.mojom.PowerMonitorClient": true, "device.mojom.PressureManager": true, "device.mojom.PressureClient": true, "device.mojom.PublicIpAddressGeolocationProvider": true, "device.mojom.ScreenOrientation": true, "device.mojom.ScreenOrientationListener": true, "device.mojom.Sensor": false, "device.mojom.SensorClient": false, "device.mojom.SensorProvider": false, "device.mojom.SerialPortManager": true, "device.mojom.SerialPortManagerClient": true, "device.mojom.SerialPort": true, "device.mojom.SerialPortClient": true, "device.mojom.SerialPortConnectionWatcher": true, "device.mojom.SmartCardTransaction": true, "device.mojom.SmartCardConnection": true, "device.mojom.SmartCardConnectionWatcher": true, "device.mojom.SmartCardContext": true, "device.mojom.SmartCardContextFactory": true, "device.mojom.TimeZoneMonitor": true, "device.mojom.TimeZoneMonitorClient": true, "device.mojom.UsbDevice": false, "device.mojom.UsbDeviceClient": false, "device.mojom.UsbDeviceManager": false, "device.mojom.UsbDeviceManagerClient": false, "device.mojom.UsbDeviceManagerTest": true, "device.mojom.VibrationManager": true, "device.mojom.VibrationManagerListener": true, "device.mojom.WakeLock": true, "device.mojom.WakeLockContext": true, "device.mojom.WakeLockProvider": true, "device.mojom.WakeLockObserver": true, "image_annotation.mojom.ImageProcessor": true, "image_annotation.mojom.Annotator": true, "image_annotation.mojom.ImageAnnotationService": true, "media_session.mojom.AudioFocusObserver": true, "media_session.mojom.AudioFocusRequestClient": true, "media_session.mojom.AudioFocusManager": true, "media_session.mojom.AudioFocusManagerDebug": true, "media_session.mojom.MediaControllerManager": true, "media_session.mojom.MediaController": true, "media_session.mojom.MediaControllerObserver": true, "media_session.mojom.MediaControllerImageObserver": true, "media_session.mojom.MediaSessionObserver": true, "media_session.mojom.MediaSession": true, "media_session.mojom.MediaSessionService": true, "ukm.mojom.SingularUkmInterface": true, "ukm.mojom.UkmRecorderClientInterface": true, "ukm.mojom.UkmRecorderInterface": true, "ukm.mojom.UkmRecorderFactory": true, "network.mojom.TraitsTestService": true, "network.mojom.AcceptCHFrameObserver": true, "network.mojom.CacheEncryptionProvider": true, "cert_verifier.mojom.URLLoaderFactoryConnector": true, "cert_verifier.mojom.CertVerifierService": true, "cert_verifier.mojom.CertVerifierServiceClient": true, "cert_verifier.mojom.CertVerifierRequest": true, "cert_verifier.mojom.CertVerifierServiceUpdater": true, "network.mojom.ChunkedDataPipeGetter": true, "network.mojom.ConnectionChangeObserverClient": true, "network.mojom.CookieAccessObserver": true, "network.mojom.CookieEncryptionProvider": true, "network.mojom.CookieChangeListener": true, "network.mojom.CookieManager": true, "network.mojom.CrossOriginEmbedderPolicyReporter": true, "network.mojom.CrossOriginOpenerPolicyReporter": true, "network.mojom.DataPipeGetter": true, "network.mojom.DeviceBoundSessionManager": true, "network.mojom.DeviceBoundSessionAccessObserver": true, "network.mojom.DeviceBoundSessionEventObserver": true, "network.mojom.DevToolsObserver": true, "network.mojom.DocumentIsolationPolicyReporter": true, "network.mojom.FirstPartySetsAccessDelegate": true, "network.mojom.ResolveHostHandle": true, "network.mojom.ResolveHostClient": true, "network.mojom.MdnsListenClient": true, "network.mojom.HostResolver": true, "network.mojom.DnsConfigChangeManagerClient": true, "network.mojom.DnsConfigChangeManager": true, "network.mojom.FileEnumerator": true, "network.mojom.HttpCacheBackendFileOperations": true, "network.mojom.HttpCacheBackendFileOperationsFactory": true, "network.mojom.MdnsResponder": true, "network.mojom.NetLogExporter": true, "network.mojom.NetLogProxySource": true, "network.mojom.NetLogProxySink": true, "network.mojom.NetworkAnnotationMonitor": true, "network.mojom.NetworkChangeManagerClient": true, "network.mojom.NetworkChangeManager": true, "network.mojom.CustomProxyConnectionObserver": true, "network.mojom.CustomProxyConfigClient": true, "network.mojom.TrustedHeaderClient": true, "network.mojom.TrustedURLLoaderHeaderClient": true, "network.mojom.PreloadedSharedDictionaryInfoHandle": true, "network.mojom.NetworkContext": true, "network.mojom.NetworkContextClient": true, "network.mojom.NetworkInterfaceChangeListener": true, "network.mojom.NetworkQualityEstimatorManagerClient": true, "network.mojom.NetworkQualityEstimatorManager": true, "network.mojom.NetworkService": true, "network.mojom.DurableMessageCollector": true, "network.mojom.SimpleCacheEntry": true, "network.mojom.SimpleCacheEntryEnumerator": true, "network.mojom.SimpleCache": true, "network.mojom.NetworkServiceTest": true, "network.mojom.ObliviousHttpClient": true, "network.mojom.P2PNetworkNotificationClient": true, "network.mojom.P2PSocketManager": true, "network.mojom.P2PSocket": true, "network.mojom.P2PSocketClient": true, "network.mojom.P2PTrustedSocketManagerClient": true, "network.mojom.P2PTrustedSocketManager": true, "network.mojom.ProxyConfigClient": true, "network.mojom.ProxyConfigPollerClient": true, "network.mojom.ProxyErrorClient": true, "network.mojom.ProxyLookupClient": true, "network.mojom.ProxyResolvingSocket": true, "network.mojom.ProxyResolvingSocketFactory": true, "network.mojom.ReportingApiObserver": true, "network.mojom.RestrictedCookieManager": true, "network.mojom.RestrictedUDPSocket": true, "network.mojom.SharedDictionaryAccessObserver": true, "network.mojom.SocketBroker": true, "network.mojom.SocketConnectionTracker": true, "network.mojom.SSLConfigClient": true, "network.mojom.SystemDnsResolver": true, "network.mojom.TCPBoundSocket": true, "network.mojom.TCPConnectedSocket": true, "network.mojom.SocketObserver": true, "network.mojom.TCPServerSocket": true, "network.mojom.TLSClientSocket": true, "network.mojom.TrustTokenAccessObserver": true, "network.mojom.TrustTokenQueryAnswerer": true, "network.mojom.UDPSocket": true, "network.mojom.UDPSocketListener": true, "network.mojom.URLLoader": true, "network.mojom.URLLoaderClient": true, "network.mojom.URLLoaderFactory": true, "network.mojom.ClientCertificateResponder": true, "network.mojom.SSLPrivateKey": true, "network.mojom.AuthChallengeResponder": true, "network.mojom.URLLoaderNetworkServiceObserver": true, "network.mojom.WebBundleHandle": true, "network.mojom.WebTransport": true, "network.mojom.WebTransportClient": true, "network.mojom.WebTransportHandshakeClient": true, "network.mojom.WebSocketAuthenticationHandler": true, "network.mojom.WebSocketHandshakeClient": true, "network.mojom.WebSocketClient": true, "network.mojom.WebSocket": true, "on_device_model.mojom.DownloadObserver": true, "on_device_model.mojom.StreamingResponder": true, "on_device_model.mojom.ContextClient": true, "on_device_model.mojom.Session": true, "on_device_model.mojom.OnDeviceModel": true, "on_device_model.mojom.TextSafetySession": true, "on_device_model.mojom.TextSafetyModel": true, "on_device_model.mojom.AsrStreamResponder": true, "on_device_model.mojom.AsrStreamInput": true, "on_device_model.mojom.PlatformModelProgressObserver": true, "on_device_model.mojom.OnDeviceModelService": true, "on_device_model.mojom.OnDeviceModelPlatformService": true, "passage_embeddings.mojom.PassageEmbedder": true, "passage_embeddings.mojom.PassageEmbeddingsService": true, "prefs.mojom.ResetOnLoadObserver": true, "prefs.mojom.TrackedPreferenceValidationDelegate": true, "proxy_resolver.mojom.HostResolverRequestClient": true, "proxy_resolver.mojom.ProxyResolver": true, "proxy_resolver.mojom.ProxyResolverRequestClient": true, "proxy_resolver.mojom.ProxyResolverFactory": true, "proxy_resolver.mojom.ProxyResolverFactoryRequestClient": true, "proxy_resolver.mojom.SystemProxyResolver": true, "memory_instrumentation.mojom.ClientProcess": true, "memory_instrumentation.mojom.HeapProfiler": true, "memory_instrumentation.mojom.HeapProfilerHelper": true, "memory_instrumentation.mojom.Coordinator": true, "memory_instrumentation.mojom.CoordinatorConnector": true, "screen_ai.mojom.ScreenAIServiceShutdownHandler": true, "screen_ai.mojom.ScreenAIServiceFactory": true, "screen_ai.mojom.ScreenAIAnnotator": true, "screen_ai.mojom.Screen2xMainContentExtractor": true, "screen_ai.mojom.OCRService": true, "screen_ai.mojom.MainContentExtractionService": true, "service_manager.mojom.ProcessMetadata": true, "service_manager.mojom.Connector": true, "service_manager.mojom.InterfaceProvider": true, "service_manager.mojom.Service": true, "service_manager.mojom.ServiceControl": true, "service_manager.mojom.ServiceManagerListener": true, "service_manager.mojom.ServiceManager": true, "shape_detection.mojom.BarcodeDetection": true, "shape_detection.mojom.BarcodeDetectionProvider": true, "shape_detection.mojom.FaceDetection": true, "shape_detection.mojom.FaceDetectionProvider": true, "shape_detection.mojom.ShapeDetectionService": true, "shape_detection.mojom.TextDetection": true, "echo.mojom.EchoService": true, "tracing.mojom.BackgroundTracingAgentClient": true, "tracing.mojom.BackgroundTracingAgent": true, "tracing.mojom.BackgroundTracingAgentProvider": true, "tracing.mojom.ProducerHost": true, "tracing.mojom.ProducerClient": true, "tracing.mojom.PerfettoService": true, "tracing.mojom.ConsumerHost": true, "tracing.mojom.TracingSessionHost": true, "tracing.mojom.TracingSessionClient": true, "tracing.mojom.SystemTracingService": true, "tracing.mojom.TracedProcess": true, "tracing.mojom.TracingService": true, "video_capture.mojom.Device": true, "video_capture.mojom.DevicesChangedObserver": true, "video_capture.mojom.Producer": true, "video_capture.mojom.TestingControls": true, "video_capture.mojom.VideoCaptureService": true, "video_capture.mojom.VideoFrameAccessHandler": true, "video_capture.mojom.VideoFrameHandler": true, "video_capture.mojom.PushVideoStreamSubscription": true, "video_capture.mojom.VideoSource": true, "video_capture.mojom.VideoSourceProvider": true, "video_capture.mojom.SharedMemoryVirtualDevice": true, "video_capture.mojom.TextureVirtualDevice": true, "video_capture.mojom.GpuMemoryBufferVirtualDevice": true, "viz.mojom.BeginFrameObserver": true, "viz.mojom.DisplayPrivate": true, "viz.mojom.DisplayClient": true, "viz.mojom.ExternalBeginFrameController": true, "viz.mojom.ExternalBeginFrameControllerClient": true, "viz.mojom.FrameSinkManager": true, "viz.mojom.FrameSinkManagerClient": true, "viz.mojom.RendererInputRouterDelegateRegistry": true, "viz.mojom.FrameSinkManagerTestApi": true, "viz.mojom.FrameSinkVideoConsumerFrameCallbacks": true, "viz.mojom.FrameSinkVideoConsumer": true, "viz.mojom.FrameSinkVideoCapturer": true, "viz.mojom.FrameSinkVideoCaptureOverlay": true, "viz.mojom.FrameSinksMetricsRecorder": true, "viz.mojom.LayeredWindowUpdater": true, "viz.mojom.VSyncParameterObserver": true, "viz.mojom.GpuHost": true, "viz.mojom.GpuLogging": true, "viz.mojom.GpuService": true, "viz.mojom.InfoCollectionGpuService": true, "viz.mojom.VizMain": true, "viz.mojom.CompositingModeWatcher": true, "viz.mojom.CompositingModeReporter": true, "viz.mojom.CompositorFrameSink": true, "viz.mojom.CompositorFrameSinkClient": true, "viz.mojom.CopyOutputResultSender": true, "viz.mojom.FrameSinkBundle": true, "viz.mojom.FrameSinkBundleClient": true, "viz.mojom.LayerContext": true, "viz.mojom.LayerContextClient": true, "viz.mojom.TextureReleaser": true, "viz.mojom.VideoDetectorObserver": true, "viz.mojom.Gpu": true, "viz.mojom.InputTargetClient": true, "webnn.mojom.WebNNContext": true, "webnn.mojom.WebNNContextProvider": true, "webnn.mojom.WebNNGraph": true, "webnn.mojom.WebNNGraphBuilder": true, "webnn.mojom.WebNNTensor": true, "storage.mojom.QuotaInternalsHandler": true, "storage.mojom.QuotaManagerObserver": true, "blink.mojom.AIManagerCreateLanguageModelClient": false, "blink.mojom.AILanguageModel": false, "blink.mojom.AIManagerCreateWriterClient": false, "blink.mojom.AIManagerCreateRewriterClient": false, "blink.mojom.AIManagerCreateSummarizerClient": false, "blink.mojom.AIManagerCreateProofreaderClient": false, "blink.mojom.AIManager": false, "blink.mojom.AIProofreader": false, "blink.mojom.AIRewriter": false, "blink.mojom.AISummarizer": false, "blink.mojom.AIWriter": false, "blink.mojom.ModelStreamingResponder": false, "blink.mojom.AndroidFontLookup": false, "blink.mojom.AnnotationAgent": false, "blink.mojom.AnnotationAgentHost": false, "blink.mojom.AnnotationAgentContainer": false, "blink.mojom.AppBannerController": false, "blink.mojom.AppBannerEvent": false, "blink.mojom.AppBannerService": false, "blink.mojom.AssociatedInterface": false, "blink.mojom.AssociatedInterfaceProvider": false, "blink.mojom.AutoplayConfigurationClient": false, "blink.mojom.BackgroundFetchRegistrationObserver": false, "blink.mojom.BackgroundFetchService": false, "blink.mojom.BackgroundFetchRegistrationService": false, "blink.mojom.OneShotBackgroundSyncService": false, "blink.mojom.PeriodicBackgroundSyncService": false, "blink.mojom.BadgeService": false, "blink.mojom.BlobReaderClient": false, "blink.mojom.Blob": false, "blink.mojom.ProgressClient": false, "blink.mojom.BlobRegistry": false, "blink.mojom.BlobURLStore": false, "blink.mojom.BlobURLToken": false, "blink.mojom.BytesProvider": false, "blink.mojom.FileBackedBlobFactory": false, "blink.mojom.WebBluetoothService": true, "blink.mojom.WebBluetoothServerClient": true, "blink.mojom.WebBluetoothCharacteristicClient": true, "blink.mojom.WebBluetoothAdvertisementClient": true, "blink.mojom.BroadcastChannelClient": true, "blink.mojom.BroadcastChannelProvider": true, "blink.mojom.BrowserInterfaceBroker": false, "blink.mojom.BrowsingTopicsDocumentService": false, "blink.mojom.BucketHost": true, "blink.mojom.BucketManagerHost": true, "blink.mojom.CacheStorageCache": false, "blink.mojom.CacheStorage": false, "blink.mojom.CallStackGenerator": false, "blink.mojom.ColorChooserFactory": false, "blink.mojom.ColorChooser": false, "blink.mojom.ColorChooserClient": false, "blink.mojom.EyeDropperChooser": false, "blink.mojom.DateTimeChooser": false, "blink.mojom.FileChooser": false, "blink.mojom.PopupMenuClient": false, "blink.mojom.ClipboardListener": false, "blink.mojom.ClipboardHost": false, "blink.mojom.CloseListener": false, "blink.mojom.WebPressureManager": false, "blink.mojom.WebPressureClient": false, "blink.mojom.ContactsManager": false, "blink.mojom.AIPageContentAgent": false, "blink.mojom.PaidContentMetadataObserver": false, "blink.mojom.MetaTagsObserver": false, "blink.mojom.FrameMetadataObserverRegistry": false, "blink.mojom.InnerHtmlAgent": false, "blink.mojom.InnerTextAgent": false, "blink.mojom.ContentIndexService": false, "blink.mojom.ContextMenuClient": false, "blink.mojom.AttributionHost": false, "blink.mojom.CookieStore": false, "blink.mojom.CrashMemoryMetricsReporter": false, "blink.mojom.CredentialManager": true, "blink.mojom.ManagedConfigurationObserver": false, "blink.mojom.DeviceAPIService": false, "blink.mojom.ManagedConfigurationService": false, "blink.mojom.DevicePostureProvider": false, "blink.mojom.DevicePostureClient": false, "blink.mojom.DevToolsAgent": false, "blink.mojom.DevToolsAgentHost": false, "blink.mojom.DevToolsSession": false, "blink.mojom.DevToolsSessionHost": false, "blink.mojom.DevToolsFrontend": false, "blink.mojom.DevToolsFrontendHost": false, "payments.mojom.DigitalGoods": false, "payments.mojom.DigitalGoodsFactory": false, "blink.mojom.DirectSocketsService": true, "blink.mojom.DiskAllocator": false, "blink.mojom.DocumentMetadata": false, "blink.mojom.DomStorageProvider": false, "blink.mojom.DomStorage": false, "blink.mojom.DomStorageClient": false, "blink.mojom.SessionStorageNamespace": false, "blink.mojom.StorageAreaObserver": false, "blink.mojom.StorageArea": false, "blink.mojom.DWriteFontProxy": true, "payments.facilitated.mojom.PaymentLinkHandler": false, "blink.mojom.ObservedFeature": false, "blink.mojom.FeatureObserver": false, "blink.mojom.FencedFrameOwnerHost": true, "blink.mojom.FileUtilitiesHost": false, "blink.mojom.FileSystemAccessAccessHandleHost": false, "blink.mojom.FileSystemAccessDataTransferToken": false, "blink.mojom.FileSystemAccessDirectoryEntriesListener": false, "blink.mojom.FileSystemAccessDirectoryHandle": false, "blink.mojom.FileSystemAccessFileDelegateHost": false, "blink.mojom.FileSystemAccessFileHandle": false, "blink.mojom.FileSystemAccessFileModificationHost": false, "blink.mojom.FileSystemAccessFileWriter": false, "blink.mojom.FileSystemAccessManager": false, "blink.mojom.FileSystemAccessObserver": false, "blink.mojom.FileSystemAccessObserverHost": false, "blink.mojom.FileSystemAccessTransferToken": false, "blink.mojom.FileSystemCancellableOperation": false, "blink.mojom.FileSystemOperationListener": false, "blink.mojom.ReceivedSnapshotListener": false, "blink.mojom.FileSystemManager": false, "blink.mojom.FontAccessManager": false, "blink.mojom.FontUniqueNameLookup": false, "blink.mojom.BackForwardCacheControllerHost": true, "blink.mojom.FindInPage": true, "blink.mojom.FindInPageClient": true, "blink.mojom.LocalFrameHost": true, "blink.mojom.NonAssociatedLocalFrameHost": true, "blink.mojom.LocalFrame": true, "blink.mojom.LocalMainFrame": true, "blink.mojom.LocalMainFrameHost": true, "blink.mojom.PolicyContainerHost": true, "blink.mojom.NavigationStateKeepAliveHandle": true, "blink.mojom.RemoteFrameHost": true, "blink.mojom.RemoteFrame": true, "blink.mojom.RemoteMainFrame": true, "blink.mojom.RemoteMainFrameHost": true, "blink.mojom.ReportingObserver": true, "blink.mojom.SurfaceEmbedder": true, "blink.mojom.EmbeddedFrameSinkClient": true, "blink.mojom.EmbeddedFrameSinkProvider": true, "blink.mojom.GeolocationService": false, "blink.mojom.GpuDataManager": true, "handwriting.mojom.HandwritingRecognizer": false, "handwriting.mojom.HandwritingRecognitionService": false, "blink.mojom.HidService": false, "blink.mojom.Hyphenation": false, "blink.mojom.IdleMonitor": false, "blink.mojom.IdleManager": false, "blink.mojom.ImageDownloader": false, "blink.mojom.IDBFactoryClient": true, "blink.mojom.IDBDatabaseCallbacks": true, "blink.mojom.IDBCursor": true, "blink.mojom.IDBTransaction": true, "blink.mojom.IDBDatabaseGetAllResultSink": true, "blink.mojom.IDBDatabase": true, "blink.mojom.IDBFactory": true, "blink.mojom.ImeRenderWidgetHost": false, "blink.mojom.WidgetInputHandlerHost": false, "blink.mojom.FrameWidgetInputHandler": false, "blink.mojom.WidgetInputHandler": false, "blink.mojom.TextSuggestionHost": false, "blink.mojom.TextSuggestionBackend": false, "blink.mojom.PointerLockContext": false, "blink.mojom.SynchronousCompositor": true, "blink.mojom.SynchronousCompositorHost": true, "blink.mojom.SynchronousCompositorControlHost": true, "blink.mojom.TextInputHost": true, "blink.mojom.InstallationService": false, "blink.mojom.InstalledAppProvider": false, "blink.mojom.AbortableAdAuction": false, "blink.mojom.AdAuctionService": false, "blink.mojom.KeyboardLockService": false, "blink.mojom.LCPCriticalPathPredictorHost": false, "blink.mojom.LeakDetector": false, "blink.mojom.TextFragmentReceiver": false, "blink.mojom.CodeCacheHost": false, "blink.mojom.ContentSecurityNotifier": false, "blink.mojom.FetchLaterLoaderFactory": false, "blink.mojom.FetchLaterLoader": false, "blink.mojom.KeepAliveHandle": false, "blink.mojom.KeepAliveHandleFactory": false, "blink.mojom.AnchorElementMetricsHost": false, "blink.mojom.PauseSubresourceLoadingHandle": false, "blink.mojom.ResourceLoadInfoNotifier": false, "blink.mojom.LockScreenService": false, "blink.mojom.LockHandle": false, "blink.mojom.LockRequest": false, "blink.mojom.LockManager": false, "blink.mojom.ManifestManager": false, "blink.mojom.ManifestUrlChangeObserver": false, "blink.mojom.FullscreenVideoElementHandler": false, "blink.mojom.RendererAudioInputStreamFactory": false, "blink.mojom.RendererAudioInputStreamFactoryClient": false, "blink.mojom.RendererAudioOutputStreamFactory": false, "blink.mojom.MediaSessionClient": false, "blink.mojom.MediaSessionService": false, "blink.mojom.AecDumpAgent": false, "blink.mojom.AecDumpManager": false, "blink.mojom.MediaDevicesDispatcherHost": false, "blink.mojom.MediaDevicesListener": false, "blink.mojom.MediaStreamDeviceObserver": false, "blink.mojom.MediaStreamDispatcherHost": false, "blink.mojom.MediaStreamTrackMetricsHost": false, "blink.mojom.MemoryUsageMonitorLinux": true, "blink.mojom.ImageReleaseCallback": true, "blink.mojom.MimeRegistry": false, "blink.mojom.NavigationResumeDeferredCommitListener": true, "blink.mojom.NonPersistentNotificationListener": false, "blink.mojom.NotificationService": false, "blink.mojom.TranslationManagerCreateTranslatorClient": false, "blink.mojom.TranslationManager": false, "blink.mojom.Translator": false, "blink.mojom.OomInterventionHost": false, "blink.mojom.OomIntervention": false, "blink.mojom.OriginTrialStateHost": true, "blink.mojom.DisplayCutoutHost": true, "blink.mojom.DisplayCutoutClient": true, "blink.mojom.PageBroadcast": true, "blink.mojom.FrameWidget": true, "blink.mojom.FrameWidgetHost": true, "blink.mojom.PopupWidgetHost": true, "payments.mojom.PaymentManager": false, "payments.mojom.PaymentHandlerResponseCallback": false, "payments.mojom.PaymentHandlerHost": false, "payments.mojom.PaymentRequestClient": false, "payments.mojom.PaymentRequest": false, "payments.mojom.SecurePaymentConfirmationService": false, "blink.mojom.PeerConnectionManager": false, "blink.mojom.PeerConnectionTrackerHost": false, "blink.mojom.V8DetailedMemoryReporter": false, "blink.mojom.PermissionObserver": false, "blink.mojom.EmbeddedPermissionControlClient": false, "blink.mojom.PermissionService": false, "blink.mojom.PersistentRendererPrefsService": false, "blink.mojom.PictureInPictureSessionObserver": false, "blink.mojom.PictureInPictureSession": false, "blink.mojom.PictureInPictureService": false, "blink.mojom.PluginRegistry": false, "blink.mojom.AnchorElementInteractionHost": false, "blink.mojom.NoStatePrefetchProcessor": false, "blink.mojom.PresentationConnection": false, "blink.mojom.PresentationService": false, "blink.mojom.PresentationController": false, "blink.mojom.PresentationReceiver": false, "blink.mojom.WebPrintJobStateObserver": true, "blink.mojom.WebPrintJobController": true, "blink.mojom.WebPrinter": true, "blink.mojom.WebPrintingService": true, "blink.mojom.PrivateAggregationHost": false, "blink.mojom.PushMessaging": false, "blink.mojom.QuotaManagerHost": false, "blink.mojom.RemoteObjectHost": true, "blink.mojom.RemoteObject": true, "blink.mojom.RemoteObjectGatewayFactory": true, "blink.mojom.RemoteObjectGateway": true, "blink.mojom.RenderAccessibilityHost": false, "blink.mojom.RenderAccessibility": false, "blink.mojom.RendererPreferenceWatcher": false, "blink.mojom.ReportingServiceProxy": false, "blink.mojom.WebSensorProvider": false, "blink.mojom.SerialService": false, "blink.mojom.SerialServiceClient": false, "blink.mojom.ControllerServiceWorker": true, "blink.mojom.ControllerServiceWorkerConnector": true, "blink.mojom.EmbeddedWorkerInstanceClient": true, "blink.mojom.EmbeddedWorkerInstanceHost": true, "blink.mojom.ServiceWorkerHost": true, "blink.mojom.ServiceWorker": true, "blink.mojom.ServiceWorkerContainerHost": true, "blink.mojom.ServiceWorkerContainer": true, "blink.mojom.ServiceWorkerFetchResponseCallback": false, "blink.mojom.ServiceWorkerInstalledScriptsManagerHost": false, "blink.mojom.ServiceWorkerInstalledScriptsManager": false, "blink.mojom.ServiceWorkerObjectHost": true, "blink.mojom.ServiceWorkerObject": true, "blink.mojom.ServiceWorkerRegistrationObjectHost": true, "blink.mojom.ServiceWorkerRegistrationObject": true, "blink.mojom.ServiceWorkerRunningStatusCallback": false, "blink.mojom.ServiceWorkerStreamCallback": false, "blink.mojom.ServiceWorkerWorkerClient": false, "blink.mojom.ServiceWorkerWorkerClientRegistry": false, "blink.mojom.SharedStorageWorkletHost": true, "blink.mojom.SharedStorageDocumentService": true, "blink.mojom.SharedStorageEntriesListener": true, "blink.mojom.SharedStorageWorkletServiceClient": true, "blink.mojom.SharedStorageWorkletService": true, "blink.mojom.SmartCardService": false, "blink.mojom.WebOTPService": false, "blink.mojom.SpeculationHost": false, "blink.mojom.SpeechSynthesisVoiceListObserver": false, "blink.mojom.SpeechSynthesisClient": false, "blink.mojom.SpeechSynthesis": false, "blink.mojom.StorageAccessHandle": true, "blink.mojom.SubAppsService": false, "blink.mojom.UnhandledTapNotifier": true, "blink.mojom.WebUsbService": false, "blink.mojom.WakeLockService": false, "blink.mojom.WebInstallService": false, "blink.mojom.WebLaunchService": false, "blink.mojom.AudioContextManager": false, "blink.mojom.Authenticator": true, "blink.mojom.DigitalIdentityRequest": false, "blink.mojom.FederatedAuthRequest": false, "blink.mojom.ShareService": false, "blink.mojom.WebSocketConnector": false, "blink.mojom.WebTransportConnector": false, "blink.mojom.WebViewMediaIntegrityService": true, "blink.mojom.WebViewMediaIntegrityProvider": true, "blink.mojom.WidgetCompositor": false, "blink.mojom.WidgetHost": false, "blink.mojom.Widget": false, "blink.mojom.RenderInputRouterClient": false, "blink.mojom.DedicatedWorkerHost": false, "blink.mojom.DedicatedWorkerHostFactoryClient": true, "blink.mojom.DedicatedWorkerHostFactory": true, "blink.mojom.SharedWorker": true, "blink.mojom.SharedWorkerClient": false, "blink.mojom.SharedWorkerConnector": true, "blink.mojom.SharedWorkerFactory": true, "blink.mojom.SharedWorkerHost": false, "blink.mojom.SubresourceLoaderUpdater": false, "blink.mojom.WorkerContentSettingsProxy": false, "blink.mojom.WorkletDevToolsHost": false, "ui.mojom.IMEStructTraitsTest": true, "gfx.mojom.ImageTraitsTestService": true, "gfx.mojom.DelegatedInkPointRenderer": true, "gfx.mojom.TraitsTestService": true, "gfx.mojom.RangeTraitsTestService": true, "gl.mojom.TraitsTestService": true, "ui.ozone.mojom.DeviceCursor": true, "ui.ozone.mojom.DrmDevice": true, "ui.mojom.ScenicGpuHost": true, "ui.mojom.ScenicGpuService": true, "ui.ozone.mojom.WaylandBufferManagerHost": true, "ui.ozone.mojom.WaylandBufferManagerGpu": true, "wl.mojom.ConfigTraitsTestService": true, "ui.ozone.mojom.GesturePropertiesService": true, "webui_examples.mojom.PageHandlerFactory": true, "webui_examples.mojom.PageHandler": true, "app_management.mojom.PageHandlerFactory": true, "app_management.mojom.PageHandler": true, "app_management.mojom.Page": true, "color_change_listener.mojom.PageHandler": true, "color_change_listener.mojom.Page": true, "composebox.mojom.PageHandlerFactory": true, "composebox.mojom.PageHandler": true, "composebox.mojom.Page": true, "customize_color_scheme_mode.mojom.CustomizeColorSchemeModeHandlerFactory": true, "customize_color_scheme_mode.mojom.CustomizeColorSchemeModeHandler": true, "customize_color_scheme_mode.mojom.CustomizeColorSchemeModeClient": true, "custom_help_bubble.mojom.CustomHelpBubbleHandlerFactory": true, "custom_help_bubble.mojom.CustomHelpBubbleHandler": true, "help_bubble.mojom.HelpBubbleHandlerFactory": true, "help_bubble.mojom.PdfHelpBubbleHandlerFactory": true, "help_bubble.mojom.HelpBubbleHandler": true, "help_bubble.mojom.HelpBubbleClient": true, "history.mojom.PageHandler": true, "history.mojom.Page": true, "history_clusters.mojom.PageHandler": true, "history_clusters.mojom.Page": true, "history_embeddings.mojom.PageHandler": true, "history_embeddings.mojom.Page": true, "most_visited.mojom.MostVisitedPageHandlerFactory": true, "most_visited.mojom.MostVisitedPageHandler": true, "most_visited.mojom.MostVisitedPage": true, "theme_color_picker.mojom.ThemeColorPickerHandlerFactory": true, "theme_color_picker.mojom.ThemeColorPickerHandler": true, "theme_color_picker.mojom.ThemeColorPickerClient": true, "batch_upload_promo.mojom.PageHandlerFactory": true, "batch_upload_promo.mojom.PageHandler": true, "batch_upload_promo.mojom.Page": true, "browser_command.mojom.CommandHandlerFactory": true, "browser_command.mojom.CommandHandler": true, "metrics_reporter.mojom.PageMetricsHost": true, "metrics_reporter.mojom.PageMetrics": true, "tracked_element.mojom.TrackedElementHandler": true, "url.mojom.UrlTest": true},
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
        const versionStr = window.mojoVersion || '146.0.7658.0';
        
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

 mojo.internal.bindings.arc = mojo.internal.bindings.arc || {};
mojo.internal.bindings.arc.mojom = mojo.internal.bindings.arc.mojom || {};
mojo.internal.bindings.mojo_base = mojo.internal.bindings.mojo_base || {};
mojo.internal.bindings.mojo_base.mojom = mojo.internal.bindings.mojo_base.mojom || {};
mojo.internal.bindings.ax = mojo.internal.bindings.ax || {};
mojo.internal.bindings.chromeos = mojo.internal.bindings.chromeos || {};

mojo.internal.bindings.arc.mojom.ArcBridgeHost = mojo.internal.bindings.arc.mojom.ArcBridgeHost || {};
mojo.internal.bindings.arc.mojom.ArcBridgeHostSpec = mojo.internal.bindings.arc.mojom.ArcBridgeHostSpec || { $ : {} };
if (mojo.internal.bindings.arc.mojom.ArcBridgeHostSpec.$.structSpec && mojo.internal.bindings.arc.mojom.ArcBridgeHostSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.arc.mojom.ArcBridgeHostSpec.$ = {};
mojo.internal.bindings.arc.mojom.ArcBridgeHost.$interfaceName = 'arc.mojom.ArcBridgeHost';
mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnAccessibilityHelperInstanceReady_ParamsSpec = mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnAccessibilityHelperInstanceReady_ParamsSpec || { $: {} };
if (mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnAccessibilityHelperInstanceReady_ParamsSpec.$.structSpec && mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnAccessibilityHelperInstanceReady_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnAccessibilityHelperInstanceReady_ParamsSpec.$ = {};
mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnAdbdMonitorInstanceReady_ParamsSpec = mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnAdbdMonitorInstanceReady_ParamsSpec || { $: {} };
if (mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnAdbdMonitorInstanceReady_ParamsSpec.$.structSpec && mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnAdbdMonitorInstanceReady_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnAdbdMonitorInstanceReady_ParamsSpec.$ = {};
mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnAppInstanceReady_ParamsSpec = mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnAppInstanceReady_ParamsSpec || { $: {} };
if (mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnAppInstanceReady_ParamsSpec.$.structSpec && mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnAppInstanceReady_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnAppInstanceReady_ParamsSpec.$ = {};
mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnAppPermissionsInstanceReady_ParamsSpec = mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnAppPermissionsInstanceReady_ParamsSpec || { $: {} };
if (mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnAppPermissionsInstanceReady_ParamsSpec.$.structSpec && mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnAppPermissionsInstanceReady_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnAppPermissionsInstanceReady_ParamsSpec.$ = {};
mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnAppfuseInstanceReady_ParamsSpec = mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnAppfuseInstanceReady_ParamsSpec || { $: {} };
if (mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnAppfuseInstanceReady_ParamsSpec.$.structSpec && mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnAppfuseInstanceReady_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnAppfuseInstanceReady_ParamsSpec.$ = {};
mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnArcShellExecutionInstanceReady_ParamsSpec = mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnArcShellExecutionInstanceReady_ParamsSpec || { $: {} };
if (mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnArcShellExecutionInstanceReady_ParamsSpec.$.structSpec && mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnArcShellExecutionInstanceReady_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnArcShellExecutionInstanceReady_ParamsSpec.$ = {};
mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnArcWifiInstanceReady_ParamsSpec = mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnArcWifiInstanceReady_ParamsSpec || { $: {} };
if (mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnArcWifiInstanceReady_ParamsSpec.$.structSpec && mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnArcWifiInstanceReady_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnArcWifiInstanceReady_ParamsSpec.$ = {};
mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnAudioInstanceReady_ParamsSpec = mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnAudioInstanceReady_ParamsSpec || { $: {} };
if (mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnAudioInstanceReady_ParamsSpec.$.structSpec && mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnAudioInstanceReady_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnAudioInstanceReady_ParamsSpec.$ = {};
mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnAuthInstanceReady_ParamsSpec = mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnAuthInstanceReady_ParamsSpec || { $: {} };
if (mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnAuthInstanceReady_ParamsSpec.$.structSpec && mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnAuthInstanceReady_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnAuthInstanceReady_ParamsSpec.$ = {};
mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnBackupSettingsInstanceReady_ParamsSpec = mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnBackupSettingsInstanceReady_ParamsSpec || { $: {} };
if (mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnBackupSettingsInstanceReady_ParamsSpec.$.structSpec && mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnBackupSettingsInstanceReady_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnBackupSettingsInstanceReady_ParamsSpec.$ = {};
mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnBluetoothInstanceReady_ParamsSpec = mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnBluetoothInstanceReady_ParamsSpec || { $: {} };
if (mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnBluetoothInstanceReady_ParamsSpec.$.structSpec && mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnBluetoothInstanceReady_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnBluetoothInstanceReady_ParamsSpec.$ = {};
mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnBootPhaseMonitorInstanceReady_ParamsSpec = mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnBootPhaseMonitorInstanceReady_ParamsSpec || { $: {} };
if (mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnBootPhaseMonitorInstanceReady_ParamsSpec.$.structSpec && mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnBootPhaseMonitorInstanceReady_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnBootPhaseMonitorInstanceReady_ParamsSpec.$ = {};
mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnCameraInstanceReady_ParamsSpec = mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnCameraInstanceReady_ParamsSpec || { $: {} };
if (mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnCameraInstanceReady_ParamsSpec.$.structSpec && mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnCameraInstanceReady_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnCameraInstanceReady_ParamsSpec.$ = {};
mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnChromeFeatureFlagsInstanceReady_ParamsSpec = mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnChromeFeatureFlagsInstanceReady_ParamsSpec || { $: {} };
if (mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnChromeFeatureFlagsInstanceReady_ParamsSpec.$.structSpec && mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnChromeFeatureFlagsInstanceReady_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnChromeFeatureFlagsInstanceReady_ParamsSpec.$ = {};
mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnCompatibilityModeInstanceReady_ParamsSpec = mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnCompatibilityModeInstanceReady_ParamsSpec || { $: {} };
if (mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnCompatibilityModeInstanceReady_ParamsSpec.$.structSpec && mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnCompatibilityModeInstanceReady_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnCompatibilityModeInstanceReady_ParamsSpec.$ = {};
mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnCrashCollectorInstanceReady_ParamsSpec = mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnCrashCollectorInstanceReady_ParamsSpec || { $: {} };
if (mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnCrashCollectorInstanceReady_ParamsSpec.$.structSpec && mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnCrashCollectorInstanceReady_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnCrashCollectorInstanceReady_ParamsSpec.$ = {};
mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnOnDeviceSafetyInstanceReady_ParamsSpec = mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnOnDeviceSafetyInstanceReady_ParamsSpec || { $: {} };
if (mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnOnDeviceSafetyInstanceReady_ParamsSpec.$.structSpec && mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnOnDeviceSafetyInstanceReady_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnOnDeviceSafetyInstanceReady_ParamsSpec.$ = {};
mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnDigitalGoodsInstanceReady_ParamsSpec = mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnDigitalGoodsInstanceReady_ParamsSpec || { $: {} };
if (mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnDigitalGoodsInstanceReady_ParamsSpec.$.structSpec && mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnDigitalGoodsInstanceReady_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnDigitalGoodsInstanceReady_ParamsSpec.$ = {};
mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnDiskSpaceInstanceReady_ParamsSpec = mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnDiskSpaceInstanceReady_ParamsSpec || { $: {} };
if (mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnDiskSpaceInstanceReady_ParamsSpec.$.structSpec && mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnDiskSpaceInstanceReady_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnDiskSpaceInstanceReady_ParamsSpec.$ = {};
mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnEnterpriseReportingInstanceReady_ParamsSpec = mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnEnterpriseReportingInstanceReady_ParamsSpec || { $: {} };
if (mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnEnterpriseReportingInstanceReady_ParamsSpec.$.structSpec && mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnEnterpriseReportingInstanceReady_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnEnterpriseReportingInstanceReady_ParamsSpec.$ = {};
mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnErrorNotificationInstanceReady_ParamsSpec = mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnErrorNotificationInstanceReady_ParamsSpec || { $: {} };
if (mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnErrorNotificationInstanceReady_ParamsSpec.$.structSpec && mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnErrorNotificationInstanceReady_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnErrorNotificationInstanceReady_ParamsSpec.$ = {};
mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnFileSystemInstanceReady_ParamsSpec = mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnFileSystemInstanceReady_ParamsSpec || { $: {} };
if (mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnFileSystemInstanceReady_ParamsSpec.$.structSpec && mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnFileSystemInstanceReady_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnFileSystemInstanceReady_ParamsSpec.$ = {};
mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnIioSensorInstanceReady_ParamsSpec = mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnIioSensorInstanceReady_ParamsSpec || { $: {} };
if (mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnIioSensorInstanceReady_ParamsSpec.$.structSpec && mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnIioSensorInstanceReady_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnIioSensorInstanceReady_ParamsSpec.$ = {};
mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnImeInstanceReady_ParamsSpec = mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnImeInstanceReady_ParamsSpec || { $: {} };
if (mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnImeInstanceReady_ParamsSpec.$.structSpec && mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnImeInstanceReady_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnImeInstanceReady_ParamsSpec.$ = {};
mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnInputMethodManagerInstanceReady_ParamsSpec = mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnInputMethodManagerInstanceReady_ParamsSpec || { $: {} };
if (mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnInputMethodManagerInstanceReady_ParamsSpec.$.structSpec && mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnInputMethodManagerInstanceReady_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnInputMethodManagerInstanceReady_ParamsSpec.$ = {};
mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnIntentHelperInstanceReady_ParamsSpec = mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnIntentHelperInstanceReady_ParamsSpec || { $: {} };
if (mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnIntentHelperInstanceReady_ParamsSpec.$.structSpec && mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnIntentHelperInstanceReady_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnIntentHelperInstanceReady_ParamsSpec.$ = {};
mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnKeymasterInstanceReady_ParamsSpec = mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnKeymasterInstanceReady_ParamsSpec || { $: {} };
if (mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnKeymasterInstanceReady_ParamsSpec.$.structSpec && mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnKeymasterInstanceReady_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnKeymasterInstanceReady_ParamsSpec.$ = {};
mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnKeyMintInstanceReady_ParamsSpec = mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnKeyMintInstanceReady_ParamsSpec || { $: {} };
if (mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnKeyMintInstanceReady_ParamsSpec.$.structSpec && mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnKeyMintInstanceReady_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnKeyMintInstanceReady_ParamsSpec.$ = {};
mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnKioskInstanceReady_ParamsSpec = mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnKioskInstanceReady_ParamsSpec || { $: {} };
if (mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnKioskInstanceReady_ParamsSpec.$.structSpec && mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnKioskInstanceReady_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnKioskInstanceReady_ParamsSpec.$ = {};
mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnMediaSessionInstanceReady_ParamsSpec = mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnMediaSessionInstanceReady_ParamsSpec || { $: {} };
if (mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnMediaSessionInstanceReady_ParamsSpec.$.structSpec && mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnMediaSessionInstanceReady_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnMediaSessionInstanceReady_ParamsSpec.$ = {};
mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnMemoryInstanceReady_ParamsSpec = mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnMemoryInstanceReady_ParamsSpec || { $: {} };
if (mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnMemoryInstanceReady_ParamsSpec.$.structSpec && mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnMemoryInstanceReady_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnMemoryInstanceReady_ParamsSpec.$ = {};
mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnMetricsInstanceReady_ParamsSpec = mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnMetricsInstanceReady_ParamsSpec || { $: {} };
if (mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnMetricsInstanceReady_ParamsSpec.$.structSpec && mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnMetricsInstanceReady_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnMetricsInstanceReady_ParamsSpec.$ = {};
mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnMidisInstanceReady_ParamsSpec = mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnMidisInstanceReady_ParamsSpec || { $: {} };
if (mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnMidisInstanceReady_ParamsSpec.$.structSpec && mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnMidisInstanceReady_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnMidisInstanceReady_ParamsSpec.$ = {};
mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnNearbyShareInstanceReady_ParamsSpec = mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnNearbyShareInstanceReady_ParamsSpec || { $: {} };
if (mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnNearbyShareInstanceReady_ParamsSpec.$.structSpec && mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnNearbyShareInstanceReady_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnNearbyShareInstanceReady_ParamsSpec.$ = {};
mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnNetInstanceReady_ParamsSpec = mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnNetInstanceReady_ParamsSpec || { $: {} };
if (mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnNetInstanceReady_ParamsSpec.$.structSpec && mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnNetInstanceReady_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnNetInstanceReady_ParamsSpec.$ = {};
mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnNotificationsInstanceReady_ParamsSpec = mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnNotificationsInstanceReady_ParamsSpec || { $: {} };
if (mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnNotificationsInstanceReady_ParamsSpec.$.structSpec && mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnNotificationsInstanceReady_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnNotificationsInstanceReady_ParamsSpec.$ = {};
mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnObbMounterInstanceReady_ParamsSpec = mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnObbMounterInstanceReady_ParamsSpec || { $: {} };
if (mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnObbMounterInstanceReady_ParamsSpec.$.structSpec && mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnObbMounterInstanceReady_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnObbMounterInstanceReady_ParamsSpec.$ = {};
mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnOemCryptoInstanceReady_ParamsSpec = mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnOemCryptoInstanceReady_ParamsSpec || { $: {} };
if (mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnOemCryptoInstanceReady_ParamsSpec.$.structSpec && mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnOemCryptoInstanceReady_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnOemCryptoInstanceReady_ParamsSpec.$ = {};
mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnPaymentAppInstanceReady_ParamsSpec = mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnPaymentAppInstanceReady_ParamsSpec || { $: {} };
if (mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnPaymentAppInstanceReady_ParamsSpec.$.structSpec && mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnPaymentAppInstanceReady_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnPaymentAppInstanceReady_ParamsSpec.$ = {};
mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnPipInstanceReady_ParamsSpec = mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnPipInstanceReady_ParamsSpec || { $: {} };
if (mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnPipInstanceReady_ParamsSpec.$.structSpec && mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnPipInstanceReady_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnPipInstanceReady_ParamsSpec.$ = {};
mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnPolicyInstanceReady_ParamsSpec = mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnPolicyInstanceReady_ParamsSpec || { $: {} };
if (mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnPolicyInstanceReady_ParamsSpec.$.structSpec && mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnPolicyInstanceReady_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnPolicyInstanceReady_ParamsSpec.$ = {};
mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnPowerInstanceReady_ParamsSpec = mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnPowerInstanceReady_ParamsSpec || { $: {} };
if (mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnPowerInstanceReady_ParamsSpec.$.structSpec && mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnPowerInstanceReady_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnPowerInstanceReady_ParamsSpec.$ = {};
mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnPrintSpoolerInstanceReady_ParamsSpec = mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnPrintSpoolerInstanceReady_ParamsSpec || { $: {} };
if (mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnPrintSpoolerInstanceReady_ParamsSpec.$.structSpec && mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnPrintSpoolerInstanceReady_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnPrintSpoolerInstanceReady_ParamsSpec.$ = {};
mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnPrivacyItemsInstanceReady_ParamsSpec = mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnPrivacyItemsInstanceReady_ParamsSpec || { $: {} };
if (mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnPrivacyItemsInstanceReady_ParamsSpec.$.structSpec && mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnPrivacyItemsInstanceReady_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnPrivacyItemsInstanceReady_ParamsSpec.$ = {};
mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnProcessInstanceReady_ParamsSpec = mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnProcessInstanceReady_ParamsSpec || { $: {} };
if (mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnProcessInstanceReady_ParamsSpec.$.structSpec && mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnProcessInstanceReady_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnProcessInstanceReady_ParamsSpec.$ = {};
mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnScreenCaptureInstanceReady_ParamsSpec = mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnScreenCaptureInstanceReady_ParamsSpec || { $: {} };
if (mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnScreenCaptureInstanceReady_ParamsSpec.$.structSpec && mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnScreenCaptureInstanceReady_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnScreenCaptureInstanceReady_ParamsSpec.$ = {};
mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnSharesheetInstanceReady_ParamsSpec = mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnSharesheetInstanceReady_ParamsSpec || { $: {} };
if (mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnSharesheetInstanceReady_ParamsSpec.$.structSpec && mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnSharesheetInstanceReady_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnSharesheetInstanceReady_ParamsSpec.$ = {};
mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnSystemStateInstanceReady_ParamsSpec = mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnSystemStateInstanceReady_ParamsSpec || { $: {} };
if (mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnSystemStateInstanceReady_ParamsSpec.$.structSpec && mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnSystemStateInstanceReady_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnSystemStateInstanceReady_ParamsSpec.$ = {};
mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnSystemUiInstanceReady_ParamsSpec = mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnSystemUiInstanceReady_ParamsSpec || { $: {} };
if (mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnSystemUiInstanceReady_ParamsSpec.$.structSpec && mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnSystemUiInstanceReady_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnSystemUiInstanceReady_ParamsSpec.$ = {};
mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnTimerInstanceReady_ParamsSpec = mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnTimerInstanceReady_ParamsSpec || { $: {} };
if (mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnTimerInstanceReady_ParamsSpec.$.structSpec && mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnTimerInstanceReady_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnTimerInstanceReady_ParamsSpec.$ = {};
mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnTracingInstanceReady_ParamsSpec = mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnTracingInstanceReady_ParamsSpec || { $: {} };
if (mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnTracingInstanceReady_ParamsSpec.$.structSpec && mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnTracingInstanceReady_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnTracingInstanceReady_ParamsSpec.$ = {};
mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnTtsInstanceReady_ParamsSpec = mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnTtsInstanceReady_ParamsSpec || { $: {} };
if (mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnTtsInstanceReady_ParamsSpec.$.structSpec && mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnTtsInstanceReady_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnTtsInstanceReady_ParamsSpec.$ = {};
mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnUsbHostInstanceReady_ParamsSpec = mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnUsbHostInstanceReady_ParamsSpec || { $: {} };
if (mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnUsbHostInstanceReady_ParamsSpec.$.structSpec && mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnUsbHostInstanceReady_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnUsbHostInstanceReady_ParamsSpec.$ = {};
mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnVideoInstanceReady_ParamsSpec = mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnVideoInstanceReady_ParamsSpec || { $: {} };
if (mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnVideoInstanceReady_ParamsSpec.$.structSpec && mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnVideoInstanceReady_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnVideoInstanceReady_ParamsSpec.$ = {};
mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnVolumeMounterInstanceReady_ParamsSpec = mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnVolumeMounterInstanceReady_ParamsSpec || { $: {} };
if (mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnVolumeMounterInstanceReady_ParamsSpec.$.structSpec && mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnVolumeMounterInstanceReady_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnVolumeMounterInstanceReady_ParamsSpec.$ = {};
mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnWakeLockInstanceReady_ParamsSpec = mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnWakeLockInstanceReady_ParamsSpec || { $: {} };
if (mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnWakeLockInstanceReady_ParamsSpec.$.structSpec && mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnWakeLockInstanceReady_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnWakeLockInstanceReady_ParamsSpec.$ = {};
mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnWallpaperInstanceReady_ParamsSpec = mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnWallpaperInstanceReady_ParamsSpec || { $: {} };
if (mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnWallpaperInstanceReady_ParamsSpec.$.structSpec && mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnWallpaperInstanceReady_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnWallpaperInstanceReady_ParamsSpec.$ = {};
mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnWebApkInstanceReady_ParamsSpec = mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnWebApkInstanceReady_ParamsSpec || { $: {} };
if (mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnWebApkInstanceReady_ParamsSpec.$.structSpec && mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnWebApkInstanceReady_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnWebApkInstanceReady_ParamsSpec.$ = {};

// External type stubs (from imports)
mojo.internal.bindings.arc = mojo.internal.bindings.arc || {};
mojo.internal.bindings.arc.mojom = mojo.internal.bindings.arc.mojom || {};
mojo.internal.bindings.arc.mojom.AdbdMonitorInstanceSpec = mojo.internal.bindings.arc.mojom.AdbdMonitorInstanceSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.arc.mojom.AdbdMonitorInstanceRemote = mojo.internal.bindings.arc.mojom.AdbdMonitorInstanceRemote || class {};
mojo.internal.bindings.arc.mojom.AdbdMonitorInstancePendingReceiver = mojo.internal.bindings.arc.mojom.AdbdMonitorInstancePendingReceiver || class { constructor(handle) { this.handle = handle; } };
mojo.internal.bindings.arc = mojo.internal.bindings.arc || {};
mojo.internal.bindings.arc.mojom = mojo.internal.bindings.arc.mojom || {};
mojo.internal.bindings.arc.mojom.AppInstanceSpec = mojo.internal.bindings.arc.mojom.AppInstanceSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.arc.mojom.AppInstanceRemote = mojo.internal.bindings.arc.mojom.AppInstanceRemote || class {};
mojo.internal.bindings.arc.mojom.AppInstancePendingReceiver = mojo.internal.bindings.arc.mojom.AppInstancePendingReceiver || class { constructor(handle) { this.handle = handle; } };
mojo.internal.bindings.arc = mojo.internal.bindings.arc || {};
mojo.internal.bindings.arc.mojom = mojo.internal.bindings.arc.mojom || {};
mojo.internal.bindings.arc.mojom.AppPermissionsInstanceSpec = mojo.internal.bindings.arc.mojom.AppPermissionsInstanceSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.arc.mojom.AppPermissionsInstanceRemote = mojo.internal.bindings.arc.mojom.AppPermissionsInstanceRemote || class {};
mojo.internal.bindings.arc.mojom.AppPermissionsInstancePendingReceiver = mojo.internal.bindings.arc.mojom.AppPermissionsInstancePendingReceiver || class { constructor(handle) { this.handle = handle; } };
mojo.internal.bindings.arc = mojo.internal.bindings.arc || {};
mojo.internal.bindings.arc.mojom = mojo.internal.bindings.arc.mojom || {};
mojo.internal.bindings.arc.mojom.AppfuseInstanceSpec = mojo.internal.bindings.arc.mojom.AppfuseInstanceSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.arc.mojom.AppfuseInstanceRemote = mojo.internal.bindings.arc.mojom.AppfuseInstanceRemote || class {};
mojo.internal.bindings.arc.mojom.AppfuseInstancePendingReceiver = mojo.internal.bindings.arc.mojom.AppfuseInstancePendingReceiver || class { constructor(handle) { this.handle = handle; } };
mojo.internal.bindings.arc = mojo.internal.bindings.arc || {};
mojo.internal.bindings.arc.mojom = mojo.internal.bindings.arc.mojom || {};
mojo.internal.bindings.arc.mojom.ArcShellExecutionInstanceSpec = mojo.internal.bindings.arc.mojom.ArcShellExecutionInstanceSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.arc.mojom.ArcShellExecutionInstanceRemote = mojo.internal.bindings.arc.mojom.ArcShellExecutionInstanceRemote || class {};
mojo.internal.bindings.arc.mojom.ArcShellExecutionInstancePendingReceiver = mojo.internal.bindings.arc.mojom.ArcShellExecutionInstancePendingReceiver || class { constructor(handle) { this.handle = handle; } };
mojo.internal.bindings.arc = mojo.internal.bindings.arc || {};
mojo.internal.bindings.arc.mojom = mojo.internal.bindings.arc.mojom || {};
mojo.internal.bindings.arc.mojom.ArcWifiInstanceSpec = mojo.internal.bindings.arc.mojom.ArcWifiInstanceSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.arc.mojom.ArcWifiInstanceRemote = mojo.internal.bindings.arc.mojom.ArcWifiInstanceRemote || class {};
mojo.internal.bindings.arc.mojom.ArcWifiInstancePendingReceiver = mojo.internal.bindings.arc.mojom.ArcWifiInstancePendingReceiver || class { constructor(handle) { this.handle = handle; } };
mojo.internal.bindings.arc = mojo.internal.bindings.arc || {};
mojo.internal.bindings.arc.mojom = mojo.internal.bindings.arc.mojom || {};
mojo.internal.bindings.arc.mojom.AudioInstanceSpec = mojo.internal.bindings.arc.mojom.AudioInstanceSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.arc.mojom.AudioInstanceRemote = mojo.internal.bindings.arc.mojom.AudioInstanceRemote || class {};
mojo.internal.bindings.arc.mojom.AudioInstancePendingReceiver = mojo.internal.bindings.arc.mojom.AudioInstancePendingReceiver || class { constructor(handle) { this.handle = handle; } };
mojo.internal.bindings.arc = mojo.internal.bindings.arc || {};
mojo.internal.bindings.arc.mojom = mojo.internal.bindings.arc.mojom || {};
mojo.internal.bindings.arc.mojom.AuthInstanceSpec = mojo.internal.bindings.arc.mojom.AuthInstanceSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.arc.mojom.AuthInstanceRemote = mojo.internal.bindings.arc.mojom.AuthInstanceRemote || class {};
mojo.internal.bindings.arc.mojom.AuthInstancePendingReceiver = mojo.internal.bindings.arc.mojom.AuthInstancePendingReceiver || class { constructor(handle) { this.handle = handle; } };
mojo.internal.bindings.arc = mojo.internal.bindings.arc || {};
mojo.internal.bindings.arc.mojom = mojo.internal.bindings.arc.mojom || {};
mojo.internal.bindings.arc.mojom.BackupSettingsInstanceSpec = mojo.internal.bindings.arc.mojom.BackupSettingsInstanceSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.arc.mojom.BackupSettingsInstanceRemote = mojo.internal.bindings.arc.mojom.BackupSettingsInstanceRemote || class {};
mojo.internal.bindings.arc.mojom.BackupSettingsInstancePendingReceiver = mojo.internal.bindings.arc.mojom.BackupSettingsInstancePendingReceiver || class { constructor(handle) { this.handle = handle; } };
mojo.internal.bindings.arc = mojo.internal.bindings.arc || {};
mojo.internal.bindings.arc.mojom = mojo.internal.bindings.arc.mojom || {};
mojo.internal.bindings.arc.mojom.BluetoothInstanceSpec = mojo.internal.bindings.arc.mojom.BluetoothInstanceSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.arc.mojom.BluetoothInstanceRemote = mojo.internal.bindings.arc.mojom.BluetoothInstanceRemote || class {};
mojo.internal.bindings.arc.mojom.BluetoothInstancePendingReceiver = mojo.internal.bindings.arc.mojom.BluetoothInstancePendingReceiver || class { constructor(handle) { this.handle = handle; } };
mojo.internal.bindings.arc = mojo.internal.bindings.arc || {};
mojo.internal.bindings.arc.mojom = mojo.internal.bindings.arc.mojom || {};
mojo.internal.bindings.arc.mojom.BootPhaseMonitorInstanceSpec = mojo.internal.bindings.arc.mojom.BootPhaseMonitorInstanceSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.arc.mojom.BootPhaseMonitorInstanceRemote = mojo.internal.bindings.arc.mojom.BootPhaseMonitorInstanceRemote || class {};
mojo.internal.bindings.arc.mojom.BootPhaseMonitorInstancePendingReceiver = mojo.internal.bindings.arc.mojom.BootPhaseMonitorInstancePendingReceiver || class { constructor(handle) { this.handle = handle; } };
mojo.internal.bindings.arc = mojo.internal.bindings.arc || {};
mojo.internal.bindings.arc.mojom = mojo.internal.bindings.arc.mojom || {};
mojo.internal.bindings.arc.mojom.CameraInstanceSpec = mojo.internal.bindings.arc.mojom.CameraInstanceSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.arc.mojom.CameraInstanceRemote = mojo.internal.bindings.arc.mojom.CameraInstanceRemote || class {};
mojo.internal.bindings.arc.mojom.CameraInstancePendingReceiver = mojo.internal.bindings.arc.mojom.CameraInstancePendingReceiver || class { constructor(handle) { this.handle = handle; } };
mojo.internal.bindings.arc = mojo.internal.bindings.arc || {};
mojo.internal.bindings.arc.mojom = mojo.internal.bindings.arc.mojom || {};
mojo.internal.bindings.arc.mojom.ChromeFeatureFlagsInstanceSpec = mojo.internal.bindings.arc.mojom.ChromeFeatureFlagsInstanceSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.arc.mojom.ChromeFeatureFlagsInstanceRemote = mojo.internal.bindings.arc.mojom.ChromeFeatureFlagsInstanceRemote || class {};
mojo.internal.bindings.arc.mojom.ChromeFeatureFlagsInstancePendingReceiver = mojo.internal.bindings.arc.mojom.ChromeFeatureFlagsInstancePendingReceiver || class { constructor(handle) { this.handle = handle; } };
mojo.internal.bindings.arc = mojo.internal.bindings.arc || {};
mojo.internal.bindings.arc.mojom = mojo.internal.bindings.arc.mojom || {};
mojo.internal.bindings.arc.mojom.CompatibilityModeInstanceSpec = mojo.internal.bindings.arc.mojom.CompatibilityModeInstanceSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.arc.mojom.CompatibilityModeInstanceRemote = mojo.internal.bindings.arc.mojom.CompatibilityModeInstanceRemote || class {};
mojo.internal.bindings.arc.mojom.CompatibilityModeInstancePendingReceiver = mojo.internal.bindings.arc.mojom.CompatibilityModeInstancePendingReceiver || class { constructor(handle) { this.handle = handle; } };
mojo.internal.bindings.arc = mojo.internal.bindings.arc || {};
mojo.internal.bindings.arc.mojom = mojo.internal.bindings.arc.mojom || {};
mojo.internal.bindings.arc.mojom.CrashCollectorInstanceSpec = mojo.internal.bindings.arc.mojom.CrashCollectorInstanceSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.arc.mojom.CrashCollectorInstanceRemote = mojo.internal.bindings.arc.mojom.CrashCollectorInstanceRemote || class {};
mojo.internal.bindings.arc.mojom.CrashCollectorInstancePendingReceiver = mojo.internal.bindings.arc.mojom.CrashCollectorInstancePendingReceiver || class { constructor(handle) { this.handle = handle; } };
mojo.internal.bindings.arc = mojo.internal.bindings.arc || {};
mojo.internal.bindings.arc.mojom = mojo.internal.bindings.arc.mojom || {};
mojo.internal.bindings.arc.mojom.DigitalGoodsInstanceSpec = mojo.internal.bindings.arc.mojom.DigitalGoodsInstanceSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.arc.mojom.DigitalGoodsInstanceRemote = mojo.internal.bindings.arc.mojom.DigitalGoodsInstanceRemote || class {};
mojo.internal.bindings.arc.mojom.DigitalGoodsInstancePendingReceiver = mojo.internal.bindings.arc.mojom.DigitalGoodsInstancePendingReceiver || class { constructor(handle) { this.handle = handle; } };
mojo.internal.bindings.arc = mojo.internal.bindings.arc || {};
mojo.internal.bindings.arc.mojom = mojo.internal.bindings.arc.mojom || {};
mojo.internal.bindings.arc.mojom.DiskSpaceInstanceSpec = mojo.internal.bindings.arc.mojom.DiskSpaceInstanceSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.arc.mojom.DiskSpaceInstanceRemote = mojo.internal.bindings.arc.mojom.DiskSpaceInstanceRemote || class {};
mojo.internal.bindings.arc.mojom.DiskSpaceInstancePendingReceiver = mojo.internal.bindings.arc.mojom.DiskSpaceInstancePendingReceiver || class { constructor(handle) { this.handle = handle; } };
mojo.internal.bindings.arc = mojo.internal.bindings.arc || {};
mojo.internal.bindings.arc.mojom = mojo.internal.bindings.arc.mojom || {};
mojo.internal.bindings.arc.mojom.EnterpriseReportingInstanceSpec = mojo.internal.bindings.arc.mojom.EnterpriseReportingInstanceSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.arc.mojom.EnterpriseReportingInstanceRemote = mojo.internal.bindings.arc.mojom.EnterpriseReportingInstanceRemote || class {};
mojo.internal.bindings.arc.mojom.EnterpriseReportingInstancePendingReceiver = mojo.internal.bindings.arc.mojom.EnterpriseReportingInstancePendingReceiver || class { constructor(handle) { this.handle = handle; } };
mojo.internal.bindings.arc = mojo.internal.bindings.arc || {};
mojo.internal.bindings.arc.mojom = mojo.internal.bindings.arc.mojom || {};
mojo.internal.bindings.arc.mojom.ErrorNotificationInstanceSpec = mojo.internal.bindings.arc.mojom.ErrorNotificationInstanceSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.arc.mojom.ErrorNotificationInstanceRemote = mojo.internal.bindings.arc.mojom.ErrorNotificationInstanceRemote || class {};
mojo.internal.bindings.arc.mojom.ErrorNotificationInstancePendingReceiver = mojo.internal.bindings.arc.mojom.ErrorNotificationInstancePendingReceiver || class { constructor(handle) { this.handle = handle; } };
mojo.internal.bindings.arc = mojo.internal.bindings.arc || {};
mojo.internal.bindings.arc.mojom = mojo.internal.bindings.arc.mojom || {};
mojo.internal.bindings.arc.mojom.FileSystemInstanceSpec = mojo.internal.bindings.arc.mojom.FileSystemInstanceSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.arc.mojom.FileSystemInstanceRemote = mojo.internal.bindings.arc.mojom.FileSystemInstanceRemote || class {};
mojo.internal.bindings.arc.mojom.FileSystemInstancePendingReceiver = mojo.internal.bindings.arc.mojom.FileSystemInstancePendingReceiver || class { constructor(handle) { this.handle = handle; } };
mojo.internal.bindings.arc = mojo.internal.bindings.arc || {};
mojo.internal.bindings.arc.mojom = mojo.internal.bindings.arc.mojom || {};
mojo.internal.bindings.arc.mojom.IioSensorInstanceSpec = mojo.internal.bindings.arc.mojom.IioSensorInstanceSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.arc.mojom.IioSensorInstanceRemote = mojo.internal.bindings.arc.mojom.IioSensorInstanceRemote || class {};
mojo.internal.bindings.arc.mojom.IioSensorInstancePendingReceiver = mojo.internal.bindings.arc.mojom.IioSensorInstancePendingReceiver || class { constructor(handle) { this.handle = handle; } };
mojo.internal.bindings.arc = mojo.internal.bindings.arc || {};
mojo.internal.bindings.arc.mojom = mojo.internal.bindings.arc.mojom || {};
mojo.internal.bindings.arc.mojom.ImeInstanceSpec = mojo.internal.bindings.arc.mojom.ImeInstanceSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.arc.mojom.ImeInstanceRemote = mojo.internal.bindings.arc.mojom.ImeInstanceRemote || class {};
mojo.internal.bindings.arc.mojom.ImeInstancePendingReceiver = mojo.internal.bindings.arc.mojom.ImeInstancePendingReceiver || class { constructor(handle) { this.handle = handle; } };
mojo.internal.bindings.arc = mojo.internal.bindings.arc || {};
mojo.internal.bindings.arc.mojom = mojo.internal.bindings.arc.mojom || {};
mojo.internal.bindings.arc.mojom.InputMethodManagerInstanceSpec = mojo.internal.bindings.arc.mojom.InputMethodManagerInstanceSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.arc.mojom.InputMethodManagerInstanceRemote = mojo.internal.bindings.arc.mojom.InputMethodManagerInstanceRemote || class {};
mojo.internal.bindings.arc.mojom.InputMethodManagerInstancePendingReceiver = mojo.internal.bindings.arc.mojom.InputMethodManagerInstancePendingReceiver || class { constructor(handle) { this.handle = handle; } };
mojo.internal.bindings.arc = mojo.internal.bindings.arc || {};
mojo.internal.bindings.arc.mojom = mojo.internal.bindings.arc.mojom || {};
mojo.internal.bindings.arc.mojom.IntentHelperInstanceSpec = mojo.internal.bindings.arc.mojom.IntentHelperInstanceSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.arc.mojom.IntentHelperInstanceRemote = mojo.internal.bindings.arc.mojom.IntentHelperInstanceRemote || class {};
mojo.internal.bindings.arc.mojom.IntentHelperInstancePendingReceiver = mojo.internal.bindings.arc.mojom.IntentHelperInstancePendingReceiver || class { constructor(handle) { this.handle = handle; } };
mojo.internal.bindings.arc = mojo.internal.bindings.arc || {};
mojo.internal.bindings.arc.mojom = mojo.internal.bindings.arc.mojom || {};
mojo.internal.bindings.arc.mojom.KeymasterInstanceSpec = mojo.internal.bindings.arc.mojom.KeymasterInstanceSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.arc.mojom.KeymasterInstanceRemote = mojo.internal.bindings.arc.mojom.KeymasterInstanceRemote || class {};
mojo.internal.bindings.arc.mojom.KeymasterInstancePendingReceiver = mojo.internal.bindings.arc.mojom.KeymasterInstancePendingReceiver || class { constructor(handle) { this.handle = handle; } };
mojo.internal.bindings.arc = mojo.internal.bindings.arc || {};
mojo.internal.bindings.arc.mojom = mojo.internal.bindings.arc.mojom || {};
mojo.internal.bindings.arc.mojom.KioskInstanceSpec = mojo.internal.bindings.arc.mojom.KioskInstanceSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.arc.mojom.KioskInstanceRemote = mojo.internal.bindings.arc.mojom.KioskInstanceRemote || class {};
mojo.internal.bindings.arc.mojom.KioskInstancePendingReceiver = mojo.internal.bindings.arc.mojom.KioskInstancePendingReceiver || class { constructor(handle) { this.handle = handle; } };
mojo.internal.bindings.arc = mojo.internal.bindings.arc || {};
mojo.internal.bindings.arc.mojom = mojo.internal.bindings.arc.mojom || {};
mojo.internal.bindings.arc.mojom.MediaSessionInstanceSpec = mojo.internal.bindings.arc.mojom.MediaSessionInstanceSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.arc.mojom.MediaSessionInstanceRemote = mojo.internal.bindings.arc.mojom.MediaSessionInstanceRemote || class {};
mojo.internal.bindings.arc.mojom.MediaSessionInstancePendingReceiver = mojo.internal.bindings.arc.mojom.MediaSessionInstancePendingReceiver || class { constructor(handle) { this.handle = handle; } };
mojo.internal.bindings.arc = mojo.internal.bindings.arc || {};
mojo.internal.bindings.arc.mojom = mojo.internal.bindings.arc.mojom || {};
mojo.internal.bindings.arc.mojom.MemoryInstanceSpec = mojo.internal.bindings.arc.mojom.MemoryInstanceSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.arc.mojom.MemoryInstanceRemote = mojo.internal.bindings.arc.mojom.MemoryInstanceRemote || class {};
mojo.internal.bindings.arc.mojom.MemoryInstancePendingReceiver = mojo.internal.bindings.arc.mojom.MemoryInstancePendingReceiver || class { constructor(handle) { this.handle = handle; } };
mojo.internal.bindings.arc = mojo.internal.bindings.arc || {};
mojo.internal.bindings.arc.mojom = mojo.internal.bindings.arc.mojom || {};
mojo.internal.bindings.arc.mojom.MetricsInstanceSpec = mojo.internal.bindings.arc.mojom.MetricsInstanceSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.arc.mojom.MetricsInstanceRemote = mojo.internal.bindings.arc.mojom.MetricsInstanceRemote || class {};
mojo.internal.bindings.arc.mojom.MetricsInstancePendingReceiver = mojo.internal.bindings.arc.mojom.MetricsInstancePendingReceiver || class { constructor(handle) { this.handle = handle; } };
mojo.internal.bindings.arc = mojo.internal.bindings.arc || {};
mojo.internal.bindings.arc.mojom = mojo.internal.bindings.arc.mojom || {};
mojo.internal.bindings.arc.mojom.MidisInstanceSpec = mojo.internal.bindings.arc.mojom.MidisInstanceSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.arc.mojom.MidisInstanceRemote = mojo.internal.bindings.arc.mojom.MidisInstanceRemote || class {};
mojo.internal.bindings.arc.mojom.MidisInstancePendingReceiver = mojo.internal.bindings.arc.mojom.MidisInstancePendingReceiver || class { constructor(handle) { this.handle = handle; } };
mojo.internal.bindings.arc = mojo.internal.bindings.arc || {};
mojo.internal.bindings.arc.mojom = mojo.internal.bindings.arc.mojom || {};
mojo.internal.bindings.arc.mojom.NearbyShareInstanceSpec = mojo.internal.bindings.arc.mojom.NearbyShareInstanceSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.arc.mojom.NearbyShareInstanceRemote = mojo.internal.bindings.arc.mojom.NearbyShareInstanceRemote || class {};
mojo.internal.bindings.arc.mojom.NearbyShareInstancePendingReceiver = mojo.internal.bindings.arc.mojom.NearbyShareInstancePendingReceiver || class { constructor(handle) { this.handle = handle; } };
mojo.internal.bindings.arc = mojo.internal.bindings.arc || {};
mojo.internal.bindings.arc.mojom = mojo.internal.bindings.arc.mojom || {};
mojo.internal.bindings.arc.mojom.NetInstanceSpec = mojo.internal.bindings.arc.mojom.NetInstanceSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.arc.mojom.NetInstanceRemote = mojo.internal.bindings.arc.mojom.NetInstanceRemote || class {};
mojo.internal.bindings.arc.mojom.NetInstancePendingReceiver = mojo.internal.bindings.arc.mojom.NetInstancePendingReceiver || class { constructor(handle) { this.handle = handle; } };
mojo.internal.bindings.arc = mojo.internal.bindings.arc || {};
mojo.internal.bindings.arc.mojom = mojo.internal.bindings.arc.mojom || {};
mojo.internal.bindings.arc.mojom.NotificationsInstanceSpec = mojo.internal.bindings.arc.mojom.NotificationsInstanceSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.arc.mojom.NotificationsInstanceRemote = mojo.internal.bindings.arc.mojom.NotificationsInstanceRemote || class {};
mojo.internal.bindings.arc.mojom.NotificationsInstancePendingReceiver = mojo.internal.bindings.arc.mojom.NotificationsInstancePendingReceiver || class { constructor(handle) { this.handle = handle; } };
mojo.internal.bindings.arc = mojo.internal.bindings.arc || {};
mojo.internal.bindings.arc.mojom = mojo.internal.bindings.arc.mojom || {};
mojo.internal.bindings.arc.mojom.ObbMounterInstanceSpec = mojo.internal.bindings.arc.mojom.ObbMounterInstanceSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.arc.mojom.ObbMounterInstanceRemote = mojo.internal.bindings.arc.mojom.ObbMounterInstanceRemote || class {};
mojo.internal.bindings.arc.mojom.ObbMounterInstancePendingReceiver = mojo.internal.bindings.arc.mojom.ObbMounterInstancePendingReceiver || class { constructor(handle) { this.handle = handle; } };
mojo.internal.bindings.arc = mojo.internal.bindings.arc || {};
mojo.internal.bindings.arc.mojom = mojo.internal.bindings.arc.mojom || {};
mojo.internal.bindings.arc.mojom.OemCryptoInstanceSpec = mojo.internal.bindings.arc.mojom.OemCryptoInstanceSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.arc.mojom.OemCryptoInstanceRemote = mojo.internal.bindings.arc.mojom.OemCryptoInstanceRemote || class {};
mojo.internal.bindings.arc.mojom.OemCryptoInstancePendingReceiver = mojo.internal.bindings.arc.mojom.OemCryptoInstancePendingReceiver || class { constructor(handle) { this.handle = handle; } };
mojo.internal.bindings.arc = mojo.internal.bindings.arc || {};
mojo.internal.bindings.arc.mojom = mojo.internal.bindings.arc.mojom || {};
mojo.internal.bindings.arc.mojom.OnDeviceSafetyInstanceSpec = mojo.internal.bindings.arc.mojom.OnDeviceSafetyInstanceSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.arc.mojom.OnDeviceSafetyInstanceRemote = mojo.internal.bindings.arc.mojom.OnDeviceSafetyInstanceRemote || class {};
mojo.internal.bindings.arc.mojom.OnDeviceSafetyInstancePendingReceiver = mojo.internal.bindings.arc.mojom.OnDeviceSafetyInstancePendingReceiver || class { constructor(handle) { this.handle = handle; } };
mojo.internal.bindings.arc = mojo.internal.bindings.arc || {};
mojo.internal.bindings.arc.mojom = mojo.internal.bindings.arc.mojom || {};
mojo.internal.bindings.arc.mojom.PipInstanceSpec = mojo.internal.bindings.arc.mojom.PipInstanceSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.arc.mojom.PipInstanceRemote = mojo.internal.bindings.arc.mojom.PipInstanceRemote || class {};
mojo.internal.bindings.arc.mojom.PipInstancePendingReceiver = mojo.internal.bindings.arc.mojom.PipInstancePendingReceiver || class { constructor(handle) { this.handle = handle; } };
mojo.internal.bindings.arc = mojo.internal.bindings.arc || {};
mojo.internal.bindings.arc.mojom = mojo.internal.bindings.arc.mojom || {};
mojo.internal.bindings.arc.mojom.PolicyInstanceSpec = mojo.internal.bindings.arc.mojom.PolicyInstanceSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.arc.mojom.PolicyInstanceRemote = mojo.internal.bindings.arc.mojom.PolicyInstanceRemote || class {};
mojo.internal.bindings.arc.mojom.PolicyInstancePendingReceiver = mojo.internal.bindings.arc.mojom.PolicyInstancePendingReceiver || class { constructor(handle) { this.handle = handle; } };
mojo.internal.bindings.arc = mojo.internal.bindings.arc || {};
mojo.internal.bindings.arc.mojom = mojo.internal.bindings.arc.mojom || {};
mojo.internal.bindings.arc.mojom.PowerInstanceSpec = mojo.internal.bindings.arc.mojom.PowerInstanceSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.arc.mojom.PowerInstanceRemote = mojo.internal.bindings.arc.mojom.PowerInstanceRemote || class {};
mojo.internal.bindings.arc.mojom.PowerInstancePendingReceiver = mojo.internal.bindings.arc.mojom.PowerInstancePendingReceiver || class { constructor(handle) { this.handle = handle; } };
mojo.internal.bindings.arc = mojo.internal.bindings.arc || {};
mojo.internal.bindings.arc.mojom = mojo.internal.bindings.arc.mojom || {};
mojo.internal.bindings.arc.mojom.PrintSpoolerInstanceSpec = mojo.internal.bindings.arc.mojom.PrintSpoolerInstanceSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.arc.mojom.PrintSpoolerInstanceRemote = mojo.internal.bindings.arc.mojom.PrintSpoolerInstanceRemote || class {};
mojo.internal.bindings.arc.mojom.PrintSpoolerInstancePendingReceiver = mojo.internal.bindings.arc.mojom.PrintSpoolerInstancePendingReceiver || class { constructor(handle) { this.handle = handle; } };
mojo.internal.bindings.arc = mojo.internal.bindings.arc || {};
mojo.internal.bindings.arc.mojom = mojo.internal.bindings.arc.mojom || {};
mojo.internal.bindings.arc.mojom.PrivacyItemsInstanceSpec = mojo.internal.bindings.arc.mojom.PrivacyItemsInstanceSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.arc.mojom.PrivacyItemsInstanceRemote = mojo.internal.bindings.arc.mojom.PrivacyItemsInstanceRemote || class {};
mojo.internal.bindings.arc.mojom.PrivacyItemsInstancePendingReceiver = mojo.internal.bindings.arc.mojom.PrivacyItemsInstancePendingReceiver || class { constructor(handle) { this.handle = handle; } };
mojo.internal.bindings.arc = mojo.internal.bindings.arc || {};
mojo.internal.bindings.arc.mojom = mojo.internal.bindings.arc.mojom || {};
mojo.internal.bindings.arc.mojom.ProcessInstanceSpec = mojo.internal.bindings.arc.mojom.ProcessInstanceSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.arc.mojom.ProcessInstanceRemote = mojo.internal.bindings.arc.mojom.ProcessInstanceRemote || class {};
mojo.internal.bindings.arc.mojom.ProcessInstancePendingReceiver = mojo.internal.bindings.arc.mojom.ProcessInstancePendingReceiver || class { constructor(handle) { this.handle = handle; } };
mojo.internal.bindings.arc = mojo.internal.bindings.arc || {};
mojo.internal.bindings.arc.mojom = mojo.internal.bindings.arc.mojom || {};
mojo.internal.bindings.arc.mojom.ScreenCaptureInstanceSpec = mojo.internal.bindings.arc.mojom.ScreenCaptureInstanceSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.arc.mojom.ScreenCaptureInstanceRemote = mojo.internal.bindings.arc.mojom.ScreenCaptureInstanceRemote || class {};
mojo.internal.bindings.arc.mojom.ScreenCaptureInstancePendingReceiver = mojo.internal.bindings.arc.mojom.ScreenCaptureInstancePendingReceiver || class { constructor(handle) { this.handle = handle; } };
mojo.internal.bindings.arc = mojo.internal.bindings.arc || {};
mojo.internal.bindings.arc.mojom = mojo.internal.bindings.arc.mojom || {};
mojo.internal.bindings.arc.mojom.SharesheetInstanceSpec = mojo.internal.bindings.arc.mojom.SharesheetInstanceSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.arc.mojom.SharesheetInstanceRemote = mojo.internal.bindings.arc.mojom.SharesheetInstanceRemote || class {};
mojo.internal.bindings.arc.mojom.SharesheetInstancePendingReceiver = mojo.internal.bindings.arc.mojom.SharesheetInstancePendingReceiver || class { constructor(handle) { this.handle = handle; } };
mojo.internal.bindings.arc = mojo.internal.bindings.arc || {};
mojo.internal.bindings.arc.mojom = mojo.internal.bindings.arc.mojom || {};
mojo.internal.bindings.arc.mojom.SystemStateInstanceSpec = mojo.internal.bindings.arc.mojom.SystemStateInstanceSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.arc.mojom.SystemStateInstanceRemote = mojo.internal.bindings.arc.mojom.SystemStateInstanceRemote || class {};
mojo.internal.bindings.arc.mojom.SystemStateInstancePendingReceiver = mojo.internal.bindings.arc.mojom.SystemStateInstancePendingReceiver || class { constructor(handle) { this.handle = handle; } };
mojo.internal.bindings.arc = mojo.internal.bindings.arc || {};
mojo.internal.bindings.arc.mojom = mojo.internal.bindings.arc.mojom || {};
mojo.internal.bindings.arc.mojom.SystemUiInstanceSpec = mojo.internal.bindings.arc.mojom.SystemUiInstanceSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.arc.mojom.SystemUiInstanceRemote = mojo.internal.bindings.arc.mojom.SystemUiInstanceRemote || class {};
mojo.internal.bindings.arc.mojom.SystemUiInstancePendingReceiver = mojo.internal.bindings.arc.mojom.SystemUiInstancePendingReceiver || class { constructor(handle) { this.handle = handle; } };
mojo.internal.bindings.arc = mojo.internal.bindings.arc || {};
mojo.internal.bindings.arc.mojom = mojo.internal.bindings.arc.mojom || {};
mojo.internal.bindings.arc.mojom.TimerInstanceSpec = mojo.internal.bindings.arc.mojom.TimerInstanceSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.arc.mojom.TimerInstanceRemote = mojo.internal.bindings.arc.mojom.TimerInstanceRemote || class {};
mojo.internal.bindings.arc.mojom.TimerInstancePendingReceiver = mojo.internal.bindings.arc.mojom.TimerInstancePendingReceiver || class { constructor(handle) { this.handle = handle; } };
mojo.internal.bindings.arc = mojo.internal.bindings.arc || {};
mojo.internal.bindings.arc.mojom = mojo.internal.bindings.arc.mojom || {};
mojo.internal.bindings.arc.mojom.TracingInstanceSpec = mojo.internal.bindings.arc.mojom.TracingInstanceSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.arc.mojom.TracingInstanceRemote = mojo.internal.bindings.arc.mojom.TracingInstanceRemote || class {};
mojo.internal.bindings.arc.mojom.TracingInstancePendingReceiver = mojo.internal.bindings.arc.mojom.TracingInstancePendingReceiver || class { constructor(handle) { this.handle = handle; } };
mojo.internal.bindings.arc = mojo.internal.bindings.arc || {};
mojo.internal.bindings.arc.mojom = mojo.internal.bindings.arc.mojom || {};
mojo.internal.bindings.arc.mojom.TtsInstanceSpec = mojo.internal.bindings.arc.mojom.TtsInstanceSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.arc.mojom.TtsInstanceRemote = mojo.internal.bindings.arc.mojom.TtsInstanceRemote || class {};
mojo.internal.bindings.arc.mojom.TtsInstancePendingReceiver = mojo.internal.bindings.arc.mojom.TtsInstancePendingReceiver || class { constructor(handle) { this.handle = handle; } };
mojo.internal.bindings.arc = mojo.internal.bindings.arc || {};
mojo.internal.bindings.arc.mojom = mojo.internal.bindings.arc.mojom || {};
mojo.internal.bindings.arc.mojom.UsbHostInstanceSpec = mojo.internal.bindings.arc.mojom.UsbHostInstanceSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.arc.mojom.UsbHostInstanceRemote = mojo.internal.bindings.arc.mojom.UsbHostInstanceRemote || class {};
mojo.internal.bindings.arc.mojom.UsbHostInstancePendingReceiver = mojo.internal.bindings.arc.mojom.UsbHostInstancePendingReceiver || class { constructor(handle) { this.handle = handle; } };
mojo.internal.bindings.arc = mojo.internal.bindings.arc || {};
mojo.internal.bindings.arc.mojom = mojo.internal.bindings.arc.mojom || {};
mojo.internal.bindings.arc.mojom.VideoInstanceSpec = mojo.internal.bindings.arc.mojom.VideoInstanceSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.arc.mojom.VideoInstanceRemote = mojo.internal.bindings.arc.mojom.VideoInstanceRemote || class {};
mojo.internal.bindings.arc.mojom.VideoInstancePendingReceiver = mojo.internal.bindings.arc.mojom.VideoInstancePendingReceiver || class { constructor(handle) { this.handle = handle; } };
mojo.internal.bindings.arc = mojo.internal.bindings.arc || {};
mojo.internal.bindings.arc.mojom = mojo.internal.bindings.arc.mojom || {};
mojo.internal.bindings.arc.mojom.VolumeMounterInstanceSpec = mojo.internal.bindings.arc.mojom.VolumeMounterInstanceSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.arc.mojom.VolumeMounterInstanceRemote = mojo.internal.bindings.arc.mojom.VolumeMounterInstanceRemote || class {};
mojo.internal.bindings.arc.mojom.VolumeMounterInstancePendingReceiver = mojo.internal.bindings.arc.mojom.VolumeMounterInstancePendingReceiver || class { constructor(handle) { this.handle = handle; } };
mojo.internal.bindings.arc = mojo.internal.bindings.arc || {};
mojo.internal.bindings.arc.mojom = mojo.internal.bindings.arc.mojom || {};
mojo.internal.bindings.arc.mojom.WakeLockInstanceSpec = mojo.internal.bindings.arc.mojom.WakeLockInstanceSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.arc.mojom.WakeLockInstanceRemote = mojo.internal.bindings.arc.mojom.WakeLockInstanceRemote || class {};
mojo.internal.bindings.arc.mojom.WakeLockInstancePendingReceiver = mojo.internal.bindings.arc.mojom.WakeLockInstancePendingReceiver || class { constructor(handle) { this.handle = handle; } };
mojo.internal.bindings.arc = mojo.internal.bindings.arc || {};
mojo.internal.bindings.arc.mojom = mojo.internal.bindings.arc.mojom || {};
mojo.internal.bindings.arc.mojom.WallpaperInstanceSpec = mojo.internal.bindings.arc.mojom.WallpaperInstanceSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.arc.mojom.WallpaperInstanceRemote = mojo.internal.bindings.arc.mojom.WallpaperInstanceRemote || class {};
mojo.internal.bindings.arc.mojom.WallpaperInstancePendingReceiver = mojo.internal.bindings.arc.mojom.WallpaperInstancePendingReceiver || class { constructor(handle) { this.handle = handle; } };
mojo.internal.bindings.arc = mojo.internal.bindings.arc || {};
mojo.internal.bindings.arc.mojom = mojo.internal.bindings.arc.mojom || {};
mojo.internal.bindings.arc.mojom.WebApkInstanceSpec = mojo.internal.bindings.arc.mojom.WebApkInstanceSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.arc.mojom.WebApkInstanceRemote = mojo.internal.bindings.arc.mojom.WebApkInstanceRemote || class {};
mojo.internal.bindings.arc.mojom.WebApkInstancePendingReceiver = mojo.internal.bindings.arc.mojom.WebApkInstancePendingReceiver || class { constructor(handle) { this.handle = handle; } };
mojo.internal.bindings.ax = mojo.internal.bindings.ax || {};
mojo.internal.bindings.ax.android = mojo.internal.bindings.ax.android || {};
mojo.internal.bindings.ax.android.mojom = mojo.internal.bindings.ax.android.mojom || {};
mojo.internal.bindings.ax.android.mojom.AccessibilityHelperInstanceSpec = mojo.internal.bindings.ax.android.mojom.AccessibilityHelperInstanceSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.ax.android.mojom.AccessibilityHelperInstanceRemote = mojo.internal.bindings.ax.android.mojom.AccessibilityHelperInstanceRemote || class {};
mojo.internal.bindings.ax.android.mojom.AccessibilityHelperInstancePendingReceiver = mojo.internal.bindings.ax.android.mojom.AccessibilityHelperInstancePendingReceiver || class { constructor(handle) { this.handle = handle; } };
mojo.internal.bindings.chromeos = mojo.internal.bindings.chromeos || {};
mojo.internal.bindings.chromeos.payments = mojo.internal.bindings.chromeos.payments || {};
mojo.internal.bindings.chromeos.payments.mojom = mojo.internal.bindings.chromeos.payments.mojom || {};
mojo.internal.bindings.chromeos.payments.mojom.PaymentAppInstanceSpec = mojo.internal.bindings.chromeos.payments.mojom.PaymentAppInstanceSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.chromeos.payments.mojom.PaymentAppInstanceRemote = mojo.internal.bindings.chromeos.payments.mojom.PaymentAppInstanceRemote || class {};
mojo.internal.bindings.chromeos.payments.mojom.PaymentAppInstancePendingReceiver = mojo.internal.bindings.chromeos.payments.mojom.PaymentAppInstancePendingReceiver || class { constructor(handle) { this.handle = handle; } };
mojo.internal.bindings.keymint = mojo.internal.bindings.keymint || {};
mojo.internal.bindings.keymint.KeyMintInstanceSpec = mojo.internal.bindings.keymint.KeyMintInstanceSpec || { $: mojo.internal.OpaqueStruct.$ };

// Interface: ArcBridgeHost
mojo.internal.bindings.arc.mojom.ArcBridgeHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
    if (handle) {
      this.__mojoHandle = handle.router_ ? handle.router_.pipe_ : (handle.pipe_ || handle);
    }
  }
};

mojo.internal.bindings.arc.mojom.ArcBridgeHostRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.ArcBridgeHost';
  }

  constructor(handle = undefined) {
    this.__mojoHandle = handle;
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.arc.mojom.ArcBridgeHostPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.arc.mojom.ArcBridgeHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onAccessibilityHelperInstanceReady(arg_instance_remote) {
    return this.$.onAccessibilityHelperInstanceReady(arg_instance_remote);
  }
  onAdbdMonitorInstanceReady(arg_instance_remote) {
    return this.$.onAdbdMonitorInstanceReady(arg_instance_remote);
  }
  onAppInstanceReady(arg_instance_remote) {
    return this.$.onAppInstanceReady(arg_instance_remote);
  }
  onAppPermissionsInstanceReady(arg_instance_remote) {
    return this.$.onAppPermissionsInstanceReady(arg_instance_remote);
  }
  onAppfuseInstanceReady(arg_instance_remote) {
    return this.$.onAppfuseInstanceReady(arg_instance_remote);
  }
  onArcShellExecutionInstanceReady(arg_instance_remote) {
    return this.$.onArcShellExecutionInstanceReady(arg_instance_remote);
  }
  onArcWifiInstanceReady(arg_instance_remote) {
    return this.$.onArcWifiInstanceReady(arg_instance_remote);
  }
  onAudioInstanceReady(arg_instance_remote) {
    return this.$.onAudioInstanceReady(arg_instance_remote);
  }
  onAuthInstanceReady(arg_instance_remote) {
    return this.$.onAuthInstanceReady(arg_instance_remote);
  }
  onBackupSettingsInstanceReady(arg_instance_remote) {
    return this.$.onBackupSettingsInstanceReady(arg_instance_remote);
  }
  onBluetoothInstanceReady(arg_instance_remote) {
    return this.$.onBluetoothInstanceReady(arg_instance_remote);
  }
  onBootPhaseMonitorInstanceReady(arg_instance_remote) {
    return this.$.onBootPhaseMonitorInstanceReady(arg_instance_remote);
  }
  onCameraInstanceReady(arg_instance_remote) {
    return this.$.onCameraInstanceReady(arg_instance_remote);
  }
  onChromeFeatureFlagsInstanceReady(arg_instance_remote) {
    return this.$.onChromeFeatureFlagsInstanceReady(arg_instance_remote);
  }
  onCompatibilityModeInstanceReady(arg_instance_remote) {
    return this.$.onCompatibilityModeInstanceReady(arg_instance_remote);
  }
  onCrashCollectorInstanceReady(arg_instance_remote) {
    return this.$.onCrashCollectorInstanceReady(arg_instance_remote);
  }
  onOnDeviceSafetyInstanceReady(arg_instance_remote) {
    return this.$.onOnDeviceSafetyInstanceReady(arg_instance_remote);
  }
  onDigitalGoodsInstanceReady(arg_instance_remote) {
    return this.$.onDigitalGoodsInstanceReady(arg_instance_remote);
  }
  onDiskSpaceInstanceReady(arg_instance_remote) {
    return this.$.onDiskSpaceInstanceReady(arg_instance_remote);
  }
  onEnterpriseReportingInstanceReady(arg_instance_remote) {
    return this.$.onEnterpriseReportingInstanceReady(arg_instance_remote);
  }
  onErrorNotificationInstanceReady(arg_instance_remote) {
    return this.$.onErrorNotificationInstanceReady(arg_instance_remote);
  }
  onFileSystemInstanceReady(arg_instance_remote) {
    return this.$.onFileSystemInstanceReady(arg_instance_remote);
  }
  onIioSensorInstanceReady(arg_instance_remote) {
    return this.$.onIioSensorInstanceReady(arg_instance_remote);
  }
  onImeInstanceReady(arg_instance_remote) {
    return this.$.onImeInstanceReady(arg_instance_remote);
  }
  onInputMethodManagerInstanceReady(arg_instance_remote) {
    return this.$.onInputMethodManagerInstanceReady(arg_instance_remote);
  }
  onIntentHelperInstanceReady(arg_instance_remote) {
    return this.$.onIntentHelperInstanceReady(arg_instance_remote);
  }
  onKeymasterInstanceReady(arg_instance_remote) {
    return this.$.onKeymasterInstanceReady(arg_instance_remote);
  }
  onKeyMintInstanceReady(arg_instance_remote) {
    return this.$.onKeyMintInstanceReady(arg_instance_remote);
  }
  onKioskInstanceReady(arg_instance_remote) {
    return this.$.onKioskInstanceReady(arg_instance_remote);
  }
  onMediaSessionInstanceReady(arg_instance_remote) {
    return this.$.onMediaSessionInstanceReady(arg_instance_remote);
  }
  onMemoryInstanceReady(arg_instance_remote) {
    return this.$.onMemoryInstanceReady(arg_instance_remote);
  }
  onMetricsInstanceReady(arg_instance_remote) {
    return this.$.onMetricsInstanceReady(arg_instance_remote);
  }
  onMidisInstanceReady(arg_instance_remote) {
    return this.$.onMidisInstanceReady(arg_instance_remote);
  }
  onNearbyShareInstanceReady(arg_instance_remote) {
    return this.$.onNearbyShareInstanceReady(arg_instance_remote);
  }
  onNetInstanceReady(arg_instance_remote) {
    return this.$.onNetInstanceReady(arg_instance_remote);
  }
  onNotificationsInstanceReady(arg_instance_remote) {
    return this.$.onNotificationsInstanceReady(arg_instance_remote);
  }
  onObbMounterInstanceReady(arg_instance_remote) {
    return this.$.onObbMounterInstanceReady(arg_instance_remote);
  }
  onOemCryptoInstanceReady(arg_instance_remote) {
    return this.$.onOemCryptoInstanceReady(arg_instance_remote);
  }
  onPaymentAppInstanceReady(arg_instance_remote) {
    return this.$.onPaymentAppInstanceReady(arg_instance_remote);
  }
  onPipInstanceReady(arg_instance_remote) {
    return this.$.onPipInstanceReady(arg_instance_remote);
  }
  onPolicyInstanceReady(arg_instance_remote) {
    return this.$.onPolicyInstanceReady(arg_instance_remote);
  }
  onPowerInstanceReady(arg_instance_remote) {
    return this.$.onPowerInstanceReady(arg_instance_remote);
  }
  onPrintSpoolerInstanceReady(arg_instance_remote) {
    return this.$.onPrintSpoolerInstanceReady(arg_instance_remote);
  }
  onPrivacyItemsInstanceReady(arg_instance_remote) {
    return this.$.onPrivacyItemsInstanceReady(arg_instance_remote);
  }
  onProcessInstanceReady(arg_instance_remote) {
    return this.$.onProcessInstanceReady(arg_instance_remote);
  }
  onScreenCaptureInstanceReady(arg_instance_remote) {
    return this.$.onScreenCaptureInstanceReady(arg_instance_remote);
  }
  onSharesheetInstanceReady(arg_instance_remote) {
    return this.$.onSharesheetInstanceReady(arg_instance_remote);
  }
  onSystemStateInstanceReady(arg_instance_remote) {
    return this.$.onSystemStateInstanceReady(arg_instance_remote);
  }
  onSystemUiInstanceReady(arg_instance_remote) {
    return this.$.onSystemUiInstanceReady(arg_instance_remote);
  }
  onTimerInstanceReady(arg_instance_remote) {
    return this.$.onTimerInstanceReady(arg_instance_remote);
  }
  onTracingInstanceReady(arg_instance_remote) {
    return this.$.onTracingInstanceReady(arg_instance_remote);
  }
  onTtsInstanceReady(arg_instance_remote) {
    return this.$.onTtsInstanceReady(arg_instance_remote);
  }
  onUsbHostInstanceReady(arg_instance_remote) {
    return this.$.onUsbHostInstanceReady(arg_instance_remote);
  }
  onVideoInstanceReady(arg_instance_remote) {
    return this.$.onVideoInstanceReady(arg_instance_remote);
  }
  onVolumeMounterInstanceReady(arg_instance_remote) {
    return this.$.onVolumeMounterInstanceReady(arg_instance_remote);
  }
  onWakeLockInstanceReady(arg_instance_remote) {
    return this.$.onWakeLockInstanceReady(arg_instance_remote);
  }
  onWallpaperInstanceReady(arg_instance_remote) {
    return this.$.onWallpaperInstanceReady(arg_instance_remote);
  }
  onWebApkInstanceReady(arg_instance_ptr) {
    return this.$.onWebApkInstanceReady(arg_instance_ptr);
  }
};

mojo.internal.bindings.arc.mojom.ArcBridgeHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('arc.mojom.ArcBridgeHost', [
      { explicit: 127 },
      { explicit: 158 },
      { explicit: 100 },
      { explicit: 149 },
      { explicit: 145 },
      { explicit: 174 },
      { explicit: 171 },
      { explicit: 115 },
      { explicit: 106 },
      { explicit: 138 },
      { explicit: 113 },
      { explicit: 125 },
      { explicit: 151 },
      { explicit: 170 },
      { explicit: 161 },
      { explicit: 112 },
      { explicit: 173 },
      { explicit: 156 },
      { explicit: 144 },
      { explicit: 122 },
      { explicit: 172 },
      { explicit: 119 },
      { explicit: 159 },
      { explicit: 110 },
      { explicit: 143 },
      { explicit: 111 },
      { explicit: 152 },
      { explicit: 168 },
      { explicit: 175 },
      { explicit: 148 },
      { explicit: 164 },
      { explicit: 116 },
      { explicit: 135 },
      { explicit: 163 },
      { explicit: 108 },
      { explicit: 102 },
      { explicit: 120 },
      { explicit: 133 },
      { explicit: 155 },
      { explicit: 146 },
      { explicit: 114 },
      { explicit: 103 },
      { explicit: 150 },
      { explicit: 166 },
      { explicit: 104 },
      { explicit: 140 },
      { explicit: 157 },
      { explicit: 169 },
      { explicit: 167 },
      { explicit: 141 },
      { explicit: 128 },
      { explicit: 123 },
      { explicit: 139 },
      { explicit: 107 },
      { explicit: 131 },
      { explicit: 142 },
      { explicit: 124 },
      { explicit: 162 },
    ]);
  }

  onAccessibilityHelperInstanceReady(arg_instance_remote) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnAccessibilityHelperInstanceReady_ParamsSpec,
      null,
      [arg_instance_remote],
      false);
  }

  onAdbdMonitorInstanceReady(arg_instance_remote) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnAdbdMonitorInstanceReady_ParamsSpec,
      null,
      [arg_instance_remote],
      false);
  }

  onAppInstanceReady(arg_instance_remote) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnAppInstanceReady_ParamsSpec,
      null,
      [arg_instance_remote],
      false);
  }

  onAppPermissionsInstanceReady(arg_instance_remote) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnAppPermissionsInstanceReady_ParamsSpec,
      null,
      [arg_instance_remote],
      false);
  }

  onAppfuseInstanceReady(arg_instance_remote) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnAppfuseInstanceReady_ParamsSpec,
      null,
      [arg_instance_remote],
      false);
  }

  onArcShellExecutionInstanceReady(arg_instance_remote) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnArcShellExecutionInstanceReady_ParamsSpec,
      null,
      [arg_instance_remote],
      false);
  }

  onArcWifiInstanceReady(arg_instance_remote) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnArcWifiInstanceReady_ParamsSpec,
      null,
      [arg_instance_remote],
      false);
  }

  onAudioInstanceReady(arg_instance_remote) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnAudioInstanceReady_ParamsSpec,
      null,
      [arg_instance_remote],
      false);
  }

  onAuthInstanceReady(arg_instance_remote) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnAuthInstanceReady_ParamsSpec,
      null,
      [arg_instance_remote],
      false);
  }

  onBackupSettingsInstanceReady(arg_instance_remote) {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnBackupSettingsInstanceReady_ParamsSpec,
      null,
      [arg_instance_remote],
      false);
  }

  onBluetoothInstanceReady(arg_instance_remote) {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnBluetoothInstanceReady_ParamsSpec,
      null,
      [arg_instance_remote],
      false);
  }

  onBootPhaseMonitorInstanceReady(arg_instance_remote) {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnBootPhaseMonitorInstanceReady_ParamsSpec,
      null,
      [arg_instance_remote],
      false);
  }

  onCameraInstanceReady(arg_instance_remote) {
    return this.proxy.sendMessage(
      this.ordinals[12],  // ordinal
      mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnCameraInstanceReady_ParamsSpec,
      null,
      [arg_instance_remote],
      false);
  }

  onChromeFeatureFlagsInstanceReady(arg_instance_remote) {
    return this.proxy.sendMessage(
      this.ordinals[13],  // ordinal
      mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnChromeFeatureFlagsInstanceReady_ParamsSpec,
      null,
      [arg_instance_remote],
      false);
  }

  onCompatibilityModeInstanceReady(arg_instance_remote) {
    return this.proxy.sendMessage(
      this.ordinals[14],  // ordinal
      mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnCompatibilityModeInstanceReady_ParamsSpec,
      null,
      [arg_instance_remote],
      false);
  }

  onCrashCollectorInstanceReady(arg_instance_remote) {
    return this.proxy.sendMessage(
      this.ordinals[15],  // ordinal
      mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnCrashCollectorInstanceReady_ParamsSpec,
      null,
      [arg_instance_remote],
      false);
  }

  onOnDeviceSafetyInstanceReady(arg_instance_remote) {
    return this.proxy.sendMessage(
      this.ordinals[16],  // ordinal
      mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnOnDeviceSafetyInstanceReady_ParamsSpec,
      null,
      [arg_instance_remote],
      false);
  }

  onDigitalGoodsInstanceReady(arg_instance_remote) {
    return this.proxy.sendMessage(
      this.ordinals[17],  // ordinal
      mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnDigitalGoodsInstanceReady_ParamsSpec,
      null,
      [arg_instance_remote],
      false);
  }

  onDiskSpaceInstanceReady(arg_instance_remote) {
    return this.proxy.sendMessage(
      this.ordinals[18],  // ordinal
      mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnDiskSpaceInstanceReady_ParamsSpec,
      null,
      [arg_instance_remote],
      false);
  }

  onEnterpriseReportingInstanceReady(arg_instance_remote) {
    return this.proxy.sendMessage(
      this.ordinals[19],  // ordinal
      mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnEnterpriseReportingInstanceReady_ParamsSpec,
      null,
      [arg_instance_remote],
      false);
  }

  onErrorNotificationInstanceReady(arg_instance_remote) {
    return this.proxy.sendMessage(
      this.ordinals[20],  // ordinal
      mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnErrorNotificationInstanceReady_ParamsSpec,
      null,
      [arg_instance_remote],
      false);
  }

  onFileSystemInstanceReady(arg_instance_remote) {
    return this.proxy.sendMessage(
      this.ordinals[21],  // ordinal
      mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnFileSystemInstanceReady_ParamsSpec,
      null,
      [arg_instance_remote],
      false);
  }

  onIioSensorInstanceReady(arg_instance_remote) {
    return this.proxy.sendMessage(
      this.ordinals[22],  // ordinal
      mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnIioSensorInstanceReady_ParamsSpec,
      null,
      [arg_instance_remote],
      false);
  }

  onImeInstanceReady(arg_instance_remote) {
    return this.proxy.sendMessage(
      this.ordinals[23],  // ordinal
      mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnImeInstanceReady_ParamsSpec,
      null,
      [arg_instance_remote],
      false);
  }

  onInputMethodManagerInstanceReady(arg_instance_remote) {
    return this.proxy.sendMessage(
      this.ordinals[24],  // ordinal
      mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnInputMethodManagerInstanceReady_ParamsSpec,
      null,
      [arg_instance_remote],
      false);
  }

  onIntentHelperInstanceReady(arg_instance_remote) {
    return this.proxy.sendMessage(
      this.ordinals[25],  // ordinal
      mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnIntentHelperInstanceReady_ParamsSpec,
      null,
      [arg_instance_remote],
      false);
  }

  onKeymasterInstanceReady(arg_instance_remote) {
    return this.proxy.sendMessage(
      this.ordinals[26],  // ordinal
      mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnKeymasterInstanceReady_ParamsSpec,
      null,
      [arg_instance_remote],
      false);
  }

  onKeyMintInstanceReady(arg_instance_remote) {
    return this.proxy.sendMessage(
      this.ordinals[27],  // ordinal
      mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnKeyMintInstanceReady_ParamsSpec,
      null,
      [arg_instance_remote],
      false);
  }

  onKioskInstanceReady(arg_instance_remote) {
    return this.proxy.sendMessage(
      this.ordinals[28],  // ordinal
      mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnKioskInstanceReady_ParamsSpec,
      null,
      [arg_instance_remote],
      false);
  }

  onMediaSessionInstanceReady(arg_instance_remote) {
    return this.proxy.sendMessage(
      this.ordinals[29],  // ordinal
      mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnMediaSessionInstanceReady_ParamsSpec,
      null,
      [arg_instance_remote],
      false);
  }

  onMemoryInstanceReady(arg_instance_remote) {
    return this.proxy.sendMessage(
      this.ordinals[30],  // ordinal
      mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnMemoryInstanceReady_ParamsSpec,
      null,
      [arg_instance_remote],
      false);
  }

  onMetricsInstanceReady(arg_instance_remote) {
    return this.proxy.sendMessage(
      this.ordinals[31],  // ordinal
      mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnMetricsInstanceReady_ParamsSpec,
      null,
      [arg_instance_remote],
      false);
  }

  onMidisInstanceReady(arg_instance_remote) {
    return this.proxy.sendMessage(
      this.ordinals[32],  // ordinal
      mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnMidisInstanceReady_ParamsSpec,
      null,
      [arg_instance_remote],
      false);
  }

  onNearbyShareInstanceReady(arg_instance_remote) {
    return this.proxy.sendMessage(
      this.ordinals[33],  // ordinal
      mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnNearbyShareInstanceReady_ParamsSpec,
      null,
      [arg_instance_remote],
      false);
  }

  onNetInstanceReady(arg_instance_remote) {
    return this.proxy.sendMessage(
      this.ordinals[34],  // ordinal
      mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnNetInstanceReady_ParamsSpec,
      null,
      [arg_instance_remote],
      false);
  }

  onNotificationsInstanceReady(arg_instance_remote) {
    return this.proxy.sendMessage(
      this.ordinals[35],  // ordinal
      mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnNotificationsInstanceReady_ParamsSpec,
      null,
      [arg_instance_remote],
      false);
  }

  onObbMounterInstanceReady(arg_instance_remote) {
    return this.proxy.sendMessage(
      this.ordinals[36],  // ordinal
      mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnObbMounterInstanceReady_ParamsSpec,
      null,
      [arg_instance_remote],
      false);
  }

  onOemCryptoInstanceReady(arg_instance_remote) {
    return this.proxy.sendMessage(
      this.ordinals[37],  // ordinal
      mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnOemCryptoInstanceReady_ParamsSpec,
      null,
      [arg_instance_remote],
      false);
  }

  onPaymentAppInstanceReady(arg_instance_remote) {
    return this.proxy.sendMessage(
      this.ordinals[38],  // ordinal
      mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnPaymentAppInstanceReady_ParamsSpec,
      null,
      [arg_instance_remote],
      false);
  }

  onPipInstanceReady(arg_instance_remote) {
    return this.proxy.sendMessage(
      this.ordinals[39],  // ordinal
      mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnPipInstanceReady_ParamsSpec,
      null,
      [arg_instance_remote],
      false);
  }

  onPolicyInstanceReady(arg_instance_remote) {
    return this.proxy.sendMessage(
      this.ordinals[40],  // ordinal
      mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnPolicyInstanceReady_ParamsSpec,
      null,
      [arg_instance_remote],
      false);
  }

  onPowerInstanceReady(arg_instance_remote) {
    return this.proxy.sendMessage(
      this.ordinals[41],  // ordinal
      mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnPowerInstanceReady_ParamsSpec,
      null,
      [arg_instance_remote],
      false);
  }

  onPrintSpoolerInstanceReady(arg_instance_remote) {
    return this.proxy.sendMessage(
      this.ordinals[42],  // ordinal
      mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnPrintSpoolerInstanceReady_ParamsSpec,
      null,
      [arg_instance_remote],
      false);
  }

  onPrivacyItemsInstanceReady(arg_instance_remote) {
    return this.proxy.sendMessage(
      this.ordinals[43],  // ordinal
      mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnPrivacyItemsInstanceReady_ParamsSpec,
      null,
      [arg_instance_remote],
      false);
  }

  onProcessInstanceReady(arg_instance_remote) {
    return this.proxy.sendMessage(
      this.ordinals[44],  // ordinal
      mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnProcessInstanceReady_ParamsSpec,
      null,
      [arg_instance_remote],
      false);
  }

  onScreenCaptureInstanceReady(arg_instance_remote) {
    return this.proxy.sendMessage(
      this.ordinals[45],  // ordinal
      mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnScreenCaptureInstanceReady_ParamsSpec,
      null,
      [arg_instance_remote],
      false);
  }

  onSharesheetInstanceReady(arg_instance_remote) {
    return this.proxy.sendMessage(
      this.ordinals[46],  // ordinal
      mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnSharesheetInstanceReady_ParamsSpec,
      null,
      [arg_instance_remote],
      false);
  }

  onSystemStateInstanceReady(arg_instance_remote) {
    return this.proxy.sendMessage(
      this.ordinals[47],  // ordinal
      mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnSystemStateInstanceReady_ParamsSpec,
      null,
      [arg_instance_remote],
      false);
  }

  onSystemUiInstanceReady(arg_instance_remote) {
    return this.proxy.sendMessage(
      this.ordinals[48],  // ordinal
      mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnSystemUiInstanceReady_ParamsSpec,
      null,
      [arg_instance_remote],
      false);
  }

  onTimerInstanceReady(arg_instance_remote) {
    return this.proxy.sendMessage(
      this.ordinals[49],  // ordinal
      mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnTimerInstanceReady_ParamsSpec,
      null,
      [arg_instance_remote],
      false);
  }

  onTracingInstanceReady(arg_instance_remote) {
    return this.proxy.sendMessage(
      this.ordinals[50],  // ordinal
      mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnTracingInstanceReady_ParamsSpec,
      null,
      [arg_instance_remote],
      false);
  }

  onTtsInstanceReady(arg_instance_remote) {
    return this.proxy.sendMessage(
      this.ordinals[51],  // ordinal
      mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnTtsInstanceReady_ParamsSpec,
      null,
      [arg_instance_remote],
      false);
  }

  onUsbHostInstanceReady(arg_instance_remote) {
    return this.proxy.sendMessage(
      this.ordinals[52],  // ordinal
      mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnUsbHostInstanceReady_ParamsSpec,
      null,
      [arg_instance_remote],
      false);
  }

  onVideoInstanceReady(arg_instance_remote) {
    return this.proxy.sendMessage(
      this.ordinals[53],  // ordinal
      mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnVideoInstanceReady_ParamsSpec,
      null,
      [arg_instance_remote],
      false);
  }

  onVolumeMounterInstanceReady(arg_instance_remote) {
    return this.proxy.sendMessage(
      this.ordinals[54],  // ordinal
      mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnVolumeMounterInstanceReady_ParamsSpec,
      null,
      [arg_instance_remote],
      false);
  }

  onWakeLockInstanceReady(arg_instance_remote) {
    return this.proxy.sendMessage(
      this.ordinals[55],  // ordinal
      mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnWakeLockInstanceReady_ParamsSpec,
      null,
      [arg_instance_remote],
      false);
  }

  onWallpaperInstanceReady(arg_instance_remote) {
    return this.proxy.sendMessage(
      this.ordinals[56],  // ordinal
      mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnWallpaperInstanceReady_ParamsSpec,
      null,
      [arg_instance_remote],
      false);
  }

  onWebApkInstanceReady(arg_instance_ptr) {
    return this.proxy.sendMessage(
      this.ordinals[57],  // ordinal
      mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnWebApkInstanceReady_ParamsSpec,
      null,
      [arg_instance_ptr],
      false);
  }

};

mojo.internal.bindings.arc.mojom.ArcBridgeHost.getRemote = function() {
  let remote = new mojo.internal.bindings.arc.mojom.ArcBridgeHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.ArcBridgeHost',
    'context');
  return remote.$;
};

mojo.internal.bindings.arc.mojom.ArcBridgeHostReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('arc.mojom.ArcBridgeHost', [
      { explicit: 127 },
      { explicit: 158 },
      { explicit: 100 },
      { explicit: 149 },
      { explicit: 145 },
      { explicit: 174 },
      { explicit: 171 },
      { explicit: 115 },
      { explicit: 106 },
      { explicit: 138 },
      { explicit: 113 },
      { explicit: 125 },
      { explicit: 151 },
      { explicit: 170 },
      { explicit: 161 },
      { explicit: 112 },
      { explicit: 173 },
      { explicit: 156 },
      { explicit: 144 },
      { explicit: 122 },
      { explicit: 172 },
      { explicit: 119 },
      { explicit: 159 },
      { explicit: 110 },
      { explicit: 143 },
      { explicit: 111 },
      { explicit: 152 },
      { explicit: 168 },
      { explicit: 175 },
      { explicit: 148 },
      { explicit: 164 },
      { explicit: 116 },
      { explicit: 135 },
      { explicit: 163 },
      { explicit: 108 },
      { explicit: 102 },
      { explicit: 120 },
      { explicit: 133 },
      { explicit: 155 },
      { explicit: 146 },
      { explicit: 114 },
      { explicit: 103 },
      { explicit: 150 },
      { explicit: 166 },
      { explicit: 104 },
      { explicit: 140 },
      { explicit: 157 },
      { explicit: 169 },
      { explicit: 167 },
      { explicit: 141 },
      { explicit: 128 },
      { explicit: 123 },
      { explicit: 139 },
      { explicit: 107 },
      { explicit: 131 },
      { explicit: 142 },
      { explicit: 124 },
      { explicit: 162 },
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnAccessibilityHelperInstanceReady_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onAccessibilityHelperInstanceReady');
          const result = this.impl.onAccessibilityHelperInstanceReady(params.arg_instance_remote);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnAdbdMonitorInstanceReady_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onAdbdMonitorInstanceReady');
          const result = this.impl.onAdbdMonitorInstanceReady(params.arg_instance_remote);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnAppInstanceReady_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onAppInstanceReady');
          const result = this.impl.onAppInstanceReady(params.arg_instance_remote);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnAppPermissionsInstanceReady_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onAppPermissionsInstanceReady');
          const result = this.impl.onAppPermissionsInstanceReady(params.arg_instance_remote);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnAppfuseInstanceReady_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onAppfuseInstanceReady');
          const result = this.impl.onAppfuseInstanceReady(params.arg_instance_remote);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnArcShellExecutionInstanceReady_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onArcShellExecutionInstanceReady');
          const result = this.impl.onArcShellExecutionInstanceReady(params.arg_instance_remote);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnArcWifiInstanceReady_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onArcWifiInstanceReady');
          const result = this.impl.onArcWifiInstanceReady(params.arg_instance_remote);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnAudioInstanceReady_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onAudioInstanceReady');
          const result = this.impl.onAudioInstanceReady(params.arg_instance_remote);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnAuthInstanceReady_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onAuthInstanceReady');
          const result = this.impl.onAuthInstanceReady(params.arg_instance_remote);
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnBackupSettingsInstanceReady_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onBackupSettingsInstanceReady');
          const result = this.impl.onBackupSettingsInstanceReady(params.arg_instance_remote);
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnBluetoothInstanceReady_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onBluetoothInstanceReady');
          const result = this.impl.onBluetoothInstanceReady(params.arg_instance_remote);
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnBootPhaseMonitorInstanceReady_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onBootPhaseMonitorInstanceReady');
          const result = this.impl.onBootPhaseMonitorInstanceReady(params.arg_instance_remote);
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnCameraInstanceReady_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onCameraInstanceReady');
          const result = this.impl.onCameraInstanceReady(params.arg_instance_remote);
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnChromeFeatureFlagsInstanceReady_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onChromeFeatureFlagsInstanceReady');
          const result = this.impl.onChromeFeatureFlagsInstanceReady(params.arg_instance_remote);
          break;
        }
        case 14: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnCompatibilityModeInstanceReady_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onCompatibilityModeInstanceReady');
          const result = this.impl.onCompatibilityModeInstanceReady(params.arg_instance_remote);
          break;
        }
        case 15: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnCrashCollectorInstanceReady_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onCrashCollectorInstanceReady');
          const result = this.impl.onCrashCollectorInstanceReady(params.arg_instance_remote);
          break;
        }
        case 16: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnOnDeviceSafetyInstanceReady_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onOnDeviceSafetyInstanceReady');
          const result = this.impl.onOnDeviceSafetyInstanceReady(params.arg_instance_remote);
          break;
        }
        case 17: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnDigitalGoodsInstanceReady_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onDigitalGoodsInstanceReady');
          const result = this.impl.onDigitalGoodsInstanceReady(params.arg_instance_remote);
          break;
        }
        case 18: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnDiskSpaceInstanceReady_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onDiskSpaceInstanceReady');
          const result = this.impl.onDiskSpaceInstanceReady(params.arg_instance_remote);
          break;
        }
        case 19: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnEnterpriseReportingInstanceReady_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onEnterpriseReportingInstanceReady');
          const result = this.impl.onEnterpriseReportingInstanceReady(params.arg_instance_remote);
          break;
        }
        case 20: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnErrorNotificationInstanceReady_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onErrorNotificationInstanceReady');
          const result = this.impl.onErrorNotificationInstanceReady(params.arg_instance_remote);
          break;
        }
        case 21: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnFileSystemInstanceReady_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onFileSystemInstanceReady');
          const result = this.impl.onFileSystemInstanceReady(params.arg_instance_remote);
          break;
        }
        case 22: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnIioSensorInstanceReady_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onIioSensorInstanceReady');
          const result = this.impl.onIioSensorInstanceReady(params.arg_instance_remote);
          break;
        }
        case 23: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnImeInstanceReady_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onImeInstanceReady');
          const result = this.impl.onImeInstanceReady(params.arg_instance_remote);
          break;
        }
        case 24: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnInputMethodManagerInstanceReady_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onInputMethodManagerInstanceReady');
          const result = this.impl.onInputMethodManagerInstanceReady(params.arg_instance_remote);
          break;
        }
        case 25: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnIntentHelperInstanceReady_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onIntentHelperInstanceReady');
          const result = this.impl.onIntentHelperInstanceReady(params.arg_instance_remote);
          break;
        }
        case 26: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnKeymasterInstanceReady_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onKeymasterInstanceReady');
          const result = this.impl.onKeymasterInstanceReady(params.arg_instance_remote);
          break;
        }
        case 27: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnKeyMintInstanceReady_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onKeyMintInstanceReady');
          const result = this.impl.onKeyMintInstanceReady(params.arg_instance_remote);
          break;
        }
        case 28: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnKioskInstanceReady_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onKioskInstanceReady');
          const result = this.impl.onKioskInstanceReady(params.arg_instance_remote);
          break;
        }
        case 29: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnMediaSessionInstanceReady_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onMediaSessionInstanceReady');
          const result = this.impl.onMediaSessionInstanceReady(params.arg_instance_remote);
          break;
        }
        case 30: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnMemoryInstanceReady_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onMemoryInstanceReady');
          const result = this.impl.onMemoryInstanceReady(params.arg_instance_remote);
          break;
        }
        case 31: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnMetricsInstanceReady_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onMetricsInstanceReady');
          const result = this.impl.onMetricsInstanceReady(params.arg_instance_remote);
          break;
        }
        case 32: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnMidisInstanceReady_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onMidisInstanceReady');
          const result = this.impl.onMidisInstanceReady(params.arg_instance_remote);
          break;
        }
        case 33: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnNearbyShareInstanceReady_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onNearbyShareInstanceReady');
          const result = this.impl.onNearbyShareInstanceReady(params.arg_instance_remote);
          break;
        }
        case 34: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnNetInstanceReady_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onNetInstanceReady');
          const result = this.impl.onNetInstanceReady(params.arg_instance_remote);
          break;
        }
        case 35: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnNotificationsInstanceReady_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onNotificationsInstanceReady');
          const result = this.impl.onNotificationsInstanceReady(params.arg_instance_remote);
          break;
        }
        case 36: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnObbMounterInstanceReady_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onObbMounterInstanceReady');
          const result = this.impl.onObbMounterInstanceReady(params.arg_instance_remote);
          break;
        }
        case 37: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnOemCryptoInstanceReady_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onOemCryptoInstanceReady');
          const result = this.impl.onOemCryptoInstanceReady(params.arg_instance_remote);
          break;
        }
        case 38: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnPaymentAppInstanceReady_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onPaymentAppInstanceReady');
          const result = this.impl.onPaymentAppInstanceReady(params.arg_instance_remote);
          break;
        }
        case 39: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnPipInstanceReady_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onPipInstanceReady');
          const result = this.impl.onPipInstanceReady(params.arg_instance_remote);
          break;
        }
        case 40: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnPolicyInstanceReady_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onPolicyInstanceReady');
          const result = this.impl.onPolicyInstanceReady(params.arg_instance_remote);
          break;
        }
        case 41: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnPowerInstanceReady_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onPowerInstanceReady');
          const result = this.impl.onPowerInstanceReady(params.arg_instance_remote);
          break;
        }
        case 42: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnPrintSpoolerInstanceReady_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onPrintSpoolerInstanceReady');
          const result = this.impl.onPrintSpoolerInstanceReady(params.arg_instance_remote);
          break;
        }
        case 43: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnPrivacyItemsInstanceReady_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onPrivacyItemsInstanceReady');
          const result = this.impl.onPrivacyItemsInstanceReady(params.arg_instance_remote);
          break;
        }
        case 44: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnProcessInstanceReady_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onProcessInstanceReady');
          const result = this.impl.onProcessInstanceReady(params.arg_instance_remote);
          break;
        }
        case 45: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnScreenCaptureInstanceReady_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onScreenCaptureInstanceReady');
          const result = this.impl.onScreenCaptureInstanceReady(params.arg_instance_remote);
          break;
        }
        case 46: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnSharesheetInstanceReady_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onSharesheetInstanceReady');
          const result = this.impl.onSharesheetInstanceReady(params.arg_instance_remote);
          break;
        }
        case 47: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnSystemStateInstanceReady_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onSystemStateInstanceReady');
          const result = this.impl.onSystemStateInstanceReady(params.arg_instance_remote);
          break;
        }
        case 48: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnSystemUiInstanceReady_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onSystemUiInstanceReady');
          const result = this.impl.onSystemUiInstanceReady(params.arg_instance_remote);
          break;
        }
        case 49: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnTimerInstanceReady_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onTimerInstanceReady');
          const result = this.impl.onTimerInstanceReady(params.arg_instance_remote);
          break;
        }
        case 50: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnTracingInstanceReady_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onTracingInstanceReady');
          const result = this.impl.onTracingInstanceReady(params.arg_instance_remote);
          break;
        }
        case 51: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnTtsInstanceReady_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onTtsInstanceReady');
          const result = this.impl.onTtsInstanceReady(params.arg_instance_remote);
          break;
        }
        case 52: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnUsbHostInstanceReady_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onUsbHostInstanceReady');
          const result = this.impl.onUsbHostInstanceReady(params.arg_instance_remote);
          break;
        }
        case 53: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnVideoInstanceReady_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onVideoInstanceReady');
          const result = this.impl.onVideoInstanceReady(params.arg_instance_remote);
          break;
        }
        case 54: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnVolumeMounterInstanceReady_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onVolumeMounterInstanceReady');
          const result = this.impl.onVolumeMounterInstanceReady(params.arg_instance_remote);
          break;
        }
        case 55: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnWakeLockInstanceReady_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onWakeLockInstanceReady');
          const result = this.impl.onWakeLockInstanceReady(params.arg_instance_remote);
          break;
        }
        case 56: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnWallpaperInstanceReady_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onWallpaperInstanceReady');
          const result = this.impl.onWallpaperInstanceReady(params.arg_instance_remote);
          break;
        }
        case 57: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnWebApkInstanceReady_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onWebApkInstanceReady');
          const result = this.impl.onWebApkInstanceReady(params.arg_instance_ptr);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.arc.mojom.ArcBridgeHostReceiver = mojo.internal.bindings.arc.mojom.ArcBridgeHostReceiver;

mojo.internal.bindings.arc.mojom.ArcBridgeHostPtr = mojo.internal.bindings.arc.mojom.ArcBridgeHostRemote;
mojo.internal.bindings.arc.mojom.ArcBridgeHostRequest = mojo.internal.bindings.arc.mojom.ArcBridgeHostPendingReceiver;


// Specs (at the end to ensure classes are defined for InterfaceProxy)
mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnAccessibilityHelperInstanceReady_ParamsSpec, 'arc.mojom.ArcBridgeHost_OnAccessibilityHelperInstanceReady_Params', [
      mojo.internal.StructField('arg_instance_remote', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.ax.android.mojom.AccessibilityHelperInstanceRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnAdbdMonitorInstanceReady_ParamsSpec, 'arc.mojom.ArcBridgeHost_OnAdbdMonitorInstanceReady_Params', [
      mojo.internal.StructField('arg_instance_remote', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.arc.mojom.AdbdMonitorInstanceRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnAppInstanceReady_ParamsSpec, 'arc.mojom.ArcBridgeHost_OnAppInstanceReady_Params', [
      mojo.internal.StructField('arg_instance_remote', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.arc.mojom.AppInstanceRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnAppPermissionsInstanceReady_ParamsSpec, 'arc.mojom.ArcBridgeHost_OnAppPermissionsInstanceReady_Params', [
      mojo.internal.StructField('arg_instance_remote', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.arc.mojom.AppPermissionsInstanceRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnAppfuseInstanceReady_ParamsSpec, 'arc.mojom.ArcBridgeHost_OnAppfuseInstanceReady_Params', [
      mojo.internal.StructField('arg_instance_remote', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.arc.mojom.AppfuseInstanceRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnArcShellExecutionInstanceReady_ParamsSpec, 'arc.mojom.ArcBridgeHost_OnArcShellExecutionInstanceReady_Params', [
      mojo.internal.StructField('arg_instance_remote', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.arc.mojom.ArcShellExecutionInstanceRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnArcWifiInstanceReady_ParamsSpec, 'arc.mojom.ArcBridgeHost_OnArcWifiInstanceReady_Params', [
      mojo.internal.StructField('arg_instance_remote', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.arc.mojom.ArcWifiInstanceRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnAudioInstanceReady_ParamsSpec, 'arc.mojom.ArcBridgeHost_OnAudioInstanceReady_Params', [
      mojo.internal.StructField('arg_instance_remote', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.arc.mojom.AudioInstanceRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnAuthInstanceReady_ParamsSpec, 'arc.mojom.ArcBridgeHost_OnAuthInstanceReady_Params', [
      mojo.internal.StructField('arg_instance_remote', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.arc.mojom.AuthInstanceRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnBackupSettingsInstanceReady_ParamsSpec, 'arc.mojom.ArcBridgeHost_OnBackupSettingsInstanceReady_Params', [
      mojo.internal.StructField('arg_instance_remote', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.arc.mojom.BackupSettingsInstanceRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnBluetoothInstanceReady_ParamsSpec, 'arc.mojom.ArcBridgeHost_OnBluetoothInstanceReady_Params', [
      mojo.internal.StructField('arg_instance_remote', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.arc.mojom.BluetoothInstanceRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnBootPhaseMonitorInstanceReady_ParamsSpec, 'arc.mojom.ArcBridgeHost_OnBootPhaseMonitorInstanceReady_Params', [
      mojo.internal.StructField('arg_instance_remote', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.arc.mojom.BootPhaseMonitorInstanceRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnCameraInstanceReady_ParamsSpec, 'arc.mojom.ArcBridgeHost_OnCameraInstanceReady_Params', [
      mojo.internal.StructField('arg_instance_remote', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.arc.mojom.CameraInstanceRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnChromeFeatureFlagsInstanceReady_ParamsSpec, 'arc.mojom.ArcBridgeHost_OnChromeFeatureFlagsInstanceReady_Params', [
      mojo.internal.StructField('arg_instance_remote', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.arc.mojom.ChromeFeatureFlagsInstanceRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnCompatibilityModeInstanceReady_ParamsSpec, 'arc.mojom.ArcBridgeHost_OnCompatibilityModeInstanceReady_Params', [
      mojo.internal.StructField('arg_instance_remote', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.arc.mojom.CompatibilityModeInstanceRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnCrashCollectorInstanceReady_ParamsSpec, 'arc.mojom.ArcBridgeHost_OnCrashCollectorInstanceReady_Params', [
      mojo.internal.StructField('arg_instance_remote', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.arc.mojom.CrashCollectorInstanceRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnOnDeviceSafetyInstanceReady_ParamsSpec, 'arc.mojom.ArcBridgeHost_OnOnDeviceSafetyInstanceReady_Params', [
      mojo.internal.StructField('arg_instance_remote', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.arc.mojom.OnDeviceSafetyInstanceRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnDigitalGoodsInstanceReady_ParamsSpec, 'arc.mojom.ArcBridgeHost_OnDigitalGoodsInstanceReady_Params', [
      mojo.internal.StructField('arg_instance_remote', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.arc.mojom.DigitalGoodsInstanceRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnDiskSpaceInstanceReady_ParamsSpec, 'arc.mojom.ArcBridgeHost_OnDiskSpaceInstanceReady_Params', [
      mojo.internal.StructField('arg_instance_remote', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.arc.mojom.DiskSpaceInstanceRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnEnterpriseReportingInstanceReady_ParamsSpec, 'arc.mojom.ArcBridgeHost_OnEnterpriseReportingInstanceReady_Params', [
      mojo.internal.StructField('arg_instance_remote', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.arc.mojom.EnterpriseReportingInstanceRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnErrorNotificationInstanceReady_ParamsSpec, 'arc.mojom.ArcBridgeHost_OnErrorNotificationInstanceReady_Params', [
      mojo.internal.StructField('arg_instance_remote', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.arc.mojom.ErrorNotificationInstanceRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnFileSystemInstanceReady_ParamsSpec, 'arc.mojom.ArcBridgeHost_OnFileSystemInstanceReady_Params', [
      mojo.internal.StructField('arg_instance_remote', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.arc.mojom.FileSystemInstanceRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnIioSensorInstanceReady_ParamsSpec, 'arc.mojom.ArcBridgeHost_OnIioSensorInstanceReady_Params', [
      mojo.internal.StructField('arg_instance_remote', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.arc.mojom.IioSensorInstanceRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnImeInstanceReady_ParamsSpec, 'arc.mojom.ArcBridgeHost_OnImeInstanceReady_Params', [
      mojo.internal.StructField('arg_instance_remote', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.arc.mojom.ImeInstanceRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnInputMethodManagerInstanceReady_ParamsSpec, 'arc.mojom.ArcBridgeHost_OnInputMethodManagerInstanceReady_Params', [
      mojo.internal.StructField('arg_instance_remote', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.arc.mojom.InputMethodManagerInstanceRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnIntentHelperInstanceReady_ParamsSpec, 'arc.mojom.ArcBridgeHost_OnIntentHelperInstanceReady_Params', [
      mojo.internal.StructField('arg_instance_remote', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.arc.mojom.IntentHelperInstanceRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnKeymasterInstanceReady_ParamsSpec, 'arc.mojom.ArcBridgeHost_OnKeymasterInstanceReady_Params', [
      mojo.internal.StructField('arg_instance_remote', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.arc.mojom.KeymasterInstanceRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnKeyMintInstanceReady_ParamsSpec, 'arc.mojom.ArcBridgeHost_OnKeyMintInstanceReady_Params', [
      mojo.internal.StructField('arg_instance_remote', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.keymint.KeyMintInstanceSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnKioskInstanceReady_ParamsSpec, 'arc.mojom.ArcBridgeHost_OnKioskInstanceReady_Params', [
      mojo.internal.StructField('arg_instance_remote', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.arc.mojom.KioskInstanceRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnMediaSessionInstanceReady_ParamsSpec, 'arc.mojom.ArcBridgeHost_OnMediaSessionInstanceReady_Params', [
      mojo.internal.StructField('arg_instance_remote', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.arc.mojom.MediaSessionInstanceRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnMemoryInstanceReady_ParamsSpec, 'arc.mojom.ArcBridgeHost_OnMemoryInstanceReady_Params', [
      mojo.internal.StructField('arg_instance_remote', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.arc.mojom.MemoryInstanceRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnMetricsInstanceReady_ParamsSpec, 'arc.mojom.ArcBridgeHost_OnMetricsInstanceReady_Params', [
      mojo.internal.StructField('arg_instance_remote', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.arc.mojom.MetricsInstanceRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnMidisInstanceReady_ParamsSpec, 'arc.mojom.ArcBridgeHost_OnMidisInstanceReady_Params', [
      mojo.internal.StructField('arg_instance_remote', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.arc.mojom.MidisInstanceRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnNearbyShareInstanceReady_ParamsSpec, 'arc.mojom.ArcBridgeHost_OnNearbyShareInstanceReady_Params', [
      mojo.internal.StructField('arg_instance_remote', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.arc.mojom.NearbyShareInstanceRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnNetInstanceReady_ParamsSpec, 'arc.mojom.ArcBridgeHost_OnNetInstanceReady_Params', [
      mojo.internal.StructField('arg_instance_remote', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.arc.mojom.NetInstanceRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnNotificationsInstanceReady_ParamsSpec, 'arc.mojom.ArcBridgeHost_OnNotificationsInstanceReady_Params', [
      mojo.internal.StructField('arg_instance_remote', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.arc.mojom.NotificationsInstanceRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnObbMounterInstanceReady_ParamsSpec, 'arc.mojom.ArcBridgeHost_OnObbMounterInstanceReady_Params', [
      mojo.internal.StructField('arg_instance_remote', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.arc.mojom.ObbMounterInstanceRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnOemCryptoInstanceReady_ParamsSpec, 'arc.mojom.ArcBridgeHost_OnOemCryptoInstanceReady_Params', [
      mojo.internal.StructField('arg_instance_remote', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.arc.mojom.OemCryptoInstanceRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnPaymentAppInstanceReady_ParamsSpec, 'arc.mojom.ArcBridgeHost_OnPaymentAppInstanceReady_Params', [
      mojo.internal.StructField('arg_instance_remote', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.chromeos.payments.mojom.PaymentAppInstanceRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnPipInstanceReady_ParamsSpec, 'arc.mojom.ArcBridgeHost_OnPipInstanceReady_Params', [
      mojo.internal.StructField('arg_instance_remote', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.arc.mojom.PipInstanceRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnPolicyInstanceReady_ParamsSpec, 'arc.mojom.ArcBridgeHost_OnPolicyInstanceReady_Params', [
      mojo.internal.StructField('arg_instance_remote', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.arc.mojom.PolicyInstanceRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnPowerInstanceReady_ParamsSpec, 'arc.mojom.ArcBridgeHost_OnPowerInstanceReady_Params', [
      mojo.internal.StructField('arg_instance_remote', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.arc.mojom.PowerInstanceRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnPrintSpoolerInstanceReady_ParamsSpec, 'arc.mojom.ArcBridgeHost_OnPrintSpoolerInstanceReady_Params', [
      mojo.internal.StructField('arg_instance_remote', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.arc.mojom.PrintSpoolerInstanceRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnPrivacyItemsInstanceReady_ParamsSpec, 'arc.mojom.ArcBridgeHost_OnPrivacyItemsInstanceReady_Params', [
      mojo.internal.StructField('arg_instance_remote', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.arc.mojom.PrivacyItemsInstanceRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnProcessInstanceReady_ParamsSpec, 'arc.mojom.ArcBridgeHost_OnProcessInstanceReady_Params', [
      mojo.internal.StructField('arg_instance_remote', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.arc.mojom.ProcessInstanceRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnScreenCaptureInstanceReady_ParamsSpec, 'arc.mojom.ArcBridgeHost_OnScreenCaptureInstanceReady_Params', [
      mojo.internal.StructField('arg_instance_remote', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.arc.mojom.ScreenCaptureInstanceRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnSharesheetInstanceReady_ParamsSpec, 'arc.mojom.ArcBridgeHost_OnSharesheetInstanceReady_Params', [
      mojo.internal.StructField('arg_instance_remote', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.arc.mojom.SharesheetInstanceRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnSystemStateInstanceReady_ParamsSpec, 'arc.mojom.ArcBridgeHost_OnSystemStateInstanceReady_Params', [
      mojo.internal.StructField('arg_instance_remote', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.arc.mojom.SystemStateInstanceRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnSystemUiInstanceReady_ParamsSpec, 'arc.mojom.ArcBridgeHost_OnSystemUiInstanceReady_Params', [
      mojo.internal.StructField('arg_instance_remote', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.arc.mojom.SystemUiInstanceRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnTimerInstanceReady_ParamsSpec, 'arc.mojom.ArcBridgeHost_OnTimerInstanceReady_Params', [
      mojo.internal.StructField('arg_instance_remote', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.arc.mojom.TimerInstanceRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnTracingInstanceReady_ParamsSpec, 'arc.mojom.ArcBridgeHost_OnTracingInstanceReady_Params', [
      mojo.internal.StructField('arg_instance_remote', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.arc.mojom.TracingInstanceRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnTtsInstanceReady_ParamsSpec, 'arc.mojom.ArcBridgeHost_OnTtsInstanceReady_Params', [
      mojo.internal.StructField('arg_instance_remote', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.arc.mojom.TtsInstanceRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnUsbHostInstanceReady_ParamsSpec, 'arc.mojom.ArcBridgeHost_OnUsbHostInstanceReady_Params', [
      mojo.internal.StructField('arg_instance_remote', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.arc.mojom.UsbHostInstanceRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnVideoInstanceReady_ParamsSpec, 'arc.mojom.ArcBridgeHost_OnVideoInstanceReady_Params', [
      mojo.internal.StructField('arg_instance_remote', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.arc.mojom.VideoInstanceRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnVolumeMounterInstanceReady_ParamsSpec, 'arc.mojom.ArcBridgeHost_OnVolumeMounterInstanceReady_Params', [
      mojo.internal.StructField('arg_instance_remote', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.arc.mojom.VolumeMounterInstanceRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnWakeLockInstanceReady_ParamsSpec, 'arc.mojom.ArcBridgeHost_OnWakeLockInstanceReady_Params', [
      mojo.internal.StructField('arg_instance_remote', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.arc.mojom.WakeLockInstanceRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnWallpaperInstanceReady_ParamsSpec, 'arc.mojom.ArcBridgeHost_OnWallpaperInstanceReady_Params', [
      mojo.internal.StructField('arg_instance_remote', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.arc.mojom.WallpaperInstanceRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnWebApkInstanceReady_ParamsSpec, 'arc.mojom.ArcBridgeHost_OnWebApkInstanceReady_Params', [
      mojo.internal.StructField('arg_instance_ptr', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.arc.mojom.WebApkInstanceRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

