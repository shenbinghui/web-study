 class Parent{
	constructor(){
        this.name = 'parent';
        console.log('parent constructor');
	}

	work(){
		console.log(this.name);
	}

	cook(){
		console.log('i want to cook');
	}
}


module.exports = Parent;
