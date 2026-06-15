'use strict';
'require form';
'require view';

return view.extend({
	render: function () {
		var m, s, o;

		m = new form.Map('mgmtlanip', _('mgmtlanip'),
			_('mgmtlanip is a Mgmt LanIP Script daemon, here you can configure the settings.'));

		s = m.section(form.TypedSection, 'mgmtlanip');
		s.anonymous = true;
		s.addremove = true;

		o = s.option(form.Flag, 'disabled', _('Enabled'));
		o.enabled = '0';
		o.disabled = '1';
		o.default = o.disabled;
		o.rmempty = false;

		o = s.option(form.Value, 'second', _('Cycle Second'));
		o.default = 10;
		o.datatype = 'range(3, 59)';
		o.rmempty = false;

		o = s.option(form.Flag, 'respawn', _('Respawn'));
		o.default = '1';
		o.rmempty = false;

		o = s.option(form.Value, 'interface_br_name', _('Interface br Name'));
		o.default = 'br-lan';
		o.rmempty = true;

		o = s.option(form.Value, 'interface_br_index', _('Interface br Index'));
		o.default = '0';
		o.datatype = 'range(0, 10)';
		o.rmempty = true;

		o = s.option(form.Value, 'ipv4_br_address', _('IPv4 br Address'));
		o.default = '192.168.111.1';
		o.rmempty = true;

		o = s.option(form.Value, 'ipv4_br_netmask', _('IPv4 br Netmask'));
		o.default = '255.255.255.0';
		o.rmempty = true;

		return m.render();
	}
});
