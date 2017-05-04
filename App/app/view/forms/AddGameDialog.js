/*
 * File: app/view/forms/AddGameDialog.js
 *
 * This file was generated by Sencha Architect
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 6.5.x Modern library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 6.5.x Modern. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('Enif.view.forms.AddGameDialog', {
    extend: 'Ext.Dialog',
    alias: 'widget.forms.addgamedialog',

    requires: [
        'Enif.view.forms.AddGameDialogViewModel',
        'Enif.view.forms.AddGameForm',
        'Ext.form.Panel'
    ],

    viewModel: {
        type: 'forms.addgamedialog'
    },
    buttons: {
        close: function() {  
            this.up('dialog').destroy();
        }
    },

    items: [
        {
            xtype: 'forms.addgameform'
        }
    ]

});