﻿/**
*订单模块子视图
*/
Ext.define('Admin.view.authority.AuthorityGrid', {		//1.修改文件路径
      extend: 'Ext.grid.Panel',					//2.继承的组件类型
	//3.重写继承组件的属性：
    xtype: 'authorityGrid',
	title:'<b>权限设置</b>',
	bind:'{userRoleLists}',
	id:'authorityGrid',
	selModel: Ext.create('Ext.selection.CheckboxModel'),
	columns: [
		{text: 'userId'	,sortable:true ,dataIndex:'userId',hidden:true},
		{text: 'roleId'	,sortable:true ,dataIndex:'roleId',hidden:true},
        {text: '用户名' ,sortable:true ,dataIndex:'userName' ,width:100},
        {text: '姓名名' ,sortable:true ,dataIndex:'realName' ,width:100},
		{text: '角色名称'  ,sortable:true ,dataIndex:'roleName'  ,width:100},
		{text: '所拥有的权限', sortable:true ,dataIndex:'modulesText' ,flex:1}
	],	


	tbar: Ext.create('Ext.Toolbar', {
			id: 'authorityCondition',
			items:[ {
				text: '修改权限',
				iconCls:'x-fa fa-edit',
				ui:'soft-blue',
				handler: 'roleGridEdit'
			},'-',{xtype:'tbtext',
				text:'用户名：'
			},{
				xtype:'textfield',
				width:100,
				itemsId:'userName'
				
			},{xtype:'tbtext',
				text:'姓名：'
			},{
				xtype:'textfield',
				width:100,
				itemsId:'realName'
				
			},{xtype:'tbtext',
				text:'角色名称：'
			},{
				xtype:'textfield',
				width:100,
				itemsId:'roleName'
				
			},{
				text: '查找',
				handler:'authorityGridFind'
			}]
	}),
	
	bbar: Ext.create('Ext.PagingToolbar', {
		bind:'{userRoleLists}',
		displayInfo: true,
		displayMsg: '第 {0} - {1}条， 共 {2}条',
		emptyMsg: "暂无数据",
	})
	
});