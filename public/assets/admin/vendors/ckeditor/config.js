/**
 * @license Copyright (c) 2003-2019, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see https://ckeditor.com/legal/ckeditor-oss-license
 */

CKEDITOR.editorConfig = function( config ) {
	// Define changes to default configuration here. For example:
	// config.language = 'fr';
	// config.uiColor = '#AADC6E';
	config.extraPlugins = 'uploadimage';
	config.extraPlugins = 'uploadwidget';
	config.extraPlugins = 'filebrowser';
	config.extraPlugins = 'popup';
	config.extraPlugins = 'filetools';
//	config.filebrowserBrowseUrl = '/browser/browse.php';
//	config.filebrowserUploadUrl = '/uploader/upload.php';
	config.extraPlugins = 'image2';

	config.filebrowserBrowseUrl= 'ckfinder/ckfinder.html';
    config.filebrowserImageBrowseUrl= 'ckfinder/ckfinder.html?Type=Images';
    config.filebrowserUploadUrl = 'ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Files';
    config.filebrowserImageUploadUrl =  'ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Images';
    config.filebrowserWindowWidth = '1000';
    config.filebrowserWindowHeight = '700';

};

