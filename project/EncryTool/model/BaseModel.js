class BaseModel{
	constructor(baseModel){
		this.baseModel = baseModel;
	}
    
    /*common part*/
	add(data){
        return this.baseModel.create(data);
	}

	delete(contidion){
        return this.baseModel.remove(contidion).exec();
	}

	modefy(condition,data){
        return this.baseModel.update(condition,data).exec();
	}

	find(condition){
        return this.baseModel.find(condition).exec();
	}
	count(condition){
		return this.baseModel.where(condition).count().exec();
	}	
};

module.exports =  BaseModel;


