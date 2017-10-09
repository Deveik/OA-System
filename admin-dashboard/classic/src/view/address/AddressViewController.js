Ext.define('Admin.view.address.AddressViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.addressViewController',

    addressGridSearch: function(bt) {
		var searchField = this.lookupReference('addressGridSearchField').getValue();
		alert(searchField);
		var searchText = this.lookupReference('addressGridSearchText').getValue();
		Ext.Ajax.request({ 
			url : 'staff/findByPage', 
			params : { 
                    realName:searchText,
					dept:searchField,
					page:1,
					start:0,
					limit:25,
					sort:'userId',
					dir:'DESC'
			},
			success: function(response, options){
				var tnpdata= Ext.util.JSON.decode(response.responseText) ;
				Ext.getCmp('addressGrid').getStore().loadData(tnpdata.content,false);
			}
			
	   });
	}
});