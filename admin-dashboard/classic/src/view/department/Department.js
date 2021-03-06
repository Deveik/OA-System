﻿/**
*订单模块主视图
	在主视图配置viewController和viewModel，
	那么主视图的子视图也可以访问配置好viewController和viewModel。
*/
Ext.define('Admin.view.department.Department', {		//1.修改文件路径
    extend: 'Ext.container.Container',	//2.继承的组件类型
	xtype: 'department',
	height:Ext.Element.getViewportHeight()-200,//必须设置高，否则无法使用border布局
    controller: 'departmentViewController',		
    viewModel : {type: 'departmentViewModel'},	
	requires: [
        'Ext.layout.container.Border'
    ],
    layout:'border',
    margin: '20 20 20 20',
    items: [{
		title: '部门设置',
		region:'west',
		width: 550,
		collapsible: true,
		margins: '5 0 0 0',
		cmargins: '5 5 0 0',
		split: true,
		xtype: 'departmentTree'
	},{
		title: '职位查看',
		region:'center',
		margins: '5 0 0 0',
		cmargins: '5 5 0 0',
		xtype: 'panel',
		layout:{
			type:'vbox',
			align: 'stretch'
		},
		items: [{
			text:'职位查看',
			//anchor:'-10,-100',
			xtype: 'postGrid',
			forceFit : false,
			height:'60%'
			}, {
			title:'职位设置',
			//anchor:'-10,-100',
			xtype: 'postForm'
		}],
	},

	]
});
