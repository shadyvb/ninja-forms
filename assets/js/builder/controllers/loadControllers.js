define(
	[
		'builder/controllers/hotkeys',
		'builder/controllers/fieldTypes',
		'builder/controllers/fieldTypeSections',
		'builder/controllers/drawerFieldTypeDrag',
		'builder/controllers/drawerStagingDrag',
		'builder/controllers/drawerSavedFields',
		'builder/controllers/drawerStagedFieldsData',
		'builder/controllers/drawerStagedFieldsSortable',
		'builder/controllers/drawer',
		'builder/controllers/drawerData',
		'builder/controllers/drawerFilterFieldTypes',
		'builder/controllers/appDomain',
		'builder/controllers/appData',
		'builder/controllers/mainContentFieldsSortable',
		'builder/controllers/fieldData',
		'builder/controllers/fieldClick',
		'builder/controllers/drawerToggleSettingGroup',
		'builder/controllers/changeFieldSetting',
		'builder/controllers/changeToggleSetting',
		'builder/controllers/drawerFieldTypeSettingChildView',
		'builder/controllers/fieldset',
		'builder/controllers/fieldList'

	],
	function(
		Hotkeys,
		FieldTypes,
		FieldTypeSections,
		FieldTypeDrag,
		FieldStagingDrag,
		SavedFields,
		StagedFieldsData,
		StagedFieldsSortable,
		Drawer,
		DrawerData,
		DrawerFilterFieldTypes,
		AppDomain,
		AppData,
		MainContentFieldsSortable,
		FieldData,
		FieldClick,
		DrawerToggleSettingGroup,
		ChangeFieldSetting,
		ChangeToggleSetting,
		DrawerFieldTypeSettingChildView,
		Fieldset,
		FieldList
	) {
		var controller = Marionette.Object.extend( {
			initialize: function() {
				var hotkeys = new Hotkeys();
				var fieldTypes = new FieldTypes();
				var fieldTypeSections = new FieldTypeSections();
				var fieldTypeDrag = new FieldTypeDrag();
				var fieldStagingDrag = new FieldStagingDrag();
				var savedFields = new SavedFields();
				var stagedFieldsData = new StagedFieldsData();
				var stagedFieldsSortable = new StagedFieldsSortable();
				var drawer = new Drawer();
				var drawerData = new DrawerData();
				var drawerFilterFieldTypes = new DrawerFilterFieldTypes();
				var appDomain = new AppDomain();
				var appData = new AppData();
				var mainContentFieldsSortable = new MainContentFieldsSortable();
				var fieldData = new FieldData();
				var fieldClick = new FieldClick();
				var drawerToggleSettingGroup = new DrawerToggleSettingGroup();
				var changeFieldSetting = new ChangeFieldSetting();
				var changeToggleSetting = new ChangeToggleSetting();
				var drawerFieldTypeSettingChildView = new DrawerFieldTypeSettingChildView();
				var fieldset = new Fieldset();
				var fieldList = new FieldList();
			}
		});

		return controller;
} );
