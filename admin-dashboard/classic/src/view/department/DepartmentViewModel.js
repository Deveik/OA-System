/**
	1.绑定到主视图
	2.通过bind属性绑定到具体的子视图
8*/
Ext.define('Admin.view.department.DepartmentViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.departmentViewModel',
	stores: {
        deptLists: {
            type: 'departmentStore',
            autoLoad: true
        },
		postLists: {
            type: 'postStore',//Store reference ==Store的属性 alias: 'store.orderStore',		
            autoLoad: true //Auto load
        }
    }
});
