/**
 * Create New Form
 */
class CForm {
	
	/**
	 * Create New Form
	 * 
	 * @param {string} action Form's action attribute
	 * @param {string} method Form's method attribute
	 * @param {string} target Form's target attribute
	 */
	constructor(action, method, target) {
		if (action == null || action == '') throw new DOMException('action is null!!');
		if (method == null || method == '') method = 'GET';
		if (target == null || target == '') target = '_self';
		
		this.form = document.createElement('form');
		this.form.setAttribute('action', action);		
		this.form.setAttribute('method', method);
		this.form.setAttribute('target', target);
		this.form.setAttribute('style', 'display:none;');
	}
	
	/**
	 * Add Parameter
	 * 
	 * @param {string} name Input's name attribute
	 * @param {value} value Input's value attribute
	 * @returns this
	 */
	setData(name, value) {
		if (name == null || name == '') throw new DOMException('name is null!!');
		if (value == null || value == '') throw new DOMException('value is null!!');
		
		var obj = document.createElement('input');
		obj.setAttribute('type', 'hidden');
		obj.setAttribute('name', name);
		obj.setAttribute('value', value);
		this.form.appendChild(obj);
		
		return this;
	}
	
	/**
	 * Submit Form
	 */
	submit() {
		document.body.appendChild(this.form);

		this.form.submit();

		document.body.removeChild(this.form);
	}
	
}
